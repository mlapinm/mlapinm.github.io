let objs = [
  {
    "time": [
      0.7,
      3.18
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
      3.18,
      6.68
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
      6.68,
      10.269
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
      10.269,
      15.9
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
      15.9,
      17.14
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
      17.14,
      21.34
    ],
    "en": [
      "Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      21.34,
      26.33
    ],
    "en": [
      "for this course, so you can try it out yourself in packet tracer."
    ],
    "ru": [
      "для этого курса, так что вы можете попробовать его самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      26.33,
      31.34
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for the CCNA."
    ],
    "ru": [
      "Если вам нужно больше таких лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для CCNA."
    ]
  },
  {
    "time": [
      31.34,
      35.8
    ],
    "en": [
      "the CCNA. It’s a network simulator with tons of guided labs covering all of the topics you need to"
    ],
    "ru": [
      "CCNA. Это сетевой симулятор с множеством управляемых лабораторных работ по всем темам, которые вам нужно"
    ]
  },
  {
    "time": [
      35.8,
      38.01
    ],
    "en": [
      "know for the CCNA."
    ],
    "ru": [
      "знаю по CCNA."
    ]
  },
  {
    "time": [
      38.01,
      41.66
    ],
    "en": [
      "Click the link in the video description to check it out."
    ],
    "ru": [
      "Щелкните ссылку в описании видео, чтобы посмотреть его."
    ]
  },
  {
    "time": [
      41.66,
      46.989
    ],
    "en": [
      "In this lab we’ll configure voice VLANs and then observe some traffic in the network."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим голосовые VLAN, а затем проследим за некоторым трафиком в сети."
    ]
  },
  {
    "time": [
      46.989,
      53.56
    ],
    "en": [
      "There are two PCs, each connected to an IP phone, and the IP phones are connected to SW1."
    ],
    "ru": [
      "Есть два ПК, каждый из которых подключен к IP-телефону, а IP-телефоны подключены к SW1."
    ]
  },
  {
    "time": [
      53.56,
      59.829
    ],
    "en": [
      "SW1. SW1 is a multilayer switch, but we won’t be using its Layer 3 capabilities in this lab."
    ],
    "ru": [
      "SW1. SW1 - это многоуровневый коммутатор, но мы не будем использовать его возможности уровня 3 в этой лабораторной работе."
    ]
  },
  {
    "time": [
      59.829,
      65.17
    ],
    "en": [
      "lab. I selected this model because it supports PoE, Power over Ethernet."
    ],
    "ru": [
      "лаборатория. Я выбрал эту модель, потому что она поддерживает PoE, Power over Ethernet."
    ]
  },
  {
    "time": [
      65.17,
      71.06
    ],
    "en": [
      "So, if I click on phone1 for example, you can see the power cable is not connected."
    ],
    "ru": [
      "Итак, если я, например, нажму на phone1, вы увидите, что кабель питания не подключен."
    ]
  },
  {
    "time": [
      71.06,
      78.03
    ],
    "en": [
      "However, because SW1 supports PoE phone1 is on and receiving power via the ethernet cable."
    ],
    "ru": [
      "Однако, поскольку SW1 поддерживает PoE, phone1 включен и получает питание по кабелю Ethernet."
    ]
  },
  {
    "time": [
      78.03,
      85.429
    ],
    "en": [
      "So, instead of SW1 acting as the router, we’ll configure router on a stick between SW1 and R1."
    ],
    "ru": [
      "Итак, вместо того, чтобы использовать SW1 в качестве маршрутизатора, мы настроим маршрутизатор на флешке между SW1 и R1."
    ]
  },
  {
    "time": [
      85.429,
      88.939
    ],
    "en": [
      "R1. First I’ll configure SW1. ENABLE."
    ],
    "ru": [
      "R1. Сначала я настрою SW1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      88.939,
      97.07900000000001
    ],
    "en": [
      "ENABLE. CONF T. I’ll configure G1/0/2 and 3 first, connected to the IP phones."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Сначала я настрою G1 / 0/2 и 3, подключенные к IP-телефонам."
    ]
  },
  {
    "time": [
      97.07900000000001,
      102.789
    ],
    "en": [
      "INTERFACE RANGE G1/0/2 – 3. SWITCHPORT MODE ACCESS."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G1 / 0/2 - 3. ДОСТУП К РЕЖИМУ ПЕРЕКЛЮЧАТЕЛЯ."
    ]
  },
  {
    "time": [
      102.789,
      107.479
    ],
    "en": [
      "SWITCHPORT MODE ACCESS. Now, the data VLAN is VLAN10 as I indicate in the diagram."
    ],
    "ru": [
      "ДОСТУП В РЕЖИМ SWITCHPORT. Теперь VLAN данных - это VLAN10, как я указываю на диаграмме."
    ]
  },
  {
    "time": [
      107.479,
      111.549
    ],
    "en": [
      "So, SWITCHPORT ACCESS VLAN 10."
    ],
    "ru": [
      "Итак, SWITCHPORT ACCESS VLAN 10."
    ]
  },
  {
    "time": [
      111.549,
      116.929
    ],
    "en": [
      "And the voice VLAN should be VLAN20, so SWITCHPORT VOICE VLAN 20."
    ],
    "ru": [
      "И голосовая VLAN должна быть VLAN20, поэтому SWITCHPORT VOICE VLAN 20."
    ]
  },
  {
    "time": [
      116.929,
      122.899
    ],
    "en": [
      "Ok, that’s all of the configuration needed on these interfaces."
    ],
    "ru": [
      "Хорошо, это все, что нужно для настройки этих интерфейсов."
    ]
  },
  {
    "time": [
      122.899,
      127.539
    ],
    "en": [
      "Next we have to configure router on a stick between SW1 and R1."
    ],
    "ru": [
      "Затем нам нужно настроить маршрутизатор на флешке между SW1 и R1."
    ]
  },
  {
    "time": [
      127.539,
      131.86
    ],
    "en": [
      "Although we won’t actually be sending any traffic between subnets in this lab, we need"
    ],
    "ru": [
      "Хотя на самом деле мы не будем отправлять трафик между подсетями в этой лабораторной работе, нам необходимо"
    ]
  },
  {
    "time": [
      131.86,
      136.06
    ],
    "en": [
      "to make sure that phone1 and phone2 can reach R1."
    ],
    "ru": [
      "чтобы убедиться, что phone1 и phone2 могут подключиться к R1."
    ]
  },
  {
    "time": [
      136.06,
      143.63
    ],
    "en": [
      "I pre-configured some telephony settings on R1 so it can tell phone1 and phone2 how they should configure themselves."
    ],
    "ru": [
      "Я предварительно настроил некоторые параметры телефонии на маршрутизаторе R1, чтобы он мог указывать phone1 и phone2, как им следует настраиваться."
    ]
  },
  {
    "time": [
      143.63,
      147.93
    ],
    "en": [
      "should configure themselves. Those configurations are beyond the scope of the CCNA so I won’t cover them, but you"
    ],
    "ru": [
      "надо настраивать сами. Эти конфигурации выходят за рамки CCNA, поэтому я не буду их описывать, но вы"
    ]
  },
  {
    "time": [
      147.93,
      152.11
    ],
    "en": [
      "can check out R1’s running-config if you want to see what configurations I did."
    ],
    "ru": [
      "Можете проверить рабочую конфигурацию R1, если хотите увидеть, какие конфигурации я сделал."
    ]
  },
  {
    "time": [
      152.11,
      159.17000000000002
    ],
    "en": [
      "Okay, let’s configure SW1’s trunk. INTERFACE G1/0/1."
    ],
    "ru": [
      "Хорошо, давайте настроим магистраль SW1. ИНТЕРФЕЙС G1 / 0/1."
    ]
  },
  {
    "time": [
      159.17000000000002,
      164.2
    ],
    "en": [
      "INTERFACE G1/0/1. SWITCHPORT TRUNK ENCAPSULATION DOT1Q. SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "ИНТЕРФЕЙС G1 / 0/1. ПЕРЕКЛЮЧАТЕЛЬ КАПСУЛЯЦИЯ ЛИНИИ DOT1Q. РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      164.2,
      169.001
    ],
    "en": [
      "SWITCHPORT MODE TRUNK. Now, by default all VLANs are allowed, but it’s best to limit the allowed VLANs to"
    ],
    "ru": [
      "РЕЖИМ SWITCHPORT TRUNK. Теперь по умолчанию разрешены все VLAN, но лучше всего ограничить разрешенные VLAN до"
    ]
  },
  {
    "time": [
      169.001,
      170.459
    ],
    "en": [
      "only those you need."
    ],
    "ru": [
      "только те, которые вам нужны."
    ]
  },
  {
    "time": [
      170.459,
      174.489
    ],
    "en": [
      "So, SWITCHPORT TRUNK ALLOWED VLAN 10,20."
    ],
    "ru": [
      "Итак, SWITCHPORT TRUNK ALLOWED VLAN 10,20."
    ]
  },
  {
    "time": [
      174.489,
      179.969
    ],
    "en": [
      "Okay, that’s all of the configuration needed on SW1."
    ],
    "ru": [
      "Хорошо, это все, что нужно для настройки SW1."
    ]
  },
  {
    "time": [
      179.969,
      183.68
    ],
    "en": [
      "Next I’ll configure R1’s end. ENABLE."
    ],
    "ru": [
      "Затем я настрою конец R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      183.68,
      189.51
    ],
    "en": [
      "ENABLE. CONF T. INTERFACE F0/0. NO SHUTDOWN."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. ИНТЕРФЕЙС F0 / 0. НЕТ ОСТАНОВА."
    ]
  },
  {
    "time": [
      189.51,
      198.09
    ],
    "en": [
      "NO SHUTDOWN. Okay, next I’ll configure two subinterfaces for router on a stick. INTERFACE F0/0.10."
    ],
    "ru": [
      "НЕТ ОСТАНОВА. Хорошо, теперь я настрою два подинтерфейса для роутера на флешке. ИНТЕРФЕЙС F0 / 0.10."
    ]
  },
  {
    "time": [
      198.09,
      201.159
    ],
    "en": [
      "INTERFACE F0/0.10. ENCAPSULATION DOT1Q 10."
    ],
    "ru": [
      "ИНТЕРФЕЙС F0 / 0.10. КАПСУЛЯЦИЯ DOT1Q 10."
    ]
  },
  {
    "time": [
      201.159,
      206.609
    ],
    "en": [
      "IP ADDRESS 192.168.10.1 255.255.255.0."
    ],
    "ru": [
      "IP-АДРЕС 192.168.10.1 255.255.255.0."
    ]
  },
  {
    "time": [
      206.609,
      216.18
    ],
    "en": [
      "That’s for the data VLAN, and next the voice VLAN. INTERFACE F0/0.20."
    ],
    "ru": [
      "Это VLAN для передачи данных, а затем VLAN для голосовой связи. ИНТЕРФЕЙС F0 / 0.20."
    ]
  },
  {
    "time": [
      216.18,
      218.879
    ],
    "en": [
      "INTERFACE F0/0.20. ENCAPSULATION DOT1Q 20."
    ],
    "ru": [
      "ИНТЕРФЕЙС F0 / 0.20. КАПСУЛЯЦИЯ DOT1Q 20."
    ]
  },
  {
    "time": [
      218.879,
      223.239
    ],
    "en": [
      "IP ADDRESS 192.168.20.1 255.255.255.0."
    ],
    "ru": [
      "IP-АДРЕС 192.168.20.1 255.255.255.0."
    ]
  },
  {
    "time": [
      223.239,
      230.16
    ],
    "en": [
      "Okay, that’s all of the configuration needed on R1."
    ],
    "ru": [
      "Хорошо, это все, что нужно для настройки R1."
    ]
  },
  {
    "time": [
      230.16,
      233.53
    ],
    "en": [
      "Now let’s send some network traffic and check it out in simulation mode."
    ],
    "ru": [
      "Теперь давайте отправим сетевой трафик и проверим его в режиме моделирования."
    ]
  },
  {
    "time": [
      233.53,
      235.87
    ],
    "en": [
      "First, I’ll go on PC1."
    ],
    "ru": [
      "Сначала я пойду на ПК1."
    ]
  },
  {
    "time": [
      235.87,
      239.88
    ],
    "en": [
      "I’ll ping PC2 and let’s see if the traffic is tagged."
    ],
    "ru": [
      "Я отправлю эхо-запрос на ПК2 и посмотрим, помечен ли трафик."
    ]
  },
  {
    "time": [
      239.88,
      245.47
    ],
    "en": [
      "First, I’ll ping in realtime mode. PING 192.168.10.12."
    ],
    "ru": [
      "Сначала я пингуюсь в режиме реального времени. ПИНГ 192.168.10.12."
    ]
  },
  {
    "time": [
      245.47,
      249.43
    ],
    "en": [
      "PING 192.168.10.12. Okay, the ping works."
    ],
    "ru": [
      "ПИНГ 192.168.10.12. Ладно, пинг работает."
    ]
  },
  {
    "time": [
      249.43,
      254.019
    ],
    "en": [
      "Now I’ll switch to simulation mode and try again. PING 192.168.10.12."
    ],
    "ru": [
      "Теперь я переключусь в режим моделирования и попробую еще раз. ПИНГ 192.168.10.12."
    ]
  },
  {
    "time": [
      254.019,
      261.63
    ],
    "en": [
      "PING 192.168.10.12. So, let’s check out the frame here and click on outbound PDU details."
    ],
    "ru": [
      "ПИНГ 192.168.10.12. Итак, давайте посмотрим здесь на фрейм и нажмем на детали исходящего PDU."
    ]
  },
  {
    "time": [
      261.63,
      264.29
    ],
    "en": [
      "Is the traffic tagged? No it isn’t."
    ],
    "ru": [
      "Помечен ли трафик? Нет, это не так."
    ]
  },
  {
    "time": [
      264.29,
      268.57
    ],
    "en": [
      "No it isn’t. There is no 802.1Q tag in the frame."
    ],
    "ru": [
      "Нет, это не так. В кадре нет тега 802.1Q."
    ]
  },
  {
    "time": [
      268.57,
      271.26
    ],
    "en": [
      "Okay I’ll switch back to realtime mode."
    ],
    "ru": [
      "Хорошо, я вернусь в режим реального времени."
    ]
  },
  {
    "time": [
      271.26,
      278.61
    ],
    "en": [
      "Just to make sure my configurations are correct I’ll ping R1, too. PING 192.168.10.1."
    ],
    "ru": [
      "Чтобы убедиться, что мои настройки верны, я тоже отправлю эхо-запрос на R1. ПИНГ 192.168.10.1."
    ]
  },
  {
    "time": [
      278.61,
      281.5
    ],
    "en": [
      "PING 192.168.10.1. Okay, no problem."
    ],
    "ru": [
      "ПИНГ 192.168.10.1. Хорошо, без проблем."
    ]
  },
  {
    "time": [
      281.5,
      283.4
    ],
    "en": [
      "Now it’s time to check out the phones."
    ],
    "ru": [
      "Пришло время проверить телефоны."
    ]
  },
  {
    "time": [
      283.4,
      286.88
    ],
    "en": [
      "I’ll call phone2 from phone1."
    ],
    "ru": [
      "Я позвоню на телефон2 с телефона1."
    ]
  },
  {
    "time": [
      286.88,
      288.89
    ],
    "en": [
      "So what’s phone2’s phone number?"
    ],
    "ru": [
      "Так какой же номер телефона у phone2?"
    ]
  },
  {
    "time": [
      288.89,
      293.23
    ],
    "en": [
      "I’ll go to phone2 and click on the GUI tab."
    ],
    "ru": [
      "Я перейду к phone2 и перейду на вкладку GUI."
    ]
  },
  {
    "time": [
      293.23,
      297.51
    ],
    "en": [
      "The phone number is displayed here, 2010."
    ],
    "ru": [
      "Здесь отображается номер телефона, 2010 г."
    ]
  },
  {
    "time": [
      297.51,
      299.23
    ],
    "en": [
      "How did it get the number?"
    ],
    "ru": [
      "Как он получил номер?"
    ]
  },
  {
    "time": [
      299.23,
      300.93
    ],
    "en": [
      "It was assigned by R1."
    ],
    "ru": [
      "Его присвоил R1."
    ]
  },
  {
    "time": [
      300.93,
      306.76
    ],
    "en": [
      "So, SW1 told the phones what VLAN they are in, and then R1 told them what phone numbers"
    ],
    "ru": [
      "Итак, SW1 сообщил телефонам, в какой VLAN они находятся, а затем R1 сообщил им, какие номера телефонов."
    ]
  },
  {
    "time": [
      306.76,
      309.76
    ],
    "en": [
      "to use, their IP addresses, etc."
    ],
    "ru": [
      "использовать, их IP-адреса и т. д."
    ]
  },
  {
    "time": [
      309.76,
      312.65
    ],
    "en": [
      "So, now I’ll go to phone1."
    ],
    "ru": [
      "Итак, теперь я перейду к phone1."
    ]
  },
  {
    "time": [
      312.65,
      315.25
    ],
    "en": [
      "First I’ll go back to simulation mode."
    ],
    "ru": [
      "Сначала я вернусь в режим моделирования."
    ]
  },
  {
    "time": [
      315.25,
      316.87
    ],
    "en": [
      "And I’ll call phone 2."
    ],
    "ru": [
      "И я позвоню по телефону 2."
    ]
  },
  {
    "time": [
      316.87,
      323.19
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
      316.87,
      323.19
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
      323.19,
      328.55
    ],
    "en": [
      "Notice that an SCCP, skinny client control protocol, message is sent."
    ],
    "ru": [
      "Обратите внимание, что отправлено сообщение SCCP, протокол управления тонким клиентом."
    ]
  },
  {
    "time": [
      328.55,
      333.3
    ],
    "en": [
      "SCCP is not something you need to know for the CCNA, by the way."
    ],
    "ru": [
      "Кстати, для CCNA вам не нужно знать SCCP."
    ]
  },
  {
    "time": [
      333.3,
      337.90999999999997
    ],
    "en": [
      "If we check out the message, in the IP header you can see the IP address that was assigned"
    ],
    "ru": [
      "Если мы проверим сообщение, в заголовке IP вы увидите назначенный IP-адрес."
    ]
  },
  {
    "time": [
      337.90999999999997,
      340.08
    ],
    "en": [
      "to phone1 as the source IP."
    ],
    "ru": [
      "на phone1 в качестве исходного IP-адреса."
    ]
  },
  {
    "time": [
      340.08,
      343.39
    ],
    "en": [
      "Below it you can see ‘Dot1q header’."
    ],
    "ru": [
      "Ниже вы можете увидеть «Заголовок Dot1q»."
    ]
  },
  {
    "time": [
      343.39,
      348.87
    ],
    "en": [
      "So, that means this frame is tagged with a VLAN, it’s using dot1q."
    ],
    "ru": [
      "Итак, это означает, что этот кадр помечен VLAN с использованием dot1q."
    ]
  },
  {
    "time": [
      348.87,
      356.25
    ],
    "en": [
      "In ‘outbound PDU details’ you can see it here, TPID 8100, which means dot1q."
    ],
    "ru": [
      "В «деталях исходящего PDU» вы можете увидеть его здесь, TPID 8100, что означает dot1q."
    ]
  },
  {
    "time": [
      356.25,
      361.66
    ],
    "en": [
      "And in TCI, tag control information, you can see the VLAN ID."
    ],
    "ru": [
      "А в TCI, информации управления тегами, вы можете увидеть идентификатор VLAN."
    ]
  },
  {
    "time": [
      361.66,
      368.74
    ],
    "en": [
      "Hexadecimal 0014 is equivalent to decimal 20, so this frame is tagged in VLAN 20."
    ],
    "ru": [
      "Шестнадцатеричный код 0014 эквивалентен десятичному числу 20, поэтому этот кадр помечен в VLAN 20."
    ]
  },
  {
    "time": [
      368.74,
      375.33
    ],
    "en": [
      "That’s because we configured SWITCHPORT VOICE VLAN 20 on SW1’s interfaces."
    ],
    "ru": [
      "Это потому, что мы настроили SWITCHPORT VOICE VLAN 20 на интерфейсах SW1."
    ]
  },
  {
    "time": [
      375.33,
      381.25
    ],
    "en": [
      "Okay, in this lab we configured voice VLANs and observed that traffic sent from the PCs"
    ],
    "ru": [
      "Хорошо, в этой лабораторной работе мы настроили голосовые VLAN и наблюдали, что трафик, отправляемый с ПК"
    ]
  },
  {
    "time": [
      381.25,
      388.16
    ],
    "en": [
      "is not tagged with a VLAN ID, but traffic sent from the phones is tagged with a VLAN ID."
    ],
    "ru": [
      "не помечен идентификатором VLAN, но трафик, отправляемый с телефонов, помечается идентификатором VLAN."
    ]
  },
  {
    "time": [
      388.16,
      392.4
    ],
    "en": [
      "ID. Note that this applies not only to traffic sent from the PCs or from the phones, but"
    ],
    "ru": [
      "Я БЫ. Обратите внимание, что это касается не только трафика, отправляемого с ПК или телефонов, но и"
    ]
  },
  {
    "time": [
      392.4,
      396.49
    ],
    "en": [
      "also to traffic sent to the PCs or to the phones by SW1."
    ],
    "ru": [
      "также к трафику, отправляемому на ПК или телефоны SW1."
    ]
  },
  {
    "time": [
      396.49,
      402.61
    ],
    "en": [
      "SW1 will not tag traffic sent to the PCs, but will tag traffic sent to the phones."
    ],
    "ru": [
      "SW1 не будет маркировать трафик, отправляемый на ПК, но будет маркировать трафик, отправляемый на телефоны."
    ]
  },
  {
    "time": [
      402.61,
      404.99
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      404.99,
      404.99
    ],
    "en": [
      "Now let’s take a look at a bonus lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на бонусную лабораторию в NetSim от Boson Software для CCNA."
    ]
  }
]