let objs = [
  {
    "time": [
      0.0,
      4.345563
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
      4.345563,
      7.628451
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
      7.628451,
      13.375586
    ],
    "en": [
      "in this lab we will take another look at the port security function of Cisco switches"
    ],
    "ru": [
      "в этой лабораторной работе мы еще раз рассмотрим функцию безопасности портов коммутаторов Cisco."
    ]
  },
  {
    "time": [
      13.375586,
      18.143208
    ],
    "en": [
      "specifically we will learn about the sticky MAC address function"
    ],
    "ru": [
      "в частности, мы узнаем о функции закрепления MAC-адреса"
    ]
  },
  {
    "time": [
      18.143208,
      24.561384
    ],
    "en": [
      "the sticky MAC address function of port security saved secure MAC addresses into the switch configuration"
    ],
    "ru": [
      "функция липкого MAC-адреса безопасности порта сохраняет безопасные MAC-адреса в конфигурации коммутатора"
    ]
  },
  {
    "time": [
      24.561384,
      28.865184
    ],
    "en": [
      "when they are dynamically learned on a switch port with port security enabled"
    ],
    "ru": [
      "когда они динамически изучаются на порту коммутатора с включенной защитой порта"
    ]
  },
  {
    "time": [
      28.865184,
      32.105499
    ],
    "en": [
      "try to complete this lab yourself first"
    ],
    "ru": [
      "сначала попробуйте пройти эту лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      32.105499,
      37.100898
    ],
    "en": [
      "then continue watching this video if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его позже, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      37.100898,
      41.728882
    ],
    "en": [
      "there are a few more steps in this lab than in my previous labs"
    ],
    "ru": [
      "в этой лабораторной работе на несколько шагов больше, чем в моих предыдущих."
    ]
  },
  {
    "time": [
      41.728882,
      43.440883
    ],
    "en": [
      "but these are all pretty short steps"
    ],
    "ru": [
      "но это все довольно короткие шаги"
    ]
  },
  {
    "time": [
      43.440883,
      49.305773
    ],
    "en": [
      "step one is to enable port security on the switch ports connected to end hosts"
    ],
    "ru": [
      "Шаг первый - включить безопасность портов на портах коммутатора, подключенных к конечным хостам."
    ]
  },
  {
    "time": [
      49.305773,
      52.136987
    ],
    "en": [
      "let's go on switch one first"
    ],
    "ru": [
      "давай сначала переключимся"
    ]
  },
  {
    "time": [
      52.136987,
      59.324556
    ],
    "en": [
      "enable counf T interface F 0 2"
    ],
    "ru": [
      "включить интерфейс Counf T F 0 2"
    ]
  },
  {
    "time": [
      59.324556,
      63.868451
    ],
    "en": [
      "remember we have to set the interface as an access port first"
    ],
    "ru": [
      "помните, что мы должны сначала установить интерфейс как порт доступа"
    ]
  },
  {
    "time": [
      63.868451,
      67.024898
    ],
    "en": [
      "so switch port mode access"
    ],
    "ru": [
      "так что переключить режим порта доступа"
    ]
  },
  {
    "time": [
      67.024898,
      69.564311
    ],
    "en": [
      "switch port port security"
    ],
    "ru": [
      "безопасность порта порта коммутатора"
    ]
  },
  {
    "time": [
      69.564311,
      73.686722
    ],
    "en": [
      "that's all for switch 1 now let's do the same on switch 2"
    ],
    "ru": [
      "это все для переключателя 1, теперь давайте сделаем то же самое для переключателя 2"
    ]
  },
  {
    "time": [
      73.686722,
      82.548547
    ],
    "en": [
      "enable conf t interface F 0 2 switch port mode access"
    ],
    "ru": [
      "enable conf t interface F 0 2 переключатель режима порта доступа"
    ]
  },
  {
    "time": [
      82.548547,
      84.993764
    ],
    "en": [
      "switch port port security"
    ],
    "ru": [
      "безопасность порта порта коммутатора"
    ]
  },
  {
    "time": [
      84.993764,
      88.467634
    ],
    "en": [
      "now let's go straight into step 2"
    ],
    "ru": [
      "А теперь перейдем к шагу 2"
    ]
  },
  {
    "time": [
      88.467634,
      91.469396
    ],
    "en": [
      "which is to ping from pc1 to pc2"
    ],
    "ru": [
      "который должен пинговать с ПК1 на ПК2"
    ]
  },
  {
    "time": [
      91.469396,
      93.620753
    ],
    "en": [
      "to generate traffic between them"
    ],
    "ru": [
      "для генерации трафика между ними"
    ]
  },
  {
    "time": [
      93.620753,
      98.490261
    ],
    "en": [
      "remember that no traffic is passing between these pcs by default"
    ],
    "ru": [
      "помните, что по умолчанию между этими компьютерами нет трафика"
    ]
  },
  {
    "time": [
      98.490261,
      101.751385
    ],
    "en": [
      "so the switches won't learn the MAC addresses of the PCs"
    ],
    "ru": [
      "поэтому коммутаторы не узнают MAC-адреса ПК"
    ]
  },
  {
    "time": [
      101.751385,
      103.983482
    ],
    "en": [
      "until we send some traffic between them"
    ],
    "ru": [
      "пока мы не отправим трафик между ними"
    ]
  },
  {
    "time": [
      103.983482,
      106.340348
    ],
    "en": [
      "I'll ping from PC one"
    ],
    "ru": [
      "Я пингую с ПК один"
    ]
  },
  {
    "time": [
      106.340348,
      114.831355
    ],
    "en": [
      "ping 192.168.1.12 there we go"
    ],
    "ru": [
      "пинг 192.168.1.12 поехали"
    ]
  },
  {
    "time": [
      114.831355,
      120.817022
    ],
    "en": [
      "step 3 is to view the secure MAC addresses on switch 1"
    ],
    "ru": [
      "Шаг 3 - просмотреть безопасные MAC-адреса на коммутаторе 1"
    ]
  },
  {
    "time": [
      120.817022,
      123.037859
    ],
    "en": [
      "I'll go back to switch 1"
    ],
    "ru": [
      "Я вернусь к переключателю 1"
    ]
  },
  {
    "time": [
      123.037859,
      130.401318
    ],
    "en": [
      "and now I'll use the command show port security address"
    ],
    "ru": [
      "и теперь я буду использовать команду показать адрес безопасности порта"
    ]
  },
  {
    "time": [
      130.401318,
      131.868589
    ],
    "en": [
      "as in the previous lab"
    ],
    "ru": [
      "как в предыдущей лаборатории"
    ]
  },
  {
    "time": [
      131.868589,
      138.927039
    ],
    "en": [
      "as you can see there is a dynamically learned secure MAC address on the Fast Ethernet 0 2 interface"
    ],
    "ru": [
      "как вы можете видеть, на интерфейсе Fast Ethernet 0 2 есть динамически изученный безопасный MAC-адрес."
    ]
  },
  {
    "time": [
      138.927039,
      141.475942
    ],
    "en": [
      "which must be PC ones"
    ],
    "ru": [
      "которые должны быть ПК"
    ]
  },
  {
    "time": [
      141.475942,
      150.981838
    ],
    "en": [
      "step four says to check the configuration of switch ones Fast Ethernet 0 to interface in the running configuration"
    ],
    "ru": [
      "на четвертом шаге говорится, что нужно проверить конфигурацию коммутаторов Fast Ethernet 0 для подключения в текущей конфигурации"
    ]
  },
  {
    "time": [
      150.981838,
      154.028618
    ],
    "en": [
      "show running config"
    ],
    "ru": [
      "показать текущую конфигурацию"
    ]
  },
  {
    "time": [
      154.028618,
      160.911008
    ],
    "en": [
      "here it is as you can see there are only the two commands we entered before"
    ],
    "ru": [
      "здесь, как вы можете видеть, есть только две команды, которые мы ввели ранее"
    ]
  },
  {
    "time": [
      160.911008,
      164.928422
    ],
    "en": [
      "switch port mode access and switch port port security"
    ],
    "ru": [
      "доступ в режиме порта коммутатора и безопасность порта порта коммутатора"
    ]
  },
  {
    "time": [
      164.928422,
      170.861465
    ],
    "en": [
      "remember this as we will contrast it with sticky mag address configuration later"
    ],
    "ru": [
      "помните об этом, так как позже мы будем сравнивать его с конфигурацией липкого адреса."
    ]
  },
  {
    "time": [
      170.861465,
      175.782073
    ],
    "en": [
      "step 5 is to save the running config and reload the switch"
    ],
    "ru": [
      "Шаг 5 - сохранить текущую конфигурацию и перезагрузить коммутатор."
    ]
  },
  {
    "time": [
      175.782073,
      184.704112
    ],
    "en": [
      "I'll use write to save then reload 180.11067 ok now the switch is reloading"
    ],
    "ru": [
      "Я использую запись для сохранения, затем перезагружаю 180.11067 хорошо, теперь коммутатор перезагружается"
    ]
  },
  {
    "time": [
      184.704112,
      195.112728
    ],
    "en": [
      "step 6 is to view the secure MAC addresses on switch 1 again"
    ],
    "ru": [
      "Шаг 6 - снова просмотреть безопасные MAC-адреса на коммутаторе 1"
    ]
  },
  {
    "time": [
      195.112728,
      200.722924
    ],
    "en": [
      "do you think PC ones MAC address will still be saved as a secure MAC address"
    ],
    "ru": [
      "Как вы думаете, MAC-адрес ПК по-прежнему будет сохранен как безопасный MAC-адрес"
    ]
  },
  {
    "time": [
      200.722924,
      208.361641
    ],
    "en": [
      "we saved the running configuration but PC ones MAC address wasn't anywhere in the running configuration"
    ],
    "ru": [
      "мы сохранили текущую конфигурацию, но MAC-адрес ПК отсутствовал в текущей конфигурации"
    ]
  },
  {
    "time": [
      208.361641,
      213.068455
    ],
    "en": [
      "so let's check the port security address table again"
    ],
    "ru": [
      "так что давайте еще раз проверим таблицу адресов безопасности порта"
    ]
  },
  {
    "time": [
      213.068455,
      222.268412
    ],
    "en": [
      "enable show port security address 217.6333 as you can see PC ones MAC address is no longer present"
    ],
    "ru": [
      "включить показывать адрес безопасности порта 217.6333, так как вы можете видеть, что MAC-адрес ПК больше не присутствует"
    ]
  },
  {
    "time": [
      222.268412,
      227.983235
    ],
    "en": [
      "dynamically learned secure MAC addresses will not be retained when you restart the switch"
    ],
    "ru": [
      "динамически изученные безопасные MAC-адреса не будут сохранены при перезапуске коммутатора"
    ]
  },
  {
    "time": [
      227.983235,
      235.363753
    ],
    "en": [
      "even if you save the running configuration because the address isn't actually entered into the runner configuration when it is dynamically learned"
    ],
    "ru": [
      "даже если вы сохраняете текущую конфигурацию, потому что адрес фактически не вводится в конфигурацию бегуна, когда он динамически запоминается"
    ]
  },
  {
    "time": [
      235.363753,
      244.266878
    ],
    "en": [
      "step 7 is to enable the sticky secure MAC address feature on switch ones f02 interface"
    ],
    "ru": [
      "Шаг 7 - включить функцию закрепления безопасного MAC-адреса на интерфейсе f02 коммутатора."
    ]
  },
  {
    "time": [
      244.266878,
      258.736498
    ],
    "en": [
      "conf t interface f0 2 249.13973 now this feature is enabled with this command 252.65166 switch port port security MAC address sticky"
    ],
    "ru": [
      "conf t interface f0 2 249.13973 теперь эта функция включается с помощью этой команды 252.65166 порт коммутатора безопасность порта MAC-адрес закреплен"
    ]
  },
  {
    "time": [
      258.736498,
      260.519249
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      260.519249,
      264.368246
    ],
    "en": [
      "now let's ping between the PCs again to generate traffic"
    ],
    "ru": [
      "теперь давайте снова пингуем между ПК, чтобы генерировать трафик"
    ]
  },
  {
    "time": [
      264.368246,
      271.617883
    ],
    "en": [
      "on PC one ping 192.168.1.11"
    ],
    "ru": [
      "на ПК один пинг 192.168.1.11"
    ]
  },
  {
    "time": [
      271.617883,
      274.760441
    ],
    "en": [
      "that's all for step 7"
    ],
    "ru": [
      "это все для шага 7"
    ]
  },
  {
    "time": [
      274.760441,
      281.388544
    ],
    "en": [
      "step 8 is to view the secure MAC addresses of switch 1"
    ],
    "ru": [
      "Шаг 8 - просмотреть безопасные MAC-адреса коммутатора 1"
    ]
  },
  {
    "time": [
      281.388544,
      283.143796
    ],
    "en": [
      "then the running config"
    ],
    "ru": [
      "затем текущая конфигурация"
    ]
  },
  {
    "time": [
      283.143796,
      288.849657
    ],
    "en": [
      "so on switch 1 show port security address"
    ],
    "ru": [
      "поэтому на коммутаторе 1 отображается адрес безопасности порта"
    ]
  },
  {
    "time": [
      288.849657,
      291.802717
    ],
    "en": [
      "there is PC ones MAC address again"
    ],
    "ru": [
      "снова есть MAC-адрес ПК"
    ]
  },
  {
    "time": [
      291.802717,
      295.151737
    ],
    "en": [
      "this time it is listed as a secure sticky address"
    ],
    "ru": [
      "на этот раз он указан как безопасный липкий адрес"
    ]
  },
  {
    "time": [
      295.151737,
      311.926622
    ],
    "en": [
      "what's the difference well let's check the running configuration 300.03205 show run as you can see in addition to the three commands we manually configured on the interface 309.1951 there is a fourth one which we didn't configure"
    ],
    "ru": [
      "какая разница, давайте проверим текущую конфигурацию 300.03205 show run, как вы можете видеть, помимо трех команд, которые мы вручную настроили на интерфейсе 309.1951, есть четвертая, которую мы не настраивали"
    ]
  },
  {
    "time": [
      311.926622,
      316.075433
    ],
    "en": [
      "switch port port security MAC address sticky"
    ],
    "ru": [
      "порт коммутатора безопасность порта MAC-адрес залипание"
    ]
  },
  {
    "time": [
      316.075433,
      318.387568
    ],
    "en": [
      "followed by PC ones MAC address"
    ],
    "ru": [
      "затем MAC-адрес ПК"
    ]
  },
  {
    "time": [
      318.387568,
      322.326921
    ],
    "en": [
      "this is because we enabled the sticky feature"
    ],
    "ru": [
      "это потому, что мы включили липкую функцию"
    ]
  },
  {
    "time": [
      322.326921,
      329.909723
    ],
    "en": [
      "when this feature is enabled the switch saves dynamically learned secure MAC addresses to the running configuration of the switch"
    ],
    "ru": [
      "когда эта функция включена, коммутатор сохраняет динамически полученные безопасные MAC-адреса в текущую конфигурацию коммутатора."
    ]
  },
  {
    "time": [
      329.909723,
      335.938255
    ],
    "en": [
      "step nine is to save the running configuration and reload again"
    ],
    "ru": [
      "девятый шаг - сохранить текущую конфигурацию и перезагрузить снова."
    ]
  },
  {
    "time": [
      335.938255,
      337.229666
    ],
    "en": [
      "let's do that"
    ],
    "ru": [
      "Давайте сделаем это"
    ]
  },
  {
    "time": [
      337.229666,
      340.319308
    ],
    "en": [
      "write reload"
    ],
    "ru": [
      "написать перезагрузить"
    ]
  },
  {
    "time": [
      340.319308,
      351.921145
    ],
    "en": [
      "step 10 is to view the secure MAC addresses on switch one once again"
    ],
    "ru": [
      "Шаг 10 - еще раз просмотреть безопасные MAC-адреса на первом коммутаторе."
    ]
  },
  {
    "time": [
      351.921145,
      357.277171
    ],
    "en": [
      "this time do you expect to see PC ones MAC address in the table"
    ],
    "ru": [
      "на этот раз вы ожидаете увидеть MAC-адрес компьютеров в таблице"
    ]
  },
  {
    "time": [
      357.277171,
      365.295647
    ],
    "en": [
      "PC ones MAC address was saved to the running configuration of switch 1 361.95219 and we saved the running configuration before reloading"
    ],
    "ru": [
      "MAC-адрес ПК был сохранен в рабочей конфигурации коммутатора 1361.95219, и мы сохранили текущую конфигурацию перед перезагрузкой."
    ]
  },
  {
    "time": [
      365.295647,
      368.594705
    ],
    "en": [
      "so it should be in the table even after restarting"
    ],
    "ru": [
      "поэтому он должен быть в таблице даже после перезапуска"
    ]
  },
  {
    "time": [
      368.594705,
      371.021187
    ],
    "en": [
      "let's check"
    ],
    "ru": [
      "Давайте проверим"
    ]
  },
  {
    "time": [
      371.021187,
      376.133495
    ],
    "en": [
      "enable show port security address"
    ],
    "ru": [
      "включить показывать адрес безопасности порта"
    ]
  },
  {
    "time": [
      376.133495,
      384.595637
    ],
    "en": [
      "as expected PC ones MAC address is still saved as a secure MAC address on the f02 interface"
    ],
    "ru": [
      "как и ожидалось, MAC-адрес ПК по-прежнему сохраняется как безопасный MAC-адрес на интерфейсе f02"
    ]
  },
  {
    "time": [
      384.595637,
      393.555175
    ],
    "en": [
      "so to review without the sticky feature enabled dynamically learned secure MAC addresses are not retained when the switch is reloaded"
    ],
    "ru": [
      "поэтому для просмотра без включения функции закрепления динамически изученные безопасные MAC-адреса не сохраняются при перезагрузке коммутатора"
    ]
  },
  {
    "time": [
      393.555175,
      404.812631
    ],
    "en": [
      "the sticky MAC address learning feature however automatically saves these addresses to the running configuration 400.4179 and thus will be retained upon reload if the runner configuration is saved"
    ],
    "ru": [
      "однако функция запоминания MAC-адресов автоматически сохраняет эти адреса в текущей конфигурации 400.4179 и, таким образом, они будут сохранены при перезагрузке, если сохранена конфигурация бегуна."
    ]
  },
  {
    "time": [
      404.812631,
      407.109874
    ],
    "en": [
      "that's all for this lab"
    ],
    "ru": [
      "это все для этой лаборатории"
    ]
  },
  {
    "time": [
      407.109874,
      413.389137
    ],
    "en": [
      "thank you for watching I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Спасибо за просмотр. Надеюсь, эта лабораторная работа и видео были для вас полезны."
    ]
  },
  {
    "time": [
      413.389137,
      418.530425
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лабораторные работы, которые будут выпускаться еженедельно"
    ]
  },
  {
    "time": [
      418.530425,
      423.437822
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comment section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      423.437822,
      430.413187
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах и эфириуме по адресам в описании"
    ]
  },
  {
    "time": [
      430.413187,
      438.763736
    ],
    "en": [
      "I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и принимаю пожертвования летучих мышей или базовых токенов внимания в смелом браузере."
    ]
  },
  {
    "time": [
      438.763736,
      438.763736
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
      438.763736,
      438.763736
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
      438.763736,
      438.763736
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]