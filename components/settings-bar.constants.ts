import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Icons } from "./icons";
import { signOut } from "aws-amplify/auth";

export const settingsBarConstants = {
  items: [
    {
      id: "settings",
      url: "/settings",
      Icon: Icons.gear,
    },
    {
      id: "signout",
      onClick: (router: AppRouterInstance) => {
        return signOut().then(() => {
          // router.push("/");
          router.refresh();
        });
      },
      Icon: Icons.powerOff,
    },
  ],
};
