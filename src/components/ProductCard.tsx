
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import * as THREE from "three";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  modelUrl: string;
}

export const ProductCard = ({ id, name, price, modelUrl }: ProductCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    // Renderer setup with better shadows and antialiasing
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Enhanced lighting for jewelry
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(5, 5, 5);
    spotLight.castShadow = true;
    spotLight.angle = 0.3;
    scene.add(spotLight);

    // Add rim light for sparkle
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    // Placeholder jewelry (replace with actual 3D model)
    const geometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x9b87f5,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring = new THREE.Mesh(geometry, material);
    ring.castShadow = true;
    ring.receiveShadow = true;
    scene.add(ring);

    camera.position.z = 2.5;

    // Smooth animation
    const animate = () => {
      requestAnimationFrame(animate);
      ring.rotation.x += 0.005;
      ring.rotation.y += 0.007;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Link to={`/product/${id}`} className="product-card group">
      <div
        ref={containerRef}
        className="product-image bg-gradient-to-b from-gray-50 to-gray-100"
      />
      <h3 className="product-title font-space-grotesk">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
    </Link>
  );
};
