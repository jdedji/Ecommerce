import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AppContext from '../AppContext'
import PhoneItem from './phoneItem'
import Sidebar from '../Components/sidebar'
class Phone extends React.Component{
    render(){
        return(
<div>
    <Navbar />
<section className="phones-section">
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <Sidebar/>
            </div>
            <div className="col-sm-8"></div>
          <div className="row">
              {
                  this.context.phones.map((Phone,index)=>
                  <PhoneItem Phone={Phone} key={index}/> 
                  )
              }
          </div>
        </div>
    </div>
</section>
    <Footer/>
    </div>
        )
    }

}
Phone.contextType= AppContext;
export default Phone;