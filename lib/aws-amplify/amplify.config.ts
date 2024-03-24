import type { ResourcesConfig } from "aws-amplify";

export const amplifyConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USERPOOL_ID || "",
      userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_WEBCLIENT_ID || "",
    },
  },
  API: {
    GraphQL: {
      defaultAuthMode: "userPool",
      endpoint: process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT || "",
      region: process.env.NEXT_PUBLIC_AWS_APPSYNC_REGION || "",
    },
  },
};
