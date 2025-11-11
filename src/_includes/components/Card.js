// const imageProcessing = require("./ImageProcessing");
import imageProcessing from "./ImageProcessing.js";

let options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const Card = (title, date, imageUrl, description) => {
  // Function to truncate text to specified word count
  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    // Replace HTML tags with spaces to preserve word boundaries
    const plainText = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
    const words = plainText.trim().split(/\s+/);
    if (words.length <= wordLimit) return plainText;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const truncatedDescription = truncateText(description, 12);

  return `
  <div class="image-container">
    ${imageProcessing(imageUrl, title)}
  </div>
  <h2>${title}</h2>
  <time class="date" datetime="${date.toISOString()}">Updated: ${new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(date)}</time>
  <p>${truncatedDescription}</p>
  `;
};

// module.exports = Card;
export default Card;
