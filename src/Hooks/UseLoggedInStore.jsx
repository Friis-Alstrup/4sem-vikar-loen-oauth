import { create } from "zustand";

export const useLoggedInStore = create((set) => {
  const savedState = JSON.parse(localStorage.getItem("loggedInState")) || {
    isLoggedIn: false,
  };

  return {
    isLoggedIn: savedState.isLoggedIn,
    login: () => {
      set({ isLoggedIn: true });
      const state = { isLoggedIn: true };
      localStorage.setItem("loggedInState", JSON.stringify(state));
    },
    logout: () => {
      set({ isLoggedIn: false });
      const state = { isLoggedIn: false };
      localStorage.setItem("loggedInState", JSON.stringify(state));
    },
  };
});
