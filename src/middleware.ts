// File: src/middleware.ts
// This file is used to redirect the root path to /home in a Next.js application.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }
  return NextResponse.next();
}
