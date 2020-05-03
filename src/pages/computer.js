import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AppContext from '../AppContext'
import ComputerItem from './computerItem'
import Sidebar from '../Components/sidebar'
class Computers extends React.Component{
    render(){
        return(
<div>
    <Navbar />
<section className="fashions-section">
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <Sidebar/>
            </div>
            <div className="col-sm-8">
          <div className="row">
              {
                  this.context.computers.map((computer,index)=>
                  <ComputerItem computer={computer} key={index}/> 
                  )
              }
          </div>
          </div>
        </div>
    </div>
</section>
    <Footer/>
    </div>
        )
    }

}
Computers.contextType= AppContext;
export default Computers;