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
            </Switch>
        </Router>
    )
}

export default App