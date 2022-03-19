import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';
import './AllProducts.css'
const AllProducts = (props) => {
    const { setCardCount } = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [products])
    console.log(products)
    return (
        <div>
            <h1 className='fs-1 text-primary'>All Products</h1>
            <div className="row container">
                {products.map((pd) =>
                    (<SingleProducts setCardCount={setCardCount} key={pd.id} product={pd}></SingleProducts>))}
            </div>
        </div>
    );
};

export default AllProducts;