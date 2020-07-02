import React from 'react'
import Path from 'react-svg-path-shapes'
import Svg from '../Svg'

// <svg width={800} height={160}>

const points = [
  [10, 60],
  [40, 0],
  [70, 60],
  [40, 120]
]

export const Polygon = () => (
  <Svg width={140} height={120}>
    <path d={new Path().polygon(points).toString()} />
  </Svg>
)
