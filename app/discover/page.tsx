"use client";

import { Navbar } from "@/components/nav-bar";
import Link from "next/link";

export default function Learn() {
  const lessons = [
    {
      title: "921",
      description: "gen ai platform from the future",
      link: "https://www.921.studio",
    },
    {
      title: "mandarino",
      description: "intelligent language learning platform",
      link: "https://www.mandarino.io",
    },
    {
      title: "composeui",
      description: "aws console from the future",
      link: "https://www.composeui.io",
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center flex-col mt-56 space-y-12">
        {lessons.map((lesson) => {
          return (
            <div key={lesson.title} className="flex flex-col items-center">
              <Link
                target="_blank"
                rel="noreferrer"
                href={lesson.link}
                className="font-bold text-4xl"
              >
                {lesson.title}
              </Link>

              <p className="text-gray-800 font-extralight">
                {lesson.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
