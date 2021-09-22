let items = [
  {
    "time": [
      1.2,
      7.12
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
      7.12,
      11.68
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
      11.68,
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
      20.64
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
      20.64,
      26.56
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
      26.56,
      30.64
    ],
    "en": [
      "If you want more labs like these, I&nbsp; highly recommend picking up Boson’s NetSim&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я & nbsp; настоятельно рекомендую установить Boson's NetSim & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      30.64,
      35.2
    ],
    "en": [
      "for the CCNA, click the link in the&nbsp; video description to check it out.&nbsp;&nbsp;"
    ],
    "ru": [
      "для CCNA щелкните ссылку в & nbsp; описание видео, чтобы посмотреть его. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      35.2,
      39.92
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
      39.92,
      44.48
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
      44.48,
      50.0
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
      50.0,
      54.56
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
      54.56,
      60.32
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
      60.32,
      65.68
    ],
    "en": [
      "In this lab we will do some simple IPv6 address&nbsp; configurations. But there’s something different&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы сделаем несколько простых адресов IPv6 & nbsp; конфигурации. Но есть кое-что другое & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      65.68,
      72.48
    ],
    "en": [
      "in this lab than what I showed in the video.&nbsp; This network is already running IPv4. R1 and the&nbsp;&nbsp;"
    ],
    "ru": [
      "в этой лабораторной работе, чем то, что я показал в видео. В этой сети уже работает IPv4. R1 и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      72.48,
      79.76
    ],
    "en": [
      "PCs are already configured with IPv4 addresses.&nbsp; We’re not going to remove the IPv4 configurations,&nbsp;&nbsp;"
    ],
    "ru": [
      "На компьютерах уже настроены адреса IPv4. & Nbsp; Мы не собираемся удалять конфигурации IPv4, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      79.76,
      86.72
    ],
    "en": [
      "we’re simply going to add IPv6 configurations on&nbsp; top. This is called a ‘dual-stack’ solution, it’s&nbsp;&nbsp;"
    ],
    "ru": [
      "мы просто добавим конфигурации IPv6 на & nbsp; Топ. Это называется решением «двойного стека», это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      86.72,
      95.28
    ],
    "en": [
      "one way of transitioning your network from IPv4&nbsp; to IPv6. You keep IPv4 running, add IPv6 on top,&nbsp;&nbsp;"
    ],
    "ru": [
      "один из способов перехода вашей сети с IPv4 & nbsp; в IPv6. Вы продолжаете работать с IPv4, добавляете IPv6 сверху, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      95.28,
      103.44
    ],
    "en": [
      "and then slowly transition to using IPv6&nbsp; exclusively. So, let’s add IPv6 to this network."
    ],
    "ru": [
      "а затем медленно переходите к использованию IPv6 & nbsp; исключительно. Итак, давайте добавим в эту сеть IPv6."
    ]
  },
  {
    "time": [
      103.44,
      111.03999999999999
    ],
    "en": [
      "In step 1 we are told to enable IPv6 routing on&nbsp; R1. IPv4 routing is enabled by default. If you&nbsp;&nbsp;"
    ],
    "ru": [
      "На шаге 1 нам предлагается включить маршрутизацию IPv6 на & nbsp; R1. Маршрутизация IPv4 включена по умолчанию. Если вы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      111.03999999999999,
      116.8
    ],
    "en": [
      "configure interfaces and routes, the router will&nbsp; forward IPv4 packets without having to separately&nbsp;&nbsp;"
    ],
    "ru": [
      "настраивать интерфейсы и маршруты, маршрутизатор & nbsp; пересылать пакеты IPv4 без отдельной & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      116.8,
      124.0
    ],
    "en": [
      "enable IPv4 routing. IPv6 routing, however,&nbsp; is not enabled by default. However, just to&nbsp;&nbsp;"
    ],
    "ru": [
      "включить маршрутизацию IPv4. Однако маршрутизация IPv6 & nbsp; не включен по умолчанию. Однако просто чтобы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      124.0,
      130.32
    ],
    "en": [
      "show you what happens if you don’t enable IPv6&nbsp; routing, I’m going to skip step 1 until the end.&nbsp;&nbsp;"
    ],
    "ru": [
      "покажу, что произойдет, если вы не включите IPv6 & nbsp; маршрутизации, я пропущу шаг 1 до конца. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      130.32,
      139.36
    ],
    "en": [
      "So let’s go straight to configuring IPv6&nbsp; addresses on R1. Let’s open the CLI of R1."
    ],
    "ru": [
      "Итак, приступим к настройке IPv6 & nbsp; адреса на R1. Давайте откроем интерфейс командной строки R1."
    ]
  },
  {
    "time": [
      139.36,
      156.56
    ],
    "en": [
      "ENABLE. CONF T. Let’s configure them in order.&nbsp; INTERFACE G0/0. IPV6 ADDRESS 2001:DB8:0:1::1/64.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Давайте настроим их по порядку. & Nbsp; ИНТЕРФЕЙС G0 / 0. АДРЕС IPV6 2001: DB8: 0: 1 :: 1 / 64. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      156.56,
      161.12
    ],
    "en": [
      "The interfaces are already enabled, because&nbsp; this is already a functioning IPv4 network,&nbsp;&nbsp;"
    ],
    "ru": [
      "Интерфейсы уже включены, потому что & nbsp; это уже действующая сеть IPv4, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      161.12,
      168.16
    ],
    "en": [
      "so we don’t need to use NO SHUTDOWN.&nbsp; Okay, next interface. INTERFACE G0/1.&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому нам не нужно использовать NO SHUTDOWN. & nbsp; Хорошо, следующий интерфейс. ИНТЕРФЕЙС G0 / 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      168.16,
      189.76
    ],
    "en": [
      "IPV6 ADDRESS 2001:DB8:0:2::1/64. One more.&nbsp; INTERFACE G0/2. IPV6 ADDRESS 2001:DB8:0:3::1/64."
    ],
    "ru": [
      "АДРЕС IPV6 2001: DB8: 0: 2 :: 1/64. Еще один. ИНТЕРФЕЙС G0 / 2. АДРЕС IPV6 2001: DB8: 0: 3 :: 1/64."
    ]
  },
  {
    "time": [
      189.76,
      195.36
    ],
    "en": [
      "Okay, that’s all for the interface configurations.&nbsp; In step 3, let’s check the configurations.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это все, что касается настроек интерфейса. & Nbsp; На шаге 3 давайте проверим конфигурации. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      195.36,
      199.52
    ],
    "en": [
      "DO SHOW IPV6 INTERFACE BRIEF.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКИЙ ОБЗОР ИНТЕРФЕЙСА IPV6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      199.52,
      204.48
    ],
    "en": [
      "These are the addresses we configured on the&nbsp; interfaces, but also notice that link-local&nbsp;&nbsp;"
    ],
    "ru": [
      "Это адреса, которые мы настроили на & nbsp; интерфейсы, но также обратите внимание на то, что локальная ссылка & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      204.48,
      211.6
    ],
    "en": [
      "IPv6 addresses were automatically configured,&nbsp; too. You’ll learn about these in the next video."
    ],
    "ru": [
      "Адреса IPv6 были настроены автоматически, & nbsp; тоже. Об этом вы узнаете из следующего видео."
    ]
  },
  {
    "time": [
      211.6,
      220.56
    ],
    "en": [
      "Next up, let’s configure IPv6 addresses on&nbsp; the PCs. I’ll go on PC1. Click on ‘config’.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь давайте настроим IPv6-адреса на & nbsp; ПК. Я пойду на ПК1. Нажмите \"config\". & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      220.56,
      225.04
    ],
    "en": [
      "And then from this first screen&nbsp; here, set the IPv6 default gateway,&nbsp;&nbsp;"
    ],
    "ru": [
      "А затем с этого первого экрана & nbsp; здесь установите шлюз IPv6 по умолчанию, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      225.04,
      236.32
    ],
    "en": [
      "which should be R1. 2001:DB8:0:1::1. Next,&nbsp; click on PC1’s FastEthernet0 interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "который должен быть R1. 2001: DB8: 0: 1 :: 1. Далее & nbsp; щелкните интерфейс FastEthernet0 ПК1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      236.32,
      251.84
    ],
    "en": [
      "and set PC1’s IPv6 address. 2001:db8:0:1::2,&nbsp; and the prefix length, /64. Next up, PC2."
    ],
    "ru": [
      "и установите IPv6-адрес ПК1. 2001: db8: 0: 1 :: 2, & nbsp; и длина префикса / 64. Далее ПК2."
    ]
  },
  {
    "time": [
      251.84,
      268.0
    ],
    "en": [
      "Again, set the default gateway. 2001:db8:0:2::1.&nbsp; Then set PC2’s own address. 2001:db8:0:2::2,&nbsp;&nbsp;"
    ],
    "ru": [
      "Опять же, установите шлюз по умолчанию. 2001: db8: 0: 2 :: 1. & nbsp; Затем установите собственный адрес ПК2. 2001: db8: 0: 2 :: 2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      268.0,
      284.15999999999997
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
      268.0,
      284.15999999999997
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
      284.15999999999997,
      299.2
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
      284.15999999999997,
      299.2
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
      299.2,
      311.76
    ],
    "en": [
      "First, let’s try to ping PC1’s default gateway,&nbsp; R1’s G0/0 interface. PING 2001:DB8:0:1::1. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, давайте пингуем PC2 по умолчанию & nbsp; шлюз. ПИНГ 2001: DB8: 0: 2 :: 1. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      311.76,
      323.92
    ],
    "en": [
      "the ping works. Can PC1 ping another interface&nbsp; on R1? Let’s check. PING 2001:DB8:0:2::1. Yes,&nbsp;&nbsp;"
    ],
    "ru": [
      "это работает. Как насчет интерфейса G0 / 0 маршрутизатора R1? ПИНГ & nbsp; 2001: DB8: 0: 1 :: 1. Хорошо, этот пинг тоже работает. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      323.92,
      330.16
    ],
    "en": [
      "it can. So, PC1 can ping it’s default&nbsp; gateway and R1’s interface in another subnet.&nbsp;&nbsp;"
    ],
    "ru": [
      "Как насчет пинга на ПК1? PING 2001: DB8: 0: 1 :: 2. & nbsp; Опять же, пинг между ПК не работает. Почему & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      330.16,
      346.24
    ],
    "en": [
      "Can it ping PC2? Let’s try. PING 2001:DB8:0:2::2.&nbsp; No, it can’t. Let’s try similar pings from PC2."
    ],
    "ru": [
      "в том, что? Это потому, что я пропустил шаг 1, я не сделал & nbsp; используйте команду IPV6 UNICAST-ROUTING на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      346.24,
      356.24
    ],
    "en": [
      "First, let’s ping PC2’s default&nbsp; gateway. PING 2001:DB8:0:2::1. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вернемся к R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      356.24,
      368.8
    ],
    "en": [
      "that works. How about R1’s G0/0 interface? PING&nbsp; 2001:DB8:0:1::1. Okay, that ping works as well.&nbsp;&nbsp;"
    ],
    "ru": [
      "Используйте EXIT, чтобы вернуться в режим глобальной конфигурации. & Nbsp; И давайте включим это. УНИКАЛЬНАЯ МАРШРУТИЗАЦИЯ IPV6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      368.8,
      380.32
    ],
    "en": [
      "How about pinging to PC1? PING 2001:DB8:0:1::2.&nbsp; Again, the ping between PCs doesn’t work. Why&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь давайте вернемся к ПК1 и попробуем & nbsp; снова пропинговать PC2. PING 2001: DB8: 0: 2 :: 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      380.32,
      388.72
    ],
    "en": [
      "is that? It’s because I skipped step 1, I didn’t&nbsp; use the IPV6 UNICAST-ROUTING command on R1 yet."
    ],
    "ru": [
      "Ладно, пинг работает. Итак, убедитесь, что вы & nbsp; не забудьте про УНИКАЛЬНУЮ МАРШРУТИЗАЦИЮ IPV6 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      388.72,
      392.56
    ],
    "en": [
      "So let’s go back to R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "команда при настройке IPv6 на маршрутизаторе. Чтобы показать, что IPv4 тоже работает, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      392.56,
      402.72
    ],
    "en": [
      "Use EXIT to return to global config mode.&nbsp; And let’s enable it. IPV6 UNICAST-ROUTING.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я сделаю эхо-запрос IPv4 на ПК2. ПИНГ 192.168.2.2."
    ]
  },
  {
    "time": [
      402.72,
      412.88
    ],
    "en": [
      "Okay, now let’s go back to PC1 and try&nbsp; to ping PC2 again. PING 2001:DB8:0:2::2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, пинг работает, так что оба & nbsp; IPv4 и IPv6 работают."
    ]
  },
  {
    "time": [
      412.88,
      417.68
    ],
    "en": [
      "Okay, the ping works. So, make sure you&nbsp; don’t forget the IPV6 UNICAST-ROUTING&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, это все для этой лаборатории. Теперь возьмем & nbsp; взгляните на лабораторию в Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      417.68,
      425.04
    ],
    "en": [
      "command when configuring IPv6 on a router.&nbsp; Just to show that IPv4 is working as well,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот предварительная версия сегодняшней лабораторной работы Boson NetSim. & Nbsp; На самом деле, эта лаборатория не из обычного бозона & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      425.04,
      437.2
    ],
    "en": [
      "I’ll do an IPv4 ping to PC2. PING 192.168.2.2."
    ],
    "ru": [
      "NetSim для CCNA. Это из учебных программ Boson & nbsp; для CCNA, который они недавно выпустили. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      437.2,
      442.96
    ],
    "en": [
      "Okay, the ping works, so both&nbsp; IPv4 and IPv6 are working."
    ],
    "ru": [
      "По сути, это курс Бозона для CCNA & nbsp; и включает в себя дополнительный набор лабораторных работ, которые & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      442.96,
      450.88
    ],
    "en": [
      "Okay, that’s all for this lab. Now let’s take&nbsp; a look at a lab in Boson NetSim for CCNA."
    ],
    "ru": [
      "можно сделать в NetSim. Итак, я добавил ссылку & nbsp; к учебному пособию Boson в описании."
    ]
  },
  {
    "time": [
      450.88,
      456.48
    ],
    "en": [
      "Okay, here's today's Boson NetSim lab preview.&nbsp; Actually, this lab isn't from the regular Boson&nbsp;&nbsp;"
    ],
    "ru": [
      "Поэтому перейдите по этой ссылке, если хотите проверить & nbsp; ознакомьтесь с учебным программным обеспечением Boson и попробуйте его."
    ]
  },
  {
    "time": [
      456.48,
      462.88
    ],
    "en": [
      "NetSim for CCNA. It's from Boson's courseware&nbsp; for CCNA, which they released recently.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, лабораторная работа, которую мы собираемся выполнить, & nbsp; называется конфигурацией IPv6. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      462.88,
      468.08
    ],
    "en": [
      "It's essentially Boson's course for the CCNA&nbsp; and it includes an extra set of labs which&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот топология лаборатории. Как видите, & nbsp; IPv4 уже настроен на этих маршрутизаторах. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      468.08,
      473.36
    ],
    "en": [
      "you can do in NetSim. So, I've added a link&nbsp; to Boson's courseware in the description.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это команды, которые вам нужно знать. IPV6 & nbsp; АДРЕС, мы покрыли. IPV6 UNICAST-МАРШРУТИЗАЦИЯ, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      473.36,
      478.15999999999997
    ],
    "en": [
      "So follow that link if you want to check&nbsp; out Boson's courseware and try it out.&nbsp;&nbsp;"
    ],
    "ru": [
      "и есть еще кое-что, на что мы не смотрели & nbsp; пока нет. Это IP-адреса каждого & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      478.15999999999997,
      484.08
    ],
    "en": [
      "So, the lab we're going to do&nbsp; is called IPv6 Configuration.&nbsp;&nbsp;"
    ],
    "ru": [
      "устройство. Адреса IPv4, а затем IPv6 & nbsp; адреса, которые, я полагаю, мы скоро настроим. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      484.08,
      492.4
    ],
    "en": [
      "Here is the lab topology. As you can see,&nbsp; IPv4 is already configured on these routers.&nbsp;&nbsp;"
    ],
    "ru": [
      "И это задачи. Задача & nbsp; 1, настройте адреса IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      492.4,
      501.36
    ],
    "en": [
      "These are the commands you need to know. IPV6&nbsp; ADDRESS, we covered. IPV6 UNICAST-ROUTING,&nbsp;&nbsp;"
    ],
    "ru": [
      "И Задача 2: настройка IPv6 & nbsp; между Router1 и Router2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      501.36,
      507.52
    ],
    "en": [
      "and there are some others we haven't looked&nbsp; at yet. These are the IP addresses on each&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем настройте IPv6 между Router1 & nbsp; и Router3. Хорошо, давайте просто выполним Задачу 1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      507.52,
      515.44
    ],
    "en": [
      "device. The IPv4 addresses and then the IPv6&nbsp; addresses, which I assume we will configure soon.&nbsp;&nbsp;"
    ],
    "ru": [
      "или хотя бы часть задачи 1 для этой лабораторной работы & nbsp; предварительный просмотр. В этом задании вы изучите & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      515.44,
      521.68
    ],
    "en": [
      "And these are the tasks. Task&nbsp; 1, configure IPv6 addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "текущую конфигурацию сети и настройте & nbsp; соответствующие IPv6-адреса на интерфейсах. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      521.68,
      526.88
    ],
    "en": [
      "And Task 2, configure IPv6&nbsp; between Router1 and Router2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы будете выполнять действия только на физическом & nbsp; интерфейсы, указанные в таблице IP-адресов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      526.88,
      532.96
    ],
    "en": [
      "And then configure IPv6 between Router1&nbsp; and Router3. Okay, so let's just do Task 1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, понял. Итак, A, исследуйте исходную сеть & nbsp; конфигурация. Изучите текущую конфигурацию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      532.96,
      538.24
    ],
    "en": [
      "or at least part of task 1 for this lab&nbsp; preview. In this task you will examine the&nbsp;&nbsp;"
    ],
    "ru": [
      "всех роутеров. У IPv4-адресов & nbsp; назначенный каждому совпадению интерфейса маршрутизатора & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      538.24,
      544.24
    ],
    "en": [
      "current network configuration and configure the&nbsp; appropriate IPv6 addresses on the interfaces.&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адреса, указанные в IP-адресах & nbsp; стол? Хорошо, давайте быстро проверим это. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      544.24,
      550.16
    ],
    "en": [
      "You will only perform steps on the physical&nbsp; interfaces shown in the IP addresses table.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. Мне не нужен CONF T & nbsp; на самом деле. ПОКАЗАТЬ РАБОЧУЮ-КОНФИГУРАЦИЮ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      550.16,
      557.36
    ],
    "en": [
      "Okay, got it. So A, examine the initial network&nbsp; configuration. Examine the running config&nbsp;&nbsp;"
    ],
    "ru": [
      "Serial0 / 0, похоже, правильно. & Nbsp; Как насчет FastEthernet0 / 0? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      557.36,
      562.88
    ],
    "en": [
      "of all routers. Do the IPv4 addresses&nbsp; assigned to each router interface match&nbsp;&nbsp;"
    ],
    "ru": [
      "Это тоже правильно. Хорошо, теперь я & nbsp; откройте интерфейс командной строки Router2. ПОКАЗАТЬ ЗАПУСК. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      562.88,
      570.24
    ],
    "en": [
      "IP addresses shown in the IP addresses&nbsp; table? Okay, let's quickly check that out.&nbsp;&nbsp;"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      570.24,
      577.76
    ],
    "en": [
      "ENABLE. I don't need CONF T&nbsp; actually. SHOW RUNNING-CONFIG.&nbsp;&nbsp;"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      577.76,
      585.68
    ],
    "en": [
      "Serial0/0, that looks correct.&nbsp; How about FastEthernet0/0?&nbsp;&nbsp;"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      585.68,
      597.76
    ],
    "en": [
      "That is correct also. Okay, next I will&nbsp; open up the CLI of Router2. SHOW RUN.&nbsp;&nbsp;"
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      597.76,
      611.2
    ],
    "en": [
      "Here's FastEthernet0/0, and the IP address is&nbsp; correct, okay. Next up, Router3. ENABLE. SHOW RUN.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот FastEthernet0 / 0, а IP-адрес - & nbsp; правильно, ладно. Далее Router3. ВКЛЮЧИТЬ. ПОКАЗАТЬ ЗАПУСК. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      611.2,
      619.44
    ],
    "en": [
      "So, Serial0/0, that is correct.&nbsp; Serial0/1 is correct also.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, Serial0 / 0, это правильно. Serial0 / 1 также верен. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      619.44,
      628.48
    ],
    "en": [
      "Okay, and finally let's check on Router4.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, и, наконец, давайте проверим Router4. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      628.48,
      638.08
    ],
    "en": [
      "So, we are checking Serial0/0. That is correct.&nbsp; Okay, so all of the IP addresses are correct.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, проверяем Serial0 / 0. Это правильно. & Nbsp; Итак, все IP-адреса верны. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      638.08,
      644.32
    ],
    "en": [
      "What types of IP addresses are&nbsp; currently assigned to the routers?&nbsp;&nbsp;"
    ],
    "ru": [
      "Какие типы IP-адресов & nbsp; в настоящее время назначены маршрутизаторам? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      644.32,
      652.96
    ],
    "en": [
      "What types...IPv4, I guess. These are public IPv4&nbsp; addresses. I will tell you later in the course&nbsp;&nbsp;"
    ],
    "ru": [
      "Какие типы ... IPv4, наверное. Это общедоступные IPv4 & nbsp; адреса. Я расскажу вам позже, в курсе & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      652.96,
      661.68
    ],
    "en": [
      "about public versus private IPv4 addresses, but&nbsp; these are not private addresses. They are public.&nbsp;&nbsp;"
    ],
    "ru": [
      "об общедоступных и частных IPv4-адресах, но & nbsp; это не частные адреса. Они общедоступны. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      661.68,
      672.0
    ],
    "en": [
      "What is the theoretical maximum number of unique&nbsp; IP addresses of this type that can be assigned?&nbsp;&nbsp;"
    ],
    "ru": [
      "Какое теоретическое максимальное количество уникальных & nbsp; Какие IP-адреса этого типа можно назначить? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      672.0,
      680.08
    ],
    "en": [
      "Of this type, I guess they might mean IPv4,&nbsp; so that is roughly 4 billion, over 4 billion.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я предполагаю, что под этим типом они могут означать IPv4, & nbsp; так что это примерно 4 миллиарда, более 4 миллиардов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      680.08,
      686.96
    ],
    "en": [
      "Actually, let me check Boson's answers for this&nbsp; one. So I will scroll down. Under the lab tasks&nbsp;&nbsp;"
    ],
    "ru": [
      "На самом деле, позвольте мне проверить ответы Boson на этот & nbsp; один. Так что я прокручу вниз. Под лабораторными задачами & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      686.96,
      694.8
    ],
    "en": [
      "there are lab solutions. Okay, so the answer&nbsp; to question 2 was actually, the type is IPv4.&nbsp;&nbsp;"
    ],
    "ru": [
      "есть лабораторные решения. Итак, ответ & nbsp; на вопрос 2 был тип IPv4. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      694.8,
      703.44
    ],
    "en": [
      "It's not asking specifically which type of&nbsp; IPv4 address. It means are they IPv4 or IPv6?&nbsp;&nbsp;"
    ],
    "ru": [
      "Он не спрашивает, какой именно тип & nbsp; IPv4-адрес. Значит, это IPv4 или IPv6? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      703.44,
      713.68
    ],
    "en": [
      "Okay so, and I was correct, the maximum number&nbsp; of unique IP addresses is over 4 billion.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, и я был прав, максимальное число & nbsp; уникальных IP-адресов составляет более 4 миллиардов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      713.68,
      720.32
    ],
    "en": [
      "Okay, number 4. Why is there a need to&nbsp; change this method of IP addressing?&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, номер 4. Зачем нужно & nbsp; изменить этот метод IP-адресации? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      720.32,
      726.56
    ],
    "en": [
      "As I covered in the lecture video, there just&nbsp; aren't enough IPv4 addresses for the modern world,&nbsp;&nbsp;"
    ],
    "ru": [
      "Как я уже говорил в видео лекции, там просто & nbsp; в современном мире недостаточно адресов IPv4, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      726.56,
      729.76
    ],
    "en": [
      "where everything is interconnected,&nbsp; everything is connected to the Internet.&nbsp;&nbsp;"
    ],
    "ru": [
      "где все взаимосвязано, & nbsp; все подключено к Интернету."
    ]
  },
  {
    "time": [
      729.76,
      737.2
    ],
    "en": [
      "We just need more addresses. Okay, verify&nbsp; IPv4 connectivity between Router3 and Router4&nbsp;&nbsp;"
    ],
    "ru": [
      "Нам просто нужно больше адресов. Хорошо, подтвердите & nbsp; Связь IPv4 между Router3 и Router4 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      737.2,
      741.76
    ],
    "en": [
      "by issuing the ping...okay,&nbsp; issuing pings between them.&nbsp;&nbsp;"
    ],
    "ru": [
      "выдав команду ping ... хорошо, & nbsp; выдача эхо-запросов между ними. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      741.76,
      753.92
    ],
    "en": [
      "Okay, so let's check. I'm already on Router4,&nbsp; so I'll ping from here first. PING 180...this&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давай проверим. Я уже использую Router4, & nbsp; так что я сначала пингую отсюда. ПИНГ 180 ... это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      753.92,
      757.6
    ],
    "en": [
      "is pinging from Router4 to Router3.&nbsp;&nbsp;"
    ],
    "ru": [
      "отправляет эхо-запрос от маршрутизатора 4 к маршрутизатору 3. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      757.6,
      766.0
    ],
    "en": [
      "And it works. So the ping from Router3 to Router4&nbsp; should work as well, but I'll do that anyway.&nbsp;&nbsp;"
    ],
    "ru": [
      "И это работает. Таким образом, эхо-запрос от Router3 к Router4 & nbsp; тоже должно работать, но я все равно это сделаю. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      766.0,
      773.68
    ],
    "en": [
      "Okay, looks good. Okay, Part&nbsp; B. Configure IPv6 addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, выглядит хорошо. Хорошо, Часть & nbsp; Б. Настройте адреса IPv6. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      773.68,
      779.12
    ],
    "en": [
      "IPv6 addresses will eventually replace&nbsp; the IPv4 addresses currently in use today.&nbsp;&nbsp;"
    ],
    "ru": [
      "Адреса IPv6 со временем заменят & nbsp; адреса IPv4, используемые в настоящее время. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      779.12,
      785.12
    ],
    "en": [
      "What are the expected benefits of this new type&nbsp; of IP addressing? Okay, so the only benefit I've&nbsp;&nbsp;"
    ],
    "ru": [
      "Каковы ожидаемые преимущества этого нового типа & nbsp; IP-адресации? Хорошо, единственное преимущество, которое у меня & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      785.12,
      792.0
    ],
    "en": [
      "introduced so far is that there are many many&nbsp; many times more IPv6 addresses available than&nbsp;&nbsp;"
    ],
    "ru": [
      "введено до сих пор, что есть много много & nbsp; Доступно во много раз больше адресов IPv6, чем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      792.0,
      798.24
    ],
    "en": [
      "IPv4 addresses. And really, that's the&nbsp; main reason, that's the main benefit.&nbsp;&nbsp;"
    ],
    "ru": [
      "Адреса IPv4. И действительно, это & ​​nbsp; главная причина, это главное преимущество. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      798.24,
      803.36
    ],
    "en": [
      "What are some of the major differences?&nbsp; For example, an IPv6 address is 128 bits,&nbsp;&nbsp;"
    ],
    "ru": [
      "В чем заключаются основные отличия? & Nbsp; Например, IPv6-адрес составляет 128 бит, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      803.36,
      810.16
    ],
    "en": [
      "versus an IPv4 address. There are of course&nbsp; other differences, but we'll cover those later.&nbsp;&nbsp;"
    ],
    "ru": [
      "по сравнению с IPv4-адресом. Конечно, есть & nbsp; другие отличия, но мы рассмотрим их позже."
    ]
  },
  {
    "time": [
      810.16,
      816.96
    ],
    "en": [
      "What is the theoretical maximum number?&nbsp; Okay, it is a huge number that I cannot say.&nbsp;&nbsp;"
    ],
    "ru": [
      "Какое теоретическое максимальное число? & Nbsp; Ладно, это огромное число, которого я не могу сказать. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      816.96,
      823.36
    ],
    "en": [
      "Let's go down to the answer&nbsp; and see that once more.&nbsp;&nbsp;"
    ],
    "ru": [
      "Перейдем к ответу & nbsp; и убедитесь в этом еще раз. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      823.36,
      827.52
    ],
    "en": [
      "Well here it is. 3.4 times 10 to the power of 38,&nbsp;&nbsp;"
    ],
    "ru": [
      "Ну вот оно. 3,4 умножить на 10 в степени 38, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      827.52,
      835.84
    ],
    "en": [
      "which is a just ridiculously&nbsp; huge number of IP addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "который просто смехотворно & nbsp; огромное количество IP-адресов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      835.84,
      840.16
    ],
    "en": [
      "Briefly describe some of the techniques that&nbsp; will allow IPv4 addressing to co-exist with&nbsp;&nbsp;"
    ],
    "ru": [
      "Кратко опишите некоторые методы, которые & nbsp; позволит IPv4-адресации сосуществовать с & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      840.16,
      847.28
    ],
    "en": [
      "IPv6 addressing. Okay, well just in this&nbsp; previous lab I introduced the idea of&nbsp;&nbsp;"
    ],
    "ru": [
      "Адресация IPv6. Ладно, ну как раз в этом & nbsp; В предыдущей лабораторной работе я представил идею & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      847.28,
      854.0
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
      847.28,
      854.0
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
      854.0,
      859.2
    ],
    "en": [
      "Okay next, enable IPv6 packet forwarding&nbsp; on Router3 and Router4. Okay, that's easy.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, затем включите пересылку пакетов IPv6 & nbsp; на Router3 и Router4. Хорошо, это просто. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      859.2,
      873.04
    ],
    "en": [
      "Here on Router3, CONF T. IPV6 UNICAST-ROUTING.&nbsp; And on Router4, CONF T. IPV6 UNICAST-ROUTING.&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь, на Router3, CONF T. IPV6 UNICAST-ROUTING. & Nbsp; А на Router4 CONF T. IPV6 UNICAST-ROUTING. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      873.04,
      877.92
    ],
    "en": [
      "Okay, finally, I think I'll&nbsp; end this lab here for now,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, наконец-то, думаю, я & nbsp; завершите эту лабораторную работу здесь, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      877.92,
      884.48
    ],
    "en": [
      "configure static IPv6 addresses for Router3's&nbsp; Serial0/1 interface and Router4's Serial0/0&nbsp;&nbsp;"
    ],
    "ru": [
      "настроить статические IPv6-адреса для & nbsp; маршрутизатора Router3; Интерфейс Serial0 / 1 и Serial0 / 0 маршрутизатора Router4 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      884.48,
      896.0
    ],
    "en": [
      "interface. Refer to the IP addresses table. Okay,&nbsp; so Router3's Serial0/1, Router4's Serial0/0.&nbsp;&nbsp;"
    ],
    "ru": [
      "интерфейс. См. Таблицу IP-адресов. Хорошо, & nbsp; так что Serial0 / 1 Router3, Serial0 / 0 Router4 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      896.0,
      906.88
    ],
    "en": [
      "First, on Router3. INTERFACE S0/0.&nbsp; And the command is IPV6 ADDRESS,&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, на Router3. ИНТЕРФЕЙС S0 / 0. & nbsp; И команда - АДРЕС IPV6, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      906.88,
      923.6
    ],
    "en": [
      "and that will be 2001:1:3:1::1/64. Okay, and that&nbsp; should be it for Router3. Next, Router4. INTERFACE&nbsp;&nbsp;"
    ],
    "ru": [
      "и это будет 2001: 1: 3: 1 :: 1/64. Хорошо, и это & ​​nbsp; это должно быть для Router3. Далее Router4. ИНТЕРФЕЙС & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      923.6,
      932.56
    ],
    "en": [
      "S0/0. Actually, wait...okay,&nbsp; I configured the incorrect&nbsp;&nbsp;"
    ],
    "ru": [
      "S0 / 0. Вообще-то, подожди ... ладно, & nbsp; Я настроил неверный & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      932.56,
      940.88
    ],
    "en": [
      "interface on Router3. So I will 'NO' that command&nbsp; to cancel it out, and let's go to serial0/1.&nbsp;&nbsp;"
    ],
    "ru": [
      "интерфейс на Router3. Поэтому я не буду \"НЕТ\" этой команде & nbsp; чтобы отменить его, и перейдем к serial0 / 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      940.88,
      949.12
    ],
    "en": [
      "Use the up arrow and enter the same IPv6&nbsp; address again. Okay, that's correct. Okay now&nbsp;&nbsp;"
    ],
    "ru": [
      "Используйте стрелку вверх и введите тот же IPv6 & nbsp; обращайтесь снова. Ладно, правильно. Хорошо, теперь & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      949.12,
      966.0
    ],
    "en": [
      "Router4. IPV6 ADDRESS 2001:1:3:1::2/64.&nbsp; Okay so that should be it. Let's try a ping&nbsp;&nbsp;"
    ],
    "ru": [
      "Маршрутизатор 4. АДРЕС IPV6 2001: 1: 3: 1 :: 2 / 64. & nbsp; Ладно, так и должно быть. Попробуем пинг & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      966.0,
      978.4
    ],
    "en": [
      "from Router4 to Router3. So I will PING IPV6,&nbsp; and now Router3's address, 2001:1:3:1::1.&nbsp;&nbsp;"
    ],
    "ru": [
      "с Router4 на Router3. Итак, я сделаю PING IPV6, & nbsp; а теперь адрес Router3, 2001: 1: 3: 1 :: 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      978.4,
      985.6
    ],
    "en": [
      "And the ping works. Okay, looks good. So that is&nbsp; today's Boson NetSim lab preview. Again, this is a&nbsp;&nbsp;"
    ],
    "ru": [
      "И пинг работает. Хорошо, выглядит хорошо. Итак, это & ​​nbsp; превью сегодняшней лаборатории Boson NetSim. Опять же, это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      985.6,
      992.64
    ],
    "en": [
      "special lab from Boson's courseware for CCNA. So&nbsp; if you want to check out Boson's CCNA courseware,&nbsp;&nbsp;"
    ],
    "ru": [
      "специальная лаборатория из учебного ПО Boson для CCNA. Итак, & nbsp; если вы хотите ознакомиться с учебными программами CCNA от Boson, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      992.64,
      1000.64
    ],
    "en": [
      "follow the link in the video description. And&nbsp; you can also download a free sample from Boson."
    ],
    "ru": [
      "перейдите по ссылке в описании видео. И & NBSP; вы также можете скачать бесплатный образец с сайта Boson."
    ]
  },
  {
    "time": [
      1000.64,
      1005.52
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
      1005.52,
      1009.12
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
      1009.12,
      1016.56
    ],
    "en": [
      "Thank you to Magrathea, Njabulo, Benjamin, Deepak,&nbsp; Tshepiso, Justin, Loki, TheGunguy, Nil, Prakaash,&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо Магратее, Нджабуло, Бенджамину, Дипаку, & nbsp; Тшеписо, Джастин, Локи, Гунгуй, Нил, Пракааш, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1016.56,
      1024.0
    ],
    "en": [
      "Nasir, Erlison, Apogee, Wasseem, Marko, Florian,&nbsp; Daming, Kone, Joshua, Jhilmar, Samil, Ed, Value,&nbsp;&nbsp;"
    ],
    "ru": [
      "Насир, Эрлисон, Апогей, Вассим, Марко, Флориан, & nbsp; Даминг, Коне, Джошуа, Джилмар, Самил, Эд, Вэлью, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1024.0,
      1030.56
    ],
    "en": [
      "John, Funnydart, Scott, Hassan, Gerrard, Marek,&nbsp; Velvijaykum, C Mohd, Johan, Mark, Yousif,&nbsp;&nbsp;"
    ],
    "ru": [
      "Джон, Фаннидарт, Скотт, Хассан, Джеррард, Марек, & nbsp; Велвиджайкум, К. Мохд, Йохан, Марк, Юсиф, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1030.56,
      1036.32
    ],
    "en": [
      "Sidi, Boson Software, Charlesetta, Devin, Lito,&nbsp; Yonatan, and Vance. Sorry if I pronounced your&nbsp;&nbsp;"
    ],
    "ru": [
      "Sidi, Boson Software, Charlesetta, Devin, Lito, & nbsp; Йонатан и Вэнс. Извините, если я произнес ваше & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1036.32,
      1041.84
    ],
    "en": [
      "name incorrectly, but thank you so much for&nbsp; your support. One of you is still displaying as&nbsp;&nbsp;"
    ],
    "ru": [
      "имя неверно, но большое спасибо за & nbsp; твоя поддержка. Один из вас по-прежнему отображается как & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1041.84,
      1047.6
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
      1047.6,
      1053.84
    ],
    "en": [
      "This is the list of JCNP-level members at the&nbsp; time of recording by the way, October 10th 2020,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на & nbsp; время записи, кстати, 10 октября 2020 г., & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1053.84,
      1060.4
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
      1060.4,
      1063.52
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
      1063.52,
      1069.28
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
      1069.28,
      1074.88
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
      1074.88,
      1074.88
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]