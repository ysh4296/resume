import { useMemo } from "react";

export const useFilteredPortfolios = (portfolios, selectedSkills) => {
  return useMemo(() => {
    if (selectedSkills.length === 0) {
      // endDate 기준으로 내림차순 정렬
      return portfolios.sort((a, b) => (b.endDate > a.endDate ? 1 : -1));
    }

    const filteredPortfolios = portfolios.filter((portfolio) =>
      selectedSkills.some((selectedSkill) =>
        portfolio.skills?.some((skillCategory) =>
          skillCategory.skill?.includes(selectedSkill),
        ),
      ),
    );

    // endDate 기준으로 내림차순 정렬
    return filteredPortfolios.sort((a, b) => (b.endDate > a.endDate ? 1 : -1));
  }, [portfolios, selectedSkills]); // portfolios와 selectedSkills가 변경될 때만 계산
};
