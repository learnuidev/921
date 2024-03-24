import { useQuery } from "@tanstack/react-query";

import { GetHtmlTextParams } from "./asset.types";
import { getHtmlText } from "./resource.api";
import { resourceQueryIds } from "./resource.query-ids";

export function useGetHtmlTextQuery(
  params = {} as GetHtmlTextParams,
  options = {} as any
) {
  return useQuery({
    queryKey: [
      resourceQueryIds.getHtmlText,
      params.url,
      params.selector,
      params.ai,
    ],
    queryFn: async () => {
      const response = await getHtmlText(params);
      return response;
    },
    ...options,
    enabled: Boolean(params.url) && Boolean(params.selector),
    cacheTime: 1000 * 60 * 300, // 30 minutes,
    refetchOnWindowFocus: false,
    refetchOnFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
