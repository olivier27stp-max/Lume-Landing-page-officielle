import { motion } from 'motion/react';

export default function RefundPolicy() {
  return (
    <div style={{ backgroundColor: '#fafaf8', backgroundImage: 'url("/paper-texture.png")', backgroundRepeat: 'repeat', backgroundSize: '300px 300px' }}>
      <section className="pt-28 pb-24 md:pt-36 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1F5F4F] mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#111] mb-4">
              Refund Policy
            </h1>
            <p className="text-sm text-text-secondary mb-10">Effective Date: January 2026</p>

            <div className="prose-sm space-y-8 text-text-secondary leading-relaxed">
              <p>
                At Lume, we are committed to transparent and fair billing practices. This Refund Policy explains how subscriptions, payments, and refunds are handled.
              </p>
              <p className="text-xs font-bold text-[#111] uppercase">
                By using Lume, you confirm that you have read, understood, and agreed to this policy. Lume may update this policy at any time without notice.
              </p>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">1. Monthly Subscriptions</h2>
                <p>Monthly subscriptions can be canceled at any time.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>No refunds are issued for the current billing period</li>
                  <li>Access remains active until the end of the billing cycle</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">2. Annual Subscriptions</h2>
                <p>Annual plans include a 14-day refund window:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Full refund available within 14 days of purchase</li>
                  <li>After 14 days, payments are non-refundable</li>
                  <li>Access continues until the end of the annual term</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">3. Onboarding & Setup Fees</h2>
                <p>If applicable:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Non-refundable once onboarding has been delivered</li>
                  <li>Fully refundable if requested before onboarding begins</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">4. Billing Errors</h2>
                <p>If a billing error occurs (e.g., duplicate charge), a refund may be issued.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Requests must be submitted within 7 days</li>
                  <li>Contact: support@lumecrm.net</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">5. Cancellation & Suspension</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>No refunds outside the terms above</li>
                  <li>No refunds for accounts suspended due to Terms violations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">6. Acceptance</h2>
                <p>By using Lume, you agree to this policy.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">Contact</h2>
                <a href="mailto:support@lumecrm.net" className="text-[#1F5F4F] font-medium hover:underline">support@lumecrm.net</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
