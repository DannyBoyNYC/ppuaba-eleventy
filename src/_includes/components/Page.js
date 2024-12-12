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
     
    </div>
      <h1>${title}</h1>
  </section>
  <section class="page__body">
   
       <p class="date">Updated: ${new Intl.DateTimeFormat(
         "en-US",
         options
       ).format(date)}</p>
      ${body}
     
  </section>`;

export default Page;
