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
            
            
44：26