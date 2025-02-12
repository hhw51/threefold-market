
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const CATEGORIES = ["All", "Necklaces", "Rings", "Earrings", "Bracelets"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (selectedCategory !== "All") {
        query = query.ilike("image_url", `%/${selectedCategory.toLowerCase()}/%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container pt-32">
          <div className="text-center">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container pt-32">
          <div className="text-center text-red-500">
            Error loading products. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FA]">
      <Navbar />
      
      {/* Products Grid */}
      <section className="container pt-32 pb-16">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center">Our Collection</h1>
          
          {/* Category Selector */}
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {products?.map((product) => (
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
    </div>
  );
};

export default Products;
