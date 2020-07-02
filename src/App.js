import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/user/Signup';
import Login from './pages/user/Login';
import Logout from './pages/user/Logout';
import Fridge from './pages/Fridge';
import Submit from './modals/Submit';

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: null
  //   }
  // }
  
  // componentDidMount() {
  //   axios.get(`${process.env.REACT_APP_BASE_URL}`)
  //     .then((response) => {
  //       this.setState({
  //       message: response.data.message
  //     })
  //   })
  // }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/fridge" component={Fridge} />
        <Route path="/submit" component={Submit} />
      </Router>
    )
  }
}
