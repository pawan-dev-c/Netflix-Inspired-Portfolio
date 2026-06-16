// src/queries/datoCMSClient.ts
// DatoCMS disabled — keep this so imports do not crash.
const datoCMSClient = {
  request: async () => {
    console.warn("datoCMSClient.request called but CMS is disabled. Returning empty object.");
    return {};
  },
};

export default datoCMSClient;
