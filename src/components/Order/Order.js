import React from 'react';

import classes from './Order.css';

const orders = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
                name: ingredientName, 
                amount: props.ingredients[ingredientName]
            }
        )
    }

    const ingredientOutout = ingredients.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize', 
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutout}</p>
            <p>Price: <strong>$ {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default orders;
