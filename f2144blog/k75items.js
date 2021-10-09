let objs = [
  {
    "time": [
      0.0,
      4.180229
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
      4.180229,
      7.693916
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
      7.693916,
      14.746458
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
      14.746458,
      19.731562
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
      19.731562,
      23.536916
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
      23.536916,
      32.515874
    ],
    "en": [
      "this configuration lab and the next troubleshooting lab would be the last labs in my series of labs for the CCNA"
    ],
    "ru": [
      "эта лаборатория настройки и следующая лаборатория по устранению неполадок будут последними в моей серии лабораторных работ по CCNA."
    ]
  },
  {
    "time": [
      32.515874,
      36.161603
    ],
    "en": [
      "I was expecting to finish them by the end of the year"
    ],
    "ru": [
      "Я ожидал закончить их к концу года"
    ]
  },
  {
    "time": [
      36.161603,
      40.799041
    ],
    "en": [
      "but with the approaching changes to a Cisco certifications coming in February next year"
    ],
    "ru": [
      "но с приближающимися изменениями в сертификации Cisco, которые появятся в феврале следующего года."
    ]
  },
  {
    "time": [
      40.799041,
      45.003456
    ],
    "en": [
      "I wanted to finish these soon so you have plenty of time to practice them"
    ],
    "ru": [
      "Я хотел закончить их поскорее, чтобы у вас было достаточно времени, чтобы попрактиковаться"
    ]
  },
  {
    "time": [
      45.003456,
      47.734665
    ],
    "en": [
      "and get your CCNA before the changes"
    ],
    "ru": [
      "и получите свой CCNA до внесения изменений"
    ]
  },
  {
    "time": [
      47.734665,
      53.126873
    ],
    "en": [
      "so I've managed to put out a video almost every day for over a month"
    ],
    "ru": [
      "так что мне удавалось выкладывать видео почти каждый день больше месяца"
    ]
  },
  {
    "time": [
      53.126873,
      54.948456
    ],
    "en": [
      "and finally we're at the end"
    ],
    "ru": [
      "и наконец мы подошли к концу"
    ]
  },
  {
    "time": [
      54.948456,
      57.319747
    ],
    "en": [
      "stay tuned for my next project"
    ],
    "ru": [
      "следите за моим следующим проектом"
    ]
  },
  {
    "time": [
      57.319747,
      59.376435
    ],
    "en": [
      "which I'm really excited about"
    ],
    "ru": [
      "что я действительно взволнован"
    ]
  },
  {
    "time": [
      59.376435,
      62.186226
    ],
    "en": [
      "anyway this isn't the last video"
    ],
    "ru": [
      "в любом случае это не последнее видео"
    ]
  },
  {
    "time": [
      62.186226,
      63.018288
    ],
    "en": [
      "the next one is"
    ],
    "ru": [
      "следующий"
    ]
  },
  {
    "time": [
      63.018288,
      64.13433
    ],
    "en": [
      "so let's get started"
    ],
    "ru": [
      "так что давайте начнем"
    ]
  },
  {
    "time": [
      64.13433,
      67.532976
    ],
    "en": [
      "first I want to mention just one thing about the lab"
    ],
    "ru": [
      "Сначала я хочу упомянуть только одну вещь о лаборатории"
    ]
  },
  {
    "time": [
      67.532976,
      71.844559
    ],
    "en": [
      "normally private IP addresses can't be routed over the Internet"
    ],
    "ru": [
      "обычно частные IP-адреса не могут быть маршрутизированы через Интернет"
    ]
  },
  {
    "time": [
      71.844559,
      76.900622
    ],
    "en": [
      "in my NAT labs I configured ACLs to simulate that"
    ],
    "ru": [
      "в моих лабораториях NAT я настроил ACL для имитации этого"
    ]
  },
  {
    "time": [
      76.900622,
      79.179038
    ],
    "en": [
      "however I haven't done so in this lab"
    ],
    "ru": [
      "однако я не делал этого в этой лаборатории"
    ]
  },
  {
    "time": [
      79.179038,
      84.070454
    ],
    "en": [
      "so you won't have to use NAT to send traffic over the Internet cloud which is here in the middle"
    ],
    "ru": [
      "поэтому вам не придется использовать NAT для отправки трафика через Интернет-облако, которое находится здесь посередине"
    ]
  },
  {
    "time": [
      84.070454,
      93.442079
    ],
    "en": [
      "in this review lab we will configure BGP OSPF EIGRP GRE and PPP"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим BGP OSPF EIGRP GRE и PPP"
    ]
  },
  {
    "time": [
      93.442079,
      96.745142
    ],
    "en": [
      "there are two enterprises"
    ],
    "ru": [
      "есть два предприятия"
    ]
  },
  {
    "time": [
      96.745142,
      99.089517
    ],
    "en": [
      "enterprise a and Enterprise B"
    ],
    "ru": [
      "предприятие А и предприятие Б"
    ]
  },
  {
    "time": [
      99.089517,
      102.192433
    ],
    "en": [
      "which are connecting to the same Internet service provider"
    ],
    "ru": [
      "которые подключаются к одному и тому же интернет-провайдеру"
    ]
  },
  {
    "time": [
      102.192433,
      105.504329
    ],
    "en": [
      "Enterprise a uses OSPF"
    ],
    "ru": [
      "Предприятие a использует OSPF"
    ]
  },
  {
    "time": [
      105.504329,
      109.220892
    ],
    "en": [
      "and wants to configure a GRE tunnel between two branches"
    ],
    "ru": [
      "и хочет настроить туннель GRE между двумя ветвями"
    ]
  },
  {
    "time": [
      109.220892,
      115.382475
    ],
    "en": [
      "Enterprise a also uses static routing over fibre Ethernet to connect to the internet"
    ],
    "ru": [
      "Enterprise A также использует статическую маршрутизацию по оптоволоконному кабелю Ethernet для подключения к Интернету."
    ]
  },
  {
    "time": [
      115.382475,
      117.227225
    ],
    "en": [
      "rather than BGP"
    ],
    "ru": [
      "а не BGP"
    ]
  },
  {
    "time": [
      117.227225,
      122.179725
    ],
    "en": [
      "Enterprise B uses AI GRP in its internal network"
    ],
    "ru": [
      "Предприятие B использует AI GRP во внутренней сети"
    ]
  },
  {
    "time": [
      122.179725,
      127.28212
    ],
    "en": [
      "connecting to the ISP with BGP over a PPP serial connection"
    ],
    "ru": [
      "подключение к интернет-провайдеру с помощью BGP через последовательное соединение PPP"
    ]
  },
  {
    "time": [
      127.28212,
      130.470058
    ],
    "en": [
      "let's configure Enterprise a first"
    ],
    "ru": [
      "давайте сначала настроим Enterprise"
    ]
  },
  {
    "time": [
      130.470058,
      133.168807
    ],
    "en": [
      "the first step is simple"
    ],
    "ru": [
      "первый шаг прост"
    ]
  },
  {
    "time": [
      133.168807,
      137.451453
    ],
    "en": [
      "that is to configure static roads to the internet on r1 and r2"
    ],
    "ru": [
      "то есть настроить статические дороги в Интернет на r1 и r2"
    ]
  },
  {
    "time": [
      137.451453,
      141.337911
    ],
    "en": [
      "often BGP isn't necessary"
    ],
    "ru": [
      "часто BGP не нужен"
    ]
  },
  {
    "time": [
      141.337911,
      144.356974
    ],
    "en": [
      "and static routes are sufficient for Internet connectivity"
    ],
    "ru": [
      "и статических маршрутов достаточно для подключения к Интернету"
    ]
  },
  {
    "time": [
      144.356974,
      149.260766
    ],
    "en": [
      "for enterprise B's connection to a simple static Reb would work"
    ],
    "ru": [
      "для подключения предприятия B к простому статическому Reb будет работать"
    ]
  },
  {
    "time": [
      149.260766,
      150.876953
    ],
    "en": [
      "but they want to use BGP"
    ],
    "ru": [
      "но они хотят использовать BGP"
    ]
  },
  {
    "time": [
      150.876953,
      156.56812
    ],
    "en": [
      "anyway let's configure the static route on r1 first for enterprise a"
    ],
    "ru": [
      "в любом случае давайте сначала настроим статический маршрут на r1 для предприятия"
    ]
  },
  {
    "time": [
      156.56812,
      160.914599
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      160.914599,
      167.418828
    ],
    "en": [
      "IP route 0.0.0.0 0.0.0.0"
    ],
    "ru": [
      "IP-маршрут 0.0.0.0 0.0.0.0"
    ]
  },
  {
    "time": [
      167.418828,
      172.305286
    ],
    "en": [
      "then i can specify the outgoing interface or the next hop IP address"
    ],
    "ru": [
      "тогда я могу указать исходящий интерфейс или IP-адрес следующего перехода"
    ]
  },
  {
    "time": [
      172.305286,
      173.690348
    ],
    "en": [
      "it doesn't really matter which"
    ],
    "ru": [
      "на самом деле не имеет значения, какой"
    ]
  },
  {
    "time": [
      173.690348,
      177.96814
    ],
    "en": [
      "i'll use the interface g 000"
    ],
    "ru": [
      "я буду использовать интерфейс g 000"
    ]
  },
  {
    "time": [
      177.96814,
      178.75393
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
      178.75393,
      181.720285
    ],
    "en": [
      "let's do the same on r2"
    ],
    "ru": [
      "давай сделаем то же самое на r2"
    ]
  },
  {
    "time": [
      181.720285,
      185.980222
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      185.980222,
      193.753305
    ],
    "en": [
      "IP route 0.0.0.0 0.0.0.0 G 000"
    ],
    "ru": [
      "IP-маршрут 0.0.0.0 0.0.0.0 G 000"
    ]
  },
  {
    "time": [
      193.753305,
      195.633555
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
      195.633555,
      201.000429
    ],
    "en": [
      "next let's configure a GRE tunnel from r1 to r2"
    ],
    "ru": [
      "Затем давайте настроим туннель GRE от r1 до r2"
    ]
  },
  {
    "time": [
      201.000429,
      204.433908
    ],
    "en": [
      "which is a logical tunnel interface"
    ],
    "ru": [
      "который является логическим туннельным интерфейсом"
    ]
  },
  {
    "time": [
      204.433908,
      207.549242
    ],
    "en": [
      "which will allow them to behave as if they are directly connected"
    ],
    "ru": [
      "что позволит им вести себя так, как если бы они были напрямую подключены"
    ]
  },
  {
    "time": [
      207.549242,
      209.486283
    ],
    "en": [
      "and share OSPF routes"
    ],
    "ru": [
      "и делиться маршрутами OSPF"
    ]
  },
  {
    "time": [
      209.486283,
      213.339637
    ],
    "en": [
      "even though traffic between them actually passes through the service provider network"
    ],
    "ru": [
      "даже если трафик между ними фактически проходит через сеть поставщика услуг"
    ]
  },
  {
    "time": [
      213.339637,
      216.589428
    ],
    "en": [
      "I'll start here on r2"
    ],
    "ru": [
      "Я начну здесь на r2"
    ]
  },
  {
    "time": [
      216.589428,
      218.706115
    ],
    "en": [
      "let's make the interface"
    ],
    "ru": [
      "давайте сделаем интерфейс"
    ]
  },
  {
    "time": [
      218.706115,
      221.722032
    ],
    "en": [
      "interface tunnel zero"
    ],
    "ru": [
      "нулевой интерфейсный туннель"
    ]
  },
  {
    "time": [
      221.722032,
      226.208282
    ],
    "en": [
      "let's configure the source and destination addresses"
    ],
    "ru": [
      "настроим адреса отправителя и получателя"
    ]
  },
  {
    "time": [
      226.208282,
      231.741219
    ],
    "en": [
      "these are the actual physical interface addresses on r2 and r1"
    ],
    "ru": [
      "это фактические адреса физических интерфейсов на r2 и r1"
    ]
  },
  {
    "time": [
      231.741219,
      236.032323
    ],
    "en": [
      "tunnel source G 000"
    ],
    "ru": [
      "туннельный источник G 000"
    ]
  },
  {
    "time": [
      236.032323,
      242.710802
    ],
    "en": [
      "tunnel destination 203 o y1 and 3.2"
    ],
    "ru": [
      "пункт назначения туннеля 203 o y1 и 3.2"
    ]
  },
  {
    "time": [
      242.710802,
      247.450948
    ],
    "en": [
      "which is the IP address of our ones G 000 interface"
    ],
    "ru": [
      "который является IP-адресом нашего интерфейса G 000"
    ]
  },
  {
    "time": [
      247.450948,
      254.954968
    ],
    "en": [
      "now let's give it an IP address from the 192.168.12.0/30 network"
    ],
    "ru": [
      "теперь давайте дадим ему IP-адрес из сети 192.168.12.0/30"
    ]
  },
  {
    "time": [
      254.954968,
      256.642823
    ],
    "en": [
      "as per the instructions"
    ],
    "ru": [
      "согласно инструкции"
    ]
  },
  {
    "time": [
      256.642823,
      265.452052
    ],
    "en": [
      "IP address 192.168.12.2 255.255.255.252"
    ],
    "ru": [
      "IP-адрес 192.168.12.2 255.255.255.252"
    ]
  },
  {
    "time": [
      265.452052,
      267.571427
    ],
    "en": [
      "okay that's all"
    ],
    "ru": [
      "хорошо это все"
    ]
  },
  {
    "time": [
      267.571427,
      271.693843
    ],
    "en": [
      "exit now let's configure our one"
    ],
    "ru": [
      "выход сейчас давайте настроим наш"
    ]
  },
  {
    "time": [
      271.693843,
      277.280739
    ],
    "en": [
      "side interface tunnel zero"
    ],
    "ru": [
      "боковой интерфейсный туннель ноль"
    ]
  },
  {
    "time": [
      277.280739,
      281.344134
    ],
    "en": [
      "tunnel source G zero zero zero"
    ],
    "ru": [
      "туннельный источник G ноль ноль ноль"
    ]
  },
  {
    "time": [
      281.344134,
      286.718426
    ],
    "en": [
      "tunnel destination 2.0.3.0 1.0.3.6"
    ],
    "ru": [
      "пункт назначения туннеля 2.0.3.0 1.0.3.6"
    ]
  },
  {
    "time": [
      286.718426,
      291.922739
    ],
    "en": [
      "which is the IP address of r2 s G 000 interface"
    ],
    "ru": [
      "который является IP-адресом интерфейса r2 s G 000"
    ]
  },
  {
    "time": [
      291.922739,
      300.907718
    ],
    "en": [
      "IP address 192.168.1.1 255.255.255.0"
    ],
    "ru": [
      "IP-адрес 192.168.1.1 255.255.255.0"
    ]
  },
  {
    "time": [
      300.907718,
      301.826842
    ],
    "en": [
      "it's it"
    ],
    "ru": [
      "это его"
    ]
  },
  {
    "time": [
      301.826842,
      306.742112
    ],
    "en": [
      "okay let's try to ping from one end of the tunnel to the other"
    ],
    "ru": [
      "хорошо, давайте попробуем пинговать от одного конца туннеля до другого"
    ]
  },
  {
    "time": [
      306.742112,
      312.258424
    ],
    "en": [
      "do ping 192.168 12.2"
    ],
    "ru": [
      "сделать пинг 192.168 12.2"
    ]
  },
  {
    "time": [
      312.258424,
      322.754924
    ],
    "en": [
      "okay we can ping from one side of the tunnel to the other"
    ],
    "ru": [
      "хорошо, мы можем пинговать с одной стороны туннеля на другую"
    ]
  },
  {
    "time": [
      322.754924,
      328.745737
    ],
    "en": [
      "finally let's configure OSPF on r1 and r2"
    ],
    "ru": [
      "наконец, давайте настроим OSPF на r1 и r2"
    ]
  },
  {
    "time": [
      328.745737,
      331.55207
    ],
    "en": [
      "I'll start here on our one"
    ],
    "ru": [
      "Я начну с нашего"
    ]
  },
  {
    "time": [
      331.55207,
      334.043195
    ],
    "en": [
      "router OSPF one"
    ],
    "ru": [
      "роутер OSPF one"
    ]
  },
  {
    "time": [
      334.043195,
      338.554216
    ],
    "en": [
      "remember the OSPF process ID is locally significant"
    ],
    "ru": [
      "помните, что идентификатор процесса OSPF имеет локальное значение"
    ]
  },
  {
    "time": [
      338.554216,
      341.008257
    ],
    "en": [
      "and doesn't have to match between routers"
    ],
    "ru": [
      "и не обязательно совпадать между маршрутизаторами"
    ]
  },
  {
    "time": [
      341.008257,
      348.741799
    ],
    "en": [
      "we should activate OSPF on the g 00 and tunnel zero interfaces of r1 and r2"
    ],
    "ru": [
      "мы должны активировать OSPF на интерфейсах g 00 и туннельного нуля r1 и r2"
    ]
  },
  {
    "time": [
      348.741799,
      353.65457
    ],
    "en": [
      "so here on r1"
    ],
    "ru": [
      "так что здесь на r1"
    ]
  },
  {
    "time": [
      353.65457,
      361.068632
    ],
    "en": [
      "network 192.168.1.0 0.0.0.255 area 0"
    ],
    "ru": [
      "сеть 192.168.1.0 0.0.0.255 область 0"
    ]
  },
  {
    "time": [
      361.068632,
      363.043528
    ],
    "en": [
      "that's G 00"
    ],
    "ru": [
      "это G 00"
    ]
  },
  {
    "time": [
      363.043528,
      370.731382
    ],
    "en": [
      "and network 192.168.12.0 0.0.0.3 area 0"
    ],
    "ru": [
      "и сеть 192.168.12.0 0.0.0.3 область 0"
    ]
  },
  {
    "time": [
      370.731382,
      372.257716
    ],
    "en": [
      "that's tunnel zero"
    ],
    "ru": [
      "это нулевой туннель"
    ]
  },
  {
    "time": [
      372.257716,
      374.947007
    ],
    "en": [
      "now let's configure r2"
    ],
    "ru": [
      "теперь давайте настроим r2"
    ]
  },
  {
    "time": [
      374.947007,
      377.751924
    ],
    "en": [
      "and see if they exchange OSPF routes"
    ],
    "ru": [
      "и посмотреть, обмениваются ли они маршрутами OSPF"
    ]
  },
  {
    "time": [
      377.751924,
      381.515882
    ],
    "en": [
      "router OSPF one"
    ],
    "ru": [
      "роутер OSPF one"
    ]
  },
  {
    "time": [
      381.515882,
      388.959174
    ],
    "en": [
      "network 192.168.0.0 0.0.0.255 area zero"
    ],
    "ru": [
      "сеть 192.168.0.0 0.0.0.255 нулевая зона"
    ]
  },
  {
    "time": [
      388.959174,
      396.975528
    ],
    "en": [
      "network 192.168.12.0 0.0.0.3 area zero"
    ],
    "ru": [
      "сеть 192.168.12.0 0.0.0.3 нулевая зона"
    ]
  },
  {
    "time": [
      396.975528,
      401.467549
    ],
    "en": [
      "that's all that's necessary for a simple OSPF configuration"
    ],
    "ru": [
      "это все, что нужно для простой конфигурации OSPF"
    ]
  },
  {
    "time": [
      401.467549,
      406.384319
    ],
    "en": [
      "okay let's wait for 10 seconds or so for them to become neighbors and exchange routes"
    ],
    "ru": [
      "хорошо, подождем секунд 10 или около того, чтобы они стали соседями и обменялись маршрутами"
    ]
  },
  {
    "time": [
      406.384319,
      409.027444
    ],
    "en": [
      "then I'll check the route table"
    ],
    "ru": [
      "тогда я проверю таблицу маршрутов"
    ]
  },
  {
    "time": [
      409.027444,
      418.698631
    ],
    "en": [
      "okay let's check that routing table"
    ],
    "ru": [
      "хорошо, давайте проверим эту таблицу маршрутизации"
    ]
  },
  {
    "time": [
      418.698631,
      422.212756
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      422.212756,
      431.228819
    ],
    "en": [
      "there's the 192.168.1.0 / 24 network"
    ],
    "ru": [
      "есть сеть 192.168.1.0 / 24"
    ]
  },
  {
    "time": [
      431.228819,
      433.378714
    ],
    "en": [
      "which are two learned from our one"
    ],
    "ru": [
      "которые два извлечены из нашего"
    ]
  },
  {
    "time": [
      433.378714,
      436.870505
    ],
    "en": [
      "do show IP ospf neighbor"
    ],
    "ru": [
      "показывать IP-адрес соседа ospf"
    ]
  },
  {
    "time": [
      436.870505,
      439.802859
    ],
    "en": [
      "there's our one"
    ],
    "ru": [
      "вот наш"
    ]
  },
  {
    "time": [
      439.802859,
      442.616589
    ],
    "en": [
      "and the neighbor state is full as expected"
    ],
    "ru": [
      "и соседнее состояние заполнено, как ожидалось"
    ]
  },
  {
    "time": [
      442.616589,
      447.864255
    ],
    "en": [
      "okay that's all for the configuration of Enterprise a"
    ],
    "ru": [
      "хорошо, это все, что касается конфигурации Enterprise a"
    ]
  },
  {
    "time": [
      447.864255,
      450.057297
    ],
    "en": [
      "let's go to enterprise be"
    ],
    "ru": [
      "пойдем на предприятие быть"
    ]
  },
  {
    "time": [
      450.057297,
      456.117192
    ],
    "en": [
      "the first requirement is to configure PPP with chap authentication"
    ],
    "ru": [
      "первое требование - настроить PPP с аутентификацией chap"
    ]
  },
  {
    "time": [
      456.117192,
      457.822338
    ],
    "en": [
      "to connect to the ISP"
    ],
    "ru": [
      "подключиться к провайдеру"
    ]
  },
  {
    "time": [
      457.822338,
      460.996025
    ],
    "en": [
      "the ISP side is already configured"
    ],
    "ru": [
      "сторона ISP уже настроена"
    ]
  },
  {
    "time": [
      460.996025,
      462.654941
    ],
    "en": [
      "so let's go on our three"
    ],
    "ru": [
      "так что давайте продолжим наши три"
    ]
  },
  {
    "time": [
      462.654941,
      466.640399
    ],
    "en": [
      "enable"
    ],
    "ru": [
      "включить"
    ]
  },
  {
    "time": [
      466.640399,
      471.146628
    ],
    "en": [
      "first let's just confirm that we can't ping the ISP yet"
    ],
    "ru": [
      "сначала давайте просто подтвердим, что мы еще не можем проверить связь с интернет-провайдером"
    ]
  },
  {
    "time": [
      471.146628,
      475.703024
    ],
    "en": [
      "ping two oh three oh one one three nine"
    ],
    "ru": [
      "пинг два ой три ой один один три девять"
    ]
  },
  {
    "time": [
      475.703024,
      482.326024
    ],
    "en": [
      "okay it doesn't work"
    ],
    "ru": [
      "хорошо, это не работает"
    ]
  },
  {
    "time": [
      482.326024,
      484.003919
    ],
    "en": [
      "coffee tea"
    ],
    "ru": [
      "кофе чай"
    ]
  },
  {
    "time": [
      484.003919,
      487.146169
    ],
    "en": [
      "we're going to use chap authentication"
    ],
    "ru": [
      "мы собираемся использовать аутентификацию парня"
    ]
  },
  {
    "time": [
      487.146169,
      491.023669
    ],
    "en": [
      "so for that we need to configure a user account here on r3"
    ],
    "ru": [
      "поэтому для этого нам нужно настроить учетную запись пользователя здесь, на r3"
    ]
  },
  {
    "time": [
      491.023669,
      494.208002
    ],
    "en": [
      "which uses the hostname of the remote host"
    ],
    "ru": [
      "который использует имя удаленного хоста"
    ]
  },
  {
    "time": [
      494.208002,
      496.229544
    ],
    "en": [
      "in this case ISP"
    ],
    "ru": [
      "в этом случае интернет-провайдер"
    ]
  },
  {
    "time": [
      496.229544,
      499.770398
    ],
    "en": [
      "and a password which is the same between the two routers"
    ],
    "ru": [
      "и пароль, который одинаков для двух маршрутизаторов"
    ]
  },
  {
    "time": [
      499.770398,
      502.415939
    ],
    "en": [
      "in this case CCNA"
    ],
    "ru": [
      "в этом случае CCNA"
    ]
  },
  {
    "time": [
      502.415939,
      508.795127
    ],
    "en": [
      "so user name is P password CCNA"
    ],
    "ru": [
      "поэтому имя пользователя - P пароль CCNA"
    ]
  },
  {
    "time": [
      508.795127,
      512.301856
    ],
    "en": [
      "now let's configure the interface"
    ],
    "ru": [
      "теперь настроим интерфейс"
    ]
  },
  {
    "time": [
      512.301856,
      516.79671
    ],
    "en": [
      "interface s 0 0 0"
    ],
    "ru": [
      "интерфейс s 0 0 0"
    ]
  },
  {
    "time": [
      516.79671,
      519.395377
    ],
    "en": [
      "I'm going to shut down the interface as I configure it"
    ],
    "ru": [
      "Я собираюсь закрыть интерфейс, пока настраиваю его."
    ]
  },
  {
    "time": [
      519.395377,
      520.944106
    ],
    "en": [
      "then enable it when I'm done"
    ],
    "ru": [
      "затем включите его, когда я закончу"
    ]
  },
  {
    "time": [
      520.944106,
      523.981335
    ],
    "en": [
      "that can help the interface come up quicker"
    ],
    "ru": [
      "это может помочь быстрее найти интерфейс"
    ]
  },
  {
    "time": [
      523.981335,
      525.837585
    ],
    "en": [
      "shutdown"
    ],
    "ru": [
      "неисправность"
    ]
  },
  {
    "time": [
      525.837585,
      529.471647
    ],
    "en": [
      "okay first set the encapsulation"
    ],
    "ru": [
      "хорошо, сначала установите инкапсуляцию"
    ]
  },
  {
    "time": [
      529.471647,
      532.606043
    ],
    "en": [
      "encapsulation PPP"
    ],
    "ru": [
      "инкапсуляция PPP"
    ]
  },
  {
    "time": [
      532.606043,
      535.12871
    ],
    "en": [
      "then set the authentication"
    ],
    "ru": [
      "затем установите аутентификацию"
    ]
  },
  {
    "time": [
      535.12871,
      538.345814
    ],
    "en": [
      "PPP authentication chap"
    ],
    "ru": [
      "Глава об аутентификации PPP"
    ]
  },
  {
    "time": [
      538.345814,
      541.160189
    ],
    "en": [
      "that's all there is to it"
    ],
    "ru": [
      "это все, что нужно для этого"
    ]
  },
  {
    "time": [
      541.160189,
      542.252001
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      542.252001,
      545.299855
    ],
    "en": [
      "okay let's wait a few seconds"
    ],
    "ru": [
      "хорошо, подождем несколько секунд"
    ]
  },
  {
    "time": [
      545.299855,
      551.841939
    ],
    "en": [
      "okay and let's try a ping"
    ],
    "ru": [
      "хорошо и давай попробуем пинг"
    ]
  },
  {
    "time": [
      551.841939,
      557.350626
    ],
    "en": [
      "do ping 2.0.3.0 1.0.3.9"
    ],
    "ru": [
      "сделать пинг 2.0.3.0 1.0.3.9"
    ]
  },
  {
    "time": [
      557.350626,
      564.332209
    ],
    "en": [
      "okay now the ping works"
    ],
    "ru": [
      "хорошо, теперь пинг работает"
    ]
  },
  {
    "time": [
      564.332209,
      570.556334
    ],
    "en": [
      "next let's configure a EIGRP on r3 and r4"
    ],
    "ru": [
      "Затем давайте настроим EIGRP на r3 и r4"
    ]
  },
  {
    "time": [
      570.556334,
      572.913522
    ],
    "en": [
      "I'll start here on r3"
    ],
    "ru": [
      "Я начну здесь на r3"
    ]
  },
  {
    "time": [
      572.913522,
      576.459563
    ],
    "en": [
      "router EIGRP 100"
    ],
    "ru": [
      "роутер EIGRP 100"
    ]
  },
  {
    "time": [
      576.459563,
      583.361688
    ],
    "en": [
      "remember the EIG our pas number has to be the same on routers for them to become a EIGRP neighbors"
    ],
    "ru": [
      "помните, что EIG наш номер pas должен быть одинаковым на маршрутизаторах, чтобы они стали соседями EIGRP"
    ]
  },
  {
    "time": [
      583.361688,
      586.782188
    ],
    "en": [
      "now let's advertise these networks"
    ],
    "ru": [
      "теперь давайте прорекламируем эти сети"
    ]
  },
  {
    "time": [
      586.782188,
      593.713834
    ],
    "en": [
      "network 2.0.3.0 1.3.0.8 0.0.0.3"
    ],
    "ru": [
      "сеть 2.0.3.0 1.3.0.8 0.0.0.3"
    ]
  },
  {
    "time": [
      593.713834,
      602.397855
    ],
    "en": [
      "network 192.168.3.0 0.0.0.255"
    ],
    "ru": [
      "сеть 192.168.3.0 0.0.0.255"
    ]
  },
  {
    "time": [
      602.397855,
      608.247459
    ],
    "en": [
      "network 192.168.30.0 0.0.0.255"
    ],
    "ru": [
      "сеть 192.168.30.0 0.0.0.255"
    ]
  },
  {
    "time": [
      608.247459,
      613.748167
    ],
    "en": [
      "let's make our threes s 0 0 0 interface passive"
    ],
    "ru": [
      "сделаем наши тройки s 0 0 0 интерфейс пассивными"
    ]
  },
  {
    "time": [
      613.748167,
      617.793209
    ],
    "en": [
      "since no EIGRP neighbors are connected to that interface"
    ],
    "ru": [
      "поскольку к этому интерфейсу не подключены соседи EIGRP"
    ]
  },
  {
    "time": [
      617.793209,
      621.63625
    ],
    "en": [
      "passive interface s0 0 0"
    ],
    "ru": [
      "пассивный интерфейс s0 0 0"
    ]
  },
  {
    "time": [
      621.63625,
      624.524521
    ],
    "en": [
      "now let's configure our for"
    ],
    "ru": [
      "теперь давайте настроим наш для"
    ]
  },
  {
    "time": [
      624.524521,
      632.749167
    ],
    "en": [
      "enable call for t router EIGRP 100"
    ],
    "ru": [
      "включить вызов для маршрутизатора EIGRP 100"
    ]
  },
  {
    "time": [
      632.749167,
      639.904188
    ],
    "en": [
      "network 192.168.34.0 0.0.0.255"
    ],
    "ru": [
      "сеть 192.168.34.0 0.0.0.255"
    ]
  },
  {
    "time": [
      639.904188,
      645.939313
    ],
    "en": [
      "network 192.168.4.0 0.0.0.255"
    ],
    "ru": [
      "сеть 192.168.4.0 0.0.0.255"
    ]
  },
  {
    "time": [
      645.939313,
      651.988292
    ],
    "en": [
      "ok let's check if r 4 has learned EIGRP routes from r3"
    ],
    "ru": [
      "хорошо, давайте проверим, узнал ли r 4 маршруты EIGRP от r3"
    ]
  },
  {
    "time": [
      651.988292,
      654.72298
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      654.72298,
      662.410708
    ],
    "en": [
      "there we go 192.168.3.0 r3 internal network"
    ],
    "ru": [
      "вот и 192.168.3.0 r3 внутренняя сеть"
    ]
  },
  {
    "time": [
      662.410708,
      668.841812
    ],
    "en": [
      "and 2.0.3.0 1.0.3.8 the internet segment from r3 to ISP"
    ],
    "ru": [
      "и 2.0.3.0 1.0.3.8 интернет-сегмент от r3 до ISP"
    ]
  },
  {
    "time": [
      668.841812,
      673.301478
    ],
    "en": [
      "let's try a ping from pc 4 to pc 3"
    ],
    "ru": [
      "давайте попробуем пинг с пк 4 на пк 3"
    ]
  },
  {
    "time": [
      673.301478,
      678.793978
    ],
    "en": [
      "now that r4 knows the route to 192.168.3.0"
    ],
    "ru": [
      "теперь, когда r4 знает путь к 192.168.3.0"
    ]
  },
  {
    "time": [
      678.793978,
      683.789228
    ],
    "en": [
      "ping 192.168.3.100"
    ],
    "ru": [
      "пинг 192.168.3.100"
    ]
  },
  {
    "time": [
      683.789228,
      690.328041
    ],
    "en": [
      "okay the ping works"
    ],
    "ru": [
      "хорошо, пинг работает"
    ]
  },
  {
    "time": [
      690.328041,
      697.471937
    ],
    "en": [
      "finally let's configure ebgp on r3 to connect to the internet"
    ],
    "ru": [
      "наконец, давайте настроим ebgp на r3 для подключения к Интернету"
    ]
  },
  {
    "time": [
      697.471937,
      701.234041
    ],
    "en": [
      "rather than the static road method we used on r1 and r2"
    ],
    "ru": [
      "вместо метода статической дороги, который мы использовали на r1 и r2"
    ]
  },
  {
    "time": [
      701.234041,
      708.61452
    ],
    "en": [
      "note that Enterprise B uses BGP a s 65,000"
    ],
    "ru": [
      "обратите внимание, что предприятие B использует BGP на 65 000"
    ]
  },
  {
    "time": [
      708.61452,
      711.696333
    ],
    "en": [
      "and the ISP uses 65,001"
    ],
    "ru": [
      "а интернет-провайдер использует 65 001"
    ]
  },
  {
    "time": [
      711.696333,
      713.435228
    ],
    "en": [
      "okay let's get started"
    ],
    "ru": [
      "хорошо, давай начнем"
    ]
  },
  {
    "time": [
      713.435228,
      720.086312
    ],
    "en": [
      "router bgp 65,000"
    ],
    "ru": [
      "маршрутизатор bgp 65,000"
    ]
  },
  {
    "time": [
      720.086312,
      723.137437
    ],
    "en": [
      "now let's specify the neighbor"
    ],
    "ru": [
      "теперь давайте укажем соседа"
    ]
  },
  {
    "time": [
      723.137437,
      729.770478
    ],
    "en": [
      "neighbor 2.0.3.0 1.0.3.9 remote a s"
    ],
    "ru": [
      "сосед 2.0.3.0 1.0.3.9 удаленный а"
    ]
  },
  {
    "time": [
      729.770478,
      731.731269
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
      729.770478,
      731.731269
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
      731.731269,
      735.318644
    ],
    "en": [
      "also let's advertise our internal networks"
    ],
    "ru": [
      "также давайте прорекламируем наши внутренние сети"
    ]
  },
  {
    "time": [
      735.318644,
      743.329686
    ],
    "en": [
      "network 192.168.3.0 mask 255.255.255.0"
    ],
    "ru": [
      "сеть 192.168.3.0 маска 255.255.255.0"
    ]
  },
  {
    "time": [
      743.329686,
      748.427894
    ],
    "en": [
      "remember that bgp uses a standard network mask"
    ],
    "ru": [
      "помните, что bgp использует стандартную сетевую маску"
    ]
  },
  {
    "time": [
      748.427894,
      749.831852
    ],
    "en": [
      "not a wildcard mask"
    ],
    "ru": [
      "не подстановочная маска"
    ]
  },
  {
    "time": [
      749.831852,
      758.299706
    ],
    "en": [
      "network 192.168.30.0 mask 255.255.255.0"
    ],
    "ru": [
      "сеть 192.168.30.0 маска 255.255.255.0"
    ]
  },
  {
    "time": [
      758.299706,
      766.809665
    ],
    "en": [
      "network 192.168.4.0 mask 255.255.255.0"
    ],
    "ru": [
      "сеть 192.168.4.0 маска 255.255.255.0"
    ]
  },
  {
    "time": [
      766.809665,
      770.023186
    ],
    "en": [
      "okay that's all for BGP"
    ],
    "ru": [
      "хорошо, это все для BGP"
    ]
  },
  {
    "time": [
      770.023186,
      776.803456
    ],
    "en": [
      "now step four asks why PC one can't ping PC for"
    ],
    "ru": [
      "Теперь на четвертом шаге спрашивается, почему ПК нельзя пинговать"
    ]
  },
  {
    "time": [
      776.803456,
      780.330769
    ],
    "en": [
      "let's confirm and try that ping from pc1"
    ],
    "ru": [
      "давайте подтвердим и попробуем этот пинг от pc1"
    ]
  },
  {
    "time": [
      780.330769,
      787.242769
    ],
    "en": [
      "ping 192.168.4.100"
    ],
    "ru": [
      "пинг 192.168.4.100"
    ]
  },
  {
    "time": [
      787.242769,
      795.267144
    ],
    "en": [
      "indeed the ping fails"
    ],
    "ru": [
      "действительно пинг не работает"
    ]
  },
  {
    "time": [
      795.267144,
      800.142102
    ],
    "en": [
      "we're given a hint to look on our four so let's go on our four"
    ],
    "ru": [
      "нам подсказали взглянуть на нашу четверку, так что давайте перейдем к нашей четверке"
    ]
  },
  {
    "time": [
      800.142102,
      804.171497
    ],
    "en": [
      "what do you think would be the most obvious issue"
    ],
    "ru": [
      "как вы думаете, что было бы наиболее очевидной проблемой"
    ]
  },
  {
    "time": [
      804.171497,
      808.186185
    ],
    "en": [
      "how about no route to PC one"
    ],
    "ru": [
      "как насчет пути к ПК один"
    ]
  },
  {
    "time": [
      808.186185,
      810.959914
    ],
    "en": [
      "do show IP route"
    ],
    "ru": [
      "показывать IP-маршрут"
    ]
  },
  {
    "time": [
      810.959914,
      819.452247
    ],
    "en": [
      "as you can see our four has no route to the 192.168.1.0 slash 24 network"
    ],
    "ru": [
      "как вы можете видеть, у нашей четверки нет маршрута к сети 192.168.1.0 slash 24"
    ]
  },
  {
    "time": [
      819.452247,
      822.622227
    ],
    "en": [
      "or any other network beyond our three"
    ],
    "ru": [
      "или любой другой сети за пределами наших трех"
    ]
  },
  {
    "time": [
      822.622227,
      830.11381
    ],
    "en": [
      "usually I'd configure ibgp or route redistribution into EIGRP"
    ],
    "ru": [
      "обычно я настраивал ibgp или перераспределение маршрутов в EIGRP"
    ]
  },
  {
    "time": [
      830.11381,
      832.18656
    ],
    "en": [
      "but those are more advanced topics"
    ],
    "ru": [
      "но это более сложные темы"
    ]
  },
  {
    "time": [
      832.18656,
      835.311268
    ],
    "en": [
      "let's use the simplest solution"
    ],
    "ru": [
      "давайте воспользуемся самым простым решением"
    ]
  },
  {
    "time": [
      835.311268,
      837.911435
    ],
    "en": [
      "a static route pointing to r3"
    ],
    "ru": [
      "статический маршрут, указывающий на r3"
    ]
  },
  {
    "time": [
      837.911435,
      850.03658
    ],
    "en": [
      "exit IP route 0.0.0.0 0.0.0.0 192.168.34.1"
    ],
    "ru": [
      "выход из IP-маршрута 0.0.0.0 0.0.0.0 192.168.34.1"
    ]
  },
  {
    "time": [
      850.03658,
      852.597185
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
      852.597185,
      855.210289
    ],
    "en": [
      "let's try that ping again from pc1"
    ],
    "ru": [
      "давайте попробуем этот пинг еще раз с pc1"
    ]
  },
  {
    "time": [
      855.210289,
      860.666185
    ],
    "en": [
      "ping 192.168.4.100"
    ],
    "ru": [
      "пинг 192.168.4.100"
    ]
  },
  {
    "time": [
      860.666185,
      872.834289
    ],
    "en": [
      "okay the pings work now"
    ],
    "ru": [
      "хорошо, пинги теперь работают"
    ]
  },
  {
    "time": [
      872.834289,
      880.896705
    ],
    "en": [
      "in this lab we configured BGP OSPF EIGRP GRE and PPP"
    ],
    "ru": [
      "в этой лабораторной работе мы настроили BGP OSPF EIGRP GRE и PPP"
    ]
  },
  {
    "time": [
      880.896705,
      884.82233
    ],
    "en": [
      "some of the major topics of the icnd2 exam"
    ],
    "ru": [
      "некоторые из основных тем экзамена icnd2"
    ]
  },
  {
    "time": [
      884.82233,
      886.647934
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
      886.647934,
      894.804142
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
      894.804142,
      902.520392
    ],
    "en": [
      "there is only one more lab left in my CCNA series but please subscribe to catch my next project"
    ],
    "ru": [
      "В моей серии CCNA осталась только одна лаборатория, но, пожалуйста, подпишитесь, чтобы увидеть мой следующий проект"
    ]
  },
  {
    "time": [
      902.520392,
      908.283371
    ],
    "en": [
      "if you want to support my channel I accept cryptocurrency donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в криптовалюте по адресам в описании"
    ]
  },
  {
    "time": [
      908.283371,
      917.541642
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
      917.541642,
      917.541642
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
      917.541642,
      917.541642
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
      917.541642,
      917.541642
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]