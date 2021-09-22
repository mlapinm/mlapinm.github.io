let items = [
  {
    "time": [
      1.2,
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
      "If you like these videos, please subscribe&nbsp; to follow along with the series. Also,&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нравятся эти видео, подпишитесь на & nbsp; следовать вместе с серией. Кроме того, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      10.96,
      15.68
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
      15.68,
      20.48
    ],
    "en": [
      "Thanks for your help. Also, remember to sign&nbsp; up via the link in the description to get all&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо за вашу помощь. Также не забудьте подписать & nbsp; вверх по ссылке в описании, чтобы получить все & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      20.48,
      25.92
    ],
    "en": [
      "of the lab files for this course, so you&nbsp; can try it out yourself in packet tracer."
    ],
    "ru": [
      "лабораторных файлов для этого курса, так что вы & nbsp; можете попробовать сами в пакетном трассировщике."
    ]
  },
  {
    "time": [
      25.92,
      31.52
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
      31.52,
      36.16
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
      36.16,
      40.72
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
      40.72,
      45.68
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
      45.68,
      53.04
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
      53.04,
      59.76
    ],
    "en": [
      "In this lab we will use Laptop1 to connect to SW2,&nbsp; a new switch which has not yet been configured.&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы будем использовать ноутбук 1 для подключения к SW2, & nbsp; новый коммутатор, который еще не был настроен. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      59.76,
      64.48
    ],
    "en": [
      "Now, in reality you would probably configure&nbsp; the switch before connecting it to the network,&nbsp;&nbsp;"
    ],
    "ru": [
      "На самом деле вы, вероятно, настроили бы & nbsp; коммутатор перед подключением к сети, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      64.48,
      71.44
    ],
    "en": [
      "but I’ve already connected SW2 to R2. So, let’s&nbsp; get right into it. Step 1 says to connect Laptop1&nbsp;&nbsp;"
    ],
    "ru": [
      "но я уже подключил SW2 к R2. Итак, давайте & nbsp; попасть прямо в это. Шаг 1 говорит о подключении Laptop1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      71.44,
      77.76
    ],
    "en": [
      "to SW2’s console port and perform some basic&nbsp; configurations. So, from ‘connections’ I’ll select&nbsp;&nbsp;"
    ],
    "ru": [
      "к консольному порту SW2 и выполнить некоторые основные & nbsp; конфигурации. Итак, из «подключений» я выберу & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      77.76,
      85.6
    ],
    "en": [
      "the console cable, it’s this light blue one. Then,&nbsp; connect it to Laptop1’s RS232 port, and finally to&nbsp;&nbsp;"
    ],
    "ru": [
      "кабель консоли, он голубой. Затем & nbsp; подключите его к порту RS232 ноутбука 1 и, наконец, к & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      85.6,
      93.68
    ],
    "en": [
      "SW2’s console port. Now let’s go on to Laptop1,&nbsp; and from the desktop tab click on terminal.&nbsp;&nbsp;"
    ],
    "ru": [
      "Консольный порт SW2. Теперь перейдем к Ноутбук 1, & nbsp; и на вкладке рабочего стола щелкните терминал. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      93.68,
      101.68
    ],
    "en": [
      "These default terminal settings are correct,&nbsp; so click on OK. And now I’m in the CLI of SW2."
    ],
    "ru": [
      "Эти настройки терминала по умолчанию верны, & nbsp; так что нажмите ОК. И теперь я нахожусь в интерфейсе командной строки SW2."
    ]
  },
  {
    "time": [
      101.68,
      106.4
    ],
    "en": [
      "Now let’s perform some basic&nbsp; configurations. First up, the host name.&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь приступим к выполнению основных & nbsp; конфигурации. Сначала имя хоста. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      106.4,
      114.88
    ],
    "en": [
      "ENABLE. CONF T. HOSTNAME SW2. Okay, you&nbsp; can see here the host name has changed.&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. HOSTNAME SW2. Хорошо, ты & nbsp; здесь можно увидеть, что имя хоста изменилось. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      114.88,
      121.68
    ],
    "en": [
      "Next let’s set an enable secret. If no enable&nbsp; secret is set, when you connect via Telnet or SSH&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь давайте установим секрет включения. Если не включить & nbsp; секрет устанавливается при подключении через Telnet или SSH & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      121.68,
      126.96
    ],
    "en": [
      "it won’t let you access privileged exec mode. Now,&nbsp; there is a way to change that, you can manually&nbsp;&nbsp;"
    ],
    "ru": [
      "он не позволит вам получить доступ к привилегированному режиму exec. Теперь & nbsp; есть способ изменить это, вы можете вручную & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      126.96,
      133.36
    ],
    "en": [
      "set a high privilege level on the user you create,&nbsp; but I’ll cover that in a later video on security.&nbsp;&nbsp;"
    ],
    "ru": [
      "установить высокий уровень привилегий для создаваемого пользователя & nbsp; но я расскажу об этом в следующем видео о безопасности. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      133.36,
      138.16
    ],
    "en": [
      "For now just make sure you have an enable secret&nbsp; configured, so you can access privileged exec mode&nbsp;&nbsp;"
    ],
    "ru": [
      "На данный момент просто убедитесь, что у вас есть секретный ключ включения & nbsp; настроен, поэтому вы можете получить доступ к привилегированному режиму выполнения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      138.16,
      147.04
    ],
    "en": [
      "when connecting remotely. So, ENABLE SECRET ccna.&nbsp; These passwords are case-sensitive, by the way.&nbsp;&nbsp;"
    ],
    "ru": [
      "при удаленном подключении. Итак, ВКЛЮЧИТЕ СЕКРЕТНУЮ ccna. & Nbsp; Кстати, в этих паролях учитывается регистр. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      147.04,
      151.92000000000002
    ],
    "en": [
      "Next, let’s create a login account. I’ll&nbsp; cover more details about user accounts in&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем давайте создадим учетную запись для входа. Я & nbsp; подробнее об учетных записях пользователей в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      151.92000000000002,
      158.64
    ],
    "en": [
      "the security section, but the basic command is&nbsp; USERNAME, then the username, jeremy in this case,&nbsp;&nbsp;"
    ],
    "ru": [
      "раздел безопасности, но основная команда - & nbsp; ИМЯ ПОЛЬЗОВАТЕЛЯ, затем имя пользователя, в данном случае Джереми, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      158.64,
      163.84
    ],
    "en": [
      "then either PASSWORD or SECRET, I’ll use&nbsp; SECRET, and finally the password itself,&nbsp;&nbsp;"
    ],
    "ru": [
      "затем либо ПАРОЛЬ, либо СЕКРЕТНО, я использую & nbsp; СЕКРЕТНО и, наконец, сам пароль, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      163.84,
      171.12
    ],
    "en": [
      "ccna. As I mentioned earlier in the course, if you&nbsp; use PASSWORD the password is stored in plain text,&nbsp;&nbsp;"
    ],
    "ru": [
      "ccna. Как я уже упоминал ранее в курсе, если вы & nbsp; используйте ПАРОЛЬ, пароль хранится в виде обычного текста, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      171.12,
      175.92000000000002
    ],
    "en": [
      "not encrypted. Even if you use the&nbsp; SERVICE PASSWORD-ENCRYPTION command,&nbsp;&nbsp;"
    ],
    "ru": [
      "не зашифровано. Даже если вы используете & nbsp; Команда СЕРВИСНОЕ ШИФРОВАНИЕ ПАРОЛЯ, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      175.92000000000002,
      181.12
    ],
    "en": [
      "the encryption isn’t as strong&nbsp; as if you use SECRET instead."
    ],
    "ru": [
      "шифрование не такое надежное & nbsp; как если бы вместо этого вы использовали СЕКРЕТНО."
    ]
  },
  {
    "time": [
      181.12,
      188.08
    ],
    "en": [
      "Next let’s configure SW2 for remote management&nbsp; by configuring an IP address on its VLAN1 SVI.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем давайте настроим SW2 для удаленного управления & nbsp; настроив IP-адрес на его VLAN1 SVI. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      188.08,
      199.52
    ],
    "en": [
      "INTERFACE VLAN1. IP ADDRESS 192.168.2.253&nbsp; 255.255.255.0. In packet tracer, at least&nbsp;&nbsp;"
    ],
    "ru": [
      "ИНТЕРФЕЙС VLAN1. IP-АДРЕС 192.168.2.253 & nbsp; 255.255.255.0. В трассировщике пакетов по крайней мере & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      199.52,
      206.16
    ],
    "en": [
      "this model of switch, the SVI is shutdown by&nbsp; default, so let’s enable it with NO SHUTDOWN.&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой модели коммутатора SVI отключается при помощи & nbsp; по умолчанию, поэтому давайте включим его БЕЗ ВЫКЛЮЧЕНИЯ. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      206.16,
      212.32
    ],
    "en": [
      "Then we get two Syslog messages saying the&nbsp; interface came up. Okay, finally I’ll configure&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем мы получаем два сообщения системного журнала, в которых говорится, что & nbsp; интерфейс подошел. Хорошо, наконец-то я настрою & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      212.32,
      224.0
    ],
    "en": [
      "SW2’s default gateway. EXIT. IP DEFAULT-GATEWAY&nbsp; 192.168.2.254. If a host is in SW2’s local subnet,&nbsp;&nbsp;"
    ],
    "ru": [
      "Шлюз SW2 по умолчанию. ВЫХОД. IP-ШЛЮЗ ПО УМОЛЧАНИЮ & nbsp; 192.168.2.254. Если хост находится в локальной подсети SW2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      224.0,
      229.2
    ],
    "en": [
      "SW2 can communicate directly with it. However&nbsp; to communicate with hosts outside of the local&nbsp;&nbsp;"
    ],
    "ru": [
      "SW2 может напрямую связываться с ним. Однако & nbsp; для связи с хостами за пределами локального & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      229.2,
      236.16
    ],
    "en": [
      "subnet, SW2 needs to know its default gateway,&nbsp; so that’s why we have to use that command."
    ],
    "ru": [
      "подсети, SW2 должен знать свой шлюз по умолчанию, & nbsp; вот почему мы должны использовать эту команду."
    ]
  },
  {
    "time": [
      236.16,
      241.04
    ],
    "en": [
      "Next, in step 2 we’ll configure a few&nbsp; security settings on the console line.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем, на шаге 2, мы настроим несколько & nbsp; настройки безопасности в строке консоли. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      241.04,
      246.64
    ],
    "en": [
      "LINE CONSOLE 0. There is only one&nbsp; console line, so the number is always 0.&nbsp;&nbsp;"
    ],
    "ru": [
      "ЛИНИЯ КОНСОЛИ 0. Есть только один & nbsp; в строке консоли, поэтому число всегда равно 0. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      246.64,
      250.0
    ],
    "en": [
      "Now let’s configure local authentication. LOGIN&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь давайте настроим локальную аутентификацию. ВХОД & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      250.0,
      257.04
    ],
    "en": [
      "LOCAL. So, to connect to the console line a user&nbsp; will have to use the account we configured before.&nbsp;&nbsp;"
    ],
    "ru": [
      "МЕСТНЫЙ. Итак, чтобы подключиться к строке консоли, пользователь & nbsp; придется использовать учетную запись, которую мы настроили ранее. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      257.04,
      264.72
    ],
    "en": [
      "Then, I’ll set the exec timeout. EXEC-TIMEOUT 5.&nbsp; Note that you don’t have to specify 0 seconds,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я установлю тайм-аут выполнения. ВЫПОЛНЕНИЕ ТАЙМАУТА 5. & nbsp; Обратите внимание, что указывать 0 секунд необязательно, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      264.72,
      271.44
    ],
    "en": [
      "you can just specify 5 minutes and then hit enter.&nbsp; Now to test the local authentication I’ll use END&nbsp;&nbsp;"
    ],
    "ru": [
      "вы можете просто указать 5 минут и нажать Enter. & nbsp; Теперь, чтобы протестировать локальную аутентификацию, я воспользуюсь END & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      271.44,
      278.0
    ],
    "en": [
      "to return to privileged exec mode, and then&nbsp; EXIT to log out. Hit enter, and now I’m asked&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы вернуться в привилегированный режим exec, а затем & nbsp; ВЫХОД, чтобы выйти. Нажмите Enter, и теперь меня спрашивают: & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      278.0,
      286.4
    ],
    "en": [
      "for a username, jeremy, and a password,&nbsp; ccna. ENABLE. And again, password of ccna."
    ],
    "ru": [
      "для имени пользователя, Джереми и пароля, & nbsp; ccna. ВКЛЮЧИТЬ. И снова пароль ccna."
    ]
  },
  {
    "time": [
      286.4,
      291.76
    ],
    "en": [
      "Okay, now step 3 is to configure&nbsp; SW2 for remote access via SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь шаг 3 - настроить & nbsp; SW2 для удаленного доступа по SSH. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      291.76,
      297.68
    ],
    "en": [
      "First, let me try to generate&nbsp; RSA keys. CONF T. CRYPTO KEY&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, позвольте мне попытаться создать & nbsp; Ключи RSA. CONF T. CRYPTO KEY & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      297.68,
      304.72
    ],
    "en": [
      "GENERATE RSA. Since SW2 doesn’t have a domain&nbsp; name yet, it can’t generate the keys. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "СОЗДАТЬ RSA. Поскольку у SW2 нет домена & nbsp; имя пока не может генерировать ключи. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      304.72,
      311.92
    ],
    "en": [
      "let’s specify the domain name.&nbsp; IP DOMAIN NAME jeremysitlab.com.&nbsp;&nbsp;"
    ],
    "ru": [
      "укажите имя домена. & nbsp; ИМЯ IP-ДОМЕНА jeremysitlab.com. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      311.92,
      318.32
    ],
    "en": [
      "And now I’ll try to generate the keys again.&nbsp; CRYPTO KEY GENERATE RSA. And I’ll specify&nbsp;&nbsp;"
    ],
    "ru": [
      "А теперь я попробую снова сгенерировать ключи. & Nbsp; КРИПТО КЛЮЧ ГЕНЕРИРУЕТ RSA. И я укажу & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      318.32,
      326.16
    ],
    "en": [
      "the key modulus size of 2048 bits, and it works.&nbsp; RSA keys are used for encryption and decryption,&nbsp;&nbsp;"
    ],
    "ru": [
      "размер ключевого модуля 2048 бит, и он работает. Ключи RSA используются для шифрования и дешифрования, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      326.16,
      331.76
    ],
    "en": [
      "by the way. I’ll give some more detail in&nbsp; the security section of the course. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "Кстати. Я расскажу подробнее об & nbsp; секция безопасности курса. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      331.76,
      338.96
    ],
    "en": [
      "now before configuring the VTY lines I’m going&nbsp; to configure an ACL to limit access to PC1 only.&nbsp;&nbsp;"
    ],
    "ru": [
      "теперь, прежде чем настраивать линии VTY, я собираюсь & nbsp; для настройки ACL для ограничения доступа только к ПК1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      338.96,
      348.8
    ],
    "en": [
      "I’ll just use a simple standard ACL. ACCESS-LIST&nbsp; 1 PERMIT HOST 192.168.1.1. I want to limit access&nbsp;&nbsp;"
    ],
    "ru": [
      "Я просто воспользуюсь простым стандартным ACL. СПИСОК ДОСТУПА & nbsp; 1 РАЗРЕШЕНИЕ НА ХОЗЯИН 192.168.1.1. Я хочу ограничить доступ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      348.8,
      355.68
    ],
    "en": [
      "to SSH only, no Telnet, but we can do that with&nbsp; the TRANSPORT INPUT SSH command so there isn’t&nbsp;&nbsp;"
    ],
    "ru": [
      "только по SSH, без Telnet, но мы можем сделать это с помощью & nbsp; команду TRANSPORT INPUT SSH, чтобы не было & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      355.68,
      366.4
    ],
    "en": [
      "actually any need to specify the port in the ACL.&nbsp; Now I’ll configure the VTY lines. LINE VTY 0 15.&nbsp;&nbsp;"
    ],
    "ru": [
      "вообще-то нужно указывать порт в ACL. & nbsp; Теперь я настрою линии VTY. СТРОКА VTY 0 15. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      366.4,
      372.88
    ],
    "en": [
      "First I’ll configure local authentication. LOGIN&nbsp; LOCAL. And the same 5 minute exec timeout as&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я настрою локальную аутентификацию. ВХОД & nbsp; МЕСТНЫЙ. И тот же 5-минутный тайм-аут выполнения, что и у & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      372.88,
      383.28
    ],
    "en": [
      "on the console lines. EXEC-TIMEOUT 5. Then I’ll&nbsp; restrict access to SSH only, TRANSPORT INPUT SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "на консольных строках. EXEC-TIMEOUT 5. Тогда я & nbsp; ограничить доступ только по SSH, ТРАНСПОРТИРОВАТЬ ВВОД SSH. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      383.28,
      391.68
    ],
    "en": [
      "And finally, apply the ACL I configured&nbsp; before. ACCESS-CLASS 1 IN. That’s it."
    ],
    "ru": [
      "И, наконец, примените настроенный мной ACL & nbsp; до. ДОСТУП-КЛАСС 1 В. Вот и все."
    ]
  },
  {
    "time": [
      391.68,
      396.48
    ],
    "en": [
      "So, let’s test it out. First, I’ll try from R2,&nbsp; which shouldn’t be able to connect because of&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте проверим это. Сначала я попробую от R2, & nbsp; который не сможет подключиться из-за & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      396.48,
      410.88
    ],
    "en": [
      "the ACL. First, I’ll try a ping. ENABLE. PING&nbsp; 192.168.2.253. Okay, so R2 is able to ping SW2.&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL. Сначала я попробую пинг. ВКЛЮЧИТЬ. ПИНГ & nbsp; 192.168.2.253. Итак, R2 может отправить эхо-запрос SW2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      410.88,
      423.2
    ],
    "en": [
      "How about SSH? SSH -L jeremy 192.168.2.253.&nbsp; And the connection is refused by SW2. Perfect.&nbsp;&nbsp;"
    ],
    "ru": [
      "Как насчет SSH? SSH -L Джереми 192.168.2.253. & Nbsp; И в соединении отказано SW2. Идеально. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      423.2,
      430.08
    ],
    "en": [
      "Next I’ll try from PC1, which should be able&nbsp; to SSH because the ACL permits PC1 only.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я попробую с ПК1, который должен & nbsp; к SSH, потому что ACL разрешает только ПК1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      430.08,
      438.32
    ],
    "en": [
      "First I’ll try to ping SW2&nbsp; from PC1. PING 192.168.2.253.&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я попробую проверить связь с SW2 & nbsp; с ПК1. ПИНГ 192.168.2.253. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      438.32,
      444.24
    ],
    "en": [
      "The ARP process can be slow in packet tracer, so&nbsp; a few pings might fail, but after that the pings&nbsp;&nbsp;"
    ],
    "ru": [
      "В трассировщике пакетов процесс ARP может быть медленным, поэтому & nbsp; несколько пингов могут не сработать, но после этого пинги & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      444.24,
      458.32
    ],
    "en": [
      "will succeed. So, PC1 can reach SW2 with ping,&nbsp; how about SSH? SSH -L jeremy 192.168.2.253. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "преуспеет. Таким образом, ПК1 может подключиться к SW2 с помощью команды ping, & nbsp; как насчет SSH? SSH -L Джереми 192.168.2.253. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      458.32,
      467.68
    ],
    "en": [
      "enter the password of ccna and we’re in. So, PC1&nbsp; was able to connect to the CLI of SW2 using SSH."
    ],
    "ru": [
      "введите пароль ccna, и мы в деле. Итак, PC1 & nbsp; смог подключиться к CLI SW2 с помощью SSH."
    ]
  },
  {
    "time": [
      467.68,
      470.48
    ],
    "en": [
      "In this lab we configured&nbsp; some console line security,&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы настроили & nbsp; некоторая защита линии консоли, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      470.48,
      474.32
    ],
    "en": [
      "and enabled SW2 for remote access via SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "и включил SW2 для удаленного доступа через SSH. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      474.32,
      482.4
    ],
    "en": [
      "That’s all for this lab. Now let’s take a look at&nbsp; a bonus lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Вот и все для этой лаборатории. Теперь давайте посмотрим на & nbsp; бонусная лаборатория в NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      482.4,
      490.08
    ],
    "en": [
      "Okay here's today's Boson NetSim practice lab.&nbsp; The lab I have selected is configuring SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практическая лаборатория Boson NetSim. & Nbsp; В выбранной мной лаборатории настраивается SSH. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      490.08,
      497.44
    ],
    "en": [
      "So, we will configure SSH here on Router1 in this&nbsp; lab. These are the commands you need to know.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, мы настроим SSH здесь на Router1 в этом & nbsp; лаборатория. Это команды, которые вам необходимо знать. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      497.44,
      502.0
    ],
    "en": [
      "We covered almost all of the commands, but there&nbsp; is one or two that I didn't cover in the lecture&nbsp;&nbsp;"
    ],
    "ru": [
      "Мы рассмотрели почти все команды, но и NBSP; это один или два, что я не покрывал в лекции & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      502.0,
      510.08
    ],
    "en": [
      "video. Okay, so those are the commands, and&nbsp; the lab tasks. There are two tasks with quite&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. Итак, это те команды, и & NBSP; лабораторные задания. Есть две задачи с достаточно & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      510.08,
      514.8
    ],
    "en": [
      "a few steps but they're all pretty quick so&nbsp; I think we'll do the whole lab in this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "несколько шагов, но все они довольно быстро, так и NBSP; Я думаю, что мы будем делать всю лабораторию в этом видео & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      514.8,
      524.4
    ],
    "en": [
      "So let's get right to it. First, from PC1 we'll&nbsp; attempt to ping this subinterface on Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте на это право. Во-первых, из PC1 мы будем & NBSP; пытаться свистеть эту подинтерфейс на Роутер1 & NBSP; & NBSP.;"
    ]
  },
  {
    "time": [
      524.4,
      540.0
    ],
    "en": [
      "So, 10.10.0.1. And okay, so two of&nbsp; them timed out and then the others&nbsp;&nbsp;"
    ],
    "ru": [
      "Так, 10.10.0.1. И хорошо, так что два из & NBSP; их истекло, а затем остальные & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      540.0,
      547.12
    ],
    "en": [
      "went through. So PC1 does have&nbsp; reachability, it can ping Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "прошел через. Так PC1 имеет & NBSP; достижимость, он может свистеть router1 & NBSP; & NBSP.;"
    ]
  },
  {
    "time": [
      547.12,
      555.76
    ],
    "en": [
      "Next, in step 2 we will attempt to&nbsp; Telnet to that same interface. Okay.&nbsp;&nbsp;"
    ],
    "ru": [
      "Далее, на шаге 2 мы попытаемся & NBSP; Telnet к тому же интерфейсу. Хорошо & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      555.76,
      562.8
    ],
    "en": [
      "Okay, looks like it works. What is the&nbsp; password? It says right here, boson.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, похоже, что это работает. Что такое & NBSP; пароль? Он говорит, что здесь, бозон & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      562.8,
      566.32
    ],
    "en": [
      "Okay, so we are able to Telnet to Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, мы можем Telnet к Роутер1 & NBSP; & NBSP.;"
    ]
  },
  {
    "time": [
      566.32,
      584.16
    ],
    "en": [
      "And then for step 3 I exited out of that Telnet&nbsp; session. Step 4, we will try to SSH to Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "А потом на шаге 3 я вышел из этого Telnet & NBSP; сеанс. Шаг 4, мы будем стараться SSH к Роутер1 & NBSP; & NBSP.;"
    ]
  },
  {
    "time": [
      584.16,
      593.36
    ],
    "en": [
      "And the connection is refused by Router1. Okay,&nbsp; so the SSH session fails. And step 5, on Router1,&nbsp;&nbsp;"
    ],
    "ru": [
      "И связь отказывается от Роутер1. Хорошо, & nbsp; поэтому SSH сессии не удается. И шаг 5, на Роутер1, & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      593.36,
      600.32
    ],
    "en": [
      "okay let me open up a connection, determine&nbsp; whether SSH is enabled or disabled. Okay so the&nbsp;&nbsp;"
    ],
    "ru": [
      "хорошо позвольте мне открыть соединение, определить & NBSP; ли SSH включена или отключена. Хорошо, так что & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      600.32,
      613.92
    ],
    "en": [
      "command is SHOW IP SSH. And it is disabled. Okay,&nbsp; attempt to enable SSH version 2. Was it enabled?&nbsp;&nbsp;"
    ],
    "ru": [
      "Команда SHOW IP SSH. И она отключена. Хорошо, & nbsp; попытка включить SSH версии 2. Это был включен & NBSP;? & NBSP;"
    ]
  },
  {
    "time": [
      613.92,
      625.52
    ],
    "en": [
      "Let me see, IP SSH VERSION 2 is the command. And&nbsp; it tells us to create RSA keys to enable SSH.&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне видеть, IP SSH версия 2 является команда. И & NBSP; он говорит нам, чтобы создать ключи RSA, чтобы включить SSH & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      625.52,
      635.44
    ],
    "en": [
      "Okay, so next in step 7 let's create those RSA&nbsp; keys. CRYPTO KEY GENERATE RSA. But it doesn't&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, следующий шаг в 7 Давайте создадим тот RSA & NBSP; ключи. КРИПТО КЛЮЧ ГЕНЕРИРУЕТ RSA. Но это не & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      635.44,
      644.16
    ],
    "en": [
      "work because Router1 does not have a domain name&nbsp; configured. So I'll configure that. IP DOMAIN NAME&nbsp;&nbsp;"
    ],
    "ru": [
      "работа, потому что Router1 не имеет доменное имя & NBSP; настроен. Так что я буду настраивать это. IP-ДОМЕН & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      644.16,
      653.68
    ],
    "en": [
      "boson.com. And then one more time, in step 9 we&nbsp; will create those RSA keys. And it works. So the&nbsp;&nbsp;"
    ],
    "ru": [
      "boson.com. А потом еще один раз, в шаге 9 мы & NBSP; будет создавать эти ключи RSA. И это работает. Таким образом, & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      653.68,
      666.64
    ],
    "en": [
      "modulus size is 1024 bits, okay. Next, step 10.&nbsp; Configure an SSH session timeout of 90 seconds.&nbsp;&nbsp;"
    ],
    "ru": [
      "модуль размером 1024 бит, хорошо. Далее, шаг 10. & NBSP; Настройка SSH тайм-аута сеанса 90 секунд & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      666.64,
      671.12
    ],
    "en": [
      "Okay, so this is a command I didn't&nbsp; mention in the lecture video.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, так что это команда, которую я не & NBSP сделал; упоминание в лекции видео & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      671.12,
      675.68
    ],
    "en": [
      "It is..actually first, let me check&nbsp; the second part. What is the default&nbsp;&nbsp;"
    ],
    "ru": [
      "Это is..actually первый, позвольте мне проверить & NBSP; Вторая часть. Что такое по умолчанию & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      675.68,
      683.92
    ],
    "en": [
      "and maximum timeout value? You can view that&nbsp; with this command again. Here, 120 seconds.&nbsp;&nbsp;"
    ],
    "ru": [
      "и максимальное значение тайм-аута? Вы можете посмотреть, что & NBSP; С помощью этой команды снова. Здесь, 120 секунд & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      683.92,
      693.92
    ],
    "en": [
      "So, to configure it it's IP SSH&nbsp; TIME-OUT, and we'll set it to 90.&nbsp;&nbsp;"
    ],
    "ru": [
      "Таким образом, чтобы настроить это IP SSH & NBSP; TIME-OUT, и мы установим его на 90. & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      693.92,
      700.08
    ],
    "en": [
      "Okay, and then finally enable SSH&nbsp; version 2. I think it already is enabled,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, а затем, наконец, включить SSH & NBSP; версия 2. Я думаю, что это уже включена, & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      700.08,
      709.12
    ],
    "en": [
      "it says it here. But I'll enter that&nbsp; command once more. IP SSH VERSION 2, okay.&nbsp;&nbsp;"
    ],
    "ru": [
      "он говорит, что это здесь. Но я введу, что & NBSP; Команда еще раз. IP SSH версия 2, хорошо & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      709.12,
      715.52
    ],
    "en": [
      "Okay, step 12. Configure a local username that has&nbsp; a password of boson and privilege level 15. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, шаг 12. Настройка локальной имени пользователя, который имеет & NBSP; пароль из бозонов и привилегии уровня 15. Хорошо, & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      715.52,
      722.0
    ],
    "en": [
      "so we will configure a privilege level. I didn't&nbsp; mention this yet, but the command is USERNAME&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому мы будем настраивать уровень привилегий. Я не & NBSP сделал; говорить об этом пока нет, но команда USERNAME & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      722.0,
      735.92
    ],
    "en": [
      "admin PRIVILEGE 15, that's the maximum, and it&nbsp; says PASSWORD, so not SECRET, PASSWORD boson.&nbsp;&nbsp;"
    ],
    "ru": [
      "админ ПРИВИЛЕГИЯ 15, это максимум, и & NBSP; говорит ПАРОЛЬ, поэтому не SECRET, PASSWORD бозон & NBSP;. & NBSP;"
    ]
  },
  {
    "time": [
      735.92,
      747.12
    ],
    "en": [
      "Okay and then step 13, we will configure&nbsp; the VTY lines to allow only SSH. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, а затем шаг 13, мы настроим & NBSP; в VTY линии, чтобы разрешить только SSH. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      747.12,
      763.2
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
      747.12,
      763.2
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
      763.2,
      768.72
    ],
    "en": [
      "So from PC1 let's try that again. Same command,&nbsp; and it works. We are asked for the password. That&nbsp;&nbsp;"
    ],
    "ru": [
      "Так что с PC1 давайте попробуем это снова. То же команда, & NBSP; и это работает. Мы запрошен пароль. Это & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      768.72,
      776.08
    ],
    "en": [
      "means we were able to connect. The password is&nbsp; boson, and there we go. Oh, no password set,&nbsp;&nbsp;"
    ],
    "ru": [
      "означает, что мы смогли подключиться. Пароль & NBSP; бозон, и там мы идем. О, нет пароля набор, & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      776.08,
      784.48
    ],
    "en": [
      "okay. While, the SSH session is active, verify the&nbsp; SSH version and key size used for the session. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Ладно. Пока, SSH сеанс активен, проверьте & NBSP; SSH версии и размер ключа, используемый для сессии. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      784.48,
      790.64
    ],
    "en": [
      "we didn't set an enable password, so I can't&nbsp; enable. I could go straight to Router1.&nbsp;&nbsp;"
    ],
    "ru": [
      "мы не установили пароль разрешения, так что я не & NBSP может; включить. Я мог бы пойти прямо к Роутер1 & NBSP; & NBSP.;"
    ]
  },
  {
    "time": [
      790.64,
      801.6
    ],
    "en": [
      "Here, I'll tell you what. ENABLE SECRET boson.&nbsp; And then go back to the SSH session here on PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот, я вам скажу, что. ВКЛЮЧИТЬ SECRET бозон & NBSP. А затем вернуться к SSH сессии здесь на ПК1 & NBSP; & NBSP.;"
    ]
  },
  {
    "time": [
      801.6,
      812.24
    ],
    "en": [
      "And now we are able to use ENABLE. The&nbsp; password is boson, there we go. SHOW SSH&nbsp;&nbsp;"
    ],
    "ru": [
      "И теперь мы можем использовать ВКЛЮЧИТЬ. & Nbsp; пароль бозон, мы идем. ШОУ SSH & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      812.24,
      816.88
    ],
    "en": [
      "gives us information about the current SSH&nbsp; sessions. So this is different than SHOW&nbsp;&nbsp;"
    ],
    "ru": [
      "дает нам информацию о текущем SSH & NBSP; сеансы. Так что это отличается от SHOW & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      816.88,
      824.48
    ],
    "en": [
      "IP SSH. SHOW SSH tells you about the current&nbsp; connections. So, connection 0 is using version&nbsp;&nbsp;"
    ],
    "ru": [
      "IP SSH. SHOW SSH сообщает вам о текущих & nbsp; соединения. Итак, соединение 0 использует версию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      824.48,
      835.68
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
      824.48,
      835.68
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
      835.68,
      840.72
    ],
    "en": [
      "Okay, while the SSH session is active, determine&nbsp; the username, okay I just pointed that out,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, пока сеанс SSH активен, определите & nbsp; имя пользователя, хорошо, я только что указал на это, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      840.72,
      849.84
    ],
    "en": [
      "it's here, admin. Exit the SSH session.&nbsp; And then attempt to Telnet. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "это здесь, админ. Выйдите из сеанса SSH. & Nbsp; А затем попробуйте Telnet. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      849.84,
      857.44
    ],
    "en": [
      "so we configured TRANSPORT INPUT SSH,&nbsp; so this should fail. TELNET 10.10.0.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому мы настроили TRANSPORT INPUT SSH, & nbsp; так что это должно потерпеть неудачу. TELNET 10.10.0.1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      857.44,
      865.84
    ],
    "en": [
      "And the connection is refused. Okay, so that was&nbsp; a quick look at Boson Software's NetSim for CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "И в соединении отказано. Хорошо, это было & nbsp; краткий обзор NetSim от Boson Software для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      865.84,
      869.6
    ],
    "en": [
      "As you can see here there are tons&nbsp; of practice labs for the CCNA,&nbsp;&nbsp;"
    ],
    "ru": [
      "Как видите, здесь есть тонны & nbsp; практических лабораторий для CCNA, & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      869.6,
      874.4
    ],
    "en": [
      "so if you want some extra guided, detailed&nbsp; practice labs I highly recommend Boson&nbsp;&nbsp;"
    ],
    "ru": [
      "так что, если вам нужны дополнительные подробные инструкции & NBSP; практические лаборатории Я настоятельно рекомендую Boson & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      874.4,
      881.52
    ],
    "en": [
      "NetSim. If you want to get NetSim, please&nbsp; follow the link in the video description."
    ],
    "ru": [
      "NetSim. Если вы хотите получить NetSim, пожалуйста, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      881.52,
      886.56
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
      886.56,
      892.32
    ],
    "en": [
      "To join, please click the ‘Join’ button under&nbsp; the video. Thank you to Raj, Kenneth, Seamus,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Раджу, Кеннету, Симусу, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      892.32,
      898.0
    ],
    "en": [
      "H W, Brandon, Samil, Aaron, Marcel, Kone,&nbsp; Donald, C Mohd, Gustavo, Anthony, Junhong,&nbsp;&nbsp;"
    ],
    "ru": [
      "Х. В., Брэндон, Самил, Аарон, Марсель, Коне, & nbsp; Дональд, Си Мохд, Густаво, Энтони, Джунхонг, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      898.0,
      903.84
    ],
    "en": [
      "Benjamin, Tshepiso, Justin, Prakaash, Nasir,&nbsp; Erlison, Marko, Daming, Jhilmar, Ed, Value,&nbsp;&nbsp;"
    ],
    "ru": [
      "Бенджамин, Чеписо, Джастин, Пракааш, Насир, & NBSP; Эрлисон, Марко, Даминг, Джилмар, Эд, Вэлью, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      903.84,
      910.32
    ],
    "en": [
      "John, Funnydart, Velvijaykum, Mark, Yousif, Boson&nbsp; Software, Devin, Lito, Yonatan, and Vance. Sorry&nbsp;&nbsp;"
    ],
    "ru": [
      "Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, Бозон & nbsp; Программное обеспечение, Девин, Лито, Йонатан и Вэнс. К сожалению, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      910.32,
      915.12
    ],
    "en": [
      "if I pronounced your name incorrectly, but&nbsp; thank you so much for your support. This is&nbsp;&nbsp;"
    ],
    "ru": [
      "если я неправильно произнес ваше имя, но & nbsp; Спасибо большое за вашу поддержку. Это & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      915.12,
      921.84
    ],
    "en": [
      "the list of JCNP-level members at the time of&nbsp; recording by the way, February 25th 2021. If&nbsp;&nbsp;"
    ],
    "ru": [
      "список участников уровня JCNP на момент & nbsp; запись, кстати, 25 февраля 2021 года. Если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      921.84,
      928.72
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
      928.72,
      931.76
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
      931.76,
      937.6
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
      937.6,
      943.2
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
      943.2,
      943.2
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]