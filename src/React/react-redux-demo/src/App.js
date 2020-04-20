import React from 'react';
import './App.css';
// import logo from './logo.svg'
import {Provider} from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from "./components/hooksCakeContainer";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          {/*<CakeContainer></CakeContainer>*/}
          <HooksCakeContainer></HooksCakeContainer>
        </div>
      </Provider>
  );
}

export default App;
