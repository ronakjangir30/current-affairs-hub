import Layout from '@/components/Layout';
import NewsGrid from '@/components/NewsGrid';
import { fetchNewsServerSide } from '@/lib/fetchNews';

export default function WorldPage({ articles }) {
  return (
    <Layout
      title="World News"
      description="Latest global news and international affairs. Stay informed about world events, politics, and breaking news from around the globe."
    >
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            World News
          </h1>
          <p className="text-gray-400 text-lg">
            International headlines and global current affairs
          </p>
        </div>

        <NewsGrid articles={articles} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await fetchNewsServerSide({ country: 'us' });

  return {
    props: {
      articles: articles.slice(0, 12),
    },
  };
}
