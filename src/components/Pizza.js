import React from 'react'
import styled from 'styled-components'

export default function Pizza(props) {
    const { name, size, special, topping1, topping2, topping3, topping4, topping5,
        topping6, topping7, topping8, topping9, topping10, sauce, gluten, noTopping } = props;
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
                        <Ingredients><p>Ingredients</p></Ingredients>
                        <List>
                            <li>{noTopping ? 'No Toppings!' : 'Check Out These Toppings!'}</li>
                            <li>{topping1 ? 'Pepperoni' : 'No Pepperoni on this Za'}</li>
                            <li>{topping2 ? 'Anchovies' : 'No Anchovies on this Za'}</li>
                            <li>{topping3 ? 'Mushrooms' : 'No Mushrooms on this Za'}</li>
                            <li>{topping4 ? 'Sausage' : 'No Sausage on this Za'}</li>
                            <li>{topping5 ? 'Spicy Italian Sausage' : 'No Spicy Sausage on this Za'}</li>
                            <li>{topping6 ? 'Grilled Chicken' : 'No Grilled Chicken on this Za'}</li>
                            <li>{topping7 ? 'Green Pepper' : 'No Green Peppers on this Za'}</li>
                            <li>{topping8 ? 'Diced Tomatoes' : 'No Diced Tomatoes on this Za'}</li>
                            <li>{topping9 ? 'Pineapple' : 'No Pineapple on this Za'}</li>
                            <li>{topping10 ? 'Canadian Bacon' : 'No Canadian Bacon on this Za'}</li>
                        </List>
                    </ul>
                    <p>{sauce}</p>
                    <p>{special ? `Special instructions: ${special}` : 'No Special Instructions'}</p>
                    <p>{gluten ? 'Gluten Free Crust!' : 'Plenty of delicious Gluten in that Crust'}</p>
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
const Ingredients = styled.p`
margin-right:2rem;
`
