import userModel from '../models/userModel.ts'
import { User } from '@/utils/types';

// CRUD

// mostrar todos los usuarios
export const getAllUsers = async () => {
    try {
        const users = await userModel.findAll();
        console.log("user en controlador: ", users);
        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// mostrar un usuario
export const getUser = async (id: number) => {
    try {
        const user = await userModel.findByPk(id);
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// crear un usuario
export const createUser = async (userData: any) => {
    try {
        await userModel.create(userData);
        return { message: "Usuario creado correctamente" };
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// editar usuario
export const updateUser = async (id: number, data: Partial<User>) => {
    try {
      const [affectedCount, affectedRows] = await userModel.update(data, {
        where: { id },
        returning: true,
      });
  
      if (affectedCount === 0) {
        throw new Error('Usuario no encontrado');
      }
  
      return affectedRows[0]; // Devuelve el usuario actualizado
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

// eliminar un usuario
export const deleteUser = async (id: number) => {
    try {
        await userModel.destroy({ where: { id } });
        return { message: "Usuario eliminado correctamente" };
    } catch (error: any) {
        throw new Error(error.message);
    }
};