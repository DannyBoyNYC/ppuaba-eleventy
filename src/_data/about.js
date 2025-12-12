import * as contentful from "contentful";
import { marked } from "marked";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  // environment: process.env.CTFL_ENVIRONMENT,
  host: "cdn.contentful.com",
});

export default function () {
  return client
    .getEntries({ content_type: "page", "fields.slug": "about" })
    .then((response) => {
      const about = response.items.map((about) => {
        about.fields.date = new Date(about.sys.updatedAt);
        about.fields.body =
          about.fields.body && marked.parse(about.fields.body);
        return about.fields;
      });
      console.log("responses", response);
      console.log("ABOUT", about);
      return about[0];
    })
    .catch(console.error);
}
