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
import { useSelectedSkillsStore } from "@store/select"; // zustand 저장소 가져오기

interface SkillSectionProps {
  skills: Queries.GetAllPostsQuery["sanity"]["allPost"][number]["skills"];
}

const SkillsSection = ({ skills }: SkillSectionProps) => {
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  ); // 현재 선택된 스킬 목록 가져오기

  const addSkill = useSelectedSkillsStore((state) => state.addSkill); // 스킬 추가 함수
  const removeSkill = useSelectedSkillsStore((state) => state.removeSkill); // 스킬 제거 함수

  // Chip 클릭 핸들러: 클릭 시 스킬을 추가하거나 제거함
  const handleClick = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      removeSkill(skill); // 선택 해제
    } else {
      addSkill(skill); // 선택 추가
    }
  };

  return (
    <Box sx={{ padding: "16px", margin: "0 auto" }}>
      {/* 필터 기능 설명 */}
      <Box sx={{ marginBottom: "16px", textAlign: "center", color: "#555" }}>
        <strong>skill 항목을 클릭하여 포트폴리오를 필터링하세요.</strong>
      </Box>

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
                      onClick={() => handleClick(s)} // 클릭 이벤트
                      sx={{
                        margin: "4px",
                        backgroundColor: selectedSkills.includes(s)
                          ? "#1976d2"
                          : "#e0e0e0",
                        color: selectedSkills.includes(s) ? "#fff" : "#000",
                        fontWeight: selectedSkills.includes(s)
                          ? "bold"
                          : "normal",
                      }}
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
