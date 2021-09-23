let objs = [
  {
    "time": [
      2.399,
      4.99
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
      4.99,
      8.389
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
      8.389,
      12.66
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
      12.66,
      18.35
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
      18.35,
      20.46
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
      20.46,
      25.21
    ],
    "en": [
      "In this video we will continue our study of spanning tree, focusing instead on an updated"
    ],
    "ru": [
      "В этом видео мы продолжим изучение связующего дерева, сосредоточившись вместо этого на обновленном"
    ]
  },
  {
    "time": [
      25.21,
      28.509
    ],
    "en": [
      "version called rapid spanning tree."
    ],
    "ru": [
      "версия называется быстрым остовным деревом."
    ]
  },
  {
    "time": [
      28.509,
      34.58
    ],
    "en": [
      "More specifically, we’ll be looking at Cisco’s version, rapid per-VLAN spanning tree."
    ],
    "ru": [
      "В частности, мы рассмотрим версию Cisco, быстрое связующее дерево для каждой VLAN."
    ]
  },
  {
    "time": [
      34.58,
      38.91
    ],
    "en": [
      "You saw in the previous lecture that classic spanning tree can be quite slow, taking up"
    ],
    "ru": [
      "Вы видели в предыдущей лекции, что классическое остовное дерево может быть довольно медленным, занимая"
    ]
  },
  {
    "time": [
      38.91,
      44.36
    ],
    "en": [
      "to 50 seconds for the network to converge after a change in the topology."
    ],
    "ru": [
      "до 50 секунд для схождения сети после изменения топологии."
    ]
  },
  {
    "time": [
      44.36,
      49.9
    ],
    "en": [
      "As the name implies, rapid spanning tree improves this time, only taking a few seconds to respond"
    ],
    "ru": [
      "Как следует из названия, быстрое остовное дерево улучшается на этот раз, для ответа требуется всего несколько секунд."
    ]
  },
  {
    "time": [
      49.9,
      52.6
    ],
    "en": [
      "to changes in the network."
    ],
    "ru": [
      "к изменениям в сети."
    ]
  },
  {
    "time": [
      52.6,
      57.1
    ],
    "en": [
      "Because rapid spanning tree is superior to classic spanning tree, it is the default on"
    ],
    "ru": [
      "Поскольку быстрое связующее дерево превосходит классическое связующее дерево, оно используется по умолчанию."
    ]
  },
  {
    "time": [
      57.1,
      63.28
    ],
    "en": [
      "most devices now, and the CCNA exam topics only mention rapid spanning tree."
    ],
    "ru": [
      "большинство устройств сейчас, а в темах экзаменов CCNA упоминается только быстрое связующее дерево."
    ]
  },
  {
    "time": [
      63.28,
      67.72
    ],
    "en": [
      "However I think it is important to understand classic spanning tree, and now that you know"
    ],
    "ru": [
      "Однако я думаю, что важно понимать классическое остовное дерево, и теперь, когда вы знаете"
    ]
  },
  {
    "time": [
      67.72,
      72.82
    ],
    "en": [
      "about classic spanning tree, rapid spanning tree will be much easier to learn."
    ],
    "ru": [
      "Что касается классического остовного дерева, то научиться быстрому остову будет намного проще."
    ]
  },
  {
    "time": [
      72.82,
      77.61
    ],
    "en": [
      "Let’s take a look at what we’ll cover in this video."
    ],
    "ru": [
      "Давайте посмотрим, что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      77.61,
      82.46000000000001
    ],
    "en": [
      "First up, let’s take a few minutes to compare different versions of STP."
    ],
    "ru": [
      "Прежде всего, давайте потратим несколько минут, чтобы сравнить разные версии STP."
    ]
  },
  {
    "time": [
      82.46000000000001,
      93.64
    ],
    "en": [
      "In the past few videos I’ve mentioned multiple versions, STP, PVST+, rapid STP, rapid PVST+, multiple spanning tree."
    ],
    "ru": [
      "В нескольких последних видео я упоминал несколько версий, STP, PVST +, быстрый STP, быстрый PVST +, множественное связующее дерево."
    ]
  },
  {
    "time": [
      93.64,
      99.11
    ],
    "en": [
      "multiple spanning tree. Just so there is no confusion, I will summarize each version, and clarify between the industry"
    ],
    "ru": [
      "множественное остовное дерево. Чтобы не было путаницы, я резюмирую каждую версию и проясню между отраслями"
    ]
  },
  {
    "time": [
      99.11,
      102.67
    ],
    "en": [
      "standards and the Cisco proprietary versions."
    ],
    "ru": [
      "стандарты и собственные версии Cisco."
    ]
  },
  {
    "time": [
      102.67,
      107.049
    ],
    "en": [
      "Then the rest of the video will be all about rapid spanning tree, specifically the version"
    ],
    "ru": [
      "Тогда остальная часть видео будет посвящена быстрому связующему дереву, в частности версии"
    ]
  },
  {
    "time": [
      107.049,
      112.00999999999999
    ],
    "en": [
      "which operates on Cisco switches, rapid per-VLAN spanning tree plus."
    ],
    "ru": [
      "который работает на коммутаторах Cisco, быстрое связующее дерево для каждой VLAN плюс."
    ]
  },
  {
    "time": [
      112.00999999999999,
      116.74000000000001
    ],
    "en": [
      "Also, make sure to watch until the end of today’s quiz, I will once again feature"
    ],
    "ru": [
      "Также не забудьте посмотреть до конца сегодняшнюю викторину, я еще раз расскажу"
    ]
  },
  {
    "time": [
      116.74000000000001,
      122.53
    ],
    "en": [
      "a bonus question from Boson Software’s ExSim for the CCNA, a set of practice exams for"
    ],
    "ru": [
      "бонусный вопрос от ExSim компании Boson Software для CCNA, набор практических экзаменов для"
    ]
  },
  {
    "time": [
      122.53,
      125.69
    ],
    "en": [
      "the CCNA which I highly recommend."
    ],
    "ru": [
      "CCNA, которую я очень рекомендую."
    ]
  },
  {
    "time": [
      125.69,
      132.9
    ],
    "en": [
      "Ask anywhere on the Internet for CCNA practice exam recommendations, and people are going to recommend Boson."
    ],
    "ru": [
      "Спросите где-нибудь в Интернете о рекомендациях по практическому экзамену CCNA, и люди порекомендуют Boson."
    ]
  },
  {
    "time": [
      132.9,
      138.76
    ],
    "en": [
      "to recommend Boson. If you want to get a copy of ExSim to prepare for the exam, follow the link in the video description."
    ],
    "ru": [
      "рекомендовать Бозон. Если вы хотите получить копию ExSim для подготовки к экзамену, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      138.76,
      143.9
    ],
    "en": [
      "description. Let’s start by summarizing the different versions of spanning tree."
    ],
    "ru": [
      "описание. Давайте начнем с обобщения различных версий связующего дерева."
    ]
  },
  {
    "time": [
      143.9,
      149.159
    ],
    "en": [
      "On the left I will list the industry standard versions, the IEEE standards."
    ],
    "ru": [
      "Слева я перечислю версии отраслевых стандартов, стандарты IEEE."
    ]
  },
  {
    "time": [
      149.159,
      156.31
    ],
    "en": [
      "On the right I will list the Cisco proprietary versions, Cisco’s upgrades to some of the standard versions."
    ],
    "ru": [
      "Справа я перечислю собственные версии Cisco, обновления Cisco до некоторых стандартных версий."
    ]
  },
  {
    "time": [
      156.31,
      162.51
    ],
    "en": [
      "standard versions. First up, the classic spanning tree protocol, IEEE standard 802.1D."
    ],
    "ru": [
      "стандартные версии. Во-первых, классический протокол связующего дерева, стандарт IEEE 802.1D."
    ]
  },
  {
    "time": [
      162.51,
      167.51
    ],
    "en": [
      "This is the original spanning tree protocol, according to Wikipedia it was originally published"
    ],
    "ru": [
      "Это исходный протокол связующего дерева, согласно Википедии, он изначально был опубликован."
    ]
  },
  {
    "time": [
      167.51,
      175.62
    ],
    "en": [
      "in 1990, although the original spanning tree was actually created in 1985, before being standardized."
    ],
    "ru": [
      "в 1990 году, хотя исходное остовное дерево было фактически создано в 1985 году, прежде чем оно было стандартизировано."
    ]
  },
  {
    "time": [
      175.62,
      180.579
    ],
    "en": [
      "standardized. In classic STP, all VLANs share one STP instance."
    ],
    "ru": [
      "стандартизированный. В классическом STP все VLAN совместно используют один экземпляр STP."
    ]
  },
  {
    "time": [
      180.579,
      186.409
    ],
    "en": [
      "Therefore, we cannot load balance using classic STP, because there is only one instance, we"
    ],
    "ru": [
      "Следовательно, мы не можем балансировать нагрузку с помощью классического STP, потому что есть только один экземпляр, мы"
    ]
  },
  {
    "time": [
      186.409,
      190.56
    ],
    "en": [
      "cannot block different ports in each VLAN to achieve load balancing."
    ],
    "ru": [
      "не может блокировать разные порты в каждой VLAN для достижения балансировки нагрузки."
    ]
  },
  {
    "time": [
      190.56,
      194.329
    ],
    "en": [
      "So, Cisco decided to improve upon this."
    ],
    "ru": [
      "Итак, Cisco решила улучшить это."
    ]
  },
  {
    "time": [
      194.329,
      197.45
    ],
    "en": [
      "They developed Per-VLAN Spanning Tree Plus."
    ],
    "ru": [
      "Они разработали Per-VLAN Spanning Tree Plus."
    ]
  },
  {
    "time": [
      197.45,
      202.15
    ],
    "en": [
      "Actually, before that they developed regular Per-VLAN Spanning Tree, which as I mentioned"
    ],
    "ru": [
      "Собственно, до этого они разработали обычное Spanning Tree для каждой VLAN, которое, как я уже упоминал,"
    ]
  },
  {
    "time": [
      202.15,
      208.849
    ],
    "en": [
      "before only supported ISL trunk encapsulation, no dot1q, but let’s forget about that version"
    ],
    "ru": [
      "раньше поддерживалась только инкапсуляция магистрали ISL, без dot1q, но давайте забудем об этой версии"
    ]
  },
  {
    "time": [
      208.849,
      212.719
    ],
    "en": [
      "since everyone uses dot1q for their trunk encapsulation these days."
    ],
    "ru": [
      "поскольку в наши дни все используют dot1q для инкапсуляции магистрали."
    ]
  },
  {
    "time": [
      212.719,
      220.48
    ],
    "en": [
      "It’s Cisco’s upgrade to 802.1D. Each VLAN has its own STP instance."
    ],
    "ru": [
      "Это обновление Cisco до 802.1D. Каждая VLAN имеет свой собственный экземпляр STP."
    ]
  },
  {
    "time": [
      220.48,
      225.62
    ],
    "en": [
      "In the previous lab video when we configured STP we had to include the VLAN number in each"
    ],
    "ru": [
      "В предыдущем лабораторном видео, когда мы настраивали STP, нам приходилось включать номер VLAN в каждый"
    ]
  },
  {
    "time": [
      225.62,
      230.609
    ],
    "en": [
      "command, for example spanning-tree vlan 1 root primary."
    ],
    "ru": [
      "команда, например spanning-tree vlan 1 root primary."
    ]
  },
  {
    "time": [
      230.609,
      235.76
    ],
    "en": [
      "That’s because a separate STP instance is running for each VLAN."
    ],
    "ru": [
      "Это потому, что для каждой VLAN работает отдельный экземпляр STP."
    ]
  },
  {
    "time": [
      235.76,
      236.959
    ],
    "en": [
      "Why is this good?"
    ],
    "ru": [
      "Почему это хорошо?"
    ]
  },
  {
    "time": [
      236.959,
      241.689
    ],
    "en": [
      "Well, as you know already, we can load balance by blocking different ports in each VLAN,"
    ],
    "ru": [
      "Ну, как вы уже знаете, мы можем балансировать нагрузку, блокируя разные порты в каждой VLAN,"
    ]
  },
  {
    "time": [
      241.689,
      244.169
    ],
    "en": [
      "in each STP instance."
    ],
    "ru": [
      "в каждом экземпляре STP."
    ]
  },
  {
    "time": [
      244.169,
      248.31
    ],
    "en": [
      "We can use our network bandwidth more effectively, since we don’t have any connections going"
    ],
    "ru": [
      "Мы можем более эффективно использовать пропускную способность нашей сети, поскольку у нас нет никаких подключений."
    ]
  },
  {
    "time": [
      248.31,
      252.469
    ],
    "en": [
      "totally unused, just waiting for another connection to fail."
    ],
    "ru": [
      "полностью не используется, просто ожидает сбоя другого подключения."
    ]
  },
  {
    "time": [
      252.469,
      258.81
    ],
    "en": [
      "Now, as you also know, classic spanning tree and PVST+ are quite slow."
    ],
    "ru": [
      "Как вы также знаете, классическое остовное дерево и PVST + работают довольно медленно."
    ]
  },
  {
    "time": [
      258.81,
      265.46
    ],
    "en": [
      "The max age timer is 20 seconds, and the listening and learning states are 15 seconds each, so"
    ],
    "ru": [
      "Таймер максимального возраста составляет 20 секунд, а состояния прослушивания и обучения - по 15 секунд каждое, поэтому"
    ]
  },
  {
    "time": [
      265.46,
      269.479
    ],
    "en": [
      "it can take up to 50 seconds to respond to changes in the network."
    ],
    "ru": [
      "реакция на изменения в сети может занять до 50 секунд."
    ]
  },
  {
    "time": [
      269.479,
      273.56
    ],
    "en": [
      "That’s simply not fast enough for modern networks."
    ],
    "ru": [
      "Этого просто недостаточно для современных сетей."
    ]
  },
  {
    "time": [
      273.56,
      279.86
    ],
    "en": [
      "This was solved in rapid spanning tree protocol, IEEE standard 802.1w."
    ],
    "ru": [
      "Это было решено в протоколе быстрого связующего дерева стандарта IEEE 802.1w."
    ]
  },
  {
    "time": [
      279.86,
      287.18
    ],
    "en": [
      "It is much faster at converging and adapting to network changes than 802.1D. However, just"
    ],
    "ru": [
      "Он намного быстрее при конвергенции и адаптации к сетевым изменениям, чем 802.1D. Однако просто"
    ]
  },
  {
    "time": [
      287.18,
      294.039
    ],
    "en": [
      "like 802.1D, the industry standard rapid spanning tree protocol runs only one STP instance,"
    ],
    "ru": [
      "как и 802.1D, стандартный протокол быстрого связующего дерева работает только с одним экземпляром STP,"
    ]
  },
  {
    "time": [
      294.039,
      295.449
    ],
    "en": [
      "shared by all VLANs."
    ],
    "ru": [
      "общий для всех VLAN."
    ]
  },
  {
    "time": [
      295.449,
      299.46
    ],
    "en": [
      "Therefore, it also cannot load balance."
    ],
    "ru": [
      "Следовательно, он также не может балансировать нагрузку."
    ]
  },
  {
    "time": [
      299.46,
      304.55
    ],
    "en": [
      "Cisco once again developed an improved version of the industry standard, Rapid Per-VLAN Spanning"
    ],
    "ru": [
      "Cisco снова разработала улучшенную версию отраслевого стандарта Rapid Per-VLAN Spanning."
    ]
  },
  {
    "time": [
      304.55,
      308.59
    ],
    "en": [
      "Tree Plus, or Rapid PVST+."
    ],
    "ru": [
      "Tree Plus или Rapid PVST +."
    ]
  },
  {
    "time": [
      308.59,
      315.37
    ],
    "en": [
      "It is Cisco’s upgrade to 802.1w, featuring the improved speed of rapid STP, plus it runs"
    ],
    "ru": [
      "Это обновление Cisco до 802.1w с улучшенной скоростью быстрого STP, а также запуск"
    ]
  },
  {
    "time": [
      315.37,
      318.62
    ],
    "en": [
      "a separate STP instance for each VLAN."
    ],
    "ru": [
      "отдельный экземпляр STP для каждой VLAN."
    ]
  },
  {
    "time": [
      318.62,
      326.56
    ],
    "en": [
      "Therefore, it can load balance by blocking different ports in each VLAN, just like the previous PVST+."
    ],
    "ru": [
      "Следовательно, он может балансировать нагрузку, блокируя разные порты в каждой VLAN, как и в предыдущем PVST +."
    ]
  },
  {
    "time": [
      326.56,
      333.189
    ],
    "en": [
      "previous PVST+. The final version is Multiple Spanning Tree Protocol, IEEE standard 802.1s."
    ],
    "ru": [
      "предыдущий PVST +. Финальная версия - протокол множественного связующего дерева, стандарт IEEE 802.1s."
    ]
  },
  {
    "time": [
      333.189,
      336.389
    ],
    "en": [
      "It uses modified RSTP mechanics."
    ],
    "ru": [
      "Он использует модифицированную механику RSTP."
    ]
  },
  {
    "time": [
      336.389,
      341.67
    ],
    "en": [
      "But the main improvement is that it can group multiple VLANs into different instances, for"
    ],
    "ru": [
      "Но главное улучшение состоит в том, что он может группировать несколько VLAN в разные экземпляры для"
    ]
  },
  {
    "time": [
      341.67,
      349.099
    ],
    "en": [
      "example if there are 10 VLANs, VLANs 1 to 5 in instance 1, and VLANs 6 to 10 in instance"
    ],
    "ru": [
      "Например, если есть 10 VLAN, VLAN с 1 по 5 в экземпляре 1 и VLAN с 6 по 10 в экземпляре"
    ]
  },
  {
    "time": [
      349.099,
      352.47
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
      349.099,
      352.47
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
      352.47,
      357.12
    ],
    "en": [
      "Finally an industry standard version of STP that allows load balancing, and actually its"
    ],
    "ru": [
      "Наконец, стандартная версия STP, которая позволяет балансировать нагрузку, и на самом деле ее"
    ]
  },
  {
    "time": [
      357.12,
      360.58
    ],
    "en": [
      "superior to Cisco’s rapid-PVST."
    ],
    "ru": [
      "превосходит Cisco Rapid-PVST."
    ]
  },
  {
    "time": [
      360.58,
      366.36
    ],
    "en": [
      "If you have many VLANs, let’s say 200, in your network, configuring primary and secondary"
    ],
    "ru": [
      "Если у вас много виртуальных локальных сетей, скажем 200, в вашей сети, настраивая первичный и вторичный"
    ]
  },
  {
    "time": [
      366.36,
      369.509
    ],
    "en": [
      "root bridges in each VLAN is a lot of work."
    ],
    "ru": [
      "Для корневых мостов в каждой VLAN требуется много работы."
    ]
  },
  {
    "time": [
      369.509,
      377.25
    ],
    "en": [
      "However, with MSTP, all you have to do is assign VLANs 1 to 100 to instance 1, and VLANs"
    ],
    "ru": [
      "Однако с MSTP все, что вам нужно сделать, это назначить VLAN от 1 до 100 экземпляру 1, а VLAN"
    ]
  },
  {
    "time": [
      377.25,
      383.229
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
      377.25,
      383.229
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
      383.229,
      389.189
    ],
    "en": [
      "instance 1 and instance 2, so its much easier to configure and manage."
    ],
    "ru": [
      "экземпляр 1 и экземпляр 2, поэтому их намного проще настраивать и управлять."
    ]
  },
  {
    "time": [
      389.189,
      394.55
    ],
    "en": [
      "Actually, Cisco hasn’t developed their own version of MSTP, Cisco devices simply run"
    ],
    "ru": [
      "На самом деле Cisco не разработала собственную версию MSTP, устройства Cisco просто запускаются"
    ]
  },
  {
    "time": [
      394.55,
      398.28
    ],
    "en": [
      "the industry standard 802.1s."
    ],
    "ru": [
      "отраслевой стандарт 802.1s."
    ]
  },
  {
    "time": [
      398.28,
      403.65999999999997
    ],
    "en": [
      "For large networks, it’s best to use MSTP, however for small to medium networks without"
    ],
    "ru": [
      "Для больших сетей лучше использовать MSTP, но для малых и средних сетей без"
    ]
  },
  {
    "time": [
      403.65999999999997,
      410.3
    ],
    "en": [
      "a huge number of VLANs, Cisco’s Rapid PVST+ is what you’ll probably run on your switches,"
    ],
    "ru": [
      "огромное количество виртуальных локальных сетей, Cisco Rapid PVST + - это то, что вы, вероятно, будете запускать на своих коммутаторах,"
    ]
  },
  {
    "time": [
      410.3,
      412.76
    ],
    "en": [
      "and that’s the version we’ll be focusing on today."
    ],
    "ru": [
      "и именно на этой версии мы сосредоточимся сегодня."
    ]
  },
  {
    "time": [
      412.76,
      417.38
    ],
    "en": [
      "It’s also the version that is mentioned in the official exam topics list."
    ],
    "ru": [
      "Эта версия также упоминается в официальном списке тем экзамена."
    ]
  },
  {
    "time": [
      417.38,
      423.15
    ],
    "en": [
      "Also, all of this information here applies to the standard 802.1w, but that’s not the"
    ],
    "ru": [
      "Кроме того, вся эта информация относится к стандарту 802.1w, но это не"
    ]
  },
  {
    "time": [
      423.15,
      426.81
    ],
    "en": [
      "version that runs on Cisco switches."
    ],
    "ru": [
      "версия, которая работает на коммутаторах Cisco."
    ]
  },
  {
    "time": [
      426.81,
      432.999
    ],
    "en": [
      "The good news is, since you already understand classic STP and PVST+, it will be much easier"
    ],
    "ru": [
      "Хорошая новость в том, что, поскольку вы уже разбираетесь в классических STP и PVST +, это будет намного проще."
    ]
  },
  {
    "time": [
      432.999,
      442.56
    ],
    "en": [
      "to learn rapid STP and rapid PVST+ by comparing it to the previous versions. Let’s get started."
    ],
    "ru": [
      "изучить быстрый STP и быстрый PVST +, сравнив его с предыдущими версиями. Давайте начнем."
    ]
  },
  {
    "time": [
      442.56,
      446.99
    ],
    "en": [
      "Let’s get started. Before getting in to the details, here is Cisco’s summary of RSTP."
    ],
    "ru": [
      "Давайте начнем. Прежде чем перейти к деталям, вот краткое изложение RSTP от Cisco."
    ]
  },
  {
    "time": [
      446.99,
      455.81
    ],
    "en": [
      "RSTP is not a timer-based spanning tree algorithm like 802.1D. Therefore, RSTP offers an improvement"
    ],
    "ru": [
      "RSTP не является основанным на таймере алгоритмом связующего дерева, как 802.1D. Таким образом, RSTP предлагает улучшение"
    ]
  },
  {
    "time": [
      455.81,
      461.58
    ],
    "en": [
      "over the 30 seconds or more that 802.1D takes to move a link to forwarding."
    ],
    "ru": [
      "в течение 30 или более секунд, необходимых 802.1D, чтобы переместить ссылку на пересылку."
    ]
  },
  {
    "time": [
      461.58,
      466.469
    ],
    "en": [
      "The heart of the protocol is a new bridge-bridge handshake mechanism, which allows ports to"
    ],
    "ru": [
      "Ядром протокола является новый механизм установления связи мост-мост, который позволяет портам"
    ]
  },
  {
    "time": [
      466.469,
      467.99
    ],
    "en": [
      "move directly to forwarding."
    ],
    "ru": [
      "перейти непосредственно к пересылке."
    ]
  },
  {
    "time": [
      467.99,
      477.84000000000003
    ],
    "en": [
      "So, that’s the big difference between RSTP and 802.1D STP. 802.1D uses long timers to"
    ],
    "ru": [
      "Итак, в этом большая разница между RSTP и 802.1D STP. 802.1D использует длительные таймеры для"
    ]
  },
  {
    "time": [
      477.84000000000003,
      482.569
    ],
    "en": [
      "determine when it’s safe to move to the next state, and these timers are quite long,"
    ],
    "ru": [
      "определить, когда можно безопасно перейти к следующему состоянию, и эти таймеры довольно длинные,"
    ]
  },
  {
    "time": [
      482.569,
      487.34
    ],
    "en": [
      "to ensure that no loops are accidentally created when a port starts forwarding."
    ],
    "ru": [
      "чтобы гарантировать, что никакие петли не будут случайно созданы, когда порт начинает пересылку."
    ]
  },
  {
    "time": [
      487.34,
      491.91
    ],
    "en": [
      "Back when the original STP was created, it was acceptable that a port could take 30 to"
    ],
    "ru": [
      "Когда был создан исходный протокол STP, было допустимо, чтобы порт занимал от 30 до"
    ]
  },
  {
    "time": [
      491.91,
      496.33
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
      491.91,
      496.33
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
      496.33,
      498.539
    ],
    "en": [
      "However that’s no longer the case."
    ],
    "ru": [
      "Однако это уже не так."
    ]
  },
  {
    "time": [
      498.539,
      504.259
    ],
    "en": [
      "So, RSTP uses a ‘handshake’ mechanism, which allows switches to actively negotiate"
    ],
    "ru": [
      "Таким образом, RSTP использует механизм «рукопожатия», который позволяет коммутаторам активно согласовывать"
    ]
  },
  {
    "time": [
      504.259,
      509.33
    ],
    "en": [
      "with other switches and move ports immediately to the forwarding state if appropriate."
    ],
    "ru": [
      "с другими коммутаторами и при необходимости немедленно переведите порты в состояние пересылки."
    ]
  },
  {
    "time": [
      509.33,
      514.5
    ],
    "en": [
      "Okay, now I will introduce some of the specifics of RSTP."
    ],
    "ru": [
      "Хорошо, теперь я расскажу о некоторых особенностях RSTP."
    ]
  },
  {
    "time": [
      514.5,
      520.21
    ],
    "en": [
      "By the way, I will probably say RSTP sometimes, and Rapid PVST+ other times."
    ],
    "ru": [
      "Кстати, иногда я, вероятно, назову RSTP, а иногда Rapid PVST +."
    ]
  },
  {
    "time": [
      520.21,
      522.86
    ],
    "en": [
      "Really, I’m talking about the same thing."
    ],
    "ru": [
      "На самом деле я говорю об одном и том же."
    ]
  },
  {
    "time": [
      522.86,
      528.64
    ],
    "en": [
      "Cisco’s Rapid PVST+ operates the same as RSTP, but with the addition of a separate"
    ],
    "ru": [
      "Cisco Rapid PVST + работает так же, как RSTP, но с добавлением отдельного"
    ]
  },
  {
    "time": [
      528.64,
      534.19
    ],
    "en": [
      "instance for each VLAN, so I will use the two terms interchangeably."
    ],
    "ru": [
      "экземпляр для каждой VLAN, поэтому я буду использовать эти два термина как синонимы."
    ]
  },
  {
    "time": [
      534.19,
      540.75
    ],
    "en": [
      "Let’s summarize some similarities between STP and RSTP."
    ],
    "ru": [
      "Подведем итог некоторым сходствам между STP и RSTP."
    ]
  },
  {
    "time": [
      540.75,
      547.82
    ],
    "en": [
      "First of all, RSTP serves the same purpose as STP, blocking specific ports to prevent Layer 2 loops."
    ],
    "ru": [
      "Прежде всего, RSTP служит той же цели, что и STP, блокируя определенные порты для предотвращения петель уровня 2."
    ]
  },
  {
    "time": [
      547.82,
      552.31
    ],
    "en": [
      "Layer 2 loops. RSTP elects a root bridge with the same rules as STP."
    ],
    "ru": [
      "Слой 2 петли. RSTP выбирает корневой мост по тем же правилам, что и STP."
    ]
  },
  {
    "time": [
      552.31,
      558.04
    ],
    "en": [
      "I’m sure you know it by now, the switch with the lowest bridge ID becomes the root bridge."
    ],
    "ru": [
      "Я уверен, что вы уже знаете, что коммутатор с наименьшим идентификатором моста становится корневым мостом."
    ]
  },
  {
    "time": [
      558.04,
      561.95
    ],
    "en": [
      "bridge. RSTP also elects root ports with the same rules as STP."
    ],
    "ru": [
      "мост. RSTP также выбирает корневые порты по тем же правилам, что и STP."
    ]
  },
  {
    "time": [
      561.95,
      568.07
    ],
    "en": [
      "So, the interface with the lowest root cost becomes the root port, with the same tie-breakers,"
    ],
    "ru": [
      "Таким образом, интерфейс с наименьшими корневыми затратами становится корневым портом с теми же разрешениями конфликтов,"
    ]
  },
  {
    "time": [
      568.07,
      571.79
    ],
    "en": [
      "neighbor bridge ID and then neighbor port ID."
    ],
    "ru": [
      "идентификатор соседнего моста, а затем идентификатор соседнего порта."
    ]
  },
  {
    "time": [
      571.79,
      575.74
    ],
    "en": [
      "You studied this in day 20’s video, our first video on STP."
    ],
    "ru": [
      "Вы изучали это в видео 20-го дня, нашем первом видео на STP."
    ]
  },
  {
    "time": [
      575.74,
      580.67
    ],
    "en": [
      "Finally, RSTP elects designated ports with the same rules as STP."
    ],
    "ru": [
      "Наконец, RSTP выбирает назначенные порты с теми же правилами, что и STP."
    ]
  },
  {
    "time": [
      580.67,
      587.72
    ],
    "en": [
      "So, the interface on the switch with the lowest root cost will become designated and the interface"
    ],
    "ru": [
      "Таким образом, интерфейс коммутатора с наименьшими корневыми затратами станет назначенным, а интерфейс"
    ]
  },
  {
    "time": [
      587.72,
      590.76
    ],
    "en": [
      "on the other switch will be non-designated."
    ],
    "ru": [
      "на другом переключателе не будет назначен."
    ]
  },
  {
    "time": [
      590.76,
      596.97
    ],
    "en": [
      "If there is a tie, the switch with the lowest bridge ID will set its interface to designated."
    ],
    "ru": [
      "Если есть связь, коммутатор с наименьшим идентификатором моста установит свой интерфейс на назначенный."
    ]
  },
  {
    "time": [
      596.97,
      602.76
    ],
    "en": [
      "Cisco has said that RSTP isn’t a ‘revolution’ of STP, just an ‘evolution’."
    ],
    "ru": [
      "Cisco заявила, что RSTP - это не «революция» STP, а просто «эволюция»."
    ]
  },
  {
    "time": [
      602.76,
      607.64
    ],
    "en": [
      "It made some major improvements to speed up STP, but it didn’t change it completely,"
    ],
    "ru": [
      "Были внесены некоторые существенные улучшения для ускорения STP, но это не изменило его полностью,"
    ]
  },
  {
    "time": [
      607.64,
      609.57
    ],
    "en": [
      "as you can see here."
    ],
    "ru": [
      "как вы можете видеть здесь."
    ]
  },
  {
    "time": [
      609.57,
      614.73
    ],
    "en": [
      "Now let’s look at some of the differences of STP and RSTP."
    ],
    "ru": [
      "Теперь давайте посмотрим на некоторые различия STP и RSTP."
    ]
  },
  {
    "time": [
      614.73,
      618.62
    ],
    "en": [
      "First up, port costs were updated for rapid spanning tree."
    ],
    "ru": [
      "Во-первых, стоимость портов была обновлена ​​для быстрого связующего дерева."
    ]
  },
  {
    "time": [
      618.62,
      623.77
    ],
    "en": [
      "Classic spanning tree defines port speeds up to 10 Gbps, and I believe port speeds faster"
    ],
    "ru": [
      "Классическое связующее дерево определяет скорость порта до 10 Гбит / с, и я считаю, что скорость порта выше."
    ]
  },
  {
    "time": [
      623.77,
      626.53
    ],
    "en": [
      "than this are all given a cost of 1."
    ],
    "ru": [
      "чем все это имеет стоимость 1."
    ]
  },
  {
    "time": [
      626.53,
      631.51
    ],
    "en": [
      "To accommodate for faster speeds, RSTP’s cost values were expanded."
    ],
    "ru": [
      "Чтобы обеспечить более высокую скорость, стоимость RSTP была расширена."
    ]
  },
  {
    "time": [
      631.51,
      640.35
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
      631.51,
      640.35
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
      640.35,
      648.27
    ],
    "en": [
      "for 10 gbps, 200 for 100 gbps, and 20 for 1 Tbps."
    ],
    "ru": [
      "для 10 Гбит / с, 200 для 100 Гбит / с и 20 для 1 Тбит / с."
    ]
  },
  {
    "time": [
      648.27,
      652.82
    ],
    "en": [
      "Beyond this, a 10 terabit-per-second interface would have a cost of 2."
    ],
    "ru": [
      "Помимо этого, интерфейс со скоростью 10 терабит в секунду будет стоить 2."
    ]
  },
  {
    "time": [
      652.82,
      657.06
    ],
    "en": [
      "Use the flashcards to remember the port costs of both classic STP and rapid STP."
    ],
    "ru": [
      "Используйте карточки, чтобы запомнить стоимость портов как для классического, так и для быстрого STP."
    ]
  },
  {
    "time": [
      657.06,
      663.86
    ],
    "en": [
      "Here’s a slide from day 21, the different port states of classic spanning tree protocol."
    ],
    "ru": [
      "Вот слайд с 21-го дня, различные состояния портов классического протокола связующего дерева."
    ]
  },
  {
    "time": [
      663.86,
      669.05
    ],
    "en": [
      "Hopefully you remember these states, which ones send and receive BPDUs, which one forwards"
    ],
    "ru": [
      "Надеюсь, вы помните эти состояния: какие отправляют и получают BPDU, какие пересылают."
    ]
  },
  {
    "time": [
      669.05,
      673.02
    ],
    "en": [
      "traffic, which ones learn MAC addresses, etc."
    ],
    "ru": [
      "трафик, который изучает MAC-адреса и т. д."
    ]
  },
  {
    "time": [
      673.02,
      678.92
    ],
    "en": [
      "However, rapid spanning tree simplifies the port states, reducing them to just 3, by combining"
    ],
    "ru": [
      "Однако быстрое связующее дерево упрощает состояния портов, сокращая их до трех, за счет объединения"
    ]
  },
  {
    "time": [
      678.92,
      681.55
    ],
    "en": [
      "three of these states into one."
    ],
    "ru": [
      "три из этих состояний в одно."
    ]
  },
  {
    "time": [
      681.55,
      687.16
    ],
    "en": [
      "The three states that are combined into one are blocking, listening, and disabled."
    ],
    "ru": [
      "Три состояния объединены в одно: блокировка, прослушивание и отключение."
    ]
  },
  {
    "time": [
      687.16,
      692.89
    ],
    "en": [
      "Actually, a more accurate way is to say the blocking and disabled port states were combined"
    ],
    "ru": [
      "На самом деле, более точный способ сказать, что состояния блокировки и отключенного порта были объединены."
    ]
  },
  {
    "time": [
      692.89,
      696.88
    ],
    "en": [
      "into one, and the listening state is simply not used."
    ],
    "ru": [
      "в один, и состояние прослушивания просто не используется."
    ]
  },
  {
    "time": [
      696.88,
      704.42
    ],
    "en": [
      "So, the listening state is gone, and the blocking and disabled states have become the discarding state."
    ],
    "ru": [
      "Таким образом, состояние прослушивания исчезло, а состояния блокировки и отключения стали состоянием отмены."
    ]
  },
  {
    "time": [
      704.42,
      709.31
    ],
    "en": [
      "state. If a port is administratively disabled, meaning it has the shutdown command applied to it,"
    ],
    "ru": [
      "штат. Если порт отключен административно, то есть к нему применена команда выключения,"
    ]
  },
  {
    "time": [
      709.31,
      712.67
    ],
    "en": [
      "it will be in a discarding state in RSTP."
    ],
    "ru": [
      "он будет в состоянии отбрасывания в RSTP."
    ]
  },
  {
    "time": [
      712.67,
      715.68
    ],
    "en": [
      "This was previously the disabled state."
    ],
    "ru": [
      "Ранее это было отключенное состояние."
    ]
  },
  {
    "time": [
      715.68,
      722.01
    ],
    "en": [
      "If a port is enabled but blocking traffic to prevent Layer 2 loops, it is also in a discarding state."
    ],
    "ru": [
      "Если порт включен, но блокирует трафик для предотвращения петель уровня 2, он также находится в состоянии отбрасывания."
    ]
  },
  {
    "time": [
      722.01,
      724.79
    ],
    "en": [
      "discarding state. This was previously the blocking state."
    ],
    "ru": [
      "отказавшись от состояния. Ранее это было состояние блокировки."
    ]
  },
  {
    "time": [
      724.79,
      727.5
    ],
    "en": [
      "Next, how about port roles?"
    ],
    "ru": [
      "А как насчет ролей портов?"
    ]
  },
  {
    "time": [
      727.5,
      733.94
    ],
    "en": [
      "Remember, the three original port roles are root, designated, and non-designated."
    ],
    "ru": [
      "Помните, что три исходные роли порта: root, назначенный и неназначенный."
    ]
  },
  {
    "time": [
      733.94,
      737.57
    ],
    "en": [
      "The root port role remains unchanged in RSTP."
    ],
    "ru": [
      "Роль корневого порта в RSTP остается неизменной."
    ]
  },
  {
    "time": [
      737.57,
      742.18
    ],
    "en": [
      "The port that is closest to the root bridge becomes the root port for the switch."
    ],
    "ru": [
      "Порт, ближайший к корневому мосту, становится корневым портом для коммутатора."
    ]
  },
  {
    "time": [
      742.18,
      745.83
    ],
    "en": [
      "Of course, ‘closest’ means the port with the lowest root cost."
    ],
    "ru": [
      "Конечно, «ближайший» означает порт с наименьшими корневыми затратами."
    ]
  },
  {
    "time": [
      745.83,
      750.47
    ],
    "en": [
      "Also, the root bridge is the only switch that doesn’t have a root port."
    ],
    "ru": [
      "Кроме того, корневой мост - единственный коммутатор, у которого нет корневого порта."
    ]
  },
  {
    "time": [
      750.47,
      756.15
    ],
    "en": [
      "So, these points are the same as what you already learned about classic spanning tree."
    ],
    "ru": [
      "Итак, эти моменты совпадают с тем, что вы уже узнали о классическом остовном дереве."
    ]
  },
  {
    "time": [
      756.15,
      760.56
    ],
    "en": [
      "The designated port role also remains unchanged in RSTP."
    ],
    "ru": [
      "Роль назначенного порта также остается неизменной в RSTP."
    ]
  },
  {
    "time": [
      760.56,
      764.99
    ],
    "en": [
      "The port on a segment (which is another name for a collision domain) that sends the best"
    ],
    "ru": [
      "Порт в сегменте (это другое имя домена коллизии), который отправляет лучшие"
    ]
  },
  {
    "time": [
      764.99,
      772.2
    ],
    "en": [
      "BPDU is that segment’s designated port, and there can only be one designated port per segment."
    ],
    "ru": [
      "BPDU - это назначенный порт этого сегмента, и в каждом сегменте может быть только один назначенный порт."
    ]
  },
  {
    "time": [
      772.2,
      778.36
    ],
    "en": [
      "per segment. The other port on the segment is either a root port, or a non-designated port in classic spanning tree."
    ],
    "ru": [
      "на сегмент. Другой порт в сегменте является либо корневым, либо неназначенным портом в классическом связующем дереве."
    ]
  },
  {
    "time": [
      778.36,
      784.8
    ],
    "en": [
      "spanning tree. However, the non-designated port role was divided into two separate roles in RSTP."
    ],
    "ru": [
      "остовное дерево. Однако роль неназначенного порта была разделена на две отдельные роли в RSTP."
    ]
  },
  {
    "time": [
      784.8,
      788.85
    ],
    "en": [
      "Those are the alternate port role and the backup port role."
    ],
    "ru": [
      "Это роль альтернативного порта и роль резервного порта."
    ]
  },
  {
    "time": [
      788.85,
      793.2
    ],
    "en": [
      "Let’s break down those two roles."
    ],
    "ru": [
      "Давайте разделим эти две роли."
    ]
  },
  {
    "time": [
      793.2,
      795.7
    ],
    "en": [
      "First up, the alternate port role."
    ],
    "ru": [
      "Во-первых, роль альтернативного порта."
    ]
  },
  {
    "time": [
      795.7,
      803.81
    ],
    "en": [
      "The RSTP alternate port role is a discarding port that receives a superior BPDU from another switch."
    ],
    "ru": [
      "Роль альтернативного порта RSTP - это порт отбрасывания, который получает вышестоящий BPDU от другого коммутатора."
    ]
  },
  {
    "time": [
      803.81,
      808.57
    ],
    "en": [
      "switch. This is the same as what you’ve already learned about blocking ports in classic STP."
    ],
    "ru": [
      "выключатель. Это то же самое, что вы уже узнали о блокировке портов в классическом STP."
    ]
  },
  {
    "time": [
      808.57,
      813.35
    ],
    "en": [
      "In our little topology down here, SW1 is the root bridge."
    ],
    "ru": [
      "В нашей небольшой топологии здесь SW1 является корневым мостом."
    ]
  },
  {
    "time": [
      813.35,
      819.43
    ],
    "en": [
      "When BPDUs are sent in this topology, SW3 receives a superior BPDU from SW2."
    ],
    "ru": [
      "Когда BPDU отправляются в этой топологии, SW3 получает вышестоящий BPDU от SW2."
    ]
  },
  {
    "time": [
      819.43,
      824.23
    ],
    "en": [
      "It’s superior because the bridge ID of SW2 is lower than SW3."
    ],
    "ru": [
      "Это лучше, потому что идентификатор моста SW2 ниже, чем SW3."
    ]
  },
  {
    "time": [
      824.23,
      831.05
    ],
    "en": [
      "So, SW2’s interface is designated, and SW3’s is an alternate port."
    ],
    "ru": [
      "Итак, интерфейс SW2 обозначен, а SW3 - альтернативный порт."
    ]
  },
  {
    "time": [
      831.05,
      835.37
    ],
    "en": [
      "An alternate port basically functions as a backup to the root port."
    ],
    "ru": [
      "Альтернативный порт в основном работает как резервная копия корневого порта."
    ]
  },
  {
    "time": [
      835.37,
      840.44
    ],
    "en": [
      "If the root port fails, the switch can immediately move its best alternate port to forwarding,"
    ],
    "ru": [
      "Если корневой порт выходит из строя, коммутатор может немедленно перевести свой лучший альтернативный порт на пересылку,"
    ]
  },
  {
    "time": [
      840.44,
      842.19
    ],
    "en": [
      "as the new root port."
    ],
    "ru": [
      "в качестве нового корневого порта."
    ]
  },
  {
    "time": [
      842.19,
      847.98
    ],
    "en": [
      "If SW3’s root port fails, its alternate port is ready to immediately become the root"
    ],
    "ru": [
      "Если корневой порт SW3 выходит из строя, его альтернативный порт готов немедленно стать корневым."
    ]
  },
  {
    "time": [
      847.98,
      851.18
    ],
    "en": [
      "port, with no transitional states."
    ],
    "ru": [
      "порт, без переходных состояний."
    ]
  },
  {
    "time": [
      851.18,
      858.54
    ],
    "en": [
      "This immediate move to forwarding state functions like a classic STP optional feature called UplinkFast."
    ],
    "ru": [
      "Этот немедленный переход к состоянию пересылки функционирует подобно классической дополнительной функции STP под названием UplinkFast."
    ]
  },
  {
    "time": [
      858.54,
      866.93
    ],
    "en": [
      "UplinkFast. Because it is built into RSTP, you do not need to activate UplinkFast when using RSTP or Rapid PVST+."
    ],
    "ru": [
      "UplinkFast. Поскольку он встроен в RSTP, вам не нужно активировать UplinkFast при использовании RSTP или Rapid PVST +."
    ]
  },
  {
    "time": [
      866.93,
      871.47
    ],
    "en": [
      "PVST+. We didn’t look at UplinkFast in the previous videos, its not mentioned in the exam topics"
    ],
    "ru": [
      "PVST +. В предыдущих видео мы не смотрели UplinkFast, он не упоминается в темах экзамена."
    ]
  },
  {
    "time": [
      871.47,
      876.45
    ],
    "en": [
      "list, but try to remember that its functions are built into rapid spanning tree, you might"
    ],
    "ru": [
      "list, но постарайтесь помнить, что его функции встроены в быстрое связующее дерево, вы можете"
    ]
  },
  {
    "time": [
      876.45,
      879.2
    ],
    "en": [
      "get asked about that on the exam."
    ],
    "ru": [
      "спросите об этом на экзамене."
    ]
  },
  {
    "time": [
      879.2,
      886.19
    ],
    "en": [
      "So, UplinkFast is one STP optional feature that was incorporated into RSTP."
    ],
    "ru": [
      "Итак, UplinkFast - это дополнительная функция STP, которая была включена в RSTP."
    ]
  },
  {
    "time": [
      886.19,
      892.04
    ],
    "en": [
      "Since I just mentioned one, I’d like to briefly explain one more that was incorporated into RSTP."
    ],
    "ru": [
      "Поскольку я только что упомянул один, я хотел бы вкратце объяснить еще один, который был включен в RSTP."
    ]
  },
  {
    "time": [
      892.04,
      896.83
    ],
    "en": [
      "into RSTP. Neither of these are on the exam topics list so you don’t have to learn them in depth,"
    ],
    "ru": [
      "в RSTP. Ни одна из этих тем не входит в список тем экзамена, поэтому вам не нужно их углубленно изучать,"
    ]
  },
  {
    "time": [
      896.83,
      903.3
    ],
    "en": [
      "but just be aware of their general functionality, because they are part of RSTP."
    ],
    "ru": [
      "но просто помните об их общих функциях, потому что они являются частью RSTP."
    ]
  },
  {
    "time": [
      903.3,
      909.22
    ],
    "en": [
      "One more STP optional feature that was built into RSTP is BackboneFast."
    ],
    "ru": [
      "Еще одна дополнительная функция STP, встроенная в RSTP, - BackboneFast."
    ]
  },
  {
    "time": [
      909.22,
      915.87
    ],
    "en": [
      "Let’s say SW2’s root port is cut off, so it stops receiving BPDUs from the root bridge."
    ],
    "ru": [
      "Допустим, корневой порт SW2 отключен, поэтому он перестает получать BPDU от корневого моста."
    ]
  },
  {
    "time": [
      915.87,
      921.29
    ],
    "en": [
      "bridge. It will then assume it is the root bridge, so it will send it’s own BPDUs to SW3."
    ],
    "ru": [
      "мост. Затем он предположит, что это корневой мост, поэтому он отправит свои собственные BPDU в SW3."
    ]
  },
  {
    "time": [
      921.29,
      930.22
    ],
    "en": [
      "However, SW3 is now receiving BPDUs from both SW1 and SW2, but SW2’s BPDUs are inferior,"
    ],
    "ru": [
      "Однако SW3 теперь получает BPDU от SW1 и SW2, но BPDU SW2 хуже,"
    ]
  },
  {
    "time": [
      930.22,
      932.93
    ],
    "en": [
      "they have a higher bridge ID."
    ],
    "ru": [
      "у них есть более высокий идентификатор моста."
    ]
  },
  {
    "time": [
      932.93,
      939.09
    ],
    "en": [
      "Without this backbonefast functionality, SW3 would just ignore these BPDUs from SW2 until"
    ],
    "ru": [
      "Без этой функции backbonefast SW3 просто игнорировал бы эти BPDU от SW2 до тех пор, пока"
    ]
  },
  {
    "time": [
      939.09,
      944.18
    ],
    "en": [
      "it’s non-designated port, in classic STP, finally changes to a forwarding state and"
    ],
    "ru": [
      "в классическом протоколе STP неназначенный порт наконец переходит в состояние пересылки и"
    ]
  },
  {
    "time": [
      944.18,
      950.87
    ],
    "en": [
      "forwards the superior BPDUs to SW2, which then accepts SW1 as its root bridge again."
    ],
    "ru": [
      "перенаправляет вышестоящие BPDU на SW2, который затем снова принимает SW1 в качестве корневого моста."
    ]
  },
  {
    "time": [
      950.87,
      957.11
    ],
    "en": [
      "However, BackboneFast allows SW3 to expire the max age timer on that interface and rapidly"
    ],
    "ru": [
      "Однако BackboneFast позволяет SW3 истекать таймер максимального возраста на этом интерфейсе и быстро"
    ]
  },
  {
    "time": [
      957.11,
      961.09
    ],
    "en": [
      "forward the superior BPDUs to SW2."
    ],
    "ru": [
      "перенаправить вышестоящие BPDU в SW2."
    ]
  },
  {
    "time": [
      961.09,
      965.46
    ],
    "en": [
      "This functionality is built into RSTP, so it does not need to be configured."
    ],
    "ru": [
      "Эта функция встроена в RSTP, поэтому ее не нужно настраивать."
    ]
  },
  {
    "time": [
      965.46,
      969.68
    ],
    "en": [
      "So, that’s a very basic explanation of BackboneFast."
    ],
    "ru": [
      "Итак, это очень простое объяснение BackboneFast."
    ]
  },
  {
    "time": [
      969.68,
      975.01
    ],
    "en": [
      "Let’s look at a quick summary on the next slide."
    ],
    "ru": [
      "Давайте посмотрим на краткую сводку на следующем слайде."
    ]
  },
  {
    "time": [
      975.01,
      980.87
    ],
    "en": [
      "UplinkFast and BackboneFast are two optional features in classic STP."
    ],
    "ru": [
      "UplinkFast и BackboneFast - две дополнительные функции в классическом STP."
    ]
  },
  {
    "time": [
      980.87,
      984.92
    ],
    "en": [
      "They must be configured to operate on the switch, but it’s not necessary to know how"
    ],
    "ru": [
      "Они должны быть настроены для работы на коммутаторе, но знать, как"
    ]
  },
  {
    "time": [
      984.92,
      988.3
    ],
    "en": [
      "to do so for the CCNA."
    ],
    "ru": [
      "сделать это для CCNA."
    ]
  },
  {
    "time": [
      988.3,
      994.72
    ],
    "en": [
      "Both features are built into RSTP, so if the switch is running RSTP, you do not have to configure them."
    ],
    "ru": [
      "Обе функции встроены в RSTP, поэтому, если на коммутаторе работает RSTP, вам не нужно их настраивать."
    ]
  },
  {
    "time": [
      994.72,
      998.57
    ],
    "en": [
      "configure them. They operate by default on all switches running RSTP."
    ],
    "ru": [
      "настроить их. По умолчанию они работают на всех коммутаторах, на которых работает RSTP."
    ]
  },
  {
    "time": [
      998.57,
      1004.03
    ],
    "en": [
      "Finally, You do not need to have a detailed understanding of them for the CCNA."
    ],
    "ru": [
      "Наконец, вам не нужно иметь подробное представление о них для CCNA."
    ]
  },
  {
    "time": [
      1004.03,
      1009.8
    ],
    "en": [
      "I recommend that you know their names and their basic purpose, which is to help blocking or discarding"
    ],
    "ru": [
      "Я рекомендую вам знать их имена и их основную цель, которая состоит в том, чтобы помочь блокировать или отбрасывать"
    ]
  },
  {
    "time": [
      1009.8,
      1013.4
    ],
    "en": [
      "ports move to forwarding without delay."
    ],
    "ru": [
      "порты переходят на экспедирование без промедления."
    ]
  },
  {
    "time": [
      1013.4,
      1021.16
    ],
    "en": [
      "If you want to learn more, do a Google search for ‘spanning tree uplinkfast’ or ‘spanning tree backbonefast’."
    ],
    "ru": [
      "Если вы хотите узнать больше, выполните поиск в Google по запросу «spanning tree uplinkfast» или «spanning tree backbonefast»."
    ]
  },
  {
    "time": [
      1021.16,
      1025.449
    ],
    "en": [
      "tree backbonefast’. Learning how to effectively search on Google for information is an essential part of being"
    ],
    "ru": [
      "дерево backbonefast ». Изучение того, как эффективно искать информацию в Google, является важной частью"
    ]
  },
  {
    "time": [
      1025.449,
      1028.23
    ],
    "en": [
      "a good network engineer, to be honest."
    ],
    "ru": [
      "хороший сетевой инженер, если честно."
    ]
  },
  {
    "time": [
      1028.23,
      1032.64
    ],
    "en": [
      "We Google things all the time in our daily work, and you can bet I Google things a lot"
    ],
    "ru": [
      "В нашей повседневной работе мы все время гуглим, и можете поспорить, я много гулю"
    ]
  },
  {
    "time": [
      1032.64,
      1034.84
    ],
    "en": [
      "when preparing these videos."
    ],
    "ru": [
      "при подготовке этих видеороликов."
    ]
  },
  {
    "time": [
      1034.84,
      1039.91
    ],
    "en": [
      "So, if you ever want to learn more about a topic in one of these videos, take the chance"
    ],
    "ru": [
      "Итак, если вы когда-нибудь захотите узнать больше о теме в одном из этих видео, воспользуйтесь шансом"
    ]
  },
  {
    "time": [
      1039.91,
      1044.72
    ],
    "en": [
      "to improve your Google skills and try to search for some good resources."
    ],
    "ru": [
      "чтобы улучшить свои навыки работы с Google и попытаться найти хорошие ресурсы."
    ]
  },
  {
    "time": [
      1044.72,
      1051.62
    ],
    "en": [
      "Okay, after that little detour, let’s look at the last port role in RSTP."
    ],
    "ru": [
      "Хорошо, после этого небольшого обхода давайте посмотрим на последнюю роль порта в RSTP."
    ]
  },
  {
    "time": [
      1051.62,
      1055.67
    ],
    "en": [
      "We just saw the alternate port role, which is just like the non-designated port role"
    ],
    "ru": [
      "Мы только что видели роль альтернативного порта, которая аналогична роли неназначенного порта."
    ]
  },
  {
    "time": [
      1055.67,
      1058.86
    ],
    "en": [
      "we saw in the previous lectures."
    ],
    "ru": [
      "мы видели на предыдущих лекциях."
    ]
  },
  {
    "time": [
      1058.86,
      1062.32
    ],
    "en": [
      "Next up lets look at the backup port role."
    ],
    "ru": [
      "Теперь давайте посмотрим на роль резервного порта."
    ]
  },
  {
    "time": [
      1062.32,
      1068.26
    ],
    "en": [
      "The RSTP backup port role is a discarding port that receives a superior BPDU from another"
    ],
    "ru": [
      "Роль резервного порта RSTP - это порт отбрасывания, который получает вышестоящий BPDU от другого"
    ]
  },
  {
    "time": [
      1068.26,
      1071.32
    ],
    "en": [
      "interface on the same switch."
    ],
    "ru": [
      "интерфейс на том же коммутаторе."
    ]
  },
  {
    "time": [
      1071.32,
      1077.54
    ],
    "en": [
      "This only happens when two interfaces are connected to the same collision domain, via a hub."
    ],
    "ru": [
      "Это происходит только тогда, когда два интерфейса подключены к одному домену конфликтов через концентратор."
    ]
  },
  {
    "time": [
      1077.54,
      1082.92
    ],
    "en": [
      "a hub. Notice that there is now an ethernet hub connected between SW2 and SW3."
    ],
    "ru": [
      "концентратор. Обратите внимание, что теперь между SW2 и SW3 подключен концентратор Ethernet."
    ]
  },
  {
    "time": [
      1082.92,
      1089.03
    ],
    "en": [
      "When BPDUs are sent in this nework, the BPDU sent out of SW2’s designated port is flooded"
    ],
    "ru": [
      "Когда BPDU отправляются в этом новом интерфейсе, BPDU, отправленный из назначенного порта SW2, затоплен."
    ]
  },
  {
    "time": [
      1089.03,
      1094.94
    ],
    "en": [
      "by the hub, and as you can see here it receives that same BPDU on a different interface."
    ],
    "ru": [
      "концентратором, и, как вы можете видеть здесь, он получает тот же BPDU на другом интерфейсе."
    ]
  },
  {
    "time": [
      1094.94,
      1099.19
    ],
    "en": [
      "That’s why this interface is a backup port, not an alternate port."
    ],
    "ru": [
      "Вот почему этот интерфейс является резервным, а не альтернативным портом."
    ]
  },
  {
    "time": [
      1099.19,
      1104.23
    ],
    "en": [
      "However, I’ve already told you that hubs are not used in modern networks, so you will"
    ],
    "ru": [
      "Однако я уже говорил вам, что концентраторы не используются в современных сетях, поэтому вы будете"
    ]
  },
  {
    "time": [
      1104.23,
      1107.38
    ],
    "en": [
      "probably not encounter an RSTP backup port."
    ],
    "ru": [
      "вероятно, не встретил резервный порт RSTP."
    ]
  },
  {
    "time": [
      1107.38,
      1110.44
    ],
    "en": [
      "It’s still something you should know."
    ],
    "ru": [
      "Вы все еще должны это знать."
    ]
  },
  {
    "time": [
      1110.44,
      1115.26
    ],
    "en": [
      "RSTP backup ports function as a backup for a designated port."
    ],
    "ru": [
      "Резервные порты RSTP работают как резервные для назначенного порта."
    ]
  },
  {
    "time": [
      1115.26,
      1120.74
    ],
    "en": [
      "If SW2’s designated port fails, its backup port immediately begins forwarding traffic"
    ],
    "ru": [
      "Если назначенный порт SW2 выходит из строя, его резервный порт немедленно начинает пересылку трафика."
    ]
  },
  {
    "time": [
      1120.74,
      1122.66
    ],
    "en": [
      "as a designated port."
    ],
    "ru": [
      "как назначенный порт."
    ]
  },
  {
    "time": [
      1122.66,
      1127.23
    ],
    "en": [
      "Now, as for how the switch chooses which port will be the designated port and which will"
    ],
    "ru": [
      "Теперь, что касается того, как коммутатор выбирает, какой порт будет назначенным портом, а какой будет"
    ]
  },
  {
    "time": [
      1127.23,
      1132.67
    ],
    "en": [
      "be the backup port, the interface with the lowest port ID will be selected as the designated"
    ],
    "ru": [
      "быть резервным портом, интерфейс с наименьшим идентификатором порта будет выбран в качестве назначенного"
    ]
  },
  {
    "time": [
      1132.67,
      1136.55
    ],
    "en": [
      "port, and the other will be the backup port."
    ],
    "ru": [
      "порт, а другой порт будет резервным."
    ]
  },
  {
    "time": [
      1136.55,
      1139.62
    ],
    "en": [
      "Before moving on let’s try out a quiz question."
    ],
    "ru": [
      "Прежде чем двигаться дальше, давайте попробуем задать вопрос викторины."
    ]
  },
  {
    "time": [
      1139.62,
      1146.02
    ],
    "en": [
      "Identify the root bridge, and the RSTP port role of each switch interface in this network."
    ],
    "ru": [
      "Определите корневой мост и роль порта RSTP каждого интерфейса коммутатора в этой сети."
    ]
  },
  {
    "time": [
      1146.02,
      1149.68
    ],
    "en": [
      "By the way, the hub doesn’t participate in spanning tree."
    ],
    "ru": [
      "Кстати, хаб не участвует в связующем дереве."
    ]
  },
  {
    "time": [
      1149.68,
      1155.16
    ],
    "en": [
      "Hubs aren’t sophisticated enough to use spanning tree, so it just floods all frames it receives."
    ],
    "ru": [
      "Концентраторы недостаточно сложны, чтобы использовать связующее дерево, поэтому он просто заливает все получаемые кадры."
    ]
  },
  {
    "time": [
      1155.16,
      1161.72
    ],
    "en": [
      "it receives. Okay, pause the video here to find the answer."
    ],
    "ru": [
      "он получает. Хорошо, остановите видео здесь, чтобы найти ответ."
    ]
  },
  {
    "time": [
      1161.72,
      1164.36
    ],
    "en": [
      "Okay, let’s check the answer."
    ],
    "ru": [
      "Хорошо, давай проверим ответ."
    ]
  },
  {
    "time": [
      1164.36,
      1169.93
    ],
    "en": [
      "The root bridge is SW1, because all switches have the same priority and SW1 has the lowest"
    ],
    "ru": [
      "Корневой мост - это SW1, потому что все коммутаторы имеют одинаковый приоритет, а SW1 - самый низкий."
    ]
  },
  {
    "time": [
      1169.93,
      1173.08
    ],
    "en": [
      "MAC address, it is elected as the root."
    ],
    "ru": [
      "MAC-адрес, он выбран корневым."
    ]
  },
  {
    "time": [
      1173.08,
      1177.22
    ],
    "en": [
      "Its interfaces are designated ports."
    ],
    "ru": [
      "Его интерфейсы являются назначенными портами."
    ]
  },
  {
    "time": [
      1177.22,
      1179.01
    ],
    "en": [
      "These are the root ports for each switch."
    ],
    "ru": [
      "Это корневые порты для каждого коммутатора."
    ]
  },
  {
    "time": [
      1179.01,
      1184.78
    ],
    "en": [
      "SW2 and SW3’s root ports are obvious, they have the lowest root cost."
    ],
    "ru": [
      "Корневые порты SW2 и SW3 очевидны, у них самая низкая стоимость корня."
    ]
  },
  {
    "time": [
      1184.78,
      1187.51
    ],
    "en": [
      "How about SW4’s root port?"
    ],
    "ru": [
      "Как насчет корневого порта SW4?"
    ]
  },
  {
    "time": [
      1187.51,
      1193.4
    ],
    "en": [
      "The hub doesn’t participate in STP so it doesn’t add any cost to the BPDU, so why"
    ],
    "ru": [
      "Хаб не участвует в STP, поэтому он не добавляет затрат на BPDU, так почему"
    ]
  },
  {
    "time": [
      1193.4,
      1197.06
    ],
    "en": [
      "did SW4 choose G0/1 over G0/0?"
    ],
    "ru": [
      "SW4 выбрал G0 / 1 вместо G0 / 0?"
    ]
  },
  {
    "time": [
      1197.06,
      1204.89
    ],
    "en": [
      "It’s because the neighbor bridge ID is lower via G0/1, because SW2 has a lower MAC address than SW3."
    ],
    "ru": [
      "Это потому, что идентификатор соседнего моста ниже через G0 / 1, потому что SW2 имеет более низкий MAC-адрес, чем SW3."
    ]
  },
  {
    "time": [
      1204.89,
      1210.14
    ],
    "en": [
      "than SW3. SW2’s G0/1 connected to SW4’s G0/1 becomes designated."
    ],
    "ru": [
      "чем SW3. G0 / 1 SW2, подключенный к G0 / 1 SW4, становится обозначенным."
    ]
  },
  {
    "time": [
      1210.14,
      1215.0
    ],
    "en": [
      "Now, how about the connection between SW3 and SW4?"
    ],
    "ru": [
      "А как насчет связи между SW3 и SW4?"
    ]
  },
  {
    "time": [
      1215.0,
      1218.46
    ],
    "en": [
      "First of all, which switch sets its interface to designated?"
    ],
    "ru": [
      "Прежде всего, какой переключатель устанавливает свой интерфейс на назначенный?"
    ]
  },
  {
    "time": [
      1218.46,
      1226.16
    ],
    "en": [
      "Well, SW3 has a lower root cost, so one of its interfaces will be the designated port. Which one?"
    ],
    "ru": [
      "Что ж, у SW3 более низкая стоимость корня, поэтому один из его интерфейсов будет назначенным портом. Который из?"
    ]
  },
  {
    "time": [
      1226.16,
      1233.17
    ],
    "en": [
      "Which one? G0/0 has the lower port ID, so it will be the designated port in this collision domain."
    ],
    "ru": [
      "Который из? G0 / 0 имеет нижний идентификатор порта, поэтому он будет назначенным портом в этом домене конфликтов."
    ]
  },
  {
    "time": [
      1233.17,
      1237.52
    ],
    "en": [
      "How about SW3’s G0/1 and SW4’s G0/0?"
    ],
    "ru": [
      "Как насчет G0 / 1 SW3 и G0 / 0 SW4?"
    ]
  },
  {
    "time": [
      1237.52,
      1243.761
    ],
    "en": [
      "SW3’s G0/1 receives the superior BPDU, with the lower port ID, from the same switch, so"
    ],
    "ru": [
      "G0 / 1 SW3 получает вышестоящий BPDU с нижним идентификатором порта от того же коммутатора, поэтому"
    ]
  },
  {
    "time": [
      1243.761,
      1246.11
    ],
    "en": [
      "it's a backup port."
    ],
    "ru": [
      "это резервный порт."
    ]
  },
  {
    "time": [
      1246.11,
      1253.59
    ],
    "en": [
      "SW4’s G0/0 receives the superior BPDU from a different switch, so it is an alternate port."
    ],
    "ru": [
      "G0 / 0 SW4 получает вышестоящий BPDU от другого коммутатора, поэтому это альтернативный порт."
    ]
  },
  {
    "time": [
      1253.59,
      1256.24
    ],
    "en": [
      "port. Okay, those are the answers."
    ],
    "ru": [
      "порт. Ладно, вот и ответы."
    ]
  },
  {
    "time": [
      1256.24,
      1258.14
    ],
    "en": [
      "Hopefully you answered correctly."
    ],
    "ru": [
      "Надеюсь, вы правильно ответили."
    ]
  },
  {
    "time": [
      1258.14,
      1263.78
    ],
    "en": [
      "If not, don’t worry, there will be more practice at the end of the video."
    ],
    "ru": [
      "Если нет, не волнуйтесь, в конце видео будет больше практики."
    ]
  },
  {
    "time": [
      1263.78,
      1269.06
    ],
    "en": [
      "Now let’s take a quick look at the CLI, I’m on SW3 here."
    ],
    "ru": [
      "Теперь давайте быстро взглянем на интерфейс командной строки, я здесь на SW3."
    ]
  },
  {
    "time": [
      1269.06,
      1274.91
    ],
    "en": [
      "As I showed you in the last video, there are three STP modes you can run on a Cisco switch,"
    ],
    "ru": [
      "Как я показал вам в последнем видео, на коммутаторе Cisco можно запустить три режима STP:"
    ]
  },
  {
    "time": [
      1274.91,
      1279.95
    ],
    "en": [
      "MST, PVST, and rapid-PVST."
    ],
    "ru": [
      "MST, PVST и quick-PVST."
    ]
  },
  {
    "time": [
      1279.95,
      1286.49
    ],
    "en": [
      "Rapid-PVST is the default on modern Cisco switches, so you probably won’t have to"
    ],
    "ru": [
      "Rapid-PVST используется по умолчанию на современных коммутаторах Cisco, поэтому вам, вероятно, не придется"
    ]
  },
  {
    "time": [
      1286.49,
      1295.27
    ],
    "en": [
      "use this command, but I entered SPANNING-TREE MODE RAPID-PVST to make sure it runs in rapid pvst mode."
    ],
    "ru": [
      "используйте эту команду, но я ввел SPANNING-TREE MODE RAPID-PVST, чтобы убедиться, что он работает в режиме быстрого pvst."
    ]
  },
  {
    "time": [
      1295.27,
      1299.19
    ],
    "en": [
      "pvst mode. Then I used SHOW SPANNING-TREE to confirm."
    ],
    "ru": [
      "режим pvst. Затем я использовал SHOW SPANNING-TREE для подтверждения."
    ]
  },
  {
    "time": [
      1299.19,
      1304.26
    ],
    "en": [
      "Notice that it says ‘Spanning tree enabled protocol rstp’."
    ],
    "ru": [
      "Обратите внимание, что там написано «Протокол с включенным связующим деревом rstp»."
    ]
  },
  {
    "time": [
      1304.26,
      1309.63
    ],
    "en": [
      "Previously when we were using classic STP, it said ‘ieee’, now it says ‘rstp’."
    ],
    "ru": [
      "Раньше, когда мы использовали классический протокол STP, он говорил «ieee», теперь он говорит «rstp»."
    ]
  },
  {
    "time": [
      1309.63,
      1316.42
    ],
    "en": [
      "Although it says ‘rstp’, this is in fact Cisco’s Rapid PVST+ running."
    ],
    "ru": [
      "Хотя там написано «rstp», на самом деле это работает Cisco Rapid PVST +."
    ]
  },
  {
    "time": [
      1316.42,
      1320.27
    ],
    "en": [
      "Now, the only other difference I want to point out is this."
    ],
    "ru": [
      "Единственное отличие, которое я хочу отметить, это следующее."
    ]
  },
  {
    "time": [
      1320.27,
      1326.27
    ],
    "en": [
      "As shown in the network diagram, SW3’s G0/1 interface has the ‘backup’ role."
    ],
    "ru": [
      "Как показано на схеме сети, интерфейс G0 / 1 SW3 выполняет «резервную» роль."
    ]
  },
  {
    "time": [
      1326.27,
      1335.07
    ],
    "en": [
      "The status is still listed as BLK for ‘blocking’, although this state is actually called ‘discarding’ in rapid STP."
    ],
    "ru": [
      "Статус по-прежнему отображается как BLK для «блокировки», хотя это состояние фактически называется «отбрасывание» в быстром STP."
    ]
  },
  {
    "time": [
      1335.07,
      1339.96
    ],
    "en": [
      "in rapid STP. I used the SHOW SPANNING-TREE command on SW4 also."
    ],
    "ru": [
      "в быстром STP. Я также использовал команду SHOW SPANNING-TREE на SW4."
    ]
  },
  {
    "time": [
      1339.96,
      1345.85
    ],
    "en": [
      "As in the network diagram, SW4’s G0/0 interface is an ‘Alternate’ port."
    ],
    "ru": [
      "Как и на схеме сети, интерфейс G0 / 0 SW4 является «альтернативным» портом."
    ]
  },
  {
    "time": [
      1345.85,
      1349.94
    ],
    "en": [
      "Once again, this command lists the status as ‘blocking’, but remember the rapid"
    ],
    "ru": [
      "Еще раз, эта команда показывает статус как «блокировка», но помните о быстром"
    ]
  },
  {
    "time": [
      1349.94,
      1353.77
    ],
    "en": [
      "STP name for this state is actually ‘discarding’."
    ],
    "ru": [
      "Имя STP для этого состояния фактически «отбрасывается»."
    ]
  },
  {
    "time": [
      1353.77,
      1361.02
    ],
    "en": [
      "Just one note about running different STP versions, Rapid STP IS compatible with classic STP."
    ],
    "ru": [
      "Только одно замечание о запуске разных версий STP, Rapid STP совместим с классическим STP."
    ]
  },
  {
    "time": [
      1361.02,
      1366.32
    ],
    "en": [
      "STP. The interface, or interfaces, on the rapid STP-enabled switch connected to the classic"
    ],
    "ru": [
      "STP. Интерфейс или интерфейсы на быстродействующем коммутаторе с поддержкой STP, подключенном к классическому"
    ]
  },
  {
    "time": [
      1366.32,
      1373.2
    ],
    "en": [
      "STP-enabled switch will operate in classic STP mode, with the same timers, the same blocking"
    ],
    "ru": [
      "Коммутатор с поддержкой STP будет работать в классическом режиме STP, с теми же таймерами, с той же блокировкой"
    ]
  },
  {
    "time": [
      1373.2,
      1377.35
    ],
    "en": [
      "to listening to learning to forwarding state process, etc."
    ],
    "ru": [
      "для прослушивания обучения переадресации государственного процесса и т. д."
    ]
  },
  {
    "time": [
      1377.35,
      1383.38
    ],
    "en": [
      "So, if you have a really old switch that doesn’t run rapid STP, you can still use it in a network"
    ],
    "ru": [
      "Итак, если у вас действительно старый коммутатор, на котором не работает быстрый протокол STP, вы все равно можете использовать его в сети."
    ]
  },
  {
    "time": [
      1383.38,
      1388.95
    ],
    "en": [
      "of rapid STP-enabled switches, they will adjust the operation of those specific interfaces"
    ],
    "ru": [
      "быстрых коммутаторов с поддержкой STP, они будут регулировать работу этих конкретных интерфейсов"
    ]
  },
  {
    "time": [
      1388.95,
      1391.1
    ],
    "en": [
      "to match the slower switch."
    ],
    "ru": [
      "чтобы соответствовать более медленному переключателю."
    ]
  },
  {
    "time": [
      1391.1,
      1398.62
    ],
    "en": [
      "So, in our network diagram, if SW4 was running classic STP, SW2 and SW3 would make these"
    ],
    "ru": [
      "Итак, на нашей сетевой диаграмме, если бы SW4 работал с классическим STP, SW2 и SW3 сделали бы эти"
    ]
  },
  {
    "time": [
      1398.62,
      1407.77
    ],
    "en": [
      "interfaces run in classic STP mode, but their interfaces connected to SW1 would remain in rapid STP mode."
    ],
    "ru": [
      "интерфейсы работают в классическом режиме STP, но их интерфейсы, подключенные к SW1, останутся в быстром режиме STP."
    ]
  },
  {
    "time": [
      1407.77,
      1411.95
    ],
    "en": [
      "rapid STP mode. Next let’s look at the updated BPDU for RSTP."
    ],
    "ru": [
      "быстрый режим STP. Теперь давайте посмотрим на обновленный BPDU для RSTP."
    ]
  },
  {
    "time": [
      1411.95,
      1417.3
    ],
    "en": [
      "Here on the left is the classic STP BPDU for comparsion, I made it smaller so you can see"
    ],
    "ru": [
      "Здесь слева классический STP BPDU для сравнения, я уменьшил его, чтобы вы могли видеть"
    ]
  },
  {
    "time": [
      1417.3,
      1420.82
    ],
    "en": [
      "the rapid STP BPDU better."
    ],
    "ru": [
      "быстрый STP BPDU лучше."
    ]
  },
  {
    "time": [
      1420.82,
      1426.58
    ],
    "en": [
      "Most of the BPDU remains unchanged, but there are some differences you should know."
    ],
    "ru": [
      "Большая часть BPDU остается неизменной, но есть некоторые отличия, о которых вам следует знать."
    ]
  },
  {
    "time": [
      1426.58,
      1431.1
    ],
    "en": [
      "As I mentioned last time, you don’t need to memorize the BPDU, that’s more depth"
    ],
    "ru": [
      "Как я упоминал в прошлый раз, вам не нужно запоминать BPDU, это больше"
    ]
  },
  {
    "time": [
      1431.1,
      1433.82
    ],
    "en": [
      "than is required for the CCNA."
    ],
    "ru": [
      "чем требуется для CCNA."
    ]
  },
  {
    "time": [
      1433.82,
      1439.13
    ],
    "en": [
      "You just need to know a few aspects of it and what kinds of things are included in it."
    ],
    "ru": [
      "Вам просто нужно знать несколько его аспектов и то, что в него входит."
    ]
  },
  {
    "time": [
      1439.13,
      1445.68
    ],
    "en": [
      "The first difference to know between these two BPDUs is here . Notice that the RSTP BPDU"
    ],
    "ru": [
      "Первое различие между этими двумя блоками BPDU, которое необходимо знать, здесь. Обратите внимание, что RSTP BPDU"
    ]
  },
  {
    "time": [
      1445.68,
      1451.33
    ],
    "en": [
      "has a protocol version of 2, whereas classic spanning tree has a version of 0."
    ],
    "ru": [
      "имеет версию протокола 2, тогда как классическое связующее дерево имеет версию 0."
    ]
  },
  {
    "time": [
      1451.33,
      1458.43
    ],
    "en": [
      "Remember these version numbers for the exam, 0 for classic STP, 2 for rapid STP."
    ],
    "ru": [
      "Запомните эти номера версий для экзамена: 0 для классического STP, 2 для быстрого STP."
    ]
  },
  {
    "time": [
      1458.43,
      1463.05
    ],
    "en": [
      "The rapid STP BPDU also has a BPDU type of 2."
    ],
    "ru": [
      "Быстрый STP BPDU также имеет тип BPDU 2."
    ]
  },
  {
    "time": [
      1463.05,
      1467.39
    ],
    "en": [
      "Now, the next difference is here."
    ],
    "ru": [
      "Теперь следующее отличие здесь."
    ]
  },
  {
    "time": [
      1467.39,
      1475.77
    ],
    "en": [
      "The classic STP BPDU uses only two bits of the BPDU flags, the 1st bit and the 8th bit."
    ],
    "ru": [
      "Классический STP BPDU использует только два бита флагов BPDU, 1-й и 8-й бит."
    ]
  },
  {
    "time": [
      1475.77,
      1481.72
    ],
    "en": [
      "However, the rapid STP BPDU uses all 8 bits."
    ],
    "ru": [
      "Однако быстрый STP BPDU использует все 8 бит."
    ]
  },
  {
    "time": [
      1481.72,
      1488.65
    ],
    "en": [
      "These flags are used in the negotiation process that allows rapid STP to converge much faster than classic STP."
    ],
    "ru": [
      "Эти флаги используются в процессе согласования, что позволяет быстрому протоколу STP сходиться намного быстрее, чем классический протокол STP."
    ]
  },
  {
    "time": [
      1488.65,
      1496.14
    ],
    "en": [
      "than classic STP. That’s all you really need to know about the rapid STP BPDU itself, compared to the previous version."
    ],
    "ru": [
      "чем классический STP. Это все, что вам действительно нужно знать о самом быстром STP BPDU по сравнению с предыдущей версией."
    ]
  },
  {
    "time": [
      1496.14,
      1498.88
    ],
    "en": [
      "previous version. But there is one more major difference."
    ],
    "ru": [
      "Предыдущая версия. Но есть еще одно существенное отличие."
    ]
  },
  {
    "time": [
      1498.88,
      1507.74
    ],
    "en": [
      "In classic STP, only the root bridge originated BPDUs, the other switches just forwarded the BPDUs they received."
    ],
    "ru": [
      "В классическом STP только корневой мост создает BPDU, другие коммутаторы просто пересылают полученные BPDU."
    ]
  },
  {
    "time": [
      1507.74,
      1514.6
    ],
    "en": [
      "BPDUs they received. In rapid STP, ALL switches originate and send their own BPDUs from their designated ports."
    ],
    "ru": [
      "Они получили BPDU. В быстром STP ВСЕ коммутаторы исходят и отправляют свои собственные пакеты BPDU через назначенные им порты."
    ]
  },
  {
    "time": [
      1514.6,
      1517.98
    ],
    "en": [
      "Let’s go through a few other differences."
    ],
    "ru": [
      "Давайте рассмотрим еще несколько отличий."
    ]
  },
  {
    "time": [
      1517.98,
      1525.14
    ],
    "en": [
      "First, as I just said, all switches running rapid STP send their own BPDUs."
    ],
    "ru": [
      "Во-первых, как я только что сказал, все коммутаторы, использующие быстрый протокол STP, отправляют свои собственные пакеты BPDU."
    ]
  },
  {
    "time": [
      1525.14,
      1529.34
    ],
    "en": [
      "Switches also ‘age’ the BPDU information much more quickly."
    ],
    "ru": [
      "Коммутаторы также намного быстрее \"состаривают\" информацию BPDU."
    ]
  },
  {
    "time": [
      1529.34,
      1535.41
    ],
    "en": [
      "In classic STP, a switch waits 10 hello intervals, which is 20 seconds."
    ],
    "ru": [
      "В классическом STP коммутатор ожидает 10 интервалов приветствия, что составляет 20 секунд."
    ]
  },
  {
    "time": [
      1535.41,
      1543.05
    ],
    "en": [
      "In rapid STP, a switch considers a neighbor lost if it misses 3 BPDUs, which is 6 seconds."
    ],
    "ru": [
      "В быстром STP коммутатор считает соседа потерянным, если он пропускает 3 BPDU, что составляет 6 секунд."
    ]
  },
  {
    "time": [
      1543.05,
      1548.69
    ],
    "en": [
      "It will then ‘flush’, meaning delete, all MAC addresses learned on that interface."
    ],
    "ru": [
      "Затем он «очистит», то есть удалит все MAC-адреса, полученные на этом интерфейсе."
    ]
  },
  {
    "time": [
      1548.69,
      1550.65
    ],
    "en": [
      "Why does it do this?"
    ],
    "ru": [
      "Почему он это делает?"
    ]
  },
  {
    "time": [
      1550.65,
      1556.13
    ],
    "en": [
      "Because the neighbor is down, it knows it cant reach anything through that interface any more."
    ],
    "ru": [
      "Поскольку сосед не работает, он знает, что больше ничего не может достичь через этот интерфейс."
    ]
  },
  {
    "time": [
      1556.13,
      1564.14
    ],
    "en": [
      "any more. For example, in this network traffic from PC1 to PC2 usually follows this path."
    ],
    "ru": [
      "больше. Например, в этой сети трафик от ПК1 к ПК2 обычно следует по этому пути."
    ]
  },
  {
    "time": [
      1564.14,
      1566.86
    ],
    "en": [
      "But what if this connection is cut off?"
    ],
    "ru": [
      "Но что, если это соединение оборвется?"
    ]
  },
  {
    "time": [
      1566.86,
      1570.37
    ],
    "en": [
      "This switch will think: I can’t reach this neighbor anymore."
    ],
    "ru": [
      "Этот переключатель будет думать: я больше не могу связаться с этим соседом."
    ]
  },
  {
    "time": [
      1570.37,
      1575.95
    ],
    "en": [
      "I’ll clear all entries for this interface from my MAC table, and its other interface will"
    ],
    "ru": [
      "Я удалю все записи для этого интерфейса из моей таблицы MAC-адресов, и его другой интерфейс будет"
    ]
  },
  {
    "time": [
      1575.95,
      1577.53
    ],
    "en": [
      "become the root port."
    ],
    "ru": [
      "стать корневым портом."
    ]
  },
  {
    "time": [
      1577.53,
      1583.09
    ],
    "en": [
      "Then, if PC1 wants to send traffic to PC2 again, it will go through the normal process"
    ],
    "ru": [
      "Затем, если ПК1 снова захочет отправить трафик на ПК2, он выполнит обычный процесс."
    ]
  },
  {
    "time": [
      1583.09,
      1589.45
    ],
    "en": [
      "of flooding until it learns the MAC address on this new interface, and traffic will now follow this path."
    ],
    "ru": [
      "лавинной рассылки, пока он не узнает MAC-адрес на этом новом интерфейсе, и трафик теперь будет следовать по этому пути."
    ]
  },
  {
    "time": [
      1589.45,
      1595.28
    ],
    "en": [
      "follow this path. That’s just a quick look at how topology changes are handled in rapid STP."
    ],
    "ru": [
      "следуйте по этому пути. Это всего лишь краткий обзор того, как изменения топологии обрабатываются в быстром протоколе STP."
    ]
  },
  {
    "time": [
      1595.28,
      1601.48
    ],
    "en": [
      "There is a lot of depth that we could go into about this, but its not necessary for the CCNA."
    ],
    "ru": [
      "Мы могли бы подробно рассказать об этом, но для CCNA это не обязательно."
    ]
  },
  {
    "time": [
      1601.48,
      1606.42
    ],
    "en": [
      "CCNA. If you want to go on to get your CCNP and CCIE, you’ll definitely have to study these"
    ],
    "ru": [
      "CCNA. Если вы хотите продолжить получать свои CCNP и CCIE, вам обязательно нужно изучить эти"
    ]
  },
  {
    "time": [
      1606.42,
      1610.01
    ],
    "en": [
      "processes more in depth."
    ],
    "ru": [
      "обрабатывает более подробно."
    ]
  },
  {
    "time": [
      1610.01,
      1614.27
    ],
    "en": [
      "Before I summarize everything and move on to the quiz, there is one more concept of"
    ],
    "ru": [
      "Прежде чем я обобщу все и перейду к викторине, есть еще одно понятие"
    ]
  },
  {
    "time": [
      1614.27,
      1618.77
    ],
    "en": [
      "RSTP you should know, the RSTP link types."
    ],
    "ru": [
      "Вы должны знать RSTP, типы ссылок RSTP."
    ]
  },
  {
    "time": [
      1618.77,
      1623.4
    ],
    "en": [
      "RSTP distinguishes between three different ‘link types’."
    ],
    "ru": [
      "RSTP различает три разных «типа ссылок»."
    ]
  },
  {
    "time": [
      1623.4,
      1625.74
    ],
    "en": [
      "The first type is edge."
    ],
    "ru": [
      "Первый тип - кромочный."
    ]
  },
  {
    "time": [
      1625.74,
      1629.76
    ],
    "en": [
      "An edge port is a port that is connected to an end host."
    ],
    "ru": [
      "Граничный порт - это порт, который подключен к конечному хосту."
    ]
  },
  {
    "time": [
      1629.76,
      1633.36
    ],
    "en": [
      "It moves directly to forwarding without negotiation."
    ],
    "ru": [
      "Он переходит непосредственно к пересылке без переговоров."
    ]
  },
  {
    "time": [
      1633.36,
      1635.059
    ],
    "en": [
      "Does this sound similar?"
    ],
    "ru": [
      "Похоже это звучит?"
    ]
  },
  {
    "time": [
      1635.059,
      1636.65
    ],
    "en": [
      "It sounds like portfast."
    ],
    "ru": [
      "Звучит как портвейн."
    ]
  },
  {
    "time": [
      1636.65,
      1640.73
    ],
    "en": [
      "Well, the portfast functionality was built into RSTP."
    ],
    "ru": [
      "Что ж, функциональность portfast была встроена в RSTP."
    ]
  },
  {
    "time": [
      1640.73,
      1651.5
    ],
    "en": [
      "So, there’s another STP optional feature built into RSTP by default, UplinkFast, BackboneFast, and now PortFast."
    ],
    "ru": [
      "Итак, есть еще одна дополнительная функция STP, встроенная в RSTP по умолчанию, UplinkFast, BackboneFast, а теперь и PortFast."
    ]
  },
  {
    "time": [
      1651.5,
      1654.35
    ],
    "en": [
      "and now PortFast. The next link type is point-to-point."
    ],
    "ru": [
      "а теперь и PortFast. Следующий тип связи - точка-точка."
    ]
  },
  {
    "time": [
      1654.35,
      1657.8
    ],
    "en": [
      "This is used for direct connections between two switches."
    ],
    "ru": [
      "Это используется для прямого соединения между двумя коммутаторами."
    ]
  },
  {
    "time": [
      1657.8,
      1663.12
    ],
    "en": [
      "However, there is one more type, although it is one you probably won’t use at all."
    ],
    "ru": [
      "Однако есть еще один тип, хотя вы, вероятно, вообще не будете его использовать."
    ]
  },
  {
    "time": [
      1663.12,
      1665.22
    ],
    "en": [
      "That type is shared."
    ],
    "ru": [
      "Этот тип является общим."
    ]
  },
  {
    "time": [
      1665.22,
      1669.74
    ],
    "en": [
      "This is a connection to a hub, like we saw earlier in the video."
    ],
    "ru": [
      "Это подключение к хабу, как мы видели ранее в видео."
    ]
  },
  {
    "time": [
      1669.74,
      1673.63
    ],
    "en": [
      "These connections must operate in half-duplex to avoid collisions."
    ],
    "ru": [
      "Эти соединения должны работать в полудуплексном режиме, чтобы избежать коллизий."
    ]
  },
  {
    "time": [
      1673.63,
      1679.75
    ],
    "en": [
      "Don’t confuse these link types with the spanning tree port roles or port states."
    ],
    "ru": [
      "Не путайте эти типы ссылок с ролями портов связующего дерева или состояниями портов."
    ]
  },
  {
    "time": [
      1679.75,
      1685.59
    ],
    "en": [
      "Basically, the point-to-point and shared link types just distinguish between full- and half-duplex"
    ],
    "ru": [
      "По сути, типы двухточечных и общих каналов просто различают полнодуплексный и полудуплексный режимы."
    ]
  },
  {
    "time": [
      1685.59,
      1690.36
    ],
    "en": [
      "connections, and the edge type is a port that uses portfast."
    ],
    "ru": [
      "соединений, а тип края - это порт, который использует portfast."
    ]
  },
  {
    "time": [
      1690.36,
      1695.33
    ],
    "en": [
      "Okay, let’s take a quick look at each type."
    ],
    "ru": [
      "Хорошо, давайте быстро рассмотрим каждый тип."
    ]
  },
  {
    "time": [
      1695.33,
      1699.62
    ],
    "en": [
      "As I said, edge ports are connected to end hosts."
    ],
    "ru": [
      "Как я уже сказал, граничные порты подключены к конечным хостам."
    ]
  },
  {
    "time": [
      1699.62,
      1703.559
    ],
    "en": [
      "Because there is no risk of creating a loop, they can move straight to the forwarding state"
    ],
    "ru": [
      "Поскольку нет риска создать петлю, они могут сразу перейти в состояние пересылки."
    ]
  },
  {
    "time": [
      1703.559,
      1705.63
    ],
    "en": [
      "without the negotiation process."
    ],
    "ru": [
      "без переговорного процесса."
    ]
  },
  {
    "time": [
      1705.63,
      1710.51
    ],
    "en": [
      "They function like a classic STP port with PortFast enabled."
    ],
    "ru": [
      "Они работают как классический порт STP с включенным PortFast."
    ]
  },
  {
    "time": [
      1710.51,
      1714.75
    ],
    "en": [
      "In fact, you configure an edge port simply by enabling portfast on the port."
    ],
    "ru": [
      "Фактически, вы настраиваете граничный порт, просто включив portfast на порту."
    ]
  },
  {
    "time": [
      1714.75,
      1719.75
    ],
    "en": [
      "Here is the command, just like in classic STP."
    ],
    "ru": [
      "Вот команда, как в классическом STP."
    ]
  },
  {
    "time": [
      1719.75,
      1725.16
    ],
    "en": [
      "So really, portfast and an RSTP edge port are the same thing."
    ],
    "ru": [
      "Так что на самом деле portfast и граничный порт RSTP - это одно и то же."
    ]
  },
  {
    "time": [
      1725.16,
      1729.75
    ],
    "en": [
      "In this network down here, which ports should be configured as edge ports?"
    ],
    "ru": [
      "Какие порты в этой сети должны быть настроены как граничные?"
    ]
  },
  {
    "time": [
      1729.75,
      1735.45
    ],
    "en": [
      "Pause the video if you want to think about it. Got the answer?"
    ],
    "ru": [
      "Поставьте видео на паузу, если хотите подумать. Получили ответ?"
    ]
  },
  {
    "time": [
      1735.45,
      1744.69
    ],
    "en": [
      "Got the answer? All of these ports, the ones connected to the PCs, should be configured as edge ports. Next up, point-to-point."
    ],
    "ru": [
      "Получили ответ? Все эти порты, подключенные к ПК, должны быть настроены как граничные порты. Далее, точка-точка."
    ]
  },
  {
    "time": [
      1744.69,
      1748.23
    ],
    "en": [
      "Next up, point-to-point. These ports connect directly to another switch."
    ],
    "ru": [
      "Далее, точка-точка. Эти порты подключаются напрямую к другому коммутатору."
    ]
  },
  {
    "time": [
      1748.23,
      1754.39
    ],
    "en": [
      "Because they connect to a switch, not a hub, they function in full-duplex mode."
    ],
    "ru": [
      "Поскольку они подключаются к коммутатору, а не к концентратору, они работают в полнодуплексном режиме."
    ]
  },
  {
    "time": [
      1754.39,
      1758.43
    ],
    "en": [
      "You don’t need to configure the interface as point-to-point, the switch should be able"
    ],
    "ru": [
      "Вам не нужно настраивать интерфейс как точка-точка, коммутатор должен иметь возможность"
    ]
  },
  {
    "time": [
      1758.43,
      1763.69
    ],
    "en": [
      "to detect that it is connected directly to another switch and will operate in full-duplex"
    ],
    "ru": [
      "чтобы определить, что он подключен напрямую к другому коммутатору и будет работать в полнодуплексном режиме"
    ]
  },
  {
    "time": [
      1763.69,
      1765.84
    ],
    "en": [
      "as a point-to-point port."
    ],
    "ru": [
      "как двухточечный порт."
    ]
  },
  {
    "time": [
      1765.84,
      1775.11
    ],
    "en": [
      "However, if you want to explicitly configure the point-to-point link type, use this command: SPANNING-TREE LINK-TYPE POINT-TO-POINT."
    ],
    "ru": [
      "Однако, если вы хотите явно настроить тип связи точка-точка, используйте эту команду: SPANNING-TREE LINK-TYPE POINT-TO-POINT."
    ]
  },
  {
    "time": [
      1775.11,
      1779.81
    ],
    "en": [
      "SPANNING-TREE LINK-TYPE POINT-TO-POINT. So, which connections in the diagram are point-to-point?"
    ],
    "ru": [
      "ТИП СВЯЗИ ОТКРЫТОГО ДЕРЕВА ТОЧКА-ТОЧКА. Итак, какие соединения на схеме являются двухточечными?"
    ]
  },
  {
    "time": [
      1779.81,
      1784.16
    ],
    "en": [
      "Pause the video to think about it."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать."
    ]
  },
  {
    "time": [
      1784.16,
      1785.6
    ],
    "en": [
      "Did you find the answer?"
    ],
    "ru": [
      "Вы нашли ответ?"
    ]
  },
  {
    "time": [
      1785.6,
      1791.76
    ],
    "en": [
      "It’s these three, the direct connections between two switches."
    ],
    "ru": [
      "Это три прямых соединения между двумя переключателями."
    ]
  },
  {
    "time": [
      1791.76,
      1796.21
    ],
    "en": [
      "Finally, shared ports connect to a hub."
    ],
    "ru": [
      "Наконец, общие порты подключаются к концентратору."
    ]
  },
  {
    "time": [
      1796.21,
      1803.45
    ],
    "en": [
      "Due to the nature of hubs and the likelihood of collisions, these links must function in half duplex."
    ],
    "ru": [
      "Из-за природы концентраторов и вероятности коллизий эти каналы должны работать в полудуплексном режиме."
    ]
  },
  {
    "time": [
      1803.45,
      1808.22
    ],
    "en": [
      "half duplex. Once again, you don’t need to configure the interface in shared mode, the switch will detect it."
    ],
    "ru": [
      "полудуплекс. Опять же, вам не нужно настраивать интерфейс в режиме общего доступа, коммутатор обнаружит это."
    ]
  },
  {
    "time": [
      1808.22,
      1815.49
    ],
    "en": [
      "detect it. However, to manually configure it, use this command: SPANNING-TREE LINK-TYPE SHARED."
    ],
    "ru": [
      "обнаружить это. Однако, чтобы настроить его вручную, используйте эту команду: SPANNING-TREE LINK-TYPE SHARED."
    ]
  },
  {
    "time": [
      1815.49,
      1820.21
    ],
    "en": [
      "Although you should be aware of this type of RSTP link, as I already said, you will"
    ],
    "ru": [
      "Хотя вы должны знать об этом типе ссылки RSTP, как я уже сказал, вы"
    ]
  },
  {
    "time": [
      1820.21,
      1825.299
    ],
    "en": [
      "probably never actually see this link type in real networks, hubs are old technology"
    ],
    "ru": [
      "вероятно, никогда не увидим этот тип ссылки в реальных сетях, хабы - это старая технология"
    ]
  },
  {
    "time": [
      1825.299,
      1828.01
    ],
    "en": [
      "that have been fully replaced by switches."
    ],
    "ru": [
      "которые были полностью заменены переключателями."
    ]
  },
  {
    "time": [
      1828.01,
      1831.96
    ],
    "en": [
      "So, which connections in the diagram are shared connections?"
    ],
    "ru": [
      "Итак, какие соединения на схеме являются общими соединениями?"
    ]
  },
  {
    "time": [
      1831.96,
      1838.179
    ],
    "en": [
      "I think the answer is fairly obvious now, all of the remaining ones, which are connected to the hub."
    ],
    "ru": [
      "Думаю, теперь ответ довольно очевиден, все остальные, которые подключены к хабу."
    ]
  },
  {
    "time": [
      1838.179,
      1843.19
    ],
    "en": [
      "to the hub. So, these connections here are shared links."
    ],
    "ru": [
      "к хабу. Итак, эти связи здесь являются общими ссылками."
    ]
  },
  {
    "time": [
      1843.19,
      1847.74
    ],
    "en": [
      "Before moving on to the quiz, let’s summarize what we covered today."
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте подведем итог тому, что мы рассмотрели сегодня."
    ]
  },
  {
    "time": [
      1847.74,
      1851.309
    ],
    "en": [
      "First up, we compared the different versions of STP."
    ],
    "ru": [
      "Сначала мы сравнили разные версии STP."
    ]
  },
  {
    "time": [
      1851.309,
      1858.51
    ],
    "en": [
      "The classic STP is 802.1D, and Cisco’s upgrade is PVST+, which runs a separate spanning tree"
    ],
    "ru": [
      "Классическим протоколом STP является 802.1D, а обновление Cisco - PVST +, которое запускает отдельное связующее дерево."
    ]
  },
  {
    "time": [
      1858.51,
      1861.48
    ],
    "en": [
      "instance for each VLAN."
    ],
    "ru": [
      "экземпляр для каждой VLAN."
    ]
  },
  {
    "time": [
      1861.48,
      1866.29
    ],
    "en": [
      "Then the next standard version is 802.1w, rapid spanning tree protocol."
    ],
    "ru": [
      "Следующая стандартная версия - это 802.1w, протокол быстрого связующего дерева."
    ]
  },
  {
    "time": [
      1866.29,
      1874.39
    ],
    "en": [
      "Cisco’s version of this is Rapid PVST+, which again runs a separate instance for each VLAN."
    ],
    "ru": [
      "Версия Cisco - Rapid PVST +, которая снова запускает отдельный экземпляр для каждой VLAN."
    ]
  },
  {
    "time": [
      1874.39,
      1878.61
    ],
    "en": [
      "VLAN. Then there is one more industry standard, multiple spanning tree, with which you can"
    ],
    "ru": [
      "VLAN. Затем есть еще один отраслевой стандарт, множественное связующее дерево, с помощью которого вы можете"
    ]
  },
  {
    "time": [
      1878.61,
      1885.22
    ],
    "en": [
      "create multiple spanning tree instances, and group multiple VLANs within each instance."
    ],
    "ru": [
      "создать несколько экземпляров связующего дерева и сгруппировать несколько виртуальных локальных сетей в каждом экземпляре."
    ]
  },
  {
    "time": [
      1885.22,
      1892.3
    ],
    "en": [
      "There is no Cisco version of MSTP, Cisco switches run the industry standard protocol."
    ],
    "ru": [
      "Версия MSTP для Cisco отсутствует, коммутаторы Cisco работают по стандартному отраслевому протоколу."
    ]
  },
  {
    "time": [
      1892.3,
      1897.27
    ],
    "en": [
      "Then we looked at Rapid PVST+, but actually all of the information we looked at applies"
    ],
    "ru": [
      "Затем мы рассмотрели Rapid PVST +, но на самом деле вся информация, которую мы рассмотрели, применима"
    ]
  },
  {
    "time": [
      1897.27,
      1900.89
    ],
    "en": [
      "to the industry standard RSTP as well."
    ],
    "ru": [
      "в соответствии с отраслевым стандартом RSTP."
    ]
  },
  {
    "time": [
      1900.89,
      1905.65
    ],
    "en": [
      "RSTP is an evolution of classic STP."
    ],
    "ru": [
      "RSTP - это эволюция классического протокола STP."
    ]
  },
  {
    "time": [
      1905.65,
      1911.23
    ],
    "en": [
      "Instead of using timers, it uses a negotiation process to allow it to rapidly move the necessary"
    ],
    "ru": [
      "Вместо таймеров он использует переговорный процесс, позволяющий быстро перемещать необходимые"
    ]
  },
  {
    "time": [
      1911.23,
      1916.89
    ],
    "en": [
      "ports to a forwarding state, and rapidly adjust to changes in the network topology."
    ],
    "ru": [
      "порты в состояние пересылки и быстро адаптируются к изменениям в топологии сети."
    ]
  },
  {
    "time": [
      1916.89,
      1925.68
    ],
    "en": [
      "I didn’t mention any specifics of the negotiation process, that level of depth is not necessary for the CCNA."
    ],
    "ru": [
      "Я не стал упоминать какие-либо особенности переговорного процесса, такой уровень глубины не является необходимым для CCNA."
    ]
  },
  {
    "time": [
      1925.68,
      1930.84
    ],
    "en": [
      "for the CCNA. I told you about the port states in RSTP, there are only three."
    ],
    "ru": [
      "для CCNA. Я вам рассказывал о состояниях портов в RSTP, их всего три."
    ]
  },
  {
    "time": [
      1930.84,
      1934.21
    ],
    "en": [
      "Discarding, Learning, and Forwarding."
    ],
    "ru": [
      "Отказ, обучение и пересылка."
    ]
  },
  {
    "time": [
      1934.21,
      1939.47
    ],
    "en": [
      "The listening state was deemed unnecessary, and in fact the learning state is often skipped"
    ],
    "ru": [
      "Состояние прослушивания было сочтено ненужным, и на самом деле состояние обучения часто пропускается"
    ]
  },
  {
    "time": [
      1939.47,
      1946.18
    ],
    "en": [
      "due to the built-in features of rapid STP, like UplinkFast and BackboneFast."
    ],
    "ru": [
      "благодаря встроенным функциям быстрого STP, таким как UplinkFast и BackboneFast."
    ]
  },
  {
    "time": [
      1946.18,
      1950.25
    ],
    "en": [
      "We talked about RSTP port roles, there are four."
    ],
    "ru": [
      "Мы говорили о ролях портов RSTP, их четыре."
    ]
  },
  {
    "time": [
      1950.25,
      1955.96
    ],
    "en": [
      "Root and designated ports are the same, but RSTP distinguishes between two types of ports"
    ],
    "ru": [
      "Корневой и назначенный порты одинаковы, но RSTP различает два типа портов."
    ]
  },
  {
    "time": [
      1955.96,
      1958.54
    ],
    "en": [
      "in the discarding state."
    ],
    "ru": [
      "в состоянии отбрасывания."
    ]
  },
  {
    "time": [
      1958.54,
      1963.79
    ],
    "en": [
      "Alternate ports are discarding ports which receive a superior BPDU from another switch,"
    ],
    "ru": [
      "Альтернативные порты отбрасывают порты, которые получают вышестоящий BPDU от другого коммутатора."
    ]
  },
  {
    "time": [
      1963.79,
      1966.75
    ],
    "en": [
      "this is the usual case."
    ],
    "ru": [
      "это обычный случай."
    ]
  },
  {
    "time": [
      1966.75,
      1973.12
    ],
    "en": [
      "Backup ports, on the other hand, receive a superior BPDU from an interface on the same switch."
    ],
    "ru": [
      "С другой стороны, резервные порты получают более высокий BPDU от интерфейса на том же коммутаторе."
    ]
  },
  {
    "time": [
      1973.12,
      1978.71
    ],
    "en": [
      "switch. This only occurs if connected to a hub, which is a situation you’ll probably never encounter,"
    ],
    "ru": [
      "выключатель. Это происходит только при подключении к концентратору, с чем вы, вероятно, никогда не столкнетесь,"
    ]
  },
  {
    "time": [
      1978.71,
      1980.27
    ],
    "en": [
      "hubs are no longer used."
    ],
    "ru": [
      "концентраторы больше не используются."
    ]
  },
  {
    "time": [
      1980.27,
      1988.25
    ],
    "en": [
      "I also mentioned some optional features of classic STP which were built into RSTP."
    ],
    "ru": [
      "Я также упомянул некоторые дополнительные функции классического STP, встроенные в RSTP."
    ]
  },
  {
    "time": [
      1988.25,
      1995.919
    ],
    "en": [
      "First I showed you UplinkFast and BackboneFast, but PortFast is also built in, through the edge port function."
    ],
    "ru": [
      "Сначала я показал вам UplinkFast и BackboneFast, но PortFast также встроен через функцию пограничного порта."
    ]
  },
  {
    "time": [
      1995.919,
      2000.5
    ],
    "en": [
      "edge port function. Although you have to know PortFast for the CCNA, you don’t need a detailed understanding"
    ],
    "ru": [
      "функция краевого порта. Хотя вам необходимо знать PortFast для работы с CCNA, вам не нужно детальное понимание"
    ]
  },
  {
    "time": [
      2000.5,
      2002.84
    ],
    "en": [
      "of UplinkFast and BackboneFast."
    ],
    "ru": [
      "из UplinkFast и BackboneFast."
    ]
  },
  {
    "time": [
      2002.84,
      2010.74
    ],
    "en": [
      "I briefly showed you the RSTP BPDU, just remember that the protocol version in an RSTP BPDU"
    ],
    "ru": [
      "Я вкратце показал вам RSTP BPDU, просто помните, что версия протокола в RSTP BPDU"
    ]
  },
  {
    "time": [
      2010.74,
      2015.51
    ],
    "en": [
      "is 2, whereas in classic STP it’s 0."
    ],
    "ru": [
      "равно 2, тогда как в классическом STP - 0."
    ]
  },
  {
    "time": [
      2015.51,
      2022.559
    ],
    "en": [
      "Also remember the important point that in RSTP ALL switches send BPDUs, not just the root bridge."
    ],
    "ru": [
      "Также помните важный момент, что в RSTP ВСЕ коммутаторы отправляют BPDU, а не только корневой мост."
    ]
  },
  {
    "time": [
      2022.559,
      2027.71
    ],
    "en": [
      "root bridge. Finally, I showed you the RSTP link types."
    ],
    "ru": [
      "корневой мост. Наконец, я показал вам типы ссылок RSTP."
    ]
  },
  {
    "time": [
      2027.71,
      2035.799
    ],
    "en": [
      "Edge ports are connected to end hosts, and you configure an edge port by enabling portfast on the interface."
    ],
    "ru": [
      "Граничные порты подключены к конечным хостам, и вы настраиваете граничный порт, включив portfast на интерфейсе."
    ]
  },
  {
    "time": [
      2035.799,
      2040.33
    ],
    "en": [
      "on the interface. Point-to-point means it is connected directly to another switch, and shared means it is"
    ],
    "ru": [
      "на интерфейсе. Точка-точка означает, что он подключен напрямую к другому коммутатору, а общий означает, что он"
    ]
  },
  {
    "time": [
      2040.33,
      2044.79
    ],
    "en": [
      "connected to a hub, and must use half-duplex."
    ],
    "ru": [
      "подключен к концентратору и должен использовать полудуплекс."
    ]
  },
  {
    "time": [
      2044.79,
      2049.56
    ],
    "en": [
      "As I said before, hubs aren’t really used anymore, so you probably won’t see a ‘shared’"
    ],
    "ru": [
      "Как я уже говорил, хабы больше не используются, поэтому вы, вероятно, не увидите \"общий\""
    ]
  },
  {
    "time": [
      2049.56,
      2053.92
    ],
    "en": [
      "link type in any real networks."
    ],
    "ru": [
      "тип ссылки в любых реальных сетях."
    ]
  },
  {
    "time": [
      2053.92,
      2057.019
    ],
    "en": [
      "Okay let’s move on to the quiz."
    ],
    "ru": [
      "Хорошо, перейдем к викторине."
    ]
  },
  {
    "time": [
      2057.019,
      2061.179
    ],
    "en": [
      "After a few quiz questions, let’s take a look at my favorite set of practice exams"
    ],
    "ru": [
      "После нескольких вопросов викторины давайте взглянем на мой любимый набор практических экзаменов."
    ]
  },
  {
    "time": [
      2061.179,
      2066.009
    ],
    "en": [
      "for the CCNA, Boson Software’s ExSim."
    ],
    "ru": [
      "для CCNA, ExSim от Boson Software."
    ]
  },
  {
    "time": [
      2066.009,
      2071.129
    ],
    "en": [
      "Back before I started this YouTube channel, I used Boson ExSim to prepare for my CCNA"
    ],
    "ru": [
      "Еще до того, как я начал этот канал на YouTube, я использовал Boson ExSim для подготовки к моей CCNA."
    ]
  },
  {
    "time": [
      2071.129,
      2079.249
    ],
    "en": [
      "and CCNP exams, and I really think ExSim played a big role in me passing all of my exams on the first try."
    ],
    "ru": [
      "и экзамены CCNP, и я действительно думаю, что ExSim сыграл большую роль в том, что я сдал все экзамены с первой попытки."
    ]
  },
  {
    "time": [
      2079.249,
      2084.179
    ],
    "en": [
      "the first try. The questions are very similar to the questions on the real CCNA exam, and Boson gives in"
    ],
    "ru": [
      "первая попытка. Вопросы очень похожи на вопросы на реальном экзамене CCNA, и Boson сдается."
    ]
  },
  {
    "time": [
      2084.179,
      2088.999
    ],
    "en": [
      "depth explanations which really help deepen your understanding of the topics."
    ],
    "ru": [
      "подробные объяснения, которые действительно помогают углубить ваше понимание темы."
    ]
  },
  {
    "time": [
      2088.999,
      2094.569
    ],
    "en": [
      "Okay, now continuing on from quiz question 1, which we did earlier in the video, let’s"
    ],
    "ru": [
      "Хорошо, а теперь продолжим с первого вопроса викторины, который мы делали ранее в видео."
    ]
  },
  {
    "time": [
      2094.569,
      2097.7
    ],
    "en": [
      "go to quiz question 2."
    ],
    "ru": [
      "перейти к вопросу 2 викторины."
    ]
  },
  {
    "time": [
      2097.7,
      2104.89
    ],
    "en": [
      "Which IEEE 802.1D optional features were built in to the IEEE 802.1w standard, and allow"
    ],
    "ru": [
      "Какие дополнительные функции IEEE 802.1D были встроены в стандарт IEEE 802.1w и позволяют"
    ]
  },
  {
    "time": [
      2104.89,
      2109.029
    ],
    "en": [
      "ports to move rapidly to the forwarding state? Select three."
    ],
    "ru": [
      "порты быстро перейти в состояние пересылки? Выберите три."
    ]
  },
  {
    "time": [
      2109.029,
      2115.67
    ],
    "en": [
      "Select three. A, root guard, B, portfast. C, BPDU guard."
    ],
    "ru": [
      "Выберите три. A, корневая охрана, B, портфаст. C, защита BPDU."
    ]
  },
  {
    "time": [
      2115.67,
      2119.239
    ],
    "en": [
      "C, BPDU guard. D, uplinkfast. E, backbonefast."
    ],
    "ru": [
      "C, защита BPDU. D, uplinkfast. E, backbonefast."
    ]
  },
  {
    "time": [
      2119.239,
      2123.21
    ],
    "en": [
      "E, backbonefast. F, loop guard. Or G, rootfast."
    ],
    "ru": [
      "E, backbonefast. F, защита от петель. Или G, rootfast."
    ]
  },
  {
    "time": [
      2123.21,
      2129.02
    ],
    "en": [
      "Or G, rootfast. Pause the video to think about your answers."
    ],
    "ru": [
      "Или G, rootfast. Поставьте видео на паузу, чтобы подумать над своими ответами."
    ]
  },
  {
    "time": [
      2129.02,
      2136.18
    ],
    "en": [
      "The answers are B, portfast. D, uplinkfast, and e, backbonefast."
    ],
    "ru": [
      "Ответы: B, портфаст. D, uplinkfast и e, backbonefast."
    ]
  },
  {
    "time": [
      2136.18,
      2143.811
    ],
    "en": [
      "A, root guard, C BPDU guard, and F, loop guard, are spanning tree optional features, but they"
    ],
    "ru": [
      "A, защита корня, защита C BPDU и F, защита от петель, являются дополнительными функциями связующего дерева, но они"
    ]
  },
  {
    "time": [
      2143.811,
      2149.5
    ],
    "en": [
      "are not features built in to RSTP that allow ports to move rapidly to the forwarding state."
    ],
    "ru": [
      "не являются встроенными в RSTP функциями, которые позволяют портам быстро переходить в состояние пересылки."
    ]
  },
  {
    "time": [
      2149.5,
      2154.279
    ],
    "en": [
      "G, rootfast, is not a real STP optional feature."
    ],
    "ru": [
      "G, rootfast, не является дополнительной функцией STP."
    ]
  },
  {
    "time": [
      2154.279,
      2161.22
    ],
    "en": [
      "B, portfast, allows edge ports, connected to end hosts, to move rapidly to the forwarding state."
    ],
    "ru": [
      "B, portfast, позволяет граничным портам, подключенным к конечным хостам, быстро переходить в состояние пересылки."
    ]
  },
  {
    "time": [
      2161.22,
      2168.14
    ],
    "en": [
      "state. D, uplinkfast, and E, backbonefast, allow ports to move rapidly to forwarding in certain"
    ],
    "ru": [
      "штат. D, uplinkfast и E, backbonefast, позволяют портам быстро переходить на пересылку в определенных"
    ]
  },
  {
    "time": [
      2168.14,
      2170.299
    ],
    "en": [
      "cases of interface failure."
    ],
    "ru": [
      "случаи отказа интерфейса."
    ]
  },
  {
    "time": [
      2170.299,
      2174.39
    ],
    "en": [
      "Let’s go to question 3."
    ],
    "ru": [
      "Перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      2174.39,
      2179.94
    ],
    "en": [
      "You want to configure an 802.1w edge port, so that hosts connected to the interface can"
    ],
    "ru": [
      "Вы хотите настроить граничный порт 802.1w, чтобы узлы, подключенные к интерфейсу, могли"
    ]
  },
  {
    "time": [
      2179.94,
      2183.25
    ],
    "en": [
      "begin sending traffic over the network immediately."
    ],
    "ru": [
      "немедленно начать отправку трафика по сети."
    ]
  },
  {
    "time": [
      2183.25,
      2186.0
    ],
    "en": [
      "Which command should you use?"
    ],
    "ru": [
      "Какую команду использовать?"
    ]
  },
  {
    "time": [
      2186.0,
      2189.359
    ],
    "en": [
      "A, spanning-tree link-type edge."
    ],
    "ru": [
      "A, ребро связующего типа остовного дерева."
    ]
  },
  {
    "time": [
      2189.359,
      2193.069
    ],
    "en": [
      "B, spanning-tree mode edge."
    ],
    "ru": [
      "B, край режима остовного дерева."
    ]
  },
  {
    "time": [
      2193.069,
      2197.19
    ],
    "en": [
      "C, spanning-tree link-type portfast."
    ],
    "ru": [
      "C, связующее дерево связующего типа portfast."
    ]
  },
  {
    "time": [
      2197.19,
      2200.49
    ],
    "en": [
      "Or D, spanning-tree portfast."
    ],
    "ru": [
      "Или D, порт остовного дерева."
    ]
  },
  {
    "time": [
      2200.49,
      2207.319
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
      2207.319,
      2211.559
    ],
    "en": [
      "The answer is D, spanning-tree portfast."
    ],
    "ru": [
      "Ответ - D, порт связующего дерева."
    ]
  },
  {
    "time": [
      2211.559,
      2216.499
    ],
    "en": [
      "Although ‘edge’ is a link type in RSTP, you don’t use the spanning-tree link-type"
    ],
    "ru": [
      "Хотя «край» - это тип ссылки в RSTP, вы не используете тип ссылки связующего дерева."
    ]
  },
  {
    "time": [
      2216.499,
      2221.93
    ],
    "en": [
      "command to configure it, and the command doesn’t even include the word edge."
    ],
    "ru": [
      "команду, чтобы настроить его, и команда даже не включает край слова."
    ]
  },
  {
    "time": [
      2221.93,
      2229.45
    ],
    "en": [
      "To configure an RSTP edge port, simply configure portfast on the interface with the command SPANNING-TREE PORTFAST."
    ],
    "ru": [
      "Чтобы настроить граничный порт RSTP, просто настройте portfast на интерфейсе с помощью команды SPANNING-TREE PORTFAST."
    ]
  },
  {
    "time": [
      2229.45,
      2234.529
    ],
    "en": [
      "SPANNING-TREE PORTFAST. Okay, let’s do one more quiz question."
    ],
    "ru": [
      "ПОРТФЕСТ на колышущемся дереве. Хорошо, давайте сделаем еще один вопрос викторины."
    ]
  },
  {
    "time": [
      2234.529,
      2237.64
    ],
    "en": [
      "Identify the root bridge in this network."
    ],
    "ru": [
      "Определите корневой мост в этой сети."
    ]
  },
  {
    "time": [
      2237.64,
      2241.309
    ],
    "en": [
      "What is the RSTP port role of each switch (port)?"
    ],
    "ru": [
      "Какова роль порта RSTP каждого коммутатора (порта)?"
    ]
  },
  {
    "time": [
      2241.309,
      2246.299
    ],
    "en": [
      "What is the appropriate RSTP link type of each connection between devices?"
    ],
    "ru": [
      "Каков соответствующий тип канала RSTP для каждого соединения между устройствами?"
    ]
  },
  {
    "time": [
      2246.299,
      2251.39
    ],
    "en": [
      "This is a pretty long question, I recommend taking a screenshot and writing the port roles"
    ],
    "ru": [
      "Это довольно длинный вопрос, рекомендую сделать снимок экрана и записать роли порта"
    ]
  },
  {
    "time": [
      2251.39,
      2255.96
    ],
    "en": [
      "and link types on the screenshot so you can remember everything."
    ],
    "ru": [
      "и типы ссылок на скриншоте, чтобы вы все запомнили."
    ]
  },
  {
    "time": [
      2255.96,
      2262.7
    ],
    "en": [
      "Pause the video now to find the answers."
    ],
    "ru": [
      "Остановите видео сейчас, чтобы найти ответы."
    ]
  },
  {
    "time": [
      2262.7,
      2265.46
    ],
    "en": [
      "Okay, hopefully you solved it."
    ],
    "ru": [
      "Хорошо, надеюсь, вы ее решили."
    ]
  },
  {
    "time": [
      2265.46,
      2269.789
    ],
    "en": [
      "The root bridge is SW1, it has the lowest priority."
    ],
    "ru": [
      "Корневой мост - SW1, у него самый низкий приоритет."
    ]
  },
  {
    "time": [
      2269.789,
      2273.67
    ],
    "en": [
      "How about all of the root ports in the network? Here they are."
    ],
    "ru": [
      "Как насчет всех корневых портов в сети? Они здесь."
    ]
  },
  {
    "time": [
      2273.67,
      2280.82
    ],
    "en": [
      "Here they are. SW4 picked it’s G0/0 interface because SW3 has a lower bridge ID than SW2, even though"
    ],
    "ru": [
      "Они здесь. SW4 выбрал интерфейс G0 / 0, потому что SW3 имеет более низкий идентификатор моста, чем SW2, хотя"
    ]
  },
  {
    "time": [
      2280.82,
      2285.299
    ],
    "en": [
      "they have the same root cost because the hub doesn’t add any cost."
    ],
    "ru": [
      "они имеют одинаковую корневую стоимость, потому что концентратор не добавляет никаких затрат."
    ]
  },
  {
    "time": [
      2285.299,
      2288.809
    ],
    "en": [
      "So, these are the designated ports."
    ],
    "ru": [
      "Итак, это обозначенные порты."
    ]
  },
  {
    "time": [
      2288.809,
      2295.279
    ],
    "en": [
      "Why was an interface on SW2 and not SW4 selected to be designated?"
    ],
    "ru": [
      "Почему для назначения был выбран интерфейс на SW2, а не на SW4?"
    ]
  },
  {
    "time": [
      2295.279,
      2298.13
    ],
    "en": [
      "Because SW2 has the lower root cost."
    ],
    "ru": [
      "Потому что у SW2 более низкая стоимость корня."
    ]
  },
  {
    "time": [
      2298.13,
      2302.529
    ],
    "en": [
      "Finally, the discarding interfaces."
    ],
    "ru": [
      "Наконец, отказавшись от интерфейсов."
    ]
  },
  {
    "time": [
      2302.529,
      2308.17
    ],
    "en": [
      "Notice that there is one backup interface, SW2’s G0/2 interface."
    ],
    "ru": [
      "Обратите внимание, что есть один резервный интерфейс, интерфейс G0 / 2 SW2."
    ]
  },
  {
    "time": [
      2308.17,
      2315.74
    ],
    "en": [
      "This is because it receives a superior BPDU from an interface on the same switch, the G0/1 interface."
    ],
    "ru": [
      "Это потому, что он получает вышестоящий BPDU от интерфейса того же коммутатора, интерфейса G0 / 1."
    ]
  },
  {
    "time": [
      2315.74,
      2319.079
    ],
    "en": [
      "G0/1 interface. Now, how about the link types?"
    ],
    "ru": [
      "G0 / 1 интерфейс. А как насчет типов ссылок?"
    ]
  },
  {
    "time": [
      2319.079,
      2323.339
    ],
    "en": [
      "All of these ports connected to end hosts should be edge ports."
    ],
    "ru": [
      "Все эти порты, подключенные к конечным хостам, должны быть граничными портами."
    ]
  },
  {
    "time": [
      2323.339,
      2328.18
    ],
    "en": [
      "All of these full-duplex connections between switches are point-to-point links, and these"
    ],
    "ru": [
      "Все эти полнодуплексные соединения между коммутаторами являются соединениями точка-точка, и эти"
    ]
  },
  {
    "time": [
      2328.18,
      2332.67
    ],
    "en": [
      "half-duplex connections with the hub are shared links."
    ],
    "ru": [
      "полудуплексные соединения с концентратором являются общими ссылками."
    ]
  },
  {
    "time": [
      2332.67,
      2337.92
    ],
    "en": [
      "If you had trouble with this, you should review the spanning tree videos, including this one,"
    ],
    "ru": [
      "Если у вас возникли проблемы с этим, вам следует просмотреть видеоролики по связующему дереву, в том числе это,"
    ]
  },
  {
    "time": [
      2337.92,
      2342.18
    ],
    "en": [
      "and if you still don’t understand feel free to ask a question in the comment section."
    ],
    "ru": [
      "и если вы все еще не понимаете, не стесняйтесь задавать вопрос в разделе комментариев."
    ]
  },
  {
    "time": [
      2342.18,
      2347.5
    ],
    "en": [
      "Okay, now let’s check out a question from Boson ExSim for CCNA."
    ],
    "ru": [
      "Хорошо, теперь давайте ответим на вопрос от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2347.5,
      2354.2
    ],
    "en": [
      "Okay, for today's Boson ExSim practice question, I picked a question that mentions edge ports,"
    ],
    "ru": [
      "Хорошо, для сегодняшнего практического вопроса о Boson ExSim я выбрал вопрос, в котором упоминаются граничные порты,"
    ]
  },
  {
    "time": [
      2354.2,
      2355.989
    ],
    "en": [
      "something you just learned about."
    ],
    "ru": [
      "то, о чем вы только что узнали."
    ]
  },
  {
    "time": [
      2355.989,
      2357.88
    ],
    "en": [
      "So here's the question."
    ],
    "ru": [
      "Итак, вот вопрос."
    ]
  },
  {
    "time": [
      2357.88,
      2363.059
    ],
    "en": [
      "Which of the following optional STP features reduces convergence time by immediately placing"
    ],
    "ru": [
      "Какая из следующих дополнительных функций STP сокращает время сходимости за счет немедленного размещения"
    ]
  },
  {
    "time": [
      2363.059,
      2366.309
    ],
    "en": [
      "edge ports into a forwarding state?"
    ],
    "ru": [
      "граничные порты в состояние пересылки?"
    ]
  },
  {
    "time": [
      2366.309,
      2367.829
    ],
    "en": [
      "Select the best answer."
    ],
    "ru": [
      "Выберите лучший ответ."
    ]
  },
  {
    "time": [
      2367.829,
      2371.19
    ],
    "en": [
      "So there are five options. A, root guard."
    ],
    "ru": [
      "Итак, есть пять вариантов. А, корневая гвардия."
    ]
  },
  {
    "time": [
      2371.19,
      2374.14
    ],
    "en": [
      "A, root guard. B, BPDU guard. C, PortFast."
    ],
    "ru": [
      "А, корневая гвардия. B, ограждение BPDU. C, ПортФаст."
    ]
  },
  {
    "time": [
      2374.14,
      2375.91
    ],
    "en": [
      "C, PortFast. D, BPDU filter."
    ],
    "ru": [
      "C, ПортФаст. D, фильтр BPDU."
    ]
  },
  {
    "time": [
      2375.91,
      2383.72
    ],
    "en": [
      "And E, loop guard. Pause the video to think about your answer."
    ],
    "ru": [
      "И E, защита от петель. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2383.72,
      2385.94
    ],
    "en": [
      "Okay, did you find your answer?"
    ],
    "ru": [
      "Хорошо, ты нашел свой ответ?"
    ]
  },
  {
    "time": [
      2385.94,
      2389.47
    ],
    "en": [
      "So, first of all what is an edge port?"
    ],
    "ru": [
      "Итак, в первую очередь, что такое пограничный порт?"
    ]
  },
  {
    "time": [
      2389.47,
      2393.92
    ],
    "en": [
      "Well it's a port at the edge of the network, meaning it's connected to end hosts, it's"
    ],
    "ru": [
      "Ну, это порт на краю сети, то есть он подключен к конечным хостам, это"
    ]
  },
  {
    "time": [
      2393.92,
      2397.869
    ],
    "en": [
      "not the internal network between the switches."
    ],
    "ru": [
      "не внутренняя сеть между коммутаторами."
    ]
  },
  {
    "time": [
      2397.869,
      2405.799
    ],
    "en": [
      "So, which optional feature places ports connected to end hosts immediately into a forwarding state?"
    ],
    "ru": [
      "Итак, какая дополнительная функция сразу переводит порты, подключенные к конечным хостам, в состояние пересылки?"
    ]
  },
  {
    "time": [
      2405.799,
      2410.88
    ],
    "en": [
      "state? You should know the answer by now, it is C, PortFast."
    ],
    "ru": [
      "штат? К настоящему времени вы должны знать ответ, это C, PortFast."
    ]
  },
  {
    "time": [
      2410.88,
      2414.489
    ],
    "en": [
      "If you're actually doing a practice exam you can click next to go to the next question,"
    ],
    "ru": [
      "Если вы на самом деле сдаете пробный экзамен, вы можете нажать «Далее», чтобы перейти к следующему вопросу,"
    ]
  },
  {
    "time": [
      2414.489,
      2417.5
    ],
    "en": [
      "but let's check the answer, show answer."
    ],
    "ru": [
      "но давайте проверим ответ, покажем ответ."
    ]
  },
  {
    "time": [
      2417.5,
      2420.13
    ],
    "en": [
      "Okay, and we are correct."
    ],
    "ru": [
      "Хорошо, и мы правы."
    ]
  },
  {
    "time": [
      2420.13,
      2424.869
    ],
    "en": [
      "So you can see it gives quite a detailed explanation, and this is really the great thing about Boson"
    ],
    "ru": [
      "Итак, вы можете видеть, что он дает довольно подробное объяснение, и это действительно замечательная вещь о бозоне."
    ]
  },
  {
    "time": [
      2424.869,
      2427.94
    ],
    "en": [
      "ExSim, about their practice exams."
    ],
    "ru": [
      "ExSim, о своих практических экзаменах."
    ]
  },
  {
    "time": [
      2427.94,
      2432.39
    ],
    "en": [
      "Not only does it tell you why PortFast is the correct answer, but here it gives you"
    ],
    "ru": [
      "Он не только говорит вам, почему PortFast - правильный ответ, но и дает вам"
    ]
  },
  {
    "time": [
      2432.39,
      2435.92
    ],
    "en": [
      "a brief summary of each of these other optional features."
    ],
    "ru": [
      "краткое описание каждой из этих дополнительных функций."
    ]
  },
  {
    "time": [
      2435.92,
      2441.479
    ],
    "en": [
      "Loop guard, root guard, BPDU guard and BPDU filter."
    ],
    "ru": [
      "Защита от петель, корень, защита BPDU и фильтр BPDU."
    ]
  },
  {
    "time": [
      2441.479,
      2445.229
    ],
    "en": [
      "So you can know why they are not the correct answer."
    ],
    "ru": [
      "Так вы сможете понять, почему это неправильный ответ."
    ]
  },
  {
    "time": [
      2445.229,
      2450.029
    ],
    "en": [
      "After all that it gives some references to the official cert guide here, this is from"
    ],
    "ru": [
      "После всего, что он дает некоторые ссылки на официальное руководство по сертификации здесь, это от"
    ]
  },
  {
    "time": [
      2450.029,
      2454.17
    ],
    "en": [
      "chapter 9, optional STP features."
    ],
    "ru": [
      "глава 9, дополнительные функции STP."
    ]
  },
  {
    "time": [
      2454.17,
      2458.109
    ],
    "en": [
      "And then also some Cisco documentation that you can read online for free, and this is"
    ],
    "ru": [
      "А также некоторую документацию Cisco, которую вы можете бесплатно прочитать в Интернете, и это"
    ]
  },
  {
    "time": [
      2458.109,
      2462.9
    ],
    "en": [
      "another great study resource by the way, Cisco's official documentation."
    ],
    "ru": [
      "кстати, еще один отличный ресурс для изучения, официальная документация Cisco."
    ]
  },
  {
    "time": [
      2462.9,
      2469.88
    ],
    "en": [
      "Okay, if you want to get a copy of Boson ExSim for yourself, please follow the link in the video description."
    ],
    "ru": [
      "Хорошо, если вы хотите получить копию Boson ExSim для себя, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2469.88,
      2475.42
    ],
    "en": [
      "video description. I used Boson ExSim myself for my CCNA and CCNP and I really think they were essential"
    ],
    "ru": [
      "описание видео. Я сам использовал Boson ExSim для своих CCNA и CCNP, и я действительно думаю, что они были необходимы"
    ]
  },
  {
    "time": [
      2475.42,
      2478.859
    ],
    "en": [
      "in helping me pass all of my exams on the first try."
    ],
    "ru": [
      "чтобы помочь мне сдать все экзамены с первой попытки."
    ]
  },
  {
    "time": [
      2478.859,
      2485.289
    ],
    "en": [
      "So once again, please click that link in the video description and get a copy of Boson ExSim."
    ],
    "ru": [
      "Итак, еще раз нажмите эту ссылку в описании видео и получите копию Boson ExSim."
    ]
  },
  {
    "time": [
      2485.289,
      2488.75
    ],
    "en": [
      "ExSim. There are supplementary materials for this video."
    ],
    "ru": [
      "ExSim. К этому видео есть дополнительные материалы."
    ]
  },
  {
    "time": [
      2488.75,
      2492.74
    ],
    "en": [
      "There is a flashcard deck to use with the software ‘Anki’, download it from the"
    ],
    "ru": [
      "Существует колода карточек для использования с программным обеспечением «Anki», загрузите ее с"
    ]
  },
  {
    "time": [
      2492.74,
      2498.14
    ],
    "en": [
      "link in the description and use the flashcards to review the concepts you learned in this video."
    ],
    "ru": [
      "ссылку в описании и используйте карточки, чтобы просмотреть концепции, которые вы узнали в этом видео."
    ]
  },
  {
    "time": [
      2498.14,
      2504.339
    ],
    "en": [
      "video. There will also be a packet tracer practice lab so you can get some hands-on practice."
    ],
    "ru": [
      "видео. Там также будет практическая лаборатория по отслеживанию пакетов, где вы сможете получить практическую практику."
    ]
  },
  {
    "time": [
      2504.339,
      2507.839
    ],
    "en": [
      "That will be in the next video."
    ],
    "ru": [
      "Об этом будет в следующем видео."
    ]
  },
  {
    "time": [
      2507.839,
      2513.049
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
      2513.049,
      2521.88
    ],
    "en": [
      "Thank you to tibi, vikram, Joyce, Marek, Samil, velvijaykum, C Mohd, Johan, Mark, Miguel,"
    ],
    "ru": [
      "Спасибо tibi, vikram, Joyce, Marek, Samil, velvijaykum, C Mohd, Johan, Mark, Miguel,"
    ]
  },
  {
    "time": [
      2521.88,
      2528.339
    ],
    "en": [
      "Yousif, Kone, Boson Software, the creators of ExSim, Sidi, Magrathea, Devin, Charlsetta,"
    ],
    "ru": [
      "Юсиф, Коне, Boson Software, создатели ExSim, Sidi, Magrathea, Devin, Charlsetta,"
    ]
  },
  {
    "time": [
      2528.339,
      2532.45
    ],
    "en": [
      "Lito, Yonatan, Mike, Aleksander, Vance, and Gerrard."
    ],
    "ru": [
      "Лито, Йонатан, Майк, Александр, Вэнс и Джеррард."
    ]
  },
  {
    "time": [
      2532.45,
      2538.319
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
      2538.319,
      2542.569
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
      2542.569,
      2545.839
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
      2545.839,
      2551.479
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, May 27th"
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 27 мая."
    ]
  },
  {
    "time": [
      2551.479,
      2559.579
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
      2551.479,
      2559.579
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
      2559.579,
      2561.16
    ],
    "en": [
      "in future videos. Thank you for watching."
    ],
    "ru": [
      "в будущих видео. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      2561.16,
      2565.2
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
      2565.2,
      2568.4
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
      2568.4,
      2571.19
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
      2571.19,
      2578.72
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
      2578.72,
      2578.72
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]