import dataService from '../services/DataService.js';
import RegisterFormController from './RegisterFormController.js';


export default class LoginFormController extends RegisterFormController {

    async makePost (user) {
        const data = await dataService.login(user);
        /*
        alert('Usuario creado con éxito!');
        window.location.href = '/login.html';  // envía al usuario a la página de login
        */
       dataService.saveToken(data.accessToken);
       window.location.href = '/';

    }

}
