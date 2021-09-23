let objs = [
  {
    "time": [
      0.78,
      3.33
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
      3.33,
      6.75
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
      6.75,
      10.53
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
      10.53,
      16.4
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
      16.4,
      18.68
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
      18.68,
      22.87
    ],
    "en": [
      "In this video we will cover NTP, Network Time Protocol."
    ],
    "ru": [
      "В этом видео мы рассмотрим NTP, протокол сетевого времени."
    ]
  },
  {
    "time": [
      22.87,
      27.52
    ],
    "en": [
      "All computers have an internal clock, including network devices."
    ],
    "ru": [
      "Все компьютеры имеют внутренние часы, включая сетевые устройства."
    ]
  },
  {
    "time": [
      27.52,
      31.34
    ],
    "en": [
      "For a variety of reasons that we will cover in this video, it’s important that these"
    ],
    "ru": [
      "По ряду причин, которые мы рассмотрим в этом видео, важно, чтобы эти"
    ]
  },
  {
    "time": [
      31.34,
      35.69
    ],
    "en": [
      "devices have an accurate clock that is synchronized with other devices."
    ],
    "ru": [
      "устройства имеют точные часы, которые синхронизируются с другими устройствами."
    ]
  },
  {
    "time": [
      35.69,
      38.449
    ],
    "en": [
      "That’s the purpose of NTP."
    ],
    "ru": [
      "В этом цель NTP."
    ]
  },
  {
    "time": [
      38.449,
      44.909
    ],
    "en": [
      "NTP is covered in exam topic 4.2, which says that you must be able to configure and verify"
    ],
    "ru": [
      "NTP рассматривается в теме экзамена 4.2, в которой говорится, что вы должны иметь возможность настраивать и проверять"
    ]
  },
  {
    "time": [
      44.909,
      49.589
    ],
    "en": [
      "NTP operating in client and server mode."
    ],
    "ru": [
      "NTP работает в режиме клиента и сервера."
    ]
  },
  {
    "time": [
      49.589,
      56.21
    ],
    "en": [
      "Over the next section of the course I will be covering all of these subtopics in section 4.0, IP Services."
    ],
    "ru": [
      "В следующем разделе курса я рассмотрю все эти подтемы в разделе 4.0, IP-услуги."
    ]
  },
  {
    "time": [
      56.21,
      58.37
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
      56.21,
      58.37
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
      58.37,
      62.719
    ],
    "en": [
      "Here’s what we’ll cover in this video."
    ],
    "ru": [
      "Вот что мы расскажем в этом видео."
    ]
  },
  {
    "time": [
      62.719,
      67.29
    ],
    "en": [
      "First I’ll briefly explain why time is important for network devices."
    ],
    "ru": [
      "Сначала я кратко объясню, почему время важно для сетевых устройств."
    ]
  },
  {
    "time": [
      67.29,
      73.049
    ],
    "en": [
      "Then I’ll show you how to manually configure the time on a device, without using NTP."
    ],
    "ru": [
      "Затем я покажу вам, как вручную настроить время на устройстве без использования NTP."
    ]
  },
  {
    "time": [
      73.049,
      77.9
    ],
    "en": [
      "Then we’ll cover the basics of NTP, Network Time Protocol."
    ],
    "ru": [
      "Затем мы рассмотрим основы NTP (Network Time Protocol)."
    ]
  },
  {
    "time": [
      77.9,
      82.369
    ],
    "en": [
      "Finally I’ll show you how to configure NTP on Cisco devices."
    ],
    "ru": [
      "Наконец, я покажу вам, как настроить NTP на устройствах Cisco."
    ]
  },
  {
    "time": [
      82.369,
      89.049
    ],
    "en": [
      "Make sure to watch until the end of the video for a bonus question from Boson Software’s ExSim for CCNA."
    ],
    "ru": [
      "Обязательно просмотрите видео до конца, чтобы узнать о бонусном вопросе от ExSim компании Boson Software для CCNA."
    ]
  },
  {
    "time": [
      89.049,
      96.439
    ],
    "en": [
      "ExSim for CCNA. ExSim practice exams simulate the style and difficulty of the real CCNA better than any other practice exams."
    ],
    "ru": [
      "ExSim для CCNA. Практические экзамены ExSim имитируют стиль и сложность настоящего CCNA лучше, чем любые другие практические экзамены."
    ]
  },
  {
    "time": [
      96.439,
      99.88
    ],
    "en": [
      "other practice exams. I used them myself, and I highly recommend them."
    ],
    "ru": [
      "другие практические экзамены. Я сам ими пользовался и очень рекомендую."
    ]
  },
  {
    "time": [
      99.88,
      104.56
    ],
    "en": [
      "If you want to get Boson ExSim, follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      104.56,
      111.34
    ],
    "en": [
      "First, let me briefly introduce time on network devices and why it’s important."
    ],
    "ru": [
      "Во-первых, позвольте мне вкратце рассказать о времени на сетевых устройствах и о том, почему это важно."
    ]
  },
  {
    "time": [
      111.34,
      113.59
    ],
    "en": [
      "All devices have an internal clock."
    ],
    "ru": [
      "Все устройства имеют внутренние часы."
    ]
  },
  {
    "time": [
      113.59,
      118.619
    ],
    "en": [
      "That includes routers, switches, your PC, smart phones, whatever."
    ],
    "ru": [
      "Это включает в себя маршрутизаторы, коммутаторы, ваш компьютер, смартфоны и т. Д."
    ]
  },
  {
    "time": [
      118.619,
      122.909
    ],
    "en": [
      "In Cisco IOS, you can view the time with the SHOW CLOCK command."
    ],
    "ru": [
      "В Cisco IOS вы можете просмотреть время с помощью команды SHOW CLOCK."
    ]
  },
  {
    "time": [
      122.909,
      125.109
    ],
    "en": [
      "Here’s some sample output."
    ],
    "ru": [
      "Вот пример вывода."
    ]
  },
  {
    "time": [
      125.109,
      132.01
    ],
    "en": [
      "So, I used this command at 12:16 AM, 0 seconds, 857 milliseconds."
    ],
    "ru": [
      "Итак, я использовал эту команду в 00:16, 0 секунд, 857 миллисекунд."
    ]
  },
  {
    "time": [
      132.01,
      135.28
    ],
    "en": [
      "On Saturday, December 26th 2020."
    ],
    "ru": [
      "В субботу 26 декабря 2020 года."
    ]
  },
  {
    "time": [
      135.28,
      138.6
    ],
    "en": [
      "The time zone is the default of UTC."
    ],
    "ru": [
      "Часовой пояс по умолчанию - UTC."
    ]
  },
  {
    "time": [
      138.6,
      144.25
    ],
    "en": [
      "Remember that, the default time zone is UTC, Coordinated Universal Time."
    ],
    "ru": [
      "Помните, что часовой пояс по умолчанию - UTC, всемирное координированное время."
    ]
  },
  {
    "time": [
      144.25,
      149.77
    ],
    "en": [
      "If you use the SHOW CLOCK DETAIL command you can see the time source of the device."
    ],
    "ru": [
      "Если вы используете команду SHOW CLOCK DETAIL, вы можете увидеть источник времени устройства."
    ]
  },
  {
    "time": [
      149.77,
      154.39
    ],
    "en": [
      "In this case it is using the hardware calendar as its time source."
    ],
    "ru": [
      "В этом случае он использует аппаратный календарь в качестве источника времени."
    ]
  },
  {
    "time": [
      154.39,
      158.519
    ],
    "en": [
      "The hardware calendar is the built-in internal clock of the device."
    ],
    "ru": [
      "Аппаратный календарь - это встроенные внутренние часы устройства."
    ]
  },
  {
    "time": [
      158.519,
      160.62
    ],
    "en": [
      "This is the time source by default."
    ],
    "ru": [
      "По умолчанию это источник времени."
    ]
  },
  {
    "time": [
      160.62,
      163.88
    ],
    "en": [
      "However, notice this asterisk here."
    ],
    "ru": [
      "Однако обратите внимание на эту звездочку."
    ]
  },
  {
    "time": [
      163.88,
      167.44
    ],
    "en": [
      "It means that this time is not considered authoritative."
    ],
    "ru": [
      "Значит, это время не считается авторитетным."
    ]
  },
  {
    "time": [
      167.44,
      171.26
    ],
    "en": [
      "The device isn’t confident that this time is accurate."
    ],
    "ru": [
      "Устройство не уверено, что это время точное."
    ]
  },
  {
    "time": [
      171.26,
      176.97
    ],
    "en": [
      "The internal hardware clock of a device will drift over time, so it is not the ideal time source."
    ],
    "ru": [
      "Внутренние аппаратные часы устройства со временем будут дрейфовать, поэтому это не идеальный источник времени."
    ]
  },
  {
    "time": [
      176.97,
      181.44
    ],
    "en": [
      "source. Now, why is it important to have an accurate time source?"
    ],
    "ru": [
      "источник. Итак, почему так важно иметь точный источник времени?"
    ]
  },
  {
    "time": [
      181.44,
      187.01
    ],
    "en": [
      "From a CCNA perspective, or really the perspective of most network engineers, the most important"
    ],
    "ru": [
      "С точки зрения CCNA или, на самом деле, с точки зрения большинства сетевых инженеров, наиболее важные"
    ]
  },
  {
    "time": [
      187.01,
      193.46
    ],
    "en": [
      "reason to have accurate time on a device is to have accurate logs for troubleshooting."
    ],
    "ru": [
      "Причина, по которой на устройстве отображается точное время, - наличие точных журналов для устранения неполадок."
    ]
  },
  {
    "time": [
      193.46,
      198.82
    ],
    "en": [
      "Devices keep logs of various events that occur, such as an interface being enabled or disabled,"
    ],
    "ru": [
      "Устройства ведут журналы различных происходящих событий, таких как включение или отключение интерфейса,"
    ]
  },
  {
    "time": [
      198.82,
      204.59
    ],
    "en": [
      "OSPF neighbor relationships being formed or broken, device restarts, etc."
    ],
    "ru": [
      "Формируются или разрываются отношения соседства OSPF, перезагружается устройство и т. Д."
    ]
  },
  {
    "time": [
      204.59,
      212.31900000000002
    ],
    "en": [
      "Syslog, the protocol used to keep device logs, is a CCNA exam topic and will be covered in a later video."
    ],
    "ru": [
      "Системный журнал, протокол, используемый для ведения журналов устройства, является темой экзамена CCNA и будет рассмотрен в следующем видео."
    ]
  },
  {
    "time": [
      212.31900000000002,
      216.7
    ],
    "en": [
      "a later video. But let’s take a quick look at some device logs now."
    ],
    "ru": [
      "более позднее видео. Но давайте теперь быстро взглянем на журналы устройств."
    ]
  },
  {
    "time": [
      216.7,
      220.189
    ],
    "en": [
      "The command to view a device’s logs is SHOW LOGGING."
    ],
    "ru": [
      "Команда для просмотра журналов устройства - SHOW LOGGING."
    ]
  },
  {
    "time": [
      220.189,
      226.079
    ],
    "en": [
      "Let’s say I’m a network admin and I got a phone call around 1AM saying that the network"
    ],
    "ru": [
      "Допустим, я администратор сети, и около часа ночи мне позвонили и сказали, что сеть"
    ]
  },
  {
    "time": [
      226.079,
      227.959
    ],
    "en": [
      "connection has been unstable."
    ],
    "ru": [
      "соединение было нестабильным."
    ]
  },
  {
    "time": [
      227.959,
      232.9
    ],
    "en": [
      "So, to investigate I log into one of the devices and check the logs."
    ],
    "ru": [
      "Итак, чтобы исследовать, я вхожу в одно из устройств и проверяю журналы."
    ]
  },
  {
    "time": [
      232.9,
      237.849
    ],
    "en": [
      "Here’s a portion of the output from one of the devices, R2."
    ],
    "ru": [
      "Вот часть вывода одного из устройств R2."
    ]
  },
  {
    "time": [
      237.849,
      242.209
    ],
    "en": [
      "Notice this series of messages about OSPF neighbor relationships."
    ],
    "ru": [
      "Обратите внимание на эту серию сообщений об отношениях между соседями OSPF."
    ]
  },
  {
    "time": [
      242.209,
      249.23
    ],
    "en": [
      "There are multiple messages about neighbor 10.0.0.6 moving to the FULL state and to the DOWN state."
    ],
    "ru": [
      "Есть несколько сообщений о том, что сосед 10.0.0.6 переходит в состояние FULL и в состояние DOWN."
    ]
  },
  {
    "time": [
      249.23,
      256.91
    ],
    "en": [
      "DOWN state. You can see the timestamps here, indicating when these events occurred, from about 1:06AM to 1:09AM."
    ],
    "ru": [
      "ВНИЗ состояние. Здесь вы можете увидеть временные метки, указывающие, когда произошли эти события, примерно с 1:06 до 1:09."
    ]
  },
  {
    "time": [
      256.91,
      261.56
    ],
    "en": [
      "to 1:09AM. Note that I will cover these log messages in depth in a later lesson about Syslog, so"
    ],
    "ru": [
      "до 1:09. Обратите внимание, что я подробно расскажу об этих сообщениях журнала в следующем уроке о Syslog, поэтому"
    ]
  },
  {
    "time": [
      261.56,
      263.29
    ],
    "en": [
      "don’t worry about the details for now."
    ],
    "ru": [
      "пока не беспокойтесь о деталях."
    ]
  },
  {
    "time": [
      263.29,
      265.84
    ],
    "en": [
      "I just want to show why time is important."
    ],
    "ru": [
      "Я просто хочу показать, почему время так важно."
    ]
  },
  {
    "time": [
      265.84,
      275.03
    ],
    "en": [
      "Anyway, I then checked the device’s clock and the current time is 1:17AM on December 27th 2020."
    ],
    "ru": [
      "В любом случае, затем я проверил часы устройства, и текущее время - 1:17 27 декабря 2020 года."
    ]
  },
  {
    "time": [
      275.03,
      281.97
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
      275.03,
      281.97
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
      281.97,
      285.25
    ],
    "en": [
      "Here’s some of the output from SHOW LOGGING."
    ],
    "ru": [
      "Вот некоторые результаты SHOW LOGGING."
    ]
  },
  {
    "time": [
      285.25,
      289.72
    ],
    "en": [
      "You can see those same messages about an OSPF neighbor moving between the FULL and DOWN"
    ],
    "ru": [
      "Вы можете увидеть те же самые сообщения о том, что сосед OSPF перемещается между FULL и DOWN."
    ]
  },
  {
    "time": [
      289.72,
      293.97
    ],
    "en": [
      "states, and also some messages about an interface going UP and DOWN."
    ],
    "ru": [
      "состояния, а также некоторые сообщения о том, что интерфейс движется ВВЕРХ и ВНИЗ."
    ]
  },
  {
    "time": [
      293.97,
      299.34000000000003
    ],
    "en": [
      "However, the timestamps show a totally different time than on R2."
    ],
    "ru": [
      "Однако метки времени показывают совершенно другое время, чем на R2."
    ]
  },
  {
    "time": [
      299.34000000000003,
      306.72
    ],
    "en": [
      "After checking the clock I realize that R3 thinks it’s 4:30PM on May 23rd 2008."
    ],
    "ru": [
      "Посмотрев на часы, я понимаю, что R3 думает, что 23 мая 2008 года 16:30."
    ]
  },
  {
    "time": [
      306.72,
      311.52
    ],
    "en": [
      "This is going to make it much more difficult to correlate the logs of these devices."
    ],
    "ru": [
      "Это значительно затруднит сопоставление журналов этих устройств."
    ]
  },
  {
    "time": [
      311.52,
      314.05
    ],
    "en": [
      "In this case, it’s a fairly simple issue."
    ],
    "ru": [
      "В данном случае это довольно простая проблема."
    ]
  },
  {
    "time": [
      314.05,
      319.81
    ],
    "en": [
      "We can see that an interface going down caused some problems, so we can investigate why that happened."
    ],
    "ru": [
      "Мы видим, что сбой интерфейса вызвал некоторые проблемы, поэтому мы можем выяснить, почему это произошло."
    ]
  },
  {
    "time": [
      319.81,
      323.84
    ],
    "en": [
      "happened. But when you have to troubleshoot more complex issues on devices with logs full of thousands"
    ],
    "ru": [
      "произошло. Но когда вам нужно устранить более сложные проблемы на устройствах с журналами, полными тысяч"
    ]
  },
  {
    "time": [
      323.84,
      330.47
    ],
    "en": [
      "of messages, it gets much more difficult and accurate time is very important."
    ],
    "ru": [
      "сообщений становится намного сложнее, и точное время очень важно."
    ]
  },
  {
    "time": [
      330.47,
      334.37
    ],
    "en": [
      "So let’s see how to manually configure the time on a device."
    ],
    "ru": [
      "Итак, давайте посмотрим, как вручную настроить время на устройстве."
    ]
  },
  {
    "time": [
      334.37,
      338.75
    ],
    "en": [
      "You can manually configure the time on the device, the clock in the software of the device,"
    ],
    "ru": [
      "Вы можете вручную настроить время на устройстве, часы в программном обеспечении устройства,"
    ]
  },
  {
    "time": [
      338.75,
      341.33
    ],
    "en": [
      "with the CLOCK SET command."
    ],
    "ru": [
      "с помощью команды УСТАНОВКА ЧАСОВ."
    ]
  },
  {
    "time": [
      341.33,
      342.9
    ],
    "en": [
      "Let me walk you through it."
    ],
    "ru": [
      "Позвольте мне провести вас через это."
    ]
  },
  {
    "time": [
      342.9,
      347.88
    ],
    "en": [
      "I entered CLOCK SET and used the question mark to see the options."
    ],
    "ru": [
      "Я вошел в НАБОР ЧАСОВ и использовал вопросительный знак, чтобы увидеть варианты."
    ]
  },
  {
    "time": [
      347.88,
      352.49
    ],
    "en": [
      "Using the format of hours, minutes, seconds, I entered the time."
    ],
    "ru": [
      "Используя формат часов, минут, секунд, я ввел время."
    ]
  },
  {
    "time": [
      352.49,
      356.31
    ],
    "en": [
      "The next option is either the day of the month or the month itself."
    ],
    "ru": [
      "Следующий вариант - либо день месяца, либо сам месяц."
    ]
  },
  {
    "time": [
      356.31,
      358.40999999999997
    ],
    "en": [
      "You can enter them in either order."
    ],
    "ru": [
      "Вы можете вводить их в любом порядке."
    ]
  },
  {
    "time": [
      358.40999999999997,
      361.639
    ],
    "en": [
      "I entered the day first, and then the month."
    ],
    "ru": [
      "Я ввел сначала день, а затем месяц."
    ]
  },
  {
    "time": [
      361.639,
      363.61
    ],
    "en": [
      "The next option is the year."
    ],
    "ru": [
      "Следующий вариант - год."
    ]
  },
  {
    "time": [
      363.61,
      367.51
    ],
    "en": [
      "I entered the year, 2020, and checked the options."
    ],
    "ru": [
      "Я вошел в 2020 год и проверил варианты."
    ]
  },
  {
    "time": [
      367.51,
      372.85
    ],
    "en": [
      "CR, carriage return, basically means press the enter key to enter the command."
    ],
    "ru": [
      "CR, возврат каретки, в основном означает нажатие клавиши ввода для ввода команды."
    ]
  },
  {
    "time": [
      372.85,
      375.02
    ],
    "en": [
      "There are no other options."
    ],
    "ru": [
      "Других вариантов нет."
    ]
  },
  {
    "time": [
      375.02,
      381.74
    ],
    "en": [
      "After entering the time I checked with SHOW CLOCK DETAIL, and the newly configured time is displayed."
    ],
    "ru": [
      "После ввода времени я проверил с помощью ПОКАЗАТЬ ДЕТАЛИ ЧАСОВ, и отобразится вновь настроенное время."
    ]
  },
  {
    "time": [
      381.74,
      386.5
    ],
    "en": [
      "is displayed. The time source also has changed to ‘user configuration’."
    ],
    "ru": [
      "отображается. Источник времени также был изменен на «конфигурация пользователя»."
    ]
  },
  {
    "time": [
      386.5,
      391.569
    ],
    "en": [
      "Notice that all of these commands are done from privileged-exec mode, not global config mode."
    ],
    "ru": [
      "Обратите внимание, что все эти команды выполняются в режиме привилегированного выполнения, а не в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      391.569,
      396.42
    ],
    "en": [
      "mode. These clock configurations aren’t part of the device’s running configuration, they are separate."
    ],
    "ru": [
      "режим. Эти конфигурации часов не являются частью рабочей конфигурации устройства, они являются отдельными."
    ]
  },
  {
    "time": [
      396.42,
      400.56
    ],
    "en": [
      "are separate. Here’s one more point a lot of people might not be aware of."
    ],
    "ru": [
      "отдельные. Вот еще один момент, о котором многие люди могут не знать."
    ]
  },
  {
    "time": [
      400.56,
      405.55
    ],
    "en": [
      "Although the hardware calendar (the built-in clock) is the default time-source, the hardware"
    ],
    "ru": [
      "Хотя аппаратный календарь (встроенные часы) является источником времени по умолчанию, аппаратный"
    ]
  },
  {
    "time": [
      405.55,
      410.11
    ],
    "en": [
      "clock and software clock are separate and can be configured separately."
    ],
    "ru": [
      "часы и часы программного обеспечения разделены и могут быть настроены отдельно."
    ]
  },
  {
    "time": [
      410.11,
      414.259
    ],
    "en": [
      "So let’s see how to configure the hardware clock."
    ],
    "ru": [
      "Итак, давайте посмотрим, как настроить аппаратные часы."
    ]
  },
  {
    "time": [
      414.259,
      418.49
    ],
    "en": [
      "You can manually configure the hardware clock with the CALENDAR SET command."
    ],
    "ru": [
      "Вы можете вручную настроить аппаратные часы с помощью команды CALENDAR SET."
    ]
  },
  {
    "time": [
      418.49,
      423.52
    ],
    "en": [
      "So, from now on I will use the term ‘clock’ to refer to the clock in the software of the"
    ],
    "ru": [
      "Итак, с этого момента я буду использовать термин «часы» для обозначения часов в программном обеспечении"
    ]
  },
  {
    "time": [
      423.52,
      427.259
    ],
    "en": [
      "device, and ‘calendar’ to refer to the hardware clock."
    ],
    "ru": [
      "устройство и «календарь» для обозначения аппаратных часов."
    ]
  },
  {
    "time": [
      427.259,
      433.72
    ],
    "en": [
      "So, the command syntax is the same as CLOCK SET, only the keyword CALENDAR is different."
    ],
    "ru": [
      "Итак, синтаксис команды такой же, как у CLOCK SET, отличается только ключевое слово CALENDAR."
    ]
  },
  {
    "time": [
      433.72,
      436.34
    ],
    "en": [
      "Set the time, and then either the day or the month."
    ],
    "ru": [
      "Установите время, а затем день или месяц."
    ]
  },
  {
    "time": [
      436.34,
      441.43
    ],
    "en": [
      "I set the day, and then the month, and the next option is the year."
    ],
    "ru": [
      "Я устанавливаю день, затем месяц, и следующий вариант - год."
    ]
  },
  {
    "time": [
      441.43,
      446.63
    ],
    "en": [
      "Then I set the year, and then used the command SHOW CALENDAR to view the time."
    ],
    "ru": [
      "Затем я установил год, а затем использовал команду ПОКАЗАТЬ КАЛЕНДАРЬ, чтобы посмотреть время."
    ]
  },
  {
    "time": [
      446.63,
      449.8
    ],
    "en": [
      "Typically you want to synchronize the clock and calendar."
    ],
    "ru": [
      "Обычно вы хотите синхронизировать часы и календарь."
    ]
  },
  {
    "time": [
      449.8,
      452.72
    ],
    "en": [
      "I can’t think of a good reason not to sync them."
    ],
    "ru": [
      "Я не могу придумать вескую причину, чтобы не синхронизировать их."
    ]
  },
  {
    "time": [
      452.72,
      457.99
    ],
    "en": [
      "Use the command CLOCK UPDATE-CALENDAR to sync the calendar to the clock’s time."
    ],
    "ru": [
      "Используйте команду CLOCK UPDATE-CALENDAR, чтобы синхронизировать календарь со временем на часах."
    ]
  },
  {
    "time": [
      457.99,
      460.849
    ],
    "en": [
      "The calendar will update its time to match the clock."
    ],
    "ru": [
      "Календарь обновит свое время в соответствии с часами."
    ]
  },
  {
    "time": [
      460.849,
      466.97
    ],
    "en": [
      "Or, use the command CLOCK READ-CALENDAR to sync the clock to the calendar’s time."
    ],
    "ru": [
      "Или используйте команду CLOCK READ-CALENDAR, чтобы синхронизировать часы со временем календаря."
    ]
  },
  {
    "time": [
      466.97,
      473.62
    ],
    "en": [
      "In this case the clock will update its time to match the calendar. Let me demonstrate."
    ],
    "ru": [
      "В этом случае часы обновят свое время в соответствии с календарем. Позвольте мне продемонстрировать."
    ]
  },
  {
    "time": [
      473.62,
      476.59000000000003
    ],
    "en": [
      "Let me demonstrate. First let me demonstrate CLOCK UPDATE-CALENDAR."
    ],
    "ru": [
      "Позвольте мне продемонстрировать. Сначала позвольте мне продемонстрировать ОБНОВЛЕНИЕ ЧАСОВ-КАЛЕНДАРЬ."
    ]
  },
  {
    "time": [
      476.59000000000003,
      483.25
    ],
    "en": [
      "I viewed R2’s clock, and the time was about 2:38 PM on December 27th 2020, and let’s"
    ],
    "ru": [
      "Я посмотрел на часы R2, и время было около 14:38 27 декабря 2020 года, и давайте"
    ]
  },
  {
    "time": [
      483.25,
      485.69
    ],
    "en": [
      "say that’s the correct time."
    ],
    "ru": [
      "скажи, что сейчас правильное время."
    ]
  },
  {
    "time": [
      485.69,
      487.59
    ],
    "en": [
      "However the calendar was about 12:00AM."
    ],
    "ru": [
      "Однако в календаре было около 12:00."
    ]
  },
  {
    "time": [
      487.59,
      491.72
    ],
    "en": [
      "So, I used the CLOCK UPDATE-CALENDAR command."
    ],
    "ru": [
      "Итак, я использовал команду CLOCK UPDATE-CALENDAR."
    ]
  },
  {
    "time": [
      491.72,
      496.61
    ],
    "en": [
      "And now you can see the calendar has been updated to match the time of the clock."
    ],
    "ru": [
      "И теперь вы можете видеть, что календарь обновлен, чтобы соответствовать времени на часах."
    ]
  },
  {
    "time": [
      496.61,
      503.259
    ],
    "en": [
      "Next let’s see the opposite situation, when the calendar’s time is correct but the clock’s time is incorrect."
    ],
    "ru": [
      "Теперь давайте посмотрим на противоположную ситуацию, когда время в календаре правильное, а время на часах неправильное."
    ]
  },
  {
    "time": [
      503.259,
      507.96
    ],
    "en": [
      "time is incorrect. The clock says it’s about 12AM on September 6th 1993."
    ],
    "ru": [
      "время неверное. Часы показывают около 12 часов утра 6 сентября 1993 года."
    ]
  },
  {
    "time": [
      507.96,
      513.34
    ],
    "en": [
      "The calendar has the correct time of 2:55PM on December 27th 2020."
    ],
    "ru": [
      "В календаре правильное время: 14:55 27 декабря 2020 года."
    ]
  },
  {
    "time": [
      513.34,
      517.44
    ],
    "en": [
      "So, I used the command CLOCK READ-CALENDAR."
    ],
    "ru": [
      "Итак, я использовал команду ЧТЕНИЕ ЧАСОВ-КАЛЕНДАРЬ."
    ]
  },
  {
    "time": [
      517.44,
      522.33
    ],
    "en": [
      "And the clock updated its time to match the calendar’s time."
    ],
    "ru": [
      "И часы обновили свое время, чтобы соответствовать времени календаря."
    ]
  },
  {
    "time": [
      522.33,
      525.01
    ],
    "en": [
      "Next let’s see how to configure the timezone."
    ],
    "ru": [
      "Теперь давайте посмотрим, как настроить часовой пояс."
    ]
  },
  {
    "time": [
      525.01,
      528.8
    ],
    "en": [
      "You can configure the time zone with the CLOCK TIMEZONE command."
    ],
    "ru": [
      "Вы можете настроить часовой пояс с помощью команды ЧАСЫ ВРЕМЯ."
    ]
  },
  {
    "time": [
      528.8,
      530.89
    ],
    "en": [
      "Let me walk you through it."
    ],
    "ru": [
      "Позвольте мне провести вас через это."
    ]
  },
  {
    "time": [
      530.89,
      536.22
    ],
    "en": [
      "First I used the DO SHOW CLOCK command to view the time, around 3:13PM in the default"
    ],
    "ru": [
      "Сначала я использовал команду DO SHOW CLOCK для просмотра времени, около 15:13 по умолчанию."
    ]
  },
  {
    "time": [
      536.22,
      538.72
    ],
    "en": [
      "time zone of UTC."
    ],
    "ru": [
      "часовой пояс UTC."
    ]
  },
  {
    "time": [
      538.72,
      544.8
    ],
    "en": [
      "Notice I used DO SHOW CLOCK from global config mode, not privileged exec mode like the other commands."
    ],
    "ru": [
      "Обратите внимание, что я использовал DO SHOW CLOCK из режима глобальной конфигурации, а не из привилегированного режима exec, как другие команды."
    ]
  },
  {
    "time": [
      544.8,
      548.84
    ],
    "en": [
      "commands. That’s because the timezone is configured from global config mode and becomes part of"
    ],
    "ru": [
      "команды. Это потому, что часовой пояс настраивается в режиме глобальной конфигурации и становится частью"
    ]
  },
  {
    "time": [
      548.84,
      550.77
    ],
    "en": [
      "the running config of the device."
    ],
    "ru": [
      "текущий конфиг устройства."
    ]
  },
  {
    "time": [
      550.77,
      554.65
    ],
    "en": [
      "So, here’s the CLOCK TIMEZONE command."
    ],
    "ru": [
      "Итак, вот команда CLOCK TIMEZONE."
    ]
  },
  {
    "time": [
      554.65,
      557.33
    ],
    "en": [
      "The first option is the name of the time zone."
    ],
    "ru": [
      "Первый вариант - это название часового пояса."
    ]
  },
  {
    "time": [
      557.33,
      562.07
    ],
    "en": [
      "This is just a word, the device doesn’t actually check if it’s the name of a real time zone."
    ],
    "ru": [
      "Это просто слово, устройство на самом деле не проверяет, соответствует ли это название реального часового пояса."
    ]
  },
  {
    "time": [
      562.07,
      570.34
    ],
    "en": [
      "time zone. So, I configured JST for Japan Standard Time, and the next option is the hours offset from UTC."
    ],
    "ru": [
      "часовой пояс. Итак, я настроил JST для японского стандартного времени, и следующая опция - это смещение часов от UTC."
    ]
  },
  {
    "time": [
      570.34,
      577.13
    ],
    "en": [
      "UTC. JST is 9 hours ahead of UTC, so I entered 9 and checked the options."
    ],
    "ru": [
      "УНИВЕРСАЛЬНОЕ ГЛОБАЛЬНОЕ ВРЕМЯ. JST на 9 часов опережает UTC, поэтому я ввел 9 и проверил варианты."
    ]
  },
  {
    "time": [
      577.13,
      585.13
    ],
    "en": [
      "For JST I don’t have to enter the minutes offset, so I entered the command as is, CLOCK TIMEZONE JST 9."
    ],
    "ru": [
      "Для JST мне не нужно вводить смещение минут, поэтому я ввел команду как есть, CLOCK TIMEZONE JST 9."
    ]
  },
  {
    "time": [
      585.13,
      587.39
    ],
    "en": [
      "TIMEZONE JST 9. Then I viewed the clock."
    ],
    "ru": [
      "TIMEZONE JST 9. Потом посмотрел на часы."
    ]
  },
  {
    "time": [
      587.39,
      594.53
    ],
    "en": [
      "Notice the time zone has changed from UTC to JST, but also the time itself has jumped 9 hours ahead."
    ],
    "ru": [
      "Обратите внимание, что часовой пояс изменился с UTC на JST, но также само время перескочило на 9 часов вперед."
    ]
  },
  {
    "time": [
      594.53,
      598.75
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
      594.53,
      598.75
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
      598.75,
      604.48
    ],
    "en": [
      "When changing the time zone to JST, 9 hours ahead, the clock automatically changed."
    ],
    "ru": [
      "При изменении часового пояса на JST, на 9 часов вперед, часы автоматически меняются."
    ]
  },
  {
    "time": [
      604.48,
      610.6
    ],
    "en": [
      "But currently the time actually is about 3:15 PM JST, so I adjusted the clock once more,"
    ],
    "ru": [
      "Но в настоящее время на самом деле время около 15:15 по японскому стандартному времени, поэтому я снова настроил часы,"
    ]
  },
  {
    "time": [
      610.6,
      614.52
    ],
    "en": [
      "and now it displays the correct time in the correct time zone."
    ],
    "ru": [
      "и теперь он отображает правильное время в правильном часовом поясе."
    ]
  },
  {
    "time": [
      614.52,
      620.26
    ],
    "en": [
      "The time zone is important because, as you’ll see soon, NTP only uses UTC, so you have to"
    ],
    "ru": [
      "Часовой пояс важен, потому что, как вы скоро увидите, NTP использует только UTC, поэтому вам нужно"
    ]
  },
  {
    "time": [
      620.26,
      623.57
    ],
    "en": [
      "adjust each device to the correct time zone."
    ],
    "ru": [
      "настройте каждое устройство на правильный часовой пояс."
    ]
  },
  {
    "time": [
      623.57,
      628.54
    ],
    "en": [
      "There’s one more aspect of manual time configuration to cover."
    ],
    "ru": [
      "Следует рассмотреть еще один аспект ручной настройки времени."
    ]
  },
  {
    "time": [
      628.54,
      633.69
    ],
    "en": [
      "That is daylight saving time, also known as summer time, depending on the country."
    ],
    "ru": [
      "Это летнее время, также известное как летнее время, в зависимости от страны."
    ]
  },
  {
    "time": [
      633.69,
      638.79
    ],
    "en": [
      "Not all countries do this, but in many countries we adjust our clocks forward once a year and"
    ],
    "ru": [
      "Не все страны делают это, но во многих странах мы переводим наши часы вперед один раз в год и"
    ]
  },
  {
    "time": [
      638.79,
      640.79
    ],
    "en": [
      "then back once a year."
    ],
    "ru": [
      "затем обратно один раз в год."
    ]
  },
  {
    "time": [
      640.79,
      643.88
    ],
    "en": [
      "You can configure Cisco devices to do that automatically."
    ],
    "ru": [
      "Вы можете настроить устройства Cisco для этого автоматически."
    ]
  },
  {
    "time": [
      643.88,
      649.17
    ],
    "en": [
      "Now, I live in Japan at the moment and Japan doesn’t do daylight saving time, so I’ll"
    ],
    "ru": [
      "Сейчас я живу в Японии, а в Японии нет летнего времени, поэтому я"
    ]
  },
  {
    "time": [
      649.17,
      652.36
    ],
    "en": [
      "use my home country of Canada as an example."
    ],
    "ru": [
      "возьмем мою родную страну Канаду в качестве примера."
    ]
  },
  {
    "time": [
      652.36,
      656.93
    ],
    "en": [
      "In most parts of Canada we set the clocks forward one hour on the second Sunday of March"
    ],
    "ru": [
      "На большей части территории Канады мы переводим часы на один час вперед во второе воскресенье марта."
    ]
  },
  {
    "time": [
      656.93,
      663.38
    ],
    "en": [
      "at 2AM, and then set the clocks back one hour on the first Sunday of November at 2AM."
    ],
    "ru": [
      "в 2 часа ночи, а затем переведите часы на один час в первое воскресенье ноября в 2 часа ночи."
    ]
  },
  {
    "time": [
      663.38,
      669.71
    ],
    "en": [
      "The command to configure this is CLOCK SUMMER-TIME, and this is also done from global config mode."
    ],
    "ru": [
      "Команда для настройки - это ЧАСЫ ЛЕТО-ВРЕМЯ, и это также делается в режиме глобальной конфигурации."
    ]
  },
  {
    "time": [
      669.71,
      672.76
    ],
    "en": [
      "The first option is the name of the time zone."
    ],
    "ru": [
      "Первый вариант - это название часового пояса."
    ]
  },
  {
    "time": [
      672.76,
      679.21
    ],
    "en": [
      "My time zone back in Canada is EST, but during daylight saving time the name changes to EDT,"
    ],
    "ru": [
      "Мой часовой пояс в Канаде - EST, но в летнее время имя меняется на EDT,"
    ]
  },
  {
    "time": [
      679.21,
      681.5
    ],
    "en": [
      "so that’s what I set."
    ],
    "ru": [
      "так вот что я установил."
    ]
  },
  {
    "time": [
      681.5,
      686.59
    ],
    "en": [
      "Then we can set a specific date to change to daylight saving time with the keyword DATE,"
    ],
    "ru": [
      "Затем мы можем установить конкретную дату для перехода на летнее время с помощью ключевого слова DATE,"
    ]
  },
  {
    "time": [
      686.59,
      690.09
    ],
    "en": [
      "but the more useful option is the second one, RECURRING."
    ],
    "ru": [
      "но более полезный вариант - второй, ПОВТОРЯЮЩИЙСЯ."
    ]
  },
  {
    "time": [
      690.09,
      694.92
    ],
    "en": [
      "This makes summer time start and end on the specified days every year."
    ],
    "ru": [
      "Таким образом, летнее время начинается и заканчивается в указанные дни каждый год."
    ]
  },
  {
    "time": [
      694.92,
      699.32
    ],
    "en": [
      "After recurring, we specify which week in the month it will start."
    ],
    "ru": [
      "После повторения мы указываем, с какой недели месяца он начнется."
    ]
  },
  {
    "time": [
      699.32,
      704.52
    ],
    "en": [
      "In Canada it starts on the second Sunday of March, so I specified 2."
    ],
    "ru": [
      "В Канаде он начинается во второе воскресенье марта, поэтому я указал 2."
    ]
  },
  {
    "time": [
      704.52,
      707.31
    ],
    "en": [
      "Next is the weekday, so I entered Sunday."
    ],
    "ru": [
      "Следующий день недели, поэтому я вошел в воскресенье."
    ]
  },
  {
    "time": [
      707.31,
      711.26
    ],
    "en": [
      "After that it’s the Month, March for Canada."
    ],
    "ru": [
      "После этого наступит месяц, март для Канады."
    ]
  },
  {
    "time": [
      711.26,
      713.58
    ],
    "en": [
      "Finally the time, I entered 2AM."
    ],
    "ru": [
      "Наконец время, я вошел в 2 часа ночи."
    ]
  },
  {
    "time": [
      713.58,
      716.42
    ],
    "en": [
      "Okay, so that’s all for the start time."
    ],
    "ru": [
      "Хорошо, это все для начала."
    ]
  },
  {
    "time": [
      716.42,
      719.37
    ],
    "en": [
      "Now we enter the end of daylight saving time in the same order."
    ],
    "ru": [
      "Теперь в том же порядке вводим конец летнего времени."
    ]
  },
  {
    "time": [
      719.37,
      727.39
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
      719.37,
      727.39
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
      727.39,
      732.02
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
      727.39,
      732.02
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
      732.02,
      733.69
    ],
    "en": [
      "what most countries use by default."
    ],
    "ru": [
      "что большинство стран используют по умолчанию."
    ]
  },
  {
    "time": [
      733.69,
      736.82
    ],
    "en": [
      "So, that’s all for the command."
    ],
    "ru": [
      "Итак, это все для команды."
    ]
  },
  {
    "time": [
      736.82,
      738.62
    ],
    "en": [
      "Notice the dollar signs here."
    ],
    "ru": [
      "Обратите внимание на знаки доллара здесь."
    ]
  },
  {
    "time": [
      738.62,
      742.95
    ],
    "en": [
      "This command is a little long, too long for one line, so these dollar signs mean that"
    ],
    "ru": [
      "Эта команда немного длинная, слишком длинная для одной строки, поэтому эти знаки доллара означают, что"
    ]
  },
  {
    "time": [
      742.95,
      747.6
    ],
    "en": [
      "some of the output is cut off and can’t be displayed on a single line in the terminal."
    ],
    "ru": [
      "часть вывода обрезается и не может отображаться в одной строке в терминале."
    ]
  },
  {
    "time": [
      747.6,
      750.51
    ],
    "en": [
      "So, I typed it out here."
    ],
    "ru": [
      "Итак, я напечатал это здесь."
    ]
  },
  {
    "time": [
      750.51,
      756.33
    ],
    "en": [
      "CLOCK SUMMER-TIME, the time-zone name, RECURRING, and then the start of daylight saving time"
    ],
    "ru": [
      "ЧАСЫ ЛЕТО-ВРЕМЯ, название часового пояса, РЕЖИМ, а затем начало перехода на летнее время."
    ]
  },
  {
    "time": [
      756.33,
      758.24
    ],
    "en": [
      "and the end of daylight saving time."
    ],
    "ru": [
      "и конец летнего времени."
    ]
  },
  {
    "time": [
      758.24,
      761.48
    ],
    "en": [
      "Okay, that’s the CLOCK SUMMER-TIME command."
    ],
    "ru": [
      "Хорошо, это команда ЧАСЫ ЛЕТО-ВРЕМЯ."
    ]
  },
  {
    "time": [
      761.48,
      765.95
    ],
    "en": [
      "So, that’s all for manual time configuration."
    ],
    "ru": [
      "Итак, это все, что касается настройки времени вручную."
    ]
  },
  {
    "time": [
      765.95,
      768.35
    ],
    "en": [
      "Here are the time commands we just looked at."
    ],
    "ru": [
      "Вот только что рассмотренные нами команды времени."
    ]
  },
  {
    "time": [
      768.35,
      773.0
    ],
    "en": [
      "The CLOCK SUMMER-TIME command is a little long so I simplified the format."
    ],
    "ru": [
      "Команда CLOCK SUMMER-TIME немного длинновата, поэтому я упростил формат."
    ]
  },
  {
    "time": [
      773.0,
      779.76
    ],
    "en": [
      "Just remember that for the ‘start’ and ‘end’ you need to specify the week, weekday, month, and time."
    ],
    "ru": [
      "Просто помните, что для «начала» и «конца» нужно указать неделю, день недели, месяц и время."
    ]
  },
  {
    "time": [
      779.76,
      784.06
    ],
    "en": [
      "month, and time. Okay, let’s move on to the next topic."
    ],
    "ru": [
      "месяц и время. Хорошо, перейдем к следующей теме."
    ]
  },
  {
    "time": [
      784.06,
      790.32
    ],
    "en": [
      "And the next topic is the main topic of this video, NTP, Network Time Protocol."
    ],
    "ru": [
      "И следующая тема - основная тема этого видео, NTP, Network Time Protocol."
    ]
  },
  {
    "time": [
      790.32,
      793.58
    ],
    "en": [
      "Manually configuring the time on devices is not scalable."
    ],
    "ru": [
      "Настройка времени на устройствах вручную не масштабируется."
    ]
  },
  {
    "time": [
      793.58,
      798.85
    ],
    "en": [
      "In a large network, manually configuring the time on every router, every switch, firewall,"
    ],
    "ru": [
      "В большой сети ручная настройка времени на каждом маршрутизаторе, каждом коммутаторе, межсетевом экране,"
    ]
  },
  {
    "time": [
      798.85,
      804.36
    ],
    "en": [
      "PC, phone, etc, would be a huge task and a huge waste of time."
    ],
    "ru": [
      "ПК, телефон и т. Д. Были бы огромной задачей и огромной тратой времени."
    ]
  },
  {
    "time": [
      804.36,
      809.8
    ],
    "en": [
      "Not only that, the manually configured clocks will drift, resulting in inaccurate time."
    ],
    "ru": [
      "Мало того, вручную настроенные часы будут дрейфовать, что приведет к неточному времени."
    ]
  },
  {
    "time": [
      809.8,
      815.79
    ],
    "en": [
      "NTP allows automatic syncing of time over a network to NTP servers."
    ],
    "ru": [
      "NTP позволяет автоматически синхронизировать время по сети с серверами NTP."
    ]
  },
  {
    "time": [
      815.79,
      820.92
    ],
    "en": [
      "The device you’re using to watch this video is almost certainly using NTP."
    ],
    "ru": [
      "Устройство, которое вы используете для просмотра этого видео, почти наверняка использует NTP."
    ]
  },
  {
    "time": [
      820.92,
      829.18
    ],
    "en": [
      "For example, on my Windows 10 PC you can see that my computer is set to automatically synchronize with time.windows.com."
    ],
    "ru": [
      "Например, на моем ПК с Windows 10 вы можете видеть, что мой компьютер настроен на автоматическую синхронизацию с time.windows.com."
    ]
  },
  {
    "time": [
      829.18,
      832.5
    ],
    "en": [
      "with time.windows.com. That is an NTP server somewhere on the Internet."
    ],
    "ru": [
      "с time.windows.com. Это NTP-сервер где-то в Интернете."
    ]
  },
  {
    "time": [
      832.5,
      834.48
    ],
    "en": [
      "And actually, you can configure this."
    ],
    "ru": [
      "И собственно, вы можете это настроить."
    ]
  },
  {
    "time": [
      834.48,
      840.41
    ],
    "en": [
      "So, for example, if I wanted my PC to synchronize to a different NTP server, for example Google’s"
    ],
    "ru": [
      "Так, например, если я хочу, чтобы мой компьютер синхронизировался с другим сервером NTP, например с сервером Google"
    ]
  },
  {
    "time": [
      840.41,
      843.91
    ],
    "en": [
      "server, I can change it here."
    ],
    "ru": [
      "сервер, я могу изменить его здесь."
    ]
  },
  {
    "time": [
      843.91,
      849.24
    ],
    "en": [
      "This point is separate from the topic, but those names like ‘time.windows.com’ are"
    ],
    "ru": [
      "Этот пункт не связан с темой, но такие имена, как «time.windows.com»"
    ]
  },
  {
    "time": [
      849.24,
      853.0
    ],
    "en": [
      "resolved to IP addresses using the protocol DNS."
    ],
    "ru": [
      "разрешается в IP-адреса с использованием протокола DNS."
    ]
  },
  {
    "time": [
      853.0,
      858.48
    ],
    "en": [
      "DNS will be covered in a future video, it’s an important CCNA topic."
    ],
    "ru": [
      "DNS будет рассмотрен в следующем видео, это важная тема CCNA."
    ]
  },
  {
    "time": [
      858.48,
      865.41
    ],
    "en": [
      "In the CLI of my Windows PC, I used the command NSLOOKUP time.windows.com."
    ],
    "ru": [
      "В интерфейсе командной строки моего ПК с Windows я использовал команду NSLOOKUP time.windows.com."
    ]
  },
  {
    "time": [
      865.41,
      872.83
    ],
    "en": [
      "It contacted the DNS server I’m using, which is Google’s DNS server with an IP address of 8.8.8.8."
    ],
    "ru": [
      "Он связался с DNS-сервером, который я использую, который является DNS-сервером Google с IP-адресом 8.8.8.8."
    ]
  },
  {
    "time": [
      872.83,
      875.32
    ],
    "en": [
      "of 8.8.8.8. Then Google’s server gave me the answer."
    ],
    "ru": [
      "из 8.8.8.8. Затем сервер Google дал мне ответ."
    ]
  },
  {
    "time": [
      875.32,
      879.91
    ],
    "en": [
      "The actual IP address of the Windows NTP server is 20.43.94.199."
    ],
    "ru": [
      "Фактический IP-адрес NTP-сервера Windows - 20.43.94.199."
    ]
  },
  {
    "time": [
      879.91,
      886.91
    ],
    "en": [
      "I tried the same with Google’s NTP server, NSLOOKUP time.google.com."
    ],
    "ru": [
      "Я попробовал то же самое с NTP-сервером Google, NSLOOKUP time.google.com."
    ]
  },
  {
    "time": [
      886.91,
      896.0
    ],
    "en": [
      "Again, my PC asked the Google DNS server for the IP address of time.google.com, and here is the answer."
    ],
    "ru": [
      "Опять же, мой компьютер запросил у DNS-сервера Google IP-адрес time.google.com, и вот ответ."
    ]
  },
  {
    "time": [
      896.0,
      901.63
    ],
    "en": [
      "is the answer. You can see four IPv6 addresses and four IPv4 addresses used by time.google.com."
    ],
    "ru": [
      "это ответ. Вы можете увидеть четыре адреса IPv6 и четыре адреса IPv4, используемые time.google.com."
    ]
  },
  {
    "time": [
      901.63,
      908.9
    ],
    "en": [
      "Anyway, DNS will be covered in detail in another video, I just wanted to give you a little preview."
    ],
    "ru": [
      "В любом случае, DNS будет подробно рассмотрен в другом видео, я просто хотел дать вам небольшой предварительный просмотр."
    ]
  },
  {
    "time": [
      908.9,
      911.45
    ],
    "en": [
      "preview. Okay, back to NTP."
    ],
    "ru": [
      "предварительный просмотр. Хорошо, вернемся к NTP."
    ]
  },
  {
    "time": [
      911.45,
      917.5
    ],
    "en": [
      "So, NTP clients request the time from NTP servers, and then they synchronize their time"
    ],
    "ru": [
      "Итак, клиенты NTP запрашивают время у серверов NTP, а затем синхронизируют свое время."
    ]
  },
  {
    "time": [
      917.5,
      919.29
    ],
    "en": [
      "to the time of the server."
    ],
    "ru": [
      "ко времени сервера."
    ]
  },
  {
    "time": [
      919.29,
      924.24
    ],
    "en": [
      "It’s possible for a device to be an NTP server and client at the same time."
    ],
    "ru": [
      "Устройство может быть одновременно NTP-сервером и клиентом."
    ]
  },
  {
    "time": [
      924.24,
      930.49
    ],
    "en": [
      "So, it will sync its time to a server, and then other devices will sync their time to it."
    ],
    "ru": [
      "Таким образом, он синхронизирует свое время с сервером, а затем другие устройства синхронизируют свое время с ним."
    ]
  },
  {
    "time": [
      930.49,
      935.88
    ],
    "en": [
      "it. These are rough numbers, they can vary, but NTP allows accuracy of time within about 1"
    ],
    "ru": [
      "Это. Это приблизительные цифры, они могут варьироваться, но NTP допускает точность времени в пределах 1"
    ]
  },
  {
    "time": [
      935.88,
      941.41
    ],
    "en": [
      "millisecond if the NTP server is in the same LAN, or within about 50 milliseconds if connecting"
    ],
    "ru": [
      "миллисекунды, если сервер NTP находится в той же локальной сети, или около 50 миллисекунд, если соединение"
    ]
  },
  {
    "time": [
      941.41,
      945.68
    ],
    "en": [
      "to the NTP server over a WAN or the Internet."
    ],
    "ru": [
      "к серверу NTP через глобальную сеть или Интернет."
    ]
  },
  {
    "time": [
      945.68,
      947.77
    ],
    "en": [
      "Some NTP servers are ‘better’ than others."
    ],
    "ru": [
      "Некоторые серверы NTP «лучше» других."
    ]
  },
  {
    "time": [
      947.77,
      953.69
    ],
    "en": [
      "The ‘distance’ of an NTP server from the original reference clock is called stratum."
    ],
    "ru": [
      "«Расстояние» NTP-сервера от исходных эталонных часов называется слоем."
    ]
  },
  {
    "time": [
      953.69,
      957.92
    ],
    "en": [
      "The farther away from the reference clock, the higher the stratum."
    ],
    "ru": [
      "Чем дальше от эталонных часов, тем выше пласт."
    ]
  },
  {
    "time": [
      957.92,
      962.66
    ],
    "en": [
      "If the stratum level of a server is high, it is considered less accurate."
    ],
    "ru": [
      "Если уровень слоя сервера высокий, он считается менее точным."
    ]
  },
  {
    "time": [
      962.66,
      967.82
    ],
    "en": [
      "NTP uses UDP port 123 to communicate."
    ],
    "ru": [
      "NTP использует порт 123 UDP для связи."
    ]
  },
  {
    "time": [
      967.82,
      974.22
    ],
    "en": [
      "Remember that one, in addition to the ones we covered in the TCP&amp;UDP video."
    ],
    "ru": [
      "Помните, что это в дополнение к тем, которые мы рассмотрели в видео TCP и UDP."
    ]
  },
  {
    "time": [
      974.22,
      977.1
    ],
    "en": [
      "Let me briefly introduce those reference clocks."
    ],
    "ru": [
      "Позвольте мне кратко представить эти эталонные часы."
    ]
  },
  {
    "time": [
      977.1,
      984.69
    ],
    "en": [
      "A reference clock is usually a very accurate time device like an atomic clock or a GPS clock."
    ],
    "ru": [
      "Эталонные часы - это обычно очень точное устройство времени, такое как атомные часы или часы GPS."
    ]
  },
  {
    "time": [
      984.69,
      988.85
    ],
    "en": [
      "clock. Reference clocks are stratum 0 within the NTP hierarchy."
    ],
    "ru": [
      "Часы. Контрольные часы - это слой 0 в иерархии NTP."
    ]
  },
  {
    "time": [
      988.85,
      993.47
    ],
    "en": [
      "They are as close to the time source as possible, because they are the time source."
    ],
    "ru": [
      "Они максимально приближены к источнику времени, потому что являются источником времени."
    ]
  },
  {
    "time": [
      993.47,
      998.03
    ],
    "en": [
      "NTP servers directly connected to reference clocks are stratum 1."
    ],
    "ru": [
      "Серверы NTP, напрямую подключенные к эталонным часам, являются слоем 1."
    ]
  },
  {
    "time": [
      998.03,
      1001.85
    ],
    "en": [
      "You’ll see more about this NTP hierarchy in the next slide."
    ],
    "ru": [
      "Вы увидите больше об этой иерархии NTP на следующем слайде."
    ]
  },
  {
    "time": [
      1001.85,
      1008.48
    ],
    "en": [
      "Here’s an example of a reference clock, this one is from a United States Naval observatory."
    ],
    "ru": [
      "Вот пример эталонных часов, это из обсерватории ВМС США."
    ]
  },
  {
    "time": [
      1008.48,
      1012.681
    ],
    "en": [
      "Cisco devices aren’t able to get their time directly from a stratum 0 reference clock"
    ],
    "ru": [
      "Устройства Cisco не могут получать время напрямую от эталонных часов страты 0."
    ]
  },
  {
    "time": [
      1012.681,
      1018.23
    ],
    "en": [
      "like this, but they can get their time from a stratum 1 NTP server."
    ],
    "ru": [
      "как это, но они могут получать свое время от сервера NTP уровня 1."
    ]
  },
  {
    "time": [
      1018.23,
      1021.85
    ],
    "en": [
      "This diagram demonstrates the NTP hierarchy."
    ],
    "ru": [
      "Эта диаграмма демонстрирует иерархию NTP."
    ]
  },
  {
    "time": [
      1021.85,
      1026.69
    ],
    "en": [
      "These reference clocks are stratum 0, they are the original time sources like the US"
    ],
    "ru": [
      "Эти эталонные часы относятся к слою 0, они являются исходными источниками времени, такими как США."
    ]
  },
  {
    "time": [
      1026.69,
      1029.62
    ],
    "en": [
      "Navy clock we saw in the last slide."
    ],
    "ru": [
      "Часы ВМФ мы видели на последнем слайде."
    ]
  },
  {
    "time": [
      1029.62,
      1034.35
    ],
    "en": [
      "The servers directly connected to those reference clocks are stratum 1 servers."
    ],
    "ru": [
      "Серверы, напрямую подключенные к этим эталонным часам, являются серверами первого уровня."
    ]
  },
  {
    "time": [
      1034.35,
      1038.94
    ],
    "en": [
      "Then, stratum 2 NTP servers get their time from stratum 1 servers."
    ],
    "ru": [
      "Затем NTP-серверы уровня 2 получают свое время от серверов уровня 1."
    ]
  },
  {
    "time": [
      1038.94,
      1042.21
    ],
    "en": [
      "And stratum 3 servers get their time from stratum 2 servers."
    ],
    "ru": [
      "И серверы уровня 3 получают свое время от серверов уровня 2."
    ]
  },
  {
    "time": [
      1042.21,
      1045.14
    ],
    "en": [
      "That’s how the NTP hierarchy works."
    ],
    "ru": [
      "Так работает иерархия NTP."
    ]
  },
  {
    "time": [
      1045.14,
      1048.41
    ],
    "en": [
      "However, stratum 15 is the maximum."
    ],
    "ru": [
      "Однако слой 15 - это максимум."
    ]
  },
  {
    "time": [
      1048.41,
      1054.37
    ],
    "en": [
      "Anything above that is considered unreliable and the device will not synchronize to it."
    ],
    "ru": [
      "Все, что указано выше, считается ненадежным, и устройство не будет синхронизироваться с ним."
    ]
  },
  {
    "time": [
      1054.37,
      1059.43
    ],
    "en": [
      "Another aspect of NTP shown in this diagram is NTP peering."
    ],
    "ru": [
      "Другой аспект NTP, показанный на этой диаграмме, - пиринг NTP."
    ]
  },
  {
    "time": [
      1059.43,
      1064.17
    ],
    "en": [
      "Devices can peer with devices at the same stratum to provide more accurate time."
    ],
    "ru": [
      "Устройства могут взаимодействовать с устройствами на одном уровне, чтобы обеспечить более точное время."
    ]
  },
  {
    "time": [
      1064.17,
      1069.76
    ],
    "en": [
      "This also acts as a backup, in case they lose access to the lower-stratum NTP server."
    ],
    "ru": [
      "Это также действует как резервная копия на случай, если они потеряют доступ к NTP-серверу нижнего уровня."
    ]
  },
  {
    "time": [
      1069.76,
      1072.68
    ],
    "en": [
      "This mode is called ‘symmetric active’ mode."
    ],
    "ru": [
      "Этот режим называется «симметричным активным» режимом."
    ]
  },
  {
    "time": [
      1072.68,
      1076.8
    ],
    "en": [
      "So, Cisco devices can operate in three NTP modes."
    ],
    "ru": [
      "Итак, устройства Cisco могут работать в трех режимах NTP."
    ]
  },
  {
    "time": [
      1076.8,
      1080.82
    ],
    "en": [
      "Server mode, Client mode, and symmetric active mode."
    ],
    "ru": [
      "Режим сервера, режим клиента и симметричный активный режим."
    ]
  },
  {
    "time": [
      1080.82,
      1084.86
    ],
    "en": [
      "They can be in all three of those modes at the same time, too."
    ],
    "ru": [
      "Они также могут быть во всех трех режимах одновременно."
    ]
  },
  {
    "time": [
      1084.86,
      1089.41
    ],
    "en": [
      "And finally, an NTP client can sync to multiple servers."
    ],
    "ru": [
      "И, наконец, клиент NTP может синхронизироваться с несколькими серверами."
    ]
  },
  {
    "time": [
      1089.41,
      1095.92
    ],
    "en": [
      "For example, in this diagram this stratum 2 server is getting its time from these two stratum 1 servers."
    ],
    "ru": [
      "Например, на этой диаграмме сервер уровня 2 получает время от этих двух серверов уровня 1."
    ]
  },
  {
    "time": [
      1095.92,
      1098.93
    ],
    "en": [
      "stratum 1 servers. Here’s some extra terminology you should know."
    ],
    "ru": [
      "stratum 1 серверы. Вот дополнительная терминология, которую вам следует знать."
    ]
  },
  {
    "time": [
      1098.93,
      1105.14
    ],
    "en": [
      "NTP servers which get their time directly from reference clocks are also called primary servers."
    ],
    "ru": [
      "Серверы NTP, которые получают время напрямую от эталонных часов, также называются первичными серверами."
    ]
  },
  {
    "time": [
      1105.14,
      1110.06
    ],
    "en": [
      "servers. They sync their time directly to a reference clock, they are stratum 1 servers."
    ],
    "ru": [
      "серверы. Они синхронизируют свое время напрямую с эталонными часами, они являются серверами уровня 1."
    ]
  },
  {
    "time": [
      1110.06,
      1115.68
    ],
    "en": [
      "NTP servers which get their time from other NTP servers are called secondary servers."
    ],
    "ru": [
      "Серверы NTP, которые получают свое время от других серверов NTP, называются вторичными серверами."
    ]
  },
  {
    "time": [
      1115.68,
      1119.42
    ],
    "en": [
      "They operate in server mode and client mode at the same time."
    ],
    "ru": [
      "Они работают одновременно в серверном и клиентском режимах."
    ]
  },
  {
    "time": [
      1119.42,
      1124.52
    ],
    "en": [
      "So, servers with stratum 2 or above are secondary servers."
    ],
    "ru": [
      "Итак, серверы со слоем 2 или выше являются вторичными серверами."
    ]
  },
  {
    "time": [
      1124.52,
      1128.55
    ],
    "en": [
      "Okay I think that’s enough lecturing, let’s get more practical and I’ll explain some"
    ],
    "ru": [
      "Ладно, я думаю, этого достаточно, давайте поработаемся, и я кое-что объясню."
    ]
  },
  {
    "time": [
      1128.55,
      1132.99
    ],
    "en": [
      "more aspects of NTP as we configure it on some Cisco routers."
    ],
    "ru": [
      "больше аспектов NTP, поскольку мы настраиваем его на некоторых маршрутизаторах Cisco."
    ]
  },
  {
    "time": [
      1132.99,
      1136.77
    ],
    "en": [
      "Here’s the network topology I’ll be using for this demonstration."
    ],
    "ru": [
      "Вот топология сети, которую я буду использовать для этой демонстрации."
    ]
  },
  {
    "time": [
      1136.77,
      1144.16
    ],
    "en": [
      "I’m showing you an actual screenshot of my GNS3 topology to show you this. The Internet cloud."
    ],
    "ru": [
      "Чтобы показать вам это, я показываю вам настоящий снимок экрана с моей топологией GNS3. Интернет-облако."
    ]
  },
  {
    "time": [
      1144.16,
      1148.67
    ],
    "en": [
      "The Internet cloud. Through this Internet cloud in GNS3, these virtual routers are actually connected to"
    ],
    "ru": [
      "Интернет-облако. Через это Интернет-облако в GNS3 эти виртуальные маршрутизаторы фактически подключаются к"
    ]
  },
  {
    "time": [
      1148.67,
      1156.45
    ],
    "en": [
      "the real Internet, and in this demonstration I will make R1 sync to Google’s NTP servers over the Internet."
    ],
    "ru": [
      "реальный Интернет, и в этой демонстрации я сделаю синхронизацию R1 с серверами NTP Google через Интернет."
    ]
  },
  {
    "time": [
      1156.45,
      1161.6
    ],
    "en": [
      "over the Internet. This is a cool part of GNS3 that isn’t available in simulators like Packet Tracer."
    ],
    "ru": [
      "по Интернету. Это классная часть GNS3, которой нет в симуляторах, таких как Packet Tracer."
    ]
  },
  {
    "time": [
      1161.6,
      1167.0
    ],
    "en": [
      "Now, you might be wondering why this point-to-point connection between R1 and the Internet is"
    ],
    "ru": [
      "Теперь вам может быть интересно, почему это двухточечное соединение между R1 и Интернетом"
    ]
  },
  {
    "time": [
      1167.0,
      1169.54
    ],
    "en": [
      "using a /24 prefix length."
    ],
    "ru": [
      "используя длину префикса / 24."
    ]
  },
  {
    "time": [
      1169.54,
      1173.76
    ],
    "en": [
      "That’s just how this cloud is configured by default in GNS3."
    ],
    "ru": [
      "Именно так это облако настроено по умолчанию в GNS3."
    ]
  },
  {
    "time": [
      1173.76,
      1181.92
    ],
    "en": [
      "For a real point-to-point connection to an Internet Service Provider I’d use a /30 or /31."
    ],
    "ru": [
      "Для реального двухточечного подключения к Интернет-провайдеру я бы использовал / 30 или / 31."
    ]
  },
  {
    "time": [
      1181.92,
      1185.33
    ],
    "en": [
      "or /31. So let’s configure R1 to sync to Google’s NTP servers."
    ],
    "ru": [
      "или / 31. Итак, давайте настроим R1 для синхронизации с NTP-серверами Google."
    ]
  },
  {
    "time": [
      1185.33,
      1190.39
    ],
    "en": [
      "Once again, here’s the NSLOOKUP I did for Google’s NTP servers."
    ],
    "ru": [
      "Еще раз, вот NSLOOKUP, который я сделал для серверов NTP Google."
    ]
  },
  {
    "time": [
      1190.39,
      1197.63
    ],
    "en": [
      "I’ll be configuring all four of these IPv4 addresses on R1 as NTP servers. Here’s the command."
    ],
    "ru": [
      "Я настрою все четыре адреса IPv4 на маршрутизаторе R1 в качестве серверов NTP. Вот команда."
    ]
  },
  {
    "time": [
      1197.63,
      1201.75
    ],
    "en": [
      "Here’s the command. NTP SERVER, followed by the server IP address."
    ],
    "ru": [
      "Вот команда. NTP SERVER, за которым следует IP-адрес сервера."
    ]
  },
  {
    "time": [
      1201.75,
      1203.57
    ],
    "en": [
      "The order of these doesn’t matter."
    ],
    "ru": [
      "Их порядок не имеет значения."
    ]
  },
  {
    "time": [
      1203.57,
      1209.36
    ],
    "en": [
      "R1 will ask all of them for the time and select whichever gives the best, quickest responses."
    ],
    "ru": [
      "R1 спросит их всех о времени и выберет тот, который даст лучший и самый быстрый ответ."
    ]
  },
  {
    "time": [
      1209.36,
      1213.6
    ],
    "en": [
      "And the one it selects to sync to might change if the currently selected server’s responses"
    ],
    "ru": [
      "И тот, который он выбирает для синхронизации, может измениться, если ответы текущего выбранного сервера"
    ]
  },
  {
    "time": [
      1213.6,
      1216.89
    ],
    "en": [
      "start slowing down or it stops responding altogether."
    ],
    "ru": [
      "начать замедляться или вообще перестать реагировать."
    ]
  },
  {
    "time": [
      1216.89,
      1223.98
    ],
    "en": [
      "So, it’s best to specify multiple NTP servers so that R1 can always have a reliable source of time."
    ],
    "ru": [
      "Поэтому лучше всего указать несколько серверов NTP, чтобы R1 всегда мог иметь надежный источник времени."
    ]
  },
  {
    "time": [
      1223.98,
      1228.69
    ],
    "en": [
      "of time. Now, if you want to manually make the device prefer one of the configured servers, you"
    ],
    "ru": [
      "времени. Теперь, если вы хотите вручную настроить устройство на предпочтение одного из настроенных серверов, вы"
    ]
  },
  {
    "time": [
      1228.69,
      1231.06
    ],
    "en": [
      "can add PREFER to the end of the command."
    ],
    "ru": [
      "можно добавить PREFER в конец команды."
    ]
  },
  {
    "time": [
      1231.06,
      1239.3
    ],
    "en": [
      "So, this would make 216.239.35.0 the preferred NTP server, and the others will be backups."
    ],
    "ru": [
      "Таким образом, это сделает 216.239.35.0 предпочтительным сервером NTP, а остальные будут резервными копиями."
    ]
  },
  {
    "time": [
      1239.3,
      1243.73
    ],
    "en": [
      "But for this demonstration, I didn’t use the PREFER keyword, and in the next slide"
    ],
    "ru": [
      "Но для этой демонстрации я не использовал ключевое слово PREFER, и на следующем слайде"
    ]
  },
  {
    "time": [
      1243.73,
      1247.8
    ],
    "en": [
      "we’ll see which of these NTP servers was selected as the best."
    ],
    "ru": [
      "мы увидим, какой из этих серверов NTP был выбран как лучший."
    ]
  },
  {
    "time": [
      1247.8,
      1254.48
    ],
    "en": [
      "Here’s a very important SHOW command for NTP, SHOW NTP ASSOCIATIONS."
    ],
    "ru": [
      "Вот очень важная команда SHOW для NTP, SHOW NTP ASSOCIATIONS."
    ]
  },
  {
    "time": [
      1254.48,
      1257.9
    ],
    "en": [
      "It shows all of the NTP servers we just configured."
    ],
    "ru": [
      "Он показывает все NTP-серверы, которые мы только что настроили."
    ]
  },
  {
    "time": [
      1257.9,
      1259.13
    ],
    "en": [
      "Here are the servers."
    ],
    "ru": [
      "Вот серверы."
    ]
  },
  {
    "time": [
      1259.13,
      1263.5
    ],
    "en": [
      "Now, you don’t have to understand all of the output of this command, but let me point"
    ],
    "ru": [
      "Теперь вам не обязательно понимать весь вывод этой команды, но позвольте мне указать"
    ]
  },
  {
    "time": [
      1263.5,
      1265.55
    ],
    "en": [
      "out a few things."
    ],
    "ru": [
      "из нескольких вещей."
    ]
  },
  {
    "time": [
      1265.55,
      1272.4
    ],
    "en": [
      "Notice the asterisk next to 216.239.35.0, meaning ‘sys.peer’."
    ],
    "ru": [
      "Обратите внимание на звездочку рядом с 216.239.35.0, означающую «sys.peer»."
    ]
  },
  {
    "time": [
      1272.4,
      1277.59
    ],
    "en": [
      "This means that this is the NTP server that R1 is currently syncing to."
    ],
    "ru": [
      "Это означает, что это NTP-сервер, с которым в настоящее время синхронизируется R1."
    ]
  },
  {
    "time": [
      1277.59,
      1282.45
    ],
    "en": [
      "This plus sign next to the other servers means they are candidates, but R1 is not currently"
    ],
    "ru": [
      "Этот знак плюса рядом с другими серверами означает, что они являются кандидатами, но R1 в настоящее время не является"
    ]
  },
  {
    "time": [
      1282.45,
      1284.91
    ],
    "en": [
      "syncing its time to them."
    ],
    "ru": [
      "синхронизируя свое время с ними."
    ]
  },
  {
    "time": [
      1284.91,
      1289.16
    ],
    "en": [
      "The tilde next to all of the servers simply means that they were configured, which I did"
    ],
    "ru": [
      "Тильда рядом со всеми серверами просто означает, что они были настроены, что я и сделал."
    ]
  },
  {
    "time": [
      1289.16,
      1293.53
    ],
    "en": [
      "in the previous slide with the NTP SERVER command."
    ],
    "ru": [
      "на предыдущем слайде с командой NTP SERVER."
    ]
  },
  {
    "time": [
      1293.53,
      1299.15
    ],
    "en": [
      "If you see an NTP server marked as an ‘outlyer’ or ‘falseticker’ it means R1 will not"
    ],
    "ru": [
      "Если вы видите NTP-сервер, помеченный как «outlyer» или «falseticker», это означает, что R1 не будет"
    ]
  },
  {
    "time": [
      1299.15,
      1304.24
    ],
    "en": [
      "sync to that server, for example R1 might think its time is inaccurate."
    ],
    "ru": [
      "синхронизировать с этим сервером, например, R1 может подумать, что его время неточно."
    ]
  },
  {
    "time": [
      1304.24,
      1308.55
    ],
    "en": [
      "The details of these states are beyond the CCNA, you just need to know the basics."
    ],
    "ru": [
      "Подробности этих состояний выходят за рамки CCNA, вам просто нужно знать основы."
    ]
  },
  {
    "time": [
      1308.55,
      1312.94
    ],
    "en": [
      "Here you can see the reference clock of each NTP server."
    ],
    "ru": [
      "Здесь вы можете увидеть эталонные часы каждого сервера NTP."
    ]
  },
  {
    "time": [
      1312.94,
      1317.18
    ],
    "en": [
      "All of these servers are using Google’s own reference clock as their reference."
    ],
    "ru": [
      "Все эти серверы используют собственные эталонные часы Google в качестве эталона."
    ]
  },
  {
    "time": [
      1317.18,
      1322.37
    ],
    "en": [
      "That is a stratum 0 reference clock, so here in the ‘st’ column you can see that all"
    ],
    "ru": [
      "Это эталонные часы страты 0, поэтому здесь, в столбце «st», вы можете видеть, что все"
    ]
  },
  {
    "time": [
      1322.37,
      1326.78
    ],
    "en": [
      "four of these servers have a stratum level of 1."
    ],
    "ru": [
      "четыре из этих серверов имеют уровень страты 1."
    ]
  },
  {
    "time": [
      1326.78,
      1335.45
    ],
    "en": [
      "I used the SHOW NTP ASSOCIATIONS command again, and now you can see that R1 has selected 216.239.35.4"
    ],
    "ru": [
      "Я снова использовал команду SHOW NTP ASSOCIATIONS, и теперь вы можете видеть, что R1 выбрал 216.239.35.4"
    ]
  },
  {
    "time": [
      1335.45,
      1337.98
    ],
    "en": [
      "as the server it wants to sync to."
    ],
    "ru": [
      "в качестве сервера, с которым он хочет синхронизироваться."
    ]
  },
  {
    "time": [
      1337.98,
      1342.64
    ],
    "en": [
      "This will constantly change as R1 continues interacting with the servers and decides which"
    ],
    "ru": [
      "Это будет постоянно меняться, поскольку R1 продолжает взаимодействовать с серверами и решает, какие"
    ]
  },
  {
    "time": [
      1342.64,
      1345.17
    ],
    "en": [
      "one is the best to sync to."
    ],
    "ru": [
      "лучше всего синхронизировать."
    ]
  },
  {
    "time": [
      1345.17,
      1349.53
    ],
    "en": [
      "Now let’s look at another useful NTP SHOW command."
    ],
    "ru": [
      "Теперь давайте посмотрим на еще одну полезную команду NTP SHOW."
    ]
  },
  {
    "time": [
      1349.53,
      1352.4
    ],
    "en": [
      "That command is SHOW NTP STATUS."
    ],
    "ru": [
      "Эта команда - ПОКАЗАТЬ СТАТУС NTP."
    ]
  },
  {
    "time": [
      1352.4,
      1356.301
    ],
    "en": [
      "There’s a lot of information here that you don’t need to look at, but let’s check"
    ],
    "ru": [
      "Здесь много информации, которую не нужно просматривать, но давайте проверим"
    ]
  },
  {
    "time": [
      1356.301,
      1358.17
    ],
    "en": [
      "out the top line."
    ],
    "ru": [
      "из верхней строчки."
    ]
  },
  {
    "time": [
      1358.17,
      1360.43
    ],
    "en": [
      "Clock is synchronized, that’s good."
    ],
    "ru": [
      "Часы синхронизированы, это хорошо."
    ]
  },
  {
    "time": [
      1360.43,
      1366.95
    ],
    "en": [
      "It means that at least one of the NTP servers we configured was good and R1 was able to sync to it."
    ],
    "ru": [
      "Это означает, что по крайней мере один из настроенных нами NTP-серверов был исправен, и R1 смог синхронизироваться с ним."
    ]
  },
  {
    "time": [
      1366.95,
      1369.72
    ],
    "en": [
      "sync to it. Stratum 2, this is R1’s stratum."
    ],
    "ru": [
      "синхронизировать с ним. Уровень 2, это слой R1."
    ]
  },
  {
    "time": [
      1369.72,
      1375.0
    ],
    "en": [
      "Because R1 is synchronizing its time to Google’s NTP severs, it automatically becomes an NTP"
    ],
    "ru": [
      "Поскольку R1 синхронизирует свое время с серверами NTP Google, он автоматически становится NTP."
    ]
  },
  {
    "time": [
      1375.0,
      1379.35
    ],
    "en": [
      "server itself with a stratum level 1 higher than Google’s NTP servers."
    ],
    "ru": [
      "сам сервер с уровнем слоя 1 выше, чем серверы NTP Google."
    ]
  },
  {
    "time": [
      1379.35,
      1383.46
    ],
    "en": [
      "So, that’s why R1’s stratum level is 2."
    ],
    "ru": [
      "Вот почему уровень страты R1 равен 2."
    ]
  },
  {
    "time": [
      1383.46,
      1386.28
    ],
    "en": [
      "Finally you can see the address of the reference clock."
    ],
    "ru": [
      "Наконец, вы можете увидеть адрес эталонных часов."
    ]
  },
  {
    "time": [
      1386.28,
      1393.82
    ],
    "en": [
      "This time it’s not 216.239.35.0 or .4, it’s .12."
    ],
    "ru": [
      "На этот раз это не 216.239.35.0 или 0,4, а 0,12."
    ]
  },
  {
    "time": [
      1393.82,
      1396.93
    ],
    "en": [
      "Now let’s check R1’s clock and calendar again."
    ],
    "ru": [
      "Теперь давайте снова проверим часы и календарь R1."
    ]
  },
  {
    "time": [
      1396.93,
      1399.79
    ],
    "en": [
      "I used DO SHOW CLOCK DETAIL."
    ],
    "ru": [
      "Я использовал DO SHOW CLOCK DETAIL."
    ]
  },
  {
    "time": [
      1399.79,
      1403.23
    ],
    "en": [
      "The time is correct, however the time zone is not."
    ],
    "ru": [
      "Время правильное, но часовой пояс - нет."
    ]
  },
  {
    "time": [
      1403.23,
      1407.17
    ],
    "en": [
      "NTP uses only the UTC time zone."
    ],
    "ru": [
      "NTP использует только часовой пояс UTC."
    ]
  },
  {
    "time": [
      1407.17,
      1410.13
    ],
    "en": [
      "You must configure the appropriate time zone on each device."
    ],
    "ru": [
      "Вы должны настроить соответствующий часовой пояс на каждом устройстве."
    ]
  },
  {
    "time": [
      1410.13,
      1414.35
    ],
    "en": [
      "I haven’t configured R1’s time zone yet, so I’ll do that."
    ],
    "ru": [
      "Я еще не настроил часовой пояс R1, так что сделаю это."
    ]
  },
  {
    "time": [
      1414.35,
      1418.07
    ],
    "en": [
      "I also used the DO SHOW CALENDAR command."
    ],
    "ru": [
      "Я также использовал команду DO SHOW CALENDAR."
    ]
  },
  {
    "time": [
      1418.07,
      1421.09
    ],
    "en": [
      "Notice that the time is not synced up with the software clock."
    ],
    "ru": [
      "Обратите внимание, что время не синхронизируется с программными часами."
    ]
  },
  {
    "time": [
      1421.09,
      1427.49
    ],
    "en": [
      "NTP doesn’t update the calendar by default, but let’s set it so that it does update the calendar."
    ],
    "ru": [
      "NTP не обновляет календарь по умолчанию, но давайте настроим его так, чтобы он обновлял календарь."
    ]
  },
  {
    "time": [
      1427.49,
      1432.11
    ],
    "en": [
      "the calendar. So, I configured my time zone of JST here on R1."
    ],
    "ru": [
      "календарь. Итак, я настроил свой часовой пояс JST здесь, на R1."
    ]
  },
  {
    "time": [
      1432.11,
      1435.37
    ],
    "en": [
      "Then I used the NTP UPDATE-CALENDAR command."
    ],
    "ru": [
      "Затем я использовал команду NTP UPDATE-CALENDAR."
    ]
  },
  {
    "time": [
      1435.37,
      1441.93
    ],
    "en": [
      "This configures the router to update the hardware clock, the calendar, with the time learned via NTP."
    ],
    "ru": [
      "Это настраивает маршрутизатор на обновление аппаратных часов, календаря, с учетом времени, полученного через NTP."
    ]
  },
  {
    "time": [
      1441.93,
      1446.44
    ],
    "en": [
      "via NTP. So I checked the clock and the calendar again, and now they are both synced."
    ],
    "ru": [
      "через NTP. Итак, я снова проверил часы и календарь, и теперь они оба синхронизированы."
    ]
  },
  {
    "time": [
      1446.44,
      1449.89
    ],
    "en": [
      "You might be wondering why you would want to sync the hardware clock."
    ],
    "ru": [
      "Вам может быть интересно, зачем вам синхронизировать аппаратные часы."
    ]
  },
  {
    "time": [
      1449.89,
      1456.48
    ],
    "en": [
      "The hardware clock tracks the date and time on the device even if it restarts, power is lost, etc."
    ],
    "ru": [
      "Аппаратные часы отслеживают дату и время на устройстве, даже если оно перезагружается, пропадает питание и т. Д."
    ]
  },
  {
    "time": [
      1456.48,
      1461.11
    ],
    "en": [
      "lost, etc. When the system is restarted, the hardware clock is used to initialize the software clock."
    ],
    "ru": [
      "потеряны и т. д. При перезапуске системы аппаратные часы используются для инициализации программных часов."
    ]
  },
  {
    "time": [
      1461.11,
      1468.14
    ],
    "en": [
      "So, it’s a good idea to keep the hardware clock accurate, although it’s not totally essential."
    ],
    "ru": [
      "Так что поддерживать точность аппаратных часов - это хорошая идея, хотя это не совсем важно."
    ]
  },
  {
    "time": [
      1468.14,
      1473.47
    ],
    "en": [
      "essential. Now we’re going to move on to R2 and configure NTP on it as well."
    ],
    "ru": [
      "существенный. Теперь мы перейдем к R2 и также настроим на нем NTP."
    ]
  },
  {
    "time": [
      1473.47,
      1477.4
    ],
    "en": [
      "Usually in a small network like this you’d just configure all of the devices to sync"
    ],
    "ru": [
      "Обычно в такой небольшой сети вы просто настраиваете все устройства на синхронизацию."
    ]
  },
  {
    "time": [
      1477.4,
      1480.55
    ],
    "en": [
      "to public NTP servers like Google’s."
    ],
    "ru": [
      "на общедоступные серверы NTP, такие как Google."
    ]
  },
  {
    "time": [
      1480.55,
      1486.72
    ],
    "en": [
      "But for the purpose of this lesson I’ll configure R2 to use R1 as an NTP server."
    ],
    "ru": [
      "Но для целей этого урока я настрою R2 для использования R1 в качестве сервера NTP."
    ]
  },
  {
    "time": [
      1486.72,
      1491.52
    ],
    "en": [
      "But before doing that, I’ll configure a loopback interface on R1."
    ],
    "ru": [
      "Но перед этим я настрою интерфейс обратной связи на маршрутизаторе R1."
    ]
  },
  {
    "time": [
      1491.52,
      1496.41
    ],
    "en": [
      "Note that I’ve configured OSPF in this network so all of these routers are sharing routes,"
    ],
    "ru": [
      "Обратите внимание, что я настроил OSPF в этой сети, чтобы все эти маршрутизаторы использовали общие маршруты,"
    ]
  },
  {
    "time": [
      1496.41,
      1499.72
    ],
    "en": [
      "including the route to R1’s loopback interface."
    ],
    "ru": [
      "включая маршрут к интерфейсу обратной связи маршрутизатора R1."
    ]
  },
  {
    "time": [
      1499.72,
      1507.86
    ],
    "en": [
      "I also instructed R1 to use loopback0 as the source of its NTP messages with the NTP SOURCE loopback0 command."
    ],
    "ru": [
      "Я также проинструктировал R1 использовать loopback0 в качестве источника своих сообщений NTP с помощью команды NTP SOURCE loopback0."
    ]
  },
  {
    "time": [
      1507.86,
      1514.36
    ],
    "en": [
      "loopback0 command. So, any NTP messages it sends will come from the address 10.1.1.1."
    ],
    "ru": [
      "команда loopback0. Таким образом, любые сообщения NTP, которые он отправляет, будут приходить с адреса 10.1.1.1."
    ]
  },
  {
    "time": [
      1514.36,
      1516.32
    ],
    "en": [
      "Why configure a loopback interface?"
    ],
    "ru": [
      "Зачем настраивать петлевой интерфейс?"
    ]
  },
  {
    "time": [
      1516.32,
      1524.99
    ],
    "en": [
      "Well, let’s say I configured R2 to use 10.0.0.1, R1’s G0/1 interface, as an NTP server."
    ],
    "ru": [
      "Что ж, допустим, я настроил R2 для использования 10.0.0.1, интерфейса G0 / 1 R1, в качестве сервера NTP."
    ]
  },
  {
    "time": [
      1524.99,
      1531.82
    ],
    "en": [
      "In normal situations it would be able to send NTP request messages and get replies from R1."
    ],
    "ru": [
      "В обычных ситуациях он сможет отправлять сообщения с запросами NTP и получать ответы от R1."
    ]
  },
  {
    "time": [
      1531.82,
      1534.28
    ],
    "en": [
      "R1. But what if the interface failed for some reason?"
    ],
    "ru": [
      "R1. Но что, если интерфейс по какой-то причине вышел из строя?"
    ]
  },
  {
    "time": [
      1534.28,
      1541.83
    ],
    "en": [
      "R2 would suddenly lose its NTP server, because the availability of address 10.0.0.1 is dependent"
    ],
    "ru": [
      "R2 внезапно потеряет свой NTP-сервер, потому что доступность адреса 10.0.0.1 зависит от"
    ]
  },
  {
    "time": [
      1541.83,
      1545.76
    ],
    "en": [
      "on the status of R1’s G0/1 interface."
    ],
    "ru": [
      "о состоянии интерфейса G0 / 1 маршрутизатора R1."
    ]
  },
  {
    "time": [
      1545.76,
      1552.6
    ],
    "en": [
      "But what if we configure this loopback interface on R1 and tell R2 to use its address, 10.1.1.1,"
    ],
    "ru": [
      "Но что, если мы настроим этот интерфейс обратной связи на R1 и скажем R2 использовать его адрес, 10.1.1.1,"
    ]
  },
  {
    "time": [
      1552.6,
      1554.85
    ],
    "en": [
      "as its NTP server?"
    ],
    "ru": [
      "в качестве своего NTP-сервера?"
    ]
  },
  {
    "time": [
      1554.85,
      1561.48
    ],
    "en": [
      "Even if the closest path to R1, via R2’s G0/0 interface, is down, R3 will still advertise"
    ],
    "ru": [
      "Даже если ближайший путь к R1 через интерфейс G0 / 0 R2 не работает, R3 все равно будет объявлять"
    ]
  },
  {
    "time": [
      1561.48,
      1570.39
    ],
    "en": [
      "a route to 10.1.1.1 to R2 and therefore R2 will still be able to communicate with its NTP server, R1."
    ],
    "ru": [
      "маршрут от 10.1.1.1 к R2, и поэтому R2 по-прежнему сможет связываться со своим NTP-сервером R1."
    ]
  },
  {
    "time": [
      1570.39,
      1577.09
    ],
    "en": [
      "NTP server, R1. I gave a similar demonstration of why loopback interfaces are useful in the OSPF videos."
    ],
    "ru": [
      "Сервер NTP, R1. Я дал аналогичную демонстрацию того, почему петлевые интерфейсы полезны в видеороликах OSPF."
    ]
  },
  {
    "time": [
      1577.09,
      1580.48
    ],
    "en": [
      "Basically they are useful because they provide the router an address you can use to reach"
    ],
    "ru": [
      "В основном они полезны, потому что предоставляют маршрутизатору адрес, который вы можете использовать для достижения"
    ]
  },
  {
    "time": [
      1580.48,
      1585.48
    ],
    "en": [
      "it which isn’t dependent on the status of any particular physical interface."
    ],
    "ru": [
      "он не зависит от статуса какого-либо конкретного физического интерфейса."
    ]
  },
  {
    "time": [
      1585.48,
      1595.21
    ],
    "en": [
      "Okay, so on R2 I configured NTP SERVER 10.1.1.1, and then checked DO SHOW NTP ASSOCIATIONS."
    ],
    "ru": [
      "Итак, на R2 я настроил NTP-СЕРВЕР 10.1.1.1, а затем поставил галочку «ПОКАЗАТЬ АССОЦИАЦИИ NTP»."
    ]
  },
  {
    "time": [
      1595.21,
      1601.38
    ],
    "en": [
      "Notice the asterisk next to 10.1.1.1, that means R2 has selected R1 to sync to."
    ],
    "ru": [
      "Обратите внимание на звездочку рядом с 10.1.1.1, это означает, что R2 выбрал R1 для синхронизации."
    ]
  },
  {
    "time": [
      1601.38,
      1604.5
    ],
    "en": [
      "R1’s reference clock is displayed here."
    ],
    "ru": [
      "Здесь отображаются эталонные часы R1."
    ]
  },
  {
    "time": [
      1604.5,
      1608.98
    ],
    "en": [
      "This is the IP address of one of Google’s NTP servers, because that’s the server that"
    ],
    "ru": [
      "Это IP-адрес одного из серверов NTP Google, потому что это сервер,"
    ]
  },
  {
    "time": [
      1608.98,
      1611.52
    ],
    "en": [
      "R1 is syncing to."
    ],
    "ru": [
      "R1 синхронизируется с."
    ]
  },
  {
    "time": [
      1611.52,
      1614.83
    ],
    "en": [
      "And here R1’s stratum level of 2 is displayed."
    ],
    "ru": [
      "И здесь отображается уровень слоя 2 R1."
    ]
  },
  {
    "time": [
      1614.83,
      1623.25
    ],
    "en": [
      "Google’s reference clock is stratum 0, Google’s NTP servers are stratum 1, and now R1 is stratum 2."
    ],
    "ru": [
      "Базовые часы Google - это уровень 0, серверы NTP Google - это уровень 1, а теперь R1 - это уровень 2."
    ]
  },
  {
    "time": [
      1623.25,
      1624.97
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
      1623.25,
      1624.97
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
      1624.97,
      1628.82
    ],
    "en": [
      "I checked with DO SHOW NTP STATUS."
    ],
    "ru": [
      "Я проверил с помощью ДОПОЛНИТЕЛЬНО ПОКАЗАТЬ СТАТУС NTP."
    ]
  },
  {
    "time": [
      1628.82,
      1634.71
    ],
    "en": [
      "R2’s stratum is 3, because it got its time from a stratum 2 server, R1."
    ],
    "ru": [
      "Уровень R2 равен 3, потому что он получил время от сервера уровня 2, R1."
    ]
  },
  {
    "time": [
      1634.71,
      1640.99
    ],
    "en": [
      "R2’s reference of 10.1.1.1, R1, is displayed also."
    ],
    "ru": [
      "Также отображается ссылка R2 на 10.1.1.1, R1."
    ]
  },
  {
    "time": [
      1640.99,
      1645.911
    ],
    "en": [
      "As a reminder, remember to use the NTP SOURCE command to specify the loopback interface"
    ],
    "ru": [
      "Напоминаем, что не забудьте использовать команду NTP SOURCE, чтобы указать интерфейс обратной связи."
    ]
  },
  {
    "time": [
      1645.911,
      1655.42
    ],
    "en": [
      "as the source of NTP packets on R1, if you don’t do that R2 and R3 won’t want to sync with R1."
    ],
    "ru": [
      "в качестве источника пакетов NTP на R1, если вы этого не сделаете, R2 и R3 не захотят синхронизироваться с R1."
    ]
  },
  {
    "time": [
      1655.42,
      1658.45
    ],
    "en": [
      "sync with R1. Finally I configured NTP on R3."
    ],
    "ru": [
      "синхронизировать с R1. Наконец, я настроил NTP на R3."
    ]
  },
  {
    "time": [
      1658.45,
      1660.62
    ],
    "en": [
      "Here are the configurations."
    ],
    "ru": [
      "Вот конфигурации."
    ]
  },
  {
    "time": [
      1660.62,
      1666.48
    ],
    "en": [
      "By the way, I configured a loopback interface on R2 as well, that’s 10.2.2.2."
    ],
    "ru": [
      "Кстати, на R2 я также настроил интерфейс обратной петли, это 10.2.2.2."
    ]
  },
  {
    "time": [
      1666.48,
      1672.15
    ],
    "en": [
      "I configured both R1 and R2 as NTP servers to demonstrate an important point."
    ],
    "ru": [
      "Я настроил R1 и R2 как серверы NTP, чтобы продемонстрировать важный момент."
    ]
  },
  {
    "time": [
      1672.15,
      1683.29
    ],
    "en": [
      "Between R1, 10.1.1.1, and R2, 10.2.2.2, which NTP server do you think R3 will prefer, and why? why? Let’s check."
    ],
    "ru": [
      "Какой из серверов NTP между R1, 10.1.1.1 и R2, 10.2.2.2, по вашему мнению, предпочтет R3 и почему? Почему? Давайте проверим."
    ]
  },
  {
    "time": [
      1683.29,
      1687.791
    ],
    "en": [
      "why? Let’s check. R1 is the preferred NTP server. Why is that?"
    ],
    "ru": [
      "Почему? Давайте проверим. R1 - предпочтительный сервер NTP. Это почему?"
    ]
  },
  {
    "time": [
      1687.791,
      1689.8
    ],
    "en": [
      "Why is that? It’s because of the stratum levels."
    ],
    "ru": [
      "Это почему? Это из-за уровней страты."
    ]
  },
  {
    "time": [
      1689.8,
      1694.929
    ],
    "en": [
      "NTP servers with lower stratum levels are preferred, because they are closer to the source."
    ],
    "ru": [
      "Предпочтительны NTP-серверы с более низкими уровнями страты, поскольку они ближе к источнику."
    ]
  },
  {
    "time": [
      1694.929,
      1697.97
    ],
    "en": [
      "source. So, they are considered more accurate."
    ],
    "ru": [
      "источник. Значит, они считаются более точными."
    ]
  },
  {
    "time": [
      1697.97,
      1705.59
    ],
    "en": [
      "Okay, so I’ve shown you how to make a Cisco device sync to an NTP server using the NTP SERVER command."
    ],
    "ru": [
      "Итак, я показал вам, как синхронизировать устройство Cisco с сервером NTP с помощью команды NTP SERVER."
    ]
  },
  {
    "time": [
      1705.59,
      1710.179
    ],
    "en": [
      "SERVER command. For the next few concepts I’ll use a different network, as shown below."
    ],
    "ru": [
      "СЕРВЕР команда. Для следующих нескольких концепций я буду использовать другую сеть, как показано ниже."
    ]
  },
  {
    "time": [
      1710.179,
      1715.4
    ],
    "en": [
      "If a device is already syncing to an NTP server, meaning it’s an NTP client, it automatically"
    ],
    "ru": [
      "Если устройство уже синхронизируется с сервером NTP, то есть это клиент NTP, оно автоматически"
    ]
  },
  {
    "time": [
      1715.4,
      1720.22
    ],
    "en": [
      "acts as an NTP server too and other devices can sync to it."
    ],
    "ru": [
      "также действует как NTP-сервер, и другие устройства могут синхронизироваться с ним."
    ]
  },
  {
    "time": [
      1720.22,
      1723.33
    ],
    "en": [
      "But what if there is no NTP server to sync to?"
    ],
    "ru": [
      "Но что, если нет NTP-сервера для синхронизации?"
    ]
  },
  {
    "time": [
      1723.33,
      1727.7
    ],
    "en": [
      "You probably still want the devices in the network to have the same time, even if it"
    ],
    "ru": [
      "Вы, вероятно, по-прежнему хотите, чтобы устройства в сети имели одинаковое время, даже если оно"
    ]
  },
  {
    "time": [
      1727.7,
      1730.9
    ],
    "en": [
      "is slightly inaccurate compared to the actual time."
    ],
    "ru": [
      "немного неточно по сравнению с фактическим временем."
    ]
  },
  {
    "time": [
      1730.9,
      1736.4
    ],
    "en": [
      "So, how can you manually configure a Cisco device to operate as an NTP server, even though"
    ],
    "ru": [
      "Итак, как вы можете вручную настроить устройство Cisco для работы в качестве сервера NTP, даже если"
    ]
  },
  {
    "time": [
      1736.4,
      1739.62
    ],
    "en": [
      "it isn’t synced to another NTP server?"
    ],
    "ru": [
      "он не синхронизируется с другим сервером NTP?"
    ]
  },
  {
    "time": [
      1739.62,
      1743.07
    ],
    "en": [
      "This is the command. NTP MASTER."
    ],
    "ru": [
      "Это команда. МАСТЕР НТП."
    ]
  },
  {
    "time": [
      1743.07,
      1747.9
    ],
    "en": [
      "NTP MASTER. As the description says it makes the device act as an NTP master clock."
    ],
    "ru": [
      "МАСТЕР НТП. Как сказано в описании, это заставляет устройство действовать как главные часы NTP."
    ]
  },
  {
    "time": [
      1747.9,
      1753.46
    ],
    "en": [
      "So, on R1 I used the NTP MASTER command."
    ],
    "ru": [
      "Итак, на R1 я использовал команду NTP MASTER."
    ]
  },
  {
    "time": [
      1753.46,
      1756.84
    ],
    "en": [
      "Notice that I can specify the stratum of R1."
    ],
    "ru": [
      "Обратите внимание, что я могу указать слой R1."
    ]
  },
  {
    "time": [
      1756.84,
      1761.76
    ],
    "en": [
      "However I chose to just enter the command, which means it will use the default stratum level."
    ],
    "ru": [
      "Однако я решил просто ввести команду, что означает, что она будет использовать уровень страты по умолчанию."
    ]
  },
  {
    "time": [
      1761.76,
      1764.26
    ],
    "en": [
      "level. What’s the default? Let’s check."
    ],
    "ru": [
      "уровень. Что по умолчанию? Давайте проверим."
    ]
  },
  {
    "time": [
      1764.26,
      1767.66
    ],
    "en": [
      "Let’s check. I used SHOW NTP ASSOCIATIONS."
    ],
    "ru": [
      "Давайте проверим. Я использовал ПОКАЗАТЬ АССОЦИАЦИИ NTP."
    ]
  },
  {
    "time": [
      1767.66,
      1773.41
    ],
    "en": [
      "The address of R1’s NTP server is now 127.127.1.1."
    ],
    "ru": [
      "Адрес NTP-сервера маршрутизатора R1 теперь 127.127.1.1."
    ]
  },
  {
    "time": [
      1773.41,
      1774.97
    ],
    "en": [
      "What kind of address is that?"
    ],
    "ru": [
      "Что это за адрес?"
    ]
  },
  {
    "time": [
      1774.97,
      1776.82
    ],
    "en": [
      "It’s a loopback address."
    ],
    "ru": [
      "Это адрес обратной связи."
    ]
  },
  {
    "time": [
      1776.82,
      1785.34
    ],
    "en": [
      "Remember, the entire 127.0.0.0/8 address range is reserved for loopback addresses."
    ],
    "ru": [
      "Помните, что весь диапазон адресов 127.0.0.0/8 зарезервирован для адресов обратной связи."
    ]
  },
  {
    "time": [
      1785.34,
      1789.63
    ],
    "en": [
      "Loopback addresses and loopback interfaces are different concepts, although the names"
    ],
    "ru": [
      "Адреса обратной связи и интерфейсы обратной связи - это разные концепции, хотя имена"
    ]
  },
  {
    "time": [
      1789.63,
      1792.87
    ],
    "en": [
      "are similar, so don’t confuse the terms."
    ],
    "ru": [
      "похожи, поэтому не путайте термины."
    ]
  },
  {
    "time": [
      1792.87,
      1797.41
    ],
    "en": [
      "Loopback interfaces are virtual interfaces in the router and their addresses can be advertised"
    ],
    "ru": [
      "Интерфейсы обратной связи - это виртуальные интерфейсы в маршрутизаторе, и их адреса могут быть объявлены."
    ]
  },
  {
    "time": [
      1797.41,
      1801.04
    ],
    "en": [
      "to other devices using OSPF etc."
    ],
    "ru": [
      "на другие устройства, использующие OSPF и т. д."
    ]
  },
  {
    "time": [
      1801.04,
      1805.51
    ],
    "en": [
      "Loopback addresses are a totally different concept, these addresses are totally internal"
    ],
    "ru": [
      "Адреса обратной связи - это совершенно другая концепция, эти адреса полностью внутренние."
    ]
  },
  {
    "time": [
      1805.51,
      1809.34
    ],
    "en": [
      "to the local device and can’t be reached by other devices."
    ],
    "ru": [
      "на локальное устройство и недоступен для других устройств."
    ]
  },
  {
    "time": [
      1809.34,
      1814.01
    ],
    "en": [
      "Basically, R1 is using itself as its reference clock."
    ],
    "ru": [
      "По сути, R1 использует себя в качестве эталонных часов."
    ]
  },
  {
    "time": [
      1814.01,
      1817.429
    ],
    "en": [
      "Anyway, the stratum level of this server is 7."
    ],
    "ru": [
      "В любом случае, уровень страты этого сервера равен 7."
    ]
  },
  {
    "time": [
      1817.429,
      1820.88
    ],
    "en": [
      "So, what is the actual stratum level of R1?"
    ],
    "ru": [
      "Итак, каков фактический уровень слоя R1?"
    ]
  },
  {
    "time": [
      1820.88,
      1825.51
    ],
    "en": [
      "I used SHOW NTP STATUS to check, and the answer is 8."
    ],
    "ru": [
      "Я использовал ПОКАЗАТЬ СТАТУС NTP для проверки, и ответ - 8."
    ]
  },
  {
    "time": [
      1825.51,
      1831.81
    ],
    "en": [
      "So, remember that the default stratum of the NTP MASTER command is 8."
    ],
    "ru": [
      "Итак, помните, что уровень по умолчанию для команды NTP MASTER равен 8."
    ]
  },
  {
    "time": [
      1831.81,
      1836.06
    ],
    "en": [
      "And I configured R2 and R3 to use R1 as their NTP server."
    ],
    "ru": [
      "И я настроил R2 и R3 для использования R1 в качестве своего NTP-сервера."
    ]
  },
  {
    "time": [
      1836.06,
      1843.36
    ],
    "en": [
      "We’ve already covered that enough so let’s move on to the next topic, symmetric active mode."
    ],
    "ru": [
      "Мы уже рассмотрели это достаточно, поэтому перейдем к следующей теме - симметричному активному режиму."
    ]
  },
  {
    "time": [
      1843.36,
      1847.76
    ],
    "en": [
      "mode. So let’s configure symmetric active mode between R2 and R3."
    ],
    "ru": [
      "режим. Итак, давайте настроим симметричный активный режим между R2 и R3."
    ]
  },
  {
    "time": [
      1847.76,
      1852.8
    ],
    "en": [
      "They both have a stratum level of 9, so they are equals in terms of NTP."
    ],
    "ru": [
      "У них обоих уровень страты 9, так что они равны с точки зрения NTP."
    ]
  },
  {
    "time": [
      1852.8,
      1857.59
    ],
    "en": [
      "They can become peers and help each other sync their time, and also act as backups in"
    ],
    "ru": [
      "Они могут стать партнерами и помогать друг другу синхронизировать свое время, а также выступать в качестве резервных копий в"
    ]
  },
  {
    "time": [
      1857.59,
      1860.73
    ],
    "en": [
      "case they lose contact with R1."
    ],
    "ru": [
      "в случае потери контакта с R1."
    ]
  },
  {
    "time": [
      1860.73,
      1866.68
    ],
    "en": [
      "The command to configure symmetric active mode is NTP PEER, followed by the peer’s address."
    ],
    "ru": [
      "Команда для настройки симметричного активного режима - это NTP PEER, за которым следует адрес однорангового узла."
    ]
  },
  {
    "time": [
      1866.68,
      1870.16
    ],
    "en": [
      "address. So, I configured R3 as R2’s peer."
    ],
    "ru": [
      "адрес. Итак, я настроил R3 как узел R2."
    ]
  },
  {
    "time": [
      1870.16,
      1875.2
    ],
    "en": [
      "And here is the entry for R3 in R2’s NTP association table."
    ],
    "ru": [
      "А вот запись для R3 в таблице ассоциаций NTP R2."
    ]
  },
  {
    "time": [
      1875.2,
      1878.98
    ],
    "en": [
      "R3’s reference clock is R1, 10.0.12.1."
    ],
    "ru": [
      "Опорная частота R3 - R1, 10.0.12.1."
    ]
  },
  {
    "time": [
      1878.98,
      1883.09
    ],
    "en": [
      "Its stratum level is 9, because R1’s is 8."
    ],
    "ru": [
      "Его уровень страты - 9, потому что R1 - 8."
    ]
  },
  {
    "time": [
      1883.09,
      1888.26
    ],
    "en": [
      "I did the same configurations on R3, specifying R2 as the peer."
    ],
    "ru": [
      "Я проделал те же настройки на R3, указав R2 в качестве однорангового узла."
    ]
  },
  {
    "time": [
      1888.26,
      1895.23
    ],
    "en": [
      "Again, the reference clock is R1 and the stratum level is 9."
    ],
    "ru": [
      "Опять же, опорные часы - R1, а уровень слоя - 9."
    ]
  },
  {
    "time": [
      1895.23,
      1899.28
    ],
    "en": [
      "Okay the final topic for today is NTP authentication."
    ],
    "ru": [
      "Хорошо, последняя тема на сегодня - аутентификация NTP."
    ]
  },
  {
    "time": [
      1899.28,
      1905.77
    ],
    "en": [
      "I can’t say for sure if this is on the exam or not, some study resources include it and some don’t."
    ],
    "ru": [
      "Я не могу точно сказать, входит это в экзамен или нет, некоторые учебные ресурсы включают его, а некоторые нет."
    ]
  },
  {
    "time": [
      1905.77,
      1909.12
    ],
    "en": [
      "some don’t. But I recommend learning these few commands just in case there are some questions about"
    ],
    "ru": [
      "некоторые нет. Но я рекомендую изучить эти несколько команд на всякий случай, если возникнут вопросы о"
    ]
  },
  {
    "time": [
      1909.12,
      1913.79
    ],
    "en": [
      "NTP authentication on the CCNA exam."
    ],
    "ru": [
      "Аутентификация NTP на экзамене CCNA."
    ]
  },
  {
    "time": [
      1913.79,
      1917.54
    ],
    "en": [
      "NTP authentication can be configured, but it is optional."
    ],
    "ru": [
      "Аутентификацию NTP можно настроить, но это необязательно."
    ]
  },
  {
    "time": [
      1917.54,
      1919.79
    ],
    "en": [
      "You don’t need to configure it."
    ],
    "ru": [
      "Вам не нужно его настраивать."
    ]
  },
  {
    "time": [
      1919.79,
      1923.78
    ],
    "en": [
      "It allows NTP clients to ensure that they only sync to the intended servers."
    ],
    "ru": [
      "Это позволяет клиентам NTP гарантировать, что они синхронизируются только с намеченными серверами."
    ]
  },
  {
    "time": [
      1923.78,
      1929.929
    ],
    "en": [
      "They will check that the server is using the same password as them, and only sync if they are the same."
    ],
    "ru": [
      "Они будут проверять, что сервер использует тот же пароль, что и они, и синхронизируются только в том случае, если они такие же."
    ]
  },
  {
    "time": [
      1929.929,
      1936.01
    ],
    "en": [
      "are the same. Here’s how you configure NTP authentication in Cisco IOS, make sure the server and clients"
    ],
    "ru": [
      "одинаковы. Вот как вы настраиваете аутентификацию NTP в Cisco IOS, убедитесь, что сервер и клиенты"
    ]
  },
  {
    "time": [
      1936.01,
      1937.78
    ],
    "en": [
      "are configured the same."
    ],
    "ru": [
      "настроены одинаково."
    ]
  },
  {
    "time": [
      1937.78,
      1943.75
    ],
    "en": [
      "First, enable NTP authentication with the command NTP AUTHENTICATE."
    ],
    "ru": [
      "Сначала включите аутентификацию NTP с помощью команды NTP AUTHENTICATE."
    ]
  },
  {
    "time": [
      1943.75,
      1947.23
    ],
    "en": [
      "Then you create the authentication key or keys."
    ],
    "ru": [
      "Затем вы создаете ключ или ключи аутентификации."
    ]
  },
  {
    "time": [
      1947.23,
      1951.59
    ],
    "en": [
      "You can create multiple keys, but don’t worry about that for the CCNA-level."
    ],
    "ru": [
      "Вы можете создать несколько ключей, но не беспокойтесь об этом для уровня CCNA."
    ]
  },
  {
    "time": [
      1951.59,
      1956.76
    ],
    "en": [
      "So, for the ‘key-number’ field just use a number of 1, and then the ‘key’ field"
    ],
    "ru": [
      "Итак, для поля «номер ключа» просто используйте число 1, а затем поле «ключ»."
    ]
  },
  {
    "time": [
      1956.76,
      1959.27
    ],
    "en": [
      "is the password itself."
    ],
    "ru": [
      "это сам пароль."
    ]
  },
  {
    "time": [
      1959.27,
      1962.36
    ],
    "en": [
      "Then you have to specify which key or keys are trusted."
    ],
    "ru": [
      "Затем вы должны указать, какой ключ или ключи являются доверенными."
    ]
  },
  {
    "time": [
      1962.36,
      1964.08
    ],
    "en": [
      "Don’t forget this step."
    ],
    "ru": [
      "Не забывайте этот шаг."
    ]
  },
  {
    "time": [
      1964.08,
      1975.16
    ],
    "en": [
      "Creating the key uses one command, NTP AUTHENTICATION-KEY, and specifying that it is trusted uses another command, NTP TRUSTED-KEY."
    ],
    "ru": [
      "Для создания ключа используется одна команда NTP AUTHENTICATION-KEY, а для указания того, что он является доверенным, используется другая команда, NTP TRUSTED-KEY."
    ]
  },
  {
    "time": [
      1975.16,
      1979.25
    ],
    "en": [
      "command, NTP TRUSTED-KEY. Finally you must specify which key to use for each server."
    ],
    "ru": [
      "команда, ДОВЕРЕННЫЙ КЛЮЧ NTP. Наконец, вы должны указать, какой ключ использовать для каждого сервера."
    ]
  },
  {
    "time": [
      1979.25,
      1982.61
    ],
    "en": [
      "This command isn’t needed on the server itself."
    ],
    "ru": [
      "Эта команда не нужна на самом сервере."
    ]
  },
  {
    "time": [
      1982.61,
      1989.17
    ],
    "en": [
      "Now let’s look at these configurations on R1, R2, and R3."
    ],
    "ru": [
      "Теперь давайте посмотрим на эти конфигурации на R1, R2 и R3."
    ]
  },
  {
    "time": [
      1989.17,
      1991.179
    ],
    "en": [
      "Here are the configurations."
    ],
    "ru": [
      "Вот конфигурации."
    ]
  },
  {
    "time": [
      1991.179,
      1998.46
    ],
    "en": [
      "On all three routers I used NTP AUTHENTICATE, NTP AUTHENTICATION-KEY 1 MD5 with a password"
    ],
    "ru": [
      "На всех трех маршрутизаторах я использовал NTP AUTHENTICATE, NTP AUTHENTICATION-KEY 1 MD5 с паролем"
    ]
  },
  {
    "time": [
      1998.46,
      2003.33
    ],
    "en": [
      "of jeremysitlab, and NTP TRUSTED-KEY 1."
    ],
    "ru": [
      "jeremysitlab и NTP TRUSTED-KEY 1."
    ]
  },
  {
    "time": [
      2003.33,
      2011.08
    ],
    "en": [
      "Then on the clients R2 and R3 only, I used the command NTP SERVER 10.0.12.1 KEY 1."
    ],
    "ru": [
      "Затем только на клиентах R2 и R3 я использовал команду NTP SERVER 10.0.12.1 KEY 1."
    ]
  },
  {
    "time": [
      2011.08,
      2016.99
    ],
    "en": [
      "So, they will use key number 1, which is jeremysitlab, to authenticate R1."
    ],
    "ru": [
      "Таким образом, они будут использовать ключ номер 1, который является jeremysitlab, для аутентификации R1."
    ]
  },
  {
    "time": [
      2016.99,
      2024.5
    ],
    "en": [
      "I also did one extra command, NTP PEER, followed by the peer address, and KEY 1."
    ],
    "ru": [
      "Я также выполнил одну дополнительную команду, NTP PEER, за которой следует адрес узла и KEY 1."
    ]
  },
  {
    "time": [
      2024.5,
      2029.42
    ],
    "en": [
      "This adds authentication to the peer relationship between R2 and R3."
    ],
    "ru": [
      "Это добавляет аутентификацию к одноранговым отношениям между R2 и R3."
    ]
  },
  {
    "time": [
      2029.42,
      2037.179
    ],
    "en": [
      "Okay, so that’s all you need to configure NTP authentication for the CCNA."
    ],
    "ru": [
      "Хорошо, это все, что вам нужно для настройки аутентификации NTP для CCNA."
    ]
  },
  {
    "time": [
      2037.179,
      2042.92
    ],
    "en": [
      "In addition to the manual time configuration commands, we just covered a lot of NTP commands."
    ],
    "ru": [
      "В дополнение к командам ручной настройки времени мы рассмотрели множество команд NTP."
    ]
  },
  {
    "time": [
      2042.92,
      2046.14
    ],
    "en": [
      "To help you review, here are the commands we looked at."
    ],
    "ru": [
      "Чтобы помочь вам в обзоре, вот команды, которые мы рассмотрели."
    ]
  },
  {
    "time": [
      2046.14,
      2051.77
    ],
    "en": [
      "If you don’t remember any of these, go back in the video to review."
    ],
    "ru": [
      "Если вы не помните ничего из этого, вернитесь к видео, чтобы просмотреть."
    ]
  },
  {
    "time": [
      2051.77,
      2055.09
    ],
    "en": [
      "Before moving on to the quiz, let’s review what we covered."
    ],
    "ru": [
      "Прежде чем перейти к викторине, давайте рассмотрим, что мы рассмотрели."
    ]
  },
  {
    "time": [
      2055.09,
      2058.6
    ],
    "en": [
      "We looked at why time is important for network devices."
    ],
    "ru": [
      "Мы рассмотрели, почему время важно для сетевых устройств."
    ]
  },
  {
    "time": [
      2058.6,
      2065.72
    ],
    "en": [
      "The main reason from a CCNA perspective is for accurate logging of events on your network devices."
    ],
    "ru": [
      "Основная причина с точки зрения CCNA - это точная регистрация событий на ваших сетевых устройствах."
    ]
  },
  {
    "time": [
      2065.72,
      2070.83
    ],
    "en": [
      "devices. Then we looked at how to manually configure the time and date in Cisco IOS."
    ],
    "ru": [
      "устройств. Затем мы рассмотрели, как вручную настроить время и дату в Cisco IOS."
    ]
  },
  {
    "time": [
      2070.83,
      2074.28
    ],
    "en": [
      "Then we looked at the basics of NTP and how to configure it."
    ],
    "ru": [
      "Затем мы рассмотрели основы NTP и способы его настройки."
    ]
  },
  {
    "time": [
      2074.28,
      2079.85
    ],
    "en": [
      "We covered a lot already, but there is so much more to learn about NTP."
    ],
    "ru": [
      "Мы уже многое рассмотрели, но еще многое предстоит узнать о NTP."
    ]
  },
  {
    "time": [
      2079.85,
      2086.58
    ],
    "en": [
      "However I think the information we covered in this video will be more than enough for the CCNA exam."
    ],
    "ru": [
      "Однако я думаю, что информации, которую мы рассмотрели в этом видео, будет более чем достаточно для экзамена CCNA."
    ]
  },
  {
    "time": [
      2086.58,
      2091.46
    ],
    "en": [
      "the CCNA exam. Make sure to watch until the end of the quiz for a bonus practice question from Boson Software’s"
    ],
    "ru": [
      "экзамен CCNA. Обязательно просмотрите до конца викторины, чтобы получить бонусный практический вопрос от Boson Software"
    ]
  },
  {
    "time": [
      2091.46,
      2095.98
    ],
    "en": [
      "ExSim for CCNA, the best practice exams for the CCNA."
    ],
    "ru": [
      "ExSim для CCNA, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      2095.98,
      2101.11
    ],
    "en": [
      "Okay, let’s go to quiz question 1."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 1 викторины."
    ]
  },
  {
    "time": [
      2101.11,
      2105.11
    ],
    "en": [
      "Which of the following commands will cause the router to adjust its software clock to"
    ],
    "ru": [
      "Какая из следующих команд заставит маршрутизатор настроить свои программные часы на"
    ]
  },
  {
    "time": [
      2105.11,
      2107.35
    ],
    "en": [
      "match the hardware clock?"
    ],
    "ru": [
      "соответствовать аппаратным часам?"
    ]
  },
  {
    "time": [
      2107.35,
      2108.85
    ],
    "en": [
      "Here are the commands."
    ],
    "ru": [
      "Вот команды."
    ]
  },
  {
    "time": [
      2108.85,
      2115.11
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2115.11,
      2118.8
    ],
    "en": [
      "The answer is C, CLOCK READ-CALENDAR."
    ],
    "ru": [
      "Ответ - C, ЧТЕНИЕ ЧАСОВ-КАЛЕНДАРЬ."
    ]
  },
  {
    "time": [
      2118.8,
      2123.55
    ],
    "en": [
      "This will cause the router to adjust its software clock to match the hardware clock."
    ],
    "ru": [
      "Это заставит маршрутизатор настроить свои программные часы в соответствии с аппаратными часами."
    ]
  },
  {
    "time": [
      2123.55,
      2129.17
    ],
    "en": [
      "D will do the opposite, it will cause the router to adjust its hardware clock to match the software clock."
    ],
    "ru": [
      "D сделает обратное: маршрутизатор настроит свои аппаратные часы в соответствии с программными часами."
    ]
  },
  {
    "time": [
      2129.17,
      2132.04
    ],
    "en": [
      "the software clock. A and B are not valid commands."
    ],
    "ru": [
      "программные часы. A и B не являются допустимыми командами."
    ]
  },
  {
    "time": [
      2132.04,
      2137.01
    ],
    "en": [
      "Okay, let’s go to question 2."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      2137.01,
      2141.55
    ],
    "en": [
      "Which of the following commands can be used to configure the time zone of the device?"
    ],
    "ru": [
      "Какие из следующих команд можно использовать для настройки часового пояса устройства?"
    ]
  },
  {
    "time": [
      2141.55,
      2143.13
    ],
    "en": [
      "Here are the commands."
    ],
    "ru": [
      "Вот команды."
    ]
  },
  {
    "time": [
      2143.13,
      2149.31
    ],
    "en": [
      "Pause the video to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2149.31,
      2156.78
    ],
    "en": [
      "The answer is D. From global config mode, CLOCK TIMEZONE, then the timezone name and offset."
    ],
    "ru": [
      "Ответ - D. В режиме глобальной конфигурации, ЧАСЫ, ЧАСОВОЙ ПОЯС, затем имя и смещение часового пояса."
    ]
  },
  {
    "time": [
      2156.78,
      2163.2
    ],
    "en": [
      "offset. Unlike some other time commands, this command is done from global config mode and not privileged exec mode."
    ],
    "ru": [
      "компенсировать. В отличие от некоторых других команд времени, эта команда выполняется в режиме глобальной конфигурации, а не в привилегированном режиме exec."
    ]
  },
  {
    "time": [
      2163.2,
      2166.609
    ],
    "en": [
      "exec mode. You cannot configure the time zone with the CLOCK SET command."
    ],
    "ru": [
      "режим exec. Вы не можете настроить часовой пояс с помощью команды CLOCK SET."
    ]
  },
  {
    "time": [
      2166.609,
      2172.22
    ],
    "en": [
      "Okay, let’s go to question 3."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 3."
    ]
  },
  {
    "time": [
      2172.22,
      2174.06
    ],
    "en": [
      "Examine the output below."
    ],
    "ru": [
      "Изучите вывод ниже."
    ]
  },
  {
    "time": [
      2174.06,
      2177.89
    ],
    "en": [
      "Which of the following commands was configured on R1?"
    ],
    "ru": [
      "Какая из следующих команд была настроена на R1?"
    ]
  },
  {
    "time": [
      2177.89,
      2179.66
    ],
    "en": [
      "Here are the options."
    ],
    "ru": [
      "Вот варианты."
    ]
  },
  {
    "time": [
      2179.66,
      2185.31
    ],
    "en": [
      "Pause the video now to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2185.31,
      2189.53
    ],
    "en": [
      "The answer is A, NTP MASTER 9."
    ],
    "ru": [
      "Ответ - A, NTP MASTER 9."
    ]
  },
  {
    "time": [
      2189.53,
      2196.59
    ],
    "en": [
      "Because the address of R1’s NTP association is 127.127.1.1, a loopback address, we know"
    ],
    "ru": [
      "Поскольку адрес ассоциации NTP маршрутизатора R1 - 127.127.1.1, адрес обратной связи, мы знаем"
    ]
  },
  {
    "time": [
      2196.59,
      2199.33
    ],
    "en": [
      "that the NTP MASTER command was used."
    ],
    "ru": [
      "что использовалась команда NTP MASTER."
    ]
  },
  {
    "time": [
      2199.33,
      2205.88
    ],
    "en": [
      "However, in this case the stratum must have been specified as in A, NTP MASTER 9."
    ],
    "ru": [
      "Однако в этом случае страта должна быть указана как в A, NTP MASTER 9."
    ]
  },
  {
    "time": [
      2205.88,
      2213.01
    ],
    "en": [
      "The default stratum of the NTP MASTER command is 8, so both C and D would have the same effect."
    ],
    "ru": [
      "Уровень по умолчанию для команды NTP MASTER равен 8, поэтому и C, и D будут иметь одинаковый эффект."
    ]
  },
  {
    "time": [
      2213.01,
      2219.39
    ],
    "en": [
      "effect. In that case, however, SHOW NTP ASSOCIATIONS should display a stratum of 7."
    ],
    "ru": [
      "эффект. В этом случае, однако, ПОКАЗАТЬ АССОЦИАЦИИ NTP должен отображать страту 7."
    ]
  },
  {
    "time": [
      2219.39,
      2225.81
    ],
    "en": [
      "In this output the stratum is 8, so the command NTP MASTER 9 must have been used."
    ],
    "ru": [
      "В этих выходных данных страта 8, поэтому должна быть использована команда NTP MASTER 9."
    ]
  },
  {
    "time": [
      2225.81,
      2234.21
    ],
    "en": [
      "Regarding option B, the command NTP SERVER 127.127.1.1 would be rejected by the router."
    ],
    "ru": [
      "Что касается варианта B, команда NTP SERVER 127.127.1.1 будет отклонена маршрутизатором."
    ]
  },
  {
    "time": [
      2234.21,
      2238.971
    ],
    "en": [
      "You can’t manually configure a loopback address as the NTP reference clock, even though"
    ],
    "ru": [
      "Вы не можете вручную настроить адрес обратной связи в качестве эталонных часов NTP, даже если"
    ]
  },
  {
    "time": [
      2238.971,
      2242.53
    ],
    "en": [
      "it displays this way when the NTP MASTER command is used."
    ],
    "ru": [
      "он отображается таким образом, когда используется команда NTP MASTER."
    ]
  },
  {
    "time": [
      2242.53,
      2247.96
    ],
    "en": [
      "Okay, let’s go to question 4."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      2247.96,
      2253.21
    ],
    "en": [
      "Which of the following commands configures the router to operate in NTP client mode?"
    ],
    "ru": [
      "Какая из следующих команд настраивает маршрутизатор для работы в режиме клиента NTP?"
    ]
  },
  {
    "time": [
      2253.21,
      2254.95
    ],
    "en": [
      "Here are the options."
    ],
    "ru": [
      "Вот варианты."
    ]
  },
  {
    "time": [
      2254.95,
      2260.58
    ],
    "en": [
      "Pause the video now to think about your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы подумать над своим ответом."
    ]
  },
  {
    "time": [
      2260.58,
      2264.87
    ],
    "en": [
      "The answer is C, NTP SERVER 216.239.35.0."
    ],
    "ru": [
      "Ответ: C, NTP SERVER 216.239.35.0."
    ]
  },
  {
    "time": [
      2264.87,
      2271.01
    ],
    "en": [
      "It configures R1 to become a client of the NTP server 216.239.35.0."
    ],
    "ru": [
      "Он настраивает R1, чтобы он стал клиентом сервера NTP 216.239.35.0."
    ]
  },
  {
    "time": [
      2271.01,
      2276.96
    ],
    "en": [
      "A, NTP PEER, configures symmetric active mode."
    ],
    "ru": [
      "A, NTP PEER, настраивает симметричный активный режим."
    ]
  },
  {
    "time": [
      2276.96,
      2281.2
    ],
    "en": [
      "B, NTP MASTER, configures server mode."
    ],
    "ru": [
      "B, NTP MASTER, настраивает режим сервера."
    ]
  },
  {
    "time": [
      2281.2,
      2284.66
    ],
    "en": [
      "And D, NTP CLIENT, is not a valid command."
    ],
    "ru": [
      "И D, КЛИЕНТ NTP, не является допустимой командой."
    ]
  },
  {
    "time": [
      2284.66,
      2289.8
    ],
    "en": [
      "Okay, let’s go to question 5."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 5."
    ]
  },
  {
    "time": [
      2289.8,
      2295.81
    ],
    "en": [
      "Which of the following commands must be configured on an NTP client to enable NTP authentication?"
    ],
    "ru": [
      "Какая из следующих команд должна быть настроена на клиенте NTP для включения аутентификации NTP?"
    ]
  },
  {
    "time": [
      2295.81,
      2298.05
    ],
    "en": [
      "Select all that apply."
    ],
    "ru": [
      "Выбрать все, что подходит."
    ]
  },
  {
    "time": [
      2298.05,
      2299.78
    ],
    "en": [
      "Here are the options."
    ],
    "ru": [
      "Вот варианты."
    ]
  },
  {
    "time": [
      2299.78,
      2304.99
    ],
    "en": [
      "Before I show the answers, let me say that in the actual CCNA exam when you have to select"
    ],
    "ru": [
      "Прежде чем я покажу ответы, позвольте мне сказать, что на самом экзамене CCNA, когда вам нужно выбрать"
    ]
  },
  {
    "time": [
      2304.99,
      2309.6
    ],
    "en": [
      "multiple answers, the question will always tell you how many to select."
    ],
    "ru": [
      "несколько ответов, вопрос всегда скажет вам, сколько выбрать."
    ]
  },
  {
    "time": [
      2309.6,
      2312.65
    ],
    "en": [
      "Select two, select three, etc."
    ],
    "ru": [
      "Выберите два, выберите три и т. Д."
    ]
  },
  {
    "time": [
      2312.65,
      2316.08
    ],
    "en": [
      "But for a challenge, let’s try ‘select all that apply’."
    ],
    "ru": [
      "Но в качестве задачи давайте попробуем «выбрать все, что подходит»."
    ]
  },
  {
    "time": [
      2316.08,
      2322.55
    ],
    "en": [
      "Okay, pause the video to think about your answers."
    ],
    "ru": [
      "Хорошо, остановите видео, чтобы подумать над своими ответами."
    ]
  },
  {
    "time": [
      2322.55,
      2330.41
    ],
    "en": [
      "The answers are C, D, F, and G. C enables NTP authentication on the device."
    ],
    "ru": [
      "Ответы: C, D, F и G. C включает аутентификацию NTP на устройстве."
    ]
  },
  {
    "time": [
      2330.41,
      2332.88
    ],
    "en": [
      "D creates the authentication key."
    ],
    "ru": [
      "D создает ключ аутентификации."
    ]
  },
  {
    "time": [
      2332.88,
      2336.68
    ],
    "en": [
      "F specifies that the key is a trusted key."
    ],
    "ru": [
      "F указывает, что ключ является доверенным."
    ]
  },
  {
    "time": [
      2336.68,
      2339.84
    ],
    "en": [
      "And G specifies the key to use with the server."
    ],
    "ru": [
      "А G указывает ключ для использования с сервером."
    ]
  },
  {
    "time": [
      2339.84,
      2342.62
    ],
    "en": [
      "Okay, that’s all for the quiz."
    ],
    "ru": [
      "Ладно, это все для викторины."
    ]
  },
  {
    "time": [
      2342.62,
      2348.85
    ],
    "en": [
      "Now let’s take a look at a bonus question in Boson ExSim for CCNA."
    ],
    "ru": [
      "Теперь давайте взглянем на бонусный вопрос в Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2348.85,
      2352.51
    ],
    "en": [
      "Okay here's today's Boson ExSim practice question."
    ],
    "ru": [
      "Хорошо, вот сегодняшний вопрос по практике Boson ExSim."
    ]
  },
  {
    "time": [
      2352.51,
      2357.35
    ],
    "en": [
      "Which of the following is enabled on a Cisco router when you issue the NTP SERVER command"
    ],
    "ru": [
      "Что из следующего включается на маршрутизаторе Cisco, когда вы вводите команду NTP SERVER?"
    ]
  },
  {
    "time": [
      2357.35,
      2359.56
    ],
    "en": [
      "from global configuration mode?"
    ],
    "ru": [
      "из режима глобальной конфигурации?"
    ]
  },
  {
    "time": [
      2359.56,
      2361.4
    ],
    "en": [
      "Select the best answer."
    ],
    "ru": [
      "Выберите лучший ответ."
    ]
  },
  {
    "time": [
      2361.4,
      2364.619
    ],
    "en": [
      "Here are the options A, static client mode."
    ],
    "ru": [
      "Вот варианты A, статический клиентский режим."
    ]
  },
  {
    "time": [
      2364.619,
      2367.02
    ],
    "en": [
      "B, symmetric active mode."
    ],
    "ru": [
      "B, симметричный активный режим."
    ]
  },
  {
    "time": [
      2367.02,
      2371.26
    ],
    "en": [
      "C, broadcast client mode. D, server mode."
    ],
    "ru": [
      "C, широковещательный клиентский режим. D, серверный режим."
    ]
  },
  {
    "time": [
      2371.26,
      2373.98
    ],
    "en": [
      "D, server mode. And E, authentication."
    ],
    "ru": [
      "D, серверный режим. И E, аутентификация."
    ]
  },
  {
    "time": [
      2373.98,
      2382.369
    ],
    "en": [
      "Okay pause the video now to select the best answer. Okay let's check."
    ],
    "ru": [
      "Хорошо, поставьте видео на паузу, чтобы выбрать лучший ответ. Ладно, проверим."
    ]
  },
  {
    "time": [
      2382.369,
      2387.9
    ],
    "en": [
      "Okay let's check. So this is closely related to one of the quiz questions we just did, so hopefully you got the correct answer."
    ],
    "ru": [
      "Ладно, проверим. Это тесно связано с одним из вопросов викторины, который мы только что задали, поэтому, надеюсь, вы получили правильный ответ."
    ]
  },
  {
    "time": [
      2387.9,
      2395.119
    ],
    "en": [
      "the correct answer. When you issue the NTP SERVER command you're telling the router which NTP server it should sync to."
    ],
    "ru": [
      "правильный ответ. Когда вы вводите команду NTP SERVER, вы сообщаете маршрутизатору, с каким сервером NTP он должен синхронизироваться."
    ]
  },
  {
    "time": [
      2395.119,
      2398.859
    ],
    "en": [
      "sync to. So you are making the router an NTP client."
    ],
    "ru": [
      "синхронизировать с. Итак, вы делаете маршрутизатор клиентом NTP."
    ]
  },
  {
    "time": [
      2398.859,
      2407.83
    ],
    "en": [
      "So the answer is either A or C. Now in my lecture video I didn't mention static client and broadcast client."
    ],
    "ru": [
      "Итак, ответ - либо A, либо C. Теперь в моем видео-лекции я не упомянул статический клиент и широковещательный клиент."
    ]
  },
  {
    "time": [
      2407.83,
      2410.98
    ],
    "en": [
      "and broadcast client. I don't think you need to know this for the CCNA."
    ],
    "ru": [
      "и широковещательный клиент. Я не думаю, что вам нужно знать это для CCNA."
    ]
  },
  {
    "time": [
      2410.98,
      2416.21
    ],
    "en": [
      "So the regular kind of NTP client that you get when configuring the NTP SERVER command"
    ],
    "ru": [
      "Итак, обычный тип клиента NTP, который вы получаете при настройке команды NTP SERVER"
    ]
  },
  {
    "time": [
      2416.21,
      2419.49
    ],
    "en": [
      "is A, static client mode."
    ],
    "ru": [
      "- A, статический клиентский режим."
    ]
  },
  {
    "time": [
      2419.49,
      2421.16
    ],
    "en": [
      "So that should be the correct answer."
    ],
    "ru": [
      "Так что это должен быть правильный ответ."
    ]
  },
  {
    "time": [
      2421.16,
      2423.96
    ],
    "en": [
      "I'll click on show answer."
    ],
    "ru": [
      "Я нажимаю показать ответ."
    ]
  },
  {
    "time": [
      2423.96,
      2426.67
    ],
    "en": [
      "And yes that is correct."
    ],
    "ru": [
      "И да, это правильно."
    ]
  },
  {
    "time": [
      2426.67,
      2429.35
    ],
    "en": [
      "So here is Boson's explanation."
    ],
    "ru": [
      "Итак, вот объяснение Бозона."
    ]
  },
  {
    "time": [
      2429.35,
      2435.26
    ],
    "en": [
      "If you want to read about the broadcast client mode it's written here."
    ],
    "ru": [
      "Если вы хотите прочитать о режиме широковещательного клиента, это написано здесь."
    ]
  },
  {
    "time": [
      2435.26,
      2441.65
    ],
    "en": [
      "Okay, so you can pause the video to read that."
    ],
    "ru": [
      "Хорошо, вы можете приостановить видео, чтобы прочитать это."
    ]
  },
  {
    "time": [
      2441.65,
      2451.44
    ],
    "en": [
      "And down here are the bottom there is a reference to some Cisco documentation about the NTP SERVER command."
    ],
    "ru": [
      "А вот внизу есть ссылка на некоторую документацию Cisco о команде NTP SERVER."
    ]
  },
  {
    "time": [
      2451.44,
      2454.57
    ],
    "en": [
      "SERVER command. Okay so that's Boson ExSim for the CCNA."
    ],
    "ru": [
      "СЕРВЕР команда. Итак, это Boson ExSim для CCNA."
    ]
  },
  {
    "time": [
      2454.57,
      2459.56
    ],
    "en": [
      "As I have said many times before, these are by far the best practice exams for the CCNA."
    ],
    "ru": [
      "Как я уже много раз говорил ранее, это, безусловно, лучшие практические экзамены для CCNA."
    ]
  },
  {
    "time": [
      2459.56,
      2464.21
    ],
    "en": [
      "So if you're preparing to take the real CCNA exam, I highly recommend them."
    ],
    "ru": [
      "Так что, если вы готовитесь к настоящему экзамену CCNA, я их настоятельно рекомендую."
    ]
  },
  {
    "time": [
      2464.21,
      2471.5
    ],
    "en": [
      "If you want to get Boson ExSim, please follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить Boson ExSim, перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      2471.5,
      2474.71
    ],
    "en": [
      "There are supplementary materials for this video."
    ],
    "ru": [
      "К этому видео есть дополнительные материалы."
    ]
  },
  {
    "time": [
      2474.71,
      2477.59
    ],
    "en": [
      "There is a flashcard deck to use with the software ‘Anki’."
    ],
    "ru": [
      "Существует колода карточек для использования с программным обеспечением «Anki»."
    ]
  },
  {
    "time": [
      2477.59,
      2483.36
    ],
    "en": [
      "There will also be a packet tracer practice lab so you can get some hands-on practice."
    ],
    "ru": [
      "Там также будет практическая лаборатория по отслеживанию пакетов, где вы сможете получить практическую практику."
    ]
  },
  {
    "time": [
      2483.36,
      2486.02
    ],
    "en": [
      "That will be in the next video."
    ],
    "ru": [
      "Об этом будет в следующем видео."
    ]
  },
  {
    "time": [
      2486.02,
      2489.63
    ],
    "en": [
      "Sign up for my mailing list via the link in the description, and I’ll send you all of"
    ],
    "ru": [
      "Подпишитесь на мою рассылку по ссылке в описании, и я пришлю вам все"
    ]
  },
  {
    "time": [
      2489.63,
      2496.25
    ],
    "en": [
      "the flashcards and packet tracer lab files for the course."
    ],
    "ru": [
      "дидактические карточки и файлы лаборатории трассировщика пакетов для курса."
    ]
  },
  {
    "time": [
      2496.25,
      2501.06
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
      2501.06,
      2504.91
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
      2504.91,
      2509.429
    ],
    "en": [
      "Thank you to Biraj, Magrathea, Samil, Junhong, Njabulo,"
    ],
    "ru": [
      "Спасибо Бираджу, Магратее, Самилу, Джунхонгу, Нджабуло,"
    ]
  },
  {
    "time": [
      2509.429,
      2516.574
    ],
    "en": [
      "Benjamin, Tshepiso, Justin, Prakaash, Nasir, Erlison, Apogee, Marko, Daming, Jhilmar, Ed,"
    ],
    "ru": [
      "Бенджамин, Чеписо, Джастин, Пракааш, Насир, Эрлисон, Апогей, Марко, Даминг, Джилмар, Эд,"
    ]
  },
  {
    "time": [
      2516.574,
      2525.44
    ],
    "en": [
      "Value, John, Funnydart, Velvijaykum, Mark, Yousif, Boson Software, Devin, Lito, Yonatan, and Vance."
    ],
    "ru": [
      "Вэлью, Джон, Фаннидарт, Велвиджайкум, Марк, Юсиф, Boson Software, Девин, Лито, Йонатан и Вэнс."
    ]
  },
  {
    "time": [
      2525.44,
      2530.91
    ],
    "en": [
      "and Vance. Sorry if I pronounced your name incorrectly, but thank you so much for your support."
    ],
    "ru": [
      "и Вэнс. Извините, если я неправильно произнес ваше имя, но большое спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      2530.91,
      2537.849
    ],
    "en": [
      "This is the list of JCNP-level members at the time of recording by the way, December 29th 2020."
    ],
    "ru": [
      "Это список участников уровня JCNP на момент записи, кстати, 29 декабря 2020 года."
    ]
  },
  {
    "time": [
      2537.849,
      2544.91
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
      2537.849,
      2544.91
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
      2544.91,
      2545.96
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
      2545.96,
      2550.4
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
      2550.4,
      2553.73
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
      2553.73,
      2556.34
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
      2556.34,
      2563.89
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
      2563.89,
      2563.89
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]