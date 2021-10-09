let objs = [
  {
    "time": [
      0.0,
      4.589145
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
      4.589145,
      7.469604
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
      7.469604,
      14.589291
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
      14.589291,
      18.816895
    ],
    "en": [
      "also please subscribe to the channel for more labs like this"
    ],
    "ru": [
      "также подпишитесь на канал, чтобы увидеть больше подобных лабораторных работ"
    ]
  },
  {
    "time": [
      18.816895,
      22.680832
    ],
    "en": [
      "and share these videos with anyone else studying for the CCNA"
    ],
    "ru": [
      "и поделитесь этими видео со всеми, кто учится на CCNA"
    ]
  },
  {
    "time": [
      22.680832,
      28.406374
    ],
    "en": [
      "in this lab we will troubleshoot some problems with ACL configurations"
    ],
    "ru": [
      "в этой лабораторной работе мы устраним некоторые проблемы с конфигурациями ACL."
    ]
  },
  {
    "time": [
      28.406374,
      34.033143
    ],
    "en": [
      "this is the same topology as the previous lab with the same ACLs"
    ],
    "ru": [
      "это та же топология, что и в предыдущей лабораторной работе, с теми же списками контроля доступа."
    ]
  },
  {
    "time": [
      34.033143,
      37.019685
    ],
    "en": [
      "except I have made three miss configurations"
    ],
    "ru": [
      "за исключением того, что я сделал три конфигурации промаха"
    ]
  },
  {
    "time": [
      37.019685,
      41.005183
    ],
    "en": [
      "there are four ACLs one is correct"
    ],
    "ru": [
      "есть четыре ACL, один правильный"
    ]
  },
  {
    "time": [
      41.005183,
      43.008099
    ],
    "en": [
      "and the other three have mistakes"
    ],
    "ru": [
      "а у трех других есть ошибки"
    ]
  },
  {
    "time": [
      43.008099,
      53.319432
    ],
    "en": [
      "let's get started so the first ACL should prevent pc4 from accessing the 10.4.4.0 / 24 network"
    ],
    "ru": [
      "давайте начнем, поэтому первый ACL должен предотвратить доступ pc4 к сети 10.4.4.0 / 24"
    ]
  },
  {
    "time": [
      53.319432,
      57.101597
    ],
    "en": [
      "let's see if pc4 can ping server one"
    ],
    "ru": [
      "посмотрим, может ли pc4 пинговать сервер один"
    ]
  },
  {
    "time": [
      57.101597,
      60.079222
    ],
    "en": [
      "which is in the 10.4.4.0 network"
    ],
    "ru": [
      "который находится в сети 10.4.4.0"
    ]
  },
  {
    "time": [
      60.079222,
      65.654388
    ],
    "en": [
      "ping 10.4.4.100"
    ],
    "ru": [
      "пинг 10.4.4.100"
    ]
  },
  {
    "time": [
      65.654388,
      74.528138
    ],
    "en": [
      "looks like pc4 is able to reach server 1"
    ],
    "ru": [
      "похоже, что pc4 может подключиться к серверу 1"
    ]
  },
  {
    "time": [
      74.528138,
      76.616638
    ],
    "en": [
      "so there must be a miss configuration"
    ],
    "ru": [
      "так что должна быть пропущенная конфигурация"
    ]
  },
  {
    "time": [
      76.616638,
      80.017179
    ],
    "en": [
      "I applied the ACL on r2"
    ],
    "ru": [
      "Я применил ACL на r2"
    ]
  },
  {
    "time": [
      80.017179,
      81.278179
    ],
    "en": [
      "so let's check there"
    ],
    "ru": [
      "так что давай проверим там"
    ]
  },
  {
    "time": [
      81.278179,
      87.620887
    ],
    "en": [
      "enable show access lists"
    ],
    "ru": [
      "включить показывать списки доступа"
    ]
  },
  {
    "time": [
      87.620887,
      90.923783
    ],
    "en": [
      "okay there's the issue"
    ],
    "ru": [
      "хорошо, вот в чем проблема"
    ]
  },
  {
    "time": [
      90.923783,
      93.985366
    ],
    "en": [
      "the order of statements in the ACL is wrong"
    ],
    "ru": [
      "порядок операторов в ACL неправильный"
    ]
  },
  {
    "time": [
      93.985366,
      99.631074
    ],
    "en": [
      "because the permit any statement is first all traffic is allowed"
    ],
    "ru": [
      "потому что разрешить любой оператор сначала разрешен весь трафик"
    ]
  },
  {
    "time": [
      99.631074,
      103.813636
    ],
    "en": [
      "I have to put the deny host before the permit any"
    ],
    "ru": [
      "Я должен поставить запрещающий хост перед разрешением любого"
    ]
  },
  {
    "time": [
      103.813636,
      107.071219
    ],
    "en": [
      "so 10.2.2.12 will be denied"
    ],
    "ru": [
      "поэтому 10.2.2.12 будет отклонено"
    ]
  },
  {
    "time": [
      107.071219,
      109.871281
    ],
    "en": [
      "and then all other traffic will be allowed"
    ],
    "ru": [
      "и тогда весь остальной трафик будет разрешен"
    ]
  },
  {
    "time": [
      109.871281,
      112.863385
    ],
    "en": [
      "I'll remove the ACL and then redo it"
    ],
    "ru": [
      "Я удалю ACL, а затем переделаю"
    ]
  },
  {
    "time": [
      112.863385,
      117.640551
    ],
    "en": [
      "conf t now access list one"
    ],
    "ru": [
      "conf t теперь доступ к списку один"
    ]
  },
  {
    "time": [
      117.640551,
      123.656049
    ],
    "en": [
      "access list one deny host 10.2.2.12"
    ],
    "ru": [
      "список доступа один запрещающий хост 10.2.2.12"
    ]
  },
  {
    "time": [
      123.656049,
      126.992069
    ],
    "en": [
      "access list one permit any"
    ],
    "ru": [
      "список доступа одно разрешение любое"
    ]
  },
  {
    "time": [
      126.992069,
      130.707736
    ],
    "en": [
      "ok let's try that ping again from PC 4"
    ],
    "ru": [
      "хорошо, давайте попробуем еще раз пинг с ПК 4"
    ]
  },
  {
    "time": [
      130.707736,
      136.133319
    ],
    "en": [
      "ping 10.4.4.100"
    ],
    "ru": [
      "пинг 10.4.4.100"
    ]
  },
  {
    "time": [
      136.133319,
      140.089902
    ],
    "en": [
      "ok now we get the destination host unreachable message"
    ],
    "ru": [
      "хорошо, теперь мы получаем сообщение о недоступности хоста назначения"
    ]
  },
  {
    "time": [
      140.089902,
      141.355006
    ],
    "en": [
      "that's good"
    ],
    "ru": [
      "это хорошо"
    ]
  },
  {
    "time": [
      141.355006,
      143.763006
    ],
    "en": [
      "can other hosts reach server one"
    ],
    "ru": [
      "могут ли другие хосты достичь первого сервера"
    ]
  },
  {
    "time": [
      143.763006,
      146.039964
    ],
    "en": [
      "I'll try from PC 3"
    ],
    "ru": [
      "Попробую с ПК 3"
    ]
  },
  {
    "time": [
      146.039964,
      151.312588
    ],
    "en": [
      "ping 10.4.4.100"
    ],
    "ru": [
      "пинг 10.4.4.100"
    ]
  },
  {
    "time": [
      151.312588,
      158.650963
    ],
    "en": [
      "okay it's working now"
    ],
    "ru": [
      "хорошо, сейчас работает"
    ]
  },
  {
    "time": [
      158.650963,
      162.03415
    ],
    "en": [
      "let's move on to the next ACL"
    ],
    "ru": [
      "перейдем к следующему ACL"
    ]
  },
  {
    "time": [
      162.03415,
      170.818254
    ],
    "en": [
      "pc5 shouldn't be able to access the 2001 db8 22 22 / 64 network"
    ],
    "ru": [
      "pc5 не должен иметь доступ к сети 2001 db8 22 22/64"
    ]
  },
  {
    "time": [
      170.818254,
      174.89517
    ],
    "en": [
      "let's try to ping from PC 5 to server 2"
    ],
    "ru": [
      "давайте попробуем пинговать с ПК 5 на сервер 2"
    ]
  },
  {
    "time": [
      174.89517,
      184.752357
    ],
    "en": [
      "ping 2001 DB 8 22 22 : 100"
    ],
    "ru": [
      "пинг 2001 DB 8 22 22: 100"
    ]
  },
  {
    "time": [
      184.752357,
      191.307503
    ],
    "en": [
      "ok the ping works"
    ],
    "ru": [
      "хорошо, пинг работает"
    ]
  },
  {
    "time": [
      191.307503,
      193.664482
    ],
    "en": [
      "so there's another miss configuration here"
    ],
    "ru": [
      "так что здесь есть еще одна пропущенная конфигурация"
    ]
  },
  {
    "time": [
      193.664482,
      196.525607
    ],
    "en": [
      "I applied the ACL on r1"
    ],
    "ru": [
      "Я применил ACL на r1"
    ]
  },
  {
    "time": [
      196.525607,
      197.789377
    ],
    "en": [
      "so let's investigate"
    ],
    "ru": [
      "так что давайте расследуем"
    ]
  },
  {
    "time": [
      197.789377,
      203.107439
    ],
    "en": [
      "enable show access lists"
    ],
    "ru": [
      "включить показывать списки доступа"
    ]
  },
  {
    "time": [
      203.107439,
      206.180689
    ],
    "en": [
      "here's the access list"
    ],
    "ru": [
      "вот список доступа"
    ]
  },
  {
    "time": [
      206.180689,
      207.303314
    ],
    "en": [
      "it looks good"
    ],
    "ru": [
      "это выглядит хорошо"
    ]
  },
  {
    "time": [
      207.303314,
      210.534064
    ],
    "en": [
      "denying from PC 5 to the correct subnet"
    ],
    "ru": [
      "отказ от ПК 5 к правильной подсети"
    ]
  },
  {
    "time": [
      210.534064,
      213.397126
    ],
    "en": [
      "maybe it isn't applied correctly"
    ],
    "ru": [
      "возможно это неправильно применено"
    ]
  },
  {
    "time": [
      213.397126,
      218.462834
    ],
    "en": [
      "show ipv6 interface g0 2"
    ],
    "ru": [
      "показать интерфейс ipv6 g0 2"
    ]
  },
  {
    "time": [
      218.462834,
      223.925688
    ],
    "en": [
      "outgoing access list g0 2 in"
    ],
    "ru": [
      "список исходящего доступа g0 2 в"
    ]
  },
  {
    "time": [
      223.925688,
      225.9345
    ],
    "en": [
      "there's the problem"
    ],
    "ru": [
      "вот проблема"
    ]
  },
  {
    "time": [
      225.9345,
      230.45477
    ],
    "en": [
      "the ACL should be inbound not outbound or outgoing"
    ],
    "ru": [
      "ACL должен быть входящим, а не исходящим или исходящим"
    ]
  },
  {
    "time": [
      230.45477,
      240.34377
    ],
    "en": [
      "because traffic from PC 5 to the 2001 DB 8 2222 subnet will be entering the g0 2 interface not exiting"
    ],
    "ru": [
      "потому что трафик от ПК 5 к подсети 2001 DB 8 2222 будет входить в интерфейс g0 2, а не выходить"
    ]
  },
  {
    "time": [
      240.34377,
      248.511519
    ],
    "en": [
      "the return traffic coming back from server 2 has the source and destination IP addresses reversed"
    ],
    "ru": [
      "обратный трафик, возвращающийся с сервера 2, имеет обратные IP-адреса источника и назначения"
    ]
  },
  {
    "time": [
      248.511519,
      251.011206
    ],
    "en": [
      "so the ACL lets them by"
    ],
    "ru": [
      "так что ACL позволяет им"
    ]
  },
  {
    "time": [
      251.011206,
      254.240248
    ],
    "en": [
      "let's reapply the ACL inbound"
    ],
    "ru": [
      "давайте повторно применим входящий ACL"
    ]
  },
  {
    "time": [
      254.240248,
      258.897956
    ],
    "en": [
      "conf t interface g0 2"
    ],
    "ru": [
      "conf t interface g0 2"
    ]
  },
  {
    "time": [
      258.897956,
      263.473164
    ],
    "en": [
      "no ipv6 traffic filter"
    ],
    "ru": [
      "нет фильтра трафика ipv6"
    ]
  },
  {
    "time": [
      263.473164,
      266.607872
    ],
    "en": [
      "g0 2 in out"
    ],
    "ru": [
      "g0 2 на выходе"
    ]
  },
  {
    "time": [
      266.607872,
      272.444162
    ],
    "en": [
      "ipv6 traffic filter g0 2 in in"
    ],
    "ru": [
      "фильтр трафика ipv6 g0 2 дюйма в"
    ]
  },
  {
    "time": [
      272.444162,
      275.916912
    ],
    "en": [
      "ok let's try that ping again"
    ],
    "ru": [
      "хорошо, давай попробуем пинг еще раз"
    ]
  },
  {
    "time": [
      275.916912,
      283.521536
    ],
    "en": [
      "ping 2001 DB 8 22 22 100"
    ],
    "ru": [
      "пинг 2001 DB 8 22 22 100"
    ]
  },
  {
    "time": [
      283.521536,
      289.406953
    ],
    "en": [
      "ok now we get the destination host unreachable message from r1"
    ],
    "ru": [
      "Хорошо, теперь мы получаем сообщение о недоступности хоста назначения от r1"
    ]
  },
  {
    "time": [
      289.406953,
      292.724036
    ],
    "en": [
      "let's test the next ACL"
    ],
    "ru": [
      "давайте протестируем следующий ACL"
    ]
  },
  {
    "time": [
      292.724036,
      296.674514
    ],
    "en": [
      "pc3 shouldn't be able to communicate with PC 1"
    ],
    "ru": [
      "pc3 не должен иметь возможность связываться с ПК 1"
    ]
  },
  {
    "time": [
      296.674514,
      300.687014
    ],
    "en": [
      "let's try a ping from pc 3 to pc 1"
    ],
    "ru": [
      "давайте попробуем пинг с пк 3 на пк 1"
    ]
  },
  {
    "time": [
      300.687014,
      305.21516
    ],
    "en": [
      "ping 10.1.1.11"
    ],
    "ru": [
      "пинг 10.1.1.11"
    ]
  },
  {
    "time": [
      305.21516,
      309.533389
    ],
    "en": [
      "destination host unreachable looks good"
    ],
    "ru": [
      "целевой хост недоступен, выглядит хорошо"
    ]
  },
  {
    "time": [
      309.533389,
      312.61193
    ],
    "en": [
      "now pc 4 should be able to reach pc 1"
    ],
    "ru": [
      "теперь компьютер 4 должен иметь доступ к ПК 1"
    ]
  },
  {
    "time": [
      312.61193,
      314.455742
    ],
    "en": [
      "let's test it out"
    ],
    "ru": [
      "давай проверим это"
    ]
  },
  {
    "time": [
      314.455742,
      319.489554
    ],
    "en": [
      "ping 10.1.1.11"
    ],
    "ru": [
      "пинг 10.1.1.11"
    ]
  },
  {
    "time": [
      319.489554,
      326.71747
    ],
    "en": [
      "ok the ping is successful"
    ],
    "ru": [
      "хорошо, пинг прошел успешно"
    ]
  },
  {
    "time": [
      326.71747,
      329.410054
    ],
    "en": [
      "so this ACL seems to be functioning properly"
    ],
    "ru": [
      "так что этот ACL, кажется, работает правильно"
    ]
  },
  {
    "time": [
      329.410054,
      336.126845
    ],
    "en": [
      "now our final ACL should allow pc 6 to telnet to r2"
    ],
    "ru": [
      "теперь наш последний ACL должен позволить ПК 6 подключиться к r2 через telnet."
    ]
  },
  {
    "time": [
      336.126845,
      339.373928
    ],
    "en": [
      "but not other ipv6 hosts like PC 5"
    ],
    "ru": [
      "но не другие хосты ipv6, такие как ПК 5"
    ]
  },
  {
    "time": [
      339.373928,
      343.634719
    ],
    "en": [
      "let's try to telnet from PC 6"
    ],
    "ru": [
      "попробуем телнет с ПК 6"
    ]
  },
  {
    "time": [
      343.634719,
      351.878948
    ],
    "en": [
      "telnet 2001 DB 8 12 12 : 2"
    ],
    "ru": [
      "telnet 2001 DB 8 12 12: 2"
    ]
  },
  {
    "time": [
      351.878948,
      356.020864
    ],
    "en": [
      "looks good I'll enter the password of CCNA"
    ],
    "ru": [
      "выглядит хорошо Я введу пароль CCNA"
    ]
  },
  {
    "time": [
      356.020864,
      358.191655
    ],
    "en": [
      "okay we're in"
    ],
    "ru": [
      "хорошо, мы в"
    ]
  },
  {
    "time": [
      358.191655,
      359.321843
    ],
    "en": [
      "exit"
    ],
    "ru": [
      "выход"
    ]
  },
  {
    "time": [
      359.321843,
      364.796718
    ],
    "en": [
      "so that seems fine but pc 5 shouldn't be able to tell met to our 2"
    ],
    "ru": [
      "так что это кажется нормальным, но компьютер 5 не должен отличить встречу от наших 2"
    ]
  },
  {
    "time": [
      364.796718,
      367.366113
    ],
    "en": [
      "let's try to telnet from PC 5"
    ],
    "ru": [
      "попробуем телнет с пк 5"
    ]
  },
  {
    "time": [
      367.366113,
      377.901924
    ],
    "en": [
      "telnet 2001 DB 8 12 12 : 2 okay here's the problem"
    ],
    "ru": [
      "telnet 2001 DB 8 12 12: 2 хорошо, вот в чем проблема"
    ]
  },
  {
    "time": [
      377.901924,
      380.847716
    ],
    "en": [
      "PC 5 is also able to telnet to r2"
    ],
    "ru": [
      "ПК 5 также может подключаться к r2 через telnet."
    ]
  },
  {
    "time": [
      380.847716,
      384.293966
    ],
    "en": [
      "let's investigate on r2"
    ],
    "ru": [
      "давай исследуем на r2"
    ]
  },
  {
    "time": [
      384.293966,
      388.741549
    ],
    "en": [
      "do show access lists"
    ],
    "ru": [
      "показывать списки доступа"
    ]
  },
  {
    "time": [
      388.741549,
      395.614361
    ],
    "en": [
      "permit TCP host with the IP address of PC 6"
    ],
    "ru": [
      "разрешить TCP-хост с IP-адресом ПК 6"
    ]
  },
  {
    "time": [
      395.614361,
      398.060152
    ],
    "en": [
      "ne equals telnet"
    ],
    "ru": [
      "ne равно telnet"
    ]
  },
  {
    "time": [
      398.060152,
      399.658277
    ],
    "en": [
      "that looks good"
    ],
    "ru": [
      "выглядит хорошо"
    ]
  },
  {
    "time": [
      399.658277,
      402.305235
    ],
    "en": [
      "so let's check how the ACL is applied"
    ],
    "ru": [
      "так что давайте проверим, как применяется ACL"
    ]
  },
  {
    "time": [
      402.305235,
      405.202756
    ],
    "en": [
      "do show run"
    ],
    "ru": [
      "показывать бег"
    ]
  },
  {
    "time": [
      405.202756,
      409.709693
    ],
    "en": [
      "okay there's the issue"
    ],
    "ru": [
      "хорошо, вот в чем проблема"
    ]
  },
  {
    "time": [
      409.709693,
      414.544672
    ],
    "en": [
      "the ACL is applied to the console line not the vty lines"
    ],
    "ru": [
      "ACL применяется к строке консоли, а не к строкам VTY"
    ]
  },
  {
    "time": [
      414.544672,
      415.994755
    ],
    "en": [
      "which are used for telnet"
    ],
    "ru": [
      "которые используются для telnet"
    ]
  },
  {
    "time": [
      415.994755,
      419.135359
    ],
    "en": [
      "let's remove and then reapply it"
    ],
    "ru": [
      "давайте удалим, а затем снова применим"
    ]
  },
  {
    "time": [
      419.135359,
      421.541755
    ],
    "en": [
      "let me copy the command first"
    ],
    "ru": [
      "позвольте мне сначала скопировать команду"
    ]
  },
  {
    "time": [
      421.541755,
      425.477734
    ],
    "en": [
      "and then let's remove it"
    ],
    "ru": [
      "а затем давайте удалим это"
    ]
  },
  {
    "time": [
      425.477734,
      427.635026
    ],
    "en": [
      "line console 0"
    ],
    "ru": [
      "линия консоли 0"
    ]
  },
  {
    "time": [
      427.635026,
      430.493797
    ],
    "en": [
      "I'll paste it here"
    ],
    "ru": [
      "Я вставлю это сюда"
    ]
  },
  {
    "time": [
      430.493797,
      433.535442
    ],
    "en": [
      "and then cancel it with no"
    ],
    "ru": [
      "а затем отмените его без"
    ]
  },
  {
    "time": [
      433.535442,
      435.875192
    ],
    "en": [
      "okay now let's reapply it"
    ],
    "ru": [
      "хорошо, теперь давайте повторно применим это"
    ]
  },
  {
    "time": [
      435.875192,
      439.648233
    ],
    "en": [
      "line vty 0 15"
    ],
    "ru": [
      "строка vty 0 15"
    ]
  },
  {
    "time": [
      439.648233,
      442.118692
    ],
    "en": [
      "and now I'll paste it here once more"
    ],
    "ru": [
      "а теперь я вставлю его сюда еще раз"
    ]
  },
  {
    "time": [
      442.118692,
      446.803775
    ],
    "en": [
      "ok let's test again"
    ],
    "ru": [
      "хорошо, давай снова протестируем"
    ]
  },
  {
    "time": [
      446.803775,
      449.468816
    ],
    "en": [
      "I'll telnet from PC 5"
    ],
    "ru": [
      "Я буду телнетом с ПК 5"
    ]
  },
  {
    "time": [
      449.468816,
      455.981004
    ],
    "en": [
      "telnet 2001 DB 8 12 12 2"
    ],
    "ru": [
      "Telnet 2001 DB 8 12 12 2"
    ]
  },
  {
    "time": [
      455.981004,
      458.621087
    ],
    "en": [
      "good it doesn't work this time"
    ],
    "ru": [
      "хорошо, на этот раз не работает"
    ]
  },
  {
    "time": [
      458.621087,
      461.537628
    ],
    "en": [
      "but can PC 6 still telnet"
    ],
    "ru": [
      "но может ли ПК 6 по-прежнему телнет"
    ]
  },
  {
    "time": [
      461.537628,
      463.17169
    ],
    "en": [
      "let's try"
    ],
    "ru": [
      "давай попробуем"
    ]
  },
  {
    "time": [
      463.17169,
      468.875544
    ],
    "en": [
      "telnet 2001 DB 8 12 12 2"
    ],
    "ru": [
      "Telnet 2001 DB 8 12 12 2"
    ]
  },
  {
    "time": [
      468.875544,
      470.788002
    ],
    "en": [
      "password CCNA"
    ],
    "ru": [
      "пароль CCNA"
    ]
  },
  {
    "time": [
      470.788002,
      474.819356
    ],
    "en": [
      "ok all of our ACLs are working now"
    ],
    "ru": [
      "хорошо, все наши ACL теперь работают"
    ]
  },
  {
    "time": [
      474.819356,
      476.55796
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
      476.55796,
      480.946314
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
      480.946314,
      483.96121
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
      483.96121,
      488.62046
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
      488.62046,
      493.700876
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
      493.700876,
      500.346147
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
      500.346147,
      508.954751
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
      508.954751,
      508.954751
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
      508.954751,
      508.954751
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
      508.954751,
      508.954751
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]