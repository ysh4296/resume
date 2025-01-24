import main from "@engine/lib/main";
import { Box } from "@mui/material";
import { useEffect } from "react";
import Description from "./Description";
import Title from "./Title";
// import { initSpriteData } from "@engine/lib/game/data/spriteData";

const Intro = () => {
  useEffect(() => {
    if (document) {
      // initSpriteData();
      main(document, () => {});
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          // display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <canvas
          id="myCanvas"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            border: "1px solid #ddd",
            width: "400px",
            height: "400px",
            borderRadius: "8px",
          }}
        />
        <Title />
        <Description />
      </Box>
    </>
  );
};

export default Intro;
