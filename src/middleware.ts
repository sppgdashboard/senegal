import { NextResponse, NextRequest } from "next/server";
import { getSession, updateSession } from "./lib";

export async function middleware(request: NextRequest) {
  await updateSession(request);
  const userSession = await getSession();
  // const isAuthenticated = authenticate(request)
 
  // If the user is authenticated, continue as normal  
  if (userSession) {
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: '/dashboard/:path*',
}