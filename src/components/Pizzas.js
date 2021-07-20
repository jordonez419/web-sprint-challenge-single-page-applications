import React from 'react'
import Pizza from './Pizza'
import { useHistory } from 'react-router-dom'

export default function Pizzas(props) {
    const { pizzas } = props;
    const history = useHistory()
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (

        <div>
            <h1>Orders</h1>

            {
                pizzas.map(pizza => <Pizza key={pizza.id} name={pizza.name} size={pizza.size}
                    special={pizza.special} topping1={pizza.topping1} topping2={pizza.topping2}
                    topping3={pizza.topping3} topping4={pizza.topping4} topping5={pizza.topping5}
                    topping6={pizza.topping6} topping7={pizza.topping7} topping8={pizza.topping8}
                    topping9={pizza.topping9} topping10={pizza.topping10} sauce={pizza.sauce} gluten={pizza.gluten}
                />)
            }
            <a onClick={routeToForm}> Return To Pizza Builder</a>
        </div>
    )

}