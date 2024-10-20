import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";

export const middleware = async (request: NextRequest) => {
  const session = await getSession();
  console.log("🚀 ~ middleware ~ session:", session?.user?.role);

  // Check if the user is not logged in
  if (!session || !session.user) {
    // If the user is trying to access protected routes
    if (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  } else {
    // If the user is logged in and trying to access login or register pages
    if (request.nextUrl.pathname === '/auth/login' || request.nextUrl.pathname === '/auth/register') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // If the user is trying to access the /admin path but is not an admin
    if (request.nextUrl.pathname.startsWith('/admin') && session.user.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/login', '/auth/register', '/admin/:path*'],
};
