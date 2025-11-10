import { keys, defaultLanguage } from "./keys"

export type langType = keyof typeof keys;

export const langs = function (): string[] {
    let langs = [];
    for (let key in keys) {
        langs.push(key);
    }
    return langs;
}();

export function getLocale(lang: keyof typeof keys, key: keyof typeof keys[typeof defaultLanguage]) {
    if (lang in keys) return key in (keys[lang] as any) ? keys[lang][key] : keys[defaultLanguage][key];
    return keys[defaultLanguage][key] 
}

export async function _getStaticPaths() {
	return langs.map((lang) => {
		return { params: { locale: lang } }
	});
}