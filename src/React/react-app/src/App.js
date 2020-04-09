import React from 'react';
import './App.css';
//Example 1
// import  Apr_9_Greet from './Components/Apr_9_Greet'


//Example 2
import  {Apr_9_Greet} from './Components/Apr_9_Greet'

import Apr_9_Welcome from './Components/Apr_9_Welcome'
import Hello from "./Components/Apr_9_Hello";

function App() {
  return (
      <div className="App">
          <Hello/>
          <Apr_9_Greet name="React" dev="Robin" >
              <h1>Child Element</h1>
          </Apr_9_Greet>
          <Apr_9_Greet name="Angular" dev="Cris"></Apr_9_Greet>
          <Apr_9_Greet name="Node" dev="Baby"></Apr_9_Greet>
          <Apr_9_Greet name="Jquery" dev="G.E.M"></Apr_9_Greet>
          <Apr_9_Welcome/>
      </div>
  );
}

export default App;

