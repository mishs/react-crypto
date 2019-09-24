import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/common/Header'
import './index.css'
import List from './components/list/List'

const App = () => {
  return (
      <BrowserRouter>
   {/* BrowserRouter returns one child element, 'div' and not siblings listed like how Header and Switch would have been not being wrapped in div  */}
        <div>
    {/* Header outside Switch that iterates because we want it on every page of the components  */}
          <Header />

      </div>
      </BrowserRouter>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
 );

