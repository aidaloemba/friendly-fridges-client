import React, { Component } from 'react';
import axios from 'axios';

export default class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    getSingleFood() {
        const { params } = this.props.match;
        axios.get(`${process.env.REACT_APP_API_BASE}/food/detail/${params.id}`)
            .then(response =>{
                const selectedFood = response.data;
                this.setState(selectedFood);
            })
            .catch(error => 
                this.setState({
                    error: error.response.data.message
                })
            )
    }

    componentDidMount() {
        this.getSingleFood();
    }
    render() {
        return (
            <div>
                <h1>food detail page</h1>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}
