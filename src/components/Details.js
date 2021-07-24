import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

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
            <Container>
                <div>

                    <h3>{pizza.name}</h3>
                    <p>{pizza.size} Pizza</p>
                    {/* <p>Sauce: {sauce}</p> */}
                    <ul>
                        <Ingredients><h3>Ingredients</h3></Ingredients>
                        <List>
                            <li>{pizza.noTopping ? 'No Toppings!' : ''}</li>
                            <li>{pizza.topping1 ? 'Pepperoni' : ''}</li>
                            <li>{pizza.topping2 ? 'Anchovies' : ''}</li>
                            <li>{pizza.topping3 ? 'Mushrooms' : ''}</li>
                            <li>{pizza.topping4 ? 'Sausage' : ''}</li>
                            <li>{pizza.topping5 ? 'Spicy Italian Sausage' : ''}</li>
                            <li>{pizza.topping6 ? 'Grilled Chicken' : ''}</li>
                            <li>{pizza.topping7 ? 'Green Pepper' : ''}</li>
                            <li>{pizza.topping8 ? 'Diced Tomatoes' : ''}</li>
                            <li>{pizza.topping9 ? 'Pineapple' : ''}</li>
                            <li>{pizza.topping10 ? 'Canadian Bacon' : ''}</li>
                        </List>
                    </ul>
                    <p>{pizza.sauce}</p>
                    <p>{pizza.special ? `Special instructions: ${pizza.special}` : ''}</p>
                    <p>{pizza.gluten ? 'Gluten Free Crust!' : 'Plenty of delicious Gluten in that Crust'}</p>
                    <a onClick={routeToHome}> Return Home</a>
                    <a onClick={routeToOrders}> View All Orders</a>
                    <div>
                        <a onClick={routeToForm}> Return To Pizza Builder</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}
const Ingredients = styled.h3`
margin-right:2rem;
`

const List = styled.ul`
list-style-type:none;
margin-right:4rem;
`

const Container = styled.div`
background-color:#494449;
color: #ddeac1;
border-radius:10%;
text-align:center;
margin:13rem auto;
border:2px solid black;
width:20%;
`
