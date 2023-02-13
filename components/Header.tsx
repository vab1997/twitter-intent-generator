import TwitterIcon from "./Icons/TwitterIcon.tsx";
import LinkToGithub from "./LinkToGithub.tsx";

export default function Header(
  { stargazers_count }: { stargazers_count: number },
) {
  return (
    <header>
      <h1 class="flex items-center justify-center gap-8 text-4xl font-bold text-[#00AAEC] text-transparent bg-clip-text bg-gradient-to-r from-[#00AAEC] to-blue-200">
        <span class="text-[#00AAEC]">
          <TwitterIcon width={96} height={96} />
        </span>
        Twitter intent generator
      </h1>
      <LinkToGithub stars={stargazers_count} />
    </header>
  );
}
