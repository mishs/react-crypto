import React from 'react'
// import Header  from '/Header.css'
// since it's not a component, you don't import it as above but rather as below
import './Header.css'

// demonstration of inline styling, 
   //key is in camelCase style convention as below
   const containerStyle = {
       //remember-  key is in camelCase
        fontSize : '60px'
}

const Header = () => {
    return <h1 className="Header" style={containerStyle}>Header</h1>
}

export default Header;