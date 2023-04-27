export function NavCenter() {
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                    <NavItem link="#" value="Page 1" />
                    <NavItem link="#" value="Page 2" />
                    <NavItem link="#" value="Page 3" />
                    <NavItem link="#" value="Page 4" />
                </div>
                <div className="navbar-nav ml-auto py-0">
                    <NavItem link="#" value="Log in" />
                    <NavItem link="#" value="Register" />
                </div>
            </div>
        </nav>
    );
}

export function NavItem({ value, link }) {
    return (
        <a href={link} className="nav-item nav-link">{value}</a>
    )
}