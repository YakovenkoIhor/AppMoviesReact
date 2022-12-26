import React from 'react';
import { Card } from 'antd';

const CardDetails = ({children, src, alt, title, date, description}) => (
  <Card
    style={{
      background: '#231e1f',
      color: '#bc8a8a',
      margin: '0 auto',
      maxWidth: '80%',
      fontSize: 15,
      fontWeight: 700
    }}
  >
    <img src={`https://image.tmdb.org/t/p/w500/${src}`} alt={alt}></img>

    <div className="title">{title}</div>
    
    {children}

    <div className="date">{new Date(date).toDateString()}</div>

    <div className="description">{description}</div>
  </Card>
);
export default CardDetails;