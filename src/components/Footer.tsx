import { Button } from "./ui/button";
import { Twitter, Youtube, Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full">
]      <div className="w-full bg-primary/90 backdrop-blur-sm p-8 rounded-xl mb-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
              <img src="/placeholder.svg" alt="Logo" className="w-12 h-12" />
            </div>
            <div className="text-white">
              <p className="font-medium">
                Gain access to <span className="font-bold">exclusive features</span>, support
                <br />development of the client and get a <span className="font-bold">stylish icon!</span>
              </p>
              <p className="text-white/80 text-sm mt-1">
                So what are you waiting for - Subscribe today!
              </p>
            </div>
          </div>
          <Button variant="secondary" size="lg" className="whitespace-nowrap">
            SUBSCRIBE
          </Button>
        </div>
      </div>

      <div className="container mx-auto flex justify-center gap-6 mb-8">
        <a href="#" className="text-white/60 hover:text-white transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors">
          <Send className="w-6 h-6" />
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors">
          <Youtube className="w-6 h-6" />
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors">
          <Send className="w-6 h-6" />
        </a>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="Logo" className="w-6 h-6" />
            <span>© 2024 YourCompany, LLC</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          
          <div className="text-sm">
            Not affiliated with Mojang or Microsoft
          </div>
        </div>
      </div>
    </footer>
  );
}