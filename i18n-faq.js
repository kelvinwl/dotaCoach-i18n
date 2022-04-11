// i18n-faq.js
/**
 * Holds all localiszed strings for the web FAQ
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
        br: "Perguntas frequentes (FAQs)",
      },
      mostPopular: {
        en: "Most Popular Questions",
        de: "Populäre Fragen",
        br: "Perguntas Mais Populares",
      },
      // Answer
      btnAnswer: {
        en: "Answer",
        de: "Antwort",
        br: "Resposta",
      },
      // Navigation Buttons
      btnSubscription: {
        en: "Subscription",
        de: "Abonnement",
        br: "Inscrição",
      },
      btnAccount: {
        en: "Account",
        de: "Konto",
        br: "Conta",
      },
      btnApplication: {
        en: "Application",
        de: "Applikation",
        br: "Aplicação",
      },
      btnIssues: {
        en: "Issues",
        de: "Probleme",
        br: "Problemas",
      },
      btnAudio: {
        en: "Audio",
        de: "Audio",
        br: "Audio",
      },
      btnTimers: {
        en: "Timers",
        de: "Timers",
        br: "Temporizadores",
      },
      btnGamemodes: {
        en: "Game Modes",
        de: "Spielmodi",
        br: "Modos de Jogo",
      },
      btnHeroguides: {
        en: "Hero Guides",
        de: "Helden Ratgeber",
        br: "Guias de Heróis",
      },
      btnWindows: {
        en: "Windows",
        de: "Fenster",
        br: "Janelas",
      },
      btnHotkeys: {
        en: "Hotkeys",
        de: "Hotkeys",
        br: "Atalhos",
      },
      // Most Popular Questions
      // QMP
      QMPGetStarted: {
        en: "How do I get started?",
        de: "Wo fange ich an?",
        br: "Como eu começo?",
      },
      QMPApplicationNotWork: {
        en: "Why does the application not work?",
        de: "Warum funktoniert die Applikation nicht?",
        br: "Por que a aplicação não funciona?",
      },
      QMPGetHelp: {
        en: "Where can I get additional help?",
        de: "Wo kann ich zusätzliche Hilfe beanspruchen?",
        br: "Onde posso conseguir ajuda adicional?",
      },
      QMPbanned: {
        en: "Can I get banned for using Dota Coach?",
        de: "Kann ich für Dota Coach gebannt werden?",
        br: "Posso ser banido por usar Dota Coach?",
      },
      QMPwindows: {
        en: "Why are some windows missing?",
        de: "Warum fehlen manche Fenster?",
        br: "Por que algumas janelas não aparecem?",
      },
      QMPbug: {
        en: "Where can I report a bug or issue?",
        de: "Wo kann ich einen Bug oder Fehler melden?",
        br: "Onde posso reportar um bug ou problema?",
      },
      // Subscription questions 
      subFeatures: {
        question: {
          en: "What features do I get?",
          de: "Welche Besonderheiten weißt die pro Verion auf?"
          br: "Quais funcionalidades eu ganho?",
        },
        content: {
          en: `Our pro coach version comes a long with a number of features:<br>
					<ul>
						<li>Voice coaching for all heroes Dota2 has to offer.</li>
						<li>Adjustable Ultimate timers for the enemy and your team.</li>
						<li>Add free Dota Coach experience.</li>
						<li>Supporter Discord role.</li>
					</ul>`,
          de: `Unsere pro Version kommt in einer Zahl von Besonderheiten:<br>
					<ul>
						<li>Sprach coaching für alle Helden die Dota 2 bietet.</li>
						<li>Einstellbare Ultimate-Timer für Gegner und Team.</li>
						<li>Eine werbefreie Dota Coach Erfahrung.</li>
						<li>Supporter Discord Rolle.</li>
					</ul>`,
          br: `Nossa versão pró vêm com várias funcionalidades:<br>
					<ul>
						<li>Treinamento por voz para todos os heróis que o Dota2 têm para oferecer.</li>
						<li>Temporizadores ajustáveis de ults do adversário e seu time.</li>
						<li>Tenha a experiência do Dota Coach grátis.</li>
						<li>Cargo de apoiador no Discord.</li>
					</ul>`,
        }
      },
      subPayment: {
        question: {
          en: "Which payment options do I have?",
          br: "Quais opções de pagamento eu tenho?",
        },
        content: {
          en: `All payments are done through the <a class="link-danger" href="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf</a> 
					platform which collaborates with a broad variety of payment providers.<br>
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
          br: `All payments are done through the <a class="link-danger" href="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf</a> 
					platform which collaborates with a broad variety of payment providers.<br>
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
        }
      },
      subGet: {
        question: {
          en: "How can I get the pro Version? ",
        },
        content: {
          en: `After installing Dota Coach with the overwolf client, you can subscribe to our services.<br>
					<ul>
						<li>Open the Overwolf Desktop Client.</li>
						<li>Click on 'Library'.</li>
						<li>Click on the small settings button next to the Dota Coach logo.</li>
						<li>Click on 'view in appstore'</li>
						<li>Click 'Subscribe' inside the new window.</li>
						<li>Follow the promoted steps.</li>
					</ul>
					Also check out the <a class="link-danger" href ="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf FAQ</a>
					on how to subscribe to apps.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/subscribesteps.png" class="img-fluid rounded shadow">`,
        }
      },
      subCancel: {
        question: {
          en: "How can I cancel my subscription?",
        },
        content: {
          en: `All subscriptions are handled by Overwolf.<br>
					If you want to cancel your subscription, refund or forgot to cancel, please follow the offical <a class="link-danger" href ="https://support.overwolf.com/en/support/solutions/articles/9000178332-app-subscriptions-faq/">Overwolf FAQ</a>.`,
        }
      },

      // Account
      accCreate: {
        question: {
          en: "How do I create an account?",
        },
        content: {
          en: `Follow the overwolf step by step <a class="link-danger" href ="https://support.overwolf.com/en/support/solutions/articles/9000176960-how-to-create-an-overwolf-account-">tutorial</a> on how to create an account.<br>`
        }
      },
      accLogin: {
        question: {
          en: "How do I log in?",
        },
        content: {
          en: `					You can log in via the overwolf client, or directly within our application.<br>
					Both logins are located at the top right corner of their windows.<br>
					Simply click the overwolf logo to open the login dialog.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/loginout.png" class="img-fluid rounded shadow">`
        }
      },
      accLogout: {
        question: {
          en: "How do I log out?",
        },
        content: {
          en: `					You can log out via the overwolf client, or directly within our application.<br>
					Both logouts are located at the top right corner of their windows.<br>
					Simply click the overwolf logo to open the logout dialog.<br>
					<div class="mt-2"></div>
					<img src="images/faqs/loginout.png" class="img-fluid rounded shadow">`
        }
      },
      accManage: {
        question: {
          en: "Where can I manage my account?",
        },
        content: {
          en: `					You can manage your overwolf account directly in the overwolf client.<br>
					Click on the overwolf logo in the top right corner. <br>
					<div class="mt-2"></div>
					<img src="images/faqs/overwolfaccmanage.png" class="img-fluid rounded shadow">`
        }
      },
      // Application
      appGetStarted: {
        question: {
          en: "How do I get started?",
        },
        content: {
          en: `<p>
						The first step is to add '-gamestateintegration' to your Dota 2 launch options.<br>
						If you added it already and still get a warning message, make sure to log into your steam account.<br>
						A guide on how to add Dota2 launch parameters can be found <a class="link-danger" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.
					
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
						And the following for Roshan and the Glyph of Fortification:<br>
						<div class="mt-2"></div>
						<img class="img-fluid rounded shadow" src="./images/faqs/roshan_timer_active.png" style="width:32%"><br><br>
						If other players in your team are using Dota Coach, the activation of timers will be shared among the team.<br>
						So if you forget to activate a timer, don't worry, a teammate might have activated it!
					
					<p>Subscribers get hero coaching for all 123 heroes, access to ultimate timers, ads removed and support the developement of app.<br> 
					The subscription fee is USD 1.99 per month.</p>
					<p>
					want to see the app in action and learn about its features? <a class="link-danger" href="https://dota-coach.com/video/DotaCoachTutorial.mp4">Watch our tutorial
					video</a>!<br> 
					Want to talk to us? No problem: <a class="link-danger" href="https://discord.gg/9WhAANq">Join our Discord community server</a>!
					</p>`
        }
      },
      appHelp: {
        question: {
          en: "Where can I get additional help?",
        },
        content: {
          en: `Join our Discord for live support <a class="link-danger" href ="https://discord.gg/uabGsGazRe">here</a>.`
        }
      },
      appBanned: {
        question: {
          en: "Can I get banned for using Dota Coach?",
        },
        content: {
          en: `<p>
					<b>The Dota Coach app will NOT get you banned.</b><br>
					The Dota Coach app is built on top of the Overwolf platform.<br>
					The Overwolf platform is built in collaboration with Valve and the Dota2 team.<br>
					Valve has since its beginnings supported the efforts of third party applications to create content and systems that enhance the player's experience.<br>
					You can read more here: <a class="link-danger" href="https://support.overwolf.com/en/support/solutions/articles/9000182312-overwolf-won-t-get-you-banned">Overwolf Won't Get You Banned</a><br>
					</p>`
        }
      },
      appVideo: {
        question: {
          en: "Do you have a video guide?",
        },
        content: {
          en: `You can find our 3 minute video guide <a class="link-danger" href ="https://dota-coach.com/video/DotaCoachTutorial.mp4">here</a>.`
        }
      },
      appGamestate: {
        question: {
          en: "What is Gamestateintegration?",
        },
        content: {
          en: `The gamestateintegration is an integral part of Dota Coach. It is provided by Valve to access all events in a Dota2 game.<br>
					You must add '-gamestateintegration' as a Dota2 launch parameter.<br>
					Without it, Dota Coach will not work!<br>
					For further information on how to enable it click <a class="link-danger" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.`
        }
      },
      appLanguage: {
        question: {
          en: "How can I change the language?",
        },
        content: {
          en: `Open the settings window. You can find it in the menu in the top right corner of the desktop window.<br>
					The languge setting is located in the bottom right corner.<br>
					Please be aware, that we only support a certain set of languages.<br>
					If your native language is missing, let us know or help with the translation!<br>
					<div class="mt-2"></div>
					<img src="./images/faqs/language.png" class="img-fluid rounded shadow">`
        }
      },
      appTranslation: {
        question: {
          en: "Can I help with the translation?",
        },
        content: {
          en: `Yes of course! Contact us here:<br>
					<ul>
						<li><a class="link-danger" href="https://discord.gg/uabGsGazRe">Discord</a></li>
						<li><a class="link-danger" href="https://github.com/roserens/dotaCoach-i18n">Github</a></li>
						<li>info(at)dota-coach.com</li>`
        }
      },
      appMoney: {
        question: {
          en: "How does Dota Coach make money?",
        },
        content: {
          en: `Most features of the app are available to all players for free.<br> 
					The Dota Coach app makes money through displaying ads in some parts of the app.<br>
					Also players can pay a monthly subscription fee to get access to some exclusive features.<br>
					The pro subscription also turns off the ads.<br>`
        }
      },
      // Issues
      issueApp: {
        question: {
          en: "Why does the application not work?",
        },
        content: {
          en: `<p>
						You must add '-gamestateintegration' to your Dota 2 launch options for the app to work.<br>
						Additional information how to add the launch parameter can be found <a class="link-danger" href="https://support.overwolf.com/en/support/solutions/articles/9000212745-how-to-enable-game-state-integration-for-dota-2">here</a>.
					</p>`
        }
      },
      issueBug: {
        question: {
          en: "How can I report an issue or bug?",
        },
        content: {
          en: `You can find the 'report issue' button in the top menu of the desktop application window.<br>
					If you need further assistance, please join our <a class="link-danger" href="https://discord.gg/uabGsGazRe">Discord</a> server!<br>
					<div class="mt-2"></div>
					<img src="images/faqs/bugreport.png" class="img-fluid rounded shadow">`
        }
      },
      issueFPS: {
        question: {
          en: "How can I improve my frames per second (FPS)?",
        },
        content: {
          en: `If you encounter low frames per second during games, please restart Dota2, in most cases this will fix frame rate problems without any further actions.<br>
					Tabbing (Alt+Tab) in between your desktop and Dota2 will also cause frame rate problems overtime. If this happens, restart Dota2.<br>
					<br>
					The steam notifaction message display also causes frame rate problems.<br>
					You can disable it here:<br>
					<ul>
						<li>Open your frind list (Right click steam in the taskbar -> friends).</li>
						<li>Llick on the settings wheel on the top right corner.</li>
						<li>Disable all notifactions as shown in the image below.</li>
					</ul>
					<div class="mt-2"></div>
					<img src="images/faqs/steamnotification.png" class="img-fluid rounded shadow">`
        }
      },
      issueWindow: {
        question: {
          en: "Why is a window not showing?",
        },
        content: {
          en: `This can happen when you customize the location of the timers and then change the screen resolution.<br> 
					We suggest that you reset the position of the timers in the settings menu.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`
        }
      },
      issueTimers: {
        question: {
          en: "Why do I not see Ultimate timers?",
        },
        content: {
          en: `Ultimate timers are a premium feature that is only available to our subscribers.<br>
					A subscription is 1.99$ / month.<br>
					Open the application menu and click on manage subscription.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/subscribe.png">`
        }
      },
      // Timers
      timerStart: {
        question: {
          en: "How do I start a timer?",
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
					</div>`
        }
      },
      timerStop: {
        question: {
          en: "How do I stop a timer?",
        },
        content: {
          en: `Click on the red-cross to stop the timer.<br>`
        }
      },
      timerAnnounce: {
        question: {
          en: "How do I announce a timer?",
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
						This works for Roshan, Aegis, Glyph of Fortification, Buybacks and Ultimates.
					`
        }
      },
      timerDisable: {
        question: {
          en: "How do I disable a timer?",
        },
        content: {
          en: `Open the settings window.<br> 
					You can find it in the top right corner under 'change settings'.<br>
					You can the timers components which you do not want to see.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/timers.png">`
        }
      },
      timerMissing: {
        question: {
          en: "Why do I not see timers?",
        },
        content: {
          en: `There are multiple reasons why your timers are not shown.<br>
					If the Dota 2 game coordinator is not found, Dota Coach does not get any Data on the match which will result in no timers.<br>
					Another reason is the missing launchparameter '-gamestateintegration'. Make sure that it is added. Check our FAQ on how to add it.<br>
					Sometimes, the timers can go missing during repositon.<br>
					Simply hit the 'reset' button in the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`
        }
      },
      timerUltimate: {
        question: {
          en: "Why do I not see Ultimate timers?",
        },
        content: {
          en: `Ultimate timers are a premium feature that is only available to our subscribers.<br>
					A subscription is 1.99$ / month.<br>
					Open the application menu and click on manage subscription.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/subscribe.png">`
        }
      },
      // Gamemodes
      gamemodeSupport: {
        question: {
          en: "What Game Modes do you support?",
        },
        content: {
          en: `Dota Coach works in all Game Modes.<br>
					But be aware that some timers and timings might be not fully operational in Turbo matches.<br>
					Ability Draft is also not fully supported.<br>`
        }
      },
      gamemodeSpectate: {
        question: {
          en: "Can I spectate games?",
        },
        content: {
          en: `Yes, you can! Dota Coach works in spectator mode.<br>
					It will enhance your overall spectator experience due to providing additional information.<br>
					Try it out! <br>`
        }
      },
      gamemodeTournament: {
        question: {
          en: "Can I use the app in offical tournaments / ticketed games?",
        },
        content: {
          en: `The short answer is no.<br>
					Offical games send the gamestateintegration data delayed, which results in delayed timers and bad app functionality.<br>
					You can not use Dota Coach during offical tournament games (ticketed games).<br>`
        }
      },
      // Hero Guides
      heroguidesGet: {
        question: {
          en: "How can I get your Hero Guides?",
        },
        content: {
          en: `We have created in-game guides for every hero in the game.<br>
					They contain all the tips and item builds that are provided in the "Dota Coach App".<br>
					Subscribe to the them <a class="link-danger" href="https://dota-coach.com/heropedia/">here</a>.<br>
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
          <script>_buildCarousell()</script>`
        }
      },
      heroguidesMissing: {
        question: {
          en: "Why are the Hero Guides not shown?",
        },
        content: {
          en: `If you already subscribed to our Hero Guides and they do not show in-game, <br>
					make sure to restart Dota2!<br>
					You can join a 'Demo Hero' lobby and check if the guides have been loaded properly.<br>
					It is important that you select them in-game in the shop interface after you subscribed to them.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow w-50" src="./images/faqs/heroguides.png">`
        }
      },
      heroguidesGood: {
        question: {
          en: "Are your Hero Guides good?",
        },
        content: {
          en: `All Hero Guides that we provide are created and maintained by professional Dota2 coaches and players.<br>
					Their in-game ranks are bewteen Immortal Rank 1000 and Immortal Rank 100 (8000 - 10000 MMR).<br>
					You can look up their ranks on the offical Dota2 <a class="link-danger" href="https://www.dota2.com/leaderboards/#europe-0">Leaderboards</a>.`
        }
      },
      // Windows
      windowMissing: {
        question: {
          en: "Why are some windows missing? ",
        },
        content: {
          en: `There are multiple reasons why your timers are not shown.<br>
					If the Dota 2 game coordinator is not found, Dota Coach does not get any Data on the match which will result in no timers.<br>
					Another reason is the missing launchparameter '-gamestateintegration'. Make sure that it is added. Check our FAQ on how to add it.<br>
					Sometimes, the timers can go missing during repositon.<br>
					Simply hit the 'reset' button in the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reset_position.png">`
        }
      },
      windowShowHide: {
        question: {
          en: "How can I hide/show windows while playing?",
        },
        content: {
          en: `To Hide/Show in-game windows while playing, press the asigned hotkey.<br>
					The standard hotkey is 'CTRL + b'.<br>
					If you want to change the hotkey, head to the overwolf app settings.<br>
					Check our FAQ under 'Hotkeys' if you are not sure where to find it.<br>`
        }
      },
      windowReposition: {
        question: {
          en: "How can I reposition windows?",
        },
        content: {
          en: `Open the settings menu in the top right corner of the desktop window.<br>
					Activate the Reposition slider in the bottom right corner of the settings window.<br>
					De-activate the Reposition slider once you are done to safe your new positions. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reposition.png">`
        }
      },
      windowGreen: {
        question: {
          en: "Why are all windows green?",
        },
        content: {
          en: `Your windows turn green if the reposition slider in the settings menu is set to active.<br>
					Open the settings menu in the top right corner of the desktop window.<br>
					De-activate the Reposition slider in the bottom right corner of the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/reposition.png">`
        }
      },
      windowPickBan: {
        question: {
          en: "How can I see pick/ban suggestions?",
        },
        content: {
          en: `Once you enter a game and the draft begins, a Dota Coach logo will appear in the top left corner.<br>
					Click it to show or hide the draft information. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/buttondraft.png">`
        }
      },
      windowRole: {
        question: {
          en: "How can I open the Role selection?",
        },
        content: {
          en: `Once you enter a game, a Dota Coach logo will appear above the minimap.<br>
					Click it to show or hide the role selection and laning information. <br>`
        }
      },
      windowDisable: {
        question: {
          en: "How can I disable windows I do not like?",
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
					</ul>`
        }
      },
      windowSecond: {
        question: {
          en: "How do I enable the second desktop window?",
        },
        content: {
          en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					Select your second or main monitor to enable the window. <br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/secondscreen.png">`
        }
      },
      // Audio
      audioDisable: {
        question: {
          en: "How do I disable audio messages?",
        },
        content: {
          en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can disable the following voice components individually:
					<ul>
						<li>Notifcations</li>
						<li>Voice coaching own hero</li>
						<li>Voice coaching enemy heroes</li>
					</ul>`
        }
      },
      audioVolume: {
        question: {
          en: "How can I adjust the sound volume?",
        },
        content: {
          en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the volume adjustment control in the top right corner of the settings window.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/audio.png">`
        }
      },
      audioMissing: {
        question: {
          en: "The audio is not playing, how can I enable it?",
        },
        content: {
          en: `Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the sound output control in the top right corner of the settings window.<br>
					Make sure to select the proper speaker (audio-output) and that the volume is not zero percent.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/audio.png">`
        }
      },
      // Hotkeys
      hotkeyMissclick: {
        question: {
          en: "How can I enable the miss-click protection?",
        },
        content: {
          en: `To avoid miss-clicks on in-game windows, you can enable a miss-click protection modifer.<br>
					This will make windows only interactive if the modifier pressed while mouse-clicking.<br>
					We support 'alt', 'ctrl' and 'shift'.<br>
					Open the settings in the top right corner of the desktop window and select 'change settings'.<br>
					You can find the 'Mouse Click Modifier' Key in the top right corner of the settings window.<br>
					Please note that if you select 'shift' or 'ctrl' as modifier, announcing timers in chat will no longer work.<br>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/mouseclickmod.png">`
        }
      },
      hotkeyModifier: {
        question: {
          en: "What is the modifier key?",
        },
        content: {
          en: `The modifier key was introduced to avoid miss-clicks on window elements. <br>
					If you have encounter problems with miss-clicks on windows, make sure to enable the modifier key.`
        }
      },
      hotkeyChange: {
        question: {
          en: "Where can I change the hotkeys? ",
        },
        content: {
          en: `The app hotkey are changed in the overwolf application settings.<br>
					<ul>
						<li>Right click the overwolf symbol in your taskbar.</li>
						<li>Select settings.</li>
						<li>Select Overlay & Hotkeys in the top left corner.</li>
						<li>Select Dota2 as game.</li>
						<li>Go to the Dota Coach Section.</li>
						<li>Change the hotkeys to your needs.</li>
					</ul>
					<div class="mt-2"></div>
					<img class="img-fluid rounded shadow" src="./images/faqs/overwolfhotkeys.png">`
        }
      },
  }
}
