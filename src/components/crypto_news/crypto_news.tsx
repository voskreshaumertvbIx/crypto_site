import React from 'react';
import { useGetCryptoNewsQuery } from './../../redux/services/CryptoNewsApi';

const CryptoNews: React.FC = () => {
  const { data, error, isLoading } = useGetCryptoNewsQuery('');
  console.log(data)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading news.</div>;

  return (
    <div className='text-text_color'>
      <h1>Crypto News</h1>
      {data.articles.map((article: any, index: number) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt="" />
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default CryptoNews;
