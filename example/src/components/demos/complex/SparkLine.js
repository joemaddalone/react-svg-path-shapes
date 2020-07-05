import React, { useState } from 'react';
import Path from 'react-svg-path-shapes';
import Svg from '../../Svg';

const SparkLine = ({ width, height, data }) => {
  const p = new Path();
  const zero = height / 2;
  const pointDistance = parseInt(width / data.length);
  const points = data.map((d, index) => {
    if (index !== 0) {
      const prev = data[index - 1];
      return [pointDistance, prev - d];
    } else {
      return [pointDistance, d];
    }
  });
  points.unshift([0, (zero + data.reduce((a, b) => a + b) / 2)-10]);
  p.polyline(points, true).rect(width, height, width / 2, height / 2);

  return (
    <Svg width={width+1} height={height+1}>
      <path d={p.toString()} stroke='red' fill='none' />
    </Svg>
  );
};

export default SparkLine;
