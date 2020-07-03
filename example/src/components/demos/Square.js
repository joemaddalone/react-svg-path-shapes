import React from 'react'
import Path from 'react-svg-path-shapes'
import Svg from '../Svg'

export const Square =  () => (
  <>
  <h4 className='ui-header'>absolute</h4>
  <Svg width={140} height={120}>
    <path d={new Path().square(100, 50, 50).toString()} />
    <path d={new Path().square(10, 50, 50).toString()} className='filled' />
  </Svg>
  <h4 className='ui-header'>relative</h4>
  <Svg width={200} height={120}>
      <path
        d={new Path()
          .M(0, 50)
          .right(35)
          .m(0, -50)
          .square(100) // square ends on the top left corner
          .m(100, 50) // so we move right and down
          .right(35)
          .toString()}
      />
    </Svg>
  </>
)
