"use client";

import { Button } from "@/components/ui/button";
import { homePage } from "./home-page.constants";

import { FileUploader } from "@/components/file-uploader.v2";

export default function Home() {
  return (
    <div>
      <div className="my-32 w-full flex justify-center"></div>
      <h1 className="font-bold text-center mt-56 mb-4 text-5xl md:text-7xl">
        {homePage.header.title}
      </h1>
      <p className="mx-16 text-center text-2xl font-extralight">
        {homePage.description.title}
      </p>
      <div className="my-8 flex items-center justify-center space-x-4">
        {/* <Button variant="outline" className="rounded-full">
          {homePage.getStartedButton.title}
        </Button> */}
        <FileUploader title={homePage.getStartedButton.title} />
      </div>
    </div>
  );
}
