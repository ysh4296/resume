import SkillsSection from "@contents/skills/skillList";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelectedSkillsStore } from "@store/select";
import { useEffect, useRef, useState } from "react";
import PortfolioItem from "./PortfolioItem";

interface PortfolioListProps {
  skills: Queries.GetAllPostsQuery["allSanityPost"]["nodes"][number]["skills"];
  portfolios: Queries.GetAllPostsQuery["allSanityPost"]["nodes"];
}

const PortfolioList = ({ skills, portfolios }: PortfolioListProps) => {
  const selectedSkills = useSelectedSkillsStore(
    (state) => state.selectedSkills,
  );
  const resetSkill = useSelectedSkillsStore((state) => state.resetSkill);
  const removeSkill = useSelectedSkillsStore((state) => state.removeSkill);

  // SkillsSection 상태 관리
  const [isSkillsSectionOpen, setIsSkillsSectionOpen] = useState(false);
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);

  const toggleSkillsSection = () => {
    setIsSkillsSectionOpen((prev) => !prev);
  };

  // 컴포넌트 외부 클릭 감지
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        skillsSectionRef.current &&
        !skillsSectionRef.current.contains(event.target as Node)
      ) {
        setIsSkillsSectionOpen(false); // 외부 클릭 시 닫기
      }
    };
    if (isSkillsSectionOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSkillsSectionOpen]);

  return (
    <div style={styles.listContainer}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: isSkillsSectionOpen
            ? "rgba(0, 0, 0, 0.3)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: isSkillsSectionOpen ? "blur(8px)" : "blur(0px)",
          zIndex: 999, // Blur 활성화 시 앞으로
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease",
          pointerEvents: isSkillsSectionOpen ? "auto" : "none", // Blur 외부 클릭 방지
        }}
        onClick={toggleSkillsSection} // 필터 영역 밖 클릭 시 닫기
      />
      {/* 선택된 스킬 표시 */}
      <Stack
        direction="row-reverse"
        justifyContent="space-between"
        width="100%"
      >
        {/* 필터 아이콘 */}
        <Box sx={{ position: "relative", zIndex: 1000 }}>
          <Chip
            icon={<FilterAltIcon style={{ color: "#fff" }} />}
            label="Filter"
            sx={{
              backgroundColor: grey[600],
              color: "#fff",
              fontWeight: "bold",
              marginRight: "8px",
              cursor: "pointer",
            }}
            onClick={toggleSkillsSection}
          />
          {/* SkillsSection - Icon 기준 Popup */}
          <div
            ref={skillsSectionRef}
            style={{
              ...styles.skillsSectionPopup,
              transition: "opacity 0.4s ease, transform 0.4s ease", // opacity와 transform 전환 추가
              opacity: isSkillsSectionOpen ? 1 : 0, // 열릴 때 1, 닫힐 때 0
              transform: isSkillsSectionOpen
                ? "translateY(0)" // 열릴 때 원래 위치
                : "translateY(-10px)", // 닫힐 때 살짝 위로 이동
              pointerEvents: isSkillsSectionOpen ? "auto" : "none", // 닫혔을 때 클릭 방지
            }}
          >
            <SkillsSection skills={skills} edit />
          </div>
        </Box>
      </Stack>
      <div style={styles.selectedSkillsContainer}>
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

        {/* Reset 버튼 */}
        <Chip
          icon={<RestartAltIcon style={{ color: "#fff" }} />}
          label="Reset"
          sx={{
            backgroundColor: grey[600],
            color: "#fff",
            fontWeight: "bold",
            marginRight: "8px",
            cursor: "pointer",
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
  chipContainer: {
    display: "flex",
    flexWrap: "nowrap", // 가로로 나열하고 넘치면 다음 줄로
    gap: "8px",
    overflow: "auto",
  },
  skillsSectionPopup: {
    position: "absolute",
    top: "40px", // 아이콘 바로 아래
    right: "16px",
    zIndex: 1000,
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "1px solid",
    padding: "16px",
    width: "80vw", // 적절한 너비 설정
  },
  fallbackContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
  },
};
