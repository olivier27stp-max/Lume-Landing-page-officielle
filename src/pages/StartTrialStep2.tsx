import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const INDUSTRIES = [
  'HVAC',
  'Window Cleaning',
  'Roofing',
  'Paver',
  'Power Washing',
  'LED Lighting',
  'Lawn Care',
  'Landscaping',
  'Painting',
  'Fencing',
  'Auto Detailing',
  'Pest Control',
  'Plumbing',
  'Electrician',
  'Cleaning',
  'Junk Removal',
  'Construction',
  'Renovation',
  'Pool Maintenance',
  'Excavation',
  'Other',
];

export default function StartTrialStep2() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-28 md:py-36">
      {/* Background image — black & white */}
      <div className="absolute inset-0 z-0">
        <img
          src="/industries/excavation.png"
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
          Tell us about your business
        </h1>
        <p className="mt-2 text-sm text-text-secondary mb-8">
          This helps us tailor Lume to your workflow from day one.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/start-trial/step-3');
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#111]">Company name</label>
            <input
              type="text"
              required
              placeholder="Your company name"
              className="px-4 py-3 border-2 border-[#e0e0e0] bg-white text-sm text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#3FAF97] transition-colors rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#111]">Industry</label>
            <select
              required
              className="px-4 py-3 border-2 border-[#e0e0e0] bg-white text-sm text-[#111] focus:outline-none focus:border-[#3FAF97] transition-colors rounded-lg"
            >
              <option value="">Select your industry</option>
              {INDUSTRIES.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#111]">Website</label>
            <input
              type="text"
              placeholder="https://yourcompany.com"
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
              <div className="h-full bg-[#3FAF97] rounded-full" style={{ width: '40%' }} />
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
