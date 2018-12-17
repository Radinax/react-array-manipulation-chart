import React, { Component } from 'react';
import ArrayMap from './components/ArrayMap';

const mock_lines = () => {
  var lines = {
      c1: {
          e1: {
              data: []
          },
          e2: {
              data: []
          }
      },
      c2: {
          e1: {
              data: []
          },
          e2: {
              data: []
          }
      }
  };
  let j = 0;
  Object.keys(lines).map((c, ci) => {
      Object.keys(lines[c]).map((e, ei) => {
          for (let i = 0; i < 5; i++) {
              lines[c][e].data.push({ value: i + j, time: i });
          };
          j = j + 3;
      });
  });
  return lines;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArrayMap data={mock_lines()} />
      </div>
    );
  }
}

export default App;
