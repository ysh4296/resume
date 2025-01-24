import { Link } from "@mui/material";
import { grey } from "@mui/material/colors";

const NavigationLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: grey[500],
        fontWeight: "bold", // 링크 강조
        borderRadius: "4px", // 부드러운 모서리
        transition: "color 0.3s, background-color 0.3s", // 애니메이션 효과
      }}
      onMouseOver={(e) => {
        const target = e.target as HTMLElement; // 명시적으로 캐스팅
        target.style.color = "#0056b3"; // 호버 시 어두운 파란색
      }}
      onMouseOut={(e) => {
        const target = e.target as HTMLElement; // 명시적으로 캐스팅
        target.style.color = grey[500]; // 기본 파란색 복원
      }}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
