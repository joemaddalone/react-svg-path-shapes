import React from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../Svg';

export const Ellipse = () => (
  <Svg width={155} height={120}>
    <path d={new Path().ellipse(150, 75, 80, 50).toString()} />
    <path
      d={new Path().ellipse(15, 7.5, 80, 50).toString()}
      className='filled'
    />
  </Svg>
);
