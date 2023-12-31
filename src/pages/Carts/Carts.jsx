import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";



const Carts = () => {
    const[cart,refetch] = useCart();
    
    
    
    const total=Math.round(cart.reduce((sum,item)=>item.price +sum,0)) ;
    
    
    const handleDelete=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
        fetch(` http://localhost:5000/carts/${item._id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                

            }

        })
    }
})

    }
    
    
    return (
        <div>
            <h1 className="text-2xl font-bold">Total Items:{cart.length}</h1>
            <h1 className="text-2xl font-bold">Total Price:${total}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.product_name}
                                </td>
                                <td >${item.price}</td>
                                <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Carts;