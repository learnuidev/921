export const vectaraConfig = {
  apiUrl: process.env.NEXT_PUBLIC_VECTARA_API_URL_V1,
  apiKey: process.env.VECTARA_API_KEY,
  clientId: process.env.VECTARA_CLIENT_ID,
};

export const corpusApiUrls = {
  listCorpus: `${vectaraConfig.apiKey}/list-corpora`,
};
