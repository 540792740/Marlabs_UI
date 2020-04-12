import React, {Component} from 'react';

class Apr9CartSample extends Component {

    //Initialize always in constructor
    constructor(props) {
        super(props);
        this.title = "title";
        this.state = {
            goods:[
                {id:1, text:'Web full stack'},
                {id:2, text:'Web UI'}
            ],
            text:'',
            cart:[]
        };
        this.addGood = this.addGood.bind(this);
    }
    textChange = (e) =>{
        this.setState({text: e.target.value})
    };

    // 比较麻烦，需要在构造器声明
    addGood (){
        this.setState(prevState =>{
            return{
                goods:[
                    ...prevState.goods,
                    {id: prevState.goods.length + 1,
                    text : prevState.text
                    }]
            }
        });
    };


    addToCart = good => {
        //New Cart
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c =>c.id === good.id);
        const item  = newCart[idx];
        if(item){
            newCart.splice(idx, 1, {...item, count:item.count + 1})
        }else{
            newCart.push({...good, count:1});
        }

        //Renew
        this.setState({cart: newCart})
    };

    //Deal with quantity of
    add = good => {
        //New Cart
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c =>c.id === good.id);
        const item  = newCart[idx];
        newCart.splice(idx, 1, {...item, count:item.count + 1});
        //Renew
        this.setState({cart: newCart})
    };

    minus = good  => {
        //New Cart
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c =>c.id === good.id);
        const item  = newCart[idx];
        newCart.splice(idx, 1, {...item, count:item.count - 1});

        //Renew
        this.setState({cart: newCart})
    };

    render() {
        // const title = this.props.title ? <h1>this.props.title</h1>: null;
        return (
            <div>
                    {/*Conditional Rendering*/}
                    {this.title &&  <h3>{this.title}</h3>}

                    {/*List Rendering*/}
                    <ul>
                        {this.state.goods.map(good=>(
                            <li key = {good.id}>
                                {good.text}
                                <button onClick={() => this.addToCart(good)}>Add Cart</button>
                            </li>
                        ))}
                    </ul>
                <input type="text"  onChange={this.textChange}/>
                <button onClick={this.addGood}>Submit</button>

                <Cart data={this.state.cart} add={this.add} minus={this.minus}/>
            </div>
        )};
}



function Cart({data, minus, add}) {
    return (
        <table>
            <tbody>
                {data.map(d => (
                    <tr key={d.id}>
                        <td>{d.text}</td>
                        <td>
                            <button onClick={()=> minus(d)}>-</button>
                            {d.count}
                            <button onClick={()=> add(d)}>+</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


export default Apr9CartSample;
