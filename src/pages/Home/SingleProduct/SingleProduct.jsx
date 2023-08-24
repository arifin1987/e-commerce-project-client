/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";


const SingleProduct = ({product}) => {
    const {user}= useContext(AuthContext);
    const [,refetch]= useCart();
    const navigate = useNavigate();
    const location = useLocation();
    
    const{_id,image,product_name,product_description,price} = product;
    const handleAddToCart = product =>{
        console.log(product);
        if(user && user.email){
            const cartItem ={cartId:_id,image,product_name,product_description,price,email:user.email}
            console.log(cartItem);
        
        fetch('http://localhost:5000/carts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartItem)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })
    }
    else{
        Swal.fire({
            title: 'Please login to order the item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }

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