import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Nav(props) {
  return (
    <div>
      <div>{props.children}</div>
      <nav>
        <Navbar
          links={[
            <Link key={1} to="/about">
              About
            </Link>,
            <Link key={2} to="/portfolio">
              Portfolio
            </Link>,
            <Link key={3} to="/contact">
              Contact
            </Link>,
            <Link key={4} to="/resume">
              Resume
            </Link>,
          ]}
        />
      </nav>
    </div>
  );
}
