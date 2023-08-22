/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleProduct = ({product}) => {
    
    const{_id,image,product_name,product_description,price} = product;
    const handleAddToCart = product =>{
        console.log(product);
        fetch('http://localhost:5000/carts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Laptop added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })

    }
    return (
        <div >
            <div >
            <img src={image} className="max-h-40"  />
            </div>
            
            <h1 className="font-bold">{product_name}</h1>
            <p>{product_description}</p>
            <p className="font-bold">${price}</p>
            <Link to={`/trending/${_id}`}><button className="  mx-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2 hover:bg-sky-700 active:bg-violet-700">View Details</button></Link>
            
            <button onClick={()=>handleAddToCart(product)} className="  my-4 rounded-3xl bg-white text-black border-black border-2 px-4 py-2 hover:bg-sky-700 active:bg-violet-700">Add To Cart</button>
        </div>
    );
};

export default SingleProduct;