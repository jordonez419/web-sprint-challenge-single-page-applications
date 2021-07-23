import React from 'react'
import Pizza from './Pizza'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function Pizzas(props) {
    const { pizzas } = props;
    const history = useHistory()
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (

        <div>
            <Headers>
                <h1>Orders</h1>
                <a onClick={routeToForm}> Return To Pizza Builder</a>
            </Headers>

            <Flex>
                {
                    pizzas.map(pizza => <Pizza key={pizza.id} name={pizza.name} size={pizza.size}
                        special={pizza.special} topping1={pizza.topping1} topping2={pizza.topping2}
                        topping3={pizza.topping3} topping4={pizza.topping4} topping5={pizza.topping5}
                        topping6={pizza.topping6} topping7={pizza.topping7} topping8={pizza.topping8}
                        topping9={pizza.topping9} topping10={pizza.topping10} sauce={pizza.sauce} gluten={pizza.gluten} noTopping={pizza.noTopping}
                    />)
                }
            </Flex>
        </div>
    )

}

const Headers = styled.div`
border:2px solid black;
border-radius:20px;
background-color:#494449;
width:30%;
text-align:center;
font-size:1.3rem;
margin:0 auto;
margin-top:5rem;
`
const Flex = styled.div`
display:flex;
flex-direction:row;
flex-wrap:nowrap;
margin-top:1rem;
`