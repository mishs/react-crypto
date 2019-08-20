import React from 'react'
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import './Table.css'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
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
                this.setState({ currencies: data.currencies , loading: false});
            })
            .catch((error) => {
                 //Qn- where is the second error, first in value in the API
            this.setState({
                 error: error.errorMessage, 
                 loading: false });
            });
    }

    render() {
        //this.state represents the whole initial state, just now updated
        // console.log(this.state);

        if(this.state.loading) {
            return <div>Loading ...</div>
        }

        return (
            <div className="Table-container">
               {this.state.currencies.map((currency) => 
               <div key={currency.id}>{currency.id}</div>
                )}
            </div>
        );
    }
}

export default List;