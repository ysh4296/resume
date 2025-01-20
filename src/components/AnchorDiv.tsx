const AnchorDiv = ({ id, children }) => {
  return (
    <div id={id} style={{ scrollMarginTop: "40px" }}>
      {children}
    </div>
  );
};

export default AnchorDiv;
