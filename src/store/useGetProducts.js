import { create } from "zustand";

export const useGetProducts = create((set) => ({
    count: 8,
    inc: () => set((state) => ({ count: state.count + 8 })),
}));