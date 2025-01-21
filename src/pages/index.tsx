import AnchorDiv from "@components/AnchorDiv";
import ContentBox from "@components/ContentBox";
import Title from "@components/Title";
import Intro from "@contents/intro";
import JobList from "@contents/jobs/JobList";
import MainNavigation from "@contents/navigation/mainNavigation";
import PortfolioList from "@contents/portfolio/PortfolioList";
import SkillsSection from "@contents/skills/skillList";
import { Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
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
        <SkillsSection />
      </AnchorDiv>

      <AnchorDiv id="portfolio">
        <Title>Portfolio</Title>
        <PortfolioList />
      </AnchorDiv>
    </main>
  );
};

export default IndexPage;
