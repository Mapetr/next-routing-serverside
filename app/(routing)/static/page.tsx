import Image from "next/image";
import cat from "@/public/cat1.png";

// Statická stránka
// Obsah je vygenerovaný při buildu.
// https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default
export default function Page() {
	return (
		<main>
			<p>Statická stránka</p>
			<Image
				src={cat}
				width={"250"}
				height={"250"}
				alt={"serious cat"}
			/>
		</main>
	)
}