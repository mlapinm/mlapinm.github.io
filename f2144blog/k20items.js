let objs = [
  {
    "time": [
      0.0,
      4.66535
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
      4.66535,
      7.766149
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "скачать лабораторный файл можно по ссылке в описании"
    ]
  },
  {
    "time": [
      7.766149,
      15.390226
    ],
    "en": [
      "if you like these labs please consider supporting me via my patreon or the cryptocurrency options in the description"
    ],
    "ru": [
      "если вам нравятся эти лаборатории, пожалуйста, подумайте о поддержке меня через мой патреон или варианты криптовалюты в описании"
    ]
  },
  {
    "time": [
      15.390226,
      24.832042
    ],
    "en": [
      "this lab xx of these free labs I've created for YouTube will serve as a review of several of the topics we've covered in the previous 19"
    ],
    "ru": [
      "Эта лабораторная работа xx из этих бесплатных лабораторных работ, которые я создал для YouTube, послужит обзором нескольких тем, которые мы рассмотрели в предыдущих 19."
    ]
  },
  {
    "time": [
      24.832042,
      29.30156
    ],
    "en": [
      "I plan to do these at various points in this series"
    ],
    "ru": [
      "Я планирую сделать это на разных этапах этой серии."
    ]
  },
  {
    "time": [
      29.30156,
      34.699568
    ],
    "en": [
      "although you could just go back and redo previous labs to serve as review"
    ],
    "ru": [
      "хотя вы можете просто вернуться и повторить предыдущие лабораторные работы, чтобы использовать их в качестве обзора"
    ]
  },
  {
    "time": [
      34.699568,
      41.114527
    ],
    "en": [
      "my regular configuration labs tend to focus on just one technology at a time such as VLANs or port security"
    ],
    "ru": [
      "мои регулярные лабораторные работы по настройке, как правило, сосредоточены только на одной технологии за раз, например, на виртуальных локальных сетях или безопасности портов."
    ]
  },
  {
    "time": [
      41.114527,
      46.998558
    ],
    "en": [
      "I think that labs like this one involving multiple technologies are also beneficial"
    ],
    "ru": [
      "Я думаю, что такие лаборатории, в которых задействовано несколько технологий, также полезны."
    ]
  },
  {
    "time": [
      46.998558,
      58.427102
    ],
    "en": [
      "in this lab we will configure host names the enable secret VLANs trunks port security and inter VLAN routing with router on a stick"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим имена хостов, чтобы включить секретные VLAN, транкировать безопасность портов и маршрутизацию между VLAN с маршрутизатором на флешке."
    ]
  },
  {
    "time": [
      58.427102,
      61.309243
    ],
    "en": [
      "try to complete the lab yourself first"
    ],
    "ru": [
      "сначала попробуйте пройти лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      61.309243,
      66.58394
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
      66.58394,
      72.395519
    ],
    "en": [
      "step one is to configure host names for each of the networking devices"
    ],
    "ru": [
      "Шаг первый - настроить имена хостов для каждого из сетевых устройств"
    ]
  },
  {
    "time": [
      72.395519,
      75.877368
    ],
    "en": [
      "r one switch one and switch 2"
    ],
    "ru": [
      "r один переключатель один и переключатель 2"
    ]
  },
  {
    "time": [
      75.877368,
      78.577624
    ],
    "en": [
      "this is done with a single command"
    ],
    "ru": [
      "это делается с помощью одной команды"
    ]
  },
  {
    "time": [
      78.577624,
      79.792302
    ],
    "en": [
      "host name"
    ],
    "ru": [
      "имя хоста"
    ]
  },
  {
    "time": [
      79.792302,
      82.288748
    ],
    "en": [
      "let's go on r one first"
    ],
    "ru": [
      "давай сначала пойдем"
    ]
  },
  {
    "time": [
      82.288748,
      88.501488
    ],
    "en": [
      "enable conf t host named r1"
    ],
    "ru": [
      "включить conf t host с именем r1"
    ]
  },
  {
    "time": [
      88.501488,
      90.893059
    ],
    "en": [
      "next switch one"
    ],
    "ru": [
      "следующий переключатель один"
    ]
  },
  {
    "time": [
      90.893059,
      95.925156
    ],
    "en": [
      "enable conf t host name switch one"
    ],
    "ru": [
      "включить conf t имя хоста переключить один"
    ]
  },
  {
    "time": [
      95.925156,
      98.266837
    ],
    "en": [
      "finally switch 2"
    ],
    "ru": [
      "наконец переключатель 2"
    ]
  },
  {
    "time": [
      98.266837,
      103.825952
    ],
    "en": [
      "enable conf t host name switch two"
    ],
    "ru": [
      "включить conf t имя хоста переключатель два"
    ]
  },
  {
    "time": [
      103.825952,
      105.738412
    ],
    "en": [
      "that's it for step one"
    ],
    "ru": [
      "это для первого шага"
    ]
  },
  {
    "time": [
      105.738412,
      114.616132
    ],
    "en": [
      "step two is to configure an enable secret of CCNA for each networking device"
    ],
    "ru": [
      "Шаг второй - настроить секрет включения CCNA для каждого сетевого устройства."
    ]
  },
  {
    "time": [
      114.616132,
      117.335663
    ],
    "en": [
      "this is another fairly simple step"
    ],
    "ru": [
      "это еще один довольно простой шаг"
    ]
  },
  {
    "time": [
      117.335663,
      123.827327
    ],
    "en": [
      "remember the enable secret is an encrypted password that protects privileged exec mode of the router"
    ],
    "ru": [
      "помните, что ключ включения - это зашифрованный пароль, который защищает привилегированный режим выполнения маршрутизатора"
    ]
  },
  {
    "time": [
      123.827327,
      127.138543
    ],
    "en": [
      "requiring a password to use the enable command"
    ],
    "ru": [
      "Требование пароля для использования команды enable"
    ]
  },
  {
    "time": [
      127.138543,
      133.571733
    ],
    "en": [
      "we could also configure an enable password and then encrypt it with the service password encryption command"
    ],
    "ru": [
      "мы также можем настроить пароль включения, а затем зашифровать его с помощью команды шифрования пароля службы"
    ]
  },
  {
    "time": [
      133.571733,
      137.574847
    ],
    "en": [
      "however the encryption of the enable secret is more secure"
    ],
    "ru": [
      "однако шифрование ключа включения более безопасно"
    ]
  },
  {
    "time": [
      137.574847,
      139.85111
    ],
    "en": [
      "so you'll always want to use that instead"
    ],
    "ru": [
      "так что вы всегда захотите использовать это вместо"
    ]
  },
  {
    "time": [
      139.85111,
      143.213483
    ],
    "en": [
      "let's do switch to first since we're here"
    ],
    "ru": [
      "давай сначала переключимся на раз уж мы здесь"
    ]
  },
  {
    "time": [
      143.213483,
      146.374858
    ],
    "en": [
      "enable secret CCNA"
    ],
    "ru": [
      "включить секретный CCNA"
    ]
  },
  {
    "time": [
      146.374858,
      151.322811
    ],
    "en": [
      "remember passwords are case sensitive so make sure CCNA is all capitals"
    ],
    "ru": [
      "помните, что пароли чувствительны к регистру, поэтому убедитесь, что CCNA - это все заглавные буквы"
    ]
  },
  {
    "time": [
      151.322811,
      155.070335
    ],
    "en": [
      "now let's use the same command on switch 1"
    ],
    "ru": [
      "теперь давайте используем ту же команду на переключателе 1"
    ]
  },
  {
    "time": [
      155.070335,
      158.386667
    ],
    "en": [
      "enable secret CCNA"
    ],
    "ru": [
      "включить секретный CCNA"
    ]
  },
  {
    "time": [
      158.386667,
      164.91777
    ],
    "en": [
      "and finally r1 enable secret CCNA"
    ],
    "ru": [
      "и, наконец, r1 включить секретный CCNA"
    ]
  },
  {
    "time": [
      164.91777,
      166.783774
    ],
    "en": [
      "that's all for step 2"
    ],
    "ru": [
      "это все для шага 2"
    ]
  },
  {
    "time": [
      166.783774,
      176.492922
    ],
    "en": [
      "step three is to configure the switch ports to which pcs are connected as access ports in specific VLANs"
    ],
    "ru": [
      "Шаг третий - настроить порты коммутатора, к которым подключены компьютеры, в качестве портов доступа в определенных VLAN."
    ]
  },
  {
    "time": [
      176.492922,
      183.09766
    ],
    "en": [
      "pc1 & pc2 VLAN 13 & pc2 and pc 4 in VLAN 24"
    ],
    "ru": [
      "pc1 и pc2 VLAN 13 и pc2 и pc 4 в VLAN 24"
    ]
  },
  {
    "time": [
      183.09766,
      185.59947
    ],
    "en": [
      "let's start on switch one"
    ],
    "ru": [
      "давай начнем с первого переключателя"
    ]
  },
  {
    "time": [
      185.59947,
      192.630888
    ],
    "en": [
      "PC one is connected to f0 two so interface f0 2"
    ],
    "ru": [
      "ПК один подключен к f0 two, поэтому интерфейс f0 2"
    ]
  },
  {
    "time": [
      192.630888,
      194.660238
    ],
    "en": [
      "switch port mode access"
    ],
    "ru": [
      "переключатель режима порта доступа"
    ]
  },
  {
    "time": [
      194.660238,
      200.195033
    ],
    "en": [
      "now that we've explicitly configured it as an access port let's put it in VLAN 13"
    ],
    "ru": [
      "теперь, когда мы явно настроили его как порт доступа, давайте поместим его в VLAN 13"
    ]
  },
  {
    "time": [
      200.195033,
      203.144313
    ],
    "en": [
      "switch port access VLAN 13"
    ],
    "ru": [
      "порт коммутатора доступа VLAN 13"
    ]
  },
  {
    "time": [
      203.144313,
      209.133615
    ],
    "en": [
      "now let's configure f03 which pc 2 is connected to to be in VLAN 24"
    ],
    "ru": [
      "Теперь давайте настроим f03, к которому подключен компьютер 2, чтобы он был в VLAN 24"
    ]
  },
  {
    "time": [
      209.133615,
      217.094483
    ],
    "en": [
      "interface f03 switch port mode access switch port access VLAN 24"
    ],
    "ru": [
      "интерфейс f03 коммутатор режим порта доступ коммутатор порт доступ VLAN 24"
    ]
  },
  {
    "time": [
      217.094483,
      221.777834
    ],
    "en": [
      "that's it for switch 1 next let's hop on switch 2"
    ],
    "ru": [
      "Вот и все, что нужно для переключателя 1, теперь давайте перейдем на переключатель 2"
    ]
  },
  {
    "time": [
      221.777834,
      226.813212
    ],
    "en": [
      "interface f0 2 switch port mode access"
    ],
    "ru": [
      "интерфейс f0 2 режим порта коммутатора доступ"
    ]
  },
  {
    "time": [
      226.813212,
      233.221732
    ],
    "en": [
      "PC 3 is connected to this interface so switch port access VLAN 13"
    ],
    "ru": [
      "ПК 3 подключен к этому интерфейсу, поэтому порт коммутатора получает доступ к VLAN 13."
    ]
  },
  {
    "time": [
      233.221732,
      237.514995
    ],
    "en": [
      "now f03 which pc 4 is connected too"
    ],
    "ru": [
      "теперь f03, который ПК 4 тоже подключен"
    ]
  },
  {
    "time": [
      237.514995,
      245.245238
    ],
    "en": [
      "interface f03 switch port mode access switch port access VLAN 24"
    ],
    "ru": [
      "интерфейс f03 коммутатор режим порта доступ коммутатор порт доступ VLAN 24"
    ]
  },
  {
    "time": [
      245.245238,
      249.159886
    ],
    "en": [
      "that's all for step 3"
    ],
    "ru": [
      "это все для шага 3"
    ]
  },
  {
    "time": [
      249.159886,
      255.774305
    ],
    "en": [
      "step four is to configure a trunk between switch 1 and switch 2"
    ],
    "ru": [
      "Шаг четвертый - настроить магистраль между коммутатором 1 и коммутатором 2."
    ]
  },
  {
    "time": [
      255.774305,
      261.376121
    ],
    "en": [
      "remember switch ports by default function as access ports in VLAN 1"
    ],
    "ru": [
      "помните, что порты коммутатора по умолчанию функционируют как порты доступа в VLAN 1"
    ]
  },
  {
    "time": [
      261.376121,
      266.862756
    ],
    "en": [
      "pcs 1 2 3 & 4 are in VLAN 13 and 24"
    ],
    "ru": [
      "шт.1, 2, 3 и 4 находятся в VLAN 13 и 24"
    ]
  },
  {
    "time": [
      266.862756,
      272.730842
    ],
    "en": [
      "so even pcs in the same VLAN won't be able to communicate with each other across these two switches"
    ],
    "ru": [
      "поэтому даже компьютеры в одной VLAN не смогут связываться друг с другом через эти два коммутатора."
    ]
  },
  {
    "time": [
      272.730842,
      278.482151
    ],
    "en": [
      "currently the two switches will only carry traffic in VLAN 1 between them"
    ],
    "ru": [
      "в настоящее время два коммутатора будут передавать трафик только в VLAN 1 между ними."
    ]
  },
  {
    "time": [
      278.482151,
      281.711431
    ],
    "en": [
      "let's configure this trunk to change that"
    ],
    "ru": [
      "давайте настроим этот ствол, чтобы изменить это"
    ]
  },
  {
    "time": [
      281.711431,
      285.945086
    ],
    "en": [
      "now which interfaces do they use to connect to each other"
    ],
    "ru": [
      "теперь какие интерфейсы они используют для подключения друг к другу"
    ]
  },
  {
    "time": [
      285.945086,
      288.663991
    ],
    "en": [
      "let's use one CDP command to find out"
    ],
    "ru": [
      "давайте воспользуемся одной командой CDP, чтобы узнать"
    ]
  },
  {
    "time": [
      288.663991,
      293.136909
    ],
    "en": [
      "on switch 2 first since we're already here"
    ],
    "ru": [
      "сначала включите переключатель 2, так как мы уже здесь"
    ]
  },
  {
    "time": [
      293.136909,
      296.663197
    ],
    "en": [
      "do show CDP neighbors"
    ],
    "ru": [
      "показывать соседей CDP"
    ]
  },
  {
    "time": [
      296.663197,
      303.017659
    ],
    "en": [
      "as it shows here switch 2 is connected to switch 1 using the F 0 1 interface"
    ],
    "ru": [
      "как показано здесь, переключатель 2 подключен к переключателю 1 с помощью интерфейса F 0 1."
    ]
  },
  {
    "time": [
      303.017659,
      308.819796
    ],
    "en": [
      "it also shows that switch 2 is connected to switch ones F 0 1 interface here"
    ],
    "ru": [
      "он также показывает, что переключатель 2 подключен к переключателям интерфейса F 0 1 здесь"
    ]
  },
  {
    "time": [
      308.819796,
      311.882595
    ],
    "en": [
      "so we don't need to use this command on switch 1"
    ],
    "ru": [
      "поэтому нам не нужно использовать эту команду на переключателе 1"
    ]
  },
  {
    "time": [
      311.882595,
      314.822903
    ],
    "en": [
      "let's configure the trunk down"
    ],
    "ru": [
      "давай настроим ствол вниз"
    ]
  },
  {
    "time": [
      314.822903,
      319.690695
    ],
    "en": [
      "interface F 0 1 switch port mode trunk"
    ],
    "ru": [
      "интерфейс F 0 1 режим порта коммутатора магистраль"
    ]
  },
  {
    "time": [
      319.690695,
      325.867183
    ],
    "en": [
      "that's it on this switch model we don't have to configure the encapsulation type of dot1q"
    ],
    "ru": [
      "вот именно на этой модели коммутатора нам не нужно настраивать тип инкапсуляции dot1q"
    ]
  },
  {
    "time": [
      325.867183,
      333.830376
    ],
    "en": [
      "if we did we would use the command switch port trunk encapsulation dot1q"
    ],
    "ru": [
      "если бы мы это сделали, мы бы использовали команду switch port trunk encapsulation dot1q"
    ]
  },
  {
    "time": [
      333.830376,
      337.062025
    ],
    "en": [
      "now let's go to switch 1 to do the same"
    ],
    "ru": [
      "теперь давайте перейдем к переключателю 1, чтобы сделать то же самое"
    ]
  },
  {
    "time": [
      337.062025,
      342.986842
    ],
    "en": [
      "interface F 0 1 switch part mode trunk"
    ],
    "ru": [
      "интерфейс F 0 1 переключатель режима соединительной линии"
    ]
  },
  {
    "time": [
      342.986842,
      346.40453
    ],
    "en": [
      "let's use a show command to confirm"
    ],
    "ru": [
      "давайте использовать команду show для подтверждения"
    ]
  },
  {
    "time": [
      346.40453,
      349.945845
    ],
    "en": [
      "do show interface trunk"
    ],
    "ru": [
      "показать ствол интерфейса"
    ]
  },
  {
    "time": [
      349.945845,
      353.730241
    ],
    "en": [
      "as you can see f 0 1 is indeed trunking"
    ],
    "ru": [
      "как вы можете видеть, f 0 1 действительно транкинговый"
    ]
  },
  {
    "time": [
      353.730241,
      357.648823
    ],
    "en": [
      "now pc 1 should be able to pin PC 3"
    ],
    "ru": [
      "теперь ПК 1 должен иметь возможность закрепить ПК 3"
    ]
  },
  {
    "time": [
      357.648823,
      360.276045
    ],
    "en": [
      "but not pc 2 and pc 4"
    ],
    "ru": [
      "но не ПК 2 и ПК 4"
    ]
  },
  {
    "time": [
      360.276045,
      366.742355
    ],
    "en": [
      "likewise pc 2 should be able to pin pc 4 but not pc 1 in pc 3"
    ],
    "ru": [
      "аналогично компьютер 2 должен иметь возможность подключать компьютер 4, но не компьютер 1 к компьютеру 3."
    ]
  },
  {
    "time": [
      366.742355,
      369.523253
    ],
    "en": [
      "let's try on pc 1 first"
    ],
    "ru": [
      "давай сначала попробуем на пк 1"
    ]
  },
  {
    "time": [
      369.523253,
      376.173696
    ],
    "en": [
      "ping 10.0.1.12 the ping to pc 2 doesn't work"
    ],
    "ru": [
      "ping 10.0.1.12 ping to pc 2 не работает"
    ]
  },
  {
    "time": [
      376.173696,
      381.429038
    ],
    "en": [
      "now to pc 3 ping 10.0.0.13"
    ],
    "ru": [
      "сейчас на пк 3 пинг 10.0.0.13"
    ]
  },
  {
    "time": [
      381.429038,
      384.025984
    ],
    "en": [
      "it works"
    ],
    "ru": [
      "оно работает"
    ]
  },
  {
    "time": [
      384.025984,
      387.321826
    ],
    "en": [
      "let's confirm on PC 2"
    ],
    "ru": [
      "давайте подтвердим на ПК 2"
    ]
  },
  {
    "time": [
      387.321826,
      390.756389
    ],
    "en": [
      "ping 10.0.0.11"
    ],
    "ru": [
      "пинг 10.0.0.11"
    ]
  },
  {
    "time": [
      390.756389,
      395.144521
    ],
    "en": [
      "the ping to PC 1 doesn't work"
    ],
    "ru": [
      "пинг на ПК 1 не работает"
    ]
  },
  {
    "time": [
      395.144521,
      397.975496
    ],
    "en": [
      "now let's ping PC 4 which should work"
    ],
    "ru": [
      "теперь давайте пингуем ПК 4, который должен работать"
    ]
  },
  {
    "time": [
      397.975496,
      405.461493
    ],
    "en": [
      "ping 10.0.1.14 it works"
    ],
    "ru": [
      "пинг 10.0.1.14 работает"
    ]
  },
  {
    "time": [
      405.461493,
      408.034864
    ],
    "en": [
      "our trunk has been successfully configured"
    ],
    "ru": [
      "наш ствол был успешно настроен"
    ]
  },
  {
    "time": [
      408.034864,
      416.515786
    ],
    "en": [
      "now Step five is to configure port security on the switch ports connected to PCs"
    ],
    "ru": [
      "Теперь Шаг пятый - настроить безопасность портов на портах коммутатора, подключенных к ПК."
    ]
  },
  {
    "time": [
      416.515786,
      423.845611
    ],
    "en": [
      "we need to enable sticky MAC address learning and change the default violation action of shutdown to restrict"
    ],
    "ru": [
      "нам нужно включить изучение закрепленных MAC-адресов и изменить действие нарушения по умолчанию для выключения, чтобы ограничить"
    ]
  },
  {
    "time": [
      423.845611,
      426.832016
    ],
    "en": [
      "let's go on switch one"
    ],
    "ru": [
      "давай перейдем на первый переключатель"
    ]
  },
  {
    "time": [
      426.832016,
      429.683164
    ],
    "en": [
      "will be using the same commands for each interface"
    ],
    "ru": [
      "будет использовать одни и те же команды для каждого интерфейса"
    ]
  },
  {
    "time": [
      429.683164,
      436.031805
    ],
    "en": [
      "so let's be more efficient by configuring an interface range instead of doing each one separately"
    ],
    "ru": [
      "так что давайте будем более эффективными, настроив диапазон интерфейса вместо того, чтобы делать каждый отдельно"
    ]
  },
  {
    "time": [
      436.031805,
      440.827983
    ],
    "en": [
      "interface range f0 2 to 3"
    ],
    "ru": [
      "диапазон интерфейса f0 от 2 до 3"
    ]
  },
  {
    "time": [
      440.827983,
      444.336898
    ],
    "en": [
      "now we're in interface range configuration mode"
    ],
    "ru": [
      "теперь мы находимся в режиме настройки диапазона интерфейсов"
    ]
  },
  {
    "time": [
      444.336898,
      448.962244
    ],
    "en": [
      "both interfaces are already explicitly configured as access ports"
    ],
    "ru": [
      "оба интерфейса уже явно настроены как порты доступа"
    ]
  },
  {
    "time": [
      448.962244,
      450.67712
    ],
    "en": [
      "so we don't have to do that this time"
    ],
    "ru": [
      "так что нам не нужно делать это на этот раз"
    ]
  },
  {
    "time": [
      450.67712,
      453.907902
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
      453.907902,
      456.35315
    ],
    "en": [
      "now port security is enabled"
    ],
    "ru": [
      "теперь безопасность порта включена"
    ]
  },
  {
    "time": [
      456.35315,
      458.88629
    ],
    "en": [
      "let's configure sticky MAC address learning"
    ],
    "ru": [
      "давайте настроим изучение липких MAC-адресов"
    ]
  },
  {
    "time": [
      458.88629,
      462.401569
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
      462.401569,
      466.524584
    ],
    "en": [
      "finally let's change the violation action to restrict"
    ],
    "ru": [
      "наконец, давайте изменим действие нарушения, чтобы ограничить"
    ]
  },
  {
    "time": [
      466.524584,
      470.065533
    ],
    "en": [
      "which blocks offending traffic but does not shut down the port"
    ],
    "ru": [
      "который блокирует нежелательный трафик, но не закрывает порт"
    ]
  },
  {
    "time": [
      470.065533,
      472.388084
    ],
    "en": [
      "that is done with this command"
    ],
    "ru": [
      "это делается с помощью этой команды"
    ]
  },
  {
    "time": [
      472.388084,
      477.385688
    ],
    "en": [
      "switch port port security violation restrict"
    ],
    "ru": [
      "порт коммутатора нарушение безопасности порта ограничить"
    ]
  },
  {
    "time": [
      477.385688,
      480.128705
    ],
    "en": [
      "now let's do the same on switch 2"
    ],
    "ru": [
      "Теперь сделаем то же самое на переключателе 2"
    ]
  },
  {
    "time": [
      480.128705,
      483.593192
    ],
    "en": [
      "again I'll configure an interface range"
    ],
    "ru": [
      "снова настрою диапазон интерфейсов"
    ]
  },
  {
    "time": [
      483.593192,
      488.191279
    ],
    "en": [
      "interface range F 0 2 to 3"
    ],
    "ru": [
      "диапазон интерфейса F 0 от 2 до 3"
    ]
  },
  {
    "time": [
      488.191279,
      494.642262
    ],
    "en": [
      "switch port port security switch port port security MAC address sticky"
    ],
    "ru": [
      "порт коммутатора безопасность порта коммутатор безопасность порта MAC-адрес залипание"
    ]
  },
  {
    "time": [
      494.642262,
      498.383218
    ],
    "en": [
      "switch port port security violation restrict"
    ],
    "ru": [
      "порт коммутатора нарушение безопасности порта ограничить"
    ]
  },
  {
    "time": [
      498.383218,
      502.305852
    ],
    "en": [
      "there we go step 5 is now complete"
    ],
    "ru": [
      "Итак, шаг 5 завершен"
    ]
  },
  {
    "time": [
      502.305852,
      510.707798
    ],
    "en": [
      "step six is to configure inter VLAN routing with the router on a stick method"
    ],
    "ru": [
      "Шаг шестой - настроить маршрутизацию между VLAN с помощью маршрутизатора по методу флешки."
    ]
  },
  {
    "time": [
      510.707798,
      515.274418
    ],
    "en": [
      "router on a stick involves configuring sub interfaces on a router"
    ],
    "ru": [
      "Маршрутизатор на флешке включает настройку подчиненных интерфейсов на маршрутизаторе"
    ]
  },
  {
    "time": [
      515.274418,
      517.056921
    ],
    "en": [
      "one for each VLAN required"
    ],
    "ru": [
      "по одному на каждую требуемую VLAN"
    ]
  },
  {
    "time": [
      517.056921,
      520.959551
    ],
    "en": [
      "we'll do that on our ones g00 interface"
    ],
    "ru": [
      "мы сделаем это на нашем интерфейсе g00"
    ]
  },
  {
    "time": [
      520.959551,
      523.955523
    ],
    "en": [
      "which is connected to switch ones g0 1 interface"
    ],
    "ru": [
      "который подключен к переключателю g0 1 интерфейс"
    ]
  },
  {
    "time": [
      523.955523,
      529.756868
    ],
    "en": [
      "we also must configure switch ones g0 1 interface as a trunk"
    ],
    "ru": [
      "мы также должны настроить интерфейс коммутатора g0 1 как транк"
    ]
  },
  {
    "time": [
      529.756868,
      531.382001
    ],
    "en": [
      "so let's do that first"
    ],
    "ru": [
      "так что давай сделаем это в первую очередь"
    ]
  },
  {
    "time": [
      531.382001,
      535.008668
    ],
    "en": [
      "interface g0 1"
    ],
    "ru": [
      "интерфейс g0 1"
    ]
  },
  {
    "time": [
      535.008668,
      538.153583
    ],
    "en": [
      "switch port mode trunk"
    ],
    "ru": [
      "переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      538.153583,
      540.681438
    ],
    "en": [
      "okay that's all we need to do on switch 1"
    ],
    "ru": [
      "хорошо, это все, что нам нужно сделать на переключателе 1"
    ]
  },
  {
    "time": [
      540.681438,
      542.922051
    ],
    "en": [
      "let's go to r1 now"
    ],
    "ru": [
      "пойдем в r1 сейчас"
    ]
  },
  {
    "time": [
      542.922051,
      546.454184
    ],
    "en": [
      "interface G 0 0"
    ],
    "ru": [
      "интерфейс G 0 0"
    ]
  },
  {
    "time": [
      546.454184,
      550.275507
    ],
    "en": [
      "now router interfaces are shutdown by default"
    ],
    "ru": [
      "теперь интерфейсы маршрутизатора отключены по умолчанию"
    ]
  },
  {
    "time": [
      550.275507,
      555.050479
    ],
    "en": [
      "as you may have noticed from the red port lights on the link between r1 and switch 1"
    ],
    "ru": [
      "как вы могли заметить по красным индикаторам порта на линии связи между r1 и коммутатором 1"
    ]
  },
  {
    "time": [
      555.050479,
      559.859419
    ],
    "en": [
      "so first I'll type no shutdown to enable it"
    ],
    "ru": [
      "так что сначала я напечатаю без выключения, чтобы включить его"
    ]
  },
  {
    "time": [
      559.859419,
      563.114831
    ],
    "en": [
      "you could also do this at the end of the configuration"
    ],
    "ru": [
      "вы также можете сделать это в конце конфигурации"
    ]
  },
  {
    "time": [
      563.114831,
      567.447238
    ],
    "en": [
      "now let's create the sub interface for VLAN 13"
    ],
    "ru": [
      "теперь давайте создадим субинтерфейс для VLAN 13"
    ]
  },
  {
    "time": [
      567.447238,
      571.898897
    ],
    "en": [
      "interface g0 0.13"
    ],
    "ru": [
      "интерфейс g0 0,13"
    ]
  },
  {
    "time": [
      571.898897,
      576.481943
    ],
    "en": [
      "note that the sub interface name doesn't actually have to match the v/line number"
    ],
    "ru": [
      "обратите внимание, что имя субинтерфейса на самом деле не обязательно должно совпадать с номером v / line"
    ]
  },
  {
    "time": [
      576.481943,
      579.603296
    ],
    "en": [
      "but it's good practice to do so to avoid confusion"
    ],
    "ru": [
      "но это хорошая практика, чтобы избежать путаницы"
    ]
  },
  {
    "time": [
      579.603296,
      584.093013
    ],
    "en": [
      "now first we have to set the encapsulation and VLAN"
    ],
    "ru": [
      "теперь сначала мы должны установить инкапсуляцию и VLAN"
    ]
  },
  {
    "time": [
      584.093013,
      587.652181
    ],
    "en": [
      "encapsulation dot1q thirteen"
    ],
    "ru": [
      "инкапсуляция dot1q тринадцать"
    ]
  },
  {
    "time": [
      587.652181,
      591.259115
    ],
    "en": [
      "okay now let's set the IP address"
    ],
    "ru": [
      "хорошо, теперь давайте установим IP-адрес"
    ]
  },
  {
    "time": [
      591.259115,
      596.994763
    ],
    "en": [
      "according to our instructions and the default gateway addresses i've pre configured on the pcs in this lab"
    ],
    "ru": [
      "в соответствии с нашими инструкциями и адресами шлюза по умолчанию, которые я предварительно настроил на ПК в этой лабораторной работе"
    ]
  },
  {
    "time": [
      596.994763,
      599.431725
    ],
    "en": [
      "let's set it too"
    ],
    "ru": [
      "давай тоже установим"
    ]
  },
  {
    "time": [
      599.431725,
      606.467312
    ],
    "en": [
      "IP address 10.0.0.1 255.255.255.0"
    ],
    "ru": [
      "IP-адрес 10.0.0.1 255.255.255.0"
    ]
  },
  {
    "time": [
      606.467312,
      608.581805
    ],
    "en": [
      "okay that's it"
    ],
    "ru": [
      "хорошо, вот и все"
    ]
  },
  {
    "time": [
      608.581805,
      611.486613
    ],
    "en": [
      "now let's configure the sub interface for VLAN 24"
    ],
    "ru": [
      "Теперь настроим субинтерфейс для VLAN 24"
    ]
  },
  {
    "time": [
      611.486613,
      627.486923
    ],
    "en": [
      "interface g0 0.24 encapsulation dot1q 24 IP address 10.0.1.1 255.255.255.0"
    ],
    "ru": [
      "интерфейс g0 0.24 инкапсуляция dot1q 24 IP-адрес 10.0.1.1 255.255.255.0"
    ]
  },
  {
    "time": [
      627.486923,
      630.613541
    ],
    "en": [
      "our inter VLAN routing is now complete"
    ],
    "ru": [
      "наша маршрутизация между VLAN теперь завершена"
    ]
  },
  {
    "time": [
      630.613541,
      639.94416
    ],
    "en": [
      "finally let's ping between pcs to make sure everything works"
    ],
    "ru": [
      "наконец, давайте пингуем между ПК, чтобы убедиться, что все работает"
    ]
  },
  {
    "time": [
      639.94416,
      643.825538
    ],
    "en": [
      "we should now have full connectivity between all pcs"
    ],
    "ru": [
      "теперь у нас должно быть полное соединение между всеми ПК"
    ]
  },
  {
    "time": [
      643.825538,
      649.343095
    ],
    "en": [
      "to check I'll ping from PC 1 and then from PC 2"
    ],
    "ru": [
      "чтобы проверить, я пингую с ПК 1, а затем с ПК 2"
    ]
  },
  {
    "time": [
      649.343095,
      657.233868
    ],
    "en": [
      "on PC 1 let's ping PC 2 first ping 10.0.1.12"
    ],
    "ru": [
      "на ПК 1 давайте пингуем ПК 2 сначала пинг 10.0.1.12"
    ]
  },
  {
    "time": [
      657.233868,
      659.893286
    ],
    "en": [
      "it works"
    ],
    "ru": [
      "оно работает"
    ]
  },
  {
    "time": [
      659.893286,
      669.143173
    ],
    "en": [
      "next PC 3 ping 10.0.0.13 it works"
    ],
    "ru": [
      "следующий ПК 3 пинг 10.0.0.13 работает"
    ]
  },
  {
    "time": [
      669.143173,
      679.859202
    ],
    "en": [
      "finally PC 4 ping 10.0.1.14 it works as well"
    ],
    "ru": [
      "наконец ПК 4 пинг 10.0.1.14 он тоже работает"
    ]
  },
  {
    "time": [
      679.859202,
      682.68006
    ],
    "en": [
      "now let's do the same on PC 2"
    ],
    "ru": [
      "теперь сделаем то же самое на ПК 2"
    ]
  },
  {
    "time": [
      682.68006,
      692.846181
    ],
    "en": [
      "first stop in PC 1 ping 10.0.0.11 it works"
    ],
    "ru": [
      "первая остановка в ПК 1 пинг 10.0.0.11 работает"
    ]
  },
  {
    "time": [
      692.846181,
      702.284269
    ],
    "en": [
      "PC 3-pin 10.0.0.13 it works too"
    ],
    "ru": [
      "ПК 3-пиновый 10.0.0.13 тоже работает"
    ]
  },
  {
    "time": [
      702.284269,
      711.355959
    ],
    "en": [
      "finally I'll ping PC 4 ping 10.0.1.14 it works as well"
    ],
    "ru": [
      "наконец я пингую ПК 4 пинг 10.0.1.14 он тоже работает"
    ]
  },
  {
    "time": [
      711.355959,
      714.33063
    ],
    "en": [
      "we have full connectivity between all computers"
    ],
    "ru": [
      "у нас есть полная связь между всеми компьютерами"
    ]
  },
  {
    "time": [
      714.33063,
      716.267636
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
      716.267636,
      720.512622
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
      720.512622,
      723.173537
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
      723.173537,
      726.420785
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
      726.420785,
      728.173667
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
      728.173667,
      732.883367
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
      732.883367,
      735.727581
    ],
    "en": [
      "if you want to support my channel"
    ],
    "ru": [
      "если вы хотите поддержать мой канал"
    ]
  },
  {
    "time": [
      735.727581,
      738.322142
    ],
    "en": [
      "please consider contributing to my patreon"
    ],
    "ru": [
      "пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon"
    ]
  },
  {
    "time": [
      738.322142,
      741.658832
    ],
    "en": [
      "patreon comm / Jeremy's IT lab"
    ],
    "ru": [
      "patreon comm / ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      741.658832,
      747.271234
    ],
    "en": [
      "I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      747.271234,
      751.149801
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
      751.149801,
      755.935802
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
      755.935802,
      755.935802
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
      755.935802,
      755.935802
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
      755.935802,
      755.935802
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]