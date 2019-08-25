import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
    const { page, totalPages, handlePaginationClick } = props
 return <div className="Pagination">
     <button 
     className="Pagination-button"
      onClick={() =>handlePaginationClick('prev')}
      disabled={page<=1}
     >
         &larr;
     </button>
     <span className="Pagination-info">Page <b>{page}</b> of <b>{totalPages}</b></span>

     <button 
     className="Pagination-button"
     onClick={handlePaginationClick.bind(this, 'next')}
     disabled={age >= totalPages}
     >
         &rarr;
     </button>
 </div>
}

export default Pagination;