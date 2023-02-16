import { Button } from "../components/Button.tsx";
import { resultURL } from "../signals/resultURL.ts";
import CopyIcon from "../components/Icons/CopyIcon.tsx";
import TwitterIcon from "../components/Icons/TwitterIcon.tsx";

export default function ShareButton() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(resultURL.value);
  };

  return (
    <div class="flex items-center justify-center gap-4 mt-2">
      <Button onClick={copyToClipboard}>
        <CopyIcon width={24} height={24} />
        Copy to clipboard
      </Button>
      <a
        class="bg-white border border-white inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium hover:bg-black hover:text-white text-black transition-all ease-in duration-75"
        href={resultURL.value}
        target="_blank"
        rel="nofollow noreferrer"
      >
        <TwitterIcon width={24} height={24} />
        Share on twitter
      </a>
    </div>
  );
}
