const imageProcessing = require("./ImageProcessing");

let options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

Card = (title, date, imageUrl) => `
  <div class="image-container">
    ${imageProcessing(imageUrl, title)}
  </div>
  <h2>${title}</h2>
  <h3 class="date">Updated: ${new Intl.DateTimeFormat("en-US", options).format(
    date
  )}</h3>`;

module.exports = Card;
