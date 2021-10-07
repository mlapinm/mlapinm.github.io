let objs = [
  {
    "time": [
      0.0,
      4.69823
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
      4.69823,
      8.036378
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
      8.036378,
      15.772173
    ],
    "en": [
      "in this lab we will be working with the same network topology as in the previous lab lab number seven"
    ],
    "ru": [
      "в этой лабораторной работе мы будем работать с той же топологией сети, что и в предыдущей лабораторной работе номер семь."
    ]
  },
  {
    "time": [
      15.772173,
      19.897418
    ],
    "en": [
      "in which we configured inter VLAN routing with the router on a stick method"
    ],
    "ru": [
      "в котором мы настроили маршрутизацию между VLAN с роутером методом флешки"
    ]
  },
  {
    "time": [
      19.897418,
      24.038867
    ],
    "en": [
      "this time however the configurations are all completed"
    ],
    "ru": [
      "на этот раз, однако, все настройки завершены"
    ]
  },
  {
    "time": [
      24.038867,
      27.62313
    ],
    "en": [
      "the task this time is to troubleshoot a configuration error and fix it"
    ],
    "ru": [
      "на этот раз задача состоит в том, чтобы устранить ошибку конфигурации и исправить ее"
    ]
  },
  {
    "time": [
      27.62313,
      35.951555
    ],
    "en": [
      "troubleshooting is an important skill to have for your CCENT and CCNA exams and also of course in real-world situations"
    ],
    "ru": [
      "устранение неполадок - важный навык для экзаменов CCENT и CCNA, а также, конечно, в реальных ситуациях."
    ]
  },
  {
    "time": [
      35.951555,
      38.553251
    ],
    "en": [
      "because problems will inevitably come up"
    ],
    "ru": [
      "потому что проблемы неизбежно возникнут"
    ]
  },
  {
    "time": [
      38.553251,
      41.59053
    ],
    "en": [
      "try to complete this lab on your own first"
    ],
    "ru": [
      "попробуйте сначала пройти эту лабораторную работу самостоятельно"
    ]
  },
  {
    "time": [
      41.59053,
      44.600378
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
      44.600378,
      47.166952
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
      47.166952,
      51.712714
    ],
    "en": [
      "remember the exec method you use to troubleshoot doesn't have to match mine"
    ],
    "ru": [
      "помните, что метод exec, который вы используете для устранения неполадок, не обязательно должен совпадать с моим"
    ]
  },
  {
    "time": [
      51.712714,
      55.038719
    ],
    "en": [
      "as long as the end result is that you solve the problem"
    ],
    "ru": [
      "до тех пор, пока конечный результат таков, что вы решите проблему"
    ]
  },
  {
    "time": [
      55.038719,
      58.49551
    ],
    "en": [
      "so this is our scenario"
    ],
    "ru": [
      "так это наш сценарий"
    ]
  },
  {
    "time": [
      58.49551,
      64.03647
    ],
    "en": [
      "we have 4 pcs with pc1 & pc2 being in VLAN 13"
    ],
    "ru": [
      "у нас есть 4 ПК с pc1 и pc2 в VLAN 13"
    ]
  },
  {
    "time": [
      64.03647,
      67.407514
    ],
    "en": [
      "and pc 2 and pc 4 being in VLAN 24"
    ],
    "ru": [
      "и ПК 2 и ПК 4 находятся в VLAN 24"
    ]
  },
  {
    "time": [
      67.407514,
      73.184728
    ],
    "en": [
      "someone has configured inter VLAN routing to allow these pcs to communicate with each other"
    ],
    "ru": [
      "кто-то настроил маршрутизацию между VLAN, чтобы эти компьютеры могли связываться друг с другом"
    ]
  },
  {
    "time": [
      73.184728,
      77.534174
    ],
    "en": [
      "but evidently there is some problem preventing them from doing so"
    ],
    "ru": [
      "но, очевидно, есть какая-то проблема, мешающая им это сделать"
    ]
  },
  {
    "time": [
      77.534174,
      84.845038
    ],
    "en": [
      "in a troubleshooting scenario like this we should first confirm the problem"
    ],
    "ru": [
      "в таком сценарии устранения неполадок мы должны сначала подтвердить проблему"
    ]
  },
  {
    "time": [
      84.845038,
      88.490893
    ],
    "en": [
      "if I send pings from pc1"
    ],
    "ru": [
      "если я отправлю пинги с pc1"
    ]
  },
  {
    "time": [
      88.490893,
      91.468093
    ],
    "en": [
      "I shouldn't be able to ping PC to in PC 4"
    ],
    "ru": [
      "Я не могу пинговать компьютер на ПК 4"
    ]
  },
  {
    "time": [
      91.468093,
      99.618049
    ],
    "en": [
      "the scenario doesn't mention that computers in the same VLAN can't communicate so pc1 & pc2 should be able to ping each other"
    ],
    "ru": [
      "в сценарии не упоминается, что компьютеры в одной VLAN не могут обмениваться данными, поэтому pc1 и pc2 должны иметь возможность пинговать друг друга"
    ]
  },
  {
    "time": [
      99.618049,
      104.654089
    ],
    "en": [
      "likewise PC 2 shouldn't be able to ping PC 1 or PC 3"
    ],
    "ru": [
      "аналогично ПК 2 не должен иметь возможность пинговать ПК 1 или ПК 3"
    ]
  },
  {
    "time": [
      104.654089,
      107.132281
    ],
    "en": [
      "but should be able to ping pc 4"
    ],
    "ru": [
      "но должен иметь возможность пинговать ПК 4"
    ]
  },
  {
    "time": [
      107.132281,
      108.27213
    ],
    "en": [
      "let's test"
    ],
    "ru": [
      "давайте протестируем"
    ]
  },
  {
    "time": [
      108.27213,
      110.595281
    ],
    "en": [
      "I'll use PC 1 first"
    ],
    "ru": [
      "Я сначала воспользуюсь ПК 1"
    ]
  },
  {
    "time": [
      110.595281,
      114.406025
    ],
    "en": [
      "first ping PC 2"
    ],
    "ru": [
      "первый пинг ПК 2"
    ]
  },
  {
    "time": [
      114.406025,
      118.348466
    ],
    "en": [
      "ping 10.0.0.1 30"
    ],
    "ru": [
      "пинг 10.0.0.1 30"
    ]
  },
  {
    "time": [
      118.348466,
      121.500662
    ],
    "en": [
      "doesn't work"
    ],
    "ru": [
      "не работает"
    ]
  },
  {
    "time": [
      121.500662,
      128.784392
    ],
    "en": [
      "next ping pc3 ping 10.0.0.3 the ping works"
    ],
    "ru": [
      "следующий пинг pc3 пинг 10.0.0.3 пинг работает"
    ]
  },
  {
    "time": [
      128.784392,
      136.707317
    ],
    "en": [
      "next PC 4 ping 10.0.0.1 31 doesn't work"
    ],
    "ru": [
      "следующий ПК 4 пинг 10.0.0.1 31 не работает"
    ]
  },
  {
    "time": [
      136.707317,
      140.665913
    ],
    "en": [
      "ok let's try from PC to as well"
    ],
    "ru": [
      "хорошо, давайте попробуем с ПК"
    ]
  },
  {
    "time": [
      140.665913,
      149.994881
    ],
    "en": [
      "ping PC 1 first ping 10.0.0.2 doesn't work"
    ],
    "ru": [
      "пинг ПК 1 первый пинг 10.0.0.2 не работает"
    ]
  },
  {
    "time": [
      149.994881,
      157.333417
    ],
    "en": [
      "next PC 3 ping 10.0.0.3 doesn't work"
    ],
    "ru": [
      "следующий ПК 3 пинг 10.0.0.3 не работает"
    ]
  },
  {
    "time": [
      157.333417,
      164.75137
    ],
    "en": [
      "finally PC 4 ping 10.0.0.1 31 it works"
    ],
    "ru": [
      "наконец ПК 4 пинг 10.0.0.1 31 работает"
    ]
  },
  {
    "time": [
      164.75137,
      166.875221
    ],
    "en": [
      "so we have confirmed the problem"
    ],
    "ru": [
      "Итак, мы подтвердили проблему"
    ]
  },
  {
    "time": [
      166.875221,
      172.305115
    ],
    "en": [
      "computers in the same VLAN can communicate but our inter VLAN routing isn't working"
    ],
    "ru": [
      "компьютеры в одной VLAN могут обмениваться данными, но наша маршрутизация между VLAN не работает"
    ]
  },
  {
    "time": [
      172.305115,
      179.489856
    ],
    "en": [
      "because we are using r1 to route between subnets"
    ],
    "ru": [
      "потому что мы используем r1 для маршрутизации между подсетями"
    ]
  },
  {
    "time": [
      179.489856,
      185.419378
    ],
    "en": [
      "providing our inter VLAN routing it's probably a good idea to look around the link between switch 1 and r1"
    ],
    "ru": [
      "обеспечивая нашу маршрутизацию между VLAN, вероятно, неплохо было бы просмотреть ссылку между коммутатором 1 и r1"
    ]
  },
  {
    "time": [
      185.419378,
      188.329445
    ],
    "en": [
      "first let's check on switch 1"
    ],
    "ru": [
      "сначала давайте проверим на переключателе 1"
    ]
  },
  {
    "time": [
      188.329445,
      194.776753
    ],
    "en": [
      "enable let's check if the gig 0 1 interface is down"
    ],
    "ru": [
      "enable проверим, не работает ли интерфейс гиг 0 1"
    ]
  },
  {
    "time": [
      194.776753,
      197.418102
    ],
    "en": [
      "show IP interface brief"
    ],
    "ru": [
      "показать краткое описание IP-интерфейса"
    ]
  },
  {
    "time": [
      197.418102,
      202.009911
    ],
    "en": [
      "nope as you can see it is up and up"
    ],
    "ru": [
      "нет, как вы можете видеть, это все выше и выше"
    ]
  },
  {
    "time": [
      202.009911,
      206.058783
    ],
    "en": [
      "perhaps the gig 0 1 interface isn't configured as a trunk"
    ],
    "ru": [
      "возможно, интерфейс gig 0 1 не настроен как транк"
    ]
  },
  {
    "time": [
      206.058783,
      210.699182
    ],
    "en": [
      "now we could use show run to check"
    ],
    "ru": [
      "теперь мы можем использовать show run, чтобы проверить"
    ]
  },
  {
    "time": [
      210.699182,
      214.039957
    ],
    "en": [
      "but for exam purposes as well as real world purposes"
    ],
    "ru": [
      "но для экзаменационных целей, а также для реальных целей"
    ]
  },
  {
    "time": [
      214.039957,
      216.817516
    ],
    "en": [
      "it's important to know other commands too"
    ],
    "ru": [
      "важно знать и другие команды"
    ]
  },
  {
    "time": [
      216.817516,
      221.120992
    ],
    "en": [
      "let's use the show interfaces trunk command"
    ],
    "ru": [
      "давайте воспользуемся командой show interfaces trunk"
    ]
  },
  {
    "time": [
      221.120992,
      229.007535
    ],
    "en": [
      "as you can see both of our trunks are working and allowing all the VLANs that we are using"
    ],
    "ru": [
      "как вы можете видеть, обе наши магистрали работают и позволяют использовать все VLAN, которые мы используем"
    ]
  },
  {
    "time": [
      229.007535,
      239.005101
    ],
    "en": [
      "let's head over to r1 and check things out"
    ],
    "ru": [
      "давай отправимся в r1 и проверим"
    ]
  },
  {
    "time": [
      239.005101,
      243.106631
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
      243.106631,
      251.15149
    ],
    "en": [
      "looks like the interface is up and the IP addresses are configured as 10.0.0.1 for VLAN 13"
    ],
    "ru": [
      "похоже, что интерфейс включен, а IP-адреса настроены как 10.0.0.1 для VLAN 13"
    ]
  },
  {
    "time": [
      251.15149,
      254.869647
    ],
    "en": [
      "and 10.0.0.1 to 9 for VLAN 24"
    ],
    "ru": [
      "и от 10.0.0.1 до 9 для VLAN 24"
    ]
  },
  {
    "time": [
      254.869647,
      261.073869
    ],
    "en": [
      "these IP addresses should be configured on the PCs as their default gateway"
    ],
    "ru": [
      "эти IP-адреса должны быть настроены на ПК в качестве шлюза по умолчанию."
    ]
  },
  {
    "time": [
      261.073869,
      264.589187
    ],
    "en": [
      "let's quickly check each PC to make sure"
    ],
    "ru": [
      "давайте быстро проверим каждый ПК, чтобы убедиться"
    ]
  },
  {
    "time": [
      264.589187,
      271.396973
    ],
    "en": [
      "on PC one ipconfig /all"
    ],
    "ru": [
      "на ПК один ipconfig / все"
    ]
  },
  {
    "time": [
      271.396973,
      272.600487
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
      272.600487,
      274.872318
    ],
    "en": [
      "next on PC 2"
    ],
    "ru": [
      "следующий на ПК 2"
    ]
  },
  {
    "time": [
      274.872318,
      281.175486
    ],
    "en": [
      "ipconfig /all looks good as well"
    ],
    "ru": [
      "ipconfig / all тоже выглядит хорошо"
    ]
  },
  {
    "time": [
      281.175486,
      289.49705
    ],
    "en": [
      "PC 3 ipconfig /all looks good"
    ],
    "ru": [
      "ПК 3 ipconfig / все выглядит хорошо"
    ]
  },
  {
    "time": [
      289.49705,
      298.843391
    ],
    "en": [
      "finally on PC 4 ipconfig /all no problems here"
    ],
    "ru": [
      "наконец-то на ПК 4 ipconfig / все тут никаких проблем"
    ]
  },
  {
    "time": [
      298.843391,
      301.770768
    ],
    "en": [
      "now let's go back to our one"
    ],
    "ru": [
      "а теперь вернемся к нашему"
    ]
  },
  {
    "time": [
      301.770768,
      306.739163
    ],
    "en": [
      "perhaps there is a different miss configuration on the sub interfaces"
    ],
    "ru": [
      "возможно, на подчиненных интерфейсах есть другая конфигурация пропуска"
    ]
  },
  {
    "time": [
      306.739163,
      314.051305
    ],
    "en": [
      "remember we had to configure the VLAN before the IP address on these sub interfaces in the previous lab"
    ],
    "ru": [
      "помните, что в предыдущей лабораторной работе мы должны были настроить VLAN перед IP-адресом на этих подчиненных интерфейсах."
    ]
  },
  {
    "time": [
      314.051305,
      319.389883
    ],
    "en": [
      "let's check again show run is always an option but let's do this"
    ],
    "ru": [
      "давайте еще раз проверим, показывать запуск - это всегда вариант, но давайте сделаем это"
    ]
  },
  {
    "time": [
      319.389883,
      324.800502
    ],
    "en": [
      "show interface g0 0.13"
    ],
    "ru": [
      "показать интерфейс g0 0,13"
    ]
  },
  {
    "time": [
      324.800502,
      329.019162
    ],
    "en": [
      "VLAN ID 13 that's correct"
    ],
    "ru": [
      "VLAN ID 13 правильно"
    ]
  },
  {
    "time": [
      329.019162,
      337.915217
    ],
    "en": [
      "next show interface g0 0.24 VLAN ID 14"
    ],
    "ru": [
      "следующий показать интерфейс g0 0,24 VLAN ID 14"
    ]
  },
  {
    "time": [
      337.915217,
      341.257255
    ],
    "en": [
      "looks like we found the problem"
    ],
    "ru": [
      "похоже, мы нашли проблему"
    ]
  },
  {
    "time": [
      341.257255,
      343.22351
    ],
    "en": [
      "there is no VLAN 14 on the network"
    ],
    "ru": [
      "в сети нет VLAN 14"
    ]
  },
  {
    "time": [
      343.22351,
      345.645814
    ],
    "en": [
      "this is supposed to be VLAN 24"
    ],
    "ru": [
      "это должен быть VLAN 24"
    ]
  },
  {
    "time": [
      345.645814,
      347.624844
    ],
    "en": [
      "let's go fix that"
    ],
    "ru": [
      "давай исправим это"
    ]
  },
  {
    "time": [
      347.624844,
      358.39565
    ],
    "en": [
      "conf t interface g0 0.24 encapsulation dot1q 24"
    ],
    "ru": [
      "conf t interface g0 0.24 инкапсуляция dot1q 24"
    ]
  },
  {
    "time": [
      358.39565,
      360.818604
    ],
    "en": [
      "ok that should solve the problem"
    ],
    "ru": [
      "хорошо, это должно решить проблему"
    ]
  },
  {
    "time": [
      360.818604,
      365.520263
    ],
    "en": [
      "a configuration error like this could very well be a simple typo"
    ],
    "ru": [
      "такая ошибка конфигурации вполне может быть простой опечаткой"
    ]
  },
  {
    "time": [
      365.520263,
      370.892092
    ],
    "en": [
      "always be sure to your configurations carefully in your exams and in real-world situations"
    ],
    "ru": [
      "всегда внимательно относитесь к своим конфигурациям на экзаменах и в реальных ситуациях"
    ]
  },
  {
    "time": [
      370.892092,
      380.546927
    ],
    "en": [
      "have to check that our network actually works"
    ],
    "ru": [
      "нужно проверить, что наша сеть действительно работает"
    ]
  },
  {
    "time": [
      380.546927,
      383.748189
    ],
    "en": [
      "with inter VLAN routing now properly configured"
    ],
    "ru": [
      "с маршрутизацией между VLAN теперь правильно настроен"
    ]
  },
  {
    "time": [
      383.748189,
      386.357837
    ],
    "en": [
      "all four pcs should be able to ping each other"
    ],
    "ru": [
      "все четыре компьютера должны иметь возможность пинговать друг друга"
    ]
  },
  {
    "time": [
      386.357837,
      389.163487
    ],
    "en": [
      "let's hop on PC one again"
    ],
    "ru": [
      "давай снова сядем на ПК"
    ]
  },
  {
    "time": [
      389.163487,
      391.676036
    ],
    "en": [
      "first let's ping PC 2"
    ],
    "ru": [
      "сначала давайте пингуем ПК 2"
    ]
  },
  {
    "time": [
      391.676036,
      396.479051
    ],
    "en": [
      "ping 10.0.0.1 30 the ping works"
    ],
    "ru": [
      "ping 10.0.0.1 30 пинг работает"
    ]
  },
  {
    "time": [
      396.479051,
      402.634568
    ],
    "en": [
      "then pc 3 ping 10.0.0.3 it works again"
    ],
    "ru": [
      "затем pc 3 ping 10.0.0.3 он снова работает"
    ]
  },
  {
    "time": [
      402.634568,
      409.658427
    ],
    "en": [
      "next PC 4 paying 10.0.0.1 31 the ping works"
    ],
    "ru": [
      "следующий ПК 4 платит 10.0.0.1 31 пинг работает"
    ]
  },
  {
    "time": [
      409.658427,
      411.817894
    ],
    "en": [
      "looks like our problem is solved"
    ],
    "ru": [
      "похоже, наша проблема решена"
    ]
  },
  {
    "time": [
      411.817894,
      414.977687
    ],
    "en": [
      "just to be sure I'll send some pings from PC 2 as well"
    ],
    "ru": [
      "просто чтобы быть уверенным, что я также пришлю несколько пингов с ПК 2"
    ]
  },
  {
    "time": [
      414.977687,
      425.727168
    ],
    "en": [
      "ping 10.0.0.2 it works ping 10.0.0.3 it works"
    ],
    "ru": [
      "пинг 10.0.0.2 работает пинг 10.0.0.3 работает"
    ]
  },
  {
    "time": [
      425.727168,
      431.97908
    ],
    "en": [
      "ping 10.0.0.1 31 it works as well"
    ],
    "ru": [
      "ping 10.0.0.1 31 тоже работает"
    ]
  },
  {
    "time": [
      431.97908,
      434.289798
    ],
    "en": [
      "we have successfully fixed the network"
    ],
    "ru": [
      "мы успешно исправили сеть"
    ]
  },
  {
    "time": [
      434.289798,
      441.780786
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
      441.780786,
      446.615239
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
      446.615239,
      451.803071
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
      451.803071,
      457.681636
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
      457.681636,
      466.610151
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
      466.610151,
      466.610151
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
      466.610151,
      466.610151
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
      466.610151,
      466.610151
    ],
    "en": [
      ""
    ],
    "ru": [
      ""
    ]
  }
]