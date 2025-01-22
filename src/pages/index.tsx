import AnchorDiv from "@components/AnchorDiv";
import Title from "@components/Title";
import Contact from "@contents/contact";
import Intro from "@contents/intro";
import JobList from "@contents/jobs/JobList";
import MainNavigation from "@contents/navigation/mainNavigation";
import PortfolioList from "@contents/portfolio/PortfolioList";
import SkillsSection from "@contents/skills/skillList";
import { useFilteredPortfolios } from "@hooks/useFilteredPortfolios";
import { useMergedSkills } from "@hooks/useMergedSkills";
import { usePortfolioData } from "@hooks/usePortfolioData";
import { ExpandMore } from "@mui/icons-material";
import { ExpandLess } from "@mui/icons-material";
import { Box, Button, Collapse, Stack } from "@mui/material";
import { useSelectedSkillsStore } from "@store/select";
import { useState } from "react";

const IndexPage = () => {
  const portfolios = usePortfolioData();
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  );
  const skills = useMergedSkills(portfolios);
  const filteredPortfolios = useFilteredPortfolios(portfolios, selectedSkills);

  // Collapse 상태 관리
  const [isSkillsSectionOpen, setIsSkillsSectionOpen] = useState(true);

  const toggleSkillsSection = () => {
    setIsSkillsSectionOpen((prev) => !prev);
  };

  return (
    <main>
      <MainNavigation />
      <AnchorDiv id="intro">
        <Title>Intro</Title>
        <Stack
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Intro />
          <Contact />
        </Stack>
      </AnchorDiv>

      <AnchorDiv id="workExperience">
        <Title>Work Experience</Title>
        <JobList />
      </AnchorDiv>

      <AnchorDiv id="skills">
        <Title>Skills</Title>

        {/* 접기/펼치기 버튼 */}
        <Stack
          sx={{
            gap: "4px",
            marginBottom: "16px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              color: "#555",
            }}
          >
            <strong>Skill을 클릭하여 포트폴리오를 필터링할 수 있습니다.</strong>
          </Box>
          <Button
            endIcon={isSkillsSectionOpen ? <ExpandLess /> : <ExpandMore />}
            variant="outlined"
            size="small"
            onClick={toggleSkillsSection}
            sx={{
              textTransform: "none",
              color: "#757575",
              borderColor: "#bdbdbd",
              minWidth: "none",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#9e9e9e",
              },
            }}
          >
            Skills
          </Button>
        </Stack>

        {/* SkillsSection Collapse */}
        <Collapse in={isSkillsSectionOpen} timeout="auto" unmountOnExit>
          <SkillsSection skills={skills} edit />
        </Collapse>
      </AnchorDiv>

      <AnchorDiv id="portfolio">
        <Title>Portfolio</Title>
        <PortfolioList portfolios={filteredPortfolios} />
      </AnchorDiv>
    </main>
  );
};

export default IndexPage;
