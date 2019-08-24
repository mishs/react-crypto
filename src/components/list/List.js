import React from 'react'
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';


class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
            const { page } = this.state
        //since will we use to the Root API url in a couple places- turn it a variable
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
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

    //method to show arrow sign that's in accordance
    renderChangePercent(percent) {
        if(percent > 0) {
            return <span className="perecent-raised">{percent}% &uarr; </span>
        }else if (percent < 0) { 
            return <span className="percent-fallen">{percent}% &darr;</span>
        }else {
            return <span>{percent}</span>
        }
    }

    render() {
        const { loading, error, currencies } = this.state;

        //this.state represents the whole initial state, just now updated
        // console.log(this.state);

        //render loading component only if loading is set to true
        if(loading) {
            return <div className="loading-container"><Loading /></div>
        }

        //render error message if error occurs while fetching datag
        if(error) {
          return <div className="error">{error}</div>
        }

        return (
            <div>
                <Table 
                currencies={currencies}
                renderChangePercent={this.renderChangePercent}
                />
                <Pagination />
            </div>
        );
    }
}

export default List;