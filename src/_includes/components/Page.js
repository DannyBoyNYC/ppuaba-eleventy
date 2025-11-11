// import imageProcessing from "./ImageProcessing.js";

let options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const Page = (title, date, imageUrl, body) => `
  <section class="page__header">
    <div class="page__header__image">
      <img src="${imageUrl}" alt="${title}" />
            <h1>${title}</h1>
    </div>

  </section>
  <section class="page__body">
      <time class="date" datetime="${date.toISOString()}">Updated: ${new Intl.DateTimeFormat(
  "en-US",
  options
).format(date)}</time>
    ${body}
  </section>`;

export default Page;
