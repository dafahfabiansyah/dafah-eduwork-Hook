import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=cabca71a01f7407ab8ec2319c74ff9a8')
      .then((response) => setNewsData(response.data.articles))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Row>
        {newsData.map((news, index) => (
          <Col key={index} md={4}>
            <NewsCard title={news.title} description={news.description} imageUrl={news.urlToImage} url={news.url} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsList;
