import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

import { BrowserRouter as Router, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { Button, Navbar, Form, Col, Nav } from 'react-bootstrap';
import { NavigationBar } from './navBar';
import { Home } from './home';
import { Datasets } from './datasets';
import { BenchResults } from './benchResult';
import { AllTables } from './result';
import { Software } from './software';


function App() {
  const data = new AllTables('./tables');

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
                <Datasets/>
              </Route>
              <Route exact path="/results">
                <BenchResults data={data}/>
              </Route>
              <Route exact path='/software'>
                <Software/>
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
