import React from 'react';
import { Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import LoginPage from '../components/loginPage'
import Navbar from '../components/navbar'
//import app from '../../server/login'

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