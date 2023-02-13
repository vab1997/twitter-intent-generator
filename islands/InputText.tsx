import { useState } from "preact/hooks";
import useGenerator from "../hooks/useGenerator.ts";

export default function InputText() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const { counterCharacter } = useGenerator({ text, url });

  return (
    <section class="flex flex-col items-center justify-center w-full">
      <div class="flex flex-col justify-center mt-6 w-3/4">
        <label class="text-xl font-bold text-white">Tweet text</label>
        <textarea
          class="bg-transparent w-full p-2 mt-2 text-white bg-white rounded-md resize-none border border-gray-400 hover:border-gray-300"
          placeholder="Enter your tweet text here"
          rows={4}
          maxLength={280}
          value={text}
          onInput={(e) => setText((e.target as HTMLInputElement).value)}
        />
        <small class="text-white italic">
          Character remaining: {counterCharacter}
        </small>

        <label class="text-xl font-bold text-white mt-2">Url</label>
        <input
          class="bg-transparent w-full p-2 mt-2 text-white rounded-md border border-gray-400 hover:border-gray-300"
          placeholder="Enter your url here"
          type="text"
          value={url}
          onInput={(e) => setUrl((e.target as HTMLInputElement).value)}
        />
      </div>
    </section>
  );
}
