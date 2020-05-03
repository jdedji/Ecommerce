import React from 'react'
import AppContext from '../AppContext'


class HouseholdItem extends React.Component{
    render(){
  
        return(
          
<div className="col-sm-4 mb-4">
<div className='card p-4'>
 <div className="text-center">
     <img className="img-fuid" src={this.props.household.imageUrl} alt="" />

 </div>
 <hr/>
        <h4 className="card-title">{this.props.household.name}</h4>
        <p className="card-text">{this.props.household.description}</p>
       <h5 className="card-text">price: <small>${this.props.household.price}</small></h5>
       <span className="card-text">Available Quantity<small>{this.props.household.available_quantity}</small></span>
  <div>
      <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(this.household,1)}}>Cart</button>
  </div>
</div>
        </div>
            
        )
    }
}
HouseholdItem.contextType = AppContext
export default HouseholdItem;
