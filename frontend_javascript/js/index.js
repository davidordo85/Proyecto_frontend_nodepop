
import { adsView } from "./views.js";
import dataService  from "./services/DataService.js"

window.addEventListener('DOMContentLoaded', async (event) => {
    const loader = document.querySelector('.lds-ring');
    loader.classList.add('hidden');

    const cargarAdvertisements = (advertisements) => {
        console.log('BIEN! VOY A PINTAR LOS ANUNCIOS');
        const list = document.querySelector('.ads-list');
        for (const advertisement of advertisements) {
            const advertisementElement = document.createElement("article");
            const advertisementHTML = adsView(advertisement);
            advertisementElement.innerHTML = advertisementHTML;
            list.appendChild(advertisementElement);            
        }        
    };

    const avisarDelError = (error) => {
        console.log('NO SE HAN PODIDO CARGAR LOS ANUNCIOS', error);
    };

    //dataService.getAdvertisements().then(cargarAdvertisements).catch(avisarDelError)
    try {
        const advertisements = await dataService.getAdvertisements();
        cargarAdvertisements(advertisements);
    } catch (error) {
        avisarDelError(error);
    }
});