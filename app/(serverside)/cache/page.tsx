"use cache"

// Nemůže používat react hooks
export default async function RequestHeadersPage() {
	const serverTime = new Date().toLocaleString();

	return (
		<main style={{padding: "1rem"}}>
			<p>
				Current server time: <strong>{serverTime}</strong>
			</p>
		</main>
	);
}