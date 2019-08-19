import React from 'react'
import ReactDOM from 'react-dom'
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currency: [],
            error: null
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        //since will we use to the Root API url in a couple places- turn it a variable
        fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
            // to avoid repetition since we will use fetch again- set as a helper function-> handleResponse
            .then(handleResponse)
            .then((data) => {
            console.log('Success', data);
            //remember- the data.currencies below is specifying the map to exact data required from the data object in API
                this.setState({ currency: data.currencies , loading: false});
            })
            .catch((error) => {
                 //Qn- where is the second error, first in value in the API
            this.setState({
                 error: error.errorMessage, 
                 loading: false });
            });
    }

    render() {
        console.log(this.state);
        if(this.state.loading) {
            return <div>Loading ...</div>
        }
        return (
            <div>List Text</div>
        )
    }
}

export default List;