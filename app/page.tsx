import Link from "next/link";

export default function Home() {
	return (
		<main>
			<span className={"text-lg font-bold"}>Routing</span>
			<ul>
				<li>
					<Link href={"/static"} className={"underline"}>Statická stránka</Link>
				</li>
				<li>
					<Link href={"/router"} className={"underline"}>Router</Link>
				</li>
				<li>
					<Link href={"/error"} className={"underline"}>Error</Link>
				</li>
				<li>
					<Link href={"/products/1"} className={"underline"}>Dynamická stránka</Link>
				</li>
				<li>
					<Link href={"/posts/slug"} className={"underline"}>Dynamická s catch-all stránka</Link>
				</li>
			</ul>
			<span className={"text-lg font-bold"}>Rendering</span>
			<ul>
				<li>
					<Link href={"/server"} className={"underline"}>SSR</Link>
				</li>
				<li>
					<Link href={"/client"} className={"underline"}>Client</Link>
				</li>
				<li>
					<Link href={"/cache"} className={"underline"}>Cache</Link>
				</li>
				<li>
					<Link href={"/isr"} className={"underline"}>ISR</Link>
				</li>
			</ul>
		</main>
	);
}
