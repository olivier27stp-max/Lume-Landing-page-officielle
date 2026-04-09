import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div style={{ backgroundColor: '#fafaf8', backgroundImage: 'url("/paper-texture.png")', backgroundRepeat: 'repeat', backgroundSize: '300px 300px' }}>
      <section className="pt-28 pb-24 md:pt-36 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1F5F4F] mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#111] mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-text-secondary mb-10">Effective Date: April 2026</p>

            <div className="prose-sm space-y-8 text-text-secondary leading-relaxed">
              <p>
                These Terms govern your use of Lume.
              </p>
              <p className="text-xs font-bold text-[#111] uppercase">
                By using Lume, you agree to these terms.
              </p>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">1. Use of Service</h2>
                <p>Lume provides tools for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>CRM</li>
                  <li>Sales tracking</li>
                  <li>Automation</li>
                </ul>
                <p className="mt-2">Use must be lawful.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">2. Accounts</h2>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Account security</li>
                  <li>Accurate information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">3. Acceptable Use</h2>
                <p>You may NOT:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Use Lume illegally</li>
                  <li>Hack or disrupt the system</li>
                  <li>Send spam</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">4. Data</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You own your data</li>
                  <li>You are responsible for compliance with laws</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">5. Intellectual Property</h2>
                <p>All Lume assets belong to Lume. No copying or reselling.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">6. Messaging Compliance</h2>
                <p>You must:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Have consent to message contacts</li>
                  <li>Follow applicable laws</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">7. Disclaimer</h2>
                <p>Lume is provided "as is" without guarantees.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">8. Liability</h2>
                <p>Lume is not liable for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Lost profits</li>
                  <li>Data loss</li>
                </ul>
                <p className="mt-2">Liability is limited to fees paid.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">9. Termination</h2>
                <p>We may suspend accounts if Terms are violated.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">10. Governing Law</h2>
                <p>Quebec, Canada</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">11. Changes</h2>
                <p>We may update Terms anytime.</p>
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
