import React from 'react'
import Path from 'react-svg-path-shapes'
import Svg from '../Svg'

export const Triangle = () => (
  <>
    <h4 className='ui-header'>absolute</h4>
    <Svg width={140} height={120}>
      <path d={new Path().triangle(95, 50, 60).toString()} />
      <path d={new Path().triangle(10, 50, 60).toString()} className='filled' />
    </Svg>
    <h4 className='ui-header'>relative</h4>
    <Svg width={140} height={120}>
      <path d={new Path().M(0, 60).right(45).triangle(90).toString()} />
    </Svg>
  </>
)