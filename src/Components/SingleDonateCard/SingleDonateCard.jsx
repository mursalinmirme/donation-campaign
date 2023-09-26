import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const SingleDonateCard = ({donateCard}) => {
    const {id, img, category, title, price, cate_btn_bg, card_bg, text_color} = donateCard;
    return (
        <div style={{background: `${card_bg}`}} className="flex flex-col md:flex-row md:gap-2 lg:gap-5 rounded-lg overflow-hidden">
            <img className="w-full md:w-72 lg:w-64" src={img} alt="" />
            <div className="py-6 px-3 lg:px-0">
                <span style={{background: `${cate_btn_bg}`, color: `${text_color}`}} className="px-3 py-2 rounded">{category}</span>
                <h3 className="text-[#0B0B0B] text-xl font-bold mt-5">{title}</h3>
                <h5 style={{color: `${text_color}`}} className="text-lg font-bold mt-2">${price}</h5>
                <Link to={`/donationItem/${id}`}>
                    <button style={{background: `${text_color}`}} className="px-3 py-2 rounded-md mt-3 text-white font-medium">View Details</button>
                </Link>
            </div>
        </div>
    );
};
SingleDonateCard.propTypes = {
    donateCard: PropTypes.object.isRequired
}
export default SingleDonateCard;