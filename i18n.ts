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
    DotaLogger.log(`18n.t(): Invalid code '${code}'`);
    const err = new Error();
    console.warn(err.stack);
    code = "ERROR";
  }

  if (Object.prototype.hasOwnProperty.call(i18n.text[code], currentLanguage)) {
    return i18n.text[code][currentLanguage];
  } else {
    return i18n.text[code].en;
  }

  /*if (currentLanguage == "en") {
    return code;
  } else {
    return code;
  }*/
}

/**
 * This function initiates the library by setting the language.
 * This function needs to be called before the library can be used.
 *
 * @param language Supported languages: 'en', 'ru', 'zh', 'id'
 */
export function setLanguage(language: string) {
  const lang = findLanguage(language);
  currentLanguage = lang;
}

/**
 * Function checks if language is available in Dota Coach.
 * @param language 'en', 'fr', 'de', etc.
 * @returns
 */
export function isLanguageAvailable(language: string): boolean {
  const ls = i18n.config.languages;
  for (const l of ls) {
    if (l.code == language) {
      return true;
    }
  }
  return false;
}

/**
 * Returns
 * @param language 'en', 'fr', 'de', etc.
 * @returns
 */
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

/**
 *
 * @param language optional parameter, language short name such as 'en', 'de' and 'fr'. If not provided, language name of current language is returned
 * @returns
 */
export function getLanguageName(language?: string): string {
  DotaLogger.log(
    `i18n.getLanguageName(): currentLanguage = ${currentLanguage}`
  );
  if (language == undefined) {
    return i18n.config.languages[currentLanguage];
  } else {
    const ls = i18n.config.languages;
    for (const l of ls) {
      if (l.code == language) {
        return l.name;
      }
    }
    return i18n.config.languages["en"]; // Returns english if no name is found
  }
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

/**
 * Function update static HTML elements declared as 'i18n' within an element
 */
export function updateHTMLElement(htmlElement: HTMLElement) {
  const elements = htmlElement.getElementsByClassName("i18n");
  for (const element of elements) {
    element.innerHTML = t(element.id.replace("i18n_", "").replace("i18x_", ""));
  }
}

export function div(code: string) {
  /*DotaLogger.log(`*** i18n.div(${code})`);*/
  return `<div id="i18n_${code}" class="i18n">${t(code)}</div>`;
}
