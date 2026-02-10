import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = [
  { id: 'gallery-eden', label: 'Garden of Eden', reference: 'Genesis' },
  { id: 'gallery-red-sea', label: 'Red Sea', reference: 'Exodus' },
  { id: 'gallery-jerusalem', label: 'Ancient Jerusalem', reference: 'Kings' },
  { id: 'gallery-jordan-river', label: 'The Jordan River', reference: 'Joshua' },
  { id: 'gallery-galilee', label: 'Sea of Galilee', reference: 'Gospels' },
];

export function GallerySection() {
  const images = galleryImages.map(gi => PlaceHolderImages.find(pi => pi.id === gi.id)).filter(Boolean);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Images that bring the Bible to life
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {galleryImages.map((item) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            if (!imageData) return null;
            return (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={imageData.imageUrl}
                    alt={item.label}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 hover:scale-105"
                    data-ai-hint={imageData.imageHint}
                  />
                </CardContent>
                <CardFooter className="flex-col items-start p-4">
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.reference}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-foreground">
            <p>“Your word is a lamp for my feet, a light on my path.”</p>
            <footer className="mt-2 text-base not-italic text-muted-foreground">Psalm 119:105</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
