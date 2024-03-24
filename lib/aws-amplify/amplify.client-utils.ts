import { fetchAuthSession, getCurrentUser } from "@aws-amplify/auth";
import { AuthError } from "aws-amplify/auth";

export async function getAuthUser() {
  try {
    return await getCurrentUser();
  } catch (error) {
    if (
      error instanceof AuthError &&
      error.name === "UserUnAuthenticatedException"
    ) {
      console.error(`User is not authenticated. ${error.recoverySuggestion}`);
    } else {
      console.error(error);
    }
  }
  return null;
}

export async function getAuthSession() {
  try {
    return await fetchAuthSession();
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function getAuthToken() {
  const tokens = (await getAuthSession())?.tokens;

  console.log("TOKENS", tokens);
  const authToken = tokens?.idToken?.toString();

  console.log("AUTH TOKEN", authToken);
  if (authToken) {
    return authToken;
  } else {
    return null;
  }
}
