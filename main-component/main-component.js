import LoginComponent from "../login-component/login-component.js";
import UserDataComponent from "../user-data-component/user-data-component.js";
import TransactionComponent from "../transaction-component/transaction-component.js";
import { styles } from "./styles.js";
import { LitElement, html } from "lit";
export default class MainComponent extends LitElement {
    constructor() {
        super();
        this.datos = {
            user: "",
            password: "",
            nombre: "Omar Díaz Robles",
            numCuenta: "9870532146",
            saldoNomina: 15300,
            saldoCredito: 23800,
            numTarjeta: 4152333678900202,
            movimientos: [{
                id: 0, nombre: "Amazon MX", costo: 577, descripcion: "Compra de Amazon", fecha: "14 junio, 2024 18:29 h"
            }, {
                id: 1, nombre: "Retiro Cajero Automático", costo: 1532, descripcion: "Retiro de cajero automático", fecha: "13 junio, 2024 15:20 h"
            }, {
                id: 2, nombre: "Cuenta de Terceros", costo: 735, descripcion: "Transferencia a cuenta de terceros", fecha: "10 junio, 2024 12:29 h"
            }
            ]
        };
        this.mensaje = "";
    }
    iniciarSesion(event) {
        const user = event.detail.user;
        const password = event.detail.password;
        const loginComponent = this.renderRoot.querySelector("login-component");
        const userDataComponent = this.renderRoot.querySelector("user-data-component");
        if (this.datos.user === user && this.datos.password === password) {
            this.mensaje = "Iniciando sesión...";
            setTimeout(() => {
                loginComponent.style.display = "none";
                userDataComponent.style.display = "block";
                userDataComponent.dispatchEvent(new CustomEvent('get-data', { bubbles: true, composed: true, detail: this.datos }))
            }, "2000");
        } else {
            this.mensaje = "Credenciales incorrectas";
        }
        loginComponent.renderRoot.querySelector("h1").innerText = this.mensaje;
    }

    static styles = styles;

    render() {
        return html`
        <main>
            <login-component @iniciar-sesion="${this.iniciarSesion}"></login-component>
            <user-data-component style="display: none;"></user-data-component>
            <transaction-component style="display: none;"></transaction-component>
        </main>
        `;
    }
}

customElements.define("login-component", LoginComponent);
customElements.define("user-data-component", UserDataComponent);
customElements.define("transaction-component", TransactionComponent);