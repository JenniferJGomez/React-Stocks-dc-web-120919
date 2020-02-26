import React from 'react'

const Stock = (props) => {
 
  return(
    <div className="card" onClick={() => props.addStock ? props.addStock(props.stock) : props.removeStock(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{props.stock.ticker}: {
            props.stock.price
          }</p>
      </div>
    </div>
  )
}

export default Stock
