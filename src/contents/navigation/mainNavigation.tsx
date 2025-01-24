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
        padding: "48px 24px",
        borderRight: "1px solid",
        borderColor: "#ddd",
        textWrap: "nowrap",
        clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)", // 상단, 하단 모두 절단
      }}
    >
      <Stack direction="column" gap={4}>
        <NavigationLink href="#intro">Intro</NavigationLink>
        <NavigationLink href="#workExperience">Work Experience</NavigationLink>
        <NavigationLink href="#portfolio">Portfolio</NavigationLink>
      </Stack>
    </nav>
  );
};

export default MainNavigation;
