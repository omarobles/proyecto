import { LitElement, html, css } from "lit";
import { styles } from "./styles";
export default class UserDataComponent extends LitElement {
    constructor() {
        super();
        this.logo = "https://www.bbva.mx/content/dam/public-web/global/images/logos/logo_bbva_blanco.svg";
        this.nombre = "";
        this.formato = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        });
        this.datos = {};
        this.divMovimientos = [];
        this.movimientoMandar = {};
    }

    static properties = {
        datos: {
            type: Object
        },
        nombre: {
            type: String
        }
    }

    static styles = styles;

    firstUpdated() {
        this.addEventListener('get-data', this.getData);
    }

    getData(event) {
        this.datos = event.detail;
        this.nombre = this.datos.nombre;
        const nombrePila = this.nombre.split(" ")[0];
        const hora = new Date().getHours();
        const validarHora = (hora, nombre) => {
            if (hora >= 6 && hora < 12) {
                return `Buenos días ${nombre}`;
            } else if (hora >= 12 && hora < 19) {
                return `Buenas tardes ${nombre}`;
            } else {
                return `Buenas noches ${nombre}`;
            }
        };
        this.mensaje = validarHora(hora, nombrePila);
        const movimientos = this.datos.movimientos;
        this.divMovimientos = movimientos.map((movimiento => {
            return html`
            <div class="movimiento-item" @click=${this.botonMovimientos} .datosMovimiento="${{ id: movimiento.id, nombre: movimiento.nombre, costo: movimiento.costo, descripcion: movimiento.descripcion, fecha: movimiento.fecha }}">
                <div class="datos-mov">
                    <span class="nombre-movimiento">${movimiento.nombre}</span>
                    <span class="fecha-movimiento">${movimiento.fecha}</span>
                </div>
                <span class="saldo"> ${this.formato.format(movimiento.costo)}</span>
            </div>
            <hr>
            `
        }))
    }

    botonMovimientos(event) {
        const datosMovimiento = event.target.datosMovimiento;
        this.movimientoMandar = { nombre: datosMovimiento.nombre, descripcion: datosMovimiento.descripcion, costo: datosMovimiento.costo, fecha: datosMovimiento.fecha }
        const mainComponent = document.querySelector("main-component");
        const transactionComponent = mainComponent.renderRoot.querySelector("transaction-component");
        const userDataComponent = this;
        userDataComponent.style.display = "none";
        transactionComponent.style.display = "block";
        transactionComponent.dispatchEvent(new CustomEvent('get-movimientos', { bubbles: true, composed: true, detail: this.movimientoMandar }))
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
                <h2>Tus datos</h2>
                <hr class="separacion-top">
                <p class = "nombre">${this.datos.nombre}</p>
                <p class = "mensaje-num-cuenta">Número de cuenta</p>
                <p class="num-cuenta">${this.datos.numCuenta}</p>
                <hr class="separacion-nomina">
                <div class="datos-nomina">
                    <span class="nomina">Cuenta nómina</span>
                    <span class="saldo"> ${this.formato.format(this.datos.saldoNomina)}</span>
                </div>
                <div class="datos-tdc">
                    <span class="tdc">Tarjeta de crédito</span>
                    <span class="saldo"> ${this.formato.format(this.datos.saldoCredito)}</span>
                </div>
                <p class = "mensaje-num-tarjeta">Número de tarjeta</p>
                <p class="num-tarjeta">${this.datos.numTarjeta}</p>
                <hr class="separacion-movimientos">
                <div class="movimientos">
                    ${this.divMovimientos}
                </div>
        </section>
        </main>
        `;
    }
}