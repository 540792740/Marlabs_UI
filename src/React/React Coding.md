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
        b>  improve reusability
            Memo Component:
                const Comment = React.memo(function(){return ...}) -> return pure component             

        c>  Simplify Higher order component:
            `npm install --save-dev babel-plugin-transform-decorators-legacy`
            in override.js: add:
                config = injectBabelPlugin(
                ['@babel/plugin-proposal-decorators', { "legacy": true }],
                config,
                )

###3.  Composition: safety and specific compared with inherent(which is not Recommended )
        a>  
        
        
        
###4.  Redux:  Redux is a predictable state container for JS app
        a> `npm install redux`
        b>  `Store`： holds the state of Application
            `Action`: Describes the changes in the sate of the App
            `Reducer`: carries out the sate transition depending on the action
        
        c> principle:
            1>
            2> The only way to change the state is to emit an ction, an object descriping what happen
            3> To specify how the satet tree is transformed by actions, you write pure reducers.
         d>   
