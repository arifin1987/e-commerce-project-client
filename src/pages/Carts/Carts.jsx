import useCart from "../../hooks/useCart";


const Carts = () => {
    const[cart,refetch] = useCart()
    console.log(cart);
    
    return (
        <div>
            
        </div>
    );
};

export default Carts;