import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <section className="create-account-section">
            <div className="container-form">
                <h1 className="title">My account</h1>
                <form className="form" action="">
                    <label className="label" for="name">
                        <span>Name</span>
                        <input className="input input-name" id="name" placeholder="tu nombre" />
                    </label>
                    <label className="label" for="email">
                        <span>Email address</span>
                        <input id="email" className="input input-email" placeholder="tu email" />
                    </label>
                    <label className="label" for="password">
                        <span>Password</span>
                        <input id="password" type="password" className="input input-password" placeholder="tu contraseña" />
                    </label>
                </form>
                <div className="container-button">
                    <input id="submit-create" className="primary-button login-button" type="button" value="Create" />
                </div>
            </div>
        </section>
    )
}

export default CreateAccount
