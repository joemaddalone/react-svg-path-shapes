import React from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../Svg';

export const RegPolygon = () => (
  <>
    <Svg width={140} height={120}>
      <path d={new Path().regPolygon(100, 6, 50, 50).toString()} />
      <path d={new Path().regPolygon(10, 6, 50, 50).toString()} className='filled' />
    </Svg>
  </>
);