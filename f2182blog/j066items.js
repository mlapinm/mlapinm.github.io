let objs = [
  {
    "time": [
      1.28,
      7.76
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is a free,&nbsp; complete course for the CCNA. If you like these&nbsp;&nbsp;"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это бесплатный & nbsp; полный курс CCNA. Если вам нравятся эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      7.76,
      13.6
    ],
    "en": [
      "videos, please subscribe to follow along with the&nbsp; series. Also, please like and leave a comment,&nbsp;&nbsp;"
    ],
    "ru": [
      "видео, подпишитесь, чтобы следить вместе с & nbsp; серии. Также поставьте лайк и оставьте комментарий, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      13.6,
      18.8
    ],
    "en": [
      "and share the video to help spread this&nbsp; free series of videos. Thanks for your help."
    ],
    "ru": [
      "и поделитесь видео, чтобы помочь распространить этот & nbsp; бесплатная серия видеороликов. Спасибо за вашу помощь."
    ]
  },
  {
    "time": [
      18.8,
      25.6
    ],
    "en": [
      "In this video we will cover extended ACLs, access&nbsp; control lists. Everything we covered in Day 34&nbsp;&nbsp;"
    ],
    "ru": [
      "В этом видео мы рассмотрим расширенные списки контроля доступа, доступ & nbsp; контрольные списки. Все, что мы рассмотрели в День 34 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      25.6,
      31.28
    ],
    "en": [
      "about the purpose of ACLs, how they work, how&nbsp; to apply them to interfaces, etc. is the same&nbsp;&nbsp;"
    ],
    "ru": [
      "о назначении списков контроля доступа, о том, как они работают, как & nbsp; применять их к интерфейсам и т. д. то же самое & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      31.28,
      37.36
    ],
    "en": [
      "for extended ACLs. The only difference is that&nbsp; extended ACLs can do more specific matching&nbsp;&nbsp;"
    ],
    "ru": [
      "для расширенных списков ACL. Единственная разница в том, что & nbsp; расширенные списки ACL могут выполнять более точное сопоставление & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      37.36,
      43.28
    ],
    "en": [
      "than standard ACLs, which can only match&nbsp; based on the source IP address of the packet.&nbsp;&nbsp;"
    ],
    "ru": [
      "чем стандартные ACL, которые могут соответствовать только & nbsp; на основе IP-адреса источника пакета. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      43.28,
      48.08
    ],
    "en": [
      "As a reminder, ACLs are topic&nbsp; 5.6 of the exam topics list,&nbsp;&nbsp;"
    ],
    "ru": [
      "Напоминаем, что списки управления доступом являются тематическими & nbsp; 5.6 списка тем экзамена, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      48.08,
      54.24
    ],
    "en": [
      "which states that you must be able to configure&nbsp; and verify access control lists. After this video,&nbsp;&nbsp;"
    ],
    "ru": [
      "в котором говорится, что вы должны иметь возможность настраивать & nbsp; и проверьте списки контроля доступа. После этого видео & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      54.24,
      60.8
    ],
    "en": [
      "you’ll know everything you need to know to&nbsp; answer questions about ACLs on the CCNA exam."
    ],
    "ru": [
      "вы будете знать все, что вам нужно знать, чтобы & nbsp; ответить на вопросы о списках ACL на экзамене CCNA."
    ]
  },
  {
    "time": [
      60.8,
      65.2
    ],
    "en": [
      "Here’s what we’ll cover in today’s video.&nbsp; First up, I’ll show you another way to&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот что мы расскажем в сегодняшнем видео. & Nbsp; Сначала я покажу вам еще один способ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      65.2,
      71.03999999999999
    ],
    "en": [
      "configure numbered ACLs. This applies&nbsp; to both standard and extended ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "настроить нумерованные ACL. Это касается & nbsp; как в стандартные, так и в расширенные списки контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      71.03999999999999,
      75.36
    ],
    "en": [
      "Then I’ll show you how to edit ACLs, in&nbsp; case you want to add or remove specific&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я покажу вам, как редактировать ACL в & nbsp; если вы хотите добавить или удалить определенные & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      75.36,
      82.24
    ],
    "en": [
      "entries in a specific order. Finally I’ll&nbsp; introduce extended numbered and named ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "записи в определенном порядке. Наконец, я & nbsp; ввести расширенные нумерованные и именованные списки контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      82.24,
      86.56
    ],
    "en": [
      "Although the commands are a little longer&nbsp; because they can match based on more variables,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хотя команды немного длиннее & nbsp; поскольку они могут совпадать на основе большего количества переменных, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      86.56,
      91.68
    ],
    "en": [
      "the configuration method in general&nbsp; is the same as for standard ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "метод настройки в целом & nbsp; то же, что и для стандартных списков контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      91.68,
      97.28
    ],
    "en": [
      "As always, watch until the end of the quiz for&nbsp; a bonus question from ExSim for CCNA by Boson&nbsp;&nbsp;"
    ],
    "ru": [
      "Как всегда, смотрите до конца викторины на & nbsp; бонусный вопрос от ExSim для CCNA от Boson & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      97.28,
      104.24000000000001
    ],
    "en": [
      "Software. Boson ExSim simulates the difficulty&nbsp; and style of the real CCNA exam better than any&nbsp;&nbsp;"
    ],
    "ru": [
      "Программное обеспечение. Boson ExSim имитирует сложность & nbsp; и стиль настоящего экзамена CCNA лучше любого & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      104.24000000000001,
      111.75999999999999
    ],
    "en": [
      "other practice exams. If you want to get Boson&nbsp; ExSim, follow the link in the video description."
    ],
    "ru": [
      "другие практические экзамены. Если вы хотите получить Бозон & nbsp; ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      111.75999999999999,
      116.8
    ],
    "en": [
      "Let’s get started. In day 34 you learned that&nbsp; numbered ACLs are configured in global config&nbsp;&nbsp;"
    ],
    "ru": [
      "Давайте начнем. На 34 день вы узнали, что & nbsp; Нумерованные ACL настраиваются в глобальной конфигурации & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      116.8,
      124.64
    ],
    "en": [
      "mode. For example, here’s a simple ACL denying&nbsp; 192.168.1.1 but permitting all other traffic.&nbsp;&nbsp;"
    ],
    "ru": [
      "режим. Например, вот простой ACL, запрещающий & nbsp; 192.168.1.1, но разрешает весь другой трафик. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      124.64,
      130.96
    ],
    "en": [
      "The entries of ACL 1 are configured directly from&nbsp; global config mode with the ACCESS-LIST command.&nbsp;&nbsp;"
    ],
    "ru": [
      "Записи ACL 1 настраиваются непосредственно из & nbsp; режим глобальной конфигурации с помощью команды ACCESS-LIST. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      130.96,
      136.07999999999998
    ],
    "en": [
      "You also learned that named ACLs are configured&nbsp; with subcommands in a different config mode.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы также узнали, что именованные списки управления доступом настраиваются & nbsp; с подкомандами в другом режиме конфигурации. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      136.07999999999998,
      139.92000000000002
    ],
    "en": [
      "Here’s the same ACL, configured as a named ACL.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот тот же ACL, настроенный как именованный ACL. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      139.92000000000002,
      145.6
    ],
    "en": [
      "The IP ACCESS-LIST STANDARD command is used&nbsp; to enter standard named ACL config mode,&nbsp;&nbsp;"
    ],
    "ru": [
      "Используется команда СТАНДАРТНЫЙ СПИСОК ДОСТУПА IP & nbsp; чтобы войти в стандартный именованный режим конфигурации ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      145.6,
      151.68
    ],
    "en": [
      "and then subcommands within that mode&nbsp; are used to configure each entry of the&nbsp;&nbsp;ACL."
    ],
    "ru": [
      "а затем подкоманды в этом режиме & nbsp; используются для настройки каждой записи в & nbsp; & nbsp; ACL."
    ]
  },
  {
    "time": [
      151.68,
      157.52
    ],
    "en": [
      "However, in modern Cisco IOS you can also&nbsp; configure numbered ACLs in the exact same way as&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако в современной Cisco IOS также можно & nbsp; настраивайте нумерованные списки управления доступом точно так же, как и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      157.52,
      164.16
    ],
    "en": [
      "named ACLs. Here’s a numbered ACL, configured&nbsp; in the same way as the named ACL above.&nbsp;&nbsp;"
    ],
    "ru": [
      "именованные ACL. Вот пронумерованный ACL, настроенный & nbsp; таким же образом, как и указанный выше ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      164.16,
      168.07999999999998
    ],
    "en": [
      "Be aware that this is just a different&nbsp; way of configuring numbered ACLs,&nbsp;&nbsp;"
    ],
    "ru": [
      "Имейте в виду, что это просто другой & nbsp; способ настройки нумерованных списков ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      168.07999999999998,
      172.0
    ],
    "en": [
      "but if you check the ACL in the running&nbsp; config it will be displayed as if it&nbsp;&nbsp;"
    ],
    "ru": [
      "но если вы проверите ACL в работающем & nbsp; config он будет отображаться так, как будто он & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      172.0,
      177.52
    ],
    "en": [
      "was configured using the traditional&nbsp; method, directly from global config mode."
    ],
    "ru": [
      "был настроен с использованием традиционного & nbsp; метод, прямо из режима глобальной конфигурации."
    ]
  },
  {
    "time": [
      177.52,
      183.2
    ],
    "en": [
      "Let me demonstrate. From global config&nbsp; mode I entered IP ACCESS-LIST STANDARD and&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне продемонстрировать. Из глобальной конфигурации & nbsp; режим Я вошел в СТАНДАРТНЫЙ СПИСОК ДОСТУПА IP и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      183.2,
      190.0
    ],
    "en": [
      "then checked the options. Notice that both&nbsp; numbered and named ACLs are valid options.&nbsp;&nbsp;"
    ],
    "ru": [
      "затем проверил варианты. Обратите внимание, что оба & nbsp; нумерованные и именованные списки ACL являются допустимыми параметрами. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      190.0,
      195.92
    ],
    "en": [
      "So, I configured ACL 1 using the named ACL&nbsp; configuration method, IP ACCESS-LIST STANDARD&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я настроил ACL 1, используя именованный ACL & nbsp; метод конфигурации, СТАНДАРТНЫЙ СПИСОК ДОСТУПА IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      195.92,
      202.4
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
      195.92,
      202.4
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
      202.4,
      206.88
    ],
    "en": [
      "as if I configured it using the traditional&nbsp; numbered ACL method, configuring the entries&nbsp;&nbsp;"
    ],
    "ru": [
      "как если бы я настроил его с помощью традиционного & nbsp; нумерованный метод ACL, настройка записей & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      206.88,
      212.8
    ],
    "en": [
      "from global config mode. If it ends up being&nbsp; just like a regular numbered ACL, why configure&nbsp;&nbsp;"
    ],
    "ru": [
      "из режима глобальной конфигурации. Если это окажется & nbsp; как и обычный нумерованный ACL, зачем настраивать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      212.8,
      219.44
    ],
    "en": [
      "it in named ACL config mode? Well, there are&nbsp; a few advantages to using this config mode."
    ],
    "ru": [
      "это в названном режиме конфигурации ACL? Что ж, есть & nbsp; несколько преимуществ использования этого режима конфигурации."
    ]
  },
  {
    "time": [
      219.44,
      224.88
    ],
    "en": [
      "Let me show you those advantages. First, you&nbsp; can easily delete individual ACL entries with&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне показать вам эти преимущества. Во-первых, вы & nbsp; можно легко удалить отдельные записи ACL с помощью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      224.88,
      231.76
    ],
    "en": [
      "the command NO, followed by the entry number.&nbsp; Let’s see how that works. First, I used DO SHOW&nbsp;&nbsp;"
    ],
    "ru": [
      "команда NO, за которой следует номер записи. Посмотрим, как это работает. Сначала я использовал DO SHOW & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      231.76,
      237.6
    ],
    "en": [
      "ACCESS-LISTS, and you can see an ACL that I have&nbsp; configured. It has four entries, with sequence&nbsp;&nbsp;"
    ],
    "ru": [
      "СПИСКИ ДОСТУПА, и вы можете увидеть ACL, который у меня есть & nbsp; настроен. Он состоит из четырех записей с последовательностью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      237.6,
      243.6
    ],
    "en": [
      "numbers 10, 20, 30, and 40. These are the default&nbsp; sequence numbers, starting at 10 and increasing&nbsp;&nbsp;"
    ],
    "ru": [
      "числа 10, 20, 30 и 40. Это значения по умолчанию & nbsp; порядковые номера, начиная с 10 и увеличивая & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      243.6,
      250.88
    ],
    "en": [
      "by 10, but remember that in named ACL config mode&nbsp; you can also specify the sequence number manually.&nbsp;&nbsp;"
    ],
    "ru": [
      "на 10, но помните, что в именованном режиме конфигурации ACL & nbsp; вы также можете указать порядковый номер вручную. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      250.88,
      256.88
    ],
    "en": [
      "Okay, then I used the command NO 30&nbsp; from named ACL config mode for ACL 1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, тогда я использовал команду NO 30 & nbsp; из именованного режима конфигурации ACL для ACL 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      256.88,
      261.92
    ],
    "en": [
      "Then I checked the ACL again, and now you&nbsp; can see that entry 30 has been deleted.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я снова проверил ACL, и теперь вы & nbsp; видно, что запись 30 удалена. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      261.92,
      267.12
    ],
    "en": [
      "This is very convenient for editing&nbsp; ACLs. How about when configuring ACLs&nbsp;&nbsp;"
    ],
    "ru": [
      "Это очень удобно для редактирования & nbsp; ACL. Как насчет настройки списков управления доступом & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      267.12,
      271.76
    ],
    "en": [
      "using the traditional numbered ACL&nbsp; method, from global config mode?"
    ],
    "ru": [
      "используя традиционный нумерованный ACL & nbsp; метод, из режима глобальной конфигурации?"
    ]
  },
  {
    "time": [
      271.76,
      278.0
    ],
    "en": [
      "Let’s see how it works. Here’s the same ACL,&nbsp; with the same four entries. I also checked it&nbsp;&nbsp;"
    ],
    "ru": [
      "Посмотрим, как это работает. Вот тот же ACL, & nbsp; с теми же четырьмя записями. Я тоже это проверил & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      278.0,
      284.08
    ],
    "en": [
      "out in the running-config. Then I tried to delete&nbsp; the same entry as before, sequence number 30,&nbsp;&nbsp;"
    ],
    "ru": [
      "в текущей конфигурации. Затем я попытался удалить & nbsp; та же запись, что и раньше, порядковый номер 30, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      284.08,
      294.88
    ],
    "en": [
      "by using NO in front of the command. NO&nbsp; ACCESS-LIST 1 DENY 192.168.3.0 0.0.0.255. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "используя NO перед командой. НЕТ & nbsp; СПИСОК ДОСТУПА 1 ОТКАЗАТЬ 192.168.3.0 0.0.0.255. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      294.88,
      301.36
    ],
    "en": [
      "did that delete that entry? I checked with SHOW&nbsp; ACCESS-LISTS, but nothing appears. Just to make&nbsp;&nbsp;"
    ],
    "ru": [
      "это удалило эту запись? Я проверил с SHOW & nbsp; СПИСКИ ДОСТУПА, но ничего не появляется. Просто чтобы сделать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      301.36,
      307.2
    ],
    "en": [
      "sure I checked the running-config, but again&nbsp; nothing was displayed. I deleted that entry,&nbsp;&nbsp;"
    ],
    "ru": [
      "конечно, я проверил рабочую конфигурацию, но снова & nbsp; ничего не отображалось. Я удалил эту запись, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      307.2,
      312.96
    ],
    "en": [
      "but I didn’t just delete that entry. I deleted&nbsp; the whole ACL! When configuring or editing&nbsp;&nbsp;"
    ],
    "ru": [
      "но я не просто удалил эту запись. Я удалил & nbsp; весь ACL! При настройке или редактировании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      312.96,
      318.32
    ],
    "en": [
      "numbered ACLs from global config mode, you can’t&nbsp; delete individual entries, you can only delete&nbsp;&nbsp;"
    ],
    "ru": [
      "нумерованные ACL из режима глобальной конфигурации, & nbsp; удалять отдельные записи, вы можете удалить только & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      318.32,
      325.36
    ],
    "en": [
      "the entire ACL. So, if you want to edit it you&nbsp; have to delete it and then remake it from zero.&nbsp;&nbsp;"
    ],
    "ru": [
      "весь ACL. Итак, если вы хотите отредактировать его, вы & nbsp; придется удалить его, а затем переделать с нуля. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      325.36,
      332.15999999999997
    ],
    "en": [
      "If an ACL has many entries, this is obviously not&nbsp; a fun task. So, if you want to edit an ACL you&nbsp;&nbsp;"
    ],
    "ru": [
      "Если в ACL много записей, очевидно, что это не & nbsp; интересное задание. Итак, если вы хотите отредактировать ACL, вы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      332.15999999999997,
      338.15999999999997
    ],
    "en": [
      "definitely should use named ACL config mode. Note&nbsp; that, if you prefer, you can configure a numbered&nbsp;&nbsp;"
    ],
    "ru": [
      "определенно следует использовать именованный режим конфигурации ACL. Примечание & nbsp; что при желании вы можете настроить пронумерованный & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      338.15999999999997,
      345.84000000000003
    ],
    "en": [
      "ACL in global config mode, and then just use named&nbsp; ACL config mode when you need to edit the ACL."
    ],
    "ru": [
      "ACL в режиме глобальной конфигурации, а затем просто используйте named & nbsp; Режим конфигурации ACL, когда вам нужно отредактировать ACL."
    ]
  },
  {
    "time": [
      345.84000000000003,
      349.68
    ],
    "en": [
      "Okay, so that’s the first advantage&nbsp; of using named ACL config mode,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это первое преимущество & nbsp; использования именованного режима конфигурации ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      349.68,
      354.64
    ],
    "en": [
      "even if you’re configuring numbered ACLs.&nbsp; You can delete individual entries with NO,&nbsp;&nbsp;"
    ],
    "ru": [
      "даже если вы настраиваете нумерованные списки контроля доступа. & nbsp; Вы можете удалять отдельные записи с NO, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      354.64,
      360.56
    ],
    "en": [
      "followed by the entry number. Here’s another&nbsp; advantage. You can insert new entries in between&nbsp;&nbsp;"
    ],
    "ru": [
      "за которым следует номер записи. Вот еще один & nbsp; преимущество. Вы можете вставлять новые записи между & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      360.56,
      366.88
    ],
    "en": [
      "other entries by specifying the sequence number.&nbsp; When configuring an ACL from global config mode,&nbsp;&nbsp;"
    ],
    "ru": [
      "другие записи, указав порядковый номер. & nbsp; При настройке ACL в режиме глобальной конфигурации & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      366.88,
      372.08
    ],
    "en": [
      "you can’t specify the sequence number. The&nbsp; entry is simply added to the end of the ACL,&nbsp;&nbsp;"
    ],
    "ru": [
      "вы не можете указать порядковый номер. & Nbsp; запись просто добавляется в конец ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      372.08,
      378.0
    ],
    "en": [
      "and the sequence number is automatically set to 10&nbsp; higher than the current highest sequence number.&nbsp;&nbsp;"
    ],
    "ru": [
      "и порядковый номер автоматически устанавливается на 10 & nbsp; выше, чем текущий наибольший порядковый номер. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      378.0,
      382.96
    ],
    "en": [
      "However from named ACL config mode you can&nbsp; set the sequence number, so you can insert&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако из именованного режима конфигурации ACL вы можете & nbsp; установите порядковый номер, чтобы можно было вставить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      382.96,
      389.52
    ],
    "en": [
      "new entries in the middle of an ACL. Let’s&nbsp; take a look. Here’s that same ACL from before,&nbsp;&nbsp;"
    ],
    "ru": [
      "новые записи в середине ACL. Давайте & nbsp; взглянем. Вот тот же ACL из прошлого, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      389.52,
      395.68
    ],
    "en": [
      "after deleting entry 30. Let’s configure&nbsp; a new entry with sequence number 30.&nbsp;&nbsp;"
    ],
    "ru": [
      "после удаления записи 30. Давайте настроим & nbsp; новая запись с порядковым номером 30. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      395.68,
      405.84000000000003
    ],
    "en": [
      "So, I used 30 DENY 192.168.2.0 0.0.0.255 to create&nbsp; a new entry, specifying the sequence number of 30.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, я использовал 30 DENY 192.168.2.0 0.0.0.255 для создания & nbsp; новая запись с порядковым номером 30. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      405.84000000000003,
      411.52
    ],
    "en": [
      "Then I checked the ACL, and you can see the new&nbsp; entry was inserted between entries 20 and 40,&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я проверил ACL, и вы увидите новый & nbsp; запись была вставлена ​​между записями 20 и 40, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      411.52,
      417.12
    ],
    "en": [
      "and it has the sequence number of 30 that I&nbsp; specified. I also checked the running config,&nbsp;&nbsp;"
    ],
    "ru": [
      "и он имеет порядковый номер 30, что I & nbsp; указано. Я также проверил текущую конфигурацию, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      417.12,
      421.12
    ],
    "en": [
      "and notice as I showed you before that it&nbsp; is displayed like the ACL was configured&nbsp;&nbsp;"
    ],
    "ru": [
      "и обратите внимание, как я показал вам ранее, что это & ​​nbsp; отображается так, как будто ACL настроен & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      421.12,
      427.6
    ],
    "en": [
      "in global config mode, and the new entry was&nbsp; inserted between the 2nd and 4th entries. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "в режиме глобальной конфигурации, а новая запись была & nbsp; вставлен между 2-й и 4-й записями. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      427.6,
      435.36
    ],
    "en": [
      "those are a couple advantages of using named ACL&nbsp; config mode even when configuring numbered ACLs."
    ],
    "ru": [
      "таковы несколько преимуществ использования именованных списков контроля доступа & nbsp; config даже при настройке нумерованных списков ACL."
    ]
  },
  {
    "time": [
      435.36,
      439.12
    ],
    "en": [
      "Let me show you one more&nbsp; powerful method of editing ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне показать вам еще один & nbsp; мощный метод редактирования списков ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      439.12,
      443.44
    ],
    "en": [
      "There is a resequencing&nbsp; function that helps edit ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "Есть переупорядочение & nbsp; функция, помогающая редактировать списки контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      443.44,
      450.32
    ],
    "en": [
      "The command is IP ACCESS-LIST RESEQUENCE, followed&nbsp; by the ACL ID, whether that’s a number or a name,&nbsp;&nbsp;"
    ],
    "ru": [
      "Команда - ВОССТАНОВЛЕНИЕ СПИСКА ДОСТУПА IP, за которым следует & nbsp; по идентификатору ACL, будь то номер или имя, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      450.32,
      454.88
    ],
    "en": [
      "and then the starting sequence number and the&nbsp; increment that you want to use to increase the&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем начальный порядковый номер и & nbsp; инкремент, который вы хотите использовать для увеличения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      454.88,
      461.12
    ],
    "en": [
      "sequence numbers. Okay, that might be hard to&nbsp; understand, so let me show you how it works.&nbsp;&nbsp;"
    ],
    "ru": [
      "порядковые номера. Хорошо, это может быть трудно & nbsp; поймите, позвольте мне показать вам, как это работает. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      461.12,
      466.88
    ],
    "en": [
      "Here’s an ACL, but notice the sequence numbers. It&nbsp; seems someone made the bad decision of sequencing&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот ACL, но обратите внимание на порядковые номера. Это & nbsp; Кажется, кто-то принял неправильное решение о секвенировании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      466.88,
      475.12
    ],
    "en": [
      "the entries 1, 2, 3, 4, and 5. Note that the&nbsp; displayed order is 1, 3, 2, 4, 5, but that’s&nbsp;&nbsp;"
    ],
    "ru": [
      "записи 1, 2, 3, 4 и 5. Обратите внимание, что & nbsp; отображаемый порядок: 1, 3, 2, 4, 5, но это & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      475.12,
      482.88
    ],
    "en": [
      "just because of what I explained in the previous&nbsp; video, IOS sometimes reorders the /32 ACL entries.&nbsp;&nbsp;"
    ],
    "ru": [
      "просто из-за того, что я объяснил в предыдущем & nbsp; видео, IOS иногда меняет порядок записей ACL / 32. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      482.88,
      488.08
    ],
    "en": [
      "So, what’s bad about these entry numbers? Well,&nbsp; now it’s impossible to insert an entry in between&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, что плохого в этих входных числах? Что ж, & nbsp; теперь невозможно вставить запись между & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      488.08,
      494.24
    ],
    "en": [
      "the other entries. For example, maybe you want to&nbsp; insert another deny entry somewhere in the middle.&nbsp;&nbsp;"
    ],
    "ru": [
      "другие записи. Например, вы хотите & nbsp; вставьте другую запрещающую запись где-нибудь посередине. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      494.24,
      498.96
    ],
    "en": [
      "However, it’s impossible because there&nbsp; are no free sequence numbers in between.&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако это невозможно, так как & nbsp; между ними нет свободных порядковых номеров. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      498.96,
      506.32
    ],
    "en": [
      "Let’s use the resequence command to fix this.&nbsp; I used the command IP ACCESS-LIST RESEQUENCE 1&nbsp;&nbsp;"
    ],
    "ru": [
      "Давайте воспользуемся командой восстановления последовательности, чтобы исправить это. & Nbsp; Я использовал команду IP ACCESS-LIST RESEQUENCE 1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      506.32,
      512.64
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
      506.32,
      512.64
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
      512.64,
      519.12
    ],
    "en": [
      "is the starting sequence number. It means, change&nbsp; the sequence number of the first entry to 10.&nbsp;&nbsp;"
    ],
    "ru": [
      "- начальный порядковый номер. Это означает, что изменить & nbsp; порядковый номер первой записи - 10. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      519.12,
      524.56
    ],
    "en": [
      "How about the second 10 of the command?&nbsp; It’s the increment. It means, add 10 for&nbsp;&nbsp;"
    ],
    "ru": [
      "Как насчет второй 10 команды? & Nbsp; Это приращение. Это означает, что добавьте 10 для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      524.56,
      530.96
    ],
    "en": [
      "every entry after that, after the first&nbsp; entry. So, I used SHOW ACCESS-LISTS again,&nbsp;&nbsp;"
    ],
    "ru": [
      "каждая запись после этого, после первого & nbsp; Вход. Итак, я снова использовал SHOW ACCESS-LISTS, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      530.96,
      539.12
    ],
    "en": [
      "and the ACL has been resequenced. Note that the&nbsp; same order is kept, DENY 192.168.1.1 at the top,&nbsp;&nbsp;"
    ],
    "ru": [
      "и список ACL был изменен. Обратите внимание, что & nbsp; тот же порядок сохраняется, ОТКАЗАТЬ 192.168.1.1 вверху, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      539.12,
      547.28
    ],
    "en": [
      "then DENY 3.1, then DENY 2.1, then DENY 4.1, and&nbsp; finally PERMIT ANY. However, the sequence numbers&nbsp;&nbsp;"
    ],
    "ru": [
      "затем ОТКАЗАТЬ 3.1, затем ОТКАЗАТЬ 2.1, затем ОТКАЗАТЬ 4.1 и & nbsp; наконец РАЗРЕШЕНИЕ ЛЮБОГО. Однако порядковые номера & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      547.28,
      553.2
    ],
    "en": [
      "have been changed, starting at 10 for the top&nbsp; entry and adding 10 for each entry after that.&nbsp;&nbsp;"
    ],
    "ru": [
      "были изменены, начиная с 10 для верхних & nbsp; запись и добавление 10 для каждой записи после этого. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      553.2,
      559.92
    ],
    "en": [
      "That’s how ACL resequencing works. Now it’s simple&nbsp; to add new entries in between the current entries.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот как работает изменение последовательности ACL. Теперь это просто & nbsp; для добавления новых записей между текущими записями. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      559.92,
      565.2
    ],
    "en": [
      "Note that this command is done from global config&nbsp; mode. It works for numbered and named ACLs,&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что эта команда выполняется из глобальной конфигурации & nbsp; режим. Он работает для пронумерованных и именованных списков контроля доступа, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      565.2,
      570.72
    ],
    "en": [
      "standard and extended ACLs, so all ACLs."
    ],
    "ru": [
      "стандартные и расширенные ACL, поэтому все ACL."
    ]
  },
  {
    "time": [
      570.72,
      577.12
    ],
    "en": [
      "Okay, let’s get to the main part of this&nbsp; lecture, extended ACLs. Extended ACLs function&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, перейдем к основной части & nbsp; лекция, расширенные ACL. Функция расширенных списков контроля доступа & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      577.12,
      583.92
    ],
    "en": [
      "mostly the same as standard ACLs. They can be&nbsp; numbered or named, just like standard ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "в основном такие же, как и стандартные ACL. Они могут быть & nbsp; пронумерованные или именованные, как стандартные ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      583.92,
      588.56
    ],
    "en": [
      "If you configure an extended numbered&nbsp; ACL, you can use the following ranges.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы настроите расширенный нумерованный & nbsp; ACL можно использовать следующие диапазоны. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      588.56,
      596.88
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
      588.56,
      596.88
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
      596.88,
      605.6
    ],
    "en": [
      "Make sure you know the standard ACL ranges&nbsp; from last video too, 1 to 99 and 1300 to 1999.&nbsp;&nbsp;"
    ],
    "ru": [
      "Убедитесь, что вы знаете стандартные диапазоны ACL & nbsp; из последнего видео тоже, с 1 по 99 и с 1300 по 1999. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      605.6,
      610.4
    ],
    "en": [
      "Extended ACLs are processed from top&nbsp; to bottom, just like standard ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "Расширенные ACL обрабатываются сверху & nbsp; вниз, как стандартные списки контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      610.4,
      615.2
    ],
    "en": [
      "However, here’s the big difference. They&nbsp; can match traffic based on more parameters,&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако вот в чем большая разница. Они & nbsp; может соответствовать трафику на основе большего количества параметров, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      615.2,
      620.4
    ],
    "en": [
      "so they are more precise, and&nbsp; more complex, than standard ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "так они более точные, и & nbsp; более сложный, чем стандартные ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      620.4,
      624.88
    ],
    "en": [
      "You can really specify exactly what traffic&nbsp; you want to deny and what traffic you want&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы действительно можете точно указать, какой трафик & nbsp; вы хотите запретить и какой трафик вы хотите & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      624.88,
      631.6
    ],
    "en": [
      "to permit, specific kinds of traffic from&nbsp; specific hosts to specific destinations.&nbsp;&nbsp;"
    ],
    "ru": [
      "разрешить определенные виды трафика от & nbsp; определенные хосты в определенные места назначения. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      631.6,
      636.4
    ],
    "en": [
      "For the purpose of this video, we will&nbsp; focus on matching based on these parameters.&nbsp;&nbsp;"
    ],
    "ru": [
      "Для этого видео мы & nbsp; сосредоточиться на сопоставлении на основе этих параметров. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      636.4,
      643.36
    ],
    "en": [
      "Layer 4 protocol and port number, source IP&nbsp; address, and destination IP address. To configure&nbsp;&nbsp;"
    ],
    "ru": [
      "Протокол уровня 4 и номер порта, исходный IP-адрес & nbsp; адрес и IP-адрес назначения. Чтобы настроить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      643.36,
      650.56
    ],
    "en": [
      "an extended numbered ACL entry from global config&nbsp; mode, the command is ACCESS-LIST, then the number.&nbsp;&nbsp;"
    ],
    "ru": [
      "запись ACL с расширенными номерами из глобальной конфигурации & nbsp; режим, команда - СПИСОК ДОСТУПА, затем номер. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      650.56,
      657.84
    ],
    "en": [
      "Make sure this number is in one of the ranges&nbsp; above, 100 to 199 or 2000 to 2699. Then&nbsp;&nbsp;"
    ],
    "ru": [
      "Убедитесь, что это число находится в одном из диапазонов & nbsp; выше: от 100 до 199 или от 2000 до 2699. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      657.84,
      664.88
    ],
    "en": [
      "PERMIT or DENY. After that you can specify the&nbsp; protocol, such as TCP or UDP, then the source&nbsp;&nbsp;"
    ],
    "ru": [
      "РАЗРЕШИТЬ или ОТКАЗАТЬ. После этого вы можете указать & nbsp; протокол, например TCP или UDP, то исходный & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      664.88,
      672.0
    ],
    "en": [
      "IP address and the destination IP address.&nbsp; How about configuring an extended named ACL?&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адрес и IP-адрес назначения. Как насчет настройки расширенного именованного ACL? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      672.0,
      678.88
    ],
    "en": [
      "It starts with IP ACCESS-LIST EXTENDED, and then&nbsp; the name or number. Just like in standard ACLs,&nbsp;&nbsp;"
    ],
    "ru": [
      "Он начинается с РАСШИРЕННОГО СПИСКА ДОСТУПА IP, а затем & nbsp; имя или номер. Как и в стандартных списках контроля доступа, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      678.88,
      684.0
    ],
    "en": [
      "extended numbered ACLs can also be&nbsp; configured in named ACL config mode.&nbsp;&nbsp;"
    ],
    "ru": [
      "расширенные нумерованные списки ACL также могут быть & nbsp; настроен в именованном режиме конфигурации ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      684.0,
      689.28
    ],
    "en": [
      "Once you’re in extended named ACL config mode,&nbsp; you can specify the permit or deny statements,&nbsp;&nbsp;"
    ],
    "ru": [
      "Когда вы перейдете в расширенный именованный режим конфигурации ACL, & nbsp; вы можете указать заявления о разрешении или отказе, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      689.28,
      695.36
    ],
    "en": [
      "the protocol, source and destination, etc. Because&nbsp; you already know the differences between numbered&nbsp;&nbsp;"
    ],
    "ru": [
      "протокол, источник и место назначения и т. д. Поскольку & nbsp; вы уже знаете различия между пронумерованными & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      695.36,
      701.92
    ],
    "en": [
      "and named ACL configuration, I will just focus on&nbsp; configuring extended ACLs using the named method.&nbsp;&nbsp;"
    ],
    "ru": [
      "и назвал конфигурацию ACL, я просто сосредоточусь на & nbsp; настройка расширенных списков контроля доступа с использованием названного метода. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      701.92,
      707.36
    ],
    "en": [
      "Just don’t forget that you can configure extended&nbsp; numbered ACLs from global config mode, too.&nbsp;&nbsp;"
    ],
    "ru": [
      "Только не забывайте, что вы можете настроить расширенный & nbsp; нумерованные ACL из режима глобальной конфигурации. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      707.36,
      712.88
    ],
    "en": [
      "Now, as I wrote above, extended ACLs are&nbsp; much more complex than standard ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "Как я уже писал выше, расширенные списки ACL - это & ​​nbsp; намного сложнее стандартных списков контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      712.88,
      716.88
    ],
    "en": [
      "There are lots of different variations and&nbsp; options that can be used when configuring&nbsp;&nbsp;"
    ],
    "ru": [
      "Есть много разных вариантов и & nbsp; параметры, которые можно использовать при настройке & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      716.88,
      722.72
    ],
    "en": [
      "the access list entries. I’ll just show you some&nbsp; basic options that you need to know for the CCNA,&nbsp;&nbsp;"
    ],
    "ru": [
      "записи списка доступа. Я просто покажу вам несколько & nbsp; основные параметры, которые вам нужно знать для CCNA, & ​​nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      722.72,
      728.72
    ],
    "en": [
      "but I won’t explore every possible option that can&nbsp; be used. If you want to explore the commands more,&nbsp;&nbsp;"
    ],
    "ru": [
      "но я не буду рассматривать все возможные варианты, которые могут & nbsp; использоваться. Если вы хотите подробнее изучить команды, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      728.72,
      734.56
    ],
    "en": [
      "try it out in a lab and use the question&nbsp; mark to see what options there are."
    ],
    "ru": [
      "испытайте его в лаборатории и ответьте на вопрос & nbsp; отметьте, чтобы увидеть, какие есть варианты."
    ]
  },
  {
    "time": [
      734.56,
      740.88
    ],
    "en": [
      "First I’ll explain how extended ACLs can match&nbsp; based on protocol. From extended named ACL&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я объясню, как расширенные списки контроля доступа могут соответствовать & nbsp; на основе протокола. Из расширенного именованного ACL & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      740.88,
      748.0
    ],
    "en": [
      "config mode, I entered DENY and used the question&nbsp; mark to see the options. Let me point out a few.&nbsp;&nbsp;"
    ],
    "ru": [
      "в режиме конфигурации, я ввел ОТКАЗ и использовал вопрос & nbsp; отметьте, чтобы увидеть варианты. Позвольте мне указать на некоторые из них. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      748.0,
      752.72
    ],
    "en": [
      "First up, you can use an IP protocol&nbsp; number. What’s an IP protocol number?&nbsp;&nbsp;"
    ],
    "ru": [
      "Во-первых, вы можете использовать IP-протокол & nbsp; количество. Что такое номер IP-протокола? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      752.72,
      758.72
    ],
    "en": [
      "Think back to Day 10 of this course, about the&nbsp; IPv4 header. There is a protocol field which&nbsp;&nbsp;"
    ],
    "ru": [
      "Вспомните 10-й день этого курса о & nbsp; Заголовок IPv4. Есть поле протокола, которое & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      758.72,
      765.84
    ],
    "en": [
      "identifies the protocol that is encapsulated&nbsp; inside of the IP header, such as TCP or UDP.&nbsp;&nbsp;"
    ],
    "ru": [
      "определяет инкапсулированный протокол & nbsp; внутри заголовка IP, например TCP или UDP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      765.84,
      770.88
    ],
    "en": [
      "So, you can identify the protocol by&nbsp; the number in the IPv4 protocol field.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вы можете определить протокол по & nbsp; число в поле протокола IPv4. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      770.88,
      776.96
    ],
    "en": [
      "Or, you can use the name of the protocol, options&nbsp; are listed here. Most people prefer the name,&nbsp;&nbsp;"
    ],
    "ru": [
      "Или вы можете использовать название протокола, параметры & nbsp; перечислены здесь. Большинство людей предпочитают имя & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      776.96,
      782.8
    ],
    "en": [
      "since it’s easier to remember, but if you want to&nbsp; use the protocol number here are some examples.&nbsp;&nbsp;"
    ],
    "ru": [
      "так как его легче запомнить, но если вы хотите, чтобы & nbsp; используйте номер протокола вот несколько примеров. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      782.8,
      792.24
    ],
    "en": [
      "IP protocol number 1 is ICMP, 6 is TCP,&nbsp; 17 is UDP, 88 is EIGRP, and 89 is OSPF.&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-протокол номер 1 - ICMP, 6 - TCP, & nbsp; 17 - UDP, 88 - EIGRP и 89 - OSPF. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      792.24,
      797.04
    ],
    "en": [
      "I briefly mentioned some of these earlier in&nbsp; the course. I recommend remembering these five,&nbsp;&nbsp;"
    ],
    "ru": [
      "Я кратко упомянул некоторые из них ранее в & nbsp; курс. Я рекомендую запомнить эти пять, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      797.04,
      802.16
    ],
    "en": [
      "they might come up somewhere on the exam. But&nbsp; as I said, usually you’ll use the protocol&nbsp;&nbsp;"
    ],
    "ru": [
      "они могут прийти где-нибудь на экзамене. Но & nbsp; как я уже сказал, обычно вы будете использовать протокол & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      802.16,
      810.96
    ],
    "en": [
      "name in ACLs. Here you can see EIGRP, ICMP,&nbsp; and OSPF. So, you can use an extended ACL&nbsp;&nbsp;"
    ],
    "ru": [
      "имя в ACL. Здесь вы можете увидеть EIGRP, ICMP, & nbsp; и OSPF. Итак, вы можете использовать расширенный ACL & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      810.96,
      818.32
    ],
    "en": [
      "to block OSPF messages on an interface, for&nbsp; example. Or deny ICMP packets to deny pings.&nbsp;&nbsp;"
    ],
    "ru": [
      "для блокировки сообщений OSPF на интерфейсе для & nbsp; пример. Или запретите пакеты ICMP, чтобы запретить эхо-запросы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      818.32,
      824.88
    ],
    "en": [
      "However, for this lesson we are going to focus&nbsp; on these two, TCP and UDP, as well as one more.&nbsp;&nbsp;"
    ],
    "ru": [
      "Однако в этом уроке мы сосредоточимся на & nbsp; на этих двух TCP и UDP, а также на еще один. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      824.88,
      832.8
    ],
    "en": [
      "That is IP itself. If you use the IP option,&nbsp; it matches all IP packets. We use this option&nbsp;&nbsp;"
    ],
    "ru": [
      "Это и есть IP. Если вы используете IP-адрес, & nbsp; он соответствует всем IP-пакетам. Мы используем этот вариант & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      832.8,
      838.8
    ],
    "en": [
      "when we don’t care about the protocol, we just&nbsp; want to deny or permit all packets. For example,&nbsp;&nbsp;"
    ],
    "ru": [
      "когда нас не волнует протокол, мы просто & nbsp; хотите запретить или разрешить все пакеты. Например, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      838.8,
      846.32
    ],
    "en": [
      "if you want to put a ‘permit any’ statement at the&nbsp; end of an ACL, you would use the IP option here."
    ],
    "ru": [
      "если вы хотите поместить в & nbsp; конец ACL, вы должны использовать здесь опцию IP."
    ]
  },
  {
    "time": [
      846.32,
      851.92
    ],
    "en": [
      "Now let’s see how to add the source and&nbsp; destination IP addresses to this ACL entry. So,&nbsp;&nbsp;"
    ],
    "ru": [
      "Теперь давайте посмотрим, как добавить источник и & nbsp; IP-адреса назначения для этой записи ACL. Итак, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      851.92,
      858.8
    ],
    "en": [
      "I selected TCP as the protocol. So, any IP packets&nbsp; with a TCP segment inside will match this part of&nbsp;&nbsp;"
    ],
    "ru": [
      "Я выбрал TCP в качестве протокола. Итак, любые IP-пакеты & nbsp; с сегментом TCP внутри будет соответствовать этой части & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      858.8,
      865.68
    ],
    "en": [
      "the entry. However, we still have to specify the&nbsp; source and destination IP addresses to match.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вход. Однако нам все равно нужно указать & nbsp; совпадение исходных и целевых IP-адресов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      865.68,
      872.4
    ],
    "en": [
      "Note that, in extended ACLs to specify a /32&nbsp; source or destination you have to use the HOST&nbsp;&nbsp;"
    ],
    "ru": [
      "Обратите внимание, что в расширенных списках ACL для указания / 32 & nbsp; источник или место назначения вы должны использовать HOST & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      872.4,
      878.72
    ],
    "en": [
      "option or specify the wildcard mask. You can’t&nbsp; just write the address without either of those.&nbsp;&nbsp;"
    ],
    "ru": [
      "вариант или укажите маску подстановки. Вы не можете & nbsp; просто напишите адрес без этих слов. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      878.72,
      883.44
    ],
    "en": [
      "In standard ACLs that is&nbsp; possible, but not extended.&nbsp;&nbsp;"
    ],
    "ru": [
      "В стандартных списках ACL это & ​​nbsp; возможно, но не продлено. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      883.44,
      888.48
    ],
    "en": [
      "Okay, so I decided to use ANY to match all&nbsp; source IP addresses. Now we can specify&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, поэтому я решил использовать ЛЮБОЙ, чтобы сопоставить все & nbsp; исходные IP-адреса. Теперь мы можем указать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      888.48,
      894.0
    ],
    "en": [
      "the destination IP address. There are many more&nbsp; options here related to the Layer 4 port number,&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адрес назначения. Есть еще много & nbsp; параметры здесь относятся к номеру порта уровня 4, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      894.0,
      899.52
    ],
    "en": [
      "but I’ll cover that later. So, for the&nbsp; destination address these are the options,&nbsp;&nbsp;"
    ],
    "ru": [
      "но я расскажу об этом позже. Итак, для & nbsp; адрес назначения это варианты, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      899.52,
      906.8
    ],
    "en": [
      "the destination address, ANY, or HOST to specify&nbsp; a single destination. I decided to specify the&nbsp;&nbsp;"
    ],
    "ru": [
      "адрес назначения, ЛЮБОЙ или HOST, чтобы указать & nbsp; единый пункт назначения. Решил указать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      906.8,
      915.36
    ],
    "en": [
      "destination 10.0.0.0, and now I have to enter the&nbsp; wildcard mask. I specified a /24 wildcard mask,&nbsp;&nbsp;"
    ],
    "ru": [
      "пункт назначения 10.0.0.0, и теперь мне нужно ввести & nbsp; подстановочная маска. Я указал подстановочную маску / 24, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      915.36,
      921.52
    ],
    "en": [
      "and now this entry is complete. So, what is the&nbsp; function of this entry? It will deny all packets&nbsp;&nbsp;"
    ],
    "ru": [
      "и теперь эта запись завершена. Итак, что такое & nbsp; функция этой записи? Он отклонит все пакеты & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      921.52,
      930.56
    ],
    "en": [
      "that encapsulate a TCP segment, from any source&nbsp; IP address to destination network 10.0.0.0/24.&nbsp;&nbsp;"
    ],
    "ru": [
      "которые инкапсулируют сегмент TCP из любого источника & nbsp; IP-адрес сети назначения 10.0.0.0/24.&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      930.56,
      935.44
    ],
    "en": [
      "This is just a single entry, of course, to&nbsp; write a complete ACL we would probably add&nbsp;&nbsp;"
    ],
    "ru": [
      "Конечно, это всего лишь одна запись в & nbsp; напишите полный список контроля доступа, который мы, вероятно, добавили бы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      935.44,
      942.8
    ],
    "en": [
      "more entries after this, but now I want you to&nbsp; practice writing a few extended ACL entries."
    ],
    "ru": [
      "после этого будет еще несколько записей, но теперь я хочу, чтобы вы & nbsp; попрактикуйтесь в написании нескольких расширенных записей ACL."
    ]
  },
  {
    "time": [
      942.8,
      947.2
    ],
    "en": [
      "Here are a few practice questions.&nbsp; These aren’t entries in the same ACL,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот несколько практических вопросов. & Nbsp; Это разные записи в одном ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      947.2,
      952.4
    ],
    "en": [
      "just individual entries so you can&nbsp; practice writing entries for extended ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "только отдельные записи, чтобы вы могли & nbsp; попрактикуйтесь в написании записей для расширенных списков контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      952.4,
      959.04
    ],
    "en": [
      "If you can, pause the video and try to write out&nbsp; each entry on your own before I show the answers.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если можете, поставьте видео на паузу и попробуйте записать & nbsp; каждая запись сама по себе, прежде чем я покажу ответы. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      959.04,
      964.32
    ],
    "en": [
      "Okay, let’s check each one, number 1 first.&nbsp; How can you write an extended ACL entry that&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте сначала проверим каждую, номер 1. & nbsp; Как можно написать расширенную запись ACL, которая & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      964.32,
      972.4
    ],
    "en": [
      "permits all traffic? The answer is PERMIT IP&nbsp; ANY ANY. We use IP to match all protocols,&nbsp;&nbsp;"
    ],
    "ru": [
      "разрешает весь трафик? Ответ: РАЗРЕШИТЬ IP & nbsp; ЛЮБОЙ ЛЮБОЙ. Мы используем IP для соответствия всем протоколам, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      972.4,
      978.08
    ],
    "en": [
      "and then we can use ANY for both the source&nbsp; and destination to match all IP addresses.&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем мы можем использовать ЛЮБОЙ как для источника & nbsp; и пункт назначения для соответствия всем IP-адресам. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      978.08,
      986.96
    ],
    "en": [
      "This is like PERMIT ANY in a standard ACL.&nbsp; Okay, how about number 2? Prevent 10.0.0.0/16&nbsp;&nbsp;"
    ],
    "ru": [
      "Это похоже на РАЗРЕШЕНИЕ ЛЮБОГО в стандартном ACL. & Nbsp; Хорошо, а как насчет номера 2? Предотвратить 10.0.0.0/16&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      986.96,
      999.6
    ],
    "en": [
      "from sending UDP traffic to 192.168.1.1/32.&nbsp; Here’s the answer, DENY UDP 10.0.0.0 0.0.255.255&nbsp;&nbsp;"
    ],
    "ru": [
      "от отправки UDP-трафика на 192.168.1.1/32.&nbsp; Вот ответ: ОТКАЗАТЬ UDP 10.0.0.0 0.0.255.255 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      999.6,
      1006.4
    ],
    "en": [
      "HOST 192.168.1.1. Instead of HOST, another&nbsp; option is to write out the wildcard mask at&nbsp;&nbsp;"
    ],
    "ru": [
      "ХОСТ 192.168.1.1. Вместо HOST другой & nbsp; вариант - записать маску подстановки в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1006.4,
      1015.92
    ],
    "en": [
      "the end instead, 0.0.0.0. Next let’s&nbsp; check number 3. Prevent 172.16.1.1/32&nbsp;&nbsp;"
    ],
    "ru": [
      "конец вместо 0.0.0.0. Теперь давайте & nbsp; проверка № 3. Предотвращение 172.16.1.1/32&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1015.92,
      1024.88
    ],
    "en": [
      "from pinging hosts in 192.168.0.0/24. What&nbsp; protocol does ping use? Let’s check the answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "от пинговых хостов в 192.168.0.0/24. Что & nbsp; протокол использует пинг? Давайте проверим ответ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1024.88,
      1032.64
    ],
    "en": [
      "DENY ICMP, that’s the protocol for ping. I&nbsp; said we’ll focus on the TCP, UDP, and IP options,&nbsp;&nbsp;"
    ],
    "ru": [
      "ОТКАЗАТЬ ICMP, это протокол для проверки связи. Я & NBSP; сказал, что мы сосредоточимся на вариантах TCP, UDP и IP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1032.64,
      1040.48
    ],
    "en": [
      "but still make sure you’re aware that ICMP&nbsp; is used for ping. Then HOST 172.16.1.1&nbsp;&nbsp;"
    ],
    "ru": [
      "но все же убедитесь, что вы знаете, что ICMP & nbsp; используется для пинга. Затем HOST 172.16.1.1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1040.48,
      1050.8
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
      1040.48,
      1050.8
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
      1050.8,
      1056.8
    ],
    "en": [
      "Okay, we’ll do some more practice later&nbsp; but for now let’s go a little deeper."
    ],
    "ru": [
      "Хорошо, мы еще попрактикуемся позже & nbsp; а пока давайте немного глубже."
    ]
  },
  {
    "time": [
      1056.8,
      1063.52
    ],
    "en": [
      "So let’s talk about matching TCP and UDP port&nbsp; numbers. When you specify TCP or UDP as the&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте поговорим о сопоставлении портов TCP и UDP & nbsp; числа. Когда вы указываете TCP или UDP в качестве & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1063.52,
      1070.56
    ],
    "en": [
      "protocol to match, you can optionally specify the&nbsp; source and/or destination port numbers to match.&nbsp;&nbsp;"
    ],
    "ru": [
      "протокол для сопоставления, вы можете дополнительно указать & nbsp; номера портов источника и / или назначения для сопоставления. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1070.56,
      1075.28
    ],
    "en": [
      "This is optional, if you just specify&nbsp; TCP or UDP without the port numbers,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это необязательно, если вы просто укажете & nbsp; TCP или UDP без номеров портов, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1075.28,
      1080.0
    ],
    "en": [
      "all port numbers will be matched. So, here’s&nbsp; the command without specifying the port&nbsp;&nbsp;"
    ],
    "ru": [
      "все номера портов будут совпадать. Итак, вот & nbsp; команда без указания порта & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1080.0,
      1088.0
    ],
    "en": [
      "numbers. I chose ‘DENY TCP’, but of course this&nbsp; works with PERMIT statements and with UDP as well.&nbsp;&nbsp;"
    ],
    "ru": [
      "числа. Я выбрал «ОТКАЗАТЬ TCP», но, конечно, это & ​​nbsp; работает с операторами PERMIT, а также с UDP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1088.0,
      1093.2
    ],
    "en": [
      "If you want to specify the source TCP or&nbsp; UDP port, you specify it after the source&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы хотите указать исходный TCP или & nbsp; Порт UDP, вы указываете его после источника & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1093.2,
      1100.08
    ],
    "en": [
      "IP address and wildcard mask like this. EQ,&nbsp; followed by the source port is just one option.&nbsp;&nbsp;"
    ],
    "ru": [
      "IP-адрес и маска с подстановочными знаками вроде этого. Эквалайзер, & NBSP; за которым следует исходный порт - это всего лишь один из вариантов."
    ]
  },
  {
    "time": [
      1100.08,
      1107.04
    ],
    "en": [
      "For example, EQ 80 means equal to port&nbsp; 80, so it matches TCP source port 80.&nbsp;&nbsp;"
    ],
    "ru": [
      "Например, EQ 80 означает, что порт & nbsp; 80, поэтому он соответствует порту источника TCP 80. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1107.04,
      1113.68
    ],
    "en": [
      "Another option is GT, greater than. For example&nbsp; GT 80 matches all ports greater than 80,&nbsp;&nbsp;"
    ],
    "ru": [
      "Другой вариант - GT, больше. Например, & nbsp; GT 80 соответствует всем портам больше 80, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1113.68,
      1121.68
    ],
    "en": [
      "so 81 and up. There is also LT, less than.&nbsp; LT 80 matches all port numbers less than 80,&nbsp;&nbsp;"
    ],
    "ru": [
      "так 81 и выше. Также есть LT, меньше. & Nbsp; LT 80 соответствует всем номерам портов меньше 80, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1121.68,
      1130.72
    ],
    "en": [
      "so 79 and below. NEQ is not equal, so for&nbsp; example NEQ 80 matches all ports except 80.&nbsp;&nbsp;"
    ],
    "ru": [
      "так 79 и ниже. NEQ не равен, поэтому для & nbsp; пример NEQ 80 соответствует всем портам, кроме 80. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1130.72,
      1138.8
    ],
    "en": [
      "The final option is RANGE, for example RANGE&nbsp; 80 100 matches all port numbers from 80 to 100.&nbsp;&nbsp;"
    ],
    "ru": [
      "Последний вариант - ДИАПАЗОН, например ДИАПАЗОН & nbsp; 80 100 соответствует всем номерам портов от 80 до 100. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1138.8,
      1143.2
    ],
    "en": [
      "After the destination IP address, the same&nbsp; options are available to match the destination&nbsp;&nbsp;"
    ],
    "ru": [
      "После IP-адреса назначения то же самое & nbsp; доступны варианты, соответствующие пункту назначения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1143.2,
      1150.4
    ],
    "en": [
      "port number. Although you should know these&nbsp; different options, EQ, GT, LT, NEQ, and RANGE, the&nbsp;&nbsp;"
    ],
    "ru": [
      "номер порта. Хотя вы должны знать эти & nbsp; различные параметры, EQ, GT, LT, NEQ и RANGE, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1150.4,
      1156.56
    ],
    "en": [
      "most common choice is EQ, to match traffic for a&nbsp; specific port number. Hopefully you remember these&nbsp;&nbsp;"
    ],
    "ru": [
      "наиболее распространенным выбором является EQ, чтобы соответствовать трафику для & nbsp; конкретный номер порта. Надеюсь, вы помните эти & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1156.56,
      1163.84
    ],
    "en": [
      "port numbers from Day 30 of the course. If not, I&nbsp; recommend taking the time now to learn them again."
    ],
    "ru": [
      "номера портов с 30-го дня курса. В противном случае я & nbsp; рекомендую потратить время, чтобы изучить их снова."
    ]
  },
  {
    "time": [
      1163.84,
      1169.6
    ],
    "en": [
      "So, in this example I didn’t specify the host&nbsp; port, I just entered DENY TCP ANY, and then went&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, в этом примере я не указал хост & nbsp; порт, я просто ввел ОТКАЗАТЬ TCP ЛЮБОЙ, а затем пошел & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1169.6,
      1177.84
    ],
    "en": [
      "straight to the destination IP, HOST 1.1.1.1. Then&nbsp; I entered EQ to match a specific port, and you can&nbsp;&nbsp;"
    ],
    "ru": [
      "прямо на IP-адрес назначения, HOST 1.1.1.1. Тогда & nbsp; Я ввел эквалайзер в соответствии с конкретным портом, и вы можете & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1177.84,
      1184.32
    ],
    "en": [
      "see the options below. You can enter the specific&nbsp; port number, or you can enter the keyword instead,&nbsp;&nbsp;"
    ],
    "ru": [
      "см. варианты ниже. Вы можете ввести конкретный & nbsp; номер порта или введите вместо него ключевое слово & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1184.32,
      1191.68
    ],
    "en": [
      "such as WWW to match HTTP, which is port 80. Lots&nbsp; of common port numbers don’t have a keyword here&nbsp;&nbsp;"
    ],
    "ru": [
      "например, WWW для соответствия HTTP, который является портом 80. Много & nbsp; общих номеров портов здесь нет ключевого слова & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1191.68,
      1199.44
    ],
    "en": [
      "you can use, though, so make sure you learn the&nbsp; actual numbers. So, I entered port 80, for HTTP.&nbsp;&nbsp;"
    ],
    "ru": [
      "тем не менее, вы можете использовать его, поэтому обязательно изучите & nbsp; фактические цифры. Итак, я ввел порт 80 для HTTP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1199.44,
      1207.2
    ],
    "en": [
      "What is the effect of this ACL entry? It denies&nbsp; all packets destined for IP address 1.1.1.1/32,&nbsp;&nbsp;"
    ],
    "ru": [
      "Каков эффект этой записи ACL? Он отрицает & nbsp; все пакеты, предназначенные для IP-адреса 1.1.1.1/32,&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1207.2,
      1213.12
    ],
    "en": [
      "TCP port 80. Okay, in the next I’ll have&nbsp; you practice writing some more ACL entries,&nbsp;&nbsp;"
    ],
    "ru": [
      "TCP-порт 80. Хорошо, в следующий раз у меня будет & nbsp; вы попрактиковались в написании еще нескольких записей ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1213.12,
      1218.48
    ],
    "en": [
      "but let me say one more point. After the&nbsp; destination IP address and/or destination&nbsp;&nbsp;"
    ],
    "ru": [
      "но позвольте мне сказать еще одно замечание. После & nbsp; IP-адрес назначения и / или назначения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1218.48,
      1223.76
    ],
    "en": [
      "port numbers, there are many more options&nbsp; you can use to match in an extended ACL.&nbsp;&nbsp;"
    ],
    "ru": [
      "номера портов, есть еще много вариантов & nbsp; можно использовать для сопоставления в расширенном ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1223.76,
      1230.88
    ],
    "en": [
      "These aren’t necessary to learn for the CCNA, but&nbsp; some options are ACK, to match the TCP ACK flag.&nbsp;&nbsp;"
    ],
    "ru": [
      "Их не нужно изучать для CCNA, но & nbsp; некоторые параметры - ACK, чтобы соответствовать флагу TCP ACK. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1230.88,
      1236.8
    ],
    "en": [
      "FIN, to match the TCP FIN flag.&nbsp; SYN, to match the TCP SYN flag.&nbsp;&nbsp;"
    ],
    "ru": [
      "FIN, чтобы соответствовать флагу TCP FIN. & Nbsp; SYN, чтобы соответствовать флагу TCP SYN. ​​& Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1236.8,
      1245.6
    ],
    "en": [
      "TTL, to match packets with a specific TTL, time to&nbsp; live, value in the IPv4 header. And DSCP, to match&nbsp;&nbsp;"
    ],
    "ru": [
      "TTL, чтобы соответствовать пакетам с определенным TTL, время до & nbsp; live, значение в заголовке IPv4. И DSCP, чтобы соответствовать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1245.6,
      1253.04
    ],
    "en": [
      "packets with a specific DSCP, differentiated&nbsp; services code point, value in the IPv4 header.&nbsp;&nbsp;"
    ],
    "ru": [
      "пакеты с определенным DSCP, дифференцированным & nbsp; кодовая точка служб, значение в заголовке IPv4. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1253.04,
      1258.88
    ],
    "en": [
      "Finally, note that if you specify the protocol,&nbsp; source IP, source port, destination IP,&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, обратите внимание, что если вы укажете протокол, & nbsp; исходный IP-адрес, исходный порт, целевой IP-адрес, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1258.88,
      1265.76
    ],
    "en": [
      "destination port, etc, a packet must match ALL&nbsp; of those values to match the ACL entry. Even if&nbsp;&nbsp;"
    ],
    "ru": [
      "порт назначения и т. д., пакет должен соответствовать ВСЕМ & nbsp; этих значений, чтобы соответствовать записи ACL. Даже если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1265.76,
      1271.84
    ],
    "en": [
      "it matches all except one of the parameters,&nbsp; the packet won’t match that entry of the ACL.&nbsp;&nbsp;"
    ],
    "ru": [
      "он соответствует всем параметрам, кроме одного, & nbsp; пакет не будет соответствовать этой записи ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1271.84,
      1278.32
    ],
    "en": [
      "So, extended ACLs let you be very specific&nbsp; about what traffic you want to match."
    ],
    "ru": [
      "Итак, расширенные списки ACL позволяют вам быть очень конкретными & nbsp; о том, какой трафик вы хотите сопоставить."
    ]
  },
  {
    "time": [
      1278.32,
      1283.12
    ],
    "en": [
      "Okay, here’s some more practice for writing&nbsp; individual extended ACL entries. I recommend&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот еще несколько упражнений по написанию & nbsp; отдельные расширенные записи ACL. Я рекомендую & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1283.12,
      1289.6
    ],
    "en": [
      "pausing the video to try to solve these yourself,&nbsp; but now let’s check the answers. Number 1, allow&nbsp;&nbsp;"
    ],
    "ru": [
      "приостановить видео, чтобы попытаться решить эту проблему самостоятельно, & nbsp; а теперь давайте проверим ответы. Номер 1, разрешить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1289.6,
      1300.4
    ],
    "en": [
      "traffic from 10.0.0.0/16 to access the server at&nbsp; 2.2.2.2/32 using HTTPS. And here’s the answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "трафик из 10.0.0.0/16 для доступа к серверу по адресу & nbsp; 2.2.2.2/32 с использованием HTTPS. И вот ответ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1300.4,
      1307.84
    ],
    "en": [
      "PERMIT TCP, because we need to match HTTPS,&nbsp; which uses TCP. Then the source IP address is&nbsp;&nbsp;"
    ],
    "ru": [
      "РАЗРЕШИТЬ TCP, потому что нам нужно согласовать HTTPS, & nbsp; который использует TCP. Тогда исходный IP-адрес & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1307.84,
      1318.0
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
      1307.84,
      1318.0
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
      1318.0,
      1324.56
    ],
    "en": [
      "I used a /32 wildcard mask, but you can&nbsp; use HOST 2.2.2.2 instead, of course.&nbsp;&nbsp;"
    ],
    "ru": [
      "Я использовал подстановочную маску / 32, но вы можете & nbsp; используйте вместо него HOST 2.2.2.2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1324.56,
      1333.92
    ],
    "en": [
      "Finally, I used EQ 443 to match only HTTPS, which&nbsp; uses TCP port 443. Okay, that’s number one. Next,&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, я использовал EQ 443 для соответствия только HTTPS, который & nbsp; использует TCP-порт 443. Хорошо, это номер один. Затем & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1333.92,
      1340.72
    ],
    "en": [
      "number 2. Prevent all hosts from using&nbsp; source UDP port numbers from 20000 to 30000&nbsp;&nbsp;"
    ],
    "ru": [
      "номер 2. Запретить всем хостам использовать & nbsp; исходные номера портов UDP от 20000 до 30000 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1340.72,
      1350.08
    ],
    "en": [
      "from accessing the server at 3.3.3.3/32. And&nbsp; here’s the answer. DENY UDP ANY RANGE 20000&nbsp;&nbsp;"
    ],
    "ru": [
      "от доступа к серверу на 3.3.3.3/32. И & NBSP; вот ответ. ОТКАЗАТЬ UDP В ЛЮБОМ ДИАПАЗОНЕ 20000 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1350.08,
      1359.6
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
      1350.08,
      1359.6
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
      1359.6,
      1370.0
    ],
    "en": [
      "with a destination of 3.3.3.3. Okay, finally&nbsp; number 3. Allow hosts in 172.16.1.0/24 using a&nbsp;&nbsp;"
    ],
    "ru": [
      "с направлением 3.3.3.3. Хорошо, наконец, & nbsp; номер 3. Разрешить хосты в 172.16.1.0/24 с помощью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1370.0,
      1381.52
    ],
    "en": [
      "TCP source port greater than 9999 to access all&nbsp; TCP ports on server 4.4.4.4/32 except port 23.&nbsp;&nbsp;"
    ],
    "ru": [
      "Порт источника TCP больше 9999 для доступа ко всем & nbsp; TCP-порты на сервере 4.4.4.4/32, кроме порта 23. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1381.52,
      1389.12
    ],
    "en": [
      "Here’s the answer. The protocol is&nbsp; TCP, the source IP is 172.16.1.0/24,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот ответ. Протокол & nbsp; TCP, исходный IP-адрес 172.16.1.0/24,&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1389.12,
      1398.88
    ],
    "en": [
      "the source port is anything greater than 9999, the&nbsp; destination IP is 4.4.4.4/32, and the destination&nbsp;&nbsp;"
    ],
    "ru": [
      "исходный порт может быть больше 9999, & nbsp; IP-адрес назначения - 4.4.4.4/32, а IP-адрес назначения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1398.88,
      1407.6
    ],
    "en": [
      "port is anything except 23. Quite a specific&nbsp; entry, but that’s the power of extended ACLs."
    ],
    "ru": [
      "порт может быть любым, кроме 23. Довольно специфический & nbsp; запись, но в этом вся сила расширенных списков ACL."
    ]
  },
  {
    "time": [
      1407.6,
      1413.68
    ],
    "en": [
      "Okay, let’s return to our network from Day 34&nbsp; to configure and apply a few extended ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давайте вернемся к нашей сети с 34-го дня & nbsp; для настройки и применения нескольких расширенных списков контроля доступа. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1413.68,
      1423.2
    ],
    "en": [
      "Here are the requirements. Hosts in&nbsp; 192.168.1.0/24 can’t use HTTPS to access SRV1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот требования. Хосты в & nbsp; 192.168.1.0/24 не может использовать HTTPS для доступа к SRV1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1423.2,
      1434.16
    ],
    "en": [
      "Host in 192.168.2.0/24 can’t access 10.0.2.0/24.&nbsp; And none of the hosts in 192.168.1.0/24&nbsp;&nbsp;"
    ],
    "ru": [
      "Хост в 192.168.2.0/24 не может получить доступ к 10.0.2.0/24.&nbsp; И ни один из хостов в 192.168.1.0/24&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1434.16,
      1444.48
    ],
    "en": [
      "or 2.0/24 can ping 10.0.1.0/24 or 2.0/24.&nbsp; So, we’ll use one ACL each to fulfill these&nbsp;&nbsp;"
    ],
    "ru": [
      "или 2.0 / 24 может пинговать 10.0.1.0/24 или 2.0 / 24. & nbsp; Итак, мы будем использовать по одному списку ACL для выполнения этих & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1444.48,
      1450.48
    ],
    "en": [
      "requirements, and in this case they will all&nbsp; be on R1, I’ll explain why soon. First I’ll&nbsp;&nbsp;"
    ],
    "ru": [
      "требования, и в этом случае они все & nbsp; будь на R1, я скоро объясню почему. Сначала я & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1450.48,
      1460.0
    ],
    "en": [
      "configure an ACL for this requirement, hosts in&nbsp; 192.168.1.0/24 can’t use HTTPS to access SRV 1.&nbsp;&nbsp;"
    ],
    "ru": [
      "настроить ACL для этого требования, хосты в & nbsp; 192.168.1.0/24 не может использовать HTTPS для доступа к SRV 1. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1460.0,
      1466.16
    ],
    "en": [
      "Here’s the ACL. After entering extended named&nbsp; ACL config mode, I made a deny statement that&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот ACL. После ввода расширенного имени & nbsp; В режиме конфигурации ACL я сделал отрицательное заявление, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1466.16,
      1476.08
    ],
    "en": [
      "matches TCP traffic coming from 192.168.1.0/24.&nbsp; The destination IP address is 10.0.1.100/32,&nbsp;&nbsp;"
    ],
    "ru": [
      "соответствует TCP-трафику из 192.168.1.0/24.&nbsp; IP-адрес назначения: 10.0.1.100/32,&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1476.08,
      1484.16
    ],
    "en": [
      "SRV1, and the destination port is 443, which&nbsp; is HTTPS. That fulfills the requirement.&nbsp;&nbsp;"
    ],
    "ru": [
      "SRV1, а порт назначения - 443, что & nbsp; это HTTPS. Это соответствует требованиям. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1484.16,
      1491.28
    ],
    "en": [
      "Then I used PERMIT IP ANY ANY to allow all other&nbsp; traffic. Okay, that’s the ACL, but now we have&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем я использовал PERMIT IP ANY ANY, чтобы разрешить всем другим & nbsp; движение. Хорошо, это ACL, но теперь у нас есть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1491.28,
      1498.32
    ],
    "en": [
      "to apply it to an interface. Which interface&nbsp; should we apply it to, and in which direction?&nbsp;&nbsp;"
    ],
    "ru": [
      "применить его к интерфейсу. Какой интерфейс & nbsp; к чему его применять и в каком направлении? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1498.32,
      1503.76
    ],
    "en": [
      "For standard ACLs, the rule is to apply them&nbsp; as close to the destination as possible.&nbsp;&nbsp;"
    ],
    "ru": [
      "К стандартным спискам ACL применяется правило & nbsp; как можно ближе к месту назначения. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1503.76,
      1507.84
    ],
    "en": [
      "Why is that? It’s because standard&nbsp; ACLs aren’t very specific,&nbsp;&nbsp;"
    ],
    "ru": [
      "Это почему? Это потому, что стандартные & nbsp; ACL не очень конкретны, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1507.84,
      1514.08
    ],
    "en": [
      "they only match the source IP address. So, if you&nbsp; apply them close to that source, you’ll probably&nbsp;&nbsp;"
    ],
    "ru": [
      "они соответствуют только исходному IP-адресу. Итак, если вы & nbsp; примените их близко к этому источнику, вы, вероятно, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1514.08,
      1519.44
    ],
    "en": [
      "block more traffic than intended. Because&nbsp; extended ACLs are much more specific,&nbsp;&nbsp;"
    ],
    "ru": [
      "заблокировать больше трафика, чем предполагалось. Потому что & nbsp; расширенные списки ACL гораздо более конкретны, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1519.44,
      1525.76
    ],
    "en": [
      "the rule is the opposite. Extended ACLs should&nbsp; be applied as close to the source as possible,&nbsp;&nbsp;"
    ],
    "ru": [
      "правило противоположное. Расширенные списки ACL должны & nbsp; наносить как можно ближе к источнику, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1525.76,
      1531.12
    ],
    "en": [
      "to limit how far the packets travel in the network&nbsp; before being denied. Because they can be very&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы ограничить дальность передачи пакетов в сети & nbsp; до отказа. Потому что они могут быть очень & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1531.12,
      1536.96
    ],
    "en": [
      "specific, if configured correctly there isn’t much&nbsp; risk of blocking more traffic than you intended.&nbsp;&nbsp;"
    ],
    "ru": [
      "конкретный, при правильной настройке не так много & nbsp; риск блокировки большего объема трафика, чем вы планировали. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1536.96,
      1540.8
    ],
    "en": [
      "So, you should apply them close to the&nbsp; source, so routers don’t waste resources&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вы должны нанести их рядом с & nbsp; источник, поэтому маршрутизаторы не тратят впустую ресурсы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1540.8,
      1547.2
    ],
    "en": [
      "processing packets that will just be dropped.&nbsp; So, which interface should we apply this ACL to,&nbsp;&nbsp;"
    ],
    "ru": [
      "обработка пакетов, которые будут отброшены. & nbsp; Итак, к какому интерфейсу следует применить этот ACL, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1547.2,
      1555.44
    ],
    "en": [
      "where is the source? We should apply it inbound on&nbsp; R1’s G0/1 interface. So, if a PC in this network&nbsp;&nbsp;"
    ],
    "ru": [
      "где источник? Мы должны применить его входящий & nbsp; Интерфейс G0 / 1 R1. Итак, если ПК в этой сети & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1555.44,
      1563.28
    ],
    "en": [
      "tries to access SRV1 using HTTPS, the&nbsp; packet will be dropped right away at R1."
    ],
    "ru": [
      "пытается получить доступ к SRV1 с помощью HTTPS, & nbsp; пакет будет сброшен сразу на R1."
    ]
  },
  {
    "time": [
      1563.28,
      1573.2
    ],
    "en": [
      "Next up, let’s fulfill that second requirement,&nbsp; hosts in 192.168.2.0/24 can’t access 10.0.2.0/24.&nbsp;&nbsp;"
    ],
    "ru": [
      "А теперь давайте выполним второе требование: & nbsp; хосты в 192.168.2.0/24 не могут получить доступ к 10.0.2.0/24.&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1573.2,
      1579.04
    ],
    "en": [
      "Again, I’ll create a new ACL on R1. Of course,&nbsp; if you think you’re ready, pause the video&nbsp;&nbsp;"
    ],
    "ru": [
      "Опять же, я создам новый ACL на R1. Конечно, & nbsp; если вы думаете, что готовы, приостановите видео & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1579.04,
      1585.6
    ],
    "en": [
      "and try to write out the ACL yourself. But&nbsp; I’ll show you my solution now. Here it is.&nbsp;&nbsp;"
    ],
    "ru": [
      "и попробуйте сами выписать ACL. Но & nbsp; Я покажу вам свое решение. Вот он. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1585.6,
      1590.0
    ],
    "en": [
      "Specifying IP as the protocol basically&nbsp; matches all packets, anything with an&nbsp;&nbsp;"
    ],
    "ru": [
      "Указание IP в качестве протокола в основном & nbsp; соответствует всем пакетам, все, что имеет тег & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1590.0,
      1600.72
    ],
    "en": [
      "IP header. Then I simply specified the source,&nbsp; 192.168.2.0/24, and then destination, 10.0.2.0/24.&nbsp;&nbsp;"
    ],
    "ru": [
      "Заголовок IP. Затем я просто указал источник, & nbsp; 192.168.2.0/24, а затем пункт назначения, 10.0.2.0/24.&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1600.72,
      1605.44
    ],
    "en": [
      "Finally I added PERMIT IP ANY&nbsp; ANY to allow all other traffic.&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, я добавил РАЗРЕШИТЬ IP ЛЮБОЙ & nbsp; ЛЮБОЙ, чтобы разрешить весь другой трафик. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1605.44,
      1611.2
    ],
    "en": [
      "So, which interface should this ACL be applied&nbsp; to? Remember, extended ACLs should be applied as&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, к какому интерфейсу следует применять этот ACL & nbsp; к? Помните, что расширенные списки управления доступом следует применять как & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1611.2,
      1619.12
    ],
    "en": [
      "close to the source as possible. In this case,&nbsp; the source is 192.168.2.0/24, so I applied the&nbsp;&nbsp;"
    ],
    "ru": [
      "как можно ближе к источнику. В этом случае & nbsp; источник - 192.168.2.0/24, поэтому я применил & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1619.12,
      1627.12
    ],
    "en": [
      "ACL inbound on R1’s G0/2 interface. Okay, now&nbsp; the second requirement has been fulfilled."
    ],
    "ru": [
      "Входящий ACL на интерфейсе G0 / 2 маршрутизатора R1. Хорошо, а теперь & nbsp; второе требование выполнено."
    ]
  },
  {
    "time": [
      1627.12,
      1636.64
    ],
    "en": [
      "Finally, the third requirement. None of the hosts&nbsp; in 192.168.1.0/24 or 2.0/24 can ping 10.0.1.0/24&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, третье требование. Ни один из хостов & nbsp; в 192.168.1.0/24 или 2.0 / 24 можно пинговать 10.0.1.0/24&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1636.64,
      1644.24
    ],
    "en": [
      "or 2.0/24. So, what protocol does ping use? We&nbsp; should deny that protocol, and make a few entries&nbsp;&nbsp;"
    ],
    "ru": [
      "или 2.0 / 24. Итак, какой протокол использует пинг? Мы & NBSP; должен отклонить этот протокол и сделать несколько записей & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1644.24,
      1649.76
    ],
    "en": [
      "to specify each source and destination. Pause the&nbsp; video if you want to try it out, but here’s my&nbsp;&nbsp;"
    ],
    "ru": [
      "чтобы указать каждый источник и место назначения. Приостановите & nbsp; видео, если хотите попробовать, но вот мои & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1649.76,
      1658.72
    ],
    "en": [
      "solution. So, I created three deny entries that&nbsp; match ICMP, two for source IP 192.168.1.0/24,&nbsp;&nbsp;"
    ],
    "ru": [
      "решение. Итак, я создал три запрещающих записи, которые & nbsp; соответствовать ICMP, два для IP-адреса источника 192.168.1.0/24,&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      1658.72,
      1667.44
    ],
    "en": [
      "but only one for 192.168.2.0/24. Why is that? It’s&nbsp; because in the previous ACL we already blocked all&nbsp;&nbsp;"
    ],
    "ru": [
      "но только один для 192.168.2.0/24. Это почему? Это & nbsp; потому что в предыдущем ACL мы уже заблокировали все & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1667.44,
      1676.48
    ],
    "en": [
      "traffic from 192.168.2.0/24 to 10.0.2.0/24,&nbsp; so we don’t need to include it in this ACL.&nbsp;&nbsp;"
    ],
    "ru": [
      "трафик с 192.168.2.0/24 на 10.0.2.0/24,&nbsp; поэтому нам не нужно включать его в этот ACL. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1676.48,
      1680.0
    ],
    "en": [
      "If you included it, it’s not a problem of&nbsp; course, but I just wanted to show you that&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы его включили, это не проблема & nbsp; конечно, но я просто хотел показать вам, что & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1680.0,
      1687.52
    ],
    "en": [
      "it’s not necessary. At the end of the ACL, I once&nbsp; again included a PERMIT IP ANY ANY statement.&nbsp;&nbsp;"
    ],
    "ru": [
      "это необязательно. В конце ACL я один раз & nbsp; снова включил РАЗРЕШЕНИЕ IP ЛЮБОГО ЛЮБОГО утверждения. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1687.52,
      1693.12
    ],
    "en": [
      "Which interface should this ACL be applied to,&nbsp; and in which direction? We should prevent hosts&nbsp;&nbsp;"
    ],
    "ru": [
      "К какому интерфейсу следует применять этот ACL, & nbsp; и в каком направлении? Мы должны запретить хостам & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1693.12,
      1701.6
    ],
    "en": [
      "in both 192.168.1.0/24 and 2.0/24 from reaching&nbsp; the servers’ networks. So, I think the best&nbsp;&nbsp;"
    ],
    "ru": [
      "как в 192.168.1.0/24, так и в 2.0 / 24 от достижения & nbsp; сети серверов. Итак, я считаю лучшим & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1701.6,
      1712.64
    ],
    "en": [
      "option is here, outbound on G0/0. This way the&nbsp; ACL applies to both 192.168.1.0/24 and 2.0/24."
    ],
    "ru": [
      "вариант здесь, исходящий на G0 / 0. Таким образом & nbsp; ACL применяется как к 192.168.1.0/24, так и к 2.0 / 24."
    ]
  },
  {
    "time": [
      1712.64,
      1715.76
    ],
    "en": [
      "So, here are the three ACLs I just configured.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, вот три ACL, которые я только что настроил. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1715.76,
      1720.32
    ],
    "en": [
      "As I have said before, ACL configuration&nbsp; can be quite flexible, so this isn’t the&nbsp;&nbsp;"
    ],
    "ru": [
      "Как я уже сказал, конфигурация ACL & nbsp; может быть довольно гибким, поэтому это не & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1720.32,
      1725.84
    ],
    "en": [
      "only solution that works. Actually, this is&nbsp; definitely not the most efficient solution.&nbsp;&nbsp;"
    ],
    "ru": [
      "единственное решение, которое работает. Собственно, это & ​​nbsp; определенно не самое эффективное решение. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1725.84,
      1730.72
    ],
    "en": [
      "If you want a challenge, try to make a more&nbsp; efficient solution, that uses less ACLs or&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы хотите бросить вызов, попробуйте сделать больше & nbsp; эффективное решение, использующее меньше списков контроля доступа или & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1730.72,
      1738.8
    ],
    "en": [
      "less entries, and fulfills the requirements. If&nbsp; you can find one, post it in the comment section!"
    ],
    "ru": [
      "меньше записей и соответствует требованиям. Если & nbsp; вы можете найти его, разместите его в разделе комментариев!"
    ]
  },
  {
    "time": [
      1738.8,
      1742.8
    ],
    "en": [
      "Finally, here’s how to check which&nbsp; ACLs are applied to an interface.&nbsp;&nbsp;"
    ],
    "ru": [
      "Наконец, вот как узнать, какие & nbsp; ACL применяются к интерфейсу. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1742.8,
      1749.28
    ],
    "en": [
      "The command is SHOW IP INTERFACE, then the&nbsp; interface name. We often use SHOW IP INTERFACE&nbsp;&nbsp;"
    ],
    "ru": [
      "Команда - ПОКАЗАТЬ IP-ИНТЕРФЕЙС, затем & nbsp; имя интерфейса. Мы часто используем SHOW IP INTERFACE & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1749.28,
      1754.8
    ],
    "en": [
      "BRIEF, but the regular version of the command&nbsp; without BRIEF gives us more information. This&nbsp;&nbsp;"
    ],
    "ru": [
      "КРАТКОЕ, но обычная версия команды & nbsp; без BRIEF дает нам больше информации. Это & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1754.8,
      1760.96
    ],
    "en": [
      "is just part of the output, it’s quite long so I&nbsp; cut it off. Here’s the part I wanted to show you.&nbsp;&nbsp;"
    ],
    "ru": [
      "является лишь частью вывода, он довольно длинный, поэтому я & nbsp; отрезать это. Вот часть, которую я хотел вам показать. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1760.96,
      1765.04
    ],
    "en": [
      "Here you can see which ACL is applied&nbsp; outbound and which is applied inbound,&nbsp;&nbsp;"
    ],
    "ru": [
      "Здесь вы можете увидеть, какой ACL применен & nbsp; исходящий и применяемый к входящему, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1765.04,
      1769.44
    ],
    "en": [
      "or if there is no applied ACL it&nbsp; just says ‘not set’. Of course,&nbsp;&nbsp;"
    ],
    "ru": [
      "или если нет примененного ACL, это & ​​nbsp; просто говорит \"не установлено\". Конечно, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1769.44,
      1773.36
    ],
    "en": [
      "you can also check in the running config,&nbsp; but it’s always good to know other commands,&nbsp;&nbsp;"
    ],
    "ru": [
      "вы также можете проверить текущую конфигурацию, & nbsp; но всегда полезно знать другие команды, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1773.36,
      1782.24
    ],
    "en": [
      "both for the exam and for ‘real-world’ purposes.&nbsp; So, remember that command, SHOW IP INTERFACE."
    ],
    "ru": [
      "как для экзамена, так и для \"реальных\" целей. & nbsp; Итак, запомните эту команду, ПОКАЗАТЬ IP-ИНТЕРФЕЙС."
    ]
  },
  {
    "time": [
      1782.24,
      1786.8
    ],
    "en": [
      "Before moving on to the quiz, let’s&nbsp; review what we covered in today’s video.&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте & nbsp; просмотрите то, что мы рассмотрели в сегодняшнем видео. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1786.8,
      1791.76
    ],
    "en": [
      "First I showed you another way to configure&nbsp; numbered ACLs. Basically, you can configure&nbsp;&nbsp;"
    ],
    "ru": [
      "Сначала я показал вам другой способ настройки & nbsp; пронумерованные ACL. По сути, вы можете настроить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1791.76,
      1798.8
    ],
    "en": [
      "numbered ACLs in named ACL config mode. What is&nbsp; the big advantage of that? It’s editing ACLs.&nbsp;&nbsp;"
    ],
    "ru": [
      "нумерованные ACL в именованном режиме конфигурации ACL. Что такое & nbsp; большое преимущество этого? Это редактирование списков контроля доступа. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1798.8,
      1804.72
    ],
    "en": [
      "Named ACL config mode lets you delete individual&nbsp; ACL entries, and specify the sequence number of&nbsp;&nbsp;"
    ],
    "ru": [
      "Режим конфигурации именованного ACL позволяет удалять отдельные & nbsp; Записи ACL и укажите порядковый номер & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1804.72,
      1810.8
    ],
    "en": [
      "new entries to insert them in the middle of an&nbsp; ACL. Then I showed you extended numbered and named&nbsp;&nbsp;"
    ],
    "ru": [
      "новые записи, чтобы вставить их в середину & ​​nbsp; ACL. Затем я показал вам расширенный номер и имя & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1810.8,
      1817.52
    ],
    "en": [
      "ACLs. Extended ACLs are much more powerful than&nbsp; standard ACLs, as they can match traffic based on&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL. Расширенные списки ACL намного мощнее, чем & nbsp; стандартные списки ACL, так как они могут соответствовать трафику на основе & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1817.52,
      1824.24
    ],
    "en": [
      "protocol, source and destination IP addresses,&nbsp; source and destination port numbers, etc.&nbsp;&nbsp;"
    ],
    "ru": [
      "протокол, IP-адреса источника и назначения, & nbsp; номера портов источника и назначения и т. д. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1824.24,
      1828.48
    ],
    "en": [
      "This makes them more complex to configure, but&nbsp; you just need some practice to get comfortable&nbsp;&nbsp;"
    ],
    "ru": [
      "Это усложняет их настройку, но & nbsp; вам просто нужна практика, чтобы освоиться & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1828.48,
      1834.4
    ],
    "en": [
      "with them. Remember to watch until the end of&nbsp; the quiz for a bonus question from ExSim for CCNA&nbsp;&nbsp;"
    ],
    "ru": [
      "с ними. Не забудьте посмотреть до конца & nbsp; тест на бонусный вопрос от ExSim для CCNA & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1834.4,
      1843.36
    ],
    "en": [
      "by Boson Software, the best practice exams for the&nbsp; CCNA. Okay, let’s go to question 1 of the quiz."
    ],
    "ru": [
      "от Boson Software, лучшие практические экзамены для & nbsp; CCNA. Хорошо, перейдем к первому вопросу викторины."
    ]
  },
  {
    "time": [
      1843.36,
      1847.28
    ],
    "en": [
      "Which ACL, when applied outbound on R1’s G0/0,&nbsp;&nbsp;"
    ],
    "ru": [
      "Какой ACL применяется для исходящего трафика на G0 / 0 маршрутизатора R1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1847.28,
      1854.16
    ],
    "en": [
      "permits only PC1 to access the TFTP server&nbsp; on SRV1? Below there are four extended ACLs,&nbsp;&nbsp;"
    ],
    "ru": [
      "разрешает доступ к TFTP-серверу только ПК1 & nbsp; на SRV1? Ниже представлены четыре расширенных ACL: & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1854.16,
      1863.28
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
      1854.16,
      1863.28
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
      1863.28,
      1870.88
    ],
    "en": [
      "Okay, the answer is 103. Entry 10 permits&nbsp; UDP traffic from PC1 to access port 69,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, ответ - 103. Вход 10 разрешает & nbsp; UDP-трафик от ПК1 к порту 69, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1870.88,
      1875.52
    ],
    "en": [
      "TFTP, on SRV1. Note that,&nbsp; when entering this command,&nbsp;&nbsp;"
    ],
    "ru": [
      "TFTP на SRV1. Обратите внимание, что & nbsp; при вводе этой команды & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1875.52,
      1882.0
    ],
    "en": [
      "I actually entered the port number of 69,&nbsp; but IOS automatically converted it to TFTP.&nbsp;&nbsp;"
    ],
    "ru": [
      "На самом деле я ввел номер порта 69, & nbsp; но IOS автоматически преобразовал его в TFTP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1882.0,
      1889.76
    ],
    "en": [
      "Then, entry 20 denies all other hosts from sending&nbsp; UDP traffic to port 69 on SRV1. Finally, entry 30&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем запись 20 запрещает всем остальным хостам отправлять & nbsp; UDP-трафик на порт 69 на SRV1. Наконец, запись 30 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1889.76,
      1896.48
    ],
    "en": [
      "permits all other traffic. ACL 102 is similar, but&nbsp; instead of specifying the port on the destination,&nbsp;&nbsp;"
    ],
    "ru": [
      "разрешает весь другой трафик. ACL 102 аналогичен, но & nbsp; вместо указания порта в пункте назначения & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1896.48,
      1904.32
    ],
    "en": [
      "SRV1, it specifies the source port, which&nbsp; is incorrect. Okay, let’s go to question 2."
    ],
    "ru": [
      "SRV1, он указывает исходный порт, который & nbsp; это неверно. Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      1904.32,
      1912.0
    ],
    "en": [
      "What effect will the following command have on&nbsp; ACL1? Here is the command, NO ACCESS-LIST 1 DENY&nbsp;&nbsp;"
    ],
    "ru": [
      "Какое влияние окажет следующая команда на & nbsp; ACL1? Вот команда NO ACCESS-LIST 1 DENY & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1912.0,
      1922.88
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
      1912.0,
      1922.88
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
      1922.88,
      1929.84
    ],
    "en": [
      "B, ACL 1 will be deleted. C, the command&nbsp; will not work, it will be rejected. Or D,&nbsp;&nbsp;"
    ],
    "ru": [
      "B, ACL 1 будет удален. C, команда & nbsp; не сработает, будет отклонено. Или D, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1929.84,
      1939.28
    ],
    "en": [
      "traffic to 10.0.2.0/24 will be permitted.&nbsp; Pause the video to think about your answer."
    ],
    "ru": [
      "трафик на 10.0.2.0/24 будет разрешен. & nbsp; Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      1939.28,
      1945.12
    ],
    "en": [
      "The answer is B, ACL 1 will be deleted.&nbsp; Configuring numbered ACLs from global config&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ - B, ACL 1 будет удален. & Nbsp; Настройка нумерованных списков ACL из глобальной конфигурации & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1945.12,
      1950.64
    ],
    "en": [
      "mode does not allow you to delete individual&nbsp; entries. Even if you specify a certain entry with&nbsp;&nbsp;"
    ],
    "ru": [
      "режим не позволяет удалять отдельные & nbsp; записи. Даже если вы укажете определенную запись с помощью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1950.64,
      1956.88
    ],
    "en": [
      "the NO command, the entire ACL will be deleted.&nbsp; If you want to delete an individual entry,&nbsp;&nbsp;"
    ],
    "ru": [
      "команда NO, весь ACL будет удален. & nbsp; Если вы хотите удалить отдельную запись, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1956.88,
      1963.6
    ],
    "en": [
      "you’ll need to use named ACL config&nbsp; mode. Okay, let’s go to question 3."
    ],
    "ru": [
      "вам нужно будет использовать именованную конфигурацию ACL & nbsp; режим. Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      1963.6,
      1967.68
    ],
    "en": [
      "Which command was used to resequence ACL 199?&nbsp;&nbsp;"
    ],
    "ru": [
      "Какая команда использовалась для изменения последовательности ACL 199? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1967.68,
      1974.0
    ],
    "en": [
      "Here’s ACL 199 before being resequenced.&nbsp; And here it is after. Here are the commands,&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот список ACL 199 до изменения последовательности. & Nbsp; И вот оно после. Вот команды, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1974.0,
      1982.08
    ],
    "en": [
      "which one was used to resequence ACL 199?&nbsp; Pause the video to think about the answer."
    ],
    "ru": [
      "какой из них использовался для изменения последовательности ACL 199? & nbsp; Поставьте видео на паузу, чтобы подумать над ответом."
    ]
  },
  {
    "time": [
      1982.08,
      1991.04
    ],
    "en": [
      "The answer is C, IP ACCESS-LIST RESEQUENCE&nbsp; 199 5 10. After IP ACCESS-LIST RESEQUENCE,&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ: C, СОПРОТИВЛЕНИЕ СПИСКА ДОСТУПА IP & nbsp; 199 5 10. После ПОВТОРЕНИЯ СПИСКА ДОСТУПА IP, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1991.04,
      1996.56
    ],
    "en": [
      "you must specify the name, the new sequence number&nbsp; of the top entry, and then the increment used&nbsp;&nbsp;"
    ],
    "ru": [
      "необходимо указать имя, новый порядковый номер & nbsp; верхней записи, а затем использованное приращение & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      1996.56,
      2001.04
    ],
    "en": [
      "to increase the sequence number of the&nbsp; following entries. This command tells&nbsp;&nbsp;"
    ],
    "ru": [
      "для увеличения порядкового номера & nbsp; следующие записи. Эта команда сообщает & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2001.04,
      2006.72
    ],
    "en": [
      "the router to use 5 for the first entry, and&nbsp; then increase it by 10 for entries after that,&nbsp;&nbsp;"
    ],
    "ru": [
      "маршрутизатор должен использовать 5 для первой записи и & nbsp; затем увеличьте его на 10 для записей после этого, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2006.72,
      2018.0
    ],
    "en": [
      "so from 1, 2, 3, 4, and 5 it became 5, 15,&nbsp; 25, 35, and 45. Let’s go to question 4."
    ],
    "ru": [
      "поэтому из 1, 2, 3, 4 и 5 получилось 5, 15, & nbsp; 25, 35 и 45. Перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      2018.0,
      2024.48
    ],
    "en": [
      "Which of the following ACLs would prevent&nbsp; R1 from forwarding OSPF packets out of G0/2?&nbsp;&nbsp;"
    ],
    "ru": [
      "Какие из следующих списков контроля доступа предотвратят & nbsp; R1 от пересылки пакетов OSPF из G0 / 2? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2024.48,
      2032.96
    ],
    "en": [
      "Below are ACLs 110 to 113. Pause the&nbsp; video to think about your answer."
    ],
    "ru": [
      "Ниже приведены списки ACL с 110 по 113. Приостановите & nbsp; видео, чтобы обдумать свой ответ."
    ]
  },
  {
    "time": [
      2032.96,
      2040.32
    ],
    "en": [
      "The answer is ACL 112. Its first entry&nbsp; denies protocol number 89, which is OSPF.&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответ - ACL 112. Его первая запись & nbsp; отвергает протокол номер 89, который является OSPF. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2040.32,
      2046.48
    ],
    "en": [
      "PERMIT IP ANY ANY is added to allow other&nbsp; packets, and then it is applied outbound on G0/2,&nbsp;&nbsp;"
    ],
    "ru": [
      "РАЗРЕШИТЬ IP ЛЮБОЙ добавлен, чтобы разрешить другим & nbsp; пакетов, а затем применяется исходящий на G0 / 2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2046.48,
      2051.44
    ],
    "en": [
      "so R1 won’t forward OSPF packets&nbsp; out of that interface. By the way,&nbsp;&nbsp;"
    ],
    "ru": [
      "поэтому R1 не будет пересылать пакеты OSPF & nbsp; из этого интерфейса. Кстати, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2051.44,
      2063.68
    ],
    "en": [
      "protocol number 88 from ACLs 111 and 113 is EIGRP,&nbsp; not OSPF. Okay, let’s move on to question 5."
    ],
    "ru": [
      "номер протокола 88 из списков ACL 111 и 113 - EIGRP, & nbsp; не OSPF. Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      2063.68,
      2068.96
    ],
    "en": [
      "ACL 150 isn’t having the intended&nbsp; effect. How can it be fixed to deny&nbsp;&nbsp;"
    ],
    "ru": [
      "ACL 150 не имеет предполагаемого & nbsp; эффект. Как это исправить, чтобы запретить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2068.96,
      2078.72
    ],
    "en": [
      "HTTP and HTTPS traffic from 192.168.1.0/24&nbsp; to 10.0.2.0/24, but allow other traffic?&nbsp;&nbsp;"
    ],
    "ru": [
      "HTTP и HTTPS трафик из 192.168.1.0/24&nbsp; до 10.0.2.0/24, но разрешить другой трафик? & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2078.72,
      2086.56
    ],
    "en": [
      "Select two. Okay, so you can see ACL 150 and the&nbsp; network topology below. Here are the options.&nbsp;&nbsp;"
    ],
    "ru": [
      "Выберите два. Хорошо, теперь вы видите ACL 150 и & nbsp; топология сети ниже. Вот варианты. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2086.56,
      2093.04
    ],
    "en": [
      "A, swap the source and destination IPs.&nbsp; B, move the PERMIT IP ANY ANY statement&nbsp;&nbsp;"
    ],
    "ru": [
      "A, поменяйте местами исходный и целевой IP-адреса. & Nbsp; B, переместите РАЗРЕШЕНИЕ IP ЛЮБОЙ ЛЮБОЙ оператор & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2093.04,
      2100.08
    ],
    "en": [
      "to the beginning of the ACL. C, apply&nbsp; the ACL inbound on G0/1, not outbound.&nbsp;&nbsp;"
    ],
    "ru": [
      "в начало ACL. C, примените & nbsp; входящий ACL на G0 / 1, а не исходящий. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2100.08,
      2108.96
    ],
    "en": [
      "D, apply the ACL inbound on G0/0, not G0/1.&nbsp; E, the protocol should be TCP, not UDP.&nbsp;&nbsp;"
    ],
    "ru": [
      "D, примените входящий ACL к G0 / 0, а не к G0 / 1. & nbsp; E, протокол должен быть TCP, а не UDP. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2108.96,
      2119.12
    ],
    "en": [
      "Or F, the port numbers should be 88 and 404. Pause&nbsp; the video to think about your answers, select two."
    ],
    "ru": [
      "Или F, номера портов должны быть 88 и 404. Приостановить & nbsp; видео, чтобы подумать над своими ответами, выберите два."
    ]
  },
  {
    "time": [
      2119.12,
      2124.8
    ],
    "en": [
      "The answers are C and E. The ACL should be&nbsp; applied inbound because we are trying to filter&nbsp;&nbsp;"
    ],
    "ru": [
      "Ответы: C и E. ACL должен быть & nbsp; применен входящий, потому что мы пытаемся отфильтровать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2124.8,
      2133.92
    ],
    "en": [
      "traffic entering the G0/1 interface from the&nbsp; 192.168.1.0/24 subnet. So, C is correct. Also,&nbsp;&nbsp;"
    ],
    "ru": [
      "трафик, поступающий в интерфейс G0 / 1 из & nbsp; 192.168.1.0/24 подсеть. Итак, C правильный. Кроме того, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2133.92,
      2142.72
    ],
    "en": [
      "HTTP and HTTPS both use TCP as their Layer&nbsp; 4 protocol, not UDP. So E is also correct.&nbsp;&nbsp;"
    ],
    "ru": [
      "HTTP и HTTPS используют TCP в качестве уровня & nbsp; 4, а не UDP. Значит, E тоже правильно. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2142.72,
      2151.52
    ],
    "en": [
      "Okay, that’s all for the quiz. Now let’s do&nbsp; a bonus question from Boson ExSim for CCNA."
    ],
    "ru": [
      "Ладно, это все для викторины. А теперь займемся & nbsp; бонусный вопрос от Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2151.52,
      2156.32
    ],
    "en": [
      "Okay, here's today's Boson ExSim practice&nbsp; question. We have a network here connected&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот сегодняшняя практика Boson ExSim & nbsp; вопрос. Здесь подключена сеть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2156.32,
      2162.4
    ],
    "en": [
      "to the Internet. We have Router1, and three&nbsp; servers. Music Server1, Music Server2,&nbsp;&nbsp;"
    ],
    "ru": [
      "в Интернет. У нас есть Router1 и три & nbsp; серверы. Музыкальный сервер1, Музыкальный сервер2, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2162.4,
      2169.6
    ],
    "en": [
      "and a web server. Here's the question. You have&nbsp; been hired as a consultant for Music World Corp.&nbsp;&nbsp;"
    ],
    "ru": [
      "и веб-сервер. Вот вопрос. У вас есть & nbsp; был нанят консультантом в Music World Corp. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2169.6,
      2174.8
    ],
    "en": [
      "You need to limit access from the Internet&nbsp; to the music download servers, Music Server1&nbsp;&nbsp;"
    ],
    "ru": [
      "Вам необходимо ограничить доступ из Интернета & nbsp; к серверам загрузки музыки, Music Server1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2174.8,
      2181.84
    ],
    "en": [
      "and Music Server2. These two servers should&nbsp; only allow FTP connections from the Internet.&nbsp;&nbsp;"
    ],
    "ru": [
      "и музыкальный сервер2. Эти два сервера должны & nbsp; разрешать FTP-соединения только из Интернета. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2181.84,
      2187.6
    ],
    "en": [
      "The web server is not subject to this policy&nbsp; and should not be restricted. Other servers&nbsp;&nbsp;"
    ],
    "ru": [
      "Веб-сервер не подпадает под действие этой политики & nbsp; и не должно быть ограничено. Другие серверы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2187.6,
      2192.8
    ],
    "en": [
      "on the 10.10.10.0/24 subnet should not&nbsp; allow any connections from the Internet.&nbsp;&nbsp;"
    ],
    "ru": [
      "в подсети 10.10.10.0/24 не должно & nbsp; разрешить любые подключения из Интернета. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2192.8,
      2199.68
    ],
    "en": [
      "You have already issued the access-list 101&nbsp; permit tcp any host 10.10.10.20 command and&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы уже оформили список доступа 101 & nbsp; allow tcp any host 10.10.10.20 команда и & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2199.68,
      2208.8
    ],
    "en": [
      "applied the access list outbound on the F0/0&nbsp; interface. Okay, so this ACL entry here,&nbsp;&nbsp;"
    ],
    "ru": [
      "применил исходящий список доступа на F0 / 0 & nbsp; интерфейс. Итак, эта запись ACL здесь, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2208.8,
      2216.16
    ],
    "en": [
      "permit TCP any host 10.10.10.20, satisfies this&nbsp; part of the requirements. The web server is not&nbsp;&nbsp;"
    ],
    "ru": [
      "разрешить TCP любой хост 10.10.10.20, удовлетворяет этому & nbsp; часть требований. Веб-сервер не является & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2216.16,
      2220.88
    ],
    "en": [
      "subject to this policy and should not be&nbsp; restricted. So that requirement is already&nbsp;&nbsp;"
    ],
    "ru": [
      "подпадают под эту политику и не должны быть & nbsp; ограниченный. Итак, это требование уже выполнено & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2220.88,
      2227.36
    ],
    "en": [
      "fulfilled. So, what requirement do we have&nbsp; to fulfill? It's this one here. You need to&nbsp;&nbsp;"
    ],
    "ru": [
      "выполнено. Итак, какие требования у нас есть & nbsp; выполнить? Это здесь. Вам нужно & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2227.36,
      2232.08
    ],
    "en": [
      "limit access from the Internet to the music&nbsp; download servers. These two servers should&nbsp;&nbsp;"
    ],
    "ru": [
      "ограничить доступ из Интернета к музыке & nbsp; скачать серверы. Эти два сервера должны & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2232.08,
      2238.8
    ],
    "en": [
      "allow only FTP connections from the Internet.&nbsp; Okay, so here are the options. We have A, B,&nbsp;&nbsp;"
    ],
    "ru": [
      "разрешать только FTP-соединения из Интернета. & nbsp; Хорошо, вот варианты. У нас есть A, B, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2238.8,
      2249.84
    ],
    "en": [
      "C, and D. So, pause the video, look at these four&nbsp; access list entries, and select the best answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "C и D. Итак, поставьте видео на паузу и посмотрите эти четыре & nbsp; доступ к записям списка и выберите лучший ответ. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2249.84,
      2257.2
    ],
    "en": [
      "Okay, let's check. So, I think the correct answer&nbsp; is A, and let me explain. So, we want to permit&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, давай проверим. Итак, думаю, правильный ответ & nbsp; это А, и позвольте мне объяснить. Итак, мы хотим разрешить & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2257.2,
      2264.08
    ],
    "en": [
      "FTP connections to Music Server1 and Music&nbsp; Server2. So we're permitting any source IP&nbsp;&nbsp;"
    ],
    "ru": [
      "FTP-подключения к Music Server1 и Music & nbsp; Сервер2. Таким образом, мы разрешаем любой исходный IP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2264.08,
      2272.8
    ],
    "en": [
      "address, so anything from the Internet, so connect&nbsp; to 10.10.10.0, this is /30. So that includes&nbsp;&nbsp;"
    ],
    "ru": [
      "адрес, так что что угодно из Интернета, поэтому подключите & nbsp; до 10.10.10.0 это / 30. Итак, это включает & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2272.8,
      2280.48
    ],
    "en": [
      "Music Server1 and Music Server2. But it&nbsp; doesn't include Web Server, for example. And&nbsp;&nbsp;"
    ],
    "ru": [
      "Музыкальный сервер1 и Музыкальный сервер2. Но это & ​​nbsp; не включает, например, веб-сервер. И & NBSP; & NBSP;"
    ]
  },
  {
    "time": [
      2280.48,
      2288.56
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
      2280.48,
      2288.56
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
      2288.56,
      2294.72
    ],
    "en": [
      "after that on this access list there would be a&nbsp; implicit deny, so that denies all other traffic.&nbsp;&nbsp;"
    ],
    "ru": [
      "после этого в этом списке доступа будет & nbsp; неявный отказ, чтобы запрещать весь другой трафик. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2294.72,
      2301.2
    ],
    "en": [
      "So I think that satisfies the requirements. We are&nbsp; allowing all TCP connections to the web server,&nbsp;&nbsp;"
    ],
    "ru": [
      "Я думаю, что это удовлетворяет требованиям. Мы & NBSP; разрешение всех TCP-подключений к веб-серверу, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2301.2,
      2307.04
    ],
    "en": [
      "and we are allowing only FTP connections to Music&nbsp; Server1 and Music Server2, and then the implicit&nbsp;&nbsp;"
    ],
    "ru": [
      "и мы разрешаем только FTP-подключения к музыке & nbsp; Server1 и Music Server2, а затем неявный & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2307.04,
      2314.72
    ],
    "en": [
      "deny blocks all other traffic. Okay, so let's&nbsp; check the answer. I'll click on show answer.&nbsp;&nbsp;"
    ],
    "ru": [
      "deny блокирует весь другой трафик. Хорошо, давайте & nbsp; проверьте ответ. Я нажимаю \"Показать ответ\". & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2314.72,
      2319.76
    ],
    "en": [
      "And that is correct. So,&nbsp; here is Boson's explanation.&nbsp;&nbsp;"
    ],
    "ru": [
      "И это правильно. Итак, & nbsp; вот объяснение Бозона. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2319.76,
      2324.56
    ],
    "en": [
      "You can pause the video here if you want to&nbsp; read the explanation, and I recommend you do.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вы можете приостановить видео здесь, если хотите & nbsp; прочтите объяснение, и я рекомендую вам это сделать. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2324.56,
      2334.4
    ],
    "en": [
      "As I have said before, this is one of&nbsp; the great things about Boson ExSim.&nbsp;&nbsp;"
    ],
    "ru": [
      "Как я уже сказал, это один из & nbsp; преимущества Boson ExSim. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2334.4,
      2338.48
    ],
    "en": [
      "Okay, so that's the explanation. There&nbsp; are also references to the chapter in&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот и объяснение. Там & nbsp; также ссылки на главу в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2338.48,
      2346.56
    ],
    "en": [
      "Cisco's official cert guide and some&nbsp; Cisco documentation which you can read.&nbsp;&nbsp;"
    ],
    "ru": [
      "Официальное руководство по сертификации Cisco и некоторые & nbsp; Документация Cisco, которую вы можете прочитать. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2346.56,
      2350.96
    ],
    "en": [
      "Okay, that's Boson ExSim for the&nbsp; CCNA. If you want to get ExSim,&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это Boson ExSim для & nbsp; CCNA. Если вы хотите получить ExSim, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2350.96,
      2356.4
    ],
    "en": [
      "follow the link in the video description. These&nbsp; are by far the best practice exams for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "перейдите по ссылке в описании видео. Эти & nbsp; безусловно, лучшие практические экзамены для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2356.4,
      2361.52
    ],
    "en": [
      "Once again, follow that link&nbsp; in the video description."
    ],
    "ru": [
      "Еще раз перейдите по этой ссылке & nbsp; в описании видео."
    ]
  },
  {
    "time": [
      2361.52,
      2364.56
    ],
    "en": [
      "There are supplementary materials for this video.&nbsp;&nbsp;"
    ],
    "ru": [
      "К этому видео есть дополнительные материалы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2364.56,
      2368.0
    ],
    "en": [
      "There is a flashcard deck to&nbsp; use with the software ‘Anki’.&nbsp;&nbsp;"
    ],
    "ru": [
      "Существует колода карточек, чтобы & nbsp; использовать с программным обеспечением «Anki». & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2368.0,
      2372.64
    ],
    "en": [
      "There will also be a packet tracer practice&nbsp; lab so you can get some hands-on practice.&nbsp;&nbsp;"
    ],
    "ru": [
      "Также будет практика пакетного трассировщика & nbsp; лаборатории, чтобы вы могли немного попрактиковаться. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2372.64,
      2378.16
    ],
    "en": [
      "That will be in the next video. Sign up for my&nbsp; mailing list via the link in the description,&nbsp;&nbsp;"
    ],
    "ru": [
      "Об этом будет в следующем видео. Подпишитесь на мою & nbsp; список рассылки по ссылке в описании & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2378.16,
      2383.84
    ],
    "en": [
      "and I’ll send you all of the flashcards&nbsp; and packet tracer lab files for the course."
    ],
    "ru": [
      "и я пришлю вам все карточки & nbsp; и лабораторные файлы программы трассировки пакетов для курса."
    ]
  },
  {
    "time": [
      2383.84,
      2388.56
    ],
    "en": [
      "Before finishing today’s video I want&nbsp; to thank my JCNP-level channel members.&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу & nbsp; чтобы поблагодарить участников канала уровня JCNP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2388.56,
      2395.52
    ],
    "en": [
      "To join, please click the ‘Join’ button under the&nbsp; video. Thank you to Aaron, Junhong, OJ, Magrathea,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Аарону, Джунхонгу, О.Дж., Магратее, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2395.52,
      2400.8
    ],
    "en": [
      "TheGunguy, Njabulo, Benjamin, Tshepiso,&nbsp; Justin, Prakaash, Nasir, Erlison,&nbsp;&nbsp;"
    ],
    "ru": [
      "Гунги, Нджабуло, Бенджамин, Чеписо, & nbsp; Джастин, Пракааш, Насир, Эрлисон, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2400.8,
      2407.12
    ],
    "en": [
      "Apogee, Marko, Flodo , Daming, Joshua,&nbsp; Jhilmar, Ed, Value, John, Funnydart, Scott,&nbsp;&nbsp;"
    ],
    "ru": [
      "Апогей, Марко, Флодо, Даминг, Джошуа, & nbsp; Джилмар, Эд, Вэлью, Джон, Фаннидарт, Скотт, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2407.12,
      2414.64
    ],
    "en": [
      "Marek, Velvijaykum, C Mohd, Mark, Yousif, Sidi,&nbsp; Boson Software, Devin, Lito, Yonatan, and Vance.&nbsp;&nbsp;"
    ],
    "ru": [
      "Марек, Велвиджайкум, Ч. Мохд, Марк, Юсиф, Сиди, & nbsp; Boson Software, Девин, Лито, Йонатан и Вэнс. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2414.64,
      2419.28
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly,&nbsp; but thank you so much for your support.&nbsp;&nbsp;"
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, & nbsp; но большое спасибо за вашу поддержку. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2419.28,
      2425.84
    ],
    "en": [
      "This is the list of JCNP-level members at the time&nbsp; of recording by the way, November 29th 2020. If&nbsp;&nbsp;"
    ],
    "ru": [
      "Это список участников уровня JCNP на тот момент & nbsp; записи, кстати, 29 ноября 2020 года. Если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2425.84,
      2433.04
    ],
    "en": [
      "you signed up recently and your name isn’t on&nbsp; here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "вы зарегистрировались недавно, и вашего имени нет на & nbsp; здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      2433.04,
      2436.08
    ],
    "en": [
      "Thank you for watching. Please&nbsp; subscribe to the channel,&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо за просмотр. Пожалуйста, & nbsp; подписаться на канал, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2436.08,
      2441.92
    ],
    "en": [
      "like the video, leave a comment, and share the&nbsp; video with anyone else studying for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "поставьте лайк видео, оставьте комментарий и поделитесь & nbsp; видео со всеми, кто учится на CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2441.92,
      2447.52
    ],
    "en": [
      "If you want to leave a tip, check the links in the&nbsp; description. I'm also a Brave verified publisher&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в разделе & nbsp; описание. Я также являюсь проверенным издателем Brave & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      2447.52,
      2447.52
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]