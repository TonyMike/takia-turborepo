"use client"

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/signout');
    router.refresh();
    // router.replace('/');
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Logout</button>
  );
}

export default LogoutButton;