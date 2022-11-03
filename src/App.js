import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';
import React from 'react';

function App() {
  const [prev, setPrev] = React.useState('')
  const [current, setCurrent] = React.useState('')


  return (
    <div className="App">
      <Display 
        prev={prev}
        current={current}
      />
      <Buttons
        prev={prev}
        current={current}
        setPrev={setPrev}
        setCurrent={setCurrent}
      />
    </div>
  );
}

export default App;
