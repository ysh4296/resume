import { registry } from "@engine/lib/main";
import Vector, { subVector, crossVector } from "@engine/lib/vector";

export default class Calculator {
  private static instance: Calculator;

  public static getInstance(): Calculator {
    if (!Calculator.instance) {
      Calculator.instance = new Calculator();
    }
    return Calculator.instance;
  }

  // basic concept from : https://en.wikipedia.org/wiki/Polygon
  calcCentroid = (vertices: Vector[]): Vector => {
    const A = this.calcArea(vertices);
    const length = vertices.length;
    const centroid = new Vector({ x: 0, y: 0 });

    for (let i = 0; i < length; i++) {
      const next = this.getIndex(i + 1, length);

      const xterm1 = vertices[i].x + vertices[next].x;
      const xterm2 =
        vertices[i].x * vertices[next].y - vertices[next].x * vertices[i].y;

      centroid.x += xterm1 * xterm2;

      const yterm1 = vertices[i].y + vertices[next].y;
      const yterm2 =
        vertices[i].x * vertices[next].y - vertices[next].x * vertices[i].y;

      centroid.y += yterm1 * yterm2;
    }
    centroid.x /= 6 * A;
    centroid.y /= 6 * A;

    return centroid;
  };

  // 다각형의 넓이를 구함
  calcArea = (vertices: Vector[]) => {
    let A = 0;
    const length = vertices.length;
    for (let i = 0; i < length; i++) {
      const next = this.getIndex(i + 1, length);
      A += vertices[i].x * vertices[next].y - vertices[i].y * vertices[next].x;
    }
    return A / 2;
  };

  getIndex = (index: number, arraySize: number): number => {
    return (index + arraySize) % arraySize;
  };

  rotateAroundPoint(target: Vector, position: Vector, radians: number) {
    const result = new Vector({ x: 0, y: 0 });

    const direction = subVector(target, position);
    result.x =
      direction.x * Math.cos(radians) - direction.y * Math.sin(radians);
    result.y =
      direction.x * Math.sin(radians) + direction.y * Math.cos(radians);
    result.add(position);
    return result;
  }

  calcNormals(vertices: Vector[]) {
    const normals: Vector[] = [];
    for (let i = 0; i < vertices.length; i++) {
      const next = this.getIndex(i + 1, vertices.length);
      const direction = subVector(vertices[next], vertices[i]);
      const normal = direction.getNormal();
      normal.normalize();
      normals.push(normal);
    }
    return normals;
  }

  clamp(value: number, max: number, min: number) {
    if (value > max) {
      return max;
    }
    if (value < min) {
      return min;
    }
    return value;
  }

  degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
  }

  /**
   * 두 RGBA 색상 값 사이의 중간 색상을 계산하는 함수
   * @param {Array} color1 - 첫 번째 색상, [R, G, B, A]
   * @param {Array} color2 - 두 번째 색상, [R, G, B, A]
   * @param {number} ratio - 중간 색상의 비율 (0에서 1 사이의 값)
   * @returns {Array} - 중간 색상, [R, G, B, A]
   */
  interpolateColor(color1: number[], color2: number[], ratio: number) {
    // 비율이 0보다 작거나 1보다 큰 경우 적절한 범위로 조정
    const ration = Math.min(Math.max(ratio, 0), 1);

    const r = Math.round(color1[0] + ration * (color2[0] - color1[0]));
    const g = Math.round(color1[1] + ration * (color2[1] - color1[1]));
    const b = Math.round(color1[2] + ration * (color2[2] - color1[2]));
    const a = color1[3] + ration * (color2[3] - color1[3]);

    return [r, g, b, a];
  }

  /**
   * HEX 색상 값을 RGBA 색상 값으로 변환하는 함수
   * @param {string} hex - HEX 색상 값 (예: #RRGGBB 또는 #RRGGBBAA)
   * @returns {Array} - RGBA 색상 값, [R, G, B, A]
   */
  hexToRgba(hex: string) {
    // HEX 색상 값을 정리
    let normalizedHex = hex.replace("#", "");

    // HEX 길이가 6자리인 경우 (RRGGBB)
    if (normalizedHex.length === 6) {
      normalizedHex += "FF"; // 불투명도 추가
    }

    // R, G, B, A 값을 추출
    const r = Number.parseInt(normalizedHex.slice(0, 2), 16);
    const g = Number.parseInt(normalizedHex.slice(2, 4), 16);
    const b = Number.parseInt(normalizedHex.slice(4, 6), 16);
    const a = Number.parseInt(normalizedHex.slice(6, 8), 16) / 255;

    return [r, g, b, a];
  }

  /**
   * RGBA 색상 값을 HEX 색상 값으로 변환하는 함수
   * @param {number} r - 빨강 값 (0-255)
   * @param {number} g - 초록 값 (0-255)
   * @param {number} b - 파랑 값 (0-255)
   * @param {number} a - 알파 값 (0-1)
   * @returns {string} - HEX 색상 값 (예: #RRGGBBAA)
   */
  rgbaToHex(rgba: number[]) {
    const toHex = (value: number) => {
      const hex = value.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };

    const rHex = toHex(rgba[0]);
    const gHex = toHex(rgba[1]);
    const bHex = toHex(rgba[2]);
    const aHex = toHex(Math.round(rgba[3] * 255));

    return `#${rHex}${gHex}${bHex}${aHex}`;
  }

  /**
   * 두 벡터 사이의 각도를 라디안으로 계산하는 함수
   * @param {Array} vectorA - 첫 번째 벡터, [x, y]
   * @param {Array} vectorB - 두 번째 벡터, [x, y]
   * @returns {number} - 라디안으로 표현된 각도
   */
  getAngleBetweenVectors(vectorA: Vector, vectorB: Vector) {
    // 벡터의 내적 계산
    const dotProduct = vectorA.getDotProduct(vectorB);
    const crossProduct = crossVector(vectorA, vectorB);

    // 벡터의 크기 계산
    const magnitudeA = vectorA.length();
    const magnitudeB = vectorB.length();

    let cosineTheta = dotProduct / (magnitudeA * magnitudeB);
    cosineTheta = Math.min(Math.max(cosineTheta, -1), 1);
    // 두 벡터 사이의 각도 계산
    let angle = Math.acos(cosineTheta);

    if (crossProduct < 0) angle *= -1;

    return angle;
  }

  /**
   * every object has their own id
   * @returns number id
   */
  generateObjectId() {
    return registry.createdId++;
  }

  /**
   * @param p0
   * @param p1
   * @param p2
   * @param p3
   * @param t x position between 0 to 1
   * @returns y position on bezier curve
   */
  calculateBezier(p0: number, p1: number, p2: number, p3: number, t: number) {
    return (
      (1 - t) ** 3 * p0 +
      3 * (1 - t) ** 2 * t * p1 +
      3 * (1 - t) * t ** 2 * p2 +
      t ** 3 * p3
    );
  }

  getRandomValue = (min, max) => Math.random() * (max - min) + min;
}
