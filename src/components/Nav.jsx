import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Nav(props) {
  return (
    <div>
      <div>{props.children}</div>
      <nav>
        <Navbar
          links={[
            <Link className="btn btn-xl btn-outline-dark mx-1 mt-4" key={1} to="/about">
              About
            </Link>,
            <Link className="btn btn-xl btn-outline-dark mx-1 mt-4" key={2} to="/portfolio">
              Portfolio
            </Link>,
            <Link className="btn btn-xl btn-outline-dark mx-1 mt-4" key={3} to="/contact">
              Contact
            </Link>,
            <Link className="btn btn-xl btn-outline-dark mx-1 mt-4" key={4} to="/resume">
              Resume
            </Link>,
          ]}
        />
      </nav>
    </div>
  );
}
