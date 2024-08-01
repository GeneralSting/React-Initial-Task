import { locales } from "..";

type LocaleKeys = keyof typeof locales;


export type Language = {
  abbr: LocaleKeys;
  name: string;
}
