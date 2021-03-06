import React from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../../Svg';

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
    <h3 className='ui-header'>.polyline([points], relative = false)</h3>
    <p>
      .polyline accepts an array of [x, y] coordinates and then draws lines
      connecting those points. The path will start from the first point and end
      on the last. points can be absolute or relative.
    </p>
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
