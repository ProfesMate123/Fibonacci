import './Menu.css';
import { Link } from 'react-router-dom';
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Fibonacci Math School
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agenda">
                  Agenda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/historia">
                  Historia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profesores">
                  Profesores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/equipo">
                  Nuestro Equipo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
