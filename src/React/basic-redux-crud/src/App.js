import React from 'react';
import './App.scss';
import {Provider} from 'react-redux'
import store from './Redux/createStore'
import InputSection from "./Components/inputSection";
import NoteSection from "./Components/NoteSection";

function App() {
  return (
      <Provider store={store}>
        <div className="container">
            <h3>My Notes</h3>
            <InputSection></InputSection>
        <div className="line"></div>
            <NoteSection></NoteSection>
</div>
</Provider>
);
}

export default App;


