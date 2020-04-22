import React from 'react';
import './App.css';
// import logo from './logo.svg'
import {Provider} from 'react-redux';
import store from './redux/store'
import Apr21ReduxTest from "./components/Apr_21_reduxTest";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            {/*<CakeContainer></CakeContainer>*/}
            {/*<NewCakeContainer></NewCakeContainer><hr/>*/}
            {/*<HooksCakeContainer></HooksCakeContainer>*/}
            {/*<IceCreamContainer></IceCreamContainer> <hr/>*/}
            {/*<ItemContainer></ItemContainer>*/}
            {/*<ItemContainer cake></ItemContainer><hr/>*/}
            {/*<UserContainer></UserContainer>*/}

            {/*Apr 21 Video*/}
            <Apr21ReduxTest></Apr21ReduxTest>


        </div>
      </Provider>
  );
}

export default App;
