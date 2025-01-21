import { Typography } from "@mui/material";

const Header = ({ children }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: "grey.800", // 회색
        fontWeight: "bold", // 굵은 텍스트
        textAlign: "center", // 가운데 정렬
        padding: "16px 0", // 상하 여백
        lineHeight: 1.2, // 줄 간격
        "@media (max-width: 600px)": {
          fontSize: "1.5rem", // 모바일에서는 작은 크기
        },
        "@media (min-width: 601px)": {
          fontSize: "2rem", // 데스크톱에서는 기본 크기
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default Header;
