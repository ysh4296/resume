import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Box, Chip, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelectedSkillsStore } from "@store/select";
import PortfolioItem from "./PortfolioItem";

interface PortfolioListProps {
  portfolios: Queries.GetAllPostsQuery["sanity"]["allPost"];
}

const PortfolioList = ({ portfolios }: PortfolioListProps) => {
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  );
  const resetSkill = useSelectedSkillsStore((state) => state.resetSkill);
  const removeSkill = useSelectedSkillsStore((state) => state.removeSkill);

  return (
    <div style={styles.listContainer}>
      {/* 선택된 스킬 표시 */}
      <div style={styles.selectedSkillsContainer}>
        {
          <>
            <Box
              sx={{
                textAlign: "center",
                color: "#555",
                marginX: "20px",
                textWrap: "nowrap",
                overflowY: "visible",
              }}
            >
              <strong>선택된 필터</strong>
            </Box>

            <Chip
              icon={<RestartAltIcon style={{ color: "#fff" }} />}
              label={"reset"}
              sx={{
                backgroundColor: grey[600],
                color: "#fff",
                fontWeight: "bold",
                marginRight: "8px",
                cursor: "pointer",
                alignContent: "center",
                justifyContent: "center",
              }}
              onClick={resetSkill}
            />
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
                  onClick={() => removeSkill(selectedSkill)}
                />
              ))}
            </div>
          </>
        }
      </div>
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
    flexWrap: "nowrap", // 가로로 나열하고 넘치면 다음 줄로
    gap: "8px",
    overflow: "auto",
  },
  fallbackContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
  },
};
