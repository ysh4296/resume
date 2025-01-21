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
  Typography,
} from "@mui/material";

const skillsData = [
  {
    category: "Frontend",
    items: [
      "React",
      "React-native",
      "Nextjs",
      "Gatsby",
      "Javascript(es6)",
      "Typescript",
    ],
  },
  {
    category: "DevOps",
    items: [
      "github-actions",
      "jenkins",
      "vercel-deploy",
      "github actions",
      "k8s",
    ],
  },
  {
    category: "UI Libraries",
    items: ["mui", "Chakra-Ui", "radix-ui", "storybook"],
  },
  {
    category: "Tools",
    items: ["jira", "figma", "slack", "v0", "cursor-ai", "gpt"],
  },
  {
    category: "Testing",
    items: ["jest", "vitest", "cypress"],
  },
  {
    category: "Infra & Code Quality",
    items: ["biome", "eslint/prettier", "husky/lint-staged"],
  },
  {
    category: "Other",
    items: ["graphql", "i18n", "search engine optimization", "webAssembly"],
  },
];

const SkillsSection = () => {
  const handleClick = (skill) => {
    alert(`You clicked on ${skill}`);
  };

  return (
    <Box sx={{ padding: "16px", margin: "0 auto" }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: "16px", fontWeight: "bold", textAlign: "center" }}
      >
        Skills
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Category
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Skills
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skillsData.map((skill) => (
              <TableRow key={skill.category}>
                <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                  {skill.category}
                </TableCell>
                <TableCell>
                  {skill.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      onClick={() => handleClick(item)}
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
