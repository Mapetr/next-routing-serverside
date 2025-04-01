'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
	const router = useRouter()

	return (
		<button className={"underline"} type="button" onClick={() => router.push('/static')}>
			static
		</button>
	)
}