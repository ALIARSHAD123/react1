import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h3>webapp</h3>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <Link to="/product">Product</Link>
          {/* <a href="/">Home Page</a>
          <a href="/about">About Page</a>
          <a href="/contact">Contact Page</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
