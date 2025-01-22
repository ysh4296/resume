import SkillsSection from "@contents/skills/skillList";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  GatsbyImage,
  type IGatsbyImageData,
  getImage,
} from "gatsby-plugin-image";
import { useState } from "react";
import Markdown from "react-markdown";

interface PortfolioDetailProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: Queries.GetAllPostsQuery["allSanityPost"]["nodes"][number];
}

const PortfolioDetail = ({
  isOpen,
  onClose,
  portfolio,
}: PortfolioDetailProps) => {
  const [selectedImage, setSelectedImage] = useState<IGatsbyImageData | null>(
    null,
  );

  const handleImageClick = (image: IGatsbyImageData) => {
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: "80vw",
            padding: "24px",
            backgroundColor: "#f9f9f9",
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
          <Stack direction="row" gap="8px">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {portfolio.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                backgroundColor: "#e0f7fa",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              {portfolio.startDate} ~ {portfolio.endDate}
            </Typography>
          </Stack>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ marginBottom: "16px" }} />

        {/* Description */}
        <Box sx={{ marginBottom: "24px" }}>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: "8px" }}
          >
            {portfolio.description}
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: "16px" }} />

        {/* Images */}
        <Box sx={{ marginBottom: "24px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "8px" }}
          >
            Images
          </Typography>
          <Typography sx={{ color: grey[600], marginBottom: "16px" }}>
            인턴쉽을 통해 진행한 프로젝트들은 실제 프로젝트 정보가 아닌 비슷한
            서비스의 이미지를 차용하였습니다.
          </Typography>
          {portfolio.images.length > 0 ? (
            <Stack
              direction="row"
              sx={{
                overflow: "auto",
                gap: "16px",
              }}
            >
              {portfolio.images.map((image, index) => {
                const gatsbyImage = getImage(image.asset.gatsbyImageData);
                return (
                  gatsbyImage && (
                    <Box
                      key={JSON.stringify(image.asset.gatsbyImageData.images)}
                      sx={{
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                      }}
                      onClick={() => handleImageClick(gatsbyImage)}
                    >
                      <GatsbyImage
                        image={gatsbyImage}
                        alt={`${portfolio.title} - Image ${index + 1}`}
                        style={{ width: "400px", height: "400px" }}
                        imgStyle={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                  )
                );
              })}
            </Stack>
          ) : (
            <Typography color="textSecondary">No images available.</Typography>
          )}
        </Box>

        <Divider sx={{ marginBottom: "16px" }} />

        {/* Skills */}
        <Box sx={{ marginBottom: "24px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "8px" }}
          >
            Skills
          </Typography>
          <SkillsSection skills={portfolio.skills} />
        </Box>

        <Divider sx={{ marginBottom: "16px" }} />

        {/* Content */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "16px" }}
          >
            Content
          </Typography>
          <Box
            sx={{
              padding: "16px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Markdown>
              {portfolio.content || "No additional content available."}
            </Markdown>
          </Box>
        </Box>
      </Drawer>

      {/* Dialog for Fullscreen Image */}
      <Dialog
        open={!!selectedImage}
        onClose={handleCloseDialog}
        maxWidth="lg"
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {selectedImage && (
          <GatsbyImage
            image={selectedImage}
            alt="Fullscreen Image"
            style={{ width: "100%", maxHeight: "80vh" }}
            imgStyle={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        )}
      </Dialog>
    </>
  );
};

export default PortfolioDetail;
