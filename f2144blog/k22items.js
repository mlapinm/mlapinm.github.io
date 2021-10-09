let objs = [
  {
    "time": [
      0.0,
      8.006249
    ],
    "en": [
      "welcome to this free CCNA packet tracer practice lab you can download the lab file from the link in the description"
    ],
    "ru": [
      "добро пожаловать в эту бесплатную лабораторную практику по трассировщику пакетов CCNA, вы можете скачать лабораторный файл по ссылке в описании"
    ]
  },
  {
    "time": [
      8.006249,
      21.108425
    ],
    "en": [
      "if you like these labs please consider supporting me via my patreon or the cryptocurrency options in the description 15.38991 this will be a short lab focused on using telnet to connect to Cisco devices"
    ],
    "ru": [
      "Если вам нравятся эти лабораторные работы, подумайте о поддержке меня через мой патреон или варианты криптовалюты в описании 15.38991, это будет короткая лабораторная работа, посвященная использованию telnet для подключения к устройствам Cisco."
    ]
  },
  {
    "time": [
      21.108425,
      27.400059
    ],
    "en": [
      "in a previous lab we configured the console port and use that to connect to a router via PC"
    ],
    "ru": [
      "в предыдущей лабораторной работе мы настроили консольный порт и использовали его для подключения к маршрутизатору через ПК."
    ]
  },
  {
    "time": [
      27.400059,
      35.221511
    ],
    "en": [
      "in this lab we will use telnet which allows us to configure a Cisco device by connecting via a regular Ethernet port"
    ],
    "ru": [
      "в этой лабораторной работе мы будем использовать telnet, который позволяет нам настраивать устройство Cisco, подключаясь через обычный порт Ethernet."
    ]
  },
  {
    "time": [
      35.221511,
      40.435432
    ],
    "en": [
      "note that although telnet is something you should be familiar with"
    ],
    "ru": [
      "обратите внимание, что хотя telnet - это то, с чем вы должны быть знакомы"
    ]
  },
  {
    "time": [
      40.435432,
      49.260411
    ],
    "en": [
      "it is not something you will likely end up using due to a lack of security 44.50743 this is because telnet sends all data in plaintext"
    ],
    "ru": [
      "это не то, что вы, вероятно, в конечном итоге будете использовать из-за отсутствия безопасности 44.50743 это потому, что telnet отправляет все данные в виде открытого текста"
    ]
  },
  {
    "time": [
      49.260411,
      56.571148
    ],
    "en": [
      "if anyone intercepts that data they can read it including usernames and passwords and other sensitive data"
    ],
    "ru": [
      "если кто-то перехватит эти данные, он сможет их прочитать, включая имена пользователей, пароли и другие конфиденциальные данные"
    ]
  },
  {
    "time": [
      56.571148,
      60.599827
    ],
    "en": [
      "instead of telnet you will want to use SSH"
    ],
    "ru": [
      "вместо telnet вы захотите использовать SSH"
    ]
  },
  {
    "time": [
      60.599827,
      62.416328
    ],
    "en": [
      "which we will cover in another lab"
    ],
    "ru": [
      "которые мы рассмотрим в другой лаборатории"
    ]
  },
  {
    "time": [
      62.416328,
      65.912487
    ],
    "en": [
      "but with that said telnet is still something you should know"
    ],
    "ru": [
      "но с этим telnet все еще то, что вы должны знать"
    ]
  },
  {
    "time": [
      65.912487,
      68.570006
    ],
    "en": [
      "so let's practice some of the basics in this lab"
    ],
    "ru": [
      "так что давайте попрактикуемся в некоторых основах в этой лабораторной работе"
    ]
  },
  {
    "time": [
      68.570006,
      75.355148
    ],
    "en": [
      "as always try to complete the lab yourself first then continue watching this video if you have trouble"
    ],
    "ru": [
      "как всегда, попробуйте сначала пройти лабораторную работу самостоятельно, а затем продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      75.355148,
      77.266705
    ],
    "en": [
      "or watch it after to check your solution"
    ],
    "ru": [
      "или просмотрите его позже, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      77.266705,
      82.360548
    ],
    "en": [
      "if you haven't learned the commands required to do these tasks yet in your studies"
    ],
    "ru": [
      "если вы еще не выучили команды, необходимые для выполнения этих задач во время учебы"
    ]
  },
  {
    "time": [
      82.360548,
      84.955112
    ],
    "en": [
      "feel free to just watch the video to learn them"
    ],
    "ru": [
      "не стесняйтесь просто смотреть видео, чтобы узнать их"
    ]
  },
  {
    "time": [
      84.955112,
      92.530769
    ],
    "en": [
      "step one is to configure the IP addresses on switch 1 and R 1"
    ],
    "ru": [
      "Шаг первый - настроить IP-адреса на коммутаторе 1 и R 1."
    ]
  },
  {
    "time": [
      92.530769,
      96.696031
    ],
    "en": [
      "we will then use these addresses to connect to the devices later in the lab"
    ],
    "ru": [
      "затем мы будем использовать эти адреса для подключения к устройствам позже в лаборатории."
    ]
  },
  {
    "time": [
      96.696031,
      108.153922
    ],
    "en": [
      "let's go on switch 1 first 99.35214 enable conf t we will configure the IP address on the VLAN 1 interface"
    ],
    "ru": [
      "давайте сначала включим коммутатор 1 99.35214 enable conf t мы настроим IP-адрес на интерфейсе VLAN 1"
    ]
  },
  {
    "time": [
      108.153922,
      113.021492
    ],
    "en": [
      "because a regular switch interface cannot be configured with an IP address"
    ],
    "ru": [
      "потому что обычный интерфейс коммутатора не может быть настроен с IP-адресом"
    ]
  },
  {
    "time": [
      113.021492,
      118.481674
    ],
    "en": [
      "we have to configure that IP address we use to manage the device on a VLAN interface"
    ],
    "ru": [
      "мы должны настроить тот IP-адрес, который мы используем для управления устройством на интерфейсе VLAN."
    ]
  },
  {
    "time": [
      118.481674,
      120.308253
    ],
    "en": [
      "rather than on a physical interface"
    ],
    "ru": [
      "а не на физическом интерфейсе"
    ]
  },
  {
    "time": [
      120.308253,
      123.804294
    ],
    "en": [
      "so interface VLAN 1"
    ],
    "ru": [
      "так интерфейс VLAN 1"
    ]
  },
  {
    "time": [
      123.804294,
      131.271763
    ],
    "en": [
      "IP address 192.168.1.2 255.255.255.0"
    ],
    "ru": [
      "IP-адрес 192.168.1.2 255.255.255.0"
    ]
  },
  {
    "time": [
      131.271763,
      134.914793
    ],
    "en": [
      "also I'll use no shutdown to activate it"
    ],
    "ru": [
      "также я не буду использовать выключение, чтобы активировать его"
    ]
  },
  {
    "time": [
      134.914793,
      137.600192
    ],
    "en": [
      "now let's configure r1"
    ],
    "ru": [
      "теперь давайте настроим r1"
    ]
  },
  {
    "time": [
      137.600192,
      158.530171
    ],
    "en": [
      "enable conf t interface G 0 0 IP address 192.168.1.1 255.255.255.0 152.16748 remember router interfaces are administratively down by default so no shutdown"
    ],
    "ru": [
      "enable conf t interface G 0 0 IP-адрес 192.168.1.1 255.255.255.0 152.16748 помните, что интерфейсы маршрутизатора отключены административно по умолчанию, поэтому выключение не требуется"
    ]
  },
  {
    "time": [
      158.530171,
      160.685924
    ],
    "en": [
      "okay that's all for step 1"
    ],
    "ru": [
      "хорошо, это все для шага 1"
    ]
  },
  {
    "time": [
      160.685924,
      168.300749
    ],
    "en": [
      "step 2 is to configure a single user on each device 165.49378 since we're on our one let's do that first"
    ],
    "ru": [
      "Шаг 2 - настроить одного пользователя на каждом устройстве 165.49378, так как мы на нашем одном, давайте сделаем это в первую очередь"
    ]
  },
  {
    "time": [
      168.300749,
      173.869935
    ],
    "en": [
      "exit username cisco password CCNA"
    ],
    "ru": [
      "выход имя пользователя cisco пароль CCNA"
    ]
  },
  {
    "time": [
      173.869935,
      183.000866
    ],
    "en": [
      "note again that passwords are case sensitive and in this case CCNA is in all capitals 179.75098 now let's do the same on switch one"
    ],
    "ru": [
      "еще раз обратите внимание, что пароли чувствительны к регистру, и в этом случае CCNA находится во всех заглавных буквах 179.75098, теперь давайте сделаем то же самое на первом переключателе"
    ]
  },
  {
    "time": [
      183.000866,
      189.344313
    ],
    "en": [
      "exit username cisco password CCNA"
    ],
    "ru": [
      "выход имя пользователя cisco пароль CCNA"
    ]
  },
  {
    "time": [
      189.344313,
      198.932286
    ],
    "en": [
      "step three is to configure the vty lines on switch 1 and R 1"
    ],
    "ru": [
      "Шаг третий - настроить линии VTY на коммутаторе 1 и R 1."
    ]
  },
  {
    "time": [
      198.932286,
      203.107727
    ],
    "en": [
      "vty stands for virtual teletype"
    ],
    "ru": [
      "vty означает виртуальный телетайп"
    ]
  },
  {
    "time": [
      203.107727,
      208.991201
    ],
    "en": [
      "and when you create a telnet connection to a Cisco device you will be connecting to one of these vty lines"
    ],
    "ru": [
      "и когда вы создаете telnet-соединение с устройством Cisco, вы будете подключаться к одной из этих линий vty"
    ]
  },
  {
    "time": [
      208.991201,
      213.526021
    ],
    "en": [
      "there are typically 16 numbered 0 through 15"
    ],
    "ru": [
      "обычно 16 пронумерованы от 0 до 15"
    ]
  },
  {
    "time": [
      213.526021,
      223.427913
    ],
    "en": [
      "although in the running configuration they will typically be displayed as 0 through 4 then 5 through 15 220.90624 let's check on switch 1"
    ],
    "ru": [
      "хотя в текущей конфигурации они обычно отображаются как от 0 до 4, затем от 5 до 15 220.90624 давайте проверим на переключателе 1"
    ]
  },
  {
    "time": [
      223.427913,
      226.382301
    ],
    "en": [
      "do show run"
    ],
    "ru": [
      "показывать бег"
    ]
  },
  {
    "time": [
      226.382301,
      230.841299
    ],
    "en": [
      "scroll down to the bottom there we go"
    ],
    "ru": [
      "прокрутите вниз, мы идем"
    ]
  },
  {
    "time": [
      230.841299,
      244.030005
    ],
    "en": [
      "line vty 0 4 meaning line 0 through 4 then line vty 5 15 meaning alliance 5 through 15 240.39852 although it is displayed like this in the configuration"
    ],
    "ru": [
      "строка vty 0 4 означает строки с 0 по 4, затем строка vty 5 15 означает альянс с 5 по 15 240.39852, хотя в конфигурации это отображается так"
    ]
  },
  {
    "time": [
      244.030005,
      252.053253
    ],
    "en": [
      "we can simply use the command line vty 0 15 to connect to all lines from 0 through 15"
    ],
    "ru": [
      "мы можем просто использовать командную строку vty 0 15 для подключения ко всем строкам с 0 по 15"
    ]
  },
  {
    "time": [
      252.053253,
      253.009129
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      253.009129,
      257.815142
    ],
    "en": [
      "now we have two things to configure here according to the lab instructions"
    ],
    "ru": [
      "теперь у нас есть две вещи, которые нужно настроить в соответствии с лабораторными инструкциями"
    ]
  },
  {
    "time": [
      257.815142,
      268.818122
    ],
    "en": [
      "first require the use of the local user database to connect to the vty lines 263.91313 this is the same command we used when configuring the console line in a previous lab"
    ],
    "ru": [
      "сначала требуется использование локальной базы данных пользователей для подключения к линиям виртуального терминала 263.91313. Это та же команда, которую мы использовали при настройке строки консоли в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      268.818122,
      275.411018
    ],
    "en": [
      "login local since we only have one user in the local database"
    ],
    "ru": [
      "логин локальный, так как у нас есть только один пользователь в локальной базе данных"
    ]
  },
  {
    "time": [
      275.411018,
      279.158465
    ],
    "en": [
      "we will have to use the username cisco and password CCNA"
    ],
    "ru": [
      "нам нужно будет использовать имя пользователя cisco и пароль CCNA"
    ]
  },
  {
    "time": [
      279.158465,
      281.495375
    ],
    "en": [
      "when we try to tell that to this device later"
    ],
    "ru": [
      "когда мы попытаемся сказать это этому устройству позже"
    ]
  },
  {
    "time": [
      281.495375,
      287.676082
    ],
    "en": [
      "the next requirement is to allow only telnet connections to the vty lines"
    ],
    "ru": [
      "следующее требование - разрешить только telnet-подключения к линиям vty."
    ]
  },
  {
    "time": [
      287.676082,
      290.189487
    ],
    "en": [
      "this is done with this command"
    ],
    "ru": [
      "это делается с помощью этой команды"
    ]
  },
  {
    "time": [
      290.189487,
      301.482797
    ],
    "en": [
      "transport input now I'll use the question mark to see what options there are all none SSH and telnet"
    ],
    "ru": [
      "транспортный ввод сейчас я воспользуюсь вопросительным знаком, чтобы посмотреть, какие опции отсутствуют SSH и telnet"
    ]
  },
  {
    "time": [
      301.482797,
      306.921203
    ],
    "en": [
      "as I mentioned in the beginning of the video typically you'll be using SSH"
    ],
    "ru": [
      "как я упоминал в начале видео, обычно вы будете использовать SSH"
    ]
  },
  {
    "time": [
      306.921203,
      309.487609
    ],
    "en": [
      "but let's set it to telnet for this lab"
    ],
    "ru": [
      "но давайте настроим его на telnet для этой лаборатории"
    ]
  },
  {
    "time": [
      309.487609,
      315.315704
    ],
    "en": [
      "ok now let's do the same configuration on r1"
    ],
    "ru": [
      "хорошо, теперь давайте сделаем ту же настройку на r1"
    ]
  },
  {
    "time": [
      315.315704,
      324.852266
    ],
    "en": [
      "line vty 0 15 login local transport input telnet"
    ],
    "ru": [
      "строка vty 0 15 логин локальный транспорт ввод telnet"
    ]
  },
  {
    "time": [
      324.852266,
      328.554691
    ],
    "en": [
      "okay now let's type do show run"
    ],
    "ru": [
      "хорошо, теперь давай напишем, покажи, беги"
    ]
  },
  {
    "time": [
      328.554691,
      331.250855
    ],
    "en": [
      "look at the bottom here"
    ],
    "ru": [
      "посмотри внизу здесь"
    ]
  },
  {
    "time": [
      331.250855,
      335.783539
    ],
    "en": [
      "there it is our configurations have been applied to all vty lines"
    ],
    "ru": [
      "вот и наши конфигурации были применены ко всем линиям VTY"
    ]
  },
  {
    "time": [
      335.783539,
      349.020015
    ],
    "en": [
      "step four is to attempt to telnet to each device from pc1 on a simulator like packet tracer you simply click on the icons of each device to configure them"
    ],
    "ru": [
      "Шаг четвертый - попытаться подключиться по telnet к каждому устройству с pc1 на симуляторе, таком как пакетный трассировщик, вы просто щелкаете значки каждого устройства, чтобы настроить их"
    ]
  },
  {
    "time": [
      349.020015,
      358.528029
    ],
    "en": [
      "in real situations however you have to connect to the devices from a computer via the console port as we did in a previous lab or by telnet or SSH"
    ],
    "ru": [
      "однако в реальных ситуациях вам необходимо подключаться к устройствам с компьютера через консольный порт, как мы делали в предыдущей лабораторной работе, или через telnet или SSH."
    ]
  },
  {
    "time": [
      358.528029,
      363.228386
    ],
    "en": [
      "as we're going to try now 360.0355 I'll go on PC one"
    ],
    "ru": [
      "так как мы собираемся попробовать 360.0355, я пойду на один ПК"
    ]
  },
  {
    "time": [
      363.228386,
      366.614327
    ],
    "en": [
      "let's try switch one"
    ],
    "ru": [
      "давай попробуем переключить один"
    ]
  },
  {
    "time": [
      366.614327,
      378.796651
    ],
    "en": [
      "telnet 192.168.1.2 we're asked for the username which is Cisco and our password CCNA in all caps"
    ],
    "ru": [
      "telnet 192.168.1.2 нас просят ввести имя пользователя Cisco и наш пароль CCNA заглавными буквами."
    ]
  },
  {
    "time": [
      378.796651,
      380.734979
    ],
    "en": [
      "there we go"
    ],
    "ru": [
      "вот и мы"
    ]
  },
  {
    "time": [
      380.734979,
      387.866871
    ],
    "en": [
      "now we have access to the command line of switch one 383.18897 I'll type exit and now let's try our one"
    ],
    "ru": [
      "теперь у нас есть доступ к командной строке первого переключателя 383.18897 Я наберу exit, а теперь давайте попробуем наш"
    ]
  },
  {
    "time": [
      387.866871,
      396.242976
    ],
    "en": [
      "telnet 192.168.1.1 cisco CCNA"
    ],
    "ru": [
      "telnet 192.168.1.1 cisco CCNA"
    ]
  },
  {
    "time": [
      396.242976,
      399.767366
    ],
    "en": [
      "there we go now we have access to the command line of r1"
    ],
    "ru": [
      "Итак, теперь у нас есть доступ к командной строке r1"
    ]
  },
  {
    "time": [
      399.767366,
      402.176763
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
      402.176763,
      409.355247
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
      409.355247,
      412.655189
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
      412.655189,
      415.151365
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
      415.151365,
      419.076363
    ],
    "en": [
      "if you have requests for any specific labs let me know in the comment section"
    ],
    "ru": [
      "если у вас есть запросы по каким-либо конкретным лабораториям, дайте мне знать в разделе комментариев"
    ]
  },
  {
    "time": [
      419.076363,
      424.444783
    ],
    "en": [
      "if you want to support my channel please consider contributing to my patreon"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, пожалуйста, подумайте о том, чтобы внести свой вклад в мой patreon"
    ]
  },
  {
    "time": [
      424.444783,
      427.789208
    ],
    "en": [
      "patreon comm slash Jeremy's IT lab"
    ],
    "ru": [
      "patreon comm слэш ИТ-лаборатория Джереми"
    ]
  },
  {
    "time": [
      427.789208,
      433.315875
    ],
    "en": [
      "I accept Bitcoin and aetherium donations via the addresses in the description"
    ],
    "ru": [
      "Я принимаю пожертвования биткойнами и эфириумом по адресам в описании"
    ]
  },
  {
    "time": [
      433.315875,
      442.150048
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
      442.150048,
      442.150048
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
      442.150048,
      442.150048
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
      442.150048,
      442.150048
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]