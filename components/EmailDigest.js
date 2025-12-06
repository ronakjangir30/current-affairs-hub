import { useState } from 'react';

export default function EmailDigest() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl my-12">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Daily Current Affairs Digest
          </h2>
          <p className="text-gray-400 mb-8">
            Get the top headlines delivered to your inbox every morning. Perfect
            for UPSC preparation and staying informed.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <p className="text-green-400 mt-4 text-sm">
              Thank you for subscribing! You will receive our daily digest soon.
            </p>
          )}

          <p className="text-gray-500 text-xs mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
