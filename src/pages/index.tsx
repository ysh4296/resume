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
import { Box, Stack } from "@mui/material";
import { useSelectedSkillsStore } from "@store/select";

/**
 * @description
 * 이 주석까지 확인하신다면 정말 신중하게 저를 검토해주시는것 같아 기쁩니다.
 * 이 프로젝트는 1주일정도 시간이 걸려완성하였으며 그에따른 trade off로 중구난방한 코딩스타일을 적용하게 되었습니다. 보여드리기엔 좀 부끄럽네요..
 * 특히 디자인 영역에서요! cusor-ai와 v0를 많이 사용했기에 더욱 복잡하게 보이지 않을까 싶습니다.
 * 개인적으로 cms와 ssg서비스를 제작한것에 의미를 두고있습니다. 그부분을 좋게 봐주셨으면 합니다.
 */

const IndexPage = () => {
  const portfolios = usePortfolioData();
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  );
  const skills = useMergedSkills(portfolios);
  const filteredPortfolios = useFilteredPortfolios(portfolios, selectedSkills);

  return (
    <main>
      <Stack
        direction="row"
        height="100vh"
        width="100vw"
        overflow="auto"
        style={{ scrollBehavior: "smooth" }}
      >
        <Box
          sx={{
            position: "sticky",
            top: 0,
            display: { xs: "none", sm: "block" },
          }}
        >
          <MainNavigation />
        </Box>
        <Box
          margin="auto"
          sx={{ maxWidth: { xs: "100%", sm: "70vw", md: "80vw" } }}
        >
          <AnchorDiv id="intro">
            <Title>Intro</Title>
            <Stack
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                flexDirection: "column",
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
        </Box>
      </Stack>
    </main>
  );
};

export default IndexPage;
