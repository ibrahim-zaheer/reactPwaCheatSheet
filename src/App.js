import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import User from './User';
import About from './About';
// import Home from './Home'; // Assuming you have a Home component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/User">User</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Routes>  {/* Replaced Switch with Routes */}
            <Route exact path="/" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/User" element={<User />} />
            <Route path="/contact" element={() => <div>Contact Page</div>} /> {/* Replace with your Contact component */}
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
