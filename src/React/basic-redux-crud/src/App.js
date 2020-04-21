import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from "";

function App() {
  return (
      <Provider store={{store}}>
        <div className="App">
            My Notes
        </div>
      </Provider>
  );
}

export default App;
