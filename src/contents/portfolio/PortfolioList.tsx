import { Box, Chip, Typography } from "@mui/material";
import { useSelectedSkillsStore } from "@store/select";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = ({ portfolios }) => {
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  );

  return (
    <div style={styles.listContainer}>
      {/* 선택된 스킬 표시 */}
      <div style={styles.selectedSkillsContainer}>
        {selectedSkills && selectedSkills.length > 0 ? (
          <>
            <Box sx={{ textAlign: "center", color: "#555", marginX: "20px" }}>
              <strong>선택된 Skill: </strong>
            </Box>
            <div style={styles.chipContainer}>
              {selectedSkills.map((selectedSkill) => (
                <Chip
                  key={selectedSkill}
                  label={selectedSkill}
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    fontWeight: "bold",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <Box sx={{ textAlign: "center", color: "#555", marginX: "20px" }}>
            <strong>Skill을 선택해주세요</strong>
          </Box>
        )}
      </div>
      {/* 포트폴리오 리스트 */}
      {portfolios.length > 0 ? (
        portfolios.map((portfolio) => (
          <PortfolioItem key={portfolio.slug.current} portfolio={portfolio} />
        ))
      ) : (
        <Box style={styles.fallbackContainer}>
          <Typography variant="h6" color="textSecondary" align="center">
            표시할 포트폴리오가 없습니다.
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center">
            스킬을 변경해주세요
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default PortfolioList;

/**
 * @todo
 * add style
 */
// 스타일링 객체
const styles: { [key: string]: React.CSSProperties } = {
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px", // 각 카드 간격
    paddingTop: "16px",
    minHeight: "800px",
  },
  selectedSkillsContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  selectedSkillsLabel: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#333",
    marginRight: "8px", // 텍스트와 Chip 간격
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap", // 가로로 나열하고 넘치면 다음 줄로
    gap: "8px",
  },
  fallbackContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: "800px", // 넉넉한 높이
    padding: "16px",
  },
};
