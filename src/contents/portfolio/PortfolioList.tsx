import Body from "@components/Body";
import ContentBox from "@components/ContentBox";
import Header from "@components/Header";
import { graphql, useStaticQuery } from "gatsby";
// import Markdown from "react-markdown";

const PortfolioList = () => {
  const data = useStaticQuery<Queries.GetAllPostsQuery>(graphql`
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
      }
    }
  }
`);

  /**
   * @todo add global context to make following features
   * 1. filter data
   * 2. sort data
   */

  return (
    <>
      {data.sanity.allPost.map((post) => (
        <article key={post.slug.current}>
          <ContentBox>
            <Header>{post.title}</Header>
            <Header>{post.description}</Header>
            <Body>
              {post.startDate} ~ {post.endDate}
            </Body>
            {post.image && <img src={post.image.asset.url} alt={post.title} />}
            {/* <Markdown>{post.content}</Markdown> */}
          </ContentBox>
        </article>
      ))}
    </>
  );
};

export default PortfolioList;
