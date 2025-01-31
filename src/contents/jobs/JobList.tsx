import { useJobData } from "@hooks/useJobData";
import { Box } from "@mui/material";
import JobItem from "./JobItem";

const JobList = () => {
  const jobs = useJobData();

  return (
    <Box sx={{ marginX: { xs: "48px", sm: "48px", md: "144px" } }}>
      {jobs.map((job) => (
        <JobItem
          key={job.name}
          name={job.name}
          description={job.description}
          image={job.image.asset?.gatsbyImageData}
          startDate={job.startDate}
          endDate={job.endDate}
        />
      ))}
    </Box>
  );
};

export default JobList;
