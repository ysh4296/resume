import {
  GatsbyImage,
  type IGatsbyImageData,
  getImage,
} from "gatsby-plugin-image";

interface JobItemProps {
  name: string;
  description: string;
  image: IGatsbyImageData | null;
  startDate: string;
  endDate: string;
}

const JobItem: React.FC<JobItemProps> = ({
  name,
  description,
  image,
  startDate,
  endDate,
}) => {
  const gatsbyImage = image ? getImage(image) : null;

  return (
    <div style={styles.container}>
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
      <div style={styles.contentWrapper}>
        <div style={styles.header}>
          <h2 style={styles.title}>{name}</h2>
        </div>
        <p style={styles.description}>{description}</p>
        <p style={styles.date}>
          <strong>근무 기간:</strong> {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default JobItem;

// 스타일링
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    padding: "16px",
    marginBottom: "16px",
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
    borderColor: "#ddd",
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
