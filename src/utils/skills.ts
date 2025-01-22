export const mergeSkillsData = (portfolios: any) => {
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

  // Map 데이터를 배열로 변환
  return Array.from(skillsMap, ([category, skillsSet]) => ({
    category: category as string,
    skill: Array.from(skillsSet) as string[],
  }));
};
