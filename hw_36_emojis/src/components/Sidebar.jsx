import { NavItem } from "./NavCenter.jsx";

export function Sidebar() {
    return (
        <div className="col-lg-3 d-none d-lg-block">
            <a className="my-btn btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical">
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav className="navbar-nav w-100 overflow-hidden collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0">
                <div className="my-sidebar navbar-nav w-100 overflow-hidden">
                    <NavItem link="#" value="Categorie 1" />
                    <NavItem link="#" value="Categorie 2" />
                    <NavItem link="#" value="Categorie 3" />
                    <NavItem link="#" value="Categorie 4" />
                    <NavItem link="#" value="Categorie 5" />
                    <NavItem link="#" value="Categorie 6" />
                    <NavItem link="#" value="Categorie 7" />
                    <NavItem link="#" value="Categorie 8" />
                    <NavItem link="#" value="Categorie 9" />
                    <NavItem link="#" value="Categorie 10" />
                </div>
            </nav>
        </div>
    );
}

