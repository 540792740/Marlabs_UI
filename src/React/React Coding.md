###1.  Basic Coding
    a>  If and loop: 
            {this.state.isLogin ? <p>{userInfo.name}</p> : Login}
            {this.state.message && <p>{this.state.message} </p>
            {this.state.list.map(u=><li>{u.name}</li>)}
    b>  Event
            onChange =()=>{}
            <input onChange={this.onChange}/>
            <input onChange={()=>this.onChange(user)}/>
    c>  Communication
            <Comp title = {} onSubmit=>{this.onSubmit}>
            
            
###2.  HOC: Higher-Order component: 
        a>  a component(actually is a function), receive a "C", return a "C"
        b>  improve reusability, add property
            Memo Component:
                const Comment = React.memo(function(){return ...}) -> return pure component             

        c>  Simplify Higher order component:
            `npm install --save-dev babel-plugin-transform-decorators-legacy`
            in override.js: add:
                config = injectBabelPlugin(
                ['@babel/plugin-proposal-decorators', { "legacy": true }],
                config,
                )
        d>   Decorator:
                1> should be used in order before `class` not `function`

###3.  Composition: safety and specific compared with inherent(which is not Recommended )
        a>  Add functions to orighinal component
        b>  Core: props.children 
        c>  If want to add/change props, need to use React.cloneElement()
        
        
        
###4.  Redux:  Redux is a predictable state container for JS app
        a>  `npm install redux`
            `npm install react-redux`
        b>      1>`Store`： holds the state of Application
                    Responsibilities:
                        A> Holds application state
                        B> Allows access to state via getState()
                        C> Allows state to be updated via dispatch
                        D> Register listenners via subscribe(listenner)
                        E> Handles unregistering, by a function returned  by subscribe
                2> `Action`: Describes the changes in the sate of the App
                3> `Reducer`: carries out the sate transition depending on the action
        
        c> principle:
            1>
            2> The only way to change the state is to emit an ction, an object descriping what happen
            3> To specify how the satet tree is transformed by actions, you write pure reducers.
         d> Redux-logger
                `npm i --save redux-logger`
                
         e> `npm install axios redux-thunk`

###5. Hook
        a> Using `state` without create class, just using function,
            subscribe to store and dispatch actions without connect()
        b> import useState
        c> useEffect: Effect Hook, executed when render everytime
        d> Custom Hook: based on useState
        e> `userSelector hook`: 

###5. Context:
      Exasperating transfer parameters
        a> React.createContext()
         Context.Provider
                Context.Consumer(in provider): get element from provider tag
        b> Using hook as consumer by using
                `const ctx = useContext(MyContext);`
        c> Using class static contextType:
                `static contextType = MyContext;`
      
###6. Antd Form
        a> Setps:
            1> Regular class, just contain Login in and Password
            2> HOC component, wrap `input`  event, get input validation   
            3> Provide validation form to class based on data
            4> Most important: getFieldDec, can be handle in parent component
            5> Finish validation rules.
        b>
        c>
