
"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { ProductCard } from "@/components/ProductCard";

export function FeaturedProducts() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="container py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products?.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            modelUrl={product.image_url}
          />
        ))}
      </div>
    </section>
  );
}
