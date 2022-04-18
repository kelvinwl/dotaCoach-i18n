// i18n.ts
/**
 * i18n library for Dota Coach
 *
 * Format to be used: <div id="i18n_#ENGLISH TEXT#" class="i18n">${i18n.t(#ENGLISH TEXT)}</div>`
 */
import { Languages } from "./i18n-languages";
import * as DL from "../../src/utility/log";

export type Translations = {
  [key: string]: Translation;
};

export type Translation = {
  en: string;
  de?: string;
  fr?: string;
  ru?: string;
  id?: string;
  fil?: string;
  zh?: string;
  br?: string;
  es?: string;
  webLinks?: string[]; // Web links to be inserted into <span id='webLink>TEXT</span> elements
};

export interface Language {
  code: string;
  name: string;
}

/**
 * Variable template that will be replaced with dynamic content
 * from datamanager.
 */
const i18nVarToken = "####";

/**
 * Variable Token values for a given i18n token.
 * Example: "isSmurf":[name,winrate]
 */
const i18nVarTokenValues = {};

/**
 * Variable for current language
 * Default: en
 */
let currentLanguage = "en";

let activeTranslations = {};

export function setTranslations(translations: Translations) {
  activeTranslations = translations;
}

/**
 * Replaces variable tokens inside i18n-app.ts strings.
 * VarToken to replace is set in i18nVarToken.
 *
 * @param buildSpan Flag=true to return element as span
 * @param i18nT i18n Token
 * @param tokens Variable values to replace inside i18n string
 * @returns i18n string of current language with replaced variable tokens.
 */
export function replaceVarTokens(
  buildSpan: boolean,
  i18nT: string,
  ...tokens: string[]
): string {
  // Builds regex
  DL.log("replaceVarTokens: " + i18nT + " " + JSON.stringify(tokens));

  // Builds Regex for .replace function
  const re = new RegExp(i18nVarToken, "");

  // Safes all incoming parameters in the global object so updateHTML
  // can access the data if langauge is swapped
  i18nVarTokenValues[i18nT] = tokens;

  // Gets string of the given token
  let strReplaced = t(i18nT);

  // Counts variables in the returned string
  const occuCount = strReplaced.split(i18nVarToken).length - 1;

  // Checks if variable occurances do not match parameter length
  if (occuCount != tokens.length) {
    DL.error("i18n.replaceVarTokens: Params length != Variable count");
    return;
  }

  // Replaces every var orrucance with the called parameter array in order.
  for (let i = 0; i < tokens.length; i++) {
    strReplaced = strReplaced.replace(re, tokens[i]);
  }

  // Returns inserted parameter string inside element span
  if (buildSpan == true) {
    return `<span id="i18n_${i18nT}" class="i18n">${strReplaced}</span>`;

    // Returns insereted parameter without span element
  } else {
    return strReplaced;
  }
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
  if (!Object.prototype.hasOwnProperty.call(activeTranslations, token)) {
    DL.log(`18n.t(): Invalid code '${token}'`);
    const err = new Error();
    console.warn(err.stack);

    if (
      Object.prototype.hasOwnProperty.call(errorTranslation, currentLanguage)
    ) {
      return errorTranslation[currentLanguage];
    } else {
      return errorTranslation.en;
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(
      activeTranslations[token],
      currentLanguage
    )
  ) {
    return activeTranslations[token][currentLanguage];
  } else {
    return activeTranslations[token].en;
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
  for (const l of Languages) {
    if (l.code == language) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if langcode is available in config.
 * Returns "en" if not found.
 *
 * @param language 'en', 'fr', 'de', etc.
 * @returns language core code, e.g. 'en' and 'fr'
 */
export function findLanguage(language: string): string {
  const ls = Languages;
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
 * Function returns full language name
 *
 * @param language Language short name such as 'en', 'de' and 'fr' (optional parameter)
 * @returns Full language name of language code; if language is not provided, then the funciton returns the name of the current language
 */
export function getLanguageName(language?: string): string {
  DL.log(`i18n.getLanguageName(): currentLanguage = ${currentLanguage}`);
  if (language == undefined) {
    language = currentLanguage;
    //return i18n.config.languages[currentLanguage];
  }

  for (const l of Languages) {
    if (l.code == language) {
      return l.name;
    }
  }
  return Languages[0].name; // Returns english if no name is found
}

/**
 *
 * @returns Array of { <language code>: <language name> }
 */
export function getLanguages(): Language[] {
  return Languages;
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
    for (const element of Array.from(elements)) {
      updatei18nElement(element);
    }
  }
}

function updatei18nElement(element: Element) {
  const i18nToken = element.id
    .replace("i18n_", "")
    .replace("i18x_", "")
    .replace("i18y_", "");
  if (Object.prototype.hasOwnProperty.call(i18nVarTokenValues, i18nToken)) {
    element.innerHTML = replaceVarTokens(
      false,
      i18nToken,
      ...i18nVarTokenValues[i18nToken]
    );
  } else {
    const innerHTML = t(i18nToken);
    element.innerHTML = innerHTML;
    configureWebLinks(element);
  }
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
      overwolf.utils.openUrlInOverwolfBrowser(
        activeTranslations[i18nToken].webLinks[i]
      );
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

// Display of error message
const errorTranslation: Translation = {
  en: "ERROR",
  de: "FEHLER",
  fr: "ERREUR",
  ru: "ОШИБКА",
  id: "KESALAHAN",
  fil: "ERROR",
  zh: "错误",
  br: "ERRO",
  es: "ERROR",
};
