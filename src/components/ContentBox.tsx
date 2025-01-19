import { Box, type BoxProps } from "@mui/material";

interface ContentBoxProps {
  children: React.ReactNode;
  props?: BoxProps;
}

const ContentBox = ({ children, props }: ContentBoxProps) => {
  return (
    <Box p={4} borderRadius={4} border="1px solid" overflow="hidden" {...props}>
      {children}
    </Box>
  );
};

export default ContentBox;
