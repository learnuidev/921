"use client";

import { useRouter } from "next/navigation";
import { settingsBarConstants } from "./settings-bar.constants";

export function NavButton({ onClick, children }: any) {
  return (
    <button onClick={onClick} className="hover:bg-none active:bg-none text-lg">
      {children}
    </button>
  );
}

export function SettingsBar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-end flex-col mx-4 h-screen py-16 space-y-4">
      {settingsBarConstants.items.map((nav) => {
        const Icon = nav.Icon;
        return (
          <NavButton key={nav.id}>
            <Icon
              onClick={() => {
                if (nav.onClick) {
                  return nav?.onClick(router);
                } else {
                  router.push(nav.url);
                }
              }}
            />
          </NavButton>
        );
      })}
    </div>
  );
}
