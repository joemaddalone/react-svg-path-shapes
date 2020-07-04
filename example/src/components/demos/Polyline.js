import React from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../Svg';

const pointsAbsolute = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
];

const pointsRelative = [
  [10, 60],
  [30, -60],
  [30, 60],
  [-30, 60]
];
export const Polyline = () => (
  <>
    <h4 className='ui-header'>absolute</h4>
    <Svg width={260} height={160}>
      <path d={new Path().polyline(pointsAbsolute).toString()} />
    </Svg>
    <h4 className='ui-header'>relative</h4>
    <Svg width={260} height={160}>
      <path d={new Path().polyline(pointsRelative, true).toString()} />
    </Svg>
  </>
);
