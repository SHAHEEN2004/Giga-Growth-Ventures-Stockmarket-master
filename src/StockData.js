import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StockData.css';

const API_KEY = 'ccc3c4cfd3msh2e77ca15232f14fp1bc50fjsn12bfa7f830bd';

const StockData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://latest-stock-price.p.rapidapi.com/price',
          {
            params: { Indices: 'NIFTY 100' },
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com',
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getChangeColor = (change) => {
    if (change > 0) {
      return 'positive-change';
    } else if (change < 0) {
      return 'negative-change';
    }
    return '';
  };

  return (
    <div>
      <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>Stock Prices</h1>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last Price</th>
            <th>Change</th>
            <th>PChange</th>
            <th>Total Traded Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.lastPrice}</td>
              <td className={getChangeColor(stock.change)}>{stock.change}</td>
              <td className={getChangeColor(stock.pChange)}>{stock.pChange}</td>
              <td>{stock.totalTradedVolume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockData;
