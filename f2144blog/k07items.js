let objs = [
  {
    "time": [
      0.0,
      4.509258
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
      4.509258,
      8.351053
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
      8.351053,
      13.042434
    ],
    "en": [
      "in this lab we will be working with one router"
    ],
    "ru": [
      "в этой лабораторной работе мы будем работать с одним роутером"
    ]
  },
  {
    "time": [
      13.042434,
      22.593988
    ],
    "en": [
      "r1 2 switches switch 1 and switch 2 and 4 pcs pc-1 pc2 pc 3 and PC 4"
    ],
    "ru": [
      "r1 2 переключателя переключатель 1 и переключатель 2 и 4 шт. pc-1 pc2 pc 3 и ПК 4"
    ]
  },
  {
    "time": [
      22.593988,
      32.753148
    ],
    "en": [
      "we will configure these pcs to be in two separate VLANs and then configure routing between them through the method known as router on a stick"
    ],
    "ru": [
      "мы настроим эти компьютеры, чтобы они находились в двух отдельных VLAN, а затем настроим маршрутизацию между ними с помощью метода, известного как маршрутизатор на флешке."
    ]
  },
  {
    "time": [
      32.753148,
      41.521482
    ],
    "en": [
      "the host names of the router and switches the IP addresses of the pcs and their default gateways have been pre-configured"
    ],
    "ru": [
      "имена хостов маршрутизатора и коммутаторов IP-адреса компьютеров и их шлюзов по умолчанию были предварительно настроены"
    ]
  },
  {
    "time": [
      41.521482,
      49.971164
    ],
    "en": [
      "try to complete the lab yourself first and then continue watching if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторную работу самостоятельно, а затем продолжайте наблюдение, если у вас возникнут проблемы, или просмотрите ее после, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      49.971164,
      57.043515
    ],
    "en": [
      "step one is to ping between the PCs"
    ],
    "ru": [
      "Шаг первый - пинговать между ПК"
    ]
  },
  {
    "time": [
      57.043515,
      63.001338
    ],
    "en": [
      "pings between PC one and PC through should succeed because they are in the same subnet"
    ],
    "ru": [
      "эхо-запросы между ПК 1 и ПК должны быть успешными, потому что они находятся в одной подсети"
    ]
  },
  {
    "time": [
      63.001338,
      67.912724
    ],
    "en": [
      "likewise pings between PC 2 and pc 4 should succeed"
    ],
    "ru": [
      "аналогично пинги между ПК 2 и ПК 4 должны быть успешными"
    ]
  },
  {
    "time": [
      67.912724,
      70.160032
    ],
    "en": [
      "because they are also in the same subnet"
    ],
    "ru": [
      "потому что они также находятся в одной подсети"
    ]
  },
  {
    "time": [
      70.160032,
      72.903063
    ],
    "en": [
      "other pings should fail"
    ],
    "ru": [
      "другие пинги должны завершиться ошибкой"
    ]
  },
  {
    "time": [
      72.903063,
      75.260223
    ],
    "en": [
      "let's ping from pc1 first"
    ],
    "ru": [
      "давайте сначала пингуем с pc1"
    ]
  },
  {
    "time": [
      75.260223,
      79.72058
    ],
    "en": [
      "let's ping PC to ping"
    ],
    "ru": [
      "давайте пингуем компьютер, чтобы пинговать"
    ]
  },
  {
    "time": [
      79.72058,
      86.919684
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
      79.72058,
      86.919684
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
      86.919684,
      90.130648
    ],
    "en": [
      "next let's ping PC 3"
    ],
    "ru": [
      "следующий давайте пинг PC 3"
    ]
  },
  {
    "time": [
      90.130648,
      96.826109
    ],
    "en": [
      "ping 10.0.0.3 the ping works as expected"
    ],
    "ru": [
      "ping 10.0.0.3 ping работает должным образом"
    ]
  },
  {
    "time": [
      96.826109,
      99.983198
    ],
    "en": [
      "finally let's ping PC 4"
    ],
    "ru": [
      "наконец-то пингуем ПК 4"
    ]
  },
  {
    "time": [
      99.983198,
      106.461147
    ],
    "en": [
      "ping 10.0.0.1/31"
    ],
    "ru": [
      "пинг 10.0.0.1/31"
    ]
  },
  {
    "time": [
      106.461147,
      109.07504
    ],
    "en": [
      "the ping fails"
    ],
    "ru": [
      "пинг не работает"
    ]
  },
  {
    "time": [
      109.07504,
      114.150345
    ],
    "en": [
      "by the way I'm using the up arrow to access previous commands and just edit the last few numbers"
    ],
    "ru": [
      "кстати, я использую стрелку вверх для доступа к предыдущим командам и просто редактирую последние несколько чисел"
    ]
  },
  {
    "time": [
      114.150345,
      117.863708
    ],
    "en": [
      "next let's try to ping from PC 2"
    ],
    "ru": [
      "Далее попробуем пинговать с ПК 2"
    ]
  },
  {
    "time": [
      117.863708,
      124.750111
    ],
    "en": [
      "first PC 1 ping 10.0.0.2"
    ],
    "ru": [
      "первый ПК 1 пинг 10.0.0.2"
    ]
  },
  {
    "time": [
      124.750111,
      128.147073
    ],
    "en": [
      "the ping fails"
    ],
    "ru": [
      "пинг не работает"
    ]
  },
  {
    "time": [
      128.147073,
      130.360077
    ],
    "en": [
      "next PC 3"
    ],
    "ru": [
      "следующий ПК 3"
    ]
  },
  {
    "time": [
      130.360077,
      133.102953
    ],
    "en": [
      "ping 10.0.0.3"
    ],
    "ru": [
      "пинг 10.0.0.3"
    ]
  },
  {
    "time": [
      133.102953,
      137.272419
    ],
    "en": [
      "the ping fails"
    ],
    "ru": [
      "пинг не работает"
    ]
  },
  {
    "time": [
      137.272419,
      143.627194
    ],
    "en": [
      "finally pc4 ping 10.0.0.1/31"
    ],
    "ru": [
      "наконец pc4 ping 10.0.0.1/31"
    ]
  },
  {
    "time": [
      143.627194,
      145.138305
    ],
    "en": [
      "the ping works"
    ],
    "ru": [
      "пинг работает"
    ]
  },
  {
    "time": [
      145.138305,
      146.819868
    ],
    "en": [
      "that's step one"
    ],
    "ru": [
      "это первый шаг"
    ]
  },
  {
    "time": [
      146.819868,
      158.030154
    ],
    "en": [
      "step two is to assign pc1 & pc2 VLAN 13 & pc2 and pc 4 to VLAN 24"
    ],
    "ru": [
      "Шаг второй - назначить pc1 и pc2 VLAN 13 и pc2 и pc 4 для VLAN 24"
    ]
  },
  {
    "time": [
      158.030154,
      161.133806
    ],
    "en": [
      "let's configure switch 1 first"
    ],
    "ru": [
      "давайте сначала настроим переключатель 1"
    ]
  },
  {
    "time": [
      161.133806,
      176.534073
    ],
    "en": [
      "enable conf t interface f01 switch port mode access switch port access VLAN 13"
    ],
    "ru": [
      "enable conf t interface f01 коммутатор режим порта доступ коммутатор порт доступ VLAN 13"
    ]
  },
  {
    "time": [
      176.534073,
      179.17163
    ],
    "en": [
      "that's for a pc 1"
    ],
    "ru": [
      "это для ПК 1"
    ]
  },
  {
    "time": [
      179.17163,
      182.239367
    ],
    "en": [
      "next for pc 2"
    ],
    "ru": [
      "следующий для ПК 2"
    ]
  },
  {
    "time": [
      182.239367,
      186.011654
    ],
    "en": [
      "interface f0 2"
    ],
    "ru": [
      "интерфейс f0 2"
    ]
  },
  {
    "time": [
      186.011654,
      188.769901
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
      188.769901,
      194.066938
    ],
    "en": [
      "switch port access VLAN 24"
    ],
    "ru": [
      "порт коммутатора доступа VLAN 24"
    ]
  },
  {
    "time": [
      194.066938,
      197.082672
    ],
    "en": [
      "next let's configure switch 2"
    ],
    "ru": [
      "Далее давайте настроим переключатель 2"
    ]
  },
  {
    "time": [
      197.082672,
      207.20813
    ],
    "en": [
      "enable conf t interface f01 switch port mode access"
    ],
    "ru": [
      "enable conf t interface f01 переключатель режима порта доступа"
    ]
  },
  {
    "time": [
      207.20813,
      210.879959
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
      210.879959,
      217.265785
    ],
    "en": [
      "that's pc 3 next let's configure the interface connected to pc 4"
    ],
    "ru": [
      "это ПК 3, далее давайте настроим интерфейс, подключенный к ПК 4"
    ]
  },
  {
    "time": [
      217.265785,
      221.431042
    ],
    "en": [
      "interface f02"
    ],
    "ru": [
      "интерфейс f02"
    ]
  },
  {
    "time": [
      221.431042,
      228.64635
    ],
    "en": [
      "switch ports mode access switch port access VLAN 24"
    ],
    "ru": [
      "режим портов коммутатора доступ к портам коммутатора VLAN 24"
    ]
  },
  {
    "time": [
      228.64635,
      231.2011
    ],
    "en": [
      "step two is now complete"
    ],
    "ru": [
      "шаг два теперь завершен"
    ]
  },
  {
    "time": [
      231.2011,
      238.058483
    ],
    "en": [
      "step three is to create a trunk link between switch 1 and switch 2"
    ],
    "ru": [
      "Шаг третий - создать магистральный канал между коммутатором 1 и коммутатором 2."
    ]
  },
  {
    "time": [
      238.058483,
      247.461664
    ],
    "en": [
      "remember we need to configure a trunk link to allow the connection between switch 1 and switch two to carry traffic from multiple VLANs"
    ],
    "ru": [
      "помните, что нам нужно настроить магистральный канал, чтобы соединение между коммутатором 1 и коммутатором 2 могло передавать трафик из нескольких VLAN."
    ]
  },
  {
    "time": [
      247.461664,
      257.708238
    ],
    "en": [
      "in this case the interfaces are assigned to the native VLAN VLAN 1 however our pcs are assigned to either VLAN 13 or VLAN 24"
    ],
    "ru": [
      "в этом случае интерфейсы назначаются собственному VLAN VLAN 1, однако наши компьютеры назначаются либо VLAN 13, либо VLAN 24."
    ]
  },
  {
    "time": [
      257.708238,
      262.79738
    ],
    "en": [
      "therefore no traffic from these pcs will be able to pass between the switches"
    ],
    "ru": [
      "следовательно, трафик от этих компьютеров не сможет проходить между коммутаторами."
    ]
  },
  {
    "time": [
      262.79738,
      264.510651
    ],
    "en": [
      "even in the same VLAN"
    ],
    "ru": [
      "даже в той же VLAN"
    ]
  },
  {
    "time": [
      264.510651,
      267.526349
    ],
    "en": [
      "I'll just do one ping to prove this"
    ],
    "ru": [
      "Я просто сделаю один пинг, чтобы доказать это"
    ]
  },
  {
    "time": [
      267.526349,
      271.48651
    ],
    "en": [
      "from pc1 to pc3 are in the same VLAN"
    ],
    "ru": [
      "от pc1 до pc3 находятся в одной VLAN"
    ]
  },
  {
    "time": [
      271.48651,
      276.379656
    ],
    "en": [
      "ping 10.0.0.3"
    ],
    "ru": [
      "пинг 10.0.0.3"
    ]
  },
  {
    "time": [
      276.379656,
      282.738281
    ],
    "en": [
      "as you can see the ping which succeeded previously now fails"
    ],
    "ru": [
      "как вы можете видеть, пинг, который выполнялся ранее, теперь не работает"
    ]
  },
  {
    "time": [
      282.738281,
      285.579752
    ],
    "en": [
      "let's create a trunk now"
    ],
    "ru": [
      "давайте сейчас создадим ствол"
    ]
  },
  {
    "time": [
      285.579752,
      288.884624
    ],
    "en": [
      "I'll configure switch 1 first"
    ],
    "ru": [
      "Сначала я настрою переключатель 1"
    ]
  },
  {
    "time": [
      288.884624,
      296.529786
    ],
    "en": [
      "interface g0 2 switch port mode trunk"
    ],
    "ru": [
      "интерфейс g0 2 режим порта коммутатора магистраль"
    ]
  },
  {
    "time": [
      296.529786,
      302.62073
    ],
    "en": [
      "that's it on this switch model we don't have to configure the encapsulation type"
    ],
    "ru": [
      "вот именно на этой модели коммутатора нам не нужно настраивать тип инкапсуляции"
    ]
  },
  {
    "time": [
      302.62073,
      313.624853
    ],
    "en": [
      "next let's configure switch 2 interface g0 1 switch port mode trunk"
    ],
    "ru": [
      "Далее давайте настроим интерфейс коммутатора 2 g0 1 режим порта коммутатора магистраль"
    ]
  },
  {
    "time": [
      313.624853,
      316.140479
    ],
    "en": [
      "that's step 3"
    ],
    "ru": [
      "это шаг 3"
    ]
  },
  {
    "time": [
      316.140479,
      326.375406
    ],
    "en": [
      "step four is to configure inter VLAN routing by creating sub interfaces on r1"
    ],
    "ru": [
      "Шаг четвертый - настроить маршрутизацию между VLAN, создав субинтерфейсы на r1."
    ]
  },
  {
    "time": [
      326.375406,
      335.03793
    ],
    "en": [
      "currently because we created a trunk between switch 1 and switch 2 pcs in the same VLAN can ping each other again"
    ],
    "ru": [
      "в настоящее время, поскольку мы создали магистраль между коммутатором 1 и коммутатором 2, компьютеры в одной VLAN могут снова пинговать друг друга"
    ]
  },
  {
    "time": [
      335.03793,
      340.045953
    ],
    "en": [
      "I'll ping once more from pc1 to pc3 show this"
    ],
    "ru": [
      "Я пингую еще раз с pc1 на pc3 покажу это"
    ]
  },
  {
    "time": [
      340.045953,
      348.765183
    ],
    "en": [
      "ping 10.0.0.3 as you can see there are once again no problems"
    ],
    "ru": [
      "ping 10.0.0.3 как видите, опять нет проблем"
    ]
  },
  {
    "time": [
      348.765183,
      353.572102
    ],
    "en": [
      "however pings to a different VLAN should not work"
    ],
    "ru": [
      "однако эхо-запросы к другой VLAN не должны работать"
    ]
  },
  {
    "time": [
      353.572102,
      357.670394
    ],
    "en": [
      "let's just ping from pc1 to pc2 check"
    ],
    "ru": [
      "давайте просто пинг с pc1 на pc2 проверим"
    ]
  },
  {
    "time": [
      357.670394,
      362.196778
    ],
    "en": [
      "ping 10.0.0.1/31"
    ],
    "ru": [
      "пинг 10.0.0.1/31"
    ]
  },
  {
    "time": [
      362.196778,
      365.632799
    ],
    "en": [
      "as you can see the ping fails"
    ],
    "ru": [
      "как видите, пинг не работает"
    ]
  },
  {
    "time": [
      365.632799,
      374.333866
    ],
    "en": [
      "now one way of configuring inter VLAN routing the one we will be using in this lab is called router on a stick"
    ],
    "ru": [
      "Теперь один из способов настройки маршрутизации между VLAN, который мы будем использовать в этой лабораторной работе, называется маршрутизатором на флешке."
    ]
  },
  {
    "time": [
      374.333866,
      379.682595
    ],
    "en": [
      "as you can see there is only one connection between r1 and switch one"
    ],
    "ru": [
      "как вы можете видеть, есть только одно соединение между r1 и переключателем"
    ]
  },
  {
    "time": [
      379.682595,
      385.984428
    ],
    "en": [
      "however we will configure two sub interfaces using the single connection"
    ],
    "ru": [
      "однако мы настроим два субинтерфейса, используя одно соединение"
    ]
  },
  {
    "time": [
      385.984428,
      393.111519
    ],
    "en": [
      "and each sub interface will have a separate IP address which serves as the default gateway for the pcs in each VLAN"
    ],
    "ru": [
      "и каждый подчиненный интерфейс будет иметь отдельный IP-адрес, который служит шлюзом по умолчанию для компьютеров в каждой VLAN."
    ]
  },
  {
    "time": [
      393.111519,
      398.728099
    ],
    "en": [
      "note that I have already configured the pcs with their default gateways"
    ],
    "ru": [
      "обратите внимание, что я уже настроил компьютеры со шлюзами по умолчанию"
    ]
  },
  {
    "time": [
      398.728099,
      402.407727
    ],
    "en": [
      "so let's configure r1"
    ],
    "ru": [
      "так что давайте настроим r1"
    ]
  },
  {
    "time": [
      402.407727,
      413.222441
    ],
    "en": [
      "enable conf t first I will turn on the Gigabit Ethernet 0 0 interface which is shut down by default"
    ],
    "ru": [
      "сначала включить конф. Я включу интерфейс Gigabit Ethernet 0 0, который по умолчанию отключен"
    ]
  },
  {
    "time": [
      413.222441,
      418.267846
    ],
    "en": [
      "interface G 0 0 no shutdown"
    ],
    "ru": [
      "интерфейс G 0 0 без отключения"
    ]
  },
  {
    "time": [
      418.267846,
      423.511916
    ],
    "en": [
      "next let's configure the sub interface for VLAN 13"
    ],
    "ru": [
      "Далее давайте настроим субинтерфейс для VLAN 13"
    ]
  },
  {
    "time": [
      423.511916,
      430.484622
    ],
    "en": [
      "first type interface G 0 0 as normal then dot 13"
    ],
    "ru": [
      "первый тип интерфейса G 0 0 как обычно, затем точка 13"
    ]
  },
  {
    "time": [
      430.484622,
      435.28377
    ],
    "en": [
      "as you can see we are in sub interface configuration mode"
    ],
    "ru": [
      "как вы можете видеть, мы находимся в режиме настройки субинтерфейса"
    ]
  },
  {
    "time": [
      435.28377,
      449.810928
    ],
    "en": [
      "I'll set the IP address to 10.0.0.1 so IP address 10.0.0.1 with the subnet mask of 255.255.255.0"
    ],
    "ru": [
      "Я установлю IP-адрес 10.0.0.1, поэтому IP-адрес 10.0.0.1 с маской подсети 255.255.255.0"
    ]
  },
  {
    "time": [
      449.810928,
      452.832315
    ],
    "en": [
      "is equivalent to 25"
    ],
    "ru": [
      "эквивалентно 25"
    ]
  },
  {
    "time": [
      452.832315,
      456.456199
    ],
    "en": [
      "but the command doesn't work"
    ],
    "ru": [
      "но команда не работает"
    ]
  },
  {
    "time": [
      456.456199,
      460.340272
    ],
    "en": [
      "we have to configure this sub interface as part of a VLAN first"
    ],
    "ru": [
      "мы должны сначала настроить этот субинтерфейс как часть VLAN"
    ]
  },
  {
    "time": [
      460.340272,
      463.117576
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
      463.117576,
      469.165352
    ],
    "en": [
      "encapsulation dot1q 13"
    ],
    "ru": [
      "инкапсуляция dot1q 13"
    ]
  },
  {
    "time": [
      469.165352,
      471.799204
    ],
    "en": [
      "now we can configure the IP address"
    ],
    "ru": [
      "теперь мы можем настроить IP-адрес"
    ]
  },
  {
    "time": [
      471.799204,
      480.267422
    ],
    "en": [
      "IP address 10.0.0.1 255.255.255.192"
    ],
    "ru": [
      "IP-адрес 10.0.0.1 255.255.255.192"
    ]
  },
  {
    "time": [
      480.267422,
      486.258454
    ],
    "en": [
      "face for VLAN 24"
    ],
    "ru": [
      "лицо для VLAN 24"
    ]
  },
  {
    "time": [
      486.258454,
      494.599839
    ],
    "en": [
      "interface g0 0.24"
    ],
    "ru": [
      "интерфейс g0 0,24"
    ]
  },
  {
    "time": [
      494.599839,
      498.877398
    ],
    "en": [
      "we will use an IP address of 10.0.0.1 29"
    ],
    "ru": [
      "мы будем использовать IP-адрес 10.0.0.1 29"
    ]
  },
  {
    "time": [
      498.877398,
      503.411231
    ],
    "en": [
      "and a subnet mask of 255.255.255.128"
    ],
    "ru": [
      "и маска подсети 255.255.255.128"
    ]
  },
  {
    "time": [
      503.411231,
      507.227555
    ],
    "en": [
      "we have to configure the encapsulation"
    ],
    "ru": [
      "нам нужно настроить инкапсуляцию"
    ]
  },
  {
    "time": [
      507.227555,
      512.509834
    ],
    "en": [
      "encapsulation dot1q 24"
    ],
    "ru": [
      "инкапсуляция dot1q 24"
    ]
  },
  {
    "time": [
      512.509834,
      522.780599
    ],
    "en": [
      "IP address 10.0.0.1 29 255.255.255.128"
    ],
    "ru": [
      "IP-адрес 10.0.0.1 29 255.255.255.128"
    ]
  },
  {
    "time": [
      522.780599,
      527.796498
    ],
    "en": [
      "the configuration of r1 is now complete"
    ],
    "ru": [
      "настройка r1 теперь завершена"
    ]
  },
  {
    "time": [
      527.796498,
      530.922684
    ],
    "en": [
      "however there is one more final step"
    ],
    "ru": [
      "однако есть еще один заключительный шаг"
    ]
  },
  {
    "time": [
      530.922684,
      536.347466
    ],
    "en": [
      "remember that switch ones interfaces are access ports in the native VLAN"
    ],
    "ru": [
      "помните, что интерфейсы коммутатора - это порты доступа в собственной VLAN"
    ]
  },
  {
    "time": [
      536.347466,
      538.259539
    ],
    "en": [
      "VLAN 1 by default"
    ],
    "ru": [
      "VLAN 1 по умолчанию"
    ]
  },
  {
    "time": [
      538.259539,
      543.457625
    ],
    "en": [
      "that includes Gigabit Ethernet 0 1 which is connected to r1"
    ],
    "ru": [
      "который включает Gigabit Ethernet 0 1, который подключен к r1"
    ]
  },
  {
    "time": [
      543.457625,
      548.415816
    ],
    "en": [
      "so it can't send traffic from VLAN 13 or VLAN 24 to r1"
    ],
    "ru": [
      "поэтому он не может отправлять трафик из VLAN 13 или VLAN 24 на r1"
    ]
  },
  {
    "time": [
      548.415816,
      550.522343
    ],
    "en": [
      "let's make it a trunk"
    ],
    "ru": [
      "давай сделаем это багажником"
    ]
  },
  {
    "time": [
      550.522343,
      556.777736
    ],
    "en": [
      "interface g0 1 switch port mode trunk"
    ],
    "ru": [
      "интерфейс g0 1 переключатель режима порта магистраль"
    ]
  },
  {
    "time": [
      556.777736,
      560.126419
    ],
    "en": [
      "ok step 4 is complete"
    ],
    "ru": [
      "хорошо, шаг 4 завершен"
    ]
  },
  {
    "time": [
      560.126419,
      566.536333
    ],
    "en": [
      "finally let's test this small Network"
    ],
    "ru": [
      "наконец, давайте протестируем эту маленькую сеть"
    ]
  },
  {
    "time": [
      566.536333,
      571.898954
    ],
    "en": [
      "all pcs should be able to ping each other even though they're in separate VLANs"
    ],
    "ru": [
      "все компьютеры должны иметь возможность пинговать друг друга, даже если они находятся в разных VLAN"
    ]
  },
  {
    "time": [
      571.898954,
      579.751511
    ],
    "en": [
      "as in the beginning of the lab helping each other PC from pc1 and from PC 2 to check"
    ],
    "ru": [
      "как в начале лаборатории, помогая друг другу ПК с ПК 1 и ПК 2 проверять"
    ]
  },
  {
    "time": [
      579.751511,
      583.873164
    ],
    "en": [
      "let's go to PC one first"
    ],
    "ru": [
      "давай сначала займемся ПК"
    ]
  },
  {
    "time": [
      583.873164,
      593.694333
    ],
    "en": [
      "first I'll ping PC 2 ping ping 10.0.0.1/30 it works"
    ],
    "ru": [
      "сначала пингую комп 2 пинг пинг 10.0.0.1/30 работает"
    ]
  },
  {
    "time": [
      593.694333,
      602.076676
    ],
    "en": [
      "next I'll ping pc3 ping 10.0.0.3 it works as well"
    ],
    "ru": [
      "далее я пингую pc3 ping 10.0.0.3 он тоже работает"
    ]
  },
  {
    "time": [
      602.076676,
      607.099794
    ],
    "en": [
      "and finally PC for ping 10.0.0.1/31"
    ],
    "ru": [
      "и наконец ПК для пинга 10.0.0.1/31"
    ]
  },
  {
    "time": [
      607.099794,
      610.946435
    ],
    "en": [
      "it works ok"
    ],
    "ru": [
      "это работает нормально"
    ]
  },
  {
    "time": [
      610.946435,
      615.842169
    ],
    "en": [
      "next let's ping from PC2 first up in PC 1"
    ],
    "ru": [
      "затем давайте пингуем с ПК2 сначала на ПК 1"
    ]
  },
  {
    "time": [
      615.842169,
      620.836759
    ],
    "en": [
      "ping 10.0.0.2 and it works"
    ],
    "ru": [
      "пинг 10.0.0.2 и он работает"
    ]
  },
  {
    "time": [
      620.836759,
      627.019187
    ],
    "en": [
      "next PC 3 ping 10.0.0.3 it works as well"
    ],
    "ru": [
      "следующий ПК 3 пинг 10.0.0.3 тоже работает"
    ]
  },
  {
    "time": [
      627.019187,
      633.81698
    ],
    "en": [
      "and finally PC 4 ping 10.0.0.1/31 it works too"
    ],
    "ru": [
      "и наконец ПК 4 пинг 10.0.0.1/31 тоже работает"
    ]
  },
  {
    "time": [
      633.81698,
      637.332415
    ],
    "en": [
      "we have successfully configured inter VLAN routing"
    ],
    "ru": [
      "мы успешно настроили маршрутизацию между VLAN"
    ]
  },
  {
    "time": [
      637.332415,
      642.732354
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
      642.732354,
      645.348526
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
      645.348526,
      650.576839
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
      650.576839,
      655.726031
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
      655.726031,
      661.757487
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
      661.757487,
      670.890135
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
      670.890135,
      670.890135
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
      670.890135,
      670.890135
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
      670.890135,
      670.890135
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]