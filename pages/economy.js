import Layout from '@/components/Layout';
import NewsGrid from '@/components/NewsGrid';
import { fetchNewsServerSide } from '@/lib/fetchNews';

export default function EconomyPage({ articles }) {
  return (
    <Layout
      title="Economy & Business"
      description="Latest business news, economic updates, market trends, and financial analysis. Stay informed about the economy."
    >
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Economy & Business
          </h1>
          <p className="text-gray-400 text-lg">
            Markets, finance, and economic developments
          </p>
        </div>

        <NewsGrid articles={articles} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await fetchNewsServerSide({ category: 'business' });

  return {
    props: {
      articles: articles.slice(0, 12),
    },
  };
}
