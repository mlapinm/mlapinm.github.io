let objs = [
  {
    "time": [
      1.23,
      3.72
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
      3.72,
      6.98
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
      6.98,
      11.03
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
      11.03,
      17.15
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
      17.15,
      19.48
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
      19.48,
      22.25
    ],
    "en": [
      "You may recognize this network topology."
    ],
    "ru": [
      "Вы можете узнать эту топологию сети."
    ]
  },
  {
    "time": [
      22.25,
      25.72
    ],
    "en": [
      "This is the same network we configured in the previous lab."
    ],
    "ru": [
      "Это та же сеть, которую мы настроили в предыдущей лабораторной работе."
    ]
  },
  {
    "time": [
      25.72,
      33.57
    ],
    "en": [
      "However, this time there are a few configuration errors, so PC1 and PC2 are unable to ping each other."
    ],
    "ru": [
      "Однако на этот раз есть несколько ошибок конфигурации, поэтому ПК1 и ПК2 не могут пинговать друг друга."
    ]
  },
  {
    "time": [
      33.57,
      38.2
    ],
    "en": [
      "each other. As the lab instructions say, there is one misconfiguration per router, so we have to"
    ],
    "ru": [
      "друг с другом. Как сказано в лабораторных инструкциях, на каждый маршрутизатор может быть одна неверная конфигурация, поэтому мы должны"
    ]
  },
  {
    "time": [
      38.2,
      41.77
    ],
    "en": [
      "find and fix the misconfigurations."
    ],
    "ru": [
      "найти и исправить неправильные конфигурации."
    ]
  },
  {
    "time": [
      41.77,
      45.44
    ],
    "en": [
      "Troubleshooting labs like this are great practice for the CCNA."
    ],
    "ru": [
      "Подобные лаборатории по поиску и устранению неисправностей - отличная практика для CCNA."
    ]
  },
  {
    "time": [
      45.44,
      49.76
    ],
    "en": [
      "Troubleshooting helps test your knowledge of the concepts, and troubleshooting questions"
    ],
    "ru": [
      "Устранение неполадок помогает проверить ваши знания концепций и задать вопросы по устранению неполадок."
    ]
  },
  {
    "time": [
      49.76,
      52.92
    ],
    "en": [
      "may also appear on the CCNA exam itself."
    ],
    "ru": [
      "может также появиться на самом экзамене CCNA."
    ]
  },
  {
    "time": [
      52.92,
      58.859
    ],
    "en": [
      "I highly recommend you try to complete this lab yourself first, if you watch the video"
    ],
    "ru": [
      "Я настоятельно рекомендую вам сначала попробовать выполнить эту лабораторную работу самостоятельно, если вы посмотрите видео."
    ]
  },
  {
    "time": [
      58.859,
      62.84
    ],
    "en": [
      "before you will already know what the problems in the network are and you won’t"
    ],
    "ru": [
      "прежде, чем вы уже узнаете, в чем проблемы в сети, и не узнаете"
    ]
  },
  {
    "time": [
      62.84,
      65.75
    ],
    "en": [
      "practice your own troubleshooting skills."
    ],
    "ru": [
      "Практикуйте свои собственные навыки поиска и устранения неисправностей."
    ]
  },
  {
    "time": [
      65.75,
      70.78
    ],
    "en": [
      "Okay, before we get started troubleshooting, we should confirm the problem."
    ],
    "ru": [
      "Хорошо, прежде чем мы приступим к устранению неполадок, мы должны подтвердить проблему."
    ]
  },
  {
    "time": [
      70.78,
      74.33
    ],
    "en": [
      "PC1 and PC2 should not be able to ping eachother."
    ],
    "ru": [
      "Компьютеры PC1 и PC2 не должны иметь возможность отправлять эхо-запросы друг другу."
    ]
  },
  {
    "time": [
      74.33,
      78.01
    ],
    "en": [
      "I’ll go on PC1 and try to ping PC2."
    ],
    "ru": [
      "Я пойду на ПК1 и попробую проверить связь с ПК2."
    ]
  },
  {
    "time": [
      78.01,
      93.78
    ],
    "en": [
      "Okay, let’s send that ping. Ping 192.168.3.1."
    ],
    "ru": [
      "Хорошо, давайте отправим этот пинг. Пинг 192.168.3.1."
    ]
  },
  {
    "time": [
      93.78,
      97.25999999999999
    ],
    "en": [
      "Ping 192.168.3.1. Okay, the ping indeed does not work."
    ],
    "ru": [
      "Пинг 192.168.3.1. Ладно, пинг действительно не работает."
    ]
  },
  {
    "time": [
      97.25999999999999,
      103.53999999999999
    ],
    "en": [
      "Although the misconfigurations are on the routers in this lab, let’s quickly check the PC’s configuration."
    ],
    "ru": [
      "Несмотря на то, что в этой лабораторной работе маршрутизаторы имеют неправильную конфигурацию, давайте быстро проверим конфигурацию ПК."
    ]
  },
  {
    "time": [
      103.53999999999999,
      109.57
    ],
    "en": [
      "the PC’s configuration. To check the configuration on a windows PC, use the command IPCONFIG."
    ],
    "ru": [
      "конфигурация ПК. Чтобы проверить конфигурацию на ПК с Windows, используйте команду IPCONFIG."
    ]
  },
  {
    "time": [
      109.57,
      116.0
    ],
    "en": [
      "Here you can see the IP address, subnet mask, and default gateway."
    ],
    "ru": [
      "Здесь вы можете увидеть IP-адрес, маску подсети и шлюз по умолчанию."
    ]
  },
  {
    "time": [
      116.0,
      121.18
    ],
    "en": [
      "If you want more detail, use the command IPCONFIG /ALL."
    ],
    "ru": [
      "Если вам нужны подробности, используйте команду IPCONFIG / ALL."
    ]
  },
  {
    "time": [
      121.18,
      124.43
    ],
    "en": [
      "This gives more information, such as the physical address."
    ],
    "ru": [
      "Это дает больше информации, например физический адрес."
    ]
  },
  {
    "time": [
      124.43,
      125.95
    ],
    "en": [
      "What is the physical address?"
    ],
    "ru": [
      "Какой физический адрес?"
    ]
  },
  {
    "time": [
      125.95,
      128.94
    ],
    "en": [
      "Well, it’s the MAC address."
    ],
    "ru": [
      "Ну, это MAC-адрес."
    ]
  },
  {
    "time": [
      128.94,
      133.409
    ],
    "en": [
      "Okay, let’s see if we can ping the default gateway, since to reach other networks we"
    ],
    "ru": [
      "Хорошо, давайте посмотрим, сможем ли мы проверить связь со шлюзом по умолчанию, поскольку для доступа к другим сетям мы"
    ]
  },
  {
    "time": [
      133.409,
      144.1
    ],
    "en": [
      "need to be able to reach the default gateway. PING 192.168.1.254."
    ],
    "ru": [
      "необходимо иметь доступ к шлюзу по умолчанию. ПИНГ 192.168.1.254."
    ]
  },
  {
    "time": [
      144.1,
      146.439
    ],
    "en": [
      "PING 192.168.1.254. Okay, no problems here."
    ],
    "ru": [
      "ПИНГ 192.168.1.254. Ладно, здесь нет проблем."
    ]
  },
  {
    "time": [
      146.439,
      156.62
    ],
    "en": [
      "Let’s go on R1 now and see if we can find the issue...enter privileged exec mode with ENABLE."
    ],
    "ru": [
      "Теперь перейдем к R1 и посмотрим, сможем ли мы найти проблему ... войдите в привилегированный режим exec с помощью ENABLE."
    ]
  },
  {
    "time": [
      156.62,
      160.269
    ],
    "en": [
      "ENABLE. First I’ll check if the interface configuration is okay."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. Сначала я проверю, в порядке ли конфигурация интерфейса."
    ]
  },
  {
    "time": [
      160.269,
      168.2
    ],
    "en": [
      "SHOW IP INTERFACE BRIEF...the addresses are correct, and both interfaces are UP/UP, so"
    ],
    "ru": [
      "ПОКАЗАТЬ КРАТКОЕ ОПИСАНИЕ IP-ИНТЕРФЕЙСА ... адреса верны, и оба интерфейса работают ВВЕРХ / ВВЕРХ, поэтому"
    ]
  },
  {
    "time": [
      168.2,
      170.59
    ],
    "en": [
      "the interface configuration is fine."
    ],
    "ru": [
      "конфигурация интерфейса в порядке."
    ]
  },
  {
    "time": [
      170.59,
      173.159
    ],
    "en": [
      "Let’s check the routing table."
    ],
    "ru": [
      "Давайте проверим таблицу маршрутизации."
    ]
  },
  {
    "time": [
      173.159,
      184.42
    ],
    "en": [
      "SHOW IP ROUTE...here’s the static route for the 192.168.3.0/24 network, but can you see the misconfiguration?"
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ ... вот статический маршрут для сети 192.168.3.0/24, но видите ли вы неправильную конфигурацию?"
    ]
  },
  {
    "time": [
      184.42,
      193.56
    ],
    "en": [
      "see the misconfiguration? It says via 192.168.12.3, but actually the next hop address should be 192.168.12.2, which"
    ],
    "ru": [
      "видите неправильную конфигурацию? Он говорит через 192.168.12.3, но на самом деле адрес следующего перехода должен быть 192.168.12.2, что"
    ]
  },
  {
    "time": [
      193.56,
      197.209
    ],
    "en": [
      "is the IP address of R2’s G0/0 interface."
    ],
    "ru": [
      "- это IP-адрес интерфейса G0 / 0 маршрутизатора R2."
    ]
  },
  {
    "time": [
      197.209,
      200.769
    ],
    "en": [
      "Let’s check it in the running config."
    ],
    "ru": [
      "Проверим это в работающей конфигурации."
    ]
  },
  {
    "time": [
      200.769,
      206.45
    ],
    "en": [
      "Show running-config, and then I’m going to filter the output by using the PIPE symbol,"
    ],
    "ru": [
      "Покажите running-config, а затем я собираюсь отфильтровать вывод с помощью символа PIPE,"
    ]
  },
  {
    "time": [
      206.45,
      210.16
    ],
    "en": [
      "INCLUDE, and then ip route."
    ],
    "ru": [
      "ВКЛЮЧИТЬ, а затем ip route."
    ]
  },
  {
    "time": [
      210.16,
      212.7
    ],
    "en": [
      "Here you can see the configuration statement."
    ],
    "ru": [
      "Здесь вы можете увидеть заявление о конфигурации."
    ]
  },
  {
    "time": [
      212.7,
      222.23
    ],
    "en": [
      "I’m going to right click to copy it, and then go to global config mode. CONFIGURE TERMINAL."
    ],
    "ru": [
      "Я собираюсь щелкнуть правой кнопкой мыши, чтобы скопировать его, а затем перейду в режим глобальной конфигурации. НАСТРОИТЬ ТЕРМИНАЛ."
    ]
  },
  {
    "time": [
      222.23,
      229.6
    ],
    "en": [
      "CONFIGURE TERMINAL. Now I’ll paste in the configuration statement, and use the keyboard shortcut CTRL+A to go to"
    ],
    "ru": [
      "НАСТРОИТЬ ТЕРМИНАЛ. Теперь я вставлю оператор конфигурации и воспользуюсь сочетанием клавиш CTRL + A, чтобы перейти к"
    ]
  },
  {
    "time": [
      229.6,
      235.26
    ],
    "en": [
      "the beginning of the line. Type NO, followed by a space, and then hit enter."
    ],
    "ru": [
      "начало строки. Введите NO, затем пробел и нажмите Enter."
    ]
  },
  {
    "time": [
      235.26,
      239.56900000000002
    ],
    "en": [
      "and that deletes the configuration statement. Let’s check."
    ],
    "ru": [
      "и это удаляет оператор конфигурации. Давайте проверим."
    ]
  },
  {
    "time": [
      239.56900000000002,
      248.15
    ],
    "en": [
      "Let’s check. DO SHOW RUNNING-CONFIG, PIPE, INCLUDE IP ROUTE. Okay, it’s gone."
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ RUNNING-CONFIG, PIPE, ВКЛЮЧИТЬ IP-МАРШРУТ. Ладно, его больше нет."
    ]
  },
  {
    "time": [
      248.15,
      254.3
    ],
    "en": [
      "Okay, it’s gone. Now I’ll paste in the configuration statement once more, and change this 3 to a 2."
    ],
    "ru": [
      "Ладно, его больше нет. Теперь я еще раз вставлю оператор конфигурации и заменим это 3 на 2."
    ]
  },
  {
    "time": [
      254.3,
      259.88
    ],
    "en": [
      "I’ll use the up arrows to go back to the show running-config command, and now you can"
    ],
    "ru": [
      "Я воспользуюсь стрелками вверх, чтобы вернуться к команде show running-config, и теперь вы можете"
    ]
  },
  {
    "time": [
      259.88,
      262.44
    ],
    "en": [
      "see we have the correct configuration statement."
    ],
    "ru": [
      "увидим, что у нас есть правильная конфигурация."
    ]
  },
  {
    "time": [
      262.44,
      266.19
    ],
    "en": [
      "Let’s check the routing table one last time."
    ],
    "ru": [
      "Давайте в последний раз проверим таблицу маршрутизации."
    ]
  },
  {
    "time": [
      266.19,
      269.32
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
      269.32,
      270.68
    ],
    "en": [
      "Okay, there’s the correct route."
    ],
    "ru": [
      "Хорошо, это правильный маршрут."
    ]
  },
  {
    "time": [
      270.68,
      275.17
    ],
    "en": [
      "So, we have fixed the problem on R1."
    ],
    "ru": [
      "Итак, мы устранили проблему на R1."
    ]
  },
  {
    "time": [
      275.17,
      280.98
    ],
    "en": [
      "Now let’s move on to R2. Enter privileged exec mode with ENABLE."
    ],
    "ru": [
      "Теперь перейдем к R2. Войдите в привилегированный режим exec, нажав ENABLE."
    ]
  },
  {
    "time": [
      280.98,
      284.65999999999997
    ],
    "en": [
      "And let’s check the interface configuration."
    ],
    "ru": [
      "И давайте проверим конфигурацию интерфейса."
    ]
  },
  {
    "time": [
      284.65999999999997,
      288.19
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
      288.19,
      293.61
    ],
    "en": [
      "The IP addresses both are correct, and the interfaces are UP/UP, so no problems here."
    ],
    "ru": [
      "Оба IP-адреса правильные, а интерфейсы - ВВЕРХ / ВВЕРХ, так что здесь нет проблем."
    ]
  },
  {
    "time": [
      293.61,
      298.87
    ],
    "en": [
      "Let’s check the routing table. SHOW IP ROUTE."
    ],
    "ru": [
      "Давайте проверим таблицу маршрутизации. ПОКАЗАТЬ IP-МАРШРУТ."
    ]
  },
  {
    "time": [
      298.87,
      309.69
    ],
    "en": [
      "SHOW IP ROUTE. We have two static routes as expected, 192.168.1.0/24 via 192.168.12.1 is correct. And"
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ. У нас есть два статических маршрута, как и ожидалось, 192.168.1.0/24 через 192.168.12.1 правильно. А также"
    ]
  },
  {
    "time": [
      309.69,
      317.28
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
      309.69,
      317.28
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
      317.28,
      326.42
    ],
    "en": [
      "To reach the 192.168.3.0/24 network, R2 should use the gigabitethernet0/1 interface, not 0/0."
    ],
    "ru": [
      "Чтобы подключиться к сети 192.168.3.0/24, R2 должен использовать интерфейс gigabitethernet0 / 1, а не 0/0."
    ]
  },
  {
    "time": [
      326.42,
      334.51
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
      326.42,
      334.51
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
      334.51,
      344.28
    ],
    "en": [
      "CONFIGURE TERMINAL. IP ROUTE 192.168.3.0 255.255.255.0 g0/1."
    ],
    "ru": [
      "НАСТРОИТЬ ТЕРМИНАЛ. IP-МАРШРУТ 192.168.3.0 255.255.255.0 g0 / 1."
    ]
  },
  {
    "time": [
      344.28,
      346.96
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
      346.96,
      353.84000000000003
    ],
    "en": [
      "Okay, you can see both routes are kept in the routing table, the second does not override the first."
    ],
    "ru": [
      "Хорошо, вы можете видеть, что оба маршрута хранятся в таблице маршрутизации, второй не отменяет первый."
    ]
  },
  {
    "time": [
      353.84000000000003,
      358.611
    ],
    "en": [
      "the first. Because both are in the routing table, this means the router will ‘load-balance’ over"
    ],
    "ru": [
      "первое. Поскольку оба они находятся в таблице маршрутизации, это означает, что маршрутизатор будет «балансировать нагрузку»"
    ]
  },
  {
    "time": [
      358.611,
      366.49
    ],
    "en": [
      "the two routes, sending some packets out of G0/0, and some packets out of G0/1."
    ],
    "ru": [
      "два маршрута, отправка некоторых пакетов из G0 / 0 и некоторых пакетов из G0 / 1."
    ]
  },
  {
    "time": [
      366.49,
      371.56
    ],
    "en": [
      "Sometimes load-balancing is a good thing, but in this case the G0/0 interface is totally"
    ],
    "ru": [
      "Иногда балансировка нагрузки - это хорошо, но в этом случае интерфейс G0 / 0 полностью отключен."
    ]
  },
  {
    "time": [
      371.56,
      376.06
    ],
    "en": [
      "wrong, so we should remove that configuration statement."
    ],
    "ru": [
      "неправильно, поэтому мы должны удалить этот оператор конфигурации."
    ]
  },
  {
    "time": [
      376.06,
      382.9
    ],
    "en": [
      "DO SHOW RUNNING-CONFIG, PIPE, INCLUDE IP ROUTE. Okay,"
    ],
    "ru": [
      "ПОКАЗАТЬ RUNNING-CONFIG, PIPE, ВКЛЮЧИТЬ IP-МАРШРУТ. Хорошо,"
    ]
  },
  {
    "time": [
      382.9,
      393.18
    ],
    "en": [
      "right click to copy, right click to paste. Hit CTRL-A to skip to the beginning of the line, and type no."
    ],
    "ru": [
      "щелкните правой кнопкой мыши, чтобы скопировать, щелкните правой кнопкой мыши, чтобы вставить. Нажмите CTRL-A, чтобы перейти к началу строки, и введите no."
    ]
  },
  {
    "time": [
      393.18,
      396.92
    ],
    "en": [
      "type no. Let’s see if the route was removed from the routing table."
    ],
    "ru": [
      "тип нет. Посмотрим, был ли маршрут удален из таблицы маршрутизации."
    ]
  },
  {
    "time": [
      396.92,
      399.29
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
      399.29,
      409.22
    ],
    "en": [
      "Okay, now we only have one route to 192.168.3.0/24, using the correct interface, G0/1."
    ],
    "ru": [
      "Хорошо, теперь у нас есть только один маршрут к 192.168.3.0/24 с использованием правильного интерфейса G0 / 1."
    ]
  },
  {
    "time": [
      409.22,
      417.6
    ],
    "en": [
      "Finally let’s look for the issue on R3. First enter privileged exec mode with ENABLE."
    ],
    "ru": [
      "Наконец, давайте поищем проблему на R3. Сначала войдите в привилегированный режим exec, нажав ENABLE."
    ]
  },
  {
    "time": [
      417.6,
      421.33
    ],
    "en": [
      "And once again I’ll check the interface configuration first."
    ],
    "ru": [
      "И еще раз сначала проверю конфигурацию интерфейса."
    ]
  },
  {
    "time": [
      421.33,
      425.14
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
      425.14,
      430.01
    ],
    "en": [
      "Both interfaces are UP/UP, however there is a misconfiguration here."
    ],
    "ru": [
      "Оба интерфейса - ВВЕРХ / ВВЕРХ, однако здесь есть неправильная конфигурация."
    ]
  },
  {
    "time": [
      430.01,
      443.08
    ],
    "en": [
      "R3’s gigabitethernet0/0 interface should have an IP address of 192.168.13.3, not 192.168.23.3. Let’s fix that."
    ],
    "ru": [
      "Интерфейс gigabitethernet0 / 0 маршрутизатора R3 должен иметь IP-адрес 192.168.13.3, а не 192.168.23.3. Давай исправим это."
    ]
  },
  {
    "time": [
      443.08,
      446.67
    ],
    "en": [
      "Let’s fix that. CONFIGURE TERMINAL. INTERFACE G0/0."
    ],
    "ru": [
      "Давай исправим это. НАСТРОИТЬ ТЕРМИНАЛ. ИНТЕРФЕЙС G0 / 0."
    ]
  },
  {
    "time": [
      446.67,
      453.77
    ],
    "en": [
      "INTERFACE G0/0. Now, unlike when configuring routes, we don’t have to remove the current configuration first."
    ],
    "ru": [
      "ИНТЕРФЕЙС G0 / 0. Теперь, в отличие от настройки маршрутов, нам не нужно предварительно удалять текущую конфигурацию."
    ]
  },
  {
    "time": [
      453.77,
      458.6
    ],
    "en": [
      "If we enter a new IP address, it will overwrite the current IP address."
    ],
    "ru": [
      "Если мы введем новый IP-адрес, он перезапишет текущий IP-адрес."
    ]
  },
  {
    "time": [
      458.6,
      462.24
    ],
    "en": [
      "Let’s see the config before and after."
    ],
    "ru": [
      "Давайте посмотрим на конфигурацию до и после."
    ]
  },
  {
    "time": [
      462.24,
      469.5
    ],
    "en": [
      "DO SHOW RUNNING-CONFIG. Okay, here’s the incorrect IP address."
    ],
    "ru": [
      "ПОКАЗАТЬ RUNNING-CONFIG. Хорошо, вот неправильный IP-адрес."
    ]
  },
  {
    "time": [
      469.5,
      472.42
    ],
    "en": [
      "Now let’s configure the correct IP address."
    ],
    "ru": [
      "Теперь давайте настроим правильный IP-адрес."
    ]
  },
  {
    "time": [
      472.42,
      480.4
    ],
    "en": [
      "IP ADDRESS 192.168.13.3 255.255.255.0."
    ],
    "ru": [
      "IP-АДРЕС 192.168.13.3 255.255.255.0."
    ]
  },
  {
    "time": [
      480.4,
      483.09
    ],
    "en": [
      "Let’s check the config again."
    ],
    "ru": [
      "Давайте еще раз проверим конфигурацию."
    ]
  },
  {
    "time": [
      483.09,
      489.75
    ],
    "en": [
      "DO SHOW RUNNING-CONFIG. As you can see, the previous configuration was automatically"
    ],
    "ru": [
      "ПОКАЗАТЬ RUNNING-CONFIG. Как видите, предыдущая конфигурация была автоматически"
    ]
  },
  {
    "time": [
      489.75,
      493.21
    ],
    "en": [
      "overwritten, we did not have to delete it."
    ],
    "ru": [
      "перезаписан, нам не пришлось его удалять."
    ]
  },
  {
    "time": [
      493.21,
      497.83
    ],
    "en": [
      "Okay, since we are told there is one misconfiguration per router, we don’t have to check the routing"
    ],
    "ru": [
      "Хорошо, поскольку нам сказали, что на каждый маршрутизатор может быть одна неверная конфигурация, нам не нужно проверять маршрутизацию."
    ]
  },
  {
    "time": [
      497.83,
      500.57
    ],
    "en": [
      "table, but let’s take a quick look anyway."
    ],
    "ru": [
      "стол, но давайте все равно быстро взглянем."
    ]
  },
  {
    "time": [
      500.57,
      507.21
    ],
    "en": [
      "R3 should have a static route to the 192.168.1.0/24 network."
    ],
    "ru": [
      "R3 должен иметь статический маршрут к сети 192.168.1.0/24."
    ]
  },
  {
    "time": [
      507.21,
      517.539
    ],
    "en": [
      "DO SHOW IP ROUTE. There it is, via 192.168.13.2, which is R2."
    ],
    "ru": [
      "ПОКАЗАТЬ IP-МАРШРУТ. Вот он, через 192.168.13.2, то есть R2."
    ]
  },
  {
    "time": [
      517.539,
      524.5
    ],
    "en": [
      "Now that we have fixed the misconfigurations, let’s go back on PC1 and try out that ping again."
    ],
    "ru": [
      "Теперь, когда мы устранили неправильную конфигурацию, вернемся к ПК1 и снова попробуем этот пинг."
    ]
  },
  {
    "time": [
      524.5,
      528.769
    ],
    "en": [
      "again. The first ping or two might fail, but after that they should all succeed."
    ],
    "ru": [
      "опять таки. Первый или два эхо-запроса могут завершиться ошибкой, но после этого все они должны пройти успешно."
    ]
  },
  {
    "time": [
      528.769,
      550.62
    ],
    "en": [
      "Let’s give it a shot. PING 192.168.3.1."
    ],
    "ru": [
      "Давай попробуем. ПИНГ 192.168.3.1."
    ]
  },
  {
    "time": [
      550.62,
      559.79
    ],
    "en": [
      "PING 192.168.3.1. Okay, so after finding and fixing the misconfigurations on R1, R2, and R3, PC1 is now able to ping PC2."
    ],
    "ru": [
      "ПИНГ 192.168.3.1. Итак, после обнаружения и исправления неправильной конфигурации на R1, R2 и R3, ПК1 теперь может пинговать ПК2."
    ]
  },
  {
    "time": [
      559.79,
      563.71
    ],
    "en": [
      "PC2. That’s all for this lab."
    ],
    "ru": [
      "ПК2. Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      563.71,
      565.29
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
      565.29,
      569.199
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
      569.199,
      572.529
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
      572.529,
      575.74
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
      575.74,
      582.62
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
      582.62,
      582.62
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]