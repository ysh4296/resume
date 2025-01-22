import { graphql } from "gatsby";

import { useStaticQuery } from "gatsby";

export const useJobData = () => {
  const data = useStaticQuery<Queries.GetAllJobsQuery>(graphql`
    query GetAllJobs {
  allSanityJob {
    nodes {
      name
      description
      startDate
      endDate
      content
      image {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
}`);

  return data.allSanityJob.nodes;
};
