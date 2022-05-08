# dotaCoach-i18n

This repository contains all translation files for the Dota Coach App and Websites (https://dota-coach.com and https://dota-coach.github.io).

# How to contribute

We appreciate all support for translating the app!

To contribute create a pull-request. You will get a Translator role on our Discord server upon approval. Have fun translating!

## Instructions for translators

- Lines with a **#toBeUpdated** tag need to be reviewed by a native speaker
- Comments and potential issues can be added at the end of each line after two forward slashes (_//_)

How to add web links to tanslations?

- Add a HTML element with an id set to "webLink". Example: _&lsaquo;span id='webLink'&rsaquo;Click here to see Guide&lsaquo;/span&rsaquo;_
- Then add a field **webLinks** to the translation. Thie field shall contian an array of http(s) links

How to add variables to translations?

- Variables can be added optionally and are marked with ####
- To get a text like **'5 days ago'** you would write **'#### days ago'**

## i18n files

There are currently 4 translation files:

- i18n-languages.ts: List of supported languages
- i18n-app.ts: Translation of the app
- i18n-website.ts: Translation of the main website (https://dota-coach.com)
- i18n-faq.js: Translations of the FAQ webpage (https://dota-coach.github.io/faqs.html; this page is also opened when a users clicks on FAQ in the app)

## Dota 2 languages

Dota 2 provides audio for the following 4 languages: English, Korean, Simplified Chinese and Russian.

## Contact

You can contact us via e-mail (info@dota-coach.com) or on discord (https://discord.gg/K5kPrh4z / **Dota Coach#4076**).

## Current translators

Here is the list of current contributors (languages are ordered alphabetically).

Brazilian Portuguese:

- **Kelvão#8323 ([@kelvinwl](https://github.com/kelvinwl))**

Chinese:

- **subjadeites#9052 ([@subjadeites](https://github.com/subjadeites))**

Filipino:

- **aeris#0018 ([@aeristhy](https://github.com/aeristhy))**

German:

- **stresspresso#8464**

Spanish:

- **Fonsett#6208 ([@Fonsett](https://github.com/Fonsett))**

Russian:

- **Tutoshniy Net#6995 ([@Tutoshniy](https://github.com/Tutoshniy))**

**Thank you all for contributing!**
