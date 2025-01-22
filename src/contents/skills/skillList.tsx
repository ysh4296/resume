import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// const skillsMockData = [
//   {
//     category: "Frontend",
//     items: [
//       "React",
//       "React-native",
//       "Nextjs",
//       "Gatsby",
//       "Javascript(es6)",
//       "Typescript",
//     ],
//   },
//   {
//     category: "DevOps",
//     items: [
//       "github-actions",
//       "jenkins",
//       "vercel-deploy",
//       "github actions",
//       "k8s",
//     ],
//   },
//   {
//     category: "UI Libraries",
//     items: ["mui", "Chakra-Ui", "radix-ui", "storybook"],
//   },
//   {
//     category: "Tools",
//     items: ["jira", "figma", "slack", "v0", "cursor-ai", "gpt"],
//   },
//   {
//     category: "Testing",
//     items: ["jest", "vitest", "cypress"],
//   },
//   {
//     category: "Infra & Code Quality",
//     items: ["biome", "eslint/prettier", "husky/lint-staged"],
//   },
//   {
//     category: "Other",
//     items: ["graphql", "i18n", "search engine optimization", "webAssembly"],
//   },
// ];

interface SkillSectionProps {
  skills: Queries.GetAllPostsQuery["sanity"]["allPost"][number]["skills"];
}

const SkillsSection = ({ skills }: SkillSectionProps) => {
  const handleClick = (skill) => {
    alert(`You clicked on ${skill}`);
  };

  return (
    <Box sx={{ padding: "16px", margin: "0 auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                카테고리
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                항목
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((item) => (
              <TableRow key={item.category}>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  {item.category}
                </TableCell>
                <TableCell>
                  {item.skill.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      onClick={() => handleClick(s)}
                      sx={{ margin: "4px" }}
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SkillsSection;
