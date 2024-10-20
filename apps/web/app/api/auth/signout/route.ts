import { authFetch } from "@/helpers/authFetch";
import { NEXT_PUBLIC_BACKEND_URL } from "@/lib/constants";
import { deleteSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

  const response  = await authFetch(`${NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
    method: 'POST',
  })
  if(response.ok) {
    await deleteSession();
  }

  // Revalidate the path
  revalidatePath('/','layout');
  revalidatePath('/','page');

  // Return the redirect response
  return NextResponse.redirect(new URL('/', req.nextUrl));
}

