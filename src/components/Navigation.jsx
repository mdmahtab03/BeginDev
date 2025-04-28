import { MenuIcon } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="navbar sticky z-50 top-0 bg-white/30 backdrop-blur-md shadow-md">
      <div className="flex-1">
        <Link to='/' className="flex items-center " href="/">
          <img src={Logo} alt="logo" /><span className="text-primary text-4xl">BeginDev</span>
        </Link>{" "}
        {/* Your logo/brand */}
      </div>
      <div className="md:block flex-none text-primary hidden">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li> 
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/mentorship">Mentorship</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register" className=" border-1">
              Register
            </Link>
          </li>{" "}
          {/* Example of a primary button for emphasis */}
        </ul>
      </div>
      <button className="btn btn-circle  md:hidden bg-transparent outline-none"><MenuIcon className="text-primary"/></button>    
    </div>
  );
}
