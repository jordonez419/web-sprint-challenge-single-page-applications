import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

export default function Details(props) {

    const { pizzas } = props;

    const { id } = useParams();
    const pizza = pizzas.find(pizza => pizza.id == id) || {}

    console.log(pizza)

    const history = useHistory()
    const routeToHome = () => {
        history.push('/')
    }
    const routeToOrders = () => {
        history.push('/orders')
    }
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <img src="https://source.unsplash.com/collection/61730192/800x450" alt="" />
            <h1>Details for ID: {id}</h1>
            <p>Name:{pizza.name}</p>
            <p>Size:{pizza.size}</p>
            <p>Sauce:{pizza.sauce}</p>
            <a onClick={routeToHome}> Return Home</a>
            <a onClick={routeToOrders}> Return To Orders</a>
            <a onClick={routeToForm}> Return To Pizza Builder</a>
        </div>
    )
}