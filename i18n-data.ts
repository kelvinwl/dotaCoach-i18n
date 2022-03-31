/**
 * This file contains all the logic for the internationalization (i18n) of the Dota Coach app.
 *
 * Instructions for translators:
 *     - Lines with an OK, have already been reviewed by a nativ speaker
 *     - Comments and potential issues are added at the end of each line, after the // signs
 *
 * Source for country codes: "https://www.localeplanet.com/icu/"
 *
 * Note: Dota 2 provides the following 4 audio languages: English, Korean, Simplified Chinese and Russian
 *
 */

export interface Language {
  code: string;
  name: string;
}

export const i18n = {
  // Lanuages currently supported by the Dota Coach App
  config: {
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Deutsch" },
      { code: "fr", name: "Français" },
      { code: "ru", name: "Русский" },
      { code: "id", name: "Indonesia" },
      { code: "fil", name: "Filipino" },
      { code: "zh", name: "中文" },
      { code: "br", name: "Português - Brasil" },
      { code: "es", name: "Español" },
    ],
  },

  // Translation of text for the Dota Coach App
  text: {
    // InGame window
    "Show/hide": {
      en: "Show/hide",
      de: "Ein-/Ausblenden",
      fr: "Afficher/masquer",
      ru: "Показать/скрыть",
      id: "Tampilkan/sembunyikan",
      fil: "Show/hide",
      zh: "显示/隐藏",
      br: "Mostrar/ocultar",
      es: "Mostrar/ocultar",
    },
    "Sign in": {
      en: "Sign in",
      de: "Anmelden",
      fr: "Identifiez-vous",
      ru: "Войти",
      id: "Masuk",
      fil: "Mag-sign in",
      zh: "请登录",
      br: "Registrar",
      es: "Ingresar",
    },
    "Logged in": {
      en: "Logged in",
      de: "Angemeldet",
      fr: "Connecté",
      ru: "Авторизирован",
      id: "Masuk",
      fil: "Mag-logged in",
      zh: "已登录",
      br: "Logado",
      es: "Sesión iniciada",
    },
    "Logged in as": {
      en: "Logged in as",
      de: "Angemeldet als",
      fr: "Connecté en tant que",
      ru: "Вы вошли как",
      id: "Masuk sebagai",
      fil: "Naka-logged in bilang",
      zh: "已通过第三方账号登陆",
      br: "Logado como",
      es: "Conectado como",
    },
    "Create ballot": {
      en: "Create ballot",
      de: "Stimmzettel erstellen",
      fr: "Créer un bulletin de vote",
      ru: "Отзыв",
      id: "Buat pemungutan suara",
      fil: "Gumawa ng balota",
      zh: "开启投票",
      br: "Criar votação",
      es: "Crear votación",
    },
    "Watch tutorial": {
      en: "Watch tutorial",
      de: "Tutorial ansehen",
      fr: "Regardez le didacticiel",
      ru: "Смотреть туториал",
      id: "Menonton tutorial",
      fil: "Panoorin ang tutorial",
      zh: "观看教程",
      br: "Assistir tutorial",
      es: "Ver el tutorial",
    },
    "Get help": {
      en: "Get help",
      de: "Hilfe holen",
      fr: "Obtenez de l'aide",
      ru: "Помощь",
      id: "Dapatkan bantuan",
      fil: "Humingi ng tulong",
      zh: "获取帮助",
      br: "Obtenha ajuda",
      es: "Conseguir ayuda",
    },
    "Report issue": {
      en: "Report issue",
      de: "Problem melden",
      id: "Melaporkan masalah",
      fr: "Problème de rapport",
      zh: "报告问题",
      fil: "Report issue",
      ru: "Отчёт об ошибке",
      br: "Relate um problema",
      es: "Reportar un problema",
    },
    "Join Discord": {
      en: "Join Discord", // OK
      de: "Discord beitreten", // OK
      fr: "Rejoignez Discord",
      ru: "Discord",
      fil: "Mag-join sa Discord",
      zh: "加入Discord",
      id: "Bergabung Perselisihan",
      br: "Participar do Discord",
      es: "Únete a Discord",
    },
    "Join Reddit": {
      en: "Join Reddit",
      de: "Reddit beitreten",
      fr: "Rejoignez Reddit",
      ru: "Reddit",
      id: "Bergabunglah Reddit",
      fil: "Mag-join sa Reddit",
      zh: "加入Reddit",
      br: "Participar do Reddit",
      es: "Únete a Reddit",
    },
    "Manage subscription": {
      en: "Manage subscription",
      de: "Abo verwalten",
      fr: "Gérer l'abonnement",
      ru: "Управление подпиской",
      zh: "管理订阅",
      fil: "I-manage ang subscription",
      id: "Kelola langganan",
      br: "Gerenciar assinatura",
      es: "administrar suscripción",
    },
    "Change settings": {
      en: "Change settings", // OK
      de: "Einstellungen ändern", // OK
      fr: "Modifier les paramètres",
      ru: "Настройки",
      id: "Ubah pengaturan",
      fil: "I-change ang settings",
      zh: "更改设置",
      br: "Alterar configurações",
      es: "Cambiar ajustes",
    },
    "Click to sign in": {
      en: "Click to sign in to your Overwolf account",
      de: "Klicke hier, um dich bei deinem Overwolf-Konto anzumelden",
      fr: "Cliquez pour vous connecter à votre compte Overwolf",
      ru: "Нажмите, чтобы авторизировать аккаунт Overwolf",
      id: "Klik untuk masuk ke akun Overwolf Anda",
      fil: "I-click para mag sign in sa Overwolf account mo",
      zh: "点击登录你的 Overwolf 账户",
      br: "Clique para entrar com sua conta Overwolf",
      es: "Haga clic para iniciar sesión en su cuenta de Overwolf",
    },

    // Help window
    /*HELP: {
      en: "HELP",
      de: "HILFE",
      fr: "AIDEZ-MOI",
      ru: "ПОМОЩЬ",
      id: "MEMBANTU",
      fil: "HELP",
      zh: "帮助",
      br: "AJUDA",
      es: "AYUDA",
    },*/
    FEEDBACK: {
      en: "FEEDBACK",
      de: "FEEDBACK",
      fr: "COMMENTAIRES",
      ru: "ОТЗЫВ",
      id: "UMPAN BALIK",
      fil: "FEEDBACK",
      zh: "反馈",
      br: "COMENTÁRIOS",
      es: "COMENTARIOS",
    },
    "Report an issue": {
      en: "Report an issue/bug or request support",
      de: "Ein Problem/Bug melden oder Support anfragen",
      fr: "Signaler un problème/un bogue ou demander de l'aide",
      ru: "Сообщить об ошибке или обратиться в поддержку",
      id: "Melaporkan masalah/bug atau meminta dukungan",
      fil: "Mag-report ng issue/bug o mag-request ng support",
      zh: "报告问题/错误或请求支持",
      br: "Reportar um problema",
      es: "Reportar un problema",
    },
    "Share with us": {
      en: "What do you want to share with us?",
      de: "Was möchtest du mit uns teilen?",
      fr: "Qu'est-ce que tu souhaites partager avec nous ?",
      ru: "Чем вы хотите с нами поделиться?",
      id: "Apa yang ingin Anda bagikan dengan kami?",
      fil: "Ano gusto mong i-share sa amin?",
      zh: "给开发团队留言",
      br: "O que você gostaria de compartilhar conosco?",
      es: "¿Qué quieres compartir con nosotros?",
    },
    "Issue description": {
      en: "Enter description of issue/bug or request for support",
      de: "Geben Sie eine Beschreibung des Problems/Bugs oder eine Supportanfrage ein",
      fr: "Entrez la description du problème/du bogue ou de la demande d'assistance",
      ru: "Введите описание ошибки или запросите поддержку",
      id: "Masukkan deskripsi masalah/bug atau permintaan untuk dukungan",
      fil: "Ilagay ang description ng issue/bug or request ng support",
      zh: "输入问题/错误描述或请求支持",
      br: "Descreva o problema/bug ou pedido de suporte",
      es: "Descripción del problema",
    },
    SEND_REPORT: {
      en: "SEND REPORT",
      de: "BERICHT SENDEN",
      fr: "ENVOYER UN RAPPORT",
      ru: "ОТПРАВИТЬ ОТЧЕТ",
      id: "KIRIM LAPORAN",
      fil: "SEND REPORT",
      zh: "发送报告",
      br: "ENVIAR REPORTE",
      es: "ENVIAR REPORTE",
    },
    "Contact details": {
      en: "Contact details (E-Mail/Discord)",
      de: "Kontaktdaten (E-Mail/Discord)",
      fr: "Coordonnées (E-Mail/Discord)",
      ru: "Контактные данные (E-Mail/Discord)",
      id: "Rincian kontak (E-Mail/Perselisihan)",
      fil: "Contact details (E-Mail/Discord)",
      zh: "联系方式（电子邮件/Discord）",
      br: "Detalhes de contato (E-Mail/Discord)",
      es: "Detalles de contacto (E-Mail/Discord)",
    },
    "Enter contact details": {
      en: "Enter your contact details",
      de: "Gib deine Kontaktdaten ein",
      fr: "Entrez vos coordonnées",
      ru: "Введите свои контактные данные",
      id: "Masukkan detail kontak Anda",
      fil: "Ilagay mo ang iyong contact details",
      zh: "输入您的联系方式",
      br: "Insira seus detalhes de contato",
      es: "Ingrese sus datos de contacto",
    },
    "Log files": {
      en: "Attach Dota Coach log files",
      de: "Dota Coach-Protokolldateien anhängen",
      fr: "Joindre les fichiers journaux Dota Coach",
      ru: "Прикрепить файлы журнала Dota Coach",
      id: "Lampirkan file log Dota Coach",
      fil: "Attach Dota Coach log files",
      zh: "附上 Dota Coach 日志文件",
      br: "Anexar arquivos de registro do Dota Coach",
      es: "Adjunta los archivos de registro de Dota Coach",
    },

    // Settings window
    SETTINGS: {
      en: "SETTINGS",
      fr: "PARAMÈTRES",
      de: "EINSTELLUNGEN",
      ru: "НАСТРОЙКИ",
      id: "PENGATURAN",
      fil: "SETTINGS",
      zh: "设置",
      br: "CONFIGURAÇÕES",
      es: "CONFIGURACIÓN",
    },
    version: {
      en: "version",
      de: "Version",
      fr: "version",
      ru: "Версия",
      id: "versi",
      fil: "version",
      zh: "版本",
      br: "versão",
      es: "versión",
    },
    channel: {
      en: "channel",
      de: "Kanal",
      fr: "canal",
      ru: "Канал",
      fil: "channel",
      zh: "版本", 
      id: "saluran",
      br: "canal",
      es: "canal",
    },
    production: {
      en: "production",
      de: "Produktion",
      fr: "production",
      ru: "Разработка",
      fil: "produksyon",
      zh: "生产环境", 
      id: "produksi",
      br: "produção",
      es: "producción",
    },
    beta: {
      en: "beta",
      de: "Beta",
      fr: "bêta",
      ru: "Бета",
      id: "beta",
      fil: "beta",
      zh: "测试版",
      br: "beta",
      es: "beta",
    },
    Infoboxes: {
      en: "Infoboxes", // OK
      de: "Infoboxen",
      fr: "Infobox",
      ru: "Инфобоксы", // OK
      id: "Infobox",
      zh: "信息框",
      br: "Caixas de informação",
      es: "Caja de información",
    },
    InfoboxesTooltip: {
      en: "Infoboxes are positioned on top of players in matches and provide insights on items and abilities.",
      de: "Infoboxen sind während Spielen über den Spielern positioniert und bieten Einblicke in Gegenstände und Fähigkeiten.",
      fr: "Les boîtes d'information sont placées au-dessus des joueurs lors des matchs et fournissent des informations sur les objets et les capacités.",
      ru: "Инфобоксы расположены поверх игроков в матчах и показывают информацию о предметах и способностях.",
      id: "Infobox diposisikan di atas pemain dalam pertandingan dan memberikan wawasan tentang item dan kemampuan.",
      fil: "Infoboxes ay naka position sa taas ng players in matches at para mag provide ng insights sa items and abilities.",
      zh: "文本提示框位于比赛中玩家的顶部，提供有关物品和技能的说明。",
      br: "Caixas de informação são posicionadas acima dos jogadores em partidas e provêem insights em itens e habilidades",
      es: "Las cajas de información se colocan encima de los jugadores en los partidos y brindan información sobre elementos y habilidades.",
    },
    InfoboxesCheckbox: {
      en: "Show infoboxes", // OK
      de: "Infoboxen einblenden",
      fr: "Afficher les infoboxes",
      ru: "Показать инфобоксы",
      id: "Tampilkan kotak informasi",
      fil: "Ipakita ang mga infobox",
      zh: "显示文本提示框",
      br: "Mostrar caixas de informações",
      es: "Mostrar cuadros de información",
    },
    Timers: {
      en: "Timers",
      de: "Timer",
      fr: "Minuteries",
      ru: "Таймеры", // OK
      id: "Timer",
      fil: "Timers",
      zh: "计时器",
      br: "Temporizador",
      es: "Temporizador",
    },
    TimersTooltip: {
      en: "The timer for Roshan, Glyph of Fortification, Buybacks and Ultimates can be turned off and on here.",
      de: "Der Timer für Roshan, Glyphe der Befestigung, Rückkäufe und Ultimates kann hier ein- und ausgeschaltet werden.",
      fr: "Le chronomètre pour Roshan, Glyphe de fortification, Rachats et Ultimates peut être désactivé et activé ici.",
      ru: "Таймер для Рошана, Глифа, Выкупа и Ультимейтов можно выключить и включить здесь.",
      id: "Timer untuk Roshan, Glyph of Fortification, Buybacks dan Ultimates dapat dimatikan dan di sini.",
      fil: "Ang timer para sa Roshan, Glyph of Fortification, Buybacks and Ultimates ay pwede ma i-turn off at on dito.",
      zh: "肉山、防御符文、买活和终极技能的计时器可以在这里关闭和开启。",
      br: "O temporizador para Roshan, glifo de fortificação, reviver e ultis podem ser desativados e ativados aqui.",
      es: "El temporizador de Roshan, Glifo de fortificación, Buyback y Ultimates se puede activar y desactivar aquí.",
    },
    Runes: {
      en: "Runes", // OK
      de: "Runen",
      fr: "Runes",
      ru: "Руны",
      id: "Rune",
      fil: "Runes",
      zh: "神符",
      br: "Runas",
      es: "runas",
    },
    RoshanAndGlyph: {
      en: "Roshan & glyph", // OK
      de: "Roshan & Glyphe", // OK
      fr: "Roshan & Glyphe",
      ru: "Рошан и Глиф", // Dota 2 uses "укрепление строений" for Glyph of Fortification. Translation recommends to keep "глиф" as it is shorter and most of gamers (according to her Internet research) already use this term, and just in case there are a few articles in Russian explaining what "глиф" is.
      id: "Roshan & mesin terbang",
      fil: "Roshan at glyph",
      zh: "肉山和防御符文",
      br: "Roshan e glifo",
      es: "Roshan y glifo",
    },
    TeamBuybacks: {
      en: "Team buybacks", // OK
      de: "Team Rückkäufe", // OK
      fr: "Rachats d'équipe",
      ru: "Выкуп союзников", // OK
      id: "Buyback tim",
      fil: "Team buybacks",
      zh: "团队买活情况",
      br: "Reviver aliados",
      es: "Buyback de aliados",
    },
    TeamUltimates: {
      en: "Team ultimates", // OK
      de: "Team Ultimates", // OK
      fr: "Ultimes d'équipe",
      ru: "Ультимейты союзников", // OK, long form: "Особые командные способности"
      id: "Ultimates tim",
      fil: "Team ultimates",
      zh: "团队终极技能使用情况",
      br: "Ultis aliados",
      es: "Ultis de aliados",
    },
    EnemyBuybacks: {
      en: "Enemy buybacks", // OK
      de: "Feindliche Rückkäufe", // OK
      fr: "Rachats d'ennemis",
      ru: "Вражеский выкуп", // OK
      id: "Buyback musuh",
      fil: "Enemy buybacks",
      zh: "敌人买活情况",
      br: "Reviver inimigos",
      es: "Buyback de los enemigos",
    },
    EnemyUltimates: {
      en: "Enemy ultimates", // OK
      de: "Feindliche Ultimates", // OK
      fr: "Ultimes ennemis",
      ru: "Ультимейты врага", // OK, long form: "Особые вражеские способности"
      id: "Ultimates musuh",
      fil: "Enemy ultimates",
      zh: "敌人终极技能使用情况",
      br: "Ultis inimigos",
      es: "Ultis de los enemigos",
    },
    subsOnly: {
      en: "subs only",
      de: "nur U-Boote",
      fr: "sous-marins uniquement",
      ru: "Только подписчики",
      fil: "subs only",
      zh: "仅限订阅者使用",
      id: "kapal selam saja",
      br: "só para inscritos",
      es: "solo suscriptores",
    },
    Coaching: {
      en: "Voice coaching",
      // All to be updated
      fr: "Coaching",
      de: "Coaching",
      ru: "Коучинг",
      id: "Coaching",
      fil: "Coaching",
      zh: "语音指导",
      br: "Treinamento",
      es: "Entrenamiento",
    },
    CoachingTooltip: {
      en: "Voice coaching for own hero and enemy heroes can be set here.",
      // All to be updated (de is done)
      de: "Coaching (Stimme) für eigener Held und feindliche Helden kann hier eingestellt werden.",
      fr: "L'entraînement pour les choix de héros, les constructions d'objets et les héros ennemis peut être défini ici.",
      ru: "Коучинг для выбранных героев, сборки предметов, вашего героя (голос) и вражеских героев (голос) можно настроить здесь.",
      id: "Pelatihan untuk memilih pahlawan, item membangun dan pahlawan musuh dapat diatur di sini.",
      fil: "Coaching para sa hero picks, item builds, own hero (voice) at enemy heroes (voice) ay pwede ma i-set dito.",
      zh: "这里可以设置双方英雄相关的语音指导。",
      br: "Treinamento para seleção de heróis, construção de itens, próprio herói (voz) e heróis inimigos (voz) podem ser configurados aqui.",
      es: "Aquí se puede configurar el entrenador para elegir héroes, item builds, héroe propio (voz) y héroes enemigos (voz)",
    },
    HeroPicksAndItemBuilds: {
      en: "Hero picks & item builds", // OK
      de: "Heldenauswahl & Items", // OK
      fr: "Choix de héros et constructions d'objets",
      ru: "Герои и предметы", // OK, long form: "Характеристики героев и предметов"
      id: "Pahlawan picks & item membangun",
      fil: "Hero picks at item builds",
      zh: "英雄选择和物品推荐",
      br: "Seleção de heróis e construção de itens",
      es: "Elecciones de héroes e item builds",
    },
    OwnHeroVoice: {
      en: "Own hero", // OK
      de: "Eigener Held", // OK
      fr: "Propre héros",
      ru: "Ваш герой", // OK, short form: "Собственный герой (голос)"
      id: "Pahlawan sendiri",
      fil: "Saliring hero",
      zh: "自己的英雄",
      br: "Próprio herói",
      es: "Héroe propio",
    },
    EnemyHeroesVoice: {
      en: "Enemy heroes", // OK
      de: "Feindliche Helden", // OK
      fr: "Héros ennemis",
      ru: "Вражеские герои", // OK
      id: "Pahlawan musuh",
      fil: "Enemy heroes",
      zh: "敌方英雄",
      br: "Heróis inimigos",
      es: "Héroes enemigos",
    },
    Notifications: {
      en: "Notifications", // OK
      de: "Benachrichtigungen", // OK
      fr: "Les notifications",
      ru: "Уведомления", // OK
      id: "Notifikasi",
      fil: "Notifikasyon",
      zh: "通知",
      br: "Notificações",
      es: "Notificaciones",
    },
    NotificationsTooltip: {
      en: "Notifications provided during the game to remind you of events such as the apprearance of bounty runes. You can enable or disable the different messages individually.",
      de: "Während des Spiels erhältliche Benachrichtigungen, die dich an Ereignisse wie das Erscheinen von Kopfgeldrunen erinnern. Sie können die verschiedenen Nachrichten einzeln ein- oder ausschalten.",
      fr: "Notifications fournies pendant le jeu pour vous rappeler des événements tels que l'apparition de runes de prime. Vous pouvez activer ou désactiver les différents messages individuellement.",
      ru: "Уведомления появляются во время игры, чтобы напомнить вам о таких событиях, как появление Рун Богатства. Эти сообщения можно включать или выключать по отдельности.",
      id: "Pemberitahuan yang disediakan selama pertandingan untuk mengingatkan Anda tentang peristiwa seperti apprearance dari rune karunia. Anda dapat mengaktifkan atau menonaktifkan pesan yang berbeda secara individual.",
      fil: "Ang mga notifikasyon na i-provide habang nasa laro ay para ipaalaala sayo ang mga events katulad ng pag labas ng bounty runes. Pwede mo ma enable o i-disable ang iba't ibang mensahe individually.",
      zh: "游戏期间提供的通知，提醒你注意诸如赏金符文出现之类的事件。您可以单独启用或禁用不同的消息。",
      br: "Notificações providenciados durante o jogo para te lembrar de eventos como o aparecimento de runas de recompensas. Você pode habilitar ou desabilitar as diferentes mensagens individualmente.",
      es: "Notificaciones proporcionadas durante el juego para recordarle eventos como la aparición de runas de recompensa. Puede habilitar o deshabilitar los diferentes mensajes individualmente",
    },
    BountyRunes: {
      en: "Bounty runes", // OK
      de: "Bounty Runes", // OK
      fr: "Bounty runes",
      ru: "Руны Богатства", // OK "Руны богатства"
      id: "Rune Bounty",
      fil: "Bounty runes",
      zh: "赏金符",
      br: "Runas de recompensa",
      es: "Runas de recompensa",
    },
    WaterAndPowerRunes: {
      en: "Water & power runes", // OK
      de: "Water & Power Runes", // OK
      fr: "Runes pour l'eau et l'énergie",
      ru: "Руны воды и усилений", // OK (Руны воды и силы)
      id: "Rune air & daya",
      fil: "Water at power runes",
      zh: "圣水符和属性符",
      br: "Runas de água e poder",
      es: "Runas de água y de poder",
    },
    NeutralItems: {
      en: "Neutral items",
      de: "Neutrale Gegenstände",
      fr: "Articles neutres",
      ru: "Нейтральные предметы", // OK
      id: "Item netral",
      fil: "Neutral items",
      zh: "中立物品",
      br: "Itens neutrais",
      es: "Items neutrales",
    },
    ObserverWards: {
      en: "Observer wards", // OK
      de: "Observer Wards", // OK
      fr: "Les quartiers des observateurs",
      ru: "Observer Wards", // OK
      id: "Pengamat bangsal",
      fil: "Observer wards",
      zh: "侦查守卫/假眼",
      br: "Sentinelas observadoras",
      es: "Guardianes observadores",
    },
    SmokeOfDeceit: {
      en: "Smoke of deceit", // OK
      de: "Smoke of Deceit", // OK
      fr: "La fumée de la tromperie",
      ru: "Smoke of Deceit", // OK
      id: "Asap tipu daya",
      fil: "Smoke of deceit",
      zh: "诡计之雾",
      br: "Fumaça da enganação",
      es: "Humo del engaño",
    },
    TomeOfKnowledge: {
      en: "Tome of knowledge", // OK
      de: "Tome of Knowledge", // OK
      fr: "Tome de connaissances",
      ru: "Книга Знаний", // OK
      id: "Tome pengetahuan",
      fil: "Tome of knowledge",
      zh: "知识之书",
      br: "Tomo do conhecimento",
      es: "Tomo del conocimiento",
    },
    AghanimsShard: {
      en: "Aghanim's shard", // OK
      de: "Aghanims Splitter", // OK
      fr: "Fragment d'Aghanim",
      ru: "Осколок Аганима", // OK
      id: "Shard Aghanim",
      fil: "Aghanim's shard",
      zh: "阿哈利姆的碎片",
      br: "Fragmento de Aghanim",
      es: "Fragmento de Aghanim",
    },
    SiegeCreeps: {
      en: "Siege creeps", // OK
      de: "Belagerungsdiener", // OK
      fr: "Creeps de siège",
      ru: "Катапульта", // OK
      zh: "攻城小兵",
      fil: "Siege creeps",
      id: "Pengepungan merayap",
      br: "Criaturas de cerco",
      es: "Creep de asedio",
    },
    Daytime: {
      en: "Daytime", // OK
      de: "Tageszeit", // OK
      fr: "diurne",
      ru: "День", // OK
      id: "Siang",
      fil: "Daytime",
      zh: "昼夜交替",
      br: "Dia",
      es: "Dia",
    },
    Subtitles: {
      en: "Subtitles", // OK
      de: "Untertitel", // OK
      fr: "Sous-titres",
      ru: "Субтитры", // OK
      id: "subtitel",
      fil: "Subtitles",
      zh: "字幕",
      br: "Legendas",
      es: "Subtítulos",
    },
    SubtitlesTooltip: {
      en: "Configure manual and automated message sharing through the Dota 2 team chat. Manual message sharing is triggered by left-clicking on timers or the loudspeaker.",
      de: "Konfigurieren Sie die manuelle und automatisierte Nachrichtenfreigabe über den Dota 2-Teamchat. Die manuelle Nachrichtenfreigabe wird durch Linksklick auf Timer oder Lautsprecher ausgelöst.",
      fr: "Configurez le partage manuel et automatique des messages via le chat d'équipe Dota 2. Le partage manuel des messages est déclenché par un clic gauche sur les minuteries ou le haut-parleur.",
      ru: "Настройте вывод сообщений через командный чат Dota 2. Обмен сообщениями вручную запускается щелчком левой кнопки мыши на таймерах или комментаторе.",
      id: "Konfigurasikan berbagi pesan manual dan otomatis melalui obrolan tim Dota 2. Berbagi pesan manual dipicu oleh klik kiri pada timer atau loudspeaker.",
      fil: "I-configure ang manual at automated message sharing sa Dota 2 team chat. Manual message sharing ay ma i-trigger by left-clicking sa timers or sa loudspeaker.",
      zh: "通过Dota 2团队聊天配置手动和自动消息共享。左键单击计时器或扬声器即可触发手动信息共享。",
      br: "Configure o compartilhamento de mensagens manuais e automáticas no chat de time do Dota 2. Compartilhamento manual de mensagens é acionado usando o clique com o botão esquerdo do mouse no ícone do autofalante.",
      es: "Configura el intercambio de mensajes manual y automático a través del chat del equipo de Dota 2. El intercambio manual de mensajes se activa haciendo clic con el botón izquierdo en los temporizadores o en el altavoz.",
    },
    ShowSubtitles: {
      en: "Show subtitles", // OK
      de: "Untertitel anzeigen", // OK
      fr: "Afficher les sous-titres",
      ru: "Показывать субтитры", // OK
      id: "Tampilkan sub judul",
      fil: "Show subtitles",
      zh: "显示字幕",
      br: "Mostrar legendas",
      es: "Mostrar subtítulos",
    },
    ManualSharing: {
      en: "Manual sharing", // OK
      de: "Manuelles Teilen", // OK
      fr: "Partage manuel",
      ru: "Делиться вручную", // OK
      id: "Berbagi manual",
      fil: "Manual sharing",
      zh: "手动共享",
      br: "Compartilhamento manual",
      es: "Compartir manualmente",
    },
    AutomatedSharing: {
      en: "Automated sharing", // OK
      de: "Automatisches Teilen", // OK
      fr: "Partage automatique",
      ru: "Делиться автоматически", // OK
      id: "Berbagi otomatis",
      fil: "Automated sharing",
      zh: "自动共享",
      br: "Compartilhamento automático",
      es: "Compartir automáticamente",
    },
    RoshanAndAegis: {
      en: "Roshan & aegis", // OK
      de: "Roshan & aegis", // OK
      fr: "Roshan & aegis",
      ru: "Рошан и aегис", // OK (Рошан и Эгида)
      id: "Roshan & aegis",
      fil: "Roshan at aegis",
      zh: "肉山和防御符文",
      br: "Roshan e aegis",
      es: "Roshan y aegis",
    },
    PerformanceTracker: {
      en: "Performance tracker", // OK
      de: "Leistungs-Tracker", // OK
      fr: "Traqueur de performance",
      ru: "Показатель КПД", // OK, long form: "Трекер производительности"
      id: "Pelacak kinerja",
      fil: "Performance tracker",
      zh: "个人表现追踪", 
      br: "Rastreador de performance",
      es: "Rastreador de rendimiento",
    },
    PerformanceTrackerTooltip: {
      en: "Configure the performance tracker to your needs. Note that the layout depends on your Dota Plus subscription in Dota 2.",
      de: "Konfigurieren Sie den Performance-Tracker nach Ihren Bedürfnissen. Beachten Sie, dass das Layout von Ihrem Dota Plus-Abonnement in Dota 2 abhängt.",
      fr: "Configurez le suivi des performances selon vos besoins. Notez que la mise en page dépend de votre abonnement Dota Plus dans Dota 2.",
      ru: "Настройте средство отслеживания в соответствии со своими потребностями. Обратите внимание, что вид трекера зависит от вашей подписки на Dota Plus в Dota 2.",
      id: "Konfigurasikan pelacak kinerja sesuai kebutuhan Anda. Perhatikan bahwa tata letak tergantung pada langganan Dota Plus Anda di Dota 2.",
      fil: "I-configure ang performance tracker sa pangangailangan mo. Note na ang layout ay naka depende sa iyong Dota Plus susbscription sa Dota 2.",
      zh: "根据您的需要配置个人表现追踪。注意：个人表现追踪的位置取决于您是不是DotaPlus订阅者", 
      br: "Configure o rastreador de performance de acordo com suas necessidades. Note que o layout depende de sua assinatura Dota Plus no Dota 2.",
      es: "Configura el rastreador de rendimiento según tus necesidades. Ten en cuenta que el diseño depende de tu suscripción a Dota Plus en Dota 2.",
    },
    ShowTracker: {
      en: "Show tracker",
      de: "Tracker anzeigen",
      fr: "Afficher le tracker",
      ru: "Показать трекер",
      id: "Tampilkan pelacak",
      fil: "Ipakita ang tracker",
      zh: "显示个人表现追踪", 
      br: "Mostrar rastreador",
      es: "Motrar rastreador",
    },
    DotaPlusSubscriber: {
      en: "Dota Plus subscriber", // OK
      de: "Dota Plus-Abonnent", // OK
      fr: "Abonné Dota Plus",
      ru: "Подписчик Dota Plus", // OK
      id: "Pelanggan Dota Plus",
      fil: "Dota Plus subscriber",
      zh: "刀塔 Plus 订阅者",
      br: "Assinante Dota Plus",
      es: "Suscriptor de Dota Plus",
    },
    GoalLeft: {
      en: "Goal left:", // OK
      de: "Ziel links:", // OK
      fr: "But à gauche :",
      ru: "Цель слева:", // OK
      id: "Tujuan kiri:",
      fil: "Goal left:",
      zh: "左侧目标:", 
      br: "Objetivo à esquerda: ",
      es: "Objetivo a la izquierda",
    },
    GoalRight: {
      en: "Goal right:", // OK
      de: "Ziel rechts:", // OK
      fr: "But droit :",
      ru: "Цель справа:", // OK
      id: "Tujuan yang tepat:",
      fil: "Goal right:",
      zh: "右侧目标:", 
      br: "Objetivo à direita: ",
      es: "Objetivo a la derecha",
    },
    YourMedian: {
      en: "Your median", // OK
      de: "Dein Median", // OK
      fr: "Votre médiane",
      ru: "Ваше среднее", // OK
      id: "Median Anda",
      fil: "Your median",
      zh: "你的平均表现",
      br: "Sua média",
      es: "Su media",
    },
    YourBest: {
      en: "Your best", // OK
      de: "Dein Bestresultat", // OK
      fr: "Votre meilleur",
      ru: "Ваше лучшее",
      id: "Yang terbaik",
      fil: "Your best",
      zh: "你的最佳表现",
      br: "Seu melhor",
      es: "Su mejor",
    },
    PeerMedian: {
      en: "Peer median", // OK
      de: "Peer Median", // OK
      fr: "Médiane des pairs",
      ru: "Среднее на рейтинге", // OK
      id: "Median sebaya",
      fil: "Peer median",
      zh: "同水平的平均表现",
      br: "Médias dos outros",
      es: "Media de otros",
    },
    PeerBest: {
      en: "Peer best", // OK
      de: "Peer Bestresultat", // OK
      fr: "Meilleur par les pairs",
      ru: "Лучшее на рейтинге",
      id: "Peer terbaik",
      fil: "Peer best",
      zh: "同水平的最佳表现",
      br: "Melhor dos outros",
      es: "Mejor de otros",
    },
    None: {
      en: "None",
      de: "Keine",
      fr: "Aucun",
      ru: "Пусто",
      id: "Tidak ada",
      fil: "None",
      zh: "无",
      br: "Nenhum",
      es: "Ninguno",
    },
    YourNameLeaderboard: {
      en: "Your name (for leaderboard)",
      de: "Dein Name (für Bestenliste)",
      fr: "Votre nom (pour le classement)",
      ru: "Имя (для рейтинга)", // OK, version too long: "Ваше имя (для таблицы лидеров)"
      id: "Nama Anda (untuk leaderboard)",
      fil: "Pangalan mo (para sa leaderboard)",
      zh: "你的名字（用于排行榜）",
      br: "Seu nome (para tabela de líderes)",
      es: "Su nombre (para tablas de clasificación)",
    },

    // Mouse click modifiers
    MouseClickModifier: {
      en: "Mouse click modifier",
      br: "Modificador do clique do mouse",
    },
    MouseClickModifierTooltip: {
      en: "The mouse-click modifier integration requires a user to press a modifier key when clicking on the overlay. This provides protection against interference with the game.",
      fil: "Ang mouse-click modifier intergration ay nangangailangan ng user para pindutin ang modifier key kapag nagki-click sa overlay. Ito ay proteksyon laban sa interference sa laro.",
      br: "A integração do modificador de clique do mouse requer o pressionamento de uma tecla modificadora ao clicar no overlay. Isso oferece proteção contra interferências com o jogo.",
    },
    Modifier: {
      en: "Modifier",
      br: "Modificador",
    },
    MouseClickModifierNone: {
      en: "None",
      de: "Keiner",
      fr: "Aucun",
      ru: "Нет",
      id: "Tidak ada",
      fil: "None",
      zh: "无",
      br: "Nenhum",
      es: "Ninguna",
    },
    MouseClickModifierAlt: {
      en: "Alt",
      br: "Alt",
    },
    MouseClickModifierCtrl: {
      en: "Ctrl",
      br: "Ctrl",
    },
    MouseClickModifierShift: {
      en: "Shift",
      br: "Shift",
    },

    // Main window settings were removed
    /*MainWindow: {
      en: "Main window", // OK
      de: "Hauptfenster", // OK
      fr: "Fenêtre principale", // OK
      ru: "Главное окно",
      id: "Jendela utama",
      fil: "Main window",
      zh: "主窗口",
      br: "Janela principal",
      es: "Ventana principal",
    },*/
    /*"MainWindow": {
            "en": "Hide main window", // OK
            "de": "App ausblenden", // OK
            "fr": "Masquer la fenêtre principale",
            "ru": "Скрыть окно", // OK, versoin too long: "Скрыть главное окно"
            "id": "Sembunyikan jendela utama",
            "fil": "Hide main window",
            "zh": "隐藏主窗口",
            "br": "Ocultar janela principal",
            "es": "Ocultar ventana principal"
        },*/

    /*MainWindowTooltip: {
      en: "This feature allows you to automatically show and hide the main app window depending on the game state.",
      de: "Mit dieser Funktion können Sie die App während des Spiels automatisch ein- und ausblenden.", //  to be udpated
      fr: "Cette fonctionnalité vous permet d'afficher et de masquer automatiquement l'application pendant le jeu.", //  to be udpated
      ru: "Эта функция позволяет автоматически показывать и скрывать приложение во время игры.", //  to be udpated
      id: "Fitur ini memungkinkan Anda untuk secara otomatis menampilkan dan menyembunyikan aplikasi selama pertandingan.", //  to be udpated
      fil: "Etong feature na ito ay para pwede mong makita o maitago ang app habang nasa laro.", //  to be udpated
      zh: "此功能允许您在游戏过程中自动显示和隐藏应用程序。", //  to be udpated
      br: "Essa função permite mostrar e ocultar automaticamente o aplicativo durante o jogo.", //  to be udpated
      es: "Esta función te permite mostrar y ocultar la aplicación automáticamente durante el juego", //  to be udpated
    },
    HideDuringPreGame: {
      en: "Hide during pre-game", // OK
      de: "Ausblenden während Vorbereitung",
      fr: "Cacher pendant l'avant-match",
      ru: "Скрыть во время выбора", // to be reviewed
      id: "Sembunyikan selama pra-permainan", // to be reviewed
      fil: "Itago sa panahon ng pre-game", // to be reviewed
      zh: "在赛前隐藏", // to be reviewed
      br: "Esconder durante o pré-jogo", // to be reviewed
      es: "Esconderse durante el juego previo", // to be reviewed
    },
    HideDuringGame: {
      en: "Hide during game", // OK
      de: "Während des Spiels ausblenden",
      fr: "Cacher pendant le jeu",
      ru: "Скрыть во время игры", // to be reviewed
      id: "Sembunyikan selama pertandingan", // to be reviewed
      fil: "Itago sa panahon ng laro", // to be reviewed
      zh: "在游戏中隐藏", // to be reviewed
      br: "Esconder durante a partida", // to be reviewed
      es: "Esconderse durante la partida", // to be reviewed
    },
    ShowAfterGame: {
      en: "Show after game", // OK
      de: "Nach dem Spiel einblenden",
      fr: "Afficher après le match",
      ru: "Показать после игры", // to be reviewed
      id: "Tampilkan setelah pertandingan", // to be reviewed
      fil: "Ipakita pagkatapos ng laro", // to be reviewed
      zh: "赛后显示", // to be reviewed
      br: "Mostrar depois do jogo", // to be reviewed
      es: "Espectáculo tras partido", // to be reviewed
    },
    MisclickProtection: {
      en: "Misclick protection", // OK
      de: "Fehlklickschutz", // OK
      fr: "Protection contre les faux clics",
      ru: "Защита от мисклика", // OK
      id: "Perlindungan misclick",
      fil: "Misclick protection",
      zh: "误点击保护",
      br: "Proteção contra misclick", // I know what it is, but I've never seen translation to this being used
      es: "Protección contra misclicks",
    },
    MisclickProtectionTooltip: {
      en: "Time in seconds that input isn't registered when the mouse first enters the timers. Default is 0.2 seconds.", // This seriously needs a better wording
      de: "Zeit in Sekunden, die nicht registriert wird, wenn die Maus die Timer zum ersten Mal betritt. Die Standardeinstellung ist 0,2 Sekunden.",
      fr: "Durée en secondes pendant laquelle l'entrée n'est pas enregistrée lorsque la souris entre pour la première fois dans les temporisateurs. La valeur par défaut est 0,2 seconde.",
      ru: "Время в секундах, при котором попадание мыши и нажатие на таймеры не вызывают их активацию. По умолчанию 0,2 секунды.",
      fil: "Oras sa segundo na hindi nakarehistro ang input ng unang pumasok ang mouse sa timer. Default ay 0.2 seconds.",
      id: "Waktu dalam hitungan detik bahwa input tidak terdaftar ketika mouse pertama kali memasuki timer. Default adalah 0,2 detik.",
      zh: "鼠标首次进入计时器后忽略点击的时间（以秒为单位）。默认值为0.2秒。",
      br: "Tempo em segundos para que o movimento do mouse não seja registrado na primeira vez que ele entrar nos temporizadores. Padrão é 0.2 segundos.",
      es: "Tiempo en segundos que la entrada no se registra cuando el mouse ingresa por primera vez a los temporizadores. El valor predeterminado es 0.2 segundos",
    },
    Delay: {
      en: "Delay", // OK
      de: "Verzug", // OK
      fr: "Retard",
      ru: "Задержка", // OK
      id: "Keterlambatan",
      fil: "Delay",
      zh: "延迟",
      br: "Demora",
      es: "Retraso",
    },*/
    Audio: {
      en: "Audio", // OK
      de: "Audio", // OK
      fr: "Audio",
      ru: "Аудио", // OK
      id: "Audio",
      fil: "Audio",
      zh: "音频",
      br: "Áudio",
      es: "Audio",
    },
    Disabled: {
      en: "Disabled",
      ru: "Отсутствует",
      fr: "handicapé",
      de: "Deaktiviert",
      id: "Dinonaktifkan",
      fil: "Disabled",
      zh: "已禁用",
      br: "Desabilitado",
      es: "Deshabilitado",
    },
    AudioTooltip: {
      en: "Select speaker device and set volume.",
      de: "Lautsprechergerät wählen und Lautstärke einstellen.",
      fr: "Sélectionnez le haut-parleur et réglez le volume.",
      ru: "Выберите устройство вывода и установите громкость.",
      id: "Pilih perangkat speaker dan atur volume.",
      fil: "Mag select ng speaker device at set volume.",
      zh: "选择扬声器设备并设置音量。",
      br: "Selecione o dispositivo de som e ajuste o volume.",
      es: "Seleccione el dispositivo de altavoz y configure el volumen",
    },
    Speaker: {
      en: "Speaker", // OK
      de: "Lautsprecher", // OK
      fr: "haut-parleur",
      ru: "Ус-во вывода", // OK
      id: "pengeras suara",
      fil: "Speaker",
      zh: "扬声器",
      br: "Dispositivo de som",
      es: "Altavoz",
    },
    Volume: {
      en: "Volume", // OK
      de: "Volumen", // OK
      fr: "Volume",
      ru: "Громкость", // OK
      id: "Volume",
      fil: "Volume",
      zh: "音量",
      br: "Volume",
      es: "Volumen",
    },
    Test: {
      en: "Test", // OK
      de: "Testen", // OK
      fr: "Test",
      ru: "Тест", // OK
      id: "Tes",
      fil: "Test",
      zh: "测试",
      br: "Teste",
      es: "Test",
    },
    SecondScreen: {
      en: "Second screen", // OK
      de: "Zweiter Bildschirm", // OK
      fr: "Deuxième écran",
      ru: "Второй экран", // OK
      id: "Layar kedua",
      fil: "Second screen",
      zh: "第二个屏幕",
      br: "Segunda tela",
      es: "Segunda pantalla",
    },
    SecondScreenTooltip: {
      en: "Users playing in windowed mode or having two or more monitors can benefit from a second screen providing additional information.",
      de: "Benutzer, die im Fenstermodus spielen oder über zwei oder mehr Monitore verfügen, können von einem zweiten Bildschirm mit zusätzlichen Informationen profitieren.",
      fr: "Les utilisateurs jouant en mode fenêtré ou disposant de deux moniteurs ou plus peuvent bénéficier d'un deuxième écran fournissant des informations supplémentaires.",
      ru: "Пользователи, играющие в оконном режиме или использующие два или более монитора, могут получить дополнительную информацию на втором экране.",
      id: "Pengguna yang bermain dalam mode berjendela atau memiliki dua atau lebih monitor bisa mendapatkan keuntungan dari layar kedua yang memberikan informasi tambahan.",
      fil: "Ang users na nag lalaro ng windowed mode o merong dalawang monitor o mas marami ay makikinabang mula sa pangalawang screen na nag pro-provide ng additional information.",
      zh: "在窗口模式下玩游戏或拥有两台或更多显示器的用户，可以从第二个屏幕中获得额外信息而受益。",
      br: "Usuários jogando em modo janela ou que tenham dois ou mais monitores podem se beneficiar de uma segunda tela que provê informações adicionais.",
      es: "Los usuarios que juegan en modo ventana o que tienen dos o más monitores pueden beneficiarse de una segunda pantalla que proporciona información adicional",
    },
    Monitor: {
      en: "Monitor", // OK
      de: "Monitor", // OK
      fr: "Moniteur",
      ru: "Монитор",
      id: "Memantau",
      fil: "Monitor",
      zh: "监控",
      br: "Monitor",
      es: "Monitor",
    },
    Reposition: {
      en: "Reposition", // OK
      de: "Umpositionieren", // OK
      fr: "Repositionnement",
      ru: "Перемещение", //OP, long form: Изменение позиции"
      id: "Reposisi",
      fil: "Reposition",
      zh: "重新定位",
      br: "Reposicionamento",
      es: "Reposicionamiento",
    },
    RepositionTooltip: {
      en: "Reposition allows you to reposition infoboxes and timers on the screen. During repositioning the infoboxes and timers are deactivated.",
      de: "Durch die Umpositionierung können Sie Infoboxen und Timer auf dem Bildschirm neu positionieren. Während der Neupositionierung sind die Infoboxen und Timer deaktiviert.",
      fr: "Repositionnement vous permet de repositionner les infoboxes et les minuteries à l'écran. Lors du repositionnement, les boîtes d'information et les minuteries sont désactivées.",
      ru: "Перемещение позволяет менять положение информационных блоков и таймеров на экране. Во время перемещения инфобоксы и таймеры деактивируются.",
      id: "Reposisi memungkinkan Anda untuk memposisikan ulang kotak informasi dan timer di layar. Selama reposisi infobox dan timer dinonaktifkan.",
      fil: "Ang Reposition ay para pwede mong ma i-position ang mga infoboxes at timers sa screen. Habang nag re-reposition, ang mga infoboxes at timers ay naka deactivate.",
      zh: "“重新定位”功能允许您在屏幕上重新定位信息框和计时器。在重新定位期间，信息框和计时器将会被停用。",
      br: "Reposicionar permite que você reposicione caixas de informação e temporizadores na tela. Durante o reposicionamento as caixas de informação e os temporizadores serão desativados.",
      es: "La reposición le permite reposicionar las cajas de información y los temporizadores en la pantalla. Durante el reposicionamiento, las cajas de información y los temporizadores se desactivan.",
    },
    ResetPosition: {
      en: "Reset position", // OK
      de: "Position", // OK
      fr: "Position de réinitialisation",
      ru: "Возврат положения", // OK
      id: "Atur ulang posisi",
      fil: "Reset position",
      zh: "重置位置",
      br: "Reconfigurar posição",
      es: "Reconfigurar posición",
    },
    RESET: {
      en: "RESET", // OK
      de: "ZURÜCKSETZEN", // OK
      fr: "RÉINITIALISER",
      ru: "СБРОС", // OK
      id: "ATUR ULANG",
      fil: "RESET",
      zh: "重置",
      br: "RECONFIGURAR",
      es: "Reconfigurar",
    },
    Language: {
      en: "Language", // OK
      de: "Sprache", // OK
      fr: "Langue",
      ru: "Язык", // OK
      id: "Bahasa",
      fil: "Wika",
      zh: "语言",
      br: "Idioma",
      es: "Idioma",
    },
    Hotkeys: {
      en: "Hotkeys", // OK
      de: "Hotkeys", // OK
      fr: "Raccourcis clavier",
      ru: "Клавиши", // OK, version too long: "Горячие клавиши"
      id: "Hotkeys",
      fil: "Hotkeys",
      zh: "热键",
      br: "Teclas de atalho",
      es: "Teclas de acceso rápido",
    },
    HotkeysTooltip: {
      en: "Hotkey to show & hide app. We recommend setting the hotkey for the Performance Tracker to the same as you use to show Dota's Scoreboard.",
      de: "Hotkey zum Ein- und Ausblenden der App. Wir empfehlen, den Hotkey für den Performance Tracker auf den gleichen Wert einzustellen, den Sie zum Anzeigen von Dota's Scoreboard verwenden.",
      fr: "Raccourci clavier pour afficher et masquer l'application. Nous vous recommandons de définir le raccourci clavier du traqueur de performances sur le même que celui que vous utilisez pour afficher le tableau des scores de Dota.",
      ru: "Горячая клавиша для отображения и скрытия приложения. Мы рекомендуем установить горячую клавишу для отслеживания КПД на клавишу отображения табло Dota.",
      id: "Hotkey untuk menampilkan & menyembunyikan aplikasi. Sebaiknya atur hotkey untuk Performance Tracker sama seperti yang Anda gunakan untuk menunjukkan Scoreboard Dota.",
      fil: "Hotkey para makita o maitago ang app. Inirerekomenda namin na mag set ng hotkey para sa Performance Tracker sa katulad ng pag pakita ng Dota's Scoreboard.",
      zh: "显示和隐藏应用程序的热键。我们建议将个人表现跟踪器的热键设置为与显示Dota记分牌时使用的快捷键相同。",
      br: "Tecla de atalho para mostrar e ocultar o aplicativo. Recomendamos ajustar a tecla de atalho para o Rastreador de Performance para a mesma que você utiliza para mostrar o placar do Dota.",
      es: "Tecla de acceso rápido para mostrar y ocultar la aplicación. Recomendamos configurar la tecla de acceso rápido para el Rastreador de rendimiento de la misma manera que usa para mostrar el marcador de Dota.",
    },
    ShowhideOverlay: {
      en: "Show/hide in-game overlay",
      de: "Spiel-Overlay ein-/ausblenden",
      fr: "Afficher/masquer l'app dans le jeu",
      ru: "Показать/скрыть внутриигровой оверлей",
      id: "Tampilkan/sembunyikan overlay dalam game",
      fil: "Ipakita/itago ang overlay ng in-game",
      zh: "显示/隐藏游戏内悬浮窗",
      br: "Mostrar/ocultar sobreposição no jogo",
      es: "Mostrar/ocultar superposición en el juego",
    },

    // Ultimate window
    Ultimate: {
      en: "Ultimate",
      de: "Ulti",
      fr: "Ultime",
      ru: "Ультимейт",
      fil: "Ultimate",
      zh: "最终技能",
      id: "Ultimate",
      br: "Ult",
      es: "Ult",
    },
    "TIMING MODIFIERS": {
      en: "TIMING MODIFIERS",
      de: "TIMING-MODIFIKATOREN",
      fr: "MODIFICATEURS DE TEMPORISATION",
      ru: "МОДИФИКАТОРЫ ТАЙМИНГОВ",
      id: "PENGUBAH WAKTU",
      fil: "TIMING MODIFIERS",
      zh: "时序修饰符",
      br: "MODIFICADOR DE TEMPORIZADOR",
      es: "MODIFICADOR DE TEMPORIZADOR",
    },
    "Ultimate Level": {
      en: "Ultimate Level",
      de: "Ultimatives Level",
      fr: "Niveau ultime",
      ru: "Уровень Ультимейта",
      id: "Tingkat Ultimate",
      fil: "Ultimate Level",
      zh: "最终技能等级",
      br: "Nível do ult",
      es: "Nivel ult",
    },
    Items: {
      en: "Items",
      de: "Artikel",
      fr: "Objets",
      ru: "Предметы",
      id: "Item",
      fil: "Items",
      zh: "物品",
      br: "Itens",
      es: "Items",
    },
    "Arcane Rune": {
      en: "Arcane Rune",
      de: "Arkane Rune",
      fr: "Rune des arcanes",
      ru: "Руна Волшебства",
      id: "Rune Misteri",
      fil: "Arcane Rune",
      zh: "奥术符文",
      br: "Runa Arcana",
      es: "Runa Arcana",
    },
    Talent: {
      en: "Talent",
      fr: "Talent",
      de: "Talent",
      ru: "Таланты",
      id: "Bakat",
      fil: "Talent",
      zh: "天赋",
      br: "Talento",
      es: "Talento",
    },
    level: {
      en: "level",
      fr: "niveau",
      de: "Niveaus",
      ru: "уровень",
      id: "level",
      fil: "level",
      zh: "级别",
      br: "nível",
      es: "nivel",
    },
    "No delay": {
      en: "No delay",
      de: "Keine Verzögerung",
      fr: "Pas de retard",
      ru: "Без задержек",
      id: "Tidak ada penundaan",
      fil: "No delay",
      zh: "无延迟",
      br: "Sem espera",
      es: "Sin retraso",
    },
    sec: {
      en: "sec",
      de: "Sekunde",
      fr: "seconde",
      ru: "сек",
      id: "detik",
      fil: "sec",
      zh: "秒",
      br: "segundo",
      es: "segundo",
    },
    Adjustment: {
      en: "Adjustment",
      de: "Anpassung",
      fr: "Ajustement",
      ru: "Регулировка",
      id: "Penyesuaian",
      fil: "Adjustment",
      zh: "校准",
      br: "Ajustes",
      es: "Ajustes",
    },
    "Apply to all": {
      en: "Apply to all",
      de: "Auf alle anwenden",
      fr: "Appliquer à tous",
      ru: "Применить ко всем",
      id: "Terapkan untuk semua",
      fil: "Apply to all",
      zh: "全部应用",
      br: "Aplicar a todos",
      es: "Aplicar a todos",
    },
    Buyback: {
      en: "Buyback",
      de: "Rückkauf",
      fr: "Rachat",
      ru: "Выкуп",
      id: "Buyback",
      fil: "Buyback",
      zh: "买活",
      br: "Reviver",
      es: "Buyback",
    },

    // Stats
    OpenDotaAccessError: {
      en: "Error while accessing server.",
      de: "Fehler beim Zugriff auf den Server.",
      fr: "Erreur lors de l'accès au serveur.",
      ru: "Ошибка при доступе к серверу.",
      id: "Galat saat mengakses server.",
      fil: "Error habang ina-access ang server.",
      zh: "访问服务器时出错。",
      br: "Erro ao acessar o servidor.",
      es: "Error al acceder al servidor.",
    },
    PrivateProfile: {
      en: "Player profile is private.",
      de: "Das Spielerprofil ist privat.",
      fr: "Le profil du joueur est défini sur Privé.",
      ru: "Профиль игрока настроен как приватный.",
      id: "Profil pemain diatur ke pribadi.",
      fil: "Player profile ay naka-set sa private.",
      zh: "玩家个人资料已设置为私人。",
      br: "O perfil do jogador está definido como privado.",
      es: "El perfil del jugador está configurado como privado.",
    },
    NoRecentMatches: {
      en: "Player has no recent matches.",
      de: "Der Spieler hat in letzter Zeit keine Spiele.",
      fr: "Le joueur n'a pas fait de matches récents.",
      ru: "У игрока нет последних матчей.",
      id: "Pemain tidak memiliki pertandingan baru-baru ini.",
      fil: "Ang manlalaro ay walang kamakailang mga tugma.",
      zh: "该玩家没有近期的比赛数据。",
      br: "O jogador não tem partidas recentes.",
      es: "El jugador no tiene partidos recientes.",
    },

    // Notifications
    GameStateIntegration: {
      en: "Dota Coach needs access to Game State Integration API provided by Dota 2.<br>Please make sure to add '-gamestateintegration' to Dota 2 launch options.",
      id: "Dota Coach membutuhkan akses ke API Integrasi Negara Game yang disediakan oleh Dota 2. <br>Pastikan untuk menambahkan '-gamestateintegration' ke opsi peluncuran Dota 2.",
      de: "Dota Coach benötigt Zugriff auf die von Dota 2 bereitgestellte Game State Integration API. <br>Bitte stellen Sie sicher, dass Sie „-gamestateintegration“ zu den Startoptionen von Dota 2 hinzufügen.",
      fr: "Dota Coach doit avoir accès à l'API Game State Integration fournie par Dota 2. <br>Assurez-vous d'ajouter « -gamestateintegration » aux options de lancement de Dota 2.",
      ru: "Dota Coach необходим доступ к Игровой интеграции API, предоставляемому Dota 2. <br>Пожалуйста, убедитесь, что вы добавили «-gamestateintegration» в параметры запуска Dota 2.",
      br: "Dota Coach precisa acessar a API de integração do estado do jogo fornecida pelo Dota 2. <br>Certifique-se de adicionar '-gamestateintegration' às opções de lançamento do Dota 2.",
      zh: "Dota Coach需要访问Dota 2提供的游戏状态集成API。<br>请务必在 Dota 2 启动选项中添加 “-gamestateintegration”。",
      es: "Dota Coach necesita acceso a la API de integración de Game State proporcionada por Dota 2. <br>Asegúrate de añadir '-gamestateintegration' a las opciones de lanzamiento de Dota 2.",
      fil: "Dota Coach ay nangangailangan ng access sa Game State Integration API na binigay ng Dota 2. <br>Siguraduhing ilagay ang '-gamestateintegreation' sa Dota 2 launch options.",
    },

    GameStateIntegrationMore: {
      en: "MORE",
      de: "MEHR",
      fr: "PLUS",
      id: "LEBIH",
      fil: "MORE",
      zh: "更多",
      br: "MAIS",
      ru: "БОЛЬШЕ",
      es: "MÁS",
    },

    // Welcome message for new users
    titleQuickStart: {
      en: "Quick Start",
      de: "Schneller Einstieg",
      fr: "Démarrage rapide",
      ru: "Быстрый старт",
      id: "Mulai Cepat",
      fil: "Mabilis na Pagsisimula",
      zh: "快速入门",
      br: "Início rápido",
      es: "Inicio rápido",
    },
    firstTimeUserNotification: {
      en: "Make sure to add '-gamestateintegration' to your Dota launch options (<span id='notificationlink'>Click to here show Guide</span>).<br><br>Costumize Dota Coach to your needs. Head to the settings menu in the top right corner!<br><hr>Interact with timers and infoboxes during the game to get the competetive edge:<br><br>- Press<b> LEFT-CLICK </b>to start Roshan-, Glyph-, Buyback-, Ultimate-Timers.<br>- Press<b> the red X </b>to stop Roshan-, Glyph-, Buyback-, Ultimate-Timers.<br><br>- Press<b> LEFT-CLICK </b>to open infoboxes at the top and at the minimap.<br><hr>You are now an important member of the Dota Coach community<br>and we want to hear from you:<br><br>- Join our <span id='notificationlink'>Discord Server</span> to speak directly with our Pro-Coaches,<br>find like-minded players and suggest Dota Coach changes!<br><br>- Join our <span id='notificationlink'>Subreddit</span> or follow Dota Coach on <span id='notificationlink'>social media</span><br>to get live updates on upcoming changes and improvements!<hr>Still got questions? No worries, we got you covered:<br><br>- <span id='notificationlink'>FAQ</span><br><br>- <span id='notificationlink'>Heropedia</span><br><hr>Want to unleash the full power of Dota Coach in 3 minutes?<br>Watch the full guide video:<br><br><button id='notificationButton'>Guide Video</button><br>",
      de: "Füge '-gamestateintegration' zu deinen Dota-Startoptionen hinzu (<span id='notificationlink'>Klicke hier für weitere Informationen</span>).<br><br>Passe Dota Coach an deine Bedürfnisse an. Gehe dafür zum Einstellungsmenü in der oberen rechten Ecke! <br><hr>Interagiere während des Spiels mit Timern und Infoboxen, um dir einen Vorteil zu verschaffen:<br>- Drücke <b>LINKSKLICK</b> um Roshan-, Glyph-, Buyback- und Ultimate-Timer zu starten.<br>- Drücke <b>das rote X</b> um Roshan-, Glyph-, Buyback- und Ultimate-Timer zu stoppen.<br>- Drücke <b>LINKSKLICK</b> drücken um Infoboxen am oberen Bildschirmrand zu öffnen.<br><hr>Du bist jetzt ein wichtiges Mitglied der Dota Coach-Community und wir möchten von dir hören:<br>- Tritt unserem <span id='notificationlink'>Discord Server</span> bei, um direkt mit uns zu sprechen, gleichgesinnte Spieler zu finden und Ideen einzubringen!<br>- Tritt unserem <span id='notificationlink'>Subreddit</span> bei oder folge uns in den <span id='notificationlink'>sozialen Medien</span>, um Live-Updates zu erhalten! <hr>Hast du noch Fragen? Keine Sorge, wir haben alles für dich bereit:<br>- <span id='notificationlink'>FAQ</span><br>- <span id='notificationlink'>Heropedia</span><br><hr>Möchtest du alle Funktionalitäten von Dota Coach in 3 Minuten kennenlernen? Dann schaue dir unser Tutorial-Video an:<br><br><button id='notificationButton'>Video</button> <br>",
      fr: "Assurez-vous d'ajouter « -gamestateintegration » à vos options de lancement Dota (<span id='notificationlink'>Cliquez ici pour afficher le guide</span>). <br><br>Personnalisez Dota Coach selon vos besoins. Rendez-vous dans le menu des paramètres en haut à droite ! <br><hr>Interagissez avec les minuteurs et les boîtes d'information pendant le jeu pour obtenir un avantage concurrentiel : <br><br>- Appuyez <b>sur LEFT-CLIC</b> pour démarrer Roshan, Glyh-, Buyback-, Ultimate-Timers. <br>- Appuyez sur <b>le X rouge</b> pour arrêter Roshan-, Glyh-, Buyback-, Ultimate-Timers. <br><br>- Appuyez sur le <b>bouton GAUCHE</b> pour ouvrir les boîtes d'information en haut et sur la minicarte. <br><hr>Vous êtes maintenant un membre important de la communauté des entraîneurs Dota <br>et nous voulons avoir de vos nouvelles : <br><br>- Rejoignez notre <span id='notificationlink'>serveur Discord</span> pour parler directement avec nos entraîneurs professionnels, <br>trouver des joueurs partageant les mêmes idées et suggérer des changements d'entraîneur Dota ! <br><br>- Rejoignez notre <span id='notificationlink'>Subreddit</span> ou suivez Dota Coach sur les <span id='notificationlink'>réseaux sociaux</span> <br>pour recevoir des mises à jour en direct sur les changements et améliorations à venir ! <hr>Vous avez encore des questions ? Pas de soucis, nous avons ce qu'il vous faut : <br><br><br><br>- <span id='notificationlink'>FAQ</span> - <span id='notificationlink'>Heropedia</span> <br><hr>Vous voulez libérer toute la puissance de Dota Coach en 3 minutes ? <br>Regardez la vidéo complète du guide : <br><br><button id='notificationButton'>Vidéo du guide</button> <br>",
      ru: "Убедитесь, что вы добавили «-gamestateintegration» в параметры запуска Dota (<span id='notificationlink'>Нажмите здесь, чтобы посмотреть руководство</span>). <br><br>Настройте Dota Coach под свои нужды. Загляните в меню настроек в правом верхнем углу! <br><hr>Пользуйтесь таймерами и инфобоксами во время игры, чтобы получить преимущество: <br><br>- Нажмите<b> ЛЕВУЮ КНОПКУ МЫШИ</b>, чтобы запустить Рошан-, Глиф-, Байбек-, Ултимейт-Таймеры. <br>- Нажмите на <b>красный крест</b>, чтобы остановить Рошан-, Глиф-, Байбек-, Ультимейт-таймеры. <br><br>- <b>Нажмите ЛЕВУЮ КНОПКУ МЫШИ</b>, чтобы открыть инфобоксы вверху и на мини-карте. <br><hr>Теперь вы - часть сообщества Dota Coach, <br>и мы хотим вас услышать: <br><br>- Присоединяйтесь к нашему <span id='notificationlink'>серверу Discord</span>, чтобы напрямую общаться с нашими профессиональными тренерами, <br>находить единомышленников и предлагать свои изменения в Dota Coach! <br><br>- Присоединяйтесь к нашему <span id='notificationlink'>Subreddit</span> или подписывайтесь на Dota Coach в <span id='notificationlink'>социальных сетях</span>, <br>чтобы получать новости о предстоящих изменениях и улучшениях в реальном времени! <hr>Остались вопросы? Мы вам поможем: <br><br>- <span id='notificationlink'>FAQ</span> <br><br>- <span id='notificationlink'>Heropedia</span> <br><hr>Хотите увидеть всю мощь Dota Coach за 3 минуты? <br>Посмотрите полное видео руководство: <br><br><button id='notificationButton'>видеоруководство</button> <br>",
      id: "Pastikan untuk menambahkan '-gamestateintegration' ke opsi peluncuran Dota Anda (<span id='notificationlink'>Klik untuk di sini menunjukkan Panduan</span>). <br><br>Costumize Dota Coach sesuai kebutuhan Anda. Pergi ke menu pengaturan di pojok kanan atas! <br><hr>Berinteraksi dengan timer dan infobox selama pertandingan untuk mendapatkan tepi kompetetif:<br><br>- Tekan<b> KIR-KLIK </b>untuk memulai Roshan-, Glyph-, Buyback-, Ultimate-Timers. <br>- Tekan<b> X merah </b>untuk menghentikan Roshan-, Glyph-, Buyback-, Ultimate-Timers. <br><br>- Tekan<b> KIFT KLIK </b>untuk membuka infobox di bagian atas dan di minimap. <br><hr>Anda sekarang menjadi anggota penting dari komunitas Dota Coach<br>dan kami ingin mendengar dari Anda:<br><br>- Bergabunglah dengan <span id='notificationlink'>Server Discord</span> kami untuk berbicara langsung dengan Pelatih Pro-kami,<br>temukan pemain yang berpikiran sama dan menyarankan perubahan Dota Coach! <br><br>- Bergabunglah dengan <span id='notificationlink'>Subreddit</span> kami atau ikuti Dota Coach di <span id='notificationlink'>media sosial</span> <br>untuk mendapatkan pembaruan langsung tentang perubahan dan peningkatan yang akan datang! <hr>Masih punya pertanyaan? Jangan khawatir, kami punya Anda tertutup:<br><br>- <span id='notificationlink'>FAQ</span><br><br>- <span id='notificationlink'>Heropedia</span><br><hr>Ingin melepaskan kekuatan penuh Dota Coach dalam 3 menit? <br>Tonton video panduan lengkap:<br><br><button id='notificationButton'>Panduan Video</button><br>",
      fil: "Tiyaking idagdag ang '-gamestateintegration' sa iyong mga pagpipilian sa paglulunsad ng Dota (<span id='notificationlink'>I-click upang ipakita dito ang Gabay</span>). <br><br>Costumize Dota Coach sa iyong mga pangangailangan. Tumungo sa menu ng mga setting sa kanang sulok sa itaas! <br><hr>Makipag-ugnay sa mga timers at infoboxes sa panahon ng laro upang makuha ang mapagkumpetensyang gilid:<br><br>- Pindutin ang<b> LEFT-CLICK </b>upang simulan ang Roshan-, Glyph-, Buyback-, Ultimate-Timers. <br>- Pindutin<b> ang pulang X </b>upang ihinto ang Roshan-, Glyph-, Buyback-, Ultimate-Timers. <br><br>- Pindutin ang<b> LEFT-CLICK </b>upang buksan ang mga infobox sa itaas at sa minimap. <br><hr>Ikaw ay isang mahalagang miyembro ng komunidad ng Dota Coach<br>at gusto naming marinig mula sa iyo:<br><br>- Sumali sa aming <span id='notificationlink'>Discord Server</span> upang makipag-usap nang direkta sa aming<br>Pro-Coaches, maghanap ng mga tulad ng pag-iisip na mga manlalaro at magmungkahi ng mga pagbabago sa Dota Coach! <br><br>- Sumali sa aming <span id='notificationlink'>Subreddit</span> o sundin ang Dota Coach sa <span id='notificationlink'>social media</span> <br>upang makakuha ng mga live na update sa mga paparating na pagbabago at pagpapabuti! <hr>Nakakuha pa rin ng mga katanungan? Walang alalahanin, nakuha namin kayo sakop:<br><br>- <span id='notificationlink'>FAQ</span><br><br>- <span id='notificationlink'>Heropedia</span><br><hr>Gusto mong ipamalas ang buong lakas ng Dota Coach sa loob ng 3 minuto? <br>Panoorin ang buong video ng gabay:<br><br><button id='notificationButton'>Gabay sa Video</button><br>",
      zh: "确保在你的 Dota 启动选项中添加 “-gamestateIntegration”（<span id='notificationlink'>点击此处查看指南</span>）。<br><br>在右上角的设置菜单可以根据您的需求自定义 Dota Coach。在@@ <br><hr>游戏过程中与计时器和信息框互动以获得信息优势：<br><br>-按下<b>左键单击</b>以启动 Roshan-、防御符文-、买活-、终极技能-计时器。<br>-按下<b>红色的 X</b> 可停止 Roshan-、防御符文-、买活-、终极技能-计时器。<br><br>-按下<b>左键单击</b>以打开顶部和小地图上的信息框。<br><hr>您现在是Dota Coach社区的重要成员，<br>我们希望收到您的来信：<br><br>-加入我们的 <span id='notificationlink'>Discord服务器</span>直接与我们的专业教练交谈，<br>找到志同道合的玩家并建议Dota Coach的变化！<br><br>-加入我们的 <span id='notificationlink'>Subreddit</span> 或在<span id='notificationlink'>社交媒体</span>上关注Dota Coach<br>，以获取有关即将发生的更改和改进的实时更新！<hr>还有问题吗？不用担心，我们帮你解决了：<br><br>-<span id='notificationlink'>常见问题</span> <br><br>-<span id='notificationlink'>Heropedia</span> <br><hr>想在3分钟内释放Dota Coach的全部力量吗？<br>观看完整的指南视频：<br><br><button id='notificationButton'>指南视频</button> <br>",
      br: "Certifique-se de adicionar '-gamestateintegration' às suas opções de lançamento do Dota (<span id='notificationlink'>Clique aqui para mostrar o guia</span>). <br><br>Personalize o Dota Coach de acordo com suas necessidades. Vá para o menu de configurações no canto superior direito! <br><hr>Interaja com temporizadores e infoboxes durante o jogo para obter a vantagem competitiva: <br><br>- Pressione o <b>botão esquerdo</b> para iniciar Roshan-, Glyph-, Recompra-, Ultimate-Timers. <br>- Pressione <b>o X vermelho</b> para parar Roshan-, Glyph-, Buyback-, Ultimate-Timers. <br><br>- Pressione o <b>botão esquerdo</b> para abrir caixas de informações na parte superior e no minimapa. <br><hr>Agora você é um membro importante da comunidade Dota Coach <br>e queremos ouvir de você: <br><br>- Junte-se ao nosso <span id='notificationlink'>Discord Server</span> para falar diretamente com nossos Pro-Coaches, <br>encontre jogadores com ideias semelhantes e sugira mudanças no Dota Coach <br><br>- Junte-se ao nosso <span id='notificationlink'>Subreddit</span> ou siga o Dota Coach nas <span id='notificationlink'>redes sociais</span> <br>para obter atualizações ao vivo sobre as próximas mudanças e melhorias! <hr>Ainda tenho perguntas? Não se preocupe, nós ajudamos você: <br><br>- <span id='notificationlink'>FAQ</span> <br><br>- <span id='notificationlink'>Heropedia</span> <br><hr>Deseja liberar todo o poder do Dota Coach em 3 minutos? <br>Assista ao vídeo do guia completo: <br><br><button id='notificationButton'>Vídeo do guia</button> <br>",
      es: "Asegúrate de añadir '-gamestateintegration' a tus opciones de lanzamiento de Dota (<span id='notificationlink'>haz clic aquí para mostrar la guía</span>). <br><br>Personaliza Dota Coach a tus necesidades. ¡Dirígete al menú de configuración en la esquina superior derecha! <br><hr>Interactúa con temporizadores y cuadros de información durante el juego para obtener una ventaja competitiva: <br><br>- Pulsa el BOTÓN <b>IZQUIERDO</b> para iniciar Roshan, Glyph, Buyback, Ultimate-Timers. <br>- Presione <b>la X roja</b> para detener Roshan, Glyph, Buyback, Ultimate-Timers. <br><br>- Pulse <b>CLIC IZQUIERDO</b> para abrir cuadros de información en la parte superior y en el minimapa. <br><hr>Ahora eres un miembro importante de la comunidad de entrenadores de Dota <br>y queremos saber de ti: <br><br>- ¡Únete a nuestro <span id='notificationlink'>servidor de Discord</span> para hablar directamente con nuestros entrenadores profesionales, <br>encontrar jugadores con ideas afines y sugerir cambios de entrenador de Dota! <br><br>- ¡Únete a nuestro <span id='notificationlink'>subreddit</span> o sigue a Dota Coach en <span id='notificationlink'>las redes sociales</span> <br>para recibir actualizaciones en vivo sobre los próximos cambios y mejoras! <hr>¿Aún tienes preguntas? No te preocupes, te tenemos cubierto: <br><br>- <span id='notificationlink'>FAQ</span> <br><br>- <span id='notificationlink'>Heropedia</span> <br><hr>¿Quieres liberar toda la potencia de Dota Coach en 3 minutos? <br>Vea el vídeo guía completo: <br><br><button id='notificationButton'>Vídeo guía</button> <br>",
    },

    // Display of error message
    ERROR: {
      en: "ERROR",
      de: "FEHLER",
      fr: "ERREUR",
      ru: "ОШИБКА",
      id: "KESALAHAN",
      fil: "ERROR",
      zh: "错误",
      br: "ERRO",
      es: "ERROR",
    },
  },
};
