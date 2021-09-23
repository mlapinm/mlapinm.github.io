let objs = [
  {
    "time": [
      0.539,
      6.58
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is a free, complete course for the CCNA. If you like"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это бесплатный полный курс CCNA. Если хочешь"
    ]
  },
  {
    "time": [
      6.58,
      11.5
    ],
    "en": [
      "these videos, please subscribe to follow along with the series. Also, please like and leave"
    ],
    "ru": [
      "эти видео, пожалуйста, подпишитесь, чтобы следить вместе с серией. Также, пожалуйста, поставьте лайк и оставьте"
    ]
  },
  {
    "time": [
      11.5,
      17.56
    ],
    "en": [
      "a comment, and share the video to help spread this free series of videos. Thanks for your help."
    ],
    "ru": [
      "комментарий и поделитесь видео, чтобы помочь распространить эту бесплатную серию видео. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      17.56,
      21.32
    ],
    "en": [
      "help. This video, as you have probably noticed, will be a bit different than my other lab"
    ],
    "ru": [
      "помощь. Это видео, как вы, наверное, заметили, будет немного отличаться от другой моей лаборатории."
    ]
  },
  {
    "time": [
      21.32,
      26.95
    ],
    "en": [
      "videos in the course. We didn’t actually cover any configurations in the lecture video,"
    ],
    "ru": [
      "видео в курсе. На самом деле мы не рассматривали какие-либо конфигурации в видео лекции,"
    ]
  },
  {
    "time": [
      26.95,
      32.0
    ],
    "en": [
      "so there won’t be a packet tracer practice lab file for you to practice with. Instead,"
    ],
    "ru": [
      "так что у вас не будет практического лабораторного файла слежения за пакетами, с которым вы могли бы попрактиковаться. Вместо,"
    ]
  },
  {
    "time": [
      32.0,
      37.52
    ],
    "en": [
      "I will just give you a quick demo in EVE-NG, a network simulator, of one kind of network"
    ],
    "ru": [
      "Я просто покажу вам небольшую демонстрацию в EVE-NG, симуляторе сети одного типа сети."
    ]
  },
  {
    "time": [
      37.52,
      42.97
    ],
    "en": [
      "attack that I mentioned in the lecture video. Then, in the next lecture video we will see"
    ],
    "ru": [
      "атака, о которой я упоминал в видео лекции. Тогда в следующем видео лекции мы увидим"
    ]
  },
  {
    "time": [
      42.97,
      47.73
    ],
    "en": [
      "how to configure a Cisco switch to prevent this kind of attack."
    ],
    "ru": [
      "как настроить коммутатор Cisco для предотвращения такого рода атак."
    ]
  },
  {
    "time": [
      47.73,
      55.0
    ],
    "en": [
      "The attack I will show you is the DHCP exhaustion attack, also called DHCP starvation attack."
    ],
    "ru": [
      "Атака, которую я вам покажу, - это атака с истощением DHCP, также называемая атакой с истощением DHCP."
    ]
  },
  {
    "time": [
      55.0,
      61.14
    ],
    "en": [
      "In this attack, the attacker sends countless DHCP Discover messages, and then any DHCP"
    ],
    "ru": [
      "В этой атаке злоумышленник отправляет бесчисленное количество сообщений DHCP Discover, а затем любые сообщения DHCP."
    ]
  },
  {
    "time": [
      61.14,
      67.32
    ],
    "en": [
      "servers on the network will send Offer messages. After the server sends the DHCP offer, the"
    ],
    "ru": [
      "серверы в сети будут отправлять сообщения с предложениями. После того, как сервер отправит предложение DHCP,"
    ]
  },
  {
    "time": [
      67.32,
      72.58
    ],
    "en": [
      "IP address it offers is reserved while it waits for a response from the client. So,"
    ],
    "ru": [
      "Предлагаемый IP-адрес зарезервирован на время ожидания ответа от клиента. Так,"
    ]
  },
  {
    "time": [
      72.58,
      77.53999999999999
    ],
    "en": [
      "by sending tons of Discover messages, the attacker uses up all of the IP addresses in"
    ],
    "ru": [
      "отправляя тонны сообщений Discover, злоумышленник использует все IP-адреса в"
    ]
  },
  {
    "time": [
      77.53999999999999,
      83.811
    ],
    "en": [
      "the DHCP pool, and other hosts on the network will not be able to get an IP address. To"
    ],
    "ru": [
      "пул DHCP и другие узлы в сети не смогут получить IP-адрес. К"
    ]
  },
  {
    "time": [
      83.811,
      92.18
    ],
    "en": [
      "demonstrate that I will connect PC1 to the network, and we’ll see if it can get an address via DHCP."
    ],
    "ru": [
      "продемонстрируйте, что я подключу ПК1 к сети, и мы посмотрим, сможет ли он получить адрес через DHCP."
    ]
  },
  {
    "time": [
      92.18,
      98.58
    ],
    "en": [
      "address via DHCP. In this network, R1 is the DHCP server. The attacker is this PC here, running a Linux"
    ],
    "ru": [
      "адрес через DHCP. В этой сети R1 является DHCP-сервером. Злоумышленник - вот этот компьютер, работающий под управлением Linux."
    ]
  },
  {
    "time": [
      98.58,
      104.49000000000001
    ],
    "en": [
      "distribution called Kali Linux. Kali Linux is popular in the world of cyber security,"
    ],
    "ru": [
      "дистрибутив называется Kali Linux. Kali Linux популярен в мире кибербезопасности,"
    ]
  },
  {
    "time": [
      104.49000000000001,
      109.7
    ],
    "en": [
      "penetration testing, and such. It comes with various pre-installed tools for digital forensics"
    ],
    "ru": [
      "тестирование на проникновение и тому подобное. Он поставляется с различными предустановленными инструментами для цифровой криминалистики."
    ]
  },
  {
    "time": [
      109.7,
      118.00999999999999
    ],
    "en": [
      "and penetration testing, and we will be using one called Yersinia for the DHCP exhaustion attack."
    ],
    "ru": [
      "и тестирование на проникновение, и мы будем использовать один под названием Yersinia для атаки исчерпания DHCP."
    ]
  },
  {
    "time": [
      118.00999999999999,
      126.72
    ],
    "en": [
      "attack. First let’s open the CLI of R1 to take a look at the DHCP settings. ENABLE. SHOW RUN"
    ],
    "ru": [
      "атака. Сначала давайте откроем интерфейс командной строки маршрутизатора R1, чтобы взглянуть на настройки DHCP. ВКЛЮЧИТЬ. ПОКАЗАТЬ БЕГ"
    ]
  },
  {
    "time": [
      126.72,
      137.819
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
      126.72,
      137.819
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
      137.819,
      147.34
    ],
    "en": [
      "to use R1’s own IP address, 192.168.1.1, as the default gateway. The DNS server is"
    ],
    "ru": [
      "использовать собственный IP-адрес маршрутизатора R1 192.168.1.1 в качестве шлюза по умолчанию. DNS-сервер"
    ]
  },
  {
    "time": [
      147.34,
      153.84
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
      147.34,
      153.84
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
      153.84,
      160.06900000000002
    ],
    "en": [
      "the DHCP pool, it’s from R1’s G0/1 interface settings, but it was included in the output"
    ],
    "ru": [
      "пул DHCP, он взят из настроек интерфейса G0 / 1 маршрутизатора R1, но он был включен в вывод"
    ]
  },
  {
    "time": [
      160.06900000000002,
      169.42000000000002
    ],
    "en": [
      "of SHOW RUN | SECTION DHCP,. Now let’s use some other show commands. SHOW IP DHCP POOL."
    ],
    "ru": [
      "SHOW RUN | РАЗДЕЛ DHCP ,. Теперь давайте воспользуемся другими командами show. ПОКАЗАТЬ IP DHCP POOL."
    ]
  },
  {
    "time": [
      169.42000000000002,
      176.06900000000002
    ],
    "en": [
      "As you can see, in POOL1 there are 254 available addresses. I didn’t configure any excluded"
    ],
    "ru": [
      "Как видите, в POOL1 доступно 254 адреса. Я не настраивал исключенные"
    ]
  },
  {
    "time": [
      176.06900000000002,
      183.54
    ],
    "en": [
      "addresses. Note that R1 won’t assign it’s own IP address, 192.168.1.1, to another host,"
    ],
    "ru": [
      "адреса. Обратите внимание, что R1 не назначает свой IP-адрес 192.168.1.1 другому хосту,"
    ]
  },
  {
    "time": [
      183.54,
      189.18
    ],
    "en": [
      "so really there are 253 available addresses that can be assigned. However, currently there"
    ],
    "ru": [
      "так что на самом деле есть 253 доступных адреса, которые можно назначить. Однако в настоящее время там"
    ]
  },
  {
    "time": [
      189.18,
      196.779
    ],
    "en": [
      "are 0 leased addresses. And if I use the command SHOW IP DHCP BINDING, we can see that there"
    ],
    "ru": [
      "0 арендованных адресов. И если я использую команду SHOW IP DHCP BINDING, мы увидим, что там"
    ]
  },
  {
    "time": [
      196.779,
      198.709
    ],
    "en": [
      "are currently no entries."
    ],
    "ru": [
      "в настоящее время нет записей."
    ]
  },
  {
    "time": [
      198.709,
      205.62
    ],
    "en": [
      "So, let’s go into the Kali Linux box. I already have the terminal open, so let’s"
    ],
    "ru": [
      "Итак, перейдем к Kali Linux. У меня уже открыт терминал, так что давай"
    ]
  },
  {
    "time": [
      205.62,
      215.519
    ],
    "en": [
      "open Yersinia. The command is YERSINIA hyphen G. So, this opens the GUI, graphical user"
    ],
    "ru": [
      "откройте Иерсинию. Это команда YERSINIA, дефис G. Итак, откроется графический интерфейс пользователя."
    ]
  },
  {
    "time": [
      215.519,
      222.3
    ],
    "en": [
      "interface, of Yersinia. To launch our attack I’ll click on ‘launch attack’. Then"
    ],
    "ru": [
      "интерфейс, Yersinia. Чтобы начать нашу атаку, я нажму на «запустить атаку». потом"
    ]
  },
  {
    "time": [
      222.3,
      230.269
    ],
    "en": [
      "select DHCP, and there are a few DHCP attacks we can do. In this case I want to select ‘sending"
    ],
    "ru": [
      "выберите DHCP, и мы можем сделать несколько атак DHCP. В этом случае я хочу выбрать «отправка"
    ]
  },
  {
    "time": [
      230.269,
      237.859
    ],
    "en": [
      "DISCOVER packet’. As the check mark indicates here, this will cause a DoS, Denial of Service."
    ],
    "ru": [
      "ОТКРОЙТЕ пакет ». Как показывает здесь галочка, это вызовет DoS, отказ в обслуживании."
    ]
  },
  {
    "time": [
      237.859,
      244.29
    ],
    "en": [
      "Then I simply click OK, and the attack has started. On the right you can see each DHCP"
    ],
    "ru": [
      "Затем я просто нажимаю ОК, и атака началась. Справа вы можете увидеть каждый DHCP"
    ]
  },
  {
    "time": [
      244.29,
      249.879
    ],
    "en": [
      "DISCOVER message being sent, and here on the left you can see the DHCP packet count rapidly"
    ],
    "ru": [
      "Сообщение DISCOVER отправляется, и здесь слева вы можете быстро увидеть количество пакетов DHCP"
    ]
  },
  {
    "time": [
      249.879,
      255.459
    ],
    "en": [
      "rising. Unless I tell the attacker to stop, it will continue sending these DISCOVER messages."
    ],
    "ru": [
      "поднимается. Если я не скажу злоумышленнику остановиться, он продолжит отправлять сообщения DISCOVER."
    ]
  },
  {
    "time": [
      255.459,
      260.56
    ],
    "en": [
      "So, let’s see what’s happening on R1."
    ],
    "ru": [
      "Итак, давайте посмотрим, что происходит на R1."
    ]
  },
  {
    "time": [
      260.56,
      269.75
    ],
    "en": [
      "First let’s check the pool again. SHOW IP DHCP POOL. Okay, of the 254 total addresses"
    ],
    "ru": [
      "Сначала давайте еще раз проверим бассейн. ПОКАЗАТЬ IP DHCP POOL. Хорошо, из 254 адресов"
    ]
  },
  {
    "time": [
      269.75,
      276.01
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
      269.75,
      276.01
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
      276.01,
      284.97
    ],
    "en": [
      "pool is being used. Let’s check the binding table. SHOW IP DHCP BINDING. Okay, I’m just"
    ],
    "ru": [
      "бассейн используется. Проверим таблицу привязки. ПОКАЗАТЬ ПРИВЯЗКУ IP DHCP. Хорошо, я просто"
    ]
  },
  {
    "time": [
      284.97,
      291.36
    ],
    "en": [
      "going to keep pressing the space bar as R1 goes through the DHCP binding table. You’ll"
    ],
    "ru": [
      "будет продолжать нажимать пробел, пока R1 проходит через таблицу привязки DHCP. Вы будете"
    ]
  },
  {
    "time": [
      291.36,
      301.47
    ],
    "en": [
      "see that every address, from 192.168.1.2 to 192.168.1.254, is currently taken. Also notice"
    ],
    "ru": [
      "убедитесь, что все адреса от 192.168.1.2 до 192.168.1.254 в настоящее время заняты. Также обратите внимание"
    ]
  },
  {
    "time": [
      301.47,
      306.69
    ],
    "en": [
      "that each of these IP addresses has a unique MAC address. That’s because the attacker"
    ],
    "ru": [
      "что каждый из этих IP-адресов имеет уникальный MAC-адрес. Это потому, что злоумышленник"
    ]
  },
  {
    "time": [
      306.69,
      311.82
    ],
    "en": [
      "is spoofing the source MAC address used for each DISCOVER message, so R1 thinks that each"
    ],
    "ru": [
      "подменяет исходный MAC-адрес, используемый для каждого сообщения DISCOVER, поэтому R1 считает, что каждое"
    ]
  },
  {
    "time": [
      311.82,
      315.56
    ],
    "en": [
      "of the messages is coming from a different host."
    ],
    "ru": [
      "сообщений поступает с другого хоста."
    ]
  },
  {
    "time": [
      315.56,
      323.83
    ],
    "en": [
      "Okay, let’s see if PC1 is able to get an IP address. Before connecting it to the network,"
    ],
    "ru": [
      "Хорошо, давайте посмотрим, сможет ли ПК1 получить IP-адрес. Перед подключением к сети,"
    ]
  },
  {
    "time": [
      323.83,
      330.69
    ],
    "en": [
      "I’ll check some settings on PC1. Here in the command prompt let’s check IPCONFIG"
    ],
    "ru": [
      "Я проверю некоторые настройки на ПК1. Здесь, в командной строке, давайте проверим IPCONFIG"
    ]
  },
  {
    "time": [
      330.69,
      338.05
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
      330.69,
      338.05
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
      338.05,
      344.84000000000003
    ],
    "en": [
      "currently not connected to the network. And we can see DHCP Enabled, Yes. So, once we"
    ],
    "ru": [
      "в настоящее время не подключен к сети. И мы видим, что DHCP включен, да. Итак, как только мы"
    ]
  },
  {
    "time": [
      344.84000000000003,
      352.07
    ],
    "en": [
      "connect PC1 to SW1, it should try to get an IP address via DHCP. Let’s see if it works."
    ],
    "ru": [
      "подключите ПК1 к SW1, он должен попытаться получить IP-адрес через DHCP. Посмотрим, работает ли это."
    ]
  },
  {
    "time": [
      352.07,
      361.26
    ],
    "en": [
      "So, I’ll click here on PC1 and connect it to SW1. PC1’s interface is e0 and SW1’s"
    ],
    "ru": [
      "Итак, я нажму здесь на ПК1 и подключу его к SW1. Интерфейс ПК1 - e0, а интерфейс SW1 -"
    ]
  },
  {
    "time": [
      361.26,
      367.55
    ],
    "en": [
      "is G0/1. So I’ll just click on save."
    ],
    "ru": [
      "равно G0 / 1. Я просто нажму \"Сохранить\"."
    ]
  },
  {
    "time": [
      367.55,
      377.61
    ],
    "en": [
      "Now let’s check on PC1 again. From the commad prompt, IPCONFIG /ALL. Okay, under the Ethernet"
    ],
    "ru": [
      "Теперь давайте снова проверим на ПК1. В командной строке IPCONFIG / ALL. Ладно, под Ethernet"
    ]
  },
  {
    "time": [
      377.61,
      384.69
    ],
    "en": [
      "adapter we can once again see DHCP Enabled, Yes, It has a link-local IPv6 address, automatically"
    ],
    "ru": [
      "Адаптер, мы снова можем увидеть, что DHCP включен, да, он имеет локальный IPv6-адрес, автоматически"
    ]
  },
  {
    "time": [
      384.69,
      393.55
    ],
    "en": [
      "generated. And below that we see an IPv4 address. So, did DHCP work? Actually, no it didn’t."
    ],
    "ru": [
      "сгенерировано. А ниже мы видим IPv4-адрес. Итак, DHCP работал? На самом деле нет."
    ]
  },
  {
    "time": [
      393.55,
      400.65999999999997
    ],
    "en": [
      "As it says here, this is an autoconfigured IPv4 address, PC1 generated it automatically."
    ],
    "ru": [
      "Как здесь сказано, это автоматически настроенный IPv4-адрес, ПК1 сгенерировал его автоматически."
    ]
  },
  {
    "time": [
      400.65999999999997,
      413.12
    ],
    "en": [
      "It has the prefix 169.254/16, the subnet mask is 255.255.0.0. 169.254.0.0/16 is the IPv4"
    ],
    "ru": [
      "Он имеет префикс 169.254 / 16, маска подсети 255.255.0.0. 169.254.0.0/16 - это IPv4"
    ]
  },
  {
    "time": [
      413.12,
      419.47
    ],
    "en": [
      "link-local address range, so it functions like the IPv6 link-local address above. So,"
    ],
    "ru": [
      "диапазон локальных адресов для ссылки, поэтому он работает как локальный адрес IPv6, указанный выше. Так,"
    ]
  },
  {
    "time": [
      419.47,
      426.09
    ],
    "en": [
      "PC1 auto-generated IPv4 and IPv6 link-local addresses, but it wasn’t able to get a regular"
    ],
    "ru": [
      "ПК1 автоматически сгенерировал локальные адреса каналов IPv4 и IPv6, но не смог получить обычные"
    ]
  },
  {
    "time": [
      426.09,
      433.04
    ],
    "en": [
      "IPv4 address from the DHCP server, R1. So, PC1 won’t be able to communicate with any"
    ],
    "ru": [
      "IPv4-адрес от DHCP-сервера, R1. Таким образом, ПК1 не сможет связываться ни с одним"
    ]
  },
  {
    "time": [
      433.04,
      442.581
    ],
    "en": [
      "other devices on the network. If I try to ping R1 for example, PING 192.168.1.1, as"
    ],
    "ru": [
      "другие устройства в сети. Если я попытаюсь выполнить эхо-запрос R1, например, PING 192.168.1.1, как"
    ]
  },
  {
    "time": [
      442.581,
      450.75
    ],
    "en": [
      "you can see it doesn’t work. What if I try to renew the IP address? IPCONFIG /RENEW."
    ],
    "ru": [
      "вы видите, что это не работает. Что, если я попытаюсь обновить IP-адрес? IPCONFIG / ОБНОВЛЕНИЕ."
    ]
  },
  {
    "time": [
      450.75,
      458.639
    ],
    "en": [
      "So, PC1 will once again try to get an IPv4 address via DHCP, but once again it won’t"
    ],
    "ru": [
      "Итак, ПК1 снова попытается получить IPv4-адрес через DHCP, но снова не сможет"
    ]
  },
  {
    "time": [
      458.639,
      464.59000000000003
    ],
    "en": [
      "work. We could wait here for a while, so I’ll just use control C to stop it."
    ],
    "ru": [
      "Работа. Мы могли бы немного подождать здесь, поэтому я просто воспользуюсь клавишей C, чтобы остановить это."
    ]
  },
  {
    "time": [
      464.59000000000003,
      472.49
    ],
    "en": [
      "Next, I’ll delete the connection from the attacker to SW1 by right clicking here and"
    ],
    "ru": [
      "Затем я удалю соединение злоумышленника с SW1, щелкнув здесь правой кнопкой мыши и"
    ]
  },
  {
    "time": [
      472.49,
      480.93
    ],
    "en": [
      "selecting delete. Next I’ll go on to R1 and clear the DHCP bindings. I taught you"
    ],
    "ru": [
      "выбрав удалить. Затем я перейду к маршрутизатору R1 и очищу привязки DHCP. Я научил тебя"
    ]
  },
  {
    "time": [
      480.93,
      490.62
    ],
    "en": [
      "this command in the DHCP video, the command is CLEAR IP DHCP BINDING, followed by an asterisk."
    ],
    "ru": [
      "для этой команды в DHCP-видео используется команда CLEAR IP DHCP BINDING, за которой следует звездочка."
    ]
  },
  {
    "time": [
      490.62,
      501.46
    ],
    "en": [
      "Okay, now I’ll go back on PC1 and try to get an IP address once more. IPCONFIG /RENEW."
    ],
    "ru": [
      "Хорошо, теперь я вернусь к ПК1 и попытаюсь получить IP-адрес еще раз. IPCONFIG / ОБНОВЛЕНИЕ."
    ]
  },
  {
    "time": [
      501.46,
      507.8
    ],
    "en": [
      "This time, R1 should have an available IP address for PC1 now that the attack has stopped,"
    ],
    "ru": [
      "На этот раз R1 должен иметь доступный IP-адрес для ПК1 теперь, когда атака остановлена,"
    ]
  },
  {
    "time": [
      507.8,
      515.639
    ],
    "en": [
      "and indeed PC1 was able to get an IP address. So let’s test if it can use the Internet."
    ],
    "ru": [
      "и действительно, ПК1 смог получить IP-адрес. Итак, давайте проверим, может ли он использовать Интернет."
    ]
  },
  {
    "time": [
      515.639,
      527.279
    ],
    "en": [
      "I’ll open firefox and go to google.com. Okay, PC1 is now able to access the Internet."
    ],
    "ru": [
      "Я открываю firefox и захожу на google.com. Хорошо, теперь у ПК1 есть доступ к Интернету."
    ]
  },
  {
    "time": [
      527.279,
      534.269
    ],
    "en": [
      "So, in this video we took a look at one kind of network attack, the DHCP exhaustion attack."
    ],
    "ru": [
      "Итак, в этом видео мы рассмотрели один из видов сетевой атаки - атаку исчерпания DHCP."
    ]
  },
  {
    "time": [
      534.269,
      538.41
    ],
    "en": [
      "Although there is no packet tracer lab file for you to practice with this time, I hope"
    ],
    "ru": [
      "Несмотря на то, что на этот раз у вас нет лабораторного файла слежения за пакетами, я надеюсь,"
    ]
  },
  {
    "time": [
      538.41,
      543.459
    ],
    "en": [
      "it was at least interesting to see. In the next video we’ll look at a Cisco switch"
    ],
    "ru": [
      "по крайней мере было интересно посмотреть. В следующем видео мы рассмотрим коммутатор Cisco."
    ]
  },
  {
    "time": [
      543.459,
      548.16
    ],
    "en": [
      "feature called port security, which can be used to prevent this kind of attack, as well"
    ],
    "ru": [
      "функция, называемая безопасностью порта, которая также может использоваться для предотвращения такого рода атак."
    ]
  },
  {
    "time": [
      548.16,
      553.86
    ],
    "en": [
      "as others. Okay, that’s all for this lab."
    ],
    "ru": [
      "как и другие. Ладно, это все для этой лаборатории."
    ]
  },
  {
    "time": [
      553.86,
      559.93
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members. To join,"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP. Присоединиться,"
    ]
  },
  {
    "time": [
      559.93,
      564.759
    ],
    "en": [
      "please click the ‘Join’ button under the video. Thank you to C Mohd, Scott, Martin,"
    ],
    "ru": [
      "нажмите кнопку «Присоединиться» под видео. Спасибо C Mohd, Scott, Martin,"
    ]
  },
  {
    "time": [
      564.759,
      569.259
    ],
    "en": [
      "Khoa, Justin, Christopher, Tebogo, Anand, Pavel, Abraham, Serge, Njoku, Viktor, Roger,"
    ],
    "ru": [
      "Хоа, Джастин, Кристофер, Тебого, Ананд, Павел, Авраам, Серж, Нджоку, Виктор, Роджер,"
    ]
  },
  {
    "time": [
      569.259,
      573.76
    ],
    "en": [
      "Raj, Kenneth, Seamus, Brandon, Marcel, Kone, Donald, Gustavo, Prakaash, Nasir, Erlison,"
    ],
    "ru": [
      "Радж, Кеннет, Симус, Брэндон, Марсель, Коне, Дональд, Густаво, Пракааш, Насир, Эрлисон,"
    ]
  },
  {
    "time": [
      573.76,
      578.68
    ],
    "en": [
      "Marko, Daming, Ed, John, Funnydart, Velvijaykum, Mark, Yousif, Boson Software, Devin, Yonatan,"
    ],
    "ru": [
      "Марко, Даминг, Эд, Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, Boson Software, Девин, Йонатан,"
    ]
  },
  {
    "time": [
      578.68,
      588.879
    ],
    "en": [
      "and Vance. Sorry if I pronounced your name incorrectly, but thank you so much for your"
    ],
    "ru": [
      "и Вэнс. Извините, если я неправильно произнес ваше имя, но большое вам спасибо за ваше"
    ]
  },
  {
    "time": [
      588.879,
      595.8
    ],
    "en": [
      "support. This is the list of JCNP-level members at the time of recording by the way, May 13th"
    ],
    "ru": [
      "служба поддержки. Это список участников уровня JCNP на момент записи, кстати, 13 мая."
    ]
  },
  {
    "time": [
      595.8,
      602.6
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
      595.8,
      602.6
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
      602.6,
      608.79
    ],
    "en": [
      "in future videos. Thank you for watching. Please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "в будущих видео. Спасибо за просмотр. Подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      608.79,
      613.87
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA. If you want to leave a tip,"
    ],
    "ru": [
      "и поделитесь видео со всеми, кто учится на CCNA. Если хочешь оставить чаевые,"
    ]
  },
  {
    "time": [
      613.87,
      619.389
    ],
    "en": [
      "check the links in the description. I'm also a Brave verified publisher and accept BAT,"
    ],
    "ru": [
      "проверьте ссылки в описании. Я также проверенный издатель Brave и принимаю BAT,"
    ]
  },
  {
    "time": [
      619.389,
      619.389
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  }
]