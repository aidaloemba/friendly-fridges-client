import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Default.scss';

export default class Default extends Component {
    constructor(props) {
    super(props)
    this.state = { color: "#FFFFFF" }
    }

    render() {
        return (
            <div className="default"style={{ background: this.state.color }} id="body">
            <Navbar />
            {this.props.children}
            <Footer />
            </div>
        )
    }
}


