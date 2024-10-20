import { getSession } from "@/lib/session";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const AuthButton = async () => {
  const session = await getSession();

  return (
    <div className="flex items-center gap-2 ">
      {!session || !session?.user ? (
        <div>
          <Link href="/auth/login" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Login</Link>
          <Link href="/auth/register" className="px-4 py-2 ml-3 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register</Link>
        </div>
      ) : (

        <LogoutButton />
      )}
    </div>
  );
}




export default AuthButton;
