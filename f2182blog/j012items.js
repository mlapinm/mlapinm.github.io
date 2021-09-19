var objs = [
  {
    "time": [
      1.53,
      3.84
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
      3.84,
      8.84
    ],
    "en": [
      "This is a free, complete course for the CCNA 200-301."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA 200-301."
    ]
  },
  {
    "time": [
      8.84,
      12.88
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
      12.88,
      18.82
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
      18.82,
      22.56
    ],
    "en": [
      "Thanks for your help. Let’s get started."
    ],
    "ru": [
      "Спасибо за вашу помощь. Давайте начнем."
    ]
  },
  {
    "time": [
      22.56,
      26.13
    ],
    "en": [
      "In this lab you’ll practice and develop your understanding of some of the concepts"
    ],
    "ru": [
      "В этой лабораторной работе вы попрактикуетесь и разовьете понимание некоторых концепций"
    ]
  },
  {
    "time": [
      26.13,
      31.8
    ],
    "en": [
      "learned in the day 5 and day 6 videos on Ethernet LAN Switching."
    ],
    "ru": [
      "изучил в видео днях 5 и 6 о коммутации Ethernet LAN."
    ]
  },
  {
    "time": [
      31.8,
      36.46
    ],
    "en": [
      "As you can see, the network topology we will use in this lab is like the example network"
    ],
    "ru": [
      "Как видите, топология сети, которую мы будем использовать в этой лабораторной работе, похожа на пример сети."
    ]
  },
  {
    "time": [
      36.46,
      43.289
    ],
    "en": [
      "I used in those previous lecture videos, with two switches, each with 2 PCs connected to them."
    ],
    "ru": [
      "Я использовал в предыдущих видео лекциях с двумя переключателями, к каждому из которых было подключено по 2 ПК."
    ]
  },
  {
    "time": [
      43.289,
      47.39
    ],
    "en": [
      "Let’s get started and go through the steps."
    ],
    "ru": [
      "Приступим и пройдемся по шагам."
    ]
  },
  {
    "time": [
      47.39,
      52.199
    ],
    "en": [
      "First off, there is a note saying that both switches have an empty MAC address table,"
    ],
    "ru": [
      "Во-первых, есть примечание о том, что оба коммутатора имеют пустую таблицу MAC-адресов,"
    ]
  },
  {
    "time": [
      52.199,
      55.359
    ],
    "en": [
      "and all PCs have an empty ARP table."
    ],
    "ru": [
      "и все ПК имеют пустую таблицу ARP."
    ]
  },
  {
    "time": [
      55.359,
      62.35
    ],
    "en": [
      "Keep that in mind as you try to answer step 1, which asks us, if PC1 pings to PC3, what"
    ],
    "ru": [
      "Имейте это в виду, когда вы пытаетесь ответить на шаг 1, который спрашивает нас, пингуется ли PC1 с PC3, что"
    ]
  },
  {
    "time": [
      62.35,
      66.7
    ],
    "en": [
      "messages will be sent over the network, and which devices will receive them?"
    ],
    "ru": [
      "сообщения будут отправляться по сети, и какие устройства их получат?"
    ]
  },
  {
    "time": [
      66.7,
      74.229
    ],
    "en": [
      "So, if PC1 wants to send a ping to PC3, it has to know PC3’s MAC address."
    ],
    "ru": [
      "Итак, если ПК1 хочет отправить эхо-запрос на ПК3, он должен знать MAC-адрес ПК3."
    ]
  },
  {
    "time": [
      74.229,
      84.079
    ],
    "en": [
      "We can type ping 192.168.1.3 on PC1 to send a ping, but until PC1 knows PC3’s MAC address,"
    ],
    "ru": [
      "Мы можем ввести ping 192.168.1.3 на ПК1, чтобы отправить эхо-запрос, но пока ПК1 не узнает MAC-адрес ПК3,"
    ]
  },
  {
    "time": [
      84.079,
      86.24
    ],
    "en": [
      "it can't send the ping."
    ],
    "ru": [
      "он не может отправить пинг."
    ]
  },
  {
    "time": [
      86.24,
      89.03
    ],
    "en": [
      "That means PC1 will have to send an ARP request."
    ],
    "ru": [
      "Это означает, что ПК1 должен будет отправить запрос ARP."
    ]
  },
  {
    "time": [
      89.03,
      91.789
    ],
    "en": [
      "So, that’s the first message."
    ],
    "ru": [
      "Итак, это первое сообщение."
    ]
  },
  {
    "time": [
      91.789,
      95.04
    ],
    "en": [
      "Now, which devices will receive the ARP request?"
    ],
    "ru": [
      "Теперь, какие устройства получат запрос ARP?"
    ]
  },
  {
    "time": [
      95.04,
      100.39
    ],
    "en": [
      "Well, the ARP request is a broadcast message, so ALL devices on the local network will receive"
    ],
    "ru": [
      "Что ж, запрос ARP - это широковещательное сообщение, поэтому ВСЕ устройства в локальной сети получат"
    ]
  },
  {
    "time": [
      100.39,
      104.75
    ],
    "en": [
      "it, except for PC1 of course, which sends the message."
    ],
    "ru": [
      "это, за исключением, конечно, ПК1, который отправляет сообщение."
    ]
  },
  {
    "time": [
      104.75,
      113.159
    ],
    "en": [
      "PC2 and PC4 will ignore the message, but then PC3 will send an ARP reply, which is the second message."
    ],
    "ru": [
      "ПК2 и ПК4 проигнорируют сообщение, но затем ПК3 отправит ответ ARP, который является вторым сообщением."
    ]
  },
  {
    "time": [
      113.159,
      119.409
    ],
    "en": [
      "Unlike the ARP request, which is a broadcast message, the ARP reply is a unicast message,"
    ],
    "ru": [
      "В отличие от запроса ARP, который является широковещательным сообщением, ответ ARP является одноадресным сообщением,"
    ]
  },
  {
    "time": [
      119.409,
      125.601
    ],
    "en": [
      "so the message will be sent through SW2 and SW1, and then be received by PC1 only, no"
    ],
    "ru": [
      "поэтому сообщение будет отправлено через SW2 и SW1, а затем будет получено только ПК1, нет"
    ]
  },
  {
    "time": [
      125.601,
      129.429
    ],
    "en": [
      "copies of the message will be sent to PC2 or PC4."
    ],
    "ru": [
      "копии сообщения будут отправлены на ПК2 или ПК4."
    ]
  },
  {
    "time": [
      129.429,
      136.18
    ],
    "en": [
      "Then, PC1 will be able to add PC3’s MAC Address to its ARP table, and use that information"
    ],
    "ru": [
      "Затем ПК1 сможет добавить MAC-адрес ПК3 в свою таблицу ARP и использовать эту информацию."
    ]
  },
  {
    "time": [
      136.18,
      139.04
    ],
    "en": [
      "as the destination address of its ping."
    ],
    "ru": [
      "как адрес назначения его пинга."
    ]
  },
  {
    "time": [
      139.04,
      145.48
    ],
    "en": [
      "So, the third message that will be sent is an ICMP echo request, from PC1."
    ],
    "ru": [
      "Итак, третье сообщение, которое будет отправлено, - это эхо-запрос ICMP от ПК1."
    ]
  },
  {
    "time": [
      145.48,
      150.0
    ],
    "en": [
      "This is a unicast message that will be received by PC3 only."
    ],
    "ru": [
      "Это одноадресное сообщение, которое будет получено только ПК3."
    ]
  },
  {
    "time": [
      150.0,
      156.89
    ],
    "en": [
      "Then, PC3 will send an ICMP echo reply, which is also a unicast message that will be received"
    ],
    "ru": [
      "Затем PC3 отправит эхо-ответ ICMP, который также является одноадресным сообщением, которое будет получено."
    ]
  },
  {
    "time": [
      156.89,
      162.32
    ],
    "en": [
      "by PC1 only, after passing through SW2 and SW1 of course."
    ],
    "ru": [
      "только ПК1, конечно, после прохождения SW2 и SW1."
    ]
  },
  {
    "time": [
      162.32,
      168.03
    ],
    "en": [
      "So, that’s it, those are the messages that will be sent over the network if PC1 pings PC3."
    ],
    "ru": [
      "Вот и все, это сообщения, которые будут отправлены по сети, если ПК1 пингует ПК3."
    ]
  },
  {
    "time": [
      168.03,
      176.94
    ],
    "en": [
      "Now, there won’t be just one ping, PC1 will send multiple pings, 4 by default from a windows PC."
    ],
    "ru": [
      "Теперь не будет только одного эхо-запроса, ПК1 отправит несколько эхо-запросов, 4 по умолчанию с ПК с Windows."
    ]
  },
  {
    "time": [
      176.94,
      183.47
    ],
    "en": [
      "Step 2 asks us to send the ping and use Packet tracer’s ‘simulation mode’ to verify our answer."
    ],
    "ru": [
      "Шаг 2 просит нас отправить эхо-запрос и использовать «режим моделирования» Packet Tracer, чтобы проверить наш ответ."
    ]
  },
  {
    "time": [
      183.47,
      187.93
    ],
    "en": [
      "First, let me click on simulation mode here in the bottom right."
    ],
    "ru": [
      "Во-первых, позвольте мне щелкнуть по режиму моделирования здесь, в правом нижнем углу."
    ]
  },
  {
    "time": [
      187.93,
      197.76
    ],
    "en": [
      "Then, to send a ping from a PC in packet tracer, click on the PC, click on desktop, and click on command prompt."
    ],
    "ru": [
      "Затем, чтобы отправить эхо-запрос с ПК в программе трассировки пакетов, щелкните ПК, щелкните рабочий стол и щелкните командную строку."
    ]
  },
  {
    "time": [
      197.76,
      199.5
    ],
    "en": [
      "Now just type in the command."
    ],
    "ru": [
      "Теперь просто введите команду."
    ]
  },
  {
    "time": [
      199.5,
      209.0
    ],
    "en": [
      "PC3’s IP address is 192.168.1.3, so the command is ping 192.168.1.3."
    ],
    "ru": [
      "IP-адрес ПК3 - 192.168.1.3, поэтому команда ping 192.168.1.3."
    ]
  },
  {
    "time": [
      209.0,
      216.9
    ],
    "en": [
      "Immediately, you can see that both an ICMP message, the ping, and an ARP message appear."
    ],
    "ru": [
      "Сразу видно, что появляются как сообщение ICMP, так и сообщение ping, и сообщение ARP."
    ]
  },
  {
    "time": [
      216.9,
      222.53
    ],
    "en": [
      "I’ll click on the ICMP message, and then click on Layer 2."
    ],
    "ru": [
      "Я нажимаю на сообщение ICMP, а затем нажимаю на Layer 2."
    ]
  },
  {
    "time": [
      222.53,
      224.51
    ],
    "en": [
      "Look at the info here."
    ],
    "ru": [
      "Посмотрите информацию здесь."
    ]
  },
  {
    "time": [
      224.51,
      227.87
    ],
    "en": [
      "The next-hop address is a unicast."
    ],
    "ru": [
      "Адрес следующего перехода является одноадресным."
    ]
  },
  {
    "time": [
      227.87,
      235.579
    ],
    "en": [
      "The ARP process looks it up in the ARP table, but the next-hop IP address is not in the ARP table."
    ],
    "ru": [
      "Процесс ARP ищет его в таблице ARP, но IP-адрес следующего перехода отсутствует в таблице ARP."
    ]
  },
  {
    "time": [
      235.579,
      241.84
    ],
    "en": [
      "The ARP process tries to send an ARP request for that IP address and buffers this packet."
    ],
    "ru": [
      "Процесс ARP пытается отправить запрос ARP для этого IP-адреса и буферизует этот пакет."
    ]
  },
  {
    "time": [
      241.84,
      246.17
    ],
    "en": [
      "Buffers means it holds the packet, so it can send it later."
    ],
    "ru": [
      "Буферы означают, что он хранит пакет, поэтому он может отправить его позже."
    ]
  },
  {
    "time": [
      246.17,
      250.59
    ],
    "en": [
      "Now let’s click on the ARP message, and look here at the information."
    ],
    "ru": [
      "Теперь давайте нажмем на сообщение ARP и посмотрим здесь на информацию."
    ]
  },
  {
    "time": [
      250.59,
      255.36
    ],
    "en": [
      "This time I’ll click on ‘Outbound PDU details’, which shows us detailed information"
    ],
    "ru": [
      "На этот раз я нажму на «Outbound PDU details», которая покажет нам подробную информацию."
    ]
  },
  {
    "time": [
      255.36,
      259.64
    ],
    "en": [
      "about the frame. Do you recognize these fields?"
    ],
    "ru": [
      "по поводу рамы. Вы узнаете эти поля?"
    ]
  },
  {
    "time": [
      259.64,
      268.63
    ],
    "en": [
      "Preamble, SFD, destination address, source address, type, data, which is the encapsulated"
    ],
    "ru": [
      "Преамбула, SFD, адрес назначения, адрес источника, тип, данные, которые инкапсулированы"
    ]
  },
  {
    "time": [
      268.63,
      271.69
    ],
    "en": [
      "packet, and then FCS."
    ],
    "ru": [
      "пакет, а затем FCS."
    ]
  },
  {
    "time": [
      271.69,
      278.4
    ],
    "en": [
      "If you watched my last two videos, you should recognize all of these fields of the Ethernet header and trailer."
    ],
    "ru": [
      "Если вы смотрели два моих последних видео, вы должны узнать все эти поля заголовка и трейлера Ethernet."
    ]
  },
  {
    "time": [
      278.4,
      286.009
    ],
    "en": [
      "Notice in particular the TYPE field of 0806, which indicates ARP, and the destination MAC"
    ],
    "ru": [
      "Обратите внимание, в частности, на поле TYPE 0806, которое указывает ARP, и MAC-адрес назначения."
    ]
  },
  {
    "time": [
      286.009,
      289.889
    ],
    "en": [
      "address of all F’s, which is the broadcast address."
    ],
    "ru": [
      "адрес всех F, который является широковещательным адресом."
    ]
  },
  {
    "time": [
      289.889,
      297.229
    ],
    "en": [
      "Okay, now I’ll exit from here and click through the process...the ARP reaches SW1,"
    ],
    "ru": [
      "Хорошо, теперь я выйду отсюда и щелкну по процессу ... ARP достигает SW1,"
    ]
  },
  {
    "time": [
      297.229,
      304.9
    ],
    "en": [
      "is broadcast to PC2 and SW2, and then broadcast to PC3 and PC4."
    ],
    "ru": [
      "транслируется на ПК2 и SW2, а затем транслируется на ПК3 и ПК4."
    ]
  },
  {
    "time": [
      304.9,
      313.07
    ],
    "en": [
      "Only PC3 replies, this time with a unicast message which arrives at SW2, then SW1, and then PC1."
    ],
    "ru": [
      "Отвечает только ПК3, на этот раз одноадресным сообщением, которое приходит на SW2, затем на SW1, а затем на ПК1."
    ]
  },
  {
    "time": [
      313.07,
      320.84
    ],
    "en": [
      "PC1 can then, finally, send its ICMP echo request, which is unicast and goes to SW1,"
    ],
    "ru": [
      "Затем ПК1 может, наконец, отправить свой эхо-запрос ICMP, который является одноадресным и переходит к SW1,"
    ]
  },
  {
    "time": [
      320.84,
      323.76
    ],
    "en": [
      "SW2, and then PC3."
    ],
    "ru": [
      "SW2, а затем PC3."
    ]
  },
  {
    "time": [
      323.76,
      332.4
    ],
    "en": [
      "PC3 then sends the ICMP echo reply back through SW2, SW1, and then arriving at PC1."
    ],
    "ru": [
      "Затем ПК3 отправляет эхо-ответ ICMP обратно через SW2, SW1 и затем поступает на ПК1."
    ]
  },
  {
    "time": [
      332.4,
      341.9
    ],
    "en": [
      "I’ll just press this play button, and you can see the rest of the pings being sent between PC1 and PC3."
    ],
    "ru": [
      "Я просто нажму эту кнопку воспроизведения, и вы увидите, как остальные эхо-запросы отправляются между ПК1 и ПК3."
    ]
  },
  {
    "time": [
      341.9,
      348.389
    ],
    "en": [
      "There should be 4 in total, as these Packet Tracer PCs operate like windows PCs."
    ],
    "ru": [
      "Всего должно быть 4, так как эти ПК с Packet Tracer работают как ПК с Windows."
    ]
  },
  {
    "time": [
      348.389,
      351.93
    ],
    "en": [
      "Cisco devices, however, send 5 pings by default."
    ],
    "ru": [
      "Однако устройства Cisco по умолчанию отправляют 5 эхо-запросов."
    ]
  },
  {
    "time": [
      351.93,
      360.96
    ],
    "en": [
      "Now, Step 3 tells us to generate network traffic and allow the switches to learn all MAC address of the PCs on the network."
    ],
    "ru": [
      "Теперь шаг 3 сообщает нам, что нужно сгенерировать сетевой трафик и позволить коммутаторам узнать все MAC-адреса компьютеров в сети."
    ]
  },
  {
    "time": [
      360.96,
      366.69
    ],
    "en": [
      "Remember, switches dynamically learn and enter MAC addresses into their MAC address table"
    ],
    "ru": [
      "Помните, коммутаторы динамически изучают и вводят MAC-адреса в свою таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      366.69,
      370.23
    ],
    "en": [
      "by looking at the source address field of frames they receive."
    ],
    "ru": [
      "глядя на поле адреса источника кадров, которые они получают."
    ]
  },
  {
    "time": [
      370.23,
      377.21
    ],
    "en": [
      "So, since we just pinged between PC1 and PC3, both switches should know their MAC addresses,"
    ],
    "ru": [
      "Итак, поскольку мы только что провели эхо-запрос между ПК1 и ПК3, оба коммутатора должны знать свои MAC-адреса,"
    ]
  },
  {
    "time": [
      377.21,
      383.64
    ],
    "en": [
      "but just in case I’ll switch back to realtime mode...and send one more ping from PC1 to PC3,"
    ],
    "ru": [
      "но на всякий случай я вернусь в режим реального времени ... и отправлю еще один пинг с ПК1 на ПК3,"
    ]
  },
  {
    "time": [
      383.64,
      388.789
    ],
    "en": [
      "because sometimes Packet Tracer has problems with simulation mode."
    ],
    "ru": [
      "потому что иногда у Packet Tracer возникают проблемы с режимом моделирования."
    ]
  },
  {
    "time": [
      388.789,
      396.3
    ],
    "en": [
      "Okay, next let’s send a ping from PC2 to PC4 so that the switches can learn their MAC addresses."
    ],
    "ru": [
      "Хорошо, теперь давайте отправим эхо-запрос с ПК2 на ПК4, чтобы коммутаторы могли узнать свои MAC-адреса."
    ]
  },
  {
    "time": [
      396.3,
      408.36
    ],
    "en": [
      "I’ll go on PC2, and now I’ll ping PC4. Ping 192.168.1.4."
    ],
    "ru": [
      "Я пойду на ПК2, а теперь пингую на ПК4. Пинг 192.168.1.4."
    ]
  },
  {
    "time": [
      408.36,
      415.03
    ],
    "en": [
      "Step 4 asks us to use show commands on the switches to identify the MAC address of each PC."
    ],
    "ru": [
      "Шаг 4 просит нас использовать команды show на коммутаторах для определения MAC-адреса каждого ПК."
    ]
  },
  {
    "time": [
      415.03,
      419.851
    ],
    "en": [
      "Because the interface each PC is connected to is displayed on the network diagram, if"
    ],
    "ru": [
      "Поскольку интерфейс, к которому подключен каждый ПК, отображается на схеме сети, если"
    ]
  },
  {
    "time": [
      419.851,
      424.54
    ],
    "en": [
      "we look for that interface in the MAC address table we will be able to identify the MAC"
    ],
    "ru": [
      "мы ищем этот интерфейс в таблице MAC-адресов, мы сможем идентифицировать MAC"
    ]
  },
  {
    "time": [
      424.54,
      425.759
    ],
    "en": [
      "address of each PC."
    ],
    "ru": [
      "адрес каждого ПК."
    ]
  },
  {
    "time": [
      425.759,
      429.36
    ],
    "en": [
      "I’ll go on SW1."
    ],
    "ru": [
      "Я пойду на SW1."
    ]
  },
  {
    "time": [
      429.36,
      433.06
    ],
    "en": [
      "We have to be in privileged exec mode to view the MAC address table."
    ],
    "ru": [
      "Мы должны находиться в привилегированном режиме exec, чтобы просмотреть таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      433.06,
      438.539
    ],
    "en": [
      "So, use the command enable, or just 'en'."
    ],
    "ru": [
      "Итак, используйте команду enable или просто en."
    ]
  },
  {
    "time": [
      438.539,
      444.11
    ],
    "en": [
      "The command to view the mac address table is show mac SPACE address HYPHEN table."
    ],
    "ru": [
      "Команда для просмотра таблицы MAC-адресов - это показать таблицу MAC-адресов SPACE HYPHEN."
    ]
  },
  {
    "time": [
      444.11,
      448.699
    ],
    "en": [
      "Make sure you don’t mix up the space and hyphen."
    ],
    "ru": [
      "Убедитесь, что вы не перепутали пробел и дефис."
    ]
  },
  {
    "time": [
      448.699,
      455.199
    ],
    "en": [
      "Okay, first of all let’s find PC1, which is attached to the fastethernet 0/1 interface."
    ],
    "ru": [
      "Хорошо, прежде всего найдем ПК1, который подключен к интерфейсу fastethernet 0/1."
    ]
  },
  {
    "time": [
      455.199,
      460.069
    ],
    "en": [
      "Here it is, and you can see the MAC address here."
    ],
    "ru": [
      "Вот он, и здесь вы можете увидеть MAC-адрес."
    ]
  },
  {
    "time": [
      460.069,
      463.879
    ],
    "en": [
      "Note that the MAC address in your lab maybe different, I’m not sure if packet tracer"
    ],
    "ru": [
      "Обратите внимание, что MAC-адрес в вашей лаборатории может отличаться, я не уверен, что пакетный трассировщик"
    ]
  },
  {
    "time": [
      463.879,
      470.93
    ],
    "en": [
      "keeps the MAC addresses consistent if you load the labs up on another computer. How about PC2?"
    ],
    "ru": [
      "сохраняет согласованность MAC-адресов, если вы загружаете лаборатории на другой компьютер. А как насчет PC2?"
    ]
  },
  {
    "time": [
      470.93,
      477.759
    ],
    "en": [
      "Well, its connected to Fastethernet0/2, so here is PC2’s MAC address."
    ],
    "ru": [
      "Ну, он подключен к Fastethernet0 / 2, так что вот MAC-адрес ПК2."
    ]
  },
  {
    "time": [
      477.759,
      482.349
    ],
    "en": [
      "Now, as for PC3 and PC4, we have a problem."
    ],
    "ru": [
      "Теперь, что касается ПК3 и ПК4, у нас возникла проблема."
    ]
  },
  {
    "time": [
      482.349,
      488.569
    ],
    "en": [
      "SW1 only knows that it can reach these two MAC addresses via gigabit ethernet 0/1."
    ],
    "ru": [
      "SW1 знает только, что он может достичь этих двух MAC-адресов через гигабитный Ethernet 0/1."
    ]
  },
  {
    "time": [
      488.569,
      495.0
    ],
    "en": [
      "Just by looking at this MAC table, we don’t know which address belongs to PC3 and which belongs to PC4."
    ],
    "ru": [
      "Просто взглянув на эту таблицу MAC-адресов, мы не узнаем, какой адрес принадлежит ПК3, а какой - ПК4."
    ]
  },
  {
    "time": [
      495.0,
      504.669
    ],
    "en": [
      "So, let’s go on to SW2. Once again, I’ll enter privileged exec mode, enable."
    ],
    "ru": [
      "Итак, перейдем к SW2. Еще раз вхожу в привилегированный режим exec, enable."
    ]
  },
  {
    "time": [
      504.669,
      509.389
    ],
    "en": [
      "Now let’s view the MAC address table. Show mac address-table."
    ],
    "ru": [
      "Теперь давайте посмотрим на таблицу MAC-адресов. Показать таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      509.389,
      518.16
    ],
    "en": [
      "PC3 is connected to fastethernet 0/1, so this must be its MAC address, and PC4 is connected"
    ],
    "ru": [
      "ПК3 подключен к fastethernet 0/1, поэтому это должен быть его MAC-адрес, а ПК4 подключен"
    ]
  },
  {
    "time": [
      518.16,
      523.42
    ],
    "en": [
      "to fastethernet 0/2, so this must be its MAC Address."
    ],
    "ru": [
      "к fastethernet 0/2, поэтому это должен быть его MAC-адрес."
    ]
  },
  {
    "time": [
      523.42,
      530.48
    ],
    "en": [
      "We have successfully used the show mac address table command to identify the MAC address of each PC."
    ],
    "ru": [
      "Мы успешно использовали команду show mac address table для определения MAC-адреса каждого ПК."
    ]
  },
  {
    "time": [
      530.48,
      536.69
    ],
    "en": [
      "Now let’s do step 5, which is to clear the dynamic MAC addresses from the mac address table of each switch."
    ],
    "ru": [
      "Теперь перейдем к шагу 5, который заключается в очистке динамических MAC-адресов из таблицы MAC-адресов каждого коммутатора."
    ]
  },
  {
    "time": [
      536.69,
      541.19
    ],
    "en": [
      "Since I’m already on SW2, I’ll start here."
    ],
    "ru": [
      "Поскольку я уже использую SW2, я начну здесь."
    ]
  },
  {
    "time": [
      541.19,
      548.37
    ],
    "en": [
      "The command is clear mac address-table dynamic, but before I hit enter, I want to show you something."
    ],
    "ru": [
      "Команда - это динамическая очистка таблицы MAC-адресов, но прежде чем я нажму Enter, я хочу вам кое-что показать."
    ]
  },
  {
    "time": [
      548.37,
      554.27
    ],
    "en": [
      "I’ll use the question mark, which is also known as 'context-sensitive help'."
    ],
    "ru": [
      "Я буду использовать вопросительный знак, который также известен как «контекстно-зависимая справка»."
    ]
  },
  {
    "time": [
      554.27,
      558.08
    ],
    "en": [
      "As you can see, it doesn’t display any additional options here."
    ],
    "ru": [
      "Как видите, здесь не отображаются дополнительные параметры."
    ]
  },
  {
    "time": [
      558.08,
      564.031
    ],
    "en": [
      "If you remember from the day 6 lecture video when I did the demonstration in GNS3 I could clear"
    ],
    "ru": [
      "Если вы помните из видео лекции шестого дня, когда я проводил демонстрацию в GNS3, я мог очистить"
    ]
  },
  {
    "time": [
      564.031,
      569.34
    ],
    "en": [
      "specific MAC addresses by specifying the address or interface."
    ],
    "ru": [
      "конкретные MAC-адреса, указав адрес или интерфейс."
    ]
  },
  {
    "time": [
      569.34,
      575.06
    ],
    "en": [
      "Packet tracer, however, does not support this option, you have to clear all MAC addresses."
    ],
    "ru": [
      "Однако Packet Tracer не поддерживает эту опцию, вам необходимо очистить все MAC-адреса."
    ]
  },
  {
    "time": [
      575.06,
      580.27
    ],
    "en": [
      "So I enter the command, then I’ll use the up arrow on the keyboard to go back to the"
    ],
    "ru": [
      "Я ввожу команду и с помощью стрелки вверх на клавиатуре вернусь к"
    ]
  },
  {
    "time": [
      580.27,
      586.64
    ],
    "en": [
      "show mac address-table command, enter it once more, and you can see the mac address-table is now empty."
    ],
    "ru": [
      "show mac address-table команда, введите ее еще раз, и вы увидите, что таблица MAC-адресов теперь пуста."
    ]
  },
  {
    "time": [
      586.64,
      591.31
    ],
    "en": [
      "I’ll do the same on SW1."
    ],
    "ru": [
      "Я сделаю то же самое с SW1."
    ]
  },
  {
    "time": [
      591.31,
      594.22
    ],
    "en": [
      "Clear mac address-table dynamic."
    ],
    "ru": [
      "Очистить таблицу MAC-адресов динамически."
    ]
  },
  {
    "time": [
      594.22,
      600.2
    ],
    "en": [
      "Press the up arrow twice to go back to the show mac address-table command, hit enter,"
    ],
    "ru": [
      "Дважды нажмите стрелку вверх, чтобы вернуться к команде show mac address-table, нажмите Enter,"
    ]
  },
  {
    "time": [
      600.2,
      603.37
    ],
    "en": [
      "and there we go, the address table is now empty."
    ],
    "ru": [
      "и поехали, таблица адресов теперь пуста."
    ]
  },
  {
    "time": [
      603.37,
      606.94
    ],
    "en": [
      "We have successfully completed this lab."
    ],
    "ru": [
      "Мы успешно завершили эту лабораторную работу."
    ]
  },
  {
    "time": [
      606.94,
      608.94
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
      608.94,
      612.8
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "Подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      612.8,
      615.92
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA."
    ],
    "ru": [
      "и поделитесь видео со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      615.92,
      619.46
    ],
    "en": [
      "If you want to leave tip, check the links in the description."
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      619.46,
      624.1
    ],
    "en": [
      "I'm also a Brave verified publisher, and accept BAT, or Basic Attention Token,"
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю BAT или Basic Attention Token,"
    ]
  },
  {
    "time": [
      624.1,
      624.1
    ],
    "en": [
      "tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "подсказки через браузер Brave. На этом пока все."
    ]
  }
]