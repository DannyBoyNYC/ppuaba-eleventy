import "dotenv/config";
import { marked } from "marked";
import * as contentful from "contentful";
import Card from "./src/_includes/components/Card.js";
import Page from "./src/_includes/components/Page.js";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
});

export default async function (eleventyConfig) {
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
}
