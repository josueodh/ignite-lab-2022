import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4t397gc302v01z66zlv8vqb/master",
  cache: new InMemoryCache(),
});
