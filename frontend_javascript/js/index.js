
import PostListController from './controller/PostListController.js';

window.addEventListener('DOMContentLoaded', async (event) => {
    const loader = document.querySelector('.lds-ring');
    loader.classList.add('hidden');

    const element = document.querySelector('.ads-list');
    const controller = new PostListController(element);
    controller.loadAds();
});