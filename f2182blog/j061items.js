let objs = [
  {
    "time": [
      0.72,
      6.96
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is&nbsp; a free, complete course for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это & nbsp; бесплатный полный курс CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      6.96,
      11.6
    ],
    "en": [
      "If you like these videos, please subscribe&nbsp; to follow along with the series. Also,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нравятся эти видео, подпишитесь на & nbsp; следовать вместе с серией. Кроме того, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      11.6,
      16.48
    ],
    "en": [
      "please like and leave a comment, and share the&nbsp; video to help spread this free series of videos.&nbsp;&nbsp;"
    ],
    "ru": [
      "пожалуйста, поставьте лайк и оставьте комментарий, а также поделитесь & nbsp; видео, которое поможет распространить эту бесплатную серию видеороликов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      16.48,
      21.04
    ],
    "en": [
      "Thanks for your help. Also, remember to&nbsp; sign up via the link in the description&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо за вашу помощь. Также не забудьте & nbsp; зарегистрируйтесь по ссылке в описании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      21.04,
      27.04
    ],
    "en": [
      "to get all of the lab files for this course, so&nbsp; you can try it out yourself in packet tracer."
    ],
    "ru": [
      "чтобы получить все лабораторные файлы для этого курса, поэтому & nbsp; вы можете попробовать это самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      27.04,
      32.48
    ],
    "en": [
      "If you want more labs like these, I highly&nbsp; recommend picking up Boson’s NetSim for the CCNA,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я очень & nbsp; рекомендую использовать Boson's NetSim для CCNA, & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      32.48,
      35.76
    ],
    "en": [
      "click the link in the video&nbsp; description to check it out.&nbsp;&nbsp;"
    ],
    "ru": [
      "щелкните ссылку в видео & nbsp; описание, чтобы проверить это. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      35.76,
      40.56
    ],
    "en": [
      "It’s a network simulator like packet tracer, but&nbsp; it’s even better, and it includes all of these&nbsp;&nbsp;"
    ],
    "ru": [
      "Это сетевой симулятор, похожий на трассировщик пакетов, но & nbsp; он даже лучше, и он включает в себя все эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      40.56,
      45.12
    ],
    "en": [
      "guided labs to not only help you get hands-on&nbsp; practice configuring and troubleshooting,&nbsp;&nbsp;"
    ],
    "ru": [
      "проводимые лабораторные работы, которые не только помогут вам на практике & nbsp; попрактикуйтесь в настройке и устранении неполадок, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      45.12,
      50.56
    ],
    "en": [
      "but also deepen your understanding of the exam&nbsp; topics. I used it myself when studying for my&nbsp;&nbsp;"
    ],
    "ru": [
      "но также углубить свое понимание экзамена & nbsp; темы. Я сам использовал его, когда учился на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      50.56,
      55.12
    ],
    "en": [
      "certifications, so I feel confident&nbsp; about recommending it to all of you.&nbsp;&nbsp;"
    ],
    "ru": [
      "сертификаты, поэтому я чувствую себя уверенно & nbsp; о том, чтобы рекомендовать его всем вам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      55.12,
      61.52
    ],
    "en": [
      "If you want to get your own copy of NetSim,&nbsp; please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      61.52,
      65.92
    ],
    "en": [
      "In today’s video we’ll try a few&nbsp; methods of configuring IPv6 addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "В сегодняшнем видео мы попробуем несколько & nbsp; методы настройки адресов IPv6, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      65.92,
      71.2
    ],
    "en": [
      "as well as IPv6 static routes. We&nbsp; haven’t covered IPv6 static routes yet,&nbsp;&nbsp;"
    ],
    "ru": [
      "а также статические маршруты IPv6. Мы & NBSP; еще не охвачены статические маршруты IPv6, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      71.2,
      76.4
    ],
    "en": [
      "but using the context-sensitive help&nbsp; in IOS you’ll be able to figure it out.&nbsp;&nbsp;"
    ],
    "ru": [
      "но используя контекстную справку & nbsp; в iOS вы сможете в этом разобраться. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      76.4,
      83.03999999999999
    ],
    "en": [
      "Step 1 says to use EUI-64 to configure the&nbsp; appropriate IPv6 address on the G0/1 interface of&nbsp;&nbsp;"
    ],
    "ru": [
      "На шаге 1 предлагается использовать EUI-64 для настройки & nbsp; соответствующий IPv6-адрес на интерфейсе G0 / 1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      83.03999999999999,
      88.64
    ],
    "en": [
      "R1 and R2. But before actually configuring&nbsp; the addresses, we should examine the MAC&nbsp;&nbsp;"
    ],
    "ru": [
      "R1 и R2. Но прежде чем приступить к настройке & nbsp; адреса, мы должны проверить MAC & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      88.64,
      95.28
    ],
    "en": [
      "address of each interface and calculate the&nbsp; EUI-64 interface ID that will be configured."
    ],
    "ru": [
      "адрес каждого интерфейса и вычислить & nbsp; Идентификатор интерфейса EUI-64, который будет настроен."
    ]
  },
  {
    "time": [
      95.28,
      103.68
    ],
    "en": [
      "So let’s do that on R1 first. ENABLE. To&nbsp; check the MAC address of an interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "Так что давайте сначала сделаем это на R1. ВКЛЮЧИТЬ. Чтобы & nbsp; проверьте MAC-адрес интерфейса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      103.68,
      110.96000000000001
    ],
    "en": [
      "use SHOW INTERFACES G0/1. Up here near the&nbsp; top of the output you can see the MAC address.&nbsp;&nbsp;"
    ],
    "ru": [
      "используйте SHOW INTERFACES G0 / 1. Здесь, рядом с & nbsp; в верхней части вывода вы можете увидеть MAC-адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      110.96000000000001,
      117.75999999999999
    ],
    "en": [
      "So, let’s calculate the EUI-64 interface ID,&nbsp; and the IPv6 address that will be configured.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте вычислим идентификатор интерфейса EUI-64, & nbsp; и IPv6-адрес, который будет настроен. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      117.75999999999999,
      122.32
    ],
    "en": [
      "In this document I’ve written out&nbsp; the process. Here’s the MAC address.&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом документе я написал & nbsp; процесс. Вот MAC-адрес. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      122.32,
      129.04
    ],
    "en": [
      "Split it in half, and then insert FFFE in&nbsp; the middle. Finally, invert the 7th bit,&nbsp;&nbsp;"
    ],
    "ru": [
      "Разделите его пополам, а затем вставьте FFFE в & nbsp; середина. Наконец, инвертируйте 7-й бит, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      129.04,
      136.07999999999998
    ],
    "en": [
      "which makes the 0 a 2. That’s the EUI-64&nbsp; interface ID. Add the network prefix, and&nbsp;&nbsp;"
    ],
    "ru": [
      "что делает 0 равным 2. Это EUI-64 & nbsp; ID интерфейса. Добавьте префикс сети и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      136.07999999999998,
      146.24
    ],
    "en": [
      "this is the IPv6 address that will be configured&nbsp; on R1’s G0/1 interface. So, let’s configure it. Back to R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "это IPv6-адрес, который будет настроен & nbsp; на интерфейсе G0 / 1 маршрутизатора R1. Итак, настроим. Вернуться к R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      146.24,
      152.48
    ],
    "en": [
      "Back to R1.&nbsp;&nbsp; CONF T. Before configuring the interface, I should&nbsp; enable IPv6 routing, since we’ll try out some&nbsp;&nbsp;"
    ],
    "ru": [
      "Вернуться к R1. & Nbsp; & nbsp; CONF T. Перед настройкой интерфейса я должен & nbsp; включите маршрутизацию IPv6, так как мы попробуем некоторые & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      152.48,
      162.56
    ],
    "en": [
      "pings later. IPV6 UNICAST-ROUTING. Okay, now let’s&nbsp; configure the interface. INTERFACE G0/1. IPV6&nbsp;&nbsp;"
    ],
    "ru": [
      "пингует позже. IPV6 UNICAST-МАРШРУТИЗАЦИЯ. Хорошо, а теперь давайте & nbsp; настроить интерфейс. ИНТЕРФЕЙС G0 / 1. IPV6 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      162.56,
      172.96
    ],
    "en": [
      "ADDRESS 2001:db8::/64, that’s the network prefix.&nbsp; Finally just add EUI-64 to the end. Okay, let’s&nbsp;&nbsp;"
    ],
    "ru": [
      "АДРЕС 2001: db8 :: / 64, это сетевой префикс. & Nbsp; Наконец, просто добавьте EUI-64 в конец. Хорошо, давай & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      172.96,
      180.56
    ],
    "en": [
      "check the address that was configured. DO SHOW&nbsp; IPV6 INTERFACE BRIEF. There it is. Notice that&nbsp;&nbsp;"
    ],
    "ru": [
      "проверьте адрес, который был настроен. ПОКАЗАТЬ & nbsp; КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. Вот оно. Обратите внимание, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      180.56,
      187.2
    ],
    "en": [
      "a link-local address was automatically configured&nbsp; also, and it uses the same EUI-64 interface ID,&nbsp;&nbsp;"
    ],
    "ru": [
      "локальный для ссылки адрес был настроен автоматически & nbsp; также, и он использует тот же идентификатор интерфейса EUI-64, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      187.2,
      194.24
    ],
    "en": [
      "but a different network prefix, beginning&nbsp; with FE80 because it’s a link-local address."
    ],
    "ru": [
      "но другой префикс сети, начинающийся & nbsp; с FE80, потому что это локальный адрес ссылки."
    ]
  },
  {
    "time": [
      194.24,
      199.52
    ],
    "en": [
      "Now let’s do the same process on R2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь давайте проделаем то же самое на R2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      199.52,
      208.8
    ],
    "en": [
      "ENABLE. SHOW INTERFACES G0/1. Here is the MAC&nbsp; address of G0/1. Let’s return to that document.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ ИНТЕРФЕЙСЫ G0 / 1. Вот MAC & nbsp; адрес G0 / 1. Вернемся к этому документу. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      208.8,
      216.16
    ],
    "en": [
      "Here is that same MAC address. To get the EUI-64&nbsp; interface ID, split it in half, insert FFFE in&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот тот самый MAC-адрес. Чтобы получить EUI-64 & nbsp; ID интерфейса, разделите его пополам, вставьте FFFE в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      216.16,
      224.0
    ],
    "en": [
      "the middle, and finally invert the 7th bit.&nbsp; That’s the EUI-64 interface ID. If you add the&nbsp;&nbsp;"
    ],
    "ru": [
      "середину и, наконец, инвертировать 7-й бит. Это идентификатор интерфейса EUI-64. Если вы добавите & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      224.0,
      230.88
    ],
    "en": [
      "network prefix to it, you get the IPv6 address&nbsp; that will be configured on R2’s G0/1 interface."
    ],
    "ru": [
      "сетевой префикс к нему, вы получите адрес IPv6 & nbsp; который будет настроен на интерфейсе R2 G0 / 1."
    ]
  },
  {
    "time": [
      230.88,
      239.28
    ],
    "en": [
      "Let’s go back to the CLI of R2. CONF T.&nbsp; Once again, let’s enable IPv6 routing.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вернемся к интерфейсу командной строки R2. CONF T. & nbsp; Еще раз, давайте включим маршрутизацию IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      239.28,
      246.8
    ],
    "en": [
      "IPV6 UNICAST-ROUTING. Now let’s&nbsp; configure the interface. INTERFACE G0/1.&nbsp;&nbsp;"
    ],
    "ru": [
      "IPV6 UNICAST-МАРШРУТИЗАЦИЯ. А теперь давайте & nbsp; настроить интерфейс. ИНТЕРФЕЙС G0 / 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      246.8,
      261.2
    ],
    "en": [
      "IPV6 ADDRESS 2001:db8:0:1::/64 EUI-64. Okay, let’s&nbsp; check the address. DO SHOW IPV6 INTERFACE BRIEF.&nbsp;&nbsp;"
    ],
    "ru": [
      "АДРЕС IPV6 2001: db8: 0: 1 :: / 64 EUI-64. Хорошо, давай & nbsp; проверьте адрес. ПОКАЗАТЬ КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      261.2,
      265.68
    ],
    "en": [
      "There it is, and a link-local&nbsp; address was configured, too."
    ],
    "ru": [
      "Вот она, и ссылка-local & nbsp; адрес тоже был настроен."
    ]
  },
  {
    "time": [
      265.68,
      273.2
    ],
    "en": [
      "In step 2 we are told to configure the appropriate&nbsp; IPv6 address and default gateway on PC1 and PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "На шаге 2 нам предлагается настроить соответствующий & nbsp; IPv6-адрес и шлюз по умолчанию на ПК1 и ПК2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      273.2,
      278.08
    ],
    "en": [
      "Since we’re already on R2, I’m going to copy the&nbsp; address we just configured, because this will&nbsp;&nbsp;"
    ],
    "ru": [
      "Поскольку мы уже используем R2, я скопирую & nbsp; адрес, который мы только что настроили, потому что он & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      278.08,
      288.56
    ],
    "en": [
      "be PC2’s default gateway. Now let’s go on PC2.&nbsp; First, we must enter the default gateway here.&nbsp;&nbsp;"
    ],
    "ru": [
      "быть шлюзом ПК2 по умолчанию. А теперь перейдем к ПК2. & Nbsp; Сначала мы должны указать здесь шлюз по умолчанию. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      288.56,
      294.64
    ],
    "en": [
      "I’ll paste in R2’s address. Now&nbsp; let’s configure PC2’s own address.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я вставлю адрес R2. Теперь & nbsp; давайте настроим собственный адрес ПК2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      294.64,
      304.8
    ],
    "en": [
      "It’s 2001:db8:0:1::2, with a /64 prefix length.&nbsp; Notice that it already has a link-local address,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это 2001: db8: 0: 1 :: 2 с длиной префикса / 64. & Nbsp; Обратите внимание, что у него уже есть локальный адрес ссылки, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      304.8,
      311.12
    ],
    "en": [
      "based off of the MAC address which you&nbsp; can see up here. Okay, that’s all for PC2."
    ],
    "ru": [
      "на основе MAC-адреса, который вы & nbsp; можно увидеть здесь. Хорошо, это все для ПК2."
    ]
  },
  {
    "time": [
      311.12,
      318.96
    ],
    "en": [
      "Now I’ll return to R1. Let me copy the&nbsp; IPv6 address of its G0/1 interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь вернусь к R1. Позвольте мне скопировать & nbsp; IPv6-адрес интерфейса G0 / 1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      318.96,
      327.6
    ],
    "en": [
      "Now I’ll configure PC1. First, I’ll paste&nbsp; R1’s IP address as the default gateway.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь я настрою ПК1. Сначала я вставлю & nbsp; IP-адрес маршрутизатора R1 в качестве шлюза по умолчанию. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      327.6,
      338.56
    ],
    "en": [
      "Next I’ll configure PC1’s address,&nbsp; 2001:db8::2/64. Okay, that’s all for step 2."
    ],
    "ru": [
      "Затем я настрою адрес ПК1, & nbsp; 2001: db8 :: 2/64. Хорошо, это все, что касается шага 2."
    ]
  },
  {
    "time": [
      338.56,
      344.15999999999997
    ],
    "en": [
      "Step 3 says to enable IPv6 on&nbsp; the G0/0 interface of R1 and R2,&nbsp;&nbsp;"
    ],
    "ru": [
      "На шаге 3 говорится, что нужно включить IPv6 на & nbsp; интерфейс G0 / 0 R1 и R2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      344.15999999999997,
      351.36
    ],
    "en": [
      "without explicitly configuring an IPv6&nbsp; address on them. I’ll do that on R1 first.&nbsp;&nbsp;"
    ],
    "ru": [
      "без явной настройки IPv6 & nbsp; обращайтесь по ним. Сначала я сделаю это на R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      351.36,
      359.04
    ],
    "en": [
      "INTERFACE G0/0. To enable IPv6 on an&nbsp; interface, use this command, IPV6 ENABLE.&nbsp;&nbsp;"
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 0. Чтобы включить IPv6 на & nbsp; интерфейс, используйте эту команду, IPV6 ENABLE. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      359.04,
      364.64
    ],
    "en": [
      "That’s it. That will automatically configure&nbsp; an IPv6 address on the interface. What kind&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот и все. Это автоматически настроит & nbsp; IPv6-адрес интерфейса. Что за & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      364.64,
      373.68
    ],
    "en": [
      "of IPv6 address? It’s a link-local address.&nbsp; Let’s check. DO SHOW IPV6 INTERFACE BRIEF.&nbsp;&nbsp;"
    ],
    "ru": [
      "адреса IPv6? Это локальный адрес ссылки. & Nbsp; Давайте проверим. ПОКАЗАТЬ КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      373.68,
      377.12
    ],
    "en": [
      "There it is, and notice the EUI-64 interface ID&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот он, и обратите внимание на идентификатор интерфейса EUI-64 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      377.12,
      382.56
    ],
    "en": [
      "is different than G0/1’s, because the&nbsp; interfaces have different MAC addresses."
    ],
    "ru": [
      "отличается от G0 / 1, потому что & nbsp; интерфейсы имеют разные MAC-адреса."
    ]
  },
  {
    "time": [
      382.56,
      392.48
    ],
    "en": [
      "Okay, next I’ll do the same on R2. INTERFACE&nbsp; G0/0. IPV6 ENABLE. Let’s see the address that was&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь я сделаю то же самое на R2. ИНТЕРФЕЙС & nbsp; G0 / 0. IPV6 ВКЛЮЧИТЬ. Давайте посмотрим на адрес, который был & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      392.48,
      404.08
    ],
    "en": [
      "configured. DO SHOW IPV6 INTERFACE BRIEF. There it&nbsp; is, a link-local IPv6 address beginning with FE80."
    ],
    "ru": [
      "настроен. ПОКАЗАТЬ КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. Вот оно & nbsp; является локальным для канала IPv6-адресом, начинающимся с FE80."
    ]
  },
  {
    "time": [
      404.08,
      411.36
    ],
    "en": [
      "Finally, step 4 says to configure static&nbsp; routes on R1 and R2 to enable PC1 to ping PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, на шаге 4 говорится, что нужно настроить статический & nbsp; маршруты на маршрутизаторах R1 и R2, чтобы ПК1 мог проверить связь с ПК2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      411.36,
      417.2
    ],
    "en": [
      "We’ll cover IPv6 static routes in day 33,&nbsp; but let’s get a little preview. There are&nbsp;&nbsp;"
    ],
    "ru": [
      "Мы рассмотрим статические маршруты IPv6 на 33-й день, & nbsp; но давайте сделаем небольшой предварительный просмотр. Есть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      417.2,
      422.08
    ],
    "en": [
      "multiple ways to configure this, for example we&nbsp; could configure a default route on each router,&nbsp;&nbsp;"
    ],
    "ru": [
      "несколько способов настроить это, например, мы & nbsp; может настроить маршрут по умолчанию на каждом маршрутизаторе, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      422.08,
      427.6
    ],
    "en": [
      "but I’ll just configure a route to each specific&nbsp; subnet. First, let me copy the link-local address&nbsp;&nbsp;"
    ],
    "ru": [
      "но я просто настрою маршрут к каждому конкретному & nbsp; подсеть. Во-первых, позвольте мне скопировать локальный адрес ссылки & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      427.6,
      437.44
    ],
    "en": [
      "that was just configured here on R2, I’ll use it&nbsp; as the next-hop for R1’s route. Now I’ll go on R1."
    ],
    "ru": [
      "который был только что настроен здесь на R2, я буду использовать его & nbsp; в качестве следующего перехода на маршруте R1. Теперь поеду по R1."
    ]
  },
  {
    "time": [
      437.44,
      443.68
    ],
    "en": [
      "Let me EXIT back to global config mode. The&nbsp; command to configure an IPv6 static route is&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне ВЫЙТИ обратно в режим глобальной конфигурации. & Nbsp; команда для настройки статического маршрута IPv6 - & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      443.68,
      450.64
    ],
    "en": [
      "IPV6 ROUTE, now I’ll use the context-sensitive&nbsp; help, the question mark, to see what’s next.&nbsp;&nbsp;"
    ],
    "ru": [
      "МАРШРУТ IPV6, теперь я буду использовать контекстно-зависимый & nbsp; справка, вопросительный знак, чтобы узнать, что будет дальше. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      450.64,
      460.24
    ],
    "en": [
      "Just like in IPv4 routes, we have to configure&nbsp; the destination. That is 2001:db8:0:1::/64.&nbsp;&nbsp;"
    ],
    "ru": [
      "Как и в случае с маршрутами IPv4, мы должны настроить & nbsp; назначение. То есть 2001: db8: 0: 1 :: / 64. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      460.24,
      467.36
    ],
    "en": [
      "Now let’s see what’s next. So, we can configure an&nbsp; exit interface or the next hop. I’ll set the next&nbsp;&nbsp;"
    ],
    "ru": [
      "А теперь посмотрим, что будет дальше. Итак, мы можем настроить & nbsp; интерфейс выхода или следующий переход. Я установлю следующий & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      467.36,
      474.0
    ],
    "en": [
      "hop as the link-local address of R2 by pasting it&nbsp; here. Okay, let’s try to enter the command. But&nbsp;&nbsp;"
    ],
    "ru": [
      "hop как локальный для ссылки адрес R2, вставив его & nbsp; здесь. Ладно, попробуем ввести команду. Но & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      474.0,
      481.04
    ],
    "en": [
      "an error message is displayed. Interface has to be&nbsp; specified for a link-local nexthop. So, when using&nbsp;&nbsp;"
    ],
    "ru": [
      "отображается сообщение об ошибке. Интерфейс должен быть & nbsp; указан для следующего магазина, локального для ссылки. Итак, при использовании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      481.04,
      486.0
    ],
    "en": [
      "a link-local address as a next-hop, you can’t&nbsp; just specify the address. You have to specify&nbsp;&nbsp;"
    ],
    "ru": [
      "локальный для ссылки адрес в качестве следующего перехода, вы не можете & nbsp; просто укажите адрес. Вы должны указать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      486.0,
      492.08
    ],
    "en": [
      "the interface, too. If I use the context-sensitive&nbsp; help, you’ll see that I can’t enter the interface&nbsp;&nbsp;"
    ],
    "ru": [
      "интерфейс тоже. Если я использую контекстно-зависимый & nbsp; помогите, вы увидите, что я не могу войти в интерфейс & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      492.08,
      499.52
    ],
    "en": [
      "here. So, I need to put it before the next-hop.&nbsp; Okay, so that’s the route here on R1. Now I’ll&nbsp;&nbsp;"
    ],
    "ru": [
      "здесь. Итак, мне нужно поставить его перед следующим переходом. & Nbsp; Итак, это маршрут здесь, на R1. Теперь я & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      499.52,
      507.39300000000003
    ],
    "en": [
      "scroll up and copy the link-local address of R1’s&nbsp; interface, so I can use it as the next hop on R2."
    ],
    "ru": [
      "прокрутите вверх и скопируйте локальный для ссылки адрес R1 & nbsp; интерфейс, поэтому я могу использовать его в качестве следующего прыжка на R2."
    ]
  },
  {
    "time": [
      507.39300000000003,
      516.88
    ],
    "en": [
      "Now let’s configure the route on&nbsp; R2. EXIT. IPV6 ROUTE 2001:db8::/64,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь давайте настроим маршрут на & nbsp; R2. ВЫХОД. МАРШРУТ IPV6 2001: db8 :: / 64, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      516.88,
      523.36
    ],
    "en": [
      "then the exit interface, G0/0. Finally&nbsp; I’ll paste in R1’s link-local address.&nbsp;&nbsp;"
    ],
    "ru": [
      "затем интерфейс выхода, G0 / 0. Наконец & nbsp; Я вставлю локальный адрес ссылки R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      523.36,
      532.4
    ],
    "en": [
      "Okay, that’s all. So, let’s test out&nbsp; these routes by pinging from PC1 to PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, вот и все. Итак, давайте проверим & nbsp; эти маршруты с помощью эхо-запроса с ПК1 на ПК2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      532.4,
      544.16
    ],
    "en": [
      "PING 2001:db8:0:1::2. Okay,&nbsp; PC1 is able to reach PC2."
    ],
    "ru": [
      "ПИНГ 2001: db8: 0: 1 :: 2. Хорошо, & nbsp; ПК1 может подключиться к ПК2."
    ]
  },
  {
    "time": [
      544.16,
      552.32
    ],
    "en": [
      "So, in this lab we configured IPv6 addresses using&nbsp; IPV6 ADDRESS EUI-64, enabled IPv6 on interfaces&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, в этой лабораторной работе мы настроили адреса IPv6 с помощью & nbsp; АДРЕС IPV6 EUI-64, включен IPv6 на интерфейсах & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      552.32,
      558.96
    ],
    "en": [
      "without manually configuring an address, and then&nbsp; tried out IPv6 static routes. In Day 33 we’ll go&nbsp;&nbsp;"
    ],
    "ru": [
      "без ручной настройки адреса, а затем & nbsp; опробовал статические маршруты IPv6. В день 33 мы перейдем к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      558.96,
      567.52
    ],
    "en": [
      "in depth about IPv6 static routing. Now let’s&nbsp; take a look at a lab in Boson NetSim for CCNA."
    ],
    "ru": [
      "подробно о статической маршрутизации IPv6. А теперь давайте & nbsp; взгляните на лабораторию в Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      567.52,
      572.72
    ],
    "en": [
      "Okay, here's today's Boson NetSim lab preview.&nbsp; The lab we're doing today is Configuring&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот предварительная версия сегодняшней лабораторной работы Boson NetSim. & Nbsp; Сегодняшняя лабораторная работа - это настройка & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      572.72,
      580.16
    ],
    "en": [
      "IPv6 1. Here's the objective. Understand and&nbsp; implement IPv6 addressing on the network,&nbsp;&nbsp;"
    ],
    "ru": [
      "IPv6 1. Вот цель. Понять и & nbsp; реализовать IPv6-адресацию в сети, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      580.16,
      587.2
    ],
    "en": [
      "and implement RIPng to implement dynamic&nbsp; IPv6 routing. Now, dynamic routing in IPv6&nbsp;&nbsp;"
    ],
    "ru": [
      "и внедрить RIPng для реализации динамических & nbsp; Маршрутизация IPv6. Теперь динамическая маршрутизация в IPv6 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      587.2,
      592.96
    ],
    "en": [
      "isn't actually in the CCNA exam topics, but&nbsp; let's take a quick look at it in this lab.&nbsp;&nbsp;"
    ],
    "ru": [
      "на самом деле не входит в темы экзамена CCNA, но & nbsp; давайте быстро рассмотрим его в этой лабораторной работе. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      592.96,
      597.12
    ],
    "en": [
      "All of the commands you need to know&nbsp; are listed here. IPv6 ROUTER RIP,&nbsp;&nbsp;"
    ],
    "ru": [
      "Все команды, которые вам нужно знать & nbsp; перечислены здесь. IPv6 ROUTER RIP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      597.12,
      606.48
    ],
    "en": [
      "IPv6 RIP ENABLE. So you can complete this lab&nbsp; even if you haven't actually studied RIPng yet.&nbsp;&nbsp;"
    ],
    "ru": [
      "IPv6 RIP ВКЛЮЧИТЬ. Итак, вы можете выполнить эту лабораторную & nbsp; даже если вы еще не изучали RIPng. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      606.48,
      610.72
    ],
    "en": [
      "Here are the IP addresses currently configured.&nbsp; As you can see, IPv4 is already enabled on&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот текущие настроенные IP-адреса. & Nbsp; Как видите, IPv4 уже включен на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      610.72,
      617.04
    ],
    "en": [
      "the network. We're going to add IPv6 on&nbsp; top of that. And the lab tasks. Task 1,&nbsp;&nbsp;"
    ],
    "ru": [
      "сеть. Мы собираемся добавить IPv6 в & nbsp; в довершение всего. И лабораторные задания. Задача 1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      617.04,
      626.8
    ],
    "en": [
      "examine the initial network configuration.&nbsp; Task 2, explore IPv6. Task 3, implement IPv6.&nbsp;&nbsp;"
    ],
    "ru": [
      "проверьте исходную конфигурацию сети. & nbsp; Задача 2, исследуйте IPv6. Задача 3. Реализация IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      626.8,
      631.44
    ],
    "en": [
      "And finally task 4, verify IPv6.&nbsp; So this is a pretty big lab.&nbsp;&nbsp;"
    ],
    "ru": [
      "И, наконец, задача 4: проверка IPv6. Итак, это довольно большая лаборатория. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      631.44,
      639.44
    ],
    "en": [
      "For this lab preview, let's just do task 3,&nbsp; implement IPv6. So let's do some configurations.&nbsp;&nbsp;"
    ],
    "ru": [
      "Для предварительного просмотра лабораторной работы давайте просто выполним задачу 3, & nbsp; реализовать IPv6. Итак, давайте сделаем некоторые настройки. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      639.44,
      646.4
    ],
    "en": [
      "So part A, implement IPv6 addressing, step&nbsp; 1. You will implement IPv6 addressing on&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, часть A, реализация адресации IPv6, шаг & nbsp; 1. Вы внедрите адресацию IPv6 на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      646.4,
      652.24
    ],
    "en": [
      "the WAN links that connect the Tampa,&nbsp; Orlando, Daytona, and Miami routers.&nbsp;&nbsp;"
    ],
    "ru": [
      "каналы WAN, соединяющие Tampa, & nbsp; Маршрутизаторы Орландо, Дейтона и Майами. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      652.24,
      656.88
    ],
    "en": [
      "Okay, so these four routers, just these&nbsp; WAN links. You will not implement IPv6&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, эти четыре маршрутизатора, только эти & nbsp; WAN-ссылки. Вы не будете внедрять IPv6 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      656.88,
      662.0
    ],
    "en": [
      "addressing on the WAN link that connects the&nbsp; Miami and Key West routers or on the LANs.&nbsp;&nbsp;"
    ],
    "ru": [
      "адресация по каналу WAN, который соединяет & nbsp; Маршрутизаторы Майами и Ки-Уэст или в локальных сетях. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      662.0,
      669.6
    ],
    "en": [
      "Okay, and this diagram and the table show&nbsp; the IPv6 addresses we will configure.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, и эта диаграмма и таблица показывают & nbsp; адреса IPv6, которые мы настроим. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      669.6,
      674.72
    ],
    "en": [
      "Okay, review the commands used to assign&nbsp; an IPv6 address to an interface. Compare&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, просмотрите команды, используемые для назначения & nbsp; IPv6-адрес интерфейса. Сравнить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      674.72,
      679.68
    ],
    "en": [
      "these commands to the commands you currently&nbsp; use to assign IP addresses to an interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "эти команды к командам, которые вы в настоящее время & nbsp; используйте для назначения IP-адресов интерфейсу. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      679.68,
      685.52
    ],
    "en": [
      "So this means, the commands you&nbsp; currently use refers to IPv4 addressing.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это означает, что команды, которые вы & nbsp; в настоящее время использование относится к адресации IPv4. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      685.52,
      693.04
    ],
    "en": [
      "And the commands are quite similar. IPv4&nbsp; uses IP ADDRESS, IPv6 uses IPv6 ADDRESS.&nbsp;&nbsp;"
    ],
    "ru": [
      "И команды очень похожи. IPv4 & nbsp; использует IP-АДРЕС, IPv6 использует АДРЕС IPv6. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      693.04,
      697.6
    ],
    "en": [
      "And most commands are like that, they're&nbsp; almost identical between IPv4 and IPv6,&nbsp;&nbsp;"
    ],
    "ru": [
      "И большинство команд такие, они & nbsp; почти идентичны между IPv4 и IPv6, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      697.6,
      706.4
    ],
    "en": [
      "but for IPv6 instead of IP you have to enter&nbsp; IPv6. Okay, on Tampa, Orlando, Daytona, and Miami,&nbsp;&nbsp;"
    ],
    "ru": [
      "но для IPv6 вместо IP вам нужно ввести & nbsp; IPv6. Хорошо, в Тампе, Орландо, Дейтоне и Майами, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      706.4,
      713.12
    ],
    "en": [
      "enable IPv6 routing. Okay, let's do that. Here on&nbsp; Tampa, oh that's right there's a password on these&nbsp;&nbsp;"
    ],
    "ru": [
      "включить маршрутизацию IPv6. Хорошо, давай сделаем это. Здесь на & nbsp; Тампа, верно, на этих & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      713.12,
      725.52
    ],
    "en": [
      "routers. Okay, the console password is admin, and&nbsp; the enable password is cisco, okay. Admin, enable,&nbsp;&nbsp;"
    ],
    "ru": [
      "роутеры. Хорошо, пароль консоли - admin, а & nbsp; пароль включения - cisco, хорошо. Администрирование, включение, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      725.52,
      742.32
    ],
    "en": [
      "cisco. And let's configure IPv6 routing. Okay,&nbsp; that's it for Tampa. Next up, Orlando. Admin.&nbsp;&nbsp;"
    ],
    "ru": [
      "cisco. И давайте настроим маршрутизацию IPv6. Хорошо, & nbsp; это все для Тампы. Далее, Орландо. Админ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      742.32,
      748.88
    ],
    "en": [
      "Okay, that's all for Orlando. We aren't&nbsp; configuring it on Key West, so I'll go to&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это все для Орландо. Мы не & nbsp; настраивая его на Ки-Уэсте, поэтому я перейду к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      748.88,
      770.16
    ],
    "en": [
      "Daytona next. Admin, enable, cisco. IPv6&nbsp; unicast-routing. And finally the Miami router.&nbsp;&nbsp;"
    ],
    "ru": [
      "Дайтона следующая. Админ, включи, cisco. IPv6 & nbsp; одноадресная маршрутизация. И, наконец, роутер Майами. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      770.16,
      774.0
    ],
    "en": [
      "Okay, so let's see what's next.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте посмотрим, что будет дальше. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      774.0,
      779.44
    ],
    "en": [
      "On Tampa, Orlando, Daytona, and Miami, assign&nbsp; the appropriate IPv6 addresses. Refer to the&nbsp;&nbsp;"
    ],
    "ru": [
      "В Тампе, Орландо, Дейтоне и Майами назначьте & nbsp; соответствующие адреса IPv6. См. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      779.44,
      786.48
    ],
    "en": [
      "IPv6 addresses table. Okay, so we will configure&nbsp; those addresses. I'm on Miami, so I'll start here.&nbsp;&nbsp;"
    ],
    "ru": [
      "Таблица адресов IPv6. Итак, мы настроим & nbsp; эти адреса. Я нахожусь в Майами, поэтому начну здесь. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      786.48,
      801.126
    ],
    "en": [
      "First, interface serial0/0. IPv6 address&nbsp; 2001:0:1:3::2/64. Next, serial0/1. IPv6 address&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, интерфейс serial0 / 0. IPv6-адрес & nbsp; 2001: 0: 1: 3 :: 2/64. Далее serial0 / 1. IPv6-адрес & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      801.126,
      813.785
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
      801.126,
      813.785
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
      813.785,
      838.64
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
      813.785,
      838.64
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
      838.64,
      855.68
    ],
    "en": [
      "Interface serial0/0. IPv6 address&nbsp; 2001:0:1:1::2/64. Next up, serial0/1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Интерфейс serial0 / 0. IPv6-адрес & nbsp; 2001: 0: 1: 1 :: 2/64. Далее serial0 / 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      855.68,
      865.28
    ],
    "en": [
      "Okay, last one is Tampa. Serial0/0.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, последний - Тампа. Серийный номер0 / 0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      865.28,
      881.52
    ],
    "en": [
      "And serial0/1. Okay, that's it.&nbsp; Next, implement IPv6 routing.&nbsp;&nbsp;"
    ],
    "ru": [
      "И serial0 / 1. Ладно, вот и все. & Nbsp; Затем внедрите маршрутизацию IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      881.52,
      887.44
    ],
    "en": [
      "So this is what we haven't covered and it actually&nbsp; isn't on the CCNA exam, but it's good to know. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это то, что мы еще не рассмотрели, и на самом деле это & ​​nbsp; не сдает экзамен CCNA, но это полезно знать. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      887.44,
      893.28
    ],
    "en": [
      "step 1. Updated routing protocols capable of working with IPv6 addresses must be used in&nbsp;&nbsp;"
    ],
    "ru": [
      "шаг 1. Обновленные протоколы маршрутизации, способные работать с адресами IPv6, должны использоваться в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      893.28,
      898.88
    ],
    "en": [
      "order for IPv6 routes to be exchanged with&nbsp; other routers. You will implement RIPng,&nbsp;&nbsp;"
    ],
    "ru": [
      "порядок обмена маршрутами IPv6 с & nbsp; другие роутеры. Вы реализуете RIPng, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      898.88,
      905.04
    ],
    "en": [
      "RIP next generation, in this lab. RIPng&nbsp; can function with IPv6 addresses, okay.&nbsp;&nbsp;"
    ],
    "ru": [
      "RIP следующего поколения в этой лабораторной работе. RIPng & nbsp; может работать с IPv6-адресами, хорошо. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      905.04,
      911.52
    ],
    "en": [
      "Number 2, identify the commands you should issue&nbsp; to enable IPv6 dynamic routing with RIPng. How do&nbsp;&nbsp;"
    ],
    "ru": [
      "Номер 2: укажите команды, которые следует ввести & nbsp; для включения динамической маршрутизации IPv6 с RIPng. Как сделать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      911.52,
      918.08
    ],
    "en": [
      "these commands differ from the commands you would&nbsp; issue to configure interfaces for RIP with IPv4?&nbsp;&nbsp;"
    ],
    "ru": [
      "эти команды отличаются от команд, которые вы бы & nbsp; проблема с настройкой интерфейсов для RIP с IPv4? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      918.08,
      922.72
    ],
    "en": [
      "And then we will configure&nbsp; RIPng on the four routers,&nbsp;&nbsp;"
    ],
    "ru": [
      "А затем мы настроим & nbsp; RIPng на четырех маршрутизаторах, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      922.72,
      930.4
    ],
    "en": [
      "and use boson as the process identification&nbsp; string. So, you can see those commands up here.&nbsp;&nbsp;"
    ],
    "ru": [
      "и использовать бозон как идентификацию процесса & nbsp; нить. Итак, вы можете увидеть эти команды здесь. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      930.4,
      938.08
    ],
    "en": [
      "We need to know just two commands. IPv6&nbsp; ROUTER RIP (process-name). This enables RIPng&nbsp;&nbsp;"
    ],
    "ru": [
      "Нам нужно знать всего две команды. IPv6 & nbsp; ROUTER RIP (имя-процесса). Это позволяет RIPng & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      938.08,
      945.76
    ],
    "en": [
      "on the router. And the big difference&nbsp; here is the process name. So, in IPv4,&nbsp;&nbsp;"
    ],
    "ru": [
      "на роутере. И большая разница & NBSP; вот имя процесса. Итак, в IPv4 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      945.76,
      950.24
    ],
    "en": [
      "you could only have one RIP process running&nbsp; at a time. You would use the command ROUTER RIP,&nbsp;&nbsp;"
    ],
    "ru": [
      "у вас может быть только один процесс RIP, работающий & nbsp; вовремя. Вы можете использовать команду ROUTER RIP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      950.24,
      955.52
    ],
    "en": [
      "and then you would enable RIP on the&nbsp; interfaces with the NETWORK command.&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем включите RIP на & nbsp; взаимодействует с командой NETWORK. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      955.52,
      962.08
    ],
    "en": [
      "However, in RIPng, you enable RIPng&nbsp; directly on the interfaces with IPv6 RIP,&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако в RIPng вы включаете RIPng & nbsp; непосредственно на интерфейсах с IPv6 RIP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      962.08,
      969.6
    ],
    "en": [
      "followed by the process name, followed by&nbsp; ENABLE. Okay, so I'll start here on Tampa.&nbsp;&nbsp;"
    ],
    "ru": [
      "за которым следует имя процесса, за которым следует & nbsp; ВКЛЮЧИТЬ. Хорошо, я начну с Тампы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      969.6,
      974.56
    ],
    "en": [
      "Now, I believe that we could just&nbsp; enable it directly on the interfaces&nbsp;&nbsp;"
    ],
    "ru": [
      "Я считаю, что мы могли бы просто & nbsp; включить его прямо на интерфейсах & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      974.56,
      977.84
    ],
    "en": [
      "and the process will be automatically&nbsp; created, so we don't have to use this&nbsp;&nbsp;"
    ],
    "ru": [
      "и процесс будет автоматически & nbsp; создан, поэтому нам не нужно использовать этот & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      977.84,
      987.68
    ],
    "en": [
      "IPv6 ROUTER RIP command. Let's see if I'm correct&nbsp; about that. INTERFACE RANGE SERIAL0/0 - 1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Команда IPv6 ROUTER RIP. Посмотрим, прав ли я & nbsp; об этом. ДИАПАЗОН ИНТЕРФЕЙСА SERIAL0 / 0 - 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      987.68,
      992.48
    ],
    "en": [
      "Oh, I can't use the interface range command,&nbsp; alright. So, interface serial0/0. That&nbsp;&nbsp;"
    ],
    "ru": [
      "О, я не могу использовать команду диапазона интерфейса, & nbsp; хорошо. Итак, интерфейс serial0 / 0. Это & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      992.48,
      1001.84
    ],
    "en": [
      "might be something in NetSim, I'm not sure&nbsp; about that. Interface serial0/0, IPv6 rip,&nbsp;&nbsp;"
    ],
    "ru": [
      "может быть что-то в NetSim, не уверен & nbsp; об этом. Интерфейс serial0 / 0, IPv6 rip, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1001.84,
      1010.32
    ],
    "en": [
      "and the process name, it said to use boson, and&nbsp; then enable. And then I'll do that on serial0/1.&nbsp;&nbsp;"
    ],
    "ru": [
      "и имя процесса, в котором говорилось, что используется бозон, и & nbsp; затем включите. А потом я сделаю это на serial0 / 1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1010.32,
      1018.64
    ],
    "en": [
      "Use the up arrow to use the same command.&nbsp; Okay, now let's see if RIPng was enabled&nbsp;&nbsp;"
    ],
    "ru": [
      "Используйте стрелку вверх, чтобы использовать ту же команду. & Nbsp; Хорошо, теперь посмотрим, включен ли RIPng & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1018.64,
      1029.36
    ],
    "en": [
      "by configuring it on the interfaces. SHOW&nbsp; IPV6 PROTOCOLS...'protols'...PROTOCOLS.&nbsp;&nbsp;"
    ],
    "ru": [
      "настроив его на интерфейсах. ПОКАЗАТЬ & NBSP; ПРОТОКОЛЫ IPV6 ... 'protols' ... ПРОТОКОЛЫ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1029.36,
      1035.44
    ],
    "en": [
      "IPv6 routing protocol is 'rip boson'.&nbsp; Okay, looks like it's enabled.&nbsp;&nbsp;"
    ],
    "ru": [
      "Протокол маршрутизации IPv6 - это «рип-бозон». & Nbsp; Хорошо, похоже, он включен. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1035.44,
      1046.48
    ],
    "en": [
      "So, let's do that on the other routers.&nbsp; Here on Orlando, IPv6 rip boson enable.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте сделаем это на других маршрутизаторах. & Nbsp; Здесь, в Орландо, включен рип-бозон IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1046.48,
      1061.12
    ],
    "en": [
      "Interface serial0, IPv6 rip boson enable.&nbsp; Okay, then Daytona. IPv6 rip boson enable.&nbsp;&nbsp;"
    ],
    "ru": [
      "Интерфейс serial0, включение рип-бозона IPv6. & Nbsp; Хорошо, тогда Дайтона. Включение бозона рип-бозона IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1061.12,
      1074.16
    ],
    "en": [
      "Interface serial0/0. Ipv6 rip boson enable. And&nbsp; then Miami. IPv6 rip boson enable. Serial0/0,&nbsp;&nbsp;"
    ],
    "ru": [
      "Интерфейс serial0 / 0. Ipv6 rip boson enable. И & NBSP; затем Майами. Включение бозона рип-бозона IPv6. Serial0 / 0, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1074.16,
      1084.8
    ],
    "en": [
      "IPv6 rip boson enable. Okay, so let's see&nbsp; if they are actually exchanging routes.&nbsp;&nbsp;"
    ],
    "ru": [
      "Включение бозона рип-бозона IPv6. Хорошо, давайте посмотрим & nbsp; если они действительно обмениваются маршрутами. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1084.8,
      1095.28
    ],
    "en": [
      "SHOW IPv6 ROUTE. Okay, looks like Tampa has&nbsp; learned a RIP route. It might take some more&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ МАРШРУТ IPv6. Хорошо, похоже, в Тампе & nbsp; узнал RIP-маршрут. Это может занять еще немного & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1095.28,
      1101.28
    ],
    "en": [
      "time for it to learn the other routes.&nbsp; How about on Orlando? SHOW IPv6 ROUTE.&nbsp;&nbsp;"
    ],
    "ru": [
      "пора ему изучить другие маршруты. & nbsp; Как насчет Орландо? ПОКАЗАТЬ МАРШРУТ IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1101.28,
      1105.28
    ],
    "en": [
      "Yep, we're getting some RIP routes, looks good.&nbsp;&nbsp;"
    ],
    "ru": [
      "Да, у нас есть несколько маршрутов RIP, выглядит неплохо. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1105.28,
      1115.28
    ],
    "en": [
      "How about Daytona? SHOW IPv6 ROUTE. Okay,&nbsp; same thing here. And Miami, SHOW IPv6 ROUTE.&nbsp;&nbsp;"
    ],
    "ru": [
      "Как насчет Дейтоны? ПОКАЗАТЬ МАРШРУТ IPv6. Хорошо, & nbsp; то же самое и здесь. И Майами, ПОКАЖИТЕ МАРШРУТ IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1115.28,
      1122.32
    ],
    "en": [
      "Okay, we're getting RIP routes, looks good. Okay&nbsp; so to summarize, to configure RIPng, you can&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, мы получаем RIP-маршруты, все в порядке. Хорошо & nbsp; Итак, чтобы подвести итог, чтобы настроить RIPng, вы можете & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1122.32,
      1128.32
    ],
    "en": [
      "create the process from global config mode with&nbsp; IPv6 ROUTER RIP, followed by the process name,&nbsp;&nbsp;"
    ],
    "ru": [
      "создать процесс из режима глобальной конфигурации с помощью & nbsp; IPv6 ROUTER RIP, за которым следует имя процесса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1128.32,
      1134.0
    ],
    "en": [
      "and then enable it directly on interfaces&nbsp; with IPv6 RIP, process-name, ENABLE.&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем включите его прямо на интерфейсах & nbsp; с IPv6 RIP, имя процесса, ВКЛЮЧИТЬ. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1134.0,
      1138.32
    ],
    "en": [
      "However, if you enable it directly on the&nbsp; interface, the process is automatically created&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако, если вы включите его прямо в & nbsp; интерфейс, процесс создается автоматически & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1138.32,
      1146.48
    ],
    "en": [
      "so you don't actually need to enter this command.&nbsp; Okay, so I think that's all for that step. Yep,&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому на самом деле вам не нужно вводить эту команду. & nbsp; Хорошо, я думаю, что это все для этого шага. Ага, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1146.48,
      1154.72
    ],
    "en": [
      "we just did step 2 and step 3. We enabled RIPng&nbsp; on the routers and used boson as the process ID.&nbsp;&nbsp;"
    ],
    "ru": [
      "мы только что выполнили шаг 2 и шаг 3. Мы включили RIPng & nbsp; на маршрутизаторах и использовал бозон в качестве идентификатора процесса. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1154.72,
      1159.12
    ],
    "en": [
      "Okay, next up we would verify our&nbsp; configurations, verify the addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь мы проверим наши & nbsp; конфигурации, проверьте адреса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1159.12,
      1165.68
    ],
    "en": [
      "test the pings, but I'll leave it here for today.&nbsp; Okay, so if you want to get Boson NetSim, follow&nbsp;&nbsp;"
    ],
    "ru": [
      "проверить пинги, но я оставлю это здесь на сегодня. & nbsp; Итак, если вы хотите получить Boson NetSim, подпишитесь на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1165.68,
      1171.68
    ],
    "en": [
      "the link in the video description. As you can&nbsp; see, these labs are quite long, quite detailed,&nbsp;&nbsp;"
    ],
    "ru": [
      "ссылка в описании видео. Как вы можете & nbsp; видите, эти лабораторные работы довольно длинные, довольно подробные, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1171.68,
      1177.2
    ],
    "en": [
      "much more extensive than my packet tracer labs,&nbsp; so I highly recommend Boson NetSim for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "намного более обширный, чем мои лаборатории по отслеживанию пакетов, & nbsp; поэтому я настоятельно рекомендую Boson NetSim для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1177.2,
      1183.04
    ],
    "en": [
      "Once again, if you want to get Boson NetSim,&nbsp; follow the link in the video description."
    ],
    "ru": [
      "Еще раз, если вы хотите получить Boson NetSim, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1183.04,
      1187.68
    ],
    "en": [
      "Before finishing today’s video I want&nbsp; to thank my JCNP-level channel members.&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу & nbsp; чтобы поблагодарить участников канала уровня JCNP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1187.68,
      1191.36
    ],
    "en": [
      "To join, please click the&nbsp; ‘Join’ button under the video.&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку & nbsp; Кнопка \"Присоединиться\" под видео. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1191.36,
      1197.92
    ],
    "en": [
      "Thank you to l33america, Brandon, Magrathea,&nbsp; Njabulo, Benjamin, Deepak, Tshepiso, Justin,&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо l33america, Brandon, Magrathea, & nbsp; Нджабуло, Бенджамин, Дипак, Чеписо, Джастин, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1197.92,
      1204.24
    ],
    "en": [
      "Nil, Prakaash, Nasir, Erlison, Apogee, Wasseem,&nbsp; Marko, Florian, Daming, Joshua, Jhilmar, Samil,&nbsp;&nbsp;"
    ],
    "ru": [
      "Нил, Пракааш, Насир, Эрлисон, Апогей, Вассим, & nbsp; Марко, Флориан, Даминг, Джошуа, Джилмар, Самил, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1204.24,
      1210.16
    ],
    "en": [
      "Ed, Value, John, Funnydart, Scott, Hassan,&nbsp; Marek, Velvijaykum, C Mohd, Mark, Yousif, Sidi,&nbsp;&nbsp;"
    ],
    "ru": [
      "Эд, Вэлью, Джон, Фаннидарт, Скотт, Хассан, & nbsp; Марек, Велвиджайкум, Ч. Мохд, Марк, Юсиф, Сиди, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1210.16,
      1215.68
    ],
    "en": [
      "Boson Software, Charlesetta, Devin, Lito,&nbsp; Yonatan, and Vance. Sorry if I pronounced&nbsp;&nbsp;"
    ],
    "ru": [
      "Boson Software, Charlesetta, Devin, Lito, & nbsp; Йонатан и Вэнс. Извините, если я произнес & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1215.68,
      1221.44
    ],
    "en": [
      "your name incorrectly, but thank you so much for&nbsp; your support. One of you is still displaying as&nbsp;&nbsp;"
    ],
    "ru": [
      "ваше имя неверно, но большое вам спасибо за & nbsp; твоя поддержка. Один из вас по-прежнему отображается как & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1221.44,
      1227.12
    ],
    "en": [
      "Channel failed to load, if this is you please&nbsp; let me know and I’ll see if YouTube can fix it.&nbsp;&nbsp;"
    ],
    "ru": [
      "Не удалось загрузить канал, пожалуйста, & nbsp; дайте мне знать, и я посмотрю, сможет ли YouTube это исправить. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1227.12,
      1233.44
    ],
    "en": [
      "This is the list of JCNP-level members at the&nbsp; time of recording by the way, October 24th 2020,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на & nbsp; время записи, кстати, 24 октября 2020 г., & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1233.44,
      1240.16
    ],
    "en": [
      "if you signed up recently and your name isn’t&nbsp; on here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "если вы зарегистрировались недавно и ваше имя не & nbsp; здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      1240.16,
      1243.2
    ],
    "en": [
      "Thank you for watching. Please&nbsp; subscribe to the channel,&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо за просмотр. Пожалуйста, & nbsp; подписаться на канал, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1243.2,
      1249.04
    ],
    "en": [
      "like the video, leave a comment, and share the&nbsp; video with anyone else studying for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "поставьте лайк видео, оставьте комментарий и поделитесь & nbsp; видео со всеми, кто учится на CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1249.04,
      1254.64
    ],
    "en": [
      "If you want to leave a tip, check the links in the&nbsp; description. I'm also a Brave verified publisher&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в разделе & nbsp; описание. Я также являюсь проверенным издателем Brave & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1254.64,
      1254.64
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]