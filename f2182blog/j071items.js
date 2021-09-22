let items = [
  {
    "time": [
      1.28,
      3.91
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
      3.91,
      7.35
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
      7.35,
      11.099
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
      11.099,
      16.99
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
      16.99,
      18.23
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
      18.23,
      22.5
    ],
    "en": [
      "Also, remember to sign up via the link in the description to get all of the lab files"
    ],
    "ru": [
      "Также не забудьте зарегистрироваться по ссылке в описании, чтобы получить все лабораторные файлы."
    ]
  },
  {
    "time": [
      22.5,
      27.54
    ],
    "en": [
      "for this course, so you can try it out yourself in packet tracer."
    ],
    "ru": [
      "для этого курса, так что вы можете попробовать его самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      27.54,
      31.84
    ],
    "en": [
      "If you want more labs like these, I highly recommend picking up Boson’s NetSim for"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я настоятельно рекомендую приобрести Boson's NetSim для"
    ]
  },
  {
    "time": [
      31.84,
      36.1
    ],
    "en": [
      "the CCNA, click the link in the video description to check it out."
    ],
    "ru": [
      "CCNA, щелкните ссылку в описании видео, чтобы ознакомиться с ним."
    ]
  },
  {
    "time": [
      36.1,
      40.039
    ],
    "en": [
      "It’s a network simulator like packet tracer, but it’s even better, and it includes all"
    ],
    "ru": [
      "Это сетевой симулятор, похожий на трассировщик пакетов, но он еще лучше и включает в себя все"
    ]
  },
  {
    "time": [
      40.039,
      45.03
    ],
    "en": [
      "of these guided labs to not only help you get hands-on practice configuring and troubleshooting,"
    ],
    "ru": [
      "из этих лабораторных работ, которые не только помогут вам на практике настроить и устранить неполадки,"
    ]
  },
  {
    "time": [
      45.03,
      47.899
    ],
    "en": [
      "but also deepen your understanding of the exam topics."
    ],
    "ru": [
      "но также углубите свое понимание экзаменационных тем."
    ]
  },
  {
    "time": [
      47.899,
      53.449
    ],
    "en": [
      "I used it myself when studying for my certifications, so I feel confident about recommending it"
    ],
    "ru": [
      "Я сам использовал его, когда готовился к получению сертификатов, поэтому могу с уверенностью рекомендовать его."
    ]
  },
  {
    "time": [
      53.449,
      55.039
    ],
    "en": [
      "to all of you."
    ],
    "ru": [
      "всем вам."
    ]
  },
  {
    "time": [
      55.039,
      61.399
    ],
    "en": [
      "If you want to get your own copy of NetSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить собственную копию NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      61.399,
      64.58
    ],
    "en": [
      "In this lab we will configure NTP in this network."
    ],
    "ru": [
      "В этой лабораторной работе мы настроим NTP в этой сети."
    ]
  },
  {
    "time": [
      64.58,
      72.45
    ],
    "en": [
      "R1 will synchronize to SRV1 over the Internet, and then R2 and R3 will synchronize to R1."
    ],
    "ru": [
      "R1 синхронизируется с SRV1 через Интернет, а затем R2 и R3 синхронизируются с R1."
    ]
  },
  {
    "time": [
      72.45,
      76.17099999999999
    ],
    "en": [
      "Unfortunately some of the commands I showed you in the lecture aren’t available in Packet"
    ],
    "ru": [
      "К сожалению, некоторые команды, которые я показал вам в лекции, недоступны в Packet."
    ]
  },
  {
    "time": [
      76.17099999999999,
      82.85
    ],
    "en": [
      "Tracer, such as the CLOCK SUMMER-TIME command, the NTP SOURCE command, and some others."
    ],
    "ru": [
      "Tracer, например, команда CLOCK SUMMER-TIME, команда NTP SOURCE и некоторые другие."
    ]
  },
  {
    "time": [
      82.85,
      87.72
    ],
    "en": [
      "But there are still many NTP configurations we can practice, so let’s get started."
    ],
    "ru": [
      "Но есть еще много конфигураций NTP, которые мы можем практиковать, так что приступим."
    ]
  },
  {
    "time": [
      87.72,
      95.88
    ],
    "en": [
      "In step 1 we will configure the time on R1, R2, and R3 to 12PM on December 30th 2020."
    ],
    "ru": [
      "На шаге 1 мы настроим время на R1, R2 и R3 до 12:00 30 декабря 2020 года."
    ]
  },
  {
    "time": [
      95.88,
      100.40899999999999
    ],
    "en": [
      "Note that we haven’t configured the time zone yet, so this will be in UTC."
    ],
    "ru": [
      "Обратите внимание, что мы еще не настроили часовой пояс, поэтому он будет в формате UTC."
    ]
  },
  {
    "time": [
      100.40899999999999,
      106.90899999999999
    ],
    "en": [
      "I’ll go on R1 first. ENABLE."
    ],
    "ru": [
      "Я сначала пойду на R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      106.90899999999999,
      114.56
    ],
    "en": [
      "ENABLE. CLOCK SET 12:00:00, that’s hours, minutes, and seconds, Dec 30 2020."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. УСТАНОВКА ЧАСОВ 12:00:00, то есть часы, минуты и секунды, 30 декабря 2020 г."
    ]
  },
  {
    "time": [
      114.56,
      118.729
    ],
    "en": [
      "Let’s check the clock. SHOW CLOCK DETAIL."
    ],
    "ru": [
      "Давай посмотрим на часы. ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ."
    ]
  },
  {
    "time": [
      118.729,
      123.509
    ],
    "en": [
      "SHOW CLOCK DETAIL. Okay, the time is correct and the source is user configuration."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ. Хорошо, время правильное, а источником является пользовательская конфигурация."
    ]
  },
  {
    "time": [
      123.509,
      129.14
    ],
    "en": [
      "Later we’ll configure NTP, however something I didn’t mention is that NTP can take quite"
    ],
    "ru": [
      "Позже мы настроим NTP, но я не упомянул, что NTP может"
    ]
  },
  {
    "time": [
      129.14,
      131.31
    ],
    "en": [
      "a long time to synchronize."
    ],
    "ru": [
      "долго синхронизировать."
    ]
  },
  {
    "time": [
      131.31,
      136.57999999999998
    ],
    "en": [
      "But if you manually configure the time on the device close to the time of the NTP server,"
    ],
    "ru": [
      "Но если вы вручную настроите время на устройстве, близкое ко времени сервера NTP,"
    ]
  },
  {
    "time": [
      136.57999999999998,
      139.19
    ],
    "en": [
      "the synchronization process will be a little quicker."
    ],
    "ru": [
      "процесс синхронизации будет немного быстрее."
    ]
  },
  {
    "time": [
      139.19,
      145.55
    ],
    "en": [
      "I configured the NTP server, SRV1, for the same time so this should make it quicker."
    ],
    "ru": [
      "Я настроил сервер NTP, SRV1, на то же время, так что это должно сделать его быстрее."
    ]
  },
  {
    "time": [
      145.55,
      151.11
    ],
    "en": [
      "Actually, while we’re here I’ll do step 2 on R1 and configure the time zone."
    ],
    "ru": [
      "На самом деле, пока мы здесь, я сделаю шаг 2 на R1 и настрою часовой пояс."
    ]
  },
  {
    "time": [
      151.11,
      157.09
    ],
    "en": [
      "CONF T. CLOCK TIMEZONE JST 9."
    ],
    "ru": [
      "CONF T. ЧАСЫ TIMEZONE JST 9."
    ]
  },
  {
    "time": [
      157.09,
      163.16
    ],
    "en": [
      "If you’re not sure how many hours your time zone is offset from UTC, do a Google search to find out."
    ],
    "ru": [
      "Если вы не знаете, на сколько часов ваш часовой пояс смещен от всемирного координированного времени, поищите в Google."
    ]
  },
  {
    "time": [
      163.16,
      165.56
    ],
    "en": [
      "to find out. Let’s check once more."
    ],
    "ru": [
      "выяснить. Давай еще раз проверим."
    ]
  },
  {
    "time": [
      165.56,
      167.87
    ],
    "en": [
      "DO SHOW CLOCK DETAIL."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕТАЛИ ЧАСОВ."
    ]
  },
  {
    "time": [
      167.87,
      174.75
    ],
    "en": [
      "Okay, so the clock is now 9 hours ahead of the UTC time I configured."
    ],
    "ru": [
      "Итак, часы теперь на 9 часов опережают настроенное мной время UTC."
    ]
  },
  {
    "time": [
      174.75,
      180.51
    ],
    "en": [
      "Next I’ll do R2. ENABLE."
    ],
    "ru": [
      "Затем я сделаю R2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      180.51,
      186.18
    ],
    "en": [
      "ENABLE. CLOCK SET 12:00:00 Dec 30 2020."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. УСТАНОВКА ЧАСОВ 12:00:00 30 декабря 2020 г."
    ]
  },
  {
    "time": [
      186.18,
      188.56
    ],
    "en": [
      "And I’ll configure the time zone."
    ],
    "ru": [
      "А я настрою часовой пояс."
    ]
  },
  {
    "time": [
      188.56,
      194.489
    ],
    "en": [
      "CONF T. CLOCK TIMEZONE JST 9. And then check."
    ],
    "ru": [
      "CONF T. CLOCK TIMEZONE JST 9. А затем проверьте."
    ]
  },
  {
    "time": [
      194.489,
      198.75
    ],
    "en": [
      "And then check. DO SHOW CLOCK DETAIL. Okay, looks good."
    ],
    "ru": [
      "А потом проверьте. ПОКАЗАТЬ ДЕТАЛИ ЧАСОВ. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      198.75,
      205.36
    ],
    "en": [
      "Okay, looks good. And finally I’ll do the same on R3. ENABLE."
    ],
    "ru": [
      "Хорошо, выглядит хорошо. И, наконец, сделаю то же самое на R3. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      205.36,
      211.05
    ],
    "en": [
      "ENABLE. CLOCK SET 12:00:00 Dec 30 2020."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. УСТАНОВКА ЧАСОВ 12:00:00 30 декабря 2020 г."
    ]
  },
  {
    "time": [
      211.05,
      212.829
    ],
    "en": [
      "And the time zone."
    ],
    "ru": [
      "И часовой пояс."
    ]
  },
  {
    "time": [
      212.829,
      219.099
    ],
    "en": [
      "CONF T. CLOCK TIMEZONE JST 9. And I’ll check."
    ],
    "ru": [
      "CONF T. CLOCK TIMEZONE JST 9. Я проверю."
    ]
  },
  {
    "time": [
      219.099,
      223.6
    ],
    "en": [
      "And I’ll check. DO SHOW CLOCK DETAIL. Okay, no problem."
    ],
    "ru": [
      "И я проверю. ПОКАЗАТЬ ДЕТАЛИ ЧАСОВ. Хорошо, без проблем."
    ]
  },
  {
    "time": [
      223.6,
      229.349
    ],
    "en": [
      "Okay, no problem. The clocks on R1, R2, and R3 don’t match at the moment, but that’s fine."
    ],
    "ru": [
      "Хорошо, без проблем. Часы на R1, R2 и R3 в настоящий момент не совпадают, но это нормально."
    ]
  },
  {
    "time": [
      229.349,
      233.989
    ],
    "en": [
      "That will be fixed when we enable NTP later."
    ],
    "ru": [
      "Это будет исправлено, когда мы включим NTP позже."
    ]
  },
  {
    "time": [
      233.989,
      241.56
    ],
    "en": [
      "Step 3 is to configure R1 to synchronize to NTP server 1.1.1.1, that’s SRV1 here."
    ],
    "ru": [
      "Шаг 3 - настроить R1 для синхронизации с NTP-сервером 1.1.1.1, здесь это SRV1."
    ]
  },
  {
    "time": [
      241.56,
      247.0
    ],
    "en": [
      "So I’ll return to R1 and do that. NTP SERVER 1.1.1.1."
    ],
    "ru": [
      "Итак, я вернусь к R1 и сделаю это. NTP-СЕРВЕР 1.1.1.1."
    ]
  },
  {
    "time": [
      247.0,
      250.689
    ],
    "en": [
      "NTP SERVER 1.1.1.1. That’s it. Let’s check."
    ],
    "ru": [
      "NTP-СЕРВЕР 1.1.1.1. Вот и все. Давайте проверим."
    ]
  },
  {
    "time": [
      250.689,
      253.79
    ],
    "en": [
      "Let’s check. DO SHOW NTP ASSOCIATIONS."
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ АССОЦИАЦИИ NTP."
    ]
  },
  {
    "time": [
      253.79,
      261.58
    ],
    "en": [
      "Okay, 1.1.1.1 was configured but as you can see the ‘sys.peer’ asterisk isn’t showing yet."
    ],
    "ru": [
      "Хорошо, 1.1.1.1 был настроен, но, как видите, звездочка «sys.peer» еще не отображается."
    ]
  },
  {
    "time": [
      261.58,
      265.79
    ],
    "en": [
      "yet. This can take quite a while, especially in Packet Tracer, so I’ll click these arrows"
    ],
    "ru": [
      "пока что. Это может занять некоторое время, особенно в Packet Tracer, поэтому я нажимаю эти стрелки"
    ]
  },
  {
    "time": [
      265.79,
      269.22
    ],
    "en": [
      "here a bunch of times to fast-forward the simulation."
    ],
    "ru": [
      "здесь несколько раз, чтобы перемотать симуляцию вперед."
    ]
  },
  {
    "time": [
      269.22,
      273.4
    ],
    "en": [
      "Okay, hopefully that’s enough, I’ll go back to R1."
    ],
    "ru": [
      "Хорошо, надеюсь, этого достаточно, я вернусь к R1."
    ]
  },
  {
    "time": [
      273.4,
      282.78
    ],
    "en": [
      "But the console has timed out because of inactivity, so I’ll use ENABLE again and let’s check. SHOW NTP ASSOCIATIONS."
    ],
    "ru": [
      "Но время ожидания консоли истекло из-за бездействия, поэтому я снова воспользуюсь ENABLE, и давайте проверим. ПОКАЗАТЬ АССОЦИАЦИИ NTP."
    ]
  },
  {
    "time": [
      282.78,
      285.38
    ],
    "en": [
      "SHOW NTP ASSOCIATIONS. Okay, the asterisk is there now."
    ],
    "ru": [
      "ПОКАЗАТЬ АССОЦИАЦИИ NTP. Хорошо, звездочка теперь там."
    ]
  },
  {
    "time": [
      285.38,
      287.86
    ],
    "en": [
      "So, what stratum is 1.1.1.1?"
    ],
    "ru": [
      "Итак, что это за слой 1.1.1.1?"
    ]
  },
  {
    "time": [
      287.86,
      290.79
    ],
    "en": [
      "It’s stratum 1, as you can see here."
    ],
    "ru": [
      "Это слой 1, как вы можете видеть здесь."
    ]
  },
  {
    "time": [
      290.79,
      297.89
    ],
    "en": [
      "So, now that R1 is an NTP client it is an NTP server also, what is its stratum?"
    ],
    "ru": [
      "Итак, теперь, когда R1 является клиентом NTP, он также является сервером NTP, каков его слой?"
    ]
  },
  {
    "time": [
      297.89,
      302.729
    ],
    "en": [
      "It should be 2, because it is syncing to a stratum 1 server. Let’s check."
    ],
    "ru": [
      "Это должно быть 2, потому что он синхронизируется с сервером уровня 1. Давайте проверим."
    ]
  },
  {
    "time": [
      302.729,
      305.11
    ],
    "en": [
      "Let’s check. SHOW NTP STATUS."
    ],
    "ru": [
      "Давайте проверим. ПОКАЗАТЬ СТАТУС NTP."
    ]
  },
  {
    "time": [
      305.11,
      308.49
    ],
    "en": [
      "Okay, that is correct, stratum 2."
    ],
    "ru": [
      "Хорошо, это правильно, слой 2."
    ]
  },
  {
    "time": [
      308.49,
      313.19
    ],
    "en": [
      "And let’s check R1’s clock. SHOW CLOCK DETAIL."
    ],
    "ru": [
      "А давайте посмотрим на часы R1. ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ."
    ]
  },
  {
    "time": [
      313.19,
      315.46
    ],
    "en": [
      "SHOW CLOCK DETAIL. Okay the time source has changed to NTP."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ. Хорошо, источник времени изменился на NTP."
    ]
  },
  {
    "time": [
      315.46,
      319.81
    ],
    "en": [
      "So, that’s all for step 3."
    ],
    "ru": [
      "Итак, это все, что касается шага 3."
    ]
  },
  {
    "time": [
      319.81,
      325.34
    ],
    "en": [
      "In step 4 we must configure R1 as a stratum 8 NTP master."
    ],
    "ru": [
      "На шаге 4 мы должны настроить R1 в качестве мастера NTP уровня 8."
    ]
  },
  {
    "time": [
      325.34,
      326.62
    ],
    "en": [
      "Why would we do this?"
    ],
    "ru": [
      "Зачем нам это делать?"
    ]
  },
  {
    "time": [
      326.62,
      333.13
    ],
    "en": [
      "R1 is already acting as an NTP server because it is syncing to SRV1, so R2 and R3 should"
    ],
    "ru": [
      "R1 уже действует как NTP-сервер, потому что он синхронизируется с SRV1, поэтому R2 и R3 должны"
    ]
  },
  {
    "time": [
      333.13,
      336.42
    ],
    "en": [
      "be able to use R1 as an NTP server."
    ],
    "ru": [
      "иметь возможность использовать R1 в качестве NTP-сервера."
    ]
  },
  {
    "time": [
      336.42,
      341.62
    ],
    "en": [
      "However, what if R1 stops being able to sync to 1.1.1.1?"
    ],
    "ru": [
      "Однако что, если R1 перестанет синхронизироваться с 1.1.1.1?"
    ]
  },
  {
    "time": [
      341.62,
      349.229
    ],
    "en": [
      "If we configure R1 as an NTP master, that can serve as a backup clock for R2 and R3 to sync to."
    ],
    "ru": [
      "Если мы настроим R1 как мастер NTP, он может служить резервными часами для синхронизации R2 и R3."
    ]
  },
  {
    "time": [
      349.229,
      352.05
    ],
    "en": [
      "to sync to. So let’s do that here on R1."
    ],
    "ru": [
      "для синхронизации. Итак, давайте сделаем это здесь, на R1."
    ]
  },
  {
    "time": [
      352.05,
      355.6
    ],
    "en": [
      "CONF T. NTP MASTER."
    ],
    "ru": [
      "CONF T. NTP MASTER."
    ]
  },
  {
    "time": [
      355.6,
      360.34
    ],
    "en": [
      "It says to configure R1 as a stratum 8 master, and that is the default so we don’t need"
    ],
    "ru": [
      "В нем говорится, что нужно настроить R1 в качестве мастера уровня 8, и это значение по умолчанию, поэтому нам не нужно"
    ]
  },
  {
    "time": [
      360.34,
      363.19
    ],
    "en": [
      "to specify the stratum."
    ],
    "ru": [
      "указать страту."
    ]
  },
  {
    "time": [
      363.19,
      368.24
    ],
    "en": [
      "Next we must configure R2 and R3 to synchronize to R1 with authentication."
    ],
    "ru": [
      "Затем мы должны настроить R2 и R3 для синхронизации с R1 с аутентификацией."
    ]
  },
  {
    "time": [
      368.24,
      374.12
    ],
    "en": [
      "Okay, since I’m on R1 already I’ll configure the authentication here first."
    ],
    "ru": [
      "Хорошо, поскольку я уже использую R1, я сначала настрою здесь аутентификацию."
    ]
  },
  {
    "time": [
      374.12,
      380.229
    ],
    "en": [
      "First, enable NTP authentication. NTP AUTHENTICATE."
    ],
    "ru": [
      "Сначала включите аутентификацию NTP. АУТЕНТИЧНЫЙ NTP."
    ]
  },
  {
    "time": [
      380.229,
      383.34
    ],
    "en": [
      "NTP AUTHENTICATE. Then, create the key."
    ],
    "ru": [
      "АУТЕНТИЧНЫЙ NTP. Затем создайте ключ."
    ]
  },
  {
    "time": [
      383.34,
      392.8
    ],
    "en": [
      "NTP AUTHENTICATION-KEY 1, you can use whatever number you want, MD5, then the key itself."
    ],
    "ru": [
      "NTP AUTHENTICATION-KEY 1, вы можете использовать любой номер, который хотите, MD5, а затем сам ключ."
    ]
  },
  {
    "time": [
      392.8,
      400.24
    ],
    "en": [
      "No password is specified in the instructions, so use whatever you’d like. I’ll use ‘jeremysitlab’."
    ],
    "ru": [
      "В инструкциях не указан пароль, поэтому используйте все, что хотите. Я буду использовать \"jeremysitlab\"."
    ]
  },
  {
    "time": [
      400.24,
      407.24
    ],
    "en": [
      "I’ll use ‘jeremysitlab’. Finally I’ll configure key 1 as a trusted key. NTP TRUSTED-KEY 1."
    ],
    "ru": [
      "Я буду использовать \"jeremysitlab\". Наконец, я настрою ключ 1 как доверенный. ДОВЕРЕННЫЙ КЛЮЧ NTP 1."
    ]
  },
  {
    "time": [
      407.24,
      410.77
    ],
    "en": [
      "NTP TRUSTED-KEY 1. Okay that’s all for R1."
    ],
    "ru": [
      "ДОВЕРЕННЫЙ КЛЮЧ NTP 1. Хорошо, это все для R1."
    ]
  },
  {
    "time": [
      410.77,
      414.2
    ],
    "en": [
      "Next I’ll configure R2. ENABLE."
    ],
    "ru": [
      "Затем я настрою R2. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      414.2,
      422.9
    ],
    "en": [
      "ENABLE. CONF T. First I’ll enable NTP authentication. NTP AUTHENTICATE."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. Сначала я включу аутентификацию NTP. АУТЕНТИЧНЫЙ NTP."
    ]
  },
  {
    "time": [
      422.9,
      425.0
    ],
    "en": [
      "NTP AUTHENTICATE. Then create the key."
    ],
    "ru": [
      "АУТЕНТИЧНЫЙ NTP. Затем создайте ключ."
    ]
  },
  {
    "time": [
      425.0,
      432.83
    ],
    "en": [
      "NTP AUTHENTICATION-KEY 1 MD5 jeremysitlab."
    ],
    "ru": [
      "КЛЮЧ АУТЕНТИФИКАЦИИ NTP 1 MD5 jeremysitlab."
    ]
  },
  {
    "time": [
      432.83,
      439.34
    ],
    "en": [
      "Then configure key 1 as trusted. NTP TRUSTED-KEY 1."
    ],
    "ru": [
      "Затем настройте ключ 1 как доверенный. ДОВЕРЕННЫЙ КЛЮЧ NTP 1."
    ]
  },
  {
    "time": [
      439.34,
      441.629
    ],
    "en": [
      "NTP TRUSTED-KEY 1. Finally I’ll configure R1 as R2’s NTP server."
    ],
    "ru": [
      "ДОВЕРЕННЫЙ КЛЮЧ NTP 1. Наконец, я настрою R1 как сервер NTP R2."
    ]
  },
  {
    "time": [
      441.629,
      449.19
    ],
    "en": [
      "NTP SERVER 192.168.12.1 KEY 1."
    ],
    "ru": [
      "NTP-СЕРВЕР 192.168.12.1 КЛЮЧ 1."
    ]
  },
  {
    "time": [
      449.19,
      457.77
    ],
    "en": [
      "That configures R1 as R2’s NTP server, and specifies that R2 should use key 1 to authenticate R1."
    ],
    "ru": [
      "Это настраивает R1 как NTP-сервер R2 и указывает, что R2 должен использовать ключ 1 для аутентификации R1."
    ]
  },
  {
    "time": [
      457.77,
      463.15
    ],
    "en": [
      "R1. As the note says in step 4, the NTP source command isn’t available in Packet Tracer,"
    ],
    "ru": [
      "R1. Как говорится в примечании к шагу 4, команда источника NTP недоступна в Packet Tracer,"
    ]
  },
  {
    "time": [
      463.15,
      470.73
    ],
    "en": [
      "so instead of using a loopback interface I just configured R1’s G0/1 interface as the NTP server."
    ],
    "ru": [
      "поэтому вместо использования интерфейса обратной связи я просто настроил интерфейс G0 / 1 маршрутизатора R1 в качестве сервера NTP."
    ]
  },
  {
    "time": [
      470.73,
      475.169
    ],
    "en": [
      "NTP server. The reason you need the NTP SOURCE command is that, if you configure R1’s loopback"
    ],
    "ru": [
      "NTP-сервер. Причина, по которой вам нужна команда NTP SOURCE, заключается в том, что если вы настроите loopback R1"
    ]
  },
  {
    "time": [
      475.169,
      481.77
    ],
    "en": [
      "interface as R2’s NTP server, but the replies from R1 come from the IP address on the physical"
    ],
    "ru": [
      "как NTP-сервер R2, но ответы от R1 приходят с IP-адреса на физическом"
    ]
  },
  {
    "time": [
      481.77,
      486.06
    ],
    "en": [
      "interface, R2 won’t sync to R1."
    ],
    "ru": [
      "интерфейс R2 не будет синхронизироваться с R1."
    ]
  },
  {
    "time": [
      486.06,
      496.099
    ],
    "en": [
      "Now I’ll fast forward the simulation again, and now hopefully R2 has synced to R1. Let’s check. Let’s check. END."
    ],
    "ru": [
      "Теперь я снова перемотаю симуляцию вперед, и теперь, надеюсь, R2 синхронизировался с R1. Давайте проверим. Давайте проверим. КОНЕЦ."
    ]
  },
  {
    "time": [
      496.099,
      498.37
    ],
    "en": [
      "Let’s check. END. SHOW NTP ASSOCATIONS."
    ],
    "ru": [
      "Давайте проверим. КОНЕЦ. ПОКАЗАТЬ АССОЦИАЦИИ NTP."
    ]
  },
  {
    "time": [
      498.37,
      501.28
    ],
    "en": [
      "Yep, it has synced to R1."
    ],
    "ru": [
      "Да, он синхронизирован с R1."
    ]
  },
  {
    "time": [
      501.28,
      505.49
    ],
    "en": [
      "And let’s check R2’s clock. SHOW CLOCK DETAIL."
    ],
    "ru": [
      "А давайте посмотрим на часы R2. ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ."
    ]
  },
  {
    "time": [
      505.49,
      510.12
    ],
    "en": [
      "SHOW CLOCK DETAIL. Okay, the time source is NTP."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ. Хорошо, источник времени - NTP."
    ]
  },
  {
    "time": [
      510.12,
      517.19
    ],
    "en": [
      "Since I’m on R2 I’ll do step 5 also, which is to configure NTP to update the hardware calendar."
    ],
    "ru": [
      "Поскольку я использую R2, я также сделаю шаг 5, который заключается в настройке NTP для обновления календаря оборудования."
    ]
  },
  {
    "time": [
      517.19,
      520.57
    ],
    "en": [
      "calendar. CONF T. NTP UPDATE-CALENDAR."
    ],
    "ru": [
      "календарь. CONF T. КАЛЕНДАРЬ ОБНОВЛЕНИЙ NTP."
    ]
  },
  {
    "time": [
      520.57,
      524.88
    ],
    "en": [
      "Okay now let me show you something strange about packet tracer."
    ],
    "ru": [
      "Хорошо, теперь позвольте мне показать вам кое-что странное о трассировщике пакетов."
    ]
  },
  {
    "time": [
      524.88,
      533.71
    ],
    "en": [
      "I just configured NTP UPDATE-CALENDAR, so let’s check the calendar. EXIT. EXIT. SHOW CALENDAR."
    ],
    "ru": [
      "Я только что настроил NTP UPDATE-CALENDAR, так что давайте проверим календарь. ВЫХОД. ВЫХОД. ПОКАЗАТЬ КАЛЕНДАРЬ."
    ]
  },
  {
    "time": [
      533.71,
      535.48
    ],
    "en": [
      "EXIT. SHOW CALENDAR. But it doesn’t work."
    ],
    "ru": [
      "ВЫХОД. ПОКАЗАТЬ КАЛЕНДАРЬ. Но это не работает."
    ]
  },
  {
    "time": [
      535.48,
      537.8
    ],
    "en": [
      "SHOW, and I’ll use the question mark."
    ],
    "ru": [
      "ПОКАЗАТЬ, и я использую вопросительный знак."
    ]
  },
  {
    "time": [
      537.8,
      542.4
    ],
    "en": [
      "As you can see, there is no SHOW CALENDAR command in Packet Tracer."
    ],
    "ru": [
      "Как видите, в Packet Tracer нет команды ПОКАЗАТЬ КАЛЕНДАРЬ."
    ]
  },
  {
    "time": [
      542.4,
      548.75
    ],
    "en": [
      "So, there is the NTP UPDATE-CALENDAR command, but for some reason you can’t even view the calendar."
    ],
    "ru": [
      "Итак, есть команда NTP UPDATE-CALENDAR, но по какой-то причине вы даже не можете просмотреть календарь."
    ]
  },
  {
    "time": [
      548.75,
      555.16
    ],
    "en": [
      "the calendar. Okay, I’ll do the same configurations on R3. ENABLE."
    ],
    "ru": [
      "календарь. Хорошо, сделаю те же настройки на R3. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      555.16,
      560.68
    ],
    "en": [
      "ENABLE. CONF T. NTP AUTHENTICATE."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. CONF T. NTP АУТЕНТИЧНО."
    ]
  },
  {
    "time": [
      560.68,
      573.17
    ],
    "en": [
      "NTP AUTHENTICATION-KEY 1 MD5 jeremysitlab. NTP TRUSTED-KEY 1."
    ],
    "ru": [
      "КЛЮЧ АУТЕНТИФИКАЦИИ NTP 1 MD5 jeremysitlab. ДОВЕРЕННЫЙ КЛЮЧ NTP 1."
    ]
  },
  {
    "time": [
      573.17,
      576.11
    ],
    "en": [
      "NTP TRUSTED-KEY 1. And then I’ll specify R1."
    ],
    "ru": [
      "ДОВЕРЕННЫЙ КЛЮЧ NTP 1. Затем я укажу R1."
    ]
  },
  {
    "time": [
      576.11,
      581.03
    ],
    "en": [
      "NTP SERVER 192.168.13.1 KEY 1."
    ],
    "ru": [
      "NTP-СЕРВЕР 192.168.13.1 КЛЮЧ 1."
    ]
  },
  {
    "time": [
      581.03,
      587.48
    ],
    "en": [
      "It’s pointless in Packet Tracer, but I’ll update the calendar. NTP UPDATE-CALENDAR."
    ],
    "ru": [
      "В Packet Tracer это бессмысленно, но я обновлю календарь. КАЛЕНДАРЬ ОБНОВЛЕНИЙ NTP."
    ]
  },
  {
    "time": [
      587.48,
      593.44
    ],
    "en": [
      "NTP UPDATE-CALENDAR. That’s it, now I’ll fast forward the simulation."
    ],
    "ru": [
      "КАЛЕНДАРЬ ОБНОВЛЕНИЙ NTP. Вот и все, теперь я перенесу симуляцию вперед."
    ]
  },
  {
    "time": [
      593.44,
      599.84
    ],
    "en": [
      "And let’s see if R3 synced to R1. ENABLE."
    ],
    "ru": [
      "И посмотрим, синхронизирован ли R3 с R1. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      599.84,
      604.39
    ],
    "en": [
      "ENABLE. SHOW NTP ASSOCIATIONS. Okay, looks good."
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ АССОЦИАЦИИ NTP. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      604.39,
      608.05
    ],
    "en": [
      "Okay, looks good. And how about the clock? SHOW CLOCK DETAIL."
    ],
    "ru": [
      "Хорошо, выглядит хорошо. А как насчет часов? ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ."
    ]
  },
  {
    "time": [
      608.05,
      614.01
    ],
    "en": [
      "SHOW CLOCK DETAIL. Okay, the time source is NTP, looks good."
    ],
    "ru": [
      "ПОКАЗАТЬ ДЕТАЛЬ ЧАСОВ. Хорошо, источник времени - NTP, выглядит хорошо."
    ]
  },
  {
    "time": [
      614.01,
      622.92
    ],
    "en": [
      "Once again, this is pointless in Packet Tracer but I’ll configure R1 to use NTP to update its calendar. its calendar. ENABLE."
    ],
    "ru": [
      "Опять же, в Packet Tracer это бессмысленно, но я настрою R1 на использование NTP для обновления своего календаря. свой календарь. ВКЛЮЧИТЬ."
    ]
  },
  {
    "time": [
      622.92,
      626.21
    ],
    "en": [
      "its calendar. ENABLE. CONF T. NTP UPDATE-CALENDAR."
    ],
    "ru": [
      "свой календарь. ВКЛЮЧИТЬ. CONF T. КАЛЕНДАРЬ ОБНОВЛЕНИЙ NTP."
    ]
  },
  {
    "time": [
      626.21,
      629.5
    ],
    "en": [
      "Okay, we have completed all of the steps."
    ],
    "ru": [
      "Хорошо, мы выполнили все шаги."
    ]
  },
  {
    "time": [
      629.5,
      635.42
    ],
    "en": [
      "Originally I had another step to configure a symmetric active peering between R2 and"
    ],
    "ru": [
      "Изначально у меня был еще один шаг, чтобы настроить симметричный активный пиринг между R2 и"
    ]
  },
  {
    "time": [
      635.42,
      639.53
    ],
    "en": [
      "R3, but that command is also unavailable in Packet Tracer."
    ],
    "ru": [
      "R3, но эта команда также недоступна в Packet Tracer."
    ]
  },
  {
    "time": [
      639.53,
      643.92
    ],
    "en": [
      "But in this video we practiced many of the NTP commands we looked at in the lecture video."
    ],
    "ru": [
      "Но в этом видео мы практиковали многие команды NTP, которые мы рассматривали в видео лекции."
    ]
  },
  {
    "time": [
      643.92,
      646.42
    ],
    "en": [
      "That’s all for this lab."
    ],
    "ru": [
      "Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      646.42,
      653.03
    ],
    "en": [
      "Next let’s take a look at a bonus lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на бонусную лабораторию в NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      653.03,
      655.88
    ],
    "en": [
      "Okay here's today's Boson NetSim lab preview."
    ],
    "ru": [
      "Хорошо, вот сегодняшняя предварительная версия лаборатории Boson NetSim."
    ]
  },
  {
    "time": [
      655.88,
      659.33
    ],
    "en": [
      "The lab I have selected it 'configuring NTP 1'."
    ],
    "ru": [
      "Лаборатория, которую я выбрал, это «настройка NTP 1»."
    ]
  },
  {
    "time": [
      659.33,
      664.88
    ],
    "en": [
      "So, NetSim for the CCNA actually has 5 labs for NTP, as you can see here."
    ],
    "ru": [
      "Итак, NetSim для CCNA на самом деле имеет 5 лабораторий для NTP, как вы можете видеть здесь."
    ]
  },
  {
    "time": [
      664.88,
      666.24
    ],
    "en": [
      "So I picked the first one."
    ],
    "ru": [
      "Итак, я выбрал первый."
    ]
  },
  {
    "time": [
      666.24,
      669.94
    ],
    "en": [
      "It seems to be a pretty simple lab about NTP."
    ],
    "ru": [
      "Кажется, это довольно простая лабораторная работа о NTP."
    ]
  },
  {
    "time": [
      669.94,
      674.01
    ],
    "en": [
      "Here is the topology, three routers."
    ],
    "ru": [
      "Вот топология, три роутера."
    ]
  },
  {
    "time": [
      674.01,
      676.3
    ],
    "en": [
      "And these are the commands you need to know."
    ],
    "ru": [
      "И это команды, которые вам нужно знать."
    ]
  },
  {
    "time": [
      676.3,
      678.73
    ],
    "en": [
      "And these are all commands you already know."
    ],
    "ru": [
      "И это все команды, которые вы уже знаете."
    ]
  },
  {
    "time": [
      678.73,
      683.363
    ],
    "en": [
      "CLOCK SET, to set the time. NTP MASTER."
    ],
    "ru": [
      "УСТАНОВКА ЧАСОВ, чтобы установить время. МАСТЕР НТП."
    ]
  },
  {
    "time": [
      683.363,
      684.955
    ],
    "en": [
      "NTP MASTER. NTP SERVER."
    ],
    "ru": [
      "МАСТЕР НТП. NTP-СЕРВЕР."
    ]
  },
  {
    "time": [
      684.955,
      689.15
    ],
    "en": [
      "And some SHOW NTP commands."
    ],
    "ru": [
      "И несколько команд SHOW NTP."
    ]
  },
  {
    "time": [
      689.15,
      691.29
    ],
    "en": [
      "Okay here are the tasks."
    ],
    "ru": [
      "Хорошо, вот задачи."
    ]
  },
  {
    "time": [
      691.29,
      694.0
    ],
    "en": [
      "Task 1 says 'perform initial configurations.'"
    ],
    "ru": [
      "Задача 1 гласит: «Выполните начальную настройку»."
    ]
  },
  {
    "time": [
      694.0,
      699.07
    ],
    "en": [
      "So in this task you just configure the IP addresses on the interfaces and enable them."
    ],
    "ru": [
      "Итак, в этой задаче вы просто настраиваете IP-адреса на интерфейсах и включаете их."
    ]
  },
  {
    "time": [
      699.07,
      704.58
    ],
    "en": [
      "So I actually completed this task, here you can see the CLI of Router1."
    ],
    "ru": [
      "Итак, я действительно выполнил эту задачу, здесь вы можете увидеть интерфейс командной строки Router1."
    ]
  },
  {
    "time": [
      704.58,
      710.6
    ],
    "en": [
      "So I finished this task and we can go straight to task 2, 'configure NTP'."
    ],
    "ru": [
      "Итак, я закончил эту задачу, и мы можем сразу перейти к задаче 2, «настроить NTP»."
    ]
  },
  {
    "time": [
      710.6,
      712.95
    ],
    "en": [
      "So let's do that."
    ],
    "ru": [
      "Так что давай сделаем это."
    ]
  },
  {
    "time": [
      712.95,
      717.7
    ],
    "en": [
      "Step 1 says 'Is Router1, Router2, or Router3 currently running NTP?'"
    ],
    "ru": [
      "Шаг 1 говорит: «На маршрутизаторе1, маршрутизаторе2 или маршрутизаторе3 в настоящее время работает NTP?»"
    ]
  },
  {
    "time": [
      717.7,
      723.006
    ],
    "en": [
      "Let me check with SHOW NTP STATUS."
    ],
    "ru": [
      "Позвольте мне проверить с ПОКАЗАТЬ СТАТУС NTP."
    ]
  },
  {
    "time": [
      723.006,
      732.737
    ],
    "en": [
      "No, NTP is not enabled on Router1. Or Router2."
    ],
    "ru": [
      "Нет, NTP не включен на Router1. Или Router2."
    ]
  },
  {
    "time": [
      732.737,
      735.495
    ],
    "en": [
      "Or Router2. Or Router3."
    ],
    "ru": [
      "Или Router2. Или Router3."
    ]
  },
  {
    "time": [
      735.495,
      745.15
    ],
    "en": [
      "Okay, configure the date and time on Router1 to be July 25th 2013, that's my birthday, July 25th, 9AM."
    ],
    "ru": [
      "Хорошо, настройте дату и время на Router1 на 25 июля 2013 года, это мой день рождения, 25 июля, 9 утра."
    ]
  },
  {
    "time": [
      745.15,
      750.65
    ],
    "en": [
      "July 25th, 9AM. Alternatively you may use your local date and time."
    ],
    "ru": [
      "25 июля, 9 утра. В качестве альтернативы вы можете использовать местное время и дату."
    ]
  },
  {
    "time": [
      750.65,
      754.6
    ],
    "en": [
      "Okay so I'll do that on Router1."
    ],
    "ru": [
      "Хорошо, я сделаю это на Router1."
    ]
  },
  {
    "time": [
      754.6,
      765.9110000000001
    ],
    "en": [
      "CLOCK SET 9:00:00 25 JUL 2013."
    ],
    "ru": [
      "УСТАНОВКА ЧАСОВ 9:00:00 25 ИЮЛЯ 2013."
    ]
  },
  {
    "time": [
      765.9110000000001,
      769.6
    ],
    "en": [
      "Okay, let me see. SHOW CLOCK."
    ],
    "ru": [
      "Хорошо, дай мне посмотреть. ПОКАЗАТЬ ЧАСЫ."
    ]
  },
  {
    "time": [
      769.6,
      773.64
    ],
    "en": [
      "SHOW CLOCK. Alright, looks good."
    ],
    "ru": [
      "ПОКАЗАТЬ ЧАСЫ. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      773.64,
      777.57
    ],
    "en": [
      "Configure Router1 to be an NTP master using a stratum of 3."
    ],
    "ru": [
      "Настройте Router1 в качестве мастера NTP, используя слой 3."
    ]
  },
  {
    "time": [
      777.57,
      783.8
    ],
    "en": [
      "Okay, CONF T. NTP MASTER, and here we specify the stratum number."
    ],
    "ru": [
      "Хорошо, CONF T. NTP MASTER, а здесь мы указываем номер страты."
    ]
  },
  {
    "time": [
      783.8,
      789.27
    ],
    "en": [
      "Once again, the default if you enter the command as is, the default is 8."
    ],
    "ru": [
      "Еще раз, по умолчанию, если вы вводите команду как есть, по умолчанию - 8."
    ]
  },
  {
    "time": [
      789.27,
      795.3
    ],
    "en": [
      "So we want to set it to 3, so NTP MASTER 3."
    ],
    "ru": [
      "Итак, мы хотим установить его на 3, поэтому NTP MASTER 3."
    ]
  },
  {
    "time": [
      795.3,
      798.83
    ],
    "en": [
      "Configure Router2 to be an NTP client."
    ],
    "ru": [
      "Настройте Router2 в качестве клиента NTP."
    ]
  },
  {
    "time": [
      798.83,
      810.0
    ],
    "en": [
      "Okay so, we'll use the IP address of Router1's Serial0/0/0 interface which is here, alright."
    ],
    "ru": [
      "Хорошо, мы будем использовать IP-адрес интерфейса Serial0 / 0/0 маршрутизатора Router1, который находится здесь, хорошо."
    ]
  },
  {
    "time": [
      810.0,
      816.528
    ],
    "en": [
      "CONF T. NTP SERVER 10.0.12.1."
    ],
    "ru": [
      "CONF T. NTP-СЕРВЕР 10.0.12.1."
    ]
  },
  {
    "time": [
      816.528,
      817.96
    ],
    "en": [
      "Okay, and I'll leave it like that."
    ],
    "ru": [
      "Хорошо, и я оставлю все как есть."
    ]
  },
  {
    "time": [
      817.96,
      822.08
    ],
    "en": [
      "I think in task 3 we'll actually verify that this is working."
    ],
    "ru": [
      "Я думаю, что в задаче 3 мы действительно проверим, что это работает."
    ]
  },
  {
    "time": [
      822.08,
      825.55
    ],
    "en": [
      "So I'll go straight to step 5."
    ],
    "ru": [
      "Итак, я сразу перейду к шагу 5."
    ]
  },
  {
    "time": [
      825.55,
      827.72
    ],
    "en": [
      "Configure Router3 to be an NTP client."
    ],
    "ru": [
      "Настройте Router3 в качестве клиента NTP."
    ]
  },
  {
    "time": [
      827.72,
      833.55
    ],
    "en": [
      "You should use the address of Router2's Serial0/0/1 interface, okay."
    ],
    "ru": [
      "Вы должны использовать адрес интерфейса Serial0 / 0/1 Router2, хорошо."
    ]
  },
  {
    "time": [
      833.55,
      838.43
    ],
    "en": [
      "So that is this one here."
    ],
    "ru": [
      "Итак, вот этот."
    ]
  },
  {
    "time": [
      838.43,
      844.63
    ],
    "en": [
      "CONF T. NTP SERVER 10.0.23.2."
    ],
    "ru": [
      "CONF T. NTP-СЕРВЕР 10.0.23.2."
    ]
  },
  {
    "time": [
      844.63,
      847.39
    ],
    "en": [
      "Okay, and that's it for task 2."
    ],
    "ru": [
      "Хорошо, и это все для задачи 2."
    ]
  },
  {
    "time": [
      847.39,
      851.58
    ],
    "en": [
      "Okay finally task 3, verify NTP."
    ],
    "ru": [
      "Хорошо, наконец, задача 3, проверка NTP."
    ]
  },
  {
    "time": [
      851.58,
      855.13
    ],
    "en": [
      "On Router1, observe the status of NTP."
    ],
    "ru": [
      "На Router1 наблюдайте за статусом NTP."
    ]
  },
  {
    "time": [
      855.13,
      858.42
    ],
    "en": [
      "What are the stratum and reference peer address?"
    ],
    "ru": [
      "Что такое адрес страты и ссылочного узла?"
    ]
  },
  {
    "time": [
      858.42,
      864.95
    ],
    "en": [
      "Okay, SHOW NTP STATUS."
    ],
    "ru": [
      "Хорошо, ПОКАЗАТЬ СТАТУС NTP."
    ]
  },
  {
    "time": [
      864.95,
      868.57
    ],
    "en": [
      "Stratum is 3, because we configured NTP MASTER 3."
    ],
    "ru": [
      "Stratum равен 3, потому что мы настроили NTP MASTER 3."
    ]
  },
  {
    "time": [
      868.57,
      875.819
    ],
    "en": [
      "And the reference clock is a loopback address on Router1."
    ],
    "ru": [
      "И эталонные часы - это адрес обратной связи на маршрутизаторе Router1."
    ]
  },
  {
    "time": [
      875.819,
      883.22
    ],
    "en": [
      "Okay, let's check on Router2. SHOW NTP STATUS."
    ],
    "ru": [
      "Хорошо, давайте проверим Router2. ПОКАЗАТЬ СТАТУС NTP."
    ]
  },
  {
    "time": [
      883.22,
      888.55
    ],
    "en": [
      "SHOW NTP STATUS. Okay the clock is synchronized, so that means it has synchronized to Router1 and the stratum"
    ],
    "ru": [
      "ПОКАЗАТЬ СТАТУС NTP. Хорошо, часы синхронизированы, это означает, что они синхронизированы с Router1 и стратой."
    ]
  },
  {
    "time": [
      888.55,
      892.75
    ],
    "en": [
      "is 4 as expected, 1 higher than Router1."
    ],
    "ru": [
      "равно 4, как и ожидалось, на 1 больше, чем Router1."
    ]
  },
  {
    "time": [
      892.75,
      897.32
    ],
    "en": [
      "And also we can see the reference is Router1's address."
    ],
    "ru": [
      "Также мы видим, что ссылка - это адрес Router1."
    ]
  },
  {
    "time": [
      897.32,
      903.82
    ],
    "en": [
      "Okay step 3, verify that Router1 is the NTP master."
    ],
    "ru": [
      "Хорошо, шаг 3, убедитесь, что Router1 является мастером NTP."
    ]
  },
  {
    "time": [
      903.82,
      908.16
    ],
    "en": [
      "Okay well I can see that here, because that's Router1's address."
    ],
    "ru": [
      "Хорошо, я вижу это здесь, потому что это адрес Router1."
    ]
  },
  {
    "time": [
      908.16,
      913.02
    ],
    "en": [
      "But I'll also check the associations table."
    ],
    "ru": [
      "Но я также проверю таблицу ассоциаций."
    ]
  },
  {
    "time": [
      913.02,
      916.98
    ],
    "en": [
      "Okay, so there it is."
    ],
    "ru": [
      "Хорошо, вот оно."
    ]
  },
  {
    "time": [
      916.98,
      919.26
    ],
    "en": [
      "The address of Router1."
    ],
    "ru": [
      "Адрес Router1."
    ]
  },
  {
    "time": [
      919.26,
      922.56
    ],
    "en": [
      "It is the master here."
    ],
    "ru": [
      "Здесь хозяин."
    ]
  },
  {
    "time": [
      922.56,
      927.14
    ],
    "en": [
      "Notice that the output is a little different than in Packet Tracer or in the lecture video."
    ],
    "ru": [
      "Обратите внимание, что вывод немного отличается от Packet Tracer или видео лекции."
    ]
  },
  {
    "time": [
      927.14,
      932.49
    ],
    "en": [
      "This must be a different version of Cisco IOS."
    ],
    "ru": [
      "Это должна быть другая версия Cisco IOS."
    ]
  },
  {
    "time": [
      932.49,
      935.63
    ],
    "en": [
      "Okay so that was step 3."
    ],
    "ru": [
      "Итак, это был шаг 3."
    ]
  },
  {
    "time": [
      935.63,
      941.07
    ],
    "en": [
      "Step 4, on Router2, observe all NTP associations."
    ],
    "ru": [
      "Шаг 4, на Router2, проследите за всеми ассоциациями NTP."
    ]
  },
  {
    "time": [
      941.07,
      942.65
    ],
    "en": [
      "Okay well I just did that."
    ],
    "ru": [
      "Хорошо, я только что сделал это."
    ]
  },
  {
    "time": [
      942.65,
      947.02
    ],
    "en": [
      "Or maybe step 3 was supposed to be on Router1, whatever."
    ],
    "ru": [
      "Или, может быть, шаг 3 должен был быть на Router1, что угодно."
    ]
  },
  {
    "time": [
      947.02,
      951.96
    ],
    "en": [
      "I'll go on to step 5 and we'll check out Router3."
    ],
    "ru": [
      "Я перейду к шагу 5, и мы проверим Router3."
    ]
  },
  {
    "time": [
      951.96,
      959.35
    ],
    "en": [
      "Okay, looks like it has synced to Router2 here."
    ],
    "ru": [
      "Хорошо, похоже, здесь он синхронизировался с Router2."
    ]
  },
  {
    "time": [
      959.35,
      961.88
    ],
    "en": [
      "What are the reference peer address and stratum?"
    ],
    "ru": [
      "Каковы ссылочный адрес однорангового узла и слой?"
    ]
  },
  {
    "time": [
      961.88,
      968.53
    ],
    "en": [
      "The stratum of its peer is 4, so Router3 must be stratum 5 now."
    ],
    "ru": [
      "Уровень его однорангового узла равен 4, поэтому маршрутизатор Router3 теперь должен быть слоем 5."
    ]
  },
  {
    "time": [
      968.53,
      973.13
    ],
    "en": [
      "Yes it is, stratum 5."
    ],
    "ru": [
      "Да, слой 5."
    ]
  },
  {
    "time": [
      973.13,
      978.36
    ],
    "en": [
      "Okay in steps 3, 4, and 5 in this task you observed each router's NTP associations."
    ],
    "ru": [
      "Хорошо, на шагах 3, 4 и 5 в этой задаче вы наблюдали ассоциации NTP каждого маршрутизатора."
    ]
  },
  {
    "time": [
      978.36,
      981.45
    ],
    "en": [
      "Why were the reference peer addresses different on each router?"
    ],
    "ru": [
      "Почему ссылочные адреса одноранговых узлов были разными на каждом маршрутизаторе?"
    ]
  },
  {
    "time": [
      981.45,
      986.26
    ],
    "en": [
      "Oh that is because they are syncing to different clocks."
    ],
    "ru": [
      "О, это потому, что они синхронизируются с разными часами."
    ]
  },
  {
    "time": [
      986.26,
      990.44
    ],
    "en": [
      "So, Router1 is syncing to its internal clock."
    ],
    "ru": [
      "Итак, Router1 синхронизируется со своими внутренними часами."
    ]
  },
  {
    "time": [
      990.44,
      995.75
    ],
    "en": [
      "So the reference clock is a loopback address."
    ],
    "ru": [
      "Таким образом, эталонные часы - это адрес обратной связи."
    ]
  },
  {
    "time": [
      995.75,
      1002.08
    ],
    "en": [
      "Router2 is syncing to Router1, so the address is Router1's address."
    ],
    "ru": [
      "Router2 синхронизируется с Router1, поэтому адресом является адрес Router1."
    ]
  },
  {
    "time": [
      1002.08,
      1011.55
    ],
    "en": [
      "And Router3 is syncing to Router2 so the address is Router2's address."
    ],
    "ru": [
      "А Router3 синхронизируется с Router2, поэтому адрес является адресом Router2."
    ]
  },
  {
    "time": [
      1011.55,
      1017.44
    ],
    "en": [
      "On Router2 and Router3 display the clock and verify that the source of the time is NTP."
    ],
    "ru": [
      "На маршрутизаторах Router2 и Router3 отобразите часы и убедитесь, что источником времени является NTP."
    ]
  },
  {
    "time": [
      1017.44,
      1023.18
    ],
    "en": [
      "Okay, SHOW CLOCK DETAIL. Looks good."
    ],
    "ru": [
      "Хорошо, ПОКАЗАТЬ ДЕТАЛИ ЧАСОВ. Выглядит неплохо."
    ]
  },
  {
    "time": [
      1023.18,
      1024.64
    ],
    "en": [
      "Looks good. Source is NTP."
    ],
    "ru": [
      "Выглядит неплохо. Источник - NTP."
    ]
  },
  {
    "time": [
      1024.64,
      1027.91
    ],
    "en": [
      "And how about on Router3?"
    ],
    "ru": [
      "А как насчет Router3?"
    ]
  },
  {
    "time": [
      1027.91,
      1032.65
    ],
    "en": [
      "Okay, time source is NTP."
    ],
    "ru": [
      "Хорошо, источник времени - NTP."
    ]
  },
  {
    "time": [
      1032.65,
      1034.0
    ],
    "en": [
      "So that's all for this lab."
    ],
    "ru": [
      "Вот и все для этой лаборатории."
    ]
  },
  {
    "time": [
      1034.0,
      1042.18
    ],
    "en": [
      "Now I will use the 'grade lab' function by clicking this icon here and let's see if I did everything correctly."
    ],
    "ru": [
      "Теперь я воспользуюсь функцией «Лаборатория оценок», щелкнув этот значок здесь, и посмотрим, все ли я сделал правильно."
    ]
  },
  {
    "time": [
      1042.18,
      1043.18
    ],
    "en": [
      "did everything correctly. Okay looks good."
    ],
    "ru": [
      "все сделал правильно. Хорошо, выглядит хорошо."
    ]
  },
  {
    "time": [
      1043.18,
      1046.5
    ],
    "en": [
      "You completed the lab successfully."
    ],
    "ru": [
      "Вы успешно завершили лабораторную работу."
    ]
  },
  {
    "time": [
      1046.5,
      1051.55
    ],
    "en": [
      "Notice that nothing is highlighted in the configurations of each device."
    ],
    "ru": [
      "Обратите внимание, что в конфигурациях каждого устройства ничего не выделено."
    ]
  },
  {
    "time": [
      1051.55,
      1058.71
    ],
    "en": [
      "If there are any missing commands or extra commands they will be highlighted in red or blue."
    ],
    "ru": [
      "Если есть какие-либо недостающие команды или дополнительные команды, они будут выделены красным или синим цветом."
    ]
  },
  {
    "time": [
      1058.71,
      1062.99
    ],
    "en": [
      "blue. Okay so that's a quick look at Boson NetSim for the CCNA."
    ],
    "ru": [
      "синий. Хорошо, это быстрый взгляд на Boson NetSim для CCNA."
    ]
  },
  {
    "time": [
      1062.99,
      1067.32
    ],
    "en": [
      "As I've said before, there are over 100 detailed, guided labs like this."
    ],
    "ru": [
      "Как я уже говорил ранее, существует более 100 подробных и управляемых лабораторий, подобных этой."
    ]
  },
  {
    "time": [
      1067.32,
      1073.05
    ],
    "en": [
      "Some of them are simple, some are very complex, but they're all very useful to study for the CCNA."
    ],
    "ru": [
      "Некоторые из них простые, некоторые очень сложные, но все они очень полезны для изучения для CCNA."
    ]
  },
  {
    "time": [
      1073.05,
      1079.57
    ],
    "en": [
      "CCNA. So if you want to get Boson NetSim, please follow the link in the video description."
    ],
    "ru": [
      "CCNA. Так что если вы хотите получить Boson NetSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      1079.57,
      1084.31
    ],
    "en": [
      "Before finishing today’s video I want to thank my JCNP-level channel members."
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу поблагодарить участников моего канала уровня JCNP."
    ]
  },
  {
    "time": [
      1084.31,
      1087.86
    ],
    "en": [
      "To join, please click the ‘Join’ button under the video."
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под видео."
    ]
  },
  {
    "time": [
      1087.86,
      1094.47
    ],
    "en": [
      "Thank you to Biraj, Magrathea, Samil, Junhong, Njabulo, Benjamin, Tshepiso, Justin, Prakaash,"
    ],
    "ru": [
      "Спасибо Бираджу, Магратее, Самилу, Джунхонгу, Нджабуло, Бенджамину, Чеписо, Джастину, Пракаашу,"
    ]
  },
  {
    "time": [
      1094.47,
      1102.82
    ],
    "en": [
      "Nasir, Erlison, Apogee, Marko, Daming, Jhilmar, Ed, Value, John, Funnydart, Velvijaykum, Mark,"
    ],
    "ru": [
      "Насир, Эрлисон, Апогей, Марко, Даминг, Джилмар, Эд, Вэлью, Джон, Фаннидарт, Велвиджайкум, Марк,"
    ]
  },
  {
    "time": [
      1102.82,
      1107.63
    ],
    "en": [
      "Yousif, Boson Software, Devin, Lito, Yonatan, and Vance."
    ],
    "ru": [
      "Юсиф, Boson Software, Девин, Лито, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      1107.63,
      1113.38
    ],
    "en": [
      "Sorry if I pronounced your name incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1113.38,
      1120.17
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, December 31st 2020."
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 31 декабря 2020 года."
    ]
  },
  {
    "time": [
      1120.17,
      1126.7
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
      1120.17,
      1126.7
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
      1126.7,
      1128.28
    ],
    "en": [
      "videos. Thank you for watching."
    ],
    "ru": [
      "видео. Спасибо за просмотр."
    ]
  },
  {
    "time": [
      1128.28,
      1132.26
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
      1132.26,
      1135.52
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
      1135.52,
      1138.12
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
      1138.12,
      1145.68
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
      1145.68,
      1145.68
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]