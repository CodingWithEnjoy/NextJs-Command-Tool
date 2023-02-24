import Head from "next/head";

const SEO = (slug, title, description) => {
  const t = `${title} • Dev Cheats`;
  if (description === undefined) {
    description = `Commands and usage examples for ${title}`;
  }

  return (
    <Head>
      <title>{slug}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={t} key="title" />
      <meta property="og:description" content={description} key="description" />

      <meta name="twitter:title" content={t} key="title" />
      <meta
        name="twitter:description"
        content={description}
        key="description"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
