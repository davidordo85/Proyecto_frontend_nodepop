
import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class RegisterFormController extends BaseController {

    constructor(element) {
        super(element);
        this.attachEventListener();
    }

    async makePost (user) {
        await dataService.registerUser(user);
        alert('Usuario creado con éxito!');
        window.location.href = '/login.html';
    }
    
    attachEventListener() {
        this.element.addEventListener('submit', async (event) => {
            event.preventDefault(); // evita que se envie el formulario (por defecto)
            const user = {
                username: this.element.elements.email.value,
                password: this.element.elements.password.value
            };
            this.publish(this.event.START_LOADING);
            try {
                await this.makePost(user)
            } catch (error) {
                this.publish(this.event.ERROR, error);
            } finally {
                // se ejecuta siempre
                this.publish(this.event.FINISH_LOADING);
            }
        });

        this.element.querySelectorAll('input').forEach(input => {
            const button = this.element.querySelector('button');

            input.addEventListener('keyup', event => {
                // si el input es OK lo marco en verde, si no, en rojo
                if (input.validity.valid) {
                    input.classList.add('is-success');
                    input.classList.remove('is-danger')
                } else {
                    input.classList.remove('is-success');
                    input.classList.add('is-danger');
                }

                //valido si todo el formulario es OK para habilitar o deshabilitar el boton
                if (this.element.checkValidity()) {
                    button.removeAttribute('disabled');
                } else {
                    button.setAttribute('disabled', true);
                }
            })
        }) 

        
    }
}