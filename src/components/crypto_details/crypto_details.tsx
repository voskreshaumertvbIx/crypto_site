import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select, Spin, Alert } from 'antd';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../../redux/services/CryptoApi";
import styles from "./style.module.css"; // Assuming you have additional styles here
import HTMLReactParser from "html-react-parser";
import { Link } from "../../interfaces";
import LineChart from "../line_chart/line_chart";
import { FaLink } from 'react-icons/fa';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { uuid } = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { data, isFetching, error } = useGetCryptoDetailsQuery(uuid);
  const { data: coinHistory, refetch } = useGetCryptoHistoryQuery({ uuid, timeperiod });
  const cryptoDetails = data?.data?.coin;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] ? millify(cryptoDetails['24hVolume']) : "N/A"}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Approved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  if (isFetching) return <Spin size="large" />;
  if (error) return <Alert message="Error" description="An error occurred while fetching crypto details." type="error" showIcon />;

  return (
    <div className={`bg-white pt-[80px] ${styles.cryptoDetailsContainer}`}>
      <div className={`p-4 flex flex-col ${styles.header}`}>
        <h1 className="text-3xl font-bold">
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </h1>
        <p className="text-lg">
          {cryptoDetails.name} live price in US dollars. View value statistics,
          market cap and supply.
        </p>
        <Select
          defaultValue="7d"
          className="select-timeperiod mt-4 w-48"
          placeholder="Select Timeperiod"
          onChange={(value) => setTimeperiod(value)}
        >
          {time.map((date) => <Option key={date} value={date}>{date}</Option>)}
        </Select>
      </div>

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
      <div className='flex justify-center'>
      <section className={`p-4 ${styles.statsSection}`}>
        <h2 className="text-2xl font-semibold">{cryptoDetails.name} Values Statistics</h2>
        <p className="text-lg">An overview showing the stats of {cryptoDetails.name}</p>
        {stats.map(({ icon, title, value }) => (
          <div className="flex items-center my-2" key={title}>
            <p className="mr-2">{icon}</p>
            <p className="mr-2">{title}</p>
            <p>{value}</p>
          </div>
        ))}
      </section>

      <section className={`p-4 ${styles.statsSection}`}>
        <h2 className="text-2xl font-semibold">{cryptoDetails.name} Other Statistics</h2>
        <p className="text-lg">An overview showing the stats of all cryptocurrencies</p>
        {genericStats.map(({ icon, title, value }) => (
          <div className="flex items-center my-2" key={title}>
            <p className="mr-2">{icon}</p>
            <p className="mr-2">{title}</p>
            <p>{value}</p>
          </div>
        ))}
      </section>
</div>
      <p className={`p-4 ${styles.description}`}>
        {HTMLReactParser(cryptoDetails.description)}
      </p>

      <section className={`p-4 ${styles.linksSection}`}>
  <h2 className='text-2xl font-semibold text-center mb-4'>Links</h2>
  <div className="flex flex-col items-center space-y-2">
    {cryptoDetails.links.map((link: Link, index: number) => (
      <div key={index} className="flex items-center space-x-2">
        <FaLink />
        <div className='flex justify-between w-[300px]'>
          <h4 className="inline-block">{link.type}</h4>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline ml-2"
          >
            {link.name}
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default CryptoDetails;
