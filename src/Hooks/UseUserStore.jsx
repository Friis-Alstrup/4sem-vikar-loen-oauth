import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  createUser: (
    sub,
    name,
    given_name,
    family_name,
    picture,
    email,
    email_verified,
    locale
  ) => {
    const newUser = {
      sub,
      name,
      given_name,
      family_name,
      picture,
      email,
      email_verified,
      locale,
    };
    set({ user: newUser });
  },
  removeUser: () => set({ user: null }),
}));
