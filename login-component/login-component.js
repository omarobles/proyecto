import { LitElement, html, css } from "lit";
import { styles } from "./styles.js";
export default class LoginComponent extends LitElement {
    constructor() {
        super();
        this.logo = "https://www.bbva.mx/content/dam/public-web/global/images/logos/logo_bbva_blanco.svg";
        this.mensaje = "Bienvenido";
    }

    static properties = {
        user: {
            type: String
        },
        password: {
            type: String
        },
        mensaje: {
            type: String
        }
    }

    static styles = styles;

    enterUser() {
        const valueUser = this.renderRoot.querySelector("#user").value;
        const valuePassword = this.renderRoot.querySelector("#password").value;
        this.dispatchEvent(new CustomEvent('iniciar-sesion', { bubbles: true, composed: true, detail: { user: valueUser, password: valuePassword } }))
    }

    render() {
        return html`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <main class="container">
            <section class="login">
                <div class="logo">
                    <img src = "${this.logo}">
                </div>
                <h1>${this.mensaje}</h1>
                <input id = "user" type = "text" placeholder = "Ingresa tu usuario" >
                <input id="password" type="password" placeholder="Ingresa tu contraseña">
                <p>Olvidé mi contraseña</p>
                <button id="iniciar" @click=${this.enterUser}>Entrar</button>
            </section>
        </main>
    `;
    }
}