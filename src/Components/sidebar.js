import React from 'react';
import {Link} from 'react-router-dom';
class Sidebar extends React.Component{
    render(){
        return(
           <div>
               <div className="card p-5">
                   <h5>My Cathegories</h5>
                   <ul className="list-unstyled p-0 m-0">
                     <li>
                         <Link to="/fashions">
                             <div className="d-inline-flex">
                             <div className=" header-icon icon-wrap"> 
                                 <i className=" header-icon fas fa-tshirt"></i>
                                 </div>
                                 <div className="text-wrap">
                                     Fashions
                                 </div>
                             </div>
                         </Link>
                         </li> 
                         <li>
                         <Link to="/household">
                             <div className="d-inline-flex">
                             <div className="header-icon icon-wrap"> 
                                 <i className="fas fa-home"></i>
                                 </div>
                                 <div className="text-wrap">
                                    Household Appliaces
                                 </div>
                             </div>
                         </Link>
                         </li>  
                         <li>
                         <Link to="/phones">
                             <div className="d-inline-flex">
                             <div className="header-icon icon-wrap"> 
                                 <i className="fas fa-mobile-alt"></i>
                                 </div>
                                 <div className="text-wrap">
                                     Phones & tablets
                                 </div>
                             </div>
                         </Link>
                         </li>  
                         <li>
                         <Link to="/computers">
                             <div className="d-inline-flex">
                             <div className="header-icon icon-wrap"> 
                                 <i className="fas fa-laptop"></i>
                                 </div>
                                 <div className="text-wrap">
                                     Computers & Accessories
                                 </div>
                             </div>
                         </Link>
                         </li>  
                         <li>
                         <Link to="/electronics">
                             <div className="d-inline-flex">
                             <div className="header-icon icon-wrap"> 
                                 <i className="fas fa-tv"></i>
                                 </div>
                                 <div className="text-wrap">
                                    Comsumers Electronics
                                 </div>
                             </div>
                         </Link>
                         </li>   
                   </ul>

               </div>
           </div>
        )
    }
}
export default Sidebar;