import AnchorDiv from "@components/AnchorDiv";
import ContentBox from "@components/ContentBox";
import Title from "@components/Title";
import Intro from "@contents/intro";
import JobList from "@contents/jobs/JobList";
import MainNavigation from "@contents/navigation/mainNavigation";
import PortfolioList from "@contents/portfolio/PortfolioList";
import SkillsSection from "@contents/skills/skillList";
import { useFilteredPortfolios } from "@hooks/useFilteredPortfolios";
import { useMergedSkills } from "@hooks/useMergedSkills";
import { usePortfolioData } from "@hooks/usePortfolioData";
import { Box, Stack } from "@mui/material";
import { useSelectedSkillsStore } from "@store/select";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const portfolios = usePortfolioData();

  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  );

  const skills = useMergedSkills(portfolios);
  const filteredPortfolios = useFilteredPortfolios(portfolios, selectedSkills);

  return (
    <main>
      <MainNavigation />
      <AnchorDiv id="intro">
        <Title>Intro</Title>
        <Stack spacing={2} alignItems={"center"} justifyContent={"center"}>
          <ContentBox props={{ p: 0 }}>
            <StaticImage
              style={{
                width: "300px",
                objectFit: "cover", // 비율 유지
              }}
              alt="my photo"
              src="../images/myphoto.png"
            />
          </ContentBox>
          <Intro />
        </Stack>
      </AnchorDiv>

      <AnchorDiv id="workExperience">
        <Title>Work Experience</Title>
        <JobList />
      </AnchorDiv>

      <AnchorDiv id="skills">
        <Title>Skills</Title>
        {/* 필터 기능 설명 */}
        <Box sx={{ marginBottom: "16px", textAlign: "center", color: "#555" }}>
          <strong>Skill을 클릭하여 포트폴리오를 필터링할 수 있습니다.</strong>
        </Box>
        <SkillsSection skills={skills} edit />
      </AnchorDiv>

      <AnchorDiv id="portfolio">
        <Title>Portfolio</Title>
        <PortfolioList portfolios={filteredPortfolios} />
      </AnchorDiv>
    </main>
  );
};

export default IndexPage;
