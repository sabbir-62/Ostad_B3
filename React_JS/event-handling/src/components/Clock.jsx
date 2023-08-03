import React from 'react';


class Clock extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {date: new Date()}
  // }

  state = {date: new Date()}

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount(){
    this.clockTimer = setInterval(() =>{this.tick()}, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }


  render(){
    return(
      <h1>
        <span>{this.state.date.toLocaleTimeString("bn-BD")}</span>
      </h1>
    )
  }
}


export default Clock;