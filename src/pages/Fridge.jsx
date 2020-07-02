import React, { Component } from 'react';
import NavbarRegular from '../components/NavbarRegular';
import FoodThumbnail from '../components/FoodThumbnail';
import Submit from '../modals/Submit';

export default class Fridge extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    render() {
        return (
            <div>
                <NavbarRegular />
                {
                    this.state.foodBox.map((food, index) => 
                    <FoodThumbnail
                        index={`${index}-${food.name}`}
                        photo={food.photo}
                        name={food.name}
                        category={food.category}
                    />
                    )
                }
            </div>
        )
    }
}
