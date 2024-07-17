import React from 'react';
import { useGetCryptosStatsQuery } from "../../redux/services/CryptoApi";
import millify from 'millify';

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
  const { data, isLoading } = useGetCryptosStatsQuery("");
  const globalStats = data?.data?.stats;
  const firstCoin = data?.data?.coins[0];
  console.log(data);

  if (isLoading) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="text-text_color pt-[80px] flex flex-wrap justify-evenly">
      <div className='bg-gradient-to-br from-white to-gray-300 p-5 text-center rounded-2xl w-[33%] h-[400px] flex flex-col justify-center'>
        <h1 className='text-font_subhead  mb-5'>Global Crypto Stats</h1>
        <section className='space-y-4'>
          {crypto_stats.map((stats) => (
            <div className='text-font_medium' key={stats.name}>
              <span className='font-medium'>{stats.name}: </span>
              <span>{millify(globalStats?.[stats.value] || 0)}</span>
            </div>
          ))}
        </section>
      </div>

      {firstCoin && (
        <div className='bg-gradient-to-br from-white to-gray-300 p-5 text-center rounded-2xl w-[33%] h-[400px] flex flex-col justify-center'>
          <h1 className='text-font_subhead  mb-5'>Top Coin of Market</h1>
          <div className='text-font_medium'>
            <span className='font-medium'>Name: </span>
            <span>{firstCoin.name}</span>
          </div>
          <div className='text-font_medium'>
            <span className='font-medium'>Symbol: </span>
            <span>{firstCoin.symbol}</span>
          </div>
          <div className='text-font_medium'>
            <span className='font-medium'>Price: </span>
            <span>{millify(firstCoin.price)}</span>
          </div>
          <div className='text-font_medium'>
            <span className='font-medium'>Market Cap: </span>
            <span>{millify(firstCoin.marketCap)}</span>
          </div>
          <div className='text-font_medium'>
            <span className='font-medium'>Daily Change: </span>
            <span>{firstCoin.change}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDisplay;
