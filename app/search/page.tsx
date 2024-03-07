"use client";

import { Icons } from "@/components/icons";
import { NavButton, Navbar } from "@/components/nav-bar";
import { Input } from "@/components/ui/input";
import clsx from "clsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mt-56 mx-4 md:mx-32">
        <Input
          autoFocus
          placeholder="Ask anything"
          className={clsx(
            "md:h-16 border-none rounded-none focus-visible:ring-transparent block mx-auto font-exralight text-center focus-visible:ring-0",
            "placeholder:text-gray-200 placeholder:font-extralight placeholder:text-2xl md:placeholder:text-4xl",
            "text-2xl md:text-4xl"
          )}
        />

        <hr className="" />

        <div className="my-8 space-x-8 flex justify-center items-center">
          <NavButton>
            <Icons.magnifyingGlass />
          </NavButton>
          <NavButton>
            <Icons.gear />
          </NavButton>
        </div>
      </main>
    </div>
  );
}
