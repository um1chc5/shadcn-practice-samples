// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // Redirect to /mail
  return NextResponse.redirect(new URL('/mail', req.url))
}

// middleware.ts
export const config = {
  matcher: ['/'], // Apply middleware to root path and /api
}
