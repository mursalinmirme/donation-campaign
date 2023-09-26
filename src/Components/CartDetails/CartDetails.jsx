import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
const CartDetails = () => {
    const getParams = useParams();
    const {donateId} = getParams;
    console.log(donateId)
    const getData = useLoaderData();
    const [donateDetails, setDonateDetails] = useState({});
    useEffect(() => {
        const findMatch = getData.find(data => data.id == donateId);
        // console.log(findMatch)
        setDonateDetails(findMatch)
    }, [getData,donateId])
    const {id, price, img, title, description, text_color} = donateDetails;
    const handleDonateBtn = () => {
        const storedDonateCart = [];
        const getStoredCart = JSON.parse(localStorage.getItem('donateCartStore'));
        if(!getStoredCart){
            storedDonateCart.push(donateDetails);
            localStorage.setItem('donateCartStore',JSON.stringify(storedDonateCart));
            swal("Good job!", "Donation successfull!", "success");
        }
        else{
            const doesExist = getStoredCart.find(data => data.id == id);
            if(!doesExist){
             storedDonateCart.push(...getStoredCart, donateDetails);
             localStorage.setItem('donateCartStore',JSON.stringify(storedDonateCart));
             swal("Good job!", "Donation successfull!", "success");
            }else{
                swal("Sorry!", "You have already donated!", "error");
            }
            // console.log(storedDonateCart)
        }
    }
    return (
        <div className="max-w-[1350px] mx-auto pt-28 pb-20 px-5 lg:px-0">
            <div className="lg:h-[550px] relative rounded-lg overflow-hidden">
               <img className="w-full h-full" src={img} alt="" />
               <div className="bg-[#0b0b0b80] py-3 md:py-8 absolute bottom-0 w-full">
                <button onClick={handleDonateBtn} style={{background: `${text_color}`}} className="text-white px-4 md:px-8 ml-5 md:ml-12 font-medium md:font-semibold text-base rounded-md py-2.5 md:py-3.5">Donate ${price}</button>
               </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mt-10">{title}</h2>
            <p className="mt-7 text-lg">{description}</p>
        </div>
    );
};

export default CartDetails;