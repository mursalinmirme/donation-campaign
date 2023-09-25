import Card from "../Card/Card";
import PropTypes from 'prop-types';
import SearchEmpty from "../SearchEmpty/SearchEmpty";

const Cards = ({showCardsData}) => {
    return (
        <div className={`${showCardsData.length > 0 && 'max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-16 gap-5 px-5 lg:px-0'}`}>
            {
                showCardsData.length > 0 ? showCardsData.map(card => <Card key={card.id} card={card}></Card>) : <SearchEmpty></SearchEmpty>
            }
        </div>
    );
};
Cards.propTypes = {
    showCardsData: PropTypes.array.isRequired
}
export default Cards;