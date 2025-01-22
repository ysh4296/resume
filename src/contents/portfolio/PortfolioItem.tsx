import { useEffect, useRef, useState } from "react";
import PortfolioDetail from "./PortfolioDetail";

interface PortfolioItemProps {
  portfolio: Queries.GetAllPostsQuery["allSanityPost"]["nodes"][number];
}

const PortfolioItem = ({ portfolio }: PortfolioItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // 10%가 보일 때 트리거
      },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* Portfolio Item */}
      <div
        ref={itemRef}
        style={{
          ...styles.card,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          filter: isVisible ? "blur(0)" : "blur(5px)",
          transition:
            "opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease",
          cursor: "pointer", // 클릭 가능하도록 커서 변경
        }}
        onClick={() => toggleDrawer(true)} // 클릭 시 Drawer 열기
      >
        {/* 이미지 */}
        {/* {portfolio.image && (
          <div style={styles.imageWrapper}>
            <img
              src={portfolio.image.asset.url}
              alt={portfolio.title}
              style={styles.image}
            />
          </div>
        )} */}

        {/* 콘텐츠 */}
        <div style={styles.content}>
          <div style={styles.title}>{portfolio.title}</div>
          <div style={styles.description}>{portfolio.description}</div>
          <div style={styles.date}>
            {portfolio.startDate} ~ {portfolio.endDate}
          </div>
        </div>
      </div>

      <PortfolioDetail
        isOpen={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        portfolio={portfolio}
      />
    </>
  );
};

export default PortfolioItem;

/**
 * @todo
 * add style
 */
// 스타일링 객체
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    display: "flex",
    flexDirection: "row", // 이미지와 텍스트를 나란히 배치
    alignItems: "flex-start",
    borderBottom: "1px solid #ddd",
    overflow: "hidden",
    backgroundColor: "#fff",
    willChange: "opacity, transform, filter", // GPU 가속
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
