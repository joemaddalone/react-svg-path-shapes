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
import Svg from './components/Svg';
import Pie from './components/demos/complex/Pie';
import Donut from './components/demos/complex/Donut';
import SparkLine from './components/demos/complex/SparkLine';
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
      color: '#086972',
      percent: 20,
      nested: [
        { color: 'rgba(0,100,25,0.9)', percent: 10 },
        { color: 'rgba(0,100,25,0.8)', percent: 10 }
      ]
    },
    {
      color: '#01a9b4',
      percent: 30,
      nested: [
        { color: 'rgba(0,100,25,0.7)', percent: 10 },
        { color: 'rgba(0,100,25,0.6)', percent: 10 },
        { color: 'rgba(0,100,25,0.5)', percent: 10 }
      ]
    },
    {
      color: '#87dfd6',
      percent: 50,
      nested: [
        { color: 'rgba(0,100,25,0.4)', percent: 25 },
        { color: 'rgba(0,100,25,0.3)', percent: 25 }
      ]
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
        <Svg width={250} height={160}>
          <Pie size={150} cx={80} cy={80} data={pieData} />
        </Svg>
        <h3 className='ui-header'>multiple .segments</h3>
        <Svg width={250} height={160}>
          <Donut width={25} size={150} cx={80} cy={80} data={pieData} />
        </Svg>
        <h3 className='ui-header'>multiple .sectors + .segments</h3>
        <Svg width={180} height={180}>
          <Pie size={130} cx={90} cy={90} data={pieData} />
          <Donut
            width={20}
            size={175}
            cx={90}
            cy={90}
            stroke='#fff'
            data={pieData.map((pd) => pd.nested).flat()}
          />
        </Svg>
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
