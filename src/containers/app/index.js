import React from 'react'
import { Route } from 'react-router-dom'
// import Home from 'containers/home'
// import About from 'containers/about'
import LoginPage from 'containers/loginForm/loginPage'
import ManagerList from 'containers/managerList'
import Navbar from 'components/navbar'

// <Route exact path="/" component={Home} />
// <Route exact path="/about-us" component={About} />

const App = () =>
    <div>
        <header>
            <Navbar />
        </header>

        <main>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/about-us" component={ManagerList} />
        </main>
    </div>

export default App
