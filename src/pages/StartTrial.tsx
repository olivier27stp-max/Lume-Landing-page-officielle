import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StartTrial() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-28 md:py-36">
      {/* Background image — black & white */}
      <div className="absolute inset-0 z-0">
        <img
          src="/industries/landscaping.png"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* White card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white rounded-2xl p-10 md:p-14 max-w-lg w-full shadow-2xl"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#111] leading-snug">
          Your free trial is now active
        </h1>
        <p className="mt-2 text-sm text-text-secondary mb-8">
          Welcome aboard! Fill in your details below and you'll have access to Lume right away. No credit card needed.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/start-trial/step-2');
          }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#111]">First and last name</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  className="px-4 py-3 border-2 border-[#e0e0e0] bg-white text-sm text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#3FAF97] transition-colors rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#111]">Phone number</label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  className="px-4 py-3 border-2 border-[#e0e0e0] bg-white text-sm text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#3FAF97] transition-colors rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity group mt-2"
                style={{ background: 'linear-gradient(135deg, #3FAF97 0%, #1F5F4F 100%)' }}
              >
                Next
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="h-1.5 bg-[#e5e5e0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#3FAF97] rounded-full" style={{ width: '20%' }} />
                </div>
              </div>
            </form>
      </motion.div>
    </div>
  );
}
