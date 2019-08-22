import React from 'react'
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import './Table.css';


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
            <div className="Table-container">
                <table className="Table">
                    <thead className="Table-head">
                        <tr>
                            <th>Cyptocurrency</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24H Change</th>
                        </tr> 
                    </thead>
                    <tbody className="Table-body">
                     {currencies.map((currency) => 
                        <tr key={currency.id}>
                         <td>
                             {/* this specific details, ie. table rank and name are from API. */}
                             <span className="Table-rank">{currency.rank}</span>
                             {currency.name}
                         </td>
                         <td>
                             <span className="Table-dollar">$
                             {currency.price} 
                             </span>
                         </td>
                         <td>
                             <span className="Table-dollar">$
                             {currency.marketCap}
                             </span>
                         </td>
                         <td>
                             {this.renderChangePercent(currency.percentChange24h)}
                         </td>
                        
                        </tr>
                     )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;