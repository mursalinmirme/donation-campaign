import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [cardsData, setCardsData] = useState([]);
    const loaderCards = useLoaderData();
    useEffect(() => {
        setCardsData(loaderCards)
    }, [loaderCards])
    return (
        <div className="mb-20">
            <Banner></Banner>
            <Cards cardsData={cardsData}></Cards>
        </div>
    );
};

export default Home;