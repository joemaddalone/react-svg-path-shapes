import React from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../Svg';

export const Circle = () => (
  <Svg width={140} height={120}>
    <path d={new Path().circle(95, 50, 50).toString()} />
    <path d={new Path().circle(10, 50, 50).toString()} className='filled' />
  </Svg>
);
