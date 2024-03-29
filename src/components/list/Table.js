import React from 'react'
import PropTypes from 'prop-types'
import './Table.css';

const Table = (props) => {
    const { currencies, renderChangePercent } = props
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
                             <span className="Table-dollar">$</span>
                             {currency.price}
                         </td>
                         <td>
                             <span className="Table-dollar">$</span>
                             {currency.marketCap}
                         </td>
                         <td>
                             {renderChangePercent(currency.percentChange24h)}
                         </td>
                        
                        </tr>
                     )}
                    </tbody>
                </table>
            </div>
 )
}

Table.propTypes = {
    currencies: PropTypes.array.isRequired,
    renderChangePercent: PropTypes.func.isRequired
    // for full list of prop-types checking, go to react documentation 'Typechecking wqith proptypes'
}

export default Table;