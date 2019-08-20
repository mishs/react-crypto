import React from 'react'
// import Header  from '/Header.css'
// since it's not a component, you don't import it as above but rather as below
import './Header.css'
import logo from './logo.png'

// demonstration of internal styling, 
   //key is in camelCase style convention as below
  
//    const containerStyle = {
//        //remember-  key is in camelCase
//         fontSize : '40px'
// }

const Header = () => {
    return (
        <div className="Header">
         <img src={logo} alt="logo" className="Header-logo"/>
         {/* <h1 className="Header" style={containerStyle} style={{marginTop : '10px'}}>Header</h1> */}
         </div>
        )
}

export default Header;