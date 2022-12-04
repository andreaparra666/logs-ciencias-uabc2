import { useState } from 'react';
import { Collapse, Navbar, NavbarBrand } from 'reactstrap';

// import DropdownList from './DropdownList';
// import NavBarForm from './NavbarForm';

const brandStyle = { color: '#ffffff' };

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand style={brandStyle}>Ubicacion Logs</NavbarBrand>
      {/* <NavbarToggler onClick={toggleNavbar} /> */}
      {/* <Collapse isOpen={isOpen} navbar> */}
        {/* <Nav className="ml-auto" navbar> */}
          {/* <DropdownList /> */}
          {/* <NavBarForm /> */}
        {/* </Nav> */}
      {/* </Collapse> */}
    </Navbar>
  );
}
