import {
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelectedSkillsStore } from "@store/select"; // zustand 저장소 가져오기

interface SkillSectionProps {
  skills: Queries.GetAllPostsQuery["allSanityPost"]["nodes"][number]["skills"];
  edit?: boolean;
}

const SkillsSection = ({ skills, edit = false }: SkillSectionProps) => {
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  ); // 현재 선택된 스킬 목록 가져오기

  const addSkill = useSelectedSkillsStore((state) => state.addSkill); // 스킬 추가 함수
  const removeSkill = useSelectedSkillsStore((state) => state.removeSkill); // 스킬 제거 함수

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 화면이 작은지 확인

  // Chip 클릭 핸들러: 클릭 시 스킬을 추가하거나 제거함
  const handleClick = (skill: string) => {
    if (!edit) return;
    if (selectedSkills.includes(skill)) {
      removeSkill(skill); // 선택 해제
    } else {
      addSkill(skill); // 선택 추가
    }
  };

  return (
    <Box sx={{ padding: "16px", margin: "0 auto" }}>
      <Paper elevation={3} sx={{ padding: "16px", borderRadius: "8px" }}>
        {isMobile ? (
          // 모바일 뷰: 반응형 카드 스타일
          <Stack spacing={2}>
            {skills.map((item) => (
              <Box key={item.category}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  {item.category}
                </Typography>
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
              </Box>
            ))}
          </Stack>
        ) : (
          // 데스크탑 뷰: 기본 테이블 스타일
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
                              color: selectedSkills.includes(s)
                                ? "#fff"
                                : "#000",
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
        )}
      </Paper>
    </Box>
  );
};

export default SkillsSection;
