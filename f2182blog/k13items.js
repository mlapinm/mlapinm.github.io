let objs = [
  {
    "time": [
      0.0,
      4.58995
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
      4.58995,
      7.585084
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
      7.585084,
      14.533292
    ],
    "en": [
      "in this lab we will take a basic look at CDP cisco discovery protocol"
    ],
    "ru": [
      "В этой лабораторной работе мы кратко рассмотрим протокол обнаружения CDP cisco."
    ]
  },
  {
    "time": [
      14.533292,
      18.473101
    ],
    "en": [
      "CDP is a cisco proprietary protocol"
    ],
    "ru": [
      "CDP - проприетарный протокол cisco"
    ]
  },
  {
    "time": [
      18.473101,
      28.24391
    ],
    "en": [
      "it is used to share information about other directly connected cisco equipment such as the operating system version and the interfaces by which they are connected"
    ],
    "ru": [
      "он используется для обмена информацией о другом напрямую подключенном оборудовании cisco, например о версии операционной системы и интерфейсах, с помощью которых они подключены."
    ]
  },
  {
    "time": [
      28.24391,
      35.034259
    ],
    "en": [
      "there is also a vendor-neutral protocol called lldp or link layer discovery protocol"
    ],
    "ru": [
      "существует также независимый от производителя протокол, называемый lldp или протокол обнаружения канального уровня."
    ]
  },
  {
    "time": [
      35.034259,
      37.721952
    ],
    "en": [
      "which I will talk about in another video"
    ],
    "ru": [
      "о котором я расскажу в другом видео"
    ]
  },
  {
    "time": [
      37.721952,
      45.806908
    ],
    "en": [
      "try to complete the lab yourself first then continue watching this video if you have trouble or watch it after to check your solution"
    ],
    "ru": [
      "попробуйте сначала выполнить лабораторную работу самостоятельно, а затем продолжайте смотреть это видео, если у вас возникнут проблемы, или просмотрите его после, чтобы проверить свое решение."
    ]
  },
  {
    "time": [
      45.806908,
      54.209562
    ],
    "en": [
      "step 1 is to use CDP to identify which interfaces are used to connect the routers and switches"
    ],
    "ru": [
      "Шаг 1 - использовать CDP, чтобы определить, какие интерфейсы используются для подключения маршрутизаторов и коммутаторов."
    ]
  },
  {
    "time": [
      54.209562,
      60.939856
    ],
    "en": [
      "CDP can only display directly connected neighbors so switch one should have one neighbor r1"
    ],
    "ru": [
      "CDP может отображать только напрямую подключенных соседей, поэтому переключение должно иметь одного соседа r1"
    ]
  },
  {
    "time": [
      60.939856,
      65.231943
    ],
    "en": [
      "r1 should have two neighbors switch 1 and r2"
    ],
    "ru": [
      "r1 должен иметь двух соседей switch 1 и r2"
    ]
  },
  {
    "time": [
      65.231943,
      69.394916
    ],
    "en": [
      "r2 should have two neighbors r1 and switch two"
    ],
    "ru": [
      "r2 должен иметь двух соседей r1 и переключать два"
    ]
  },
  {
    "time": [
      69.394916,
      72.662789
    ],
    "en": [
      "and switch two should have one neighbor r2"
    ],
    "ru": [
      "и у второго коммутатора должен быть один сосед r2"
    ]
  },
  {
    "time": [
      72.662789,
      75.808923
    ],
    "en": [
      "let's check on switch 1 first"
    ],
    "ru": [
      "давайте сначала проверим переключатель 1"
    ]
  },
  {
    "time": [
      75.808923,
      83.824937
    ],
    "en": [
      "enable now let's use the command show CDP neighbors"
    ],
    "ru": [
      "включить, теперь воспользуемся командой show CDP Neighbours"
    ]
  },
  {
    "time": [
      83.824937,
      88.542371
    ],
    "en": [
      "as you can see switch 1 has one neighbor r1"
    ],
    "ru": [
      "как вы можете видеть, у коммутатора 1 есть один сосед r1"
    ]
  },
  {
    "time": [
      88.542371,
      92.451745
    ],
    "en": [
      "it is connected to the fastethernet 0/1 interface"
    ],
    "ru": [
      "он подключен к интерфейсу fastethernet 0/1"
    ]
  },
  {
    "time": [
      92.451745,
      99.005865
    ],
    "en": [
      "remember local interface means the interface on this device switch 1"
    ],
    "ru": [
      "помните, что локальный интерфейс означает интерфейс на этом переключателе устройства 1"
    ]
  },
  {
    "time": [
      99.005865,
      105.441897
    ],
    "en": [
      "under capability there is an R and if you check the capability codes list up here"
    ],
    "ru": [
      "под возможностями есть R, и если вы проверите список кодов возможностей здесь"
    ]
  },
  {
    "time": [
      105.441897,
      107.75254
    ],
    "en": [
      "you can see that that means router"
    ],
    "ru": [
      "вы можете видеть, что это означает маршрутизатор"
    ]
  },
  {
    "time": [
      107.75254,
      111.449542
    ],
    "en": [
      "also check the port ID"
    ],
    "ru": [
      "также проверьте идентификатор порта"
    ]
  },
  {
    "time": [
      111.449542,
      116.046399
    ],
    "en": [
      "this is the interface of the remote device in this case r1"
    ],
    "ru": [
      "это интерфейс удаленного устройства в данном случае r1"
    ]
  },
  {
    "time": [
      116.046399,
      123.046494
    ],
    "en": [
      "so now you know switch 1 is connected to r1 by its fastethernet 0/1 interface"
    ],
    "ru": [
      "Итак, теперь вы знаете, что коммутатор 1 подключен к r1 через интерфейс fastethernet 0/1"
    ]
  },
  {
    "time": [
      123.046494,
      126.749828
    ],
    "en": [
      "and it's connected to our ones fastethernet 0/0 interface"
    ],
    "ru": [
      "и он подключен к нашему интерфейсу fastethernet 0/0"
    ]
  },
  {
    "time": [
      126.749828,
      131.6662
    ],
    "en": [
      "let's hop on r1 now"
    ],
    "ru": [
      "давай сядем на r1 сейчас"
    ]
  },
  {
    "time": [
      131.6662,
      143.569504
    ],
    "en": [
      "enable show CDP neighbors are one has two neighbors switch 1 and r2"
    ],
    "ru": [
      "включить показать соседей CDP, если у одного есть два соседа switch 1 и r2"
    ]
  },
  {
    "time": [
      143.569504,
      149.813736
    ],
    "en": [
      "it's connected to switch 1 via the fastethernet 0/0 interface which we already learned from switch 1"
    ],
    "ru": [
      "он подключен к коммутатору 1 через интерфейс fastethernet 0/0, который мы уже узнали от коммутатора 1"
    ]
  },
  {
    "time": [
      149.813736,
      154.883615
    ],
    "en": [
      "it's connected to r2 by its serial to zero interface"
    ],
    "ru": [
      "он подключен к r2 через его последовательный к нулевому интерфейсу"
    ]
  },
  {
    "time": [
      154.883615,
      159.030221
    ],
    "en": [
      "and it's connected to our two's serial to zero interface as well"
    ],
    "ru": [
      "и он также подключен к последовательному интерфейсу на ноль наших двоих."
    ]
  },
  {
    "time": [
      159.030221,
      161.775451
    ],
    "en": [
      "let's do the same on r2"
    ],
    "ru": [
      "давай сделаем то же самое на r2"
    ]
  },
  {
    "time": [
      161.775451,
      168.08063
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
      168.08063,
      175.883445
    ],
    "en": [
      "as we already saw in r1 the two routers are connected by their serial to zero interfaces"
    ],
    "ru": [
      "как мы уже видели в r1, два маршрутизатора соединены своими последовательными и нулевыми интерфейсами."
    ]
  },
  {
    "time": [
      175.883445,
      182.424757
    ],
    "en": [
      "also r2 is connected by its fastethernet 0/0 interface 2 switch twos fastethernet 0/1 interface"
    ],
    "ru": [
      "также r2 подключен через его интерфейс fastethernet 0/0 2 коммутатора два интерфейса fastethernet 0/1"
    ]
  },
  {
    "time": [
      182.424757,
      186.428288
    ],
    "en": [
      "finally let's go on switch 2"
    ],
    "ru": [
      "наконец-то перейдем к переключателю 2"
    ]
  },
  {
    "time": [
      186.428288,
      192.782344
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
      192.782344,
      201.604715
    ],
    "en": [
      "as we already saw switch to is connected via its fastethernet 0/1 interface to our two's fastethernet 0/0 interface"
    ],
    "ru": [
      "как мы уже видели, коммутатор подключен через интерфейс fastethernet 0/1 к интерфейсу fastethernet 0/0 наших двух"
    ]
  },
  {
    "time": [
      201.604715,
      203.366253
    ],
    "en": [
      "that's all for step one"
    ],
    "ru": [
      "это все для первого шага"
    ]
  },
  {
    "time": [
      203.366253,
      214.941147
    ],
    "en": [
      "step two is to determine which side of the connection between r1 and r2 is DCE and which is DTE"
    ],
    "ru": [
      "второй шаг - определить, какая сторона соединения между r1 и r2 является DCE, а какая - DTE."
    ]
  },
  {
    "time": [
      214.941147,
      224.943752
    ],
    "en": [
      "I mentioned in a previous lab that serial connections have a DC e or data communications equipment side and a DTE or data terminal equipment side"
    ],
    "ru": [
      "В предыдущей лабораторной работе я упоминал, что последовательные соединения имеют сторону DC e или оборудования передачи данных и сторону DTE или оконечного оборудования данных."
    ]
  },
  {
    "time": [
      224.943752,
      232.519096
    ],
    "en": [
      "remember that the important difference is that the DCE side has to provide the clock rate of the connection"
    ],
    "ru": [
      "помните, что важное отличие состоит в том, что сторона DCE должна обеспечивать тактовую частоту соединения."
    ]
  },
  {
    "time": [
      232.519096,
      236.197083
    ],
    "en": [
      "we don't use CDP for this it's just a bit of review"
    ],
    "ru": [
      "мы не используем CDP для этого, это всего лишь небольшой обзор"
    ]
  },
  {
    "time": [
      236.197083,
      238.430008
    ],
    "en": [
      "let's go on r1"
    ],
    "ru": [
      "пойдем на r1"
    ]
  },
  {
    "time": [
      238.430008,
      243.828895
    ],
    "en": [
      "show controllers s20"
    ],
    "ru": [
      "показать контроллеры s20"
    ]
  },
  {
    "time": [
      243.828895,
      248.212418
    ],
    "en": [
      "remember that the routers are connected by their serial to zero interfaces"
    ],
    "ru": [
      "помните, что маршрутизаторы подключены через свои последовательные к нулевым интерфейсам"
    ]
  },
  {
    "time": [
      248.212418,
      253.824031
    ],
    "en": [
      "as you can see our one is in fact the DCE side of the connection"
    ],
    "ru": [
      "как видите, наш на самом деле является стороной DCE соединения"
    ]
  },
  {
    "time": [
      253.824031,
      257.775156
    ],
    "en": [
      "now let's set the clock rate to 64 kilobits per second"
    ],
    "ru": [
      "теперь давайте установим тактовую частоту на 64 килобита в секунду"
    ]
  },
  {
    "time": [
      257.775156,
      267.36257
    ],
    "en": [
      "conf t interface s20 clock rate 64,000"
    ],
    "ru": [
      "conf t interface s20 тактовая частота 64000"
    ]
  },
  {
    "time": [
      267.36257,
      269.153449
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
      269.153449,
      277.03029
    ],
    "en": [
      "step 3 asks us what the default CDP send and hold timers are and to confirm it with a show command"
    ],
    "ru": [
      "Шаг 3 спрашивает нас, какие таймеры отправки и удержания CDP по умолчанию, и подтвердить это с помощью команды show"
    ]
  },
  {
    "time": [
      277.03029,
      280.293589
    ],
    "en": [
      "you may have learned these timers in your studies"
    ],
    "ru": [
      "возможно, вы узнали об этих таймерах во время учебы"
    ]
  },
  {
    "time": [
      280.293589,
      282.535432
    ],
    "en": [
      "but let's check on a device to make sure"
    ],
    "ru": [
      "но давайте проверим устройство, чтобы убедиться"
    ]
  },
  {
    "time": [
      282.535432,
      287.54017
    ],
    "en": [
      "I'll type end to go back to privileged exec mode here on r1"
    ],
    "ru": [
      "Я наберу end, чтобы вернуться в привилегированный режим exec здесь, на r1"
    ]
  },
  {
    "time": [
      287.54017,
      291.558112
    ],
    "en": [
      "now let's use the command show CDP interface"
    ],
    "ru": [
      "теперь воспользуемся командой show CDP interface"
    ]
  },
  {
    "time": [
      291.558112,
      295.397115
    ],
    "en": [
      "this gives us information about all interfaces"
    ],
    "ru": [
      "это дает нам информацию обо всех интерфейсах"
    ]
  },
  {
    "time": [
      295.397115,
      301.859193
    ],
    "en": [
      "their status whether CDP is activated on them or not and their send and hold times"
    ],
    "ru": [
      "их статус, независимо от того, активирован ли для них CDP, и время их отправки и удержания"
    ]
  },
  {
    "time": [
      301.859193,
      305.539419
    ],
    "en": [
      "all of these interfaces have the default setting"
    ],
    "ru": [
      "все эти интерфейсы имеют настройку по умолчанию"
    ]
  },
  {
    "time": [
      305.539419,
      311.408525
    ],
    "en": [
      "and as you can see that is a sent time of 60 seconds and the whole time of 180 seconds"
    ],
    "ru": [
      "и, как вы можете видеть, время отправки составляет 60 секунд, а все время - 180 секунд."
    ]
  },
  {
    "time": [
      311.408525,
      318.901308
    ],
    "en": [
      "so CDP advertisements will be sent out of each interface that is up once every 60 seconds"
    ],
    "ru": [
      "поэтому рекламные объявления CDP будут отправляться из каждого интерфейса, который запускается каждые 60 секунд"
    ]
  },
  {
    "time": [
      318.901308,
      325.490652
    ],
    "en": [
      "also if r1 doesn't receive an advertisement on a particular interface within 180 seconds"
    ],
    "ru": [
      "также, если r1 не получает рекламу на определенном интерфейсе в течение 180 секунд"
    ]
  },
  {
    "time": [
      325.490652,
      330.01255
    ],
    "en": [
      "it will assume that whatever neighbor that was there no longer is"
    ],
    "ru": [
      "он будет предполагать, что того соседа, который был там, больше нет"
    ]
  },
  {
    "time": [
      330.01255,
      331.705954
    ],
    "en": [
      "that's all for step 3"
    ],
    "ru": [
      "это все для шага 3"
    ]
  },
  {
    "time": [
      331.705954,
      340.353734
    ],
    "en": [
      "step four says to disable CDP globally on r1 and attempt to view CDP neighbors"
    ],
    "ru": [
      "четвертый шаг говорит о глобальном отключении CDP на r1 и попытке просмотра соседей CDP"
    ]
  },
  {
    "time": [
      340.353734,
      343.170126
    ],
    "en": [
      "so let's go into global configuration mode"
    ],
    "ru": [
      "так что давайте перейдем в режим глобальной конфигурации"
    ]
  },
  {
    "time": [
      343.170126,
      350.87197
    ],
    "en": [
      "conf t command to enable CDP is CDP run although it's enabled by default"
    ],
    "ru": [
      "conf t, чтобы включить CDP, работает CDP, хотя по умолчанию она включена."
    ]
  },
  {
    "time": [
      350.87197,
      353.280684
    ],
    "en": [
      "we want to disable it"
    ],
    "ru": [
      "мы хотим отключить это"
    ]
  },
  {
    "time": [
      353.280684,
      356.091106
    ],
    "en": [
      "and that is done with no CDP run"
    ],
    "ru": [
      "и это делается без запуска CDP"
    ]
  },
  {
    "time": [
      356.091106,
      359.484814
    ],
    "en": [
      "now let's check CDP neighbors"
    ],
    "ru": [
      "теперь проверим соседей по CDP"
    ]
  },
  {
    "time": [
      359.484814,
      362.032107
    ],
    "en": [
      "do show CDP neighbor"
    ],
    "ru": [
      "показать соседа CDP"
    ]
  },
  {
    "time": [
      362.032107,
      366.081287
    ],
    "en": [
      "we get a message indicating that CDP is not enabled"
    ],
    "ru": [
      "мы получаем сообщение о том, что CDP не включен"
    ]
  },
  {
    "time": [
      366.081287,
      371.095981
    ],
    "en": [
      "our one won't send any advertisements and will ignore any it receives"
    ],
    "ru": [
      "наш не будет отправлять рекламу и проигнорирует все, что получает"
    ]
  },
  {
    "time": [
      371.095981,
      379.799855
    ],
    "en": [
      "step 5 is to enable CDP globally again on r1 and immediately view the CDP neighbours"
    ],
    "ru": [
      "Шаг 5 - снова включить CDP глобально на r1 и немедленно просмотреть соседей CDP"
    ]
  },
  {
    "time": [
      379.799855,
      386.232826
    ],
    "en": [
      "CDP run do show CDP neighbors"
    ],
    "ru": [
      "Запуск CDP показывает соседей CDP"
    ]
  },
  {
    "time": [
      386.232826,
      390.411636
    ],
    "en": [
      "we re enabled CDP but no neighbors appear"
    ],
    "ru": [
      "мы включили CDP, но соседи не появляются"
    ]
  },
  {
    "time": [
      390.411636,
      392.544525
    ],
    "en": [
      "why is that"
    ],
    "ru": [
      "это почему"
    ]
  },
  {
    "time": [
      392.544525,
      396.745334
    ],
    "en": [
      "well because the CDP sent time is 60 seconds by default"
    ],
    "ru": [
      "хорошо, потому что время отправки CDP по умолчанию составляет 60 секунд"
    ]
  },
  {
    "time": [
      396.745334,
      400.125802
    ],
    "en": [
      "it can take a bit for our neighbors to appear again"
    ],
    "ru": [
      "может потребоваться время, чтобы наши соседи снова появились"
    ]
  },
  {
    "time": [
      400.125802,
      404.241241
    ],
    "en": [
      "if we were to wait a minute and enter the command again they would appear"
    ],
    "ru": [
      "если мы подождем минуту и ​​снова введем команду, они появятся"
    ]
  },
  {
    "time": [
      404.241241,
      413.451594
    ],
    "en": [
      "step six is to disable CDP on the switch interfaces connected to pcs"
    ],
    "ru": [
      "Шаг шестой - отключить CDP на интерфейсах коммутатора, подключенных к ПК."
    ]
  },
  {
    "time": [
      413.451594,
      422.390284
    ],
    "en": [
      "because CDP sends information about the device for security purposes it is a good idea to disable it where it isn't needed"
    ],
    "ru": [
      "поскольку CDP отправляет информацию об устройстве в целях безопасности, рекомендуется отключить его там, где это не нужно."
    ]
  },
  {
    "time": [
      422.390284,
      426.042409
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
      422.390284,
      426.042409
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
      426.042409,
      428.434766
    ],
    "en": [
      "so let's go on switch one first"
    ],
    "ru": [
      "так что давайте сначала переключим один"
    ]
  },
  {
    "time": [
      428.434766,
      439.431376
    ],
    "en": [
      "conf t now we don't want to disable CDP globally so we won't use no CDP run"
    ],
    "ru": [
      "conf t теперь мы не хотим отключать CDP глобально, поэтому мы не будем использовать CDP run"
    ]
  },
  {
    "time": [
      439.431376,
      445.173976
    ],
    "en": [
      "we want to only disable it on Fast Ethernet 0 3 and 0 4"
    ],
    "ru": [
      "мы хотим отключить его только в Fast Ethernet 0 3 и 0 4"
    ]
  },
  {
    "time": [
      445.173976,
      447.63276
    ],
    "en": [
      "we have to use interface configuration mode for this"
    ],
    "ru": [
      "мы должны использовать для этого режим настройки интерфейса"
    ]
  },
  {
    "time": [
      447.63276,
      451.93034
    ],
    "en": [
      "since we'll be using the same command on each interface"
    ],
    "ru": [
      "поскольку мы будем использовать одну и ту же команду на каждом интерфейсе"
    ]
  },
  {
    "time": [
      451.93034,
      454.426694
    ],
    "en": [
      "let's configure both at the same time"
    ],
    "ru": [
      "давайте настроим оба одновременно"
    ]
  },
  {
    "time": [
      454.426694,
      458.419224
    ],
    "en": [
      "you can do this by configuring an interface range"
    ],
    "ru": [
      "вы можете сделать это, настроив диапазон интерфейса"
    ]
  },
  {
    "time": [
      458.419224,
      465.688898
    ],
    "en": [
      "you can enter interface range configuration mode for Fast Ethernet 0 3 and 0 4 with this command"
    ],
    "ru": [
      "вы можете войти в режим настройки диапазона интерфейсов для Fast Ethernet 0 3 и 0 4 с помощью этой команды"
    ]
  },
  {
    "time": [
      465.688898,
      472.114888
    ],
    "en": [
      "interface range f03 space - space for"
    ],
    "ru": [
      "диапазон интерфейса f03 пробел - место для"
    ]
  },
  {
    "time": [
      472.114888,
      476.659967
    ],
    "en": [
      "as you can see we are now in interface range configuration mode"
    ],
    "ru": [
      "как вы можете видеть, мы сейчас находимся в режиме настройки диапазона интерфейсов"
    ]
  },
  {
    "time": [
      476.659967,
      481.83431
    ],
    "en": [
      "this is very convenient when you are doing the same configurations on multiple interfaces"
    ],
    "ru": [
      "это очень удобно, когда вы выполняете одни и те же конфигурации на нескольких интерфейсах."
    ]
  },
  {
    "time": [
      481.83431,
      487.877268
    ],
    "en": [
      "now CDP and naval is used to enable CDP on an interface"
    ],
    "ru": [
      "теперь CDP и naval используются для включения CDP на интерфейсе"
    ]
  },
  {
    "time": [
      487.877268,
      489.854752
    ],
    "en": [
      "but it is enabled by default"
    ],
    "ru": [
      "но он включен по умолчанию"
    ]
  },
  {
    "time": [
      489.854752,
      494.424118
    ],
    "en": [
      "to disable you once again use no in front of the command"
    ],
    "ru": [
      "чтобы отключить вас еще раз, используйте no перед командой"
    ]
  },
  {
    "time": [
      494.424118,
      497.088948
    ],
    "en": [
      "no CDP enable"
    ],
    "ru": [
      "нет включения CDP"
    ]
  },
  {
    "time": [
      497.088948,
      498.506033
    ],
    "en": [
      "ok that's it"
    ],
    "ru": [
      "хорошо, вот и все"
    ]
  },
  {
    "time": [
      498.506033,
      502.003118
    ],
    "en": [
      "now let's go to switch to and do the same thing"
    ],
    "ru": [
      "теперь давайте переключимся и сделаем то же самое"
    ]
  },
  {
    "time": [
      502.003118,
      510.394603
    ],
    "en": [
      "conf t interface range of 0 3 to 4"
    ],
    "ru": [
      "conf t диапазон интерфейса от 0 3 до 4"
    ]
  },
  {
    "time": [
      510.394603,
      512.751444
    ],
    "en": [
      "no CDP enable"
    ],
    "ru": [
      "нет включения CDP"
    ]
  },
  {
    "time": [
      512.751444,
      515.499307
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
      515.499307,
      522.557729
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
      522.557729,
      527.538178
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
      527.538178,
      532.031063
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
      532.031063,
      539.291065
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
      539.291065,
      547.727704
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
      547.727704,
      547.727704
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
      547.727704,
      547.727704
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
      547.727704,
      547.727704
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]