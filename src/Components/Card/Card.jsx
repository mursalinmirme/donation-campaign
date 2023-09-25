import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Card = ({card}) => {
    const {id, img, title, category, cate_btn_bg, card_bg, text_color} = card;
    return (
        <Link to={`/donation/${id}`}>
        <div style={{background: `${card_bg}`}} className="rounded-lg">
            <img className="w-full" src={img} alt="" />
            <div className="p-4">
                <span style={{color: `${text_color}`, background: `${cate_btn_bg}`}} className="rounded text-base font-medium px-2.5 py-1">{category}</span>
                <h3 style={{color: `${text_color}`}} className="font-lg font-semibold mt-3">{title}</h3>
            </div>
        </div>
        </Link>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired
}
export default Card;