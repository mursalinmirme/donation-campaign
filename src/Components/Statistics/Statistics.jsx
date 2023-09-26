import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
  const [remaining, setRemaining] = useState(100);
  const [givenDonate, setGivenDonate] = useState(0);
  useEffect(() => {
    const totalCards = 12;
    const getStoredCart = JSON.parse(localStorage.getItem('donateCartStore'));
    if(getStoredCart){
      const cardParcentage = getStoredCart.length * 100 / totalCards;
      setGivenDonate(cardParcentage);
      setRemaining(100 - cardParcentage)
    }
  }, [remaining, givenDonate])
  console.log(givenDonate)

// console.log(getStoredCart)
const data = [
  { name: 'Total Donation', value: remaining },
  { name: 'Your Donation', value: givenDonate },
];
  const COLORS = ['#FF444A','#00C49F'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="max-w-[1350px] mx-auto flex justify-center items-center h-[100vh]">
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name" 
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill="#000000"
          labelLine={false} 
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Legend className="flex flex-row-reverse" />
      </PieChart>
    </div>
  );
};

export default Statistics;
