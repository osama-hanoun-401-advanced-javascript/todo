import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Header = props => {
    return (
        <header>
            <nav>
                <NavLink to="/" activeClassName="list-class"><Button>Home</Button></NavLink>
                <NavLink to="/settings" activeClassName="list-class"><Button>Settings</Button></NavLink>
            </nav>
        </header>
    )
}

export default Header;