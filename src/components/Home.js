import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home(props) {
    const history = useHistory()
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <h1>Welcome to Lambda Eats!</h1>
            <button id='order-pizza' onClick={routeToForm}>Order Pizza</button>
        </div>
    )
}