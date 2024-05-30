import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">       
            <Link href={'/users'}> <button type="button" className="bg-green-800 hover:bg-green-700 text-white rounded p-1">ir a CRUD de usuarios</button></Link>                     
    </main>
  );
}
