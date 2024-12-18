import { ShoppingCart, Shield } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="container flex h-16 items-center justify-center">
        <div className="flex items-center gap-6 bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full">
          <a href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">YourCompany</span>
          </a>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#about" className="nav-link">About</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="default">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}