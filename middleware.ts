import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
	const response = NextResponse.next();

	response.headers.set('x-hello-from-middleware2', 'hello')
	return response
}