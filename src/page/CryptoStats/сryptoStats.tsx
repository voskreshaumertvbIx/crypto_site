import React from 'react';
import Cryptocurrencies from '../../components/cryptocurrencies/cryptocurrencies';
import CoinDisplay from '../../components/coin_display/crypto_stats';

const CryptoStats = () => {
  return (
    <div>
      <CoinDisplay/>
      <Cryptocurrencies simplified={true}/>
    </div>
  );
}

export default CryptoStats;
