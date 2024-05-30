"use client";

import { useEffect, useState, use } from 'react';
import axios from 'axios';
import { User } from '@/utils/types';
import { useParams } from 'next/navigation';
import Link from 'next/link';

async function loadUser(id: string): Promise<User> {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
}

export default function ShowUserPage() {
  const [user, setUser] = useState<User>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const userData = await loadUser(id[0]);
      setUser(userData);
    }
    fetchUser();
  }, [id]);  

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center gap-4">      
      {user ? (
        <div>
          <p>User Id: <i>{user.id}</i></p>
          <p>Usuario: <i>{user.username}</i></p>
          <p>Nombre: {user.name} </p>
          <p>Apellido: {user.lastname} </p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>

          <div className='flex gap-4 justify-center'>
            <Link href={`/users/edit/${user.id}`}>Editar</Link>
            <Link href="/users">Volver</Link>
          </div>
        </div>) : (
        <p>Loading...</p>
      )}

    </div>
  );
}