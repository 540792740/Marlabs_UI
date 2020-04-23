import React from 'react';
import './App.css';
// import logo from './logo.svg'
import {Provider} from 'react-redux';
// import store from './redux/store'
import store from "./components/store/Apr_21_index";
import Apr21ReduxTest from "./components/Apr_21_reduxTest";
import Apr22RouteSample from "./components/Apr_22_RouteSample";

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
            <Apr21ReduxTest></Apr21ReduxTest>   <hr/>
            <Apr22RouteSample></Apr22RouteSample>

        </div>
      </Provider>
  );
}

export default App;
