const Card = ({card}) => {
    return (
        <div className="border-2 bg-violet-200 rounded-lg">
            <img className="w-full" src="/Education.png" alt="" />
            <div className="p-4">
                <span className="text-[#0052FF] text-base font-medium bg-violet-400 px-2 py-1">Health</span>
                <h3 className="text-[#0052FF] mt-3 text-lg font-semibold">Clean water for children</h3>
            </div>
        </div>
    );
};

export default Card;