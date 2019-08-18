import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/Header'
import './index.css'

const App = () => {
  return (
    <div>
      <Header />
      <h1>App Home Page</h1>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
 );

