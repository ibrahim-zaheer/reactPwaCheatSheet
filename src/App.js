import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import User from './User';
import About from './About';
// import Home from './Home'; // Assuming you have a Home component
import './App.css';
import { messaging } from './firebase';
import { getToken, onMessage } from 'firebase/messaging';

function App() {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const currentToken = await getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY_HERE' });
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any action with the token here
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      } catch (err) {
        console.log('An error occurred while retrieving token. ', err);
      }
    };

    requestPermission();

    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Show notification or update UI here
    });
  }, []);

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
          <Routes>
            <Route exact path="/" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/User" element={<User />} />
            <Route path="/contact" element={<div>Contact Page</div>} /> {/* Replace with your Contact component */}
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
