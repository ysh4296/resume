import { graphql } from "gatsby";

import { useStaticQuery } from "gatsby";

export const usePortfolioData = () => {
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
          skills {
            category
            skill
          }
        }
      }
    }
  `);

  return data.sanity.allPost;
};
