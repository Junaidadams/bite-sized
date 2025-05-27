import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "gzedx6c8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
