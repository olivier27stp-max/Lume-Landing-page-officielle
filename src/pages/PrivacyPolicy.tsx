import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#fafaf8', backgroundImage: 'url("/paper-texture.png")', backgroundRepeat: 'repeat', backgroundSize: '300px 300px' }}>
      <section className="pt-28 pb-24 md:pt-36 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1F5F4F] mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#111] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-text-secondary mb-10">Effective Date: March 2026</p>

            <div className="prose-sm space-y-8 text-text-secondary leading-relaxed">
              <p>
                Your privacy matters. This policy explains how Lume collects, uses, and protects your data.
              </p>
              <p className="text-xs font-bold text-[#111] uppercase">
                By using Lume, you consent to this policy.
              </p>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">1. Information We Collect</h2>
                <h3 className="text-sm font-bold text-[#111] mb-2">Personal Data</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Name, email, phone</li>
                  <li>Business details</li>
                  <li>Billing info (processed securely via third parties)</li>
                </ul>
                <h3 className="text-sm font-bold text-[#111] mt-4 mb-2">Usage Data</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP address</li>
                  <li>Device/browser info</li>
                  <li>Platform interactions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">2. How We Use Data</h2>
                <p>We use your data to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Provide and improve the platform</li>
                  <li>Process payments</li>
                  <li>Communicate updates and support</li>
                </ul>
                <p className="mt-3 font-medium text-[#111]">We never sell your data.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">3. Cookies</h2>
                <p>We use cookies to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Maintain sessions</li>
                  <li>Store preferences</li>
                  <li>Analyze usage</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">4. Data Ownership</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You fully own your data</li>
                  <li>Lume only processes it to operate the service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">5. Platform Architecture</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Multi-tenant system</li>
                  <li>Isolated workspaces</li>
                  <li>Role-based access control</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">6. Security</h2>
                <p>We use:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Encryption</li>
                  <li>Access controls</li>
                  <li>Secure infrastructure</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">7. Data Retention</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Stored while account is active</li>
                  <li>Deleted after ~30 days post-cancellation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">8. Third Parties</h2>
                <p>We use trusted providers (hosting, payments, etc.). They only access necessary data.</p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">9. Your Rights</h2>
                <p>You can:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Access</li>
                  <li>Modify</li>
                  <li>Delete your data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111] mb-3">10. Changes</h2>
                <p>We may update this policy anytime.</p>
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
