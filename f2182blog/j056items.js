let objs = [
  {
    "time": [
      0.53,
      2.929
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
      2.929,
      6.3
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
      6.3,
      10.17
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
      10.17,
      16.11
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
      16.11,
      18.26
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
      18.26,
      25.91
    ],
    "en": [
      "In this video we will cover two very important protocols, TCP and UDP, two Layer 4 protocols."
    ],
    "ru": [
      "В этом видео мы рассмотрим два очень важных протокола, TCP и UDP, два протокола уровня 4."
    ]
  },
  {
    "time": [
      25.91,
      32.07
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
      25.91,
      32.07
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
      32.07,
      38.769
    ],
    "en": [
      "TCP to UDP. I could spend hours covering the details of how these protocols work, but for the CCNA"
    ],
    "ru": [
      "TCP в UDP. Я мог бы часами освещать детали того, как работают эти протоколы, но для CCNA"
    ]
  },
  {
    "time": [
      38.769,
      44.3
    ],
    "en": [
      "you just need a high-level understanding of their basic characteristics and how they are different."
    ],
    "ru": [
      "вам просто нужно хорошо разбираться в их основных характеристиках и в том, чем они отличаются."
    ]
  },
  {
    "time": [
      44.3,
      47.94
    ],
    "en": [
      "different. Here’s what we’ll cover in this video."
    ],
    "ru": [
      "другой. Вот что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      47.94,
      50.429
    ],
    "en": [
      "First up, the basics of Layer 4."
    ],
    "ru": [
      "Во-первых, основы уровня 4."
    ]
  },
  {
    "time": [
      50.429,
      54.949
    ],
    "en": [
      "We’ve already covered a lot regarding Layers 1, 2, and 3."
    ],
    "ru": [
      "Мы уже много говорили о слоях 1, 2 и 3."
    ]
  },
  {
    "time": [
      54.949,
      60.19
    ],
    "en": [
      "For example, at Layer 1 we covered the most common cable types used in networks."
    ],
    "ru": [
      "Например, на уровне 1 мы рассмотрели наиболее распространенные типы кабелей, используемые в сетях."
    ]
  },
  {
    "time": [
      60.19,
      65.409
    ],
    "en": [
      "At Layer 2 we covered things like MAC addresses, switching, and spanning tree."
    ],
    "ru": [
      "На уровне 2 мы рассмотрели такие вещи, как MAC-адреса, коммутация и связующее дерево."
    ]
  },
  {
    "time": [
      65.409,
      69.439
    ],
    "en": [
      "At Layer 3 we covered things like IP addresses and routing."
    ],
    "ru": [
      "На уровне 3 мы рассмотрели такие вещи, как IP-адреса и маршрутизация."
    ]
  },
  {
    "time": [
      69.439,
      72.96000000000001
    ],
    "en": [
      "Now I think is a good time to talk about Layer 4."
    ],
    "ru": [
      "Теперь я думаю, что самое время поговорить об уровне 4."
    ]
  },
  {
    "time": [
      72.96000000000001,
      80.06
    ],
    "en": [
      "After a basic overview of Layer 4, I will introduce TCP, the Transmission Control Protocol."
    ],
    "ru": [
      "После базового обзора уровня 4 я представлю TCP, протокол управления передачей."
    ]
  },
  {
    "time": [
      80.06,
      84.189
    ],
    "en": [
      "After that, I will introduce UDP, User Datagram Protocol."
    ],
    "ru": [
      "После этого я представлю UDP, протокол пользовательских дейтаграмм."
    ]
  },
  {
    "time": [
      84.189,
      91.439
    ],
    "en": [
      "UDP is much simpler than TCP, and it’s easiest to understand after learning TCP."
    ],
    "ru": [
      "UDP намного проще, чем TCP, и его легче всего понять после изучения TCP."
    ]
  },
  {
    "time": [
      91.439,
      92.85
    ],
    "en": [
      "Then we’ll compare the two."
    ],
    "ru": [
      "Затем мы сравним их."
    ]
  },
  {
    "time": [
      92.85,
      98.229
    ],
    "en": [
      "Remember, that is the exam topic, compare TCP to UDP."
    ],
    "ru": [
      "Помните, что это тема экзамена, сравните TCP с UDP."
    ]
  },
  {
    "time": [
      98.229,
      102.549
    ],
    "en": [
      "As always, make sure to watch until the end of the video for a bonus practice question"
    ],
    "ru": [
      "Как всегда, обязательно просмотрите видео до конца, чтобы узнать о бонусной практике."
    ]
  },
  {
    "time": [
      102.549,
      107.60900000000001
    ],
    "en": [
      "from Boson ExSim, the best practice exams you can get for the CCNA."
    ],
    "ru": [
      "от Boson ExSim, лучшие практические экзамены, которые вы можете сдать для CCNA."
    ]
  },
  {
    "time": [
      107.60900000000001,
      111.189
    ],
    "en": [
      "If you want to get Boson ExSim, follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      111.189,
      115.259
    ],
    "en": [
      "Okay, let’s get started."
    ],
    "ru": [
      "Ладно, приступим."
    ]
  },
  {
    "time": [
      115.259,
      119.689
    ],
    "en": [
      "So let’s cover some basic functions of Layer 4 protocols."
    ],
    "ru": [
      "Итак, давайте рассмотрим некоторые основные функции протоколов уровня 4."
    ]
  },
  {
    "time": [
      119.689,
      125.299
    ],
    "en": [
      "First up, Layer 4 provides transparent transfer of data between end hosts."
    ],
    "ru": [
      "Во-первых, уровень 4 обеспечивает прозрачную передачу данных между конечными хостами."
    ]
  },
  {
    "time": [
      125.299,
      129.97899999999998
    ],
    "en": [
      "To briefly explain what that means, here’s an image I used back in Day 3 of the course"
    ],
    "ru": [
      "Чтобы вкратце объяснить, что это означает, вот изображение, которое я использовал в третьем дне курса."
    ]
  },
  {
    "time": [
      129.97899999999998,
      134.29
    ],
    "en": [
      "when I covered the OSI Model and TCP/IP Suite."
    ],
    "ru": [
      "когда я рассказывал о модели OSI и TCP / IP Suite."
    ]
  },
  {
    "time": [
      134.29,
      142.39
    ],
    "en": [
      "This up here shows the network topology, with Host A sending data to Host B. What does the Transport Layer do?"
    ],
    "ru": [
      "Здесь показана топология сети с хостом A, отправляющим данные хосту B. Что делает транспортный уровень?"
    ]
  },
  {
    "time": [
      142.39,
      147.92000000000002
    ],
    "en": [
      "Transport Layer do? It encapsulates the data with a Layer 4 header, and then uses the services of the lower layers,"
    ],
    "ru": [
      "Транспортный уровень делать? Он инкапсулирует данные с заголовком уровня 4, а затем использует услуги нижних уровней,"
    ]
  },
  {
    "time": [
      147.92000000000002,
      153.77
    ],
    "en": [
      "Layers 3, 2, and 1, to deliver the data unchanged to the destination host."
    ],
    "ru": [
      "Уровни 3, 2 и 1 для доставки данных на хост назначения без изменений."
    ]
  },
  {
    "time": [
      153.77,
      158.019
    ],
    "en": [
      "The hosts themselves aren’t aware of the details of the underlying network, the transfer"
    ],
    "ru": [
      "Сами хосты не осведомлены о деталях базовой сети, передача"
    ]
  },
  {
    "time": [
      158.019,
      162.09
    ],
    "en": [
      "of data is ‘transparent’ to them."
    ],
    "ru": [
      "данных является для них «прозрачным»."
    ]
  },
  {
    "time": [
      162.09,
      168.87
    ],
    "en": [
      "Another function of Layer 4 protocols is to provide, or not provide, various services to applications."
    ],
    "ru": [
      "Другая функция протоколов уровня 4 - предоставлять или не предоставлять различные услуги приложениям."
    ]
  },
  {
    "time": [
      168.87,
      175.98
    ],
    "en": [
      "to applications. You’ll soon see that TCP provides these services to applications, whereas UDP does not."
    ],
    "ru": [
      "к приложениям. Скоро вы увидите, что TCP предоставляет эти услуги приложениям, а UDP - нет."
    ]
  },
  {
    "time": [
      175.98,
      178.57999999999998
    ],
    "en": [
      "not. What are some of these services?"
    ],
    "ru": [
      "нет. Какие из этих услуг?"
    ]
  },
  {
    "time": [
      178.57999999999998,
      181.51
    ],
    "en": [
      "One is reliable data transfer."
    ],
    "ru": [
      "Один из них - надежная передача данных."
    ]
  },
  {
    "time": [
      181.51,
      188.739
    ],
    "en": [
      "That means making sure that the destination host actually received every bit of data that it’s supposed to."
    ],
    "ru": [
      "Это означает, что целевой хост действительно получил каждый бит данных, который должен был быть."
    ]
  },
  {
    "time": [
      188.739,
      192.12
    ],
    "en": [
      "it’s supposed to. Another service is error recovery."
    ],
    "ru": [
      "это должно быть. Еще одна услуга - исправление ошибок."
    ]
  },
  {
    "time": [
      192.12,
      198.65
    ],
    "en": [
      "If an error occurs in transmission, Layer 4 can ensure the data is sent again."
    ],
    "ru": [
      "Если при передаче возникает ошибка, уровень 4 может гарантировать повторную отправку данных."
    ]
  },
  {
    "time": [
      198.65,
      203.06
    ],
    "en": [
      "Next is data sequencing, making sure that even if data arrives at the destination out"
    ],
    "ru": [
      "Затем следует упорядочить данные, чтобы убедиться, что даже если данные поступают в пункт назначения."
    ]
  },
  {
    "time": [
      203.06,
      208.16
    ],
    "en": [
      "of order, the end host can sequence it in the correct order."
    ],
    "ru": [
      "порядка, конечный хост может упорядочить его в правильном порядке."
    ]
  },
  {
    "time": [
      208.16,
      213.459
    ],
    "en": [
      "One more is flow control, making sure that the source host doesn’t send traffic faster"
    ],
    "ru": [
      "Еще один - это управление потоком, чтобы убедиться, что исходный хост не отправляет трафик быстрее."
    ]
  },
  {
    "time": [
      213.459,
      216.55
    ],
    "en": [
      "than the destination host can handle."
    ],
    "ru": [
      "чем хост назначения может обработать."
    ]
  },
  {
    "time": [
      216.55,
      220.07999999999998
    ],
    "en": [
      "These are services provided by TCP but not UDP."
    ],
    "ru": [
      "Это услуги, предоставляемые TCP, но не UDP."
    ]
  },
  {
    "time": [
      220.07999999999998,
      224.76
    ],
    "en": [
      "I’ll explain further later, so don’t worry about memorizing these yet."
    ],
    "ru": [
      "Я объясню позже, так что пока не беспокойтесь об их запоминании."
    ]
  },
  {
    "time": [
      224.76,
      230.62
    ],
    "en": [
      "Okay, one more function of Layer 4 is to provide Layer 4 addressing."
    ],
    "ru": [
      "Хорошо, еще одна функция уровня 4 - обеспечить адресацию уровня 4."
    ]
  },
  {
    "time": [
      230.62,
      232.92000000000002
    ],
    "en": [
      "These addresses are called ‘port numbers’."
    ],
    "ru": [
      "Эти адреса называются «номерами портов»."
    ]
  },
  {
    "time": [
      232.92000000000002,
      238.329
    ],
    "en": [
      "Note that the word ‘port’ can also refer to the physical interfaces you connect cables"
    ],
    "ru": [
      "Обратите внимание, что слово «порт» также может относиться к физическим интерфейсам, к которым вы подключаете кабели."
    ]
  },
  {
    "time": [
      238.329,
      244.599
    ],
    "en": [
      "to on network devices, but the Layer 4 port is a totally different meaning of the word."
    ],
    "ru": [
      "на сетевых устройствах, но порт уровня 4 - это совершенно другое значение этого слова."
    ]
  },
  {
    "time": [
      244.599,
      249.42
    ],
    "en": [
      "These port numbers provide a few functions, one of them is identifying the Application"
    ],
    "ru": [
      "Эти номера портов предоставляют несколько функций, одна из них - идентификация приложения."
    ]
  },
  {
    "time": [
      249.42,
      251.959
    ],
    "en": [
      "Layer protocol that is being used."
    ],
    "ru": [
      "Используемый протокол уровня."
    ]
  },
  {
    "time": [
      251.959,
      256.459
    ],
    "en": [
      "Another is to provide something called ‘session multiplexing’."
    ],
    "ru": [
      "Другой - обеспечить так называемое «мультиплексирование сеанса»."
    ]
  },
  {
    "time": [
      256.459,
      258.25
    ],
    "en": [
      "Let me explain these concepts."
    ],
    "ru": [
      "Позвольте мне объяснить эти концепции."
    ]
  },
  {
    "time": [
      258.25,
      266.73
    ],
    "en": [
      "Here we have PC1, and it will access resources from two servers over the Internet, SRV1 and SRV2."
    ],
    "ru": [
      "Здесь у нас есть ПК1, и он будет получать доступ к ресурсам с двух серверов через Интернет, SRV1 и SRV2."
    ]
  },
  {
    "time": [
      266.73,
      272.78
    ],
    "en": [
      "SRV2. Let’s see how these ports are used to identify the service PC1 wants to access, and to track"
    ],
    "ru": [
      "SRV2. Давайте посмотрим, как эти порты используются для определения службы, к которой ПК1 хочет получить доступ, и для отслеживания"
    ]
  },
  {
    "time": [
      272.78,
      276.53
    ],
    "en": [
      "sessions between PC1 and the servers."
    ],
    "ru": [
      "сеансы между ПК1 и серверами."
    ]
  },
  {
    "time": [
      276.53,
      278.83
    ],
    "en": [
      "First of all, what is a session?"
    ],
    "ru": [
      "Прежде всего, что такое сеанс?"
    ]
  },
  {
    "time": [
      278.83,
      283.82
    ],
    "en": [
      "It’s simply an exchange of data between two or more communicating devices."
    ],
    "ru": [
      "Это просто обмен данными между двумя или более взаимодействующими устройствами."
    ]
  },
  {
    "time": [
      283.82,
      291.61
    ],
    "en": [
      "And in your daily use of your PC, your PC needs to be able to handle multiple communication sessions at once."
    ],
    "ru": [
      "А при ежедневном использовании компьютера он должен иметь возможность обрабатывать несколько сеансов связи одновременно."
    ]
  },
  {
    "time": [
      291.61,
      297.33
    ],
    "en": [
      "sessions at once. Perhaps you have multiple Internet tabs open, accessing different services over the Internet."
    ],
    "ru": [
      "сеансы сразу. Возможно, у вас открыто несколько вкладок Интернета, для доступа к различным службам через Интернет."
    ]
  },
  {
    "time": [
      297.33,
      302.9
    ],
    "en": [
      "You probably have multiple services running on your computer that need Internet access."
    ],
    "ru": [
      "Вероятно, на вашем компьютере работает несколько служб, которым требуется доступ в Интернет."
    ]
  },
  {
    "time": [
      302.9,
      307.62
    ],
    "en": [
      "In PC1’s case, let’s say it is communicating with SRV1."
    ],
    "ru": [
      "В случае ПК1, допустим, он обменивается данными с SRV1."
    ]
  },
  {
    "time": [
      307.62,
      316.12
    ],
    "en": [
      "At Layer 4 it is using TCP, and it uses a source port of 50000 and a destination port of 80."
    ],
    "ru": [
      "На уровне 4 он использует TCP, и он использует порт источника 50000 и порт назначения 80."
    ]
  },
  {
    "time": [
      316.12,
      318.639
    ],
    "en": [
      "of 80. What are these ports used for?"
    ],
    "ru": [
      "из 80. Для чего используются эти порты?"
    ]
  },
  {
    "time": [
      318.639,
      324.74
    ],
    "en": [
      "The destination port is very important, it identifies the Application Layer protocol."
    ],
    "ru": [
      "Порт назначения очень важен, он определяет протокол прикладного уровня."
    ]
  },
  {
    "time": [
      324.74,
      332.05
    ],
    "en": [
      "For example, TCP port 80 is used for the protocol HTTP, which is used to access websites."
    ],
    "ru": [
      "Например, TCP-порт 80 используется для протокола HTTP, который используется для доступа к веб-сайтам."
    ]
  },
  {
    "time": [
      332.05,
      337.02
    ],
    "en": [
      "So, perhaps SRV1 is hosting a webpage that PC1 wants to access."
    ],
    "ru": [
      "Итак, возможно, SRV1 размещает веб-страницу, к которой ПК1 хочет получить доступ."
    ]
  },
  {
    "time": [
      337.02,
      339.8
    ],
    "en": [
      "Now, how about the source port?"
    ],
    "ru": [
      "А как насчет исходного порта?"
    ]
  },
  {
    "time": [
      339.8,
      348.55
    ],
    "en": [
      "It’s randomly selected by PC1, and in combination with the destination port it helps identify the session."
    ],
    "ru": [
      "Он выбирается ПК1 случайным образом и в сочетании с портом назначения помогает идентифицировать сеанс."
    ]
  },
  {
    "time": [
      348.55,
      354.039
    ],
    "en": [
      "the session. For example, after SRV1 receives PC1’s message it will probably send a reply."
    ],
    "ru": [
      "сессия. Например, после того, как SRV1 получит сообщение ПК1, он, вероятно, отправит ответ."
    ]
  },
  {
    "time": [
      354.039,
      359.819
    ],
    "en": [
      "In SRV1’s reply, notice that the source and destination port numbers are reversed,"
    ],
    "ru": [
      "В ответе SRV1 обратите внимание, что номера портов источника и назначения поменяны местами,"
    ]
  },
  {
    "time": [
      359.819,
      364.69
    ],
    "en": [
      "the source port is 80 and the destination is 50000."
    ],
    "ru": [
      "исходный порт - 80, а пункт назначения - 50000."
    ]
  },
  {
    "time": [
      364.69,
      369.66
    ],
    "en": [
      "When PC1 receives this message, the source and destination port numbers tell it that"
    ],
    "ru": [
      "Когда ПК1 получает это сообщение, номера портов источника и назначения сообщают ему, что"
    ]
  },
  {
    "time": [
      369.66,
      375.72
    ],
    "en": [
      "it’s part of the same communication session as the message it sent earlier."
    ],
    "ru": [
      "это часть того же сеанса связи, что и сообщение, которое оно отправило ранее."
    ]
  },
  {
    "time": [
      375.72,
      379.62
    ],
    "en": [
      "What if PC1 opens up a separate connection to SRV1?"
    ],
    "ru": [
      "Что, если ПК1 откроет отдельное соединение с SRV1?"
    ]
  },
  {
    "time": [
      379.62,
      385.78
    ],
    "en": [
      "It might be using HTTP at destination port 80 again, but it’s using a different source port."
    ],
    "ru": [
      "Возможно, он снова использует HTTP на порту назначения 80, но использует другой порт источника."
    ]
  },
  {
    "time": [
      385.78,
      391.21
    ],
    "en": [
      "port. SRV1’s response will use that source port as the destination port for its response,"
    ],
    "ru": [
      "порт. Ответ SRV1 будет использовать этот исходный порт в качестве порта назначения для своего ответа,"
    ]
  },
  {
    "time": [
      391.21,
      395.139
    ],
    "en": [
      "so PC1 knows it’s part of that session."
    ],
    "ru": [
      "поэтому ПК1 знает, что это часть этого сеанса."
    ]
  },
  {
    "time": [
      395.139,
      399.229
    ],
    "en": [
      "But PC1 wants to access something on SRV2 at the same time."
    ],
    "ru": [
      "Но ПК1 одновременно хочет получить доступ к чему-то на SRV2."
    ]
  },
  {
    "time": [
      399.229,
      406.02
    ],
    "en": [
      "It uses a TCP destination port number of 21, and randomly selects the source port 60000."
    ],
    "ru": [
      "Он использует номер порта назначения TCP, равный 21, и случайным образом выбирает исходный порт 60000."
    ]
  },
  {
    "time": [
      406.02,
      412.36
    ],
    "en": [
      "TCP port 21 is used for FTP, the File Transfer Protocol."
    ],
    "ru": [
      "TCP-порт 21 используется для FTP, протокола передачи файлов."
    ]
  },
  {
    "time": [
      412.36,
      416.37
    ],
    "en": [
      "As the name suggests, it is used to transfer files."
    ],
    "ru": [
      "Как следует из названия, он используется для передачи файлов."
    ]
  },
  {
    "time": [
      416.37,
      425.4
    ],
    "en": [
      "SRV2’s reply will reverse the port numbers, using a source port of 21 and destination port of 60000."
    ],
    "ru": [
      "В ответе SRV2 номера портов меняются местами, используя порт источника 21 и порт назначения 60000."
    ]
  },
  {
    "time": [
      425.4,
      429.58
    ],
    "en": [
      "port of 60000. These will tell PC1 that this communication is part of the same session."
    ],
    "ru": [
      "порт 60000. Они сообщают ПК1, что это соединение является частью того же сеанса."
    ]
  },
  {
    "time": [
      429.58,
      435.52
    ],
    "en": [
      "Okay, I hope that gave you a basic understanding of how ports identify the Application Layer"
    ],
    "ru": [
      "Хорошо, я надеюсь, что это дало вам общее представление о том, как порты идентифицируют уровень приложения."
    ]
  },
  {
    "time": [
      435.52,
      442.19
    ],
    "en": [
      "protocol, such as HTTP, the Hypertext Transfer Protocol which is used to access webpages,"
    ],
    "ru": [
      "протокол, такой как HTTP, протокол передачи гипертекста, который используется для доступа к веб-страницам,"
    ]
  },
  {
    "time": [
      442.19,
      448.41
    ],
    "en": [
      "or FTP, the File Transfer Protocol which is used, as the name says, to transfer files."
    ],
    "ru": [
      "или FTP, протокол передачи файлов, который используется, как следует из названия, для передачи файлов."
    ]
  },
  {
    "time": [
      448.41,
      455.319
    ],
    "en": [
      "I also showed how these numbers are used by hosts to manage multiple communication sessions at once."
    ],
    "ru": [
      "Я также показал, как эти числа используются хостами для одновременного управления несколькими сеансами связи."
    ]
  },
  {
    "time": [
      455.319,
      464.51
    ],
    "en": [
      "at once. The port numbers that Application Layer protocols use are registered with the IANA, the Internet Assigned Numbers Authority."
    ],
    "ru": [
      "однажды. Номера портов, которые используют протоколы прикладного уровня, зарегистрированы IANA, Internet Assigned Numbers Authority."
    ]
  },
  {
    "time": [
      464.51,
      467.9
    ],
    "en": [
      "Assigned Numbers Authority. They have designated the following ranges."
    ],
    "ru": [
      "Полномочия по присвоению номеров. Они обозначили следующие диапазоны."
    ]
  },
  {
    "time": [
      467.9,
      472.24
    ],
    "en": [
      "Well-known port numbers are ports 0 through 1023."
    ],
    "ru": [
      "Хорошо известные номера портов - это порты от 0 до 1023."
    ]
  },
  {
    "time": [
      472.24,
      480.389
    ],
    "en": [
      "These are used for major protocols like HTTP, FTP, etc, and are very strictly regulated."
    ],
    "ru": [
      "Они используются для основных протоколов, таких как HTTP, FTP и т. Д., И очень строго регулируются."
    ]
  },
  {
    "time": [
      480.389,
      487.02
    ],
    "en": [
      "Registered port numbers are in the range 1024 to 49151."
    ],
    "ru": [
      "Зарегистрированные номера портов находятся в диапазоне от 1024 до 49151."
    ]
  },
  {
    "time": [
      487.02,
      490.4
    ],
    "en": [
      "Registration is required to use these port numbers, although it’s not as strict as"
    ],
    "ru": [
      "Для использования этих номеров портов требуется регистрация, хотя это не так строго, как"
    ]
  },
  {
    "time": [
      490.4,
      492.78
    ],
    "en": [
      "with the well-known port range."
    ],
    "ru": [
      "со всем известным диапазоном портов."
    ]
  },
  {
    "time": [
      492.78,
      501.83
    ],
    "en": [
      "Finally, the range 49152 through 65535 is used for ‘ephemeral’ ports, also known"
    ],
    "ru": [
      "Наконец, диапазон от 49152 до 65535 используется для «временных» портов, также известных"
    ]
  },
  {
    "time": [
      501.83,
      505.069
    ],
    "en": [
      "as private or dynamic ports."
    ],
    "ru": [
      "как частные или динамические порты."
    ]
  },
  {
    "time": [
      505.069,
      509.02
    ],
    "en": [
      "Hosts use this range when selecting the random source port."
    ],
    "ru": [
      "Хосты используют этот диапазон при выборе случайного исходного порта."
    ]
  },
  {
    "time": [
      509.02,
      513.54
    ],
    "en": [
      "Note that in the previous example, all of the randomly selected source port numbers"
    ],
    "ru": [
      "Обратите внимание, что в предыдущем примере все случайно выбранные номера портов источника"
    ]
  },
  {
    "time": [
      513.54,
      516.35
    ],
    "en": [
      "came from the ephemeral port range."
    ],
    "ru": [
      "пришел из эфемерного диапазона портов."
    ]
  },
  {
    "time": [
      516.35,
      524.35
    ],
    "en": [
      "Finally, note that port numbers are a function of both of the main Layer 4 protocols, TCP and UDP."
    ],
    "ru": [
      "Наконец, обратите внимание, что номера портов являются функцией обоих основных протоколов уровня 4, TCP и UDP."
    ]
  },
  {
    "time": [
      524.35,
      527.84
    ],
    "en": [
      "and UDP. Next I’ll explain each of the protocols, and you’ll see that these functions I listed"
    ],
    "ru": [
      "и UDP. Затем я объясню каждый из протоколов, и вы увидите, что перечисленные мною функции"
    ]
  },
  {
    "time": [
      527.84,
      534.42
    ],
    "en": [
      "earlier, reliable data transfer, error recovery, data sequencing, and flow control, are provided"
    ],
    "ru": [
      "раньше обеспечивается надежная передача данных, восстановление после ошибок, упорядочение данных и управление потоком."
    ]
  },
  {
    "time": [
      534.42,
      538.77
    ],
    "en": [
      "by TCP and not by UDP."
    ],
    "ru": [
      "по TCP, а не по UDP."
    ]
  },
  {
    "time": [
      538.77,
      539.86
    ],
    "en": [
      "First I’ll explain TCP."
    ],
    "ru": [
      "Сначала я объясню TCP."
    ]
  },
  {
    "time": [
      539.86,
      545.2
    ],
    "en": [
      "I’ll give an overview of it’s functions, we’ll take a brief look at the TCP header,"
    ],
    "ru": [
      "Я дам обзор его функций, мы кратко рассмотрим заголовок TCP,"
    ]
  },
  {
    "time": [
      545.2,
      548.92
    ],
    "en": [
      "and then I’ll go more in depth on a few of its functions."
    ],
    "ru": [
      "а затем я более подробно остановлюсь на некоторых его функциях."
    ]
  },
  {
    "time": [
      548.92,
      552.58
    ],
    "en": [
      "First up, TCP is a connection-oriented protocol."
    ],
    "ru": [
      "Во-первых, TCP - это протокол, ориентированный на установление соединения."
    ]
  },
  {
    "time": [
      552.58,
      553.73
    ],
    "en": [
      "What does that mean?"
    ],
    "ru": [
      "Что это обозначает?"
    ]
  },
  {
    "time": [
      553.73,
      558.26
    ],
    "en": [
      "Well, before actually sending data to the destination host, the two hosts communicate"
    ],
    "ru": [
      "Что ж, перед фактической отправкой данных на целевой хост два хоста обмениваются данными"
    ]
  },
  {
    "time": [
      558.26,
      560.64
    ],
    "en": [
      "to establish a connection."
    ],
    "ru": [
      "чтобы установить соединение."
    ]
  },
  {
    "time": [
      560.64,
      564.72
    ],
    "en": [
      "Once the connection is established, the data exchange begins."
    ],
    "ru": [
      "Как только соединение установлено, начинается обмен данными."
    ]
  },
  {
    "time": [
      564.72,
      568.5
    ],
    "en": [
      "The source host doesn’t just start sending data without first communicating with the"
    ],
    "ru": [
      "Исходный хост не просто начинает отправлять данные, предварительно не связавшись с"
    ]
  },
  {
    "time": [
      568.5,
      572.02
    ],
    "en": [
      "destination host and setting up this connection."
    ],
    "ru": [
      "целевой хост и настройка этого соединения."
    ]
  },
  {
    "time": [
      572.02,
      576.34
    ],
    "en": [
      "Next, TCP provides reliable communication."
    ],
    "ru": [
      "Далее, TCP обеспечивает надежную связь."
    ]
  },
  {
    "time": [
      576.34,
      577.94
    ],
    "en": [
      "How does it do that?"
    ],
    "ru": [
      "Как оно это делает?"
    ]
  },
  {
    "time": [
      577.94,
      582.96
    ],
    "en": [
      "The destination host must acknowledge that it received each TCP segment."
    ],
    "ru": [
      "Хост назначения должен подтвердить, что он получил каждый сегмент TCP."
    ]
  },
  {
    "time": [
      582.96,
      590.35
    ],
    "en": [
      "Remember, segment is the name of the Layer 4 PDU, like the packet at Layer 3 and frame at Layer 2."
    ],
    "ru": [
      "Помните, что сегмент - это имя PDU уровня 4, как пакет на уровне 3 и кадр на уровне 2."
    ]
  },
  {
    "time": [
      590.35,
      595.97
    ],
    "en": [
      "at Layer 2. Then, if the source host doesn’t receive an acknowledgment for a segment, it is sent again."
    ],
    "ru": [
      "на уровне 2. Затем, если исходный хост не получает подтверждения для сегмента, оно отправляется снова."
    ]
  },
  {
    "time": [
      595.97,
      599.81
    ],
    "en": [
      "again. Next, TCP provides sequencing."
    ],
    "ru": [
      "опять таки. Затем TCP обеспечивает упорядочение."
    ]
  },
  {
    "time": [
      599.81,
      604.69
    ],
    "en": [
      "In the next slide you’ll see that there is a sequence field in the TCP header."
    ],
    "ru": [
      "На следующем слайде вы увидите, что в заголовке TCP есть поле последовательности."
    ]
  },
  {
    "time": [
      604.69,
      609.14
    ],
    "en": [
      "The sequence numbers in the TCP header allow destination hosts to put segments in the correct"
    ],
    "ru": [
      "Порядковые номера в заголовке TCP позволяют хостам назначения размещать сегменты в правильных"
    ]
  },
  {
    "time": [
      609.14,
      612.13
    ],
    "en": [
      "order even if they arrive out of order."
    ],
    "ru": [
      "порядок, даже если они поступят не по порядку."
    ]
  },
  {
    "time": [
      612.13,
      617.29
    ],
    "en": [
      "Okay, last thing for now, TCP provides flow control."
    ],
    "ru": [
      "Хорошо, последнее на данный момент, TCP обеспечивает управление потоком."
    ]
  },
  {
    "time": [
      617.29,
      621.61
    ],
    "en": [
      "That means that the destination host can tell the source host to increase or decrease the"
    ],
    "ru": [
      "Это означает, что целевой хост может сказать исходному хосту увеличить или уменьшить"
    ]
  },
  {
    "time": [
      621.61,
      626.42
    ],
    "en": [
      "rate that data is sent, so that it isn’t overwhelmed by receiving traffic faster than"
    ],
    "ru": [
      "скорость отправки данных, чтобы трафик не перегружался быстрее, чем"
    ]
  },
  {
    "time": [
      626.42,
      628.48
    ],
    "en": [
      "it can process it."
    ],
    "ru": [
      "он может это обработать."
    ]
  },
  {
    "time": [
      628.48,
      635.14
    ],
    "en": [
      "Okay, now let’s take a look at the TCP header, thanks to Wikipedia for this image."
    ],
    "ru": [
      "Хорошо, теперь давайте посмотрим на заголовок TCP, спасибо Википедии за это изображение."
    ]
  },
  {
    "time": [
      635.14,
      639.33
    ],
    "en": [
      "As you can see, there are quite a few different fields in the TCP header, which are used to"
    ],
    "ru": [
      "Как видите, в заголовке TCP есть несколько разных полей, которые используются для"
    ]
  },
  {
    "time": [
      639.33,
      643.71
    ],
    "en": [
      "provide all of those different services I listed in the previous slide."
    ],
    "ru": [
      "предоставлять все те различные услуги, которые я перечислил на предыдущем слайде."
    ]
  },
  {
    "time": [
      643.71,
      648.16
    ],
    "en": [
      "The good news is, you don’t have to learn and memorize the entire header for the CCNA."
    ],
    "ru": [
      "Хорошая новость в том, что вам не нужно учить и запоминать весь заголовок для CCNA."
    ]
  },
  {
    "time": [
      648.16,
      652.66
    ],
    "en": [
      "I just want to briefly point out a few important fields."
    ],
    "ru": [
      "Я просто хочу вкратце указать на несколько важных областей."
    ]
  },
  {
    "time": [
      652.66,
      656.27
    ],
    "en": [
      "First up, the source and destination port fields."
    ],
    "ru": [
      "Прежде всего, поля порта источника и назначения."
    ]
  },
  {
    "time": [
      656.27,
      660.61
    ],
    "en": [
      "Note that each field is 16 bits, 2 bytes, in length."
    ],
    "ru": [
      "Обратите внимание, что каждое поле имеет длину 16 бит, 2 байта."
    ]
  },
  {
    "time": [
      660.61,
      669.1
    ],
    "en": [
      "That means there are a total of 65536, which is 2 to the power of 16, available port numbers."
    ],
    "ru": [
      "Это означает, что всего доступно 65536 номеров, что равно 2 в степени 16."
    ]
  },
  {
    "time": [
      669.1,
      673.37
    ],
    "en": [
      "The next two fields are the sequence number and acknowledgment number."
    ],
    "ru": [
      "Следующие два поля - это порядковый номер и номер подтверждения."
    ]
  },
  {
    "time": [
      673.37,
      677.9
    ],
    "en": [
      "These two fields are used to provide sequencing and reliable communication, I’ll show that"
    ],
    "ru": [
      "Эти два поля используются для обеспечения последовательности и надежной связи, я покажу, что"
    ]
  },
  {
    "time": [
      677.9,
      680.08
    ],
    "en": [
      "in a bit more detail later."
    ],
    "ru": [
      "более подробно позже."
    ]
  },
  {
    "time": [
      680.08,
      685.88
    ],
    "en": [
      "TCP has a series of ‘flag’ bits which each serve a different purpose."
    ],
    "ru": [
      "TCP имеет серию «флаговых» битов, каждый из которых служит своей цели."
    ]
  },
  {
    "time": [
      685.88,
      691.14
    ],
    "en": [
      "I want to mention these three, ACK, SYN, and FIN."
    ],
    "ru": [
      "Я хочу упомянуть эти три: ACK, SYN и FIN."
    ]
  },
  {
    "time": [
      691.14,
      695.33
    ],
    "en": [
      "These three flags are used to establish and terminate connections."
    ],
    "ru": [
      "Эти три флага используются для установления и завершения соединений."
    ]
  },
  {
    "time": [
      695.33,
      699.1
    ],
    "en": [
      "In the next slide I’ll explain those processes more."
    ],
    "ru": [
      "На следующем слайде я более подробно объясню эти процессы."
    ]
  },
  {
    "time": [
      699.1,
      703.5
    ],
    "en": [
      "The final field I want to point out is the Window Size field."
    ],
    "ru": [
      "Последнее поле, на которое я хочу обратить внимание, - это поле «Размер окна»."
    ]
  },
  {
    "time": [
      703.5,
      707.77
    ],
    "en": [
      "This field is used for flow control, adjusting the rate at which data is sent."
    ],
    "ru": [
      "Это поле используется для управления потоком, регулируя скорость отправки данных."
    ]
  },
  {
    "time": [
      707.77,
      711.02
    ],
    "en": [
      "Okay, that’s all for the TCP header."
    ],
    "ru": [
      "Хорошо, это все, что касается заголовка TCP."
    ]
  },
  {
    "time": [
      711.02,
      714.93
    ],
    "en": [
      "You don’t have to learn every field or memorize it, but you should be aware of the fields"
    ],
    "ru": [
      "Вам не нужно учить каждое поле или запоминать его, но вы должны знать поля"
    ]
  },
  {
    "time": [
      714.93,
      716.96
    ],
    "en": [
      "I pointed out in this slide."
    ],
    "ru": [
      "Я указал на этом слайде."
    ]
  },
  {
    "time": [
      716.96,
      723.35
    ],
    "en": [
      "I mentioned that TCP is connection-oriented, meaning that hosts first communicate to establish"
    ],
    "ru": [
      "Я упоминал, что TCP ориентирован на соединение, что означает, что хосты сначала обмениваются данными, чтобы установить"
    ]
  },
  {
    "time": [
      723.35,
      726.99
    ],
    "en": [
      "a connection before actually sending data."
    ],
    "ru": [
      "соединение перед фактической отправкой данных."
    ]
  },
  {
    "time": [
      726.99,
      733.3
    ],
    "en": [
      "The method TCP uses to establish connections is called the TCP Three-Way Handshake."
    ],
    "ru": [
      "Метод, который TCP использует для установления соединений, называется трехсторонним рукопожатием TCP."
    ]
  },
  {
    "time": [
      733.3,
      737.66
    ],
    "en": [
      "It has that name because it involves three messages being sent between the two hosts."
    ],
    "ru": [
      "Он носит такое название, потому что он включает в себя три сообщения, отправляемых между двумя хостами."
    ]
  },
  {
    "time": [
      737.66,
      743.95
    ],
    "en": [
      "So, let’s say PC1 wants to access a webpage on SRV1 using HTTP."
    ],
    "ru": [
      "Итак, допустим, ПК1 хочет получить доступ к веб-странице на SRV1 с помощью HTTP."
    ]
  },
  {
    "time": [
      743.95,
      748.25
    ],
    "en": [
      "First, it must establish a TCP connection."
    ],
    "ru": [
      "Во-первых, он должен установить TCP-соединение."
    ]
  },
  {
    "time": [
      748.25,
      753.94
    ],
    "en": [
      "To do so, it uses these two flags in the TCP header that I just showed you, ACK, meaning"
    ],
    "ru": [
      "Для этого он использует эти два флага в заголовке TCP, который я вам только что показал, ACK, что означает"
    ]
  },
  {
    "time": [
      753.94,
      757.35
    ],
    "en": [
      "acknowledgment, and SYN, meaning synchronization."
    ],
    "ru": [
      "подтверждение и SYN, что означает синхронизацию."
    ]
  },
  {
    "time": [
      757.35,
      766.08
    ],
    "en": [
      "First, PC1 will send a TCP segment to SRV1 with the SYN flag set, meaning that bit is set to 1."
    ],
    "ru": [
      "Сначала ПК1 отправит сегмент TCP в SRV1 с установленным флагом SYN, что означает, что бит установлен в 1."
    ]
  },
  {
    "time": [
      766.08,
      768.25
    ],
    "en": [
      "set to 1. That is part one of the three-way handshake."
    ],
    "ru": [
      "установлен в 1. Это первая часть трехстороннего рукопожатия."
    ]
  },
  {
    "time": [
      768.25,
      775.99
    ],
    "en": [
      "Next, SRV1 will reply by sending a TCP segment to PC1 with the SYN and ACK flags set."
    ],
    "ru": [
      "Затем SRV1 ответит, отправив сегмент TCP на ПК1 с установленными флагами SYN и ACK."
    ]
  },
  {
    "time": [
      775.99,
      778.61
    ],
    "en": [
      "So both bits are set to 1."
    ],
    "ru": [
      "Таким образом, оба бита установлены в 1."
    ]
  },
  {
    "time": [
      778.61,
      781.08
    ],
    "en": [
      "That is part two of the three-way handshake."
    ],
    "ru": [
      "Это вторая часть трехстороннего рукопожатия."
    ]
  },
  {
    "time": [
      781.08,
      786.67
    ],
    "en": [
      "Finally, PC1 will send a TCP segment with the ACK bit set."
    ],
    "ru": [
      "Наконец, ПК1 отправит сегмент TCP с установленным битом ACK."
    ]
  },
  {
    "time": [
      786.67,
      791.15
    ],
    "en": [
      "Now the three-way handshake is complete and the connection is established."
    ],
    "ru": [
      "Теперь трехстороннее рукопожатие завершено, и соединение установлено."
    ]
  },
  {
    "time": [
      791.15,
      795.65
    ],
    "en": [
      "The real data exchange can then begin, the first three messages, which make up the three-way"
    ],
    "ru": [
      "Затем может начаться реальный обмен данными, первые три сообщения, которые составляют трехсторонний"
    ]
  },
  {
    "time": [
      795.65,
      799.28
    ],
    "en": [
      "handshake, are just to establish a connection."
    ],
    "ru": [
      "рукопожатие, просто для установления соединения."
    ]
  },
  {
    "time": [
      799.28,
      801.55
    ],
    "en": [
      "Make sure to remember the three-way handshake."
    ],
    "ru": [
      "Обязательно запомните трехстороннее рукопожатие."
    ]
  },
  {
    "time": [
      801.55,
      806.62
    ],
    "en": [
      "SYN, SYN-ACK, and then ACK."
    ],
    "ru": [
      "SYN, SYN-ACK, а затем ACK."
    ]
  },
  {
    "time": [
      806.62,
      809.94
    ],
    "en": [
      "Now let’s talk about how TCP terminates connections."
    ],
    "ru": [
      "Теперь поговорим о том, как TCP завершает соединения."
    ]
  },
  {
    "time": [
      809.94,
      816.82
    ],
    "en": [
      "This process, sometimes called the TCP ‘four-way handshake’, is less famous than the three-way handshake."
    ],
    "ru": [
      "Этот процесс, иногда называемый «четырехсторонним рукопожатием TCP», менее известен, чем трехстороннее рукопожатие."
    ]
  },
  {
    "time": [
      816.82,
      821.07
    ],
    "en": [
      "handshake. When PC1 decides that it no longer needs the connection with SRV1 it will initiate this"
    ],
    "ru": [
      "рукопожатие. Когда ПК1 решает, что ему больше не требуется соединение с SRV1, он инициирует это"
    ]
  },
  {
    "time": [
      821.07,
      824.02
    ],
    "en": [
      "process to terminate the connection."
    ],
    "ru": [
      "процесс, чтобы разорвать соединение."
    ]
  },
  {
    "time": [
      824.02,
      828.76
    ],
    "en": [
      "The process uses these two flags in the TCP header, FIN and ACK."
    ],
    "ru": [
      "Процесс использует эти два флага в заголовке TCP, FIN и ACK."
    ]
  },
  {
    "time": [
      828.76,
      835.02
    ],
    "en": [
      "First, PC1 sends a TCP segment to SRV1 with the FIN flag set."
    ],
    "ru": [
      "Сначала ПК1 отправляет сегмент TCP на SRV1 с установленным флагом FIN."
    ]
  },
  {
    "time": [
      835.02,
      837.7
    ],
    "en": [
      "SRV1 responds with an ACK."
    ],
    "ru": [
      "SRV1 отвечает ACK."
    ]
  },
  {
    "time": [
      837.7,
      840.72
    ],
    "en": [
      "SRV1 then sends its own FIN."
    ],
    "ru": [
      "Затем SRV1 отправляет свой собственный FIN."
    ]
  },
  {
    "time": [
      840.72,
      847.45
    ],
    "en": [
      "Finally, PC1 sends an ACK in response to SRV1’s FIN, and the connection is terminated."
    ],
    "ru": [
      "Наконец, ПК1 отправляет ACK в ответ на FIN SRV1, и соединение разрывается."
    ]
  },
  {
    "time": [
      847.45,
      851.08
    ],
    "en": [
      "Here’s the same summary I showed you before."
    ],
    "ru": [
      "Вот то же резюме, которое я показывал вам раньше."
    ]
  },
  {
    "time": [
      851.08,
      855.79
    ],
    "en": [
      "So, can you see what ‘connection-oriented’ means?"
    ],
    "ru": [
      "Итак, вы понимаете, что означает «ориентированный на соединение»?"
    ]
  },
  {
    "time": [
      855.79,
      860.02
    ],
    "en": [
      "Before actually exchanging data, PC1 and SRV1 established a connection."
    ],
    "ru": [
      "Перед фактическим обменом данными ПК1 и SRV1 установили соединение."
    ]
  },
  {
    "time": [
      860.02,
      865.12
    ],
    "en": [
      "Okay, now let me demonstrate how TCP uses the sequence and acknowledgment fields of"
    ],
    "ru": [
      "Хорошо, теперь позвольте мне продемонстрировать, как TCP использует поля последовательности и подтверждения"
    ]
  },
  {
    "time": [
      865.12,
      869.16
    ],
    "en": [
      "the header to provide reliable communication and sequencing."
    ],
    "ru": [
      "заголовок, чтобы обеспечить надежную связь и последовательность."
    ]
  },
  {
    "time": [
      869.16,
      876.14
    ],
    "en": [
      "So, let’s look at an exchange between two PCs, PC1 and PC2."
    ],
    "ru": [
      "Итак, давайте посмотрим на обмен между двумя ПК, ПК1 и ПК2."
    ]
  },
  {
    "time": [
      876.14,
      881.59
    ],
    "en": [
      "When PC1 sends the three-way handshake’s SYN message, it sets a random initial sequence"
    ],
    "ru": [
      "Когда ПК1 отправляет сообщение SYN трехстороннего рукопожатия, он устанавливает случайную начальную последовательность"
    ]
  },
  {
    "time": [
      881.59,
      884.07
    ],
    "en": [
      "number, let’s say it sets it to 10."
    ],
    "ru": [
      "число, скажем, 10."
    ]
  },
  {
    "time": [
      884.07,
      893.49
    ],
    "en": [
      "Then, when PC2 sends the SYN-ACK to PC1, it sets its own random initial sequence number, for example 50."
    ],
    "ru": [
      "Затем, когда ПК2 отправляет SYN-ACK на ПК1, он устанавливает свой собственный случайный начальный порядковый номер, например 50."
    ]
  },
  {
    "time": [
      893.49,
      898.221
    ],
    "en": [
      "for example 50. Not only that, it also acknowledges that it received PC1’s segment with a sequence number"
    ],
    "ru": [
      "например, 50. Мало того, он также подтверждает, что получил сегмент ПК1 с порядковым номером"
    ]
  },
  {
    "time": [
      898.221,
      903.34
    ],
    "en": [
      "of 10, by setting the acknowledgment field to 11. Why 11?"
    ],
    "ru": [
      "из 10, установив в поле подтверждения значение 11. Почему 11?"
    ]
  },
  {
    "time": [
      903.34,
      908.75
    ],
    "en": [
      "Why 11? That’s because TCP uses something called ‘forward acknowledgment’."
    ],
    "ru": [
      "Почему 11? Это потому, что TCP использует так называемое «прямое подтверждение»."
    ]
  },
  {
    "time": [
      908.75,
      913.58
    ],
    "en": [
      "Instead of acknowledging sequence number 10 with an ack field of 10, it tells PC1 the"
    ],
    "ru": [
      "Вместо подтверждения порядкового номера 10 с помощью поля подтверждения 10, он сообщает ПК1 о том, что"
    ]
  },
  {
    "time": [
      913.58,
      917.7
    ],
    "en": [
      "sequence number of the next segment it expects to receive."
    ],
    "ru": [
      "порядковый номер следующего сегмента, который он ожидает получить."
    ]
  },
  {
    "time": [
      917.7,
      923.27
    ],
    "en": [
      "So continuing that process, PC1 sends the final ACK of the three-way handshake."
    ],
    "ru": [
      "Итак, продолжая этот процесс, ПК1 отправляет последний ACK трехстороннего рукопожатия."
    ]
  },
  {
    "time": [
      923.27,
      931.04
    ],
    "en": [
      "The sequence number is 11, and using forward acknowledgment it sets a value of 51 in the acknowledgment field."
    ],
    "ru": [
      "Порядковый номер - 11, и при использовании прямого подтверждения он устанавливает значение 51 в поле подтверждения."
    ]
  },
  {
    "time": [
      931.04,
      937.28
    ],
    "en": [
      "acknowledgment field. PC2 replies with a sequence number of 51, and again uses forward acknowledgment by setting"
    ],
    "ru": [
      "поле подтверждения. ПК2 отвечает порядковым номером 51 и снова использует прямое подтверждение, задав"
    ]
  },
  {
    "time": [
      937.28,
      940.79
    ],
    "en": [
      "a value of 12 in the acknowledgment field."
    ],
    "ru": [
      "значение 12 в поле подтверждения."
    ]
  },
  {
    "time": [
      940.79,
      943.45
    ],
    "en": [
      "Then the exchange continues, like this."
    ],
    "ru": [
      "Затем обмен продолжается вот так."
    ]
  },
  {
    "time": [
      943.45,
      947.1
    ],
    "en": [
      "So, what should you remember from this?"
    ],
    "ru": [
      "Итак, что из этого следует запомнить?"
    ]
  },
  {
    "time": [
      947.1,
      951.94
    ],
    "en": [
      "Remember that hosts set a random initial sequence number, and that forward acknowledgment is"
    ],
    "ru": [
      "Помните, что хосты устанавливают случайный начальный порядковый номер, и что прямое подтверждение"
    ]
  },
  {
    "time": [
      951.94,
      956.16
    ],
    "en": [
      "used to indicate the sequence number of the next segment the host expects to receive."
    ],
    "ru": [
      "используется для указания порядкового номера следующего сегмента, который хост ожидает получить."
    ]
  },
  {
    "time": [
      956.16,
      961.5
    ],
    "en": [
      "Okay, so now I’ve shown how the sequence and acknowledgment fields of the TCP header"
    ],
    "ru": [
      "Хорошо, теперь я показал, как поля последовательности и подтверждения в заголовке TCP"
    ]
  },
  {
    "time": [
      961.5,
      966.47
    ],
    "en": [
      "are used to acknowledge that the host has received each TCP segment it should receive."
    ],
    "ru": [
      "используются для подтверждения того, что хост получил каждый сегмент TCP, который он должен получить."
    ]
  },
  {
    "time": [
      966.47,
      971.57
    ],
    "en": [
      "These sequence numbers also allow hosts to know the correct order of segments, even if"
    ],
    "ru": [
      "Эти порядковые номера также позволяют хостам знать правильный порядок сегментов, даже если"
    ]
  },
  {
    "time": [
      971.57,
      973.92
    ],
    "en": [
      "for some reason they arrive out of order."
    ],
    "ru": [
      "они почему-то приходят не по порядку."
    ]
  },
  {
    "time": [
      973.92,
      976.36
    ],
    "en": [
      "Now, what about this part?"
    ],
    "ru": [
      "А что насчет этой части?"
    ]
  },
  {
    "time": [
      976.36,
      979.6
    ],
    "en": [
      "If a segment isn’t acknowledged, it is sent again."
    ],
    "ru": [
      "Если сегмент не подтвержден, он отправляется снова."
    ]
  },
  {
    "time": [
      979.6,
      983.26
    ],
    "en": [
      "I will briefly demonstrate."
    ],
    "ru": [
      "Кратко продемонстрирую."
    ]
  },
  {
    "time": [
      983.26,
      987.88
    ],
    "en": [
      "To simplify things, I will only show one set of sequence and acknowledgment numbers."
    ],
    "ru": [
      "Для упрощения я покажу только один набор порядковых номеров и номеров подтверждения."
    ]
  },
  {
    "time": [
      987.88,
      992.7
    ],
    "en": [
      "So, PC1 sends SRV1 a segment with sequence number 20."
    ],
    "ru": [
      "Итак, ПК1 отправляет SRV1 сегмент с порядковым номером 20."
    ]
  },
  {
    "time": [
      992.7,
      997.22
    ],
    "en": [
      "Using forward acknowledgment, SRV1 sends Ack 21 to PC1."
    ],
    "ru": [
      "Используя прямое подтверждение, SRV1 отправляет Ack 21 на ПК1."
    ]
  },
  {
    "time": [
      997.22,
      1003.3
    ],
    "en": [
      "PC1 then sends Sequence number 21, but for some reason it doesn’t reach SRV1."
    ],
    "ru": [
      "Затем ПК1 отправляет порядковый номер 21, но по какой-то причине он не достигает SRV1."
    ]
  },
  {
    "time": [
      1003.3,
      1008.28
    ],
    "en": [
      "After waiting a certain amount of time with no Ack, PC1 resends the segment."
    ],
    "ru": [
      "После ожидания определенного времени без подтверждения, ПК1 повторно отправляет сегмент."
    ]
  },
  {
    "time": [
      1008.28,
      1011.4
    ],
    "en": [
      "This is called TCP retransmission."
    ],
    "ru": [
      "Это называется повторной передачей TCP."
    ]
  },
  {
    "time": [
      1011.4,
      1017.05
    ],
    "en": [
      "This time SRV1 receives it, and sends Ack 22 to tell PC1 that it was received."
    ],
    "ru": [
      "На этот раз SRV1 получает его и отправляет Ack 22, чтобы сообщить ПК1, что он был получен."
    ]
  },
  {
    "time": [
      1017.05,
      1023.73
    ],
    "en": [
      "Okay, that’s a very brief overview of how TCP retransmits any segments that aren’t acknowledged."
    ],
    "ru": [
      "Хорошо, это очень краткий обзор того, как TCP повторно передает любые неподтвержденные сегменты."
    ]
  },
  {
    "time": [
      1023.73,
      1028.57
    ],
    "en": [
      "acknowledged. Finally, let me introduce how TCP provides flow control."
    ],
    "ru": [
      "признал. Наконец, позвольте мне представить, как TCP обеспечивает управление потоком."
    ]
  },
  {
    "time": [
      1028.57,
      1031.75
    ],
    "en": [
      "Acknowledging every single segment, no matter what size, is inefficient."
    ],
    "ru": [
      "Признание каждого отдельного сегмента, независимо от его размера, неэффективно."
    ]
  },
  {
    "time": [
      1031.75,
      1038.72
    ],
    "en": [
      "However, the TCP header’s window size field allows more data to be sent before an acknowledgment is required."
    ],
    "ru": [
      "Однако поле размера окна заголовка TCP позволяет отправить больше данных до того, как потребуется подтверждение."
    ]
  },
  {
    "time": [
      1038.72,
      1040.22
    ],
    "en": [
      "is required. Here’s an example."
    ],
    "ru": [
      "требуется для. Вот пример."
    ]
  },
  {
    "time": [
      1040.22,
      1046.49
    ],
    "en": [
      "A host could send three segments, with sequence numbers 20, 21, and 22, and then an Ack is"
    ],
    "ru": [
      "Хост может отправить три сегмента с порядковыми номерами 20, 21 и 22, а затем будет отправлено подтверждение."
    ]
  },
  {
    "time": [
      1046.49,
      1049.49
    ],
    "en": [
      "sent with sequence number 23."
    ],
    "ru": [
      "отправлено с порядковым номером 23."
    ]
  },
  {
    "time": [
      1049.49,
      1055.6
    ],
    "en": [
      "In addition, a ‘sliding window’ is used to dynamically adjust how large the window size is."
    ],
    "ru": [
      "Кроме того, «скользящее окно» используется для динамической регулировки размера окна."
    ]
  },
  {
    "time": [
      1055.6,
      1060.16
    ],
    "en": [
      "size is. The window size is increased as much as possible until a segment is dropped, then the window"
    ],
    "ru": [
      "размер. Размер окна увеличивается до тех пор, пока сегмент не будет отброшен, затем окно"
    ]
  },
  {
    "time": [
      1060.16,
      1064.87
    ],
    "en": [
      "size backs down to a more reasonable level, and slowly increases again."
    ],
    "ru": [
      "размер возвращается к более разумному уровню и снова медленно увеличивается."
    ]
  },
  {
    "time": [
      1064.87,
      1068.31
    ],
    "en": [
      "Okay, before moving on let me point out one thing."
    ],
    "ru": [
      "Хорошо, прежде чем двигаться дальше, позвольте мне указать на одну вещь."
    ]
  },
  {
    "time": [
      1068.31,
      1072.54
    ],
    "en": [
      "In all of these examples, I used very simple sequence numbers."
    ],
    "ru": [
      "Во всех этих примерах я использовал очень простые порядковые номера."
    ]
  },
  {
    "time": [
      1072.54,
      1076.761
    ],
    "en": [
      "In real situations, the sequence numbers get much larger and do not increase by 1 with"
    ],
    "ru": [
      "В реальных ситуациях порядковые номера становятся намного больше и не увеличиваются на 1 с"
    ]
  },
  {
    "time": [
      1076.761,
      1081.21
    ],
    "en": [
      "each message, especially when the sliding window size gets very large."
    ],
    "ru": [
      "каждое сообщение, особенно когда размер скользящего окна становится очень большим."
    ]
  },
  {
    "time": [
      1081.21,
      1085.46
    ],
    "en": [
      "For the CCNA, just understand the concepts and don’t worry about the exact numbers."
    ],
    "ru": [
      "Что касается CCNA, просто разберитесь в концепциях и не беспокойтесь о точных цифрах."
    ]
  },
  {
    "time": [
      1085.46,
      1092.18
    ],
    "en": [
      "Okay, so that was a very brief overview of these functions that TCP provides to applications."
    ],
    "ru": [
      "Хорошо, это был очень краткий обзор этих функций, которые TCP предоставляет приложениям."
    ]
  },
  {
    "time": [
      1092.18,
      1098.07
    ],
    "en": [
      "It would take hours to cover all of the details, but for the CCNA you just need to understand the concepts."
    ],
    "ru": [
      "Чтобы охватить все детали, потребуются часы, но для CCNA вам просто нужно понимать концепции."
    ]
  },
  {
    "time": [
      1098.07,
      1101.69
    ],
    "en": [
      "the concepts. The details I did show you about sequence numbers, forward acknowledgment, etc. were"
    ],
    "ru": [
      "концепции. Детали, которые я вам показал о порядковых номерах, подтверждении переадресации и т. Д., Были"
    ]
  },
  {
    "time": [
      1101.69,
      1104.32
    ],
    "en": [
      "just to help you understand the basic concepts."
    ],
    "ru": [
      "просто чтобы помочь вам понять основные концепции."
    ]
  },
  {
    "time": [
      1104.32,
      1109.53
    ],
    "en": [
      "Remember, the exam topics state that you need to be able to compare TCP to UDP, not that"
    ],
    "ru": [
      "Помните, что в темах экзамена указано, что вам нужно уметь сравнивать TCP и UDP, а не то, что"
    ]
  },
  {
    "time": [
      1109.53,
      1115.04
    ],
    "en": [
      "you need to understand the detailed mechanics and operations of TCP."
    ],
    "ru": [
      "вам необходимо хорошо разбираться в механике и принципах работы TCP."
    ]
  },
  {
    "time": [
      1115.04,
      1120.13
    ],
    "en": [
      "Now that you’ve seen some of what TCP provides to communications, let’s check out UDP."
    ],
    "ru": [
      "Теперь, когда вы узнали кое-что из того, что TCP предоставляет для связи, давайте посмотрим на UDP."
    ]
  },
  {
    "time": [
      1120.13,
      1123.74
    ],
    "en": [
      "UDP is much simpler, so I’ll sum it up in one slide."
    ],
    "ru": [
      "Протокол UDP намного проще, поэтому я резюмирую его на одном слайде."
    ]
  },
  {
    "time": [
      1123.74,
      1128.66
    ],
    "en": [
      "UDP is not connection-oriented. It is connectionless."
    ],
    "ru": [
      "UDP не ориентирован на соединение. Это без подключения."
    ]
  },
  {
    "time": [
      1128.66,
      1133.54
    ],
    "en": [
      "It is connectionless. Unlike TCP, in UDP the sending host does not establish a connection with the destination"
    ],
    "ru": [
      "Это без подключения. В отличие от TCP, в UDP хост-отправитель не устанавливает соединение с местом назначения."
    ]
  },
  {
    "time": [
      1133.54,
      1135.31
    ],
    "en": [
      "host before sending data."
    ],
    "ru": [
      "host перед отправкой данных."
    ]
  },
  {
    "time": [
      1135.31,
      1136.95
    ],
    "en": [
      "It is simply sent."
    ],
    "ru": [
      "Его просто отправляют."
    ]
  },
  {
    "time": [
      1136.95,
      1140.75
    ],
    "en": [
      "UDP does not provide reliable communication."
    ],
    "ru": [
      "UDP не обеспечивает надежную связь."
    ]
  },
  {
    "time": [
      1140.75,
      1145.56
    ],
    "en": [
      "When UDP is used, acknowledgments are not sent for received segments."
    ],
    "ru": [
      "При использовании UDP подтверждения для полученных сегментов не отправляются."
    ]
  },
  {
    "time": [
      1145.56,
      1150.54
    ],
    "en": [
      "If a segment is lost, UDP has no mechanism to re-transmit it."
    ],
    "ru": [
      "Если сегмент потерян, UDP не имеет механизма для его повторной передачи."
    ]
  },
  {
    "time": [
      1150.54,
      1152.93
    ],
    "en": [
      "Segments are sent ‘best-effort’."
    ],
    "ru": [
      "Сегменты отправляются с пометкой «максимальные усилия»."
    ]
  },
  {
    "time": [
      1152.93,
      1154.81
    ],
    "en": [
      "You might not be familiar with the term best-effort."
    ],
    "ru": [
      "Возможно, вы не знакомы с термином «максимальные усилия»."
    ]
  },
  {
    "time": [
      1154.81,
      1160.62
    ],
    "en": [
      "Basically, it means UDP provides no guarantee of delivery like TCP."
    ],
    "ru": [
      "По сути, это означает, что UDP не обеспечивает такой гарантии доставки, как TCP."
    ]
  },
  {
    "time": [
      1160.62,
      1164.85
    ],
    "en": [
      "It sends it, it makes the effort, but it doesn’t provide any guarantees."
    ],
    "ru": [
      "Присылает, прилагает усилия, но никаких гарантий не дает."
    ]
  },
  {
    "time": [
      1164.85,
      1168.15
    ],
    "en": [
      "UDP does not provide sequencing."
    ],
    "ru": [
      "UDP не обеспечивает последовательности."
    ]
  },
  {
    "time": [
      1168.15,
      1172.22
    ],
    "en": [
      "Unlike TCP, UDP has no sequence field in its header."
    ],
    "ru": [
      "В отличие от TCP, UDP не имеет поля последовательности в заголовке."
    ]
  },
  {
    "time": [
      1172.22,
      1176.51
    ],
    "en": [
      "If segments arrive out of order, UDP has no mechanism to put them back in order."
    ],
    "ru": [
      "Если сегменты поступают не по порядку, UDP не имеет механизма, чтобы вернуть их в порядок."
    ]
  },
  {
    "time": [
      1176.51,
      1180.12
    ],
    "en": [
      "Finally, UDP does not provide flow control."
    ],
    "ru": [
      "Наконец, UDP не обеспечивает управление потоком."
    ]
  },
  {
    "time": [
      1180.12,
      1184.33
    ],
    "en": [
      "It has no mechanism like TCP’s window size to control the flow of data."
    ],
    "ru": [
      "У него нет такого механизма, как размер окна TCP, для управления потоком данных."
    ]
  },
  {
    "time": [
      1184.33,
      1187.48
    ],
    "en": [
      "Let’s take a look at the UDP header."
    ],
    "ru": [
      "Давайте посмотрим на заголовок UDP."
    ]
  },
  {
    "time": [
      1187.48,
      1190.89
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
      1187.48,
      1190.89
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
      1190.89,
      1192.259
    ],
    "en": [
      "That’s it. Four fields."
    ],
    "ru": [
      "Вот и все. Четыре поля."
    ]
  },
  {
    "time": [
      1192.259,
      1197.31
    ],
    "en": [
      "Source and destination port numbers, a length field indicating the length of the segment,"
    ],
    "ru": [
      "Номера портов источника и назначения, поле длины, указывающее длину сегмента,"
    ]
  },
  {
    "time": [
      1197.31,
      1200.82
    ],
    "en": [
      "and a checksum so the receiving host can check for errors."
    ],
    "ru": [
      "и контрольную сумму, чтобы принимающий хост мог проверить наличие ошибок."
    ]
  },
  {
    "time": [
      1200.82,
      1205.81
    ],
    "en": [
      "In the next slide let’s compare TCP and UDP."
    ],
    "ru": [
      "На следующем слайде сравним TCP и UDP."
    ]
  },
  {
    "time": [
      1205.81,
      1208.85
    ],
    "en": [
      "First up, here are the two headers for comparison."
    ],
    "ru": [
      "Во-первых, вот два заголовка для сравнения."
    ]
  },
  {
    "time": [
      1208.85,
      1212.98
    ],
    "en": [
      "All of the additional fields that TCP has allow it to provide those additional functions"
    ],
    "ru": [
      "Все дополнительные поля, которые есть в TCP, позволяют ему предоставлять эти дополнительные функции."
    ]
  },
  {
    "time": [
      1212.98,
      1216.2
    ],
    "en": [
      "like sequencing and error recovery."
    ],
    "ru": [
      "например, секвенирование и исправление ошибок."
    ]
  },
  {
    "time": [
      1216.2,
      1223.55
    ],
    "en": [
      "So, in which cases would TCP be used, and in which cases would UDP be used?"
    ],
    "ru": [
      "Итак, в каких случаях будет использоваться TCP, а в каких - UDP?"
    ]
  },
  {
    "time": [
      1223.55,
      1231.22
    ],
    "en": [
      "TCP provides more features than UDP, but at the cost of additional overhead because of the larger header."
    ],
    "ru": [
      "TCP предоставляет больше возможностей, чем UDP, но за счет дополнительных накладных расходов из-за большего размера заголовка."
    ]
  },
  {
    "time": [
      1231.22,
      1236.6
    ],
    "en": [
      "the larger header. In addition, acknowledgments and retransmissions can slow down the transfer of data ."
    ],
    "ru": [
      "заголовок большего размера. Кроме того, подтверждения и повторные передачи могут замедлить передачу данных."
    ]
  },
  {
    "time": [
      1236.6,
      1243.13
    ],
    "en": [
      "For applications that require reliable communications, for example downloading a file, TCP is preferred."
    ],
    "ru": [
      "Для приложений, которым требуется надежная связь, например для загрузки файла, предпочтительнее TCP."
    ]
  },
  {
    "time": [
      1243.13,
      1246.42
    ],
    "en": [
      "You wouldn’t want to download a PDF file with a page missing."
    ],
    "ru": [
      "Вы бы не захотели скачивать PDF-файл с отсутствующей страницей."
    ]
  },
  {
    "time": [
      1246.42,
      1249.43
    ],
    "en": [
      "You want to make sure you get the whole file."
    ],
    "ru": [
      "Вы хотите убедиться, что получили весь файл."
    ]
  },
  {
    "time": [
      1249.43,
      1255.01
    ],
    "en": [
      "On the other hand, for applications like real-time voice and video, for example voice over IP"
    ],
    "ru": [
      "С другой стороны, для таких приложений, как голос и видео в реальном времени, например передача голоса по IP."
    ]
  },
  {
    "time": [
      1255.01,
      1259.99
    ],
    "en": [
      "phone calls, Zoom, Skype, etc, UDP is preferred."
    ],
    "ru": [
      "телефонные звонки, Zoom, Skype и т. д. предпочтительнее UDP."
    ]
  },
  {
    "time": [
      1259.99,
      1266.3
    ],
    "en": [
      "These applications are very delay-sensitive, you don’t want the overhead of TCP slowing it down."
    ],
    "ru": [
      "Эти приложения очень чувствительны к задержкам, вы не хотите, чтобы накладные расходы TCP замедляли их."
    ]
  },
  {
    "time": [
      1266.3,
      1270.8
    ],
    "en": [
      "it down. One thing to note is that there are some applications that use UDP, but provide reliability and"
    ],
    "ru": [
      "это вниз. Следует отметить, что есть некоторые приложения, которые используют UDP, но обеспечивают надежность и"
    ]
  },
  {
    "time": [
      1270.8,
      1273.4
    ],
    "en": [
      "such within the application itself."
    ],
    "ru": [
      "такое внутри самого приложения."
    ]
  },
  {
    "time": [
      1273.4,
      1278.07
    ],
    "en": [
      "TFTP, the Trivial File Transfer Protocol, is such an example."
    ],
    "ru": [
      "TFTP, упрощенный протокол передачи файлов, является таким примером."
    ]
  },
  {
    "time": [
      1278.07,
      1280.43
    ],
    "en": [
      "I’ll cover it later in the course."
    ],
    "ru": [
      "Я расскажу об этом позже в курсе."
    ]
  },
  {
    "time": [
      1280.43,
      1283.52
    ],
    "en": [
      "Also, think about a Skype call."
    ],
    "ru": [
      "Также подумайте о звонке по Skype."
    ]
  },
  {
    "time": [
      1283.52,
      1288.2
    ],
    "en": [
      "If you’re talking to someone over Skype and the audio cuts out for a few seconds,"
    ],
    "ru": [
      "Если вы разговариваете с кем-то по Skype и звук прерывается на несколько секунд,"
    ]
  },
  {
    "time": [
      1288.2,
      1291.1
    ],
    "en": [
      "you can simply ask the other person to repeat what they said."
    ],
    "ru": [
      "вы можете просто попросить другого человека повторить то, что он сказал."
    ]
  },
  {
    "time": [
      1291.1,
      1294.72
    ],
    "en": [
      "In effect, you are asking for a ‘retransmission’."
    ],
    "ru": [
      "По сути, вы просите «ретрансляцию»."
    ]
  },
  {
    "time": [
      1294.72,
      1300.75
    ],
    "en": [
      "Finally, there are some applications that use both TCP &amp; UDP, depending on the situation."
    ],
    "ru": [
      "Наконец, есть некоторые приложения, которые используют как TCP, так и другие. UDP, в зависимости от ситуации."
    ]
  },
  {
    "time": [
      1300.75,
      1305.41
    ],
    "en": [
      "DNS, the Domain Name System, is an example."
    ],
    "ru": [
      "DNS, система доменных имен, является примером."
    ]
  },
  {
    "time": [
      1305.41,
      1310.54
    ],
    "en": [
      "Here’s a chart summarizing the differences between TCP and UDP."
    ],
    "ru": [
      "Вот диаграмма, в которой показаны различия между TCP и UDP."
    ]
  },
  {
    "time": [
      1310.54,
      1316.4
    ],
    "en": [
      "But don’t forget, both TCP and UDP provide Layer 4 addressing in the form of port numbers."
    ],
    "ru": [
      "Но не забывайте, что и TCP, и UDP обеспечивают адресацию уровня 4 в виде номеров портов."
    ]
  },
  {
    "time": [
      1316.4,
      1322.11
    ],
    "en": [
      "These port numbers identify Application Layer protocols and allow for session multiplexing."
    ],
    "ru": [
      "Эти номера портов определяют протоколы прикладного уровня и позволяют мультиплексировать сеанс."
    ]
  },
  {
    "time": [
      1322.11,
      1327.14
    ],
    "en": [
      "They are both Layer 4 protocols, so they both provide these essential functions."
    ],
    "ru": [
      "Оба они являются протоколами уровня 4, поэтому оба обеспечивают эти важные функции."
    ]
  },
  {
    "time": [
      1327.14,
      1332.23
    ],
    "en": [
      "Finally, I will list some important well-known port numbers you should know."
    ],
    "ru": [
      "Наконец, я перечислю несколько важных хорошо известных номеров портов, которые вам следует знать."
    ]
  },
  {
    "time": [
      1332.23,
      1338.02
    ],
    "en": [
      "We haven’t really covered any of these Application Layer protocols in the course yet, but I recommend"
    ],
    "ru": [
      "Мы еще не рассмотрели ни один из этих протоколов уровня приложения в курсе, но я рекомендую"
    ]
  },
  {
    "time": [
      1338.02,
      1341.09
    ],
    "en": [
      "taking the time to memorize the port numbers now."
    ],
    "ru": [
      "уделите время запоминанию номеров портов сейчас."
    ]
  },
  {
    "time": [
      1341.09,
      1345.15
    ],
    "en": [
      "I will provide flashcards in the flashcard deck for today’s lecture."
    ],
    "ru": [
      "Я предоставлю карточки из набора карточек для сегодняшней лекции."
    ]
  },
  {
    "time": [
      1345.15,
      1348.72
    ],
    "en": [
      "I will, however, mention the port numbers again when I cover these protocols later in"
    ],
    "ru": [
      "Однако я еще раз упомяну номера портов, когда расскажу об этих протоколах позже в"
    ]
  },
  {
    "time": [
      1348.72,
      1354.48
    ],
    "en": [
      "the course, so if you prefer you can learn them individually then. Here’s the list."
    ],
    "ru": [
      "курс, так что, если хотите, вы можете изучить их индивидуально. Вот список."
    ]
  },
  {
    "time": [
      1354.48,
      1359.86
    ],
    "en": [
      "Here’s the list. First up, FTP, the File Transfer Protocol, uses TCP ports 20 and 21."
    ],
    "ru": [
      "Вот список. Во-первых, FTP, протокол передачи файлов, использует TCP-порты 20 и 21."
    ]
  },
  {
    "time": [
      1359.86,
      1365.8
    ],
    "en": [
      "SSH, Secure Shell, which is commonly used to connect to the CLI of routers and switches,"
    ],
    "ru": [
      "SSH, Secure Shell, который обычно используется для подключения к интерфейсу командной строки маршрутизаторов и коммутаторов,"
    ]
  },
  {
    "time": [
      1365.8,
      1368.07
    ],
    "en": [
      "uses TCP port 22."
    ],
    "ru": [
      "использует TCP-порт 22."
    ]
  },
  {
    "time": [
      1368.07,
      1375.07
    ],
    "en": [
      "Telnet, which can also be used to connect to the CLI of devices, uses TCP port 23."
    ],
    "ru": [
      "Telnet, который также можно использовать для подключения к интерфейсу командной строки устройств, использует TCP-порт 23."
    ]
  },
  {
    "time": [
      1375.07,
      1382.74
    ],
    "en": [
      "SMTP, the Simple Mail Transfer Protocol, is used for sending email and uses TCP port 25."
    ],
    "ru": [
      "SMTP, простой протокол передачи почты, используется для отправки электронной почты и использует TCP-порт 25."
    ]
  },
  {
    "time": [
      1382.74,
      1390.81
    ],
    "en": [
      "HTTP, Hypertext Transfer Protocol, commonly used for accessing web pages, uses TCP port 80."
    ],
    "ru": [
      "HTTP, протокол передачи гипертекста, обычно используемый для доступа к веб-страницам, использует TCP-порт 80."
    ]
  },
  {
    "time": [
      1390.81,
      1398.21
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
      1390.81,
      1398.21
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
      1398.21,
      1404.83
    ],
    "en": [
      "And finally HTTPS, Hypertext Transfer Protocol Secure, uses TCP port 443."
    ],
    "ru": [
      "И, наконец, HTTPS, защищенный протокол передачи гипертекста, использует TCP-порт 443."
    ]
  },
  {
    "time": [
      1404.83,
      1408.78
    ],
    "en": [
      "Okay, let’s list some protocols that use UDP."
    ],
    "ru": [
      "Хорошо, давайте перечислим несколько протоколов, которые используют UDP."
    ]
  },
  {
    "time": [
      1408.78,
      1414.68
    ],
    "en": [
      "DHCP, Dynamic Host Configuration Protocol, which allows hosts to automatically set their"
    ],
    "ru": [
      "DHCP, протокол динамической конфигурации хоста, который позволяет хостам автоматически устанавливать свои"
    ]
  },
  {
    "time": [
      1414.68,
      1420.07
    ],
    "en": [
      "IP address and other things, uses UDP ports 67 and 68."
    ],
    "ru": [
      "IP-адрес и другие вещи, используются UDP-порты 67 и 68."
    ]
  },
  {
    "time": [
      1420.07,
      1426.79
    ],
    "en": [
      "TFTP, the Trivial File Transfer Protocol, uses UDP port 69."
    ],
    "ru": [
      "TFTP, простой протокол передачи файлов, использует порт 69 UDP."
    ]
  },
  {
    "time": [
      1426.79,
      1434.41
    ],
    "en": [
      "SNMP, the Simple Network Management Protocol, uses UDP ports 161 and 162."
    ],
    "ru": [
      "SNMP, простой протокол управления сетью, использует порты UDP 161 и 162."
    ]
  },
  {
    "time": [
      1434.41,
      1437.67
    ],
    "en": [
      "Syslog uses UDP port 514."
    ],
    "ru": [
      "Системный журнал использует UDP-порт 514."
    ]
  },
  {
    "time": [
      1437.67,
      1445.95
    ],
    "en": [
      "Finally, the only protocol you should be aware of that uses both TCP and UDP is DNS, Domain Name System."
    ],
    "ru": [
      "Наконец, единственный протокол, о котором вы должны знать, который использует как TCP, так и UDP, - это DNS, система доменных имен."
    ]
  },
  {
    "time": [
      1445.95,
      1450.82
    ],
    "en": [
      "Name System. It usually uses UDP, but uses TCP in some situations."
    ],
    "ru": [
      "Система имен. Обычно он использует UDP, но в некоторых случаях использует TCP."
    ]
  },
  {
    "time": [
      1450.82,
      1457.55
    ],
    "en": [
      "Okay, to help you review I have added a ‘portnumbers’ tag to the Anki flashcards for these port numbers."
    ],
    "ru": [
      "Хорошо, чтобы помочь вам в обзоре, я добавил тег «portnumbers» на карточки Anki для этих номеров портов."
    ]
  },
  {
    "time": [
      1457.55,
      1460.45
    ],
    "en": [
      "numbers. Here’s how you can use it to review these specific cards."
    ],
    "ru": [
      "числа. Вот как вы можете использовать его для просмотра этих конкретных карточек."
    ]
  },
  {
    "time": [
      1460.45,
      1463.47
    ],
    "en": [
      "Open the Anki flashcard deck."
    ],
    "ru": [
      "Откройте колоду карточек Anki."
    ]
  },
  {
    "time": [
      1463.47,
      1465.2
    ],
    "en": [
      "Click on ‘custom study’."
    ],
    "ru": [
      "Щелкните «Индивидуальное исследование»."
    ]
  },
  {
    "time": [
      1465.2,
      1466.97
    ],
    "en": [
      "You’ll see this window."
    ],
    "ru": [
      "Вы увидите это окно."
    ]
  },
  {
    "time": [
      1466.97,
      1470.32
    ],
    "en": [
      "Select ‘study by card state or tag’."
    ],
    "ru": [
      "Выберите «Изучение по состоянию карты или тегу»."
    ]
  },
  {
    "time": [
      1470.32,
      1474.809
    ],
    "en": [
      "Then select ‘all cards in random order (don’t reschedule)’."
    ],
    "ru": [
      "Затем выберите «все карты в случайном порядке (без переноса)»."
    ]
  },
  {
    "time": [
      1474.809,
      1476.85
    ],
    "en": [
      "Finally click on ‘choose tags’."
    ],
    "ru": [
      "Наконец, нажмите «Выбрать теги»."
    ]
  },
  {
    "time": [
      1476.85,
      1478.82
    ],
    "en": [
      "This window will pop up."
    ],
    "ru": [
      "Появится это окно."
    ]
  },
  {
    "time": [
      1478.82,
      1484.41
    ],
    "en": [
      "Check ‘require one or more of these tags’ and make sure the ‘portnumbers’ tag is highlighted."
    ],
    "ru": [
      "Установите флажок «требовать один или несколько из этих тегов» и убедитесь, что тег «portnumbers» выделен."
    ]
  },
  {
    "time": [
      1484.41,
      1490.55
    ],
    "en": [
      "highlighted. Also make sure it isn’t highlighted under ‘select tags to exclude’. Finally, click OK."
    ],
    "ru": [
      "выделено. Также убедитесь, что он не выделен в разделе «выберите теги для исключения». Наконец, нажмите ОК."
    ]
  },
  {
    "time": [
      1490.55,
      1496.09
    ],
    "en": [
      "Finally, click OK. Now you will be able to review the cards without effecting Anki’s scheduling algorithm."
    ],
    "ru": [
      "Наконец, нажмите ОК. Теперь вы сможете просматривать карточки, не влияя на алгоритм планирования Anki."
    ]
  },
  {
    "time": [
      1496.09,
      1500.09
    ],
    "en": [
      "After you have reviewed them, you can simply follow this same process again if you want"
    ],
    "ru": [
      "После того, как вы их просмотрели, вы можете просто повторить тот же процесс еще раз, если хотите."
    ]
  },
  {
    "time": [
      1500.09,
      1502.13
    ],
    "en": [
      "to review them once more."
    ],
    "ru": [
      "чтобы просмотреть их еще раз."
    ]
  },
  {
    "time": [
      1502.13,
      1505.12
    ],
    "en": [
      "Do it until you answer them all perfectly."
    ],
    "ru": [
      "Делайте это, пока не ответите на все идеально."
    ]
  },
  {
    "time": [
      1505.12,
      1510.05
    ],
    "en": [
      "By the way, if you have questions about Anki on other platforms like iOS or Android, or"
    ],
    "ru": [
      "Кстати, если у вас есть вопросы об Anki на других платформах, таких как iOS или Android, или"
    ]
  },
  {
    "time": [
      1510.05,
      1514.77
    ],
    "en": [
      "are having trouble getting the custom study session set up, please try a Google search"
    ],
    "ru": [
      "у вас возникли проблемы с настройкой индивидуальной учебной сессии, попробуйте поискать в Google"
    ]
  },
  {
    "time": [
      1514.77,
      1516.37
    ],
    "en": [
      "or look on the Anki website."
    ],
    "ru": [
      "или посмотрите на сайте Anki."
    ]
  },
  {
    "time": [
      1516.37,
      1523.62
    ],
    "en": [
      "I’m no Anki expert and it’s hard for me to troubleshoot Anki problems via the comment section."
    ],
    "ru": [
      "Я не эксперт по Anki, и мне сложно устранять проблемы с Anki через раздел комментариев."
    ]
  },
  {
    "time": [
      1523.62,
      1527.0
    ],
    "en": [
      "section. Before moving on to the quiz, let’s review what we covered."
    ],
    "ru": [
      "раздел. Прежде чем перейти к викторине, давайте рассмотрим, что мы рассмотрели."
    ]
  },
  {
    "time": [
      1527.0,
      1533.04
    ],
    "en": [
      "We covered the basics of Layer 4, including Layer 4 addressing in the form of port numbers."
    ],
    "ru": [
      "Мы рассмотрели основы уровня 4, включая адресацию уровня 4 в форме номеров портов."
    ]
  },
  {
    "time": [
      1533.04,
      1538.43
    ],
    "en": [
      "We took a look at TCP, a Layer 4 protocol which provides various services to applications,"
    ],
    "ru": [
      "Мы рассмотрели TCP, протокол уровня 4, который предоставляет различные услуги приложениям,"
    ]
  },
  {
    "time": [
      1538.43,
      1542.07
    ],
    "en": [
      "such as reliable communication and flow control."
    ],
    "ru": [
      "такие как надежная связь и управление потоком."
    ]
  },
  {
    "time": [
      1542.07,
      1546.95
    ],
    "en": [
      "Then we looked at UDP, which doesn’t provide the various services that TCP does, but uses"
    ],
    "ru": [
      "Затем мы рассмотрели UDP, который не предоставляет различные службы, которые предоставляет TCP, но использует"
    ]
  },
  {
    "time": [
      1546.95,
      1549.33
    ],
    "en": [
      "a smaller header with less overhead."
    ],
    "ru": [
      "меньший заголовок с меньшими накладными расходами."
    ]
  },
  {
    "time": [
      1549.33,
      1553.55
    ],
    "en": [
      "Finally, we spent some time comparing the two protocols."
    ],
    "ru": [
      "Наконец, мы потратили некоторое время на сравнение двух протоколов."
    ]
  },
  {
    "time": [
      1553.55,
      1558.02
    ],
    "en": [
      "Remember the exam topics list, you’re expected to be able to compare the two for the exam,"
    ],
    "ru": [
      "Запомните список тем экзамена, вы должны будете сравнить эти две темы на экзамене,"
    ]
  },
  {
    "time": [
      1558.02,
      1559.92
    ],
    "en": [
      "so focus on that."
    ],
    "ru": [
      "так что сосредоточьтесь на этом."
    ]
  },
  {
    "time": [
      1559.92,
      1564.309
    ],
    "en": [
      "Watch until the end of the quiz for a bonus question from Boson ExSim, the best practice"
    ],
    "ru": [
      "Просмотрите до конца викторины бонусный вопрос от Boson ExSim, лучший метод"
    ]
  },
  {
    "time": [
      1564.309,
      1565.83
    ],
    "en": [
      "exams for the CCNA."
    ],
    "ru": [
      "экзамены на CCNA."
    ]
  },
  {
    "time": [
      1565.83,
      1570.89
    ],
    "en": [
      "Okay, let’s go to quiz question 1."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 1 викторины."
    ]
  },
  {
    "time": [
      1570.89,
      1577.44
    ],
    "en": [
      "Which of the following is a well-known port number, as defined by IANA? A, 1010."
    ],
    "ru": [
      "Что из перечисленного является общеизвестным номером порта в соответствии с определением IANA? А, 1010."
    ]
  },
  {
    "time": [
      1577.44,
      1581.94
    ],
    "en": [
      "A, 1010. B, 2001. C, 4023."
    ],
    "ru": [
      "А, 1010. В, 2001. С, 4023."
    ]
  },
  {
    "time": [
      1581.94,
      1584.5
    ],
    "en": [
      "C, 4023. Or D, 65000."
    ],
    "ru": [
      "C, 4023. Или D, 65000."
    ]
  },
  {
    "time": [
      1584.5,
      1590.17
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1590.17,
      1593.02
    ],
    "en": [
      "The answer is A, 1010."
    ],
    "ru": [
      "Ответ - А, 1010."
    ]
  },
  {
    "time": [
      1593.02,
      1595.69
    ],
    "en": [
      "Here are the ranges designated by IANA."
    ],
    "ru": [
      "Вот диапазоны, обозначенные IANA."
    ]
  },
  {
    "time": [
      1595.69,
      1600.42
    ],
    "en": [
      "Well-known port numbers are those from 0 through 1023."
    ],
    "ru": [
      "Хорошо известные номера портов - от 0 до 1023."
    ]
  },
  {
    "time": [
      1600.42,
      1605.42
    ],
    "en": [
      "Answers B and C are in the Registered range, and D is in the Ephemeral range."
    ],
    "ru": [
      "Ответы B и C находятся в зарегистрированном диапазоне, а D - в эфемерном диапазоне."
    ]
  },
  {
    "time": [
      1605.42,
      1608.62
    ],
    "en": [
      "Okay, let’s move on to question 2."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1608.62,
      1614.86
    ],
    "en": [
      "According to IANA specifications, what range of port numbers should hosts select from when"
    ],
    "ru": [
      "Согласно спецификациям IANA, из какого диапазона номеров портов должны выбирать хосты, когда"
    ]
  },
  {
    "time": [
      1614.86,
      1619.5
    ],
    "en": [
      "randomly selecting a source Layer 4 port number? A, well-known."
    ],
    "ru": [
      "случайный выбор номера порта исходного уровня 4? Известный."
    ]
  },
  {
    "time": [
      1619.5,
      1622.37
    ],
    "en": [
      "A, well-known. B, registered. C, ephemeral."
    ],
    "ru": [
      "Известный. Б, зарегистрированный. C, эфемерный."
    ]
  },
  {
    "time": [
      1622.37,
      1624.2
    ],
    "en": [
      "C, ephemeral. Or D, reserved."
    ],
    "ru": [
      "C, эфемерный. Или D, зарезервировано."
    ]
  },
  {
    "time": [
      1624.2,
      1628.95
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1628.95,
      1631.32
    ],
    "en": [
      "The answer is C, ephemeral."
    ],
    "ru": [
      "Ответ - C, эфемерный."
    ]
  },
  {
    "time": [
      1631.32,
      1635.39
    ],
    "en": [
      "The destination port number depends on the Application layer protocol, but the source"
    ],
    "ru": [
      "Номер порта назначения зависит от протокола прикладного уровня, но источник"
    ]
  },
  {
    "time": [
      1635.39,
      1639.2
    ],
    "en": [
      "port number should be randomly selected from the Ephemeral port range."
    ],
    "ru": [
      "номер порта следует выбирать случайным образом из диапазона эфемерных портов."
    ]
  },
  {
    "time": [
      1639.2,
      1643.97
    ],
    "en": [
      "Once again, here are the different port ranges as designated by IANA."
    ],
    "ru": [
      "Еще раз, вот различные диапазоны портов, определенные IANA."
    ]
  },
  {
    "time": [
      1643.97,
      1646.99
    ],
    "en": [
      "Note that D, reserved, isn’t one of the ranges."
    ],
    "ru": [
      "Обратите внимание, что D (зарезервировано) не является одним из диапазонов."
    ]
  },
  {
    "time": [
      1646.99,
      1651.61
    ],
    "en": [
      "Okay, let’s go to question 3."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1651.61,
      1656.46
    ],
    "en": [
      "Which of the following are features of TCP but not UDP? (select three)."
    ],
    "ru": [
      "Что из перечисленного является особенностями TCP, но не UDP? (выберите три)."
    ]
  },
  {
    "time": [
      1656.46,
      1661.21
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
      1656.46,
      1661.21
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
      1661.21,
      1665.63
    ],
    "en": [
      "B, error recovery. C, session multiplexing. D, flow control."
    ],
    "ru": [
      "B, восстановление после ошибок. C, мультиплексирование сеанса. D, управление потоком."
    ]
  },
  {
    "time": [
      1665.63,
      1667.63
    ],
    "en": [
      "D, flow control. And E, sequencing."
    ],
    "ru": [
      "D, управление потоком. И E, секвенирование."
    ]
  },
  {
    "time": [
      1667.63,
      1674.66
    ],
    "en": [
      "Pause the video to think about your answers, select three."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своими ответами, выберите три."
    ]
  },
  {
    "time": [
      1674.66,
      1680.97
    ],
    "en": [
      "The answers are B, error recovery, D, flow control, and E, sequencing."
    ],
    "ru": [
      "Ответы: B - восстановление после ошибок, D - управление потоком и E - последовательность."
    ]
  },
  {
    "time": [
      1680.97,
      1685.52
    ],
    "en": [
      "Layer 4 addressing in the form of port numbers and session multiplexing are features of both"
    ],
    "ru": [
      "Адресация уровня 4 в виде номеров портов и мультиплексирование сеансов являются особенностями обоих"
    ]
  },
  {
    "time": [
      1685.52,
      1692.96
    ],
    "en": [
      "TCP and UDP, but only TCP provides services like error recovery, flow control, and sequencing to applications."
    ],
    "ru": [
      "TCP и UDP, но только TCP предоставляет приложениям такие услуги, как восстановление после ошибок, управление потоком и упорядочение."
    ]
  },
  {
    "time": [
      1692.96,
      1697.87
    ],
    "en": [
      "to applications. Okay, let’s go to question 4."
    ],
    "ru": [
      "к приложениям. Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1697.87,
      1704.86
    ],
    "en": [
      "Which of the following Application Layer protocols use TCP to provide reliable communications? (select three)."
    ],
    "ru": [
      "Какие из следующих протоколов прикладного уровня используют TCP для обеспечения надежной связи? (выберите три)."
    ]
  },
  {
    "time": [
      1704.86,
      1708.84
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
      1704.86,
      1708.84
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
      1708.84,
      1712.83
    ],
    "en": [
      "B, SNMP. C, HTTPS. D, DHCP."
    ],
    "ru": [
      "B, SNMP. C, HTTPS. D, DHCP."
    ]
  },
  {
    "time": [
      1712.83,
      1716.83
    ],
    "en": [
      "D, DHCP. E, Syslog. Or F, SSH."
    ],
    "ru": [
      "D, DHCP. E, системный журнал. Или F, SSH."
    ]
  },
  {
    "time": [
      1716.83,
      1724.0
    ],
    "en": [
      "Or F, SSH. Pause the video to think about your answers, select three."
    ],
    "ru": [
      "Или F, SSH. Поставьте видео на паузу, чтобы подумать над своими ответами, выберите три."
    ]
  },
  {
    "time": [
      1724.0,
      1730.25
    ],
    "en": [
      "The answers are A, SMTP, C, HTTPS, and F, SSH."
    ],
    "ru": [
      "Ответы: A, SMTP, C, HTTPS и F, SSH."
    ]
  },
  {
    "time": [
      1730.25,
      1733.61
    ],
    "en": [
      "Although we haven’t learned the details of these protocols yet, I recommend learning"
    ],
    "ru": [
      "Хотя мы еще не изучили детали этих протоколов, я рекомендую изучить"
    ]
  },
  {
    "time": [
      1733.61,
      1737.02
    ],
    "en": [
      "which ones use TCP or UDP, and their port numbers."
    ],
    "ru": [
      "какие из них используют TCP или UDP, и их номера портов."
    ]
  },
  {
    "time": [
      1737.02,
      1739.71
    ],
    "en": [
      "You’ll definitely need to know some of them for the test."
    ],
    "ru": [
      "Некоторые из них вам обязательно нужно знать для теста."
    ]
  },
  {
    "time": [
      1739.71,
      1743.559
    ],
    "en": [
      "Okay, let’s move on to question 5."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1743.559,
      1748.16
    ],
    "en": [
      "PC1 and SRV1 have an active TCP connection."
    ],
    "ru": [
      "ПК1 и SRV1 имеют активное TCP-соединение."
    ]
  },
  {
    "time": [
      1748.16,
      1753.64
    ],
    "en": [
      "SRV1 receives a TCP segment from PC1 with a sequence number of 27."
    ],
    "ru": [
      "SRV1 получает сегмент TCP от ПК1 с порядковым номером 27."
    ]
  },
  {
    "time": [
      1753.64,
      1759.44
    ],
    "en": [
      "When SRV1 acknowledges the segment, what will the value of the Acknowledgment field in the TCP header be?"
    ],
    "ru": [
      "Когда SRV1 подтверждает сегмент, каким будет значение поля подтверждения в заголовке TCP?"
    ]
  },
  {
    "time": [
      1759.44,
      1763.73
    ],
    "en": [
      "TCP header be? Assume a TCP window size of 1. A, 26."
    ],
    "ru": [
      "Заголовок TCP быть? Предположим, что размер окна TCP равен 1. A, 26."
    ]
  },
  {
    "time": [
      1763.73,
      1767.36
    ],
    "en": [
      "A, 26. B, 27. Or C, 28."
    ],
    "ru": [
      "А, 26. Б, 27. Или С, 28."
    ]
  },
  {
    "time": [
      1767.36,
      1772.97
    ],
    "en": [
      "Or C, 28. Pause the video to think about your answer."
    ],
    "ru": [
      "Или C, 28. Остановите видео, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1772.97,
      1778.58
    ],
    "en": [
      "The answer is C. TCP uses ‘forward acknowledgment’, meaning it acknowledges that it received a"
    ],
    "ru": [
      "Ответ: C. TCP использует «прямое подтверждение», что означает, что он подтверждает, что получил"
    ]
  },
  {
    "time": [
      1778.58,
      1783.33
    ],
    "en": [
      "segment by stating the next segment it expects to receive."
    ],
    "ru": [
      "сегмент, указав следующий сегмент, который он ожидает получить."
    ]
  },
  {
    "time": [
      1783.33,
      1789.19
    ],
    "en": [
      "If SRV1 acknowledged with a value of 27, for example, PC1 would assume that SRV1 didn’t"
    ],
    "ru": [
      "Если SRV1 подтвердил, например, значение 27, PC1 предположит, что SRV1 не"
    ]
  },
  {
    "time": [
      1789.19,
      1793.02
    ],
    "en": [
      "receive the segment with sequence number 27, so it would send it again."
    ],
    "ru": [
      "получить сегмент с порядковым номером 27, чтобы он отправил его снова."
    ]
  },
  {
    "time": [
      1793.02,
      1798.309
    ],
    "en": [
      "Don’t worry too much about the details of TCP operations, but make sure you have a basic"
    ],
    "ru": [
      "Не беспокойтесь о деталях операций TCP, но убедитесь, что у вас есть базовый"
    ]
  },
  {
    "time": [
      1798.309,
      1801.179
    ],
    "en": [
      "understanding of how sequencing and acknowledgment works."
    ],
    "ru": [
      "понимание того, как работает последовательность и подтверждение."
    ]
  },
  {
    "time": [
      1801.179,
      1803.3
    ],
    "en": [
      "Okay, that’s all for the quiz."
    ],
    "ru": [
      "Ладно, это все для викторины."
    ]
  },
  {
    "time": [
      1803.3,
      1809.63
    ],
    "en": [
      "Let’s take a look at a bonus question in Boson ExSim for CCNA."
    ],
    "ru": [
      "Давайте взглянем на бонусный вопрос в Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      1809.63,
      1811.74
    ],
    "en": [
      "Here's today's Boson ExSim practice question."
    ],
    "ru": [
      "Вот вопрос сегодняшней практики Boson ExSim."
    ]
  },
  {
    "time": [
      1811.74,
      1817.559
    ],
    "en": [
      "So, I will click on Launch Simulator and here it is, a drag-and-drop question."
    ],
    "ru": [
      "Итак, я нажимаю на Launch Simulator, и вот он, вопрос с перетаскиванием."
    ]
  },
  {
    "time": [
      1817.559,
      1823.35
    ],
    "en": [
      "Select the applications layer protocols on the left, and drag them to the corresponding transport layer protocols."
    ],
    "ru": [
      "Выберите слева протоколы уровня приложений и перетащите их в соответствующие протоколы транспортного уровня."
    ]
  },
  {
    "time": [
      1823.35,
      1825.76
    ],
    "en": [
      "transport layer protocols. All application layer protocols will be used."
    ],
    "ru": [
      "протоколы транспортного уровня. Будут использоваться все протоколы прикладного уровня."
    ]
  },
  {
    "time": [
      1825.76,
      1830.29
    ],
    "en": [
      "So, these here on the left are all application layer protocols, and these are the transport"
    ],
    "ru": [
      "Итак, здесь слева - все протоколы прикладного уровня, и это транспортный"
    ]
  },
  {
    "time": [
      1830.29,
      1833.27
    ],
    "en": [
      "layer protocols we just learned, TCP and UDP."
    ],
    "ru": [
      "протоколы уровня, которые мы только что изучили, TCP и UDP."
    ]
  },
  {
    "time": [
      1833.27,
      1836.67
    ],
    "en": [
      "And also one of these uses both TCP and UDP."
    ],
    "ru": [
      "А также один из них использует как TCP, так и UDP."
    ]
  },
  {
    "time": [
      1836.67,
      1845.45
    ],
    "en": [
      "Okay, so pause the video here and think about the answer. Okay, let's check."
    ],
    "ru": [
      "Хорошо, поэтому останови видео здесь и подумай над ответом. Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      1845.45,
      1847.57
    ],
    "en": [
      "Okay, let's check. So I will go from top to bottom."
    ],
    "ru": [
      "Хорошо, давай проверим. Так что я буду идти сверху вниз."
    ]
  },
  {
    "time": [
      1847.57,
      1852.52
    ],
    "en": [
      "DNS, Domain Name System, that uses TCP and UDP."
    ],
    "ru": [
      "DNS, система доменных имен, использующая TCP и UDP."
    ]
  },
  {
    "time": [
      1852.52,
      1857.64
    ],
    "en": [
      "Usually it uses UDP, but it does use TCP in some cases."
    ],
    "ru": [
      "Обычно он использует UDP, но в некоторых случаях он использует TCP."
    ]
  },
  {
    "time": [
      1857.64,
      1860.33
    ],
    "en": [
      "Next, DHCP uses UDP."
    ],
    "ru": [
      "Далее DHCP использует UDP."
    ]
  },
  {
    "time": [
      1860.33,
      1868.21
    ],
    "en": [
      "FTP, File Transfer Protocol, TCP. HTTP uses TCP."
    ],
    "ru": [
      "FTP, протокол передачи файлов, TCP. HTTP использует TCP."
    ]
  },
  {
    "time": [
      1868.21,
      1873.14
    ],
    "en": [
      "HTTP uses TCP. SMTP, Simple Mail Transfer Protocol, TCP."
    ],
    "ru": [
      "HTTP использует TCP. SMTP, простой протокол передачи почты, TCP."
    ]
  },
  {
    "time": [
      1873.14,
      1875.73
    ],
    "en": [
      "And then these last two, of course UDP."
    ],
    "ru": [
      "И затем эти два последних, конечно же UDP."
    ]
  },
  {
    "time": [
      1875.73,
      1879.27
    ],
    "en": [
      "SNMP, Simple Network Management Protocol."
    ],
    "ru": [
      "SNMP, простой протокол управления сетью."
    ]
  },
  {
    "time": [
      1879.27,
      1882.57
    ],
    "en": [
      "And TFTP, the Trivial File Transfer Protocol."
    ],
    "ru": [
      "И TFTP, простой протокол передачи файлов."
    ]
  },
  {
    "time": [
      1882.57,
      1886.38
    ],
    "en": [
      "Okay, so I will click on 'done'."
    ],
    "ru": [
      "Хорошо, я нажму «готово»."
    ]
  },
  {
    "time": [
      1886.38,
      1887.71
    ],
    "en": [
      "And let's see if I'm correct."
    ],
    "ru": [
      "И посмотрим, прав ли я."
    ]
  },
  {
    "time": [
      1887.71,
      1889.49
    ],
    "en": [
      "Click on 'show answer'."
    ],
    "ru": [
      "Щелкните «Показать ответ»."
    ]
  },
  {
    "time": [
      1889.49,
      1892.04
    ],
    "en": [
      "And yes, that is correct."
    ],
    "ru": [
      "И да, это правильно."
    ]
  },
  {
    "time": [
      1892.04,
      1898.72
    ],
    "en": [
      "So, if you want to read Boson's explanation you can pause the video here."
    ],
    "ru": [
      "Итак, если вы хотите прочитать объяснение Бозона, вы можете приостановить видео здесь."
    ]
  },
  {
    "time": [
      1898.72,
      1903.09
    ],
    "en": [
      "I haven't explained all of these application layer protocols yet, but I will cover them"
    ],
    "ru": [
      "Я еще не объяснил все эти протоколы прикладного уровня, но я расскажу о них."
    ]
  },
  {
    "time": [
      1903.09,
      1904.799
    ],
    "en": [
      "later in the course."
    ],
    "ru": [
      "позже в курсе."
    ]
  },
  {
    "time": [
      1904.799,
      1911.299
    ],
    "en": [
      "For now just remember whether they use TCP or UDP, and also remember their port numbers."
    ],
    "ru": [
      "А пока просто запомните, используют ли они TCP или UDP, а также запомните номера их портов."
    ]
  },
  {
    "time": [
      1911.299,
      1915.91
    ],
    "en": [
      "Okay, so that's Boson ExSim for CCNA."
    ],
    "ru": [
      "Хорошо, это Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      1915.91,
      1917.54
    ],
    "en": [
      "I highly recommend these practice exams."
    ],
    "ru": [
      "Я очень рекомендую эти практические экзамены."
    ]
  },
  {
    "time": [
      1917.54,
      1923.26
    ],
    "en": [
      "I used them when I was studying for my CCNA and CCNP exams, and I highly recommend them"
    ],
    "ru": [
      "Я использовал их, когда готовился к экзаменам CCNA и CCNP, и очень рекомендую их."
    ]
  },
  {
    "time": [
      1923.26,
      1925.85
    ],
    "en": [
      "because they really helped me pass my exams."
    ],
    "ru": [
      "потому что они действительно помогли мне сдать экзамены."
    ]
  },
  {
    "time": [
      1925.85,
      1933.29
    ],
    "en": [
      "So, if you want to get a copy of Boson ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Итак, если вы хотите получить копию Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1933.29,
      1936.48
    ],
    "en": [
      "There are supplementary materials for this video."
    ],
    "ru": [
      "К этому видео есть дополнительные материалы."
    ]
  },
  {
    "time": [
      1936.48,
      1939.87
    ],
    "en": [
      "There is a flashcard deck to use with the software ‘Anki’."
    ],
    "ru": [
      "Существует колода карточек для использования с программным обеспечением «Anki»."
    ]
  },
  {
    "time": [
      1939.87,
      1943.97
    ],
    "en": [
      "This time there won’t be a packet tracer practice lab, instead I will make a Wireshark"
    ],
    "ru": [
      "На этот раз не будет практической лаборатории по отслеживанию пакетов, вместо этого я сделаю Wireshark"
    ]
  },
  {
    "time": [
      1943.97,
      1948.88
    ],
    "en": [
      "demo, to show you TCP and UDP in action in a real network."
    ],
    "ru": [
      "демо, чтобы показать вам TCP и UDP в действии в реальной сети."
    ]
  },
  {
    "time": [
      1948.88,
      1953.25
    ],
    "en": [
      "Wireshark is a packet capture program, which lets you analyze network traffic."
    ],
    "ru": [
      "Wireshark - это программа захвата пакетов, которая позволяет анализировать сетевой трафик."
    ]
  },
  {
    "time": [
      1953.25,
      1959.44
    ],
    "en": [
      "It’s great for studying and also a very useful tool for network engineers."
    ],
    "ru": [
      "Это отличный инструмент для учебы, а также очень полезный инструмент для сетевых инженеров."
    ]
  },
  {
    "time": [
      1959.44,
      1963.23
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
      1963.23,
      1967.5
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
      1967.5,
      1973.24
    ],
    "en": [
      "Thank you to Benjamin, Deepak, Tshepiso, Justin, Loki, TheGunguy, Nil, Alex, Prakaash, Nasir,"
    ],
    "ru": [
      "Спасибо Benjamin, Deepak, Tshepiso, Justin, Loki, TheGunguy, Nil, Alex, Prakaash, Nasir,"
    ]
  },
  {
    "time": [
      1973.24,
      1979.33
    ],
    "en": [
      "Erlison, Apogee, Wasseem, Marko, Florian, Daming, Kone, Joshua, Jhilmar, Samil, Ed,"
    ],
    "ru": [
      "Эрлисон, Апогей, Вассим, Марко, Флориан, Даминг, Коне, Джошуа, Джилмар, Самил, Эд,"
    ]
  },
  {
    "time": [
      1979.33,
      1985.98
    ],
    "en": [
      "Value, John, Funnydart, Scott, Hassan, Gerrard, Joyce, Marek, Velvijaykum, C Mohd, Johan,"
    ],
    "ru": [
      "Вэлью, Джон, Фаннидарт, Скотт, Хассан, Джеррард, Джойс, Марек, Велвиджайкум, Си Мохд, Йохан,"
    ]
  },
  {
    "time": [
      1985.98,
      1991.84
    ],
    "en": [
      "Mark, Yousif, Sidi, Boson Software, Charlesetta, Devin, Lito, Yonatan, and Vance."
    ],
    "ru": [
      "Марк, Юсиф, Сиди, Boson Software, Шарлезетта, Девин, Лито, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      1991.84,
      1997.53
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1997.53,
      2001.33
    ],
    "en": [
      "One of you is still displaying as Channel failed to load, if this is you please let"
    ],
    "ru": [
      "Один из вас по-прежнему отображается как «Не удалось загрузить канал». Если это так, пожалуйста, позвольте"
    ]
  },
  {
    "time": [
      2001.33,
      2004.41
    ],
    "en": [
      "me know and I’ll see if YouTube can fix it."
    ],
    "ru": [
      "я знаю, и я посмотрю, сможет ли YouTube это исправить."
    ]
  },
  {
    "time": [
      2004.41,
      2009.059
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, September"
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, сентябрь"
    ]
  },
  {
    "time": [
      2009.059,
      2013.86
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
      2009.059,
      2013.86
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
      2013.86,
      2017.48
    ],
    "en": [
      "be in future videos."
    ],
    "ru": [
      "быть в будущих видео."
    ]
  },
  {
    "time": [
      2017.48,
      2019.059
    ],
    "en": [
      "Thank you for watching."
    ],
    "ru": [
      "Спасибо за просмотр."
    ]
  },
  {
    "time": [
      2019.059,
      2023.03
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
      2023.03,
      2026.299
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
      2026.299,
      2028.89
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
      2028.89,
      2036.64
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
      2036.64,
      2036.64
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]