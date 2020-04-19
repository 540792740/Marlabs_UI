import React, {Component} from 'react';
import './App.css';
//Day 1
import './Components/Apr_10_appStyle.css'
import Apr19Context from "./Apr_9_ReactVideo/Apr_19_Context";
import KFrom from "./Apr_9_ReactVideo/KFrom";


class App extends Component{
    state = {prop:'some prop'};

    componentDidMount() {
        this.setState({prop:'New prop'});

        setTimeout(()=>{
            this.setState({prop:''})
        }, 2000);
    }

    render(){
        return (
          <div className="App">
              {/*Day 1  Apr 9 */}
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
              {/*{this.state.prop && <Apr12LifeCycle prop={this.state}></Apr12LifeCycle>}*/}
              {/*<Apr15AntdTest></Apr15AntdTest>   <hr/>*/}
              {/*<CommentList></CommentList>   <hr/>*/}
              {/*<Apr116Hoc></Apr116Hoc>   <hr/>*/}
              {/*<Apr16Conposition></Apr16Conposition><hr/>*/}
              {/*<Apr18HookTest></Apr18HookTest> <hr/>*/}
              <Apr19Context></Apr19Context> <hr/>
              {/*<WrappedNormalLoginForm></WrappedNormalLoginForm>*/}
              <KFrom></KFrom>

              {/*    Day 2 Apr 10*/}
              {/*<Apr10ParentComponent></Apr10ParentComponent><hr/>*/}
              {/*<Apr10CondRen></Apr10CondRen><hr/>*/}
              {/*<Apr10ListRen></Apr10ListRen><hr/>*/}
              {/*<Apr10StyleSheet primary={true}></Apr10StyleSheet><hr/>*/}
              {/*<Apr10InlineStyle></Apr10InlineStyle><hr/>*/}
              {/*<Apr10Form></Apr10Form><hr/>*/}
              {/*<Apr10LifeCycleParent></Apr10LifeCycleParent>*/}

              {/*Day 3 Apr 13*/}
              {/*<h3>home</h3>*/}
              {/*<Apr13ParCom></Apr13ParCom>*/}
              {/*<Apr13RefsDemo></Apr13RefsDemo>*/}
              {/*<Apr13ClickCounter></Apr13ClickCounter>*/}
              {/*<Apr13HoverCounter></Apr13HoverCounter>*/}
        </div>
        )
    }
}



export default App;


