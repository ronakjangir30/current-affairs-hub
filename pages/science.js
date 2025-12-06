import Layout from '@/components/Layout';
import NewsGrid from '@/components/NewsGrid';
import { fetchNewsServerSide } from '@/lib/fetchNews';

export default function SciencePage({ articles }) {
  return (
    <Layout
      title="Science & Technology"
      description="Latest science news, technology updates, innovation, space exploration, and scientific discoveries."
    >
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Science & Technology
          </h1>
          <p className="text-gray-400 text-lg">
            Innovations, discoveries, and tech breakthroughs
          </p>
        </div>

        <NewsGrid articles={articles} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await fetchNewsServerSide({ category: 'science' });

  return {
    props: {
      articles: articles.slice(0, 12),
    },
  };
}
