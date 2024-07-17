import React, { useState, useEffect } from 'react';
import { useGetCryptoNewsQuery } from './../../redux/services/CryptoNewsApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './style.module.css'
const CryptoNews: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [articles, setArticles] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const limit = 3;
  const { data, error, isLoading } = useGetCryptoNewsQuery({ limit, offset });

  useEffect(() => {
    if (data) {
      setArticles(prevArticles => [...prevArticles, ...data.articles]);
      setHasMore(data.articles.length === limit);
    }
  }, [data]);

  const fetchMore = () => {
    setOffset(prevOffset => prevOffset + limit);
  };

  if (isLoading && offset === 0) return <div>Loading...</div>;
  if (error) return <div>Error loading news.</div>;

  return (
    <div className='pt-[80px]'>
      <h1 className='text-font_subhead'>Crypto News</h1>
      <p className='text-gray-600 text-font_medium mb-6'>Stay updated with the latest news in the world of cryptocurrencies. Get the most recent updates and trends.</p>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<h4 className='text-font_main_text text-font_medium text-center hover:underline '>Scroll to show more</h4>}
        endMessage={<p>No more articles</p>}
        className={styles.no_scrollbar}
      >
        <div className='flex flex-wrap -mx-4'>
          {articles.map((article: any, index: number) => (
            <div className='w-full md:w-1/3 px-4 mb-8' key={index}>
              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-xl font-bold mb-2'>{article.title}</h2>
                <p className='text-gray-700 mb-4'>{article.description}</p>
                <img className='w-full h-48 object-cover mb-4' src={article.urlToImage} alt={article.title} />
                <a href={article.url} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CryptoNews;
