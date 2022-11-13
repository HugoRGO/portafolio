import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Card, Col, Container, Figure, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import './App.css';
import Profile from './assets/Profile.png';
import FB from './assets/facebook_icon.png';
import IG from './assets/IG_icon.png';
import GH from './assets/Gh_icon.png';
import Mail from './assets/Mail_icon.png';
import P1 from './assets/P-1.png';
import P2 from './assets/P-2.png';
import P3 from './assets/P-3.png';
import P4 from './assets/P-4.png';
import HTMLI from './assets/HTML-icon.png';
import CSSI from './assets/CSS-icon.png';
import JSI from './assets/JS-icon.png';
import REACTI from './assets/REACT-icon.png';
import EXPI from './assets/EXP-icon.png';
import BOOTSI from './assets/BOOTS-icon.png';
import FIREI from './assets/FIRE-icon.png';
import MONGOI from './assets/MDB-icon.png';
import NODEI from './assets/NODE-icon.png';
import ATLASI from './assets/ATLAS-icon.png';
import GITI from './assets/GIT-icon.png';


function App() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="secondary" variant="dark" expand={expand} className="mb-3 bg-custom1 font-custome2">
          <Container>
            <Navbar.Brand href="#" className='fw-bold'><img alt="Icon" src={Profile} width="30" height="30" className="d-inline-block align-top"/>{' '}<span className='text-shadow ms-2'>Hugo R. García</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-expand`} />
            <Navbar.Offcanvas
              className=""
              id={`offcanvasNavbar-expand-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='bg-custom1'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-expand`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='p-0'>
                <Nav className="justify-content-evenly flex-grow-1">
                  <Figure className='text-center my-4'>
                    <Figure.Image
                      className='rounded-circle my-4'
                      width={180}
                      height={180}
                      alt="180x180"
                      src={Profile}
                    />
                    <h2 className="justify-content-evenly d-flex py-2 mb-4 mt-2 border-top border-light text-shadow font-custome3">Hugo Rodrigo García Olmos</h2>
                    <Figure.Caption className='my-2 fs-6 text-shadow text-dark font-custome2'>
                      Ingeniero Civil entusiasta de la programación y la tecnología.
                    </Figure.Caption>
                  </Figure>
                  <Button href='#AcercaDe' className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold bg-gradient text-shadow-2 dropdown-item">ACERCA DE MI</Button>
                  <Button href='#Cosas' className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold bg-gradient text-shadow-2 dropdown-item">QUE PUEDO HACER</Button>
                  <Button href='#Logros' className="justify-content-evenly d-flex text-light py-2 border-top border-light fw-bold bg-gradient text-shadow-2 dropdown-item">ALGUNOS LOGROS</Button>
                </Nav>
                <div className=''>
                  <br/>
                  <br/>
                  <ul className='justify-content-evenly d-flex my-0 py-4 bottom-sticky bg-custom1'>
                    <a href='#'><img src={Mail}  alt="Correo-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                    <a href='#'><img src={FB}  alt="Facebook-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                    <a href='#'><img src={IG}  alt="IG-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                    <a href='https://github.com/HugoRGO'><img src={GH} alt="Github-Icon" width="30" height="25" className="d-inline-block align-text-top" /></a>
                  </ul>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <main>
        <div className='container'>
          <h3 className='py-3 text-color-1 fw-bold text-shadow font-custome2' id='AcercaDe'>Acerca de Mi</h3>
          <p className='pb-4 m-0 fs-5 fw-bold'>Mi nombre es Hugo Rodrigo García Olmos, soy Ingeniero Civil y tambien un gran entusiasta de la tecnologia, me adentre al mundo de la programación con grandes esperanzas y con ganas de seguir conociendo sobre el tema.</p>
          <p className='pb-4 m-0 fs-5 fw-bold'>Actualmente sigo estudiando para tener más oportunidades y experiencia en el campo de la programación y expandir mi campo laboral y de conocimientos.</p>
        </div>
      </main>
      <section className='bg-custom1'>
        <div className='container'>
          <h3 className='py-3 text-light text-shadow-2 font-custome2' id='Cosas'>Algunas Cosas que Puedo hacer</h3>
          <p className='pb-4 m-0 text-light fs-5 fw-bold'>Algunos de los conocimientos que he aprendido en el camino de la programación. </p>
        </div>
        <div>
          <Container>
            <Row className='my-4'>
              <Col className='text-center'>
                <img src={HTMLI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
              <Col className='text-center'>
                <img src={CSSI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
              <Col className='text-center'>
                <img src={JSI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <Badge pill bg="secondary">HTML5</Badge>{' '}
              </Col>
              <Col className='text-center'>
                <Badge pill bg="secondary">CSS</Badge>{' '}
              </Col>
              <Col className='text-center'>
                <Badge pill bg="secondary">JavaScript</Badge>{' '}
              </Col>
            </Row>
            <Row className='my-4'>
              <Col className='text-center'>
                <img src={BOOTSI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
              <Col className='text-center'>
                <img src={REACTI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
              <Col className='text-center'>
                <img src={EXPI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <Badge pill bg="secondary">Bootstrap</Badge>{' '}
              </Col>
              <Col className='text-center'>
                <Badge pill bg="secondary">React</Badge>{' '}
              </Col>
              <Col className='text-center'>
                <Badge pill bg="secondary">Express.js</Badge>{' '}
              </Col>
            </Row>
            <Row className='my-4'>
              <Col className='text-center'>
                <img src={FIREI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
              <Col className='text-center'>
                <img src={NODEI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
              <Col className='text-center'>
                <img src={MONGOI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <Badge pill bg="secondary">Firebase</Badge>{' '}
              </Col>
              <Col className='text-center'>
                <Badge pill bg="secondary">Node.js</Badge>{' '}
              </Col>
              <Col className='text-center'>
                <Badge pill bg="secondary">MongoDB</Badge>{' '}
              </Col>
            </Row>
            <Row className='my-4'>
              <Col className='text-center'>
                <img src={GITI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
              <Col className='text-center'>
                <img src={ATLASI}  alt="Correo-Icon" width="100" height="100" className="d-inline-block align-text-top" />
              </Col>
            </Row>
            <Row>
              <Col className='text-center'>
                <Badge pill bg="secondary">Git</Badge>{' '}
              </Col>
              <Col className='text-center'>
                <Badge pill bg="secondary">MDB-Atlas</Badge>{' '}
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
      </section>
      <section className='container my-4'>
        <h3 className='my-3 text-shadow text-color-1 font-custome2' id='Logros'>Algunos Logros Personales</h3>
        <p className='my-4 fs-5 fw-bold'>Estos son algunos de los proyectos que he podido completar a lo largo de mi tiempo despues de entrar en el mundo de la programación y espero puedan ser aún más. </p>
        <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <div className="overlaythree text-center m-2">
                  <a href='https://hugorgo.github.io/Pagina-U/' className="pseudover v2" title="Live Demo"><img src={P1} className="card-img-top"  alt="Correo-Icon"/></a>
                </div>
                <Card.Body>
                  <Card.Title className='text-shadow font-custome2'>Landing Pages</Card.Title>
                  <Card.Text>
                    En este proyecto se intenta crear una Landing Page ficticia con fines educativos. El proyecto va dirigido a una empresa que se dedica a la venta y distribución de Laptops.
                    <br />
                    <a href='https://github.com/HugoRGO/Pagina-U'>Repo</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="overlaythree text-center m-2">
                  <a href='https://hugorgo.github.io/CRUD/' className="pseudover v2" title="Live Demo"><img src={P2} className="card-img-top"  alt="Correo-Icon"/></a>
                </div>
                <Card.Body>
                  <Card.Title className='text-shadow font-custome2'>Formato CRUD</Card.Title>
                  <Card.Text>
                    En este proyecto se intenta crear un formato CRUD: C - Create, R - Read, U - Update, D - Delete.
                    <br />
                    <br />
                    <a href='https://github.com/HugoRGO/CRUD'>Repo</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="overlaythree text-center m-2">
                  <a href='https://hugorgo.github.io/Dashboard-Peliculas/' className="pseudover v2" title="Live Demo"><img src={P3} className="card-img-top"  alt="Correo-Icon"/></a>
                </div>
                <Card.Body>
                  <Card.Title className='text-shadow font-custome2'>Dashboard</Card.Title>
                  <Card.Text>
                    En este proyecto se intenta crear un dashboard de peliculas populares por medio de conexión a una API.
                    <br />
                    <a href='https://github.com/HugoRGO/Dashboard-Peliculas'>Repo</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="overlaythree text-center m-2">
                  <a href='https://app-react-restaurante-hrgo.netlify.app/' className="pseudover v2" title="Live Demo"><img src={P4} className="card-img-top"  alt="Correo-Icon"/></a>
                </div>
                <Card.Body>
                  <Card.Title className='text-shadow font-custome2'>App-React</Card.Title>
                  <Card.Text>
                    En este proyecto se intenta crear una App utilizando React como framework y Firebase con uno de sus servicios como base de datos en tiempo real.
                    <br />
                    <a href='https://github.com/HugoRGO/app_proyecto_react'>Repo</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </section>
      <footer>
      <div className='bg-custom1'>
          <Container className="w-50 justify-content-center align-items-center font-custome3">
              <div className="row justify-content-center align-items-center py-2">
                <div className="col-lg d-flex justify-content-center align-items-center">
                  <a href="#" className='m-4'> <img src={Mail}  alt="Correo-Icon" width="40" height="40" className="d-inline-block align-text-top" /></a>
                  <a href="#" className='m-4'> <img src={FB}  alt="Facebook-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                  <a href="#" className='m-4'> <img src={IG}  alt="IG-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
                  <a href="https://github.com/HugoRGO" className='m-4'> <img src={GH} alt="Github-Icon" width="40" height="35" className="d-inline-block align-text-top" /></a>
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
