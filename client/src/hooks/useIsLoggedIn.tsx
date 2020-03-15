export const useIsLoggedIn: Function = (): boolean => {
  return !!localStorage.getItem("recordStore");
};
