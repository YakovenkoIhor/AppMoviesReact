import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const CardAntd = ({children, src, alt, title, date}) => (
  <Card
    hoverable
    style={{
      width: 260,
      background: '#7a768f',
    }}
    cover={<img alt={alt} src={`https://image.tmdb.org/t/p/w200/${src}`} />}
  >
    {children}
    <Meta title={title} 
    description={date} 
    />
  </Card>
);
export default CardAntd;