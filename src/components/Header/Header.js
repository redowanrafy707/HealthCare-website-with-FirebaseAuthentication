import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { user, logOut } = UseAuth()
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container> 
                {/* <img src="/gggsew.jpg" alt="" width="50px" /> */}
                    <Navbar.Brand as={Link} to="/">Commonal Hospital BD</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/equipment">Equipments</Nav.Link>
                        <Nav.Link as={Link} to="/about"> About</Nav.Link>
                        {
                            user.email ? <div><img src={user.photoURL} className="rounded-circle" width="50px" alt="" />  <Button onClick={logOut} className="text-white">Log Out</Button></div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;