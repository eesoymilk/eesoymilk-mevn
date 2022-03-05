import type { Auth0Plugin } from "@/models/auth0Plugin";
import createAuth0Client from "@auth0/auth0-spa-js";
import type { Auth0Client } from "@auth0/auth0-spa-js";
import type {
  GetTokenSilentlyOptions,
  LogoutOptions,
  RedirectLoginOptions,
  User,
} from "@auth0/auth0-spa-js";
import { inject, provide, ref } from "vue";
import router from "../router";

const domain = import.meta.env.VITE_VUE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_VUE_APP_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_VUE_APP_AUTH0_AUDIENCE;
const callbackUrl = import.meta.env.VITE_VUE_APP_AUTH0_CALLBACK_URL;
const serverUrl = import.meta.env.VITE_VUE_APP_API_SERVER_URL;

console.table({ domain, clientId, audience, callbackUrl, serverUrl });

const auth0Client = ref<Auth0Client | null>(null);
export const isAuthenticated = ref(false);
export const isLoading = ref(true);
const user = ref<User | null>(null);
const error = ref<Error | null>(null);

// name for vue provide/inject
const Auth0Symbol = Symbol();

const createClient = async (): Promise<void> => {
  console.log("Creating Client...");
  auth0Client.value = await createAuth0Client({
    domain: domain as string,
    client_id: clientId as string,
    audience: audience as string,
    redirect_uri: callbackUrl as string,
  });
};

const handleCallback = async (): Promise<void> => {
  console.log("Handling Callback...");

  if (!auth0Client.value) return;

  isAuthenticated.value = await auth0Client.value.isAuthenticated();

  if (isAuthenticated.value) {
    user.value = (await auth0Client.value.getUser()) || null;
    isLoading.value = false;

    window.history.replaceState({}, document.title, window.location.pathname);

    return;
  }

  const params = new URLSearchParams(window.location.search);
  const hasError = params.has("error");
  const hasCode = params.has("code");
  const hasState = params.has("state");

  if (hasError) {
    error.value = new Error(
      params.get("error_description") || "error completing login process"
    );

    isLoading.value = false;

    return;
  }

  if (hasCode && hasState) {
    try {
      const result = await auth0Client.value.handleRedirectCallback();

      let url = "/";

      if (result.appState && result.appState.targetUrl) {
        url = result.appState.targetUrl;
      }

      isAuthenticated.value = await auth0Client.value.isAuthenticated();

      if (isAuthenticated.value) {
        user.value = (await auth0Client.value.getUser()) || null;
        error.value = null;

        isLoading.value = false;

        await router.push(url);

        return;
      }
    } catch (err: unknown) {
      if (err instanceof Error) error.value = err;
    }
  }

  isLoading.value = false;
};

export const login = async (options?: RedirectLoginOptions): Promise<void> => {
  // console.log(auth0Client.value);
  if (!auth0Client.value) return;

  try {
    await auth0Client.value.loginWithRedirect(options);
  } catch (err: unknown) {
    if (err instanceof Error) error.value = err;
  }
};

const logout = async (options?: LogoutOptions): Promise<void> => {
  if (!auth0Client.value) return;

  try {
    auth0Client.value.logout(options);
  } catch (err: unknown) {
    if (err instanceof Error) error.value = err;
  }
};

const getAccessToken = async (
  options?: GetTokenSilentlyOptions
): Promise<null | string> => {
  if (!auth0Client.value || !user.value) return null;
  console.log("Getting Token...");
  return (await auth0Client.value.getTokenSilently(options)) as string;
};

// vue provide
export const provideAuth0 = (): void => {
  const auth0 = {
    isAuthenticated,
    isLoading,
    user,

    createClient,
    handleCallback,
    login,
    logout,
    getAccessToken,
  };

  provide(Auth0Symbol, auth0);
};

// vue inject
export const useAuth0 = (): Auth0Plugin | null => {
  const auth0 = inject<Auth0Plugin | null>(Auth0Symbol, null);
  // console.log("auth0: ", auth0);
  // if (!auth0) return null;
  return auth0;
};
