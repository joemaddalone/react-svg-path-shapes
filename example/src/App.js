import React from 'react'
import Path from 'react-svg-path-shapes'
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

const data = [-10, -45, 10, 0, -55, 10, -9, 25, 15, 80]

const App = () => {
  return (
    <div>
      <h2 className='ui-header'>react-svg-path-shapes</h2>
      <a href='https://github.com/joemaddalone/react-svg-path-shapes'>
        https://github.com/joemaddalone/react-svg-path-shapes
      </a>

      <h3 className='ui-header'>Demos</h3>
      <h2>.rect(width, height, x, y)</h2>
      <Rect />
      <h2>.square(size, x, y)</h2>
      <Square />
      <h2>.ellipse(width, height, x, y)</h2>
      <Ellipse />
      <h2>.circle(size, x, y)</h2>
      <Circle />
      <h2>.sector(x, y, radius, startAngle, endAngle)</h2>
      <Sector />
      <h2>.segment(x, y, radius, startAngle, endAngle)</h2>
      <Segment />
      <h2>.triangle(size, x, y)</h2>
      <Triangle />
      <h2>.polyline(points, relative = false)</h2>
      <Polyline />
      <h2>.polygon(points, relative = false)</h2>
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
