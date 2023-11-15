import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { deletePerson, getPersonById } from '../api/peopleData';

export default function Profile() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState({});
  const fullName = `${authUser?.firstName} ${authUser?.lastName}`;

  useEffect(() => {
    getPersonById(user.id).then((data) => setAuthUser(data));
  }, []);

  const deleteAPerson = () => {
    if (window.confirm(`Do you want to delete ${fullName}?`)) {
      deletePerson(authUser.id).then(() => signOut());
    }
  };

  return (
    <>
      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-column my-5">
          <Image className="rounded-circle mx-auto" src={user?.fbUser?.photoURL} width="100" height="100" />
          <h1 className="mt-5 text-center">{fullName}</h1>
          <div className="mx-auto fs-5 d-flex justify-content-center">
            <p className="pt-1 ms-5 ">{authUser.phone}</p>
            <FontAwesomeIcon icon={faCircle} className=" fa-2xs px-5 pt-3" />
            <p className="pt-1">{authUser.email}</p>
          </div>
        </div>
      </div>
      <div className=" my-5 ms-auto pt-5 d-flex flex-column w-25 gap-4 ">
        <Link href={`/profileEdit/${authUser.id}`} passHref>
          <Button className="bg-dark btn-sm bg-opacity-75 border-0">Edit</Button>
        </Link>
        <Link passHref href="/">
          <Button onClick={deleteAPerson} className="bg-dark btn-sm bg-opacity-75 border-0">Delete Account</Button>
        </Link>
      </div>
    </>
  );
}
