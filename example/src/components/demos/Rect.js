import React from 'react'
import Path from 'react-svg-path-shapes'
import Svg from '../Svg'

export const Rect = () => (
  <>
    <h4 className='ui-header'>absolute</h4>
    <Svg width={140} height={120}>
      <path d={new Path().rect(120, 60, 60, 60).toString()} />
      <path d={new Path().rect(10, 5, 60, 60).toString()} className='filled' />
    </Svg>
    <h4 className='ui-header'>relative</h4>
    <Svg width={200} height={120}>
      <path
        d={new Path()
          .M(0, 60)
          .right(35)
          .m(0, -30)
          .rect(120, 60)
          .m(120, 30)
          .right(50)
          .toString()}
      />
    </Svg>
  </>
)
