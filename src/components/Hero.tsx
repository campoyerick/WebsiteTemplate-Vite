import { Button } from "./ui/button";
import { Rocket } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4 transition-transform duration-300 hover:transform hover:translate-z-10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/80 before:to-black/95 before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[url('/minecraft-bg.jpg')] after:bg-cover after:bg-center after:opacity-50 after:-z-10 after:transform after:transition-transform after:duration-300 hover:after:scale-105">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
          The Ultimate Minecraft
          <br />
          Advantage
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Dominate every game with our premium, undetectable Minecraft cheats.
          Built for players who demand the best.
        </p>
      </div>
    </div>
  );
}