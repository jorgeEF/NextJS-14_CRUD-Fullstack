import React, { useState } from 'react';
import { User } from '@/utils/types';
import Link from 'next/link';

interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
}

export const UserTable = ({ users, onDelete }: UserTableProps) => {

  return (
    <div className="overflow-x-auto w-full md:w-full mx-auto">
      <div className="card w-auto shadow-xl bg-gray-50 text-black rounded-lg p-5">
        <div className="card-body">
          <table className="min-w-full divide-y divide-gray-200 rounded">
            <thead className="bg-gray-50 rounded">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Apellido
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><Link href={`/users/show/${user.id}`} passHref>{user.username}</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><Link href={`/users/show/${user.id}`} passHref>{user.name}</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><Link href={`/users/show/${user.id}`} passHref>{user.lastname}</Link></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><Link href={`/users/show/${user.id}`} passHref>{user.email}</Link></td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link href={`/users/edit/${user.id}`} passHref>
                      <button type="button" className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold text-xs py-1 px-2 rounded mr-2">Editar</button>
                    </Link>
                    <button
                      className="bg-red-600 hover:bg-red-800 text-black font-bold text-xs py-1 px-2 rounded"
                      onClick={() => user.id && onDelete(user.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
