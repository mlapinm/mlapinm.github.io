let objs = [
  {
    "time": [
      1.04,
      7.84
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is a free,&nbsp; complete course for the CCNA. If you like these&nbsp;&nbsp;"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это бесплатный & nbsp; полный курс CCNA. Если вам нравятся эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      7.84,
      13.92
    ],
    "en": [
      "videos, please subscribe to follow along with the&nbsp; series. Also, please like and leave a comment,&nbsp;&nbsp;"
    ],
    "ru": [
      "видео, подпишитесь, чтобы следить вместе с & nbsp; серии. Также поставьте лайк и оставьте комментарий, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      13.92,
      19.28
    ],
    "en": [
      "and share the video to help spread this&nbsp; free series of videos. Thanks for your help."
    ],
    "ru": [
      "и поделитесь видео, чтобы помочь распространить этот & nbsp; бесплатная серия видеороликов. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      19.28,
      24.88
    ],
    "en": [
      "In this video we will finish up the topic&nbsp; of NAT, Network Address Translation.&nbsp;&nbsp;"
    ],
    "ru": [
      "На этом видео мы завершим тему & nbsp; NAT, преобразование сетевых адресов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      24.88,
      28.8
    ],
    "en": [
      "NAT is topic 4.1 of the CCNA exam.&nbsp;&nbsp;"
    ],
    "ru": [
      "NAT - это тема 4.1 экзамена CCNA. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      28.8,
      36.08
    ],
    "en": [
      "In Day 44 I introduced NAT and covered static&nbsp; NAT, but this video will focus on dynamic NAT.&nbsp;&nbsp;"
    ],
    "ru": [
      "В день 44 я представил NAT и рассмотрел статические & nbsp; NAT, но в этом видео основное внимание уделяется динамическому NAT. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      36.08,
      42.96
    ],
    "en": [
      "After this video, I think you’ll have no problems&nbsp; answering any NAT questions on the CCNA exam."
    ],
    "ru": [
      "Думаю, после этого видео у вас не будет проблем & nbsp; отвечать на любые вопросы о NAT на экзамене CCNA."
    ]
  },
  {
    "time": [
      42.96,
      48.24
    ],
    "en": [
      "Here’s what we’ll cover in this video. First, I&nbsp; will cover one more point about static NAT that&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот что мы расскажем в этом видео. Во-первых, я & nbsp; рассмотрим еще один вопрос о статическом NAT, который & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      48.24,
      53.2
    ],
    "en": [
      "I didn’t mention in the last video. Then&nbsp; I’ll cover dynamic NAT, in which you don’t&nbsp;&nbsp;"
    ],
    "ru": [
      "Я не упоминал в последнем видео. Тогда & nbsp; Я расскажу о динамическом NAT, в котором вы не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      53.2,
      59.76
    ],
    "en": [
      "manually map addresses one-to-one, but instead the&nbsp; router automatically makes the mappings for you.&nbsp;&nbsp;"
    ],
    "ru": [
      "вручную сопоставьте адреса один к одному, но вместо этого & nbsp; маршрутизатор автоматически выполняет сопоставления. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      59.76,
      63.52
    ],
    "en": [
      "And then another very important&nbsp; type of NAT, dynamic PAT,&nbsp;&nbsp;"
    ],
    "ru": [
      "А потом еще один очень важный & nbsp; тип NAT, динамический PAT, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      63.52,
      70.4
    ],
    "en": [
      "which translates not only the IP address, but&nbsp; also the port number. Dynamic PAT is extremely&nbsp;&nbsp;"
    ],
    "ru": [
      "который переводит не только IP-адрес, но и & nbsp; также номер порта. Динамический PAT чрезвычайно & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      70.4,
      76.88
    ],
    "en": [
      "useful because it allows many devices to share&nbsp; a single public IP address. As always, watch&nbsp;&nbsp;"
    ],
    "ru": [
      "полезно, поскольку позволяет множеству устройств обмениваться & nbsp; единый публичный IP-адрес. Как всегда, смотрите & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      76.88,
      84.48
    ],
    "en": [
      "until the end of the video for a bonus practice&nbsp; question from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "до конца видео для бонусной практики & nbsp; вопрос от ExSim компании Boson Software для CCNA."
    ]
  },
  {
    "time": [
      84.48,
      90.4
    ],
    "en": [
      "First, some review about static NAT. Static&nbsp; NAT involves statically configuring one-to-one&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала небольшой обзор статического NAT. Статический & nbsp; NAT включает статическую настройку \"один-к-одному\" & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      90.4,
      96.47999999999999
    ],
    "en": [
      "mappings of private IP addresses to public&nbsp; IP addresses. When traffic from the internal&nbsp;&nbsp;"
    ],
    "ru": [
      "сопоставление частных IP-адресов с общедоступными & nbsp; IP-адреса. Когда трафик от внутреннего & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      96.47999999999999,
      102.0
    ],
    "en": [
      "host is sent to the outside network, the&nbsp; router will translate the source address.&nbsp;&nbsp;"
    ],
    "ru": [
      "хост отправляется во внешнюю сеть, & nbsp; маршрутизатор преобразует исходный адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      102.0,
      110.96000000000001
    ],
    "en": [
      "So, I have mapped inside local address&nbsp; 192.168.0.167 to inside global address 100.0.0.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я сопоставил локальный адрес & nbsp; 192.168.0.167 на внутренний глобальный адрес 100.0.0.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      110.96000000000001,
      120.0
    ],
    "en": [
      "and also mapped 192.168.0.168 to 100.0.0.2 Then,&nbsp; if for example if PC1 wants to access the server&nbsp;&nbsp;"
    ],
    "ru": [
      "а также сопоставил 192.168.0.168 и 100.0.0.2 Затем & nbsp; если, например, если ПК1 хочет получить доступ к серверу & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      120.0,
      129.68
    ],
    "en": [
      "at 8.8.8.8, it sends a packet with source IP&nbsp; 192.168.0.167, a private IP address. R1 then&nbsp;&nbsp;"
    ],
    "ru": [
      "в 8.8.8.8 он отправляет пакет с исходным IP & nbsp; 192.168.0.167, частный IP-адрес. R1, затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      129.68,
      136.0
    ],
    "en": [
      "translates the source address to 100.0.0.1, a&nbsp; public IP address. When the server sends its&nbsp;&nbsp;"
    ],
    "ru": [
      "преобразует исходный адрес в 100.0.0.1, & nbsp; публичный IP-адрес. Когда сервер отправляет свои & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      136.0,
      143.04
    ],
    "en": [
      "reply, the destination is the public IP address.&nbsp; R1 translates the destination IP of the reply back&nbsp;&nbsp;"
    ],
    "ru": [
      "ответ, местом назначения является общедоступный IP-адрес. & nbsp; R1 переводит IP-адрес получателя ответа обратно & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      143.04,
      151.04
    ],
    "en": [
      "to 192.168.0.167 and forwards it to PC1. Okay,&nbsp; hopefully you understand this process by now,&nbsp;&nbsp;"
    ],
    "ru": [
      "на 192.168.0.167 и перенаправляет на ПК1. Хорошо, & nbsp; Надеюсь, вы уже поняли этот процесс, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      151.04,
      155.76
    ],
    "en": [
      "but let me demonstrate one other&nbsp; important point about static NAT."
    ],
    "ru": [
      "но позвольте мне продемонстрировать еще один & nbsp; важный момент про статический NAT."
    ]
  },
  {
    "time": [
      155.76,
      161.36
    ],
    "en": [
      "This one-to-one mapping of IP addresses doesn’t&nbsp; only allow the internal host to access external&nbsp;&nbsp;"
    ],
    "ru": [
      "Это взаимно однозначное сопоставление IP-адресов не & nbsp; разрешить доступ только внутреннему узлу к внешнему & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      161.36,
      169.04
    ],
    "en": [
      "resources, it also allows external hosts to access&nbsp; the internal host via the inside global address.&nbsp;&nbsp;"
    ],
    "ru": [
      "ресурсов, он также позволяет внешним хостам получать доступ к & nbsp; внутренний хост через внутренний глобальный адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      169.04,
      173.52
    ],
    "en": [
      "So, without PC1 initiating communication&nbsp; with the server, it could send a packet&nbsp;&nbsp;"
    ],
    "ru": [
      "Таким образом, без установления связи с ПК1 & nbsp; с сервером он мог отправить пакет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      173.52,
      181.04
    ],
    "en": [
      "to destination IP 100.0.0.1, and because of that&nbsp; one-to-one IP address mapping R1 would translate&nbsp;&nbsp;"
    ],
    "ru": [
      "на IP-адрес назначения 100.0.0.1, и поэтому & nbsp; однозначное сопоставление IP-адресов R1 преобразует & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      181.04,
      190.32
    ],
    "en": [
      "it to 192.168.0.167 and forward it to PC1, and&nbsp; then PC1 would reply. So, it works two-ways,&nbsp;&nbsp;"
    ],
    "ru": [
      "его на 192.168.0.167 и перенаправить на ПК1, а & nbsp; тогда ПК1 ответит. Таким образом, он работает в двух направлениях: & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      190.32,
      196.16
    ],
    "en": [
      "not just from inside to outside, but also&nbsp; from outside to inside. Okay, just wanted&nbsp;&nbsp;"
    ],
    "ru": [
      "не только изнутри наружу, но и & NBSP; снаружи внутрь. Хорошо, просто хотел & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      196.16,
      203.28
    ],
    "en": [
      "to make that clear since I didn’t mention it&nbsp; in Day 44. Now let’s move on to dynamic NAT."
    ],
    "ru": [
      "чтобы прояснить это, поскольку я не упоминал об этом & nbsp; в день 44. Теперь перейдем к динамическому NAT."
    ]
  },
  {
    "time": [
      203.28,
      206.16
    ],
    "en": [
      "In dynamic NAT, the router dynamically maps inside&nbsp;&nbsp;"
    ],
    "ru": [
      "В динамическом NAT маршрутизатор динамически отображает внутри & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      206.16,
      212.16
    ],
    "en": [
      "local addresses to inside global addresses&nbsp; as needed. So, you don’t manually specify&nbsp;&nbsp;"
    ],
    "ru": [
      "локальные адреса на внутренние глобальные адреса & nbsp; по мере необходимости. Таким образом, вы не указываете вручную & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      212.16,
      217.76
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
      212.16,
      217.76
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
      217.76,
      223.28
    ],
    "en": [
      "The router makes those mappings automatically, and&nbsp; then clears the mapping when its no longer needed.&nbsp;&nbsp;"
    ],
    "ru": [
      "Маршрутизатор выполняет эти сопоставления автоматически, и & nbsp; затем очищает сопоставление, когда оно больше не требуется. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      223.28,
      230.4
    ],
    "en": [
      "Here’s how it works in Cisco IOS. An ACL is used&nbsp; to identify which traffic should be translated.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот как это работает в Cisco IOS. Используется ACL & nbsp; чтобы определить, какой трафик следует переводить. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      230.4,
      235.04
    ],
    "en": [
      "Okay, this part is important, because it’s a&nbsp; totally different use of an ACL, but it’s a&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, эта часть важна, потому что это & ​​nbsp; совершенно другое использование ACL, но это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      235.04,
      241.12
    ],
    "en": [
      "very common use. ACLs can be used to indicate&nbsp; which traffic should be forwarded and which&nbsp;&nbsp;"
    ],
    "ru": [
      "очень распространенное использование. Списки контроля доступа могут использоваться для обозначения & nbsp; какой трафик следует перенаправить, а какой & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      241.12,
      247.52
    ],
    "en": [
      "should be blocked, you already know that. But&nbsp; they can also be used just to identify traffic.&nbsp;&nbsp;"
    ],
    "ru": [
      "должны быть заблокированы, вы это уже знаете. Но & nbsp; их также можно использовать только для идентификации трафика. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      247.52,
      254.48
    ],
    "en": [
      "If the source IP of a packet is permitted by the&nbsp; ACL, the source IP will be translated by NAT.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если исходный IP-адрес пакета разрешен & nbsp; ACL, исходный IP-адрес будет преобразован NAT. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      254.48,
      260.48
    ],
    "en": [
      "However if the source IP is denied by the ACL, the&nbsp; source IP will NOT be translated. But that doesn’t&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако, если исходный IP-адрес запрещен списком управления доступом, & nbsp; исходный IP-адрес НЕ будет переведен. Но это не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      260.48,
      265.44
    ],
    "en": [
      "mean the traffic will be dropped! We’re simply&nbsp; using the ACL to identify which traffic should be&nbsp;&nbsp;"
    ],
    "ru": [
      "значит трафик будет сброшен! Мы просто & nbsp; используя ACL, чтобы определить, какой трафик & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      265.44,
      271.28
    ],
    "en": [
      "translated, we’re not using it to drop traffic,&nbsp; because we won’t apply the ACL to an interface&nbsp;&nbsp;"
    ],
    "ru": [
      "переведено, мы не используем его для снижения трафика, & nbsp; потому что мы не будем применять ACL к интерфейсу & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      271.28,
      278.24
    ],
    "en": [
      "with the IP ACCESS-GROUP command. Anyway, when&nbsp; we get to configuration you’ll see how it works.&nbsp;&nbsp;"
    ],
    "ru": [
      "с помощью команды IP ACCESS-GROUP. В любом случае, когда & nbsp; мы перейдем к настройке, и вы увидите, как это работает. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      278.24,
      284.08
    ],
    "en": [
      "Then, a NAT pool is used to define the available&nbsp; inside global addresses that can be used for&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем пул NAT используется для определения доступных & nbsp; внутренние глобальные адреса, которые можно использовать для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      284.08,
      293.6
    ],
    "en": [
      "translation. For example, on R1 I configured ACL&nbsp; 1, which permits 192.168.0.0/24 and denies all&nbsp;&nbsp;"
    ],
    "ru": [
      "перевод. Например, на R1 я настроил ACL & nbsp; 1, который разрешает 192.168.0.0/24 и запрещает все & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      293.6,
      303.28
    ],
    "en": [
      "other traffic. I also configured NAT POOL1,&nbsp; with a range from 100.0.0.1 to 100.0.0.10.&nbsp;&nbsp;"
    ],
    "ru": [
      "другой трафик. Я также настроил NAT POOL1, & nbsp; с диапазоном от 100.0.0.1 до 100.0.0.10. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      303.28,
      309.68
    ],
    "en": [
      "That means if a packet with a source IP permitted&nbsp; by ACL 1 arrives, translate the source IP to an&nbsp;&nbsp;"
    ],
    "ru": [
      "Это означает, что если пакет с исходным IP-адресом разрешен & nbsp; по ACL 1 преобразуйте исходный IP-адрес в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      309.68,
      317.84
    ],
    "en": [
      "address from POOL1. So, PC1 sends a packet, and&nbsp; its IP address is permitted by ACL 1. Then R1&nbsp;&nbsp;"
    ],
    "ru": [
      "адрес из POOL1. Итак, ПК1 отправляет пакет, и & nbsp; его IP-адрес разрешен ACL 1. Тогда R1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      317.84,
      325.2
    ],
    "en": [
      "translates the source IP to an address from&nbsp; POOL1, 100.0.0.1. The server sends a reply,&nbsp;&nbsp;"
    ],
    "ru": [
      "преобразует исходный IP-адрес в адрес из & nbsp; POOL1, 100.0.0.1. Сервер отправляет ответ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      325.2,
      331.6
    ],
    "en": [
      "and R1 translates the address back. So, it&nbsp; looks like the same process as in static NAT.&nbsp;&nbsp;"
    ],
    "ru": [
      "и R1 переводит адрес обратно. Итак, это & ​​nbsp; выглядит так же, как и при статическом NAT. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      331.6,
      337.36
    ],
    "en": [
      "The difference is that, instead of manually&nbsp; configuring a mapping from 192.168.0.167&nbsp;&nbsp;"
    ],
    "ru": [
      "Разница в том, что вместо ручного & nbsp; настройка сопоставления из 192.168.0.167 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      337.36,
      344.24
    ],
    "en": [
      "to 100.0.0.1, R1 did it automatically&nbsp; when the packet from PC1 arrived.&nbsp;&nbsp;"
    ],
    "ru": [
      "до 100.0.0.1 R1 сделал это автоматически & nbsp; когда пришел пакет от ПК1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      344.24,
      350.0
    ],
    "en": [
      "Now, I want to emphasize this point. If the&nbsp; source IP address is not permitted by the ACL,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь я хочу подчеркнуть этот момент. Если & nbsp; исходный IP-адрес не разрешен ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      350.0,
      355.84000000000003
    ],
    "en": [
      "it doesn’t mean the packet will be dropped,&nbsp; it just means it won’t be translated."
    ],
    "ru": [
      "это не означает, что пакет будет отброшен, & nbsp; это просто означает, что это не будет переведено."
    ]
  },
  {
    "time": [
      355.84000000000003,
      361.28
    ],
    "en": [
      "Let me explain a few more points about dynamic&nbsp; NAT, and then we’ll look at the configuration.&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне объяснить еще несколько моментов о динамических & nbsp; NAT, а затем мы рассмотрим конфигурацию. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      361.28,
      365.12
    ],
    "en": [
      "Although they are dynamically assigned,&nbsp; the mappings are still one-to-one,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хотя они назначаются динамически, & nbsp; сопоставления по-прежнему взаимно однозначны, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      365.12,
      371.84
    ],
    "en": [
      "one inside local IP address per inside global IP&nbsp; address. If there aren’t enough inside global IP&nbsp;&nbsp;"
    ],
    "ru": [
      "один внутренний локальный IP-адрес на каждый внутренний глобальный IP & nbsp; адрес. Если внутри глобального IP-адреса недостаточно & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      371.84,
      378.08
    ],
    "en": [
      "addresses available, if they are all currently&nbsp; being used, it is called ‘NAT pool exhaustion’.&nbsp;&nbsp;"
    ],
    "ru": [
      "адреса доступны, если все они в настоящее время & nbsp; при использовании это называется «исчерпание пула NAT». & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      378.08,
      385.28
    ],
    "en": [
      "In the previous example, the ACL specified a /24&nbsp; subnet of inside local addresses, but the NAT pool&nbsp;&nbsp;"
    ],
    "ru": [
      "В предыдущем примере ACL задал / 24 & nbsp; подсеть из внутренних локальных адресов, но пул NAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      385.28,
      392.24
    ],
    "en": [
      "only had 10 inside global addresses. So, there&nbsp; can only be 10 translations active at a time.&nbsp;&nbsp;"
    ],
    "ru": [
      "было всего 10 внутренних глобальных адресов. Итак, есть & nbsp; одновременно может быть активным только 10 переводов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      392.24,
      397.68
    ],
    "en": [
      "What happens if there are no available&nbsp; addresses, but a packet arrives and needs NAT?&nbsp;&nbsp;"
    ],
    "ru": [
      "Что произойдет, если нет доступных & nbsp; адресов, но приходит пакет и ему нужен NAT? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      397.68,
      403.2
    ],
    "en": [
      "If a packet from another inside host arrives and&nbsp; needs NAT but there are no available addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если приходит пакет от другого внутреннего хоста и & nbsp; требуется NAT, но нет доступных адресов, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      403.2,
      408.15999999999997
    ],
    "en": [
      "the router will drop the packet. The host&nbsp; will be unable to access outside networks&nbsp;&nbsp;"
    ],
    "ru": [
      "маршрутизатор сбросит пакет. Хост & nbsp; не сможет получить доступ к внешним сетям & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      408.15999999999997,
      414.48
    ],
    "en": [
      "until one of the inside global IP addresses&nbsp; becomes available. And how does that happen?&nbsp;&nbsp;"
    ],
    "ru": [
      "пока один из внутренних глобальных IP-адресов & nbsp; становится доступным. И как это происходит? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      414.48,
      421.04
    ],
    "en": [
      "Dynamic NAT entries will time out automatically&nbsp; if not used, or you can clear them manually. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Для динамических записей NAT автоматически истекает время ожидания & nbsp; если они не используются, или их можно очистить вручную. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      421.04,
      426.08
    ],
    "en": [
      "in our previous example if PC1 stops&nbsp; communicating with external hosts for a while,&nbsp;&nbsp;"
    ],
    "ru": [
      "в нашем предыдущем примере, если ПК1 останавливает & nbsp; некоторое время общается с внешними хостами, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      426.08,
      433.04
    ],
    "en": [
      "the inside global address 100.0.0.1 would become&nbsp; available again for a different host to use.&nbsp;&nbsp;"
    ],
    "ru": [
      "внутренний глобальный адрес 100.0.0.1 станет & nbsp; снова доступен для использования на другом хосте. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      433.04,
      440.08
    ],
    "en": [
      "Or you can use the CLEAR IP NAT TRANSLATION&nbsp; command anytime to manually clear translations."
    ],
    "ru": [
      "Или вы можете использовать CLEAR IP NAT TRANSLATION & nbsp; команда в любое время, чтобы вручную очистить переводы."
    ]
  },
  {
    "time": [
      440.08,
      448.88
    ],
    "en": [
      "Let me demonstrate that NAT pool exhaustion. A&nbsp; packet with source IP 192.168.0.167 arrives at R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне продемонстрировать, что пул NAT исчерпан. А & nbsp; пакет с IP-адресом источника 192.168.0.167 поступает на маршрутизатор R1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      448.88,
      457.76
    ],
    "en": [
      "It is translated to 100.0.0.1, and then forwarded.&nbsp; A packet with source IP 192.168.0.168 arrives&nbsp;&nbsp;"
    ],
    "ru": [
      "Он переводится в 100.0.0.1, а затем перенаправляется. & Nbsp; Приходит пакет с IP-адресом источника 192.168.0.168 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      457.76,
      463.76
    ],
    "en": [
      "and is translated to 100.0.0.2, and then&nbsp; forwarded. Some other hosts send traffic,&nbsp;&nbsp;"
    ],
    "ru": [
      "и переводится в 100.0.0.2, а затем & nbsp; переадресовано. Некоторые другие хосты отправляют трафик, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      463.76,
      471.52
    ],
    "en": [
      "and now those ten inside global IP addresses,&nbsp; 100.0.0.1 through.10, are all being used.&nbsp;&nbsp;"
    ],
    "ru": [
      "а теперь эти десять внутренних глобальных IP-адресов, & nbsp; Все используются с 100.0.0.1 по 10. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      471.52,
      478.96
    ],
    "en": [
      "If host 192.168.0.98 tries to send some&nbsp; traffic to the Internet, what happens?&nbsp;&nbsp;"
    ],
    "ru": [
      "Если хост 192.168.0.98 пытается отправить & nbsp; трафик в Интернет, что происходит? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      478.96,
      486.56
    ],
    "en": [
      "There are no addresses available, so the router&nbsp; will drop the packet. But, perhaps 192.168.0.167&nbsp;&nbsp;"
    ],
    "ru": [
      "Адреса недоступны, поэтому маршрутизатор & nbsp; сбросит пакет. Но, возможно, 192.168.0.167 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      486.56,
      493.84
    ],
    "en": [
      "stops communicating over the Internet. After&nbsp; some time, its dynamic translation is removed.&nbsp;&nbsp;"
    ],
    "ru": [
      "перестает общаться через Интернет. После & nbsp; через некоторое время его динамический перевод удаляется. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      493.84,
      501.84
    ],
    "en": [
      "If 192.168.0.98 tries to send that traffic&nbsp; again, , the 100.0.0.1 address is now available&nbsp;&nbsp;"
    ],
    "ru": [
      "Если 192.168.0.98 пытается отправить этот трафик & nbsp; опять же, адрес 100.0.0.1 теперь доступен & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      501.84,
      507.92
    ],
    "en": [
      "and it can reach the Internet. So, that’s a&nbsp; difference between static NAT and dynamic NAT.&nbsp;&nbsp;"
    ],
    "ru": [
      "и он может попасть в Интернет. Итак, это & ​​nbsp; разница между статическим NAT и динамическим NAT. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      507.92,
      513.92
    ],
    "en": [
      "Although both are one-to-one mappings, static&nbsp; NAT mappings are permanent. However dynamic NAT&nbsp;&nbsp;"
    ],
    "ru": [
      "Хотя оба являются сопоставлениями \"один-к-одному\", static & nbsp; Сопоставления NAT являются постоянными. Однако динамический NAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      513.92,
      518.48
    ],
    "en": [
      "mappings are temporary, they will time out when&nbsp; they are no longer needed, and then another host&nbsp;&nbsp;"
    ],
    "ru": [
      "сопоставления являются временными, они истекут, когда & nbsp; они больше не нужны, и тогда другой хост & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      518.48,
      524.72
    ],
    "en": [
      "can use that same public IP address. However,&nbsp; hosts are still unable to use the same public&nbsp;&nbsp;"
    ],
    "ru": [
      "может использовать тот же общедоступный IP-адрес. Однако & nbsp; хосты по-прежнему не могут использовать один и тот же общедоступный & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      524.72,
      532.56
    ],
    "en": [
      "IP address at the same time. To do that, you&nbsp; have to use PAT, Port Address Translation."
    ],
    "ru": [
      "IP-адрес одновременно. Для этого вы & nbsp; необходимо использовать PAT, преобразование адресов портов."
    ]
  },
  {
    "time": [
      532.56,
      538.16
    ],
    "en": [
      "But before looking at Port Address Translation,&nbsp; let’s cover dynamic NAT configuration.&nbsp;&nbsp;"
    ],
    "ru": [
      "Но прежде чем переходить к преобразованию адресов портов, & nbsp; давайте рассмотрим динамическую настройку NAT. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      538.16,
      543.68
    ],
    "en": [
      "First, just like in static NAT you must&nbsp; define the inside and outside interfaces.&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, как и в статическом NAT, вы должны & nbsp; определить внутренний и внешний интерфейсы. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      543.68,
      549.04
    ],
    "en": [
      "Then define the traffic that should be translated.&nbsp; As I mentioned before, traffic permitted by this&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем определите трафик, который следует транслировать. & Nbsp; Как я упоминал ранее, трафик, разрешенный этим & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      549.04,
      558.0
    ],
    "en": [
      "ACL will be translated. So, this ACL tells R1&nbsp; to translate all traffic from 192.168.0.0/24.&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL будет переведен. Итак, этот ACL сообщает R1 & nbsp; транслировать весь трафик с 192.168.0.0/24.&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      558.0,
      564.32
    ],
    "en": [
      "Then define the pool of inside global IP&nbsp; addresses. The command is IP NAT POOL,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем определите пул внутренних глобальных IP & nbsp; адреса. Команда: IP NAT POOL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      564.32,
      569.2
    ],
    "en": [
      "then the pool name. After that you&nbsp; specify the first IP address in the range,&nbsp;&nbsp;"
    ],
    "ru": [
      "затем название пула. После этого вы & nbsp; укажите первый IP-адрес в диапазоне, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      569.2,
      578.56
    ],
    "en": [
      "and then the last IP address in the range. So I&nbsp; specified a range from 100.0.0.0 to 100.0.0.255.&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем последний IP-адрес в диапазоне. Итак, я & nbsp; задан диапазон от 100.0.0.0 до 100.0.0.255. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      578.56,
      583.44
    ],
    "en": [
      "Finally, you have to specify the prefix&nbsp; length, either with the PREFIX-LENGTH option&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, вы должны указать префикс & nbsp; length, либо с параметром PREFIX-LENGTH & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      583.44,
      590.32
    ],
    "en": [
      "or the NETMASK option. IOS uses this to check&nbsp; if both addresses, the first and last address&nbsp;&nbsp;"
    ],
    "ru": [
      "или параметр СЕТЕВАЯ МАСКА. IOS использует это для проверки & nbsp; если оба адреса, первый и последний адрес & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      590.32,
      596.56
    ],
    "en": [
      "of the range, are in the same subnet. If&nbsp; they aren’t, the command will be rejected.&nbsp;&nbsp;"
    ],
    "ru": [
      "диапазона, находятся в одной подсети. Если & nbsp; это не так, команда будет отклонена. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      596.56,
      602.96
    ],
    "en": [
      "Finally, configure dynamic NAT by mapping the&nbsp; ACL to the pool, with IP NAT INSIDE SOURCE,&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, настройте динамический NAT, сопоставив & nbsp; ACL для пула с IP NAT INSIDE SOURCE, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      602.96,
      608.72
    ],
    "en": [
      "and then instead of STATIC use LIST, followed&nbsp; by the ACL number or name, and then POOL,&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем вместо СТАТИЧЕСКОГО использовать СПИСОК с последующим & nbsp; по номеру или имени ACL, а затем POOL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      608.72,
      614.88
    ],
    "en": [
      "followed by the pool name. And that’s all there&nbsp; is to dynamic NAT configuration. It’s a bit more&nbsp;&nbsp;"
    ],
    "ru": [
      "за которым следует имя пула. Вот и все. для динамической конфигурации NAT. Это немного больше & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      614.88,
      620.72
    ],
    "en": [
      "complicated than static NAT configuration, but&nbsp; it’s not so difficult. So, with the configurations&nbsp;&nbsp;"
    ],
    "ru": [
      "сложнее, чем статическая конфигурация NAT, но & nbsp; это не так уж и сложно. Итак, с конфигурациями & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      620.72,
      630.56
    ],
    "en": [
      "complete I sent some traffic from PC1 and PC2 to&nbsp; 8.8.8.8. Let’s check out R1’s translation table."
    ],
    "ru": [
      "завершено Я отправил некоторый трафик с ПК1 и ПК2 на & nbsp; 8.8.8.8. Давайте посмотрим на таблицу перевода R1."
    ]
  },
  {
    "time": [
      630.56,
      637.6
    ],
    "en": [
      "So, here’s R1’s table after sending pings as&nbsp; well as DNS traffic to the server at 8.8.8.8.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вот таблица R1 после отправки эхо-запросов как & nbsp; а также трафик DNS к серверу в 8.8.8.8. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      637.6,
      645.12
    ],
    "en": [
      "Notice there are three entries for each&nbsp; mapping, three for 192.168.0.167 to 100.0.0.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что для каждого & nbsp; есть три записи. сопоставление, три для 192.168.0.167–100.0.0.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      645.12,
      653.6
    ],
    "en": [
      "and three for 192.168.0.168 to 100.0.0.2. When&nbsp; the router dynamically creates the inside local to&nbsp;&nbsp;"
    ],
    "ru": [
      "и три от 192.168.0.168 до 100.0.0.2. Когда & nbsp; маршрутизатор динамически создает внутренний локальный узел для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      653.6,
      659.84
    ],
    "en": [
      "inside global mappings, these entries are created.&nbsp; And then when those mappings are actually used,&nbsp;&nbsp;"
    ],
    "ru": [
      "эти записи создаются внутри глобальных сопоставлений. А затем, когда эти сопоставления действительно используются, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      659.84,
      667.12
    ],
    "en": [
      "when translations are made, separate entries like&nbsp; these UDP entries or these ICMP entries are made.&nbsp;&nbsp;"
    ],
    "ru": [
      "при переводе отдельные записи, например & nbsp; создаются эти записи UDP или эти записи ICMP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      667.12,
      671.92
    ],
    "en": [
      "Now, those UDP and ICMP entries will&nbsp; be cleared after about a minute,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь эти записи UDP и ICMP будут & nbsp; очищается примерно через минуту, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      671.92,
      677.28
    ],
    "en": [
      "but the original dynamic mappings themselves&nbsp; have a default timeout value of 24 hours,&nbsp;&nbsp;"
    ],
    "ru": [
      "но сами исходные динамические сопоставления & nbsp; имеют значение тайм-аута по умолчанию, равное 24 часам, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      677.28,
      681.2
    ],
    "en": [
      "and each time a translation&nbsp; is made the timer resets.&nbsp;&nbsp;"
    ],
    "ru": [
      "и каждый раз перевод & nbsp; сбрасывается таймер. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      681.2,
      686.72
    ],
    "en": [
      "So, dynamic NAT mappings actually last quite&nbsp; a long time. You can change the default timers&nbsp;&nbsp;"
    ],
    "ru": [
      "Таким образом, динамическое сопоставление NAT на самом деле длится довольно & nbsp; долгое время. Вы можете изменить таймеры по умолчанию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      686.72,
      692.32
    ],
    "en": [
      "if you want, but that’s not something you need&nbsp; to know for the CCNA. Note that, although these&nbsp;&nbsp;"
    ],
    "ru": [
      "если хотите, но это не то, что вам нужно & nbsp; знать для CCNA. Обратите внимание, что, хотя эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      692.32,
      699.12
    ],
    "en": [
      "entries look like the static NAT entries from Day&nbsp; 44, if I use the CLEAR IP NAT TRANSLATION command,&nbsp;&nbsp;"
    ],
    "ru": [
      "записи выглядят как статические записи NAT из Day & nbsp; 44, если я использую команду CLEAR IP NAT TRANSLATION, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      699.12,
      704.24
    ],
    "en": [
      "these entries will be cleared because&nbsp; they are not static, they are dynamic."
    ],
    "ru": [
      "эти записи будут удалены, поскольку & nbsp; они не статичны, они динамичны."
    ]
  },
  {
    "time": [
      704.24,
      707.36
    ],
    "en": [
      "Now here’s SHOW IP NAT STATISTICS.&nbsp;&nbsp;"
    ],
    "ru": [
      "А теперь ПОКАЗАТЬ СТАТИСТИКУ IP NAT. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      707.36,
      711.68
    ],
    "en": [
      "Note that I entered this command when all&nbsp; 6 of those translation entries were active,&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что я ввел эту команду, когда все & nbsp; 6 из этих переводов были активными, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      711.68,
      718.16
    ],
    "en": [
      "so it displays 6 total active translations.&nbsp; 6 dynamic entries, and 4 extended.&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому он отображает всего 6 активных переводов. & nbsp; 6 динамических записей и 4 расширенных. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      718.16,
      723.6
    ],
    "en": [
      "So, all of those entries were dynamic, but can&nbsp; you guess which ones are the extended entries?&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, все эти записи были динамическими, но могут & nbsp; вы угадаете, какие из них являются расширенными записями? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      723.6,
      729.68
    ],
    "en": [
      "They are those UDP and ICMP temporary entries&nbsp; that were cleared after a minute. But again, the&nbsp;&nbsp;"
    ],
    "ru": [
      "Это временные записи UDP и ICMP & nbsp; которые были очищены через минуту. Но опять же, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      729.68,
      734.64
    ],
    "en": [
      "details of extended entries aren’t something you&nbsp; need to know for the CCNA. What I really want to&nbsp;&nbsp;"
    ],
    "ru": [
      "подробности расширенных записей вам не & nbsp; нужно знать для CCNA. Что я действительно хочу & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      734.64,
      741.28
    ],
    "en": [
      "point out here is that you can confirm the dynamic&nbsp; mapping from ACL 1 to POOL1 here. So, just like&nbsp;&nbsp;"
    ],
    "ru": [
      "укажите здесь, что вы можете подтвердить динамический & nbsp; отображение из ACL 1 в POOL1 здесь. Итак, как и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      741.28,
      747.52
    ],
    "en": [
      "with static NAT, the two SHOW commands you should&nbsp; know for dynamic NAT are SHOW IP NAT TRANSLATIONS&nbsp;&nbsp;"
    ],
    "ru": [
      "со статическим NAT две команды SHOW должны & nbsp; для динамического NAT известны следующие функции SHOW IP NAT TRANSLATIONS & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      747.52,
      755.12
    ],
    "en": [
      "and SHOW IP NAT STATISTICS. You should be familiar&nbsp; with both of these commands for the CCNA exam."
    ],
    "ru": [
      "и ПОКАЗАТЬ СТАТИСТИКУ IP NAT. Вы должны быть знакомы & nbsp; с обеими этими командами для экзамена CCNA."
    ]
  },
  {
    "time": [
      755.12,
      761.44
    ],
    "en": [
      "Now let’s move to PAT, Port Address Translation,&nbsp; which is also known as NAT overload.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь перейдем к PAT, преобразование адресов портов, & nbsp; что также известно как перегрузка NAT. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      761.44,
      766.48
    ],
    "en": [
      "It translates both the IP address and the&nbsp; port number of a packet, if necessary.&nbsp;&nbsp;"
    ],
    "ru": [
      "Он переводит как IP-адрес, так и & nbsp; номер порта пакета, если необходимо. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      766.48,
      772.0
    ],
    "en": [
      "And what’s the purpose of translating the port&nbsp; number? By using a unique port number for each&nbsp;&nbsp;"
    ],
    "ru": [
      "А зачем переводить порт & nbsp; количество? Используя уникальный номер порта для каждого & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      772.0,
      777.68
    ],
    "en": [
      "communication flow between internal hosts and&nbsp; external hosts, a single public IP address can&nbsp;&nbsp;"
    ],
    "ru": [
      "поток обмена данными между внутренними узлами и & nbsp; внешние хосты, один общедоступный IP-адрес может & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      777.68,
      784.64
    ],
    "en": [
      "be used by many different internal hosts. TCP&nbsp; and UDP port numbers are 16 bits in length,&nbsp;&nbsp;"
    ],
    "ru": [
      "может использоваться множеством различных внутренних хостов. TCP & nbsp; и номера портов UDP имеют длину 16 бит, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      784.64,
      790.88
    ],
    "en": [
      "which means there are over 65,000 port numbers.&nbsp; Then, the router will keep track of which inside&nbsp;&nbsp;"
    ],
    "ru": [
      "Это означает, что существует более 65 000 номеров портов. & nbsp; Затем маршрутизатор будет отслеживать, какие внутри & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      790.88,
      796.56
    ],
    "en": [
      "local address is using which inside global&nbsp; address and port. So, the router will keep&nbsp;&nbsp;"
    ],
    "ru": [
      "используется локальный адрес внутри глобального & nbsp; адрес и порт. Итак, роутер сохранит & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      796.56,
      803.28
    ],
    "en": [
      "track of the communication flows by using unique&nbsp; port numbers for each flow. Let me demonstrate.&nbsp;&nbsp;"
    ],
    "ru": [
      "отслеживать коммуникационные потоки с помощью уникальных & nbsp; номера портов для каждого потока. Позвольте мне продемонстрировать. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      803.28,
      812.88
    ],
    "en": [
      "PC1 sends a DNS message to 8.8.8.8. Its source IP&nbsp; is 192.168.0.167, and it selects a random source&nbsp;&nbsp;"
    ],
    "ru": [
      "ПК1 отправляет сообщение DNS на адрес 8.8.8.8. Исходный IP-адрес & nbsp; 192.168.0.167, и он выбирает случайный источник & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      812.88,
      823.68
    ],
    "en": [
      "port, 54321. PC2 also sends a DNS message&nbsp; to 8.8.8.8, with source IP 192.168.0.168.&nbsp;&nbsp;"
    ],
    "ru": [
      "порт, 54321. ПК2 также отправляет сообщение DNS & nbsp; до 8.8.8.8 с исходным IP 192.168.0.168. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      823.68,
      829.2
    ],
    "en": [
      "It also selects a random source port, and it&nbsp; happens to choose the same source port as PC1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Он также выбирает случайный порт источника и & nbsp; случайно выбирается тот же исходный порт, что и ПК1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      829.2,
      837.52
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
      829.2,
      837.52
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
      837.52,
      846.32
    ],
    "en": [
      "port the same, 54321. For PC2’s message, it&nbsp; also translates the source IP to 100.0.0.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "порт такой же, 54321. Для сообщения ПК2 это & ​​nbsp; также преобразует исходный IP-адрес в 100.0.0.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      846.32,
      853.04
    ],
    "en": [
      "but it changes the source port to 54322. Why&nbsp; does it do that? It’s so it can keep track of&nbsp;&nbsp;"
    ],
    "ru": [
      "но он меняет исходный порт на 54322. Почему & nbsp; это делает это? Это значит, что он может отслеживать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      853.04,
      858.48
    ],
    "en": [
      "the communication flows. If both flows&nbsp; use the same source IP and source port,&nbsp;&nbsp;"
    ],
    "ru": [
      "коммуникационные потоки. Если оба потока & nbsp; использовать тот же исходный IP-адрес и исходный порт, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      858.48,
      864.72
    ],
    "en": [
      "when the replies come from the server, R1&nbsp; won’t know which reply to send to which PC.&nbsp;&nbsp;"
    ],
    "ru": [
      "когда ответы приходят с сервера, R1 & nbsp; не будет знать, какой ответ отправить на какой компьютер. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      864.72,
      871.28
    ],
    "en": [
      "So, the server sends the replies to&nbsp; R1. Both have destination IP 100.0.0.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, сервер отправляет ответы на & nbsp; R1. Оба имеют IP-адрес назначения 100.0.0.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      871.28,
      879.28
    ],
    "en": [
      "but one has destination port 54321, and the&nbsp; other 54322. Because of the unique port numbers,&nbsp;&nbsp;"
    ],
    "ru": [
      "но у одного есть порт назначения 54321, а & nbsp; другой 54322. Из-за уникальных номеров портов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      879.28,
      887.28
    ],
    "en": [
      "R1 knows to send this reply to PC1 and this reply&nbsp; to PC2. In this example, both PCs selected the&nbsp;&nbsp;"
    ],
    "ru": [
      "R1 знает, что нужно отправить этот ответ на ПК1, и этот ответ & nbsp; к ПК2. В этом примере оба компьютера выбрали & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      887.28,
      893.12
    ],
    "en": [
      "same random source port number, because I wanted&nbsp; to show the router translating the source port.&nbsp;&nbsp;"
    ],
    "ru": [
      "тот же случайный номер исходного порта, потому что я хотел & nbsp; чтобы показать маршрутизатор, преобразующий исходный порт. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      893.12,
      897.52
    ],
    "en": [
      "However, if PC2 selected a different&nbsp; random source port than PC1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако, если ПК2 выбрал другой & nbsp; случайный порт источника, чем ПК1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      897.52,
      900.64
    ],
    "en": [
      "then R1 would have no need&nbsp; to translate the source port.&nbsp;&nbsp;"
    ],
    "ru": [
      "тогда R1 не будет нуждаться в & nbsp; для перевода исходного порта. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      900.64,
      906.8
    ],
    "en": [
      "It would simply use the source port PC2 selected&nbsp; and use that to keep track of the sessions.&nbsp;&nbsp;"
    ],
    "ru": [
      "Он просто использовал бы исходный порт PC2, выбранный & nbsp; и используйте это для отслеживания сеансов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      906.8,
      913.28
    ],
    "en": [
      "So, that’s how PAT works. Because many inside&nbsp; hosts can share a single public IP, PAT&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вот как работает PAT. Потому что многие внутри & nbsp; хосты могут использовать один общедоступный IP-адрес, PAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      913.28,
      919.6
    ],
    "en": [
      "is very useful for preserving public IP addresses,&nbsp; and it is used in networks all over the world.&nbsp;&nbsp;"
    ],
    "ru": [
      "очень полезен для сохранения общедоступных IP-адресов, & nbsp; и он используется в сетях по всему миру. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      919.6,
      924.88
    ],
    "en": [
      "Of the three types we have covered, static&nbsp; NAT, dynamic NAT, and PAT, PAT is the most&nbsp;&nbsp;"
    ],
    "ru": [
      "Из трех рассмотренных нами типов статические & nbsp; NAT, динамический NAT и PAT, PAT - это наиболее & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      924.88,
      931.28
    ],
    "en": [
      "widely used because it allows so many inside&nbsp; hosts to share a single public IP address."
    ],
    "ru": [
      "широко используется, потому что позволяет внутри & nbsp; хосты для совместного использования одного общедоступного IP-адреса."
    ]
  },
  {
    "time": [
      931.28,
      938.48
    ],
    "en": [
      "Here’s how to configure PAT. It’s basically the&nbsp; same as dynamic NAT, you just add one keyword. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот как настроить PAT. По сути, это & ​​nbsp; так же, как динамический NAT, вы просто добавляете одно ключевое слово. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      938.48,
      944.56
    ],
    "en": [
      "first define the inside and outside interfaces.&nbsp; Then, define which traffic should be translated&nbsp;&nbsp;"
    ],
    "ru": [
      "сначала определите внутренний и внешний интерфейсы. & nbsp; Затем определите, какой трафик следует переводить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      944.56,
      952.4
    ],
    "en": [
      "by using an ACL. Again, traffic permitted by the&nbsp; ACL will be translated. Then define the pool of&nbsp;&nbsp;"
    ],
    "ru": [
      "с помощью ACL. Опять же, трафик разрешен & nbsp; ACL будет переведен. Затем определите пул & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      952.4,
      962.0
    ],
    "en": [
      "inside global IP addresses. This time I defined&nbsp; a smaller range, from 100.0.0.0 to 100.0.0.3.&nbsp;&nbsp;"
    ],
    "ru": [
      "внутри глобальных IP-адресов. На этот раз я определил & nbsp; меньший диапазон от 100.0.0.0 до 100.0.0.3. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      962.0,
      966.48
    ],
    "en": [
      "Chances are, unless the internal network is&nbsp; very large, you won’t need more than a single&nbsp;&nbsp;"
    ],
    "ru": [
      "Скорее всего, если только внутренняя сеть не & nbsp; очень большой, вам не понадобится больше одного & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      966.48,
      973.36
    ],
    "en": [
      "IP address, but this provides some scalability,&nbsp; some room for growth. Note that I still specified&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адрес, но это обеспечивает некоторую масштабируемость, & nbsp; немного места для роста. Обратите внимание, что я все еще указал & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      973.36,
      979.76
    ],
    "en": [
      "a prefix length of 24 bits. As long as the&nbsp; specified address range is in the same subnet,&nbsp;&nbsp;"
    ],
    "ru": [
      "длина префикса 24 бита. Пока & NBSP; указанный диапазон адресов находится в той же подсети, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      979.76,
      986.96
    ],
    "en": [
      "this specified prefix length doesn’t&nbsp; really matter. 100.0.0.0 through 100.0.0.3&nbsp;&nbsp;"
    ],
    "ru": [
      "указанная длина префикса не & nbsp; действительно имеет значение. От 100.0.0.0 до 100.0.0.3 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      986.96,
      995.68
    ],
    "en": [
      "all fit in the subnet 100.0.0.0/24, so the command&nbsp; is valid. Finally, the NAT statement itself.&nbsp;&nbsp;"
    ],
    "ru": [
      "все умещаются в подсети 100.0.0.0/24, поэтому команда & nbsp; является действительным. Наконец, сам оператор NAT. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      995.68,
      1002.16
    ],
    "en": [
      "It’s the same as for dynamic NAT, except at&nbsp; the end you use the keyword OVERLOAD. IP NAT&nbsp;&nbsp;"
    ],
    "ru": [
      "То же, что и для динамического NAT, за исключением & nbsp; в конце вы используете ключевое слово ПЕРЕГРУЗКА. IP-NAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1002.16,
      1013.68
    ],
    "en": [
      "INSIDE SOURCE LIST 1 POOL POOL1 OVERLOAD. So,&nbsp; PC1 and PC2 both send DNS requests to 8.8.8.8.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВНУТРЕННИЙ СПИСОК ИСТОЧНИКОВ 1 ПЕРЕГРУЗКА БАССЕЙНА 1. Итак, & nbsp; И ПК1, и ПК2 отправляют запросы DNS на адрес 8.8.8.8. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1013.68,
      1019.12
    ],
    "en": [
      "Let’s take a look at the NAT&nbsp; translations and statistics on R1."
    ],
    "ru": [
      "Давайте посмотрим на NAT & nbsp; переводы и статистика по R1."
    ]
  },
  {
    "time": [
      1019.12,
      1024.8
    ],
    "en": [
      "So, here are the translations on R1. One big&nbsp; difference compared to regular dynamic NAT&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вот переводы на R1. Один большой & NBSP; разница по сравнению с обычным динамическим NAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1024.8,
      1030.8
    ],
    "en": [
      "is that those one-to-one dynamic mapping entries&nbsp; aren’t displayed. That’s because, when using PAT,&nbsp;&nbsp;"
    ],
    "ru": [
      "состоит в том, что записи однозначного динамического сопоставления & nbsp; не отображаются. Это потому, что при использовании PAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1030.8,
      1036.96
    ],
    "en": [
      "there are no one-to-one mappings, they’re many&nbsp; to one. Many inside local addresses to one&nbsp;&nbsp;"
    ],
    "ru": [
      "однозначных сопоставлений нет, их много & nbsp; к одному. Многие внутренние локальные адреса обращаются к одному & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1036.96,
      1047.36
    ],
    "en": [
      "inside global address. As you can see, both&nbsp; 192.168.0.167 and .168 are using 100.0.0.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "внутренний глобальный адрес. Как видите, оба & nbsp; 192.168.0.167 и .168 используют 100.0.0.1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1047.36,
      1053.36
    ],
    "en": [
      "They both selected different source port numbers,&nbsp; so R1 didn’t need to translate the port numbers.&nbsp;&nbsp;"
    ],
    "ru": [
      "Оба они выбрали разные номера портов источника, & nbsp; так что маршрутизатору R1 не нужно было переводить номера портов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1053.36,
      1060.8
    ],
    "en": [
      "It will use port number 63925 to track the&nbsp; communication flow between PC1 and 8.8.8.8,&nbsp;&nbsp;"
    ],
    "ru": [
      "Он будет использовать номер порта 63925 для отслеживания & nbsp; коммуникационный поток между ПК1 и 8.8.8.8, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1060.8,
      1069.36
    ],
    "en": [
      "and it will use port number 59549 to track the&nbsp; communication flow between PC2 and 8.8.8.8.&nbsp;&nbsp;"
    ],
    "ru": [
      "и он будет использовать номер порта 59549 для отслеживания & nbsp; коммуникационный поток между ПК2 и 8.8.8.8. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1069.36,
      1074.88
    ],
    "en": [
      "And here’s SHOW IP NAT STATISTICS. Feel free&nbsp; to pause the video to check out the output if&nbsp;&nbsp;"
    ],
    "ru": [
      "А вот ПОКАЗАТЬ СТАТИСТИКУ IP NAT. Не стесняйтесь & nbsp; , чтобы приостановить видео, чтобы проверить результат, если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1074.88,
      1081.44
    ],
    "en": [
      "you’re interested, but now I’m going to move on&nbsp; to show you one more useful way to configure PAT."
    ],
    "ru": [
      "вам интересно, но теперь я перейду к & nbsp; чтобы показать вам еще один полезный способ настройки PAT."
    ]
  },
  {
    "time": [
      1081.44,
      1086.08
    ],
    "en": [
      "One more way to configure PAT, and probably&nbsp; the more common way, is to configure the&nbsp;&nbsp;"
    ],
    "ru": [
      "Еще один способ настроить PAT и, возможно, & nbsp; более распространенный способ - настроить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1086.08,
      1092.0
    ],
    "en": [
      "router to use its own public IP address&nbsp; when translating the source IP of packets.&nbsp;&nbsp;"
    ],
    "ru": [
      "маршрутизатор для использования собственного общедоступного IP-адреса & nbsp; при трансляции IP-адреса источника пакетов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1092.0,
      1097.12
    ],
    "en": [
      "So, as always you must configure the inside&nbsp; and outside interfaces on the router.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, как всегда, вы должны настроить внутренние & nbsp; и внешние интерфейсы на маршрутизаторе."
    ]
  },
  {
    "time": [
      1097.12,
      1102.48
    ],
    "en": [
      "And then just like before use an ACL to&nbsp; define which traffic should be translated.&nbsp;&nbsp;"
    ],
    "ru": [
      "А затем, как и раньше, используйте ACL для & nbsp; определите, какой трафик следует транслировать. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1102.48,
      1106.48
    ],
    "en": [
      "Here’s the difference with the&nbsp; previous method of configuring PAT.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот в чем разница с & nbsp; предыдущий способ настройки PAT. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1106.48,
      1110.0
    ],
    "en": [
      "Instead of specifying a POOL&nbsp; and then the OVERLOAD keyword,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вместо указания POOL & nbsp; а затем ключевое слово ПЕРЕГРУЗКА, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1110.0,
      1117.92
    ],
    "en": [
      "you specify INTERFACE, then the outside&nbsp; interface, g0/0 in R1’s case, and then OVERLOAD.&nbsp;&nbsp;"
    ],
    "ru": [
      "вы указываете ИНТЕРФЕЙС, затем внешний & nbsp; interface, g0 / 0 в случае R1, а затем OVERLOAD. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1117.92,
      1125.6
    ],
    "en": [
      "So, R1 will translate the source IP address of&nbsp; packets from 192.168.0.0/24 to the IP address of&nbsp;&nbsp;"
    ],
    "ru": [
      "Таким образом, R1 переведет исходный IP-адрес & nbsp; пакеты из 192.168.0.0/24 на IP-адрес & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1125.6,
      1134.64
    ],
    "en": [
      "its G0/0 interface, 203.0.113.1. It will also use&nbsp; a unique source port number for each traffic flow,&nbsp;&nbsp;"
    ],
    "ru": [
      "его интерфейс G0 / 0, 203.0.113.1. Он также будет использовать & nbsp; уникальный номер исходного порта для каждого потока трафика, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1134.64,
      1141.36
    ],
    "en": [
      "so it can keep track of them and multiple&nbsp; internal hosts can share that single IP address."
    ],
    "ru": [
      "так что он может отслеживать их и несколько & nbsp; внутренние хосты могут совместно использовать этот единственный IP-адрес."
    ]
  },
  {
    "time": [
      1141.36,
      1149.04
    ],
    "en": [
      "Let me demonstrate that. PC1 and PC2&nbsp; both send DNS requests to 8.8.8.8.&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне продемонстрировать это. ПК1 и ПК2 & nbsp; оба отправляют DNS-запросы на 8.8.8.8. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1149.04,
      1158.24
    ],
    "en": [
      "Notice that they both selected a different random&nbsp; source port. 65205 for PC1 and 59641 for PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что они оба выбрали разные случайные & nbsp; исходный порт. 65205 для ПК1 и 59641 для ПК2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1158.24,
      1163.2
    ],
    "en": [
      "R1 translates the source IP address of both&nbsp; packets, changing them to the IP of R1’s&nbsp;&nbsp;"
    ],
    "ru": [
      "R1 преобразует исходный IP-адрес обоих & nbsp; пакетов, меняя их на IP-адрес маршрутизатора R1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1163.2,
      1170.96
    ],
    "en": [
      "G0/0 interface, 203.0.113.1. Because both&nbsp; source port numbers are already different,&nbsp;&nbsp;"
    ],
    "ru": [
      "Интерфейс G0 / 0, 203.0.113.1. Поскольку оба & nbsp; номера исходных портов уже разные, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1170.96,
      1176.96
    ],
    "en": [
      "there is no need to translate the port numbers.&nbsp; The server sends the replies, and R1 translates&nbsp;&nbsp;"
    ],
    "ru": [
      "нет необходимости переводить номера портов. & nbsp; Сервер отправляет ответы, а R1 переводит & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1176.96,
      1182.32
    ],
    "en": [
      "them back and sends them to their correct&nbsp; destinations. Because of the unique port numbers,&nbsp;&nbsp;"
    ],
    "ru": [
      "их обратно и отправляет их на правильный & nbsp; направления. Из-за уникальных номеров портов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1182.32,
      1192.72
    ],
    "en": [
      "R1 knows which to translate back to 192.168.0.167&nbsp; and which to translate back to 192.168.0.168."
    ],
    "ru": [
      "R1 знает, что нужно преобразовать обратно в 192.168.0.167 & nbsp; и который нужно перевести обратно на 192.168.0.168."
    ]
  },
  {
    "time": [
      1192.72,
      1196.56
    ],
    "en": [
      "Here is R1’s NAT translation table after that.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот таблица преобразования NAT маршрутизатора R1 после этого. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1196.56,
      1206.08
    ],
    "en": [
      "Notice that both 192.168.0.167 and .168&nbsp; are using R1’s IP address, 203.0.113.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что и 192.168.0.167, и .168 & nbsp; используют IP-адрес маршрутизатора R1, 203.0.113.1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1206.08,
      1210.64
    ],
    "en": [
      "Also notice that, as I said, there was no need&nbsp; for R1 to translate the source port numbers,&nbsp;&nbsp;"
    ],
    "ru": [
      "Также обратите внимание, что, как я уже сказал, не было необходимости в & nbsp; для R1, чтобы преобразовать номера портов источника, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1210.64,
      1217.76
    ],
    "en": [
      "because they were already unique. And here is SHOW&nbsp; IP NAT STATISTICS. Again, feel free to pause and&nbsp;&nbsp;"
    ],
    "ru": [
      "потому что они уже были уникальными. А вот и ШОУ & nbsp; СТАТИСТИКА IP NAT. Опять же, можете сделать паузу и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1217.76,
      1224.16
    ],
    "en": [
      "check this command out if you want, but going in&nbsp; depth into all of the output here isn’t necessary."
    ],
    "ru": [
      "проверьте эту команду, если хотите, но войдя в & nbsp; вдаваться в подробности всего вывода здесь не нужно."
    ]
  },
  {
    "time": [
      1224.16,
      1227.28
    ],
    "en": [
      "Here are the new commands&nbsp; we covered in this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот новые команды & nbsp; мы рассмотрели в этом видео. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1227.28,
      1231.76
    ],
    "en": [
      "If you don’t remember these commands, go back&nbsp; in the video to review, and also make sure to&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы не помните эти команды, вернитесь & nbsp; в видео для просмотра, а также убедитесь, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1231.76,
      1238.88
    ],
    "en": [
      "practice them in packet tracer either by making&nbsp; your own labs or by doing my practice labs."
    ],
    "ru": [
      "попрактикуйтесь в их использовании в трассировщике пакетов, сделав & nbsp; в ваших собственных лабораториях или в моих практических лабораториях."
    ]
  },
  {
    "time": [
      1238.88,
      1243.44
    ],
    "en": [
      "Before moving on to the quiz, let’s&nbsp; review what we covered in this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте & nbsp; просмотрите то, что мы рассмотрели в этом видео. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1243.44,
      1249.12
    ],
    "en": [
      "First, I demonstrated how static NAT not only&nbsp; allows inside hosts to access external networks,&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я продемонстрировал, как статический NAT не только & nbsp; позволяет внутренним хостам получать доступ к внешним сетям, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1249.12,
      1253.6
    ],
    "en": [
      "but it also allows hosts on external&nbsp; networks to access the internal hosts&nbsp;&nbsp;"
    ],
    "ru": [
      "но он также позволяет хостам на внешних & nbsp; сети для доступа к внутренним узлам & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1253.6,
      1262.56
    ],
    "en": [
      "using the mapped inside global IP address. Then I&nbsp; covered dynamic NAT and dynamic PAT. Dynamic PAT&nbsp;&nbsp;"
    ],
    "ru": [
      "используя сопоставленный внутренний глобальный IP-адрес. Тогда я & nbsp; покрыл динамический NAT и динамический PAT. Динамический PAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1262.56,
      1268.88
    ],
    "en": [
      "is probably the most common type of NAT. It allows&nbsp; many internal hosts to share a single public IP,&nbsp;&nbsp;"
    ],
    "ru": [
      "вероятно, самый распространенный тип NAT. Это позволяет & nbsp; множество внутренних хостов для совместного использования одного общедоступного IP-адреса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1268.88,
      1275.28
    ],
    "en": [
      "all at the same time. My home router, for&nbsp; example, has a single public IP address, and all&nbsp;&nbsp;"
    ],
    "ru": [
      "Все одновременно. Мой домашний маршрутизатор для & nbsp; например, имеет один общедоступный IP-адрес и все & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1275.28,
      1281.6
    ],
    "en": [
      "of the devices in my home such as my PC, phones&nbsp; connected to Wi-Fi, etc, all share the single&nbsp;&nbsp;"
    ],
    "ru": [
      "устройств в моем доме, таких как мой компьютер, телефоны & nbsp; подключены к Wi-Fi и т. д., все используют один & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1281.6,
      1287.84
    ],
    "en": [
      "public IP address when accessing the Internet. And&nbsp; make sure to watch until the end of the quiz for&nbsp;&nbsp;"
    ],
    "ru": [
      "публичный IP-адрес при доступе в Интернет. И & NBSP; обязательно просмотрите до конца викторину на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1287.84,
      1295.84
    ],
    "en": [
      "a bonus question from Boson Software’s ExSim&nbsp; for CCNA. Okay, let’s go to quiz question 1."
    ],
    "ru": [
      "бонусный вопрос от ExSim компании Boson Software & nbsp; для CCNA. Хорошо, перейдем к вопросу 1 викторины."
    ]
  },
  {
    "time": [
      1295.84,
      1301.84
    ],
    "en": [
      "Which of the following NAT types best fulfills&nbsp; the goal of preserving public IPv4 addresses?&nbsp;&nbsp;"
    ],
    "ru": [
      "Какой из следующих типов NAT лучше всего подходит для & nbsp; цель сохранения общедоступных адресов IPv4? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1301.84,
      1308.64
    ],
    "en": [
      "Pause the video now to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1308.64,
      1315.52
    ],
    "en": [
      "Okay, the answer is D, NAT Overload, aka PAT.&nbsp; NAT Overload allows many internal hosts to&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ответ - D, перегрузка NAT, также известная как PAT. & Nbsp; Перегрузка NAT позволяет множеству внутренних хостов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1315.52,
      1320.48
    ],
    "en": [
      "use a single public IP address because the&nbsp; router keeps track of communication flows&nbsp;&nbsp;"
    ],
    "ru": [
      "используйте один общедоступный IP-адрес, поскольку & nbsp; маршрутизатор отслеживает коммуникационные потоки & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1320.48,
      1326.56
    ],
    "en": [
      "using the Layer 4 port number. This means most&nbsp; networks only need a single public IP address,&nbsp;&nbsp;"
    ],
    "ru": [
      "используя номер порта уровня 4. Это означает, что большинство & nbsp; сетям нужен только один общедоступный IP-адрес, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1326.56,
      1334.64
    ],
    "en": [
      "instead of each device requiring a unique&nbsp; public IP address. Okay, let’s go to question 2."
    ],
    "ru": [
      "вместо каждого устройства, требующего уникального & nbsp; публичный IP-адрес. Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1334.64,
      1338.24
    ],
    "en": [
      "Which of the following dynamic NAT&nbsp; configurations will translate inside&nbsp;&nbsp;"
    ],
    "ru": [
      "Какой из следующих динамических NAT & nbsp; конфигурации будут переведены внутри & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1338.24,
      1347.52
    ],
    "en": [
      "local addresses from 172.16.1.0/24 to&nbsp; addresses from the subnet 203.0.113.0/25?&nbsp;&nbsp;"
    ],
    "ru": [
      "локальные адреса от 172.16.1.0/24 до & nbsp; адреса из подсети 203.0.113.0/25?&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1347.52,
      1354.4
    ],
    "en": [
      "Pause the video now to think about the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1354.4,
      1361.84
    ],
    "en": [
      "Okay, the answer is B. So, what’s wrong with&nbsp; A and C? In A, the pool’s netmask is correct,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ответ - Б. Итак, что не так с & nbsp; А и С? В A сетевая маска пула правильная, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1361.84,
      1376.24
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
      1361.84,
      1376.24
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
      1376.24,
      1385.36
    ],
    "en": [
      "not fall in the 203.0.113.0/25 subnet, so the&nbsp; router would reject this command. How about C?&nbsp;&nbsp;"
    ],
    "ru": [
      "не попадают в подсеть 203.0.113.0/25, поэтому & nbsp; маршрутизатор отклонит эту команду. Как насчет C? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1385.36,
      1392.8
    ],
    "en": [
      "The ACL’s mask is 255.255.255.0, but&nbsp; ACLs are supposed to use wildcard masks,&nbsp;&nbsp;"
    ],
    "ru": [
      "Маска ACL - 255.255.255.0, но & nbsp; В списках ACL должны использоваться маски подстановки, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1392.8,
      1401.28
    ],
    "en": [
      "so /24 should be 0.0.0.255.&nbsp; Okay, let’s go to question 3."
    ],
    "ru": [
      "so / 24 должен быть 0.0.0.255. & nbsp; Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1401.28,
      1407.92
    ],
    "en": [
      "Dynamic NAT is configured on R1 and a pool&nbsp; of 10 inside global addresses is specified.&nbsp;&nbsp;"
    ],
    "ru": [
      "Динамический NAT настроен на маршрутизаторе R1 и пуле & nbsp; из 10 внутренних глобальных адресов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1407.92,
      1411.68
    ],
    "en": [
      "Currently, all 10 addresses&nbsp; are being used by inside hosts,&nbsp;&nbsp;"
    ],
    "ru": [
      "В настоящее время все 10 адресов & nbsp; используются внутренними хостами, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1411.68,
      1415.68
    ],
    "en": [
      "but another inside host attempts&nbsp; to send a packet over the Internet.&nbsp;&nbsp;"
    ],
    "ru": [
      "но другой внутренний хост пытается & nbsp; для отправки пакета через Интернет. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1415.68,
      1425.12
    ],
    "en": [
      "What does R1 do with this packet? Pause&nbsp; the video now to think about the answer."
    ],
    "ru": [
      "Что R1 делает с этим пакетом? Приостановить & nbsp; видео сейчас, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1425.12,
      1428.88
    ],
    "en": [
      "Okay, the answer is B, it discards the packet.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ответ - B, пакет отбрасывает. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1428.88,
      1433.36
    ],
    "en": [
      "When dynamic NAT is being used and a packet&nbsp; requires NAT, but there are no available&nbsp;&nbsp;"
    ],
    "ru": [
      "Когда используется динамический NAT и пакет & nbsp; требуется NAT, но нет доступных & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1433.36,
      1440.72
    ],
    "en": [
      "addresses in the pool, the router will simply&nbsp; discard the packet. Okay, let’s go to question 4."
    ],
    "ru": [
      "адресов в пуле, роутер просто & nbsp; отказаться от пакета. Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1440.72,
      1444.16
    ],
    "en": [
      "Which of the following dynamic NAT&nbsp; configurations will translate inside&nbsp;&nbsp;"
    ],
    "ru": [
      "Какой из следующих динамических NAT & nbsp; конфигурации будут переведены внутри & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1444.16,
      1452.0
    ],
    "en": [
      "local addresses from 10.0.1.0/27 to use the&nbsp; IP address of the router’s G0/1 interface?&nbsp;&nbsp;"
    ],
    "ru": [
      "локальные адреса из 10.0.1.0/27 для использования & nbsp; IP-адрес интерфейса G0 / 1 маршрутизатора? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1452.0,
      1459.28
    ],
    "en": [
      "Pause the video now to think about the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1459.28,
      1463.36
    ],
    "en": [
      "Okay the answer is A. It’s the&nbsp; only option that uses the correct&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ответ - А. Это & nbsp; единственный вариант, который использует правильный & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1463.36,
      1468.4
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
      1463.36,
      1468.4
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
      1468.4,
      1476.4
    ],
    "en": [
      "and assigns the inside and outside interfaces&nbsp; correctly. Okay, let’s go to question 5."
    ],
    "ru": [
      "и назначает внутренний и внешний интерфейсы & nbsp; правильно. Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1476.4,
      1479.84
    ],
    "en": [
      "After specifying the inside&nbsp; and outside NAT interfaces,&nbsp;&nbsp;"
    ],
    "ru": [
      "После указания внутренней & nbsp; и вне интерфейсов NAT, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1479.84,
      1487.36
    ],
    "en": [
      "you issue the following commands on R1. What&nbsp; will happen to hosts from the 192.168.1.0/24&nbsp;&nbsp;"
    ],
    "ru": [
      "вы вводите следующие команды на R1. Что & nbsp; произойдет с хостами из 192.168.1.0/24&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1487.36,
      1495.92
    ],
    "en": [
      "subnet? Pause the video now&nbsp; to think about the answer."
    ],
    "ru": [
      "подсеть? Приостановить видео сейчас & nbsp; подумать над ответом."
    ]
  },
  {
    "time": [
      1495.92,
      1499.76
    ],
    "en": [
      "Okay, the answer is C, the packets&nbsp; they send will not be translated by&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ответ - C, пакеты & nbsp; они не будут переведены & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1499.76,
      1505.04
    ],
    "en": [
      "R1. When an ACL is used to identify&nbsp; which traffic should be translated,&nbsp;&nbsp;"
    ],
    "ru": [
      "R1. Когда ACL используется для идентификации & nbsp; какой трафик следует переводить, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1505.04,
      1510.4
    ],
    "en": [
      "such as in dynamic NAT and PAT, packets&nbsp; permitted by the ACL will be translated,&nbsp;&nbsp;"
    ],
    "ru": [
      "например, при динамическом NAT и PAT, пакеты & nbsp; разрешенные ACL будут переведены, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1510.4,
      1516.48
    ],
    "en": [
      "and packets denied by the ACL won’t be translated.&nbsp; Even though the ACL denies the packets,&nbsp;&nbsp;"
    ],
    "ru": [
      "и пакеты, запрещенные ACL, не будут переведены. Несмотря на то, что ACL отклоняет пакеты, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1516.48,
      1521.76
    ],
    "en": [
      "it doesn’t mean the router will drop the packets,&nbsp; it just won’t translate them. Okay, that’s all&nbsp;&nbsp;"
    ],
    "ru": [
      "это не означает, что маршрутизатор отбрасывает пакеты, & nbsp; он просто не переведет их. Хорошо, это все & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1521.76,
      1530.24
    ],
    "en": [
      "for the quiz. Now let’s take a look at a bonus&nbsp; question from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "для викторины. Теперь давайте посмотрим на бонус & nbsp; вопрос от ExSim компании Boson Software для CCNA."
    ]
  },
  {
    "time": [
      1530.24,
      1535.76
    ],
    "en": [
      "Okay, here's today's Boson ExSim practice&nbsp; question. HostA is attempting to initiate&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практика Boson ExSim & nbsp; вопрос. HostA пытается инициировать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1535.76,
      1542.8
    ],
    "en": [
      "an HTTP connection to HostB through a NAT router&nbsp; named RouterA. The devices use the following IP&nbsp;&nbsp;"
    ],
    "ru": [
      "HTTP-соединение с HostB через NAT-маршрутизатор & nbsp; с именем RouterA. Устройства используют следующие IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1542.8,
      1548.48
    ],
    "en": [
      "addresses. Here they are. Which of the following&nbsp; lines of output would you expect to be displayed&nbsp;&nbsp;"
    ],
    "ru": [
      "адреса. Они здесь. Какой из следующих & nbsp; ожидаемые строки вывода & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1548.48,
      1554.56
    ],
    "en": [
      "when you issue the SHOW IP NAT TRANSLATIONS&nbsp; command on RouterA? Select the best answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "когда вы выдаете SHOW IP NAT TRANSLATIONS & nbsp; команда на RouterA? Выберите лучший ответ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1554.56,
      1564.32
    ],
    "en": [
      "Okay, pause the video now. Take a look at&nbsp; these options and select the best answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, поставь видео на паузу. Взгляните на & nbsp; эти варианты и выберите лучший ответ. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1564.32,
      1571.92
    ],
    "en": [
      "Okay let's check. So, first off, what should the&nbsp; outside local and outside global addresses be?&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, проверим. Итак, во-первых, что должно быть & nbsp; вне локальных и внешних глобальных адресов быть? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1571.92,
      1579.6
    ],
    "en": [
      "They should be the IP address of the destination&nbsp; host, that is HostB, 192.0.2.28. So all of these&nbsp;&nbsp;"
    ],
    "ru": [
      "Это должен быть IP-адрес пункта назначения & nbsp; host, то есть HostB, 192.0.2.28. Итак, все эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1579.6,
      1584.8
    ],
    "en": [
      "are correct. Now how about the inside&nbsp; local address, what should that be?&nbsp;&nbsp;"
    ],
    "ru": [
      "верны. А теперь как насчет внутренней & nbsp; местный адрес, что это должно быть? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1584.8,
      1591.44
    ],
    "en": [
      "That should be the IP address of the source host,&nbsp; so the actual IP address configured on HostA in&nbsp;&nbsp;"
    ],
    "ru": [
      "Это должен быть IP-адрес исходного хоста, & nbsp; поэтому фактический IP-адрес, настроенный на HostA в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1591.44,
      1602.96
    ],
    "en": [
      "this case. So, 10.1.7.7. So that means A and D are&nbsp; incorrect. Their inside local address is 10.1.7.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это дело. Итак, 10.1.7.7. Это означает, что A и D & nbsp; неверно. Их внутренний локальный адрес - 10.1.7.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1602.96,
      1607.92
    ],
    "en": [
      "which is the IP address of RouterA's internal&nbsp; interface, and that is not correct. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "который является IP-адресом внутреннего & nbsp; интерфейс, и это неверно. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1607.92,
      1615.12
    ],
    "en": [
      "the correct answer is either B or C. Now, how&nbsp; about the inside global IP address? Should that be&nbsp;&nbsp;"
    ],
    "ru": [
      "правильный ответ - B или C. Теперь как & nbsp; о внутреннем глобальном IP-адресе? Если это будет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1615.12,
      1627.12
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
      1615.12,
      1627.12
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
      1627.12,
      1635.04
    ],
    "en": [
      "and 203.0.113.62 is the IP address of RouterA's&nbsp; external interface. Now, when doing PAT&nbsp;&nbsp;"
    ],
    "ru": [
      "а 203.0.113.62 - это IP-адрес маршрутизатора & nbsp; внешний интерфейс. Теперь при выполнении PAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1635.04,
      1639.92
    ],
    "en": [
      "and translating to the IP address of the router's&nbsp; interface, you should translate to the IP&nbsp;&nbsp;"
    ],
    "ru": [
      "и перевод на IP-адрес маршрутизатора & nbsp; интерфейс следует перевести на IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1639.92,
      1647.6
    ],
    "en": [
      "address of the external interface, the public IP&nbsp; address. So, that means C is the correct answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "адрес внешнего интерфейса, публичный IP & nbsp; адрес. Итак, это означает, что C - правильный ответ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1647.6,
      1654.56
    ],
    "en": [
      "So I will click on show answer and indeed that&nbsp; is correct. So, here is Boson's explanation of&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я нажму на \"Показать ответ\" и действительно, что & nbsp; верно. Итак, вот объяснение & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1654.56,
      1666.4
    ],
    "en": [
      "that answer. You can pause the video now to read&nbsp; this explanation. And there's some more down here.&nbsp;&nbsp;"
    ],
    "ru": [
      "этот ответ. Теперь вы можете приостановить видео, чтобы прочитать & nbsp; это объяснение. И здесь есть еще кое-что. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1666.4,
      1670.48
    ],
    "en": [
      "Okay, so that was a quick look at&nbsp; Boson Software's ExSim for CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это был быстрый взгляд на & nbsp; ExSim от Boson Software для CCNA. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1670.48,
      1674.8
    ],
    "en": [
      "These are without a doubt the best practice&nbsp; exams for the CCNA, and I highly recommend&nbsp;&nbsp;"
    ],
    "ru": [
      "Это, без сомнения, лучшая практика & nbsp; экзамены на CCNA, и я настоятельно рекомендую & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1674.8,
      1682.08
    ],
    "en": [
      "them. If you want to get Boson ExSim, please&nbsp; follow the link in the video description."
    ],
    "ru": [
      "их. Если вы хотите получить Boson ExSim, пожалуйста, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1682.08,
      1685.44
    ],
    "en": [
      "There are supplementary materials for this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "К этому видео есть дополнительные материалы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1685.44,
      1689.36
    ],
    "en": [
      "There is a flashcard deck to&nbsp; use with the software ‘Anki’.&nbsp;&nbsp;"
    ],
    "ru": [
      "Существует колода карточек, чтобы & nbsp; использовать с программным обеспечением «Anki». & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1689.36,
      1694.32
    ],
    "en": [
      "There will also be a packet tracer practice&nbsp; lab so you can get some hands-on practice.&nbsp;&nbsp;"
    ],
    "ru": [
      "Также будет практика пакетного трассировщика & nbsp; лаборатории, чтобы вы могли немного попрактиковаться. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1694.32,
      1699.76
    ],
    "en": [
      "That will be in the next video. Sign up for my&nbsp; mailing list via the link in the description,&nbsp;&nbsp;"
    ],
    "ru": [
      "Об этом будет в следующем видео. Подпишитесь на мою & nbsp; список рассылки по ссылке в описании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1699.76,
      1706.0
    ],
    "en": [
      "and I’ll send you all of the flashcards&nbsp; and packet tracer lab files for the course."
    ],
    "ru": [
      "и я пришлю вам все карточки & nbsp; и лабораторные файлы программы трассировки пакетов для курса."
    ]
  },
  {
    "time": [
      1706.0,
      1711.12
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
      1711.12,
      1718.0
    ],
    "en": [
      "To join, please click the ‘Join’ button under the&nbsp; video. Thank you to Anand, Pavel, Abraham, Serge,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Ананду, Павлу, Аврааму, Сержу, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1718.0,
      1725.6
    ],
    "en": [
      "Njoku, Viktor, Roger, Raj, Kenneth, Seamus, H&nbsp; W, Brandon, Aaron, Marcel, Kone, Donald, C Mohd,&nbsp;&nbsp;"
    ],
    "ru": [
      "Нджоку, Виктор, Роджер, Радж, Кеннет, Симус, Х & nbsp; В., Брэндон, Аарон, Марсель, Коне, Дональд, К. Мохд, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1725.6,
      1732.32
    ],
    "en": [
      "Gustavo, Anthony, Benjamin, Justin, Prakaash,&nbsp; Nasir, Erlison, Marko, Daming, Ed, Value, John,&nbsp;&nbsp;"
    ],
    "ru": [
      "Густаво, Энтони, Бенджамин, Джастин, Пракааш, & nbsp; Насир, Эрлисон, Марко, Даминг, Эд, Вэлью, Джон, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1732.32,
      1738.56
    ],
    "en": [
      "Funnydart, Velvijaykum, Mark, Yousif, Boson&nbsp; Software, Devin, Lito, Yonatan, and Vance.&nbsp;&nbsp;"
    ],
    "ru": [
      "Фаннидарт, Велвиджайкум, Марк, Юсиф, Бозон & nbsp; Программное обеспечение, Девин, Лито, Йонатан и Вэнс. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1738.56,
      1743.52
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
      1743.52,
      1750.72
    ],
    "en": [
      "This is the list of JCNP-level members at the&nbsp; time of recording by the way, March 24th 2021.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на & nbsp; время записи, кстати, 24 марта 2021 г. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1750.72,
      1757.76
    ],
    "en": [
      "If you signed up recently and your name isn’t&nbsp; on here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "Если вы зарегистрировались недавно и ваше имя не & nbsp; здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      1757.76,
      1760.88
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
      1760.88,
      1766.64
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
      1766.64,
      1772.24
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
      1772.24,
      1772.24
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]