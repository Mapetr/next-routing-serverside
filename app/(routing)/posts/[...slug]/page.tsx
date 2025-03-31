import liveSlugReaction from "@/public/slug.webp";
import Image from "next/image";
import Link from "next/link";

interface PostsPageProps {
	params: Promise<{
		slug?: string[];
	}>;
}

// Dynamická stránka s catch-all
// Vezme kromě prvního segmentu i všechny další
// Obalením dalších hranatých závorek se z toho stane volitelný
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments
export default async function PostsPage({params}: PostsPageProps) {
	const {slug} = await params;

	return (
		<main>
			<div className={"absolute top-0 right-0"}>
				<Image
					src={liveSlugReaction}
					width={150}
					height={150}
					alt="Absolute positioned image"
				/>
			</div>
			<h1>Posts Catch-All</h1>
			<p>
				Kompletní cesta: <code>{slug?.join("/")}</code>
			</p>
			<section>
				{slug?.map((segment, index) => (
					<div key={index}>
						<strong>Segment {index + 1}:</strong> {segment}
					</div>
				))}
			</section>
			<Link href={"/"}>Zpět</Link>
		</main>
	);
}