import Body from "@components/Body";
import { Box } from "@mui/material";

const Description = () => {
  return (
    <Box
      sx={{
        marginX: { xs: "48px", sm: "48px", md: "48px" },
      }}
    >
      <Body>저는 온라인 네트워크에 정보를 전달하는 업무를 수행합니다.</Body>
      <Body>
        같은 정보를 전달하더라도 "프론트엔드"의 역량에 따라 해당 정보의 매력이
        크게 좌우됩니다.
      </Body>
      <Body>
        빠르게 변화하는 기술을 이해하고 변화속도보다 빠르게 제품을 만들 수 있는
        개발자가 되고싶습니다.
      </Body>
    </Box>
  );
};

export default Description;
