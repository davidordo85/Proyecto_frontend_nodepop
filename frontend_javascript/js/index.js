
import LoaderController from './controller/LoaderController.js';
import PostListController from './controller/PostListController.js';

window.addEventListener('DOMContentLoaded', async (event) => {
    const loader = document.querySelector('.lds-ring');
    const loaderController = new LoaderController(loader);

    const element = document.querySelector('.ads-list');
    const controller = new PostListController(element);
    controller.loader = loaderController;
    controller.loadAds();
});