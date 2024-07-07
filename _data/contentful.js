const contentful = require("contentful");
const marked = require("marked");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  // environment: process.env.CTFL_ENVIRONMENT,
  host: "cdn.contentful.com",
});

module.exports = function () {
  return client
    .getEntries({ content_type: "post", order: "sys.updatedAt" })
    .then((response) => {
      const page = response.items.map((page) => {
        page.fields.date = new Date(page.sys.updatedAt);
        page.fields.body = page.fields.body && marked.parse(page.fields.body);
        // some images are undefined
        page.fields.imageUrl = page.fields.heroImage?.fields?.file?.url;
        return page.fields;
      });
      // console.log("FIELDS", page.fields);
      return page;
    })
    .catch(console.error);
};
