import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import './App.css';
import BurgerList from "./components/BurgerList";
import OrderHistory from "./components/OrderHistory";

function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
                <Route exact path="/">
                    <BurgerList/>
                </Route>
                <Route path="/orders">
                    <OrderHistory/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
