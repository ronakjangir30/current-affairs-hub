import Layout from '@/components/Layout';
import NewsGrid from '@/components/NewsGrid';
import { fetchNewsServerSide } from '@/lib/fetchNews';

export default function PolityPage({ articles }) {
  return (
    <Layout
      title="Politics & Governance"
      description="Latest political news, government policies, elections, and governance updates. Essential for UPSC aspirants and politically aware citizens."
    >
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Politics & Governance
          </h1>
          <p className="text-gray-400 text-lg">
            Government policies, elections, and political analysis
          </p>
        </div>

        <NewsGrid articles={articles} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await fetchNewsServerSide({ category: 'politics' });

  return {
    props: {
      articles: articles.slice(0, 12),
    },
  };
}
