import React from 'react'
import Pizza from './Pizza'

export default function Pizzas(props) {
    const { pizzas } = props;

    return (
        <div>
            <h1>Pizza History: </h1>
            {
                pizzas.map(pizza => <Pizza key={pizza.id} name={pizza.name} size={pizza.size}
                    special={pizza.special} topping1={pizza.topping1} topping2={pizza.topping2}
                    topping3={pizza.topping3} topping4={pizza.topping4}
                />)
            }
        </div>
    )

}