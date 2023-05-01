import React from 'react';
import '@styles/NewPassword.scss';
import logo from '@imgs/logo_yard_sale.svg';

const NewPassword = () => {
    return (
        <section className="new-password-section">
            <div className="container-logo">
                <img src={logo} />
            </div>
            <div className="container-title">
                <h1>Create a new password</h1>
                <p>Enter a new password for your account</p>
            </div>
            <div className="container-form">
                <form className="form" action="">
                    <label className="label" for="password">
                        <span>Password</span>
                        <input className="input input-password" id="password" type="password" placeholder="tu contraseña" />
                    </label>
                    <label className="label" for="new-password">
                        <span>Re-enter password</span>
                        <input className="input input-new-password" id="new-password" type="password" placeholder="new-password" />
                    </label>
                </form>
                <div className="container-button">
                    <button className="primary-button login-button">Confirm</button>
                </div>
            </div>
        </section>
    )
}

export default NewPassword
