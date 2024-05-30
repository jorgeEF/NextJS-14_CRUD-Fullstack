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
  let userId: string = '';
  if (Array.isArray(id)) {
    userId = id.join('');
  } else {
    userId = id;
  }

  useEffect(() => {
    async function fetchUser() {
      const userData = await loadUser(userId);
      setUser(userData);
    }
    fetchUser();
  }, [id]);

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center gap-4">
      {user ? (
        <div className="card w-96 shadow-xl bg-gray-50 text-black rounded-lg p-5">
          <div className="card-body">
            <p className="text-left">User Id: <i>{user.id}</i></p>
            <p className="text-left">Usuario: <i>{user.username}</i></p>
            <p className="text-left">Nombre: {user.name} </p>
            <p className="text-left">Apellido: {user.lastname} </p>
            <p className="text-left">Email: {user.email}</p>
            <p className="text-left">Password: {user.password}</p>

            <div className="flex justify-center">
              <Link href={`/users/edit/${user.id}`}><button type="submit" className="bg-yellow-500 hover:bg-yellow-300 text-black rounded p-1 mr-2 mt-2">Editar Usuario</button></Link>
              <Link href="/users"><button type="button" className="bg-gray-500 hover:bg-gray-400 text-black rounded p-1 mt-2">Volver</button></Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}