import { css } from 'lit';
export const styles = [
    css`
        .container {
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

        .login {
            margin: 0 auto;
            padding: 0rem 3.125rem;
        }

        img {
            height: 2.5rem;
            width: 8.313rem;
        }

        .logo {
            margin-top: 10.625rem;
            margin-bottom: 3.125rem;
        }

        h1 {
            font-weight: 400;
            margin-top: 8.125rem;
            margin-bottom: 2.1875rem;

        }

        h1,
        .logo,
        .login {
            text-align: center;
        }

        input {
            background-color: #014282;
            border-top: 0px;
            border-right: 0px;
            border-bottom: .125rem solid black;
            border-left: 0px;
            color: white;
            font-family: "Raleway", sans-serif;
            font-size: .9375rem;
            height: 1.5rem;
            margin-bottom: 2.1875rem;
            margin-top: .3125rem;
            outline: none;
            width: 17.5rem;
        }

        ::placeholder {
            color: white;
            padding: .125rem;
        }

        p {
            font-weight: bold;
            font-size: .75rem;
        }

        button {
            background-color: #1464A5;
            color: white;
            width: 7.8125rem;
            height: 2.75rem;
            font-weight: bold;
            font-family: "Raleway", sans-serif;
            border: 0px;
            margin-top: .625rem;
        }

        button:hover {
            cursor: pointer;
            background-color: #1464A5;
        }
    `,
];