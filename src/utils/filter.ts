export const filterPortfoliosBySkills = (portfolios, selectedSkills) => {
  if (selectedSkills.length === 0) return portfolios;

  return portfolios.filter((portfolio) =>
    selectedSkills.every((selectedSkill) =>
      portfolio.skills?.some((skillCategory) =>
        skillCategory.skill?.includes(selectedSkill),
      ),
    ),
  );
};
