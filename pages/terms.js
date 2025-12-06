import Layout from '@/components/Layout';

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service"
      description="Terms of Service for Current Affairs Hub - Read our terms and conditions."
    >
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Terms of Service
          </h1>

          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Current Affairs Hub, you accept and agree
                to be bound by the terms and provisions of this agreement. If
                you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Use of Content
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The content on Current Affairs Hub is aggregated from various
                news sources for informational purposes only. We provide links
                to original articles and credit the respective sources. All
                content remains the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                User Responsibilities
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Use the website for lawful purposes only</li>
                <li>• Do not attempt to harm or disrupt the website</li>
                <li>• Respect intellectual property rights</li>
                <li>• Provide accurate information when interacting with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Current Affairs Hub is an aggregator service. We strive to
                provide accurate and up-to-date information, but we make no
                warranties or representations about the accuracy, reliability,
                or completeness of the content. Users should verify information
                from original sources.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Current Affairs Hub shall not be liable for any direct,
                indirect, incidental, consequential, or punitive damages arising
                from your use of the website or any content therein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time.
                Continued use of the website after changes constitutes
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Contact
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For questions regarding these terms, please visit our{' '}
                <a href="/contact" className="text-sky-400 hover:text-sky-300">
                  contact page
                </a>
                .
              </p>
            </section>

            <p className="text-gray-500 text-sm pt-4 border-t border-slate-700">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
