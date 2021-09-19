var objs = [
  {
    "time": [
      1.24,
      7.52
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
      7.52,
      12.379
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
      12.379,
      17.11
    ],
    "en": [
      "a comment, and share the video to help spread this free series of videos. Thanks for your"
    ],
    "ru": [
      "комментарий и поделитесь видео, чтобы помочь распространить эту бесплатную серию видео. Спасибо за ваш"
    ]
  },
  {
    "time": [
      17.11,
      23.49
    ],
    "en": [
      "help. Also, remember to download and use the Anki flashcards with the link in the description,"
    ],
    "ru": [
      "помощь. Также не забудьте загрузить и использовать карточки Anki со ссылкой в ​​описании,"
    ]
  },
  {
    "time": [
      23.49,
      29.119
    ],
    "en": [
      "which will help you very much in remembering what you have learned. Let’s get started."
    ],
    "ru": [
      "что очень поможет вам запомнить то, что вы узнали. Давайте начнем."
    ]
  },
  {
    "time": [
      29.119,
      35.55
    ],
    "en": [
      "This is the 8th lecture in the series, and part 2 on IPv4 addresses. This should be a"
    ],
    "ru": [
      "Это восьмая лекция в серии и вторая часть об адресах IPv4. Это должно быть"
    ]
  },
  {
    "time": [
      35.55,
      39.83
    ],
    "en": [
      "shorter video than the last one, just covering a few things we missed."
    ],
    "ru": [
      "Более короткое видео, чем предыдущее, просто охватывает несколько вещей, которые мы пропустили."
    ]
  },
  {
    "time": [
      39.83,
      46.75
    ],
    "en": [
      "Let’s go over what we’ll cover in this video. I’ll do a quick review of IPv4 classes,"
    ],
    "ru": [
      "Давайте рассмотрим, что мы расскажем в этом видео. Я сделаю быстрый обзор классов IPv4,"
    ]
  },
  {
    "time": [
      46.75,
      51.431
    ],
    "en": [
      "and clarify some things I didn’t explain well in the previous video. I’ll explain"
    ],
    "ru": [
      "и прояснить некоторые вещи, которые я не очень хорошо объяснил в предыдущем видео. Я объясню"
    ]
  },
  {
    "time": [
      51.431,
      58.71
    ],
    "en": [
      "how to find... the maximum number of hosts, the network address, the broadcast address,"
    ],
    "ru": [
      "как найти ... максимальное количество хостов, сетевой адрес, широковещательный адрес,"
    ]
  },
  {
    "time": [
      58.71,
      65.18
    ],
    "en": [
      "the first usable address, and the last usable address of a particular network. I introduced"
    ],
    "ru": [
      "первый пригодный для использования адрес и последний пригодный для использования адрес конкретной сети. Я представил"
    ]
  },
  {
    "time": [
      65.18,
      70.399
    ],
    "en": [
      "some of these in the previous video, but its worth explaining in more detail. Finally,"
    ],
    "ru": [
      "некоторые из них показаны в предыдущем видео, но их стоит объяснить более подробно. Наконец-то,"
    ]
  },
  {
    "time": [
      70.399,
      76.259
    ],
    "en": [
      "I will outline how to configure IP addresses on Cisco devices, which we’ll then practice"
    ],
    "ru": [
      "Я расскажу, как настраивать IP-адреса на устройствах Cisco, что мы потом будем практиковать."
    ]
  },
  {
    "time": [
      76.259,
      80.579
    ],
    "en": [
      "in packet tracer, in the next video."
    ],
    "ru": [
      "в трассировщике пакетов, в следующем видео."
    ]
  },
  {
    "time": [
      80.579,
      87.14
    ],
    "en": [
      "So this is the chart of the IPv4 address classes I showed you in the last video. I taught you"
    ],
    "ru": [
      "Это таблица классов адресов IPv4, которую я показал вам в прошлом видео. Я научил тебя"
    ]
  },
  {
    "time": [
      87.14,
      92.59
    ],
    "en": [
      "that the 127 range is reserved for loopback addresses, so its generally not considered"
    ],
    "ru": [
      "что диапазон 127 зарезервирован для адресов обратной связи, поэтому обычно не рассматривается"
    ]
  },
  {
    "time": [
      92.59,
      99.38
    ],
    "en": [
      "part of the Class A range. However, the 0 range is also reserved in class A, so some"
    ],
    "ru": [
      "часть диапазона класса А. Однако диапазон 0 также зарезервирован в классе A, поэтому некоторые"
    ]
  },
  {
    "time": [
      99.38,
      107.609
    ],
    "en": [
      "might say class A really begins at 1, making the range 1-126. Different sources say different"
    ],
    "ru": [
      "можно сказать, что класс A действительно начинается с 1, что составляет диапазон от 1 до 126. В разных источниках говорится о разном"
    ]
  },
  {
    "time": [
      107.609,
      115.13
    ],
    "en": [
      "things, so I recommend that you remember class A as 0-127, but also keep in mind that 0 and"
    ],
    "ru": [
      "вещи, поэтому я рекомендую вам запомнить класс A как 0–127, но также имейте в виду, что 0 и"
    ]
  },
  {
    "time": [
      115.13,
      121.929
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
      115.13,
      121.929
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
      121.929,
      127.729
    ],
    "en": [
      "We also saw this chart from wikipedia in the last video. Leading bits of 0 for Class A,"
    ],
    "ru": [
      "Мы также видели эту диаграмму из Википедии в последнем видео. Начальные биты 0 для класса A,"
    ]
  },
  {
    "time": [
      127.729,
      136.16
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
      127.729,
      136.16
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
      136.16,
      145.05
    ],
    "en": [
      "as prefix length, of 8 for class A, 16 for class B, and 24 for class C. a size of ‘rest"
    ],
    "ru": [
      "в качестве длины префикса 8 для класса A, 16 для класса B и 24 для класса C."
    ]
  },
  {
    "time": [
      145.05,
      151.91
    ],
    "en": [
      "bit field’ also known as the host portion of the address, of 24 bits for class A, 16"
    ],
    "ru": [
      "битовое поле ', также известное как хост-часть адреса, 24 бита для класса A, 16"
    ]
  },
  {
    "time": [
      151.91,
      159.47
    ],
    "en": [
      "for class B, and 8 for class C. The number of networks available in each class. and finally,"
    ],
    "ru": [
      "для класса B и 8 для класса C. Количество сетей, доступных в каждом классе. и наконец,"
    ]
  },
  {
    "time": [
      159.47,
      164.87
    ],
    "en": [
      "the number of addresses per network. This is the maximum number of addresses, including"
    ],
    "ru": [
      "количество адресов в сети. Это максимальное количество адресов, включая"
    ]
  },
  {
    "time": [
      164.87,
      170.64
    ],
    "en": [
      "the network address and broadcast address. Notice how it’s calculated. 2, to the power"
    ],
    "ru": [
      "сетевой адрес и широковещательный адрес. Обратите внимание на то, как он рассчитывается. 2, в степень"
    ]
  },
  {
    "time": [
      170.64,
      177.4
    ],
    "en": [
      "of 8, 16, or 24, that being the length of the host portion. But let’s look at how"
    ],
    "ru": [
      "из 8, 16 или 24, что является длиной основной части. Но давайте посмотрим, как"
    ]
  },
  {
    "time": [
      177.4,
      181.95
    ],
    "en": [
      "to calculate the maximum number of USABLE addresses, the number of addresses that can"
    ],
    "ru": [
      "для расчета максимального количества USBLE адресов, количества адресов, которые могут"
    ]
  },
  {
    "time": [
      181.95,
      183.81
    ],
    "en": [
      "be assigned to hosts."
    ],
    "ru": [
      "быть назначенным хостам."
    ]
  },
  {
    "time": [
      183.81,
      194.71
    ],
    "en": [
      "So, let’s take this Class C network 192.168.1.0/24. Because it’s class C, it uses a /24 prefix"
    ],
    "ru": [
      "Итак, возьмем сеть класса C 192.168.1.0/24. Поскольку это класс C, он использует префикс / 24"
    ]
  },
  {
    "time": [
      194.71,
      201.68
    ],
    "en": [
      "length, and therefore the last octet, the last 8 bits, are the host portion. That means"
    ],
    "ru": [
      "длина, и, следовательно, последний октет, последние 8 бит, являются частью хоста. Это означает"
    ]
  },
  {
    "time": [
      201.68,
      212.18
    ],
    "en": [
      "that the host portion can be 0 to 255. So, 0 to 255 gives us a total of 256 addresses, which"
    ],
    "ru": [
      "что часть хоста может быть от 0 до 255. Итак, от 0 до 255 дает нам 256 адресов, которые"
    ]
  },
  {
    "time": [
      212.18,
      218.36
    ],
    "en": [
      "is 2 to the power of 8, because there are 8 bits. But, remember those two special address"
    ],
    "ru": [
      "равно 2 в степени 8, потому что здесь 8 бит. Но помните эти два специальных адреса"
    ]
  },
  {
    "time": [
      218.36,
      223.77
    ],
    "en": [
      "types I mentioned in the last video? If the host portion is all 0s, it represents the"
    ],
    "ru": [
      "типы, которые я упомянул в прошлом видео? Если часть хоста - все нули, она представляет"
    ]
  },
  {
    "time": [
      223.77,
      231.141
    ],
    "en": [
      "network address, sometimes called the network ID. It can't be assigned to a host. Also, if"
    ],
    "ru": [
      "сетевой адрес, иногда называемый идентификатором сети. Его нельзя назначить хосту. Кроме того, если"
    ]
  },
  {
    "time": [
      231.141,
      237.26
    ],
    "en": [
      "the host portion is all 1s, it is the network broadcast address, the address used to send a message"
    ],
    "ru": [
      "часть хоста - это все единицы, это широковещательный адрес сети, адрес, используемый для отправки сообщения"
    ]
  },
  {
    "time": [
      237.26,
      243.87
    ],
    "en": [
      "to all hosts on the network. It also can’t be assigned to a host. So, actually the maximum"
    ],
    "ru": [
      "ко всем хостам в сети. Его также нельзя назначить хосту. Итак, собственно максимум"
    ]
  },
  {
    "time": [
      243.87,
      252.25
    ],
    "en": [
      "hosts per network is 2 to the power of 8, minus 2, which is 254 for a class C network like this."
    ],
    "ru": [
      "количество хостов на сеть равно 2 в степени 8, минус 2, что составляет 254 для такой сети класса C."
    ]
  },
  {
    "time": [
      252.25,
      263.99
    ],
    "en": [
      "Now let’s take a look at this class B network, 172.16.0.0/16, through 172.16.255.255. The"
    ],
    "ru": [
      "Теперь давайте посмотрим на сеть класса B с 172.16.0.0/16 по 172.16.255.255. В"
    ]
  },
  {
    "time": [
      263.99,
      272.449
    ],
    "en": [
      "host portion is 16 bits, giving 65,536 possible addresses. However, this address with a host"
    ],
    "ru": [
      "часть хоста составляет 16 бит, что дает 65 536 возможных адресов. Однако этот адрес с хостом"
    ]
  },
  {
    "time": [
      272.449,
      277.93
    ],
    "en": [
      "portion of all 0s is the network address, and this address with a host portion of all"
    ],
    "ru": [
      "часть всех нулей является сетевым адресом, и этот адрес с частью хоста всех"
    ]
  },
  {
    "time": [
      277.93,
      283.27
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
      277.93,
      283.27
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
      283.27,
      289.96
    ],
    "en": [
      "any class B network, is 65,534."
    ],
    "ru": [
      "любой сети класса B - 65 534."
    ]
  },
  {
    "time": [
      289.96,
      300.629
    ],
    "en": [
      "Now let’s do one more example, with a class A address. 10.0.0.0/8, through 10.255.255.255."
    ],
    "ru": [
      "А теперь давайте рассмотрим еще один пример с адресом класса А. 10.0.0.0/8, через 10.255.255.255."
    ]
  },
  {
    "time": [
      300.629,
      311.88
    ],
    "en": [
      "The host portion is 24 bits, so that gives 16,777,216 possible addresses. This network"
    ],
    "ru": [
      "Часть хоста составляет 24 бита, что дает 16 777 216 возможных адресов. Эта сеть"
    ]
  },
  {
    "time": [
      311.88,
      318.34
    ],
    "en": [
      "address and this broadcast address can’t be assigned to hosts, however, so the maximum"
    ],
    "ru": [
      "адрес и этот широковещательный адрес не могут быть назначены хостам, поэтому максимальное"
    ]
  },
  {
    "time": [
      318.34,
      329.729
    ],
    "en": [
      "number of hosts in this network, or any class A network is really 16,777,214. So, the formula"
    ],
    "ru": [
      "количество хостов в этой сети или любой сети класса A действительно составляет 16 777 214. Итак, формула"
    ]
  },
  {
    "time": [
      329.729,
      337.749
    ],
    "en": [
      "for determing the number of hosts on a network is 2 to the power of N, minus 2. N is equal"
    ],
    "ru": [
      "для определения количества хостов в сети 2 в степени N минус 2. N равно"
    ]
  },
  {
    "time": [
      337.749,
      341.199
    ],
    "en": [
      "to the number of host bits."
    ],
    "ru": [
      "к количеству бит хоста."
    ]
  },
  {
    "time": [
      341.199,
      349.169
    ],
    "en": [
      "Now let’s calculate the first and last usable addresses for this class C network, 192.168.1.0/24."
    ],
    "ru": [
      "Теперь давайте вычислим первый и последний используемые адреса для этой сети класса C, 192.168.1.0/24."
    ]
  },
  {
    "time": [
      349.169,
      356.949
    ],
    "en": [
      "So, this address with a host portion of all 0s is the network address, or network ID."
    ],
    "ru": [
      "Итак, этот адрес с частью хоста, состоящей из всех нулей, является сетевым адресом или идентификатором сети."
    ]
  },
  {
    "time": [
      356.949,
      364.379
    ],
    "en": [
      "Add 1 by changing the last bit of the host portion to 1 and, you get 192.168.1.1, and"
    ],
    "ru": [
      "Добавьте 1, изменив последний бит части хоста на 1, и вы получите 192.168.1.1, и"
    ]
  },
  {
    "time": [
      364.379,
      370.229
    ],
    "en": [
      "that is the first usable address on the network. So, that’s how you do it. Add one to the"
    ],
    "ru": [
      "это первый используемый адрес в сети. Итак, вот как вы это делаете. Добавьте один в"
    ]
  },
  {
    "time": [
      370.229,
      377.691
    ],
    "en": [
      "network address to get the first usable address. How about the last usable address? Well, this"
    ],
    "ru": [
      "сетевой адрес, чтобы получить первый пригодный для использования адрес. Как насчет последнего используемого адреса? Ну это"
    ]
  },
  {
    "time": [
      377.691,
      383.849
    ],
    "en": [
      "address with a host portion of all 1s is the broadcast address. Subtract 1 from this address"
    ],
    "ru": [
      "адрес с частью узла всех единиц является широковещательным адресом. Вычтите 1 из этого адреса"
    ]
  },
  {
    "time": [
      383.849,
      394.22
    ],
    "en": [
      "by switching the last bit to 0, and you get 192.168.1.254, which is the last usable address."
    ],
    "ru": [
      "переключив последний бит на 0, вы получите 192.168.1.254, который является последним используемым адресом."
    ]
  },
  {
    "time": [
      394.22,
      402.18
    ],
    "en": [
      "Next let’s do the same for this class B network, 172.16.0.0/16. This address with"
    ],
    "ru": [
      "Теперь сделаем то же самое для сети класса B, 172.16.0.0/16. Этот адрес с"
    ]
  },
  {
    "time": [
      402.18,
      411.589
    ],
    "en": [
      "a host portion of all 0s is the network address. Add 1 and, you get 172.16.0.1, and that is"
    ],
    "ru": [
      "часть хоста из всех нулей является сетевым адресом. Добавьте 1, и вы получите 172.16.0.1, и это будет"
    ]
  },
  {
    "time": [
      411.589,
      417.861
    ],
    "en": [
      "the first usable address on the network. How about the last usable address? This address"
    ],
    "ru": [
      "первый используемый адрес в сети. Как насчет последнего используемого адреса? Этот адрес"
    ]
  },
  {
    "time": [
      417.861,
      423.18
    ],
    "en": [
      "with a host portion of all 1s is the broadcast address. Subtract 1 from this address, and"
    ],
    "ru": [
      "с частью узла, состоящей из всех единиц, является широковещательным адресом. Вычтите 1 из этого адреса и"
    ]
  },
  {
    "time": [
      423.18,
      431.58
    ],
    "en": [
      "you get 172.16.255.254, and that is the last usable address."
    ],
    "ru": [
      "вы получите 172.16.255.254, и это последний используемый адрес."
    ]
  },
  {
    "time": [
      431.58,
      438.999
    ],
    "en": [
      "Finally let’s do the same for this class A network, 10.0.0.0/8. This address is the"
    ],
    "ru": [
      "Наконец, давайте сделаем то же самое для этой сети класса A, 10.0.0.0/8. Этот адрес"
    ]
  },
  {
    "time": [
      438.999,
      446.83
    ],
    "en": [
      "network address. Add 1 and, you get 10.0.0.1, and that is the first usable address on the"
    ],
    "ru": [
      "сетевой адрес. Добавьте 1, и вы получите 10.0.0.1, и это будет первый используемый адрес на"
    ]
  },
  {
    "time": [
      446.83,
      453.15
    ],
    "en": [
      "network. Next let’s find the last usable address. This address with a host portion"
    ],
    "ru": [
      "сеть. Теперь давайте найдем последний используемый адрес. Этот адрес с частью хоста"
    ]
  },
  {
    "time": [
      453.15,
      461.349
    ],
    "en": [
      "of all 1s is the broadcast address. Subtract 1, and you get 10.255.255.254,"
    ],
    "ru": [
      "из всех единиц - это широковещательный адрес. Вычтите 1, и вы получите 10.255.255.254,"
    ]
  },
  {
    "time": [
      461.349,
      466.689
    ],
    "en": [
      "which is the last usable address. Okay, so hopefully you understand both how to calculate"
    ],
    "ru": [
      "который является последним используемым адресом. Хорошо, надеюсь, вы понимаете, как рассчитать"
    ]
  },
  {
    "time": [
      466.689,
      472.259
    ],
    "en": [
      "the number of usable addresses in a network, and the first and last usable address in a"
    ],
    "ru": [
      "количество используемых адресов в сети, а также первый и последний используемый адрес в"
    ]
  },
  {
    "time": [
      472.259,
      478.08
    ],
    "en": [
      "network. Really, we covered this material in the last video, but I wanted to make it"
    ],
    "ru": [
      "сеть. Действительно, мы освещали этот материал в прошлом видео, но я хотел, чтобы он"
    ]
  },
  {
    "time": [
      478.08,
      484.36
    ],
    "en": [
      "clear. Now let’s move on to actually configuring a Cisco router with IP addresses!"
    ],
    "ru": [
      "Чисто. Теперь перейдем к настройке маршрутизатора Cisco с IP-адресами!"
    ]
  },
  {
    "time": [
      484.36,
      489.669
    ],
    "en": [
      "So here’s a small network I put together in GNS3, with three small networks connected"
    ],
    "ru": [
      "Итак, вот небольшая сеть, которую я собрал в GNS3, с тремя подключенными небольшими сетями."
    ]
  },
  {
    "time": [
      489.669,
      495.86
    ],
    "en": [
      "to a single router, R1. Keep in mind that it’s not really realistic to have only a"
    ],
    "ru": [
      "к одному маршрутизатору R1. Имейте в виду, что иметь только"
    ]
  },
  {
    "time": [
      495.86,
      501.36
    ],
    "en": [
      "single PC connected to each switch, in a real network there would many more hosts and"
    ],
    "ru": [
      "один ПК, подключенный к каждому коммутатору, в реальной сети было бы намного больше хостов и"
    ]
  },
  {
    "time": [
      501.36,
      509.069
    ],
    "en": [
      "possibly more switches in each local area network. So, we have one class A network here,"
    ],
    "ru": [
      "возможно больше коммутаторов в каждой локальной сети. Итак, у нас есть одна сеть класса A,"
    ]
  },
  {
    "time": [
      509.069,
      517.88
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
      509.069,
      517.88
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
      517.88,
      527.63
    ],
    "en": [
      "the last usable address, 10.255.255.254, to R1’s gigabit0/0 interface. We have this"
    ],
    "ru": [
      "последний используемый адрес, 10.255.255.254, для интерфейса Gigabit0 / 0 маршрутизатора R1. У нас есть это"
    ]
  },
  {
    "time": [
      527.63,
      538.91
    ],
    "en": [
      "class B network, 172.16.0.0/16. PC2 has the first usable IP address, 172.16.0.1, and we"
    ],
    "ru": [
      "сеть класса B, 172.16.0.0/16. ПК2 имеет первый доступный IP-адрес 172.16.0.1, и мы"
    ]
  },
  {
    "time": [
      538.91,
      549.37
    ],
    "en": [
      "will assign the last usable address, 172.16.255.254, to R1’s Gigabit0/1 interface. We also have"
    ],
    "ru": [
      "назначит последний используемый адрес 172.16.255.254 интерфейсу Gigabit0 / 1 маршрутизатора R1. У нас также есть"
    ]
  },
  {
    "time": [
      549.37,
      561.07
    ],
    "en": [
      "a class C network, 192.168.0.0/24. PC3 has the first usable address, 192.168.0.1, and"
    ],
    "ru": [
      "сеть класса C, 192.168.0.0/24. PC3 имеет первый доступный адрес 192.168.0.1 и"
    ]
  },
  {
    "time": [
      561.07,
      571.149
    ],
    "en": [
      "we will assign the last usable address, 192.168.0.254, to R1’s Gigabit0/2 interface. Let’s go"
    ],
    "ru": [
      "мы назначим последний используемый адрес 192.168.0.254 для интерфейса Gigabit0 / 2 маршрутизатора R1. Пойдем"
    ]
  },
  {
    "time": [
      571.149,
      574.82
    ],
    "en": [
      "into the CLI of R1 and make the configurations."
    ],
    "ru": [
      "в интерфейс командной строки R1 и выполните настройки."
    ]
  },
  {
    "time": [
      574.82,
      582.62
    ],
    "en": [
      "So, I logged on to the CLI of R1, and as you can see I used ‘EN’, the shortcut of the"
    ],
    "ru": [
      "Итак, я вошел в интерфейс командной строки R1 и, как вы можете видеть, использовал «EN», ярлык для"
    ]
  },
  {
    "time": [
      582.62,
      588.36
    ],
    "en": [
      "enable command, to enter privileged exec mode. Now, let me show you a great command you can"
    ],
    "ru": [
      "enable, чтобы войти в привилегированный режим exec. А теперь позвольте мне показать вам отличную команду, которую вы можете"
    ]
  },
  {
    "time": [
      588.36,
      594.72
    ],
    "en": [
      "use to confirm the status of each interface on the device, as well as their IP addresses."
    ],
    "ru": [
      "используйте для подтверждения статуса каждого интерфейса на устройстве, а также их IP-адресов."
    ]
  },
  {
    "time": [
      594.72,
      600.36
    ],
    "en": [
      "That is the ‘show ip interface brief’ command. Let’s check out the info this command"
    ],
    "ru": [
      "Это команда «show ip interfacerief». Давайте проверим информацию об этой команде"
    ]
  },
  {
    "time": [
      600.36,
      607.62
    ],
    "en": [
      "gives us. First off, the interface column lists the network interfaces on the device."
    ],
    "ru": [
      "дает нам. Во-первых, в столбце интерфейса перечислены сетевые интерфейсы на устройстве."
    ]
  },
  {
    "time": [
      607.62,
      617.13
    ],
    "en": [
      "As you can see, this router has four interfaces, gigabiterthernet 0/0, 0/1, 0/2, and 0/3. The"
    ],
    "ru": [
      "Как видите, этот маршрутизатор имеет четыре интерфейса: gigabiterthernet 0/0, 0/1, 0/2 и 0/3. В"
    ]
  },
  {
    "time": [
      617.13,
      622.75
    ],
    "en": [
      "next column lists the IP address of each interface. As you can see, they are all unassigned at"
    ],
    "ru": [
      "в следующем столбце перечислены IP-адреса каждого интерфейса. Как видите, все они не назначены на"
    ]
  },
  {
    "time": [
      622.75,
      628.45
    ],
    "en": [
      "the moment, but we will soon assign IP addresses to the top three interfaces. We’ll use this"
    ],
    "ru": [
      "на данный момент, но мы скоро назначим IP-адреса трем верхним интерфейсам. Мы будем использовать это"
    ]
  },
  {
    "time": [
      628.45,
      635.26
    ],
    "en": [
      "command again afterward to check. Next is the ‘OK?’ column. I think this is a legacy"
    ],
    "ru": [
      "затем снова команду, чтобы проверить. Далее идет столбец «ОК?». Я думаю это наследие"
    ]
  },
  {
    "time": [
      635.26,
      641.5
    ],
    "en": [
      "feature of the command, its not relevant anymore. Basically, it says whether or not the IP address"
    ],
    "ru": [
      "особенность команды, она больше не актуальна. По сути, он говорит, действительно ли IP-адрес"
    ]
  },
  {
    "time": [
      641.5,
      648.06
    ],
    "en": [
      "is valid or not. On modern devices, the device won’t let you assign invalid IP addresses,"
    ],
    "ru": [
      "действительно или нет. На современных устройствах устройство не позволяет назначать недопустимые IP-адреса,"
    ]
  },
  {
    "time": [
      648.06,
      654.44
    ],
    "en": [
      "so you should never see ‘NO’ in this column. The interfaces currently have no IP addresses"
    ],
    "ru": [
      "поэтому вы никогда не должны видеть \"НЕТ\" в этом столбце. У интерфейсов в настоящее время нет IP-адресов."
    ]
  },
  {
    "time": [
      654.44,
      661.39
    ],
    "en": [
      "assigned, and as you can see, that is considered a valid state. Next is the method column."
    ],
    "ru": [
      "назначено, и, как видите, это считается допустимым состоянием. Далее идет столбец метода."
    ]
  },
  {
    "time": [
      661.39,
      666.74
    ],
    "en": [
      "This indicates the method by which the interface was assigned an IP address. Currently the"
    ],
    "ru": [
      "Это указывает на метод, с помощью которого интерфейсу был назначен IP-адрес. В настоящее время"
    ]
  },
  {
    "time": [
      666.74,
      673.45
    ],
    "en": [
      "status is unset, but let’s check what it is after we assign IP addresses. Next is the"
    ],
    "ru": [
      "status не задан, но давайте проверим, что он будет после того, как мы назначим IP-адреса. Далее идет"
    ]
  },
  {
    "time": [
      673.45,
      680.55
    ],
    "en": [
      "status column. Basically, you can consider this the Layer 1 status of the interface."
    ],
    "ru": [
      "столбец статуса. По сути, вы можете считать это статусом уровня 1 интерфейса."
    ]
  },
  {
    "time": [
      680.55,
      685.73
    ],
    "en": [
      "If the interface is enabled, there is a cable connected, and the other end of the cable"
    ],
    "ru": [
      "Если интерфейс включен, значит, кабель подключен, а другой конец кабеля"
    ]
  },
  {
    "time": [
      685.73,
      691.209
    ],
    "en": [
      "is properly connected to another device, you should see ‘up’ here. However, here it"
    ],
    "ru": [
      "правильно подключен к другому устройству, здесь вы должны увидеть \"вверху\". Однако здесь"
    ]
  },
  {
    "time": [
      691.209,
      696.79
    ],
    "en": [
      "displays ‘administratively down’. This means the interface has been disabled with"
    ],
    "ru": [
      "отображается \"административно отключен\". Это означает, что интерфейс был отключен с помощью"
    ]
  },
  {
    "time": [
      696.79,
      702.99
    ],
    "en": [
      "the ‘shutdown’ command. However, I haven’t done any configuration on the interfaces yet."
    ],
    "ru": [
      "команда «выключение». Однако я еще не настраивал интерфейсы."
    ]
  },
  {
    "time": [
      702.99,
      709.22
    ],
    "en": [
      "So, this is the default status of Cisco router interfaces. We haven’t looked at switch"
    ],
    "ru": [
      "Итак, это состояние интерфейсов маршрутизатора Cisco по умолчанию. Мы не смотрели на переключатель"
    ]
  },
  {
    "time": [
      709.22,
      716.05
    ],
    "en": [
      "interfaces yet, but Cisco switch interfaces are NOT administratively down by default."
    ],
    "ru": [
      "интерфейсов пока нет, но интерфейсы коммутатора Cisco НЕ отключены административно по умолчанию."
    ]
  },
  {
    "time": [
      716.05,
      721.37
    ],
    "en": [
      "They will either be up, if they are connected to another device, or down, if they are not"
    ],
    "ru": [
      "Они будут либо работать, если они подключены к другому устройству, либо отключаться, если они не подключены."
    ]
  },
  {
    "time": [
      721.37,
      728.509
    ],
    "en": [
      "connected. Notice that, even though gigabit ethernet 0/0, 0/1, and 0/2 on this router"
    ],
    "ru": [
      "связаны. Обратите внимание, что даже если на этом маршрутизаторе есть гигабитный Ethernet 0/0, 0/1 и 0/2."
    ]
  },
  {
    "time": [
      728.509,
      734.24
    ],
    "en": [
      "are connected to switches, the interfaces remain administratively down because the ‘shutdown’"
    ],
    "ru": [
      "подключены к коммутаторам, интерфейсы остаются отключенными административно из-за «выключения»"
    ]
  },
  {
    "time": [
      734.24,
      740.389
    ],
    "en": [
      "command is applied to them by default. The final field of the output is ‘protocol’."
    ],
    "ru": [
      "команда применяется к ним по умолчанию. Последнее поле вывода - «протокол»."
    ]
  },
  {
    "time": [
      740.389,
      746.089
    ],
    "en": [
      "While the ‘status’ column referred to the Layer 1 status of the interface, this"
    ],
    "ru": [
      "В то время как столбец «status» относится к статусу уровня 1 интерфейса, это"
    ]
  },
  {
    "time": [
      746.089,
      753.49
    ],
    "en": [
      "is the Layer 2 status. Because the interfaces are down at Layer 1, layer 2 cant operate,"
    ],
    "ru": [
      "- это статус уровня 2. Поскольку интерфейсы не работают на уровне 1, уровень 2 не может работать,"
    ]
  },
  {
    "time": [
      753.49,
      758.54
    ],
    "en": [
      "so all of these interfaces are down at Layer 2. You’ll never see an interface with a"
    ],
    "ru": [
      "поэтому все эти интерфейсы находятся на уровне 2. Вы никогда не увидите интерфейс с"
    ]
  },
  {
    "time": [
      758.54,
      764.04
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
      758.54,
      764.04
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
      764.04,
      770.81
    ],
    "en": [
      "is possible. Once we configure these interfaces and enable them, we should see up in both"
    ],
    "ru": [
      "возможно. После того, как мы настроим эти интерфейсы и включим их, мы должны увидеть оба"
    ]
  },
  {
    "time": [
      770.81,
      777.06
    ],
    "en": [
      "the status and protocol columns. So, remember these points, the ‘status’ column refers"
    ],
    "ru": [
      "столбцы статуса и протокола. Итак, запомните эти моменты, столбец «статус» относится"
    ]
  },
  {
    "time": [
      777.06,
      784.98
    ],
    "en": [
      "to the Layer 1 status, for example is the interface shutdown, is there a cable attached, etc."
    ],
    "ru": [
      "в состояние уровня 1, например, отключение интерфейса, подключен ли кабель и т. д."
    ]
  },
  {
    "time": [
      784.98,
      790.64
    ],
    "en": [
      "The protocol column refers to the layer 2 status, for example is Ethernet functioning properly"
    ],
    "ru": [
      "Столбец протокола относится к состоянию уровня 2, например, правильно ли работает Ethernet."
    ]
  },
  {
    "time": [
      790.64,
      796.98
    ],
    "en": [
      "between this device and the device it's connected to. Expect both of these columns to show up"
    ],
    "ru": [
      "между этим устройством и устройством, к которому оно подключено. Ожидайте появления обоих этих столбцов."
    ]
  },
  {
    "time": [
      796.98,
      799.55
    ],
    "en": [
      "once we’re finished with our configurations!"
    ],
    "ru": [
      "как только мы закончим с нашими конфигурациями!"
    ]
  },
  {
    "time": [
      799.55,
      807.379
    ],
    "en": [
      "So, let’s configure the gigabitethernet0/0 interface first. I use conf t, the shortcut"
    ],
    "ru": [
      "Итак, давайте сначала настроим интерфейс gigabitethernet0 / 0. Я использую conf t, ярлык"
    ]
  },
  {
    "time": [
      807.379,
      813.11
    ],
    "en": [
      "of the ‘configure terminal’ command to enter global config mode. Next, to configure"
    ],
    "ru": [
      "команды «configure terminal» для входа в режим глобальной конфигурации. Далее для настройки"
    ]
  },
  {
    "time": [
      813.11,
      820.23
    ],
    "en": [
      "the interface itself, I have to enter interface config mode. So, I use the command ‘interface’,"
    ],
    "ru": [
      "сам интерфейс, мне нужно войти в режим конфигурации интерфейса. Итак, я использую команду «интерфейс»,"
    ]
  },
  {
    "time": [
      820.23,
      828.519
    ],
    "en": [
      "followed by the name of the interface, gigabitethernet 0/0. As you can see, it now displays config-if"
    ],
    "ru": [
      "за которым следует имя интерфейса, gigabitethernet 0/0. Как видите, теперь он отображает config-if"
    ]
  },
  {
    "time": [
      828.519,
      834.329
    ],
    "en": [
      "beside the hostname of the device. Now, before we move on, let me show you some other ways"
    ],
    "ru": [
      "рядом с именем хоста устройства. Теперь, прежде чем мы продолжим, позвольте мне показать вам другие способы"
    ]
  },
  {
    "time": [
      834.329,
      840.149
    ],
    "en": [
      "to enter interface configuration mode. First off, notice that you don’t need the space"
    ],
    "ru": [
      "для входа в режим настройки интерфейса. Во-первых, обратите внимание, что вам не нужно пространство"
    ]
  },
  {
    "time": [
      840.149,
      846.81
    ],
    "en": [
      "between ‘gigabitethernet’ and 0/0, you can connect them and the CLI will still understand"
    ],
    "ru": [
      "между «gigabitethernet» и 0/0, вы можете подключить их, и интерфейс командной строки все равно поймет"
    ]
  },
  {
    "time": [
      846.81,
      853.639
    ],
    "en": [
      "and bring you to interface configuration mode for that interface. Now, how about the shortcut"
    ],
    "ru": [
      "и переведет вас в режим настройки интерфейса для этого интерфейса. А как насчет ярлыка"
    ]
  },
  {
    "time": [
      853.639,
      858.73
    ],
    "en": [
      "version of the command? Well, as you can see, there are many possible commands beginning"
    ],
    "ru": [
      "версия команды? Как видите, есть много возможных команд, начинающихся"
    ]
  },
  {
    "time": [
      858.73,
      865.399
    ],
    "en": [
      "with ‘i’ from global config mode, so that’s too short. However, there is only one option"
    ],
    "ru": [
      "с «i» из режима глобальной конфигурации, так что это слишком коротко. Однако есть только один вариант"
    ]
  },
  {
    "time": [
      865.399,
      871.839
    ],
    "en": [
      "beginning with ‘in’, so that’s the shortest version of the command. Keep in mind, you"
    ],
    "ru": [
      "начиная с \"in\", так что это самая короткая версия команды. Имейте в виду, вы"
    ]
  },
  {
    "time": [
      871.839,
      876.74
    ],
    "en": [
      "don’t have to use or even remember what the shortest version of each command is. For"
    ],
    "ru": [
      "не нужно использовать или даже запоминать самую короткую версию каждой команды. Для"
    ]
  },
  {
    "time": [
      876.74,
      883.64
    ],
    "en": [
      "example I always type ‘int’ for interface, even though ‘in’ would work too. Just"
    ],
    "ru": [
      "Например, я всегда набираю \"int\" для интерфейса, хотя \"in\" тоже подойдет. Просто"
    ]
  },
  {
    "time": [
      883.64,
      888.37
    ],
    "en": [
      "use whatever is comfortable for you. It may even help you remember the commands if you"
    ],
    "ru": [
      "используйте то, что вам удобно. Это может даже помочь вам запомнить команды, если вы"
    ]
  },
  {
    "time": [
      888.37,
      895.37
    ],
    "en": [
      "type the whole thing out every time. Okay, now how about the short version of gigabitethernet?"
    ],
    "ru": [
      "печатайте все это каждый раз. Хорошо, а как насчет короткой версии gigabitethernet?"
    ]
  },
  {
    "time": [
      895.37,
      901.93
    ],
    "en": [
      "Well, as you can see there are multiple options with just G, so you might think that’s too"
    ],
    "ru": [
      "Что ж, как видите, есть несколько вариантов с помощью одной буквы G, так что вы можете подумать, что это тоже"
    ]
  },
  {
    "time": [
      901.93,
      908.94
    ],
    "en": [
      "short. However, here’s something cool. If you type the 0/0 after the G, it works! The"
    ],
    "ru": [
      "короткая. Однако есть кое-что классное. Если вы наберете 0/0 после G, это сработает! В"
    ]
  },
  {
    "time": [
      908.94,
      913.94
    ],
    "en": [
      "CLI will understand and bring you into interface configuration mode for gigabitethernet"
    ],
    "ru": [
      "CLI поймет и переведет вас в режим настройки интерфейса для gigabitethernet"
    ]
  },
  {
    "time": [
      913.94,
      921.17
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
      913.94,
      921.17
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
      921.17,
      925.899
    ],
    "en": [
      "and type out the whole command, remember that the command to enter interface configuration"
    ],
    "ru": [
      "и введите всю команду, помните, что команда для входа в конфигурацию интерфейса"
    ]
  },
  {
    "time": [
      925.899,
      931.19
    ],
    "en": [
      "mode is ‘interface’, followed by the interface name."
    ],
    "ru": [
      "режим - «интерфейс», за которым следует имя интерфейса."
    ]
  },
  {
    "time": [
      931.19,
      936.269
    ],
    "en": [
      "Now that we’re in interface configuration mode, let’s set the IP address. That is"
    ],
    "ru": [
      "Теперь, когда мы находимся в режиме настройки интерфейса, давайте установим IP-адрес. То есть"
    ]
  },
  {
    "time": [
      936.269,
      942.259
    ],
    "en": [
      "done with the command IP address, and then you type the IP address. Notice I used the"
    ],
    "ru": [
      "выполняется с помощью IP-адреса команды, а затем вы вводите IP-адрес. Обратите внимание, что я использовал"
    ]
  },
  {
    "time": [
      942.259,
      947.63
    ],
    "en": [
      "context-sensitive help, the question mark, to display the next option, and it is the"
    ],
    "ru": [
      "контекстная справка, знак вопроса, чтобы отобразить следующий параметр, и это"
    ]
  },
  {
    "time": [
      947.63,
      953.02
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
      947.63,
      953.02
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
      953.02,
      959.93
    ],
    "en": [
      "video. As opposed to writing /8 for this class A address, we will have to write out the subnet"
    ],
    "ru": [
      "видео. В отличие от записи / 8 для этого адреса класса A, нам нужно будет записать подсеть"
    ]
  },
  {
    "time": [
      959.93,
      965.92
    ],
    "en": [
      "mask in dotted decimal. For those of you who have heard of the term ‘subnet’ or ‘subnetting’"
    ],
    "ru": [
      "маска в десятичном формате с точками. Для тех из вас, кто слышал о терминах «подсеть» или «подсети»."
    ]
  },
  {
    "time": [
      965.92,
      972.819
    ],
    "en": [
      "before, don’t worry. We’ll cover those topics in depth soon in separate videos. So,"
    ],
    "ru": [
      "раньше не волнуйся. Вскоре мы подробно рассмотрим эти темы в отдельных видео. Так,"
    ]
  },
  {
    "time": [
      972.819,
      981.14
    ],
    "en": [
      "you may remember /8 is equivalent to 255.0.0.0. /8 means that the first bits are all set"
    ],
    "ru": [
      "вы можете помнить, что / 8 эквивалентно 255.0.0.0. / 8 означает, что все первые биты установлены"
    ]
  },
  {
    "time": [
      981.14,
      990.339
    ],
    "en": [
      "to 1, and a binary octet of all 1s is written as 255 in decimal. Next I enter the command"
    ],
    "ru": [
      "в 1, а двоичный октет из всех единиц записывается как 255 в десятичном виде. Далее ввожу команду"
    ]
  },
  {
    "time": [
      990.339,
      996.529
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
      990.339,
      996.529
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
      996.529,
      1001.92
    ],
    "en": [
      "that Cisco router interfaces have the ‘shutdown’ command applied to them by default? Well,"
    ],
    "ru": [
      "что к интерфейсам маршрутизатора Cisco по умолчанию применяется команда «выключение»? Хорошо,"
    ]
  },
  {
    "time": [
      1001.92,
      1007.779
    ],
    "en": [
      "to cancel the command, type ‘no’ in front of the command like this. Now that we entered"
    ],
    "ru": [
      "чтобы отменить команду, введите «нет» перед командой, как это. Теперь, когда мы вошли"
    ]
  },
  {
    "time": [
      1007.779,
      1013.54
    ],
    "en": [
      "the no shutdown command on the interface, we get two messages on the device. The first"
    ],
    "ru": [
      "команда no shutdown на интерфейсе, мы получаем два сообщения на устройстве. Первое"
    ]
  },
  {
    "time": [
      1013.54,
      1021.149
    ],
    "en": [
      "one says ‘Interface gigabitethernet0/0, changed state to up. This refers to the physical"
    ],
    "ru": [
      "один говорит: «Интерфейс gigabitethernet0 / 0, состояние изменено на« включено ». Это относится к физическому"
    ]
  },
  {
    "time": [
      1021.149,
      1026.5
    ],
    "en": [
      "layer status of the interface, the ‘STATUS’ column of the show ip interface brief command"
    ],
    "ru": [
      "статус уровня интерфейса, столбец «STATUS» краткой команды show ip interface"
    ]
  },
  {
    "time": [
      1026.5,
      1033.14
    ],
    "en": [
      "we looked at. The second message says ‘Line protocol on interface gigabitethernet0/0,"
    ],
    "ru": [
      "мы смотрели. Во втором сообщении говорится: «Линейный протокол на интерфейсе gigabitethernet0 / 0,"
    ]
  },
  {
    "time": [
      1033.14,
      1039.23
    ],
    "en": [
      "changed state to up.’ This is the layer 2 status of the interface, the ‘protocol’"
    ],
    "ru": [
      "изменено состояние на «включено». Это статус уровня 2 интерфейса, «протокол»"
    ]
  },
  {
    "time": [
      1039.23,
      1046.65
    ],
    "en": [
      "column of the show ip interface brief command. So, now if we take a look at the show ip interface"
    ],
    "ru": [
      "столбец краткой команды show ip interface. Итак, теперь, если мы посмотрим на интерфейс show ip"
    ]
  },
  {
    "time": [
      1046.65,
      1054.159
    ],
    "en": [
      "brief command, both of those columns should display up. Lets check. Here I use ‘do’"
    ],
    "ru": [
      "Краткая команда, оба этих столбца должны отображаться. Давайте проверим. Здесь я использую \"делать\""
    ]
  },
  {
    "time": [
      1054.159,
      1059.27
    ],
    "en": [
      "to let me execute this privileged exec mode command from interface config mode, and notice"
    ],
    "ru": [
      "чтобы я мог выполнить эту привилегированную команду режима exec из режима конфигурации интерфейса и заметить"
    ]
  },
  {
    "time": [
      1059.27,
      1071.289
    ],
    "en": [
      "I used shortcuts instead, SH ip INT BR, instead of show ip interface brief. As you can see,"
    ],
    "ru": [
      "Вместо этого я использовал ярлыки SH ip INT BR вместо show ip interfacerief. Как вы видете,"
    ]
  },
  {
    "time": [
      1071.289,
      1077.77
    ],
    "en": [
      "we can now see the IP address, the method is displayed as manual instead of unset, and"
    ],
    "ru": [
      "теперь мы можем видеть IP-адрес, метод отображается как ручной, а не как отключенный, и"
    ]
  },
  {
    "time": [
      1077.77,
      1084.75
    ],
    "en": [
      "both the status and protocol display up. Seems like our interface configuration was a success!"
    ],
    "ru": [
      "отображаются статус и протокол. Похоже, наша конфигурация интерфейса удалась!"
    ]
  },
  {
    "time": [
      1084.75,
      1090.85
    ],
    "en": [
      "Let’s do the configurations for the G0/1 interface next. I’ll give it an address"
    ],
    "ru": [
      "Теперь займемся настройкой интерфейса G0 / 1. Я дам ему адрес"
    ]
  },
  {
    "time": [
      1090.85,
      1101.39
    ],
    "en": [
      "of 172.16.255.254. The prefix length is /16, so what will the subnet mask be?"
    ],
    "ru": [
      "из 172.16.255.254. Длина префикса / 16, какова же будет маска подсети?"
    ]
  },
  {
    "time": [
      1101.39,
      1109.98
    ],
    "en": [
      "So, I use the int g0/1 command to enter interface config mode for the interface. Notice that"
    ],
    "ru": [
      "Итак, я использую команду int g0 / 1 для входа в режим конфигурации интерфейса для интерфейса. Заметить, что"
    ]
  },
  {
    "time": [
      1109.98,
      1117.03
    ],
    "en": [
      "I didn’t type ‘exit’ to return to global config mode and then type int g0/1. You can"
    ],
    "ru": [
      "Я не набирал «exit», чтобы вернуться в режим глобальной конфигурации, а затем набирал int g0 / 1. Вы можете"
    ]
  },
  {
    "time": [
      1117.03,
      1123.53
    ],
    "en": [
      "directly switch from one interface to the other. Next I configure the IP address, using"
    ],
    "ru": [
      "напрямую переключайтесь с одного интерфейса на другой. Затем я настраиваю IP-адрес, используя"
    ]
  },
  {
    "time": [
      1123.53,
      1131.659
    ],
    "en": [
      "the shortcut ‘add’ for address. Notice the subnet mask of 255.255.0.0, which indicates"
    ],
    "ru": [
      "ярлык «добавить» для адреса. Обратите внимание на маску подсети 255.255.0.0, которая указывает"
    ]
  },
  {
    "time": [
      1131.659,
      1138.87
    ],
    "en": [
      "a prefix length of /16. Then I enable the interface with ‘no shut’, which is a short"
    ],
    "ru": [
      "длина префикса / 16. Затем я включаю интерфейс с \"не закрывать\", что является коротким"
    ]
  },
  {
    "time": [
      1138.87,
      1145.71
    ],
    "en": [
      "version of the no shutdown command. Once again, I get two messages saying the interface has"
    ],
    "ru": [
      "версия команды no shutdown. Я снова получаю два сообщения о том, что интерфейс"
    ]
  },
  {
    "time": [
      1145.71,
      1152.36
    ],
    "en": [
      "come up. Then I check the interfaces again with show ip interface brief, and you can"
    ],
    "ru": [
      "появиться. Затем я снова проверяю интерфейсы с помощью команды show ip interfacerief, и вы можете"
    ]
  },
  {
    "time": [
      1152.36,
      1159.11
    ],
    "en": [
      "see that gigabitethernet0/1 has an IP address, and its status is UP UP."
    ],
    "ru": [
      "посмотрите, что у gigabitethernet0 / 1 есть IP-адрес, и его статус UP UP."
    ]
  },
  {
    "time": [
      1159.11,
      1169.76
    ],
    "en": [
      "Finally, let’s configure R1’s g0/2 interface with an IP address of 192.168.0.254. The prefix"
    ],
    "ru": [
      "Наконец, давайте настроим интерфейс g0 / 2 маршрутизатора R1 с IP-адресом 192.168.0.254. Префикс"
    ]
  },
  {
    "time": [
      1169.76,
      1174.89
    ],
    "en": [
      "length is /24, so what do you think the subnet mask will be?"
    ],
    "ru": [
      "длина / 24, как вы думаете, какой будет маска подсети?"
    ]
  },
  {
    "time": [
      1174.89,
      1183.7
    ],
    "en": [
      "So, I use ‘int g0/2’ to enter interface config mode for gigabitethernet 0/2. Then"
    ],
    "ru": [
      "Итак, я использую int g0 / 2 для входа в режим конфигурации интерфейса для gigabitethernet 0/2. потом"
    ]
  },
  {
    "time": [
      1183.7,
      1194.34
    ],
    "en": [
      "I configure an IP address of 192.168.0.254, and the subnet mask is 255.255.255.0, which"
    ],
    "ru": [
      "Я настраиваю IP-адрес 192.168.0.254, а маска подсети - 255.255.255.0, что"
    ]
  },
  {
    "time": [
      1194.34,
      1201.861
    ],
    "en": [
      "is equivalent to a prefix length of /24. I enable the interface with ‘no shut’, and once"
    ],
    "ru": [
      "эквивалентно длине префикса / 24. Я включаю интерфейс без остановки, и один раз"
    ]
  },
  {
    "time": [
      1201.861,
      1207.52
    ],
    "en": [
      "again I get the two messages indicating the interface has come up, and then once more"
    ],
    "ru": [
      "снова я получаю два сообщения о том, что интерфейс появился, а затем еще раз"
    ]
  },
  {
    "time": [
      1207.52,
      1213.36
    ],
    "en": [
      "I check the status of the interfaces with show ip interface brief. Looks like all of"
    ],
    "ru": [
      "Я проверяю состояние интерфейсов с помощью команды show ip interfacerief. Похоже, что все"
    ]
  },
  {
    "time": [
      1213.36,
      1219.1
    ],
    "en": [
      "the interfaces have been properly configured. Their IP addresses are displayed, their method"
    ],
    "ru": [
      "интерфейсы были правильно настроены. Отображаются их IP-адреса, их метод"
    ]
  },
  {
    "time": [
      1219.1,
      1224.91
    ],
    "en": [
      "column displays ‘manual’, since I manually configured their IP addresses, and their status"
    ],
    "ru": [
      "в столбце отображается «вручную», так как я вручную настроил их IP-адреса, а их статус"
    ]
  },
  {
    "time": [
      1224.91,
      1231.74
    ],
    "en": [
      "and protocol columns show up and up. Before finishing, I want to introduce some more"
    ],
    "ru": [
      "и столбцы протокола появляются и появляются. Перед тем, как закончить, я хочу представить еще несколько"
    ]
  },
  {
    "time": [
      1231.74,
      1238.24
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
      1231.74,
      1238.24
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
      1238.24,
      1244.669
    ],
    "en": [
      "First up is the ‘show interfaces’ command. You can enter just ‘show interfaces’,"
    ],
    "ru": [
      "Сначала идет команда «показать интерфейсы». Вы можете ввести просто «показать интерфейсы»,"
    ]
  },
  {
    "time": [
      1244.669,
      1249.659
    ],
    "en": [
      "but it shows a lot of information for each interface, so I recommend specifying which"
    ],
    "ru": [
      "но он показывает много информации для каждого интерфейса, поэтому я рекомендую указать, какой"
    ]
  },
  {
    "time": [
      1249.659,
      1256.88
    ],
    "en": [
      "interface you want to check, in this case I specified G0/0. This command shows primarily"
    ],
    "ru": [
      "интерфейс, который вы хотите проверить, в данном случае я указал G0 / 0. Эта команда показывает в первую очередь"
    ]
  },
  {
    "time": [
      1256.88,
      1264.69
    ],
    "en": [
      "Layer 1 and Layer 2 information about the interface, but also some Layer 3. Gigabitethernet0/0"
    ],
    "ru": [
      "Информация об интерфейсе уровня 1 и уровня 2, а также некоторая часть уровня 3. Gigabitethernet0 / 0"
    ]
  },
  {
    "time": [
      1264.69,
      1271.779
    ],
    "en": [
      "is up, that means that Layer 1 is working. Line protocol is up, that refers to the Layer"
    ],
    "ru": [
      "вверх, это означает, что уровень 1 работает. Линейный протокол работает, это относится к слою"
    ]
  },
  {
    "time": [
      1271.779,
      1278.03
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
      1271.779,
      1278.03
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
      1278.03,
      1286.179
    ],
    "en": [
      "ip interface brief’ command. Hardware is 1GBE, meaning 1 gigabit ethernet, address"
    ],
    "ru": [
      "ip interface краткая команда. Аппаратное обеспечение - 1GBE, что означает 1 гигабитный Ethernet, адрес"
    ]
  },
  {
    "time": [
      1286.179,
      1298.45
    ],
    "en": [
      "is 0c1b.8444.f000. That’s the MAC address of this interface. Notice it says BIA, followed"
    ],
    "ru": [
      "это 0c1b.8444.f000. Это MAC-адрес этого интерфейса. Обратите внимание, что там написано BIA, а затем"
    ]
  },
  {
    "time": [
      1298.45,
      1303.96
    ],
    "en": [
      "by the MAC address again. I mentioned in a previous video that the MAC address can also"
    ],
    "ru": [
      "еще раз по MAC-адресу. В предыдущем видео я упоминал, что MAC-адрес также может"
    ]
  },
  {
    "time": [
      1303.96,
      1311.86
    ],
    "en": [
      "be called the burned in address. Well, thats what BIA stands for. Why is it listed twice?"
    ],
    "ru": [
      "называться сожженным в адрес. Что ж, это то, что означает BIA. Почему он указан дважды?"
    ]
  },
  {
    "time": [
      1311.86,
      1318.14
    ],
    "en": [
      "Well, BIA refers to the actual physical address of the interface. However, you can actually"
    ],
    "ru": [
      "Что ж, BIA относится к фактическому физическому адресу интерфейса. Однако на самом деле вы можете"
    ]
  },
  {
    "time": [
      1318.14,
      1323.61
    ],
    "en": [
      "configure a different MAC address in the CLI, although usually you won’t configure a different"
    ],
    "ru": [
      "настроить другой MAC-адрес в интерфейсе командной строки, хотя обычно вы не настраиваете другой"
    ]
  },
  {
    "time": [
      1323.61,
      1335.2
    ],
    "en": [
      "MAC address. Internet address is 10.255.255.254/8. This is the IP address, of course. Feel free"
    ],
    "ru": [
      "MAC-адрес. Адрес в Интернете: 10.255.255.254/8. Конечно, это IP-адрес. Не стесняйтесь"
    ]
  },
  {
    "time": [
      1335.2,
      1339.49
    ],
    "en": [
      "to take a look at the rest of this information if you want, but I’ll explain more of it"
    ],
    "ru": [
      "если хотите, взгляните на остальную информацию, но я объясню ее подробнее"
    ]
  },
  {
    "time": [
      1339.49,
      1347.69
    ],
    "en": [
      "in detail in a later video. It’s all detailed Layer 1 and Layer 2 information about the interface."
    ],
    "ru": [
      "подробно в более позднем видео. Это вся подробная информация об интерфейсе уровня 1 и уровня 2."
    ]
  },
  {
    "time": [
      1347.69,
      1353.909
    ],
    "en": [
      "Now let’s look at one more valuable command. ‘show interfaces description’. Well, as"
    ],
    "ru": [
      "А теперь давайте взглянем на еще одну важную команду. «Показать описание интерфейсов». Хорош как"
    ]
  },
  {
    "time": [
      1353.909,
      1360.1
    ],
    "en": [
      "you can see it has status and protocol columns like the show ip interface brief command."
    ],
    "ru": [
      "вы можете видеть, что у него есть столбцы статуса и протокола, такие как команда show ip interfacerief."
    ]
  },
  {
    "time": [
      1360.1,
      1365.82
    ],
    "en": [
      "But it also has this ‘description’ column. Interface descriptions are optional, but can"
    ],
    "ru": [
      "Но в нем также есть столбец «Описание». Описания интерфейсов необязательны, но можно"
    ]
  },
  {
    "time": [
      1365.82,
      1371.159
    ],
    "en": [
      "be very helpful in identifying the purpose of each interface. Let’s quickly go back"
    ],
    "ru": [
      "быть очень полезным в определении цели каждого интерфейса. Давай быстро вернемся"
    ]
  },
  {
    "time": [
      1371.159,
      1374.75
    ],
    "en": [
      "and configure descriptions on each of these interfaces."
    ],
    "ru": [
      "и настройте описания для каждого из этих интерфейсов."
    ]
  },
  {
    "time": [
      1374.75,
      1382.48
    ],
    "en": [
      "So, from global config mode I once again entered interface config mode for G0/0. The command"
    ],
    "ru": [
      "Итак, из режима глобальной конфигурации я снова вошел в режим настройки интерфейса для G0 / 0. Команда"
    ]
  },
  {
    "time": [
      1382.48,
      1388.04
    ],
    "en": [
      "to configure an interface description is simply ‘description’, followed by the description."
    ],
    "ru": [
      "для настройки описания интерфейса просто «описание», за которым следует описание."
    ]
  },
  {
    "time": [
      1388.04,
      1394.82
    ],
    "en": [
      "Now, there aren’t any rules regarding how to describe your interfaces. I use hashtags"
    ],
    "ru": [
      "Теперь нет никаких правил относительно того, как описывать ваши интерфейсы. Я использую хэштеги"
    ]
  },
  {
    "time": [
      1394.82,
      1399.659
    ],
    "en": [
      "to make the descriptions more noticeable, and then I indicate which device the interface"
    ],
    "ru": [
      "чтобы описания были заметнее, а потом указываю на каком устройстве интерфейс"
    ]
  },
  {
    "time": [
      1399.659,
      1408.64
    ],
    "en": [
      "is connected to. I do the same for G0/1 and G0/2, using ‘D E S C’ instead of the full"
    ],
    "ru": [
      "подключен к. Я делаю то же самое для G0 / 1 и G0 / 2, используя «D E S C» вместо полного"
    ]
  },
  {
    "time": [
      1408.64,
      1415.35
    ],
    "en": [
      "description command. I then use the show interfaces description command again, and now you can"
    ],
    "ru": [
      "описание команды. Затем я снова использую команду show interfaces description, и теперь вы можете"
    ]
  },
  {
    "time": [
      1415.35,
      1420.919
    ],
    "en": [
      "see the description of each interface. Now, there are many more ‘show’ commands you"
    ],
    "ru": [
      "см. описание каждого интерфейса. Теперь есть еще много команд «показать», которые вы"
    ]
  },
  {
    "time": [
      1420.919,
      1426.92
    ],
    "en": [
      "can use to obtain information about a device’s interfaces. We’ll take a look at a few more"
    ],
    "ru": [
      "можно использовать для получения информации об интерфейсах устройства. Мы рассмотрим еще несколько"
    ]
  },
  {
    "time": [
      1426.92,
      1433.85
    ],
    "en": [
      "throughout this course, but for now remember ‘show ip interface brief’, ‘show interfaces’,"
    ],
    "ru": [
      "на протяжении всего курса, но пока не забывайте «показать краткое описание интерфейса IP», «показать интерфейсы»,"
    ]
  },
  {
    "time": [
      1433.85,
      1437.309
    ],
    "en": [
      "and ‘show interfaces description’."
    ],
    "ru": [
      "и «показать описание интерфейсов»."
    ]
  },
  {
    "time": [
      1437.309,
      1441.7
    ],
    "en": [
      "Now let’s review what we covered. This is the same slide I showed at the beginning of"
    ],
    "ru": [
      "Теперь давайте рассмотрим, что мы рассмотрели. Это тот же слайд, который я показал в начале"
    ]
  },
  {
    "time": [
      1441.7,
      1447.7
    ],
    "en": [
      "the video, but let’s go through and make sure we covered everything. We covered IPv4"
    ],
    "ru": [
      "видео, но давайте пройдемся и убедимся, что мы все охватили. Мы рассмотрели IPv4"
    ]
  },
  {
    "time": [
      1447.7,
      1453.69
    ],
    "en": [
      "address classes, which we also covered in Part 1, but reviewed in this video. We talked"
    ],
    "ru": [
      "классы адресов, которые мы также рассмотрели в части 1, но рассмотрели в этом видео. Мы говорили"
    ]
  },
  {
    "time": [
      1453.69,
      1460.191
    ],
    "en": [
      "about how to find the maximum number of hosts, network address, broadcast address, first"
    ],
    "ru": [
      "о том, как найти максимальное количество хостов, сетевой адрес, широковещательный адрес, сначала"
    ]
  },
  {
    "time": [
      1460.191,
      1465.88
    ],
    "en": [
      "usable address, and last usable address of a particular network. If you’re not sure"
    ],
    "ru": [
      "используемый адрес и последний используемый адрес конкретной сети. Если ты не уверен"
    ]
  },
  {
    "time": [
      1465.88,
      1470.46
    ],
    "en": [
      "about any of those, go back and listen to that part of the video once more before moving"
    ],
    "ru": [
      "о любом из них, вернитесь и послушайте эту часть видео еще раз, прежде чем двигаться"
    ]
  },
  {
    "time": [
      1470.46,
      1477.45
    ],
    "en": [
      "on to today’s quiz. Finally, I showed you how to configure IP addresses on Cisco devices,"
    ],
    "ru": [
      "на сегодняшнюю викторину. Наконец, я показал вам, как настраивать IP-адреса на устройствах Cisco,"
    ]
  },
  {
    "time": [
      1477.45,
      1483.12
    ],
    "en": [
      "as well as some ‘show’ commands to gather information about interfaces."
    ],
    "ru": [
      "а также некоторые команды «show» для сбора информации об интерфейсах."
    ]
  },
  {
    "time": [
      1483.12,
      1487.669
    ],
    "en": [
      "Now let’s go on to the quiz for today’s video. If you want further help remembering"
    ],
    "ru": [
      "А теперь перейдем к тесту на сегодняшнее видео. Если вам нужна дополнительная помощь в запоминании"
    ]
  },
  {
    "time": [
      1487.669,
      1492.019
    ],
    "en": [
      "what you’ve studied, remember to download and use the Anki flashcards from the link"
    ],
    "ru": [
      "что вы изучали, не забудьте скачать и использовать карточки Anki по ссылке"
    ]
  },
  {
    "time": [
      1492.019,
      1498.32
    ],
    "en": [
      "in the description. For this quiz, I’ll focus on finding the maximum number of hosts,"
    ],
    "ru": [
      "в описании. В этой викторине я сосредоточусь на поиске максимального количества хостов,"
    ]
  },
  {
    "time": [
      1498.32,
      1505.73
    ],
    "en": [
      "network address, broadcast address, and first and last usable addresses of a network."
    ],
    "ru": [
      "сетевой адрес, широковещательный адрес, а также первый и последний используемые адреса сети."
    ]
  },
  {
    "time": [
      1505.73,
      1517.89
    ],
    "en": [
      "First up, question 1: PC1 has an IP address of 43.109.23.12/8. Find the following: The network address, the"
    ],
    "ru": [
      "Во-первых, вопрос 1: у ПК1 IP-адрес 43.109.23.12/8. Найдите следующее: сетевой адрес,"
    ]
  },
  {
    "time": [
      1517.89,
      1523.039
    ],
    "en": [
      "maximum number of hosts in the network, the network broadcast address, the first usable"
    ],
    "ru": [
      "максимальное количество хостов в сети, сетевой широковещательный адрес, первый используемый"
    ]
  },
  {
    "time": [
      1523.039,
      1528.23
    ],
    "en": [
      "address of the network, and the last usable address of the network. Pause the video to"
    ],
    "ru": [
      "адрес сети и последний используемый адрес сети. Приостановить видео, чтобы"
    ]
  },
  {
    "time": [
      1528.23,
      1539.799
    ],
    "en": [
      "find the answers. Okay, let’s check. The network address is 43.0.0.0, since"
    ],
    "ru": [
      "найди ответы. Хорошо, давай проверим. Сетевой адрес 43.0.0.0, так как"
    ]
  },
  {
    "time": [
      1539.799,
      1550.14
    ],
    "en": [
      "only the first octet is the network portion. The maximum number of hosts is 16,777,214,"
    ],
    "ru": [
      "только первый октет - это сетевая часть. Максимальное количество хостов - 16 777 214,"
    ]
  },
  {
    "time": [
      1550.14,
      1556.5
    ],
    "en": [
      "which is 2 to the power of 24, because there are 24 host bits in the network, minus 2,"
    ],
    "ru": [
      "что равно 2 в степени 24, потому что в сети 24 бита хоста, минус 2,"
    ]
  },
  {
    "time": [
      1556.5,
      1564.36
    ],
    "en": [
      "for the network and broadcast addresses. The first usable address is 43.0.0.1, which is"
    ],
    "ru": [
      "для сетевых и широковещательных адресов. Первый используемый адрес - 43.0.0.1, то есть"
    ]
  },
  {
    "time": [
      1564.36,
      1572.96
    ],
    "en": [
      "the network address plus 1, and then the last usable address is 43.255.255.254, which is"
    ],
    "ru": [
      "сетевой адрес плюс 1, а затем последний используемый адрес 43.255.255.254, который"
    ]
  },
  {
    "time": [
      1572.96,
      1578.08
    ],
    "en": [
      "the broadcast address minus 1. Let’s go to question 2."
    ],
    "ru": [
      "широковещательный адрес минус 1. Перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1578.08,
      1589.12
    ],
    "en": [
      "PC4 has an IP address of 129.221.23.13/16. Find the same five values. Pause the video"
    ],
    "ru": [
      "ПК4 имеет IP-адрес 129.221.23.13/16. Найдите те же пять значений. Приостановить видео"
    ]
  },
  {
    "time": [
      1589.12,
      1601.799
    ],
    "en": [
      "to find the answer. Okay, so the network address is 129.221.0.0. The"
    ],
    "ru": [
      "чтобы найти ответ. Итак, сетевой адрес - 129.221.0.0. В"
    ]
  },
  {
    "time": [
      1601.799,
      1610.6
    ],
    "en": [
      "maximum number of hosts is 65,534, which is 2 to the power of 16, minus 2. The network"
    ],
    "ru": [
      "максимальное количество хостов - 65 534, что равно 2 в степени 16 минус 2. Сеть"
    ]
  },
  {
    "time": [
      1610.6,
      1621.78
    ],
    "en": [
      "broadcast address is 129.221.255.255. The first usable address is 129.221.0.1, and the"
    ],
    "ru": [
      "широковещательный адрес 129.221.255.255. Первый используемый адрес - 129.221.0.1, а"
    ]
  },
  {
    "time": [
      1621.78,
      1630.45
    ],
    "en": [
      "last usable address is 129.221.255.254. Let’s go to question 3."
    ],
    "ru": [
      "последний используемый адрес - 129.221.255.254. Перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1630.45,
      1641.71
    ],
    "en": [
      "PC8 has an IP address of 209.211.3.22/24 Find the same five values. Pause the video to find"
    ],
    "ru": [
      "PC8 имеет IP-адрес 209.211.3.22/24. Найдите те же пять значений. Поставьте видео на паузу, чтобы найти"
    ]
  },
  {
    "time": [
      1641.71,
      1652.42
    ],
    "en": [
      "the answer. Okay, so the network address is 209.211.3.0. The maximum"
    ],
    "ru": [
      "ответ. Итак, сетевой адрес - 209.211.3.0. Максимум"
    ]
  },
  {
    "time": [
      1652.42,
      1659.35
    ],
    "en": [
      "number of hosts is 254, which is 2 to the power of 8, minus 2. The network broadcast"
    ],
    "ru": [
      "количество хостов 254, что равно 2 в степени 8 минус 2. Сетевая трансляция"
    ]
  },
  {
    "time": [
      1659.35,
      1670.36
    ],
    "en": [
      "address is 209.211.3.255. The first usable address is 209.211.3.1, and the last usable"
    ],
    "ru": [
      "адрес 209.211.3.255. Первый пригодный для использования адрес - 209.211.3.1, а последний пригодный для использования."
    ]
  },
  {
    "time": [
      1670.36,
      1678.34
    ],
    "en": [
      "address is 209.211.3.254. Let’s go to question 4."
    ],
    "ru": [
      "адрес 209.211.3.254. Перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1678.34,
      1690.309
    ],
    "en": [
      "PC5 has an IP address of 2.71.209.233/8 Find the same five values. Pause the video to find"
    ],
    "ru": [
      "PC5 имеет IP-адрес 2.71.209.233/8. Найдите те же пять значений. Поставьте видео на паузу, чтобы найти"
    ]
  },
  {
    "time": [
      1690.309,
      1701.24
    ],
    "en": [
      "the answer. Okay, so the network address is 2.0.0.0 The maximum number"
    ],
    "ru": [
      "ответ. Хорошо, сетевой адрес - 2.0.0.0 Максимальное число"
    ]
  },
  {
    "time": [
      1701.24,
      1713.029
    ],
    "en": [
      "of hosts is 16,777,214, which is 2 to the power of 24, minus 2. The network broadcast"
    ],
    "ru": [
      "хостов составляет 16 777 214, что равно 2 в степени 24 минус 2. Сетевая трансляция"
    ]
  },
  {
    "time": [
      1713.029,
      1723.639
    ],
    "en": [
      "address is 2.255.255.255. The first usable address is 2.0.0.1, and the last usable address"
    ],
    "ru": [
      "адрес 2.255.255.255. Первый пригодный для использования адрес - 2.0.0.1, а последний пригодный для использования адрес."
    ]
  },
  {
    "time": [
      1723.639,
      1731.269
    ],
    "en": [
      "is 2.255.255.254. Let’s go to question 5."
    ],
    "ru": [
      "это 2.255.255.254. Перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1731.269,
      1744.559
    ],
    "en": [
      "PC6 has an IP address of 155.200.201.141/16 Find the same five values. Pause the video"
    ],
    "ru": [
      "PC6 имеет IP-адрес 155.200.201.141/16. Найдите те же пять значений. Приостановить видео"
    ]
  },
  {
    "time": [
      1744.559,
      1756.58
    ],
    "en": [
      "to find the answer. Okay, so the network address is 155.200.0.0 The"
    ],
    "ru": [
      "чтобы найти ответ. Итак, сетевой адрес 155.200.0.0."
    ]
  },
  {
    "time": [
      1756.58,
      1765.69
    ],
    "en": [
      "maximum number of hosts is 65,534 which is 2 to the power of 16, minus 2. The network"
    ],
    "ru": [
      "максимальное количество хостов - 65 534, что равно 2 в степени 16 минус 2. Сеть"
    ]
  },
  {
    "time": [
      1765.69,
      1777.25
    ],
    "en": [
      "broadcast address is 155.200.255.255. The first usable address is 155.200.0.1, and the"
    ],
    "ru": [
      "широковещательный адрес 155.200.255.255. Первый используемый адрес - 155.200.0.1, а"
    ]
  },
  {
    "time": [
      1777.25,
      1783.28
    ],
    "en": [
      "last usable address is 155.200.255.254."
    ],
    "ru": [
      "последний используемый адрес - 155.200.255.254."
    ]
  },
  {
    "time": [
      1783.28,
      1789.51
    ],
    "en": [
      "Okay, that’s all for the quiz. Hopefully you feel confident in determining the network"
    ],
    "ru": [
      "Ладно, это все для викторины. Надеюсь, вы чувствуете себя уверенно в определении сети"
    ]
  },
  {
    "time": [
      1789.51,
      1795.44
    ],
    "en": [
      "address, maximum hosts, broadcast address, and the first and last usable addresses of"
    ],
    "ru": [
      "адрес, максимальное количество хостов, широковещательный адрес, а также первый и последний используемые адреса"
    ]
  },
  {
    "time": [
      1795.44,
      1801.529
    ],
    "en": [
      "a network. As usual, there will be supplementary materials to help you practice and remember"
    ],
    "ru": [
      "сеть. Как обычно, будут дополнительные материалы, которые помогут вам попрактиковаться и запомнить"
    ]
  },
  {
    "time": [
      1801.529,
      1807.11
    ],
    "en": [
      "what you’ve learned. There will be review flash cards using the Anki software, check"
    ],
    "ru": [
      "что вы узнали. Будет обзор флешек с помощью софта Anki, проверьте"
    ]
  },
  {
    "time": [
      1807.11,
      1812.891
    ],
    "en": [
      "the link in the description. There will also be a practice lab using packet tracer, so"
    ],
    "ru": [
      "ссылка в описании. Также будет практическая лаборатория с использованием средства трассировки пакетов, поэтому"
    ]
  },
  {
    "time": [
      1812.891,
      1820.61
    ],
    "en": [
      "you can try out the CLI commands we learned in this video. Good luck with your studies."
    ],
    "ru": [
      "вы можете опробовать команды интерфейса командной строки, которые мы узнали в этом видео. Удачи в учебе."
    ]
  },
  {
    "time": [
      1820.61,
      1825.46
    ],
    "en": [
      "Thank you for watching. Please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "Спасибо за просмотр. Подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      1825.46,
      1830.57
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
      1830.57,
      1836.09
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
      1836.09,
      1836.09
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  }
]