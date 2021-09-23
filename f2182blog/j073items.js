let objs = [
  {
    "time": [
      0.729,
      3.25
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab."
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми."
    ]
  },
  {
    "time": [
      3.25,
      6.58
    ],
    "en": [
      "This is a free, complete course for the CCNA."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA."
    ]
  },
  {
    "time": [
      6.58,
      10.269
    ],
    "en": [
      "If you like these videos, please subscribe to follow along with the series."
    ],
    "ru": [
      "Если вам нравятся эти видео, подпишитесь, чтобы следить за сериалом."
    ]
  },
  {
    "time": [
      10.269,
      15.879
    ],
    "en": [
      "Also, please like and leave a comment, and share the video to help spread this free series of videos."
    ],
    "ru": [
      "Также, пожалуйста, поставьте лайк и оставьте комментарий, а также поделитесь видео, чтобы помочь распространить эту бесплатную серию видео."
    ]
  },
  {
    "time": [
      15.879,
      16.97
    ],
    "en": [
      "of videos. Thanks for your help."
    ],
    "ru": [
      "видео. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      16.97,
      21.279
    ],
    "en": [
      "Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      21.279,
      26.039
    ],
    "en": [
      "for this course, so you can try it out yourself in packet tracer."
    ],
    "ru": [
      "для этого курса, так что вы можете попробовать его самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      26.039,
      30.32
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для"
    ]
  },
  {
    "time": [
      30.32,
      34.219
    ],
    "en": [
      "the CCNA, click the link in the video description to check it out."
    ],
    "ru": [
      "CCNA, щелкните ссылку в описании видео, чтобы ознакомиться с ним."
    ]
  },
  {
    "time": [
      34.219,
      38.96
    ],
    "en": [
      "It’s a network simulator like packet tracer, but it’s even better, and it includes all"
    ],
    "ru": [
      "Это сетевой симулятор, похожий на трассировщик пакетов, но он еще лучше и включает в себя все"
    ]
  },
  {
    "time": [
      38.96,
      44.03
    ],
    "en": [
      "of these guided labs to not only help you get hands-on practice configuring and troubleshooting,"
    ],
    "ru": [
      "из этих лабораторных работ, которые не только помогут вам на практике настроить и устранить неполадки,"
    ]
  },
  {
    "time": [
      44.03,
      47.47
    ],
    "en": [
      "but also deepen your understanding of the exam topics."
    ],
    "ru": [
      "но также углубите свое понимание экзаменационных тем."
    ]
  },
  {
    "time": [
      47.47,
      52.469
    ],
    "en": [
      "I used it myself when studying for my certifications, so I feel confident about recommending it"
    ],
    "ru": [
      "Я сам использовал его, когда готовился к получению сертификатов, поэтому могу с уверенностью рекомендовать его."
    ]
  },
  {
    "time": [
      52.469,
      53.969
    ],
    "en": [
      "to all of you."
    ],
    "ru": [
      "всем вам."
    ]
  },
  {
    "time": [
      53.969,
      60.26
    ],
    "en": [
      "If you want to get your own copy of NetSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      60.26,
      64.11
    ],
    "en": [
      "In this lab we will configure DNS, Domain Name System."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим DNS, систему доменных имен."
    ]
  },
  {
    "time": [
      64.11,
      70.56
    ],
    "en": [
      "DNS is used to translate easy-to-remember names like youtube.com to IP addresses."
    ],
    "ru": [
      "DNS используется для преобразования легко запоминающихся имен, таких как youtube.com, в IP-адреса."
    ]
  },
  {
    "time": [
      70.56,
      78.1
    ],
    "en": [
      "We’ll configure R1 and these three PCs to use 1.1.1.1 as their DNS server."
    ],
    "ru": [
      "Мы настроим R1 и эти три компьютера на использование 1.1.1.1 в качестве DNS-сервера."
    ]
  },
  {
    "time": [
      78.1,
      84.13
    ],
    "en": [
      "Unfortunately, the IP DNS SERVER command isn’t available in Packet Tracer, so we can’t"
    ],
    "ru": [
      "К сожалению, команда IP DNS SERVER недоступна в Packet Tracer, поэтому мы не можем"
    ]
  },
  {
    "time": [
      84.13,
      88.39
    ],
    "en": [
      "configure R1 to act as a DNS server for the internal hosts."
    ],
    "ru": [
      "настроить R1 для работы в качестве DNS-сервера для внутренних хостов."
    ]
  },
  {
    "time": [
      88.39,
      94.33
    ],
    "en": [
      "By the way, 1.1.1.1 is an actual DNS server provided by Cloudflare."
    ],
    "ru": [
      "Кстати, 1.1.1.1 - это настоящий DNS-сервер, предоставляемый Cloudflare."
    ]
  },
  {
    "time": [
      94.33,
      102.83
    ],
    "en": [
      "In the lecture video I used 8.8.8.8, Google’s DNS server, but I wanted to introduce another public DNS provider."
    ],
    "ru": [
      "В видео лекции я использовал 8.8.8.8, DNS-сервер Google, но я хотел представить еще одного общедоступного DNS-провайдера."
    ]
  },
  {
    "time": [
      102.83,
      107.181
    ],
    "en": [
      "public DNS provider. Of course, this is Packet Tracer, so this server isn’t a real server, but you can"
    ],
    "ru": [
      "публичный DNS-провайдер. Конечно, это Packet Tracer, поэтому этот сервер не настоящий, но вы можете"
    ]
  },
  {
    "time": [
      107.181,
      116.21000000000001
    ],
    "en": [
      "configure 1.1.1.1 as the DNS server on your PC if you want to actually use Cloudflare’s DNS server."
    ],
    "ru": [
      "настройте 1.1.1.1 в качестве DNS-сервера на вашем ПК, если вы действительно хотите использовать DNS-сервер Cloudflare."
    ]
  },
  {
    "time": [
      116.21000000000001,
      117.75
    ],
    "en": [
      "DNS server. Anyway let’s get started."
    ],
    "ru": [
      "DNS-сервер. В любом случае, приступим."
    ]
  },
  {
    "time": [
      117.75,
      121.64
    ],
    "en": [
      "In step 1 we will configure a default route to the Internet on R1."
    ],
    "ru": [
      "На шаге 1 мы настроим маршрут в Интернет по умолчанию на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      121.64,
      126.75
    ],
    "en": [
      "I thought about pre-configuring this, but it’s good to review the basics sometimes."
    ],
    "ru": [
      "Я думал о предварительной настройке, но иногда полезно пересмотреть основы."
    ]
  },
  {
    "time": [
      126.75,
      131.42
    ],
    "en": [
      "So let’s go on R1. ENABLE."
    ],
    "ru": [
      "Итак, поехали по R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      131.42,
      134.37
    ],
    "en": [
      "ENABLE. CONF T. And now I’ll configure the route."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. А теперь настрою маршрут."
    ]
  },
  {
    "time": [
      134.37,
      141.989
    ],
    "en": [
      "IP ROUTE 0.0.0.0 0.0.0.0, and then the next hop is 203.0.113.2."
    ],
    "ru": [
      "IP-МАРШРУТ 0.0.0.0 0.0.0.0, а затем следующий переход - 203.0.113.2."
    ]
  },
  {
    "time": [
      141.989,
      148.98
    ],
    "en": [
      "Let me point out that this INTERNET cloud is just a router, I just changed the icon."
    ],
    "ru": [
      "Замечу, что это ИНТЕРНЕТ-облако - всего лишь роутер, я просто поменял значок."
    ]
  },
  {
    "time": [
      148.98,
      153.06
    ],
    "en": [
      "In the lab for day 1 of this course I did the same thing and I’ve gotten hundreds"
    ],
    "ru": [
      "В лаборатории первого дня этого курса я проделал то же самое и получил сотни"
    ]
  },
  {
    "time": [
      153.06,
      158.54
    ],
    "en": [
      "of questions about how to add the Internet cloud, so I just wanted to point that out."
    ],
    "ru": [
      "вопросов о том, как добавить Интернет-облако, поэтому я просто хотел указать на это."
    ]
  },
  {
    "time": [
      158.54,
      160.719
    ],
    "en": [
      "Now let me check that this default route is working."
    ],
    "ru": [
      "Теперь позвольте мне проверить, работает ли этот маршрут по умолчанию."
    ]
  },
  {
    "time": [
      160.719,
      169.549
    ],
    "en": [
      "I’ll try to ping the Cloudflare DNS server at 1.1.1.1 DO PING 1.1.1.1."
    ],
    "ru": [
      "Я попробую проверить связь с DNS-сервером Cloudflare по адресу 1.1.1.1 DO PING 1.1.1.1."
    ]
  },
  {
    "time": [
      169.549,
      174.62
    ],
    "en": [
      "ARP can be slow in packet tracer so one or two pings might fail, but then R1 gets the"
    ],
    "ru": [
      "ARP может быть медленным в трассировщике пакетов, поэтому один или два эхо-запроса могут не сработать, но тогда R1 получит"
    ]
  },
  {
    "time": [
      174.62,
      177.81900000000002
    ],
    "en": [
      "response from the server."
    ],
    "ru": [
      "ответ от сервера."
    ]
  },
  {
    "time": [
      177.81900000000002,
      186.719
    ],
    "en": [
      "Okay now in step 2 I’ll configure PC1, PC2, and PC3 to use 1.1.1.1 as their DNS server."
    ],
    "ru": [
      "Хорошо, теперь на шаге 2 я настрою ПК1, ПК2 и ПК3 на использование 1.1.1.1 в качестве DNS-сервера."
    ]
  },
  {
    "time": [
      186.719,
      189.879
    ],
    "en": [
      "First I’ll go on PC1."
    ],
    "ru": [
      "Сначала я пойду на ПК1."
    ]
  },
  {
    "time": [
      189.879,
      196.54
    ],
    "en": [
      "From the config tab, you can configure the DNS server here under the default gateway. 1.1.1.1."
    ],
    "ru": [
      "На вкладке конфигурации вы можете настроить DNS-сервер здесь под шлюзом по умолчанию. 1.1.1.1."
    ]
  },
  {
    "time": [
      196.54,
      198.25
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
      196.54,
      198.25
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
      198.25,
      202.01
    ],
    "en": [
      "Now I’ll do the same on PC2."
    ],
    "ru": [
      "Теперь сделаю то же самое на ПК2."
    ]
  },
  {
    "time": [
      202.01,
      208.049
    ],
    "en": [
      "From the config tab, set the DNS server to 1.1.1.1."
    ],
    "ru": [
      "На вкладке конфигурации установите DNS-сервер на 1.1.1.1."
    ]
  },
  {
    "time": [
      208.049,
      212.51
    ],
    "en": [
      "In the lecture video I mentioned that DHCP can be used to automatically learn things"
    ],
    "ru": [
      "В видео лекции я упомянул, что DHCP можно использовать для автоматического изучения вещей."
    ]
  },
  {
    "time": [
      212.51,
      217.299
    ],
    "en": [
      "like the hosts IP address, default gateway, and DNS server."
    ],
    "ru": [
      "например IP-адрес хоста, шлюз по умолчанию и DNS-сервер."
    ]
  },
  {
    "time": [
      217.299,
      221.45
    ],
    "en": [
      "Notice here in packet tracer you can select either DHCP or static."
    ],
    "ru": [
      "Обратите внимание, что в программе трассировки пакетов вы можете выбрать DHCP или статический."
    ]
  },
  {
    "time": [
      221.45,
      228.61
    ],
    "en": [
      "We’ll use static for now, but I’ll cover DHCP soon in the course, maybe even the next video."
    ],
    "ru": [
      "На данный момент мы будем использовать статику, но вскоре в курсе я расскажу о DHCP, может быть, даже в следующем видео."
    ]
  },
  {
    "time": [
      228.61,
      231.079
    ],
    "en": [
      "video. Okay next PC3."
    ],
    "ru": [
      "видео. Хорошо, следующий PC3."
    ]
  },
  {
    "time": [
      231.079,
      237.849
    ],
    "en": [
      "From the config tab, set the DNS server to 1.1.1.1."
    ],
    "ru": [
      "На вкладке конфигурации установите DNS-сервер на 1.1.1.1."
    ]
  },
  {
    "time": [
      237.849,
      241.18
    ],
    "en": [
      "Next in step 3 we’ll configure R1’s DNS server."
    ],
    "ru": [
      "Затем на шаге 3 мы настроим DNS-сервер маршрутизатора R1."
    ]
  },
  {
    "time": [
      241.18,
      248.69
    ],
    "en": [
      "We’ll also configure a host table on R1 for hosts in the local network, 192.168.0.0/24,"
    ],
    "ru": [
      "Мы также настроим таблицу хостов на R1 для хостов в локальной сети, 192.168.0.0/24,"
    ]
  },
  {
    "time": [
      248.69,
      251.329
    ],
    "en": [
      "so R1 will be able to ping them by name."
    ],
    "ru": [
      "так что R1 сможет пинговать их по имени."
    ]
  },
  {
    "time": [
      251.329,
      254.34
    ],
    "en": [
      "I’ll return to R1."
    ],
    "ru": [
      "Я вернусь к R1."
    ]
  },
  {
    "time": [
      254.34,
      262.82
    ],
    "en": [
      "And let’s configure it to use 1.1.1.1 as well. IP NAME-SERVER 1.1.1.1."
    ],
    "ru": [
      "И давайте настроим его также на использование 1.1.1.1. IP-ИМЯ-СЕРВЕР 1.1.1.1."
    ]
  },
  {
    "time": [
      262.82,
      265.95
    ],
    "en": [
      "IP NAME-SERVER 1.1.1.1. Then a host entry for R1 itself."
    ],
    "ru": [
      "IP-ИМЯ-СЕРВЕР 1.1.1.1. Затем запись хоста для самого R1."
    ]
  },
  {
    "time": [
      265.95,
      272.42
    ],
    "en": [
      "IP HOST R1 192.168.0.254."
    ],
    "ru": [
      "IP-ХОСТ R1 192.168.0.254."
    ]
  },
  {
    "time": [
      272.42,
      275.71
    ],
    "en": [
      "Then for each PC, PC1 first."
    ],
    "ru": [
      "Затем для каждого ПК сначала ПК1."
    ]
  },
  {
    "time": [
      275.71,
      282.69
    ],
    "en": [
      "IP HOST PC1 192.168.0.1. Then PC2."
    ],
    "ru": [
      "IP HOST PC1 192.168.0.1. Потом ПК2."
    ]
  },
  {
    "time": [
      282.69,
      289.04
    ],
    "en": [
      "Then PC2. IP HOST PC2 192.168.0.2. And then PC3."
    ],
    "ru": [
      "Потом ПК2. IP HOST PC2 192.168.0.2. А потом PC3."
    ]
  },
  {
    "time": [
      289.04,
      292.23
    ],
    "en": [
      "And then PC3. IP HOST PC3 192.168.0.3."
    ],
    "ru": [
      "А потом PC3. IP-ХОСТ PC3 192.168.0.3."
    ]
  },
  {
    "time": [
      292.23,
      296.5
    ],
    "en": [
      "Okay, that’s R1’s host table."
    ],
    "ru": [
      "Хорошо, это таблица хостов R1."
    ]
  },
  {
    "time": [
      296.5,
      301.31
    ],
    "en": [
      "I’ll check the host table with DO SHOW HOSTS."
    ],
    "ru": [
      "Я проверю таблицу хостов с помощью DO SHOW HOSTS."
    ]
  },
  {
    "time": [
      301.31,
      302.89
    ],
    "en": [
      "And there are the hosts we configured."
    ],
    "ru": [
      "И есть настроенные нами хосты."
    ]
  },
  {
    "time": [
      302.89,
      310.54
    ],
    "en": [
      "I’ll try a ping to PC1 by name. DO PING PC1."
    ],
    "ru": [
      "Я попробую выполнить эхо-запрос к ПК1 по имени. ПИНГ ПК1."
    ]
  },
  {
    "time": [
      310.54,
      312.37
    ],
    "en": [
      "DO PING PC1. And the ping is successful."
    ],
    "ru": [
      "ПИНГ ПК1. И пинг прошел успешно."
    ]
  },
  {
    "time": [
      312.37,
      321.87
    ],
    "en": [
      "R1 has an entry in its host table for PC1, so it is able to translate the name PC1 to 192.168.0.1."
    ],
    "ru": [
      "R1 имеет запись в таблице хостов для ПК1, поэтому он может преобразовать имя ПК1 в 192.168.0.1."
    ]
  },
  {
    "time": [
      321.87,
      327.41
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
      321.87,
      327.41
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
      327.41,
      332.96
    ],
    "en": [
      "by default so usually you don’t need to configure it."
    ],
    "ru": [
      "по умолчанию, поэтому обычно вам не нужно его настраивать."
    ]
  },
  {
    "time": [
      332.96,
      337.68
    ],
    "en": [
      "Finally in step 4 we will use Packet Tracer’s simulation mode to see the various messages"
    ],
    "ru": [
      "Наконец, на шаге 4 мы будем использовать режим моделирования Packet Tracer, чтобы увидеть различные сообщения."
    ]
  },
  {
    "time": [
      337.68,
      342.87
    ],
    "en": [
      "that are sent when when PC1 pings youtube.com by name."
    ],
    "ru": [
      "которые отправляются, когда ПК1 проверяет связь с youtube.com по имени."
    ]
  },
  {
    "time": [
      342.87,
      345.90999999999997
    ],
    "en": [
      "Simulation mode is enabled here in the bottom right."
    ],
    "ru": [
      "Здесь в правом нижнем углу включен режим моделирования."
    ]
  },
  {
    "time": [
      345.90999999999997,
      353.27
    ],
    "en": [
      "Now I’ll go to PC1 and let’s do that ping. PING youtube.com."
    ],
    "ru": [
      "Теперь я перейду к ПК1 и сделаю пинг. ПИНГ на youtube.com."
    ]
  },
  {
    "time": [
      353.27,
      357.02
    ],
    "en": [
      "PING youtube.com. Okay, so there is a DNS query message here."
    ],
    "ru": [
      "ПИНГ на youtube.com. Итак, здесь есть сообщение с запросом DNS."
    ]
  },
  {
    "time": [
      357.02,
      364.13
    ],
    "en": [
      "Because R1 already pinged PC1, PC1 knows the MAC address of its default gateway R1, so"
    ],
    "ru": [
      "Поскольку R1 уже отправил эхо-запрос на ПК1, ПК1 знает MAC-адрес своего шлюза по умолчанию R1, поэтому"
    ]
  },
  {
    "time": [
      364.13,
      366.4
    ],
    "en": [
      "PC1 doesn’t need to send an ARP request."
    ],
    "ru": [
      "ПК1 не должен отправлять ARP-запрос."
    ]
  },
  {
    "time": [
      366.4,
      374.96
    ],
    "en": [
      "The DNS message goes to R1, to the Internet, and to 1.1.1.1, before being sent back."
    ],
    "ru": [
      "Сообщение DNS отправляется на R1, в Интернет и на 1.1.1.1 перед отправкой обратно."
    ]
  },
  {
    "time": [
      374.96,
      377.59
    ],
    "en": [
      "Note that no ARP messages are needed here either."
    ],
    "ru": [
      "Обратите внимание, что здесь также не нужны сообщения ARP."
    ]
  },
  {
    "time": [
      377.59,
      384.5
    ],
    "en": [
      "R1 already pinged 1.1.1.1 before, so the ARP process is already complete."
    ],
    "ru": [
      "R1 уже отправил запрос 1.1.1.1 раньше, поэтому процесс ARP уже завершен."
    ]
  },
  {
    "time": [
      384.5,
      392.11
    ],
    "en": [
      "Now that 1.1.1.1’s DNS response is back at PC1, let’s see the contents."
    ],
    "ru": [
      "Теперь, когда ответ DNS 1.1.1.1 вернулся на ПК1, давайте посмотрим на его содержимое."
    ]
  },
  {
    "time": [
      392.11,
      398.35
    ],
    "en": [
      "From the ‘inbound PDU details’ tab, scroll down to the bottom and you can see the answer."
    ],
    "ru": [
      "На вкладке «Сведения о входящем PDU» прокрутите вниз и вы увидите ответ."
    ]
  },
  {
    "time": [
      398.35,
      404.63
    ],
    "en": [
      "Youtube.com’s IP address is 172.217.6.78."
    ],
    "ru": [
      "IP-адрес Youtube.com: 172.217.6.78."
    ]
  },
  {
    "time": [
      404.63,
      408.15999999999997
    ],
    "en": [
      "Notice PC1 has now created the ICMP message, the ping."
    ],
    "ru": [
      "Обратите внимание, что ПК1 создал ICMP-сообщение, ping."
    ]
  },
  {
    "time": [
      408.15999999999997,
      418.14
    ],
    "en": [
      "If I click on it, you can see that the destination IP is 172.217.6.78, the IP address of youtube.com."
    ],
    "ru": [
      "Если я нажму на нее, вы увидите, что IP-адрес назначения - 172.217.6.78, IP-адрес youtube.com."
    ]
  },
  {
    "time": [
      418.14,
      422.71
    ],
    "en": [
      "The message goes to R1 and the Internet, but now the Internet router has to send an ARP"
    ],
    "ru": [
      "Сообщение отправляется R1 и Интернету, но теперь Интернет-маршрутизатор должен отправить ARP"
    ]
  },
  {
    "time": [
      422.71,
      429.22
    ],
    "en": [
      "message to youtube.com, because I haven’t sent any traffic between them yet in this lab."
    ],
    "ru": [
      "сообщение на youtube.com, потому что в этой лабораторной работе я еще не отправлял трафик между ними."
    ]
  },
  {
    "time": [
      429.22,
      434.45
    ],
    "en": [
      "lab. During that time PC1’s first ping fails, but then it sends another ping and it reaches"
    ],
    "ru": [
      "лаборатория. В течение этого времени первый эхо-запрос ПК1 не проходит, но затем он отправляет другой эхо-запрос и достигает"
    ]
  },
  {
    "time": [
      434.45,
      437.38
    ],
    "en": [
      "youtube.com, and youtube.com replies."
    ],
    "ru": [
      "youtube.com и youtube.com ответы."
    ]
  },
  {
    "time": [
      437.38,
      441.21
    ],
    "en": [
      "Okay, I’ll return to realtime mode now."
    ],
    "ru": [
      "Хорошо, сейчас я вернусь в режим реального времени."
    ]
  },
  {
    "time": [
      441.21,
      446.91
    ],
    "en": [
      "If I go back to PC1, notice that the first ping failed, but the next three succeeded,"
    ],
    "ru": [
      "Если я вернусь к ПК1, обратите внимание, что первый эхо-запрос не удался, но следующие три прошли успешно,"
    ]
  },
  {
    "time": [
      446.91,
      451.18
    ],
    "en": [
      "because the ARP process in Packet Tracer is a bit slow."
    ],
    "ru": [
      "потому что процесс ARP в Packet Tracer немного медленный."
    ]
  },
  {
    "time": [
      451.18,
      456.67
    ],
    "en": [
      "Simulation mode in Packet Tracer is a great tool to understand how traffic flows through a network."
    ],
    "ru": [
      "Режим моделирования в Packet Tracer - отличный инструмент для понимания того, как трафик проходит через сеть."
    ]
  },
  {
    "time": [
      456.67,
      462.14
    ],
    "en": [
      "a network. For PC1 to ping youtube.com, ICMP messages weren’t the only messages sent."
    ],
    "ru": [
      "сеть. Для ПК1, отправляющего ping youtube.com, сообщения ICMP были не единственными отправленными сообщениями."
    ]
  },
  {
    "time": [
      462.14,
      465.02
    ],
    "en": [
      "DNS and ARP messages were needed too."
    ],
    "ru": [
      "Также потребовались сообщения DNS и ARP."
    ]
  },
  {
    "time": [
      465.02,
      469.92
    ],
    "en": [
      "There’s not much you need to know about DNS in terms of configuration, but make sure"
    ],
    "ru": [
      "Вам не так много нужно знать о DNS с точки зрения конфигурации, но убедитесь, что"
    ]
  },
  {
    "time": [
      469.92,
      472.23
    ],
    "en": [
      "you understand its basic purpose and operations."
    ],
    "ru": [
      "вы понимаете его основное назначение и действия."
    ]
  },
  {
    "time": [
      472.23,
      474.51
    ],
    "en": [
      "Okay, that’s all for this lab."
    ],
    "ru": [
      "Ладно, это все для этой лаборатории."
    ]
  },
  {
    "time": [
      474.51,
      480.68
    ],
    "en": [
      "Now let’s take a look at a lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на лабораторию в NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      480.68,
      483.47
    ],
    "en": [
      "Okay here's today's Boson NetSim lab preview."
    ],
    "ru": [
      "Хорошо, вот сегодняшняя предварительная версия лаборатории Boson NetSim."
    ]
  },
  {
    "time": [
      483.47,
      488.31
    ],
    "en": [
      "The lab I have selected for today is Configuring DNS 1."
    ],
    "ru": [
      "Лаборатория, которую я выбрал на сегодня, - это Настройка DNS 1."
    ]
  },
  {
    "time": [
      488.31,
      491.93
    ],
    "en": [
      "Boson NetSim for CCNA has four DNS labs here."
    ],
    "ru": [
      "В Boson NetSim for CCNA есть четыре лаборатории DNS."
    ]
  },
  {
    "time": [
      491.93,
      497.28
    ],
    "en": [
      "Configuring DNS 1 and 2, and then Troubleshooting DNS 1 and 2."
    ],
    "ru": [
      "Настройка DNS 1 и 2, а затем Устранение неполадок DNS 1 и 2."
    ]
  },
  {
    "time": [
      497.28,
      499.23
    ],
    "en": [
      "So I've selected the first one."
    ],
    "ru": [
      "Итак, я выбрал первый."
    ]
  },
  {
    "time": [
      499.23,
      504.18
    ],
    "en": [
      "It has a pretty simple topology, one router, one switch and two PCs."
    ],
    "ru": [
      "У него довольно простая топология, один маршрутизатор, один коммутатор и два ПК."
    ]
  },
  {
    "time": [
      504.18,
      506.34
    ],
    "en": [
      "Here are the commands you need to know."
    ],
    "ru": [
      "Вот команды, которые вам нужно знать."
    ]
  },
  {
    "time": [
      506.34,
      509.0
    ],
    "en": [
      "Some of these we covered in the lecture video."
    ],
    "ru": [
      "Некоторые из них мы рассмотрели в видео лекции."
    ]
  },
  {
    "time": [
      509.0,
      515.009
    ],
    "en": [
      "And some of these are NetSim specific commands, such as these ones here."
    ],
    "ru": [
      "И некоторые из них являются специфическими для NetSim командами, например, здесь."
    ]
  },
  {
    "time": [
      515.009,
      521.759
    ],
    "en": [
      "IPCONFIG /DG to configure the default gateway, /IP to configure the IP address, and /DNS"
    ],
    "ru": [
      "IPCONFIG / DG для настройки шлюза по умолчанию, / IP для настройки IP-адреса и / DNS"
    ]
  },
  {
    "time": [
      521.759,
      528.79
    ],
    "en": [
      "to configure the DNS server on a PC in NetSim."
    ],
    "ru": [
      "настроить DNS-сервер на ПК в NetSim."
    ]
  },
  {
    "time": [
      528.79,
      530.249
    ],
    "en": [
      "Okay here are the lab tasks."
    ],
    "ru": [
      "Хорошо, вот лабораторные задания."
    ]
  },
  {
    "time": [
      530.249,
      537.86
    ],
    "en": [
      "There are four tasks but for this little preview we'll just do task 1 and task 2."
    ],
    "ru": [
      "Есть четыре задачи, но для этого небольшого предварительного просмотра мы просто сделаем задачу 1 и задачу 2."
    ]
  },
  {
    "time": [
      537.86,
      544.199
    ],
    "en": [
      "So let's get started with task 1, which involves configuring IP addresses on these devices."
    ],
    "ru": [
      "Итак, приступим к задаче 1, которая включает настройку IP-адресов на этих устройствах."
    ]
  },
  {
    "time": [
      544.199,
      546.749
    ],
    "en": [
      "So first step 1."
    ],
    "ru": [
      "Итак, первый шаг 1."
    ]
  },
  {
    "time": [
      546.749,
      554.889
    ],
    "en": [
      "On Router1 configure the host name, enable the interface, and assign the appropriate IP address, okay."
    ],
    "ru": [
      "На Router1 настройте имя хоста, включите интерфейс и назначьте соответствующий IP-адрес, хорошо."
    ]
  },
  {
    "time": [
      554.889,
      556.16
    ],
    "en": [
      "IP address, okay. So here's Router1."
    ],
    "ru": [
      "IP-адрес, хорошо. Итак, вот Router1."
    ]
  },
  {
    "time": [
      556.16,
      562.98
    ],
    "en": [
      "I'll configure the host name. HOSTNAME Router1."
    ],
    "ru": [
      "Я настрою имя хоста. HOSTNAME Маршрутизатор 1."
    ]
  },
  {
    "time": [
      562.98,
      568.41
    ],
    "en": [
      "HOSTNAME Router1. And then here's the interface. INTERFACE F0/0."
    ],
    "ru": [
      "HOSTNAME Маршрутизатор 1. А вот и интерфейс. ИНТЕРФЕЙС F0 / 0."
    ]
  },
  {
    "time": [
      568.41,
      574.889
    ],
    "en": [
      "INTERFACE F0/0. It's 10.0.0.1 /24."
    ],
    "ru": [
      "ИНТЕРФЕЙС F0 / 0. Это 10.0.0.1 / 24."
    ]
  },
  {
    "time": [
      574.889,
      579.04
    ],
    "en": [
      "And I'll enable that."
    ],
    "ru": [
      "И я включу это."
    ]
  },
  {
    "time": [
      579.04,
      581.48
    ],
    "en": [
      "Okay I think that's it on R1."
    ],
    "ru": [
      "Ладно, думаю, на R1 все."
    ]
  },
  {
    "time": [
      581.48,
      590.3389999999999
    ],
    "en": [
      "Next I'll go on to Switch1 and do the same."
    ],
    "ru": [
      "Затем я перейду к Switch1 и сделаю то же самое."
    ]
  },
  {
    "time": [
      590.3389999999999,
      593.74
    ],
    "en": [
      "Okay now I'm going to configure an IP address on Switch1."
    ],
    "ru": [
      "Хорошо, теперь я собираюсь настроить IP-адрес на Switch1."
    ]
  },
  {
    "time": [
      593.74,
      595.7090000000001
    ],
    "en": [
      "This might be a new concept for you."
    ],
    "ru": [
      "Возможно, это новая концепция для вас."
    ]
  },
  {
    "time": [
      595.7090000000001,
      600.8
    ],
    "en": [
      "Switch1 is a Layer2 switch but I'm going to configure an IP address on it."
    ],
    "ru": [
      "Switch1 - это коммутатор уровня 2, но я собираюсь настроить на нем IP-адрес."
    ]
  },
  {
    "time": [
      600.8,
      607.63
    ],
    "en": [
      "So, I will cover this in more detail when we cover SSH and Telnet in a later video,"
    ],
    "ru": [
      "Итак, я расскажу об этом более подробно, когда мы рассмотрим SSH и Telnet в следующем видео,"
    ]
  },
  {
    "time": [
      607.63,
      613.04
    ],
    "en": [
      "but Layer2 switches can have an IP address which you can use to connect to it to configure"
    ],
    "ru": [
      "но коммутаторы Layer2 могут иметь IP-адрес, который вы можете использовать для подключения к нему для настройки"
    ]
  },
  {
    "time": [
      613.04,
      618.279
    ],
    "en": [
      "the switch, so you don't actually have to physically be next to the switch with a console cable."
    ],
    "ru": [
      "коммутатор, поэтому вам не нужно физически находиться рядом с коммутатором с консольным кабелем."
    ]
  },
  {
    "time": [
      618.279,
      621.129
    ],
    "en": [
      "cable. Anyway, I'll talk about that in a later video."
    ],
    "ru": [
      "кабель. В любом случае, я расскажу об этом в следующем видео."
    ]
  },
  {
    "time": [
      621.129,
      627.509
    ],
    "en": [
      "So let's configure that IP address on the VLAN1 SVI, switch virtual interface."
    ],
    "ru": [
      "Итак, давайте настроим этот IP-адрес на VLAN1 SVI, виртуальный интерфейс коммутатора."
    ]
  },
  {
    "time": [
      627.509,
      634.889
    ],
    "en": [
      "The IP address is 10.0.0.2 /24."
    ],
    "ru": [
      "IP-адрес - 10.0.0.2 / 24."
    ]
  },
  {
    "time": [
      634.889,
      640.782
    ],
    "en": [
      "And it should be enabled by default but I'll NO SHUT it just incase."
    ],
    "ru": [
      "И он должен быть включен по умолчанию, но я НЕ ЗАКЛЮЧИТЕ его на всякий случай."
    ]
  },
  {
    "time": [
      640.782,
      648.47
    ],
    "en": [
      "Okay next, on the PCs, configure the appropriate IP address, subnet mask, and default gateway."
    ],
    "ru": [
      "Хорошо, затем на ПК настройте соответствующий IP-адрес, маску подсети и шлюз по умолчанию."
    ]
  },
  {
    "time": [
      648.47,
      653.149
    ],
    "en": [
      "Okay so now I'm going to use those NetSim-specific commands I showed you."
    ],
    "ru": [
      "Хорошо, теперь я собираюсь использовать те команды, специфичные для NetSim, которые я вам показал."
    ]
  },
  {
    "time": [
      653.149,
      655.44
    ],
    "en": [
      "First here on PC1."
    ],
    "ru": [
      "Сначала здесь, на ПК1."
    ]
  },
  {
    "time": [
      655.44,
      660.54
    ],
    "en": [
      "IPCONFIG /IP to set the IP address."
    ],
    "ru": [
      "IPCONFIG / IP, чтобы установить IP-адрес."
    ]
  },
  {
    "time": [
      660.54,
      668.189
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
      660.54,
      668.189
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
      668.189,
      676.5
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
      668.189,
      676.5
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
      676.5,
      680.17
    ],
    "en": [
      "And then I'll do the same on PC2."
    ],
    "ru": [
      "А потом сделаю то же самое на ПК2."
    ]
  },
  {
    "time": [
      680.17,
      688.006
    ],
    "en": [
      "IPCONFIG /IP 10.0.0.101 /24."
    ],
    "ru": [
      "IPCONFIG / IP 10.0.0.101 / 24."
    ]
  },
  {
    "time": [
      688.006,
      696.93
    ],
    "en": [
      "IPCONFIG /DG 10.0.0.1, okay."
    ],
    "ru": [
      "IPCONFIG / DG 10.0.0.1, хорошо."
    ]
  },
  {
    "time": [
      696.93,
      703.86
    ],
    "en": [
      "Next up, verify the IP address and subnet mask on Router1 and Switch1."
    ],
    "ru": [
      "Затем проверьте IP-адрес и маску подсети на Router1 и Switch1."
    ]
  },
  {
    "time": [
      703.86,
      707.36
    ],
    "en": [
      "Okay, DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "Хорошо, ПОКАЖИТЕ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      707.36,
      715.3389999999999
    ],
    "en": [
      "Okay, on FastEthernet0/0, 10.0.0.1 and it's UP and UP."
    ],
    "ru": [
      "Хорошо, на FastEthernet0 / 0, 10.0.0.1, и это ВВЕРХ и ВВЕРХ."
    ]
  },
  {
    "time": [
      715.3389999999999,
      720.279
    ],
    "en": [
      "Now it says verify the IP address and subnet mask, but you can't actually view the subnet"
    ],
    "ru": [
      "Теперь он говорит, что проверьте IP-адрес и маску подсети, но вы не можете просмотреть подсеть"
    ]
  },
  {
    "time": [
      720.279,
      723.569
    ],
    "en": [
      "mask using SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "маска с помощью SHOW IP INTERFACE BRIEF."
    ]
  },
  {
    "time": [
      723.569,
      731.589
    ],
    "en": [
      "So DO SHOW IP INTERFACE F0/0 will show us that."
    ],
    "ru": [
      "Итак, ПОКАЗАТЬ IP-ИНТЕРФЕЙС F0 / 0 покажет нам это."
    ]
  },
  {
    "time": [
      731.589,
      735.529
    ],
    "en": [
      "There it is, /24."
    ],
    "ru": [
      "Вот оно, / 24."
    ]
  },
  {
    "time": [
      735.529,
      737.94
    ],
    "en": [
      "Okay and I'll do the same on Switch1."
    ],
    "ru": [
      "Хорошо, и я сделаю то же самое на Switch1."
    ]
  },
  {
    "time": [
      737.94,
      741.584
    ],
    "en": [
      "DO SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      741.584,
      746.3
    ],
    "en": [
      "VLAN1, 10.0.0.2, UP UP."
    ],
    "ru": [
      "VLAN1, 10.0.0.2, ВВЕРХ ВВЕРХ."
    ]
  },
  {
    "time": [
      746.3,
      758.249
    ],
    "en": [
      "But we can't see the subnet mask so I'll use DO SHOW IP INTERFACE, without the brief, VLAN 1. Okay, /24."
    ],
    "ru": [
      "Но мы не видим маску подсети, поэтому я буду использовать DO SHOW IP INTERFACE без краткого описания VLAN 1. Хорошо, / 24."
    ]
  },
  {
    "time": [
      758.249,
      763.759
    ],
    "en": [
      "Okay, /24. Okay so we have verified the IP address and subnet masks on Router1 and Switch1."
    ],
    "ru": [
      "Хорошо, / 24. Итак, мы проверили IP-адрес и маски подсети на Router1 и Switch1."
    ]
  },
  {
    "time": [
      763.759,
      775.38
    ],
    "en": [
      "Finally, in step 5 we have to verify network connectivity by pinging to Switch1, PC1, and PC2 from Router1."
    ],
    "ru": [
      "Наконец, на шаге 5 мы должны проверить сетевое подключение, отправив эхо-запрос на Switch1, PC1 и PC2 с Router1."
    ]
  },
  {
    "time": [
      775.38,
      776.889
    ],
    "en": [
      "PC2 from Router1. Okay so let's do that."
    ],
    "ru": [
      "ПК2 от Router1. Хорошо, давай сделаем это."
    ]
  },
  {
    "time": [
      776.889,
      782.29
    ],
    "en": [
      "PING 10.0.0.2, that's Switch1, looks good."
    ],
    "ru": [
      "PING 10.0.0.2, это Switch1, выглядит хорошо."
    ]
  },
  {
    "time": [
      782.29,
      786.42
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
      782.29,
      786.42
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
      786.42,
      790.3
    ],
    "en": [
      "And .101, PC2, great."
    ],
    "ru": [
      "И .101, PC2, отлично."
    ]
  },
  {
    "time": [
      790.3,
      792.129
    ],
    "en": [
      "Okay so that's task 1."
    ],
    "ru": [
      "Итак, это задача 1."
    ]
  },
  {
    "time": [
      792.129,
      799.36
    ],
    "en": [
      "We performed the initial configurations of host names and IP addresses and tested connectivity."
    ],
    "ru": [
      "Мы выполнили начальную настройку имен хостов и IP-адресов и проверили возможность подключения."
    ]
  },
  {
    "time": [
      799.36,
      802.899
    ],
    "en": [
      "Task 2 is to configure DNS."
    ],
    "ru": [
      "Задача 2 - настроить DNS."
    ]
  },
  {
    "time": [
      802.899,
      810.73
    ],
    "en": [
      "Okay from Switch1 ping Router1 by using the host name Router1 instead of Router1's IP address."
    ],
    "ru": [
      "Хорошо, с Switch1 отправьте эхо-запрос на Router1, используя имя хоста Router1 вместо IP-адреса Router1."
    ]
  },
  {
    "time": [
      810.73,
      814.519
    ],
    "en": [
      "Does the ping succeed or fail, and why?"
    ],
    "ru": [
      "Пинг успешен или нет, и почему?"
    ]
  },
  {
    "time": [
      814.519,
      823.399
    ],
    "en": [
      "So, Switch1 doesn't have any DNS configurations yet so this should fail, let's see. PING Router1."
    ],
    "ru": [
      "Итак, Switch1 еще не имеет конфигураций DNS, так что это должно не работать, давайте посмотрим. PING Router 1."
    ]
  },
  {
    "time": [
      823.399,
      825.57
    ],
    "en": [
      "PING Router1. And yes, unrecognized host or address."
    ],
    "ru": [
      "PING Router 1. И да, неопознанный хост или адрес."
    ]
  },
  {
    "time": [
      825.57,
      831.94
    ],
    "en": [
      "So Switch1 was unable to translate the host name Router1 to an IP address."
    ],
    "ru": [
      "Таким образом, Switch1 не смог преобразовать имя хоста Router1 в IP-адрес."
    ]
  },
  {
    "time": [
      831.94,
      838.772
    ],
    "en": [
      "Okay, and then step 2, on Router1 enable the DNS feature."
    ],
    "ru": [
      "Хорошо, а затем шаг 2, на Router1 включите функцию DNS."
    ]
  },
  {
    "time": [
      838.772,
      841.42
    ],
    "en": [
      "Sorry, the DNS server feature, that's important."
    ],
    "ru": [
      "Извините, функция DNS-сервера, это важно."
    ]
  },
  {
    "time": [
      841.42,
      844.019
    ],
    "en": [
      "So IP DNS SERVER."
    ],
    "ru": [
      "Итак, IP DNS СЕРВЕР."
    ]
  },
  {
    "time": [
      844.019,
      849.43
    ],
    "en": [
      "So now Router1 will respond to DNS queries if it has the appropriate entry."
    ],
    "ru": [
      "Итак, теперь Router1 будет отвечать на запросы DNS, если у него есть соответствующая запись."
    ]
  },
  {
    "time": [
      849.43,
      852.41
    ],
    "en": [
      "And let's configure those entries here in step 3."
    ],
    "ru": [
      "И давайте настроим эти записи здесь, на шаге 3."
    ]
  },
  {
    "time": [
      852.41,
      857.81
    ],
    "en": [
      "Configure Router1 with two host table entries, Router1 and Switch1."
    ],
    "ru": [
      "Настройте Router1 с двумя записями в таблице хостов, Router1 и Switch1."
    ]
  },
  {
    "time": [
      857.81,
      871.72
    ],
    "en": [
      "Okay the command is IP HOST, 10.0., or sorry IP HOST, the hostname's first, and then the IP address., 10.0.0.1."
    ],
    "ru": [
      "Хорошо, это команда IP HOST, 10.0. Или извините IP HOST, сначала имя хоста, а затем IP-адрес., 10.0.0.1."
    ]
  },
  {
    "time": [
      871.72,
      876.42
    ],
    "en": [
      "IP address., 10.0.0.1. And then for Switch1."
    ],
    "ru": [
      "IP-адрес., 10.0.0.1. А потом для Switch1."
    ]
  },
  {
    "time": [
      876.42,
      884.059
    ],
    "en": [
      "Okay configure Switch1 to use Router1 as its DNS server and enable hostname-to-address translation."
    ],
    "ru": [
      "Хорошо, настройте Switch1 для использования Router1 в качестве DNS-сервера и включите преобразование имени хоста в адрес."
    ]
  },
  {
    "time": [
      884.059,
      894.97
    ],
    "en": [
      "translation. Okay, so to make Router1 its DNS server the command is IP NAME-SERVER and then the IP address."
    ],
    "ru": [
      "перевод. Итак, чтобы сделать Router1 своим DNS-сервером, введите команду IP NAME-SERVER, а затем IP-адрес."
    ]
  },
  {
    "time": [
      894.97,
      902.439
    ],
    "en": [
      "address. And to enable hostname-to-address translation, that is this command: IP DOMAIN-LOOKUP."
    ],
    "ru": [
      "адрес. А чтобы включить преобразование имени хоста в адрес, это команда: IP DOMAIN-LOOKUP."
    ]
  },
  {
    "time": [
      902.439,
      904.74
    ],
    "en": [
      "Notice it's using the old version, with a hyphen."
    ],
    "ru": [
      "Обратите внимание, что используется старая версия с дефисом."
    ]
  },
  {
    "time": [
      904.74,
      913.04
    ],
    "en": [
      "So, this command should be enabled by default, but it told us to enable it again anyway."
    ],
    "ru": [
      "Итак, эта команда должна быть включена по умолчанию, но она все равно сказала нам включить ее снова."
    ]
  },
  {
    "time": [
      913.04,
      915.35
    ],
    "en": [
      "Okay and then finally step 5."
    ],
    "ru": [
      "Хорошо, а затем, наконец, шаг 5."
    ]
  },
  {
    "time": [
      915.35,
      920.34
    ],
    "en": [
      "From Switch1 ping Router1 by using the name of the host instead of Router1's IP address"
    ],
    "ru": [
      "С Switch1 отправьте эхо-запрос на Router1, используя имя хоста вместо IP-адреса Router1."
    ]
  },
  {
    "time": [
      920.34,
      923.029
    ],
    "en": [
      "to verify your configuration."
    ],
    "ru": [
      "чтобы проверить вашу конфигурацию."
    ]
  },
  {
    "time": [
      923.029,
      927.72
    ],
    "en": [
      "So let's try that ping again and it should work this time. PING Router1."
    ],
    "ru": [
      "Итак, давайте попробуем этот пинг еще раз, и на этот раз он должен сработать. PING Router 1."
    ]
  },
  {
    "time": [
      927.72,
      937.199
    ],
    "en": [
      "PING Router1. Okay, it says 'translating Router1' using domain server 10.0.0.1, which is Router1."
    ],
    "ru": [
      "PING Router 1. Хорошо, там написано «перевод Router1» с использованием сервера домена 10.0.0.1, то есть Router1."
    ]
  },
  {
    "time": [
      937.199,
      944.449
    ],
    "en": [
      "And then it translates it to 10.0.0.1 and the pings succeed."
    ],
    "ru": [
      "Затем он переводит его в 10.0.0.1, и эхо-запросы проходят успешно."
    ]
  },
  {
    "time": [
      944.449,
      949.93
    ],
    "en": [
      "Okay then if we were to go on to task 3 and 4, here we would edit a PC hosts file, remember"
    ],
    "ru": [
      "Хорошо, тогда, если бы мы перешли к задачам 3 и 4, здесь мы бы отредактировали файл хостов ПК, помните"
    ]
  },
  {
    "time": [
      949.93,
      955.55
    ],
    "en": [
      "I showed you in the lecture video what a PC hosts file is."
    ],
    "ru": [
      "Я показал вам в видео лекции, что такое файл хоста ПК."
    ]
  },
  {
    "time": [
      955.55,
      961.239
    ],
    "en": [
      "And then we would configure DNS on PC1 and PC2."
    ],
    "ru": [
      "А затем мы настроим DNS на ПК1 и ПК2."
    ]
  },
  {
    "time": [
      961.239,
      964.73
    ],
    "en": [
      "Okay so that's a quick look at Boson NetSim for CCNA."
    ],
    "ru": [
      "Хорошо, это быстрый взгляд на Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      964.73,
      970.439
    ],
    "en": [
      "Boson NetSim has over 100 detailed labs like this, with a powerful network simulator."
    ],
    "ru": [
      "В Boson NetSim имеется более 100 подобных лабораторных работ с мощным симулятором сети."
    ]
  },
  {
    "time": [
      970.439,
      973.949
    ],
    "en": [
      "So it's a really fantastic study tool for the CCNA."
    ],
    "ru": [
      "Так что это действительно фантастический инструмент для изучения CCNA."
    ]
  },
  {
    "time": [
      973.949,
      981.42
    ],
    "en": [
      "If you're interested, you can check out Boson NetSim from the link in the video description."
    ],
    "ru": [
      "Если вам интересно, вы можете проверить Boson NetSim по ссылке в описании видео."
    ]
  },
  {
    "time": [
      981.42,
      986.05
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      986.05,
      989.6
    ],
    "en": [
      "To join, please click the ‘Join’ button under the video."
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под видео."
    ]
  },
  {
    "time": [
      989.6,
      996.0
    ],
    "en": [
      "Thank you to Tech Alameda, Marcel, Magrathea, Kone, Donald, C Mohd, Gustavo, Anthony, Biraj,"
    ],
    "ru": [
      "Спасибо Tech Alameda, Marcel, Magrathea, Kone, Donald, C Mohd, Gustavo, Anthony, Biraj,"
    ]
  },
  {
    "time": [
      996.0,
      1003.369
    ],
    "en": [
      "Junhong, Njabulo, Benjamin, Tshepiso, Justin, Prakaash, Nasir, Erlison, Apogee, Marko, Daming,"
    ],
    "ru": [
      "Джунхонг, Нджабуло, Бенджамин, Чеписо, Джастин, Пракааш, Насир, Эрлисон, Апогей, Марко, Даминг,"
    ]
  },
  {
    "time": [
      1003.369,
      1012.199
    ],
    "en": [
      "Jhilmar, Ed, Value, John, Funnydart, Velvijaykum, Mark, Yousif, Boson Software, Devin, Lito, Yonatan, and Vance."
    ],
    "ru": [
      "Джилмар, Эд, Вэлью, Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, Boson Software, Девин, Лито, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      1012.199,
      1016.809
    ],
    "en": [
      "Yonatan, and Vance. Sorry if I pronounced your name incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "Йонатан и Вэнс. Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1016.809,
      1023.5
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, January 17th 2020."
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 17 января 2020 года."
    ]
  },
  {
    "time": [
      1023.5,
      1029.88
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
      1023.5,
      1029.88
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
      1029.88,
      1031.459
    ],
    "en": [
      "videos. Thank you for watching."
    ],
    "ru": [
      "видео. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      1031.459,
      1035.429
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      "Пожалуйста, подпишитесь на канал, поставьте лайк видео, оставьте комментарий и поделитесь видео"
    ]
  },
  {
    "time": [
      1035.429,
      1038.699
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      "со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      1038.699,
      1041.909
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      1041.909,
      1048.86
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через браузер Brave."
    ]
  },
  {
    "time": [
      1048.86,
      1048.86
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]