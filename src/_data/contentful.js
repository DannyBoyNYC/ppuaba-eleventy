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
    .getEntries({ content_type: "post", order: "sys.createdAt" })
    .then((response) => {
      const page = response.items.map((page) => {
        page.fields.date = new Date(page.fields?.publishDate);
        // console.log(
        //   "page.fields.temp for",
        //   page.fields.title,
        //   ":",
        //   page.fields.temp
        // );
        page.fields.body = page.fields.body && marked.parse(page.fields.body);
        // some images are undefined
        page.fields.imageUrl = page.fields.heroImage?.fields?.file?.url;
        // caption field might be undefined
        page.fields.caption = page.fields.caption || "";
        return page.fields;
      });
      return page;
    })
    .catch(console.error);
}
