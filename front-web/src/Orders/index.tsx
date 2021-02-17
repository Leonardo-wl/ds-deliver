import { useState } from 'react';
import { useEffect } from 'react';
import { fecthProducts } from './api';
import StepsHeader from './StepsHeader';
import { Product } from './types';
import ProductsList from './ProductsList';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    //const [orderLocation, setOrderLoctation] = useState<OrderLocationdata>();

    useEffect(() => {
        fecthProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />            
        </div>
    )
}

export default Orders;
