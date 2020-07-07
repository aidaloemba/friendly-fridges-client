import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logout from './pages/user/Logout';
import Fridge from './pages/Fridge';
import Latest from './pages/Latest';
import Detail from './pages/food/Detail';
import Update from './modals/food/Update';

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
        <Route path="/logout" component={Logout} />
        <Route path="/latest" component={Latest} />
        <Route path="/fridge" component={Fridge} />
        <Route path="/food/detail" component={Detail} />
        <Route path="/food/update" component={Update} />
      </Router>
    )
  }
}
