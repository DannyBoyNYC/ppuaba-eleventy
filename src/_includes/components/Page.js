const imageProcessing = require("./ImageProcessing");

let options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

Page = (title, date, imageUrl, body) => `
  <section class="page__header">
    <div class="page__header__image">
<div style="max-width: 1800px; dispay: block">
      <img src="${imageUrl}" alt="${title}" />
      </div>
    </div>
      <h1>${title}</h1>
      <h3 class="date">Updated: ${new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(date)}</h3>
  </section>
  <section>
      <div className="body">
      ${body}
      </div>
  </section>`;

module.exports = Page;
