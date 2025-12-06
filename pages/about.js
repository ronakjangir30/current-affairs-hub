import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout
      title="About Us"
      description="Learn about Current Affairs Hub - your trusted source for India and global news."
    >
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Current Affairs Hub
          </h1>

          <div className="prose prose-invert prose-lg">
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 mb-8">
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Current Affairs Hub is dedicated to providing accurate,
                up-to-date news and current affairs coverage for readers across
                India and the world. We curate the most important stories to
                help you stay informed and make better decisions.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 mb-8">
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Who We Serve
              </h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-3">•</span>
                  <span>
                    <strong>UPSC Aspirants:</strong> Comprehensive current
                    affairs coverage essential for competitive exams
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-3">•</span>
                  <span>
                    <strong>Investors:</strong> Business and economy news to
                    make informed financial decisions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-3">•</span>
                  <span>
                    <strong>General Readers:</strong> Anyone who wants to stay
                    informed about India and the world
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
              <h2 className="text-xl font-semibold text-sky-400 mb-4">
                Our Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  India News
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  World News
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  Economy
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  Science & Tech
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  Politics
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-lg">
                  And More...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
