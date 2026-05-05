import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductServicePage } from "../components/ProductServicePage";
import { productList, productPages } from "../product-content";

type ProductPageProps = {
  params: Promise<{
    product: string;
  }>;
};

export function generateStaticParams() {
  return productList.map((product) => ({
    product: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { product: slug } = await params;
  const product = productPages[slug];

  if (!product) {
    return {};
  }

  return product.metadata;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { product: slug } = await params;
  const product = productPages[slug];

  if (!product) {
    notFound();
  }

  return <ProductServicePage product={product} />;
}
