import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import { signIn } from '../utils/auth';
import logo from '../public/People_org_small.png';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      {/* <h1>People.ORG</h1> */}
      <div className="w-50 mx-auto">
        <Image
          src={logo}
          alt="Logo"
        />
      </div>

      <Button type="button" size="lg" className="bg-secondary border-0 w-25 mx-auto mt-3" onClick={signIn}>
        Sign In / Register
      </Button>
    </div>
  );
}

export default Signin;
