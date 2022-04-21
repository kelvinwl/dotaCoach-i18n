/**
 * This file contains all translations for the video guide: https://dota-coach.com/video/DotaCoachTutorial.mp4
 *
 * Comment: Amazon Polly doesn't support hte following languages:
 *   - Indonesian
 *   - Filipino
 *
 */

import { Translations } from "./i18n";

export const VideoGuideTranslations: Translations = {
  "00_Introduction": {
    en: "Welcome to Dota Coach and thank you for your interest! You will be able to step up your Dota game play immediately after watching this short guide!",
    de: "Willkommen bei Dota Coach und vielen Dank für Ihr Interesse! Sie können Ihr Dota-Spiel sofort nach dem Anschauen dieser kurzen Videoanleitung verbessern!", // #toBeUpdated
    fr: "Bienvenue chez Dota Coach et merci de votre intérêt ! Vous pourrez améliorer votre jeu Dota immédiatement après avoir regardé ce court guide vidéo !", // #toBeUpdated
    ru: "Добро пожаловать в Dota Coach и благодарим вас за проявленный интерес! Вы сможете улучшить свою игру в Dota сразу после просмотра этого короткого видео-руководства!", // #toBeUpdated
    zh: "欢迎来到Dota Coach，感谢您的关注！观看这个简短的视频指南后，你将能够立即提高你的Dota游戏玩法！", // #toBeUpdated
    br: "Bem-vindo ao Dota Coach e obrigado pelo seu interesse! Você será capaz de intensificar seu jogo Dota imediatamente após assistir a este breve guia em vídeo!", // #toBeUpdated
    es: "¡Bienvenido a Dota Coach y gracias por tu interés! ¡Podrás mejorar tu juego de Dota inmediatamente después de ver esta breve guía en video!", // #toBeUpdated
  },
  "01_GameStateIntegration": {
    en: "Before you use the app, make sure to add the game state integration parameter to your Dota 2 launch options. Without it, Dota Coach won't work!",
    de: "Bevor Sie die App verwenden, stellen Sie sicher, dass Sie den Parameter für die Integration des Spielzustands zu Ihren Dota 2-Startoptionen hinzufügen. Ohne sie funktioniert Dota Coach nicht!", // #toBeUpdated
    fr: "Avant d'utiliser l'application, assurez-vous d'ajouter le paramètre d'intégration de l'état du jeu à vos options de lancement dota 2. Sans cela, Dota Coach ne fonctionnera pas !", // #toBeUpdated
    ru: "Перед использованием приложения обязательно добавьте параметр интеграции состояния игры в параметры запуска dota 2. Без него тренер по Dota не будет работать!", // #toBeUpdated
    zh: "在使用应用程序之前，请务必将游戏状态集成参数添加到您的dota 2启动选项中。没有它，Dota Coach 将无法正常工作！", // #toBeUpdated
    br: "Antes de usar o aplicativo, certifique-se de adicionar o parâmetro de integração do estado do jogo às suas opções de inicialização do dota 2. Sem isso, o Dota Coach não funcionará!", // #toBeUpdated
    es: "Antes de usar la aplicación, asegúrate de añadir el parámetro de integración del estado del juego a tus opciones de lanzamiento de dota 2. ¡Sin él, Dota Coach no funcionará!", // #toBeUpdated
  },
  "02_DesktopWindow": {
    en: "You can move the apps desktop window by left click dragging the window to your desired position. To always be informed what new features have been patched in, check the initial notification panel. If you are a first-time app user, check out the written guide in the notification window as well! If Dota or steam services are unavailable, the status will change accordingly. If the app is not working, please check out the app status in the top left corner! A green circle means all is good, if it turns amber, some Dota services might be down.",
  },
  "03_SettingsWindow": {
    en: "The settings window can be found in the top right corner after clicking on the menu icon. You can customize every single component of the app by disabling or enabling it and you are able to freely position all windows that are shown in game. Click the reposition button in the bottom right corner of the settings window. Once all windows turn green, left click drag them. Do not forget to turn off the reposition once you are done.",
  },
  "04_InGameWindow": {
    en: "The in-game window can be opened and closed by clicking on the Dota Coach logo which can be found at the top left corner during the draft and above the mini-map during the game. There are two different windows inside the in-game window. The pick, ban and player information, as well as the coaching information that lets you select the role you are playing, as well as your lane enemies. You will also get counter item suggestions for the early-game. Another feature we provide are in-game guides directly on steam. You can immediately get them by clicking on “get steam guide”. Do not forget to restart Dota after you selected one you like!",
  },
  "05_Timers": {
    en: "The app provides timers for all important game events: Buybacks, roshan, glyph, ultimates and runes. You can disable and enable them in the settings menu. Left clicking them will start the timer: left clicking on a running timer will announce the timer in the team chat. Clicking the red x next to the timer will reset it. These features work for all timers that can be started by clicking them.",
  },
  "06_Infoboxes": {
    en: "Player infoboxes provide information about the players and hero they are playing. You can disable or enable them in the settings menu. It will show standard item builds and timings, as well as provide valuable player information if available. You can check if their profile is private or public, and get a warning if we believe the player is a smurf. The team infobox can be found at the top middle which provides compiled information about the enemy team like disables.",
  },
};
