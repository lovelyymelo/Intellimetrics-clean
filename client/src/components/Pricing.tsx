export default function Pricing() {
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Simple Pricing for All Business Sizes</h2>
      <p className="text-muted-foreground mb-10">Start with what you need. Scale as you grow.</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow p-8 w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Startup</h3>
          <p className="text-3xl font-bold mb-6">$29<span className="text-base">/mo</span></p>
          <ul className="mb-6 text-left list-disc list-inside space-y-2">
            <li>Core CRM & HR tools</li>
            <li>Basic analytics</li>
            <li>Email support</li>
          </ul>
          <button className="bg-primary text-white px-6 py-3 rounded-lg">Choose Plan</button>
        </div>
        <div className="bg-primary text-white rounded-xl shadow p-8 w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Growth</h3>
          <p className="text-3xl font-bold mb-6">$79<span className="text-base">/mo</span></p>
          <ul className="mb-6 text-left list-disc list-inside space-y-2">
            <li>Everything in Startup</li>
            <li>Advanced analytics & AI</li>
            <li>Priority support</li>
          </ul>
          <button className="bg-white text-primary px-6 py-3 rounded-lg">Choose Plan</button>
        </div>
        <div className="bg-white rounded-xl shadow p-8 w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
          <p className="text-3xl font-bold mb-6">Custom</p>
          <ul className="mb-6 text-left list-disc list-inside space-y-2">
            <li>Full suite access</li>
            <li>Custom integrations</li>
            <li>Dedicated support & SLA</li>
          </ul>
          <button className="bg-primary text-white px-6 py-3 rounded-lg">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}