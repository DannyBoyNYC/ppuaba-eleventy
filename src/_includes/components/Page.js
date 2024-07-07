const imageProcessing = require("./ImageProcessing");

let options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

Page = (title, date, imageUrl, body) => `
      ${imageProcessing(imageUrl, title)}
      <h2 class="page__header>${title}</h2>
      <h3 class="date">Updated: ${new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(date)}</h3>
      
      <div className="body">
      ${body}
      </div>`;

module.exports = Page;
