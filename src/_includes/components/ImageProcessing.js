function imageProcessing(imageUrl, title) {
  return `<img class='u-max-full-width'
            srcset="https:${imageUrl}?w=480&fm=webp&q=80&fit=fill&f=faces 480w,
            https:${imageUrl}?w=800&fm=webp&q=80&fit=fill&f=faces 800w" sizes="(max-width: 600px) 480px,800px"
            src="https:${imageUrl}?w=480&fit=fill&f=faces"
            alt="${title}" loading="lazy">`;
}

// module.exports = imageProcessing;
export default imageProcessing;
