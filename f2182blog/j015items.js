var objs = [
  {
    "time": [
      1.31,
      3.87
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
      3.87,
      8.54
    ],
    "en": [
      "This is a free, complete course for the CCNA 200-301."
    ],
    "ru": [
      "Это бесплатный полный курс CCNA 200-301."
    ]
  },
  {
    "time": [
      8.54,
      12.559
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
      12.559,
      19.06
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
      19.06,
      22.39
    ],
    "en": [
      "Thanks for your help. Let’s get started."
    ],
    "ru": [
      "Спасибо за вашу помощь. Давайте начнем."
    ]
  },
  {
    "time": [
      22.39,
      27.06
    ],
    "en": [
      "In this lab we’ll configure IP addresses on a Cisco router."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим IP-адреса на маршрутизаторе Cisco."
    ]
  },
  {
    "time": [
      27.06,
      33.52
    ],
    "en": [
      "This is like the demo topology I used in Day 8’s main video, I just changed the IP addresses."
    ],
    "ru": [
      "Это похоже на демонстрационную топологию, которую я использовал в основном видео Дня 8, я просто изменил IP-адреса."
    ]
  },
  {
    "time": [
      33.52,
      45.611
    ],
    "en": [
      "We still have one class A network, 15.0.0.0/8, one class B network, 182.98.0.0/16, and one"
    ],
    "ru": [
      "У нас все еще есть одна сеть класса A, 15.0.0.0/8, одна сеть класса B, 182.98.0.0/16 и одна"
    ]
  },
  {
    "time": [
      45.611,
      53.89
    ],
    "en": [
      "class C network, 201.191.20.0/24. Let’s get started."
    ],
    "ru": [
      "сеть класса C, 201.191.20.0/24. Давайте начнем."
    ]
  },
  {
    "time": [
      53.89,
      56.58
    ],
    "en": [
      "The first step is to configure R1’s hostname."
    ],
    "ru": [
      "Первым шагом является настройка имени хоста маршрутизатора R1."
    ]
  },
  {
    "time": [
      56.58,
      63.49
    ],
    "en": [
      "I haven’t done any configurations yet on R1, so it still has the default hostname of ‘router’."
    ],
    "ru": [
      "Я еще не настраивал R1, поэтому имя хоста по умолчанию - «router»."
    ]
  },
  {
    "time": [
      63.49,
      68.229
    ],
    "en": [
      "Let’s go on to the CLI of R1."
    ],
    "ru": [
      "Перейдем к интерфейсу командной строки R1."
    ]
  },
  {
    "time": [
      68.229,
      71.479
    ],
    "en": [
      "Now I’ll use enable to enter privileged exec mode."
    ],
    "ru": [
      "Теперь я воспользуюсь enable, чтобы войти в привилегированный режим exec."
    ]
  },
  {
    "time": [
      71.479,
      78.28
    ],
    "en": [
      "Then, to configure the hostname, we have to be in global config mode, so ‘conf t’."
    ],
    "ru": [
      "Затем, чтобы настроить имя хоста, мы должны находиться в режиме глобальной конфигурации, поэтому «conf t»."
    ]
  },
  {
    "time": [
      78.28,
      82.24
    ],
    "en": [
      "Now let’s set the hostname. Hostname R1."
    ],
    "ru": [
      "Теперь зададим имя хоста. Имя хоста R1."
    ]
  },
  {
    "time": [
      82.24,
      86.509
    ],
    "en": [
      "Okay, you can see the prompt changes to display the new hostname."
    ],
    "ru": [
      "Хорошо, вы можете увидеть изменения в подсказке для отображения нового имени хоста."
    ]
  },
  {
    "time": [
      86.509,
      89.679
    ],
    "en": [
      "That’s all for step 1."
    ],
    "ru": [
      "Это все для шага 1."
    ]
  },
  {
    "time": [
      89.679,
      97.71
    ],
    "en": [
      "Step 2 is to use a ‘show’ command to view a list of R1’s interfaces, their IP addresses, status, etc."
    ],
    "ru": [
      "Шаг 2 - использовать команду «show» для просмотра списка интерфейсов маршрутизатора R1, их IP-адресов, статуса и т. Д."
    ]
  },
  {
    "time": [
      97.71,
      99.53
    ],
    "en": [
      "Do you remember what command that is?"
    ],
    "ru": [
      "Вы помните, что это за команда?"
    ]
  },
  {
    "time": [
      99.53,
      104.109
    ],
    "en": [
      "It’s a very helpful command which you’ll use a lot as you configure Cisco routers."
    ],
    "ru": [
      "Это очень полезная команда, которую вы часто будете использовать при настройке маршрутизаторов Cisco."
    ]
  },
  {
    "time": [
      104.109,
      108.2
    ],
    "en": [
      "It’s show ip interface brief."
    ],
    "ru": [
      "Это краткое описание интерфейса IP."
    ]
  },
  {
    "time": [
      108.2,
      112.27
    ],
    "en": [
      "But as you can see, the command doesn’t work. Why is that?"
    ],
    "ru": [
      "Но, как видите, команда не работает. Это почему?"
    ]
  },
  {
    "time": [
      112.27,
      117.649
    ],
    "en": [
      "Well, its because ‘show’ commands are normally done from privileged exec mode."
    ],
    "ru": [
      "Ну, это потому, что команды «show» обычно выполняются из привилегированного режима exec."
    ]
  },
  {
    "time": [
      117.649,
      123.24
    ],
    "en": [
      "However, let me use the ‘up’ arrow to return to the previous command, then I’ll"
    ],
    "ru": [
      "Однако позвольте мне использовать стрелку «вверх», чтобы вернуться к предыдущей команде, тогда я"
    ]
  },
  {
    "time": [
      123.24,
      129.869
    ],
    "en": [
      "use the shortcut ‘control A’, so hold the control key and press A, and then cursor returns"
    ],
    "ru": [
      "используйте ярлык «control A», поэтому удерживайте контрольную клавишу и нажмите A, а затем курсор вернется"
    ]
  },
  {
    "time": [
      129.869,
      131.78
    ],
    "en": [
      "to the beginning of the line."
    ],
    "ru": [
      "до начала строки."
    ]
  },
  {
    "time": [
      131.78,
      139.86
    ],
    "en": [
      "Then, type ‘do’ in front of the command, and now it lets me enter the command from global config mode."
    ],
    "ru": [
      "Затем введите «do» перед командой, и теперь это позволяет мне вводить команду из режима глобальной конфигурации."
    ]
  },
  {
    "time": [
      139.86,
      144.439
    ],
    "en": [
      "Now you can see a list of interfaces, their IP addresses, which are unset at"
    ],
    "ru": [
      "Теперь вы можете увидеть список интерфейсов, их IP-адреса, которые не установлены на"
    ]
  },
  {
    "time": [
      144.439,
      146.85
    ],
    "en": [
      "the moment, and their statuses."
    ],
    "ru": [
      "момент и их статусы."
    ]
  },
  {
    "time": [
      146.85,
      152.1
    ],
    "en": [
      "Remember, the ‘status’ column indicates the Layer 1 status."
    ],
    "ru": [
      "Помните, что столбец «status» указывает статус уровня 1."
    ]
  },
  {
    "time": [
      152.1,
      157.069
    ],
    "en": [
      "Currently their status is administratively down, because Cisco router interfaces have"
    ],
    "ru": [
      "В настоящее время их статус административно отключен, поскольку интерфейсы маршрутизатора Cisco имеют"
    ]
  },
  {
    "time": [
      157.069,
      160.83
    ],
    "en": [
      "the ‘shutdown’ command applied to them by default."
    ],
    "ru": [
      "к ним по умолчанию применяется команда «выключение»."
    ]
  },
  {
    "time": [
      160.83,
      165.51
    ],
    "en": [
      "The protocol column indicates the layer 2 status of the interface."
    ],
    "ru": [
      "Столбец протокола указывает статус уровня 2 интерфейса."
    ]
  },
  {
    "time": [
      165.51,
      171.099
    ],
    "en": [
      "Because layer 1 is shutdown, layer 2 cant operate, so they are all down."
    ],
    "ru": [
      "Поскольку уровень 1 отключен, уровень 2 не может работать, поэтому все они отключены."
    ]
  },
  {
    "time": [
      171.099,
      180.79
    ],
    "en": [
      "We will configure gigabitethernet0/0, 0/1, and 0/2 in this lab, so they should all become UP, UP afterwards."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим gigabitethernet0 / 0, 0/1 и 0/2, чтобы впоследствии все они становились UP, UP."
    ]
  },
  {
    "time": [
      180.79,
      187.579
    ],
    "en": [
      "Step 3 is to configure the appropriate IP addresses on R1’s interfaces, and enable them."
    ],
    "ru": [
      "Шаг 3 - настроить соответствующие IP-адреса на интерфейсах маршрутизатора R1 и включить их."
    ]
  },
  {
    "time": [
      187.579,
      191.64
    ],
    "en": [
      "We are also instructed to configure appropriate interface descriptions."
    ],
    "ru": [
      "Нам также поручено настроить соответствующие описания интерфейсов."
    ]
  },
  {
    "time": [
      191.64,
      196.83
    ],
    "en": [
      "Let’s start on the gigabitethernet0/0 interface."
    ],
    "ru": [
      "Начнем с интерфейса gigabitethernet0 / 0."
    ]
  },
  {
    "time": [
      196.83,
      203.96
    ],
    "en": [
      "Just for this first interface, I’ll type out the whole command. Interface gigabitethernet 0/0."
    ],
    "ru": [
      "Только для этого первого интерфейса я наберу всю команду. Интерфейс gigabitethernet 0/0."
    ]
  },
  {
    "time": [
      203.96,
      212.2
    ],
    "en": [
      "There we go, as you can see the prompt has changed to show that I’m in interface configuration mode."
    ],
    "ru": [
      "Итак, как видите, подсказка изменилась, показывая, что я нахожусь в режиме настройки интерфейса."
    ]
  },
  {
    "time": [
      212.2,
      215.06
    ],
    "en": [
      "Let’s configure the IP address."
    ],
    "ru": [
      "Настроим IP-адрес."
    ]
  },
  {
    "time": [
      215.06,
      218.61
    ],
    "en": [
      "Once again, I’ll use the full commands for this first interface."
    ],
    "ru": [
      "Еще раз, я буду использовать полные команды для этого первого интерфейса."
    ]
  },
  {
    "time": [
      218.61,
      233.51
    ],
    "en": [
      "Ip address 15.255.255.254, now what’s the appropriate subnet mask for a /8 prefix length? It’s 255.0.0.0."
    ],
    "ru": [
      "IP-адрес 15.255.255.254, какова теперь соответствующая маска подсети для длины префикса / 8? Это 255.0.0.0."
    ]
  },
  {
    "time": [
      233.51,
      235.609
    ],
    "en": [
      "Now let’s configure a description."
    ],
    "ru": [
      "Теперь давайте настроим описание."
    ]
  },
  {
    "time": [
      235.609,
      240.37
    ],
    "en": [
      "I’ll indicate that this interface is connected to switch 1."
    ],
    "ru": [
      "Я укажу, что этот интерфейс подключен к коммутатору 1."
    ]
  },
  {
    "time": [
      240.37,
      247.34
    ],
    "en": [
      "description, I'll put two hashtags, to SW1, and then again, hashtags."
    ],
    "ru": [
      "описание, я поставлю два хэштега, в SW1, а затем снова хэштеги."
    ]
  },
  {
    "time": [
      247.34,
      251.95
    ],
    "en": [
      "You can use different descriptions if you want, this is just how I do descriptions."
    ],
    "ru": [
      "Вы можете использовать разные описания, если хотите, я именно так делаю описания."
    ]
  },
  {
    "time": [
      251.95,
      257.07
    ],
    "en": [
      "Finally, let’s enable the interface. No shutdown."
    ],
    "ru": [
      "Наконец, давайте включим интерфейс. Без выключения."
    ]
  },
  {
    "time": [
      257.07,
      263.139
    ],
    "en": [
      "Immediately, I get two messages indicating that the interface has come up."
    ],
    "ru": [
      "Сразу же получаю два сообщения о том, что интерфейс появился."
    ]
  },
  {
    "time": [
      263.139,
      269.56
    ],
    "en": [
      "Before checking on the status of the interface, I’ll configure the other two interfaces."
    ],
    "ru": [
      "Прежде чем проверять статус интерфейса, я настрою два других интерфейса."
    ]
  },
  {
    "time": [
      269.56,
      276.09
    ],
    "en": [
      "To switch to configuring another interface, I don’t have to exit back to global config mode first."
    ],
    "ru": [
      "Чтобы переключиться на настройку другого интерфейса, мне не нужно сначала выходить обратно в режим глобальной конфигурации."
    ]
  },
  {
    "time": [
      276.09,
      283.4
    ],
    "en": [
      "I can just type ‘interface g0/1’, and now I’m in interface config mode for gigabitethernet 0/1."
    ],
    "ru": [
      "Я могу просто ввести «interface g0 / 1», и теперь я нахожусь в режиме конфигурации интерфейса для gigabitethernet 0/1."
    ]
  },
  {
    "time": [
      283.4,
      293.85
    ],
    "en": [
      "Let’s set the IP address. IP address 182.98.255.254."
    ],
    "ru": [
      "Зададим IP-адрес. IP-адрес 182.98.255.254."
    ]
  },
  {
    "time": [
      293.85,
      301.99
    ],
    "en": [
      "The subnet mask for a /16 prefix length is 255.255.0.0. And the description."
    ],
    "ru": [
      "Маска подсети для длины префикса / 16 - 255.255.0.0. И описание."
    ]
  },
  {
    "time": [
      301.99,
      309.76
    ],
    "en": [
      "Description ## to SW2 ##. Let’s enable it. No shut."
    ],
    "ru": [
      "Описание от ## до SW2 ##. Давайте включим это. Нет, заткнись."
    ]
  },
  {
    "time": [
      309.76,
      319.3
    ],
    "en": [
      "Okay, now let’s go to the last interface. Int g0/2."
    ],
    "ru": [
      "Хорошо, теперь перейдем к последнему интерфейсу. Инт g0 / 2."
    ]
  },
  {
    "time": [
      319.3,
      331.68
    ],
    "en": [
      "Ip address 201.191.20.254, and the subnet mask for a /24 prefix length is 255.255.255.0. Next, the description."
    ],
    "ru": [
      "IP-адрес 201.191.20.254, а маска подсети для длины префикса / 24 - 255.255.255.0. Далее описание."
    ]
  },
  {
    "time": [
      331.68,
      340.259
    ],
    "en": [
      "Description ## to SW3 ##. Finally, let’s enable it. No shut."
    ],
    "ru": [
      "Описание от ## до SW3 ##. Наконец, давайте включим его. Нет, заткнись."
    ]
  },
  {
    "time": [
      340.259,
      345.04
    ],
    "en": [
      "Okay, since we’re done with the configurations I’ll use the command ‘end’ to go back"
    ],
    "ru": [
      "Хорошо, поскольку мы закончили с конфигурациями, я воспользуюсь командой \"end\", чтобы вернуться"
    ]
  },
  {
    "time": [
      345.04,
      346.63
    ],
    "en": [
      "to privileged exec mode."
    ],
    "ru": [
      "в привилегированный режим exec."
    ]
  },
  {
    "time": [
      346.63,
      351.479
    ],
    "en": [
      "Alternatively, I could have used the ‘exit’ command twice."
    ],
    "ru": [
      "В качестве альтернативы я мог бы дважды использовать команду «exit»."
    ]
  },
  {
    "time": [
      351.479,
      357.9
    ],
    "en": [
      "Once to return to global config mode, and then a second time to return to privileged exec mode."
    ],
    "ru": [
      "Один раз, чтобы вернуться в режим глобальной конфигурации, а затем второй раз, чтобы вернуться в привилегированный режим exec."
    ]
  },
  {
    "time": [
      357.9,
      360.81
    ],
    "en": [
      "Now let’s check on the status of the interfaces."
    ],
    "ru": [
      "Теперь давайте проверим статус интерфейсов."
    ]
  },
  {
    "time": [
      360.81,
      363.74
    ],
    "en": [
      "Show ip interface brief."
    ],
    "ru": [
      "Показать краткое описание IP-интерфейса."
    ]
  },
  {
    "time": [
      363.74,
      370.52
    ],
    "en": [
      "Now you can see the IP addresses we configured, the method lists ‘manual’ instead of unset,"
    ],
    "ru": [
      "Теперь вы можете увидеть настроенные нами IP-адреса, метод показывает \"вручную\" вместо \"не задано\","
    ]
  },
  {
    "time": [
      370.52,
      375.169
    ],
    "en": [
      "and the layer 1 and layer 2 statuses of the interfaces are up and up."
    ],
    "ru": [
      "и статусы уровней 1 и 2 интерфейсов работают и работают."
    ]
  },
  {
    "time": [
      375.169,
      385.039
    ],
    "en": [
      "Now, step 5 says to view the running config to confirm the changes, and then save the config. Show running-config."
    ],
    "ru": [
      "Теперь на шаге 5 говорится, что нужно просмотреть текущую конфигурацию, чтобы подтвердить изменения, а затем сохранить конфигурацию. Показать running-config."
    ]
  },
  {
    "time": [
      385.039,
      387.19
    ],
    "en": [
      "Here are the interfaces."
    ],
    "ru": [
      "Вот интерфейсы."
    ]
  },
  {
    "time": [
      387.19,
      391.77
    ],
    "en": [
      "You can see the descriptions, and ip addresses we configured."
    ],
    "ru": [
      "Вы можете увидеть описания и настроенные нами IP-адреса."
    ]
  },
  {
    "time": [
      391.77,
      395.77
    ],
    "en": [
      "Notice the default duplex auto and speed auto commands."
    ],
    "ru": [
      "Обратите внимание на команды дуплексного автоматического режима и автоматического режима скорости по умолчанию."
    ]
  },
  {
    "time": [
      395.77,
      401.49
    ],
    "en": [
      "Also, if you look at the vlan1 interface, you can see the shutdown command, which as"
    ],
    "ru": [
      "Кроме того, если вы посмотрите на интерфейс vlan1, вы можете увидеть команду выключения, которая как"
    ]
  },
  {
    "time": [
      401.49,
      404.78
    ],
    "en": [
      "I said is applied by default to cisco router interfaces."
    ],
    "ru": [
      "Я сказал, применяется по умолчанию к интерфейсам маршрутизатора Cisco."
    ]
  },
  {
    "time": [
      404.78,
      407.75
    ],
    "en": [
      "Okay, let’s save the config."
    ],
    "ru": [
      "Хорошо, сохраним конфиг."
    ]
  },
  {
    "time": [
      407.75,
      418.08
    ],
    "en": [
      "I mentioned in a previous video that there are a few ways to save the config. Copy running-config startup-config. Write memory. Or, just write."
    ],
    "ru": [
      "В предыдущем видео я упоминал, что есть несколько способов сохранить конфигурацию. Скопируйте файл running-config startup-config. Напишите в память. Или просто напишите."
    ]
  },
  {
    "time": [
      418.08,
      425.289
    ],
    "en": [
      "I like to use the shortcut version of write, W R. There we go."
    ],
    "ru": [
      "Мне нравится использовать сокращенную версию write, W R. Итак, мы идем."
    ]
  },
  {
    "time": [
      425.289,
      430.54
    ],
    "en": [
      "Step 6 is to configure the IP addresses of PC1, PC2, and PC3."
    ],
    "ru": [
      "Шаг 6 - настроить IP-адреса ПК1, ПК2 и ПК3."
    ]
  },
  {
    "time": [
      430.54,
      438.3
    ],
    "en": [
      "I’ll go on PC1 first. To configure the IP address, click config up here."
    ],
    "ru": [
      "Я сначала пойду на ПК1. Чтобы настроить IP-адрес, щелкните здесь."
    ]
  },
  {
    "time": [
      438.3,
      441.449
    ],
    "en": [
      "First, notice that I pre-configured the gateway here."
    ],
    "ru": [
      "Во-первых, обратите внимание, что я предварительно настроил шлюз здесь."
    ]
  },
  {
    "time": [
      441.449,
      445.889
    ],
    "en": [
      "I’ll talk about what the purpose of the gateway is when we talk more about routing,"
    ],
    "ru": [
      "Я расскажу о назначении шлюза, когда мы поговорим о маршрутизации,"
    ]
  },
  {
    "time": [
      445.889,
      449.4
    ],
    "en": [
      "but notice that its R1’s IP address."
    ],
    "ru": [
      "но обратите внимание, что это IP-адрес маршрутизатора R1."
    ]
  },
  {
    "time": [
      449.4,
      458.389
    ],
    "en": [
      "Now, to configure the PC's IP address, click on fastethernet0 here, that is PC1’s network interface card."
    ],
    "ru": [
      "Теперь, чтобы настроить IP-адрес ПК, щелкните здесь fastethernet0, то есть сетевой интерфейсной плате ПК1."
    ]
  },
  {
    "time": [
      458.389,
      463.79
    ],
    "en": [
      "And then here you can configure the IP address. 15.0.0.1."
    ],
    "ru": [
      "А затем здесь вы можете настроить IP-адрес. 15.0.0.1."
    ]
  },
  {
    "time": [
      463.79,
      465.909
    ],
    "en": [
      "And look at the subnet mask."
    ],
    "ru": [
      "И посмотрите на маску подсети."
    ]
  },
  {
    "time": [
      465.909,
      472.319
    ],
    "en": [
      "It automatically fills in 255.0.0.0, since this is a class A address."
    ],
    "ru": [
      "Он автоматически заполняет 255.0.0.0, поскольку это адрес класса А."
    ]
  },
  {
    "time": [
      472.319,
      474.74
    ],
    "en": [
      "Okay, now we can exit out of here."
    ],
    "ru": [
      "Хорошо, теперь мы можем выйти отсюда."
    ]
  },
  {
    "time": [
      474.74,
      484.319
    ],
    "en": [
      "Let’s do the same on PC2. Click on PC2. Click config. Click on fastethernet0."
    ],
    "ru": [
      "Сделаем то же самое на ПК2. Щелкните ПК2. Щелкните config. Щелкните fastethernet0."
    ]
  },
  {
    "time": [
      484.319,
      492.81
    ],
    "en": [
      "The IP address is 182.98.0.1, and once again it automatically fills in the subnet mask,"
    ],
    "ru": [
      "IP-адрес 182.98.0.1, и снова он автоматически заполняет маску подсети,"
    ]
  },
  {
    "time": [
      492.81,
      499.77
    ],
    "en": [
      "this time 255.255.0.0 because this is a class B address."
    ],
    "ru": [
      "на этот раз 255.255.0.0, потому что это адрес класса B."
    ]
  },
  {
    "time": [
      499.77,
      507.06
    ],
    "en": [
      "Now let’s go on PC3. Click on PC3. Click config. Fastethernet0."
    ],
    "ru": [
      "Теперь перейдем к PC3. Щелкните ПК3. Щелкните config. Fastethernet0."
    ]
  },
  {
    "time": [
      507.06,
      513.289
    ],
    "en": [
      "IP address of 201.191.20.1."
    ],
    "ru": [
      "IP-адрес 201.191.20.1."
    ]
  },
  {
    "time": [
      513.289,
      520.349
    ],
    "en": [
      "And this time the subnet mask is 255.255.255.0, for this class C address."
    ],
    "ru": [
      "И на этот раз маска подсети 255.255.255.0 для этого адреса класса C."
    ]
  },
  {
    "time": [
      520.349,
      529.9
    ],
    "en": [
      "Okay, finally let’s go back to PC1 and try to ping. Click desktop, then command prompt."
    ],
    "ru": [
      "Хорошо, наконец-то вернемся к ПК1 и попробуем проверить связь. Щелкните рабочий стол, затем командную строку."
    ]
  },
  {
    "time": [
      529.9,
      543.16
    ],
    "en": [
      "Now I’ll try to ping PC2. Ping 182.98.0.1."
    ],
    "ru": [
      "Теперь я попробую проверить связь с ПК2. Пинг 182.98.0.1."
    ]
  },
  {
    "time": [
      543.16,
      558.3
    ],
    "en": [
      "Okay, looks like PC1 can reach PC2. How about PC3? Ping 201.191.20.1."
    ],
    "ru": [
      "Хорошо, похоже, что ПК1 может подключиться к ПК2. А как насчет PC3? Пинг 201.191.20.1."
    ]
  },
  {
    "time": [
      558.3,
      563.12
    ],
    "en": [
      "Great, PC1 can ping PC3 as well."
    ],
    "ru": [
      "Отлично, ПК1 может пинговать и ПК3."
    ]
  },
  {
    "time": [
      563.12,
      568.54
    ],
    "en": [
      "So, in this lab we looked at how to configure IP addresses on router interfaces, how to"
    ],
    "ru": [
      "Итак, в этой лабораторной работе мы рассмотрели, как настроить IP-адреса на интерфейсах маршрутизатора, как"
    ]
  },
  {
    "time": [
      568.54,
      575.18
    ],
    "en": [
      "configure interface descriptions, and how to enable interfaces with the ‘no shutdown’ command."
    ],
    "ru": [
      "настроить описания интерфейсов и как включить интерфейсы с помощью команды «no shutdown»."
    ]
  },
  {
    "time": [
      575.18,
      581.45
    ],
    "en": [
      "We also configured IP addresses on PCs in packet tracer and confirmed reachability with ping."
    ],
    "ru": [
      "Мы также настроили IP-адреса на ПК в пакетном трассировщике и подтвердили доступность с помощью ping."
    ]
  },
  {
    "time": [
      581.45,
      584.2
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Это все для этой лаборатории."
    ]
  },
  {
    "time": [
      584.2,
      585.79
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
      585.79,
      589.69
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
      589.69,
      593.029
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
      593.029,
      596.24
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
      596.24,
      603.12
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
      603.12,
      603.12
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]