import NewsCard from './NewsCard';

export default function NewsGrid({ articles, title, subtitle }) {
  if (!articles || articles.length === 0) {
    return (
      <section className="py-8">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
          </div>
        )}
        <div className="bg-slate-900 rounded-xl p-8 text-center border border-slate-800">
          <p className="text-gray-400">No articles available at the moment.</p>
          <p className="text-gray-500 text-sm mt-2">
            Please check back later for updates.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
        </div>
      )}

      {/* TODO: Ad slot - Within news grid (after 3rd article) */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={article.link || index} article={article} />
        ))}
      </div>
    </section>
  );
}
