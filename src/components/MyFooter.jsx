import { Link } from "react-router-dom";
import "../App.css"

function MyFooter() {
  return (
    <footer className="footer-style">
      <div className="footer-container">
        <p>© 2025 <a className="link-repo" href="https://github.com/mariajs99/Exposphere.git">Exposphere</a></p>
        <Link  className="link-aboutus" to="/aboutus">
         About Us
        </Link>
      </div>
    </footer>
  );
}

export default MyFooter;
