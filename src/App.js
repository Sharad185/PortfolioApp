import React from 'react';

import './App.css';

import { BrowserRouter,Route,Switch} from "react-router-dom";
import Login from './Components/Login'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
function App() {

 return (

  <BrowserRouter>

<div>

<Switch> 
<Route path='/' exact component={Home}></Route>
<Route path='/Login' component={Login}></Route>
<Route path='/Dashboard' component={Dashboard}></Route>
</Switch>
</div>
</BrowserRouter>

  );
}

export default App;
