import React from 'react'
import {
  Rect,
  Square,
  Circle,
  Ellipse,
  Segment,
  Sector,
  Polygon,
  Triangle,
  Polyline
} from './components/demos'

const App = () => {
  return (
    <div>
      <h2 className='ui-header'>react-svg-path-shapes</h2>
      <a href='https://github.com/joemaddalone/react-svg-path-shapes'>
        https://github.com/joemaddalone/react-svg-path-shapes
      </a>
      <h2 className='ui-header'>Demos</h2>
      <h3 className='ui-header'>.rect(width, height, x = null, y = null)</h3>
      <Rect />
      <h3 className='ui-header'>.square(size, x = null, y = null)</h3>
      <Square />
      <h3 className='ui-header'>.ellipse(width, height, x, y)</h3>
      <Ellipse />
      <h3 className='ui-header'>.circle(size, x, y)</h3>
      <Circle />
      <h3 className='ui-header'>.sector(x, y, radius, startAngle, endAngle)</h3>
      <Sector />
      <h3 className='ui-header'>
        .segment(x, y, radius, startAngle, endAngle)
      </h3>
      <Segment />
      <h3 className='ui-header'>.triangle(size, x, y)</h3>
      <Triangle />
      <h3 className='ui-header'>.polyline(points, relative = false)</h3>
      <Polyline />
      <h3 className='ui-header'>.polygon(points, relative = false)</h3>
      <Polygon />
      {/* <h2>.grid()</h2>
      <Grid /> */}
      {/* <h2>combining shapes</h2>
      <svg width={202} height={250}>
        <path
          d={new Path().grid(0, 0, 200, 200, 10, 10).toString()}
          style={{ stroke: '#ccc' }}
        />
        <path
          d={new Path().polyline(data.concat(data)).toString()}
          style={{ stroke: 'green', strokeWidth: 2 }}
        />
      </svg> */}
    </div>
  )
}

export default App
