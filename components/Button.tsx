import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="bg-white border border-white inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium hover:bg-black hover:text-white text-black transition-all ease-in duration-75"
    />
  );
}
