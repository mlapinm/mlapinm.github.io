let objs = [
  {
    "time": [
      0.0,
      3.930529
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA Packet Tracer"
    ]
  },
  {
    "time": [
      3.930529,
      7.107867
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "Вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      7.107867,
      13.489289
    ],
    "en": [
      "in this lab we will once again be troubleshooting the network topology from lab number seven"
    ],
    "ru": [
      "в этой лабораторной работе мы снова будем устранять неполадки сетевой топологии из лаборатории номер семь."
    ]
  },
  {
    "time": [
      13.489289,
      19.232841
    ],
    "en": [
      "in the previous lab number eight there was a single miss configuration on r1"
    ],
    "ru": [
      "в предыдущей лаборатории номер восемь была конфигурация одиночного промаха на r1"
    ]
  },
  {
    "time": [
      19.232841,
      24.733561
    ],
    "en": [
      "in this lab however there is one miss configuration per networking device"
    ],
    "ru": [
      "однако в этой лабораторной работе есть одна конфигурация пропуска для каждого сетевого устройства."
    ]
  },
  {
    "time": [
      24.733561,
      30.157865
    ],
    "en": [
      "meaning one on r1 one on switch one and one on switch two"
    ],
    "ru": [
      "означает один на r1, один на первом переключателе и один на втором переключателе"
    ]
  },
  {
    "time": [
      30.157865,
      34.221019
    ],
    "en": [
      "try to find and fix these errors on your own first"
    ],
    "ru": [
      "попробуйте сначала найти и исправить эти ошибки самостоятельно"
    ]
  },
  {
    "time": [
      34.221019,
      37.071551
    ],
    "en": [
      "then continue watching this video if you have trouble"
    ],
    "ru": [
      "тогда продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      37.071551,
      39.381775
    ],
    "en": [
      "or watch it after to check your solution ]"
    ],
    "ru": [
      "или просмотрите его позже, чтобы проверить свое решение]"
    ]
  },
  {
    "time": [
      39.381775,
      45.680372
    ],
    "en": [
      "in the last video I showed an example of how I would go about troubleshooting a problem"
    ],
    "ru": [
      "в последнем видео я показал пример того, как я могу решить проблему"
    ]
  },
  {
    "time": [
      45.680372,
      50.408821
    ],
    "en": [
      "in this video however I will just directly show the Miss configurations and fix them"
    ],
    "ru": [
      "однако в этом видео я просто покажу конфигурации Miss и исправлю их."
    ]
  },
  {
    "time": [
      50.408821,
      53.385461
    ],
    "en": [
      "so once again try to troubleshoot on your own first"
    ],
    "ru": [
      "так что еще раз попробуйте устранить неполадки самостоятельно"
    ]
  },
  {
    "time": [
      53.385461,
      61.169093
    ],
    "en": [
      "so PC one can't ping the other pcs in the network"
    ],
    "ru": [
      "поэтому компьютер не может пинговать другие компьютеры в сети"
    ]
  },
  {
    "time": [
      61.169093,
      64.021453
    ],
    "en": [
      "let's just check quickly on PC one"
    ],
    "ru": [
      "давайте просто быстро проверим на ПК один"
    ]
  },
  {
    "time": [
      64.021453,
      73.384277
    ],
    "en": [
      "ping PC two ping 10.0.0.1 30 doesn't work"
    ],
    "ru": [
      "пинг комп два пинг 10.0.0.1 30 не работает"
    ]
  },
  {
    "time": [
      73.384277,
      81.364369
    ],
    "en": [
      "ping pc3 ping 10.0.0.3 doesn't work"
    ],
    "ru": [
      "ping pc3 ping 10.0.0.3 не работает"
    ]
  },
  {
    "time": [
      81.364369,
      92.809351
    ],
    "en": [
      "ping PC 4 ping 10.0.0.1 31 doesn't work 89.32908 okay so let's fix the problem on our one first"
    ],
    "ru": [
      "ping PC 4 ping 10.0.0.1 31 не работает 89.32908 хорошо, давайте сначала исправим проблему на нашем"
    ]
  },
  {
    "time": [
      92.809351,
      99.665301
    ],
    "en": [
      "enable show IP interface brief"
    ],
    "ru": [
      "включить краткое отображение IP-интерфейса"
    ]
  },
  {
    "time": [
      99.665301,
      104.182689
    ],
    "en": [
      "look at the IP address of the dot thirteen sub-interface 10.0.0.13 sub interface"
    ],
    "ru": [
      "посмотрите IP-адрес субинтерфейса dot thirteen 10.0.0.13 субинтерфейса"
    ]
  },
  {
    "time": [
      104.182689,
      130.465533
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
      104.182689,
      130.465533
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
      130.465533,
      147.404786
    ],
    "en": [
      "let's fix it 132.02014 back to our one conf t interface g0 0.13 IP address 10.0.0.1 255.255.255.192"
    ],
    "ru": [
      "давайте исправим это 132.02014 обратно к нашему единственному интерфейсу конфигурации g0 0.13 IP-адрес 10.0.0.1 255.255.255.192"
    ]
  },
  {
    "time": [
      147.404786,
      157.555092
    ],
    "en": [
      "next let's check switch 1"
    ],
    "ru": [
      "Далее давайте проверим переключатель 1"
    ]
  },
  {
    "time": [
      157.555092,
      165.768194
    ],
    "en": [
      "enable show VLAN brief 162.1008 can you see the problem here"
    ],
    "ru": [
      "включить показать краткую информацию о VLAN 162.1008, вы можете увидеть здесь проблему"
    ]
  },
  {
    "time": [
      165.768194,
      169.022741
    ],
    "en": [
      "fastethernet 0/1 is in VLAN 12"
    ],
    "ru": [
      "fastethernet 0/1 находится в VLAN 12"
    ]
  },
  {
    "time": [
      169.022741,
      173.466428
    ],
    "en": [
      "it's supposed to be in VLAN 13 171.86684 let's change that"
    ],
    "ru": [
      "он должен быть в VLAN 13 171.86684, давайте изменим это"
    ]
  },
  {
    "time": [
      173.466428,
      183.106891
    ],
    "en": [
      "conf t interface f01 switch port access VLAN 13"
    ],
    "ru": [
      "conf t interface f01 коммутатор порт доступ к VLAN 13"
    ]
  },
  {
    "time": [
      183.106891,
      186.058684
    ],
    "en": [
      "ok switch 1 is now fixed"
    ],
    "ru": [
      "ОК, переключатель 1 теперь исправлен"
    ]
  },
  {
    "time": [
      186.058684,
      189.743329
    ],
    "en": [
      "finally let's go to switch 2"
    ],
    "ru": [
      "наконец-то перейдем к переключателю 2"
    ]
  },
  {
    "time": [
      189.743329,
      198.483492
    ],
    "en": [
      "enable show interfaces trunk 195.77054 nothing appears"
    ],
    "ru": [
      "включить показывать интерфейсы магистрали 195.77054 ничего не появляется"
    ]
  },
  {
    "time": [
      198.483492,
      202.021254
    ],
    "en": [
      "the link between switch 1 and switch two should be a trunk"
    ],
    "ru": [
      "связь между коммутатором 1 и коммутатором 2 должна быть магистралью"
    ]
  },
  {
    "time": [
      202.021254,
      206.840154
    ],
    "en": [
      "so that it can carry traffic from multiple VLANs 205.10974 so we have to fix this"
    ],
    "ru": [
      "чтобы он мог переносить трафик из нескольких VLAN 205.10974, поэтому мы должны исправить это"
    ]
  },
  {
    "time": [
      206.840154,
      213.551051
    ],
    "en": [
      "conf T interface g0 1 switch port mode trunk"
    ],
    "ru": [
      "conf T interface g0 1 коммутатор режим порта транк"
    ]
  },
  {
    "time": [
      213.551051,
      217.064455
    ],
    "en": [
      "ok that should fix the problem"
    ],
    "ru": [
      "хорошо, это должно решить проблему"
    ]
  },
  {
    "time": [
      217.064455,
      223.922331
    ],
    "en": [
      "so let's test out our solution"
    ],
    "ru": [
      "так что давайте протестируем наше решение"
    ]
  },
  {
    "time": [
      223.922331,
      228.466277
    ],
    "en": [
      "the scenario stated that there was one miss configuration on each device"
    ],
    "ru": [
      "в сценарии говорилось, что на каждом устройстве была одна неудачная конфигурация"
    ]
  },
  {
    "time": [
      228.466277,
      229.908992
    ],
    "en": [
      "and we fixed each one"
    ],
    "ru": [
      "и мы исправили каждую"
    ]
  },
  {
    "time": [
      229.908992,
      234.250036
    ],
    "en": [
      "so PC one should now be able to reach the other pcs"
    ],
    "ru": [
      "так что ПК теперь должен иметь доступ к другим ПК"
    ]
  },
  {
    "time": [
      234.250036,
      238.857104
    ],
    "en": [
      "so let's go to PC 1 and pin PC 2"
    ],
    "ru": [
      "так что давайте перейдем к ПК 1 и закрепим ПК 2"
    ]
  },
  {
    "time": [
      238.857104,
      242.141826
    ],
    "en": [
      "ping 10.0.0.1 30"
    ],
    "ru": [
      "пинг 10.0.0.1 30"
    ]
  },
  {
    "time": [
      242.141826,
      260.294008
    ],
    "en": [
      "the pin works next let's ping PC 3 pin 10.0.0.3 okay it works"
    ],
    "ru": [
      "штырь работает дальше давайте пингуем компьютер 3 штырь 10.0.0.3 хорошо работает"
    ]
  },
  {
    "time": [
      260.294008,
      272.821308
    ],
    "en": [
      "finally PC 4 ping 10.0.0.1 31 it works as well"
    ],
    "ru": [
      "наконец ПК 4 пинг 10.0.0.1 31 тоже работает"
    ]
  },
  {
    "time": [
      272.821308,
      275.373626
    ],
    "en": [
      "we have successfully fixed the network"
    ],
    "ru": [
      "мы успешно исправили сеть"
    ]
  },
  {
    "time": [
      275.373626,
      280.519754
    ],
    "en": [
      "thank you for watching"
    ],
    "ru": [
      "Спасибо за просмотр"
    ]
  },
  {
    "time": [
      280.519754,
      283.254971
    ],
    "en": [
      "I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Надеюсь, эта лабораторная работа и видео были для вас полезны"
    ]
  },
  {
    "time": [
      283.254971,
      286.370618
    ],
    "en": [
      "please subscribe for future labs like this"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      286.370618,
      287.929196
    ],
    "en": [
      "which will be released weekly"
    ],
    "ru": [
      "который будет выходить еженедельно"
    ]
  },
  {
    "time": [
      287.929196,
      291.436038
    ],
    "en": [
      "if you have requests for any specific labs"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям"
    ]
  },
  {
    "time": [
      291.436038,
      293.258864
    ],
    "en": [
      "let me know in the comment section"
    ],
    "ru": [
      "дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      293.258864,
      299.122762
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin donations via the address in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах по адресу в описании"
    ]
  },
  {
    "time": [
      299.122762,
      302.667237
    ],
    "en": [
      "I am also a brave verified publisher"
    ],
    "ru": [
      "Я также храбрый проверенный издатель"
    ]
  },
  {
    "time": [
      302.667237,
      307.888986
    ],
    "en": [
      "and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "и принимайте пожертвования летучих мышей или токенов основного внимания в смелом браузере"
    ]
  },
  {
    "time": [
      307.888986,
      307.888986
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
      307.888986,
      307.888986
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
      307.888986,
      307.888986
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]