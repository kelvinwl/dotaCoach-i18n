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

export const i18n = {
    // Lanuages currently supported by the Dota Coach App
    "config" : {
        "languages": [
            { "code": "en", "name": "English" },
            { "code": "de", "name": "Deutsch" },
            { "code": "fr", "name": "Français" },
            { "code": "ru", "name": "Русский" },
            { "code": "id", "name": "Indonesia" },
            { "code": "zh", "name": "中文" }
        ]
    },

    // Translation of text for the Dota Coach App
    "text" : {
        // InGame window
        "Show/hide": {
            "en": "Show/hide",
            "de": "Ein-/Ausblenden",
            "fr": "Afficher/masquer",
            "ru": "Показать/скрыть",
            "id": "Tampilkan/sembunyikan",
            "zh": "显示/隐藏"
        },
        "Sign in": {
            "en": "Sign in",
            "de": "Anmelden",
            "fr": "Identifiez-vous",
            "ru": "Войдите",
            "id": "Masuk",
            "zh": "登录"
        },
        "Logged in": {
            "en": "Logged in",
            "de": "Angemeldet",
            "fr": "Connecté",
            "ru": "Залогинены",
            "id": "Masuk",
            "zh": "已登录"
        },
        "Logged in as": {
            "en": "Logged in as",
            "de": "Angemeldet als",
            "fr": "Connecté en tant que",
            "ru": "Вы вошли как",
            "id": "Masuk sebagai",
            "zh": "以身份登录"
        },
        "Create ballot": {
            "en": "Create ballot",
            "de": "Stimmzettel erstellen",
            "fr": "Créer un bulletin de vote",
            "ru": "Создать бюллетень",
            "id": "Buat pemungutan suara",
            "zh": "创建选票"
        },
        "Watch tutorial": {
            "en": "Watch tutorial",
            "de": "Tutorial ansehen",
            "fr": "Regardez le didacticiel",
            "ru": "Смотреть учебное пособие",
            "id": "Menonton tutorial",
            "zh": "观看教程"
        },
        "Get help": {
            "en": "Get help",
            "de": "Hilfe holen",
            "fr": "Obtenez de l'aide",
            "ru": "Получите помощь",
            "id": "Dapatkan bantuan",
            "zh": "获取帮助"
        },
        "Report issue": {
            "en": "Report issue",
            "de": "Problem melden",
            "id": "Melaporkan masalah",
            "fr": "Problème de rapport",
            "zh": "报告问题",
            "ru": "Сообщить о проблеме"
        },
        "Join Discord": {
            "en": "Join Discord", // OK
            "de": "Discord beitreten", // OK
            "fr": "Rejoignez Discord",
            "ru": "Присоединяйтесь к Дискорд",
            "zh": "加入不和谐",
            "id": "Bergabung Perselisihan"
        },
        "Join Reddit": {
            "en": "Join Reddit",
            "de": "Reddit beitreten",
            "fr": "Rejoignez Reddit",
            "ru": "Присоединиться к Reddit",
            "id": "Bergabunglah Reddit",
            "zh": "加入红书签交易",
        },
        "Manage subscription": {
            "en": "Manage subscription",
            "de": "Abo verwalten",
            "fr": "Gérer l'abonnement",
            "ru": "Управление подпиской",
            "zh": "管理订阅",
            "id": "Kelola langganan"
        },
        "Change settings": {
            "en": "Change settings", // OK
            "de": "Einstellungen ändern", // OK
            "fr": "Modifier les paramètres",
            "ru": "Изменить настройки",
            "id": "Ubah pengaturan",
            "zh": "更改设置"
        },
        "Click to sign in": {
            "en": "Click to sign in to your Overwolf account",
            "de": "Klicke hier, um dich bei deinem Overwolf-Konto anzumelden",
            "fr": "Cliquez pour vous connecter à votre compte Overwolf",
            "ru": "Нажмите, чтобы войти в свой аккаунт Overwolf",
            "id": "Klik untuk masuk ke akun Overwolf Anda",
            "zh": "点击登录你的 Overwolf 账户"
        },

        // Help window
        "HELP": {
            "en": "HELP",
            "de": "HILFE",
            "fr": "AIDEZ-MOI",
            "ru": "ПОМОЩЬ",
            "id": "MEMBANTU",
            "zh": "救命"
        },
        "FEEDBACK": {
            "en": "FEEDBACK",
            "de": "FEEDBACK",
            "fr": "COMMENTAIRES",
            "ru": "ОБРАТНАЯ СВЯЗЬ",
            "id": "UMPAN BALIK",
            "zh": "反馈"
        },
        "Report an issue": {
            "en": "Report an issue/bug or request support",
            "de": "Ein Problem/Bug melden oder Support anfragen",
            "fr": "Signaler un problème/un bogue ou demander de l'aide",
            "ru": "Сообщить о проблеме/ошибке или обратиться в службу поддержки",
            "id": "Melaporkan masalah/bug atau meminta dukungan",
            "zh": "报告问题/错误或请求支持"
        },
        "Share with us": {
            "en": "What do you want to share with us?",
            "de": "Was möchtest du mit uns teilen?",
            "fr": "Qu'est-ce que tu souhaites partager avec nous ?",
            "ru": "Что вы хотите с нами поделиться?",
            "id": "Apa yang ingin Anda bagikan dengan kami?",
            "zh": "你想和我们分享什么？"
        },
        "Issue description": {
            "en": "Enter description of issue/bug or request for support",
            "de": "Geben Sie eine Beschreibung des Problems/Bugs oder eine Supportanfrage ein",
            "fr": "Entrez la description du problème/du bogue ou de la demande d'assistance",
            "ru": "Введите описание проблемы/ошибки или запроса на поддержку",
            "id": "Masukkan deskripsi masalah/bug atau permintaan untuk dukungan",
            "zh": "输入问题/错误描述或请求支持"
        },
        "SEND_REPORT": {
            "en": "SEND REPORT",
            "de": "BERICHT SENDEN",
            "fr": "ENVOYER UN RAPPORT",
            "ru": "ОТПРАВИТЬ ОТЧЕТ",
            "id": "KIRIM LAPORAN",
            "zh": "发送报告"
        },
        "Contact details": {
            "en": "Contact details (E-Mail/Discord)",
            "de": "Kontaktdaten (E-Mail/Discord)",
            "fr": "Coordonnées (E-Mail/Discord)",
            "ru": "Контактные данные (электронная почта/Discord)",
            "id": "Rincian kontak (E-Mail/Perselisihan)",
            "zh": "联系方式（电子邮件/Discord）"
        },
        "Enter contact details": {
            "en": "Enter your contact details",
            "de": "Gib deine Kontaktdaten ein",
            "fr": "Entrez vos coordonnées",
            "ru": "Введите свои контактные данные",
            "id": "Masukkan detail kontak Anda",
            "zh": "输入您的联系方式"
        },
        "Log files": {
            "en": "Attach Dota Coach log files",
            "de": "Dota-Coach-Protokolldateien anhängen",
            "fr": "Joindre les fichiers journaux Dota Coach",
            "ru": "Прикрепить файлы журнала Dota Coach",
            "id": "Lampirkan file log Dota Coach",
            "zh": "附上 Dota Coach 日志文件"
        },

        // Settings window
        "SETTINGS": {
            "en": "SETTINGS",
            "fr": "PARAMÈTRES",
            "de": "EINSTELLUNGEN",
            "ru": "НАСТРОЙКИ",
            "id": "PENGATURAN",
            "zh": "设置"
        },
        "version": {
            "en": "version",
            "de": "Version",
            "fr": "version",
            "ru": "версия",
            "id": "versi",
            "zh": "版本"
        },
        "channel": {
            "en": "channel",
            "de": "Kanal",
            "fr": "canal",
            "ru": "канал",
            "zh": "渠道",
            "id": "saluran"
        },
        "production": {
            "en": "production",
            "de": "Produktion",
            "fr": "production",
            "ru": "производства",
            "zh": "生产",
            "id": "produksi"
        },
        "beta": {
            "en": "beta",
            "de": "Beta",
            "fr": "bêta",
            "ru": "бета",
            "id": "beta",
            "zh": "测试版"
        },
        "Infoboxes": {
            "en": "Infoboxes", // OK
            "de": "Infoboxen",
            "fr": "Infobox",
            "ru": "Инфобоксы", // OK
            "id": "Infobox",
            "zh": "信息框"
        },
        "InfoboxesTooltip": {
            "en": "Infoboxes are positioned on top of players in matches and provide insights on items and abilities.",
            "de": "Infoboxen werden in Spielen über den Spielern positioniert und bieten Einblicke in Gegenstände und Fähigkeiten.",
            "fr": "Les boîtes d'information sont placées au-dessus des joueurs lors des matchs et fournissent des informations sur les objets et les capacités.",
            "ru": "Инфобоксы расположены поверх игроков в матчах и предоставляют информацию о предметах и способностях.",
            "id": "Infobox diposisikan di atas pemain dalam pertandingan dan memberikan wawasan tentang item dan kemampuan.",
            "zh": "信息框位于比赛中玩家的顶部，提供有关物品和能力的见解。"
        },
        "ItemsAndAbilities": {
            "en": "Items & abilities", // OK
            //"de": "Gegenstände & Fähigkeiten",
            "de": "Gegenstände & Abilities", // OK
            "fr": "Objets et capacités",
            "ru": "Предметы и навыки", // OK, long form: "Предметы и способности"
            "id": "Item & kemampuan",
            "zh": "物品和技能"
        },
        "Timers": {
            "en": "Timers",
            "de": "Timer",
            "fr": "Minuteries",
            "ru": "Таймеры", // OK
            "id": "Timer",
            "zh": "计时器"
        },
        "TimersTooltip": {
            "en": "The timer for Roshan, Glyph of Fortification, Buybacks and Ultimates can be turned off and on here.",
            "de": "Der Timer für Roshan, Glyphe der Befestigung, Rückkäufe und Ultimates kann hier ein- und ausgeschaltet werden.",
            "fr": "Le chronomètre pour Roshan, Glyphe de fortification, Rachats et Ultimates peut être désactivé et activé ici.",
            "ru": "Таймер для Рошана, Символа укрепления, выкупа и ультиматов можно отключить и включить здесь.",
            "id": "Timer untuk Roshan, Glyph of Fortification, Buybacks dan Ultimates dapat dimatikan dan di sini.",
            "zh": "肉山、防御符文、回购和终极版的计时器可以在这里关闭和开启。"
        },
        "RoshanAndGlyph": {
            "en": "Roshan & glyph", // OK
            "de": "Roshan & Glyphe", // OK
            "fr": "Roshan & Glyphe",
            "ru": "Рошан и глиф", // Dota 2 uses "укрепление строений" for Glpyh of Fortification. Translation recommends to keep "глиф" as it is shorter and most of gamers (according to her Internet research) already use this term, and just in case there are a few articles in Russian explaining what "глиф" is.
            "id": "Roshan & mesin terbang",
            "zh": "Roshan & glyph",
        },
        "TeamBuybacks": {
            "en": "Team buybacks", // OK
            "de": "Team Rückkäufe", // OK
            "fr": "Rachats d'équipe",
            "ru": "Командный выкуп", // OK
            "id": "Buyback tim",
            "zh": "团队回购"
        },
        "TeamUltimates": {
            "en": "Team ultimates", // OK
            "de": "Team Ultimates", // OK
            "fr": "Ultimes d'équipe",
            "ru": "Способности команды", // OK, long form: "Особые командные способности"
            "id": "Ultimates tim",
            "zh": "团队终极版"
        },
        "EnemyBuybacks": {
            "en": "Enemy buybacks", // OK
            "de": "Gegnerische Rückkäufe", // OK
            "fr": "Rachats d'ennemis",
            "ru": "Вражеский выкуп", // OK
            "id": "Buyback musuh",
            "zh": "敌人回购"
        },
        "EnemyUltimates": {
            "en": "Enemy ultimates", // OK
            "de": "Gegnerische Ultimates", // OK
            "fr": "Ultimes ennemis",
            "ru": "Способности врага", // OK, long form: "Особые вражеские способности"
            "id": "Ultimates musuh",
            "zh": "敌人终极"
        },
        "subsOnly": {
            "en": "subs only",
            "de": "nur U-Boote",
            "fr": "sous-marins uniquement",
            "ru": "только подложки",
            "zh": "仅限潜艇",
            "id": "kapal selam saja"
        },
        "Coaching": {
            "en": "Coaching",
            "fr": "Coaching",
            "de": "Coaching",
            "ru": "коуТренерство", // OK
            "id": "Coaching",
            "zh": "辅导"
        },
        "CoachingTooltip": {
            "en": "Coaching for hero picks, item builds and enemy heroes can be set here.",
            "de": "Coaching für Heldenauswahl, Item-Builds und feindliche Helden können hier eingestellt werden.",
            "fr": "L'entraînement pour les choix de héros, les constructions d'objets et les héros ennemis peut être défini ici.",
            "ru": "Здесь можно настроить коучинг для выбора героев, сборки предметов и вражеских героев.",
            "id": "Pelatihan untuk memilih pahlawan, item membangun dan pahlawan musuh dapat diatur di sini.",
            "zh": "可以在这里设置英雄精选、物品建造和敌方英雄的教练。"
        },
        "HeroPicksAndItemBuilds": {
            "en": "Hero picks & item builds", // OK
            "de": "Heldenauswahl & Items", // OK
            "fr": "Choix de héros et constructions d'objets",
            "ru": "Выбрать героев и предметы", // OK, long form: "Характеристики героев и предметов"
            "id": "Pahlawan picks & item membangun",
            "zh": "英雄精选和物品构建"
        },
        "OwnHeroVoice": {
            "en": "Own hero (voice)", // OK
            "de": "Eigener Held (Stimme)", // OK
            "fr": "Propre héros (voix)",
            "ru": "Свой герой (голос)", // OK, short form: "Собственный герой (голос)"
            "id": "Pahlawan sendiri (suara)",
            "zh": "自己的英雄（声音）"
        },
        "EnemyHeroesVoice": {
            "en": "Enemy heroes (voice)", // OK
            "de": "Gegnerische Helden (Stimme)", // OK
            "fr": "Héros ennemis (voix)",
            "ru": "Вражеские герои (голос)", // OK
            "id": "Pahlawan musuh (suara)",
            "zh": "敌方英雄（声音）"
        },
        "Notifications": {
            "en": "Notifications", // OK
            "de": "Benachrichtigungen", // OK
            "fr": "Les notifications",
            "ru": "Уведомления", // OK
            "id": "Notifikasi",
            "zh": "通知"
        },
        "NotificationsTooltip": {
            "en": "Notifications provided during the game to remind you of events such as the apprearance of bounty runes. You can enable or disable the different messages individually.",
            "de": "Während des Spiels erhältliche Benachrichtigungen, die dich an Ereignisse wie das Erscheinen von Kopfgeldrunen erinnern. Sie können die verschiedenen Nachrichten einzeln ein- oder ausschalten.",
            "fr": "Notifications fournies pendant le jeu pour vous rappeler des événements tels que l'apparition de runes de prime. Vous pouvez activer ou désactiver les différents messages individuellement.",
            "ru": "Уведомления, предоставляемые во время игры, чтобы напомнить вам о таких событиях, как появление рун с наградами. Различные сообщения можно включать или отключать по отдельности.",
            "id": "Pemberitahuan yang disediakan selama pertandingan untuk mengingatkan Anda tentang peristiwa seperti apprearance dari rune karunia. Anda dapat mengaktifkan atau menonaktifkan pesan yang berbeda secara individual.",
            "zh": "游戏期间提供的通知，提醒你注意诸如赏金符文出现之类的事件。您可以单独启用或禁用不同的消息。"
        },
        "BountyRunes": {
            "en": "Bounty runes", // OK
            "de": "Bounty Runes", // OK
            "fr": "Bounty runes",
            "ru": "Bounty Runes", // OK "Руны богатства"
            "id": "Rune Bounty",
            "zh": "赏金符文"
        },
        "WaterAndPowerRunes": {
            "en": "Water & power runes", // OK
            "de": "Water & Power Runes", // OK
            "fr": "Runes pour l'eau et l'énergie",
            "ru": "Water & Power Runes", // OK (Руны воды и силы)
            "id": "Rune air & daya",
            "zh": "水和力量符文"
        },
        "NeutralItems": {
            "en": "Neutral items",
            "de": "Neutrale Gegenstände",
            "fr": "Articles neutres",
            "ru": "Нейтральные предметы", // OK
            "id": "Item netral",
            "zh": "中性物品"
        },
        "ObserverWards": {
            "en": "Observer wards", // OK
            "de": "Observer Wards", // OK
            "fr": "Les quartiers des observateurs",
            "ru": "Observer Wards", // OK
            "id": "Pengamat bangsal",
            "zh": "观察员病房"
        },
        "SmokeOfDeceit": {
            "en": "Smoke of deceit", // OK
            "de": "Smoke of Deceit", // OK
            "fr": "La fumée de la tromperie",
            "ru": "Smoke of Deceit", // OK
            "id": "Asap tipu daya",
            "zh": "欺骗的烟雾"
        },
        "TomeOfKnowledge": {
            "en": "Tome of knowledge", // OK
            "de": "Tome of Knowledge", // OK
            "fr": "Tome de connaissances",
            "ru": "Tome of Knowledge", // OK
            "id": "Tome pengetahuan",
            "zh": "知识之书"
        },
        "AghanimsShard": {
            "en": "Aghanim's shard", // OK
            "de": "Aghanims Splitter", // OK
            "fr": "Fragment d'Aghanim",
            "ru": "Aghanim's Shard", // OK
            "id": "Shard Aghanim",
            "zh": "阿哈利姆的碎片"
        },
        "SiegeCreeps": {
            "en": "Siege creeps", // OK
            "de": "Belagerungsdiener", // OK
            "fr": "Creeps de siège",
            "ru": "Катапульта", // OK
            "zh": "攻城小兵",
            "id": "Pengepungan merayap"
        },
        "Daytime": {
            "en": "Daytime", // OK
            "de": "Tageszeit", // OK
            "fr": "diurne",
            "ru": "Дневное время", // OK
            "id": "Siang",
            "zh": "白天"
        },
        "Subtitles": {
            "en": "Subtitles", // OK
            "de": "Untertitel", // OK
            "fr": "Sous-titres",
            "ru": "Субтитры", // OK
            "id": "subtitel",
            "zh": "字幕"
        },
        "SubtitlesTooltip": {
            "en": "Configure manual and automated message sharing through the Dota 2 team chat. Manual message sharing is triggered by left-clicking on timers or the loudspeaker.",
            "de": "Konfigurieren Sie die manuelle und automatisierte Nachrichtenfreigabe über den Dota 2-Teamchat. Die manuelle Nachrichtenfreigabe wird durch Linksklick auf Timer oder Lautsprecher ausgelöst.",
            "fr": "Configurez le partage manuel et automatique des messages via le chat d'équipe Dota 2. Le partage manuel des messages est déclenché par un clic gauche sur les minuteries ou le haut-parleur.",
            "ru": "Настройте ручной и автоматический обмен сообщениями через командный чат Dota 2. Ручной обмен сообщениями запускается щелчком левой кнопки мыши на таймерах или громкоговорителе.",
            "id": "Konfigurasikan berbagi pesan manual dan otomatis melalui obrolan tim Dota 2. Berbagi pesan manual dipicu oleh klik kiri pada timer atau loudspeaker.",
            "zh": "通过Dota 2团队聊天配置手动和自动消息共享。左键单击计时器或扬声器即可触发手动信息共享。"
        },
        "ShowSubtitles": {
            "en": "Show subtitles", // OK
            "de": "Untertitel anzeigen", // OK
            "fr": "Afficher les sous-titres",
            "ru": "Показывать субтитры", // OK
            "id": "Tampilkan sub judul",
            "zh": "显示字幕"
        },
        "ManualSharing": {
            "en": "Manual sharing", // OK
            "de": "Manuelles Teilen", // OK
            "fr": "Partage manuel",
            "ru": "Делиться вручную", // OK
            "id": "Berbagi manual",
            "zh": "手动共享"
        },
        "AutomatedSharing": {
            "en": "Automated sharing", // OK
            "de": "Automatisches Teilen", // OK
            "fr": "Partage automatique",
            "ru": "Делиться автоматически", // OK
            "id": "Berbagi otomatis",
            "zh": "自动共享"
        },
        "RoshanAndAegis": {
            "en": "Roshan & Aegis", // OK
            "de": "Roshan & Aegis", // OK
            "fr": "Roshan & Aegis",
            "ru": "Рошан и Aegis", // OK (Рошан и Эгида)
            "id": "Roshan & Aegis",
            "zh": "Roshan & Aegis"
        },
        "PerformanceTracker": {
            "en": "Performance tracker", // OK
            "de": "Leistungs-Tracker", // OK
            "fr": "Traqueur de performance",
            "ru": "Трекер КПД", // OK, long form: "Трекер производительности"
            "id": "Pelacak kinerja",
            "zh": "绩效跟踪器"
        },
        "PerformanceTrackerTooltip": {
            "en": "Configure the performance tracker to your needs. Note that the layout depends on your Dota Plus subscription in Dota 2.",
            "de": "Konfigurieren Sie den Performance-Tracker nach Ihren Bedürfnissen. Beachten Sie, dass das Layout von Ihrem Dota Plus-Abonnement in Dota 2 abhängt.",
            "fr": "Configurez le suivi des performances selon vos besoins. Notez que la mise en page dépend de votre abonnement Dota Plus dans Dota 2.",
            "ru": "Настройте средство отслеживания производительности в соответствии со своими потребностями. Обратите внимание, что раскладка зависит от вашей подписки на Dota Plus в Dota 2.",
            "id": "Konfigurasikan pelacak kinerja sesuai kebutuhan Anda. Perhatikan bahwa tata letak tergantung pada langganan Dota Plus Anda di Dota 2.",
            "zh": "根据需要配置绩效跟踪器。请注意，布局取决于您在Dota 2中的Dota Plus订阅。",
        },
        "ShowTracker": {
            "en": "Show tracker",
            "de": "Tracker anzeigen",
            "fr": "Afficher le tracker",
            "ru": "Показать трекер",
            "id": "Tampilkan pelacak",
            "zh": "显示跟踪器"
        },
        "DotaPlusSubscriber": {
            "en": "Dota Plus subscriber", // OK
            "de": "Dota Plus-Abonnent", // OK
            "fr": "Abonné Dota Plus",
            "ru": "Подписчик Dota Plus", // OK
            "id": "Pelanggan Dota Plus",
            "zh": "刀塔 Plus 订阅者"
        },
        "GoalLeft": {
            "en": "Goal left:", // OK
            "de": "Ziel links:", // OK
            "fr": "But à gauche :",
            "ru": "Цель слева:", // OK
            "id": "Tujuan kiri:",
            "zh": "左进球："
        },
        "GoalRight": {
            "en": "Goal right:", // OK
            "de": "Ziel rechts:", // OK
            "fr": "But droit :",
            "ru": "Цель справа:", // OK
            "id": "Tujuan yang tepat:",
            "zh": "目标右："
        },
        "YourMedian": {
            "en": "Your median", // OK
            "de": "Dein Median", // OK
            "fr": "Votre médiane",
            "ru": "Ваш центр", // OK
            "id": "Median Anda",
            "zh": "你的中位数"
        },
        "YourBest": {
            "en": "Your best", // OK
            "de": "Dein Bestresultat", // OK
            "fr": "Votre meilleur",
            "ru": "Ваш лучший",
            "id": "Yang terbaik",
            "zh": "你最好的"
        },
        "PeerMedian": {
            "en": "Peer median", // OK
            "de": "Peer Median", // OK
            "fr": "Médiane des pairs",
            "ru": "Центр соратников", // OK
            "id": "Median sebaya",
            "zh": "对等中位数"
        },
        "PeerBest": {
            "en": "Peer best",  // OK
            "de": "Peer Bestresultat",  // OK
            "fr": "Meilleur par les pairs",
            "ru": "Лучший пир",
            "id": "Peer terbaik",
            "zh": "同行最好"
        },
        "None": {
            "en": "None",
            "de": "Keine",
            "fr": "Aucun",
            "ru": "Нет",
            "id": "Tidak ada",
            "zh": "无"
        },
        "YourNameLeaderboard": {
            "en": "Your name (for leaderboard)",
            "de": "Dein Name (für Bestenliste)",
            "fr": "Votre nom (pour le classement)",
            "ru": "Имя (для рейтинга)", // OK, version too long: "Ваше имя (для таблицы лидеров)"
            "id": "Nama Anda (untuk leaderboard)",
            "zh": "你的名字（用于排行榜）"
        },
        "HideMainWindow": {
            "en": "Hide main window", // OK
            "de": "App ausblenden", // OK
            "fr": "Masquer la fenêtre principale",
            "ru": "Скрыть окно", // OK, versoin too long: "Скрыть главное окно"
            "id": "Sembunyikan jendela utama",
            "zh": "隐藏主窗口"
        },
        "HideMainWindowTooltip": {
            "en": "This feature allows you to automatically show and hide app during game.",
            "de": "Mit dieser Funktion können Sie die App während des Spiels automatisch ein- und ausblenden.",
            "fr": "Cette fonctionnalité vous permet d'afficher et de masquer automatiquement l'application pendant le jeu.",
            "ru": "Эта функция позволяет автоматически показывать и скрывать приложение во время игры.",
            "id": "Fitur ini memungkinkan Anda untuk secara otomatis menampilkan dan menyembunyikan aplikasi selama pertandingan.",
            "zh": "此功能允许您在游戏过程中自动显示和隐藏应用程序。"
        },
        "DuringHeroSelection": {
            "en": "During hero selection", // OK
            "de": "Während Heldenauswahl", // OK
            "fr": "Pendant la sélection des héros",
            "ru": "Во время выбора героя", // OK
            "id": "Selama pemilihan pahlawan",
            "zh": "在英雄选择过程中"
        },
        "DuringGame": {
            "en": "During game", // OK
            "de": "Während Spiel", // OK
            "fr": "Pendant le match",
            "ru": "Во время игры", // OK
            "id": "Selama pertandingan",
            "zh": "在比赛中"
        },
        "MisclickProtection": {
            "en": "Misclick protection", // OK
            "de": "Fehlklickschutz", // OK
            "fr": "Protection contre les faux clics",
            "ru": "Защита от промаха", // OK
            "id": "Perlindungan misclick",
            "zh": "误点击保护"
        },
        "MisclickProtectionTooltip": {
            "en": "Time in seconds that input isn't registered when the mouse first enters the timers. Default is 0.2 seconds.",
            "de": "Zeit in Sekunden, die nicht registriert wird, wenn die Maus die Timer zum ersten Mal betritt. Die Standardeinstellung ist 0,2 Sekunden.",
            "fr": "Durée en secondes pendant laquelle l'entrée n'est pas enregistrée lorsque la souris entre pour la première fois dans les temporisateurs. La valeur par défaut est 0,2 seconde.",
            "ru": "Время в секундах, когда мышь впервые входит в таймеры, ввод не регистрируется. По умолчанию 0,2 секунды.",
            "id": "Waktu dalam hitungan detik bahwa input tidak terdaftar ketika mouse pertama kali memasuki timer. Default adalah 0,2 detik.",
            "zh": "鼠标首次进入计时器时未注册输入的时间（以秒为单位）。默认值为0.2秒。"
        },
        "Delay": {
            "en": "Delay", // OK
            "de": "Verzug", // OK
            "fr": "Retard",
            "ru": "Задержка", // OK
            "id": "Keterlambatan",
            "zh": "延迟"
        },
        "Audio": {
            "en": "Audio", // OK
            "de": "Audio", // OK
            "fr": "Audio",
            "ru": "Аудио", // OK
            "id": "Audio",
            "zh": "音频"
        },
        "Disabled": {
            "en": "Disabled",
            "ru": "Инвалид",
            "fr": "handicapé",
            "de": "Deaktiviert",
            "id": "Dinonaktifkan",
            "zh": "已禁用"
        },
        "AudioTooltip": {
            "en": "Select speaker device and set volume.",
            "de": "Lautsprechergerät wählen und Lautstärke einstellen.",
            "fr": "Sélectionnez le haut-parleur et réglez le volume.",
            "ru": "Выберите акустическое устройство и установите громкость.",
            "id": "Pilih perangkat speaker dan atur volume.",
            "zh": "选择扬声器设备并设置音量。"
        },
        "Speaker": {
            "en": "Speaker", // OK
            "de": "Lautsprecher", // OK
            "fr": "haut-parleur",
            "ru": "Колонка", // OK
            "id": "pengeras suara",
            "zh": "扬声器"
        },
        "Volume": {
            "en": "Volume", // OK
            "de": "Volumen", // OK
            "fr": "Volume",
            "ru": "Громкость", // OK
            "id": "Volume",
            "zh": "音量"
        },
        "Test": {
            "en": "Test", // OK
            "de": "Testen", // OK
            "fr": "Test",
            "ru": "Проверка", // OK
            "id": "Tes",
            "zh": "测试"
        },
        "SecondScreen": {
            "en": "Second screen", // OK
            "de": "Zweiter Bildschirm", // OK
            "fr": "Deuxième écran",
            "ru": "Второй экран", // OK
            "id": "Layar kedua",
            "zh": "第二个屏幕"
        },
        "SecondScreenTooltip": {
            "en": "Users playing in windowed mode or having two or more monitors can benefit from a second screen providing additional information.",
            "de": "Benutzer, die im Fenstermodus spielen oder über zwei oder mehr Monitore verfügen, können von einem zweiten Bildschirm mit zusätzlichen Informationen profitieren.",
            "fr": "Les utilisateurs jouant en mode fenêtré ou disposant de deux moniteurs ou plus peuvent bénéficier d'un deuxième écran fournissant des informations supplémentaires.",
            "ru": "Пользователи, играющие в оконном режиме или имеющие два или более монитора, могут получить дополнительную информацию на втором экране.",
            "id": "Pengguna yang bermain dalam mode berjendela atau memiliki dua atau lebih monitor bisa mendapatkan keuntungan dari layar kedua yang memberikan informasi tambahan.",
            "zh": "在窗口模式下玩游戏或拥有两台或更多显示器的用户可以从提供额外信息的第二个屏幕中受益。"
        },
        "Monitor": {
            "en": "Monitor", // OK
            "de": "Monitor", // OK
            "fr": "Moniteur",
            "ru": "Монитор",
            "id": "Memantau",
            "zh": "监控"
        },
        "Reposition": {
            "en": "Reposition", // OK
            "de": "Umpositionierung", // OK
            "fr": "Repositionnement",
            "ru": "Перестановка", //OP, long form: Изменение позиции"
            "id": "Reposisi",
            "zh": "重新定位"
        },
        "RepositionTooltip": {
            "en": "Reposition allows you to reposition infoboxes and timers on the screen. During repositioning the infoboxes and timers are deactivated.",
            "de": "Durch die Umpositionierung können Sie Infoboxen und Timer auf dem Bildschirm neu positionieren. Während der Neupositionierung sind die Infoboxen und Timer deaktiviert.",
            "fr": "Repositionnement vous permet de repositionner les infoboxes et les minuteries à l'écran. Lors du repositionnement, les boîtes d'information et les minuteries sont désactivées.",
            "ru": "Перемещение позволяет перемещать информационные блоки и таймеры на экране. Во время изменения положения инфобоксы и таймеры деактивируются.",
            "id": "Reposisi memungkinkan Anda untuk memposisikan ulang kotak informasi dan timer di layar. Selama reposisi infobox dan timer dinonaktifkan.",
            "zh": "“重新定位” 允许您在屏幕上重新定位信息框和计时器。在重新定位期间，信息框和计时器被停用。"
        },
        "ResetPosition": {
            "en": "Reset position", // OK
            "de": "Position", // OK
            "fr": "Position de réinitialisation",
            "ru": "Сбросить позицию", // OK
            "id": "Atur ulang posisi",
            "zh": "重置位置"
        },
        "RESET": {
            "en": "RESET", // OK
            "de": "ZURÜCKSETZEN", // OK
            "fr": "RÉINITIALISER",
            "ru": "СБРОС", // OK
            "id": "ATUR ULANG",
            "zh": "重置"
        },
        "Language": {
            "en": "Language", // OK
            "de": "Sprache", // OK
            "fr": "Langue",
            "ru": "Язык", // OK
            "id": "Bahasa",
            "zh": "语言"
        },
        "Hotkeys": {
            "en": "Hotkeys", // OK
            "de": "Hotkeys", // OK
            "fr": "Raccourcis clavier",
            "ru": "Клавиши", // OK, version too long: "Горячие клавиши"
            "id": "Hotkeys",
            "zh": "热键"
        },
        "HotkeysTooltip": {
            "en": "Hotkey to show & hide app. We recommend setting the hotkey for the Performance Tracker to the same as you use to show Dota's Scoreboard.",
            "de": "Hotkey zum Ein- und Ausblenden der App. Wir empfehlen, den Hotkey für den Performance Tracker auf den gleichen Wert einzustellen, den Sie zum Anzeigen von Dota's Scoreboard verwenden.",
            "fr": "Raccourci clavier pour afficher et masquer l'application. Nous vous recommandons de définir le raccourci clavier du traqueur de performances sur le même que celui que vous utilisez pour afficher le tableau des scores de Dota.",
            "ru": "Горячая клавиша для отображения и скрытия приложения. Мы рекомендуем установить горячую клавишу для отслеживания производительности так же, как вы используете для отображения табло Dota.",
            "id": "Hotkey untuk menampilkan & menyembunyikan aplikasi. Sebaiknya atur hotkey untuk Performance Tracker sama seperti yang Anda gunakan untuk menunjukkan Scoreboard Dota.",
            "zh": "显示和隐藏应用程序的热键。我们建议将性能跟踪器的热键设置为与显示Dota记分牌时使用的快捷键相同。"
        },
        "ShowHideMainApp": {
            "en": "Show/hide main app", // OK
            "de": "App ein-/ausblenden", // OK
            "fr": "Afficher/masquer l'application principale",
            "ru": "Вид приложения", // OK, long form "Показать/скрыть главное приложение"
            "id": "Tampilkan/sembunyikan aplikasi utama",
            "zh": "显示/隐藏主应用程序"
        },
        "ShowHideSecondScreen": {
            "en": "Show/hide second screen", // OK
            "de": "Zweiter Bildschirm ein-/ausblenden", // OK
            "fr": "Afficher/masquer le deuxième écran",
            "ru": "Показать/скрыть второй экран", // OK
            "id": "Tampilkan/sembunyikan layar kedua",
            "zh": "显示/隐藏第二个屏幕"
        },
        "ShowHideTimers": {
            "en": "Show/hide timers", // OK
            "de": "Timer ein-/ausblenden", // OK
            "fr": "Afficher/masquer les minuteries",
            "ru": "Показать/скрыть таймеры", // OK
            "id": "Tampilkan/sembunyikan timer",
            "zh": "显示/隐藏计时器"
        },
          "ShowHidePerformanceTracker": {
            "en": "Show/hide performance tracker", // OK
            "de": "Performance-Tracker ein-/ausblenden", // OK
            "fr": "Afficher/masquer le suivi des performances",
            "ru": "Показать/скрыть трекер КПД", // OK, long form: "Показать/скрыть трекер производительности"
            "id": "Tampilkan/sembunyikan pelacak kinerja",
            "zh": "显示/隐藏绩效跟踪器"
        },

        // Ultimate window
        "Ultimate": {
            "en": "Ultimate",
            "de": "Ultimative",
            "fr": "Ultime",
            "ru": "Окончательный",
            "zh": "终极",
            "id": "Ultimate"
        },
        "TIMING MODIFIERS": {
            "en": "TIMING MODIFIERS",
            "de": "TIMING-MODIFIKATOREN",
            "fr": "MODIFICATEURS DE TEMPORISATION",
            "ru": "МОДИФИКАТОРЫ СИНХРОНИЗАЦИИ",
            "id": "PENGUBAH WAKTU",
            "zh": "时序修饰符"
        },
        "Ultimate Level": {
            "en": "Ultimate Level",
            "de": "Ultimatives Level",
            "fr": "Niveau ultime",
            "ru": "Окончательный уровень",
            "id": "Tingkat Ultimate",
            "zh": "终极等级"
        },
        "Items": {
            "en": "Items",
            "de": "Artikel",
            "fr": "Objets",
            "ru": "Предметы",
            "id": "Item",
            "zh": "物品"
        },
        "Arcane Rune": {
            "en": "Arcane Rune",
            "de": "Arkane Rune",
            "fr": "Rune des arcanes",
            "ru": "Магическая руна",
            "id": "Rune Misteri",
            "zh": "奥术符文"
        },
        "Talent": {
            "en": "Talent",
            "fr": "Talent",
            "de": "Talent",
            "ru": "Таланты",
            "id": "Bakat",
            "zh": "天赋"
        },
        "level": {
            "en": "level",
            "fr": "niveau",
            "de": "Niveaus",
            "ru": "уровень",
            "id": "level",
            "zh": "级别"
        },
        "No delay": {
            "en": "No delay",
            "de": "Keine Verzögerung",
            "fr": "Pas de retard",
            "ru": "Без задержек",
            "id": "Tidak ada penundaan",
            "zh": "没有延迟"
        },
        "sec": {
            "en": "sec",
            "de": "Sekunde",
            "fr": "seconde",
            "ru": "сек",
            "id": "detik",
            "zh": "秒"
        },
        "Adjustment": {
            "en": "Adjustment",
            "de": "Anpassung",
            "fr": "Ajustement",
            "ru": "Регулировка",
            "id": "Penyesuaian",
            "zh": "调整"
        },
        "Apply to all": {
            "en": "Apply to all",
            "de": "Auf alle anwenden",
            "fr": "Appliquer à tous",
            "ru": "Применить ко всем",
            "id": "Terapkan untuk semua",
            "zh": "适用于全部"
        },
        "Buyback": {
            "en": "Buyback",
            "de": "Rückkauf",
            "fr": "Rachat",
            "ru": "Выкуп",
            "id": "Buyback",
            "zh": "回购"
        },

        // Display of error message
        "ERROR": {
            "en": "ERROR",
            "de": "FEHLER",
            "fr": "ERREUR",
            "ru": "ОШИБКА",
            "id": "KESALAHAN",
            "zh": "错误"
        }
    }
}