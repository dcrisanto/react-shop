import React from 'react';
import '@styles/ItemNavbar.scss';

const ItemNavbar = ({item}) => {
  return (
    <a className="item" href="">{item.name}</a>
  );
}

export default ItemNavbar

