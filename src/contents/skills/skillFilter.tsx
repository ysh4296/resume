import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelectedSkillsStore } from "@store/select"; // zustand 저장소 가져오기

interface SkillFilterProps {
  skills: Queries.GetAllPostsQuery["allSanityPost"]["nodes"][number]["skills"];
  edit?: boolean;
}

const SkillFilter = ({ skills, edit = false }: SkillFilterProps) => {
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  );

  const addSkill = useSelectedSkillsStore((state) => state.addSkill);
  const removeSkill = useSelectedSkillsStore((state) => state.removeSkill);

  const handleClick = (skill: string) => {
    if (!edit) return;
    if (selectedSkills.includes(skill)) {
      removeSkill(skill);
    } else {
      addSkill(skill);
    }
  };

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                카테고리
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {item.skill.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        onClick={() => handleClick(s)} // 클릭 이벤트
                        sx={{
                          margin: "4px",
                          backgroundColor: selectedSkills.includes(s)
                            ? "#1976d2"
                            : "#e0e0e0",
                          color: selectedSkills.includes(s) ? "#fff" : "#000",
                        }}
                      />
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SkillFilter;
