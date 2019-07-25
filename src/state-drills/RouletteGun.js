import React, { Component } from 'react';

class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  state = {
    chamber: null,
    spinningTheChamber: false
  }
  
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  
  handleSpin = () => {
    this.setState({ 
      spinningTheChamber: true, 
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      })
    }, 2000);
  }
    
  renderContent() {
    //console.log(bulletInChamber);
    if(this.state.spinningTheChamber) {
      console.log(this.state.spinningTheChamber);
      return 'spinning the chamber and pulling the trigger!...'
    } else if(this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!!!!'
    } else {
      return "you're safe!"
    }
  }
  
  render() {
    return(
      <div>
        <p>{this.renderContent()}</p>
        <button onClick={this.handleSpin}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;