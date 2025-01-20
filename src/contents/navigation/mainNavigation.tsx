import { Stack } from "@mui/material";
import NavigationLink from "./NaviagtionLink";

/**
 * @todo
 * make it looks like a sticky "Anchor Link" Navigations
 */

const MainNavigation = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
        height: "24px",
        padding: "8px 16px",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack direction="row" gap={4}>
        <NavigationLink href="#intro">Intro</NavigationLink>
        <NavigationLink href="#workExperience">Work Experience</NavigationLink>
        <NavigationLink href="#skills">Skills</NavigationLink>
        <NavigationLink href="#portfolio">Portfolio</NavigationLink>
      </Stack>
    </nav>
  );
};

export default MainNavigation;
