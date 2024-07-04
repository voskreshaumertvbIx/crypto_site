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
  const { data, isLoading } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="text-text_color">
      <h1>Global Crypto Stats</h1>
      <section>
        {crypto_stats.map((stat) => (
          <div key={stat.name}>
            <span>{stat.name}: </span>
            <span>{millify(globalStats?.[stat.value] || 0)}</span>
          </div>
        ))}
      </section>
      <Cryptocurrencies simplified={true}/>
    </div>
  );
};

export default CoinDisplay;
