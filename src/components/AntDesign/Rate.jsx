import React from 'react';
import { Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RateAntd = ({rate}) => {
  const value = Math. round(rate)-4;
  return (
    <span>
      <Rate tooltips={desc} value={value} disabled={true}/>
      {value>0 ? <span className="ant-rate-text">{desc[value - 1]}</span> : 'no rating'}
    </span>
  );
};
export default RateAntd;