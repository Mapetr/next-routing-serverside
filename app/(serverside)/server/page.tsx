// Stránka vyrenderovaná na serveru
import {headers} from "next/headers";

// Nemůže používat react hooks
export default async function RequestHeadersPage() {
	const requestHeaders = await headers();
	const headersArray = Array.from(requestHeaders.entries());

	return (
		<main style={{ padding: "1rem" }}>
			<h1>Request Headers</h1>
			<ul>
				{headersArray.map(([header, value]) => (
					<li key={header}>
						<strong>{header}:</strong> {value}
					</li>
				))}
			</ul>
		</main>
	);
}