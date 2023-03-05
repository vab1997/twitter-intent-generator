import { resultURL } from "../signals/resultURL.ts";

export default function useGenerator(
  { text, url }: { text: string; url: string },
) {
  const counterCharacter = 280 - url.length - text.length;

  const urlResult = url !== ""
    ? `?url=${url}&text=${encodeURIComponent(text)}`
    : `?text=${encodeURIComponent(text)}`;

  const intentResult = `https://twitter.com/intent/tweet${urlResult}`;

  resultURL.value = intentResult;

  return {
    counterCharacter,
  };
}
