import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Cart from './pages/cart'
import Fashions from './pages/fashions'
import Phone from './pages/phones'
import Computer from './pages/computer'
import Electronics from './pages/electronics'
import Household from './pages/household'


import AppContext from './AppContext';
import {getProducts, getFashions, getHouseholds, getComputers, getPhones, getElectronics} from './repo';




class Routes extends React.Component{
     constructor(){
        super()
        this.state = {
          products:[],
          fashions:[],
          households:[],
          phones:[],
          computers:[],
          electronics:[],

          cart: JSON.parse(localStorage.getItem('cart')) || [],
          addToCart: (product, qty) =>{
              let cart = this.state.cart;
              cart.push({
                  product: product,
                  qty_added: qty
              });
              this.setState({
                  cart: cart
              });
              localStorage.setItem('cart', JSON.stringify(cart))
              console.log(cart)
            },
            removeFromCart: (id) =>{
                let cart = this.state.cart, newCart = [];
                cart.map((cartItem) => {
                    if(cartItem.product.id !== id)
                    newCart.push(cartItem)
                })
                this.setState({
                    cart: newCart
                })
              localStorage.setItem('cart', JSON.stringify(newCart))

            },

            clearCart: () =>{
                localStorage.clear();
                this.setState({cart: []});
                if({cart: []} === null){

                }
                alert('cart has been Clear Successfuly')
            },
        }
    }

    componentDidMount(){
        getProducts().then((products) =>{
            this.setState({products
            })
        });

        getFashions().then((fashions) =>{
            this.setState({fashions
            })
        });

        getHouseholds().then((household) =>{
            this.setState({household
            })
        });

        getPhones().then((phone) =>{
            this.setState({phone
            })
        });

        getComputers().then((computer) =>{
            this.setState({computer
            })
        });

        getElectronics().then((electronics) =>{
            this.setState({electronics
            })
        });
    }
    render(){
        return(
            <AppContext.Provider value={this.state}>
            <Switch>
               <Route exact path="/" component={Home}></Route>  {/* the call of class component different from function component  */}
               <Route exact path="/cart" component={Cart}></Route>
               <Route exact path="/fashions" component={Fashions}></Route>
               <Route exact path="/household" component={Household}></Route>
               <Route exact path="/phones" component={Phone}></Route>
               <Route exact path="/computers" component={Computer}></Route>
               <Route exact path="/electronics" component={Electronics}></Route>

            </Switch>
            </AppContext.Provider>
        )
                
    }
}
export default Routes;
            


// export default function RouteExample(){
//     return(
//        <Router>
//            <div>
//                <ul>
//                    <li>
//                     <Link to="/">Home</Link>  {/*Router-Dom  doesn't use <a> tag and href attribut , he uses link and to  */}
//                     </li>
//                     <li>
//                     <Link to="/About">About</Link>   
//                     </li>
//                     <li>
//                     <Link to="/Contact">Contact</Link>   
//                     </li>
//                </ul>

//                <Switch>
//                    <Route exact path="/">
//                         <Home/>
//                    </Route>
//                    <Route path="/About">
//                    <About/>
//                  </Route>
//                  <Route exact path="/Contact">
//                  <Contact/>
//                  </Route>
//                </Switch>
//            </div>
//        </Router>
//     )
// }
// function Home(){
//     return(
//       <h1>this home</h1>  
//     )
// }

// function About(){
//     return(
//       <h1>this about</h1>  
//     )
// }

// function Contact(){
//     return(
//       <h1>this contact</h1>  
//     )
// }