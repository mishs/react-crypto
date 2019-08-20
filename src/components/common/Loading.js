import React from 'react'
// when you import a filqe as whole you don't need from, just specify file name as below
import './Loading.css'

// create loading component as functional component since it's only presentational

const Loading = () => {
    return <div className="Loading" />
}

export default Loading;