const contentful = require("contentful");
const marked = require("marked");

const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = function () {
  return client
    .getEntries({ order: "sys.updatedAt" })
    .then(function (response) {
      const page = response.items.map(function (page) {
        // some are undefined!!!!!
        // console.log("PAGEFIELDSBODY", typeof page.fields.body);
        page.fields.date = new Date(page.sys.updatedAt);
        page.fields.body = page.fields.body && marked.parse(page.fields.body);
        return page.fields;
      });
      return page;
    })
    .catch(console.error);
};
