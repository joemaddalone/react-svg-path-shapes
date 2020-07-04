import React from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../Svg';

export const Rect = () => (
  <Svg width={140} height={120}>
    <path d={new Path().rect(120, 60, 60, 60).toString()} />
    <path d={new Path().rect(10, 5, 60, 60).toString()} className='filled' />
  </Svg>
);
