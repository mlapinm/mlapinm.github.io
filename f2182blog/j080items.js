let objs = [
  {
    "time": [
      0.72,
      7.12
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
      7.12,
      12.56
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
      12.56,
      17.84
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
      17.84,
      25.04
    ],
    "en": [
      "In this video we will cover SSH, Secure Shell.&nbsp; SSH is a protocol used to connect to devices&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом видео мы рассмотрим SSH, Secure Shell. & Nbsp; SSH - это протокол, используемый для подключения к устройствам & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      25.04,
      30.8
    ],
    "en": [
      "and configure them via the CLI. One option&nbsp; to connect to a device and configure it is&nbsp;&nbsp;"
    ],
    "ru": [
      "и настройте их через интерфейс командной строки. Один вариант & nbsp; подключиться к устройству и настроить его - & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      30.8,
      36.8
    ],
    "en": [
      "via the console port, which I introduced in an&nbsp; early video of this course. However SSH allows&nbsp;&nbsp;"
    ],
    "ru": [
      "через консольный порт, который я представил в & nbsp; раннее видео этого курса. Однако SSH позволяет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      36.8,
      42.48
    ],
    "en": [
      "you to connect to a device remotely, without&nbsp; being directly connected to its console port.&nbsp;&nbsp;"
    ],
    "ru": [
      "вы можете подключиться к устройству удаленно, без & nbsp; напрямую подключен к своему консольному порту. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      42.48,
      47.6
    ],
    "en": [
      "SSH is exam topic 4.8, which says you&nbsp; must be able to configure network devices&nbsp;&nbsp;"
    ],
    "ru": [
      "SSH - это тема экзамена 4.8, в которой говорится, что вы & nbsp; должна иметь возможность настраивать сетевые устройства & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      47.6,
      53.36
    ],
    "en": [
      "for remote access using SSH. I won’t&nbsp; just cover SSH in this video, though.&nbsp;&nbsp;"
    ],
    "ru": [
      "для удаленного доступа по SSH. Я не & nbsp; просто рассмотрите в этом видео SSH. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      53.36,
      59.2
    ],
    "en": [
      "I will take the opportunity to&nbsp; introduce some other important concepts."
    ],
    "ru": [
      "Я воспользуюсь возможностью, чтобы & nbsp; ввести некоторые другие важные концепции."
    ]
  },
  {
    "time": [
      59.2,
      64.8
    ],
    "en": [
      "Here’s what we’ll cover in this video.&nbsp; First, console port security. In the&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот что мы расскажем в этом видео. & Nbsp; Во-первых, безопасность консольного порта. В & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      64.8,
      69.6
    ],
    "en": [
      "last video about Syslog I mentioned&nbsp; the console line and the VTY lines.&nbsp;&nbsp;"
    ],
    "ru": [
      "последнее видео о Syslog, о котором я упоминал & nbsp; линия консоли и линии VTY. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      69.6,
      74.24
    ],
    "en": [
      "So, I want to take the opportunity to explain&nbsp; more about the console line and how you can&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я хочу воспользоваться возможностью, чтобы объяснить & nbsp; подробнее о консоли и о том, как & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      74.24,
      80.88
    ],
    "en": [
      "make it more secure. Then I’ll explain the&nbsp; management IP address on Layer 2 switches.&nbsp;&nbsp;"
    ],
    "ru": [
      "сделать его более безопасным. Затем я объясню, что такое & nbsp; IP-адрес управления на коммутаторах уровня 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      80.88,
      85.44
    ],
    "en": [
      "Layer 2 switches don’t route packets and&nbsp; don’t build a routing table, however you&nbsp;&nbsp;"
    ],
    "ru": [
      "Коммутаторы уровня 2 не маршрутизируют пакеты и & nbsp; не составляйте таблицу маршрутизации, однако вы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      85.44,
      92.32
    ],
    "en": [
      "can configure a management IP address on them so&nbsp; that you can remotely connect to them via SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "может настроить для них IP-адрес управления, чтобы & nbsp; что вы можете удаленно подключаться к ним через SSH. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      92.32,
      97.44
    ],
    "en": [
      "Then I will introduce Telnet, which is a&nbsp; protocol similar to SSH, but it’s simpler&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я представлю Telnet, который является & nbsp; протокол похож на SSH, но проще & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      97.44,
      104.24000000000001
    ],
    "en": [
      "and less-secure. Finally, the main topic of&nbsp; the video, SSH. A lot of topics to cover,&nbsp;&nbsp;"
    ],
    "ru": [
      "и менее безопасный. Наконец, основная тема & nbsp; видео, SSH. Множество тем для обсуждения, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      104.24000000000001,
      109.68
    ],
    "en": [
      "but the first few topics shouldn’t take too long&nbsp; to go through. As always, watch until the end for&nbsp;&nbsp;"
    ],
    "ru": [
      "но первые несколько тем не должны занять слишком много времени & nbsp; пройти через. Как всегда, следите за & nbsp; & nbsp; до конца."
    ]
  },
  {
    "time": [
      109.68,
      117.28
    ],
    "en": [
      "a bonus practice question from Boson Software’s&nbsp; ExSim, the best practice exams for the CCNA."
    ],
    "ru": [
      "вопрос о бонусной практике от & nbsp; ExSim, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      117.28,
      123.28
    ],
    "en": [
      "First, console port security. By default,&nbsp; no password is needed to access the CLI of&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, безопасность консольного порта. По умолчанию & nbsp; для доступа к интерфейсу командной строки & nbsp; & nbsp; пароль не требуется."
    ]
  },
  {
    "time": [
      123.28,
      129.36
    ],
    "en": [
      "a Cisco IOS device via the console port.&nbsp; You can take a new device out of the box,&nbsp;&nbsp;"
    ],
    "ru": [
      "устройство Cisco IOS через консольный порт. Вы можете достать новое устройство из коробки, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      129.36,
      135.44
    ],
    "en": [
      "use a console cable to connect your laptop to&nbsp; it, and then start configuring it in the CLI.&nbsp;&nbsp;"
    ],
    "ru": [
      "используйте консольный кабель для подключения ноутбука к & nbsp; его, а затем начните настраивать его в интерфейсе командной строки. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      135.44,
      140.24
    ],
    "en": [
      "However, you can configure a password on the&nbsp; console line. The console line is where you&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако вы можете настроить пароль на & nbsp; консольная линия. Строка консоли - это место, где вы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      140.24,
      145.92000000000002
    ],
    "en": [
      "configure all settings related to console port&nbsp; connections. When you do this, a user will have to&nbsp;&nbsp;"
    ],
    "ru": [
      "настроить все параметры, связанные с консольным портом & nbsp; соединения. Когда вы это сделаете, пользователю придется & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      145.92000000000002,
      152.24
    ],
    "en": [
      "enter a password to access the CLI via the console&nbsp; port. Let’s get right into the configurations. To&nbsp;&nbsp;"
    ],
    "ru": [
      "введите пароль для доступа к интерфейсу командной строки через консоль & nbsp; порт. Давайте перейдем к настройкам. Чтобы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      152.24,
      158.4
    ],
    "en": [
      "configure the console line, use the command&nbsp; LINE CONSOLE 0 from global config mode.&nbsp;&nbsp;"
    ],
    "ru": [
      "настройте консольную строку, используйте команду & nbsp; LINE CONSOLE 0 из режима глобальной конфигурации. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      158.4,
      163.76
    ],
    "en": [
      "There is only a single console line, so the&nbsp; number is always 0. What does it mean to have&nbsp;&nbsp;"
    ],
    "ru": [
      "Есть только одна консольная строка, поэтому & nbsp; число всегда равно 0. Что значит иметь & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      163.76,
      169.76
    ],
    "en": [
      "only a single console line? It means there can&nbsp; only be a single console connection at once.&nbsp;&nbsp;"
    ],
    "ru": [
      "только одна консольная строка? Это означает, что там можно & nbsp; может быть только одно консольное соединение одновременно. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      169.76,
      174.32
    ],
    "en": [
      "You can’t have multiple people configuring the&nbsp; device at the same time via separate console&nbsp;&nbsp;"
    ],
    "ru": [
      "Не допускается, чтобы несколько человек настраивали & nbsp; устройство одновременно через отдельную консоль & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      174.32,
      182.64
    ],
    "en": [
      "ports. Only one user can connect at a time. Then&nbsp; the command is PASSWORD, followed by the password.&nbsp;&nbsp;"
    ],
    "ru": [
      "порты. Только один пользователь может подключаться одновременно. Тогда & nbsp; команда - ПАРОЛЬ, за которым следует пароль. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      182.64,
      186.96
    ],
    "en": [
      "But configuring a password isn’t enough,&nbsp; you have to use the LOGIN command, which&nbsp;&nbsp;"
    ],
    "ru": [
      "Но настроить пароль недостаточно, & nbsp; вам нужно использовать команду LOGIN, которая & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      186.96,
      193.44
    ],
    "en": [
      "tells the device to require a user to enter the&nbsp; password to access the CLI via the console port.&nbsp;&nbsp;"
    ],
    "ru": [
      "сообщает устройству, чтобы он потребовал от пользователя ввести & nbsp; пароль для доступа к интерфейсу командной строки через консольный порт. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      193.44,
      199.44
    ],
    "en": [
      "That’s it, now a password will be required&nbsp; to access the console port. To demonstrate,&nbsp;&nbsp;"
    ],
    "ru": [
      "Все, теперь потребуется пароль & nbsp; для доступа к консольному порту. Чтобы продемонстрировать, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      199.44,
      206.07999999999998
    ],
    "en": [
      "I used END and EXIT to terminate the console&nbsp; connection. Then I pressed enter to connect again,&nbsp;&nbsp;"
    ],
    "ru": [
      "Я использовал END и EXIT, чтобы завершить работу консоли & nbsp; связь. Затем я нажал Enter, чтобы подключиться снова, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      206.07999999999998,
      213.36
    ],
    "en": [
      "and I was asked for a password. I entered the&nbsp; password of ccna, and I was able to connect. Note&nbsp;&nbsp;"
    ],
    "ru": [
      "и меня попросили ввести пароль. Я вошел в & nbsp; пароль ccna, и я смог подключиться. Примечание & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      213.36,
      220.07999999999998
    ],
    "en": [
      "that the password isn’t displayed as you type it,&nbsp; so the password can’t be seen by anyone nearby."
    ],
    "ru": [
      "что пароль не отображается при вводе, & nbsp; так что пароль не будет виден никому поблизости."
    ]
  },
  {
    "time": [
      220.07999999999998,
      224.64
    ],
    "en": [
      "Alternatively, you can configure the console&nbsp; line to require users to login using one&nbsp;&nbsp;"
    ],
    "ru": [
      "Кроме того, вы можете настроить консоль & nbsp; строка, требующая от пользователей входа в систему с помощью одного & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      224.64,
      229.44
    ],
    "en": [
      "of the configured usernames on the device.&nbsp; This is different than the previous example,&nbsp;&nbsp;"
    ],
    "ru": [
      "настроенных имен пользователей на устройстве. Это отличается от предыдущего примера & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      229.44,
      234.56
    ],
    "en": [
      "in which we configured a specific password&nbsp; just for the console line. So, here are the&nbsp;&nbsp;"
    ],
    "ru": [
      "в котором мы настроили конкретный пароль & nbsp; только для консоли. Итак, вот & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      234.56,
      242.48
    ],
    "en": [
      "configurations. First, I created a username,&nbsp; jeremy, and gave it a secret password of ccnp.&nbsp;&nbsp;"
    ],
    "ru": [
      "конфигурации. Сначала я создал имя пользователя & nbsp; Джереми и дал ему секретный пароль ccnp. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      242.48,
      248.8
    ],
    "en": [
      "I once again used LINE CONSOLE 0 to configure&nbsp; the console line. Then I used the command LOGIN&nbsp;&nbsp;"
    ],
    "ru": [
      "Я снова использовал LINE CONSOLE 0 для настройки & nbsp; консольная линия. Затем я использовал команду ВХОД & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      248.8,
      254.64
    ],
    "en": [
      "LOCAL. This tells the device to require a user&nbsp; to login using one of the configured usernames&nbsp;&nbsp;"
    ],
    "ru": [
      "МЕСТНЫЙ. Это указывает устройству требовать от пользователя & nbsp; для входа в систему с одним из настроенных имен пользователей & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      254.64,
      260.64
    ],
    "en": [
      "on the device. So, instead of logging in using&nbsp; the password configured on the console line,&nbsp;&nbsp;"
    ],
    "ru": [
      "на устройстве. Итак, вместо входа в систему с помощью & nbsp; пароль, заданный в строке консоли, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      260.64,
      265.84
    ],
    "en": [
      "the user will have to use a username and&nbsp; password. By the way, here’s the current&nbsp;&nbsp;"
    ],
    "ru": [
      "пользователь должен будет использовать имя пользователя и & nbsp; пароль. Кстати, вот текущий & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      265.84,
      272.0
    ],
    "en": [
      "configuration of R1’s console line. Notice that&nbsp; the password of ccna that I configured previously&nbsp;&nbsp;"
    ],
    "ru": [
      "конфигурация консольной линии R1. Обратите внимание, что & nbsp; пароль ccna, который я настроил ранее & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      272.0,
      278.48
    ],
    "en": [
      "is still there, however I changed the login mode&nbsp; from LOGIN to LOGIN LOCAL, so the console line’s&nbsp;&nbsp;"
    ],
    "ru": [
      "все еще существует, однако я изменил режим входа & nbsp; из LOGIN в LOGIN LOCAL, поэтому в строке консоли & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      278.48,
      285.6
    ],
    "en": [
      "password of ccna can no longer be used. The&nbsp; user must login using an account on the device.&nbsp;&nbsp;"
    ],
    "ru": [
      "пароль ccna больше не может быть использован. & Nbsp; пользователь должен войти в систему, используя учетную запись на устройстве. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      285.6,
      290.8
    ],
    "en": [
      "So, I logged out of the connection pressed&nbsp; enter, and as you can see I was asked for a&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я вышел из соединения нажал & nbsp; введите, и, как вы можете видеть, меня попросили & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      290.8,
      296.96
    ],
    "en": [
      "username and password, not just a password.&nbsp; Okay, I want to show you one more command.&nbsp;&nbsp;"
    ],
    "ru": [
      "имя пользователя и пароль, а не только пароль. & nbsp; Хорошо, я хочу показать вам еще одну команду. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      296.96,
      302.72
    ],
    "en": [
      "That is the EXEC-TIMEOUT command. This will cause&nbsp; the device to log the user out after a certain&nbsp;&nbsp;"
    ],
    "ru": [
      "Это команда EXEC-TIMEOUT. Это вызовет & nbsp; устройство для выхода пользователя из системы после определенного & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      302.72,
      309.44
    ],
    "en": [
      "period of inactivity, 3 minutes and 30 seconds&nbsp; in this case. This is a good security practice,&nbsp;&nbsp;"
    ],
    "ru": [
      "период бездействия, 3 минуты 30 секунд & nbsp; в этом случае. Это хорошая практика безопасности, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      309.44,
      315.2
    ],
    "en": [
      "in case you leave your desk but forget&nbsp; to log out of the console connection."
    ],
    "ru": [
      "на случай, если вы выйдете из-за стола, но забудете & nbsp; для выхода из консольного соединения."
    ]
  },
  {
    "time": [
      315.2,
      321.6
    ],
    "en": [
      "Okay, that’s all for console line security. Now&nbsp; let’s move on to remote management of devices.&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно, это все для безопасности линии консоли. Теперь & nbsp; перейдем к удаленному управлению устройствами. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      321.6,
      327.28
    ],
    "en": [
      "Routers and Layer 3 switches have IP addresses you&nbsp; can use to connect remotely to manage the devices,&nbsp;&nbsp;"
    ],
    "ru": [
      "Маршрутизаторы и коммутаторы уровня 3 имеют IP-адреса, которые вы & nbsp; можно использовать для удаленного подключения для управления устройствами, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      327.28,
      333.12
    ],
    "en": [
      "but what about Layer 2 switches? Layer 2 switches&nbsp; don’t perform packet routing and don’t build a&nbsp;&nbsp;"
    ],
    "ru": [
      "а как насчет переключателей уровня 2? Коммутаторы уровня 2 & nbsp; не выполняйте маршрутизацию пакетов и не создавайте & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      333.12,
      339.04
    ],
    "en": [
      "routing table. They aren’t IP routing aware. Their&nbsp; purpose is simply to forward frames in the LAN,&nbsp;&nbsp;"
    ],
    "ru": [
      "таблица маршрутизации. Они не знают IP-маршрутизацию. Их & nbsp; цель - просто пересылать кадры в LAN, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      339.04,
      345.44
    ],
    "en": [
      "as you already know. However, you can actually&nbsp; assign an IP address to an SVI, a switch virtual&nbsp;&nbsp;"
    ],
    "ru": [
      "как ты уже знаешь. Однако на самом деле вы можете & nbsp; назначить IP-адрес для SVI, виртуального коммутатора & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      345.44,
      352.96
    ],
    "en": [
      "interface, to allow remote connections to the CLI&nbsp; of the switch, for example using Telnet or SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "интерфейс, позволяющий удаленно подключаться к CLI & nbsp; коммутатора, например, с помощью Telnet или SSH. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      352.96,
      359.04
    ],
    "en": [
      "For the rest of this video, I’ll use this&nbsp; network topology. The network admin is using PC2,&nbsp;&nbsp;"
    ],
    "ru": [
      "В оставшейся части этого видео я буду использовать этот & nbsp; топология сети. Сетевой администратор использует ПК2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      359.04,
      363.28
    ],
    "en": [
      "and needs to be able to connect to all of the&nbsp; devices in the network to configure them, without&nbsp;&nbsp;"
    ],
    "ru": [
      "и должна иметь возможность подключаться ко всем & nbsp; устройства в сети для их настройки без & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      363.28,
      370.64
    ],
    "en": [
      "having to travel to different offices. To allow&nbsp; this, the layer 2 switches need an IP address. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "приходиться ездить по разным офисам. Чтобы разрешить & nbsp; для этого коммутаторам уровня 2 нужен IP-адрес. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      370.64,
      377.36
    ],
    "en": [
      "here’s how you can configure it. First, configure&nbsp; the IP address on the SVI in the same way as on a&nbsp;&nbsp;"
    ],
    "ru": [
      "вот как вы можете его настроить. Сначала настройте & nbsp; IP-адрес на SVI так же, как на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      377.36,
      386.16
    ],
    "en": [
      "multilayer switch. INTERFACE VLAN, followed by the&nbsp; VLAN ID. Then configure the IP address. Finally,&nbsp;&nbsp;"
    ],
    "ru": [
      "многослойный переключатель. INTERFACE VLAN, за которым следует & nbsp; Идентификатор VLAN. Затем настройте IP-адрес. Наконец, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      386.16,
      392.88
    ],
    "en": [
      "enable the interface if its shutdown by default.&nbsp; So, the SVI is configured. However there’s one&nbsp;&nbsp;"
    ],
    "ru": [
      "включите интерфейс, если он отключен по умолчанию. & nbsp; Итак, SVI настроен. Однако есть один & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      392.88,
      398.56
    ],
    "en": [
      "more step you need to configure to allow a Layer&nbsp; 2 switch to communicate with devices outside of&nbsp;&nbsp;"
    ],
    "ru": [
      "еще один шаг, который вам нужно настроить, чтобы разрешить Layer & nbsp; 2 для связи с устройствами за пределами & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      398.56,
      406.72
    ],
    "en": [
      "its local LAN. Use the IP DEFAULT-GATEWAY command&nbsp; to configure the default gateway of the switch.&nbsp;&nbsp;"
    ],
    "ru": [
      "его локальная локальная сеть. Используйте команду IP DEFAULT-GATEWAY & nbsp; для настройки шлюза коммутатора по умолчанию. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      406.72,
      413.2
    ],
    "en": [
      "PC2 isn’t in the same LAN, so SW1 can’t&nbsp; send network traffic directly to PC2.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПК2 не находится в одной локальной сети, поэтому SW1 не может & nbsp; отправлять сетевой трафик напрямую на ПК2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      413.2,
      418.64
    ],
    "en": [
      "It has to send the traffic to a router, which&nbsp; will then route the packets to their destination.&nbsp;&nbsp;"
    ],
    "ru": [
      "Он должен отправлять трафик на маршрутизатор, который & nbsp; затем направит пакеты к месту назначения. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      418.64,
      423.76
    ],
    "en": [
      "It’s like configuring a default route, however&nbsp; Layer 2 switches don’t have a routing table&nbsp;&nbsp;"
    ],
    "ru": [
      "Это похоже на настройку маршрута по умолчанию, однако & nbsp; Коммутаторы уровня 2 не имеют таблицы маршрутизации & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      423.76,
      428.56
    ],
    "en": [
      "so you have to use this command to&nbsp; specify the default gateway instead.&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому вы должны использовать эту команду, чтобы & nbsp; вместо этого укажите шлюз по умолчанию. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      428.56,
      433.28
    ],
    "en": [
      "Okay, that’s all the configuration needed&nbsp; for a Layer 2 switch’s management IP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это вся необходимая конфигурация & nbsp; для IP-адреса управления коммутатора уровня 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      433.28,
      439.44
    ],
    "en": [
      "To demonstrate Telnet and SSH,&nbsp; I’ll continue configuring SW1."
    ],
    "ru": [
      "Чтобы продемонстрировать Telnet и SSH, & nbsp; Я продолжу настройку SW1."
    ]
  },
  {
    "time": [
      439.44,
      445.12
    ],
    "en": [
      "First up, Telnet. It’s not commonly used today&nbsp; due to a lack of security, but it’s good to know&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, Telnet. Сегодня это обычно не используется & nbsp; из-за недостаточной безопасности, но полезно знать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      445.12,
      453.04
    ],
    "en": [
      "before looking at SSH. Telnet, teletype network,&nbsp; is a protocol used to remotely access the CLI of&nbsp;&nbsp;"
    ],
    "ru": [
      "прежде чем смотреть на SSH. Telnet, сеть телетайпа, & nbsp; - это протокол, используемый для удаленного доступа к интерфейсу командной строки & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      453.04,
      459.44
    ],
    "en": [
      "a remote host. So instead of plugging your PC&nbsp; directly into the device with a console cable,&nbsp;&nbsp;"
    ],
    "ru": [
      "удаленный хост. Поэтому вместо того, чтобы подключать компьютер к сети & nbsp; прямо в устройство с помощью консольного кабеля, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      459.44,
      465.28
    ],
    "en": [
      "you can connect to the device on a remote&nbsp; network. Telnet was developed in 1969, so it’s&nbsp;&nbsp;"
    ],
    "ru": [
      "вы можете подключиться к устройству удаленно & nbsp; сеть. Telnet был разработан в 1969 году, поэтому & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      465.28,
      472.24
    ],
    "en": [
      "a very old protocol. It has been largely, almost&nbsp; entirely, replaced by SSH, which is more secure.&nbsp;&nbsp;"
    ],
    "ru": [
      "очень старый протокол. Это было в значительной степени, почти & nbsp; полностью заменен на SSH, что является более безопасным. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      472.24,
      478.72
    ],
    "en": [
      "However SSH was developed in 1995,&nbsp; so Telnet had many years of use.&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако SSH был разработан в 1995 году, & nbsp; так что Telnet использовался много лет. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      478.72,
      484.16
    ],
    "en": [
      "Telnet sends data in plain text, no&nbsp; encryption. So if someone uses a tool&nbsp;&nbsp;"
    ],
    "ru": [
      "Telnet отправляет данные в виде обычного текста, без & nbsp; шифрование. Итак, если кто-то использует инструмент & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      484.16,
      491.04
    ],
    "en": [
      "like Wireshark to capture the traffic, they can&nbsp; read exactly what was sent. Let me demonstrate.&nbsp;&nbsp;"
    ],
    "ru": [
      "как и Wireshark для захвата трафика, они могут & nbsp; читайте именно то, что было отправлено. Позвольте мне продемонстрировать. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      491.04,
      497.52
    ],
    "en": [
      "Up top is a Telnet packet sent from R1, inside&nbsp; it says ‘password’. This is the password prompt&nbsp;&nbsp;"
    ],
    "ru": [
      "Вверху находится пакет Telnet, отправленный с маршрутизатора R1 внутри & nbsp; там написано «пароль». Это запрос пароля & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      497.52,
      505.6
    ],
    "en": [
      "the CLI displays when trying to login. I entered&nbsp; the password, and it was sent in a packet to R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "CLI отображается при попытке входа в систему. Я вошел в & nbsp; пароль, и он был отправлен пакетом на маршрутизатор R1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      505.6,
      512.56
    ],
    "en": [
      "But the password is displayed in plain text,&nbsp; ccnp, no encryption. So, anyone in the middle&nbsp;&nbsp;"
    ],
    "ru": [
      "Но пароль отображается в виде обычного текста, & nbsp; ccnp, без шифрования. Итак, любой, кто находится в середине & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      512.56,
      516.88
    ],
    "en": [
      "who is able to capture the traffic like I did&nbsp; here will be able to read all of the traffic&nbsp;&nbsp;"
    ],
    "ru": [
      "кто может захватывать трафик, как я & nbsp; здесь можно будет прочитать весь трафик & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      516.88,
      523.68
    ],
    "en": [
      "between my device and R1. The username, the&nbsp; password, and all of the traffic after that.&nbsp;&nbsp;"
    ],
    "ru": [
      "между моим устройством и R1. Имя пользователя, & nbsp; пароль и весь трафик после него. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      523.68,
      529.28
    ],
    "en": [
      "That is definitely not secure, and&nbsp; that’s why SSH is used instead of Telnet.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это определенно небезопасно, и & nbsp; поэтому вместо Telnet используется SSH. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      529.28,
      535.6
    ],
    "en": [
      "Before moving on to Telnet configuration, I want&nbsp; to point out one more thing. The Telnet server,&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем перейти к настройке Telnet, я хочу, чтобы & nbsp; чтобы указать еще на одну вещь. Сервер Telnet, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      535.6,
      541.68
    ],
    "en": [
      "that’s the device being connected to, R1 in this&nbsp; case, listens for Telnet traffic on TCP port&nbsp;&nbsp;"
    ],
    "ru": [
      "это устройство, к которому подключается R1 в этом & nbsp; случае, прослушивает трафик Telnet на TCP-порте & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      541.68,
      550.24
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
      541.68,
      550.24
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
      550.24,
      555.52
    ],
    "en": [
      "make sure you remember that port number. And&nbsp; by the way, the Telnet client is the device&nbsp;&nbsp;"
    ],
    "ru": [
      "убедитесь, что вы помните этот номер порта. И & NBSP; кстати, клиент Telnet - это устройство & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      555.52,
      563.36
    ],
    "en": [
      "that is connecting, and as I just said the Telnet&nbsp; server is the device that is being connected to."
    ],
    "ru": [
      "это соединение, и, как я только что сказал, Telnet & nbsp; server - это устройство, к которому выполняется подключение."
    ]
  },
  {
    "time": [
      563.36,
      568.32
    ],
    "en": [
      "Here’s how to configure a device so that&nbsp; you can use Telnet to connect to it.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот как настроить устройство, чтобы & nbsp; для подключения к нему можно использовать Telnet. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      568.32,
      573.44
    ],
    "en": [
      "First, you should always configure an enable&nbsp; secret, but if you haven’t make sure you do.&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, вы всегда должны настраивать включение & nbsp; секрет, но если вы еще не сделали этого. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      573.44,
      578.32
    ],
    "en": [
      "You won’t be able to access privileged exec mode&nbsp; when connecting via Telnet if an enable secret&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы не сможете получить доступ к привилегированному режиму выполнения & nbsp; при подключении через Telnet, если включен секретный & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      578.32,
      585.12
    ],
    "en": [
      "isn’t configured. I also configured a username and&nbsp; password, since I will later configure LOGIN LOCAL&nbsp;&nbsp;"
    ],
    "ru": [
      "не настроен. Я также настроил имя пользователя и & nbsp; пароль, так как позже я настрою ВХОД ЛОКАЛЬНЫЙ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      585.12,
      590.88
    ],
    "en": [
      "mode. This isn’t necessary, but you can configure&nbsp; an ACL to limit which devices can connect to the&nbsp;&nbsp;"
    ],
    "ru": [
      "режим. В этом нет необходимости, но вы можете настроить & nbsp; ACL для ограничения того, какие устройства могут подключаться к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      590.88,
      601.04
    ],
    "en": [
      "VTY lines of the device. And then use the command&nbsp; LINE VTY 0 15. Telnet and SSH access is configured&nbsp;&nbsp;"
    ],
    "ru": [
      "VTY линии устройства. А затем используйте команду & nbsp; LINE VTY 0 15. Доступ по Telnet и SSH настроен & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      601.04,
      608.96
    ],
    "en": [
      "on the VTY lines. There are 16 lines available,&nbsp; so up to 16 users can be connected at once.&nbsp;&nbsp;"
    ],
    "ru": [
      "на линиях VTY. Доступно 16 строк, & nbsp; так что одновременно можно подключить до 16 пользователей. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      608.96,
      617.84
    ],
    "en": [
      "LINE VTY 0 15 means you are configuring all lines,&nbsp; from 0 through 15. This is recommended, so all of&nbsp;&nbsp;"
    ],
    "ru": [
      "LINE VTY 0 15 означает, что вы настраиваете все линии, & nbsp; от 0 до 15. Это рекомендуется, поэтому все & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      617.84,
      626.08
    ],
    "en": [
      "the VTY lines have the same configuration.&nbsp; By the way, VTY stands for Virtual TeleType.&nbsp;&nbsp;"
    ],
    "ru": [
      "линии VTY имеют одинаковую конфигурацию. Кстати, VTY расшифровывается как Virtual TeleType. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      626.08,
      632.4
    ],
    "en": [
      "Okay, first I configured LOGIN LOCAL as well as&nbsp; EXEC-TIMEOUT. I think the default exec timeout&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, сначала я настроил ЛОКАЛЬНЫЙ ВХОД, а также & nbsp; EXEC-TIMEOUT. Я думаю, что тайм-аут выполнения по умолчанию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      632.4,
      639.04
    ],
    "en": [
      "depends on the device. In this case it was&nbsp; 10 minutes, but I shortened it to 5 minutes.&nbsp;&nbsp;"
    ],
    "ru": [
      "зависит от устройства. В данном случае это был & nbsp; 10 минут, но я сократил их до 5 минут."
    ]
  },
  {
    "time": [
      639.04,
      643.12
    ],
    "en": [
      "Okay, next I used the command&nbsp; TRANSPORT INPUT TELNET.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, затем я использовал команду & nbsp; ТРАНСПОРТНЫЙ ВВОД TELNET. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      643.12,
      647.84
    ],
    "en": [
      "This is how you configure what kind of&nbsp; connections to the VTY lines are allowed.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот как вы настраиваете, какие & nbsp; подключения к линиям VTY разрешены. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      647.84,
      653.84
    ],
    "en": [
      "TRANSPORT INPUT TELNET allows only Telnet&nbsp; connections. You could also configure TRANSPORT&nbsp;&nbsp;"
    ],
    "ru": [
      "ВХОД ТРАНСПОРТА TELNET позволяет использовать только Telnet & nbsp; соединения. Вы также можете настроить ТРАНСПОРТ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      653.84,
      662.0
    ],
    "en": [
      "INPUT SSH to allow only SSH connections, or&nbsp; TRANSPORT INPUT TELNET SSH to allow both.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВВЕДИТЕ SSH, чтобы разрешить только SSH-соединения, или & nbsp; ТРАНСПОРТИРОВКА ВВОДА TELNET SSH, чтобы разрешить оба. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      662.0,
      667.36
    ],
    "en": [
      "TRANSPORT INPUT ALL allows all connections,&nbsp; there are some other protocols aside from Telnet&nbsp;&nbsp;"
    ],
    "ru": [
      "TRANSPORT INPUT ALL разрешает все соединения, & nbsp; кроме Telnet есть и другие протоколы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      667.36,
      675.04
    ],
    "en": [
      "and SSH. Or, you can configure TRANSPORT INPUT&nbsp; NONE to allow no connections to the VTY lines.&nbsp;&nbsp;"
    ],
    "ru": [
      "и SSH. Или вы можете настроить ВХОД ТРАНСПОРТА & nbsp; NONE, чтобы не разрешать подключения к линиям VTY. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      675.04,
      680.64
    ],
    "en": [
      "The device I’m using for this demo defaults to&nbsp; TRANSPORT INPUT NONE, but I think many devices&nbsp;&nbsp;"
    ],
    "ru": [
      "Устройство, которое я использую для этой демонстрации, по умолчанию & nbsp; ВХОД ТРАНСПОРТА НЕТ, но я думаю, что многие устройства & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      680.64,
      689.44
    ],
    "en": [
      "default to TRANSPORT INPUT ALL. Finally, I applied&nbsp; the ACL to the VTY lines. This means that only PC2&nbsp;&nbsp;"
    ],
    "ru": [
      "по умолчанию - ТРАНСПОРТИРОВАТЬ ВСЕ. Наконец, я применил & nbsp; ACL к линиям VTY. Это означает, что только ПК2 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      689.44,
      696.56
    ],
    "en": [
      "will be able to connect to SW1 using Telnet. Note&nbsp; that this only applies to VTY line connections,&nbsp;&nbsp;"
    ],
    "ru": [
      "сможет подключиться к SW1 с помощью Telnet. Примечание & nbsp; что это применимо только к соединениям линии VTY, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      696.56,
      703.68
    ],
    "en": [
      "other devices will still be able to communicate&nbsp; with SW1, send it pings, etc. As a reminder,&nbsp;&nbsp;"
    ],
    "ru": [
      "другие устройства по-прежнему смогут обмениваться данными & nbsp; с SW1, отправьте ему пинги и т. д. Напоминаем, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      703.68,
      709.84
    ],
    "en": [
      "although the command to apply the ACL to the VTY&nbsp; lines is ACCESS-CLASS, the command to apply an&nbsp;&nbsp;"
    ],
    "ru": [
      "хотя команда применить ACL к VTY & nbsp; строк - это ACCESS-CLASS, команда для применения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      709.84,
      716.32
    ],
    "en": [
      "ACL to an interface is IP ACCESS-GROUP. And&nbsp; the command to actually create the ACL is&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL для интерфейса - это IP ACCESS-GROUP. И & NBSP; команда для фактического создания ACL - & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      716.32,
      723.44
    ],
    "en": [
      "ACCESS-LIST or IP ACCESS-LIST. Try not&nbsp; to confuse those commands, ACCESS-CLASS,&nbsp;&nbsp;"
    ],
    "ru": [
      "СПИСОК ДОСТУПА или СПИСОК ДОСТУПА IP. Не пытайтесь & nbsp; чтобы запутать эти команды, ACCESS-CLASS, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      723.44,
      728.72
    ],
    "en": [
      "IP ACCESS-GROUP, and&nbsp; ACCESS-LIST or IP ACCESS-LIST."
    ],
    "ru": [
      "IP ACCESS-GROUP и & nbsp; СПИСОК ДОСТУПА или СПИСОК ДОСТУПА IP."
    ]
  },
  {
    "time": [
      728.72,
      735.6
    ],
    "en": [
      "To verify the configuration, I first tried to ping&nbsp; SW1 from R2. The ping was successful. However,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы проверить конфигурацию, я сначала попытался пропинговать & nbsp; SW1 от R2. Пинг прошел успешно. Однако & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      735.6,
      742.0
    ],
    "en": [
      "when I tried to telnet to SW1, I got a message&nbsp; saying ‘connection refused by remote host’.&nbsp;&nbsp;"
    ],
    "ru": [
      "когда я попытался подключиться к SW1 по Telnet, я получил сообщение & nbsp; говорит \"соединение отклонено удаленным хостом\". & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      742.0,
      749.52
    ],
    "en": [
      "That’s because of the ACL I applied to SW1’s VTY&nbsp; lines. Only PC2 should be able to Telnet to SW1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Это из-за ACL, который я применил к VTY & nbsp; SW1. линий. Только ПК2 должен иметь возможность подключаться по Telnet к SW1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      749.52,
      756.24
    ],
    "en": [
      "So, I did Telnet from PC2, and it worked. Now,&nbsp; one last thing I want to point out is this.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я сделал Telnet с ПК2, и это сработало. Теперь & nbsp; И последнее, что я хочу отметить, это следующее. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      756.24,
      761.44
    ],
    "en": [
      "Notice how the VTY line configurations are&nbsp; displayed in the running config of the device.&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание на конфигурации линий VTY & nbsp; отображается в текущей конфигурации устройства. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      761.44,
      766.16
    ],
    "en": [
      "The first 5 lines are displayed&nbsp; above, and the remaining 11 are below.&nbsp;&nbsp;"
    ],
    "ru": [
      "Отображаются первые 5 строк & nbsp; вверху, а остальные 11 - внизу. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      766.16,
      772.8
    ],
    "en": [
      "I believe this is just a result of the fact that&nbsp; old versions of IOS only had 5 VTY lines. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Я считаю, что это просто результат того, что & nbsp; в старых версиях IOS было всего 5 строк VTY. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      772.8,
      776.72
    ],
    "en": [
      "even if you configure all 16 lines at&nbsp; once, they display separately in the&nbsp;&nbsp;"
    ],
    "ru": [
      "даже если вы настроите все 16 линий в & nbsp; один раз они отображаются отдельно в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      776.72,
      783.52
    ],
    "en": [
      "config. That’s just a bit of trivia, it doesn’t&nbsp; have any effect on the operation of the lines.&nbsp;&nbsp;"
    ],
    "ru": [
      "config. Это просто мелочь, это не & nbsp; влияют на работу линий. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      783.52,
      790.16
    ],
    "en": [
      "So, that was a quick look at Telnet. Finally&nbsp; let’s go to the main topic of the video, SSH."
    ],
    "ru": [
      "Итак, это был быстрый взгляд на Telnet. Наконец & nbsp; перейдем к главной теме видео - SSH."
    ]
  },
  {
    "time": [
      790.16,
      796.56
    ],
    "en": [
      "SSH, which stands for Secure Shell, was developed&nbsp; in 1995 to replace less secure protocols like&nbsp;&nbsp;"
    ],
    "ru": [
      "SSH, что означает Secure Shell, был разработан & nbsp; в 1995 году, чтобы заменить менее безопасные протоколы, такие как & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      796.56,
      803.44
    ],
    "en": [
      "Telnet. By the way, if you’re wondering what&nbsp; a ‘shell’ is, here’s Wikipedia’s definition.&nbsp;&nbsp;"
    ],
    "ru": [
      "Telnet. Кстати, если вам интересно, что & nbsp; \"оболочка\" - это определение из Википедии. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      803.44,
      808.96
    ],
    "en": [
      "A shell is a computer program which exposes the&nbsp; operating system’s services to a human user or&nbsp;&nbsp;"
    ],
    "ru": [
      "Оболочка - это компьютерная программа, которая предоставляет доступ к & nbsp; услуги операционной системы пользователю-человеку или & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      808.96,
      818.08
    ],
    "en": [
      "other program. So, any time you’re accessing the&nbsp; CLI of a device, that is a shell. SSHv2, a major&nbsp;&nbsp;"
    ],
    "ru": [
      "другая программа. Итак, каждый раз, когда вы открываете & nbsp; CLI устройства, то есть оболочки. SSHv2, основной & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      818.08,
      826.0
    ],
    "en": [
      "revision of SSHv1, was released in 2006. Version&nbsp; 2 is more secure, so it should be used whenever&nbsp;&nbsp;"
    ],
    "ru": [
      "ревизия SSHv1, выпущенная в 2006 году. Версия & nbsp; 2 более безопасен, поэтому его следует использовать всякий раз, когда & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      826.0,
      834.16
    ],
    "en": [
      "possible. If a device supports both version 1&nbsp; and version 2, it is said to run version 1.99.&nbsp;&nbsp;"
    ],
    "ru": [
      "возможный. Если устройство поддерживает обе версии & nbsp; и версия 2, как говорят, работает с версией 1.99. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      834.16,
      841.04
    ],
    "en": [
      "Note that 1.99 isn’t actually a version of SSH, it&nbsp; just means that the device supports both version 1&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что 1.99 на самом деле не является версией SSH, это & ​​nbsp; просто означает, что устройство поддерживает обе версии & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      841.04,
      848.64
    ],
    "en": [
      "and version 2. SSH provides security features&nbsp; such as data encryption and authentication.&nbsp;&nbsp;"
    ],
    "ru": [
      "и версия 2. SSH предоставляет функции безопасности & nbsp; такие как шифрование данных и аутентификация. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      848.64,
      852.88
    ],
    "en": [
      "You’ll learn more about those terms&nbsp; in the security section of the course.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы узнаете больше об этих условиях & nbsp; в разделе безопасности курса. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      852.88,
      857.84
    ],
    "en": [
      "But for example, here’s an SSH packet&nbsp; that I captured in Wireshark. Look at&nbsp;&nbsp;"
    ],
    "ru": [
      "Но, например, вот пакет SSH & nbsp; что я запечатлел в Wireshark. Посмотрите на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      857.84,
      862.96
    ],
    "en": [
      "the encrypted packet section, it’s just&nbsp; a seemingly random string of characters.&nbsp;&nbsp;"
    ],
    "ru": [
      "раздел зашифрованных пакетов, это просто & nbsp; кажущаяся случайной строка символов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      862.96,
      868.88
    ],
    "en": [
      "Only the SSH server and client have the keys to&nbsp; decrypt this packet, so even though I captured&nbsp;&nbsp;"
    ],
    "ru": [
      "Только SSH-сервер и клиент имеют ключи к & nbsp; расшифровать этот пакет, поэтому, хотя я захватил & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      868.88,
      875.04
    ],
    "en": [
      "the packet on the way to its destination, I&nbsp; don’t know what the contents are. By the way,&nbsp;&nbsp;"
    ],
    "ru": [
      "пакет на пути к месту назначения, I & nbsp; не знаю, что это за содержимое. Кстати, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      875.04,
      885.6
    ],
    "en": [
      "SSH uses TCP port 22. So, remember that&nbsp; Telnet uses TCP 23 and SSH uses TCP 22."
    ],
    "ru": [
      "SSH использует TCP-порт 22. Итак, помните, что & nbsp; Telnet использует TCP 23, а SSH - TCP 22."
    ]
  },
  {
    "time": [
      885.6,
      891.2
    ],
    "en": [
      "Before configuring SSH, you should make sure that&nbsp; the version of IOS on your device supports it.&nbsp;&nbsp;"
    ],
    "ru": [
      "Перед настройкой SSH убедитесь, что & nbsp; версия IOS на вашем устройстве поддерживает его. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      891.2,
      897.52
    ],
    "en": [
      "I used the SHOW VERSION command, and here’s&nbsp; the IOS image name. Note the K9 at the end&nbsp;&nbsp;"
    ],
    "ru": [
      "Я использовал команду ПОКАЗАТЬ ВЕРСИЮ, а вот & nbsp; имя образа IOS. Обратите внимание на K9 в конце & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      897.52,
      906.4
    ],
    "en": [
      "that I highlighted. IOS images that support SSH&nbsp; will have K9 in their name. Cisco exports NPE,&nbsp;&nbsp;"
    ],
    "ru": [
      "что я выделил. Образы iOS, поддерживающие SSH & nbsp; в названии будет K9. Cisco экспортирует NPE, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      906.4,
      912.88
    ],
    "en": [
      "No Payload Encryption, IOS images to countries&nbsp; that have restrictions on encryption technologies.&nbsp;&nbsp;"
    ],
    "ru": [
      "Нет шифрования полезной нагрузки, изображения IOS для стран & nbsp; которые имеют ограничения на технологии шифрования. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      912.88,
      918.88
    ],
    "en": [
      "And those NPE IOS images do not support&nbsp; cryptographic features like SSH. Weak forms&nbsp;&nbsp;"
    ],
    "ru": [
      "И эти образы NPE IOS не поддерживают & nbsp; криптографические функции, такие как SSH. Слабые формы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      918.88,
      923.12
    ],
    "en": [
      "of encryption might be supported, but I would&nbsp; have to do more research on that to find out,&nbsp;&nbsp;"
    ],
    "ru": [
      "шифрования может поддерживаться, но я бы & nbsp; необходимо провести дополнительные исследования, чтобы узнать, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      923.12,
      931.84
    ],
    "en": [
      "unfortunately I don’t have access to any NPE IOS&nbsp; images. Another command to use is SHOW IP SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "к сожалению, у меня нет доступа к NPE IOS & nbsp; изображений. Еще одна команда, которую можно использовать - SHOW IP SSH. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      931.84,
      938.08
    ],
    "en": [
      "If your device doesn’t support SSH, it will&nbsp; tell you here. In this case, SSH is supported,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если ваше устройство не поддерживает SSH, оно & nbsp; расскажу здесь. В этом случае поддерживается SSH, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      938.08,
      946.0
    ],
    "en": [
      "but disabled. Notice the version is 1.99,&nbsp; meaning it supports both versions 1 and 2. Now,&nbsp;&nbsp;"
    ],
    "ru": [
      "но отключен. Обратите внимание, что это версия 1.99, & nbsp; это означает, что он поддерживает обе версии 1 и 2. Теперь & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      946.0,
      953.68
    ],
    "en": [
      "here’s a hint about the first step in configuring&nbsp; SSH. Please create RSA keys to enable SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "вот подсказка о первом этапе настройки & nbsp; SSH. Создайте ключи RSA, чтобы включить SSH. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      953.68,
      960.96
    ],
    "en": [
      "RSA keys are cryptographic keys that are essential&nbsp; for the various security features of SSH."
    ],
    "ru": [
      "Ключи RSA - это важные криптографические ключи & nbsp; для различных функций безопасности SSH."
    ]
  },
  {
    "time": [
      960.96,
      966.72
    ],
    "en": [
      "Okay, so after ensuring that the IOS image you’re&nbsp; using supports SSH, you must generate those RSA&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, убедившись, что образ IOS вы & nbsp; используя поддержку SSH, вы должны сгенерировать эти RSA & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      966.72,
      973.76
    ],
    "en": [
      "keys. The keys are used for data encryption and&nbsp; decryption, authentication, etc. Here’s how to&nbsp;&nbsp;"
    ],
    "ru": [
      "ключи. Ключи используются для шифрования данных и & nbsp; расшифровка, аутентификация и т. д. Вот как & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      973.76,
      981.68
    ],
    "en": [
      "do that. First, I configured the domain name&nbsp; of SW1 with IP DOMAIN NAME jeremysitlab.com.&nbsp;&nbsp;"
    ],
    "ru": [
      "сделай это. Сначала я настроил доменное имя & nbsp; SW1 с IP-ИМЯ ДОМЕНА jeremysitlab.com. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      981.68,
      988.4
    ],
    "en": [
      "The reason for this is that the FQDN of&nbsp; the device is used to name the RSA keys.&nbsp;&nbsp;"
    ],
    "ru": [
      "Причина в том, что полное доменное имя & nbsp; устройство используется для именования ключей RSA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      988.4,
      994.64
    ],
    "en": [
      "By the way, FQDN means Fully Qualified Domain&nbsp; Name, which is the host name plus the DNS domain&nbsp;&nbsp;"
    ],
    "ru": [
      "Кстати, полное доменное имя означает полностью квалифицированный домен & nbsp; Имя, которое представляет собой имя хоста плюс домен DNS & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      994.64,
      1003.52
    ],
    "en": [
      "name. Then I generated the RSA keys. The command&nbsp; is CRYPTO KEY GENERATE RSA. Here it shows the&nbsp;&nbsp;"
    ],
    "ru": [
      "имя. Затем я сгенерировал ключи RSA. Команда & nbsp; CRYPTO KEY GENERATE RSA. Здесь показаны & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1003.52,
      1011.68
    ],
    "en": [
      "name the keys, SW1.jeremysitlab.com, which&nbsp; is the FQDN of SW1. Then you have to choose&nbsp;&nbsp;"
    ],
    "ru": [
      "назовите ключи SW1.jeremysitlab.com, которые & nbsp; - полное доменное имя SW1. Затем вам нужно выбрать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1011.68,
      1019.84
    ],
    "en": [
      "the size of the modulus, the size of the keys. I&nbsp; configured 2048 bits as I have highlighted here.&nbsp;&nbsp;"
    ],
    "ru": [
      "размер модуля, размер ключей. Я & NBSP; настроил 2048 бит, как я здесь выделил. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1019.84,
      1025.44
    ],
    "en": [
      "Note that you can just use the command CRYPTO KEY&nbsp; GENERATE RSA MODULUS, and then specify the length,&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что вы можете просто использовать команду CRYPTO KEY & nbsp; Сгенерируйте RSA MODULUS, а затем укажите длину & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1025.44,
      1031.12
    ],
    "en": [
      "without having to specify it separately&nbsp; like this. The effect is the same.&nbsp;&nbsp;"
    ],
    "ru": [
      "без необходимости указывать его отдельно & nbsp; нравится. Эффект тот же."
    ]
  },
  {
    "time": [
      1031.12,
      1037.68
    ],
    "en": [
      "Note that the length must be 768 bits or greater&nbsp; to use SSHv2, so make sure the keys are at least&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что длина должна быть 768 бит или больше & nbsp; для использования SSHv2, поэтому убедитесь, что ключи не ниже & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1037.68,
      1044.32
    ],
    "en": [
      "that length. Greater key lengths are more&nbsp; secure, but take longer to generate and use.&nbsp;&nbsp;"
    ],
    "ru": [
      "эта длина. Чем больше длина ключа, тем больше & nbsp; безопасно, но для создания и использования требуется больше времени. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1044.32,
      1048.08
    ],
    "en": [
      "After the keys are generated,&nbsp; a Syslog message is displayed,&nbsp;&nbsp;"
    ],
    "ru": [
      "После создания ключей & nbsp; отображается сообщение системного журнала, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1048.08,
      1058.48
    ],
    "en": [
      "indicating that SSH has been enabled. I check SHOW&nbsp; IP SSH again, and indeed SSH has been enabled."
    ],
    "ru": [
      "указывает на то, что SSH включен. Я проверяю ПОКАЗАТЬ & nbsp; Снова IP SSH, и действительно, SSH был включен."
    ]
  },
  {
    "time": [
      1058.48,
      1064.56
    ],
    "en": [
      "Now that SSH is enabled, let’s configure it. The&nbsp; Telnet configurations on SW1 have been removed,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь, когда SSH включен, давайте настроим его. & Nbsp; Конфигурации Telnet на SW1 были удалены, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1064.56,
      1071.92
    ],
    "en": [
      "so let’s do a clean configuration of SSH. First,&nbsp; just like before I configured the enable secret,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте сделаем чистую настройку SSH. Во-первых, & nbsp; так же, как раньше, я настроил секрет включения, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1071.92,
      1079.44
    ],
    "en": [
      "a username, and an ACL to restrict connections&nbsp; to only allow PC2. Then I used the command IP SSH&nbsp;&nbsp;"
    ],
    "ru": [
      "имя пользователя и ACL для ограничения подключений & nbsp; разрешить только ПК2. Затем я использовал команду IP SSH & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1079.44,
      1085.92
    ],
    "en": [
      "VERSION 2. This is optional, but recommended&nbsp; because SSH version 2 is more secure.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВЕРСИЯ 2. Это необязательно, но рекомендуется & nbsp; потому что SSH версии 2 более безопасен. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1085.92,
      1092.8
    ],
    "en": [
      "Then once again, use the command LINE VTY&nbsp; 0 15 to configure all 16 VTY lines, just&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем еще раз используйте команду LINE VTY & nbsp; 0 15 для настройки всех 16 линий VTY, просто & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1092.8,
      1100.24
    ],
    "en": [
      "like when configuring Telnet. Then enable local&nbsp; authentication. Note that you can’t use LOGIN for&nbsp;&nbsp;"
    ],
    "ru": [
      "вроде при настройке Telnet. Затем включите локальный & nbsp; аутентификация. Обратите внимание, что вы не можете использовать ВХОД для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1100.24,
      1107.28
    ],
    "en": [
      "SSH, only LOGIN LOCAL works, a username is needed.&nbsp; You can also authenticate to an authentication&nbsp;&nbsp;"
    ],
    "ru": [
      "SSH, работает только LOGIN LOCAL, требуется имя пользователя. & Nbsp; Вы также можете пройти аутентификацию с помощью аутентификации & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1107.28,
      1113.68
    ],
    "en": [
      "server, but that’s a topic for another video.&nbsp; Then, since I removed the Telnet configurations,&nbsp;&nbsp;"
    ],
    "ru": [
      "сервер, но это тема для другого видео. & nbsp; Затем, поскольку я удалил конфигурации Telnet, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1113.68,
      1119.04
    ],
    "en": [
      "I configured the exec timeout again. This is&nbsp; optional because there will most likely be a&nbsp;&nbsp;"
    ],
    "ru": [
      "Я снова настроил время ожидания выполнения. Это & nbsp; необязательно, потому что, скорее всего, будет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1119.04,
      1124.48
    ],
    "en": [
      "default exec timeout, but you can use this&nbsp; command to specify the timeout you want.&nbsp;&nbsp;"
    ],
    "ru": [
      "тайм-аут выполнения по умолчанию, но вы можете использовать это & ​​nbsp; , чтобы указать желаемое время ожидания. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1124.48,
      1132.4
    ],
    "en": [
      "Then I used TRANSPORT INPUT SSH. Best practice&nbsp; is to limit VTY line connections to SSH only,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я использовал TRANSPORT INPUT SSH. Лучшие практики & nbsp; ограничивает соединения линии VTY только SSH, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1132.4,
      1138.4
    ],
    "en": [
      "disabling Telnet because it’s less&nbsp; secure. Then finally I applied the ACL.&nbsp;&nbsp;"
    ],
    "ru": [
      "отключение Telnet, потому что это меньше & nbsp; безопасный. Наконец, я применил ACL. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1138.4,
      1145.04
    ],
    "en": [
      "Just like for Telnet this is optional, but it&nbsp; is recommended because it adds further security."
    ],
    "ru": [
      "Как и для Telnet, это необязательно, но это & ​​nbsp; рекомендуется, потому что это повышает безопасность."
    ]
  },
  {
    "time": [
      1145.04,
      1151.68
    ],
    "en": [
      "Okay, let me summarize the SSH configuration&nbsp; process. First, configure the device host name.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, позвольте мне подвести итог конфигурации SSH & nbsp; процесс. Сначала настройте имя хоста устройства. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1151.68,
      1156.56
    ],
    "en": [
      "I didn’t mention this previously because I had&nbsp; already configured the host name, but the device&nbsp;&nbsp;"
    ],
    "ru": [
      "Раньше я не упоминал об этом, потому что у меня был & nbsp; имя хоста уже настроено, но устройство & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1156.56,
      1164.16
    ],
    "en": [
      "cannot generate its RSA keys without a non-default&nbsp; hostname. Let me show you. So, on a router with&nbsp;&nbsp;"
    ],
    "ru": [
      "не может сгенерировать свои ключи RSA без нестандартного & nbsp; имя хоста. Позволь мне показать тебе. Итак, на роутере с & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1164.16,
      1170.72
    ],
    "en": [
      "the default host name I tried the CRYPTO KEY&nbsp; GENERATE RSA command. I get a message saying,&nbsp;&nbsp;"
    ],
    "ru": [
      "имя хоста по умолчанию. Я пробовал использовать CRYPTO KEY & nbsp; Сгенерировать команду RSA. Я получаю сообщение & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1170.72,
      1176.8
    ],
    "en": [
      "please define a hostname other than router. So&nbsp; I did that. Then I tried to generate the RSA&nbsp;&nbsp;"
    ],
    "ru": [
      "укажите имя хоста, отличное от маршрутизатора. Итак, & nbsp; Я это сделал. Затем я попытался сгенерировать RSA & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1176.8,
      1184.08
    ],
    "en": [
      "key pair again. However I haven’t defined a domain&nbsp; name yet, so I get a message telling me to do so.&nbsp;&nbsp;"
    ],
    "ru": [
      "снова пара ключей. Однако я не определил домен & nbsp; имя еще не указано, поэтому я получаю сообщение с просьбой сделать это. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1184.08,
      1191.12
    ],
    "en": [
      "And that’s the next step in SSH configuration,&nbsp; configure a DNS domain name. So that’s what I did,&nbsp;&nbsp;"
    ],
    "ru": [
      "И это следующий шаг в настройке SSH, & nbsp; настроить доменное имя DNS. Вот что я сделал, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1191.12,
      1199.28
    ],
    "en": [
      "IP DOMAIN NAME jeremysitlab.com. Then I try to&nbsp; generate the RSA key pair, and the command works.&nbsp;&nbsp;"
    ],
    "ru": [
      "ДОМЕННОЕ ИМЯ IP jeremysitlab.com. Затем я пытаюсь & nbsp; сгенерируйте пару ключей RSA, и команда заработает. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1199.28,
      1204.24
    ],
    "en": [
      "So, remember that. To generate the RSA key&nbsp; pair you need to configure the host name&nbsp;&nbsp;"
    ],
    "ru": [
      "Так что помните об этом. Чтобы сгенерировать ключ RSA & nbsp; пару вам нужно настроить имя хоста & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1204.24,
      1210.32
    ],
    "en": [
      "and the domain name first. Actually, you can&nbsp; manually specify a name for the key pair, but&nbsp;&nbsp;"
    ],
    "ru": [
      "и сначала доменное имя. На самом деле вы можете & nbsp; вручную укажите имя для пары ключей, но & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1210.32,
      1217.52
    ],
    "en": [
      "for the CCNA you just have to know this method.&nbsp; So, that’s the next step, generate the key pair.&nbsp;&nbsp;"
    ],
    "ru": [
      "для CCNA вам просто нужно знать этот метод. Итак, это следующий шаг - сгенерируйте пару ключей. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1217.52,
      1221.36
    ],
    "en": [
      "Then the next step is to configure an&nbsp; enable password and local username and&nbsp;&nbsp;"
    ],
    "ru": [
      "Следующим шагом будет настройка & nbsp; включить пароль и локальное имя пользователя и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1221.36,
      1227.68
    ],
    "en": [
      "password combination. The order of this step&nbsp; doesn’t matter, and it’s not an SSH-specific&nbsp;&nbsp;"
    ],
    "ru": [
      "комбинация пароля. Порядок этого шага & nbsp; не имеет значения, и это не относится к SSH & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1227.68,
      1235.36
    ],
    "en": [
      "configuration step, but make sure they are&nbsp; configured. Then enable SSH version 2 only.&nbsp;&nbsp;"
    ],
    "ru": [
      "шаг настройки, но убедитесь, что они & nbsp; настроен. Затем включите только SSH версии 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1235.36,
      1241.76
    ],
    "en": [
      "This isn’t necessary, but it is best practice&nbsp; so I decided to include it in this summary. Then&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом нет необходимости, но рекомендуется & nbsp; поэтому я решил включить его в это резюме. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1241.76,
      1249.2
    ],
    "en": [
      "configure the VTY lines. The most important one is&nbsp; to make sure TRANSPORT INPUT SSH is enabled, and&nbsp;&nbsp;"
    ],
    "ru": [
      "настроить линии VTY. Самый важный из них - & nbsp; чтобы убедиться, что TRANSPORT INPUT SSH включен, и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1249.2,
      1256.48
    ],
    "en": [
      "then you can do any other VTY line configurations&nbsp; you want like exec timeout, applying an ACL, etc.&nbsp;&nbsp;"
    ],
    "ru": [
      "затем вы можете выполнить любую другую конфигурацию линии VTY & nbsp; вы хотите, например, тайм-аут exec, применение ACL и т. д. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1256.48,
      1264.96
    ],
    "en": [
      "And that’s it, SSH should be working. From a&nbsp; PC you can connect using the command SSH -L,&nbsp;&nbsp;"
    ],
    "ru": [
      "И все, SSH должен работать. Из & nbsp; ПК можно подключиться с помощью команды SSH -L, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1264.96,
      1272.88
    ],
    "en": [
      "followed by the username and IP address, or SSH&nbsp; username@IP address. You can try that out in the&nbsp;&nbsp;"
    ],
    "ru": [
      "с последующим именем пользователя и IP-адресом или SSH & nbsp; имя пользователя @ IP-адрес. Вы можете попробовать это в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1272.88,
      1280.16
    ],
    "en": [
      "practice lab. And make sure you do the practice&nbsp; lab. You can make your own lab or use my lab file.&nbsp;&nbsp;"
    ],
    "ru": [
      "практическая лаборатория. И убедитесь, что вы практикуете & nbsp; лаборатория. Вы можете создать свою собственную лабораторию или использовать мой лабораторный файл. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1280.16,
      1286.24
    ],
    "en": [
      "But you need to know how to configure&nbsp; SSH, so make sure you practice it."
    ],
    "ru": [
      "Но вам нужно знать, как настроить & nbsp; SSH, так что убедитесь, что вы его практикуете."
    ]
  },
  {
    "time": [
      1286.24,
      1291.04
    ],
    "en": [
      "Here’s a summary of the new commands in this&nbsp; video. Like I said, you’ll definitely want&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот краткое изложение новых команд в этом & nbsp; видео. Как я уже сказал, вам обязательно понадобится & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1291.04,
      1296.0
    ],
    "en": [
      "to do some labbing in packet tracer&nbsp; to get used to SSH configuration.&nbsp;&nbsp;"
    ],
    "ru": [
      "выполнить некоторые лабораторные работы в трассировщике пакетов & nbsp; чтобы привыкнуть к настройке SSH. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1296.0,
      1303.44
    ],
    "en": [
      "Unlike Syslog and SNMP, SSH configuration is&nbsp; a CCNA exam topic. If you don’t remember the&nbsp;&nbsp;"
    ],
    "ru": [
      "В отличие от системного журнала и SNMP, конфигурация SSH & nbsp; тема экзамена CCNA. Если вы не помните & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1303.44,
      1308.04
    ],
    "en": [
      "purpose of any of these commands,&nbsp; go back in the video to review."
    ],
    "ru": [
      "цель любой из этих команд, & nbsp; вернитесь в видео, чтобы просмотреть."
    ]
  },
  {
    "time": [
      1308.04,
      1310.96
    ],
    "en": [
      "SLIDE15 Before the quiz, here’s a review&nbsp;&nbsp;"
    ],
    "ru": [
      "СЛАЙД15 Перед викториной сделайте обзор & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1310.96,
      1318.24
    ],
    "en": [
      "of what we covered. First, console port security.&nbsp; By default, anyone who has physical access to the&nbsp;&nbsp;"
    ],
    "ru": [
      "того, что мы рассмотрели. Во-первых, безопасность консольного порта. По умолчанию любой, у кого есть физический доступ к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1318.24,
      1325.84
    ],
    "en": [
      "console port can access the CLI of the device. So,&nbsp; it’s a good idea to configure some security on it.&nbsp;&nbsp;"
    ],
    "ru": [
      "консольный порт может получить доступ к интерфейсу командной строки устройства. Итак, & nbsp; рекомендуется настроить на нем некоторую безопасность. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1325.84,
      1330.64
    ],
    "en": [
      "Then I introduced the concept of&nbsp; a Layer 2 switch management IP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я представил концепцию & nbsp; IP-адрес управления коммутатором уровня 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1330.64,
      1335.6
    ],
    "en": [
      "Layer 2 switches can’t route packets, but&nbsp; they can still send traffic from and receive&nbsp;&nbsp;"
    ],
    "ru": [
      "Коммутаторы уровня 2 не могут маршрутизировать пакеты, но & nbsp; они по-прежнему могут отправлять и получать трафик от & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1335.6,
      1343.2
    ],
    "en": [
      "traffic on an SVI, allowing them to respond&nbsp; to pings, received connections via SSH, etc.&nbsp;&nbsp;"
    ],
    "ru": [
      "трафик на SVI, что позволяет им отвечать & nbsp; на пинги, полученные соединения по SSH и т. д. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1343.2,
      1348.96
    ],
    "en": [
      "Then I introduced Telnet, a protocol that&nbsp; allows you to connect to the CLI of a device.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я представил Telnet, протокол, который & nbsp; позволяет подключаться к интерфейсу командной строки устройства. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1348.96,
      1354.72
    ],
    "en": [
      "However, Telnet is old and not secure,&nbsp; so in modern days we typically use SSH,&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако Telnet устарел и небезопасен, & nbsp; поэтому в наши дни мы обычно используем SSH, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1354.72,
      1359.36
    ],
    "en": [
      "Secure Shell instead when we&nbsp; remotely configure devices.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вместо этого используйте защищенную оболочку, когда мы & nbsp; удаленно настраивать устройства. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1359.36,
      1362.96
    ],
    "en": [
      "Make sure to watch until the end of the&nbsp; quiz for a bonus practice question from&nbsp;&nbsp;"
    ],
    "ru": [
      "Обязательно смотрите до конца & nbsp; викторина на вопрос о бонусной практике от & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1362.96,
      1371.68
    ],
    "en": [
      "Boson Software’s ExSim, the best practice exams&nbsp; for the CCNA. Okay, let’s go to question 1."
    ],
    "ru": [
      "ExSim от Boson Software, лучшие практические экзамены & nbsp; для CCNA. Хорошо, перейдем к вопросу 1."
    ]
  },
  {
    "time": [
      1371.68,
      1378.24
    ],
    "en": [
      "You issue the crypto key generate rsa command on&nbsp; a Cisco router, but the command is rejected. Which&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы вводите команду генерации криптографического ключа rsa на & nbsp; маршрутизатор Cisco, но команда отклонена. Какие & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1378.24,
      1388.0
    ],
    "en": [
      "of the following might be the cause? Select two.&nbsp; Pause the video now to think about the answers."
    ],
    "ru": [
      "из следующего может быть причиной? Выберите два. & Nbsp; Остановите видео сейчас, чтобы подумать над ответами."
    ]
  },
  {
    "time": [
      1388.0,
      1394.16
    ],
    "en": [
      "The answers are A, a host name hasn’t been&nbsp; configured, and E, a DNS domain name hasn’t been&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответы: A, имя хоста не было & nbsp; настроен, и E, доменное имя DNS не было & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1394.16,
      1402.64
    ],
    "en": [
      "configured. The FQDN, fully qualified domain name,&nbsp; of the device is used to name the RSA key pair.&nbsp;&nbsp;"
    ],
    "ru": [
      "настроен. FQDN, полное доменное имя, & nbsp; устройства используется для наименования пары ключей RSA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1402.64,
      1409.08
    ],
    "en": [
      "The FQDN consists of the device’s host name&nbsp; and its domain name. Also, the default host&nbsp;&nbsp;"
    ],
    "ru": [
      "Полное доменное имя состоит из имени хоста устройства & nbsp; и его доменное имя. Кроме того, хост по умолчанию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1409.08,
      1418.16
    ],
    "en": [
      "name of Router cannot be used, a host name must be&nbsp; manually configured. Okay, let’s go to question 2."
    ],
    "ru": [
      "нельзя использовать имя маршрутизатора, имя хоста должно быть & nbsp; настроен вручную. Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1418.16,
      1422.88
    ],
    "en": [
      "Which of the following commands would allow&nbsp; both Telnet and SSH to be used to connect to&nbsp;&nbsp;"
    ],
    "ru": [
      "Какая из следующих команд позволит & nbsp; и Telnet, и SSH, которые будут использоваться для подключения к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1422.88,
      1428.8
    ],
    "en": [
      "the VTY lines of a device? (select two,&nbsp; each answer is a complete solution).&nbsp;&nbsp;"
    ],
    "ru": [
      "линии VTY устройства? (выберите два, & nbsp; каждый ответ представляет собой полное решение). & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1428.8,
      1435.84
    ],
    "en": [
      "Pause the video now to think about your answers."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своими ответами."
    ]
  },
  {
    "time": [
      1435.84,
      1443.36
    ],
    "en": [
      "The answers are C, TRANSPORT INPUT&nbsp; TELNET SSH, and D, TRANSPORT INPUT ALL.&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответы: C, ТРАНСПОРТНЫЙ ВВОД & nbsp; TELNET SSH и D, ВСЕ ТРАНСПОРТНЫЙ ВВОД. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1443.36,
      1450.16
    ],
    "en": [
      "C will allow Telnet and SSH, whereas D will&nbsp; allow some other protocols. As you can see,&nbsp;&nbsp;"
    ],
    "ru": [
      "C разрешит Telnet и SSH, а D - & nbsp; разрешить некоторые другие протоколы. Как видите, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1450.16,
      1458.16
    ],
    "en": [
      "there are protocols outside of Telnet and SSH that&nbsp; are supported. A, TRANSPORT INPUT DEFAULT isn’t a&nbsp;&nbsp;"
    ],
    "ru": [
      "существуют протоколы за пределами Telnet и SSH, которые & nbsp; поддерживаются. A, ТРАНСПОРТНЫЙ ВВОД ПО УМОЛЧАНИЮ не является & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1458.16,
      1468.0
    ],
    "en": [
      "real command, and B, TRANSPORT INPUT NONE, would&nbsp; allow no protocols. Okay, let’s go to question 3."
    ],
    "ru": [
      "реальная команда и B, ТРАНСПОРТИРОВАТЬ ВХОД НЕТ, будет & nbsp; не разрешать протоколы. Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1468.0,
      1476.08
    ],
    "en": [
      "You want to allow only 192.168.1.1 to connect to&nbsp; R1 via SSH. Which of the following configurations&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы хотите разрешить подключаться к & nbsp; только 192.168.1.1. R1 через SSH. Какая из следующих конфигураций & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1476.08,
      1484.4
    ],
    "en": [
      "fulfills that requirement? Pause the&nbsp; video now to think about the answer."
    ],
    "ru": [
      "выполняет это требование? Приостановите & nbsp; видео сейчас, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1484.4,
      1492.64
    ],
    "en": [
      "The answer is B. SSH uses TCP port 22. You must&nbsp; configure the VTY lines. And you must use the&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ: Б. SSH использует TCP-порт 22. Вы должны & nbsp; настроить линии VTY. И вы должны использовать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1492.64,
      1499.2
    ],
    "en": [
      "ACCESS-CLASS command to apply it to the VTY&nbsp; lines. Only B fulfills all of those requirements,&nbsp;&nbsp;"
    ],
    "ru": [
      "ACCESS-CLASS, чтобы применить ее к VTY & nbsp; линий. Только B соответствует всем этим требованиям, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1499.2,
      1505.36
    ],
    "en": [
      "so it is the correct answer.&nbsp; Okay, let’s go to question 4."
    ],
    "ru": [
      "так что это правильный ответ. & nbsp; Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1505.36,
      1509.68
    ],
    "en": [
      "Which of the following statements&nbsp; about SSH are true? (select two).&nbsp;&nbsp;"
    ],
    "ru": [
      "Какое из следующих утверждений & nbsp; про SSH верны? (выберите два). & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1509.68,
      1516.24
    ],
    "en": [
      "Pause the video now to think about the answers."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над ответами."
    ]
  },
  {
    "time": [
      1516.24,
      1524.88
    ],
    "en": [
      "The answers are B, K9 IOS images support SSH, and&nbsp; F, a key length of at least 768 bits is required&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответы: B, образы IOS K9 поддерживают SSH и & nbsp; F, требуется длина ключа не менее 768 бит & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1524.88,
      1535.84
    ],
    "en": [
      "for SSHv2. RSA keys are required to enable SSH, so&nbsp; A is incorrect. SSH version 1.99 isn’t an actual&nbsp;&nbsp;"
    ],
    "ru": [
      "для SSHv2. Для включения SSH требуются ключи RSA, поэтому & nbsp; А неверно. SSH версии 1.99 на самом деле не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1535.84,
      1544.08
    ],
    "en": [
      "SSH version, it is used to refer to a device that&nbsp; supports both versions 1 and 2, so C is incorrect.&nbsp;&nbsp;"
    ],
    "ru": [
      "Версия SSH, используется для обозначения устройства, которое & nbsp; поддерживает обе версии 1 и 2, поэтому C неверен. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1544.08,
      1552.88
    ],
    "en": [
      "SSH does not send data in plain text, it encrypts&nbsp; the data. So D is incorrect. And NPE IOS images&nbsp;&nbsp;"
    ],
    "ru": [
      "SSH не отправляет данные в виде обычного текста, он шифрует & nbsp; данные. Итак, D неверен. И образы NPE IOS & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1552.88,
      1561.92
    ],
    "en": [
      "do not support cryptographic features like SSH,&nbsp; so E is incorrect. Okay, let’s go to question 5."
    ],
    "ru": [
      "не поддерживают такие криптографические функции, как SSH, & nbsp; так что E неверен. Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1561.92,
      1570.16
    ],
    "en": [
      "A network admin using PC1 is remotely configuring&nbsp; SW1 by connecting to the CLI of SW1 via SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "Сетевой администратор, использующий ПК1, удаленно настраивает & nbsp; SW1, подключившись к интерфейсу командной строки SW1 через SSH. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1570.16,
      1580.08
    ],
    "en": [
      "What is the role of SW1 in this situation?&nbsp; Pause the video now to think about the answer."
    ],
    "ru": [
      "Какова роль SW1 в этой ситуации? & Nbsp; Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1580.08,
      1587.6
    ],
    "en": [
      "The answer is B, SSH server. SSH and Telnet use&nbsp; a client-server model, in which the device being&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ - B, SSH-сервер. SSH и Telnet используют & nbsp; модель клиент-сервер, в которой устройство является & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1587.6,
      1593.92
    ],
    "en": [
      "connected to, SW1 in this case, is the server,&nbsp; and the device using SSH or Telnet to connect,&nbsp;&nbsp;"
    ],
    "ru": [
      "подключен к SW1, в данном случае это сервер, & nbsp; и устройство, использующее SSH или Telnet для подключения, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1593.92,
      1598.96
    ],
    "en": [
      "PC1 in this case, is the client.&nbsp; Okay, that’s all for the quiz.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПК1 в данном случае является клиентом. Хорошо, это все, что касается викторины. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1598.96,
      1606.16
    ],
    "en": [
      "Now let’s do a bonus practice question&nbsp; from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "А теперь давайте займемся вопросом о бонусной практике & nbsp; из ExSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      1606.16,
      1611.68
    ],
    "en": [
      "Okay here's today's Boson ExSim practice&nbsp; question. You want to configure SSH for&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практика Boson ExSim & nbsp; вопрос. Вы хотите настроить SSH для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1611.68,
      1618.48
    ],
    "en": [
      "incoming VTY connections on a router with the&nbsp; host name Router1. Router1 is running a K9 IOS&nbsp;&nbsp;"
    ],
    "ru": [
      "входящие соединения VTY на маршрутизаторе с & nbsp; имя хоста Router1. Router1 работает под управлением K9 IOS & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1618.48,
      1623.92
    ],
    "en": [
      "image but has not yet been configured&nbsp; with a domain name or an RSA key pair.&nbsp;&nbsp;"
    ],
    "ru": [
      "изображение, но еще не настроено & nbsp; с доменным именем или парой ключей RSA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1623.92,
      1630.48
    ],
    "en": [
      "In addition, the VTY lines are not yet configured&nbsp; to accept incoming SSH connections. You issue the&nbsp;&nbsp;"
    ],
    "ru": [
      "Кроме того, линии VTY еще не настроены & nbsp; принимать входящие SSH-соединения. Вы выпускаете & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1630.48,
      1635.76
    ],
    "en": [
      "CRYPTO KEY GENERATE RSA command from global&nbsp; config mode. Which of the following messages&nbsp;&nbsp;"
    ],
    "ru": [
      "CRYPTO KEY GENERATE RSA команда из глобального & nbsp; режим конфигурации. Какое из следующих сообщений & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1635.76,
      1642.32
    ],
    "en": [
      "will you most likely receive? Select the&nbsp; best answer. Okay, so there are five options.&nbsp;&nbsp;"
    ],
    "ru": [
      "вы, скорее всего, получите? Выберите & nbsp; лучший ответ. Итак, есть пять вариантов. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1642.32,
      1651.28
    ],
    "en": [
      "Please pause the video now, check out the&nbsp; options, and think about the correct answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "Пожалуйста, приостановите видео сейчас, посмотрите & nbsp; варианты и подумайте над правильным ответом."
    ]
  },
  {
    "time": [
      1651.28,
      1656.72
    ],
    "en": [
      "Okay, let's check. So the important information&nbsp; here is that it has a host name, the host name&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давай проверим. Итак, важная информация & nbsp; вот что у него есть имя хоста, имя хоста & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1656.72,
      1664.8
    ],
    "en": [
      "is Router1. It does have a K9 IOS image, so that&nbsp; supports SSH. But it has not yet been configured&nbsp;&nbsp;"
    ],
    "ru": [
      "это Router1. У него есть образ IOS K9, так что & nbsp; поддерживает SSH. Но он еще не настроен & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1664.8,
      1671.36
    ],
    "en": [
      "with a domain name or an RSA key pair. So no&nbsp; domain name. So, which message will you most&nbsp;&nbsp;"
    ],
    "ru": [
      "с доменным именем или парой ключей RSA. Так что нет & nbsp; доменное имя. Итак, какое сообщение вам больше всего & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1671.36,
      1680.48
    ],
    "en": [
      "likely receive? The name for the keys will be,&nbsp; and then the name. Probably not this one because,&nbsp;&nbsp;"
    ],
    "ru": [
      "скорее всего получите? Имена ключей будут: & nbsp; а затем имя. Наверное, не этот, потому что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1680.48,
      1686.24
    ],
    "en": [
      "as I said, the name for the key pair is&nbsp; created using the fully qualified domain name,&nbsp;&nbsp;"
    ],
    "ru": [
      "как я уже сказал, имя пары ключей - & nbsp; создано с использованием полного доменного имени & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1686.24,
      1693.52
    ],
    "en": [
      "which requires a host name and a domain name.&nbsp; And the domain name has not yet been configured.&nbsp;&nbsp;"
    ],
    "ru": [
      "для чего требуется имя хоста и имя домена. & nbsp; И имя домена еще не настроено. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1693.52,
      1699.44
    ],
    "en": [
      "B, please define a domain-name first. I think&nbsp; that is the correct answer. Because as I just&nbsp;&nbsp;"
    ],
    "ru": [
      "B, пожалуйста, сначала определите доменное имя. Я думаю & nbsp; это правильный ответ. Потому что, поскольку я просто & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1699.44,
      1705.44
    ],
    "en": [
      "said you need a host name and a domain name. It&nbsp; has a host name, a non-default host name, Router1,&nbsp;&nbsp;"
    ],
    "ru": [
      "сказал, что вам нужно имя хоста и имя домена. Это & nbsp; имеет имя хоста, имя хоста не по умолчанию, Router1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1705.44,
      1712.16
    ],
    "en": [
      "but no domain name yet. C, please create RSA keys&nbsp; to enable SSH. Well that's what you're trying to&nbsp;&nbsp;"
    ],
    "ru": [
      "но еще нет доменного имени. C, создайте ключи RSA & nbsp; чтобы включить SSH. Ну вот что вы пытаетесь & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1712.16,
      1716.48
    ],
    "en": [
      "do there, so I don't think that message will&nbsp; be displayed. Please define a host name other&nbsp;&nbsp;"
    ],
    "ru": [
      "сделайте это, поэтому я не думаю, что это сообщение & nbsp; быть отображенным. Укажите другое имя хоста & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1716.48,
      1723.44
    ],
    "en": [
      "than Router. It already has a non-default host&nbsp; name. And please enable SSH version 2. You do&nbsp;&nbsp;"
    ],
    "ru": [
      "чем маршрутизатор. У него уже есть хост, отличный от хоста по умолчанию & nbsp; имя. И, пожалуйста, включите SSH версии 2. Вы делаете & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1723.44,
      1731.2
    ],
    "en": [
      "not need SSH version 2 to create the RSA key&nbsp; pair. So, I believe B is the correct answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "не требуется SSH версии 2 для создания ключа RSA & nbsp; пара. Итак, я считаю, что B - правильный ответ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1731.2,
      1741.76
    ],
    "en": [
      "And yes it is. So here is Boson's explanation.&nbsp; I recommend pausing the video now to read it.&nbsp;&nbsp;"
    ],
    "ru": [
      "И да, это так. Итак, вот объяснение Бозона. Я рекомендую приостановить видео сейчас, чтобы прочитать его. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1741.76,
      1747.52
    ],
    "en": [
      "And here's the rest. There are some references&nbsp; to the official cert guide by Wendell Odom,&nbsp;&nbsp;"
    ],
    "ru": [
      "А вот и все остальное. Есть несколько ссылок & nbsp; к официальному справочнику по сертификатам Венделла Одома, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1747.52,
      1756.32
    ],
    "en": [
      "as well as some Cisco documentation&nbsp; about configuring SSH on Cisco devices.&nbsp;&nbsp;"
    ],
    "ru": [
      "а также некоторую документацию Cisco & nbsp; о настройке SSH на устройствах Cisco. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1756.32,
      1761.6
    ],
    "en": [
      "Okay, so that's Boson ExSim for CCNA. These are&nbsp; without a doubt the best practice exams for the&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это Boson ExSim для CCNA. Это & nbsp; без сомнения, лучшие практические экзамены на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1761.6,
      1767.36
    ],
    "en": [
      "CCNA, as well as CCNP and many other&nbsp; exams. If you want to get Boson ExSim,&nbsp;&nbsp;"
    ],
    "ru": [
      "CCNA, а также CCNP и многие другие & nbsp; Экзамены. Если вы хотите получить Boson ExSim, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1767.36,
      1772.64
    ],
    "en": [
      "please follow the link in the video description."
    ],
    "ru": [
      "перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1772.64,
      1775.84
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
      1775.84,
      1779.36
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
      1779.36,
      1784.0
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
      1784.0,
      1789.44
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
      1789.44,
      1796.08
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
      1796.08,
      1801.12
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
      1801.12,
      1807.6
    ],
    "en": [
      "To join, please click the ‘Join’ button under the&nbsp; video. Thank you to Raj, Kenneth, Seamus, H W,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Раджу, Кеннету, Симусу, Х. У., & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1807.6,
      1814.64
    ],
    "en": [
      "Brandon, Samil, Aaron, Marcel, Kone, Donald, C&nbsp; Mohd, Gustavo, Anthony, Biraj, Junhong, Benjamin,&nbsp;&nbsp;"
    ],
    "ru": [
      "Брэндон, Самил, Аарон, Марсель, Коне, Дональд, К. & nbsp; Мохд, Густаво, Энтони, Бирадж, Джунхонг, Бенджамин, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1814.64,
      1820.16
    ],
    "en": [
      "Tshepiso, Justin, Prakaash, Nasir, Erlison,&nbsp; Marko, Daming, Jhilmar, Ed, Value, John,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чеписо, Джастин, Пракааш, Насир, Эрлисон, & NBSP; Марко, Даминг, Джилмар, Эд, Вэлью, Джон, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1820.16,
      1827.04
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
      1827.04,
      1832.32
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly,&nbsp; but thank you so much for your support. This&nbsp;&nbsp;"
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, & nbsp; но большое вам спасибо за вашу поддержку. Это & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1832.32,
      1839.2
    ],
    "en": [
      "is the list of JCNP-level members at the time&nbsp; of recording by the way, February 21st 2021. If&nbsp;&nbsp;"
    ],
    "ru": [
      "список участников уровня JCNP на тот момент & nbsp; записи, кстати, 21 февраля 2021 года. Если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1839.2,
      1845.68
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
      1845.68,
      1848.8
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
      1848.8,
      1854.56
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
      1854.56,
      1860.16
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
      1860.16,
      1860.16
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]