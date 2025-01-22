import Description from "./Description";
import Title from "./Title";

const Intro = () => {
  return (
    <>
      <div style={styles.contentBox}>
        <Title />
        <Description />
      </div>
    </>
  );
};

export default Intro;

// 스타일 객체
const styles: { [key: string]: React.CSSProperties } = {
  contentBox: {
    padding: "16px",
    margin: "16px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 부드러운 그림자
    backgroundColor: "#fff", // 배경색 흰색
    height: "auto", // 높이는 내용에 따라 동적으로 설정
    overflow: "auto",
    border: "1px solid #ddd",
  },
};
