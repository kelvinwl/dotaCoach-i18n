// i18n.ts
/**
 * i18n library for Dota Coach
 *
 * Format to be used: <div id="i18n_#ENGLISH TEXT#" class="i18n">${i18n.t(#ENGLISH TEXT)}</div>`
 */
import { i18n, Language } from "./i18n-data";
import * as DL from "../../src/utility/log";

const i18nVarToken = "####";

/**
 * Variable for current language
 * Default: en
 */
let currentLanguage = "en";

export function replaceVarTokens(
  i18nString: string,
  ...tokens: string[]
): string {
  // Builds regex
  const re = new RegExp(i18nVarToken, "");

  // Checks how many variables occur
  const occuCount = i18nString.split(i18nVarToken).length - 1;

  let strReplaced = i18nString;

  // Checks if variable occurances do not match parameter length
  if (occuCount != tokens.length) {
    DL.error(
      "i18n.replaceVarTokens: Params to replace / arr constraints do not match!"
    );
    return;
  }

  // Replaces every orrucance with function parameter list
  for (let i = 0; i < tokens.length; i++) {
    DL.log(tokens[i]);
    strReplaced = strReplaced.replace(re, tokens[i]);
  }

  return strReplaced;
}

/**
 * Function returns the text for a token in the currently set language
 *
 * Question:? Should we add a span?! with class i18n and id i18n_token, such that it could be updated autmatically on language change?! Probably not needed
 *
 * @param code
 * @returns
 */
export function t(token: string): string {
  if (!Object.prototype.hasOwnProperty.call(i18n.text, token)) {
    DL.log(`18n.t(): Invalid code '${token}'`);
    const err = new Error();
    console.warn(err.stack);
    token = "ERROR";
  }

  if (Object.prototype.hasOwnProperty.call(i18n.text[token], currentLanguage)) {
    return i18n.text[token][currentLanguage];
  } else {
    return i18n.text[token].en;
  }
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
 * Checks if langcode is available in config.
 * Returnn "en" if not found.
 *
 * @param language 'en', 'fr', 'de', etc.
 * @returns langcode
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
 * Gets full language name from langCode
 *
 * @param language optional parameter, language short name such as 'en', 'de' and 'fr'. If not provided, language name of current language is returned
 * @returns Full language name of langCode
 */
export function getLanguageName(language?: string): string {
  DL.log(`i18n.getLanguageName(): currentLanguage = ${currentLanguage}`);
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
  updateHTMLElement(document.body);
}

/**
 * Function updates the element itself if it as i18n element (has class 'i18n') or otherwise all contained elements
 *
 * @param htmlElement element to be update
 */
export function updateHTMLElement(htmlElement: HTMLElement) {
  if (htmlElement.classList.contains("i18n")) {
    // Update this  element
    updatei18nElement(htmlElement);
  } else {
    const elements = htmlElement.getElementsByClassName("i18n");
    for (const element of elements) {
      updatei18nElement(element);
    }
  }
}

function updatei18nElement(element: Element) {
  const i18nToken = element.id
    .replace("i18n_", "")
    .replace("i18x_", "")
    .replace("i18y_", "");
  const innerHTML = t(i18nToken);

  element.innerHTML = innerHTML;
  configureWebLinks(element);
}

function configureWebLinks(element: Element) {
  const i18nToken = element.id
    .replace("i18n_", "")
    .replace("i18x_", "")
    .replace("i18y_", "");
  let linkId = 0;

  // Create unique IDs for webLinks
  let innerHTML = element.innerHTML;
  innerHTML = innerHTML.replace(/id="webLink"/g, () => {
    return `id="webLink-${i18nToken}-${linkId++}"`;
  });
  element.innerHTML = innerHTML;

  // Add listeners for webLinks
  for (let i = 0; i < linkId; i++) {
    console.log(`*** webLink-${i18nToken}-${i}`);
    const e = document.getElementById(`webLink-${i18nToken}-${i}`);
    e.addEventListener("click", () => {
      overwolf.utils.openUrlInOverwolfBrowser(i18n.text[i18nToken].webLinks[i]);
    });
  }
}

/**
 * Inline text with spans inside divs.
 *
 * @param code Json ID of the text to be displayed
 * @returns Builds HTML span string
 */
export function span(code: string): string {
  return `<span id="i18n_${code}" class="i18n">${t(code)}</span>`;
}

/**
 * Builds div with localized text
 *
 * @param code Json ID of the text to be displayed
 * @returns Builds HTML div string
 */
export function div(code: string): string {
  /*DL.log(`*** i18n.div(${code})`);*/
  return `<div id="i18n_${code}" class="i18n">${t(code)}</div>`;
}
