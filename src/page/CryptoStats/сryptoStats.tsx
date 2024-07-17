import React from 'react';
import Cryptocurrencies from '../../components/cryptocurrencies/cryptocurrencies';
import CoinDisplay from '../../components/coin_display/crypto_stats';

const CryptoStats = () => {
  return (
    <div>
      <CoinDisplay/>
      <Cryptocurrencies />
    </div>
  );
}

export default CryptoStats;
