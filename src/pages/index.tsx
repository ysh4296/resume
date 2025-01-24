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
 * 포트폴리오를 처음 외부에 공개했을때 얻은 반응은 디자인에 대한 우려였습니다.
 * 개인적으로 디자인은 제일 자신 없는 부분입니다.
 * 솔직히 프론트엔드에게 여러 소양이 있지만 디자인만이 너무 심하게 강조되지 않았나 싶습니다.
 * 그러니 CMS를 활용한 포트폴리오 데이터처리와, 자동 배포, SSG를 활용한 빠른 서비스 전달 등 여러 기술적 내용들을 포함하였고
 * 채용페이지를 참고한 디자인으로 나름의 컨셉을 잡아 제작하였습니다.
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
        <MainNavigation />
        <Box>
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
