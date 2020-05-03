import React from 'react'
import Navbar from '../Components/Navbar';
import CartItem from './cartItem'
import AppContext from '../AppContext';
class Cart extends React.Component{
    render(){
        let total = 0
        this.context.cart.map((item)=> {
          total +=(item.qty_add * item.product.price)  
        })
        return(
            <div>
                <Navbar/>
                <div className="container">
                  <div className="">
                    <h3 className="Card-title">Cart</h3>
                    <hr/>
                  
                    {
                        this.context.cart.map((product, index)=>
                    <CartItem product={product.product} qty={product.qty_added} key={index}/>
                        )
                    }
                    <hr/>
                    <div className="float-right">
                        <h4><small>Total Amount:</small>
                <span className="text-primary">${total}</span>
                        </h4>
                    </div>
                   
                    <div className="row">
                        <div className="col-sm-12">
                  <button className="btn btn-sm btn-danger float-right" onClick={this.context.clearCart}>Clear Cart</button>
                  </div>
                </div>
                
                  </div>
                
                </div>
            </div>
        )
        
    }
}
Cart.contextType = AppContext
export default Cart;