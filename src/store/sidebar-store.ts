import create from 'zustand'

interface HeaderState {
  show: boolean;
  toggle: () => void
}

export const useSidebar = create<HeaderState>((set) => ({
  show: false,
  toggle: () => set((state) => ({  show: !state.show })),
}));
