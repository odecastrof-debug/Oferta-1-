import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-background text-foreground pt-32 pb-24 md:pt-48 md:pb-32">
       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-background"></div>
       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
          Recognized as the most complete material on the market
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          Take a journey through every biblical scenario from <span className="text-primary">Genesis to Revelation</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          A deep and accessible visual guide with over 280 cinematic images that reveal the settings, landscapes, and locations where each biblical event occurred.
        </p>

        <div className="mt-12 flex justify-center">
            <div className="relative">
                <div className="bg-black/30 p-2 sm:p-3 rounded-2xl shadow-2xl shadow-primary/10 border border-white/10">
                      <div className="relative">
                        <Image
                            src="/images/hero-book.png"
                            alt="Biblical Geography Book Preview"
                            width={400}
                            height={500}
                            className="w-full h-auto rounded-2xl"
                        />
                         <Badge className="absolute top-4 right-4 bg-primary/80 text-primary-foreground py-1 px-3 text-xs border border-amber-300/50">
                            500+ PAGES
                        </Badge>
                      </div>
                </div>
                 <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max">
                    <Button variant="secondary" className="bg-green-900/50 text-green-300 border border-green-700 hover:bg-green-900/70 backdrop-blur-sm">
                        <Zap className="w-4 h-4 mr-2" />
                        Instant Access after purchase
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
