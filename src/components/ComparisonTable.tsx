import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { useState } from "react";

export function ComparisonTable() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'permanent'>('permanent');

  const planPrices = {
    monthly: {
      price: "9.99",
      period: "/month",
      description: "Subscription, cancel anytime"
    },
    permanent: {
      price: "34.99",
      period: "/one-time",
      description: "Permanent purchase, no subscription"
    }
  };

  return (
    <section className="min-h-screen bg-black/95 py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-7xl font-bold text-white">Get started.</h1>
          <p className="text-gray-400 text-xl">Here's what we provide for you inside YourCompany</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-500/20 p-2 rounded-full shrink-0">
                <Check className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">An unfair advantage</h3>
                <p className="text-gray-400">Our combat modules are made to put you two steps above any opponent.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-500/20 p-2 rounded-full shrink-0">
                <Check className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Undetectable experience</h3>
                <p className="text-gray-400">With the proper settings, Vape's ghost features will bypass any popular anticheat.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-500/20 p-2 rounded-full shrink-0">
                <Check className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Long term cheating</h3>
                <p className="text-gray-400">Built for your main account - our modules are built safe enough that alts are not required.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] p-8 rounded-2xl backdrop-blur-sm border border-white/10">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white text-sm">1</span>
                <h3 className="text-white text-xl font-semibold">Choose a plan</h3>
              </div>
              <div className="flex gap-4 mb-2">
                <span className="text-4xl font-bold text-white">${planPrices[selectedPlan].price}</span>
                <span className="text-white/60">{planPrices[selectedPlan].period}</span>
              </div>
              <p className="text-white/60 text-sm mb-4">{planPrices[selectedPlan].description}</p>
              <div className="flex gap-4">
                <Button 
                  variant={selectedPlan === 'monthly' ? 'default' : 'outline'} 
                  className={`${
                    selectedPlan === 'monthly' 
                      ? 'bg-red-500 hover:bg-red-500/90' 
                      : 'bg-transparent text-white/60 border-white/10 hover:bg-white/5'
                  } rounded-xl ${selectedPlan === 'monthly' ? 'border-0' : ''}`}
                  onClick={() => setSelectedPlan('monthly')}
                >
                  Monthly
                </Button>
                <Button 
                  variant={selectedPlan === 'permanent' ? 'default' : 'outline'}
                  className={`${
                    selectedPlan === 'permanent' 
                      ? 'bg-red-500 hover:bg-red-500/90' 
                      : 'bg-transparent text-white/60 border-white/10 hover:bg-white/5'
                  } rounded-xl ${selectedPlan === 'permanent' ? 'border-0' : ''}`}
                  onClick={() => setSelectedPlan('permanent')}
                >
                  Permanent
                </Button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white text-sm">2</span>
                <h3 className="text-white text-xl font-semibold">Create account</h3>
              </div>
              <div className="grid gap-4">
                <Input 
                  placeholder="Username" 
                  className="bg-black/40 border-white/10 text-white placeholder:text-white/60 rounded-xl"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="Email" 
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/60 rounded-xl"
                  />
                  <Input 
                    placeholder="Confirm email" 
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/60 rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    type="password"
                    placeholder="Password" 
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/60 rounded-xl"
                  />
                  <Input 
                    type="password"
                    placeholder="Confirm Password" 
                    className="bg-black/40 border-white/10 text-white placeholder:text-white/60 rounded-xl"
                  />
                </div>
                <div className="text-right">
                  <span className="text-white/60 text-sm">or </span>
                  <a href="#" className="text-red-500 text-sm hover:underline">sign in</a>
                  <span className="text-white/60 text-sm"> instead</span>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-500/90 rounded-xl border-0">
                  Continue
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}