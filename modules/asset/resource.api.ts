import { getAuthToken } from "@/lib/aws-amplify/amplify.client-utils";
import { GetHtmlTextParams, GetHtmlTextSuccess } from "./asset.types";
import { apiConfig } from "@/lib/config/api-config";

export const getHtmlText = async ({
  url,
  selector = "body",
  ai,
}: GetHtmlTextParams): Promise<GetHtmlTextSuccess> => {
  const authToken = await getAuthToken();
  const res = await fetch(`${apiConfig.apiUrl}/v1/get-html-text`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({
      url,
      selector,
      ai,
    }),
  });
  const resp = (await res.json()) as any;

  return resp;
};
