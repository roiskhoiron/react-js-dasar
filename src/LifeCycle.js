import React, { Component } from 'react'
import SubLifecycle from './SubLifecycle';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log("Construct Event");
  
    this.state = {
      makanan: 'Bakso',
      isTampil: false,

      data : {}
    }
  }
  
  componentDidMount() {
    console.log("Mounting Event")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then( json => {
        this.setState({
          data : json
        })
      })
  }

  componentDidUpdate() {
    console.log("Update Event")
  }

  componentWillUnmount() {
    console.log("UnMount Event")
  }
  
  render() {
    console.log("Render Event")
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {this.state.isTampil && <SubLifecycle setFood={(value) => this.setFood(value)}/>}
        
        <button onClick={() => this.setState({isTampil: !this.state.isTampil})}>Tampilkan Sub-Lifecycle</button>
      </div>
    )
  }

  setFood(value) {
    this.setState({
      makanan: value
    })
  }
}
