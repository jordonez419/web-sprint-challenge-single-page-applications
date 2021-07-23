import React from 'react'
import styled from 'styled-components'
import { useHistory, useParams, Route, useRouteMatch } from 'react-router-dom'

export default function Pizza(props) {
    const match = useRouteMatch();
    const { id } = props;

    const history = useHistory()
    const routeToDetails = () => {
        history.push(`${match.url}/${id}`)
    }

    const { name, size, special, topping1, topping2, topping3, topping4, topping5,
        topping6, topping7, topping8, topping9, topping10, sauce, gluten, noTopping, key } = props;


    return (
        <div>
            <Container>
                <div>

                </div>


                <div>
                    <h2>Arriving Soon</h2>
                    <h3>{name}</h3>
                    <p>{size} Pizza</p>
                    {/* <p>Sauce: {sauce}</p> */}
                    <ul>
                        <Ingredients><h3>Ingredients</h3></Ingredients>
                        <List>
                            <li>{noTopping ? 'No Toppings!' : ''}</li>
                            <li>{topping1 ? 'Pepperoni' : ''}</li>
                            <li>{topping2 ? 'Anchovies' : ''}</li>
                            <li>{topping3 ? 'Mushrooms' : ''}</li>
                            <li>{topping4 ? 'Sausage' : ''}</li>
                            <li>{topping5 ? 'Spicy Italian Sausage' : ''}</li>
                            <li>{topping6 ? 'Grilled Chicken' : ''}</li>
                            <li>{topping7 ? 'Green Pepper' : ''}</li>
                            <li>{topping8 ? 'Diced Tomatoes' : ''}</li>
                            <li>{topping9 ? 'Pineapple' : ''}</li>
                            <li>{topping10 ? 'Canadian Bacon' : ''}</li>
                        </List>
                    </ul>
                    <p>{sauce}</p>
                    <p>{special ? `Special instructions: ${special}` : ''}</p>
                    <p>{gluten ? 'Gluten Free Crust!' : 'Plenty of delicious Gluten in that Crust'}</p>
                    <a onClick={routeToDetails}>Details</a>
                </div>
            </Container>

        </div>
    )
}

const Container = styled.div`
background-color:#494449;
color: #ddeac1;
border-radius:10%;
text-align:center;
margin-left:2rem;
border:2px solid black;
width:25rem;
margin-bottom:2rem;
`
const List = styled.ul`
list-style-type:none;
margin-right:4rem;
`
const Ingredients = styled.h3`
margin-right:2rem;
`
