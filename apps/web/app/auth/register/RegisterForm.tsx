"use client"
import SubmitButton from "@/components/sharedUI/SubmitButton";
import { Input } from "@/components/ui/input";
import { registerAction } from "@/lib/auth.action";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, action] = useFormState(registerAction, undefined)
  return (
    <form action={action} className="w-96 p-7 px-10 shadow-sm rounded-md bg-white space-y-6">
      <h1 className="text-3xl text-center font-bold">Register</h1>
      {state?.message && <p className="text-center text-sm text-red-500">{state.message}</p>}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="w-full">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" name="fullName" type="text" placeholder="Jon Snow" />
          <p className="text-xs text-red-500">{state?.errors?.fullName}</p>
        </div>
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
        </div>
        <div className="w-full">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" name="phoneNumber" type="tel" placeholder="09123456789" />
          <p className="text-xs text-red-500">{state?.errors?.phoneNumber}</p>
        </div>
        <SubmitButton>Register</SubmitButton>
      </div>
      <div className="flex text-sm place-content-center space-x-1">
        <p>Already have an account?</p>
        <Link className="underline" href="/auth/login">Login</Link>
      </div>
    </form>
  );
}

export default RegisterForm;