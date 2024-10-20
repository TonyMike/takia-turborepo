"use client"
import SubmitButton from "@/components/sharedUI/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "@/lib/auth.action";
import Link from "next/link";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, action] = useFormState(loginAction, undefined)

  return (
    <div className="space-y-4">

      <h1 className="text-3xl text-center  font-bold">Login</h1>
      {state?.message && <p className="text-center text-sm text-red-500">{state.message}</p>}

      <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/login`} className="w-full flex justify-center items-center gap-x-2 text-sm text-gray-800 underline mt-1.5 ">
        Login with Google
        {/* <Button variant="outline" className="w-full" >Login with Google</Button> */}
      </a>
      <form action={action} className="w-96 p-7 px-10 shadow-sm rounded-md bg-white space-y-6">

        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="w-full">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="jonsnow@example.com" />
            <p className="text-xs text-red-500">{state?.errors?.email}</p>
          </div>
          <div className="w-full">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="*************" />
            {state?.errors?.password && (
              <ul>
                {state.errors.password.map((err, i) => (
                  <li className="text-xs text-red-500" key={i}>{err}</li>
                ))}
              </ul>
            )}
            <Link href="#" className="text-sm text-gray-800 underline mt-1.5 block">Forgot password?</Link>
          </div>
          <SubmitButton>Login</SubmitButton>
        </div>
        <div className="flex text-sm place-content-center space-x-1">
          <p>{` Don't have an account?`}</p>
          <Link className="underline" href={'/auth/register'}>Register</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;