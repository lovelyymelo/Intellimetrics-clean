export default function Features() {
  return (
    <section className="py-16 bg-muted text-center">
      <h2 className="text-4xl font-bold mb-6">What You Get with IntelliMetrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">HR & Payroll Automation</h3>
          <p>Manage onboarding, payroll, attendance, and employee performance with AI-driven accuracy.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Smart CRM & Sales</h3>
          <p>Track leads, forecast revenue, and personalize customer journeys using AI insights.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Accounting Made Simple</h3>
          <p>Automate invoicing, tax calculation, and multi-currency finance tracking with secure logs.</p>
        </div>
      </div>
    </section>
  );
}