import LoaderController from './controller/LoaderController.js'
import ErrorController from "./controller/ErrorController.js";


window.addEventListener('DOMContentLoaded', () => {

    // anillo de carga
    const loader = document.querySelector(".lds-ring");
    const loaderController = new LoaderController(loader);

    // mensaje de error
    const errorsElement = document.querySelector(".global-errors");
    const errorController = new ErrorController(errorsElement);


});