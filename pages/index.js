/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import Head from 'next/head';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { checkUser } from '../utils/auth';
import RegisterForm from '../components/RegisterForm';
import ModalComponent from '../components/ModalComponent';
import { useAuth } from '../utils/context/authContext';
import Admin from './admin';
import TeamLead from './teamLead';
import Volunteer from './volunteer';

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

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      { authUser?.uid === user.uid ? (
        <div className="text-center d-flex flex-column justify-content-center align-content-center">
          {authUser.isAdmin ? (<Admin />) : (authUser.isTeamLead ? (<TeamLead />) : <Volunteer />) }

        </div>
      ) : (<ModalComponent regForm={<RegisterForm user={user} onUpdate={onUpdate} />} formTitle="Registration" />)}
    </>

  );
}

export default Home;
