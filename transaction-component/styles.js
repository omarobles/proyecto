import { css } from "lit";

export const styles = css`
    .container{
        background-color: #014282;
        color: white;
        display: flex;
        font-family: "Raleway", sans-serif;
        height: 56.25rem;
        justify-content: center;
        margin: 0px;
        padding: 0px;
        width: 26.563rem;
    }

    .login{
        margin: 0 auto;
    }

    img{
        height: 2.5rem;
        width: 8.313rem;
    }

    .logo{
        margin-top: 2.5rem;
    }

    h1{
        margin-bottom: 2.1875rem;
        margin-top: 2.1875rem;
    }

    h1, .logo, .login, h2, .nombre, .num-cuenta{
        text-align: center;
    }

    h2{
        font-weight: 500;
    }

    .separacion-top{
        margin-top: 3.125rem;
        width: 21.875rem;
    }

    .titulo-descripcion{
        font-size: 1.5625rem;
        font-weight: 500;
        margin-top: 3.125rem;
        margin-bottom: 0rem;
    }

    .descripcion{
        font-size: 1.25rem;
        font-weight: 300;
        margin-top: 1rem;
    }

    .saldo{
        font-size: 1.25rem;
        font-weight: 500;
    }

    .share{
        margin-top: 3.125rem;
    }

    button {
        background-color: #1464A5;
        border: 0rem;
        color: white;
        font-weight: bold;
        font-family: "Raleway", sans-serif;
        height: 2.75rem;
        margin-top: .9375rem;
        width: 7.8125rem;
    }

    button:hover {
        cursor: pointer;
        background-color: #1464A5;
    }
`;