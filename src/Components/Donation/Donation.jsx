import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleDonateCard from "../SingleDonateCard/SingleDonateCard";

const Donation = () => {
    const allCards = useLoaderData();
    const [storedCarts, setStoredCarts] = useState([]);
    const [showCardsNum, setShowCardsNum] = useState(4);
    useEffect(() => {
        const getStoredCart = JSON.parse(localStorage.getItem('donateCartStore'));
        if(getStoredCart.length > 0){
            const filterItems = allCards.filter(cart => getStoredCart.find(item => cart.id == item.id));
            setStoredCarts(filterItems)
        }
    }, [allCards]);

    return ( 
        <div className="max-w-[1350px] mx-auto pt-36 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    storedCarts.slice(0, showCardsNum).map(donateCard => <SingleDonateCard key={donateCard.id} donateCard={donateCard}></SingleDonateCard>)
                }
            </div>
            <div className={`text-center mt-14 ${showCardsNum === 4 ? 'visible' : 'hidden'}`}><button onClick={() => setShowCardsNum(storedCarts.length)} className="bg-[#009444] text-white text-base font-medium rounded-lg px-5 py-2.5">Show all</button></div>
        </div>
    );
};

export default Donation;