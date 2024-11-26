import { create } from 'zustand';

type TitleClusterProps = {
  id: number;
  repWord1?: string;
  repWord2?: string;
  repWord3?: string;
  repWord4?: string;
  repWord5?: string;
  posters: { posterId: string; title: string; description?: string }[];
};

type TitleClusterState = {
  titleCluster: TitleClusterProps[] | null;
  setTitleCluster: (titleClusters: TitleClusterProps[]) => void;
  clearTitleCluster: () => void;
};

export const useTitleClusterStore = create<TitleClusterState>((set) => ({
  titleCluster: null,
  setTitleCluster: (data) => set({ titleCluster: data }),
  clearTitleCluster: () => set({ titleCluster: null }),
}));
