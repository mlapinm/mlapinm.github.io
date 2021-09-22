let items = [
  {
    "time": [
      1.12,
      6.8
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
      6.8,
      11.12
    ],
    "en": [
      "If you like these videos, please&nbsp; subscribe to follow along with the series.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нравятся эти видео, пожалуйста, & nbsp; подпишитесь, чтобы следить за этой серией. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      11.12,
      15.36
    ],
    "en": [
      "Also, please like and leave a comment, and share&nbsp; the video to help spread this free series of&nbsp;&nbsp;"
    ],
    "ru": [
      "Кроме того, поставьте лайк и оставьте комментарий, а также поделитесь & nbsp; видео, которое поможет распространить эту бесплатную серию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      15.36,
      20.72
    ],
    "en": [
      "videos. Thanks for your help. Also, remember&nbsp; to sign up via the link in the description to&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. Спасибо за вашу помощь. Также помните & nbsp; чтобы зарегистрироваться по ссылке в описании на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      20.72,
      26.72
    ],
    "en": [
      "get all of the lab files for this course, so&nbsp; you can try it out yourself in packet tracer."
    ],
    "ru": [
      "получить все лабораторные файлы для этого курса, так что & nbsp; вы можете попробовать это самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      26.72,
      32.4
    ],
    "en": [
      "If you want more labs like these, I highly&nbsp; recommend picking up Boson’s NetSim for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я очень & nbsp; рекомендую использовать Boson's NetSim для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      32.4,
      36.72
    ],
    "en": [
      "It’s a network simulator with tons of guided&nbsp; labs covering all of the topics you need to&nbsp;&nbsp;"
    ],
    "ru": [
      "Это сетевой симулятор с множеством управляемых & nbsp; лабораторные работы, охватывающие все темы, необходимые для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      36.72,
      42.8
    ],
    "en": [
      "know for the CCNA. Click the link in&nbsp; the video description to check it out."
    ],
    "ru": [
      "знаю по CCNA. Щелкните ссылку в & nbsp; описание видео, чтобы посмотреть его."
    ]
  },
  {
    "time": [
      42.8,
      48.88
    ],
    "en": [
      "In this lab we’ll configure dynamic NAT as well&nbsp; as PAT. This is the same network topology as in&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы также настроим динамический NAT & nbsp; как PAT. Это та же топология сети, что и в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      48.88,
      55.68
    ],
    "en": [
      "the previous lab, so let’s get right into it.&nbsp; In step 1 I’ll configure dynamic NAT on R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "предыдущая лабораторная работа, так что давайте перейдем к ней. & nbsp; На шаге 1 я настрою динамический NAT на маршрутизаторе R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      55.68,
      65.68
    ],
    "en": [
      "First let me configure the inside and outside&nbsp; interfaces. ENABLE. CONF T. INTERFACE G0/0.&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала позвольте мне настроить внутреннее и внешнее & nbsp; интерфейсы. ВКЛЮЧИТЬ. CONF T. ИНТЕРФЕЙС G0 / 0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      65.68,
      72.72
    ],
    "en": [
      "This is the external interface, connected&nbsp; to the Internet, so IP NAT OUTSIDE. Then,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это внешний интерфейс, подключенный & nbsp; в Интернет, поэтому IP NAT ВНЕШНИЙ. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      72.72,
      83.76
    ],
    "en": [
      "INTERFACE G0/1. IP NAT INSIDE. Now, I want to&nbsp; translate all traffic from 172.16.0.0/24, so&nbsp;&nbsp;"
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 1. IP NAT ВНУТРИ. Теперь я хочу & nbsp; перевести весь трафик из 172.16.0.0/24, поэтому & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      83.76,
      97.6
    ],
    "en": [
      "let me create an ACL that matches that source IP.&nbsp; EXIT. ACCESS-LIST 1 PERMIT 172.16.0.0 0.0.0.255.&nbsp;&nbsp;"
    ],
    "ru": [
      "позвольте мне создать ACL, соответствующий этому IP-адресу источника. & nbsp; ВЫХОД. СПИСОК ДОСТУПА 1 РАЗРЕШЕНИЕ 172.16.0.0 0.0.0.255. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      97.6,
      105.28
    ],
    "en": [
      "So, anytime PC1, 2, or 3 sends traffic out&nbsp; to the Internet, R1 will translate it. Next&nbsp;&nbsp;"
    ],
    "ru": [
      "Таким образом, в любое время, когда ПК1, 2 или 3 отправляет трафик на & nbsp; в Интернет, R1 переведет его. Далее & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      105.28,
      111.2
    ],
    "en": [
      "I’ll create the address pool. The instructions&nbsp; say to create a pool with just two addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "Я создам пул адресов. Инструкции & nbsp; скажем, чтобы создать пул всего из двух адресов, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      111.2,
      121.6
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
      111.2,
      121.6
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
      121.6,
      133.36
    ],
    "en": [
      "then 100.0.0.1 100.0.0.2, then NETMASK, and I’ll&nbsp; just specify /24, 255.255.255.0, because the&nbsp;&nbsp;"
    ],
    "ru": [
      "затем 100.0.0.1 100.0.0.2, затем NETMASK, и я & nbsp; просто укажите / 24, 255.255.255.0, потому что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      133.36,
      142.48
    ],
    "en": [
      "instructions say ‘from the 100.0.0.0/24 subnet’.&nbsp; Finally, I’ll configure the NAT statement itself.&nbsp;&nbsp;"
    ],
    "ru": [
      "в инструкциях указано «из подсети 100.0.0.0/24». & nbsp; Наконец, я настрою сам оператор NAT. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      142.48,
      152.88
    ],
    "en": [
      "IP NAT INSIDE SOURCE LIST 1 POOL POOL1. So,&nbsp; R1’s dynamic NAT configuration is now complete."
    ],
    "ru": [
      "IP NAT ВНУТРЕННИЙ ИСТОЧНИК СПИСОК 1 БАССЕЙН БАССЕЙН1. Итак, & nbsp; На этом настройка динамического NAT маршрутизатора R1 завершена."
    ]
  },
  {
    "time": [
      152.88,
      159.36
    ],
    "en": [
      "Next, let’s try to ping google.com from the&nbsp; PCs. First, PC1. Actually, I’ll just ping the&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем давайте попробуем проверить связь с google.com с & nbsp; ПК. Во-первых, ПК1. На самом деле я просто пропингую & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      159.36,
      168.32
    ],
    "en": [
      "DNS server, 8.8.8.8, first. PING 8.8.8.8. I just&nbsp; want to make sure all the devices finish the ARP&nbsp;&nbsp;"
    ],
    "ru": [
      "DNS-сервер, 8.8.8.8, первый. ПИНГ 8.8.8.8. Я просто & nbsp; хотите, чтобы все устройства завершили ARP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      168.32,
      175.12
    ],
    "en": [
      "process first, as I’ve said many times before&nbsp; it can be a little slow in packet tracer.&nbsp;&nbsp;"
    ],
    "ru": [
      "сначала обработайте, как я уже много раз говорил до & nbsp; он может быть немного медленным в трассировщике пакетов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      175.12,
      186.4
    ],
    "en": [
      "Okay, now let’s ping google.com. PING google.com.&nbsp; Okay, the ping works. Now I’ll do the same on PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь пингуем google.com. ПИНГ google.com. & Nbsp; Ладно, пинг работает. Теперь я сделаю то же самое на ПК2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      186.4,
      202.07999999999998
    ],
    "en": [
      "PING google.com. It works here too. Finally, PC3.&nbsp; PING google.com. No response on PC3, why is that?&nbsp;&nbsp;"
    ],
    "ru": [
      "ПИНГ google.com. Здесь тоже работает. Наконец, PC3. & Nbsp; ПИНГ google.com. Нет ответа на PC3, почему? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      202.07999999999998,
      206.88
    ],
    "en": [
      "Well, I only configured two public IP addresses&nbsp; in the NAT pool, and they are currently being&nbsp;&nbsp;"
    ],
    "ru": [
      "Я настроил только два общедоступных IP-адреса & nbsp; в пуле NAT, и в настоящее время они & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      206.88,
      216.48
    ],
    "en": [
      "used by PC1 and PC2, so PC3 can’t get a public&nbsp; IP address. Let’s check the translations on R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "используется ПК1 и ПК2, поэтому ПК3 не может получить общедоступный & nbsp; Айпи адрес. Давайте проверим переводы на R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      216.48,
      225.44
    ],
    "en": [
      "DO SHOW IP NAT TRANSLATIONS. Okay, so there are&nbsp; lots of translations here, notice that 172.16.0.1&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ПЕРЕВОД IP NAT. Итак, есть & nbsp; здесь много переводов, обратите внимание, что 172.16.0.1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      225.44,
      232.0
    ],
    "en": [
      "has been mapped to 100.0.0.1,&nbsp; and .2 has been mapped to .2.&nbsp;&nbsp;"
    ],
    "ru": [
      "был сопоставлен с 100.0.0.1, & nbsp; и .2 был сопоставлен с .2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      232.0,
      235.92000000000002
    ],
    "en": [
      "Now, the output in packet tracer is a little&nbsp; different than I demonstrated in the lecture&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь вывод в трассировщике пакетов немного & nbsp; отличается от того, что я продемонстрировал в лекции & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      235.92000000000002,
      243.04
    ],
    "en": [
      "video. We have ICMP entries and UDP entries,&nbsp; but the simple inside local to inside global&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. У нас есть записи ICMP и UDP, & nbsp; но от простого внутреннего локального к внутреннему глобальному & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      243.04,
      248.48
    ],
    "en": [
      "mappings I showed in the lecture video aren’t&nbsp; entered into the table. Just be aware that&nbsp;&nbsp;"
    ],
    "ru": [
      "сопоставления, которые я показал в видео лекции, не & nbsp; вошел в таблицу. Просто имейте в виду, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      248.48,
      254.8
    ],
    "en": [
      "packet tracer doesn’t always operate exactly as&nbsp; real Cisco IOS will, and don’t worry about it.&nbsp;&nbsp;"
    ],
    "ru": [
      "Пакетный трассировщик не всегда работает точно так же, как & nbsp; настоящая Cisco IOS будет, и не беспокойтесь об этом."
    ]
  },
  {
    "time": [
      254.8,
      260.48
    ],
    "en": [
      "In the CCNA exam you might be asked to interpret&nbsp; the output of a NAT table like this, but you won’t&nbsp;&nbsp;"
    ],
    "ru": [
      "На экзамене CCNA вас могут попросить перевести & nbsp; вывод таблицы NAT похож на эту, но вы не будете & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      260.48,
      267.68
    ],
    "en": [
      "be asked something like ‘which entries will&nbsp; be in the NAT table if PC1 pings the server?’."
    ],
    "ru": [
      "спросить что-то вроде \"какие записи будут & nbsp; быть в таблице NAT, если ПК1 пингует сервер? »."
    ]
  },
  {
    "time": [
      267.68,
      272.15999999999997
    ],
    "en": [
      "Okay, so in step 3 we are going&nbsp; to change the configuration to PAT&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, на шаге 3 мы собираемся & nbsp; для изменения конфигурации на PAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      272.15999999999997,
      277.44
    ],
    "en": [
      "using R1’s public IP address,&nbsp; the one on its g0/0 interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "используя общедоступный IP-адрес маршрутизатора R1, & nbsp; тот, что находится на его интерфейсе g0 / 0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      277.44,
      286.8
    ],
    "en": [
      "First I’ll clear the translations. DO CLEAR&nbsp; IP NAT TRANSLATION, and then an asterisk. Now,&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я очищу переводы. СДЕЛАТЬ ОЧИСТИТЬ & NBSP; IP NAT TRANSLATION, а затем звездочку. Теперь & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      286.8,
      292.08
    ],
    "en": [
      "the instructions say to remove the current NAT&nbsp; configuration, but let me show you something.&nbsp;&nbsp;"
    ],
    "ru": [
      "в инструкциях сказано, что необходимо удалить текущий NAT & nbsp; конфигурации, но позвольте мне показать вам кое-что. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      292.08,
      302.88
    ],
    "en": [
      "DO SHOW RUN | INCLUDE NAT. Okay, so we have the&nbsp; command IP NAT INSIDE SOURCE LIST 1 POOL POOL1.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ БЕГ | ВКЛЮЧИТЬ NAT. Итак, у нас есть & nbsp; команда IP NAT ВНУТРЕННИЙ ИСТОЧНИК СПИСОК 1 БАССЕЙН БАССЕЙН 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      302.88,
      313.36
    ],
    "en": [
      "Now, without deleting that I’ll enter IP NAT&nbsp; INSIDE SOURCE LIST 1 INTERFACE G0/0 OVERLOAD.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь, не удаляя его, я введу IP NAT & nbsp; ВНУТРЕННИЙ СПИСОК ИСТОЧНИКОВ 1 ПЕРЕГРУЗКА ИНТЕРФЕЙСА G0 / 0. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      313.36,
      321.68
    ],
    "en": [
      "And now let’s check the running-config again. DO&nbsp; SHOW RUN | INCLUDE NAT. The previous NAT statement&nbsp;&nbsp;"
    ],
    "ru": [
      "А теперь давайте снова проверим рабочую конфигурацию. ДЕЛАТЬ & NBSP; SHOW RUN | ВКЛЮЧИТЬ NAT. Предыдущий оператор NAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      321.68,
      327.6
    ],
    "en": [
      "has been replaced, so there isn’t actually any&nbsp; need to remove the old configuration first.&nbsp;&nbsp;"
    ],
    "ru": [
      "был заменен, поэтому на самом деле & nbsp; сначала необходимо удалить старую конфигурацию. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      327.6,
      332.48
    ],
    "en": [
      "Although, the pool still remains so you&nbsp; can remove that too if you want. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хотя бассейн все еще остается, так что вы & nbsp; можете удалить и это, если хотите. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      332.48,
      339.2
    ],
    "en": [
      "so that’s all we need for the PAT configuration,&nbsp; I specified INTERFACE G0/0 OVERLOAD so R1 should&nbsp;&nbsp;"
    ],
    "ru": [
      "так что это все, что нам нужно для конфигурации PAT, & nbsp; Я указал ПЕРЕГРУЗКУ ИНТЕРФЕЙСА G0 / 0, поэтому R1 должен & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      339.2,
      350.8
    ],
    "en": [
      "translate all traffic from 172.16.0.0/24 to the&nbsp; IP address of its g0/0 interface, 203.0.113.1."
    ],
    "ru": [
      "переводить весь трафик с 172.16.0.0/24 на & nbsp; IP-адрес его интерфейса g0 / 0, 203.0.113.1."
    ]
  },
  {
    "time": [
      350.8,
      358.96
    ],
    "en": [
      "Let’s try it, I’ll ping google.com from&nbsp; each PC again, PC1 first. PING google.com.&nbsp;&nbsp;"
    ],
    "ru": [
      "Давай попробуем, я пингую google.com с & nbsp; снова каждый ПК, сначала ПК1. ПИНГ google.com. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      358.96,
      369.52
    ],
    "en": [
      "Okay, and then PC2. PING google.com. Next&nbsp; PC3, let’s see if the ping works this time.&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, а потом ПК2. ПИНГ google.com. Далее & nbsp; PC3, посмотрим, работает ли на этот раз пинг. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      369.52,
      379.28
    ],
    "en": [
      "PING google.com. Okay, this time it works. Now&nbsp; let’s check the translations on R1 once more.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПИНГ google.com. Ладно, на этот раз работает. Теперь & nbsp; давайте еще раз проверим переводы на R1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      379.28,
      389.68
    ],
    "en": [
      "DO SHOW IP NAT TRANSLATIONS. Notice that all of&nbsp; the inside local addresses, 172.16.0.1, 2, and 3,&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ПЕРЕВОД IP NAT. Обратите внимание, что все & nbsp; внутренние локальные адреса 172.16.0.1, 2 и 3, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      389.68,
      397.92
    ],
    "en": [
      "are translated to the inside global address&nbsp; 203.0.113.1. R1 uses the protocol and port numbers&nbsp;&nbsp;"
    ],
    "ru": [
      "переводятся на внутренний глобальный адрес & nbsp; 203.0.113.1. R1 использует протокол и номера портов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      397.92,
      405.28
    ],
    "en": [
      "to keep track of the different communication flows&nbsp; between the PCs, the DNS server, and google.com."
    ],
    "ru": [
      "отслеживать различные коммуникационные потоки & nbsp; между ПК, DNS-сервером и google.com."
    ]
  },
  {
    "time": [
      405.28,
      409.2
    ],
    "en": [
      "Okay, in this lab we configured&nbsp; dynamic NAT using a NAT pool,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, в этой лабораторной работе мы настроили & nbsp; динамический NAT с использованием пула NAT, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      409.2,
      413.6
    ],
    "en": [
      "and then changed it to PAT&nbsp; using R1’s interface IP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем изменил его на PAT & nbsp; с использованием IP-адреса интерфейса R1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      413.6,
      826.96
    ],
    "en": [
      "That’s all for this lab. Next let’s take a look at&nbsp; a bonus lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Вот и все для этой лаборатории. Теперь давайте посмотрим на & nbsp; бонусная лаборатория в NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      826.96,
      832.16
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
      832.16,
      839.52
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
      839.52,
      846.96
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
      846.96,
      853.44
    ],
    "en": [
      "Gustavo, Anthony, Benjamin, Justin, Prakaash,&nbsp; Nasir, Erlison, Marko, Daming, Ed, John,&nbsp;&nbsp;"
    ],
    "ru": [
      "Густаво, Энтони, Бенджамин, Джастин, Пракааш, & nbsp; Насир, Эрлисон, Марко, Даминг, Эд, Джон, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      853.44,
      858.56
    ],
    "en": [
      "Funnydart, Velvijaykum, Mark, Yousif,&nbsp; Boson Software, Devin, Lito, Yonatan,&nbsp;&nbsp;"
    ],
    "ru": [
      "Фаннидарт, Велвиджайкум, Марк, Юсиф, & nbsp; Программное обеспечение Boson, Девин, Лито, Йонатан, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      858.56,
      863.76
    ],
    "en": [
      "and Vance. Sorry if I pronounced your name&nbsp; incorrectly, but thank you so much for your&nbsp;&nbsp;"
    ],
    "ru": [
      "и Вэнс. Извините, если я произнес ваше имя & nbsp; неправильно, но большое спасибо за ваш & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      863.76,
      871.84
    ],
    "en": [
      "support. This is the list of JCNP-level members at&nbsp; the time of recording by the way, March 25th 2021.&nbsp;&nbsp;"
    ],
    "ru": [
      "служба поддержки. Это список участников уровня JCNP на & nbsp; время записи, кстати, 25 марта 2021 г. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      871.84,
      878.8
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
      878.8,
      881.92
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
      881.92,
      887.68
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
      887.68,
      893.28
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
      893.28,
      893.28
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]