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
            
            
2.  HOC: Higher-Order component
        Memo Component:
            const Comment = React.memo(function(){return ...}) -> return pure component             
44：26
