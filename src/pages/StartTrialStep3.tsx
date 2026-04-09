import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OPTIONS = [
  'First year',
  '1–2 years',
  '3–5 years',
  '5–10 years',
  '10+ years',
];

export default function StartTrialStep3() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-28 md:py-36">
      <div className="absolute inset-0 z-0">
        <img
          src="/industries/pool.png"
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
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#111] leading-snug">
          How many years have you been in business?
        </h1>
        <p className="mt-2 text-sm text-text-secondary mb-8">
          No wrong answer — we just want to understand where you're at.
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
            if (selected) navigate('/start-trial/step-4');
          }}
          disabled={!selected}
          className="w-full flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity group mt-6 disabled:opacity-40"
          style={{ background: 'linear-gradient(135deg, #3FAF97 0%, #1F5F4F 100%)' }}
        >
          Next
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        <div className="mt-4">
          <div className="h-1.5 bg-[#e5e5e0] rounded-full overflow-hidden">
            <div className="h-full bg-[#3FAF97] rounded-full" style={{ width: '60%' }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
