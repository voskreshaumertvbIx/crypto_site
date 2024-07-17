import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './style.module.css'
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartOptions } from 'chart.js';

const { Title } = Typography;

interface LineChartProps {
  coinHistory: CoinHistory;
  currentPrice: string | number;
  coinName: string;
}

interface CoinHistory {
  data: {
    change: number;
    history: {
      price: number;
      timestamp: number;
    }[];
  };
}

// Register the necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart: React.FC<LineChartProps> = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
  }
  console.log(coinHistory, '123')
  
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  } as ChartOptions<"line">;

  return (
    <>
      <Row className={styles.chart_header}>
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line className='p-[16px]' data={data} options={options} />
    </>
  );
};

export default LineChart;
