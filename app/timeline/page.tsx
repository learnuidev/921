"use client";

import { Navbar } from "@/components/nav-bar";
import Link from "next/link";

export default function History() {
  const tasks = [
    {
      title: "Appiontment",
    },
    {
      title: "Update Profile",
    },
    {
      title: "Onboarding",
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center flex-col mt-56 space-y-8">
        {tasks.map((task) => {
          return (
            <Link href={"/"} className="font-light text-2xl" key={task.title}>
              {task.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
