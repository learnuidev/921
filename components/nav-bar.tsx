"use client";

import { useRouter } from "next/navigation";
import { navBarConstants } from "./nav-bar.constants";

export function NavButton({ onClick, children }: any) {
  return (
    <button onClick={onClick} className="hover:bg-none active:bg-none text-lg">
      {children}
    </button>
  );
}

export function Navbar() {
  const router = useRouter();

  return (
    <div className="mt-2 space-x-12 flex items-center justify-center">
      {navBarConstants.items.map((nav) => {
        const Icon = nav.Icon;
        return (
          <NavButton key={nav.id}>
            <Icon
              onClick={() => {
                router.push(nav.url);
              }}
            />
          </NavButton>
        );
      })}
    </div>
  );
}
