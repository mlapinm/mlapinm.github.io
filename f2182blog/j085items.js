let objs = [
  {
    "time": [
      0.8,
      6.72
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
      6.72,
      10.96
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
      10.96,
      15.44
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
      15.44,
      20.8
    ],
    "en": [
      "videos. Thanks for your help. Also, remember&nbsp; to sign up via the link in the description&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. Спасибо за вашу помощь. Также помните & nbsp; зарегистрироваться по ссылке в описании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      20.8,
      26.64
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
      26.64,
      32.64
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
      32.64,
      36.8
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
      36.8,
      43.12
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
      43.12,
      50.8
    ],
    "en": [
      "In this lab we’ll practice configuring static NAT&nbsp; on R1. PCs 1, 2, and 3 have private IP addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы попрактикуемся в настройке статического NAT & nbsp; на R1. Компьютеры 1, 2 и 3 имеют частные IP-адреса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      50.8,
      56.32
    ],
    "en": [
      "so they are unable to access the Internet.&nbsp; We need to configure NAT on R1 to allow them&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому они не могут получить доступ к Интернету. & nbsp; Нам нужно настроить NAT на маршрутизаторе R1, чтобы они & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      56.32,
      63.68
    ],
    "en": [
      "to use the Internet, for example to access&nbsp; 8.8.8.8, a DNS server. So let’s do step 1,&nbsp;&nbsp;"
    ],
    "ru": [
      "для использования Интернета, например для доступа к & nbsp; 8.8.8.8, DNS-сервер. Итак, приступим к шагу 1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      63.68,
      74.72
    ],
    "en": [
      "which is to ping from PC1 to 8.8.8.8. So, from&nbsp; the CLI of PC1 I’ll try that. PING 8.8.8.8.&nbsp;&nbsp;"
    ],
    "ru": [
      "то есть пинговать с ПК1 на 8.8.8.8. Итак, из & nbsp; CLI ПК1, я попробую. ПИНГ 8.8.8.8. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      74.72,
      80.08
    ],
    "en": [
      "It will take a bit of time for each ping&nbsp; to timeout, but all four pings should fail.&nbsp;&nbsp;"
    ],
    "ru": [
      "На каждый пинг & nbsp; истечет время ожидания, но все четыре эхо-запроса должны завершиться ошибкой. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      80.08,
      83.28
    ],
    "en": [
      "R1 will try to send the pings&nbsp; out over the Internet, but the&nbsp;&nbsp;"
    ],
    "ru": [
      "R1 попытается отправить пинги & nbsp; через Интернет, но & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      83.28,
      89.03999999999999
    ],
    "en": [
      "ISP will simply drop the traffic,&nbsp; because of the private IP address."
    ],
    "ru": [
      "Интернет-провайдер просто сбросит трафик, & nbsp; из-за частного IP-адреса."
    ]
  },
  {
    "time": [
      89.03999999999999,
      94.47999999999999
    ],
    "en": [
      "So let’s get right into static NAT&nbsp; configuration on R1 in step 2. First,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте перейдем к статическому NAT & nbsp; конфигурация R1 на шаге 2. Сначала & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      94.47999999999999,
      103.12
    ],
    "en": [
      "let’s configure the inside and outside&nbsp; interfaces. ENABLE. CONF T. INTERFACE G0/0.&nbsp;&nbsp;"
    ],
    "ru": [
      "давайте настроим внутреннее и внешнее & nbsp; интерфейсы. ВКЛЮЧИТЬ. CONF T. ИНТЕРФЕЙС G0 / 0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      103.12,
      108.88
    ],
    "en": [
      "Is this the inside or outside interface? Well,&nbsp; it’s the interface connected to the Internet,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это внутренний или внешний интерфейс? Что ж, & nbsp; это интерфейс, подключенный к Интернету, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      108.88,
      116.4
    ],
    "en": [
      "to the external network, so it’s the&nbsp; outside interface. IP NAT OUTSIDE. And next,&nbsp;&nbsp;"
    ],
    "ru": [
      "во внешнюю сеть, так что это & ​​nbsp; внешний интерфейс. IP NAT ВНЕШНИЙ. А затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      116.4,
      124.64
    ],
    "en": [
      "INTERFACE G0/1. This interface is connected&nbsp; to the internal network, so IP NAT INSIDE."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 1. Этот интерфейс подключен & nbsp; во внутреннюю сеть, поэтому IP NAT INSIDE."
    ]
  },
  {
    "time": [
      124.64,
      131.84
    ],
    "en": [
      "Okay, next let’s configure those static NAT&nbsp; mappings. EXIT. So, we’ll map each PC’s private IP&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь давайте настроим статический NAT & nbsp; сопоставления. ВЫХОД. Итак, мы сопоставим частный IP-адрес каждого компьютера & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      131.84,
      145.36
    ],
    "en": [
      "to a public IP in the 100.0.0.0/24 subnet. I’ll do&nbsp; PC1 first. IP NAT INSIDE SOURCE STATIC 172.16.0.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "на публичный IP-адрес в подсети 100.0.0.0/24. Я сделаю & nbsp; Сначала ПК1. IP NAT ВНУТРЕННИЙ ИСТОЧНИК СТАТИЧЕСКИЙ 172.16.0.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      145.36,
      152.16
    ],
    "en": [
      "and then I’ll map it to 100.0.0.1, keeping the&nbsp; host portion the same to make it simple. Next&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем сопоставлю его с 100.0.0.1, сохраняя & nbsp; часть хоста то же самое, чтобы упростить. Далее & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      152.16,
      161.2
    ],
    "en": [
      "I’ll hit the up arrow, and change these addresses&nbsp; to 100.0.0.2 and 172.16.0.2 for PC2. And then do&nbsp;&nbsp;"
    ],
    "ru": [
      "Я нажимаю стрелку вверх и меняю эти адреса & nbsp; до 100.0.0.2 и 172.16.0.2 для ПК2. А затем сделайте & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      161.2,
      172.07999999999998
    ],
    "en": [
      "that again, 100.0.0.3 and 172.16.0.3 for PC3. And&nbsp; that’s it, our static NAT configuration is done.&nbsp;&nbsp;"
    ],
    "ru": [
      "это снова 100.0.0.3 и 172.16.0.3 для PC3. И & NBSP; Вот и все, наша статическая конфигурация NAT готова. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      172.07999999999998,
      180.4
    ],
    "en": [
      "EXIT. Now, before trying that ping again from PC1&nbsp; let’s check the NAT translations and statistics.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВЫХОД. Теперь, прежде чем повторить эхо-запрос с ПК1 & nbsp; давайте проверим трансляции NAT и статистику. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      180.4,
      186.56
    ],
    "en": [
      "SHOW IP NAT TRANSLATIONS. Here you can see&nbsp; the three static mappings we just configured,&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ПЕРЕВОД IP NAT. Здесь вы можете увидеть & nbsp; три статических сопоставления, которые мы только что настроили, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      186.56,
      192.0
    ],
    "en": [
      "mapping these inside local addresses to&nbsp; inside global addresses. Now let’s check the&nbsp;&nbsp;"
    ],
    "ru": [
      "сопоставление этих внутренних локальных адресов с & nbsp; внутри глобальных адресов. Теперь давайте проверим & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      192.0,
      200.24
    ],
    "en": [
      "statistics. SHOW IP NAT STATISTICS. Okay, 3 total&nbsp; translations, and here are the outside and inside&nbsp;&nbsp;"
    ],
    "ru": [
      "статистика. ПОКАЗАТЬ СТАТИСТИКУ IP NAT. Хорошо, всего 3 & nbsp; переводы, а вот внешний и внутренний & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      200.24,
      207.84
    ],
    "en": [
      "interfaces we configured. Now let’s try some pings&nbsp; and then we’ll check the translations again after."
    ],
    "ru": [
      "настроили интерфейсы. А теперь давайте попробуем пинги & nbsp; а потом мы еще раз проверим переводы."
    ]
  },
  {
    "time": [
      207.84,
      219.12
    ],
    "en": [
      "First I’ll ping from PC1 to 8.8.8.8. PING&nbsp; 8.8.8.8. Okay, the ping works this time. Then,&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я отправлю эхо-запрос с ПК1 на 8.8.8.8. ПИНГ & nbsp; 8.8.8.8. Ладно, на этот раз пинг работает. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      219.12,
      228.07999999999998
    ],
    "en": [
      "step 4 says to ping google.com from each PC. I’ve&nbsp; configured 8.8.8.8 as the DNS server of each PC,&nbsp;&nbsp;"
    ],
    "ru": [
      "на шаге 4 говорится, что нужно пинговать google.com с каждого ПК. Я & nbsp; настроил 8.8.8.8 в качестве DNS-сервера на каждом ПК, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      228.07999999999998,
      234.56
    ],
    "en": [
      "so they should contact 8.8.8.8 to learn the IP&nbsp; of google.com, and then they should be able to&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому им следует связаться с 8.8.8.8, чтобы узнать IP & nbsp; сайта google.com, и тогда они смогут & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      234.56,
      244.8
    ],
    "en": [
      "ping google.com. So, PING google.com. Okay, it&nbsp; works. Now I’ll try to ping google from PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "ping google.com. Итак, PING google.com. Хорошо, это & ​​nbsp; работает. Теперь я попробую пинговать Google с ПК2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      244.8,
      257.44
    ],
    "en": [
      "PING google.com. Okay, it works here too. And&nbsp; finally the same from PC3. PING google.com.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПИНГ google.com. Ладно, здесь тоже работает. И & NBSP; наконец то же самое с PC3. ПИНГ google.com. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      257.44,
      263.76
    ],
    "en": [
      "Okay, the ping works, so let’s&nbsp; check the translations on R1."
    ],
    "ru": [
      "Хорошо, пинг работает, поэтому давайте & nbsp; проверьте переводы на R1."
    ]
  },
  {
    "time": [
      263.76,
      270.16
    ],
    "en": [
      "SHOW IP NAT TRANSLATIONS. Okay, there&nbsp; are a lot of translations this time.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ПЕРЕВОД IP NAT. Хорошо, вот & nbsp; на этот раз много переводов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      270.16,
      276.8
    ],
    "en": [
      "Here you can see the static translations, still in&nbsp; the table. Below them are three UDP translations,&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь вы можете увидеть статические переводы, все еще в & nbsp; стол. Ниже приведены три перевода UDP: & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      276.8,
      284.08
    ],
    "en": [
      "all for destination 8.8.8.8 port 53.&nbsp; These dynamic entries are for when PC1, 2,&nbsp;&nbsp;"
    ],
    "ru": [
      "все для пункта назначения 8.8.8.8 порт 53. & nbsp; Эти динамические записи предназначены для случаев, когда ПК1, 2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      284.08,
      292.72
    ],
    "en": [
      "and 3 used DNS to learn the IP of google.com. And&nbsp; all of these entries up above are for the pings.&nbsp;&nbsp;"
    ],
    "ru": [
      "и 3 использовали DNS, чтобы узнать IP-адрес google.com. И & NBSP; все эти записи выше предназначены для проверки связи. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      292.72,
      297.76
    ],
    "en": [
      "Notice, as I pointed out in the lecture, that&nbsp; the inside local address is translated to the&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, как я указал в лекции, что & nbsp; внутренний локальный адрес преобразуется в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      297.76,
      303.6
    ],
    "en": [
      "inside global address, but the outside local&nbsp; and outside global addresses are the same.&nbsp;&nbsp;"
    ],
    "ru": [
      "внутренний глобальный адрес, но внешний локальный & nbsp; и внешние глобальные адреса совпадают. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      303.6,
      309.44
    ],
    "en": [
      "That’s because we’re only doing&nbsp; source NAT, not destination NAT."
    ],
    "ru": [
      "Это потому, что мы делаем только & nbsp; NAT источника, а не NAT назначения."
    ]
  },
  {
    "time": [
      309.44,
      313.92
    ],
    "en": [
      "Okay, finally step 5 is to&nbsp; clear the NAT translation table.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, наконец, шаг 5 - & nbsp; очистить таблицу преобразования NAT. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      313.92,
      321.12
    ],
    "en": [
      "So, the command is CLEAR IP NAT TRANSLATION, and&nbsp; then an asterisk. Now let’s check which entries&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, команда CLEAR IP NAT TRANSLATION, и & nbsp; затем звездочка. Теперь давайте проверим, какие записи & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      321.12,
      328.08
    ],
    "en": [
      "remain. SHOW IP NAT TRANSLATIONS. All of the&nbsp; dynamic entries are gone, and only the static&nbsp;&nbsp;"
    ],
    "ru": [
      "оставаться. ПОКАЗАТЬ ПЕРЕВОД IP NAT. Все & nbsp; динамические записи исчезли, и только статические & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      328.08,
      333.68
    ],
    "en": [
      "entries remain. As I mentioned in the lecture,&nbsp; the dynamic entries will timeout after a certain&nbsp;&nbsp;"
    ],
    "ru": [
      "записи остаются. Как я уже упоминал в лекции, & nbsp; время ожидания динамических записей истечет по истечении определенного & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      333.68,
      339.36
    ],
    "en": [
      "period of time and be cleared from the table, but&nbsp; this command lets you manually clear them. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "период времени и быть очищенным от таблицы, но & nbsp; эта команда позволяет вам вручную очистить их. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      339.36,
      345.28
    ],
    "en": [
      "so in this lab we practiced configuring static&nbsp; source NAT. That’s all for this lab. Next,&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому в этой лабораторной работе мы потренировались в настройке статических & nbsp; источник NAT. Вот и все для этой лаборатории. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      345.28,
      352.48
    ],
    "en": [
      "let’s take a look at a bonus practice lab&nbsp; from Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "давайте взглянем на бонусную практическую лабораторию & nbsp; из NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      352.48,
      358.96
    ],
    "en": [
      "Okay here's today's Boson NetSim practice lab.&nbsp; So the lab I have selected is Static NAT 1. So&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практическая лаборатория Boson NetSim. & Nbsp; Я выбрал лабораторию Static NAT 1. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      358.96,
      366.48
    ],
    "en": [
      "in Boson NetSim for CCNA there are five different&nbsp; NAT labs, and two of them cover static NAT.&nbsp;&nbsp;"
    ],
    "ru": [
      "в Boson NetSim для CCNA есть пять различных & nbsp; Лаборатории NAT, две из которых занимаются статическим NAT. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      366.48,
      372.24
    ],
    "en": [
      "So here is the lab topology, and it looks like&nbsp; we are going to configure NAT here on Router4,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот топология лаборатории, и она выглядит так: & nbsp; мы собираемся настроить NAT здесь на Router4, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      372.24,
      376.56
    ],
    "en": [
      "because it's connected to what seems like&nbsp; an internet router, and this is its internal&nbsp;&nbsp;"
    ],
    "ru": [
      "потому что это связано с тем, что кажется & nbsp; интернет-маршрутизатор, а это его внутренний & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      376.56,
      383.2
    ],
    "en": [
      "network with switch1, switch2, and&nbsp; two PCs, PC1 and PC3. So these are&nbsp;&nbsp;"
    ],
    "ru": [
      "сеть с switch1, switch2 и & nbsp; два ПК, ПК1 и ПК3. Итак, это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      383.2,
      389.84
    ],
    "en": [
      "the commands you need to know. All commands&nbsp; we've already covered in the lecture video.&nbsp;&nbsp;"
    ],
    "ru": [
      "команды, которые вам нужно знать. Все команды & nbsp; мы уже рассмотрели видео с лекцией. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      389.84,
      398.48
    ],
    "en": [
      "The IP addresses of each device and here are the&nbsp; lab tasks. Okay, so there are eleven steps in this&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адреса каждого устройства и вот & nbsp; лабораторные задания. Итак, в этом & nbsp; & nbsp; одиннадцать шагов."
    ]
  },
  {
    "time": [
      398.48,
      406.8
    ],
    "en": [
      "one single lab task, so let's go through all of&nbsp; them. First, attempt to ping from PC1 to Router3.&nbsp;&nbsp;"
    ],
    "ru": [
      "одна лабораторная задача, поэтому давайте рассмотрим все & nbsp; их. Сначала попробуйте выполнить эхо-запрос с ПК1 на маршрутизатор 3. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      406.8,
      414.08
    ],
    "en": [
      "Was the ping successful? Why or why&nbsp; not. Okay, so I will open up PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Пинг прошел успешно? Почему и почему & nbsp; нет. Хорошо, я открою ПК1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      414.08,
      430.48
    ],
    "en": [
      "And attempt to ping Router3. Let's&nbsp; see if that works. Was it .1.1? Yes.&nbsp;&nbsp;"
    ],
    "ru": [
      "И попробуйте пинговать Router3. Давайте & nbsp; посмотрим, работает ли это. Было ли это .1.1? Да. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      430.48,
      441.12
    ],
    "en": [
      "Okay it seems the ping is not working. Okay,&nbsp; so perhaps Router3 is a internet router,&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, похоже, пинг не работает. Хорошо, & nbsp; так что, возможно, Router3 - это интернет-маршрутизатор, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      441.12,
      450.24
    ],
    "en": [
      "so it is not accepting these pings that have a&nbsp; source IP address that is a private IP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому он не принимает эти эхо-запросы, для которых есть & nbsp; исходный IP-адрес, который является частным IP-адресом. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      450.24,
      459.12
    ],
    "en": [
      "Okay, on Router4 configure NAT to statically&nbsp; translate PC1's IP address to 180.10.1.15.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, на Router4 настройте NAT на статический & nbsp; преобразовать IP-адрес ПК1 в 180.10.1.15. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      459.12,
      469.6
    ],
    "en": [
      "Okay, so let's do that. So I'll open the&nbsp; CLI of Router4. The password is cisco, okay.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давай сделаем это. Итак, я открою & nbsp; Интерфейс командной строки Router4. Пароль - cisco, хорошо. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      469.6,
      477.2
    ],
    "en": [
      "So let's configure that mapping. IP&nbsp; NAT INSIDE SOURCE STATIC, and then&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте настроим это сопоставление. IP & nbsp; NAT ВНУТРЕННИЙ ИСТОЧНИК СТАТИЧЕСКИЙ, а затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      477.2,
      488.56
    ],
    "en": [
      "PC1's IP address is, here it is. 192.168.1.2.&nbsp; And we will map it to 180.10.1.15. Okay, so we've&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адрес ПК1, вот он. 192.168.1.2. & Nbsp; И мы сопоставим его с 180.10.1.15. Итак, мы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      488.56,
      494.8
    ],
    "en": [
      "configured the mapping, but that's not all you&nbsp; need to configure for static NAT, as you know.&nbsp;&nbsp;"
    ],
    "ru": [
      "настроили сопоставление, но это еще не все, что вам & nbsp; Как вы знаете, необходимо настроить статический NAT."
    ]
  },
  {
    "time": [
      494.8,
      502.24
    ],
    "en": [
      "Okay, which interface should be configured&nbsp; as the inside interface on Router4? Okay, so&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, какой интерфейс нужно настроить & nbsp; как внутренний интерфейс на Router4? Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      502.24,
      511.28
    ],
    "en": [
      "it should be fastethernet0/1, that is the inside&nbsp; interface. And then the outside will be serial0/0.&nbsp;&nbsp;"
    ],
    "ru": [
      "это должно быть fastethernet0 / 1, то есть внутри & nbsp; интерфейс. И тогда снаружи будет serial0 / 0. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      511.28,
      518.4
    ],
    "en": [
      "Okay, so let's configure those interfaces.&nbsp; INTERFACE FASTETHERNET0/1 is the&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте настроим эти интерфейсы. & Nbsp; ИНТЕРФЕЙС FASTETHERNET0 / 1 - это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      518.4,
      525.68
    ],
    "en": [
      "inside, so IP NAT INSIDE. And&nbsp; INTERFACE SERIAL0/0. IP NAT&nbsp;&nbsp;"
    ],
    "ru": [
      "внутри, так что IP NAT ВНУТРИ. И & NBSP; ИНТЕРФЕЙС SERIAL0 / 0. IP-NAT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      525.68,
      537.04
    ],
    "en": [
      "OUTSIDE. Okay and let's try that ping again&nbsp; from PC1 to Router3. Okay, it works. Perfect.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВНЕ. Хорошо, давайте попробуем пинг еще раз & nbsp; с ПК1 на маршрутизатор 3. Ладно, работает. Идеально. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      537.04,
      547.28
    ],
    "en": [
      "Okay let's check that NAT translation table&nbsp; on Router4. DO SHOW IP NAT TRANSLATION.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте проверим, что таблица преобразования NAT & nbsp; на Router4. ПОКАЗАТЬ ПЕРЕВОД IP NAT. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      547.28,
      553.76
    ],
    "en": [
      "Okay so we have the static mapping here. Looks&nbsp; like there are two entries for that. I'm not&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, у нас есть статическое отображение. Выглядит & nbsp; как будто для этого есть две записи. Я не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      553.76,
      563.6
    ],
    "en": [
      "sure about why that is. And then the entry for the&nbsp; ping we just issued. The inside local IP address&nbsp;&nbsp;"
    ],
    "ru": [
      "уверен, почему это так. А затем запись для & nbsp; пинг, который мы только что выдали. Внутренний локальный IP-адрес & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      563.6,
      570.48
    ],
    "en": [
      "is translated to what inside global address? Well&nbsp; that's what we just configured, 180.10.1.15. Does&nbsp;&nbsp;"
    ],
    "ru": [
      "на какой внутренний глобальный адрес переводится? Ну & nbsp; это то, что мы только что настроили, 180.10.1.15. Имеет ли & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      570.48,
      576.4
    ],
    "en": [
      "the inside global IP address normally represent a&nbsp; public or a private IP address? Well it normally&nbsp;&nbsp;"
    ],
    "ru": [
      "внутренний глобальный IP-адрес обычно представляет собой & nbsp; публичный или частный IP-адрес? Ну это нормально & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      576.4,
      581.76
    ],
    "en": [
      "represents a public IP address because it is&nbsp; the global one, it's what the outside network,&nbsp;&nbsp;"
    ],
    "ru": [
      "представляет собой общедоступный IP-адрес, поскольку это & ​​nbsp; глобальный, это то, что внешняя сеть, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      581.76,
      589.36
    ],
    "en": [
      "for example the internet, knows. And you can't&nbsp; use private IP addresses on the Internet. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "например интернет знает. И вы не можете & nbsp; использовать частные IP-адреса в Интернете. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      589.36,
      598.64
    ],
    "en": [
      "step 8. On Router4 configure NAT to statically&nbsp; translate PC3's IP address to this IP, .16.&nbsp;&nbsp;"
    ],
    "ru": [
      "шаг 8. На Router4 настройте NAT на статический & nbsp; преобразовать IP-адрес ПК3 в этот IP-адрес, .16. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      598.64,
      617.12
    ],
    "en": [
      "Okay so let's do that. IP NAT INSIDE SOURCE STATIC&nbsp; 192.168.1.3, is PC3's IP address. And 180.10.1.16.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давай сделаем это. IP NAT ВНУТРЕННИЙ ИСТОЧНИК СТАТИЧЕСКИЙ & nbsp; 192.168.1.3, это IP-адрес ПК3. И 180.10.1.16. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      617.12,
      623.44
    ],
    "en": [
      "Okay, so display the NAT translation&nbsp; table again. Let's do that.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, покажи трансляцию NAT & nbsp; стол снова. Давайте сделаем это. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      623.44,
      633.52
    ],
    "en": [
      "Okay, I can see mapping for both of&nbsp; them. So, 192.168.1.3 is mapped to .16.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, я вижу отображение обоих & nbsp; их. Итак, 192.168.1.3 отображается в .16. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      633.52,
      639.84
    ],
    "en": [
      "Okay let's try that ping, from,&nbsp; oh it says from Router3 to PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте попробуем этот пинг от, & nbsp; о, он говорит с маршрутизатора 3 на ПК1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      639.84,
      649.12
    ],
    "en": [
      "Interesting, okay. So I will open up Router3.&nbsp; That is here. Router3 attempting to ping PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Интересно, ладно. Итак, я открою Router3. & Nbsp; Это здесь. Маршрутизатор 3 пытается отправить эхо-запрос на ПК1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      649.12,
      654.08
    ],
    "en": [
      "So, I think this will not work because it's&nbsp; a router out on the Internet trying to ping&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я думаю, что это не сработает, потому что это & ​​nbsp; маршрутизатор в Интернете пытается выполнить эхо-запрос & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      654.08,
      664.08
    ],
    "en": [
      "a public, oh sorry not a public, a private IP&nbsp; address. So that should fail. But let's try.&nbsp;&nbsp;"
    ],
    "ru": [
      "публичный, извините не публичный, частный IP & nbsp; адрес. Так что это должно потерпеть неудачу. Но давайте попробуем. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      664.08,
      671.92
    ],
    "en": [
      "PING 192.168.1.2. Yes, and&nbsp; that U means unreachable,&nbsp;&nbsp;"
    ],
    "ru": [
      "ПИНГ 192.168.1.2. Да, и & nbsp; что U означает \"недоступен\", & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      671.92,
      682.96
    ],
    "en": [
      "okay. Attempt to ping from Switch2 to Router3.&nbsp; From Switch2, does Switch2 have an IP address?&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно. Попытка выполнить эхо-запрос от Switch2 до Router3. & Nbsp; Есть ли у Switch2 IP-адрес от Switch2? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      682.96,
      693.68
    ],
    "en": [
      "Let's check. SHOW IP INTERFACE BRIEF.&nbsp; Okay, it does have an IP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА & nbsp; Хорошо, у него есть IP-адрес. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      693.68,
      701.44
    ],
    "en": [
      "But NAT is not configured on Router4&nbsp; to translate Switch2's IP address,&nbsp;&nbsp;"
    ],
    "ru": [
      "Но NAT не настроен на Router4 & nbsp; для перевода IP-адреса Switch2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      701.44,
      711.2
    ],
    "en": [
      "so this should not work. But&nbsp; let me try. PING 180.10.1.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "так что это не должно работать. Но & nbsp; Дай мне попробовать. ПИНГ 180.10.1.1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      711.2,
      717.92
    ],
    "en": [
      "Okay, and just like in the beginning with PC1,&nbsp; no NAT is configured for Switch2's IP address,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, как и в начале с PC1, & nbsp; NAT не настроен для IP-адреса Switch2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      717.92,
      725.6
    ],
    "en": [
      "so Switch2 is not able to ping Router3. Okay so&nbsp; that's all for this lab. I'm going to click on the&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому Switch2 не может пинговать Router3. Хорошо, так что & nbsp; это все для этой лаборатории. Я собираюсь нажать на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      725.6,
      735.76
    ],
    "en": [
      "grade lab function here, and let's see if I did&nbsp; everything correctly. Okay, yes I did, awesome.&nbsp;&nbsp;"
    ],
    "ru": [
      "оцените функцию лаборатории здесь, и давайте посмотрим, сделал ли я & nbsp; все правильно. Хорошо, да, замечательно. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      735.76,
      741.12
    ],
    "en": [
      "Great, and by the way if you ever have&nbsp; any problems during these labs in NetSim,&nbsp;&nbsp;"
    ],
    "ru": [
      "Отлично, и, кстати, если у вас когда-нибудь будет & nbsp; любые проблемы во время этих лабораторных работ в NetSim, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      741.12,
      745.68
    ],
    "en": [
      "Boson provides solutions down at the&nbsp; bottom here, with some great explanations,&nbsp;&nbsp;"
    ],
    "ru": [
      "Boson предлагает решения на уровне & nbsp; внизу, с хорошими пояснениями, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      745.68,
      754.88
    ],
    "en": [
      "actually if you want to read these you can&nbsp; pause the video, I'll scroll through them.&nbsp;&nbsp;"
    ],
    "ru": [
      "на самом деле, если вы хотите их прочитать, вы можете & nbsp; поставлю видео на паузу, я буду их просматривать. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      754.88,
      760.72
    ],
    "en": [
      "Okay, so that was a quick look at a lab&nbsp; in Boson Software's NetSim for CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это был беглый взгляд на лабораторию & nbsp; в NetSim от Boson Software для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      760.72,
      766.72
    ],
    "en": [
      "NetSim has over 100 guided labs like these. Some&nbsp; of them are pretty short and simple like this one,&nbsp;&nbsp;"
    ],
    "ru": [
      "NetSim имеет более 100 подобных лабораторий. Некоторые & nbsp; из них довольно короткие и простые, как этот, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      766.72,
      769.6
    ],
    "en": [
      "but then some of them are actually&nbsp; quite difficult and complicated.&nbsp;&nbsp;"
    ],
    "ru": [
      "но тогда некоторые из них на самом деле & nbsp; довольно сложно и сложно."
    ]
  },
  {
    "time": [
      769.6,
      773.84
    ],
    "en": [
      "So I think it's a great study resource,&nbsp; a great labbing resource for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Так что я думаю, что это отличный учебный ресурс, & nbsp; отличный лабораторный ресурс для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      773.84,
      779.28
    ],
    "en": [
      "If you want to get NetSim, please follow&nbsp; the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить NetSim, подпишитесь на & nbsp; ссылка в описании видео."
    ]
  },
  {
    "time": [
      779.28,
      784.24
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
      784.24,
      790.24
    ],
    "en": [
      "To join, please click the ‘Join’ button under&nbsp; the video. Thank you to Anand, Pavel, Abraham,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Ананду, Павлу, Аврааму, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      790.24,
      798.16
    ],
    "en": [
      "Serge, Njoku, Viktor, Roger, Raj, Kenneth, Seamus,&nbsp; H W, Brandon, Aaron, Marcel, Kone, Donald, C Mohd,&nbsp;&nbsp;"
    ],
    "ru": [
      "Серж, Нджоку, Виктор, Роджер, Радж, Кеннет, Симус, & nbsp; Х. У., Брэндон, Аарон, Марсель, Коне, Дональд, С. Мохд, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      798.16,
      804.96
    ],
    "en": [
      "Gustavo, Anthony, Benjamin, Tshepiso, Justin,&nbsp; Prakaash, Nasir, Erlison, Marko, Daming, Ed,&nbsp;&nbsp;"
    ],
    "ru": [
      "Густаво, Энтони, Бенджамин, Чеписо, Джастин, & NBSP; Пракааш, Насир, Эрлисон, Марко, Даминг, Эд, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      804.96,
      811.92
    ],
    "en": [
      "Value, John, Funnydart, Velvijaykum, Mark, Yousif,&nbsp; Boson Software, Devin, Lito, Yonatan, and Vance.&nbsp;&nbsp;"
    ],
    "ru": [
      "Валю, Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, & nbsp; Boson Software, Девин, Лито, Йонатан и Вэнс. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      811.92,
      816.72
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
      816.72,
      823.44
    ],
    "en": [
      "This is the list of JCNP-level members at the&nbsp; time of recording by the way, March 20th 2021.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на & nbsp; время записи кстати 20 марта 2021 г. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      823.44,
      830.4
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
      830.4,
      833.44
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
      833.44,
      839.28
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
      839.28,
      844.88
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
      844.88,
      844.88
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]