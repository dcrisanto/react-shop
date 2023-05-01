import React from 'react';
import '@styles/RecoveryPassword.scss';
import logo from '@imgs/logo_yard_sale.svg';

const RecoveryPassword = () => {
    return (
        <section className="recovery-password-section">
            <div className="container-logo">
                <img src={logo} />
            </div>
            <div className="main-container-title">
                <h2>Password recovery</h2>
                <p>Inform the email address used to create your account</p>
            </div>
            <section className="main-section-form">
                <form>
                    <label>
                        <span>Email address</span>
                        <input type="text" placeholder="tu email" />
                    </label>
                    <input type="submit" value="Submit" />
                    <a href="./index.html">Back to log in</a>
                </form>
            </section>
        </section>
    )
}

export default RecoveryPassword
