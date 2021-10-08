let objs = [
  {
    "time": [
      0.0,
      4.459728
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную практическую лабораторию CCNA Packet Tracer"
    ]
  },
  {
    "time": [
      4.459728,
      7.474728
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "Вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      7.474728,
      14.747707
    ],
    "en": [
      "if you like these labs please consider supporting me via my patreon or the cryptocurrency options in the description"
    ],
    "ru": [
      "если вам нравятся эти лаборатории, пожалуйста, подумайте о поддержке меня через мой патреон или варианты криптовалюты в описании"
    ]
  },
  {
    "time": [
      14.747707,
      18.730102
    ],
    "en": [
      "also please subscribe to the channel for more labs like this"
    ],
    "ru": [
      "также подпишитесь на канал, чтобы увидеть больше подобных лабораторных работ"
    ]
  },
  {
    "time": [
      18.730102,
      22.70254
    ],
    "en": [
      "and share these videos with anyone else studying for the CCNA"
    ],
    "ru": [
      "и поделитесь этими видео со всеми, кто учится на CCNA"
    ]
  },
  {
    "time": [
      22.70254,
      26.818957
    ],
    "en": [
      "in this lab we will configure ACLs"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим ACL"
    ]
  },
  {
    "time": [
      26.818957,
      27.937227
    ],
    "en": [
      "named ACLs"
    ],
    "ru": [
      "именованные ACL"
    ]
  },
  {
    "time": [
      27.937227,
      28.809435
    ],
    "en": [
      "and numbered ACLs"
    ],
    "ru": [
      "и пронумерованные ACL"
    ]
  },
  {
    "time": [
      28.809435,
      30.593206
    ],
    "en": [
      "standard ACLs"
    ],
    "ru": [
      "стандартные ACL"
    ]
  },
  {
    "time": [
      30.593206,
      31.466914
    ],
    "en": [
      "and extended ACLs"
    ],
    "ru": [
      "и расширенные ACL"
    ]
  },
  {
    "time": [
      31.466914,
      34.061081
    ],
    "en": [
      "as well as ipv4 ACLs"
    ],
    "ru": [
      "а также списки ACL для ipv4"
    ]
  },
  {
    "time": [
      34.061081,
      35.988831
    ],
    "en": [
      "and ipv6 ACLs"
    ],
    "ru": [
      "и ipv6 ACL"
    ]
  },
  {
    "time": [
      35.988831,
      37.231706
    ],
    "en": [
      "mixing them all together"
    ],
    "ru": [
      "смешивая их все вместе"
    ]
  },
  {
    "time": [
      37.231706,
      38.74233
    ],
    "en": [
      "let's get started"
    ],
    "ru": [
      "Давайте начнем"
    ]
  },
  {
    "time": [
      38.74233,
      41.716059
    ],
    "en": [
      "so we have to configure"
    ],
    "ru": [
      "поэтому нам нужно настроить"
    ]
  },
  {
    "time": [
      41.716059,
      46.528788
    ],
    "en": [
      "and apply a total of four ACLs to filter traffic according to these instructions"
    ],
    "ru": [
      "и применить в общей сложности четыре ACL для фильтрации трафика в соответствии с этими инструкциями."
    ]
  },
  {
    "time": [
      46.528788,
      49.463433
    ],
    "en": [
      "the details of how you configure"
    ],
    "ru": [
      "детали того, как вы настраиваете"
    ]
  },
  {
    "time": [
      49.463433,
      51.121392
    ],
    "en": [
      "and where you apply the ACLs"
    ],
    "ru": [
      "и где вы применяете ACL"
    ]
  },
  {
    "time": [
      51.121392,
      53.743371
    ],
    "en": [
      "doesn't have to exactly match what I do in this video"
    ],
    "ru": [
      "не обязательно точно соответствовать тому, что я делаю в этом видео"
    ]
  },
  {
    "time": [
      53.743371,
      55.558204
    ],
    "en": [
      "as long as the results are the same"
    ],
    "ru": [
      "пока результаты такие же"
    ]
  },
  {
    "time": [
      55.558204,
      57.125058
    ],
    "en": [
      "it's okay"
    ],
    "ru": [
      "все нормально"
    ]
  },
  {
    "time": [
      57.125058,
      61.799537
    ],
    "en": [
      "the first ACL we must configure should prevent pc4"
    ],
    "ru": [
      "первый ACL, который мы должны настроить, должен предотвратить pc4"
    ]
  },
  {
    "time": [
      61.799537,
      65.661224
    ],
    "en": [
      "from accessing the 10440 / 24 network"
    ],
    "ru": [
      "от доступа к сети 10440/24"
    ]
  },
  {
    "time": [
      65.661224,
      70.327182
    ],
    "en": [
      "the general rule is to apply standard ACLs close to the destination"
    ],
    "ru": [
      "общее правило - применять стандартные ACL близко к месту назначения"
    ]
  },
  {
    "time": [
      70.327182,
      74.58462
    ],
    "en": [
      "so I'll apply it to r2 SG 0 0 interface"
    ],
    "ru": [
      "поэтому я применим его к интерфейсу r2 SG 0 0"
    ]
  },
  {
    "time": [
      74.58462,
      77.641578
    ],
    "en": [
      "let's go on our to"
    ],
    "ru": [
      "давай продолжим"
    ]
  },
  {
    "time": [
      77.641578,
      81.524577
    ],
    "en": [
      "enable golf tee"
    ],
    "ru": [
      "включить футболку для гольфа"
    ]
  },
  {
    "time": [
      81.524577,
      85.819806
    ],
    "en": [
      "let's create a deny statement blocking PC for"
    ],
    "ru": [
      "давайте создадим запрещающий запрос, блокирующий ПК для"
    ]
  },
  {
    "time": [
      85.819806,
      88.093889
    ],
    "en": [
      "access list"
    ],
    "ru": [
      "список доступа"
    ]
  },
  {
    "time": [
      88.093889,
      90.241827
    ],
    "en": [
      "I'll make it number 1"
    ],
    "ru": [
      "Я сделаю это номером 1"
    ]
  },
  {
    "time": [
      90.241827,
      92.341181
    ],
    "en": [
      "deny host"
    ],
    "ru": [
      "отказать хозяину"
    ]
  },
  {
    "time": [
      92.341181,
      96.440327
    ],
    "en": [
      "and PC for is 10 2 to 12"
    ],
    "ru": [
      "и ПК для is 10 от 2 до 12"
    ]
  },
  {
    "time": [
      96.440327,
      98.710327
    ],
    "en": [
      "okay that's all for that statement"
    ],
    "ru": [
      "хорошо, это все для этого утверждения"
    ]
  },
  {
    "time": [
      98.710327,
      104.119201
    ],
    "en": [
      "now we are told to block other traffic to 10 dot 4 dot 4 dot 0 / 24"
    ],
    "ru": [
      "теперь нам говорят заблокировать другой трафик на 10 точек 4 точки 4 точки 0/24"
    ]
  },
  {
    "time": [
      104.119201,
      106.115388
    ],
    "en": [
      "so we should let it through"
    ],
    "ru": [
      "так что мы должны пропустить это"
    ]
  },
  {
    "time": [
      106.115388,
      109.984804
    ],
    "en": [
      "accessed list 1 permit any"
    ],
    "ru": [
      "список доступа 1 разрешить любой"
    ]
  },
  {
    "time": [
      109.984804,
      111.808888
    ],
    "en": [
      "that's it"
    ],
    "ru": [
      "это оно"
    ]
  },
  {
    "time": [
      111.808888,
      113.587283
    ],
    "en": [
      "now let's apply it to the interface"
    ],
    "ru": [
      "теперь применим его к интерфейсу"
    ]
  },
  {
    "time": [
      113.587283,
      116.937138
    ],
    "en": [
      "interface g0 0"
    ],
    "ru": [
      "интерфейс g0 0"
    ]
  },
  {
    "time": [
      116.937138,
      120.59795
    ],
    "en": [
      "IP Access Group 1 out"
    ],
    "ru": [
      "Выход группы IP-доступа 1"
    ]
  },
  {
    "time": [
      120.59795,
      126.606263
    ],
    "en": [
      "I used out because I want to prevent PC force traffic from exiting out this interface"
    ],
    "ru": [
      "Я использовал, потому что хочу предотвратить выход принудительного трафика ПК из этого интерфейса"
    ]
  },
  {
    "time": [
      126.606263,
      130.389367
    ],
    "en": [
      "to the 10 dot 4 dot 4 dot 0 / 24 subnet"
    ],
    "ru": [
      "в подсеть 10 точек 4 точки 4 точки 0/24"
    ]
  },
  {
    "time": [
      130.389367,
      132.164929
    ],
    "en": [
      "let's test it"
    ],
    "ru": [
      "давай проверим это"
    ]
  },
  {
    "time": [
      132.164929,
      135.951741
    ],
    "en": [
      "I'll try a ping from PC for two server one"
    ],
    "ru": [
      "Попробую пинг с ПК на два сервера один"
    ]
  },
  {
    "time": [
      135.951741,
      141.966012
    ],
    "en": [
      "ping 10.4 for 100"
    ],
    "ru": [
      "пинг 10,4 на 100"
    ]
  },
  {
    "time": [
      141.966012,
      149.779262
    ],
    "en": [
      "and we get the destination host unreachable message from 10 12 12 2 which is our to"
    ],
    "ru": [
      "и мы получаем сообщение о недоступности хоста назначения от 10 12 12 2, которое является нашим"
    ]
  },
  {
    "time": [
      149.779262,
      154.123012
    ],
    "en": [
      "perfect just to make sure let's try a ping from PC 3"
    ],
    "ru": [
      "идеально просто, чтобы убедиться, давайте попробуем пинг с ПК 3"
    ]
  },
  {
    "time": [
      154.123012,
      156.067366
    ],
    "en": [
      "which should go through"
    ],
    "ru": [
      "который должен пройти"
    ]
  },
  {
    "time": [
      156.067366,
      161.585554
    ],
    "en": [
      "ping 4.4.1 hundred"
    ],
    "ru": [
      "пинг 4.4.1 сотня"
    ]
  },
  {
    "time": [
      161.585554,
      169.651887
    ],
    "en": [
      "great it works"
    ],
    "ru": [
      "отлично работает"
    ]
  },
  {
    "time": [
      169.651887,
      172.016387
    ],
    "en": [
      "our first ACL is complete"
    ],
    "ru": [
      "наш первый ACL завершен"
    ]
  },
  {
    "time": [
      172.016387,
      175.515366
    ],
    "en": [
      "okay let's do the second one"
    ],
    "ru": [
      "хорошо, давай сделаем вторую"
    ]
  },
  {
    "time": [
      175.515366,
      186.906095
    ],
    "en": [
      "configure an ipv6 ACL to prevent pc5 from accessing the 2001 DB 822 22 / 64 network"
    ],
    "ru": [
      "настроить список контроля доступа ipv6 для предотвращения доступа pc5 к сети 2001 DB 822 22/64"
    ]
  },
  {
    "time": [
      186.906095,
      189.64147
    ],
    "en": [
      "so this will be an ipv6 ACL"
    ],
    "ru": [
      "так что это будет ACL ipv6"
    ]
  },
  {
    "time": [
      189.64147,
      192.819887
    ],
    "en": [
      "and ipv6 only supports named ACLs"
    ],
    "ru": [
      "и ipv6 поддерживает только именованные ACL"
    ]
  },
  {
    "time": [
      192.819887,
      197.251949
    ],
    "en": [
      "although ipv4 supports both numbered and named ACLs"
    ],
    "ru": [
      "хотя ipv4 поддерживает как нумерованные, так и именованные ACL"
    ]
  },
  {
    "time": [
      197.251949,
      201.139866
    ],
    "en": [
      "I'll apply it to our ones g02 interface"
    ],
    "ru": [
      "Применим к нашему интерфейсу g02"
    ]
  },
  {
    "time": [
      201.139866,
      202.965595
    ],
    "en": [
      "let's go on our one"
    ],
    "ru": [
      "пойдем на наш"
    ]
  },
  {
    "time": [
      202.965595,
      207.524699
    ],
    "en": [
      "enable compte"
    ],
    "ru": [
      "включить compte"
    ]
  },
  {
    "time": [
      207.524699,
      211.818637
    ],
    "en": [
      "since it's an ipv6 ACL"
    ],
    "ru": [
      "так как это ipv6 ACL"
    ]
  },
  {
    "time": [
      211.818637,
      215.248116
    ],
    "en": [
      "start the command with ipv6 access list"
    ],
    "ru": [
      "запустить команду со списком доступа ipv6"
    ]
  },
  {
    "time": [
      215.248116,
      216.862782
    ],
    "en": [
      "then the name"
    ],
    "ru": [
      "затем имя"
    ]
  },
  {
    "time": [
      216.862782,
      220.618074
    ],
    "en": [
      "I'll say g0 to underscore in"
    ],
    "ru": [
      "Я скажу g0, чтобы подчеркнуть"
    ]
  },
  {
    "time": [
      220.618074,
      223.08049
    ],
    "en": [
      "to give it a meaningful name"
    ],
    "ru": [
      "дать ему многозначительное имя"
    ]
  },
  {
    "time": [
      223.08049,
      227.317449
    ],
    "en": [
      "now we're in ipv6 ACL configuration mode"
    ],
    "ru": [
      "теперь мы находимся в режиме конфигурации ipv6 ACL"
    ]
  },
  {
    "time": [
      227.317449,
      229.35024
    ],
    "en": [
      "and can configure each statement"
    ],
    "ru": [
      "и может настроить каждый оператор"
    ]
  },
  {
    "time": [
      229.35024,
      232.52024
    ],
    "en": [
      "so we want to deny PC 5"
    ],
    "ru": [
      "поэтому мы хотим запретить ПК 5"
    ]
  },
  {
    "time": [
      232.52024,
      235.122865
    ],
    "en": [
      "and then permit other traffic"
    ],
    "ru": [
      "а затем разрешить другой трафик"
    ]
  },
  {
    "time": [
      235.122865,
      238.294115
    ],
    "en": [
      "deny ipv6 host"
    ],
    "ru": [
      "запретить хост ipv6"
    ]
  },
  {
    "time": [
      238.294115,
      240.619927
    ],
    "en": [
      "followed by PC 5s address"
    ],
    "ru": [
      "за которым следует адрес ПК 5s"
    ]
  },
  {
    "time": [
      240.619927,
      246.698281
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
      240.619927,
      246.698281
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
      246.698281,
      249.300885
    ],
    "en": [
      "then the destination subnet"
    ],
    "ru": [
      "затем подсеть назначения"
    ]
  },
  {
    "time": [
      249.300885,
      255.136198
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
      249.300885,
      255.136198
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
      255.136198,
      258.276531
    ],
    "en": [
      "okay that's our deny statement"
    ],
    "ru": [
      "хорошо, это наше отрицание"
    ]
  },
  {
    "time": [
      258.276531,
      261.538177
    ],
    "en": [
      "now let's allow all other ipv6 traffic through"
    ],
    "ru": [
      "теперь давайте пропустим весь остальной трафик ipv6 через"
    ]
  },
  {
    "time": [
      261.538177,
      265.765073
    ],
    "en": [
      "permit ipv6 any-any"
    ],
    "ru": [
      "разрешить ipv6 любой-любой"
    ]
  },
  {
    "time": [
      265.765073,
      268.448656
    ],
    "en": [
      "ok finally let's apply it"
    ],
    "ru": [
      "хорошо, наконец, давайте применим это"
    ]
  },
  {
    "time": [
      268.448656,
      272.878967
    ],
    "en": [
      "interface G 0 to"
    ],
    "ru": [
      "интерфейс G 0 к"
    ]
  },
  {
    "time": [
      272.878967,
      277.945925
    ],
    "en": [
      "ipv6 traffic filter G 0 2 in"
    ],
    "ru": [
      "фильтр трафика ipv6 G 0 2 в"
    ]
  },
  {
    "time": [
      277.945925,
      282.709216
    ],
    "en": [
      "now you might want to apply this with ipv6 access group"
    ],
    "ru": [
      "теперь вы можете применить это с группой доступа ipv6"
    ]
  },
  {
    "time": [
      282.709216,
      285.685279
    ],
    "en": [
      "since ipv4 uses IP access group"
    ],
    "ru": [
      "поскольку ipv4 использует группу доступа IP"
    ]
  },
  {
    "time": [
      285.685279,
      289.822508
    ],
    "en": [
      "but for ipv6 use ipv6 traffic filter"
    ],
    "ru": [
      "но для ipv6 используйте фильтр трафика ipv6"
    ]
  },
  {
    "time": [
      289.822508,
      291.816675
    ],
    "en": [
      "okay let's test"
    ],
    "ru": [
      "хорошо давай проверим"
    ]
  },
  {
    "time": [
      291.816675,
      295.746341
    ],
    "en": [
      "I'll ping from PC 5 to server 2"
    ],
    "ru": [
      "Я пингую с ПК 5 на сервер 2"
    ]
  },
  {
    "time": [
      295.746341,
      306.14782
    ],
    "en": [
      "ping 2001 db8 22 22 double : 101"
    ],
    "ru": [
      "пинг 2001 db8 22 22 двойной: 101"
    ]
  },
  {
    "time": [
      306.14782,
      310.216008
    ],
    "en": [
      "reachable message"
    ],
    "ru": [
      "доступное сообщение"
    ]
  },
  {
    "time": [
      310.216008,
      311.218362
    ],
    "en": [
      "from our one"
    ],
    "ru": [
      "из нашего"
    ]
  },
  {
    "time": [
      311.218362,
      312.210008
    ],
    "en": [
      "looks good"
    ],
    "ru": [
      "выглядит неплохо"
    ]
  },
  {
    "time": [
      312.210008,
      315.442924
    ],
    "en": [
      "now just to be sure let's try on PC 6"
    ],
    "ru": [
      "теперь на всякий случай попробуем на ПК 6"
    ]
  },
  {
    "time": [
      315.442924,
      316.556862
    ],
    "en": [
      "which should work"
    ],
    "ru": [
      "который должен работать"
    ]
  },
  {
    "time": [
      316.556862,
      325.962091
    ],
    "en": [
      "ping 2001 DB 8 22 22 double : 100"
    ],
    "ru": [
      "пинг 2001 DB 8 22 22 двойной: 100"
    ]
  },
  {
    "time": [
      325.962091,
      333.975404
    ],
    "en": [
      "great it works as expected"
    ],
    "ru": [
      "отлично работает как ожидалось"
    ]
  },
  {
    "time": [
      333.975404,
      339.597612
    ],
    "en": [
      "next is to prevent pc3 from reaching PC 1"
    ],
    "ru": [
      "далее нужно предотвратить попадание pc3 на ПК 1"
    ]
  },
  {
    "time": [
      339.597612,
      343.320112
    ],
    "en": [
      "it should be an extended named ACL"
    ],
    "ru": [
      "это должен быть расширенный именованный ACL"
    ]
  },
  {
    "time": [
      343.320112,
      346.961758
    ],
    "en": [
      "and let's put it on our ones G 0 1 interface"
    ],
    "ru": [
      "и ставим на наши те G 0 1 интерфейс"
    ]
  },
  {
    "time": [
      346.961758,
      353.754966
    ],
    "en": [
      "exit IP access list extended"
    ],
    "ru": [
      "выход из списка доступа IP расширен"
    ]
  },
  {
    "time": [
      353.754966,
      358.663966
    ],
    "en": [
      "this time I'll name it G 0 1 underscore in"
    ],
    "ru": [
      "на этот раз я назову его G 0 1 подчеркивание в"
    ]
  },
  {
    "time": [
      358.663966,
      361.395299
    ],
    "en": [
      "let's make the deny statement"
    ],
    "ru": [
      "давайте сделаем отрицающее заявление"
    ]
  },
  {
    "time": [
      361.395299,
      370.867883
    ],
    "en": [
      "deny IP host 10.2 2.11 host 10.11 11"
    ],
    "ru": [
      "запретить IP-хост 10.2 2.11 хост 10.11 11"
    ]
  },
  {
    "time": [
      370.867883,
      373.427445
    ],
    "en": [
      "now let's permit other traffic"
    ],
    "ru": [
      "теперь разрешим другой трафик"
    ]
  },
  {
    "time": [
      373.427445,
      375.413195
    ],
    "en": [
      "since we weren't told to block anything else"
    ],
    "ru": [
      "поскольку нам не сказали ничего блокировать"
    ]
  },
  {
    "time": [
      375.413195,
      378.883362
    ],
    "en": [
      "permit IP any-any"
    ],
    "ru": [
      "разрешить IP любой-любой"
    ]
  },
  {
    "time": [
      378.883362,
      382.231008
    ],
    "en": [
      "now let's apply it"
    ],
    "ru": [
      "теперь давайте применим это"
    ]
  },
  {
    "time": [
      382.231008,
      388.416569
    ],
    "en": [
      "interface G 0 1 this is an ipv4 ACL"
    ],
    "ru": [
      "interface G 0 1 это ipv4 ACL"
    ]
  },
  {
    "time": [
      388.416569,
      394.949256
    ],
    "en": [
      "so IP access group 1 underscore in in"
    ],
    "ru": [
      "поэтому группа IP-доступа 1 подчеркивается в"
    ]
  },
  {
    "time": [
      394.949256,
      396.621985
    ],
    "en": [
      "okay let's try it out"
    ],
    "ru": [
      "хорошо, давай попробуем"
    ]
  },
  {
    "time": [
      396.621985,
      399.948901
    ],
    "en": [
      "I'll ping from pc 3 to pc 1"
    ],
    "ru": [
      "Я пингую с ПК 3 на ПК 1"
    ]
  },
  {
    "time": [
      399.948901,
      406.431422
    ],
    "en": [
      "ping 10.11 11"
    ],
    "ru": [
      "пинг 10.11 11"
    ]
  },
  {
    "time": [
      406.431422,
      411.012693
    ],
    "en": [
      "and we get the destination host unreachable message"
    ],
    "ru": [
      "и мы получаем сообщение о недоступности хоста назначения"
    ]
  },
  {
    "time": [
      411.012693,
      414.153193
    ],
    "en": [
      "how about from PC for"
    ],
    "ru": [
      "как насчет с ПК для"
    ]
  },
  {
    "time": [
      414.153193,
      419.823255
    ],
    "en": [
      "King 10.1 111"
    ],
    "ru": [
      "Король 10,1 111"
    ]
  },
  {
    "time": [
      419.823255,
      427.753047
    ],
    "en": [
      "okay it works as expected"
    ],
    "ru": [
      "хорошо, это работает как ожидалось"
    ]
  },
  {
    "time": [
      427.753047,
      433.719464
    ],
    "en": [
      "finally we want to allow PC six to telnet to r2"
    ],
    "ru": [
      "наконец, мы хотим разрешить шестому ПК подключаться к r2 через telnet."
    ]
  },
  {
    "time": [
      433.719464,
      436.403047
    ],
    "en": [
      "but to not allow others to do so"
    ],
    "ru": [
      "но не позволять другим делать это"
    ]
  },
  {
    "time": [
      436.403047,
      439.733046
    ],
    "en": [
      "so we could apply this in multiple areas"
    ],
    "ru": [
      "чтобы мы могли применить это во многих областях"
    ]
  },
  {
    "time": [
      439.733046,
      443.638421
    ],
    "en": [
      "but how about applying it directly to our two's vty lines"
    ],
    "ru": [
      "но как насчет того, чтобы применить его непосредственно к нашим двум строкам vty"
    ]
  },
  {
    "time": [
      443.638421,
      445.912629
    ],
    "en": [
      "let's go on our to"
    ],
    "ru": [
      "давай продолжим"
    ]
  },
  {
    "time": [
      445.912629,
      451.430316
    ],
    "en": [
      "exit first I'll make the ACL"
    ],
    "ru": [
      "сначала выйдите, я сделаю ACL"
    ]
  },
  {
    "time": [
      451.430316,
      455.717274
    ],
    "en": [
      "ipv6 access list telnet"
    ],
    "ru": [
      "список доступа ipv6 telnet"
    ]
  },
  {
    "time": [
      455.717274,
      457.786816
    ],
    "en": [
      "to give it an appropriate name"
    ],
    "ru": [
      "дать ему подходящее имя"
    ]
  },
  {
    "time": [
      457.786816,
      462.054857
    ],
    "en": [
      "so let's permit PC 6 to telnet"
    ],
    "ru": [
      "так давайте разрешим ПК 6 telnet"
    ]
  },
  {
    "time": [
      462.054857,
      467.798191
    ],
    "en": [
      "permit TCP because telnet uses TCP"
    ],
    "ru": [
      "разрешить TCP, потому что telnet использует TCP"
    ]
  },
  {
    "time": [
      467.798191,
      475.489253
    ],
    "en": [
      "host 2000 1 DB 8 3 3 double colon 12"
    ],
    "ru": [
      "хост 2000 1 DB 8 3 3 двойное двоеточие 12"
    ]
  },
  {
    "time": [
      475.489253,
      478.546711
    ],
    "en": [
      "I'll set the destination to any"
    ],
    "ru": [
      "Я установлю любой пункт назначения"
    ]
  },
  {
    "time": [
      478.546711,
      482.048836
    ],
    "en": [
      "since I wanted to apply to whichever of our tooth interfaces"
    ],
    "ru": [
      "так как я хотел применить к любому из наших зубных интерфейсов"
    ]
  },
  {
    "time": [
      482.048836,
      483.208398
    ],
    "en": [
      "they telnet to"
    ],
    "ru": [
      "они telnet к"
    ]
  },
  {
    "time": [
      483.208398,
      486.844523
    ],
    "en": [
      "then finally EQ telnet"
    ],
    "ru": [
      "затем наконец EQ telnet"
    ]
  },
  {
    "time": [
      486.844523,
      491.02169
    ],
    "en": [
      "to specify the port number of 23 which telnet uses"
    ],
    "ru": [
      "чтобы указать номер порта 23, который использует telnet"
    ]
  },
  {
    "time": [
      491.02169,
      494.540502
    ],
    "en": [
      "ok that's all we have to configure"
    ],
    "ru": [
      "хорошо, это все, что нам нужно настроить"
    ]
  },
  {
    "time": [
      494.540502,
      498.185918
    ],
    "en": [
      "because there is an implicit deny any at the end of the ACL"
    ],
    "ru": [
      "потому что есть неявное запрещение любого в конце ACL"
    ]
  },
  {
    "time": [
      498.185918,
      500.706376
    ],
    "en": [
      "so we don't need to configure another statement"
    ],
    "ru": [
      "поэтому нам не нужно настраивать другой оператор"
    ]
  },
  {
    "time": [
      500.706376,
      503.550418
    ],
    "en": [
      "let's apply it to the vty lines"
    ],
    "ru": [
      "давайте применим его к линиям VTY"
    ]
  },
  {
    "time": [
      503.550418,
      507.851543
    ],
    "en": [
      "line vty 0 15"
    ],
    "ru": [
      "строка vty 0 15"
    ]
  },
  {
    "time": [
      507.851543,
      512.189772
    ],
    "en": [
      "to apply an ipv4 ACL to an interface"
    ],
    "ru": [
      "применить ipv4 ACL к интерфейсу"
    ]
  },
  {
    "time": [
      512.189772,
      513.479606
    ],
    "en": [
      "use access group"
    ],
    "ru": [
      "использовать группу доступа"
    ]
  },
  {
    "time": [
      513.479606,
      516.707293
    ],
    "en": [
      "for ipv6 traffic filter"
    ],
    "ru": [
      "для фильтра трафика ipv6"
    ]
  },
  {
    "time": [
      516.707293,
      519.776272
    ],
    "en": [
      "now to apply either to vty lines"
    ],
    "ru": [
      "теперь применить либо к линиям VTY"
    ]
  },
  {
    "time": [
      519.776272,
      521.554793
    ],
    "en": [
      "you use XS class"
    ],
    "ru": [
      "вы используете класс XS"
    ]
  },
  {
    "time": [
      521.554793,
      527.173376
    ],
    "en": [
      "so ipv6 access class telnet in"
    ],
    "ru": [
      "так что ipv6 класс доступа telnet в"
    ]
  },
  {
    "time": [
      527.173376,
      529.448189
    ],
    "en": [
      "ok let's test it out"
    ],
    "ru": [
      "хорошо, давай проверим это"
    ]
  },
  {
    "time": [
      529.448189,
      535.152293
    ],
    "en": [
      "I'll try to tell NIT - R - s G 0 0 0 interface from PC 6"
    ],
    "ru": [
      "Попробую подсказать интерфейс NIT - R - s G 0 0 0 от ПК 6"
    ]
  },
  {
    "time": [
      535.152293,
      732.0
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
      732.0,
      545.991064
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
      545.991064,
      550.31121
    ],
    "en": [
      "looks good enter the password CCNA in lower case"
    ],
    "ru": [
      "выглядит хорошо, введите пароль CCNA в нижнем регистре"
    ]
  },
  {
    "time": [
      550.31121,
      552.214981
    ],
    "en": [
      "and there we go"
    ],
    "ru": [
      "и вот мы идем"
    ]
  },
  {
    "time": [
      552.214981,
      554.038251
    ],
    "en": [
      "exit"
    ],
    "ru": [
      "выход"
    ]
  },
  {
    "time": [
      554.038251,
      557.819418
    ],
    "en": [
      "okay let's confirm that PC five can't tell net to r2"
    ],
    "ru": [
      "Хорошо, давайте подтвердим, что ПК 5 не может сообщить сеть R2"
    ]
  },
  {
    "time": [
      557.819418,
      568.675876
    ],
    "en": [
      "telnet 2001 DB eight twelve twelve double colon -"
    ],
    "ru": [
      "telnet 2001 DB восемь двенадцать двенадцать двойное двоеточие -"
    ]
  },
  {
    "time": [
      568.675876,
      572.722335
    ],
    "en": [
      "great looks like we successfully configured and applied the ACL"
    ],
    "ru": [
      "отлично выглядит, мы успешно настроили и применили ACL"
    ]
  },
  {
    "time": [
      572.722335,
      577.36771
    ],
    "en": [
      "in this lab we configured multiple types of ACLs"
    ],
    "ru": [
      "в этой лабораторной работе мы настроили несколько типов ACL"
    ]
  },
  {
    "time": [
      577.36771,
      582.893355
    ],
    "en": [
      "ipv6 ACLs as well as standard and extended ipv4 ACLs"
    ],
    "ru": [
      "списки ACL ipv6, а также стандартные и расширенные списки ACL ipv4"
    ]
  },
  {
    "time": [
      582.893355,
      584.798439
    ],
    "en": [
      "using numbered and named methods"
    ],
    "ru": [
      "с использованием пронумерованных и именованных методов"
    ]
  },
  {
    "time": [
      584.798439,
      588.828751
    ],
    "en": [
      "this was mostly review from what we did in the icnd1 labs"
    ],
    "ru": [
      "в основном это был обзор того, что мы делали в лабораториях icnd1"
    ]
  },
  {
    "time": [
      588.828751,
      590.78121
    ],
    "en": [
      "but hopefully it was good practice"
    ],
    "ru": [
      "но, надеюсь, это была хорошая практика"
    ]
  },
  {
    "time": [
      590.78121,
      592.565522
    ],
    "en": [
      "that's all for this lab"
    ],
    "ru": [
      "это все для этой лаборатории"
    ]
  },
  {
    "time": [
      592.565522,
      599.373939
    ],
    "en": [
      "thank you for watching I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Спасибо за просмотр. Надеюсь, эта лабораторная работа и видео были для вас полезны."
    ]
  },
  {
    "time": [
      599.373939,
      602.467835
    ],
    "en": [
      "please subscribe for future labs like this"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие подобные лаборатории"
    ]
  },
  {
    "time": [
      602.467835,
      604.141001
    ],
    "en": [
      "which will be released weekly"
    ],
    "ru": [
      "который будет выходить еженедельно"
    ]
  },
  {
    "time": [
      604.141001,
      607.360001
    ],
    "en": [
      "if you have requests for any specific labs"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям"
    ]
  },
  {
    "time": [
      607.360001,
      609.232543
    ],
    "en": [
      "let me know in the comments section"
    ],
    "ru": [
      "дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      609.232543,
      616.043189
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and etherium donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфиром по адресам в описании"
    ]
  },
  {
    "time": [
      616.043189,
      624.622668
    ],
    "en": [
      "I am also a brave verified publisher and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "Я также храбрый проверенный издатель и принимаю пожертвования летучих мышей или базовых токенов внимания в смелом браузере."
    ]
  },
  {
    "time": [
      624.622668,
      624.622668
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
      624.622668,
      624.622668
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
      624.622668,
      624.622668
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]