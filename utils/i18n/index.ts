import { ar, TranslationKey } from "./ar";

const dict = ar;

export const t = (key: TranslationKey): string => dict[key];
