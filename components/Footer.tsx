import GitHubIcon from "./Icons/GithubIcon.tsx";

export default function Footer() {
  return (
    <footer class="flex items-center justify-center py-4 w-full bg-black">
      <div class="flex items-center justify-center gap-2">
        <span class="text-white tracking-tight">Made with ❤️ by</span>
        <a
          class="flex items-center gap-1 text-white tracking-tight hover:underline hover:text-gray-300 transition-all ease-in duration-75"
          href="https://github.com/vab1997"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <GitHubIcon />
          Victor Bejas
        </a>
      </div>
    </footer>
  );
}
