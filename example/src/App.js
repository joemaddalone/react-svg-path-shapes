import React from 'react';
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
} from './components/demos';

const App = () => {
  return (
    <div>
      <h2 className='ui-header'>react-svg-path-shapes</h2>
      <a href='https://github.com/joemaddalone/react-svg-path-shapes'>
        https://github.com/joemaddalone/react-svg-path-shapes
      </a>
      <h2 className='ui-header'>Demos</h2>
      <h3 className='ui-header'>.rect(width, height, cx, cy)</h3>
      <Rect />
      <h3 className='ui-header'>.square(size, cx, cy)</h3>
      <Square />
      <h3 className='ui-header'>.ellipse(width, height, cx, cy)</h3>
      <Ellipse />
      <h3 className='ui-header'>.circle(size, cx, cy)</h3>
      <Circle />
      <h3 className='ui-header'>.sector(cx, cy, radius, startAngle, endAngle)</h3>
      <Sector />
      <h3 className='ui-header'>
        .segment(cx, cy, radius, startAngle, endAngle)
      </h3>
      <Segment />
      <h3 className='ui-header'>.triangle(size, cx, cy)</h3>
      <Triangle />
      <h3 className='ui-header'>.polyline(points, relative = false)</h3>
      <Polyline />
      <h3 className='ui-header'>.polygon(points, relative = false)</h3>
      <Polygon />
    </div>
  );
};

export default App;
