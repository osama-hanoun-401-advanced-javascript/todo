import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


const Header = props => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="mr-auto" >
                    <NavLink to="/todo" activeClassName="list-class">TODO</NavLink></Navbar.Brand>
                <NavLink to="/todo" activeClassName="list-class"><Button>Home</Button></NavLink>
                <NavLink to="/settings" activeClassName="list-class"><Button>Settings</Button></NavLink>
            </Navbar>
        </header>
    )
}

export default Header;