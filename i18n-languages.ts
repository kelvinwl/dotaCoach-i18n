/**
 * This file contains all the languages supported by Dota Coach.
 *
 * Source for country codes: "https://www.localeplanet.com/icu/"
 *
 * Copyright (C) Dota Coach, 2022
 */
import { Language } from "./i18n";

export const Languages: Language[] = [
  {
    code: "en",
    name: "English",
    pollyConfig: {
      LanguageCode: "en-US",
      VoiceId: "Joanna",
      Engine: "neural",
    },
  },
  {
    code: "de",
    name: "Deutsch",
    pollyConfig: {
      LanguageCode: "de-DE",
      VoiceId: "Vicki",
      Engine: "neural",
    },
  },
  {
    code: "fr",
    name: "Français",
    pollyConfig: {
      LanguageCode: "fr-FR",
      VoiceId: "Lea",
      Engine: "neural",
    },
  },
  {
    code: "ru",
    name: "Русский",
    pollyConfig: {
      LanguageCode: "ru-RU",
      VoiceId: "Tatyana",
      Engine: "standard",
    },
  },
  { code: "id", pollyConfig: null, name: "Indonesia" },
  { code: "fil", pollyConfig: null, name: "Filipino" },
  {
    code: "zh",
    name: "中文",
    pollyConfig: {
      LanguageCode: "cmn-CN",
      VoiceId: "Zhiyu",
      Engine: "standard",
    },
  },
  {
    code: "br",
    name: "Português - Brasil",
    pollyConfig: {
      LanguageCode: "pt-BR",
      VoiceId: "Camila",
      Engine: "neural",
    },
  },
  {
    code: "es",
    name: "Español",
    pollyConfig: {
      LanguageCode: "es-ES",
      VoiceId: "Lucia",
      Engine: "neural",
    },
  },
];
