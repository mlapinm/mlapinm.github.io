let objs = [
  {
    "time": [
      1.11,
      3.59
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
      3.59,
      7.21
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
      7.21,
      11.53
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
      11.53,
      17.82
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
      17.82,
      20.09
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
      20.09,
      24.38
    ],
    "en": [
      "In this video, we’ll continue to learn about subnetting."
    ],
    "ru": [
      "В этом видео мы продолжим изучать разбиение на подсети."
    ]
  },
  {
    "time": [
      24.38,
      30.59
    ],
    "en": [
      "Last video I introduced why subnetting is necessary, and walked through a few examples."
    ],
    "ru": [
      "В прошлом видео я рассказал, почему необходимо разбиение на подсети, и рассмотрел несколько примеров."
    ]
  },
  {
    "time": [
      30.59,
      35.66
    ],
    "en": [
      "In this video, I’ll try to give some more clear steps for solving subnetting problems."
    ],
    "ru": [
      "В этом видео я постараюсь дать более четкие инструкции по решению проблем с разбиением на подсети."
    ]
  },
  {
    "time": [
      35.66,
      42.38
    ],
    "en": [
      "I’ve also decided to make one more video on subnetting, so this will be a three-video series."
    ],
    "ru": [
      "Я также решил сделать еще одно видео о разбиении на подсети, так что это будет серия из трех видео."
    ]
  },
  {
    "time": [
      42.38,
      46.18
    ],
    "en": [
      "series. So, what exactly will we cover in this video?"
    ],
    "ru": [
      "серии. Итак, что именно мы расскажем в этом видео?"
    ]
  },
  {
    "time": [
      46.18,
      52.78
    ],
    "en": [
      "We’ll start with some subnetting practice questions, specifically for class C networks, like last video."
    ],
    "ru": [
      "Мы начнем с некоторых практических вопросов по подсетям, особенно для сетей класса C, как в предыдущем видео."
    ]
  },
  {
    "time": [
      52.78,
      58.739
    ],
    "en": [
      "like last video. We’ll start, of course, with the solution to last video’s quiz question."
    ],
    "ru": [
      "нравится последнее видео. Мы, конечно же, начнем с ответа на последний вопрос видео-викторины."
    ]
  },
  {
    "time": [
      58.739,
      62.35
    ],
    "en": [
      "After that we’ll look at subnetting class B networks."
    ],
    "ru": [
      "После этого мы рассмотрим разбиение на подсети сетей класса B."
    ]
  },
  {
    "time": [
      62.35,
      66.83
    ],
    "en": [
      "The process is exactly the same, no matter what class of address you’re subnetting,"
    ],
    "ru": [
      "Процесс остается одинаковым, независимо от того, какой класс адресов вы разбиваете на подсети,"
    ]
  },
  {
    "time": [
      66.83,
      70.31
    ],
    "en": [
      "but it can be a little bit more difficult with larger networks."
    ],
    "ru": [
      "но с большими сетями это может быть немного сложнее."
    ]
  },
  {
    "time": [
      70.31,
      75.59
    ],
    "en": [
      "Class A networks will be covered in the next video, by the way."
    ],
    "ru": [
      "Кстати, сети класса А будут рассмотрены в следующем видео."
    ]
  },
  {
    "time": [
      75.59,
      78.979
    ],
    "en": [
      "So let’s take a look at how to solve last video’s quiz question."
    ],
    "ru": [
      "Итак, давайте посмотрим, как решить вопрос викторины из последнего видео."
    ]
  },
  {
    "time": [
      78.979,
      89.95
    ],
    "en": [
      "I asked you to divide the 192.168.1.0/24 network into four subnets that can accommodate 45 hosts each."
    ],
    "ru": [
      "Я просил вас разделить сеть 192.168.1.0/24 на четыре подсети, каждая из которых может вместить 45 хостов."
    ]
  },
  {
    "time": [
      89.95,
      95.42099999999999
    ],
    "en": [
      "hosts each. We found that a /26 subnet is the right size to fit 45 hosts, so we assigned the"
    ],
    "ru": [
      "хозяев каждый. Мы обнаружили, что размер подсети / 26 подходит для 45 хостов, поэтому мы назначили"
    ]
  },
  {
    "time": [
      95.42099999999999,
      101.59
    ],
    "en": [
      "block 192.168.1.0/26 to subnet 1."
    ],
    "ru": [
      "заблокировать 192.168.1.0/26 в подсеть 1."
    ]
  },
  {
    "time": [
      101.59,
      106.24000000000001
    ],
    "en": [
      "If you don’t remember how we determined that /26 is the correct size, take a minute"
    ],
    "ru": [
      "Если вы не помните, как мы определили, что / 26 - правильный размер, уделите минуту"
    ]
  },
  {
    "time": [
      106.24000000000001,
      108.68
    ],
    "en": [
      "to review the end of the last video."
    ],
    "ru": [
      "чтобы просмотреть конец последнего видео."
    ]
  },
  {
    "time": [
      108.68,
      111.92
    ],
    "en": [
      "So, I asked you to find the remaining subnets."
    ],
    "ru": [
      "Итак, я попросил вас найти оставшиеся подсети."
    ]
  },
  {
    "time": [
      111.92,
      114.71000000000001
    ],
    "en": [
      "I also gave you this hint."
    ],
    "ru": [
      "Я тоже дал вам этот намек."
    ]
  },
  {
    "time": [
      114.71000000000001,
      119.869
    ],
    "en": [
      "If you find the broadcast address of subnet 1, the next address after that will be the"
    ],
    "ru": [
      "Если вы найдете широковещательный адрес подсети 1, следующий за ним адрес будет"
    ]
  },
  {
    "time": [
      119.869,
      123.24
    ],
    "en": [
      "network address of subnet 2."
    ],
    "ru": [
      "сетевой адрес подсети 2."
    ]
  },
  {
    "time": [
      123.24,
      130.6
    ],
    "en": [
      "So the network address for subnet 1 is 192.168.1.0/26."
    ],
    "ru": [
      "Таким образом, сетевой адрес для подсети 1 - 192.168.1.0/26."
    ]
  },
  {
    "time": [
      130.6,
      135.4
    ],
    "en": [
      "Here’s 192.168.1.0 written in binary."
    ],
    "ru": [
      "Вот 192.168.1.0, записанный в двоичном формате."
    ]
  },
  {
    "time": [
      135.4,
      141.72
    ],
    "en": [
      "Blue is the network portion, red is the host portion, and purple is the part we ‘BORROWED’"
    ],
    "ru": [
      "Синий - это сетевая часть, красный - это часть хоста, а фиолетовый - это часть, которую мы ЗАХВАТИЛИ."
    ]
  },
  {
    "time": [
      141.72,
      144.7
    ],
    "en": [
      "from the host portion to add to the network portion."
    ],
    "ru": [
      "из части хоста, чтобы добавить к сетевой части."
    ]
  },
  {
    "time": [
      144.7,
      151.75
    ],
    "en": [
      "This allows us to divide the larger /24 network into multiple, smaller, subnets."
    ],
    "ru": [
      "Это позволяет разделить большую сеть / 24 на несколько меньших подсетей."
    ]
  },
  {
    "time": [
      151.75,
      156.34
    ],
    "en": [
      "To find the broadcast address for this subnet, which is the highest address in the subnet’s"
    ],
    "ru": [
      "Чтобы найти широковещательный адрес для этой подсети, который является самым высоким адресом в подсети"
    ]
  },
  {
    "time": [
      156.34,
      160.959
    ],
    "en": [
      "address range, set all of the bits in the host portion to 1."
    ],
    "ru": [
      "диапазон адресов, установите все биты в части хоста на 1."
    ]
  },
  {
    "time": [
      160.959,
      168.82
    ],
    "en": [
      "Next let’s convert this to dotted decimal. It becomes 192.168.1.63."
    ],
    "ru": [
      "Теперь давайте преобразуем это в десятичное число с точками. Он становится 192.168.1.63."
    ]
  },
  {
    "time": [
      168.82,
      170.9
    ],
    "en": [
      "It becomes 192.168.1.63. That’s the broadcast address."
    ],
    "ru": [
      "Он становится 192.168.1.63. Это широковещательный адрес."
    ]
  },
  {
    "time": [
      170.9,
      180.52
    ],
    "en": [
      "So, the address range for subnet 1 is 192.168.1.0 through 192.168.1.63."
    ],
    "ru": [
      "Итак, диапазон адресов для подсети 1 - от 192.168.1.0 до 192.168.1.63."
    ]
  },
  {
    "time": [
      180.52,
      185.68
    ],
    "en": [
      "The network address of subnet 2 will be 1 higher than the broadcast address."
    ],
    "ru": [
      "Сетевой адрес подсети 2 будет на 1 выше широковещательного адреса."
    ]
  },
  {
    "time": [
      185.68,
      193.4
    ],
    "en": [
      "So, that means that subnet 2 will be 192.168.1.64/26."
    ],
    "ru": [
      "Итак, это означает, что подсеть 2 будет 192.168.1.64/26."
    ]
  },
  {
    "time": [
      193.4,
      198.18
    ],
    "en": [
      "That’s the network address, and here it is in binary."
    ],
    "ru": [
      "Это сетевой адрес в двоичном формате."
    ]
  },
  {
    "time": [
      198.18,
      202.38
    ],
    "en": [
      "Notice that we changed one of the bits we borrowed from the host portion to a 1."
    ],
    "ru": [
      "Обратите внимание, что мы изменили один из битов, позаимствованных из хост-части, на 1."
    ]
  },
  {
    "time": [
      202.38,
      210.129
    ],
    "en": [
      "So, the network address is now 192.168.1.64, with all of the host bits set to 0."
    ],
    "ru": [
      "Итак, сетевой адрес теперь 192.168.1.64 со всеми битами хоста, установленными на 0."
    ]
  },
  {
    "time": [
      210.129,
      212.59
    ],
    "en": [
      "Now lets find the broadcast address."
    ],
    "ru": [
      "Теперь давайте найдем широковещательный адрес."
    ]
  },
  {
    "time": [
      212.59,
      217.16
    ],
    "en": [
      "Change all of the host bits to 1, and now let’s convert it to dotted decimal."
    ],
    "ru": [
      "Измените все биты хоста на 1, а теперь давайте преобразуем его в десятичное число с точками."
    ]
  },
  {
    "time": [
      217.16,
      222.46
    ],
    "en": [
      "So, the broadcast address is 192.168.1.127."
    ],
    "ru": [
      "Итак, широковещательный адрес 192.168.1.127."
    ]
  },
  {
    "time": [
      222.46,
      225.69
    ],
    "en": [
      "So, that’s the range for subnet 2."
    ],
    "ru": [
      "Итак, это диапазон для подсети 2."
    ]
  },
  {
    "time": [
      225.69,
      231.0
    ],
    "en": [
      "Add 1 to the broadcast address and we’ll get the network address for subnet 3."
    ],
    "ru": [
      "Добавьте 1 к широковещательному адресу, и мы получим сетевой адрес для подсети 3."
    ]
  },
  {
    "time": [
      231.0,
      238.32999999999998
    ],
    "en": [
      "So, that means subnet 3 is 192.168.1.128/26."
    ],
    "ru": [
      "Итак, это означает, что подсеть 3 - 192.168.1.128/26."
    ]
  },
  {
    "time": [
      238.32999999999998,
      243.069
    ],
    "en": [
      "Here is the network address in binary, again notice we changed one of the borrowed purple"
    ],
    "ru": [
      "Вот сетевой адрес в двоичном формате, снова обратите внимание, что мы изменили один из заимствованных фиолетовых"
    ]
  },
  {
    "time": [
      243.069,
      247.209
    ],
    "en": [
      "bits to 1, but the host bits are all 0."
    ],
    "ru": [
      "биты равны 1, но все биты хоста равны 0."
    ]
  },
  {
    "time": [
      247.209,
      250.7
    ],
    "en": [
      "Change them to 1, and here’s the broadcast address."
    ],
    "ru": [
      "Измените их на 1, и вот широковещательный адрес."
    ]
  },
  {
    "time": [
      250.7,
      260.339
    ],
    "en": [
      "So, the address range for this subnet is 192.168.1.128 through 192.168.1.191."
    ],
    "ru": [
      "Итак, диапазон адресов для этой подсети - от 192.168.1.128 до 192.168.1.191."
    ]
  },
  {
    "time": [
      260.339,
      264.63
    ],
    "en": [
      "Now we can find the last subnet, subnet 4."
    ],
    "ru": [
      "Теперь мы можем найти последнюю подсеть, подсеть 4."
    ]
  },
  {
    "time": [
      264.63,
      270.53
    ],
    "en": [
      "Subnet 4 is 192.168.1.192/26."
    ],
    "ru": [
      "Подсеть 4 - 192.168.1.192/26."
    ]
  },
  {
    "time": [
      270.53,
      275.33
    ],
    "en": [
      "Here is the network address in binary, this time the borrowed bits are all 1, so this"
    ],
    "ru": [
      "Вот сетевой адрес в двоичном формате, на этот раз все заимствованные биты равны 1, так что это"
    ]
  },
  {
    "time": [
      275.33,
      279.59000000000003
    ],
    "en": [
      "is our last subnet, we don’t have any room for more."
    ],
    "ru": [
      "это наша последняя подсеть, у нас нет места для большего."
    ]
  },
  {
    "time": [
      279.59000000000003,
      283.55
    ],
    "en": [
      "Change the host bits to 1, and here’s the broadcast address."
    ],
    "ru": [
      "Измените биты хоста на 1, и вот широковещательный адрес."
    ]
  },
  {
    "time": [
      283.55,
      292.24
    ],
    "en": [
      "So, the address range for subnet 4 is 192.168.1.192 through 192.168.1.255."
    ],
    "ru": [
      "Итак, диапазон адресов для подсети 4 - от 192.168.1.192 до 192.168.1.255."
    ]
  },
  {
    "time": [
      292.24,
      297.339
    ],
    "en": [
      "Okay, we’ve found the answer to the quiz."
    ],
    "ru": [
      "Хорошо, мы нашли ответ на викторину."
    ]
  },
  {
    "time": [
      297.339,
      299.58
    ],
    "en": [
      "You may notice something about these numbers."
    ],
    "ru": [
      "Вы можете что-то заметить в этих числах."
    ]
  },
  {
    "time": [
      299.58,
      303.199
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
      299.58,
      303.199
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
      303.199,
      311.3
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
      303.199,
      311.3
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
      311.3,
      316.409
    ],
    "en": [
      "I said last video that I would just show you the basics of subnetting, not any special subnetting tricks,"
    ],
    "ru": [
      "В прошлом видео я сказал, что просто покажу вам основы разбиения на подсети, а не какие-либо особые приемы разбиения на подсети,"
    ]
  },
  {
    "time": [
      316.409,
      320.509
    ],
    "en": [
      "but let me show you just one that can help you figure things out faster."
    ],
    "ru": [
      "но позвольте мне показать вам только одну, которая поможет вам быстрее разобраться."
    ]
  },
  {
    "time": [
      320.509,
      324.47
    ],
    "en": [
      "So, we found that a /26 subnet mask is appropriate."
    ],
    "ru": [
      "Итак, мы обнаружили, что подходит маска подсети / 26."
    ]
  },
  {
    "time": [
      324.47,
      328.34
    ],
    "en": [
      "That’s because there are 6 host bits, which allows 62 hosts."
    ],
    "ru": [
      "Это потому, что существует 6 битов хоста, что позволяет использовать 62 хоста."
    ]
  },
  {
    "time": [
      328.34,
      331.789
    ],
    "en": [
      "Let’s draw this line here."
    ],
    "ru": [
      "Давайте проведем вот эту линию."
    ]
  },
  {
    "time": [
      331.789,
      336.119
    ],
    "en": [
      "On the left side is the network portion, and on the right side is the host portion."
    ],
    "ru": [
      "С левой стороны находится сетевая часть, а с правой стороны - хост-часть."
    ]
  },
  {
    "time": [
      336.119,
      340.05899999999997
    ],
    "en": [
      "Since we’re just looking at the last octet, let me make it bigger."
    ],
    "ru": [
      "Поскольку мы просто смотрим на последний октет, позвольте мне увеличить его."
    ]
  },
  {
    "time": [
      340.05899999999997,
      345.289
    ],
    "en": [
      "Okay, so I’ve put the binary for just the last octet down here."
    ],
    "ru": [
      "Хорошо, поэтому я поместил сюда двоичный файл только для последнего октета."
    ]
  },
  {
    "time": [
      345.289,
      350.129
    ],
    "en": [
      "Again, the red part is the host portion, and the purple part is the bits we borrowed to"
    ],
    "ru": [
      "Опять же, красная часть - это часть хоста, а фиолетовая часть - это биты, которые мы заимствовали для"
    ]
  },
  {
    "time": [
      350.129,
      352.659
    ],
    "en": [
      "expand the network portion."
    ],
    "ru": [
      "расширить сетевую часть."
    ]
  },
  {
    "time": [
      352.659,
      356.849
    ],
    "en": [
      "You should remember the value of each binary bit, but let me put them up here anyway."
    ],
    "ru": [
      "Вы должны запомнить значение каждого двоичного бита, но позвольте мне все равно разместить их здесь."
    ]
  },
  {
    "time": [
      356.849,
      366.05
    ],
    "en": [
      "From the right, 1, 2, 4, 8, 16, 32, 64, and 128."
    ],
    "ru": [
      "Справа: 1, 2, 4, 8, 16, 32, 64 и 128."
    ]
  },
  {
    "time": [
      366.05,
      369.939
    ],
    "en": [
      "Notice that the LAST bit of the network portion is 64."
    ],
    "ru": [
      "Обратите внимание, что ПОСЛЕДНИЙ бит сетевой части равен 64."
    ]
  },
  {
    "time": [
      369.939,
      376.229
    ],
    "en": [
      "This means that, to find the next subnet, we just have to add 64. Let’s see."
    ],
    "ru": [
      "Это означает, что для поиска следующей подсети нам просто нужно добавить 64. Давайте посмотрим."
    ]
  },
  {
    "time": [
      376.229,
      383.809
    ],
    "en": [
      "Let’s see. Add 64, and we get 192.168.1.64, which is the network address of subnet 2."
    ],
    "ru": [
      "Давайте посмотрим. Добавьте 64, и мы получим 192.168.1.64, который является сетевым адресом подсети 2."
    ]
  },
  {
    "time": [
      383.809,
      391.199
    ],
    "en": [
      "Add 64 again and we get 192.168.1.128, which is the network address of subnet 3."
    ],
    "ru": [
      "Снова сложите 64, и мы получим 192.168.1.128, который является сетевым адресом подсети 3."
    ]
  },
  {
    "time": [
      391.199,
      400.5
    ],
    "en": [
      "Finally, add 64 again and we get 192.168.1.192, which is the network address of subnet 4."
    ],
    "ru": [
      "Наконец, снова добавьте 64, и мы получим 192.168.1.192, который является сетевым адресом подсети 4."
    ]
  },
  {
    "time": [
      400.5,
      408.569
    ],
    "en": [
      "So, as you can see, by adding 64 each time, we were able to find the network addresses of each subnet."
    ],
    "ru": [
      "Итак, как видите, добавляя 64 каждый раз, мы смогли найти сетевые адреса каждой подсети."
    ]
  },
  {
    "time": [
      408.569,
      411.409
    ],
    "en": [
      "of each subnet. Now let’s try another similar exercise."
    ],
    "ru": [
      "каждой подсети. А теперь попробуем еще одно подобное упражнение."
    ]
  },
  {
    "time": [
      411.409,
      417.979
    ],
    "en": [
      "We have been given the 192.168.255.0/24 network, and have been asked to divide the network"
    ],
    "ru": [
      "Нам дали сеть 192.168.255.0/24 и попросили разделить сеть"
    ]
  },
  {
    "time": [
      417.979,
      421.339
    ],
    "en": [
      "into five subnets of equal size."
    ],
    "ru": [
      "на пять подсетей одинакового размера."
    ]
  },
  {
    "time": [
      421.339,
      425.849
    ],
    "en": [
      "In this case, the number of hosts in each subnet hasn’t been specified, so let’s"
    ],
    "ru": [
      "В этом случае количество хостов в каждой подсети не указано, поэтому давайте"
    ]
  },
  {
    "time": [
      425.849,
      429.139
    ],
    "en": [
      "make five subnets that are as large as they can be."
    ],
    "ru": [
      "сделайте пять подсетей максимально большого размера."
    ]
  },
  {
    "time": [
      429.139,
      433.729
    ],
    "en": [
      "So, all we have to do to solve this problem is find how many bits we have to ‘borrow’"
    ],
    "ru": [
      "Итак, все, что нам нужно сделать, чтобы решить эту проблему, - это определить, сколько битов мы должны «одолжить»."
    ]
  },
  {
    "time": [
      433.729,
      435.58
    ],
    "en": [
      "from the host portion."
    ],
    "ru": [
      "от принимающей части."
    ]
  },
  {
    "time": [
      435.58,
      440.179
    ],
    "en": [
      "Currently, we are borrowing 0 bits from the host portion."
    ],
    "ru": [
      "В настоящее время мы заимствуем 0 бит из хост-части."
    ]
  },
  {
    "time": [
      440.179,
      448.869
    ],
    "en": [
      "That means that we can’t make any subnets, we just have one network, 192.168.255.0/24."
    ],
    "ru": [
      "Это означает, что мы не можем создать никаких подсетей, у нас есть только одна сеть, 192.168.255.0/24."
    ]
  },
  {
    "time": [
      448.869,
      453.869
    ],
    "en": [
      "If we borrow one bit, it now becomes a /25 network."
    ],
    "ru": [
      "Если мы заимствуем один бит, он станет сетью / 25."
    ]
  },
  {
    "time": [
      453.869,
      458.27
    ],
    "en": [
      "Borrowing one bit also means we can make 2 subnets. Why is that?"
    ],
    "ru": [
      "Заимствование одного бита также означает, что мы можем создать 2 подсети. Это почему?"
    ]
  },
  {
    "time": [
      458.27,
      462.94
    ],
    "en": [
      "Why is that? Well, all of the original network bits, the blue bits, cannot be changed."
    ],
    "ru": [
      "Это почему? Что ж, все исходные сетевые биты, синие биты, не могут быть изменены."
    ]
  },
  {
    "time": [
      462.94,
      465.499
    ],
    "en": [
      "That is the network we received."
    ],
    "ru": [
      "Это сеть, которую мы получили."
    ]
  },
  {
    "time": [
      465.499,
      469.80899999999997
    ],
    "en": [
      "Howevever the purple bit, the bit we borrowed from the host portion, we can change, and"
    ],
    "ru": [
      "Тем не менее, фиолетовый бит, бит, который мы позаимствовали из основной части, мы можем изменить, и"
    ]
  },
  {
    "time": [
      469.80899999999997,
      472.569
    ],
    "en": [
      "it can be either 0 or 1."
    ],
    "ru": [
      "это может быть либо 0, либо 1."
    ]
  },
  {
    "time": [
      472.569,
      484.93
    ],
    "en": [
      "If its 0 we have the 192.168.255.0/25 network, If its 1 we have the 192.168.255.128/25 network."
    ],
    "ru": [
      "Если его 0, у нас есть сеть 192.168.255.0/25, если его 1, у нас есть сеть 192.168.255.128/25."
    ]
  },
  {
    "time": [
      484.93,
      492.969
    ],
    "en": [
      "The formula for the number of subnets is 2 to the power of X, and X is the number of borrowed bits."
    ],
    "ru": [
      "Формула для количества подсетей - 2 в степени X, а X - количество заимствованных битов."
    ]
  },
  {
    "time": [
      492.969,
      497.509
    ],
    "en": [
      "borrowed bits. This is similar to calculating the number of hosts in a subnet, which is 2 to the power"
    ],
    "ru": [
      "заимствованные биты. Это похоже на вычисление количества хостов в подсети, которое равно 2 в степени."
    ]
  },
  {
    "time": [
      497.509,
      502.489
    ],
    "en": [
      "of N -2 , and N is the number of host bits."
    ],
    "ru": [
      "N -2, а N - количество битов хоста."
    ]
  },
  {
    "time": [
      502.489,
      508.74
    ],
    "en": [
      "We subtract 2 for the network address and broadcast address, which cant be assigned to hosts."
    ],
    "ru": [
      "Мы вычитаем 2 для сетевого адреса и широковещательного адреса, которые не могут быть назначены хостам."
    ]
  },
  {
    "time": [
      508.74,
      514.479
    ],
    "en": [
      "to hosts. However, when calculating the number of subnets, we dont have to subtract 2, so its simply"
    ],
    "ru": [
      "хозяевам. Однако при подсчете количества подсетей нам не нужно вычитать 2, поэтому просто"
    ]
  },
  {
    "time": [
      514.479,
      517.68
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
      514.479,
      517.68
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
      517.68,
      523.06
    ],
    "en": [
      "Anyway, we need 5 subnets, so borrowing 1 bit isnt enough."
    ],
    "ru": [
      "В любом случае, нам нужно 5 подсетей, поэтому заимствования 1 бита недостаточно."
    ]
  },
  {
    "time": [
      523.06,
      525.02
    ],
    "en": [
      "What if we borrow 2 bits, like this?"
    ],
    "ru": [
      "Что, если мы займем 2 бита, вот так?"
    ]
  },
  {
    "time": [
      525.02,
      532.67
    ],
    "en": [
      "Well, 2 to the power of 2 is 4, so borrowing 2 bits allows us to make 4 subnets."
    ],
    "ru": [
      "Итак, 2 в степени 2 равно 4, поэтому заимствование 2 бита позволяет нам создать 4 подсети."
    ]
  },
  {
    "time": [
      532.67,
      534.86
    ],
    "en": [
      "Still not enough, we need 5."
    ],
    "ru": [
      "Все еще недостаточно, нам нужно 5."
    ]
  },
  {
    "time": [
      534.86,
      537.47
    ],
    "en": [
      "So lets borrow another bit."
    ],
    "ru": [
      "Так что давайте позаимствуем еще немного."
    ]
  },
  {
    "time": [
      537.47,
      540.86
    ],
    "en": [
      "If we borrow 3 bits, how many subnets can we make?"
    ],
    "ru": [
      "Если мы заимствуем 3 бита, сколько подсетей мы сможем сделать?"
    ]
  },
  {
    "time": [
      540.86,
      545.17
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
      540.86,
      545.17
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
      545.17,
      547.12
    ],
    "en": [
      "So, this is our answer."
    ],
    "ru": [
      "Итак, это наш ответ."
    ]
  },
  {
    "time": [
      547.12,
      552.87
    ],
    "en": [
      "It’s more subnets than we need, we need just 5, but if we borrow only 2 bits and use"
    ],
    "ru": [
      "Подсетей больше, чем нам нужно, нам нужно всего 5, но если мы заимствуем только 2 бита и используем"
    ]
  },
  {
    "time": [
      552.87,
      556.41
    ],
    "en": [
      "a /26 mask we won’t have enough."
    ],
    "ru": [
      "а / 26 маски нам не хватит."
    ]
  },
  {
    "time": [
      556.41,
      560.79
    ],
    "en": [
      "As I said in the last video, you can’t always make the numbers exactly match the number"
    ],
    "ru": [
      "Как я уже говорил в прошлом видео, не всегда можно добиться того, чтобы числа в точности совпадали с числом"
    ]
  },
  {
    "time": [
      560.79,
      564.0
    ],
    "en": [
      "of subnets or number of hosts you need."
    ],
    "ru": [
      "подсетей или необходимое количество хостов."
    ]
  },
  {
    "time": [
      564.0,
      570.73
    ],
    "en": [
      "So, our first subnet will be 192.168.255.0/27."
    ],
    "ru": [
      "Итак, наша первая подсеть будет 192.168.255.0/27."
    ]
  },
  {
    "time": [
      570.73,
      572.23
    ],
    "en": [
      "Here it is written in binary."
    ],
    "ru": [
      "Здесь это записано в двоичном формате."
    ]
  },
  {
    "time": [
      572.23,
      576.22
    ],
    "en": [
      "Here’s the network portion, and here’s the host portion."
    ],
    "ru": [
      "Вот сетевая часть, а вот часть хоста."
    ]
  },
  {
    "time": [
      576.22,
      579.66
    ],
    "en": [
      "Let’s look at just the last octet once more."
    ],
    "ru": [
      "Давайте еще раз посмотрим только на последний октет."
    ]
  },
  {
    "time": [
      579.66,
      581.9
    ],
    "en": [
      "Here’s just the last octet."
    ],
    "ru": [
      "Вот только последний октет."
    ]
  },
  {
    "time": [
      581.9,
      586.94
    ],
    "en": [
      "What’s the value of the last bit of the network portion? It’s 32."
    ],
    "ru": [
      "Каково значение последнего бита сетевой части? Это 32 года."
    ]
  },
  {
    "time": [
      586.94,
      593.97
    ],
    "en": [
      "It’s 32. So, using the trick I introduced before, we should be able to calculate the other subnets now."
    ],
    "ru": [
      "Это 32. Итак, используя трюк, который я представил ранее, теперь мы сможем вычислить другие подсети."
    ]
  },
  {
    "time": [
      593.97,
      599.9
    ],
    "en": [
      "now. As I said before, subnet 1 is 192.168.255.0/27."
    ],
    "ru": [
      "Теперь. Как я уже сказал, подсеть 1 - 192.168.255.0/27."
    ]
  },
  {
    "time": [
      599.9,
      607.08
    ],
    "en": [
      "Add 32, and we get subnet 2, which is 192.168.255.32/27."
    ],
    "ru": [
      "Добавьте 32, и мы получим подсеть 2, то есть 192.168.255.32/27."
    ]
  },
  {
    "time": [
      607.08,
      614.8
    ],
    "en": [
      "Add 32 again, and we get subnet 3, 192.168.255.64/27."
    ],
    "ru": [
      "Снова сложите 32, и мы получим подсеть 3, 192.168.255.64/27."
    ]
  },
  {
    "time": [
      614.8,
      625.58
    ],
    "en": [
      "Subnet 4 is 192.168.255.96/27, and subnet 5 is 192.168.255.128/27."
    ],
    "ru": [
      "Подсеть 4 - 192.168.255.96/27, а подсеть 5 - 192.168.255.128/27."
    ]
  },
  {
    "time": [
      625.58,
      631.46
    ],
    "en": [
      "Okay, we’ve made up 5 subnets, as our requirements were to divide the network into 5 subnets."
    ],
    "ru": [
      "Хорошо, мы создали 5 подсетей, поскольку наши требования заключались в том, чтобы разделить сеть на 5 подсетей."
    ]
  },
  {
    "time": [
      631.46,
      638.86
    ],
    "en": [
      "However, our /27 prefix length allows up to 8 subnets to be made from the address range."
    ],
    "ru": [
      "Однако наша длина префикса / 27 позволяет создать до 8 подсетей из диапазона адресов."
    ]
  },
  {
    "time": [
      638.86,
      648.2090000000001
    ],
    "en": [
      "These three remaining subnets are 192.168.255.160, .192, and .224,/27."
    ],
    "ru": [
      "Остальные три подсети - 192.168.255.160, .192 и .224, / 27."
    ]
  },
  {
    "time": [
      648.2090000000001,
      653.649
    ],
    "en": [
      "Here’s another type of subnetting question you might find."
    ],
    "ru": [
      "Вот еще один тип вопроса о подсети, который вы можете найти."
    ]
  },
  {
    "time": [
      653.649,
      660.209
    ],
    "en": [
      "What subnet does host 192.168.5.57/27 belong to?"
    ],
    "ru": [
      "К какой подсети принадлежит хост 192.168.5.57/27?"
    ]
  },
  {
    "time": [
      660.209,
      669.329
    ],
    "en": [
      "So, we have the IP address of a host, 192.168.5.57, and don’t know the network address of the subnet."
    ],
    "ru": [
      "Итак, у нас есть IP-адрес хоста 192.168.5.57, и мы не знаем сетевого адреса подсети."
    ]
  },
  {
    "time": [
      669.329,
      671.139
    ],
    "en": [
      "subnet. Let’s see how we can figure this out."
    ],
    "ru": [
      "подсеть. Посмотрим, как мы сможем это выяснить."
    ]
  },
  {
    "time": [
      671.139,
      674.269
    ],
    "en": [
      "It’s actually a fairly simple process."
    ],
    "ru": [
      "На самом деле это довольно простой процесс."
    ]
  },
  {
    "time": [
      674.269,
      679.47
    ],
    "en": [
      "Here’s 192.168.5.57 in binary and dotted decimal."
    ],
    "ru": [
      "Вот 192.168.5.57 в двоичном и десятичном формате с точками."
    ]
  },
  {
    "time": [
      679.47,
      684.48
    ],
    "en": [
      "However, it’s /27, so let’s show the borrowed bits."
    ],
    "ru": [
      "Однако это / 27, поэтому давайте покажем заимствованные биты."
    ]
  },
  {
    "time": [
      684.48,
      687.9
    ],
    "en": [
      "These three purple bits are borrowed and added to the network portion."
    ],
    "ru": [
      "Эти три фиолетовых бита заимствованы и добавлены к сетевой части."
    ]
  },
  {
    "time": [
      687.9,
      693.99
    ],
    "en": [
      "Now, to find the network address we simply need to change all of the host bits to 0."
    ],
    "ru": [
      "Теперь, чтобы найти сетевой адрес, нам просто нужно изменить все биты хоста на 0."
    ]
  },
  {
    "time": [
      693.99,
      699.79
    ],
    "en": [
      "Now the last octet is 0010 0000."
    ],
    "ru": [
      "Теперь последний октет - 0010 0000."
    ]
  },
  {
    "time": [
      699.79,
      705.5
    ],
    "en": [
      "Change that back to dotted decimal, and you get 192.168.5.32."
    ],
    "ru": [
      "Измените это обратно на десятичное число с точками, и вы получите 192.168.5.32."
    ]
  },
  {
    "time": [
      705.5,
      707.62
    ],
    "en": [
      "So, that’s the answer."
    ],
    "ru": [
      "Итак, вот и ответ."
    ]
  },
  {
    "time": [
      707.62,
      717.54
    ],
    "en": [
      "The host 192.168.5.57/27 belongs to the subnet 192.168.5.32/27."
    ],
    "ru": [
      "Хост 192.168.5.57/27 принадлежит подсети 192.168.5.32/27."
    ]
  },
  {
    "time": [
      717.54,
      720.949
    ],
    "en": [
      "Let’s do one more for practice."
    ],
    "ru": [
      "Сделаем еще один для практики."
    ]
  },
  {
    "time": [
      720.949,
      728.079
    ],
    "en": [
      "What subnet does host 192.168.29.219/29 belong to?"
    ],
    "ru": [
      "К какой подсети принадлежит хост 192.168.29.219/29?"
    ]
  },
  {
    "time": [
      728.079,
      738.12
    ],
    "en": [
      "Pause the video now and try to figure out the answer for yourself…..okay, let’s check."
    ],
    "ru": [
      "Поставьте видео на паузу и попробуйте придумать ответ для себя… .. ладно, давай проверим."
    ]
  },
  {
    "time": [
      738.12,
      742.81
    ],
    "en": [
      "check. Write out the address in binary first."
    ],
    "ru": [
      "проверить. Сначала запишите адрес в двоичном формате."
    ]
  },
  {
    "time": [
      742.81,
      745.279
    ],
    "en": [
      "Identify where the network part ends."
    ],
    "ru": [
      "Определите, где заканчивается сетевая часть."
    ]
  },
  {
    "time": [
      745.279,
      751.22
    ],
    "en": [
      "In this case, 5 bits are borrowed from the host portion and added to the network portion."
    ],
    "ru": [
      "В этом случае 5 бит заимствованы из части хоста и добавлены к сетевой части."
    ]
  },
  {
    "time": [
      751.22,
      758.02
    ],
    "en": [
      "Set all of the host bits to 0. and then convert back to dotted decimal. There’s our answer."
    ],
    "ru": [
      "Установите для всех битов хоста значение 0, а затем преобразуйте их обратно в десятичное число с точками. Вот наш ответ."
    ]
  },
  {
    "time": [
      758.02,
      768.54
    ],
    "en": [
      "There’s our answer. So, host 192.168.29.219/29 belongs to the subnet 192.168.29.216/29."
    ],
    "ru": [
      "Вот наш ответ. Итак, хост 192.168.29.219/29 принадлежит подсети 192.168.29.216/29."
    ]
  },
  {
    "time": [
      768.54,
      772.999
    ],
    "en": [
      "Okay, let’s review some numbers."
    ],
    "ru": [
      "Ладно, давайте еще раз подведем итоги."
    ]
  },
  {
    "time": [
      772.999,
      777.62
    ],
    "en": [
      "This is a table of the different subnet sizes for class C networks."
    ],
    "ru": [
      "Это таблица различных размеров подсетей для сетей класса C."
    ]
  },
  {
    "time": [
      777.62,
      784.899
    ],
    "en": [
      "For example, with a /25 prefix length, you divide the network into 2, there are 2 subnets."
    ],
    "ru": [
      "Например, с длиной префикса / 25 вы делите сеть на 2, есть 2 подсети."
    ]
  },
  {
    "time": [
      784.899,
      788.47
    ],
    "en": [
      "Also, each subnet can contain 126 hosts."
    ],
    "ru": [
      "Также каждая подсеть может содержать 126 хостов."
    ]
  },
  {
    "time": [
      788.47,
      793.3
    ],
    "en": [
      "I recommend that you memorize these numbers, it will help you perform subnetting faster"
    ],
    "ru": [
      "Рекомендую запомнить эти числа, это поможет быстрее выполнить разбиение на подсети."
    ]
  },
  {
    "time": [
      793.3,
      797.649
    ],
    "en": [
      "and easier than if you have to calculate everything every single time."
    ],
    "ru": [
      "и проще, чем если бы вам приходилось все рассчитывать каждый раз."
    ]
  },
  {
    "time": [
      797.649,
      801.6
    ],
    "en": [
      "Although, these are fairly simple to calculate."
    ],
    "ru": [
      "Хотя их довольно просто вычислить."
    ]
  },
  {
    "time": [
      801.6,
      807.829
    ],
    "en": [
      "For the number of subnets, each additional bit that you borrow doubles the number of subnets."
    ],
    "ru": [
      "Что касается количества подсетей, каждый дополнительный бит, который вы заимствуете, удваивает количество подсетей."
    ]
  },
  {
    "time": [
      807.829,
      813.269
    ],
    "en": [
      "For number of hosts, each host bits doubles the amount of hosts, except you have to subtract"
    ],
    "ru": [
      "Для количества хостов каждый бит хоста удваивает количество хостов, за исключением того, что вам нужно вычесть"
    ]
  },
  {
    "time": [
      813.269,
      817.3
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
      813.269,
      817.3
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
      817.3,
      820.91
    ],
    "en": [
      "Take note of /31, the number of hosts is 0."
    ],
    "ru": [
      "Обратите внимание на / 31, количество хостов равно 0."
    ]
  },
  {
    "time": [
      820.91,
      826.12
    ],
    "en": [
      "I mentioned this in the last video, but it’s because there is only a single host bit, so"
    ],
    "ru": [
      "Я упоминал об этом в прошлом видео, но это потому, что есть только один бит хоста, поэтому"
    ]
  },
  {
    "time": [
      826.12,
      831.529
    ],
    "en": [
      "there are only two possible addresses, which are taken by the network and broadcast address."
    ],
    "ru": [
      "есть только два возможных адреса, которые занимают сеть и широковещательный адрес."
    ]
  },
  {
    "time": [
      831.529,
      836.87
    ],
    "en": [
      "However, for a point-to-point connection, you can actually use a /31 and assign those"
    ],
    "ru": [
      "Однако для соединения точка-точка вы можете использовать / 31 и назначить эти"
    ]
  },
  {
    "time": [
      836.87,
      843.63
    ],
    "en": [
      "two addresses to each end of the connection, and have no network or broadcast addresses."
    ],
    "ru": [
      "два адреса на каждом конце соединения и не имеют сетевых или широковещательных адресов."
    ]
  },
  {
    "time": [
      843.63,
      849.449
    ],
    "en": [
      "Also /32 technically uses all bits for the network address, allowing no hosts, but you"
    ],
    "ru": [
      "Также / 32 технически использует все биты для сетевого адреса, не разрешая никаких хостов, но вы"
    ]
  },
  {
    "time": [
      849.449,
      855.54
    ],
    "en": [
      "can assign a /32 mask to identify a specific host when writing routes and such, and in"
    ],
    "ru": [
      "может назначить маску / 32 для идентификации конкретного хоста при написании маршрутов и т. д., а также в"
    ]
  },
  {
    "time": [
      855.54,
      858.93
    ],
    "en": [
      "some other special cases."
    ],
    "ru": [
      "некоторые другие частные случаи."
    ]
  },
  {
    "time": [
      858.93,
      864.87
    ],
    "en": [
      "Now let’s finally take a look at subnetting some larger networks, specifically Class B."
    ],
    "ru": [
      "Теперь давайте, наконец, рассмотрим разделение на подсети некоторых более крупных сетей, в частности класса B."
    ]
  },
  {
    "time": [
      864.87,
      869.41
    ],
    "en": [
      "Looking at this chart again, you can see that there are many more host bits, and therefore"
    ],
    "ru": [
      "Еще раз посмотрев на эту диаграмму, вы увидите, что битов хоста намного больше, и, следовательно,"
    ]
  },
  {
    "time": [
      869.41,
      875.56
    ],
    "en": [
      "many more possible subnets, that can be created with a class B network than with a class C network."
    ],
    "ru": [
      "гораздо больше возможных подсетей, которые могут быть созданы с сетью класса B, чем с сетью класса C."
    ]
  },
  {
    "time": [
      875.56,
      879.74
    ],
    "en": [
      "network. However, the process of subnetting is EXACTLY THE SAME."
    ],
    "ru": [
      "сеть. Тем не менее, процесс разделения на подсети ИМЕННО ТАК ЖЕ."
    ]
  },
  {
    "time": [
      879.74,
      883.72
    ],
    "en": [
      "So I’ll just walk you through a couple examples with class B networks, and then we’ll leave"
    ],
    "ru": [
      "Я просто покажу вам пару примеров сетей класса B, а затем мы оставим"
    ]
  },
  {
    "time": [
      883.72,
      888.67
    ],
    "en": [
      "class A networks for the last video of this subnetting series."
    ],
    "ru": [
      "сети класса A для последнего видео в этой серии о подсетях."
    ]
  },
  {
    "time": [
      888.67,
      893.949
    ],
    "en": [
      "You have been given the 172.16.0.0/16 network."
    ],
    "ru": [
      "Вам предоставлена ​​сеть 172.16.0.0/16."
    ]
  },
  {
    "time": [
      893.949,
      898.319
    ],
    "en": [
      "You are asked to create 80 subnets for your company’s various LANs."
    ],
    "ru": [
      "Вам предлагается создать 80 подсетей для различных локальных сетей вашей компании."
    ]
  },
  {
    "time": [
      898.319,
      900.72
    ],
    "en": [
      "What prefix length should you use?"
    ],
    "ru": [
      "Какую длину префикса следует использовать?"
    ]
  },
  {
    "time": [
      900.72,
      906.98
    ],
    "en": [
      "Okay, this is really a simple question, and we can follow the exact same process as last time."
    ],
    "ru": [
      "Хорошо, это действительно простой вопрос, и мы можем следовать тому же процессу, что и в прошлый раз."
    ]
  },
  {
    "time": [
      906.98,
      915.04
    ],
    "en": [
      "time. Pause the video here if you want to try it by yourself….okay, let’s figure it out."
    ],
    "ru": [
      "время. Приостановите видео здесь, если хотите попробовать сами… ладно, давайте разберемся."
    ]
  },
  {
    "time": [
      915.04,
      921.67
    ],
    "en": [
      "Again we can simply use the 2 to the power of X formula, where X is the number of borrowed bits."
    ],
    "ru": [
      "Опять же, мы можем просто использовать 2 в степени формулы X, где X - количество заимствованных битов."
    ]
  },
  {
    "time": [
      921.67,
      928.92
    ],
    "en": [
      "bits. If we borrow no bits, we can’t make any subnets, we just have one large /16 network."
    ],
    "ru": [
      "биты. Если мы не заимствуем биты, мы не сможем создать подсети, у нас будет только одна большая сеть / 16."
    ]
  },
  {
    "time": [
      928.92,
      934.759
    ],
    "en": [
      "If we borrow one bit we can make 2 subnets, because 2 to the power of 1 is 2."
    ],
    "ru": [
      "Если мы заимствуем один бит, мы сможем создать 2 подсети, потому что 2 в степени 1 равно 2."
    ]
  },
  {
    "time": [
      934.759,
      943.84
    ],
    "en": [
      "This gives us a prefix length of /17, and if we write this subnet mask in dotted decimal it is 255.255.128.0."
    ],
    "ru": [
      "Это дает нам длину префикса / 17, и если мы запишем эту маску подсети в десятичном формате с точками, это будет 255.255.128.0."
    ]
  },
  {
    "time": [
      943.84,
      949.47
    ],
    "en": [
      "it is 255.255.128.0. Remember, when you enter commands in the Cisco CLI you can’t use the CIDR notation like"
    ],
    "ru": [
      "это 255.255.128.0. Помните, что когда вы вводите команды в Cisco CLI, вы не можете использовать нотацию CIDR, например"
    ]
  },
  {
    "time": [
      949.47,
      955.94
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
      949.47,
      955.94
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
      955.94,
      962.12
    ],
    "en": [
      "Anyway, 2 subnets isn’t enough for our needs, so let’s borrow another bit."
    ],
    "ru": [
      "В любом случае, двух подсетей для наших нужд недостаточно, так что давайте позаимствуем еще немного."
    ]
  },
  {
    "time": [
      962.12,
      964.689
    ],
    "en": [
      "Borrowing 2 bits allows for 4 subnets."
    ],
    "ru": [
      "Заимствование 2 бита позволяет создать 4 подсети."
    ]
  },
  {
    "time": [
      964.689,
      972.889
    ],
    "en": [
      "This is a /18 prefix length, and the subnet mask is written as 255.255.192.0 in dotted decimal."
    ],
    "ru": [
      "Это длина префикса / 18, а маска подсети записывается как 255.255.192.0 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      972.889,
      975.87
    ],
    "en": [
      "decimal. Let’s borrow another bit."
    ],
    "ru": [
      "десятичный. Давайте позаимствуем еще немного."
    ]
  },
  {
    "time": [
      975.87,
      981.24
    ],
    "en": [
      "Borrowing 3 bits gives us 8 subnets, and a /19 prefix length."
    ],
    "ru": [
      "Заимствование 3 бита дает нам 8 подсетей и длину префикса / 19."
    ]
  },
  {
    "time": [
      981.24,
      986.74
    ],
    "en": [
      "The subnet mask is 255.255.224.0 in dotted decimal."
    ],
    "ru": [
      "Маска подсети - 255.255.224.0 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      986.74,
      991.16
    ],
    "en": [
      "Still not enough subnets, so let’s borrow another bit."
    ],
    "ru": [
      "По-прежнему недостаточно подсетей, так что давайте позаимствуем еще немного."
    ]
  },
  {
    "time": [
      991.16,
      996.95
    ],
    "en": [
      "Borrowing 4 bits allows us to create 16 subnets, and uses a /20 prefix length."
    ],
    "ru": [
      "Заимствование 4 бита позволяет нам создать 16 подсетей и использовать длину префикса / 20."
    ]
  },
  {
    "time": [
      996.95,
      1004.2090000000001
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
      996.95,
      1004.2090000000001
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
      1004.2090000000001,
      1015.069
    ],
    "en": [
      "Borrowing 5 bits gives us 32 subnets, and the prefix length is /21, which is 255.255.248.0 in dotted decimal."
    ],
    "ru": [
      "Заимствование 5 бит дает нам 32 подсети, а длина префикса составляет / 21, что равно 255.255.248.0 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      1015.069,
      1019.379
    ],
    "en": [
      "in dotted decimal. Borrowing 6 bits gives us 64 subnets. Getting close."
    ],
    "ru": [
      "в десятичном формате с точками. Заимствование 6 бит дает нам 64 подсети. Приближаться."
    ]
  },
  {
    "time": [
      1019.379,
      1025.24
    ],
    "en": [
      "Getting close. The prefix length is /22, which is 255.255.252.0 in dotted decimal."
    ],
    "ru": [
      "Приближаться. Длина префикса - / 22, что равно 255.255.252.0 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      1025.24,
      1030.36
    ],
    "en": [
      "Let’s borrow one more bit, which should be enough."
    ],
    "ru": [
      "Давайте позаимствуем еще один бит, которого должно хватить."
    ]
  },
  {
    "time": [
      1030.36,
      1034.45
    ],
    "en": [
      "Borrowing 7 bits gives us 128 subnets."
    ],
    "ru": [
      "Заимствование 7 бит дает нам 128 подсетей."
    ]
  },
  {
    "time": [
      1034.45,
      1041.22
    ],
    "en": [
      "The prefix length is /23, which is 255.255.254.0 in dotted decimal."
    ],
    "ru": [
      "Длина префикса - / 23, что равно 255.255.254.0 в десятичном формате с точками."
    ]
  },
  {
    "time": [
      1041.22,
      1047.88
    ],
    "en": [
      "So, this is the correct answer, we should use a /23 prefix length so we can create the"
    ],
    "ru": [
      "Итак, это правильный ответ, мы должны использовать длину префикса / 23, чтобы мы могли создать"
    ]
  },
  {
    "time": [
      1047.88,
      1049.45
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
      1047.88,
      1049.45
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
      1049.45,
      1057.1
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
      1049.45,
      1057.1
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
      1057.1,
      1061.28
    ],
    "en": [
      "I won’t show you all 80 subnets of course, but let’s look at some of the subnets that"
    ],
    "ru": [
      "Я, конечно, не буду показывать вам все 80 подсетей, но давайте посмотрим на некоторые из подсетей, которые"
    ]
  },
  {
    "time": [
      1061.28,
      1068.059
    ],
    "en": [
      "can be made, the first being 172.16.0.0/23 of course."
    ],
    "ru": [
      "можно сделать, первый, конечно, 172.16.0.0/23."
    ]
  },
  {
    "time": [
      1068.059,
      1077.62
    ],
    "en": [
      "The next is 172.16.2.0/23, notice I changed the last bit of the network portion to 1."
    ],
    "ru": [
      "Следующим идет 172.16.2.0/23, обратите внимание, я изменил последний бит сетевой части на 1."
    ]
  },
  {
    "time": [
      1077.62,
      1088.37
    ],
    "en": [
      "Next is 172.16.4.0/23. then 172.16.6.0, 172.16.8.0, etc."
    ],
    "ru": [
      "Далее идет 172.16.4.0/23. затем 172.16.6.0, 172.16.8.0 и т. д."
    ]
  },
  {
    "time": [
      1088.37,
      1092.99
    ],
    "en": [
      "Let’s do another similar question."
    ],
    "ru": [
      "Зададим еще один похожий вопрос."
    ]
  },
  {
    "time": [
      1092.99,
      1098.27
    ],
    "en": [
      "You have been given the 172.22.0.0/16 network."
    ],
    "ru": [
      "Вам предоставлена ​​сеть 172.22.0.0/16."
    ]
  },
  {
    "time": [
      1098.27,
      1102.809
    ],
    "en": [
      "You are required to divide the network into 500 separate subnets."
    ],
    "ru": [
      "Вам необходимо разделить сеть на 500 отдельных подсетей."
    ]
  },
  {
    "time": [
      1102.809,
      1105.6
    ],
    "en": [
      "What prefix length should you use?"
    ],
    "ru": [
      "Какую длину префикса следует использовать?"
    ]
  },
  {
    "time": [
      1105.6,
      1109.23
    ],
    "en": [
      "Pause the video and try to figure this one out for yourself, and I’ll show you the answer"
    ],
    "ru": [
      "Поставьте видео на паузу и попытайтесь разобраться в этом сами, и я покажу вам ответ"
    ]
  },
  {
    "time": [
      1109.23,
      1116.22
    ],
    "en": [
      "in the next slide…...okay, let’s go to the next slide."
    ],
    "ru": [
      "на следующем слайде ... ... хорошо, перейдем к следующему слайду."
    ]
  },
  {
    "time": [
      1116.22,
      1120.12
    ],
    "en": [
      "So, the correct answer is /25."
    ],
    "ru": [
      "Итак, правильный ответ - / 25."
    ]
  },
  {
    "time": [
      1120.12,
      1125.27
    ],
    "en": [
      "We need to divide this class B network into 500 subnets, so that means we have to borrow"
    ],
    "ru": [
      "Нам нужно разделить эту сеть класса B на 500 подсетей, что означает, что мы должны заимствовать"
    ]
  },
  {
    "time": [
      1125.27,
      1130.12
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
      1125.27,
      1130.12
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
      1130.12,
      1135.99
    ],
    "en": [
      "Notice that you can borrow bits even from the last octet, so you can use /25, /26, /27,"
    ],
    "ru": [
      "Обратите внимание, что вы можете заимствовать биты даже из последнего октета, поэтому вы можете использовать / 25, / 26, / 27,"
    ]
  },
  {
    "time": [
      1135.99,
      1139.24
    ],
    "en": [
      "etc. even with a class B network."
    ],
    "ru": [
      "и т.д. даже с сетью класса B."
    ]
  },
  {
    "time": [
      1139.24,
      1142.659
    ],
    "en": [
      "Here’s another practice question."
    ],
    "ru": [
      "Вот еще один практический вопрос."
    ]
  },
  {
    "time": [
      1142.659,
      1147.669
    ],
    "en": [
      "You have been given the 172.18.0.0/16 network."
    ],
    "ru": [
      "Вам предоставлена ​​сеть 172.18.0.0/16."
    ]
  },
  {
    "time": [
      1147.669,
      1153.85
    ],
    "en": [
      "Your company requires 250 subnets with the same number of hosts per subnet."
    ],
    "ru": [
      "Вашей компании требуется 250 подсетей с одинаковым количеством хостов в каждой подсети."
    ]
  },
  {
    "time": [
      1153.85,
      1156.13
    ],
    "en": [
      "What prefix length should you use?"
    ],
    "ru": [
      "Какую длину префикса следует использовать?"
    ]
  },
  {
    "time": [
      1156.13,
      1160.73
    ],
    "en": [
      "This time you have to consider both the number of subnets and number of hosts."
    ],
    "ru": [
      "На этот раз вы должны учитывать как количество подсетей, так и количество хостов."
    ]
  },
  {
    "time": [
      1160.73,
      1164.36
    ],
    "en": [
      "Once again, pause the video to solve this yourself, and then I’ll give you the answer"
    ],
    "ru": [
      "Еще раз остановите видео, чтобы решить эту проблему самостоятельно, а затем я дам вам ответ"
    ]
  },
  {
    "time": [
      1164.36,
      1170.52
    ],
    "en": [
      "in the next slide…..okay, let’s check out the next slide."
    ],
    "ru": [
      "на следующем слайде ... Хорошо, давайте посмотрим на следующий слайд."
    ]
  },
  {
    "time": [
      1170.52,
      1174.21
    ],
    "en": [
      "So, the answer is /24."
    ],
    "ru": [
      "Итак, ответ - / 24."
    ]
  },
  {
    "time": [
      1174.21,
      1180.72
    ],
    "en": [
      "We need 250 subnets, and borrowing 8 bits allows us to make 256 subnets."
    ],
    "ru": [
      "Нам нужно 250 подсетей, а заимствование 8 бит позволяет нам создать 256 подсетей."
    ]
  },
  {
    "time": [
      1180.72,
      1188.45
    ],
    "en": [
      "We also need 250 hosts per subnet, and having 8 host bits allows for 254 hosts per subnet."
    ],
    "ru": [
      "Нам также нужно 250 хостов на подсеть, а наличие 8 бит хоста позволяет использовать 254 хоста в каждой подсети."
    ]
  },
  {
    "time": [
      1188.45,
      1194.51
    ],
    "en": [
      "Okay, before moving on to the quiz let’s do one more ‘identify the subnet’ problem,"
    ],
    "ru": [
      "Хорошо, прежде чем переходить к викторине, давайте еще раз \"определим подсеть\","
    ]
  },
  {
    "time": [
      1194.51,
      1197.3
    ],
    "en": [
      "this time with a class B network."
    ],
    "ru": [
      "на этот раз с сетью класса B."
    ]
  },
  {
    "time": [
      1197.3,
      1204.43
    ],
    "en": [
      "What subnet does host 172.25.217.192/21 belong to?"
    ],
    "ru": [
      "К какой подсети принадлежит хост 172.25.217.192/21?"
    ]
  },
  {
    "time": [
      1204.43,
      1208.27
    ],
    "en": [
      "The process is exactly the same as with a Class C network."
    ],
    "ru": [
      "Процесс точно такой же, как и в сети класса C."
    ]
  },
  {
    "time": [
      1208.27,
      1212.909
    ],
    "en": [
      "Write out the address in binary, change all of the host bits to 0, and then change it"
    ],
    "ru": [
      "Запишите адрес в двоичном формате, измените все биты хоста на 0, а затем измените его."
    ]
  },
  {
    "time": [
      1212.909,
      1215.52
    ],
    "en": [
      "back to dotted decimal."
    ],
    "ru": [
      "вернуться к десятичной дроби с точками."
    ]
  },
  {
    "time": [
      1215.52,
      1222.36
    ],
    "en": [
      "Pause the video if you want to try it on your own. Okay, let’s check the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, если хотите попробовать его самостоятельно. Хорошо, давай проверим ответ."
    ]
  },
  {
    "time": [
      1222.36,
      1228.14
    ],
    "en": [
      "Here’s the address written in binary, as usual the red bits are the host bits and the"
    ],
    "ru": [
      "Вот адрес, записанный в двоичном формате, как обычно, красные биты - это биты хоста, а"
    ]
  },
  {
    "time": [
      1228.14,
      1233.02
    ],
    "en": [
      "purple bits are the borrowed bits which are now part of the network portion."
    ],
    "ru": [
      "фиолетовые биты - это заимствованные биты, которые теперь являются частью сетевой части."
    ]
  },
  {
    "time": [
      1233.02,
      1241.0
    ],
    "en": [
      "Change the host bits all to 0, convert it back to dotted decimal and you get 172.25.216.0."
    ],
    "ru": [
      "Измените все биты хоста на 0, преобразуйте их обратно в десятичное число с точками, и вы получите 172.25.216.0."
    ]
  },
  {
    "time": [
      1241.0,
      1243.74
    ],
    "en": [
      "So, there’s the answer to the question."
    ],
    "ru": [
      "Итак, есть ответ на вопрос."
    ]
  },
  {
    "time": [
      1243.74,
      1253.299
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
      1243.74,
      1253.299
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
      1253.299,
      1258.77
    ],
    "en": [
      "The process was exactly the same as for a Class C network, there are just more host bits."
    ],
    "ru": [
      "Процесс был точно таким же, как и для сети класса C, только больше битов хоста."
    ]
  },
  {
    "time": [
      1258.77,
      1263.429
    ],
    "en": [
      "bits. Here’s a chart like the one I showed you for Class C addresses, showing the number"
    ],
    "ru": [
      "биты. Вот диаграмма, подобная той, что я вам показал для адресов класса C, с указанием числа"
    ]
  },
  {
    "time": [
      1263.429,
      1268.39
    ],
    "en": [
      "of available subnets, and the number of available host addresses for each prefix length when"
    ],
    "ru": [
      "доступных подсетей и количество доступных адресов узлов для каждой длины префикса, когда"
    ]
  },
  {
    "time": [
      1268.39,
      1270.059
    ],
    "en": [
      "subnetting a class B network."
    ],
    "ru": [
      "разбиение на подсети сети класса B."
    ]
  },
  {
    "time": [
      1270.059,
      1274.669
    ],
    "en": [
      "Don’t worry, it’s not necessary to memorize these numbers."
    ],
    "ru": [
      "Не волнуйтесь, эти числа запоминать не обязательно."
    ]
  },
  {
    "time": [
      1274.669,
      1276.96
    ],
    "en": [
      "That would simply be a waste of effort."
    ],
    "ru": [
      "Это было бы пустой тратой усилий."
    ]
  },
  {
    "time": [
      1276.96,
      1278.779
    ],
    "en": [
      "Just know the patterns."
    ],
    "ru": [
      "Просто знайте закономерности."
    ]
  },
  {
    "time": [
      1278.779,
      1286.33
    ],
    "en": [
      "For each borrowed bit, the number of subnets doubles, 2, 4 ,8, 16, 32, etc."
    ],
    "ru": [
      "Для каждого заимствованного бита количество подсетей удваивается, 2, 4, 8, 16, 32 и т. Д."
    ]
  },
  {
    "time": [
      1286.33,
      1291.46
    ],
    "en": [
      "For each host bit, the number of addresses in each subnet doubles, however you have to"
    ],
    "ru": [
      "Для каждого бита хоста количество адресов в каждой подсети удваивается, однако вы должны"
    ]
  },
  {
    "time": [
      1291.46,
      1296.179
    ],
    "en": [
      "subtract 2 to identify the number of usable host addresses."
    ],
    "ru": [
      "вычтите 2, чтобы определить количество используемых адресов хоста."
    ]
  },
  {
    "time": [
      1296.179,
      1300.24
    ],
    "en": [
      "As I said, don’t memorize this, just know the se patterns so you can calculate these"
    ],
    "ru": [
      "Как я уже сказал, не запоминайте это, просто знайте шаблоны se, чтобы вы могли их вычислить"
    ]
  },
  {
    "time": [
      1300.24,
      1302.98
    ],
    "en": [
      "when you need to."
    ],
    "ru": [
      "когда вам нужно."
    ]
  },
  {
    "time": [
      1302.98,
      1305.86
    ],
    "en": [
      "Okay let’s move on to today’s quiz."
    ],
    "ru": [
      "Хорошо, перейдем к сегодняшней викторине."
    ]
  },
  {
    "time": [
      1305.86,
      1312.029
    ],
    "en": [
      "I will give you five questions following the same pattern as the ones we solved in today’s video."
    ],
    "ru": [
      "Я дам вам пять вопросов по той же схеме, что и те, которые мы решили в сегодняшнем видео."
    ]
  },
  {
    "time": [
      1312.029,
      1315.54
    ],
    "en": [
      "video. Please post your answers in the comment section of this video. I will give the answers"
    ],
    "ru": [
      "видео. Пожалуйста, разместите свои ответы в разделе комментариев к этому видео. Я дам ответы"
    ]
  },
  {
    "time": [
      1315.54,
      1318.529
    ],
    "en": [
      "and explanations at the beginning of the next video."
    ],
    "ru": [
      "и пояснения в начале следующего видео."
    ]
  },
  {
    "time": [
      1318.529,
      1321.649
    ],
    "en": [
      "Let’s go to question 1."
    ],
    "ru": [
      "Перейдем к вопросу 1."
    ]
  },
  {
    "time": [
      1321.649,
      1326.87
    ],
    "en": [
      "You have been given the 172.30.0.0/16 network."
    ],
    "ru": [
      "Вам предоставлена ​​сеть 172.30.0.0/16."
    ]
  },
  {
    "time": [
      1326.87,
      1332.07
    ],
    "en": [
      "Your company requires 100 subnets with at least 500 hosts per subnet."
    ],
    "ru": [
      "Вашей компании требуется 100 подсетей, по крайней мере, с 500 хостами в каждой подсети."
    ]
  },
  {
    "time": [
      1332.07,
      1334.52
    ],
    "en": [
      "What prefix length should you use?"
    ],
    "ru": [
      "Какую длину префикса следует использовать?"
    ]
  },
  {
    "time": [
      1334.52,
      1339.8
    ],
    "en": [
      "Pause the video to find the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы найти ответ."
    ]
  },
  {
    "time": [
      1339.8,
      1342.769
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
      1342.769,
      1349.59
    ],
    "en": [
      "What subnet does host 172.21.111.201/20 belong to?"
    ],
    "ru": [
      "К какой подсети принадлежит хост 172.21.111.201/20?"
    ]
  },
  {
    "time": [
      1349.59,
      1354.24
    ],
    "en": [
      "Pause the video to find answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы найти ответ."
    ]
  },
  {
    "time": [
      1354.24,
      1358.4
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
      1358.4,
      1366.429
    ],
    "en": [
      "What is the broadcast address of the network 192.168.91.78/26 belongs to?"
    ],
    "ru": [
      "Какому широковещательному адресу принадлежит сеть 192.168.91.78/26?"
    ]
  },
  {
    "time": [
      1366.429,
      1371.549
    ],
    "en": [
      "Pause the video to find your answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы найти ответ."
    ]
  },
  {
    "time": [
      1371.549,
      1374.659
    ],
    "en": [
      "Okay let’s go to question 4."
    ],
    "ru": [
      "Хорошо, перейдем к вопросу 4."
    ]
  },
  {
    "time": [
      1374.659,
      1381.99
    ],
    "en": [
      "You divide the 172.16.0.0/16 network into 4 subnets of equal size."
    ],
    "ru": [
      "Вы делите сеть 172.16.0.0/16 на 4 подсети равного размера."
    ]
  },
  {
    "time": [
      1381.99,
      1386.44
    ],
    "en": [
      "Identify the network and broadcast addresses of the second subnet."
    ],
    "ru": [
      "Определите сетевой и широковещательный адреса второй подсети."
    ]
  },
  {
    "time": [
      1386.44,
      1391.07
    ],
    "en": [
      "Pause the video to find the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы найти ответ."
    ]
  },
  {
    "time": [
      1391.07,
      1395.52
    ],
    "en": [
      "Okay let’s go to the last question, question 5."
    ],
    "ru": [
      "Хорошо, перейдем к последнему вопросу, вопросу 5."
    ]
  },
  {
    "time": [
      1395.52,
      1403.26
    ],
    "en": [
      "You divide the 172.30.0.0/16 network into subnets of 1000 hosts each."
    ],
    "ru": [
      "Вы делите сеть 172.30.0.0/16 на подсети по 1000 хостов в каждой."
    ]
  },
  {
    "time": [
      1403.26,
      1405.95
    ],
    "en": [
      "How many subnets are you able to make?"
    ],
    "ru": [
      "Сколько подсетей вы можете создать?"
    ]
  },
  {
    "time": [
      1405.95,
      1410.64
    ],
    "en": [
      "Pause the video to find the answer."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы найти ответ."
    ]
  },
  {
    "time": [
      1410.64,
      1413.6
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
      1413.6,
      1417.01
    ],
    "en": [
      "Remember to leave all of your answers in the comment section of this video, and then wait"
    ],
    "ru": [
      "Не забудьте оставить все свои ответы в разделе комментариев к этому видео, а затем подождите."
    ]
  },
  {
    "time": [
      1417.01,
      1420.38
    ],
    "en": [
      "for the next video, where I’ll go over the answers and explanations."
    ],
    "ru": [
      "для следующего видео, где я рассмотрю ответы и объяснения."
    ]
  },
  {
    "time": [
      1420.38,
      1425.929
    ],
    "en": [
      "Also, there won’t be any flashcards or practice lab for this video."
    ],
    "ru": [
      "Кроме того, для этого видео не будет никаких карточек или практических занятий."
    ]
  },
  {
    "time": [
      1425.929,
      1430.409
    ],
    "en": [
      "After the next video I will make a practice lab so you can subnet a network and assign"
    ],
    "ru": [
      "После следующего видео я проведу практическую работу, чтобы вы могли подсеть сеть и назначить"
    ]
  },
  {
    "time": [
      1430.409,
      1434.73
    ],
    "en": [
      "IP addresses to the devices in each subnet, so wait for that."
    ],
    "ru": [
      "IP-адреса устройств в каждой подсети, так что дождитесь этого."
    ]
  },
  {
    "time": [
      1434.73,
      1439.78
    ],
    "en": [
      "Before I wrap up this video, I want to give a shoutout to my JCNP-level channel members,"
    ],
    "ru": [
      "Прежде чем завершить это видео, я хочу поблагодарить участников моего канала уровня JCNP:"
    ]
  },
  {
    "time": [
      1439.78,
      1442.84
    ],
    "en": [
      "Vance, Mike Yonatan, and Lito."
    ],
    "ru": [
      "Вэнс, Майк Йонатан и Лито."
    ]
  },
  {
    "time": [
      1442.84,
      1446.19
    ],
    "en": [
      "Thank you so much for your support, I really appreciate it."
    ],
    "ru": [
      "Большое спасибо за вашу поддержку, я очень ценю это."
    ]
  },
  {
    "time": [
      1446.19,
      1450.73
    ],
    "en": [
      "Also, thanks to all of my JCNA-level members as well."
    ],
    "ru": [
      "Также спасибо всем моим участникам уровня JCNA."
    ]
  },
  {
    "time": [
      1450.73,
      1455.4
    ],
    "en": [
      "Thank you for watching. That's all for this video."
    ],
    "ru": [
      "Спасибо за просмотр. Это все для этого видео."
    ]
  },
  {
    "time": [
      1455.4,
      1460.58
    ],
    "en": [
      "If you want to show your support, please subscribe to the channel, like the video, leave a comment,"
    ],
    "ru": [
      "Если вы хотите показать свою поддержку, подпишитесь на канал, поставьте лайк видео, оставьте комментарий,"
    ]
  },
  {
    "time": [
      1460.58,
      1463.66
    ],
    "en": [
      "and share the video with anyone else studying for the CCNA."
    ],
    "ru": [
      "и поделитесь видео со всеми, кто учится на CCNA."
    ]
  },
  {
    "time": [
      1463.66,
      1469.78
    ],
    "en": [
      "I accept donations via cryptocurrency or Patreon via the links in the description."
    ],
    "ru": [
      "Я принимаю пожертвования через криптовалюту или Patreon по ссылкам в описании."
    ]
  },
  {
    "time": [
      1469.78,
      1476.34
    ],
    "en": [
      "I'm also a Brave verified publisher and accept BAT, or Basic Attention Token, tips via the"
    ],
    "ru": [
      "Я также являюсь проверенным издателем Brave и принимаю советы BAT (Basic Attention Token) через"
    ]
  },
  {
    "time": [
      1476.34,
      1484.4
    ],
    "en": [
      "Brave browser. Click the link in the description to check out Brave, a fast and sleek browser that pays you to surf the Internet."
    ],
    "ru": [
      "Смелый браузер. Щелкните ссылку в описании, чтобы ознакомиться с Brave, быстрым и элегантным браузером, который платит вам за серфинг в Интернете."
    ]
  },
  {
    "time": [
      1484.4,
      1484.4
    ],
    "en": [
      "That's all for now."
    ],
    "ru": [
      "На этом пока все."
    ]
  }
]