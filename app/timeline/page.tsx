// "use client";

import { Authenticated } from "@/components/authenticated";
import Link from "next/link";

export default function Timeline() {
  const tasks = [
    {
      title: "Huawei Financial Statements 2024",
      type: "pdf",
    },
    {
      title: "List React 19 features",
    },
    {
      title: "When was Liziba Station completed?",
    },
  ];
  return (
    <Authenticated>
      <div>
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
    </Authenticated>
  );
}
