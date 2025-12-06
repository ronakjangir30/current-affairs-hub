import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const pageTitle = title
    ? `${title} | Current Affairs Hub`
    : 'Current Affairs Hub - India & Global News';
  const pageDescription =
    description ||
    'Stay updated with the latest current affairs from India and around the world. Perfect for UPSC aspirants, investors, and informed readers.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* TODO: Ad banner slot - Top of page */}
        {/* 
          <div className="container-custom py-2">
            <div className="bg-slate-800 h-24 rounded-lg flex items-center justify-center text-gray-500">
              Advertisement
            </div>
          </div>
        */}

        <main className="flex-grow">{children}</main>

        {/* TODO: Ad banner slot - Bottom of page */}
        {/* 
          <div className="container-custom py-4">
            <div className="bg-slate-800 h-24 rounded-lg flex items-center justify-center text-gray-500">
              Advertisement
            </div>
          </div>
        */}

        <Footer />
      </div>
    </>
  );
}
