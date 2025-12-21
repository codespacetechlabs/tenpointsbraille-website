import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function toPath(text: string): string {
  return "/" + encodeURIComponent(text.replace(/\s+/g, "").toLowerCase());
}
