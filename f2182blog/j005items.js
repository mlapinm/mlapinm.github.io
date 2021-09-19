var objs = [
  {
    "time": [
      1.05,
      3.55
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
      3.55,
      8.58
    ],
    "en": [
      "This is a free, complete course for the CCNA 200-301."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA 200-301."
    ]
  },
  {
    "time": [
      8.58,
      12.45
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
      12.45,
      18.98
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
      18.98,
      22.72
    ],
    "en": [
      "Thanks for your help. Let’s get started."
    ],
    "ru": [
      "Спасибо за вашу помощь. Давайте начнем."
    ]
  },
  {
    "time": [
      22.72,
      29.439
    ],
    "en": [
      "In this lab you will use what you learned in Day 2’s lecture video to connect these network devices together."
    ],
    "ru": [
      "В этой лабораторной работе вы будете использовать то, что вы узнали из видео лекции дня 2, чтобы соединить эти сетевые устройства вместе."
    ]
  },
  {
    "time": [
      29.439,
      33.04
    ],
    "en": [
      "You can select various types of connections from the bottom left here."
    ],
    "ru": [
      "Здесь вы можете выбрать различные типы подключений в нижнем левом углу."
    ]
  },
  {
    "time": [
      33.04,
      40.74
    ],
    "en": [
      "We’ll be using copper straight-through, copper cross-over, and fiber connections."
    ],
    "ru": [
      "Мы будем использовать медные прямые, медные перекрестные и оптоволоконные соединения."
    ]
  },
  {
    "time": [
      40.74,
      46.219
    ],
    "en": [
      "Note that packet tracer doesn’t differentiate between single-mode and multimode fiber, but"
    ],
    "ru": [
      "Обратите внимание, что пакетный трассировщик не различает одномодовое и многомодовое волокно, но"
    ]
  },
  {
    "time": [
      46.219,
      50.95
    ],
    "en": [
      "try to think about which type would be appropriate when you use a fiber connection."
    ],
    "ru": [
      "попробуйте подумать о том, какой тип будет подходящим при использовании оптоволоконного соединения."
    ]
  },
  {
    "time": [
      50.95,
      54.37
    ],
    "en": [
      "So, I’ll start here in the bottom left."
    ],
    "ru": [
      "Итак, я начну с левого нижнего угла."
    ]
  },
  {
    "time": [
      54.37,
      59.94
    ],
    "en": [
      "First, the connection between SW3 and PC1."
    ],
    "ru": [
      "Во-первых, связь между SW3 и PC1."
    ]
  },
  {
    "time": [
      59.94,
      65.3
    ],
    "en": [
      "For the purpose of this lab, we’re assuming that Auto MDI-X is disabled or not supported"
    ],
    "ru": [
      "В рамках этой лабораторной работы мы предполагаем, что Auto MDI-X отключен или не поддерживается."
    ]
  },
  {
    "time": [
      65.3,
      72.64
    ],
    "en": [
      "on the devices, so we have to think about whether to use a straight-through or cross-over copper cable."
    ],
    "ru": [
      "на устройствах, поэтому мы должны подумать, использовать ли прямой или перекрестный медный кабель."
    ]
  },
  {
    "time": [
      72.64,
      79.97
    ],
    "en": [
      "PCs transmit data on pins 1 and 2, and receive data on pins 3 and 6."
    ],
    "ru": [
      "Компьютеры передают данные по контактам 1 и 2 и получают данные по контактам 3 и 6."
    ]
  },
  {
    "time": [
      79.97,
      87.75
    ],
    "en": [
      "Switches are the opposite, they transmit data on pins 3 and 6 and receive data on pins 1 and 2."
    ],
    "ru": [
      "У переключателей все наоборот, они передают данные на контакты 3 и 6 и принимают данные на контакты 1 и 2."
    ]
  },
  {
    "time": [
      87.75,
      95.93
    ],
    "en": [
      "So, we can use a straight-through cable to connect all of these PCs, as well as SRV1, to the switches."
    ],
    "ru": [
      "Итак, мы можем использовать прямой кабель для подключения всех этих ПК, а также SRV1 к коммутаторам."
    ]
  },
  {
    "time": [
      95.93,
      101.69
    ],
    "en": [
      "Select straight-through cable here, and connect the PCs to their appropriate switch."
    ],
    "ru": [
      "Выберите здесь прямой кабель и подключите ПК к соответствующему коммутатору."
    ]
  },
  {
    "time": [
      101.69,
      109.57
    ],
    "en": [
      "PC1 to SW3..connect the fastethernet0 interface on the PC, which is the PC’s network interface"
    ],
    "ru": [
      "ПК1 к SW3 ... подключите интерфейс fastethernet0 к ПК, который является сетевым интерфейсом ПК."
    ]
  },
  {
    "time": [
      109.57,
      113.97
    ],
    "en": [
      "card, to any of the fastethernet interfaces on the switch."
    ],
    "ru": [
      "card к любому из интерфейсов fastethernet на коммутаторе."
    ]
  },
  {
    "time": [
      113.97,
      126.56
    ],
    "en": [
      "Next is PC2 to SW4...PC3 to SW7...and SRV1 to SW8."
    ],
    "ru": [
      "Далее идут от ПК2 к SW4 ... от ПК3 к SW7 ... и от SRV1 к SW8."
    ]
  },
  {
    "time": [
      126.56,
      130.08
    ],
    "en": [
      "Now we’ve got a bunch of switches to connect together."
    ],
    "ru": [
      "Теперь у нас есть несколько переключателей, которые нужно соединить вместе."
    ]
  },
  {
    "time": [
      130.08,
      134.59
    ],
    "en": [
      "Devices of the same type require crossover cables, or else the transmit pins will be"
    ],
    "ru": [
      "Для устройств того же типа требуются перекрестные кабели, иначе контакты передачи будут"
    ]
  },
  {
    "time": [
      134.59,
      140.45
    ],
    "en": [
      "connected to the transmit pins, and the receive pins will be connected to the receive pins,"
    ],
    "ru": [
      "подключены к выводам передачи, а выводы приема будут подключены к выводам приема,"
    ]
  },
  {
    "time": [
      140.45,
      143.7
    ],
    "en": [
      "which will not allow data to be sent successfully between the devices."
    ],
    "ru": [
      "что не позволит успешно передавать данные между устройствами."
    ]
  },
  {
    "time": [
      143.7,
      159.97
    ],
    "en": [
      "So, let’s connect these switches, SW3 to SW1...SW1 to SW2...SW4 to SW2...SW7 to SW5..."
    ],
    "ru": [
      "Итак, давайте подключим эти переключатели, SW3 к SW1 ... SW1 к SW2 ... SW4 к SW2 ... SW7 к SW5 ..."
    ]
  },
  {
    "time": [
      159.97,
      171.24
    ],
    "en": [
      "SW5 to SW6...and last SW8 to SW6."
    ],
    "ru": [
      "SW5 - SW6 ... и последний SW8 - SW6."
    ]
  },
  {
    "time": [
      171.24,
      174.59
    ],
    "en": [
      "Next let’s connect these switches to the routers."
    ],
    "ru": [
      "Теперь давайте подключим эти коммутаторы к маршрутизаторам."
    ]
  },
  {
    "time": [
      174.59,
      182.09
    ],
    "en": [
      "Routers are like PCs, they transmit on pins 1 and 2 and receive on pins 3 and 6."
    ],
    "ru": [
      "Маршрутизаторы похожи на ПК, они передают на контакты 1 и 2 и принимают на контактах 3 и 6."
    ]
  },
  {
    "time": [
      182.09,
      185.99
    ],
    "en": [
      "So let’s connect them to the switches with straight-through cables."
    ],
    "ru": [
      "Итак, давайте подключим их к коммутаторам прямыми кабелями."
    ]
  },
  {
    "time": [
      185.99,
      200.4
    ],
    "en": [
      "SW1 to R2...SW2 to R2...SW5 to R4...and SW6 to R4."
    ],
    "ru": [
      "SW1 - R2 ... SW2 - R2 ... SW5 - R4 ... и SW6 - R4."
    ]
  },
  {
    "time": [
      200.4,
      204.83
    ],
    "en": [
      "Now it’s time to connect the routers."
    ],
    "ru": [
      "Пришло время подключить маршрутизаторы."
    ]
  },
  {
    "time": [
      204.83,
      211.12
    ],
    "en": [
      "Since they are the same device type, we need to use crossover cables if we use copper cabling."
    ],
    "ru": [
      "Поскольку они относятся к одному типу устройств, нам необходимо использовать перекрестные кабели, если мы используем медные кабели."
    ]
  },
  {
    "time": [
      211.12,
      214.43
    ],
    "en": [
      "Take care to look at the distances here."
    ],
    "ru": [
      "Обратите внимание на расстояния здесь."
    ]
  },
  {
    "time": [
      214.43,
      221.4
    ],
    "en": [
      "Since R1 and R2 are just 50 meters apart, we can use copper cabling, which permits distances"
    ],
    "ru": [
      "Поскольку R1 и R2 находятся всего в 50 метрах друг от друга, мы можем использовать медные кабели, которые позволяют расстояния"
    ]
  },
  {
    "time": [
      221.4,
      223.849
    ],
    "en": [
      "up to 100 meters."
    ],
    "ru": [
      "до 100 метров."
    ]
  },
  {
    "time": [
      223.849,
      233.79
    ],
    "en": [
      "So I’ll connect R2 to R1 with a crossover cable. R1 and R3 are 3 kilometers apart,"
    ],
    "ru": [
      "Итак, я подключу R2 к R1 с помощью перекрестного кабеля. R1 и R3 находятся на расстоянии 3 км друг от друга,"
    ]
  },
  {
    "time": [
      233.79,
      238.28
    ],
    "en": [
      "so clearly we will have to use a fiber-optic connection here."
    ],
    "ru": [
      "так что очевидно, что здесь нам придется использовать оптоволоконное соединение."
    ]
  },
  {
    "time": [
      238.28,
      243.96
    ],
    "en": [
      "Although packet tracer doesnt differentiate between single-mode and multimode, which is appropriate here?"
    ],
    "ru": [
      "Хотя пакетный трассировщик не делает различий между одномодовым и многомодовым, что здесь уместно?"
    ]
  },
  {
    "time": [
      243.96,
      251.069
    ],
    "en": [
      "Well, mutli mode fiber allows distances up to 550 meters, which is more than UTP, but"
    ],
    "ru": [
      "Что ж, многомодовое волокно допускает расстояния до 550 метров, что больше, чем у UTP, но"
    ]
  },
  {
    "time": [
      251.069,
      254.18
    ],
    "en": [
      "not enough for this connection."
    ],
    "ru": [
      "недостаточно для этого подключения."
    ]
  },
  {
    "time": [
      254.18,
      259.98
    ],
    "en": [
      "Single-mode allows much longer distances, 30 kilometers, 40 kilometers, even more, so"
    ],
    "ru": [
      "Одномодовый режим позволяет использовать гораздо большие расстояния, 30 километров, 40 километров и даже больше, поэтому"
    ]
  },
  {
    "time": [
      259.98,
      263.099
    ],
    "en": [
      "in this case we would use single-mode fiber."
    ],
    "ru": [
      "в этом случае мы будем использовать одномодовое волокно."
    ]
  },
  {
    "time": [
      263.099,
      269.15
    ],
    "en": [
      "Let’s connect them, note that this symbol here is used for fiber optic connections in"
    ],
    "ru": [
      "Давайте подключим их, обратите внимание, что этот символ здесь используется для оптоволоконных соединений в"
    ]
  },
  {
    "time": [
      269.15,
      275.37
    ],
    "en": [
      "packet tracer, notice the two spaces, for both the transmit and receive cables."
    ],
    "ru": [
      "пакетный трассировщик, обратите внимание на два пробела как для передающего, так и для приемного кабелей."
    ]
  },
  {
    "time": [
      275.37,
      281.029
    ],
    "en": [
      "Finally, R3 and R4 are separated by 250 meters."
    ],
    "ru": [
      "Наконец, R3 и R4 разделены 250 метрами."
    ]
  },
  {
    "time": [
      281.029,
      287.189
    ],
    "en": [
      "That’s too long for a UTP cable, but also not so long that we need single-mode fiber."
    ],
    "ru": [
      "Это слишком долго для кабеля UTP, но и не настолько, чтобы нам понадобилось одномодовое оптоволокно."
    ]
  },
  {
    "time": [
      287.189,
      290.15
    ],
    "en": [
      "A multimode fiber cable would be sufficient."
    ],
    "ru": [
      "Многомодового оптоволоконного кабеля будет достаточно."
    ]
  },
  {
    "time": [
      290.15,
      296.289
    ],
    "en": [
      "Let’s connect them together...Okay, the devices are now all connected."
    ],
    "ru": [
      "Давайте соединим их вместе ... Хорошо, теперь все устройства подключены."
    ]
  },
  {
    "time": [
      296.289,
      300.46
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Это все для этой лаборатории."
    ]
  },
  {
    "time": [
      300.46,
      301.65
    ],
    "en": [
      "Thank you for watching."
    ],
    "ru": [
      "Спасибо за просмотр."
    ]
  },
  {
    "time": [
      301.65,
      303.4
    ],
    "en": [
      "That's all for this video."
    ],
    "ru": [
      "Это все для этого видео."
    ]
  },
  {
    "time": [
      303.4,
      308.879
    ],
    "en": [
      "If you want to show your support, please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "Если вы хотите показать свою поддержку, подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      308.879,
      312.439
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA."
    ],
    "ru": [
      "и поделитесь видео со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      312.439,
      318.68
    ],
    "en": [
      "I accept donations via cryptocurrency or Patreon via the links in the description."
    ],
    "ru": [
      "Я принимаю пожертвования через криптовалюту или Patreon по ссылкам в описании."
    ]
  },
  {
    "time": [
      318.68,
      326.419
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
      326.419,
      330.559
    ],
    "en": [
      "Click the link in the description to check out Brave, a fast and sleek browser that pays"
    ],
    "ru": [
      "Щелкните ссылку в описании, чтобы попробовать Brave, быстрый и удобный браузер, который платит"
    ]
  },
  {
    "time": [
      330.559,
      330.559
    ],
    "en": [
      "you to surf the Internet."
    ],
    "ru": [
      "вы бродите по Интернету."
    ]
  }
]
