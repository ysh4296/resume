import { Divider } from "@mui/material";

const AnchorDiv = ({ id, children }) => {
  return (
    <div id={id} style={{ scrollMarginTop: "40px" }}>
      {children}
      <Divider sx={{ margin: "40px" }} />
    </div>
  );
};

export default AnchorDiv;
