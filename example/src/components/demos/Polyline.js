import React from 'react'
import Path from 'react-svg-path-shapes'
import Svg from '../Svg'

const points = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
]
export const Polyline = () => (
  <Svg width={260} height={160}>
    <path d={new Path().polyline(points).toString()} />
  </Svg>
)
