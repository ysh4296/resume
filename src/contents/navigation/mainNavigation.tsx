import { Stack } from "@mui/material";

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
        padding: "8px 16px",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <nav>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
      </nav>
    </Stack>
  );
};

export default MainNavigation;
