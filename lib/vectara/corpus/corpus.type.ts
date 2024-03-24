export interface Corpus {
  id: number;
  name: string;
  description: string;
  dtProvision: string;
  enabled: boolean;
  swapQenc: boolean;
  swapIenc: boolean;
  textless: boolean;
  encrypted: boolean;
  encoderId: string;
  metadataMaxBytes: number;
  faissIndexType: string;
  customDimensions: any[];
  filterAttributes: any[];
}

export interface ListCorporaResponse {
  corpus: Corpus[];
}
