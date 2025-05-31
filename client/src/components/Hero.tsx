import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-b from-background to-muted">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        One platform. <br /> Total control. <br /> <span className="text-primary">Infinite growth.</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-6">
        IntelliMetrics brings all your business tools into one AI-powered dashboard — built to scale, adapt, and empower.
      </p>
      <Button size="lg" className="text-lg">
        Get Started
      </Button>
    </section>
  );
}