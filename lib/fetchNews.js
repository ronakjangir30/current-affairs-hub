export async function fetchNews(options = {}) {
  const { country, category, q, language = 'en' } = options;

  const params = new URLSearchParams();
  if (country) params.append('country', country);
  if (category) params.append('category', category);
  if (q) params.append('q', q);
  if (language) params.append('language', language);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const url = `${baseUrl}/api/news?${params.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function fetchNewsServerSide(options = {}) {
  const { country, category, q, language = 'en' } = options;

  const apiKey = process.env.NEWSDATA_API_KEY;

  if (!apiKey) {
    return getSampleArticles(country, category);
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
      return getSampleArticles(country, category);
    }

    return (data.results || []).map((item) => ({
      title: item.title,
      description: item.description,
      link: item.link,
      source: item.source_id || item.source_name,
      pubDate: item.pubDate,
      country: item.country?.[0] || country,
      category: item.category?.[0] || category,
      imageUrl: item.image_url,
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return getSampleArticles(country, category);
  }
}

function getSampleArticles(country, category) {
  return [
    {
      title: 'Welcome to Current Affairs Hub',
      description:
        'Configure your NEWSDATA_API_KEY environment variable to fetch live news. Get your free API key at newsdata.io.',
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
        'Visit newsdata.io and sign up for a free account to receive 200 API credits per day.',
      link: 'https://newsdata.io/register',
      source: 'NewsData.io',
      pubDate: new Date().toISOString(),
      country: country || 'global',
      category: category || 'general',
      imageUrl: null,
    },
    {
      title: 'Deploy to Vercel for Free',
      description:
        'This site is optimized for Vercel free tier deployment. Add your environment variables in the Vercel dashboard.',
      link: 'https://vercel.com',
      source: 'Deployment Guide',
      pubDate: new Date().toISOString(),
      country: country || 'global',
      category: category || 'general',
      imageUrl: null,
    },
  ];
}
