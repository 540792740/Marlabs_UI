1.  Basic Coding
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
            
            
2.  HOC: Higher-Order component: 
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

3.  Composition: safety and specific compared with inherent(which is not Recommended )
        a>  
