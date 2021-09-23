let objs = [
  {
    "time": [
      0.96,
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
      11.36
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
      11.36,
      16.08
    ],
    "en": [
      "Also, please like and leave a comment, and&nbsp; share the video to help spread this free series&nbsp;&nbsp;"
    ],
    "ru": [
      "Также, пожалуйста, поставьте лайк и оставьте комментарий, и & nbsp; поделитесь видео, чтобы помочь распространить эту бесплатную серию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      16.08,
      21.68
    ],
    "en": [
      "of videos. Thanks for your help. Also, remember&nbsp; to sign up via the link in the description to&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. Спасибо за вашу помощь. Также помните & nbsp; чтобы зарегистрироваться по ссылке в описании на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      21.68,
      27.52
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
      27.52,
      30.56
    ],
    "en": [
      "If you want more labs like these,&nbsp; I highly recommend picking up&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, & nbsp; Очень рекомендую забрать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      30.56,
      36.32
    ],
    "en": [
      "Boson’s NetSim for the CCNA, click the link&nbsp; in the video description to check it out.&nbsp;&nbsp;"
    ],
    "ru": [
      "NetSim от Boson для CCNA, щелкните ссылку & nbsp; в описании видео, чтобы проверить это. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      36.32,
      39.84
    ],
    "en": [
      "It’s a network simulator like&nbsp; packet tracer, but it’s even better,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это сетевой симулятор, например & nbsp; пакетный трассировщик, но он даже лучше, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      39.84,
      44.8
    ],
    "en": [
      "and it includes all of these guided labs to not&nbsp; only help you get hands-on practice configuring&nbsp;&nbsp;"
    ],
    "ru": [
      "и он включает в себя все эти лабораторные занятия, чтобы не & nbsp; только поможет вам на практике настроить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      44.8,
      50.72
    ],
    "en": [
      "and troubleshooting, but also deepen your&nbsp; understanding of the exam topics. I used it myself&nbsp;&nbsp;"
    ],
    "ru": [
      "и устранение неполадок, но и углубить ваши & nbsp; понимание темы экзамена. Сам использовал & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      50.72,
      56.32
    ],
    "en": [
      "when studying for my certifications, so I feel&nbsp; confident about recommending it to all of you.&nbsp;&nbsp;"
    ],
    "ru": [
      "когда я готовлюсь к получению сертификатов, поэтому я чувствую & nbsp; уверен, что рекомендую его всем вам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      56.32,
      62.64
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
      62.64,
      68.24
    ],
    "en": [
      "In this video we’ll configure DHCP,&nbsp; Dynamic Host Configuration Protocol.&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом видео мы настроим DHCP, & nbsp; Протокол динамической конфигурации хоста. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      68.24,
      75.36
    ],
    "en": [
      "As you can see in the network diagram, PC1 and&nbsp; PC2 don’t have IP addresses yet, and R1’s G0/0&nbsp;&nbsp;"
    ],
    "ru": [
      "Как видно на схеме сети, ПК1 и & nbsp; ПК2 еще не имеет IP-адресов, а G0 / 0 & nbsp; & nbsp; маршрутизатора R1;"
    ]
  },
  {
    "time": [
      75.36,
      83.68
    ],
    "en": [
      "interface doesn’t have an IP address either. We’ll&nbsp; configure R2 as a DHCP server, R1 as a DHCP client&nbsp;&nbsp;"
    ],
    "ru": [
      "интерфейс тоже не имеет IP-адреса. Мы & nbsp; настроить R2 как DHCP-сервер, R1 как DHCP-клиент & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      83.68,
      92.16
    ],
    "en": [
      "on its G0/0 interface, and also configure&nbsp; R1 as a DHCP relay agent. Let’s get started."
    ],
    "ru": [
      "на его интерфейсе G0 / 0, а также настроить & nbsp; R1 в качестве агента ретрансляции DHCP. Давайте начнем."
    ]
  },
  {
    "time": [
      92.16,
      101.03999999999999
    ],
    "en": [
      "First, in step 1 we’ll configure three DHCP&nbsp; pools on R2, one for the 192.168.1.0/24 subnet,&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала на шаге 1 мы настроим три DHCP & nbsp; пулы на R2, один для подсети 192.168.1.0/24, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      101.03999999999999,
      111.92
    ],
    "en": [
      "one for the 192.168.2.0/24 subnet, and one for the&nbsp; connection between R1 and R2. So, I’ll go on R2.&nbsp;&nbsp;"
    ],
    "ru": [
      "один для подсети 192.168.2.0/24 и один для & nbsp; соединение между R1 и R2. Итак, я перейду на R2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      111.92,
      120.08
    ],
    "en": [
      "ENABLE. CONF T. For POOL1 and POOL2 we are&nbsp; told to reserve the first 10 host addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Для POOL1 и POOL2 мы & nbsp; сказано зарезервировать первые 10 адресов хоста, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      120.08,
      126.16
    ],
    "en": [
      "I’ll configure those ranges first. Remember,&nbsp; the IP DHCP EXCLUDED-ADDRESS command&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я настрою эти диапазоны. Помните, & nbsp; команда IP DHCP EXCLUDED-ADDRESS & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      126.16,
      134.08
    ],
    "en": [
      "is done from global config mode, not DHCP&nbsp; config mode. So, IP DHCP EXCLUDED-ADDRESS&nbsp;&nbsp;"
    ],
    "ru": [
      "выполняется из режима глобальной конфигурации, а не из DHCP & nbsp; режим конфигурации. Итак, IP DHCP EXCLUDED-ADDRESS & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      134.08,
      143.2
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
      134.08,
      143.2
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
      143.2,
      151.76
    ],
    "en": [
      "Now I’ll use the up arrow, and change these&nbsp; to 192.168.2.1 and 192.168.2.10. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь я воспользуюсь стрелкой вверх и изменим эти & nbsp; на 192.168.2.1 и 192.168.2.10. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      151.76,
      159.36
    ],
    "en": [
      "so that reserves the first 10 addresses of POOL1&nbsp; and POOL2, they won’t be assigned to DHCP clients.&nbsp;&nbsp;"
    ],
    "ru": [
      "так что зарезервированы первые 10 адресов POOL1 & nbsp; и POOL2, они не будут назначаться DHCP-клиентам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      159.36,
      169.52
    ],
    "en": [
      "Also I’ll reserve .1 from 203.0.113.0/30,&nbsp; which is R2’s address. IP DHCP EXCLUDED-ADDRESS&nbsp;&nbsp;"
    ],
    "ru": [
      "Также я забронирую .1 из 203.0.113.0/30,&nbsp; это адрес R2. ИСКЛЮЧЕННЫЙ АДРЕС IP DHCP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      169.52,
      177.12
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
      169.52,
      177.12
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
      177.12,
      188.24
    ],
    "en": [
      "to specify a range. Now I’ll configure the first&nbsp; pool. IP DHCP POOL POOL1. First the address range.&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы указать диапазон. Теперь я настрою первый & nbsp; бассейн. ПУЛ IP DHCP POOL1. Сначала диапазон адресов. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      188.24,
      202.64
    ],
    "en": [
      "NETWORK 192.168.1.0 255.255.255.0. Then the DNS&nbsp; server, DNS-SERVER 8.8.8.8. Also the domain name,&nbsp;&nbsp;"
    ],
    "ru": [
      "СЕТЬ 192.168.1.0 255.255.255.0. Затем DNS & nbsp; сервер, DNS-СЕРВЕР 8.8.8.8. Также доменное имя, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      202.64,
      213.92000000000002
    ],
    "en": [
      "DOMAIN-NAME jeremysitlab.com. And the default&nbsp; gateway should be R1. DEFAULT-ROUTER 192.168.1.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "ДОМЕННОЕ ИМЯ jeremysitlab.com. И по умолчанию & nbsp; шлюз должен быть R1. МАРШРУТИЗАТОР ПО УМОЛЧАНИЮ 192.168.1.1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      213.92000000000002,
      223.12
    ],
    "en": [
      "Okay, that’s all for POOL1, now POOL2. IP DHCP&nbsp; POOL POOL2. I’ll configure those parameters in&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это все для POOL1, теперь POOL2. IP DHCP & nbsp; БАССЕЙН БАССЕЙН 2. Я настрою эти параметры в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      223.12,
      239.68
    ],
    "en": [
      "the same order. NETWORK 192.168.2.0 255.255.255.0.&nbsp; DNS-SERVER 8.8.8.8. DOMAIN-NAME jeremysitlab.com.&nbsp;&nbsp;"
    ],
    "ru": [
      "в том же порядке. СЕТЬ 192.168.2.0 255.255.255.0. & Nbsp; DNS-СЕРВЕР 8.8.8.8. ДОМЕННОЕ ИМЯ jeremysitlab.com. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      239.68,
      252.8
    ],
    "en": [
      "DEFAULT-ROUTER 192.168.2.1. That’s POOL2, finally&nbsp; I’ll configure POOL3. IP DHCP POOL POOL3. &nbsp;&nbsp;"
    ],
    "ru": [
      "МАРШРУТИЗАТОР ПО УМОЛЧАНИЮ 192.168.2.1. Это, наконец, POOL2 & nbsp; Я настрою POOL3. ПУЛ IP DHCP POOL 3. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      252.8,
      264.0
    ],
    "en": [
      "NETWORK 203.0.113.0 255.255.255.252. That’s it, we won’t&nbsp; be telling R1 about any DNS servers and such.&nbsp;&nbsp;"
    ],
    "ru": [
      "СЕТЬ 203.0.113.0 255.255.255.252. Вот и все, мы не & nbsp; сообщать R1 о любых DNS-серверах и т. д. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      264.0,
      272.48
    ],
    "en": [
      "Okay let’s check out the configurations.&nbsp; DO SHOW RUN | SECTION DHCP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте проверим конфигурации. & Nbsp; ПОКАЗАТЬ БЕГ | РАЗДЕЛ DHCP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      272.48,
      278.64
    ],
    "en": [
      "Remember that you can use the ‘pipe’ with keywords&nbsp; like INCLUDE and SECTION to filter the output of&nbsp;&nbsp;"
    ],
    "ru": [
      "Помните, что вы можете использовать \"трубу\" с ключевыми словами & nbsp; например INCLUDE и SECTION для фильтрации вывода & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      278.64,
      287.12
    ],
    "en": [
      "show commands, very useful. Anyway, here you can&nbsp; see each of the DHCP pools we just configured."
    ],
    "ru": [
      "показать команды, очень полезно. В любом случае здесь вы можете & nbsp; см. каждый из только что настроенных пулов DHCP."
    ]
  },
  {
    "time": [
      287.12,
      294.0
    ],
    "en": [
      "So, R2 is now configured as a DHCP server. I’m&nbsp; going to change the order of the tasks a bit and&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, R2 теперь настроен как DHCP-сервер. Я & nbsp; собираюсь немного изменить порядок задач и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      294.0,
      304.4
    ],
    "en": [
      "go on to the CLI of PC2 now. Let’s check if it&nbsp; can get an IP address from R2. IPCONFIG /RENEW.&nbsp;&nbsp;"
    ],
    "ru": [
      "перейдите к интерфейсу командной строки ПК2. Давайте проверим, & nbsp; может получить IP-адрес от R2. IPCONFIG /RENEW.&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      304.4,
      313.44
    ],
    "en": [
      "And there we go, it was assigned 192.168.2.11, the&nbsp; first available address. Let’s check more details.&nbsp;&nbsp;"
    ],
    "ru": [
      "И вот, ему было присвоено 192.168.2.11, & nbsp; первый доступный адрес. Давайте проверим подробности. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      313.44,
      322.64
    ],
    "en": [
      "IPCONFIG /ALL. Okay, there’s the domain name&nbsp; jeremysitlab.com. The IP address and subnet mask,&nbsp;&nbsp;"
    ],
    "ru": [
      "IPCONFIG / ВСЕ. Хорошо, вот и доменное имя & nbsp; jeremysitlab.com. IP-адрес и маска подсети, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      322.64,
      332.72
    ],
    "en": [
      "default gateway of R2, its DHCP server, also&nbsp; R2, and the DNS server 8.8.8.8. Looks good."
    ],
    "ru": [
      "шлюз по умолчанию R2, его DHCP-сервер, а также & nbsp; R2 и DNS-сервер 8.8.8.8. Выглядит неплохо."
    ]
  },
  {
    "time": [
      332.72,
      339.84000000000003
    ],
    "en": [
      "Okay, now I’ll do step 2, which is to&nbsp; configure R1’s G0/0 interface as a DHCP client.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь я выполню шаг 2, который & nbsp; настроить интерфейс G0 / 0 маршрутизатора R1 как DHCP-клиент. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      339.84000000000003,
      351.92
    ],
    "en": [
      "So let’s go on R1. ENABLE. CONF T. INTERFACE&nbsp; G0/0. To make R1 a DHCP client on this interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, поехали по R1. ВКЛЮЧИТЬ. CONF T. ИНТЕРФЕЙС & nbsp; G0 / 0. Чтобы сделать R1 клиентом DHCP на этом интерфейсе, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      351.92,
      357.52
    ],
    "en": [
      "the command is IP ADDRESS DHCP.&nbsp; Now I’ll enable the interface,&nbsp;&nbsp;"
    ],
    "ru": [
      "команда - IP-АДРЕС DHCP. & nbsp; Теперь я включу интерфейс & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      357.52,
      363.92
    ],
    "en": [
      "NO SHUTDOWN. So, R1 will broadcast a DHCP&nbsp; Discover message to R2, which should reply&nbsp;&nbsp;"
    ],
    "ru": [
      "НЕТ ОСТАНОВА. Итак, R1 будет транслировать DHCP & nbsp; Обнаружить сообщение для R2, ​​который должен ответить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      363.92,
      372.0
    ],
    "en": [
      "with a DHCP Offer, then R1 will send a DHCP&nbsp; Request, and finally R2 sends a DHCP Ack,&nbsp;&nbsp;"
    ],
    "ru": [
      "с предложением DHCP R1 отправит DHCP & nbsp; Запрос, и, наконец, R2 отправляет DHCP Ack, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      372.0,
      381.6
    ],
    "en": [
      "and as you can see here, R1 was assigned&nbsp; the IP address 203.0.113.2, with a /30 mask."
    ],
    "ru": [
      "и, как вы можете видеть здесь, R1 был назначен & nbsp; IP-адрес 203.0.113.2 с маской / 30."
    ]
  },
  {
    "time": [
      381.6,
      390.32
    ],
    "en": [
      "Next, in step 3 let’s configure R1 as a DHCP&nbsp; relay agent for the 192.168.1.0/24 subnet.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем на шаге 3 настроим маршрутизатор R1 как DHCP & nbsp; агент ретрансляции для подсети 192.168.1.0/24. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      390.32,
      394.88
    ],
    "en": [
      "It’s only a single command, but which&nbsp; interface should we configure it on?&nbsp;&nbsp;"
    ],
    "ru": [
      "Это всего лишь одна команда, но которая & nbsp; интерфейс, должны ли мы его настроить? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      394.88,
      401.92
    ],
    "en": [
      "It should be the interface connected to&nbsp; the DHCP clients, so R1’s G0/1 interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это должен быть интерфейс, подключенный к & nbsp; клиенты DHCP, поэтому интерфейс G0 / 1 маршрутизатора R1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      401.92,
      410.4
    ],
    "en": [
      "INTERFACE G0/1. The command is IP HELPER-ADDRESS,&nbsp; and then the IP address of the DHCP server,&nbsp;&nbsp;"
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 1. Команда: IP HELPER-ADDRESS, & nbsp; а затем IP-адрес DHCP-сервера, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      410.4,
      420.64
    ],
    "en": [
      "which is R2, so 203.0.113.1. Okay,&nbsp; that’s it, R1 is now a DHCP relay agent.&nbsp;&nbsp;"
    ],
    "ru": [
      "что является R2, ​​поэтому 203.0.113.1. Хорошо, & nbsp; вот и все, R1 теперь является агентом ретрансляции DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      420.64,
      429.12
    ],
    "en": [
      "Finally let’s see if PC1 can get an address from&nbsp; R2, the DHCP server, via R1, the DHCP relay agent.&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, давайте посмотрим, сможет ли ПК1 получить адрес от & nbsp; R2, DHCP-сервер, через R1, агент DHCP-ретрансляции."
    ]
  },
  {
    "time": [
      429.12,
      436.48
    ],
    "en": [
      "I’ll go on to the CLI of PC1. And let’s&nbsp; try to get an IP address. IPCONFIG&nbsp;&nbsp;"
    ],
    "ru": [
      "Я перейду к интерфейсу командной строки PC1. И давайте & nbsp; попробуйте получить IP-адрес. IPCONFIG & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      436.48,
      442.96
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
      436.48,
      442.96
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
      442.96,
      450.64
    ],
    "en": [
      "ARP are a little slow in Packet Tracer, but as you&nbsp; can see PC1 was able to get an IP address from R2.&nbsp;&nbsp;"
    ],
    "ru": [
      "ARP немного медленнее в Packet Tracer, но, как вы понимаете, & nbsp; видно, что ПК1 смог получить IP-адрес от R2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      450.64,
      457.92
    ],
    "en": [
      "Let’s check the details. IPCONFIG /ALL.&nbsp; Looks like it has all of the information&nbsp;&nbsp;"
    ],
    "ru": [
      "Давай проверим подробности. IPCONFIG /ALL.&nbsp; Похоже, в нем есть вся информация & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      457.92,
      464.08
    ],
    "en": [
      "we configured in the pool on R2, domain&nbsp; name, the address is in the correct range,&nbsp;&nbsp;"
    ],
    "ru": [
      "мы настроили в пуле на R2, домен & nbsp; имя, адрес находится в правильном диапазоне, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      464.08,
      470.24
    ],
    "en": [
      "subnet mask and default gateway are&nbsp; correct, and so is the DNS server."
    ],
    "ru": [
      "маска подсети и шлюз по умолчанию: & nbsp; правильно, и DNS-сервер тоже."
    ]
  },
  {
    "time": [
      470.24,
      479.12
    ],
    "en": [
      "Okay, in this lab we configured a DHCP server,&nbsp; DHCP client, and DHCP relay agent in Cisco IOS.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, в этой лабораторной работе мы настроили DHCP-сервер, & nbsp; Клиент DHCP и агент ретрансляции DHCP в Cisco IOS."
    ]
  },
  {
    "time": [
      479.12,
      487.76
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
      487.76,
      495.44
    ],
    "en": [
      "Okay here's today's Boson NetSim lab preview.&nbsp; There are five DHCP labs in Boson NetSim for CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот предварительная версия сегодняшней лабораторной работы Boson NetSim. & Nbsp; В Boson NetSim для CCNA имеется пять лабораторий DHCP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      495.44,
      503.68
    ],
    "en": [
      "And the one I have selected for today is this&nbsp; one, troubleshooting DHCP. So here's Router1,&nbsp;&nbsp;"
    ],
    "ru": [
      "И тот, который я выбрал на сегодня, - это & ​​nbsp; один, устранение неполадок DHCP. Итак, вот Router1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      503.68,
      517.44
    ],
    "en": [
      "a DHCP server. And it's connected to three&nbsp; LANs, here. VLAN100, VLAN200, and VLAN300.&nbsp;&nbsp;"
    ],
    "ru": [
      "DHCP-сервер. И это связано с тремя & nbsp; Локальные сети, здесь. VLAN100, VLAN200 и VLAN300. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      517.44,
      528.16
    ],
    "en": [
      "Okay, this is the IP address information,&nbsp; looks like VLAN100 is 192.168.1.0/24,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это информация об IP-адресе, & nbsp; похоже, что VLAN100 - 192.168.1.0/24,&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      528.16,
      538.08
    ],
    "en": [
      "and then 200 and 300 are 2.0/24 and 3.0/24. Okay,&nbsp; these are the tasks. For this lab preview I'm just&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем 200 и 300 равны 2,0 / 24 и 3,0 / 24. Хорошо, & nbsp; это задачи. Для предварительного просмотра этой лабораторной работы я просто & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      538.08,
      547.36
    ],
    "en": [
      "going to do task 1 and task 2. And you can do task&nbsp; 3 on your own if you get NetSim. Okay, so let's&nbsp;&nbsp;"
    ],
    "ru": [
      "собираюсь выполнить задачу 1 и задачу 2. А вы можете выполнить задачу & nbsp; 3 самостоятельно, если у вас есть NetSim. Хорошо, давайте & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      547.36,
      552.16
    ],
    "en": [
      "check out task 1. After some configuration&nbsp; changes are made to the network, users are&nbsp;&nbsp;"
    ],
    "ru": [
      "проверить задачу 1. После некоторой настройки & nbsp; в сеть вносятся изменения, пользователи & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      552.16,
      559.76
    ],
    "en": [
      "reporting that PCs in VLAN100, 200, and 300 are no&nbsp; longer configured with IP addressing information.&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщая, что ПК в VLAN100, 200 и 300 не & nbsp; больше не настроен с информацией об IP-адресации. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      559.76,
      564.72
    ],
    "en": [
      "In this task you will verify that none of the&nbsp; DHCP clients are able to obtain IP addressing&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой задаче вы убедитесь, что ни один из & nbsp; Клиенты DHCP могут получать IP-адресацию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      564.72,
      572.48
    ],
    "en": [
      "information from Router1. Okay, so step 1. On&nbsp; each PC, verify that IP addressing information&nbsp;&nbsp;"
    ],
    "ru": [
      "информация от Router1. Итак, шаг 1. На & nbsp; на каждом ПК убедитесь, что информация об IP-адресации & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      572.48,
      581.2
    ],
    "en": [
      "is missing from the configurations.&nbsp; Okay, so let's do that on each PC.&nbsp;&nbsp;"
    ],
    "ru": [
      "отсутствует в конфигурациях. & nbsp; Хорошо, давайте сделаем это на каждом ПК. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      581.2,
      596.16
    ],
    "en": [
      "Okay, PC1 first. IPCONFIG. Indeed it's all&nbsp; 0.0.0.0, so no configuration on PC1. Or PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, сначала PC1. IPCONFIG. На самом деле это все & nbsp; 0.0.0.0, поэтому на ПК1 нет конфигурации. Или PC2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      596.16,
      602.96
    ],
    "en": [
      "Or PC3. Okay, on Router1 display&nbsp; information about DHCP bindings.&nbsp;&nbsp;"
    ],
    "ru": [
      "Или PC3. Хорошо, на Router1 отобразить & nbsp; информация о привязках DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      602.96,
      609.52
    ],
    "en": [
      "Has Router1 binded any IP addressing information&nbsp; to any other devices in the topology?&nbsp;&nbsp;"
    ],
    "ru": [
      "Связал ли Router1 какую-либо информацию об IP-адресации & nbsp; к любым другим устройствам в топологии? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      609.52,
      617.76
    ],
    "en": [
      "Okay let's check here. The command is SHOW&nbsp; IP DHCP BINDING. Okay, nothing displays&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давай проверим здесь. Команда SHOW & nbsp; ПРИВЯЗКА IP DHCP. Хорошо, ничего не отображается & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      617.76,
      626.24
    ],
    "en": [
      "here so there are no bindings. Router1 has&nbsp; not leased any addresses to DHCP clients.&nbsp;&nbsp;"
    ],
    "ru": [
      "вот так привязок нет. Router1 имеет & nbsp; не сдавал в аренду адреса DHCP-клиентам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      626.24,
      634.0
    ],
    "en": [
      "Okay, from Router1 attempt to ping Switch1's,&nbsp; Switch2's, and Switch3's VLAN interfaces.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, с Router1 попытайтесь проверить связь с Switch1, & nbsp; Интерфейсы VLAN Switch2 и Switch3. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      634.0,
      639.76
    ],
    "en": [
      "So each of the switches has an IP address on its&nbsp; VLAN interface which was statically assigned. So&nbsp;&nbsp;"
    ],
    "ru": [
      "Таким образом, каждый коммутатор имеет IP-адрес на своем & nbsp; Интерфейс VLAN, который был назначен статически. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      639.76,
      651.2
    ],
    "en": [
      "let's see if Router1 can ping those. First&nbsp; Switch1. Okay, no problems there. Switch2.&nbsp;&nbsp;"
    ],
    "ru": [
      "посмотрим, может ли Router1 пинговать их. Первый & nbsp; Переключатель1. Ладно, никаких проблем. Переключатель 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      651.2,
      659.28
    ],
    "en": [
      "And Switch3. Okay, no problems. Next,&nbsp; step 4. On each switch in the topology&nbsp;&nbsp;"
    ],
    "ru": [
      "И Switch3. Ладно, без проблем. Далее & nbsp; шаг 4. На каждом коммутаторе в топологии & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      659.28,
      668.32
    ],
    "en": [
      "verify that the port connecting to the relevant&nbsp; PC is in the UP state. Okay, let's do that.&nbsp;&nbsp;"
    ],
    "ru": [
      "убедитесь, что порт, подключенный к соответствующему & nbsp; ПК находится в рабочем состоянии. Хорошо, давай сделаем это. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      668.32,
      678.72
    ],
    "en": [
      "So, the interface on each switch is&nbsp; FastEthernet0/12, that is connected to the PC.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, интерфейс на каждом переключателе & nbsp; FastEthernet0 / 12, подключенный к ПК."
    ]
  },
  {
    "time": [
      678.72,
      687.04
    ],
    "en": [
      "Okay, I'll look on Switch1 first.&nbsp; I'll use SHOW IP INTERFACE BRIEF.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, я сначала посмотрю Switch1. & Nbsp; Я буду использовать SHOW IP INTERFACE BRIEF. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      687.04,
      701.04
    ],
    "en": [
      "And FastEthernet0/12 is UP and UP. How about&nbsp; on Switch2? Okay, UP and UP. And Switch3.&nbsp;&nbsp;"
    ],
    "ru": [
      "И FastEthernet0 / 12 - ВВЕРХ и ВВЕРХ. Как насчет & nbsp; на Switch2? Хорошо, ВВЕРХ и ВВЕРХ. И Switch3. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      701.04,
      709.04
    ],
    "en": [
      "Again, UP/UP. Okay, so looks like there are no&nbsp; problems with physical connectivity here. So DHCP,&nbsp;&nbsp;"
    ],
    "ru": [
      "Опять же, ВВЕРХ / ВВЕРХ. Ладно, похоже, & nbsp; проблемы с физическим подключением здесь. Итак, DHCP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      709.04,
      718.08
    ],
    "en": [
      "something in Router1's DHCP configuration is&nbsp; likely the problem, but let's check in task 2.&nbsp;&nbsp;"
    ],
    "ru": [
      "что-то в конфигурации DHCP маршрутизатора Router1 & nbsp; скорее всего проблема, но давайте проверим в задаче 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      718.08,
      724.08
    ],
    "en": [
      "Here, troubleshoot DHCP services. In this task&nbsp; you will troubleshoot the DHCP configuration on&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь устраните неполадки служб DHCP. В этой задаче & nbsp; вы устраните неполадки конфигурации DHCP на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      724.08,
      730.24
    ],
    "en": [
      "Router1. You have completed this task when Router1&nbsp; is able to successfully bind DHCP addresses&nbsp;&nbsp;"
    ],
    "ru": [
      "Маршрутизатор 1. Вы выполнили эту задачу, когда Router1 & nbsp; может успешно связывать адреса DHCP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      730.24,
      738.0
    ],
    "en": [
      "to clients. The DHCP pools in this lab should&nbsp; contain a range of 254 available IP addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "клиентам. Пулы DHCP в этой лабораторной работе должны & nbsp; содержат диапазон из 254 доступных IP-адресов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      738.0,
      745.28
    ],
    "en": [
      "So that is /24. But the first 9 addresses&nbsp; should be excluded from that range.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, это / 24. Но первые 9 адресов & nbsp; следует исключить из этого диапазона. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      745.28,
      754.48
    ],
    "en": [
      "Okay, let's do that. So, step 1 on Router1.&nbsp; Display the DHCP pool configuration.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давай сделаем это. Итак, шаг 1 на Router1. & Nbsp; Показать конфигурацию пула DHCP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      754.48,
      765.6
    ],
    "en": [
      "Okay, so SHOW, I'll use SHOW RUN, this is&nbsp; very convenient, SHOW RUN | SECTION DHCP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, ПОКАЗАТЬ, я воспользуюсь SHOW RUN, это & ​​nbsp; очень удобно, SHOW RUN | РАЗДЕЛ DHCP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      765.6,
      769.44
    ],
    "en": [
      "Okay, what do you notice about the size of VLAN200&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, что вы заметили о размере VLAN200 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      769.44,
      777.04
    ],
    "en": [
      "compared to the number of leased addresses? Well,&nbsp; there were no leased addresses. The size is /24,&nbsp;&nbsp;"
    ],
    "ru": [
      "по сравнению с количеством арендованных адресов? Что ж, & nbsp; арендованных адресов не было. Размер / 24, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      777.04,
      782.24
    ],
    "en": [
      "so Router1 is not leasing any addresses&nbsp; at the moment. Actually there's another&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому Router1 не арендует адреса & nbsp; В данный момент. На самом деле есть еще один & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      782.24,
      790.64
    ],
    "en": [
      "command you can use. I didn't show this in&nbsp; the lecture video but SHOW IP DHCP POOL.&nbsp;&nbsp;"
    ],
    "ru": [
      "команду, которую вы можете использовать. Я не показывал это в & nbsp; видео лекции, но ПОКАЗАТЬ IP DHCP POOL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      790.64,
      797.68
    ],
    "en": [
      "And here you can see that same information for&nbsp; VLAN200. Total addresses, 254. Leased addresses,&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь вы можете увидеть ту же информацию для & nbsp; VLAN200. Всего адресов, 254. Арендованные адреса, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      797.68,
      803.92
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
      797.68,
      803.92
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
      803.92,
      814.96
    ],
    "en": [
      "Okay, so this is another command I didn't show in&nbsp; the lecture video, SHOW IP DHCP SERVER STATISTICS.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это еще одна команда, которую я не показывал в & nbsp; видео лекции, ПОКАЗАТЬ СТАТИСТИКУ IP-СЕРВЕРА DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      814.96,
      823.2
    ],
    "en": [
      "Okay, so we can see there are three address&nbsp; pools but no messages, no DHCP messages received&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, мы видим три адреса & nbsp; пулы, но сообщений нет, сообщения DHCP не получены & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      823.2,
      831.52
    ],
    "en": [
      "or sent. Okay, so here in step 3 it says,&nbsp; based on the data you have collected so far,&nbsp;&nbsp;"
    ],
    "ru": [
      "или отправлено. Итак, здесь, на шаге 3, написано: & nbsp; на основе собранных вами данных & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      831.52,
      839.12
    ],
    "en": [
      "what is most likely preventing the DHCP server&nbsp; from assigning IP addresses to clients in VLAN200?&nbsp;&nbsp;"
    ],
    "ru": [
      "что, скорее всего, мешает DHCP-серверу & nbsp; от назначения IP-адресов клиентам в VLAN200? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      839.12,
      844.72
    ],
    "en": [
      "Okay, let me look at that configuration once more.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, позвольте мне еще раз взглянуть на эту конфигурацию. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      844.72,
      849.12
    ],
    "en": [
      "Okay I think I found it. So, this is another&nbsp; command I didn't show in the lecture video&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, думаю, я нашел это. Итак, это еще один & nbsp; команду, которую я не показывал в видео лекции & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      849.12,
      856.24
    ],
    "en": [
      "because it's usually enabled by default.&nbsp; That is the SERVICE DHCP command. So, if&nbsp;&nbsp;"
    ],
    "ru": [
      "потому что обычно он включен по умолчанию. & nbsp; Это команда DHCP SERVICE. Итак, если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      856.24,
      862.48
    ],
    "en": [
      "this command is enabled it means the router will&nbsp; respond to DHCP messages. If this is disabled,&nbsp;&nbsp;"
    ],
    "ru": [
      "эта команда включена, это означает, что маршрутизатор & nbsp; отвечать на сообщения DHCP. Если это отключено, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      862.48,
      867.12
    ],
    "en": [
      "as is the case now, it will&nbsp; just drop any DHCP messages.&nbsp;&nbsp;"
    ],
    "ru": [
      "как и сейчас, это будет & nbsp; просто отбросьте все сообщения DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      867.12,
      872.32
    ],
    "en": [
      "So on Cisco routers it's enabled by default, but&nbsp; it looks like someone disabled it on this router.&nbsp;&nbsp;"
    ],
    "ru": [
      "Поэтому на маршрутизаторах Cisco он включен по умолчанию, но & nbsp; похоже, кто-то отключил его на этом роутере. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      872.32,
      879.52
    ],
    "en": [
      "So that is why Router1 is not receiving&nbsp; or responding to any DHCP messages.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот почему Router1 не получает & nbsp; или отвечая на любые сообщения DHCP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      879.52,
      885.28
    ],
    "en": [
      "Okay, step 5. Issue any commands that are&nbsp; required to solve the problem you have identified.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, шаг 5. Введите любые команды, которые & nbsp; требуется для решения указанной вами проблемы. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      885.28,
      893.76
    ],
    "en": [
      "Okay, so to disable it it was NO SERVICE&nbsp; DHCP, so to enable it it's SERVICE DHCP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, чтобы отключить его, НЕ СЕРВИС & nbsp; DHCP, поэтому для его включения используется СЕРВИСНЫЙ DHCP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      893.76,
      900.16
    ],
    "en": [
      "And that's it. Okay, step 6, display&nbsp; DHCP binding information. Has the DHCP&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот и все. Хорошо, шаг 6, отобразить & nbsp; Информация о привязке DHCP. Имеет DHCP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      900.16,
      907.2
    ],
    "en": [
      "server binded IP addressing information to any&nbsp; devices in the topology? If so, which devices?&nbsp;&nbsp;"
    ],
    "ru": [
      "информация об IP-адресации сервера связана с любыми & nbsp; устройства в топологии? Если да, то какие устройства? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      907.2,
      918.72
    ],
    "en": [
      "Alright let's check those bindings again. Okay&nbsp; looks like two devices have gotten a DHCP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте еще раз проверим эти привязки. Хорошо & nbsp; похоже, два устройства получили DHCP-адрес. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      918.72,
      926.0
    ],
    "en": [
      "One in VLAN200 and one in VLAN300. So it seems&nbsp; there is still a problem here with VLAN100,&nbsp;&nbsp;"
    ],
    "ru": [
      "Один в VLAN200 и один в VLAN300. Так кажется & nbsp; здесь все еще есть проблема с VLAN100, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      926.0,
      933.2
    ],
    "en": [
      "probably some configuration on Router1. But let's&nbsp; see, let's confirm that this is PC2 and this is&nbsp;&nbsp;"
    ],
    "ru": [
      "возможно какая-то конфигурация на Router1. Но давайте & nbsp; посмотрим, давайте подтвердим, что это ПК2, а это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      933.2,
      949.12
    ],
    "en": [
      "PC3. Okay, so 192.168.2.10. Oh yes, it displays&nbsp; it right here, mask /24. IPCONFIG /ALL. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "ПК3. Итак, 192.168.2.10. Ах да, он отображает & nbsp; это прямо здесь, маска / 24. IPCONFIG / ВСЕ. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      949.12,
      961.84
    ],
    "en": [
      "looks good. And how about PC3? This should be&nbsp; 192.168.3.10. And yes it is, that's correct.&nbsp;&nbsp;"
    ],
    "ru": [
      "выглядит неплохо. А как насчет РС3? Это должно быть & nbsp; 192.168.3.10. И да, это так. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      961.84,
      970.88
    ],
    "en": [
      "Okay, perfect. So it looks like that NO&nbsp; SERVICE DHCP command was one of the problems,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, отлично. Похоже, что НЕТ & nbsp; Одной из проблем была команда DHCP SERVICE, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      970.88,
      977.04
    ],
    "en": [
      "but there is clearly another problem because&nbsp; PC1 still doesn't have an IP address.&nbsp;&nbsp;"
    ],
    "ru": [
      "но есть явно другая проблема, потому что & nbsp; У ПК1 по-прежнему нет IP-адреса. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      977.04,
      987.28
    ],
    "en": [
      "So, I assume in task 3 we would solve that, but&nbsp; I'll leave today's Boson NetSim lab preview here.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я предполагаю, что в задаче 3 мы это решим, но & nbsp; Я оставлю предварительную версию сегодняшней лабораторной работы Boson NetSim здесь. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      987.28,
      991.6
    ],
    "en": [
      "Okay, so that was a quick look at&nbsp; Boson Software's NetSim for CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это был быстрый взгляд на & nbsp; NetSim от Boson Software для CCNA. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      991.6,
      997.76
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
      997.76,
      1002.56
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
      1002.56,
      1009.12
    ],
    "en": [
      "To join, please click the ‘Join’ button under&nbsp; the video. Thank you to Brandon, Samil, Aaron,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Брэндону, Самилу, Аарону, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1009.12,
      1015.92
    ],
    "en": [
      "Tech Alameda, Marcel, Magrathea, Kone, Donald, C&nbsp; Mohd, Gustavo, Anthony, Biraj, Junhong, Njabulo,&nbsp;&nbsp;"
    ],
    "ru": [
      "Tech Alameda, Marcel, Magrathea, Kone, Donald, C & nbsp; Мохд, Густаво, Энтони, Бирадж, Джунхонг, Нджабуло, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1015.92,
      1022.08
    ],
    "en": [
      "Benjamin, Tshepiso, Justin, Prakaash, Nasir,&nbsp; Erlison, Apogee, Marko, Daming, Jhilmar, Ed,&nbsp;&nbsp;"
    ],
    "ru": [
      "Бенджамин, Чеписо, Джастин, Пракааш, Насир, & NBSP; Эрлисон, Апогей, Марко, Даминг, Джилмар, Эд, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1022.08,
      1029.12
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
      1029.12,
      1034.0
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
      1034.0,
      1040.88
    ],
    "en": [
      "This is the list of JCNP-level members at the time&nbsp; of recording by the way, January 29th 2020. If&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на тот момент & nbsp; записи, кстати, 29 января 2020 года. Если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1040.88,
      1047.44
    ],
    "en": [
      "you signed up recently and your name isn’t on&nbsp; here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "вы зарегистрировались недавно, и вашего имени нет на & nbsp; здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      1047.44,
      1050.48
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
      1050.48,
      1056.32
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
      1056.32,
      1061.92
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
      1061.92,
      1061.92
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]