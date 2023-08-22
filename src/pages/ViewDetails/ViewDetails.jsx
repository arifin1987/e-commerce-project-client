import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div className="md:flex gap-4 text-center items-center">
            <img src={details.image} alt="" />
            <div>
            <h1 className="font-bold">{details.product_name}</h1>
            <p >{details.product_description}</p>
            <p className="font-bold">${details.price}</p>
                
            </div>
            
        </div>
    );
};

export default ViewDetails;