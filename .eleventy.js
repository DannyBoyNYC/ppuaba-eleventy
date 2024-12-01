// require("dotenv").config();
import "dotenv/config";
// const marked = require("marked");
import { marked } from "marked";
// const contentful = require("contentful");
import * as contentful from "contentful";
// const Card = require("./src/_includes/components/Card");
import Card from "./src/_includes/components/Card.js";
// const Page = require("./src/_includes/components/Page");
import Page from "./src/_includes/components/Page.js";
// const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

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
