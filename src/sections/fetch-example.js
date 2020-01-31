import React, { Component } from 'react';

class FetchExample extends Component {
    state = {bpi:{}}

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json ')
            .then(resp => resp.json())
            .then(data => {
                const { bpi } = data;
                this.setState({ bpi: bpi }) 
            
            })
    }

    _renderCurrencies (){
        console.log(this.state.bpi)
        const { bpi } = this.state;
        const currencies = Object.keys(bpi);
        return currencies.map(currency => (
            <div key={currency}>
                1 BTC is {currency}
                <span> {bpi[currency].rate}</span>
            </div>
        ))
         
    }
    

    render(){
        return(
            <div>
                <h4>Bitcoin Price Index</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample;