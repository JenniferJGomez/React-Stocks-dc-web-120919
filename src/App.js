import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  addToPortfolio = (stock) => {
    let newPortfolio = [...this.state.portfolio, stock]
    this.setState({portfolio: newPortfolio})
  }

  removeFromPortfolio = (stock) => {
    console.log(stock)
    this.setState({
      portfolio: this.state.portfolio.filter(s => s !== stock) 
    })
  }


  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
          stocksArray = {this.state.stocks}
          addStock = {this.addToPortfolio}
          removeStock = {this.removeFromPortfolio}
          portfolio = {this.state.portfolio}
        />
      </div>
    );
  }
}

export default App;
