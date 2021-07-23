import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
// import Pizzas from './Pizzas'
import * as yup from "yup";
import styled from 'styled-components'
import '../styles/App.css'



export default function Form(props) {
    const { setPizzas, pizzas } = props;

    // Defining Validation Schema

    let schema = yup.object().shape({
        name: yup.string().required('name must be at least 2 characters').min(2, 'name must be at least 2 characters'),
        size: yup.string().required('Pizza size is required'),
        topping1: yup.boolean(),
        topping2: yup.boolean(),
        topping3: yup.boolean(),
        topping4: yup.boolean(),
        topping5: yup.boolean(),
        topping6: yup.boolean(),
        topping7: yup.boolean(),
        topping8: yup.boolean(),
        topping9: yup.boolean(),
        topping10: yup.boolean(),
        // noTopping: yup.boolean(),
        gluten: yup.boolean(),
        sauce: yup.string(),
        special: yup.string()
    })

    // Defining intial state of Form data and Errors

    const initialFormData = {
        name: '',
        size: '',
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        topping5: false,
        topping6: false,
        topping7: false,
        topping8: false,
        topping9: false,
        topping10: false,
        // noTopping: false,
        sauce: 'Original Red',
        gluten: false,
        special: ''
    }

    const defaultErrors = {
        name: '',
        size: ''
    }

    // Declaring our slices of state
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState(defaultErrors)
    const [buttonDisable, setButtonDisable] = useState(true)

    //Keep our submit button disabled until form validations pass. 
    useEffect(() => {
        schema.isValid(formData).then(valid => setButtonDisable(!valid))
    }, [formData])



    // Function to navigate back to home page
    const history = useHistory()
    const routeHome = () => {
        history.push('/')
    }
    const routeToOrders = () => {
        history.push('/orders')
    }

    // Helper function to validate schema
    const setValidationErrors = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };

    // Handle change function, determines wehter an input is of type checkbox or not.
    // Updates and links our state to current changes being inputted, passes values into errors functions
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const trueValue = type === 'checkbox' ? checked : value;
        setValidationErrors(name, trueValue)
        setFormData({
            ...formData, [name]: trueValue
        })
    }

    const handleRadio = e => {
        const { value } = e.target;
        setFormData({
            ...formData, sauce: value
        })

    }

    // Handle submit function, prevents page reload on submit
    // Declares a new Pizza based on the current state of the data
    // Passes that data to the API as a POST request
    // Uses POST response to set the pizza state, clears form inputs
    const handleSubmit = (e) => {
        e.preventDefault()
        const newPizza = {
            name: formData.name.trim(),
            size: formData.size,
            topping1: formData.topping1,
            topping2: formData.topping2,
            topping3: formData.topping3,
            topping4: formData.topping4,
            topping5: formData.topping5,
            topping6: formData.topping6,
            topping7: formData.topping7,
            topping8: formData.topping8,
            topping9: formData.topping9,
            topping10: formData.topping10,
            // noTopping: formData.noTopping,
            sauce: formData.sauce,
            gluten: formData.gluten,
            special: formData.special
        }
        axios.post(`https://reqres.in/api/orders`, newPizza)
            .then(res => setPizzas([...pizzas, res.data]))
        setFormData(initialFormData)
        history.push('/orders')
    }



    return (
        <div>
            <Nav>

                <div>
                    <p>Lambda Eats</p>
                </div>
                <div>
                    <NavLink><a onClick={routeHome}>Home</a></NavLink>
                    <NavLink><a onClick={routeHome}>Help</a></NavLink>
                </div>

            </Nav>


            <form id='pizza-form' onSubmit={handleSubmit}>
                <h2>Build Your Own Pizza</h2>
                <img src='https://source.unsplash.com/MQUqbmszGGM/500x400' alt='N/A' />
                <Choice>

                    <h3>Name For Order</h3>
                    <p>Required</p>


                </Choice>

                <label>
                    <input type="text" name='name' id='name-input' onChange={handleChange} value={formData.name} placeholder='Enter Name' />
                </label>
                <div style={{ color: "red" }}>
                    <div>
                        {errors.name}</div>
                </div>
                <Choice>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </Choice>

                <label >

                    <select id='size-dropdown' name='size' onChange={handleChange} value={formData.size} >
                        <option value="">-- Choose Size --</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                <div style={{ color: "red" }}>
                    <div>{errors.size}</div>
                </div>
                <Choice>
                    <h3>Choice of Sauce</h3>
                </Choice>
                <label>Original Red
                    <input onChange={handleRadio} type="radio" name='sauce' value='Original Red' id='Original Red' />
                </label>
                <label>Garlic Ranch
                    <input onChange={handleRadio} type="radio" name='sauce' id='Garlic Ranch' value='Garlic Ranch' />
                </label>
                <label>BBQ Sauce
                    <input onChange={handleRadio} type="radio" name='sauce' id='BBQ Sauce' value='BBQ Sauce' />
                </label>
                <label>Spinach Alfredo
                    <input onChange={handleRadio} type="radio" name='sauce' id='Spinach Alfredo' value='Spinach Alfredo' />
                </label>

                <Choice>
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                </Choice>

                <Toppings>

                    <label > Pepperoni
                        <input type="checkbox" name='topping1' onChange={handleChange} value={formData.topping1} />
                    </label>
                    <label > Anchovies
                        <input type="checkbox" name='topping2' onChange={handleChange} value={formData.topping2} />
                    </label>
                    <label > Mushrooms
                        <input type="checkbox" name='topping3' onChange={handleChange} value={formData.topping3} />
                    </label>
                    <label > Sausage
                        <input type="checkbox" name='topping4' onChange={handleChange} value={formData.topping4} />
                    </label>
                    <label > Spicy Italian Sausage
                        <input type="checkbox" name='topping5' onChange={handleChange} value={formData.topping5} />
                    </label>

                    <label > Grilled Chicken
                        <input type="checkbox" name='topping6' onChange={handleChange} value={formData.topping6} />
                    </label>
                    <label > Green Pepper
                        <input type="checkbox" name='topping7' onChange={handleChange} value={formData.topping7} />
                    </label>
                    <label > Diced Tomatoes
                        <input type="checkbox" name='topping8' onChange={handleChange} value={formData.topping8} />
                    </label>
                    <label > Pineapple
                        <input type="checkbox" name='topping9' onChange={handleChange} value={formData.topping9} />
                    </label>
                    <label > Canadian Bacon
                        <input type="checkbox" name='topping10' onChange={handleChange} value={formData.topping10} />
                    </label>
                </Toppings>

                <Choice>
                    <h3>Choice of Substitute</h3>
                </Choice>
                <p>Gluten Free Crust (+ $1.00)</p>
                <label className="switch">
                    <input type="checkbox" onChange={handleChange} name='gluten' value={formData.gluten} />
                    <span class="slider  "></span>
                </label>

                <Choice>
                    <h3>Special Instructions</h3>
                </Choice>
                <label >
                    <input id='special-text' type="text" name='special' onChange={handleChange} value={formData.special} placeholder="Anything else?" />
                </label>
                <div>
                    <button name='submit' disabled={buttonDisable} id='order-button'> Add Order</button>
                </div>
                <div>
                    <a onClick={routeToOrders}> Previous Orders</a>
                </div>
            </form>

            <div>
                {/* <button onclick={routeToOrders}> Previous Orders</button> */}
            </div>

        </div>

    )
}

const Flex = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:space-between;
`

const PizzaCard = styled.div`
margin-left:2rem;
`

const Nav = styled.h1`
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            margin-left:2rem;
            `
const FormContainer = styled.form`
            margin: 0 40rem;
            border:2px solid black;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            `
const Choice = styled.div`
            text-align:center;
            margin-top:1rem;
            margin-bottom:1rem;
            width:38.7rem;;
            background-color: #8e9189;
            `

const Toppings = styled.div`
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:space-between;
            `
const NavLink = styled.a`
            text-decoration:none;
            color:red;

            `