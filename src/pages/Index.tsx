import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ComparisonTable } from "@/components/ComparisonTable";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BlogSection />
      <Features />
      <ComparisonTable />
      <Footer />
    </div>
  );
};

export default Index;