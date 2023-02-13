import { resultURL } from "../signals/resultURL.ts";

const SYMBOLS = {
  SPACE: "+",
  LINE_BREAK: "%0A",
  SLASH: "%2F",
  COLON: "%3A",
  DOT: "%2E",
  DOBLE_DOT: "%3A",
  AT: "%40",
};

export default function useGenerator(
  { text, url }: { text: string; url: string },
) {
  const counterCharacter = 280 - url.length - text.length;

  const textResult = text
    .replace(/\n/g, SYMBOLS.LINE_BREAK)
    .replace(/\s/g, SYMBOLS.SPACE)
    .replace(/\//g, SYMBOLS.SLASH)
    .replace(/:/g, SYMBOLS.COLON)
    .replace(/\./g, SYMBOLS.DOT)
    .replace(/\@/g, SYMBOLS.AT);

  const urlResult = url !== "" ? `?url=${url}` : "";

  const textResultWithUrl = url !== ""
    ? `${urlResult}&text=${textResult}`
    : `?text=${textResult}`;

  const finalResult = `https://twitter.com/intent/tweet${textResultWithUrl}`;

  resultURL.value = finalResult;

  return {
    counterCharacter,
  };
}
