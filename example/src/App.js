import React from 'react'
import Path from 'react-svg-path-shapes'

const data = [-10, -45, 10, 0, 35, 10, -9, 25, 15, 75]


const App = () => {
  return (
    <div>
      <h2>.grid()</h2>
      <svg width={250} height={250}>
        <path d={new Path().grid(1, 1, 248, 248, 10, 10).toString()} />
      </svg>
      <h2>.square()</h2>
      <svg width={120} height={120}>
        <path d={new Path().square(100, 50, 50).toString()} />
        <path
          d={new Path().square(10, 50, 50).toString()}
          style={{ fill: 'rebeccapurple' }}
        />
      </svg>
      <h2>.circle()</h2>
      <svg width={110} height={120}>
        <path d={new Path().circle(95, 50, 50).toString()} />
        <path
          d={new Path().circle(10, 50, 50).toString()}
          style={{ fill: 'rebeccapurple' }}
        />
      </svg>
      <h2>.triangle()</h2>
      <svg width={110} height={110}>
        <path d={new Path().triangle(95, 50, 60).toString()} />
        <path
          d={new Path().triangle(10, 50, 60).toString()}
          style={{ fill: 'rebeccapurple' }}
        />
      </svg>
      <h2>.polyline()</h2>
      <svg width={260} height={160}>
        <path d={new Path().polyline(10, 100, 240, data).toString()} />
      </svg>
      <h2>.stepline()</h2>
      <svg width={800} height={160}>
        <path d={new Path().stepline(10, 100, 250, data).toString()} />
      </svg>
      <h2>.polygon()</h2>
      <svg width={800} height={160}>
        <path
          d={new Path()
            .polygon(10, 60, [40, 0], [70, 60], [40, 120])
            .toString()}
        />
      </svg>
      <h2>combining shapes</h2>
      <svg width={305} height={155}>
        <path
          d={new Path().grid(0, 0, 300, 150, 10, 10).toString()}
          style={{ stroke: '#ccc' }}
        />
        <path
          d={new Path().polyline(0, 100, 300, data).toString()}
          style={{ stroke: 'green', strokeWidth: 2 }}
        />
      </svg>
    </div>
  )
}

export default App
