import Body from "@components/Body";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography align="center" variant="h5" fontWeight="bold" gutterBottom>
        연락처
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon color="primary" />
          <Body>dbtmdgns4296@naver.com</Body>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <GitHubIcon color="primary" />
          <Body>https://github.com/ysh4296</Body>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
