let objs = [
  {
    "time": [
      1.44,
      7.04
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
      7.04,
      11.44
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
      11.44,
      16.24
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
      16.24,
      20.8
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
      20.8,
      26.48
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
      26.48,
      31.92
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
      31.92,
      36.32
    ],
    "en": [
      "click the link in the video description to&nbsp; check it out. It’s a network simulator like&nbsp;&nbsp;"
    ],
    "ru": [
      "щелкните ссылку в описании видео, чтобы & nbsp; проверить это. Это сетевой симулятор, например & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      36.32,
      40.0
    ],
    "en": [
      "packet tracer, but it’s even better,&nbsp; and it includes all of these guided&nbsp;&nbsp;"
    ],
    "ru": [
      "пакетный трассировщик, но он даже лучше, & nbsp; и он включает в себя все эти направляемые & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      40.0,
      44.16
    ],
    "en": [
      "labs to not only help you get hands-on&nbsp; practice configuring and troubleshooting,&nbsp;&nbsp;"
    ],
    "ru": [
      "лаборатории, которые не только помогут вам на практике & nbsp; попрактикуйтесь в настройке и устранении неполадок, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      44.16,
      49.52
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
      49.52,
      54.16
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
      54.16,
      60.4
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
      60.4,
      66.8
    ],
    "en": [
      "In this lab we will configure a couple extended&nbsp; ACLs to fulfill the network policies listed here.&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы настроим пару расширенных & nbsp; ACL для выполнения перечисленных здесь сетевых политик. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      66.8,
      76.88
    ],
    "en": [
      "Hosts in 172.16.2.0/24 can’t communicate with&nbsp; PC1. Host in 172.16.1.0/24 can’t access the&nbsp;&nbsp;"
    ],
    "ru": [
      "Хосты в 172.16.2.0/24 не могут связываться с & nbsp; ПК1. Хост в 172.16.1.0/24 не может получить доступ к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      76.88,
      82.24
    ],
    "en": [
      "DNS service on SRV1. DNS is something we&nbsp; will cover later in the course, but even&nbsp;&nbsp;"
    ],
    "ru": [
      "Служба DNS на SRV1. DNS - это то, что мы & nbsp; расскажу позже в курсе, но даже & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      82.24,
      87.68
    ],
    "en": [
      "if you don’t totally understand the protocol&nbsp; yet you can use extended ACLs to block it.&nbsp;&nbsp;"
    ],
    "ru": [
      "если вы не совсем понимаете протокол & nbsp; тем не менее, вы можете использовать расширенные списки контроля доступа, чтобы заблокировать его. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      87.68,
      94.64
    ],
    "en": [
      "The third requirement is that hosts in&nbsp; 172.16.2.0/24 can’t access the HTTP or&nbsp;&nbsp;"
    ],
    "ru": [
      "Третье требование: хосты в & nbsp; 172.16.2.0/24 не может получить доступ к HTTP или & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      94.64,
      105.6
    ],
    "en": [
      "HTTPS services on SRV2. As you probably know by&nbsp; now, HTTP and HTTPS are used to access web pages."
    ],
    "ru": [
      "Сервисы HTTPS на SRV2. Как вы, наверное, знаете, автор & nbsp; теперь HTTP и HTTPS используются для доступа к веб-страницам."
    ]
  },
  {
    "time": [
      105.6,
      110.16
    ],
    "en": [
      "As I have said a few times, ACL configuration&nbsp; is flexible and there are often multiple&nbsp;&nbsp;"
    ],
    "ru": [
      "Как я уже говорил несколько раз, конфигурация ACL & nbsp; является гибким и часто бывает несколько & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      110.16,
      117.36
    ],
    "en": [
      "valid solutions. In this video I’ll show you my&nbsp; solution. I will configure two ACLs on R1. One&nbsp;&nbsp;"
    ],
    "ru": [
      "допустимые решения. В этом видео я покажу вам мои & nbsp; решение. Я настрою два ACL на R1. Один & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      117.36,
      124.32
    ],
    "en": [
      "to fulfill the first and third requirements, and&nbsp; then another to fulfill the second requirement.&nbsp;&nbsp;"
    ],
    "ru": [
      "для выполнения первого и третьего требований, и & nbsp; затем еще один, чтобы выполнить второе требование. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      124.32,
      129.6
    ],
    "en": [
      "I’ll start with the second&nbsp; requirement, hosts in 172.16.1.0/24&nbsp;&nbsp;"
    ],
    "ru": [
      "Я начну со второго & nbsp; требование, хосты в 172.16.1.0/24&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      129.6,
      138.32
    ],
    "en": [
      "can’t access the DNS service on SRV1. First, let&nbsp; me briefly show how DNS works. I’ll go on PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "не может получить доступ к службе DNS на SRV1. Во-первых, позвольте & nbsp; я вкратце покажу, как работает DNS. Я пойду на ПК1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      138.32,
      144.4
    ],
    "en": [
      "Then open the config tab, and you can&nbsp; see that I have specified 192.168.1.100,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем откройте вкладку конфигурации, и вы сможете & nbsp; видите, что я указал 192.168.1.100, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      144.4,
      152.32
    ],
    "en": [
      "SRV1, as PC1’s DNS server. DNS, Domain Name&nbsp; Service, let’s you use specify names instead of IP&nbsp;&nbsp;"
    ],
    "ru": [
      "SRV1, как DNS-сервер ПК1. DNS, доменное имя & nbsp; Сервис, позвольте вам использовать указанные имена вместо IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      152.32,
      160.0
    ],
    "en": [
      "addresses as destinations. Let me show an example.&nbsp; Go to desktop, then command prompt. Let’s try a&nbsp;&nbsp;"
    ],
    "ru": [
      "адреса как места назначения. Приведу пример. & Nbsp; Перейдите на рабочий стол, затем в командную строку. Давайте попробуем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      160.0,
      169.6
    ],
    "en": [
      "ping to PC2. However, instead of pinging PC2’s&nbsp; IP address, I’ll specify the name PC2. PING PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "пинг к ПК2. Однако вместо проверки связи & nbsp; IP-адрес, я укажу имя ПК2. PING PC2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      169.6,
      174.56
    ],
    "en": [
      "Now, this ping will take a little longer&nbsp; than usual. Currently PC1 is contacting SRV1&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь этот пинг займет немного больше времени & nbsp; чем обычно. В настоящее время ПК1 связывается с SRV1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      174.56,
      181.44
    ],
    "en": [
      "to learn what the IP address of PC2 is. Although&nbsp; using names like google.com or youtube.com&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы узнать IP-адрес ПК2. Хотя & nbsp; используя такие имена, как google.com или youtube.com & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      181.44,
      186.8
    ],
    "en": [
      "is easier than remembering IP addresses for us&nbsp; humans, the computers themselves still need to&nbsp;&nbsp;"
    ],
    "ru": [
      "для нас проще, чем запоминать IP-адреса & nbsp; люди, сами компьютеры по-прежнему нуждаются в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      186.8,
      194.88
    ],
    "en": [
      "know the IP address. That’s what DNS is for. DNS&nbsp; servers contain a list of names and IP addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "знать IP-адрес. Вот для чего нужен DNS. DNS & nbsp; серверы содержат список имен и IP-адресов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      194.88,
      200.96
    ],
    "en": [
      "As you can see, although I specified&nbsp; PING PC2, PC1 asked SRV1 what the IP&nbsp;&nbsp;"
    ],
    "ru": [
      "Как видите, хотя я указал & nbsp; PING PC2, PC1 спросил SRV1, какой IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      200.96,
      209.52
    ],
    "en": [
      "address of PC2 is and learned that it&nbsp; is 172.16.1.2, as is displayed here."
    ],
    "ru": [
      "адрес ПК2 есть и узнал, что это & ​​nbsp; это 172.16.1.2, как показано здесь."
    ]
  },
  {
    "time": [
      209.52,
      216.48
    ],
    "en": [
      "Okay, we’ll cover DNS later, now&nbsp; let’s go on R1 and configure that ACL.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, мы поговорим о DNS позже, а сейчас & nbsp; Давайте перейдем к маршрутизатору R1 и настроим этот ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      216.48,
      225.04
    ],
    "en": [
      "ENABLE. CONF T. I’ll configure a numbered&nbsp; ACL. IP ACCESS-LIST EXTENDED 100.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Я настрою пронумерованный & nbsp; ACL. СПИСОК ДОСТУПА IP РАСШИРЕН НА 100. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      225.04,
      231.6
    ],
    "en": [
      "So, let’s deny DNS. DENY, now which protocol&nbsp; should we deny? If you remember correctly,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, откажемся от DNS. ОТКАЗАТЬ, теперь какой протокол & nbsp; мы должны отрицать? Если вы правильно помните, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      231.6,
      239.36
    ],
    "en": [
      "DNS uses both TCP and UDP. Usually UDP is used,&nbsp; however there are cases where TCP is used too,&nbsp;&nbsp;"
    ],
    "ru": [
      "DNS использует как TCP, так и UDP. Обычно используется UDP, & nbsp; однако бывают случаи, когда также используется TCP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      239.36,
      249.92
    ],
    "en": [
      "so let’s block both, I’ll create an entry for UDP&nbsp; first. Then the source IP, 172.16.1.0 0.0.0.255.&nbsp;&nbsp;"
    ],
    "ru": [
      "так что давайте заблокируем оба, я создам запись для UDP & nbsp; первый. Затем исходный IP-адрес 172.16.1.0 0.0.0.255. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      249.92,
      257.52
    ],
    "en": [
      "We don’t need to specify the source port, so&nbsp; next is the destination IP. HOST 192.168.1.100.&nbsp;&nbsp;"
    ],
    "ru": [
      "Нам не нужно указывать исходный порт, поэтому & nbsp; далее - IP-адрес назначения. ХОСТ 192.168.1.100. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      257.52,
      266.24
    ],
    "en": [
      "And finally the port number. Do you remember&nbsp; DNS’ port number? It’s 53, so EQ 53.&nbsp;&nbsp;"
    ],
    "ru": [
      "И, наконец, номер порта. Вы помните & nbsp; Номер порта DNS? Сейчас 53, так что EQ 53. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      266.24,
      273.2
    ],
    "en": [
      "Okay, now I’ll use the up arrow, and just change&nbsp; UDP to TCP, there’s the second entry. Finally,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь я воспользуюсь стрелкой вверх и просто изменим & nbsp; UDP в TCP, есть вторая запись. Наконец, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      273.2,
      280.0
    ],
    "en": [
      "I’ll configure PERMIT IP ANY ANY to allow&nbsp; other traffic. Now let’s apply the ACL.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я настрою РАЗРЕШИТЬ IP ЛЮБОЙ ЛЮБОЙ, чтобы разрешить & nbsp; другой трафик. Теперь применим ACL. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      280.0,
      285.84000000000003
    ],
    "en": [
      "Following the rule of applying it close to&nbsp; the source, I’ll apply it inbound on G0/0.&nbsp;&nbsp;"
    ],
    "ru": [
      "Следуя правилу нанесения, близкому к & nbsp; источник, я применю его для входящего трафика G0 / 0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      285.84000000000003,
      294.4
    ],
    "en": [
      "INTERFACE G0/0. IP ACCESS-GROUP 100 IN. Okay, we&nbsp; have created and applied the ACL, let’s see if it&nbsp;&nbsp;"
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 0. IP ACCESS-GROUP 100 IN. Хорошо, мы & nbsp; создали и применили ACL, давайте посмотрим, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      294.4,
      302.4
    ],
    "en": [
      "works. I’ll return to PC1. Let’s try to ping&nbsp; SRV2 this time. I’ll try to ping it by name.&nbsp;&nbsp;"
    ],
    "ru": [
      "работает. Я вернусь к ПК1. Попробуем пинговать & nbsp; SRV2 на этот раз. Я попробую пинговать его по имени. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      302.4,
      309.12
    ],
    "en": [
      "PING SRV2. Now, PC1 shouldn’t be able to&nbsp; learn SRV2’s IP address. I’ll click on this&nbsp;&nbsp;"
    ],
    "ru": [
      "ПИНГ SRV2. Теперь компьютер PC1 не может & nbsp; узнать IP-адрес SRV2. Я нажму на это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      309.12,
      314.8
    ],
    "en": [
      "arrow to skip forward 30 seconds in packet&nbsp; tracer, and now when I return to PC1 you can&nbsp;&nbsp;"
    ],
    "ru": [
      "стрелка для перехода на 30 секунд вперед в пакете & nbsp; tracer, и теперь, когда я вернусь к ПК1, вы сможете & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      314.8,
      321.92
    ],
    "en": [
      "see that it could not find host SRV2. So, PC1&nbsp; wasn’t able to access the DNS service on SRV1&nbsp;&nbsp;"
    ],
    "ru": [
      "вижу, что он не может найти хост SRV2. Итак, PC1 & nbsp; не удалось получить доступ к службе DNS на SRV1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      321.92,
      332.64
    ],
    "en": [
      "to learn SRV2’s IP address. How about if I just&nbsp; ping SRV2’s IP address? PING 192.168.2.100.&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы узнать IP-адрес SRV2. Как насчет того, чтобы я просто & nbsp; ping IP-адрес SRV2? ПИНГ 192.168.2.100. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      332.64,
      338.15999999999997
    ],
    "en": [
      "As usual the first one or two might fail because&nbsp; the ARP process is a little slow in packet tracer,&nbsp;&nbsp;"
    ],
    "ru": [
      "Как обычно, первые один или два могут выйти из строя, потому что & nbsp; процесс ARP немного медленный в трассировщике пакетов, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      338.15999999999997,
      345.12
    ],
    "en": [
      "but then the ping succeeds. Okay, so we&nbsp; have fulfilled the second requirement."
    ],
    "ru": [
      "но затем пинг проходит успешно. Итак, мы & nbsp; выполнили второе требование."
    ]
  },
  {
    "time": [
      345.12,
      350.24
    ],
    "en": [
      "Now let’s make an ACL for the first and third&nbsp; requirements. They both have the same source,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь давайте создадим ACL для первого и третьего & nbsp; требования. У них обоих один и тот же источник, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      350.24,
      361.28
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
      350.24,
      361.28
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
      361.28,
      365.2
    ],
    "en": [
      "So, that first requirement is a&nbsp; simple deny statement for destination&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, первое требование - & nbsp; простое заявление об отказе для пункта назначения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      365.2,
      379.44
    ],
    "en": [
      "PC1. DENY IP 172.16.2.0 0.0.0.255 host 172.16.1.1.&nbsp; That’s it. We’re denying all traffic, so I used IP&nbsp;&nbsp;"
    ],
    "ru": [
      "ПК1. ОТКАЗАТЬ IP 172.16.2.0 0.0.0.255 хост 172.16.1.1. & Nbsp; Вот и все. Мы запрещаем весь трафик, поэтому я использовал IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      379.44,
      387.84
    ],
    "en": [
      "as the protocol. Now let’s prevent this subnet&nbsp; from using the HTTP or HTTPS services on SRV2.&nbsp;&nbsp;"
    ],
    "ru": [
      "как протокол. Теперь давайте запретим эту подсеть & nbsp; от использования служб HTTP или HTTPS на SRV2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      387.84,
      394.0
    ],
    "en": [
      "First, let me go on PC3 and show you a website.&nbsp; I configured an entry for ‘cisco.com’ on the&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, позвольте мне перейти на PC3 и показать вам веб-сайт. & Nbsp; Я настроил запись для cisco.com на странице & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      394.0,
      400.32
    ],
    "en": [
      "DNS server, SRV1, so if I use the web&nbsp; browser here on PC3 and type the URL&nbsp;&nbsp;"
    ],
    "ru": [
      "DNS-сервер, SRV1, поэтому, если я использую Интернет, & nbsp; браузер здесь, на ПК3, и введите URL & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      400.32,
      407.52
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
      400.32,
      407.52
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
      407.52,
      413.28
    ],
    "en": [
      "a sample web page which is in Packet Tracer by&nbsp; default. After we configure and apply the ACL,&nbsp;&nbsp;"
    ],
    "ru": [
      "образец веб-страницы в Packet Tracer от & nbsp; дефолт. После настройки и применения ACL & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      413.28,
      420.24
    ],
    "en": [
      "we shouldn’t be able to access this web&nbsp; page. Now I’ll return to R1. Let’s deny HTTP&nbsp;&nbsp;"
    ],
    "ru": [
      "у нас не должно быть доступа к этому Интернету & nbsp; страница. Теперь вернусь к R1. Давайте откажемся от HTTP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      420.24,
      435.44
    ],
    "en": [
      "and HTTPS. DENY TCP, because both HTTP and HTTPS&nbsp; use TCP. Then the source IP. 172.16.2.0 0.0.0.255.&nbsp;&nbsp;"
    ],
    "ru": [
      "и HTTPS. ОТКАЗАТЬ TCP, потому что и HTTP, и HTTPS & nbsp; использовать TCP. Затем исходный IP. 172.16.2.0 0.0.0.255. & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      435.44,
      445.76
    ],
    "en": [
      "Then the destination IP. HOST 192.168.2.100.&nbsp; Finally I’ll specify HTTP. EQ 80. And I’ll add&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем IP-адрес назначения. ХОЗЯИН 192.168.2.100. & Nbsp; Наконец, я укажу HTTP. EQ 80. И я добавлю & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      445.76,
      453.28
    ],
    "en": [
      "another entry and change the port number to 443,&nbsp; for HTTPS. Finally let’s permit all other traffic.&nbsp;&nbsp;"
    ],
    "ru": [
      "другую запись и измените номер порта на 443, & nbsp; для HTTPS. Наконец, разрешим весь остальной трафик. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      453.28,
      461.68
    ],
    "en": [
      "PERMIT IP ANY ANY. Now let’s apply it close to&nbsp; the source, inbound on G0/1 is best. INTERFACE&nbsp;&nbsp;"
    ],
    "ru": [
      "РАЗРЕШИТЬ IP ЛЮБОЙ. Теперь применим его к & nbsp; источник, входящий на G0 / 1, лучше всего. ИНТЕРФЕЙС & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      461.68,
      472.96
    ],
    "en": [
      "G0/1. IP ACCESS-GROUP 101 in. Okay, let’s try to&nbsp; access that web page again, I’ll return to PC3.&nbsp;&nbsp;"
    ],
    "ru": [
      "G0 / 1. IP ACCESS-GROUP 101 in. Хорошо, давайте попробуем & nbsp; снова зайдя на эту веб-страницу, я вернусь к ПК3. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      472.96,
      480.32
    ],
    "en": [
      "First I’ll close the web browser and open&nbsp; it again. Now let’s try to access cisco.com.&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я закрою веб-браузер и открою & nbsp; это снова. Теперь попробуем зайти на cisco.com. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      480.32,
      485.6
    ],
    "en": [
      "No webpage appears, PC3 is being&nbsp; blocked by the ACL we configured on R1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Веб-страница не отображается, PC3 & nbsp; заблокирован ACL, настроенным на маршрутизаторе R1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      485.6,
      490.4
    ],
    "en": [
      "and the request times out. Now,&nbsp; how about the first requirement?&nbsp;&nbsp;"
    ],
    "ru": [
      "и время ожидания запроса истекло. Теперь & nbsp; как насчет первого требования? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      490.4,
      496.64
    ],
    "en": [
      "Let’s go to the command prompt here on PC3&nbsp; and try to ping PC1. This subnet is still&nbsp;&nbsp;"
    ],
    "ru": [
      "Перейдем к командной строке здесь, на PC3 & nbsp; и попробуйте пинговать ПК1. Эта подсеть по-прежнему & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      496.64,
      505.36
    ],
    "en": [
      "able to use the DNS service on SRV1, so I’ll&nbsp; try to ping it by name. PING PC1. However,&nbsp;&nbsp;"
    ],
    "ru": [
      "может использовать службу DNS на SRV1, поэтому я & nbsp; попробуйте пинговать его по имени. ПИНГ ПК1. Однако & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      505.36,
      513.76
    ],
    "en": [
      "the ACL we just configured on R1 prevents PC3 from&nbsp; pinging PC1. But a ping to PC2 should work. PING&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL, который мы только что настроили на маршрутизаторе R1, не позволяет компьютеру PC3 & nbsp; pinging PC1. Но пинг к ПК2 должен работать. ПИНГ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      513.76,
      523.52
    ],
    "en": [
      "PC2. Wait a bit for PC3 to learn PC2’s IP address&nbsp; from SRV1, and then the ping is successful.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПК2. Подождите, пока ПК3 узнает IP-адрес ПК2 & nbsp; от SRV1, а затем эхо-запрос будет успешным. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      523.52,
      530.88
    ],
    "en": [
      "So, we have satisfied all requirements.&nbsp; Finally let’s just view the ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, мы выполнили все требования. Наконец, давайте просто просмотрим списки ACL. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      530.88,
      538.8
    ],
    "en": [
      "Let me return to R1. And I’ll&nbsp; check. DO SHOW ACCESS-LISTS.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вернемся к R1. И я & nbsp; проверить. ПОКАЗАТЬ СПИСКИ ДОСТУПА. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      538.8,
      542.0
    ],
    "en": [
      "There they are, and you can see the&nbsp; number of matches for each entry&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот они, и вы можете увидеть & nbsp; количество совпадений для каждой записи & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      542.0,
      551.84
    ],
    "en": [
      "of each ACL. That’s all for this lab. Next let’s&nbsp; take a look at a lab in Boson NetSim for CCNA."
    ],
    "ru": [
      "каждого ACL. Вот и все для этой лаборатории. Теперь давайте & nbsp; взгляните на лабораторию в Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      551.84,
      557.92
    ],
    "en": [
      "Okay here's today's Boson NetSim lab preview. As&nbsp; I said before, there are 20 ACL practice labs in&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя предварительная версия лаборатории Boson NetSim. Как & nbsp; Я сказал ранее, что в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      557.92,
      562.64
    ],
    "en": [
      "NetSim. So if you want lots of practice&nbsp; configuring and troubleshooting ACLs,&nbsp;&nbsp;"
    ],
    "ru": [
      "NetSim. Так что, если вы хотите много практиковаться, & nbsp; настройка и устранение неполадок списков управления доступом, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      562.64,
      571.68
    ],
    "en": [
      "NetSim is a great tool. Here is the lab topology.&nbsp; It's the same as the demo I showed you in Day 34,&nbsp;&nbsp;"
    ],
    "ru": [
      "NetSim - отличный инструмент. Вот топология лаборатории. & Nbsp; Это то же самое, что и демонстрация, которую я показал вам в День 34, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      571.68,
      578.88
    ],
    "en": [
      "with Router1 and Router2, and then&nbsp; PC1 2 and 3, each in their own VLAN.&nbsp;&nbsp;"
    ],
    "ru": [
      "с Router1 и Router2, а затем & nbsp; ПК1 2 и 3, каждый в своей сети VLAN. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      578.88,
      584.32
    ],
    "en": [
      "This time the command summary shows us the&nbsp; protocol as well as the port numbers. So&nbsp;&nbsp;"
    ],
    "ru": [
      "На этот раз сводка команд показывает нам & nbsp; протокол, а также номера портов. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      584.32,
      592.8
    ],
    "en": [
      "these are extended ACLs, not standard ACLs.&nbsp; Here are the IP addresses on each device.&nbsp;&nbsp;"
    ],
    "ru": [
      "это расширенные ACL, а не стандартные ACL. & nbsp; Вот IP-адреса каждого устройства. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      592.8,
      599.68
    ],
    "en": [
      "Notice that Router2 is using router-on-a-stick&nbsp; here. FastEthernet1/0.2 and .3,&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что Router2 использует маршрутизатор на палке & nbsp; здесь. FastEthernet1 / 0.2 и .3, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      599.68,
      605.2
    ],
    "en": [
      "because there are two VLANs here, two subnets,&nbsp; connected to this single physical interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "потому что здесь две сети VLAN, две подсети, & nbsp; подключен к этому единственному физическому интерфейсу. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      605.2,
      610.48
    ],
    "en": [
      "And that will be important&nbsp; later, so remember that.&nbsp;&nbsp;"
    ],
    "ru": [
      "И это будет важно & nbsp; позже, так что запомните это. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      610.48,
      615.04
    ],
    "en": [
      "Okay, and there is just a single&nbsp; task, but it's pretty long, 18 steps.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, и есть только один & nbsp; задача, но она довольно длинная, 18 шагов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      615.04,
      621.52
    ],
    "en": [
      "So, for today's demo we will just complete up to&nbsp; step 7, which says 'on the appropriate device,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, для сегодняшней демонстрации мы просто закончим до & nbsp; шаг 7, в котором говорится: «на соответствующем устройстве & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      621.52,
      625.84
    ],
    "en": [
      "apply extended ACL 101 to the correct&nbsp; interface in the correct direction. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "применить расширенный ACL 101 к правильному & nbsp; интерфейс в правильном направлении. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      625.84,
      635.12
    ],
    "en": [
      "we will create this ACL in step 6 and apply it in&nbsp; step 7. So let's quickly read that task. In this&nbsp;&nbsp;"
    ],
    "ru": [
      "мы создадим этот ACL на шаге 6 и применим его в & nbsp; Шаг 7. Итак, давайте быстро прочитаем это задание. В этом & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      635.12,
      640.4
    ],
    "en": [
      "task you will configure multiple extended ACls&nbsp; to permit and deny traffic from various protocols&nbsp;&nbsp;"
    ],
    "ru": [
      "Задача: вы настроите несколько расширенных списков контроля доступа & nbsp; разрешать и запрещать трафик из различных протоколов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      640.4,
      646.72
    ],
    "en": [
      "and sources across the topology. You should use&nbsp; extended ACL best practices wherever possible,&nbsp;&nbsp;"
    ],
    "ru": [
      "и источники по топологии. Вам следует использовать & nbsp; по возможности расширенные передовые методы управления доступом, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      646.72,
      653.28
    ],
    "en": [
      "such as applying the ACL as close to the source&nbsp; as possible. When all tasks are complete,&nbsp;&nbsp;"
    ],
    "ru": [
      "например, применение ACL как можно ближе к источнику & nbsp; насколько возможно. Когда все задачи будут выполнены, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      653.28,
      659.28
    ],
    "en": [
      "each PC should remain able to ping the address of&nbsp; the loopback interface on each router. However,&nbsp;&nbsp;"
    ],
    "ru": [
      "каждый компьютер должен по-прежнему иметь возможность проверять связь с адресом & nbsp; петлевой интерфейс на каждом маршрутизаторе. Однако & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      659.28,
      665.44
    ],
    "en": [
      "as I said before, we are not going to&nbsp; complete all the tasks, just up to step 7.&nbsp;&nbsp;"
    ],
    "ru": [
      "как я сказал ранее, мы не собираемся & nbsp; выполнить все задачи, только до шага 7. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      665.44,
      670.8
    ],
    "en": [
      "Pings to other destinations should succeed&nbsp; or fail per the instructions below.&nbsp;&nbsp;"
    ],
    "ru": [
      "Пинги в другие пункты назначения должны быть успешными & nbsp; или не выполните приведенные ниже инструкции. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      670.8,
      675.92
    ],
    "en": [
      "Okay, so let's get started. First, from each PC&nbsp; verify that you can ping the loopback0 interfaces&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, так что приступим. Сначала с каждого ПК & nbsp; убедитесь, что вы можете проверить связь с интерфейсами loopback0 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      675.92,
      684.56
    ],
    "en": [
      "of both Router1 and Router2. So I will open&nbsp; up a console connection to each of the PCs.&nbsp;&nbsp;"
    ],
    "ru": [
      "как Router1, так и Router2. Итак, я открою & nbsp; подключите консоль к каждому компьютеру. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      684.56,
      693.36
    ],
    "en": [
      "And let's try those pings from PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "А давайте попробуем эти эхо-запросы с ПК1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      693.36,
      699.68
    ],
    "en": [
      "Okay it works. And I'll try to ping Router2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, работает. И я попробую пинговать Router2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      699.68,
      702.88
    ],
    "en": [
      "Okay, and just for the sake of time I'll skip PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ради экономии времени я пропущу PC2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      702.88,
      713.44
    ],
    "en": [
      "I know you don't want to watch me do a bunch of&nbsp; pings. Let's try PC3. Okay, it can ping Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я знаю, что ты не хочешь смотреть, как я делаю кучу & nbsp; пинги. Попробуем PC3. Хорошо, он может пинговать Router1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      713.44,
      720.32
    ],
    "en": [
      "And Router2. I'm using Ctrl+C, that's what&nbsp; this means, Ctrl+C, to stop the pings.&nbsp;&nbsp;"
    ],
    "ru": [
      "И Router2. Я использую Ctrl + C, вот что & nbsp; это означает, что нажмите Ctrl + C, чтобы остановить эхо-запросы. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      720.32,
      728.88
    ],
    "en": [
      "After I get a reply, that means the ping&nbsp; is successful so I just cut it off early.&nbsp;&nbsp;"
    ],
    "ru": [
      "Когда я получу ответ, это означает, что пинг & nbsp; успешно, поэтому я просто обрубил его раньше. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      728.88,
      734.56
    ],
    "en": [
      "Okay, next. From each PC, verify that you&nbsp; can ping every other PC in the topology.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, дальше. На каждом ПК убедитесь, что вы & nbsp; может пинговать любой другой компьютер в топологии. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      734.56,
      749.28
    ],
    "en": [
      "Okay, from PC1. I'll ping PC2. And it works.&nbsp; Stop the ping. And PC3. That works as well.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, с ПК1. Я пингую PC2. И это работает. Остановите пинг. И PC3. Это тоже работает. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      749.28,
      753.92
    ],
    "en": [
      "So, because we were able to ping and get a&nbsp; reply, we have verified two-way connectivity&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, поскольку мы смогли выполнить пинг и получить & nbsp; ответ, мы проверили двустороннюю связь & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      753.92,
      766.08
    ],
    "en": [
      "between PC1 and PC2, and PC1 and PC3. So the&nbsp; only one we have to do is from PC2 to PC3.&nbsp;&nbsp;"
    ],
    "ru": [
      "между ПК1 и ПК2, а также ПК1 и ПК3. Итак, & nbsp; нам нужно сделать только одно - с ПК2 на ПК3. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      766.08,
      773.92
    ],
    "en": [
      "Okay, and we get a reply, so we have also&nbsp; verified two-way connectivity between PC2 and PC3.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, мы получили ответ, так что у нас также есть & nbsp; подтверждена двусторонняя связь между ПК2 и ПК3. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      773.92,
      779.76
    ],
    "en": [
      "Next up, in steps 3, 4, and 5, we are going to&nbsp; attempt to Telnet to Router1 and Router2 from&nbsp;&nbsp;"
    ],
    "ru": [
      "Далее, на шагах 3, 4 и 5 мы собираемся & nbsp; попытаться подключиться по Telnet к маршрутизаторам Router1 и Router2 с & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      779.76,
      786.8
    ],
    "en": [
      "different PCs. I showed you Telnet briefly in the&nbsp; NetSim demo for Day 34, and we will cover it more&nbsp;&nbsp;"
    ],
    "ru": [
      "разные ПК. Я кратко показал вам Telnet в & nbsp; Демо NetSim для дня 34, и мы рассмотрим его подробнее & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      786.8,
      798.08
    ],
    "en": [
      "in-depth later in the course. So, first from PC1&nbsp; to Router2's loopback interface. TELNET 2.2.2.2.&nbsp;&nbsp;"
    ],
    "ru": [
      "подробнее позже в курсе. Итак, сначала с ПК1 & nbsp; к интерфейсу обратной связи Router2. TELNET 2.2.2.2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      798.08,
      803.36
    ],
    "en": [
      "Okay, and because I get this password prompt to&nbsp; log in, that means the Telnet was successful.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, и поскольку я получаю этот пароль с запросом на & nbsp; войдите в систему, это означает, что Telnet прошел успешно. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      803.36,
      809.84
    ],
    "en": [
      "I was able to connect to Router2 with Telnet.&nbsp; I just have to enter the password to log in.&nbsp;&nbsp;"
    ],
    "ru": [
      "Мне удалось подключиться к Router2 с помощью Telnet. & Nbsp; Мне просто нужно ввести пароль для входа в систему. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      809.84,
      813.76
    ],
    "en": [
      "And it works. It says up here, all&nbsp; passwords in this lab are configured to&nbsp;&nbsp;"
    ],
    "ru": [
      "И это работает. Здесь сказано, что все & nbsp; пароли в этой лабораторной работе настроены на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      813.76,
      821.36
    ],
    "en": [
      "boson. Okay, and the prompt is now&nbsp; Router2. I'll exit out of there&nbsp;&nbsp;"
    ],
    "ru": [
      "бозон. Хорошо, теперь подсказка & nbsp; Маршрутизатор 2. Я выйду оттуда & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      821.36,
      838.64
    ],
    "en": [
      "and then from PC2 and PC3, Telnet to&nbsp; Router1. Okay, that works. And PC3.&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем с ПК2 и ПК3 через Telnet на & nbsp; Маршрутизатор 1. Хорошо, это работает. И PC3. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      838.64,
      846.4
    ],
    "en": [
      "Okay, great. So, step 6. On the appropriate&nbsp; device, create extended ACL 101.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, отлично. Итак, шаг 6. На соответствующем & nbsp; устройству, создайте расширенный ACL 101. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      846.4,
      854.56
    ],
    "en": [
      "The ACL should permit Telnet traffic from&nbsp; PC2 and PC3 to Router1's loopback0 interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL должен разрешать трафик Telnet от & nbsp; ПК2 и ПК3 к интерфейсу loopback0 маршрутизатора 1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      854.56,
      861.36
    ],
    "en": [
      "Limit the ACL you create to a single rule.&nbsp; Specify the port number, source wildcard mask,&nbsp;&nbsp;"
    ],
    "ru": [
      "Ограничьте создаваемый ACL одним правилом. & Nbsp; Укажите номер порта, маску подстановки источника, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      861.36,
      868.88
    ],
    "en": [
      "and destination wildcard mask. Okay, so a&nbsp; single rule. Single rule, single entry ACL,&nbsp;&nbsp;"
    ],
    "ru": [
      "и маску подстановочных знаков назначения. Итак, & nbsp; единое правило. Одно правило, однократный ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      868.88,
      878.08
    ],
    "en": [
      "which allows both PC2 and PC3 to&nbsp; Telnet to this address, 1.1.1.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "что позволяет ПК2 и ПК3 & nbsp; Telnet по этому адресу 1.1.1.1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      878.08,
      884.0
    ],
    "en": [
      "So, where should I create the ACL, what is the&nbsp; appropriate device? Well, these are extended&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, где мне создать ACL, что такое & nbsp; подходящее устройство? Ну это расширенные & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      884.0,
      890.16
    ],
    "en": [
      "ACLs we're making, so we should create and&nbsp; apply them as close to the source as possible.&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL мы создаем, поэтому мы должны создать и & nbsp; нанесите их как можно ближе к источнику. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      890.16,
      903.12
    ],
    "en": [
      "In this case, the source is PC2 and PC3, so&nbsp; that means we should create the ACL on Router2.&nbsp;&nbsp;"
    ],
    "ru": [
      "В данном случае источником являются ПК2 и ПК3, поэтому & nbsp; это означает, что мы должны создать ACL на Router2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      903.12,
      910.48
    ],
    "en": [
      "Okay, I'll configure it right here from&nbsp; global config mode. ACCESS-LIST 101 PERMIT,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, я настрою его прямо здесь из & nbsp; глобальный режим конфигурации. СПИСОК ДОСТУПА 101 РАЗРЕШЕНИЕ, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      910.48,
      917.92
    ],
    "en": [
      "now next is the protocol. Telnet&nbsp; uses TCP as its Layer 4 protocol, so&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь следующий протокол. Telnet & nbsp; использует TCP в качестве протокола уровня 4, поэтому & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      917.92,
      929.68
    ],
    "en": [
      "TCP. And next up the source IP address. 10.10.,&nbsp; and we want to include both PC2 and PC3,&nbsp;&nbsp;"
    ],
    "ru": [
      "TCP. Затем следует IP-адрес источника. 10.10., & NBSP; и мы хотим включить как ПК2, так и ПК3, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      929.68,
      943.76
    ],
    "en": [
      "so both of these subnets, 10.10.2.102/24 and&nbsp; 10.10.3.103/24. So, let me think about that.&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому обе эти подсети, 10.10.2.102/24 и & nbsp; 10.10.3.103/24. Итак, позвольте мне подумать об этом. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      943.76,
      956.8
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
      943.76,
      956.8
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
      956.8,
      966.24
    ],
    "en": [
      "source port number. So next is the destination&nbsp; IP address. 1.1.1.1, with a /32 wildcard mask.&nbsp;&nbsp;"
    ],
    "ru": [
      "номер порта источника. Итак, следующий пункт назначения & nbsp; Айпи адрес. 1.1.1.1 с подстановочной маской / 32. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      966.24,
      974.48
    ],
    "en": [
      "Finally, the destination port. This is where we&nbsp; specify Telnet. So, EQ to specify a single port.&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, порт назначения. Здесь мы & nbsp; укажите Telnet. Итак, EQ для указания одного порта. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      974.48,
      980.96
    ],
    "en": [
      "And now I can either specify the keyword,&nbsp; TELNET, or Telnet's port number which is 23.&nbsp;&nbsp;"
    ],
    "ru": [
      "И теперь я могу указать ключевое слово & nbsp; TELNET или номер порта Telnet, равный 23. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      980.96,
      988.56
    ],
    "en": [
      "I'll use the keyword, TELNET. There we go.&nbsp; Okay, now here's the really tricky part. We&nbsp;&nbsp;"
    ],
    "ru": [
      "Я использую ключевое слово TELNET. Итак, мы идем. & Nbsp; Хорошо, теперь самое сложное. Мы & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      988.56,
      993.84
    ],
    "en": [
      "have to apply it to the correct interface&nbsp; in the correct direction, as it says here.&nbsp;&nbsp;"
    ],
    "ru": [
      "необходимо применить его к правильному интерфейсу & nbsp; в правильном направлении, как здесь сказано. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      993.84,
      1000.24
    ],
    "en": [
      "Apply extended ACL 101 to the correct&nbsp; interface in the correct direction.&nbsp;&nbsp;"
    ],
    "ru": [
      "Примените расширенный ACL 101 к правильному & nbsp; интерфейс в правильном направлении. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1000.24,
      1008.56
    ],
    "en": [
      "So, the interface that is connected to&nbsp; Switch2, and therefore PC2 and PC3 is&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, интерфейс, подключенный к & nbsp; Switch2, следовательно, ПК2 и ПК3 - это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1008.56,
      1014.64
    ],
    "en": [
      "this one here, FastEthernet1/0. However, we&nbsp; cannot apply this ACL to the physical interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "вот этот, FastEthernet1 / 0. Однако мы & nbsp; не может применить этот ACL к физическому интерфейсу, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1014.64,
      1021.2
    ],
    "en": [
      "that will not work. So, we can either apply&nbsp; it inbound on both of these sub-interfaces,&nbsp;&nbsp;"
    ],
    "ru": [
      "это не будет работать. Итак, мы можем применить & nbsp; он входит в оба этих подчиненных интерфейса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1021.2,
      1030.0
    ],
    "en": [
      "FastEthernet1/0.2, 1/0.3. Or instead of doing that&nbsp; if we want to apply it just to a single interface&nbsp;&nbsp;"
    ],
    "ru": [
      "FastEthernet1 / 0,2, 1 / 0,3. Или вместо этого & nbsp; если мы хотим применить его только к одному интерфейсу & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1030.0,
      1038.0
    ],
    "en": [
      "we could also outbound on this interface&nbsp; here, it's still pretty close to the source.&nbsp;&nbsp;"
    ],
    "ru": [
      "мы также могли исходить из этого интерфейса & nbsp; здесь он все еще довольно близок к источнику. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1038.0,
      1042.08
    ],
    "en": [
      "Let's do that, since it's simpler. We just&nbsp; have to apply it to a single interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "Так и сделаем, так как проще. Мы просто & nbsp; необходимо применить его к единому интерфейсу. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1042.08,
      1051.12
    ],
    "en": [
      "So I will apply it outbound on FastEthernet0/0.&nbsp; So, when these two PCs try to Telnet to Router1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Поэтому я буду применять его для исходящего трафика на FastEthernet0 / 0. & Nbsp; Итак, когда эти два компьютера пытаются подключиться к маршрутизатору 1 по Telnet, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1051.12,
      1056.8
    ],
    "en": [
      "the ACL will be checked when Router2 forwards&nbsp; the traffic out of its FastEthernet0/0 interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL будет проверяться, когда Router2 пересылает & nbsp; трафик из интерфейса FastEthernet0 / 0, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1056.8,
      1065.2
    ],
    "en": [
      "which is here. It won't check it when it receives&nbsp; the traffic here on the FastEthernet0/1 interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "который здесь. Он не будет проверять его, когда получит & nbsp; трафик здесь на интерфейсе FastEthernet0 / 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1065.2,
      1082.08
    ],
    "en": [
      "Or sorry, not 0/1, 1/0. Okay, so INTERFACE F0/0.&nbsp; IP ACCESS-GROUP 101 OUT. Okay, so let's try a&nbsp;&nbsp;"
    ],
    "ru": [
      "Или извините, не 0/1, 1/0. Итак, ИНТЕРФЕЙС F0 / 0. & nbsp; IP ACCESS-GROUP 101 OUT. Хорошо, давайте попробуем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1082.08,
      1099.28
    ],
    "en": [
      "ping from PC2 to Router1's loopback0 interface.&nbsp; Okay, it's not working. Why is that? It's because&nbsp;&nbsp;"
    ],
    "ru": [
      "эхо-запрос от ПК2 к интерфейсу loopback0 маршрутизатора 1. & nbsp; Ладно, не работает. Это почему? Это потому, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1099.28,
      1107.68
    ],
    "en": [
      "our ACL only permits Telnet from PC2 and PC3 to&nbsp; Router1's loopback interface. However, the ACL is&nbsp;&nbsp;"
    ],
    "ru": [
      "наш ACL разрешает Telnet только с ПК2 и ПК3 на & nbsp; Петлевой интерфейс Router1. Однако ACL - это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1107.68,
      1113.84
    ],
    "en": [
      "just a single line. That means any traffic that&nbsp; isn't that Telnet traffic will be denied by the&nbsp;&nbsp;"
    ],
    "ru": [
      "всего одна строчка. Это означает, что любой трафик, который & nbsp; Разве это не означает, что трафик Telnet будет запрещен & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1113.84,
      1123.28
    ],
    "en": [
      "implicit deny at the end of the ACL. So currently&nbsp; PC2 and PC3 will not be able to ping Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "неявный отказ в конце ACL. Итак, в настоящее время & nbsp; ПК2 и ПК3 не смогут проверить связь с маршрутизатором 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1123.28,
      1128.56
    ],
    "en": [
      "The task description here said that each PC should&nbsp; remain able to ping the address of the loopback&nbsp;&nbsp;"
    ],
    "ru": [
      "В описании задачи сказано, что каждый компьютер должен & nbsp; оставаться в состоянии пинговать адрес обратной связи & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1128.56,
      1135.68
    ],
    "en": [
      "interface on each router, so I assume later,&nbsp; in one of the later tasks we would fix that.&nbsp;&nbsp;"
    ],
    "ru": [
      "интерфейс на каждом маршрутизаторе, поэтому я предполагаю позже, & nbsp; в одной из последующих задач мы исправим это. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1135.68,
      1144.0
    ],
    "en": [
      "But let me just check that PC3 also&nbsp; can't ping Router1's loopback interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "Но позвольте мне проверить, что PC3 также & nbsp; не удается проверить связь с петлевым интерфейсом маршрутизатора 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1144.0,
      1150.96
    ],
    "en": [
      "Okay, it also doesn't work. How about Telnet?&nbsp; Telnet should work. So I'll try to Telnet from PC2&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, тоже не работает. Как насчет Telnet? & Nbsp; Telnet должен работать. Так что я попробую Telnet с ПК2 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1150.96,
      1167.6
    ],
    "en": [
      "to Router1's loopback interface. And it works,&nbsp; great. And how about PC3? Okay, it works also.&nbsp;&nbsp;"
    ],
    "ru": [
      "к интерфейсу обратной связи Router1. И это работает, & nbsp; Отлично. А как насчет РС3? Ладно, тоже работает. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1167.6,
      1176.4
    ],
    "en": [
      "And let's just take a look at that&nbsp; ACL in the running config of Router2.&nbsp;&nbsp;"
    ],
    "ru": [
      "И давайте просто посмотрим на это & ​​nbsp; ACL в текущей конфигурации Router2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1176.4,
      1184.96
    ],
    "en": [
      "There it is, so we are permitting TCP traffic&nbsp; from this range of addresses here, 10.10.2.0/23,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот он, значит, мы разрешаем трафик TCP & nbsp; из этого диапазона адресов здесь 10.10.2.0/23,&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1184.96,
      1192.96
    ],
    "en": [
      "to host 1.1.1.1, destination port of 23, Telnet.&nbsp; And all other traffic will be denied because of&nbsp;&nbsp;"
    ],
    "ru": [
      "к хосту 1.1.1.1, порт назначения 23, Telnet. & nbsp; И весь другой трафик будет запрещен из-за & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1192.96,
      1200.8
    ],
    "en": [
      "the implicit deny at the end of the ACL. Okay,&nbsp; so after that there are many more tasks here,&nbsp;&nbsp;"
    ],
    "ru": [
      "неявный отказ в конце ACL. Хорошо, & nbsp; так что после этого здесь есть еще много задач, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1200.8,
      1210.08
    ],
    "en": [
      "but we'll end today's lab demo here. And I will&nbsp; use Boson's grade lab function. Now, since we&nbsp;&nbsp;"
    ],
    "ru": [
      "но на этом мы закончим сегодняшнюю лабораторную демонстрацию. И я буду & nbsp; используйте функцию лаборатории Бозона. Теперь, поскольку мы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1210.08,
      1214.24
    ],
    "en": [
      "aren't done with the lab it says you missed one&nbsp; or more commands in the lab, but that's okay.&nbsp;&nbsp;"
    ],
    "ru": [
      "не закончили с лабораторией, он говорит, что вы пропустили один & nbsp; или другие команды в лаборатории, но это нормально. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1214.24,
      1221.68
    ],
    "en": [
      "I just want to check Router2's configuration,&nbsp; did I get that correct? Oh, so I was right. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Я просто хочу проверить конфигурацию Router2, & nbsp; я правильно понял? О, значит, я был прав. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1221.68,
      1229.28
    ],
    "en": [
      "we did get that entry correct, permitting the&nbsp; Telnet traffic. But probably later in this lab,&nbsp;&nbsp;"
    ],
    "ru": [
      "мы сделали эту запись правильно, разрешив & nbsp; Telnet-трафик. Но, вероятно, позже в этой лабораторной работе & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1229.28,
      1238.4
    ],
    "en": [
      "in one of the later steps, looks like we add a&nbsp; PERMIT ICMP ANY ANY command to allow those pings.&nbsp;&nbsp;"
    ],
    "ru": [
      "на одном из последующих шагов, похоже, мы добавляем & nbsp; РАЗРЕШИТЬ ICMP ЛЮБУЮ ЛЮБУЮ команду, чтобы разрешить эти эхо-запросы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1238.4,
      1243.6
    ],
    "en": [
      "Okay, so that's Boson NetSim for CCNA. If you&nbsp; want to get Boson NetSim, please follow the link&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это Boson NetSim для CCNA. Если вы & nbsp; хотите получить Boson NetSim, перейдите по ссылке & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1243.6,
      1248.88
    ],
    "en": [
      "in the video description. As you can see here,&nbsp; there are tons of practice labs for the CCNA,&nbsp;&nbsp;"
    ],
    "ru": [
      "в описании видео. Как вы можете видеть здесь, & nbsp; есть множество практических лабораторий для CCNA, & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1248.88,
      1253.52
    ],
    "en": [
      "all very in-depth, very good for testing&nbsp; your knowledge and improving your skills of&nbsp;&nbsp;"
    ],
    "ru": [
      "все очень подробно, очень хорошо для тестирования & nbsp; ваши знания и улучшение навыков & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1253.52,
      1261.04
    ],
    "en": [
      "configuring and troubleshooting. Once again,&nbsp; follow that link in the video description."
    ],
    "ru": [
      "настройка и устранение неполадок. И снова & nbsp; перейдите по этой ссылке в описании видео."
    ]
  },
  {
    "time": [
      1261.04,
      1265.92
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
      1265.92,
      1272.64
    ],
    "en": [
      "To join, please click the ‘Join’ button under&nbsp; the video. Thank you to Samil, Aaron, Junhong,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Самилу, Аарону, Джунхонгу, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1272.64,
      1279.12
    ],
    "en": [
      "Njabulo, Benjamin, Tshepiso, Justin, Prakaash,&nbsp; Nasir, Erlison, Apogee, Marko, Daming, Joshua,&nbsp;&nbsp;"
    ],
    "ru": [
      "Нджабуло, Бенджамин, Тшеписо, Джастин, Пракааш, & nbsp; Насир, Эрлисон, Апогей, Марко, Даминг, Джошуа, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1279.12,
      1283.92
    ],
    "en": [
      "Jhilmar, Ed, Value, John, Funnydart,&nbsp; Velvijaykum, C Mohd, Mark, Yousif,&nbsp;&nbsp;"
    ],
    "ru": [
      "Джилмар, Эд, Вэлью, Джон, Фаннидарт, & nbsp; Велвиджайкум, К. Мохд, Марк, Юсиф, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1283.92,
      1288.08
    ],
    "en": [
      "Boson Software, Devin, Lito, Yonatan, and Vance.&nbsp;&nbsp;"
    ],
    "ru": [
      "Boson Software, Девин, Лито, Йонатан и Вэнс. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1288.08,
      1292.8
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly,&nbsp; but thank you so much for your support.&nbsp;&nbsp;"
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, & nbsp; но большое спасибо за вашу поддержку. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1292.8,
      1298.88
    ],
    "en": [
      "This is the list of JCNP-level members at the&nbsp; time of recording by the way, December 6th 2020,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на & nbsp; время записи, кстати, 6 декабря 2020 г., & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1298.88,
      1305.84
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
      1305.84,
      1308.88
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
      1308.88,
      1314.72
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
      1314.72,
      1320.32
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
      1320.32,
      1320.32
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]