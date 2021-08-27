import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import benchlogo from './imgs/benchlogo.png';


function NavigationBar(props) {
    return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
        
        {/*<!-- Logo and title -->*/}
        <span className="navbar-brand">
            <img src={benchlogo} className="App-logo" alt="logo" />
            <NavLink to="/" style={{ color: '#FFF' }} className="App-logo">VG Benchmark</NavLink>
        </span>
        <Navbar.Collapse>
            <Nav className="mr-auto">
                <NavLink to="/" style={{ color: '#FFF' }} className="pl-10 mr-2">Home</NavLink>
                <NavLink to="/datasets" style={{ color: '#FFF' }} className="mx-2">Datasets</NavLink>
                <NavLink to="/results" style={{ color: '#FFF' }} className="mx-2">Benchmark</NavLink>
                <NavLink to="/software" style={{ color: '#FFF' }} className="mx-2">Our Software</NavLink>
                <NavLink to="#" onClick={ev => {
                    ev.preventDefault();
                    props.handleShowContacts();
                }} style={{ color: '#FFF' }} className="mx-2">Contact us</NavLink>
            </Nav>
        </Navbar.Collapse>
    
    </Navbar>);

}

export { NavigationBar };