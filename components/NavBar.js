/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import logo from '../public/People_org_small.png';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="px-5 sticky-top shadow">
      {/* <Container> */}
      <div className="d-flex gap-3">
        <Image src={logo} width={50} height={50} />
        <Link passHref href="/">
          <Navbar.Brand className="fs-2 w-25 ">People.ORG</Navbar.Brand>
        </Link>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto w-50 d-flex justify-content-around">
          {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
          <Link passHref href="/">
            <Nav.Link>Home</Nav.Link>
          </Link>
          {/* <Link passHref href="/plans">
            <Nav.Link>Plans</Nav.Link>
          </Link> */}
          <Link passHref href="/people">
            <Nav.Link>People</Nav.Link>
          </Link>
          <Link passHref href="/teams">
            <Nav.Link>Teams</Nav.Link>
          </Link>
          <Link passHref href="/profile">
            <Nav.Link>Profile</Nav.Link>
          </Link>
        </Nav>
        <div className="d-flex justify-content-end">
          <Link passHref href="/">
            <Button className="btn-sm bg-secondary rounded-3 border-0 px-2" onClick={signOut}>Signout</Button>
          </Link>
        </div>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}
