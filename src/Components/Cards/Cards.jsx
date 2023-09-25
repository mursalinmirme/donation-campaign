import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({cardsData}) => {
    return (
        <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-16 gap-5 px-5 lg:px-0">
            {
                cardsData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    cardsData: PropTypes.array.isRequired
}
export default Cards;