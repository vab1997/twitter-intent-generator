import ShareButton from "../islands/ShareButtons.tsx";

export default function ResultIntent({ result }: { result: string }) {
  return (
    <section class="flex flex-col items-center justify-center gap-4 w-full mt-8">
      <div class="flex flex-col justify-center gap-2 w-3/4">
        <label class="text-xl font-bold text-white">
          Result generator
        </label>
        <span class="text-white p-4 border border-gray-300 rounded-md truncate">
          {result}
        </span>
      </div>
      <ShareButton result={result} />
    </section>
  );
}
