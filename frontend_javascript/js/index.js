
const loader = document.querySelector('.lds-ring');

loader.classList.add('hidden');

const advertisements = [
    {
        name: 'xbox controller',
        precio: '60.00',
        compra: 'true',
        image: 'controller.jpg'
    },
    {
        name: 'apple-tv',
        precio: '160.00',
        compra: 'false',
        image: 'apple-tv.jpg'
    },
    {
        name: 'chromeCast',
        precio: '25.00',
        compra: 'true',
        image: 'chromecast.jpg'
    },
    {
        name: 'radio-despertador',
        precio: '10.00',
        compra: 'false',
        image: 'despertador.jpg'
    },
];

const list = document.querySelector('.ads-list');
for (const advertisement of advertisements) {
    const advertisementElement = document.createElement('article');
    const advertisementHTML = `<div class="ads">
        <strong class="name">${advertisement.name}</strong>
        <p class="precio">${advertisement.precio}</p>
        <p class="compra">${advertisement.compra}</p>
    </div>`;
    advertisementElement.innerHTML = advertisementHTML;
    list.appendChild(advertisementElement);

}