export const adsView = (advertisement) => {
    return `<div class="post">
    <strong class="author">${advertisement.author}</strong>
    <p class="message">${advertisement.message}</p>
    <time datetime="${advertisement.date}">${advertisement.date}</time>
</div>`;
}
