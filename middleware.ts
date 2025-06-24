import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/dashboard', '/dashboard/home',"/dashboard/links", "/dashboard/analytics","/dashboard/accounts"];
const authRoutes = ['/login', '/register'];
export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const sessionCookie = getSessionCookie(req);
  const res = NextResponse.next();
  const isLoggedIn = !!sessionCookie;


//? If the user is not logged in, redirect them to the login page
  const isOnProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
  if (isOnProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //? If the user is logged in, redirecting protected routes
  const isOnAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isOnAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard/home", req.url));
  }

  //? redirecting form "/dashboard" to "/dashboard/home"
  if (nextUrl.pathname === "/dashboard" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard/home", req.url));
  }

  //* If nothing: it means it is a public route and you can pass
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
