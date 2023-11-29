import { create } from "zustand";

type ProfileProps = { id: string; name: string } | null;

export type UseProfileProps = {
  profile: ProfileProps;
  setProfile: (profile: ProfileProps) => void;
};

export const useProfileStore = create<UseProfileProps>((set) => ({
  profile: null,
  setProfile: (loginProfile: ProfileProps) => set({ profile: loginProfile }),
}));
