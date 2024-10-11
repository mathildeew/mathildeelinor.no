import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "42ay9rkk",
  dataset: "production",
  apiVersion: "2024-10-11",
  useCdn: false,
});

export function urlFor(source) {
  const builder = imageUrlBuilder(client);

  if (!source) {
    return null;
  }
  return builder.image(source);
}
