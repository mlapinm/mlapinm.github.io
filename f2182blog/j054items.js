let items = [
  {
    "time": [
      0.849,
      3.3
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
      3.3,
      6.569
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
      6.569,
      10.43
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
      10.43,
      16.03
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
      16.03,
      18.58
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
      18.58,
      25.289
    ],
    "en": [
      "In this video we will cover all you need to know about ‘first hop redundancy protocols’, or FHRPs."
    ],
    "ru": [
      "В этом видео мы расскажем все, что вам нужно знать о «протоколах резервирования первого перехода», или FHRP."
    ]
  },
  {
    "time": [
      25.289,
      30.0
    ],
    "en": [
      "or FHRPs. This isn’t the name of a specific protocol, it’s a type of protocol, and there are three"
    ],
    "ru": [
      "или FHRP. Это не название конкретного протокола, это тип протокола, и есть три"
    ]
  },
  {
    "time": [
      30.0,
      33.53
    ],
    "en": [
      "FHRPs you should be aware of for the CCNA."
    ],
    "ru": [
      "FHRP, о которых вы должны знать для CCNA."
    ]
  },
  {
    "time": [
      33.53,
      36.8
    ],
    "en": [
      "Let’s check the exam topics list."
    ],
    "ru": [
      "Давайте проверим список тем экзамена."
    ]
  },
  {
    "time": [
      36.8,
      42.64
    ],
    "en": [
      "Here it is, topic 3.5, ‘describe the purpose of first hop redundancy protocol’, I think"
    ],
    "ru": [
      "Вот она, тема 3.5, «опишите цель протокола резервирования первого перехода», я думаю"
    ]
  },
  {
    "time": [
      42.64,
      45.35
    ],
    "en": [
      "there should be an ‘s’ on the end there."
    ],
    "ru": [
      "там на конце должна быть буква \"s\"."
    ]
  },
  {
    "time": [
      45.35,
      48.92
    ],
    "en": [
      "There is no mention of configuration, so you don’t need to worry about about configuring"
    ],
    "ru": [
      "Здесь нет упоминания о конфигурации, поэтому вам не нужно беспокоиться о настройке"
    ]
  },
  {
    "time": [
      48.92,
      51.42
    ],
    "en": [
      "any of the FHRPs for the exam."
    ],
    "ru": [
      "любой из FHRP для экзамена."
    ]
  },
  {
    "time": [
      51.42,
      56.699
    ],
    "en": [
      "However, in this video I will show you basic configurations for one of the FHRPs, so you"
    ],
    "ru": [
      "Однако в этом видео я покажу вам основные конфигурации для одного из FHRP, так что вы"
    ]
  },
  {
    "time": [
      56.699,
      59.799
    ],
    "en": [
      "can try it out in the next lab video."
    ],
    "ru": [
      "можете попробовать это в следующем лабораторном видео."
    ]
  },
  {
    "time": [
      59.799,
      64.61
    ],
    "en": [
      "Even if you don’t need to know the configurations for the exam, getting a little hands-on practice"
    ],
    "ru": [
      "Даже если вам не нужно знать конфигурации для экзамена, можно немного попрактиковаться"
    ]
  },
  {
    "time": [
      64.61,
      68.1
    ],
    "en": [
      "will help you understand how these FHRPs work."
    ],
    "ru": [
      "поможет вам понять, как работают эти FHRP."
    ]
  },
  {
    "time": [
      68.1,
      71.049
    ],
    "en": [
      "Here’s what we’ll cover in today’s video."
    ],
    "ru": [
      "Вот что мы расскажем в сегодняшнем видео."
    ]
  },
  {
    "time": [
      71.049,
      76.38
    ],
    "en": [
      "First up, I’ll introduce the purpose of first hop redundancy protocols."
    ],
    "ru": [
      "Сначала я расскажу о назначении протоколов резервирования на первом этапе."
    ]
  },
  {
    "time": [
      76.38,
      79.36
    ],
    "en": [
      "Then I’ll introduce three different FHRPs."
    ],
    "ru": [
      "Затем я представлю три разных FHRP."
    ]
  },
  {
    "time": [
      79.36,
      83.53999999999999
    ],
    "en": [
      "HSRP, hot standby router protocol."
    ],
    "ru": [
      "HSRP, протокол маршрутизатора горячего резервирования."
    ]
  },
  {
    "time": [
      83.53999999999999,
      87.31
    ],
    "en": [
      "VRRP, virtual router redundancy protocol."
    ],
    "ru": [
      "VRRP, протокол резервирования виртуального маршрутизатора."
    ]
  },
  {
    "time": [
      87.31,
      91.34
    ],
    "en": [
      "And GLBP, gateway load balancing protocol."
    ],
    "ru": [
      "И GLBP, протокол балансировки нагрузки шлюза."
    ]
  },
  {
    "time": [
      91.34,
      95.729
    ],
    "en": [
      "It may seem like a lot to learn about three different protocols in one video, but you"
    ],
    "ru": [
      "Может показаться многословным узнать о трех разных протоколах в одном видео, но вы"
    ]
  },
  {
    "time": [
      95.729,
      101.85
    ],
    "en": [
      "just need to be able to make basic comparisons of each, you don’t need to know them in-depth."
    ],
    "ru": [
      "просто нужно уметь проводить базовые сравнения каждого из них, вам не нужно знать их всесторонне."
    ]
  },
  {
    "time": [
      101.85,
      107.799
    ],
    "en": [
      "Finally we’ll spend a few minutes learning some basic configurations of HSRP, hot standby router protocol."
    ],
    "ru": [
      "Наконец, мы потратим несколько минут на изучение некоторых базовых конфигураций HSRP, протокола маршрутизатора горячего резервирования."
    ]
  },
  {
    "time": [
      107.799,
      112.65899999999999
    ],
    "en": [
      "router protocol. After the quiz at the end of the video I will feature a bonus question from Boson ExSim"
    ],
    "ru": [
      "протокол маршрутизатора. После викторины в конце видео я дам бонусный вопрос от Boson ExSim."
    ]
  },
  {
    "time": [
      112.65899999999999,
      117.32900000000001
    ],
    "en": [
      "for CCNA, a set of practice exams for the CCNA."
    ],
    "ru": [
      "для CCNA, набор практических экзаменов для CCNA."
    ]
  },
  {
    "time": [
      117.32900000000001,
      123.219
    ],
    "en": [
      "I studied using ExSim when preparing for both my CCNA and CCNP exams, and I highly recommend"
    ],
    "ru": [
      "Я учился с помощью ExSim при подготовке к экзаменам CCNA и CCNP, и я очень рекомендую"
    ]
  },
  {
    "time": [
      123.219,
      125.13
    ],
    "en": [
      "that you do too."
    ],
    "ru": [
      "что вы тоже делаете."
    ]
  },
  {
    "time": [
      125.13,
      128.06
    ],
    "en": [
      "To get ExSim, follow the link in the video description."
    ],
    "ru": [
      "Чтобы получить ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      128.06,
      131.73
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
      131.73,
      136.99
    ],
    "en": [
      "I used this same diagram back in Day 20 when talking about spanning tree protocol, to demonstrate"
    ],
    "ru": [
      "Я использовал ту же диаграмму еще в день 20, когда говорил о протоколе связующего дерева, чтобы продемонстрировать"
    ]
  },
  {
    "time": [
      136.99,
      141.38
    ],
    "en": [
      "the concept and importance of redundancy in networks."
    ],
    "ru": [
      "понятие и важность резервирования в сетях."
    ]
  },
  {
    "time": [
      141.38,
      145.85
    ],
    "en": [
      "For example, if there is only one connection to the Internet and it fails due to a hardware"
    ],
    "ru": [
      "Например, если есть только одно подключение к Интернету, и оно не работает из-за аппаратного обеспечения."
    ]
  },
  {
    "time": [
      145.85,
      151.19
    ],
    "en": [
      "failure or something else, these PCs will no longer be able to reach the Internet."
    ],
    "ru": [
      "сбой или что-то еще, эти ПК больше не смогут подключиться к Интернету."
    ]
  },
  {
    "time": [
      151.19,
      157.61
    ],
    "en": [
      "In your home, losing Internet access for some time would be frustrating, but probably not a disaster."
    ],
    "ru": [
      "В вашем доме потеря доступа к Интернету на какое-то время будет неприятно, но, вероятно, не станет катастрофой."
    ]
  },
  {
    "time": [
      157.61,
      161.35
    ],
    "en": [
      "a disaster. For most modern businesses, however, it would be a big problem."
    ],
    "ru": [
      "катастрофа. Однако для большинства современных предприятий это было бы большой проблемой."
    ]
  },
  {
    "time": [
      161.35,
      165.77
    ],
    "en": [
      "So, we can use redundant connections to the Internet like this."
    ],
    "ru": [
      "Итак, мы можем использовать такие избыточные подключения к Интернету."
    ]
  },
  {
    "time": [
      165.77,
      171.79
    ],
    "en": [
      "Notice I’ve added some device names and IP addresses in the 172.16.0.0/24 network"
    ],
    "ru": [
      "Обратите внимание, я добавил несколько имен устройств и IP-адресов в сети 172.16.0.0/24."
    ]
  },
  {
    "time": [
      171.79,
      174.71
    ],
    "en": [
      "to make things easier to talk about."
    ],
    "ru": [
      "чтобы было легче говорить о вещах."
    ]
  },
  {
    "time": [
      174.71,
      179.89
    ],
    "en": [
      "Now if this connection fails PC1 can use this alternate path to the Internet."
    ],
    "ru": [
      "Теперь, если это соединение не удается, ПК1 может использовать этот альтернативный путь к Интернету."
    ]
  },
  {
    "time": [
      179.89,
      186.75
    ],
    "en": [
      "This could be, for example, a slower and cheaper connection that is only used until the main connection is recovered."
    ],
    "ru": [
      "Это может быть, например, более медленное и дешевое соединение, которое используется только до восстановления основного соединения."
    ]
  },
  {
    "time": [
      186.75,
      190.73
    ],
    "en": [
      "connection is recovered. But let’s stop and think about this, because it’s not so simple."
    ],
    "ru": [
      "соединение восстанавливается. Но давайте остановимся и подумаем об этом, потому что это не так просто."
    ]
  },
  {
    "time": [
      190.73,
      198.94
    ],
    "en": [
      "In this network, let’s say R1’s IP address 172.16.0.254 is configured as the default gateway."
    ],
    "ru": [
      "В этой сети, скажем, IP-адрес маршрутизатора R1 172.16.0.254 настроен как шлюз по умолчанию."
    ]
  },
  {
    "time": [
      198.94,
      205.87
    ],
    "en": [
      "gateway. So that means each PC is configured with the 172.16.0.254 address as its default gateway."
    ],
    "ru": [
      "шлюз. Это означает, что каждый компьютер настроен с адресом 172.16.0.254 в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      205.87,
      211.04
    ],
    "en": [
      "So, anytime these PCs need to send traffic outside of the local subnet, they will send"
    ],
    "ru": [
      "Таким образом, каждый раз, когда этим компьютерам требуется отправить трафик за пределы локальной подсети, они будут отправлять"
    ]
  },
  {
    "time": [
      211.04,
      213.93
    ],
    "en": [
      "it to the default gateway, R1."
    ],
    "ru": [
      "его на шлюз по умолчанию, R1."
    ]
  },
  {
    "time": [
      213.93,
      218.82
    ],
    "en": [
      "But what happens if R1 goes down for some reason, perhaps a hardware failure?"
    ],
    "ru": [
      "Но что произойдет, если R1 выйдет из строя по какой-либо причине, возможно, из-за аппаратного сбоя?"
    ]
  },
  {
    "time": [
      218.82,
      223.879
    ],
    "en": [
      "Fortunately, there is a backup router connected to the Internet, R2."
    ],
    "ru": [
      "К счастью, есть резервный маршрутизатор R2, подключенный к Интернету."
    ]
  },
  {
    "time": [
      223.879,
      225.28
    ],
    "en": [
      "But there’s a problem here."
    ],
    "ru": [
      "Но здесь есть проблема."
    ]
  },
  {
    "time": [
      225.28,
      227.59
    ],
    "en": [
      "Can you identify the problem?"
    ],
    "ru": [
      "Вы можете определить проблему?"
    ]
  },
  {
    "time": [
      227.59,
      231.35
    ],
    "en": [
      "Pause the video and think about it for a minute."
    ],
    "ru": [
      "Поставьте видео на паузу и подумайте минуту."
    ]
  },
  {
    "time": [
      231.35,
      234.43
    ],
    "en": [
      "Okay, the problem is here."
    ],
    "ru": [
      "Хорошо, проблема здесь."
    ]
  },
  {
    "time": [
      234.43,
      239.53
    ],
    "en": [
      "The PCs’ default gateway is still set to .254, R1’s address."
    ],
    "ru": [
      "Шлюз по умолчанию для ПК по-прежнему установлен на 0,254, адрес R1."
    ]
  },
  {
    "time": [
      239.53,
      244.38
    ],
    "en": [
      "Although R2 is available as a backup, the PCs don’t know that R1 is down and that"
    ],
    "ru": [
      "Хотя R2 доступен в качестве резервной копии, компьютеры не знают, что R1 не работает и что"
    ]
  },
  {
    "time": [
      244.38,
      248.24
    ],
    "en": [
      "they should switch to using R2 as their default gateway."
    ],
    "ru": [
      "им следует переключиться на использование R2 в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      248.24,
      253.73
    ],
    "en": [
      "If a PC needs to send traffic over the Internet, it will continue to try to send the traffic to R1."
    ],
    "ru": [
      "Если ПК необходимо отправить трафик через Интернет, он продолжит попытки отправить трафик на R1."
    ]
  },
  {
    "time": [
      253.73,
      260.54
    ],
    "en": [
      "to R1. So, how can we cause R2 to automatically become the new default gateway if R1 can no longer be used?"
    ],
    "ru": [
      "к R1. Итак, как мы можем заставить R2 автоматически стать новым шлюзом по умолчанию, если R1 больше не может использоваться?"
    ]
  },
  {
    "time": [
      260.54,
      265.68
    ],
    "en": [
      "be used? That’s the role of a first-hop redundancy protocol, an FHRP."
    ],
    "ru": [
      "использоваться? В этом роль протокола резервирования первого перехода, FHRP."
    ]
  },
  {
    "time": [
      265.68,
      269.79
    ],
    "en": [
      "Here’s a brief explanation of FHRPs from Wikipedia."
    ],
    "ru": [
      "Вот краткое объяснение FHRP из Википедии."
    ]
  },
  {
    "time": [
      269.79,
      275.76
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
      269.79,
      275.76
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
      275.76,
      280.98
    ],
    "en": [
      "designed to protect the default gateway used on a subnetwork by allowing two or more routers"
    ],
    "ru": [
      "предназначен для защиты шлюза по умолчанию, используемого в подсети, позволяя двум или более маршрутизаторам"
    ]
  },
  {
    "time": [
      280.98,
      286.71
    ],
    "en": [
      "to provide backup for that address; in the event of failure of an active router, the"
    ],
    "ru": [
      "чтобы обеспечить резервную копию этого адреса; в случае выхода из строя активного роутера"
    ]
  },
  {
    "time": [
      286.71,
      291.72
    ],
    "en": [
      "backup router will take over the address, usually within a few seconds.’"
    ],
    "ru": [
      "резервный маршрутизатор захватит адрес, обычно в течение нескольких секунд »."
    ]
  },
  {
    "time": [
      291.72,
      295.87
    ],
    "en": [
      "The name ‘first-hop’ redundancy protocol is used because the default gateway is the"
    ],
    "ru": [
      "Название протокола резервирования «first-hop» используется, потому что шлюз по умолчанию"
    ]
  },
  {
    "time": [
      295.87,
      301.97
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
      295.87,
      301.97
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
      301.97,
      305.27
    ],
    "en": [
      "traffic to. Here’s how FHRPs do this."
    ],
    "ru": [
      "трафик в. Вот как это делают FHRP."
    ]
  },
  {
    "time": [
      305.27,
      313.59
    ],
    "en": [
      "The two routers share a VIP, a virtual IP address, for example 172.16.0.252."
    ],
    "ru": [
      "Два маршрутизатора имеют общий виртуальный IP-адрес VIP, например 172.16.0.252."
    ]
  },
  {
    "time": [
      313.59,
      318.25
    ],
    "en": [
      "You configure the PCs in the network to use that virtual IP as their default gateway,"
    ],
    "ru": [
      "Вы настраиваете ПК в сети на использование этого виртуального IP-адреса в качестве шлюза по умолчанию,"
    ]
  },
  {
    "time": [
      318.25,
      320.9
    ],
    "en": [
      "instead of the actual IP address of R1."
    ],
    "ru": [
      "вместо фактического IP-адреса R1."
    ]
  },
  {
    "time": [
      320.9,
      324.93
    ],
    "en": [
      "Now, the routers have to negotiate their roles with each other."
    ],
    "ru": [
      "Теперь маршрутизаторы должны согласовать свои роли друг с другом."
    ]
  },
  {
    "time": [
      324.93,
      326.25
    ],
    "en": [
      "How do they do that?"
    ],
    "ru": [
      "Как они это делают?"
    ]
  },
  {
    "time": [
      326.25,
      331.17
    ],
    "en": [
      "They send multicast ‘Hello’ messages to each other, like this."
    ],
    "ru": [
      "Они отправляют друг другу многоадресные сообщения «Hello», вот так."
    ]
  },
  {
    "time": [
      331.17,
      334.78
    ],
    "en": [
      "Okay, so what roles did they negotiate?"
    ],
    "ru": [
      "Итак, о каких ролях они договорились?"
    ]
  },
  {
    "time": [
      334.78,
      339.67
    ],
    "en": [
      "Well, one of them, let’s say R1, will become the active router."
    ],
    "ru": [
      "Что ж, один из них, скажем, R1, станет активным маршрутизатором."
    ]
  },
  {
    "time": [
      339.67,
      343.57
    ],
    "en": [
      "The other, R2, will become the standby router."
    ],
    "ru": [
      "Другой, R2, станет резервным маршрутизатором."
    ]
  },
  {
    "time": [
      343.57,
      349.17
    ],
    "en": [
      "Note that the actual terms, like active and standby, vary depending on which FHRP is being"
    ],
    "ru": [
      "Обратите внимание, что фактические условия, такие как активный и резервный, различаются в зависимости от того, какой FHRP используется."
    ]
  },
  {
    "time": [
      349.17,
      353.43
    ],
    "en": [
      "used, because as I showed you before there are a few different FHRPs."
    ],
    "ru": [
      "используется, потому что, как я показал вам ранее, существует несколько разных FHRP."
    ]
  },
  {
    "time": [
      353.43,
      359.73
    ],
    "en": [
      "So, R1 is the active, meaning it will act as the default gateway for the network."
    ],
    "ru": [
      "Итак, R1 является активным, что означает, что он будет действовать как шлюз по умолчанию для сети."
    ]
  },
  {
    "time": [
      359.73,
      366.33
    ],
    "en": [
      "R2 is the standby, meaning it will not function as the default gateway unless R1 fails."
    ],
    "ru": [
      "R2 является резервным, что означает, что он не будет работать в качестве шлюза по умолчанию, если R1 не выйдет из строя."
    ]
  },
  {
    "time": [
      366.33,
      370.55
    ],
    "en": [
      "If R1 does fail, it will automatically take over the role as default gateway."
    ],
    "ru": [
      "Если R1 все же выйдет из строя, он автоматически возьмет на себя роль шлюза по умолчанию."
    ]
  },
  {
    "time": [
      370.55,
      376.83
    ],
    "en": [
      "So, let’s say we set up our FHRP here in this network, and now PC1 needs to send some"
    ],
    "ru": [
      "Итак, допустим, мы настроили наш FHRP здесь, в этой сети, и теперь ПК1 должен отправить"
    ]
  },
  {
    "time": [
      376.83,
      379.46
    ],
    "en": [
      "traffic to a destination in another network."
    ],
    "ru": [
      "трафик к пункту назначения в другой сети."
    ]
  },
  {
    "time": [
      379.46,
      381.79
    ],
    "en": [
      "Here’s what PC1 is thinking."
    ],
    "ru": [
      "Вот что думает ПК1."
    ]
  },
  {
    "time": [
      381.79,
      385.57
    ],
    "en": [
      "I need to send traffic to a destination in another network."
    ],
    "ru": [
      "Мне нужно отправить трафик в пункт назначения в другой сети."
    ]
  },
  {
    "time": [
      385.57,
      391.24
    ],
    "en": [
      "My default gateway is 172.16.0.252, but I don’t know the MAC address yet."
    ],
    "ru": [
      "Мой шлюз по умолчанию - 172.16.0.252, но я еще не знаю MAC-адрес."
    ]
  },
  {
    "time": [
      391.24,
      396.17
    ],
    "en": [
      "I will send an ARP request to learn the MAC address of 172.16.0.252."
    ],
    "ru": [
      "Я отправлю ARP-запрос, чтобы узнать MAC-адрес 172.16.0.252."
    ]
  },
  {
    "time": [
      396.17,
      402.43
    ],
    "en": [
      "I haven’t mentioned ARP in a while in this course, but remember that it is used to learn"
    ],
    "ru": [
      "Я давно не упоминал ARP в этом курсе, но помните, что он используется для изучения"
    ]
  },
  {
    "time": [
      402.43,
      406.12
    ],
    "en": [
      "the MAC address of a particular IP address."
    ],
    "ru": [
      "MAC-адрес определенного IP-адреса."
    ]
  },
  {
    "time": [
      406.12,
      410.99
    ],
    "en": [
      "In order for PC1 to encapsulate the packet in a frame destined for the default gateway,"
    ],
    "ru": [
      "Чтобы ПК1 инкапсулировал пакет в кадр, предназначенный для шлюза по умолчанию,"
    ]
  },
  {
    "time": [
      410.99,
      413.74
    ],
    "en": [
      "it has to know the default gateway’s MAC address."
    ],
    "ru": [
      "он должен знать MAC-адрес шлюза по умолчанию."
    ]
  },
  {
    "time": [
      413.74,
      423.07
    ],
    "en": [
      "So, PC1 will make an ARP request like this, saying ‘Hi 172.16.0.252. This is 172.16.0.1."
    ],
    "ru": [
      "Итак, ПК1 отправит такой запрос ARP, говоря: «Привет, 172.16.0.252. Это 172.16.0.1."
    ]
  },
  {
    "time": [
      423.07,
      426.39
    ],
    "en": [
      "This is 172.16.0.1. What’s your MAC address?’."
    ],
    "ru": [
      "Это 172.16.0.1. Какой у вас MAC-адрес? »."
    ]
  },
  {
    "time": [
      426.39,
      428.73
    ],
    "en": [
      "Remember that the ARP request message is broadcast."
    ],
    "ru": [
      "Помните, что сообщение запроса ARP транслируется."
    ]
  },
  {
    "time": [
      428.73,
      433.78
    ],
    "en": [
      "So, it will be sent over the network like this, reaching all hosts."
    ],
    "ru": [
      "Таким образом, он будет отправлен по сети таким образом, достигнув всех хостов."
    ]
  },
  {
    "time": [
      433.78,
      439.01
    ],
    "en": [
      "Fortunately spanning tree prevents a broadcast storm by disabling some of the switch interfaces."
    ],
    "ru": [
      "К счастью, связующее дерево предотвращает широковещательный шторм, отключая некоторые интерфейсы коммутатора."
    ]
  },
  {
    "time": [
      439.01,
      447.12
    ],
    "en": [
      "So, both R1 and R2 have received the ARP request, and they both share the same virtual IP address,"
    ],
    "ru": [
      "Итак, и R1, и R2 получили запрос ARP, и оба используют один и тот же виртуальный IP-адрес,"
    ]
  },
  {
    "time": [
      447.12,
      451.98
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
      447.12,
      451.98
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
      451.98,
      453.86
    ],
    "en": [
      "What happens now? Which will send the ARP reply?"
    ],
    "ru": [
      "Что происходит сейчас? Что отправит ответ ARP?"
    ]
  },
  {
    "time": [
      453.86,
      460.04
    ],
    "en": [
      "R1 is the active router and R2 is the standby router, so you can probably guess that R1"
    ],
    "ru": [
      "R1 - активный маршрутизатор, а R2 - резервный маршрутизатор, поэтому вы, вероятно, можете догадаться, что R1"
    ]
  },
  {
    "time": [
      460.04,
      462.419
    ],
    "en": [
      "will send the ARP reply."
    ],
    "ru": [
      "отправит ответ ARP."
    ]
  },
  {
    "time": [
      462.419,
      463.57
    ],
    "en": [
      "And that is correct."
    ],
    "ru": [
      "И это правильно."
    ]
  },
  {
    "time": [
      463.57,
      470.04
    ],
    "en": [
      "R1 will send a unicast ARP reply like this. ‘Hi 172.16.0.1."
    ],
    "ru": [
      "R1 отправит одноадресный ответ ARP, подобный этому. «Привет, 172.16.0.1."
    ]
  },
  {
    "time": [
      470.04,
      471.90999999999997
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
      470.04,
      471.90999999999997
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
      471.90999999999997,
      477.49
    ],
    "en": [
      "My MAC address is...’, and then it will tell PC1 the virtual MAC address."
    ],
    "ru": [
      "Мой MAC-адрес ... », а затем он сообщит ПК1 виртуальный MAC-адрес."
    ]
  },
  {
    "time": [
      477.49,
      484.15
    ],
    "en": [
      "That’s right, not only is a virtual IP address used, but a virtual MAC address too."
    ],
    "ru": [
      "Правильно, используется не только виртуальный IP-адрес, но и виртуальный MAC-адрес."
    ]
  },
  {
    "time": [
      484.15,
      488.97
    ],
    "en": [
      "Each FHRP uses a different virtual MAC address, and I will introduce them later."
    ],
    "ru": [
      "Каждый FHRP использует свой виртуальный MAC-адрес, и я представлю их позже."
    ]
  },
  {
    "time": [
      488.97,
      494.3
    ],
    "en": [
      "So, the ARP reply is sent to PC1."
    ],
    "ru": [
      "Итак, ответ ARP отправляется на ПК1."
    ]
  },
  {
    "time": [
      494.3,
      497.669
    ],
    "en": [
      "Now PC1 knows the MAC address of its default gateway."
    ],
    "ru": [
      "Теперь ПК1 знает MAC-адрес своего шлюза по умолчанию."
    ]
  },
  {
    "time": [
      497.669,
      503.79
    ],
    "en": [
      "So let’s say PC1 needs to send some traffic to the IP address 8.8.8.8, which is a Google"
    ],
    "ru": [
      "Допустим, ПК1 необходимо отправить некоторый трафик на IP-адрес 8.8.8.8, который является Google"
    ]
  },
  {
    "time": [
      503.79,
      505.65
    ],
    "en": [
      "server by the way."
    ],
    "ru": [
      "сервер кстати."
    ]
  },
  {
    "time": [
      505.65,
      510.14
    ],
    "en": [
      "What will the source and destination fields of the frame and packet be?"
    ],
    "ru": [
      "Какими будут поля источника и назначения кадра и пакета?"
    ]
  },
  {
    "time": [
      510.14,
      515.2
    ],
    "en": [
      "The source IP will be PC1’s, 172.16.0.1."
    ],
    "ru": [
      "Исходным IP-адресом будет PC1, 172.16.0.1."
    ]
  },
  {
    "time": [
      515.2,
      520.05
    ],
    "en": [
      "The destination IP will be the Google server, 8.8.8.8."
    ],
    "ru": [
      "IP-адресом назначения будет сервер Google, 8.8.8.8."
    ]
  },
  {
    "time": [
      520.05,
      523.289
    ],
    "en": [
      "The source MAC will be PC1’s MAC address."
    ],
    "ru": [
      "MAC-адрес источника будет MAC-адресом ПК1."
    ]
  },
  {
    "time": [
      523.289,
      528.24
    ],
    "en": [
      "And the destination MAC address will be the virtual MAC address used by the FHRP."
    ],
    "ru": [
      "И MAC-адрес назначения будет виртуальным MAC-адресом, используемым FHRP."
    ]
  },
  {
    "time": [
      528.24,
      533.899
    ],
    "en": [
      "The frame will be sent to R1, and then the packet will be sent over the Internet."
    ],
    "ru": [
      "Кадр будет отправлен на R1, а затем пакет будет отправлен через Интернет."
    ]
  },
  {
    "time": [
      533.899,
      535.73
    ],
    "en": [
      "Now what if R1 goes down?"
    ],
    "ru": [
      "Что теперь, если R1 выйдет из строя?"
    ]
  },
  {
    "time": [
      535.73,
      538.389
    ],
    "en": [
      "There is no default gateway for the network."
    ],
    "ru": [
      "Для сети нет шлюза по умолчанию."
    ]
  },
  {
    "time": [
      538.389,
      542.47
    ],
    "en": [
      "But after a few seconds, R2 will think ‘I haven’t received any ‘Hello’ messages"
    ],
    "ru": [
      "Но через несколько секунд R2 подумает: «Я не получал никаких сообщений Hello»."
    ]
  },
  {
    "time": [
      542.47,
      547.67
    ],
    "en": [
      "from R1 recently...I will become the Active router!’."
    ],
    "ru": [
      "от R1 недавно ... Я стану Активным маршрутизатором! »."
    ]
  },
  {
    "time": [
      547.67,
      550.12
    ],
    "en": [
      "So R2 is now the active router."
    ],
    "ru": [
      "Итак, R2 теперь является активным маршрутизатором."
    ]
  },
  {
    "time": [
      550.12,
      554.98
    ],
    "en": [
      "But how does it tell the other devices to send traffic to it instead of R1?"
    ],
    "ru": [
      "Но как он сообщает другим устройствам отправлять трафик на него вместо R1?"
    ]
  },
  {
    "time": [
      554.98,
      560.32
    ],
    "en": [
      "Note that the end hosts, the PCs, actually don’t have to change their ARP tables."
    ],
    "ru": [
      "Обратите внимание, что конечным хостам, ПК, на самом деле не нужно изменять свои таблицы ARP."
    ]
  },
  {
    "time": [
      560.32,
      567.46
    ],
    "en": [
      "The entry in the PC’s ARP table is like this, mapping the virtual IP address 172.16.0.252"
    ],
    "ru": [
      "Запись в таблице ARP ПК выглядит следующим образом: отображает виртуальный IP-адрес 172.16.0.252."
    ]
  },
  {
    "time": [
      567.46,
      569.41
    ],
    "en": [
      "to the virtual MAC address."
    ],
    "ru": [
      "на виртуальный MAC-адрес."
    ]
  },
  {
    "time": [
      569.41,
      574.329
    ],
    "en": [
      "So, what needs to be updated to make traffic start going through R2?"
    ],
    "ru": [
      "Итак, что нужно обновить, чтобы трафик начал проходить через R2?"
    ]
  },
  {
    "time": [
      574.329,
      576.189
    ],
    "en": [
      "The answer is the switches."
    ],
    "ru": [
      "Ответ - переключатели."
    ]
  },
  {
    "time": [
      576.189,
      580.79
    ],
    "en": [
      "R2 needs to make the switches update their MAC address tables."
    ],
    "ru": [
      "R2 необходимо заставить коммутаторы обновлять свои таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      580.79,
      583.779
    ],
    "en": [
      "Remember how switches update their MAC address table."
    ],
    "ru": [
      "Вспомните, как коммутаторы обновляют свою таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      583.779,
      588.399
    ],
    "en": [
      "When they receive a frame they check the source MAC address field, and use that to update"
    ],
    "ru": [
      "Когда они получают кадр, они проверяют поле исходного MAC-адреса и используют его для обновления."
    ]
  },
  {
    "time": [
      588.399,
      590.5889999999999
    ],
    "en": [
      "the information in the MAC address table."
    ],
    "ru": [
      "информация в таблице MAC-адресов."
    ]
  },
  {
    "time": [
      590.5889999999999,
      596.44
    ],
    "en": [
      "So, R2 needs to send frames with a source MAC address of the virtual MAC address."
    ],
    "ru": [
      "Итак, R2 необходимо отправлять кадры с исходным MAC-адресом виртуального MAC-адреса."
    ]
  },
  {
    "time": [
      596.44,
      602.519
    ],
    "en": [
      "To do this, it will send ‘gratuitous ARP’ replies."
    ],
    "ru": [
      "Для этого он будет отправлять «безвозмездные ARP-ответы»."
    ]
  },
  {
    "time": [
      602.519,
      609.279
    ],
    "en": [
      "Gratuitous ARP is probably outside of the scope of the CCNA, but here’s a very brief explanation."
    ],
    "ru": [
      "Беспричинный ARP, вероятно, выходит за рамки CCNA, но вот очень краткое объяснение."
    ]
  },
  {
    "time": [
      609.279,
      613.279
    ],
    "en": [
      "explanation. Gratuitous ARP messages are ARP replies sent without being requested."
    ],
    "ru": [
      "объяснение. Беспричинные сообщения ARP - это ответы ARP, отправленные без запроса."
    ]
  },
  {
    "time": [
      613.279,
      619.11
    ],
    "en": [
      "Normally ARP replies are sent in reply to an ARP request, but in gratuitous ARP, the"
    ],
    "ru": [
      "Обычно ответы ARP отправляются в ответ на запрос ARP, но в случае бесплатного ARP"
    ]
  },
  {
    "time": [
      619.11,
      622.54
    ],
    "en": [
      "ARP reply messages are sent without receiving an ARP request."
    ],
    "ru": [
      "Сообщения ответа ARP отправляются без получения запроса ARP."
    ]
  },
  {
    "time": [
      622.54,
      627.699
    ],
    "en": [
      "Here’s another difference between gratuitous ARP and regular ARP replies."
    ],
    "ru": [
      "Вот еще одно различие между бесплатным ARP-ответом и обычным ARP-ответом."
    ]
  },
  {
    "time": [
      627.699,
      634.23
    ],
    "en": [
      "The frames are broadcast to the MAC address of all Fs, but normal ARP replies are unicast."
    ],
    "ru": [
      "Кадры транслируются по MAC-адресам всех F, но обычные ответы ARP являются одноадресными."
    ]
  },
  {
    "time": [
      634.23,
      639.149
    ],
    "en": [
      "Because they are broadcast, all switches will receive the frames and update their MAC address table."
    ],
    "ru": [
      "Поскольку они являются широковещательными, все коммутаторы получат кадры и обновят свою таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      639.149,
      643.79
    ],
    "en": [
      "table. So, R2 will send gratuitous ARPs like this."
    ],
    "ru": [
      "стол. Итак, R2 будет отправлять такие бесплатные ARP."
    ]
  },
  {
    "time": [
      643.79,
      649.81
    ],
    "en": [
      "They will be broadcast throughout the network, and again spanning-tree protocol will prevent a broadcast storm."
    ],
    "ru": [
      "Они будут транслироваться по всей сети, и снова протокол связующего дерева предотвратит широковещательный шторм."
    ]
  },
  {
    "time": [
      649.81,
      652.699
    ],
    "en": [
      "a broadcast storm. The switches will then update their MAC address tables."
    ],
    "ru": [
      "широковещательный шторм. Затем коммутаторы обновят свои таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      652.699,
      658.619
    ],
    "en": [
      "SW2 will learn that it can now reach the virtual MAC address via this interface, SW1 will learn"
    ],
    "ru": [
      "SW2 узнает, что теперь он может получить доступ к виртуальному MAC-адресу через этот интерфейс, SW1 узнает"
    ]
  },
  {
    "time": [
      658.619,
      664.37
    ],
    "en": [
      "the same thing, and so will SW3 and SW4."
    ],
    "ru": [
      "то же самое, и SW3 и SW4 тоже."
    ]
  },
  {
    "time": [
      664.37,
      668.8
    ],
    "en": [
      "Now R2 is the active router, and all of the switches have updated their MAC address tables."
    ],
    "ru": [
      "Теперь R2 является активным маршрутизатором, и все коммутаторы обновили свои таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      668.8,
      675.759
    ],
    "en": [
      "Let’s say PC1 wants to send traffic to the same Google server, 8.8.8.8, again."
    ],
    "ru": [
      "Допустим, ПК1 снова хочет отправить трафик на тот же сервер Google, 8.8.8.8."
    ]
  },
  {
    "time": [
      675.759,
      678.869
    ],
    "en": [
      "The frame and packet are exactly the same as before."
    ],
    "ru": [
      "Кадр и пакет точно такие же, как и раньше."
    ]
  },
  {
    "time": [
      678.869,
      685.16
    ],
    "en": [
      "Source IP is PC1’s, Destination IP is the Google server, source MAC is PC1’s, and"
    ],
    "ru": [
      "IP-адрес источника - PC1, IP-адрес назначения - сервер Google, MAC-адрес источника - PC1, и"
    ]
  },
  {
    "time": [
      685.16,
      687.399
    ],
    "en": [
      "destination MAC is the Virtual MAC."
    ],
    "ru": [
      "MAC-адрес назначения - это виртуальный MAC-адрес."
    ]
  },
  {
    "time": [
      687.399,
      693.259
    ],
    "en": [
      "However, this time the frame will be sent to R2, which will send the packet out over the Internet."
    ],
    "ru": [
      "Однако на этот раз кадр будет отправлен на R2, который отправит пакет через Интернет."
    ]
  },
  {
    "time": [
      693.259,
      696.819
    ],
    "en": [
      "the Internet. Now, what if R1 comes online again?"
    ],
    "ru": [
      "интернет. А что, если R1 снова подключится к сети?"
    ]
  },
  {
    "time": [
      696.819,
      699.019
    ],
    "en": [
      "Will it become the active router once again?"
    ],
    "ru": [
      "Станет ли он снова активным маршрутизатором?"
    ]
  },
  {
    "time": [
      699.019,
      702.619
    ],
    "en": [
      "No, it will become the standby router."
    ],
    "ru": [
      "Нет, он станет резервным маршрутизатором."
    ]
  },
  {
    "time": [
      702.619,
      708.54
    ],
    "en": [
      "Like I said about the DR and BDR in OSPF, FHRPs are ‘non-preemptive’."
    ],
    "ru": [
      "Как я уже сказал о DR и BDR в OSPF, протоколы FHRP не являются «упреждающими»."
    ]
  },
  {
    "time": [
      708.54,
      714.29
    ],
    "en": [
      "The current active router will not automatically give up its role, even if the former active router returns."
    ],
    "ru": [
      "Текущий активный маршрутизатор не откажется от своей роли автоматически, даже если прежний активный маршрутизатор вернется."
    ]
  },
  {
    "time": [
      714.29,
      719.21
    ],
    "en": [
      "router returns. However, although this is the default behavior, you can change this setting to make R1 preempt"
    ],
    "ru": [
      "роутер возвращается. Однако, хотя это поведение по умолчанию, вы можете изменить этот параметр, чтобы R1 вытеснял"
    ]
  },
  {
    "time": [
      719.21,
      725.709
    ],
    "en": [
      "R2 and take back its active role automatically, so R2 will become the standby router again."
    ],
    "ru": [
      "R2 и автоматически вернет свою активную роль, так что R2 снова станет резервным маршрутизатором."
    ]
  },
  {
    "time": [
      725.709,
      731.91
    ],
    "en": [
      "Okay, so that was a basic overview of how first hop redundancy protocols, FHRPs, work."
    ],
    "ru": [
      "Хорошо, это был базовый обзор того, как работают протоколы резервирования первого прыжка, FHRP."
    ]
  },
  {
    "time": [
      731.91,
      737.11
    ],
    "en": [
      "I haven’t talked about any specific FHRPs yet, but most of that information applies"
    ],
    "ru": [
      "Я еще не говорил о каких-либо конкретных FHRP, но большая часть этой информации применима"
    ]
  },
  {
    "time": [
      737.11,
      739.3389999999999
    ],
    "en": [
      "to all of them."
    ],
    "ru": [
      "всем им."
    ]
  },
  {
    "time": [
      739.3389999999999,
      744.48
    ],
    "en": [
      "Before moving on to explain a few specific FHRPs, here’s a quick review."
    ],
    "ru": [
      "Прежде чем перейти к объяснению нескольких конкретных FHRP, сделаем небольшой обзор."
    ]
  },
  {
    "time": [
      744.48,
      751.35
    ],
    "en": [
      "A virtual IP is configured on the two routers, and a virtual MAC is generated for the virtual IP."
    ],
    "ru": [
      "Виртуальный IP-адрес настроен на двух маршрутизаторах, а виртуальный MAC-адрес создается для виртуального IP-адреса."
    ]
  },
  {
    "time": [
      751.35,
      755.67
    ],
    "en": [
      "IP. Each FHRP uses a different format for the virtual MAC address, I’ll cover those MAC"
    ],
    "ru": [
      "IP. Каждый FHRP использует свой формат для виртуального MAC-адреса, я расскажу об этих MAC-адресах."
    ]
  },
  {
    "time": [
      755.67,
      758.73
    ],
    "en": [
      "addresses in the next section."
    ],
    "ru": [
      "адреса в следующем разделе."
    ]
  },
  {
    "time": [
      758.73,
      761.559
    ],
    "en": [
      "An active router and a standby router are elected."
    ],
    "ru": [
      "Выбираются активный маршрутизатор и резервный маршрутизатор."
    ]
  },
  {
    "time": [
      761.559,
      766.759
    ],
    "en": [
      "Again, different FHRPs use different terms, and some support what’s called an ‘active-active’"
    ],
    "ru": [
      "Опять же, разные FHRP используют разные термины, а некоторые поддерживают то, что называется «активный-активный»."
    ]
  },
  {
    "time": [
      766.759,
      771.73
    ],
    "en": [
      "setup, with two active routers at the same time, but I’ll explain more later."
    ],
    "ru": [
      "настройку с двумя активными маршрутизаторами одновременно, но я объясню это позже."
    ]
  },
  {
    "time": [
      771.73,
      777.91
    ],
    "en": [
      "Next, end hosts in the network are configured to use the virtual IP as their default gateway."
    ],
    "ru": [
      "Затем конечные узлы в сети настраиваются на использование виртуального IP-адреса в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      777.91,
      782.339
    ],
    "en": [
      "The active router replies to ARP requests using the virtual MAC address, so traffic"
    ],
    "ru": [
      "Активный маршрутизатор отвечает на запросы ARP, используя виртуальный MAC-адрес, поэтому трафик"
    ]
  },
  {
    "time": [
      782.339,
      785.69
    ],
    "en": [
      "destined for other networks will be sent to it."
    ],
    "ru": [
      "предназначенные для других сетей, будут отправлены на него."
    ]
  },
  {
    "time": [
      785.69,
      788.879
    ],
    "en": [
      "It functions as the default gateway for the network."
    ],
    "ru": [
      "Он функционирует как шлюз по умолчанию для сети."
    ]
  },
  {
    "time": [
      788.879,
      793.519
    ],
    "en": [
      "If the active router fails, the standby becomes the next active router."
    ],
    "ru": [
      "Если активный маршрутизатор выходит из строя, следующим активным маршрутизатором становится резервный."
    ]
  },
  {
    "time": [
      793.519,
      797.519
    ],
    "en": [
      "The new active router will send gratuitous ARP messages so that switches will update"
    ],
    "ru": [
      "Новый активный маршрутизатор будет отправлять беспричинные сообщения ARP, чтобы коммутаторы обновлялись."
    ]
  },
  {
    "time": [
      797.519,
      799.699
    ],
    "en": [
      "their MAC address tables."
    ],
    "ru": [
      "их таблицы MAC-адресов."
    ]
  },
  {
    "time": [
      799.699,
      803.0889999999999
    ],
    "en": [
      "It now functions as the default gateway for the network."
    ],
    "ru": [
      "Теперь он работает как шлюз по умолчанию для сети."
    ]
  },
  {
    "time": [
      803.0889999999999,
      808.41
    ],
    "en": [
      "If the old active router comes back online, by default it won’t take back its role as the active router."
    ],
    "ru": [
      "Если старый активный маршрутизатор снова подключится к сети, по умолчанию он не вернет свою роль активного маршрутизатора."
    ]
  },
  {
    "time": [
      808.41,
      810.54
    ],
    "en": [
      "the active router. It will become the standby router."
    ],
    "ru": [
      "активный роутер. Он станет резервным маршрутизатором."
    ]
  },
  {
    "time": [
      810.54,
      815.329
    ],
    "en": [
      "This is like the DR and BDR in OSPF, they don’t give up their roles automatically"
    ],
    "ru": [
      "Это похоже на DR и BDR в OSPF, они не отказываются от своих ролей автоматически."
    ]
  },
  {
    "time": [
      815.329,
      818.3389999999999
    ],
    "en": [
      "even if another router is configured with a higher priority."
    ],
    "ru": [
      "даже если другой маршрутизатор настроен с более высоким приоритетом."
    ]
  },
  {
    "time": [
      818.3389999999999,
      824.149
    ],
    "en": [
      "But, in FHRPs you can configure ‘preemption’, so that the old active router does take back"
    ],
    "ru": [
      "Но в FHRP вы можете настроить «приоритетное прерывание», чтобы старый активный маршрутизатор действительно принимал"
    ]
  },
  {
    "time": [
      824.149,
      826.829
    ],
    "en": [
      "its old role if it comes back online."
    ],
    "ru": [
      "его прежняя роль, если он вернется в онлайн."
    ]
  },
  {
    "time": [
      826.829,
      829.92
    ],
    "en": [
      "Okay, sorry for the wall of text."
    ],
    "ru": [
      "Ладно, извините за стену с текстом."
    ]
  },
  {
    "time": [
      829.92,
      834.23
    ],
    "en": [
      "Before moving on to a few specific FHRPs, I recommend watching the previous section"
    ],
    "ru": [
      "Прежде чем перейти к нескольким конкретным FHRP, я рекомендую посмотреть предыдущий раздел."
    ]
  },
  {
    "time": [
      834.23,
      838.7090000000001
    ],
    "en": [
      "once more to make sure you understand the basics of how FHRPs work."
    ],
    "ru": [
      "еще раз, чтобы убедиться, что вы понимаете основы работы FHRP."
    ]
  },
  {
    "time": [
      838.7090000000001,
      840.43
    ],
    "en": [
      "Now let’s move on."
    ],
    "ru": [
      "А теперь поехали."
    ]
  },
  {
    "time": [
      840.43,
      845.62
    ],
    "en": [
      "N ow I’ll give a brief overview of three major FHRPs."
    ],
    "ru": [
      "Теперь я дам краткий обзор трех основных FHRP."
    ]
  },
  {
    "time": [
      845.62,
      850.29
    ],
    "en": [
      "The functionality of each is very similar, so this section will be quite brief, but make"
    ],
    "ru": [
      "Функциональность каждого из них очень похожа, поэтому этот раздел будет довольно кратким, но сделайте так, чтобы"
    ]
  },
  {
    "time": [
      850.29,
      852.72
    ],
    "en": [
      "sure you learn these details for the exam."
    ],
    "ru": [
      "обязательно изучите эти детали к экзамену."
    ]
  },
  {
    "time": [
      852.72,
      858.029
    ],
    "en": [
      "First up, HSRP, Hot Standby Router Protocol."
    ],
    "ru": [
      "Во-первых, HSRP, протокол маршрутизатора горячего резервирования."
    ]
  },
  {
    "time": [
      858.029,
      863.309
    ],
    "en": [
      "HSRP is Cisco proprietary, so it only runs on Cisco devices."
    ],
    "ru": [
      "HSRP является собственностью Cisco, поэтому работает только на устройствах Cisco."
    ]
  },
  {
    "time": [
      863.309,
      866.769
    ],
    "en": [
      "You can’t run it on Juniper routers, for example."
    ],
    "ru": [
      "Например, вы не можете запустить его на маршрутизаторах Juniper."
    ]
  },
  {
    "time": [
      866.769,
      869.959
    ],
    "en": [
      "In HSRP, an active and standby router are elected."
    ],
    "ru": [
      "В HSRP выбираются активный и резервный маршрутизаторы."
    ]
  },
  {
    "time": [
      869.959,
      877.579
    ],
    "en": [
      "These are the two terms I used previously, but you’ll see the next FHRP uses different terms."
    ],
    "ru": [
      "Эти два термина я использовал ранее, но вы увидите, что в следующем FHRP используются другие термины."
    ]
  },
  {
    "time": [
      877.579,
      882.43
    ],
    "en": [
      "terms. There are two versions of HSRP, version 1 and version 2."
    ],
    "ru": [
      "термины. Существует две версии HSRP: версия 1 и версия 2."
    ]
  },
  {
    "time": [
      882.43,
      887.699
    ],
    "en": [
      "Version 2 adds IPv6 support, and increases the number of ‘groups’ that can be configured."
    ],
    "ru": [
      "Версия 2 добавляет поддержку IPv6 и увеличивает количество настраиваемых «групп»."
    ]
  },
  {
    "time": [
      887.699,
      891.98
    ],
    "en": [
      "You’ll see what a group is when we configure HSRP later."
    ],
    "ru": [
      "Вы увидите, что такое группа, когда мы позже настроим HSRP."
    ]
  },
  {
    "time": [
      891.98,
      899.16
    ],
    "en": [
      "In our example today, there was just one subnet, 172.16.0.0/24, and one VLAN."
    ],
    "ru": [
      "В нашем сегодняшнем примере была только одна подсеть 172.16.0.0/24 и одна VLAN."
    ]
  },
  {
    "time": [
      899.16,
      903.6
    ],
    "en": [
      "But in situations with multiple subnets and VLANs, you’ll need to configure a virtual"
    ],
    "ru": [
      "Но в ситуациях с несколькими подсетями и VLAN вам потребуется настроить виртуальный"
    ]
  },
  {
    "time": [
      903.6,
      909.01
    ],
    "en": [
      "IP address for each subnet, because each subnet needs its own default gateway."
    ],
    "ru": [
      "IP-адрес для каждой подсети, потому что каждой подсети нужен собственный шлюз по умолчанию."
    ]
  },
  {
    "time": [
      909.01,
      913.62
    ],
    "en": [
      "Each of those virtual IPs is configured in a separate HSRP group."
    ],
    "ru": [
      "Каждый из этих виртуальных IP-адресов настраивается в отдельной группе HSRP."
    ]
  },
  {
    "time": [
      913.62,
      918.17
    ],
    "en": [
      "Anyway, as I said you’ll see how that works later."
    ],
    "ru": [
      "В любом случае, как я уже сказал, вы увидите, как это работает позже."
    ]
  },
  {
    "time": [
      918.17,
      923.179
    ],
    "en": [
      "Remember how I explained that the routers communicate with each other by sending multicast hello messages?"
    ],
    "ru": [
      "Помните, как я объяснял, что маршрутизаторы взаимодействуют друг с другом, отправляя многоадресные приветственные сообщения?"
    ]
  },
  {
    "time": [
      923.179,
      924.899
    ],
    "en": [
      "hello messages? These are the addresses used."
    ],
    "ru": [
      "привет сообщения? Это используемые адреса."
    ]
  },
  {
    "time": [
      924.899,
      932.329
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
      924.899,
      932.329
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
      932.329,
      937.74
    ],
    "en": [
      "It may seem not so important, but try to remember these addresses for the test."
    ],
    "ru": [
      "Это может показаться не таким важным, но постарайтесь запомнить эти адреса для теста."
    ]
  },
  {
    "time": [
      937.74,
      940.759
    ],
    "en": [
      "Next up, the virtual MAC address formats."
    ],
    "ru": [
      "Далее, форматы виртуальных MAC-адресов."
    ]
  },
  {
    "time": [
      940.759,
      945.43
    ],
    "en": [
      "These are tougher to remember, but make sure you remember them for the exam."
    ],
    "ru": [
      "Их сложнее запомнить, но обязательно запомните их перед экзаменом."
    ]
  },
  {
    "time": [
      945.43,
      951.06
    ],
    "en": [
      "Use the flashcards, try writing them from memory, whatever you have to do to remember them."
    ],
    "ru": [
      "Используйте карточки, попробуйте записать их по памяти, что бы вы ни делали, чтобы запомнить их."
    ]
  },
  {
    "time": [
      951.06,
      958.889
    ],
    "en": [
      "them. So, version 1 uses 0000 0c07 ac, followed by the group number."
    ],
    "ru": [
      "их. Итак, версия 1 использует 0000 0c07 ac, за которым следует номер группы."
    ]
  },
  {
    "time": [
      958.889,
      965.079
    ],
    "en": [
      "So, in my previous example let’s say I configured the virtual IP address in group 1."
    ],
    "ru": [
      "Итак, в моем предыдущем примере я настроил виртуальный IP-адрес в группе 1."
    ]
  },
  {
    "time": [
      965.079,
      969.73
    ],
    "en": [
      "If using HSRP version 1, what would be virtual MAC address be?"
    ],
    "ru": [
      "Каким будет виртуальный MAC-адрес при использовании HSRP версии 1?"
    ]
  },
  {
    "time": [
      969.73,
      976.85
    ],
    "en": [
      "It’s 0000 0c07 ac01, because the group number is 1."
    ],
    "ru": [
      "Это 0000 0c07 ac01, потому что номер группы равен 1."
    ]
  },
  {
    "time": [
      976.85,
      988.329
    ],
    "en": [
      "Now, HSRP version 2 uses the format 0000 0c9F Fxxx, again xxx is the group number."
    ],
    "ru": [
      "Теперь HSRP версии 2 использует формат 0000 0c9F Fxxx, снова xxx - это номер группы."
    ]
  },
  {
    "time": [
      988.329,
      994.29
    ],
    "en": [
      "Note that 3 hexadecimal digits are now available instead of 2, so there are more group numbers available."
    ],
    "ru": [
      "Обратите внимание, что теперь доступны 3 шестнадцатеричные цифры вместо 2, поэтому доступно больше номеров групп."
    ]
  },
  {
    "time": [
      994.29,
      1001.73
    ],
    "en": [
      "available. Anyway, if group number 1 is used, what would the virtual MAC address be in HSRP version 2?"
    ],
    "ru": [
      "доступный. В любом случае, если используется группа номер 1, каким будет виртуальный MAC-адрес в HSRP версии 2?"
    ]
  },
  {
    "time": [
      1001.73,
      1007.549
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
      1001.73,
      1007.549
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
      1007.549,
      1012.799
    ],
    "en": [
      "One last point, in a situation with multiple subnets/VLANs, you can configure a different"
    ],
    "ru": [
      "И последнее: в ситуации с несколькими подсетями / VLAN вы можете настроить другой"
    ]
  },
  {
    "time": [
      1012.799,
      1016.23
    ],
    "en": [
      "active router in each subnet to load balance."
    ],
    "ru": [
      "активный маршрутизатор в каждой подсети для балансировки нагрузки."
    ]
  },
  {
    "time": [
      1016.23,
      1019.91
    ],
    "en": [
      "Remember what I said in previous videos about spanning-tree protocol?"
    ],
    "ru": [
      "Помните, что я говорил в предыдущих видео о протоколе связующего дерева?"
    ]
  },
  {
    "time": [
      1019.91,
      1025.49
    ],
    "en": [
      "You can configure a different root bridge in each VLAN so traffic is load balanced over the switches."
    ],
    "ru": [
      "Вы можете настроить разные корневые мосты в каждой VLAN, чтобы трафик балансировался по коммутаторам."
    ]
  },
  {
    "time": [
      1025.49,
      1031.62
    ],
    "en": [
      "the switches. Well, when you configure multiple HSRP groups, one for each subnet and VLAN, you can configure"
    ],
    "ru": [
      "переключатели. Что ж, когда вы настраиваете несколько групп HSRP, по одной для каждой подсети и VLAN, вы можете настроить"
    ]
  },
  {
    "time": [
      1031.62,
      1035.189
    ],
    "en": [
      "a different active router in each subnet and VLAN."
    ],
    "ru": [
      "отдельный активный маршрутизатор в каждой подсети и VLAN."
    ]
  },
  {
    "time": [
      1035.189,
      1041.049
    ],
    "en": [
      "For example, R1 could be the active router in VLAN1 and standby in VLAN2, and R2 could"
    ],
    "ru": [
      "Например, R1 может быть активным маршрутизатором в VLAN1 и резервным в VLAN2, а R2 может"
    ]
  },
  {
    "time": [
      1041.049,
      1046.37
    ],
    "en": [
      "be the standby in VLAN1 and active in VLAN2."
    ],
    "ru": [
      "быть резервным в VLAN1 и активным в VLAN2."
    ]
  },
  {
    "time": [
      1046.37,
      1051.6
    ],
    "en": [
      "This is probably beyond what you need to know for the CCNA, but let me briefly demonstrate the concept."
    ],
    "ru": [
      "Вероятно, это выходит за рамки того, что вам нужно знать для CCNA, но позвольте мне вкратце продемонстрировать концепцию."
    ]
  },
  {
    "time": [
      1051.6,
      1058.72
    ],
    "en": [
      "the concept. Let’s say VLAN1 is assigned to hosts in the 172.16.1.0/24 subnet."
    ],
    "ru": [
      "концепция. Допустим, VLAN1 назначена хостам в подсети 172.16.1.0/24."
    ]
  },
  {
    "time": [
      1058.72,
      1061.19
    ],
    "en": [
      "PC1 and PC3 are in VLAN1."
    ],
    "ru": [
      "ПК1 и ПК3 находятся в сети VLAN1."
    ]
  },
  {
    "time": [
      1061.19,
      1070.799
    ],
    "en": [
      "R1 and R2 have their own IP addresses in VLAN1, but they also share the virtual IP 172.16.1.252,"
    ],
    "ru": [
      "R1 и R2 имеют свои собственные IP-адреса в VLAN1, но они также совместно используют виртуальный IP-адрес 172.16.1.252,"
    ]
  },
  {
    "time": [
      1070.799,
      1073.559
    ],
    "en": [
      "which is used as the default gateway of the subnet."
    ],
    "ru": [
      "который используется в качестве шлюза по умолчанию для подсети."
    ]
  },
  {
    "time": [
      1073.559,
      1078.299
    ],
    "en": [
      "R1 is the active router and R2 is the standby router."
    ],
    "ru": [
      "R1 - активный маршрутизатор, а R2 - резервный маршрутизатор."
    ]
  },
  {
    "time": [
      1078.299,
      1083.48
    ],
    "en": [
      "Then, 172.16.2.0/24 is the subnet for VLAN2."
    ],
    "ru": [
      "Тогда 172.16.2.0/24 - это подсеть для VLAN2."
    ]
  },
  {
    "time": [
      1083.48,
      1086.08
    ],
    "en": [
      "PC2 and PC4 are in VLAN2."
    ],
    "ru": [
      "ПК2 и ПК4 находятся в сети VLAN2."
    ]
  },
  {
    "time": [
      1086.08,
      1094.09
    ],
    "en": [
      "R1 and R2 have their own IP addresses in VLAN2, connecting to the switches using ‘router-on-a-stick’."
    ],
    "ru": [
      "R1 и R2 имеют свои собственные IP-адреса в VLAN2, подключаясь к коммутаторам с помощью «маршрутизатора на палке»."
    ]
  },
  {
    "time": [
      1094.09,
      1102.19
    ],
    "en": [
      "They also share the virtual IP address 172.16.2.252, which is used as the default gateway for the subnet."
    ],
    "ru": [
      "Они также используют виртуальный IP-адрес 172.16.2.252, который используется в качестве шлюза по умолчанию для подсети."
    ]
  },
  {
    "time": [
      1102.19,
      1107.019
    ],
    "en": [
      "subnet. R2 is the active router and R1 is the standby router."
    ],
    "ru": [
      "подсеть. R2 - активный маршрутизатор, а R1 - резервный маршрутизатор."
    ]
  },
  {
    "time": [
      1107.019,
      1112.69
    ],
    "en": [
      "Now traffic can be load balanced over the two paths, VLAN1 using R1 and VLAN2 using"
    ],
    "ru": [
      "Теперь трафик может быть сбалансирован по двум путям: VLAN1 с использованием R1 и VLAN2 с использованием"
    ]
  },
  {
    "time": [
      1112.69,
      1117.639
    ],
    "en": [
      "R2 as the default gateway of the subnet, and each subnet has a standby router waiting if"
    ],
    "ru": [
      "R2 в качестве шлюза по умолчанию для подсети, и в каждой подсети есть резервный маршрутизатор, ожидающий, если"
    ]
  },
  {
    "time": [
      1117.639,
      1119.58
    ],
    "en": [
      "the active router fails."
    ],
    "ru": [
      "активный маршрутизатор выходит из строя."
    ]
  },
  {
    "time": [
      1119.58,
      1124.159
    ],
    "en": [
      "So, that’s a basic overview of HSRP."
    ],
    "ru": [
      "Итак, это основной обзор HSRP."
    ]
  },
  {
    "time": [
      1124.159,
      1127.889
    ],
    "en": [
      "Although it can’t load balance within a single subnet, you can configure a different"
    ],
    "ru": [
      "Несмотря на то, что он не может балансировать нагрузку в одной подсети, вы можете настроить другой"
    ]
  },
  {
    "time": [
      1127.889,
      1132.529
    ],
    "en": [
      "active router in each subnet so that traffic is load balanced between the routers."
    ],
    "ru": [
      "активный маршрутизатор в каждой подсети, чтобы трафик между маршрутизаторами распределялся по нагрузке."
    ]
  },
  {
    "time": [
      1132.529,
      1137.16
    ],
    "en": [
      "Let’s move on to the next FHRP."
    ],
    "ru": [
      "Перейдем к следующему FHRP."
    ]
  },
  {
    "time": [
      1137.16,
      1142.09
    ],
    "en": [
      "Next up is VRRP, Virtual Router Redundancy Protocol."
    ],
    "ru": [
      "Далее идет VRRP, протокол резервирования виртуального маршрутизатора."
    ]
  },
  {
    "time": [
      1142.09,
      1147.91
    ],
    "en": [
      "Unlike HSRP, it’s an open standard, so it can be run on devices from any maker."
    ],
    "ru": [
      "В отличие от HSRP, это открытый стандарт, поэтому его можно запускать на устройствах любого производителя."
    ]
  },
  {
    "time": [
      1147.91,
      1152.36
    ],
    "en": [
      "Cisco routers run it too, so you can use either HSRP or VRRP."
    ],
    "ru": [
      "Маршрутизаторы Cisco также используют его, поэтому вы можете использовать HSRP или VRRP."
    ]
  },
  {
    "time": [
      1152.36,
      1159.19
    ],
    "en": [
      "Honestly, in terms of functionality they are nearly identical, with just a few differences."
    ],
    "ru": [
      "Честно говоря, по функциональности они практически идентичны, с небольшими отличиями."
    ]
  },
  {
    "time": [
      1159.19,
      1164.21
    ],
    "en": [
      "Instead of an active and standby router, a master and backup router are elected."
    ],
    "ru": [
      "Вместо активного и резервного маршрутизатора выбираются главный и резервный маршрутизаторы."
    ]
  },
  {
    "time": [
      1164.21,
      1167.73
    ],
    "en": [
      "The function is the same, just the names are different."
    ],
    "ru": [
      "Функция такая же, только названия разные."
    ]
  },
  {
    "time": [
      1167.73,
      1174.12
    ],
    "en": [
      "Master is equivalent to HSRP’s active, and backup is equivalent to HSRP’s standby."
    ],
    "ru": [
      "Мастер эквивалентен активному HSRP, а резервное копирование эквивалентно резервному HSRP."
    ]
  },
  {
    "time": [
      1174.12,
      1179.7
    ],
    "en": [
      "The IPv4 multicast address used is different as well, 224.0.0.18."
    ],
    "ru": [
      "Используемый многоадресный IPv4-адрес также отличается: 224.0.0.18."
    ]
  },
  {
    "time": [
      1179.7,
      1185.02
    ],
    "en": [
      "Again, use the flashcards to remember little details like this."
    ],
    "ru": [
      "Опять же, используйте карточки, чтобы запомнить такие мелкие детали."
    ]
  },
  {
    "time": [
      1185.02,
      1187.72
    ],
    "en": [
      "The virtual MAC address format is different, too."
    ],
    "ru": [
      "Формат виртуального MAC-адреса тоже отличается."
    ]
  },
  {
    "time": [
      1187.72,
      1194.71
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
      1187.72,
      1194.71
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
      1194.71,
      1197.87
    ],
    "en": [
      "Let’s try a bit more of a challenge."
    ],
    "ru": [
      "Давайте попробуем посложнее."
    ]
  },
  {
    "time": [
      1197.87,
      1202.37
    ],
    "en": [
      "What if I configured VRRP group 200, instead of group 1."
    ],
    "ru": [
      "Что, если бы я настроил группу 200 VRRP вместо группы 1."
    ]
  },
  {
    "time": [
      1202.37,
      1204.84
    ],
    "en": [
      "What would the virtual MAC address be?"
    ],
    "ru": [
      "Каким будет виртуальный MAC-адрес?"
    ]
  },
  {
    "time": [
      1204.84,
      1207.97
    ],
    "en": [
      "You have to convert 200 to hexadecimal."
    ],
    "ru": [
      "Вы должны преобразовать 200 в шестнадцатеричное."
    ]
  },
  {
    "time": [
      1207.97,
      1213.49
    ],
    "en": [
      "Pause the video to try that, do a Google search if you don’t remember how hexadecimal works."
    ],
    "ru": [
      "Чтобы попробовать, приостановите просмотр видео или выполните поиск в Google, если не помните, как работает шестнадцатеричный код."
    ]
  },
  {
    "time": [
      1213.49,
      1221.789
    ],
    "en": [
      "Okay, the answer is 0000 5e00 01c8."
    ],
    "ru": [
      "Хорошо, ответ - 0000 5e00 01c8."
    ]
  },
  {
    "time": [
      1221.789,
      1226.07
    ],
    "en": [
      "Hexadecimal c8 is equal to 200 in decimal."
    ],
    "ru": [
      "Шестнадцатеричный c8 равен 200 в десятичном."
    ]
  },
  {
    "time": [
      1226.07,
      1231.95
    ],
    "en": [
      "Just like HSRP, although VRRP can’t perform load-balancing for hosts in a single subnet,"
    ],
    "ru": [
      "Как и HSRP, хотя VRRP не может выполнять балансировку нагрузки для хостов в одной подсети,"
    ]
  },
  {
    "time": [
      1231.95,
      1237.47
    ],
    "en": [
      "it can load balance between different subnets by configuring a different master router in each subnet."
    ],
    "ru": [
      "он может балансировать нагрузку между разными подсетями, настраивая отдельный главный маршрутизатор в каждой подсети."
    ]
  },
  {
    "time": [
      1237.47,
      1243.809
    ],
    "en": [
      "each subnet. Here’s the same diagram as before, showing load-balancing between the two subnets."
    ],
    "ru": [
      "каждую подсеть. Вот та же диаграмма, что и раньше, демонстрирующая балансировку нагрузки между двумя подсетями."
    ]
  },
  {
    "time": [
      1243.809,
      1249.929
    ],
    "en": [
      "All that’s different is that ‘master’ and ‘backup’ are used instead of ‘active’ and ‘standby’."
    ],
    "ru": [
      "Единственное отличие состоит в том, что вместо «активный» и «резервный» используются «главный» и «резервный»."
    ]
  },
  {
    "time": [
      1249.929,
      1255.039
    ],
    "en": [
      "and ‘standby’. Before moving on, I just want to mention one point separate from FHRPs."
    ],
    "ru": [
      "и «режим ожидания». Прежде чем двигаться дальше, я просто хочу упомянуть один момент отдельно от FHRP."
    ]
  },
  {
    "time": [
      1255.039,
      1262.44
    ],
    "en": [
      "Notice that all hosts in VLAN1 are in the same subnet, 172.16.1.0/24, and all hosts"
    ],
    "ru": [
      "Обратите внимание, что все хосты в VLAN1 находятся в одной подсети, 172.16.1.0/24, и все хосты"
    ]
  },
  {
    "time": [
      1262.44,
      1268.389
    ],
    "en": [
      "in VLAN2 are in the same subnet, 172.16.2.0/24."
    ],
    "ru": [
      "в VLAN2 находятся в той же подсети, 172.16.2.0/24."
    ]
  },
  {
    "time": [
      1268.389,
      1271.549
    ],
    "en": [
      "This is how subnets and VLANs are used."
    ],
    "ru": [
      "Так используются подсети и VLAN."
    ]
  },
  {
    "time": [
      1271.549,
      1276.441
    ],
    "en": [
      "Subnets divide the network at Layer 3, and VLANs divide the network at Layer 2, and they"
    ],
    "ru": [
      "Подсети разделяют сеть на уровне 3, а виртуальные локальные сети разделяют сеть на уровне 2, и они"
    ]
  },
  {
    "time": [
      1276.441,
      1280.23
    ],
    "en": [
      "work together, each subnet being its own VLAN."
    ],
    "ru": [
      "работают вместе, каждая подсеть является своей собственной VLAN."
    ]
  },
  {
    "time": [
      1280.23,
      1286.08
    ],
    "en": [
      "You might have noticed that throughout this course, but I just wanted to point it out."
    ],
    "ru": [
      "Вы могли заметить это на протяжении всего курса, но я просто хотел указать на это."
    ]
  },
  {
    "time": [
      1286.08,
      1292.57
    ],
    "en": [
      "Before moving on to the last FHRP, here’s a comparison chart of HSRP and VRRP."
    ],
    "ru": [
      "Прежде чем перейти к последнему FHRP, вот сравнительная таблица HSRP и VRRP."
    ]
  },
  {
    "time": [
      1292.57,
      1295.39
    ],
    "en": [
      "In terms of functionality, they’re nearly the same."
    ],
    "ru": [
      "По функциональности они практически одинаковы."
    ]
  },
  {
    "time": [
      1295.39,
      1302.159
    ],
    "en": [
      "But remember the different terminology, multicast IP addresses, and virtual MAC addresses."
    ],
    "ru": [
      "Но помните различную терминологию, многоадресные IP-адреса и виртуальные MAC-адреса."
    ]
  },
  {
    "time": [
      1302.159,
      1307.51
    ],
    "en": [
      "Also remember that HSRP is Cisco proprietary, whereas VRRP is an open standard that can"
    ],
    "ru": [
      "Также помните, что HSRP является собственностью Cisco, тогда как VRRP - это открытый стандарт, который может"
    ]
  },
  {
    "time": [
      1307.51,
      1311.24
    ],
    "en": [
      "run on any network device that supports it."
    ],
    "ru": [
      "работать на любом сетевом устройстве, которое его поддерживает."
    ]
  },
  {
    "time": [
      1311.24,
      1315.1
    ],
    "en": [
      "Next up, we’ll take a look at GLBP."
    ],
    "ru": [
      "Далее мы рассмотрим GLBP."
    ]
  },
  {
    "time": [
      1315.1,
      1321.149
    ],
    "en": [
      "The final FHRP you should be aware of is GLBP, Gateway Load Balancing Protocol."
    ],
    "ru": [
      "Последний FHRP, о котором вы должны знать, - это GLBP, протокол балансировки нагрузки шлюза."
    ]
  },
  {
    "time": [
      1321.149,
      1325.61
    ],
    "en": [
      "This one is a bit different than HSRP and VRRP."
    ],
    "ru": [
      "Этот немного отличается от HSRP и VRRP."
    ]
  },
  {
    "time": [
      1325.61,
      1330.71
    ],
    "en": [
      "Like HSRP, it is Cisco proprietary, it only runs on Cisco devices."
    ],
    "ru": [
      "Как и HSRP, это проприетарный протокол Cisco, он работает только на устройствах Cisco."
    ]
  },
  {
    "time": [
      1330.71,
      1337.5
    ],
    "en": [
      "Here’s the big difference: it load balances among multiple routers within a single subnet."
    ],
    "ru": [
      "Вот большая разница: он распределяет нагрузку между несколькими маршрутизаторами в одной подсети."
    ]
  },
  {
    "time": [
      1337.5,
      1344.86
    ],
    "en": [
      "For example, if PC1 and PC2 are both in VLAN1, PC1 can use R1 as its default gateway, and"
    ],
    "ru": [
      "Например, если ПК1 и ПК2 находятся в сети VLAN1, ПК1 может использовать R1 в качестве шлюза по умолчанию и"
    ]
  },
  {
    "time": [
      1344.86,
      1348.299
    ],
    "en": [
      "PC2 can use R2 as its default gateway."
    ],
    "ru": [
      "ПК2 может использовать R2 в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      1348.299,
      1353.58
    ],
    "en": [
      "This is different than HSRP and VRRP, in which all hosts in the same subnet must use the"
    ],
    "ru": [
      "Это отличается от HSRP и VRRP, в которых все хосты в одной подсети должны использовать"
    ]
  },
  {
    "time": [
      1353.58,
      1356.95
    ],
    "en": [
      "same router as the default gateway for the subnet."
    ],
    "ru": [
      "тот же маршрутизатор, что и шлюз по умолчанию для подсети."
    ]
  },
  {
    "time": [
      1356.95,
      1363.429
    ],
    "en": [
      "In GLBP, a single AVG, Active Virtual Gateway, is elected for the subnet."
    ],
    "ru": [
      "В GLBP для подсети выбирается один AVG, активный виртуальный шлюз."
    ]
  },
  {
    "time": [
      1363.429,
      1371.47
    ],
    "en": [
      "Then, up to four AVFs, active virtual forwarders, are assigned by the AVG, and the AVG itself"
    ],
    "ru": [
      "Затем AVG назначает до четырех активных виртуальных серверов пересылки, а сама AVG"
    ]
  },
  {
    "time": [
      1371.47,
      1374.21
    ],
    "en": [
      "can be an AVF also."
    ],
    "ru": [
      "также может быть АВФ."
    ]
  },
  {
    "time": [
      1374.21,
      1378.759
    ],
    "en": [
      "Each AVF acts as the default gateway for a portion of the hosts in the subnet."
    ],
    "ru": [
      "Каждый AVF действует как шлюз по умолчанию для части хостов в подсети."
    ]
  },
  {
    "time": [
      1378.759,
      1382.919
    ],
    "en": [
      "So, load balancing is achieved within a single subnet."
    ],
    "ru": [
      "Таким образом, балансировка нагрузки достигается в пределах одной подсети."
    ]
  },
  {
    "time": [
      1382.919,
      1390.519
    ],
    "en": [
      "The multicast IPv4 address is 224.0.0.102, same as HSRP version 2."
    ],
    "ru": [
      "IPv4-адрес многоадресной рассылки - 224.0.0.102, такой же, как HSRP версии 2."
    ]
  },
  {
    "time": [
      1390.519,
      1398.919
    ],
    "en": [
      "The virtual MAC address format is 0007 b400, followed by the GLBP group number and the AVF number."
    ],
    "ru": [
      "Формат виртуального MAC-адреса - 0007 b400, за которым следуют номер группы GLBP и номер AVF."
    ]
  },
  {
    "time": [
      1398.919,
      1405.85
    ],
    "en": [
      "AVF number. For example, what is the virtual MAC address of AVF number 1 in GLBP group 1?"
    ],
    "ru": [
      "Номер АВФ. Например, каков виртуальный MAC-адрес AVF номер 1 в группе 1 GLBP?"
    ]
  },
  {
    "time": [
      1405.85,
      1410.49
    ],
    "en": [
      "It’s 0007 b400 0101."
    ],
    "ru": [
      "Это 0007 b400 0101."
    ]
  },
  {
    "time": [
      1410.49,
      1417.82
    ],
    "en": [
      "So, the functions of GLBP are a bit more complicated than HSRP and VRRP, but for the purposes of"
    ],
    "ru": [
      "Итак, функции GLBP немного сложнее, чем HSRP и VRRP, но для целей"
    ]
  },
  {
    "time": [
      1417.82,
      1423.32
    ],
    "en": [
      "the CCNA remember that GLBP allows multiple active routers to load balance traffic within"
    ],
    "ru": [
      "CCNA помнят, что GLBP позволяет нескольким активным маршрутизаторам балансировать нагрузку трафика в пределах"
    ]
  },
  {
    "time": [
      1423.32,
      1429.96
    ],
    "en": [
      "a single subnet, and remember the multicast IP address and the virtual MAC address format."
    ],
    "ru": [
      "единственной подсети и запомните IP-адрес многоадресной рассылки и формат виртуального MAC-адреса."
    ]
  },
  {
    "time": [
      1429.96,
      1436.71
    ],
    "en": [
      "It might seem not so important, but for the CCNA exam definitely remember the IP and MAC addresses."
    ],
    "ru": [
      "Это может показаться не таким важным, но для сдачи экзамена CCNA обязательно запомните IP и MAC-адреса."
    ]
  },
  {
    "time": [
      1436.71,
      1441.28
    ],
    "en": [
      "addresses. Here’s that chart again, with GLBP filled in."
    ],
    "ru": [
      "адреса. Вот снова тот график с заполненным GLBP."
    ]
  },
  {
    "time": [
      1441.28,
      1447.52
    ],
    "en": [
      "If you remember the basic characteristics of HSRP, VRRP, and GLBP, and memorize the"
    ],
    "ru": [
      "Если вы помните основные характеристики HSRP, VRRP и GLBP и запомните"
    ]
  },
  {
    "time": [
      1447.52,
      1454.5
    ],
    "en": [
      "information in this chart, you’ll be ready to answer any questions about FHRPs on the CCNA exam."
    ],
    "ru": [
      "информацию в этой таблице, вы будете готовы ответить на любые вопросы о FHRP на экзамене CCNA."
    ]
  },
  {
    "time": [
      1454.5,
      1458.99
    ],
    "en": [
      "CCNA exam. However, as a little extra, I’m going to show you some very basic configurations for"
    ],
    "ru": [
      "Экзамен CCNA. Однако в качестве небольшого дополнения я покажу вам несколько очень простых конфигураций для"
    ]
  },
  {
    "time": [
      1458.99,
      1464.16
    ],
    "en": [
      "HSRP, so we can try it out in a lab in the next video."
    ],
    "ru": [
      "HSRP, поэтому мы можем опробовать его в лабораторных условиях в следующем видео."
    ]
  },
  {
    "time": [
      1464.16,
      1468.83
    ],
    "en": [
      "Although configuring HSRP isn’t part of the CCNA exam topics, getting some hands-on"
    ],
    "ru": [
      "Хотя настройка HSRP не входит в темы экзамена CCNA, некоторые практические"
    ]
  },
  {
    "time": [
      1468.83,
      1472.169
    ],
    "en": [
      "experience will help you understand how it works."
    ],
    "ru": [
      "опыт поможет понять, как это работает."
    ]
  },
  {
    "time": [
      1472.169,
      1477.19
    ],
    "en": [
      "So let’s do some basic configurations for HSRP."
    ],
    "ru": [
      "Итак, давайте сделаем некоторые базовые настройки для HSRP."
    ]
  },
  {
    "time": [
      1477.19,
      1482.34
    ],
    "en": [
      "To fit everything on the page and show the CLI at the same time I’ve simplified the network."
    ],
    "ru": [
      "Чтобы уместить все на странице и одновременно отображать интерфейс командной строки, я упростил сеть."
    ]
  },
  {
    "time": [
      1482.34,
      1487.84
    ],
    "en": [
      "network. We’ll be focusing on configuring R1 and R2 to use HSRP to provide a redundant default"
    ],
    "ru": [
      "сеть. Мы сосредоточимся на настройке R1 и R2 для использования HSRP для обеспечения избыточности по умолчанию."
    ]
  },
  {
    "time": [
      1487.84,
      1493.07
    ],
    "en": [
      "gateway address for the 172.16.0.0/24 subnet."
    ],
    "ru": [
      "адрес шлюза для подсети 172.16.0.0/24."
    ]
  },
  {
    "time": [
      1493.07,
      1499.929
    ],
    "en": [
      "I’ve already configured all of the interface IP addresses, so we just need to configure HSRP."
    ],
    "ru": [
      "Я уже настроил все IP-адреса интерфейсов, поэтому нам просто нужно настроить HSRP."
    ]
  },
  {
    "time": [
      1499.929,
      1504.669
    ],
    "en": [
      "HSRP. Note that I’m using .254 as the virtual IP this time, instead of .252."
    ],
    "ru": [
      "HSRP. Обратите внимание, что на этот раз в качестве виртуального IP-адреса я использую 0,254 вместо 0,252."
    ]
  },
  {
    "time": [
      1504.669,
      1508.37
    ],
    "en": [
      "So, let’s get started configuring R1."
    ],
    "ru": [
      "Итак, приступим к настройке R1."
    ]
  },
  {
    "time": [
      1508.37,
      1514.35
    ],
    "en": [
      "HSRP is configured directly on the interface, G0/0 in this case."
    ],
    "ru": [
      "HSRP настраивается непосредственно на интерфейсе, в данном случае G0 / 0."
    ]
  },
  {
    "time": [
      1514.35,
      1518.22
    ],
    "en": [
      "Make sure you configure it on the correct interface, the one connected to the network"
    ],
    "ru": [
      "Убедитесь, что вы настроили его на правильном интерфейсе, подключенном к сети."
    ]
  },
  {
    "time": [
      1518.22,
      1521.009
    ],
    "en": [
      "it is acting as the default gateway for."
    ],
    "ru": [
      "он действует как шлюз по умолчанию для."
    ]
  },
  {
    "time": [
      1521.009,
      1525.22
    ],
    "en": [
      "HSRP is configured with the STANDBY command."
    ],
    "ru": [
      "HSRP настраивается с помощью команды STANDBY."
    ]
  },
  {
    "time": [
      1525.22,
      1528.73
    ],
    "en": [
      "I used the question mark to see what options are available."
    ],
    "ru": [
      "Я использовал вопросительный знак, чтобы узнать, какие варианты доступны."
    ]
  },
  {
    "time": [
      1528.73,
      1534.13
    ],
    "en": [
      "There are many more than this, but the one we want to use is this one, group number."
    ],
    "ru": [
      "Их гораздо больше, но мы хотим использовать именно этот, номер группы."
    ]
  },
  {
    "time": [
      1534.13,
      1541.529
    ],
    "en": [
      "Note that HSRP version 1 is the default, so the range of groups available is 0 through 255."
    ],
    "ru": [
      "Обратите внимание, что по умолчанию используется HSRP версии 1, поэтому диапазон доступных групп составляет от 0 до 255."
    ]
  },
  {
    "time": [
      1541.529,
      1546.929
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
      1541.529,
      1546.929
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
      1546.929,
      1550.39
    ],
    "en": [
      "Actually, let me show you how to change it to version 2."
    ],
    "ru": [
      "Собственно, позвольте мне показать вам, как его поменять на версию 2."
    ]
  },
  {
    "time": [
      1550.39,
      1553.799
    ],
    "en": [
      "The command is STANDBY VERSION 2."
    ],
    "ru": [
      "Команда - РЕЗЕРВНАЯ ВЕРСИЯ 2."
    ]
  },
  {
    "time": [
      1553.799,
      1561.379
    ],
    "en": [
      "If I check the STANDBY command again, you can see that the group number range is now 0 through 4095."
    ],
    "ru": [
      "Если я снова проверю команду STANDBY, вы увидите, что диапазон номеров групп теперь составляет от 0 до 4095."
    ]
  },
  {
    "time": [
      1561.379,
      1568.259
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
      1561.379,
      1568.259
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
      1568.259,
      1573.409
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
      1568.259,
      1573.409
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
      1573.409,
      1576.46
    ],
    "en": [
      "to the VLAN number used for the subnet."
    ],
    "ru": [
      "на номер VLAN, используемый для подсети."
    ]
  },
  {
    "time": [
      1576.46,
      1581.059
    ],
    "en": [
      "Note that this group number does have to match between the two routers, that’s important."
    ],
    "ru": [
      "Обратите внимание, что этот номер группы должен совпадать между двумя маршрутизаторами, что важно."
    ]
  },
  {
    "time": [
      1581.059,
      1584.96
    ],
    "en": [
      "So, I used the question mark again to check the options available here."
    ],
    "ru": [
      "Итак, я снова использовал вопросительный знак, чтобы проверить доступные здесь варианты."
    ]
  },
  {
    "time": [
      1584.96,
      1587.01
    ],
    "en": [
      "We’ll go over three."
    ],
    "ru": [
      "Мы перейдем к трем."
    ]
  },
  {
    "time": [
      1587.01,
      1590.269
    ],
    "en": [
      "IP, PREEMPT, and PRIORITY."
    ],
    "ru": [
      "IP, PREEMPT и PRIORITY."
    ]
  },
  {
    "time": [
      1590.269,
      1598.559
    ],
    "en": [
      "First up, you configure the virtual IP with this command, STANDBY, group number, IP, followed"
    ],
    "ru": [
      "Сначала вы настраиваете виртуальный IP-адрес с помощью этой команды, STANDBY, номер группы, IP, а затем"
    ]
  },
  {
    "time": [
      1598.559,
      1602.55
    ],
    "en": [
      "by the IP address you want to use as the default gateway."
    ],
    "ru": [
      "по IP-адресу, который вы хотите использовать в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      1602.55,
      1611.159
    ],
    "en": [
      "Then I used the PRIORITY command, as you can see the range is 0 to 255, and I set R1’s priority to 200."
    ],
    "ru": [
      "Затем я использовал команду PRIORITY, как вы можете видеть, диапазон от 0 до 255, и я установил приоритет R1 на 200."
    ]
  },
  {
    "time": [
      1611.159,
      1612.639
    ],
    "en": [
      "priority to 200. What does priority do?"
    ],
    "ru": [
      "приоритет до 200. Что делает приоритет?"
    ]
  },
  {
    "time": [
      1612.639,
      1616.86
    ],
    "en": [
      "It’s used to determine which router will be the active router."
    ],
    "ru": [
      "Он используется для определения того, какой маршрутизатор будет активным."
    ]
  },
  {
    "time": [
      1616.86,
      1619.36
    ],
    "en": [
      "The active router is determined in this order."
    ],
    "ru": [
      "Активный маршрутизатор определяется в таком порядке."
    ]
  },
  {
    "time": [
      1619.36,
      1625.019
    ],
    "en": [
      "First, the router with the highest HSRP priority in the group will become the active router."
    ],
    "ru": [
      "Во-первых, активным маршрутизатором станет маршрутизатор с наивысшим приоритетом HSRP в группе."
    ]
  },
  {
    "time": [
      1625.019,
      1627.549
    ],
    "en": [
      "The default priority is 100."
    ],
    "ru": [
      "Приоритет по умолчанию - 100."
    ]
  },
  {
    "time": [
      1627.549,
      1633.74
    ],
    "en": [
      "If the routers have the same priority, the router with the highest IP address will become the active router."
    ],
    "ru": [
      "Если маршрутизаторы имеют одинаковый приоритет, активным маршрутизатором станет маршрутизатор с наивысшим IP-адресом."
    ]
  },
  {
    "time": [
      1633.74,
      1643.419
    ],
    "en": [
      "the active router. In this case R1’s IP address, 172.16.0.253, is higher than R2’s IP address, 172.16.0.252."
    ],
    "ru": [
      "активный роутер. В этом случае IP-адрес R1, 172.16.0.253, выше, чем IP-адрес R2, 172.16.0.252."
    ]
  },
  {
    "time": [
      1643.419,
      1648.79
    ],
    "en": [
      "So, even without configuring the priority R1 would still become the active router, but"
    ],
    "ru": [
      "Таким образом, даже без настройки приоритета R1 все равно станет активным маршрутизатором, но"
    ]
  },
  {
    "time": [
      1648.79,
      1650.779
    ],
    "en": [
      "I configured it anyway."
    ],
    "ru": [
      "Я все равно настроил."
    ]
  },
  {
    "time": [
      1650.779,
      1654.049
    ],
    "en": [
      "Finally, I enabled ‘preemption’."
    ],
    "ru": [
      "Наконец, я включил «вытеснение»."
    ]
  },
  {
    "time": [
      1654.049,
      1658.62
    ],
    "en": [
      "Enabling the PREEMPT command causes the router to take the role of active router, even if"
    ],
    "ru": [
      "Включение команды PREEMPT заставляет маршрутизатор выполнять роль активного маршрутизатора, даже если"
    ]
  },
  {
    "time": [
      1658.62,
      1665.83
    ],
    "en": [
      "another router already has the role, although the preempting router must have a higher priority or IP address."
    ],
    "ru": [
      "другой маршрутизатор уже выполняет эту роль, хотя вытесняющий маршрутизатор должен иметь более высокий приоритет или IP-адрес."
    ]
  },
  {
    "time": [
      1665.83,
      1670.309
    ],
    "en": [
      "or IP address. For example, let’s say R1 is the active router and R2 is the standby router."
    ],
    "ru": [
      "или IP-адрес. Например, предположим, что R1 - активный маршрутизатор, а R2 - резервный маршрутизатор."
    ]
  },
  {
    "time": [
      1670.309,
      1675.259
    ],
    "en": [
      "If an error causes R1 to restart, R2 will become the active router."
    ],
    "ru": [
      "Если ошибка вызывает перезапуск R1, R2 станет активным маршрутизатором."
    ]
  },
  {
    "time": [
      1675.259,
      1681.019
    ],
    "en": [
      "When R1 comes back online, if preemption is not enabled R2 will remain the active router"
    ],
    "ru": [
      "Когда R1 возвращается в сеть, если приоритетное прерывание не включено, R2 останется активным маршрутизатором."
    ]
  },
  {
    "time": [
      1681.019,
      1683.129
    ],
    "en": [
      "and R1 will be the standby."
    ],
    "ru": [
      "и R1 будет резервным."
    ]
  },
  {
    "time": [
      1683.129,
      1688.071
    ],
    "en": [
      "However, with preemption enabled R1 will take back its role as the active router, because"
    ],
    "ru": [
      "Однако с включенным приоритетом R1 вернет себе роль активного маршрутизатора, потому что"
    ]
  },
  {
    "time": [
      1688.071,
      1690.759
    ],
    "en": [
      "it has the higher priority."
    ],
    "ru": [
      "он имеет более высокий приоритет."
    ]
  },
  {
    "time": [
      1690.759,
      1695.59
    ],
    "en": [
      "Note that you only need to configure preemption on the router that you want to become the active router."
    ],
    "ru": [
      "Обратите внимание, что вам нужно настроить приоритетное прерывание только на том маршрутизаторе, который вы хотите сделать активным."
    ]
  },
  {
    "time": [
      1695.59,
      1700.331
    ],
    "en": [
      "active router. Even if I don’t configure preemption on R2, R1 will still be able to preempt R2 and"
    ],
    "ru": [
      "активный роутер. Даже если я не настрою приоритетное прерывание на R2, R1 все равно сможет вытеснять R2 и"
    ]
  },
  {
    "time": [
      1700.331,
      1703.039
    ],
    "en": [
      "take back the active role."
    ],
    "ru": [
      "вернуть активную роль."
    ]
  },
  {
    "time": [
      1703.039,
      1704.36
    ],
    "en": [
      "Now let’s configure R2."
    ],
    "ru": [
      "Теперь давайте настроим R2."
    ]
  },
  {
    "time": [
      1704.36,
      1710.62
    ],
    "en": [
      "First up, I enabled HSRP version 2 on R2’s G0/0 interface."
    ],
    "ru": [
      "Сначала я включил HSRP версии 2 на интерфейсе R2 G0 / 0."
    ]
  },
  {
    "time": [
      1710.62,
      1717.169
    ],
    "en": [
      "This is important, HSRP version 1 and version 2 are not compatible, so if R1 uses version"
    ],
    "ru": [
      "Это важно, HSRP версии 1 и версии 2 несовместимы, поэтому, если R1 использует версию"
    ]
  },
  {
    "time": [
      1717.169,
      1722.49
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
      1717.169,
      1722.49
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
      1722.49,
      1729.309
    ],
    "en": [
      "Next I configured the same virtual IP as on R1, 172.16.0.254."
    ],
    "ru": [
      "Затем я настроил тот же виртуальный IP-адрес, что и на R1, 172.16.0.254."
    ]
  },
  {
    "time": [
      1729.309,
      1733.74
    ],
    "en": [
      "The next two commands, setting the priority and preemption, are actually unnecessary."
    ],
    "ru": [
      "Следующие две команды, устанавливающие приоритет и вытеснение, на самом деле не нужны."
    ]
  },
  {
    "time": [
      1733.74,
      1738.879
    ],
    "en": [
      "R1 already has a higher priority than R2, and preemption doesn’t need to be enabled"
    ],
    "ru": [
      "R1 уже имеет более высокий приоритет, чем R2, и не нужно включать приоритетное прерывание."
    ]
  },
  {
    "time": [
      1738.879,
      1740.669
    ],
    "en": [
      "on the standby router."
    ],
    "ru": [
      "на резервном роутере."
    ]
  },
  {
    "time": [
      1740.669,
      1745.14
    ],
    "en": [
      "But I configured them anyway, so the configuration is consistent between the two routers, but"
    ],
    "ru": [
      "Но я все равно их настроил, поэтому конфигурация одинакова для двух маршрутизаторов, но"
    ]
  },
  {
    "time": [
      1745.14,
      1748.429
    ],
    "en": [
      "it doesn’t really matter."
    ],
    "ru": [
      "это не имеет значения."
    ]
  },
  {
    "time": [
      1748.429,
      1752.029
    ],
    "en": [
      "Finally let’s take a look at the output of SHOW STANDBY."
    ],
    "ru": [
      "Наконец, давайте посмотрим на результат SHOW STANDBY."
    ]
  },
  {
    "time": [
      1752.029,
      1756.57
    ],
    "en": [
      "This is the output from both R1 and R2, let’s just take a look at R1."
    ],
    "ru": [
      "Это результат работы R1 и R2, давайте просто посмотрим на R1."
    ]
  },
  {
    "time": [
      1756.57,
      1762.74
    ],
    "en": [
      "First up, notice the HSRP group number of 1 and that version 2 is being used."
    ],
    "ru": [
      "Прежде всего, обратите внимание, что номер группы HSRP равен 1, и что используется версия 2."
    ]
  },
  {
    "time": [
      1762.74,
      1765.85
    ],
    "en": [
      "The state is active, because R1 is the active router."
    ],
    "ru": [
      "Состояние активно, потому что R1 является активным маршрутизатором."
    ]
  },
  {
    "time": [
      1765.85,
      1770.21
    ],
    "en": [
      "Here the virtual IP address we configured is displayed."
    ],
    "ru": [
      "Здесь отображается виртуальный IP-адрес, который мы настроили."
    ]
  },
  {
    "time": [
      1770.21,
      1774.929
    ],
    "en": [
      "These two lines display the virtual MAC address, it’s the default one."
    ],
    "ru": [
      "В этих двух строках отображается виртуальный MAC-адрес, он используется по умолчанию."
    ]
  },
  {
    "time": [
      1774.929,
      1777.1
    ],
    "en": [
      "Here are the HSRP timers."
    ],
    "ru": [
      "Вот таймеры HSRP."
    ]
  },
  {
    "time": [
      1777.1,
      1781.07
    ],
    "en": [
      "We didn’t configure these so they are the default values."
    ],
    "ru": [
      "Мы не настраивали их, поэтому они являются значениями по умолчанию."
    ]
  },
  {
    "time": [
      1781.07,
      1785.509
    ],
    "en": [
      "Preemption is enabled, because we configured STANDBY 1 PREEMPT."
    ],
    "ru": [
      "Вытеснение включено, потому что мы настроили STANDBY 1 PREEMPT."
    ]
  },
  {
    "time": [
      1785.509,
      1789.57
    ],
    "en": [
      "Active router is local, because R1 itself is the active router."
    ],
    "ru": [
      "Активный маршрутизатор является локальным, поскольку сам R1 является активным маршрутизатором."
    ]
  },
  {
    "time": [
      1789.57,
      1795.289
    ],
    "en": [
      "The standby router is 172.16.0.252, which is R2."
    ],
    "ru": [
      "Резервный маршрутизатор - 172.16.0.252, то есть R2."
    ]
  },
  {
    "time": [
      1795.289,
      1799.52
    ],
    "en": [
      "And finally here is the priority value of 200 that we configured."
    ],
    "ru": [
      "И, наконец, это значение приоритета 200, которое мы настроили."
    ]
  },
  {
    "time": [
      1799.52,
      1803.85
    ],
    "en": [
      "If you want to take a look at the output of the command for R2 also, pause the video."
    ],
    "ru": [
      "Если вы хотите также взглянуть на вывод команды для R2, ​​приостановите видео."
    ]
  },
  {
    "time": [
      1803.85,
      1812.08
    ],
    "en": [
      "Okay, that’s all we’ll cover about HSRP configuration, in the lab video we’ll get more hands on."
    ],
    "ru": [
      "Хорошо, это все, что мы расскажем о конфигурации HSRP, в лабораторном видео мы познакомимся с другими."
    ]
  },
  {
    "time": [
      1812.08,
      1816.61
    ],
    "en": [
      "more hands on. Before moving on to the quiz, let’s review what we covered in this video."
    ],
    "ru": [
      "больше рук. Прежде чем перейти к викторине, давайте рассмотрим то, что мы рассмотрели в этом видео."
    ]
  },
  {
    "time": [
      1816.61,
      1821.769
    ],
    "en": [
      "First I gave an introduction to the purpose and basic function of FHRPs, which is to provide"
    ],
    "ru": [
      "Сначала я представил цель и основную функцию FHRP, которая заключается в предоставлении"
    ]
  },
  {
    "time": [
      1821.769,
      1824.74
    ],
    "en": [
      "a redundant default gateway for a subnet."
    ],
    "ru": [
      "резервный шлюз по умолчанию для подсети."
    ]
  },
  {
    "time": [
      1824.74,
      1833.27
    ],
    "en": [
      "Then, I briefly introduced three different FHRPs, HSRP, VRRP, and GLBP."
    ],
    "ru": [
      "Затем я кратко представил три разных FHRP: HSRP, VRRP и GLBP."
    ]
  },
  {
    "time": [
      1833.27,
      1837.059
    ],
    "en": [
      "Make sure to learn the basic characteristics of each, and use the chart to memorize their"
    ],
    "ru": [
      "Обязательно изучите основные характеристики каждого из них и используйте таблицу, чтобы запомнить их"
    ]
  },
  {
    "time": [
      1837.059,
      1841.71
    ],
    "en": [
      "multicast IP addresses and virtual MAC addresses."
    ],
    "ru": [
      "многоадресные IP-адреса и виртуальные MAC-адреса."
    ]
  },
  {
    "time": [
      1841.71,
      1845.71
    ],
    "en": [
      "Then I introduced some very basic HSRP configuratons."
    ],
    "ru": [
      "Затем я представил несколько очень простых конфигураций HSRP."
    ]
  },
  {
    "time": [
      1845.71,
      1849.59
    ],
    "en": [
      "You probably won’t be asked about these commands on the exam, but getting some hands"
    ],
    "ru": [
      "Вас, вероятно, не спросят об этих командах на экзамене, но вы получите несколько рук"
    ]
  },
  {
    "time": [
      1849.59,
      1854.64
    ],
    "en": [
      "on practice will help you understand the topic, so in the next video we’ll do a simple HSRP"
    ],
    "ru": [
      "на практике поможет вам разобраться в теме, поэтому в следующем видео мы проведем простой HSRP"
    ]
  },
  {
    "time": [
      1854.64,
      1858.35
    ],
    "en": [
      "lab, taking a look at preemption and such."
    ],
    "ru": [
      "lab, взглянув на приоритетное обслуживание и тому подобное."
    ]
  },
  {
    "time": [
      1858.35,
      1860.559
    ],
    "en": [
      "Here are the commands we used."
    ],
    "ru": [
      "Вот используемые нами команды."
    ]
  },
  {
    "time": [
      1860.559,
      1865.619
    ],
    "en": [
      "STANDBY VERSION 2, to configure the router to use HSRP version 2."
    ],
    "ru": [
      "РЕЗЕРВНАЯ ВЕРСИЯ 2, чтобы настроить маршрутизатор для использования HSRP версии 2."
    ]
  },
  {
    "time": [
      1865.619,
      1871.299
    ],
    "en": [
      "STANDBY IP, to set the virtual IP address that will be used as the default gateway."
    ],
    "ru": [
      "STANDBY IP, чтобы установить виртуальный IP-адрес, который будет использоваться в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      1871.299,
      1875.74
    ],
    "en": [
      "STANDBY PRIORITY, to help control which router becomes the active router."
    ],
    "ru": [
      "STANDBY PRIORITY, чтобы помочь контролировать, какой маршрутизатор становится активным."
    ]
  },
  {
    "time": [
      1875.74,
      1882.6
    ],
    "en": [
      "And STANDBY PREEMPT, to cause the active router to take its role back if it recovers from a failure."
    ],
    "ru": [
      "И STANDBY PREEMPT, чтобы активный маршрутизатор вернул свою роль, если он восстанавливается после сбоя."
    ]
  },
  {
    "time": [
      1882.6,
      1886.86
    ],
    "en": [
      "a failure. Remember to watch until the end of today’s quiz for a bonus question from Boson ExSim"
    ],
    "ru": [
      "отказ. Не забудьте до конца сегодняшней викторины получить бонусный вопрос от Boson ExSim."
    ]
  },
  {
    "time": [
      1886.86,
      1892.33
    ],
    "en": [
      "for CCNA, by far the best practice exams you can get for the CCNA."
    ],
    "ru": [
      "для CCNA, безусловно, лучшие практические экзамены, которые вы можете сдать для CCNA."
    ]
  },
  {
    "time": [
      1892.33,
      1895.169
    ],
    "en": [
      "You can get Boson ExSim from the link in the video description."
    ],
    "ru": [
      "Вы можете получить Boson ExSim по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1895.169,
      1899.769
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
      1899.769,
      1904.059
    ],
    "en": [
      "Which of the following is an HSRP version 1 virtual MAC address?"
    ],
    "ru": [
      "Что из перечисленного является виртуальным MAC-адресом HSRP версии 1?"
    ]
  },
  {
    "time": [
      1904.059,
      1914.28
    ],
    "en": [
      "A, B, C, or D. Pause the video now to think about your answer."
    ],
    "ru": [
      "A, B, C или D. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1914.28,
      1921.08
    ],
    "en": [
      "The answer is D, 0000 0c07 acab."
    ],
    "ru": [
      "Ответ: D, 0000 0c07 acab."
    ]
  },
  {
    "time": [
      1921.08,
      1930.309
    ],
    "en": [
      "The HSRP version 1 virtual MAC address format is 0000 0c07 ac, followed by the group number,"
    ],
    "ru": [
      "Формат виртуального MAC-адреса HSRP версии 1: 0000 0c07 ac, за которым следует номер группы,"
    ]
  },
  {
    "time": [
      1930.309,
      1932.49
    ],
    "en": [
      "in this case AB."
    ],
    "ru": [
      "в данном случае AB."
    ]
  },
  {
    "time": [
      1932.49,
      1934.48
    ],
    "en": [
      "What is AB in decimal?"
    ],
    "ru": [
      "Что такое AB в десятичной системе счисления?"
    ]
  },
  {
    "time": [
      1934.48,
      1941.65
    ],
    "en": [
      "It’s 171, so in this case HSRP group number 171 was used."
    ],
    "ru": [
      "Это 171, поэтому в данном случае использовалась группа HSRP под номером 171."
    ]
  },
  {
    "time": [
      1941.65,
      1948.419
    ],
    "en": [
      "As for the incorrect answers, options A and C are HSRP version 2 virtual MAC addresses,"
    ],
    "ru": [
      "Что касается неправильных ответов, варианты A и C являются виртуальными MAC-адресами HSRP версии 2,"
    ]
  },
  {
    "time": [
      1948.419,
      1952.61
    ],
    "en": [
      "and option B does not follow any FHRP virtual MAC address format."
    ],
    "ru": [
      "а вариант B не соответствует формату виртуального MAC-адреса FHRP."
    ]
  },
  {
    "time": [
      1952.61,
      1956.72
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
      1956.72,
      1960.059
    ],
    "en": [
      "Which of the following is a VRRP virtual MAC address?"
    ],
    "ru": [
      "Что из перечисленного является виртуальным MAC-адресом VRRP?"
    ]
  },
  {
    "time": [
      1960.059,
      1968.48
    ],
    "en": [
      "A, B, C, or D. Pause the video to think about your answer."
    ],
    "ru": [
      "A, B, C или D. Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1968.48,
      1975.159
    ],
    "en": [
      "The answer is A, 0000 5e00 010a."
    ],
    "ru": [
      "Ответ: A, 0000 5e00 010a."
    ]
  },
  {
    "time": [
      1975.159,
      1983.82
    ],
    "en": [
      "The VRRP virtual MAC address format is 0000 5e00 01, followed by the group number."
    ],
    "ru": [
      "Формат виртуального MAC-адреса VRRP - 0000 5e00 01, за которым следует номер группы."
    ]
  },
  {
    "time": [
      1983.82,
      1986.539
    ],
    "en": [
      "What is hexadecimal 0a in decimal?"
    ],
    "ru": [
      "Что такое шестнадцатеричный 0a в десятичном?"
    ]
  },
  {
    "time": [
      1986.539,
      1993.379
    ],
    "en": [
      "It’s 10, so in this case VRRP was configured using group number 10."
    ],
    "ru": [
      "Это 10, поэтому в данном случае VRRP был настроен с использованием номера группы 10."
    ]
  },
  {
    "time": [
      1993.379,
      2000.7
    ],
    "en": [
      "Option B is a GLBP virtual MAC address, option C is an HSRP version 2 virtual MAC address,"
    ],
    "ru": [
      "Вариант B - виртуальный MAC-адрес GLBP, вариант C - виртуальный MAC-адрес HSRP версии 2,"
    ]
  },
  {
    "time": [
      2000.7,
      2004.919
    ],
    "en": [
      "and option D does not follow any FHRP virtual MAC address format."
    ],
    "ru": [
      "и вариант D не соответствует формату виртуального MAC-адреса FHRP."
    ]
  },
  {
    "time": [
      2004.919,
      2009.98
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
      2009.98,
      2014.529
    ],
    "en": [
      "Which of the following are valid VRRP router roles? Select two."
    ],
    "ru": [
      "Что из перечисленного является допустимыми ролями маршрутизатора VRRP? Выберите два."
    ]
  },
  {
    "time": [
      2014.529,
      2017.929
    ],
    "en": [
      "Select two. A, active. B, backup."
    ],
    "ru": [
      "Выберите два. А, активный. Б, резервное копирование."
    ]
  },
  {
    "time": [
      2017.929,
      2021.58
    ],
    "en": [
      "B, backup. C, active virtual gateway. D, master."
    ],
    "ru": [
      "Б, резервное копирование. C, активный виртуальный шлюз. D, мастер."
    ]
  },
  {
    "time": [
      2021.58,
      2023.21
    ],
    "en": [
      "D, master. E, standby."
    ],
    "ru": [
      "D, мастер. E, в режиме ожидания."
    ]
  },
  {
    "time": [
      2023.21,
      2025.909
    ],
    "en": [
      "Or F, active virtual forwarder."
    ],
    "ru": [
      "Или F, активный виртуальный экспедитор."
    ]
  },
  {
    "time": [
      2025.909,
      2032.01
    ],
    "en": [
      "Pause the video to think about your answers."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своими ответами."
    ]
  },
  {
    "time": [
      2032.01,
      2035.279
    ],
    "en": [
      "The answers are B, backup and D, master."
    ],
    "ru": [
      "Ответы: B, резервный и D, главный."
    ]
  },
  {
    "time": [
      2035.279,
      2039.919
    ],
    "en": [
      "A, active and E, standby are HSRP router roles."
    ],
    "ru": [
      "A, активный и E, резервный - это роли маршрутизатора HSRP."
    ]
  },
  {
    "time": [
      2039.919,
      2046.279
    ],
    "en": [
      "C, active virtual gateway and F, active virtual forwarder, are GLBP router roles."
    ],
    "ru": [
      "C, активный виртуальный шлюз и F, активный виртуальный сервер пересылки, являются ролями маршрутизатора GLBP."
    ]
  },
  {
    "time": [
      2046.279,
      2049.05
    ],
    "en": [
      "VRRP uses master and backup routers."
    ],
    "ru": [
      "VRRP использует главный и резервный маршрутизаторы."
    ]
  },
  {
    "time": [
      2049.05,
      2053.58
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
      2053.58,
      2059.33
    ],
    "en": [
      "When the HSRP standby router becomes the new active router, what kind of messages does it send?"
    ],
    "ru": [
      "Когда резервный маршрутизатор HSRP становится новым активным маршрутизатором, какие сообщения он отправляет?"
    ]
  },
  {
    "time": [
      2059.33,
      2060.8
    ],
    "en": [
      "it send? Select the best answer."
    ],
    "ru": [
      "все кончено? Выберите лучший ответ."
    ]
  },
  {
    "time": [
      2060.8,
      2064.14
    ],
    "en": [
      "A, HSRP hello messages."
    ],
    "ru": [
      "A, приветственные сообщения HSRP."
    ]
  },
  {
    "time": [
      2064.14,
      2066.86
    ],
    "en": [
      "B, gratuitous ARP messages."
    ],
    "ru": [
      "B, бесплатные сообщения ARP."
    ]
  },
  {
    "time": [
      2066.86,
      2070.02
    ],
    "en": [
      "C, ARP request messages."
    ],
    "ru": [
      "C, сообщения запроса ARP."
    ]
  },
  {
    "time": [
      2070.02,
      2072.74
    ],
    "en": [
      "Or D, ARP reply messages."
    ],
    "ru": [
      "Или D, ответные сообщения ARP."
    ]
  },
  {
    "time": [
      2072.74,
      2079.01
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
      2079.01,
      2082.21
    ],
    "en": [
      "The answer is B, gratuitous ARP."
    ],
    "ru": [
      "Ответ - B, бесплатный ARP."
    ]
  },
  {
    "time": [
      2082.21,
      2087.95
    ],
    "en": [
      "Some other answers are not totally incorrect, but are not the best answer, let me explain."
    ],
    "ru": [
      "Некоторые другие ответы не являются полностью неправильными, но это не лучший ответ, позвольте мне объяснить."
    ]
  },
  {
    "time": [
      2087.95,
      2092.35
    ],
    "en": [
      "In Cisco’s questions, at the end it usually says ‘select the best answer’."
    ],
    "ru": [
      "В вопросах Cisco в конце обычно говорится «выберите лучший ответ»."
    ]
  },
  {
    "time": [
      2092.35,
      2098.17
    ],
    "en": [
      "That’s because some of the options aren’t totally incorrect, however they aren’t the best answer."
    ],
    "ru": [
      "Это потому, что некоторые варианты не совсем неверны, но это не лучший ответ."
    ]
  },
  {
    "time": [
      2098.17,
      2102.02
    ],
    "en": [
      "best answer. For example, option A is ‘HSRP Hello’."
    ],
    "ru": [
      "лучший ответ. Например, вариант A - «HSRP Hello»."
    ]
  },
  {
    "time": [
      2102.02,
      2105.31
    ],
    "en": [
      "Routers using HSRP always send Hello messages."
    ],
    "ru": [
      "Маршрутизаторы, использующие HSRP, всегда отправляют сообщения Hello."
    ]
  },
  {
    "time": [
      2105.31,
      2110.18
    ],
    "en": [
      "So, when the HSRP standby router becomes the new active router, it will continue sending"
    ],
    "ru": [
      "Таким образом, когда резервный маршрутизатор HSRP становится новым активным маршрутизатором, он продолжит отправку"
    ]
  },
  {
    "time": [
      2110.18,
      2114.88
    ],
    "en": [
      "HSRP hello messages, so A isn’t totally incorrect."
    ],
    "ru": [
      "Приветственные сообщения HSRP, поэтому A не является полностью неправильным."
    ]
  },
  {
    "time": [
      2114.88,
      2119.45
    ],
    "en": [
      "However B is the better answer, because it only sends these gratuitous ARP messages when"
    ],
    "ru": [
      "Однако B - лучший ответ, потому что он отправляет эти бесплатные сообщения ARP только тогда, когда"
    ]
  },
  {
    "time": [
      2119.45,
      2122.09
    ],
    "en": [
      "it becomes the new active router."
    ],
    "ru": [
      "он становится новым активным маршрутизатором."
    ]
  },
  {
    "time": [
      2122.09,
      2123.87
    ],
    "en": [
      "How about D, ARP reply?"
    ],
    "ru": [
      "Как насчет ответа D, ARP?"
    ]
  },
  {
    "time": [
      2123.87,
      2130.37
    ],
    "en": [
      "I told you that gratuitous ARP messages are a kind of ARP reply, so D isn’t totally incorrect."
    ],
    "ru": [
      "Я говорил вам, что беспричинные сообщения ARP - это своего рода ответ ARP, так что D не является полностью неправильным."
    ]
  },
  {
    "time": [
      2130.37,
      2133.95
    ],
    "en": [
      "incorrect. However, B is the better answer because it’s more specific."
    ],
    "ru": [
      "неверно. Однако B - лучший ответ, потому что он более конкретен."
    ]
  },
  {
    "time": [
      2133.95,
      2139.48
    ],
    "en": [
      "So, when taking the CCNA exam make sure you’re selecting the best answer, even if some of"
    ],
    "ru": [
      "Итак, при сдаче экзамена CCNA убедитесь, что вы выбираете лучший ответ, даже если некоторые из"
    ]
  },
  {
    "time": [
      2139.48,
      2142.18
    ],
    "en": [
      "the other options seem like they might be correct."
    ],
    "ru": [
      "другие варианты кажутся правильными."
    ]
  },
  {
    "time": [
      2142.18,
      2146.33
    ],
    "en": [
      "Let’s go to question 5."
    ],
    "ru": [
      "Перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      2146.33,
      2150.12
    ],
    "en": [
      "Which of the following statements accurately describes HSRP?"
    ],
    "ru": [
      "Какое из следующих утверждений точно описывает HSRP?"
    ]
  },
  {
    "time": [
      2150.12,
      2151.89
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
      2151.89,
      2157.53
    ],
    "en": [
      "A, it allows you to configure a different default gateway address on each end host."
    ],
    "ru": [
      "A, это позволяет вам настроить другой адрес шлюза по умолчанию для каждого конечного хоста."
    ]
  },
  {
    "time": [
      2157.53,
      2162.9
    ],
    "en": [
      "B, it allows multiple routers to load-balance traffic for hosts in a subnet."
    ],
    "ru": [
      "B, он позволяет нескольким маршрутизаторам балансировать нагрузку трафика для хостов в подсети."
    ]
  },
  {
    "time": [
      2162.9,
      2168.08
    ],
    "en": [
      "C, it provides a redundant default gateway address for hosts in a subnet."
    ],
    "ru": [
      "C, он предоставляет избыточный адрес шлюза по умолчанию для хостов в подсети."
    ]
  },
  {
    "time": [
      2168.08,
      2172.73
    ],
    "en": [
      "Or D, each router selects a unique virtual IP and MAC address."
    ],
    "ru": [
      "Или D, каждый маршрутизатор выбирает уникальный виртуальный IP-адрес и MAC-адрес."
    ]
  },
  {
    "time": [
      2172.73,
      2177.86
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
      2177.86,
      2182.63
    ],
    "en": [
      "The answer is C, it provides a redundant gateway for hosts in a subnet."
    ],
    "ru": [
      "Ответ - C, он обеспечивает резервный шлюз для хостов в подсети."
    ]
  },
  {
    "time": [
      2182.63,
      2187.12
    ],
    "en": [
      "Although you can configure a different active router in each subnet to provide load balancing,"
    ],
    "ru": [
      "Хотя вы можете настроить другой активный маршрутизатор в каждой подсети для обеспечения балансировки нагрузки,"
    ]
  },
  {
    "time": [
      2187.12,
      2190.62
    ],
    "en": [
      "it doesn’t provide load balancing for hosts in a single subnet."
    ],
    "ru": [
      "он не обеспечивает балансировку нагрузки для хостов в одной подсети."
    ]
  },
  {
    "time": [
      2190.62,
      2195.98
    ],
    "en": [
      "To do that, you would need to use Cisco’s GLBP, gateway load balancing protocol."
    ],
    "ru": [
      "Для этого вам понадобится Cisco GLBP, протокол балансировки нагрузки шлюза."
    ]
  },
  {
    "time": [
      2195.98,
      2198.39
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
      2198.39,
      2203.25
    ],
    "en": [
      "Let’s move on to a bonus question in Boson ExSim for CCNA."
    ],
    "ru": [
      "Перейдем к бонусному вопросу в Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2203.25,
      2208.06
    ],
    "en": [
      "Okay, here's today's Boson ExSim practice question."
    ],
    "ru": [
      "Хорошо, вот сегодняшний практический вопрос по Boson ExSim."
    ]
  },
  {
    "time": [
      2208.06,
      2211.95
    ],
    "en": [
      "By the way, I noticed that you can zoom in on ExSim, so hopefully this is easier for"
    ],
    "ru": [
      "Кстати, я заметил, что вы можете увеличивать ExSim, так что, надеюсь, это проще для"
    ]
  },
  {
    "time": [
      2211.95,
      2213.93
    ],
    "en": [
      "you to read now."
    ],
    "ru": [
      "читать сейчас."
    ]
  },
  {
    "time": [
      2213.93,
      2214.93
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
      2214.93,
      2219.0
    ],
    "en": [
      "Why of the following statements are true regarding HSRP? Select two choices."
    ],
    "ru": [
      "Почему следующие утверждения относительно HSRP верны? Выберите два варианта."
    ]
  },
  {
    "time": [
      2219.0,
      2223.38
    ],
    "en": [
      "Select two choices. Okay, so I'll let you read these options yourself."
    ],
    "ru": [
      "Выберите два варианта. Хорошо, я позволю вам ознакомиться с этими вариантами самостоятельно."
    ]
  },
  {
    "time": [
      2223.38,
      2228.64
    ],
    "en": [
      "Pause the video here, read the options, and select the two correct choices."
    ],
    "ru": [
      "Приостановите видео здесь, прочтите варианты и выберите два правильных варианта."
    ]
  },
  {
    "time": [
      2228.64,
      2232.33
    ],
    "en": [
      "Okay, hopefully you got the answers."
    ],
    "ru": [
      "Хорошо, надеюсь, вы получили ответы."
    ]
  },
  {
    "time": [
      2232.33,
      2233.55
    ],
    "en": [
      "So let's check them."
    ],
    "ru": [
      "Так что давайте их проверим."
    ]
  },
  {
    "time": [
      2233.55,
      2240.03
    ],
    "en": [
      "A, one router is elected as the master router, and all other routers are placed in the backup state."
    ],
    "ru": [
      "A, один маршрутизатор выбирается главным маршрутизатором, а все остальные маршрутизаторы переводятся в состояние резервного копирования."
    ]
  },
  {
    "time": [
      2240.03,
      2246.59
    ],
    "en": [
      "state. That is incorrect, master and backup, that terminology is used for VRRP, not HSRP."
    ],
    "ru": [
      "штат. Это неверно, главный и резервный, эта терминология используется для VRRP, а не для HSRP."
    ]
  },
  {
    "time": [
      2246.59,
      2255.0
    ],
    "en": [
      "B, in an HSRP group only one virtual IP address is used, but multiple virtual MAC addresses are used."
    ],
    "ru": [
      "B, в группе HSRP используется только один виртуальный IP-адрес, но используется несколько виртуальных MAC-адресов."
    ]
  },
  {
    "time": [
      2255.0,
      2257.05
    ],
    "en": [
      "are used. That is also incorrect."
    ],
    "ru": [
      "используются. Это тоже неверно."
    ]
  },
  {
    "time": [
      2257.05,
      2261.77
    ],
    "en": [
      "In a single HSRP group only one virtual MAC address is used."
    ],
    "ru": [
      "В одной группе HSRP используется только один виртуальный MAC-адрес."
    ]
  },
  {
    "time": [
      2261.77,
      2270.22
    ],
    "en": [
      "Okay, C. One router is elected as the active router and another router is elected as the standby router."
    ],
    "ru": [
      "Хорошо, C. Один маршрутизатор выбран как активный маршрутизатор, а другой маршрутизатор выбран как резервный маршрутизатор."
    ]
  },
  {
    "time": [
      2270.22,
      2273.74
    ],
    "en": [
      "standby router. That is correct, I believe, about HSRP."
    ],
    "ru": [
      "резервный роутер. Я считаю, что это правильно в отношении HSRP."
    ]
  },
  {
    "time": [
      2273.74,
      2281.71
    ],
    "en": [
      "D, in an HSRP group only one virtual IP address and one virtual MAC address is used."
    ],
    "ru": [
      "D, в группе HSRP используется только один виртуальный IP-адрес и один виртуальный MAC-адрес."
    ]
  },
  {
    "time": [
      2281.71,
      2283.22
    ],
    "en": [
      "That is correct also."
    ],
    "ru": [
      "Это тоже правильно."
    ]
  },
  {
    "time": [
      2283.22,
      2286.74
    ],
    "en": [
      "I think, but let's check option E as well."
    ],
    "ru": [
      "Думаю, но давайте проверим и вариант E."
    ]
  },
  {
    "time": [
      2286.74,
      2291.4
    ],
    "en": [
      "All routers in an HSRP group can participate by forwarding a portion of the traffic."
    ],
    "ru": [
      "Все маршрутизаторы в группе HSRP могут участвовать, перенаправляя часть трафика."
    ]
  },
  {
    "time": [
      2291.4,
      2296.16
    ],
    "en": [
      "Okay, that is not true for HSRP, but it is true for GLBP."
    ],
    "ru": [
      "Хорошо, это неверно для HSRP, но верно для GLBP."
    ]
  },
  {
    "time": [
      2296.16,
      2299.76
    ],
    "en": [
      "Okay, so I think C and D are correct."
    ],
    "ru": [
      "Хорошо, я думаю, что C и D правильные."
    ]
  },
  {
    "time": [
      2299.76,
      2302.52
    ],
    "en": [
      "Let's click on show answer."
    ],
    "ru": [
      "Нажимаем на показать ответ."
    ]
  },
  {
    "time": [
      2302.52,
      2304.7
    ],
    "en": [
      "And that is correct."
    ],
    "ru": [
      "И это правильно."
    ]
  },
  {
    "time": [
      2304.7,
      2308.34
    ],
    "en": [
      "So here is Boson's explanation, quite detailed."
    ],
    "ru": [
      "Итак, вот объяснение Бозона, довольно подробное."
    ]
  },
  {
    "time": [
      2308.34,
      2313.98
    ],
    "en": [
      "You can pause the video here if you want to read it, I highly recommend you do."
    ],
    "ru": [
      "Вы можете приостановить видео здесь, если хотите его прочитать, я настоятельно рекомендую вам это сделать."
    ]
  },
  {
    "time": [
      2313.98,
      2319.5
    ],
    "en": [
      "They also have a reference to some Cisco documentation here that you can read online for free."
    ],
    "ru": [
      "Здесь также есть ссылка на некоторую документацию Cisco, которую вы можете бесплатно прочитать в Интернете."
    ]
  },
  {
    "time": [
      2319.5,
      2325.25
    ],
    "en": [
      "And it states the category of the exam topics list, which is IP Connectivity."
    ],
    "ru": [
      "И в нем указана категория списка тем экзамена, а именно IP-соединение."
    ]
  },
  {
    "time": [
      2325.25,
      2329.5
    ],
    "en": [
      "Okay, so that's an example question from Boson ExSim."
    ],
    "ru": [
      "Хорошо, это пример вопроса от Boson ExSim."
    ]
  },
  {
    "time": [
      2329.5,
      2333.14
    ],
    "en": [
      "Boson ExSim is a great set of practice exams for the CCNA."
    ],
    "ru": [
      "Boson ExSim - отличный набор практических экзаменов для CCNA."
    ]
  },
  {
    "time": [
      2333.14,
      2337.85
    ],
    "en": [
      "I used it when studing for my CCNA, and I also used ExSim for CCNP when I studied for"
    ],
    "ru": [
      "Я использовал его, когда учился на моем CCNA, и я также использовал ExSim для CCNP, когда я учился на"
    ]
  },
  {
    "time": [
      2337.85,
      2341.08
    ],
    "en": [
      "my CCNP, and I highly recommend them."
    ],
    "ru": [
      "мой CCNP, и я их очень рекомендую."
    ]
  },
  {
    "time": [
      2341.08,
      2349.18
    ],
    "en": [
      "So if you want to get a copy of Boson ExSim for CCNA, follow the link in the video description."
    ],
    "ru": [
      "Так что если вы хотите получить копию Boson ExSim для CCNA, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2349.18,
      2352.16
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
      2352.16,
      2354.76
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
      2354.76,
      2359.74
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
      2359.74,
      2361.95
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
      2361.95,
      2366.3
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
      2366.3,
      2370.77
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
      2370.77,
      2375.78
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
      2375.78,
      2379.36
    ],
    "en": [
      "Recently I’ve noticed an increase in the number of channel members, and I’m so thankful"
    ],
    "ru": [
      "Недавно я заметил, что количество участников канала увеличилось, и я очень благодарен"
    ]
  },
  {
    "time": [
      2379.36,
      2384.43
    ],
    "en": [
      "to all of you, both JCNA and JCNP-level members."
    ],
    "ru": [
      "всем вам, как членам уровня JCNA, так и JCNP."
    ]
  },
  {
    "time": [
      2384.43,
      2391.07
    ],
    "en": [
      "Your support helps me keep making and releasing these videos every week, so I’m really grateful for your support."
    ],
    "ru": [
      "Ваша поддержка помогает мне продолжать снимать и публиковать эти видео каждую неделю, поэтому я очень благодарен за вашу поддержку."
    ]
  },
  {
    "time": [
      2391.07,
      2395.3
    ],
    "en": [
      "for your support. This is the list of JCNP-level members at the time of recording by the way, September"
    ],
    "ru": [
      "за вашу поддержку. Это список участников уровня JCNP на момент записи, кстати, сентябрь"
    ]
  },
  {
    "time": [
      2395.3,
      2400.62
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
      2395.3,
      2400.62
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
      2400.62,
      2402.25
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
      2402.25,
      2404.95
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
      2404.95,
      2408.92
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
      2408.92,
      2412.2
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
      2412.2,
      2415.2
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
      2415.2,
      2422.53
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
      2422.53,
      2422.53
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]