import Layout from '@/components/Layout';
import NewsGrid from '@/components/NewsGrid';
import EmailDigest from '@/components/EmailDigest';
import { fetchNewsServerSide } from '@/lib/fetchNews';

export default function Home({ indiaNews, worldNews }) {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Current Affairs Hub
            <span className="block text-sky-400 mt-2">India & Global</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Your trusted source for the latest current affairs. Stay informed
            with curated news for UPSC aspirants, investors, and discerning
            readers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#india-news"
              className="btn-primary inline-flex items-center"
            >
              India Headlines
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#world-news"
              className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Global Highlights
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* TODO: Ad banner slot - Below hero */}

      <div className="container-custom">
        <div id="india-news">
          <NewsGrid
            articles={indiaNews}
            title="India – Latest Headlines"
            subtitle="Top stories from across the nation"
          />
        </div>

        <div id="world-news">
          <NewsGrid
            articles={worldNews}
            title="World – Global Highlights"
            subtitle="International news that matters"
          />
        </div>

        <EmailDigest />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const [indiaNews, worldNews] = await Promise.all([
    fetchNewsServerSide({ country: 'in' }),
    fetchNewsServerSide({ country: 'us' }),
  ]);

  return {
    props: {
      indiaNews: indiaNews.slice(0, 6),
      worldNews: worldNews.slice(0, 6),
    },
  };
}
