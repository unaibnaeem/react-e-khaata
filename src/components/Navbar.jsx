import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          REACT E-KHAATA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/records">
                Records List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/records/funds">
                Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/records/expenses">
                Expense
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
