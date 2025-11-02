import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { Role } from "@prisma/client";

const ProtectedRoutes = ["/"];

export async function proxy(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const role = session?.user.role;
  const { pathname } = request.nextUrl;

  if (
    !isLoggedIn &&
    ProtectedRoutes.some((route) => pathname.startsWith(route)) &&
    !pathname.startsWith("/auth")
  ) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (isLoggedIn && role !== Role.ADMIN && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && pathname.startsWith("/auth/signin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
