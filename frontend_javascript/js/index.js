// importar controlador del loader y la lista de anuncios 
import PostListController from "./controller/PostListController.js";
import LoaderController from "./controller/LoaderController.js";
import ErrorController from "./controller/ErrorController.js";
import NewTweetOrLoginController from "./controller/NewTweetOrLoginController.js";


window.addEventListener("DOMContentLoaded", async (event) => {
    // anillo de carga
    const loader = document.querySelector(".lds-ring");
    const loaderController = new LoaderController(loader);

    // carga de los anuncios
    const element = document.querySelector(".ads-list");
    const controller = new PostListController(element);
    controller.loader = loaderController;
    controller.loadAds();

    // mensaje de error
    const errorsElement = document.querySelector(".global-errors");
    const errorController = new ErrorController(errorsElement);

    // botones en el login
    const newTweetButtons = document.querySelector('.new-tweet');
    const buttonsController = new NewTweetOrLoginController(newTweetButtons);
});