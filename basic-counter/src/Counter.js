import React, { Component } from 'react';

export default class Counter extends Component {

  state = {
    count:0
  }

  Increment = () => {

    this.setState({count : this.state.count +1})
    this.setState({count : this.state.count +1})

  }
  decrement = () => {
    this.setState( state => ({count : state.count -1}))
    this.setState( state => ({count : state.count -1}))
  }
  reset = () => {
    this.setState({count : 0})
  }

  render (){

    return (
      <section className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.Increment} className="full-width">Increment</button>
        <button onClick={this.decrement} className="full-width">Decrement</button>
        <button onClick={this.reset} className="full-width">Reset</button>
      </section>
    );
  }
}
