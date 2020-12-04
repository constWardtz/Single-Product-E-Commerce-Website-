import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
    ;
/* Components */ 
import HomePage from './pages/HomePage'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ HomePage }/>
                <Route exact path="/product" />
            </Switch>
        </Router>
    )
}

export default App