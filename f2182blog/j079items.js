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
      15.6
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
      15.6,
      20.88
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
      20.88,
      26.48
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
      26.48,
      32.08
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
      32.08,
      36.88
    ],
    "en": [
      "click the link in the video description to check&nbsp; it out. It’s a network simulator like packet&nbsp;&nbsp;"
    ],
    "ru": [
      "нажмите ссылку в описании видео, чтобы проверить & nbsp; это из. Это сетевой симулятор, подобный пакету & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      36.88,
      41.52
    ],
    "en": [
      "tracer, but it’s even better, and it includes&nbsp; all of these guided labs to not only help you get&nbsp;&nbsp;"
    ],
    "ru": [
      "tracer, но он даже лучше и включает & nbsp; все эти лабораторные занятия не только помогут вам получить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      41.52,
      46.56
    ],
    "en": [
      "hands-on practice configuring and troubleshooting,&nbsp; but also deepen your understanding of the exam&nbsp;&nbsp;"
    ],
    "ru": [
      "практические занятия по настройке и устранению неполадок, & nbsp; но также углубить свое понимание экзамена & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      46.56,
      53.84
    ],
    "en": [
      "topics. If you want to get NetSim, please&nbsp; follow the link in the video description."
    ],
    "ru": [
      "темы. Если вы хотите получить NetSim, пожалуйста, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      53.84,
      59.2
    ],
    "en": [
      "In this video we’ll take a look at Syslog&nbsp; and practice some basic configurations.&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом видео мы рассмотрим Syslog & nbsp; и попрактикуйтесь в некоторых основных конфигурациях. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      59.2,
      63.84
    ],
    "en": [
      "Syslog functionality in Packet Tracer isn’t&nbsp; perfect, but it’s much more developed than packet&nbsp;&nbsp;"
    ],
    "ru": [
      "Функциональность системного журнала в Packet Tracer не & nbsp; идеально, но он намного более развит, чем пакет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      63.84,
      70.88
    ],
    "en": [
      "tracer’s SNMP functionality. We’ll take a look&nbsp; at logging via the console line, the VTY lines,&nbsp;&nbsp;"
    ],
    "ru": [
      "SNMP-функциональность tracer. Мы посмотрим & nbsp; при регистрации через консольную строку строки VTY, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      70.88,
      75.2
    ],
    "en": [
      "the buffer, and an external Syslog server."
    ],
    "ru": [
      "буфер и внешний сервер системного журнала."
    ]
  },
  {
    "time": [
      75.2,
      80.96000000000001
    ],
    "en": [
      "I’ll start with step 1, which says to&nbsp; connect to R1’s console port using PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я начну с шага 1, в котором говорится, что & nbsp; подключитесь к консольному порту маршрутизатора R1 с помощью ПК2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      80.96000000000001,
      84.64
    ],
    "en": [
      "If I click on R1 like this and go to the CLI tab,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если я нажму на R1 вот так и перейду на вкладку CLI, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      84.64,
      90.88
    ],
    "en": [
      "this is the same as a console connection. However&nbsp; accessing the device via a PC is more realistic,&nbsp;&nbsp;"
    ],
    "ru": [
      "это то же самое, что и консольное соединение. Однако & nbsp; доступ к устройству через ПК более реалистичен, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      90.88,
      98.08
    ],
    "en": [
      "that’s how we connect to real network devices, so&nbsp; let’s go on PC2. From the desktop tab, click on&nbsp;&nbsp;"
    ],
    "ru": [
      "именно так мы подключаемся к реальным сетевым устройствам, поэтому & nbsp; поехали на ПК2. На вкладке рабочего стола нажмите & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      98.08,
      105.2
    ],
    "en": [
      "terminal, and these default settings are correct&nbsp; so I’ll click OK. Now we’re in the CLI of R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "терминал, и эти настройки по умолчанию верны & nbsp; так что я нажму \"ОК\". Теперь мы находимся в интерфейсе командной строки R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      105.2,
      111.52000000000001
    ],
    "en": [
      "I’ll log in, as it says above the username is&nbsp; jeremy and password is ccna, and then ENABLE&nbsp;&nbsp;"
    ],
    "ru": [
      "Я войду в систему, как сказано выше, имя пользователя & nbsp; Джереми и пароль - ccna, а затем ВКЛЮЧИТЬ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      111.52000000000001,
      120.88
    ],
    "en": [
      "and the password is ccna again. Now I’ll shut&nbsp; down the G0/0 interface. CONF T. INTERFACE G0/0.&nbsp;&nbsp;"
    ],
    "ru": [
      "и пароль снова ccna. А теперь закрою & nbsp; вниз по интерфейсу G0 / 0. CONF T. ИНТЕРФЕЙС G0 / 0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      120.88,
      127.28
    ],
    "en": [
      "SHUTDOWN. And we get two Syslog messages. Because&nbsp; we’re connected to the console line, Syslog&nbsp;&nbsp;"
    ],
    "ru": [
      "НЕИСПРАВНОСТЬ. И мы получаем два сообщения системного журнала. Потому что & nbsp; мы подключены к линии консоли Syslog & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      127.28,
      133.04
    ],
    "en": [
      "messages are displayed by default. Why are two&nbsp; messages displayed when the interface goes down?&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщения отображаются по умолчанию. Почему два & nbsp; сообщения, отображаемые при сбое интерфейса? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      133.04,
      140.24
    ],
    "en": [
      "Let me show you. DO SHOW IP INTERFACE BRIEF. The&nbsp; first message is referring to the STATUS here,&nbsp;&nbsp;"
    ],
    "ru": [
      "Позволь мне показать тебе. ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА. & Nbsp; первое сообщение здесь относится к СТАТУСУ, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      140.24,
      146.07999999999998
    ],
    "en": [
      "administratively down. And the second message&nbsp; is referring to the PROTOCOL column, down.&nbsp;&nbsp;"
    ],
    "ru": [
      "административно вниз. И второе сообщение & nbsp; относится к столбцу ПРОТОКОЛ внизу. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      146.07999999999998,
      152.96
    ],
    "en": [
      "So, that’s why two messages are displayed.&nbsp; Okay, let’s enable it again. NO SHUTDOWN.&nbsp;&nbsp;"
    ],
    "ru": [
      "Поэтому отображаются два сообщения. & Nbsp; Хорошо, давайте снова включим его. БЕЗ ОСТАНОВА. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      152.96,
      157.76
    ],
    "en": [
      "Okay, all of these messages are considered&nbsp; severity level 5, also known as notice or&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, все эти сообщения считаются & nbsp; уровень серьезности 5, также известный как уведомление или & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      157.76,
      163.6
    ],
    "en": [
      "notification. However, these messages don’t&nbsp; have timestamps, so let’s enable those.&nbsp;&nbsp;"
    ],
    "ru": [
      "уведомление. Однако эти сообщения не & nbsp; есть временные метки, поэтому давайте включим их. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      163.6,
      171.68
    ],
    "en": [
      "EXIT. SERVICE TIMESTAMPS LOG DATETIME, and if I&nbsp; try to enter the command it fails, why is that?&nbsp;&nbsp;"
    ],
    "ru": [
      "ВЫХОД. ВРЕМЯ ЖУРНАЛА ОБСЛУЖИВАНИЯ, и если я & nbsp; попытаться ввести команду не удается, почему? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      171.68,
      178.24
    ],
    "en": [
      "In packet tracer we have to enter the MSEC option,&nbsp; to display milliseconds in the timestamps. In real&nbsp;&nbsp;"
    ],
    "ru": [
      "В пакетном трассировщике мы должны ввести опцию MSEC, & nbsp; для отображения миллисекунд в метках времени. В реальном & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      178.24,
      184.8
    ],
    "en": [
      "Cisco IOS, MSEC is just an option, you don’t have&nbsp; to include it, but in Packet Tracer we have to.&nbsp;&nbsp;"
    ],
    "ru": [
      "Cisco IOS, MSEC - это просто вариант, у вас нет & nbsp; чтобы включить его, но в Packet Tracer это необходимо. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      184.8,
      189.04
    ],
    "en": [
      "Okay, now I’ll exit from global config&nbsp; mode and you can see the log message now&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь я выйду из глобальной конфигурации & nbsp; режим, и теперь вы можете видеть сообщение журнала & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      189.04,
      194.4
    ],
    "en": [
      "includes a timestamp. I haven’t adjusted&nbsp; the time of R1 so the time isn’t accurate,&nbsp;&nbsp;"
    ],
    "ru": [
      "включает отметку времени. Я не настраивал & nbsp; время R1, поэтому время неточное, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      194.4,
      200.16
    ],
    "en": [
      "but in a real network it’s of course&nbsp; very important to have accurate time."
    ],
    "ru": [
      "но в реальной сети это, конечно, & nbsp; очень важно иметь точное время."
    ]
  },
  {
    "time": [
      200.16,
      206.8
    ],
    "en": [
      "Okay, now let’s move on to step 2 and connect to&nbsp; R1 from PC1 using Telnet. I’ve already configured&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь перейдем к шагу 2 и подключимся к & nbsp; R1 с ПК1 с помощью Telnet. Я уже настроил & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      206.8,
      212.0
    ],
    "en": [
      "R1 to allow Telnet connections, and I won’t cover&nbsp; those configurations in this video. I’ll cover&nbsp;&nbsp;"
    ],
    "ru": [
      "R1, чтобы разрешить соединения Telnet, и я не буду рассказывать о & nbsp; те конфигурации в этом видео. Я расскажу о & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      212.0,
      218.96
    ],
    "en": [
      "Telnet and SSH in a later video, perhaps the&nbsp; next one. So, to Telnet to R1 we must open the&nbsp;&nbsp;"
    ],
    "ru": [
      "Telnet и SSH в более позднем видео, возможно, & nbsp; следующий. Итак, для подключения Telnet к R1 мы должны открыть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      218.96,
      226.24
    ],
    "en": [
      "command prompt of PC1. Then from here use the&nbsp; command TELNET, followed by R1’s IP address,&nbsp;&nbsp;"
    ],
    "ru": [
      "командная строка ПК1. Затем отсюда используйте & nbsp; команду TELNET, за которой следует IP-адрес маршрутизатора R1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      226.24,
      234.8
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
      226.24,
      234.8
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
      234.8,
      243.12
    ],
    "en": [
      "Okay, so let’s enable another interface and see&nbsp; if a log message appears. CONF T. INTERFACE G0/1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте включим другой интерфейс и посмотрим & nbsp; если появляется сообщение журнала. CONF T. ИНТЕРФЕЙС G0 / 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      243.12,
      249.12
    ],
    "en": [
      "NO SHUTDOWN. And no message appears. That’s&nbsp; because log messages aren’t displayed by default&nbsp;&nbsp;"
    ],
    "ru": [
      "НЕТ ОСТАНОВА. И никакого сообщения не появляется. Это & nbsp; поскольку сообщения журнала не отображаются по умолчанию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      249.12,
      256.08
    ],
    "en": [
      "when connecting via the VTY lines. So, let’s&nbsp; enable it. By the way, the LOGGING MONITOR command&nbsp;&nbsp;"
    ],
    "ru": [
      "при подключении через линии VTY. Итак, давайте & nbsp; включить его. Кстати, команда LOGGING MONITOR & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      256.08,
      261.76
    ],
    "en": [
      "isn’t actually available in packet tracer, but if&nbsp; we enable logging for the current Telnet session,&nbsp;&nbsp;"
    ],
    "ru": [
      "фактически недоступен в программе трассировки пакетов, но если & nbsp; мы включаем ведение журнала для текущего сеанса Telnet, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      261.76,
      267.04
    ],
    "en": [
      "it will be enabled automatically. So, what’s the&nbsp; command to enable logging to the VTY lines for&nbsp;&nbsp;"
    ],
    "ru": [
      "он будет включен автоматически. Итак, что такое & nbsp; команда, чтобы включить запись в строки VTY для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      267.04,
      272.4
    ],
    "en": [
      "the current session? It’s TERMINAL MONITOR&nbsp; from privileged exec mode, but I can use&nbsp;&nbsp;"
    ],
    "ru": [
      "текущая сессия? Это ТЕРМИНАЛЬНЫЙ МОНИТОР & nbsp; из привилегированного режима exec, но я могу использовать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      272.4,
      277.68
    ],
    "en": [
      "DO TERMINAL MONITOR to enable it&nbsp; here from interface config mode.&nbsp;&nbsp;"
    ],
    "ru": [
      "ДЕЛАЙТЕ КОНТРОЛЬНЫЙ МОНИТОР, чтобы включить его & nbsp; здесь из режима конфигурации интерфейса. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      277.68,
      283.52
    ],
    "en": [
      "Okay, now I’ll disable the interface with&nbsp; SHUTDOWN, and a log message is displayed.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь я отключу интерфейс с помощью & nbsp; ВЫКЛЮЧЕНИЕ, и отображается сообщение журнала. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      283.52,
      288.0
    ],
    "en": [
      "I said in the lecture video that the TERMINAL&nbsp; MONITOR command only applies to the current&nbsp;&nbsp;"
    ],
    "ru": [
      "Я сказал в видео лекции, что ТЕРМИНАЛ & nbsp; Команда МОНИТОР применяется только к текущему & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      288.0,
      294.64
    ],
    "en": [
      "session, the current connection. If I exit out&nbsp; of this Telnet session and then connect again,&nbsp;&nbsp;"
    ],
    "ru": [
      "сеанс, текущее соединение. Если я выйду из & nbsp; этого сеанса Telnet, а затем подключитесь снова, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      294.64,
      299.84000000000003
    ],
    "en": [
      "the logs shouldn’t display unless I&nbsp; use the TERMINAL MONITOR command again.&nbsp;&nbsp;"
    ],
    "ru": [
      "журналы не должны отображаться, если я & nbsp; снова используйте команду TERMINAL MONITOR. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      299.84000000000003,
      304.24
    ],
    "en": [
      "Unfortunately, when I was testing the lab in&nbsp; packet tracer I found that packet tracer doesn’t&nbsp;&nbsp;"
    ],
    "ru": [
      "К сожалению, когда я тестировал лабораторию на & nbsp; пакетный трассировщик Я обнаружил, что пакетный трассировщик не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      304.24,
      310.56
    ],
    "en": [
      "function totally accurately. So, even if I exit&nbsp; out of Telnet and then connect again, log messages&nbsp;&nbsp;"
    ],
    "ru": [
      "работают совершенно точно. Итак, даже если я выйду из & nbsp; из Telnet, а затем подключитесь снова, сообщения журнала & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      310.56,
      317.92
    ],
    "en": [
      "will still display. Don’t worry about that though,&nbsp; what I taught in the lecture video is correct."
    ],
    "ru": [
      "по-прежнему будет отображаться. Но не беспокойтесь об этом, & nbsp; то, что я учил в видео лекции, правильно."
    ]
  },
  {
    "time": [
      317.92,
      323.68
    ],
    "en": [
      "Now let’s do step 3, which is to enable logging&nbsp; to the buffer. On this router in packet tracer,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь перейдем к шагу 3, который должен включить ведение журнала & nbsp; в буфер. На этом маршрутизаторе в трассировщике пакетов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      323.68,
      330.4
    ],
    "en": [
      "logging to the buffer is actually disabled&nbsp; by default. Let me show you. DO SHOW LOGGING.&nbsp;&nbsp;"
    ],
    "ru": [
      "запись в буфер фактически отключена & nbsp; по умолчанию. Позволь мне показать тебе. ПОКАЗАТЬ ЖУРНАЛ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      330.4,
      335.04
    ],
    "en": [
      "Here you can see the logging settings,&nbsp; and buffer logging is disabled. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь вы можете увидеть настройки ведения журнала, & nbsp; и ведение журнала буфера отключено. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      335.04,
      344.4
    ],
    "en": [
      "let’s enable it. EXIT. LOGGING BUFFERED, and set&nbsp; the size to 8192 bytes. Now, there is no option"
    ],
    "ru": [
      "давайте включим это. ВЫХОД. ЖУРНАЛ БУФЕРИРОВАН, и установите & nbsp; размер до 8192 байта. Теперь нет выбора"
    ]
  },
  {
    "time": [
      344.4,
      350.56
    ],
    "en": [
      "to set the level of messages logged to the buffer&nbsp; in packet tracer. Let’s check the default level.&nbsp;&nbsp;"
    ],
    "ru": [
      "для установки уровня сообщений, записываемых в буфер & nbsp; в трассировщике пакетов. Давайте проверим уровень по умолчанию. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      350.56,
      356.88
    ],
    "en": [
      "DO SHOW LOGGING. Okay, looks like the default&nbsp; level is DEBUGGING, so all messages will be&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ЛОГИНГ. Хорошо, похоже, & nbsp; по умолчанию уровень - ОТЛАДКА, поэтому все сообщения будут & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      356.88,
      362.4
    ],
    "en": [
      "saved to the buffer. Also, down here it&nbsp; says ‘trap logging: level informational’.&nbsp;&nbsp;"
    ],
    "ru": [
      "сохраняется в буфер. Кроме того, вот здесь & nbsp; говорит «ведение журнала ловушек: информация на уровне». & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      362.4,
      369.36
    ],
    "en": [
      "So, if a Syslog server is configured, messages&nbsp; of informational severity or higher will be sent."
    ],
    "ru": [
      "Итак, если настроен сервер системного журнала, сообщения & nbsp; информативной важности и выше будет отправлено."
    ]
  },
  {
    "time": [
      369.36,
      372.8
    ],
    "en": [
      "Now let’s do step 4, which is to&nbsp; enable logging to the Syslog server,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь перейдем к шагу 4, который & nbsp; включить ведение журнала на сервер системного журнала, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      372.8,
      379.44
    ],
    "en": [
      "SRV1, with a level of debugging. So, I can&nbsp; use either LOGGING, and then the IP address,&nbsp;&nbsp;"
    ],
    "ru": [
      "SRV1, с уровнем отладки. Итак, я могу & nbsp; используйте либо LOGGING, а затем IP-адрес, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      379.44,
      386.24
    ],
    "en": [
      "or add HOST and then enter the IP&nbsp; address, which is 192.168.1.100.&nbsp;&nbsp;"
    ],
    "ru": [
      "или добавьте HOST, а затем введите IP & nbsp; адрес, то есть 192.168.1.100. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      386.24,
      393.04
    ],
    "en": [
      "So, R1 will now send Syslog messages to SRV1.&nbsp; But let’s set the severity to debugging. The&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, R1 теперь будет отправлять сообщения системного журнала на SRV1. & Nbsp; Но давайте установим степень серьезности отладки. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      393.04,
      400.32
    ],
    "en": [
      "command is LOGGING TRAP, and the only option in&nbsp; packet tracer is DEBUGGING, so let’s do that.&nbsp;&nbsp;"
    ],
    "ru": [
      "это команда LOGGING TRAP, и это единственный параметр в & nbsp; пакетный трассировщик ОТЛАДКА, так что давайте сделаем это. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      400.32,
      406.24
    ],
    "en": [
      "Okay, now I’ll exit from global config mode. And&nbsp; actually I’ll generate a few more log messages.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь я выйду из режима глобальной конфигурации. И & NBSP; на самом деле я создам еще несколько сообщений журнала. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      406.24,
      413.2
    ],
    "en": [
      "CONF T. I’ll enable G0/1 again.&nbsp; INTERFACE G0/1. NO SHUTDOWN.&nbsp;&nbsp;"
    ],
    "ru": [
      "CONF T. Я снова включу G0 / 1. & Nbsp; ИНТЕРФЕЙС G0 / 1. БЕЗ ОСТАНОВА. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      413.2,
      419.92
    ],
    "en": [
      "And disable it again. SHUTDOWN. And let’s&nbsp; return to privileged exec mode. END. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "И снова отключите его. НЕИСПРАВНОСТЬ. И давайте & nbsp; вернуться в привилегированный режим exec. КОНЕЦ. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      419.92,
      429.12
    ],
    "en": [
      "that generated a few messages, let’s check on&nbsp; SRV1. On SRV1, click on Services, and then Syslog.&nbsp;&nbsp;"
    ],
    "ru": [
      "который создал несколько сообщений, давайте проверим & nbsp; SRV1. На SRV1 щелкните Службы, а затем Системный журнал. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      429.12,
      433.2
    ],
    "en": [
      "The Syslog server functionality in Packet&nbsp; Tracer is very primitive, but here are&nbsp;&nbsp;"
    ],
    "ru": [
      "Функциональность сервера системного журнала в пакете & nbsp; Tracer очень примитивен, но вот & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      433.2,
      436.72
    ],
    "en": [
      "the messages that were sent from R1 to SRV1.&nbsp;"
    ],
    "ru": [
      "сообщения, отправленные с R1 на SRV1. & nbsp;"
    ]
  },
  {
    "time": [
      436.72,
      440.4
    ],
    "en": [
      "Okay, in this lab we did some&nbsp; basic Syslog configurations.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, в этой лабораторной работе мы сделали несколько & nbsp; основные конфигурации системного журнала. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      440.4,
      445.76
    ],
    "en": [
      "You probably won’t get any questions about syslog&nbsp; configuration on the CCNA exam, but I think it’s&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы, вероятно, не получите никаких вопросов о системном журнале & nbsp; конфигурации на экзамене CCNA, но я думаю, что это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      445.76,
      451.36
    ],
    "en": [
      "a good idea to get some hands on practice, even&nbsp; if it’s limited by packet tracer’s capabilities.&nbsp;&nbsp;"
    ],
    "ru": [
      "хорошая идея попрактиковаться, даже & nbsp; если это ограничено возможностями средства отслеживания пакетов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      451.36,
      459.2
    ],
    "en": [
      "That’s all for this lab. Next let’s take a&nbsp; look at a bonus lab in Boson Software’s NetSim."
    ],
    "ru": [
      "Вот и все для этой лаборатории. Теперь давайте возьмем & nbsp; посмотрите на бонусную лабораторию в NetSim от Boson Software."
    ]
  },
  {
    "time": [
      459.2,
      465.92
    ],
    "en": [
      "Okay here's today's Boson NetSim practice lab. So,&nbsp; as I have said Syslog configuration is not part of&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практическая лаборатория Boson NetSim. Итак, & nbsp; как я уже сказал, конфигурация системного журнала не является частью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      465.92,
      473.36
    ],
    "en": [
      "the new CCNA exam, so it's also not part of NetSim&nbsp; for CCNA. So, for today's demo I've selected a&nbsp;&nbsp;"
    ],
    "ru": [
      "новый экзамен CCNA, поэтому он также не является частью NetSim & nbsp; для CCNA. Итак, для сегодняшней демонстрации я выбрал & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      473.36,
      483.12
    ],
    "en": [
      "lab from NetSim for ENCOR 350-401, which is the&nbsp; core exam for the CCNP Enterprise certification.&nbsp;&nbsp;"
    ],
    "ru": [
      "lab от NetSim для ENCOR 350-401, который является & nbsp; основной экзамен для получения сертификата CCNP Enterprise. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      483.12,
      490.24
    ],
    "en": [
      "So that lab is system message logging. Although it&nbsp; is a CCNP practice lab it's actually quite simple.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, эта лабораторная работа - регистрация системных сообщений. Хотя это & ​​nbsp; это практическая лаборатория CCNP, на самом деле это довольно просто. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      490.24,
      495.36
    ],
    "en": [
      "So here's the topology. A couple routers,&nbsp; couple switches, and some PCs, and one of&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вот топология. Пара маршрутизаторов, & nbsp; пара переключателей, и несколько компьютеров, и один из & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      495.36,
      501.28
    ],
    "en": [
      "them is a Syslog server. And these are all the&nbsp; commands you need to know. So, as you can see,&nbsp;&nbsp;"
    ],
    "ru": [
      "это сервер системного журнала. И это все & nbsp; команды, которые вам нужно знать. Итак, как видите, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      501.28,
      507.52
    ],
    "en": [
      "quite simple. You can definitely do this with&nbsp; the commands I've already taught you. And it's&nbsp;&nbsp;"
    ],
    "ru": [
      "довольно просто. Вы определенно можете сделать это с помощью & nbsp; команды, которые я уже научил вас. И это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      507.52,
      514.32
    ],
    "en": [
      "just a single task with 10 steps, so let's go&nbsp; through the whole lab for this demonstration.&nbsp;&nbsp;"
    ],
    "ru": [
      "всего одна задача из 10 шагов, так что давайте & nbsp; через всю лабораторию для этой демонстрации. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      514.32,
      521.28
    ],
    "en": [
      "Okay, first on Router1, ping SyslogServer. The&nbsp; ping should be successful. Okay let's see if&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, сначала на Router1 проверьте связь с SyslogServer. & Nbsp; пинг должен быть успешным. Хорошо, посмотрим, будет ли & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      521.28,
      531.12
    ],
    "en": [
      "it is in fact successful. PING 10.1.0.10. Okay&nbsp; and it does work. Okay, configure Router1 to&nbsp;&nbsp;"
    ],
    "ru": [
      "это на самом деле успешно. PING 10.1.0.10. Хорошо & nbsp; и это действительно работает. Хорошо, настройте Router1 на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      531.12,
      540.96
    ],
    "en": [
      "send system log messages to SyslogServer. Okay,&nbsp; so CONF T. LOGGING, and I could use LOGGING HOST,&nbsp;&nbsp;"
    ],
    "ru": [
      "отправлять сообщения системного журнала на SyslogServer. Хорошо, & nbsp; так что CONF T. LOGGING, и я мог бы использовать LOGGING HOST, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      540.96,
      550.08
    ],
    "en": [
      "or just LOGGING. Both of them have the same&nbsp; effect. So, 10.1.0.10. That's it. How many&nbsp;&nbsp;"
    ],
    "ru": [
      "или просто РЕГИСТРАЦИЯ. У них обоих одинаковый & nbsp; эффект. Итак, 10.1.0.10. Вот и все. Сколько & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      550.08,
      559.04
    ],
    "en": [
      "levels of logging are available to trap? So, let&nbsp; me see. DO SHOW LOGGING. Currently, the level is&nbsp;&nbsp;"
    ],
    "ru": [
      "уровни ведения журнала доступны для ловушки? Итак, позвольте & nbsp; я вижу. ПОКАЗАТЬ ЛОГИНГ. В настоящее время уровень & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      559.04,
      568.08
    ],
    "en": [
      "informational. So, level 6 all the way&nbsp; down to 0 will be logged to the server.&nbsp;&nbsp;"
    ],
    "ru": [
      "информационный. Итак, уровень 6 полностью & nbsp; до 0 будет регистрироваться на сервере. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      568.08,
      572.08
    ],
    "en": [
      "LOGGING TRAP. How many are&nbsp; available? Well, all 8 are available,&nbsp;&nbsp;"
    ],
    "ru": [
      "ЛОВУШКА ДЛЯ ЗАГРУЗКИ. Сколько стоят & nbsp; доступный? Ну все 8 доступны, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      572.08,
      579.52
    ],
    "en": [
      "even though only 7 are configured at the moment,&nbsp; 0 through 6. Okay, if you configure a device&nbsp;&nbsp;"
    ],
    "ru": [
      "хотя на данный момент настроено только 7, & nbsp; От 0 до 6. Хорошо, если вы настроите устройство & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      579.52,
      585.44
    ],
    "en": [
      "to trap log messages up to level 7, would you&nbsp; receive more log messages than if you configured&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы перехватить сообщения журнала до уровня 7, не могли бы вы & nbsp; получать больше сообщений журнала, чем если бы вы настроили & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      585.44,
      592.96
    ],
    "en": [
      "a device to trap log messages up to level 1?&nbsp; The answer to that is absolutely yes. If you&nbsp;&nbsp;"
    ],
    "ru": [
      "устройство для перехвата сообщений журнала до уровня 1? & nbsp; Ответ на это абсолютно положительный. Если вы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      592.96,
      601.52
    ],
    "en": [
      "configured level 1, that includes only level&nbsp; 1, alerts, and level 0, which is emergencies.&nbsp;&nbsp;"
    ],
    "ru": [
      "настроен уровень 1, который включает только уровень & nbsp; 1 - предупреждения и уровень 0 - аварийные ситуации."
    ]
  },
  {
    "time": [
      601.52,
      607.68
    ],
    "en": [
      "But if you configured level 7,&nbsp; that includes all of the levels.&nbsp;&nbsp;"
    ],
    "ru": [
      "Но если вы настроили уровень 7, & nbsp; который включает все уровни. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      607.68,
      613.04
    ],
    "en": [
      "Okay, configure Router1 to limit log messages to&nbsp; the warning severity level. Okay, so the command&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, настройте Router1 так, чтобы сообщения журнала ограничивались & nbsp; уровень серьезности предупреждения. Итак, команда & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      613.04,
      624.0
    ],
    "en": [
      "is LOGGING TRAP, and then WARNINGS. And let me&nbsp; verify that, that is step 6. DO SHOW LOGGING.&nbsp;&nbsp;"
    ],
    "ru": [
      "ЗАПИСЫВАЕТ ЛОВУШКУ, а затем ПРЕДУПРЕЖДЕНИЯ. И позвольте мне & nbsp; убедитесь, что это шаг 6. ПОКАЗАТЬ ЖУРНАЛ. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      624.0,
      629.36
    ],
    "en": [
      "And here it is. Trap logging level warnings.&nbsp;&nbsp;"
    ],
    "ru": [
      "И вот оно. Предупреждения об уровне ведения журнала ловушек. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      629.36,
      634.4
    ],
    "en": [
      "Okay, on Switch1 and Switch2, ping&nbsp; SyslogServer. Okay, let's see if both&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, на Switch1 и Switch2 выполните команду ping & nbsp; SyslogServer. Хорошо, посмотрим, оба ли & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      634.4,
      642.56
    ],
    "en": [
      "switches have connectivity. So I guess these&nbsp; switches have an IP address maybe on VLAN1.&nbsp;&nbsp;"
    ],
    "ru": [
      "коммутаторы имеют возможность подключения. Итак, я предполагаю, что эти & nbsp; коммутаторы имеют IP-адрес, возможно, в VLAN1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      642.56,
      651.92
    ],
    "en": [
      "No, it's VLAN99, they have an IP address.&nbsp; Okay, so let's try that. PING 10.1.0.10, okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "Нет, это VLAN99, у них есть IP-адрес. Хорошо, давай попробуем. PING 10.1.0.10, хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      651.92,
      659.84
    ],
    "en": [
      "that works. And from ping...not&nbsp; ping2, from server2 (*Switch2~!!).&nbsp;&nbsp;"
    ],
    "ru": [
      "это работает. И от пинга ... не от & nbsp; ping2, с server2 (* Switch2 ~ !!). & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      659.84,
      665.76
    ],
    "en": [
      "Okay. So we are going to do the same&nbsp; configurations on these switches. Configure&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо. Итак, мы собираемся сделать то же самое & nbsp; конфигурации на этих коммутаторах. Настроить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      665.76,
      672.48
    ],
    "en": [
      "them to send Syslog messages to the server, with&nbsp; a level of warning or higher. And higher means&nbsp;&nbsp;"
    ],
    "ru": [
      "их для отправки сообщений системного журнала на сервер с & nbsp; уровень предупреждения или выше. А выше означает & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      672.48,
      678.88
    ],
    "en": [
      "higher severity, not higher number, because the&nbsp; higher severities are actually lower in number.&nbsp;&nbsp;"
    ],
    "ru": [
      "более высокая степень серьезности, а не более высокое число, потому что & nbsp; чем выше серьезность, тем меньше число. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      678.88,
      690.72
    ],
    "en": [
      "So I'll do it here on Switch2. LOGGING&nbsp; 10.1.0.10. LOGGING TRAP WARNINGS.&nbsp;&nbsp;"
    ],
    "ru": [
      "Так что я сделаю это здесь, на Switch2. РЕГИСТРАЦИЯ & NBSP; 10.1.0.10. ПРЕДУПРЕЖДЕНИЯ О ЛОВУШКЕ РЕГИСТРАЦИИ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      690.72,
      702.88
    ],
    "en": [
      "And Switch1. LOGGING 10.1.0.10. LOGGING TRAP&nbsp; WARNINGS. Okay, and verify the configuration.&nbsp;&nbsp;"
    ],
    "ru": [
      "И Switch1. ЛОГИН 10.1.0.10. ЛОВУШКА ДОБЫЧИ & nbsp; ПРЕДУПРЕЖДЕНИЯ. Хорошо, проверьте конфигурацию. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      702.88,
      711.6
    ],
    "en": [
      "DO SHOW LOGGING. We've already got a bunch&nbsp; of messages here, that is in the buffer.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ЛОГИНГ. У нас уже есть несколько & nbsp; сообщений здесь, то есть в буфере. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      711.6,
      722.8
    ],
    "en": [
      "Okay, the level is warnings, looks good.&nbsp; Switch2, again trap logging level warnings.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, уровень предупреждения, выглядит хорошо. & Nbsp; Switch2, снова перехватывает предупреждения об уровне ведения журнала. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      722.8,
      727.36
    ],
    "en": [
      "Okay, so that's it, pretty quick and simple&nbsp; lab. And since we've done the whole lab&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот и все, довольно быстро и просто & nbsp; лаборатория. И поскольку мы проделали всю лабораторную работу, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      727.36,
      731.52
    ],
    "en": [
      "let's see if we did it correctly. So, I'll use&nbsp; the grade lab function here and we'll check&nbsp;&nbsp;"
    ],
    "ru": [
      "посмотрим, правильно ли мы сделали. Итак, я буду использовать & nbsp; функция оценки здесь, и мы проверим & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      731.52,
      736.08
    ],
    "en": [
      "our configurations to see if they are correct.&nbsp;&nbsp;"
    ],
    "ru": [
      "наши конфигурации, чтобы убедиться, что они верны. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      736.08,
      743.36
    ],
    "en": [
      "Okay, looks good. So, all green check marks&nbsp; are here, so no mistakes. If we had any&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, выглядит хорошо. Итак, все зеленые галочки & nbsp; здесь, так что никаких ошибок. Если бы у нас был & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      743.36,
      747.04
    ],
    "en": [
      "missing commands they would be highlighted.&nbsp; They would be shown here, but highlighted in&nbsp;&nbsp;"
    ],
    "ru": [
      "отсутствующие команды будут выделены. & nbsp; Они будут показаны здесь, но выделены в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      747.04,
      756.96
    ],
    "en": [
      "red. And if we had any extra commands that we&nbsp; didn't need they would be highlighted in blue.&nbsp;&nbsp;"
    ],
    "ru": [
      "красный. И если бы у нас были дополнительные команды, которые мы & nbsp; не нужно, они будут выделены синим цветом. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      756.96,
      763.12
    ],
    "en": [
      "Okay, so that was a quick look at Boson&nbsp; NetSim. This time not for CCNA but for CCNP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это был быстрый взгляд на Boson & nbsp; NetSim. На этот раз не для CCNA, а для CCNP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      763.12,
      768.24
    ],
    "en": [
      "This is a great source of detailed, guided&nbsp; practice labs for the CCNA and for the&nbsp;&nbsp;"
    ],
    "ru": [
      "Это отличный источник подробной и управляемой & nbsp; практические лаборатории для CCNA и для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      768.24,
      774.56
    ],
    "en": [
      "CCNP. If you want to get NetSim, please&nbsp; follow the link in the video description."
    ],
    "ru": [
      "CCNP. Если вы хотите получить NetSim, пожалуйста, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      774.56,
      779.2
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
      779.2,
      785.28
    ],
    "en": [
      "To join, please click the ‘Join’ button under&nbsp; the video. Thank you to Kenneth, Seamus, H W,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Кеннету, Симусу, Х.В., & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      785.28,
      791.28
    ],
    "en": [
      "Brandon, Samil, Aaron, Tech Alameda, Marcel, Kone,&nbsp; Donald, C Mohd, Gustavo, Anthony, Biraj, Junhong,&nbsp;&nbsp;"
    ],
    "ru": [
      "Брэндон, Самил, Аарон, Тех Аламеда, Марсель, Коне, & nbsp; Дональд, К. Мохд, Густаво, Энтони, Бирадж, Джунхонг, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      791.28,
      796.88
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
      796.88,
      803.36
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
      803.36,
      807.84
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
      807.84,
      814.72
    ],
    "en": [
      "This is the list of JCNP-level members at the time&nbsp; of recording by the way, February 14th 2021. If&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на тот момент & nbsp; записи кстати, 14 февраля 2021 года. Если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      814.72,
      821.2
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
      821.2,
      824.24
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
      824.24,
      830.08
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
      830.08,
      835.68
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
      835.68,
      835.68
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]