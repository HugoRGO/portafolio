import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Figure, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './App.css';
import Profile from './assets/Profile.jpg';

function App() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="secondary" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='fw-bold fst-italic'>Hugo R. García Olmos</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='text-bg-success'>
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
                    <Figure.Caption className='my-1'>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                  </Figure>
                  <h1 className="justify-content-evenly d-flex text-bg-success py-2 m-0 border-top border-light">Hugo García</h1>
                  <Nav.Link href="#action1" className="justify-content-evenly d-flex text-light text-bg-success py-2 border-top border-light">Home</Nav.Link>
                  <Nav.Link href="#action2" className="justify-content-evenly d-flex text-light text-bg-success py-2 border-top border-light">Link</Nav.Link>
                  <Nav.Link href="#action2" className="justify-content-evenly d-flex text-light text-bg-success py-2 border-top border-light">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default App;
