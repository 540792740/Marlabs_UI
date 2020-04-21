import React from 'react';
import './App.scss';
// import {Provider} from 'react-redux'
// import store from './redux/createStore'
import InputSection from "./Components/inputSection";

function App() {
  return (
      // <Provider store={{store}}>
        <div className="container">
            <h3>My Notes</h3>
            <InputSection></InputSection>
            <div className="line"></div>
        </div>
      // </Provider>
  );
}

export default App;
