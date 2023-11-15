import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPersonById } from '../../api/peopleData';
import RegisterForm from '../../components/RegisterForm';

export default function EditPerson() {
  const [person, setPerson] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getPersonById(id).then(setPerson);
  }, [id]);

  return (<RegisterForm personObj={person} />);
}
