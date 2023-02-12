import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import TwitterIcon from "../components/Icons/TwitterIcon.tsx";
import InputText from "../islands/InputText.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <body class="p-4 mx-auto max-w-screen-md bg-black">
        <main>
          <h1 class="flex items-center justify-center gap-8 text-4xl font-bold text-[#00AAEC] text-transparent bg-clip-text bg-gradient-to-r from-[#00AAEC] to-blue-100">
            <span class="text-[#00AAEC]">
              <TwitterIcon width={96} height={96} />
            </span>
            Twitter intent generator
          </h1>
          <InputText />
        </main>
      </body>
    </>
  );
}
