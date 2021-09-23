let objs = [
  {
    "time": [
      1.41,
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
      12.36
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
      12.36,
      18.87
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
      18.87,
      24.33
    ],
    "en": [
      "help. In this video we will cover Syslog. Syslog is a protocol used to keep logs of various"
    ],
    "ru": [
      "помощь. В этом видео мы рассмотрим системный журнал. Системный журнал - это протокол, используемый для ведения журналов различных"
    ]
  },
  {
    "time": [
      24.33,
      30.13
    ],
    "en": [
      "events that happen on the device, for example interfaces going up or down, OSPF neighbor"
    ],
    "ru": [
      "события, которые происходят на устройстве, например, интерфейсы работают или отключаются, сосед OSPF"
    ]
  },
  {
    "time": [
      30.13,
      36.03
    ],
    "en": [
      "relationships going up or down, etc. The log messages can be shown in real-time in the"
    ],
    "ru": [
      "отношения повышаются или понижаются и т. д. Сообщения журнала могут отображаться в режиме реального времени в"
    ]
  },
  {
    "time": [
      36.03,
      40.96
    ],
    "en": [
      "CLI of the device to inform you of important events as they occur, and they can also be"
    ],
    "ru": [
      "CLI устройства, чтобы информировать вас о важных событиях по мере их возникновения, и они также могут быть"
    ]
  },
  {
    "time": [
      40.96,
      47.539
    ],
    "en": [
      "stored in the device or on an external server and examined later. These logs are very important,"
    ],
    "ru": [
      "хранится в устройстве или на внешнем сервере и исследуется позже. Эти журналы очень важны,"
    ]
  },
  {
    "time": [
      47.539,
      53.739
    ],
    "en": [
      "so understanding Syslog is essential for network admins and engineers. Syslog is mentioned"
    ],
    "ru": [
      "поэтому понимание системного журнала важно для сетевых администраторов и инженеров. Системный журнал упоминается"
    ]
  },
  {
    "time": [
      53.739,
      59.379
    ],
    "en": [
      "in exam topic 4.5, which says you must be able to describe the use of syslog features"
    ],
    "ru": [
      "в теме экзамена 4.5, в которой говорится, что вы должны быть в состоянии описать использование функций системного журнала"
    ]
  },
  {
    "time": [
      59.379,
      64.489
    ],
    "en": [
      "including facilities and levels. In this video I plan to cover everything you need to know"
    ],
    "ru": [
      "включая помещения и уровни. В этом видео я планирую рассказать все, что вам нужно знать"
    ]
  },
  {
    "time": [
      64.489,
      66.86
    ],
    "en": [
      "about Syslog for the CCNA."
    ],
    "ru": [
      "о системном журнале для CCNA."
    ]
  },
  {
    "time": [
      66.86,
      72.311
    ],
    "en": [
      "Here’s what we’ll cover in this video. First I’ll give a brief overview of Syslog"
    ],
    "ru": [
      "Вот что мы расскажем в этом видео. Сначала я дам краткий обзор системного журнала."
    ]
  },
  {
    "time": [
      72.311,
      78.25
    ],
    "en": [
      "and outline how it works. Then I’ll introduce the Syslog message format. Syslog messages"
    ],
    "ru": [
      "и опишите, как это работает. Затем я расскажу о формате сообщения системного журнала. Сообщения системного журнала"
    ]
  },
  {
    "time": [
      78.25,
      82.68
    ],
    "en": [
      "have a standard format, and it’s important that you know the format so you can read and"
    ],
    "ru": [
      "иметь стандартный формат, и важно, чтобы вы знали его, чтобы вы могли читать и"
    ]
  },
  {
    "time": [
      82.68,
      88.85
    ],
    "en": [
      "understand Syslog messages. Then I’ll introduce the various Syslog facilities and severity"
    ],
    "ru": [
      "понимать сообщения системного журнала. Затем я расскажу о различных возможностях системного журнала и степени серьезности"
    ]
  },
  {
    "time": [
      88.85,
      93.8
    ],
    "en": [
      "levels. You probably aren’t sure exactly what ‘facility’ and ‘severity’ mean"
    ],
    "ru": [
      "уровни. Вы, вероятно, не совсем понимаете, что означают \"легкость\" и \"серьезность\"."
    ]
  },
  {
    "time": [
      93.8,
      97.82
    ],
    "en": [
      "yet, but they were both mentioned in the exam topics list so we’ll cover them in this"
    ],
    "ru": [
      "еще, но они оба были упомянуты в списке тем экзамена, поэтому мы рассмотрим их в этом"
    ]
  },
  {
    "time": [
      97.82,
      105.78999999999999
    ],
    "en": [
      "video. Then I’ll introduce some basic Syslog configurations. Just like SNMP, Syslog configuration"
    ],
    "ru": [
      "видео. Затем я расскажу о некоторых основных конфигурациях системного журнала. Как и в случае с SNMP, конфигурация системного журнала"
    ]
  },
  {
    "time": [
      105.78999999999999,
      109.81
    ],
    "en": [
      "isn’t mentioned in the exam topics, but I think it’s important to get some hands-on"
    ],
    "ru": [
      "не упоминается в темах экзамена, но я думаю, что важно получить практические"
    ]
  },
  {
    "time": [
      109.81,
      116.36
    ],
    "en": [
      "practice. So, I’ll go over the basic Syslog configuration commands. Make sure to watch"
    ],
    "ru": [
      "упражняться. Итак, я рассмотрю основные команды настройки системного журнала. Обязательно посмотрите"
    ]
  },
  {
    "time": [
      116.36,
      120.99
    ],
    "en": [
      "until the end of the video for a bonus practice question from Boson Software’s ExSim for"
    ],
    "ru": [
      "до конца видео с вопросом о бонусной практике от ExSim компании Boson Software для"
    ]
  },
  {
    "time": [
      120.99,
      125.62
    ],
    "en": [
      "CCNA, the best practice exams for the CCNA."
    ],
    "ru": [
      "CCNA, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      125.62,
      131.71
    ],
    "en": [
      "Here’s a quick overview of Syslog. Syslog is an industry standard protocol for message"
    ],
    "ru": [
      "Вот краткий обзор системного журнала. Системный журнал - это стандартный протокол для сообщений"
    ]
  },
  {
    "time": [
      131.71,
      137.71
    ],
    "en": [
      "logging. On network devices, Syslog can be used to log events such as changes in interface"
    ],
    "ru": [
      "протоколирование. На сетевых устройствах Syslog может использоваться для регистрации таких событий, как изменения в интерфейсе."
    ]
  },
  {
    "time": [
      137.71,
      142.84
    ],
    "en": [
      "status, changes in OSPF neighbor status, or neighbor status in other routing protocols"
    ],
    "ru": [
      "статус, изменения в статусе соседа OSPF или статус соседа в других протоколах маршрутизации"
    ]
  },
  {
    "time": [
      142.84,
      150.1
    ],
    "en": [
      "like EIGRP and BGP, also system restarts, etc. Tons of different events can be logged,"
    ],
    "ru": [
      "например, EIGRP и BGP, а также перезапуски системы и т. д. Могут регистрироваться тонны различных событий,"
    ]
  },
  {
    "time": [
      150.1,
      154.85
    ],
    "en": [
      "so I’m not going to try to list them all. The messages can be displayed in the CLI as"
    ],
    "ru": [
      "поэтому я не буду пытаться перечислять их все. Сообщения могут отображаться в интерфейсе командной строки как"
    ]
  },
  {
    "time": [
      154.85,
      160.9
    ],
    "en": [
      "you configure the device, saved in the device’s RAM, or sent to an external Syslog server."
    ],
    "ru": [
      "вы настраиваете устройство, сохраняете в оперативной памяти устройства или отправляете на внешний сервер системного журнала."
    ]
  },
  {
    "time": [
      160.9,
      166.01
    ],
    "en": [
      "I’m sure you’ve seen these messages as you configure devices in Packet Tracer. For"
    ],
    "ru": [
      "Я уверен, что вы видели эти сообщения при настройке устройств в Packet Tracer. Для"
    ]
  },
  {
    "time": [
      166.01,
      172.07
    ],
    "en": [
      "example, I used NO SHUTDOWN to enable a router interface. Notice that two Syslog messages"
    ],
    "ru": [
      "Например, я использовал NO SHUTDOWN для включения интерфейса маршрутизатора. Обратите внимание, что два сообщения системного журнала"
    ]
  },
  {
    "time": [
      172.07,
      178.04
    ],
    "en": [
      "are displayed, indicating that the interface state has changed to UP. Logs are essential"
    ],
    "ru": [
      "отображаются, указывая на то, что состояние интерфейса изменилось на UP. Журналы необходимы"
    ]
  },
  {
    "time": [
      178.04,
      184.42
    ],
    "en": [
      "when troubleshooting issues, examining the cause of incidents, etc. Syslog and SNMP are"
    ],
    "ru": [
      "при устранении неполадок, изучении причин инцидентов и т. д. Syslog и SNMP"
    ]
  },
  {
    "time": [
      184.42,
      190.1
    ],
    "en": [
      "both used for monitoring and troubleshooting devices. They are complementary to each other,"
    ],
    "ru": [
      "оба используются для мониторинга и устранения неполадок устройств. Они дополняют друг друга,"
    ]
  },
  {
    "time": [
      190.1,
      194.98
    ],
    "en": [
      "but their functionalities are quite different. After covering Syslog in this video, I’ll"
    ],
    "ru": [
      "но их функции совершенно разные. Рассказав о системном журнале в этом видео, я"
    ]
  },
  {
    "time": [
      194.98,
      200.92000000000002
    ],
    "en": [
      "give a brief summary of how Syslog and SNMP are different at the end."
    ],
    "ru": [
      "дайте краткое описание различий системного журнала и SNMP в конце."
    ]
  },
  {
    "time": [
      200.92000000000002,
      205.48
    ],
    "en": [
      "Now let’s take a look at the Syslog message format. There are the fields you can expect"
    ],
    "ru": [
      "Теперь давайте посмотрим на формат сообщения системного журнала. Есть поля, которые вы можете ожидать"
    ]
  },
  {
    "time": [
      205.48,
      211.07999999999998
    ],
    "en": [
      "to see in a standard Syslog message. Let’s go through them. First, there is a sequence"
    ],
    "ru": [
      "чтобы увидеть в стандартном сообщении системного журнала. Давайте пройдемся по ним. Во-первых, это последовательность"
    ]
  },
  {
    "time": [
      211.07999999999998,
      216.72
    ],
    "en": [
      "number indicating the order, the sequence, of the log messages. Next there is a timestamp"
    ],
    "ru": [
      "число, указывающее порядок, последовательность сообщений журнала. Далее идет отметка времени"
    ]
  },
  {
    "time": [
      216.72,
      222.66
    ],
    "en": [
      "indicating at what time the message was generated. These timestamps are particularly important,"
    ],
    "ru": [
      "указание, в какое время было сгенерировано сообщение. Эти временные метки особенно важны,"
    ]
  },
  {
    "time": [
      222.66,
      227.709
    ],
    "en": [
      "especially when comparing the logs of different devices. Assuming both devices have accurate"
    ],
    "ru": [
      "особенно при сравнении логов разных устройств. Предполагая, что оба устройства имеют точные"
    ]
  },
  {
    "time": [
      227.709,
      232.48
    ],
    "en": [
      "time thanks to NTP, you can use these timestamps to compare when different events occurred"
    ],
    "ru": [
      "время благодаря NTP, вы можете использовать эти временные метки для сравнения, когда произошли разные события"
    ]
  },
  {
    "time": [
      232.48,
      238.31900000000002
    ],
    "en": [
      "on different devices. Note that these two fields may or may not be displayed, depending"
    ],
    "ru": [
      "на разных устройствах. Обратите внимание, что эти два поля могут отображаться или не отображаться, в зависимости от"
    ]
  },
  {
    "time": [
      238.31900000000002,
      244.38
    ],
    "en": [
      "on the device’s configuration. Sequence numbers are often not used, however the timestamps"
    ],
    "ru": [
      "от конфигурации устройства. Порядковые номера часто не используются, однако временные метки"
    ]
  },
  {
    "time": [
      244.38,
      250.819
    ],
    "en": [
      "are very important and I highly recommend including them in Syslog messages. Next there"
    ],
    "ru": [
      "очень важны, и я настоятельно рекомендую включать их в сообщения системного журнала. Далее там"
    ]
  },
  {
    "time": [
      250.819,
      255.849
    ],
    "en": [
      "is the facility, this is a value that indicates which process on the device generated this"
    ],
    "ru": [
      "это средство, это значение, которое указывает, какой процесс на устройстве сгенерировал это"
    ]
  },
  {
    "time": [
      255.849,
      262.419
    ],
    "en": [
      "message. For example, if OSPF generated the message when an OSPF neighbor came up, OSPF"
    ],
    "ru": [
      "сообщение. Например, если OSPF сгенерировал сообщение, когда подошел сосед OSPF, OSPF"
    ]
  },
  {
    "time": [
      262.419,
      268.66
    ],
    "en": [
      "would be displayed in this field. Next is the severity, which indicates the severity"
    ],
    "ru": [
      "будет отображаться в этом поле. Далее идет серьезность, которая указывает на серьезность"
    ]
  },
  {
    "time": [
      268.66,
      275.74
    ],
    "en": [
      "of the event. Some messages are just informational, simply letting you know that something happened."
    ],
    "ru": [
      "события. Некоторые сообщения носят просто информационный характер, просто сообщая о том, что что-то произошло."
    ]
  },
  {
    "time": [
      275.74,
      281.23
    ],
    "en": [
      "Other messages indicate something much more serious that might need to be dealt with immediately."
    ],
    "ru": [
      "Другие сообщения указывают на что-то гораздо более серьезное, с чем, возможно, нужно немедленно разобраться."
    ]
  },
  {
    "time": [
      281.23,
      286.37
    ],
    "en": [
      "There are 8 severity levels, and you’ll need to know them all for the exam. Then there"
    ],
    "ru": [
      "Существует 8 уровней серьезности, и вам нужно знать их все для сдачи экзамена. То есть"
    ]
  },
  {
    "time": [
      286.37,
      291.49
    ],
    "en": [
      "is a mnemonic, which is a short code for the message that indicates what happened. For"
    ],
    "ru": [
      "- мнемоника, представляющая собой сокращенный код сообщения, указывающего на то, что произошло. Для"
    ]
  },
  {
    "time": [
      291.49,
      296.72
    ],
    "en": [
      "example, if the facility is OSPF, this mnemonic might be a code indicating that the message"
    ],
    "ru": [
      "Например, если это средство OSPF, эта мнемоника может быть кодом, указывающим, что сообщение"
    ]
  },
  {
    "time": [
      296.72,
      303.4
    ],
    "en": [
      "is about OSPF neighbor adjacencies. If the facility is LINK, it might be a code indicating"
    ],
    "ru": [
      "Речь идет о соседстве OSPF. Если объект LINK, это может быть код, указывающий"
    ]
  },
  {
    "time": [
      303.4,
      309.63
    ],
    "en": [
      "that the message is about an interface going up or down. Finally, there is the description."
    ],
    "ru": [
      "что сообщение о том, что интерфейс работает вверх или вниз. Наконец, есть описание."
    ]
  },
  {
    "time": [
      309.63,
      315.74
    ],
    "en": [
      "This is the detailed information about the event being reported, about what actually happened."
    ],
    "ru": [
      "Это подробная информация о сообщаемом событии, о том, что произошло на самом деле."
    ]
  },
  {
    "time": [
      315.74,
      319.63
    ],
    "en": [
      "happened. Before looking at some examples of Syslog messages, let’s cover the different Syslog"
    ],
    "ru": [
      "произошло. Прежде чем рассматривать несколько примеров сообщений системного журнала, давайте рассмотрим различные"
    ]
  },
  {
    "time": [
      319.63,
      325.49
    ],
    "en": [
      "severity levels. As I briefly mentioned, these levels indicate how serious, how severe, the"
    ],
    "ru": [
      "уровни серьезности. Как я вкратце упомянул, эти уровни показывают, насколько серьезны, насколько серьезны"
    ]
  },
  {
    "time": [
      325.49,
      331.28
    ],
    "en": [
      "event is. For example, something like a serious hardware failure is more severe than an OSPF"
    ],
    "ru": [
      "событие есть. Например, серьезный отказ оборудования более серьезен, чем OSPF."
    ]
  },
  {
    "time": [
      331.28,
      337.531
    ],
    "en": [
      "neighbor moving to the FULL state. There are 8 severity levels, as displayed here. Each"
    ],
    "ru": [
      "сосед переходит в состояние ПОЛНЫЙ. Как показано здесь, существует 8 уровней серьезности. Каждый"
    ]
  },
  {
    "time": [
      337.531,
      343.681
    ],
    "en": [
      "severity level has a number, 0 being the most severe and 7 being the least severe. Each"
    ],
    "ru": [
      "Уровень серьезности имеет номер, где 0 - наиболее серьезный, а 7 - наименее серьезный. Каждый"
    ]
  },
  {
    "time": [
      343.681,
      349.26
    ],
    "en": [
      "level also has a keyword, which is a name identifying the level. Then there is a brief"
    ],
    "ru": [
      "level также имеет ключевое слово, которое является именем, определяющим уровень. Тогда есть краткое"
    ]
  },
  {
    "time": [
      349.26,
      355.37
    ],
    "en": [
      "description. I took these descriptions directly from the official RFC for Syslog. First there"
    ],
    "ru": [
      "описание. Я взял эти описания прямо из официального RFC для Syslog. Сначала там"
    ]
  },
  {
    "time": [
      355.37,
      362.09
    ],
    "en": [
      "is level 0, emergency, events which render the system unusable. Level 1, alert, is for"
    ],
    "ru": [
      "уровень 0, аварийная ситуация, события, которые делают систему непригодной для использования. Уровень 1, оповещение, предназначен для"
    ]
  },
  {
    "time": [
      362.09,
      368.51
    ],
    "en": [
      "events for which action must be taken immediately. So, these are also very serious events. Level"
    ],
    "ru": [
      "события, в отношении которых необходимо немедленно принять меры. Так что это тоже очень серьезные события. Уровень"
    ]
  },
  {
    "time": [
      368.51,
      373.81
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
      368.51,
      373.81
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
      373.81,
      380.37
    ],
    "en": [
      "for level 3, error, and level 4, warning. Next is level 5, notice, used for messages"
    ],
    "ru": [
      "для уровня 3 - ошибка и уровня 4 - предупреждение. Далее идет уровень 5, уведомление, используется для сообщений."
    ]
  },
  {
    "time": [
      380.37,
      387.06
    ],
    "en": [
      "representing a ‘normal but significant condition’. In the official RFC for Syslog, the keyword"
    ],
    "ru": [
      "представляет собой «нормальное, но серьезное состояние». В официальном RFC для Syslog ключевое слово"
    ]
  },
  {
    "time": [
      387.06,
      393.15999999999997
    ],
    "en": [
      "for level 5 is ‘Notice’, but in the CLI of Cisco IOS the name is Notification, so"
    ],
    "ru": [
      "для уровня 5 - «Уведомление», но в интерфейсе командной строки Cisco IOS имя - «Уведомление», поэтому"
    ]
  },
  {
    "time": [
      393.15999999999997,
      400.52
    ],
    "en": [
      "make sure you know of both names. Notice and Notification for level 5. Level 6 is ‘Informational’,"
    ],
    "ru": [
      "убедитесь, что вы знаете оба имени. Уведомление и уведомление для уровня 5. Уровень 6 - «информационный»,"
    ]
  },
  {
    "time": [
      400.52,
      406.36
    ],
    "en": [
      "and then finally the least severe level, level 7, is Debugging. These are the least severe"
    ],
    "ru": [
      "и, наконец, наименее серьезный уровень, уровень 7, - это отладка. Это наименее серьезные"
    ]
  },
  {
    "time": [
      406.36,
      412.09000000000003
    ],
    "en": [
      "messages. Now, the RFC doesn’t give detailed definitions about exactly what events fit"
    ],
    "ru": [
      "Сообщения. В RFC нет подробных определений того, какие события подходят"
    ]
  },
  {
    "time": [
      412.09000000000003,
      417.99
    ],
    "en": [
      "into each severity level. So, each vendor will interpret these levels differently. Here’s"
    ],
    "ru": [
      "на каждый уровень серьезности. Таким образом, каждый производитель будет интерпретировать эти уровни по-разному. Вот"
    ]
  },
  {
    "time": [
      417.99,
      424.8
    ],
    "en": [
      "a quote from the RFC. Because severities are very subjective, a relay or collector (basically"
    ],
    "ru": [
      "цитата из RFC. Поскольку степень серьезности очень субъективна, реле или коллектор (в основном"
    ]
  },
  {
    "time": [
      424.8,
      429.64
    ],
    "en": [
      "that means a Syslog server) should not assume that all originators have the same definition"
    ],
    "ru": [
      "это означает, что сервер системного журнала) не должен предполагать, что все создатели имеют одинаковое определение"
    ]
  },
  {
    "time": [
      429.64,
      436.52
    ],
    "en": [
      "of severity. That’s from RFC 5424, The Syslog Protocol, which is free to read online if"
    ],
    "ru": [
      "серьезности. Это из RFC 5424, Протокол системного журнала, который можно бесплатно прочитать в Интернете, если"
    ]
  },
  {
    "time": [
      436.52,
      441.46
    ],
    "en": [
      "you Google it. Basically it means that you shouldn’t expect a Cisco router’s ‘Warning’"
    ],
    "ru": [
      "вы это погуглите. По сути, это означает, что вы не должны ожидать от маршрутизатора Cisco \"предупреждения\"."
    ]
  },
  {
    "time": [
      441.46,
      446.7
    ],
    "en": [
      "level to be exactly the same as a Juniper router’s ‘Warning’ level, for example."
    ],
    "ru": [
      "уровень должен быть таким же, как, например, уровень «Предупреждение» маршрутизатора Juniper."
    ]
  },
  {
    "time": [
      446.7,
      452.65
    ],
    "en": [
      "Each vendor may interpret each level differently. For the CCNA exam, make sure you have memorized"
    ],
    "ru": [
      "Каждый продавец может интерпретировать каждый уровень по-своему. Перед экзаменом CCNA убедитесь, что вы запомнили"
    ]
  },
  {
    "time": [
      452.65,
      458.57
    ],
    "en": [
      "the levels and keywords. You should know that level 1 is Alert, and Informational is level"
    ],
    "ru": [
      "уровни и ключевые слова. Вы должны знать, что уровень 1 - это предупреждение, а уровень информации - это уровень."
    ]
  },
  {
    "time": [
      458.57,
      464.83
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
      458.57,
      464.83
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
      464.83,
      470.71
    ],
    "en": [
      "Engineer Will Need Ice cream Daily. Just like the OSI model, if you know any other good"
    ],
    "ru": [
      "Инженеру понадобится мороженое ежедневно. Как и в модели OSI, если вы знаете что-нибудь еще"
    ]
  },
  {
    "time": [
      470.71,
      475.0
    ],
    "en": [
      "ways to remember these levels post them in the comment section!"
    ],
    "ru": [
      "способы запомнить эти уровни разместите их в разделе комментариев!"
    ]
  },
  {
    "time": [
      475.0,
      482.21
    ],
    "en": [
      "Let’s look at some examples of Syslog messages. Here’s one, first there’s the timestamp,"
    ],
    "ru": [
      "Давайте посмотрим на несколько примеров сообщений системного журнала. Вот один, сначала отметка времени,"
    ]
  },
  {
    "time": [
      482.21,
      488.199
    ],
    "en": [
      "indicating the month, date, hours, minutes, seconds, and milliseconds. Notice that there"
    ],
    "ru": [
      "с указанием месяца, числа, часов, минут, секунд и миллисекунд. Обратите внимание, что там"
    ]
  },
  {
    "time": [
      488.199,
      493.52
    ],
    "en": [
      "is no sequence number before the timestamp. As I mentioned earlier, the sequence number"
    ],
    "ru": [
      "не является порядковым номером перед меткой времени. Как я упоминал ранее, порядковый номер"
    ]
  },
  {
    "time": [
      493.52,
      499.13
    ],
    "en": [
      "and timestamp fields may or may not be displayed, depending on the device’s configuration."
    ],
    "ru": [
      "поля и отметки времени могут отображаться или не отображаться в зависимости от конфигурации устройства."
    ]
  },
  {
    "time": [
      499.13,
      506.27
    ],
    "en": [
      "Here’s the facility, LINK. And the severity is 3. The mnemonic is UPDOWN, which tells"
    ],
    "ru": [
      "Вот объект, LINK. Степень серьезности 3. Мнемоника UPDOWN, что говорит о том, что"
    ]
  },
  {
    "time": [
      506.27,
      511.71
    ],
    "en": [
      "us the message is about an interface going up or down. Finally, here’s the description,"
    ],
    "ru": [
      "нам сообщение о том, что интерфейс работает вверх или вниз. Наконец, вот описание,"
    ]
  },
  {
    "time": [
      511.71,
      518.019
    ],
    "en": [
      "which tells us exactly what happened. Interface gigabitethernet0/0 changed state to up. So,"
    ],
    "ru": [
      "что в точности говорит нам о том, что произошло. Интерфейс gigabitethernet0 / 0 изменил состояние на up. Так,"
    ]
  },
  {
    "time": [
      518.019,
      523.419
    ],
    "en": [
      "that’s an example Syslog message. Make sure you’re able to identify each part of this"
    ],
    "ru": [
      "это пример сообщения системного журнала. Убедитесь, что вы можете идентифицировать каждую часть этого"
    ]
  },
  {
    "time": [
      523.419,
      529.0
    ],
    "en": [
      "message. For example, you might be asked, what’s the facility of this Syslog message?"
    ],
    "ru": [
      "сообщение. Например, вас могут спросить, каковы возможности этого сообщения системного журнала?"
    ]
  },
  {
    "time": [
      529.0,
      533.99
    ],
    "en": [
      "You should be able to answer ‘LINK’. Or if asked about the severity, you should be"
    ],
    "ru": [
      "Вы должны быть в состоянии ответить «ССЫЛКА». Или, если вас спросят о серьезности, вы должны"
    ]
  },
  {
    "time": [
      533.99,
      539.371
    ],
    "en": [
      "able to answer ‘3’ or ‘error’, depending on the options. I can’t say for sure, but"
    ],
    "ru": [
      "может ответить «3» или «ошибка», в зависимости от вариантов. Точно сказать не могу, но"
    ]
  },
  {
    "time": [
      539.371,
      543.839
    ],
    "en": [
      "judging by the exam topics list those seem like the kind of question you can expect on"
    ],
    "ru": [
      "судя по списку тем экзамена, на эти вопросы можно рассчитывать"
    ]
  },
  {
    "time": [
      543.839,
      550.23
    ],
    "en": [
      "the exam. Okay, let’s see some more examples. Here’s a message about an OSPF neighbor"
    ],
    "ru": [
      "экзамен. Хорошо, давайте еще несколько примеров. Вот сообщение о соседе OSPF"
    ]
  },
  {
    "time": [
      550.23,
      557.529
    ],
    "en": [
      "moving to the FULL state. The facility is OSPF, and IOS declares this a level 5, notification"
    ],
    "ru": [
      "переход в состояние ПОЛНЫЙ. Это средство OSPF, и IOS объявляет это уровнем 5, уведомление"
    ]
  },
  {
    "time": [
      557.529,
      566.36
    ],
    "en": [
      "level, message. The mnemonic is A D J C H G, adjacency change. Here’s another example,"
    ],
    "ru": [
      "уровень, сообщение. Мнемоника - A D J C H G, изменение смежности. Вот еще один пример,"
    ]
  },
  {
    "time": [
      566.36,
      571.22
    ],
    "en": [
      "and for this one I turned on the sequence numbers so you can see what it looks like."
    ],
    "ru": [
      "и для этого я включил порядковые номера, чтобы вы могли видеть, как это выглядит."
    ]
  },
  {
    "time": [
      571.22,
      577.11
    ],
    "en": [
      "In this case the facility is SYS for system, the severity is 5 again, and remember those"
    ],
    "ru": [
      "В этом случае средство SYS для системы, уровень серьезности снова равен 5, и запомните эти"
    ]
  },
  {
    "time": [
      577.11,
      584.04
    ],
    "en": [
      "keywords for level 5, ‘notice’ or ‘notification’. And the mnemonic is CONFIG_I, with a description"
    ],
    "ru": [
      "ключевые слова для уровня 5, «уведомление» или «уведомление». Мнемоника - CONFIG_I с описанием"
    ]
  },
  {
    "time": [
      584.04,
      589.949
    ],
    "en": [
      "of ‘configured from console by jeremy on console.’ You get messages like this when"
    ],
    "ru": [
      "из «настроено с консоли Джереми на консоли». Подобные сообщения появляются, когда"
    ]
  },
  {
    "time": [
      589.949,
      596.11
    ],
    "en": [
      "you exit global config mode and return to privileged exec mode. And one more example,"
    ],
    "ru": [
      "вы выходите из глобального режима конфигурации и возвращаетесь в привилегированный режим exec. И еще один пример,"
    ]
  },
  {
    "time": [
      596.11,
      601.55
    ],
    "en": [
      "this time I just changed the timezone from UTC to JST and this messages was displayed."
    ],
    "ru": [
      "на этот раз я просто изменил часовой пояс с UTC на JST, и это сообщение было отображено."
    ]
  },
  {
    "time": [
      601.55,
      607.25
    ],
    "en": [
      "Again, the facility is SYS, but this time the severity is 6. What’s the keyword for"
    ],
    "ru": [
      "Опять же, средство SYS, но на этот раз серьезность 6. Какое ключевое слово для"
    ]
  },
  {
    "time": [
      607.25,
      613.73
    ],
    "en": [
      "level 6? It’s ‘informational’. And the mnemonic is CLOCKUPDATE. So, once again make"
    ],
    "ru": [
      "уровень 6? Это «информационное». И мнемоника - ОБНОВЛЕНИЕ ЧАСОВ. Итак, еще раз сделайте"
    ]
  },
  {
    "time": [
      613.73,
      619.36
    ],
    "en": [
      "sure you can identify each part of a Syslog message, it’s stated directly in the exam topics list."
    ],
    "ru": [
      "Убедитесь, что вы можете идентифицировать каждую часть сообщения системного журнала, это указано прямо в списке тем экзамена."
    ]
  },
  {
    "time": [
      619.36,
      624.819
    ],
    "en": [
      "topics list. Soon we’ll take a look at how to configure Syslog in the CLI, but before that here’s"
    ],
    "ru": [
      "список тем. Скоро мы рассмотрим, как настроить системный журнал в интерфейсе командной строки, но перед этим вот"
    ]
  },
  {
    "time": [
      624.819,
      630.579
    ],
    "en": [
      "an overview of the different locations Syslog messages can be sent to. First is the console"
    ],
    "ru": [
      "обзор различных мест, куда могут быть отправлены сообщения системного журнала. Во-первых, это консоль"
    ]
  },
  {
    "time": [
      630.579,
      635.36
    ],
    "en": [
      "line. This means that Syslog messages will be displayed when connected to the device"
    ],
    "ru": [
      "линия. Это означает, что сообщения системного журнала будут отображаться при подключении к устройству."
    ]
  },
  {
    "time": [
      635.36,
      641.92
    ],
    "en": [
      "via the console port. By default, all messages, from level 0 through level 7, are displayed"
    ],
    "ru": [
      "через консольный порт. По умолчанию отображаются все сообщения от уровня 0 до уровня 7."
    ]
  },
  {
    "time": [
      641.92,
      647.9590000000001
    ],
    "en": [
      "when connected to the CLI via the device’s console port. In Packet Tracer, for example,"
    ],
    "ru": [
      "при подключении к интерфейсу командной строки через консольный порт устройства. В Packet Tracer, например,"
    ]
  },
  {
    "time": [
      647.9590000000001,
      652.439
    ],
    "en": [
      "when you click on a device and go to the CLI tab, it operates as if you’re connected"
    ],
    "ru": [
      "когда вы нажимаете на устройство и переходите на вкладку CLI, оно работает так, как будто вы подключены"
    ]
  },
  {
    "time": [
      652.439,
      658.04
    ],
    "en": [
      "via the console port of the device. So, that’s why Syslog messages are displayed when configuring"
    ],
    "ru": [
      "через консольный порт устройства. Вот почему сообщения системного журнала отображаются при настройке"
    ]
  },
  {
    "time": [
      658.04,
      665.329
    ],
    "en": [
      "devices in packet tracer via the CLI tab. Okay, the next location is the VTY lines."
    ],
    "ru": [
      "устройства в пакетном трассировщике через вкладку CLI. Хорошо, следующее место - линии VTY."
    ]
  },
  {
    "time": [
      665.329,
      670.089
    ],
    "en": [
      "This means that Syslog messages will be displayed in the CLI when connected to the device via"
    ],
    "ru": [
      "Это означает, что сообщения системного журнала будут отображаться в интерфейсе командной строки при подключении к устройству через"
    ]
  },
  {
    "time": [
      670.089,
      677.379
    ],
    "en": [
      "Telnet or SSH. Telnet and SSH will be covered in a later video. They are protocols used"
    ],
    "ru": [
      "Telnet или SSH. Telnet и SSH будут рассмотрены в следующем видео. Это используемые протоколы"
    ]
  },
  {
    "time": [
      677.379,
      682.009
    ],
    "en": [
      "to connect to a device over a network, without being directly connected to the device’s"
    ],
    "ru": [
      "для подключения к устройству по сети без прямого подключения к устройству"
    ]
  },
  {
    "time": [
      682.009,
      687.499
    ],
    "en": [
      "console port. Logging to the VTY lines is disabled by default, so Syslog messages will"
    ],
    "ru": [
      "консольный порт. Запись в строки VTY отключена по умолчанию, поэтому сообщения системного журнала будут"
    ]
  },
  {
    "time": [
      687.499,
      693.939
    ],
    "en": [
      "not be displayed if you’re connecting to the device via Telnet or SSH. So, if you shutdown"
    ],
    "ru": [
      "не отображается, если вы подключаетесь к устройству через Telnet или SSH. Итак, если вы выключите"
    ]
  },
  {
    "time": [
      693.939,
      699.939
    ],
    "en": [
      "an interface, for example, no message will be displayed. The next location for Syslog"
    ],
    "ru": [
      "интерфейс, например, сообщение не будет отображаться. Следующее место для системного журнала"
    ]
  },
  {
    "time": [
      699.939,
      704.48
    ],
    "en": [
      "messages is the ‘buffer’ of the device. This means that Syslog messages will be saved"
    ],
    "ru": [
      "messages - это «буфер» устройства. Это означает, что сообщения системного журнала будут сохранены."
    ]
  },
  {
    "time": [
      704.48,
      711.42
    ],
    "en": [
      "to RAM. By default, all messages, from level 0 to level 7, will be displayed in the buffer."
    ],
    "ru": [
      "в ОЗУ. По умолчанию все сообщения от уровня 0 до уровня 7 будут отображаться в буфере."
    ]
  },
  {
    "time": [
      711.42,
      715.779
    ],
    "en": [
      "You can view the messages in the buffer with the SHOW LOGGING command. We’ll take a look"
    ],
    "ru": [
      "Вы можете просмотреть сообщения в буфере с помощью команды SHOW LOGGING. Мы посмотрим"
    ]
  },
  {
    "time": [
      715.779,
      721.029
    ],
    "en": [
      "at that command in the lab video. You can also configure the device to send Syslog messages"
    ],
    "ru": [
      "по этой команде в лабораторном видео. Вы также можете настроить устройство для отправки сообщений системного журнала."
    ]
  },
  {
    "time": [
      721.029,
      726.259
    ],
    "en": [
      "to an external server. This is very useful, especially in large networks, but also in"
    ],
    "ru": [
      "на внешний сервер. Это очень полезно, особенно в больших сетях, но также и в"
    ]
  },
  {
    "time": [
      726.259,
      731.79
    ],
    "en": [
      "small networks. Having a central server for the Syslog messages makes network management"
    ],
    "ru": [
      "небольшие сети. Наличие центрального сервера для сообщений системного журнала делает управление сетью"
    ]
  },
  {
    "time": [
      731.79,
      737.93
    ],
    "en": [
      "easier and makes it easier to compare the logs of multiple devices. By the way, Syslog"
    ],
    "ru": [
      "проще и упрощает сравнение журналов нескольких устройств. Кстати, системный журнал"
    ]
  },
  {
    "time": [
      737.93,
      744.899
    ],
    "en": [
      "servers will listen for Syslog messages on UDP port 514. So, if a device sends a Syslog"
    ],
    "ru": [
      "серверы будут прослушивать сообщения системного журнала на UDP-порту 514. Итак, если устройство отправляет системный журнал"
    ]
  },
  {
    "time": [
      744.899,
      751.5889999999999
    ],
    "en": [
      "message to a Syslog server, the destination port will be UDP 514. Remember that!"
    ],
    "ru": [
      "сообщение на сервер системного журнала, порт назначения будет UDP 514. Помните об этом!"
    ]
  },
  {
    "time": [
      751.5889999999999,
      756.899
    ],
    "en": [
      "So here are some basic Syslog configurations. First, at the top, configuring logging to"
    ],
    "ru": [
      "Итак, вот несколько основных конфигураций системного журнала. Сначала вверху настраиваем ведение журнала на"
    ]
  },
  {
    "time": [
      756.899,
      762.629
    ],
    "en": [
      "the console line. This is enabled by default, but here’s how you configure it. The command"
    ],
    "ru": [
      "консольная линия. По умолчанию это включено, но вы можете настроить его следующим образом. Команда"
    ]
  },
  {
    "time": [
      762.629,
      768.73
    ],
    "en": [
      "is LOGGING CONSOLE, followed by the level. I specified 6. Note that, in all of these"
    ],
    "ru": [
      "КОНСОЛЬ ЖУРНАЛА, за которым следует уровень. Я указал 6. Обратите внимание, что во всех этих"
    ]
  },
  {
    "time": [
      768.73,
      774.059
    ],
    "en": [
      "commands, you can specify either the number or the keyword of the level. So in this case"
    ],
    "ru": [
      "команд вы можете указать номер или ключевое слово уровня. Так что в этом случае"
    ]
  },
  {
    "time": [
      774.059,
      779.989
    ],
    "en": [
      "I specified 6, but I could have used the keyword INFORMATIONAL instead. Also note that this"
    ],
    "ru": [
      "Я указал 6, но вместо этого мог бы использовать ключевое слово ИНФОРМАЦИОННЫЙ. Также обратите внимание, что это"
    ]
  },
  {
    "time": [
      779.989,
      785.029
    ],
    "en": [
      "doesn’t only enable informational messages. This enables logging for informational severity"
    ],
    "ru": [
      "не только информационные сообщения. Это позволяет вести журнал для важности информации."
    ]
  },
  {
    "time": [
      785.029,
      792.379
    ],
    "en": [
      "and higher, so informational to emergency, which includes levels 6, 5, 4, 3, 2, 1, and"
    ],
    "ru": [
      "и выше, поэтому информация для аварийной ситуации, которая включает уровни 6, 5, 4, 3, 2, 1 и"
    ]
  },
  {
    "time": [
      792.379,
      797.47
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
      792.379,
      797.47
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
      797.47,
      802.809
    ],
    "en": [
      "level to 6 actually slightly restricts the messages that will be displayed via the console."
    ],
    "ru": [
      "уровень до 6 фактически немного ограничивает сообщения, которые будут отображаться через консоль."
    ]
  },
  {
    "time": [
      802.809,
      808.529
    ],
    "en": [
      "Okay, next the command to configure logging to the VTY lines is LOGGING MONITOR, followed"
    ],
    "ru": [
      "Хорошо, следующая команда для настройки ведения журнала в строках VTY - это LOGGING MONITOR, за которой следует"
    ]
  },
  {
    "time": [
      808.529,
      814.389
    ],
    "en": [
      "by the level. Just like above, you can specify the level number or keyword, this time I used"
    ],
    "ru": [
      "по уровню. Как и выше, вы можете указать номер уровня или ключевое слово, на этот раз я использовал"
    ]
  },
  {
    "time": [
      814.389,
      819.85
    ],
    "en": [
      "the keyword of INFORMATIONAL instead of the level, 6. Next, to configure logging to the"
    ],
    "ru": [
      "ключевое слово ИНФОРМАЦИОННЫЙ вместо уровня 6. Затем, чтобы настроить ведение журнала в"
    ]
  },
  {
    "time": [
      819.85,
      825.16
    ],
    "en": [
      "buffer the command is LOGGING BUFFERED, followed by the size of the buffer in bytes and the"
    ],
    "ru": [
      "buffer команда LOGGING BUFFERED, за которой следует размер буфера в байтах и"
    ]
  },
  {
    "time": [
      825.16,
      830.04
    ],
    "en": [
      "level. The size is optional, if you don’t specify it the device will use its default"
    ],
    "ru": [
      "уровень. Размер указывать необязательно. Если вы не укажете его, устройство будет использовать значение по умолчанию."
    ]
  },
  {
    "time": [
      830.04,
      835.3389999999999
    ],
    "en": [
      "size. Just be careful not to set the buffer size too large, because that can take system"
    ],
    "ru": [
      "размер. Только будьте осторожны, чтобы не установить слишком большой размер буфера, потому что это может занять систему"
    ]
  },
  {
    "time": [
      835.3389999999999,
      841.709
    ],
    "en": [
      "memory away from other essential operations. Also to repeat, to specify the logging level"
    ],
    "ru": [
      "память вдали от других важных операций. Также повторить, чтобы указать уровень ведения журнала"
    ]
  },
  {
    "time": [
      841.709,
      846.439
    ],
    "en": [
      "you can use either the number or the keyword, and it enables logging for not only level"
    ],
    "ru": [
      "вы можете использовать номер или ключевое слово, и это позволяет вести журнал не только для уровня"
    ]
  },
  {
    "time": [
      846.439,
      853.449
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
      846.439,
      853.449
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
      853.449,
      860.629
    ],
    "en": [
      "with LOGGING, followed by the server IP, or LOGGING HOST, followed by the server IP. The"
    ],
    "ru": [
      "с LOGGING, за которым следует IP-адрес сервера, или LOGGING HOST, за которым следует IP-адрес сервера. В"
    ]
  },
  {
    "time": [
      860.629,
      865.619
    ],
    "en": [
      "commands are the same, you can use whichever. Now, to configure the levels of messages sent"
    ],
    "ru": [
      "команды такие же, вы можете использовать что угодно. Теперь, чтобы настроить уровни отправляемых сообщений"
    ]
  },
  {
    "time": [
      865.619,
      870.889
    ],
    "en": [
      "to the external server, you need to use a different command. It’s LOGGING TRAP, followed"
    ],
    "ru": [
      "к внешнему серверу, вам нужно использовать другую команду. Это ЛОВУШКА ДЛЯ РЕГИСТРАЦИИ, следует"
    ]
  },
  {
    "time": [
      870.889,
      876.11
    ],
    "en": [
      "by the level. This time I specified DEBUGGING, but once again I could have used the level"
    ],
    "ru": [
      "по уровню. На этот раз я указал DEBUGGING, но я снова мог использовать уровень"
    ]
  },
  {
    "time": [
      876.11,
      883.18
    ],
    "en": [
      "number of 7 instead. This enables logging of all levels, not just 7 but also 6, 5, 4,"
    ],
    "ru": [
      "номер 7 вместо этого. Это позволяет вести журнал всех уровней, не только 7, но и 6, 5, 4,"
    ]
  },
  {
    "time": [
      883.18,
      888.819
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
      883.18,
      888.819
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
      888.819,
      895.069
    ],
    "en": [
      "specify which levels of messages should be displayed. Because Syslog configuration isn’t"
    ],
    "ru": [
      "укажите, какие уровни сообщений должны отображаться. Поскольку конфигурация системного журнала не"
    ]
  },
  {
    "time": [
      895.069,
      899.019
    ],
    "en": [
      "specified in the exam topics, you probably don’t have to memorize these commands for"
    ],
    "ru": [
      "указанных в темах экзамена, вам, вероятно, не нужно запоминать эти команды для"
    ]
  },
  {
    "time": [
      899.019,
      904.069
    ],
    "en": [
      "the exam. However, I will include flashcards for them and also you can get some practice"
    ],
    "ru": [
      "экзамен. Тем не менее, я добавлю им карточки, а также вы сможете попрактиковаться."
    ]
  },
  {
    "time": [
      904.069,
      908.069
    ],
    "en": [
      "with them in the following lab video."
    ],
    "ru": [
      "с ними в следующем лабораторном видео."
    ]
  },
  {
    "time": [
      908.069,
      913.73
    ],
    "en": [
      "Let me introduce another command. Even if LOGGING MONITOR is enabled, by default Syslog"
    ],
    "ru": [
      "Разрешите представить еще одну команду. Даже если LOGGING MONITOR включен, по умолчанию Syslog"
    ]
  },
  {
    "time": [
      913.73,
      919.42
    ],
    "en": [
      "messages will not be displayed when connected via Telnet or SSH. You need another command,"
    ],
    "ru": [
      "сообщения не будут отображаться при подключении через Telnet или SSH. Вам нужна другая команда,"
    ]
  },
  {
    "time": [
      919.42,
      924.85
    ],
    "en": [
      "too. For the messages to be displayed, you must use the following command: TERMINAL MONITOR,"
    ],
    "ru": [
      "тоже. Чтобы сообщения отображались, вы должны использовать следующую команду: TERMINAL MONITOR,"
    ]
  },
  {
    "time": [
      924.85,
      929.759
    ],
    "en": [
      "from privileged exec mode. But not only that, this command must be used every time you connect"
    ],
    "ru": [
      "из привилегированного режима exec. Но не только это, эту команду нужно использовать каждый раз, когда вы подключаетесь."
    ]
  },
  {
    "time": [
      929.759,
      935.989
    ],
    "en": [
      "to the device via Telnet or SSH. So, if you connect via SSH and use the TERMINAL MONITOR"
    ],
    "ru": [
      "к устройству через Telnet или SSH. Итак, если вы подключаетесь через SSH и используете TERMINAL MONITOR"
    ]
  },
  {
    "time": [
      935.989,
      941.8
    ],
    "en": [
      "command, Syslog messages will be displayed as you configure the device. However, after"
    ],
    "ru": [
      ", сообщения системного журнала будут отображаться по мере настройки устройства. Однако после"
    ]
  },
  {
    "time": [
      941.8,
      946.449
    ],
    "en": [
      "you log out, that ‘session’ is finished and the TERMINAL MONITOR command is no longer"
    ],
    "ru": [
      "вы выходите из системы, этот «сеанс» завершен и команда TERMINAL MONITOR больше не действует"
    ]
  },
  {
    "time": [
      946.449,
      952.309
    ],
    "en": [
      "effective. To display Syslog messages in the CLI when you connect again next time, you’ll"
    ],
    "ru": [
      "эффективный. Чтобы отображать сообщения системного журнала в интерфейсе командной строки при следующем подключении, необходимо"
    ]
  },
  {
    "time": [
      952.309,
      958.259
    ],
    "en": [
      "need to use the TERMINAL MONITOR command again. I’ll demonstrate this in the lab video."
    ],
    "ru": [
      "необходимо снова использовать команду TERMINAL MONITOR. Я продемонстрирую это в лабораторном видео."
    ]
  },
  {
    "time": [
      958.259,
      963.76
    ],
    "en": [
      "This next command isn’t essential, but very convenient. By default, logging messages displayed"
    ],
    "ru": [
      "Следующая команда не обязательна, но очень удобна. По умолчанию сообщения журнала отображаются"
    ]
  },
  {
    "time": [
      963.76,
      967.829
    ],
    "en": [
      "in the CLI while you are in the middle of typing a command will result in something"
    ],
    "ru": [
      "в CLI, когда вы набираете команду, приведет к чему-то"
    ]
  },
  {
    "time": [
      967.829,
      974.179
    ],
    "en": [
      "like this. Notice in the middle of typing SHOW IP IN, the log message was displayed."
    ],
    "ru": [
      "нравится. Обратите внимание, что в середине ввода SHOW IP IN было отображено сообщение журнала."
    ]
  },
  {
    "time": [
      974.179,
      979.939
    ],
    "en": [
      "I continued typing the command, and the command continued right after the log message. I changed"
    ],
    "ru": [
      "Я продолжил вводить команду, и команда продолжилась сразу после сообщения журнала. я изменил"
    ]
  },
  {
    "time": [
      979.939,
      983.829
    ],
    "en": [
      "the color of the command to make it easier to see, but when this actually happens in"
    ],
    "ru": [
      "цвет команды, чтобы ее было легче увидеть, но когда это на самом деле происходит в"
    ]
  },
  {
    "time": [
      983.829,
      989.889
    ],
    "en": [
      "the CLI it can be hard to see where the Syslog message ends and where the command continues."
    ],
    "ru": [
      "CLI может быть трудно увидеть, где заканчивается сообщение системного журнала и где продолжается команда."
    ]
  },
  {
    "time": [
      989.889,
      994.79
    ],
    "en": [
      "To prevent this, you should use the logging synchronous command on the appropriate line,"
    ],
    "ru": [
      "Чтобы предотвратить это, вы должны использовать команду logging synchronous в соответствующей строке,"
    ]
  },
  {
    "time": [
      994.79,
      1000.0
    ],
    "en": [
      "and I will talk more about ‘line’ configuration in the Telnet and SSH video. You don’t need"
    ],
    "ru": [
      "и я расскажу больше о конфигурации «линии» в видео по Telnet и SSH. Вам не нужно"
    ]
  },
  {
    "time": [
      1000.0,
      1005.1
    ],
    "en": [
      "to learn this yet, but for example here’s how you can enter the console line, LINE CONSOLE"
    ],
    "ru": [
      "чтобы узнать это еще, но, например, вот как вы можете войти в строку консоли, LINE CONSOLE"
    ]
  },
  {
    "time": [
      1005.1,
      1010.87
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
      1005.1,
      1010.87
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
      1010.87,
      1017.519
    ],
    "en": [
      "your typing is interrupted by a message. Here’s an example. I typed SHOW IP INT, a log message"
    ],
    "ru": [
      "ваш набор текста прерывается сообщением. Вот пример. Я набрал SHOW IP INT, сообщение журнала"
    ]
  },
  {
    "time": [
      1017.519,
      1023.79
    ],
    "en": [
      "was displayed, and then SHOW IP INT was reprinted on a new line. This makes it easier to continue"
    ],
    "ru": [
      "был отображен, а затем SHOW IP INT было перепечатано с новой строки. Это упрощает продолжение"
    ]
  },
  {
    "time": [
      1023.79,
      1029.15
    ],
    "en": [
      "typing the command. So, this is a nice command to know and a command I usually use when doing"
    ],
    "ru": [
      "набрав команду. Итак, это хорошая команда, которую нужно знать, и команда, которую я обычно использую при выполнении"
    ]
  },
  {
    "time": [
      1029.15,
      1032.19
    ],
    "en": [
      "labs. It just makes things easier to see."
    ],
    "ru": [
      "лаборатории. Это просто упрощает просмотр."
    ]
  },
  {
    "time": [
      1032.19,
      1039.49
    ],
    "en": [
      "Okay, the last two commands I want to show you are SERVICE TIMESTAMPS and SERVICE SEQUENCE-NUMBERS."
    ],
    "ru": [
      "Хорошо, последние две команды, которые я хочу показать вам, - это УСЛОВНЫЕ УКАЗАНИЯ и ПОСЛЕДОВАТЕЛЬНОСТЬ УСЛУГ."
    ]
  },
  {
    "time": [
      1039.49,
      1043.32
    ],
    "en": [
      "This is how you control whether or not the timestamps and sequence numbers will be displayed"
    ],
    "ru": [
      "Таким образом вы управляете отображением временных меток и порядковых номеров."
    ]
  },
  {
    "time": [
      1043.32,
      1050.92
    ],
    "en": [
      "in Syslog messages. To enable timestamps for Syslog messages, use SERVICE TIMESTAMPS LOG,"
    ],
    "ru": [
      "в сообщениях системного журнала. Чтобы включить временные метки для сообщений системного журнала, используйте ЖУРНАЛ ВРЕМЕННЫХ АППАРАТОВ ОБСЛУЖИВАНИЯ,"
    ]
  },
  {
    "time": [
      1050.92,
      1056.67
    ],
    "en": [
      "followed either by DATETIME or UPTIME. If you specify DATETIME, timestamps will display"
    ],
    "ru": [
      "за которым следует DATETIME или UPTIME. Если вы укажете DATETIME, будут отображаться временные метки."
    ]
  },
  {
    "time": [
      1056.67,
      1062.42
    ],
    "en": [
      "the actual date and time when the event occurred. If you specify UPTIME, timestamps won’t"
    ],
    "ru": [
      "фактическая дата и время, когда произошло событие. Если вы укажете UPTIME, отметки времени не будут"
    ]
  },
  {
    "time": [
      1062.42,
      1066.76
    ],
    "en": [
      "display the date and time, they will display how long the device had been running when"
    ],
    "ru": [
      "отображают дату и время, они будут отображать, как долго устройство работало, когда"
    ]
  },
  {
    "time": [
      1066.76,
      1072.83
    ],
    "en": [
      "the event occurred. DATETIME is usually the preferred option, so that’s what I chose."
    ],
    "ru": [
      "событие произошло. DATETIME обычно является предпочтительным вариантом, поэтому я выбрал именно его."
    ]
  },
  {
    "time": [
      1072.83,
      1078.28
    ],
    "en": [
      "Then I enabled sequence numbers with the SERVICE SEQUENCE-NUMBERS command. After I exit global"
    ],
    "ru": [
      "Затем я включил порядковые номера с помощью команды SERVICE SEQUENCE-NUMBERS. После выхода из глобального"
    ]
  },
  {
    "time": [
      1078.28,
      1084.56
    ],
    "en": [
      "config mode, you can see that the Syslog message has both a sequence number and a timestamp."
    ],
    "ru": [
      "config, вы можете видеть, что сообщение системного журнала имеет как порядковый номер, так и временную метку."
    ]
  },
  {
    "time": [
      1084.56,
      1088.67
    ],
    "en": [
      "I think it’s a good idea to always enable timestamps, although personally I don’t"
    ],
    "ru": [
      "Я думаю, что было бы неплохо всегда включать временные метки, хотя лично я не"
    ]
  },
  {
    "time": [
      1088.67,
      1093.08
    ],
    "en": [
      "find sequence numbers particularly useful, so I prefer to keep them disabled."
    ],
    "ru": [
      "считаю, что порядковые номера особенно полезны, поэтому я предпочитаю оставлять их отключенными."
    ]
  },
  {
    "time": [
      1093.08,
      1097.91
    ],
    "en": [
      "Here’s a summary of the commands I just showed you. I think trying these out in a"
    ],
    "ru": [
      "Вот краткое изложение команд, которые я вам только что показал. Я думаю попробовать это в"
    ]
  },
  {
    "time": [
      1097.91,
      1103.08
    ],
    "en": [
      "lab will be very helpful, not just for remembering the commands but for understanding how Syslog"
    ],
    "ru": [
      "lab будет очень полезен не только для запоминания команд, но и для понимания того, как Syslog"
    ]
  },
  {
    "time": [
      1103.08,
      1109.19
    ],
    "en": [
      "works. So make sure to watch the next video and try out the lab yourself in Packet Tracer."
    ],
    "ru": [
      "работает. Поэтому обязательно посмотрите следующее видео и попробуйте сами в Packet Tracer."
    ]
  },
  {
    "time": [
      1109.19,
      1116.88
    ],
    "en": [
      "Finally, here’s a brief comparison of Syslog and SNMP. As I said before, Syslog and SNMP"
    ],
    "ru": [
      "Наконец, вот краткое сравнение системного журнала и SNMP. Как я сказал ранее, Syslog и SNMP"
    ]
  },
  {
    "time": [
      1116.88,
      1121.85
    ],
    "en": [
      "are both used for monitoring and troubleshooting of devices. They are complementary, but their"
    ],
    "ru": [
      "оба используются для мониторинга и устранения неполадок устройств. Они дополняют друг друга, но их"
    ]
  },
  {
    "time": [
      1121.85,
      1127.83
    ],
    "en": [
      "functionalities are different. Syslog is used for message logging. Events that occur within"
    ],
    "ru": [
      "функциональные возможности разные. Системный журнал используется для регистрации сообщений. События, происходящие внутри"
    ]
  },
  {
    "time": [
      1127.83,
      1133.61
    ],
    "en": [
      "the system are categorized based on facility and severity and logged, both within the device"
    ],
    "ru": [
      "система классифицируется по объектам и серьезности и регистрируется как внутри устройства."
    ]
  },
  {
    "time": [
      1133.61,
      1140.12
    ],
    "en": [
      "and likely to an external Syslog server. Syslog is used for system management, analysis, and"
    ],
    "ru": [
      "и, вероятно, на внешний сервер системного журнала. Системный журнал используется для управления системой, анализа и"
    ]
  },
  {
    "time": [
      1140.12,
      1145.65
    ],
    "en": [
      "troubleshooting. Here’s a big difference. Messages are sent from the devices to the"
    ],
    "ru": [
      "исправление проблем. Вот большая разница. Сообщения отправляются с устройств на"
    ]
  },
  {
    "time": [
      1145.65,
      1150.68
    ],
    "en": [
      "server, but the server can’t actively pull information from the devices, like an SNMP"
    ],
    "ru": [
      "сервер, но сервер не может активно извлекать информацию с устройств, например SNMP"
    ]
  },
  {
    "time": [
      1150.68,
      1159.4
    ],
    "en": [
      "Get message, or modify variables on the devices, like an SNMP Set message. Now SNMP. It is"
    ],
    "ru": [
      "Получите сообщение или измените переменные на устройствах, например сообщение о настройке SNMP. Теперь SNMP. это"
    ]
  },
  {
    "time": [
      1159.4,
      1165.05
    ],
    "en": [
      "used to retrieve and organize information about the SNMP managed devices. Things like"
    ],
    "ru": [
      "используется для получения и организации информации об устройствах, управляемых по протоколу SNMP. Вещи как"
    ]
  },
  {
    "time": [
      1165.05,
      1171.56
    ],
    "en": [
      "IP addresses, current interface status, device temperature, CPU usage, etc are stored as"
    ],
    "ru": [
      "IP-адреса, текущий статус интерфейса, температура устройства, загрузка ЦП и т. Д. Хранятся как"
    ]
  },
  {
    "time": [
      1171.56,
      1178.48
    ],
    "en": [
      "variables and organized within the MIB. SNMP servers can use Get to query the clients and"
    ],
    "ru": [
      "переменные и организованы в MIB. Серверы SNMP могут использовать Get для запроса клиентов и"
    ]
  },
  {
    "time": [
      1178.48,
      1185.16
    ],
    "en": [
      "Set to modify variables on the clients. Syslog and SNMP are used together to facilitate network"
    ],
    "ru": [
      "Установите для изменения переменных на клиентах. Системный журнал и SNMP используются вместе для упрощения работы в сети."
    ]
  },
  {
    "time": [
      1185.16,
      1191.47
    ],
    "en": [
      "device management, and you need to be familiar with both of them for the test."
    ],
    "ru": [
      "управление устройством, и для теста вам необходимо ознакомиться с ними обоими."
    ]
  },
  {
    "time": [
      1191.47,
      1196.25
    ],
    "en": [
      "Before the quiz, here’s a review of what we covered today. First I gave a brief overview"
    ],
    "ru": [
      "Перед викториной сделайте обзор того, что мы рассмотрели сегодня. Сначала я сделал краткий обзор"
    ]
  },
  {
    "time": [
      1196.25,
      1202.02
    ],
    "en": [
      "of Syslog. It’s an industry standard protocol for logging events that occur on devices."
    ],
    "ru": [
      "системного журнала. Это стандартный протокол для регистрации событий, происходящих на устройствах."
    ]
  },
  {
    "time": [
      1202.02,
      1208.601
    ],
    "en": [
      "I introduced the Syslog message format, as well as facilities and severity levels. Make"
    ],
    "ru": [
      "Я представил формат сообщений системного журнала, а также возможности и уровни серьезности. Делать"
    ]
  },
  {
    "time": [
      1208.601,
      1213.04
    ],
    "en": [
      "sure you know all of those severity level numbers and names, and make sure you can identify"
    ],
    "ru": [
      "убедитесь, что вы знаете все эти номера и названия уровней серьезности, и убедитесь, что вы можете идентифицировать"
    ]
  },
  {
    "time": [
      1213.04,
      1219.76
    ],
    "en": [
      "the different parts of a Syslog message. Finally, I showed you some basic Syslog configurations."
    ],
    "ru": [
      "различные части сообщения системного журнала. Наконец, я показал вам несколько основных конфигураций системного журнала."
    ]
  },
  {
    "time": [
      1219.76,
      1224.02
    ],
    "en": [
      "You probably won’t be asked about Syslog configuration on the exam, but I think the"
    ],
    "ru": [
      "Вероятно, на экзамене вас не спросят о конфигурации системного журнала, но я думаю, что"
    ]
  },
  {
    "time": [
      1224.02,
      1228.93
    ],
    "en": [
      "hands-on practice in Packet Tracer will be very helpful. Make sure to watch until the"
    ],
    "ru": [
      "практическая практика в Packet Tracer будет очень полезна. Обязательно смотрите, пока"
    ]
  },
  {
    "time": [
      1228.93,
      1234.0
    ],
    "en": [
      "end of the quiz for a bonus practice question from Boson Software’s ExSim, the best practice"
    ],
    "ru": [
      "конец викторины для получения бонусного практического вопроса от ExSim компании Boson Software, лучший метод"
    ]
  },
  {
    "time": [
      1234.0,
      1240.0
    ],
    "en": [
      "exams for the CCNA, and the ones I used to prepare for my exams. Okay, let’s go to"
    ],
    "ru": [
      "экзамены на CCNA, и те, которые я использовал для подготовки к экзаменам. Хорошо, пойдем в"
    ]
  },
  {
    "time": [
      1240.0,
      1243.16
    ],
    "en": [
      "question 1 of the quiz."
    ],
    "ru": [
      "вопрос 1 викторины."
    ]
  },
  {
    "time": [
      1243.16,
      1248.851
    ],
    "en": [
      "What is the severity level of the following Syslog message? Here are the options. Pause"
    ],
    "ru": [
      "Каков уровень серьезности следующего сообщения системного журнала? Вот варианты. Пауза"
    ]
  },
  {
    "time": [
      1248.851,
      1256.75
    ],
    "en": [
      "the video now to examine the message and select the correct answer."
    ],
    "ru": [
      "видео сейчас, чтобы изучить сообщение и выбрать правильный ответ."
    ]
  },
  {
    "time": [
      1256.75,
      1262.87
    ],
    "en": [
      "The answer is C, Notification. This is indicated by the 5 here, between the facility and the"
    ],
    "ru": [
      "Ответ - C, Уведомление. Здесь это обозначено цифрой 5, между объектом и"
    ]
  },
  {
    "time": [
      1262.87,
      1269.01
    ],
    "en": [
      "mnemonic. This severity level is called ‘Notice’ in the RFC for Syslog, but it’s also known"
    ],
    "ru": [
      "мнемоника. Этот уровень серьезности называется «Уведомлением» в RFC для системного журнала, но он также известен"
    ]
  },
  {
    "time": [
      1269.01,
      1275.99
    ],
    "en": [
      "as ‘Notification’. In the CLI of Cisco IOS, ‘Notification’ is used. Okay, let’s"
    ],
    "ru": [
      "как «Уведомление». В интерфейсе командной строки Cisco IOS используется «Уведомление». Хорошо давай"
    ]
  },
  {
    "time": [
      1275.99,
      1277.8
    ],
    "en": [
      "go to question 2."
    ],
    "ru": [
      "переходите к вопросу 2."
    ]
  },
  {
    "time": [
      1277.8,
      1283.511
    ],
    "en": [
      "Here’s another one. What is the severity level of the following Syslog message? Here"
    ],
    "ru": [
      "Вот еще один. Каков уровень серьезности следующего сообщения системного журнала? Здесь"
    ]
  },
  {
    "time": [
      1283.511,
      1292.36
    ],
    "en": [
      "are the options. Pause the video now to examine the message and select the correct answer."
    ],
    "ru": [
      "варианты. Приостановите видео сейчас, чтобы изучить сообщение и выбрать правильный ответ."
    ]
  },
  {
    "time": [
      1292.36,
      1298.74
    ],
    "en": [
      "The answer is B, Error. That is the name of severity level 3. Make sure you know all of"
    ],
    "ru": [
      "Ответ - B, ошибка. Так называется уровень серьезности 3. Убедитесь, что вы знаете все"
    ]
  },
  {
    "time": [
      1298.74,
      1303.61
    ],
    "en": [
      "the severity levels and their names. They’re mentioned in the exam topics list, so they’re"
    ],
    "ru": [
      "уровни серьезности и их названия. Они упоминаются в списке тем экзамена, поэтому они"
    ]
  },
  {
    "time": [
      1303.61,
      1309.53
    ],
    "en": [
      "definitely important. Okay, let’s go to question 3."
    ],
    "ru": [
      "определенно важно. Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1309.53,
      1314.22
    ],
    "en": [
      "Which of the following locations are Syslog messages sent to by default, without any specific"
    ],
    "ru": [
      "В какое из следующих мест отправляются сообщения системного журнала по умолчанию, без каких-либо конкретных"
    ]
  },
  {
    "time": [
      1314.22,
      1320.32
    ],
    "en": [
      "Syslog configuration? (select two). Here are the options. Pause the video now to think"
    ],
    "ru": [
      "Конфигурация системного журнала? (выберите два). Вот варианты. Поставьте видео на паузу, чтобы подумать"
    ]
  },
  {
    "time": [
      1320.32,
      1326.0
    ],
    "en": [
      "about the answers, select two."
    ],
    "ru": [
      "насчет ответов выберите два."
    ]
  },
  {
    "time": [
      1326.0,
      1332.38
    ],
    "en": [
      "The answers are B, the console line and C, the buffer. So, by default you will see Syslog"
    ],
    "ru": [
      "Ответы: B, консольная строка и C, буфер. Итак, по умолчанию вы увидите системный журнал"
    ]
  },
  {
    "time": [
      1332.38,
      1337.561
    ],
    "en": [
      "messages in realtime when connected to the CLI of the device via the console port. You"
    ],
    "ru": [
      "сообщения в реальном времени при подключении к CLI устройства через консольный порт. Ты"
    ]
  },
  {
    "time": [
      1337.561,
      1342.02
    ],
    "en": [
      "can also use SHOW LOGGING to view those messages stored in the logging buffer, in the memory"
    ],
    "ru": [
      "также можно использовать SHOW LOGGING для просмотра сообщений, хранящихся в буфере журналирования, в памяти."
    ]
  },
  {
    "time": [
      1342.02,
      1347.52
    ],
    "en": [
      "of the device. The device will not send Syslog messages to an external server until you configure"
    ],
    "ru": [
      "устройства. Устройство не будет отправлять сообщения системного журнала на внешний сервер, пока вы не настроите"
    ]
  },
  {
    "time": [
      1347.52,
      1352.73
    ],
    "en": [
      "it to do so, and Syslog messages also won’t be displayed in the CLI while connecting to"
    ],
    "ru": [
      "для этого, и сообщения системного журнала также не будут отображаться в интерфейсе командной строки при подключении к"
    ]
  },
  {
    "time": [
      1352.73,
      1359.56
    ],
    "en": [
      "the device via the VTY lines using Telnet or SSH. I’ll cover Telnet and SSH in detail"
    ],
    "ru": [
      "устройство через линии VTY с использованием Telnet или SSH. Я подробно расскажу о Telnet и SSH."
    ]
  },
  {
    "time": [
      1359.56,
      1367.0
    ],
    "en": [
      "in another video, don’t worry about them for now. Okay, let’s go to question 4."
    ],
    "ru": [
      "в другом видео, пока не беспокойтесь о них. Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1367.0,
      1372.82
    ],
    "en": [
      "You issue the logging buffered 6 command on R1. Syslog messages of which severity levels"
    ],
    "ru": [
      "Вы вводите команду logging buffered 6 на маршрутизаторе R1. Сообщения системного журнала с уровнями серьезности"
    ]
  },
  {
    "time": [
      1372.82,
      1382.13
    ],
    "en": [
      "will be saved to the logging buffer? Here are the options. Pause the video to think about the answer."
    ],
    "ru": [
      "будут сохранены в буфере журналирования? Вот варианты. Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1382.13,
      1389.18
    ],
    "en": [
      "about the answer. The answer is C, severity 0 to 6. When you specify a level of log messages, all messages"
    ],
    "ru": [
      "по поводу ответа. Ответ: C, уровень серьезности от 0 до 6. Когда вы указываете уровень сообщений журнала, все сообщения"
    ]
  },
  {
    "time": [
      1389.18,
      1393.64
    ],
    "en": [
      "of that level and higher severity, meaning numerically lower because the lower numbers"
    ],
    "ru": [
      "этого уровня и более высокой степени серьезности, то есть численно более низкой, поскольку меньшие числа"
    ]
  },
  {
    "time": [
      1393.64,
      1401.86
    ],
    "en": [
      "are more severe, will be displayed or saved to the buffer. Okay, let’s go to question 5."
    ],
    "ru": [
      "являются более серьезными, будут отображаться или сохраняться в буфере. Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      1401.86,
      1406.98
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
      1401.86,
      1406.98
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
      1406.98,
      1417.71
    ],
    "en": [
      "configuration? (select two). Here are the options. Pause the video to think about the answers, select two."
    ],
    "ru": [
      "конфигурация? (выберите два). Вот варианты. Поставьте видео на паузу, чтобы подумать над ответами, выберите два."
    ]
  },
  {
    "time": [
      1417.71,
      1424.81
    ],
    "en": [
      "answers, select two. The answers are A, sequence and D, time stamp. You can configure these with the SERVICE TIMESTAMPS"
    ],
    "ru": [
      "ответы, выберите два. Ответы: A, последовательность и D, отметка времени. Вы можете настроить их с помощью ВРЕМЕНИ ОБСЛУЖИВАНИЯ."
    ]
  },
  {
    "time": [
      1424.81,
      1430.71
    ],
    "en": [
      "and SERVICE SEQUENCE-NUMBERS command. I highly recommend having timestamps on log messages,"
    ],
    "ru": [
      "и команда SERVICE SEQUENCE-NUMBERS. Я настоятельно рекомендую использовать метки времени в сообщениях журнала,"
    ]
  },
  {
    "time": [
      1430.71,
      1435.03
    ],
    "en": [
      "although I don’t think sequence numbers are as important. Okay, that’s all for the"
    ],
    "ru": [
      "хотя я не думаю, что порядковые номера так важны. Хорошо, это все для"
    ]
  },
  {
    "time": [
      1435.03,
      1443.27
    ],
    "en": [
      "quiz. Now let’s take a look at a bonus question in Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "контрольный опрос. Теперь давайте рассмотрим дополнительный вопрос в ExSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      1443.27,
      1449.21
    ],
    "en": [
      "Okay here's today's Boson ExSim practice question. So, this is a drag and drop simulator question,"
    ],
    "ru": [
      "Хорошо, вот сегодняшний вопрос по практике Boson ExSim. Итак, это вопрос симулятора перетаскивания,"
    ]
  },
  {
    "time": [
      1449.21,
      1454.651
    ],
    "en": [
      "so I'll click on this button to open it up. And here it is. Select the Syslog message"
    ],
    "ru": [
      "поэтому я нажму на эту кнопку, чтобы открыть ее. И вот оно. Выберите сообщение системного журнала"
    ]
  },
  {
    "time": [
      1454.651,
      1459.68
    ],
    "en": [
      "logging keywords from the left and drag them to the corresponding Syslog levels on the"
    ],
    "ru": [
      "ключевые слова слева и перетащите их на соответствующие уровни системного журнала на"
    ]
  },
  {
    "time": [
      1459.68,
      1464.57
    ],
    "en": [
      "right. Okay, so I have said this multiple times, but this is very important, that you"
    ],
    "ru": [
      "Правильно. Хорошо, я сказал это несколько раз, но это очень важно, чтобы вы"
    ]
  },
  {
    "time": [
      1464.57,
      1473.62
    ],
    "en": [
      "know all of these levels for the CCNA exam. So pause the video now and try to do that."
    ],
    "ru": [
      "знать все эти уровни для экзамена CCNA. Так что поставьте видео на паузу и попробуйте сделать это."
    ]
  },
  {
    "time": [
      1473.62,
      1480.47
    ],
    "en": [
      "Okay let's check. So, first level 0. This is the most severe. So the number is lower"
    ],
    "ru": [
      "Ладно, проверим. Итак, первый уровень 0. Это самый тяжелый. Значит, число меньше"
    ]
  },
  {
    "time": [
      1480.47,
      1489.02
    ],
    "en": [
      "but the severity level is the highest. And that is emergencies. Next one after that is"
    ],
    "ru": [
      "но уровень серьезности самый высокий. И это чрезвычайные ситуации. Следующий после этого"
    ]
  },
  {
    "time": [
      1489.02,
      1500.44
    ],
    "en": [
      "number 1, alerts. And the critical, number 2. Errors, next level 4 is warnings. After"
    ],
    "ru": [
      "№1, оповещения. И критический, номер 2. Ошибки, следующий уровень 4 - это предупреждения. После"
    ]
  },
  {
    "time": [
      1500.44,
      1508.13
    ],
    "en": [
      "that, notifications, or notices. And then level 6 is informational and level 7 is debugging."
    ],
    "ru": [
      "это, уведомления или уведомления. Затем уровень 6 является информационным, а уровень 7 - отладочным."
    ]
  },
  {
    "time": [
      1508.13,
      1514.03
    ],
    "en": [
      "So, if it helps you remember that, use the mnemonic 'every awesome Cisco engineer will"
    ],
    "ru": [
      "Так что, если это поможет вам это запомнить, используйте мнемонику «каждый замечательный инженер Cisco будет"
    ]
  },
  {
    "time": [
      1514.03,
      1519.35
    ],
    "en": [
      "need ice cream daily'. So, I personally don't really use mnemonics but I know a lot of people"
    ],
    "ru": [
      "нужно мороженое ежедневно ». Итак, я лично не использую мнемонику, но я знаю много людей"
    ]
  },
  {
    "time": [
      1519.35,
      1525.19
    ],
    "en": [
      "do, so if that helps you remember these seven (*eight!) levels, you can use that one. Okay,"
    ],
    "ru": [
      "так что, если это поможет вам запомнить эти семь (* восемь!) уровней, вы можете использовать этот. Хорошо,"
    ]
  },
  {
    "time": [
      1525.19,
      1532.83
    ],
    "en": [
      "so I'll click on done and then let's check. So the answer is correct, there it is. And"
    ],
    "ru": [
      "поэтому я нажимаю \"Готово\", а затем давайте проверим. Итак, ответ правильный, вот он. А также"
    ]
  },
  {
    "time": [
      1532.83,
      1539.0
    ],
    "en": [
      "as always Boson has a great explanation down here, detailing the levels, some information"
    ],
    "ru": [
      "как всегда у Бозона есть отличное объяснение здесь, детализируя уровни, некоторую информацию"
    ]
  },
  {
    "time": [
      1539.0,
      1549.32
    ],
    "en": [
      "about filtering the levels on the console, to the server. And some other extra information."
    ],
    "ru": [
      "про фильтрацию уровней на консоли, на сервер. И еще немного дополнительной информации."
    ]
  },
  {
    "time": [
      1549.32,
      1554.99
    ],
    "en": [
      "There is also a reference here to some Cisco documentation about the message logging level"
    ],
    "ru": [
      "Здесь также есть ссылка на некоторую документацию Cisco об уровне ведения журнала сообщений."
    ]
  },
  {
    "time": [
      1554.99,
      1560.51
    ],
    "en": [
      "keywords. So, if you google this title here you'll probably find it because this documentation"
    ],
    "ru": [
      "ключевые слова. Итак, если вы погуглите этот заголовок здесь, вы, вероятно, найдете его, потому что эта документация"
    ]
  },
  {
    "time": [
      1560.51,
      1567.93
    ],
    "en": [
      "is available for free online from Cisco, and it's another great study resource. Okay so"
    ],
    "ru": [
      "доступен бесплатно в Интернете от Cisco, и это еще один отличный учебный ресурс. Хорошо, итак"
    ]
  },
  {
    "time": [
      1567.93,
      1572.46
    ],
    "en": [
      "that was a question from Boson Software's ExSim for CCNA. These are without a doubt"
    ],
    "ru": [
      "это был вопрос от ExSim компании Boson Software для CCNA. Это без сомнения"
    ]
  },
  {
    "time": [
      1572.46,
      1577.02
    ],
    "en": [
      "the best practice exams for the CCNA and I highly recommend them. If you want to get"
    ],
    "ru": [
      "лучшие практические экзамены для CCNA, и я их очень рекомендую. Если ты хочешь получить"
    ]
  },
  {
    "time": [
      1577.02,
      1582.77
    ],
    "en": [
      "Boson ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1582.77,
      1587.84
    ],
    "en": [
      "There are supplementary materials for this video. There is a flashcard deck to use with"
    ],
    "ru": [
      "К этому видео есть дополнительные материалы. Есть колода карточек для использования с"
    ]
  },
  {
    "time": [
      1587.84,
      1592.84
    ],
    "en": [
      "the software ‘Anki’. There will also be a packet tracer practice lab so you can get"
    ],
    "ru": [
      "программное обеспечение «Анки». Там же будет практическая лаборатория по отслеживанию пакетов, чтобы вы могли получить"
    ]
  },
  {
    "time": [
      1592.84,
      1598.87
    ],
    "en": [
      "some hands-on practice. That will be in the next video. Sign up for my mailing list via"
    ],
    "ru": [
      "немного практической практики. Об этом будет в следующем видео. Подпишитесь на мой список рассылки через"
    ]
  },
  {
    "time": [
      1598.87,
      1602.65
    ],
    "en": [
      "the link in the description, and I’ll send you all of the flashcards and packet tracer"
    ],
    "ru": [
      "ссылку в описании, и я пришлю вам все карточки и трассировщик пакетов"
    ]
  },
  {
    "time": [
      1602.65,
      1606.42
    ],
    "en": [
      "lab files for the course."
    ],
    "ru": [
      "lab файлы для курса."
    ]
  },
  {
    "time": [
      1606.42,
      1612.0
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members. To join,"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP. Присоединиться,"
    ]
  },
  {
    "time": [
      1612.0,
      1617.52
    ],
    "en": [
      "please click the ‘Join’ button under the video. Thank you to Kenneth, Seamus, H W,"
    ],
    "ru": [
      "нажмите кнопку «Присоединиться» под видео. Спасибо Кеннету, Симусу, Х.В.,"
    ]
  },
  {
    "time": [
      1617.52,
      1624.39
    ],
    "en": [
      "Brandon, Samil, Aaron, Tech Alameda, Marcel, Kone, Donald, C Mohd, Gustavo, Anthony, Biraj,"
    ],
    "ru": [
      "Брэндон, Самил, Аарон, Тех Аламеда, Марсель, Коне, Дональд, Си Мохд, Густаво, Энтони, Бирадж,"
    ]
  },
  {
    "time": [
      1624.39,
      1630.21
    ],
    "en": [
      "Junhong, Benjamin, Tshepiso, Justin, Prakaash, Nasir, Erlison, Apogee, Marko, Daming, Jhilmar,"
    ],
    "ru": [
      "Джунхонг, Бенджамин, Тшеписо, Джастин, Пракааш, Насир, Эрлисон, Апогей, Марко, Даминг, Джилмар,"
    ]
  },
  {
    "time": [
      1630.21,
      1636.56
    ],
    "en": [
      "Ed, Value, John, Funnydart, Velvijaykum, Mark, Yousif, Boson Software, Devin, Lito, Yonatan,"
    ],
    "ru": [
      "Эд, Вэлью, Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, Boson Software, Девин, Лито, Йонатан,"
    ]
  },
  {
    "time": [
      1636.56,
      1641.57
    ],
    "en": [
      "and Vance. Sorry if I pronounced your name incorrectly, but thank you so much for your"
    ],
    "ru": [
      "и Вэнс. Извините, если я неправильно произнес ваше имя, но большое вам спасибо за ваше"
    ]
  },
  {
    "time": [
      1641.57,
      1648.37
    ],
    "en": [
      "support. This is the list of JCNP-level members at the time of recording by the way, February"
    ],
    "ru": [
      "служба поддержки. Это список участников уровня JCNP на момент записи, кстати, февраль."
    ]
  },
  {
    "time": [
      1648.37,
      1653.8
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
      1648.37,
      1653.8
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
      1653.8,
      1656.85
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
      1656.85,
      1661.72
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
      1661.72,
      1666.73
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
      1666.73,
      1672.4
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
      1672.4,
      1672.4
    ],
    "en": [
      "or Basic Attention Token, tips via the Brave browser. That's all for now."
    ],
    "ru": [
      "или Basic Attention Token, подсказки через браузер Brave. На этом пока все."
    ]
  }
]