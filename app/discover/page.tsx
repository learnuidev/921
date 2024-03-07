"use client";

import { Navbar } from "@/components/nav-bar";
import Link from "next/link";

export default function Learn() {
  const lessons = [
    {
      title: "Huawei",
      description: "everything about huawei",
      link: "https://www.921.studio",
    },
    {
      title: "Industrial Revolution",
      description:
        "transition from a farming and handicraft economy to one dominated by industry and machine manufacturing",
      link: "https://www.mandarino.io",
    },
    {
      title: "Creative Human",
      description: "Learn the art of being a creative person",
      link: "https://www.composeui.io",
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center flex-col mt-56 space-y-12">
        {lessons.map((lesson) => {
          return (
            <div
              key={lesson.title}
              className="max-w-2xl flex flex-col items-center"
            >
              <Link
                target="_blank"
                rel="noreferrer"
                href={lesson.link}
                className="font-bold text-4xl"
              >
                {lesson.title}
              </Link>

              <p className="text-gray-800 font-extralight text-center">
                {lesson.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
