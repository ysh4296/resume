import { useMemo } from "react";

export const useMergedSkills = (portfolios) => {
  return useMemo(() => {
    const skillsMap = new Map();

    portfolios.forEach((portfolio) => {
      if (portfolio.skills) {
        portfolio.skills.forEach(({ category, skill }) => {
          if (!skillsMap.has(category)) {
            skillsMap.set(category, new Set(skill));
          } else {
            const existingSkills = skillsMap.get(category);
            skill.forEach((s) => existingSkills.add(s));
          }
        });
      }
    });

    return Array.from(skillsMap, ([category, skillsSet]) => ({
      category: category as string,
      skill: Array.from(skillsSet as string).sort((a, b) => a.localeCompare(b)),
    })).sort((a, b) => a.category.localeCompare(b.category));
  }, [portfolios]); // portfolios가 변경될 때만 계산
};
