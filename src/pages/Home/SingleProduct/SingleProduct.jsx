/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SingleProduct = ({product}) => {
    
    const{_id,image,product_name,product_description,price} = product;
    return (
        <div >
            <div >
            <img src={image} className="max-h-40"  />
            </div>
            
            <h1 className="font-bold">{product_name}</h1>
            <p>{product_description}</p>
            <p className="font-bold">${price}</p>
            <Link to={`/trending/${_id}`}><button className="btn btn-secondary mx-2">View Details</button></Link>
            
            <button className="btn btn-secondary">Add To Cart</button>
        </div>
    );
};

export default SingleProduct;