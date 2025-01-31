import { registry } from "@engine/lib/main";
import Vector from "@engine/lib/vector";
import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import CustomSlider from "./customSlider";

const SimulationControl = ({
  onChangeParams,
}: {
  onChangeParams: (params: any) => void;
}) => {
  const [params, setParams] = useState({
    gravity: 0,
    elasticity: 0.7,
    friction: 0.3,
    airResistance: 0.01,
  });

  const handleSliderChange =
    (key: string) => (_event: Event, newValue: number) => {
      const updatedParams = { ...params, [key]: newValue };
      setParams(updatedParams);
      onChangeParams(updatedParams);
    };

  return (
    <Box
      sx={{
        width: "100%",
        paddingX: { xs: "16px", sm: "32px", md: "48px" },
      }}
    >
      <Typography variant="h6">제가 만든 물리엔진입니다.</Typography>
      <Typography
        variant="body1"
        color={grey[600]}
        sx={{ marginBottom: "16px" }}
      >
        slider와 canvas mouseEvent를 통해 오브젝트를 조작할 수 있습니다.
      </Typography>
      <Stack spacing={2}>
        <Box>
          <Typography>중력</Typography>
          <CustomSlider
            value={params.gravity}
            min={-10}
            max={10}
            step={1}
            onChange={(event: Event, value: number) => {
              handleSliderChange("gravity")(event, value);
              registry.engine.gravity = new Vector({ x: 0, y: value * 1000 });
            }}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box>
          <Typography>탄성</Typography>
          <CustomSlider
            value={params.elasticity}
            min={0}
            max={1}
            step={0.1}
            onChange={(event: Event, value: number) => {
              handleSliderChange("elasticity")(event, value);
              registry.engine.objects.forEach((object) => {
                object.matter.restitution = value;
              });
            }}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box>
          <Typography>마찰력</Typography>
          <CustomSlider
            value={params.friction}
            min={0}
            max={1}
            step={0.1}
            onChange={(event: Event, value: number) => {
              handleSliderChange("friction")(event, value);
              registry.engine.objects.forEach((object) => {
                object.matter.friction = value;
              });
            }}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box>
          <Typography>공기 저항</Typography>
          <CustomSlider
            color={"info"}
            value={params.airResistance}
            min={0}
            max={1}
            step={0.1}
            onChange={(event: Event, value: number) => {
              handleSliderChange("airResistance")(event, value);
              registry.engine.resistance = 1 - value * 0.003;
            }}
            valueLabelDisplay="auto"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SimulationControl;
