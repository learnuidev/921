import { ReactNode } from "react";

import { getAuthUser } from "@/lib/aws-amplify/amplify.server-utils";
import { LoginForm } from "./login-form";

type AuthenticatedProps = {
  children: ReactNode;
};

/**
 *
 * Checks if user is authenticated.
 * If true, it renders its children.
 * If false, it renders the login component.
 *
 */
export async function Authenticated({ children }: AuthenticatedProps) {
  const user = await getAuthUser();

  if (!user) {
    return (
      <main className="flex flex-col items-center pt-20">
        <LoginForm />
      </main>
    );
  }

  return <div>{children}</div>;
}
