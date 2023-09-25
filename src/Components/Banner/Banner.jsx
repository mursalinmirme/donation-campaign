import { useRef } from "react";

const Banner = ({handleSearchBtn}) => {
const refInput = useRef(null);
    return (
        <div style={{backgroundImage:`url('/banner.jpg')`,backgroundPosition:'cover',backgroundSize: 'cover',backgroundBlendMode: 'color'}} className="w-full h-[500px] lg:h-[570px] flex justify-center items-center space-y-8 flex-col bg-[#fffffff0]">
            <h2 className="text-4xl text-center leading-relaxed px-10 lg:text-4xl font-bold">I Grow By Helping People In Need</h2>
            <div className="md:w-96 relative border rounded-lg">
                <input ref={refInput} className="w-full pl-3 pr-24 py-3 border-none outline-none rounded-lg" type="text" placeholder="Search here..." />
                <button onClick={() => handleSearchBtn(refInput)} className="absolute right-0 h-full bg-[#FF444A] px-4 rounded-br-lg rounded-tr-lg font-semibold text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;