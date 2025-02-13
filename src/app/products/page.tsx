
import { Navbar } from "@/components/Navbar";
import { ProductsList } from "@/components/ProductsList";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FA]">
      <Navbar />
      <ProductsList />
    </div>
  );
}
