import React from 'react';
import './App.css';
// import logo from './logo.svg'
import {Provider} from 'react-redux';
import store from './redux/store'
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/newCakeContainner";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            {/*<CakeContainer></CakeContainer>*/}
            <NewCakeContainer></NewCakeContainer><hr/>
            {/*<HooksCakeContainer></HooksCakeContainer>*/}
            <IceCreamContainer></IceCreamContainer> <hr/>
            <ItemContainer></ItemContainer>
            <ItemContainer cake></ItemContainer>
        </div>
      </Provider>
  );
}

export default App;
