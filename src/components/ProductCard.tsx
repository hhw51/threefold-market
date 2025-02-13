
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  modelUrl: string;
}

export const ProductCard = ({ id, name, price, modelUrl }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`} className="product-card group">
      <div className="product-image relative aspect-square">
        <Image 
          src={modelUrl} 
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="product-title font-space-grotesk">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
    </Link>
  );
};
