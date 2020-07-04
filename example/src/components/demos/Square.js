import React from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../Svg';

export const Square = () => (
  <>
    <Svg width={140} height={120}>
      <path d={new Path().square(100, 50, 50).toString()} />
      <path d={new Path().square(10, 50, 50).toString()} className='filled' />
    </Svg>
  </>
);
