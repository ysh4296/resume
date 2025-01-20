import ContentBox from "@components/ContentBox";
import { graphql, useStaticQuery } from "gatsby";
// import Markdown from "react-markdown";

const PostList = () => {
  const data = useStaticQuery(graphql`
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
  const posts = data.sanity.allPost;

  return (
    <>
      <h1>Post List</h1>
      {posts.map((post) => (
        <article key={post.slug.current}>
          <ContentBox>
            <h2>{post.title}</h2>
            <h2>{post.description}</h2>
            <p>
              {post.startDate} ~ {post.endDate}
            </p>
            {post.image && <img src={post.image.asset.url} alt={post.title} />}
            {/* <Markdown>{post.content}</Markdown> */}
          </ContentBox>
        </article>
      ))}
    </>
  );
};

export default PostList;
