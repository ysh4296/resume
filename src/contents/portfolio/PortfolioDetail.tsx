import SkillsSection from "@contents/skills/skillList";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  Chip,
  Dialog,
  Drawer,
  IconButton,
  Link,
  Stack,
  Tooltip,
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
            width: "100vw",
            backgroundColor: "#f9f9f9",
            padding: "72px",
          },
        }}
      >
        <Stack
          flexDirection="row-reverse"
          sx={{
            display: "flex",
            marginBottom: "16px",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            // blur background
          }}
        >
          {/* Drawer Header */}
          <IconButton onClick={onClose}>
            <CloseIcon
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "100%",
                backdropFilter: "blur(10px)",
              }}
            />
          </IconButton>
        </Stack>
        <Stack direction="row" gap="8px" sx={{ marginBottom: "24px" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {portfolio.title}
          </Typography>
        </Stack>
        {/* 프로젝트 구분 */}
        <Box sx={{ marginBottom: "24px" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: "16px" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: grey[700],
              }}
            >
              구분
            </Typography>
            <Chip
              label={portfolio.type}
              sx={{
                backgroundColor: grey[200],
                color: grey[800],
                fontWeight: "bold",
              }}
            />
          </Stack>

          {/* 프로젝트 기간 */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: "16px" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: grey[700],
              }}
            >
              기간
            </Typography>
            <Typography variant="body1" sx={{ color: grey[600] }}>
              {portfolio.startDate} ~ {portfolio.endDate}
            </Typography>
          </Stack>

          {/* 프로젝트 URL */}
          {(portfolio.url || portfolio.git) && (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: grey[700],
                }}
              >
                URL
              </Typography>
              {portfolio.url && (
                <IconButton
                  component={Link}
                  href={portfolio.url}
                  target="_blank"
                  sx={{
                    backgroundColor: grey[200],
                    color: grey[800],
                    "&:hover": {
                      backgroundColor: grey[300],
                    },
                  }}
                >
                  <OpenInNewIcon />
                </IconButton>
              )}
              {portfolio.git && (
                <IconButton
                  component={Link}
                  href={portfolio.git}
                  target="_blank"
                  sx={{
                    backgroundColor: grey[200],
                    color: grey[800],
                    "&:hover": {
                      backgroundColor: grey[300],
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              )}
            </Stack>
          )}
        </Box>

        {/* Images */}
        <Box sx={{ marginBottom: "24px" }}>
          <Stack
            direction="row"
            gap="8px"
            alignItems="center"
            marginBottom="8px"
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Images
            </Typography>
            <Tooltip
              title={
                <Typography variant="body2">
                  인턴쉽을 통해 진행한 프로젝트들은 실제 프로젝트 정보가 아닌
                  비슷한 서비스의 이미지를 차용하였습니다.
                </Typography>
              } // 툴팁에 이미지 정보 표시
              placement="right"
              arrow
            >
              <HelpOutlineIcon />
            </Tooltip>
          </Stack>
          {portfolio.images.length > 0 ? (
            <Stack
              direction="row"
              sx={{
                overflow: "auto",
                scrollSnapType: "x mandatory", // 가로 방향 snap scroll
                gap: "16px",
              }}
            >
              {/* 시작 패딩 */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: "calc((100vw - 400px) / 2)", // 시작 여백 계산 (400px은 이미지 너비)
                }}
              />
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
                        scrollSnapAlign: "center", // 각 이미지가 뷰포트 중앙에 정렬
                        alignContent: "center",
                      }}
                      onClick={() => handleImageClick(gatsbyImage)}
                    >
                      <GatsbyImage
                        image={gatsbyImage}
                        alt={`${portfolio.title} - Image ${index + 1}`}
                        style={{
                          maxWidth: "calc(100vw - 144px)",
                          width: "600px",
                        }}
                        imgStyle={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                  )
                );
              })}

              {/* 끝 패딩 */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: "calc((100vw - 400px) / 2)", // 끝 여백 계산 (400px은 이미지 너비)
                }}
              />
            </Stack>
          ) : (
            <Typography color="textSecondary">No images available.</Typography>
          )}
        </Box>

        <Box sx={{ marginBottom: "24px" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "8px" }}
          >
            Skills
          </Typography>
          <SkillsSection skills={portfolio.skills} />
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "16px" }}
          >
            Content
          </Typography>
          {/* <Box
            sx={{
              padding: "16px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          > */}
          <Markdown>
            {portfolio.content || "No additional content available."}
          </Markdown>
          {/* </Box> */}
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
            style={{ width: "100%" }}
            imgStyle={{
              objectFit: "contain",
            }}
          />
        )}
      </Dialog>
    </>
  );
};

export default PortfolioDetail;
