import Link from "next/link";

interface ProductPageProps {
	params: Promise<{
		productId: string;
	}>;
}

// Dynamická stránka
// Obalením složky hranatými závorkami, které se vrátí v podobě objektu params
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function ProductPage({ params }: ProductPageProps) {
	const {productId} = await params;

	return (
		<main>
			<h1>Produkt: {productId}</h1>
			<p>
			</p>
			<Link href={"/"}>Zpět</Link>
		</main>
	);
}