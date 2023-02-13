import GitHubIcon from "./Icons/GithubIcon.tsx";
import StarIcon from "./Icons/StarIcon.tsx";

export default function LinkToGithub({ stars }: { stars: number }) {
  return (
    <div class="flex justify-center items-center">
      <a
        class="flex items-center no-underline text-black"
        href="https://github.com/vab1997/twitter-intent-generator"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <div
          class="flex items-center"
          title="Go to Intent Gen GitHub repo"
        >
          <div class="flex h-6 items-center rounded-l border border-r-0 bg-white px-2 text-[13px] font-semibold	leading-3">
            <StarIcon />
            {stars}
          </div>
          <div class="inline-block w-[18px] overflow-hidden">
            <div class="h-6 w-[17px] origin-top-left rotate-45 transform bg-white border border-l-0">
            </div>
          </div>
        </div>
        <GitHubIcon />
      </a>
    </div>
  );
}
