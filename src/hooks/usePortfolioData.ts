import { graphql } from "gatsby";

import { useStaticQuery } from "gatsby";

export const usePortfolioData = () => {
  const data = useStaticQuery<Queries.GetAllPostsQuery>(graphql`
    query GetAllPosts {
      allSanityPost {
        nodes {
          title
          description
          slug {
            current
          }
          startDate
          endDate
          images {
            asset {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          skills {
            category
            skill
          }
          content
        }
      }
    }
  `);

  return data.allSanityPost.nodes;
};
