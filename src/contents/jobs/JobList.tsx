import { useStaticQuery } from "gatsby";

import { graphql } from "gatsby";
import JobItem from "./JobItem";

const JobList = () => {
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

  return (
    <>
      {data.allSanityJob.nodes.map((job) => (
        <JobItem
          key={job.name}
          name={job.name}
          description={job.description}
          image={job.image.asset?.gatsbyImageData}
          startDate={job.startDate}
          endDate={job.endDate}
          content={job.content}
        />
      ))}
    </>
  );
};

export default JobList;
