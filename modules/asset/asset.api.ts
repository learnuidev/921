import { apiConfig } from "@/lib/config/api-config";
import { GetUploadUrlParams, GetUploadUrlSuccess } from "./asset.types";
import { getAuthToken } from "@/lib/aws-amplify/amplify.client-utils";

export const getUploadUrl = async ({
  contentType,
  extension,
}: GetUploadUrlParams): Promise<GetUploadUrlSuccess> => {
  const authToken = await getAuthToken();

  const res = await fetch(`${apiConfig.apiUrl}/v1/get-upload-url`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({
      contentType,
      extension,
    }),
  });
  const resp = (await res.json()) as any;

  return resp;
};
