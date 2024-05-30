import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
            <div><h1 className="text-red-500">No olvides correr MySQL</h1></div>
            <div><Link href={'/users'}> <button type="button" className="bg-green-800 hover:bg-green-700 text-white rounded p-1">ir a CRUD de usuarios</button></Link></div>            
    </main>
  );
}
