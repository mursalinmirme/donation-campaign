import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [cardsData, setCardsData] = useState([]);
    const [showCardsData, setShowCardsData] = useState([]);
    const loaderCards = useLoaderData();
    useEffect(() => {
        setCardsData(loaderCards);
        setShowCardsData(loaderCards);
    }, [loaderCards])
    const handleSearchBtn = (refInput) => {
       const searchValue = refInput.current.value;
       if(searchValue.length > 0){
        const searchFilter = cardsData.filter(card => card.category.toLowerCase() === searchValue.toLowerCase());
        setShowCardsData(searchFilter);
       }
    }
    return (
        <div className="mb-20">
            <Banner handleSearchBtn={handleSearchBtn}></Banner>
            <Cards showCardsData={showCardsData}></Cards>
        </div>
    );
};

export default Home;