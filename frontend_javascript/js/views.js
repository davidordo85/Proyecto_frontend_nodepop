export const adsView = (advertisement) => {
    return `<div class="ads">
    <strong class="name">${advertisement.name}</strong>
    <p class="precio">${advertisement.precio}</p>
    <p class="compra">${advertisement.compra}</p>
</div>`;
}