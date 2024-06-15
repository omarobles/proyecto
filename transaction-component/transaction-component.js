import { LitElement, html } from "lit";
import { styles } from "./styles.js"
export default class TransactionComponent extends LitElement {
    constructor() {
        super();
        this.logo = "https://www.bbva.mx/content/dam/public-web/global/images/logos/logo_bbva_blanco.svg";
        this.datosMovimiento = [];
        this.nombre = "";
        this.descripcion = "";
        this.costo = 0;
        this.fecha = "";
        this.formato = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        });
    }

    static properties = {
        nombre: {
            type: String
        },
        descripcion: {
            type: String
        },
        costo: {
            type: Number
        }
    }

    static styles = styles;

    firstUpdated() {
        this.addEventListener("get-movimientos", this.getMovimientos);
    }

    getMovimientos(event) {
        const movimiento = event.detail;
        this.nombre = movimiento.nombre;
        this.descripcion = movimiento.descripcion;
        this.costo = movimiento.costo;
        this.fecha = movimiento.fecha;
    }

    regresar() {
        const mainComponent = document.querySelector("main-component");
        const userDataComponent = mainComponent.renderRoot.querySelector("user-data-component");
        const transactionComponent = this;
        userDataComponent.style.display = "block";
        transactionComponent.style.display = "none";
    }

    render() {
        return html`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <main class="container">
        <section class="login">
            <div class="logo">
                <img src = "${this.logo}">
            </div>
            <h1>${this.mensaje}</h1>
            <h2>${this.nombre}</h2>
            <hr class="separacion-top">
            <p class = "titulo-descripcion">Descripción</p>
            <p class = "descripcion">${this.descripcion}</p>
            <p class = "saldo">${this.formato.format(this.costo)}</p>
            <p>${this.fecha}</p>
            <span class="material-symbols-outlined share">
                share
            </span>
            <p>Compartir comprobante</p>
            <button id="regresar" @click=${this.regresar}>Regresar</button>
        </section>
        </main>
        `;
    }
}