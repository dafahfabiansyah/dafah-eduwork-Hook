import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import SearchBar from './SearchBar';

const NavScrollExample = () => {
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };

  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid="md">
        <Navbar.Brand href="#">React app news</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
          <SearchBar onSearch={handleSearch} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
