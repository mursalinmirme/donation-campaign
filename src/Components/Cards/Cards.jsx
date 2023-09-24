import Card from "../Card/Card";

const Cards = ({cards}) => {
    return (
        <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-16 gap-5 px-5 lg:px-0">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default Cards;