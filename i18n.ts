/**
 * i18n library for Dota Coach
 *
 * Format to be used: <div id="i18n_#ENGLISH TEXT#" class="i18n">${i18n.t(#ENGLISH TEXT)}</div>`
 */
import { i18n, Language } from "./i18n-data";
import * as DotaLogger from "../../src/utility/log";

let currentLanguage = "en";

/**
 * Function returns the text in the right language
 *
 * @param code
 * @returns
 */
export function t(code: string) {
  if (!Object.prototype.hasOwnProperty.call(i18n.text, code)) {
    DotaLogger.log(`localization.t(): Invalid code '${code}'`);
    const err = new Error();
    console.warn(err.stack);
    code = "ERROR";
  }

  if (Object.prototype.hasOwnProperty.call(i18n.text[code], currentLanguage)) {
    return i18n.text[code][currentLanguage];
  } else if (currentLanguage == "en") {
    return code;
  } else {
    return code;
  }
}

/**
 * This function initiates the library.
 * It needs to be called before the library can be used.
 *
 * @param language Supported languages: 'en', 'ru', 'zh', 'id'
 */
export function setLanguage(language: string) {
  const lang = findLanguage(language);
  currentLanguage = lang;
}
export function findLanguage(language: string): string {
  const ls = i18n.config.languages;
  for (const l of ls) {
    if (l.code == language) {
      return language;
    }
  }
  return "en"; // Default language
}

export function getLanguage(): string {
  return currentLanguage;
}

export function getLanguageName(): string {
  DotaLogger.log(
    `localization.getLanguageName(): currentLanguage = ${currentLanguage}`
  );
  return i18n.config.languages[currentLanguage];
}

/**
 *
 * @returns Array of { <language code>: <language name> }
 */
export function getLanguages(): Language[] {
  return i18n.config.languages;
}

/**
 * Function update all static HTML elements declared as 'i18n' (class needs to be set to 'i18n' and html id equlas to i18n_<JSON code>)
 */
export function updateHTML() {
  const elements = document.getElementsByClassName("i18n");
  for (const element of elements) {
    element.innerHTML = t(element.id.replace("i18n_", "").replace("i18x_", ""));
  }
}

export function div(code: string) {
  return `<div id="i18n_${code}" class="i18n">${t(code)}</div>`;
}
