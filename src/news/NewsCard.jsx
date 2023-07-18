import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NewsCard = ({ title, description, imageUrl, url }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={url} target="_blank">
          Baca Selengkapnya
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
