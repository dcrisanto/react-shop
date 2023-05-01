import React from 'react';
import Headers from '@components/Headers';
import Search from '@components/Search';
import ProductList from '@containers/ProductList';
    
const Home = () => {
    return (
        <div>
            <Headers />
            <Search />
            <ProductList />
        </div>
    );
}

export default Home
