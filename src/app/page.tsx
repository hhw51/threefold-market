
import { Navbar } from "@/components/Navbar";
import { FeaturedProducts } from "@/components/FeaturedProducts";

export default function Home() {
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
      <FeaturedProducts />

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
}
