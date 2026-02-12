import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function TestimonialSection() {
  const t = useTranslations('Testimonial');
  return (
    <section id="testimonial" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-1">
            <CardContent className="bg-background p-8 sm:p-12 rounded-lg">
                <div className="text-center">
                    <blockquote className="text-2xl italic font-medium text-foreground">
                        <p>{t('quote')}</p>
                    </blockquote>
                    <div className="mt-8 flex justify-center items-center gap-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src="https://i.pravatar.cc/80?img=12" alt={t('author')} />
                            <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-lg text-primary">{t('author')}</p>
                            <p className="text-muted-foreground">{t('location')}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
