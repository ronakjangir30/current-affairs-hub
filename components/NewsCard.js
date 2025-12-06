import { format, parseISO } from 'date-fns';

export default function NewsCard({ article }) {
  const {
    title,
    description,
    link,
    source,
    pubDate,
    country,
    category,
    imageUrl,
  } = article;

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    try {
      const date = parseISO(dateString);
      return format(date, 'MMM d, yyyy');
    } catch {
      return 'Recently';
    }
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <article className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 card-hover flex flex-col h-full">
      {imageUrl && (
        <div className="aspect-video overflow-hidden bg-slate-800">
          <img
            src={imageUrl}
            alt={title || 'News image'}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
          <span className="font-medium text-sky-400">{source || 'News'}</span>
          <time dateTime={pubDate}>{formatDate(pubDate)}</time>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 leading-tight">
          {title || 'Untitled Article'}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {truncateText(description, 150) || 'No description available.'}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {country && (
            <span className="bg-slate-800 text-gray-300 text-xs px-2 py-1 rounded-full">
              {country.toUpperCase()}
            </span>
          )}
          {category && (
            <span className="bg-sky-500/20 text-sky-400 text-xs px-2 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors duration-200 mt-auto"
        >
          Read full article
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
