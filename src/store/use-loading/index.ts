import { create } from "zustand";

interface LoadingState {
  loading: boolean;
  changeLoading: (loading: boolean) => void;
}

const useLoadingStore = create<LoadingState>((set) => ({
  loading: false,
  changeLoading: (loading) => set(() => ({ loading })),
}));

export default useLoadingStore;
