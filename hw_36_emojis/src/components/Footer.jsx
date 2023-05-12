export function Footer() {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-md-4 mb-5">
          <a href="#" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border border-white px-3 mr-1">E</span>
              mojis
            </h1>
          </a>
        </div>
        <div className="col-md-4 mb-5">
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et
            magna ipsum dolore amet erat.
          </p>
        </div>
        <div className="col-md-4 mb-5">
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
          </p>
          <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
          </p>
        </div>
      </div>
    </div>
  );
}
