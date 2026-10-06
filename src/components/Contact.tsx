import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/gymData';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  program: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  program?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    program: 'Strength Training',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number (at least 8 digits).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or question.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate validation & simulated client feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        program: 'Strength Training',
        message: ''
      });
      setErrors({});

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF2A2A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
              GET IN TOUCH
            </span>
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            LET’S GET YOU MOVING
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Ready to schedule a facility tour, inquire about membership, or consult a trainer? Our concierge team responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800/90 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-base font-bold text-white">Location</h3>
                    <span className="text-[10px] text-neutral-500 uppercase font-semibold">(Sample Address)</span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {BUSINESS_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800/90 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-base font-bold text-white">Phone</h3>
                    <span className="text-[10px] text-neutral-500 uppercase font-semibold">(Sample)</span>
                  </div>
                  <p className="text-sm text-neutral-300 font-medium">
                    {BUSINESS_CONFIG.phoneDisplay}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">Toll-free member concierge</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800/90 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading text-base font-bold text-white">Email</h3>
                    <span className="text-[10px] text-neutral-500 uppercase font-semibold">(Sample)</span>
                  </div>
                  <p className="text-sm text-neutral-300 font-medium">
                    {BUSINESS_CONFIG.email}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">Inquiries & membership support</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800/90 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white mb-1">Opening Hours</h3>
                  <p className="text-sm text-neutral-300">
                    {BUSINESS_CONFIG.operatingHours.weekdays}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    {BUSINESS_CONFIG.operatingHours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-neutral-800 shadow-2xl relative">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-neutral-400 text-sm mb-8">
                Fill in the details below to request a complimentary gym day-pass or speak with a head coach.
              </p>

              {/* Success Notification Banner */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-600/60 text-emerald-200 flex items-start gap-3 animate-[fadeIn_0.3s_ease-out]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Thank You! Message Received.</h4>
                    <p className="text-xs text-emerald-300/90 mt-0.5">
                      Your inquiry has been logged. Our fitness advisor will contact you within 24 hours. (Sample demonstration response)
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3.5 rounded-xl bg-neutral-900 border text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF2A2A] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-neutral-800 focus:border-[#FF2A2A]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Phone in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-neutral-900 border text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF2A2A] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-[#FF2A2A]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 555-0199"
                      className={`w-full px-4 py-3.5 rounded-xl bg-neutral-900 border text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF2A2A] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-neutral-800 focus:border-[#FF2A2A]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Select Program */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Program of Interest
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#FF2A2A] focus:ring-1 focus:ring-[#FF2A2A] transition-colors"
                  >
                    <option value="Strength Training">Strength Training</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Cardio Training">Cardio Training</option>
                    <option value="Functional Training">Functional Training</option>
                    <option value="Personal Training">Personal Training (1-on-1)</option>
                    <option value="General Club Tour">General Membership & Facility Tour</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness background and goals..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-neutral-900 border text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF2A2A] transition-colors ${
                      errors.message ? 'border-red-500' : 'border-neutral-800 focus:border-[#FF2A2A]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#FF2A2A] hover:bg-[#ff3b3b] disabled:opacity-70 text-white font-heading font-black text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.65)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
