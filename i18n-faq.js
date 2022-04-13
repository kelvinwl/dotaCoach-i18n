// i18n-faq.js
/**
 * Holds all localized strings for the web FAQ
 */

 const i18n = {
	// languages
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

	text: {
		// Headers
		headerFaq: {
			en: "Frequently Asked Questions (FAQs)",
			de: "Häufig gestellte Fragen (FAQs)",
			fr: "Foire aux questions (FAQ)", // #toBeUpdated
			ru: "Часто задаваемые вопросы (FAQ)", // #toBeUpdated
			id: "Pertanyaan yang Sering Diajukan (FAQ)", // #toBeUpdated
			fil: "Mga Madalas Itanong (FAQ)", // #toBeUpdated
			zh: "常见问题解答(FAQs)",
			br: "Perguntas frequentes (FAQs)",
			es: "Preguntas frecuentes (FAQ)", // #toBeUpdated
		},
		mostPopular: {
			en: "Most Popular Questions",
			de: "Populäre Fragen",
			fr: "Questions les plus populaires", // #toBeUpdated
			ru: "Самые популярные вопросы", // #toBeUpdated
			id: "Pertanyaan Paling Populer", // #toBeUpdated
			fil: "Pinaka-popular na mga Tanong", // #toBeUpdated
			zh: "最常见的问题",
			br: "Perguntas mais populares",
			es: "Preguntas más populares", // #toBeUpdated
		},
		// Answer
		btnAnswer: {
			en: "Answer",
			de: "Antwort",
			fr: "Réponse", // #toBeUpdated
			ru: "Ответ", // #toBeUpdated
			id: "Jawaban", // #toBeUpdated
			fil: "Sagot", // #toBeUpdated
			zh: "回答",
			br: "Resposta",
			es: "Respuesta", // #toBeUpdated
		},
		// Navigation Buttons
		btnSubscription: {
			en: "Subscription",
			de: "Abo",
			fr: "Abonnement",
			ru: "подписка", // #toBeUpdated
			id: "Berlangganan", // #toBeUpdated
			fil: "Subscription", // #toBeUpdated
			zh: "订阅问题",
			br: "Assinatura",
			es: "Suscripción", // #toBeUpdated
		},
		btnAccount: {
			en: "Account",
			de: "Konto",
			fr: "Compte", // #toBeUpdated
			ru: "учетная запись", // #toBeUpdated
			id: "Akun", // #toBeUpdated
			fil: "Account", // #toBeUpdated
			zh: "账号问题", // #toBeUpdated
			br: "Conta",
			es: "Cuenta", // #toBeUpdated
		},
		btnApplication: {
			en: "Application",
			de: "Applikation",
			fr: "Demande", // #toBeUpdated
			ru: "заявка", // #toBeUpdated
			id: "Aplikasi", // #toBeUpdated
			fil: "Application", // #toBeUpdated
			zh: "应用问题",
			br: "Aplicação",
			es: "Aplicación", // #toBeUpdated
		},
		btnIssues: {
			en: "Issues",
			de: "Probleme",
			fr: "Problèmes", // #toBeUpdated
			ru: "Проблемы", // #toBeUpdated
			id: "Masalah", // #toBeUpdated
			fil: "Mga Isyu", // #toBeUpdated
			zh: "使用问题", // #toBeUpdated
			br: "Problemas",
			es: "Problemas", // #toBeUpdated
		},
		btnAudio: {
			en: "Audio",
			de: "Audio",
			fr: "Système audio", // #toBeUpdated
			ru: "Аудио", // #toBeUpdated
			id: "Audio", // #toBeUpdated
			fil: "Audio", // #toBeUpdated
			zh: "声音问题",
			br: "Áudio",
			es: "Audio", // #toBeUpdated
		},
		btnTimers: {
			en: "Timers",
			de: "Timer",
			fr: "Minuteries", // #toBeUpdated
			ru: "Таймеры", // #toBeUpdated
			id: "Timer", // #toBeUpdated
			fil: "Timers", // #toBeUpdated
			zh: "计时器问题",
			br: "Cronômetros",
			es: "Temporizadores", // #toBeUpdated
		},
		btnGamemodes: {
			en: "Game Modes",
			de: "Spielmodi",
			fr: "Modes de jeu", // #toBeUpdated
			ru: "Игровые режимы", // #toBeUpdated
			id: "Mode Permainan", // #toBeUpdated
			fil: "Mga Mode ng Laro", // #toBeUpdated
			zh: "游戏模式问题",
			br: "Modos de jogo",
			es: "Modos de juego", // #toBeUpdated
		},
		btnHeroguides: {
			en: "Hero Guides",
			de: "Helden Ratgeber",
			fr: "Guides des héros", // #toBeUpdated
			ru: "Руководства по героям", // #toBeUpdated
			id: "Panduan Pahlawan", // #toBeUpdated
			fil: "Mga Gabay sa Bayani", // #toBeUpdated
			zh: "英雄指南问题",
			br: "Guias de heróis",
			es: "Guías de héroes", // #toBeUpdated
		},
		btnWindows: {
			en: "Windows",
			de: "Fenster",
			fr: "Fenêtres", // #toBeUpdated
			ru: "Windows", // #toBeUpdated
			id: "Windows", // #toBeUpdated
			fil: "Windows", // #toBeUpdated
			zh: "窗口问题",
			br: "Janela", // singular = Janela, plural = Janelas
			es: "Windows", // #toBeUpdated
		},
		btnHotkeys: {
			en: "Hotkeys",
			de: "Hotkeys",
			fr: "Raccourcis clavier", // #toBeUpdated
			ru: "Горячие клавиши", // #toBeUpdated
			id: "Hotkeys", // #toBeUpdated
			fil: "Hotkeys", // #toBeUpdated
			zh: "热键问题",
			br: "Teclas de atalho",
			es: "Teclas rápidas", // #toBeUpdated
		},
		// Subscription questions
		subFeatures: {
			question: {
				en: "What features do I get?",
				de: "Welche Besonderheiten weißt die pro Verion auf?",
				fr: "Quelles sont les fonctionnalités que j'obtiens ?", // #toBeUpdated
				ru: "Какие функции я получу?", // #toBeUpdated
				id: "Fitur apa yang saya dapatkan?", // #toBeUpdated
				fil: "Anong mga tampok ang nakukuha ko?", // #toBeUpdated
				zh: "订阅可以获得什么功能？",
				br: "Quais recursos eu recebo?",
				es: "¿Qué funciones obtengo?", // #toBeUpdated
			},
			content: {
				en: `Our pro coach version comes a long with a number of features:<br>
					<ul>
						<li>Voice coaching for all heroes Dota 2 has to offer.</li>
						<li>Adjustable ultimate timers for the enemy and your team.</li>
						<li>Advertisement free Dota Coach experience.</li>
						<li>Supporter Discord role.</li>
					</ul>`,
				de: `Unsere pro Version kommt in einer Zahl von Besonderheiten:<br>
					<ul>
						<li>Sprach coaching für alle Helden die Dota 2 bietet.</li>
						<li>Einstellbare Ultimate-Timer für Gegner und Team.</li>
						<li>Eine werbefreie Dota Coach Erfahrung.</li>
						<li>Supporter Discord Rolle.</li>
					</ul>`,
				fr: `Notre version coach pro est livrée avec un certain nombre de fonctionnalités : le <br><ul><li>coaching vocal pour tous les héros que Dota 2 a à offrir. </li><li>Timers Ultimate ajustables pour l'ennemi et votre équipe. </li><li>Ajoutez une expérience gratuite de Dota Coach. </li><li>Rôle Supporter Discord. </li></ul>`, // #toBeUpdated
				ru: `Наша версия для профессиональных тренеров имеет ряд функций: <br><ul><li>голосовой коучинг для всех героев, которые может предложить Dota 2. </li><li>Регулируемые таймеры Ultimate для противника и вашей команды. </li><li>Добавьте бесплатный опыт Dota Coach. </li><li>Роль сторонника Discord. </li></ul>`, // #toBeUpdated
				id: `Versi pelatih pro kami hadir lama dengan sejumlah fitur:<br><ul><li>Pelatihan suara untuk semua pahlawan yang ditawarkan Dota 2. </li><li>Timer Ultimate yang dapat disesuaikan untuk musuh dan tim Anda. </li><li>Tambahkan pengalaman Dota Coach gratis. </li><li>Peran pendukung Discord. </li></ul>`, // #toBeUpdated
				fil: `Ang aming pro coach version ay may mahabang bilang ng mga tampok:<br><ul><li>Voice coaching para sa lahat ng mga bayani Dota 2 ay dapat mag-alok. </li><li>Adjustable Ultimate timers para sa kaaway at ang iyong koponan. </li><li>Magdagdag ng libreng Dota Coach karanasan. </li><li>Tungkulin ng Tagasuporta ng Discord. </li></ul>`, // #toBeUpdated
				zh: `DotaCoach专业版具有下列多个功能:<br>
					<ul>
						<li>Dota 2全英雄语音指导。</li>
						<li>队友和对手的终极技能计时器</li>
						<li>添加免费DotaCoach体验</li>
						<li>Discord支持者用户组</li>
					</ul>`,
				br: `Nossa versão pro coach vem com vários recursos: <br>
					<ul>
						<li>Coaching de voz para todos os heróis que Dota 2 tem a oferecer. </li>
						<li>Cronômetros Ultimate ajustáveis do inimigo e sua equipe. </li>
						<li>Adicione uma experiência gratuita do Dota Coach. </li>
						<li>Cargo de apoiador no Discord. </li>
					</ul>`,
				es: `Nuestra versión de entrenador profesional viene con una serie de características: <br><ul><li>Entrenamiento de voz para todos los héroes que Dota 2 tiene para ofrecer. </li><li>Temporizadores definitivos ajustables para el enemigo y tu equipo. </li><li>Agrega experiencia gratuita de Dota Coach. </li><li>Rol de partidario en Discord. </li></ul>`, // #toBeUpdated
			},
		},
		subPayment: {
			question: {
				en: "Which payment options do I have?",
				de: "Welche Zahlungsmöglichkeiten habe ich?", // #toBeUpdated
				fr: "Quelles sont les options de paiement dont je dispose ?", // #toBeUpdated
				ru: "Какие варианты оплаты у меня есть?", // #toBeUpdated
				id: "Pilihan pembayaran apa yang saya miliki?", // #toBeUpdated
				fil: "Aling mga pagpipilian sa pagbabayad ang mayroon ako?", // #toBeUpdated
				zh: "DotaCoach支持哪些付款方式？",
				br: "Quais formas de pagamento eu tenho?",
				es: "¿Qué opciones de pago tengo?", // #toBeUpdated
			},
			content: {
				en: `All payments are done through the <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf</a> 
					platform which collaborates with a broad variety of payment providers.<br><br>
					Most popular payment methods:<br>
					<ul>
						<li>Credit & Debit Cards</li>
						<li>Paypal</li>
						<li>Amazon Pay</li>
						<li>Skrill</li>
						<li>Visa</li>
						<li>Maestro</li>
					</ul>
					Be aware that payment options can be limited depending on your current country of residence.<br>`,
				de: `Alle Zahlungen erfolgen über die <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf-Plattform</a>, die mit einer Vielzahl von Zahlungsanbietern zusammenarbeitet. <br>Die beliebtesten Zahlungsmethoden: <br><ul><li>Kredit- und Debitkarten</li> <li>Paypal</li> <li>Amazon Pay</li> <li>Skrill</li> <li>Visa</li> <li>Maestro</li></ul> Beachten Sie, dass die Zahlungsoptionen je nach Ihrem aktuellen Wohnsitzland eingeschränkt sein können. <br>`, // #toBeUpdated
				fr: `Tous les paiements sont effectués via la plateforme <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a> qui collabore avec un large éventail de fournisseurs de paiement. Modes de <br>paiement les plus populaires : <br><ul><li>Cartes de crédit et de débit</li> <li>Paypal</li> <li>Amazon Pay</li> <li>Skrill</li> <li>Visa</li> <li>Maestro</li></ul> Sachez que les options de paiement peuvent être limitées en fonction de votre pays de résidence actuel. <br>`, // #toBeUpdated
				ru: `Все платежи осуществляются через платформу <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a>, которая сотрудничает с широким спектром платежных систем. <br>Самые популярные способы оплаты: <br><ul><li>Кредитные и дебетовые карты</li> <li>Paypal <li>Amazon Pay</li></li> <li>Skrill</li> <li>Visa</li> <li>Maestro</li></ul> Имейте в виду, что варианты оплаты могут быть ограничены в зависимости от вашей текущей страны проживания. <br>`, // #toBeUpdated
				id: `Semua pembayaran dilakukan melalui platform <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a>yang berkolaborasi dengan berbagai penyedia pembayaran. <br>Metode pembayaran yang paling populer:<br><ul><li>Kartu Kredit & Debit</li><li>Paypal</li><li>Amazon Pay</li><li>Skrill</li><li>Visa</li><li>Maestro</li></ul>Sadarilah bahwa opsi pembayaran dapat dibatasi tergantung pada negara tempat tinggal Anda saat ini. <br>`, // #toBeUpdated
				fil: `Ang lahat ng mga pagbabayad ay ginagawa sa pamamagitan ng <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a>platform na nakikipagtulungan sa iba't ibang uri ng mga provider ng pagbabayad. <br>Pinaka-popular na paraan ng pagbabayad:<br><ul><li>Credit & Debit Cards</li><li>Paypal Amazon Pay</li><li><li>Skrill</li><li>Visa</li><li>Maestro</li>Magkaroon</li></ul>ng kamalayan na ang mga pagpipilian sa pagbabayad ay maaaring limitado depende sa iyong kasalukuyang bansa ng paninirahan. <br>`, // #toBeUpdated
				zh: `所有的付款方式均通过 <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf</a> 
					合作的支付提供商或者支付平台进行。<br>
					最受欢迎的付款方式：<br>
					<ul>
						<li>Credit & Debit Cards</li>
						<li>Paypal</li>
						<li>Amazon Pay</li>
						<li>Skrill</li>
						<li>Visa</li>
						<li>Maestro</li>
					</ul>
					注意：Overwolf的支付API暂时无法获取来自中国大陆的付款！<br>`,
				br: `Todos os pagamentos são feitos através da plataforma <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a>, que colabora com uma ampla variedade de provedores de pagamento. <br>
					Métodos de pagamento mais populares: <br>
					<ul>
						<li>Cartões de crédito e débito</li> 
						<li>Paypal</li> 
						<li>Amazon Pay</li> 
						<li>Skrill</li> 
						<li>Visa</li> 
						<li>Maestro</li>
					</ul> 
					Esteja ciente de que as opções de pagamento podem ser limitadas dependendo do seu país de residência atual. <br>`,
				es: `Todos los pagos se realizan a través de la plataforma <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a>, que colabora con una amplia variedad de proveedores de pagos. <br>Métodos de pago más populares: <br><ul><li>Tarjetas de crédito y débito</li> <li>Paypal</li> <li>Amazon Pay</li> <li>Skrill</li> <li>Visa</li> <li>Maestro</li></ul> Tenga en cuenta que las opciones de pago pueden ser limitadas según su país de residencia actual. <br>`, // #toBeUpdated
			},

		},
		subGet: {
			question: {
				en: "How can I get the pro Version?",
				de: "Wie kann ich die Pro-Version bekommen?", // #toBeUpdated
				fr: "Comment puis-je obtenir la version pro ?", // #toBeUpdated
				ru: "Как я могу получить профессиональную версию?", // #toBeUpdated
				id: "Bagaimana saya bisa mendapatkan Versi pro?", // #toBeUpdated
				fil: "Paano ko makukuha ang pro Version?", // #toBeUpdated
				zh: "我怎么才能获得DotaCoach专业版？",
				br: "Como posso obter a versão pro?",
				es: "¿Cómo puedo obtener la versión pro?", // #toBeUpdated
			},
			content: {
				en: `After installing Dota Coach you can subscribe to our services.<br>
					<ul>
						<li>Open the Overwolf Desktop Client.</li>
						<li>Click on 'Library'.</li>
						<li>Click on the small settings button next to the Dota Coach logo.</li>
						<li>Click on 'view in appstore'</li>
						<li>Click 'Subscribe' inside the new window.</li>
						<li>Follow the promoted steps.</li>
					</ul>
					Also check out the <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf FAQ</a>
					on how to subscribe to apps.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/subscribesteps.png" class="img-fluid rounded shadow">`,

				de: `Nachdem Sie Dota Coach mit dem overwolf Client installiert haben, können Sie unsere Dienste abonnieren. <br><ul><li>Öffnen Sie den Overwolf Desktop Client. </li><li>Klicke auf „Bibliothek“. </li><li>Klicken Sie auf die kleine Einstellungsschaltfläche neben dem Dota Coach-Logo. </li><li>Klicke auf „Im Appstore anzeigen“</li> <li>Klicke im neuen Fenster auf „Abonnieren“. </li><li>Befolgen Sie die beworbenen Schritte. </li></ul>Lesen Sie auch die <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf FAQ</a> zum Abonnieren von Apps. <br><div class='mt-2'></div><img src='images/faqs/subscribesteps.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fr: `Après avoir installé Dota Coach avec le client Overwolf, vous pouvez vous abonner à nos services. <br><ul><li>Ouvrez le client de bureau Overwolf. </li><li>Cliquez sur « Bibliothèque ». </li><li>Cliquez sur le petit bouton des paramètres à côté du logo Dota Coach. </li><li>Cliquez sur « Afficher dans l'Appstore »</li> <li>Cliquez sur « S'abonner » dans la nouvelle fenêtre. </li><li>Suivez les étapes proposées. </li></ul>Consultez également la FAQ d'<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a> pour savoir comment vous abonner à des applications. <br><div class='mt-2'></div><img src='images/faqs/subscribesteps.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				ru: `После установки Dota Coach с клиентом overwolf вы можете подписаться на наши услуги. <br><ul><li>Откройте настольный клиент Overwolf. </li><li>Нажмите «Библиотека». </li><li>Нажмите на небольшую кнопку настроек рядом с логотипом Dota Coach. </li><li>Нажмите «посмотреть в магазине приложений»</li> <li>Нажмите «Подписаться» в новом окне. </li><li>Следуйте инструкциям. </li></ul>Также ознакомьтесь с часто задаваемыми вопросами по <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a> о том, как подписаться на приложения. <br><div class='mt-2'></div><img src='images/faqs/subscribesteps.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				id: `Setelah menginstal Dota Coach dengan klien overwolf, Anda dapat berlangganan layanan kami. <br><ul><li>Buka Overwolf Desktop Client. </li><li>Klik 'Perpustakaan'. </li><li>Klik pada tombol pengaturan kecil di sebelah logo Dota Coach. </li><li>Klik 'lihat di appstore' Klik '</li><li>Berlangganan' di dalam jendela baru. </li><li>Ikuti langkah-langkah yang dipromosikan. </li></ul>Lihat juga FAQ <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a> tentang cara berlangganan aplikasi. <br><div class='mt-2'></div><img src='images/faqs/subscribesteps.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fil: `Pagkatapos i-install ang Dota Coach sa overwolf client, maaari kang mag-subscribe sa aming mga serbisyo. <br><ul><li>Buksan ang Overwolf Desktop Client. </li><li>Mag-click sa 'Library'. </li><li>Mag-click sa pindutan ng maliit na setting sa tabi ng logo ng Dota Coach. </li><li>Mag-click sa 'view sa appstore'</li><li>I-click ang 'Mag-subscribe' sa loob ng bagong window. </li><li>Sundin ang mga na-promote na hakbang. </li></ul>Tingnan din ang FAQ ng <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a> kung paano mag-subscribe sa apps. <br><div class='mt-2'></div><img src='images/faqs/subscribesteps.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				zh: `通过Overwolf安装DotaCoach客户端以后，即可订阅我们的服务。<br>
					<ul>
						<li>打开Overwolf桌面客户端。</li>
						<li>打开'Library'。</li>
						<li>点击DotaCoach徽标边上的小齿轮按钮。</li>
						<li>点击'view in appstore'。</li>
						<li>点击新弹出窗口内的'Subscribe'。</li>
						<li>按照提示步骤操作。</li>
					</ul>
					可以通过观看<a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href ="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf FAQ</a>
					来学习如何订阅。<br>
					<div class="mt-2"></div>
					<img src="images/faqs/subscribesteps.png" class="img-fluid rounded shadow">`,
				br: `Depois de instalar o Dota Coach com o cliente overwolf, você pode se inscrever em nossos serviços. <br>
					<ul>
						<li>Abra o cliente de desktop Overwolf. </li>
						<li>Clique em 'Biblioteca'. </li>
						<li>Clique no pequeno botão de configurações ao lado do logotipo do Dota Coach. </li>
						<li>Clique em 'visualizar na appstore'</li> 
						<li>Clique em 'Inscrever-se' dentro da nova janela. </li>
						<li>Siga as etapas promovidas. </li>
					</ul>
					Confira também as perguntas frequentes do <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a> sobre como se inscrever em aplicativos. <br><div class='mt-2'></div><img src='images/faqs/subscribesteps.png' class='img-fluid rounded shadow'>`,
				es: `Después de instalar Dota Coach con el cliente overwolf, puedes suscribirte a nuestros servicios. <br><ul><li>Abra el cliente de escritorio de Overwolf. </li><li>Haga clic en «Biblioteca». </li><li>Haz clic en el pequeño botón de configuración junto al logotipo de Dota Coach. </li><li>Haga clic en «ver en la tienda de aplicaciones»</li> <li>Haga clic en «Suscribirse» dentro de la nueva ventana. </li><li>Siga los pasos promocionados. </li></ul>Consulta también las preguntas frecuentes de <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'>Overwolf</a> sobre cómo suscribirte a las aplicaciones. <br><div class='mt-2'></div><img src='images/faqs/subscribesteps.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
			},
		},
		subCancel: {
			question: {
				en: "How can I cancel my Subscription?",
				de: "Wie kann ich mein Abo kündigen?", // #toBeUpdated
				fr: "Comment puis-je annuler mon abonnement ?", // #toBeUpdated
				ru: "Как я могу отменить подписку?", // #toBeUpdated
				id: "Bagaimana cara membatalkan langganan saya?", // #toBeUpdated
				fil: "Paano ko kanselahin ang aking subscription?", // #toBeUpdated
				zh: "如何取消我的订阅？", // #toBeUpdated
				br: "Como posso cancelar minha assinatura?",
				es: "¿Cómo puedo cancelar mi suscripción?", // #toBeUpdated
			},
			content: {
				en: `All subscriptions are handled by Overwolf.<br><br>If you want to cancel your subscription, refund or forgot to cancel, please follow the offical <a class="link-danger" target="_blank" rel="noopener noreferrer" href ="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf FAQ</a>.`,
				de: `Alle Abonnements werden von Overwolf bearbeitet. </a><br>Wenn Sie Ihr Abonnement kündigen, eine Rückerstattung tätigen oder vergessen haben möchten, folgen Sie bitte den OfficaLoverwolf <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> FAQ. </a>`, // #toBeUpdated
				fr: `Tous les abonnements sont gérés par Overwolf. </a><br>Si vous souhaitez annuler votre abonnement, rembourser ou oublier d'annuler, veuillez suivre la <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> FAQ OfficalOverwolf.</a>`, // #toBeUpdated
				ru: `Все подписки обрабатываются Overwolf. </a><br>Если вы хотите отменить подписку, вернуть деньги или забыли ее отменить, пожалуйста, следуйте инструкциям на <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> странице часто задаваемых вопросов OfficalOverwolf.</a>`, // #toBeUpdated
				id: `Semua langganan ditangani oleh Overwolf. </a><br>Jika Anda ingin membatalkan langganan, pengembalian dana atau lupa membatalkan, silakan ikuti <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> FAQ OfficalOverWolf.</a>`, // #toBeUpdated
				fil: `Ang lahat ng mga subscription ay hinahawakan ng Overwolf. </a><br>Kung nais mong kanselahin ang iyong subscription, refund o nakalimutan na kanselahin, mangyaring sundin ang <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> FAQ ng OfficaOverWolf.</a>`, // #toBeUpdated
				zh: `所有订阅均由 Overwolf 处理。</a><br>如果你想取消订阅、退款或忘记取消，请遵循 OfficaLoverWolf <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> 常见问题解答。</a>`, // #toBeUpdated
				br: `Todas as assinaturas são gerenciadas pela Overwolf. </a><br>Se você deseja cancelar sua assinatura, reembolsar ou esquecer de cancelar, siga as <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> perguntas frequentes do OfficialOverwolf.</a>`,
				es: `Overwolf gestiona todas las suscripciones. </a><br>Si desea cancelar su suscripción, reembolsar u olvidó cancelar, siga las <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/'> preguntas frecuentes de OfficalOverWolf.</a>` // #toBeUpdated
			},
		},

		// Account
		accCreate: {
			question: {
				en: "How do I create an account?",
				de: "Wie erstelle ich ein Konto?", // #toBeUpdated
				fr: "Comment créer un compte ?", // #toBeUpdated
				ru: "Как мне создать аккаунт?", // #toBeUpdated
				id: "Bagaimana cara membuat akun?", // #toBeUpdated
				fil: "Paano ako lilikha ng isang account?", // #toBeUpdated
				zh: "如何创建账户？", // #toBeUpdated
				br: "Como eu crio uma conta?",
				es: "¿Cómo creo una cuenta?", // #toBeUpdated
			},
			content: {
				en: `Follow the overwolf step by step <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'>tutorial</a> on how to create an account.<br>`,
				de: `Folgen Sie dem <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'>Overwolf Schritt für Schritt Tutorial, um zu erfahren, wie Sie ein Konto erstellen.</a> <br>`, // #toBeUpdated
				fr: `<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'>Suivez le tutoriel étape par étape Overwolf pour savoir comment créer un compte.</a> <br>`, // #toBeUpdated
				ru: `Следуйте пошаговому руководству overwolf <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'> о</a> том, как создать учетную запись. <br>`, // #toBeUpdated
				id: `Ikuti langkah overwolf demi langkah tutorial <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'> tentang</a> cara membuat akun. <br>`, // #toBeUpdated
				fil: `Sundin ang overwolf step <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'> sa</a> pamamagitan ng steptutorial kung paano lumikha ng isang account. <br>`, // #toBeUpdated
				zh: `按照overwolf分<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'> 步</a>教程了解如何创建账户。<br>`, // #toBeUpdated
				br: `Siga o tutorial passo a passo do overwolf <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'> sobre</a> como criar uma conta. <br>`,
				es: `Sigue el tutorial paso a paso <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-'> sobre</a> cómo crear una cuenta. <br>`, // #toBeUpdated
			},
		},
		accLogin: {
			question: {
				en: "How do I log in?",
				de: "Wie melde ich mich an?", // #toBeUpdated
				fr: "Comment me connecter ?", // #toBeUpdated
				ru: "Как мне войти в систему?", // #toBeUpdated
				id: "Bagaimana cara masuk?", // #toBeUpdated
				fil: "Paano ako mag-log in?", // #toBeUpdated
				zh: "我该如何登录？", // #toBeUpdated
				br: "Como eu faço login?",
				es: "¿Cómo puedo iniciar sesión?", // #toBeUpdated
			},
			content: {
				en: `You can log in via the overwolf client, or directly within our application.<br>
					Both logins are located at the top right corner of their windows.<br>
					Simply click the overwolf logo to open the login dialog.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/loginout.png" class="img-fluid rounded shadow">`,
				de: `Sie können sich über den Overwolf-Client oder direkt in unserer Anwendung anmelden. <br>Beide Anmeldungen befinden sich in der oberen rechten Ecke ihres Fensters. <br>Klicken Sie einfach auf das Overwolf-Logo, um den Anmeldedialog zu öffnen. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fr: `Vous pouvez vous connecter via le client overwolf, ou directement dans notre application. <br>Les deux identifiants se trouvent dans le coin supérieur droit de leurs fenêtres. <br>Cliquez simplement sur le logo Overwolf pour ouvrir la boîte de dialogue de connexion. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				ru: `Вы можете войти в систему через клиент overwolf или непосредственно в нашем приложении. <br>Оба входа расположены в правом верхнем углу окна. <br>Просто нажмите на логотип overwolf, чтобы открыть диалоговое окно входа в систему. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				id: `Anda dapat login melalui klien overwolf, atau langsung dalam aplikasi kami. <br>Kedua login terletak di sudut kanan atas jendela mereka. <br>Cukup klik logo overwolf untuk membuka dialog login. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fil: `Maaari kang mag-log in sa pamamagitan ng overwolf client, o direkta sa loob ng aming application. <br>Ang parehong mga pag-login ay matatagpuan sa kanang sulok sa itaas ng kanilang mga bintana. <br>I-click lamang ang logo ng overwolf upang buksan ang dialog ng pag-login. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				zh: `您可以通过overwolf客户端登录，也可以直接在我们的应用程序中登录。<br>两个登录帐户都位于其窗口的右上角。<br>只需单击 overwolf 徽标即可打开登录对话框。<br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				br: `Você pode fazer login através do cliente overwolf ou diretamente em nosso aplicativo. <br>
					Ambos os logins estão localizados no canto superior direito de suas janelas. <br>
					Basta clicar no logotipo do overwolf para abrir a caixa de diálogo de login. <br>
					<div class='mt-2'></div>
					<img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`,
				es: `Puedes iniciar sesión a través del cliente overwolf o directamente desde nuestra aplicación. <br>Ambos inicios de sesión se encuentran en la esquina superior derecha de sus ventanas. <br>Simplemente haz clic en el logo de overwolf para abrir el diálogo de inicio de sesión. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
			},
		},
		accLogout: {
			question: {
				en: "How do I log out?",
				de: "Wie melde ich mich ab?", // #toBeUpdated
				fr: "Comment me déconnecter ?", // #toBeUpdated
				ru: "Как мне выйти из системы?", // #toBeUpdated
				id: "Bagaimana cara log out?", // #toBeUpdated
				fil: "Paano ako mag-log out?", // #toBeUpdated
				zh: "我该如何注销？", // #toBeUpdated
				br: "Como faço para sair?",
				es: "¿Cómo me desconecto?", // #toBeUpdated
			},
			content: {
				en: `You can log out via the overwolf client, or directly within our application.<br>
					Both logouts are located at the top right corner of their windows.<br>
					Simply click the overwolf logo to open the logout dialog.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/loginout.png" class="img-fluid rounded shadow">`,
				de: `Sie können sich über den Overwolf Client oder direkt in unserer Anwendung abmelden. <br>Beide Abmeldungen befinden sich in der oberen rechten Ecke ihrer Fenster. <br>Klicken Sie einfach auf das Overwolf-Logo, um den Abmelde-Dialog zu öffnen. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fr: `Vous pouvez vous déconnecter via le client overwolf ou directement dans notre application. <br>Les deux déconnexions se trouvent dans le coin supérieur droit de leurs fenêtres. <br>Cliquez simplement sur le logo Overwolf pour ouvrir la boîte de dialogue de déconnexion. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				ru: `Вы можете выйти из системы через клиент overwolf или непосредственно в нашем приложении. <br>Оба выхода расположены в правом верхнем углу окна. <br>Просто нажмите на логотип overwolf, чтобы открыть диалоговое окно выхода из системы. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				id: `Anda dapat log out melalui klien overwolf, atau langsung dalam aplikasi kami. <br>Kedua logout terletak di sudut kanan atas jendela mereka. <br>Cukup klik logo overwolf untuk membuka dialog logout. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fil: `Maaari kang mag-log out sa pamamagitan ng overwolf client, o direkta sa loob ng aming application. <br>Ang parehong mga logout ay matatagpuan sa kanang sulok sa itaas ng kanilang mga bintana. <br>I-click lamang ang logo ng overwolf upang buksan ang dialog ng logout. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				zh: `您可以通过 overwolf 客户端注销，也可以直接在我们的应用程序中注销。<br>两个注销都位于其窗口的右上角。<br>只需单击 overwolf 徽标即可打开注销对话框。<br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				br: `Você pode sair através do cliente overwolf ou diretamente em nosso aplicativo. <br>
					Ambos os logouts estão localizados no canto superior direito das janelas. <br>
					Basta clicar no logotipo do overwolf para abrir a caixa de diálogo de logout. <br>
					<div class='mt-2'></div>
					<img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`,
				es: `Puede cerrar sesión a través del cliente overwolf o directamente desde nuestra aplicación. <br>Ambos cierres de sesión se encuentran en la esquina superior derecha de sus ventanas. <br>Simplemente haz clic en el logo de overwolf para abrir el diálogo de cierre de sesión. <br><div class='mt-2'></div><img src='images/faqs/loginout.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
			},
		},
		accManage: {
			question: {
				en: "Where can I manage my account?",
				de: "Wo kann ich mein Konto verwalten?", // #toBeUpdated
				fr: "Où puis-je gérer mon compte ?", // #toBeUpdated
				ru: "Где я могу управлять своим счетом?", // #toBeUpdated
				id: "Di mana saya dapat mengelola akun saya?", // #toBeUpdated
				fil: "Saan ko mapapamahalaan ang aking account?", // #toBeUpdated
				zh: "我可以在哪里管理我的账户？", // #toBeUpdated
				br: "Onde posso gerenciar minha conta?",
				es: "¿Dónde puedo administrar mi cuenta?" // #toBeUpdated
			},
			content: {
				en: `You can manage your overwolf account directly in the overwolf client.<br>
					Click on the overwolf logo in the top right corner. <br>
					<div class="mt-2"></div>
					<img src="images/faqs/overwolfaccmanage.png" class="img-fluid rounded shadow">`,
				de: `Du kannst dein Overwolf-Konto direkt im Overwolf Client verwalten. <br>Klicke auf das Overwolf-Logo in der oberen rechten Ecke. <br><div class='mt-2'></div><img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fr: `Vous pouvez gérer votre compte Overwolf directement dans le client overwolf. <br>Cliquez sur le logo Overwolf dans le coin supérieur droit. <br><div class='mt-2'></div><img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				ru: `Управлять аккаунтом overwolf можно прямо в клиенте overwolf. <br>Нажмите на логотип overwolf в правом верхнем углу. <br><div class='mt-2'></div><img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				id: `Anda dapat mengelola akun overwolf Anda langsung di klien overwolf. <br>Klik pada logo overwolf di pojok kanan atas. <br><div class='mt-2'></div><img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fil: `Maaari mong pamahalaan ang iyong overwolf account nang direkta sa overwolf client. <br>Mag-click sa logo ng overwolf sa kanang sulok sa itaas. <br><div class='mt-2'></div><img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				zh: `你可以直接在 overwolf 客户端中管理你的 overwolf 账户。<br>点击右上角的狼人标志。<br><div class='mt-2'></div><img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				br: `Você pode gerenciar sua conta overwolf diretamente no cliente overwolf. <br>
					Clique no logotipo do overwolf no canto superior direito. <br>
					<div class='mt-2'></div>
					<img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>`,
				es: `Puedes administrar tu cuenta de overwolf directamente en el cliente de overwolf. <br>Haz clic en el logo de overwolf en la esquina superior derecha. <br><div class='mt-2'></div><img src='images/faqs/overwolfaccmanage.png' class='img-fluid rounded shadow'>` // #toBeUpdated
			},
		},
		// Application
		appGetStarted: {
			question: {
				en: "How do I get started?",
				de: "Wie fange ich an?", // #toBeUpdated
				fr: "Comment démarrer ?", // #toBeUpdated
				ru: "С чего мне начать?", // #toBeUpdated
				id: "Bagaimana cara memulai?", // #toBeUpdated
				fil: "Paano ako makapagsimula?", // #toBeUpdated
				zh: "我该如何开始？", // #toBeUpdated
				br: "Como eu começo?",
				es: "¿Cómo empiezo?", // #toBeUpdated
			},
			content: {
				en: `<p>
						The first step is to add '-gamestateintegration' to your Dota 2 launch options.<br>
						If you added it already and still get a warning message, make sure to log into your steam account.<br>
						A guide on how to add Dota 2 launch parameters can be found <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.
					
					<p>
						After that, you can customize the application to your needs.<br>
						Head to the settings menu in the top right corner:<br>
						<div class="mt-2"></div>
						<img src="./images/faqs/settings.png" class="img-fluid rounded shadow" style="width:61%" />
					
					<p>Then start a match to access the in-game functionality of Dota Coach.</p>
					<p>
						During the hero selection phase you get player stats and recommended bans and picks:<br>
						<div class="mt-2"></div>
						<img src="./images/faqs/hero_selection.png" class="img-fluid rounded shadow" style="width:39%">
					
					<p>
						Once heroes have been selected you can chose your role (carry/safe lane, mid, offlane, core or soft/hard support) and the heroes you expect to lane against.<br>
						Based on this Dota Coach will recommend counter items for the laning phase.<br>
						Note that you should combine these items with the items recommended by our guides in Dota 2.<br>
						<div class="mt-2"></div>
						<img src="./images/faqs/items_recommendation.png" class="img-fluid rounded shadow" style="width:39%">
					
					<p>
						In the game the following timers will apprear for hero buybacks:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/buyback_timers.png" style="width: 38%"><br><br>
						And the following for Roshan and Glyph of Fortification:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/roshan_timer_active.png" style="width:32%"><br><br>
						If other players in your team are using Dota Coach, the activation of timers will be shared among the team.<br>
						So if you forget to activate a timer, don't worry, a teammate might have activated it!<br>
					
					<p>Subscribers get hero coaching for all 123 heroes, access to ultimate timers, ads removed and support the developement of the app.<br> 
					The subscription fee is USD 1.99 per month.</p>
					<p>
					Do you want to see the app in action and learn about its features? <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://dota-coach.com/video/DotaCoachTutorial.mp4">Watch our tutorial
					video</a>!<br> 
					Want to talk to us? No problem: <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://discord.gg/9WhAANq">Join our Discord community server</a>!
					</p>`,
        		de: `<p>Der erste Schritt besteht darin, '-gamestateintegration' zu Ihren Dota 2-Startoptionen hinzuzufügen. <br>Wenn du es bereits hinzugefügt hast und trotzdem eine Warnmeldung erhältst, melde dich bei deinem Steam-Konto an. <br>Eine Anleitung zum Hinzufügen von Dota2-Startparametern finden Sie <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>hier</a>. <p>Danach können Sie die Anwendung an Ihre Bedürfnisse anpassen. <br>Gehe zum Einstellungsmenü in der oberen rechten Ecke: <br><p>Starte <div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div>dann ein Match, um auf die Spielfunktionalität von Dota Coach zuzugreifen. </p><p>Während der Heldenauswahlphase erhältst du Spielerstatistiken und empfohlene Bans und Picks: <br><div class='mt-2'></div><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'><p>Sobald Helden ausgewählt wurden, kannst du deine Rolle wählen (Carry/Safe Lane, Mid, Offlane, Core oder Soft/Hard Support) und die Helden, gegen die Sie voraussichtlich antreten werden. <br>Darauf aufbauend wird Dota Coach Gegenstücke für die Laning-Phase empfehlen. <br>Beachten Sie, dass Sie diese Artikel mit den Artikeln kombinieren sollten, die von unseren Handbüchern in Dota 2 empfohlen werden. <br><div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'><p>Im Spiel werden folgende Timer für Heldenrückkäufe erscheinen: <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Und das Folgende für Roshan und die Glyphe der Befestigung: <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br><br>Wenn andere Spieler in Ihrem Team verwenden Dota Coach, die Aktivierung der Timer wird im Team geteilt. <br>Wenn Sie also vergessen, einen Timer zu aktivieren, machen Sie sich keine Sorgen, ein Teamkollege hat ihn möglicherweise aktiviert! <p>Abonnenten erhalten Heldencoaching für alle 123 Helden, Zugriff auf ultimative Timer, entfernte Anzeigen und unterstützen die Entwicklung von Apps. <br>Die Abonnementgebühr beträgt 1,99 USD pro Monat. </p><p>Sie möchten die App in Aktion sehen und mehr über ihre Funktionen erfahren? <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>Schau dir unser Tutorial-Video</a> an <br>Willst du mit uns sprechen? Kein Problem: <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>Trete unserem Discord Community Server</a> bei!</p>`, // #toBeUpdated
        		fr: `<p>La première étape consiste à ajouter « -gamestateintegration » à vos options de lancement de Dota 2. <br>Si vous l'avez déjà ajouté et que vous recevez toujours un message d'avertissement, assurez-vous de vous connecter à votre compte Steam. <br>Un guide sur la façon d'ajouter des paramètres de lancement Dota2 est disponible <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>ici</a>. <p>Ensuite, vous pouvez personnaliser l'application selon vos besoins. <br>Rendez-vous dans le menu des paramètres en haut à droite : <br><div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div><p>puis lancez un match pour accéder à la fonctionnalité en jeu de Dota Coach. </p><p>Pendant la phase de sélection des héros, vous obtenez les statistiques des joueurs et les bannissements et choix recommandés : <br><div class='mt-2'></div><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'><p>une fois les héros sélectionnés, vous pouvez choisir votre rôle (carry/safe lane, mid, off-lane, core ou support souple/dur) et les héros contre lesquels vous vous attendez à affronter. <br>Sur cette base, Dota Coach recommandera des articles de comptoir pour la phase d'atterrissage. <br>Notez que vous devez combiner ces éléments avec les éléments recommandés par nos guides dans Dota 2. <br><div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'><p>Dans le jeu, les minuteries suivantes apparaîtront pour les rachats de héros : <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Et ce qui suit pour Roshan et le glyphe de la fortification : <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br><br>Si d'autres les joueurs de votre équipe utilisent Dota Coach, l'activation des chronomètres sera partagée entre l'équipe. <br>Donc, si vous oubliez d'activer un chronomètre, ne vous inquiétez pas, un coéquipier l'a peut-être activé ! <p>Les abonnés bénéficient d'un coaching de héros pour les 123 héros, d'un accès à des chronomètres ultimes, de publicités supprimées et d'un soutien au développement de l'application. <br>Les frais d'abonnement s'élèvent à 1,99 USD par mois. </p><p>Vous souhaitez voir l'application en action et en savoir plus sur ses fonctionnalités ? <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>Regardez notre vidéo de tutoriel</a> ! <br>Vous voulez nous parler ? Pas de problème : <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>rejoignez notre serveur communautaire Discord</a> ! </p>`, // #toBeUpdated
       			ru: `<p>Первым делом нужно добавить «-gamestateintegration» в параметры запуска Dota 2. <br>Если вы уже добавили его и по-прежнему получаете предупреждающее сообщение, обязательно войдите в свой аккаунт steam. <br>Руководство по добавлению параметров запуска Dota2 можно найти <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>здесь</a>. <p>После этого вы можете настроить приложение под свои нужды. <br>Перейдите в меню настроек в правом верхнем углу. <br><div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div><p>Затем начните матч, чтобы получить доступ к внутриигровой функциональности Dota Coach. </p><p>На этапе выбора героя вы получаете статистику игрока и рекомендуемые баны и подборки: <br><div class='mt-2'></div><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'><p>После выбора героев вы можете выбрать свою роль (несущая/безопасная линия, средняя, оффлайн, основная или мягкая/жесткая поддержка) и героев, против которых вы ожидаете выступить на линии. <br>Исходя из этого, тренер по Dota будет рекомендовать встречные предметы для фазы лайнинга. <br>Обратите внимание, что вы должны сочетать эти предметы с предметами, рекомендованными нашими гайдами в Dota 2. <br><div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'><p>В игре появятся следующие таймеры для выкупа героев: <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>И следующее для Рошана и Символа укрепления: <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br><br>Если другое игроки в вашей команде используют Dota Coach, активация таймеров будет распределена между командой. <br>Так что, если вы забыли активировать таймер, не волнуйтесь, его мог активировать товарищ по команде! <p>Подписчики получают обучение героев для всех 123 героев, доступ к максимальным таймерам, убирают рекламу и поддерживают разработку приложения. <br>Абонентская плата составляет 1,99 долларов США в месяц. </p><p>Хотите увидеть приложение в действии и узнать о его функциях? <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>Посмотрите наше обучающее видео</a>! <br>Хочешь поговорить с нами? Нет проблем: <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>присоединяйтесь к нашему серверу сообщества Discord</a>! </p>`, // #toBeUpdated
				id: `<p>Langkah pertama adalah menambahkan '-gamestateintegration' ke opsi peluncuran Dota 2 Anda. <br>Jika Anda menambahkannya dan masih mendapatkan pesan peringatan, pastikan untuk masuk ke akun uap Anda. <br>Panduan tentang cara menambahkan parameter peluncuran Dota 2 dapat ditemukan <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>di sini</a>. <p>Setelah itu, Anda dapat menyesuaikan aplikasi dengan kebutuhan Anda. <br>Buka menu pengaturan di pojok kanan atas:<br><div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div><p>Kemudian mulailah kecocokan untuk mengakses fungsionalitas dalam game Dota Coach. </p><p>Selama fase pemilihan pahlawan Anda mendapatkan statistik pemain dan larangan dan picks yang direkomendasikan:<br><div class='mt-2'></div><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'><p>Setelah pahlawan dipilih, Anda dapat memilih peran Anda (jalur bawa/aman, pertengahan, offlane, inti atau dukungan lembut/keras) dan pahlawan yang Anda harapkan untuk jalur melawan. <br>Berdasarkan Dota Coach ini akan merekomendasikan item counter untuk fase laning. <br>Perhatikan bahwa Anda harus menggabungkan item ini dengan item yang direkomendasikan oleh panduan kami di Dota 2. <br><div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'><p>Dalam permainan timer berikut akan menangkap untuk buyback pahlawan:<br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Dan berikut untuk Roshan dan Glyph of Fortification:<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br><br>Jika lain pemain dalam tim Anda menggunakan Dota Coach, aktivasi timer akan dibagi di antara tim. <br>Jadi jika Anda lupa untuk mengaktifkan timer, jangan khawatir, rekan satu tim mungkin telah mengaktifkannya! <p>Pelanggan mendapatkan pelatihan pahlawan untuk semua 123 pahlawan, akses ke timer utama, iklan dihapus dan mendukung pengembangan aplikasi. <br>Biaya langganan adalah USD 1.99 per bulan. </p><p>ingin melihat aplikasi dalam tindakan dan belajar tentang fitur-fiturnya? <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>Tonton video tutorial kami</a>! <br>Mau bicara dengan kami? Tidak masalah: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>Bergabunglah dengan server komunitas Discord kami</a>! </p>`, // #toBeUpdated
				fil: `<p>Ang unang hakbang ay upang magdagdag ng '-gamestateintegration' sa iyong mga pagpipilian sa paglunsad ng Dota 2. <br>Kung idinagdag mo na ito at nakakakuha pa rin ng mensahe ng babala, siguraduhing mag-log in sa iyong steam account. <br>Ang isang gabay sa kung paano magdagdag ng mga parameter ng paglunsad ng Dota 2 ay matatagpuan <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>dito</a>. <p>Pagkatapos nito, maaari mong ipasadya ang application sa iyong mga pangangailangan. <br>Tumungo sa menu ng mga setting sa kanang sulok sa itaas:<br><div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div><p>Pagkatapos ay simulan ang isang tugma upang ma-access ang in-game functionality ng Dota Coach. </p><p>Sa panahon ng yugto ng pagpili ng bayani makakakuha ka ng mga istatistika ng manlalaro at inirekumendang mga pagbabawal at pagpili:<br><div class='mt-2'></div><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'><p>Sa sandaling napili ang mga bayani maaari mong piliin ang iyong papel (dala/ligtas na lane, kalagitnaan, offlane, core o soft/hard support) at ang mga bayani na inaasahan mong lane laban. <br>Batay sa Dota Coach na ito ay magrekomenda ng mga counter item para sa laning phase. <br>Tandaan na dapat mong pagsamahin ang mga item na ito gamit ang mga item na inirerekomenda ng aming mga gabay sa Dota 2. <br><div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'><p>Sa laro ang mga sumusunod na timers ay lilitaw para sa mga buybacks ng bayani:<br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>At ang mga sumusunod para sa Roshan at ang Glyph ng Fortification:<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br><br>Kung iba pang mga Ang mga manlalaro sa iyong koponan ay gumagamit ng Dota Coach, ang activation ng timers ay ibabahagi sa mga koponan. <br>Kaya kung nakalimutan mong i-activate ang isang timer, huwag mag-alala, isang kasamahan sa koponan ay maaaring na-activate ito! <p>Ang mga subscriber ay nakakakuha ng bayani coaching para sa lahat ng 123 bayani, access sa ultimate timers, inalis ang mga ad at sinusuportahan ang pag-unlad ng app. <br>Ang bayad sa subscription ay USD 1.99 bawat buwan. </p><p>gusto mong makita ang app sa pagkilos at alamin ang tungkol sa mga tampok nito? <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>Panoorin ang aming tutorial video</a>! <br>Gusto mong makipag-usap sa amin? Walang problema: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>Sumali sa aming server ng komunidad ng Discord</a>! </p>`, // #toBeUpdated
				zh: `<p>第一步是在你的 Dota 2 启动选项中添加 “-gamestateintegration”。<br>如果你已经添加了它，但仍然收到警告消息，请务必登录你的 Steam 账户。<br>有关如何添加 Dota 2 启动参数的指南可<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>在此处</a>找到。<p>之后，您可以根据需要自定义应用程序。<br>前往右上角的设置菜单:<br><div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div><p>然后开始比赛以访问Dota Coach的游戏内功能.</p><p>在英雄选择阶段，你将获得玩家统计数据以及推荐的禁令和选择：选择<br><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'><p>英雄<div class='mt-2'></div>后，你可以选择自己的角色（携带/安全通道、mid、offlane、core 或软/硬支援）和你期望对抗的英雄。<br>基于此，Dota Coach将为对线阶段推荐反击物品。<br>请注意，您应该将这些物品与我们的指南在Dota 2中推荐的物品组合使用。<br><div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'><p>在游戏中，英雄回购将出现以下计时器：<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>以下是 Roshan 和《防御符文》的内容：<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br><br>如果是其他你队伍中的玩家正在使用Dota Coach，激活的计时器将在队伍中共享。<br>因此，如果你忘记激活计时器，别担心，队友可能已经激活了它！<p>订阅者可以获得所有 123 位英雄的英雄指导、终极计时器、移除广告以及支持 app 的开发。<br>订阅费为每月1.99美元。</p><p>想要查看该应用程序的运行情况并了解其功能吗？<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>观看我们的教程视频</a>！<br>想和我们谈谈吗？没问题：<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>加入我们的Discord社区服务器</a>！</p>`, // #toBeUpdated
				br: `<p>O primeiro passo é adicionar '-gamestateintegration' às suas opções de lançamento do Dota 2. <br>
					Se você já o adicionou e ainda recebe uma mensagem de aviso, certifique-se de fazer login na sua conta Steam. <br>
					Um guia sobre como adicionar parâmetros de lançamento do Dota 2 pode ser encontrado <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>aqui</a>. 
					<p>
						Depois disso, você pode personalizar o aplicativo de acordo com suas necessidades. <br>
						Vá para o menu de configurações no canto superior direito: <br>
						<div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div>
					<p>Em seguida, inicie uma partida para acessar a funcionalidade do jogo do Dota Coach. </p>
					<p>
						Durante a fase de seleção de heróis, você obtém estatísticas do jogador e proibições e escolhas recomendadas: <br>
						<div class='mt-2'></div><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'>
					<p>
						Depois que os heróis forem selecionados, você pode escolher sua função (carregador/trilha segura, meio, trilha vulnerável, principal ou suporte/suporte dedicado) e os heróis que você espera enfrentar. <br>
						Com base nisso, o Dota Coach recomendará itens de contador para a fase de laning. <br>
						Observe que você deve combinar esses itens com os itens recomendados por nossos guias no Dota 2. <br>
						<div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'>
					<p>
						No jogo, os seguintes cronômetros aparecerão para recompra de heróis: <br>
						<div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br>
						<br>
						E o seguinte para Roshan e o Glifo da Fortificação: <br>
						<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br>
						<br>
						Se outro os jogadores da sua equipe estão usando o Dota Coach, a ativação dos cronômetros será compartilhada entre a equipe. <br>
						Então, se você esquecer de ativar um cronômetro, não se preocupe, um colega de equipe pode tê-lo ativado! 
					<p>
						Os assinantes recebem treinamento de heróis para todos os 123 heróis, acesso aos melhores cronômetros, anúncios removidos e apoiam o desenvolvimento do aplicativo.<br>
						A taxa de inscrição é de USD 1,99 por mês. </p>
					<p>
						Quer ver o aplicativo em ação e aprender sobre seus recursos? <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>Assista ao nosso vídeo tutorial</a>! <br>
						Quer falar com a gente? Não há problema: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>Junte-se ao nosso servidor da comunidade Discord</a> </p>`,
				es: `<p>El primer paso es añadir '-gamestateintegration' a tus opciones de lanzamiento de Dota 2. <br>Si ya lo has añadido y sigues recibiendo un mensaje de advertencia, asegúrate de iniciar sesión en tu cuenta de Steam. <br>Puede encontrar una guía sobre cómo añadir parámetros de lanzamiento de Dota 2 <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>aquí</a>. <p>Después de eso, puede personalizar la aplicación según sus necesidades. <br>Dirígete al menú de configuración en la esquina superior derecha: <br><div class='mt-2'><img src='./images/faqs/settings.png' class='img-fluid rounded shadow' style='width:61%' /></div><p>luego comienza una partida para acceder a la funcionalidad del juego de Dota Coach. </p><p>Durante la fase de selección de héroes, obtienes estadísticas de jugadores y prohibiciones y selecciones recomendadas: <br><div class='mt-2'></div><img src='./images/faqs/hero_selection.png' class='img-fluid rounded shadow' style='width:39%'><p>Una vez seleccionados los héroes, puedes elegir tu rol (carril/carril seguro, medio, fuera de línea, núcleo o apoyo suave/duro) y los héroes contra los que esperas enfrentarte. <br>Basado en esto, el entrenador de Dota recomendará artículos de contador para la fase de carriles. <br>Ten en cuenta que debes combinar estos artículos con los artículos recomendados por nuestras guías en Dota 2. <br><div class='mt-2'></div><img src='./images/faqs/items_recommendation.png' class='img-fluid rounded shadow' style='width:39%'><p>En el juego aparecerán los siguientes temporizadores para las recompras de héroes: <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Y lo siguiente para Roshan y el glifo de fortificación: <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:32%'><br><br>Si otro los jugadores de tu equipo utilizan Dota Coach, la activación de los temporizadores se compartirá entre el equipo. <br>Así que si olvidas activar un temporizador, no te preocupes, ¡es posible que un compañero de equipo lo haya activado! <p>Los suscriptores reciben entrenamiento de héroes para los 123 héroes, acceso a temporizadores definitivos, anuncios eliminados y apoyan el desarrollo de la aplicación. <br>La cuota de suscripción es de 1,99 USD al mes. </p><p>¿quieres ver la aplicación en acción y conocer sus funciones? <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.com/video/DotaCoachTutorial.mp4'>¡Mira nuestro vídeo tutorial</a>! <br>¿Quieres hablar con nosotros? No hay problema: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/9WhAANq'>¡únete a nuestro servidor comunitario de Discord</a>! </p>`, // #toBeUpdated
			},
		},
		appHelp: {
			question: {
				en: "Where can I get additional help?",
				de: "Wo erhalte ich zusätzliche Hilfe?", // #toBeUpdated
				fr: "Où puis-je obtenir de l'aide supplémentaire ?", // #toBeUpdated
				ru: "Где можно получить дополнительную помощь?", // #toBeUpdated
				id: "Di mana saya bisa mendapatkan bantuan tambahan?", // #toBeUpdated
				fil: "Saan ako makakakuha ng karagdagang tulong?", // #toBeUpdated
				zh: "我在哪里可以获得其他帮助？", // #toBeUpdated
				br: "Onde posso obter ajuda adicional?",
				es: "¿Dónde puedo obtener ayuda adicional?", // #toBeUpdated
			},
			content: {
				en: `Join our Discord community server for live support <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://discord.gg/uabGsGazRe">here</a>.`,
				de: `Treten Sie unserem Discord bei und erhalten Sie <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>hier</a> Live-Support.`, // #toBeUpdated
				fr: `Rejoignez notre Discord pour une assistance en direct <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>ici</a>.`, // #toBeUpdated
				ru: `Присоединяйтесь к нашему Discord для поддержки в реальном времени здесь <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>.</a>`, // #toBeUpdated
				id: `Bergabunglah dengan Discord kami untuk dukungan langsung <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>.</a>`, // #toBeUpdated
				fil: `Sumali sa aming Discord para sa live na suporta doon <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>.</a>`, // #toBeUpdated
				zh: `加入我们的 Discord，在这里获得实时支持 <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>。</a>`, // #toBeUpdated
				br: `Junte-se ao nosso Discord para suporte ao vivo <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>aqui</a>.`,
				es: `Únete a nuestro Discord para recibir soporte en vivo <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>aquí</a>.`, // #toBeUpdated
			},
		},
		appBanned: {
			question: {
				en: "Can I get banned for using Dota Coach?",
				de: "Kann ich für die Verwendung von Dota Coach gebannt werden?", // #toBeUpdated
				fr: "Puis-je être banni pour utiliser Dota Coach ?", // #toBeUpdated
				ru: "Могу ли я получить бан за использование Dota Coach?", // #toBeUpdated
				id: "Bisakah saya dilarang menggunakan Dota Coach?", // #toBeUpdated
				fil: "Maaari ba akong makakuha ng pinagbawalan para sa paggamit ng Dota Coach?", // #toBeUpdated
				zh: "我能否因为使用 Dota 教练而被禁止？", // #toBeUpdated
				br: "Posso ser banido por usar o Dota Coach?",
				es: "¿Me pueden prohibir el uso de Dota Coach?", // #toBeUpdated
			},
			content: {
				en: `<p>
					<b>The Dota Coach app will NOT get you banned.</b><br>
					The app is built on top of the Overwolf platform.<br>
					The Overwolf platform is built in collaboration with Valve and the Dota 2 team.<br>
					You can read more here: <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned">Overwolf Won't Get You Banned</a><br>
					</p>`,
				de: `Mit <p><b>der Dota Coach-App werden Sie NICHT gebannt. </b><br>Die Dota Coach-App basiert auf der Overwolf-Plattform. <br>Die Overwolf-Plattform wurde in Zusammenarbeit mit Valve und dem Dota 2-Team entwickelt. <br>Valve hat seit seinen Anfängen die Bemühungen von Anwendungen von Drittanbietern unterstützt, Inhalte und Systeme zu erstellen, die das Spielerlebnis verbessern. </p><br>Sie können hier mehr lesen: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf wird dich nicht gebannt</a> <br>`, // #toBeUpdated
				fr: `<p><b>L'application Dota Coach ne vous fera PAS bannir. </b><br>L'application Dota Coach est construite sur la plateforme Overwolf. <br>La plateforme Overwolf est construite en collaboration avec Valve et l'équipe Dota 2. <br>Depuis ses débuts, Valve soutient les efforts d'applications tierces pour créer du contenu et des systèmes qui améliorent l'expérience du joueur. </p><br>Vous pouvez en savoir plus ici : <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf ne vous fera pas bannir</a> <br>`, // #toBeUpdated
				ru: `<p><b>Приложение Dota Coach НЕ заблокирует вас. </b><br>Приложение Dota Coach построено на платформе Overwolf. <br>Платформа Overwolf построена в сотрудничестве с Valve и командой Dota 2. <br>Valve с самого начала поддерживала усилия сторонних приложений по созданию контента и систем, улучшающих впечатления игроков. </p><br>Вы можете прочитать больше здесь: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf не забанит вас</a> <br>`, // #toBeUpdated
				id: `<p><b>Aplikasi Dota Coach TIDAK akan membuat Anda dilarang. </b><br>Aplikasi Dota Coach dibangun di atas platform Overwolf. <br>Platform Overwolf dibangun bekerja sama dengan Valve dan tim Dota 2. <br>Valve sejak awal mendukung upaya aplikasi pihak ketiga untuk membuat konten dan sistem yang meningkatkan pengalaman pemain. </p><br>Anda dapat membaca lebih lanjut di sini: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf Tidak Akan Mendapatkan Anda Dilarang</a><br>`, // #toBeUpdated
				fil: `<p><b>Ang Dota Coach app ay HINDI makakakuha ka ng pinagbawalan. </b><br>Ang Dota Coach app ay binuo sa ibabaw ng Overwolf platform. <br>Ang Overwolf platform ay binuo sa pakikipagtulungan sa Valve at sa koponan ng Dota 2. Ang<br>balbula ay mula noong simula nito ay suportado ang mga pagsisikap ng mga application ng third party upang lumikha ng nilalaman at mga sistema na nagpapabuti sa karanasan ng manlalaro. </p><br>Maari kang magbasa nang higit pa rito: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf Won't Get You Banned</a><br>`, // #toBeUpdated
				zh: `<p><b>Dota Coach 应用程序不会让你被禁赛。</b><br>Dota Coach 应用程序建立在 Overwolf 平台之上。<br>Overwolf 平台是与 Valve 和 Dota 2 团队合作构建的。<br>Valve自成立以来就一直支持第三方应用程序创建可增强玩家体验的内容和系统的努力。</p><br>你可以在这里阅读更多：<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf 不会让你被禁赛</a> <br>`, // #toBeUpdated
				br: `<p>
					<b>O aplicativo Dota Coach NÃO fará com que você seja banido. </b><br>
					O aplicativo Dota Coach é construído sobre a plataforma Overwolf. <br>
					A plataforma Overwolf é construída em colaboração com a Valve e a equipe Dota 2. <br>
					Desde o início, a Valve tem apoiado os esforços de aplicativos de terceiros para criar conteúdo e sistemas que aprimoram a experiência do jogador. </p><br>
					Você pode ler mais aqui: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf não fará com que você seja banido</a> <br>`,
				es: `<p><b>La aplicación Dota Coach NO te prohibirá. </b><br>La aplicación Dota Coach se basa en la plataforma Overwolf. <br>La plataforma Overwolf se creó en colaboración con Valve y el equipo de Dota 2. <br>Desde sus inicios, Valve ha apoyado los esfuerzos de aplicaciones de terceros para crear contenido y sistemas que mejoren la experiencia del jugador. </p><br>Puedes leer más aquí: <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned'>Overwolf no te prohibirá</a> <br>`, // #toBeUpdated
			},

		},
		appVideo: {
			question: {
				en: "Do you have a video guide?",
				de: "Hast du eine Videoanleitung?", // #toBeUpdated
				fr: "Disposez-vous d'un guide vidéo ?", // #toBeUpdated
				ru: "У вас есть видеогид?", // #toBeUpdated
				id: "Apakah Anda memiliki panduan video?", // #toBeUpdated
				fil: "Mayroon ka bang gabay sa video?", // #toBeUpdated
				zh: "你有视频指南吗？", // #toBeUpdated
				br: "Você tem um guia em vídeo?",
				es: "¿Tienes una videoguía?", // #toBeUpdated
			},
			content: {
				en: `You can find our 3 minute video guide <a class="link-danger" target="_blank" rel="noopener noreferrer" href ="https://dota-coach.com/video/DotaCoachTutorial.mp4">here</a>.`,
				de: `Unsere dreiminütige Videoanleitung findest du hier <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>.</a>`, // #toBeUpdated
				fr: `Vous trouverez notre guide vidéo de 3 minutes ici <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>.</a>`, // #toBeUpdated
				ru: `Наш 3-минутный видеогид вы можете найти здесь <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>.</a>`, // #toBeUpdated
				id: `Anda dapat menemukan panduan video 3 menit kami di sini <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>.</a>`, // #toBeUpdated
				fil: `Maaari mong mahanap ang aming 3 minutong gabay sa video dito <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>.</a>`, // #toBeUpdated
				zh: `你可以在这里找到我们的3分钟视频指南 <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>。</a>`, // #toBeUpdated
				br: `Você pode encontrar nosso guia de vídeo de 3 minutos aqui <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>.</a>`,
				es: `Puedes encontrar nuestra guía en vídeo de 3 minutos aquí <a class="link-danger" target="_blank" rel="noopener noreferrer" href =' https://dota-coach.com/video/DotaCoachTutorial.mp4'>.</a>`, // #toBeUpdated
				},
		},
		appGamestate: {
			question: {
				en: "What is Game State Integration?",
				de: "Was ist Gamestate-Integration?", // #toBeUpdated
				fr: "Qu'est-ce que l'intégration de Gamestate?", // #toBeUpdated
				ru: "Что такое интеграция с игровым состоянием?", // #toBeUpdated
				id: "Apa itu Gamestateintegration?", // #toBeUpdated
				fil: "Ano ang pagsasama ng Gamestate?", // #toBeUpdated
				zh: "什么是 Gamestate 集成？", // #toBeUpdated
				br: "O que é a integração do Gamestate?",
				es: "¿Qué es la integración de Gamestate?", // #toBeUpdated
			},
			content: {
				en: `The Game State Integration is an integral part of Dota Coach. It is provided by Valve to access all events in Dota 2 games.<br>
					You must add '-gamestateintegration' as a Dota 2 launch parameter.<br>
					Without it, Dota Coach will not work!<br>
					For further information on how to enable it click <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.`,
				de: `Die Gamestate-Integration ist ein integraler Bestandteil von Dota Coach. Es wird von Valve bereitgestellt, um auf alle Ereignisse in einem Dota 2-Spiel zuzugreifen. <br>Sie müssen '-gamestateintegration' als Dota 2-Startparameter hinzufügen. <br>Ohne sie wird Dota Coach nicht funktionieren! <br>Weitere Informationen zur Aktivierung <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>finden Sie hier</a>.`, // #toBeUpdated
				fr: `L'intégration de l'état de jeu fait partie intégrante de Dota Coach. Il est fourni par Valve pour accéder à tous les événements d'un jeu Dota 2. <br>Vous devez ajouter « -gamestateintegration » en tant que paramètre de lancement Dota 2. <br>Sans cela, Dota Coach ne fonctionnera pas ! <br>Pour plus d'informations sur la façon de l'activer, cliquez <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>ici</a>.`, // #toBeUpdated
				ru: `Интеграция с игровым состоянием является неотъемлемой частью Dota Coach. Он предоставляется Valve для доступа ко всем событиям в игре Dota 2. <br>Вы должны добавить «-gamestateintegration» в качестве параметра запуска Dota 2. <br>Без него Dota Coach не будет работать! <br>Для получения дополнительной информации о том, как включить его, нажмите <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>здесь</a>.`, // #toBeUpdated
				id: `The gamestateintegration merupakan bagian integral dari Dota Coach. Ini disediakan oleh Valve untuk mengakses semua acara dalam permainan Dota 2. <br>Anda harus menambahkan '-gamestateintegration' sebagai parameter peluncuran Dota 2. <br>Tanpa itu, Dota Coach tidak akan bekerja! <br>Untuk informasi lebih lanjut tentang cara mengaktifkannya klik <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>di sini</a>.`, // #toBeUpdated
				fil: `Ang gamestateintegration ay isang mahalagang bahagi ng Dota Coach. Ito ay ibinibigay ng Valve upang ma-access ang lahat ng mga kaganapan sa isang laro ng Dota 2. <br>Dapat kang magdagdag ng '-gamestateintegration' bilang parameter ng paglunsad ng Dota 2. <br>Kung wala ito, ang Dota Coach ay hindi gagana! <br>Para sa karagdagang impormasyon kung paano paganahin ito mag-click <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>dito</a>.`, // #toBeUpdated
				zh: `游戏状态集成是 Dota Coach 不可或缺的一部分。它由Valve提供，用于访问Dota 2游戏中的所有事件。<br>你必须添加 “-gamestateintegration” 作为 Dota 2 启动参数。<br>没有它，Dota教练将无法工作！<br>有关如何启用它的更多信息，请单击<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>此处</a>。`, // #toBeUpdated
				br: `A integração do GameState é parte integrante do Dota Coach. É fornecido pela Valve para acessar todos os eventos em um jogo Dota 2. <br>
					Você deve adicionar '-gamestateintegration' como um parâmetro de lançamento do Dota 2. <br>
					Sem isso, o Dota Coach não funcionará! <br>
					Para mais informações sobre como ativá-lo, clique <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>aqui</a>.`,
				es: `La integración de gamestateintegration es una parte integral de Dota Coach. Valve lo proporciona para acceder a todos los eventos de un juego de Dota 2. <br>Debe añadir '-gamestateintegration' como parámetro de lanzamiento de Dota 2. <br>¡Sin él, Dota Coach no funcionará! <br>Para obtener más información sobre cómo habilitarlo, haga clic <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>aquí</a>.`, // #toBeUpdated
			},
		},
		appLanguage: {
			question: {
				en: "How can I change the language?",
				de: "Wie kann ich die Sprache ändern?", // #toBeUpdated
				fr: "Comment est-ce que je peux changer la langue ?", // #toBeUpdated
				ru: "Как изменить язык?", // #toBeUpdated
				id: "Bagaimana saya bisa mengubah bahasa?", // #toBeUpdated
				fil: "Paano ko mababago ang wika?", // #toBeUpdated
				zh: "我怎样才能更改语言？", // #toBeUpdated
				br: "Como posso mudar o idioma?",
				es: "¿Cómo puedo cambiar el idioma?", // #toBeUpdated
			},
			content: {
				en: `Open the settings window. You can find it in the menu in the top right corner of the desktop window.<br>
					The languge setting is located in the bottom right corner.<br>
					Please be aware, that we only support a certain set of languages.<br>
					If your native language is missing, let us know or help with the translation!<br>
					<div class="mt-2"></div>
					<img src="./images/faqs/language.png" class="img-fluid rounded shadow">`,
				de: `Öffne das Einstellungsfenster. Sie finden es im Menü in der oberen rechten Ecke des Desktop-Fensters. <br>Die Spracheinstellung befindet sich in der unteren rechten Ecke. <br>Bitte beachten Sie, dass wir nur bestimmte Sprachen unterstützen. <br>Wenn Ihre Muttersprache fehlt, lassen Sie es uns wissen oder helfen Sie bei der Übersetzung! <br><div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fr: `Ouvrez la fenêtre des paramètres. Vous pouvez le trouver dans le menu en haut à droite de la fenêtre du bureau. <br>Le paramètre de langue se trouve dans le coin inférieur droit. <br>Sachez que nous ne prenons en charge qu'un certain nombre de langues. <br>Si votre langue maternelle est absente, faites-le nous savoir ou aidez-nous à la traduction ! <br><div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				ru: `Откройте окно настроек. Вы можете найти его в меню в правом верхнем углу окна рабочего стола. <br>Настройка языка расположена в правом нижнем углу. <br>Обратите внимание, что мы поддерживаем только определенный набор языков. <br>Если ваш родной язык отсутствует, сообщите нам об этом или помогите с переводом!<br><div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				id: `Buka jendela pengaturan. Anda dapat menemukannya di menu di sudut kanan atas jendela desktop. <br>Pengaturan languge terletak di sudut kanan bawah. <br>Perlu diketahui, bahwa kami hanya mendukung satu set bahasa tertentu. <br>Jika bahasa ibu Anda hilang, beri tahu kami atau bantu terjemahannya! <br><div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fil: `Buksan ang window ng mga setting. Makikita mo ito sa menu sa kanang sulok sa itaas ng window ng desktop. <br>Ang setting ng wika ay matatagpuan sa kanang sulok sa ibaba. <br>Mangyaring magkaroon ng kamalayan, na sinusuportahan lamang namin ang isang tiyak na hanay ng mga wika. <br>Kung nawawala ang iyong katutubong wika, ipaalam sa amin o tumulong sa pagsasalin! <br><div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				zh: `打开设置窗口。您可以在桌面窗口右上角的菜单中找到它。<br>语言设置位于右下角。<br>请注意，我们只支持一组特定的语言。<br>如果缺少您的母语，请告知我们或帮助翻译！<br><div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				br: `Abra a janela de configurações. Você pode encontrá-lo no menu no canto superior direito da janela da área de trabalho. <br>
					A configuração do idioma está localizada no canto inferior direito. <br>
					Esteja ciente de que só suportamos um determinado conjunto de idiomas. <br>
					Se sua língua nativa estiver faltando, informe-nos ou ajude-nos com a tradução! <br>
					<div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`,
				es: `Abre la ventana de configuración. Puedes encontrarlo en el menú de la esquina superior derecha de la ventana del escritorio. <br>La configuración de idioma se encuentra en la esquina inferior derecha. <br>Tenga en cuenta que solo admitimos un conjunto determinado de idiomas. <br>Si falta su idioma nativo, ¡háganoslo saber o ayudarlo con la traducción! <br><div class='mt-2'></div><img src='./images/faqs/language.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
			},
		},
		appTranslation: {
			question: {
				en: "Can I help with the translation?",
				de: "Kann ich bei der Übersetzung helfen?", // #toBeUpdated
				fr: "Puis-je vous aider pour la traduction ?", // #toBeUpdated
				ru: "Могу ли я помочь с переводом?", // #toBeUpdated
				id: "Dapatkah saya membantu dengan terjemahan?", // #toBeUpdated
				fil: "Maaari ba akong tumulong sa pagsasalin?", // #toBeUpdated
				zh: "我能帮忙翻译吗？", // #toBeUpdated
				br: "Posso ajudar com a tradução?",
				es: "¿Puedo ayudar con la traducción?", // #toBeUpdated
			},
			content: {
				en: `Yes of course! Contact us here:<br>
					<ul>
						<li><a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://discord.gg/uabGsGazRe">Discord</a></li>
						<li><a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://github.com/roserens/dotaCoach-i18n">Github</a></li>
						<li>info(at)dota-coach.com</li>`,
				de: `Ja natürlich! Kontaktiere uns hier: <br><ul><li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a></li> <li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li> <li>info (at) dota-coach.com</li>`, // #toBeUpdated
				fr: `Oui, bien sûr ! Contactez-nous ici : <br><ul><li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a></li> <li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li> <li>info (at) dota-coach.com</li>`, // #toBeUpdated
				ru: `Да, конечно! Свяжитесь с нами здесь: <br><ul><li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a></li> <li>информация <li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li> (at) dota-coach.com</li>`, // #toBeUpdated
				id: `Ya tentu saja! Hubungi kami di sini:<br><ul><li>Info<li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Perselisihan</a></li><li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li>(at) dota-coach.com</li>`, // #toBeUpdated
				fil: `Oo siyempre! Makipag-ugnay sa amin dito:<br><ul><li>Impormasyon ng<li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a></li><li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li>(at) dota-coach.com</li>`, // #toBeUpdated
				zh: `当然可以！在这里联系我们：<br><ul><li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a></li> <li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li> <li>信息 (at) dota-coach.com</li>`, // #toBeUpdated
				br: `Sim, claro! Entre em contato conosco aqui: <br>
					<ul>
						<li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li>
						<li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a></li>
						<li>info (arroba) dota-coach.com</li>`,
				es: `¡Sí, por supuesto! Contáctanos aquí: <br><ul><li>Información de <li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a></li> <li><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://github.com/roserens/dotaCoach-i18n'>Github</a></li> (at) dota-coach.com</li>`, // #toBeUpdated
			},
		},
		appMoney: {
			question: {
				en: "How does Dota Coach make money?",
				de: "Wie verdient Dota Coach Geld?", // #toBeUpdated
				fr: "Comment Dota Coach gagne-t-il de l'argent ?", // #toBeUpdated
				ru: "Как Dota Coach зарабатывает деньги?", // #toBeUpdated
				id: "Bagaimana Dota Coach menghasilkan uang?", // #toBeUpdated
				fil: "Paano gumagana ang Dota Coach gumawa ng pera?", // #toBeUpdated
				zh: "Dota Coach 是如何赚钱的？", // #toBeUpdated
				br: "Como o Dota Coach ganha dinheiro?",
				es: "¿Cómo gana dinero Dota Coach?", // #toBeUpdated
			},
			content: {
				en: `Most features of the app are available to all players for free.<br> 
					The Dota Coach app makes money through displaying ads in some parts of the app.<br>
					Also players can pay a monthly subscription fee to get access to some exclusive features.<br>
					The pro subscription also turns off the ads.<br>`,
				de: `Die meisten Funktionen der App stehen allen Spielern kostenlos zur Verfügung. <br>Die Dota Coach-App verdient Geld mit der Schaltung von Anzeigen in einigen Teilen der App. <br>Spieler können auch eine monatliche Abonnementgebühr zahlen, um Zugriff auf einige exklusive Funktionen zu erhalten. <br>Das Pro-Abonnement schaltet auch die Anzeigen aus. <br>`, // #toBeUpdated
				fr: `La plupart des fonctionnalités de l'application sont disponibles gratuitement pour tous les joueurs. <br>L'application Dota Coach gagne de l'argent en affichant des publicités dans certaines parties de l'application. <br>Les joueurs peuvent également payer un abonnement mensuel pour accéder à certaines fonctionnalités exclusives. <br>L'abonnement pro désactive également les publicités. <br>`, // #toBeUpdated
				ru: `Большинство функций приложения доступны всем игрокам бесплатно. <br>Приложение Dota Coach зарабатывает деньги, показывая рекламу в некоторых частях приложения. <br>Также игроки могут платить ежемесячную абонентскую плату, чтобы получить доступ к некоторым эксклюзивным функциям. <br>Профессиональная подписка также отключает рекламу. <br>`, // #toBeUpdated
				id: `Sebagian besar fitur aplikasi tersedia untuk semua pemain secara gratis. <br>Aplikasi Dota Coach menghasilkan uang melalui menampilkan iklan di beberapa bagian aplikasi. <br>Juga pemain dapat membayar biaya berlangganan bulanan untuk mendapatkan akses ke beberapa fitur eksklusif. <br>Langganan pro juga mematikan iklan. <br>`, // #toBeUpdated
				fil: `Karamihan sa mga tampok ng app ay magagamit sa lahat ng mga manlalaro nang libre. <br>Ang Dota Coach app ay gumagawa ng pera sa pamamagitan ng pagpapakita ng mga ad sa ilang bahagi ng app. <br>Gayundin ang mga manlalaro ay maaaring magbayad ng isang buwanang bayad sa subscription upang makakuha ng access sa ilang mga eksklusibong tampok. <br>Ang pro subscription ay lumiliko rin sa mga ad. <br>`, // #toBeUpdated
				zh: `该应用程序的大多数功能均可免费提供给所有玩家。<br>Dota Coach应用程序通过在应用程序的某些部分展示广告来赚钱。<br>此外，玩家可以按月支付订阅费以使用某些独家功能。<br>专业版订阅还会关闭广告。<br>`, // #toBeUpdated
				br: `A maioria dos recursos do aplicativo está disponível para todos os jogadores gratuitamente. <br>
					O aplicativo Dota Coach ganha dinheiro exibindo anúncios em algumas partes do aplicativo. <br>
					Além disso, os jogadores podem pagar uma taxa de assinatura mensal para obter acesso a alguns recursos exclusivos. <br>
					A assinatura profissional também desativa os anúncios. <br>`,
				es: `La mayoría de las funciones de la aplicación están disponibles para todos los jugadores de forma gratuita. <br>La aplicación Dota Coach gana dinero al mostrar anuncios en algunas partes de la aplicación. <br>Además, los jugadores pueden pagar una tarifa de suscripción mensual para obtener acceso a algunas funciones exclusivas. <br>La suscripción profesional también desactiva los anuncios. <br>`, // #toBeUpdated
			},
		},
		// Issues
		issueApp: {
			question: {
				en: "Why does the application not work?",
				de: "Warum funktioniert die Anwendung nicht?", // #toBeUpdated
				fr: "Pourquoi l'application ne fonctionne-t-elle pas ?", // #toBeUpdated
				ru: "Почему приложение не работает?", // #toBeUpdated
				id: "Mengapa aplikasi tidak bekerja?", // #toBeUpdated
				fil: "Bakit hindi gumagana ang application?", // #toBeUpdated
				zh: "为什么应用程序不起作用？", // #toBeUpdated
				br: "Por que o aplicativo não funciona?",
				es: "¿Por qué no funciona la aplicación?", // #toBeUpdated
			},
			content: {
				en: `<p>
						You must add '-gamestateintegration' to your Dota 2 launch options for the app to work.<br>
						Additional information how to add the launch parameter can be found <a class="link-danger" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.
					</p>`,
				de: `<p>Sie müssen „-gamestateintegration“ zu Ihren Dota 2-Startoptionen hinzufügen, damit die App funktioniert. <br>Weitere Informationen zum Hinzufügen des Startparameters finden Sie <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>hier</a>. </p>`, // #toBeUpdated
				fr: `<p>Vous devez ajouter « -gamestateintegration » à vos options de lancement Dota 2 pour que l'application fonctionne. Vous <br>trouverez des informations supplémentaires sur la façon d'ajouter le paramètre de lancement <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>ici</a>. </p>`, // #toBeUpdated
				ru: `Для <p>работы приложения необходимо добавить «-gamestateintegration» в параметры запуска Dota 2. <br>Дополнительную информацию о том, как добавить параметр запуска, можно найти <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>здесь</a>. </p>`, // #toBeUpdated
				id: `<p>Anda harus menambahkan '-gamestateintegration' ke opsi peluncuran Dota 2 agar aplikasi berfungsi. <br>Informasi tambahan cara menambahkan parameter peluncuran dapat ditemukan <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>di sini</a>. </p>`, // #toBeUpdated
				fil: `<p>Dapat kang magdagdag ng '-gamestateintegration' sa iyong mga opsyon sa paglulunsad ng Dota 2 para magtrabaho ang app. <br>Ang karagdagang impormasyon kung paano idagdag ang parameter ng paglunsad ay matatagpuan <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>dito</a>. </p>`, // #toBeUpdated
				zh: `<p>你必须在你的 Dota 2 启动选项中添加 “-gamestateintegration” 才能使应用程序正常运行。<br>有关如何添加 launch 参数的更多信息，请参见<a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>此处</a>。</p>`, // #toBeUpdated
				br: `<p>
						Você deve adicionar '-gamestateintegration' às suas opções de inicialização do Dota 2 para que o aplicativo funcione. <br>
						Informações adicionais sobre como adicionar o parâmetro de lançamento podem ser encontradas <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>aqui</a>. </p>`,
				es: `<p>Debes añadir '-gamestateintegration' a tus opciones de lanzamiento de Dota 2 para que la aplicación funcione. <br>Puede encontrar información adicional sobre cómo añadir el parámetro de lanzamiento <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2'>aquí</a>. </p>`, // #toBeUpdated
			},
		},
		issueBug: {
			question: {
				en: "How can I report an issue or bug?",
				de: "Wie kann ich ein Problem oder einen Bug melden?", // #toBeUpdated
				fr: "Comment signaler un problème ou un bogue ?", // #toBeUpdated
				ru: "Как мне сообщить о проблеме или баге?", // #toBeUpdated
				id: "Bagaimana cara melaporkan masalah atau bug?", // #toBeUpdated
				fil: "Paano ako mag-ulat ng isyu o bug?", // #toBeUpdated
				zh: "如何报告问题或错误？", // #toBeUpdated
				br: "Como posso relatar um problema ou bug?",
				es: "¿Cómo puedo informar de un problema o error?", // #toBeUpdated
			},
			content: {
				en: `You can find the 'report issue' button in the top menu of the desktop application window.<br>
					If you need further assistance, please join our <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://discord.gg/uabGsGazRe">Discord</a> server!<br>
					<div class="mt-2"></div>
					<img src="images/faqs/bugreport.png" class="img-fluid rounded shadow">`,
				de: `Sie finden die Schaltfläche „Problem melden“ im oberen Menü des Desktop-Anwendungsfensters. <br>Wenn du weitere Hilfe benötigst, trete bitte unserem <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a> Server bei! <br><div class='mt-2'></div><img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fr: `Vous trouverez le bouton « Signaler un problème » dans le menu supérieur de la fenêtre de l'application de bureau. <br>Si vous avez besoin d'aide supplémentaire, rejoignez notre serveur <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a> ! <br><div class='mt-2'></div><img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				ru: `Кнопка «сообщить о проблеме» находится в верхнем меню окна настольного приложения. <br>Если вам нужна дополнительная помощь, присоединяйтесь к нашему серверу <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a>! <br><div class='mt-2'></div><img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				id: `Anda dapat menemukan tombol 'laporan masalah' di menu atas jendela aplikasi desktop. <br>Jika Anda memerlukan bantuan lebih lanjut, silakan bergabung dengan server <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a> kami! <br><div class='mt-2'></div><img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fil: `Makikita mo ang pindutang 'isyu ng ulat' sa tuktok na menu ng window ng application ng desktop. <br>Kung kailangan mo ng karagdagang tulong, mangyaring sumali sa aming <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a> server! <br><div class='mt-2'></div><img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				zh: `您可以在桌面应用程序窗口的顶部菜单中找到 “报告问题” 按钮。<br>如果您需要进一步的帮助，请加入我们的 <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a> 服务器！<br><div class='mt-2'></div><img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				br: `Você pode encontrar o botão 'relatar problema' no menu superior da janela do aplicativo de desktop. <br>
					Se precisar de mais ajuda, junte-se ao nosso servidor <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a>! <br>
					<div class='mt-2'></div>
					<img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`,
				es: `Puede encontrar el botón «informar de un problema» en el menú superior de la ventana de la aplicación de escritorio. <br>Si necesitas más ayuda, únete a nuestro servidor de <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://discord.gg/uabGsGazRe'>Discord</a>. <br><div class='mt-2'></div><img src='images/faqs/bugreport.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
			},
		},
		issueFPS: {
			question: {
				en: "How can I improve my frames per second (FPS)?",
				de: "Wie kann ich meine Frames pro Sekunde (FPS) verbessern?", // #toBeUpdated
				fr: "Comment puis-je améliorer mes images par seconde (FPS) ?", // #toBeUpdated
				ru: "Как улучшить количество кадров в секунду (FPS)?", // #toBeUpdated
				id: "Bagaimana cara meningkatkan frame saya per detik (FPS)?", // #toBeUpdated
				fil: "Paano ko mapapabuti ang aking mga frame sa bawat segundo (FPS)?", // #toBeUpdated
				zh: "如何提高每秒帧数 (FPS)？", // #toBeUpdated
				br: "Como posso melhorar meus quadros por segundo (FPS)?",
				es: "¿Cómo puedo mejorar mis fotogramas por segundo (FPS)?", // #toBeUpdated
			},
			content: {
				en: `If you encounter low frames per second during games, please restart Dota 2, in most cases this will fix frame rate problems without any further actions.<br><br>
					Tabbing (Alt+Tab) in between your desktop and Dota 2 will also cause frame rate problems overtime. If this happens, restart Dota 2.<br>
					<br>
					The steam notifaction message display also causes frame rate problems.<br>
					You can disable it here:<br>
					<ul>
						<li>Open your frind list (Right click steam in the taskbar -> friends).</li>
						<li>Left-click on the settings wheel on the top right corner.</li>
						<li>Disable all notifactions as shown in the image below.</li>
					</ul>
					<div class="mt-2"></div>
					<img src="images/faqs/steamnotification.png" class="img-fluid rounded shadow">`,
				de: `Wenn Sie während des Spiels auf niedrige Frames pro Sekunde stoßen, starten Sie Dota 2 neu. In den meisten Fällen werden dadurch Probleme mit der Bildrate ohne weitere Maßnahmen behoben. Das <br>Tabbing (Alt+Tab) zwischen Ihrem Desktop und Dota 2 führt im Laufe der Zeit ebenfalls zu Problemen mit der Bildrate. Wenn dies passiert, starten Sie Dota 2 neu. <br><br>Die Anzeige der Steam-Benachrichtigung verursacht auch Probleme mit der Bildrate. <br>Du kannst es hier deaktivieren: <br><ul><li>Öffne deine Freundesliste (Rechtsklick auf Steam in der Taskleiste -> Freunde). </li><li>Klicke auf das Einstellungsrad in der oberen rechten Ecke. </li><li>Deaktivieren Sie alle Benachrichtigungen wie in der Abbildung unten gezeigt. </li></ul><div class='mt-2'></div><img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fr: `Si vous rencontrez un faible nombre d'images par seconde pendant les parties, veuillez redémarrer Dota 2, dans la plupart des cas, cela résoudra les problèmes de fréquence d'images sans autre action. La <br>tabulation (Alt+Tab) entre votre bureau et Dota 2 provoquera également des problèmes de fréquence d'images au fil du temps. Dans ce cas, redémarrez Dota 2. <br><br>L'affichage du message de notification Steam provoque également des problèmes de fréquence d'images. <br>Vous pouvez le désactiver ici : <br><ul><li>Ouvrez votre liste d'amis (faites un clic droit sur Steam dans la barre des tâches -> amis). </li><li>Cliquez sur la molette de réglage dans le coin supérieur droit. </li><li>Désactivez toutes les notifications comme indiqué dans l'image ci-dessous. </li></ul><div class='mt-2'></div><img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				ru: `Если во время игры вы сталкиваетесь с низкой частотой кадров в секунду, перезапустите Dota 2, в большинстве случаев это решит проблемы с частотой кадров без каких-либо дальнейших действий. <br>Вкладка (Alt+Tab) между рабочим столом и Dota 2 также вызовет проблемы с частотой кадров со временем. Если это произойдет, перезапустите Dota 2. <br><br>Отображение уведомлений steam также вызывает проблемы с частотой кадров. <br>Вы можете отключить его здесь: <br><ul><li>Откройте список друзей (щелкните правой кнопкой мыши steam на панели задач -> друзья). </li><li>Нажмите на колесико настроек в правом верхнем углу. </li><li>Отключите все уведомления, как показано на рисунке ниже. </li></ul><div class='mt-2'></div><img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				id: `Jika Anda menemukan frame rendah per detik selama pertandingan, silakan restart Dota 2, dalam banyak kasus ini akan memperbaiki masalah frame rate tanpa tindakan lebih lanjut. <br>Tabbing (Alt+Tab) di antara desktop Anda dan Dota 2 juga akan menyebabkan masalah frame rate lembur. Jika ini terjadi, restart Dota 2. <br><br>Tampilan pesan notifaction uap juga menyebabkan masalah frame rate. <br>Anda dapat menonaktifkannya di sini:<br><ul><li>Buka daftar frind Anda (Klik kanan uap di taskbar -> teman). </li><li>Llick pada roda pengaturan di sudut kanan atas. </li><li>Nonaktifkan semua notifactions seperti yang ditunjukkan pada gambar di bawah ini.</li></ul><div class='mt-2'></div><img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				fil: `Kung nakatagpo ka ng mga mababang frame sa bawat segundo sa panahon ng mga laro, mangyaring i-restart ang Dota 2, sa karamihan ng mga kaso ayusin nito ang mga problema sa frame rate nang walang anumang karagdagang mga pagkilos. Ang<br>pag-tab (Alt+Tab) sa pagitan ng iyong desktop at Dota 2 ay magdudulot din ng mga problema sa overtime ng frame rate. Kung mangyari ito, i-restart ang Dota 2. <br><br>Ang display ng mensahe ng notification ng singaw ay nagdudulot din ng mga problema sa frame rate. <br>Maaari mo itong i-disable dito:<br><ul><li>Buksan ang iyong listahan ng kaibigan (I-right click ang steam sa taskbar -> mga kaibigan). </li><li>Mag-click sa mga setting ng gulong sa kanang sulok sa itaas. </li><li>Huwag paganahin ang lahat ng mga notification tulad ng ipinapakita sa larawan sa ibaba. </li></ul><div class='mt-2'></div><img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				zh: `如果您在游戏中遇到每秒帧数较低的情况，请重启Dota 2，在大多数情况下，这将解决帧速率问题，而无需采取任何进一步措施。<br>在桌面和 Dota 2 之间切换 Tab 键（Alt+Tab）也会导致帧速率问题超时。如果发生这种情况，请重新启动 Dota 2。<br><br>Steam 通知消息显示也会导致帧速率问题。<br>你可以在这里禁用它：<br><ul><li>打开你的朋 友列表（右键单击任务栏中的 steam-> 朋友）。</li><li>单击右上角的设置轮。</li><li>禁用所有通知，如下图所示。</li></ul><div class='mt-2'></div><img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
				br: `Se você encontrar quadros baixos por segundo durante os jogos, reinicie o Dota 2, na maioria dos casos, isso corrigirá problemas de taxa de quadros sem nenhuma ação adicional. <br>
					Tabular (Alt+Tab) entre a área de trabalho e o Dota 2 também causará problemas de taxa de quadros ao longo do tempo. Se isso acontecer, reinicie o Dota 2. <br>
					<br>
					A exibição da mensagem de notificação do Steam também causa problemas na taxa de quadros. <br>
					Você pode desativá-lo aqui: <br>
					<ul>
						<li>Abra sua lista de amigos (clique com o botão direito do mouse na barra de tarefas -> amigos). </li>
						<li>Clique na roda de configurações no canto superior direito. </li>
						<li>Desative todas as notificações conforme mostrado na imagem abaixo. </li>
					</ul>
					<div class='mt-2'></div>
					<img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`,
				es: `Si encuentra fotogramas por segundo bajos durante los juegos, reinicie Dota 2, en la mayoría de los casos, esto solucionará los problemas de velocidad de fotogramas sin ninguna otra acción. <br>Las tabulaciones (Alt+Tab) entre el escritorio y Dota 2 también causarán problemas de velocidad de fotogramas con el tiempo. Si esto ocurre, reinicie Dota 2. <br><br>La visualización del mensaje de notificación de vapor también provoca problemas de velocidad de fotogramas. <br>Puede desactivarlo aquí: <br><ul><li>Abra su lista de amigos (haga clic con el botón derecho en Steam en la barra de tareas -> amigos). </li><li>Haz clic en la rueda de ajustes en la esquina superior derecha. </li><li>Deshabilite todas las notificaciones como se muestra en la imagen de abajo. </li></ul><div class='mt-2'></div><img src='images/faqs/steamnotification.png' class='img-fluid rounded shadow'>`, // #toBeUpdated
			},
		},
		issueWindow: {
			question: {
				en: "Why is a window not showing?",
				de: "Warum wird ein Fenster nicht angezeigt?", // #toBeUpdated
				fr: "Pourquoi une fenêtre ne s'affiche-t-elle pas ?", // #toBeUpdated
				ru: "Почему окно не отображается?", // #toBeUpdated
				id: "Mengapa jendela tidak ditampilkan?", // #toBeUpdated
				fil: "Bakit hindi nagpapakita ang isang window?", // #toBeUpdated
				zh: "为什么窗户没有显示？", // #toBeUpdated
				br: "Por que uma janela não está aparecendo?",
				es: "¿Por qué no se ve una ventana?", // #toBeUpdated
			},
			content: {
				en: `This can happen when you customize the location of the timers and then change the screen resolution.<br> 
					We suggest that you reset the position of the timers in the settings menu.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`,
				de: `Dies kann passieren, wenn Sie die Position der Timer anpassen und dann die Bildschirmauflösung ändern. <br>Wir empfehlen Ihnen, die Position der Timer im Einstellungsmenü zurückzusetzen. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
				fr: `Cela peut se produire lorsque vous personnalisez l'emplacement des minuteries, puis modifiez la résolution de l'écran. <br>Nous vous suggérons de réinitialiser la position des minuteries dans le menu des paramètres. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
				ru: `Это может произойти, когда вы настраиваете расположение таймеров, а затем меняете разрешение экрана. <br>Мы предлагаем вам сбросить положение таймеров в меню настроек. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
				id: `Hal ini dapat terjadi ketika Anda menyesuaikan lokasi timer dan kemudian mengubah resolusi layar. <br>Kami menyarankan agar Anda mengatur ulang posisi timer di menu pengaturan. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
				fil: `Maaaring mangyari ito kapag na-customize mo ang lokasyon ng mga timers at pagkatapos ay baguhin ang resolution ng screen. <br>Iminumungkahi namin na i-reset mo ang posisyon ng mga timers sa menu ng mga setting. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
				zh: `当您自定义计时器的位置然后更改屏幕分辨率时，可能会发生这种情况。<br>我们建议您在设置菜单中重置计时器的位置。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
				br: `Isso pode acontecer quando você personaliza a localização dos cronômetros e altera a resolução da tela. <br>
					Sugerimos que você redefina a posição dos cronômetros no menu de configurações. <br>
					<div class='mt-2'></div>
					<img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`,
				es: `Esto puede suceder cuando personaliza la ubicación de los temporizadores y, a continuación, cambia la resolución de la pantalla. <br>Le sugerimos que restablezca la posición de los temporizadores en el menú de configuración. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
			},
		},
		// Timers
		timerStart: {
			question: {
				en: "How do I start a timer?",
				de: "Wie starte ich einen Timer?", // #toBeUpdated
				fr: "Comment démarrer une minuterie ?", // #toBeUpdated
				ru: "Как запустить таймер?", // #toBeUpdated
				id: "Bagaimana cara memulai timer?", // #toBeUpdated
				fil: "Paano ako magsisimula ng timer?", // #toBeUpdated
				zh: "如何启动计时器？", // #toBeUpdated
				br: "Como faço para iniciar um cronômetro?",
				es: "¿Cómo puedo poner en marcha un temporizador?", // #toBeUpdated
			},
			content: {
				en: `<p>
						Left-click on timers to activate them. This works for Roshan, Glyph of Fortification, Buybacks and
						Ultimates.<br>	
					<div style="display:flex">
						<div style="width: 40%">Roshan timer before activation:<br>
							<div class="mt-2"></div>
							<img class="img-fluid rounded shadow" src="./images/faqs/roshan_timer_inactive.png" style="width:80%">
						</div>
						<div style="width: 40%">Roshan timer after activation:<br>
							<div class="mt-2"></div>
							<img class="img-fluid rounded shadow" src="./images/faqs/roshan_timer_active.png" style="width:80%">
						</div>
					</div>`,
				de: `<p>Klicke mit der linken Maustaste auf Timer, um sie zu aktivieren. Das funktioniert für Roshan, Glyphe of Fortification, Buybacks und Ultimates. <br><div style='display:flex'><div style='width: 40%'>Roshan-Timer vor der Aktivierung:<div class='mt-2'></div></div> <br><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'><div style='width: 40%'>Roshan-Timer nach der Aktivierung: <br><div class='mt-2'></div> </div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`, // #toBeUpdated
				fr: `<p>Cliquez avec le bouton gauche sur les minuteries pour les activer. Cela fonctionne pour Roshan, Glyph of Fortification, Rachats et Ultimates. <br><div style='display:flex'><div style='width: 40%'>Minuterie Roshan avant activation :</div> <br><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'><div style='width: 40%'>minuterie<div class='mt-2'></div> Roshan après activation : <br><div class='mt-2'></div> </div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`, // #toBeUpdated
				ru: `<p>Нажмите на таймеры левой кнопкой мыши, чтобы активировать их. Это работает для Рошана, символа укрепления, выкупа и ультиматов. <br><div style='display:flex'><div style='width: 40%'>Таймер Рошана перед активацией:</div> <br><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'><div style='width: 40%'>Таймер<div class='mt-2'></div> Рошана после активации: <br><div class='mt-2'></div> </div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`, // #toBeUpdated
				id: `<p>Klik kiri pada timer untuk mengaktifkannya. Ini bekerja untuk Roshan, Glyph of Fortification, Buybacks dan Ultimates. <br><div style='display:flex'><div style='width: 40%'>Timer Roshan sebelum aktivasi:</div><br><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'><div style='width: 40%'>Timer<div class='mt-2'></div>Roshan setelah aktivasi:<br><div class='mt-2'></div> </div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`, // #toBeUpdated
				fil: `<p>Kaliwa-click sa timers upang maisaaktibo ang mga ito. Gumagana ito para sa Roshan, Glyph ng Fortification, Buybacks at Ultimates. <br><div style='display:flex'><div style='width: 40%'>Roshan timer bago i-activate:<div class='mt-2'></div></div><br><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'><div style='width: 40%'>Roshan timer pagkatapos ng pag-activate:<br><div class='mt-2'></div> </div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`, // #toBeUpdated
				zh: `<p>左键单击计时器以激活它们。这适用于 Roshan、设防符文、回购和终极版。<br><div style='display:flex'><div style='width: 40%'>激活前的 Roshan 计时器：激活</div><br><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'><div style='width: 40%'>后的<div class='mt-2'></div> Roshan 计时器：<br><div class='mt-2'></div></div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`, // #toBeUpdated
				br: `<p>Clique com o botão esquerdo nos cronômetros para ativá-los. Isso funciona para Roshan, Glifo da Fortificação, Recompras e Ultimates. <br>
						<div style='display:flex'><div style='width: 40%'>Cronômetro Roshan antes da ativação:</div> <br>
						<img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'>
						<div style='width: 40%'>cronômetro<div class='mt-2'></div> Roshan após a ativação: <br>
						<div class='mt-2'></div> </div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`,
				es: `<p>Haz clic izquierdo en los temporizadores para activarlos. Esto funciona para Roshan, glifo de fortificación, recompras y definitivos. <br><div style='display:flex'><div style='width: 40%'>Temporizador Roshan antes de la activación:</div> <br><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_inactive.png' style='width:80%'><div style='width: 40%'>Temporizador<div class='mt-2'></div> Roshan después de la activación: <br><div class='mt-2'></div> </div></div><img class='img-fluid rounded shadow' src='./images/faqs/roshan_timer_active.png' style='width:80%'>`, // #toBeUpdated
			},
		},
		timerStop: {
			question: {
				en: "How do I stop a timer?",
				de: "Wie stoppe ich einen Timer?", // #toBeUpdated
				fr: "Comment arrêter un chronomètre ?", // #toBeUpdated
				ru: "Как остановить таймер?", // #toBeUpdated
				id: "Bagaimana cara menghentikan timer?", // #toBeUpdated
				fil: "Paano ko ititigil ang isang timer?", // #toBeUpdated
				zh: "如何停止计时器？", // #toBeUpdated
				br: "Como faço para parar um cronômetro?",
				es: "¿Cómo detengo un temporizador?", // #toBeUpdated
			},
			content: {
				en: `Click on the red-cross to stop the timer.<br>`,
				de: `Klicken Sie auf das rote Kreuz, um den Timer anzuhalten. <br>`, // #toBeUpdated
				fr: `Cliquez sur la croix rouge pour arrêter le chronomètre. <br>`, // #toBeUpdated
				ru: `Нажмите на красный крестик, чтобы остановить таймер. <br>`, // #toBeUpdated
				id: `Klik pada salib merah untuk menghentikan timer. <br>`, // #toBeUpdated
				fil: `Mag-click sa red-cross upang itigil ang timer. <br>`, // #toBeUpdated
				zh: `点击红十字停止计时器。<br>`, // #toBeUpdated
				br: `Clique na cruz vermelha para parar o cronômetro. <br>`,
				es: `Haga clic en la cruz roja para detener el temporizador. <br>`, // #toBeUpdated
			},
		},
		timerAnnounce: {
			question: {
				en: "How do I announce a timer?",
				de: "Wie kündige ich einen Timer an?", // #toBeUpdated
				fr: "Comment annoncer un minuteur ?", // #toBeUpdated
				ru: "Как объявить таймер?", // #toBeUpdated
				id: "Bagaimana cara mengumumkan timer?", // #toBeUpdated
				fil: "Paano ko ipahayag ang isang timer?", // #toBeUpdated
				zh: "我该如何宣布计时器？", // #toBeUpdated
				br: "Como anuncio um cronômetro?",
				es: "¿Cómo puedo anunciar un temporizador?", // #toBeUpdated
			},
			content: {
				en: `
						You can share active timers by left-clicking on them.<br> 
						The app then automatically posts the timer status onto the team chat.<br>
						<br>
						Example buyback timers during a match:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/buyback_timers.png" style="width: 38%"><br><br>
						Resulting post on team chat:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/buyback_timers_chat.png" style="width: 57%"><br><br>
						This works for Roshan, Aegis, Glyph of Fortification, Buybacks and Ultimates.`,
				de: `Sie können aktive Timer teilen, indem Sie mit der linken Maustaste darauf klicken. <br>Die App veröffentlicht dann automatisch den Timer-Status im Teamchat. <br><br>Beispiel für Rückkaufzeitgeber während eines Spiels: <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Ergebnisbeitrag im Teamchat: <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br><br>Das funktioniert für Roshan, Aegis, Glyphe of Fortification, Buybacks und Ultimates.`, // #toBeUpdated
				fr: `Vous pouvez partager des minuteries actives en cliquant dessus avec le bouton gauche de la souris. <br>L'application publie ensuite automatiquement l'état du minuteur sur le chat d'équipe. <br><br>Exemple de minuteries de rachat pendant un match : <br><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Publication<div class='mt-2'></div> résultante sur le chat d'équipe : <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br><br>Cela fonctionne pour Roshan, Égide, Glyphe de fortification, Rachats et Ultimates.`,
				// #toBeUpdated
				ru: `Вы можете поделиться активными таймерами, щелкнув по ним левой кнопкой мыши. <br>Затем приложение автоматически публикует статус таймера в командном чате. <br><br>Пример таймера выкупа во время матча: <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>итоговое сообщение в командном чате: <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br><br>Это работает для Рошана, Эгиды, Символа укрепления, выкупа и ультиматов.`, // #toBeUpdated
				id: `Anda dapat berbagi timer aktif dengan mengklik kiri pada mereka. <br>Aplikasi kemudian secara otomatis memposting status timer ke obrolan tim. <br><br>Contoh penghitung waktu buyback selama pertandingan:<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Menghasilkan postingan pada obrolan tim:<br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br><br>Ini bekerja untuk Roshan, Aegis, Glyph of Fortification, Buybacks dan Ultimates.`, // #toBeUpdated
				fil: `Maaari kang magbahagi ng mga aktibong timers sa pamamagitan ng pag-click sa kaliwa sa mga ito. <br>Ang app pagkatapos ay awtomatikong mag-post ng katayuan ng timer papunta sa koponan ng chat. <br><br>Halimbawa ng buyback timers sa panahon ng isang tugma:<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>Ang resultang post sa team chat:<br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br><br>Gumagana ito para sa Roshan, Aegis, Glyph of Fortification, Buybacks at Ultimates.`, // #toBeUpdated
				zh: `您可以通过左键单击活动计时器来共享它们。<br>然后，该应用程序会自动将计时器状态发布到团队聊天中。<br><br>比赛期间的回购计时器示例:<br><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>团队聊天中<div class='mt-2'></div>产生的帖子:<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br><br>这适用于 Roshan、Aegis、设防符文、回购和 Ultimates。`, // #toBeUpdated
				br: `Você pode compartilhar cronômetros ativos clicando com o botão esquerdo neles. <br>
						Em seguida, o aplicativo publica automaticamente o status do cronômetro no bate-papo da equipe. <br>
						<br>
						Exemplo de cronômetros de recompra durante uma partida: <br>
						<img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br>
						<br>
						Postagem<div class='mt-2'></div> resultante no bate-papo da equipe: <br>
						<div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br>
						<br>
						Isso funciona para Roshan, Aegis, Glifo da Fortificação, Recompras e Ultimates.`,
				es: `Puedes compartir temporizadores activos haciendo clic con el botón izquierdo sobre ellos. <br>A continuación, la aplicación publica automáticamente el estado del temporizador en el chat del equipo. <br><br>Ejemplo de temporizadores de recompra durante un partido: <br><img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers.png' style='width: 38%'><br><br>publicación<div class='mt-2'></div> resultante en el chat del equipo: <br><div class='mt-2'></div> <img class='img-fluid rounded shadow' src='./images/faqs/buyback_timers_chat.png' style='width: 57%'><br><br>Esto funciona para Roshan, Aegis, Glifo de fortificación, Recompras y Ultimates.`, // #toBeUpdated
			},
		},
		timerDisable: {
			question: {
				en: "How do I disable a timer?",
				de: "Wie deaktiviere ich einen Timer?", // #toBeUpdated
				fr: "Comment désactiver un minuteur ?", // #toBeUpdated
				ru: "Как отключить таймер?", // #toBeUpdated
				id: "Bagaimana cara menonaktifkan timer?", // #toBeUpdated
				fil: "Paano ko i-disable ang isang timer?", // #toBeUpdated
				zh: "如何禁用计时器？", // #toBeUpdated
				br: "Como desativo um cronômetro?",
				es: "¿Cómo desactivo un temporizador?", // #toBeUpdated
			},
			content: {
				en: `Open the settings window.<br> 
					You can find it in the top right corner under 'change settings'.<br>
					You can then select the timers components you don't want to see.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/timers.png">`,
				de: `Öffne das Einstellungsfenster. <br>Sie finden es in der oberen rechten Ecke unter „Einstellungen ändern“. <br>Sie können die Timer-Komponenten, die Sie nicht sehen möchten. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`, // #toBeUpdated
				fr: `Ouvrez la fenêtre des paramètres. <br>Vous pouvez le trouver dans le coin supérieur droit sous « Modifier les paramètres ». <br>Vous pouvez utiliser les composants des minuteries que vous ne souhaitez pas voir. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`, // #toBeUpdated
				ru: `Откройте окно настроек. <br>Вы можете найти его в правом верхнем углу в разделе «Изменить настройки». <br>Вы можете выбрать компоненты таймеров, которые вы не хотите видеть. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`, // #toBeUpdated
				id: `Buka jendela pengaturan. <br>Anda dapat menemukannya di sudut kanan atas di bawah 'perubahan pengaturan'. <br>Anda dapat timer komponen yang Anda tidak ingin melihat. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`, // #toBeUpdated
				fil: `Buksan ang window ng mga setting. <br>Makikita mo ito sa kanang sulok sa itaas sa ilalim ng 'mga setting ng pagbabago. ' <br>Maaari mong ang mga bahagi ng timers na hindi mo nais na makita. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`, // #toBeUpdated
				zh: `打开设置窗口。<br>您可以在右上角的 “更改设置” 下找到它。<br>你可以使用你不想看到的计时器组件。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`, // #toBeUpdated
				br: `Abra a janela de configurações. <br>
					Você pode encontrá-lo no canto superior direito em “alterar configurações”. <br>
					Você pode ver os componentes dos cronômetros que você não deseja ver. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`,
				es: `Abre la ventana de configuración. <br>Puedes encontrarlo en la esquina superior derecha, en «cambiar configuración». <br>Puede ver los componentes de los temporizadores que no desea ver. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/timers.png'>`, // #toBeUpdated
			},
		},
		timerMissing: {
			question: {
				en: "Why do I not see timers?",
				de: "Warum sehe ich keine Timer?", // #toBeUpdated
				fr: "Pourquoi est-ce que je ne vois pas les minuteries ?", // #toBeUpdated
				ru: "Почему я не вижу таймеры?", // #toBeUpdated
				id: "Mengapa saya tidak melihat timer?", // #toBeUpdated
				fil: "Bakit hindi ko nakikita ang mga timers?", // #toBeUpdated
				zh: "为什么我看不到计时器？", // #toBeUpdated
				br: "Por que não vejo os cronômetros?",
				es: "¿Por qué no veo temporizadores?", // #toBeUpdated
			},
			content: {
				en: `There are multiple reasons why your timers are not shown.<br>
					If the Dota 2 game coordinator is not found, Dota Coach does not get any Data on the match which will result in no timers.<br>
					Another reason is the missing launchparameter '-gamestateintegration'. Make sure that it is added. Check our FAQ on how to add it.<br>
					Sometimes, the timers can go missing during repositon.<br>
					Simply hit the 'reset' button in the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`,
				de: "Es gibt mehrere Gründe, warum Ihre Timer nicht angezeigt werden. <br>Wenn der Dota 2-Spielkoordinator nicht gefunden wird, erhält Dota Coach keine Daten zum Spiel, was zu keinen Timern führt. <br>Ein weiterer Grund ist der fehlende Startparameter „-gamestate-Integration“. Stellen Sie sicher, dass es hinzugefügt wurde. In unseren FAQ erfahren Sie, wie Sie es hinzufügen können. <br>Manchmal können die Timer während der Ablage verloren gehen. <br>Drücke einfach den 'Reset'-Knopf im Einstellungsfenster. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				fr: "Il existe plusieurs raisons pour lesquelles vos minuteries ne s'affichent pas. <br>Si le coordinateur de jeu Dota 2 n'est pas trouvé, Dota Coach n'obtient aucune donnée sur le match qui n'entraînera aucun chronométrage. <br>Une autre raison est le paramètre de lancement manquant « -gamestateintegration ». Assurez-vous qu'il est ajouté. Consultez notre FAQ pour savoir comment l'ajouter. <br>Parfois, les minuteries peuvent disparaître pendant le dépôt. <br>Appuyez simplement sur le bouton « Réinitialiser » dans la fenêtre des paramètres. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				ru: "Таймеры не отображаются по нескольким причинам. <br>Если координатор игры в Dota 2 не найден, тренер по Dota не получает никаких данных о матче, что приведет к отсутствию таймеров. <br>Другой причиной является отсутствие параметра запуска «-gamestate integration». Убедитесь, что он добавлен. Ознакомьтесь с часто задаваемыми вопросами о том, как его добавить. <br>Иногда таймеры могут пропадать во время repositon. <br>Просто нажмите кнопку «reset» в окне настроек. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				id: "Ada beberapa alasan mengapa timer Anda tidak ditampilkan. <br>Jika koordinator permainan Dota 2 tidak ditemukan, Dota Coach tidak mendapatkan Data apa pun pada pertandingan yang akan menghasilkan tanpa timer. <br>Alasan lain adalah hilangparameter launchparameter '-gamestateintegration'. Pastikan bahwa itu ditambahkan. Periksa FAQ kami tentang cara menambahkannya. <br>Kadang-kadang, timer bisa hilang selama repositon. <br>Cukup tekan tombol 'reset' di jendela pengaturan. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				fil: "Mayroong maraming mga kadahilanan kung bakit ang iyong mga timers ay hindi ipinapakita. <br>Kung ang Dota 2 game coordinator ay hindi natagpuan, ang Dota Coach ay hindi makakakuha ng anumang Data sa tugma na magreresulta sa walang timers. <br>Ang isa pang dahilan ay ang nawawalang parameter ng paglunsad '-gamestateintegration'. Siguraduhin na ito ay idinagdag. Suriin ang aming FAQ kung paano idagdag ito. <br>Minsan, ang mga timers ay maaaring pumunta nawawala sa panahon ng repositon. <br>Pindutin lamang ang pindutan ng 'reset' sa window ng mga setting. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				zh: "计时器未显示的原因有很多。<br>如果找不到Dota 2游戏协调员，Dota Coach不会获得比赛的任何数据，这将导致没有计时器。<br>另一个原因是缺少启动参数 “-gamestateintegration”。确保它已添加。查看我们的常见问题解答以了解如何添加它。<br>有时，在重新定位期间，计时器可能会丢失。<br>只需在设置窗口中点击 “重置” 按钮即可。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				br: `Existem vários motivos pelos quais seus cronômetros não são exibidos. <br>
					Se o coordenador de jogo do Dota 2 não for encontrado, o Dota Coach não obterá nenhum dado sobre a partida, o que resultará em nenhum cronômetro. <br>
					Outro motivo é o parâmetro de lançamento ausente 'gamestateintegration'. Certifique-se de que ele seja adicionado. Consulte nossas perguntas frequentes sobre como adicioná-lo. <br>
					Às vezes, os cronômetros podem desaparecer durante o reposicionamento. <br>
					Basta clicar no botão 'redefinir' na janela de configurações. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`,
				es: "Hay varias razones por las que no se muestran los temporizadores. <br>Si no se encuentra el coordinador del juego de Dota 2, el entrenador de Dota no obtiene ningún dato sobre el partido, lo que no generará temporizadores. <br>Otra razón es que falta el parámetro de lanzamiento «gamestateintegration». Asegúrese de que se añade. Consulte nuestras preguntas frecuentes sobre cómo agregarlo. <br>A veces, los temporizadores pueden perderse durante el reposicionamiento. <br>Simplemente pulsa el botón «restablecer» en la ventana de configuración. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
			},
		},
		timerUltimate: {
			question: {
				en: "Why do I not see Ultimate timers?",
				de: "Warum sehe ich keine Ultimate-Timer?", // #toBeUpdated
				fr: "Pourquoi les minuteurs Ultimate ne s'affichent-ils pas ?", // #toBeUpdated
				ru: "Почему я не вижу таймеры Ultimate?", // #toBeUpdated
				id: "Mengapa saya tidak melihat timer Ultimate?", // #toBeUpdated
				fil: "Bakit hindi ko nakikita ang Ultimate timers?", // #toBeUpdated
				zh: "为什么我看不到终极计时器？", // #toBeUpdated
				br: "Por que não vejo os cronômetros Ultimate?",
				es: "¿Por qué no veo los temporizadores Ultimate?", // #toBeUpdated
			},
			content: {
				en: `Ultimate timers are a premium feature that is only available to our subscribers.<br>
					A subscription is 1.99$ / month.<br>
					Open the application menu and click on manage subscription.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/subscribe.png">`,
				de: `Ultimate-Timer sind eine Premium-Funktion, die nur unseren Abonnenten zur Verfügung steht. <br>Ein Abonnement kostet 1,99$ /Monat. <br>Öffnen Sie das Anwendungsmenü und klicken Sie auf Abonnement verwalten. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`,
				// #toBeUpdated
				fr: `Les minuteries Ultimate sont une fonctionnalité premium qui n'est disponible que pour nos abonnés. <br>Un abonnement coûte 1,99 $/mois. <br>Ouvrez le menu de l'application et cliquez sur Gérer l'abonnement. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`,
				// #toBeUpdated
				ru: `Таймеры Ultimate — это премиум-функция, доступная только нашим подписчикам. <br>Подписка составляет 1,99$ в месяц. <br>Откройте меню приложения и нажмите «Управление подпиской». <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`, // #toBeUpdated
				id: `Ultimate timer adalah fitur premium yang hanya tersedia untuk pelanggan kami. <br>Langganan adalah 1.99$ /bulan. <br>Buka menu aplikasi dan klik kelola langganan. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`, // #toBeUpdated
				fil: `Ang mga ultimate timers ay isang premium na tampok na magagamit lamang sa aming mga tagasuskribi. <br>Ang isang subscription ay 1.99$/buwan. <br>Buksan ang menu ng application at mag-click sa pamahalaan ang subscription. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`, // #toBeUpdated
				zh: `终极计时器是一项高级功能，仅对我们的订阅者可用。<br>订阅费用为每月1.99美元。<br>打开应用程序菜单，然后单击管理订阅。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`, // #toBeUpdated
				br: `Os cronômetros Ultimate são um recurso premium que está disponível apenas para nossos assinantes. <br>
					A assinatura custa 1,99 $/mês. <br>
					Abra o menu do aplicativo e clique em gerenciar assinatura. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`,
				es: `Los temporizadores definitivos son una función premium que solo está disponible para nuestros suscriptores. <br>Una suscripción cuesta 1.99 $/mes. <br>Abra el menú de la aplicación y haga clic en administrar suscripción. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/subscribe.png'>`, // #toBeUpdated
			},
		},
		// Gamemodes
		gamemodeSupport: {
			question: {
				en: "What Game Modes do you support?",
				de: "Welche Spielmodi unterstützt du?", // #toBeUpdated
				fr: "Quels modes de jeu prenez-vous en charge ?", // #toBeUpdated
				ru: "Какие игровые режимы вы поддерживаете?", // #toBeUpdated
				id: "Mode Game apa yang Anda dukung?", // #toBeUpdated
				fil: "Anong mga Mode ng Game ang sinusuportahan mo?", // #toBeUpdated
				zh: "你们支持什么游戏模式？", // #toBeUpdated
				br: "Quais modos de jogo você suporta?",
				es: "¿Qué modos de juego son compatibles?", // #toBeUpdated
			},
			content: {
				en: `Dota Coach works in all Game Modes.<br>
					But be aware that some timers and timings might be not fully operational in Turbo matches.<br>
					Ability Draft is also not fully supported.<br>`,
				de: `Dota Coach funktioniert in allen Spielmodi. <br>Beachten Sie jedoch, dass einige Timer und Timings in Turbo-Spielen möglicherweise nicht vollständig funktionsfähig sind. <br>Ability Draft wird ebenfalls nicht vollständig unterstützt. <br>`, // #toBeUpdated
				fr: `Dota Coach fonctionne dans tous les modes de jeu. <br>Mais sachez que certains chronomètres et minuteries peuvent ne pas être pleinement opérationnels dans les matchs Turbo. <br>Ability Draft n'est également pas entièrement pris en charge. <br>`, // #toBeUpdated
				ru: `Dota Coach работает во всех игровых режимах. <br>Но имейте в виду, что некоторые таймеры и тайминги могут работать не в полной мере в Турбо-матчах. <br>Драфт способностей также не полностью поддерживается. <br>`, // #toBeUpdated
				id: `Dota Coach bekerja di semua Mode Game. <br>Namun perlu diketahui bahwa beberapa timer dan timing mungkin tidak beroperasi penuh dalam pertandingan Turbo. <br>Kemampuan Draft juga tidak sepenuhnya didukung. <br>`, // #toBeUpdated
				fil: `Gumagana ang Dota Coach sa lahat ng mga Mode ng Game. <br>Ngunit magkaroon ng kamalayan na ang ilang mga timers at timing ay maaaring hindi ganap na gumagana sa Turbo tugma. Ang<br>Kakayahang Draft ay hindi rin ganap na suportado. <br>`, // #toBeUpdated
				zh: `Dota Coach 适用于所有游戏模式。<br>但请注意，在Turbo比赛中，某些计时器和计时器可能无法完全运行。<br>能力草稿也不完全受支持。<br>`, // #toBeUpdated
				br: `O Dota Coach funciona em todos os modos de jogo. <br>
					Mas esteja ciente de que alguns cronômetros e horários podem não estar totalmente operacionais em partidas Turbo. O <br>
					Ability Draft também não é totalmente suportado. <br>`,
				es: `Dota Coach funciona en todos los modos de juego. <br>Pero ten en cuenta que es posible que algunos temporizadores y tiempos no estén completamente operativos en las partidas turbo. <br>El borrador de habilidades tampoco se admite por completo. <br>`, // #toBeUpdated
			},
		},
		gamemodeSpectate: {
			question: {
				en: "Can I spectate games?",
				de: "Kann ich mir Spiele ansehen?", // #toBeUpdated
				fr: "Est-ce que je peux assister à des matchs ?", // #toBeUpdated
				ru: "Могу ли я наблюдать за играми?", // #toBeUpdated
				id: "Dapatkah saya melihat permainan?", // #toBeUpdated
				fil: "Maaari ba akong tumitingin sa mga laro?", // #toBeUpdated
				zh: "我能看比赛吗？", // #toBeUpdated
				br: "Posso assistir a jogos?",
				es: "¿Puedo ver partidos?", // #toBeUpdated
			},
			content: {
				en: `Yes, you can! Dota Coach works in spectator mode.<br>
					It will enhance your overall spectator experience due to providing additional information.<br>
					Try it out!<br>`,
				de: `Ja, das kannst du! Dota Coach arbeitet im Zuschauermodus. <br>Es wird Ihr gesamtes Zuschauererlebnis verbessern, da zusätzliche Informationen bereitgestellt werden. <br>Probiere es aus! <br>`, // #toBeUpdated
				fr: `Oui, tu peux ! Dota Coach fonctionne en mode spectateur. <br>Cela améliorera votre expérience globale en tant que spectateur en fournissant des informations supplémentaires. <br>Essayez-le ! <br>`, // #toBeUpdated
				ru: `Да, можете! Dota Coach работает в режиме зрителя. <br>Это улучшит общее впечатление от зрителей за счет предоставления дополнительной информации. <br>Попробуй! <br>`, // #toBeUpdated
				id: `Ya, Anda bisa! Dota Coach bekerja dalam mode penonton. <br>Ini akan meningkatkan pengalaman penonton Anda secara keseluruhan karena memberikan informasi tambahan. <br>Mencobanya! <br>`, // #toBeUpdated
				fil: `Oo, maaari mo! Gumagana ang Dota Coach sa mode ng tagapanood. <br>Mapapahusay nito ang iyong pangkalahatang karanasan sa tagapanood dahil sa pagbibigay ng karagdagang impormasyon. <br>Subukan ito! <br>`, // #toBeUpdated
				zh: `是的，你可以！刀塔教练在旁观者模式下工作。<br>由于提供了额外的信息，它将增强你的整体观众体验。<br>试试吧！<br>`, // #toBeUpdated
				br: `Sim, você pode! O Dota Coach funciona no modo espectador. <br>
					Isso melhorará sua experiência geral do espectador ao fornecer informações adicionais. <br>
					Experimente! <br>`,
				es: `¡Sí, puedes! El entrenador de Dota trabaja en modo espectador. <br>Mejorará la experiencia general del espectador debido a que proporciona información adicional. <br>¡Pruébalo! <br>`, // #toBeUpdated
			},
		},
		gamemodeTournament: {
			question: {
				en: "Can I use the app in offical tournaments / ticketed games?",
				de: "Kann ich die App in offiziellen Turnieren oder Spielen mit Tickets verwenden?", // #toBeUpdated
				fr: "Puis-je utiliser l'application dans les tournois officiels/les parties payantes ?", // #toBeUpdated
				ru: "Могу ли я использовать приложение в официальных турнирах/играх с билетами?", // #toBeUpdated
				id: "Dapatkah saya menggunakan aplikasi di turnamen offical/game tiket?", // #toBeUpdated
				fil: "Maaari ko bang gamitin ang app sa opisyal na paligsahan/ticketed games?", // #toBeUpdated
				zh: "我可以在官方锦标赛/门票游戏中使用该应用程序吗？", // #toBeUpdated
				br: "Posso usar o aplicativo em torneios oficiais/jogos com ingressos?",
				es: "¿Puedo usar la aplicación en torneos oficiales o partidos con entradas?", // #toBeUpdated
			},
			content: {
				en: `The short answer is no.<br>
					Offical games send the gamestateintegration data delayed, which results in delayed timers and bad app functionality.<br>
					You can not use Dota Coach during offical tournament games (ticketed games).<br>`,
				de: "Die kurze Antwort lautet nein. <br>Offizielle Spiele senden die Integrationsdaten des Spielstaates verzögert, was zu verzögerten Timern und schlechter App-Funktionalität führt. <br>Du kannst Dota Coach nicht bei offiziellen Turnierspielen (Ticketspiele) verwenden. <br>", // #toBeUpdated
				fr: "La réponse courte est non. Les <br>jeux officiels envoient les données d'intégration de l'état du jeu en différé, ce qui entraîne des retards et une mauvaise fonctionnalité de l'application. <br>Vous ne pouvez pas utiliser Dota Coach pendant les matchs officiels du tournoi (matchs avec billets). <br>", // #toBeUpdated
				ru: "Короткий ответ — нет. <br>Официальные игры отправляют данные интеграции состояния игры с задержкой, что приводит к задержке таймеров и плохой функциональности приложения. <br>Вы не можете использовать Dota Coach во время официальных турнирных игр (игры с билетами). <br>", // #toBeUpdated
				id: "Jawaban singkatnya adalah tidak. <br>Game resmi mengirim data gamestateintegrasi tertunda, yang menghasilkan timer tertunda dan fungsionalitas aplikasi yang buruk. <br>Anda tidak dapat menggunakan Dota Coach selama pertandingan turnamen resmi (game tiket). <br>", // #toBeUpdated
				fil: "Ang maikling sagot ay hindi. Ang mga<br>opisyal na laro ay nagpapadala ng data ng pagsasama ng gamestateintegration na naantala, na nagreresulta sa mga naantalang timers at masamang pag-andar ng app. <br>Hindi mo maaaring gamitin ang Dota Coach sa mga opisyal na laro ng torneo (ticketed games). <br>", // #toBeUpdated
				zh: "简短的答案是否定的。<br>官方游戏会延迟发送 gamestateintegration 数据，这会导致计时器延迟和应用程序功能不佳。<br>你不能在官方锦标赛游戏（门票游戏）中使用Dota Coach。<br>", // #toBeUpdated
				br: `A resposta curta é não. Os <br>
					jogos oficiais enviam os dados de integração do estado do jogo atrasados, o que resulta em cronômetros atrasados e funcionalidade ruim do aplicativo. <br>
					Você não pode usar o Dota Coach durante os jogos oficiais do torneio (jogos com ingressos). <br>",
				es: "La respuesta corta es no. <br>Los juegos oficiales retrasan los datos de integración de gamestateintegration, lo que provoca temporizadores retrasados y una mala funcionalidad de la aplicación. <br>No puedes usar Dota Coach durante los partidos oficiales del torneo (partidos con entrada). <br>`, // #toBeUpdated
			},
		},
		// Hero Guides
		heroguidesGet: {
			question: {
				en: "How can I get your Hero Guides?",
				de: "Wie kann ich deine Hero Guides bekommen?", // #toBeUpdated
				fr: "Comment puis-je obtenir vos guides de héros ?", // #toBeUpdated
				ru: "Как получить путеводители по героям?", // #toBeUpdated
				id: "Bagaimana saya bisa mendapatkan Panduan Pahlawan Anda?", // #toBeUpdated
				fil: "Paano ko makukuha ang iyong mga Gabay sa Hero?", // #toBeUpdated
				zh: "我怎样才能得到你的英雄指南？", // #toBeUpdated
				br: "Como posso obter seus guias de heróis?",
				es: "¿Cómo puedo obtener las Guías de héroes?", // #toBeUpdated
			},
			content: {
				en: `We have created in-game guides for every hero in the game.<br>
					They contain all the tips and item builds that are provided in the "Dota Coach App".<br>
					Subscribe to the them <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://dota-coach.github.io/dota_guides.html">here</a>.<br>
					Select a hero and click on 'Get Steam Guide':<br>
					<ul>
					<li>Scroll down until you see a green button 'Subscribe'.</li>
					<li>Click 'Subscribe' on the Steam page.</li>
					<li>If you're not logged in yet, please log into Steam.</li>
					<li>The login is only necessary the first time.</li>
					<li>Click 'Favorite' on the Steam page - this will make the guide appear on top of your guides list in the game</li>
					<li>Click 'Thumbs Up' to make the guide more visible to other users - optional, but appreciated! </li>
					<li>Repeat the process for all heroes that you like to play.</li>
					<li>You have to restart Dota to see your selected guides in the game!</li>
					</ul>
					<script>_buildCarousell()</script>`,
				de: `Wir haben für jeden Helden im Spiel Anleitungen im Spiel erstellt. <br>Sie enthalten alle Tipps und Item-Builds, die in der „Dota Coach App“ bereitgestellt werden. </a><br>Abonniere sie <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>hier</a>. <br>Wähle einen Helden aus und klicke auf „Steam Guide holen“: <br><ul><li>Scrolle nach unten, bis du den grünen Button „Abonnieren“ siehst. </li><li>Klicke auf der Steam-Seite auf „Abonnieren“. </li><li>Wenn du noch nicht angemeldet bist, melde dich bitte bei Steam an. </li><li>Das Login ist nur beim ersten Mal erforderlich. </li><li>Klicke auf der Steam-Seite auf „Favorit“ - dadurch wird der Guide im Spiel ganz oben auf deiner Guide-Liste angezeigt</li>. <li>Klicke auf „Daumen hoch“, um den Guide für andere Benutzer besser sichtbar zu machen - optional, aber geschätzt! </li><li>Wiederhole den Vorgang für alle Helden, die du gerne spielst. </li><li>Du musst Dota neu starten, um deine ausgewählten Guides im Spiel zu sehen! </li></ul><script>_Karussell bauen ()</script>`, // #toBeUpdated
				fr: `Nous avons créé des guides en jeu pour chaque héros du jeu. <br>Ils contiennent tous les conseils et les éléments fournis dans « l'application Dota Coach ». </a><br>Abonnez-vous au thème <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>ici</a>. <br>Sélectionnez un héros et cliquez sur « Obtenir le guide Steam » : <br><ul><li>faites défiler vers le bas jusqu'à ce que vous voyiez un bouton vert « S'abonner ». </li><li>Cliquez sur « S'abonner » sur la page Steam. </li><li>Si vous n'êtes pas encore connecté, connectez-vous à Steam. </li><li>La connexion n'est nécessaire que la première fois. </li><li>Cliquez sur « Favoris » sur la page Steam - cela fera apparaître le guide en haut de votre liste de guides dans le jeu</li>. <li>Cliquez sur « Pouce levé » pour rendre le guide plus visible pour les autres utilisateurs - facultatif, mais apprécié ! </li><li>Répétez le processus pour tous les héros auxquels vous aimez jouer. </li><li>Vous devez redémarrer Dota pour voir les guides que vous avez sélectionnés dans le jeu ! </li></ul><script>_BuildCarousell ()</script>`, // #toBeUpdated
				ru: `Мы создали внутриигровые руководства для каждого героя игры. <br>Они содержат все советы и сборки предметов, которые есть в «приложении Dota Coach». </a><br>Подпишитесь на них <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>здесь</a>. <br>Выберите героя и нажмите «Получить руководство Steam»: <br><ul><li>прокрутите вниз, пока не увидите зеленую кнопку «Подписаться». </li><li>Нажмите «Подписаться» на странице Steam. </li><li>Если вы еще не вошли в систему, войдите в Steam. </li><li>Вход в систему необходим только в первый раз. </li><li>Нажмите «Избранное» на странице Steam - руководство появится в верхней части списка гидов в игре</li>. <li>Нажмите «Thumbs Up», чтобы сделать руководство более заметным для других пользователей - необязательно, но приветствуется! </li><li>Повторите процесс для всех героев, которых вы любите играть. </li><li>Вам нужно перезапустить Dota, чтобы увидеть выбранные гайды в игре! </li></ul><script>_Построить карусель ()</script>`, // #toBeUpdated
				id: `Kami telah membuat panduan dalam game untuk setiap pahlawan dalam permainan. <br>Mereka berisi semua tips dan item membangun yang disediakan di 'Dota Coach App'. </a><br>Berlangganan mereka <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>di sini</a>. <br>Pilih pahlawan dan klik 'Get Steam Guide':<br><ul><li>Gulir ke bawah sampai Anda melihat tombol hijau 'Berlangganan'. </li><li>Klik 'Berlangganan' pada halaman Uap. </li><li>Jika Anda belum login, silakan masuk ke Steam. </li><li>Login hanya diperlukan untuk pertama kalinya. </li><li>Klik 'Favorit' di halaman Uap - ini akan membuat panduan muncul di atas daftar panduan Anda dalam permainan</li><li>Klik 'Thumbs Up' untuk membuat panduan lebih terlihat oleh pengguna lain - opsional, tapi dihargai! </li><li>Ulangi proses untuk semua pahlawan yang ingin Anda mainkan. </li><li>Anda harus me-restart Dota untuk melihat panduan yang Anda pilih dalam permainan! </li></ul><script>_BuildCarousell ()</script>`, // #toBeUpdated
				fil: `Gumawa kami ng mga in-game na gabay para sa bawat bayani sa laro. <br>Naglalaman ito ng lahat ng mga tip at item build na ibinigay sa 'Dota Coach App'. </a><br>Mag-subscribe sa kanila <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>dito</a>. <br>Pumili ng isang bayani at mag-click sa 'Kumuha ng Steam Guide ':<br><ul><li>Mag-scroll pababa hanggang makita mo ang berdeng button na 'Mag-subscribe'. </li><li>I-click ang 'Mag-subscribe' sa pahina ng Steam. </li><li>Kung hindi ka pa naka-log in, mangyaring mag-log in sa Steam. </li><li>Ang pag-login ay kinakailangan lamang sa unang pagkakataon. </li><li>I-click ang 'Paboritong' sa pahina ng Steam - gagawin nito ang gabay na lumitaw sa ibabaw ng iyong listahan ng mga gabay sa laro I-click ang</li><li>'Thumbs Up 'upang gawing mas nakikita ang gabay sa iba pang mga gumagamit - opsyonal, ngunit pinahahalagahan! </li><li>Ulitin ang proseso para sa lahat ng mga bayani na gusto mong i-play. </li><li>Kailangan mong i-restart ang Dota upang makita ang iyong mga napiling gabay sa laro! </li></ul><script>_Build Carousell ()</script>`, // #toBeUpdated
				zh: `我们已经为游戏中的每位英雄创建了游戏内指南。<br>它们包含 “Dota Coach App” 中提供的所有技巧和物品构建。</a><br><a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>在这里订阅他们。</a><br>选择一个英雄，然后点击 “获取Steam指南”：<br><ul><li>向下滚动，直到看到绿色按钮 “订阅”。</li><li>点击 Steam 页面上的 “订阅”。</li><li>如果你还没有登录，请登录 Steam。</li><li>只有在第一次时才需要登录。</li><li>点击 Steam 页面上的 “收藏”-这将使该指南出现在游戏中指南列表的顶部</li><li>单击 “竖起大拇指” 以使其他用户更容易看到该指南-可选，但不胜感激！</li><li>对所有你喜欢玩的英雄重复这个过程。</li><li>你必须重启Dota才能在游戏中看到你选择的向导！</li></ul><script>_buildCarousell ()</script>`, // #toBeUpdated
				br: `Criamos guias no jogo para cada herói do jogo. <br>
					Eles contêm todas as dicas e compilações de itens que são fornecidas no 'Dota Coach App'. </a><br>
					Assine-os <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>aqui</a>. <br>
					Selecione um herói e clique em 'Obter Guia Steam': <br>
					<ul>
						<li>Role para baixo até ver um botão verde 'Inscrever'. </li>
						<li>Clique em “Inscrever-se” na página do Steam. </li>
						<li>Se você ainda não está logado, faça login no Steam. </li>
						<li>O login só é necessário na primeira vez. </li>
						<li>Clique em “Favorito” na página do Steam - isso fará com que o guia apareça no topo da sua lista de guias no jogo Clique em</li> 
						<li>“Thumbs Up” para tornar o guia mais visível para outros usuários - opcional, mas encorajado! </li>
						<li>Repita o processo para todos os heróis que você gosta de jogar. </li>
						<li>Você precisa reiniciar o Dota para ver os guias selecionados no jogo! </li>
					</ul>
					<script>_buildCarousell()</script>`,
				es: `Hemos creado guías en el juego para todos los héroes del juego. <br>Contienen todos los consejos y construcciones de artículos que se proporcionan en la «Aplicación Dota Coach». </a><br>Suscríbete a ellos <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://dota-coach.github.io/dota_guides.html'>aquí</a>. <br>Selecciona un héroe y haz clic en «Obtener guía de Steam»: <br><ul><li>Desplázate hacia abajo hasta que veas un botón verde «Suscribirse». </li><li>Haz clic en Suscribirse en la página de Steam. </li><li>Si aún no has iniciado sesión, inicia sesión en Steam. </li><li>El inicio de sesión solo es necesario la primera vez. </li><li>Haz clic en «Favorito» en la página de Steam; esto hará que la guía aparezca en la parte superior de tu lista de guías en el juego</li>. <li>Haz clic en «Pulgar hacia arriba» para que la guía sea más visible para otros usuarios, ¡opcional, pero apreciada! </li><li>Repite el proceso para todos los héroes a los que te guste jugar. </li><li>¡Tienes que reiniciar Dota para ver las guías seleccionadas en el juego! </li></ul><script>_ Construir carrusel ()</script>`, // #toBeUpdated
			},
		},
		heroguidesMissing: {
			question: {
				en: "Why are the Hero Guides not shown?",
				de: "Warum werden die Hero Guides nicht angezeigt?", // #toBeUpdated
				fr: "Pourquoi les guides des héros ne s'affichent-ils pas ?", // #toBeUpdated
				ru: "Почему не отображаются руководства для героев?", // #toBeUpdated
				id: "Mengapa Hero Guides tidak ditampilkan?", // #toBeUpdated
				fil: "Bakit hindi ipinapakita ang mga Gabay sa Hero?", // #toBeUpdated
				zh: "为什么英雄指南没有显示？", // #toBeUpdated
				br: "Por que os Guias de Heróis não são mostrados?",
				es: "¿Por qué no se muestran las Hero Guides?", // #toBeUpdated
			},
			content: {
				en: `If you already subscribed to our Hero Guides and they do not show in-game, <br>
					make sure to restart Dota 2!<br>
					You can join a 'Demo Hero' lobby and check if the guides have been loaded properly.<br>
					It is important that you select them in-game in the shop interface after you subscribed to them.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow w-50" src="./images/faqs/heroguides.png">`,
				de: `Wenn du unsere Heldenführer bereits abonniert hast und sie nicht im Spiel angezeigt werden, <br>starte Dota 2 unbedingt neu! <br>Sie können einer „Demo Hero“ -Lobby beitreten und überprüfen, ob die Guides ordnungsgemäß geladen wurden. <br>Es ist wichtig, dass du sie im Spiel im Shop-Interface auswählst, nachdem du sie abonniert hast. <br><div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`, // #toBeUpdated
				fr: `Si vous êtes déjà abonné à nos guides de héros et qu'ils ne s'affichent pas dans le jeu, <br>assurez-vous de redémarrer Dota 2 ! <br>Vous pouvez rejoindre un lobby « Demo Hero » et vérifier si les guides ont été correctement chargés. <br>Il est important que vous les sélectionniez en jeu dans l'interface de la boutique après vous y être abonné. <br><div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`, // #toBeUpdated
				ru: `Если вы уже подписались на наши руководства по героям, но они не отображаются в игре, <br>обязательно перезапустите Dota 2! <br>Вы можете присоединиться к лобби «Demo Hero» и проверить, правильно ли загружены руководства. <br>Важно, чтобы вы выбрали их в игре в интерфейсе магазина после подписки на них. <br><div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`, // #toBeUpdated
				id: `Jika Anda sudah berlangganan Hero Guides kami dan mereka tidak menunjukkan dalam game,<br>pastikan untuk me-restart Dota 2! <br>Anda dapat bergabung dengan lobi 'Demo Hero' dan memeriksa apakah panduan telah dimuat dengan benar. <br>Adalah penting bahwa Anda memilih mereka dalam game di antarmuka toko setelah Anda berlangganan mereka. <br><div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`, // #toBeUpdated
				fil: `Kung naka-subscribe ka na sa aming Mga Gabay sa Bayani at hindi sila nagpapakita ng in-game,<br>siguraduhing i-restart ang Dota 2! <br>Maaari kang sumali sa lobby ng 'Demo Hero' at tingnan kung maayos ang mga gabay. <br>Mahalaga na piliin mo ang mga ito sa laro sa interface ng tindahan pagkatapos mong mag-subscribe sa kanila. <br><div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`, // #toBeUpdated
				zh: `如果你已经订阅了我们的英雄指南，但它们没有在游戏中显示，<br>请务必重启 Dota 2！<br>你可以加入 “Demo Hero” 大厅，检查指南是否已正确加载。<br>订阅它们后，请务必在商店界面中在游戏中选择它们。<br><div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`, // #toBeUpdated
				br: `Se você já se inscreveu em nossos Guias de Heróis e eles não aparecem no jogo, <br>
					certifique-se de reiniciar o Dota 2! <br>
					Você pode entrar em um lobby 'Demonstrar herói' e verificar se os guias foram carregados corretamente. <br>
					É importante que você os selecione no jogo na interface da loja depois de assiná-los. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`,
				es: `Si ya te has suscrito a nuestras Guías de héroes y no aparecen en el juego, ¡<br>asegúrate de reiniciar Dota 2! <br>Puedes unirte a un lobby de «Demo Hero» y comprobar si las guías se han cargado correctamente. <br>Es importante que los selecciones en el juego en la interfaz de la tienda después de suscribirte a ellos. <br><div class='mt-2'></div><img class='img-fluid rounded shadow w-50' src='./images/faqs/heroguides.png'>`, // #toBeUpdated
			},
		},
		heroguidesGood: {
			question: {
				en: "Are your Hero Guides good?",
				de: "Sind deine Hero Guides gut?", // #toBeUpdated
				fr: "Vos guides de héros sont-ils bons ?", // #toBeUpdated
				ru: "Хороши ли ваши гиды для героев?", // #toBeUpdated
				id: "Apakah Panduan Pahlawan Anda bagus?", // #toBeUpdated
				fil: "Maganda ba ang iyong mga Gabay sa Hero?", // #toBeUpdated
				zh: "你的英雄向导好吗？", // #toBeUpdated
				br: "Seus guias de heróis são bons?",
				es: "¿Son buenos tus Hero Guides?", // #toBeUpdated
			},
			content: {
				en: `All Hero Guides that we provide are created and maintained by professional Dota 2 coaches and players.<br>
					Their in-game ranks are bewteen Immortal Rank 1000 and Immortal Rank 100 (8000 - 10000 MMR).<br>
					You can look up their ranks on the offical Dota 2 <a class="link-danger" target="_blank" rel="noopener noreferrer" href="https://www.dota2.com/leaderboards/#europe-0">Leaderboards</a>.`,
				de: `Alle Heldenführer, die wir zur Verfügung stellen, werden von professionellen Dota 2-Trainern und -Spielern erstellt und gewartet. <br>Ihre Ränge im Spiel liegen zwischen Immortal Rang 1000 und Immortal Rang 100 (8000 - 10000 MMR). <br>Sie können ihre Ränge auf den offiziellen <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>Dota 2-Bestenlisten nachschlagen</a>.`, // #toBeUpdated
				fr: `Tous les guides des héros que nous fournissons sont créés et maintenus par des entraîneurs et des joueurs professionnels de Dota 2. <br>Leurs rangs dans le jeu se situent entre le rang immortel 1000 et le rang immortel 100 (8000 - 10000 MMR). <br>Vous pouvez consulter leurs rangs dans les <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>classements</a> officiels de Dota 2.`, // #toBeUpdated
				ru: `Все предоставляемые нами руководства по героям созданы и поддерживаются профессиональными тренерами и игроками Dota 2. <br>Их внутриигровые ранги находятся в диапазоне от 1000 до 100 ранга бессмертия (8000 - 10000 MMR). <br>Их рейтинги можно посмотреть в официальных <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>списках лидеров</a> Dota 2.`, // #toBeUpdated
				id: `Semua Panduan Pahlawan yang kami sediakan dibuat dan dikelola oleh pelatih dan pemain Dota 2 profesional. <br>Peringkat dalam game mereka adalah bewteen Immortal Rank 1000 dan Immortal Rank 100 (8000 - 10000 MMR). <br>Anda dapat mencari peringkat mereka di resmi Dota 2 <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>Leaderboards</a>.`, // #toBeUpdated
				fil: `Ang lahat ng mga Gabay sa Hero na aming ibinibigay ay nilikha at pinananatili ng mga propesyonal na Dota 2 coaches at mga manlalaro. Ang<br>kanilang mga in-game ranggo ay sa pagitan ng Immortal na Ranggo 1000 at Immortal na Ranggo 100 (8000 - 10000 MMR). <br>Maaari mong tingnan ang kanilang mga ranggo sa opisyal na Dota 2 <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>Leaderboards</a>.`, // #toBeUpdated
				zh: `我们提供的所有英雄指南都是由专业的Dota 2教练和玩家创建和维护的。<br>他们在游戏中的排名介于不朽等级 1000 和不朽等级 100（8000-10000 MMR）之间。<br>你可以在官方的Dota 2 <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>排行榜</a>上查看他们的排名。`, // #toBeUpdated
				br: `Todos os Guias de Heróis que fornecemos são criados e mantidos por treinadores e jogadores profissionais do Dota 2. <br>
					Suas classificações no jogo estão entre Immortal Rank 1000 e Immortal Rank 100 (8000 - 10000 MMR). <br>
					Você pode procurar suas classificações nas <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>tabelas de classificação</a> oficiais do Dota 2.`,
				es: `Todas las Hero Guides que proporcionamos son creadas y mantenidas por entrenadores y jugadores profesionales de Dota 2. <br>Sus rangos en el juego están entre el rango inmortal 1000 y el rango inmortal 100 (8000 - 10000 MMR). <br>Puedes buscar sus rangos en las <a class="link-danger" target="_blank" rel="noopener noreferrer" href='https://www.dota2.com/leaderboards/#europe-0'>tablas de clasificación</a> oficiales de Dota 2.`, // #toBeUpdated
			},
		},
		// Windows
		windowMissing: {
			question: {
				en: "Why are some windows missing?",
				de: "Warum fehlen einige Fenster? ", // #toBeUpdated
				fr: "Pourquoi certaines fenêtres manquent-elles ? ", // #toBeUpdated
				ru: "Почему некоторые окна отсутствуют? ", // #toBeUpdated
				id: "Mengapa beberapa jendela hilang? ", // #toBeUpdated
				fil: "Bakit nawawala ang ilang mga bintana? ", // #toBeUpdated
				zh: "为什么有些窗户不见了？ ", // #toBeUpdated
				br: "Por que algumas janelas estão faltando? ",
				es: "¿Por qué faltan algunas ventanas? ", // #toBeUpdated
			},
			content: {
				en: `There are multiple reasons why your timers are not shown.<br>
					If the Dota 2 game coordinator is not found, Dota Coach does not get any Data on the match which will result in no timers.<br>
					Another reason is the missing launchparameter '-gamestateintegration'. Make sure that it is added. Check our FAQ on how to add it.<br>
					Sometimes, the timers can go missing during repositon.<br>
					Simply hit the 'reset' button in the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`,
				de: "Es gibt mehrere Gründe, warum Ihre Timer nicht angezeigt werden. <br>Wenn der Dota 2-Spielkoordinator nicht gefunden wird, erhält Dota Coach keine Daten zum Spiel, was zu keinen Timern führt. <br>Ein weiterer Grund ist der fehlende Startparameter „-gamestate-Integration“. Stellen Sie sicher, dass es hinzugefügt wurde. In unseren FAQ erfahren Sie, wie Sie es hinzufügen können. <br>Manchmal können die Timer während der Ablage verloren gehen. <br>Drücke einfach den 'Reset'-Knopf im Einstellungsfenster. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				fr: "Il existe plusieurs raisons pour lesquelles vos minuteries ne s'affichent pas. <br>Si le coordinateur de jeu Dota 2 n'est pas trouvé, Dota Coach n'obtient aucune donnée sur le match qui n'entraînera aucun chronométrage. <br>Une autre raison est le paramètre de lancement manquant « -gamestateintegration ». Assurez-vous qu'il est ajouté. Consultez notre FAQ pour savoir comment l'ajouter. <br>Parfois, les minuteries peuvent disparaître pendant le dépôt. <br>Appuyez simplement sur le bouton « Réinitialiser » dans la fenêtre des paramètres. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				ru: "Таймеры не отображаются по нескольким причинам. <br>Если координатор игры в Dota 2 не найден, тренер по Dota не получает никаких данных о матче, что приведет к отсутствию таймеров. <br>Другой причиной является отсутствие параметра запуска «-gamestate integration». Убедитесь, что он добавлен. Ознакомьтесь с часто задаваемыми вопросами о том, как его добавить. <br>Иногда таймеры могут пропадать во время repositon. <br>Просто нажмите кнопку «reset» в окне настроек. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				id: "Ada beberapa alasan mengapa timer Anda tidak ditampilkan. <br>Jika koordinator permainan Dota 2 tidak ditemukan, Dota Coach tidak mendapatkan Data apa pun pada pertandingan yang akan menghasilkan tanpa timer. <br>Alasan lain adalah hilangparameter launchparameter '-gamestateintegration'. Pastikan bahwa itu ditambahkan. Periksa FAQ kami tentang cara menambahkannya. <br>Kadang-kadang, timer bisa hilang selama repositon. <br>Cukup tekan tombol 'reset' di jendela pengaturan. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				fil: "Mayroong maraming mga kadahilanan kung bakit ang iyong mga timers ay hindi ipinapakita. <br>Kung ang Dota 2 game coordinator ay hindi natagpuan, ang Dota Coach ay hindi makakakuha ng anumang Data sa tugma na magreresulta sa walang timers. <br>Ang isa pang dahilan ay ang nawawalang parameter ng paglunsad '-gamestateintegration'. Siguraduhin na ito ay idinagdag. Suriin ang aming FAQ kung paano idagdag ito. <br>Minsan, ang mga timers ay maaaring pumunta nawawala sa panahon ng repositon. <br>Pindutin lamang ang pindutan ng 'reset' sa window ng mga setting. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				zh: "计时器未显示的原因有很多。<br>如果找不到Dota 2游戏协调员，Dota Coach不会获得比赛的任何数据，这将导致没有计时器。<br>另一个原因是缺少启动参数 “-gamestateintegration”。确保它已添加。查看我们的常见问题解答以了解如何添加它。<br>有时，在重新定位期间，计时器可能会丢失。<br>只需在设置窗口中点击 “重置” 按钮即可。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>", // #toBeUpdated
				br: `Existem vários motivos pelos quais seus cronômetros não são exibidos. <br>
					Se o coordenador de jogo do Dota 2 não for encontrado, o Dota Coach não obterá nenhum dado sobre a partida, o que resultará em nenhum cronômetro. <br>
					Outro motivo é o parâmetro de lançamento ausente 'gamestateintegration'. Certifique-se de que ele seja adicionado. Consulte nossas perguntas frequentes sobre como adicioná-lo. <br>
					Às vezes, os cronômetros podem desaparecer durante o reposicionamento. <br>
					Basta clicar no botão 'redefinir' na janela de configurações. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>",
				es: "Hay varias razones por las que no se muestran los temporizadores. <br>Si no se encuentra el coordinador del juego de Dota 2, el entrenador de Dota no obtiene ningún dato sobre el partido, lo que no generará temporizadores. <br>Otra razón es que falta el parámetro de lanzamiento «gamestateintegration». Asegúrese de que se añade. Consulte nuestras preguntas frecuentes sobre cómo agregarlo. <br>A veces, los temporizadores pueden perderse durante el reposicionamiento. <br>Simplemente pulsa el botón «restablecer» en la ventana de configuración. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reset_position.png'>`, // #toBeUpdated
			},
		},
		windowShowHide: {
			question: {
				en: "How can I hide/show windows while playing?",
				de: "Wie kann ich beim Spielen Fenster ein-/ausblenden?", // #toBeUpdated
				fr: "Comment puis-je masquer/afficher les fenêtres pendant que je joue ?", // #toBeUpdated
				ru: "Как скрыть/показать окна во время игры?", // #toBeUpdated
				id: "Bagaimana saya bisa menyembunyikan/menampilkan jendela saat bermain?", // #toBeUpdated
				fil: "Paano ko itatago/ipakita ang mga bintana habang nagpe-play?", // #toBeUpdated
				zh: "如何在玩游戏时隐藏/显示窗口？", // #toBeUpdated
				br: "Como posso ocultar/mostrar janelas enquanto jogo?",
				es: "¿Cómo puedo ocultar/mostrar ventanas mientras juego?", // #toBeUpdated
			},
			content: {
				en: `To Hide/Show in-game windows while playing, press the asigned hotkey.<br>
					The standard hotkey is 'CTRL + b'.<br>
					If you want to change the hotkey, head to the overwolf app settings.<br>
					Check our FAQ under 'Hotkeys' if you are not sure where to find it.<br>`,
				de: `Um Spielfenster während des Spielens auszublenden/anzuzeigen, drücken Sie den zugewiesenen Hotkey. <br>Der Standardhotkey ist „STRG + b“. <br>Wenn Sie den Hotkey ändern möchten, rufen Sie die Einstellungen der Overwolf-App auf. <br>Schauen Sie in unseren FAQ unter „Hotkeys“ nach, wenn Sie nicht sicher sind, wo Sie sie finden können. <br>`, // #toBeUpdated
				fr: `Pour masquer/afficher les fenêtres du jeu pendant le jeu, appuyez sur la touche de raccourci assignée. <br>Le raccourci standard est « CTRL + b ». <br>Si vous souhaitez modifier le raccourci clavier, accédez aux paramètres de l'application Overwolf. <br>Consultez notre FAQ sous « Raccourcis clavier » si vous ne savez pas où la trouver. <br>`, // #toBeUpdated
				ru: `Чтобы скрыть/показать внутриигровые окна во время игры, нажмите назначенную горячую клавишу. <br>Стандартная горячая клавиша — «CTRL + b». <br>Если вы хотите изменить горячую клавишу, перейдите в настройки приложения overwolf. <br>Если вы не знаете, где их найти, ознакомьтесь с нашими часто задаваемыми вопросами в разделе «Горячие клавиши». <br>`, // #toBeUpdated
				id: `Untuk Sembunyikan/Tampilkan jendela dalam game saat bermain, tekan hotkey asigned. <br>Hotkey standar adalah 'CTRL + b'. <br>Jika Anda ingin mengubah hotkey, pergilah ke pengaturan aplikasi overwolf. <br>Periksa FAQ kami di bawah 'Hotkeys' jika Anda tidak yakin di mana menemukannya. <br>`, // #toBeUpdated
				fil: `Upang itago/Ipakita ang mga in-game window habang nagpe-play, pindutin ang itinalagang hotkey. <br>Ang karaniwang hotkey ay 'CTRL + b'. <br>Kung nais mong baguhin ang hotkey, magtungo sa mga setting ng overwolf app. <br>Tingnan ang aming FAQ sa ilalim ng 'Mga Hotkey' kung hindi ka sigurado kung saan makikita ito. <br>`, // #toBeUpdated
				zh: `要在玩游戏时隐藏/显示游戏内窗口，请按指定的热键。<br>标准的热键是'CTRL+b'。<br>如果你想更改热键，请前往overwolf应用程序设置。<br>如果您不确定在哪里可以找到它，请查看 “Hotkeys” 下的常见问题解答。<br>`, // #toBeUpdated
				br: `Para ocultar/mostrar janelas do jogo durante o jogo, pressione a tecla de atalho atribuída. <br>
					A tecla de atalho padrão é 'CTRL + b'. <br>
					Se você quiser alterar a tecla de atalho, vá para as configurações do aplicativo overwolf. <br>
					Verifique nossas perguntas frequentes em “Teclas de atalho” se não tiver certeza de onde encontrá-las. <br>`,
				es: `Para ocultar/mostrar ventanas del juego mientras juegas, presiona la tecla de acceso rápido asignada. <br>La tecla de acceso rápido estándar es «CTRL + b». <br>Si quieres cambiar la tecla de acceso rápido, dirígete a la configuración de la aplicación overwolf. <br>Consulte nuestras preguntas frecuentes en «Teclas de acceso rápido» si no está seguro de dónde encontrarlo. <br>`, // #toBeUpdated
			},
		},
		windowReposition: {
			question: {
				en: "How can I reposition windows?",
				de: "Wie kann ich Fenster neu positionieren?", // #toBeUpdated
				fr: "Comment repositionner les fenêtres ?", // #toBeUpdated
				ru: "Как переместить окна?", // #toBeUpdated
				id: "Bagaimana saya bisa memposisikan ulang jendela?", // #toBeUpdated
				fil: "Paano ko muling iposisyon ang mga bintana?", // #toBeUpdated
				zh: "我怎样才能重新定位窗口？", // #toBeUpdated
				br: "Como posso reposicionar janelas?",
				es: "¿Cómo puedo cambiar la posición de las ventanas?", // #toBeUpdated
			},
			content: {
				en: `Open the settings menu in the top right corner of the desktop window.<br>
					Activate the Reposition slider in the bottom right corner of the settings window.<br>
					De-activate the Reposition slider once you are done to safe your new positions. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reposition.png">`,
				de: `Öffnen Sie das Einstellungsmenü in der oberen rechten Ecke des Desktop-Fensters. <br>Aktivieren Sie den Schieberegler für die Neupositionierung in der unteren rechten Ecke des Einstellungsfensters. <br>Deaktivieren Sie den Schieberegler Neupositionierung, sobald Sie fertig sind, um Ihre neuen Positionen zu sichern. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				fr: `Ouvrez le menu des paramètres dans le coin supérieur droit de la fenêtre du bureau. <br>Activez le curseur Repositionnement dans le coin inférieur droit de la fenêtre des paramètres. <br>Désactivez le curseur de repositionnement une fois que vous avez terminé pour sécuriser vos nouvelles positions. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				ru: `Откройте меню настроек в правом верхнем углу окна рабочего стола. <br>Активируйте ползунок Перемещение в правом нижнем углу окна настроек. <br>Когда закончите, деактивируйте ползунок «Перемещение», чтобы сохранить новые позиции. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				id: `Buka menu pengaturan di sudut kanan atas jendela desktop. <br>Aktifkan slider Reposisi di sudut kanan bawah jendela pengaturan. <br>De-aktifkan slider Reposisi setelah Anda selesai untuk mengamankan posisi baru Anda. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				fil: `Buksan ang menu ng mga setting sa kanang sulok sa itaas ng window ng desktop. <br>Isaaktibo ang slider ng Reposition sa kanang sulok sa ibaba ng window ng mga setting. <br>I-de-activate ang slider ng Reposition kapag tapos ka na upang ligtas ang iyong mga bagong posisyon. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				zh: `打开桌面窗口右上角的设置菜单。<br>激活设置窗口右下角的 “重新定位” 滑块。<br>完成新仓位安全操作后，请停用重新定位滑块。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				br: `Abra o menu de configurações no canto superior direito da janela da área de trabalho. <br>
					Ative o controle deslizante Reposicionar no canto inferior direito da janela de configurações. <br>
					Desative o controle deslizante Reposicionar quando terminar para proteger suas novas posições. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`,
				es: `Abre el menú de configuración en la esquina superior derecha de la ventana del escritorio. <br>Active el control deslizante Reposición en la esquina inferior derecha de la ventana de configuración. <br>Desactive el control deslizante Reposición una vez que haya terminado de guardar sus nuevas posiciones. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
			},
		},
		windowGreen: {
			question: {
				en: "Why are all windows green?",
				de: "Warum sind alle Fenster grün?", // #toBeUpdated
				fr: "Pourquoi toutes les fenêtres sont-elles vertes ?", // #toBeUpdated
				ru: "Почему все окна зеленые?", // #toBeUpdated
				id: "Mengapa semua jendela hijau?", // #toBeUpdated
				fil: "Bakit ang lahat ng mga bintana ay berde?", // #toBeUpdated
				zh: "为什么所有的窗户都是绿色的？", // #toBeUpdated
				br: "Por que todas as janelas estão verdes?",
				es: "¿Por qué todas las ventanas son verdes?", // #toBeUpdated
			},
			content: {
				en: `Your windows turn green if the reposition slider in the settings menu is set to active.<br>
					Open the settings menu in the top right corner of the desktop window.<br>
					De-activate the Reposition slider in the bottom right corner of the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reposition.png">`,
				de: `Ihre Fenster werden grün, wenn der Schieberegler für die Neupositionierung im Einstellungsmenü auf aktiv gesetzt ist. <br>Öffnen Sie das Einstellungsmenü in der oberen rechten Ecke des Desktop-Fensters. <br>Deaktivieren Sie den Schieberegler für die Neupositionierung in der unteren rechten Ecke des Einstellungsfensters. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				fr: `Vos fenêtres deviennent vertes si le curseur de repositionnement du menu des paramètres est activé. <br>Ouvrez le menu des paramètres dans le coin supérieur droit de la fenêtre du bureau. <br>Désactivez le curseur de repositionnement dans le coin inférieur droit de la fenêtre des paramètres. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				ru: `Окна станут зелеными, если ползунок изменения положения в меню настроек установлен в активное положение. <br>Откройте меню настроек в правом верхнем углу окна рабочего стола. <br>Отключите ползунок «Перемещение» в правом нижнем углу окна настроек. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				id: `Jendela Anda berubah menjadi hijau jika slider reposisi di menu pengaturan diatur ke aktif. <br>Buka menu pengaturan di sudut kanan atas jendela desktop. <br>De-aktifkan slider Reposisi di sudut kanan bawah jendela pengaturan. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				fil: `Ang iyong mga bintana ay nagiging berde kung ang slider ng muling posisyon sa menu ng mga setting ay naka-set sa aktibo. <br>Buksan ang menu ng mga setting sa kanang sulok sa itaas ng window ng desktop. <br>I-de-activate ang slider ng Reposition sa kanang sulok sa ibaba ng window ng mga setting. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				zh: `如果设置菜单中的重新定位滑块设置为活动状态，则窗口将变为绿色。<br>打开桌面窗口右上角的设置菜单。<br>取消激活设置窗口右下角的 “重新定位” 滑块。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
				br: `Suas janelas ficarão verdes se o controle deslizante de reposição no menu de configurações estiver definido como ativo. <br>
					Abra o menu de configurações no canto superior direito da janela da área de trabalho. <br>
					Desative o controle deslizante Reposicionar no canto inferior direito da janela de configurações. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`,
				es: `Las ventanas se vuelven verdes si el control deslizante de cambio de posición en el menú de configuración está activado. <br>Abre el menú de configuración en la esquina superior derecha de la ventana del escritorio. <br>Desactive el control deslizante Reposición en la esquina inferior derecha de la ventana de configuración. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/reposition.png'>`, // #toBeUpdated
			},
		},
		windowPickBan: {
			question: {
				en: "How can I see pick/ban suggestions?",
				de: "Wie kann ich Auswahl-/Ban-Vorschläge sehen?", // #toBeUpdated
				fr: "Comment puis-je consulter les suggestions de prélèvement et de bannissement ?", // #toBeUpdated
				ru: "Как посмотреть предложения по выбору или бану?", // #toBeUpdated
				id: "Bagaimana saya bisa melihat saran pick/ban?", // #toBeUpdated
				fil: "Paano ako makakakita ng mga suhestiyon sa pick/ban?", // #toBeUpdated
				zh: "我怎样才能看到选择/禁止建议？", // #toBeUpdated
				br: "Como posso ver sugestões de escolha/banimento?",
				es: "¿Cómo puedo ver las sugerencias de selección/prohibición?", // #toBeUpdated
			},
			content: {
				en: `Once you enter a game and the draft begins, a Dota Coach logo will appear in the top left corner.<br>
					Click it to show or hide the draft information. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/buttondraft.png">`,
				de: `Sobald Sie ein Spiel betreten und der Entwurf beginnt, wird in der oberen linken Ecke ein Dota Coach-Logo angezeigt. <br>Klicken Sie darauf, um die Entwurfsinformationen ein- oder auszublenden. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`, // #toBeUpdated
				fr: `Une fois que vous entrez dans une partie et que le draft commence, un logo Dota Coach apparaîtra dans le coin supérieur gauche. <br>Cliquez dessus pour afficher ou masquer les informations du brouillon. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`, // #toBeUpdated
				ru: `Как только вы войдете в игру и начнёте драфт, в левом верхнем углу появится логотип Dota Coach. <br>Нажмите на нее, чтобы показать или скрыть информацию о черновике. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`, // #toBeUpdated
				id: `Setelah Anda memasukkan permainan dan draft dimulai, logo Dota Coach akan muncul di pojok kiri atas. <br>Klik untuk menampilkan atau menyembunyikan draf informasi. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`, // #toBeUpdated
				fil: `Sa sandaling magpasok ka ng isang laro at nagsisimula ang draft, isang logo ng Dota Coach ang lalabas sa itaas na kaliwang sulok. <br>I-click ito upang ipakita o itago ang impormasyon ng draft. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`, // #toBeUpdated
				zh: `进入游戏并开始选秀后，左上角将出现Dota Coach徽标。<br>单击它可显示或隐藏草稿信息。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`, // #toBeUpdated
				br: `Depois de entrar em um jogo e o rascunho começar, um logotipo do Dota Coach aparecerá no canto superior esquerdo. <br>
					Clique nele para mostrar ou ocultar as informações do rascunho. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`,
				es: `Cuando entres en un juego y comience el draft, aparecerá un logotipo de Dota Coach en la esquina superior izquierda. <br>Haga clic en él para mostrar u ocultar la información del borrador. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/buttondraft.png'>`, // #toBeUpdated
			},
		},
		windowRole: {
			question: {
				en: "How can I open the Role selection?",
				de: "Wie kann ich die Rollenauswahl öffnen?", // #toBeUpdated
				fr: "Comment puis-je ouvrir la sélection des rôles ?", // #toBeUpdated
				ru: "Как открыть подбор ролей?", // #toBeUpdated
				id: "Bagaimana cara membuka pemilihan Peran?", // #toBeUpdated
				fil: "Paano ko mabubuksan ang pagpili ng Tungkulin?", // #toBeUpdated
				zh: "如何打开角色选择？", // #toBeUpdated
				br: "Como posso abrir a seleção de função?",
				es: "¿Cómo puedo abrir la selección de roles?", // #toBeUpdated
			},
			content: {
				en: `Once you enter a game, a Dota Coach logo will appear above the minimap.<br>
					Click it to show or hide the role selection and laning information. <br>`,
				de: `Sobald Sie ein Spiel betreten, wird ein Dota Coach-Logo über der Minikarte angezeigt. <br>Klicken Sie darauf, um die Rollenauswahl und die Spurinformationen ein- oder auszublenden. <br>`, // #toBeUpdated
				fr: `Une fois que vous entrez dans une partie, un logo Dota Coach apparaîtra au-dessus de la minicarte. <br>Cliquez dessus pour afficher ou masquer la sélection du rôle et les informations de destination. <br>`, // #toBeUpdated
				ru: `Как только вы войдете в игру, над мини-картой появится логотип Dota Coach. <br>Нажмите на нее, чтобы показать или скрыть информацию о выборе роли и лендинге. <br>`, // #toBeUpdated
				id: `Setelah Anda memasukkan game, logo Dota Coach akan muncul di atas minimap. <br>Klik untuk menampilkan atau menyembunyikan pemilihan peran dan informasi laning. <br>`, // #toBeUpdated
				fil: `Sa sandaling magpasok ka ng isang laro, isang logo ng Dota Coach ay lilitaw sa itaas ng minimap. <br>I-click ito upang ipakita o itago ang pagpili ng tungkulin at impormasyon sa pag-laning. <br>`, // #toBeUpdated
				zh: `进入游戏后，小地图上方会出现一个Dota Coach徽标。<br>单击它可显示或隐藏角色选择和对线信息。<br>`, // #toBeUpdated
				br: `Depois de entrar em um jogo, um logotipo do Dota Coach aparecerá acima do minimapa. <br>
					Clique nele para mostrar ou ocultar a seleção de função e as informações de rota. <br>`,
				es: `Cuando entres en un juego, aparecerá un logotipo de Dota Coach sobre el minimapa. <br>Haga clic en él para mostrar u ocultar la información de selección de roles y carriles. <br>`, // #toBeUpdated
			},
		},
		windowDisable: {
			question: {
				en: "How can I disable windows I do not like?",
				de: "Wie kann ich Windows deaktivieren, die ich nicht mag?", // #toBeUpdated
				fr: "Comment désactiver les fenêtres que je n'aime pas ?", // #toBeUpdated
				ru: "Как отключить окна, которые мне не нравятся?", // #toBeUpdated
				id: "Bagaimana saya bisa menonaktifkan jendela yang tidak saya sukai?", // #toBeUpdated
				fil: "Paano ko i-disable ang mga bintana na hindi ko gusto?", // #toBeUpdated
				zh: "我怎样才能禁用我不喜欢的窗口？", // #toBeUpdated
				br: "Como posso desativar as janelas que não gosto?",
				es: "¿Cómo puedo deshabilitar las ventanas que no me gustan?", // #toBeUpdated
			},
			content: {
				en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can disable the following window components:
					<ul>
						<li>Infoboxes</li>
						<li>All individual timers (Own and enemy team)</li>
						<li>Rune Countdowns</li>
						<li>Performance Tracker</li>
						<li>Subtitle Window</li>
					</ul>`,
				de: `Öffnen Sie die Einstellungen in der oberen rechten Ecke des Desktop-Fensters und wählen Sie „Einstellungen ändern“. <br>Du kannst die folgenden Fensterkomponenten deaktivieren: <ul><li>Infoboxen</li> <li>Alle einzelnen Timer (eigenes und gegnerisches Team) <li>Runen-Countdowns</li></li> <li><li>Performance-Tracker-Untertitelfenster</li></li></ul>`, // #toBeUpdated
				fr: `Ouvrez les paramètres dans le coin supérieur droit de la fenêtre du bureau et sélectionnez « Modifier les paramètres ». <br>Vous pouvez désactiver les composants suivants de la fenêtre : <ul><li>Boîtes d'informations</li> <li>Tous les minuteurs individuels (équipe propre et équipe ennemie)</li> <li>Compte à rebours des runes</li> <li>Fenêtre de sous-titres</li> <li>Suivi des performances</li></ul>`, // #toBeUpdated
				ru: `Откройте настройки в правом верхнем углу окна рабочего стола и выберите «изменить настройки». <br>Вы можете отключить следующие компоненты окна: <ul><li>Инфобоксы</li> <li>Все индивидуальные таймеры (собственные и вражеская команда)</li> <li>Обратный отсчет рун</li> <li>Окно <li>отслеживания производительности Отслеживание</li> субтитров</li></ul>`, // #toBeUpdated
				id: `Buka pengaturan di sudut kanan atas jendela desktop dan pilih 'perubahan pengaturan'. <br>Anda dapat menonaktifkan komponen jendela berikut:<ul><li>Infoboxes</li><li>Semua timer individu (Sendiri dan tim musuh)</li><li>Rune Countdown</li><li>Kinerja Tracker</li><li>Subtitle Window</li></ul>`, // #toBeUpdated
				fil: `Buksan ang mga setting sa kanang itaas na sulok ng window ng desktop at piliin ang 'baguhin ang mga setting. ' <br>Maaari mong hindi paganahin ang mga sumusunod na bahagi ng window:<ul><li>Infoboxes Lahat ng mga</li><li>indibidwal na timers (Sariling at kaaway koponan)</li><li>Rune Countdowns</li><li>Pagganap Tagasubaybay</li><li>Subtitle Window</li></ul>`, // #toBeUpdated
				zh: `打开桌面窗口右上角的设置，然后选择 “更改设置”。<br>你可以禁用以下窗口组件：<ul><li>信息框</li><li>所有个人计时器（自己和敌方队伍）</li><li>符文倒计</li>时<li>性能追踪器</li><li>字幕窗口</li></ul>`, // #toBeUpdated
				br: `Abra as configurações no canto superior direito da janela da área de trabalho e selecione 'alterar configurações'. <br>
					Você pode desativar os seguintes componentes da janela: 
					<ul>
						<li>Infoboxes</li> 
						<li>Todos os cronômetros individuais (equipe própria e inimiga)</li> 
						<li>Contagens regressivas de runas</li>
						<li>Rastreador de desempenho</li> 
						<li>Janela de legenda</li>
					</ul>`,
				es: `Abra la configuración en la esquina superior derecha de la ventana del escritorio y seleccione «cambiar configuración». <br>Puede desactivar los siguientes componentes de la ventana: <ul><li>Cuadros de información</li> <li>Todos los temporizadores individuales (equipo propio y enemigo)</li> <li>Cuenta regresiva de runas</li> <li>Rastreador de rendimiento</li> <li>Ventana de subtítulos</li></ul>`, // #toBeUpdated
			},
		},
		windowSecond: {
			question: {
				en: "How do I enable the second desktop window?",
				de: "Wie kann ich Windows deaktivieren, die ich nicht mag?", // #toBeUpdated
				fr: "Comment désactiver les fenêtres que je n'aime pas ?", // #toBeUpdated
				ru: "Как отключить окна, которые мне не нравятся?", // #toBeUpdated
				id: "Bagaimana saya bisa menonaktifkan jendela yang tidak saya sukai?", // #toBeUpdated
				fil: "Paano ko i-disable ang mga bintana na hindi ko gusto?", // #toBeUpdated
				zh: "我怎样才能禁用我不喜欢的窗口？", // #toBeUpdated
				br: "Como posso desativar as janelas que não gosto?",
				es: "¿Cómo puedo deshabilitar las ventanas que no me gustan?", // #toBeUpdated
			},
			content: {
				en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					Select your second or main monitor to enable the window. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/secondscreen.png">`,
				de: `Öffnen Sie die Einstellungen in der oberen rechten Ecke des Desktop-Fensters und wählen Sie „Einstellungen ändern“. <br>Wählen Sie Ihren zweiten oder Hauptmonitor aus, um das Fenster zu aktivieren. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`, // #toBeUpdated
				fr: `Ouvrez les paramètres dans le coin supérieur droit de la fenêtre du bureau et sélectionnez « Modifier les paramètres ». <br>Sélectionnez votre deuxième moniteur ou moniteur principal pour activer la fenêtre. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`, // #toBeUpdated
				ru: `Откройте настройки в правом верхнем углу окна рабочего стола и выберите «изменить настройки». <br>Выберите второй или главный монитор, чтобы включить окно. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`, // #toBeUpdated
				id: `Buka pengaturan di sudut kanan atas jendela desktop dan pilih 'perubahan pengaturan'. <br>Pilih monitor kedua atau utama Anda untuk mengaktifkan jendela. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`, // #toBeUpdated
				fil: `Buksan ang mga setting sa kanang itaas na sulok ng window ng desktop at piliin ang 'baguhin ang mga setting. ' <br>Piliin ang iyong pangalawang o pangunahing monitor upang paganahin ang window. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`, // #toBeUpdated
				zh: `打开桌面窗口右上角的设置，然后选择 “更改设置”。<br>选择第二台或主显示器以启用该窗口。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`, // #toBeUpdated
				br: `Abra as configurações no canto superior direito da janela da área de trabalho e selecione 'alterar configurações'. <br>
					Selecione seu segundo monitor ou principal para ativar a janela. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`,
				es: `Abra la configuración en la esquina superior derecha de la ventana del escritorio y seleccione «cambiar configuración». <br>Seleccione su segundo monitor o monitor principal para habilitar la ventana. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/secondscreen.png'>`, // #toBeUpdated
			},
		},
		// Audio
		audioDisable: {
			question: {
				en: "How do I disable audio messages?",
				de: "Wie deaktiviere ich Audionachrichten?", // #toBeUpdated
				fr: "Comment désactiver les messages audio ?", // #toBeUpdated
				ru: "Как отключить звуковые сообщения?", // #toBeUpdated
				id: "Bagaimana cara menonaktifkan pesan audio?", // #toBeUpdated
				fil: "Paano ko i-disable ang mga audio message?", // #toBeUpdated
				zh: "如何禁用语音留言？", // #toBeUpdated
				br: "Como desativo as mensagens de áudio?",
				es: "¿Cómo desactivo los mensajes de audio?", // #toBeUpdated
			},
			content: {
				en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can disable the following voice components individually:
					<ul>
						<li>Notifcations</li>
						<li>Voice coaching own hero</li>
						<li>Voice coaching enemy heroes</li>
					</ul>`,
				de: `Öffnen Sie die Einstellungen in der oberen rechten Ecke des Desktop-Fensters und wählen Sie „Einstellungen ändern“. <br>Du kannst die folgenden Sprachkomponenten einzeln deaktivieren: <ul><li>Benachrichtigungen</li> <li>Sprachcoaching eigener Held</li> <li>Sprachcoaching gegnerische Helden</li></ul>`, // #toBeUpdated
				fr: `Ouvrez les paramètres dans le coin supérieur droit de la fenêtre du bureau et sélectionnez « Modifier les paramètres ». <br>Vous pouvez désactiver les composants vocaux suivants individuellement : <ul><li>Notifications</li> <li>Coaching vocal propre héros</li> <li>Coaching vocal héros héros ennemis</li></ul>`, // #toBeUpdated
				ru: `Откройте настройки в правом верхнем углу окна рабочего стола и выберите «изменить настройки». <br>Вы можете отключить следующие голосовые компоненты по отдельности: <ul><li>Уведомления</li> <li>Голосовой коучинг собственного героя</li> <li>Тренировка голоса вражеских героев</li></ul>`, // #toBeUpdated
				id: `Buka pengaturan di sudut kanan atas jendela desktop dan pilih 'perubahan pengaturan'. <br>Anda dapat menonaktifkan komponen suara berikut secara individual:<ul><li>Pemberitahuan</li><li>Pelatih suara pahlawan sendiri Pahlawan</li><li>musuh pelatih suara</li></ul>`, // #toBeUpdated
				fil: `Buksan ang mga setting sa kanang itaas na sulok ng window ng desktop at piliin ang 'baguhin ang mga setting. ' <br>Maaari mong hindi paganahin ang mga sumusunod na bahagi ng boses nang paisa-isa:<ul><li>Mga</li>Abiso<li>Voice coaching sariling bayani</li><li>Voice coaching kaaway bayani</li></ul>`, // #toBeUpdated
				zh: `打开桌面窗口右上角的设置，然后选择 “更改设置”。<br>你可以单独禁用以下语音组件：<ul><li>Notifcations 语</li><li>音教练自己的英雄</li><li>语音教练敌方英雄</li></ul>`, // #toBeUpdated
				br: `Abra as configurações no canto superior direito da janela da área de trabalho e selecione 'alterar configurações'. <br>
					Você pode desativar os seguintes componentes de voz individualmente: 
					<ul>
						<li>Notificações</li> 
						<li>Treinamento de voz próprio herói</li> 
						<li>Treinamento de voz heróis inimigos</li>
					</ul>`,
				es: `Abra la configuración en la esquina superior derecha de la ventana del escritorio y seleccione «cambiar configuración». <br>Puedes desactivar los siguientes componentes de voz individualmente: <ul><li>Notifcaciones</li> <li>Coaching de voz propio héroe</li> <li>Entrenamiento de voz héroes enemigos</li></ul>`, // #toBeUpdated
			},
		},
		audioVolume: {
			question: {
				en: "How can I adjust the sound volume?",
				de: "Wie kann ich die Lautstärke einstellen?", // #toBeUpdated
				fr: "Comment régler le volume sonore ?", // #toBeUpdated
				ru: "Как настроить громкость звука?", // #toBeUpdated
				id: "Bagaimana saya bisa menyesuaikan volume suara?", // #toBeUpdated
				fil: "Paano ko maayos ang dami ng tunog?", // #toBeUpdated
				zh: "如何调整音量？", // #toBeUpdated
				br: "Como posso ajustar o volume do som?",
				es: "¿Cómo puedo ajustar el volumen del sonido?", // #toBeUpdated
			},
			content: {
				en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the volume adjustment control in the top right corner of the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/audio.png">`,
				de: `Öffnen Sie die Einstellungen in der oberen rechten Ecke des Desktop-Fensters und wählen Sie „Einstellungen ändern“. <br>Sie finden den Lautstärkeregler in der oberen rechten Ecke des Einstellungsfensters. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				fr: `Ouvrez les paramètres dans le coin supérieur droit de la fenêtre du bureau et sélectionnez « Modifier les paramètres ». La <br>commande de réglage du volume se trouve dans le coin supérieur droit de la fenêtre des paramètres. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				ru: `Откройте настройки в правом верхнем углу окна рабочего стола и выберите «изменить настройки». <br>Регулятор громкости находится в правом верхнем углу окна настроек. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				id: `Buka pengaturan di sudut kanan atas jendela desktop dan pilih 'perubahan pengaturan'. <br>Anda dapat menemukan kontrol penyesuaian volume di sudut kanan atas jendela pengaturan. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				fil: `Buksan ang mga setting sa kanang itaas na sulok ng window ng desktop at piliin ang 'baguhin ang mga setting. ' <br>Maaari mong mahanap ang kontrol ng pagsasaayos ng lakas ng tunog sa kanang sulok sa itaas ng window ng mga setting. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				zh: `打开桌面窗口右上角的设置，然后选择 “更改设置”。<br>您可以在设置窗口的右上角找到音量调节控件。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				br: `Abra as configurações no canto superior direito da janela da área de trabalho e selecione 'alterar configurações'. <br>
					Você pode encontrar o controle de ajuste de volume no canto superior direito da janela de configurações. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`,
				es: `Abra la configuración en la esquina superior derecha de la ventana del escritorio y seleccione «cambiar configuración». <br>Puedes encontrar el control de ajuste de volumen en la esquina superior derecha de la ventana de ajustes. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
			},
		},
		audioMissing: {
			question: {
				en: "The audio is not playing, how can I enable it?",
				de: "Das Audio wird nicht abgespielt, wie kann ich es aktivieren?", // #toBeUpdated
				fr: "L'audio n'est pas en cours de lecture, comment puis-je l'activer ?", // #toBeUpdated
				ru: "Звук не воспроизводится, как его включить?", // #toBeUpdated
				id: "Audio tidak diputar, bagaimana saya bisa mengaktifkannya?", // #toBeUpdated
				fil: "Ang audio ay hindi nagpe-play, paano ko ito paganahin?", // #toBeUpdated
				zh: "音频没有播放，我该如何启用它？", // #toBeUpdated
				br: "O áudio não está sendo reproduzido, como posso ativá-lo?",
				es: "El audio no se reproduce, ¿cómo puedo activarlo?", // #toBeUpdated
			},
			content: {
				en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the sound output control in the top right corner of the settings window.<br>
					Make sure to select the proper speaker (audio-output) and that the volume is not zero percent.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/audio.png">`,
				de: `Öffnen Sie die Einstellungen in der oberen rechten Ecke des Desktop-Fensters und wählen Sie „Einstellungen ändern“. <br>Sie finden die Soundausgabesteuerung in der oberen rechten Ecke des Einstellungsfensters. <br>Stellen Sie sicher, dass Sie den richtigen Lautsprecher (Audio-Ausgang) wählen und dass die Lautstärke nicht Null Prozent beträgt. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				fr: `Ouvrez les paramètres dans le coin supérieur droit de la fenêtre du bureau et sélectionnez « Modifier les paramètres ». <br>Vous pouvez trouver le contrôle de sortie audio dans le coin supérieur droit de la fenêtre des paramètres. <br>Assurez-vous de sélectionner le bon haut-parleur (sortie audio) et que le volume n'est pas égal à zéro pour cent. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				ru: `Откройте настройки в правом верхнем углу окна рабочего стола и выберите «изменить настройки». <br>Вы можете найти регулятор вывода звука в правом верхнем углу окна настроек. <br>Убедитесь, что выбран правильный динамик (аудиовыход) и громкость не равна нулю процентов. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				id: `Buka pengaturan di sudut kanan atas jendela desktop dan pilih 'perubahan pengaturan'. <br>Anda dapat menemukan kontrol output suara di sudut kanan atas jendela pengaturan. <br>Pastikan untuk memilih speaker yang tepat (audio-output) dan bahwa volume tidak nol persen. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				fil: `Buksan ang mga setting sa kanang itaas na sulok ng window ng desktop at piliin ang 'baguhin ang mga setting. ' <br>Maaari mong mahanap ang kontrol ng tunog output sa kanang sulok sa itaas ng window ng mga setting. <br>Tiyaking piliin ang tamang speaker (audio-output) at ang lakas ng tunog ay hindi zero porsiyento. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				zh: `打开桌面窗口右上角的设置，然后选择 “更改设置”。<br>您可以在设置窗口的右上角找到声音输出控件。<br>确保选择正确的扬声器（音频输出），并且音量不为零。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
				br: `Abra as configurações no canto superior direito da janela da área de trabalho e selecione 'alterar configurações'. <br>
					Você pode encontrar o controle de saída de som no canto superior direito da janela de configurações. <br>
					Certifique-se de selecionar o alto-falante adequado (saída de áudio) e se o volume não é zero por cento. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`,
				es: `Abra la configuración en la esquina superior derecha de la ventana del escritorio y seleccione «cambiar configuración». <br>Puede encontrar el control de salida de sonido en la esquina superior derecha de la ventana de configuración. <br>Asegúrese de seleccionar el altavoz adecuado (salida de audio) y de que el volumen no sea cero por ciento. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/audio.png'>`, // #toBeUpdated
			},
		},
		// Hotkeys
		hotkeyMissclick: {
			question: {
				en: "How can I enable the miss-click protection?",
				de: "Wie kann ich den Fehlklickschutz aktivieren?", // #toBeUpdated
				fr: "Comment puis-je activer la protection contre les clics manquées ?", // #toBeUpdated
				ru: "Как включить защиту от промахов?", // #toBeUpdated
				id: "Bagaimana cara mengaktifkan perlindungan miss-click?", // #toBeUpdated
				fil: "Paano ko paganahin ang proteksyon sa miss-click?", // #toBeUpdated
				zh: "如何启用未命中点击保护？", // #toBeUpdated
				br: "Como posso ativar a proteção contra cliques errados?",
				es: "¿Cómo puedo activar la protección contra errores de clic?", // #toBeUpdated
			},
			content: {
				en: `To avoid miss-clicks on in-game windows, you can enable a miss-click protection modifer.<br>
					This will make windows only interactive if the modifier pressed while mouse-clicking.<br>
					We support 'alt', 'ctrl' and 'shift'.<br>
					Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the 'Mouse Click Modifier' Key in the top right corner of the settings window.<br>
					Please note that if you select 'shift' or 'ctrl' as modifier, announcing timers in chat will no longer work.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/mouseclickmod.png">`,
				de: `Um Fehlklicks in Spielfenstern zu vermeiden, können Sie einen Modifikator für den Schutz vor Fehlklicks aktivieren. <br>Dadurch werden Fenster nur dann interaktiv, wenn der Modifikator beim Klicken mit der Maus gedrückt wird. <br>Wir unterstützen „Alt“, „Strg“ und „Umschalt“. <br>Öffnen Sie die Einstellungen in der oberen rechten Ecke des Desktop-Fensters und wählen Sie „Einstellungen ändern“. <br>Sie finden die Taste „Mausklick-Modifikator“ in der oberen rechten Ecke des Einstellungsfensters. <br>Bitte beachten Sie, dass die Ankündigung von Timern im Chat nicht mehr funktioniert, wenn Sie „Umschalt“ oder „Strg“ als Modifikator auswählen. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`, // #toBeUpdated
				fr: `Pour éviter les clics manquants dans les fenêtres du jeu, vous pouvez activer un modificateur de protection contre les clics manqués. <br>Cela rendra les fenêtres interactives uniquement si le modificateur est enfoncé en cliquant sur la souris. <br>Nous prenons en charge « alt », « ctrl » et « shift ». <br>Ouvrez les paramètres dans le coin supérieur droit de la fenêtre du bureau et sélectionnez « Modifier les paramètres ». <br>Vous pouvez trouver la touche « Modificateur de clic de souris » dans le coin supérieur droit de la fenêtre des paramètres. <br>Veuillez noter que si vous sélectionnez « shift » ou « ctrl » comme modificateur, les minuteries annoncées dans le chat ne fonctionneront plus. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`, // #toBeUpdated
				ru: `Чтобы избежать промахов во внутриигровых окнах, вы можете включить модификатор защиты от промахов. <br>Окна станут интерактивными только в том случае, если модификатор нажат во время щелчка мышью. <br>Мы поддерживаем «alt», «ctrl» и «shift». <br>Откройте настройки в правом верхнем углу окна рабочего стола и выберите «изменить настройки». <br>Клавиша «Модификатор щелчка мышью» находится в правом верхнем углу окна настроек. <br>Обратите внимание, что если вы выберете «shift» или «ctrl» в качестве модификатора, таймеры объявления в чате больше не будут работать. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`, // #toBeUpdated
				id: `Untuk menghindari miss-klik pada jendela dalam game, Anda dapat mengaktifkan pengubah perlindungan miss-click. <br>Ini akan membuat jendela hanya interaktif jika pengubah ditekan saat mengklik mouse. <br>Kami mendukung 'alt', 'ctrl' dan 'shift'. <br>Buka pengaturan di sudut kanan atas jendela desktop dan pilih 'perubahan pengaturan'. <br>Anda dapat menemukan 'Mouse Click Modifier' Key di sudut kanan atas jendela pengaturan. <br>Harap dicatat bahwa jika Anda memilih 'shift' atau 'ctrl' sebagai pengubah, mengumumkan timer dalam obrolan tidak akan berfungsi lagi. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`, // #toBeUpdated
				fil: `Upang maiwasan ang mga miss-click sa mga in-game window, maaari mong paganahin ang isang modier ng proteksyon sa miss-click. <br>Gagawing interactive lamang ang mga bintana kung pinindot ng modifier habang pinindot ang mouse. <br>Sinusuportahan namin ang 'alt', 'ctrl' at 'shift'. <br>Buksan ang mga setting sa kanang itaas na sulok ng window ng desktop at piliin ang 'baguhin ang mga setting. ' <br>Makikita mo ang “Mouse Click Mouse Modifier' na Key sa kanang sulok sa itaas ng window ng mga setting. <br>Mangyaring tandaan na kung pipiliin mo ang 'shift' o 'ctrl' bilang modifier, ang pagpapahayag ng mga timers sa chat ay hindi na gagana. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`, // #toBeUpdated
				zh: `为避免在游戏窗口中错过点击，您可以启用未命中点击保护修改器。<br>这将使窗口只有在鼠标单击时按下修改器时才具有交互性。<br>我们支持 “alt”、“ctrl” 和 “shift”。<br>打开桌面窗口右上角的设置，然后选择 “更改设置”。<br>您可以在设置窗口的右上角找到 “鼠标单击修改器” 键。<br>请注意，如果您选择 “shift” 或 “ctrl” 作为修饰 符，则在聊天中宣布计时器将不再起作用。<br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`, // #toBeUpdated
				br: `Para evitar cliques errados nas janelas do jogo, você pode ativar um modificador de proteção contra cliques errados. <br>
					Isso tornará as janelas apenas interativas se o modificador for pressionado ao clicar com o mouse. <br>
					Nós suportamos 'alt', 'ctrl' e 'shift'. <br>
					Abra as configurações no canto superior direito da janela da área de trabalho e selecione 'alterar configurações'. <br>Você pode encontrar a tecla 'Modificador de clique do mouse' no canto superior direito da janela de configurações. <br>Observe que se você selecionar 'shift' ou 'ctrl' como modificador, anunciar cronômetros no chat não funcionará mais. <br>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`,
				es: `Para evitar clics incorrectos en las ventanas del juego, puedes habilitar un modificador de protección con errores de clic. <br>Esto hará que las ventanas solo sean interactivas si el modificador se presiona al hacer clic con el ratón. <br>Admitimos «alt», «ctrl» y «shift». <br>Abra la configuración en la esquina superior derecha de la ventana del escritorio y seleccione «cambiar configuración». <br>Puede encontrar la tecla «Modificador de clic del mouse» en la esquina superior derecha de la ventana de configuración. <br>Ten en cuenta que si seleccionas «shift» o «ctrl» como modificador, el anuncio de temporizadores en el chat ya no funcionará. <br><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/mouseclickmod.png'>`, // #toBeUpdated
			},
		},
		hotkeyModifier: {
			question: {
				en: "What is the modifier key?",
				de: "Was ist der Zusatztaste?", // #toBeUpdated
				fr: "Qu'est-ce que la touche de modification ?", // #toBeUpdated
				ru: "Что такое клавиша-модификатор?", // #toBeUpdated
				id: "Apa kunci pengubah?", // #toBeUpdated
				fil: "Ano ang key ng modifier?", // #toBeUpdated
				zh: "什么是修饰键？", // #toBeUpdated
				br: "O que é a tecla modificadora?",
				es: "¿Qué es la tecla modificadora?", // #toBeUpdated
			},
			content: {
				en: `The modifier key was introduced to avoid miss-clicks on window elements. <br>
					If you have encounter problems with miss-clicks on windows, make sure to enable the modifier key.`,
				de: `Der Modifikatorschlüssel wurde eingeführt, um Fehlklicks auf Fensterelemente zu vermeiden. <br>Wenn Sie Probleme mit Fehlklicks in Windows haben, achten Sie darauf, die Modifikatortaste zu aktivieren.`, // #toBeUpdated
				fr: `La touche de modification a été introduite pour éviter les clics manquants sur les éléments de la fenêtre. <br>Si vous rencontrez des problèmes de clics sur Windows, assurez-vous d'activer la touche de modification.`, // #toBeUpdated
				ru: `Клавиша-модификатор была введена, чтобы избежать промахов по элементам окна. <br>Если у вас возникли проблемы с пропусками кликов в окнах, обязательно включите клавишу-модификатор.`, // #toBeUpdated
				id: `Kunci pengubah diperkenalkan untuk menghindari miss-click pada elemen jendela. <br>Jika Anda mengalami masalah dengan miss-click pada windows, pastikan untuk mengaktifkan tombol modifier.`, // #toBeUpdated
				fil: `Ang key ng modifier ay ipinakilala upang maiwasan ang mga miss-click sa mga elemento ng window. <br>Kung mayroon kang mga problema sa mga miss-click sa mga bintana, siguraduhing paganahin ang key ng modifier.`, // #toBeUpdated
				zh: `引入修饰键是为了避免错误点击窗口元素。<br>如果你在窗口上遇到误击的问题，请务必启用修饰键。`, // #toBeUpdated
				br: `A tecla modificadora foi introduzida para evitar erros de cliques nos elementos da janela. <br>
					Se você tiver problemas com cliques errados nas janelas, certifique-se de habilitar a tecla modificadora.`,
				es: `La tecla modificadora se introdujo para evitar clics incorrectos en los elementos de la ventana. <br>Si tiene problemas con los clics incorrectos en las ventanas, asegúrese de habilitar la tecla modificadora.`, // #toBeUpdated
			},
		},
		hotkeyChange: {
			question: {
				en: "Where can I change the hotkeys? ",
				de: "Wo kann ich die Hotkeys ändern? ", // #toBeUpdated
				fr: "Où puis-je modifier les raccourcis clavier ? ", // #toBeUpdated
				ru: "Где можно поменять горячие клавиши? ", // #toBeUpdated
				id: "Dimana saya bisa mengganti hotkeys? ", // #toBeUpdated
				fil: "Saan ko mababago ang mga hotkey? ", // #toBeUpdated
				zh: "我在哪里可以更改热键？ ", // #toBeUpdated
				br: "Onde posso mudar as teclas de atalho? ",
				es: "¿Dónde puedo cambiar las teclas de acceso rápido? ", // #toBeUpdated
			},
			content: {
				en: `The app hotkey are changed in the overwolf application settings.<br>
					<ul>
						<li>Right click the overwolf symbol in your taskbar.</li>
						<li>Select settings.</li>
						<li>Select Overlay & Hotkeys in the top left corner.</li>
						<li>Select Dota 2 as game.</li>
						<li>Go to the Dota Coach Section.</li>
						<li>Change the hotkeys to your needs.</li>
					</ul>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/overwolfhotkeys.png">`,
				de: `Der App-Hotkey wird in den Einstellungen der Overwolf-Anwendung geändert. <br><ul><li>Klicke mit der rechten Maustaste auf das Overwolf-Symbol in deiner Taskleiste. </li><li>Wählen Sie die Einstellungen. </li><li>Wählen Sie in der oberen linken Ecke Overlay & Hotkeys aus. </li><li>Wähle Dota 2 als Spiel aus. </li><li>Gehen Sie zum Dota Coach Section. </li><li>Ändern Sie die Hotkeys an Ihre Bedürfnisse. </li></ul><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`, // #toBeUpdated
				fr: `Le raccourci clavier de l'application est modifié dans les paramètres de l'application overwolf. <br><ul><li>Cliquez avec le bouton droit sur le symbole Overwolf dans votre barre des tâches. </li><li>Sélectionnez les paramètres. </li><li>Sélectionnez Superposition et raccourcis clavier dans le coin supérieur gauche. </li><li>Sélectionnez Dota 2 comme jeu. </li><li>Accédez à la section des entraîneurs Dota. </li><li>Modifiez les touches de raccourci selon vos besoins. </li></ul><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`, // #toBeUpdated
				ru: `Горячие клавиши приложения изменены в настройках приложения overwolf. <br><ul><li>Щелкните правой кнопкой мыши символ overwolf на панели задач. </li><li>Выберите настройки. </li><li>Выберите Overlay & Hotkeys в левом верхнем углу. </li><li>Выберите Dota 2 в качестве игры. </li><li>Зайдите в раздел тренера по Dota. </li><li>Измените горячие клавиши в соответствии с вашими потребностями. </li></ul><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`, // #toBeUpdated
				id: `Hotkey aplikasi diubah dalam pengaturan aplikasi overwolf. <br><ul><li>Klik kanan simbol overwolf di taskbar Anda. </li><li>Pilih pengaturan. </li><li>Pilih Overlay & Hotkeys di pojok kiri atas. </li><li>Pilih Dota 2 sebagai permainan. </li><li>Pergi ke Bagian Pelatih Dota. </li><li>Ubah hotkeys sesuai kebutuhan Anda. </li></ul><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`, // #toBeUpdated
				fil: `Ang hotkey ng app ay binago sa mga setting ng overwolf application. <br><ul><li>I-right-click ang simbolo ng overwolf sa iyong taskbar. </li><li>Piliin ang mga setting. </li><li>Piliin ang Overlay & Hotkeys sa kaliwang sulok sa itaas. </li><li>Piliin ang Dota 2 bilang laro. </li><li>Pumunta sa Seksyon ng Dota Coach. </li><li>Baguhin ang mga hotkey sa iyong mga pangangailangan. </li></ul><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`, // #toBeUpdated
				zh: `在overwolf应用程序设置中更改了应用程序热键。<br><ul><li>右键单击任务栏中的 overwolf 符号。</li><li>选择设置。</li><li>选择左上角的叠加和热键。</li><li>选择 Dota 2 作为游戏。</li><li>前往 Dota 教练专区。</li><li>根据需要更改热键。</li></ul><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`, // #toBeUpdated
				br: `A tecla de atalho do aplicativo é alterada nas configurações do aplicativo overwolf. <br>
					<ul>
						<li>Clique com o botão direito do mouse no símbolo do overwolf na barra de tarefas. </li>
						<li>Selecione as configurações. </li>
						<li>Selecione Sobreposição e teclas de atalho no canto superior esquerdo. </li>
						<li>Selecione Dota 2 como jogo. </li>
						<li>Vá para a seção de treinadores do Dota. </li>
						<li>Mude as teclas de atalho para suas necessidades. </li>
					</ul>
					<div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`,
				es: `Las teclas de acceso rápido de la aplicación se cambian en la configuración de la aplicación overwolf. <br><ul><li>Haz clic con el botón derecho en el símbolo del lobo en la barra de tareas. </li><li>Selecciona los ajustes. </li><li>Selecciona Superposición y teclas de acceso rápido en la esquina superior izquierda. </li><li>Selecciona Dota 2 como juego. </li><li>Ve a la sección Dota Coach. </li><li>Cambia las teclas de acceso rápido según tus necesidades. </li></ul><div class='mt-2'></div><img class='img-fluid rounded shadow' src='./images/faqs/overwolfhotkeys.png'>`, // #toBeUpdated
			},
		},
	},
};
