import { useStaticQuery } from "gatsby";

import { graphql } from "gatsby";
import JobItem from "./JobItem";

const JobList = () => {
  const data = useStaticQuery<Queries.GetAllJobsQuery>(graphql`
  query GetAllJobs {
    sanity {
      allJob {
        name
        description
        employType
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
`);

  return (
    <>
      {data.sanity.allJob.map((job) => (
        <JobItem
          key={job.name}
          name={job.name}
          description={job.description}
          url={job.image.asset.url}
          startDate={job.startDate}
          endDate={job.endDate}
          content={job.content}
        />
      ))}
    </>
  );
};

export default JobList;
