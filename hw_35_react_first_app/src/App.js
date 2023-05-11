import './css/style.css';
import './css/mystyle.css';

import pic1 from './img/carousel-1.jpg';
import pic2 from './img/carousel-2.jpg';

const pics = [pic1, pic2];

export default function App() {
  return (
    <div className="container-fluid row border-top px-xl-5">
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="col-lg-3 d-none d-lg-block">
      <a className="my-btn btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical">
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav className="navbar-nav w-100 overflow-hidden collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0">
        <div className="my-sidebar navbar-nav w-100 overflow-hidden">
          <NavItem link="#" value="Dresses" />
          <NavItem link="#" value="Shirts" />
          <NavItem link="#" value="Jeans" />
          <NavItem link="#" value="Swimwear" />
          <NavItem link="#" value="Sleepwear" />
          <NavItem link="#" value="Sportswear" />
          <NavItem link="#" value="Jumpsuits" />
          <NavItem link="#" value="Blazers" />
          <NavItem link="#" value="Jackets" />
          <NavItem link="#" value="Shoes" />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ value, link }) {
  return (
    <a href={link} className="nav-item nav-link">{value}</a>
  )
}

function Main() {
  return (
    <div className="col-lg-9">
      <NavCenter/>
      <Carousel pictures={pics}/>
    </div>
  );
}

function NavCenter() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div className="navbar-nav mr-auto py-0">
          <NavItem link="#" value="Home" />
          <NavItem link="#" value="Shop" />
          <NavItem link="#" value="Shop Detail" />
          <NavItem link="#" value="Contact" />
        </div>
        <div className="navbar-nav ml-auto py-0">
          <NavItem link="#" value="Log in" />
          <NavItem link="#" value="Register" />
        </div>
      </div>
    </nav>
  );
}

function Carousel({pictures}) {
  return (
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="my-carousel carousel-item active">
          <img className="img-fluid" src={pictures[0]} alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3 my-title">
              <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
              <a href="#" className="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="my-carousel carousel-item">
          <img className="img-fluid" src={pictures[1]} alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3 my-title">
              <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
              <a href="#" className="btn btn-light py-2 px-3">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
        <div className="my-car-btn btn btn-dark">
          <span className="carousel-control-prev-icon mb-n2"></span>
        </div>
      </a>
      <a className="carousel-control-next" href="#header-carousel" data-slide="next">
        <div className="my-car-btn btn btn-dark">
          <span className="carousel-control-next-icon mb-n2"></span>
        </div>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-md-4 mb-5">
          <a href="#" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold"><span
              className="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Shopper</h1>
          </a>
        </div>
        <div className="col-md-4 mb-5">
          <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore
            amet
            erat.
          </p>
        </div>
        <div className="col-md-4 mb-5">
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
        </div>
      </div>
    </div>
  );
}

