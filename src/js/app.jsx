import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '15',
      output:'0.00'
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    var change = {}

    change[evt.target.name] = evt.target.value
    this.setState(change)
  }


  calculate() {
    //monthly payment
    var p = this.state.balance; //principle
    var i = this.state.rate / 100 / 12; //interest rate divide by 100 for interest rate
    var n = this.state.term * 12; //number of payment months
    this.state.output = (p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)).toFixed(2);
    // m = (p * i) / (1 - (Math.pow((1 + i) , i * -1)));
//console.log(this.state.output.toFixed(2))
  }





  // your Javascript goes here
  render() {
    return (

      <div className='container'>
        {}

        <form className="form-horizontal" onClick={this.handleChange}>
          <h1>Mortgage Calculator</h1>
          <div className="form-group">
            <label htmlFor="mortgageLoan" className="col-sm-2 control-label">Loan Balance</label>
            <div className="col-sm-10">
              <input type="number" ref="num2" value={this.state.balance} onChange={this.handleChange} name="balance" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="terms" className="col-sm-2 control-label">Interest Rate</label>
            <div className="col-sm-10">
              <input type="number" ref="num2" name="rate" value={this.state.rate} onChange={this.handleChange} step="0.01" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="monthlyPayment">
                <label>Loan Term (years) </label>
                <div>
                  <select name="term" value={this.state.term} onChange={this.handleChange}>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button name="submit" type="submit"onClick={this.calculate}>Calculate</button>
            </div>
          </div>
          <div id="output" name="output" onChange={this.handleChange}>
          ${this.state.output} is your payment.

          </div>
        </form>

      </div>
    );
  }
}


