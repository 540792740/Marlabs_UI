import React from 'react';
import './App.css';
//Example 2
import Apr_9_Greet from './Components/Apr_9_Greet'
import Apr9Event from "./Components/Apr_9_Event";
import Apr9EventBinding from "./Components/Apr_9_EventBinding";
//Example 1
// import  Apr_9_Greet from './Components/Apr_9_Greet'

function App() {
  return (
      <div className="App">
          {/*<Hello/><hr/>*/}
          <Apr_9_Greet name="React" dev="Robin" >
              <h3>Child Element</h3>
              <input type="button" value="click"/>
          </Apr_9_Greet><hr/>
          {/*<Apr_9_Greet name="Angular" dev="Cris"></Apr_9_Greet>*/}
          {/*<Apr_9_Greet name="Node" dev="Baby"></Apr_9_Greet>*/}
          {/*<Apr_9_Greet name="Jquery" dev="G.E.M"></Apr_9_Greet><hr/>*/}
          {/*<Apr_9_Welcome name="Angular" dev="Cris"></Apr_9_Welcome>*/}
          {/*<Apr_9_Welcome name="Angular" dev="Cris"></Apr_9_Welcome>*/}
          {/*<Apr_9_Welcome name="Node" dev="Baby"></Apr_9_Welcome>*/}
          {/*<Apr_9_Welcome name="Node" dev="Baby"></Apr_9_Welcome><hr/>*/}

          {/*<Apr_9_Message></Apr_9_Message> <hr/>*/}
          {/*<Apr9Counter></Apr9Counter>       <hr/>*/}
          <Apr9Event></Apr9Event> <hr/>
          <Apr9EventBinding></Apr9EventBinding>

      </div>
  );
}

export default App;

