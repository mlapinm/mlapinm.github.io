let items = [
  {
    "time": [
      1.2,
      6.96
    ],
    "en": [
      "Welcome to Jeremy’s IT Lab. This is&nbsp; a free, complete course for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "Добро пожаловать в ИТ-лабораторию Джереми. Это & nbsp; бесплатный полный курс CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      6.96,
      11.04
    ],
    "en": [
      "If you like these videos, please&nbsp; subscribe to follow along with the series.&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нравятся эти видео, пожалуйста, & nbsp; подпишитесь, чтобы следить за этой серией. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      11.04,
      15.52
    ],
    "en": [
      "Also, please like and leave a comment, and share&nbsp; the video to help spread this free series of&nbsp;&nbsp;"
    ],
    "ru": [
      "Кроме того, поставьте лайк и оставьте комментарий, а также поделитесь & nbsp; видео, которое поможет распространить эту бесплатную серию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      15.52,
      20.88
    ],
    "en": [
      "videos. Thanks for your help. Also, remember&nbsp; to sign up via the link in the description to&nbsp;&nbsp;"
    ],
    "ru": [
      "видео. Спасибо за вашу помощь. Также помните & nbsp; чтобы зарегистрироваться по ссылке в описании на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      20.88,
      26.48
    ],
    "en": [
      "get all of the lab files for this course, so&nbsp; you can try it out yourself in packet tracer."
    ],
    "ru": [
      "получить все лабораторные файлы для этого курса, так что & nbsp; вы можете попробовать это самостоятельно в пакетном трассировщике."
    ]
  },
  {
    "time": [
      26.48,
      31.04
    ],
    "en": [
      "If you want more labs like these, I highly&nbsp; recommend picking up Boson’s NetSim for the&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вам нужно больше подобных лабораторий, я очень & nbsp; рекомендую использовать NetSim от Boson для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      31.04,
      36.32
    ],
    "en": [
      "CCNA. It’s a network simulator with tons of&nbsp; guided labs covering all of the topics you&nbsp;&nbsp;"
    ],
    "ru": [
      "CCNA. Это сетевой симулятор с множеством & nbsp; проводимые лабораторные работы по всем темам, которые вы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      36.32,
      42.8
    ],
    "en": [
      "need to know for the CCNA. Click the link&nbsp; in the video description to check it out."
    ],
    "ru": [
      "нужно знать для CCNA. Щелкните ссылку & nbsp; в описании видео, чтобы проверить это."
    ]
  },
  {
    "time": [
      42.8,
      50.0
    ],
    "en": [
      "In this lab we’ll use TFTP and FTP on R1&nbsp; and R2 to get updated IOS image files,&nbsp;&nbsp;"
    ],
    "ru": [
      "В этой лабораторной работе мы будем использовать TFTP и FTP на маршрутизаторе R1 & nbsp; и R2 для получения обновленных файлов образов IOS, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      50.0,
      55.92
    ],
    "en": [
      "and then reboot the routers with the new&nbsp; version. First, let’s take a look at SRV1.&nbsp;&nbsp;"
    ],
    "ru": [
      "а затем перезагрузите маршрутизаторы с новым & nbsp; версия. Во-первых, давайте взглянем на SRV1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      55.92,
      62.72
    ],
    "en": [
      "From the services tab, if I click on TFTP, you&nbsp; can see at the top that the TFTP service is&nbsp;&nbsp;"
    ],
    "ru": [
      "На вкладке служб, если я нажму на TFTP, вы & nbsp; вверху можно увидеть, что служба TFTP - & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      62.72,
      70.96000000000001
    ],
    "en": [
      "enabled by default, so SRV1 will respond to any&nbsp; TFTP clients trying to download or upload files.&nbsp;&nbsp;"
    ],
    "ru": [
      "включен по умолчанию, поэтому SRV1 будет реагировать на любые & nbsp; Клиенты TFTP пытаются загружать или выгружать файлы. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      70.96000000000001,
      76.24
    ],
    "en": [
      "And down below is a list of files currently&nbsp; on SRV1, these are operating system files for&nbsp;&nbsp;"
    ],
    "ru": [
      "А внизу находится список файлов, которые сейчас & nbsp; на SRV1 это файлы операционной системы для & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      76.24,
      83.03999999999999
    ],
    "en": [
      "various kinds of devices. The one we’ll be copying&nbsp; to R1 and R2 is this one here, the same one as in&nbsp;&nbsp;"
    ],
    "ru": [
      "различного рода устройства. Тот, который мы будем копировать & nbsp; к R1 и R2 - вот этот, тот же, что и в & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      83.03999999999999,
      90.88
    ],
    "en": [
      "the lecture video. Okay, then I’ll click on the&nbsp; FTP tab. The FTP service is enabled by default,&nbsp;&nbsp;"
    ],
    "ru": [
      "видео лекции. Хорошо, тогда я нажму на & nbsp; Вкладка FTP. Служба FTP включена по умолчанию, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      90.88,
      98.0
    ],
    "en": [
      "and because FTP uses username and password&nbsp; authentication, there is a list of FTP users here.&nbsp;&nbsp;"
    ],
    "ru": [
      "и поскольку FTP использует имя пользователя и пароль & nbsp; аутентификации, здесь есть список пользователей FTP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      98.0,
      103.52000000000001
    ],
    "en": [
      "The default username and password in Packet&nbsp; Tracer is cisco and cisco, but I created this one,&nbsp;&nbsp;"
    ],
    "ru": [
      "Имя пользователя и пароль по умолчанию в пакете & nbsp; Tracer - это cisco и cisco, но я создал этот, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      103.52000000000001,
      111.03999999999999
    ],
    "en": [
      "username jeremy password ccna. And below&nbsp; that the same OS files are available."
    ],
    "ru": [
      "имя пользователя джереми пароль ccna. И ниже & nbsp; что доступны те же файлы ОС."
    ]
  },
  {
    "time": [
      111.03999999999999,
      118.0
    ],
    "en": [
      "Step 1 of the lab is to configure IP addresses and&nbsp; any necessary routing to allow full connectivity.&nbsp;&nbsp;"
    ],
    "ru": [
      "Шаг 1 лабораторной работы - настроить IP-адреса и & nbsp; любая необходимая маршрутизация для обеспечения полного подключения. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      118.0,
      123.28
    ],
    "en": [
      "For the purpose of this video, I’ve already&nbsp; done that. I configured IP addresses on SRV1,&nbsp;&nbsp;"
    ],
    "ru": [
      "Для этого видео я уже & nbsp; сделал это. Я настроил IP-адреса на SRV1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      123.28,
      132.88
    ],
    "en": [
      "R1, and R2, and configured a static route to&nbsp; 10.0.0.0/24 on R2. So, let’s go on to step 2.&nbsp;&nbsp;"
    ],
    "ru": [
      "R1 и R2 и настроили статический маршрут к & nbsp; 10.0.0.0/24 на R2. Итак, перейдем к шагу 2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      132.88,
      143.52
    ],
    "en": [
      "On R1 I’ll use TFTP to get the new IOS file from&nbsp; SRV1. First, I’ll check the current version on R1.&nbsp;&nbsp;"
    ],
    "ru": [
      "На R1 я буду использовать TFTP, чтобы получить новый файл IOS от & nbsp; SRV1. Сначала я проверю текущую версию на R1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      143.52,
      151.68
    ],
    "en": [
      "ENABLE. SHOW VERSION, and check the top line&nbsp; of the output. So, the current version is 15.1,&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ ВЕРСИЮ и проверить верхнюю строку & nbsp; вывода. Итак, текущая версия - 15.1, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      151.68,
      159.2
    ],
    "en": [
      "and the file I’m going to download from SRV1 is&nbsp; 15.5. Let’s check the current file in flash. SHOW&nbsp;&nbsp;"
    ],
    "ru": [
      "а файл, который я собираюсь загрузить с SRV1, - & nbsp; 15.5. Давайте проверим текущий файл во флэш-памяти. ПОКАЗАТЬ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      159.2,
      167.84
    ],
    "en": [
      "FLASH. There it is. Okay, let’s copy that&nbsp; new file into flash. The command is COPY TFTP&nbsp;&nbsp;"
    ],
    "ru": [
      "ВСПЫШКА. Вот оно. Хорошо, давайте скопируем это & ​​nbsp; новый файл во флеш-память. Команда: КОПИРОВАТЬ TFTP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      167.84,
      176.32
    ],
    "en": [
      "FLASH. Now SRV1’s address, 10.0.0.1. Now the name&nbsp; of the file we want to copy. I copied the name&nbsp;&nbsp;"
    ],
    "ru": [
      "ВСПЫШКА. Теперь адрес SRV1, 10.0.0.1. Теперь название & nbsp; файла, который мы хотим скопировать. Я скопировал имя & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      176.32,
      183.2
    ],
    "en": [
      "beforehand, so I’ll just paste it in here. And now&nbsp; I’m asked what name I want to save the file as.&nbsp;&nbsp;"
    ],
    "ru": [
      "заранее, поэтому я просто вставлю его сюда. А теперь & nbsp; Меня спрашивают, под каким именем я хочу сохранить файл. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      183.2,
      188.64
    ],
    "en": [
      "The default option is in the square brackets&nbsp; here, I’ll just hit enter to use that filename.&nbsp;&nbsp;"
    ],
    "ru": [
      "Параметр по умолчанию заключен в квадратные скобки & nbsp; здесь я просто нажму \"Enter\", чтобы использовать это имя файла. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      188.64,
      192.8
    ],
    "en": [
      "And this should only take a few seconds.&nbsp;&nbsp;"
    ],
    "ru": [
      "И это займет всего несколько секунд. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      192.8,
      200.07999999999998
    ],
    "en": [
      "Okay, now the file has been copied into&nbsp; the flash of R1. Let’s check. SHOW FLASH.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь файл скопирован в & nbsp; вспышка R1. Давайте проверим. ПОКАЗАТЬ ВСПЫШКУ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      200.07999999999998,
      206.48
    ],
    "en": [
      "There it is. So next let’s configure R1&nbsp; to boot with this new version of IOS.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот оно. Итак, теперь давайте настроим R1 & nbsp; для загрузки с этой новой версией IOS. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      206.48,
      215.6
    ],
    "en": [
      "CONF T. The command is BOOT SYSTEM FLASH, and then&nbsp; the file name, I’ll paste it here again. Now I’ll&nbsp;&nbsp;"
    ],
    "ru": [
      "CONF T. Команда: BOOT SYSTEM FLASH, а затем & nbsp; имя файла, я вставлю его сюда еще раз. Теперь я & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      215.6,
      222.0
    ],
    "en": [
      "EXIT out. And before reloading the system I must&nbsp; make sure to save the config, or else the BOOT&nbsp;&nbsp;"
    ],
    "ru": [
      "Выйти. И перед перезагрузкой системы я должен & nbsp; обязательно сохраните конфигурацию, иначе BOOT & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      222.0,
      231.28
    ],
    "en": [
      "SYSTEM command won’t take effect. WRITE. Okay,&nbsp; finally I’ll use RELOAD to restart the router.&nbsp;&nbsp;"
    ],
    "ru": [
      "Команда SYSTEM не вступит в силу. ЗАПИСЫВАТЬ. Хорошо, & nbsp; наконец, я перезапускаю маршрутизатор с помощью RELOAD. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      231.28,
      236.16
    ],
    "en": [
      "Rebooting a real router can take several&nbsp; minutes, but fortunately in packet tracer&nbsp;&nbsp;"
    ],
    "ru": [
      "Перезагрузка настоящего роутера может занять несколько & nbsp; минут, но, к счастью, в трассировщике пакетов & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      236.16,
      246.0
    ],
    "en": [
      "the process is quite fast. So, let’s check to make&nbsp; sure that R1 is now using the new version of IOS.&nbsp;&nbsp;"
    ],
    "ru": [
      "процесс довольно быстрый. Итак, давайте проверим, чтобы & nbsp; убедитесь, что R1 теперь использует новую версию IOS. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      246.0,
      255.28
    ],
    "en": [
      "ENABLE. SHOW VERSION. Okay, R1 is now using the&nbsp; newer version of IOS. So the final step here on R1&nbsp;&nbsp;"
    ],
    "ru": [
      "ВКЛЮЧИТЬ. ПОКАЗАТЬ ВЕРСИЮ. Хорошо, R1 теперь использует & nbsp; более новая версия IOS. Итак, последний шаг на R1 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      255.28,
      263.84
    ],
    "en": [
      "is to delete the old file from flash. SHOW FLASH.&nbsp; So, I’m just going to copy the filename here.&nbsp;&nbsp;"
    ],
    "ru": [
      "удалить старый файл из флеш-памяти. ПОКАЗАТЬ ВСПЫШКУ. & Nbsp; Итак, я просто скопирую сюда имя файла. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      263.84,
      271.36
    ],
    "en": [
      "And then delete it with DELETE FLASH:, with&nbsp; a colon, and then paste in the filename.&nbsp;&nbsp;"
    ],
    "ru": [
      "А затем удалите его с помощью DELETE FLASH :, с помощью & nbsp; двоеточие, а затем вставьте имя файла. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      271.36,
      275.84000000000003
    ],
    "en": [
      "Then confirm that I really want&nbsp; to delete it, and now let’s check.&nbsp;&nbsp;"
    ],
    "ru": [
      "Затем подтвердите, что я действительно хочу & nbsp; чтобы удалить его, а теперь давайте проверим. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      275.84000000000003,
      283.36
    ],
    "en": [
      "SHOW FLASH. Okay, the old IOS file is now&nbsp; gone. Now I’m going to copy the filename&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ВСПЫШКУ. Хорошо, теперь старый файл IOS & nbsp; ушел. Теперь я скопирую имя файла & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      283.36,
      291.36
    ],
    "en": [
      "of the new IOS version again since I’ll&nbsp; use it on R2. Okay, that’s all for R1."
    ],
    "ru": [
      "новой версии iOS еще раз, так как я & nbsp; используйте его на R2. Ладно, это все для R1."
    ]
  },
  {
    "time": [
      291.36,
      295.92
    ],
    "en": [
      "On R2 we’ll do basically the same thing,&nbsp; but let’s do it using FTP instead of&nbsp;&nbsp;"
    ],
    "ru": [
      "На R2 мы сделаем в основном то же самое, & nbsp; но давайте сделаем это с помощью FTP вместо & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      295.92,
      307.92
    ],
    "en": [
      "TFTP. First let’s check R2’s current version.&nbsp; ENABLE. SHOW VERSION. R2 is also using 15.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "TFTP. Сначала давайте проверим текущую версию R2. & Nbsp; ВКЛЮЧИТЬ. ПОКАЗАТЬ ВЕРСИЮ. R2 также использует 15.1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      307.92,
      316.8
    ],
    "en": [
      "To use FTP, let’s configure the username&nbsp; and password. CONF T. IP FTP USERNAME&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы использовать FTP, давайте настроим имя пользователя & nbsp; и пароль. CONF T. IP ИМЯ ПОЛЬЗОВАТЕЛЯ FTP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      316.8,
      328.32
    ],
    "en": [
      "jeremy. IP FTP PASSWORD ccna. That’s it, now&nbsp; we can copy the file just like in TFTP. EXIT.&nbsp;&nbsp;"
    ],
    "ru": [
      "Джереми. ПАРОЛЬ IP FTP ccna. Вот и все, теперь & nbsp; мы можем скопировать файл так же, как в TFTP. ВЫХОД. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      328.32,
      338.64
    ],
    "en": [
      "So, let’s get that IOS file from SRV1. COPY&nbsp; FTP FLASH. Enter SRV1’s IP address, 10.0.0.1.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте возьмем файл IOS из SRV1. КОПИРОВАТЬ & nbsp; FTP FLASH. Введите IP-адрес SRV1, 10.0.0.1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      338.64,
      345.28
    ],
    "en": [
      "And then I’ll paste the filename. And hit&nbsp; enter to use the same filename here on R2.&nbsp;&nbsp;"
    ],
    "ru": [
      "А затем я вставлю имя файла. И нажмите & nbsp; введите, чтобы использовать то же имя файла здесь, на R2. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      345.28,
      350.24
    ],
    "en": [
      "Okay, now in packet tracer FTP is&nbsp; actually much slower than TFTP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, теперь в трассировщике пакетов FTP & nbsp; на самом деле намного медленнее, чем TFTP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      350.24,
      355.76
    ],
    "en": [
      "In fact I thought it wasn’t working since it&nbsp; takes so much longer than TFTP. But be patient,&nbsp;&nbsp;"
    ],
    "ru": [
      "На самом деле я думал, что это не работает, так как & nbsp; занимает намного больше времени, чем TFTP. Но будьте терпеливы, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      355.76,
      363.84
    ],
    "en": [
      "and it will work. I’m going to pause my recording&nbsp; now and return when the transfer finishes."
    ],
    "ru": [
      "и это будет работать. Я собираюсь приостановить запись & nbsp; сейчас и вернуться, когда передача закончится."
    ]
  },
  {
    "time": [
      363.84,
      369.6
    ],
    "en": [
      "Okay, the transfer finished successfully.&nbsp; Let’s check the file in flash.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, перенос успешно завершен. & Nbsp; Давайте проверим файл во флэш-памяти. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      369.6,
      378.8
    ],
    "en": [
      "SHOW FLASH. There it is. Now just like on R1&nbsp; I’ll configure R2 to boot using this IOS file.&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ВСПЫШКУ. Вот оно. Теперь все как на R1 & nbsp; Я настрою R2 для загрузки с использованием этого файла IOS. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      378.8,
      385.44
    ],
    "en": [
      "CONF T. BOOT SYSTEM FLASH, and then&nbsp; paste in the filename once again.&nbsp;&nbsp;"
    ],
    "ru": [
      "CONF T. BOOT SYSTEM FLASH, а затем & nbsp; вставьте имя файла еще раз. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      385.44,
      396.08
    ],
    "en": [
      "Then EXIT. And WRITE to save the&nbsp; configuration. Now let’s reload R2. RELOAD.&nbsp;"
    ],
    "ru": [
      "Затем ВЫЙТИ. И НАПИШИТЕ, чтобы сохранить & nbsp; конфигурация. Теперь перезагрузим R2. ПЕРЕЗАГРУЗИТЬ. & Nbsp;"
    ]
  },
  {
    "time": [
      396.08,
      400.48
    ],
    "en": [
      "Once again, this should only take about&nbsp; 10 seconds or so in packet tracer,&nbsp;&nbsp;"
    ],
    "ru": [
      "Еще раз, это займет всего около & nbsp; Около 10 секунд в трассировщике пакетов, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      400.48,
      406.15999999999997
    ],
    "en": [
      "but on a real router it will take several minutes.&nbsp;&nbsp;"
    ],
    "ru": [
      "но на реальном роутере это займет несколько минут."
    ]
  },
  {
    "time": [
      406.15999999999997,
      415.76
    ],
    "en": [
      "So, let’s check if R2 is now using the&nbsp; new version of IOS. ENABLE. SHOW VERSION.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте проверим, использует ли R2 теперь & nbsp; новая версия IOS. ВКЛЮЧИТЬ. ПОКАЗАТЬ ВЕРСИЮ. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      415.76,
      423.36
    ],
    "en": [
      "There it is, version 15.5. To finish up,&nbsp; let’s delete the old IOS file from flash.&nbsp;&nbsp;"
    ],
    "ru": [
      "Вот она, версия 15.5. В завершение & nbsp; давайте удалим старый файл IOS из флеш-памяти. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      423.36,
      430.32
    ],
    "en": [
      "SHOW FLASH. Then copy the file name.&nbsp; And delete it with DELETE FLASH:,&nbsp;&nbsp;"
    ],
    "ru": [
      "ПОКАЗАТЬ ВСПЫШКУ. Затем скопируйте имя файла. & Nbsp; И удалите его с помощью DELETE FLASH:, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      430.32,
      436.88
    ],
    "en": [
      "and paste in the file name. And that’s&nbsp; it, let’s check. SHOW FLASH. Okay,&nbsp;&nbsp;"
    ],
    "ru": [
      "и вставьте имя файла. И это & ​​nbsp; это, давай проверим. ПОКАЗАТЬ ВСПЫШКУ. Хорошо, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      436.88,
      443.52
    ],
    "en": [
      "the file has been deleted. So, in this lab we&nbsp; practiced copying files from a server using TFTP&nbsp;&nbsp;"
    ],
    "ru": [
      "файл был удален. Итак, в этой лабораторной работе мы & nbsp; практиковал копирование файлов с сервера по TFTP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      443.52,
      451.6
    ],
    "en": [
      "and FTP. We also updated the IOS version of these&nbsp; routers and removed the old IOS files from flash.&nbsp;&nbsp;"
    ],
    "ru": [
      "и FTP. Мы также обновили версию этих & nbsp; маршрутизаторы и удалили старые файлы IOS из флэш-памяти. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      451.6,
      460.72
    ],
    "en": [
      "That’s all for this lab. Next let’s take a look at&nbsp; a bonus lab in Boson Software’s NetSim for CCNA."
    ],
    "ru": [
      "Вот и все для этой лаборатории. Теперь давайте посмотрим на & nbsp; бонусная лаборатория в NetSim от Boson Software для CCNA."
    ]
  },
  {
    "time": [
      460.72,
      468.08
    ],
    "en": [
      "Okay, here's today's Boson NetSim lab preview.&nbsp; The lab is Trivial File Transfer Protocol, TFTP.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, вот предварительная версия сегодняшней лабораторной работы Boson NetSim. & Nbsp; Лабораторная работа - это простой протокол передачи файлов (TFTP). & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      468.08,
      474.8
    ],
    "en": [
      "So in this lab we will use TFTP to&nbsp; backup Router4's configuration file.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, в этой лабораторной работе мы будем использовать TFTP для & nbsp; резервное копирование файла конфигурации Router4. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      474.8,
      481.92
    ],
    "en": [
      "So, this is another use for TFTP or FTP. Not to&nbsp; download new versions of IOS, but to backup files,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, это еще одно использование TFTP или FTP. Не делать & nbsp; загружать новые версии IOS, но для резервного копирования файлов, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      481.92,
      488.88
    ],
    "en": [
      "for example the device's configuration. So&nbsp; let's go right to the lab tasks. There are&nbsp;&nbsp;"
    ],
    "ru": [
      "например конфигурация устройства. Итак, & nbsp; перейдем сразу к лабораторным задачам. Есть & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      488.88,
      496.08
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
      488.88,
      496.08
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
      496.08,
      507.84
    ],
    "en": [
      "default gateway on PC1 and PC3. These two PCs&nbsp; here. So I will open the CLI of PC1 and PC3.&nbsp;&nbsp;"
    ],
    "ru": [
      "шлюз по умолчанию на ПК1 и ПК3. Эти два компьютера & nbsp; здесь. Итак, я открою интерфейс командной строки ПК1 и ПК3. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      507.84,
      517.6
    ],
    "en": [
      "And the commands to do this in&nbsp; Boson NetSim are IPCONFIG /IP.&nbsp;&nbsp;"
    ],
    "ru": [
      "И команды для этого в & nbsp; Boson NetSim - это IPCONFIG /IP.&nbsp;&nbsp;"
    ]
  },
  {
    "time": [
      517.6,
      522.4
    ],
    "en": [
      "Okay that configures PC1's&nbsp; IP address. And then IPCONFIG&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это настраивает & nbsp; ПК1; Айпи адрес. А затем IPCONFIG & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      522.4,
      542.4
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
      522.4,
      542.4
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
      542.4,
      549.28
    ],
    "en": [
      "Okay, so that's step 1. Next step 2. On&nbsp; Router4 attempt to ping PC1. The ping should&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, это шаг 1. Следующий шаг 2. На & nbsp; Router4 пытается проверить связь с ПК1. Пинг должен & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      549.28,
      560.32
    ],
    "en": [
      "be successful. Okay, so from Router4 I'll&nbsp; ping PC1. Let me open the CLI of Router4.&nbsp;&nbsp;"
    ],
    "ru": [
      "быть успешным. Хорошо, так что с Router4 я & nbsp; ping PC1. Позвольте мне открыть интерфейс командной строки Router4. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      560.32,
      570.72
    ],
    "en": [
      "Oh there's a password. Okay the&nbsp; password is Cisco. And let's ping PC1.&nbsp;&nbsp;"
    ],
    "ru": [
      "О, есть пароль. Хорошо, & nbsp; пароль - Cisco. И давайте пингуем ПК1. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      570.72,
      577.6
    ],
    "en": [
      "Okay, no problem. Next, step 3. On Router4&nbsp; copy the running configuration to the TFTP&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, без проблем. Далее, шаг 3. На Router4 & nbsp; скопируйте текущую конфигурацию в TFTP & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      577.6,
      584.96
    ],
    "en": [
      "server. Okay, so I'm already on Router4. The&nbsp; command is COPY, and then the source this&nbsp;&nbsp;"
    ],
    "ru": [
      "сервер. Хорошо, я уже использую Router4. & Nbsp; команда COPY, а затем источник this & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      584.96,
      591.68
    ],
    "en": [
      "time is the running configuration. So, COPY&nbsp; RUNNING-CONFIG, and the destination will be&nbsp;&nbsp;"
    ],
    "ru": [
      "время - это текущая конфигурация. Итак, КОПИРОВАТЬ & nbsp; RUNNING-CONFIG, и пункт назначения будет & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      591.68,
      600.0
    ],
    "en": [
      "TFTP. And then the address is&nbsp; PC1's address, 192.168.1.2.&nbsp;&nbsp;"
    ],
    "ru": [
      "TFTP. И тогда адрес & nbsp; Адрес ПК1: 192.168.1.2. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      600.0,
      609.76
    ],
    "en": [
      "Okay, the destination filename, I'll name it&nbsp; r4config. Alright, there we go. Okay next on the&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, имя файла назначения, я назову его & nbsp; r4config. Хорошо, поехали. Хорошо, далее на & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      609.76,
      616.88
    ],
    "en": [
      "TFTP server, which is PC1, verify that Router4's&nbsp; configuration has been successfully backed up.&nbsp;&nbsp;"
    ],
    "ru": [
      "Сервер TFTP, которым является ПК1, убедитесь, что маршрутизатор Router4 & nbsp; конфигурация была успешно скопирована. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      616.88,
      623.04
    ],
    "en": [
      "Okay, so the command to do that in NetSim&nbsp; is SHOW TFTP-CONFIGS. And as it says here,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, команда для этого в NetSim & nbsp; SHOW TFTP-CONFIGS. И как здесь сказано, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      623.04,
      629.12
    ],
    "en": [
      "that is not a standard PC command. It&nbsp; is just a command used in Boson NetSim.&nbsp;&nbsp;"
    ],
    "ru": [
      "это не стандартная команда ПК. Это & nbsp; это просто команда, используемая в Boson NetSim. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      629.12,
      640.48
    ],
    "en": [
      "So let's check. SHOW TFTP-CONFIGS. And there is&nbsp; the file, r4config. And here is the file size.&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, давайте проверим. ПОКАЗАТЬ TFTP-КОНФИГИ. И есть & nbsp; файл r4config. А вот размер файла. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      640.48,
      646.88
    ],
    "en": [
      "Okay, next step 5. In the following steps&nbsp; you will restore the configuration you saved&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, следующий шаг 5. На следующих шагах & nbsp; вы восстановите сохраненную конфигурацию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      646.88,
      651.84
    ],
    "en": [
      "on the TFTP server to NVRAM, that's&nbsp; where the startup config is saved,&nbsp;&nbsp;"
    ],
    "ru": [
      "на TFTP-сервере в NVRAM, это & ​​nbsp; где сохраняется конфигурация запуска, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      651.84,
      658.48
    ],
    "en": [
      "on Router4 and verify that the starting&nbsp; configuration was updated successfully.&nbsp;&nbsp;"
    ],
    "ru": [
      "на Router4 и убедитесь, что начальный & nbsp; конфигурация была успешно обновлена. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      658.48,
      662.64
    ],
    "en": [
      "Okay, so first it has us change&nbsp; the host name to MainRouter.&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, сначала мы изменим & nbsp; имя хоста для MainRouter. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      662.64,
      669.52
    ],
    "en": [
      "Okay, so when we backed up the config of Router4&nbsp; the host name was Router4. So in this file here,&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, когда мы сделали резервную копию конфигурации Router4 & nbsp; имя хоста было Router4. Итак, в этом файле & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      669.52,
      679.76
    ],
    "en": [
      "r4config, the host name is saved as Router4.&nbsp; Now we're going to change it to MainRouter.&nbsp;&nbsp;"
    ],
    "ru": [
      "r4config, имя хоста сохраняется как Router4. & nbsp; Теперь мы собираемся изменить его на MainRouter. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      679.76,
      682.96
    ],
    "en": [
      "Okay and now we're going to&nbsp; restore the configuration&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, а теперь мы собираемся & nbsp; восстановить конфигурацию & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      682.96,
      691.84
    ],
    "en": [
      "from the TFTP server to the NVRAM of Router4.&nbsp; So the command is COPY, and the source is&nbsp;&nbsp;"
    ],
    "ru": [
      "с TFTP-сервера в NVRAM маршрутизатора 4. & nbsp; Итак, команда - КОПИРОВАТЬ, а источник - & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      691.84,
      699.44
    ],
    "en": [
      "TFTP, and we're going to save it to&nbsp; the startup config which is in NVRAM.&nbsp;&nbsp;"
    ],
    "ru": [
      "TFTP, и мы собираемся сохранить его в & nbsp; конфигурация запуска, которая находится в NVRAM. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      699.44,
      710.32
    ],
    "en": [
      "The address is 192.168.1.2. And the source&nbsp; filename is r4config. Okay, there we go. You&nbsp;&nbsp;"
    ],
    "ru": [
      "Адрес 192.168.1.2. И источник & nbsp; имя файла - r4config. Хорошо, поехали. Вы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      710.32,
      719.12
    ],
    "en": [
      "should now see the restored configuration&nbsp; in NVRAM. Does NetSim have SHOW NVRAM?&nbsp;&nbsp;"
    ],
    "ru": [
      "должен теперь увидеть восстановленную конфигурацию & nbsp; в NVRAM. Есть ли в NetSim SHOW NVRAM? & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      719.12,
      728.0
    ],
    "en": [
      "Maybe no, let me see. SHOW NVRAM. It does&nbsp; not, but we can just do SHOW STARTUP-CONFIG.&nbsp;&nbsp;"
    ],
    "ru": [
      "Может, нет, дай посмотреть. ПОКАЗАТЬ NVRAM. Это делает & nbsp; нет, но мы можем просто сделать SHOW STARTUP-CONFIG. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      728.0,
      735.6
    ],
    "en": [
      "And the hostname is this config&nbsp; file is Router4 as you can see here.&nbsp;&nbsp;"
    ],
    "ru": [
      "И имя хоста - это конфигурация & nbsp; файл - это Router4, как вы можете видеть здесь. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      735.6,
      740.56
    ],
    "en": [
      "But the hostname is still MainRouter&nbsp; because that's in the startup-config file,&nbsp;&nbsp;"
    ],
    "ru": [
      "Но имя хоста по-прежнему MainRouter & nbsp; потому что это в файле начальной конфигурации & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      740.56,
      746.8
    ],
    "en": [
      "it's not in the running config. So in step 7&nbsp; we're going to issue the COPY STARTUP-CONFIG&nbsp;&nbsp;"
    ],
    "ru": [
      "его нет в запущенной конфигурации. Итак, на шаге 7 & nbsp; мы собираемся выпустить COPY STARTUP-CONFIG & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      746.8,
      755.84
    ],
    "en": [
      "RUNNING-CONFIG command to apply that&nbsp; configuration to the running-config. So, COPY&nbsp;&nbsp;"
    ],
    "ru": [
      "Команда RUNNING-CONFIG, чтобы применить эту & nbsp; конфигурацию в файл running-config. Итак, КОПИРОВАТЬ & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      755.84,
      764.56
    ],
    "en": [
      "STARTUP-CONFIG RUNNING-CONFIG. And now&nbsp; the host name changes back to Router4.&nbsp;&nbsp;"
    ],
    "ru": [
      "ЗАПУСК-КОНФИГУРАЦИЯ ЗАПУСК-КОНФИГУРАЦИЯ. А теперь & nbsp; имя хоста снова изменится на Router4. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      764.56,
      770.16
    ],
    "en": [
      "Okay, finally step 8. Is it necessary to&nbsp; clear Router4's NVRAM in order to copy a&nbsp;&nbsp;"
    ],
    "ru": [
      "Хорошо, наконец, шаг 8. Нужно ли & nbsp; очистите NVRAM Router4, чтобы скопировать & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      770.16,
      777.2
    ],
    "en": [
      "file into it? Explain why or why not. Okay&nbsp; so I have not covered this in the course.&nbsp;&nbsp;"
    ],
    "ru": [
      "файл в него? Объясните, почему да или почему нет. Хорошо & nbsp; поэтому я не рассматривал это в курсе. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      777.2,
      783.52
    ],
    "en": [
      "Let me show you Boson's explanation. So it is&nbsp; not necessary to clear Router4's NVRAM in order&nbsp;&nbsp;"
    ],
    "ru": [
      "Позвольте мне показать вам объяснение Бозона. Итак, это & ​​nbsp; не обязательно очищать NVRAM Router4, чтобы & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      783.52,
      790.96
    ],
    "en": [
      "to copy a file into it. So when you copy a file&nbsp; into NVRAM it totally overwrites that file. So if&nbsp;&nbsp;"
    ],
    "ru": [
      "скопировать в него файл. Поэтому, когда вы копируете файл & nbsp; в NVRAM он полностью перезаписывает этот файл. Итак, если & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      790.96,
      797.04
    ],
    "en": [
      "there's a startup config and you copy a new config&nbsp; to that file, the old file is totally deleted&nbsp;&nbsp;"
    ],
    "ru": [
      "есть стартовая конфигурация, и вы копируете новую конфигурацию & nbsp; в этот файл старый файл полностью удаляется & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      797.04,
      804.72
    ],
    "en": [
      "and replaced with the new file. However as&nbsp; it says here, when you copy a file into DRAM,&nbsp;&nbsp;"
    ],
    "ru": [
      "и заменен новым файлом. Однако как & nbsp; здесь говорится, что когда вы копируете файл в DRAM, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      804.72,
      811.84
    ],
    "en": [
      "or the running configuration which is in DRAM,&nbsp; the files merge. So the new file doesn't totally&nbsp;&nbsp;"
    ],
    "ru": [
      "или текущая конфигурация в DRAM, & nbsp; файлы сливаются. Таким образом, новый файл не полностью & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      811.84,
      817.36
    ],
    "en": [
      "replace the original file, they&nbsp; merge, they become combined.&nbsp;&nbsp;"
    ],
    "ru": [
      "заменить исходный файл, они & nbsp; сливаются, они становятся объединенными. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      817.36,
      822.8
    ],
    "en": [
      "Anyways, you don't have to know that much&nbsp; detail I think for the current CCNA exam.&nbsp;&nbsp;"
    ],
    "ru": [
      "В любом случае, вам не нужно знать так много & nbsp; подробности для текущего экзамена CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      822.8,
      829.28
    ],
    "en": [
      "But it's an interesting point. Okay, so that's&nbsp; all for this lab. Since we did all of the tasks,&nbsp;&nbsp;"
    ],
    "ru": [
      "Но это интересный момент. Хорошо, это & ​​nbsp; все для этой лаборатории. Поскольку мы выполнили все задачи, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      829.28,
      834.96
    ],
    "en": [
      "let's check with the 'grade lab' function&nbsp; here. So I'll click on this button.&nbsp;&nbsp;"
    ],
    "ru": [
      "давайте проверим с помощью функции \"оценка лаборатории\" & nbsp; здесь. Я нажму на эту кнопку. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      834.96,
      843.92
    ],
    "en": [
      "And we completed the lab successfully, perfect.&nbsp; So all of the configurations are correct.&nbsp;&nbsp;"
    ],
    "ru": [
      "И мы успешно завершили лабораторию, идеально. Итак, все конфигурации верны. & Nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      843.92,
      850.8
    ],
    "en": [
      "Okay so that was Boson's NetSim for CCNA. I think&nbsp; this is a great resource for the CCNA. Theres 100+&nbsp;&nbsp;"
    ],
    "ru": [
      "Итак, это был NetSim от Boson для CCNA. Я думаю & nbsp; это отличный ресурс для CCNA. Есть более 100 & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      850.8,
      856.24
    ],
    "en": [
      "guided detailed labs like this covering all&nbsp; of the topics you need to know for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "проводил подобные подробные лабораторные работы, охватывающие все & nbsp; из тем, которые вам нужно знать для CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      856.24,
      863.6
    ],
    "en": [
      "If you want to get Boson NetSim, please&nbsp; follow the link in the video description."
    ],
    "ru": [
      "Если вы хотите получить Boson NetSim, пожалуйста, & nbsp; перейдите по ссылке в описании видео."
    ]
  },
  {
    "time": [
      863.6,
      868.72
    ],
    "en": [
      "Before finishing today’s video I want&nbsp; to thank my JCNP-level channel members.&nbsp;&nbsp;"
    ],
    "ru": [
      "Прежде чем закончить сегодняшнее видео, я хочу & nbsp; чтобы поблагодарить участников канала уровня JCNP. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      868.72,
      875.12
    ],
    "en": [
      "To join, please click the ‘Join’ button under the&nbsp; video. Thank you to Abraham, Serge, Njoku, Viktor,&nbsp;&nbsp;"
    ],
    "ru": [
      "Чтобы присоединиться, нажмите кнопку «Присоединиться» под & nbsp; видео. Спасибо Аврааму, Сержу, Нджоку, Виктору, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      875.12,
      881.84
    ],
    "en": [
      "Roger, Raj, Kenneth, Seamus, H W, Brandon,&nbsp; Samil, Aaron, Marcel, Kone, Donald, C Mohd,&nbsp;&nbsp;"
    ],
    "ru": [
      "Роджер, Радж, Кеннет, Симус, Х.В., Брэндон, & nbsp; Самил, Аарон, Марсель, Коне, Дональд, С. Мохд, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      881.84,
      888.08
    ],
    "en": [
      "Gustavo, Anthony, Junhong, Benjamin, Tshepiso,&nbsp; Justin, Prakaash, Nasir, Erlison, Marko, Daming,&nbsp;&nbsp;"
    ],
    "ru": [
      "Густаво, Энтони, Джунхонг, Бенджамин, Чеписо, & NBSP; Джастин, Пракааш, Насир, Эрлисон, Марко, Даминг, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      888.08,
      893.92
    ],
    "en": [
      "Ed, Value, John, Funnydart, Velvijaykum, Mark,&nbsp; Yousif, Boson Software, Devin, Lito, Yonatan,&nbsp;&nbsp;"
    ],
    "ru": [
      "Эд, Вэлью, Джон, Фаннидарт, Велвиджайкум, Марк, & nbsp; Юсиф, Boson Software, Девин, Лито, Йонатан, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      893.92,
      898.96
    ],
    "en": [
      "and Vance. Sorry if I pronounced your name&nbsp; incorrectly, but thank you so much for your&nbsp;&nbsp;"
    ],
    "ru": [
      "и Вэнс. Извините, если я произнес ваше имя & nbsp; неправильно, но большое спасибо за ваш & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      898.96,
      907.36
    ],
    "en": [
      "support. This is the list of JCNP-level members at&nbsp; the time of recording by the way, March 14th 2021.&nbsp;&nbsp;"
    ],
    "ru": [
      "служба поддержки. Это список участников уровня JCNP на & nbsp; время записи, кстати, 14 марта 2021 г. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      907.36,
      914.24
    ],
    "en": [
      "If you signed up recently and your name isn’t&nbsp; on here don’t worry, you’ll be in future videos."
    ],
    "ru": [
      "Если вы зарегистрировались недавно и ваше имя не & nbsp; здесь не волнуйтесь, вы будете в будущих видео."
    ]
  },
  {
    "time": [
      914.24,
      917.28
    ],
    "en": [
      "Thank you for watching. Please&nbsp; subscribe to the channel,&nbsp;&nbsp;"
    ],
    "ru": [
      "Спасибо за просмотр. Пожалуйста, & nbsp; подписаться на канал, & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      917.28,
      923.12
    ],
    "en": [
      "like the video, leave a comment, and share the&nbsp; video with anyone else studying for the CCNA.&nbsp;&nbsp;"
    ],
    "ru": [
      "поставьте лайк видео, оставьте комментарий и поделитесь & nbsp; видео со всеми, кто учится на CCNA. & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      923.12,
      928.72
    ],
    "en": [
      "If you want to leave a tip, check the links in the&nbsp; description. I'm also a Brave verified publisher&nbsp;&nbsp;"
    ],
    "ru": [
      "Если вы хотите оставить отзыв, проверьте ссылки в разделе & nbsp; описание. Я также являюсь проверенным издателем Brave & nbsp; & nbsp;"
    ]
  },
  {
    "time": [
      928.72,
      928.72
    ],
    "en": [
      "and accept BAT, or Basic Attention Token, tips&nbsp; via the Brave browser. That's all for now."
    ],
    "ru": [
      "и принимаете BAT, или жетон основного внимания, советы & nbsp; через браузер Brave. На этом пока все."
    ]
  }
]