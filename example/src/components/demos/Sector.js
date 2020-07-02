import React from 'react'
import Path from 'react-svg-path-shapes'
import Svg from '../Svg'

export const Sector = () => (
  <Svg width={140} height={120}>
    <path d={new Path().sector(60, 60, 50, 0, 270).toString()} />
    <path d={new Path().circle(10, 60, 60).toString()} className='filled' />
  </Svg>
)
