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
} from './components/demos/basic';

import Pie from './components/demos/complex/Pie';
import Donut from './components/demos/complex/Donut';
import SparkLine from './components/demos/complex/SparkLine';
import Gear from './components/demos/complex/Gear';

const App = () => {
  const basicDemos = [
    Rect,
    Square,
    Triangle,
    RegPolygon,
    Ellipse,
    Circle,
    Sector,
    Segment,
    Polyline,
    Polygon
  ];

  const pieData = [
    {
      color: 'red',
      percent: 20
    },
    {
      color: 'orange',
      percent: 30
    },
    {
      color: 'yellow',
      percent: 50
    }
  ];

  return (
    <div>
      <h2 className='ui-header'>react-svg-path-shapes</h2>
      <a href='https://github.com/joemaddalone/react-svg-path-shapes'>
        https://github.com/joemaddalone/react-svg-path-shapes
      </a>
      <div className='basic-shapes'>
        <h2 className='ui-header'>Basic Shapes</h2>
        {basicDemos.map((C, i) => (
          <C key={i} />
        ))}
      </div>
      <h2 className='ui-header'>Combining Shapes</h2>
      <div>
        <h3 className='ui-header'>multiple .sectors</h3>
        <Pie size={150} cx={80} cy={80} data={pieData} />
        <h3 className='ui-header'>multiple .segments</h3>
        <Donut width={25} size={150} cx={80} cy={80} data={pieData} />
        <h3 className='ui-header'>fitted .polyline</h3>
        <SparkLine
          width={300}
          height={150}
          data={[-10, -45, 10, 0, 35, 10, -9, 25, 15, 75]}
        />
      </div>
    </div>
  );
};

export default App;
