import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Figure, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import './App.css';
import Profile from './assets/Profile.png';
import FB from './assets/facebook_icon.png';
import IG from './assets/IG_icon.png';
import GH from './assets/Gh_icon.png';
import Mail from './assets/Mail_icon.png';

function App() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="secondary" variant="dark" expand={expand} className="mb-3 bg-custom1">
          <Container>
            <Navbar.Brand href="#" className='fw-bold fst-italic'><span className='text-shadow'>Hugo R. García</span></Navbar.Brand>
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
                    <h2 className="justify-content-evenly d-flex py-2 mb-3 border-top border-light text-shadow">Hugo Rodrigo García Olmos</h2>
                    <Figure.Caption className='my-2'>
                      Ingeniero Civil, entusiasta de la programación y la tecnologa.
                    </Figure.Caption>
                  </Figure>
                  <Button href='#AcercaDe' className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold bg-gradient text-shadow-2">Acerca de mí</Button>
                  <Button href='#Cosas' className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold bg-gradient text-shadow-2">Qué puedo hacer</Button>
                  <Button href='#Logros' className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold bg-gradient text-shadow-2">Algunos logros</Button>
                  <Button href='' className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold bg-gradient text-shadow-2">Contacto</Button>
                </Nav>
                <ul className='justify-content-evenly d-flex my-4 bottom-sticky'>
                  <a href='#'><img src={Mail}  alt="Correo-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                  <a href='#'><img src={FB}  alt="Facebook-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                  <a href='#'><img src={IG}  alt="IG-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                  <a href='#'><img src={GH} alt="Github-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <main>
        <div className='container'>
          <h3 className='py-3 text-color-1 fw-bold text-shadow' id='AcercaDe'>Acerca de Mi</h3>
          <p className='pb-4 m-0'>Mi nombre es Hugo Rodrigo García Olmos, soy Ingeniero Civil y tambien un gran entusiasta de la tecnologia, me adentre al mundo de la programación con grandes esperanzas y con ganas de seguir conociendo sobre el tema.</p>
        </div>
      </main>
      <section className='bg-custom1'>
        <div className='container'>
          <h3 className='py-3 text-light text-shadow-2' id='Cosas'>Algunas Cosas que Puedo hacer</h3>
        <p className='pb-4 m-0 text-light'>Algunos de los conocimients que he aprendido en el camino de la programación. </p>
        </div>
      </section>
      <section className='container'>
        <h3 className='my-3 text-shadow' id='Logros'>Algunos Logros Personales</h3>
        <p className='my-4'>Estos son algunos de los proyectos que he podido completar a lo largo de mi tiempo despues de entrar en el mundo de la programación y espero puedan ser aún más. </p>
        <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className='text-shadow'>Landing Pages</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className='text-shadow'>Formato CRUD</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className='text-shadow'>Dashboard</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title className='text-shadow'>App-React</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </section>
      <footer>
      <div>
          <Container className="w-50 justify-content-center align-items-center">
              <div className="row justify-content-center align-items-center py-2">
                <div className="col-lg d-flex justify-content-center align-items-center">
                  <a href="#" className='m-4'> <img src={Mail}  alt="Correo-Icon" width="40" height="40" className="d-inline-block align-text-top" /></a>
                  <a href="#" className='m-4'> <img src={FB}  alt="Facebook-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                  <a href="#" className='m-4'> <img src={IG}  alt="IG-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                  <a href="#" className='m-4'> <img src={GH} alt="Github-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                </div>
                <div className="row text-center fw-semibold text-black justify-content-center align-items-center">
                  <p className='m-0'>© 2022 HugoRGO.</p>
                  <p>Portafolio de muestra educativo.</p>
                </div>
              </div>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default App;
