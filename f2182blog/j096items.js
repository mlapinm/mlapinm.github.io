let items = [
  {
    "time": [
      0.729,
      3.149
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
      3.149,
      6.72
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
      6.72,
      10.289
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
      10.289,
      16.09
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
      16.09,
      18.01
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
      18.01,
      21.419
    ],
    "en": [
      "In this video we will talk about DHCP snooping."
    ],
    "ru": [
      "В этом видео мы поговорим о отслеживании DHCP."
    ]
  },
  {
    "time": [
      21.419,
      26.8
    ],
    "en": [
      "DHCP snooping is a security feature available on Cisco switches which helps to protect against"
    ],
    "ru": [
      "Отслеживание DHCP - это функция безопасности, доступная на коммутаторах Cisco, которая помогает защитить от"
    ]
  },
  {
    "time": [
      26.8,
      30.0
    ],
    "en": [
      "attacks which take advantage of DHCP."
    ],
    "ru": [
      "атаки, использующие DHCP."
    ]
  },
  {
    "time": [
      30.0,
      35.85
    ],
    "en": [
      "DHCP snooping is covered in exam topic 5.7, which says that you must be able to configure"
    ],
    "ru": [
      "Отслеживание DHCP рассматривается в теме экзамена 5.7, в которой говорится, что вы должны уметь настраивать"
    ]
  },
  {
    "time": [
      35.85,
      43.489
    ],
    "en": [
      "layer 2 security features including DHCP snooping, dynamic ARP inspection, and port security."
    ],
    "ru": [
      "функции безопасности уровня 2, включая отслеживание DHCP, динамическую проверку ARP и безопасность портов."
    ]
  },
  {
    "time": [
      43.489,
      48.149
    ],
    "en": [
      "We already covered port security, and dynamic ARP inspection will be the next video."
    ],
    "ru": [
      "Мы уже рассмотрели безопасность портов, а в следующем видео будет динамическая проверка ARP."
    ]
  },
  {
    "time": [
      48.149,
      51.92
    ],
    "en": [
      "But for this video, let’s focus on DHCP snooping."
    ],
    "ru": [
      "Но в этом видео давайте сосредоточимся на отслеживании DHCP."
    ]
  },
  {
    "time": [
      51.92,
      54.559
    ],
    "en": [
      "Here’s what we’ll cover in this video."
    ],
    "ru": [
      "Вот что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      54.559,
      59.339
    ],
    "en": [
      "Basically, it will be similar in structure to the previous video on port security."
    ],
    "ru": [
      "По сути, он будет похож по структуре на предыдущий видеоролик о безопасности портов."
    ]
  },
  {
    "time": [
      59.339,
      65.25
    ],
    "en": [
      "I’ll introduce what DHCP snooping is, how it works, what attacks it prevents, and how"
    ],
    "ru": [
      "Я расскажу, что такое отслеживание DHCP, как оно работает, какие атаки предотвращает и как"
    ]
  },
  {
    "time": [
      65.25,
      68.43
    ],
    "en": [
      "to configure it on Cisco switches."
    ],
    "ru": [
      "настроить его на коммутаторах Cisco."
    ]
  },
  {
    "time": [
      68.43,
      72.28
    ],
    "en": [
      "And make sure to watch until the end of the video for a bonus practice question from Boson"
    ],
    "ru": [
      "И обязательно просмотрите видео до конца, чтобы узнать о бонусной практике от Boson."
    ]
  },
  {
    "time": [
      72.28,
      77.85
    ],
    "en": [
      "Software’s ExSim for CCNA, my recommended practice exams for the CCNA."
    ],
    "ru": [
      "ExSim программного обеспечения для CCNA, я рекомендую практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      77.85,
      82.74
    ],
    "en": [
      "Okay, let’s take a look at the basics of DHCP snooping."
    ],
    "ru": [
      "Хорошо, давайте взглянем на основы отслеживания DHCP."
    ]
  },
  {
    "time": [
      82.74,
      90.19
    ],
    "en": [
      "DHCP snooping is a security feature of switches that is used to filter DHCP messages received on untrusted ports."
    ],
    "ru": [
      "Отслеживание DHCP - это функция безопасности коммутаторов, которая используется для фильтрации сообщений DHCP, полученных на ненадежных портах."
    ]
  },
  {
    "time": [
      90.19,
      94.28
    ],
    "en": [
      "on untrusted ports. I’ll tell you more about untrusted ports in a minute."
    ],
    "ru": [
      "на ненадежных портах. Я расскажу вам больше о ненадежных портах через минуту."
    ]
  },
  {
    "time": [
      94.28,
      98.22
    ],
    "en": [
      "Note that DHCP snooping only filters DHCP messages."
    ],
    "ru": [
      "Обратите внимание, что отслеживание DHCP фильтрует только сообщения DHCP."
    ]
  },
  {
    "time": [
      98.22,
      101.89
    ],
    "en": [
      "Any other non-DHCP messages aren’t affected."
    ],
    "ru": [
      "Никакие другие сообщения, не относящиеся к DHCP, не затрагиваются."
    ]
  },
  {
    "time": [
      101.89,
      103.89
    ],
    "en": [
      "All ports are untrusted by default."
    ],
    "ru": [
      "По умолчанию все порты не являются доверенными."
    ]
  },
  {
    "time": [
      103.89,
      108.03
    ],
    "en": [
      "It’s then up to you to configure which ports will be trusted."
    ],
    "ru": [
      "Затем вам решать, какие порты будут доверенными."
    ]
  },
  {
    "time": [
      108.03,
      114.3
    ],
    "en": [
      "Usually, uplink ports are configured as trusted ports, and downlink ports remain untrusted."
    ],
    "ru": [
      "Обычно порты восходящего канала конфигурируются как доверенные порты, а нисходящие порты остаются ненадежными."
    ]
  },
  {
    "time": [
      114.3,
      116.72
    ],
    "en": [
      "I’ll use this diagram to explain."
    ],
    "ru": [
      "Я воспользуюсь этой схемой для объяснения."
    ]
  },
  {
    "time": [
      116.72,
      122.5
    ],
    "en": [
      "So, R1 is either a DHCP server or a DHCP relay agent."
    ],
    "ru": [
      "Итак, R1 - это либо DHCP-сервер, либо агент DHCP-ретрансляции."
    ]
  },
  {
    "time": [
      122.5,
      128.69
    ],
    "en": [
      "The end hosts, the PCs, will use DHCP to receive an IP address from R1."
    ],
    "ru": [
      "Конечные хосты, ПК, будут использовать DHCP для получения IP-адреса от R1."
    ]
  },
  {
    "time": [
      128.69,
      135.31
    ],
    "en": [
      "The downlink ports on the switches, the interfaces pointing towards the end hosts, should be untrusted."
    ],
    "ru": [
      "Нисходящие порты на коммутаторах, интерфейсы, указывающие на конечные хосты, не должны быть доверенными."
    ]
  },
  {
    "time": [
      135.31,
      139.099
    ],
    "en": [
      "untrusted. The network admin doesn’t have direct control over the end user devices."
    ],
    "ru": [
      "ненадежный. Сетевой администратор не имеет прямого контроля над устройствами конечных пользователей."
    ]
  },
  {
    "time": [
      139.099,
      144.81
    ],
    "en": [
      "A malicious user could initiate a DHCP-based attack from one of their devices, so it’s"
    ],
    "ru": [
      "Злоумышленник может инициировать атаку на основе DHCP с одного из своих устройств, поэтому он"
    ]
  },
  {
    "time": [
      144.81,
      148.48
    ],
    "en": [
      "best to leave these ports in the default untrusted state."
    ],
    "ru": [
      "лучше всего оставить эти порты в ненадежном состоянии по умолчанию."
    ]
  },
  {
    "time": [
      148.48,
      152.28
    ],
    "en": [
      "So, which interfaces are downlink ports?"
    ],
    "ru": [
      "Итак, какие интерфейсы являются портами нисходящего канала?"
    ]
  },
  {
    "time": [
      152.28,
      155.92000000000002
    ],
    "en": [
      "These ones, because they point toward the end hosts."
    ],
    "ru": [
      "Эти, потому что они указывают на конечные хосты."
    ]
  },
  {
    "time": [
      155.92000000000002,
      160.629
    ],
    "en": [
      "However the uplink ports point toward the network infrastructure, the devices the network"
    ],
    "ru": [
      "Однако порты восходящего канала указывают на сетевую инфраструктуру, а устройства - в сеть."
    ]
  },
  {
    "time": [
      160.629,
      162.94
    ],
    "en": [
      "admin has control over."
    ],
    "ru": [
      "админ контролирует."
    ]
  },
  {
    "time": [
      162.94,
      169.12
    ],
    "en": [
      "We can be pretty sure, for example, that R1 isn’t going to initiate some kind of DHCP-based attack."
    ],
    "ru": [
      "Например, мы можем быть уверены, что R1 не будет инициировать какую-либо атаку на основе DHCP."
    ]
  },
  {
    "time": [
      169.12,
      173.379
    ],
    "en": [
      "attack. So, we can configure these interfaces as trusted ports."
    ],
    "ru": [
      "атака. Итак, мы можем настроить эти интерфейсы как доверенные порты."
    ]
  },
  {
    "time": [
      173.379,
      180.049
    ],
    "en": [
      "DHCP snooping won’t inspect any messages on trusted ports, the switch will simply forward them as normal."
    ],
    "ru": [
      "Отслеживание DHCP не проверяет сообщения на доверенных портах, коммутатор просто пересылает их в обычном режиме."
    ]
  },
  {
    "time": [
      180.049,
      183.51
    ],
    "en": [
      "them as normal. So, which ports are uplink ports?"
    ],
    "ru": [
      "их как обычно. Итак, какие порты являются портами восходящего канала?"
    ]
  },
  {
    "time": [
      183.51,
      188.45
    ],
    "en": [
      "These ones, because they point away from the end hosts, toward the network infrastructure."
    ],
    "ru": [
      "Эти, потому что они указывают от конечных хостов к сетевой инфраструктуре."
    ]
  },
  {
    "time": [
      188.45,
      193.269
    ],
    "en": [
      "DHCP snooping won’t inspect DHCP messages on these ports."
    ],
    "ru": [
      "Отслеживание DHCP не проверяет сообщения DHCP на этих портах."
    ]
  },
  {
    "time": [
      193.269,
      198.15
    ],
    "en": [
      "Now let’s look at an example of DHCP snooping."
    ],
    "ru": [
      "Теперь давайте посмотрим на пример отслеживания DHCP."
    ]
  },
  {
    "time": [
      198.15,
      203.06
    ],
    "en": [
      "PC1 sends a DHCP message, for example a DISCOVER message."
    ],
    "ru": [
      "ПК1 отправляет сообщение DHCP, например сообщение DISCOVER."
    ]
  },
  {
    "time": [
      203.06,
      210.26
    ],
    "en": [
      "SW1 receives the message on an untrusted port, so it inspects the message to see if it’s okay."
    ],
    "ru": [
      "SW1 получает сообщение через ненадежный порт, поэтому он проверяет сообщение, чтобы убедиться, что оно в порядке."
    ]
  },
  {
    "time": [
      210.26,
      214.689
    ],
    "en": [
      "okay. It determines that the message is fine, so it forwards it as normal."
    ],
    "ru": [
      "Ладно. Он определяет, что сообщение в порядке, и пересылает его как обычно."
    ]
  },
  {
    "time": [
      214.689,
      218.739
    ],
    "en": [
      "Then SW2 receives it, again on an untrusted interface."
    ],
    "ru": [
      "Затем SW2 получает его снова через ненадежный интерфейс."
    ]
  },
  {
    "time": [
      218.739,
      223.45
    ],
    "en": [
      "It checks the message and determines that it’s okay, so it forwards it to R1."
    ],
    "ru": [
      "Он проверяет сообщение и определяет, что все в порядке, и пересылает его R1."
    ]
  },
  {
    "time": [
      223.45,
      230.359
    ],
    "en": [
      "R1 then sends the reply, and it goes straight back to PC1 without being inspected by SW2 or SW1."
    ],
    "ru": [
      "Затем R1 отправляет ответ, и он сразу же возвращается на ПК1 без проверки SW2 или SW1."
    ]
  },
  {
    "time": [
      230.359,
      233.909
    ],
    "en": [
      "or SW1. Why don’t the switches inspect the message from R1?"
    ],
    "ru": [
      "или SW1. Почему коммутаторы не проверяют сообщение от R1?"
    ]
  },
  {
    "time": [
      233.909,
      239.12
    ],
    "en": [
      "It’s because they received it on their trusted ports, so they assume the message is okay."
    ],
    "ru": [
      "Это потому, что они получили его на свои доверенные порты, поэтому они считают, что сообщение в порядке."
    ]
  },
  {
    "time": [
      239.12,
      240.359
    ],
    "en": [
      "No need to check it."
    ],
    "ru": [
      "Не нужно это проверять."
    ]
  },
  {
    "time": [
      240.359,
      243.329
    ],
    "en": [
      "Now here’s another example."
    ],
    "ru": [
      "А теперь еще один пример."
    ]
  },
  {
    "time": [
      243.329,
      246.489
    ],
    "en": [
      "This time PC2 sends a DHCP message."
    ],
    "ru": [
      "На этот раз ПК2 отправляет сообщение DHCP."
    ]
  },
  {
    "time": [
      246.489,
      250.76
    ],
    "en": [
      "SW1 receives it on an untrusted port, so it inspects the message."
    ],
    "ru": [
      "SW1 получает его через ненадежный порт, поэтому он проверяет сообщение."
    ]
  },
  {
    "time": [
      250.76,
      256.109
    ],
    "en": [
      "However, this time it determines that the message is not OK, so it discards the message."
    ],
    "ru": [
      "Однако на этот раз он определяет, что сообщение не в порядке, поэтому он отбрасывает сообщение."
    ]
  },
  {
    "time": [
      256.109,
      261.19
    ],
    "en": [
      "Later in this video I’ll go over exactly how DHCP snooping determines if a message"
    ],
    "ru": [
      "Позже в этом видео я подробно расскажу, как отслеживание DHCP определяет,"
    ]
  },
  {
    "time": [
      261.19,
      265.36
    ],
    "en": [
      "is OK or not, so I won’t get into the details now."
    ],
    "ru": [
      "в порядке или нет, поэтому я не буду сейчас вдаваться в подробности."
    ]
  },
  {
    "time": [
      265.36,
      272.62
    ],
    "en": [
      "But perhaps the user of PC2 was trying to use a DHCP exploit, so SW1 decided to drop the message."
    ],
    "ru": [
      "Но, возможно, пользователь ПК2 пытался использовать эксплойт DHCP, поэтому SW1 решил сбросить сообщение."
    ]
  },
  {
    "time": [
      272.62,
      281.51
    ],
    "en": [
      "the message. Okay, next let’s look at a couple examples of DHCP-based attacks that DHCP snooping can protect against."
    ],
    "ru": [
      "сообщение. Хорошо, теперь давайте рассмотрим пару примеров атак на основе DHCP, от которых может защитить отслеживание DHCP."
    ]
  },
  {
    "time": [
      281.51,
      286.89
    ],
    "en": [
      "protect against. First up, let’s quickly review a type of attack you already know, the DHCP starvation,"
    ],
    "ru": [
      "защищать от. Во-первых, давайте быстро рассмотрим уже знакомый вам тип атаки: голодание DHCP,"
    ]
  },
  {
    "time": [
      286.89,
      290.47
    ],
    "en": [
      "also called DHCP exhaustion, attack."
    ],
    "ru": [
      "также называется исчерпанием DHCP, атакой."
    ]
  },
  {
    "time": [
      290.47,
      296.52
    ],
    "en": [
      "In this attack, an attacker uses spoofed MAC addresses to flood DHCP Discover messages."
    ],
    "ru": [
      "В этой атаке злоумышленник использует поддельные MAC-адреса для рассылки сообщений DHCP Discover."
    ]
  },
  {
    "time": [
      296.52,
      298.71
    ],
    "en": [
      "And what’s the purpose of that?"
    ],
    "ru": [
      "И какова в этом цель?"
    ]
  },
  {
    "time": [
      298.71,
      304.93
    ],
    "en": [
      "The target server’s DHCP pool becomes full, resulting in a denial-of-service to other devices."
    ],
    "ru": [
      "Пул DHCP целевого сервера переполняется, что приводит к отказу в обслуживании другим устройствам."
    ]
  },
  {
    "time": [
      304.93,
      308.41
    ],
    "en": [
      "devices. They won’t be able to get an IP address from the server."
    ],
    "ru": [
      "устройств. Они не смогут получить IP-адрес с сервера."
    ]
  },
  {
    "time": [
      308.41,
      311.1
    ],
    "en": [
      "You already know this by now, but here’s a review."
    ],
    "ru": [
      "Вы уже это знаете, но вот обзор."
    ]
  },
  {
    "time": [
      311.1,
      316.5
    ],
    "en": [
      "The attacker sends DHCP discover messages with false source MAC addresses."
    ],
    "ru": [
      "Злоумышленник отправляет сообщения DHCP-обнаружения с ложными исходными MAC-адресами."
    ]
  },
  {
    "time": [
      316.5,
      322.09
    ],
    "en": [
      "Now, something I didn’t mention before is that DHCP actually uses a field in the DHCP"
    ],
    "ru": [
      "Раньше я не упоминал о том, что DHCP фактически использует поле в DHCP."
    ]
  },
  {
    "time": [
      322.09,
      329.25
    ],
    "en": [
      "message, written as CHADDR, which stands for Client Hardware Address, to indicate the MAC"
    ],
    "ru": [
      "сообщение, записанное как CHADDR, что означает адрес оборудования клиента, чтобы указать MAC"
    ]
  },
  {
    "time": [
      329.25,
      331.15
    ],
    "en": [
      "address of the client."
    ],
    "ru": [
      "адрес клиента."
    ]
  },
  {
    "time": [
      331.15,
      335.97
    ],
    "en": [
      "Why is this field needed, when the server could just look at the source MAC address of the frame?"
    ],
    "ru": [
      "Зачем нужно это поле, если сервер может просто посмотреть на исходный MAC-адрес кадра?"
    ]
  },
  {
    "time": [
      335.97,
      342.93
    ],
    "en": [
      "of the frame? Well, in a network like this where the DHCP server is in the local network, that would work fine."
    ],
    "ru": [
      "кадра? Что ж, в такой сети, где DHCP-сервер находится в локальной сети, это будет работать нормально."
    ]
  },
  {
    "time": [
      342.93,
      348.75
    ],
    "en": [
      "work fine. But if the DHCP server is in a remote network and the DHCP messages are forwarded by a DHCP"
    ],
    "ru": [
      "работают нормально. Но если DHCP-сервер находится в удаленной сети и сообщения DHCP пересылаются DHCP"
    ]
  },
  {
    "time": [
      348.75,
      353.8
    ],
    "en": [
      "relay agent, when the server receives the frames from the client, the source MAC address"
    ],
    "ru": [
      "агент ретрансляции, когда сервер получает кадры от клиента, исходный MAC-адрес"
    ]
  },
  {
    "time": [
      353.8,
      356.84000000000003
    ],
    "en": [
      "of the frame will not be the client’s MAC address."
    ],
    "ru": [
      "кадра не будет MAC-адресом клиента."
    ]
  },
  {
    "time": [
      356.84000000000003,
      361.88
    ],
    "en": [
      "So, that’s why the client hardware address field is used to identify the client."
    ],
    "ru": [
      "Вот почему поле адреса оборудования клиента используется для идентификации клиента."
    ]
  },
  {
    "time": [
      361.88,
      364.58
    ],
    "en": [
      "Anyway, that’s just an aside."
    ],
    "ru": [
      "Во всяком случае, это просто отступление."
    ]
  },
  {
    "time": [
      364.58,
      368.77
    ],
    "en": [
      "The attacker sends countless fake DHCP Discover messages like this."
    ],
    "ru": [
      "Злоумышленник отправляет бесчисленное количество фальшивых сообщений DHCP Discover, подобных этому."
    ]
  },
  {
    "time": [
      368.77,
      374.66
    ],
    "en": [
      "Then, when the other devices in the network try to get IP addresses via DHCP, the server"
    ],
    "ru": [
      "Затем, когда другие устройства в сети попытаются получить IP-адреса через DHCP, сервер"
    ]
  },
  {
    "time": [
      374.66,
      381.65
    ],
    "en": [
      "is not able to assign them addresses, resulting in a denial of service to those clients."
    ],
    "ru": [
      "не может назначать им адреса, что приводит к отказу в обслуживании этих клиентов."
    ]
  },
  {
    "time": [
      381.65,
      385.67
    ],
    "en": [
      "And here’s one more example of a DHCP-based attack."
    ],
    "ru": [
      "А вот еще один пример атаки на основе DHCP."
    ]
  },
  {
    "time": [
      385.67,
      391.15
    ],
    "en": [
      "Similar to ARP poisoning, DHCP poisoning can be used to perform a man-in-the-middle attack."
    ],
    "ru": [
      "Подобно отравлению ARP, отравление DHCP может использоваться для атаки типа «злоумышленник в середине»."
    ]
  },
  {
    "time": [
      391.15,
      398.2
    ],
    "en": [
      "A spurious DHCP server, that just mean an illegitimate DHCP server, replies to clients’"
    ],
    "ru": [
      "Поддельный DHCP-сервер, который означает незаконный DHCP-сервер, отвечает клиентам"
    ]
  },
  {
    "time": [
      398.2,
      402.0
    ],
    "en": [
      "DHCP Discover messages and assigns them IP addresses."
    ],
    "ru": [
      "DHCP обнаруживает сообщения и назначает им IP-адреса."
    ]
  },
  {
    "time": [
      402.0,
      407.59000000000003
    ],
    "en": [
      "But it makes the clients use the spurious DHCP server’s IP address as the default gateway."
    ],
    "ru": [
      "Но это заставляет клиентов использовать ложный IP-адрес DHCP-сервера в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      407.59000000000003,
      415.29
    ],
    "en": [
      "gateway. So, in the network below the attacker is running DHCP server software, it is the spurious DHCP server."
    ],
    "ru": [
      "шлюз. Итак, в сети ниже злоумышленник запускает программное обеспечение DHCP-сервера, это поддельный DHCP-сервер."
    ]
  },
  {
    "time": [
      415.29,
      420.48
    ],
    "en": [
      "server. R1 is the legitimate DHCP server, and also the default gateway."
    ],
    "ru": [
      "сервер. R1 - это законный DHCP-сервер, а также шлюз по умолчанию."
    ]
  },
  {
    "time": [
      420.48,
      425.33
    ],
    "en": [
      "Both of these DHCP servers will respond to clients’ Discover messages, but clients"
    ],
    "ru": [
      "Оба этих DHCP-сервера будут отвечать на сообщения Discover клиентов, но клиенты"
    ]
  },
  {
    "time": [
      425.33,
      428.61
    ],
    "en": [
      "usually accept the first Offer message they receive."
    ],
    "ru": [
      "обычно принимают первое полученное сообщение с предложением."
    ]
  },
  {
    "time": [
      428.61,
      433.31
    ],
    "en": [
      "Now, in a situation like this it’s hard to know which Offer message will reach the"
    ],
    "ru": [
      "В такой ситуации трудно понять, какое сообщение с предложением дойдет до"
    ]
  },
  {
    "time": [
      433.31,
      437.43
    ],
    "en": [
      "clients first, the attacker’s Offer or R1’s Offer."
    ],
    "ru": [
      "сначала клиенты, предложение злоумышленника или предложение R1."
    ]
  },
  {
    "time": [
      437.43,
      443.02
    ],
    "en": [
      "But, if the legitimate DHCP server is actually in a remote network and R1 is just acting"
    ],
    "ru": [
      "Но если законный DHCP-сервер действительно находится в удаленной сети, а R1 просто действует"
    ]
  },
  {
    "time": [
      443.02,
      448.26
    ],
    "en": [
      "as a DHCP relay agent, then it’s almost guaranteed that the attacker’s Offer will"
    ],
    "ru": [
      "в качестве агента ретрансляции DHCP, то почти гарантировано, что предложение злоумышленника будет"
    ]
  },
  {
    "time": [
      448.26,
      451.77
    ],
    "en": [
      "reach the clients first, because it’s in the local network."
    ],
    "ru": [
      "сначала обратиться к клиентам, потому что он находится в локальной сети."
    ]
  },
  {
    "time": [
      451.77,
      453.86
    ],
    "en": [
      "No need to forward traffic to a remote network."
    ],
    "ru": [
      "Нет необходимости перенаправлять трафик в удаленную сеть."
    ]
  },
  {
    "time": [
      453.86,
      459.36
    ],
    "en": [
      "So, if the clients use the attacker as their default gateway, when sending traffic to external"
    ],
    "ru": [
      "Итак, если клиенты используют злоумышленника в качестве шлюза по умолчанию, при отправке трафика на внешние"
    ]
  },
  {
    "time": [
      459.36,
      464.99
    ],
    "en": [
      "networks they will send traffic to the attacker instead of the legitimate default gateway."
    ],
    "ru": [
      "сети они будут отправлять трафик злоумышленнику вместо легитимного шлюза по умолчанию."
    ]
  },
  {
    "time": [
      464.99,
      470.75
    ],
    "en": [
      "The attacker can then examine and/or modify the traffic before forwarding it to the legitimate default gateway."
    ],
    "ru": [
      "Затем злоумышленник может проверить и / или изменить трафик, прежде чем перенаправить его на законный шлюз по умолчанию."
    ]
  },
  {
    "time": [
      470.75,
      473.15
    ],
    "en": [
      "default gateway. Let’s walk through that process."
    ],
    "ru": [
      "шлюз по умолчанию. Давайте пройдемся по этому процессу."
    ]
  },
  {
    "time": [
      473.15,
      480.8
    ],
    "en": [
      "PC1 sends a DHCP Discover message and it is broadcast to all devices on the local network, including the attacker."
    ],
    "ru": [
      "ПК1 отправляет сообщение DHCP Discover, которое транслируется на все устройства в локальной сети, включая злоумышленника."
    ]
  },
  {
    "time": [
      480.8,
      485.52
    ],
    "en": [
      "including the attacker. So, both the attacker and R1 send Offer messages for PC1."
    ],
    "ru": [
      "включая злоумышленника. Таким образом, и злоумышленник, и R1 отправляют сообщения Offer для ПК1."
    ]
  },
  {
    "time": [
      485.52,
      490.58
    ],
    "en": [
      "However, in this case the attacker’s Offer reaches PC1 first."
    ],
    "ru": [
      "Однако в этом случае предложение злоумышленника сначала достигает ПК1."
    ]
  },
  {
    "time": [
      490.58,
      495.64
    ],
    "en": [
      "Because it arrives first, PC1 will choose to accept it, and not R1’s Offer."
    ],
    "ru": [
      "Поскольку оно поступит первым, PC1 примет его решение, а не Предложение R1."
    ]
  },
  {
    "time": [
      495.64,
      499.26
    ],
    "en": [
      "So, PC1 will send a DECLINE message to R1."
    ],
    "ru": [
      "Итак, PC1 отправит R1 сообщение DECLINE."
    ]
  },
  {
    "time": [
      499.26,
      504.23
    ],
    "en": [
      "I haven’t introduced this message type yet, but I think you can guess its purpose."
    ],
    "ru": [
      "Я еще не представил этот тип сообщений, но думаю, вы можете догадаться о его назначении."
    ]
  },
  {
    "time": [
      504.23,
      513.24
    ],
    "en": [
      "However, with the attacker it completes the DHCP D-O-R-A process, and now PC1 has an IP"
    ],
    "ru": [
      "Однако с атакующим он завершает процесс DHCP D-O-R-A, и теперь у ПК1 есть IP-адрес."
    ]
  },
  {
    "time": [
      513.24,
      519.37
    ],
    "en": [
      "address, 172.16.1.10, and its default gateway is the attacker, 172.16.1.2."
    ],
    "ru": [
      "адрес 172.16.1.10, а шлюзом по умолчанию является злоумышленник 172.16.1.2."
    ]
  },
  {
    "time": [
      519.37,
      525.66
    ],
    "en": [
      "So, if PC1 wants to send traffic to an external network, for example the Internet, it will"
    ],
    "ru": [
      "Итак, если ПК1 хочет отправить трафик во внешнюю сеть, например в Интернет, он"
    ]
  },
  {
    "time": [
      525.66,
      527.91
    ],
    "en": [
      "send the traffic to the attacker."
    ],
    "ru": [
      "отправить трафик злоумышленнику."
    ]
  },
  {
    "time": [
      527.91,
      532.18
    ],
    "en": [
      "The attacker can then examine the traffic or even modify it, before finally forwarding"
    ],
    "ru": [
      "Затем злоумышленник может проверить трафик или даже изменить его, прежде чем окончательно перенаправить"
    ]
  },
  {
    "time": [
      532.18,
      537.87
    ],
    "en": [
      "it to the legitimate default gateway, which will send it to the external destination."
    ],
    "ru": [
      "его на законный шлюз по умолчанию, который отправит его внешнему адресату."
    ]
  },
  {
    "time": [
      537.87,
      542.579
    ],
    "en": [
      "Because the traffic does reach its destination, PC1 probably won’t even notice that its"
    ],
    "ru": [
      "Поскольку трафик действительно достигает пункта назначения, ПК1, вероятно, даже не заметит, что его"
    ]
  },
  {
    "time": [
      542.579,
      546.24
    ],
    "en": [
      "traffic is being intercepted by the attacker."
    ],
    "ru": [
      "трафик перехватывается злоумышленником."
    ]
  },
  {
    "time": [
      546.24,
      553.31
    ],
    "en": [
      "So those were two examples of DHCP-based attacks which DHCP snooping can protect against, DHCP"
    ],
    "ru": [
      "Итак, это были два примера атак на основе DHCP, от которых может защитить отслеживание DHCP."
    ]
  },
  {
    "time": [
      553.31,
      555.56
    ],
    "en": [
      "starvation and DHCP poisoning."
    ],
    "ru": [
      "голодание и отравление DHCP."
    ]
  },
  {
    "time": [
      555.56,
      559.709
    ],
    "en": [
      "Now let’s continue looking at DHCP snooping itself."
    ],
    "ru": [
      "Теперь продолжим рассмотрение самого DHCP-отслеживания."
    ]
  },
  {
    "time": [
      559.709,
      566.43
    ],
    "en": [
      "Let’s review the DHCP message types you already know, and learn about a few more."
    ],
    "ru": [
      "Давайте рассмотрим уже известные вам типы сообщений DHCP и узнаем еще несколько."
    ]
  },
  {
    "time": [
      566.43,
      574.87
    ],
    "en": [
      "When DHCP snooping filters messages, it differentiates between DHCP server messages and DHCP client messages."
    ],
    "ru": [
      "Когда отслеживание DHCP фильтрует сообщения, оно различает сообщения DHCP-сервера и сообщения DHCP-клиента."
    ]
  },
  {
    "time": [
      574.87,
      582.04
    ],
    "en": [
      "messages. DHCP server messages received on an untrusted port will always be discarded with no further checks."
    ],
    "ru": [
      "Сообщения. Сообщения DHCP-сервера, полученные через ненадежный порт, всегда отбрасываются без дальнейших проверок."
    ]
  },
  {
    "time": [
      582.04,
      589.06
    ],
    "en": [
      "checks. DHCP client messages will be inspected, and then the switch will decide to forward or discard the frame."
    ],
    "ru": [
      "чеки. Будут проверены сообщения DHCP-клиента, а затем коммутатор решит переслать или отклонить кадр."
    ]
  },
  {
    "time": [
      589.06,
      593.29
    ],
    "en": [
      "discard the frame. So, here are messages sent by DHCP servers."
    ],
    "ru": [
      "отказаться от рамки. Итак, вот сообщения, отправленные DHCP-серверами."
    ]
  },
  {
    "time": [
      593.29,
      599.23
    ],
    "en": [
      "OFFER and ACK you already know, they are used in the standard DHCP D-O-R-A exchange."
    ],
    "ru": [
      "OFFER и ACK, которые вы уже знаете, используются в стандартном обмене DHCP D-O-R-A."
    ]
  },
  {
    "time": [
      599.23,
      607.24
    ],
    "en": [
      "NAK is a new one, it’s the opposite of ACK and is used to decline a DHCP client’s REQUEST message."
    ],
    "ru": [
      "NAK является новым, он противоположен ACK и используется для отклонения сообщения ЗАПРОС DHCP-клиента."
    ]
  },
  {
    "time": [
      607.24,
      610.48
    ],
    "en": [
      "message. And here are messages sent by DHCP clients."
    ],
    "ru": [
      "сообщение. А вот сообщения, отправленные DHCP-клиентами."
    ]
  },
  {
    "time": [
      610.48,
      616.42
    ],
    "en": [
      "You already know DISCOVER and REQUEST, again they are used in the D-O-R-A exchange."
    ],
    "ru": [
      "Вы уже знаете DISCOVER и REQUEST, опять же, они используются в обмене D-O-R-A."
    ]
  },
  {
    "time": [
      616.42,
      621.079
    ],
    "en": [
      "RELEASE you already know too, I introduced it in the DHCP video."
    ],
    "ru": [
      "ВЫПУСК, который вы уже знаете, я представил в видео о DHCP."
    ]
  },
  {
    "time": [
      621.079,
      627.709
    ],
    "en": [
      "But for review, it’s used to tell the server that the client no longer needs its IP address."
    ],
    "ru": [
      "Но для проверки он используется, чтобы сообщить серверу, что клиенту больше не нужен его IP-адрес."
    ]
  },
  {
    "time": [
      627.709,
      630.54
    ],
    "en": [
      "And then there’s DECLINE, which I just showed earlier."
    ],
    "ru": [
      "И затем есть ОТКЛОНЕНИЕ, которое я только что показал ранее."
    ]
  },
  {
    "time": [
      630.54,
      635.7090000000001
    ],
    "en": [
      "It’s used to decline the IP address offered by a DHCP server."
    ],
    "ru": [
      "Он используется для отклонения IP-адреса, предлагаемого DHCP-сервером."
    ]
  },
  {
    "time": [
      635.7090000000001,
      641.73
    ],
    "en": [
      "Make sure you learn which messages are sent by DHCP servers and which are sent by DHCP clients."
    ],
    "ru": [
      "Убедитесь, что вы знаете, какие сообщения отправляются серверами DHCP, а какие - клиентами DHCP."
    ]
  },
  {
    "time": [
      641.73,
      645.0889999999999
    ],
    "en": [
      "clients. It’s an important part of understanding DHCP snooping."
    ],
    "ru": [
      "клиентов. Это важная часть понимания DHCP-отслеживания."
    ]
  },
  {
    "time": [
      645.0889999999999,
      650.579
    ],
    "en": [
      "Next, I’ll give you an outline of DHCP snooping operations."
    ],
    "ru": [
      "Далее я расскажу вам об операциях отслеживания DHCP."
    ]
  },
  {
    "time": [
      650.579,
      655.079
    ],
    "en": [
      "By that I mean, how it works to filter DHCP messages."
    ],
    "ru": [
      "Под этим я подразумеваю, как это работает для фильтрации сообщений DHCP."
    ]
  },
  {
    "time": [
      655.079,
      661.899
    ],
    "en": [
      "First of all, if a DHCP message is received on a trusted port, forward it as normal without inspection."
    ],
    "ru": [
      "Прежде всего, если сообщение DHCP получено через доверенный порт, пересылайте его как обычно без проверки."
    ]
  },
  {
    "time": [
      661.899,
      664.829
    ],
    "en": [
      "inspection. Messages received on trusted ports won’t be dropped."
    ],
    "ru": [
      "осмотр. Сообщения, полученные на доверенных портах, не удаляются."
    ]
  },
  {
    "time": [
      664.829,
      671.8
    ],
    "en": [
      "But, if a DHCP message is received on an untrusted port, inspect it and act as follows."
    ],
    "ru": [
      "Но если сообщение DHCP получено на ненадежный порт, проверьте его и действуйте следующим образом."
    ]
  },
  {
    "time": [
      671.8,
      676.12
    ],
    "en": [
      "First, if it’s a DHCP server message, discard it."
    ],
    "ru": [
      "Во-первых, если это сообщение DHCP-сервера, отбросьте его."
    ]
  },
  {
    "time": [
      676.12,
      681.72
    ],
    "en": [
      "DHCP servers should not be connected to untrusted ports, their ports should be trusted."
    ],
    "ru": [
      "DHCP-серверы не должны подключаться к ненадежным портам, их порты должны быть доверенными."
    ]
  },
  {
    "time": [
      681.72,
      688.97
    ],
    "en": [
      "So, any OFFER, ACK, or NAK messages that are received on an untrusted port will simply be discarded."
    ],
    "ru": [
      "Таким образом, любые сообщения OFFER, ACK или NAK, полученные через ненадежный порт, будут просто отброшены."
    ]
  },
  {
    "time": [
      688.97,
      697.569
    ],
    "en": [
      "be discarded. However, if the message is a DHCP client message, DISCOVER REQUEST RELEASE or DECLINE, perform the following checks."
    ],
    "ru": [
      "быть отброшенным. Однако, если сообщение является сообщением DHCP-клиента, DISCOVER REQUEST RELEASE или DECLINE, выполните следующие проверки."
    ]
  },
  {
    "time": [
      697.569,
      701.329
    ],
    "en": [
      "the following checks. So, these checks depend on what kind of message it is."
    ],
    "ru": [
      "следующие проверки. Итак, эти проверки зависят от того, что это за сообщение."
    ]
  },
  {
    "time": [
      701.329,
      707.65
    ],
    "en": [
      "First, for DISCOVER and REQUEST messages, the messages in the D-O-R-A exchange, check"
    ],
    "ru": [
      "Во-первых, для сообщений DISCOVER и REQUEST сообщения в обмене D-O-R-A проверяют"
    ]
  },
  {
    "time": [
      707.65,
      714.18
    ],
    "en": [
      "if the frame’s source MAC address and the DHCP message’s client hardware address fields match."
    ],
    "ru": [
      "если совпадают поля MAC-адреса источника кадра и аппаратного адреса клиента сообщения DHCP."
    ]
  },
  {
    "time": [
      714.18,
      716.369
    ],
    "en": [
      "match. If they match, forward the frame."
    ],
    "ru": [
      "соответствие. Если они совпадают, переместите кадр вперед."
    ]
  },
  {
    "time": [
      716.369,
      718.72
    ],
    "en": [
      "If they don’t discard it."
    ],
    "ru": [
      "Если они не откажутся от этого."
    ]
  },
  {
    "time": [
      718.72,
      725.779
    ],
    "en": [
      "This can protect against attacks when an attacker spoofs the client hardware address field of the DHCP message."
    ],
    "ru": [
      "Это может защитить от атак, когда злоумышленник подделывает поле адреса оборудования клиента в сообщении DHCP."
    ]
  },
  {
    "time": [
      725.779,
      731.35
    ],
    "en": [
      "the DHCP message. However it’s not perfect, because the attacker could just spoof the frame’s source MAC address too."
    ],
    "ru": [
      "сообщение DHCP. Однако это не идеально, потому что злоумышленник может просто подделать MAC-адрес источника кадра."
    ]
  },
  {
    "time": [
      731.35,
      737.55
    ],
    "en": [
      "address too. Then, for RELEASE and DECLINE messages, check if the packet’s source IP address and the"
    ],
    "ru": [
      "адрес тоже. Затем для сообщений RELEASE и DECLINE проверьте, есть ли IP-адрес источника пакета и"
    ]
  },
  {
    "time": [
      737.55,
      743.61
    ],
    "en": [
      "interface receiving the message match the entry in the DHCP snooping binding table."
    ],
    "ru": [
      "интерфейс, получающий сообщение, соответствует записи в таблице привязки отслеживания DHCP."
    ]
  },
  {
    "time": [
      743.61,
      745.8
    ],
    "en": [
      "If they match, forward the message."
    ],
    "ru": [
      "Если они совпадают, перешлите сообщение."
    ]
  },
  {
    "time": [
      745.8,
      747.399
    ],
    "en": [
      "If they don’t, discard it."
    ],
    "ru": [
      "Если они этого не делают, откажитесь от этого."
    ]
  },
  {
    "time": [
      747.399,
      751.619
    ],
    "en": [
      "I haven’t mentioned the DHCP snooping binding table yet."
    ],
    "ru": [
      "Я еще не упомянул таблицу привязки DHCP-отслеживания."
    ]
  },
  {
    "time": [
      751.619,
      757.11
    ],
    "en": [
      "When DHCP snooping is enabled, the switch will create a new entry in the DHCP snooping"
    ],
    "ru": [
      "Когда отслеживание DHCP включено, коммутатор создаст новую запись в отслеживании DHCP."
    ]
  },
  {
    "time": [
      757.11,
      763.009
    ],
    "en": [
      "binding table when a client successfully leases an IP address from a DHCP server."
    ],
    "ru": [
      "таблица привязки, когда клиент успешно арендует IP-адрес у DHCP-сервера."
    ]
  },
  {
    "time": [
      763.009,
      767.23
    ],
    "en": [
      "Let’s take a look at that in the next slide."
    ],
    "ru": [
      "Давайте посмотрим на это на следующем слайде."
    ]
  },
  {
    "time": [
      767.23,
      770.639
    ],
    "en": [
      "So let’s go over some basic DHCP snooping configurations."
    ],
    "ru": [
      "Итак, давайте рассмотрим некоторые основные конфигурации отслеживания DHCP."
    ]
  },
  {
    "time": [
      770.639,
      775.7090000000001
    ],
    "en": [
      "First, on SW2 I used IP DHCP SNOOPING."
    ],
    "ru": [
      "Сначала на SW2 я использовал IP DHCP SNOOPING."
    ]
  },
  {
    "time": [
      775.7090000000001,
      779.329
    ],
    "en": [
      "This enables DHCP snooping on the switch, but it’s not enough."
    ],
    "ru": [
      "Это позволяет отслеживать DHCP на коммутаторе, но этого недостаточно."
    ]
  },
  {
    "time": [
      779.329,
      786.509
    ],
    "en": [
      "I then used IP DHCP SNOOPING VLAN 1 to tell SW2 to enable it on VLAN 1."
    ],
    "ru": [
      "Затем я использовал IP DHCP SNOOPING VLAN 1, чтобы сообщить SW2, чтобы он включил его во VLAN 1."
    ]
  },
  {
    "time": [
      786.509,
      792.949
    ],
    "en": [
      "So, you need to enable DHCP snooping globally, with IP DHCP SNOOPING, and then enable it"
    ],
    "ru": [
      "Итак, вам нужно включить отслеживание DHCP глобально с помощью IP DHCP SNOOPING, а затем включить его"
    ]
  },
  {
    "time": [
      792.949,
      797.41
    ],
    "en": [
      "on each VLAN necessary, with IP DHCP SNOOPING VLAN."
    ],
    "ru": [
      "на каждой необходимой VLAN с IP DHCP SNOOPING VLAN."
    ]
  },
  {
    "time": [
      797.41,
      803.449
    ],
    "en": [
      "So, I enabled it for VLAN 1 because that’s the only VLAN in this network."
    ],
    "ru": [
      "Итак, я включил его для VLAN 1, потому что это единственная VLAN в этой сети."
    ]
  },
  {
    "time": [
      803.449,
      807.279
    ],
    "en": [
      "Then I used NO IP DHCP SNOOPING INFORMATION OPTION."
    ],
    "ru": [
      "Затем я использовал НЕТ ВАРИАНТА ИНФОРМАЦИИ ОБ ОБСУЖДЕНИИ IP DHCP."
    ]
  },
  {
    "time": [
      807.279,
      810.639
    ],
    "en": [
      "I’m going to explain this later, so we’ll skip it for now."
    ],
    "ru": [
      "Я объясню это позже, так что пока пропустим."
    ]
  },
  {
    "time": [
      810.639,
      815.8
    ],
    "en": [
      "It’s not always necessary, but depending on the network design you might need it."
    ],
    "ru": [
      "Это не всегда необходимо, но в зависимости от конструкции сети оно может вам понадобиться."
    ]
  },
  {
    "time": [
      815.8,
      821.66
    ],
    "en": [
      "Finally, I configure the G0/0 interface as a trusted port."
    ],
    "ru": [
      "Наконец, я настраиваю интерфейс G0 / 0 как доверенный порт."
    ]
  },
  {
    "time": [
      821.66,
      826.559
    ],
    "en": [
      "As I said before, by default all ports will be untrusted, so you will have to manually"
    ],
    "ru": [
      "Как я уже сказал, по умолчанию все порты не будут доверенными, поэтому вам придется вручную"
    ]
  },
  {
    "time": [
      826.559,
      829.679
    ],
    "en": [
      "specify which ports to trust."
    ],
    "ru": [
      "укажите, каким портам доверять."
    ]
  },
  {
    "time": [
      829.679,
      836.079
    ],
    "en": [
      "G0/0 is connected to R1, which is the DHCP server in this network, so I trusted it."
    ],
    "ru": [
      "G0 / 0 подключен к R1, который является DHCP-сервером в этой сети, поэтому я ему доверял."
    ]
  },
  {
    "time": [
      836.079,
      839.3
    ],
    "en": [
      "Okay, that’s all for SW2."
    ],
    "ru": [
      "Хорошо, это все, что касается SW2."
    ]
  },
  {
    "time": [
      839.3,
      842.35
    ],
    "en": [
      "Then I did the exact same configurations on SW1."
    ],
    "ru": [
      "Затем я проделал точно такую ​​же настройку на SW1."
    ]
  },
  {
    "time": [
      842.35,
      851.29
    ],
    "en": [
      "I configured SW1’s G0/0 as trusted, because it’s the interface pointing toward the DHCP server, R1."
    ],
    "ru": [
      "Я настроил G0 / 0 SW1 как доверенный, потому что это интерфейс, указывающий на сервер DHCP, R1."
    ]
  },
  {
    "time": [
      851.29,
      858.579
    ],
    "en": [
      "server, R1. Then I checked the DHCP snooping binding table with the command SHOW IP DHCP SNOOPING BINDING."
    ],
    "ru": [
      "сервер, R1. Затем я проверил таблицу привязки отслеживания DHCP с помощью команды SHOW IP DHCP SNOOPING BINDING."
    ]
  },
  {
    "time": [
      858.579,
      865.639
    ],
    "en": [
      "As you can see, PC1, PC2, and PC3 were able to get IP addresses via DHCP."
    ],
    "ru": [
      "Как видите, ПК1, ПК2 и ПК3 смогли получить IP-адреса через DHCP."
    ]
  },
  {
    "time": [
      865.639,
      873.069
    ],
    "en": [
      "This table logs their MAC addresses, IP addresses, lease times, VLAN numbers, and interface IDs."
    ],
    "ru": [
      "В этой таблице регистрируются их MAC-адреса, IP-адреса, время аренды, номера VLAN и идентификаторы интерфейсов."
    ]
  },
  {
    "time": [
      873.069,
      877.889
    ],
    "en": [
      "As I mentioned in the previous slide, RELEASE and DECLINE messages will be checked to make"
    ],
    "ru": [
      "Как я упоминал на предыдущем слайде, сообщения RELEASE и DECLINE будут проверяться, чтобы"
    ]
  },
  {
    "time": [
      877.889,
      884.54
    ],
    "en": [
      "sure their IP address and interface ID match the entry in the DHCP snooping table."
    ],
    "ru": [
      "убедитесь, что их IP-адрес и идентификатор интерфейса соответствуют записи в таблице отслеживания DHCP."
    ]
  },
  {
    "time": [
      884.54,
      888.63
    ],
    "en": [
      "This prevents attackers from sending these messages on behalf of other devices in the"
    ],
    "ru": [
      "Это предотвращает отправку злоумышленниками этих сообщений от имени других устройств в сети."
    ]
  },
  {
    "time": [
      888.63,
      894.869
    ],
    "en": [
      "network, causing the DHCP server to believe that they don’t need their IP addresses anymore."
    ],
    "ru": [
      "сети, заставляя DHCP-сервер полагать, что им больше не нужны их IP-адреса."
    ]
  },
  {
    "time": [
      894.869,
      900.73
    ],
    "en": [
      "anymore. Okay, next up another function of DHCP snooping, that is rate-limiting."
    ],
    "ru": [
      "больше. Хорошо, а теперь еще одна функция отслеживания DHCP, то есть ограничение скорости."
    ]
  },
  {
    "time": [
      900.73,
      907.74
    ],
    "en": [
      "DHCP snooping can limit the rate at which DHCP messages are allowed to enter an interface."
    ],
    "ru": [
      "Отслеживание DHCP может ограничивать скорость, с которой сообщениям DHCP разрешено вводить интерфейс."
    ]
  },
  {
    "time": [
      907.74,
      912.85
    ],
    "en": [
      "If the rate of DHCP messages crosses the configured limit, the interface is err-disabled."
    ],
    "ru": [
      "Если скорость сообщений DHCP превышает настроенный предел, интерфейс отключается из-за ошибки."
    ]
  },
  {
    "time": [
      912.85,
      918.97
    ],
    "en": [
      "Then, similar to port security, the interface can be manually re-enabled with SHUTDOWN and"
    ],
    "ru": [
      "Затем, как и в случае с безопасностью порта, интерфейс можно повторно включить вручную с помощью SHUTDOWN и"
    ]
  },
  {
    "time": [
      918.97,
      924.139
    ],
    "en": [
      "then NO SHUTDOWN, or automatically re-enabled with errdisable recovery."
    ],
    "ru": [
      "затем NO SHUTDOWN или автоматически повторно включается с восстановлением после сбоя."
    ]
  },
  {
    "time": [
      924.139,
      927.499
    ],
    "en": [
      "Here’s how to configure DHCP rate limiting."
    ],
    "ru": [
      "Вот как настроить ограничение скорости DHCP."
    ]
  },
  {
    "time": [
      927.499,
      936.6
    ],
    "en": [
      "I configured it on SW1’s G0/1, 2, and 3 with IP DHCP SNOOPING LIMIT RATE 1."
    ],
    "ru": [
      "Я настроил его на G0 / 1, 2 и 3 SW1 с IP DHCP SNOOPING LIMIT RATE 1."
    ]
  },
  {
    "time": [
      936.6,
      940.199
    ],
    "en": [
      "This limits DHCP messages to 1 per second."
    ],
    "ru": [
      "Это ограничивает количество сообщений DHCP до 1 в секунду."
    ]
  },
  {
    "time": [
      940.199,
      945.649
    ],
    "en": [
      "If the interface receives more than 1 DHCP message per second, it will be disabled."
    ],
    "ru": [
      "Если интерфейс получает более 1 сообщения DHCP в секунду, он будет отключен."
    ]
  },
  {
    "time": [
      945.649,
      948.72
    ],
    "en": [
      "Now, this is too low for a real network."
    ],
    "ru": [
      "Теперь это слишком мало для реальной сети."
    ]
  },
  {
    "time": [
      948.72,
      953.649
    ],
    "en": [
      "If you set the limit to 1 DHCP message per second, your switch interfaces will definitely"
    ],
    "ru": [
      "Если вы установите ограничение на 1 сообщение DHCP в секунду, интерфейсы вашего коммутатора определенно будут"
    ]
  },
  {
    "time": [
      953.649,
      957.769
    ],
    "en": [
      "get disabled even by legitimate DHCP exchanges."
    ],
    "ru": [
      "отключаются даже при законном обмене DHCP."
    ]
  },
  {
    "time": [
      957.769,
      964.059
    ],
    "en": [
      "But, I set it to 1 so I could easily make SW1’s G0/1 become disabled."
    ],
    "ru": [
      "Но я установил его на 1, чтобы легко отключить G0 / 1 SW1."
    ]
  },
  {
    "time": [
      964.059,
      965.57
    ],
    "en": [
      "And that’s what happened."
    ],
    "ru": [
      "Так и случилось."
    ]
  },
  {
    "time": [
      965.57,
      971.089
    ],
    "en": [
      "These log messages show that G0/1 received more DHCP messages than it’s allowed to,"
    ],
    "ru": [
      "Эти сообщения журнала показывают, что G0 / 1 получил больше сообщений DHCP, чем разрешено,"
    ]
  },
  {
    "time": [
      971.089,
      972.42
    ],
    "en": [
      "so it was err-disabled."
    ],
    "ru": [
      "поэтому он был отключен из-за ошибки."
    ]
  },
  {
    "time": [
      972.42,
      979.059
    ],
    "en": [
      "So, we could manually re-enable it, but let’s look at errdisable recovery again."
    ],
    "ru": [
      "Итак, мы могли бы снова включить его вручную, но давайте еще раз посмотрим на восстановление после сбоя."
    ]
  },
  {
    "time": [
      979.059,
      985.689
    ],
    "en": [
      "Here’s how to enable errdisable recovery for DHCP rate limiting."
    ],
    "ru": [
      "Вот как включить восстановление с отключением из-за ошибки для ограничения скорости DHCP."
    ]
  },
  {
    "time": [
      985.689,
      990.1
    ],
    "en": [
      "ERRDISABLE RECOVERY CAUSE DHCP-RATE-LIMIT."
    ],
    "ru": [
      "ПРИЧИНА ОШИБКИ ВОССТАНОВЛЕНИЯ DHCP-RATE-LIMIT."
    ]
  },
  {
    "time": [
      990.1,
      999.04
    ],
    "en": [
      "I then checked SHOW ERRDISABLE RECOVERY, and notice that recovery has been enabled for the DHCP-RATE-LIMIT cause."
    ],
    "ru": [
      "Затем я проверил SHOW ERRDISABLE RECOVERY и заметил, что восстановление было включено для причины DHCP-RATE-LIMIT."
    ]
  },
  {
    "time": [
      999.04,
      1004.7090000000001
    ],
    "en": [
      "the DHCP-RATE-LIMIT cause. Also notice at the bottom that G0/1 is waiting for the timer to count down so it can be re-enabled."
    ],
    "ru": [
      "причина DHCP-RATE-LIMIT. Также обратите внимание на то, что G0 / 1 ожидает обратного отсчета таймера, чтобы его можно было повторно включить."
    ]
  },
  {
    "time": [
      1004.7090000000001,
      1009.3
    ],
    "en": [
      "So, what’s the purpose of rate-limiting DHCP messages?"
    ],
    "ru": [
      "Итак, какова цель ограничения скорости сообщений DHCP?"
    ]
  },
  {
    "time": [
      1009.3,
      1014.769
    ],
    "en": [
      "Well, it can be very useful to protect against DHCP exhaustion attacks."
    ],
    "ru": [
      "Что ж, это может быть очень полезно для защиты от атак исчерпания DHCP."
    ]
  },
  {
    "time": [
      1014.769,
      1020.819
    ],
    "en": [
      "Remember, attackers can spoof both the frame’s source MAC address and the DHCP message’s"
    ],
    "ru": [
      "Помните, что злоумышленники могут подделать как исходный MAC-адрес кадра, так и сообщение DHCP."
    ]
  },
  {
    "time": [
      1020.819,
      1027.819
    ],
    "en": [
      "client hardware address field to bypass the DHCP snooping filtering of DISCOVER and REQUEST messages."
    ],
    "ru": [
      "поле аппаратного адреса клиента, чтобы обойти отслеживающую DHCP-фильтрацию сообщений DISCOVER и REQUEST."
    ]
  },
  {
    "time": [
      1027.819,
      1033.12
    ],
    "en": [
      "messages. But, with rate limiting we can prevent them from exhausting the DHCP server with tons"
    ],
    "ru": [
      "Сообщения. Но с ограничением скорости мы можем предотвратить их перегрузку DHCP-сервера тоннами."
    ]
  },
  {
    "time": [
      1033.12,
      1036.799
    ],
    "en": [
      "of illegitimate DHCP DISCOVER messages."
    ],
    "ru": [
      "незаконных сообщений DHCP DISCOVER."
    ]
  },
  {
    "time": [
      1036.799,
      1042.709
    ],
    "en": [
      "If the attacker tries to flood the server with DISCOVER messages, the interface will just be disabled."
    ],
    "ru": [
      "Если злоумышленник попытается залить сервер сообщениями DISCOVER, интерфейс будет просто отключен."
    ]
  },
  {
    "time": [
      1042.709,
      1046.74
    ],
    "en": [
      "just be disabled. So, this is a very useful function of DHCP Snooping."
    ],
    "ru": [
      "просто отключитесь. Итак, это очень полезная функция DHCP Snooping."
    ]
  },
  {
    "time": [
      1046.74,
      1055.36
    ],
    "en": [
      "Okay, let’s go over that command that I said I would explain earlier, NO IP DHCP SNOOPING INFORMATION OPTION."
    ],
    "ru": [
      "Хорошо, давайте перейдем к той команде, которую я сказал, что объясню ранее, NO IP DHCP SNOOPING INFORMATION OPTION."
    ]
  },
  {
    "time": [
      1055.36,
      1059.15
    ],
    "en": [
      "INFORMATION OPTION. First, what is the information option?"
    ],
    "ru": [
      "ИНФОРМАЦИОННЫЙ ВАРИАНТ. Во-первых, какова информационная опция?"
    ]
  },
  {
    "time": [
      1059.15,
      1067.38
    ],
    "en": [
      "Option 82, also known as the DHCP relay agent information option, is one of many DHCP options."
    ],
    "ru": [
      "Параметр 82, также известный как параметр информации агента ретрансляции DHCP, является одним из многих параметров DHCP."
    ]
  },
  {
    "time": [
      1067.38,
      1075.15
    ],
    "en": [
      "In the DHCP video of this course I mentioned that there are various DHCP options that provide different functionalities."
    ],
    "ru": [
      "В видеоролике о DHCP этого курса я упомянул, что существуют различные параметры DHCP, которые предоставляют разные функции."
    ]
  },
  {
    "time": [
      1075.15,
      1077.95
    ],
    "en": [
      "different functionalities. Option 82 is one of them."
    ],
    "ru": [
      "разные функции. Вариант 82 - один из них."
    ]
  },
  {
    "time": [
      1077.95,
      1083.48
    ],
    "en": [
      "Option 82 provides additional information about which DHCP relay agent received the"
    ],
    "ru": [
      "Опция 82 предоставляет дополнительную информацию о том, какой агент DHCP-ретрансляции получил"
    ]
  },
  {
    "time": [
      1083.48,
      1088.08
    ],
    "en": [
      "client’s message, on which interface, in which VLAN, etc."
    ],
    "ru": [
      "сообщение клиента, на каком интерфейсе, в какой VLAN и т. д."
    ]
  },
  {
    "time": [
      1088.08,
      1095.659
    ],
    "en": [
      "DHCP relay agents can add Option 82 to messages they forward to the remote DHCP server."
    ],
    "ru": [
      "Агенты ретрансляции DHCP могут добавлять параметр 82 к сообщениям, которые они пересылают на удаленный сервер DHCP."
    ]
  },
  {
    "time": [
      1095.659,
      1102.57
    ],
    "en": [
      "With DHCP snooping enabled, by default Cisco switches will add Option 82 to DHCP messages"
    ],
    "ru": [
      "При включенном отслеживании DHCP по умолчанию коммутаторы Cisco добавляют параметр 82 в сообщения DHCP."
    ]
  },
  {
    "time": [
      1102.57,
      1108.74
    ],
    "en": [
      "they receive from clients, even if the switch isn’t acting as a DHCP relay agent."
    ],
    "ru": [
      "они получают от клиентов, даже если коммутатор не действует как агент ретрансляции DHCP."
    ]
  },
  {
    "time": [
      1108.74,
      1109.98
    ],
    "en": [
      "This can cause problems."
    ],
    "ru": [
      "Это может вызвать проблемы."
    ]
  },
  {
    "time": [
      1109.98,
      1112.13
    ],
    "en": [
      "Here’s one of them."
    ],
    "ru": [
      "Вот один из них."
    ]
  },
  {
    "time": [
      1112.13,
      1117.909
    ],
    "en": [
      "By default, Cisco switches will drop DHCP messages with Option 82 that are received"
    ],
    "ru": [
      "По умолчанию коммутаторы Cisco отбрасывают сообщения DHCP с полученной опцией 82."
    ]
  },
  {
    "time": [
      1117.909,
      1121.559
    ],
    "en": [
      "on an untrusted port. Let me demonstrate."
    ],
    "ru": [
      "на ненадежном порту. Позвольте мне продемонстрировать."
    ]
  },
  {
    "time": [
      1121.559,
      1128.83
    ],
    "en": [
      "Let me demonstrate. PC1 sends a DISCOVER message, and SW1 forwards it to SW2, adding Option 82."
    ],
    "ru": [
      "Позвольте мне продемонстрировать. ПК1 отправляет сообщение DISCOVER, а SW1 пересылает его SW2, добавляя опцию 82."
    ]
  },
  {
    "time": [
      1128.83,
      1133.32
    ],
    "en": [
      "Because SW2 receives it on an untrusted port, it drops the message."
    ],
    "ru": [
      "Поскольку SW2 получает его через ненадежный порт, он отбрасывает сообщение."
    ]
  },
  {
    "time": [
      1133.32,
      1139.24
    ],
    "en": [
      "You can see the syslog message here, indicating that it dropped the message because it had option 82."
    ],
    "ru": [
      "Здесь вы можете увидеть сообщение системного журнала, указывающее, что сообщение было удалено из-за наличия опции 82."
    ]
  },
  {
    "time": [
      1139.24,
      1145.14
    ],
    "en": [
      "option 82. So, the default settings work well if the switch is a layer 3 switch acting as a DHCP"
    ],
    "ru": [
      "вариант 82. Таким образом, настройки по умолчанию работают хорошо, если коммутатор представляет собой коммутатор уровня 3, действующий как DHCP."
    ]
  },
  {
    "time": [
      1145.14,
      1149.399
    ],
    "en": [
      "relay agent, but in a network like this one it won’t work."
    ],
    "ru": [
      "relay agent, но в такой сети он не работает."
    ]
  },
  {
    "time": [
      1149.399,
      1156.19
    ],
    "en": [
      "So, that’s why I used this command I showed earlier, NO IP DHCP SNOOPING INFORMATION OPTION."
    ],
    "ru": [
      "Вот почему я использовал эту команду, которую я показал ранее, НЕТ ВАРИАНТА ИНФОРМАЦИИ ДЛЯ ОБСЛУЖИВАНИЯ IP DHCP."
    ]
  },
  {
    "time": [
      1156.19,
      1158.539
    ],
    "en": [
      "Let’s see what happens now."
    ],
    "ru": [
      "Посмотрим, что теперь будет."
    ]
  },
  {
    "time": [
      1158.539,
      1163.82
    ],
    "en": [
      "PC1 sends a DISCOVER message, and SW1 forwards it to SW2."
    ],
    "ru": [
      "ПК1 отправляет сообщение DISCOVER, а SW1 пересылает его SW2."
    ]
  },
  {
    "time": [
      1163.82,
      1166.62
    ],
    "en": [
      "This time it doesn’t add Option 82."
    ],
    "ru": [
      "На этот раз вариант 82 не добавлен."
    ]
  },
  {
    "time": [
      1166.62,
      1173.539
    ],
    "en": [
      "But let’s assume that I haven’t used the NO IP DHCP SNOOPING INFORMATION OPTION command on SW2 yet."
    ],
    "ru": [
      "Но давайте предположим, что я еще не использовал команду NO IP DHCP SNOOPING INFORMATION OPTION на SW2."
    ]
  },
  {
    "time": [
      1173.539,
      1178.49
    ],
    "en": [
      "on SW2 yet. So SW2 will add Option 82 and forward it to R1."
    ],
    "ru": [
      "на SW2 пока нет. Таким образом, SW2 добавит вариант 82 и направит его R1."
    ]
  },
  {
    "time": [
      1178.49,
      1180.88
    ],
    "en": [
      "This will cause R1 to drop it."
    ],
    "ru": [
      "Это заставит R1 сбросить его."
    ]
  },
  {
    "time": [
      1180.88,
      1183.64
    ],
    "en": [
      "You can see R1’s log messages below."
    ],
    "ru": [
      "Вы можете увидеть сообщения журнала R1 ниже."
    ]
  },
  {
    "time": [
      1183.64,
      1189.07
    ],
    "en": [
      "Basically, it means that R1 dropped the message because it had option 82, but it wasn’t"
    ],
    "ru": [
      "По сути, это означает, что R1 отбросил сообщение, потому что у него была опция 82, но она не была"
    ]
  },
  {
    "time": [
      1189.07,
      1190.85
    ],
    "en": [
      "sent by a relay agent."
    ],
    "ru": [
      "отправлено агентом ретрансляции."
    ]
  },
  {
    "time": [
      1190.85,
      1195.95
    ],
    "en": [
      "That’s what ‘inconsistent relay information’ in the log message means."
    ],
    "ru": [
      "Вот что означает \"несогласованная информация о реле\" в сообщении журнала."
    ]
  },
  {
    "time": [
      1195.95,
      1201.62
    ],
    "en": [
      "If a DHCP message wasn’t sent by a relay agent, it shouldn’t have option 82."
    ],
    "ru": [
      "Если сообщение DHCP не было отправлено агентом ретрансляции, у него не должно быть опции 82."
    ]
  },
  {
    "time": [
      1201.62,
      1206.139
    ],
    "en": [
      "So, I added the command to SW2 also."
    ],
    "ru": [
      "Итак, я также добавил команду в SW2."
    ]
  },
  {
    "time": [
      1206.139,
      1211.58
    ],
    "en": [
      "This time, neither SW1 or SW2 will add option 82 to the DISCOVER message."
    ],
    "ru": [
      "На этот раз ни SW1, ни SW2 не добавят опцию 82 в сообщение DISCOVER."
    ]
  },
  {
    "time": [
      1211.58,
      1215.59
    ],
    "en": [
      "So, R1 trusts the message and responds as normal."
    ],
    "ru": [
      "Итак, R1 доверяет сообщению и отвечает как обычно."
    ]
  },
  {
    "time": [
      1215.59,
      1221.32
    ],
    "en": [
      "I’m not sure if you’ll get any questions about option 82 on the CCNA exam, but it’s"
    ],
    "ru": [
      "Я не уверен, что у вас возникнут вопросы по варианту 82 на экзамене CCNA, но это"
    ]
  },
  {
    "time": [
      1221.32,
      1226.4
    ],
    "en": [
      "good to know about because it can cause problems for you in your DHCP snooping labs if you"
    ],
    "ru": [
      "полезно знать, потому что это может вызвать проблемы в ваших лабораториях отслеживания DHCP, если вы"
    ]
  },
  {
    "time": [
      1226.4,
      1227.899
    ],
    "en": [
      "don’t know about it."
    ],
    "ru": [
      "не знаю об этом."
    ]
  },
  {
    "time": [
      1227.899,
      1233.049
    ],
    "en": [
      "Okay, here’s a review of the new commands we covered in this video."
    ],
    "ru": [
      "Хорошо, вот обзор новых команд, которые мы рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      1233.049,
      1239.51
    ],
    "en": [
      "If you don’t remember any of these commands, go back in the video to review them."
    ],
    "ru": [
      "Если вы не помните ни одну из этих команд, вернитесь к видео, чтобы просмотреть их."
    ]
  },
  {
    "time": [
      1239.51,
      1243.22
    ],
    "en": [
      "Before moving on to the quiz, let’s review what we covered in this video."
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте рассмотрим то, что мы рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      1243.22,
      1246.649
    ],
    "en": [
      "I first introduced what DHCP snooping is."
    ],
    "ru": [
      "Я впервые представил, что такое отслеживание DHCP."
    ]
  },
  {
    "time": [
      1246.649,
      1252.73
    ],
    "en": [
      "It’s a security feature of switches that allows them to filter DHCP messages."
    ],
    "ru": [
      "Это функция безопасности коммутаторов, которая позволяет им фильтровать сообщения DHCP."
    ]
  },
  {
    "time": [
      1252.73,
      1257.649
    ],
    "en": [
      "It works by inspecting DHCP messages that arrive on untrusted ports and then deciding"
    ],
    "ru": [
      "Он работает, проверяя сообщения DHCP, которые поступают на ненадежные порты, а затем решает"
    ]
  },
  {
    "time": [
      1257.649,
      1260.289
    ],
    "en": [
      "to discard or forward them."
    ],
    "ru": [
      "отбросить или переслать их."
    ]
  },
  {
    "time": [
      1260.289,
      1265.94
    ],
    "en": [
      "It can also control the rate at which DHCP messages are allowed to enter an interface."
    ],
    "ru": [
      "Он также может контролировать скорость, с которой сообщениям DHCP разрешено вводить интерфейс."
    ]
  },
  {
    "time": [
      1265.94,
      1271.269
    ],
    "en": [
      "It can prevent attacks like DHCP exhaustion and DHCP poisoning."
    ],
    "ru": [
      "Он может предотвратить такие атаки, как исчерпание DHCP и отравление DHCP."
    ]
  },
  {
    "time": [
      1271.269,
      1276.04
    ],
    "en": [
      "We also looked at how to configure DHCP snooping on Cisco switches."
    ],
    "ru": [
      "Мы также рассмотрели, как настроить отслеживание DHCP на коммутаторах Cisco."
    ]
  },
  {
    "time": [
      1276.04,
      1283.84
    ],
    "en": [
      "Remember to enable it globally, enable it per VLAN, and then configure the appropriate interfaces as trusted."
    ],
    "ru": [
      "Не забудьте включить его глобально, включить для каждой VLAN, а затем настроить соответствующие интерфейсы как доверенные."
    ]
  },
  {
    "time": [
      1283.84,
      1292.72
    ],
    "en": [
      "interfaces as trusted. Also keep option 82 in mind, you may need to use NO IP DHCP SNOOPING INFORMATION OPTION to disable it."
    ],
    "ru": [
      "интерфейсы как доверенные. Также имейте в виду опцию 82, вам может потребоваться использовать ОПЦИЮ ОТСУТСТВИЯ ИНФОРМАЦИИ ОБ IP DHCP, чтобы отключить ее."
    ]
  },
  {
    "time": [
      1292.72,
      1297.89
    ],
    "en": [
      "to disable it. As always, watch until the end of the quiz for a bonus practice question from Boson Software’s"
    ],
    "ru": [
      "чтобы отключить его. Как всегда, просмотрите до конца викторины вопрос о бонусной практике от Boson Software"
    ]
  },
  {
    "time": [
      1297.89,
      1301.57
    ],
    "en": [
      "ExSim, my recommended practice exams for the CCNA."
    ],
    "ru": [
      "ExSim, я рекомендую практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      1301.57,
      1306.96
    ],
    "en": [
      "Okay, let’s go to question 1 of the quiz."
    ],
    "ru": [
      "Хорошо, перейдем к первому вопросу викторины."
    ]
  },
  {
    "time": [
      1306.96,
      1312.11
    ],
    "en": [
      "Which of the following DHCP message types will always be discarded if received on a"
    ],
    "ru": [
      "Какие из следующих типов сообщений DHCP всегда будут отбрасываться при получении"
    ]
  },
  {
    "time": [
      1312.11,
      1314.13
    ],
    "en": [
      "DHCP snooping untrusted interface?"
    ],
    "ru": [
      "Ненадежный интерфейс DHCP snooping?"
    ]
  },
  {
    "time": [
      1314.13,
      1323.47
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
      1314.13,
      1323.47
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
      1323.47,
      1327.32
    ],
    "en": [
      "The answers are C, NAK. D, OFFER."
    ],
    "ru": [
      "Ответы: C, NAK. D, ПРЕДЛОЖЕНИЕ."
    ]
  },
  {
    "time": [
      1327.32,
      1329.429
    ],
    "en": [
      "D, OFFER. And G, ACK."
    ],
    "ru": [
      "D, ПРЕДЛОЖЕНИЕ. И G, ACK."
    ]
  },
  {
    "time": [
      1329.429,
      1335.659
    ],
    "en": [
      "These DHCP message types will always be discarded if received on a DHCP snooping untrusted interface"
    ],
    "ru": [
      "Эти типы сообщений DHCP всегда будут отбрасываться, если они получены через ненадежный интерфейс отслеживания DHCP."
    ]
  },
  {
    "time": [
      1335.659,
      1337.429
    ],
    "en": [
      "because they are sent from DHCP servers."
    ],
    "ru": [
      "потому что они отправляются с DHCP-серверов."
    ]
  },
  {
    "time": [
      1337.429,
      1342.9
    ],
    "en": [
      "DHCP servers should not be connected to untrusted interfaces."
    ],
    "ru": [
      "DHCP-серверы не должны подключаться к ненадежным интерфейсам."
    ]
  },
  {
    "time": [
      1342.9,
      1347.09
    ],
    "en": [
      "Okay, let’s go to question 2."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1347.09,
      1352.08
    ],
    "en": [
      "Which of the following is NOT stored in the DHCP snooping binding database?"
    ],
    "ru": [
      "Что из перечисленного НЕ хранится в базе данных привязки отслеживания DHCP?"
    ]
  },
  {
    "time": [
      1352.08,
      1356.059
    ],
    "en": [
      "Pause the video now to select the correct answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы выбрать правильный ответ."
    ]
  },
  {
    "time": [
      1356.059,
      1361.34
    ],
    "en": [
      "Okay, the answer is D, default gateway."
    ],
    "ru": [
      "Хорошо, ответ - D, шлюз по умолчанию."
    ]
  },
  {
    "time": [
      1361.34,
      1365.69
    ],
    "en": [
      "Here you can see what the DHCP snooping binding database looks like on a switch."
    ],
    "ru": [
      "Здесь вы можете увидеть, как выглядит база данных привязки DHCP-отслеживания на коммутаторе."
    ]
  },
  {
    "time": [
      1365.69,
      1368.11
    ],
    "en": [
      "The default gateway is not displayed."
    ],
    "ru": [
      "Шлюз по умолчанию не отображается."
    ]
  },
  {
    "time": [
      1368.11,
      1372.929
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
      1372.929,
      1376.12
    ],
    "en": [
      "Which of the following are functions of DHCP snooping?"
    ],
    "ru": [
      "Какие из перечисленных функций являются функциями отслеживания DHCP?"
    ]
  },
  {
    "time": [
      1376.12,
      1382.269
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
      1376.12,
      1382.269
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
      1382.269,
      1393.07
    ],
    "en": [
      "Okay, the answers are A, limiting the rate of DHCP messages, and C, filtering messages on untrusted ports."
    ],
    "ru": [
      "Хорошо, ответы: A, ограничение скорости сообщений DHCP и C, фильтрация сообщений на ненадежных портах."
    ]
  },
  {
    "time": [
      1393.07,
      1400.09
    ],
    "en": [
      "on untrusted ports. DHCP snooping won’t filter messages on trusted ports, and it also won’t filter ALL DHCP messages."
    ],
    "ru": [
      "на ненадежных портах. Отслеживание DHCP не фильтрует сообщения на доверенных портах, а также не фильтрует ВСЕ сообщения DHCP."
    ]
  },
  {
    "time": [
      1400.09,
      1403.269
    ],
    "en": [
      "messages. It will only filter those that are received on untrusted ports."
    ],
    "ru": [
      "Сообщения. Он будет фильтровать только те, которые получены на ненадежных портах."
    ]
  },
  {
    "time": [
      1403.269,
      1407.57
    ],
    "en": [
      "Okay, let’s go to question 4."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1407.57,
      1413.79
    ],
    "en": [
      "When DHCP snooping inspects a DHCP DISCOVER message that arrives on an untrusted interface,"
    ],
    "ru": [
      "Когда отслеживание DHCP проверяет сообщение DHCP DISCOVER, которое поступает на ненадежный интерфейс,"
    ]
  },
  {
    "time": [
      1413.79,
      1414.809
    ],
    "en": [
      "what does it check?"
    ],
    "ru": [
      "что это проверяет?"
    ]
  },
  {
    "time": [
      1414.809,
      1421.98
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
      1414.809,
      1421.98
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
      1421.98,
      1430.65
    ],
    "en": [
      "Okay, the answers are A, source MAC address, and B, client hardware address."
    ],
    "ru": [
      "Хорошо, ответы: A, исходный MAC-адрес, и B, аппаратный адрес клиента."
    ]
  },
  {
    "time": [
      1430.65,
      1436.0
    ],
    "en": [
      "Source MAC address refers to the source MAC field of the Ethernet frame, and client hardware"
    ],
    "ru": [
      "MAC-адрес источника относится к полю MAC-адреса источника кадра Ethernet и клиентскому оборудованию."
    ]
  },
  {
    "time": [
      1436.0,
      1439.919
    ],
    "en": [
      "address is a field in the DHCP message itself."
    ],
    "ru": [
      "адрес - это поле в самом сообщении DHCP."
    ]
  },
  {
    "time": [
      1439.919,
      1443.85
    ],
    "en": [
      "If the two match, DHCP snooping permits the message."
    ],
    "ru": [
      "Если они совпадают, отслеживание DHCP разрешает сообщение."
    ]
  },
  {
    "time": [
      1443.85,
      1446.0
    ],
    "en": [
      "If they don’t match, the message will be discarded."
    ],
    "ru": [
      "Если они не совпадают, сообщение будет удалено."
    ]
  },
  {
    "time": [
      1446.0,
      1449.919
    ],
    "en": [
      "Okay, let’s go to question 5."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1449.919,
      1456.509
    ],
    "en": [
      "DHCP snooping rate-limiting is configured on SW1’s G0/1 interface."
    ],
    "ru": [
      "Ограничение скорости отслеживания DHCP настраивается на интерфейсе G0 / 1 SW1."
    ]
  },
  {
    "time": [
      1456.509,
      1463.08
    ],
    "en": [
      "What happens if DHCP messages are received on G0/1 at a rate faster than the configured limit?"
    ],
    "ru": [
      "Что произойдет, если DHCP-сообщения будут получены на G0 / 1 со скоростью, превышающей установленный предел?"
    ]
  },
  {
    "time": [
      1463.08,
      1469.72
    ],
    "en": [
      "limit? Pause the video now to select the best answer."
    ],
    "ru": [
      "предел? Поставьте видео на паузу, чтобы выбрать лучший ответ."
    ]
  },
  {
    "time": [
      1469.72,
      1473.12
    ],
    "en": [
      "The answer is B, the interface will be disabled."
    ],
    "ru": [
      "Ответ B, интерфейс будет отключен."
    ]
  },
  {
    "time": [
      1473.12,
      1477.87
    ],
    "en": [
      "To re-enable it, you can either SHUTDOWN and then NO SHUTDOWN the interface, or you can"
    ],
    "ru": [
      "Чтобы снова включить его, вы можете либо ВЫКЛЮЧИТЬ, а затем НЕ ВЫКЛЮЧИТЬ интерфейс, либо вы можете"
    ]
  },
  {
    "time": [
      1477.87,
      1481.899
    ],
    "en": [
      "configure errdisable recovery for the dhcp-rate-limit cause."
    ],
    "ru": [
      "настройте восстановление после отключения из-за ошибки dhcp-rate-limit."
    ]
  },
  {
    "time": [
      1481.899,
      1485.169
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
      1485.169,
      1485.169
    ],
    "en": [
      "Now let’s take a look at a bonus question from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на дополнительный вопрос от ExSim компании Boson Software для CCNA."
    ]
  }
]