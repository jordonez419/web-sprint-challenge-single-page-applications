import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'
import Pizzas from './components/Pizzas'
import styled from 'styled-components'

const App = () => {
  const [pizzas, setPizzas] = useState([])

  return (
    <div>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form setPizzas={setPizzas} pizzas={pizzas} />
      </Route>

      <Route path='/orders'>
        <Pizzas pizzas={pizzas} />
      </Route>

    </div>
  );
};
export default App;
