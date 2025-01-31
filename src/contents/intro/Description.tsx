import Body from "@components/Body";
import { Box } from "@mui/material";

const Description = () => {
  return (
    <Box
      sx={{
        marginX: { xs: "48px", sm: "48px", md: "48px" },
      }}
    >
      <Body>
        저는 온라인 네트워크에 정보를 시각적으로 전달하는 업무를 수행합니다.
      </Body>
      <Body>
        같은 정보를 전달하더라도 "프론트엔드"의 역량에 따라 해당 정보의 매력이
        크게 좌우됩니다.
      </Body>
      <Body>
        AI, 빅데이터, 웹게임, 커뮤니티 등 여러도메인을 경험하며 제가 가진 기술적
        능력을 실용적이고 생산적인 방법으로 응용할 수 있는 방법을 찾고 있습니다.
      </Body>
    </Box>
  );
};

export default Description;
