import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers, createUser } from '../../../controllers/userController';

export async function GET(req: NextRequest) {
    try {
        const users = await getAllUsers();
        return NextResponse.json(users);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
      const userData = await req.json();
      await createUser(userData);
      return NextResponse.json({ message: "Usuario creado correctamente" }, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
