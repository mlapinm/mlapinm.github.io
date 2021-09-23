let objs = [
  {
    "time": [
      1.14,
      7.23
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
      7.23,
      12.67
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
      12.67,
      18.77
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
      18.77,
      24.749
    ],
    "en": [
      "help. In this we will be talking about ‘subnetting’. This is a very big topic for the CCNA, but"
    ],
    "ru": [
      "помощь. Здесь мы будем говорить о «подсетях». Это очень большая тема для CCNA, но"
    ]
  },
  {
    "time": [
      24.749,
      29.9
    ],
    "en": [
      "not just for the test, it’s an essential skill for a network engineer. Many people"
    ],
    "ru": [
      "не только для теста, это важный навык для сетевого инженера. Много людей"
    ]
  },
  {
    "time": [
      29.9,
      35.591
    ],
    "en": [
      "have trouble understanding subnetting, but let me assure you, it is NOT difficult. Subnetting"
    ],
    "ru": [
      "есть проблемы с пониманием подсетей, но позвольте мне вас заверить, это НЕ сложно. Подсети"
    ]
  },
  {
    "time": [
      35.591,
      41.809
    ],
    "en": [
      "is very simple if you take it step-by-step. So, I’m going to split subnetting into 2"
    ],
    "ru": [
      "очень просто, если делать это шаг за шагом. Итак, я собираюсь разделить подсети на 2"
    ]
  },
  {
    "time": [
      41.809,
      46.879
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
      41.809,
      46.879
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
      46.879,
      52.61
    ],
    "en": [
      "getting lost. Now, because subnetting is such an important topic and many people have trouble"
    ],
    "ru": [
      "заблудиться. Теперь, поскольку разбиение на подсети - такая важная тема, и у многих возникают проблемы"
    ]
  },
  {
    "time": [
      52.61,
      58.26
    ],
    "en": [
      "with it, there are already plenty of subnetting videos on youtube. Of course feel free to"
    ],
    "ru": [
      "с его помощью на YouTube уже есть много видео с разделением на подсети. Конечно не стесняйтесь"
    ]
  },
  {
    "time": [
      58.26,
      62.92
    ],
    "en": [
      "check out those videos too, there are some different tricks and techniques people teach"
    ],
    "ru": [
      "посмотрите и эти видео, есть несколько разных приемов и техник, которым люди учат"
    ]
  },
  {
    "time": [
      62.92,
      68.21000000000001
    ],
    "en": [
      "that can speed up the subnetting process. I, however, will simply outline the basic"
    ],
    "ru": [
      "это может ускорить процесс разделения на подсети. Я, однако, просто обрисую основные"
    ]
  },
  {
    "time": [
      68.21000000000001,
      74.31
    ],
    "en": [
      "steps involved in subnetting, I will avoid over-complicating the topic. My end"
    ],
    "ru": [
      "шаги, связанные с разделением на подсети, я не буду чрезмерно усложнять тему. Мой конец"
    ]
  },
  {
    "time": [
      74.31,
      80.43
    ],
    "en": [
      "goal for these videos is that you understand and can do subnetting. So let’s get started."
    ],
    "ru": [
      "Цель этих видеороликов состоит в том, чтобы вы понимали и умеете разбиение на подсети. Итак, приступим."
    ]
  },
  {
    "time": [
      80.43,
      88.02
    ],
    "en": [
      "So, what will we cover in this video? Only a couple things. First is C I D R, pronounced"
    ],
    "ru": [
      "Итак, что мы расскажем в этом видео? Всего пара вещей. Первый - C I D R, произносится"
    ]
  },
  {
    "time": [
      88.02,
      95.42
    ],
    "en": [
      "CIDR, which stands for classless inter-domain routing. What exactly is that? Well, remember"
    ],
    "ru": [
      "CIDR, что означает бесклассовую междоменную маршрутизацию. Что именно? Ну помни"
    ]
  },
  {
    "time": [
      95.42,
      102.61
    ],
    "en": [
      "I introduced the IPv4 address classes, such as class A, B, and C? Well, CIDR throws all"
    ],
    "ru": [
      "Я представил классы адресов IPv4, такие как класс A, B и C? Ну CIDR все бросает"
    ]
  },
  {
    "time": [
      102.61,
      108.75
    ],
    "en": [
      "that away and lets us be more flexible with our IPv4 networks. Then, of course, we’ll"
    ],
    "ru": [
      "от этого и позволяет нам быть более гибкими с нашими сетями IPv4. Тогда, конечно, мы"
    ]
  },
  {
    "time": [
      108.75,
      114.369
    ],
    "en": [
      "cover the process of subnetting, taking it step-by-step so you don’t get lost."
    ],
    "ru": [
      "охватите процесс разбиения на подсети, сделав его пошагово, чтобы не заблудиться."
    ]
  },
  {
    "time": [
      114.369,
      120.009
    ],
    "en": [
      "Now, before I get into CIDR, let’s review these IPv4 address classes, so we can then"
    ],
    "ru": [
      "Теперь, прежде чем я перейду к CIDR, давайте рассмотрим эти классы адресов IPv4, чтобы мы могли"
    ]
  },
  {
    "time": [
      120.009,
      126.909
    ],
    "en": [
      "understand the need for classLESS IPv4 addressing. There are five classes of IPv4 addresses,"
    ],
    "ru": [
      "понимать необходимость БЕСКлассовой адресации IPv4. Существует пять классов адресов IPv4,"
    ]
  },
  {
    "time": [
      126.909,
      134.8
    ],
    "en": [
      "A, B, C, D, and E. Class A addresses have a first octet beginning with 0, and the rest"
    ],
    "ru": [
      "A, B, C, D и E. Адреса класса A имеют первый октет, начинающийся с 0, а остальные"
    ]
  },
  {
    "time": [
      134.8,
      140.48
    ],
    "en": [
      "of the bits can either be 0 or 1. This leads to a decimal range for the first octet of"
    ],
    "ru": [
      "битов может быть 0 или 1. Это приводит к десятичному диапазону для первого октета"
    ]
  },
  {
    "time": [
      140.48,
      149.25
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
      140.48,
      149.25
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
      149.25,
      162.18
    ],
    "en": [
      "bits, in an IPv4 address. This makes the class A address range from 0.0.0.0 through 127.255.255.255."
    ],
    "ru": [
      "биты в IPv4-адресе. Это делает диапазон адресов класса A от 0.0.0.0 до 127.255.255.255."
    ]
  },
  {
    "time": [
      162.18,
      166.96
    ],
    "en": [
      "Now, remember there are some special and reserved addresses in these ranges that can’t be"
    ],
    "ru": [
      "Помните, что в этих диапазонах есть специальные и зарезервированные адреса, которые нельзя"
    ]
  },
  {
    "time": [
      166.96,
      172.06
    ],
    "en": [
      "used for normal IP addresses on a device, but for this video we’ll just include all"
    ],
    "ru": [
      "используется для обычных IP-адресов на устройстве, но для этого видео мы просто включим все"
    ]
  },
  {
    "time": [
      172.06,
      179.51
    ],
    "en": [
      "of them in Class A. Class B addresses have a first octet beginning with 1 0 , and the"
    ],
    "ru": [
      "из них в классе A. Адреса класса B имеют первый октет, начинающийся с 1 0, а"
    ]
  },
  {
    "time": [
      179.51,
      186.56
    ],
    "en": [
      "other 6 bits can be either 0 or 1. This gives a range for the first octet of 128 through"
    ],
    "ru": [
      "остальные 6 битов могут быть 0 или 1. Это дает диапазон для первого октета от 128 до"
    ]
  },
  {
    "time": [
      186.56,
      198.75
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
      186.56,
      198.75
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
      198.75,
      205.019
    ],
    "en": [
      "have the first three bits set to 1 1 0, and the others can be either 0 or 1. If you write"
    ],
    "ru": [
      "установить первые три бита в 1 1 0, а остальные могут быть равны 0 или 1. Если вы напишете"
    ]
  },
  {
    "time": [
      205.019,
      213.53
    ],
    "en": [
      "that range in decimal that is 192 through 223. The address range is therefore 192.0.0.0"
    ],
    "ru": [
      "этот диапазон в десятичном формате - от 192 до 223. Следовательно, диапазон адресов - 192.0.0.0."
    ]
  },
  {
    "time": [
      213.53,
      222.75
    ],
    "en": [
      "through 223.255.255.255. Class D addresses begin with 1 1 1 0 in binary, which gives"
    ],
    "ru": [
      "через 223.255.255.255. Адреса класса D начинаются с 1 1 1 0 в двоичном формате, что дает"
    ]
  },
  {
    "time": [
      222.75,
      229.709
    ],
    "en": [
      "a range of 224 through 239 for the first octet of the address. This means that the address range"
    ],
    "ru": [
      "диапазон от 224 до 239 для первого октета адреса. Это означает, что диапазон адресов"
    ]
  },
  {
    "time": [
      229.709,
      242.0
    ],
    "en": [
      "for class D is 224.0.0.0 through 239.255.255.255. Finally, class E address begin with 1 1 1 1"
    ],
    "ru": [
      "для класса D - от 224.0.0.0 до 239.255.255.255. Наконец, адрес класса E начинается с 1 1 1 1"
    ]
  },
  {
    "time": [
      242.0,
      254.09
    ],
    "en": [
      "in binary, so the first octet range is 240 through 255, and therefore the address range is 240.0.0.0 through 255.255.255.255."
    ],
    "ru": [
      "в двоичном формате, поэтому диапазон первого октета составляет от 240 до 255, и, следовательно, диапазон адресов составляет от 240.0.0.0 до 255.255.255.255."
    ]
  },
  {
    "time": [
      254.09,
      261.97
    ],
    "en": [
      "through 255.255.255.255. However, only the class A, B and C addresses can be assigned to a device as an IP address,"
    ],
    "ru": [
      "через 255.255.255.255. Однако только адреса класса A, B и C могут быть назначены устройству в качестве IP-адреса,"
    ]
  },
  {
    "time": [
      261.97,
      268.68
    ],
    "en": [
      "as classes D and E have special purposes I mentioned in the IPv4 addressing videos. Class"
    ],
    "ru": [
      "поскольку классы D и E имеют особые цели, я упоминал в видеороликах об адресации IPv4. Класс"
    ]
  },
  {
    "time": [
      268.68,
      274.55
    ],
    "en": [
      "A addresses have a /8 prefix length, meaning the first octet identifies the network and"
    ],
    "ru": [
      "Адреса имеют длину префикса / 8, что означает, что первый октет идентифицирует сеть и"
    ]
  },
  {
    "time": [
      274.55,
      280.2
    ],
    "en": [
      "the other three octets are used for individual hosts within the network. Class B addresses"
    ],
    "ru": [
      "остальные три октета используются для отдельных хостов в сети. Адреса класса B"
    ]
  },
  {
    "time": [
      280.2,
      285.53
    ],
    "en": [
      "have a /16 prefix length, so the first two octets identify the network, and the last"
    ],
    "ru": [
      "имеют длину префикса / 16, поэтому первые два октета идентифицируют сеть, а последний"
    ]
  },
  {
    "time": [
      285.53,
      291.61
    ],
    "en": [
      "two octets identify individual hosts within that network. Class C addresses have a prefix"
    ],
    "ru": [
      "два октета идентифицируют отдельные хосты в этой сети. Адреса класса C имеют префикс"
    ]
  },
  {
    "time": [
      291.61,
      297.6
    ],
    "en": [
      "length of /24, so the first three octets are used to identify the network, and only the"
    ],
    "ru": [
      "длина / 24, поэтому первые три октета используются для идентификации сети, и только"
    ]
  },
  {
    "time": [
      297.6,
      303.34
    ],
    "en": [
      "last octet is used to identify individual hosts within that network."
    ],
    "ru": [
      "последний октет используется для идентификации отдельных хостов в этой сети."
    ]
  },
  {
    "time": [
      303.34,
      308.28
    ],
    "en": [
      "The different prefix lengths give different characteristics to these classes. As you can"
    ],
    "ru": [
      "Различная длина префикса придает этим классам разные характеристики. Как вы можете"
    ]
  },
  {
    "time": [
      308.28,
      314.13
    ],
    "en": [
      "see, there are few class A networks available, only 128, actually less than that because"
    ],
    "ru": [
      "видите, есть несколько доступных сетей класса A, только 128, на самом деле меньше, потому что"
    ]
  },
  {
    "time": [
      314.13,
      321.28
    ],
    "en": [
      "some are reserved, like the 127.0.0.0/8 range, which you may remember is used for loopback"
    ],
    "ru": [
      "некоторые зарезервированы, например, диапазон 127.0.0.0/8, который, как вы помните, используется для обратной связи"
    ]
  },
  {
    "time": [
      321.28,
      326.35
    ],
    "en": [
      "addresses. Because only the first octet of a class A address is used for the network"
    ],
    "ru": [
      "адреса. Поскольку для сети используется только первый октет адреса класса A"
    ]
  },
  {
    "time": [
      326.35,
      332.04
    ],
    "en": [
      "ID, there are three whole octets available for addresses within each class A network,"
    ],
    "ru": [
      "ID, для адресов в каждой сети класса A доступно три полных октета,"
    ]
  },
  {
    "time": [
      332.04,
      340.40999999999997
    ],
    "en": [
      "so there are 16 million, 777 thousand, 216 addresses in each class A network. That is"
    ],
    "ru": [
      "Таким образом, в каждой сети класса A 16 миллионов 777 тысяч 216 адресов. То есть"
    ]
  },
  {
    "time": [
      340.40999999999997,
      348.22
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
      340.40999999999997,
      348.22
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
      348.22,
      355.27
    ],
    "en": [
      "addresses are different, there more class B networks, 16,384, but fewer addresses per"
    ],
    "ru": [
      "адреса разные, сетей класса B больше, 16 384, но меньше адресов на"
    ]
  },
  {
    "time": [
      355.27,
      363.25
    ],
    "en": [
      "network, 65,536, which is still very many addresses of course. Finally, there are very"
    ],
    "ru": [
      "сеть, 65 536, а это, конечно, еще очень много адресов. Наконец, есть очень"
    ]
  },
  {
    "time": [
      363.25,
      372.85
    ],
    "en": [
      "many class C networks, 2 million 97 thousand 152 networks, but only 256 addresses per network."
    ],
    "ru": [
      "много сетей класса C, 2 миллиона 97 тысяч 152 сети, но только 256 адресов на сеть."
    ]
  },
  {
    "time": [
      372.85,
      379.85
    ],
    "en": [
      "So, how does a company get their own network to use? Well, IP addresses are assigned to"
    ],
    "ru": [
      "Итак, как компания может использовать свою собственную сеть? Ну а IP-адреса присвоены"
    ]
  },
  {
    "time": [
      379.85,
      386.25
    ],
    "en": [
      "companies or organizations by a non-profit American corporation called the IANA, the"
    ],
    "ru": [
      "компании или организации некоммерческой американской корпорации IANA,"
    ]
  },
  {
    "time": [
      386.25,
      392.85
    ],
    "en": [
      "Internet Assigned Numbers Authority. The IANA assigns IPv4 address and networks to companies"
    ],
    "ru": [
      "Управление по присвоению номеров в Интернете. IANA назначает IPv4-адреса и сети компаниям."
    ]
  },
  {
    "time": [
      392.85,
      399.15999999999997
    ],
    "en": [
      "based on their size. For example, a very large company might receive a Class A or Class B"
    ],
    "ru": [
      "в зависимости от их размера. Например, очень крупная компания может получить класс A или класс B."
    ]
  },
  {
    "time": [
      399.15999999999997,
      404.37
    ],
    "en": [
      "network, remember there are lots of available addresses to use for hosts in each class A"
    ],
    "ru": [
      "сети, помните, что есть много доступных адресов для использования для хостов в каждом классе A"
    ]
  },
  {
    "time": [
      404.37,
      409.90999999999997
    ],
    "en": [
      "and class B network, while a small company might receive a class C network, because there"
    ],
    "ru": [
      "и сеть класса B, в то время как небольшая компания может получить сеть класса C, потому что там"
    ]
  },
  {
    "time": [
      409.90999999999997,
      416.81
    ],
    "en": [
      "are fewer addresses in each class C network, only 256. However, this system led to many"
    ],
    "ru": [
      "меньше адресов в каждой сети класса C, только 256. Однако эта система привела к тому, что многие"
    ]
  },
  {
    "time": [
      416.81,
      422.881
    ],
    "en": [
      "wasted IP addresses, so multiple methods of improving this system have been created. Let"
    ],
    "ru": [
      "потраченные впустую IP-адреса, поэтому было создано несколько методов улучшения этой системы. Позволять"
    ]
  },
  {
    "time": [
      422.881,
      428.68
    ],
    "en": [
      "me give you an example of how this strict system of addresses can waste IP addresses."
    ],
    "ru": [
      "Я приведу вам пример того, как эта строгая система адресов может тратить впустую IP-адреса."
    ]
  },
  {
    "time": [
      428.68,
      435.82
    ],
    "en": [
      "So, here are two routers. As you can see, R1 has three networks connected to it here."
    ],
    "ru": [
      "Итак, вот два роутера. Как видите, к R1 подключены три сети."
    ]
  },
  {
    "time": [
      435.82,
      440.91
    ],
    "en": [
      "Remember that routers are used to connect different networks, so each of these links are separate"
    ],
    "ru": [
      "Помните, что маршрутизаторы используются для подключения разных сетей, поэтому каждая из этих ссылок является отдельной."
    ]
  },
  {
    "time": [
      440.91,
      448.28
    ],
    "en": [
      "Layer 3 networks, different IP networks. R2 also has three networks connected here. Perhaps"
    ],
    "ru": [
      "Сети уровня 3, разные IP-сети. R2 также имеет три подключенных сюда сети. Возможно"
    ]
  },
  {
    "time": [
      448.28,
      453.3
    ],
    "en": [
      "each of these networks will have a few switches, with many end hosts such as PCs and servers"
    ],
    "ru": [
      "каждая из этих сетей будет иметь несколько коммутаторов со многими конечными хостами, такими как ПК и серверы."
    ]
  },
  {
    "time": [
      453.3,
      459.65
    ],
    "en": [
      "connected to these switches. However, there is one more network here. That’s this network"
    ],
    "ru": [
      "подключен к этим переключателям. Однако здесь есть еще одна сеть. Это эта сеть"
    ]
  },
  {
    "time": [
      459.65,
      465.29
    ],
    "en": [
      "connecting these two routers. This is known as a ‘point-to-point’ network, meaning"
    ],
    "ru": [
      "соединяя эти два роутера. Это известно как сеть «точка-точка», что означает"
    ]
  },
  {
    "time": [
      465.29,
      471.591
    ],
    "en": [
      "that its a network connecting two points, in this case R1 and R2. For example, this"
    ],
    "ru": [
      "что это сеть, соединяющая две точки, в данном случае R1 и R2. Например, это"
    ]
  },
  {
    "time": [
      471.591,
      478.54
    ],
    "en": [
      "might be a connection between offices in different cities, let’s say San francisco and new york."
    ],
    "ru": [
      "может быть связью между офисами в разных городах, скажем, в Сан-Франциско и Нью-Йорке."
    ]
  },
  {
    "time": [
      478.54,
      484.9
    ],
    "en": [
      "york. So, because this is a point-to-point network, we don’t need a large address block, so"
    ],
    "ru": [
      "Йорк. Так как это сеть точка-точка, нам не нужен большой блок адресов, поэтому"
    ]
  },
  {
    "time": [
      484.9,
      494.02
    ],
    "en": [
      "let’s use a class C network, 203.0.113.0/24. Because this is a class C network, there are"
    ],
    "ru": [
      "давайте использовать сеть класса C, 203.0.113.0/24. Поскольку это сеть класса C, есть"
    ]
  },
  {
    "time": [
      494.02,
      502.62
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
      494.02,
      502.62
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
      502.62,
      510.74
    ],
    "en": [
      "for the broadcast address, 203.0.113.255, minus one for R1’s address, which I’ll"
    ],
    "ru": [
      "для широковещательного адреса, 203.0.113.255, минус один для адреса R1, который я"
    ]
  },
  {
    "time": [
      510.74,
      520.3
    ],
    "en": [
      "assign as 203.0.113.1, and minus 1 for R2’s address, which I’ll assign as 203.0.113.2."
    ],
    "ru": [
      "назначьте как 203.0.113.1 и минус 1 для адреса R2, который я назначу как 203.0.113.2."
    ]
  },
  {
    "time": [
      520.3,
      530.84
    ],
    "en": [
      "That’s a total of 4 addresses used, and 252 addresses WASTED. Clearly, this is not an ideal system."
    ],
    "ru": [
      "Всего использовано 4 адреса, а 252 адреса ИСХОДЯТ. Ясно, что это не идеальная система."
    ]
  },
  {
    "time": [
      530.84,
      536.98
    ],
    "en": [
      "an ideal system. Before introducing CIDR, here’s another quick example of address waste. A company,"
    ],
    "ru": [
      "идеальная система. Перед тем, как представить CIDR, рассмотрим еще один быстрый пример потери адресов. Компания,"
    ]
  },
  {
    "time": [
      536.98,
      545.31
    ],
    "en": [
      "company X, needs IP addressing for 5000 end hosts. This is a problem. Why? A class C network"
    ],
    "ru": [
      "компании X требуется IP-адресация для 5000 конечных хостов. Это проблема. Почему? Сеть класса C"
    ]
  },
  {
    "time": [
      545.31,
      551.14
    ],
    "en": [
      "does not provide enough addresses, so a class B network must be assigned. Because a class"
    ],
    "ru": [
      "не предоставляет достаточно адресов, поэтому должна быть назначена сеть класса B. Потому что класс"
    ]
  },
  {
    "time": [
      551.14,
      559.61
    ],
    "en": [
      "B network allows for about 65,000 addresses, this results in about 60,000 addresses being wasted."
    ],
    "ru": [
      "Сеть B позволяет использовать около 65 000 адресов, в результате чего теряется около 60 000 адресов."
    ]
  },
  {
    "time": [
      559.61,
      563.97
    ],
    "en": [
      "wasted. When the Internet was first created, the creators did not predict that the Internet would become"
    ],
    "ru": [
      "потрачено. Когда Интернет был впервые создан, создатели не предсказывали, что Интернет станет"
    ]
  },
  {
    "time": [
      563.97,
      570.15
    ],
    "en": [
      "as large as it is today. This resulted in wasted address space like the examples I showed"
    ],
    "ru": [
      "такой же большой, как сегодня. Это привело к потере адресного пространства впустую, как в приведенных мной примерах."
    ]
  },
  {
    "time": [
      570.15,
      575.89
    ],
    "en": [
      "you, and there are many more examples that I could show you. The total IPv4 address space"
    ],
    "ru": [
      "вы, и есть еще много примеров, которые я мог бы вам показать. Общее адресное пространство IPv4"
    ]
  },
  {
    "time": [
      575.89,
      580.97
    ],
    "en": [
      "includes over 4 billion addresses, and that seemed like a huge number of addresses when"
    ],
    "ru": [
      "включает более 4 миллиардов адресов, и это казалось огромным количеством адресов, когда"
    ]
  },
  {
    "time": [
      580.97,
      592.06
    ],
    "en": [
      "IPv4 was created, but now address space exhaustion is a big problem, there's not enough addresses. One way to solve, or remedy this is"
    ],
    "ru": [
      "IPv4 был создан, но сейчас исчерпание адресного пространства - большая проблема, не хватает адресов. Один из способов решить эту проблему или исправить это -"
    ]
  },
  {
    "time": [
      592.06,
      600.19
    ],
    "en": [
      "CIDR. The IETF (Internet Engineering Task Force) introduced CIDR in 1993 to replace"
    ],
    "ru": [
      "CIDR. IETF (Internet Engineering Task Force) представила CIDR в 1993 году, чтобы заменить"
    ]
  },
  {
    "time": [
      600.19,
      603.76
    ],
    "en": [
      "the ‘classful’ addressing system."
    ],
    "ru": [
      "«классная» система адресации."
    ]
  },
  {
    "time": [
      603.76,
      610.311
    ],
    "en": [
      "With CIDR, the requirements of ‘class A address must use a /8 network mask, class"
    ],
    "ru": [
      "При использовании CIDR требования к адресу класса A должны использовать сетевую маску / 8, класс"
    ]
  },
  {
    "time": [
      610.311,
      618.19
    ],
    "en": [
      "B must use /16, and class C must use /24’ were removed. This allowed larger networks"
    ],
    "ru": [
      "B должен использовать / 16, а класс C должен использовать / 24 ’были удалены. Это позволило более крупным сетям"
    ]
  },
  {
    "time": [
      618.19,
      624.27
    ],
    "en": [
      "to be split into smaller networks, allowing greater efficiency. These smaller networks"
    ],
    "ru": [
      "разделение на более мелкие сети для повышения эффективности. Эти небольшие сети"
    ]
  },
  {
    "time": [
      624.27,
      629.34
    ],
    "en": [
      "are called ‘subnetworks’ or ‘subnets’. Let’s look at an example of splitting a"
    ],
    "ru": [
      "называются «подсетями» или «подсетями». Давайте посмотрим на пример разделения"
    ]
  },
  {
    "time": [
      629.34,
      633.99
    ],
    "en": [
      "larger network into a smaller network so you can see how it works."
    ],
    "ru": [
      "большую сеть в меньшую сеть, чтобы вы могли увидеть, как это работает."
    ]
  },
  {
    "time": [
      633.99,
      640.78
    ],
    "en": [
      "Here’s the same point-to-point network we looked at before. Previously, it was assigned"
    ],
    "ru": [
      "Вот та же сеть точка-точка, которую мы рассматривали ранее. Ранее ему было присвоено"
    ]
  },
  {
    "time": [
      640.78,
      648.64
    ],
    "en": [
      "the 203.0.113.0/24 network space, but that resulted in lots of wasted addresses. Let’s"
    ],
    "ru": [
      "сетевое пространство 203.0.113.0/24, но это привело к потере большого количества адресов. Давайте"
    ]
  },
  {
    "time": [
      648.64,
      655.83
    ],
    "en": [
      "write this out in binary. Here’s the binary, with the dotted decimal underneath. Now, the"
    ],
    "ru": [
      "запишите это в двоичном формате. Вот двоичный файл с десятичным разделителем под ним. Сейчас"
    ]
  },
  {
    "time": [
      655.83,
      664.68
    ],
    "en": [
      "prefix length is /24, so here’s the network mask, also known as the subnet mask, 255.255.255.0."
    ],
    "ru": [
      "длина префикса / 24, поэтому вот маска сети, также известная как маска подсети, 255.255.255.0."
    ]
  },
  {
    "time": [
      664.68,
      671.21
    ],
    "en": [
      "Remember, all ‘1s’ in the subnet mask indicate that the same bit in the address"
    ],
    "ru": [
      "Помните, что все «единицы» в маске подсети указывают, что один и тот же бит в адресе"
    ]
  },
  {
    "time": [
      671.21,
      676.85
    ],
    "en": [
      "is the network portion. In this case, I made the network portion blue, and the host portion"
    ],
    "ru": [
      "это сетевая часть. В этом случае я сделал часть сети синей, а часть хоста"
    ]
  },
  {
    "time": [
      676.85,
      686.381
    ],
    "en": [
      "is red. Well, how many host bits are there? 8, because it’s one octet. So, how many potential hosts, or how"
    ],
    "ru": [
      "красный. Ну сколько там битов хоста? 8, потому что это один октет. Итак, сколько потенциальных хостов или как"
    ]
  },
  {
    "time": [
      686.381,
      693.52
    ],
    "en": [
      "many usable addresses are there? Well, the formula is this. 2 to the power of 8, minus"
    ],
    "ru": [
      "много пригодных адресов есть? Что ж, формула такая. 2 в степени 8, минус"
    ]
  },
  {
    "time": [
      693.52,
      701.83
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
      693.52,
      701.83
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
      701.83,
      708.84
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
      701.83,
      708.84
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
      708.84,
      713.76
    ],
    "en": [
      "we can’t assign them to a device so we have to remove them from the number of usable addresses."
    ],
    "ru": [
      "мы не можем назначить их устройству, поэтому мы должны удалить их из числа используемых адресов."
    ]
  },
  {
    "time": [
      713.76,
      721.56
    ],
    "en": [
      "So, we have 254 usable addresses, but we only need two, one for R1 and one for R2."
    ],
    "ru": [
      "Итак, у нас есть 254 используемых адреса, но нам нужно только два: один для R1 и один для R2."
    ]
  },
  {
    "time": [
      721.56,
      729.2
    ],
    "en": [
      "However, CIDR allows us to assign different prefix lengths, it doesn’t have to be /24."
    ],
    "ru": [
      "Однако CIDR позволяет нам назначать разную длину префикса, не обязательно / 24."
    ]
  },
  {
    "time": [
      729.2,
      733.34
    ],
    "en": [
      "Let’s get some practice calculating the number of hosts with different prefix"
    ],
    "ru": [
      "Попрактикуемся в подсчете количества хостов с разными префиксами."
    ]
  },
  {
    "time": [
      733.34,
      754.21
    ],
    "en": [
      "lengths. 203.0.113.0/25. 203.0.113.0/26, 203.0.113.0/27, /28, /29, /30, /31, and finally /32. I’ve"
    ],
    "ru": [
      "длины. 203.0.113.0/25. 203.0.113.0/26, 203.0.113.0/27, / 28, / 29, / 30, / 31 и, наконец, / 32. Я"
    ]
  },
  {
    "time": [
      754.21,
      759.73
    ],
    "en": [
      "put /31 and /32 in red because they’re a little bit special, you’ll see when you"
    ],
    "ru": [
      "выделите / 31 и / 32 красным, потому что они немного особенные, вы увидите, когда"
    ]
  },
  {
    "time": [
      759.73,
      766.12
    ],
    "en": [
      "try to calculate it. So, pause the video here and try to calculate how many usable address"
    ],
    "ru": [
      "попробуй посчитать. Итак, остановите видео здесь и попробуйте подсчитать, сколько пригодных адресов"
    ]
  },
  {
    "time": [
      766.12,
      773.85
    ],
    "en": [
      "are in each network...okay, let’s check out the answers."
    ],
    "ru": [
      "есть в каждой сети ... хорошо, давайте посмотрим на ответы."
    ]
  },
  {
    "time": [
      773.85,
      781.72
    ],
    "en": [
      "So, here is 203.0.113.0, but this time with a /25 mask. Notice that the network portion"
    ],
    "ru": [
      "Итак, вот 203.0.113.0, но на этот раз с маской / 25. Обратите внимание, что сетевая часть"
    ]
  },
  {
    "time": [
      781.72,
      786.57
    ],
    "en": [
      "of the address has extended into the first bit of the last octet, and the mask"
    ],
    "ru": [
      "адреса расширилась до первого бита последнего октета, а маска"
    ]
  },
  {
    "time": [
      786.57,
      795.91
    ],
    "en": [
      "in dotted decimal is now written as 255.255.255.128. I changed the color of the extra bit to purple,"
    ],
    "ru": [
      "в десятичном формате с точками теперь записывается как 255.255.255.128. Я изменил цвет дополнительного бита на фиолетовый,"
    ]
  },
  {
    "time": [
      795.91,
      801.14
    ],
    "en": [
      "but it is part of the network portion, the blue part. If you don’t remember how to convert"
    ],
    "ru": [
      "но это часть сетевой части, синяя часть. Если вы не помните, как конвертировать"
    ]
  },
  {
    "time": [
      801.14,
      807.13
    ],
    "en": [
      "from binary to dotted decimal, make sure you review that, it’s very important for subnetting."
    ],
    "ru": [
      "от двоичного к десятичному с точками, убедитесь, что вы это проверили, это очень важно для разделения на подсети."
    ]
  },
  {
    "time": [
      807.13,
      811.52
    ],
    "en": [
      "Now there are 7 bits in the host portion of the address, so the number of usable addresses"
    ],
    "ru": [
      "Теперь в хостовой части адреса 7 бит, поэтому количество используемых адресов"
    ]
  },
  {
    "time": [
      811.52,
      820.28
    ],
    "en": [
      "is 2 to the power of 7, minus 2, which equals 126. Once again, we only need 2 addresses,"
    ],
    "ru": [
      "равно 2 в степени 7, минус 2, что равно 126. И снова нам нужно всего 2 адреса,"
    ]
  },
  {
    "time": [
      820.28,
      827.29
    ],
    "en": [
      "one for R1 and one for R2, so we will be wasting 124 addresses. That’s better than wasting"
    ],
    "ru": [
      "один для R1 и один для R2, ​​поэтому мы потратим 124 адреса. Это лучше, чем тратить впустую"
    ]
  },
  {
    "time": [
      827.29,
      833.89
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
      827.29,
      833.89
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
      833.89,
      842.16
    ],
    "en": [
      "How about a /26 prefix length? Notice that it’s now written 255.255.255.192 in dotted"
    ],
    "ru": [
      "Как насчет длины префикса / 26? Обратите внимание, что теперь оно написано с точками: 255.255.255.192."
    ]
  },
  {
    "time": [
      842.16,
      848.351
    ],
    "en": [
      "decimal, because two bits of the last octet are now part of the network portion. Since"
    ],
    "ru": [
      "десятичный, потому что два бита последнего октета теперь являются частью сетевой части. С"
    ]
  },
  {
    "time": [
      848.351,
      854.94
    ],
    "en": [
      "there are 6 host bits, there are now 62 usable addresses in this network. If we were to use"
    ],
    "ru": [
      "есть 6 бит хоста, теперь в этой сети 62 используемых адреса. Если бы мы использовали"
    ]
  },
  {
    "time": [
      854.94,
      863.64
    ],
    "en": [
      "a /26 network mask for the 203.0.113.0 network, we would be wasting 60 addresses. Getting"
    ],
    "ru": [
      "a / 26 для сети 203.0.113.0, мы бы потратили 60 адресов. Получающий"
    ]
  },
  {
    "time": [
      863.64,
      867.73
    ],
    "en": [
      "better, but we can make this network even smaller."
    ],
    "ru": [
      "лучше, но мы можем сделать эту сеть еще меньше."
    ]
  },
  {
    "time": [
      867.73,
      873.69
    ],
    "en": [
      "Now that you get the idea, let’s speed it up. For a /27 prefix length, the mask is written"
    ],
    "ru": [
      "Теперь, когда вы поняли идею, давайте ускорим ее. Для длины префикса / 27 маска записывается"
    ]
  },
  {
    "time": [
      873.69,
      882.66
    ],
    "en": [
      "as 255.255.255.224 in dotted decimal. There are now 5 host bits, so that means there are"
    ],
    "ru": [
      "как 255.255.255.224 в десятичном формате с точками. Теперь есть 5 бит хоста, это означает, что есть"
    ]
  },
  {
    "time": [
      882.66,
      890.65
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
      882.66,
      890.65
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
      890.65,
      900.921
    ],
    "en": [
      "network mask. For a /28 prefix length, the mask is written as 255.255.255.240 in dotted decimal. There"
    ],
    "ru": [
      "маска сети. Для длины префикса / 28 маска записывается как 255.255.255.240 в десятичном формате с точками. Там"
    ]
  },
  {
    "time": [
      900.921,
      908.18
    ],
    "en": [
      "are now only 4 host bits, so that means there are 14 usable addresses. After assigning addresses"
    ],
    "ru": [
      "теперь всего 4 бита хоста, что означает, что имеется 14 используемых адресов. После присвоения адресов"
    ]
  },
  {
    "time": [
      908.18,
      914.5
    ],
    "en": [
      "to R1 and R2 this would mean only 12 wasted addresses. But we can make this address space"
    ],
    "ru": [
      "для R1 и R2 это будет означать только 12 потраченных впустую адресов. Но мы можем сделать это адресное пространство"
    ]
  },
  {
    "time": [
      914.5,
      919.68
    ],
    "en": [
      "even smaller, to make our addressing even more efficient."
    ],
    "ru": [
      "даже меньше, чтобы сделать нашу адресацию еще более эффективной."
    ]
  },
  {
    "time": [
      919.68,
      928.33
    ],
    "en": [
      "If we use a /29 prefix length, the mask is written as 255.255.255.248 in dotted decimal."
    ],
    "ru": [
      "Если мы используем длину префикса / 29, маска записывается как 255.255.255.248 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      928.33,
      934.92
    ],
    "en": [
      "Now we have only 3 host bits, so that means there are just 6 usable addresses. Again,"
    ],
    "ru": [
      "Теперь у нас есть только 3 бита хоста, а это значит, что есть только 6 используемых адресов. Опять таки,"
    ]
  },
  {
    "time": [
      934.92,
      941.51
    ],
    "en": [
      "after we give R1 and R2 addresses there would be only 4 wasted addresses."
    ],
    "ru": [
      "после того, как мы дадим адреса R1 и R2, останется только 4 потраченных впустую адреса."
    ]
  },
  {
    "time": [
      941.51,
      950.14
    ],
    "en": [
      "If we use a /30 prefix length, the mask is written as 255.255.255.252 in dotted decimal."
    ],
    "ru": [
      "Если мы используем длину префикса / 30, маска записывается как 255.255.255.252 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      950.14,
      956.921
    ],
    "en": [
      "There are now only 2 host bits, so that means 2 usable addresses. So, this is perfect! There"
    ],
    "ru": [
      "Теперь есть только 2 бита хоста, что означает 2 используемых адреса. Итак, это прекрасно! Там"
    ]
  },
  {
    "time": [
      956.921,
      963.06
    ],
    "en": [
      "are 4 total addresses, that's the network address, the broadcast address, R1’s address, and"
    ],
    "ru": [
      "всего 4 адреса, это сетевой адрес, широковещательный адрес, адрес R1 и"
    ]
  },
  {
    "time": [
      963.06,
      967.899
    ],
    "en": [
      "R2’s address. That means 0 wasted addresses!"
    ],
    "ru": [
      "Адрес R2. Это означает 0 потраченных впустую адресов!"
    ]
  },
  {
    "time": [
      967.899,
      979.15
    ],
    "en": [
      "Before moving on to /31 and /32 let me clarify a little bit. So, instead of 203.0.113.0/24,"
    ],
    "ru": [
      "Прежде чем перейти к / 31 и / 32, позвольте мне немного уточнить. Итак, вместо 203.0.113.0/24,"
    ]
  },
  {
    "time": [
      979.15,
      990.17
    ],
    "en": [
      "we will use 203.0.113.0/30, which is a subnet of that larger class C network. 203.0.113.0/30"
    ],
    "ru": [
      "мы будем использовать 203.0.113.0/30, который является подсетью более крупной сети класса C. 203.0.113.0/30"
    ]
  },
  {
    "time": [
      990.17,
      998.0889999999999
    ],
    "en": [
      "includes the address range of 203.0.113.0 through 203.0.113.3. Let me show you that"
    ],
    "ru": [
      "включает диапазон адресов от 203.0.113.0 до 203.0.113.3. Позвольте мне показать вам это"
    ]
  },
  {
    "time": [
      998.0889999999999,
      1010.42
    ],
    "en": [
      "in binary. Here is 203.0.113.0 in binary, the host portion all 0s. Here is 203.0.113.1,"
    ],
    "ru": [
      "в двоичном формате. Вот 203.0.113.0 в двоичном формате, в части хоста все нули. Вот 203.0.113.1,"
    ]
  },
  {
    "time": [
      1010.42,
      1020.38
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
      1010.42,
      1020.38
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
      1020.38,
      1027.351
    ],
    "en": [
      "the two usable addresses which are assigned to R1 and R2. So we took up 4 addresses with"
    ],
    "ru": [
      "два используемых адреса, присвоенные R1 и R2. Итак, мы взяли 4 адреса с"
    ]
  },
  {
    "time": [
      1027.351,
      1034.88
    ],
    "en": [
      "this subnet, what about the other addresses in the 203.0.113.0/24 range? The remaining"
    ],
    "ru": [
      "в этой подсети, как насчет других адресов в диапазоне 203.0.113.0/24? Остальные"
    ]
  },
  {
    "time": [
      1034.88,
      1044.709
    ],
    "en": [
      "addresses in the address block, which are 203.0.113.4 – 203.0.113.255, are now available"
    ],
    "ru": [
      "адреса в адресном блоке, которые являются 203.0.113.4 - 203.0.113.255, теперь доступны"
    ]
  },
  {
    "time": [
      1044.709,
      1053.559
    ],
    "en": [
      "to be used in other subnets! That’s the magic of subnetting. Instead of using 203.0.113.0/24"
    ],
    "ru": [
      "для использования в других подсетях! В этом волшебство разбиения на подсети. Вместо использования 203.0.113.0/24"
    ]
  },
  {
    "time": [
      1053.559,
      1062.48
    ],
    "en": [
      "and wasting 252 addresses, we can use /30 and waste no addresses. Or, perhaps there is another"
    ],
    "ru": [
      "и тратя впустую 252 адреса, мы можем использовать / 30 и не тратить впустую адреса. Или, может быть, есть еще один"
    ]
  },
  {
    "time": [
      1062.48,
      1067.34
    ],
    "en": [
      "way to make this even more efficient? Let’s look into it."
    ],
    "ru": [
      "способ сделать это еще более эффективным? Давай посмотрим."
    ]
  },
  {
    "time": [
      1067.34,
      1077.01
    ],
    "en": [
      "If we use a /31 prefix length, the mask is written as 255.255.255.254 in dotted decimal."
    ],
    "ru": [
      "Если мы используем длину префикса / 31, маска записывается как 255.255.255.254 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      1077.01,
      1086.1
    ],
    "en": [
      "There is now only 1 host bit, so that means...0 usable addresses. 2 to the power of 1 is 2,"
    ],
    "ru": [
      "Теперь имеется только 1 бит хоста, так что это означает ... 0 доступных адресов. 2 в степени 1 равно 2,"
    ]
  },
  {
    "time": [
      1086.1,
      1092.03
    ],
    "en": [
      "minus 2 for the network and broadcast addresses, means 0 addresses that we can assign to devices."
    ],
    "ru": [
      "минус 2 для сетевых и широковещательных адресов означает 0 адресов, которые мы можем назначить устройствам."
    ]
  },
  {
    "time": [
      1092.03,
      1099.78
    ],
    "en": [
      "So, you used to not be able to use /31 network prefixes because of this. HOWEVER, for a point"
    ],
    "ru": [
      "Итак, раньше вы не могли использовать префиксы сети / 31 из-за этого. ОДНАКО, за точку"
    ]
  },
  {
    "time": [
      1099.78,
      1107.46
    ],
    "en": [
      "to point connection like this it actually is possible to use a /31 mask. Let’s check it out."
    ],
    "ru": [
      "чтобы указать такое соединение, на самом деле можно использовать маску / 31. Давай проверим."
    ]
  },
  {
    "time": [
      1107.46,
      1121.179
    ],
    "en": [
      "it out. So here’s the 203.0.113.0/31 network, R1 is 203.0.113.0 and R2 is 203.0.113.1. The"
    ],
    "ru": [
      "это из. Итак, вот сеть 203.0.113.0/31, R1 - это 203.0.113.0, а R2 - это 203.0.113.1. В"
    ]
  },
  {
    "time": [
      1121.179,
      1130.74
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
      1121.179,
      1130.74
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
      1130.74,
      1138.58
    ],
    "en": [
      "is actually only two addresses. Here they are in binary. there’s 203.0.113.0, and"
    ],
    "ru": [
      "на самом деле всего два адреса. Вот они в двоичном формате. там 203.0.113.0 и"
    ]
  },
  {
    "time": [
      1138.58,
      1145.559
    ],
    "en": [
      "there’s 203.0.113.1. Normally this would be a problem, because it leaves no usable"
    ],
    "ru": [
      "есть 203.0.113.1. Обычно это было бы проблемой, потому что он не оставляет пригодных для использования"
    ]
  },
  {
    "time": [
      1145.559,
      1150.24
    ],
    "en": [
      "addresses after subtracting the network and broadcast addresses, but for point-to-point"
    ],
    "ru": [
      "адреса после вычитания сетевых и широковещательных адресов, но для точка-точка"
    ]
  },
  {
    "time": [
      1150.24,
      1155.53
    ],
    "en": [
      "networks like this, a dedicated connection like this between two routers, there is actually"
    ],
    "ru": [
      "такие сети, как это выделенное соединение между двумя маршрутизаторами, на самом деле"
    ]
  },
  {
    "time": [
      1155.53,
      1160.9
    ],
    "en": [
      "no need for a network address or a broadcast address. So, we can break the rules in this"
    ],
    "ru": [
      "нет необходимости в сетевом адресе или широковещательном адресе. Итак, мы можем нарушить правила в этом"
    ]
  },
  {
    "time": [
      1160.9,
      1167.29
    ],
    "en": [
      "case and assign the only two addresses in this network to our routers. Note that, if"
    ],
    "ru": [
      "case и назначьте нашим маршрутизаторам только два адреса в этой сети. Обратите внимание, что если"
    ]
  },
  {
    "time": [
      1167.29,
      1172.02
    ],
    "en": [
      "you try this configuration on a Cisco router, you’ll get a warning like this, reminding"
    ],
    "ru": [
      "вы попробуете эту конфигурацию на маршрутизаторе Cisco, вы получите предупреждение, напоминающее"
    ]
  },
  {
    "time": [
      1172.02,
      1177.49
    ],
    "en": [
      "you to make sure that this is a point-to-point link, but it is a totally valid configuration."
    ],
    "ru": [
      "убедитесь, что это прямая ссылка, но это полностью допустимая конфигурация."
    ]
  },
  {
    "time": [
      1177.49,
      1187.34
    ],
    "en": [
      "So, once again The remaining addresses in the 203.0.113.0/24 address block, which are 203.0.113.2"
    ],
    "ru": [
      "Итак, еще раз. Остальные адреса в адресном блоке 203.0.113.0/24, которые равны 203.0.113.2."
    ]
  },
  {
    "time": [
      1187.34,
      1194.73
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
      1187.34,
      1194.73
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
      1194.73,
      1202.11
    ],
    "en": [
      "saved even more addresses, using only 2 addresses instead of 4 for this point-to-point connection."
    ],
    "ru": [
      "сэкономил еще больше адресов, используя только 2 адреса вместо 4 для этого соединения точка-точка."
    ]
  },
  {
    "time": [
      1202.11,
      1208.13
    ],
    "en": [
      "People still do use /30 for point-to-point connections at times, but /31 masks are totally"
    ],
    "ru": [
      "Люди по-прежнему иногда используют / 30 для соединений точка-точка, но маска / 31 полностью"
    ]
  },
  {
    "time": [
      1208.13,
      1214.13
    ],
    "en": [
      "valid and more efficient than /30 so I recommend this method!"
    ],
    "ru": [
      "действительный и более эффективный, чем / 30, поэтому я рекомендую этот метод!"
    ]
  },
  {
    "time": [
      1214.13,
      1223.03
    ],
    "en": [
      "But we still haven’t looked at the /32 mask. A /32 mask is written as 255.255.255.255 in"
    ],
    "ru": [
      "Но мы еще не посмотрели на маску / 32. Маска A / 32 записывается как 255.255.255.255 в"
    ]
  },
  {
    "time": [
      1223.03,
      1229.62
    ],
    "en": [
      "dotted decimal, making the entire address the network portion, there are no host bits."
    ],
    "ru": [
      "десятичная дробь с точками, что делает весь адрес сетевой частью, биты хоста отсутствуют."
    ]
  },
  {
    "time": [
      1229.62,
      1235.28
    ],
    "en": [
      "If you calculate this using our formula, you will get -1 usable addresses...clearly the"
    ],
    "ru": [
      "Если вы рассчитаете это по нашей формуле, вы получите -1 годный адрес ... очевидно,"
    ]
  },
  {
    "time": [
      1235.28,
      1241.51
    ],
    "en": [
      "formula doesn’t work in this case. You won’t be able to use a /32 mask in this case, and"
    ],
    "ru": [
      "формула в этом случае не работает. В этом случае вы не сможете использовать маску / 32, и"
    ]
  },
  {
    "time": [
      1241.51,
      1247.461
    ],
    "en": [
      "you will probably never use a /32 mask to configure an actual interface. However, there"
    ],
    "ru": [
      "вы, вероятно, никогда не будете использовать маску / 32 для настройки реального интерфейса. Однако там"
    ]
  },
  {
    "time": [
      1247.461,
      1253.18
    ],
    "en": [
      "are some uses for a /32 mask, for example when you want to create a static route not"
    ],
    "ru": [
      "есть некоторые варианты использования маски / 32, например, когда вы хотите создать статический маршрут, а не"
    ]
  },
  {
    "time": [
      1253.18,
      1259.92
    ],
    "en": [
      "to a network, but just to one specific host, you can use a /32 mask to specify that exact"
    ],
    "ru": [
      "в сеть, но только для одного конкретного хоста, вы можете использовать маску / 32, чтобы указать именно этот"
    ]
  },
  {
    "time": [
      1259.92,
      1265.71
    ],
    "en": [
      "host. Anyway, I’ll talk about that later in the course, just know that /32 masks are"
    ],
    "ru": [
      "хозяин. В любом случае, я расскажу об этом позже в курсе, просто знайте, что маски / 32 являются"
    ]
  },
  {
    "time": [
      1265.71,
      1270.09
    ],
    "en": [
      "used at some points, but you don’t have to worry about them for now."
    ],
    "ru": [
      "использовались в некоторых случаях, но пока вам не о чем беспокоиться."
    ]
  },
  {
    "time": [
      1270.09,
      1275.55
    ],
    "en": [
      "Here’s a simple chart showing the dotted decimal subnet masks, and their equivalent"
    ],
    "ru": [
      "Вот простая диаграмма, на которой показаны десятичные маски подсети, разделенные точками, и их эквиваленты."
    ]
  },
  {
    "time": [
      1275.55,
      1281.17
    ],
    "en": [
      "in CIDR notation. That’s right, the way of writing a prefix with a slash followed"
    ],
    "ru": [
      "в нотации CIDR. Правильно, способ написания префикса с косой чертой следует"
    ]
  },
  {
    "time": [
      1281.17,
      1289.78
    ],
    "en": [
      "by the prefix length, like /25, /26, etc. is called CIDR notation, because it was introduced"
    ],
    "ru": [
      "по длине префикса, например / 25, / 26 и т. д., называется нотацией CIDR, потому что она была введена"
    ]
  },
  {
    "time": [
      1289.78,
      1296.88
    ],
    "en": [
      "with the CIDR system. Previously, only the dotted decimal method was used. Note that"
    ],
    "ru": [
      "с системой CIDR. Ранее использовался только десятичный метод с разделительными точками. Обратите внимание, что"
    ]
  },
  {
    "time": [
      1296.88,
      1301.63
    ],
    "en": [
      "I’ve showed you only how to subnet a class C network so far, but we will look at"
    ],
    "ru": [
      "До сих пор я показал вам только, как разделить сеть класса C на подсети, но мы рассмотрим"
    ]
  },
  {
    "time": [
      1301.63,
      1309.79
    ],
    "en": [
      "class B and class A networks as well, with prefix lengths like /17, /11, /9, etc."
    ],
    "ru": [
      "сети класса B и класса A, с длиной префикса, например / 17, / 11, / 9 и т. д."
    ]
  },
  {
    "time": [
      1309.79,
      1315.5
    ],
    "en": [
      "I spent a lot of time on just that one example, but I hope you can see the use of"
    ],
    "ru": [
      "Я потратил много времени только на этот пример, но надеюсь, вы заметите, как"
    ]
  },
  {
    "time": [
      1315.5,
      1320.981
    ],
    "en": [
      "subnetting, dividing a larger network into smaller networks, called subnets. Instead"
    ],
    "ru": [
      "разделение на подсети, деление более крупной сети на более мелкие сети, называемые подсетями. Вместо"
    ]
  },
  {
    "time": [
      1320.981,
      1327.13
    ],
    "en": [
      "of using the whole 203.0.113.0/24 network for the point to point connection, we can"
    ],
    "ru": [
      "использования всей сети 203.0.113.0/24 для соединения точка-точка, мы можем"
    ]
  },
  {
    "time": [
      1327.13,
      1334.07
    ],
    "en": [
      "use a /30 subnet and use only 4 addresses, or even better use a /31 subnet and use only"
    ],
    "ru": [
      "используйте подсеть / 30 и используйте только 4 адреса, или еще лучше используйте подсеть / 31 и используйте только"
    ]
  },
  {
    "time": [
      1334.07,
      1340.29
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
      1334.07,
      1340.29
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
      1340.29,
      1343.87
    ],
    "en": [
      "In the next video I’ll give you some practice problems and walk you through them so you"
    ],
    "ru": [
      "В следующем видео я дам вам несколько практических задач и расскажу о них, чтобы вы"
    ]
  },
  {
    "time": [
      1343.87,
      1346.71
    ],
    "en": [
      "can get some hands-on practice with subnetting."
    ],
    "ru": [
      "можете попрактиковаться в разбиении на подсети."
    ]
  },
  {
    "time": [
      1346.71,
      1353.62
    ],
    "en": [
      "So, here’s a scenario. There are 4 networks connected to R1, with many hosts connected"
    ],
    "ru": [
      "Итак, вот сценарий. К R1 подключены 4 сети, подключено много хостов."
    ]
  },
  {
    "time": [
      1353.62,
      1360.76
    ],
    "en": [
      "to each switch. There are 45 hosts per network, R1 needs an IP address in each network so"
    ],
    "ru": [
      "к каждому переключателю. В каждой сети 45 хостов, R1 нужен IP-адрес в каждой сети, поэтому"
    ]
  },
  {
    "time": [
      1360.76,
      1369.71
    ],
    "en": [
      "its address is included in the range. You have received the 192.168.1.0/24 network,"
    ],
    "ru": [
      "его адрес входит в диапазон. Вы получили сеть 192.168.1.0/24,"
    ]
  },
  {
    "time": [
      1369.71,
      1374.08
    ],
    "en": [
      "and you must divide the network into four subnets that can accommodate the number of"
    ],
    "ru": [
      "и вы должны разделить сеть на четыре подсети, которые могут вместить количество"
    ]
  },
  {
    "time": [
      1374.08,
      1381.95
    ],
    "en": [
      "hosts required. First off, are there enough addresses in the 192.168.1.0/24 network in"
    ],
    "ru": [
      "требуются хосты. Во-первых, достаточно ли адресов в сети 192.168.1.0/24 в"
    ]
  },
  {
    "time": [
      1381.95,
      1389.01
    ],
    "en": [
      "the first place? So, we need 45 hosts per network, including R1, but also remember that each"
    ],
    "ru": [
      "первое место? Итак, нам нужно 45 хостов на сеть, включая R1, но также помните, что каждый"
    ]
  },
  {
    "time": [
      1389.01,
      1394.84
    ],
    "en": [
      "network has a network and broadcast address, so that’s plus 2, so we need 47 addresses"
    ],
    "ru": [
      "сеть имеет сетевой и широковещательный адрес, так что это плюс 2, поэтому нам нужно 47 адресов"
    ]
  },
  {
    "time": [
      1394.84,
      1404.24
    ],
    "en": [
      "per subnet. 47 times 4 equals 188, so there’s no problem in terms of the number of hosts."
    ],
    "ru": [
      "на подсеть. 47 умножить на 4 равно 188, поэтому с количеством хостов проблем нет."
    ]
  },
  {
    "time": [
      1404.24,
      1412.57
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
      1404.24,
      1412.57
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
      1412.57,
      1416.46
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
      1412.57,
      1416.46
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
      1416.46,
      1422.07
    ],
    "en": [
      "Okay let’s see how we can calculate the subnets we need to make. We need four equal"
    ],
    "ru": [
      "Хорошо, давайте посмотрим, как мы можем рассчитать подсети, которые нам нужно создать. Нам нужно четыре равных"
    ]
  },
  {
    "time": [
      1422.07,
      1430.45
    ],
    "en": [
      "sized subnets with enough room for at least 45 hosts. Here, I’ve written out 192.168.1.0"
    ],
    "ru": [
      "подсети достаточного размера для размещения не менее 45 хостов. Здесь я написал 192.168.1.0"
    ]
  },
  {
    "time": [
      1430.45,
      1440.03
    ],
    "en": [
      "with a /30 mask, 255.255.255.252. I skipped /32 and /31, since these aren’t point to"
    ],
    "ru": [
      "с маской / 30, 255.255.255.252. Я пропустил / 32 и / 31, поскольку они не указывают на"
    ]
  },
  {
    "time": [
      1440.03,
      1448.19
    ],
    "en": [
      "point links, we can’t use /31, and definitely cant use /32. Since there are 2 host bits,"
    ],
    "ru": [
      "точечные ссылки, мы не можем использовать / 31 и определенно не можем использовать / 32. Поскольку есть 2 бита хоста,"
    ]
  },
  {
    "time": [
      1448.19,
      1454.29
    ],
    "en": [
      "the formula to determine the number of usable addresses is 2 to the power of 2, minus 2."
    ],
    "ru": [
      "формула для определения количества используемых адресов: 2 в степени 2 минус 2."
    ]
  },
  {
    "time": [
      1454.29,
      1460.97
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
      1454.29,
      1460.97
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
      1460.97,
      1468.22
    ],
    "en": [
      "in a /30 network. Clearly not enough room to accommodate the 45 hosts we have."
    ],
    "ru": [
      "в сети а / 30. Явно не хватило места для размещения 45 хозяев, которые у нас есть."
    ]
  },
  {
    "time": [
      1468.22,
      1476.33
    ],
    "en": [
      "How about if we use a /29 mask to make these subnets, can we fit the 45 hosts we need? There are 3 host bits,"
    ],
    "ru": [
      "Как насчет того, чтобы мы использовали маску / 29 для создания этих подсетей, сможем ли мы уместить 45 необходимых нам хостов? Есть 3 бита хоста,"
    ]
  },
  {
    "time": [
      1476.33,
      1483.71
    ],
    "en": [
      "so the formula is 2 to the power of 3 minus 2. 2 to the power of 3 is 2 times 2 times"
    ],
    "ru": [
      "так что формула 2 в степени 3 минус 2. 2 в степени 3 это 2 раза 2 раза"
    ]
  },
  {
    "time": [
      1483.71,
      1491.91
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
      1483.71,
      1491.91
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
      1491.91,
      1499.61
    ],
    "en": [
      "How about if we use /28? There are 4 host bits, so the formula is 2 to the power of 4"
    ],
    "ru": [
      "Как насчет того, чтобы использовать / 28? Имеется 4 бита хоста, поэтому формула равна 2 в степени 4."
    ]
  },
  {
    "time": [
      1499.61,
      1507.71
    ],
    "en": [
      "minus 2. 2 to the power of 4 is 2 times 2 times 2 times 2, which is 16. So, that means there are"
    ],
    "ru": [
      "минус 2. 2 в степени 4 равно 2 умножить на 2 умножить на 2 умножить на 2, что равно 16. Итак, это означает, что есть"
    ]
  },
  {
    "time": [
      1507.71,
      1513.41
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
      1507.71,
      1513.41
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
      1513.41,
      1522.55
    ],
    "en": [
      "How about /27? There are 5 host bits, so the formula is 2 to the power of 5 minus 2. And 2 to"
    ],
    "ru": [
      "Как насчет / 27? Имеется 5 битов хоста, поэтому формула равна 2 в степени 5 минус 2. И 2 в"
    ]
  },
  {
    "time": [
      1522.55,
      1530.169
    ],
    "en": [
      "the power of 5 is 2 times 2 times 2 times 2 times 2, which equals 32. So that means"
    ],
    "ru": [
      "степень 5 равна 2 умножить на 2 умножить на 2 умножить на 2 умножить на 2, что равно 32. Это означает"
    ]
  },
  {
    "time": [
      1530.169,
      1535.37
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
      1530.169,
      1535.37
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
      1535.37,
      1542.28
    ],
    "en": [
      "How about a /26 subnet mask? There are now 6 host bits, so the formula is 2 to the power"
    ],
    "ru": [
      "Как насчет маски подсети / 26? Теперь у хоста 6 бит, поэтому формула равна 2 в степени"
    ]
  },
  {
    "time": [
      1542.28,
      1550.9
    ],
    "en": [
      "of 6 minus 2. 2 to the power of 6 is 2 times 2 times 2 times 2 times 2 times 2, which equals"
    ],
    "ru": [
      "6 минус 2. 2 в степени 6 равно 2 умножить на 2 умножить на 2 умножить на 2 умножить на 2 умножить на 2, что равно"
    ]
  },
  {
    "time": [
      1550.9,
      1559.12
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
      1550.9,
      1559.12
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
      1559.12,
      1564.96
    ],
    "en": [
      "doesn’t provide enough address space. /26 provides more than we need, but we have to"
    ],
    "ru": [
      "не предоставляет достаточно адресного пространства. / 26 дает больше, чем нам нужно, но мы должны"
    ]
  },
  {
    "time": [
      1564.96,
      1570.94
    ],
    "en": [
      "go with /26. Unfortunately we can’t always make subnets have exactly the number of addresses"
    ],
    "ru": [
      "пойти с / 26. К сожалению, мы не всегда можем сделать подсети точно такими же адресами."
    ]
  },
  {
    "time": [
      1570.94,
      1576.57
    ],
    "en": [
      "you want. There might be some unused address space. That’s actually fine, since its good"
    ],
    "ru": [
      "ты хочешь. Возможно, есть неиспользуемое адресное пространство. На самом деле это нормально, так как это хорошо"
    ]
  },
  {
    "time": [
      1576.57,
      1580.5
    ],
    "en": [
      "to have some room for growth anyway."
    ],
    "ru": [
      "в любом случае иметь место для роста."
    ]
  },
  {
    "time": [
      1580.5,
      1586.571
    ],
    "en": [
      "So I think this video has gone on long enough. Instead of finishing this task in this video, I’ll make"
    ],
    "ru": [
      "Так что я думаю, что это видео длилось достаточно долго. Вместо того, чтобы закончить это задание в этом видео, я сделаю"
    ]
  },
  {
    "time": [
      1586.571,
      1596.66
    ],
    "en": [
      "it this week’s quiz. The first subnet (Subnet 1) is 192.168.1.0/26. What are the remaining"
    ],
    "ru": [
      "это викторина на этой неделе. Первая подсеть (подсеть 1) - 192.168.1.0/26. Какие еще"
    ]
  },
  {
    "time": [
      1596.66,
      1602.34
    ],
    "en": [
      "subnets? To help you out, here’s a hint. Find the broadcast address of Subnet"
    ],
    "ru": [
      "подсети? Чтобы помочь вам, вот подсказка. Найдите широковещательный адрес подсети"
    ]
  },
  {
    "time": [
      1602.34,
      1610.12
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
      1602.34,
      1610.12
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
      1610.12,
      1615.73
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
      1610.12,
      1615.73
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
      1615.73,
      1617.97
    ],
    "en": [
      "in the next video."
    ],
    "ru": [
      "в следующем видео."
    ]
  },
  {
    "time": [
      1617.97,
      1625.3
    ],
    "en": [
      "So, what did we cover in this video? We covered CIDR, classless inter-domain routing, which"
    ],
    "ru": [
      "Итак, что мы рассмотрели в этом видео? Мы рассмотрели CIDR, бесклассовую междоменную маршрутизацию, которая"
    ]
  },
  {
    "time": [
      1625.3,
      1630.68
    ],
    "en": [
      "removes the rules of class A, B and C networks and lets us be more flexible with network"
    ],
    "ru": [
      "удаляет правила сетей классов A, B и C и позволяет нам быть более гибкими с сетью"
    ]
  },
  {
    "time": [
      1630.68,
      1637.03
    ],
    "en": [
      "addressing, according to the size of the network. We also covered the process of subnetting,"
    ],
    "ru": [
      "адресация в зависимости от размера сети. Мы также рассмотрели процесс разделения на подсети,"
    ]
  },
  {
    "time": [
      1637.03,
      1642.04
    ],
    "en": [
      "but mostly just the basics. Hopefully you understand the purpose of subnetting, and"
    ],
    "ru": [
      "но в основном только основы. Надеюсь, вы понимаете цель разделения на подсети и"
    ]
  },
  {
    "time": [
      1642.04,
      1647.12
    ],
    "en": [
      "know a little bit about how to do it. I’ll clarify and expand upon many things in the"
    ],
    "ru": [
      "знаю немного о том, как это сделать. Я проясню и подробно расскажу о многом в"
    ]
  },
  {
    "time": [
      1647.12,
      1653.96
    ],
    "en": [
      "next video, but also feel free to ask any questions you have in the comment section."
    ],
    "ru": [
      "следующее видео, но также не стесняйтесь задавать любые вопросы в разделе комментариев."
    ]
  },
  {
    "time": [
      1653.96,
      1658.76
    ],
    "en": [
      "For today’s video there won’t be a practice lab, that will be after I’ve finished explaining everything about"
    ],
    "ru": [
      "В сегодняшнем видео не будет практических занятий, это будет после того, как я закончу объяснять все о"
    ]
  },
  {
    "time": [
      1658.76,
      1663.76
    ],
    "en": [
      "subnetting. There will be flashcards, however, to help you review some of the things learned"
    ],
    "ru": [
      "подсети. Однако будут карточки, которые помогут вам повторить некоторые из изученных вещей."
    ]
  },
  {
    "time": [
      1663.76,
      1668.12
    ],
    "en": [
      "in this video. You can download them from the link in the description."
    ],
    "ru": [
      "в этом видео. Вы можете скачать их по ссылке в описании."
    ]
  },
  {
    "time": [
      1668.12,
      1673.289
    ],
    "en": [
      "I’ve also recently enabled the membership feature for my channel. If you want to leave"
    ],
    "ru": [
      "Я также недавно включил функцию членства для своего канала. Если ты хочешь уйти"
    ]
  },
  {
    "time": [
      1673.289,
      1679.07
    ],
    "en": [
      "a monthly tip to support me, this is another great way to do so. Click join here under"
    ],
    "ru": [
      "ежемесячный совет, чтобы поддержать меня, это еще один отличный способ сделать это. Нажмите здесь, чтобы присоединиться к"
    ]
  },
  {
    "time": [
      1679.07,
      1681.71
    ],
    "en": [
      "the video to check it out."
    ],
    "ru": [
      "видео, чтобы проверить это."
    ]
  },
  {
    "time": [
      1681.71,
      1688.23
    ],
    "en": [
      "For those who become a JCNP, aka Jeremy Certified Network Professional, -level supporter, I’ll"
    ],
    "ru": [
      "Для тех, кто стал JCNP, он же Jeremy Certified Network Professional, сторонником уровня, я"
    ]
  },
  {
    "time": [
      1688.23,
      1694.7
    ],
    "en": [
      "give you a shoutout at the end of my videos. So first of all, thank you so much to Vance Simmons. I just"
    ],
    "ru": [
      "приветствую вас в конце моих видео. Итак, прежде всего, большое спасибо Вэнсу Симмонсу. я только"
    ]
  },
  {
    "time": [
      1694.7,
      1699.08
    ],
    "en": [
      "enabled the membership feature and haven’t said anything about it yet, and he became my first"
    ],
    "ru": [
      "включил функцию членства и еще ничего об этом не сказал, и он стал моим первым"
    ]
  },
  {
    "time": [
      1699.08,
      1704.67
    ],
    "en": [
      "JCNP-level supporter. Thank you so much for supporting the channel, I hope the videos are helping"
    ],
    "ru": [
      "Сторонник уровня JCNP. Большое спасибо за поддержку канала, надеюсь, видео помогают"
    ]
  },
  {
    "time": [
      1704.67,
      1713.08
    ],
    "en": [
      "you out. And for my JCNA-level supporters, thanks to you too."
    ],
    "ru": [
      "вы ушли. И моим сторонникам на уровне JCNA спасибо тоже."
    ]
  },
  {
    "time": [
      1713.08,
      1717.95
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
      1717.95,
      1723.03
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
      1723.03,
      1728.65
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
      1728.65,
      1728.65
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  }
]