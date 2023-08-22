import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";


const TrendingProduct = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/trending')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <h1 className="text-6xl text-center my-4">Trending Products</h1>
            <div className="md:grid grid-cols-4 gap-2">
            {
                products.map(product=> <SingleProduct
                key={product.id}
                product={product}
                ></SingleProduct> )
            }

            </div>
            
        </div>
    );
};

export default TrendingProduct;