// "use client"

export default function Page() {
	return (
		<button onClick={(() => {throw new Error("clicked on a button")})}>wont work</button>
	)
}