import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select, Spin, Alert } from "antd";
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
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../../redux/services/CryptoApi";
import styles from "./style.module.css";
import HTMLReactParser from "html-react-parser";
import { Link } from "../../interfaces";
const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching, error } = useGetCryptoDetailsQuery(uuid);
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  if (isFetching) return <Spin />;
  if (error)
    return <Alert message="Error fetching crypto details" type="error" />;

  if (!cryptoDetails) {
    return (
      <Alert
        message="No data available for this cryptocurrency"
        type="warning"
      />
    );
  }

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails.price ? millify(cryptoDetails.price) : "N/A"}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Rank",
      value: cryptoDetails.rank ?? "N/A",
      icon: <NumberOutlined />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails['24hVolume'] ? millify(cryptoDetails['24hVolume']) : "N/A"
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails.marketCap ? millify(cryptoDetails.marketCap) : "N/A"
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails.allTimeHigh?.price
          ? millify(cryptoDetails.allTimeHigh.price)
          : "N/A"
      }`,
      icon: <TrophyOutlined />,
    },
  ];
  

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails.numberOfMarkets ?? "N/A",
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails.numberOfExchanges ?? "N/A",
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails.supply?.total
          ? millify(cryptoDetails.supply.total)
          : "N/A"
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails.supply?.circulating
          ? millify(cryptoDetails.supply.circulating)
          : "N/A"
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <div className="text-text_color">
      <h1>
        {" "}
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
      </h1>
      <p>
        {cryptoDetails.name} live price in US dollars. View value statistics,
        maket cap and supply.
      </p>
      <Select
        defaultValue="7d"
        className=""
        placeholder="Select Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      {/* line chart  */}
      <section>
        <h2>{cryptoDetails.name}Values Statistics</h2>
        <p>An overview showing the stats of {cryptoDetails.name}</p>
        {stats.map(({ icon, title, value }) => {
          return (
            <div className="flex">
              <p>{icon}</p>
               <p>{title}</p>
               <p>{value}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>{cryptoDetails.name} Other Statistics</h2>
        <p>An overview showing the stats of all cryptocurrencies</p>
        {genericStats.map(({ icon, title, value }) => {
          return (
            <div className="flex">
              <p>{icon}</p>
               <p>{title}</p>
               <p>{value}</p>
            </div>
          );
        })}
      </section>
     <p>{cryptoDetails.description}</p>
        <section>
        {cryptoDetails.links.map((link:Link, index:number) => (
  <div key={index} className="flex justify-between items-center mb-4">
    <h4 className="flex-1">{link.type}</h4>
    <a href={link.url} target="_blank" rel="noreferrer" className="flex-1 text-right text-blue-500 underline">
      {link.name}
    </a>
  </div>
))}

        </section>
    </div>
  );
};

export default CryptoDetails;
