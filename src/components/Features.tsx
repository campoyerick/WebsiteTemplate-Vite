import { Diamond, Bolt, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Diamond className="h-8 w-8 text-primary" />,
      title: "Undetectable",
      description: "Advanced bypass systems keep you safe from anti-cheat detection"
    },
    {
      icon: <Bolt className="h-8 w-8 text-primary" />,
      title: "High Performance",
      description: "Optimized code ensures minimal impact on your game's FPS"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Regular Updates",
      description: "Stay ahead with frequent updates and new features"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-autor">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Features</h2>
        <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}