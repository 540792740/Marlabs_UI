####1.  Basic Coding

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
            
####2.  HOC: Higher-Order component: 
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

####3.  Composition: safety and specific compared with inherent(which is not Recommended )
        a>  Add functions to orighinal component
        b>  Core: props.children 
        c>  If want to add/change props, need to use React.cloneElement()
        
        
        
####4.  Redux:  Redux is a predictable state container for JS app
        a>  `npm i redux -s`
            `npm install react-redux`
        b>  1>`Store`： holds the state of Application
                Responsibilities:
                    A> Holds application state
                    B> Allows access to state via getState()
                    C> Allows state to be updated via dispatch
                    D> Register listenners via subscribe(listenner)
                    E> Handles unregistering, by a function ret****urned  by subscribe
            2> `Action`: Describes the changes in the sate of the App
                    A> dispatch(action)
            3> `Reducer`: state initialize and update
                    A> Carries out the state transition depending on the action
        C> Provider: Using context to pass parameter.
            1>  in app.js: <Provider store={store}>
        d> {connect} is a HOC:
                connect by mapping using mapStateToPRops and mapDispatchToProps
        e>  applyMiddleware (from action to store):
                1>Redux-logger: 日志记录
                    `npm i --save redux-logger`
                2> thunk: 异步操作
                3> saga:
                    `npm install --save redux-saga`
                    Fetch Data or Cache, easy to use, batter then thunk
                    steps:
                        a> store/saga.js:  
                        b> store/index: 
                        c>  
        f>  combineReducer:
                1> 

         

####5. Hook
        a> Using `state` without create class, just using function,
            subscribe to store and dispatch actions without connect()
        b> import useState
        c> useEffect: Effect Hook, executed when render everytime
        d> Custom Hook: based on useState
        e> `userSelector hook`: 

####5. Context:
      Exasperating transfer parameters
        a> React.createContext()
         Context.Provider
                Context.Consumer(in provider): get element from provider tag
        b> Using hook as consumer by using
                `const ctx = useContext(MyContext);`
        c> Using class static contextType:
                `static contextType = MyContext;`
      
####6. Antd Form
        a> Setps:
            1> Regular class, just contain Login in and Password
            2> HOC component, wrap `input`  event, get input validation   
            3> Provide validation form to class based on data
            4> Most important: getFieldDec, can be handle in parent component
            5> Finish validation rules.
        b>
        c>

####7. React-router
        a>  `npm i react-router-dom`
        b>  Conponent:
            1> `BrowserRouter`:  router's tag
            2> `Link` : provide accessible navigation 
            3> `Redirect` :  navigate to new location which can override current location
            4> `Route` : most time, Route in Switch tag, render some UI when its path matches url
            5> `Switch`: Render the first child <Route> or <Redirect>
        c>  privateRoute
            1>   return (<Route {...rest} render={
                            props =>
                                isLogin? <Comp></Comp> :
                                    <Redirect to={{pathname:"./login", redirect: props.location.pathname}}></Redirect>
                        }></Route>)
             2> in return: 
                <PrivateRoute path="/about" component={About}></PrivateRoute>

####8. Webpack:
        a> npm init -y
        b> npm i -D webpack webpack-cli
        c> npm i http-server -g
            http-server -o
         d> npm i -D html-webpack-plugin html-loader
         d> npm i -D webpack-dev-server
            Json add:  "start:dev" : "webpack-dev-server"
            npm run start:dev
         e> bebel:
            npm i -D @babel/core babel-loader @babel/preset-env
         f> npm i -D file-loader
         g> npm i -D node-sass
            npm i -D style-loader css-loader sass-loader mini-css-extract-plugin

####9. MERN:
        a>  M
        b>  E
        c>  R
        d>  N

####10. umi:
        a. 
        
####11. generator:
        a. function* g(){}
        b. function next(){
                let {value, done} = gen.next();
                       console.log(value);
                       if(!done) next();}

####12. ReactNative:
        a. App Category: 
            1. WebApp: render by browser
            2. NativeApp: render by mobile device
            3. HybridApp: 
                render by browser which was installed on mobile device
                Coding using web language, then using framework wrap as App.
                such as: Html5+, Lonic, wechat public account
        b. Advantage:
            FaceBook's ReactNative
            1. 性能和原生的一样
            2. 可跨平台 
            3. 开发成本低
        c. Environment:
            1. npm install create-react-native-app --global: 全局命令
            2. npm start / expo start
            3. Create a project
            
            
