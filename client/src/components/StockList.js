// import React, { useState, useEffect } from 'react';
// import { getStocks } from '../api/stocks';

// const StockList = () => {
//   const [stocks, setStocks] = useState([]);

//   useEffect(() => {
//     const fetchStocks = async () => {
//       const result = await getStocks();
//       setStocks(result.data);
//     };
//     fetchStocks();
//   }, []);

//   return (
//     <div>
//       <h1>Stock List</h1>
//       <ul>
//         {stocks.map(stock => (
//           <li key={stock._id}>{stock.symbol}: ${stock.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StockList;


// src/pages/StockDetail.js
import React from 'react';
import TradingViewChart from '../components/TradingViewChart';
import { useParams } from 'react-router-dom';

const StockDetail = () => {
  const { id } = useParams(); // Retrieve stock ID from URL

  return (
    <div>
      <h1>Stock Details</h1>
      <p>Displaying details for stock ID: {id}</p>
      <TradingViewChart symbol={id} />
    </div>
  );
};

export default StockDetail;
