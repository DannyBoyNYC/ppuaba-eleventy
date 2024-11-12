require("dotenv").config();
const marked = require("marked");
const contentful = require("contentful");
const Card = require("./src/_includes/components/Card");
const Page = require("./src/_includes/components/Page");
// const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
});

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
