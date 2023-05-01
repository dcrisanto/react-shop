import React from 'react';
import '@styles/Logo.scss';
import logo from '@imgs/logo_yard_sale.svg'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} />
    </div>
  )
}

export default Logo
