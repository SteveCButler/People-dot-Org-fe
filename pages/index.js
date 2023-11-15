import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { checkUser } from '../utils/auth';
import RegisterForm from '../components/RegisterForm';
import ModalComponent from '../components/ModalComponent';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdate = () => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  };

  console.warn('AuthUser: ', authUser.uid);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Hello {user.fbUser.displayName}! </h1>
        <p>Your Bio: {user.bio}</p>
        <p>Click the button below to logout!</p>
        <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
          Sign Out
        </Button>
      </div> */}

      { authUser?.uid === user.uid ? (
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          // style={{
          //   height: '90vh',
          //   padding: '30px',
          //   maxWidth: '1200px',
          //   margin: '0 auto',
          // }}
        >
          <Link passHref href="/userProfile">
            <Button variant="light" className="bg-transparent fs-2 border-0 ">Hello {user.fbUser.displayName}!</Button>
          </Link>
          <h2>STEVE</h2>
          {/* <p>Click the button below to logout!</p>
          <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
            Sign Out
          </Button> */}
        </div>
      ) : (<ModalComponent regForm={<RegisterForm user={user} onUpdate={onUpdate} />} formTitle="Registration" />)}
    </>

  );
}

export default Home;
