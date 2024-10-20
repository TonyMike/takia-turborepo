import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default AuthLayout;