import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Figure, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './App.css';
import Profile from './assets/Profile.png';

function App() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="secondary" variant="dark" expand={expand} className="mb-3 bg-custom1">
          <Container fluid>
            <Navbar.Brand href="#" className='fw-bold fst-italic'>Hugo R. García</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className=""
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='bg-custom1'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='px-0'>
                <Nav className="justify-content-evenly flex-grow-1">
                  <Figure className='text-center'>
                    <Figure.Image
                      className='rounded-circle my-4'
                      width={180}
                      height={180}
                      alt="171x180"
                      src={Profile}
                    />
                    <h2 className="justify-content-evenly d-flex py-2 mb-3 border-top border-light">Hugo Rodrigo García Olmos</h2>
                    <Figure.Caption className='my-2'>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                  </Figure>
                  <Button className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold">Acerca de mí</Button>
                  <Button className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold">Qué puedo hacer</Button>
                  <Button className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold">Algunos logros</Button>
                  <Button className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold">Contacto</Button>
                </Nav>
                <ul className='justify-content-evenly d-flex my-4 bottom-sticky'>
                  <li><a href='#'>a</a></li>
                  <li><a href='#'>a</a></li>
                  <li><a href='#'>a</a></li>
                  <li><a href='#'>a</a></li>
                </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default App;
