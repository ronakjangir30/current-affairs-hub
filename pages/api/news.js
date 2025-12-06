export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { country, category, q, page = 1, language = 'en' } = req.query;

  const apiKey = process.env.NEWSDATA_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'API key not configured',
      message: 'Please set NEWSDATA_API_KEY environment variable',
      articles: getSampleArticles(country, category),
    });
  }

  try {
    const params = new URLSearchParams({
      apikey: apiKey,
      language: language,
    });

    if (country) params.append('country', country);
    if (category) params.append('category', category);
    if (q) params.append('q', q);

    const response = await fetch(
      `https://newsdata.io/api/1/news?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`NewsData API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'success') {
      throw new Error(data.results?.message || 'API returned an error');
    }

    const articles = (data.results || []).map((item) => ({
      title: item.title,
      description: item.description,
      link: item.link,
      source: item.source_id || item.source_name,
      pubDate: item.pubDate,
      country: item.country?.[0] || country,
      category: item.category?.[0] || category,
      imageUrl: item.image_url,
    }));

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    return res.status(200).json({ articles });
  } catch (error) {
    console.error('News API Error:', error.message);
    return res.status(200).json({
      articles: getSampleArticles(country, category),
      error: error.message,
    });
  }
}

function getSampleArticles(country, category) {
  const sampleArticles = [
    {
      title: 'Welcome to Current Affairs Hub',
      description:
        'This is a sample article. Configure your NEWSDATA_API_KEY environment variable to fetch live news from NewsData.io. Get your free API key at newsdata.io.',
      link: 'https://newsdata.io',
      source: 'Current Affairs Hub',
      pubDate: new Date().toISOString(),
      country: country || 'global',
      category: category || 'general',
      imageUrl: null,
    },
    {
      title: 'How to Get Your Free News API Key',
      description:
        'Visit newsdata.io and sign up for a free account. You will receive 200 API credits per day on the free plan, which is sufficient for personal use and development.',
      link: 'https://newsdata.io/register',
      source: 'NewsData.io',
      pubDate: new Date().toISOString(),
      country: country || 'global',
      category: category || 'general',
      imageUrl: null,
    },
    {
      title: 'Setting Up Environment Variables',
      description:
        'Add your API key as NEWSDATA_API_KEY in your environment variables. On Vercel, go to Settings > Environment Variables and add it there.',
      link: 'https://vercel.com/docs/environment-variables',
      source: 'Deployment Guide',
      pubDate: new Date().toISOString(),
      country: country || 'global',
      category: category || 'general',
      imageUrl: null,
    },
  ];

  return sampleArticles;
}
