import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import LoginPage from '../loginForm/loginPage'
import Navbar from '../../components/navbar'
//import Navbar from 'containers/components/navbar'

const App = () => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/login" component={LoginPage} />
      
    </main>
  </div>
)

export default App;