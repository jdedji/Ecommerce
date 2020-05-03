import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sidebar from './Components/sidebar';
import './homeAssets/home.css';
import slide1 from './homeAssets/slide1.jpg'
import slide2 from './homeAssets/slide2.jpg'
import slide3 from './homeAssets/slide3.jpg'
import paymentIcon from './homeAssets/payment.png'
import returnIcon from './homeAssets/return.png'
import trustIcon from './homeAssets/trust.png'
import { Link } from 'react-router-dom';
import HomeItem from './homeItem'
import AppContext from './AppContext';
// import Routes from './Routes';
class Home extends React.Component {
   
    render() {
       
        return (
            <div>
                <Navbar />
                <section className="first-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar />
                            </div>
                            <div className="col-sm-8">
                                <div className="card">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to={0} class="active" />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100 " src={slide1} alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={slide2} alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100 " src={slide3} alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second-section my-3 py-3 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="">
                            <img className="mb-3" src={paymentIcon} alt="paymentIcon"/>
                            <div className="text-center">
                             <h4>Easy payment</h4>
                             <p>The payment process is easy to do</p>
                            </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="">
                            <img className="mb-3" src={returnIcon} alt="returnIcon"/>
                            <div className="text-center">
                             <h4>Easy return</h4>
                             <p>The payment process is easy to do</p>
                            </div>
                                </div>  
                            </div>
                            <div className="col-sm-4">
                            <div className="">
                            <img className="mb-3" src={trustIcon} alt="trustIcon"/>
                            <div className="text-center">
                             <h4>TrustQuality</h4>
                             <p>The payment process is easy to do</p>
                            </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>
                <section className="third-section">
                 <div className="container">
                     <h4 className="mb-3">popular products</h4>
                    <div className="row">
                        {
                            this.context.products.map((product,index)=> 
                           <HomeItem product={product} key={index}/>
                        
                          
                            )
                        }
                        </div>
                    </div>
                     </section>
                <Footer />
                

            </div>
        )
    }
}
Home.contextType = AppContext
export default Home;