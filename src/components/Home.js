import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


export default function Home(props) {
    const history = useHistory()
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <div>
                <Container>
                    <h1>Welcome to Lambda Eats!</h1>
                    <button id='order-pizza' onClick={routeToForm}>Order Pizza</button>
                </Container>
            </div>
        </div>
    )
}

const Container = styled.div`
margin:15rem auto;
text-align:center;
border:2px solid black;
border-radius:15px;
background-color:#494449;
width:25%
`