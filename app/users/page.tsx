"use client";

import { useEffect, useState } from 'react';
import { User } from '@/utils/types';
import { UserTable } from '@/components/UserTable';
import Link from 'next/link';

async function loadUser(): Promise<User[]> {
  const res = await fetch('/api/users');
  const data = await res.json();
  return data;
}

export default function UsersPage() {  
  const [users, setUsers] = useState<User[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  async function fetchUsers() {
    const usersData = await loadUser();
    setUsers(usersData);
  }

  useEffect(() => {
    fetchUsers();
  }, []);  

  const handleDelete = async (id: number) => {
    if (typeof window !== 'undefined' && window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        const res = await fetch(`/api/users/${id}`, {
          method: 'DELETE'
        });
        if (!res.ok) {
          throw new Error('Error al eliminar el usuario');
        }
        setSuccessMessage('Usuario eliminado correctamente');
        fetchUsers();
        setTimeout(() => {
          clearSuccessMessage();
        }, 2000);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const clearSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-row items-center justify-center gap-3">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1>Lista de usuarios</h1>
        <div className="flex justify-between w-full">
          <Link href={`/users/create`}><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Nuevo Usuario</button></Link>
        </div>
        <div className="flex-1">
          <UserTable users={users} onDelete={handleDelete}/>
        </div>
        <div>{successMessage && ( <div className="success-message">{successMessage}</div> )}</div>        
      </div>      
    </div>
  );
}
