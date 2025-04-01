import Link from "next/link";

export default function Home() {
	return (
		<main>
			<span className={"text-lg font-bold"}>Routing</span>
			<ul>
				<li>
					<Link href={"/static"}>Statická stránka</Link>
				</li>
				<li>
					<Link href={"/products/1"}>Dynamická stránka</Link>
				</li>
				<li>
					<Link href={"/posts/slug"}>Dynamická s catch-all stránka</Link>
				</li>
			</ul>
			<span className={"text-lg font-bold"}>Rendering</span>
			<ul>
				<li>
					<Link href={"/server"}>SSR</Link>
				</li>
				<li>
					<Link href={"/client"}>Client</Link>
				</li>
				<li>
					<Link href={"/cache"}>Cache</Link>
				</li>
			</ul>
		</main>
	);
}
