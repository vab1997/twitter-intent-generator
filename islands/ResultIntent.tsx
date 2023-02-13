import { resultURL } from "../signals/resultURL.ts";
import ShareButton from "../islands/ShareButtons.tsx";

export default function ResultIntent() {
  return (
    <section class="flex flex-col items-center justify-center gap-4 mb-2 w-full mt-4">
      <div class="flex flex-col justify-center gap-2 w-3/4">
        <label class="text-xl font-bold text-white pb-1">
          Result generator
        </label>
        <span class="text-white p-2 border border-gray-300 rounded-md truncate">
          {resultURL.value}
        </span>
      </div>
      <ShareButton />
    </section>
  );
}
