import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { useState } from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NavigationBar } from './navBar';
import { Home } from './home';
import { Datasets } from './datasets';
import { BenchResults } from './benchResult';
import { AllTables } from './table_data';
import { Software } from './software';
import { ContactsModal } from './contacts_modal';
import { Footer } from './footer';


function App() {
  // states to handle contacts modal  
  const [showContacts, setShowContacts] = useState(false);
  const handleClose = () => setShowContacts(false);
  const handleShow = () => setShowContacts(true);
  // data for the benchmark tables
  const data = new AllTables('./tables');

  return (
    <Router>
      <NavigationBar handleShowContacts={handleShow}/>
      
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
            <ContactsModal show={showContacts}
                  handleShow={handleShow}
                  handleClose={handleClose}/>
          </main>
        </div>        
      </div>
      <Footer handleShowContacts={handleShow}/>
    </Router>
  );
}

export default App;
