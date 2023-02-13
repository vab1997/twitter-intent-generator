import { Head } from "$fresh/runtime.ts";
import InputText from "../islands/InputText.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import ResultIntent from "../islands/ResultIntent.tsx";

interface StarRepo {
  stargazers_count: number;
}

export const handler: Handlers<StarRepo> = {
  async GET(req, ctx) {
    const repos = await fetch("https://api.github.com/users/vab1997/repos")
      .then((res) => {
        return res.json();
      }).then((res) => res);

    const repo = repos.filter((repo: { name: string }) =>
      repo.name === "twitter-intent-generator"
    );
    const stars = repo[0].stargazers_count;

    return ctx.render({ stargazers_count: stars });
  },
};

export default function Home(props: PageProps<StarRepo>) {
  const { data } = props;
  const { stargazers_count } = data;

  return (
    <>
      <Head>
        <title>Twitter Intent Generator</title>
        <meta name="description" content="Twitter Intent Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body class="p-4 mx-auto max-w-screen-md bg-black">
        <Header stargazers_count={stargazers_count} />
        <main>
          <InputText />
          <ResultIntent />
        </main>
        <Footer />
      </body>
    </>
  );
}
