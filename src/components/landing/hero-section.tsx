
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

        <div className="mt-12">
          <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://i.postimg.cc/jjFxghdb/book-cover-Ck3q7dk0.jpg"
              alt="Biblical Geography Book Preview"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-3 right-3 w-20">
              <img
                src="https://i.postimg.cc/jjFxghdb/book-cover-Ck3q7dk0.jpg"
                alt="Book badge"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="bg-[#35D07F] text-black px-6 py-2 rounded-lg font-medium">
              Instant Access after purchase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
