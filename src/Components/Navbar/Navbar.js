import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";

export const HeadNav = () => {
  return (
    <div className="stick">
      <Navbar bg="success" varient="danger">
        <Container>
          <Link to="/">
            <FaHome className="text-white" />
          </Link>
          <NavLink
            className="link"
            activeClassName="selected"
            exaxt
            to="/"
          ></NavLink>
          <Nav className="ms-auto">
            <NavLink activeClassName="active" className="link" to="/Home">
              Home
            </NavLink>
            <NavLink activeClassName="active" className="link" to="/Posts">
              Posts
            </NavLink>
            <NavLink activeClassName="active" className="link" to="/About">
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

// import React from "react";
// import "./Navbar.css";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// export const HeadNav = () => {
//   return (
//     <div>
//       <Navbar bg="success" variant="light">
//         <Container>
//           <Nav className="ms-auto">
//             <NavLink activeClassName="active" className="link" to="/home">
//               Home
//             </NavLink>
//             <NavLink activeClassName="active" className="link" to="/posts">
//               Posts
//             </NavLink>
//             <NavLink activeClassName="active" className="link" to="/about">
//               About
//             </NavLink>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };
