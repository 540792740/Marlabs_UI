import React from 'react';
import './App.css';
//Day 1
// import Apr_9_Greet from './Components/Apr_9_Greet'
// import Apr9Event from "./Components/Apr_9_Event";
// import Apr9EventBinding from "./Components/Apr_9_EventBinding";
// import Apr9Counter from "./Components/Apr_9_Counter";
// import Hello from "./Components/Apr_9_Hello";
// import Apr_9_Welcome from "./Components/Apr_9_Welcome";
// import Apr_9_Message from "./Components/Apr_9_Message";
import ReactVideo from "./Apr_9_ReactVideo/ReactVideo";
import Apr9State from "./Apr_9_ReactVideo/Apr_9_state";
import Apr9StateTest from "./Apr_9_ReactVideo/Apr_9_state_test";

function App() {
  return (
      <div className="App">
          {/*Day 1*/}
          {/*<Hello/><hr/>*/}
          {/*<Apr_9_Greet name="React" dev="Robin" >*/}
          {/*    <h3>Child Element</h3>*/}
          {/*    <input type="button" value="click"/>*/}
          {/*</Apr_9_Greet><hr/>*/}
          {/*<Apr_9_Greet name="Angular" dev="Cris"></Apr_9_Greet>*/}
          {/*<Apr_9_Greet name="Node" dev="Baby"></Apr_9_Greet>*/}
          {/*<Apr_9_Greet name="Jquery" dev="G.E.M"></Apr_9_Greet><hr/>*/}
          {/*<Apr_9_Welcome name="Angular" dev="Cris"></Apr_9_Welcome>*/}
          {/*<Apr_9_Welcome name="Angular" dev="Cris"></Apr_9_Welcome>*/}
          {/*<Apr_9_Welcome name="Node" dev="Baby"></Apr_9_Welcome>*/}
          {/*<Apr_9_Welcome name="Node" dev="Baby"></Apr_9_Welcome><hr/>*/}

          {/*<Apr_9_Message></Apr_9_Message> <hr/>*/}
          {/*<Apr9Counter></Apr9Counter>       <hr/>*/}
          {/*<Apr9Event></Apr9Event> <hr/>*/}
          {/*<Apr9EventBinding></Apr9EventBinding>*/}

      {/*    Video*/}
          <ReactVideo></ReactVideo>
          <Apr9State></Apr9State>
          <Apr9StateTest></Apr9StateTest>
      </div>
  );
}



export default App;


