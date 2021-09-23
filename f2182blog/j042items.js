let objs = [
  {
    "time": [
      1.01,
      3.4
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
      3.4,
      6.62
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
      6.62,
      10.34
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
      10.34,
      16.18
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
      16.18,
      18.35
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
      18.35,
      21.8
    ],
    "en": [
      "In this video we will look at another topic, EtherChannel."
    ],
    "ru": [
      "В этом видео мы рассмотрим другую тему - EtherChannel."
    ]
  },
  {
    "time": [
      21.8,
      27.3
    ],
    "en": [
      "EtherChannel allows you to group multiple physical interfaces into a group which operates"
    ],
    "ru": [
      "EtherChannel позволяет группировать несколько физических интерфейсов в группу, которая работает"
    ]
  },
  {
    "time": [
      27.3,
      33.3
    ],
    "en": [
      "as a single logical interface, so they behave as if they are a single interface."
    ],
    "ru": [
      "как единый логический интерфейс, поэтому они ведут себя так, как если бы они были единым интерфейсом."
    ]
  },
  {
    "time": [
      33.3,
      37.26
    ],
    "en": [
      "There are many benefits to this, and I’ll explain them in this video."
    ],
    "ru": [
      "Это дает много преимуществ, и я расскажу о них в этом видео."
    ]
  },
  {
    "time": [
      37.26,
      42.749
    ],
    "en": [
      "By the way, this video covers topic 2.4 of the official exam topics list, which states"
    ],
    "ru": [
      "Кстати, в этом видео рассматривается тема 2.4 официального списка тем экзамена, в которой говорится:"
    ]
  },
  {
    "time": [
      42.749,
      48.589
    ],
    "en": [
      "that you must be able to configure and verify Layer 2 and Layer 3 EtherChannel using a protocol"
    ],
    "ru": [
      "что вы должны иметь возможность настраивать и проверять EtherChannel уровня 2 и уровня 3 с использованием протокола"
    ]
  },
  {
    "time": [
      48.589,
      53.359
    ],
    "en": [
      "called LACP, Link Aggregation Control Protocol."
    ],
    "ru": [
      "называется LACP, протокол управления агрегированием каналов."
    ]
  },
  {
    "time": [
      53.359,
      57.37
    ],
    "en": [
      "So, what will we cover in this video?"
    ],
    "ru": [
      "Итак, что мы расскажем в этом видео?"
    ]
  },
  {
    "time": [
      57.37,
      61.379
    ],
    "en": [
      "First off, I’ll show you what EtherChannel is, and what problems it solves."
    ],
    "ru": [
      "Во-первых, я покажу вам, что такое EtherChannel и какие проблемы он решает."
    ]
  },
  {
    "time": [
      61.379,
      65.47
    ],
    "en": [
      "Here’s a hint, spanning tree protocol is the big problem."
    ],
    "ru": [
      "Подсказка, большая проблема - протокол связующего дерева."
    ]
  },
  {
    "time": [
      65.47,
      71.73
    ],
    "en": [
      "We will also look at multiple methods of configuring both Layer 2 and Layer 3 EtherChannels."
    ],
    "ru": [
      "Мы также рассмотрим несколько методов настройки каналов EtherChannels уровня 2 и уровня 3."
    ]
  },
  {
    "time": [
      71.73,
      77.26
    ],
    "en": [
      "A Layer 2 etherchannel is a group of switch ports which operate as a single interface,"
    ],
    "ru": [
      "Ethernet-канал уровня 2 - это группа портов коммутатора, которые работают как единый интерфейс,"
    ]
  },
  {
    "time": [
      77.26,
      82.58
    ],
    "en": [
      "and a Layer 3 etherchannel is a group of routed port which operate as a single interface,"
    ],
    "ru": [
      "а etherchannel уровня 3 - это группа маршрутизируемых портов, которые работают как единый интерфейс,"
    ]
  },
  {
    "time": [
      82.58,
      86.98
    ],
    "en": [
      "which you assign an IP address to, because it’s Layer 3."
    ],
    "ru": [
      "которому вы назначаете IP-адрес, потому что это уровень 3."
    ]
  },
  {
    "time": [
      86.98,
      91.53
    ],
    "en": [
      "Make sure you watch until the end of the video for a bonus question from Boson Software’s"
    ],
    "ru": [
      "Просмотрите видео до конца, чтобы узнать о бонусном вопросе от компании Boson Software."
    ]
  },
  {
    "time": [
      91.53,
      95.59
    ],
    "en": [
      "ExSim, the best practice exams for the CCNA."
    ],
    "ru": [
      "ExSim, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      95.59,
      101.42
    ],
    "en": [
      "I used Boson ExSim to help me prepare for my CCNA and CCNP exams, and I truly believe"
    ],
    "ru": [
      "Я использовал Boson ExSim, чтобы подготовиться к экзаменам CCNA и CCNP, и я искренне верю"
    ]
  },
  {
    "time": [
      101.42,
      105.15899999999999
    ],
    "en": [
      "it was the key that allowed me to pass all of my exams on the first try."
    ],
    "ru": [
      "это был ключ, который позволил мне сдать все экзамены с первой попытки."
    ]
  },
  {
    "time": [
      105.15899999999999,
      108.34
    ],
    "en": [
      "Okay, let’s get started with the video."
    ],
    "ru": [
      "Хорошо, давайте начнем с видео."
    ]
  },
  {
    "time": [
      108.34,
      111.87
    ],
    "en": [
      "So, let me demonstrate a problem."
    ],
    "ru": [
      "Итак, позвольте мне продемонстрировать проблему."
    ]
  },
  {
    "time": [
      111.87,
      115.36
    ],
    "en": [
      "We have two switches here, ASW1 and DSW1."
    ],
    "ru": [
      "У нас есть два переключателя, ASW1 и DSW1."
    ]
  },
  {
    "time": [
      115.36,
      123.409
    ],
    "en": [
      "I will talk about basic network design later in the course, but ASW stands for access switch,"
    ],
    "ru": [
      "Я расскажу об основном дизайне сети позже в этом курсе, но ASW означает коммутатор доступа,"
    ]
  },
  {
    "time": [
      123.409,
      127.63
    ],
    "en": [
      "which is a switch that end hosts like PCs and servers connect to."
    ],
    "ru": [
      "который представляет собой коммутатор, к которому подключаются конечные хосты, такие как ПК и серверы."
    ]
  },
  {
    "time": [
      127.63,
      135.01
    ],
    "en": [
      "DSW stands for distribution layer switch, which is a switch that access layer switches connect to."
    ],
    "ru": [
      "DSW означает коммутатор уровня распределения, который представляет собой коммутатор, к которому подключаются коммутаторы уровня доступа."
    ]
  },
  {
    "time": [
      135.01,
      140.159
    ],
    "en": [
      "connect to. For this demonstration, let’s say there are many end hosts connected to ASW1, let’s"
    ],
    "ru": [
      "подключиться к. Для этой демонстрации предположим, что к ASW1 подключено много конечных хостов."
    ]
  },
  {
    "time": [
      140.159,
      145.579
    ],
    "en": [
      "say 40 hosts, and they are all trying to access the Internet to do their work."
    ],
    "ru": [
      "скажем, 40 хостов, и все они пытаются получить доступ к Интернету для выполнения своей работы."
    ]
  },
  {
    "time": [
      145.579,
      151.12
    ],
    "en": [
      "The network administrator notices that the connection to DSW1 is congested, so he decides"
    ],
    "ru": [
      "Сетевой администратор замечает, что соединение с DSW1 перегружено, поэтому он решает"
    ]
  },
  {
    "time": [
      151.12,
      156.88
    ],
    "en": [
      "that he should add another link to increase the bandwidth, so it can support all of the end hosts."
    ],
    "ru": [
      "что он должен добавить еще одну ссылку для увеличения пропускной способности, чтобы она могла поддерживать все конечные хосты."
    ]
  },
  {
    "time": [
      156.88,
      162.129
    ],
    "en": [
      "end hosts. So, the network admin adds another link, and monitors the situation."
    ],
    "ru": [
      "конечные хосты. Итак, администратор сети добавляет еще одну ссылку и следит за ситуацией."
    ]
  },
  {
    "time": [
      162.129,
      165.72
    ],
    "en": [
      "However, the additional link doesn’t seem to help."
    ],
    "ru": [
      "Однако дополнительная ссылка, похоже, не помогает."
    ]
  },
  {
    "time": [
      165.72,
      172.42000000000002
    ],
    "en": [
      "The connection between ASW1 and DSW1 is still congested and end users are reporting problems."
    ],
    "ru": [
      "Соединение между ASW1 и DSW1 по-прежнему перегружено, и конечные пользователи сообщают о проблемах."
    ]
  },
  {
    "time": [
      172.42000000000002,
      178.889
    ],
    "en": [
      "So, the admin decides to add another link between ASW1 and DSW1."
    ],
    "ru": [
      "Итак, администратор решает добавить еще одну ссылку между ASW1 и DSW1."
    ]
  },
  {
    "time": [
      178.889,
      182.939
    ],
    "en": [
      "He adds another link to the connection between ASW1 and DSW1."
    ],
    "ru": [
      "Он добавляет еще одну ссылку на соединение между ASW1 и DSW1."
    ]
  },
  {
    "time": [
      182.939,
      185.89
    ],
    "en": [
      "Surely, this will be sufficient."
    ],
    "ru": [
      "Конечно, этого будет достаточно."
    ]
  },
  {
    "time": [
      185.89,
      189.76
    ],
    "en": [
      "The total bandwidth of the connections to the end hosts is still greater than the bandwidth"
    ],
    "ru": [
      "Общая пропускная способность подключений к конечным хостам по-прежнему превышает пропускную способность."
    ]
  },
  {
    "time": [
      189.76,
      195.329
    ],
    "en": [
      "of the connection to DSW1, but that’s okay, all hosts in the network aren’t always in"
    ],
    "ru": [
      "подключения к DSW1, но это нормально, все хосты в сети не всегда находятся в"
    ]
  },
  {
    "time": [
      195.329,
      198.519
    ],
    "en": [
      "a constant state of sending and receiving Internet traffic."
    ],
    "ru": [
      "постоянное состояние отправки и получения интернет-трафика."
    ]
  },
  {
    "time": [
      198.519,
      204.069
    ],
    "en": [
      "I will talk more about this later in the course, but when the bandwidth of the interfaces connected"
    ],
    "ru": [
      "Подробнее об этом я расскажу позже в курсе, но когда пропускная способность подключенных интерфейсов"
    ]
  },
  {
    "time": [
      204.069,
      209.54
    ],
    "en": [
      "to end hosts is greater than the bandwidth of the connection to the distribution switches,"
    ],
    "ru": [
      "для конечных хостов больше, чем пропускная способность подключения к коммутаторам распределения,"
    ]
  },
  {
    "time": [
      209.54,
      212.73
    ],
    "en": [
      "this is called oversubscription."
    ],
    "ru": [
      "это называется переподпиской."
    ]
  },
  {
    "time": [
      212.73,
      217.489
    ],
    "en": [
      "Some oversubscription is acceptable, but too much will cause congestion."
    ],
    "ru": [
      "Некоторое превышение лимита подписки допустимо, но слишком большое количество приведет к перегрузке."
    ]
  },
  {
    "time": [
      217.489,
      223.73
    ],
    "en": [
      "However, even with three links to DSW1 the congestion doesn’t seem any better, so the"
    ],
    "ru": [
      "Однако даже с тремя ссылками на DSW1 загруженность не кажется лучше, поэтому"
    ]
  },
  {
    "time": [
      223.73,
      229.799
    ],
    "en": [
      "network admin once again decides to add another link between ASW1 and DSW1."
    ],
    "ru": [
      "сетевой администратор снова решает добавить еще одну ссылку между ASW1 и DSW1."
    ]
  },
  {
    "time": [
      229.799,
      235.41899999999998
    ],
    "en": [
      "So, now there are four links between ASW1 and DSW1."
    ],
    "ru": [
      "Итак, теперь есть четыре канала между ASW1 и DSW1."
    ]
  },
  {
    "time": [
      235.41899999999998,
      236.87
    ],
    "en": [
      "Do you think things have improved?"
    ],
    "ru": [
      "Как вы думаете, ситуация улучшилась?"
    ]
  },
  {
    "time": [
      236.87,
      244.68
    ],
    "en": [
      "Well, they haven’t, the connection between the two switches is just as congested as before. Why is this?"
    ],
    "ru": [
      "Ну, нет, соединение между двумя коммутаторами так же перегружено, как и раньше. Почему это?"
    ]
  },
  {
    "time": [
      244.68,
      246.58
    ],
    "en": [
      "Why is this? You should be able to figure out the answer."
    ],
    "ru": [
      "Почему это? Вы должны понять ответ."
    ]
  },
  {
    "time": [
      246.58,
      253.419
    ],
    "en": [
      "Here’s a hint, think about what you just studied in days 20, 21, and 22 of this course."
    ],
    "ru": [
      "Вот подсказка. Подумайте о том, что вы только что изучали в 20, 21 и 22 дни этого курса."
    ]
  },
  {
    "time": [
      253.419,
      257.66
    ],
    "en": [
      "If you know the answer, well done, if not don’t worry about it, you will now."
    ],
    "ru": [
      "Если вы знаете ответ - молодец, если не беспокойтесь об этом, вы узнаете сейчас."
    ]
  },
  {
    "time": [
      257.66,
      263.75
    ],
    "en": [
      "Let’s say the administrator went to physically look at the port lights of the two switches."
    ],
    "ru": [
      "Допустим, администратор пошел физически посмотреть на индикаторы портов двух коммутаторов."
    ]
  },
  {
    "time": [
      263.75,
      265.22
    ],
    "en": [
      "What color do you think they were?"
    ],
    "ru": [
      "Как вы думаете, какого они были цвета?"
    ]
  },
  {
    "time": [
      265.22,
      270.74
    ],
    "en": [
      "Well, the network admin checks DSW1 and all of the port lights are green, so there doesn’t"
    ],
    "ru": [
      "Что ж, сетевой администратор проверяет DSW1, и все индикаторы портов горят зеленым, значит, нет"
    ]
  },
  {
    "time": [
      270.74,
      272.39
    ],
    "en": [
      "seem to be a problem."
    ],
    "ru": [
      "кажется проблемой."
    ]
  },
  {
    "time": [
      272.39,
      278.85
    ],
    "en": [
      "However, when he checks ASW1 he notices that, of the links connected to DSW1, only one light"
    ],
    "ru": [
      "Однако, когда он проверяет ASW1, он замечает, что из каналов, подключенных к DSW1, только один индикатор"
    ]
  },
  {
    "time": [
      278.85,
      282.40999999999997
    ],
    "en": [
      "is green, and the others are orange. Why is that?"
    ],
    "ru": [
      "зеленый, а остальные оранжевые. Это почему?"
    ]
  },
  {
    "time": [
      282.40999999999997,
      288.53
    ],
    "en": [
      "Why is that? It’s because of what we studied in the past few days of this course, spanning tree protocol."
    ],
    "ru": [
      "Это почему? Это из-за того, что мы изучали в последние несколько дней этого курса, протокол покрывающего дерева."
    ]
  },
  {
    "time": [
      288.53,
      294.72
    ],
    "en": [
      "If you connect two switches together with multiple links, all except one will be disabled by spanning tree."
    ],
    "ru": [
      "Если вы соедините два коммутатора вместе с несколькими ссылками, все, кроме одного, будут отключены связующим деревом."
    ]
  },
  {
    "time": [
      294.72,
      296.73
    ],
    "en": [
      "by spanning tree. Why does it do this?"
    ],
    "ru": [
      "по остовному дереву. Почему он это делает?"
    ]
  },
  {
    "time": [
      296.73,
      302.9
    ],
    "en": [
      "Well, if all of ASW1’s interfaces were forwarding, Layer 2 loops would form between ASW1 and"
    ],
    "ru": [
      "Что ж, если бы все интерфейсы ASW1 перенаправляли, петли уровня 2 образовывались бы между ASW1 и"
    ]
  },
  {
    "time": [
      302.9,
      307.22
    ],
    "en": [
      "DSW1, leading to broadcast storms."
    ],
    "ru": [
      "DSW1, что приводит к широковещательным штормам."
    ]
  },
  {
    "time": [
      307.22,
      310.7
    ],
    "en": [
      "Other links will be unused unless the active link fails."
    ],
    "ru": [
      "Другие ссылки не будут использоваться, если активная ссылка не сработает."
    ]
  },
  {
    "time": [
      310.7,
      313.95
    ],
    "en": [
      "In that case, one of the inactive links will start forwarding."
    ],
    "ru": [
      "В этом случае одна из неактивных ссылок начнет пересылку."
    ]
  },
  {
    "time": [
      313.95,
      319.0
    ],
    "en": [
      "So, although having backup links is a good thing, because failures can occur for various"
    ],
    "ru": [
      "Итак, хотя наличие резервных ссылок - это хорошо, потому что сбои могут происходить для различных"
    ]
  },
  {
    "time": [
      319.0,
      325.38
    ],
    "en": [
      "reasons, it’s a waste of bandwidth to have these three interfaces disabled, not forwarding any traffic."
    ],
    "ru": [
      "По этой причине отключение этих трех интерфейсов без пересылки трафика является пустой тратой полосы пропускания."
    ]
  },
  {
    "time": [
      325.38,
      331.26
    ],
    "en": [
      "any traffic. However, by forming these four physical interfaces into one logical interface, EtherChannel can"
    ],
    "ru": [
      "любой трафик. Однако, объединив эти четыре физических интерфейса в один логический интерфейс, EtherChannel может"
    ]
  },
  {
    "time": [
      331.26,
      338.55
    ],
    "en": [
      "solve this problem, giving us both redundancy and increased bandwidth."
    ],
    "ru": [
      "решить эту проблему, предоставив нам как избыточность, так и увеличенную пропускную способность."
    ]
  },
  {
    "time": [
      338.55,
      343.17
    ],
    "en": [
      "An EtherChannel is represented in network diagrams by drawing a circle around the interfaces"
    ],
    "ru": [
      "EtherChannel представлен на сетевых диаграммах в виде круга вокруг интерфейсов."
    ]
  },
  {
    "time": [
      343.17,
      345.46
    ],
    "en": [
      "that are grouped together, like this."
    ],
    "ru": [
      "которые сгруппированы вместе, вот так."
    ]
  },
  {
    "time": [
      345.46,
      351.39
    ],
    "en": [
      "EtherChannel groups multiple interfaces together to act as a single interface."
    ],
    "ru": [
      "EtherChannel группирует несколько интерфейсов вместе, чтобы действовать как единый интерфейс."
    ]
  },
  {
    "time": [
      351.39,
      355.12
    ],
    "en": [
      "STP will treat this group as a single interface."
    ],
    "ru": [
      "STP будет рассматривать эту группу как единый интерфейс."
    ]
  },
  {
    "time": [
      355.12,
      359.77
    ],
    "en": [
      "So, after grouping these interfaces into an etherchannel the network admin once again"
    ],
    "ru": [
      "Итак, после объединения этих интерфейсов в эфирный канал администратор сети снова"
    ]
  },
  {
    "time": [
      359.77,
      361.89
    ],
    "en": [
      "checks the link lights."
    ],
    "ru": [
      "проверяет связь горит."
    ]
  },
  {
    "time": [
      361.89,
      363.59
    ],
    "en": [
      "This time they are all green."
    ],
    "ru": [
      "На этот раз они все зеленые."
    ]
  },
  {
    "time": [
      363.59,
      366.77
    ],
    "en": [
      "Won’t this cause a Layer 2 loop?"
    ],
    "ru": [
      "Не вызывает ли это петли на уровне 2?"
    ]
  },
  {
    "time": [
      366.77,
      373.42
    ],
    "en": [
      "Actually no, because this group of four links behaves as if it is a single link."
    ],
    "ru": [
      "На самом деле нет, потому что эта группа из четырех ссылок ведет себя так, как будто это одна ссылка."
    ]
  },
  {
    "time": [
      373.42,
      377.16
    ],
    "en": [
      "For example, let’s say a PC sends a broadcast frame."
    ],
    "ru": [
      "Например, скажем, компьютер отправляет широковещательный кадр."
    ]
  },
  {
    "time": [
      377.16,
      382.08
    ],
    "en": [
      "So, it is flooded out all interfaces on ASW1."
    ],
    "ru": [
      "Итак, залиты все интерфейсы на ASW1."
    ]
  },
  {
    "time": [
      382.08,
      386.0
    ],
    "en": [
      "All of the PCs connected to ASW1 will receive a copy of the frame."
    ],
    "ru": [
      "Все ПК, подключенные к ASW1, получат копию кадра."
    ]
  },
  {
    "time": [
      386.0,
      389.92
    ],
    "en": [
      "Now, how many copies of the frame will DSW1 receive?"
    ],
    "ru": [
      "Теперь, сколько копий кадра получит DSW1?"
    ]
  },
  {
    "time": [
      389.92,
      396.5
    ],
    "en": [
      "Remember, although there are four physical interfaces, they behave as a single interface."
    ],
    "ru": [
      "Помните, что хотя существует четыре физических интерфейса, они ведут себя как единый интерфейс."
    ]
  },
  {
    "time": [
      396.5,
      401.01
    ],
    "en": [
      "The answer is, DSW1 will only receive one copy."
    ],
    "ru": [
      "Ответ: DSW1 получит только одну копию."
    ]
  },
  {
    "time": [
      401.01,
      406.65999999999997
    ],
    "en": [
      "This EtherChannel makes these four physical interfaces a single logical interface, ASW1"
    ],
    "ru": [
      "Этот канал EtherChannel делает эти четыре физических интерфейса единым логическим интерфейсом, ASW1."
    ]
  },
  {
    "time": [
      406.65999999999997,
      412.34000000000003
    ],
    "en": [
      "won’t sent four copies of the same broadcast frame out of a single interface."
    ],
    "ru": [
      "не будет отправлять четыре копии одного и того же широковещательного кадра из одного интерфейса."
    ]
  },
  {
    "time": [
      412.34000000000003,
      417.48
    ],
    "en": [
      "Traffic using the EtherChannel will be load balanced among the physical interfaces in the group."
    ],
    "ru": [
      "Трафик, использующий EtherChannel, будет сбалансирован по нагрузке между физическими интерфейсами в группе."
    ]
  },
  {
    "time": [
      417.48,
      421.4
    ],
    "en": [
      "the group. An algorithm is used to determine which traffic will use which physical interface."
    ],
    "ru": [
      "группа. Алгоритм используется для определения того, какой трафик будет использовать какой физический интерфейс."
    ]
  },
  {
    "time": [
      421.4,
      424.39
    ],
    "en": [
      "I will give you more details on this later."
    ],
    "ru": [
      "Позже я расскажу вам об этом подробнее."
    ]
  },
  {
    "time": [
      424.39,
      428.34
    ],
    "en": [
      "So, DSW1 received the broadcast frame."
    ],
    "ru": [
      "Итак, DSW1 получил широковещательный кадр."
    ]
  },
  {
    "time": [
      428.34,
      430.06
    ],
    "en": [
      "What will it do now?"
    ],
    "ru": [
      "Что он теперь будет делать?"
    ]
  },
  {
    "time": [
      430.06,
      435.81
    ],
    "en": [
      "It will flood the broadcast frame out of all interfaces, except the one it was received on."
    ],
    "ru": [
      "Он рассылает широковещательный кадр со всех интерфейсов, кроме того, на котором он был получен."
    ]
  },
  {
    "time": [
      435.81,
      439.3
    ],
    "en": [
      "on. So let’s say DSW1 has these two other links here."
    ],
    "ru": [
      "на. Допустим, у DSW1 есть еще две эти ссылки."
    ]
  },
  {
    "time": [
      439.3,
      445.26
    ],
    "en": [
      "Which interfaces will DSW1 forward the frame out of? Only these two."
    ],
    "ru": [
      "Из каких интерфейсов DSW1 будет пересылать кадр? Только эти двое."
    ]
  },
  {
    "time": [
      445.26,
      449.23
    ],
    "en": [
      "Only these two. Why didn’t it forward the frame out of the other three interfaces in the etherchannel?"
    ],
    "ru": [
      "Только эти двое. Почему он не пересылал кадр из трех других интерфейсов в etherchannel?"
    ]
  },
  {
    "time": [
      449.23,
      454.81
    ],
    "en": [
      "I’ll repeat it once more, although this etherchannel contains four separate physical"
    ],
    "ru": [
      "Я повторю это еще раз, хотя этот эфирный канал содержит четыре отдельных физических"
    ]
  },
  {
    "time": [
      454.81,
      457.96
    ],
    "en": [
      "interfaces, they behave as a single interface."
    ],
    "ru": [
      "интерфейсы, они ведут себя как единый интерфейс."
    ]
  },
  {
    "time": [
      457.96,
      463.37
    ],
    "en": [
      "DSW1 won’t send the broadcast frame back out of the same interface it was received on."
    ],
    "ru": [
      "DSW1 не отправляет широковещательный кадр обратно через тот же интерфейс, на котором он был получен."
    ]
  },
  {
    "time": [
      463.37,
      468.15999999999997
    ],
    "en": [
      "on. So it isn’t forwarded back to ASW1, and no Layer 2 loop is formed."
    ],
    "ru": [
      "на. Таким образом, он не пересылается обратно в ASW1, и петля уровня 2 не формируется."
    ]
  },
  {
    "time": [
      468.15999999999997,
      474.6
    ],
    "en": [
      "It’s kind of like this, instead of four separate interfaces, perhaps gigabit ethernet"
    ],
    "ru": [
      "Это примерно так, вместо четырех отдельных интерфейсов, возможно, гигабитного Ethernet."
    ]
  },
  {
    "time": [
      474.6,
      481.74
    ],
    "en": [
      "interfaces, connecting ASW1 to DSW1, it’s as if there is a single four-gigabit ethernet interface."
    ],
    "ru": [
      "интерфейсы, соединяющие ASW1 с DSW1, это как если бы есть один четырехгигабитный интерфейс Ethernet."
    ]
  },
  {
    "time": [
      481.74,
      486.94
    ],
    "en": [
      "interface. The bandwidth of the four separate interfaces is combined to form one faster interface,"
    ],
    "ru": [
      "интерфейс. Пропускная способность четырех отдельных интерфейсов объединяется в один более быстрый интерфейс,"
    ]
  },
  {
    "time": [
      486.94,
      490.78
    ],
    "en": [
      "a virtual four-gigabit interface."
    ],
    "ru": [
      "виртуальный четырехгигабитный интерфейс."
    ]
  },
  {
    "time": [
      490.78,
      495.68
    ],
    "en": [
      "The difference between the physical characteristics and the logical or virtual characteristics"
    ],
    "ru": [
      "Разница между физическими характеристиками и логическими или виртуальными характеристиками"
    ]
  },
  {
    "time": [
      495.68,
      500.42
    ],
    "en": [
      "of a network are something you need to understand as a network engineer."
    ],
    "ru": [
      "сети - это то, что вам нужно понять как сетевой инженер."
    ]
  },
  {
    "time": [
      500.42,
      503.35
    ],
    "en": [
      "For example we studied VLANs."
    ],
    "ru": [
      "Например, мы изучали сети VLAN."
    ]
  },
  {
    "time": [
      503.35,
      509.13
    ],
    "en": [
      "Multiple PCs can all be connected to the same switch and therefore be in the same LAN, however"
    ],
    "ru": [
      "К одному коммутатору можно подключить несколько ПК и, тем не менее, находиться в одной локальной сети."
    ]
  },
  {
    "time": [
      509.13,
      516.68
    ],
    "en": [
      "VLANs virtually divide these PCs into separate virtual LANs, each behaving as a separate LAN."
    ],
    "ru": [
      "Виртуальные локальные сети виртуально разделяют эти ПК на отдельные виртуальные локальные сети, каждая из которых ведет себя как отдельная локальная сеть."
    ]
  },
  {
    "time": [
      516.68,
      525.69
    ],
    "en": [
      "LAN. Likewise, these interfaces exist as four separate physical interfaces, but now they form a single virtual interface."
    ],
    "ru": [
      "LAN. Точно так же эти интерфейсы существуют как четыре отдельных физических интерфейса, но теперь они образуют единый виртуальный интерфейс."
    ]
  },
  {
    "time": [
      525.69,
      532.76
    ],
    "en": [
      "virtual interface. Some other names for an EtherChannel are a Port Channel and a LAG, which stands for Link Aggregation Group."
    ],
    "ru": [
      "виртуальный интерфейс. Некоторые другие названия EtherChannel - это Port Channel и LAG, что означает Link Aggregation Group."
    ]
  },
  {
    "time": [
      532.76,
      540.87
    ],
    "en": [
      "Aggregation Group. You’ll see that, to configure an etherchannel in Cisco IOS, you need to use a few different terms."
    ],
    "ru": [
      "Группа агрегации. Вы увидите, что для настройки etherchannel в Cisco IOS вам нужно использовать несколько разных терминов."
    ]
  },
  {
    "time": [
      540.87,
      544.5
    ],
    "en": [
      "terms. Now let’s take a look at how etherchannel load balances."
    ],
    "ru": [
      "термины. Теперь давайте посмотрим, как распределяется нагрузка на etherchannel."
    ]
  },
  {
    "time": [
      544.5,
      547.45
    ],
    "en": [
      "It load balances based on ‘flows’."
    ],
    "ru": [
      "Он балансирует нагрузку на основе «потоков»."
    ]
  },
  {
    "time": [
      547.45,
      548.82
    ],
    "en": [
      "What is a flow?"
    ],
    "ru": [
      "Что такое поток?"
    ]
  },
  {
    "time": [
      548.82,
      552.83
    ],
    "en": [
      "A flow is a communication between two nodes in the network."
    ],
    "ru": [
      "Поток - это связь между двумя узлами в сети."
    ]
  },
  {
    "time": [
      552.83,
      556.88
    ],
    "en": [
      "So for example, between PC1 and SRV1."
    ],
    "ru": [
      "Так, например, между ПК1 и SRV1."
    ]
  },
  {
    "time": [
      556.88,
      561.21
    ],
    "en": [
      "By the way, you usually won’t see a server or a printer connected directly to a distribution"
    ],
    "ru": [
      "Кстати, обычно вы не увидите сервер или принтер, подключенные напрямую к дистрибутиву."
    ]
  },
  {
    "time": [
      561.21,
      567.81
    ],
    "en": [
      "layer switch, these are also end hosts which you should connect to the access layer switches."
    ],
    "ru": [
      "коммутатор уровня, это также конечные хосты, которые следует подключать к коммутаторам уровня доступа."
    ]
  },
  {
    "time": [
      567.81,
      571.06
    ],
    "en": [
      "Just to simplify this network diagram I’ll leave it like this, though."
    ],
    "ru": [
      "Но чтобы упростить эту схему сети, я оставлю ее так."
    ]
  },
  {
    "time": [
      571.06,
      578.81
    ],
    "en": [
      "So, let’s say PC1 initiates an exchange of data with SRV1, and it sends a few frames to do so."
    ],
    "ru": [
      "Итак, допустим, ПК1 инициирует обмен данными с SRV1 и отправляет для этого несколько кадров."
    ]
  },
  {
    "time": [
      578.81,
      584.76
    ],
    "en": [
      "to do so. The frame is received by ASW1, and assuming it already knows the MAC address of SRV1,"
    ],
    "ru": [
      "сделать так. Кадр получен ASW1, и если он уже знает MAC-адрес SRV1,"
    ]
  },
  {
    "time": [
      584.76,
      588.17
    ],
    "en": [
      "it will forward the frame out of the port channel to DSW1."
    ],
    "ru": [
      "он перенаправит кадр из канала порта в DSW1."
    ]
  },
  {
    "time": [
      588.17,
      591.85
    ],
    "en": [
      "However, which physical interface will it use?"
    ],
    "ru": [
      "Однако какой физический интерфейс он будет использовать?"
    ]
  },
  {
    "time": [
      591.85,
      596.3
    ],
    "en": [
      "Well, there is an algorithm it uses to calculate which physical interface the traffic will"
    ],
    "ru": [
      "Что ж, есть алгоритм, который он использует для расчета, какой физический интерфейс будет передавать трафик."
    ]
  },
  {
    "time": [
      596.3,
      601.14
    ],
    "en": [
      "actually be sent on, let’s say it determines that this interface should be used."
    ],
    "ru": [
      "на самом деле будет отправлен, скажем, он определяет, что этот интерфейс следует использовать."
    ]
  },
  {
    "time": [
      601.14,
      607.33
    ],
    "en": [
      "Now, when PC1 sends the next frame in the flow, in the communication between PC1 and"
    ],
    "ru": [
      "Теперь, когда ПК1 отправляет следующий кадр в потоке, при обмене данными между ПК1 и"
    ]
  },
  {
    "time": [
      607.33,
      611.88
    ],
    "en": [
      "SRV1, the same interface will be used to forward the traffic to SRV1."
    ],
    "ru": [
      "SRV1, тот же интерфейс будет использоваться для перенаправления трафика на SRV1."
    ]
  },
  {
    "time": [
      611.88,
      618.62
    ],
    "en": [
      "So, the point is that frames in the same flow will be forwarded using the same physical interface."
    ],
    "ru": [
      "Итак, дело в том, что кадры в одном потоке будут пересылаться с использованием одного и того же физического интерфейса."
    ]
  },
  {
    "time": [
      618.62,
      622.791
    ],
    "en": [
      "interface. If frames in the same flow were forwarded using different physical interfaces, some"
    ],
    "ru": [
      "интерфейс. Если кадры в одном потоке пересылались с использованием разных физических интерфейсов, некоторые"
    ]
  },
  {
    "time": [
      622.791,
      628.23
    ],
    "en": [
      "frames may arrive at the destination out of order, which can cause problems."
    ],
    "ru": [
      "кадры могут прибыть в пункт назначения не по порядку, что может вызвать проблемы."
    ]
  },
  {
    "time": [
      628.23,
      632.95
    ],
    "en": [
      "Some applications can deal with frames arriving out of order, but some applications can’t."
    ],
    "ru": [
      "Некоторые приложения могут обрабатывать фреймы, поступающие не по порядку, но другие - нет."
    ]
  },
  {
    "time": [
      632.95,
      640.8
    ],
    "en": [
      "Now, if PC1 wants to print something and initiates a separate communication flow with PR1, ASW1"
    ],
    "ru": [
      "Теперь, если ПК1 хочет что-то напечатать и инициирует отдельный поток связи с PR1, ASW1"
    ]
  },
  {
    "time": [
      640.8,
      644.89
    ],
    "en": [
      "will once again forward the frame using its virtual port channel interface."
    ],
    "ru": [
      "еще раз пересылает кадр, используя интерфейс своего виртуального порта."
    ]
  },
  {
    "time": [
      644.89,
      649.2
    ],
    "en": [
      "However, it will make a separate calculation to determine which physical interface will"
    ],
    "ru": [
      "Однако он произведет отдельный расчет, чтобы определить, какой физический интерфейс будет"
    ]
  },
  {
    "time": [
      649.2,
      651.27
    ],
    "en": [
      "be used for the flow."
    ],
    "ru": [
      "использоваться для потока."
    ]
  },
  {
    "time": [
      651.27,
      655.87
    ],
    "en": [
      "For example, it might determine that this interface will be used for the flow."
    ],
    "ru": [
      "Например, он может определить, что этот интерфейс будет использоваться для потока."
    ]
  },
  {
    "time": [
      655.87,
      660.99
    ],
    "en": [
      "Just like before, when PC1 sends another frame in the flow, the same member interface of"
    ],
    "ru": [
      "Как и раньше, когда ПК1 отправляет другой фрейм в потоке, тот же членский интерфейс"
    ]
  },
  {
    "time": [
      660.99,
      664.22
    ],
    "en": [
      "the etherchannel will be used to forward it."
    ],
    "ru": [
      "etherchannel будет использоваться для его пересылки."
    ]
  },
  {
    "time": [
      664.22,
      667.65
    ],
    "en": [
      "How about if PC2 also wants to print something?"
    ],
    "ru": [
      "Как насчет того, чтобы ПК2 тоже хотел что-то напечатать?"
    ]
  },
  {
    "time": [
      667.65,
      672.46
    ],
    "en": [
      "It sends the first frame in the flow to ASW1, which will then do a calculation to determine"
    ],
    "ru": [
      "Он отправляет первый кадр в потоке ASW1, который затем выполняет расчет для определения"
    ]
  },
  {
    "time": [
      672.46,
      675.65
    ],
    "en": [
      "which physical interface in the etherchannel will be used."
    ],
    "ru": [
      "какой физический интерфейс в etherchannel будет использоваться."
    ]
  },
  {
    "time": [
      675.65,
      677.54
    ],
    "en": [
      "perhaps this one is used."
    ],
    "ru": [
      "возможно, этот используется."
    ]
  },
  {
    "time": [
      677.54,
      683.3389999999999
    ],
    "en": [
      "So, this is how EtherChannel performs load balancing, by using different physical interfaces"
    ],
    "ru": [
      "Итак, вот как EtherChannel выполняет балансировку нагрузки, используя разные физические интерфейсы."
    ]
  },
  {
    "time": [
      683.3389999999999,
      686.38
    ],
    "en": [
      "in the etherchannel for different flows."
    ],
    "ru": [
      "в эфирном канале для разных потоков."
    ]
  },
  {
    "time": [
      686.38,
      690.48
    ],
    "en": [
      "The calculation that is done to determine which physical interface to use takes into"
    ],
    "ru": [
      "Расчет, который делается для определения того, какой физический интерфейс использовать, учитывает"
    ]
  },
  {
    "time": [
      690.48,
      692.3
    ],
    "en": [
      "account a few inputs."
    ],
    "ru": [
      "учтите несколько входов."
    ]
  },
  {
    "time": [
      692.3,
      697.81
    ],
    "en": [
      "Actually, you can change the inputs used in the interface selection calculation."
    ],
    "ru": [
      "Фактически, вы можете изменить входные данные, используемые при расчете выбора интерфейса."
    ]
  },
  {
    "time": [
      697.81,
      701.77
    ],
    "en": [
      "Here are the inputs that can be used. Source MAC address."
    ],
    "ru": [
      "Вот входные данные, которые можно использовать. MAC-адрес источника."
    ]
  },
  {
    "time": [
      701.77,
      707.97
    ],
    "en": [
      "Source MAC address. So, all frames with the same source MAC address will always use the same interface in the etherchannel."
    ],
    "ru": [
      "MAC-адрес источника. Таким образом, все кадры с одинаковым исходным MAC-адресом всегда будут использовать один и тот же интерфейс в эфирном канале."
    ]
  },
  {
    "time": [
      707.97,
      711.279
    ],
    "en": [
      "etherchannel. Or, destination MAC address."
    ],
    "ru": [
      "etherchannel. Или MAC-адрес назначения."
    ]
  },
  {
    "time": [
      711.279,
      717.98
    ],
    "en": [
      "In this case, all frames with the same destination MAC address will always use the same physical interface."
    ],
    "ru": [
      "В этом случае все кадры с одним и тем же MAC-адресом назначения всегда будут использовать один и тот же физический интерфейс."
    ]
  },
  {
    "time": [
      717.98,
      722.16
    ],
    "en": [
      "interface. You can also use both the source AND destination MAC addresses."
    ],
    "ru": [
      "интерфейс. Вы также можете использовать как исходный, так и целевой MAC-адреса."
    ]
  },
  {
    "time": [
      722.16,
      728.52
    ],
    "en": [
      "So for example, frames from PC1 to SRV1 will use always use a certain interface, frames"
    ],
    "ru": [
      "Так, например, кадры с ПК1 на SRV1 всегда будут использовать определенный интерфейс, кадры"
    ]
  },
  {
    "time": [
      728.52,
      734.15
    ],
    "en": [
      "from PC2 to SRV1 will always use a certain interface, which might be the same or different"
    ],
    "ru": [
      "от ПК2 к SRV1 всегда будет использовать определенный интерфейс, который может быть одинаковым или другим."
    ]
  },
  {
    "time": [
      734.15,
      743.05
    ],
    "en": [
      "than the one used for traffic from PC1 to SRV1, frames from PC1 to PR1 might use another different interface, etc."
    ],
    "ru": [
      "чем тот, который используется для трафика от ПК1 к SRV1, кадры от ПК1 к PR1 могут использовать другой интерфейс и т. д."
    ]
  },
  {
    "time": [
      743.05,
      748.95
    ],
    "en": [
      "different interface, etc. The calculation is done based on both the source and destination MAC addresses."
    ],
    "ru": [
      "другой интерфейс и т. д. Расчет выполняется на основе MAC-адресов источника и назначения."
    ]
  },
  {
    "time": [
      748.95,
      754.23
    ],
    "en": [
      "You can also configure etherchannel to select the interface based on the source IP address,"
    ],
    "ru": [
      "Вы также можете настроить etherchannel для выбора интерфейса на основе IP-адреса источника,"
    ]
  },
  {
    "time": [
      754.23,
      760.27
    ],
    "en": [
      "destination IP address, or both source AND destination IP addresses."
    ],
    "ru": [
      "IP-адрес назначения или оба IP-адреса источника И IP-адреса назначения."
    ]
  },
  {
    "time": [
      760.27,
      766.51
    ],
    "en": [
      "Some switches also support load-balancing based on the Layer 4 TCP or UDP port numbers,"
    ],
    "ru": [
      "Некоторые коммутаторы также поддерживают балансировку нагрузки на основе номеров портов TCP или UDP уровня 4,"
    ]
  },
  {
    "time": [
      766.51,
      769.05
    ],
    "en": [
      "but those are a topic for another lesson."
    ],
    "ru": [
      "но это тема для другого урока."
    ]
  },
  {
    "time": [
      769.05,
      774.94
    ],
    "en": [
      "Also, which methods the switch can use depends on the switch model, some may only support"
    ],
    "ru": [
      "Кроме того, то, какие методы может использовать коммутатор, зависит от модели коммутатора, некоторые могут поддерживать только"
    ]
  },
  {
    "time": [
      774.94,
      782.36
    ],
    "en": [
      "using the MAC addresses, some may support only MAC or IP addresses, and some may support all methods."
    ],
    "ru": [
      "Используя MAC-адреса, некоторые могут поддерживать только MAC или IP-адреса, а некоторые могут поддерживать все методы."
    ]
  },
  {
    "time": [
      782.36,
      788.02
    ],
    "en": [
      "all methods. So, we haven’t actually configured an etherchannel yet, but since I just mentioned it let’s"
    ],
    "ru": [
      "все методы. Итак, на самом деле мы еще не настроили эфирный канал, но, поскольку я только что упомянул об этом, давайте"
    ]
  },
  {
    "time": [
      788.02,
      792.85
    ],
    "en": [
      "take a look at how to check and configure the load-balancing method."
    ],
    "ru": [
      "посмотрите, как проверить и настроить метод балансировки нагрузки."
    ]
  },
  {
    "time": [
      792.85,
      799.44
    ],
    "en": [
      "Use the command SHOW ETHERCHANNEL LOAD-BALANCE to see the current load-balancing method."
    ],
    "ru": [
      "Используйте команду SHOW ETHERCHANNEL LOAD-BALANCE, чтобы увидеть текущий метод балансировки нагрузки."
    ]
  },
  {
    "time": [
      799.44,
      803.89
    ],
    "en": [
      "You can see the default for this model of switch is to load balance based on the source"
    ],
    "ru": [
      "Вы можете видеть, что по умолчанию для этой модели коммутатора используется балансировка нагрузки на основе источника."
    ]
  },
  {
    "time": [
      803.89,
      805.87
    ],
    "en": [
      "and destination IP addresses."
    ],
    "ru": [
      "и IP-адреса назначения."
    ]
  },
  {
    "time": [
      805.87,
      814.23
    ],
    "en": [
      "So, for example, all traffic from 10.0.0.1 with a destination of 10.0.0.2 will always"
    ],
    "ru": [
      "Так, например, весь трафик из 10.0.0.1 с пунктом назначения 10.0.0.2 всегда будет"
    ]
  },
  {
    "time": [
      814.23,
      818.46
    ],
    "en": [
      "use a certain physical interface within the etherchannel."
    ],
    "ru": [
      "использовать определенный физический интерфейс в эфирном канале."
    ]
  },
  {
    "time": [
      818.46,
      821.66
    ],
    "en": [
      "Down here you can see a more specific breakdown."
    ],
    "ru": [
      "Здесь вы можете увидеть более конкретную разбивку."
    ]
  },
  {
    "time": [
      821.66,
      827.83
    ],
    "en": [
      "Frames which encapsulate IP packets, whether IPv4 or IPv6, will be load-balanced based"
    ],
    "ru": [
      "Фреймы, которые инкапсулируют IP-пакеты, будь то IPv4 или IPv6, будут сбалансированы по нагрузке."
    ]
  },
  {
    "time": [
      827.83,
      830.81
    ],
    "en": [
      "on the source and destination IP addresses."
    ],
    "ru": [
      "на исходном и целевом IP-адресах."
    ]
  },
  {
    "time": [
      830.81,
      836.81
    ],
    "en": [
      "However, notice at the top it says non-IP will use the source and destination MAC addresses."
    ],
    "ru": [
      "Тем не менее, обратите внимание, что в верхней части указано, что не-IP будут использовать MAC-адреса источника и назначения."
    ]
  },
  {
    "time": [
      836.81,
      842.15
    ],
    "en": [
      "Well, that’s because if an IP packet isn’t encapsulated in the Ethernet frame, there"
    ],
    "ru": [
      "Это потому, что если IP-пакет не инкапсулирован в кадр Ethernet, там"
    ]
  },
  {
    "time": [
      842.15,
      848.83
    ],
    "en": [
      "is no IP address that can be used to determine the load-balancing, so the MAC addresses are used instead."
    ],
    "ru": [
      "IP-адрес, который можно использовать для определения балансировки нагрузки, отсутствует, поэтому вместо него используются MAC-адреса."
    ]
  },
  {
    "time": [
      848.83,
      856.29
    ],
    "en": [
      "used instead. Now, as for how to change the load-balancing method, enter global config mode and use this command."
    ],
    "ru": [
      "вместо этого. Теперь, что касается того, как изменить метод балансировки нагрузки, войдите в режим глобальной конфигурации и используйте эту команду."
    ]
  },
  {
    "time": [
      856.29,
      860.86
    ],
    "en": [
      "command. PORT-CHANNEL LOAD-BALANCE, followed by the method."
    ],
    "ru": [
      "команда. НАГРУЗКА-БАЛАНС НА ПОРТОВЫЙ КАНАЛ, а затем метод."
    ]
  },
  {
    "time": [
      860.86,
      866.34
    ],
    "en": [
      "In this case I changed it to use the source and destination MAC addresses of the frame."
    ],
    "ru": [
      "В этом случае я изменил его, чтобы использовать MAC-адреса источника и назначения кадра."
    ]
  },
  {
    "time": [
      866.34,
      872.91
    ],
    "en": [
      "Then I confirmed once more, and you can see the load-balancing configuration has been successfully changed."
    ],
    "ru": [
      "Затем я подтвердил еще раз, и вы увидите, что конфигурация балансировки нагрузки была успешно изменена."
    ]
  },
  {
    "time": [
      872.91,
      876.3
    ],
    "en": [
      "successfully changed. By the way, here are the choices available on this device."
    ],
    "ru": [
      "успешно изменен. Кстати, вот варианты, доступные на этом устройстве."
    ]
  },
  {
    "time": [
      876.3,
      881.61
    ],
    "en": [
      "It can load-balance based on MAC or IP addresses, and in either case it can load-balanced based"
    ],
    "ru": [
      "Он может балансировать нагрузку на основе MAC- или IP-адресов, и в любом случае он может балансировать нагрузку на основе"
    ]
  },
  {
    "time": [
      881.61,
      887.55
    ],
    "en": [
      "on either the source, the destination, or both the source AND destination addresses."
    ],
    "ru": [
      "либо на источнике, либо на адресе назначения, либо на обоих адресах источника И назначения."
    ]
  },
  {
    "time": [
      887.55,
      895.11
    ],
    "en": [
      "Now, I want to point out one thing which is a little frustrating about etherchannel configuration on Cisco devices."
    ],
    "ru": [
      "Теперь я хочу указать на одну вещь, которая немного расстраивает конфигурацию etherchannel на устройствах Cisco."
    ]
  },
  {
    "time": [
      895.11,
      900.84
    ],
    "en": [
      "on Cisco devices. What keyword do you use to configure the load-balancing method? PORT-CHANNEL."
    ],
    "ru": [
      "на устройствах Cisco. Какое ключевое слово вы используете для настройки метода балансировки нагрузки? ПОРТ-КАНАЛ."
    ]
  },
  {
    "time": [
      900.84,
      906.58
    ],
    "en": [
      "PORT-CHANNEL. And what keyword do you use to view the load-balancing method? ETHERCHANNEL."
    ],
    "ru": [
      "ПОРТ-КАНАЛ. И какое ключевое слово вы используете для просмотра метода балансировки нагрузки? ЭФИРНЫЙ КАНАЛ."
    ]
  },
  {
    "time": [
      906.58,
      910.5
    ],
    "en": [
      "ETHERCHANNEL. Different words are used for the same thing, which is a bit frustrating."
    ],
    "ru": [
      "ЭФИРНЫЙ КАНАЛ. Для обозначения одного и того же используются разные слова, что немного расстраивает."
    ]
  },
  {
    "time": [
      910.5,
      915.17
    ],
    "en": [
      "Actually, later you’ll find that there is even one more that you need to remember."
    ],
    "ru": [
      "Собственно, позже вы обнаружите, что есть еще один, который вам нужно запомнить."
    ]
  },
  {
    "time": [
      915.17,
      919.42
    ],
    "en": [
      "So, these are the first two commands to remember for this video."
    ],
    "ru": [
      "Итак, это первые две команды, которые нужно запомнить для этого видео."
    ]
  },
  {
    "time": [
      919.42,
      923.86
    ],
    "en": [
      "SHOW ETHERCHANNEL LOAD-BALANCE, to check the load-balancing method being used."
    ],
    "ru": [
      "SHOW ETHERCHANNEL LOAD-BALANCE, чтобы проверить используемый метод балансировки нагрузки."
    ]
  },
  {
    "time": [
      923.86,
      932.36
    ],
    "en": [
      "And, PORT-CHANNEL LOAD-BALANCE, followed by the load-balancing method, to configure the load-balancing."
    ],
    "ru": [
      "И, PORT-CHANNEL LOAD-BALANCE, за которым следует метод балансировки нагрузки, чтобы настроить балансировку нагрузки."
    ]
  },
  {
    "time": [
      932.36,
      936.56
    ],
    "en": [
      "load-balancing. Now let’s get into actually creating an EtherChannel between two switches."
    ],
    "ru": [
      "Балансировка нагрузки. Теперь давайте перейдем к созданию канала EtherChannel между двумя коммутаторами."
    ]
  },
  {
    "time": [
      936.56,
      940.24
    ],
    "en": [
      "There are three methods of EtherChannel configuration."
    ],
    "ru": [
      "Существует три метода настройки EtherChannel."
    ]
  },
  {
    "time": [
      940.24,
      945.68
    ],
    "en": [
      "First up is PAgP, which stands for Port Aggregation Protocol."
    ],
    "ru": [
      "Первым идет PAgP, что означает протокол агрегации портов."
    ]
  },
  {
    "time": [
      945.68,
      951.44
    ],
    "en": [
      "It is a Cisco proprietary protocol, so it can only be used on Cisco switches."
    ],
    "ru": [
      "Это проприетарный протокол Cisco, поэтому его можно использовать только на коммутаторах Cisco."
    ]
  },
  {
    "time": [
      951.44,
      956.83
    ],
    "en": [
      "If you’re trying to form an EtherChannel with a Juniper switch, for example, you can’t use PAgP."
    ],
    "ru": [
      "Например, если вы пытаетесь создать EtherChannel с коммутатором Juniper, вы не можете использовать PAgP."
    ]
  },
  {
    "time": [
      956.83,
      959.88
    ],
    "en": [
      "use PAgP. Now, what does PAgP do?"
    ],
    "ru": [
      "используйте PAgP. Итак, что делает PAgP?"
    ]
  },
  {
    "time": [
      959.88,
      965.11
    ],
    "en": [
      "It dynamically negotiates the creation and maintenance of the EtherChannel."
    ],
    "ru": [
      "Он динамически согласовывает создание и обслуживание EtherChannel."
    ]
  },
  {
    "time": [
      965.11,
      971.17
    ],
    "en": [
      "Just a few days ago we covered DTP, which does a similar thing regarding trunk formation."
    ],
    "ru": [
      "Всего несколько дней назад мы рассмотрели DTP, который делает то же самое в отношении формирования ствола."
    ]
  },
  {
    "time": [
      971.17,
      975.54
    ],
    "en": [
      "Frames are sent to the neighboring switch to see if it wants to form an EtherChannel,"
    ],
    "ru": [
      "Кадры отправляются на соседний коммутатор, чтобы узнать, хочет ли он сформировать EtherChannel,"
    ]
  },
  {
    "time": [
      975.54,
      979.63
    ],
    "en": [
      "and then the switches agree upon either forming an EtherChannel or not."
    ],
    "ru": [
      "а затем коммутаторы соглашаются либо формировать EtherChannel, либо нет."
    ]
  },
  {
    "time": [
      979.63,
      987.69
    ],
    "en": [
      "Okay, the next method of configuration is LACP, which stands for Link Aggregation Control Protocol."
    ],
    "ru": [
      "Хорошо, следующий метод настройки - LACP, что означает протокол управления агрегацией каналов."
    ]
  },
  {
    "time": [
      987.69,
      994.79
    ],
    "en": [
      "Protocol. It is an industry standard protocol, once again from our friends at the IEEE, its code is 802.3ad."
    ],
    "ru": [
      "Протокол. Это протокол промышленного стандарта, опять же, от наших друзей из IEEE, его код - 802.3ad."
    ]
  },
  {
    "time": [
      994.79,
      999.43
    ],
    "en": [
      "is 802.3ad. Basically, it does the same thing as PAgP."
    ],
    "ru": [
      "это 802.3ad. По сути, он делает то же самое, что и PAgP."
    ]
  },
  {
    "time": [
      999.43,
      1006.529
    ],
    "en": [
      "It dynamically negotiates the creation and maintenance of the EtherChannel, like DTP does for trunks."
    ],
    "ru": [
      "Он динамически согласовывает создание и обслуживание EtherChannel, как DTP для соединительных линий."
    ]
  },
  {
    "time": [
      1006.529,
      1011.85
    ],
    "en": [
      "does for trunks. Because it is an industry standard protocol, it doesn’t run only on Cisco switches, so"
    ],
    "ru": [
      "делает для стволов. Поскольку это стандартный протокол, он работает не только на коммутаторах Cisco, поэтому"
    ]
  },
  {
    "time": [
      1011.85,
      1016.519
    ],
    "en": [
      "it can be used to form EtherChannels with switches from other vendors."
    ],
    "ru": [
      "его можно использовать для формирования каналов EtherChannels с коммутаторами других производителей."
    ]
  },
  {
    "time": [
      1016.519,
      1021.149
    ],
    "en": [
      "Because of this, LACP is the preferred method of configuring EtherChannels."
    ],
    "ru": [
      "По этой причине LACP является предпочтительным методом настройки каналов EtherChannels."
    ]
  },
  {
    "time": [
      1021.149,
      1025.51
    ],
    "en": [
      "Actually, the exam topics list only states LACP."
    ],
    "ru": [
      "Фактически, в списке тем экзамена указан только LACP."
    ]
  },
  {
    "time": [
      1025.51,
      1030.47
    ],
    "en": [
      "However, for the test you really should be familiar with the other methods, for some"
    ],
    "ru": [
      "Однако для теста вам действительно следует знать другие методы, для некоторых"
    ]
  },
  {
    "time": [
      1030.47,
      1034.959
    ],
    "en": [
      "reason Cisco’s exam topics lists aren’t very reliable."
    ],
    "ru": [
      "Причина, по которой списки тем экзаменов Cisco не очень надежны."
    ]
  },
  {
    "time": [
      1034.959,
      1039.05
    ],
    "en": [
      "So, the last method is static EtherChannel."
    ],
    "ru": [
      "Итак, последний метод - статический EtherChannel."
    ]
  },
  {
    "time": [
      1039.05,
      1044.13
    ],
    "en": [
      "In this case a protocol isn’t used to determine if an EtherChannel should be formed."
    ],
    "ru": [
      "В этом случае протокол не используется для определения необходимости создания EtherChannel."
    ]
  },
  {
    "time": [
      1044.13,
      1048.83
    ],
    "en": [
      "Instead, interfaces are statically configured to form an EtherChannel."
    ],
    "ru": [
      "Вместо этого интерфейсы статически настроены для формирования EtherChannel."
    ]
  },
  {
    "time": [
      1048.83,
      1054.26
    ],
    "en": [
      "This is usually avoided, because you want the switches to dynamically maintain the EtherChannel,"
    ],
    "ru": [
      "Обычно этого избегают, потому что вы хотите, чтобы коммутаторы динамически поддерживали EtherChannel,"
    ]
  },
  {
    "time": [
      1054.26,
      1058.04
    ],
    "en": [
      "for example you want the switch to remove an interface from the EtherChannel if there"
    ],
    "ru": [
      "например, вы хотите, чтобы коммутатор удалил интерфейс из EtherChannel, если есть"
    ]
  },
  {
    "time": [
      1058.04,
      1060.66
    ],
    "en": [
      "is some sort of problem on the interface."
    ],
    "ru": [
      "это какая то проблема по интерфейсу."
    ]
  },
  {
    "time": [
      1060.66,
      1066.51
    ],
    "en": [
      "Okay, finally, up to 8 interfaces can be formed into a single EtherChannel."
    ],
    "ru": [
      "Итак, наконец, до 8 интерфейсов можно объединить в один канал EtherChannel."
    ]
  },
  {
    "time": [
      1066.51,
      1073.809
    ],
    "en": [
      "Actually, LACP allows up to 16, but only 8 will be active, the other 8 will be in standby"
    ],
    "ru": [
      "Фактически, LACP допускает до 16, но только 8 будут активными, остальные 8 будут в режиме ожидания."
    ]
  },
  {
    "time": [
      1073.809,
      1078.15
    ],
    "en": [
      "mode, waiting for an active interface to fail."
    ],
    "ru": [
      "режим ожидания отказа активного интерфейса."
    ]
  },
  {
    "time": [
      1078.15,
      1081.33
    ],
    "en": [
      "So let’s look into how to configure each method."
    ],
    "ru": [
      "Итак, давайте посмотрим, как настроить каждый метод."
    ]
  },
  {
    "time": [
      1081.33,
      1087.16
    ],
    "en": [
      "The configuration for each is almost identical, you just have to swap out some keywords."
    ],
    "ru": [
      "Конфигурация для каждого практически идентична, вам просто нужно поменять местами несколько ключевых слов."
    ]
  },
  {
    "time": [
      1087.16,
      1092.92
    ],
    "en": [
      "First I used the interface range command to configure all of the member interfaces at once."
    ],
    "ru": [
      "Сначала я использовал команду interface range для одновременной настройки всех интерфейсов-участников."
    ]
  },
  {
    "time": [
      1092.92,
      1097.0
    ],
    "en": [
      "once. This is a good idea for EtherChannel, because the configurations on each member interface"
    ],
    "ru": [
      "однажды. Это хорошая идея для EtherChannel, потому что конфигурации на каждом интерфейсе-члене"
    ]
  },
  {
    "time": [
      1097.0,
      1101.3
    ],
    "en": [
      "must match, so if you configure them all at once you can guarantee that."
    ],
    "ru": [
      "должны совпадать, поэтому, если вы настроите их все сразу, вы можете это гарантировать."
    ]
  },
  {
    "time": [
      1101.3,
      1104.96
    ],
    "en": [
      "I’ll talk more about that after I show you the configurations."
    ],
    "ru": [
      "Я расскажу об этом подробнее после того, как покажу вам конфигурации."
    ]
  },
  {
    "time": [
      1104.96,
      1111.5
    ],
    "en": [
      "Anyway, to actually configure the EtherChannel use this command, with yet another new keyword."
    ],
    "ru": [
      "В любом случае, чтобы настроить EtherChannel, используйте эту команду с еще одним новым ключевым словом."
    ]
  },
  {
    "time": [
      1111.5,
      1117.85
    ],
    "en": [
      "CHANNEL-GROUP, followed by a number that identifies the virtual interface, MODE, and then as you"
    ],
    "ru": [
      "КАНАЛ-ГРУППА, за которым следует номер, который определяет виртуальный интерфейс, РЕЖИМ, а затем как вы"
    ]
  },
  {
    "time": [
      1117.85,
      1121.72
    ],
    "en": [
      "can see I used the question mark to see what options there are."
    ],
    "ru": [
      "Как видите, я использовал вопросительный знак, чтобы посмотреть, какие есть варианты."
    ]
  },
  {
    "time": [
      1121.72,
      1130.92
    ],
    "en": [
      "There are five options, two of them are used for PAgP, two for LACP, and one for static etherchannel."
    ],
    "ru": [
      "Существует пять вариантов, два из которых используются для PAgP, два для LACP и один для статического etherchannel."
    ]
  },
  {
    "time": [
      1130.92,
      1133.78
    ],
    "en": [
      "etherchannel. These two are used for PAgP."
    ],
    "ru": [
      "etherchannel. Эти два используются для PAgP."
    ]
  },
  {
    "time": [
      1133.78,
      1137.7
    ],
    "en": [
      "Do you recognize these names from another Cisco proprietary protocol?"
    ],
    "ru": [
      "Узнаете ли вы эти имена из другого проприетарного протокола Cisco?"
    ]
  },
  {
    "time": [
      1137.7,
      1145.35
    ],
    "en": [
      "DTP used the same modes to form trunks, and the function of each mode is basically the same."
    ],
    "ru": [
      "DTP использует одни и те же режимы для формирования соединительных линий, и функции каждого режима в основном одинаковы."
    ]
  },
  {
    "time": [
      1145.35,
      1150.89
    ],
    "en": [
      "same. Desirable mode actively tries to form an EtherChannel, and auto mode will only form an EtherChannel"
    ],
    "ru": [
      "тем же. Желательный режим активно пытается сформировать EtherChannel, а автоматический режим будет формировать только EtherChannel."
    ]
  },
  {
    "time": [
      1150.89,
      1156.71
    ],
    "en": [
      "if the other side is set to desirable, but not if the other side is set to auto."
    ],
    "ru": [
      "если для другой стороны задано желаемое значение, но не, если для другой стороны установлено значение «Авто»."
    ]
  },
  {
    "time": [
      1156.71,
      1158.48
    ],
    "en": [
      "So here’s a summary."
    ],
    "ru": [
      "Итак, вот краткое изложение."
    ]
  },
  {
    "time": [
      1158.48,
      1163.38
    ],
    "en": [
      "If both sides of the connection are set to auto, no etherchannel will be formed."
    ],
    "ru": [
      "Если для обеих сторон соединения установлено значение auto, канал etherchannel не будет сформирован."
    ]
  },
  {
    "time": [
      1163.38,
      1169.39
    ],
    "en": [
      "However, auto and desirable, or desirable and desirable, will form an etherchannel."
    ],
    "ru": [
      "Однако автоматически и желательно, или желательно и желательно, образуется эфирный канал."
    ]
  },
  {
    "time": [
      1169.39,
      1173.72
    ],
    "en": [
      "Anyway, I decided to configure this side as desirable."
    ],
    "ru": [
      "Во всяком случае, я решил настроить эту сторону как угодно."
    ]
  },
  {
    "time": [
      1173.72,
      1178.0
    ],
    "en": [
      "You can see that the virtual port-channel interface was created, with the number we"
    ],
    "ru": [
      "Вы можете видеть, что виртуальный интерфейс порт-канал был создан с номером, который мы"
    ]
  },
  {
    "time": [
      1178.0,
      1180.96
    ],
    "en": [
      "used in the channel-group command."
    ],
    "ru": [
      "используется в команде группы каналов."
    ]
  },
  {
    "time": [
      1180.96,
      1186.45
    ],
    "en": [
      "You can see it here in the output of the SHOW IP INTERFACE BRIEF command, down at the bottom."
    ],
    "ru": [
      "Вы можете увидеть это здесь, в выводе команды SHOW IP INTERFACE BRIEF, внизу внизу."
    ]
  },
  {
    "time": [
      1186.45,
      1192.12
    ],
    "en": [
      "So, remember that the CHANNEL-GROUP command is used to configure the etherchannel, but"
    ],
    "ru": [
      "Итак, помните, что команда CHANNEL-GROUP используется для настройки etherchannel, но"
    ]
  },
  {
    "time": [
      1192.12,
      1196.89
    ],
    "en": [
      "the name of the virtual interface that is created is ‘port-channel’."
    ],
    "ru": [
      "имя создаваемого виртуального интерфейса - «порт-канал»."
    ]
  },
  {
    "time": [
      1196.89,
      1202.35
    ],
    "en": [
      "By the way, this channel group number has to match between interfaces on the same switch,"
    ],
    "ru": [
      "Между прочим, этот номер группы каналов должен совпадать между интерфейсами на одном коммутаторе,"
    ]
  },
  {
    "time": [
      1202.35,
      1206.87
    ],
    "en": [
      "however it DOESN’T have to match the channel-group number on the other switch."
    ],
    "ru": [
      "однако он НЕ ОБЯЗАТЕЛЬНО должен совпадать с номером группы каналов на другом переключателе."
    ]
  },
  {
    "time": [
      1206.87,
      1214.47
    ],
    "en": [
      "For example, channel-group 1 on ASW1 can form an EtherChannel with channel-group 2 on DSW1."
    ],
    "ru": [
      "Например, группа каналов 1 на ASW1 может формировать EtherChannel с группой каналов 2 на DSW1."
    ]
  },
  {
    "time": [
      1214.47,
      1220.11
    ],
    "en": [
      "The number is just used to identify the virtual interface number on the local switch."
    ],
    "ru": [
      "Номер просто используется для идентификации номера виртуального интерфейса на локальном коммутаторе."
    ]
  },
  {
    "time": [
      1220.11,
      1227.27
    ],
    "en": [
      "Because you can have multiple etherchannels on a single switch, you need the number to identify them."
    ],
    "ru": [
      "Поскольку у вас может быть несколько каналов Ethernet на одном коммутаторе, вам нужен номер для их идентификации."
    ]
  },
  {
    "time": [
      1227.27,
      1231.0
    ],
    "en": [
      "identify them. Next let’s look at LACP configuration."
    ],
    "ru": [
      "идентифицировать их. Теперь давайте посмотрим на конфигурацию LACP."
    ]
  },
  {
    "time": [
      1231.0,
      1236.11
    ],
    "en": [
      "After explaining all of that, there’s not much else to explain about LACP."
    ],
    "ru": [
      "После объяснения всего этого, больше нечего объяснять о LACP."
    ]
  },
  {
    "time": [
      1236.11,
      1239.02
    ],
    "en": [
      "Just notice that mode names are different."
    ],
    "ru": [
      "Обратите внимание, что названия режимов разные."
    ]
  },
  {
    "time": [
      1239.02,
      1243.17
    ],
    "en": [
      "Instead of desirable, LACP uses active mode."
    ],
    "ru": [
      "Вместо желаемого LACP использует активный режим."
    ]
  },
  {
    "time": [
      1243.17,
      1246.69
    ],
    "en": [
      "And instead of auto, LACP uses passive mode."
    ],
    "ru": [
      "И вместо автоматического режима LACP использует пассивный режим."
    ]
  },
  {
    "time": [
      1246.69,
      1252.13
    ],
    "en": [
      "So, if both ends are configured in passive mode an EtherChannel won’t be formed."
    ],
    "ru": [
      "Таким образом, если оба конца настроены в пассивном режиме, канал EtherChannel не будет сформирован."
    ]
  },
  {
    "time": [
      1252.13,
      1258.4
    ],
    "en": [
      "However, active and passive, or active and active, will form an EtherChannel."
    ],
    "ru": [
      "Однако активный и пассивный или активный и активный образуют EtherChannel."
    ]
  },
  {
    "time": [
      1258.4,
      1262.24
    ],
    "en": [
      "In this case, I configured this side as active."
    ],
    "ru": [
      "В данном случае я настроил эту сторону как активную."
    ]
  },
  {
    "time": [
      1262.24,
      1265.62
    ],
    "en": [
      "Once again, the port-channel interface is created."
    ],
    "ru": [
      "И снова интерфейс порт-канал создан."
    ]
  },
  {
    "time": [
      1265.62,
      1270.09
    ],
    "en": [
      "Note that, even if you configure both sides as passive, the virtual interface will still"
    ],
    "ru": [
      "Обратите внимание, что даже если вы настроите обе стороны как пассивные, виртуальный интерфейс все равно будет"
    ]
  },
  {
    "time": [
      1270.09,
      1272.29
    ],
    "en": [
      "be created on each switch."
    ],
    "ru": [
      "создаваться на каждом переключателе."
    ]
  },
  {
    "time": [
      1272.29,
      1278.16
    ],
    "en": [
      "However, it won’t actually be functioning as an EtherChannel unless one side is in active mode."
    ],
    "ru": [
      "Однако на самом деле он не будет функционировать как EtherChannel, если одна из сторон не находится в активном режиме."
    ]
  },
  {
    "time": [
      1278.16,
      1284.16
    ],
    "en": [
      "mode. So, as you can see the command is basically the same, just the mode names are different."
    ],
    "ru": [
      "режим. Итак, как вы можете видеть, команда в основном такая же, только названия режимов разные."
    ]
  },
  {
    "time": [
      1284.16,
      1288.46
    ],
    "en": [
      "Once again, the channel-group number has to match between member interfaces on the local"
    ],
    "ru": [
      "Еще раз, номер группы каналов должен совпадать между интерфейсами элементов на локальном"
    ]
  },
  {
    "time": [
      1288.46,
      1292.59
    ],
    "en": [
      "switch, but it doesn’t have to match the number on the neighbor switch."
    ],
    "ru": [
      "переключатель, но он не обязательно должен совпадать с номером на соседнем переключателе."
    ]
  },
  {
    "time": [
      1292.59,
      1297.46
    ],
    "en": [
      "Finally, let’s see how static EtherChannel is configured."
    ],
    "ru": [
      "Наконец, давайте посмотрим, как настроен статический канал EtherChannel."
    ]
  },
  {
    "time": [
      1297.46,
      1302.37
    ],
    "en": [
      "There aren’t two separate modes, just one, ‘ON’ which manually tells these interfaces"
    ],
    "ru": [
      "Нет двух отдельных режимов, только один, «ВКЛ», который вручную сообщает этим интерфейсам"
    ]
  },
  {
    "time": [
      1302.37,
      1305.05
    ],
    "en": [
      "to form an EtherChannel."
    ],
    "ru": [
      "чтобы сформировать EtherChannel."
    ]
  },
  {
    "time": [
      1305.05,
      1308.88
    ],
    "en": [
      "This will create a port-channel interface, just like before."
    ],
    "ru": [
      "Это создаст интерфейс порт-канал, как и раньше."
    ]
  },
  {
    "time": [
      1308.88,
      1312.47
    ],
    "en": [
      "By the way, on mode only works with on mode."
    ],
    "ru": [
      "Кстати, on mode работает только с on mode."
    ]
  },
  {
    "time": [
      1312.47,
      1319.83
    ],
    "en": [
      "On and desirable, or on and active will not successfully form an EtherChannel."
    ],
    "ru": [
      "Включено и желательно, или включено и активно, не приведет к успешному формированию EtherChannel."
    ]
  },
  {
    "time": [
      1319.83,
      1323.4
    ],
    "en": [
      "Another command you should know is the CHANNEL-PROTOCOL command."
    ],
    "ru": [
      "Еще одна команда, которую вы должны знать, - это команда CHANNEL-PROTOCOL."
    ]
  },
  {
    "time": [
      1323.4,
      1329.31
    ],
    "en": [
      "This manually configures the EtherChannel negotiation protocol that the member interfaces should use."
    ],
    "ru": [
      "Это вручную настраивает протокол согласования EtherChannel, который должны использовать интерфейсы-участники."
    ]
  },
  {
    "time": [
      1329.31,
      1334.79
    ],
    "en": [
      "should use. This actually isn’t a very useful command, because you don’t need to configure it."
    ],
    "ru": [
      "следует использовать. На самом деле это не очень полезная команда, потому что вам не нужно ее настраивать."
    ]
  },
  {
    "time": [
      1334.79,
      1340.13
    ],
    "en": [
      "If you configure CHANNEL-GROUP 1 MODE DESIRABLE or AUTO, the interface will automatically"
    ],
    "ru": [
      "Если вы настроили РЕЖИМ ГРУППЫ КАНАЛОВ 1 ЖЕЛАТЕЛЬНЫЙ или АВТО, интерфейс автоматически"
    ]
  },
  {
    "time": [
      1340.13,
      1349.07
    ],
    "en": [
      "use PAgP, or if you configure CHANNEL-GROUP 1 MODE ACTIVE or PASSIVE, the interface will automatically use LACP."
    ],
    "ru": [
      "используйте PAgP, или если вы сконфигурируете АКТИВНЫЙ или ПАССИВНЫЙ РЕЖИМ ГРУППЫ КАНАЛОВ 1, интерфейс автоматически будет использовать LACP."
    ]
  },
  {
    "time": [
      1349.07,
      1352.63
    ],
    "en": [
      "automatically use LACP. So, there isn’t really a point in using this command."
    ],
    "ru": [
      "автоматически использовать LACP. Так что нет смысла использовать эту команду."
    ]
  },
  {
    "time": [
      1352.63,
      1358.13
    ],
    "en": [
      "However, I think you should know it for the exam at least, so here’s a brief explanation."
    ],
    "ru": [
      "Тем не менее, я думаю, вам следует знать его хотя бы перед экзаменом, поэтому вот краткое объяснение."
    ]
  },
  {
    "time": [
      1358.13,
      1365.65
    ],
    "en": [
      "Of course there are two options, LACP and PAGP, I decided to configure LACP."
    ],
    "ru": [
      "Конечно есть два варианта, LACP и PAGP, я решил настроить LACP."
    ]
  },
  {
    "time": [
      1365.65,
      1372.16
    ],
    "en": [
      "Then I tried the CHANNEL-GROUP 1 MODE DESIRABLE command, but it was rejected because of the protocol mismatch."
    ],
    "ru": [
      "Затем я попробовал команду CHANNEL-GROUP 1 MODE DESIRABLE, но она была отклонена из-за несоответствия протокола."
    ]
  },
  {
    "time": [
      1372.16,
      1379.05
    ],
    "en": [
      "protocol mismatch. I manually configured these interfaces to use LACP, but the desirable mode is PAgP,"
    ],
    "ru": [
      "несоответствие протокола. Я вручную настроил эти интерфейсы для использования LACP, но желательным режимом является PAgP,"
    ]
  },
  {
    "time": [
      1379.05,
      1381.57
    ],
    "en": [
      "so the command was rejected."
    ],
    "ru": [
      "поэтому команда была отклонена."
    ]
  },
  {
    "time": [
      1381.57,
      1386.58
    ],
    "en": [
      "If I try CHANNEL-GROUP 1 MODE ON it is rejected as well."
    ],
    "ru": [
      "Если я попробую CHANNEL-GROUP 1 MODE ON, он также будет отклонен."
    ]
  },
  {
    "time": [
      1386.58,
      1393.45
    ],
    "en": [
      "Then I do CHANNEL-GROUP 1 MODE ACTIVE, and the command works, because active mode is LACP."
    ],
    "ru": [
      "Затем я выполняю CHANNEL-GROUP 1 MODE ACTIVE, и команда работает, потому что активным режимом является LACP."
    ]
  },
  {
    "time": [
      1393.45,
      1401.06
    ],
    "en": [
      "LACP. So, after configuring the EtherChannel, in whatever mode, PAgP, LACP, or static, you"
    ],
    "ru": [
      "LACP. Итак, после настройки EtherChannel в любом режиме, PAgP, LACP или статическом, вы"
    ]
  },
  {
    "time": [
      1401.06,
      1404.85
    ],
    "en": [
      "can then configure the port-channel interface itself."
    ],
    "ru": [
      "затем можно настроить сам интерфейс порт-канал."
    ]
  },
  {
    "time": [
      1404.85,
      1409.11
    ],
    "en": [
      "Note that I’m just using the LACP example here, since all of this information is the"
    ],
    "ru": [
      "Обратите внимание, что здесь я просто использую пример LACP, поскольку вся эта информация является"
    ]
  },
  {
    "time": [
      1409.11,
      1412.12
    ],
    "en": [
      "same regardless of which method you use."
    ],
    "ru": [
      "одинаково независимо от того, какой метод вы используете."
    ]
  },
  {
    "time": [
      1412.12,
      1418.78
    ],
    "en": [
      "I also did the same configurations over on DSW1, so the EtherChannel is up and running."
    ],
    "ru": [
      "Я также выполнил те же настройки на DSW1, поэтому EtherChannel запущен и работает."
    ]
  },
  {
    "time": [
      1418.78,
      1426.16
    ],
    "en": [
      "I entered interface config mode for the port-channel 1 interface, and then configured it as a trunk."
    ],
    "ru": [
      "Я вошел в режим конфигурации интерфейса для интерфейса порт-канал 1, а затем настроил его как магистраль."
    ]
  },
  {
    "time": [
      1426.16,
      1434.36
    ],
    "en": [
      "Now in the output of SHOW INTERFACES TRUNK, you can see port-channel 1, listed as Po1, is a trunk."
    ],
    "ru": [
      "Теперь в выводе SHOW INTERFACES TRUNK вы можете увидеть, что порт-канал 1, обозначенный как Po1, является транком."
    ]
  },
  {
    "time": [
      1434.36,
      1440.15
    ],
    "en": [
      "is a trunk. Notice that the individual physical interfaces aren’t listed here, only the port-channel interface."
    ],
    "ru": [
      "это ствол. Обратите внимание, что здесь не перечислены отдельные физические интерфейсы, а только интерфейс порт-канал."
    ]
  },
  {
    "time": [
      1440.15,
      1444.01
    ],
    "en": [
      "interface. Here’s a section of the output of SHOW RUNNING-CONFIG."
    ],
    "ru": [
      "интерфейс. Вот часть вывода SHOW RUNNING-CONFIG."
    ]
  },
  {
    "time": [
      1444.01,
      1446.929
    ],
    "en": [
      "There’s something interesting to notice here."
    ],
    "ru": [
      "Здесь есть кое-что интересное."
    ]
  },
  {
    "time": [
      1446.929,
      1451.89
    ],
    "en": [
      "The trunk configurations that I configured on the port-channel interface were also applied"
    ],
    "ru": [
      "Также были применены конфигурации магистрали, которые я настроил на интерфейсе порт-канал."
    ]
  },
  {
    "time": [
      1451.89,
      1457.75
    ],
    "en": [
      "to the physical interfaces, I didn’t manually configure the physical interfaces as trunks."
    ],
    "ru": [
      "к физическим интерфейсам, я не настраивал вручную физические интерфейсы как магистральные."
    ]
  },
  {
    "time": [
      1457.75,
      1463.22
    ],
    "en": [
      "Now, one more important point about EtherChannel configuration."
    ],
    "ru": [
      "Теперь еще один важный момент по настройке EtherChannel."
    ]
  },
  {
    "time": [
      1463.22,
      1469.69
    ],
    "en": [
      "Member interfaces, the physical interfaces in the EtherChannel, must have matching configurations."
    ],
    "ru": [
      "Интерфейсы-члены, физические интерфейсы в EtherChannel, должны иметь соответствующие конфигурации."
    ]
  },
  {
    "time": [
      1469.69,
      1471.65
    ],
    "en": [
      "What do I mean by that?"
    ],
    "ru": [
      "Что я имею в виду?"
    ]
  },
  {
    "time": [
      1471.65,
      1473.85
    ],
    "en": [
      "They must have the same duplex setting."
    ],
    "ru": [
      "У них должны быть одинаковые настройки дуплекса."
    ]
  },
  {
    "time": [
      1473.85,
      1476.84
    ],
    "en": [
      "They must have the same speed."
    ],
    "ru": [
      "У них должна быть одинаковая скорость."
    ]
  },
  {
    "time": [
      1476.84,
      1481.039
    ],
    "en": [
      "They must have the same switchport mode, meaning access or trunk."
    ],
    "ru": [
      "У них должен быть один и тот же режим switchport, то есть доступ или транк."
    ]
  },
  {
    "time": [
      1481.039,
      1485.84
    ],
    "en": [
      "If they are a trunk, they must have the same allowed VLANs and native VLANs."
    ],
    "ru": [
      "Если они являются магистралью, они должны иметь одинаковые разрешенные VLAN и собственные VLAN."
    ]
  },
  {
    "time": [
      1485.84,
      1494.1
    ],
    "en": [
      "If an individual interface’s configurations do not match the others, it will be excluded from the EtherChannel."
    ],
    "ru": [
      "Если конфигурации отдельного интерфейса не совпадают с другими, он будет исключен из EtherChannel."
    ]
  },
  {
    "time": [
      1494.1,
      1498.55
    ],
    "en": [
      "from the EtherChannel. When it comes to verifying the status of an EtherChannel using SHOW commands, the most"
    ],
    "ru": [
      "из EtherChannel. Когда дело доходит до проверки статуса EtherChannel с помощью команд SHOW, наиболее"
    ]
  },
  {
    "time": [
      1498.55,
      1502.34
    ],
    "en": [
      "useful command is SHOW ETHERCHANNEL SUMMARY."
    ],
    "ru": [
      "полезная команда SHOW ETHERCHANNEL SUMMARY."
    ]
  },
  {
    "time": [
      1502.34,
      1506.76
    ],
    "en": [
      "Down here is a list of the port-channel interfaces on the switch."
    ],
    "ru": [
      "Ниже приведен список интерфейсов порт-канал на коммутаторе."
    ]
  },
  {
    "time": [
      1506.76,
      1513.36
    ],
    "en": [
      "Next to port-channel 1 it has two flags, an upper-case S and upper-case U."
    ],
    "ru": [
      "Рядом с портом-каналом 1 у него есть два флага: заглавная буква S и заглавная буква U."
    ]
  },
  {
    "time": [
      1513.36,
      1516.87
    ],
    "en": [
      "To check the meaning of these, look at the legend up top."
    ],
    "ru": [
      "Чтобы проверить их значение, посмотрите легенду вверху."
    ]
  },
  {
    "time": [
      1516.87,
      1520.08
    ],
    "en": [
      "S means it is a Layer 2 etherchannel."
    ],
    "ru": [
      "S означает, что это эфирный канал уровня 2."
    ]
  },
  {
    "time": [
      1520.08,
      1523.42
    ],
    "en": [
      "S stands for switchport, by the way."
    ],
    "ru": [
      "Кстати, S означает switchport."
    ]
  },
  {
    "time": [
      1523.42,
      1529.03
    ],
    "en": [
      "U means in use, meaning the EtherChannel is active and being used."
    ],
    "ru": [
      "U означает используется, что означает, что канал EtherChannel активен и используется."
    ]
  },
  {
    "time": [
      1529.03,
      1532.63
    ],
    "en": [
      "Next to the physical ports there is the flag ‘P’."
    ],
    "ru": [
      "Рядом с физическими портами стоит флаг «P»."
    ]
  },
  {
    "time": [
      1532.63,
      1536.62
    ],
    "en": [
      "This means that these ports are properly bundled in the port-channel."
    ],
    "ru": [
      "Это означает, что эти порты правильно объединены в порт-канал."
    ]
  },
  {
    "time": [
      1536.62,
      1540.37
    ],
    "en": [
      "These are the flags you want to see in an operational Layer 2 EtherChannel."
    ],
    "ru": [
      "Это флаги, которые вы хотите видеть в рабочем EtherChannel 2-го уровня."
    ]
  },
  {
    "time": [
      1540.37,
      1545.79
    ],
    "en": [
      "Now, let’s take a look at a couple situations in which we will see other flags."
    ],
    "ru": [
      "Теперь давайте взглянем на пару ситуаций, в которых мы увидим другие флаги."
    ]
  },
  {
    "time": [
      1545.79,
      1549.9
    ],
    "en": [
      "So, I shutdown the port-channel 1 interface."
    ],
    "ru": [
      "Итак, я отключил интерфейс порт-канал 1."
    ]
  },
  {
    "time": [
      1549.9,
      1556.37
    ],
    "en": [
      "Now next to both the port-channel interface and the member interfaces you can see the flag ‘D’."
    ],
    "ru": [
      "Теперь рядом с интерфейсом порт-канал и интерфейсами-участниками вы можете увидеть флаг «D»."
    ]
  },
  {
    "time": [
      1556.37,
      1557.57
    ],
    "en": [
      "flag ‘D’. That means down."
    ],
    "ru": [
      "флаг «D». Это значит вниз."
    ]
  },
  {
    "time": [
      1557.57,
      1564.28
    ],
    "en": [
      "Okay, I’ll enable the interface again and show you another flag you might see."
    ],
    "ru": [
      "Хорошо, я снова включу интерфейс и покажу вам еще один флаг, который вы можете увидеть."
    ]
  },
  {
    "time": [
      1564.28,
      1568.47
    ],
    "en": [
      "Now I changed one of the member interfaces to access mode."
    ],
    "ru": [
      "Теперь я изменил один из членских интерфейсов на режим доступа."
    ]
  },
  {
    "time": [
      1568.47,
      1571.62
    ],
    "en": [
      "Now it has the lower-case ‘s’ flag."
    ],
    "ru": [
      "Теперь у него есть флаг «s» в нижнем регистре."
    ]
  },
  {
    "time": [
      1571.62,
      1575.91
    ],
    "en": [
      "Note that this is different than the upper-case S flag. It means suspended."
    ],
    "ru": [
      "Обратите внимание, что это отличается от флага S. Это значит приостановлено."
    ]
  },
  {
    "time": [
      1575.91,
      1582.98
    ],
    "en": [
      "It means suspended. So, only G0/0 is suspended, but the EtherChannel is still operating with just three interfaces,"
    ],
    "ru": [
      "Это значит приостановлено. Таким образом, приостановлен только G0 / 0, но EtherChannel по-прежнему работает только с тремя интерфейсами,"
    ]
  },
  {
    "time": [
      1582.98,
      1587.61
    ],
    "en": [
      "G0/1, 2, and 3."
    ],
    "ru": [
      "G0 / 1, 2 и 3."
    ]
  },
  {
    "time": [
      1587.61,
      1591.62
    ],
    "en": [
      "Another command you can use is SHOW ETHERCHANNEL PORT-CHANNEL."
    ],
    "ru": [
      "Еще одна команда, которую вы можете использовать, - SHOW ETHERCHANNEL PORT-CHANNEL."
    ]
  },
  {
    "time": [
      1591.62,
      1597.29
    ],
    "en": [
      "You can see the number of ports in the port-channel, which protocol is being used etc."
    ],
    "ru": [
      "Вы можете увидеть количество портов в порту-канале, какой протокол используется и т. Д."
    ]
  },
  {
    "time": [
      1597.29,
      1601.809
    ],
    "en": [
      "One important bit of information that you can’t find in SHOW ETHERCHANNEL SUMMARY"
    ],
    "ru": [
      "Одна важная информация, которую вы не можете найти в SHOW ETHERCHANNEL SUMMARY"
    ]
  },
  {
    "time": [
      1601.809,
      1607.6
    ],
    "en": [
      "but is displayed in this command is the channel-group mode, active in this case, because I used"
    ],
    "ru": [
      "но в этой команде отображается режим группы каналов, активный в данном случае, потому что я использовал"
    ]
  },
  {
    "time": [
      1607.6,
      1610.86
    ],
    "en": [
      "the CHANNEL-GROUP 1 MODE ACTIVE command earlier."
    ],
    "ru": [
      "команда CHANNEL-GROUP 1 MODE ACTIVE ранее."
    ]
  },
  {
    "time": [
      1610.86,
      1617.34
    ],
    "en": [
      "However, for EtherChannel the most common command you’re going to be using is definitely SHOW ETHERCHANNEL SUMMARY."
    ],
    "ru": [
      "Однако для EtherChannel наиболее распространенной командой, которую вы собираетесь использовать, определенно является SHOW ETHERCHANNEL SUMMARY."
    ]
  },
  {
    "time": [
      1617.34,
      1621.87
    ],
    "en": [
      "SHOW ETHERCHANNEL SUMMARY. I just wanted to show you one other option."
    ],
    "ru": [
      "ПОКАЗАТЬ ОБЗОР ETHERCHANNEL. Я просто хотел показать вам еще один вариант."
    ]
  },
  {
    "time": [
      1621.87,
      1625.669
    ],
    "en": [
      "Because I started this video talking about spanning-tree, let’s see how it is affected"
    ],
    "ru": [
      "Поскольку в начале этого видео я рассказывал о связующем дереве, давайте посмотрим, как на него повлияет"
    ]
  },
  {
    "time": [
      1625.669,
      1628.46
    ],
    "en": [
      "when EtherChannel is configured."
    ],
    "ru": [
      "когда настроен EtherChannel."
    ]
  },
  {
    "time": [
      1628.46,
      1633.28
    ],
    "en": [
      "As you can see, only the port-channel interface is listed, the physical interfaces do not"
    ],
    "ru": [
      "Как видите, в списке указан только интерфейс порт-канал, физические интерфейсы не отображаются."
    ]
  },
  {
    "time": [
      1633.28,
      1635.69
    ],
    "en": [
      "appear in the output of this command at all."
    ],
    "ru": [
      "вообще появляются в выводе этой команды."
    ]
  },
  {
    "time": [
      1635.69,
      1643.53
    ],
    "en": [
      "So, as I said earlier, spanning-tree is treating these four physical interfaces as a single logical interface."
    ],
    "ru": [
      "Итак, как я сказал ранее, связующее дерево рассматривает эти четыре физических интерфейса как единый логический интерфейс."
    ]
  },
  {
    "time": [
      1643.53,
      1647.75
    ],
    "en": [
      "logical interface. Instead of blocking three of them, they can all forward and receive traffic, with no worry"
    ],
    "ru": [
      "логический интерфейс. Вместо того, чтобы блокировать три из них, они все могут пересылать и получать трафик, не беспокоясь."
    ]
  },
  {
    "time": [
      1647.75,
      1650.94
    ],
    "en": [
      "of Layer 2 loops."
    ],
    "ru": [
      "слоя 2 петли."
    ]
  },
  {
    "time": [
      1650.94,
      1655.51
    ],
    "en": [
      "To close off this lecture, let’s take a brief look at Layer 3 EtherChannels."
    ],
    "ru": [
      "Чтобы завершить эту лекцию, давайте кратко рассмотрим каналы EtherChannels уровня 3."
    ]
  },
  {
    "time": [
      1655.51,
      1660.9
    ],
    "en": [
      "I’ve replaced ASW1 and DSW1 with multilayer switches."
    ],
    "ru": [
      "Я заменил ASW1 и DSW1 на многоуровневые переключатели."
    ]
  },
  {
    "time": [
      1660.9,
      1665.95
    ],
    "en": [
      "Instead of a Layer 2 connection between them, let’s use a Layer 3 connection."
    ],
    "ru": [
      "Вместо соединения уровня 2 между ними давайте использовать соединение уровня 3."
    ]
  },
  {
    "time": [
      1665.95,
      1670.97
    ],
    "en": [
      "Modern network design often leans toward using Layer 3 connections between switches, because"
    ],
    "ru": [
      "Современный дизайн сети часто склоняется к использованию соединений уровня 3 между коммутаторами, потому что"
    ]
  },
  {
    "time": [
      1670.97,
      1674.909
    ],
    "en": [
      "that way spanning-tree won’t be an issue anywhere in the network."
    ],
    "ru": [
      "Таким образом, связующее дерево не будет проблемой где-либо в сети."
    ]
  },
  {
    "time": [
      1674.909,
      1679.059
    ],
    "en": [
      "We could have four switches interconnected in a mesh, and if we’re connecting them"
    ],
    "ru": [
      "У нас может быть четыре переключателя, соединенных в сетку, и если мы их соединим"
    ]
  },
  {
    "time": [
      1679.059,
      1684.22
    ],
    "en": [
      "with Layer 3 routed ports, all interfaces will be up and forwarding, none will have"
    ],
    "ru": [
      "с маршрутизируемыми портами уровня 3 все интерфейсы будут активны и перенаправлены, ни у одного не будет"
    ]
  },
  {
    "time": [
      1684.22,
      1687.19
    ],
    "en": [
      "to be disabled due to spanning tree."
    ],
    "ru": [
      "быть отключенным из-за связующего дерева."
    ]
  },
  {
    "time": [
      1687.19,
      1691.169
    ],
    "en": [
      "Now you may be thinking, didn’t you just show that EtherChannel means that spanning-tree"
    ],
    "ru": [
      "Теперь вы можете подумать, разве вы не показали, что EtherChannel означает связующее дерево?"
    ]
  },
  {
    "time": [
      1691.169,
      1692.87
    ],
    "en": [
      "doesn’t have to block any ports?"
    ],
    "ru": [
      "не нужно блокировать порты?"
    ]
  },
  {
    "time": [
      1692.87,
      1697.179
    ],
    "en": [
      "Well, we’re just looking at a connection between two switches."
    ],
    "ru": [
      "Что ж, мы просто рассматриваем соединение между двумя коммутаторами."
    ]
  },
  {
    "time": [
      1697.179,
      1701.22
    ],
    "en": [
      "Even if we’re using EtherChannel, Layer 2 loops can still occur if multiple switches"
    ],
    "ru": [
      "Даже если мы используем EtherChannel, петли уровня 2 все равно могут возникать, если несколько коммутаторов"
    ]
  },
  {
    "time": [
      1701.22,
      1704.039
    ],
    "en": [
      "are connected together in a loop."
    ],
    "ru": [
      "соединены между собой в петлю."
    ]
  },
  {
    "time": [
      1704.039,
      1706.669
    ],
    "en": [
      "For example, look at this diagram."
    ],
    "ru": [
      "Например, посмотрите на эту диаграмму."
    ]
  },
  {
    "time": [
      1706.669,
      1710.89
    ],
    "en": [
      "All of the connections between switches are using EtherChannel, but if we don’t block"
    ],
    "ru": [
      "Все соединения между коммутаторами используют EtherChannel, но если мы не заблокируем"
    ]
  },
  {
    "time": [
      1710.89,
      1716.059
    ],
    "en": [
      "any of the port-channel interfaces, broadcasts can still loop around the switches like this"
    ],
    "ru": [
      "любой из интерфейсов порт-канал, широковещательные передачи могут по-прежнему проходить вокруг коммутаторов, как это"
    ]
  },
  {
    "time": [
      1716.059,
      1718.31
    ],
    "en": [
      "and cause a broadcast storm."
    ],
    "ru": [
      "и вызвать широковещательный шторм."
    ]
  },
  {
    "time": [
      1718.31,
      1722.309
    ],
    "en": [
      "So, spanning-tree will block one of these port-channel interfaces."
    ],
    "ru": [
      "Таким образом, связующее дерево заблокирует один из этих интерфейсов порт-канал."
    ]
  },
  {
    "time": [
      1722.309,
      1727.059
    ],
    "en": [
      "However, if all of these connections between switches were made using routed ports, not"
    ],
    "ru": [
      "Однако, если все эти соединения между коммутаторами были выполнены с использованием маршрутизируемых портов, не"
    ]
  },
  {
    "time": [
      1727.059,
      1732.059
    ],
    "en": [
      "Layer 2 switchports, there is no need to run spanning-tree at all."
    ],
    "ru": [
      "Коммутаторы уровня 2, нет необходимости запускать связующее дерево."
    ]
  },
  {
    "time": [
      1732.059,
      1737.96
    ],
    "en": [
      "Routed ports don’t forward Layer 2 broadcasts, so no Layer 2 loops can be formed."
    ],
    "ru": [
      "Маршрутизированные порты не пересылают широковещательные сообщения уровня 2, поэтому петли уровня 2 не могут быть сформированы."
    ]
  },
  {
    "time": [
      1737.96,
      1741.549
    ],
    "en": [
      "You already know how to configure routed ports with the NO SWITCHPORT command."
    ],
    "ru": [
      "Вы уже знаете, как настроить маршрутизируемые порты с помощью команды NO SWITCHPORT."
    ]
  },
  {
    "time": [
      1741.549,
      1745.549
    ],
    "en": [
      "Let’s see how to configure a Layer 3 EtherChannel."
    ],
    "ru": [
      "Давайте посмотрим, как настроить канал EtherChannel уровня 3."
    ]
  },
  {
    "time": [
      1745.549,
      1751.35
    ],
    "en": [
      "So, starting from a clean configuration, no port-channels have been configured yet on ASW1."
    ],
    "ru": [
      "Итак, начиная с чистой конфигурации, на ASW1 еще не настроены порты-каналы."
    ]
  },
  {
    "time": [
      1751.35,
      1757.33
    ],
    "en": [
      "ASW1. I enter interface range config mode for the member interfaces, and this time before using"
    ],
    "ru": [
      "ASW1. Я вхожу в режим настройки диапазона интерфейсов для интерфейсов-членов, и на этот раз перед использованием"
    ]
  },
  {
    "time": [
      1757.33,
      1764.2
    ],
    "en": [
      "the CHANNEL-GROUP command, I use the NO SWITCHPORT command to make them Layer 3 routed interfaces."
    ],
    "ru": [
      "команда CHANNEL-GROUP, я использую команду NO SWITCHPORT, чтобы сделать их маршрутизируемыми интерфейсами уровня 3."
    ]
  },
  {
    "time": [
      1764.2,
      1771.72
    ],
    "en": [
      "Then, after using the CHANNEL-GROUP command, I used SHOW RUNNING-CONFIG to check the config."
    ],
    "ru": [
      "Затем, после использования команды CHANNEL-GROUP, я использовал SHOW RUNNING-CONFIG, чтобы проверить конфигурацию."
    ]
  },
  {
    "time": [
      1771.72,
      1775.62
    ],
    "en": [
      "Notice that the port-channel interface that was created has the NO SWITCHPORT command"
    ],
    "ru": [
      "Обратите внимание, что созданный интерфейс порт-канал имеет команду NO SWITCHPORT."
    ]
  },
  {
    "time": [
      1775.62,
      1777.4
    ],
    "en": [
      "applied to it automatically."
    ],
    "ru": [
      "применяется к нему автоматически."
    ]
  },
  {
    "time": [
      1777.4,
      1783.0
    ],
    "en": [
      "Now, since we’re making a Layer 3 etherchannel, we need an IP address."
    ],
    "ru": [
      "Теперь, когда мы создаем etherchannel уровня 3, нам нужен IP-адрес."
    ]
  },
  {
    "time": [
      1783.0,
      1785.53
    ],
    "en": [
      "Where do you think it should be configured?"
    ],
    "ru": [
      "Как вы думаете, где это нужно настраивать?"
    ]
  },
  {
    "time": [
      1785.53,
      1788.23
    ],
    "en": [
      "It should be configured on the port-channel interface."
    ],
    "ru": [
      "Это должно быть настроено на интерфейсе порт-канал."
    ]
  },
  {
    "time": [
      1788.23,
      1789.679
    ],
    "en": [
      "So, there it is."
    ],
    "ru": [
      "Итак, вот оно."
    ]
  },
  {
    "time": [
      1789.679,
      1794.28
    ],
    "en": [
      "Now, let’s check the SHOW ETHERCHANNEL SUMMARY command once more."
    ],
    "ru": [
      "Теперь давайте еще раз проверим команду SHOW ETHERCHANNEL SUMMARY."
    ]
  },
  {
    "time": [
      1794.28,
      1799.67
    ],
    "en": [
      "So, the only difference in the output is that instead of the upper-case ‘S’ flag, it"
    ],
    "ru": [
      "Таким образом, единственная разница в выводе состоит в том, что вместо флага «S» в верхнем регистре он"
    ]
  },
  {
    "time": [
      1799.67,
      1801.47
    ],
    "en": [
      "has the ‘R’ flag."
    ],
    "ru": [
      "имеет флаг «R»."
    ]
  },
  {
    "time": [
      1801.47,
      1802.78
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
      1802.78,
      1808.73
    ],
    "en": [
      "It means it is a Layer 3 EtherChannel, R stands for routed port."
    ],
    "ru": [
      "Это означает, что это канал EtherChannel уровня 3, R означает маршрутизируемый порт."
    ]
  },
  {
    "time": [
      1808.73,
      1815.36
    ],
    "en": [
      "In the output of SHOW IP INTERFACE BRIEF, you can see the IP address configured on port-channel 1."
    ],
    "ru": [
      "В выводе SHOW IP INTERFACE BRIEF вы можете увидеть IP-адрес, настроенный для порта-канала 1."
    ]
  },
  {
    "time": [
      1815.36,
      1819.96
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
      1815.36,
      1819.96
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
      1819.96,
      1826.059
    ],
    "en": [
      "They are connected at Layer 3 and spanning-tree is not running on the connection between them."
    ],
    "ru": [
      "Они подключены на уровне 3, и связующее дерево не работает в связи между ними."
    ]
  },
  {
    "time": [
      1826.059,
      1833.409
    ],
    "en": [
      "However, just like with the Layer 2 EtherChannel, traffic will now be load-balanced over the four member interfaces."
    ],
    "ru": [
      "Однако, как и в случае с EtherChannel уровня 2, трафик теперь будет сбалансирован по нагрузке по четырем интерфейсам-участницам."
    ]
  },
  {
    "time": [
      1833.409,
      1838.309
    ],
    "en": [
      "four member interfaces. Okay let’s quickly review the commands we covered."
    ],
    "ru": [
      "четыре интерфейса-члена. Хорошо, давайте быстро рассмотрим описанные нами команды."
    ]
  },
  {
    "time": [
      1838.309,
      1843.24
    ],
    "en": [
      "First is PORT-CHANNEL LOAD-BALANCE, followed by the mode, which, depending on the switch"
    ],
    "ru": [
      "Во-первых, это PORT-CHANNEL LOAD-BALANCE, затем режим, который, в зависимости от переключателя"
    ]
  },
  {
    "time": [
      1843.24,
      1849.84
    ],
    "en": [
      "model, can involve MAC addresses, IP addresses, or Layer 4 port numbers, using either the"
    ],
    "ru": [
      "модель, может включать MAC-адреса, IP-адреса или номера портов уровня 4, используя либо"
    ]
  },
  {
    "time": [
      1849.84,
      1856.02
    ],
    "en": [
      "source, destination, or both source and destination in the calculation to determine which physical"
    ],
    "ru": [
      "источник, место назначения или оба источника и назначения в расчетах, чтобы определить, какой физический"
    ]
  },
  {
    "time": [
      1856.02,
      1860.52
    ],
    "en": [
      "interface is used to forward any specific flow of traffic."
    ],
    "ru": [
      "интерфейс используется для перенаправления любого конкретного потока трафика."
    ]
  },
  {
    "time": [
      1860.52,
      1867.64
    ],
    "en": [
      "To view the current EtherChannel load-balancing configuration, use SHOW ETHERCHANNEL LOAD-BALANCE."
    ],
    "ru": [
      "Чтобы просмотреть текущую конфигурацию балансировки нагрузки EtherChannel, используйте SHOW ETHERCHANNEL LOAD-BALANCE."
    ]
  },
  {
    "time": [
      1867.64,
      1872.22
    ],
    "en": [
      "To configure an interface to be part of an EtherChannel, use the command CHANNEL-GROUP,"
    ],
    "ru": [
      "Чтобы настроить интерфейс как часть EtherChannel, используйте команду CHANNEL-GROUP,"
    ]
  },
  {
    "time": [
      1872.22,
      1878.57
    ],
    "en": [
      "followed by the port-channel number, MODE, and then the mode, which can be DESIRABLE,"
    ],
    "ru": [
      "за которым следует номер порта-канала, РЕЖИМ, а затем режим, который может быть ЖЕЛАТЕЛЬНЫМ,"
    ]
  },
  {
    "time": [
      1878.57,
      1882.35
    ],
    "en": [
      "AUTO, ACTIVE, PASSIVE, or ON."
    ],
    "ru": [
      "АВТО, АКТИВНЫЙ, ПАССИВНЫЙ или ВКЛ."
    ]
  },
  {
    "time": [
      1882.35,
      1887.48
    ],
    "en": [
      "The most useful show command for EtherChannel is SHOW ETHERCHANNEL SUMMARY, displaying a"
    ],
    "ru": [
      "Наиболее полезной командой show для EtherChannel является SHOW ETHERCHANNEL SUMMARY, отображающая"
    ]
  },
  {
    "time": [
      1887.48,
      1892.23
    ],
    "en": [
      "summary of all of the EtherChannels on the switch and their status."
    ],
    "ru": [
      "сводка всех каналов EtherChannels на коммутаторе и их статуса."
    ]
  },
  {
    "time": [
      1892.23,
      1896.87
    ],
    "en": [
      "One more show command you can use is SHOW ETHERCHANNEL PORT-CHANNEL, which displays"
    ],
    "ru": [
      "Еще одна команда show, которую вы можете использовать, - SHOW ETHERCHANNEL PORT-CHANNEL, которая отображает"
    ]
  },
  {
    "time": [
      1896.87,
      1902.38
    ],
    "en": [
      "some more detailed information about the port-channel interfaces on the switch."
    ],
    "ru": [
      "более подробная информация об интерфейсах порт-канал на коммутаторе."
    ]
  },
  {
    "time": [
      1902.38,
      1904.67
    ],
    "en": [
      "Those are all of the commands we learned today."
    ],
    "ru": [
      "Это все команды, которые мы узнали сегодня."
    ]
  },
  {
    "time": [
      1904.67,
      1908.38
    ],
    "en": [
      "Of course, there are many more commands that can be used, but we don’t need to go any"
    ],
    "ru": [
      "Конечно, есть еще много команд, которые можно использовать, но нам не нужно"
    ]
  },
  {
    "time": [
      1908.38,
      1911.63
    ],
    "en": [
      "deeper into the concept of EtherChannels."
    ],
    "ru": [
      "глубже в концепцию EtherChannels."
    ]
  },
  {
    "time": [
      1911.63,
      1916.26
    ],
    "en": [
      "As long as you understand their basic purpose and how to set them up and verify their status,"
    ],
    "ru": [
      "Если вы понимаете их основное предназначение и то, как их настраивать и проверять их статус,"
    ]
  },
  {
    "time": [
      1916.26,
      1918.27
    ],
    "en": [
      "you should be good for the CCNA."
    ],
    "ru": [
      "вы должны хорошо относиться к CCNA."
    ]
  },
  {
    "time": [
      1918.27,
      1922.669
    ],
    "en": [
      "Okay let’s go to today’s quiz."
    ],
    "ru": [
      "Хорошо, давайте перейдем к сегодняшней викторине."
    ]
  },
  {
    "time": [
      1922.669,
      1927.679
    ],
    "en": [
      "Watch until the end of the quiz for a bonus question from Boson ExSim for CCNA, without"
    ],
    "ru": [
      "Просмотрите до конца викторины бонусный вопрос от Boson ExSim для CCNA, без"
    ]
  },
  {
    "time": [
      1927.679,
      1933.049
    ],
    "en": [
      "a doubt the best practice exams for the CCNA, and the ones I used when preparing for my"
    ],
    "ru": [
      "сомневаюсь, что лучшие практические экзамены для CCNA, и те, которые я использовал при подготовке к"
    ]
  },
  {
    "time": [
      1933.049,
      1935.419
    ],
    "en": [
      "CCNA and CCNP exams."
    ],
    "ru": [
      "Экзамены CCNA и CCNP."
    ]
  },
  {
    "time": [
      1935.419,
      1939.94
    ],
    "en": [
      "Let’s go to question 1 of the quiz."
    ],
    "ru": [
      "Перейдем к первому вопросу викторины."
    ]
  },
  {
    "time": [
      1939.94,
      1947.12
    ],
    "en": [
      "Which of the following channel-group mode combinations will result in an operational EtherChannel? EtherChannel? Choose three."
    ],
    "ru": [
      "Какая из следующих комбинаций режимов группы каналов приведет к работающему каналу EtherChannel? EtherChannel? Выберите три."
    ]
  },
  {
    "time": [
      1947.12,
      1949.419
    ],
    "en": [
      "EtherChannel? Choose three. A, on – on."
    ],
    "ru": [
      "EtherChannel? Выберите три. А, по - по."
    ]
  },
  {
    "time": [
      1949.419,
      1951.99
    ],
    "en": [
      "B, passive – passive."
    ],
    "ru": [
      "Б, пассив - пассив."
    ]
  },
  {
    "time": [
      1951.99,
      1954.45
    ],
    "en": [
      "C, desirable – auto."
    ],
    "ru": [
      "Клиент, желательно - авто."
    ]
  },
  {
    "time": [
      1954.45,
      1956.909
    ],
    "en": [
      "D, auto – auto."
    ],
    "ru": [
      "Д, авто - авто."
    ]
  },
  {
    "time": [
      1956.909,
      1959.61
    ],
    "en": [
      "E, active – desirable."
    ],
    "ru": [
      "Е, активный - желательно."
    ]
  },
  {
    "time": [
      1959.61,
      1961.85
    ],
    "en": [
      "F, on – desirable."
    ],
    "ru": [
      "F, по - желательно."
    ]
  },
  {
    "time": [
      1961.85,
      1963.99
    ],
    "en": [
      "Or G, active – active."
    ],
    "ru": [
      "Или G, active - активный."
    ]
  },
  {
    "time": [
      1963.99,
      1970.14
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
      1970.14,
      1973.44
    ],
    "en": [
      "The answers are A, C, and G."
    ],
    "ru": [
      "Ответы: A, C и G."
    ]
  },
  {
    "time": [
      1973.44,
      1982.53
    ],
    "en": [
      "A, on – on, creates a static EtherChannel, which doesn’t use PAgP or LACP to negotiate the EtherChannel."
    ],
    "ru": [
      "A, on - on, создает статический EtherChannel, который не использует PAgP или LACP для согласования EtherChannel."
    ]
  },
  {
    "time": [
      1982.53,
      1987.029
    ],
    "en": [
      "the EtherChannel. C, desirable – auto, creates an EtherChannel using PAgP."
    ],
    "ru": [
      "EtherChannel. C, желательно - auto, создает EtherChannel с помощью PAgP."
    ]
  },
  {
    "time": [
      1987.029,
      1991.13
    ],
    "en": [
      "G, active – active, creates an EtherChannel using LACP."
    ],
    "ru": [
      "G, активный - активный, создает канал EtherChannel с использованием LACP."
    ]
  },
  {
    "time": [
      1991.13,
      1995.299
    ],
    "en": [
      "So, A, C, and G are the correct answers."
    ],
    "ru": [
      "Итак, A, C и G - правильные ответы."
    ]
  },
  {
    "time": [
      1995.299,
      2001.5
    ],
    "en": [
      "B, passive - passive won’t create an etherchannel because LACP passive mode doesn’t actively"
    ],
    "ru": [
      "B, пассивный - пассивный не создает канал etherchannel, потому что пассивный режим LACP не активен."
    ]
  },
  {
    "time": [
      2001.5,
      2003.73
    ],
    "en": [
      "try to form an etherchannel."
    ],
    "ru": [
      "попробуйте сформировать etherchannel."
    ]
  },
  {
    "time": [
      2003.73,
      2008.61
    ],
    "en": [
      "Same for D, PAgP auto mode doesn’t actively try to form an EtherChannel."
    ],
    "ru": [
      "То же самое для D, автоматический режим PAgP не пытается активно формировать EtherChannel."
    ]
  },
  {
    "time": [
      2008.61,
      2015.2
    ],
    "en": [
      "E, active – desirable, and F, on – desirable, mix two different EtherChannel modes, which"
    ],
    "ru": [
      "E, active - желательно, и F, on - желательно, смешивают два разных режима EtherChannel, которые"
    ]
  },
  {
    "time": [
      2015.2,
      2018.08
    ],
    "en": [
      "won’t result in a valid EtherChannel configuration."
    ],
    "ru": [
      "не приведет к правильной конфигурации EtherChannel."
    ]
  },
  {
    "time": [
      2018.08,
      2021.83
    ],
    "en": [
      "Let’s go to question 2."
    ],
    "ru": [
      "Перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      2021.83,
      2026.84
    ],
    "en": [
      "In the output of the show etherchannel summary command, you notice that the physical interfaces"
    ],
    "ru": [
      "В выводе команды show etherchannel summary вы заметили, что физические интерфейсы"
    ]
  },
  {
    "time": [
      2026.84,
      2030.72
    ],
    "en": [
      "in the EtherChannel you configured have the flag (P) next to them."
    ],
    "ru": [
      "в настроенном вами канале EtherChannel рядом с ними стоит флажок (P)."
    ]
  },
  {
    "time": [
      2030.72,
      2032.02
    ],
    "en": [
      "What does this mean?"
    ],
    "ru": [
      "Что это значит?"
    ]
  },
  {
    "time": [
      2032.02,
      2036.23
    ],
    "en": [
      "A, the interfaces are in LACP passive mode."
    ],
    "ru": [
      "A, интерфейсы находятся в пассивном режиме LACP."
    ]
  },
  {
    "time": [
      2036.23,
      2039.9
    ],
    "en": [
      "B, the interfaces are bundled in the port-channel."
    ],
    "ru": [
      "B, интерфейсы объединены в порт-канал."
    ]
  },
  {
    "time": [
      2039.9,
      2045.57
    ],
    "en": [
      "C, the interfaces are paused until the other switch’s EtherChannel is configured."
    ],
    "ru": [
      "C, интерфейсы приостанавливаются до тех пор, пока не будет настроен канал EtherChannel другого коммутатора."
    ]
  },
  {
    "time": [
      2045.57,
      2049.32
    ],
    "en": [
      "Or D, the etherchannel is a Layer 2 EtherChannel."
    ],
    "ru": [
      "Или D, etherchannel - это EtherChannel уровня 2."
    ]
  },
  {
    "time": [
      2049.32,
      2054.7
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
      2054.7,
      2059.23
    ],
    "en": [
      "The answer is B, the interfaces are bundled in the port-channel."
    ],
    "ru": [
      "Ответ - Б, интерфейсы связаны в порт-канал."
    ]
  },
  {
    "time": [
      2059.23,
      2063.369
    ],
    "en": [
      "This is the flag you want to see next to the member interfaces of an EtherChannel."
    ],
    "ru": [
      "Это флаг, который вы хотите видеть рядом с интерфейсами-членами EtherChannel."
    ]
  },
  {
    "time": [
      2063.369,
      2067.619
    ],
    "en": [
      "Here’s some sample output of SHOW ETHERCHANNEL SUMMARY."
    ],
    "ru": [
      "Вот пример вывода SHOW ETHERCHANNEL SUMMARY."
    ]
  },
  {
    "time": [
      2067.619,
      2071.16
    ],
    "en": [
      "As you can see, P means the port is bundled in the port-channel."
    ],
    "ru": [
      "Как видите, P означает, что порт связан с портом-каналом."
    ]
  },
  {
    "time": [
      2071.16,
      2075.23
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
      2075.23,
      2082.149
    ],
    "en": [
      "Which of the following member interface parameters need to match to form an EtherChannel? Choose two."
    ],
    "ru": [
      "Какой из следующих параметров интерфейса участника должен соответствовать для формирования EtherChannel? Выбери два."
    ]
  },
  {
    "time": [
      2082.149,
      2086.929
    ],
    "en": [
      "Choose two. A, Interface ID. B, IP address."
    ],
    "ru": [
      "Выбери два. A, идентификатор интерфейса. B, IP-адрес."
    ]
  },
  {
    "time": [
      2086.929,
      2089.25
    ],
    "en": [
      "B, IP address. C, interface speed."
    ],
    "ru": [
      "B, IP-адрес. C, скорость интерфейса."
    ]
  },
  {
    "time": [
      2089.25,
      2093.149
    ],
    "en": [
      "Or D, switchport mode, access or trunk."
    ],
    "ru": [
      "Или D, режим switchport, доступ или транк."
    ]
  },
  {
    "time": [
      2093.149,
      2098.99
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
      2098.99,
      2103.46
    ],
    "en": [
      "The answers are C, interface speed, and D, switchport mode."
    ],
    "ru": [
      "Ответы: C, скорость интерфейса и D, режим коммутатора."
    ]
  },
  {
    "time": [
      2103.46,
      2108.24
    ],
    "en": [
      "These are two of the settings that have to match for interfaces to form an EtherChannel."
    ],
    "ru": [
      "Это две настройки, которые должны соответствовать интерфейсам для формирования EtherChannel."
    ]
  },
  {
    "time": [
      2108.24,
      2113.89
    ],
    "en": [
      "A, interface ID, is unique to each interface, so it cannot match."
    ],
    "ru": [
      "A, идентификатор интерфейса, уникален для каждого интерфейса, поэтому он не может совпадать."
    ]
  },
  {
    "time": [
      2113.89,
      2118.37
    ],
    "en": [
      "And even if you’re configuring a Layer 3 EtherChannel, the member interfaces won’t"
    ],
    "ru": [
      "И даже если вы настраиваете канал EtherChannel уровня 3, интерфейсы участников не будут"
    ]
  },
  {
    "time": [
      2118.37,
      2124.07
    ],
    "en": [
      "have IP addresses, the IP address must be configured on the virtual port-channel interface."
    ],
    "ru": [
      "имеют IP-адреса, IP-адрес должен быть настроен на виртуальном интерфейсе порт-канал."
    ]
  },
  {
    "time": [
      2124.07,
      2126.96
    ],
    "en": [
      "So B, IP address, is also incorrect."
    ],
    "ru": [
      "Итак, B, IP-адрес, также неверен."
    ]
  },
  {
    "time": [
      2126.96,
      2133.66
    ],
    "en": [
      "Okay, next let’s take a look at a question about EtherChannel from Boson ExSim for CCNA."
    ],
    "ru": [
      "Хорошо, теперь давайте рассмотрим вопрос о EtherChannel от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2133.66,
      2140.06
    ],
    "en": [
      "Okay, for today's Boson ExSim practice question we have a question about EtherChannel."
    ],
    "ru": [
      "Хорошо, что касается сегодняшнего практического вопроса о Boson ExSim, у нас есть вопрос о EtherChannel."
    ]
  },
  {
    "time": [
      2140.06,
      2142.76
    ],
    "en": [
      "And this is a really good question, quite challenging."
    ],
    "ru": [
      "И это действительно хороший вопрос, довольно сложный."
    ]
  },
  {
    "time": [
      2142.76,
      2144.76
    ],
    "en": [
      "So let's take a look."
    ],
    "ru": [
      "Итак, давайте посмотрим."
    ]
  },
  {
    "time": [
      2144.76,
      2149.92
    ],
    "en": [
      "You issue the following commands on SwitchA and then on SwitchB, so there are two switches."
    ],
    "ru": [
      "Вы вводите следующие команды на SwitchA, а затем на SwitchB, поэтому есть два переключателя."
    ]
  },
  {
    "time": [
      2149.92,
      2151.27
    ],
    "en": [
      "So let's see the commands."
    ],
    "ru": [
      "Итак, давайте посмотрим на команды."
    ]
  },
  {
    "time": [
      2151.27,
      2153.35
    ],
    "en": [
      "First, INTERFACE PORT-CHANNEL 1."
    ],
    "ru": [
      "Во-первых, ИНТЕРФЕЙС ПОРТ-КАНАЛ 1."
    ]
  },
  {
    "time": [
      2153.35,
      2158.7
    ],
    "en": [
      "So, this isn't necessary but it creates the port-channel in advance, before actually doing"
    ],
    "ru": [
      "Таким образом, в этом нет необходимости, но он создает порт-канал заранее, прежде чем выполнять"
    ]
  },
  {
    "time": [
      2158.7,
      2160.41
    ],
    "en": [
      "the INTERFACE RANGE command."
    ],
    "ru": [
      "команда ДИАПАЗОН ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      2160.41,
      2167.0
    ],
    "en": [
      "So this virtual port-channel exists, the interface exists, but no physical interfaces have been"
    ],
    "ru": [
      "Итак, этот виртуальный порт-канал существует, интерфейс существует, но физических интерфейсов не было."
    ]
  },
  {
    "time": [
      2167.0,
      2170.21
    ],
    "en": [
      "made members of that virtual interface."
    ],
    "ru": [
      "сделал членами этого виртуального интерфейса."
    ]
  },
  {
    "time": [
      2170.21,
      2176.81
    ],
    "en": [
      "Okay, then we enter the INTERFACE RANGE command for FastEthernet 0/5 and 6."
    ],
    "ru": [
      "Хорошо, тогда мы вводим команду INTERFACE RANGE для FastEthernet 0/5 и 6."
    ]
  },
  {
    "time": [
      2176.81,
      2182.609
    ],
    "en": [
      "We manually configure the channel protocol, the negotiation protocol, LACP in this case."
    ],
    "ru": [
      "Мы вручную настраиваем протокол канала, протокол согласования, в данном случае LACP."
    ]
  },
  {
    "time": [
      2182.609,
      2185.56
    ],
    "en": [
      "And then finally we use the CHANNEL-GROUP 1 MODE ON command."
    ],
    "ru": [
      "И, наконец, мы используем команду CHANNEL-GROUP 1 MODE ON."
    ]
  },
  {
    "time": [
      2185.56,
      2190.339
    ],
    "en": [
      "Now normally, as I showed you in this video, when you use the CHANNEL-GROUP command the"
    ],
    "ru": [
      "Обычно, как я показал вам в этом видео, когда вы используете команду CHANNEL-GROUP,"
    ]
  },
  {
    "time": [
      2190.339,
      2194.35
    ],
    "en": [
      "port-channel interface is automatically created, so this isn't always necessary."
    ],
    "ru": [
      "Интерфейс порт-канал создается автоматически, поэтому это не всегда необходимо."
    ]
  },
  {
    "time": [
      2194.35,
      2197.64
    ],
    "en": [
      "Okay, so that's SwitchA."
    ],
    "ru": [
      "Хорошо, это SwitchA."
    ]
  },
  {
    "time": [
      2197.64,
      2202.44
    ],
    "en": [
      "CHANNEL-PROTOCOL LACP, CHANNEL-GROUP 1 MODE ON. How about SwitchB?"
    ],
    "ru": [
      "КАНАЛ-ПРОТОКОЛ LACP, РЕЖИМ ГРУППЫ КАНАЛОВ 1 ВКЛ. Как насчет SwitchB?"
    ]
  },
  {
    "time": [
      2202.44,
      2206.619
    ],
    "en": [
      "How about SwitchB? Again, we create the virtual port-channel interface beforehand."
    ],
    "ru": [
      "Как насчет SwitchB? Опять же, мы заранее создаем виртуальный интерфейс порт-канал."
    ]
  },
  {
    "time": [
      2206.619,
      2213.25
    ],
    "en": [
      "Enter interface range config mode for FastEthernet0/5 and 6, this time we manually configure the"
    ],
    "ru": [
      "Войдите в режим настройки диапазона интерфейса для FastEthernet0 / 5 и 6, на этот раз мы вручную настроим"
    ]
  },
  {
    "time": [
      2213.25,
      2218.42
    ],
    "en": [
      "protocol as PAgP, before once again doing CHANNEL-GROUP 1 MODE ON."
    ],
    "ru": [
      "протокол как PAgP, прежде чем снова включить РЕЖИМ ГРУППЫ КАНАЛОВ 1."
    ]
  },
  {
    "time": [
      2218.42,
      2224.97
    ],
    "en": [
      "So, which of the following statements is true about the resulting EtherChannel link between SwitchA and SwitchB?"
    ],
    "ru": [
      "Итак, какое из следующих утверждений относительно результирующего канала EtherChannel между SwitchA и SwitchB верно?"
    ]
  },
  {
    "time": [
      2224.97,
      2226.42
    ],
    "en": [
      "SwitchA and SwitchB? Select the best answer."
    ],
    "ru": [
      "SwitchA и SwitchB? Выберите лучший ответ."
    ]
  },
  {
    "time": [
      2226.42,
      2232.39
    ],
    "en": [
      "A, a link is formed using LACP because it was configured first and has priority."
    ],
    "ru": [
      "A, ссылка формируется с использованием LACP, потому что она была настроена первой и имеет приоритет."
    ]
  },
  {
    "time": [
      2232.39,
      2235.98
    ],
    "en": [
      "As you can see here, LACP was configured first."
    ],
    "ru": [
      "Как вы можете видеть здесь, LACP был настроен первым."
    ]
  },
  {
    "time": [
      2235.98,
      2238.68
    ],
    "en": [
      "B, no link is formed."
    ],
    "ru": [
      "B, ссылка не формируется."
    ]
  },
  {
    "time": [
      2238.68,
      2244.4
    ],
    "en": [
      "Okay, C, a link is formed using PAgP because it was configured last and has priority."
    ],
    "ru": [
      "Хорошо, C, ссылка сформирована с использованием PAgP, потому что она была настроена последней и имеет приоритет."
    ]
  },
  {
    "time": [
      2244.4,
      2248.05
    ],
    "en": [
      "So, it was configured here on SwitchB."
    ],
    "ru": [
      "Итак, он был настроен здесь, на SwitchB."
    ]
  },
  {
    "time": [
      2248.05,
      2251.8
    ],
    "en": [
      "And then D, a link is formed without an aggregation protocol."
    ],
    "ru": [
      "И затем D, ссылка формируется без протокола агрегации."
    ]
  },
  {
    "time": [
      2251.8,
      2256.45
    ],
    "en": [
      "So you see both of these switches used the command CHANNEL-GROUP 1 MODE ON."
    ],
    "ru": [
      "Итак, вы видите, что оба этих переключателя использовали команду CHANNEL-GROUP 1 MODE ON."
    ]
  },
  {
    "time": [
      2256.45,
      2260.6
    ],
    "en": [
      "This configure static protocol (*EtherChannel), without an aggregation protocol."
    ],
    "ru": [
      "Это настраивает статический протокол (* EtherChannel) без протокола агрегации."
    ]
  },
  {
    "time": [
      2260.6,
      2263.08
    ],
    "en": [
      "So, what do you think is the answer?"
    ],
    "ru": [
      "Как вы думаете, что это за ответ?"
    ]
  },
  {
    "time": [
      2263.08,
      2268.64
    ],
    "en": [
      "Pause the video here to think about it."
    ],
    "ru": [
      "Остановите видео здесь, чтобы подумать над этим."
    ]
  },
  {
    "time": [
      2268.64,
      2270.52
    ],
    "en": [
      "Okay, hopefully you got the answer."
    ],
    "ru": [
      "Хорошо, надеюсь, вы получили ответ."
    ]
  },
  {
    "time": [
      2270.52,
      2274.04
    ],
    "en": [
      "I think the correct answer is B, no link is formed."
    ],
    "ru": [
      "Думаю правильный ответ Б, ссылка не формируется."
    ]
  },
  {
    "time": [
      2274.04,
      2275.98
    ],
    "en": [
      "Now, why is that?"
    ],
    "ru": [
      "Итак, почему это так?"
    ]
  },
  {
    "time": [
      2275.98,
      2278.66
    ],
    "en": [
      "So, first you create the port-channel interface."
    ],
    "ru": [
      "Итак, сначала вы создаете интерфейс порт-канал."
    ]
  },
  {
    "time": [
      2278.66,
      2282.65
    ],
    "en": [
      "So it does exist, the virtual interface."
    ],
    "ru": [
      "Итак, виртуальный интерфейс существует."
    ]
  },
  {
    "time": [
      2282.65,
      2288.0
    ],
    "en": [
      "Then you manually configure the channel protocol on the physical interfaces."
    ],
    "ru": [
      "Затем вы вручную настраиваете протокол канала на физических интерфейсах."
    ]
  },
  {
    "time": [
      2288.0,
      2292.58
    ],
    "en": [
      "But when you use the command CHANNEL-GROUP 1 MODE ON to tell these physical interfaces"
    ],
    "ru": [
      "Но когда вы используете команду CHANNEL-GROUP 1 MODE ON, чтобы сообщить этим физическим интерфейсам"
    ]
  },
  {
    "time": [
      2292.58,
      2298.869
    ],
    "en": [
      "to join this port-channel interface, to join the EtherChannel, this command will be rejected."
    ],
    "ru": [
      "чтобы присоединиться к этому интерфейсу порт-канал, чтобы присоединиться к EtherChannel, эта команда будет отклонена."
    ]
  },
  {
    "time": [
      2298.869,
      2301.33
    ],
    "en": [
      "The CHANNEL-GROUP 1 MODE ON command."
    ],
    "ru": [
      "Команда CHANNEL-GROUP 1 MODE ON."
    ]
  },
  {
    "time": [
      2301.33,
      2307.43
    ],
    "en": [
      "Because we already manually configured LACP, so the only modes you can actually configure"
    ],
    "ru": [
      "Поскольку мы уже настроили LACP вручную, поэтому единственные режимы, которые вы можете настроить"
    ]
  },
  {
    "time": [
      2307.43,
      2309.79
    ],
    "en": [
      "are ACTIVE and PASSIVE."
    ],
    "ru": [
      "являются АКТИВНЫМИ и ПАССИВНЫМИ."
    ]
  },
  {
    "time": [
      2309.79,
      2313.49
    ],
    "en": [
      "MODE ON will not work, the command will be rejected."
    ],
    "ru": [
      "MODE ON не будет работать, команда будет отклонена."
    ]
  },
  {
    "time": [
      2313.49,
      2314.78
    ],
    "en": [
      "And then same thing on SwitchB."
    ],
    "ru": [
      "И то же самое на SwitchB."
    ]
  },
  {
    "time": [
      2314.78,
      2318.53
    ],
    "en": [
      "This time instead of LACP it's PAgP."
    ],
    "ru": [
      "На этот раз вместо LACP это PAgP."
    ]
  },
  {
    "time": [
      2318.53,
      2323.58
    ],
    "en": [
      "So you manually configured the channel-protocol PAgP, so even though this port-channel interface"
    ],
    "ru": [
      "Итак, вы вручную настроили канал-протокол PAgP, поэтому даже если этот интерфейс порт-канал"
    ]
  },
  {
    "time": [
      2323.58,
      2330.91
    ],
    "en": [
      "exists, these interfaces won't actually join it because the CHANNEL-GROUP 1 MODE ON command will be rejected."
    ],
    "ru": [
      "существует, эти интерфейсы фактически не присоединятся к нему, потому что команда CHANNEL-GROUP 1 MODE ON будет отклонена."
    ]
  },
  {
    "time": [
      2330.91,
      2335.46
    ],
    "en": [
      "will be rejected. So, I think B is the correct answer. Let's check."
    ],
    "ru": [
      "будут отклонены. Итак, я думаю, что B - правильный ответ. Давайте проверим."
    ]
  },
  {
    "time": [
      2335.46,
      2336.9
    ],
    "en": [
      "Let's check. And indeed it is."
    ],
    "ru": [
      "Давайте проверим. И это действительно так."
    ]
  },
  {
    "time": [
      2336.9,
      2342.18
    ],
    "en": [
      "So here is Boson's explanation, quite a lengthy, in-detail explanation."
    ],
    "ru": [
      "Итак, вот объяснение Бозона, довольно длинное и подробное объяснение."
    ]
  },
  {
    "time": [
      2342.18,
      2345.89
    ],
    "en": [
      "And this is something really great about ExSim."
    ],
    "ru": [
      "И это что-то действительно замечательное в ExSim."
    ]
  },
  {
    "time": [
      2345.89,
      2352.38
    ],
    "en": [
      "If you're ever unsure about why B is correct, or why A, C, and D are incorrect, we've got"
    ],
    "ru": [
      "Если вы когда-нибудь не уверены, почему B правильный, или почему A, C и D неверны, у нас есть"
    ]
  },
  {
    "time": [
      2352.38,
      2357.9
    ],
    "en": [
      "all of these great, in-detail explanations helping you out."
    ],
    "ru": [
      "все эти замечательные подробные объяснения помогут вам."
    ]
  },
  {
    "time": [
      2357.9,
      2360.48
    ],
    "en": [
      "And then finally, at the end there are references."
    ],
    "ru": [
      "И наконец, в конце есть ссылки."
    ]
  },
  {
    "time": [
      2360.48,
      2366.839
    ],
    "en": [
      "This is to the official cert guide, EtherChannel is covered in Volume 1, Chapter 10."
    ],
    "ru": [
      "Это официальное руководство по сертификации, EtherChannel рассматривается в томе 1, главе 10."
    ]
  },
  {
    "time": [
      2366.839,
      2372.58
    ],
    "en": [
      "And then also two links to Cisco documentation, which is freely available online and is also"
    ],
    "ru": [
      "А также две ссылки на документацию Cisco, которая находится в свободном доступе в Интернете, а также"
    ]
  },
  {
    "time": [
      2372.58,
      2374.95
    ],
    "en": [
      "a great study resource."
    ],
    "ru": [
      "отличный учебный ресурс."
    ]
  },
  {
    "time": [
      2374.95,
      2377.99
    ],
    "en": [
      "Okay, so that's today's Boson ExSim practice question."
    ],
    "ru": [
      "Хорошо, это сегодняшний практический вопрос по Boson ExSim."
    ]
  },
  {
    "time": [
      2377.99,
      2382.839
    ],
    "en": [
      "If you want to get a copy of Boson ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить копию Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2382.839,
      2384.9
    ],
    "en": [
      "I really like these practice exams."
    ],
    "ru": [
      "Мне очень нравятся эти практические экзамены."
    ]
  },
  {
    "time": [
      2384.9,
      2390.95
    ],
    "en": [
      "I used them myself for my CCNA and CCNP, so I really feel confident about recommending them to you."
    ],
    "ru": [
      "Я сам использовал их для своих CCNA и CCNP, поэтому я действительно уверен, что рекомендую их вам."
    ]
  },
  {
    "time": [
      2390.95,
      2397.77
    ],
    "en": [
      "them to you. So once again, follow the link in the video description to get a copy of Boson ExSim."
    ],
    "ru": [
      "их вам. Итак, еще раз перейдите по ссылке в описании видео, чтобы получить копию Boson ExSim."
    ]
  },
  {
    "time": [
      2397.77,
      2400.599
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
      2400.599,
      2404.48
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
      2404.48,
      2409.24
    ],
    "en": [
      "There will also be a packet tracer practice lab so you can get some hands-on practice."
    ],
    "ru": [
      "Там также будет практическая лаборатория по отслеживанию пакетов, где вы сможете получить практическую практику."
    ]
  },
  {
    "time": [
      2409.24,
      2411.69
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
      2411.69,
      2415.48
    ],
    "en": [
      "Sign up for my mailing list via the link in the description, and I’ll send you all of"
    ],
    "ru": [
      "Подпишитесь на мою рассылку по ссылке в описании, и я пришлю вам все"
    ]
  },
  {
    "time": [
      2415.48,
      2420.829
    ],
    "en": [
      "the flashcards and packet tracer lab files for the course."
    ],
    "ru": [
      "дидактические карточки и файлы лаборатории трассировщика пакетов для курса."
    ]
  },
  {
    "time": [
      2420.829,
      2425.9
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
      2425.9,
      2431.18
    ],
    "en": [
      "Thank you to funnydart, Joshua, Scott, Aleksa, Hassan, Gerrard, Tibi, Vikram, Joyce, Marek,"
    ],
    "ru": [
      "Спасибо funnydart, Джошуа, Скотту, Алексе, Хасану, Джеррарду, Тиби, Викраму, Джойсу, Мареку,"
    ]
  },
  {
    "time": [
      2431.18,
      2438.71
    ],
    "en": [
      "Samil, Velvijaykum, C Mohd, Johan, Mark, Miguel, Yousif, Kone, Boson Software, the creators"
    ],
    "ru": [
      "Самил, Велвиджайкум, Си Мохд, Йохан, Марк, Мигель, Юсиф, Коне, Boson Software, создатели"
    ]
  },
  {
    "time": [
      2438.71,
      2445.25
    ],
    "en": [
      "of ExSim, Sidi, Magrathea, Devin, Charlsetta, Lito, Yonatan, Mike, Aleksander, and Vance."
    ],
    "ru": [
      "из ExSim, Сиди, Магратеи, Девина, Шарлсетты, Лито, Йонатана, Майка, Александра и Вэнса."
    ]
  },
  {
    "time": [
      2445.25,
      2450.0
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
      2450.0,
      2455.9
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
      2455.9,
      2459.07
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
      2459.07,
      2464.65
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, June 6th"
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 6 июня."
    ]
  },
  {
    "time": [
      2464.65,
      2471.8
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
      2464.65,
      2471.8
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
      2471.8,
      2472.88
    ],
    "en": [
      "in future videos. Thank you for watching."
    ],
    "ru": [
      "со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      2472.88,
      2477.36
    ],
    "en": [
      "Please subscribe to the channel, like the video, leave a comment, and share the video"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в описании."
    ]
  },
  {
    "time": [
      2477.36,
      2480.63
    ],
    "en": [
      "with anyone else studying for the CCNA."
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через браузер Brave."
    ]
  },
  {
    "time": [
      2480.63,
      2483.32
    ],
    "en": [
      "If you want to leave a tip, check the links in the description."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  },
  {
    "time": [
      2483.32,
      2490.91
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the Brave browser."
    ],
    "ru": [
      ""
    ]
  },
  {
    "time": [
      2490.91,
      2490.91
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      ""
    ]
  }
]