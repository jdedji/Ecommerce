import React from 'react'
import AppContext from '../AppContext'


class FashionItem extends React.Component{
    render(){
  
        return(
          
<div className="col-sm-4 mb-4">
<div className='card p-4'>
 <div className="text-center">
     <img className="img-fuid" src={this.props.fashion.imageUrl} alt="" />

 </div>
 <hr/>
        <h4 className="card-title">{this.props.fashion.name}</h4>
        <p className="card-text">{this.props.fashion.description}</p>
       <h5 className="card-text">price: <small>${this.props.fashion.price}</small></h5>
       <span className="card-text">Available Quantity<small>{this.props.fashion.available_quantity}</small></span>
  <div>
      <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(this.fashion,1)}}>Cart</button>
  </div>
</div>
        </div>
            
        )
    }
}
FashionItem.contextType = AppContext
export default FashionItem;
