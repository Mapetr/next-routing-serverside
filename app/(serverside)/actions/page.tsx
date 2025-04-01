'use client'

import { create } from './actions'

export default function Page() {
	return <button onClick={() => create()}>Create</button>
}