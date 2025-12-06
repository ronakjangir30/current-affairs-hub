import Layout from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for Current Affairs Hub - Learn how we protect your data."
    >
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Privacy Policy
          </h1>

          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We collect information you provide directly to us, such as when
                you subscribe to our newsletter, contact us, or interact with
                our website. This may include your email address and any other
                information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                How We Use Your Information
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>• To send you our daily current affairs digest (if subscribed)</li>
                <li>• To respond to your comments, questions, and requests</li>
                <li>• To improve our website and services</li>
                <li>• To monitor and analyze trends, usage, and activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties. This does not
                include trusted third parties who assist us in operating our
                website, conducting our business, or servicing you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies to enhance user experience. You can
                choose to disable cookies through your browser settings, though
                this may affect your experience on our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Third-Party Links
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website contains links to external news sources. These
                third-party sites have separate and independent privacy
                policies. We have no responsibility or liability for the content
                and activities of these linked sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us through our{' '}
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
