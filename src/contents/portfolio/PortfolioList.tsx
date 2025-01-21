// import Body from "@components/Body";
// import ContentBox from "@components/ContentBox";
// import Header from "@components/Header";
import { graphql, useStaticQuery } from "gatsby";

const PortfolioList = () => {
  const data = useStaticQuery<any>(graphql`
    query GetAllPosts {
      sanity {
        allPost {
          title
          description
          slug {
            current
          }
          startDate
          endDate
          image {
            asset {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <div style={styles.listContainer}>
      {data.sanity.allPost.map((post) => (
        <article key={post.slug.current} style={styles.card}>
          {/* 이미지 */}
          {post.image && (
            <div style={styles.imageWrapper}>
              <img
                src={post.image.asset.url}
                alt={post.title}
                style={styles.image}
              />
            </div>
          )}

          {/* 콘텐츠 */}
          <div style={styles.content}>
            <div style={styles.title}>{post.title}</div>
            <div style={styles.description}>{post.description}</div>
            <div style={styles.date}>
              {post.startDate} ~ {post.endDate}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PortfolioList;

/**
 * @todo
 * add style
 */
// 스타일링 객체
const styles: { [key: string]: React.CSSProperties } = {
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px", // 각 카드 간격
    paddingTop: "16px",
  },
  card: {
    display: "flex",
    flexDirection: "row", // 이미지와 텍스트를 나란히 배치
    alignItems: "flex-start",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    // cursor: "pointer",
  },
  imageWrapper: {
    flex: "0 0 200px", // 이미지 고정 너비
    height: "200px", // 이미지 고정 높이
    overflow: "hidden",
    backgroundColor: "#f0f0f0", // 빈 영역 배경색
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 비율 유지하며 채우기
  },
  content: {
    flex: "1",
    padding: "16px",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "8px",
  },
  date: {
    fontSize: "0.875rem",
    color: "#777",
    marginTop: "8px",
  },
};
