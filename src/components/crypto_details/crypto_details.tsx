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
import styles from "./style.module.css";
import HTMLReactParser from "html-react-parser";
import { Link } from "../../interfaces";
import LineChart from "../line_chart/line_chart";

const { Title, Text } = Typography;
const { Option } = Select; // Correctly use Select.Option

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
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
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
    <div className="text-text_color">
      <h1>
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
      </h1>
      <p>
        {cryptoDetails.name} live price in US dollars. View value statistics,
        market cap and supply.
      </p>
      <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
        {time.map((date) => <Option key={date} value={date}>{date}</Option>)}
      </Select>
      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />

      <section>
        <h2>{cryptoDetails.name} Values Statistics</h2>
        <p>An overview showing the stats of {cryptoDetails.name}</p>
        {stats.map(({ icon, title, value }) => (
          <div className="flex" key={title}>
            <p>{icon}</p>
            <p>{title}</p>
            <p>{value}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>{cryptoDetails.name} Other Statistics</h2>
        <p>An overview showing the stats of all cryptocurrencies</p>
        {genericStats.map(({ icon, title, value }) => (
          <div className="flex" key={title}>
            <p>{icon}</p>
            <p>{title}</p>
            <p>{value}</p>
          </div>
        ))}
      </section>
      <p>{HTMLReactParser(cryptoDetails.description)}</p>
      <section>
        {cryptoDetails.links.map((link: Link, index: number) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <h4 className="flex-1">{link.type}</h4>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-right text-blue-500 underline"
            >
              {link.name}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CryptoDetails;
