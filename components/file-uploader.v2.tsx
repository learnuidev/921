/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/M9rvN8dxY4g
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Progress } from "./ui/progress";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FileUploader(props: { title: string }) {
  const { title } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full">
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl h-[640px]">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
          <DialogDescription>
            Your files will be uploaded publicly.
          </DialogDescription>
        </DialogHeader>

        <div className="w-full">
          <FileUploaderComponent />
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from "react";

import Axios from "axios";
import { getUploadUrl } from "@/modules/asset/asset.api";
import { Icons } from "./icons";

const getContentType = (extension: string) => {
  switch (extension) {
    case "png":
      return "image/png";
    case "mp4":
      return "video/mp4";
    case "pdf":
      return "application/pdf";
    default:
      return "image/jpeg";
  }
};

function FileItem({ file, progress }: { file: any; progress: number }) {
  const fileName = file.name;
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileIcon className="h-6 w-6" />
          <div className="text-sm font-medium">{fileName}</div>
        </div>
        {/* <div className="text-xs text-gray-500">1.5mb / 4.2mb</div> */}
        <div className="text-xs text-gray-500">{progress.toFixed(2)}</div>
      </div>
      <Progress className="h-1.5" value={progress * 100} />
    </>
  );
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export function FileUploaderComponent({
  onUploadSuccess,
}: {
  onUploadSuccess?: () => void;
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState<
    { id: string; file: File }[]
  >([]);
  const [progress, setProgress] = useState<Record<string, number>>({});

  const handleFileInput = async (e: any) => {
    setSelectedFile(e.target.files[0]);
    setSelectedFiles(
      [...e?.target?.files].map((file) => {
        return {
          id: crypto.randomUUID(),
          file,
        };
      }) as any
    );
  };

  const uploadFiles = async () => {
    return Promise.all(
      selectedFiles.map(async (file) => {
        return await uploadFile(file);
      })
    );
  };

  const uploadFile = async (props: { id: string; file: any }) => {
    const { file, id } = props;
    try {
      console.log("UPLOADING");

      const extension = file.name.split(".").pop();
      console.log("EXTENSION: ", extension);
      const contentType = getContentType(extension);

      const params = { contentType, extension, urlId: crypto.randomUUID() };
      console.log("PARAMS: ", params);

      const uploadResp = await getUploadUrl(params);

      console.log("Uploaded Response", uploadResp);

      const { signedUrl: url, s3Key } = uploadResp;

      const formData = new FormData();
      formData.append("image", file);
      const resp = await Axios.put(url, file, {
        onUploadProgress: (progressEvent) => {
          const percentage = progressEvent.loaded / progressEvent.total;
          console.log("PROGRESS", percentage * 100);
          setProgress((prevProgress) => {
            return {
              ...prevProgress,
              [id]: percentage,
            };
          });
        },
        headers: { ["Content-Type"]: contentType },
      });

      console.log("UPLOADED: ", resp);

      // onUploadSuccess?.({ referenceId: resp });
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <Card>
      {/* <CardHeader>
        <CardTitle className="text-base">Upload files</CardTitle>
        <CardDescription className="text-sm">
          Your files will be uploaded securely.
        </CardDescription>
      </CardHeader> */}
      <CardContent className="space-y-4">
        {!selectedFiles?.length && (
          <div className="border-dashed border border-gray-200 rounded-lg w-full p-6 flex items-center justify-center">
            <div className="space-y-1 text-center">
              <FileIcon className="mx-auto h-12 w-12 text-gray-300" />
              <div className="font-medium text-sm text-gray-500">
                <p className="sm:hidden">Drop the files here</p>
                <p className="hidden sm:block">Drag and drop your files here</p>

                <p className="my-8 text-gray-400 font-bold">or</p>
                {/* <Button className="mt-4" variant="outline">
                Or select files
              </Button> */}
                <div className="">
                  {/* <Label htmlFor="files">Picture</Label> */}

                  <Input
                    onChange={handleFileInput}
                    id="files"
                    type="file"
                    placeholder="hello"
                    multiple
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedFiles?.length > 0 && (
          <ScrollArea className="h-[340px] w-full rounded-md border p-4">
            <div className="space-y-4">
              {selectedFiles?.length
                ? selectedFiles.map((file) => {
                    return (
                      <FileItem
                        progress={progress?.[file.id] || 0}
                        file={file.file}
                        key={JSON.stringify(file.id)}
                      />
                    );
                  })
                : null}
            </div>
          </ScrollArea>
        )}
      </CardContent>
      {selectedFiles?.length > 0 && (
        <CardFooter className="flex justify-end items-center gap-2">
          {/* <Button className="w-32" variant="outline">
          Cancel
        </Button> */}
          <Button
            className="w-full"
            onClick={() => {
              uploadFiles();
            }}
          >
            Upload
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}