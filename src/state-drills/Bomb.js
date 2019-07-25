import React, { Component } from 'react';

class Bomb extends Component {
  state = {
    count: 0
  };
  
  componentDidMount() {
    console.log('this is: ', this)
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
    //console.log('interval is: ', this.interval)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  renderDisplay() {
    const { count } = this.state
    //console.log(count);
    if(count >= 8) {
      return "BOOM!!!";
    } else if(count % 2 === 0) {
      return "tick";
    } else {
      return "tock"
    }
  }
  
  render() {
    return(
      <div>
        <p>{this.renderDisplay()}</p>
      </div>
    )
  }
}

export default Bomb;