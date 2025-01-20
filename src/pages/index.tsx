import ContentBox from "@components/ContentBox";
import Intro from "@contents/intro";
import MainNavigation from "@contents/navigation/mainNavigation";
import PostList from "@contents/post/PostList";
import { Stack } from "@mui/material";
import { StaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <MainNavigation />
      <Stack
        direction="row"
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ContentBox props={{ p: 0 }}>
          <StaticImage
            height={400}
            alt="my photo"
            src="../images/myphoto.png"
          />
        </ContentBox>
        <Intro />
      </Stack>
      <StaticQuery
        query={graphql`
  query GetAllPosts {
    sanity {
      allPost {
        title
        description
        slug {
          current
        }
        startDate
        endDate
        image {
          asset {
            url
          }
        }
        content
      }
    }
  }
`}
        render={(data) => <PostList data={data} />}
      />
    </main>
  );
};

export default IndexPage;
