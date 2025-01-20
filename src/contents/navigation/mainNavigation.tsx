import { Link, Stack } from "@mui/material";

/**
 * @todo
 * make it looks like a sticky "Anchor Link" Navigations
 */

const MainNavigation = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "background.paper",
        height: "24px",
        padding: "8px 16px",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <nav>
        <Link href="#intro">Intro</Link>
        <Link href="#workExperience">Work Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#portfolio">Portfolio</Link>
      </nav>
    </Stack>
  );
};

export default MainNavigation;
