let objs = [
  {
    "time": [
      0.0,
      4.956478
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
      4.956478,
      8.146395
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
      8.146395,
      15.36552
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
      15.36552,
      18.919603
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
      18.919603,
      22.93077
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
      22.93077,
      26.479353
    ],
    "en": [
      "in this lab we will configure span"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим диапазон"
    ]
  },
  {
    "time": [
      26.479353,
      29.005749
    ],
    "en": [
      "which stands for switched port analyzer"
    ],
    "ru": [
      "что означает анализатор коммутируемого порта"
    ]
  },
  {
    "time": [
      29.005749,
      32.922978
    ],
    "en": [
      "span copies the traffic from a particular interface"
    ],
    "ru": [
      "span копирует трафик с определенного интерфейса"
    ]
  },
  {
    "time": [
      32.922978,
      35.652541
    ],
    "en": [
      "and sends it to another interface"
    ],
    "ru": [
      "и отправляет его в другой интерфейс"
    ]
  },
  {
    "time": [
      35.652541,
      42.038437
    ],
    "en": [
      "which typically leads to a monitoring server to monitor and analyze the traffic passing through the monitored interface"
    ],
    "ru": [
      "что обычно приводит к серверу мониторинга для мониторинга и анализа трафика, проходящего через контролируемый интерфейс."
    ]
  },
  {
    "time": [
      42.038437,
      47.046999
    ],
    "en": [
      "packet tracer doesn't include an actual monitoring server"
    ],
    "ru": [
      "пакетный трассировщик не включает в себя фактический сервер мониторинга"
    ]
  },
  {
    "time": [
      47.046999,
      53.981645
    ],
    "en": [
      "but will use a cool feature of packet tracer the simulation mode to verify that our configurations are working"
    ],
    "ru": [
      "но будет использовать классную функцию пакетного трассировщика в режиме моделирования, чтобы убедиться, что наши конфигурации работают"
    ]
  },
  {
    "time": [
      53.981645,
      55.391478
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
      55.391478,
      60.814728
    ],
    "en": [
      "okay the first step is to simply ping from PC 2 to PC 1"
    ],
    "ru": [
      "хорошо, первый шаг - просто пинговать с ПК 2 на ПК 1"
    ]
  },
  {
    "time": [
      60.814728,
      65.471916
    ],
    "en": [
      "this is just to make sure PC 2 completes the ARP process"
    ],
    "ru": [
      "это просто для того, чтобы убедиться, что ПК 2 завершил процесс ARP"
    ]
  },
  {
    "time": [
      65.471916,
      69.535666
    ],
    "en": [
      "you may have noticed in these labs that the first ping often fails"
    ],
    "ru": [
      "вы могли заметить в этих лабораториях, что первый пинг часто не выполняется."
    ]
  },
  {
    "time": [
      69.535666,
      73.669957
    ],
    "en": [
      "that is because of the art process not finishing before the ping times out"
    ],
    "ru": [
      "это из-за того, что художественный процесс не завершается до истечения времени пинга"
    ]
  },
  {
    "time": [
      73.669957,
      77.237416
    ],
    "en": [
      "so let's do that ping"
    ],
    "ru": [
      "так давай сделаем это пинг"
    ]
  },
  {
    "time": [
      77.237416,
      80.486061
    ],
    "en": [
      "ping 10.0.1.10"
    ],
    "ru": [
      "пинг 10.0.1.10"
    ]
  },
  {
    "time": [
      80.486061,
      89.43827
    ],
    "en": [
      "okay as you can see the first ping fails"
    ],
    "ru": [
      "хорошо, как видите, первый пинг не работает"
    ]
  },
  {
    "time": [
      89.43827,
      93.379603
    ],
    "en": [
      "but then after pc2 learns the MAC address of its default gateway"
    ],
    "ru": [
      "но затем после того, как pc2 узнает MAC-адрес своего шлюза по умолчанию"
    ]
  },
  {
    "time": [
      93.379603,
      95.56754
    ],
    "en": [
      "the following pings succeed"
    ],
    "ru": [
      "следующие пинги успешны"
    ]
  },
  {
    "time": [
      95.56754,
      98.823873
    ],
    "en": [
      "now let's switch to simulation mode"
    ],
    "ru": [
      "теперь перейдем в режим симуляции"
    ]
  },
  {
    "time": [
      98.823873,
      100.604415
    ],
    "en": [
      "which is here in the bottom right"
    ],
    "ru": [
      "который здесь внизу справа"
    ]
  },
  {
    "time": [
      100.604415,
      107.373498
    ],
    "en": [
      "this useful feature lets us trace the path of traffic and analyze it at different points in its path"
    ],
    "ru": [
      "эта полезная функция позволяет нам отслеживать путь трафика и анализировать его в разных точках пути"
    ]
  },
  {
    "time": [
      107.373498,
      110.145977
    ],
    "en": [
      "okay now let's ping again"
    ],
    "ru": [
      "хорошо, давай снова пингуем"
    ]
  },
  {
    "time": [
      110.145977,
      115.06779
    ],
    "en": [
      "ping 10.0.1.10"
    ],
    "ru": [
      "пинг 10.0.1.10"
    ]
  },
  {
    "time": [
      115.06779,
      120.907915
    ],
    "en": [
      "here you can see the ICMP packet at PC 2"
    ],
    "ru": [
      "здесь вы можете увидеть пакет ICMP на ПК 2"
    ]
  },
  {
    "time": [
      120.907915,
      122.725185
    ],
    "en": [
      "then I click Next"
    ],
    "ru": [
      "затем я нажимаю Далее"
    ]
  },
  {
    "time": [
      122.725185,
      124.995977
    ],
    "en": [
      "and it is sent to switch to"
    ],
    "ru": [
      "и он отправляется на переключение на"
    ]
  },
  {
    "time": [
      124.995977,
      129.552018
    ],
    "en": [
      "then R 2 R 1 switch 1"
    ],
    "ru": [
      "затем R 2 R 1 переключатель 1"
    ]
  },
  {
    "time": [
      129.552018,
      131.409206
    ],
    "en": [
      "and arrives at PC 1"
    ],
    "ru": [
      "и прибывает на ПК 1"
    ]
  },
  {
    "time": [
      131.409206,
      141.568393
    ],
    "en": [
      "PC 1 then sends the reply back to switch 1 R 1 R 2 switch 2 and then it arrives at the destination PC 2"
    ],
    "ru": [
      "Затем ПК 1 отправляет ответ обратно коммутатору 1, R 1, 2, коммутатору 2, и затем он поступает на ПК-адресат 2."
    ]
  },
  {
    "time": [
      141.568393,
      143.780643
    ],
    "en": [
      "if I keep clicking here"
    ],
    "ru": [
      "если я продолжу щелкать здесь"
    ]
  },
  {
    "time": [
      143.780643,
      151.446247
    ],
    "en": [
      "you can see other traffic being sent including spanning tree B PDUs from the switches EA GRP hello packets"
    ],
    "ru": [
      "вы можете видеть другой отправляемый трафик, включая PDU связующего дерева B, от коммутаторов EA GRP hello-пакеты"
    ]
  },
  {
    "time": [
      151.446247,
      154.681205
    ],
    "en": [
      "between the routers and the other pings sent from PC to"
    ],
    "ru": [
      "между маршрутизаторами и другими эхо-запросами, отправляемыми с ПК на"
    ]
  },
  {
    "time": [
      154.681205,
      156.001622
    ],
    "en": [
      "does PC 1"
    ],
    "ru": [
      "делает ли ПК 1"
    ]
  },
  {
    "time": [
      156.001622,
      159.079747
    ],
    "en": [
      "ok let's return to real-time mode"
    ],
    "ru": [
      "хорошо, вернемся в режим реального времени"
    ]
  },
  {
    "time": [
      159.079747,
      165.886017
    ],
    "en": [
      "so we confirm that the pings traveled from PC to in a straight path to PC 1"
    ],
    "ru": [
      "поэтому мы подтверждаем, что эхо-запросы прошли с ПК по прямому пути на ПК 1"
    ]
  },
  {
    "time": [
      165.886017,
      168.703059
    ],
    "en": [
      "no ICMP packets were sent to server 1"
    ],
    "ru": [
      "на сервер 1 не были отправлены ICMP-пакеты"
    ]
  },
  {
    "time": [
      168.703059,
      174.973038
    ],
    "en": [
      "now let's configure switch 1 to monitor the input and output traffic on its G 0 1 interface"
    ],
    "ru": [
      "Теперь давайте настроим коммутатор 1 для мониторинга входящего и выходного трафика на его интерфейсе G 0 1."
    ]
  },
  {
    "time": [
      174.973038,
      177.461371
    ],
    "en": [
      "and send it to a server 1"
    ],
    "ru": [
      "и отправить на сервер 1"
    ]
  },
  {
    "time": [
      177.461371,
      179.370309
    ],
    "en": [
      "I'll hop on switch 1 now"
    ],
    "ru": [
      "Я сейчас включу выключатель 1"
    ]
  },
  {
    "time": [
      179.370309,
      184.464163
    ],
    "en": [
      "enable conf T"
    ],
    "ru": [
      "включить conf T"
    ]
  },
  {
    "time": [
      184.464163,
      188.630913
    ],
    "en": [
      "span is configured right here at global configuration mode"
    ],
    "ru": [
      "span настраивается прямо здесь в режиме глобальной конфигурации"
    ]
  },
  {
    "time": [
      188.630913,
      190.950017
    ],
    "en": [
      "with the monitor command"
    ],
    "ru": [
      "с командой монитора"
    ]
  },
  {
    "time": [
      190.950017,
      193.223559
    ],
    "en": [
      "then type session"
    ],
    "ru": [
      "затем введите сеанс"
    ]
  },
  {
    "time": [
      193.223559,
      195.044955
    ],
    "en": [
      "and give it a number"
    ],
    "ru": [
      "и дайте ему номер"
    ]
  },
  {
    "time": [
      195.044955,
      196.244038
    ],
    "en": [
      "I'll sell you one"
    ],
    "ru": [
      "Я продам тебе один"
    ]
  },
  {
    "time": [
      196.244038,
      200.179808
    ],
    "en": [
      "next we specify the source or destination"
    ],
    "ru": [
      "далее мы указываем источник или пункт назначения"
    ]
  },
  {
    "time": [
      200.179808,
      201.420058
    ],
    "en": [
      "the order doesn't matter"
    ],
    "ru": [
      "порядок не имеет значения"
    ]
  },
  {
    "time": [
      201.420058,
      203.005912
    ],
    "en": [
      "let's do this source"
    ],
    "ru": [
      "давай сделаем этот источник"
    ]
  },
  {
    "time": [
      203.005912,
      206.224662
    ],
    "en": [
      "now there are multiple types of span"
    ],
    "ru": [
      "теперь есть несколько типов диапазона"
    ]
  },
  {
    "time": [
      206.224662,
      209.571308
    ],
    "en": [
      "but for the CCNA you just have to do local span"
    ],
    "ru": [
      "но для CCNA вам просто нужно выполнить локальный диапазон"
    ]
  },
  {
    "time": [
      209.571308,
      213.090183
    ],
    "en": [
      "which means from one interface on the switch to another"
    ],
    "ru": [
      "что означает от одного интерфейса коммутатора к другому"
    ]
  },
  {
    "time": [
      213.090183,
      217.355453
    ],
    "en": [
      "so the source will be interface g0 one"
    ],
    "ru": [
      "так что источником будет интерфейс g0 one"
    ]
  },
  {
    "time": [
      217.355453,
      224.375078
    ],
    "en": [
      "then finally I will specify both to monitor both incoming and outgoing traffic on the interface"
    ],
    "ru": [
      "затем, наконец, я укажу оба, чтобы отслеживать как входящий, так и исходящий трафик на интерфейсе"
    ]
  },
  {
    "time": [
      224.375078,
      229.876244
    ],
    "en": [
      "you could instead specify Rx for ingress or incoming traffic"
    ],
    "ru": [
      "вместо этого вы можете указать Rx для входящего или входящего трафика"
    ]
  },
  {
    "time": [
      229.876244,
      233.121724
    ],
    "en": [
      "or TX for egress or outgoing traffic"
    ],
    "ru": [
      "или TX для исходящего или исходящего трафика"
    ]
  },
  {
    "time": [
      233.121724,
      237.703515
    ],
    "en": [
      "okay next let's specify the destination interface"
    ],
    "ru": [
      "хорошо, теперь давайте укажем интерфейс назначения"
    ]
  },
  {
    "time": [
      237.703515,
      239.597536
    ],
    "en": [
      "which will be g0 2"
    ],
    "ru": [
      "что будет g0 2"
    ]
  },
  {
    "time": [
      239.597536,
      241.825328
    ],
    "en": [
      "because it's connected to server 1"
    ],
    "ru": [
      "потому что он подключен к серверу 1"
    ]
  },
  {
    "time": [
      241.825328,
      248.688015
    ],
    "en": [
      "monitor session one destination interface g0 2"
    ],
    "ru": [
      "Монитор сеанса один интерфейс назначения g0 2"
    ]
  },
  {
    "time": [
      248.688015,
      252.569474
    ],
    "en": [
      "okay that's all there is to configuring local span"
    ],
    "ru": [
      "хорошо, это все, что нужно для настройки локального диапазона"
    ]
  },
  {
    "time": [
      252.569474,
      253.892015
    ],
    "en": [
      "it's really quite simple"
    ],
    "ru": [
      "это действительно довольно просто"
    ]
  },
  {
    "time": [
      253.892015,
      257.97989
    ],
    "en": [
      "now let's switch to simulation mode once more"
    ],
    "ru": [
      "теперь давайте еще раз переключимся в режим моделирования"
    ]
  },
  {
    "time": [
      257.97989,
      260.836369
    ],
    "en": [
      "and ping from PC 2 to PC one"
    ],
    "ru": [
      "и пинг с ПК 2 на ПК один"
    ]
  },
  {
    "time": [
      260.836369,
      264.709369
    ],
    "en": [
      "and will confirm that copies of the traffic are being sent to server one"
    ],
    "ru": [
      "и подтвердит, что копии трафика отправляются на первый сервер"
    ]
  },
  {
    "time": [
      264.709369,
      278.921953
    ],
    "en": [
      "ping 10.0.1.10 goes to switch 2 R 2 R 1 switch 1"
    ],
    "ru": [
      "ping 10.0.1.10 переходит на переключатель 2 R 2 R 1 переключатель 1"
    ]
  },
  {
    "time": [
      278.921953,
      284.375474
    ],
    "en": [
      "and now as you can see it's sent to both PC 1 and server one"
    ],
    "ru": [
      "и теперь, как вы можете видеть, он отправляется как на ПК 1, так и на сервер 1"
    ]
  },
  {
    "time": [
      284.375474,
      289.786953
    ],
    "en": [
      "because switch 1 copied the ICMP packet that came in honest g0 on interface"
    ],
    "ru": [
      "потому что коммутатор 1 скопировал пакет ICMP, который пришел в честном g0 на интерфейсе"
    ]
  },
  {
    "time": [
      289.786953,
      292.314932
    ],
    "en": [
      "and sent it to server 1 as well"
    ],
    "ru": [
      "и отправил его на сервер 1"
    ]
  },
  {
    "time": [
      292.314932,
      295.865515
    ],
    "en": [
      "notice the red X on server 1"
    ],
    "ru": [
      "обратите внимание на красный X на сервере 1"
    ]
  },
  {
    "time": [
      295.865515,
      298.762786
    ],
    "en": [
      "that's because server 1 discarded the packet"
    ],
    "ru": [
      "это потому, что сервер 1 отбросил пакет"
    ]
  },
  {
    "time": [
      298.762786,
      304.724182
    ],
    "en": [
      "in a real situation where server 1 is an actual monitoring server this would not happen"
    ],
    "ru": [
      "в реальной ситуации, когда сервер 1 является фактическим сервером мониторинга, этого не произойдет"
    ]
  },
  {
    "time": [
      304.724182,
      309.927057
    ],
    "en": [
      "ok next PC 1 sends the reply to switch 1"
    ],
    "ru": [
      "ОК следующий ПК 1 отправляет ответ коммутатору 1"
    ]
  },
  {
    "time": [
      309.927057,
      312.77364
    ],
    "en": [
      "and then the reply is forwarded to r1"
    ],
    "ru": [
      "а затем ответ пересылается на r1"
    ]
  },
  {
    "time": [
      312.77364,
      315.507848
    ],
    "en": [
      "and once again it is also sent to server one"
    ],
    "ru": [
      "и еще раз он также отправляется на первый сервер"
    ]
  },
  {
    "time": [
      315.507848,
      320.941493
    ],
    "en": [
      "this time switch one copied the ICMP packet being sent out of the g0 one interface"
    ],
    "ru": [
      "на этот раз коммутатор 1 скопировал пакет ICMP, отправляемый из интерфейса g0 one"
    ]
  },
  {
    "time": [
      320.941493,
      324.915263
    ],
    "en": [
      "because we configured the both statement"
    ],
    "ru": [
      "потому что мы настроили оба оператора"
    ]
  },
  {
    "time": [
      324.915263,
      326.439701
    ],
    "en": [
      "when we configured span"
    ],
    "ru": [
      "когда мы настроили диапазон"
    ]
  },
  {
    "time": [
      326.439701,
      330.746659
    ],
    "en": [
      "both packets received on and transmitted from the interface"
    ],
    "ru": [
      "оба пакета получены и переданы через интерфейс"
    ]
  },
  {
    "time": [
      330.746659,
      333.139888
    ],
    "en": [
      "will be copied and sent to server 1"
    ],
    "ru": [
      "будет скопировано и отправлено на сервер 1"
    ]
  },
  {
    "time": [
      333.139888,
      339.050513
    ],
    "en": [
      "in this lab we configured span to monitor traffic on a switch interface"
    ],
    "ru": [
      "в этой лабораторной работе мы настроили span для мониторинга трафика на интерфейсе коммутатора."
    ]
  },
  {
    "time": [
      339.050513,
      341.425575
    ],
    "en": [
      "the configuration is quite simple"
    ],
    "ru": [
      "конфигурация довольно проста"
    ]
  },
  {
    "time": [
      341.425575,
      344.411221
    ],
    "en": [
      "so please try it out and learn it for your exam"
    ],
    "ru": [
      "поэтому, пожалуйста, попробуйте и выучите это для своего экзамена"
    ]
  },
  {
    "time": [
      344.411221,
      346.283616
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
      346.283616,
      350.415075
    ],
    "en": [
      "thank you for watching"
    ],
    "ru": [
      "Спасибо за просмотр"
    ]
  },
  {
    "time": [
      350.415075,
      353.392596
    ],
    "en": [
      "I hope this lab and video have been helpful for you"
    ],
    "ru": [
      "Надеюсь, эта лабораторная работа и видео были для вас полезны"
    ]
  },
  {
    "time": [
      353.392596,
      357.492637
    ],
    "en": [
      "please subscribe for future labs like this which will be released weekly"
    ],
    "ru": [
      "пожалуйста, подпишитесь на будущие лабораторные работы, которые будут выпускаться еженедельно"
    ]
  },
  {
    "time": [
      357.492637,
      362.284387
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
      362.284387,
      368.802887
    ],
    "en": [
      "if you want to support my channel I accept cryptocurrency donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в криптовалюте по адресам в описании"
    ]
  },
  {
    "time": [
      368.802887,
      377.452596
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
      377.452596,
      377.452596
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
      377.452596,
      377.452596
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
      377.452596,
      377.452596
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]