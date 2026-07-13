import { create } from "zustand";

interface AnnouncementState {
  isAnnouncementVisible: boolean;
  setAnnouncementVisible: (visible: boolean) => void;
}

export const useAnnouncementStore = create<AnnouncementState>((set) => ({
  isAnnouncementVisible: false,
  setAnnouncementVisible: (visible) => set({ isAnnouncementVisible: visible }),
}));