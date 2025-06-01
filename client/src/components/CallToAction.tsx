import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <div className="bg-primary text-white py-12 px-4 text-center rounded-2xl shadow-md my-10">
      <h2 className="text-3xl font-semibold mb-4">
        Ready to take control of your business growth?
      </h2>
      <p className="text-lg mb-6">
        Experience how IntelliMetrics unifies your operations into one intelligent platform.
      </p>
      <Button variant="secondary" size="lg">
        Try IntelliMetrics Now
      </Button>
    </div>
  );
}