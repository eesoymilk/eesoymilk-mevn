import { isAuthenticated, isLoading, login } from "@/services/auth0-plugin";
import { watch } from "vue";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

// vue-router's guard
export const authenticationGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const guardAction = () => {
    if (isAuthenticated.value) return next();
    next({ name: "Home" });
    // login({ appState: { targetUrl: to.fullPath } });
  };

  if (!isLoading.value) return guardAction();

  watch(isLoading, (currentValue) => {
    if (!currentValue) return guardAction();
  });
};
