"use client"

import {useState} from "react";

// Stránka se renderuje u klienta
// Může používat react hooks
export default function Page() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}