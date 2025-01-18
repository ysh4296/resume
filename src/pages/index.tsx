// Start of Selection

import GithubStats from "@contents/githubStats";
import Intro from "@contents/intro";
import { Stack } from "@mui/material";

const IndexPage = () => {
  return (
    <main>
      <Stack direction="row">
        <GithubStats />
        <Intro />
      </Stack>
    </main>
  );
};

export default IndexPage;
