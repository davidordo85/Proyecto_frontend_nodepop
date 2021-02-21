import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js"

export default class NewTweetFormController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
        this.attachEventListeners();
    }

    // método mejor ponerlo en el baseController.
    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = '/login.html';
        } else {
            this.publish(this.event.FINISH_LOADING);
        }
    }

    attachEventListeners() {

    }
}