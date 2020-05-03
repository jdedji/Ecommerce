import React from 'react';
import {Link} from 'react-router-dom';
class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="bg-secondary fixed-bottom">
            <div className="container">
              <div className="text-white py-5">
           <div className="row">
           <div className="col-sm-4">
           <div className="">
               <h5>Quick Links</h5>
               <ul className="list-unstyle">
                   <li>
                   <Link className="text-white" to="/cart">My cart</Link>   
                   </li>
                   <li >
                   <Link className="text-white" to="/wishlist">My wishlist</Link>   
                   </li>
               </ul>
           </div>
            </div>
            <div className="col-sm-4">
                <div className="">
                      <h5>Contact us</h5>
                      <p>
                        <strong>phone:</strong> +1234444444 <br/>
                        <strong>Fax:</strong>  +1234444444

                      </p>
                </div>
            </div>
             <div className="col-sm-4">
                 <div className="float-right">
                     <h5>Social link</h5>
                     <div className="text-white">
                        <Link className="text-white mr-4"to="https://facebook.com/cutestores">
                            <i className="fab fa-facebook"></i>
                            </Link>
                            <Link className="text-white mr-4" to="https://twitter.com/cutestores">
                            <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-white mr-4" to="https://youtube.youtubecom/cutestores">
                            <i className="fab fa-facebook"></i>
                            </Link> 
                            <Link className="text-white mr-4" to="https://instagram.com/cutestores">
                            <i className="fab fa-instagram"></i>
                            </Link> 
                     </div>
                 </div>
             </div>
           </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                  <p className="text-white text-center">
                   all right reserved to @
                   <Link to="/">
                   ecommerce-app
                   </Link>
                  </p>
                  </div>  
            </div>
                </footer>
            </div>
        )
    }
}
export default Footer;