import React from 'react';
import './App.css';
//Day 1
import Apr10ParentComponent from "./Components/Apr_10_ParentComponent";
import Apr10CondRen from "./Components/Apr_10_CondRen";
import Apr10ListRen from "./Components/Apr_10_listRen";
import Apr10StyleSheet from "./Components/Apr_10_styleSheet";

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
          {/*<ReactVideo></ReactVideo><hr/>*/}
          {/*<Apr9State></Apr9State><hr/>*/}
          {/*<Apr9StateTest></Apr9StateTest><hr/>*/}
          {/*<Apr9CartSample></Apr9CartSample><hr/>*/}

          {/*    Day 2*/}
          <Apr10ParentComponent></Apr10ParentComponent><hr/>
          <Apr10CondRen></Apr10CondRen><hr/>
          <Apr10ListRen></Apr10ListRen><hr/>
          <Apr10StyleSheet primary={true}></Apr10StyleSheet>

      </div>
  );
}



export default App;


