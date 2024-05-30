import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUser, deleteUser } from '../../../../controllers/userController';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }

        // Convert the id to a number
        const userId = parseInt(id, 10);

        // Validate the number conversion
        if (isNaN(userId)) {
            return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
        }

        const user = await getUser(userId);

        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }

        // Convert the id to a number
        const userId = parseInt(id, 10);

        // Validate the number conversion
        if (isNaN(userId)) {
            return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
        }

        const userData = await req.json();
        await updateUser(userId, userData);

        return NextResponse.json({ message: "Usuario actualizado correctamente" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }

        // Convert the id to a number
        const userId = parseInt(id, 10);

        // Validate the number conversion
        if (isNaN(userId)) {
            return NextResponse.json({ message: 'Invalid User ID' }, { status: 400 });
        }

        await deleteUser(userId);
        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}


