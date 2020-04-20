import React from 'react';
import './App.css';
// import logo from './logo.svg'
import {Provider} from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from "./components/hooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <CakeContainer></CakeContainer>
            <HooksCakeContainer></HooksCakeContainer>
            <IceCreamContainer></IceCreamContainer>
        </div>
      </Provider>
  );
}

export default App;
