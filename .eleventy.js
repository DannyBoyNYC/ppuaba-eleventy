require("dotenv").config();
const marked = require("marked");
const contentful = require("contentful");
const client = contentful.createClient({
  // A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // The access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
});

const Card = require("./src/_includes/components/Card");
const Page = require("./src/_includes/components/Page");

// const asset = client
//   .getAsset("8Ou4Gl5U3cDO0T4BLYCEQ")
//   .then((asset) => console.log("TEST:: ", asset.fields.file.url));

// const {
//     documentToHtmlString
// } = require('@contentful/rich-text-html-renderer');

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  // eleventyConfig.addShortcode('documentToHtmlString', documentToHtmlString);
  // eleventyConfig.addShortcode("imageProcessing", imageProcessing);
  eleventyConfig.addShortcode("marked", marked);
  eleventyConfig.addShortcode("Card", Card);
  eleventyConfig.addShortcode("Page", Page);
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
