import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@imgs/logo_yard_sale.svg';

const Login = () => {
    //creando una referencia, pasando un valor null porque no lo inicializaremos con ningún valor
    const form = useRef(null);
    const handleSubmit = (event) => {
        //preventDefault para que envie los valores no por url sino que continue con la lógica que se tiene. Así no se recargará la página
        event.preventDefault();
        //FormData nos permite instanciar los elementos que se encuentran dentro del formulario y los va a capturar conforme sean llenados. Acceder a los valores del form por medio de current
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }
    return (
        <section className="login-section">
            <div className="container-logo">
                <img src={logo} />
            </div>
            <div className="container-form">
                <form className="form" action="" ref={form}>
                    <label className=" label label-email" for="email">
                        <span>Email address</span>
                        <input className="input input-email" type="text" name="email" placeholder="tu correo"/>
                    </label>
                    <label className="label label-password" for="password">
                        <span>Password</span>
                        <input className="input input-password" name="password" type="password" placeholder="tu contraseña"/>
                    </label>
                    <div className="container-button">
                        <button className="primary-button login-button" 
                        onClick={handleSubmit} >
                            Log in
                        </button>
                        <a href="">Forgot my password</a>
                    </div>
                </form>
                <div className="container-secondary-button">
                    <button className="secondary-button signup-button">
                        Sign up
                    </button>
                </div>
            </div> 
        </section>  
    )
}

export default Login
