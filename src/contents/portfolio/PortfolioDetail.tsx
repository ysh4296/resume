import SkillsSection from "@contents/skills/skillList";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import Markdown from "react-markdown";

interface PortfolioDetailProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: Queries.GetAllPostsQuery["sanity"]["allPost"][number];
}

const PortfolioDetail = ({
  isOpen,
  onClose,
  portfolio,
}: PortfolioDetailProps) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "80vw",
          padding: "16px",
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">{portfolio.title}</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* 기본 정보 */}
      <Typography variant="body2" sx={{ marginBottom: "8px" }}>
        {portfolio.description}
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "16px" }}>
        기간: {portfolio.startDate} ~ {portfolio.endDate}
      </Typography>

      {/* 이미지 */}
      {portfolio.image && (
        <Box
          sx={{
            marginBottom: "16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={portfolio.image.asset.url}
            alt={portfolio.title}
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      {/* Skills */}
      <Typography variant="body2" sx={{ marginBottom: "8px" }}>
        Skills
      </Typography>
      <SkillsSection skills={portfolio.skills} />

      {/* Content */}
      <Typography variant="body2" sx={{ marginTop: "16px" }}>
        Content
      </Typography>
      <Markdown>{portfolio.content || "세부 정보가 없습니다."}</Markdown>
    </Drawer>
  );
};

export default PortfolioDetail;
