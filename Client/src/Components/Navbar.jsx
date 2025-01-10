import { useAuth } from '../Store/Auth';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const { isLoggedIn, removeToken, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();  // Remove token and user data
    navigate("/Login");  // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#CB9DF0" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CooksCorner</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" style={{ color: "#6A1E55", fontWeight: "600" }}>Home</Link>
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link to='/Admin' className="nav-link" style={{ color: "#6A1E55", fontWeight: "600" }}>Admin</Link>
                </li>
                <li className="nav-item">
                  <a onClick={handleLogout} className="nav-link" style={{ color: "#6A1E55", fontWeight: "600" }}>Logout</a>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link to='/Login' className="nav-link" style={{ color: "#6A1E55", fontWeight: "600" }}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link to='/Register' className="nav-link" style={{ color: "#6A1E55", fontWeight: "600" }}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
