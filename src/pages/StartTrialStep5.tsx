import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const OPTIONS = [
  'Under $100K',
  '$100K – $250K',
  '$250K – $500K',
  '$500K – $1M',
  '$1M – $5M',
  '$5M+',
];

export default function StartTrialStep5() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-28 md:py-36">
      <div className="absolute inset-0 z-0">
        <img
          src="/industries/electrician.png"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white rounded-2xl p-10 md:p-14 max-w-lg w-full shadow-2xl"
      >
        {submitted ? (
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-[#3FAF97]/10 flex items-center justify-center mx-auto mb-5">
              <Check size={28} className="text-[#3FAF97]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111]">You're all set!</h2>
            <p className="mt-3 text-sm text-text-secondary">
              Check your email for next steps. Welcome to Lume.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#111] leading-snug">
              What's your estimated annual revenue?
            </h1>
            <p className="mt-2 text-sm text-text-secondary mb-8">
              This stays private — it just helps us recommend the right features for you.
            </p>

            <div className="flex flex-col gap-3">
              {OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelected(opt)}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    selected === opt
                      ? 'border-[#3FAF97] bg-[#3FAF97]/5 text-[#111]'
                      : 'border-[#e0e0e0] text-[#111] hover:border-[#bbb]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                if (selected) setSubmitted(true);
              }}
              disabled={!selected}
              className="w-full flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity group mt-6 disabled:opacity-40"
              style={{ background: 'linear-gradient(135deg, #3FAF97 0%, #1F5F4F 100%)' }}
            >
              Finish
            </button>

            <div className="mt-4">
              <div className="h-1.5 bg-[#e5e5e0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3FAF97] rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
