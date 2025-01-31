import { Slider } from "@mui/material";
import { grey } from "@mui/material/colors";

import { styled } from "@mui/material/styles";

const CustomSlider = styled(Slider)(() => ({
  color: grey[600],
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: grey[600],
    boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
  },
  // '& .MuiSlider-valueLabel': {
  //   fontSize: 12,
  //   fontWeight: 'normal',
  //   top: -6,
  //   backgroundColor: 'unset',
  //   color: theme.palette.text.primary,
  //   '&::before': {
  //     display: 'none',
  //   },
  // },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    // backgroundColor: '#d0d0d0',
  },
}));

export default CustomSlider;
