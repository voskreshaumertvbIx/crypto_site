import React from 'react';
import { useGetCryptosQuery } from "../../redux/services/CryptoApi";
import millify from 'millify';
import Cryptocurrencies from '../cryptocurrencies/cryptocurrencies';

const crypto_stats = [
  {
    name: 'Total Cryptocurrencies',
    value: 'total',
  },
  {
    name: 'Total Market Cap',
    value: 'totalMarketCap',
  },
  {
    name: 'Total Markets',
    value: 'totalMarkets',
  },
  {
    name: 'Total Exchanges',
    value: 'totalExchanges',
  },
  {
    name: 'Total 24h Volume',
    value: 'total24hVolume',
  }
];

const CoinDisplay = () => {
  const { data, isLoading } = useGetCryptosQuery("");
  const globalStats = data?.data?.stats;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="text-text_color">
      <h1 className='text-font_h1'>Global Crypto Stats</h1>
      <section>
        {crypto_stats.map((stats) => (
          <div key={stats.name}>
            <span>{stats.name}: </span>
            <span>{millify(globalStats?.[stats.value] || 0)}</span>
          </div>
        ))}
      </section>
      
    </div>
  );
};

export default CoinDisplay;
