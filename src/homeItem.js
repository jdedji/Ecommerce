import React from 'react'
import AppContext from './AppContext'

class HomeItem extends React.Component{
           render(){
         
               return(
                 
<div className="col-sm-3 mb-4">
    <div className='card p-4'>
        <div className="text-center">
            <img className="img-fuid" src={this.props.product.imageUrl} alt="" />

        </div>
        <hr/>
               <h4 className="card-title">{this.props.product.name}</h4>
               <p className="card-text">{this.props.product.description}</p>
              <h5 className="card-text">price: <small>${this.props.product.price}</small></h5>
              <span className="card-text">Available Quantity<small>{this.props.product.available_quantity}</small></span>
         <div>
             <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(this.product,1)}}>Cart</button>
         </div>
    </div>
               </div>
                   
               )
           }
}
HomeItem.contextType = AppContext
export default HomeItem;

        