import { initSpriteData } from "@engine/lib/game/data/spriteData";
import main from "@engine/lib/main";
import { usePlanetData } from "@hooks/usePlanetData";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect } from "react";
import Description from "./Description";
import Title from "./Title";

const Intro = () => {
  const data = usePlanetData();
  useEffect(() => {
    if (document) {
      initSpriteData(data);
      main(document, () => {});
    }
  }, []);
  return (
    <>
      <Box
        sx={{
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
            backgroundColor: grey[700],
          }}
        />
        <Title />
        <Description />
      </Box>
    </>
  );
};

export default Intro;
