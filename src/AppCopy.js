import React, { Component } from 'react';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null
    }
  }
  
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BASE_URL}`)
      .then((response) => {
        this.setState({
        message: response.data.message
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.message ?
            <h1>{this.state.message}</h1> :
            <h1>Loading...</h1>
        }
      </div>
    )
  }
}
