"use server"
import { getSession } from "@/lib/session";
import Link from "next/link";
import AuthButton from "./AuthButton";

const Header = async () => {
  const session = await getSession();
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <Link href="/" >
            <h1 className="text-2xl font-bold">ShopNow</h1>
          </Link>
          <div className="flex items-center space-x-4">

            <Link href='/dashboard' className="text-blue-500 hover:underline">Dashboard</Link>
            {session?.user?.role === 'admin' && <Link href='/admin' className="text-blue-500 hover:underline">Admin</Link>}

          </div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
        <AuthButton />
      </div>

    </header>
  );
}

export default Header;