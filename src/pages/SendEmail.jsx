import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@imgs/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';

const SendEmail = () => {
    return (
        <section className="send-email-section">
            <div className="container-logo">
                <img src={logo} />
            </div>
            <div className="container-form" action="">
                <div className="container-title">
                    <h1>Email has been sent!</h1>
                    <p>Please check your inbox for instructions on how to reset the password</p>
                </div>
                <div className="container-email-image">
                    <img src={iconEmail} />
                </div>
                <div className="container-button">
                    <button className="primary-button login-button">Login</button>
                    <p className="resend">
                        <span>Didn't receive the email?</span>
                        <a href="">Resend</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SendEmail
