import { create } from "zustand";

interface SelectedSkillsState {
  selectedSkills: string[]; // 선택된 스킬 목록
  addSkill: (skill: string) => void; // 스킬 추가
  removeSkill: (skill: string) => void; // 스킬 제거
  resetSkill: () => void; // 스킬 초기화
}

export const useSelectedSkillsStore = create<SelectedSkillsState>((set) => ({
  selectedSkills: [],
  addSkill: (skill) =>
    set((state) => ({
      selectedSkills: state.selectedSkills.includes(skill)
        ? state.selectedSkills
        : [...state.selectedSkills, skill],
    })), // 중복 제거
  removeSkill: (skill) =>
    set((state) => ({
      selectedSkills: state.selectedSkills.filter((s) => s !== skill),
    })),
  resetSkill: () => set(() => ({ selectedSkills: [] })),
}));
