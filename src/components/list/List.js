import React from 'react'
import ReactDOM from 'react-dom'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
        }
    }

    render() {
        if(this.state.loading) {
            return <div>Loading ...</div>
        }
        return (
            <div>List Text</div>
        )
    }
}

export default List;