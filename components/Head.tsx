import { Head } from "$fresh/runtime.ts";

export default function HeadPage() {
  const title = "Twitter Intent Generator";
  const description = "Page for generate Intent Generator for Twitter";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://twitter-intent-generator.deno.dev" />

      <meta
        property="og:url"
        content="https://twitter-intent-generator.deno.dev/og.png"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@victorbejas" />
      <meta name="twitter:domain" content="https://twitter.com/victorbejas" />
      <meta name="twitter:site" content="@victorbejas" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
