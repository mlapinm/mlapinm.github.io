let objs = [
  {
    "time": [
      0.0,
      5.480994
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
      5.480994,
      8.454609
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
      8.454609,
      16.736868
    ],
    "en": [
      "in this lab we will configure loopback interfaces on two routers r1 and r2"
    ],
    "ru": [
      "в этой лабораторной работе мы настроим интерфейсы обратной связи на двух маршрутизаторах r1 и r2."
    ]
  },
  {
    "time": [
      16.736868,
      21.021283
    ],
    "en": [
      "loopback interfaces are logical interfaces"
    ],
    "ru": [
      "интерфейсы обратной связи - это логические интерфейсы"
    ]
  },
  {
    "time": [
      21.021283,
      25.486237
    ],
    "en": [
      "meaning that they are not interfaces that physically exist on the router"
    ],
    "ru": [
      "означает, что это не интерфейсы, которые физически существуют на маршрутизаторе"
    ]
  },
  {
    "time": [
      25.486237,
      29.353279
    ],
    "en": [
      "they can be used for testing purposes among others"
    ],
    "ru": [
      "их можно использовать, среди прочего, для целей тестирования"
    ]
  },
  {
    "time": [
      29.353279,
      37.153608
    ],
    "en": [
      "another important characteristic is that a loopback interface never goes down unlike a physical interface which can fail"
    ],
    "ru": [
      "Другой важной характеристикой является то, что интерфейс обратной петли никогда не выходит из строя, в отличие от физического интерфейса, который может выйти из строя."
    ]
  },
  {
    "time": [
      37.153608,
      42.241351
    ],
    "en": [
      "loopback interfaces are something we'll be using a lot in future labs"
    ],
    "ru": [
      "петлевые интерфейсы - это то, что мы будем часто использовать в будущих лабораторных работах"
    ]
  },
  {
    "time": [
      42.241351,
      45.566424
    ],
    "en": [
      "so I want to use this simple lab to introduce them"
    ],
    "ru": [
      "поэтому я хочу использовать эту простую лабораторную работу, чтобы познакомить их"
    ]
  },
  {
    "time": [
      45.566424,
      48.590203
    ],
    "en": [
      "try to complete the lab on your own first"
    ],
    "ru": [
      "попробуйте сначала пройти лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      48.590203,
      54.434513
    ],
    "en": [
      "then continue watching this video if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его позже, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      54.434513,
      65.914952
    ],
    "en": [
      "step one is to set the IP addresses of the interfaces connecting the two routers and to enable them"
    ],
    "ru": [
      "Шаг первый - установить IP-адреса интерфейсов, соединяющих два маршрутизатора, и включить их"
    ]
  },
  {
    "time": [
      65.914952,
      68.821056
    ],
    "en": [
      "let's hop on r1 first"
    ],
    "ru": [
      "давай сначала сядем на r1"
    ]
  },
  {
    "time": [
      68.821056,
      78.500477
    ],
    "en": [
      "enable conf t both routers are connected using their gig 0 0 interfaces"
    ],
    "ru": [
      "enable conf t оба маршрутизатора подключены через свои интерфейсы gig 0 0"
    ]
  },
  {
    "time": [
      78.500477,
      82.320225
    ],
    "en": [
      "so interface gig 0 0"
    ],
    "ru": [
      "так интерфейс гиг 0 0"
    ]
  },
  {
    "time": [
      82.320225,
      85.547967
    ],
    "en": [
      "now let's set the IP address"
    ],
    "ru": [
      "теперь давайте установим IP-адрес"
    ]
  },
  {
    "time": [
      85.547967,
      89.825134
    ],
    "en": [
      "IP address 192.168.1.1"
    ],
    "ru": [
      "IP-адрес 192.168.1.1"
    ]
  },
  {
    "time": [
      89.825134,
      95.188923
    ],
    "en": [
      "with the subnet mask of 255.255.255.0"
    ],
    "ru": [
      "с маской подсети 255.255.255.0"
    ]
  },
  {
    "time": [
      95.188923,
      98.369577
    ],
    "en": [
      "ok now we have to enable the interface"
    ],
    "ru": [
      "хорошо, теперь мы должны включить интерфейс"
    ]
  },
  {
    "time": [
      98.369577,
      100.217359
    ],
    "en": [
      "no shutdown"
    ],
    "ru": [
      "нет выключения"
    ]
  },
  {
    "time": [
      100.217359,
      102.460883
    ],
    "en": [
      "there we go our one is done"
    ],
    "ru": [
      "вот и мы, наш готов"
    ]
  },
  {
    "time": [
      102.460883,
      104.368105
    ],
    "en": [
      "now let's go to r2"
    ],
    "ru": [
      "теперь пойдем к r2"
    ]
  },
  {
    "time": [
      104.368105,
      120.277656
    ],
    "en": [
      "enable conf t interface g00 IP address 192.168.1.1 255.255.255.0"
    ],
    "ru": [
      "enable conf t interface g00 IP-адрес 192.168.1.1 255.255.255.0"
    ]
  },
  {
    "time": [
      120.277656,
      125.013648
    ],
    "en": [
      "no shut ok let's ping to check"
    ],
    "ru": [
      "нет, заткнись, давай пингуем, чтобы проверить"
    ]
  },
  {
    "time": [
      125.013648,
      134.011035
    ],
    "en": [
      "do ping 192.168.1.1 the ping works"
    ],
    "ru": [
      "сделать пинг 192.168.1.1 пинг работает"
    ]
  },
  {
    "time": [
      134.011035,
      145.198528
    ],
    "en": [
      "step 2 is to create a loopback interface on each router 1.1.1.1 & 2.2.2.2"
    ],
    "ru": [
      "Шаг 2 - создать интерфейс обратной связи на каждом маршрутизаторе 1.1.1.1 и 2.2.2.2."
    ]
  },
  {
    "time": [
      145.198528,
      149.524752
    ],
    "en": [
      "they should each use a / 32 subnet mask"
    ],
    "ru": [
      "каждый из них должен использовать маску подсети / 32"
    ]
  },
  {
    "time": [
      149.524752,
      155.119661
    ],
    "en": [
      "which is equivalent to 255 255 255 255"
    ],
    "ru": [
      "что эквивалентно 255 255 255 255 255"
    ]
  },
  {
    "time": [
      155.119661,
      165.474578
    ],
    "en": [
      "ok let's go on r1 to create a loopback interface just enter interface configuration mode for the loopback interface"
    ],
    "ru": [
      "хорошо, давайте перейдем к r1, чтобы создать интерфейс обратной связи, просто войдите в режим конфигурации интерфейса для интерфейса обратной связи"
    ]
  },
  {
    "time": [
      165.474578,
      168.678192
    ],
    "en": [
      "interface loopback 0"
    ],
    "ru": [
      "шлейф интерфейса 0"
    ]
  },
  {
    "time": [
      168.678192,
      172.568854
    ],
    "en": [
      "note that you can shorten it to interface l0"
    ],
    "ru": [
      "обратите внимание, что вы можете сократить его до интерфейса l0"
    ]
  },
  {
    "time": [
      172.568854,
      175.992272
    ],
    "en": [
      "so we have now created the loopback interface"
    ],
    "ru": [
      "Итак, мы создали интерфейс обратной петли"
    ]
  },
  {
    "time": [
      175.992272,
      180.488595
    ],
    "en": [
      "the loopback interface is up by default and will never go down"
    ],
    "ru": [
      "интерфейс loopback включен по умолчанию и никогда не будет отключен"
    ]
  },
  {
    "time": [
      180.488595,
      185.366319
    ],
    "en": [
      "however you can still issue the shutdown command to administrative lead issei belit"
    ],
    "ru": [
      "однако вы все равно можете отправить команду выключения руководителю администратора issei belit"
    ]
  },
  {
    "time": [
      185.366319,
      188.799318
    ],
    "en": [
      "now let's set the IP address"
    ],
    "ru": [
      "теперь давайте установим IP-адрес"
    ]
  },
  {
    "time": [
      188.799318,
      198.790761
    ],
    "en": [
      "IP address 1.1 1.1 255 255 255 255 196.28518 ok now let's go on r2"
    ],
    "ru": [
      "IP-адрес 1.1 1.1 255 255 255 255 196.28518 хорошо, теперь давайте перейдем к r2"
    ]
  },
  {
    "time": [
      198.790761,
      210.886671
    ],
    "en": [
      "interface l0 IP address 2 2 2 2 255 255 255 255"
    ],
    "ru": [
      "интерфейс l0 IP-адрес 2 2 2 2255255255255"
    ]
  },
  {
    "time": [
      210.886671,
      215.366654
    ],
    "en": [
      "we have successfully created a loopback interface on each device"
    ],
    "ru": [
      "мы успешно создали интерфейс обратной петли на каждом устройстве"
    ]
  },
  {
    "time": [
      215.366654,
      231.290868
    ],
    "en": [
      "step three is to ping both the local loopback interface and the loopback interface of the remote device from each router 225.88773 the router should be able to ping its own loopback interface with no issues by default"
    ],
    "ru": [
      "Шаг третий - проверить связь как с локальным интерфейсом обратной петли, так и с интерфейсом обратной связи удаленного устройства с каждого маршрутизатора. 225.88773 маршрутизатор должен иметь возможность отправлять запросы на собственный интерфейс обратной петли без проблем по умолчанию."
    ]
  },
  {
    "time": [
      231.290868,
      236.363551
    ],
    "en": [
      "however it has no way of knowing about the loopback interface of the remote router by default"
    ],
    "ru": [
      "однако по умолчанию он не может узнать о петлевом интерфейсе удаленного маршрутизатора."
    ]
  },
  {
    "time": [
      236.363551,
      243.846666
    ],
    "en": [
      "the routers can pin each other's physical interfaces because they are part of a connected network which they share"
    ],
    "ru": [
      "маршрутизаторы могут закреплять физические интерфейсы друг друга, потому что они являются частью подключенной сети, которую они совместно используют"
    ]
  },
  {
    "time": [
      243.846666,
      247.661056
    ],
    "en": [
      "however the loopback interfaces are on separate networks"
    ],
    "ru": [
      "однако интерфейсы обратной связи находятся в разных сетях"
    ]
  },
  {
    "time": [
      247.661056,
      254.864724
    ],
    "en": [
      "because we haven't done any labs for IP ropes yet I pre-configured static routes on each router beforehand"
    ],
    "ru": [
      "потому что мы еще не проводили никаких лабораторных работ для IP-веревок, я заранее настроил статические маршруты на каждом маршрутизаторе."
    ]
  },
  {
    "time": [
      254.864724,
      260.733203
    ],
    "en": [
      "this isn't a topic for this lab but let me show you the IP route table"
    ],
    "ru": [
      "это не тема для этой лабораторной работы, но позвольте мне показать вам таблицу IP-маршрутов"
    ]
  },
  {
    "time": [
      260.733203,
      263.337018
    ],
    "en": [
      "let me hop on r1"
    ],
    "ru": [
      "позволь мне сесть на r1"
    ]
  },
  {
    "time": [
      263.337018,
      276.116495
    ],
    "en": [
      "and show IP route 267.95312 you see here the C indicating connected of the 192.168.1.0 Network"
    ],
    "ru": [
      "и покажите IP-маршрут 267.95312, вы видите здесь C, указывающий на подключение к сети 192.168.1.0"
    ]
  },
  {
    "time": [
      276.116495,
      283.292259
    ],
    "en": [
      "and the l indicating local of the 192.168.1.1 address configured on the gig 0/0 interface"
    ],
    "ru": [
      "и l, указывающий локальный адрес 192.168.1.1, настроенный на интерфейсе gig 0/0"
    ]
  },
  {
    "time": [
      283.292259,
      287.648635
    ],
    "en": [
      "above that is an S indicating static"
    ],
    "ru": [
      "над ним стоит буква S, обозначающая статический"
    ]
  },
  {
    "time": [
      287.648635,
      291.874642
    ],
    "en": [
      "this is the route I pre-configured to the loopback of r2"
    ],
    "ru": [
      "это маршрут, который я предварительно настроил для кольцевой проверки r2"
    ]
  },
  {
    "time": [
      291.874642,
      296.107289
    ],
    "en": [
      "also at the top is the loopback here on r1"
    ],
    "ru": [
      "также вверху находится петля здесь, на r1"
    ]
  },
  {
    "time": [
      296.107289,
      300.727298
    ],
    "en": [
      "now let's try the pings which both should be successful"
    ],
    "ru": [
      "теперь давайте попробуем пинги, которые оба должны быть успешными"
    ]
  },
  {
    "time": [
      300.727298,
      310.722019
    ],
    "en": [
      "first the local loopback 303.94082 ping 1.1.1.1 it works"
    ],
    "ru": [
      "сначала локальный шлейф 303.94082 пинг 1.1.1.1 он работает"
    ]
  },
  {
    "time": [
      310.722019,
      315.089141
    ],
    "en": [
      "now our twos ping 2.2.2.2"
    ],
    "ru": [
      "теперь наши двойки пингуются 2.2.2.2"
    ]
  },
  {
    "time": [
      315.089141,
      317.140025
    ],
    "en": [
      "it works as well"
    ],
    "ru": [
      "это тоже работает"
    ]
  },
  {
    "time": [
      317.140025,
      320.332206
    ],
    "en": [
      "now let's do the same on r2"
    ],
    "ru": [
      "теперь сделаем то же самое на r2"
    ]
  },
  {
    "time": [
      320.332206,
      328.234023
    ],
    "en": [
      "end ping 2.2.2.2 it works"
    ],
    "ru": [
      "конец пинг 2.2.2.2 работает"
    ]
  },
  {
    "time": [
      328.234023,
      335.025811
    ],
    "en": [
      "ping 1.1.1.1 it works as well"
    ],
    "ru": [
      "ping 1.1.1.1 тоже работает"
    ]
  },
  {
    "time": [
      335.025811,
      348.310591
    ],
    "en": [
      "step four is to remove the loopback interfaces 342.98689 this is just to point out a difference between physical interfaces and loopback interfaces"
    ],
    "ru": [
      "Шаг четвертый - удалить интерфейсы обратной петли 342.98689, это просто для того, чтобы указать на разницу между физическими интерфейсами и интерфейсами обратной петли."
    ]
  },
  {
    "time": [
      348.310591,
      352.686503
    ],
    "en": [
      "you can't delete a physical interface using the command line"
    ],
    "ru": [
      "вы не можете удалить физический интерфейс с помощью командной строки"
    ]
  },
  {
    "time": [
      352.686503,
      354.160709
    ],
    "en": [
      "let's confirm that"
    ],
    "ru": [
      "давайте подтвердим это"
    ]
  },
  {
    "time": [
      354.160709,
      361.269642
    ],
    "en": [
      "first on our two conf T no interface G zero zero"
    ],
    "ru": [
      "сначала на наших двух конф T нет интерфейса G ноль ноль"
    ]
  },
  {
    "time": [
      361.269642,
      366.150851
    ],
    "en": [
      "we get the message removal of physical interfaces is not permitted"
    ],
    "ru": [
      "получаем сообщение удаление физических интерфейсов не разрешено"
    ]
  },
  {
    "time": [
      366.150851,
      372.220037
    ],
    "en": [
      "now let's do the same thing ad no in front of the interface command for loopback zero"
    ],
    "ru": [
      "теперь давайте сделаем то же самое перед командой интерфейса для нулевого шлейфа"
    ]
  },
  {
    "time": [
      372.220037,
      377.316643
    ],
    "en": [
      "first however let's use the do show IP interface brief command"
    ],
    "ru": [
      "однако сначала давайте воспользуемся краткой командой do show IP interface"
    ]
  },
  {
    "time": [
      377.316643,
      384.724192
    ],
    "en": [
      "there is gig zero zero which we were unable to delete before and loopback zero"
    ],
    "ru": [
      "есть нулевой нулевой гиг, который мы не смогли удалить раньше, и нулевой цикл обратной связи"
    ]
  },
  {
    "time": [
      384.724192,
      386.868471
    ],
    "en": [
      "now let's try to delete it"
    ],
    "ru": [
      "теперь попробуем удалить это"
    ]
  },
  {
    "time": [
      386.868471,
      390.283007
    ],
    "en": [
      "no interface l0"
    ],
    "ru": [
      "нет интерфейса l0"
    ]
  },
  {
    "time": [
      390.283007,
      393.495554
    ],
    "en": [
      "do show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      393.495554,
      400.971342
    ],
    "en": [
      "as you can see we are able to delete loopback interfaces and loop X zero is no longer listed here"
    ],
    "ru": [
      "как видите, мы можем удалить интерфейсы обратной петли, и нулевой цикл X больше не указан здесь"
    ]
  },
  {
    "time": [
      400.971342,
      403.806206
    ],
    "en": [
      "let's do the same on r1"
    ],
    "ru": [
      "давай сделаем то же самое на r1"
    ]
  },
  {
    "time": [
      403.806206,
      409.602943
    ],
    "en": [
      "show IP interface brief there's loopback zero"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса, есть нулевой шлейф"
    ]
  },
  {
    "time": [
      409.602943,
      414.459122
    ],
    "en": [
      "conf t no interface l0"
    ],
    "ru": [
      "conf t нет интерфейса l0"
    ]
  },
  {
    "time": [
      414.459122,
      422.086975
    ],
    "en": [
      "do show IP interface brief 417.7599 we have successfully removed the loopback interface of each router"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса 417.7599, мы успешно удалили интерфейс обратной петли на каждом маршрутизаторе"
    ]
  },
  {
    "time": [
      422.086975,
      423.704346
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
      423.704346,
      429.782899
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
      429.782899,
      434.794398
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
      434.794398,
      439.477337
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
      439.477337,
      446.706857
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin and etherion donations via the addresses in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования биткойнами и эфиром по адресам в описании"
    ]
  },
  {
    "time": [
      446.706857,
      454.982362
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
      454.982362,
      454.982362
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
      454.982362,
      454.982362
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
      454.982362,
      454.982362
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]