import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Nav(props) {
  return (
    <div>
      <div>{props.children}</div>
      <nav>
        <Navbar
          links={[
            <button><Link key={1} to="/about">
              About
            </Link></button>,
            <button><Link key={2} to="/portfolio">
              Portfolio
            </Link></button>,
            <button><Link key={3} to="/contact">
              Contact
            </Link></button>,
            <button><Link key={4} to="/resume">
              Resume
            </Link></button>,
          ]}
        />
      </nav>
    </div>
  );
}
