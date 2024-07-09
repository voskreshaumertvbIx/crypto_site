import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptosQuery } from '../../redux/services/CryptoApi';
import { Coin, CryptocurrenciesProps } from '../../interfaces';
import { ROUTES } from '../../Routes/routes';


const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<Coin[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  console.log(cryptoList);
  useEffect(() => {
    if (cryptoList?.data?.coins) {
      const filteredData = searchValue
        ? cryptoList.data.coins.filter((coin: Coin) =>
            coin.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : cryptoList.data.coins;
      setCryptos(filteredData);
    }
  }, [cryptoList, searchValue]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {!simplified && (
        <div className='search-bar'>
          <Input
            placeholder='Search Cryptocurrency'
            onChange={(e) => setSearchValue(e.target.value)}
            type='text'
          />
        </div>
      )}

      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency: Coin) => (
          <Col xs={24} sm={12} lg={6} key={currency.uuid}>
            <Link to={`${ROUTES.cryptoDetails.replace(':uuid', currency.uuid)}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} alt={currency.name} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}$</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
