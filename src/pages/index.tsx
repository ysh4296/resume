import AnchorDiv from "@components/AnchorDiv";
import Title from "@components/Title";
import Contact from "@contents/contact";
import Intro from "@contents/intro";
import JobList from "@contents/jobs/JobList";
import MainNavigation from "@contents/navigation/mainNavigation";
import PortfolioList from "@contents/portfolio/PortfolioList";
import { useFilteredPortfolios } from "@hooks/useFilteredPortfolios";
import { useMergedSkills } from "@hooks/useMergedSkills";
import { usePortfolioData } from "@hooks/usePortfolioData";
import { Stack } from "@mui/material";
import { useSelectedSkillsStore } from "@store/select";

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

      <AnchorDiv id="portfolio">
        <Title>Portfolio</Title>
        <PortfolioList skills={skills} portfolios={filteredPortfolios} />
      </AnchorDiv>
    </main>
  );
};

export default IndexPage;
