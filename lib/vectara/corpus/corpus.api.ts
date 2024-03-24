import { corpusApiUrls, vectaraConfig } from "../vectara.constants";
import { ListCorporaResponse } from "./corpus.type";

export const listCorporaApi = async () => {
  try {
    const resp = await fetch(corpusApiUrls.listCorpus, {
      method: "POST",
      headers: {
        "x-api-key": vectaraConfig.apiKey || "",
        "customer-id": vectaraConfig.clientId || "",
      },
      body: JSON.stringify({}),
    });
    const corpora = await resp.json();
    return corpora as ListCorporaResponse;
  } catch (err) {
    console.log("ERR");
  }
};
