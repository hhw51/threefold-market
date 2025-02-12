
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FA]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container pt-32 pb-16">
        <div className="text-center space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-7xl font-bold text-balance leading-tight">
            Timeless Beauty in
            <span className="text-primary block"> Modern Design</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Discover our collection of exquisite jewelry pieces, each crafted with precision
            and brought to life through immersive visualization.
          </p>
        </div>
      </section>

      {/* Featured Products */}
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

      {/* Features Section */}
      <section className="container py-24 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Artisan Craftsmanship</h3>
            <p className="text-muted-foreground">
              Each piece is meticulously crafted by master artisans
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ethically Sourced</h3>
            <p className="text-muted-foreground">
              Committed to responsible and sustainable practices
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Lifetime Warranty</h3>
            <p className="text-muted-foreground">
              Quality guaranteed with our lifetime care promise
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
