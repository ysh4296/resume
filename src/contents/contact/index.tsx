import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography align="center" variant="h5" fontWeight="bold" gutterBottom>
        연락처
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          gap: 4,
        }}
      >
        {/* 이메일 */}
        <Box display="flex" alignItems="center" gap={1}>
          <EmailIcon color="primary" />
          <Link
            href="mailto:dbtmdgns4296@naver.com"
            underline="hover"
            color="inherit"
          >
            email
          </Link>
        </Box>

        {/* 깃허브 */}
        <Box display="flex" alignItems="center" gap={1}>
          <GitHubIcon color="primary" />
          <Link
            href="https://github.com/ysh4296"
            underline="hover"
            color="inherit"
            target="_blank"
          >
            github
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
