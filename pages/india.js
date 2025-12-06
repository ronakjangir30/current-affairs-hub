import Layout from '@/components/Layout';
import NewsGrid from '@/components/NewsGrid';
import { fetchNewsServerSide } from '@/lib/fetchNews';

export default function IndiaPage({ articles }) {
  return (
    <Layout
      title="India News"
      description="Latest current affairs and news from India. Stay updated with politics, economy, sports, and more from across the nation."
    >
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            India Current Affairs
          </h1>
          <p className="text-gray-400 text-lg">
            Comprehensive coverage of news and events from across India
          </p>
        </div>

        <NewsGrid articles={articles} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await fetchNewsServerSide({ country: 'in' });

  return {
    props: {
      articles: articles.slice(0, 12),
    },
  };
}
