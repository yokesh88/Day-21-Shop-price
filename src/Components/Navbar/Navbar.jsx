function NavBar({ cartNo }) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a href="#" className="navbar-brand">
           Harvest Havens
          </a>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse show" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#shop"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="mt-lg-0 mt-sm-2">
            <button className="btn btn-outline-dark">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="ms-2">Cart</span>
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartNo}
              </span>
            </button>
          </form>
        </div>
      </nav>
    );
  }

  export default NavBar;