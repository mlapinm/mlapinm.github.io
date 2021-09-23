let objs = [
  {
    "time": [
      0.39,
      2.86
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab."
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми."
    ]
  },
  {
    "time": [
      2.86,
      6.279
    ],
    "en": [
      "This is a free, complete course for the CCNA."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA."
    ]
  },
  {
    "time": [
      6.279,
      10.61
    ],
    "en": [
      "If you like these videos, please subscribe to follow along with the series."
    ],
    "ru": [
      "Если вам нравятся эти видео, подпишитесь, чтобы следить за сериалом."
    ]
  },
  {
    "time": [
      10.61,
      16.82
    ],
    "en": [
      "Also, please like and leave a comment, and share the video to help spread this free series of videos."
    ],
    "ru": [
      "Также, пожалуйста, поставьте лайк и оставьте комментарий, а также поделитесь видео, чтобы помочь распространить эту бесплатную серию видео."
    ]
  },
  {
    "time": [
      16.82,
      18.99
    ],
    "en": [
      "of videos. Thanks for your help."
    ],
    "ru": [
      "видео. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      18.99,
      26.859
    ],
    "en": [
      "In this video we will cover two Cisco proprietary protocols, DTP, aka dynamic trunking protocol,"
    ],
    "ru": [
      "В этом видео мы рассмотрим два проприетарных протокола Cisco, DTP, также известный как протокол динамического транкинга,"
    ]
  },
  {
    "time": [
      26.859,
      31.38
    ],
    "en": [
      "and VTP, VLAN trunking protocol."
    ],
    "ru": [
      "и VTP, протокол транкинга VLAN."
    ]
  },
  {
    "time": [
      31.38,
      36.25
    ],
    "en": [
      "As I said, they are Cisco proprietary, meaning they were developed by Cisco and they only"
    ],
    "ru": [
      "Как я уже сказал, они являются собственностью Cisco, то есть они были разработаны Cisco и только"
    ]
  },
  {
    "time": [
      36.25,
      37.89
    ],
    "en": [
      "run on Cisco devices."
    ],
    "ru": [
      "работать на устройствах Cisco."
    ]
  },
  {
    "time": [
      37.89,
      45.6
    ],
    "en": [
      "DTP and VTP were removed from the CCNA exam topics list for the new exam (200-301)."
    ],
    "ru": [
      "DTP и VTP были удалены из списка тем экзамена CCNA для нового экзамена (200–301)."
    ]
  },
  {
    "time": [
      45.6,
      49.99
    ],
    "en": [
      "However, it’s important to know their function, and you may still get questions about them"
    ],
    "ru": [
      "Однако важно знать их функции, и вы все равно можете получить о них вопросы."
    ]
  },
  {
    "time": [
      49.99,
      53.78
    ],
    "en": [
      "on the exam even though they are not on the topics list."
    ],
    "ru": [
      "на экзамене, даже если их нет в списке тем."
    ]
  },
  {
    "time": [
      53.78,
      56.27
    ],
    "en": [
      "So, what will we cover in this video?"
    ],
    "ru": [
      "Итак, что мы расскажем в этом видео?"
    ]
  },
  {
    "time": [
      56.27,
      58.899
    ],
    "en": [
      "Well, I already said it."
    ],
    "ru": [
      "Что ж, я это уже сказал."
    ]
  },
  {
    "time": [
      58.899,
      62.96
    ],
    "en": [
      "We will cover DTP, dynamic trunking protocol, first."
    ],
    "ru": [
      "Сначала мы рассмотрим DTP, протокол динамического транкинга."
    ]
  },
  {
    "time": [
      62.96,
      68.22
    ],
    "en": [
      "DTP is a Cisco proprietary protocol that allows switches to negotiate the status of their"
    ],
    "ru": [
      "DTP - это проприетарный протокол Cisco, который позволяет коммутаторам согласовывать статус своих"
    ]
  },
  {
    "time": [
      68.22,
      75.36
    ],
    "en": [
      "switchports to be either access ports or trunk ports, without manually configuring them."
    ],
    "ru": [
      "Switchports должны быть портами доступа или магистральными портами без их ручной настройки."
    ]
  },
  {
    "time": [
      75.36,
      79.03999999999999
    ],
    "en": [
      "Then we will cover VTP, VLAN trunking protocol."
    ],
    "ru": [
      "Затем мы рассмотрим VTP, протокол транкинга VLAN."
    ]
  },
  {
    "time": [
      79.03999999999999,
      85.07900000000001
    ],
    "en": [
      "VTP is another Cisco proprietary protocol that allows you to configure VLANs on a central"
    ],
    "ru": [
      "VTP - это еще один проприетарный протокол Cisco, который позволяет настраивать сети VLAN на центральном сервере."
    ]
  },
  {
    "time": [
      85.07900000000001,
      90.34
    ],
    "en": [
      "switch, which then acts as a server that other switches can synchronize to, so you don’t"
    ],
    "ru": [
      "коммутатор, который затем действует как сервер, с которым могут синхронизироваться другие коммутаторы, поэтому вы не"
    ]
  },
  {
    "time": [
      90.34,
      94.18
    ],
    "en": [
      "have to configure VLANs on every single switch in the network."
    ],
    "ru": [
      "необходимо настроить VLAN на каждом коммутаторе в сети."
    ]
  },
  {
    "time": [
      94.18,
      99.38
    ],
    "en": [
      "Also, make sure you watch until the end of today’s quiz, as I will once again feature"
    ],
    "ru": [
      "Также не забудьте посмотреть до конца сегодняшнюю викторину, так как я еще раз расскажу"
    ]
  },
  {
    "time": [
      99.38,
      104.439
    ],
    "en": [
      "a question from ExSim for CCNA, by Boson Software."
    ],
    "ru": [
      "вопрос от ExSim для CCNA от Boson Software."
    ]
  },
  {
    "time": [
      104.439,
      109.979
    ],
    "en": [
      "ExSim for CCNA is Boson’s set of practice exams for the CCNA, and they are widely regarded"
    ],
    "ru": [
      "ExSim for CCNA - это набор практических экзаменов Boson для CCNA, и они широко известны."
    ]
  },
  {
    "time": [
      109.979,
      114.07
    ],
    "en": [
      "as the best practice exams to get you ready for the real thing."
    ],
    "ru": [
      "как лучшие практические экзамены, которые помогут вам подготовиться к настоящему."
    ]
  },
  {
    "time": [
      114.07,
      117.99000000000001
    ],
    "en": [
      "I used them myself for my CCNA and CCNP."
    ],
    "ru": [
      "Я сам использовал их для своих CCNA и CCNP."
    ]
  },
  {
    "time": [
      117.99000000000001,
      122.609
    ],
    "en": [
      "If you want to get a copy of ExSim, follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить копию ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      122.609,
      126.29
    ],
    "en": [
      "Let’s go over some points about DTP."
    ],
    "ru": [
      "Давайте рассмотрим некоторые моменты, касающиеся DTP."
    ]
  },
  {
    "time": [
      126.29,
      132.67
    ],
    "en": [
      "DTP is a Cisco proprietary protocol that allows Cisco switches to dynamically determine their"
    ],
    "ru": [
      "DTP - это проприетарный протокол Cisco, который позволяет коммутаторам Cisco динамически определять свои"
    ]
  },
  {
    "time": [
      132.67,
      137.34
    ],
    "en": [
      "interface status (access or trunk) without manual configuration."
    ],
    "ru": [
      "статус интерфейса (доступ или транк) без ручной настройки."
    ]
  },
  {
    "time": [
      137.34,
      143.69
    ],
    "en": [
      "Basically, two Cisco switches connected together can form a trunk, but otherwise the interface"
    ],
    "ru": [
      "По сути, два коммутатора Cisco, соединенные вместе, могут образовывать магистраль, но в остальном интерфейс"
    ]
  },
  {
    "time": [
      143.69,
      146.24
    ],
    "en": [
      "will automatically be an access port."
    ],
    "ru": [
      "автоматически станет портом доступа."
    ]
  },
  {
    "time": [
      146.24,
      151.53
    ],
    "en": [
      "DTP is enabled by default on all Cisco switch interfaces."
    ],
    "ru": [
      "DTP включен по умолчанию на всех интерфейсах коммутатора Cisco."
    ]
  },
  {
    "time": [
      151.53,
      157.62
    ],
    "en": [
      "Once again, because it is a proprietary protocol, this applies only to Cisco switches."
    ],
    "ru": [
      "Еще раз, поскольку это проприетарный протокол, это применимо только к коммутаторам Cisco."
    ]
  },
  {
    "time": [
      157.62,
      163.09
    ],
    "en": [
      "So far, we have been manually configuring switchports using either SWITCHPORT MODE ACCESS"
    ],
    "ru": [
      "До сих пор мы вручную настраивали порты коммутатора, используя либо ДОСТУП В РЕЖИМ SWITCHPORT"
    ]
  },
  {
    "time": [
      163.09,
      165.68
    ],
    "en": [
      "or SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "или РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      165.68,
      169.31
    ],
    "en": [
      "If we use DTP, we don’t need to enter these commands."
    ],
    "ru": [
      "Если мы используем DTP, нам не нужно вводить эти команды."
    ]
  },
  {
    "time": [
      169.31,
      174.3
    ],
    "en": [
      "Now, for security purposes, manual configuration is recommended."
    ],
    "ru": [
      "Теперь в целях безопасности рекомендуется ручная настройка."
    ]
  },
  {
    "time": [
      174.3,
      177.73
    ],
    "en": [
      "DTP should be disabled on all switchports."
    ],
    "ru": [
      "DTP должен быть отключен на всех портах коммутатора."
    ]
  },
  {
    "time": [
      177.73,
      183.31
    ],
    "en": [
      "DTP can be exploited by attackers, and I’ll talk more about network security later in"
    ],
    "ru": [
      "DTP может быть использован злоумышленниками, и я подробнее расскажу о сетевой безопасности позже."
    ]
  },
  {
    "time": [
      183.31,
      188.33
    ],
    "en": [
      "this course, but for now just know that it should be disabled on all interfaces."
    ],
    "ru": [
      "это конечно, но пока просто знайте, что он должен быть отключен на всех интерфейсах."
    ]
  },
  {
    "time": [
      188.33,
      191.05
    ],
    "en": [
      "Let’s go straight into the CLI."
    ],
    "ru": [
      "Давайте сразу перейдем к интерфейсу командной строки."
    ]
  },
  {
    "time": [
      191.05,
      197.17000000000002
    ],
    "en": [
      "I’m in interface configuration mode here on a Cisco switch, and I entered SWITCHPORT"
    ],
    "ru": [
      "Я нахожусь в режиме настройки интерфейса здесь, на коммутаторе Cisco, и я вошел в SWITCHPORT"
    ]
  },
  {
    "time": [
      197.17000000000002,
      200.84
    ],
    "en": [
      "MODE, followed by the question mark."
    ],
    "ru": [
      "РЕЖИМ, за которым следует вопросительный знак."
    ]
  },
  {
    "time": [
      200.84,
      205.26
    ],
    "en": [
      "You can see the ACCESS and TRUNK options we used before, but the one we’re going to"
    ],
    "ru": [
      "Вы можете увидеть варианты ACCESS и TRUNK, которые мы использовали раньше, но мы собираемся"
    ]
  },
  {
    "time": [
      205.26,
      208.709
    ],
    "en": [
      "look at now is this one, DYNAMIC."
    ],
    "ru": [
      "посмотри сейчас, это ДИНАМИЧЕСКИЙ."
    ]
  },
  {
    "time": [
      208.709,
      214.92000000000002
    ],
    "en": [
      "It says ‘set trunking mode to dynamically negotiate access or trunk mode’. That’s DTP."
    ],
    "ru": [
      "В нем говорится: «Установите режим транкинга для динамического согласования режима доступа или транкового режима». Это DTP."
    ]
  },
  {
    "time": [
      214.92000000000002,
      219.7
    ],
    "en": [
      "That’s DTP. So, I entered DYNAMIC and used the question mark again."
    ],
    "ru": [
      "Это DTP. Итак, я вошел в DYNAMIC и снова использовал вопросительный знак."
    ]
  },
  {
    "time": [
      219.7,
      223.87
    ],
    "en": [
      "There are two options, AUTO and DESIRABLE."
    ],
    "ru": [
      "Есть два варианта: АВТО и ЖЕЛАТЕЛЬНЫЙ."
    ]
  },
  {
    "time": [
      223.87,
      228.73
    ],
    "en": [
      "The only description given is ‘Set trunking mode dynamic negotiation parameter to AUTO"
    ],
    "ru": [
      "Единственное приведенное описание - «Установить параметр динамического согласования режима транкинга на АВТО»."
    ]
  },
  {
    "time": [
      228.73,
      232.09
    ],
    "en": [
      "or DESIRABLE’, which doesn’t really explain their function."
    ],
    "ru": [
      "или ЖЕЛАТЕЛЬНОЕ », что на самом деле не объясняет их функции."
    ]
  },
  {
    "time": [
      232.09,
      236.049
    ],
    "en": [
      "So, let me explain each of these modes."
    ],
    "ru": [
      "Итак, позвольте мне объяснить каждый из этих режимов."
    ]
  },
  {
    "time": [
      236.049,
      242.409
    ],
    "en": [
      "A switchport in DYNAMIC DESIRABLE mode will actively try to form a trunk with other Cisco switches."
    ],
    "ru": [
      "Порт коммутатора в ДИНАМИЧЕСКОМ ЖЕЛАТЕЛЬНОМ режиме будет активно пытаться сформировать магистраль с другими коммутаторами Cisco."
    ]
  },
  {
    "time": [
      242.409,
      249.22
    ],
    "en": [
      "switches. It will form a trunk if connected to another switchport in the following modes: switchport mode trunk."
    ],
    "ru": [
      "переключатели. Он образует магистраль, если подключен к другому порту коммутатора в следующих режимах: магистраль в режиме порта коммутатора."
    ]
  },
  {
    "time": [
      249.22,
      254.55
    ],
    "en": [
      "mode trunk. switchport mode dynamic desirable, or switchport mode dynamic auto."
    ],
    "ru": [
      "режим багажника. Switchport mode dynamic желательно, или switchport mode dynamic auto."
    ]
  },
  {
    "time": [
      254.55,
      257.07
    ],
    "en": [
      "Let’s see how that works."
    ],
    "ru": [
      "Посмотрим, как это работает."
    ]
  },
  {
    "time": [
      257.07,
      262.12
    ],
    "en": [
      "SW1 and SW2 are connected via their G0/0 interfaces."
    ],
    "ru": [
      "SW1 и SW2 подключаются через их интерфейсы G0 / 0."
    ]
  },
  {
    "time": [
      262.12,
      266.7
    ],
    "en": [
      "SW1’s G0/0 interface is in DYNAMIC DESIRABLE MODE."
    ],
    "ru": [
      "Интерфейс G0 / 0 SW1 находится в ЖЕЛАТЕЛЬНОМ ДИНАМИЧЕСКОМ РЕЖИМЕ."
    ]
  },
  {
    "time": [
      266.7,
      271.01
    ],
    "en": [
      "SW2’s G0/0 interface is manually configured as a trunk."
    ],
    "ru": [
      "Интерфейс G0 / 0 SW2 настраивается вручную как магистральный."
    ]
  },
  {
    "time": [
      271.01,
      275.61
    ],
    "en": [
      "So, these two switches will both agree to operate as trunks."
    ],
    "ru": [
      "Таким образом, оба этих коммутатора согласны работать как соединительные линии."
    ]
  },
  {
    "time": [
      275.61,
      280.84000000000003
    ],
    "en": [
      "Here is a new command, SHOW INTERFACES G0/0 SWITCHPORT."
    ],
    "ru": [
      "Вот новая команда, ПОКАЗАТЬ ИНТЕРФЕЙСЫ G0 / 0 SWITCHPORT."
    ]
  },
  {
    "time": [
      280.84000000000003,
      285.38
    ],
    "en": [
      "These are just the first few lines of output, I will show you the others later."
    ],
    "ru": [
      "Это только первые несколько строк вывода, остальные я покажу вам позже."
    ]
  },
  {
    "time": [
      285.38,
      290.65
    ],
    "en": [
      "It says switchport: enabled, because it is a layer 2 port."
    ],
    "ru": [
      "В нем написано switchport: enabled, потому что это порт уровня 2."
    ]
  },
  {
    "time": [
      290.65,
      297.37
    ],
    "en": [
      "If we want to configure a routed port with the ‘no switchport’ command, this would display differently."
    ],
    "ru": [
      "Если мы хотим настроить маршрутизируемый порт с помощью команды «no switchport», это будет отображаться по-другому."
    ]
  },
  {
    "time": [
      297.37,
      301.44
    ],
    "en": [
      "display differently. The administrative mode is dynamic desirable."
    ],
    "ru": [
      "отображать иначе. Желателен административный режим."
    ]
  },
  {
    "time": [
      301.44,
      306.28
    ],
    "en": [
      "Administrative mode is what we actually configured on the interface, and then below it, operational"
    ],
    "ru": [
      "Административный режим - это то, что мы на самом деле настроили на интерфейсе, а затем под ним - рабочий."
    ]
  },
  {
    "time": [
      306.28,
      310.47
    ],
    "en": [
      "mode, displays whether it is a trunk or access port."
    ],
    "ru": [
      "В режиме отображается, является ли это магистральным портом или портом доступа."
    ]
  },
  {
    "time": [
      310.47,
      318.22
    ],
    "en": [
      "Because SW2’s interface is a trunk, SW1’s interface became a trunk as well, thanks to DTP negotiation."
    ],
    "ru": [
      "Поскольку интерфейс SW2 является транком, интерфейс SW1 также стал транком благодаря согласованию DTP."
    ]
  },
  {
    "time": [
      318.22,
      325.08
    ],
    "en": [
      "DTP negotiation. Here on SW2 you can see that both the administrative mode AND operational mode are trunk."
    ],
    "ru": [
      "Согласование DTP. Здесь, на SW2, вы можете видеть, что и административный, и рабочий режим являются магистральными."
    ]
  },
  {
    "time": [
      325.08,
      328.56
    ],
    "en": [
      "Now both interfaces are configured in dynamic desirable mode."
    ],
    "ru": [
      "Теперь оба интерфейса настроены в желаемом динамическом режиме."
    ]
  },
  {
    "time": [
      328.56,
      331.45
    ],
    "en": [
      "So, they will both form a trunk."
    ],
    "ru": [
      "Таким образом, они оба образуют ствол."
    ]
  },
  {
    "time": [
      331.45,
      337.12
    ],
    "en": [
      "The output of SHOW INTERFACES SWITCHPORT is the same on SW1, and this time SW2 also has"
    ],
    "ru": [
      "Выходной сигнал SHOW INTERFACES SWITCHPORT такой же, как на SW1, но на этот раз SW2 также имеет"
    ]
  },
  {
    "time": [
      337.12,
      342.89
    ],
    "en": [
      "an administrative mode of ‘dynamic desirable’, but once again the operational mode is trunk,"
    ],
    "ru": [
      "административный режим «желательно динамический», но снова рабочий режим - магистральный,"
    ]
  },
  {
    "time": [
      342.89,
      348.02
    ],
    "en": [
      "because both switches are actively using DTP to try to form a trunk."
    ],
    "ru": [
      "потому что оба коммутатора активно используют DTP, чтобы попытаться сформировать магистраль."
    ]
  },
  {
    "time": [
      348.02,
      355.52
    ],
    "en": [
      "Even if manually configured as a trunk, an interface still sends DTP frames out of the interface."
    ],
    "ru": [
      "Даже если вручную настроен как магистральный, интерфейс все равно отправляет кадры DTP из интерфейса."
    ]
  },
  {
    "time": [
      355.52,
      359.51
    ],
    "en": [
      "interface. This time SW2’s interface is configured in dynamic auto mode."
    ],
    "ru": [
      "интерфейс. На этот раз интерфейс SW2 настроен в динамическом автоматическом режиме."
    ]
  },
  {
    "time": [
      359.51,
      364.86
    ],
    "en": [
      "A switchport in dynamic auto mode does not actively try to form a trunk. It’s more passive."
    ],
    "ru": [
      "Порт коммутатора в динамическом автоматическом режиме активно не пытается сформировать магистраль. Это более пассивно."
    ]
  },
  {
    "time": [
      364.86,
      369.571
    ],
    "en": [
      "It’s more passive. It will tell SW1 ‘if you want to form a trunk, I’ll form a trunk, but I’m not"
    ],
    "ru": [
      "Это более пассивно. Он скажет SW1: «Если вы хотите сформировать ствол, я сформирую ствол, но я не"
    ]
  },
  {
    "time": [
      369.571,
      372.46
    ],
    "en": [
      "going to actively try to form a trunk with you.’"
    ],
    "ru": [
      "собираюсь активно попытаться объединиться с вами »."
    ]
  },
  {
    "time": [
      372.46,
      378.15
    ],
    "en": [
      "However, because SW1 is in dynamic desirable mode, once again a trunk will be formed."
    ],
    "ru": [
      "Однако, поскольку SW1 находится в желаемом динамическом режиме, снова будет сформирована магистраль."
    ]
  },
  {
    "time": [
      378.15,
      384.16
    ],
    "en": [
      "SW1’s SHOW INTERFACES SWITCHPORT output is the same, and SW2’s shows an administrative"
    ],
    "ru": [
      "Выход SW1 SHOW INTERFACES SWITCHPORT такой же, а SW2 показывает административный"
    ]
  },
  {
    "time": [
      384.16,
      389.79
    ],
    "en": [
      "mode of dynamic auto, and again an operational mode of trunk."
    ],
    "ru": [
      "режим динамического авто, и снова рабочий режим багажника."
    ]
  },
  {
    "time": [
      389.79,
      394.92
    ],
    "en": [
      "One more example: SW2’s interface is now manually configured as an access port with"
    ],
    "ru": [
      "Еще один пример: интерфейс SW2 теперь вручную настроен как порт доступа с"
    ]
  },
  {
    "time": [
      394.92,
      397.83
    ],
    "en": [
      "the SWITCHPORT MODE ACCESS command."
    ],
    "ru": [
      "команду SWITCHPORT MODE ACCESS."
    ]
  },
  {
    "time": [
      397.83,
      403.25
    ],
    "en": [
      "SW1 is actively trying to form a trunk, but since SW2 is manually configured in access"
    ],
    "ru": [
      "SW1 активно пытается сформировать транк, но поскольку SW2 настроен вручную в доступе"
    ]
  },
  {
    "time": [
      403.25,
      408.68
    ],
    "en": [
      "mode, the trunk will not form, and both will operate as access ports in the default VLAN,"
    ],
    "ru": [
      "режиме магистраль не будет формироваться, и оба будут работать как порты доступа в VLAN по умолчанию,"
    ]
  },
  {
    "time": [
      408.68,
      411.38
    ],
    "en": [
      "which is VLAN 1."
    ],
    "ru": [
      "который является VLAN 1."
    ]
  },
  {
    "time": [
      411.38,
      418.11
    ],
    "en": [
      "The output of SHOW INTERFACES SWITCHPORT on SW1 now shows an operational mode of static access."
    ],
    "ru": [
      "Выходные данные SHOW INTERFACES SWITCHPORT на SW1 теперь показывают рабочий режим статического доступа."
    ]
  },
  {
    "time": [
      418.11,
      420.36
    ],
    "en": [
      "access. What does ‘static access’ mean?"
    ],
    "ru": [
      "доступ. Что означает «статический доступ»?"
    ]
  },
  {
    "time": [
      420.36,
      425.121
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      420.36,
      425.121
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      425.121,
      428.58
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      425.121,
      428.58
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      428.58,
      433.4
    ],
    "en": [
      "There are also ‘dynamic access’ ports, in which a server automatically assigns the"
    ],
    "ru": [
      "Также существуют порты «динамического доступа», в которых сервер автоматически назначает"
    ]
  },
  {
    "time": [
      433.4,
      437.02
    ],
    "en": [
      "VLAN depending on the MAC address of the connected device."
    ],
    "ru": [
      "VLAN в зависимости от MAC-адреса подключенного устройства."
    ]
  },
  {
    "time": [
      437.02,
      441.24
    ],
    "en": [
      "But this is out of the scope of the CCNA, you don’t need to learn about dynamic access"
    ],
    "ru": [
      "Но это выходит за рамки CCNA, вам не нужно знать о динамическом доступе."
    ]
  },
  {
    "time": [
      441.24,
      445.39
    ],
    "en": [
      "ports, I just wanted to clarify what ‘static access’ means."
    ],
    "ru": [
      "портов, я просто хотел прояснить, что означает «статический доступ»."
    ]
  },
  {
    "time": [
      445.39,
      452.65999999999997
    ],
    "en": [
      "Now, on SW2’s g0/0 interface both the administrative and operational modes are static access."
    ],
    "ru": [
      "Теперь в интерфейсе g0 / 0 SW2 и административный, и рабочий режимы имеют статический доступ."
    ]
  },
  {
    "time": [
      452.65999999999997,
      458.081
    ],
    "en": [
      "Okay, now you’ve learned about dynamic desirable mode and seen that an interface in dynamic"
    ],
    "ru": [
      "Хорошо, теперь вы узнали о желаемом динамическом режиме и увидели, что интерфейс в динамическом"
    ]
  },
  {
    "time": [
      458.081,
      463.5
    ],
    "en": [
      "desirable mode will use DTP negotiation to form a trunk if the connected interface on"
    ],
    "ru": [
      "желаемый режим будет использовать согласование DTP для формирования магистрали, если подключенный интерфейс включен"
    ]
  },
  {
    "time": [
      463.5,
      468.81
    ],
    "en": [
      "the other device is in trunk, dynamic desirable, or dynamic auto mode."
    ],
    "ru": [
      "другое устройство находится в магистральном, желательном динамическом или динамическом автоматическом режиме."
    ]
  },
  {
    "time": [
      468.81,
      475.13
    ],
    "en": [
      "However, if the other interface is in access mode, it will not form a trunk, it will be an access port."
    ],
    "ru": [
      "Однако, если другой интерфейс находится в режиме доступа, он не будет формировать магистраль, он будет портом доступа."
    ]
  },
  {
    "time": [
      475.13,
      479.06
    ],
    "en": [
      "an access port. Now let’s look at dynamic auto mode."
    ],
    "ru": [
      "порт доступа. Теперь давайте посмотрим на динамический автоматический режим."
    ]
  },
  {
    "time": [
      479.06,
      484.16
    ],
    "en": [
      "A switchport in dynamic auto mode will NOT actively try to form a trunk with other Cisco"
    ],
    "ru": [
      "Порт коммутатора в динамическом автоматическом режиме НЕ будет активно пытаться сформировать магистраль с другими устройствами Cisco."
    ]
  },
  {
    "time": [
      484.16,
      489.1
    ],
    "en": [
      "switches, however it will form a trunk if the switch connected to it is actively trying"
    ],
    "ru": [
      "коммутаторы, однако он образует магистраль, если подключенный к нему коммутатор активно пытается"
    ]
  },
  {
    "time": [
      489.1,
      491.01
    ],
    "en": [
      "to form a trunk."
    ],
    "ru": [
      "сформировать ствол."
    ]
  },
  {
    "time": [
      491.01,
      496.02
    ],
    "en": [
      "It will form a trunk with a switchport in the following modes: switchport mode trunk,"
    ],
    "ru": [
      "Он образует магистраль с портом коммутатора в следующих режимах: магистраль в режиме порта коммутатора,"
    ]
  },
  {
    "time": [
      496.02,
      499.29
    ],
    "en": [
      "or switchport mode dynamic desirable."
    ],
    "ru": [
      "или режим switchport динамический желателен."
    ]
  },
  {
    "time": [
      499.29,
      506.71
    ],
    "en": [
      "So, SW1’s G0/0 interface is configured in dynamic auto mode, and SW2’s is manually"
    ],
    "ru": [
      "Итак, интерфейс G0 / 0 SW1 настроен в динамическом автоматическом режиме, а SW2 - вручную."
    ]
  },
  {
    "time": [
      506.71,
      508.16
    ],
    "en": [
      "configured as a trunk."
    ],
    "ru": [
      "настроен как багажник."
    ]
  },
  {
    "time": [
      508.16,
      512.69
    ],
    "en": [
      "Therefore, DTP negotiation will cause them to form a trunk link."
    ],
    "ru": [
      "Следовательно, согласование DTP заставит их сформировать магистральный канал."
    ]
  },
  {
    "time": [
      512.69,
      518.18
    ],
    "en": [
      "Here you can see the administrative mode of dynamic auto and operational mode of trunk,"
    ],
    "ru": [
      "Здесь вы можете увидеть административный режим динамического авто и рабочий режим транка,"
    ]
  },
  {
    "time": [
      518.18,
      521.63
    ],
    "en": [
      "whereas on SW2 both are trunk."
    ],
    "ru": [
      "тогда как на SW2 оба являются магистральными."
    ]
  },
  {
    "time": [
      521.63,
      527.65
    ],
    "en": [
      "Now, we already saw what happens when a switchport in dynamic auto mode is connected to a switchport"
    ],
    "ru": [
      "Теперь мы уже видели, что происходит, когда порт коммутатора в динамическом автоматическом режиме подключается к порту коммутатора."
    ]
  },
  {
    "time": [
      527.65,
      530.31
    ],
    "en": [
      "in dynamic desirable mode, they form a trunk."
    ],
    "ru": [
      "в желаемом динамическом режиме они образуют ствол."
    ]
  },
  {
    "time": [
      530.31,
      534.08
    ],
    "en": [
      "So, let’s look at two switchports in dynamic auto mode."
    ],
    "ru": [
      "Итак, давайте посмотрим на два порта переключения в динамическом автоматическом режиме."
    ]
  },
  {
    "time": [
      534.08,
      541.06
    ],
    "en": [
      "Neither is actively trying to form a trunk, so both operate as access ports in the default VLAN, VLAN1."
    ],
    "ru": [
      "Ни один из них не пытается активно сформировать магистраль, поэтому оба работают как порты доступа в VLAN по умолчанию, VLAN1."
    ]
  },
  {
    "time": [
      541.06,
      546.191
    ],
    "en": [
      "VLAN, VLAN1. And they have the same output for the SHOW INTERFACES SWITCHPORT command, administrative"
    ],
    "ru": [
      "VLAN, VLAN1. И они имеют тот же вывод для команды SHOW INTERFACES SWITCHPORT, административной"
    ]
  },
  {
    "time": [
      546.191,
      551.71
    ],
    "en": [
      "mode of dynamic auto and operational mode of static access."
    ],
    "ru": [
      "режим динамического авто и рабочий режим статического доступа."
    ]
  },
  {
    "time": [
      551.71,
      554.45
    ],
    "en": [
      "Next up, dynamic auto and access mode."
    ],
    "ru": [
      "Далее, динамический авто и режим доступа."
    ]
  },
  {
    "time": [
      554.45,
      561.16
    ],
    "en": [
      "As you can probably guess, this will result in both interfaces operating as access ports."
    ],
    "ru": [
      "Как вы, вероятно, догадались, в результате оба интерфейса будут работать как порты доступа."
    ]
  },
  {
    "time": [
      561.16,
      565.59
    ],
    "en": [
      "Here is the output of SHOW INTERFACES SWITCHPORT on each switch."
    ],
    "ru": [
      "Вот результат SHOW INTERFACES SWITCHPORT на каждом переключателе."
    ]
  },
  {
    "time": [
      565.59,
      573.41
    ],
    "en": [
      "Now, you may wonder what happens if a manually configured trunk is connected to a manually configured access port?"
    ],
    "ru": [
      "Теперь вы можете задаться вопросом, что произойдет, если настроенная вручную магистраль будет подключена к настраиваемому вручную порту доступа?"
    ]
  },
  {
    "time": [
      573.41,
      581.14
    ],
    "en": [
      "configured access port? Well, since both are manually configured, they are forced to operate mismatched in trunk and access modes."
    ],
    "ru": [
      "настроили порт доступа? Что ж, поскольку оба настраиваются вручную, они вынуждены работать несовместимо в режимах магистрали и доступа."
    ]
  },
  {
    "time": [
      581.14,
      584.86
    ],
    "en": [
      "and access modes. Here is the output of SHOW INTERFACES SWITCHPORT for each."
    ],
    "ru": [
      "и режимы доступа. Вот результат SHOW INTERFACES SWITCHPORT для каждого."
    ]
  },
  {
    "time": [
      584.86,
      589.83
    ],
    "en": [
      "However, this configuration does not work, it should result in an error, and traffic"
    ],
    "ru": [
      "Однако эта конфигурация не работает, она должна привести к ошибке, и трафик"
    ]
  },
  {
    "time": [
      589.83,
      592.18
    ],
    "en": [
      "will not pass between these switches."
    ],
    "ru": [
      "не будет проходить между этими переключателями."
    ]
  },
  {
    "time": [
      592.18,
      598.71
    ],
    "en": [
      "Here’s a chart summarizing the resulting operational mode given two administrative modes."
    ],
    "ru": [
      "Вот диаграмма, показывающая результирующий рабочий режим с учетом двух административных режимов."
    ]
  },
  {
    "time": [
      598.71,
      603.37
    ],
    "en": [
      "modes. For example, a switchport in dynamic desirable mode will form a trunk with an interface in"
    ],
    "ru": [
      "режимы. Например, порт коммутатора в динамическом желаемом режиме будет формировать магистраль с интерфейсом в"
    ]
  },
  {
    "time": [
      603.37,
      606.7
    ],
    "en": [
      "any administrative mode except access."
    ],
    "ru": [
      "любой административный режим, кроме доступа."
    ]
  },
  {
    "time": [
      606.7,
      610.33
    ],
    "en": [
      "Pause the video here if you want to take a look at this table."
    ],
    "ru": [
      "Приостановите видео здесь, если хотите взглянуть на эту таблицу."
    ]
  },
  {
    "time": [
      610.33,
      613.44
    ],
    "en": [
      "Now, one more important point."
    ],
    "ru": [
      "А теперь еще один важный момент."
    ]
  },
  {
    "time": [
      613.44,
      618.22
    ],
    "en": [
      "DTP will not form a trunk with a router, PC, etc."
    ],
    "ru": [
      "DTP не образует транк с маршрутизатором, ПК и т. Д."
    ]
  },
  {
    "time": [
      618.22,
      619.99
    ],
    "en": [
      "The switchport will be in access mode."
    ],
    "ru": [
      "Коммутатор будет в режиме доступа."
    ]
  },
  {
    "time": [
      619.99,
      625.71
    ],
    "en": [
      "So, if you want to configure router on a stick, you must manually configure the interface"
    ],
    "ru": [
      "Итак, если вы хотите настроить роутер на флешке, вы должны вручную настроить интерфейс."
    ]
  },
  {
    "time": [
      625.71,
      630.82
    ],
    "en": [
      "connected to the router as a trunk, you cannot put it in dynamic desirable mode and expect"
    ],
    "ru": [
      "подключен к маршрутизатору как транк, вы не можете перевести его в желаемый динамический режим и ожидать"
    ]
  },
  {
    "time": [
      630.82,
      633.89
    ],
    "en": [
      "it to become a trunk."
    ],
    "ru": [
      "это стать стволом."
    ]
  },
  {
    "time": [
      633.89,
      637.19
    ],
    "en": [
      "Let me cover a few more points about DTP."
    ],
    "ru": [
      "Позвольте мне коснуться еще нескольких моментов, касающихся DTP."
    ]
  },
  {
    "time": [
      637.19,
      643.51
    ],
    "en": [
      "On older switches, switchport mode dynamic desirable is the default administrative mode."
    ],
    "ru": [
      "На более старых коммутаторах желательно динамический режим switchport в качестве административного режима по умолчанию."
    ]
  },
  {
    "time": [
      643.51,
      646.06
    ],
    "en": [
      "They will actively try to form trunk links."
    ],
    "ru": [
      "Они будут активно пытаться формировать магистральные ссылки."
    ]
  },
  {
    "time": [
      646.06,
      653.23
    ],
    "en": [
      "However, on newer switchers, switchport mode dynamic auto is the default administrative mode."
    ],
    "ru": [
      "Однако на более новых коммутаторах динамический автоматический режим switchport mode является административным режимом по умолчанию."
    ]
  },
  {
    "time": [
      653.23,
      660.27
    ],
    "en": [
      "mode. You can disable DTP negotiation on an interface with this command: switchport nonegotiate."
    ],
    "ru": [
      "режим. Вы можете отключить согласование DTP на интерфейсе с помощью этой команды: switchport nonegotiate."
    ]
  },
  {
    "time": [
      660.27,
      666.03
    ],
    "en": [
      "If you use this command, the interface will stop sending DTP negotiation frames."
    ],
    "ru": [
      "Если вы воспользуетесь этой командой, интерфейс перестанет отправлять кадры согласования DTP."
    ]
  },
  {
    "time": [
      666.03,
      673.9
    ],
    "en": [
      "By the way, configuring an access port with switchport mode access also disables DTP negotiation on an interface."
    ],
    "ru": [
      "Между прочим, настройка порта доступа с доступом в режиме порта коммутатора также отключает согласование DTP на интерфейсе."
    ]
  },
  {
    "time": [
      673.9,
      677.04
    ],
    "en": [
      "on an interface. It will also stop sending DTP frames."
    ],
    "ru": [
      "на интерфейсе. Он также прекратит отправку кадров DTP."
    ]
  },
  {
    "time": [
      677.04,
      681.34
    ],
    "en": [
      "If you manually configure an interface in trunk mode, however, it does not stop it from"
    ],
    "ru": [
      "Однако если вы вручную настроите интерфейс в режиме магистрали, это не остановит его"
    ]
  },
  {
    "time": [
      681.34,
      688.01
    ],
    "en": [
      "sending DTP frames, unless you also issue the SWITCHPORT NONEGOTIATE command above."
    ],
    "ru": [
      "отправка кадров DTP, если вы также не введете команду SWITCHPORT NONEGOTIATE выше."
    ]
  },
  {
    "time": [
      688.01,
      693.76
    ],
    "en": [
      "As I said before, it is recommended that you disable DTP on all switchports and manually"
    ],
    "ru": [
      "Как я сказал ранее, рекомендуется отключить DTP на всех портах коммутатора и вручную."
    ]
  },
  {
    "time": [
      693.76,
      697.82
    ],
    "en": [
      "configure them as access or trunk ports."
    ],
    "ru": [
      "сконфигурируйте их как порты доступа или магистральные порты."
    ]
  },
  {
    "time": [
      697.82,
      702.32
    ],
    "en": [
      "Now let me talk about trunk encapsulation negotiation."
    ],
    "ru": [
      "Теперь позвольте мне поговорить о согласовании инкапсуляции магистрали."
    ]
  },
  {
    "time": [
      702.32,
      708.34
    ],
    "en": [
      "Switches that support both dot1q and ISL trunk encapsulations can use DTP to negotiate the"
    ],
    "ru": [
      "Коммутаторы, поддерживающие инкапсуляцию соединительных линий dot1q и ISL, могут использовать DTP для согласования"
    ]
  },
  {
    "time": [
      708.34,
      711.06
    ],
    "en": [
      "encapsulation they will use."
    ],
    "ru": [
      "инкапсуляция, которую они будут использовать."
    ]
  },
  {
    "time": [
      711.06,
      719.13
    ],
    "en": [
      "This negotiation is enabled by default, as the default trunk encapsulation mode is: switchport trunk encapsulation negotiate."
    ],
    "ru": [
      "Это согласование включено по умолчанию, так как режим инкапсуляции магистрали по умолчанию: согласование инкапсуляции магистрали порта коммутатора."
    ]
  },
  {
    "time": [
      719.13,
      723.25
    ],
    "en": [
      "trunk encapsulation negotiate. I mentioned this in a previous video on VLANs."
    ],
    "ru": [
      "согласование инкапсуляции магистрали. Я упоминал об этом в предыдущем видео о VLAN."
    ]
  },
  {
    "time": [
      723.25,
      727.99
    ],
    "en": [
      "If you want to manually configure a trunk interface on a switch that supports both dot1q"
    ],
    "ru": [
      "Если вы хотите вручную настроить магистральный интерфейс на коммутаторе, который поддерживает как dot1q"
    ]
  },
  {
    "time": [
      727.99,
      736.01
    ],
    "en": [
      "and ISL, you must first change the encapsulation mode to dot1q or ISL, you can’t leave it in negotiate mode."
    ],
    "ru": [
      "и ISL, вы должны сначала изменить режим инкапсуляции на dot1q или ISL, вы не можете оставить его в режиме согласования."
    ]
  },
  {
    "time": [
      736.01,
      743.55
    ],
    "en": [
      "in negotiate mode. ISL is favored over dot1q, so if both switches support ISL it will be selected."
    ],
    "ru": [
      "в режиме переговоров. ISL предпочтительнее dot1q, поэтому, если оба коммутатора поддерживают ISL, он будет выбран."
    ]
  },
  {
    "time": [
      743.55,
      750.73
    ],
    "en": [
      "By the way, the DTP frames that DTP uses to negotiate are sent in VLAN1 when using ISL,"
    ],
    "ru": [
      "Между прочим, кадры DTP, которые DTP использует для согласования, отправляются в VLAN1 при использовании ISL,"
    ]
  },
  {
    "time": [
      750.73,
      754.09
    ],
    "en": [
      "or in the native VLAN when using dot1q."
    ],
    "ru": [
      "или в собственной VLAN при использовании dot1q."
    ]
  },
  {
    "time": [
      754.09,
      759.18
    ],
    "en": [
      "The default native VLAN is VLAN1, however, so unless you change the native VLAN they"
    ],
    "ru": [
      "Однако собственная VLAN по умолчанию - VLAN1, поэтому, если вы не измените собственную VLAN, они"
    ]
  },
  {
    "time": [
      759.18,
      762.0
    ],
    "en": [
      "will be sent in VLAN1 for dot1q also."
    ],
    "ru": [
      "также будет отправлено в VLAN1 для dot1q."
    ]
  },
  {
    "time": [
      762.0,
      771.93
    ],
    "en": [
      "To show you this negotiation of trunking encapsulation, here is a little more of the output from SHOW INTERFACES SWITCHPORT."
    ],
    "ru": [
      "Чтобы показать вам это согласование инкапсуляции транкинга, вот еще немного выходных данных SHOW INTERFACES SWITCHPORT."
    ]
  },
  {
    "time": [
      771.93,
      778.23
    ],
    "en": [
      "INTERFACES SWITCHPORT. I set the interfaces on both switches to dynamic desirable mode so they would form a trunk."
    ],
    "ru": [
      "ПЕРЕКЛЮЧАТЕЛЬ ИНТЕРФЕЙСОВ. Я установил интерфейсы на обоих коммутаторах в желаемый динамический режим, чтобы они образовали магистраль."
    ]
  },
  {
    "time": [
      778.23,
      782.96
    ],
    "en": [
      "Notice that the default trunking encapsulation mode of negotiate results in an operational"
    ],
    "ru": [
      "Обратите внимание, что режим согласования по умолчанию для транкинговой инкапсуляции приводит к рабочему"
    ]
  },
  {
    "time": [
      782.96,
      786.27
    ],
    "en": [
      "trunking encapsulation of ISL."
    ],
    "ru": [
      "транковая инкапсуляция ISL."
    ]
  },
  {
    "time": [
      786.27,
      792.13
    ],
    "en": [
      "By the way, this field down here, negotiation of trunking, shows whether DTP is enabled,"
    ],
    "ru": [
      "Между прочим, это поле внизу, согласование транкинга, показывает, включен ли DTP,"
    ]
  },
  {
    "time": [
      792.13,
      796.27
    ],
    "en": [
      "whether the interface is sending DTP frames or not."
    ],
    "ru": [
      "отправляет ли интерфейс кадры DTP или нет."
    ]
  },
  {
    "time": [
      796.27,
      804.17
    ],
    "en": [
      "If the interface is in dynamic desirable, dynamic auto, or trunk mode, this will be on."
    ],
    "ru": [
      "Если интерфейс находится в желаемом динамическом, динамическом автоматическом или магистральном режиме, он будет включен."
    ]
  },
  {
    "time": [
      804.17,
      808.92
    ],
    "en": [
      "on. If it’s in access mode, or if you use the switchport nonegotiate command I showed you"
    ],
    "ru": [
      "на. Если он находится в режиме доступа или если вы используете команду switchport nonegotiate, которую я вам показал"
    ]
  },
  {
    "time": [
      808.92,
      810.93
    ],
    "en": [
      "before, this will be off."
    ],
    "ru": [
      "раньше это будет отключено."
    ]
  },
  {
    "time": [
      810.93,
      815.36
    ],
    "en": [
      "Okay, that was a good deal of information about DTP."
    ],
    "ru": [
      "Хорошо, это было много информации о DTP."
    ]
  },
  {
    "time": [
      815.36,
      819.741
    ],
    "en": [
      "I’m quite sure that you won’t need any more information than that for the CCNA when"
    ],
    "ru": [
      "Я совершенно уверен, что вам не понадобится больше информации, чем для CCNA, когда"
    ]
  },
  {
    "time": [
      819.741,
      822.61
    ],
    "en": [
      "it comes to DTP."
    ],
    "ru": [
      "речь идет о АКДС."
    ]
  },
  {
    "time": [
      822.61,
      827.54
    ],
    "en": [
      "If you need extra review, watch the section again, try out the configurations in packet"
    ],
    "ru": [
      "Если вам нужен дополнительный обзор, посмотрите раздел еще раз, попробуйте конфигурации в пакете"
    ]
  },
  {
    "time": [
      827.54,
      832.9
    ],
    "en": [
      "tracer yourself, and then try my packet tracer practice lab which will be in the next video."
    ],
    "ru": [
      "tracer самостоятельно, а затем попробуйте мою практическую лабораторию по пакетному трассировщику, которая будет в следующем видео."
    ]
  },
  {
    "time": [
      832.9,
      840.49
    ],
    "en": [
      "Next, let’s move on to today’s second topic, VTP, VLAN Trunking Protocol."
    ],
    "ru": [
      "Далее, давайте перейдем ко второй сегодняшней теме, VTP, протоколу VLAN Trunking."
    ]
  },
  {
    "time": [
      840.49,
      846.76
    ],
    "en": [
      "VTP allows you to configure VLANs on a central server switch, and other switches (called"
    ],
    "ru": [
      "VTP позволяет настраивать VLAN на коммутаторе центрального сервера и других коммутаторах (называемых"
    ]
  },
  {
    "time": [
      846.76,
      852.03
    ],
    "en": [
      "VTP clients) will synchronize their VLAN database to the server."
    ],
    "ru": [
      "Клиенты VTP) синхронизируют свою базу данных VLAN с сервером."
    ]
  },
  {
    "time": [
      852.03,
      856.69
    ],
    "en": [
      "It is designed for large networks with many VLANs, so that you don’t have to configure"
    ],
    "ru": [
      "Он разработан для больших сетей с большим количеством виртуальных локальных сетей, поэтому вам не нужно настраивать"
    ]
  },
  {
    "time": [
      856.69,
      859.44
    ],
    "en": [
      "each VLAN on every single switch."
    ],
    "ru": [
      "каждая VLAN на каждом коммутаторе."
    ]
  },
  {
    "time": [
      859.44,
      866.2
    ],
    "en": [
      "However, like DTP it is rarely used, and it is recommended that you do not use it."
    ],
    "ru": [
      "Однако, как и DTP, он используется редко, и вам не рекомендуется его использовать."
    ]
  },
  {
    "time": [
      866.2,
      870.91
    ],
    "en": [
      "I will show you one reason why it is recommended that you do not use it later."
    ],
    "ru": [
      "Я покажу вам одну причину, по которой не рекомендуется использовать его позже."
    ]
  },
  {
    "time": [
      870.91,
      875.529
    ],
    "en": [
      "There are three versions of VTP, 1, 2 and 3."
    ],
    "ru": [
      "Существует три версии VTP: 1, 2 и 3."
    ]
  },
  {
    "time": [
      875.529,
      882.1
    ],
    "en": [
      "Most modern Cisco switches support all three, but older switches might only support 1 and 2."
    ],
    "ru": [
      "Большинство современных коммутаторов Cisco поддерживают все три, но старые коммутаторы могут поддерживать только 1 и 2."
    ]
  },
  {
    "time": [
      882.1,
      886.16
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      882.1,
      886.16
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      886.16,
      894.03
    ],
    "en": [
      "There are three VTP modes that a switch can operate in: server, client, and transparent."
    ],
    "ru": [
      "Коммутатор может работать в трех режимах VTP: серверный, клиентский и прозрачный."
    ]
  },
  {
    "time": [
      894.03,
      897.98
    ],
    "en": [
      "Cisco switches operate in VTP server mode by default."
    ],
    "ru": [
      "Коммутаторы Cisco по умолчанию работают в режиме сервера VTP."
    ]
  },
  {
    "time": [
      897.98,
      902.35
    ],
    "en": [
      "Let’s talk about the different VTP modes."
    ],
    "ru": [
      "Поговорим о различных режимах VTP."
    ]
  },
  {
    "time": [
      902.35,
      909.04
    ],
    "en": [
      "First up, VTP servers. They can add, modify, and delete VLANs."
    ],
    "ru": [
      "Во-первых, серверы VTP. Они могут добавлять, изменять и удалять сети VLAN."
    ]
  },
  {
    "time": [
      909.04,
      914.6
    ],
    "en": [
      "As I said, Cisco switches operate in VTP server mode by default, so you can modify the VLAN"
    ],
    "ru": [
      "Как я уже сказал, коммутаторы Cisco по умолчанию работают в режиме VTP-сервера, поэтому вы можете изменить VLAN."
    ]
  },
  {
    "time": [
      914.6,
      918.05
    ],
    "en": [
      "database on Cisco switches by default."
    ],
    "ru": [
      "база данных на коммутаторах Cisco по умолчанию."
    ]
  },
  {
    "time": [
      918.05,
      924.25
    ],
    "en": [
      "They store the VLAN database in non-volatile RAM, also called NVRAM."
    ],
    "ru": [
      "Они хранят базу данных VLAN в энергонезависимой оперативной памяти, также называемой NVRAM."
    ]
  },
  {
    "time": [
      924.25,
      929.58
    ],
    "en": [
      "This means the VLAN database is saved even if the switch is turned off or reloaded."
    ],
    "ru": [
      "Это означает, что база данных VLAN сохраняется даже при выключении или перезагрузке коммутатора."
    ]
  },
  {
    "time": [
      929.58,
      937.79
    ],
    "en": [
      "VTP servers will increase the REVISION NUMBER every time a VLAN is added, modified, or deleted."
    ],
    "ru": [
      "Серверы VTP будут увеличивать НОМЕР РЕДАКТИРОВАНИЯ каждый раз, когда VLAN добавляется, изменяется или удаляется."
    ]
  },
  {
    "time": [
      937.79,
      940.82
    ],
    "en": [
      "This revision number is a very important part of VTP."
    ],
    "ru": [
      "Этот номер версии - очень важная часть VTP."
    ]
  },
  {
    "time": [
      940.82,
      946.68
    ],
    "en": [
      "It’s what VTP uses to determine the newest version of the VLAN database, the version"
    ],
    "ru": [
      "Это то, что VTP использует для определения последней версии базы данных VLAN, версии"
    ]
  },
  {
    "time": [
      946.68,
      949.25
    ],
    "en": [
      "that the switches will synchronize to."
    ],
    "ru": [
      "с которым будут синхронизироваться переключатели."
    ]
  },
  {
    "time": [
      949.25,
      955.71
    ],
    "en": [
      "VTP servers will advertise the latest version of the VLAN database on trunk interfaces and"
    ],
    "ru": [
      "Серверы VTP будут анонсировать последнюю версию базы данных VLAN на магистральных интерфейсах и"
    ]
  },
  {
    "time": [
      955.71,
      959.86
    ],
    "en": [
      "the VTP clients will synchronize their VLAN database to it."
    ],
    "ru": [
      "клиенты VTP синхронизируют с ним свою базу данных VLAN."
    ]
  },
  {
    "time": [
      959.86,
      965.92
    ],
    "en": [
      "So, VTP advertisements aren’t sent on access ports, only on trunk ports."
    ],
    "ru": [
      "Таким образом, рекламные объявления VTP отправляются не на порты доступа, а только на магистральные порты."
    ]
  },
  {
    "time": [
      965.92,
      973.07
    ],
    "en": [
      "Here’s another important point: VTP servers also function as VTP clients."
    ],
    "ru": [
      "Вот еще один важный момент: серверы VTP также работают как клиенты VTP."
    ]
  },
  {
    "time": [
      973.07,
      974.54
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      974.54,
      979.63
    ],
    "en": [
      "It means that a VTP server will synchronize to another VTP server with a higher revision"
    ],
    "ru": [
      "Это означает, что сервер VTP будет синхронизироваться с другим сервером VTP с более высокой версией."
    ]
  },
  {
    "time": [
      979.63,
      984.67
    ],
    "en": [
      "number, because the highest revision number is considered the newest, most accurate version"
    ],
    "ru": [
      "номер, потому что самый высокий номер редакции считается самой новой и точной версией"
    ]
  },
  {
    "time": [
      984.67,
      987.38
    ],
    "en": [
      "of the VLAN database."
    ],
    "ru": [
      "базы данных VLAN."
    ]
  },
  {
    "time": [
      987.38,
      990.12
    ],
    "en": [
      "Now let’s talk about VTP clients a little."
    ],
    "ru": [
      "Теперь немного поговорим о клиентах VTP."
    ]
  },
  {
    "time": [
      990.12,
      995.39
    ],
    "en": [
      "VTP clients cannot add, modify, or delete VLANs."
    ],
    "ru": [
      "Клиенты VTP не могут добавлять, изменять или удалять сети VLAN."
    ]
  },
  {
    "time": [
      995.39,
      1001.32
    ],
    "en": [
      "If you try to add, modify, or delete a VLAN in the CLI, the command will be rejected."
    ],
    "ru": [
      "Если вы попытаетесь добавить, изменить или удалить VLAN в интерфейсе командной строки, команда будет отклонена."
    ]
  },
  {
    "time": [
      1001.32,
      1010.97
    ],
    "en": [
      "VTP clients do not store the VLAN database in NVRAM, however in the newest VTP version, VTPv3, they do."
    ],
    "ru": [
      "Клиенты VTP не хранят базу данных VLAN в NVRAM, однако в новейшей версии VTP, VTPv3, они хранят."
    ]
  },
  {
    "time": [
      1010.97,
      1016.029
    ],
    "en": [
      "VTPv3, they do. VTP clients will synchronize their VLAN database to the server with the highest revision number"
    ],
    "ru": [
      "VTPv3, да. Клиенты VTP будут синхронизировать свою базу данных VLAN с сервером с наивысшим номером версии."
    ]
  },
  {
    "time": [
      1016.029,
      1018.08
    ],
    "en": [
      "in their VTP domain."
    ],
    "ru": [
      "в их домене VTP."
    ]
  },
  {
    "time": [
      1018.08,
      1021.47
    ],
    "en": [
      "I will talk about VTP domains soon."
    ],
    "ru": [
      "Я скоро расскажу о доменах VTP."
    ]
  },
  {
    "time": [
      1021.47,
      1027.28
    ],
    "en": [
      "Finally, VTP clients will advertise their VLAN database, and forward VLAN advertisements"
    ],
    "ru": [
      "Наконец, клиенты VTP будут анонсировать свою базу данных VLAN и пересылать объявления VLAN."
    ]
  },
  {
    "time": [
      1027.28,
      1029.76
    ],
    "en": [
      "to other clients over their trunk ports."
    ],
    "ru": [
      "другим клиентам через их магистральные порты."
    ]
  },
  {
    "time": [
      1029.76,
      1032.79
    ],
    "en": [
      "Okay, that’s enough information for now."
    ],
    "ru": [
      "Хорошо, на данный момент достаточно информации."
    ]
  },
  {
    "time": [
      1032.79,
      1039.16
    ],
    "en": [
      "I will talk about the third VTP mode, VTP transparent, later."
    ],
    "ru": [
      "О третьем режиме VTP, VTP transparent, я расскажу позже."
    ]
  },
  {
    "time": [
      1039.16,
      1041.67
    ],
    "en": [
      "So let’s look at how VTP works."
    ],
    "ru": [
      "Итак, давайте посмотрим, как работает VTP."
    ]
  },
  {
    "time": [
      1041.67,
      1046.37
    ],
    "en": [
      "These are four switches, and I’ve configured all of their interfaces as trunks, so they"
    ],
    "ru": [
      "Это четыре коммутатора, и я настроил все их интерфейсы как магистральные, поэтому они"
    ]
  },
  {
    "time": [
      1046.37,
      1051.16
    ],
    "en": [
      "will send and receive VTP advertisements between each other."
    ],
    "ru": [
      "будут отправлять и получать рекламные объявления VTP между собой."
    ]
  },
  {
    "time": [
      1051.16,
      1057.51
    ],
    "en": [
      "Here is the output of a very useful command, SHOW VTP STATUS, on SW1."
    ],
    "ru": [
      "Вот результат очень полезной команды SHOW VTP STATUS на SW1."
    ]
  },
  {
    "time": [
      1057.51,
      1062.69
    ],
    "en": [
      "All of these switches have the default configuration, so their output will be mostly the same."
    ],
    "ru": [
      "Все эти переключатели имеют конфигурацию по умолчанию, поэтому их выход в основном будет одинаковым."
    ]
  },
  {
    "time": [
      1062.69,
      1066.4
    ],
    "en": [
      "Let’s look at some of these fields."
    ],
    "ru": [
      "Давайте посмотрим на некоторые из этих полей."
    ]
  },
  {
    "time": [
      1066.4,
      1072.1
    ],
    "en": [
      "These fields here shows that the switch is capable of running VTP version 1, 2, or 3,"
    ],
    "ru": [
      "Эти поля показывают, что коммутатор может работать с VTP версии 1, 2 или 3,"
    ]
  },
  {
    "time": [
      1072.1,
      1075.45
    ],
    "en": [
      "but it is running version 1 at the moment, the default."
    ],
    "ru": [
      "но на данный момент он работает под управлением версии 1, по умолчанию."
    ]
  },
  {
    "time": [
      1075.45,
      1079.13
    ],
    "en": [
      "Notice that there is no domain name."
    ],
    "ru": [
      "Обратите внимание на отсутствие доменного имени."
    ]
  },
  {
    "time": [
      1079.13,
      1083.47
    ],
    "en": [
      "By default the domain name is NULL, there is no domain name."
    ],
    "ru": [
      "По умолчанию имя домена NULL, имя домена отсутствует."
    ]
  },
  {
    "time": [
      1083.47,
      1087.68
    ],
    "en": [
      "If we want VTP to synchronize among these devices, we will need to configure them all"
    ],
    "ru": [
      "Если мы хотим, чтобы VTP синхронизировался между этими устройствами, нам нужно будет настроить их все."
    ]
  },
  {
    "time": [
      1087.68,
      1090.96
    ],
    "en": [
      "with the same VTP domain name."
    ],
    "ru": [
      "с тем же доменным именем VTP."
    ]
  },
  {
    "time": [
      1090.96,
      1092.33
    ],
    "en": [
      "Now look down here."
    ],
    "ru": [
      "Теперь посмотри сюда."
    ]
  },
  {
    "time": [
      1092.33,
      1096.89
    ],
    "en": [
      "You can see the default VTP operating mode of server."
    ],
    "ru": [
      "Вы можете увидеть режим работы сервера VTP по умолчанию."
    ]
  },
  {
    "time": [
      1096.89,
      1101.81
    ],
    "en": [
      "Notice the maximum number of VLANs supported locally is 1005."
    ],
    "ru": [
      "Обратите внимание, что максимальное количество поддерживаемых локальных сетей VLAN - 1005."
    ]
  },
  {
    "time": [
      1101.81,
      1110.33
    ],
    "en": [
      "This is because VTP version 1 and version 2 do not support the extended VLAN range of 1006 to 4094."
    ],
    "ru": [
      "Это связано с тем, что VTP версии 1 и версии 2 не поддерживают расширенный диапазон VLAN от 1006 до 4094."
    ]
  },
  {
    "time": [
      1110.33,
      1115.309
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1110.33,
      1115.309
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1115.309,
      1118.42
    ],
    "en": [
      "to use VTP version 3."
    ],
    "ru": [
      "использовать VTP версии 3."
    ]
  },
  {
    "time": [
      1118.42,
      1124.19
    ],
    "en": [
      "The number of existing VLANs is 5, those are the VLANs that exist by default on the switch,"
    ],
    "ru": [
      "Количество существующих VLAN - 5, это те VLAN, которые существуют по умолчанию на коммутаторе,"
    ]
  },
  {
    "time": [
      1124.19,
      1128.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1124.19,
      1128.0
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1128.0,
      1131.91
    ],
    "en": [
      "Finally, look at the configuration reivision number."
    ],
    "ru": [
      "Наконец, посмотрите на номер переиздания конфигурации."
    ]
  },
  {
    "time": [
      1131.91,
      1133.71
    ],
    "en": [
      "It is 0 at the moment."
    ],
    "ru": [
      "На данный момент это 0."
    ]
  },
  {
    "time": [
      1133.71,
      1139.7
    ],
    "en": [
      "If I add, modify, or delete a VLAN this will increase to 1, and SW1 will advertise this"
    ],
    "ru": [
      "Если я добавлю, изменю или удалю VLAN, это увеличится до 1, и SW1 объявит об этом."
    ]
  },
  {
    "time": [
      1139.7,
      1142.8
    ],
    "en": [
      "to VTP clients in the same domain."
    ],
    "ru": [
      "клиентам VTP в том же домене."
    ]
  },
  {
    "time": [
      1142.8,
      1147.48
    ],
    "en": [
      "It will also update its own VLAN database if it receives a VTP advertisement with a higher"
    ],
    "ru": [
      "Он также обновит свою собственную базу данных VLAN, если получит объявление VTP с более высоким"
    ]
  },
  {
    "time": [
      1147.48,
      1152.53
    ],
    "en": [
      "revision number, because VTP servers function as VTP clients also."
    ],
    "ru": [
      "номер версии, поскольку серверы VTP также работают как клиенты VTP."
    ]
  },
  {
    "time": [
      1152.53,
      1160.72
    ],
    "en": [
      "So, I used the command VTP DOMAIN CISCO to change SW1’s VTP domain name to cisco."
    ],
    "ru": [
      "Итак, я использовал команду VTP DOMAIN CISCO, чтобы изменить имя домена VTP SW1 на cisco."
    ]
  },
  {
    "time": [
      1160.72,
      1166.01
    ],
    "en": [
      "I then made a vlan, VLAN10, and named it engineering."
    ],
    "ru": [
      "Затем я создал vlan, VLAN10, и назвал его инженерным."
    ]
  },
  {
    "time": [
      1166.01,
      1175.42
    ],
    "en": [
      "So, because I added a VLAN, if I do SHOW VTP STATUS again, we should see that the revision number has increased."
    ],
    "ru": [
      "Итак, поскольку я добавил VLAN, если я снова покажу СТАТУС VTP, мы должны увидеть, что номер версии увеличился."
    ]
  },
  {
    "time": [
      1175.42,
      1180.77
    ],
    "en": [
      "number has increased. You can now see that the VTP domain name has changed to Cisco, the number of existing VLANs"
    ],
    "ru": [
      "число увеличилось. Теперь вы можете видеть, что имя домена VTP изменилось на Cisco, количество существующих VLAN"
    ]
  },
  {
    "time": [
      1180.77,
      1184.35
    ],
    "en": [
      "is 6, and the revision number has increased to 1."
    ],
    "ru": [
      "равно 6, а номер ревизии увеличился до 1."
    ]
  },
  {
    "time": [
      1184.35,
      1187.54
    ],
    "en": [
      "Now let’s go check on the other switches."
    ],
    "ru": [
      "А теперь давайте проверим другие переключатели."
    ]
  },
  {
    "time": [
      1187.54,
      1191.26
    ],
    "en": [
      "Okay, so something interesting has occurred."
    ],
    "ru": [
      "Итак, произошло кое-что интересное."
    ]
  },
  {
    "time": [
      1191.26,
      1197.03
    ],
    "en": [
      "Without any configuration, SW2 has changed its domain name to cisco and updated its VLAN"
    ],
    "ru": [
      "Без какой-либо конфигурации SW2 изменил свое доменное имя на cisco и обновил свою VLAN."
    ]
  },
  {
    "time": [
      1197.03,
      1202.24
    ],
    "en": [
      "database to match SW1’s, with a revision number of 1."
    ],
    "ru": [
      "база данных для соответствия SW1 с номером версии 1."
    ]
  },
  {
    "time": [
      1202.24,
      1208.821
    ],
    "en": [
      "If a switch with no VTP domain (or domain NULL) receives a VTP advertisement with a VTP domain"
    ],
    "ru": [
      "Если коммутатор без домена VTP (или домена NULL) получает объявление VTP с доменом VTP"
    ]
  },
  {
    "time": [
      1208.821,
      1212.83
    ],
    "en": [
      "name, it will automatically join that VTP domain."
    ],
    "ru": [
      "имя, он автоматически присоединится к этому домену VTP."
    ]
  },
  {
    "time": [
      1212.83,
      1217.73
    ],
    "en": [
      "So, SW2 automatically joined the domain cisco."
    ],
    "ru": [
      "Итак, SW2 автоматически присоединился к домену cisco."
    ]
  },
  {
    "time": [
      1217.73,
      1223.25
    ],
    "en": [
      "As I said before, If a switch receives a VTP advertisement in the same VTP domain with"
    ],
    "ru": [
      "Как я уже говорил ранее, если коммутатор получает объявление VTP в том же домене VTP с"
    ]
  },
  {
    "time": [
      1223.25,
      1228.65
    ],
    "en": [
      "a higher revision number, it will update its VLAN database to match."
    ],
    "ru": [
      "более высокий номер версии, он обновит свою базу данных VLAN для соответствия."
    ]
  },
  {
    "time": [
      1228.65,
      1237.54
    ],
    "en": [
      "If I do SHOW VLAN BRIEF on SW2 now, you can see that VLAN10, with the name ‘engineering’, was added."
    ],
    "ru": [
      "Если я сделаю SHOW VLAN BRIEF на SW2, вы увидите, что VLAN10 с именем «engineering» был добавлен."
    ]
  },
  {
    "time": [
      1237.54,
      1243.791
    ],
    "en": [
      "was added. Here you can see that the advertisements were passed along to SW3 and SW4 as well, and they"
    ],
    "ru": [
      "был добавлен. Здесь вы можете видеть, что рекламные объявления также передавались в SW3 и SW4, и они"
    ]
  },
  {
    "time": [
      1243.791,
      1247.22
    ],
    "en": [
      "joined the domain and updated their VLAN database as well."
    ],
    "ru": [
      "присоединились к домену и также обновили свою базу данных VLAN."
    ]
  },
  {
    "time": [
      1247.22,
      1254.67
    ],
    "en": [
      "Since you’ve seen how VTP sync works, let me introduce one danger of VTP:If you connect"
    ],
    "ru": [
      "Поскольку вы видели, как работает синхронизация VTP, позвольте мне представить одну опасность VTP: если вы подключаетесь"
    ]
  },
  {
    "time": [
      1254.67,
      1260.79
    ],
    "en": [
      "an old switch with a higher revision number to your network (and the VTP domain name matches),"
    ],
    "ru": [
      "старый коммутатор с более высоким номером версии для вашей сети (и совпадает доменное имя VTP),"
    ]
  },
  {
    "time": [
      1260.79,
      1265.79
    ],
    "en": [
      "all switches in the domain will sync their VLAN database to that switch."
    ],
    "ru": [
      "все коммутаторы в домене будут синхронизировать свою базу данных VLAN с этим коммутатором."
    ]
  },
  {
    "time": [
      1265.79,
      1270.011
    ],
    "en": [
      "This could cause all of the hosts on your network to instantly lose connectivity, because"
    ],
    "ru": [
      "Это может привести к тому, что все узлы в вашей сети мгновенно потеряют подключение, потому что"
    ]
  },
  {
    "time": [
      1270.011,
      1276.48
    ],
    "en": [
      "the switches could sync to a totally different VTP database, and the VLANs you were using could disappear."
    ],
    "ru": [
      "коммутаторы могли синхронизироваться с совершенно другой базой данных VTP, и VLAN, которые вы использовали, могли исчезнуть."
    ]
  },
  {
    "time": [
      1276.48,
      1282.3
    ],
    "en": [
      "could disappear. This is one reason why VTP is usually not used in modern networks."
    ],
    "ru": [
      "может исчезнуть. Это одна из причин, по которой VTP обычно не используется в современных сетях."
    ]
  },
  {
    "time": [
      1282.3,
      1287.42
    ],
    "en": [
      "Just to demonstrate that, let’s say this VTP domain Cisco has a revision of"
    ],
    "ru": [
      "Чтобы продемонстрировать это, предположим, что этот домен VTP Cisco имеет версию"
    ]
  },
  {
    "time": [
      1287.42,
      1292.83
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1287.42,
      1292.83
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1292.83,
      1297.28
    ],
    "en": [
      "Then you take an old switch your company used to use, to add to the network, however it"
    ],
    "ru": [
      "Затем вы берете старый коммутатор, который использовала ваша компания, чтобы добавить его в сеть, однако он"
    ]
  },
  {
    "time": [
      1297.28,
      1302.66
    ],
    "en": [
      "has a revision number of 50, and VLANS1, 99, and 220."
    ],
    "ru": [
      "имеет номер редакции 50 и VLANS1, 99 и 220."
    ]
  },
  {
    "time": [
      1302.66,
      1308.89
    ],
    "en": [
      "It will send VTP advertisements with this revision number, which will be forwarded throughout the domain."
    ],
    "ru": [
      "Он будет отправлять объявления VTP с этим номером версии, которые будут перенаправлены по всему домену."
    ]
  },
  {
    "time": [
      1308.89,
      1313.84
    ],
    "en": [
      "the domain. All of these switches will update their VLAN database to match, and all hosts in VLANs"
    ],
    "ru": [
      "домен. Все эти коммутаторы обновят свою базу данных VLAN для соответствия, а все хосты в VLAN"
    ]
  },
  {
    "time": [
      1313.84,
      1319.6
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1313.84,
      1319.6
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1319.6,
      1323.45
    ],
    "en": [
      "Next let me talk about VTP transparent mode."
    ],
    "ru": [
      "Теперь позвольте мне поговорить о прозрачном режиме VTP."
    ]
  },
  {
    "time": [
      1323.45,
      1329.37
    ],
    "en": [
      "Switches in VTP transparent mode do not participate in the VTP domain, they do not sync their"
    ],
    "ru": [
      "Коммутаторы в прозрачном режиме VTP не участвуют в домене VTP, они не синхронизируют свои"
    ]
  },
  {
    "time": [
      1329.37,
      1333.31
    ],
    "en": [
      "VLAN database to the VTP server."
    ],
    "ru": [
      "База данных VLAN к серверу VTP."
    ]
  },
  {
    "time": [
      1333.31,
      1338.37
    ],
    "en": [
      "VTP transparent mode maintains its own independent VLAN database in NVRAM."
    ],
    "ru": [
      "В прозрачном режиме VTP поддерживается собственная независимая база данных VLAN в NVRAM."
    ]
  },
  {
    "time": [
      1338.37,
      1345.62
    ],
    "en": [
      "It can add, modify, or delete VLANs, but they won’t be advertised to other switches."
    ],
    "ru": [
      "Он может добавлять, изменять или удалять сети VLAN, но они не будут рекламироваться для других коммутаторов."
    ]
  },
  {
    "time": [
      1345.62,
      1350.39
    ],
    "en": [
      "Although it doesn’t sync its VLAN database, it will forward VTP advertisements over its"
    ],
    "ru": [
      "Хотя он не синхронизирует свою базу данных VLAN, он будет пересылать рекламные объявления VTP по своему"
    ]
  },
  {
    "time": [
      1350.39,
      1356.041
    ],
    "en": [
      "trunk ports, if the VTP advertisement is in the same domain as it, but it won’t advertise"
    ],
    "ru": [
      "магистральные порты, если реклама VTP находится в том же домене, что и она, но она не рекламирует"
    ]
  },
  {
    "time": [
      1356.041,
      1359.37
    ],
    "en": [
      "its own VLAN database."
    ],
    "ru": [
      "собственная база данных VLAN."
    ]
  },
  {
    "time": [
      1359.37,
      1364.799
    ],
    "en": [
      "So let’s compare the functionality of server, client, and transparent mode switches."
    ],
    "ru": [
      "Итак, давайте сравним функциональность переключателей сервера, клиента и прозрачного режима."
    ]
  },
  {
    "time": [
      1364.799,
      1369.37
    ],
    "en": [
      "I set SW2 to client mode with the command VTP MODE CLIENT."
    ],
    "ru": [
      "Я установил SW2 в режим клиента с помощью команды VTP MODE CLIENT."
    ]
  },
  {
    "time": [
      1369.37,
      1376.05
    ],
    "en": [
      "Afterward, I tried to create VLAN20 on the switch, but as you can see I was rejected,"
    ],
    "ru": [
      "После этого я попытался создать VLAN20 на коммутаторе, но, как вы можете видеть, мне отказали,"
    ]
  },
  {
    "time": [
      1376.05,
      1379.549
    ],
    "en": [
      "because SW2 is now in client mode."
    ],
    "ru": [
      "потому что SW2 теперь находится в клиентском режиме."
    ]
  },
  {
    "time": [
      1379.549,
      1384.35
    ],
    "en": [
      "Then I set SW3 to transparent mode with VTP MODE TRANSPARENT."
    ],
    "ru": [
      "Затем я установил SW3 в прозрачный режим с VTP MODE TRANSPARENT."
    ]
  },
  {
    "time": [
      1384.35,
      1389.23
    ],
    "en": [
      "Also, to show you that a transparent mode switch won’t forward advertisements if its"
    ],
    "ru": [
      "Кроме того, чтобы показать вам, что переключатель прозрачного режима не будет пересылать рекламные объявления, если его"
    ]
  },
  {
    "time": [
      1389.23,
      1393.54
    ],
    "en": [
      "in a different domain, I changed the domain name to juniper."
    ],
    "ru": [
      "в другом домене я изменил доменное имя на можжевельник."
    ]
  },
  {
    "time": [
      1393.54,
      1403.25
    ],
    "en": [
      "So, I created VLAN 20, named sales, on SW1 and you can see it appears in the output of show vlan brief."
    ],
    "ru": [
      "Итак, я создал VLAN 20, названный sales, на SW1, и вы можете видеть, что он появляется в выводе команды show vlan short."
    ]
  },
  {
    "time": [
      1403.25,
      1409.51
    ],
    "en": [
      "show vlan brief. Then I did show vtp status, and you can see that the configuration revision number is 4."
    ],
    "ru": [
      "показать краткий влан. Затем я показал статус vtp, и вы можете видеть, что номер версии конфигурации равен 4."
    ]
  },
  {
    "time": [
      1409.51,
      1413.54
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1409.51,
      1413.54
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1413.54,
      1414.86
    ],
    "en": [
      "lab for this video."
    ],
    "ru": [
      "лаборатория для этого видео."
    ]
  },
  {
    "time": [
      1414.86,
      1419.58
    ],
    "en": [
      "Anyway, let’s see check out SW2."
    ],
    "ru": [
      "Во всяком случае, давайте посмотрим, проверим SW2."
    ]
  },
  {
    "time": [
      1419.58,
      1426.71
    ],
    "en": [
      "As you can see, the VTP client SW2 has indeed added VLAN20 to its VLAN database, and it"
    ],
    "ru": [
      "Как видите, клиент SW2 VTP действительно добавил VLAN20 в свою базу данных VLAN, и он"
    ]
  },
  {
    "time": [
      1426.71,
      1429.95
    ],
    "en": [
      "now has the same revision number, 4."
    ],
    "ru": [
      "теперь имеет тот же номер ревизии, 4."
    ]
  },
  {
    "time": [
      1429.95,
      1434.48
    ],
    "en": [
      "How about the transparent switch, SW3?"
    ],
    "ru": [
      "Как насчет прозрачного переключателя SW3?"
    ]
  },
  {
    "time": [
      1434.48,
      1443.66
    ],
    "en": [
      "As expected, on the transparent switch SW3, VLAN20 was not added, and now it has a revision number of 0."
    ],
    "ru": [
      "Как и ожидалось, на прозрачном коммутаторе SW3 VLAN20 не добавлялся, и теперь он имеет номер ревизии 0."
    ]
  },
  {
    "time": [
      1443.66,
      1449.85
    ],
    "en": [
      "number of 0. Changing the VTP domain to an unused domain will reset the revision number to 0."
    ],
    "ru": [
      "число 0. При изменении домена VTP на неиспользуемый домен номер версии будет сброшен на 0."
    ]
  },
  {
    "time": [
      1449.85,
      1454.73
    ],
    "en": [
      "Changing the VTP mode to transparent will also reset the revision number to 0."
    ],
    "ru": [
      "Изменение режима VTP на прозрачный также приведет к сбросу номера версии на 0."
    ]
  },
  {
    "time": [
      1454.73,
      1459.61
    ],
    "en": [
      "So, if you’re going to plug an old switch with a high revision number into a network"
    ],
    "ru": [
      "Итак, если вы собираетесь подключить старый коммутатор с большим номером версии к сети"
    ]
  },
  {
    "time": [
      1459.61,
      1465.58
    ],
    "en": [
      "that uses VTP, make sure to reset the revision number with one of these methods first, so"
    ],
    "ru": [
      "который использует VTP, обязательно сначала сбросьте номер версии одним из этих методов, поэтому"
    ]
  },
  {
    "time": [
      1465.58,
      1469.73
    ],
    "en": [
      "it doesn’t overwrite your network’s VLAN configurations."
    ],
    "ru": [
      "он не перезаписывает конфигурации VLAN вашей сети."
    ]
  },
  {
    "time": [
      1469.73,
      1476.27
    ],
    "en": [
      "Now, the question is whether SW4 will have added VLAN20 to its VLAN database."
    ],
    "ru": [
      "Теперь вопрос в том, добавит ли SW4 VLAN20 в свою базу данных VLAN."
    ]
  },
  {
    "time": [
      1476.27,
      1482.53
    ],
    "en": [
      "Remember, SW3 is in transparent mode in a different domain, so it shouldn’t forward"
    ],
    "ru": [
      "Помните, что SW3 находится в прозрачном режиме в другом домене, поэтому не должен пересылать"
    ]
  },
  {
    "time": [
      1482.53,
      1485.08
    ],
    "en": [
      "the VTP advertisements to SW4."
    ],
    "ru": [
      "объявления VTP для SW4."
    ]
  },
  {
    "time": [
      1485.08,
      1491.87
    ],
    "en": [
      "Indeed, SW4 does not have VLAN20, and it is still on revision number 3."
    ],
    "ru": [
      "Действительно, в SW4 нет VLAN20, и он все еще находится в версии 3."
    ]
  },
  {
    "time": [
      1491.87,
      1498.74
    ],
    "en": [
      "So, what can we do to make SW3 start forwarding the VTP advertisements to SW4?"
    ],
    "ru": [
      "Итак, что мы можем сделать, чтобы SW3 начал пересылать объявления VTP в SW4?"
    ]
  },
  {
    "time": [
      1498.74,
      1504.19
    ],
    "en": [
      "If we change the VTP domain on SW3 back to Cisco, it should start forwarding advertisements"
    ],
    "ru": [
      "Если мы изменим домен VTP на SW3 обратно на Cisco, он должен начать пересылку рекламных объявлений."
    ]
  },
  {
    "time": [
      1504.19,
      1511.61
    ],
    "en": [
      "to SW4, even though SW3 itself won’t sync its own VLAN database based on those advertisements."
    ],
    "ru": [
      "в SW4, хотя сам SW3 не будет синхронизировать свою собственную базу данных VLAN на основе этих рекламных объявлений."
    ]
  },
  {
    "time": [
      1511.61,
      1516.47
    ],
    "en": [
      "So, I changed the VTP domain on SW3 back to cisco."
    ],
    "ru": [
      "Итак, я изменил домен VTP на SW3 обратно на cisco."
    ]
  },
  {
    "time": [
      1516.47,
      1522.309
    ],
    "en": [
      "I also created some new VLANs on SW1 to increase the revision number and send more advertisements,"
    ],
    "ru": [
      "Я также создал несколько новых VLAN на SW1, чтобы увеличить номер версии и рассылать больше рекламы,"
    ]
  },
  {
    "time": [
      1522.309,
      1528.48
    ],
    "en": [
      "by the way, and now you can see that SW3 did indeed forward the advertisements to SW4,"
    ],
    "ru": [
      "кстати, и теперь вы можете видеть, что SW3 действительно перенаправлял рекламу в SW4,"
    ]
  },
  {
    "time": [
      1528.48,
      1533.51
    ],
    "en": [
      "and SW4 synced its VLAN database to SW1 and SW2."
    ],
    "ru": [
      "и SW4 синхронизировал свою базу данных VLAN с SW1 и SW2."
    ]
  },
  {
    "time": [
      1533.51,
      1538.67
    ],
    "en": [
      "Finally, I’ll just talk about VTP version a little bit."
    ],
    "ru": [
      "Наконец, я немного расскажу о версии VTP."
    ]
  },
  {
    "time": [
      1538.67,
      1544.03
    ],
    "en": [
      "To change the VTP version, use the VTP VERSION command."
    ],
    "ru": [
      "Чтобы изменить версию VTP, используйте команду VTP VERSION."
    ]
  },
  {
    "time": [
      1544.03,
      1548.68
    ],
    "en": [
      "Changing the VTP version increases the revision number, by the way, and advertisements with"
    ],
    "ru": [
      "При изменении версии VTP, кстати, увеличивается номер ревизии, а рекламные объявления с"
    ]
  },
  {
    "time": [
      1548.68,
      1552.09
    ],
    "en": [
      "this new revision number will be sent."
    ],
    "ru": [
      "этот новый номер редакции будет отправлен."
    ]
  },
  {
    "time": [
      1552.09,
      1557.49
    ],
    "en": [
      "Other servers and clients will then sync and start operating in version 2 as well."
    ],
    "ru": [
      "Затем другие серверы и клиенты синхронизируются и также начнут работать с версией 2."
    ]
  },
  {
    "time": [
      1557.49,
      1566.14
    ],
    "en": [
      "For example here is SW4, it is now running version 2 and has a revision number of 13, just like SW1."
    ],
    "ru": [
      "Например, вот SW4, теперь он работает под управлением версии 2 и имеет номер редакции 13, как и SW1."
    ]
  },
  {
    "time": [
      1566.14,
      1571.29
    ],
    "en": [
      "just like SW1. As for the difference between VTP version 1 and version 2, here is a quote directly"
    ],
    "ru": [
      "прямо как SW1. Что касается разницы между VTP версии 1 и версии 2, вот цитата напрямую"
    ]
  },
  {
    "time": [
      1571.29,
      1577.22
    ],
    "en": [
      "from Cisco: VTP V2 is not much different than VTP V1."
    ],
    "ru": [
      "от Cisco: VTP V2 не сильно отличается от VTP V1."
    ]
  },
  {
    "time": [
      1577.22,
      1584.19
    ],
    "en": [
      "The major difference is that VTP V2 introduces support for Token Ring VLANs."
    ],
    "ru": [
      "Основное отличие состоит в том, что VTP V2 представляет поддержку сетей Token Ring VLAN."
    ]
  },
  {
    "time": [
      1584.19,
      1588.66
    ],
    "en": [
      "If you use Token Ring VLANs, you must enable VTP V2."
    ],
    "ru": [
      "Если вы используете сети Token Ring VLAN, необходимо включить VTP V2."
    ]
  },
  {
    "time": [
      1588.66,
      1592.99
    ],
    "en": [
      "Otherwise, there is no reason to use VTP V2."
    ],
    "ru": [
      "В противном случае нет причин использовать VTP V2."
    ]
  },
  {
    "time": [
      1592.99,
      1598.48
    ],
    "en": [
      "Token ring is an old technology, so really there is no reason to use version 2."
    ],
    "ru": [
      "Token Ring - это старая технология, поэтому на самом деле нет причин использовать версию 2."
    ]
  },
  {
    "time": [
      1598.48,
      1603.99
    ],
    "en": [
      "As for version 3, it has quite a few differences and new features, but it’s certainly beyond"
    ],
    "ru": [
      "Что касается версии 3, в ней есть немало отличий и новых функций, но она определенно выходит за рамки"
    ]
  },
  {
    "time": [
      1603.99,
      1607.35
    ],
    "en": [
      "the scope of the CCNA, so we’ll leave it here."
    ],
    "ru": [
      "объем CCNA, поэтому оставим его здесь."
    ]
  },
  {
    "time": [
      1607.35,
      1611.72
    ],
    "en": [
      "Okay here’s the first slide on VTP again."
    ],
    "ru": [
      "Хорошо, вот снова первый слайд о VTP."
    ]
  },
  {
    "time": [
      1611.72,
      1616.669
    ],
    "en": [
      "To be honest, there is still lots more I can talk about regarding VTP, but I will leave"
    ],
    "ru": [
      "Честно говоря, я могу еще многое рассказать о VTP, но я оставлю"
    ]
  },
  {
    "time": [
      1616.669,
      1618.55
    ],
    "en": [
      "it at that for this course."
    ],
    "ru": [
      "это при том для этого курса."
    ]
  },
  {
    "time": [
      1618.55,
      1623.63
    ],
    "en": [
      "Again, it isn’t on the exam topics list, but you may get some basic questions about"
    ],
    "ru": [
      "Опять же, этого нет в списке тем экзамена, но вы можете получить некоторые базовые вопросы по"
    ]
  },
  {
    "time": [
      1623.63,
      1628.85
    ],
    "en": [
      "VTP and its purpose, so I wanted to tell you about some of its functions."
    ],
    "ru": [
      "VTP и его назначение, поэтому я хотел рассказать вам о некоторых его функциях."
    ]
  },
  {
    "time": [
      1628.85,
      1633.03
    ],
    "en": [
      "If you learn and remember the information I’ve given you in this video regarding VTP,"
    ],
    "ru": [
      "Если вы узнаете и запомните информацию о VTP, которую я дал вам в этом видео,"
    ]
  },
  {
    "time": [
      1633.03,
      1637.03
    ],
    "en": [
      "that should be more than enough for the CCNA exam."
    ],
    "ru": [
      "этого должно быть более чем достаточно для экзамена CCNA."
    ]
  },
  {
    "time": [
      1637.03,
      1643.05
    ],
    "en": [
      "Basically, just know the purpose of VTP, the differences between server, client, and transparent"
    ],
    "ru": [
      "В принципе, просто знайте цель VTP, различия между сервером, клиентом и прозрачным"
    ]
  },
  {
    "time": [
      1643.05,
      1648.21
    ],
    "en": [
      "mode, know that switches operate in server mode by default and that servers operate as"
    ],
    "ru": [
      "режиме, знайте, что коммутаторы по умолчанию работают в режиме сервера и что серверы работают как"
    ]
  },
  {
    "time": [
      1648.21,
      1652.3
    ],
    "en": [
      "clients too, and know about revision numbers."
    ],
    "ru": [
      "клиенты тоже, и знают о номерах ревизий."
    ]
  },
  {
    "time": [
      1652.3,
      1657.01
    ],
    "en": [
      "If you know all of that, you should be fine."
    ],
    "ru": [
      "Если вы все это знаете, все будет в порядке."
    ]
  },
  {
    "time": [
      1657.01,
      1661.539
    ],
    "en": [
      "So before moving on to today’s quiz let’s review what we covered."
    ],
    "ru": [
      "Итак, прежде чем перейти к сегодняшней викторине, давайте рассмотрим, что мы рассмотрели."
    ]
  },
  {
    "time": [
      1661.539,
      1666.75
    ],
    "en": [
      "We looked at DTP first, which is a protocol that allows Cisco switches to form trunk connections"
    ],
    "ru": [
      "Сначала мы рассмотрели DTP, протокол, который позволяет коммутаторам Cisco формировать магистральные соединения."
    ]
  },
  {
    "time": [
      1666.75,
      1670.21
    ],
    "en": [
      "with other Cisco switches, without manual configuration."
    ],
    "ru": [
      "с другими коммутаторами Cisco без ручной настройки."
    ]
  },
  {
    "time": [
      1670.21,
      1676.5
    ],
    "en": [
      "However, it’s recommended that you disable this protocol for security purposes."
    ],
    "ru": [
      "Однако рекомендуется отключить этот протокол в целях безопасности."
    ]
  },
  {
    "time": [
      1676.5,
      1681.85
    ],
    "en": [
      "Then we looked at VTP, another Cisco proprietary protocol that allows you to configure VLANs"
    ],
    "ru": [
      "Затем мы рассмотрели VTP, еще один проприетарный протокол Cisco, который позволяет настраивать сети VLAN."
    ]
  },
  {
    "time": [
      1681.85,
      1687.669
    ],
    "en": [
      "on switches that operate as central VTP servers, which then advertise their VLAN database,"
    ],
    "ru": [
      "на коммутаторах, которые работают как центральные серверы VTP, которые затем объявляют свою базу данных VLAN,"
    ]
  },
  {
    "time": [
      1687.669,
      1692.76
    ],
    "en": [
      "and VTP client switches sync their database to it."
    ],
    "ru": [
      "и клиентские коммутаторы VTP синхронизируют с ним свою базу данных."
    ]
  },
  {
    "time": [
      1692.76,
      1697.7
    ],
    "en": [
      "Note that VTP only syncs the VLAN database, you still have to configure the interfaces"
    ],
    "ru": [
      "Обратите внимание, что VTP синхронизирует только базу данных VLAN, вам все равно нужно настроить интерфейсы."
    ]
  },
  {
    "time": [
      1697.7,
      1704.23
    ],
    "en": [
      "on each switch separately, for example SWITCHPORT ACCESS VLAN 10, etc."
    ],
    "ru": [
      "на каждом коммутаторе отдельно, например SWITCHPORT ACCESS VLAN 10 и т. д."
    ]
  },
  {
    "time": [
      1704.23,
      1709.17
    ],
    "en": [
      "VTP does not automatically assign interfaces to VLANs."
    ],
    "ru": [
      "VTP не назначает интерфейсы VLAN автоматически."
    ]
  },
  {
    "time": [
      1709.17,
      1713.679
    ],
    "en": [
      "Both of these protocols are no longer on the exam topics list, but you should know about"
    ],
    "ru": [
      "Оба этих протокола больше не входят в список тем экзамена, но вы должны знать о"
    ]
  },
  {
    "time": [
      1713.679,
      1717.78
    ],
    "en": [
      "them and their basic functions, you may get questions about them on the exam."
    ],
    "ru": [
      "о них и их основных функциях, вы можете получить вопросы о них на экзамене."
    ]
  },
  {
    "time": [
      1717.78,
      1722.03
    ],
    "en": [
      "Okay let’s move on to today’s quiz."
    ],
    "ru": [
      "Хорошо, перейдем к сегодняшней викторине."
    ]
  },
  {
    "time": [
      1722.03,
      1727.72
    ],
    "en": [
      "As a bonus, I will also feature one practice question from Boson’s ExSim for CCNA, a"
    ],
    "ru": [
      "В качестве бонуса я также предложу один практический вопрос от ExSim компании Boson для CCNA,"
    ]
  },
  {
    "time": [
      1727.72,
      1732.24
    ],
    "en": [
      "set of practice exams I highly recommend you get to prepare for your CCNA exam."
    ],
    "ru": [
      "набор практических экзаменов. Я настоятельно рекомендую вам подготовиться к экзамену CCNA."
    ]
  },
  {
    "time": [
      1732.24,
      1735.85
    ],
    "en": [
      "Check out ExSim via the link in the video description."
    ],
    "ru": [
      "Ознакомьтесь с ExSim по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1735.85,
      1740.01
    ],
    "en": [
      "Okay, let’s go to question 1 of today’s quiz."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 1 сегодняшней викторины."
    ]
  },
  {
    "time": [
      1740.01,
      1748.6
    ],
    "en": [
      "SW1 and SW2 are connected, are both new switches, and the connected interfaces are operating as access ports."
    ],
    "ru": [
      "SW1 и SW2 подключены, оба являются новыми коммутаторами, и подключенные интерфейсы работают как порты доступа."
    ]
  },
  {
    "time": [
      1748.6,
      1756.87
    ],
    "en": [
      "as access ports. However, SW2’s power supply fails so you temporarily replace SW2 with an old spare switch."
    ],
    "ru": [
      "как порты доступа. Однако блок питания SW2 выходит из строя, поэтому вы временно заменяете SW2 старым запасным переключателем."
    ]
  },
  {
    "time": [
      1756.87,
      1761.95
    ],
    "en": [
      "switch. You reset the configuration before connecting it to SW1, but when you connect it you notice"
    ],
    "ru": [
      "выключатель. Вы сбрасываете конфигурацию перед подключением к SW1, но когда вы подключаете его, вы замечаете"
    ]
  },
  {
    "time": [
      1761.95,
      1765.17
    ],
    "en": [
      "that a trunk is formed between the two switches."
    ],
    "ru": [
      "что между двумя коммутаторами образуется магистраль."
    ]
  },
  {
    "time": [
      1765.17,
      1767.16
    ],
    "en": [
      "What could be the cause?"
    ],
    "ru": [
      "Что может быть причиной?"
    ]
  },
  {
    "time": [
      1767.16,
      1772.67
    ],
    "en": [
      "A, interfaces on old switches default to switchport mode trunk."
    ],
    "ru": [
      "A, интерфейсы на старых коммутаторах по умолчанию работают в магистральном режиме switchport."
    ]
  },
  {
    "time": [
      1772.67,
      1778.9
    ],
    "en": [
      "B, interfaces on old switches default to switchport mode dynamic desirable."
    ],
    "ru": [
      "B, интерфейсы на старых коммутаторах по умолчанию работают в динамическом режиме switchport."
    ]
  },
  {
    "time": [
      1778.9,
      1783.57
    ],
    "en": [
      "Or C, access ports are a feature of newer switches."
    ],
    "ru": [
      "Или C, порты доступа являются особенностью новых коммутаторов."
    ]
  },
  {
    "time": [
      1783.57,
      1790.47
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1790.47,
      1797.33
    ],
    "en": [
      "The answer is B, interfaces on old switches default to switchport mode dynamic desirable."
    ],
    "ru": [
      "Ответ - B, интерфейсы на старых коммутаторах по умолчанию работают в динамическом режиме switchport."
    ]
  },
  {
    "time": [
      1797.33,
      1799.82
    ],
    "en": [
      "Newer switches default to dynamic auto."
    ],
    "ru": [
      "Новее по умолчанию переключает на динамический автоматический режим."
    ]
  },
  {
    "time": [
      1799.82,
      1806.4
    ],
    "en": [
      "So, in this case SW1’s interface is probably in dynamic auto mode, and the old replacement"
    ],
    "ru": [
      "Итак, в этом случае интерфейс SW1, вероятно, находится в динамическом автоматическом режиме, и старая замена"
    ]
  },
  {
    "time": [
      1806.4,
      1810.91
    ],
    "en": [
      "switch’s interface is probably in dynamic desirable mode, so they would form a trunk."
    ],
    "ru": [
      "Интерфейс коммутатора, вероятно, находится в желаемом динамическом режиме, поэтому они образуют магистраль."
    ]
  },
  {
    "time": [
      1810.91,
      1813.86
    ],
    "en": [
      "Let’s go to question 2."
    ],
    "ru": [
      "Перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1813.86,
      1820.46
    ],
    "en": [
      "SW1 is connected to SW2, and SW2 is connected to SW3."
    ],
    "ru": [
      "SW1 подключен к SW2, а SW2 подключен к SW3."
    ]
  },
  {
    "time": [
      1820.46,
      1826.86
    ],
    "en": [
      "You want SW2 to forward SW1’s VLAN database information to SW3, but you don’t want SW2"
    ],
    "ru": [
      "Вы хотите, чтобы SW2 пересылал информацию из базы данных VLAN SW1 в SW3, но вы не хотите, чтобы SW2"
    ]
  },
  {
    "time": [
      1826.86,
      1830.38
    ],
    "en": [
      "to synchronize its VLAN database to SW1."
    ],
    "ru": [
      "для синхронизации своей базы данных VLAN с SW1."
    ]
  },
  {
    "time": [
      1830.38,
      1832.93
    ],
    "en": [
      "Which command should you use on SW2?"
    ],
    "ru": [
      "Какую команду следует использовать на SW2?"
    ]
  },
  {
    "time": [
      1832.93,
      1836.45
    ],
    "en": [
      "A, vtp mode transparent."
    ],
    "ru": [
      "А, режим vtp прозрачный."
    ]
  },
  {
    "time": [
      1836.45,
      1840.6
    ],
    "en": [
      "B, vtp transparent mode."
    ],
    "ru": [
      "B, прозрачный режим vtp."
    ]
  },
  {
    "time": [
      1840.6,
      1844.9
    ],
    "en": [
      "C, vlan mode transparent."
    ],
    "ru": [
      "C, режим vlan прозрачный."
    ]
  },
  {
    "time": [
      1844.9,
      1847.99
    ],
    "en": [
      "Or D, vtp mode client."
    ],
    "ru": [
      "Или D, клиент в режиме vtp."
    ]
  },
  {
    "time": [
      1847.99,
      1854.24
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1854.24,
      1858.63
    ],
    "en": [
      "The answer is a, vtp mode transparent."
    ],
    "ru": [
      "Ответ - прозрачный режим vtp."
    ]
  },
  {
    "time": [
      1858.63,
      1864.59
    ],
    "en": [
      "A switch in VTP transparent mode will forward VTP advertisements, but it won’t sync its"
    ],
    "ru": [
      "Коммутатор в прозрачном режиме VTP будет пересылать рекламные объявления VTP, но не синхронизирует их"
    ]
  },
  {
    "time": [
      1864.59,
      1867.27
    ],
    "en": [
      "VLAN database to the VTP server."
    ],
    "ru": [
      "База данных VLAN к серверу VTP."
    ]
  },
  {
    "time": [
      1867.27,
      1874.32
    ],
    "en": [
      "It also won’t advertise its own VLAN database. Let's go to question 3."
    ],
    "ru": [
      "Он также не будет рекламировать собственную базу данных VLAN. Перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1874.32,
      1879.83
    ],
    "en": [
      "What are two methods to reset a switch’s VTP revision number to 0? (Choose two."
    ],
    "ru": [
      "Какими двумя способами можно сбросить номер версии VTP коммутатора на 0? (Выберите два."
    ]
  },
  {
    "time": [
      1879.83,
      1882.33
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1879.83,
      1882.33
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      1882.33,
      1887.28
    ],
    "en": [
      "A, change the VTP domain to an unused domain name."
    ],
    "ru": [
      "A, измените домен VTP на неиспользуемое доменное имя."
    ]
  },
  {
    "time": [
      1887.28,
      1891.16
    ],
    "en": [
      "B, change the switch to VTP server mode."
    ],
    "ru": [
      "B, переведите переключатель в режим VTP-сервера."
    ]
  },
  {
    "time": [
      1891.16,
      1895.41
    ],
    "en": [
      "C, change the switch to VTP transparent mode."
    ],
    "ru": [
      "C, переведите переключатель в прозрачный режим VTP."
    ]
  },
  {
    "time": [
      1895.41,
      1899.25
    ],
    "en": [
      "Or D, use the VTP RESET command."
    ],
    "ru": [
      "Или D, используйте команду VTP RESET."
    ]
  },
  {
    "time": [
      1899.25,
      1906.0
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1906.0,
      1912.66
    ],
    "en": [
      "The answers are A, change the vtp domain to an unused domain name, and C, change the switch"
    ],
    "ru": [
      "Ответы: A, измените домен vtp на неиспользуемое доменное имя и C, измените переключатель"
    ]
  },
  {
    "time": [
      1912.66,
      1915.53
    ],
    "en": [
      "to VTP transparent mode."
    ],
    "ru": [
      "в прозрачный режим VTP."
    ]
  },
  {
    "time": [
      1915.53,
      1919.15
    ],
    "en": [
      "Either of these methods will reset the revision number to 0."
    ],
    "ru": [
      "Любой из этих методов сбросит номер версии до 0."
    ]
  },
  {
    "time": [
      1919.15,
      1923.41
    ],
    "en": [
      "This is useful if adding a switch with a higher VTP revision number to a network."
    ],
    "ru": [
      "Это полезно при добавлении в сеть коммутатора с более высоким номером версии VTP."
    ]
  },
  {
    "time": [
      1923.41,
      1929.28
    ],
    "en": [
      "Okay, now let’s go to today’s Boson ExSim question."
    ],
    "ru": [
      "Хорошо, а теперь перейдем к сегодняшнему вопросу о Boson ExSim."
    ]
  },
  {
    "time": [
      1929.28,
      1934.5
    ],
    "en": [
      "For today's Boson ExSim practice question, I've selected not a multiple choice question,"
    ],
    "ru": [
      "Для сегодняшнего практического вопроса Boson ExSim я выбрал не вопрос с множественным выбором,"
    ]
  },
  {
    "time": [
      1934.5,
      1936.82
    ],
    "en": [
      "but a drag-and-drop question."
    ],
    "ru": [
      "но вопрос с перетаскиванием."
    ]
  },
  {
    "time": [
      1936.82,
      1941.24
    ],
    "en": [
      "So this is about DTP, Dynamic Trunking Protocol."
    ],
    "ru": [
      "Итак, речь идет о DTP, протоколе динамического транкинга."
    ]
  },
  {
    "time": [
      1941.24,
      1948.58
    ],
    "en": [
      "Select the VLAN trunking operational modes from the left, access, trunk and also misconfig,"
    ],
    "ru": [
      "Слева выберите режимы работы транкинга VLAN, доступ, транк, а также неправильную конфигурацию,"
    ]
  },
  {
    "time": [
      1948.58,
      1952.1
    ],
    "en": [
      "and drag them to the resulting trunking configuration."
    ],
    "ru": [
      "и перетащите их в получившуюся конфигурацию транкинга."
    ]
  },
  {
    "time": [
      1952.1,
      1956.88
    ],
    "en": [
      "So here we have one end of the connection, one switch interface."
    ],
    "ru": [
      "Итак, у нас есть один конец соединения, один интерфейс коммутатора."
    ]
  },
  {
    "time": [
      1956.88,
      1959.1
    ],
    "en": [
      "And then the other switch, the other end."
    ],
    "ru": [
      "А потом другой переключатель, другой конец."
    ]
  },
  {
    "time": [
      1959.1,
      1963.4
    ],
    "en": [
      "Access, dynamic auto, dynamic desirable, or trunk."
    ],
    "ru": [
      "Доступ, динамический автоматический, динамический желательно или магистральный."
    ]
  },
  {
    "time": [
      1963.4,
      1967.05
    ],
    "en": [
      "Okay, so see if you can complete this chart on your own."
    ],
    "ru": [
      "Хорошо, посмотрим, сможешь ли ты заполнить эту таблицу самостоятельно."
    ]
  },
  {
    "time": [
      1967.05,
      1971.62
    ],
    "en": [
      "Pause the video if you want to try it."
    ],
    "ru": [
      "Поставьте видео на паузу, если хотите попробовать."
    ]
  },
  {
    "time": [
      1971.62,
      1974.23
    ],
    "en": [
      "Okay, so let's walk through the answers."
    ],
    "ru": [
      "Хорошо, давайте рассмотрим ответы."
    ]
  },
  {
    "time": [
      1974.23,
      1979.13
    ],
    "en": [
      "So, here on one end of the connection, access mode."
    ],
    "ru": [
      "Итак, здесь, на одном конце соединения, режим доступа."
    ]
  },
  {
    "time": [
      1979.13,
      1984.65
    ],
    "en": [
      "Manually configuring a switch port in access mode turns off DTP negotiation."
    ],
    "ru": [
      "Ручная настройка порта коммутатора в режиме доступа отключает согласование DTP."
    ]
  },
  {
    "time": [
      1984.65,
      1986.72
    ],
    "en": [
      "It won't form a trunk port, no matter what."
    ],
    "ru": [
      "Он не будет образовывать магистральный порт, несмотря ни на что."
    ]
  },
  {
    "time": [
      1986.72,
      1993.549
    ],
    "en": [
      "So, two access ports will result in an operational mode of access."
    ],
    "ru": [
      "Итак, два порта доступа приведут к рабочему режиму доступа."
    ]
  },
  {
    "time": [
      1993.549,
      1997.3
    ],
    "en": [
      "Access and dynamic auto, same thing."
    ],
    "ru": [
      "Доступ и динамический авто, одно и тоже."
    ]
  },
  {
    "time": [
      1997.3,
      2002.82
    ],
    "en": [
      "So, dynamic auto can form a trunk but it won't actively try to form a trunk unless the other"
    ],
    "ru": [
      "Таким образом, динамический автоматический режим может формировать ствол, но он не будет активно пытаться сформировать ствол, если другой"
    ]
  },
  {
    "time": [
      2002.82,
      2004.33
    ],
    "en": [
      "end is trying to form a trunk."
    ],
    "ru": [
      "конец пытается сформировать ствол."
    ]
  },
  {
    "time": [
      2004.33,
      2007.16
    ],
    "en": [
      "So, that will be access."
    ],
    "ru": [
      "Итак, это будет доступ."
    ]
  },
  {
    "time": [
      2007.16,
      2009.09
    ],
    "en": [
      "Access and dynamic desirable."
    ],
    "ru": [
      "Доступные и динамические желательны."
    ]
  },
  {
    "time": [
      2009.09,
      2015.08
    ],
    "en": [
      "Although this end is trying to form a trunk, this end will not, so that is access."
    ],
    "ru": [
      "Хотя этот конец пытается сформировать ствол, этот конец не будет, так что это доступ."
    ]
  },
  {
    "time": [
      2015.08,
      2019.169
    ],
    "en": [
      "Now, access and trunk that is a misconfig."
    ],
    "ru": [
      "Теперь неправильная конфигурация доступа и транка."
    ]
  },
  {
    "time": [
      2019.169,
      2021.08
    ],
    "en": [
      "Do not do this in a real network."
    ],
    "ru": [
      "Не делайте этого в реальной сети."
    ]
  },
  {
    "time": [
      2021.08,
      2025.27
    ],
    "en": [
      "You can try it out in a lab to see what happens, but do not do it in a real network."
    ],
    "ru": [
      "Вы можете попробовать это в лаборатории, чтобы увидеть, что происходит, но не делайте этого в реальной сети."
    ]
  },
  {
    "time": [
      2025.27,
      2028.38
    ],
    "en": [
      "You will encounter problems."
    ],
    "ru": [
      "Вы столкнетесь с проблемами."
    ]
  },
  {
    "time": [
      2028.38,
      2030.85
    ],
    "en": [
      "Dynamic auto and access, well we just saw that here."
    ],
    "ru": [
      "Динамический авто и доступ, ну мы только что видели это здесь."
    ]
  },
  {
    "time": [
      2030.85,
      2033.69
    ],
    "en": [
      "That will be an access port."
    ],
    "ru": [
      "Это будет порт доступа."
    ]
  },
  {
    "time": [
      2033.69,
      2035.55
    ],
    "en": [
      "Dynamic auto and dynamic auto."
    ],
    "ru": [
      "Динамический авто и динамический авто."
    ]
  },
  {
    "time": [
      2035.55,
      2041.49
    ],
    "en": [
      "Neither is actively trying to form a trunk, so that will be access."
    ],
    "ru": [
      "Ни один из них активно не пытается сформировать ствол, так что доступ будет."
    ]
  },
  {
    "time": [
      2041.49,
      2043.5
    ],
    "en": [
      "Dynamic auto and dynamic desirable."
    ],
    "ru": [
      "Авто динамический, а желательно динамический."
    ]
  },
  {
    "time": [
      2043.5,
      2048.109
    ],
    "en": [
      "This end is actively trying to form a trunk, so they will form a trunk."
    ],
    "ru": [
      "Этот конец активно пытается сформировать ствол, поэтому они будут образовывать ствол."
    ]
  },
  {
    "time": [
      2048.109,
      2054.069
    ],
    "en": [
      "Same thing, dynamic auto and trunk will form a trunk."
    ],
    "ru": [
      "То же самое, динамический авто и багажник образуют багажник."
    ]
  },
  {
    "time": [
      2054.069,
      2059.879
    ],
    "en": [
      "Even if you manually configure 'switchport mode trunk', DTP is still running and this"
    ],
    "ru": [
      "Даже если вы вручную сконфигурируете 'транк в режиме switchport', DTP все равно будет работать, и это"
    ]
  },
  {
    "time": [
      2059.879,
      2062.55
    ],
    "en": [
      "end will actively try to form a trunk with the other end."
    ],
    "ru": [
      "конец будет активно пытаться образовать ствол другим концом."
    ]
  },
  {
    "time": [
      2062.55,
      2065.909
    ],
    "en": [
      "And since it is dynamic auto, they will form a trunk."
    ],
    "ru": [
      "А поскольку это динамический автоматический режим, они образуют ствол."
    ]
  },
  {
    "time": [
      2065.909,
      2070.829
    ],
    "en": [
      "Okay, dynamic desirable and access, that will result in access."
    ],
    "ru": [
      "Хорошо, динамический желателен и доступ, который приведет к доступу."
    ]
  },
  {
    "time": [
      2070.829,
      2074.74
    ],
    "en": [
      "This end will refuse to become a trunk."
    ],
    "ru": [
      "Этот конец откажется стать стволом."
    ]
  },
  {
    "time": [
      2074.74,
      2079.099
    ],
    "en": [
      "Dynamic desirable and dynamic auto, that will form a trunk."
    ],
    "ru": [
      "Желательно динамичный и динамичный авто, который будет формировать багажник."
    ]
  },
  {
    "time": [
      2079.099,
      2082.099
    ],
    "en": [
      "Two dynamic desirables definitely form a trunk."
    ],
    "ru": [
      "Два динамических желания определенно образуют ствол."
    ]
  },
  {
    "time": [
      2082.099,
      2083.909
    ],
    "en": [
      "And this one as well, trunk."
    ],
    "ru": [
      "И этот тоже, багажник."
    ]
  },
  {
    "time": [
      2083.909,
      2087.349
    ],
    "en": [
      "Okay, next, moving on to trunk on this end."
    ],
    "ru": [
      "Хорошо, теперь перейдем к багажнику на этом конце."
    ]
  },
  {
    "time": [
      2087.349,
      2090.259
    ],
    "en": [
      "Trunk and access, again that is a misconfig."
    ],
    "ru": [
      "Магистраль и доступ, опять же неправильная конфигурация."
    ]
  },
  {
    "time": [
      2090.259,
      2093.529
    ],
    "en": [
      "Don't do this in a real network."
    ],
    "ru": [
      "Не делайте этого в реальной сети."
    ]
  },
  {
    "time": [
      2093.529,
      2097.789
    ],
    "en": [
      "Trunk and dynamic auto will form a trunk."
    ],
    "ru": [
      "Багажник и динамический авто образуют багажник."
    ]
  },
  {
    "time": [
      2097.789,
      2100.46
    ],
    "en": [
      "Trunk and dynamic desirable, of course."
    ],
    "ru": [
      "Багажник желателен и динамичный, конечно."
    ]
  },
  {
    "time": [
      2100.46,
      2104.589
    ],
    "en": [
      "And, of course, trunk and trunk also will form a trunk."
    ],
    "ru": [
      "И, конечно же, ствол и ствол также образуют ствол."
    ]
  },
  {
    "time": [
      2104.589,
      2108.809
    ],
    "en": [
      "So once you've finished, click on 'done'."
    ],
    "ru": [
      "Итак, как только вы закончите, нажмите «Готово»."
    ]
  },
  {
    "time": [
      2108.809,
      2110.779
    ],
    "en": [
      "And then click on 'show answer'."
    ],
    "ru": [
      "Затем нажмите «показать ответ»."
    ]
  },
  {
    "time": [
      2110.779,
      2114.829
    ],
    "en": [
      "Now, if you don't want to check the answer yet you can click on next to go to the next"
    ],
    "ru": [
      "Теперь, если вы еще не хотите проверять ответ, вы можете нажать «Далее», чтобы перейти к следующему"
    ]
  },
  {
    "time": [
      2114.829,
      2117.21
    ],
    "en": [
      "question in the practice exam."
    ],
    "ru": [
      "вопрос на практическом экзамене."
    ]
  },
  {
    "time": [
      2117.21,
      2121.829
    ],
    "en": [
      "But let's see if I got the correct answer. And, I did."
    ],
    "ru": [
      "Но давайте посмотрим, правильный ли я получил ответ. И я сделал."
    ]
  },
  {
    "time": [
      2121.829,
      2126.15
    ],
    "en": [
      "And, I did. Okay, here is Boson's explanation, you can read it if you want."
    ],
    "ru": [
      "И я сделал. Хорошо, вот объяснение Бозона, вы можете прочитать его, если хотите."
    ]
  },
  {
    "time": [
      2126.15,
      2128.119
    ],
    "en": [
      "And there are also references here."
    ],
    "ru": [
      "И здесь тоже есть ссылки."
    ]
  },
  {
    "time": [
      2128.119,
      2134.49
    ],
    "en": [
      "The official cert guide by Wendell Odom, volume 1 chapter 8: Implementing Ethernet VLANs."
    ],
    "ru": [
      "Официальное руководство по сертификации Венделла Одома, том 1, глава 8: Реализация сетей Ethernet VLAN."
    ]
  },
  {
    "time": [
      2134.49,
      2136.54
    ],
    "en": [
      "And some additional reading from Cisco."
    ],
    "ru": [
      "И еще кое-что из Cisco."
    ]
  },
  {
    "time": [
      2136.54,
      2140.64
    ],
    "en": [
      "I will link some reading from Cisco in the video description, by the way."
    ],
    "ru": [
      "Кстати, в описании видео я свяжусь с некоторыми прочтениями из Cisco."
    ]
  },
  {
    "time": [
      2140.64,
      2145.279
    ],
    "en": [
      "And this category shows which category of the exam topics list this question is from."
    ],
    "ru": [
      "И эта категория показывает, из какой категории списка тем экзамена относится этот вопрос."
    ]
  },
  {
    "time": [
      2145.279,
      2148.099
    ],
    "en": [
      "This is from the 'network access' category."
    ],
    "ru": [
      "Это из категории «доступ к сети»."
    ]
  },
  {
    "time": [
      2148.099,
      2152.009
    ],
    "en": [
      "Okay, so that's today's ExSim practice question."
    ],
    "ru": [
      "Хорошо, это вопрос сегодняшней практики ExSim."
    ]
  },
  {
    "time": [
      2152.009,
      2156.569
    ],
    "en": [
      "If you want to get a copy of ExSim for yourself, and I highly recommend you do, they are fantastic"
    ],
    "ru": [
      "Если вы хотите получить копию ExSim для себя, и я очень рекомендую вам это сделать, они фантастические"
    ]
  },
  {
    "time": [
      2156.569,
      2161.359
    ],
    "en": [
      "practice exams, please follow the link in the video description."
    ],
    "ru": [
      "практические экзамены, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2161.359,
      2166.64
    ],
    "en": [
      "There will be supplementary materials for this video."
    ],
    "ru": [
      "К этому видео будут добавлены дополнительные материалы."
    ]
  },
  {
    "time": [
      2166.64,
      2170.539
    ],
    "en": [
      "There will be a review flashcard deck to use with the software ‘Anki’."
    ],
    "ru": [
      "Будет выпущена обзорная колода карточек для использования с программным обеспечением «Anki»."
    ]
  },
  {
    "time": [
      2170.539,
      2173.2
    ],
    "en": [
      "Download the deck from the link in the description."
    ],
    "ru": [
      "Скачайте колоду по ссылке в описании."
    ]
  },
  {
    "time": [
      2173.2,
      2179.52
    ],
    "en": [
      "There will also be a packet tracer practice lab to help you practice the configurations from this video."
    ],
    "ru": [
      "Также будет проведена практическая лаборатория с трассировщиком пакетов, которая поможет вам попрактиковаться в настройках из этого видео."
    ]
  },
  {
    "time": [
      2179.52,
      2183.21
    ],
    "en": [
      "from this video. That will be in a separate video."
    ],
    "ru": [
      "из этого видео. Это будет в отдельном видео."
    ]
  },
  {
    "time": [
      2183.21,
      2189.049
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      2189.049,
      2198.539
    ],
    "en": [
      "Thank you to Samil, velvijaykum, C Mohd, Johan, Mark, Aleksa, Miguel, Yousif, Boson software,"
    ],
    "ru": [
      "Спасибо Samil, velvijaykum, C Mohd, Johan, Mark, Aleksa, Miguel, Yousif, Boson Software,"
    ]
  },
  {
    "time": [
      2198.539,
      2207.17
    ],
    "en": [
      "the creators of ExSim, by the way, Sidi, Magrathea, Devin,Charlsetta, Lito, Yonatan, Mike, Aleskander, and Vance."
    ],
    "ru": [
      "создатели ExSim, кстати, Сиди, Магратея, Девин, Шарлсетта, Лито, Йонатан, Майк, Алескандер и Вэнс."
    ]
  },
  {
    "time": [
      2207.17,
      2213.269
    ],
    "en": [
      "and Vance. Sorry if I pronounced your name incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "и Вэнс. Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      2213.269,
      2217.969
    ],
    "en": [
      "One of you is displaying at Channel failed to load, if this is you please let me know"
    ],
    "ru": [
      "Один из вас отображается на канале «Не удалось загрузить». Если это так, дайте мне знать"
    ]
  },
  {
    "time": [
      2217.969,
      2220.96
    ],
    "en": [
      "and I’ll see if YouTube can fix it."
    ],
    "ru": [
      "и я посмотрю, сможет ли YouTube это исправить."
    ]
  },
  {
    "time": [
      2220.96,
      2225.73
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, if you signed"
    ],
    "ru": [
      "Кстати, это список участников уровня JCNP на момент записи, если вы подписали"
    ]
  },
  {
    "time": [
      2225.73,
      2232.579
    ],
    "en": [
      "up recently and your name isn’t on here don’t worry, you’ll definitely be in the next video."
    ],
    "ru": [
      "недавно, и вашего имени здесь нет, не волнуйтесь, вы обязательно будете в следующем видео."
    ]
  },
  {
    "time": [
      2232.579,
      2234.16
    ],
    "en": [
      "next video. Thank you for watching."
    ],
    "ru": [
      "следующее видео. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      2234.16,
      2238.13
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      "Пожалуйста, подпишитесь на канал, поставьте лайк видео, оставьте комментарий и поделитесь видео"
    ]
  },
  {
    "time": [
      2238.13,
      2241.4
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      "со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      2241.4,
      2244.079
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      2244.079,
      2251.56
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через браузер Brave."
    ]
  },
  {
    "time": [
      2251.56,
      2251.56
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]