import { useJobData } from "@hooks/useJobData";
import JobItem from "./JobItem";

const JobList = () => {
  const jobs = useJobData();

  return (
    <>
      {jobs.map((job) => (
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
