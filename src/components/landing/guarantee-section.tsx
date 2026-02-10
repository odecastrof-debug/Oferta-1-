import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary shadow-lg shadow-primary/10">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-4">
                <ShieldCheck className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              30-Day Full Guarantee
            </h2>
            <p className="mt-6 text-lg text-foreground max-w-2xl mx-auto">
              If within the first 30 days you don’t feel that this material helped you understand the Bible better through images and visual context, we’ll refund 100% of your money. No questions asked. No hassle.
            </p>
            <p className="mt-4 text-xl font-semibold text-accent">
              The risk is completely ours.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
