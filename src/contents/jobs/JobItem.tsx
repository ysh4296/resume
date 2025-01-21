import {
  GatsbyImage,
  type IGatsbyImageData,
  getImage,
} from "gatsby-plugin-image";
import Markdown from "react-markdown";

interface JobItemProps {
  name: string;
  description: string;
  image: IGatsbyImageData | null; // Gatsby Image 데이터 타입
  startDate: string;
  endDate: string;
  content: string;
}

const JobItem: React.FC<JobItemProps> = ({
  name,
  description,
  image,
  startDate,
  endDate,
  content,
}) => {
  const gatsbyImage = image ? getImage(image) : null;

  return (
    <div style={styles.container}>
      {/* 이미지 */}
      {gatsbyImage && (
        <div style={styles.imageWrapper}>
          <GatsbyImage
            image={gatsbyImage}
            alt={name}
            style={styles.image}
            imgStyle={{
              objectFit: "contain", // 이미지를 컨테이너 크기에 맞게 비율 유지하며 축소
              objectPosition: "center", // 이미지 중앙 정렬
            }}
          />
        </div>
      )}

      {/* 내용 */}
      <div style={styles.contentWrapper}>
        <div style={styles.header}>
          <h2 style={styles.title}>{name}</h2>
        </div>
        <p style={styles.description}>{description}</p>
        <p style={styles.date}>
          <strong>근무 기간:</strong> {startDate} - {endDate}
        </p>

        {/* Markdown Content */}
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};

export default JobItem;

// 스타일링
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    gap: "16px",
  },
  imageWrapper: {
    flex: "0 0 150px", // 고정 너비
    height: "150px", // 고정 높이
    display: "flex",
    alignItems: "center", // 컨테이너 내부에서 이미지 수직 정렬
    justifyContent: "center", // 컨테이너 내부에서 이미지 수평 정렬
    backgroundColor: "#ffffff", // 빈 영역을 흰색으로 설정
    borderRadius: "8px",
    overflow: "hidden", // 컨테이너 밖의 이미지를 잘라냄
    border: "1px solid",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "8px",
  },
  date: {
    fontSize: "0.9rem",
    color: "#777",
    marginBottom: "16px",
  },
};
