
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  modelUrl: string;  // This will now be used as imageUrl
}

export const ProductCard = ({ id, name, price, modelUrl }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="product-card group">
      <div className="product-image">
        <img 
          src={modelUrl} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="product-title font-space-grotesk">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
    </Link>
  );
};
