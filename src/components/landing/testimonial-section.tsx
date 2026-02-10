import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function TestimonialSection() {
  const avatarImage = PlaceHolderImages.find(img => img.id === 'testimonial-pastor');

  return (
    <section id="testimonial" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-1">
            <CardContent className="bg-background p-8 sm:p-12 rounded-lg">
                <div className="text-center">
                    <blockquote className="text-2xl italic font-medium text-foreground">
                        <p>“I had never seen anything like it. The images are of stunning quality and helped me understand passages I’ve been reading for 20 years without truly grasping the context.”</p>
                    </blockquote>
                    <div className="mt-8 flex justify-center items-center gap-4">
                        <Avatar className="w-16 h-16">
                            {avatarImage && (
                                <AvatarImage src={avatarImage.imageUrl} alt="Pastor Michael S." data-ai-hint={avatarImage.imageHint}/>
                            )}
                            <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-lg text-primary">Pastor Michael S.</p>
                            <p className="text-muted-foreground">Dallas, Texas</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
