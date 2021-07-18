import React from 'react'

export default function Pizza(props) {
    const { name, size, special, topping1, topping2, topping3, topping4 } = props;
    return (
        <div>
            <h3>Customer: {name}</h3>
            <p>Size: {size}</p>
            <ul>
                <li>{topping1 ? 'Pepperoni' : 'No Pepperoni on this Za'}</li>
                <li>{topping2 ? 'Anchovies' : 'No Anchovies on this Za'}</li>
                <li>{topping3 ? 'Mushrooms' : 'No Mushrooms on this Za'}</li>
                <li>{topping4 ? 'Sausage' : 'No Sausage on this Za'}</li>
            </ul>
            <p>{special ? `Special instructions: ${special}` : 'No Special Instructions'}</p>
        </div>
    )
}