"use client";

import { Navbar } from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { homePage } from "./home-page.constants";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-center mt-56 mb-4 text-5xl md:text-7xl">
        {homePage.header.title}
      </h1>
      <p className="mx-16 text-center text-2xl font-extralight">
        {homePage.description.title}
      </p>
      <div className="my-8 flex items-center justify-center space-x-4">
        <Button variant="outline" className="rounded-full">
          {homePage.getStartedButton.title}
        </Button>
        <Button variant="outline" className="rounded-full">
          {homePage.viewProjects.title}
        </Button>
      </div>
    </div>
  );
}
