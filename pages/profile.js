import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="d-flex flex-column mt-5">
      <Image className="rounded-circle mx-auto" src={user?.fbUser.photoURL} width="100" height="100" />
      <h1 className="mt-5 text-center">{fullName}</h1>
      <div className="mx-auto fs-5 d-flex justify-content-center">
        <p className="pt-1 ms-5 ">{user.phone}</p>
        <FontAwesomeIcon icon={faCircle} className=" fa-2xs px-5 pt-3" />
        <p className="pt-1">{user.email}</p>
      </div>
    </div>
  );
}
