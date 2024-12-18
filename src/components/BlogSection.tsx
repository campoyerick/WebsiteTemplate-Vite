import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Post */}
        <div className="lg:col-span-2">
          <div className="relative group h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Featured post"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="text-sm font-medium text-red-500 mb-2">BLOG</div>
              <h2 className="text-4xl font-bold text-white mb-4">
                LUNAR CLIENT X STYNGR
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-white">Physci</span>
              </div>
              <Button variant="secondary" className="group">
                READ MORE
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="space-y-6">
          {[
            {
              title: "HOW TO BOOST FPS ON MODERN MINECRAFT USING LUNAR CLIENT",
              date: "2 months ago",
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
            },
            {
              title: "MINECRAFT SERVER SAFETY",
              date: "3 months ago",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            },
            {
              title: "HOW TO ADD YOUR OWN MODS TO LUNAR CLIENT",
              date: "4 months ago",
              image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            },
            {
              title: "LUNAR CLIENT VAULT SALE 2024 REVIEW",
              date: "4 months ago",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="group relative h-[120px] rounded-lg overflow-hidden flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="relative z-20 p-4 flex-1">
                <div className="text-xs font-medium text-red-500 mb-1">BLOG</div>
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Lunar Client Writers
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}