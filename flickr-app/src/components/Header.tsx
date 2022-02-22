import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import SearchBox from './SearchBox'

const Header = () => {
  return (
      <header className="p-3 bg-dark text-white">
        <Container>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Navbar.Brand>
              Flickr app
            </Navbar.Brand>
            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            </div>
            <SearchBox/>
          </div>
        </Container>
      </header>
  )
}

export default Header