import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

import { BrowserRouter as Router, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { Button, Navbar, Form, Col, Nav } from 'react-bootstrap';
import {NavigationBar} from './navBar';
import { Home } from './home';


function App() {
  return (
    <Router>
      <NavigationBar/>
      
      {/*<!-- Content of the page -->*/}
      <div className="container-fluid">
        <div className="row">
          <main className="col-sm-12 col-12 below-nav">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/datasets">
              </Route>
              <Route>
                <Redirect to="/" /> 
              </Route>
            </Switch>

            
          </main>
        </div>        
      </div>
      <Navbar bg="dark" variant="dark" style={{ bottom: 0, backgroundColor: '#343a40'}} className="footer">
        
        {/*<!-- Logo and title -->*/}
        <span className="navbar-brand">
            <NavLink to="/" style={{ color: '#FFF' }} className="App-logo">VPR Benchmark</NavLink>
        </span>
    
    </Navbar>
    </Router>
  );
}

export default App;
