"use client";

import { useState } from 'react';
import { User } from '@/utils/types';
import { useRouter } from 'next/navigation';

export default function CreateUserPage() {
  const [user, setUser] = useState<User>({
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!res.ok) {
        throw new Error('Error al crear el usuario');
      }
      setSuccessMessage('Usuario creado correctamente');
      setTimeout(() => {
        router.push('/users');
      }, 2000); // Redirigir después de 2 segundos
    } catch (error) {
      console.error('Error creando el usuario:', error);
      // Mostrar mensaje de error
    }
  };

  const handleCancel = () => {
    router.push('/users');
  };

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center color-black">
      <div className="card w-96 shadow-xl bg-gray-50 text-black rounded-lg p-5">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td><label>Username:</label></td>
                    <td><input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInputChange}
                      className="text-black border border-gray-300 rounded"
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Name:</label></td>
                    <td><input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                      className="text-black border border-gray-300 rounded"
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Lastname:</label></td>
                    <td><input
                      type="text"
                      name="lastname"
                      value={user.lastname}
                      onChange={handleInputChange}
                      className="text-black border border-gray-300 rounded"
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Email:</label></td>
                    <td><input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="text-black border border-gray-300 rounded"
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Password:</label></td>
                    <td><input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                      className="text-black border border-gray-300 rounded"                                          
                    /></td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center mt-2">        
                <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-black rounded p-1 mr-2">Crear Usuario</button>
                <button type="button" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-400 text-black rounded p-1">Cancelar</button>
              </div>
              <div>
                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}