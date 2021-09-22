let items = [
  {
    "time": [
      1.8,
      4.18
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
      4.18,
      7.68
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
      7.68,
      11.99
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
      11.99,
      18.47
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
      18.47,
      20.579
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
      20.579,
      24.3
    ],
    "en": [
      "In this video we will continue our study of spanning tree."
    ],
    "ru": [
      "В этом видео мы продолжим изучение остовного дерева."
    ]
  },
  {
    "time": [
      24.3,
      30.81
    ],
    "en": [
      "In part 1 we focused on the basic purpose of spanning tree and how to calculate a spanning tree topology."
    ],
    "ru": [
      "В части 1 мы сосредоточились на основной цели связующего дерева и на том, как рассчитать топологию связующего дерева."
    ]
  },
  {
    "time": [
      30.81,
      36.489
    ],
    "en": [
      "tree topology. In this video we will look into more detail at the operation of spanning tree."
    ],
    "ru": [
      "топология дерева. В этом видео мы более подробно рассмотрим работу связующего дерева."
    ]
  },
  {
    "time": [
      36.489,
      39.8
    ],
    "en": [
      "First let’s see what we’ll cover in this video."
    ],
    "ru": [
      "Сначала давайте посмотрим, что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      39.8,
      44.05
    ],
    "en": [
      "First of all we will take a look at spanning tree states and timers."
    ],
    "ru": [
      "Прежде всего, мы рассмотрим состояния связующего дерева и таймеры."
    ]
  },
  {
    "time": [
      44.05,
      49.019
    ],
    "en": [
      "You already know the blocking and forwarding states, but there are also a couple transitional"
    ],
    "ru": [
      "Вы уже знаете состояния блокировки и пересылки, но есть также пара переходных состояний."
    ]
  },
  {
    "time": [
      49.019,
      54.749
    ],
    "en": [
      "states between those two, and some timers that determine when the switch moves between each state."
    ],
    "ru": [
      "состояния между этими двумя и некоторые таймеры, которые определяют, когда переключатель перемещается между каждым состоянием."
    ]
  },
  {
    "time": [
      54.749,
      60.8
    ],
    "en": [
      "each state. I’ll show you the spanning tree BPDU (bridge protocol data unit, what fields are included in it"
    ],
    "ru": [
      "каждое государство. Я покажу вам BPDU связующего дерева (блок данных протокола моста, какие поля в него включены."
    ]
  },
  {
    "time": [
      60.8,
      64.14
    ],
    "en": [
      "and what their purpose is."
    ],
    "ru": [
      "и какова их цель."
    ]
  },
  {
    "time": [
      64.14,
      68.95
    ],
    "en": [
      "Then we’ll take a look at some optional features of STP, sometimes called the spanning"
    ],
    "ru": [
      "Затем мы рассмотрим некоторые дополнительные функции STP, которые иногда называют связующим звеном."
    ]
  },
  {
    "time": [
      68.95,
      73.14
    ],
    "en": [
      "tree ‘toolkit’, some additional features that you can enable that improve spanning"
    ],
    "ru": [
      "дерево \"инструментарий\", некоторые дополнительные функции, которые вы можете включить, чтобы улучшить охват"
    ]
  },
  {
    "time": [
      73.14,
      75.84
    ],
    "en": [
      "tree, we’ll cover some of them briefly."
    ],
    "ru": [
      "tree, мы кратко рассмотрим некоторые из них."
    ]
  },
  {
    "time": [
      75.84,
      80.47
    ],
    "en": [
      "Finally, we’ll cover spanning tree configurations."
    ],
    "ru": [
      "Наконец, мы рассмотрим конфигурации связующего дерева."
    ]
  },
  {
    "time": [
      80.47,
      85.14099999999999
    ],
    "en": [
      "Spanning tree runs by default so you don’t actually have to do any configuration, but"
    ],
    "ru": [
      "Связующее дерево запускается по умолчанию, поэтому вам не нужно выполнять какую-либо настройку, но"
    ]
  },
  {
    "time": [
      85.14099999999999,
      89.59
    ],
    "en": [
      "you should know how to change which switch becomes the root switch and such, so you can"
    ],
    "ru": [
      "вы должны знать, как изменить переключатель, который станет корневым переключателем и т. д., чтобы вы могли"
    ]
  },
  {
    "time": [
      89.59,
      92.37
    ],
    "en": [
      "make sure traffic follows the best path."
    ],
    "ru": [
      "убедитесь, что трафик идет по оптимальному пути."
    ]
  },
  {
    "time": [
      92.37,
      95.97999999999999
    ],
    "en": [
      "Also, make sure to stick around to the end of today’s quiz."
    ],
    "ru": [
      "Кроме того, не забудьте дожить до конца сегодняшней викторины."
    ]
  },
  {
    "time": [
      95.97999999999999,
      101.46000000000001
    ],
    "en": [
      "I will feature one practice question from Boson Software’s ExSim, a fantastic set"
    ],
    "ru": [
      "Я представлю один практический вопрос из ExSim от Boson Software, фантастический набор"
    ]
  },
  {
    "time": [
      101.46000000000001,
      104.72
    ],
    "en": [
      "of practice exams for the CCNA."
    ],
    "ru": [
      "практических экзаменов на CCNA."
    ]
  },
  {
    "time": [
      104.72,
      109.1
    ],
    "en": [
      "Pretty much everyone who uses them agrees they are the best practice exams out there,"
    ],
    "ru": [
      "Практически все, кто их использует, согласны с тем, что это лучшие практические экзамены."
    ]
  },
  {
    "time": [
      109.1,
      112.57
    ],
    "en": [
      "and are an essential part of preparing for the CCNA."
    ],
    "ru": [
      "и являются важной частью подготовки к CCNA."
    ]
  },
  {
    "time": [
      112.57,
      118.36
    ],
    "en": [
      "They definitely helped me pass all of my CCNA and CCNP exams on the first try!"
    ],
    "ru": [
      "Они определенно помогли мне сдать все экзамены CCNA и CCNP с первой попытки!"
    ]
  },
  {
    "time": [
      118.36,
      125.13
    ],
    "en": [
      "If you want to grab a copy of ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить копию ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      125.13,
      128.67
    ],
    "en": [
      "First let’s take a look at spanning tree port states."
    ],
    "ru": [
      "Сначала давайте взглянем на состояния портов связующего дерева."
    ]
  },
  {
    "time": [
      128.67,
      136.34
    ],
    "en": [
      "You are already familiar with two, BLOCKING and FORWARDING, but there are two others, LISTENING and LEARNING."
    ],
    "ru": [
      "Вы уже знакомы с двумя, БЛОКИРОВКА и ПЕРЕАДРЕСАЦИЯ, но есть еще два, СЛУШАНИЕ и ОБУЧЕНИЕ."
    ]
  },
  {
    "time": [
      136.34,
      139.64
    ],
    "en": [
      "LISTENING and LEARNING. BLOCKING and FORWARDING are the two ‘stable’ states."
    ],
    "ru": [
      "ПРОСЛУШИВАНИЕ И ОБУЧЕНИЕ. БЛОКИРОВКА и ПЕРЕДАЧА - два «стабильных» состояния."
    ]
  },
  {
    "time": [
      139.64,
      145.7
    ],
    "en": [
      "Root and Designated ports remain stable in a Forwarding state, and Non-designated ports remain stable"
    ],
    "ru": [
      "Корневой и назначенный порты остаются стабильными в состоянии пересылки, а неназначенные порты остаются стабильными."
    ]
  },
  {
    "time": [
      145.7,
      148.07
    ],
    "en": [
      "in a Blocking state."
    ],
    "ru": [
      "в состоянии блокировки."
    ]
  },
  {
    "time": [
      148.07,
      153.2
    ],
    "en": [
      "Note that they only remain stable as long as there are no changes in the network topology."
    ],
    "ru": [
      "Обратите внимание, что они остаются стабильными только до тех пор, пока нет изменений в топологии сети."
    ]
  },
  {
    "time": [
      153.2,
      158.75
    ],
    "en": [
      "If a new device is added, an interface is shutdown, or a hardware failure occurs somewhere,"
    ],
    "ru": [
      "Если добавлено новое устройство, интерфейс отключен или где-то происходит сбой оборудования,"
    ]
  },
  {
    "time": [
      158.75,
      161.49
    ],
    "en": [
      "they may have to change states."
    ],
    "ru": [
      "им, возможно, придется изменить состояние."
    ]
  },
  {
    "time": [
      161.49,
      166.38
    ],
    "en": [
      "But as I said, as long as the network is stable, each spanning tree interface will be stable"
    ],
    "ru": [
      "Но, как я уже сказал, пока сеть стабильна, каждый интерфейс связующего дерева будет стабильным."
    ]
  },
  {
    "time": [
      166.38,
      168.19
    ],
    "en": [
      "in one of these states."
    ],
    "ru": [
      "в одном из этих состояний."
    ]
  },
  {
    "time": [
      168.19,
      171.99
    ],
    "en": [
      "Now, there are also two transitional states."
    ],
    "ru": [
      "Теперь есть еще два переходных состояния."
    ]
  },
  {
    "time": [
      171.99,
      175.89
    ],
    "en": [
      "Listening and Learning are transitional states which are passed through when an interface"
    ],
    "ru": [
      "Прослушивание и обучение - это переходные состояния, которые проходят, когда интерфейс"
    ]
  },
  {
    "time": [
      175.89,
      180.37
    ],
    "en": [
      "is activated, or when a Blocking port must transition to a Forwarding state due to a"
    ],
    "ru": [
      "активирован, или когда блокирующий порт должен перейти в состояние пересылки из-за"
    ]
  },
  {
    "time": [
      180.37,
      182.35
    ],
    "en": [
      "change in the network topology."
    ],
    "ru": [
      "изменение топологии сети."
    ]
  },
  {
    "time": [
      182.35,
      188.29
    ],
    "en": [
      "Actually, there is one more state you might hear of, this is the disabled state."
    ],
    "ru": [
      "На самом деле, есть еще одно состояние, о котором вы могли слышать, это отключенное состояние."
    ]
  },
  {
    "time": [
      188.29,
      192.62
    ],
    "en": [
      "This simply refers to an interface that is administratively disabled, meaning shutdown."
    ],
    "ru": [
      "Это просто относится к интерфейсу, который отключен административно, что означает завершение работы."
    ]
  },
  {
    "time": [
      192.62,
      196.52
    ],
    "en": [
      "We won’t really talk about the disabled state much because it doesn’t really play"
    ],
    "ru": [
      "Мы не будем особо много говорить об отключенном состоянии, потому что оно на самом деле не играет"
    ]
  },
  {
    "time": [
      196.52,
      199.82
    ],
    "en": [
      "any role in spanning tree, the interface is shut down."
    ],
    "ru": [
      "при любой роли в связующем дереве интерфейс отключается."
    ]
  },
  {
    "time": [
      199.82,
      206.36
    ],
    "en": [
      "Okay, let’s take a look at these states, starting with the Blocking state."
    ],
    "ru": [
      "Хорошо, давайте посмотрим на эти состояния, начиная с состояния блокировки."
    ]
  },
  {
    "time": [
      206.36,
      210.13
    ],
    "en": [
      "Non-designated ports are in a Blocking state."
    ],
    "ru": [
      "Неназначенные порты находятся в состоянии блокировки."
    ]
  },
  {
    "time": [
      210.13,
      214.44
    ],
    "en": [
      "Interfaces in a Blocking state are effectively disabled to prevent loops."
    ],
    "ru": [
      "Интерфейсы в состоянии блокировки эффективно отключены для предотвращения петель."
    ]
  },
  {
    "time": [
      214.44,
      220.7
    ],
    "en": [
      "This is what makes spanning tree work, disabling redundant interfaces to avoid loops."
    ],
    "ru": [
      "Это то, что заставляет связующее дерево работать, отключая избыточные интерфейсы, чтобы избежать петель."
    ]
  },
  {
    "time": [
      220.7,
      225.03
    ],
    "en": [
      "Interfaces in a Blocking state do not send/receive regular network traffic."
    ],
    "ru": [
      "Интерфейсы в состоянии блокировки не отправляют и не принимают обычный сетевой трафик."
    ]
  },
  {
    "time": [
      225.03,
      230.48
    ],
    "en": [
      "Any regular traffic that arrives on an interface in a blocking state will simply be dropped."
    ],
    "ru": [
      "Любой обычный трафик, поступающий на интерфейс в состоянии блокировки, будет просто отброшен."
    ]
  },
  {
    "time": [
      230.48,
      235.8
    ],
    "en": [
      "However, Interfaces in a Blocking state do receive STP BPDUs."
    ],
    "ru": [
      "Однако интерфейсы в состоянии блокировки действительно получают пакеты BPDU STP."
    ]
  },
  {
    "time": [
      235.8,
      241.82
    ],
    "en": [
      "They need to receive and process BPDUs to be aware of the spanning tree topology, and be ready"
    ],
    "ru": [
      "Им необходимо получать и обрабатывать BPDU, чтобы знать топологию связующего дерева и быть готовыми."
    ]
  },
  {
    "time": [
      241.82,
      245.59
    ],
    "en": [
      "to transition toward a forwarding state if they need to."
    ],
    "ru": [
      "при необходимости перейти в состояние пересылки."
    ]
  },
  {
    "time": [
      245.59,
      252.08
    ],
    "en": [
      "But, interfaces in a Blocking state do NOT forward STP BPDUs."
    ],
    "ru": [
      "Но интерфейсы в состоянии блокировки НЕ пересылают пакеты BPDU STP."
    ]
  },
  {
    "time": [
      252.08,
      257.349
    ],
    "en": [
      "Finally, interfaces in a Blocking state do NOT learn MAC addresses."
    ],
    "ru": [
      "Наконец, интерфейсы в состоянии блокировки НЕ изучают MAC-адреса."
    ]
  },
  {
    "time": [
      257.349,
      261.569
    ],
    "en": [
      "If regular traffic arrives on the interface it is dropped without adding the MAC address"
    ],
    "ru": [
      "Если на интерфейс приходит обычный трафик, он отбрасывается без добавления MAC-адреса."
    ]
  },
  {
    "time": [
      261.569,
      265.33
    ],
    "en": [
      "to the MAC address table."
    ],
    "ru": [
      "в таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      265.33,
      271.759
    ],
    "en": [
      "After the Blocking state, interfaces with the Designated or Root role enter the Listening state."
    ],
    "ru": [
      "После состояния блокировки интерфейсы с назначенной или корневой ролью переходят в состояние прослушивания."
    ]
  },
  {
    "time": [
      271.759,
      278.25
    ],
    "en": [
      "state. Let me just repeat that only Designated or Root ports enter the Listening state, Non-designated"
    ],
    "ru": [
      "штат. Позвольте мне просто повторить, что только назначенные или корневые порты входят в состояние прослушивания, неназначенные."
    ]
  },
  {
    "time": [
      278.25,
      279.909
    ],
    "en": [
      "ports are always Blocking."
    ],
    "ru": [
      "порты всегда блокируются."
    ]
  },
  {
    "time": [
      279.909,
      283.871
    ],
    "en": [
      "That’s because Listening is a transitional state that eventually leads to the forwarding"
    ],
    "ru": [
      "Это потому, что прослушивание - это переходное состояние, которое в конечном итоге приводит к пересылке"
    ]
  },
  {
    "time": [
      283.871,
      289.15
    ],
    "en": [
      "state, so there’s no need for a Non-designated port to enter this state."
    ],
    "ru": [
      "состояние, поэтому для неназначенного порта нет необходимости переходить в это состояние."
    ]
  },
  {
    "time": [
      289.15,
      292.68
    ],
    "en": [
      "The Listening state is 15 seconds long by default."
    ],
    "ru": [
      "По умолчанию состояние прослушивания длится 15 секунд."
    ]
  },
  {
    "time": [
      292.68,
      296.229
    ],
    "en": [
      "This is determined by a timer called the ‘Forward delay’ timer."
    ],
    "ru": [
      "Это определяется таймером, называемым таймером «задержки пересылки»."
    ]
  },
  {
    "time": [
      296.229,
      300.439
    ],
    "en": [
      "You’ll soon see that this timer isn’t used only for the Listening state."
    ],
    "ru": [
      "Скоро вы увидите, что этот таймер не используется только для состояния прослушивания."
    ]
  },
  {
    "time": [
      300.439,
      304.689
    ],
    "en": [
      "Anyway, remember that it is 15 seconds by default."
    ],
    "ru": [
      "В любом случае помните, что по умолчанию это 15 секунд."
    ]
  },
  {
    "time": [
      304.689,
      310.74
    ],
    "en": [
      "An interface in the Listening state ONLY forwards/receives Spanning Tree BPDUs."
    ],
    "ru": [
      "Интерфейс в состоянии прослушивания ТОЛЬКО пересылает / получает BPDU связующего дерева."
    ]
  },
  {
    "time": [
      310.74,
      314.099
    ],
    "en": [
      "It does NOT send or receive regular traffic."
    ],
    "ru": [
      "Он НЕ отправляет и не получает регулярный трафик."
    ]
  },
  {
    "time": [
      314.099,
      320.87
    ],
    "en": [
      "If a regular unicast frame is received on a port in the Listening state, it will be discarded."
    ],
    "ru": [
      "Если обычный одноадресный кадр получен на порт в состоянии прослушивания, он будет отброшен."
    ]
  },
  {
    "time": [
      320.87,
      325.439
    ],
    "en": [
      "discarded. An interface in the Listening state also does NOT learn MAC addresses from regular traffic"
    ],
    "ru": [
      "отброшен. Интерфейс в состоянии прослушивания также НЕ изучает MAC-адреса из обычного трафика."
    ]
  },
  {
    "time": [
      325.439,
      326.76
    ],
    "en": [
      "that arrives on the interface."
    ],
    "ru": [
      "что поступает на интерфейс."
    ]
  },
  {
    "time": [
      326.76,
      331.49
    ],
    "en": [
      "I said the same thing about the Blocking state, but let me explain."
    ],
    "ru": [
      "Я сказал то же самое о состоянии блокировки, но позвольте мне объяснить."
    ]
  },
  {
    "time": [
      331.49,
      336.34000000000003
    ],
    "en": [
      "As you know well already, when a frame arrives on a switch interface, the switch uses the"
    ],
    "ru": [
      "Как вы уже хорошо знаете, когда фрейм поступает на интерфейс коммутатора, коммутатор использует"
    ]
  },
  {
    "time": [
      336.34000000000003,
      341.18
    ],
    "en": [
      "source MAC address field to ‘learn’ that MAC address, and it updates the MAC address"
    ],
    "ru": [
      "поле исходного MAC-адреса, чтобы «узнать» этот MAC-адрес, и оно обновляет MAC-адрес"
    ]
  },
  {
    "time": [
      341.18,
      345.62
    ],
    "en": [
      "table with the MAC address, interface, and VLAN information."
    ],
    "ru": [
      "таблица с MAC-адресом, интерфейсом и информацией о VLAN."
    ]
  },
  {
    "time": [
      345.62,
      350.8
    ],
    "en": [
      "However, if an interface is in the spanning tree Listening state, it will not do this."
    ],
    "ru": [
      "Однако, если интерфейс находится в состоянии прослушивания связующего дерева, он этого не сделает."
    ]
  },
  {
    "time": [
      350.8,
      357.619
    ],
    "en": [
      "The traffic is simply dropped, and the MAC address learning process does not occur."
    ],
    "ru": [
      "Трафик просто сбрасывается, и процесс изучения MAC-адреса не происходит."
    ]
  },
  {
    "time": [
      357.619,
      362.979
    ],
    "en": [
      "After the Listening state, a Designated or Root port will enter the Learning state."
    ],
    "ru": [
      "После состояния прослушивания назначенный или корневой порт перейдет в состояние обучения."
    ]
  },
  {
    "time": [
      362.979,
      366.18
    ],
    "en": [
      "The Learning state is 15 seconds long by default."
    ],
    "ru": [
      "Состояние обучения по умолчанию длится 15 секунд."
    ]
  },
  {
    "time": [
      366.18,
      370.69
    ],
    "en": [
      "This is determined by the Forward delay timer, so the same timer is used for both the Listening"
    ],
    "ru": [
      "Это определяется таймером задержки пересылки, поэтому для прослушивания используется один и тот же таймер."
    ]
  },
  {
    "time": [
      370.69,
      375.689
    ],
    "en": [
      "and Learning states, meaning by default it takes a total of 30 seconds to move through"
    ],
    "ru": [
      "и состояния обучения, то есть по умолчанию на прохождение через"
    ]
  },
  {
    "time": [
      375.689,
      379.309
    ],
    "en": [
      "both states and enter a forwarding state."
    ],
    "ru": [
      "оба состояния и переходят в состояние пересылки."
    ]
  },
  {
    "time": [
      379.309,
      384.629
    ],
    "en": [
      "Same as in the Listening state, an interface in the Learning state ONLY sends or receives"
    ],
    "ru": [
      "Как и в состоянии прослушивания, интерфейс в состоянии обучения ТОЛЬКО отправляет или получает"
    ]
  },
  {
    "time": [
      384.629,
      387.009
    ],
    "en": [
      "spanning tree protocol BPDUs."
    ],
    "ru": [
      "BPDU протокола связующего дерева."
    ]
  },
  {
    "time": [
      387.009,
      391.069
    ],
    "en": [
      "Also, it does NOT send or receive regular traffic."
    ],
    "ru": [
      "Кроме того, он НЕ отправляет и не получает регулярный трафик."
    ]
  },
  {
    "time": [
      391.069,
      395.65
    ],
    "en": [
      "However, here is the difference between the Listening and Learning states."
    ],
    "ru": [
      "Однако в этом разница между состояниями прослушивания и обучения."
    ]
  },
  {
    "time": [
      395.65,
      401.44
    ],
    "en": [
      "An interface in the Learning state learns MAC addresses from regular traffic that arrives on the interface."
    ],
    "ru": [
      "Интерфейс в состоянии обучения изучает MAC-адреса из обычного трафика, поступающего на интерфейс."
    ]
  },
  {
    "time": [
      401.44,
      406.349
    ],
    "en": [
      "on the interface. So, an interface in the learning state is preparing to forward traffic by building up"
    ],
    "ru": [
      "на интерфейсе. Итак, интерфейс в состоянии обучения готовится к пересылке трафика путем создания"
    ]
  },
  {
    "time": [
      406.349,
      409.499
    ],
    "en": [
      "some of its MAC address table beforehand."
    ],
    "ru": [
      "некоторые из его таблицы MAC-адресов заранее."
    ]
  },
  {
    "time": [
      409.499,
      413.509
    ],
    "en": [
      "Finally, we have the forwarding state."
    ],
    "ru": [
      "Наконец, у нас есть состояние пересылки."
    ]
  },
  {
    "time": [
      413.509,
      417.94
    ],
    "en": [
      "Root and Designated ports are in a Forwarding state when they're stable."
    ],
    "ru": [
      "Корневой и назначенный порты находятся в состоянии пересылки, когда они стабильны."
    ]
  },
  {
    "time": [
      417.94,
      421.11
    ],
    "en": [
      "A port in the Forwarding state operate as normal."
    ],
    "ru": [
      "Порт в состоянии пересылки работает нормально."
    ]
  },
  {
    "time": [
      421.11,
      423.479
    ],
    "en": [
      "So, what does that mean?"
    ],
    "ru": [
      "Так что это значит?"
    ]
  },
  {
    "time": [
      423.479,
      427.99
    ],
    "en": [
      "A port in the Forwarding state sends and receives BPDUs."
    ],
    "ru": [
      "Порт в состоянии пересылки отправляет и принимает пакеты BPDU."
    ]
  },
  {
    "time": [
      427.99,
      430.979
    ],
    "en": [
      "It sends and receives normal traffic."
    ],
    "ru": [
      "Он отправляет и принимает обычный трафик."
    ]
  },
  {
    "time": [
      430.979,
      436.11
    ],
    "en": [
      "Also it learns MAC addresses from the frames that arrive on it, and adds them to the MAC address table."
    ],
    "ru": [
      "Также он изучает MAC-адреса из поступающих на него кадров и добавляет их в таблицу MAC-адресов."
    ]
  },
  {
    "time": [
      436.11,
      440.119
    ],
    "en": [
      "table. So, it’s a switchport operating as normal."
    ],
    "ru": [
      "стол. Итак, коммутатор работает в обычном режиме."
    ]
  },
  {
    "time": [
      440.119,
      444.46
    ],
    "en": [
      "For review, here’s a summary of each spanning tree port state."
    ],
    "ru": [
      "Для ознакомления приведем сводную информацию о состоянии каждого порта связующего дерева."
    ]
  },
  {
    "time": [
      444.46,
      449.469
    ],
    "en": [
      "For reference, I’ve also added the Disabled state to the bottom, which as I said before"
    ],
    "ru": [
      "Для справки, я также добавил состояние \"Отключено\" внизу, что, как я уже говорил ранее,"
    ]
  },
  {
    "time": [
      449.469,
      454.939
    ],
    "en": [
      "is the spanning tree state of a shutdown, administratively disabled, interface."
    ],
    "ru": [
      "- это состояние связующего дерева отключенного, административно отключенного интерфейса."
    ]
  },
  {
    "time": [
      454.939,
      459.15999999999997
    ],
    "en": [
      "Pause the video if you want to take a look at this table and use it for review."
    ],
    "ru": [
      "Приостановите видео, если хотите взглянуть на эту таблицу и использовать ее для просмотра."
    ]
  },
  {
    "time": [
      459.15999999999997,
      466.469
    ],
    "en": [
      "You can also review using the flashcard deck, make sure to download it from the link in the video description."
    ],
    "ru": [
      "Вы также можете просмотреть, используя колоду карточек, обязательно загрузите ее по ссылке в описании видео."
    ]
  },
  {
    "time": [
      466.469,
      469.61
    ],
    "en": [
      "the video description. Now let’s talk about each of the timers used in Spanning Tree."
    ],
    "ru": [
      "описание видео. Теперь поговорим о каждом из таймеров, используемых в Spanning Tree."
    ]
  },
  {
    "time": [
      469.61,
      477.029
    ],
    "en": [
      "I’ve already mentioned the Hello and Forward Delay timers, but I haven’t mentioned Max Age yet."
    ],
    "ru": [
      "Я уже упоминал таймеры Hello и Forward Delay, но еще не упомянул Max Age."
    ]
  },
  {
    "time": [
      477.029,
      480.8
    ],
    "en": [
      "Age yet. First up let’s look more in detail at the hello timer."
    ],
    "ru": [
      "Возраст еще нет. Прежде всего, давайте подробнее рассмотрим таймер приветствия."
    ]
  },
  {
    "time": [
      480.8,
      488.49
    ],
    "en": [
      "It determines how often the root bridge sends hello BPDUs, by default it will send them every 2 seconds."
    ],
    "ru": [
      "Он определяет, как часто корневой мост отправляет приветственные BPDU, по умолчанию он будет отправлять их каждые 2 секунды."
    ]
  },
  {
    "time": [
      488.49,
      495.279
    ],
    "en": [
      "every 2 seconds. Other switches in the network do not originate their own BPDUs, but they will forward BPDUs they receive."
    ],
    "ru": [
      "каждые 2 секунды. Другие коммутаторы в сети не создают свои собственные BPDU, но они пересылают полученные BPDU."
    ]
  },
  {
    "time": [
      495.279,
      498.37
    ],
    "en": [
      "they receive. However, there is one thing I didn’t mention before."
    ],
    "ru": [
      "они получают. Однако есть одна вещь, о которой я раньше не упоминал."
    ]
  },
  {
    "time": [
      498.37,
      502.659
    ],
    "en": [
      "The switches will only forward BPDUs on their DESIGNATED PORTs."
    ],
    "ru": [
      "Коммутаторы будут пересылать BPDU только на свои НАЗНАЧЕННЫЕ ПОРТЫ."
    ]
  },
  {
    "time": [
      502.659,
      506.189
    ],
    "en": [
      "Let’s see how that works."
    ],
    "ru": [
      "Посмотрим, как это работает."
    ]
  },
  {
    "time": [
      506.189,
      508.81
    ],
    "en": [
      "First off, I showed you this slide in day 20’s video."
    ],
    "ru": [
      "Во-первых, я показал вам этот слайд в видео 20-го дня."
    ]
  },
  {
    "time": [
      508.81,
      513.899
    ],
    "en": [
      "Assuming these switches all come online at the same time, each assumes they are the root"
    ],
    "ru": [
      "Предполагая, что все эти переключатели подключаются одновременно, каждый предполагает, что они являются корневыми."
    ]
  },
  {
    "time": [
      513.899,
      518.469
    ],
    "en": [
      "bridge, and each will send BPDUs out of all interfaces."
    ],
    "ru": [
      "мост, и каждый будет отправлять BPDU из всех интерфейсов."
    ]
  },
  {
    "time": [
      518.469,
      523.5
    ],
    "en": [
      "However, once the network has converged and all switches and ports are stabilized in their"
    ],
    "ru": [
      "Однако, как только сеть объединится и все коммутаторы и порты стабилизируются в своих"
    ]
  },
  {
    "time": [
      523.5,
      526.48
    ],
    "en": [
      "roles, only the root bridge sends BPDUs."
    ],
    "ru": [
      "ролей, только корневой мост отправляет BPDU."
    ]
  },
  {
    "time": [
      526.48,
      531.78
    ],
    "en": [
      "Then, the other switches will forward these BPDUs on their designated ports, updating"
    ],
    "ru": [
      "Затем другие коммутаторы будут пересылать эти BPDU на свои назначенные порты, обновляя"
    ]
  },
  {
    "time": [
      531.78,
      538.43
    ],
    "en": [
      "information like the bridge root cost, sending bridge ID, sending port ID, etc."
    ],
    "ru": [
      "информация, такая как стоимость корня моста, отправка идентификатора моста, отправка идентификатора порта и т. д."
    ]
  },
  {
    "time": [
      538.43,
      545.05
    ],
    "en": [
      "Then, two seconds later, the root bridge will send BPDUs again, and the other switches will"
    ],
    "ru": [
      "Затем, через две секунды, корневой мост снова отправит BPDU, а другие коммутаторы будут"
    ]
  },
  {
    "time": [
      545.05,
      549.24
    ],
    "en": [
      "again forward these BPDUs on their designated ports."
    ],
    "ru": [
      "снова направьте эти BPDU на назначенные им порты."
    ]
  },
  {
    "time": [
      549.24,
      554.42
    ],
    "en": [
      "Note that they do not forward the BPDUs out of their root ports and non-designated ports,"
    ],
    "ru": [
      "Обратите внимание, что они не пересылают BPDU из своих корневых портов и неназначенных портов,"
    ]
  },
  {
    "time": [
      554.42,
      556.17
    ],
    "en": [
      "only their designated ports."
    ],
    "ru": [
      "только их назначенные порты."
    ]
  },
  {
    "time": [
      556.17,
      559.48
    ],
    "en": [
      "So, that’s the hello timer."
    ],
    "ru": [
      "Итак, это привет таймер."
    ]
  },
  {
    "time": [
      559.48,
      562.22
    ],
    "en": [
      "Next up, the forward delay timer."
    ],
    "ru": [
      "Затем таймер задержки перемотки вперед."
    ]
  },
  {
    "time": [
      562.22,
      566.5889999999999
    ],
    "en": [
      "This is the length of the Listening and Learning transitional states that a port goes through"
    ],
    "ru": [
      "Это длительность переходных состояний прослушивания и обучения, через которые проходит порт."
    ]
  },
  {
    "time": [
      566.5889999999999,
      569.37
    ],
    "en": [
      "when it moves to forwarding."
    ],
    "ru": [
      "когда он переходит к пересылке."
    ]
  },
  {
    "time": [
      569.37,
      574.49
    ],
    "en": [
      "Note that this is the length of each of the states, not the total length of both combined."
    ],
    "ru": [
      "Обратите внимание, что это длина каждого из состояний, а не общая длина обоих вместе."
    ]
  },
  {
    "time": [
      574.49,
      580.06
    ],
    "en": [
      "So, with the default Forward delay timer of 15 seconds, it takes a total of 30 seconds"
    ],
    "ru": [
      "Таким образом, с таймером задержки пересылки по умолчанию, равным 15 секунд, это занимает в общей сложности 30 секунд."
    ]
  },
  {
    "time": [
      580.06,
      584.61
    ],
    "en": [
      "for the switchport to move through both states and forward traffic."
    ],
    "ru": [
      "для коммутатора, чтобы перемещаться через оба состояния и пересылать трафик."
    ]
  },
  {
    "time": [
      584.61,
      590.45
    ],
    "en": [
      "Then the final timer, one I haven’t told you about yet, is the max age timer."
    ],
    "ru": [
      "Затем последний таймер, о котором я вам еще не говорил, - это таймер максимального возраста."
    ]
  },
  {
    "time": [
      590.45,
      595.44
    ],
    "en": [
      "This timer indicates how long an interface will wait to change the spanning tree topology after"
    ],
    "ru": [
      "Этот таймер указывает, как долго интерфейс будет ждать изменения топологии связующего дерева после"
    ]
  },
  {
    "time": [
      595.44,
      597.36
    ],
    "en": [
      "ceasing to receive BPDUs."
    ],
    "ru": [
      "перестает получать BPDU."
    ]
  },
  {
    "time": [
      597.36,
      600.279
    ],
    "en": [
      "So, this will need some more explanation."
    ],
    "ru": [
      "Итак, это потребует дополнительных пояснений."
    ]
  },
  {
    "time": [
      600.279,
      602.93
    ],
    "en": [
      "Let’s take a look."
    ],
    "ru": [
      "Давайте взглянем."
    ]
  },
  {
    "time": [
      602.93,
      610.22
    ],
    "en": [
      "Remember that each collision domain has one designated port, and BPDUs are forwarded out of designated ports."
    ],
    "ru": [
      "Помните, что у каждого домена коллизии есть один назначенный порт, и BPDU пересылаются из назначенных портов."
    ]
  },
  {
    "time": [
      610.22,
      616.829
    ],
    "en": [
      "of designated ports. So, all root ports and non-designated ports expect to receive BPDUs."
    ],
    "ru": [
      "назначенных портов. Таким образом, все корневые порты и неназначенные порты ожидают получения BPDU."
    ]
  },
  {
    "time": [
      616.829,
      627.19
    ],
    "en": [
      "The root bridge, SW3, sends BPDUs, and then SW1 and SW4 forward them out of their designated ports."
    ],
    "ru": [
      "Корневой мост SW3 отправляет BPDU, а затем SW1 и SW4 перенаправляют их из назначенных им портов."
    ]
  },
  {
    "time": [
      627.19,
      633.029
    ],
    "en": [
      "ports. To demonstrate the Max Age timer, let’s focus on SW2’s G0/1 interface."
    ],
    "ru": [
      "порты. Чтобы продемонстрировать таймер максимального возраста, давайте сосредоточимся на интерфейсе G0 / 1 SW2."
    ]
  },
  {
    "time": [
      633.029,
      637.97
    ],
    "en": [
      "It just received a BPDU, so the max age timer is reset to 20."
    ],
    "ru": [
      "Он только что получил BPDU, поэтому таймер максимального возраста сбрасывается на 20."
    ]
  },
  {
    "time": [
      637.97,
      642.029
    ],
    "en": [
      "It counts down to 19... 18…"
    ],
    "ru": [
      "Отсчет до 19 ... 18 ..."
    ]
  },
  {
    "time": [
      642.029,
      646.85
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
      642.029,
      646.85
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
      646.85,
      657.67
    ],
    "en": [
      "they are forwarded by the other switches, and SW2 resets its max age timer to 20... 19...18…"
    ],
    "ru": [
      "они пересылаются другими коммутаторами, и SW2 сбрасывает свой таймер максимального возраста на 20 ... 19 ... 18 ..."
    ]
  },
  {
    "time": [
      657.67,
      662.42
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
      657.67,
      662.42
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
      662.42,
      668.759
    ],
    "en": [
      "The root bridge will send BPDUs, and other switches will forward the BPDUs, but SW1’s"
    ],
    "ru": [
      "Корневой мост будет отправлять BPDU, а другие коммутаторы будут пересылать BPDU, но SW1"
    ]
  },
  {
    "time": [
      668.759,
      676.0
    ],
    "en": [
      "G0/0 interface is down so SW2 no longer receives a BPDU on its G0/1 interface."
    ],
    "ru": [
      "Интерфейс G0 / 0 не работает, поэтому SW2 больше не получает BPDU на своем интерфейсе G0 / 1."
    ]
  },
  {
    "time": [
      676.0,
      682.56
    ],
    "en": [
      "So, the max age timer continues counting down. 17… 17… 16…"
    ],
    "ru": [
      "Таким образом, таймер максимального возраста продолжает обратный отсчет. 17… 17… 16…"
    ]
  },
  {
    "time": [
      682.56,
      688.279
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
      682.56,
      688.279
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
      688.279,
      697.16
    ],
    "en": [
      "its G0/1 interface, SW2’s max age timer will count all the way down to 0. What happens then?"
    ],
    "ru": [
      "его интерфейс G0 / 1, таймер максимального возраста SW2 будет отсчитывать до нуля. Что же тогда происходит?"
    ]
  },
  {
    "time": [
      697.16,
      702.41
    ],
    "en": [
      "What happens then? First of all, If another BPDU is received before the max age timer counts down to 0,"
    ],
    "ru": [
      "Что тогда происходит? Прежде всего, если еще один BPDU получен до того, как таймер максимального возраста обратится к 0,"
    ]
  },
  {
    "time": [
      702.41,
      706.449
    ],
    "en": [
      "the time will reset to 20 seconds and no changes will occur."
    ],
    "ru": [
      "время будет сброшено на 20 секунд, и никаких изменений не произойдет."
    ]
  },
  {
    "time": [
      706.449,
      713.16
    ],
    "en": [
      "However, If another BPDU is not received, the max age timer counts down to 0 and the"
    ],
    "ru": [
      "Однако, если другой BPDU не получен, таймер максимального срока отсчитывает до 0 и"
    ]
  },
  {
    "time": [
      713.16,
      722.329
    ],
    "en": [
      "switch will reevaluate its STP choices, including root bridge, and local root, designated, and non-designated ports."
    ],
    "ru": [
      "Коммутатор повторно оценит свой выбор STP, включая корневой мост и локальный корневой, назначенные и неназначенные порты."
    ]
  },
  {
    "time": [
      722.329,
      727.31
    ],
    "en": [
      "non-designated ports. After these decisions, if a non-designated port is selected to become a designated or"
    ],
    "ru": [
      "неназначенные порты. После этих решений, если неназначенный порт выбран, чтобы стать назначенным или"
    ]
  },
  {
    "time": [
      727.31,
      733.519
    ],
    "en": [
      "root port, it will transition from the blocking state to the listening state (for 15 seconds),"
    ],
    "ru": [
      "корневой порт, он перейдет из состояния блокировки в состояние прослушивания (на 15 секунд),"
    ]
  },
  {
    "time": [
      733.519,
      738.149
    ],
    "en": [
      "learning state (again for 15 seconds), and then finally the forwarding state."
    ],
    "ru": [
      "состояние обучения (снова в течение 15 секунд), а затем, наконец, состояние пересылки."
    ]
  },
  {
    "time": [
      738.149,
      744.259
    ],
    "en": [
      "So, it can take a total of 50 seconds for a blocking interface to transition to forwarding."
    ],
    "ru": [
      "Таким образом, переход интерфейса блокировки в режим пересылки может занять в общей сложности 50 секунд."
    ]
  },
  {
    "time": [
      744.259,
      747.16
    ],
    "en": [
      "Why does it take so long?"
    ],
    "ru": [
      "Почему это занимает так много времени?"
    ]
  },
  {
    "time": [
      747.16,
      751.87
    ],
    "en": [
      "Well, tThese timers and transitional states are to make sure that loops aren’t accidentally"
    ],
    "ru": [
      "Что ж, эти таймеры и переходные состояния предназначены для того, чтобы не допустить случайного возникновения петель."
    ]
  },
  {
    "time": [
      751.87,
      756.05
    ],
    "en": [
      "created by an interface moving to forwarding state too soon."
    ],
    "ru": [
      "создан интерфейсом, слишком рано переходящим в состояние пересылки."
    ]
  },
  {
    "time": [
      756.05,
      760.61
    ],
    "en": [
      "I showed you in the previous lecture how dangerous a Layer 2 loop can be."
    ],
    "ru": [
      "В предыдущей лекции я показал, насколько опасной может быть петля уровня 2."
    ]
  },
  {
    "time": [
      760.61,
      765.861
    ],
    "en": [
      "That’s why spanning tree protocol is very careful about moving an interface to a forwarding state."
    ],
    "ru": [
      "Вот почему протокол связующего дерева очень осторожен при переводе интерфейса в состояние пересылки."
    ]
  },
  {
    "time": [
      765.861,
      771.259
    ],
    "en": [
      "state. However, a forwarding interface can move directly to a blocking state, because there is no worry"
    ],
    "ru": [
      "штат. Однако интерфейс пересылки может перейти непосредственно в состояние блокировки, потому что это не о чем беспокоиться."
    ]
  },
  {
    "time": [
      771.259,
      773.99
    ],
    "en": [
      "about creating a loop by blocking an interface."
    ],
    "ru": [
      "о создании цикла путем блокировки интерфейса."
    ]
  },
  {
    "time": [
      773.99,
      779.509
    ],
    "en": [
      "But, as I just said, a blocking interface cannot move directly to forwarding state."
    ],
    "ru": [
      "Но, как я только что сказал, интерфейс блокировки не может перейти непосредственно в состояние пересылки."
    ]
  },
  {
    "time": [
      779.509,
      783.389
    ],
    "en": [
      "It must go through the listening and learning states."
    ],
    "ru": [
      "Он должен пройти через состояния слушания и обучения."
    ]
  },
  {
    "time": [
      783.389,
      789.5
    ],
    "en": [
      "So let’s move on to check out the spanning tree BPDU, bridge protocol data unit."
    ],
    "ru": [
      "Итак, давайте перейдем к проверке связующего дерева BPDU, блока данных протокола моста."
    ]
  },
  {
    "time": [
      789.5,
      793.67
    ],
    "en": [
      "First off, in the Ethernet header section, notice the destination."
    ],
    "ru": [
      "Прежде всего, обратите внимание на пункт назначения в разделе заголовка Ethernet."
    ]
  },
  {
    "time": [
      793.67,
      805.12
    ],
    "en": [
      "Cisco’s PVST+ uses the destination MAC address of 0100.0ccc.cccd for its BPDUs."
    ],
    "ru": [
      "Cisco PVST + использует MAC-адрес назначения 0100.0ccc.cccd для своих BPDU."
    ]
  },
  {
    "time": [
      805.12,
      811.62
    ],
    "en": [
      "I recommend remembering this, it’s a little bit of trivia you might need to know for the test."
    ],
    "ru": [
      "Я рекомендую запомнить это, это небольшая мелочь, которую вам может понадобиться знать для теста."
    ]
  },
  {
    "time": [
      811.62,
      816.22
    ],
    "en": [
      "test. For remembering little facts like these, I highly recommend using the Anki flashcard"
    ],
    "ru": [
      "тестовое задание. Для запоминания таких маленьких фактов я настоятельно рекомендую использовать флеш-карту Anki."
    ]
  },
  {
    "time": [
      816.22,
      818.629
    ],
    "en": [
      "deck I include with this video."
    ],
    "ru": [
      "колоду я прилагаю к этому видео."
    ]
  },
  {
    "time": [
      818.629,
      824.12
    ],
    "en": [
      "I mentioned PVST in the previous lecture, but what’s PVST+?"
    ],
    "ru": [
      "Я упоминал PVST в предыдущей лекции, но что такое PVST +?"
    ]
  },
  {
    "time": [
      824.12,
      832.54
    ],
    "en": [
      "Well, PVST is an older version which only supports Cisco’s ISL for trunk encapsulation."
    ],
    "ru": [
      "Что ж, PVST - это более старая версия, которая поддерживает только Cisco ISL для инкапсуляции магистрали."
    ]
  },
  {
    "time": [
      832.54,
      836.12
    ],
    "en": [
      "PVST+ is a newer version which supports dot1q."
    ],
    "ru": [
      "PVST + - это более новая версия, которая поддерживает dot1q."
    ]
  },
  {
    "time": [
      836.12,
      843.269
    ],
    "en": [
      "I might use the term ‘PVST’ sometimes, but really I mean PVST+, because ISL is pretty"
    ],
    "ru": [
      "Иногда я могу использовать термин «PVST», но на самом деле я имею в виду PVST +, потому что ISL довольно"
    ]
  },
  {
    "time": [
      843.269,
      846.019
    ],
    "en": [
      "much never used anymore."
    ],
    "ru": [
      "больше никогда не использовал."
    ]
  },
  {
    "time": [
      846.019,
      851.48
    ],
    "en": [
      "By the way, since I mentioned the MAC address, regular spanning tree, meaning not Cisco’s"
    ],
    "ru": [
      "Кстати, поскольку я упомянул MAC-адрес, обычное связующее дерево, то есть не Cisco"
    ]
  },
  {
    "time": [
      851.48,
      861.36
    ],
    "en": [
      "PVST or PVST+, uses a destination MAC address of 0180.c200.0000."
    ],
    "ru": [
      "PVST или PVST + использует MAC-адрес назначения 0180.c200.0000."
    ]
  },
  {
    "time": [
      861.36,
      865.82
    ],
    "en": [
      "Again, you probably should remember that fact for the exam."
    ],
    "ru": [
      "Опять же, вам, вероятно, следует запомнить этот факт перед экзаменом."
    ]
  },
  {
    "time": [
      865.82,
      869.22
    ],
    "en": [
      "Now let’s move on to the spanning tree BPDU itself."
    ],
    "ru": [
      "Теперь перейдем к самому BPDU связующего дерева."
    ]
  },
  {
    "time": [
      869.22,
      873.99
    ],
    "en": [
      "I don’t think you need to memorize the BPDU for the CCNA, but I just want to"
    ],
    "ru": [
      "Я не думаю, что вам нужно запоминать BPDU для CCNA, но я просто хочу"
    ]
  },
  {
    "time": [
      873.99,
      878.0889999999999
    ],
    "en": [
      "give you an introduction to what is included in the BPDU."
    ],
    "ru": [
      "познакомят вас с тем, что входит в BPDU."
    ]
  },
  {
    "time": [
      878.0889999999999,
      885.3389999999999
    ],
    "en": [
      "The first three fields are the protocol identifier, which is always hexadecimal 0000 for spanning tree."
    ],
    "ru": [
      "Первые три поля - это идентификатор протокола, который всегда является шестнадцатеричным 0000 для связующего дерева."
    ]
  },
  {
    "time": [
      885.3389999999999,
      890.9
    ],
    "en": [
      "tree. The protocol version identifier is set to 0 for classic spanning tree, you’ll see"
    ],
    "ru": [
      "дерево. Идентификатор версии протокола установлен на 0 для классического связующего дерева, вы увидите"
    ]
  },
  {
    "time": [
      890.9,
      895.86
    ],
    "en": [
      "a different value here when we look at rapid spanning tree protocol in day 22."
    ],
    "ru": [
      "другое значение здесь, когда мы смотрим на протокол быстрого связующего дерева на 22-й день."
    ]
  },
  {
    "time": [
      895.86,
      904.209
    ],
    "en": [
      "Finally, the BPDU type is hexadecimal 00 for what’s called a ‘configuration BPDU’."
    ],
    "ru": [
      "Наконец, тип BPDU - шестнадцатеричный 00 для так называемого «конфигурационного BPDU»."
    ]
  },
  {
    "time": [
      904.209,
      910.749
    ],
    "en": [
      "There are other types of BPDUs, but we don’t need to go that in depth for the CCNA."
    ],
    "ru": [
      "Существуют и другие типы BPDU, но нам не нужно углубляться в детали для CCNA."
    ]
  },
  {
    "time": [
      910.749,
      915.48
    ],
    "en": [
      "Next up are some flags, these are used to signal topology changes to other switches."
    ],
    "ru": [
      "Далее следуют несколько флагов, которые используются для передачи сигналов об изменении топологии другим коммутаторам."
    ]
  },
  {
    "time": [
      915.48,
      921.66
    ],
    "en": [
      "Again, I don’t think we need to go in depth about these for the CCNA."
    ],
    "ru": [
      "Опять же, я не думаю, что нам нужно углубляться в эти вопросы для CCNA."
    ]
  },
  {
    "time": [
      921.66,
      927.6
    ],
    "en": [
      "Next up is the root identifier, which gives the bridge priority, extended system ID, which"
    ],
    "ru": [
      "Далее идет корневой идентификатор, который дает приоритет моста, расширенный идентификатор системы, который"
    ]
  },
  {
    "time": [
      927.6,
      934.529
    ],
    "en": [
      "is the VLAN ID, 10 in this case, and the bridge system ID, which is the MAC Address of the root bridge."
    ],
    "ru": [
      "- это идентификатор VLAN, в данном случае 10, и идентификатор системы моста, который является MAC-адресом корневого моста."
    ]
  },
  {
    "time": [
      934.529,
      939.259
    ],
    "en": [
      "root bridge. I set the MAC address to all A’s in this case."
    ],
    "ru": [
      "корневой мост. В этом случае я установил MAC-адрес на все A."
    ]
  },
  {
    "time": [
      939.259,
      941.1
    ],
    "en": [
      "Next is the root path cost."
    ],
    "ru": [
      "Далее идет стоимость корневого пути."
    ]
  },
  {
    "time": [
      941.1,
      945.93
    ],
    "en": [
      "It’s 0 in this case, so you know that this is the root bridge."
    ],
    "ru": [
      "В данном случае это 0, так что вы знаете, что это корневой мост."
    ]
  },
  {
    "time": [
      945.93,
      949.5889999999999
    ],
    "en": [
      "You can also know this is the root bridge by looking at this field."
    ],
    "ru": [
      "Вы также можете узнать, что это корневой мост, посмотрев на это поле."
    ]
  },
  {
    "time": [
      949.5889999999999,
      955.66
    ],
    "en": [
      "The information in the bridge identifier field is the same as in the root identifier field,"
    ],
    "ru": [
      "Информация в поле идентификатора моста такая же, как и в поле корневого идентификатора,"
    ]
  },
  {
    "time": [
      955.66,
      958.879
    ],
    "en": [
      "meaning this is the root bridge."
    ],
    "ru": [
      "это означает, что это корневой мост."
    ]
  },
  {
    "time": [
      958.879,
      963.769
    ],
    "en": [
      "After that is the port identifier, the interface which sent the BPDU."
    ],
    "ru": [
      "После этого идет идентификатор порта, интерфейс, который отправил BPDU."
    ]
  },
  {
    "time": [
      963.769,
      967.17
    ],
    "en": [
      "It is hexadecimal 8 0 0 2."
    ],
    "ru": [
      "Это шестнадцатеричный 8 0 0 2."
    ]
  },
  {
    "time": [
      967.17,
      975.67
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
      967.17,
      975.67
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
      975.67,
      982.48
    ],
    "en": [
      "port priority. 0 2 is the number of the port itself. Finally, the timers."
    ],
    "ru": [
      "приоритет порта. 0 2 - номер самого порта. Наконец, таймеры."
    ]
  },
  {
    "time": [
      982.48,
      987.759
    ],
    "en": [
      "Finally, the timers. Message age is something I haven’t mentioned yet, but it starts at 0 at the root bridge"
    ],
    "ru": [
      "Наконец, таймеры. Возраст сообщения - это то, о чем я еще не упоминал, но он начинается с 0 на корневом мосту."
    ]
  },
  {
    "time": [
      987.759,
      992.2090000000001
    ],
    "en": [
      "and is increased by 1 each time it is forwarded by another switch."
    ],
    "ru": [
      "и увеличивается на 1 каждый раз, когда он пересылается другим переключателем."
    ]
  },
  {
    "time": [
      992.2090000000001,
      998.62
    ],
    "en": [
      "It is subtracted from the max age when a switch receives the BPDU, so for example if the BPDU"
    ],
    "ru": [
      "Он вычитается из максимального возраста, когда коммутатор получает BPDU, поэтому, например, если BPDU"
    ]
  },
  {
    "time": [
      998.62,
      1004.009
    ],
    "en": [
      "is passed through 5 switches, when it reaches the 6th bridge it will immediately reduce"
    ],
    "ru": [
      "проходит через 5 переключателей, когда он достигает 6-го моста, он сразу же уменьшает"
    ]
  },
  {
    "time": [
      1004.009,
      1010.06
    ],
    "en": [
      "its max age timer to 15, meaning each time it receives a BPDU its max age will reset"
    ],
    "ru": [
      "его таймер максимального возраста до 15, что означает, что каждый раз, когда он получает BPDU, его максимальный возраст сбрасывается"
    ]
  },
  {
    "time": [
      1010.06,
      1014.69
    ],
    "en": [
      "to 15 instead of 20, even though the max age timer is 20."
    ],
    "ru": [
      "до 15 вместо 20, даже если таймер максимального возраста равен 20."
    ]
  },
  {
    "time": [
      1014.69,
      1021.209
    ],
    "en": [
      "I don’t think that’s an important topic for the CCNA though, its a bit more advanced."
    ],
    "ru": [
      "Я не думаю, что это важная тема для CCNA, она более сложная."
    ]
  },
  {
    "time": [
      1021.209,
      1027.94
    ],
    "en": [
      "After that we have the three timers we talked about, max age, hello, and forward delay."
    ],
    "ru": [
      "После этого у нас есть три таймера, о которых мы говорили: максимальный возраст, привет и задержка пересылки."
    ]
  },
  {
    "time": [
      1027.94,
      1032.24
    ],
    "en": [
      "By the way, the spanning tree timers on the root bridge determine the spanning tree timers"
    ],
    "ru": [
      "Кстати, таймеры связующего дерева на корневом мосту определяют таймеры связующего дерева."
    ]
  },
  {
    "time": [
      1032.24,
      1039.02
    ],
    "en": [
      "for the rest of the switches in the network, even if they are configured differently."
    ],
    "ru": [
      "для остальных коммутаторов в сети, даже если они настроены иначе."
    ]
  },
  {
    "time": [
      1039.02,
      1045.33
    ],
    "en": [
      "Next let’s talk about some optional features of spanning tree, sometimes called the spanning tree toolkit."
    ],
    "ru": [
      "Теперь давайте поговорим о некоторых дополнительных функциях связующего дерева, иногда называемого набором инструментов связующего дерева."
    ]
  },
  {
    "time": [
      1045.33,
      1048.87
    ],
    "en": [
      "tree toolkit. These are features that can be enabled to improve the functionality of spanning tree"
    ],
    "ru": [
      "набор инструментов для дерева. Это функции, которые можно включить для улучшения функциональности связующего дерева."
    ]
  },
  {
    "time": [
      1048.87,
      1051.16
    ],
    "en": [
      "protocol in some way."
    ],
    "ru": [
      "протокол каким-то образом."
    ]
  },
  {
    "time": [
      1051.16,
      1053.81
    ],
    "en": [
      "The first one is called portfast."
    ],
    "ru": [
      "Первый называется портфастом."
    ]
  },
  {
    "time": [
      1053.81,
      1057.24
    ],
    "en": [
      "It solves one problem of spanning tree."
    ],
    "ru": [
      "Это решает одну проблему остовного дерева."
    ]
  },
  {
    "time": [
      1057.24,
      1062.72
    ],
    "en": [
      "Portfast can be enabled on interfaces which are connected to end hosts, like the G0/2"
    ],
    "ru": [
      "Portfast можно включить на интерфейсах, которые подключены к конечным хостам, например G0 / 2."
    ]
  },
  {
    "time": [
      1062.72,
      1065.4
    ],
    "en": [
      "interface on each of these switches."
    ],
    "ru": [
      "интерфейс на каждом из этих переключателей."
    ]
  },
  {
    "time": [
      1065.4,
      1068.28
    ],
    "en": [
      "These are designated ports, in a forwarding state."
    ],
    "ru": [
      "Это назначенные порты в состоянии пересылки."
    ]
  },
  {
    "time": [
      1068.28,
      1074.15
    ],
    "en": [
      "However, when they are first turned on or first connected to the PCs, they must go through"
    ],
    "ru": [
      "Однако при первом включении или первом подключении к ПК они должны пройти через"
    ]
  },
  {
    "time": [
      1074.15,
      1078.93
    ],
    "en": [
      "the Listening and Learning states first before they can start forwarding traffic."
    ],
    "ru": [
      "сначала состояния \"Прослушивание\" и \"Обучение\", прежде чем они смогут начать пересылку трафика."
    ]
  },
  {
    "time": [
      1078.93,
      1080.5
    ],
    "en": [
      "How long does that take?"
    ],
    "ru": [
      "Как долго это займет?"
    ]
  },
  {
    "time": [
      1080.5,
      1087.92
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
      1080.5,
      1087.92
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
      1087.92,
      1092.16
    ],
    "en": [
      "I want you to open up Packet Tracer and try a little experiment."
    ],
    "ru": [
      "Я хочу, чтобы вы открыли Packet Tracer и попробовали небольшой эксперимент."
    ]
  },
  {
    "time": [
      1092.16,
      1096.62
    ],
    "en": [
      "For this experiment, make sure Show Link Lights is enabled."
    ],
    "ru": [
      "Для этого эксперимента убедитесь, что параметр Show Link Lights включен."
    ]
  },
  {
    "time": [
      1096.62,
      1102.79
    ],
    "en": [
      "You can enable it by clicking on options, preferences, and then making sure this box is checked."
    ],
    "ru": [
      "Вы можете включить его, щелкнув параметры, настройки, а затем убедившись, что этот флажок установлен."
    ]
  },
  {
    "time": [
      1102.79,
      1111.2
    ],
    "en": [
      "is checked. I want you to place a switch and a PC like this, get a watch or timer ready, and then connect them."
    ],
    "ru": [
      "проверено. Я хочу, чтобы вы поместили переключатель и компьютер вот так, приготовили часы или таймер, а затем подключили их."
    ]
  },
  {
    "time": [
      1111.2,
      1115.06
    ],
    "en": [
      "connect them. At first you should see that the link light on the switch is orange."
    ],
    "ru": [
      "соедините их. Сначала вы должны увидеть, что индикатор ссылки на переключателе горит оранжевым."
    ]
  },
  {
    "time": [
      1115.06,
      1121.47
    ],
    "en": [
      "This is the same if you connect a real physical PC to a physical switch, the link light will be orange."
    ],
    "ru": [
      "То же самое, если вы подключаете реальный физический ПК к физическому коммутатору, индикатор соединения будет оранжевым."
    ]
  },
  {
    "time": [
      1121.47,
      1122.62
    ],
    "en": [
      "be orange. Why is this?"
    ],
    "ru": [
      "быть оранжевым. Почему это?"
    ]
  },
  {
    "time": [
      1122.62,
      1128.54
    ],
    "en": [
      "It’s because the port is not Forwarding yet, it is going through the Listening and Learning states."
    ],
    "ru": [
      "Это потому, что порт еще не переадресован, он проходит через состояния прослушивания и обучения."
    ]
  },
  {
    "time": [
      1128.54,
      1134.31
    ],
    "en": [
      "Learning states. However, 30 seconds later you should finally see the link light turn green."
    ],
    "ru": [
      "Состояние обучения. Однако через 30 секунд вы, наконец, должны увидеть, что индикатор ссылки загорится зеленым."
    ]
  },
  {
    "time": [
      1134.31,
      1136.7
    ],
    "en": [
      "The port is finally forwarding."
    ],
    "ru": [
      "Порт наконец-то переадресовывает."
    ]
  },
  {
    "time": [
      1136.7,
      1141.05
    ],
    "en": [
      "I told you why spanning tree goes through this process before putting a port in the"
    ],
    "ru": [
      "Я рассказал вам, почему связующее дерево проходит через этот процесс перед тем, как поместить порт в"
    ]
  },
  {
    "time": [
      1141.05,
      1146.22
    ],
    "en": [
      "forwarding state, it’s because Layer 2 loops are so dangerous for a network that the switch"
    ],
    "ru": [
      "пересылки, это связано с тем, что петли уровня 2 настолько опасны для сети, что коммутатор"
    ]
  },
  {
    "time": [
      1146.22,
      1151.96
    ],
    "en": [
      "wants to be absolutely sure no loop will be formed before forwarding out of that interface."
    ],
    "ru": [
      "хочет быть абсолютно уверенным, что никакой цикл не будет сформирован перед пересылкой из этого интерфейса."
    ]
  },
  {
    "time": [
      1151.96,
      1157.44
    ],
    "en": [
      "However, only interfaces connected to another switch can form a Layer 2 loop."
    ],
    "ru": [
      "Однако только интерфейсы, подключенные к другому коммутатору, могут образовывать петлю уровня 2."
    ]
  },
  {
    "time": [
      1157.44,
      1160.2
    ],
    "en": [
      "There is no risk of forming a loop with an end host."
    ],
    "ru": [
      "Нет риска образования петли с конечным хостом."
    ]
  },
  {
    "time": [
      1160.2,
      1165.28
    ],
    "en": [
      "So, wouldn’t it be nice if these ports connected to end hosts could start forwarding right"
    ],
    "ru": [
      "Итак, было бы неплохо, если бы эти порты, подключенные к конечным хостам, могли начать пересылку прямо"
    ]
  },
  {
    "time": [
      1165.28,
      1170.25
    ],
    "en": [
      "away, without having to wait 30 seconds to go from listening to learning to forwarding?"
    ],
    "ru": [
      "прочь, не дожидаясь 30 секунд, чтобы перейти от прослушивания к обучению к переадресации?"
    ]
  },
  {
    "time": [
      1170.25,
      1174.04
    ],
    "en": [
      "Well, that’s what portfast does."
    ],
    "ru": [
      "Что ж, это то, что делает портфаст."
    ]
  },
  {
    "time": [
      1174.04,
      1180.08
    ],
    "en": [
      "Portfast allows a port to move immediately to the Forwarding state, bypassing Listening and Learning."
    ],
    "ru": [
      "Portfast позволяет порту немедленно перейти в состояние пересылки, минуя прослушивание и обучение."
    ]
  },
  {
    "time": [
      1180.08,
      1184.93
    ],
    "en": [
      "and Learning. If used, it must be enabled only on ports connected to end hosts."
    ],
    "ru": [
      "и обучение. Если он используется, он должен быть включен только на портах, подключенных к конечным хостам."
    ]
  },
  {
    "time": [
      1184.93,
      1190.25
    ],
    "en": [
      "If enabled on a port connected to another switch it could cause a Layer 2 loop."
    ],
    "ru": [
      "Если этот параметр включен на порту, подключенном к другому коммутатору, это может вызвать петлю уровня 2."
    ]
  },
  {
    "time": [
      1190.25,
      1194.99
    ],
    "en": [
      "The purpose of the listening and learning states is to avoid causing a loop, so bypassing"
    ],
    "ru": [
      "Целью состояний прослушивания и обучения является предотвращение возникновения цикла, поэтому в обход"
    ]
  },
  {
    "time": [
      1194.99,
      1199.88
    ],
    "en": [
      "them is risky when connected to another switch."
    ],
    "ru": [
      "их опасно при подключении к другому коммутатору."
    ]
  },
  {
    "time": [
      1199.88,
      1203.49
    ],
    "en": [
      "We haven’t looked at any other spanning tree configurations yet because spanning tree"
    ],
    "ru": [
      "Мы еще не рассматривали другие конфигурации связующего дерева, поскольку связующее дерево"
    ]
  },
  {
    "time": [
      1203.49,
      1207.32
    ],
    "en": [
      "operates by default even without configuration."
    ],
    "ru": [
      "работает по умолчанию даже без конфигурации."
    ]
  },
  {
    "time": [
      1207.32,
      1213.68
    ],
    "en": [
      "We will look at general spanning tree configuration, but first lets look at portfast."
    ],
    "ru": [
      "Мы рассмотрим общую конфигурацию связующего дерева, но сначала рассмотрим portfast."
    ]
  },
  {
    "time": [
      1213.68,
      1219.55
    ],
    "en": [
      "Portfast is enabled at the interface level with the command SPANNING-TREE PORTFAST."
    ],
    "ru": [
      "Portfast включается на уровне интерфейса командой SPANNING-TREE PORTFAST."
    ]
  },
  {
    "time": [
      1219.55,
      1224.18
    ],
    "en": [
      "Then we get a warning about what I just told you, you should only enable portfast on ports"
    ],
    "ru": [
      "Затем мы получаем предупреждение о том, что я вам только что сказал, вы должны включать portfast только на портах."
    ]
  },
  {
    "time": [
      1224.18,
      1226.95
    ],
    "en": [
      "connected to an end host."
    ],
    "ru": [
      "подключен к конечному хосту."
    ]
  },
  {
    "time": [
      1226.95,
      1231.42
    ],
    "en": [
      "There is also a message saying that, even though portfast was configured, it will only"
    ],
    "ru": [
      "Также есть сообщение о том, что, несмотря на то, что portfast был настроен, он будет только"
    ]
  },
  {
    "time": [
      1231.42,
      1236.89
    ],
    "en": [
      "take effect if the interface is in a non-trunking mode, so if it is an access port."
    ],
    "ru": [
      "вступают в силу, если интерфейс не в транкинговом режиме, то есть, если это порт доступа."
    ]
  },
  {
    "time": [
      1236.89,
      1241.69
    ],
    "en": [
      "That’s because trunk ports are typically connected to other switches."
    ],
    "ru": [
      "Это связано с тем, что магистральные порты обычно подключаются к другим коммутаторам."
    ]
  },
  {
    "time": [
      1241.69,
      1247.43
    ],
    "en": [
      "You can still configure portfast on a trunk port, it just won’t take effect."
    ],
    "ru": [
      "Вы по-прежнему можете настроить portfast на магистральном порту, это просто не вступит в силу."
    ]
  },
  {
    "time": [
      1247.43,
      1254.88
    ],
    "en": [
      "You can also enable portfast with the following command in global config mode: spanning-tree portfast default."
    ],
    "ru": [
      "Вы также можете включить portfast с помощью следующей команды в режиме глобальной конфигурации: spanning-tree portfast default."
    ]
  },
  {
    "time": [
      1254.88,
      1259.99
    ],
    "en": [
      "portfast default. This enables portfast on all access ports, but not trunk ports."
    ],
    "ru": [
      "portfast по умолчанию. Это включает режим portfast на всех портах доступа, но не на магистральных портах."
    ]
  },
  {
    "time": [
      1259.99,
      1264.91
    ],
    "en": [
      "So, portfast is a great feature for getting a switchport connected to an end host running"
    ],
    "ru": [
      "Итак, portfast - отличная функция для подключения порта коммутатора к запущенному конечному хосту."
    ]
  },
  {
    "time": [
      1264.91,
      1268.35
    ],
    "en": [
      "quickly without having to wait 30 seconds."
    ],
    "ru": [
      "быстро, не дожидаясь 30 секунд."
    ]
  },
  {
    "time": [
      1268.35,
      1272.27
    ],
    "en": [
      "However, it can still be a risk."
    ],
    "ru": [
      "Однако это все еще может быть риском."
    ]
  },
  {
    "time": [
      1272.27,
      1276.49
    ],
    "en": [
      "What if an employee plugs another switch into the network like this?"
    ],
    "ru": [
      "Что, если сотрудник вот так вот подключит к сети другой коммутатор?"
    ]
  },
  {
    "time": [
      1276.49,
      1281.5
    ],
    "en": [
      "This employee doesn’t necessarily have malicious intent, they could just be unaware of exactly"
    ],
    "ru": [
      "У этого сотрудника не обязательно есть злой умысел, он может просто не знать"
    ]
  },
  {
    "time": [
      1281.5,
      1283.65
    ],
    "en": [
      "what they are doing."
    ],
    "ru": [
      "что они делают."
    ]
  },
  {
    "time": [
      1283.65,
      1290.63
    ],
    "en": [
      "Because portfast is putting these interfaces into a forwarding state, a Layer 2 loop is formed."
    ],
    "ru": [
      "Поскольку portfast переводит эти интерфейсы в состояние пересылки, образуется петля уровня 2."
    ]
  },
  {
    "time": [
      1290.63,
      1295.25
    ],
    "en": [
      "formed. Portfast can also cause loops if the network cabling is changed without proper caution,"
    ],
    "ru": [
      "сформирован. Portfast также может вызвать образование петель, если сетевой кабель изменен без должной осторожности,"
    ]
  },
  {
    "time": [
      1295.25,
      1300.84
    ],
    "en": [
      "perhaps a host is moved to a different switchport and a switch is connected to its old port."
    ],
    "ru": [
      "возможно, хост перемещен в другой порт коммутатора, а коммутатор подключен к его старому порту."
    ]
  },
  {
    "time": [
      1300.84,
      1306.28
    ],
    "en": [
      "Anyway, the point is that there is a risk to using portfast."
    ],
    "ru": [
      "В любом случае, дело в том, что есть риск использовать portfast."
    ]
  },
  {
    "time": [
      1306.28,
      1313.36
    ],
    "en": [
      "However, there is an additional spanning tree optional feature that we can enable to protect against such loops."
    ],
    "ru": [
      "Однако есть дополнительная необязательная функция связующего дерева, которую мы можем включить для защиты от таких петель."
    ]
  },
  {
    "time": [
      1313.36,
      1316.59
    ],
    "en": [
      "against such loops. It’s called BPDU Guard."
    ],
    "ru": [
      "против таких петель. Он называется BPDU Guard."
    ]
  },
  {
    "time": [
      1316.59,
      1322.34
    ],
    "en": [
      "If an interface with BPDU Guard enabled receives a BPDU from another switch, the interface"
    ],
    "ru": [
      "Если интерфейс с включенной защитой BPDU Guard получает BPDU от другого коммутатора, интерфейс"
    ]
  },
  {
    "time": [
      1322.34,
      1325.99
    ],
    "en": [
      "will be shut down to prevent a loop from forming."
    ],
    "ru": [
      "будет отключен, чтобы предотвратить образование петли."
    ]
  },
  {
    "time": [
      1325.99,
      1329.74
    ],
    "en": [
      "BPDU guard is very simple to configure."
    ],
    "ru": [
      "BPDU Guard очень просто настроить."
    ]
  },
  {
    "time": [
      1329.74,
      1337.05
    ],
    "en": [
      "From interface configuration mode, use the command SPANNING-TREE BPDUGUARD ENABLE. That’s it."
    ],
    "ru": [
      "В режиме настройки интерфейса используйте команду SPANNING-TREE BPDUGUARD ENABLE. Вот и все."
    ]
  },
  {
    "time": [
      1337.05,
      1342.85
    ],
    "en": [
      "That’s it. Similar to portfast, there is also an option to enable it by default. That’s this command."
    ],
    "ru": [
      "Вот и все. Как и в случае с portfast, есть возможность включить его по умолчанию. Это команда."
    ]
  },
  {
    "time": [
      1342.85,
      1349.89
    ],
    "en": [
      "That’s this command. From global config mode, use the command SPANNING-TREE PORTFAST BPDUGUARD DEFAULT."
    ],
    "ru": [
      "Это команда. В режиме глобальной конфигурации используйте команду SPANNING-TREE PORTFAST BPDUGUARD DEFAULT."
    ]
  },
  {
    "time": [
      1349.89,
      1354.97
    ],
    "en": [
      "This enables BPDU Guard on all portfast-enabled interfaces."
    ],
    "ru": [
      "Это включает BPDU Guard на всех интерфейсах с поддержкой portfast."
    ]
  },
  {
    "time": [
      1354.97,
      1360.01
    ],
    "en": [
      "Notice that the commands are a little different, to enable it directly on the interface its"
    ],
    "ru": [
      "Обратите внимание на то, что команды немного отличаются, чтобы включить их прямо в интерфейсе."
    ]
  },
  {
    "time": [
      1360.01,
      1364.8
    ],
    "en": [
      "spanning-tree bpduguard enable, no mention of portfast."
    ],
    "ru": [
      "Spanning-tree bpduguard enable, никакого упоминания о portfast."
    ]
  },
  {
    "time": [
      1364.8,
      1372.74
    ],
    "en": [
      "However to enable it globally, you have to include portfast in the command, spanning-tree portfast bpduguard default."
    ],
    "ru": [
      "Однако, чтобы включить его глобально, вы должны включить portfast в команду, spanning-tree portfast bpduguard по умолчанию."
    ]
  },
  {
    "time": [
      1372.74,
      1378.27
    ],
    "en": [
      "portfast bpduguard default. I took this screenshot in packet tracer, so the CLI color scheme is a little different"
    ],
    "ru": [
      "portfast bpduguard по умолчанию. Я сделал этот снимок экрана в пакетном трассировщике, поэтому цветовая схема интерфейса командной строки немного отличается."
    ]
  },
  {
    "time": [
      1378.27,
      1384.74
    ],
    "en": [
      "than the previous one, but I connected a switch to a BPDU-guard enabled interace, and now"
    ],
    "ru": [
      "чем предыдущий, но я подключил коммутатор к взаимодействию с BPDU-guard, и теперь"
    ]
  },
  {
    "time": [
      1384.74,
      1390.28
    ],
    "en": [
      "you can see what happens when a BPDU arrives on a BPDU guard-enabled port."
    ],
    "ru": [
      "вы можете увидеть, что происходит, когда BPDU прибывает на порт с включенной защитой BPDU."
    ]
  },
  {
    "time": [
      1390.28,
      1394.4
    ],
    "en": [
      "The port is disabled, it is effectively shut down."
    ],
    "ru": [
      "Порт отключен, он фактически отключен."
    ]
  },
  {
    "time": [
      1394.4,
      1397.89
    ],
    "en": [
      "What if you want to enable the port again?"
    ],
    "ru": [
      "Что делать, если вы хотите снова включить порт?"
    ]
  },
  {
    "time": [
      1397.89,
      1405.54
    ],
    "en": [
      "To enable a port that was disabled by BPDU guard, simply SHUTDOWN, and then NO SHUTDOWN the interface."
    ],
    "ru": [
      "Чтобы включить порт, который был отключен защитой BPDU, просто ВЫКЛЮЧИТЕ, а затем НЕ ВЫКЛЮЧИТЕ интерфейс."
    ]
  },
  {
    "time": [
      1405.54,
      1408.13
    ],
    "en": [
      "the interface. You can see that the interface comes up."
    ],
    "ru": [
      "интерфейс. Вы видите, что появляется интерфейс."
    ]
  },
  {
    "time": [
      1408.13,
      1413.33
    ],
    "en": [
      "However, if you didn’t actually solve the problem and it's still connected to a switch,"
    ],
    "ru": [
      "Однако, если вы на самом деле не решили проблему, но он все еще подключен к коммутатору,"
    ]
  },
  {
    "time": [
      1413.33,
      1419.12
    ],
    "en": [
      "you can see here that the interface will immediately be disabled again when the next BPDU arrives."
    ],
    "ru": [
      "вы можете видеть здесь, что интерфейс будет немедленно снова отключен, когда прибудет следующий BPDU."
    ]
  },
  {
    "time": [
      1419.12,
      1425.73
    ],
    "en": [
      "So, make sure you actually solve the problem before trying to enable the interface again."
    ],
    "ru": [
      "Итак, убедитесь, что вы действительно решили проблему, прежде чем снова пытаться включить интерфейс."
    ]
  },
  {
    "time": [
      1425.73,
      1433.59
    ],
    "en": [
      "In terms of spanning tree optional features, the 200-301 exam topics list only mentions portfast."
    ],
    "ru": [
      "Что касается дополнительных функций связующего дерева, в списке тем экзамена 200-301 упоминается только portfast."
    ]
  },
  {
    "time": [
      1433.59,
      1440.1
    ],
    "en": [
      "portfast. I also showed you BPDU guard because it is connected to portfast, so I think it is included."
    ],
    "ru": [
      "Портфаст. Я также показал вам защиту BPDU, потому что она подключена к portfast, поэтому я думаю, что она включена."
    ]
  },
  {
    "time": [
      1440.1,
      1443.98
    ],
    "en": [
      "There are many other optional features that can be enabled, and there’s no need to know"
    ],
    "ru": [
      "Есть много других дополнительных функций, которые можно включить, и не нужно знать"
    ]
  },
  {
    "time": [
      1443.98,
      1448.951
    ],
    "en": [
      "all of them for the CCNA, but let me just quickly introduce two others you should at"
    ],
    "ru": [
      "все они для CCNA, но позвольте мне быстро представить два других, которые вы должны"
    ]
  },
  {
    "time": [
      1448.951,
      1454.65
    ],
    "en": [
      "least know the name and basic purpose of, just incase they are mentioned in the exam."
    ],
    "ru": [
      "Меньше всего знать название и основную цель, на всякий случай, если они упоминаются на экзамене."
    ]
  },
  {
    "time": [
      1454.65,
      1458.69
    ],
    "en": [
      "They are Root Guard and Loop Guard."
    ],
    "ru": [
      "Это Root Guard и Loop Guard."
    ]
  },
  {
    "time": [
      1458.69,
      1465.17
    ],
    "en": [
      "If you enable root guard on an interface, even if it receives a superior BPDU (with a lower"
    ],
    "ru": [
      "Если вы включите корневую защиту на интерфейсе, даже если он получает более высокий BPDU (с более низким"
    ]
  },
  {
    "time": [
      1465.17,
      1470.99
    ],
    "en": [
      "bridge ID) on that interface, the switch will not accept the new switch as the root bridge."
    ],
    "ru": [
      "идентификатор моста) на этом интерфейсе, коммутатор не примет новый коммутатор в качестве корневого моста."
    ]
  },
  {
    "time": [
      1470.99,
      1473.5
    ],
    "en": [
      "The interface will be disabled."
    ],
    "ru": [
      "Интерфейс будет отключен."
    ]
  },
  {
    "time": [
      1473.5,
      1478.47
    ],
    "en": [
      "This helps maintain the spanning tree topology if someone plugs another switch into the network"
    ],
    "ru": [
      "Это помогает поддерживать топологию связующего дерева, если кто-то подключает другой коммутатор к сети."
    ]
  },
  {
    "time": [
      1478.47,
      1484.48
    ],
    "en": [
      "either with bad intent, or perhaps without knowing the impact of their action."
    ],
    "ru": [
      "либо с плохими намерениями, либо, возможно, не осознавая последствий своих действий."
    ]
  },
  {
    "time": [
      1484.48,
      1490.28
    ],
    "en": [
      "If you enable loop guard on an interface, even if the interface stops receiving BPDUs,"
    ],
    "ru": [
      "Если вы включите защиту от петель на интерфейсе, даже если интерфейс перестает получать BPDU,"
    ]
  },
  {
    "time": [
      1490.28,
      1492.69
    ],
    "en": [
      "it will not start forwarding."
    ],
    "ru": [
      "пересылка не начнется."
    ]
  },
  {
    "time": [
      1492.69,
      1495.3
    ],
    "en": [
      "The interface will be disabled."
    ],
    "ru": [
      "Интерфейс будет отключен."
    ]
  },
  {
    "time": [
      1495.3,
      1499.65
    ],
    "en": [
      "This prevents loops that can happen if an interface fails only in one direction, causing"
    ],
    "ru": [
      "Это предотвращает зацикливание, которое может произойти, если интерфейс выходит из строя только в одном направлении, вызывая"
    ]
  },
  {
    "time": [
      1499.65,
      1504.17
    ],
    "en": [
      "what is called a ‘unidirectional link’ that can’t receive data, but is still able"
    ],
    "ru": [
      "так называемая «однонаправленная ссылка», которая не может получать данные, но все же может"
    ]
  },
  {
    "time": [
      1504.17,
      1506.29
    ],
    "en": [
      "to forward it, or the opposite."
    ],
    "ru": [
      "для пересылки или наоборот."
    ]
  },
  {
    "time": [
      1506.29,
      1510.58
    ],
    "en": [
      "So, those are two other optional spanning tree features."
    ],
    "ru": [
      "Итак, это две другие дополнительные функции связующего дерева."
    ]
  },
  {
    "time": [
      1510.58,
      1516.35
    ],
    "en": [
      "However, as I said, You probably don’t have to know these spanning tree optional features (or others"
    ],
    "ru": [
      "Однако, как я уже сказал, вам, вероятно, не обязательно знать эти дополнительные функции связующего дерева (или другие"
    ]
  },
  {
    "time": [
      1516.35,
      1521.75
    ],
    "en": [
      "such as UplinkFast, Backbone Fast, etc) for the CCNA."
    ],
    "ru": [
      "таких как UplinkFast, Backbone Fast и т. д.) для CCNA."
    ]
  },
  {
    "time": [
      1521.75,
      1525.72
    ],
    "en": [
      "But make sure you know Portfast and BPDU Guard."
    ],
    "ru": [
      "Но убедитесь, что вы знаете Portfast и BPDU Guard."
    ]
  },
  {
    "time": [
      1525.72,
      1530.49
    ],
    "en": [
      "If you want to read more about the others just in case, do a Google search."
    ],
    "ru": [
      "Если вы на всякий случай хотите узнать больше о других, выполните поиск в Google."
    ]
  },
  {
    "time": [
      1530.49,
      1537.38
    ],
    "en": [
      "Finally, let’s look at some basic spanning tree configurations, starting with the mode."
    ],
    "ru": [
      "Наконец, давайте рассмотрим некоторые основные конфигурации связующего дерева, начиная с режима."
    ]
  },
  {
    "time": [
      1537.38,
      1543.13
    ],
    "en": [
      "You can configure the spanning mode the switch uses with the command SPANNING-TREE MODE,"
    ],
    "ru": [
      "Вы можете настроить режим охвата, используемый коммутатором, с помощью команды SPANNING-TREE MODE,"
    ]
  },
  {
    "time": [
      1543.13,
      1545.84
    ],
    "en": [
      "and then you can see there are three options."
    ],
    "ru": [
      "и тогда вы увидите, что есть три варианта."
    ]
  },
  {
    "time": [
      1545.84,
      1550.95
    ],
    "en": [
      "MST, multiple spanning tree, is not a topic you need to know for the CCNA."
    ],
    "ru": [
      "MST, множественное связующее дерево, не является темой, которую вам нужно знать для CCNA."
    ]
  },
  {
    "time": [
      1550.95,
      1557.12
    ],
    "en": [
      "PVST is the classic spanning tree but with Cisco’s per-vlan addition, the one we have"
    ],
    "ru": [
      "PVST - это классическое связующее дерево, но с добавлением Cisco per-vlan, которое у нас есть"
    ]
  },
  {
    "time": [
      1557.12,
      1559.04
    ],
    "en": [
      "been learning about so far."
    ],
    "ru": [
      "изучаю до сих пор."
    ]
  },
  {
    "time": [
      1559.04,
      1564.34
    ],
    "en": [
      "Rapid-PVST is an improved version I will tell you about in the next lecture."
    ],
    "ru": [
      "Rapid-PVST - это улучшенная версия, о которой я расскажу в следующей лекции."
    ]
  },
  {
    "time": [
      1564.34,
      1571.25
    ],
    "en": [
      "Modern Cisco switches run rapid-PVST by default, and usually there is no reason to change it."
    ],
    "ru": [
      "Современные коммутаторы Cisco по умолчанию используют Rapid-PVST, и обычно нет причин его менять."
    ]
  },
  {
    "time": [
      1571.25,
      1575.37
    ],
    "en": [
      "However, if you want to try out the classic spanning tree for your lab, like I did for"
    ],
    "ru": [
      "Однако, если вы хотите опробовать классическое остовное дерево для своей лаборатории, как это сделал я для"
    ]
  },
  {
    "time": [
      1575.37,
      1583.2
    ],
    "en": [
      "these demonstrations, you can enable it with this command, SPANNING-TREE MODE PVST."
    ],
    "ru": [
      "эти демонстрации, вы можете включить его с помощью этой команды SPANNING-TREE MODE PVST."
    ]
  },
  {
    "time": [
      1583.2,
      1589.4
    ],
    "en": [
      "You can also manually configure the root bridge by manipulating the bridge priority of a switch."
    ],
    "ru": [
      "Вы также можете вручную настроить корневой мост, управляя приоритетом моста коммутатора."
    ]
  },
  {
    "time": [
      1589.4,
      1594.66
    ],
    "en": [
      "With these MAC addresses and the default priority values, SW1 is the root bridge."
    ],
    "ru": [
      "С этими MAC-адресами и значениями приоритета по умолчанию SW1 является корневым мостом."
    ]
  },
  {
    "time": [
      1594.66,
      1598.98
    ],
    "en": [
      "However, we could configure SW3 to be the root bridge."
    ],
    "ru": [
      "Однако мы могли настроить SW3 как корневой мост."
    ]
  },
  {
    "time": [
      1598.98,
      1602.88
    ],
    "en": [
      "We could also configure something called a ‘secondary’ root bridge, which will be"
    ],
    "ru": [
      "Мы также можем настроить так называемый «вторичный» корневой мост, который будет"
    ]
  },
  {
    "time": [
      1602.88,
      1607.26
    ],
    "en": [
      "next in line to become the root bridge if the current root bridge fails."
    ],
    "ru": [
      "следующий в очереди, чтобы стать корневым мостом в случае отказа текущего корневого моста."
    ]
  },
  {
    "time": [
      1607.26,
      1611.47
    ],
    "en": [
      "Let’s see how to configure that."
    ],
    "ru": [
      "Посмотрим, как это настроить."
    ]
  },
  {
    "time": [
      1611.47,
      1616.21
    ],
    "en": [
      "This is how to configure the root bridge, called the ‘primary’ root bridge."
    ],
    "ru": [
      "Вот как настроить корневой мост, называемый «основным» корневым мостом."
    ]
  },
  {
    "time": [
      1616.21,
      1623.41
    ],
    "en": [
      "SPANNING-TREE VLAN, followed by the vlan number, then ROOT PRIMARY."
    ],
    "ru": [
      "SPANNING-TREE VLAN, за которым следует номер vlan, затем ROOT PRIMARY."
    ]
  },
  {
    "time": [
      1623.41,
      1626.7
    ],
    "en": [
      "Now you can see that this bridge has become the root."
    ],
    "ru": [
      "Теперь вы можете видеть, что этот мост стал корневым."
    ]
  },
  {
    "time": [
      1626.7,
      1632.1
    ],
    "en": [
      "This command sets the STP priority to 24576."
    ],
    "ru": [
      "Эта команда устанавливает приоритет STP на 24576."
    ]
  },
  {
    "time": [
      1632.1,
      1637.72
    ],
    "en": [
      "If another switch already has a priority lower than 24576, it sets this switch’s priority"
    ],
    "ru": [
      "Если другой коммутатор уже имеет приоритет ниже 24576, он устанавливает приоритет этого коммутатора."
    ]
  },
  {
    "time": [
      1637.72,
      1641.54
    ],
    "en": [
      "to 4096 less than the other switch’s priority."
    ],
    "ru": [
      "на 4096 меньше, чем приоритет другого коммутатора."
    ]
  },
  {
    "time": [
      1641.54,
      1647.33
    ],
    "en": [
      "So, it makes this switch have the lowest priority, making it the root bridge."
    ],
    "ru": [
      "Таким образом, этот коммутатор имеет самый низкий приоритет, что делает его корневым мостом."
    ]
  },
  {
    "time": [
      1647.33,
      1650.99
    ],
    "en": [
      "If you then check the running-config, you can see that the command that is actually"
    ],
    "ru": [
      "Если вы затем проверите рабочую конфигурацию, вы увидите, что команда, которая на самом деле"
    ]
  },
  {
    "time": [
      1650.99,
      1657.22
    ],
    "en": [
      "applied in this case is SPANNING-TREE VLAN 1 PRIORITY 24576."
    ],
    "ru": [
      "в этом случае применяется SPANNING-TREE VLAN 1 PRIORITY 24576."
    ]
  },
  {
    "time": [
      1657.22,
      1663.4
    ],
    "en": [
      "So, this commands tells the switch to apply the spanning-tree priority command, either"
    ],
    "ru": [
      "Таким образом, эти команды говорят коммутатору применить команду приоритета связующего дерева, либо"
    ]
  },
  {
    "time": [
      1663.4,
      1671.59
    ],
    "en": [
      "with the priority 24576, or 4096 less than the current lowest priority."
    ],
    "ru": [
      "с приоритетом 24576 или на 4096 меньше, чем текущий самый низкий приоритет."
    ]
  },
  {
    "time": [
      1671.59,
      1676.3
    ],
    "en": [
      "The command to set the secondary root bridge, the bridge with the second-lowest priority,"
    ],
    "ru": [
      "Команда для установки вторичного корневого моста, моста со вторым по величине приоритетом,"
    ]
  },
  {
    "time": [
      1676.3,
      1677.83
    ],
    "en": [
      "is basically the same."
    ],
    "ru": [
      "в основном то же самое."
    ]
  },
  {
    "time": [
      1677.83,
      1683.67
    ],
    "en": [
      "SPANNING-TREE VLAN, vlan number, ROOT SECONDARY."
    ],
    "ru": [
      "SPANNING-TREE VLAN, номер vlan, ROOT SECONDARY."
    ]
  },
  {
    "time": [
      1683.67,
      1686.99
    ],
    "en": [
      "Now the priority has been set to 28672."
    ],
    "ru": [
      "Теперь приоритет установлен на 28672."
    ]
  },
  {
    "time": [
      1686.99,
      1693.65
    ],
    "en": [
      "So, this command sets the spanning tree priority for this VLAN to 28672."
    ],
    "ru": [
      "Итак, эта команда устанавливает приоритет связующего дерева для этой VLAN равным 28672."
    ]
  },
  {
    "time": [
      1693.65,
      1701.23
    ],
    "en": [
      "However, like the root primary command, the actual command that is applied is the spanning-tree priority command."
    ],
    "ru": [
      "Однако, как и основная команда root, фактически применяется команда с приоритетом связующего дерева."
    ]
  },
  {
    "time": [
      1701.23,
      1706.46
    ],
    "en": [
      "priority command. So, for both of these commands, you could actually use the spanning-tree priority command"
    ],
    "ru": [
      "команда приоритета. Итак, для обеих этих команд вы можете использовать команду приоритета связующего дерева"
    ]
  },
  {
    "time": [
      1706.46,
      1711.32
    ],
    "en": [
      "as you see here to configure the root bridge, the spanning-tree root command is just a simple"
    ],
    "ru": [
      "как вы видите здесь, чтобы настроить корневой мост, команда корня связующего дерева - это просто"
    ]
  },
  {
    "time": [
      1711.32,
      1716.6
    ],
    "en": [
      "way to do it without remembering the different increments of 4096."
    ],
    "ru": [
      "способ сделать это, не запоминая различные приращения 4096."
    ]
  },
  {
    "time": [
      1716.6,
      1720.91
    ],
    "en": [
      "You may remember from the last lecture, that the bridge priority must be set in increments"
    ],
    "ru": [
      "Вы, возможно, помните из прошлой лекции, что приоритет моста нужно устанавливать с шагом"
    ]
  },
  {
    "time": [
      1720.91,
      1726.13
    ],
    "en": [
      "of 4096, so the root command is easier to use."
    ],
    "ru": [
      "из 4096, поэтому использовать команду root проще."
    ]
  },
  {
    "time": [
      1726.13,
      1729.91
    ],
    "en": [
      "So, this is our topology now."
    ],
    "ru": [
      "Итак, теперь это наша топология."
    ]
  },
  {
    "time": [
      1729.91,
      1738.03
    ],
    "en": [
      "The interface between SW1 and SW2 is disabled because SW1 is blocking its G0/0 interface."
    ],
    "ru": [
      "Интерфейс между SW1 и SW2 отключен, потому что SW1 блокирует свой интерфейс G0 / 0."
    ]
  },
  {
    "time": [
      1738.03,
      1745.5
    ],
    "en": [
      "This topology is running Cisco’s PVST+, so actually this is just the topology for VLAN1."
    ],
    "ru": [
      "В этой топологии работает Cisco PVST +, так что на самом деле это только топология для VLAN1."
    ]
  },
  {
    "time": [
      1745.5,
      1752.36
    ],
    "en": [
      "VLAN1. Perhaps there is another VLAN, VLAN 2, in this topology, what will the topology look like for it?"
    ],
    "ru": [
      "VLAN1. Возможно, в этой топологии есть еще одна VLAN, VLAN 2, как будет выглядеть топология для нее?"
    ]
  },
  {
    "time": [
      1752.36,
      1757.29
    ],
    "en": [
      "like for it? It will look like this, the default topology, because the root bridge settings we configured"
    ],
    "ru": [
      "как за это? Это будет выглядеть так, топология по умолчанию, потому что настройки корневого моста, которые мы настроили"
    ]
  },
  {
    "time": [
      1757.29,
      1759.97
    ],
    "en": [
      "only apply to VLAN 1."
    ],
    "ru": [
      "применимо только к VLAN 1."
    ]
  },
  {
    "time": [
      1759.97,
      1766.25
    ],
    "en": [
      "In VLAN 2, the connection between SW1 and SW2 WON’T be disabled, instead the connection"
    ],
    "ru": [
      "В VLAN 2 соединение между SW1 и SW2 НЕ будет отключено, вместо этого соединение"
    ]
  },
  {
    "time": [
      1766.25,
      1769.82
    ],
    "en": [
      "between SW2 and SW3 will be disabled."
    ],
    "ru": [
      "между SW2 и SW3 будет отключено."
    ]
  },
  {
    "time": [
      1769.82,
      1774.31
    ],
    "en": [
      "This allows for what’s called spanning tree load balancing."
    ],
    "ru": [
      "Это позволяет выполнять так называемую балансировку нагрузки связующего дерева."
    ]
  },
  {
    "time": [
      1774.31,
      1779.79
    ],
    "en": [
      "If you have multiple VLANs in your network, blocking the same interface in each VLAN is"
    ],
    "ru": [
      "Если в вашей сети несколько VLAN, блокировка одного и того же интерфейса в каждой VLAN является"
    ]
  },
  {
    "time": [
      1779.79,
      1782.4
    ],
    "en": [
      "a waste of interface bandwidth."
    ],
    "ru": [
      "трата пропускной способности интерфейса."
    ]
  },
  {
    "time": [
      1782.4,
      1786.27
    ],
    "en": [
      "That connection will be doing nothing, just waiting for another connection to fail so"
    ],
    "ru": [
      "Это соединение не будет делать ничего, просто ожидая сбоя другого соединения, поэтому"
    ]
  },
  {
    "time": [
      1786.27,
      1787.71
    ],
    "en": [
      "it can start forwarding."
    ],
    "ru": [
      "он может начать пересылку."
    ]
  },
  {
    "time": [
      1787.71,
      1793.03
    ],
    "en": [
      "However, if you configure a different root bridge for different VLANs, different VLANs"
    ],
    "ru": [
      "Однако, если вы настраиваете другой корневой мост для разных VLAN, разные VLAN"
    ]
  },
  {
    "time": [
      1793.03,
      1795.86
    ],
    "en": [
      "will disable different interfaces."
    ],
    "ru": [
      "отключит разные интерфейсы."
    ]
  },
  {
    "time": [
      1795.86,
      1802.37
    ],
    "en": [
      "Okay, to check if you understood that explanation, let’s do a quick quiz."
    ],
    "ru": [
      "Хорошо, чтобы проверить, поняли ли вы это объяснение, давайте проведем небольшую викторину."
    ]
  },
  {
    "time": [
      1802.37,
      1808.57
    ],
    "en": [
      "This is quiz question 7, because in day 20’s lecture we did spanning tree quizzes 1 to 6."
    ],
    "ru": [
      "Это 7-й вопрос викторины, потому что в 20-й день лекции мы проводили тесты с 1 по 6 на основе связующего дерева."
    ]
  },
  {
    "time": [
      1808.57,
      1813.6
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
      1808.57,
      1813.6
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
      1813.6,
      1817.95
    ],
    "en": [
      "By default, SW3 is the root bridge for both VLANs."
    ],
    "ru": [
      "По умолчанию SW3 является корневым мостом для обеих сетей VLAN."
    ]
  },
  {
    "time": [
      1817.95,
      1824.4
    ],
    "en": [
      "Configure SW1 as the primary root for VLAN10 and the secondary root for VLAN20."
    ],
    "ru": [
      "Настройте SW1 в качестве основного корня для VLAN10 и вторичного корня для VLAN20."
    ]
  },
  {
    "time": [
      1824.4,
      1831.46
    ],
    "en": [
      "Configure SW2 as the primary root for VLAN20 and the secondary root for VLAN10."
    ],
    "ru": [
      "Настройте SW2 в качестве основного корня для VLAN20 и вторичного корня для VLAN10."
    ]
  },
  {
    "time": [
      1831.46,
      1837.39
    ],
    "en": [
      "Which two commands should you issue on SW1, and which two commands should you issue on SW2?"
    ],
    "ru": [
      "Какие две команды следует вводить на SW1, а какие две - на SW2?"
    ]
  },
  {
    "time": [
      1837.39,
      1844.98
    ],
    "en": [
      "SW2? So, use the commands I just showed you, the spanning-tree root commands, and configure SW1 and SW2."
    ],
    "ru": [
      "SW2? Итак, используйте команды, которые я вам только что показал, команды корня связующего дерева и настройте SW1 и SW2."
    ]
  },
  {
    "time": [
      1844.98,
      1849.84
    ],
    "en": [
      "SW1 and SW2. You don’t have access to the CLI so just use an empty text file to write out the commands,"
    ],
    "ru": [
      "SW1 и SW2. У вас нет доступа к интерфейсу командной строки, поэтому просто используйте пустой текстовый файл для записи команд,"
    ]
  },
  {
    "time": [
      1849.84,
      1852.19
    ],
    "en": [
      "two commands on each switch."
    ],
    "ru": [
      "две команды на каждом переключателе."
    ]
  },
  {
    "time": [
      1852.19,
      1859.22
    ],
    "en": [
      "Pause the video now to do so. Okay, let’s check."
    ],
    "ru": [
      "Чтобы сделать это, приостановите видео сейчас. Хорошо, давай проверим."
    ]
  },
  {
    "time": [
      1859.22,
      1865.921
    ],
    "en": [
      "Okay, let’s check. We want to make SW1 the primary root bridge for VLAN10 and the secondary for VLAN20, so"
    ],
    "ru": [
      "Хорошо, давай проверим. Мы хотим сделать SW1 первичным корневым мостом для VLAN10 и вторичным для VLAN20, поэтому"
    ]
  },
  {
    "time": [
      1865.921,
      1869.26
    ],
    "en": [
      "essentially it acts like a backup root bridge for VLAN20."
    ],
    "ru": [
      "по сути, он действует как резервный корневой мост для VLAN20."
    ]
  },
  {
    "time": [
      1869.26,
      1874.38
    ],
    "en": [
      "So, these are the commands to issue on SW1."
    ],
    "ru": [
      "Итак, это команды, которые нужно выполнить на SW1."
    ]
  },
  {
    "time": [
      1874.38,
      1876.99
    ],
    "en": [
      "On SW2 we want to do the opposite."
    ],
    "ru": [
      "В SW2 мы хотим сделать наоборот."
    ]
  },
  {
    "time": [
      1876.99,
      1882.48
    ],
    "en": [
      "It should be the root bridge for VLAN20, and be just the secondary root bridge for VLAN10,"
    ],
    "ru": [
      "Он должен быть корневым мостом для VLAN20 и просто вторичным корневым мостом для VLAN10,"
    ]
  },
  {
    "time": [
      1882.48,
      1889.62
    ],
    "en": [
      "so it will have the second lowest priority in VLAN10 and become the root for VLAN10 if SW1 fails."
    ],
    "ru": [
      "таким образом, он будет иметь второй самый низкий приоритет в VLAN10 и станет корневым для VLAN10, если SW1 выйдет из строя."
    ]
  },
  {
    "time": [
      1889.62,
      1894.86
    ],
    "en": [
      "SW1 fails. These are the commands to issue on SW2, basically the opposite of SW1."
    ],
    "ru": [
      "SW1 выходит из строя. Это команды для SW2, в основном противоположные SW1."
    ]
  },
  {
    "time": [
      1894.86,
      1897.46
    ],
    "en": [
      "So, did you get the correct answers?"
    ],
    "ru": [
      "Итак, вы получили правильные ответы?"
    ]
  },
  {
    "time": [
      1897.46,
      1899.53
    ],
    "en": [
      "If not, don’t worry."
    ],
    "ru": [
      "Если нет, не волнуйтесь."
    ]
  },
  {
    "time": [
      1899.53,
      1903.49
    ],
    "en": [
      "Please watch the next video which will be a lab video covering the configurations you"
    ],
    "ru": [
      "Пожалуйста, посмотрите следующее видео, которое будет лабораторным, описывающим конфигурации, которые вы"
    ]
  },
  {
    "time": [
      1903.49,
      1908.06
    ],
    "en": [
      "learn in this video, you can practice with that lab. Or of course feel free to make your"
    ],
    "ru": [
      "узнайте из этого видео, вы можете попрактиковаться в этой лабораторной работе. Или, конечно, не стесняйтесь делать свои"
    ]
  },
  {
    "time": [
      1908.06,
      1912.39
    ],
    "en": [
      "own labs in packet tracer to practice."
    ],
    "ru": [
      "собственные лаборатории в пакетном трассировщике для практики."
    ]
  },
  {
    "time": [
      1912.39,
      1918.07
    ],
    "en": [
      "So, with those settings, perhaps the VLAN10 topology looks like this."
    ],
    "ru": [
      "Итак, с этими настройками, возможно, топология VLAN10 выглядит так."
    ]
  },
  {
    "time": [
      1918.07,
      1921.49
    ],
    "en": [
      "And then perhaps the VLAN20 topology looks like this."
    ],
    "ru": [
      "И тогда, возможно, топология VLAN20 выглядит так."
    ]
  },
  {
    "time": [
      1921.49,
      1927.87
    ],
    "en": [
      "So, different connections are used in different VLANs, the load is balanced across different"
    ],
    "ru": [
      "Таким образом, в разных VLAN используются разные соединения, нагрузка распределяется по разным VLAN."
    ]
  },
  {
    "time": [
      1927.87,
      1933.43
    ],
    "en": [
      "interfaces, this is called load balancing."
    ],
    "ru": [
      "интерфейсов, это называется балансировкой нагрузки."
    ]
  },
  {
    "time": [
      1933.43,
      1937.84
    ],
    "en": [
      "Before moving on to the rest of the quiz questions for today and finishing up, let me quickly"
    ],
    "ru": [
      "Прежде чем перейти к остальным вопросам викторины на сегодня и завершить, позвольте мне быстро"
    ]
  },
  {
    "time": [
      1937.84,
      1942.75
    ],
    "en": [
      "show you how to configure some spanning-tree port settings."
    ],
    "ru": [
      "покажет вам, как настроить некоторые параметры порта связующего дерева."
    ]
  },
  {
    "time": [
      1942.75,
      1946.59
    ],
    "en": [
      "There are two main settings you can configure on a spanning tree port."
    ],
    "ru": [
      "Есть два основных параметра, которые вы можете настроить для порта связующего дерева."
    ]
  },
  {
    "time": [
      1946.59,
      1951.32
    ],
    "en": [
      "The cost, and the port priority, and as you can see from this command they are both configured"
    ],
    "ru": [
      "Стоимость и приоритет порта, и, как вы можете видеть из этой команды, они оба настроены."
    ]
  },
  {
    "time": [
      1951.32,
      1955.48
    ],
    "en": [
      "on a per-VLAN basis like the bridge priority."
    ],
    "ru": [
      "на основе каждой VLAN, например, приоритета моста."
    ]
  },
  {
    "time": [
      1955.48,
      1958.15
    ],
    "en": [
      "As a review, what is cost?"
    ],
    "ru": [
      "В качестве обзора, какова стоимость?"
    ]
  },
  {
    "time": [
      1958.15,
      1962.87
    ],
    "en": [
      "It’s the root cost, remember the chart I showed you in day 20."
    ],
    "ru": [
      "Это стоимость корня, помните диаграмму, которую я показал вам на 20-й день."
    ]
  },
  {
    "time": [
      1962.87,
      1967.8
    ],
    "en": [
      "FastEthernet costs 19, gigabit ethernet costs 4, etc."
    ],
    "ru": [
      "FastEthernet стоит 19, гигабитный Ethernet стоит 4 и т. Д."
    ]
  },
  {
    "time": [
      1967.8,
      1972.87
    ],
    "en": [
      "It’s used primarily to determine the root port, and is also used as a tiebreaker in"
    ],
    "ru": [
      "Он используется в основном для определения корневого порта, а также для разрешения конфликтов в"
    ]
  },
  {
    "time": [
      1972.87,
      1976.74
    ],
    "en": [
      "selecting designated and non-designated ports."
    ],
    "ru": [
      "выбор назначенных и неназначенных портов."
    ]
  },
  {
    "time": [
      1976.74,
      1980.05
    ],
    "en": [
      "How about the priority, do you remember what it is used for?"
    ],
    "ru": [
      "Как насчет приоритета, вы помните, для чего он используется?"
    ]
  },
  {
    "time": [
      1980.05,
      1987.84
    ],
    "en": [
      "Well, it is the first half of the port ID, which is the final tiebreaker in determining the root port."
    ],
    "ru": [
      "Ну, это первая половина идентификатора порта, которая является последним средством разрешения конфликтов при определении корневого порта."
    ]
  },
  {
    "time": [
      1987.84,
      1990.39
    ],
    "en": [
      "the root port. Why would you want to change either of these values?"
    ],
    "ru": [
      "корневой порт. Почему вы хотите изменить любое из этих значений?"
    ]
  },
  {
    "time": [
      1990.39,
      1997.14
    ],
    "en": [
      "Well, to change the result of the root port or designated port selection process."
    ],
    "ru": [
      "Ну, чтобы изменить результат процесса выбора корневого порта или назначенного порта."
    ]
  },
  {
    "time": [
      1997.14,
      2000.89
    ],
    "en": [
      "I won’t give a detailed example here, but we’ll practice it a little bit in the lab"
    ],
    "ru": [
      "Я не буду приводить здесь подробный пример, но мы немного попрактикуемся в лабораторных условиях."
    ]
  },
  {
    "time": [
      2000.89,
      2004.4
    ],
    "en": [
      "video, so make sure to watch that."
    ],
    "ru": [
      "видео, так что обязательно посмотрите его."
    ]
  },
  {
    "time": [
      2004.4,
      2010.97
    ],
    "en": [
      "First I configured the cost of this interface, as you can see the range is from 1 to 200 million."
    ],
    "ru": [
      "Сначала я настроил стоимость этого интерфейса, как видите, диапазон от 1 до 200 миллионов."
    ]
  },
  {
    "time": [
      2010.97,
      2018.37
    ],
    "en": [
      "million. Then I set the port-priority, which is configured in increments of 32, from 0 to 224."
    ],
    "ru": [
      "миллион. Затем я устанавливаю приоритет порта, который настраивается с шагом 32, от 0 до 224."
    ]
  },
  {
    "time": [
      2018.37,
      2022.36
    ],
    "en": [
      "Those are the only spanning tree interface settings you need to know for the CCNA."
    ],
    "ru": [
      "Это единственные настройки интерфейса связующего дерева, которые вам нужно знать для CCNA."
    ]
  },
  {
    "time": [
      2022.36,
      2026.31
    ],
    "en": [
      "Again, stay tuned for the lab video to try them out."
    ],
    "ru": [
      "Опять же, следите за лабораторным видео, чтобы опробовать их."
    ]
  },
  {
    "time": [
      2026.31,
      2029.21
    ],
    "en": [
      "So, what did we cover?"
    ],
    "ru": [
      "Итак, что мы рассмотрели?"
    ]
  },
  {
    "time": [
      2029.21,
      2032.48
    ],
    "en": [
      "We covered the different spanning tree states and timers used."
    ],
    "ru": [
      "Мы рассмотрели различные состояния связующего дерева и используемые таймеры."
    ]
  },
  {
    "time": [
      2032.48,
      2038.41
    ],
    "en": [
      "We took a brief look at the structure of a spanning tree BPDU, we looked at a few of"
    ],
    "ru": [
      "Мы кратко рассмотрели структуру BPDU связующего дерева, мы рассмотрели некоторые из"
    ]
  },
  {
    "time": [
      2038.41,
      2044.94
    ],
    "en": [
      "the spanning-tree optional features, focusing on portfast and BPDU guard."
    ],
    "ru": [
      "дополнительные функции связующего дерева с упором на portfast и защиту BPDU."
    ]
  },
  {
    "time": [
      2044.94,
      2050.21
    ],
    "en": [
      "Finally we did some basic spanning tree configurations, including configuring the root bridge, using"
    ],
    "ru": [
      "Наконец, мы выполнили некоторые базовые настройки связующего дерева, включая настройку корневого моста, используя"
    ]
  },
  {
    "time": [
      2050.21,
      2054.61
    ],
    "en": [
      "different root bridges in different VLANs to achieve load balancing across different"
    ],
    "ru": [
      "разные корневые мосты в разных VLAN для достижения балансировки нагрузки между разными"
    ]
  },
  {
    "time": [
      2054.61,
      2059.86
    ],
    "en": [
      "interfaces, and then some basic spanning tree interface settings."
    ],
    "ru": [
      "интерфейсы, а затем некоторые базовые настройки интерфейса связующего дерева."
    ]
  },
  {
    "time": [
      2059.86,
      2065.129
    ],
    "en": [
      "Okay, for today’s quiz we’ll do 3 more questions about spanning tree, covering what"
    ],
    "ru": [
      "Хорошо, в рамках сегодняшней викторины мы ответим еще на 3 вопроса о связующем дереве и расскажем, что"
    ]
  },
  {
    "time": [
      2065.129,
      2067.74
    ],
    "en": [
      "we learned in this video."
    ],
    "ru": [
      "мы узнали в этом видео."
    ]
  },
  {
    "time": [
      2067.74,
      2073.081
    ],
    "en": [
      "After that, one special practice question from Boson Software’s ExSim for CCNA, by"
    ],
    "ru": [
      "После этого один специальный практический вопрос от ExSim компании Boson Software для CCNA, автор:"
    ]
  },
  {
    "time": [
      2073.081,
      2079.07
    ],
    "en": [
      "far the best practice exams for the CCNA there are so be sure to watch for that."
    ],
    "ru": [
      "Это далеко не лучшие экзамены для CCNA, так что обязательно следите за этим."
    ]
  },
  {
    "time": [
      2079.07,
      2083.77
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
      2083.77,
      2088.49
    ],
    "en": [
      "Now let’s go to question 8 of the quiz."
    ],
    "ru": [
      "Теперь перейдем к восьмому вопросу викторины."
    ]
  },
  {
    "time": [
      2088.49,
      2094.16
    ],
    "en": [
      "So, continuing from quiz question 7 we did earlier, here is number 8."
    ],
    "ru": [
      "Итак, продолжая вопрос 7 викторины, который мы задавали ранее, вот номер 8."
    ]
  },
  {
    "time": [
      2094.16,
      2100.72
    ],
    "en": [
      "You connect a PC to a switch, however for about half a minute you are unable to connect to the network."
    ],
    "ru": [
      "Вы подключаете ПК к коммутатору, однако примерно полминуты не можете подключиться к сети."
    ]
  },
  {
    "time": [
      2100.72,
      2107.11
    ],
    "en": [
      "to the network. Which two options could fix this issue and allow you to access the network more quickly? Choose two."
    ],
    "ru": [
      "в сеть. Какие два варианта могут решить эту проблему и позволить вам быстрее получить доступ к сети? Выбери два."
    ]
  },
  {
    "time": [
      2107.11,
      2109.48
    ],
    "en": [
      "Choose two. Each answer is a complete solution."
    ],
    "ru": [
      "Выбери два. Каждый ответ - это законченное решение."
    ]
  },
  {
    "time": [
      2109.48,
      2114.18
    ],
    "en": [
      "A, enable portfast on the switch port you connect the PC to."
    ],
    "ru": [
      "A, включите Portfast на порту коммутатора, к которому вы подключаете ПК."
    ]
  },
  {
    "time": [
      2114.18,
      2117.96
    ],
    "en": [
      "B, reduce the STP hello timer."
    ],
    "ru": [
      "B, уменьшите таймер приветствия STP."
    ]
  },
  {
    "time": [
      2117.96,
      2121.76
    ],
    "en": [
      "C, reduce the STP forward delay timer."
    ],
    "ru": [
      "C, уменьшите таймер задержки пересылки STP."
    ]
  },
  {
    "time": [
      2121.76,
      2126.05
    ],
    "en": [
      "Or D, reduce the STP max age timer."
    ],
    "ru": [
      "Или D, уменьшите таймер максимального возраста STP."
    ]
  },
  {
    "time": [
      2126.05,
      2132.89
    ],
    "en": [
      "Pause the video to think about your answer, remember to choose two."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом, не забудьте выбрать два."
    ]
  },
  {
    "time": [
      2132.89,
      2139.98
    ],
    "en": [
      "The answers are A and C. A, portfast, allows switchports to bypass the listening and learning"
    ],
    "ru": [
      "Ответы: A и C. A, portfast, позволяет портам коммутатора обходить прослушивание и обучение."
    ]
  },
  {
    "time": [
      2139.98,
      2144.97
    ],
    "en": [
      "spanning tree states and enter the forwarding state immediately, so there will be no delay"
    ],
    "ru": [
      "состояния связующего дерева и сразу же переходят в состояние пересылки, поэтому задержки не будет"
    ]
  },
  {
    "time": [
      2144.97,
      2147.75
    ],
    "en": [
      "after connecting the PC."
    ],
    "ru": [
      "после подключения ПК."
    ]
  },
  {
    "time": [
      2147.75,
      2153.89
    ],
    "en": [
      "As for C, the forward delay timer determines how long the listening and learning states are."
    ],
    "ru": [
      "Что касается C, таймер задержки пересылки определяет, как долго будут состояния прослушивания и обучения."
    ]
  },
  {
    "time": [
      2153.89,
      2158.15
    ],
    "en": [
      "are. If you shorten this timer, the switch will begin forwarding more quickly."
    ],
    "ru": [
      "находятся. Если вы сократите этот таймер, коммутатор начнет пересылку быстрее."
    ]
  },
  {
    "time": [
      2158.15,
      2162.581
    ],
    "en": [
      "However, it is recommended that you leave the timers at their default settings, these"
    ],
    "ru": [
      "Однако рекомендуется оставить таймеры с настройками по умолчанию."
    ]
  },
  {
    "time": [
      2162.581,
      2165.44
    ],
    "en": [
      "default settings were chosen for a reason."
    ],
    "ru": [
      "настройки по умолчанию были выбраны неспроста."
    ]
  },
  {
    "time": [
      2165.44,
      2169.31
    ],
    "en": [
      "Okay let’s go to question 9."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 9."
    ]
  },
  {
    "time": [
      2169.31,
      2177.14
    ],
    "en": [
      "A packet capture indicates that a switch port has an STP port ID of 0x8002."
    ],
    "ru": [
      "Захват пакета указывает, что порт коммутатора имеет идентификатор порта STP 0x8002."
    ]
  },
  {
    "time": [
      2177.14,
      2182.92
    ],
    "en": [
      "What is the STP port priority of this port? A, 80."
    ],
    "ru": [
      "Каков приоритет порта STP у этого порта? А, 80."
    ]
  },
  {
    "time": [
      2182.92,
      2187.45
    ],
    "en": [
      "A, 80. B, 32. C, 128."
    ],
    "ru": [
      "А, 80. В, 32. С, 128."
    ]
  },
  {
    "time": [
      2187.45,
      2190.26
    ],
    "en": [
      "C, 128. Or D, 224."
    ],
    "ru": [
      "С, 128. Или D, 224."
    ]
  },
  {
    "time": [
      2190.26,
      2197.07
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
      2197.07,
      2200.67
    ],
    "en": [
      "The answer is C, 128."
    ],
    "ru": [
      "Ответ - C, 128."
    ]
  },
  {
    "time": [
      2200.67,
      2207.89
    ],
    "en": [
      "The first half of the port ID, hexadecimal 8 0, is the STP port priority."
    ],
    "ru": [
      "Первая половина идентификатора порта, шестнадцатеричный 8 0, является приоритетом порта STP."
    ]
  },
  {
    "time": [
      2207.89,
      2213.92
    ],
    "en": [
      "Hexadecimal 8 0 is equivalent to 128 in decimal, so C is the correct answer."
    ],
    "ru": [
      "Шестнадцатеричный 8 0 эквивалентен 128 в десятичном, поэтому C - правильный ответ."
    ]
  },
  {
    "time": [
      2213.92,
      2217.97
    ],
    "en": [
      "Let’s go to question 10."
    ],
    "ru": [
      "Перейдем к вопросу 10."
    ]
  },
  {
    "time": [
      2217.97,
      2222.31
    ],
    "en": [
      "You want to make sure that a Layer 2 loop will not be caused if a user connects a switch"
    ],
    "ru": [
      "Вы хотите убедиться, что петля уровня 2 не будет вызвана, если пользователь подключает коммутатор."
    ]
  },
  {
    "time": [
      2222.31,
      2224.68
    ],
    "en": [
      "to a switch port."
    ],
    "ru": [
      "к порту коммутатора."
    ]
  },
  {
    "time": [
      2224.68,
      2229.72
    ],
    "en": [
      "Which spanning tree optional feature achieves this? A, portfast."
    ],
    "ru": [
      "Какая дополнительная функция связующего дерева позволяет этого достичь? А, Портфаст."
    ]
  },
  {
    "time": [
      2229.72,
      2233.71
    ],
    "en": [
      "A, portfast. B, loop guard. C, root guard."
    ],
    "ru": [
      "А, Портфаст. B, защита от петель. C, корневая защита."
    ]
  },
  {
    "time": [
      2233.71,
      2236.95
    ],
    "en": [
      "C, root guard. Or D, BPDU guard."
    ],
    "ru": [
      "C, корневая защита. Или D, охранник BPDU."
    ]
  },
  {
    "time": [
      2236.95,
      2242.64
    ],
    "en": [
      "Pause the video to think about your anwer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать о своем ответе."
    ]
  },
  {
    "time": [
      2242.64,
      2245.9
    ],
    "en": [
      "The answer is D, BPDU guard."
    ],
    "ru": [
      "Ответ - D, охранник BPDU."
    ]
  },
  {
    "time": [
      2245.9,
      2254.03
    ],
    "en": [
      "BPDU guard will shutdown an interface if a BPDU is received on the interface, to prevent any potential loops."
    ],
    "ru": [
      "Защита BPDU отключит интерфейс, если на интерфейсе будет получен BPDU, чтобы предотвратить любые потенциальные петли."
    ]
  },
  {
    "time": [
      2254.03,
      2257.9
    ],
    "en": [
      "any potential loops. It should be enabled on portfast-enabled switch ports connected to end hosts."
    ],
    "ru": [
      "любые потенциальные петли. Его следует включить на портах коммутатора с включенной функцией Portfast, подключенных к конечным хостам."
    ]
  },
  {
    "time": [
      2257.9,
      2265.8
    ],
    "en": [
      "Okay, that’s all for the quiz, let’s take a look at a question from Boson ExSim for CCNA."
    ],
    "ru": [
      "Хорошо, это все для викторины, давайте рассмотрим вопрос от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2265.8,
      2271.88
    ],
    "en": [
      "CCNA. Okay, for today's Boson ExSim practice question we're going to take a look at the same question"
    ],
    "ru": [
      "CCNA. Хорошо, что касается сегодняшнего практического вопроса о Boson ExSim, мы рассмотрим тот же вопрос."
    ]
  },
  {
    "time": [
      2271.88,
      2276.86
    ],
    "en": [
      "as in Day 20's video because at the end of Day 20's video I said we hadn't actually learned"
    ],
    "ru": [
      "как в видео дня 20, потому что в конце видео дня 20 я сказал, что мы на самом деле не узнали"
    ]
  },
  {
    "time": [
      2276.86,
      2280.47
    ],
    "en": [
      "enough to answer the questions from Boson ExSim about spanning tree."
    ],
    "ru": [
      "достаточно, чтобы ответить на вопросы Boson ExSim о связующем дереве."
    ]
  },
  {
    "time": [
      2280.47,
      2283.22
    ],
    "en": [
      "Well, now we can answer at least some of them."
    ],
    "ru": [
      "Что ж, теперь мы можем ответить хотя бы на некоторые из них."
    ]
  },
  {
    "time": [
      2283.22,
      2286.28
    ],
    "en": [
      "So, let's read the question one more time."
    ],
    "ru": [
      "Итак, давайте еще раз прочитаем вопрос."
    ]
  },
  {
    "time": [
      2286.28,
      2292.14
    ],
    "en": [
      "You want to decrease the amount of time that it takes for switch ports on SwitchA to begin forwarding."
    ],
    "ru": [
      "Вы хотите уменьшить количество времени, которое требуется портам коммутатора на SwitchA, чтобы начать пересылку."
    ]
  },
  {
    "time": [
      2292.14,
      2295.75
    ],
    "en": [
      "forwarding. PortFast is not configured on any of the switch ports on SwitchA."
    ],
    "ru": [
      "пересылка. PortFast не настроен ни на одном из портов коммутатора SwitchA."
    ]
  },
  {
    "time": [
      2295.75,
      2301.11
    ],
    "en": [
      "You issue the SPANNING-TREE PORTFAST DEFAULT command from global configuration mode."
    ],
    "ru": [
      "Вы вводите команду SPANNING-TREE PORTFAST DEFAULT из режима глобальной конфигурации."
    ]
  },
  {
    "time": [
      2301.11,
      2304.18
    ],
    "en": [
      "Which of the ports on SwitchA will use PortFast?"
    ],
    "ru": [
      "Какой из портов SwitchA будет использовать PortFast?"
    ]
  },
  {
    "time": [
      2304.18,
      2305.7
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
      2305.7,
      2309.72
    ],
    "en": [
      "A, no ports because PortFast cannot be enabled globally."
    ],
    "ru": [
      "A, портов нет, потому что PortFast нельзя включить глобально."
    ]
  },
  {
    "time": [
      2309.72,
      2313.03
    ],
    "en": [
      "B, all trunk ports. C, all ports."
    ],
    "ru": [
      "B, все магистральные порты. C, все порты."
    ]
  },
  {
    "time": [
      2313.03,
      2314.68
    ],
    "en": [
      "C, all ports. Or D, all access ports."
    ],
    "ru": [
      "C, все порты. Или D, все порты доступа."
    ]
  },
  {
    "time": [
      2314.68,
      2317.62
    ],
    "en": [
      "Okay, you should know the answer to this question."
    ],
    "ru": [
      "Хорошо, ты должен знать ответ на этот вопрос."
    ]
  },
  {
    "time": [
      2317.62,
      2324.32
    ],
    "en": [
      "Please pause the video here to think about your answer."
    ],
    "ru": [
      "Пожалуйста, остановите видео здесь, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2324.32,
      2326.17
    ],
    "en": [
      "Okay, did you get the answer?"
    ],
    "ru": [
      "Хорошо, ты получил ответ?"
    ]
  },
  {
    "time": [
      2326.17,
      2331.11
    ],
    "en": [
      "So, you should know, we just talked about it, the answer is D, all access ports."
    ],
    "ru": [
      "Итак, вы должны знать, мы только что говорили об этом, ответ - D, все порты доступа."
    ]
  },
  {
    "time": [
      2331.11,
      2333.93
    ],
    "en": [
      "Or at least I think it is, let's check."
    ],
    "ru": [
      "Или, по крайней мере, я так думаю, давайте проверим."
    ]
  },
  {
    "time": [
      2333.93,
      2340.11
    ],
    "en": [
      "To check your answer click down here, 'show answer'. There it is."
    ],
    "ru": [
      "Чтобы проверить свой ответ, нажмите здесь, «показать ответ». Вот оно."
    ]
  },
  {
    "time": [
      2340.11,
      2345.02
    ],
    "en": [
      "There it is. Okay, so not only does it tell you it's correct, but even more importantly it gives you an"
    ],
    "ru": [
      "Вот оно. Хорошо, он не только говорит вам, что это правильно, но, что еще более важно, он дает вам"
    ]
  },
  {
    "time": [
      2345.02,
      2347.36
    ],
    "en": [
      "explanation of why it's correct."
    ],
    "ru": [
      "объяснение, почему это правильно."
    ]
  },
  {
    "time": [
      2347.36,
      2351.5
    ],
    "en": [
      "Why D is correct, and why A, B, and C are incorrect."
    ],
    "ru": [
      "Почему D правильный и почему A, B и C неверны."
    ]
  },
  {
    "time": [
      2351.5,
      2355.98
    ],
    "en": [
      "That's one of the great things about Boson ExSim, is these explanations."
    ],
    "ru": [
      "Эти объяснения - одна из замечательных особенностей Boson ExSim."
    ]
  },
  {
    "time": [
      2355.98,
      2361.26
    ],
    "en": [
      "Personally I think a practice exam that just tells you correct or incorrect, without telling"
    ],
    "ru": [
      "Лично я считаю, что практический экзамен, который просто говорит вам правильно или неверно, не сообщая"
    ]
  },
  {
    "time": [
      2361.26,
      2365.8
    ],
    "en": [
      "you why it's correct or why it's incorrect, isn't very useful."
    ],
    "ru": [
      "вам, почему это правильно или почему это неправильно, не очень полезно."
    ]
  },
  {
    "time": [
      2365.8,
      2370.29
    ],
    "en": [
      "So let's read just at least this first part about the explanation."
    ],
    "ru": [
      "Итак, давайте прочитаем хотя бы эту первую часть об объяснении."
    ]
  },
  {
    "time": [
      2370.29,
      2373.57
    ],
    "en": [
      "All access ports on SwitchA will use PortFast."
    ],
    "ru": [
      "Все порты доступа на SwitchA будут использовать PortFast."
    ]
  },
  {
    "time": [
      2373.57,
      2378.37
    ],
    "en": [
      "PortFast enables faster connectivity for hosts connected to an access layer switch port."
    ],
    "ru": [
      "PortFast обеспечивает более быстрое соединение для хостов, подключенных к порту коммутатора уровня доступа."
    ]
  },
  {
    "time": [
      2378.37,
      2383.0
    ],
    "en": [
      "If PortFast is not enabled, a switch port transitions through the STP listening and"
    ],
    "ru": [
      "Если PortFast не включен, порт коммутатора переходит через STP, прослушивая и"
    ]
  },
  {
    "time": [
      2383.0,
      2386.71
    ],
    "en": [
      "learning states before it enters the forwarding state."
    ],
    "ru": [
      "состояния обучения перед переходом в состояние пересылки."
    ]
  },
  {
    "time": [
      2386.71,
      2391.88
    ],
    "en": [
      "This process can take as long as 30 seconds if the default STP timers are used."
    ],
    "ru": [
      "Этот процесс может занять до 30 секунд, если используются таймеры STP по умолчанию."
    ]
  },
  {
    "time": [
      2391.88,
      2398.87
    ],
    "en": [
      "In addition, port initialization can take as long as 50 seconds if Port Aggregation Protocol is enabled."
    ],
    "ru": [
      "Кроме того, инициализация порта может занять до 50 секунд, если включен протокол агрегации портов."
    ]
  },
  {
    "time": [
      2398.87,
      2407.02
    ],
    "en": [
      "Protocol is enabled. I haven't talked about this yet in the course, that will be coming in Day 23, maybe. We'll see."
    ],
    "ru": [
      "Протокол включен. Я еще не говорил об этом в курсе, возможно, это будет в День 23. Посмотрим."
    ]
  },
  {
    "time": [
      2407.02,
      2410.84
    ],
    "en": [
      "We'll see. PortFast transitions the port into the STP forwarding state without going through the"
    ],
    "ru": [
      "Посмотрим. PortFast переводит порт в состояние пересылки STP без прохождения через"
    ]
  },
  {
    "time": [
      2410.84,
      2413.22
    ],
    "en": [
      "STP listening and learning states."
    ],
    "ru": [
      "Состояния прослушивания и обучения STP."
    ]
  },
  {
    "time": [
      2413.22,
      2415.9
    ],
    "en": [
      "Okay, and there's more explanation down here."
    ],
    "ru": [
      "Хорошо, и здесь есть еще объяснение."
    ]
  },
  {
    "time": [
      2415.9,
      2422.04
    ],
    "en": [
      "Plus references, here to the official cert guide written by Wendell Odom, I highly recommend it."
    ],
    "ru": [
      "Плюс ссылки на официальное руководство по сертификации, написанное Венделлом Одомом, я очень рекомендую его."
    ]
  },
  {
    "time": [
      2422.04,
      2424.97
    ],
    "en": [
      "it. And some Cisco documentation you can read for free online."
    ],
    "ru": [
      "Это. И некоторую документацию Cisco вы можете бесплатно прочитать в Интернете."
    ]
  },
  {
    "time": [
      2424.97,
      2430.55
    ],
    "en": [
      "Okay, so if you want to get a copy of Boson ExSim, I highly recommend these practice exams,"
    ],
    "ru": [
      "Хорошо, поэтому, если вы хотите получить копию Boson ExSim, я настоятельно рекомендую эти практические экзамены,"
    ]
  },
  {
    "time": [
      2430.55,
      2438.74
    ],
    "en": [
      "I used them myself for my CCNA and CCNP, please follow the link in the video description."
    ],
    "ru": [
      "Я сам использовал их для своих CCNA и CCNP, пожалуйста, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2438.74,
      2442.1
    ],
    "en": [
      "There will be supplementary materials for this video."
    ],
    "ru": [
      "К этому видео будут добавлены дополнительные материалы."
    ]
  },
  {
    "time": [
      2442.1,
      2446.63
    ],
    "en": [
      "There will be a review flashcard deck to use with the software ‘Anki’."
    ],
    "ru": [
      "Будет выпущена обзорная колода карточек для использования с программным обеспечением «Anki»."
    ]
  },
  {
    "time": [
      2446.63,
      2450.26
    ],
    "en": [
      "Download the deck from the link in the description."
    ],
    "ru": [
      "Скачайте колоду по ссылке в описании."
    ]
  },
  {
    "time": [
      2450.26,
      2453.42
    ],
    "en": [
      "There will also be a packet tracer practice lab."
    ],
    "ru": [
      "Также будет создана практическая лаборатория по отслеживанию пакетов."
    ]
  },
  {
    "time": [
      2453.42,
      2457.39
    ],
    "en": [
      "Please be sure to watch the practice lab and try it yourself, it will give some more"
    ],
    "ru": [
      "Обязательно посмотрите практическую лабораторию и попробуйте сами, это даст больше"
    ]
  },
  {
    "time": [
      2457.39,
      2462.4
    ],
    "en": [
      "practice with the configurations you learned in this video."
    ],
    "ru": [
      "попрактикуйтесь с конфигурациями, которые вы узнали в этом видео."
    ]
  },
  {
    "time": [
      2462.4,
      2467.52
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
      2467.52,
      2475.45
    ],
    "en": [
      "Thank you to Vikram, Joyce, Marek, Samil, Velvijaykum, C Mohd, Johan, Mark, Aleksa,"
    ],
    "ru": [
      "Спасибо Викраму, Джойсу, Мареку, Самилу, Велвиджайкуму, Си Мохду, Йохану, Марку, Алексе,"
    ]
  },
  {
    "time": [
      2475.45,
      2482.39
    ],
    "en": [
      "Miguel, Yousif, Kone, Boson Software, the creators of ExSim, Sidi, Magrathea, Devin,"
    ],
    "ru": [
      "Мигель, Юсиф, Коне, Boson Software, создатели ExSim, Sidi, Magrathea, Devin,"
    ]
  },
  {
    "time": [
      2482.39,
      2486.83
    ],
    "en": [
      "Charlsetta, Lito, Yonatan, Mike, Aleksandr, and Vance."
    ],
    "ru": [
      "Шарлсетта, Лито, Йонатан, Майк, Александр и Вэнс."
    ]
  },
  {
    "time": [
      2486.83,
      2493.11
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
      2493.11,
      2498.08
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
      2498.08,
      2501.36
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
      2501.36,
      2507.36
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, May 17th"
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 17 мая."
    ]
  },
  {
    "time": [
      2507.36,
      2512.92
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
      2507.36,
      2512.92
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
      2512.92,
      2516.54
    ],
    "en": [
      "be in the next video."
    ],
    "ru": [
      "быть в следующем видео."
    ]
  },
  {
    "time": [
      2516.54,
      2518.11
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
      2518.11,
      2522.17
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
      2522.17,
      2525.369
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
      2525.369,
      2528.25
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
      2528.25,
      2535.46
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
      2535.46,
      2535.46
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]