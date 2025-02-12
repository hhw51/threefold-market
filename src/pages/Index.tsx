
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Premium Headphones",
    price: 299.99,
    modelUrl: "/models/headphones.glb",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    modelUrl: "/models/watch.glb",
  },
  {
    id: "3",
    name: "Wireless Speaker",
    price: 149.99,
    modelUrl: "/models/speaker.glb",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container pt-32 pb-16">
        <div className="text-center space-y-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Experience Products in
            <span className="text-primary"> 3D</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of premium products with interactive 3D previews.
            Turn, zoom, and examine every detail before you buy.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Interactive 3D View</h3>
            <p className="text-muted-foreground">
              Examine products from every angle
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Premium Quality</h3>
            <p className="text-muted-foreground">
              Carefully curated selection
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Secure Shopping</h3>
            <p className="text-muted-foreground">
              Safe and reliable checkout
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
