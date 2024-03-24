import { useState } from "react";

import Axios from "axios";
import { getUploadUrl } from "@/modules/asset/asset.api";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

export const FileUploader = ({ onUploadSuccess }: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState(0);

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

  const uploadFile = async (file: any) => {
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
          setProgress(percentage * 100);
        },
        headers: { ["Content-Type"]: contentType },
      });

      console.log("UPLOADED: ", resp);

      onUploadSuccess?.({ referenceId: resp });
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <div className="my-16 w-full">
      {/* <Label htmlFor="picture">Picture</Label>
    <Input id="picture" type="file" /> */}
      <p>{progress}%</p>

      <div></div>

      <div className="flex justify-center w-96 flex-col mx-8">
        <Label htmlFor="files">Picture</Label>

        <Input id="files" type="file" onChange={handleFileInput} multiple />
      </div>

      <button onClick={uploadFiles}> Upload to S3</button>
    </div>
  );
};
