let objs = [
  {
    "time": [
      1.78,
      4.0
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
      4.0,
      7.319
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
      7.319,
      11.13
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
      11.13,
      16.72
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
      16.72,
      17.83
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
      17.83,
      22.14
    ],
    "en": [
      "Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      22.14,
      27.02
    ],
    "en": [
      "for this course, so you can try it out yourself in packet tracer."
    ],
    "ru": [
      "для этого курса, так что вы можете попробовать его самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      27.02,
      31.34
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для"
    ]
  },
  {
    "time": [
      31.34,
      35.32
    ],
    "en": [
      "the CCNA, click the link in the video description to check it out."
    ],
    "ru": [
      "CCNA, щелкните ссылку в описании видео, чтобы ознакомиться с ним."
    ]
  },
  {
    "time": [
      35.32,
      40.46
    ],
    "en": [
      "It’s a network simulator like packet tracer, but it’s even better, and it includes all"
    ],
    "ru": [
      "Это сетевой симулятор, похожий на трассировщик пакетов, но он еще лучше и включает в себя все"
    ]
  },
  {
    "time": [
      40.46,
      45.87
    ],
    "en": [
      "of these guided labs to not only help you get hands-on practice configuring and troubleshooting,"
    ],
    "ru": [
      "из этих лабораторных работ, которые не только помогут вам на практике настроить и устранить неполадки,"
    ]
  },
  {
    "time": [
      45.87,
      48.66
    ],
    "en": [
      "but also deepen your understanding of the exam topics."
    ],
    "ru": [
      "но также углубите свое понимание экзаменационных тем."
    ]
  },
  {
    "time": [
      48.66,
      54.51
    ],
    "en": [
      "I used it myself when studying for my certifications, so I feel confident about recommending it"
    ],
    "ru": [
      "Я сам использовал его, когда готовился к получению сертификатов, поэтому могу с уверенностью рекомендовать его."
    ]
  },
  {
    "time": [
      54.51,
      56.26
    ],
    "en": [
      "to all of you."
    ],
    "ru": [
      "всем вам."
    ]
  },
  {
    "time": [
      56.26,
      60.659
    ],
    "en": [
      "Watch until the end of this video, we’ll take a look at a lab from NetSim."
    ],
    "ru": [
      "Смотрите до конца этого видео, мы рассмотрим лабораторную работу от NetSim."
    ]
  },
  {
    "time": [
      60.659,
      66.63
    ],
    "en": [
      "If you want to get your own copy of NetSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      66.63,
      71.67
    ],
    "en": [
      "In this lab we will configure EtherChannel between switches in this network."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим EtherChannel между коммутаторами в этой сети."
    ]
  },
  {
    "time": [
      71.67,
      74.78
    ],
    "en": [
      "All of the connections between these switches have redundant links."
    ],
    "ru": [
      "Все соединения между этими коммутаторами имеют резервные ссылки."
    ]
  },
  {
    "time": [
      74.78,
      80.28
    ],
    "en": [
      "However, because of spanning tree protocol only one link will be active at a time."
    ],
    "ru": [
      "Однако из-за протокола связующего дерева одновременно будет активна только одна ссылка."
    ]
  },
  {
    "time": [
      80.28,
      84.99
    ],
    "en": [
      "The inactive link will act as a backup, which is good, but we would prefer if both could"
    ],
    "ru": [
      "Неактивная ссылка будет действовать как резервная, что хорошо, но мы бы предпочли, чтобы обе могли"
    ]
  },
  {
    "time": [
      84.99,
      90.719
    ],
    "en": [
      "be forwarding at the same time, to increase the potential bandwidth for the connections."
    ],
    "ru": [
      "одновременно пересылать, чтобы увеличить потенциальную пропускную способность для соединений."
    ]
  },
  {
    "time": [
      90.719,
      95.35
    ],
    "en": [
      "We will configure Layer 2 etherchannels between the access layer switches and the distribution"
    ],
    "ru": [
      "Мы настроим etherchannels уровня 2 между коммутаторами уровня доступа и распределением."
    ]
  },
  {
    "time": [
      95.35,
      101.86
    ],
    "en": [
      "layer switches, and then we will configure a Layer 3 etherchannel between the distribution layer switches."
    ],
    "ru": [
      "коммутаторов уровня, а затем мы настроим etherchannel уровня 3 между коммутаторами уровня распределения."
    ]
  },
  {
    "time": [
      101.86,
      104.64
    ],
    "en": [
      "layer switches. Let’s get started with step 1."
    ],
    "ru": [
      "переключатели слоев. Начнем с шага 1."
    ]
  },
  {
    "time": [
      104.64,
      110.18
    ],
    "en": [
      "I’ll go on ASW1 first. ENABLE."
    ],
    "ru": [
      "Я сначала пойду на ASW1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      110.18,
      115.06
    ],
    "en": [
      "ENABLE. And frst let’s check the spanning-tree situation. SHOW SPANNING-TREE."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. И сначала давайте проверим ситуацию с остовным деревом. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      115.06,
      124.229
    ],
    "en": [
      "SHOW SPANNING-TREE. So, G0/1, connec ted to DSW1, is the root port, however G0/2 is an alternate port."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕРЕВО. Итак, G0 / 1, подключенный к DSW1, является корневым портом, однако G0 / 2 - альтернативным портом."
    ]
  },
  {
    "time": [
      124.229,
      129.74
    ],
    "en": [
      "It won’t forward or receive any frames, so it’s just acting as a backup."
    ],
    "ru": [
      "Он не будет пересылать и получать кадры, поэтому действует как резервная копия."
    ]
  },
  {
    "time": [
      129.74,
      133.819
    ],
    "en": [
      "If we configure this connection with DSW1 as an EtherChannel, we shouldn’t see these"
    ],
    "ru": [
      "Если мы настроим это соединение с DSW1 как EtherChannel, мы не должны видеть эти"
    ]
  },
  {
    "time": [
      133.819,
      138.43
    ],
    "en": [
      "two interfaces here, they will be replaced with the port-channel interface, which should"
    ],
    "ru": [
      "здесь два интерфейса, они будут заменены интерфейсом порт-канал, который должен"
    ]
  },
  {
    "time": [
      138.43,
      143.409
    ],
    "en": [
      "be the new root port, and will forward traffic using both physical interfaces."
    ],
    "ru": [
      "будет новым корневым портом и будет пересылать трафик с использованием обоих физических интерфейсов."
    ]
  },
  {
    "time": [
      143.409,
      145.7
    ],
    "en": [
      "So, let’s do that."
    ],
    "ru": [
      "Итак, давай сделаем это."
    ]
  },
  {
    "time": [
      145.7,
      147.629
    ],
    "en": [
      "Enter global config mode."
    ],
    "ru": [
      "Войдите в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      147.629,
      152.88
    ],
    "en": [
      "CONF T. Let’s configure both interfaces together."
    ],
    "ru": [
      "CONF T. Давайте настроим оба интерфейса вместе."
    ]
  },
  {
    "time": [
      152.88,
      156.879
    ],
    "en": [
      "INTERFACE RANGE G0/1 to 2."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G0 / 1 до 2."
    ]
  },
  {
    "time": [
      156.879,
      161.159
    ],
    "en": [
      "To configure etherchannel, use the channel-group command."
    ],
    "ru": [
      "Чтобы настроить etherchannel, используйте команду channel-group."
    ]
  },
  {
    "time": [
      161.159,
      165.93
    ],
    "en": [
      "CHANNEL-GROUP 1 MODE, now which options do we have?"
    ],
    "ru": [
      "РЕЖИМ ГРУППЫ КАНАЛОВ 1, какие у нас есть варианты?"
    ]
  },
  {
    "time": [
      165.93,
      171.67000000000002
    ],
    "en": [
      "Step 1 instructs us to use LACP, so we can use active or passive modes."
    ],
    "ru": [
      "Шаг 1 инструктирует нас использовать LACP, чтобы мы могли использовать активный или пассивный режимы."
    ]
  },
  {
    "time": [
      171.67000000000002,
      178.88
    ],
    "en": [
      "If we use passive mode, we have to ensure that DSW1’s side is in active mode, or the EtherChannel won’t form."
    ],
    "ru": [
      "Если мы используем пассивный режим, мы должны убедиться, что сторона DSW1 находится в активном режиме, иначе EtherChannel не сформируется."
    ]
  },
  {
    "time": [
      178.88,
      183.06
    ],
    "en": [
      "EtherChannel won’t form. But let’s just go with active on both sides. ACTIVE."
    ],
    "ru": [
      "EtherChannel не сформируется. Но давайте продолжим с активностью с обеих сторон. АКТИВНЫЙ."
    ]
  },
  {
    "time": [
      183.06,
      187.46
    ],
    "en": [
      "ACTIVE. Okay, we’re also instructed to configure it as a trunk."
    ],
    "ru": [
      "АКТИВНЫЙ. Хорошо, мы также получили указание настроить его как транк."
    ]
  },
  {
    "time": [
      187.46,
      195.38
    ],
    "en": [
      "To do so, let’s configure the port-channel interface that was created. INTERFACE PO1."
    ],
    "ru": [
      "Для этого настроим созданный интерфейс порт-канал. ИНТЕРФЕЙС PO1."
    ]
  },
  {
    "time": [
      195.38,
      197.04
    ],
    "en": [
      "INTERFACE PO1. SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "ИНТЕРФЕЙС PO1. РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      197.04,
      202.57999999999998
    ],
    "en": [
      "Okay, so because DSW1’s port-channel isn’t configured yet we won’t see this trunk in"
    ],
    "ru": [
      "Итак, поскольку порт-канал DSW1 еще не настроен, мы не увидим эту магистраль в"
    ]
  },
  {
    "time": [
      202.57999999999998,
      209.659
    ],
    "en": [
      "SHOW INTERFACES TRUNK, but let’s just check the running-config to confirm. DO SHOW RUN."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙСЫ БАГАЖНИК, но давайте просто проверим рабочую конфигурацию для подтверждения. ПОКАЗАТЬ БЕГ."
    ]
  },
  {
    "time": [
      209.659,
      216.689
    ],
    "en": [
      "DO SHOW RUN. So, you can see that the port-channel 1 interface was created, and if we scroll down to G0/1"
    ],
    "ru": [
      "ПОКАЗАТЬ БЕГ. Итак, вы можете видеть, что интерфейс порт-канал 1 был создан, и если мы прокрутим вниз до G0 / 1"
    ]
  },
  {
    "time": [
      216.689,
      221.959
    ],
    "en": [
      "and G0/2, you can see that the SWITCHPORT MODE TRUNK command we applied to the port-channel"
    ],
    "ru": [
      "и G0 / 2, вы можете видеть, что команда SWITCHPORT MODE TRUNK, которую мы применили к порту-каналу"
    ]
  },
  {
    "time": [
      221.959,
      223.76
    ],
    "en": [
      "was also applied to them."
    ],
    "ru": [
      "также применялся к ним."
    ]
  },
  {
    "time": [
      223.76,
      229.099
    ],
    "en": [
      "Let’s also check the status of the EtherChannel, you’ll see one of the status flags I didn’t"
    ],
    "ru": [
      "Давайте также проверим статус EtherChannel, вы увидите один из флагов статуса, которые я не использовал."
    ]
  },
  {
    "time": [
      229.099,
      231.5
    ],
    "en": [
      "show in the lecture video."
    ],
    "ru": [
      "показать в видео лекции."
    ]
  },
  {
    "time": [
      231.5,
      234.43
    ],
    "en": [
      "DO SHOW ETHERCHANNEL SUMMARY."
    ],
    "ru": [
      "ПОКАЗАТЬ СВОДКУ ETHERCHANNEL."
    ]
  },
  {
    "time": [
      234.43,
      241.519
    ],
    "en": [
      "So, the port-channel interface itself is SD, meaning Layer 2 and Down."
    ],
    "ru": [
      "Итак, интерфейс порт-канал сам по себе SD, что означает уровень 2 и нижний уровень."
    ]
  },
  {
    "time": [
      241.519,
      243.189
    ],
    "en": [
      "Now look at the member ports."
    ],
    "ru": [
      "Теперь посмотрим на порты участников."
    ]
  },
  {
    "time": [
      243.189,
      245.189
    ],
    "en": [
      "They have the flag ‘I’."
    ],
    "ru": [
      "У них есть флаг «Я»."
    ]
  },
  {
    "time": [
      245.189,
      248.6
    ],
    "en": [
      "What does that mean? It means stand-alone."
    ],
    "ru": [
      "Что это обозначает? Это означает автономный."
    ]
  },
  {
    "time": [
      248.6,
      253.38
    ],
    "en": [
      "It means stand-alone. So, they are configured to be part of an etherchannel, but because of some problem they are acting"
    ],
    "ru": [
      "Это означает автономный. Итак, они настроены как часть etherchannel, но из-за какой-то проблемы они действуют"
    ]
  },
  {
    "time": [
      253.38,
      257.44
    ],
    "en": [
      "as stand-alone, individual ports. Why is that?"
    ],
    "ru": [
      "как автономные, отдельные порты. Это почему?"
    ]
  },
  {
    "time": [
      257.44,
      260.79
    ],
    "en": [
      "Why is that? It’s because we haven’t configured DSW1 yet."
    ],
    "ru": [
      "Это почему? Это потому, что мы еще не настроили DSW1."
    ]
  },
  {
    "time": [
      260.79,
      268.419
    ],
    "en": [
      "So, next up let’s configure DSW1’s side. ENABLE."
    ],
    "ru": [
      "Итак, теперь давайте настроим сторону DSW1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      268.419,
      274.4
    ],
    "en": [
      "ENABLE. CONF T. The configuration will be the same as on ASW1."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Конфигурация будет такой же, как на ASW1."
    ]
  },
  {
    "time": [
      274.4,
      279.1
    ],
    "en": [
      "INTERFACE RANGE G1/0/3 to 4."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G1 / 0/3 до 4."
    ]
  },
  {
    "time": [
      279.1,
      281.889
    ],
    "en": [
      "CHANNEL-GROUP 1 MODE ACTIVE."
    ],
    "ru": [
      "КАНАЛ-ГРУППА 1 РЕЖИМ АКТИВЕН."
    ]
  },
  {
    "time": [
      281.889,
      287.33
    ],
    "en": [
      "Passive would work as well here, since ASW1’s side is configured as active."
    ],
    "ru": [
      "Пассивный режим также будет работать здесь, поскольку сторона ASW1 настроена как активная."
    ]
  },
  {
    "time": [
      287.33,
      293.8
    ],
    "en": [
      "Now let’s configure the port-channel as a trunk. INTERFACE PO1."
    ],
    "ru": [
      "Теперь давайте настроим порт-канал как транк. ИНТЕРФЕЙС PO1."
    ]
  },
  {
    "time": [
      293.8,
      296.71
    ],
    "en": [
      "INTERFACE PO1. SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "ИНТЕРФЕЙС PO1. РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      296.71,
      302.36
    ],
    "en": [
      "As you can see, this model of switch supports both ISL and dot1q trunk encapsulations, so"
    ],
    "ru": [
      "Как видите, эта модель коммутатора поддерживает инкапсуляцию магистрали как ISL, так и dot1q, поэтому"
    ]
  },
  {
    "time": [
      302.36,
      305.569
    ],
    "en": [
      "we have to set the encapsulation first."
    ],
    "ru": [
      "мы должны сначала установить инкапсуляцию."
    ]
  },
  {
    "time": [
      305.569,
      310.61
    ],
    "en": [
      "SWITCHPORT TRUNK ENCAPSULATION DOT1Q. SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "ПЕРЕКЛЮЧАТЕЛЬ КАПСУЛЯЦИЯ ЛИНИИ DOT1Q. РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      310.61,
      315.41
    ],
    "en": [
      "SWITCHPORT MODE TRUNK. Okay, now the EtherChannel should be up. Let’s check."
    ],
    "ru": [
      "РЕЖИМ SWITCHPORT TRUNK. Хорошо, теперь EtherChannel должен быть включен. Давайте проверим."
    ]
  },
  {
    "time": [
      315.41,
      318.889
    ],
    "en": [
      "Let’s check. DO SHOW ETHERCHANNEL SUMMARY."
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ СВОДКУ ETHERCHANNEL."
    ]
  },
  {
    "time": [
      318.889,
      324.4
    ],
    "en": [
      "The port-channel interface has the flags SU, meaning Layer 2 and in use."
    ],
    "ru": [
      "Интерфейс порт-канал имеет флаги SU, что означает уровень 2 и используется."
    ]
  },
  {
    "time": [
      324.4,
      327.02
    ],
    "en": [
      "These are the flags we want to see."
    ],
    "ru": [
      "Это флаги, которые мы хотим видеть."
    ]
  },
  {
    "time": [
      327.02,
      331.48
    ],
    "en": [
      "For the member ports, the flag is P, meaning bundled in the port-channel."
    ],
    "ru": [
      "Для портов-участников установлен флаг P, что означает, что они объединены в порт-канал."
    ]
  },
  {
    "time": [
      331.48,
      333.509
    ],
    "en": [
      "This is also what we want to see."
    ],
    "ru": [
      "Это тоже то, что мы хотим видеть."
    ]
  },
  {
    "time": [
      333.509,
      336.639
    ],
    "en": [
      "Let’s check the trunk interfaces."
    ],
    "ru": [
      "Проверим магистральные интерфейсы."
    ]
  },
  {
    "time": [
      336.639,
      339.22
    ],
    "en": [
      "DO SHOW INTERFACE TRUNK."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙС БАГАЖНИК."
    ]
  },
  {
    "time": [
      339.22,
      343.57
    ],
    "en": [
      "Okay, port-channel 1 properly became a trunk."
    ],
    "ru": [
      "Хорошо, порт-канал 1 правильно стал транком."
    ]
  },
  {
    "time": [
      343.57,
      348.38
    ],
    "en": [
      "Before configuring the next EtherChannel, I’ll go back to ASW1 to see if the output"
    ],
    "ru": [
      "Перед настройкой следующего канала EtherChannel я вернусь к ASW1, чтобы проверить,"
    ]
  },
  {
    "time": [
      348.38,
      355.55
    ],
    "en": [
      "of SHOW SPANNING-TREE is different. DO SHOW SPANNING-TREE."
    ],
    "ru": [
      "SHOW SPANNING-TREE разные. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      355.55,
      363.27
    ],
    "en": [
      "DO SHOW SPANNING-TREE. As I said, we no longer see G0/1 and G0/2 in the output, just Port-channel 1 which is the root port."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕРЕВО. Как я уже сказал, мы больше не видим G0 / 1 и G0 / 2 в выходных данных, а только порт-канал 1, который является корневым портом."
    ]
  },
  {
    "time": [
      363.27,
      369.99
    ],
    "en": [
      "port. F0/1 and 2 are designated because they are connected to end hosts."
    ],
    "ru": [
      "порт. F0 / 1 и 2 обозначены, потому что они подключены к конечным хостам."
    ]
  },
  {
    "time": [
      369.99,
      374.93
    ],
    "en": [
      "Next up is the EtherChannel between ASW2 and DSW2."
    ],
    "ru": [
      "Далее идет EtherChannel между ASW2 и DSW2."
    ]
  },
  {
    "time": [
      374.93,
      379.43
    ],
    "en": [
      "The configurations will be almost identical to the ones we just did, except instead of"
    ],
    "ru": [
      "Конфигурации будут почти идентичны тем, которые мы только что сделали, за исключением"
    ]
  },
  {
    "time": [
      379.43,
      383.94
    ],
    "en": [
      "active mode we’ll use desirable, which is the PAgP equivalent."
    ],
    "ru": [
      "активный режим мы будем использовать желаемый, который является эквивалентом PAgP."
    ]
  },
  {
    "time": [
      383.94,
      392.02
    ],
    "en": [
      "Remember, PAgP has desirable and auto modes, whereas LACP has active and passive."
    ],
    "ru": [
      "Помните, что PAgP имеет желаемый и автоматический режимы, тогда как LACP имеет активный и пассивный режимы."
    ]
  },
  {
    "time": [
      392.02,
      400.25
    ],
    "en": [
      "So I’ll quickly run through the configurations, first on ASW2. ENABLE."
    ],
    "ru": [
      "Итак, я быстро рассмотрю конфигурации, сначала на ASW2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      400.25,
      406.38
    ],
    "en": [
      "ENABLE. CONF T. INTERFACE RANGE G0/1 to 2."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. ДИАПАЗОН ИНТЕРФЕЙСА G0 / 1 до 2."
    ]
  },
  {
    "time": [
      406.38,
      411.63
    ],
    "en": [
      "CHANNEL-GROUP 1 MODE, now here is the only difference. DESIRABLE."
    ],
    "ru": [
      "РЕЖИМ КАНАЛА-ГРУППА 1, теперь это единственное отличие. ЖЕЛАТЕЛЬНО."
    ]
  },
  {
    "time": [
      411.63,
      420.099
    ],
    "en": [
      "DESIRABLE. So, the port-channel interface was created, now let’s configure it. INTERFACE PO1."
    ],
    "ru": [
      "ЖЕЛАТЕЛЬНО. Итак, интерфейс порт-канал создан, теперь давайте настроим его. ИНТЕРФЕЙС PO1."
    ]
  },
  {
    "time": [
      420.099,
      421.68
    ],
    "en": [
      "INTERFACE PO1. SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "ИНТЕРФЕЙС PO1. РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      421.68,
      430.31
    ],
    "en": [
      "That’s ASW2’s side, next up DSW2. ENABLE."
    ],
    "ru": [
      "Это сторона ASW2, следующая за DSW2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      430.31,
      436.229
    ],
    "en": [
      "ENABLE. CONF T. INTERFACE RANGE G1/0/3 to 4."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. ДИАПАЗОН ИНТЕРФЕЙСА G1 / 0/3 до 4."
    ]
  },
  {
    "time": [
      436.229,
      438.379
    ],
    "en": [
      "CHANNEL-GROUP 1 MODE DESIRABLE."
    ],
    "ru": [
      "РЕЖИМ КАНАЛОВ ГРУППЫ 1 ЖЕЛАТЕЛЬНЫЙ."
    ]
  },
  {
    "time": [
      438.379,
      444.789
    ],
    "en": [
      "Next up, make the port-channel a trunk. INTERFACE PO1."
    ],
    "ru": [
      "Затем сделайте порт-канал транком. ИНТЕРФЕЙС PO1."
    ]
  },
  {
    "time": [
      444.789,
      450.88
    ],
    "en": [
      "INTERFACE PO1. This is the same model of switch as DSW1, so we have to set the encapsulation."
    ],
    "ru": [
      "ИНТЕРФЕЙС PO1. Это та же модель коммутатора, что и DSW1, поэтому мы должны установить инкапсуляцию."
    ]
  },
  {
    "time": [
      450.88,
      455.349
    ],
    "en": [
      "SWITCHPORT TRUNK ENCAPSULATION DOT1Q. SWITCHPORT MODE TRUNK."
    ],
    "ru": [
      "ПЕРЕКЛЮЧАТЕЛЬ КАПСУЛЯЦИЯ ЛИНИИ DOT1Q. РЕЖИМ SWITCHPORT TRUNK."
    ]
  },
  {
    "time": [
      455.349,
      458.949
    ],
    "en": [
      "SWITCHPORT MODE TRUNK. Okay, let’s check if it’s up."
    ],
    "ru": [
      "РЕЖИМ SWITCHPORT TRUNK. Хорошо, давай проверим, все ли в порядке."
    ]
  },
  {
    "time": [
      458.949,
      462.8
    ],
    "en": [
      "DO SHOW ETHERCHANNEL SUMMARY."
    ],
    "ru": [
      "ПОКАЗАТЬ СВОДКУ ETHERCHANNEL."
    ]
  },
  {
    "time": [
      462.8,
      470.56
    ],
    "en": [
      "Here are the flags we want to see, SU for the port-channel, and P for the member interfaces."
    ],
    "ru": [
      "Вот флаги, которые мы хотим видеть: SU для порта-канала и P для интерфейсов-членов."
    ]
  },
  {
    "time": [
      470.56,
      475.319
    ],
    "en": [
      "Next up let’s configure the Layer 3 port-channel connecting DSW1 and DSW2."
    ],
    "ru": [
      "Теперь давайте настроим порт-канал уровня 3, соединяющий DSW1 и DSW2."
    ]
  },
  {
    "time": [
      475.319,
      480.009
    ],
    "en": [
      "We’re already on DSW2, so let’s start here."
    ],
    "ru": [
      "Мы уже на DSW2, так что давайте начнем."
    ]
  },
  {
    "time": [
      480.009,
      483.83
    ],
    "en": [
      "INTERFACE RANGE G1/0/1 to 2."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G1 / 0/1 до 2."
    ]
  },
  {
    "time": [
      483.83,
      489.89
    ],
    "en": [
      "So, first you should make these routed ports with the command NO SWITCHPORT."
    ],
    "ru": [
      "Итак, сначала вы должны сделать эти порты маршрутизируемыми с помощью команды NO SWITCHPORT."
    ]
  },
  {
    "time": [
      489.89,
      496.129
    ],
    "en": [
      "Now when you make the channel-group, the port-channel interface will automatically be Layer 3."
    ],
    "ru": [
      "Теперь, когда вы создаете группу каналов, интерфейс порт-канал автоматически будет Уровнем 3."
    ]
  },
  {
    "time": [
      496.129,
      503.64
    ],
    "en": [
      "We already used channel-group 1 for the connections to the access switches, so let’s use channel-group 2."
    ],
    "ru": [
      "Мы уже использовали группу каналов 1 для подключений к коммутаторам доступа, поэтому давайте воспользуемся группой каналов 2."
    ]
  },
  {
    "time": [
      503.64,
      505.69
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
      503.64,
      505.69
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
      505.69,
      511.259
    ],
    "en": [
      "I used ON, because the instructions say to use static etherchannel."
    ],
    "ru": [
      "Я использовал ON, потому что в инструкции сказано использовать статический etherchannel."
    ]
  },
  {
    "time": [
      511.259,
      517.07
    ],
    "en": [
      "Now all we have to do is configure an IP address on the port-channel. INTERFACE PO2."
    ],
    "ru": [
      "Теперь все, что нам нужно сделать, это настроить IP-адрес на канале порта. ИНТЕРФЕЙС PO2."
    ]
  },
  {
    "time": [
      517.07,
      524.6
    ],
    "en": [
      "INTERFACE PO2. IP ADDRESS 10.0.0.2 255.255.255.252. Okay, that’s it."
    ],
    "ru": [
      "ИНТЕРФЕЙС PO2. IP-АДРЕС 10.0.0.2 255.255.255.252. Ладно, вот и все."
    ]
  },
  {
    "time": [
      524.6,
      530.6
    ],
    "en": [
      "Okay, that’s it. Let’s do the same on DSW1."
    ],
    "ru": [
      "Ладно, вот и все. Сделаем то же самое с DSW1."
    ]
  },
  {
    "time": [
      530.6,
      537.36
    ],
    "en": [
      "INTERFACE RANGE G1/0/1 to 2. NO SWITCHPORT."
    ],
    "ru": [
      "ДИАПАЗОН ИНТЕРФЕЙСА G1 / 0/1 - 2. НЕТ ПЕРЕКЛЮЧАТЕЛЯ."
    ]
  },
  {
    "time": [
      537.36,
      542.29
    ],
    "en": [
      "NO SWITCHPORT. CHANNEL-GROUP 2 MODE ON. INTERFACE PO2."
    ],
    "ru": [
      "НЕТ ПЕРЕКЛЮЧАТЕЛЯ. КАНАЛ-ГРУППА 2 РЕЖИМ ВКЛЮЧЕН. ИНТЕРФЕЙС PO2."
    ]
  },
  {
    "time": [
      542.29,
      549.54
    ],
    "en": [
      "INTERFACE PO2. IP ADDRESS 10.0.0.1 255.255.255.252."
    ],
    "ru": [
      "ИНТЕРФЕЙС PO2. IP-АДРЕС 10.0.0.1 255.255.255.252."
    ]
  },
  {
    "time": [
      549.54,
      552.17
    ],
    "en": [
      "Okay let’s take a look at the status."
    ],
    "ru": [
      "Хорошо, давайте посмотрим на статус."
    ]
  },
  {
    "time": [
      552.17,
      556.26
    ],
    "en": [
      "DO SHOW ETHERCHANNEL SUMMARY."
    ],
    "ru": [
      "ПОКАЗАТЬ СВОДКУ ETHERCHANNEL."
    ]
  },
  {
    "time": [
      556.26,
      562.16
    ],
    "en": [
      "Notice that the flags are now RU, meaning Layer 3 and in use, and the member interfaces"
    ],
    "ru": [
      "Обратите внимание, что теперь флаги являются RU, что означает, что уровень 3 уже используется, а интерфейсы-члены"
    ]
  },
  {
    "time": [
      562.16,
      565.42
    ],
    "en": [
      "once again display P, which is what we want to see."
    ],
    "ru": [
      "еще раз отобразите P, что мы и хотим видеть."
    ]
  },
  {
    "time": [
      565.42,
      576.02
    ],
    "en": [
      "Let’s try a ping to DSW2’s port-channel interface. DO PING 10.0.0.2."
    ],
    "ru": [
      "Давайте попробуем проверить связь с интерфейсом порт-канал DSW2. ПИНГ 10.0.0.2."
    ]
  },
  {
    "time": [
      576.02,
      580.29
    ],
    "en": [
      "DO PING 10.0.0.2. Okay, looks good."
    ],
    "ru": [
      "ПИНГ 10.0.0.2. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      580.29,
      584.87
    ],
    "en": [
      "Next up we are supposed to configure static routes so the PCs can reach SRV1."
    ],
    "ru": [
      "Далее мы должны настроить статические маршруты, чтобы ПК могли подключиться к SRV1."
    ]
  },
  {
    "time": [
      584.87,
      588.9
    ],
    "en": [
      "So, let’s check the current routing table."
    ],
    "ru": [
      "Итак, давайте проверим текущую таблицу маршрутизации."
    ]
  },
  {
    "time": [
      588.9,
      590.94
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      590.94,
      593.83
    ],
    "en": [
      "There is no routing table, why is that?"
    ],
    "ru": [
      "Таблицы маршрутизации нет, почему?"
    ]
  },
  {
    "time": [
      593.83,
      600.41
    ],
    "en": [
      "Well, for a multilayer switch to build a routing table, we need to enable IP routing."
    ],
    "ru": [
      "Что ж, для многоуровневого коммутатора для построения таблицы маршрутизации нам нужно включить IP-маршрутизацию."
    ]
  },
  {
    "time": [
      600.41,
      605.6
    ],
    "en": [
      "DSW1 was able to ping DSW2 because it’s directly connected, but if we don’t enable"
    ],
    "ru": [
      "DSW1 смог проверить связь с DSW2, потому что он подключен напрямую, но если мы не включим"
    ]
  },
  {
    "time": [
      605.6,
      612.97
    ],
    "en": [
      "ip routing, even if we configure static routes, the switches still won’t build a routing table."
    ],
    "ru": [
      "ip routing, даже если мы настроим статические маршруты, коммутаторы все равно не построят таблицу маршрутизации."
    ]
  },
  {
    "time": [
      612.97,
      622.15
    ],
    "en": [
      "table. So let’s enable IP routing and configure the route here on DSW1. EXIT. EXIT. IP ROUTING."
    ],
    "ru": [
      "стол. Итак, давайте включим IP-маршрутизацию и настроим маршрут здесь, на DSW1. ВЫХОД. ВЫХОД. IP-МАРШРУТИЗАЦИЯ."
    ]
  },
  {
    "time": [
      622.15,
      624.08
    ],
    "en": [
      "EXIT. IP ROUTING. Now let’s check the table."
    ],
    "ru": [
      "ВЫХОД. IP-МАРШРУТИЗАЦИЯ. Теперь посмотрим на таблицу."
    ]
  },
  {
    "time": [
      624.08,
      627.34
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      627.34,
      634.27
    ],
    "en": [
      "So, these routes we already have for the VLAN1 SVI, which I preconfigured, and the port-channel"
    ],
    "ru": [
      "Итак, эти маршруты у нас уже есть для VLAN1 SVI, который я предварительно настроил, и порта-канала."
    ]
  },
  {
    "time": [
      634.27,
      636.67
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
      634.27,
      636.67
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
      636.67,
      640.71
    ],
    "en": [
      "Let’s configure a static route to SRV1’s subnet."
    ],
    "ru": [
      "Давайте настроим статический маршрут к подсети SRV1."
    ]
  },
  {
    "time": [
      640.71,
      652.04
    ],
    "en": [
      "IP ROUTE 172.16.2.0 255.255.255.0, and the next hop is 10.0.0.2."
    ],
    "ru": [
      "IP-МАРШРУТ 172.16.2.0 255.255.255.0, а следующий переход - 10.0.0.2."
    ]
  },
  {
    "time": [
      652.04,
      655.8
    ],
    "en": [
      "Let’s check DO SHOW IP ROUTE."
    ],
    "ru": [
      "Давайте проверим ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      655.8,
      658.87
    ],
    "en": [
      "Okay, it was added to the table."
    ],
    "ru": [
      "Ладно, добавили в таблицу."
    ]
  },
  {
    "time": [
      658.87,
      667.54
    ],
    "en": [
      "Next I’ll do the same on DSW2. EXIT. EXIT. IP ROUTING."
    ],
    "ru": [
      "Затем я сделаю то же самое на DSW2. ВЫХОД. ВЫХОД. IP-МАРШРУТИЗАЦИЯ."
    ]
  },
  {
    "time": [
      667.54,
      670.7
    ],
    "en": [
      "EXIT. IP ROUTING. And I’ll configure a route to the PCs’ subnet."
    ],
    "ru": [
      "ВЫХОД. IP-МАРШРУТИЗАЦИЯ. И я настрою маршрут к подсети ПК."
    ]
  },
  {
    "time": [
      670.7,
      681.1
    ],
    "en": [
      "IP ROUTE 172.16.1.0 255.255.255.0, and the next hop is 10.0.0.1."
    ],
    "ru": [
      "IP-МАРШРУТ 172.16.1.0 255.255.255.0, а следующий переход - 10.0.0.1."
    ]
  },
  {
    "time": [
      681.1,
      683.67
    ],
    "en": [
      "Let’s check the table."
    ],
    "ru": [
      "Давайте проверим таблицу."
    ]
  },
  {
    "time": [
      683.67,
      685.97
    ],
    "en": [
      "DO SHOW IP ROUTE."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      685.97,
      688.48
    ],
    "en": [
      "Okay, looks like we have all of the routes we need."
    ],
    "ru": [
      "Ладно, похоже, у нас есть все необходимые маршруты."
    ]
  },
  {
    "time": [
      688.48,
      692.26
    ],
    "en": [
      "So, let’s try a ping from PC1 to SRV1."
    ],
    "ru": [
      "Итак, давайте попробуем проверить связь с ПК1 на SRV1."
    ]
  },
  {
    "time": [
      692.26,
      698.96
    ],
    "en": [
      "PC1’s default gateway is the SVI on DSW1, and then DSW1 will route it over its Layer"
    ],
    "ru": [
      "Шлюзом по умолчанию ПК1 является SVI на DSW1, а затем DSW1 направит его через свой уровень."
    ]
  },
  {
    "time": [
      698.96,
      702.84
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
      698.96,
      702.84
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
      702.84,
      713.02
    ],
    "en": [
      "So, let’s try the ping. PING 172.16.2.1."
    ],
    "ru": [
      "Итак, попробуем пинг. ПИНГ 172.16.2.1."
    ]
  },
  {
    "time": [
      713.02,
      718.5
    ],
    "en": [
      "PING 172.16.2.1. So, I’ve said this a few times before, but when you first ping you’ll probably have"
    ],
    "ru": [
      "ПИНГ 172.16.2.1. Итак, я уже говорил это несколько раз раньше, но когда вы впервые пингуетесь, у вас, вероятно, будет"
    ]
  },
  {
    "time": [
      718.5,
      724.55
    ],
    "en": [
      "a few timeouts, this is because the ARP process needs to complete, but after that they should"
    ],
    "ru": [
      "несколько тайм-аутов, это связано с тем, что процесс ARP должен завершиться, но после этого они должны"
    ]
  },
  {
    "time": [
      724.55,
      729.07
    ],
    "en": [
      "all go through, like this."
    ],
    "ru": [
      "все проходят, вот так."
    ]
  },
  {
    "time": [
      729.07,
      736.55
    ],
    "en": [
      "Okay next up we are asked to check the default EtherChannel load-balancing method used on each switch."
    ],
    "ru": [
      "Хорошо, дальше нас просят проверить метод балансировки нагрузки EtherChannel по умолчанию, используемый на каждом коммутаторе."
    ]
  },
  {
    "time": [
      736.55,
      740.73
    ],
    "en": [
      "each switch. The access switches are the same model, and the distribution switches are both the same"
    ],
    "ru": [
      "каждый переключатель. Коммутаторы доступа имеют одну и ту же модель, и переключатели распределения одинаковы."
    ]
  },
  {
    "time": [
      740.73,
      745.64
    ],
    "en": [
      "model too, so I’ll just check ASW1 and DSW1."
    ],
    "ru": [
      "модель тоже, так что я просто проверю ASW1 и DSW1."
    ]
  },
  {
    "time": [
      745.64,
      752.29
    ],
    "en": [
      "ASW1 first. To check the load-balancing method, use this command."
    ],
    "ru": [
      "Сначала ASW1. Чтобы проверить метод балансировки нагрузки, используйте эту команду."
    ]
  },
  {
    "time": [
      752.29,
      756.24
    ],
    "en": [
      "DO SHOW ETHERCHANNEL LOAD-BALANCE."
    ],
    "ru": [
      "ПОКАЗАТЬ БАЛАНС НАГРУЗКИ ЭФИРНОГО КАНАЛА."
    ]
  },
  {
    "time": [
      756.24,
      760.08
    ],
    "en": [
      "So, the default is source MAC address."
    ],
    "ru": [
      "Таким образом, по умолчанию используется исходный MAC-адрес."
    ]
  },
  {
    "time": [
      760.08,
      765.63
    ],
    "en": [
      "All frames from the same source MAC address will always use the same member interface of the EtherChannel."
    ],
    "ru": [
      "Все кадры с одного и того же исходного MAC-адреса всегда будут использовать один и тот же членский интерфейс EtherChannel."
    ]
  },
  {
    "time": [
      765.63,
      776.39
    ],
    "en": [
      "of the EtherChannel. While we’re on ASW1, I’ll do step 6 as well, which is to set this to source and destination IP address. IP address. EXIT."
    ],
    "ru": [
      "канала EtherChannel. Пока мы находимся на ASW1, я также сделаю шаг 6, который должен установить для него исходный и целевой IP-адрес. Айпи адрес. ВЫХОД."
    ]
  },
  {
    "time": [
      776.39,
      781.42
    ],
    "en": [
      "IP address. EXIT. Okay, the show command uses ‘etherchannel’, but to configure the load-balancing method"
    ],
    "ru": [
      "Айпи адрес. ВЫХОД. Хорошо, команда show использует \"etherchannel\", но для настройки метода балансировки нагрузки"
    ]
  },
  {
    "time": [
      781.42,
      789.96
    ],
    "en": [
      "we use this command: PORT-CHANNEL LOAD-BALANCE SRC-DST-IP. Let’s check again."
    ],
    "ru": [
      "мы используем эту команду: PORT-CHANNEL LOAD-BALANCE SRC-DST-IP. Давай еще раз проверим."
    ]
  },
  {
    "time": [
      789.96,
      793.22
    ],
    "en": [
      "Let’s check again. DO SHOW ETHERCHANNEL LOAD-BALANCE."
    ],
    "ru": [
      "Давай еще раз проверим. ПОКАЗАТЬ БАЛАНС НАГРУЗКИ ЭФИРНОГО КАНАЛА."
    ]
  },
  {
    "time": [
      793.22,
      795.98
    ],
    "en": [
      "Okay, it has been changed."
    ],
    "ru": [
      "Хорошо, это было изменено."
    ]
  },
  {
    "time": [
      795.98,
      808.61
    ],
    "en": [
      "I’ll go on ASW2 and do the same now. EXIT. PORT-CHANNEL LOAD-BALANCE SRC-DST-IP."
    ],
    "ru": [
      "Я пойду на ASW2 и сделаю то же самое сейчас. ВЫХОД. БАЛАНС НАГРУЗКИ НА ПОРТОВЫЙ КАНАЛ SRC-DST-IP."
    ]
  },
  {
    "time": [
      808.61,
      810.29
    ],
    "en": [
      "PORT-CHANNEL LOAD-BALANCE SRC-DST-IP. And let’s confirm."
    ],
    "ru": [
      "БАЛАНС НАГРУЗКИ НА ПОРТОВЫЙ КАНАЛ SRC-DST-IP. И давайте подтвердим."
    ]
  },
  {
    "time": [
      810.29,
      816.36
    ],
    "en": [
      "DO SHOW ETHERCHANNEL LOAD-BALANCE. Okay, looks good."
    ],
    "ru": [
      "ПОКАЗАТЬ БАЛАНС НАГРУЗКИ НА ЭФИРНЫЙ КАНАЛ. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      816.36,
      820.75
    ],
    "en": [
      "Okay, looks good. Finally let’s check the load-balancing method on DSW1."
    ],
    "ru": [
      "Хорошо, выглядит хорошо. Наконец, давайте проверим метод балансировки нагрузки на DSW1."
    ]
  },
  {
    "time": [
      820.75,
      823.88
    ],
    "en": [
      "DO SHOW ETHERCHANNEL LOAD-BALANCE."
    ],
    "ru": [
      "ПОКАЗАТЬ БАЛАНС НАГРУЗКИ ЭФИРНОГО КАНАЛА."
    ]
  },
  {
    "time": [
      823.88,
      830.3
    ],
    "en": [
      "Okay, the default on this model is the same as the access switches, source MAC address."
    ],
    "ru": [
      "Хорошо, значение по умолчанию в этой модели такое же, как у коммутаторов доступа, исходный MAC-адрес."
    ]
  },
  {
    "time": [
      830.3,
      838.07
    ],
    "en": [
      "So let’s change it. PORT-CHANNEL LOAD-BALANCE SRC-DST-IP."
    ],
    "ru": [
      "Так что давайте это изменим. БАЛАНС НАГРУЗКИ НА ПОРТОВЫЙ КАНАЛ SRC-DST-IP."
    ]
  },
  {
    "time": [
      838.07,
      840.26
    ],
    "en": [
      "PORT-CHANNEL LOAD-BALANCE SRC-DST-IP. And confirm once more."
    ],
    "ru": [
      "БАЛАНС НАГРУЗКИ НА ПОРТОВЫЙ КАНАЛ SRC-DST-IP. И подтвердите еще раз."
    ]
  },
  {
    "time": [
      840.26,
      842.96
    ],
    "en": [
      "DO SHOW ETHERCHANNEL LOAD-BALANCE."
    ],
    "ru": [
      "ПОКАЗАТЬ БАЛАНС НАГРУЗКИ ЭФИРНОГО КАНАЛА."
    ]
  },
  {
    "time": [
      842.96,
      846.24
    ],
    "en": [
      "Okay, it was changed."
    ],
    "ru": [
      "Хорошо, это было изменено."
    ]
  },
  {
    "time": [
      846.24,
      857.92
    ],
    "en": [
      "Now I’ll hop back on to DSW2 and do the same configuration. PORT-CHANNEL LOAD-BALANCE SRC-DST-IP."
    ],
    "ru": [
      "Теперь я вернусь к DSW2 и проделаю ту же настройку. БАЛАНС НАГРУЗКИ НА ПОРТОВЫЙ КАНАЛ SRC-DST-IP."
    ]
  },
  {
    "time": [
      857.92,
      859.45
    ],
    "en": [
      "PORT-CHANNEL LOAD-BALANCE SRC-DST-IP. And then confirm."
    ],
    "ru": [
      "БАЛАНС НАГРУЗКИ НА ПОРТОВЫЙ КАНАЛ SRC-DST-IP. А затем подтвердите."
    ]
  },
  {
    "time": [
      859.45,
      864.42
    ],
    "en": [
      "DO SHOW ETHERHCHANNEL LOAD-BALANCE. Looks good."
    ],
    "ru": [
      "ПОКАЗАТЬ БАЛАНС НАГРУЗКИ ЭФИРНОГО КАНАЛА. Выглядит неплохо."
    ]
  },
  {
    "time": [
      864.42,
      874.81
    ],
    "en": [
      "Looks good. So, in today’s lab we configured Layer 2 and Layer 3 EtherChannels using LACP, PAgP, and static EtherChannel."
    ],
    "ru": [
      "Выглядит неплохо. Итак, в сегодняшней лабораторной работе мы настроили каналы EtherChannel уровня 2 и уровня 3 с использованием LACP, PAgP и статического EtherChannel."
    ]
  },
  {
    "time": [
      874.81,
      879.5
    ],
    "en": [
      "and static EtherChannel. We also configured the EtherChannel load-balancing method to take use the source and destination"
    ],
    "ru": [
      "и статический EtherChannel. Мы также настроили метод балансировки нагрузки EtherChannel для использования источника и назначения."
    ]
  },
  {
    "time": [
      879.5,
      884.41
    ],
    "en": [
      "IP addresses to determine which interface should be used, instead of the default which"
    ],
    "ru": [
      "IP-адреса, чтобы определить, какой интерфейс следует использовать, а не по умолчанию, который"
    ]
  },
  {
    "time": [
      884.41,
      886.35
    ],
    "en": [
      "was the source MAC address only."
    ],
    "ru": [
      "был только исходный MAC-адрес."
    ]
  },
  {
    "time": [
      886.35,
      889.04
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      889.04,
      893.76
    ],
    "en": [
      "Next let’s take a look at a lab in Boson NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на лабораторию в Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      893.76,
      899.76
    ],
    "en": [
      "Okay, for today's Boson NetSim lab preview, we're doing this lab: Layer 2 EtherChannel."
    ],
    "ru": [
      "Хорошо, для сегодняшней предварительной лабораторной работы Boson NetSim мы выполняем эту лабораторную работу: канал EtherChannel уровня 2."
    ]
  },
  {
    "time": [
      899.76,
      903.27
    ],
    "en": [
      "There are 3 labs about EtherChannel in NetSim for CCNA."
    ],
    "ru": [
      "В NetSim для CCNA есть 3 лаборатории по EtherChannel."
    ]
  },
  {
    "time": [
      903.27,
      910.32
    ],
    "en": [
      "This one here, EtherChannel Negotiation Protocols: LACP, Layer 2 EtherChannel, and Layer 3 EtherChannel."
    ],
    "ru": [
      "Вот здесь, протоколы согласования EtherChannel: LACP, EtherChannel уровня 2 и EtherChannel уровня 3."
    ]
  },
  {
    "time": [
      910.32,
      913.08
    ],
    "en": [
      "Let's do Layer 2 EtherChannel."
    ],
    "ru": [
      "Давайте сделаем Layer 2 EtherChannel."
    ]
  },
  {
    "time": [
      913.08,
      915.87
    ],
    "en": [
      "Click on lab instructions, and this is the diagram."
    ],
    "ru": [
      "Нажмите на лабораторные инструкции, и это диаграмма."
    ]
  },
  {
    "time": [
      915.87,
      921.0
    ],
    "en": [
      "So, you can see there are many opportunities to use EtherChannel in this network."
    ],
    "ru": [
      "Итак, вы видите, что есть много возможностей использовать EtherChannel в этой сети."
    ]
  },
  {
    "time": [
      921.0,
      923.45
    ],
    "en": [
      "All of these switches have redundant links connecting them."
    ],
    "ru": [
      "Все эти переключатели имеют соединяющие их резервные каналы."
    ]
  },
  {
    "time": [
      923.45,
      926.5
    ],
    "en": [
      "These are the commands you need to know."
    ],
    "ru": [
      "Это команды, которые вам нужно знать."
    ]
  },
  {
    "time": [
      926.5,
      930.43
    ],
    "en": [
      "You do know all of these commands already, except this one here: SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "Вы уже знаете все эти команды, кроме этой: SHOW CDP NEIGHBORS."
    ]
  },
  {
    "time": [
      930.43,
      933.72
    ],
    "en": [
      "I'll show you that in a minute."
    ],
    "ru": [
      "Я покажу вам это через минуту."
    ]
  },
  {
    "time": [
      933.72,
      934.72
    ],
    "en": [
      "And here are the tasks."
    ],
    "ru": [
      "А вот и задачи."
    ]
  },
  {
    "time": [
      934.72,
      936.2
    ],
    "en": [
      "There are three main tasks."
    ],
    "ru": [
      "Есть три основные задачи."
    ]
  },
  {
    "time": [
      936.2,
      940.92
    ],
    "en": [
      "Task 1, plan EtherChannel configurations, with 10 steps."
    ],
    "ru": [
      "Задача 1: планирование конфигураций EtherChannel с 10 шагами."
    ]
  },
  {
    "time": [
      940.92,
      945.3
    ],
    "en": [
      "Task 2, review initial configurations, with 12 steps."
    ],
    "ru": [
      "Задача 2, обзор исходных конфигураций, состоит из 12 шагов."
    ]
  },
  {
    "time": [
      945.3,
      948.1
    ],
    "en": [
      "And then task 3, verify configurations."
    ],
    "ru": [
      "И затем задача 3, проверьте конфигурации."
    ]
  },
  {
    "time": [
      948.1,
      951.8
    ],
    "en": [
      "So, for this preview we'll just do task 1."
    ],
    "ru": [
      "Итак, для этого превью мы просто выполним задачу 1."
    ]
  },
  {
    "time": [
      951.8,
      955.99
    ],
    "en": [
      "So, we won't actually do any configurations, we're going to plan the EtherChannel configurations"
    ],
    "ru": [
      "Итак, на самом деле мы не будем делать никаких конфигураций, мы планируем конфигурации EtherChannel."
    ]
  },
  {
    "time": [
      955.99,
      958.53
    ],
    "en": [
      "that you implement in task 2."
    ],
    "ru": [
      "что вы реализуете в задаче 2."
    ]
  },
  {
    "time": [
      958.53,
      962.96
    ],
    "en": [
      "So, this task involves planning Layer 2 EtherChannel configurations."
    ],
    "ru": [
      "Итак, эта задача включает планирование конфигураций EtherChannel уровня 2."
    ]
  },
  {
    "time": [
      962.96,
      968.43
    ],
    "en": [
      "You will be creating a port-channel between DSW1 and DSW2 in this lab."
    ],
    "ru": [
      "В этой лабораторной работе вы создадите порт-канал между DSW1 и DSW2."
    ]
  },
  {
    "time": [
      968.43,
      972.25
    ],
    "en": [
      "Step 1, determine the number of links that can be configured as part of the port-channel"
    ],
    "ru": [
      "Шаг 1, определите количество ссылок, которые можно настроить как часть порта-канала."
    ]
  },
  {
    "time": [
      972.25,
      976.89
    ],
    "en": [
      "group between DSW1 and DSW2."
    ],
    "ru": [
      "группа между DSW1 и DSW2."
    ]
  },
  {
    "time": [
      976.89,
      982.75
    ],
    "en": [
      "Okay so, looks like two links, 5 and 6."
    ],
    "ru": [
      "Хорошо, похоже, две ссылки, 5 и 6."
    ]
  },
  {
    "time": [
      982.75,
      988.94
    ],
    "en": [
      "Now, what are the actual interface IDs of these interfaces? Let's check."
    ],
    "ru": [
      "Теперь, каковы фактические идентификаторы этих интерфейсов? Давайте проверим."
    ]
  },
  {
    "time": [
      988.94,
      994.62
    ],
    "en": [
      "Let's check. So I will show you that SHOW CDP NEIGHBORS command here on DSW1. ENABLE."
    ],
    "ru": [
      "Давайте проверим. Итак, я покажу вам эту команду SHOW CDP NEIGHBORS здесь, на DSW1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      994.62,
      996.19
    ],
    "en": [
      "ENABLE. SHOW CDP NEIGHBORS."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ СОСЕДЕЙ CDP."
    ]
  },
  {
    "time": [
      996.19,
      1000.85
    ],
    "en": [
      "So, CDP is Cisco Discovery Protocol."
    ],
    "ru": [
      "Итак, CDP - это протокол обнаружения Cisco."
    ]
  },
  {
    "time": [
      1000.85,
      1006.25
    ],
    "en": [
      "It's a Cisco proprietary protocol that is used to gather information about connected devices."
    ],
    "ru": [
      "Это проприетарный протокол Cisco, который используется для сбора информации о подключенных устройствах."
    ]
  },
  {
    "time": [
      1006.25,
      1011.14
    ],
    "en": [
      "devices. So, when I enter this command here on DSW1 we'll get some basic information about all"
    ],
    "ru": [
      "устройств. Итак, когда я введу эту команду здесь, на DSW1, мы получим некоторую базовую информацию обо всех"
    ]
  },
  {
    "time": [
      1011.14,
      1015.87
    ],
    "en": [
      "of these switches it's connected to. There we go."
    ],
    "ru": [
      "этих переключателей, к которым он подключен. Итак, мы идем."
    ]
  },
  {
    "time": [
      1015.87,
      1019.14
    ],
    "en": [
      "There we go. So, DSW2 is here."
    ],
    "ru": [
      "Итак, мы идем. Итак, DSW2 здесь."
    ]
  },
  {
    "time": [
      1019.14,
      1025.08
    ],
    "en": [
      "And notice under Local Interface it shows FastEthernet 5 and 6."
    ],
    "ru": [
      "Обратите внимание, что в разделе «Локальный интерфейс» отображаются FastEthernet 5 и 6."
    ]
  },
  {
    "time": [
      1025.08,
      1028.88
    ],
    "en": [
      "So, those are these two interfaces here."
    ],
    "ru": [
      "Итак, вот эти два интерфейса."
    ]
  },
  {
    "time": [
      1028.88,
      1034.56
    ],
    "en": [
      "And also here under Port ID, these are the interface IDs on the neighboring device."
    ],
    "ru": [
      "А также здесь, в разделе Port ID, это идентификаторы интерфейсов на соседнем устройстве."
    ]
  },
  {
    "time": [
      1034.56,
      1041.06
    ],
    "en": [
      "So, FastEthernet5 on DSW1 is connected to FastEthernet5 on DSW2."
    ],
    "ru": [
      "Итак, FastEthernet5 на DSW1 подключен к FastEthernet5 на DSW2."
    ]
  },
  {
    "time": [
      1041.06,
      1047.65
    ],
    "en": [
      "FastEthernet6 on DSW1 is connected to FastEthernet6 on DSW2."
    ],
    "ru": [
      "FastEthernet6 на DSW1 подключен к FastEthernet6 на DSW2."
    ]
  },
  {
    "time": [
      1047.65,
      1052.07
    ],
    "en": [
      "Okay, so that's step 1. Next, step 2."
    ],
    "ru": [
      "Хорошо, это шаг 1. Далее, шаг 2."
    ]
  },
  {
    "time": [
      1052.07,
      1055.3
    ],
    "en": [
      "Next, step 2. Verify the line and protocol states of each interface."
    ],
    "ru": [
      "Затем, шаг 2. Проверьте состояние линии и протокола каждого интерфейса."
    ]
  },
  {
    "time": [
      1055.3,
      1059.91
    ],
    "en": [
      "This is referring to those two end columns in the SHOW IP INTERFACE BRIEF command."
    ],
    "ru": [
      "Это относится к этим двум конечным столбцам в команде SHOW IP INTERFACE BRIEF."
    ]
  },
  {
    "time": [
      1059.91,
      1063.61
    ],
    "en": [
      "SHOW IP INTERFACE BRIEF."
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА."
    ]
  },
  {
    "time": [
      1063.61,
      1066.12
    ],
    "en": [
      "Here, Status and Protocol."
    ],
    "ru": [
      "Здесь статус и протокол."
    ]
  },
  {
    "time": [
      1066.12,
      1070.8
    ],
    "en": [
      "So, they are up and up, no problems."
    ],
    "ru": [
      "Итак, они на подъеме, никаких проблем."
    ]
  },
  {
    "time": [
      1070.8,
      1073.43
    ],
    "en": [
      "Observe the trunk state of each port."
    ],
    "ru": [
      "Наблюдайте за состоянием магистрали каждого порта."
    ]
  },
  {
    "time": [
      1073.43,
      1081.68
    ],
    "en": [
      "Okay, SHOW INTERFACES TRUNK."
    ],
    "ru": [
      "Хорошо, ПОКАЗАТЬ ИНТЕРФЕЙСЫ БАГАЖНИК."
    ]
  },
  {
    "time": [
      1081.68,
      1085.64
    ],
    "en": [
      "So, FastEthernet5 and 6 are both 'desirable'."
    ],
    "ru": [
      "Итак, FastEthernet5 и 6 «желательны»."
    ]
  },
  {
    "time": [
      1085.64,
      1089.77
    ],
    "en": [
      "They are using ISL. Interesting, not dot1q."
    ],
    "ru": [
      "Они используют ISL. Интересно, не dot1q."
    ]
  },
  {
    "time": [
      1089.77,
      1092.67
    ],
    "en": [
      "Interesting, not dot1q. But they are trunking."
    ],
    "ru": [
      "Интересно, не dot1q. Но они транкинговые."
    ]
  },
  {
    "time": [
      1092.67,
      1094.45
    ],
    "en": [
      "Looks like all VLANs are allowed."
    ],
    "ru": [
      "Похоже, разрешены все VLAN."
    ]
  },
  {
    "time": [
      1094.45,
      1099.53
    ],
    "en": [
      "Default...only VLAN 1 exists by default."
    ],
    "ru": [
      "По умолчанию ... по умолчанию существует только VLAN 1."
    ]
  },
  {
    "time": [
      1099.53,
      1105.59
    ],
    "en": [
      "And, yeah, looks generally default except that ISL encapsulation."
    ],
    "ru": [
      "И да, в целом выглядит по умолчанию, за исключением инкапсуляции ISL."
    ]
  },
  {
    "time": [
      1105.59,
      1110.4
    ],
    "en": [
      "Because it's desirable, it's using DTP, so I guess the encapsulation was also automatically"
    ],
    "ru": [
      "Поскольку это желательно, он использует DTP, поэтому я предполагаю, что инкапсуляция также была автоматически"
    ]
  },
  {
    "time": [
      1110.4,
      1112.79
    ],
    "en": [
      "negotiated to be ISL."
    ],
    "ru": [
      "договорились, чтобы быть ISL."
    ]
  },
  {
    "time": [
      1112.79,
      1118.47
    ],
    "en": [
      "Let's check that out on DSW2 also. SHOW INTERFACES TRUNK."
    ],
    "ru": [
      "Давайте проверим это и на DSW2. ПОКАЗАТЬ ИНТЕРФЕЙСЫ БАГАЖНИК."
    ]
  },
  {
    "time": [
      1118.47,
      1125.42
    ],
    "en": [
      "SHOW INTERFACES TRUNK. Same, it is also using ISL for FastEthernet5 and 6."
    ],
    "ru": [
      "ПОКАЗАТЬ ИНТЕРФЕЙСЫ БАГАЖНИК. То же самое, он также использует ISL для FastEthernet5 и 6."
    ]
  },
  {
    "time": [
      1125.42,
      1131.45
    ],
    "en": [
      "Okay, switchports configured to be a member of a channel-group must be configured the"
    ],
    "ru": [
      "Хорошо, коммутаторы, настроенные как член группы каналов, должны быть настроены как"
    ]
  },
  {
    "time": [
      1131.45,
      1135.06
    ],
    "en": [
      "same way in order for the port-channel to operate correctly."
    ],
    "ru": [
      "таким же образом для правильной работы порта-канала."
    ]
  },
  {
    "time": [
      1135.06,
      1137.73
    ],
    "en": [
      "Verify that the interfaces are configured correctly."
    ],
    "ru": [
      "Убедитесь, что интерфейсы настроены правильно."
    ]
  },
  {
    "time": [
      1137.73,
      1139.67
    ],
    "en": [
      "Okay I'll go back to DSW1."
    ],
    "ru": [
      "Хорошо, я вернусь к DSW1."
    ]
  },
  {
    "time": [
      1139.67,
      1142.05
    ],
    "en": [
      "Let's just check SHOW RUNNING-CONFIG."
    ],
    "ru": [
      "Давайте просто проверим SHOW RUNNING-CONFIG."
    ]
  },
  {
    "time": [
      1142.05,
      1150.74
    ],
    "en": [
      "Okay, there is no configuration on FastEthernet5 and 6. How about DSW2?"
    ],
    "ru": [
      "Хорошо, на FastEthernet5 и 6 нет конфигурации. Как насчет DSW2?"
    ]
  },
  {
    "time": [
      1150.74,
      1153.16
    ],
    "en": [
      "How about DSW2? SHOW RUNNING-CONFIG."
    ],
    "ru": [
      "Как насчет DSW2? ПОКАЗАТЬ РАБОЧУЮ-КОНФИГУРАЦИЮ."
    ]
  },
  {
    "time": [
      1153.16,
      1156.0
    ],
    "en": [
      "Same here, so that should be no problem."
    ],
    "ru": [
      "То же самое и здесь, так что это не должно быть проблемой."
    ]
  },
  {
    "time": [
      1156.0,
      1162.54
    ],
    "en": [
      "Okay, step 5, what command can you issue to configure an interface to be a member of a port-channel group?"
    ],
    "ru": [
      "Хорошо, шаг 5, какую команду вы можете выполнить, чтобы настроить интерфейс как член группы порт-канал?"
    ]
  },
  {
    "time": [
      1162.54,
      1168.97
    ],
    "en": [
      "port-channel group? That is this command, I'm not actually going to configure it, but it's the CHANNEL-GROUP command."
    ],
    "ru": [
      "группа порт-канал? Это команда, я не собираюсь ее настраивать, но это команда CHANNEL-GROUP."
    ]
  },
  {
    "time": [
      1168.97,
      1175.36
    ],
    "en": [
      "command. CHANNEL-GROUP 1 MODE, and then either active or passive, for LACP, desirable or auto, for"
    ],
    "ru": [
      "команда. РЕЖИМ ГРУППЫ КАНАЛОВ 1, а затем либо активный, либо пассивный, для LACP, желательный или автоматический, для"
    ]
  },
  {
    "time": [
      1175.36,
      1179.63
    ],
    "en": [
      "PAgP, or on for static EtherChannel."
    ],
    "ru": [
      "PAgP, или on для статического EtherChannel."
    ]
  },
  {
    "time": [
      1179.63,
      1183.97
    ],
    "en": [
      "Okay, observe spanning-tree output for VLAN 1."
    ],
    "ru": [
      "Хорошо, посмотрите на вывод связующего дерева для VLAN 1."
    ]
  },
  {
    "time": [
      1183.97,
      1189.82
    ],
    "en": [
      "Okay, let's do that first on DSW1. SHOW SPANNING-TREE."
    ],
    "ru": [
      "Хорошо, давайте сначала сделаем это на DSW1. ПОКАЗАТЬ ДЕРЕВО."
    ]
  },
  {
    "time": [
      1189.82,
      1195.5
    ],
    "en": [
      "SHOW SPANNING-TREE. I think only VLAN 1 exists, so we could just do SHOW SPANNING-TREE, but let's filter it anyway."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕРЕВО. Я думаю, что существует только VLAN 1, поэтому мы могли бы просто сделать SHOW SPANNING-TREE, но давайте все равно его отфильтруем."
    ]
  },
  {
    "time": [
      1195.5,
      1200.1
    ],
    "en": [
      "anyway. Oh, so DSW1 looks like it is the root port (*bridge)."
    ],
    "ru": [
      "в любом случае. О, так DSW1 выглядит как корневой порт (* мост)."
    ]
  },
  {
    "time": [
      1200.1,
      1203.53
    ],
    "en": [
      "All interfaces have a designated role."
    ],
    "ru": [
      "У всех интерфейсов есть назначенная роль."
    ]
  },
  {
    "time": [
      1203.53,
      1208.61
    ],
    "en": [
      "And it says that here, 'this bridge is the root'. How about DSW2?"
    ],
    "ru": [
      "И здесь сказано, что «этот мост - корень». Как насчет DSW2?"
    ]
  },
  {
    "time": [
      1208.61,
      1212.65
    ],
    "en": [
      "How about DSW2? Okay first, spanning-tree quiz."
    ],
    "ru": [
      "Как насчет DSW2? Хорошо, во-первых, викторина по остовному дереву."
    ]
  },
  {
    "time": [
      1212.65,
      1215.83
    ],
    "en": [
      "Which of DSW2's ports will be the root port?"
    ],
    "ru": [
      "Какой из портов DSW2 будет корневым портом?"
    ]
  },
  {
    "time": [
      1215.83,
      1218.31
    ],
    "en": [
      "FastEthernet 5 or 6?"
    ],
    "ru": [
      "FastEthernet 5 или 6?"
    ]
  },
  {
    "time": [
      1218.31,
      1222.73
    ],
    "en": [
      "So, they both have the same root cost, 19, they're both directly connected here with"
    ],
    "ru": [
      "Итак, они оба имеют одинаковую корневую стоимость, 19, они оба напрямую связаны с"
    ]
  },
  {
    "time": [
      1222.73,
      1225.4
    ],
    "en": [
      "a cost of 19."
    ],
    "ru": [
      "стоимость 19."
    ]
  },
  {
    "time": [
      1225.4,
      1231.01
    ],
    "en": [
      "The neighboring switch ID is the same, they're both connected to DSW1."
    ],
    "ru": [
      "Идентификатор соседнего коммутатора одинаковый, они оба подключены к DSW1."
    ]
  },
  {
    "time": [
      1231.01,
      1235.15
    ],
    "en": [
      "So the last tie-breaker is the neighboring switch's port ID, the lower port ID."
    ],
    "ru": [
      "Таким образом, последним решающим фактором является идентификатор порта соседнего коммутатора, идентификатор нижнего порта."
    ]
  },
  {
    "time": [
      1235.15,
      1236.89
    ],
    "en": [
      "So that is FastEthernet5 here."
    ],
    "ru": [
      "Итак, это FastEthernet5."
    ]
  },
  {
    "time": [
      1236.89,
      1241.41
    ],
    "en": [
      "So, I think DSW2's FastEthernet5 should be the root port."
    ],
    "ru": [
      "Итак, я думаю, что DSW2 FastEthernet5 должен быть корневым портом."
    ]
  },
  {
    "time": [
      1241.41,
      1244.06
    ],
    "en": [
      "Let's see if I am correct."
    ],
    "ru": [
      "Посмотрим, прав ли я."
    ]
  },
  {
    "time": [
      1244.06,
      1246.84
    ],
    "en": [
      "SHOW SPANNING-TREE VLAN 1."
    ],
    "ru": [
      "ПОКАЗАТЬ SPANNING-TREE VLAN 1."
    ]
  },
  {
    "time": [
      1246.84,
      1255.77
    ],
    "en": [
      "And I was correct, there we go. Okay, next, 7."
    ],
    "ru": [
      "И я был прав, поехали. Хорошо, дальше, 7."
    ]
  },
  {
    "time": [
      1255.77,
      1261.2
    ],
    "en": [
      "Okay, next, 7. In this lab, how much bandwidth is available through the two links between DSW1 and DSW2?"
    ],
    "ru": [
      "Хорошо, следующий, 7. В этой лабораторной работе какая полоса пропускания доступна через два канала между DSW1 и DSW2?"
    ]
  },
  {
    "time": [
      1261.2,
      1268.03
    ],
    "en": [
      "So, it's FastEthernet, so it should be 200 megabits per second."
    ],
    "ru": [
      "Итак, это FastEthernet, поэтому он должен быть 200 мегабит в секунду."
    ]
  },
  {
    "time": [
      1268.03,
      1277.51
    ],
    "en": [
      "SHOW INTERFACE F0/5, has here...that is 100,000 kilobits."
    ],
    "ru": [
      "ИНТЕРФЕЙС SHOW F0 / 5, здесь ... это 100 000 килобит."
    ]
  },
  {
    "time": [
      1277.51,
      1280.99
    ],
    "en": [
      "So that's 100 megabits."
    ],
    "ru": [
      "Итак, это 100 мегабит."
    ]
  },
  {
    "time": [
      1280.99,
      1287.94
    ],
    "en": [
      "And FastEthernet0/6 should be the same. Yeah, 100,000 kilobits."
    ],
    "ru": [
      "И FastEthernet0 / 6 должен быть таким же. Ага, 100000 килобит."
    ]
  },
  {
    "time": [
      1287.94,
      1293.25
    ],
    "en": [
      "Yeah, 100,000 kilobits. Okay, so when you combine those two together, the virtual port-channel interface should"
    ],
    "ru": [
      "Ага, 100000 килобит. Итак, когда вы объедините эти два вместе, интерфейс виртуального порта-канала должен"
    ]
  },
  {
    "time": [
      1293.25,
      1300.17
    ],
    "en": [
      "have a bandwidth of 200,000 kilobits, 200 megabytes, or megabits."
    ],
    "ru": [
      "иметь пропускную способность 200 000 килобит, 200 мегабайт или мегабит."
    ]
  },
  {
    "time": [
      1300.17,
      1302.81
    ],
    "en": [
      "Okay, so that was step 7."
    ],
    "ru": [
      "Хорошо, это был шаг 7."
    ]
  },
  {
    "time": [
      1302.81,
      1309.86
    ],
    "en": [
      "Step 8, why is the full amount of bandwidth not available on the link between FastEthernet5 and 6?"
    ],
    "ru": [
      "Шаг 8, почему на канале между FastEthernet5 и 6 не доступна полная пропускная способность?"
    ]
  },
  {
    "time": [
      1309.86,
      1310.58
    ],
    "en": [
      "and 6? Why is that?"
    ],
    "ru": [
      "и 6? Это почему?"
    ]
  },
  {
    "time": [
      1310.58,
      1316.33
    ],
    "en": [
      "Well, that's because FastEthernet6 is blocking because of spanning-tree."
    ],
    "ru": [
      "Это потому, что FastEthernet6 блокируется из-за связующего дерева."
    ]
  },
  {
    "time": [
      1316.33,
      1320.84
    ],
    "en": [
      "How does EtherChannel increase the amount of available...the amount of available bandwidth"
    ],
    "ru": [
      "Как EtherChannel увеличивает количество доступной ... количества доступной полосы пропускания"
    ]
  },
  {
    "time": [
      1320.84,
      1323.44
    ],
    "en": [
      "between DSW1 and DSW2?"
    ],
    "ru": [
      "между DSW1 и DSW2?"
    ]
  },
  {
    "time": [
      1323.44,
      1326.58
    ],
    "en": [
      "Because it combines them to form a single logical interface."
    ],
    "ru": [
      "Потому что он объединяет их в единый логический интерфейс."
    ]
  },
  {
    "time": [
      1326.58,
      1329.48
    ],
    "en": [
      "I just showed you that in the lecture video."
    ],
    "ru": [
      "Я только что показал вам это в видео лекции."
    ]
  },
  {
    "time": [
      1329.48,
      1335.43
    ],
    "en": [
      "So, number 10, how many switchports can be configured to be a member of a port-channel group?"
    ],
    "ru": [
      "Итак, номер 10, сколько портов коммутатора можно настроить для включения в группу порт-канал?"
    ]
  },
  {
    "time": [
      1335.43,
      1342.82
    ],
    "en": [
      "group? So, up to 8 can be active at any one time, but if you use LACP actually 16 can be configured,"
    ],
    "ru": [
      "группа? Таким образом, до 8 могут быть активными одновременно, но если вы используете LACP, на самом деле можно настроить 16,"
    ]
  },
  {
    "time": [
      1342.82,
      1348.4
    ],
    "en": [
      "but only up to 8 will be active and then the remaining, up to 8, will be standby ports,"
    ],
    "ru": [
      "но только до 8 будут активными, а оставшиеся до 8 будут резервными портами,"
    ]
  },
  {
    "time": [
      1348.4,
      1351.68
    ],
    "en": [
      "ready to take over if one of the active ports fails."
    ],
    "ru": [
      "готов к работе в случае отказа одного из активных портов."
    ]
  },
  {
    "time": [
      1351.68,
      1354.13
    ],
    "en": [
      "Okay, so there's task 1."
    ],
    "ru": [
      "Итак, есть задача 1."
    ]
  },
  {
    "time": [
      1354.13,
      1357.74
    ],
    "en": [
      "Just take a quick look at task 2, what kind of things you do."
    ],
    "ru": [
      "Просто взгляните на задачу 2, что вы делаете."
    ]
  },
  {
    "time": [
      1357.74,
      1364.09
    ],
    "en": [
      "Determine the number of links that can be configured as part of the port-channel group."
    ],
    "ru": [
      "Определите количество ссылок, которые можно настроить как часть группы порт-канал."
    ]
  },
  {
    "time": [
      1364.09,
      1370.02
    ],
    "en": [
      "Here we go, configure the interfaces as members of channel-group 1 using 'on' mode."
    ],
    "ru": [
      "Итак, настройте интерфейсы как члены группы каналов 1, используя режим «on»."
    ]
  },
  {
    "time": [
      1370.02,
      1376.26
    ],
    "en": [
      "Verify that an active trunk link exists on the port-channel 1 interface of DSW1 and DSW2."
    ],
    "ru": [
      "Убедитесь, что на интерфейсе порт-канал 1 DSW1 и DSW2 существует активная магистральная линия."
    ]
  },
  {
    "time": [
      1376.26,
      1377.62
    ],
    "en": [
      "Verify the correct amount of bandwidth."
    ],
    "ru": [
      "Проверьте правильность пропускной способности."
    ]
  },
  {
    "time": [
      1377.62,
      1383.1
    ],
    "en": [
      "As I said, 200 megabits per second is available between DSW1 and DSW2."
    ],
    "ru": [
      "Как я уже сказал, между DSW1 и DSW2 доступно 200 мегабит в секунду."
    ]
  },
  {
    "time": [
      1383.1,
      1385.38
    ],
    "en": [
      "And then finally, verify your EtherChannel configuration."
    ],
    "ru": [
      "И, наконец, проверьте конфигурацию EtherChannel."
    ]
  },
  {
    "time": [
      1385.38,
      1389.68
    ],
    "en": [
      "So, if you ever have any trouble you can check the lab solutions down here."
    ],
    "ru": [
      "Так что, если у вас возникнут какие-либо проблемы, вы можете проверить лабораторные решения здесь."
    ]
  },
  {
    "time": [
      1389.68,
      1394.9
    ],
    "en": [
      "As you can see it is quite lengthy and detailed, and gives quite a lot of good information."
    ],
    "ru": [
      "Как видите, он довольно длинный и подробный и дает довольно много полезной информации."
    ]
  },
  {
    "time": [
      1394.9,
      1396.49
    ],
    "en": [
      "It's another great study resource."
    ],
    "ru": [
      "Это еще один отличный учебный ресурс."
    ]
  },
  {
    "time": [
      1396.49,
      1402.82
    ],
    "en": [
      "Even if you don't have any trouble, I recommend reading through here after you finish the lab."
    ],
    "ru": [
      "Даже если у вас нет никаких проблем, я рекомендую прочитать здесь после того, как вы закончите лабораторную работу."
    ]
  },
  {
    "time": [
      1402.82,
      1408.67
    ],
    "en": [
      "lab. Okay, and you can also grade the lab by clicking up here."
    ],
    "ru": [
      "лаборатория. Хорошо, и вы также можете оценить лабораторию, нажав здесь."
    ]
  },
  {
    "time": [
      1408.67,
      1415.01
    ],
    "en": [
      "Now, I of course didn't finish the lab, so it says here: you missed one or more commands in the lab."
    ],
    "ru": [
      "Я, конечно, не закончил лабораторную работу, поэтому здесь говорится: вы пропустили одну или несколько команд в лаборатории."
    ]
  },
  {
    "time": [
      1415.01,
      1419.0
    ],
    "en": [
      "in the lab. But if you check the device configurations it'll show you which commands you missed."
    ],
    "ru": [
      "в лаборатории. Но если вы проверите конфигурации устройства, он покажет вам, какие команды вы пропустили."
    ]
  },
  {
    "time": [
      1419.0,
      1424.15
    ],
    "en": [
      "If you put in some extra commands that you don't need they will be highlighted in blue."
    ],
    "ru": [
      "Если вы введете дополнительные команды, которые вам не нужны, они будут выделены синим цветом."
    ]
  },
  {
    "time": [
      1424.15,
      1426.02
    ],
    "en": [
      "And it grades the lab for you."
    ],
    "ru": [
      "И он оценивает лабораторию за вас."
    ]
  },
  {
    "time": [
      1426.02,
      1430.78
    ],
    "en": [
      "So, I think Boson NetSim for CCNA is a great study resource."
    ],
    "ru": [
      "Итак, я думаю, что Boson NetSim for CCNA - отличный учебный ресурс."
    ]
  },
  {
    "time": [
      1430.78,
      1435.6
    ],
    "en": [
      "It's got a huge catalogue of in-depth labs to help you practice your skills and really test your knowledge."
    ],
    "ru": [
      "В нем есть огромный каталог углубленных лабораторий, которые помогут вам попрактиковаться в своих навыках и действительно проверить свои знания."
    ]
  },
  {
    "time": [
      1435.6,
      1443.22
    ],
    "en": [
      "test your knowledge. If you want to get a copy of Boson NetSim, please follow the link in the video description."
    ],
    "ru": [
      "проверьте свои знания. Если вы хотите получить копию Boson NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1443.22,
      1448.19
    ],
    "en": [
      "Before closing out the video, I want to take a minute to thank my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закрыть видео, я хочу уделить минуту, чтобы поблагодарить участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      1448.19,
      1454.38
    ],
    "en": [
      "Thank you to funnydart, Joshua, Scott, Aleksa, Hassan, Gerrard, tibi, Vikram, Joyce, Marek,"
    ],
    "ru": [
      "Спасибо funnydart, Джошуа, Скотту, Алексе, Хасану, Джеррарду, Тиби, Викраму, Джойсу, Мареку,"
    ]
  },
  {
    "time": [
      1454.38,
      1461.74
    ],
    "en": [
      "Samil, velvijaykum, C Mohd, Johan, Mark, Miguel, Yousif, kone, Boson, Sidi, Magrathea, Devin,"
    ],
    "ru": [
      "Самил, Велвиджайкум, Ч. Мохд, Йохан, Марк, Мигель, Юсиф, Коне, Бозон, Сиди, Магратея, Девин,"
    ]
  },
  {
    "time": [
      1461.74,
      1466.059
    ],
    "en": [
      "Charlsetta, Lito, Yonatan, Mike, Aleksander, and Vance."
    ],
    "ru": [
      "Шарлсетта, Лито, Йонатан, Майк, Александр и Вэнс."
    ]
  },
  {
    "time": [
      1466.059,
      1471.2
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
      1471.2,
      1474.17
    ],
    "en": [
      "One of you is still displaying as 'channel failed to load'."
    ],
    "ru": [
      "Один из вас по-прежнему отображает сообщение «Не удалось загрузить канал»."
    ]
  },
  {
    "time": [
      1474.17,
      1477.6
    ],
    "en": [
      "If this is you, please let me know and I'll see if YouTube can fix it."
    ],
    "ru": [
      "Если это вы, дайте мне знать, и я посмотрю, сможет ли YouTube это исправить."
    ]
  },
  {
    "time": [
      1477.6,
      1481.45
    ],
    "en": [
      "Thank you once again for your support."
    ],
    "ru": [
      "Еще раз спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1481.45,
      1483.01
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
      1483.01,
      1486.93
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
      1486.93,
      1490.26
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
      1490.26,
      1492.85
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
      1492.85,
      1500.6
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
      1500.6,
      1500.6
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]