import React, {useState} from 'react';
import '@styles/Navbar.scss';
import ItemNavbar from './ItemNavbar';

const initialMenu = [
  {
    id: 1,
    name: 'All'
  },
  {
    id: 2,
    name: 'Clothes'
  },
  {
    id: 3,
    name: 'Electronics'
  },
  {
    id: 4,
    name: 'Furniture'
  },
  {
    id: 5,
    name: 'Toys'
  },
  {
    id: 6,
    name: 'Others'
  }
];

const Navbar = () => {
  const [menu, setMenu] = useState(initialMenu);

  return (
    <ul className="list-categories">
        <li>
          {menu.map((item) => {
            return <ItemNavbar item={item} key={item.id} />
          })}
        </li>
    </ul>
  )
}

export default Navbar 
