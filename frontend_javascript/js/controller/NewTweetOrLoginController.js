
import BaseController from "./BaseController.js";
import dataService from "../services/DataService.js"


export default class NewTweetOrLoginController extends BaseController {

    constructor(element) {
        super(element);
        this.checkIfUserIsLogged();
    }

    async checkIfUserIsLogged() {
        const usesIsLogged = await dataService.isUserLogged();
        if (usesIsLogged) {
            const newTweetButton = this.element.querySelector('.new-tweet-button');
            newTweetButton.classList.remove('is-hidden');
        } else {
            const loginRegisterButtons = this.element.querySelector('.login-register-buttons');
            loginRegisterButtons.classList.remove('is-hidden');
        }
    }
}