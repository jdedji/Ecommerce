import React from 'react'
import AppContext from '../AppContext'


class PhoneItem extends React.Component{
    render(){
  
        return(
          
<div className="col-sm-4 mb-4">
<div className='card p-4'>
 <div className="text-center">
     <img className="img-fuid" src={this.props.phone.imageUrl} alt="" />

 </div>
 <hr/>
        <h4 className="card-title">{this.props.phone.name}</h4>
        <p className="card-text">{this.props.phone.description}</p>
       <h5 className="card-text">price: <small>${this.props.phone.price}</small></h5>
       <span className="card-text">Available Quantity<small>{this.props.phone.available_quantity}</small></span>
  <div>
      <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(this.phone,1)}}>Cart</button>
  </div>
</div>
        </div>
            
        )
    }
}
PhoneItem.contextType = AppContext
export default PhoneItem;
