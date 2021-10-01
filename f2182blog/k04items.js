let objs = [
  {
    "time": [
      0.0,
      5.832196
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
      5.832196,
      9.461726
    ],
    "en": [
      "you can download the lab file from the link in the description"
    ],
    "ru": [
      "скачать лабораторный файл можно по ссылке в описании"
    ]
  },
  {
    "time": [
      9.461726,
      18.220798
    ],
    "en": [
      "in this lab we will be working with two routers r1 and r2 and two switches switch 1 and switch 2"
    ],
    "ru": [
      "В этой лабораторной работе мы будем работать с двумя маршрутизаторами r1 и r2 и двумя коммутаторами, коммутатором 1 и коммутатором 2."
    ]
  },
  {
    "time": [
      18.220798,
      23.053658
    ],
    "en": [
      "we will configure and test a serial connection between the two routers"
    ],
    "ru": [
      "мы настроим и протестируем последовательное соединение между двумя маршрутизаторами"
    ]
  },
  {
    "time": [
      23.053658,
      28.479349
    ],
    "en": [
      "note that I have already configured the host names of each of the devices beforehand"
    ],
    "ru": [
      "обратите внимание, что я уже заранее настроил имена хостов для каждого из устройств"
    ]
  },
  {
    "time": [
      28.479349,
      30.995791
    ],
    "en": [
      "try to complete the lab yourself first"
    ],
    "ru": [
      "сначала попробуйте пройти лабораторию самостоятельно"
    ]
  },
  {
    "time": [
      30.995791,
      34.099378
    ],
    "en": [
      "then continue watching this video if you have trouble"
    ],
    "ru": [
      "тогда продолжайте смотреть это видео, если у вас возникнут проблемы"
    ]
  },
  {
    "time": [
      34.099378,
      37.066538
    ],
    "en": [
      "or watch after to check your solution"
    ],
    "ru": [
      "или посмотрите после, чтобы проверить свое решение"
    ]
  },
  {
    "time": [
      37.066538,
      45.431644
    ],
    "en": [
      "step one asks us to use CVP to discover which interfaces are used to connect the routers and switches"
    ],
    "ru": [
      "на первом шаге нас просят использовать CVP, чтобы узнать, какие интерфейсы используются для подключения маршрутизаторов и коммутаторов."
    ]
  },
  {
    "time": [
      45.431644,
      53.234291
    ],
    "en": [
      "if you have the option always show port labels and logical workspace in the Preferences menu of packet tracer enabled"
    ],
    "ru": [
      "если у вас есть опция всегда показывать метки портов и логическую рабочую область в меню Preferences при включенном отслеживании пакетов"
    ]
  },
  {
    "time": [
      53.234291,
      55.786652
    ],
    "en": [
      "the labels will appear next to the devices"
    ],
    "ru": [
      "метки появятся рядом с устройствами"
    ]
  },
  {
    "time": [
      55.786652,
      57.795282
    ],
    "en": [
      "but I have this option turned off"
    ],
    "ru": [
      "но у меня эта опция отключена"
    ]
  },
  {
    "time": [
      57.795282,
      65.096571
    ],
    "en": [
      "we will use CDP or Cisco discovery protocol to identify the interfaces"
    ],
    "ru": [
      "мы будем использовать протокол обнаружения CDP или Cisco для идентификации интерфейсов"
    ]
  },
  {
    "time": [
      65.096571,
      68.209152
    ],
    "en": [
      "CDP is a very useful tool"
    ],
    "ru": [
      "CDP - очень полезный инструмент"
    ]
  },
  {
    "time": [
      68.209152,
      71.969467
    ],
    "en": [
      "and I will create a lab dedicated to using CDP in the future"
    ],
    "ru": [
      "и я создам лабораторию, посвященную использованию CDP в будущем"
    ]
  },
  {
    "time": [
      71.969467,
      75.173503
    ],
    "en": [
      "but for this lab all we need to know is one command"
    ],
    "ru": [
      "но для этой лаборатории все, что нам нужно знать, это одна команда"
    ]
  },
  {
    "time": [
      75.173503,
      78.333514
    ],
    "en": [
      "that is show CDP neighbors"
    ],
    "ru": [
      "это показать соседей CDP"
    ]
  },
  {
    "time": [
      78.333514,
      81.059055
    ],
    "en": [
      "let's give it a try on switch one first"
    ],
    "ru": [
      "давай сначала попробуем переключиться"
    ]
  },
  {
    "time": [
      81.059055,
      85.571686
    ],
    "en": [
      "I'll type in able to enter privileged exec mode"
    ],
    "ru": [
      "Я введу возможность войти в привилегированный режим exec"
    ]
  },
  {
    "time": [
      85.571686,
      88.506662
    ],
    "en": [
      "this is where we use the command"
    ],
    "ru": [
      "здесь мы используем команду"
    ]
  },
  {
    "time": [
      88.506662,
      90.417569
    ],
    "en": [
      "show CDP neighbors"
    ],
    "ru": [
      "показать соседей CDP"
    ]
  },
  {
    "time": [
      90.417569,
      95.005788
    ],
    "en": [
      "as you can see switch 1 is connected to r1"
    ],
    "ru": [
      "как вы можете видеть, переключатель 1 подключен к r1"
    ]
  },
  {
    "time": [
      95.005788,
      100.969255
    ],
    "en": [
      "and the local interface meaning the interface on this device is fastethernet 0/1"
    ],
    "ru": [
      "а локальный интерфейс означает, что интерфейс на этом устройстве - fastethernet 0/1"
    ]
  },
  {
    "time": [
      100.969255,
      103.046601
    ],
    "en": [
      "let's go to r1"
    ],
    "ru": [
      "пойдем в r1"
    ]
  },
  {
    "time": [
      103.046601,
      107.714236
    ],
    "en": [
      "enable show CDP neighbors"
    ],
    "ru": [
      "включить показывать соседей CDP"
    ]
  },
  {
    "time": [
      107.714236,
      113.346247
    ],
    "en": [
      "our one is connected to switch 1 on the Fast Ethernet 0 interface"
    ],
    "ru": [
      "наш подключен к коммутатору 1 на интерфейсе Fast Ethernet 0"
    ]
  },
  {
    "time": [
      113.346247,
      115.672844
    ],
    "en": [
      "but something's missing"
    ],
    "ru": [
      "но чего-то не хватает"
    ]
  },
  {
    "time": [
      115.672844,
      120.699267
    ],
    "en": [
      "where's our - well because I have linked lights enabled on packet tracer"
    ],
    "ru": [
      "где наш - ну, потому что я подключил огни на трассировщике пакетов"
    ]
  },
  {
    "time": [
      120.699267,
      123.420657
    ],
    "en": [
      "you might have noticed something is wrong"
    ],
    "ru": [
      "Вы могли заметить, что что-то не так"
    ]
  },
  {
    "time": [
      123.420657,
      125.766684
    ],
    "en": [
      "let's troubleshoot a little bit"
    ],
    "ru": [
      "давайте немного устраним неполадки"
    ]
  },
  {
    "time": [
      125.766684,
      132.031954
    ],
    "en": [
      "think of potential causes first at layer 1 or the physical layer of the OSI model"
    ],
    "ru": [
      "сначала подумайте о потенциальных причинах на уровне 1 или на физическом уровне модели OSI"
    ]
  },
  {
    "time": [
      132.031954,
      134.467056
    ],
    "en": [
      "is the cable plugged in"
    ],
    "ru": [
      "подключен ли кабель"
    ]
  },
  {
    "time": [
      134.467056,
      135.60099
    ],
    "en": [
      "yes it is"
    ],
    "ru": [
      "Да, это так"
    ]
  },
  {
    "time": [
      135.60099,
      137.451453
    ],
    "en": [
      "as you can see here in packet tracer"
    ],
    "ru": [
      "как вы можете видеть здесь, в пакетном трассировщике"
    ]
  },
  {
    "time": [
      137.451453,
      139.987576
    ],
    "en": [
      "are the interfaces turned on"
    ],
    "ru": [
      "включены ли интерфейсы"
    ]
  },
  {
    "time": [
      139.987576,
      141.026169
    ],
    "en": [
      "let's check"
    ],
    "ru": [
      "Давайте проверим"
    ]
  },
  {
    "time": [
      141.026169,
      146.669395
    ],
    "en": [
      "I'll use the show IP interface brief command to check"
    ],
    "ru": [
      "Я воспользуюсь краткой командой show IP interface, чтобы проверить"
    ]
  },
  {
    "time": [
      146.669395,
      153.622681
    ],
    "en": [
      "well we were going to use CDP to discover which interface r1 is connected to are two through"
    ],
    "ru": [
      "ну, мы собирались использовать CDP, чтобы узнать, к какому интерфейсу подключен r1, через два"
    ]
  },
  {
    "time": [
      153.622681,
      159.08914
    ],
    "en": [
      "but as we can see there is only one serial interface serial zero"
    ],
    "ru": [
      "но, как мы видим, есть только один последовательный интерфейс serial zero"
    ]
  },
  {
    "time": [
      159.08914,
      162.101767
    ],
    "en": [
      "and it's administrative lead down"
    ],
    "ru": [
      "и это административное ведение вниз"
    ]
  },
  {
    "time": [
      162.101767,
      164.56889
    ],
    "en": [
      "that means if we do a show run command"
    ],
    "ru": [
      "это означает, что если мы выполним команду show run"
    ]
  },
  {
    "time": [
      164.56889,
      166.199811
    ],
    "en": [
      "which I will do now"
    ],
    "ru": [
      "что я сделаю сейчас"
    ]
  },
  {
    "time": [
      166.199811,
      169.015846
    ],
    "en": [
      "we should see the shutdown command on the serial interface"
    ],
    "ru": [
      "мы должны увидеть команду выключения на последовательном интерфейсе"
    ]
  },
  {
    "time": [
      169.015846,
      171.716357
    ],
    "en": [
      "I didn't configure this"
    ],
    "ru": [
      "Я не настраивал это"
    ]
  },
  {
    "time": [
      171.716357,
      172.605723
    ],
    "en": [
      "this is by default"
    ],
    "ru": [
      "это по умолчанию"
    ]
  },
  {
    "time": [
      172.605723,
      174.007918
    ],
    "en": [
      "let's fix that"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      174.007918,
      179.757747
    ],
    "en": [
      "conf no shutdown"
    ],
    "ru": [
      "conf без выключения"
    ]
  },
  {
    "time": [
      179.757747,
      182.39393
    ],
    "en": [
      "let's check on our to also"
    ],
    "ru": [
      "давайте также проверим"
    ]
  },
  {
    "time": [
      182.39393,
      186.24296
    ],
    "en": [
      "enable show IP interface brief"
    ],
    "ru": [
      "включить краткое отображение IP-интерфейса"
    ]
  },
  {
    "time": [
      186.24296,
      188.130114
    ],
    "en": [
      "again it is shutdown"
    ],
    "ru": [
      "опять выключение"
    ]
  },
  {
    "time": [
      188.130114,
      193.791351
    ],
    "en": [
      "conf T interface serial zero no shutdown"
    ],
    "ru": [
      "conf T interface serial zero no shutdown"
    ]
  },
  {
    "time": [
      193.791351,
      195.666509
    ],
    "en": [
      "okay"
    ],
    "ru": [
      "Ладно"
    ]
  },
  {
    "time": [
      195.666509,
      197.353092
    ],
    "en": [
      "now let's return to r1"
    ],
    "ru": [
      "теперь вернемся к r1"
    ]
  },
  {
    "time": [
      197.353092,
      203.218257
    ],
    "en": [
      "this can take some time but if I enter show CDP neighbors again"
    ],
    "ru": [
      "это может занять некоторое время, но если я снова войду, покажу соседей по CDP"
    ]
  },
  {
    "time": [
      203.218257,
      205.116741
    ],
    "en": [
      "I should see our two"
    ],
    "ru": [
      "Я должен увидеть наших двоих"
    ]
  },
  {
    "time": [
      205.116741,
      207.684985
    ],
    "en": [
      "there it is"
    ],
    "ru": [
      "вот оно"
    ]
  },
  {
    "time": [
      207.684985,
      211.641346
    ],
    "en": [
      "r1 is connected to our - through the serial zero interface"
    ],
    "ru": [
      "r1 подключен к нашему - через последовательный нулевой интерфейс"
    ]
  },
  {
    "time": [
      211.641346,
      215.513918
    ],
    "en": [
      "let's run the command on our two"
    ],
    "ru": [
      "давайте запустим команду на наших двух"
    ]
  },
  {
    "time": [
      215.513918,
      219.417508
    ],
    "en": [
      "type end to return to privileged exec mode"
    ],
    "ru": [
      "введите end, чтобы вернуться в привилегированный режим exec"
    ]
  },
  {
    "time": [
      219.417508,
      222.974449
    ],
    "en": [
      "show CDP neighbors"
    ],
    "ru": [
      "показать соседей CDP"
    ]
  },
  {
    "time": [
      222.974449,
      233.130465
    ],
    "en": [
      "r2 is also connected to r1 through the serial zero interface"
    ],
    "ru": [
      "r2 также подключен к r1 через последовательный интерфейс нуля."
    ]
  },
  {
    "time": [
      233.130465,
      236.115336
    ],
    "en": [
      "and switch two through the Fast Ethernet zero interface"
    ],
    "ru": [
      "и переключить два через нулевой интерфейс Fast Ethernet"
    ]
  },
  {
    "time": [
      236.115336,
      240.601434
    ],
    "en": [
      "finally let's move on to switch two"
    ],
    "ru": [
      "наконец, давайте перейдем к переключению двух"
    ]
  },
  {
    "time": [
      240.601434,
      246.1742
    ],
    "en": [
      "enable show CDP neighbors"
    ],
    "ru": [
      "включить показывать соседей CDP"
    ]
  },
  {
    "time": [
      246.1742,
      252.643814
    ],
    "en": [
      "as you can see switch 2 is connected to R 2 through the Fast Ethernet 0-1 interface"
    ],
    "ru": [
      "как вы можете видеть, коммутатор 2 подключен к R 2 через интерфейс Fast Ethernet 0-1."
    ]
  },
  {
    "time": [
      252.643814,
      255.471895
    ],
    "en": [
      "step 1 is now complete"
    ],
    "ru": [
      "шаг 1 теперь завершен"
    ]
  },
  {
    "time": [
      255.471895,
      265.096818
    ],
    "en": [
      "step2 asks us to identify which end of the serial connection is DCE"
    ],
    "ru": [
      "step2 просит нас определить, какой конец последовательного соединения является DCE"
    ]
  },
  {
    "time": [
      265.096818,
      267.39343
    ],
    "en": [
      "and which end is DTE"
    ],
    "ru": [
      "а конец - DTE"
    ]
  },
  {
    "time": [
      267.39343,
      272.575616
    ],
    "en": [
      "in serial connections one side is DCE or data communications equipment"
    ],
    "ru": [
      "в последовательных соединениях одна сторона - DCE или оборудование передачи данных"
    ]
  },
  {
    "time": [
      272.575616,
      276.184652
    ],
    "en": [
      "and one side is DTE or data terminal equipment"
    ],
    "ru": [
      "и одна сторона - DTE или оконечное оборудование данных"
    ]
  },
  {
    "time": [
      276.184652,
      283.744393
    ],
    "en": [
      "the most important difference between the two is that the DCE device supplies the clock signal that paces the communications"
    ],
    "ru": [
      "наиболее важное различие между ними заключается в том, что устройство DCE подает тактовый сигнал, который ускоряет обмен данными."
    ]
  },
  {
    "time": [
      283.744393,
      286.779967
    ],
    "en": [
      "which will adjust in the next step"
    ],
    "ru": [
      "который будет настроен на следующем шаге"
    ]
  },
  {
    "time": [
      286.779967,
      291.616351
    ],
    "en": [
      "to identify which is which let's go to r1 first"
    ],
    "ru": [
      "чтобы определить, что есть что, сначала перейдем к r1"
    ]
  },
  {
    "time": [
      291.616351,
      295.956611
    ],
    "en": [
      "we'll use the command show controllers serial zero"
    ],
    "ru": [
      "мы будем использовать команду show controllers serial zero"
    ]
  },
  {
    "time": [
      295.956611,
      298.823908
    ],
    "en": [
      "if we just type show controllers"
    ],
    "ru": [
      "если мы просто наберем show controllers"
    ]
  },
  {
    "time": [
      298.823908,
      303.236244
    ],
    "en": [
      "we would be overwhelmed with information about every interface on the router"
    ],
    "ru": [
      "мы были бы перегружены информацией о каждом интерфейсе на маршрутизаторе"
    ]
  },
  {
    "time": [
      303.236244,
      306.247824
    ],
    "en": [
      "so make sure to specify serial zero"
    ],
    "ru": [
      "поэтому не забудьте указать серийный ноль"
    ]
  },
  {
    "time": [
      306.247824,
      309.63548
    ],
    "en": [
      "can you find what we're looking for"
    ],
    "ru": [
      "Вы можете найти то, что мы ищем"
    ]
  },
  {
    "time": [
      309.63548,
      311.101373
    ],
    "en": [
      "there it is"
    ],
    "ru": [
      "вот оно"
    ]
  },
  {
    "time": [
      311.101373,
      313.443728
    ],
    "en": [
      "and this side is the DCE"
    ],
    "ru": [
      "а эта сторона - АКД"
    ]
  },
  {
    "time": [
      313.443728,
      316.710507
    ],
    "en": [
      "you can also see the clock rate mentioned earlier"
    ],
    "ru": [
      "вы также можете увидеть тактовую частоту, упомянутую ранее"
    ]
  },
  {
    "time": [
      316.710507,
      320.685413
    ],
    "en": [
      "well now I know which side is DC e"
    ],
    "ru": [
      "ну теперь я знаю, с какой стороны DC e"
    ]
  },
  {
    "time": [
      320.685413,
      325.399466
    ],
    "en": [
      "that means R 2 should be DTE but let's check anyway"
    ],
    "ru": [
      "это означает, что R 2 должен быть DTE, но давайте все равно проверим"
    ]
  },
  {
    "time": [
      325.399466,
      328.061367
    ],
    "en": [
      "let's hop onto r2"
    ],
    "ru": [
      "давай сядем на r2"
    ]
  },
  {
    "time": [
      328.061367,
      331.053586
    ],
    "en": [
      "show controllers serial zero"
    ],
    "ru": [
      "показать серийный ноль контроллеров"
    ]
  },
  {
    "time": [
      331.053586,
      334.817174
    ],
    "en": [
      "as expected R 2 is DTE"
    ],
    "ru": [
      "как и ожидалось, R 2 - это DTE"
    ]
  },
  {
    "time": [
      334.817174,
      336.833121
    ],
    "en": [
      "step two is now complete"
    ],
    "ru": [
      "шаг два теперь завершен"
    ]
  },
  {
    "time": [
      336.833121,
      345.587313
    ],
    "en": [
      "for step three we have to set the clock rate on the DCE end to 64 kilobits per second"
    ],
    "ru": [
      "для третьего шага мы должны установить тактовую частоту на конце DCE на 64 килобита в секунду"
    ]
  },
  {
    "time": [
      345.587313,
      348.632922
    ],
    "en": [
      "so let's go back to r1"
    ],
    "ru": [
      "так что вернемся к r1"
    ]
  },
  {
    "time": [
      348.632922,
      352.524099
    ],
    "en": [
      "we have to configure the serial zero interface"
    ],
    "ru": [
      "нам нужно настроить последовательный нулевой интерфейс"
    ]
  },
  {
    "time": [
      352.524099,
      356.709099
    ],
    "en": [
      "so conf t then interface serial zero"
    ],
    "ru": [
      "так что конф т тогда интерфейс серийный ноль"
    ]
  },
  {
    "time": [
      356.709099,
      359.782783
    ],
    "en": [
      "now we are in interface configuration mode"
    ],
    "ru": [
      "сейчас мы находимся в режиме настройки интерфейса"
    ]
  },
  {
    "time": [
      359.782783,
      364.041079
    ],
    "en": [
      "the clock rate is set with the clock rate command"
    ],
    "ru": [
      "тактовая частота устанавливается командой clock rate"
    ]
  },
  {
    "time": [
      364.041079,
      367.792055
    ],
    "en": [
      "let's use the question mark to see what options we have"
    ],
    "ru": [
      "давайте воспользуемся вопросительным знаком, чтобы посмотреть, какие у нас есть варианты"
    ]
  },
  {
    "time": [
      367.792055,
      372.757799
    ],
    "en": [
      "as you can see here these options are listed in bits per second"
    ],
    "ru": [
      "как вы можете видеть здесь, эти параметры указаны в битах в секунду"
    ]
  },
  {
    "time": [
      372.757799,
      377.548125
    ],
    "en": [
      "our task is to set the speed to 64 kilobits per second"
    ],
    "ru": [
      "наша задача установить скорость 64 килобит в секунду"
    ]
  },
  {
    "time": [
      377.548125,
      380.617687
    ],
    "en": [
      "which is 64,000 bits per second"
    ],
    "ru": [
      "что составляет 64000 бит в секунду"
    ]
  },
  {
    "time": [
      380.617687,
      382.182228
    ],
    "en": [
      "so let's do that"
    ],
    "ru": [
      "так давай сделаем это"
    ]
  },
  {
    "time": [
      382.182228,
      384.452651
    ],
    "en": [
      "that's all for step three"
    ],
    "ru": [
      "это все для третьего шага"
    ]
  },
  {
    "time": [
      384.452651,
      387.003249
    ],
    "en": [
      "we don't have to do anything on the DTE side"
    ],
    "ru": [
      "нам не нужно ничего делать на стороне DTE"
    ]
  },
  {
    "time": [
      387.003249,
      404.778665
    ],
    "en": [
      "step four tells us to set the IP addresses of the serial interfaces of r1 and r2 to 192.168.0.1 / 24 and 192.168.0.2 /24"
    ],
    "ru": [
      "четвертый шаг говорит нам установить IP-адреса последовательных интерфейсов r1 и r2 на 192.168.0.1 / 24 и 192.168.0.2 / 24"
    ]
  },
  {
    "time": [
      404.778665,
      409.050174
    ],
    "en": [
      "interface configuration mode on r1"
    ],
    "ru": [
      "режим настройки интерфейса на r1"
    ]
  },
  {
    "time": [
      409.050174,
      410.87602
    ],
    "en": [
      "so let's configure r1"
    ],
    "ru": [
      "так что давайте настроим r1"
    ]
  },
  {
    "time": [
      410.87602,
      426.513926
    ],
    "en": [
      "IP address 192.168.1.1 at him this is something you should know if not don't worry about it"
    ],
    "ru": [
      "IP-адрес 192.168.1.1 у него это то, что вы должны знать, если не беспокойтесь об этом"
    ]
  },
  {
    "time": [
      426.513926,
      430.565633
    ],
    "en": [
      "it's 255.255.255.0"
    ],
    "ru": [
      "это 255.255.255.0"
    ]
  },
  {
    "time": [
      430.565633,
      432.043959
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
      432.043959,
      434.811706
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
      434.811706,
      439.66486
    ],
    "en": [
      "conf t interface serial zero"
    ],
    "ru": [
      "conf t интерфейс серийный ноль"
    ]
  },
  {
    "time": [
      439.66486,
      444.158026
    ],
    "en": [
      "IP address 192.168.0.2"
    ],
    "ru": [
      "IP-адрес 192.168.0.2"
    ]
  },
  {
    "time": [
      444.158026,
      449.659766
    ],
    "en": [
      "that's all for step four"
    ],
    "ru": [
      "это все для четвертого шага"
    ]
  },
  {
    "time": [
      449.659766,
      456.591307
    ],
    "en": [
      "finally Step five asks us to test connectivity between the routers"
    ],
    "ru": [
      "наконец, на пятом шаге нас просят проверить возможность подключения между маршрутизаторами."
    ]
  },
  {
    "time": [
      456.591307,
      458.750807
    ],
    "en": [
      "since we're already on r2"
    ],
    "ru": [
      "так как мы уже на r2"
    ]
  },
  {
    "time": [
      458.750807,
      460.183246
    ],
    "en": [
      "let's do it from here"
    ],
    "ru": [
      "давай сделаем это отсюда"
    ]
  },
  {
    "time": [
      460.183246,
      463.268323
    ],
    "en": [
      "type end to return to privileged exec mode"
    ],
    "ru": [
      "введите end, чтобы вернуться в привилегированный режим exec"
    ]
  },
  {
    "time": [
      463.268323,
      470.39099
    ],
    "en": [
      "the IP address of our one serial zero interface is 192.168.0.1 so"
    ],
    "ru": [
      "IP-адрес нашего одного последовательного нулевого интерфейса - 192.168.0.1, поэтому"
    ]
  },
  {
    "time": [
      470.39099,
      474.510172
    ],
    "en": [
      "ping 192.168.0.1"
    ],
    "ru": [
      "пинг 192.168.0.1"
    ]
  },
  {
    "time": [
      474.510172,
      478.626241
    ],
    "en": [
      "as you can see we have connectivity between the routers"
    ],
    "ru": [
      "как вы можете видеть, у нас есть связь между маршрутизаторами"
    ]
  },
  {
    "time": [
      478.626241,
      480.434685
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
      480.434685,
      484.845029
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
      484.845029,
      487.940151
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
      487.940151,
      492.652226
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
      492.652226,
      497.972229
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
      497.972229,
      503.863801
    ],
    "en": [
      "if you want to support my channel I accept Bitcoin donations via the address in the description"
    ],
    "ru": [
      "если вы хотите поддержать мой канал, я принимаю пожертвования в биткойнах по адресу в описании"
    ]
  },
  {
    "time": [
      503.863801,
      507.406431
    ],
    "en": [
      "I am also a brave verified publisher"
    ],
    "ru": [
      "Я также храбрый проверенный издатель"
    ]
  },
  {
    "time": [
      507.406431,
      512.793647
    ],
    "en": [
      "and accept bat or basic attention token donations in the brave browser"
    ],
    "ru": [
      "и принимайте пожертвования летучих мышей или токенов основного внимания в смелом браузере"
    ]
  },
  {
    "time": [
      512.793647,
      512.793647
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
      512.793647,
      512.793647
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
      512.793647,
      512.793647
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]