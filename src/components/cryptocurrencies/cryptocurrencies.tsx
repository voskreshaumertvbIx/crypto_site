import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetCryptosQuery } from '../../redux/services/CryptoApi';
import { Coin} from '../../interfaces';
import { ROUTES } from '../../Routes/routes';
import styles from './styles.module.css';


const Cryptocurrencies = () => {
  const [offset, setOffset] = useState(0);
  const [allCryptos, setAllCryptos] = useState<Coin[]>([]);
  const [displayedCryptos, setDisplayedCryptos] = useState<Coin[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [hasMore, setHasMore] = useState(true);
  const limit = 20;
  const { data: cryptoList, isLoading } = useGetCryptosQuery({ limit, offset });

 
  useEffect(() => {
    if (cryptoList?.data?.coins) {
      setAllCryptos(prevCryptos => [...prevCryptos, ...cryptoList.data.coins]);
      setHasMore(cryptoList.data.coins.length === limit);
    }
  }, [cryptoList]);


  useEffect(() => {
    const filteredData = searchValue
      ? allCryptos.filter((coin: Coin) =>
          coin.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : allCryptos;
    setDisplayedCryptos(filteredData);
  }, [searchValue, allCryptos]);

  const fetchMore = () => {
    setOffset(prevOffset => prevOffset + limit);
  };


  return (
    <>
      <div className='mt-[20px] p-5 text-text_color w-1/3'>
        <h1 className='text-font_section_header mb-4'>Search coin</h1>
        <Input
          placeholder='Search Cryptocurrency'
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
        />
      </div>

      <InfiniteScroll
        dataLength={displayedCryptos.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<h4 className='text-font_main_text text-font_medium text-center hover:underline '>Scroll to show more</h4>}
        endMessage={<p>No more coins</p>}
        className={styles.no_scrollbar}
      >
        <Row gutter={[32, 32]} className={`${styles.cryptoCardContainer} crypto-card-container`}>
          {displayedCryptos.map((currency) => (
            <Col xs={24} sm={12} lg={6} key={currency.uuid}>
              <Link to={`${ROUTES.cryptoDetails.replace(':uuid', currency.uuid)}`}>
                <Card
                  className={`${styles.card} card`}
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className={styles.image} src={currency.iconUrl} alt={currency.name} />}
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
      </InfiniteScroll>
    </>
  );
};

export default Cryptocurrencies;
