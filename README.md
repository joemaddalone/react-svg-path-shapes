# react-svg-path-shapes

## Install

```bash
npm install --save react-svg-path-shapes
```


## [demos](https://joemaddalone.github.io/react-svg-path-shapes/)

# Getting started

```
import Path from 'react-svg-path-shapes'
```

react-svg-path-shapes extends react-svg-path by adding common macros for common shapes.  All of these shapes are created in a single "d" attribute of an svg path.

## Example

```
import Path from 'react-svg-path-shapes

const App = () => {
  const width = 800;
  const height = 800;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio='none'
    >
      <path d={new Path().ellipse(150, 75, 80, 50).toString()} />
    </svg>
  );
};

```

This will produce  a path with the following composition:

```
<path d="M155 50 A75 37.5 0 0 1 5 50 A75 37.5 0 0 1 155 50 z M80 50"></path>
```



## Commands

- **.rect**(_width, height, cx, cy_)
  - .rect is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.square**(_size, cx, cy_)
  - .square is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.triangle**(_size, cx, cy_)
  - .triangle draws an equilateral triangle from center point (cx & cy). The cursor is then moved to the center point.
- **.regPolygon**(_size, sides, cx, cy_)
  - .regPolygon is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.ellipse**(_width, height, cx, cy_)
  - .ellipse is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.circle**(_size, cx, cy_)
  - .circle is drawn from center points (cx & cy). The cursor is then moved to the center points.
- **.sector**(_cx, cy, radius, startAngle, endAngle_)
  - .sector is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.segment**(_cx, cy, radius, startAngle, endAngle_)
  - .segment is drawn from center point (cx & cy). The cursor is then moved to the center point.
- **.polyline**(_[points], relative = false_)
  - .polyline accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the last.  points can be absolute or relative.
- **.polygon**(_[points]_)
  - .polygon accepts an array of [x, y] coordinates and then draws lines connecting those points.  The path will start from the first point and end on the first point - closing the shape.

### [demos](https://joemaddalone.github.io/react-svg-path-shapes/)

## License

MIT © [joemaddalone](https://github.com/joemaddalone)