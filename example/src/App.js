import React from 'react';
import {
  Rect,
  Square,
  Circle,
  Ellipse,
  Segment,
  Sector,
  Polygon,
  RegPolygon,
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
      <p>
        .rect is drawn from center point (cx & cy). The cursor is then moved to
        the center point.
      </p>
      <Rect />
      <h3 className='ui-header'>.square(size, cx, cy)</h3>
      <p>
        .square is drawn from center point (cx & cy). The cursor is then moved
        to the center point.
      </p>
      <Square />
      <h3 className='ui-header'>.triangle(size, cx, cy)</h3>
      <p>
        .triangle draws an equilateral triangle from center point (cx & cy). The
        cursor is then moved to the center point.
      </p>
      <Triangle />
      <h3 className='ui-header'>.regPolygon(size, sides, cx, cy)</h3>
      <p>
        .regPolygon is drawn from center point (cx & cy). The cursor is then
        moved to the center point.
      </p>
      <RegPolygon />
      <h3 className='ui-header'>.ellipse(width, height, cx, cy)</h3>
      <p>
        .ellipse is drawn from center point (cx & cy). The cursor is then moved
        to the center point.
      </p>
      <Ellipse />
      <h3 className='ui-header'>.circle(size, cx, cy)</h3>
      <p>
        .circle is drawn from center points (cx & cy). The cursor is then moved
        to the center points.
      </p>
      <Circle />
      <h3 className='ui-header'>
        .sector(cx, cy, radius, startAngle, endAngle)
      </h3>
      <p>
        .sector is drawn from center point (cx & cy). The cursor is then moved
        to the center point.
      </p>
      <Sector />
      <h3 className='ui-header'>
        .segment(cx, cy, radius, startAngle, endAngle)
      </h3>
      <p>
        .segment is drawn from center point (cx & cy). The cursor is then moved
        to the center point.
      </p>
      <Segment />
      <h3 className='ui-header'>.polyline([points], relative = false)</h3>
      <p>
        .polyline accepts an array of [x, y] coordinates and then draws lines
        connecting those points. The path will start from the first point and
        end on the last. points can be absolute or relative.
      </p>
      <Polyline />
      <h3 className='ui-header'>.polygon([points])</h3>
      <p>
        .polygon accepts an array of [x, y] coordinates and then draws lines
        connecting those points. The path will start from the first point and
        end on the first point - closing the shape.
      </p>
      <Polygon />
    </div>
  );
};

export default App;
