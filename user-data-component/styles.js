import { css } from "lit";
export const styles = [
    css`
        .container{
            background-color: #014282;
            color: white;
            display: flex;
            font-family: "Raleway", sans-serif;
            height: 56.25rem;
            justify-content: center;
            margin: 0rem;
            padding: 0rem;
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
            margin-top: 2.1875rem;
            margin-bottom: 2.1875rem;
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

        .nombre{
            font-size: 1.5625rem;
            font-weight: 500;
            margin-top: 3.125rem;
            margin-bottom: 0px;
        }

        .mensaje-num-cuenta{
            font-size: 15px;
            margin-bottom: 0rem;
        }

        .num-cuenta{
            font-size: 1.25rem;
            font-weight: 300;
            margin-top: .3125rem;
        }

        .nomina, .tdc{
            font-weight: 300;
            font-size: 1.25rem;
        }

        .datos-nomina{
            align-items: center;
            display: flex;
            justify-content: space-evenly;
            margin-top: 2.1875rem;
        }

        .datos-tdc{
            align-items: center;
            display: flex;
            justify-content: space-evenly;
            margin-top: 1.25rem;
        }

        .separacion-nomina{
            margin-top: 3.125rem;
            width: 9.375rem;
        }

        .saldo{
            font-size: 1.25rem;
            font-weight: 500;
        }

        .mensaje-num-tarjeta{
            font-size: .9375rem;
            margin-bottom: 0rem;
            margin-top: 1.875rem;
        }

        .num-tarjeta{
            font-weight: 600;
            font-size: 1.25rem;
            margin-top: .3125rem;
        }


        .separacion-movimientos{
            margin-top: 1.875rem;
            width: 21.875rem;
        }

        .movimientos{
            margin-top: 1.5625rem;
            p{
                font-weight: 300;
                font-size: 1.25rem;
                margin-top: 1.25rem;
            }
            hr{
                border-color: rgba(189, 189, 189, 0.6);
            }
            .movimiento-item{
                align-items: center;
                display: flex;
                justify-content: space-between;
                margin: 20px 0px;
            }
            .nombre-movimiento{
                font-weight: bold;
            }
            .fecha-movimiento{
                font-weight: 300;
            }
            .datos-mov{
                display: flex;
                flex-direction: column;
                text-align: start;
            }
        }
    `
];