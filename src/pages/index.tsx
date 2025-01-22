import AnchorDiv from "@components/AnchorDiv";
import ContentBox from "@components/ContentBox";
import Title from "@components/Title";
import Intro from "@contents/intro";
import JobList from "@contents/jobs/JobList";
import MainNavigation from "@contents/navigation/mainNavigation";
import PortfolioList from "@contents/portfolio/PortfolioList";
import SkillsSection from "@contents/skills/skillList";
import { usePortfolioData } from "@hooks/portfolio";
import { Stack } from "@mui/material";
import { mergeSkillsData } from "@utils/skills";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const portfolios = usePortfolioData();

  const skills = mergeSkillsData(portfolios);

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
        <SkillsSection skills={skills} />
      </AnchorDiv>

      <AnchorDiv id="portfolio">
        <Title>Portfolio</Title>
        <PortfolioList portfolios={portfolios} />
      </AnchorDiv>
    </main>
  );
};

export default IndexPage;
