let objs = [
  {
    "time": [
      1.27,
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
      6.839
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
      6.839,
      10.87
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
      10.87,
      16.609
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
      16.609,
      18.88
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
      18.88,
      22.83
    ],
    "en": [
      "This video will be the last of the subnetting series."
    ],
    "ru": [
      "Это видео будет последним в серии о подсетях."
    ]
  },
  {
    "time": [
      22.83,
      26.66
    ],
    "en": [
      "Subnetting is very important to understand so I wanted to take it slowly to make sure"
    ],
    "ru": [
      "Подсети очень важно понимать, поэтому я хотел бы поторопиться, чтобы убедиться, что"
    ]
  },
  {
    "time": [
      26.66,
      28.9
    ],
    "en": [
      "you don’t get confused."
    ],
    "ru": [
      "вы не запутаетесь."
    ]
  },
  {
    "time": [
      28.9,
      33.51
    ],
    "en": [
      "In this video we’ll cover the last few important things you should know."
    ],
    "ru": [
      "В этом видео мы расскажем о последних важных вещах, которые вам следует знать."
    ]
  },
  {
    "time": [
      33.51,
      37.51
    ],
    "en": [
      "So, what exactly will we cover in this video?"
    ],
    "ru": [
      "Итак, что именно мы расскажем в этом видео?"
    ]
  },
  {
    "time": [
      37.51,
      41.55
    ],
    "en": [
      "First of all, I’ll go over the answers last video’s quiz questions."
    ],
    "ru": [
      "Прежде всего, я рассмотрю ответы на вопросы последнего видео викторины."
    ]
  },
  {
    "time": [
      41.55,
      46.0
    ],
    "en": [
      "Then, we’ll do a few practice questions using class A addresses."
    ],
    "ru": [
      "Затем мы ответим на несколько практических вопросов, используя адреса класса А."
    ]
  },
  {
    "time": [
      46.0,
      53.98
    ],
    "en": [
      "Then, we’ll look at another topic in subnetting, called ‘VLSM’, which stands for ‘variable-length subnet masks’."
    ],
    "ru": [
      "Затем мы рассмотрим другую тему о подсетях, которая называется «VLSM», что означает «маски подсети переменной длины»."
    ]
  },
  {
    "time": [
      53.98,
      57.54
    ],
    "en": [
      "subnet masks’. I’ll explain exactly what that is when we get to it."
    ],
    "ru": [
      "маски подсети ». Я объясню, что именно, когда мы до этого дойдем."
    ]
  },
  {
    "time": [
      57.54,
      62.76
    ],
    "en": [
      "Finally, I’ll give you some other resources where you can get more practice subnetting."
    ],
    "ru": [
      "Наконец, я дам вам несколько других ресурсов, где вы сможете попрактиковаться в разбиении на подсети."
    ]
  },
  {
    "time": [
      62.76,
      67.13
    ],
    "en": [
      "Okay here’s question 1 from the last video."
    ],
    "ru": [
      "Хорошо, вот вопрос 1 из последнего видео."
    ]
  },
  {
    "time": [
      67.13,
      72.789
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
      72.789,
      77.99
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
      77.99,
      80.549
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
      80.549,
      82.279
    ],
    "en": [
      "This is a simple one."
    ],
    "ru": [
      "Это простой."
    ]
  },
  {
    "time": [
      82.279,
      86.0
    ],
    "en": [
      "How many bits do we have to borrow to make 100 subnets?"
    ],
    "ru": [
      "Сколько битов нужно занять, чтобы создать 100 подсетей?"
    ]
  },
  {
    "time": [
      86.0,
      88.56
    ],
    "en": [
      "You can just count on your fingers."
    ],
    "ru": [
      "Можно просто сосчитать по пальцам."
    ]
  },
  {
    "time": [
      88.56,
      95.149
    ],
    "en": [
      "Borrowing one bit allows for 2 subnets, borrowing 2 bits allows 4 subnets, 3 borrowed bits allows"
    ],
    "ru": [
      "Заимствование одного бита позволяет использовать 2 подсети, заимствование 2 бита позволяет использовать 4 подсети, 3 заимствованных бита позволяют"
    ]
  },
  {
    "time": [
      95.149,
      101.869
    ],
    "en": [
      "for 8 subnets, 4 borrowed bits allows for 16 subnets, 5 borrowed bits allows for 32"
    ],
    "ru": [
      "для 8 подсетей 4 заимствованных бита позволяют использовать 16 подсетей, 5 заимствованных бит позволяют использовать 32"
    ]
  },
  {
    "time": [
      101.869,
      109.34
    ],
    "en": [
      "subnets, 6 borrowed bits allows for 64 subnets, and 7 borrowed bits allows for 128 subnets."
    ],
    "ru": [
      "подсети, 6 заимствованных бит позволяют использовать 64 подсети, а 7 заимствованных бит позволяют использовать 128 подсетей."
    ]
  },
  {
    "time": [
      109.34,
      113.95
    ],
    "en": [
      "So, we need to borrow 7 bits to create enough subnets."
    ],
    "ru": [
      "Итак, нам нужно заимствовать 7 бит, чтобы создать достаточное количество подсетей."
    ]
  },
  {
    "time": [
      113.95,
      119.2
    ],
    "en": [
      "Does that leave enough host bits for at least 500 hosts? Let’s check."
    ],
    "ru": [
      "Достаточно ли при этом битов хоста по крайней мере для 500 хостов? Давайте проверим."
    ]
  },
  {
    "time": [
      119.2,
      126.53
    ],
    "en": [
      "Let’s check. So, borrowing 7 bits means we will use a /23 prefix length, which leaves 9 host bits."
    ],
    "ru": [
      "Давайте проверим. Итак, заимствование 7 бит означает, что мы будем использовать длину префикса / 23, что оставляет 9 бит хоста."
    ]
  },
  {
    "time": [
      126.53,
      129.5
    ],
    "en": [
      "Once more, the red bits are the host bits."
    ],
    "ru": [
      "И снова красные биты - это биты хоста."
    ]
  },
  {
    "time": [
      129.5,
      135.98
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
      129.5,
      135.98
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
      135.98,
      141.59
    ],
    "en": [
      "So, that’s the answer to question 1, the prefix length will be /23."
    ],
    "ru": [
      "Итак, это ответ на вопрос 1, длина префикса будет / 23."
    ]
  },
  {
    "time": [
      141.59,
      149.16
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
      141.59,
      149.16
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
      149.16,
      155.49
    ],
    "en": [
      "As I mentioned before, make sure you know how to write different prefix lengths in dotted decimal, too."
    ],
    "ru": [
      "Как я уже упоминал ранее, убедитесь, что вы знаете, как записывать разные длины префиксов в десятичном формате с точками."
    ]
  },
  {
    "time": [
      155.49,
      158.89
    ],
    "en": [
      "decimal, too. Let’s go on to question 2."
    ],
    "ru": [
      "десятичный тоже. Перейдем к вопросу 2."
    ]
  },
  {
    "time": [
      158.89,
      166.29
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
      166.29,
      170.68
    ],
    "en": [
      "These questions are easy if you remember the steps I taught you."
    ],
    "ru": [
      "Ответить на эти вопросы легко, если вы вспомните шаги, которым я вас научил."
    ]
  },
  {
    "time": [
      170.68,
      173.93
    ],
    "en": [
      "First write out the address in binary, like this."
    ],
    "ru": [
      "Сначала запишите адрес в двоичном формате, вот так."
    ]
  },
  {
    "time": [
      173.93,
      178.04
    ],
    "en": [
      "Then, change all of the host bits to 0."
    ],
    "ru": [
      "Затем измените все биты хоста на 0."
    ]
  },
  {
    "time": [
      178.04,
      182.33
    ],
    "en": [
      "Convert the address back to dotted decimal, and that’s the answer."
    ],
    "ru": [
      "Преобразуйте адрес обратно в десятичный разделитель, и вот и ответ."
    ]
  },
  {
    "time": [
      182.33,
      193.66
    ],
    "en": [
      "So, host 172.21.111.201/20 belongs to the subnet 172.21.96.0/20."
    ],
    "ru": [
      "Итак, хост 172.21.111.201/20 принадлежит подсети 172.21.96.0/20."
    ]
  },
  {
    "time": [
      193.66,
      197.74
    ],
    "en": [
      "Let’s check the answer for question 3 next."
    ],
    "ru": [
      "Давайте проверим ответ на вопрос 3 далее."
    ]
  },
  {
    "time": [
      197.74,
      205.4
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
      205.4,
      210.76
    ],
    "en": [
      "So, to solve this problem you follow the same steps as for the previous question, except"
    ],
    "ru": [
      "Итак, чтобы решить эту проблему, вы выполните те же действия, что и в предыдущем вопросе, за исключением"
    ]
  },
  {
    "time": [
      210.76,
      214.52
    ],
    "en": [
      "instead of changing all host bits to 0, you change them to 1."
    ],
    "ru": [
      "вместо того, чтобы менять все биты хоста на 0, вы меняете их на 1."
    ]
  },
  {
    "time": [
      214.52,
      217.17000000000002
    ],
    "en": [
      "Let’s try it out."
    ],
    "ru": [
      "Давай попробуем."
    ]
  },
  {
    "time": [
      217.17000000000002,
      218.97
    ],
    "en": [
      "Write out the address in binary."
    ],
    "ru": [
      "Запишите адрес в двоичном формате."
    ]
  },
  {
    "time": [
      218.97,
      224.29
    ],
    "en": [
      "Then, since we’re looking for the BROADCAST address, not the network address, change all"
    ],
    "ru": [
      "Затем, поскольку мы ищем адрес ТРАНСЛЯЦИИ, а не сетевой адрес, измените все"
    ]
  },
  {
    "time": [
      224.29,
      226.78
    ],
    "en": [
      "of the host bits to 1."
    ],
    "ru": [
      "бит хоста на 1."
    ]
  },
  {
    "time": [
      226.78,
      232.76
    ],
    "en": [
      "Convert the address back to dotted decimal, and that’s the broadcast address for the subnet."
    ],
    "ru": [
      "Преобразуйте адрес обратно в десятичное представление с точками, и это будет широковещательный адрес подсети."
    ]
  },
  {
    "time": [
      232.76,
      241.31
    ],
    "en": [
      "subnet. So the answer for question 3 is 192.168.91.127, that’s the broadcast address for this network."
    ],
    "ru": [
      "подсеть. Итак, ответ на вопрос 3: 192.168.91.127, это широковещательный адрес этой сети."
    ]
  },
  {
    "time": [
      241.31,
      245.7
    ],
    "en": [
      "Let’s check the answer for question 4."
    ],
    "ru": [
      "Давайте проверим ответ на вопрос 4."
    ]
  },
  {
    "time": [
      245.7,
      253.29
    ],
    "en": [
      "You divide the network 172.16.0.0/16 into 4 subnets of equal size."
    ],
    "ru": [
      "Вы делите сеть 172.16.0.0/16 на 4 подсети равного размера."
    ]
  },
  {
    "time": [
      253.29,
      257.43
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
      257.43,
      263.259
    ],
    "en": [
      "So, the first step to solving this question is to determine the prefix length we must use."
    ],
    "ru": [
      "Итак, первый шаг к решению этого вопроса - определить длину префикса, которую мы должны использовать."
    ]
  },
  {
    "time": [
      263.259,
      269.01
    ],
    "en": [
      "use. To divide the network into 4 subnets of equal size, we have to borrow 2 bits, because 2"
    ],
    "ru": [
      "использовать. Чтобы разделить сеть на 4 подсети равного размера, мы должны занять 2 бита, потому что 2"
    ]
  },
  {
    "time": [
      269.01,
      271.379
    ],
    "en": [
      "to the power of 2 is 4."
    ],
    "ru": [
      "в степени 2 равно 4."
    ]
  },
  {
    "time": [
      271.379,
      277.33
    ],
    "en": [
      "So, when we borrow 2 bits, that makes a /18 prefix length."
    ],
    "ru": [
      "Итак, когда мы заимствуем 2 бита, получается длина префикса / 18."
    ]
  },
  {
    "time": [
      277.33,
      285.18
    ],
    "en": [
      "Change this last bit to 1, and write it in dotted decimal again. 172.16.64.0."
    ],
    "ru": [
      "Измените этот последний бит на 1 и снова запишите его в десятичном формате с точками. 172.16.64.0."
    ]
  },
  {
    "time": [
      285.18,
      289.15999999999997
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
      285.18,
      289.15999999999997
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
      289.15999999999997,
      293.86
    ],
    "en": [
      "Now to find the broadcast address, simply change all of the host bits to 1."
    ],
    "ru": [
      "Теперь, чтобы найти широковещательный адрес, просто измените все биты хоста на 1."
    ]
  },
  {
    "time": [
      293.86,
      299.78
    ],
    "en": [
      "So, the broadcast address is 172.16.127.255."
    ],
    "ru": [
      "Итак, широковещательный адрес 172.16.127.255."
    ]
  },
  {
    "time": [
      299.78,
      306.729
    ],
    "en": [
      "So, these are the answers to question 4. Finally, question 5."
    ],
    "ru": [
      "Итак, это ответы на вопрос 4. Наконец, вопрос 5."
    ]
  },
  {
    "time": [
      306.729,
      313.86
    ],
    "en": [
      "Finally, question 5. You divide the 172.30.0.0/16 network into subnets of 1000 hosts each."
    ],
    "ru": [
      "Наконец, вопрос 5. Вы делите сеть 172.30.0.0/16 на подсети по 1000 хостов в каждой."
    ]
  },
  {
    "time": [
      313.86,
      315.999
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
      315.999,
      322.289
    ],
    "en": [
      "Well, to know how many subnets we are able to make, we have to know how many bits we can borrow."
    ],
    "ru": [
      "Что ж, чтобы знать, сколько подсетей мы можем создать, мы должны знать, сколько битов мы можем заимствовать."
    ]
  },
  {
    "time": [
      322.289,
      329.409
    ],
    "en": [
      "can borrow. But, to know how many bits we can borrow, we need to find how many host bits we need for 1000 hosts."
    ],
    "ru": [
      "можно брать в долг. Но чтобы знать, сколько битов мы можем позаимствовать, нам нужно определить, сколько битов хоста нам нужно для 1000 хостов."
    ]
  },
  {
    "time": [
      329.409,
      338.71
    ],
    "en": [
      "for 1000 hosts. We will need 10 host bits for 1000 hosts, because 2 to the power of 10, minus 2, allows for 1022 hosts."
    ],
    "ru": [
      "на 1000 хостов. Нам понадобится 10 бит хоста для 1000 хостов, потому что 2 в степени 10 минус 2 позволяет использовать 1022 хоста."
    ]
  },
  {
    "time": [
      338.71,
      341.199
    ],
    "en": [
      "for 1022 hosts. That will leave us with 6 borrowed bits."
    ],
    "ru": [
      "на 1022 хоста. У нас останется 6 заимствованных битов."
    ]
  },
  {
    "time": [
      341.199,
      347.61
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
      341.199,
      347.61
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
      347.61,
      353.02
    ],
    "en": [
      "Okay, let’s get to subnetting class A networks."
    ],
    "ru": [
      "Хорошо, давайте перейдем к разделению на подсети сетей класса А."
    ]
  },
  {
    "time": [
      353.02,
      357.65
    ],
    "en": [
      "Look at the SIZE OF REST BIT FIELD, that is the host portion."
    ],
    "ru": [
      "Посмотрите на РАЗМЕР ПОЛЯ ОТДЫХА, это часть хоста."
    ]
  },
  {
    "time": [
      357.65,
      363.099
    ],
    "en": [
      "There are 24 host bits that we can borrow from, meaning lots of room to make subnets."
    ],
    "ru": [
      "Мы можем заимствовать 24 бита хоста, что означает много места для создания подсетей."
    ]
  },
  {
    "time": [
      363.099,
      368.551
    ],
    "en": [
      "However, let me remind you that the process of subnetting class A, class B, and class"
    ],
    "ru": [
      "Однако позвольте мне напомнить вам, что процесс разделения на подсети класса A, класса B и класса"
    ]
  },
  {
    "time": [
      368.551,
      370.719
    ],
    "en": [
      "C networks is exactly the same!"
    ],
    "ru": [
      "C сети точно такие же!"
    ]
  },
  {
    "time": [
      370.719,
      379.18
    ],
    "en": [
      "So, let’s just do 2 practice questions subnetting class A networks, and then let’s move on to VLSM."
    ],
    "ru": [
      "Итак, давайте просто ответим на два практических вопроса по подсетям класса A, а затем перейдем к VLSM."
    ]
  },
  {
    "time": [
      379.18,
      383.169
    ],
    "en": [
      "to VLSM. You have been given the 10.0.0.0/8 network."
    ],
    "ru": [
      "в VLSM. Вам предоставлена ​​сеть 10.0.0.0/8."
    ]
  },
  {
    "time": [
      383.169,
      388.71
    ],
    "en": [
      "You must create 2000 subnets which will be distributed to various enterprises."
    ],
    "ru": [
      "Вы должны создать 2000 подсетей, которые будут распределены между различными предприятиями."
    ]
  },
  {
    "time": [
      388.71,
      391.3
    ],
    "en": [
      "What prefix length must you use?"
    ],
    "ru": [
      "Какую длину префикса нужно использовать?"
    ]
  },
  {
    "time": [
      391.3,
      395.539
    ],
    "en": [
      "How many host addresses, or usable addresses, will be in each subnet?"
    ],
    "ru": [
      "Сколько адресов хоста или используемых адресов будет в каждой подсети?"
    ]
  },
  {
    "time": [
      395.539,
      399.759
    ],
    "en": [
      "Let’s solve this question just like the other ones."
    ],
    "ru": [
      "Давайте решим этот вопрос так же, как и другие."
    ]
  },
  {
    "time": [
      399.759,
      404.229
    ],
    "en": [
      "Here is 10.0.0.0/8 in binary and dotted decimal."
    ],
    "ru": [
      "Вот 10.0.0.0/8 в двоичном и десятичном формате с точками."
    ]
  },
  {
    "time": [
      404.229,
      410.139
    ],
    "en": [
      "It’s /8, so only the first octet is the network portion, and we have 3 whole octets"
    ],
    "ru": [
      "Это / 8, поэтому только первый октет является сетевой частью, а у нас есть 3 целых октета."
    ]
  },
  {
    "time": [
      410.139,
      413.219
    ],
    "en": [
      "to borrow from and make subnets."
    ],
    "ru": [
      "заимствовать и создавать подсети."
    ]
  },
  {
    "time": [
      413.219,
      418.28
    ],
    "en": [
      "Notice that I wrote the /8 subnet mask down here, 255.0.0.0."
    ],
    "ru": [
      "Обратите внимание, что я написал здесь маску подсети / 8, 255.0.0.0."
    ]
  },
  {
    "time": [
      418.28,
      424.129
    ],
    "en": [
      "Currently, we are borrowing 0 bits, so we can’t make any subnets."
    ],
    "ru": [
      "В настоящее время мы заимствуем 0 бит, поэтому мы не можем создавать подсети."
    ]
  },
  {
    "time": [
      424.129,
      429.259
    ],
    "en": [
      "Instead of going through the whole process of borrowing 1 bit, 2 bits, 3 bits etc. let’s"
    ],
    "ru": [
      "Вместо того, чтобы проходить весь процесс заимствования 1 бита, 2 бита, 3 бита и т. Д., Давайте"
    ]
  },
  {
    "time": [
      429.259,
      431.11
    ],
    "en": [
      "see if you can do it in your head."
    ],
    "ru": [
      "посмотри, сможешь ли ты сделать это в своей голове."
    ]
  },
  {
    "time": [
      431.11,
      434.81
    ],
    "en": [
      "So, 2 to the power of WHAT?"
    ],
    "ru": [
      "Итак, 2 в степени ЧТО?"
    ]
  },
  {
    "time": [
      434.81,
      436.529
    ],
    "en": [
      "Equals at least 2000?"
    ],
    "ru": [
      "Не меньше 2000?"
    ]
  },
  {
    "time": [
      436.529,
      441.65
    ],
    "en": [
      "Remember, each bit you borrow doubles the number of subnets you can make."
    ],
    "ru": [
      "Помните, что каждый заимствованный бит удваивает количество подсетей, которые вы можете создать."
    ]
  },
  {
    "time": [
      441.65,
      455.56
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
      441.65,
      455.56
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
      455.56,
      461.93
    ],
    "en": [
      "Thats 11 borrowed bits, so the answer is 2 to the power of 11."
    ],
    "ru": [
      "Это 11 заимствованных битов, поэтому ответ - 2 в степени 11."
    ]
  },
  {
    "time": [
      461.93,
      468.539
    ],
    "en": [
      "So, borrowing 11 bits allows us to create the required 2000 subnets."
    ],
    "ru": [
      "Итак, заимствование 11 бит позволяет нам создать требуемые 2000 подсетей."
    ]
  },
  {
    "time": [
      468.539,
      471.789
    ],
    "en": [
      "This means we will use a /19 prefix length."
    ],
    "ru": [
      "Это означает, что мы будем использовать длину префикса / 19."
    ]
  },
  {
    "time": [
      471.789,
      474.909
    ],
    "en": [
      "Now, how many hosts will be in each subnet?"
    ],
    "ru": [
      "Теперь, сколько хостов будет в каждой подсети?"
    ]
  },
  {
    "time": [
      474.909,
      482.979
    ],
    "en": [
      "Well, there are 13 host bits remaining, so, that means 8190 hosts per subnet."
    ],
    "ru": [
      "Что ж, осталось 13 битов хоста, так что это означает 8190 хостов на подсеть."
    ]
  },
  {
    "time": [
      482.979,
      485.52
    ],
    "en": [
      "So, those are the answers."
    ],
    "ru": [
      "Итак, это ответы."
    ]
  },
  {
    "time": [
      485.52,
      494.849
    ],
    "en": [
      "We will use a /19 prefix length, and there will be 8190 hosts addresses, AKA usable addresses, in each subnet."
    ],
    "ru": [
      "Мы будем использовать длину префикса / 19, и в каждой подсети будет 8190 адресов хостов, используемых AKA."
    ]
  },
  {
    "time": [
      494.849,
      500.49
    ],
    "en": [
      "in each subnet. This is the same process we used for Class B and Class C networks, the numbers are just larger."
    ],
    "ru": [
      "в каждой подсети. Это тот же процесс, который мы использовали для сетей класса B и класса C, только цифры больше."
    ]
  },
  {
    "time": [
      500.49,
      504.96
    ],
    "en": [
      "larger. Let’s do one more practice question for a class A network."
    ],
    "ru": [
      "больше. Давайте зададим еще один практический вопрос для сети класса А."
    ]
  },
  {
    "time": [
      504.96,
      512.39
    ],
    "en": [
      "PC1 has an IP address of 10.217.182.223/11."
    ],
    "ru": [
      "ПК1 имеет IP-адрес 10.217.182.223/11."
    ]
  },
  {
    "time": [
      512.39,
      517.56
    ],
    "en": [
      "Identify the following for PC1’s subnet: 1) Network address:"
    ],
    "ru": [
      "Определите следующее для подсети ПК1: 1) Сетевой адрес:"
    ]
  },
  {
    "time": [
      517.56,
      522.19
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
      517.56,
      522.19
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
      522.19,
      527.82
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
      522.19,
      527.82
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
      527.82,
      533.9
    ],
    "en": [
      "So, feel free to pause this video and figure out the answer for yourself."
    ],
    "ru": [
      "Так что не стесняйтесь приостановить это видео и выяснить ответ для себя."
    ]
  },
  {
    "time": [
      533.9,
      536.67
    ],
    "en": [
      "But let’s walk through the answers together now."
    ],
    "ru": [
      "Но давайте теперь вместе пройдемся по ответам."
    ]
  },
  {
    "time": [
      536.67,
      545.12
    ],
    "en": [
      "Here’s the address written out as a normal /8, so 8 network bits and 24 host bits."
    ],
    "ru": [
      "Вот адрес, записанный как обычный / 8, то есть 8 сетевых битов и 24 бит хоста."
    ]
  },
  {
    "time": [
      545.12,
      550.38
    ],
    "en": [
      "But it’s not /8, it’s /11, so there are 3 borrowed bits."
    ],
    "ru": [
      "Но это не / 8, это / 11, поэтому есть 3 заимствованных бита."
    ]
  },
  {
    "time": [
      550.38,
      554.7
    ],
    "en": [
      "To find the network address, change all of the host bits to 0."
    ],
    "ru": [
      "Чтобы найти сетевой адрес, измените все биты хоста на 0."
    ]
  },
  {
    "time": [
      554.7,
      556.52
    ],
    "en": [
      "Then change it back to dotted decimal."
    ],
    "ru": [
      "Затем измените его обратно на десятичное число с точками."
    ]
  },
  {
    "time": [
      556.52,
      562.73
    ],
    "en": [
      "So, there’s the network address, 10.192.0.0."
    ],
    "ru": [
      "Итак, вот сетевой адрес 10.192.0.0."
    ]
  },
  {
    "time": [
      562.73,
      570.62
    ],
    "en": [
      "Add 1 to the network address, and you get the first usable address, which is 10.192.0.1."
    ],
    "ru": [
      "Добавьте 1 к сетевому адресу, и вы получите первый пригодный для использования адрес, то есть 10.192.0.1."
    ]
  },
  {
    "time": [
      570.62,
      579.14
    ],
    "en": [
      "Change all of the host bits to 1, and you get the broadcast address, 10.223.255.255."
    ],
    "ru": [
      "Измените все биты хоста на 1, и вы получите широковещательный адрес 10.223.255.255."
    ]
  },
  {
    "time": [
      579.14,
      583.94
    ],
    "en": [
      "Subtract one from the broadcast address and you get the last usable address."
    ],
    "ru": [
      "Вычтите единицу из широковещательного адреса, и вы получите последний пригодный для использования адрес."
    ]
  },
  {
    "time": [
      583.94,
      590.33
    ],
    "en": [
      "Finally, to determine the number of host addresses, count the number of host bits."
    ],
    "ru": [
      "Наконец, чтобы определить количество адресов хоста, посчитайте количество бит хоста."
    ]
  },
  {
    "time": [
      590.33,
      598.09
    ],
    "en": [
      "There are 21, so that means 2 million, 97 thousand, 1 hundred 50 hosts per subnet."
    ],
    "ru": [
      "Их 21, то есть 2 миллиона 97 тысяч 1 сотня 50 хостов на подсеть."
    ]
  },
  {
    "time": [
      598.09,
      602.68
    ],
    "en": [
      "So, here are the answers to each part of the question."
    ],
    "ru": [
      "Итак, вот ответы на каждую часть вопроса."
    ]
  },
  {
    "time": [
      602.68,
      606.97
    ],
    "en": [
      "As I said before, the process for subnetting Class A networks is the same as for class"
    ],
    "ru": [
      "Как я уже сказал, процесс разделения сетей класса A на подсети такой же, как и для сетей класса"
    ]
  },
  {
    "time": [
      606.97,
      612.76
    ],
    "en": [
      "B and class C networks, you just have to get used to the larger numbers."
    ],
    "ru": [
      "В сетях класса B и C вам просто нужно привыкнуть к большим числам."
    ]
  },
  {
    "time": [
      612.76,
      617.31
    ],
    "en": [
      "Also I hope you’re getting used to converting between binary and dotted decimal by now,"
    ],
    "ru": [
      "Также я надеюсь, что вы уже привыкли к преобразованию между двоичной и десятичной дробью,"
    ]
  },
  {
    "time": [
      617.31,
      622.26
    ],
    "en": [
      "as you have probably noticed it’s absolutely essential for subnetting."
    ],
    "ru": [
      "как вы, наверное, заметили, это абсолютно необходимо для разделения на подсети."
    ]
  },
  {
    "time": [
      622.26,
      630.47
    ],
    "en": [
      "So let’s move on to a very important topic, VLSM, which stands for variable-length subnet masks."
    ],
    "ru": [
      "Итак, давайте перейдем к очень важной теме, VLSM, что означает маски подсети переменной длины."
    ]
  },
  {
    "time": [
      630.47,
      636.26
    ],
    "en": [
      "masks. Until now, we have practiced subnetting used FLSM (Fixed-Length Subnet Masks)."
    ],
    "ru": [
      "маски. До сих пор мы практиковали разбиение на подсети с использованием FLSM (маски подсети фиксированной длины)."
    ]
  },
  {
    "time": [
      636.26,
      640.851
    ],
    "en": [
      "This means that all of the subnets use the same prefix length for example, subnetting"
    ],
    "ru": [
      "Это означает, что все подсети используют одинаковую длину префикса, например, подсети"
    ]
  },
  {
    "time": [
      640.851,
      644.57
    ],
    "en": [
      "a class C network into 4 subnets using /26."
    ],
    "ru": [
      "сеть класса C на 4 подсети с использованием / 26."
    ]
  },
  {
    "time": [
      644.57,
      651.44
    ],
    "en": [
      "However, VLSM (Variable-Length Subnet Masks) is the process of creating subnets of different"
    ],
    "ru": [
      "Однако VLSM (маски подсети переменной длины) - это процесс создания подсетей разных типов."
    ]
  },
  {
    "time": [
      651.44,
      655.4
    ],
    "en": [
      "sizes, to make your use of network addresses more efficient."
    ],
    "ru": [
      "sizes, чтобы повысить эффективность использования сетевых адресов."
    ]
  },
  {
    "time": [
      655.4,
      662.36
    ],
    "en": [
      "Now, VLSM IS more complicated than FLSM, but it’s easy if you follow the steps correctly."
    ],
    "ru": [
      "Теперь VLSM сложнее, чем FLSM, но это легко, если вы правильно следуете инструкциям."
    ]
  },
  {
    "time": [
      662.36,
      669.62
    ],
    "en": [
      "So, that’s what I want to teach you now, the steps to subnet a network using VLSM."
    ],
    "ru": [
      "Итак, это то, чему я хочу вас сейчас научить, этапы создания подсети сети с помощью VLSM."
    ]
  },
  {
    "time": [
      669.62,
      672.87
    ],
    "en": [
      "So here’s an example small enterprise network."
    ],
    "ru": [
      "Итак, вот пример сети малого предприятия."
    ]
  },
  {
    "time": [
      672.87,
      677.54
    ],
    "en": [
      "There are two LANs in Tokyo, and two LANs in Toronto."
    ],
    "ru": [
      "Есть две локальные сети в Токио и две локальные сети в Торонто."
    ]
  },
  {
    "time": [
      677.54,
      683.98
    ],
    "en": [
      "Tokyo LAN A has has 110 hosts, and Tokyo LAN B has 8 hosts."
    ],
    "ru": [
      "В локальной сети Tokyo LAN A 110 узлов, а в локальной сети Tokyo LAN B - 8 узлов."
    ]
  },
  {
    "time": [
      683.98,
      690.2
    ],
    "en": [
      "Toronto LAN A has 29 hosts and Toronto LAN B has 45 hosts."
    ],
    "ru": [
      "LAN A Торонто имеет 29 хостов, а LAN B Торонто - 45 хостов."
    ]
  },
  {
    "time": [
      690.2,
      697.45
    ],
    "en": [
      "Also, there is a point-to-point connection between the two routers that we must assign IP addresses for."
    ],
    "ru": [
      "Кроме того, между двумя маршрутизаторами существует двухточечное соединение, которому мы должны назначить IP-адреса."
    ]
  },
  {
    "time": [
      697.45,
      704.56
    ],
    "en": [
      "IP addresses for. We are assigned the 192.168.1.0/24 network, and must divide it into 5 subnets to provide"
    ],
    "ru": [
      "IP-адреса для. Нам назначена сеть 192.168.1.0/24, и мы должны разделить ее на 5 подсетей, чтобы обеспечить"
    ]
  },
  {
    "time": [
      704.56,
      708.54
    ],
    "en": [
      "IP addresses for all hosts in the enterprise network."
    ],
    "ru": [
      "IP-адреса для всех хостов в корпоративной сети."
    ]
  },
  {
    "time": [
      708.54,
      715.24
    ],
    "en": [
      "If we were to try this with fixed-length subnet masks, we would need to borrow 3 bits to make enough subnets."
    ],
    "ru": [
      "Если бы мы попробовали это с масками подсети фиксированной длины, нам бы потребовалось заимствовать 3 бита, чтобы создать достаточное количество подсетей."
    ]
  },
  {
    "time": [
      715.24,
      717.68
    ],
    "en": [
      "enough subnets. That would leave 5 host bits left."
    ],
    "ru": [
      "достаточно подсетей. Это оставит 5 бит хоста."
    ]
  },
  {
    "time": [
      717.68,
      723.48
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
      717.68,
      723.48
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
      723.48,
      731.11
    ],
    "en": [
      "LAN A or Toronto LAN B. However, if we use VLSM we can assign different subnet sizes"
    ],
    "ru": [
      "LAN A или Toronto LAN B. Однако, если мы используем VLSM, мы можем назначить разные размеры подсети."
    ]
  },
  {
    "time": [
      731.11,
      736.63
    ],
    "en": [
      "to each LAN, which will allow us to make sure each LAN has enough addresses available."
    ],
    "ru": [
      "к каждой локальной сети, что позволит нам убедиться, что в каждой локальной сети доступно достаточно адресов."
    ]
  },
  {
    "time": [
      736.63,
      741.06
    ],
    "en": [
      "So, what are the steps to subnet using VLSM?"
    ],
    "ru": [
      "Итак, каковы шаги для подсети с использованием VLSM?"
    ]
  },
  {
    "time": [
      741.06,
      745.82
    ],
    "en": [
      "First, assign the largest subnet at the start of the address space."
    ],
    "ru": [
      "Сначала назначьте самую большую подсеть в начале адресного пространства."
    ]
  },
  {
    "time": [
      745.82,
      749.56
    ],
    "en": [
      "Then, assign the second-largest after it."
    ],
    "ru": [
      "Затем назначьте второй по величине после него."
    ]
  },
  {
    "time": [
      749.56,
      755.55
    ],
    "en": [
      "And then repeat the process until all subnets have been assigned, from largest to smallest."
    ],
    "ru": [
      "А затем повторяйте процесс, пока не будут назначены все подсети, от наибольшей к наименьшей."
    ]
  },
  {
    "time": [
      755.55,
      760.26
    ],
    "en": [
      "If you look at our network here, that means we will assign subnets in this order."
    ],
    "ru": [
      "Если вы посмотрите здесь нашу сеть, это означает, что мы будем назначать подсети в таком порядке."
    ]
  },
  {
    "time": [
      760.26,
      765.66
    ],
    "en": [
      "First, Tokyo LAN A, which requires 110 hosts."
    ],
    "ru": [
      "Во-первых, Tokyo LAN A, для которой требуется 110 хостов."
    ]
  },
  {
    "time": [
      765.66,
      773.99
    ],
    "en": [
      "Then Toronto LAN B. Then, Toronto LAN A, Tokyo LAN B, and finally the point-to-point connection"
    ],
    "ru": [
      "Затем LAN B в Торонто, затем LAN A в Торонто, LAN B в Токио и, наконец, соединение точка-точка."
    ]
  },
  {
    "time": [
      773.99,
      775.53
    ],
    "en": [
      "between the two routers."
    ],
    "ru": [
      "между двумя маршрутизаторами."
    ]
  },
  {
    "time": [
      775.53,
      784.07
    ],
    "en": [
      "So, let’s do Tokyo LAN A. I want you to pause the video and figure out these five values by yourself."
    ],
    "ru": [
      "Итак, давайте займемся Tokyo LAN A. Я хочу, чтобы вы приостановили видео и выяснили эти пять значений самостоятельно."
    ]
  },
  {
    "time": [
      784.07,
      789.38
    ],
    "en": [
      "values by yourself. Network address, broadcast address, first usable address, last usable address, and total"
    ],
    "ru": [
      "ценности самостоятельно. Сетевой адрес, широковещательный адрес, первый используемый адрес, последний используемый адрес и общее количество"
    ]
  },
  {
    "time": [
      789.38,
      791.42
    ],
    "en": [
      "number of usable host addresses."
    ],
    "ru": [
      "количество используемых адресов хоста."
    ]
  },
  {
    "time": [
      791.42,
      796.45
    ],
    "en": [
      "We’ve done lots of practice for this, so I know you can do it by yourself."
    ],
    "ru": [
      "Мы много практиковались для этого, поэтому я знаю, что вы справитесь сами."
    ]
  },
  {
    "time": [
      796.45,
      803.76
    ],
    "en": [
      "Pause the video now to find the answers….Okay, let’s check out the answers."
    ],
    "ru": [
      "Поставьте видео на паузу, чтобы найти ответы… Хорошо, давайте посмотрим на ответы."
    ]
  },
  {
    "time": [
      803.76,
      809.18
    ],
    "en": [
      "So, I decided to use a /25 prefix length. Why is that?"
    ],
    "ru": [
      "Итак, я решил использовать длину префикса / 25. Это почему?"
    ]
  },
  {
    "time": [
      809.18,
      820.04
    ],
    "en": [
      "Why is that? Well, a /25 prefix length leaves 7 host bits, which means a total of 128 address, so 126 usable host adressess."
    ],
    "ru": [
      "Это почему? Что ж, длина префикса / 25 оставляет 7 бит хоста, что означает в общей сложности 128 адресов, так что можно использовать 126 адресов хоста."
    ]
  },
  {
    "time": [
      820.04,
      825.64
    ],
    "en": [
      "usable host adressess. We need 110, so /25 is the correct prefix length."
    ],
    "ru": [
      "полезный адрес хоста. Нам нужно 110, поэтому / 25 - правильная длина префикса."
    ]
  },
  {
    "time": [
      825.64,
      831.77
    ],
    "en": [
      "That means the network address is 192.168.1.0/25."
    ],
    "ru": [
      "Это означает, что сетевой адрес 192.168.1.0/25."
    ]
  },
  {
    "time": [
      831.77,
      838.54
    ],
    "en": [
      "Convert all of the host bits to 1, and this is the broadcast address, 192.168.1.127."
    ],
    "ru": [
      "Преобразуйте все биты хоста в 1, и это будет широковещательный адрес 192.168.1.127."
    ]
  },
  {
    "time": [
      838.54,
      845.5
    ],
    "en": [
      "So, now we have our answers for Tokyo LAN A. The first usable address is the network"
    ],
    "ru": [
      "Итак, теперь у нас есть ответы для Tokyo LAN A. Первый используемый адрес - это сеть."
    ]
  },
  {
    "time": [
      845.5,
      851.87
    ],
    "en": [
      "address plus one, and the last usable address is the broadcast address minus one."
    ],
    "ru": [
      "адрес плюс один, а последний используемый адрес - это широковещательный адрес минус один."
    ]
  },
  {
    "time": [
      851.87,
      858.38
    ],
    "en": [
      "And as I just mentioned, 7 host bits allows for 126 usable host addresses, which is 2 to the"
    ],
    "ru": [
      "И, как я только что упомянул, 7 бит хоста позволяют использовать 126 используемых адресов хоста, что составляет 2 от"
    ]
  },
  {
    "time": [
      858.38,
      860.84
    ],
    "en": [
      "power of 7, minus 2."
    ],
    "ru": [
      "степень 7, минус 2."
    ]
  },
  {
    "time": [
      860.84,
      871.45
    ],
    "en": [
      "So, we now have our first subnet, 192.168.1.0/25 for Tokyo LAN A. That /25 subnet uses up half"
    ],
    "ru": [
      "Итак, теперь у нас есть наша первая подсеть, 192.168.1.0/25 для локальной сети Tokyo LAN A. Эта подсеть / 25 использует половину"
    ]
  },
  {
    "time": [
      871.45,
      879.22
    ],
    "en": [
      "of the address space of the 192.168.1.0/24 network, but that’s no problem."
    ],
    "ru": [
      "адресного пространства сети 192.168.1.0/24, но это не проблема."
    ]
  },
  {
    "time": [
      879.22,
      884.42
    ],
    "en": [
      "Using VLSM we can assign smaller subnets to these other LANs, and you’ll see that there"
    ],
    "ru": [
      "Используя VLSM, мы можем назначить меньшие подсети этим другим локальным сетям, и вы увидите, что там"
    ]
  },
  {
    "time": [
      884.42,
      886.92
    ],
    "en": [
      "is enough address space left."
    ],
    "ru": [
      "осталось достаточно адресного пространства."
    ]
  },
  {
    "time": [
      886.92,
      896.11
    ],
    "en": [
      "So, next we should assign Toronto LAN B. So, 192.168.1.127 is the broadcast address of"
    ],
    "ru": [
      "Итак, теперь мы должны назначить Торонто LAN B. Итак, 192.168.1.127 - это широковещательный адрес"
    ]
  },
  {
    "time": [
      896.11,
      902.39
    ],
    "en": [
      "Tokyo LAN A. If we add one to that, we will get the network address of the next subnet,"
    ],
    "ru": [
      "Tokyo LAN A. Если мы добавим еще один, мы получим сетевой адрес следующей подсети,"
    ]
  },
  {
    "time": [
      902.39,
      910.44
    ],
    "en": [
      "which will be used for Toronto LAN B. Therefore, 192.168.1.128 is the network address of Toronto"
    ],
    "ru": [
      "который будет использоваться для LAN B Торонто. Следовательно, 192.168.1.128 - это сетевой адрес Торонто."
    ]
  },
  {
    "time": [
      910.44,
      914.99
    ],
    "en": [
      "LAN B. But, we’re missing one important point."
    ],
    "ru": [
      "LAN B. Но мы упускаем один важный момент."
    ]
  },
  {
    "time": [
      914.99,
      918.66
    ],
    "en": [
      "What prefix length should we use for Toronto LAN B?"
    ],
    "ru": [
      "Какую длину префикса следует использовать для LAN B в Торонто?"
    ]
  },
  {
    "time": [
      918.66,
      924.35
    ],
    "en": [
      "So, with this information I want you to do the same thing for Toronto LAN B. Pause the"
    ],
    "ru": [
      "Итак, с этой информацией я хочу, чтобы вы сделали то же самое для LAN B в Торонто. Приостановите воспроизведение."
    ]
  },
  {
    "time": [
      924.35,
      929.6
    ],
    "en": [
      "video, and find the prefix length we must use, then the broadcast address, first and"
    ],
    "ru": [
      "video, и найдите длину префикса, которую мы должны использовать, затем широковещательный адрес, сначала и"
    ]
  },
  {
    "time": [
      929.6,
      935.279
    ],
    "en": [
      "last usable addresses, and total number of usable host addresses for this subnet."
    ],
    "ru": [
      "последние используемые адреса и общее количество используемых адресов хостов для этой подсети."
    ]
  },
  {
    "time": [
      935.279,
      941.64
    ],
    "en": [
      "Pause the video now….okay, let’s check the answer."
    ],
    "ru": [
      "Поставьте видео на паузу… Хорошо, давайте проверим ответ."
    ]
  },
  {
    "time": [
      941.64,
      947.96
    ],
    "en": [
      "So, to accommodate the 45 hosts we will use a /26 prefix length."
    ],
    "ru": [
      "Итак, для размещения 45 хостов мы будем использовать длину префикса / 26."
    ]
  },
  {
    "time": [
      947.96,
      952.43
    ],
    "en": [
      "That leaves 6 host bits, which allows for 62 host addresses."
    ],
    "ru": [
      "Остается 6 битов хоста, что позволяет использовать 62 адреса хоста."
    ]
  },
  {
    "time": [
      952.43,
      958.67
    ],
    "en": [
      "That’s more than we need, but if we make a smaller subnet with a /27 prefix length,"
    ],
    "ru": [
      "Это больше, чем нам нужно, но если мы сделаем подсеть меньшего размера с длиной префикса / 27,"
    ]
  },
  {
    "time": [
      958.67,
      961.98
    ],
    "en": [
      "we can only have 30 hosts, which is not enough."
    ],
    "ru": [
      "у нас может быть только 30 хостов, что недостаточно."
    ]
  },
  {
    "time": [
      961.98,
      970.03
    ],
    "en": [
      "So, the complete network address is 192.168.1.128/26."
    ],
    "ru": [
      "Итак, полный сетевой адрес 192.168.1.128/26."
    ]
  },
  {
    "time": [
      970.03,
      978.01
    ],
    "en": [
      "Change all of the host bits to 1, and you get the broadcast address, 192.168.1.191."
    ],
    "ru": [
      "Измените все биты хоста на 1, и вы получите широковещательный адрес 192.168.1.191."
    ]
  },
  {
    "time": [
      978.01,
      981.72
    ],
    "en": [
      "So here are the answers for Toronto LAN B."
    ],
    "ru": [
      "Итак, вот ответы для Toronto LAN B."
    ]
  },
  {
    "time": [
      981.72,
      991.84
    ],
    "en": [
      "For Tokyo LAN A and Toronto LAN B, we’ve used address space from 192.168.1.0 through 191."
    ],
    "ru": [
      "Для LAN A в Токио и LAN B в Торонто мы использовали адресное пространство с 192.168.1.0 по 191."
    ]
  },
  {
    "time": [
      991.84,
      997.25
    ],
    "en": [
      "These two subnets take up three quarters of the address space, but that’s no problem."
    ],
    "ru": [
      "Эти две подсети занимают три четверти адресного пространства, но это не проблема."
    ]
  },
  {
    "time": [
      997.25,
      1000.62
    ],
    "en": [
      "There is still room for more, smaller subnets."
    ],
    "ru": [
      "Еще есть место для большего количества подсетей меньшего размера."
    ]
  },
  {
    "time": [
      1000.62,
      1010.88
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
      1000.62,
      1010.88
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
      1010.88,
      1016.59
    ],
    "en": [
      "address of Toronto LAN A. Once again though, we have to figure out what prefix length to"
    ],
    "ru": [
      "адрес Торонто LAN A. Однако мы снова должны выяснить, какая длина префикса"
    ]
  },
  {
    "time": [
      1016.59,
      1019.1
    ],
    "en": [
      "use for Toronto LAN A."
    ],
    "ru": [
      "использовать для Toronto LAN A."
    ]
  },
  {
    "time": [
      1019.1,
      1023.24
    ],
    "en": [
      "Let’s do the same process as with the other LANs."
    ],
    "ru": [
      "Проделаем тот же процесс, что и с другими локальными сетями."
    ]
  },
  {
    "time": [
      1023.24,
      1034.02
    ],
    "en": [
      "Please pause the video now to find the remaining information….okay, hopefully you found the answers, let’s check."
    ],
    "ru": [
      "Пожалуйста, приостановите видео сейчас, чтобы найти оставшуюся информацию ... Хорошо, надеюсь, вы нашли ответы, давайте проверим."
    ]
  },
  {
    "time": [
      1034.02,
      1041.04
    ],
    "en": [
      "answers, let’s check. Toronto LAN A requires 29 hosts, so we should use a /27 prefix length, which leaves 5 host"
    ],
    "ru": [
      "ответы, давай проверим. Торонто LAN A требует 29 хостов, поэтому мы должны использовать длину префикса / 27, что оставляет 5 хостов."
    ]
  },
  {
    "time": [
      1041.04,
      1045.339
    ],
    "en": [
      "bits, and therefore 30 host addresses."
    ],
    "ru": [
      "бит, и, следовательно, 30 адресов хоста."
    ]
  },
  {
    "time": [
      1045.339,
      1057.28
    ],
    "en": [
      "So, 192.168.1.192/27 is the network address, and 192.168.1.223 is the broadcast address."
    ],
    "ru": [
      "Итак, 192.168.1.192/27 - это сетевой адрес, а 192.168.1.223 - широковещательный адрес."
    ]
  },
  {
    "time": [
      1057.28,
      1062.07
    ],
    "en": [
      "With this information, we can determine the first and last usable addresses."
    ],
    "ru": [
      "С помощью этой информации мы можем определить первый и последний используемые адреса."
    ]
  },
  {
    "time": [
      1062.07,
      1070.35
    ],
    "en": [
      "So, here are the answers for Toronto LAN A. Let’s check out Tokyo LAN B next."
    ],
    "ru": [
      "Итак, вот ответы для Toronto LAN A. Давайте теперь посмотрим на Tokyo LAN B."
    ]
  },
  {
    "time": [
      1070.35,
      1078.6
    ],
    "en": [
      "So, we’ve used all the way to 192.168.1.223 , which is the broadcast address for Toronto"
    ],
    "ru": [
      "Итак, мы использовали полностью 192.168.1.223, который является широковещательным адресом Торонто."
    ]
  },
  {
    "time": [
      1078.6,
      1085.0
    ],
    "en": [
      "LAN A. There’s not a lot of address space left, but with VLSM we can fit the last two"
    ],
    "ru": [
      "LAN A. Осталось не так много адресного пространства, но с VLSM мы можем уместить последние два"
    ]
  },
  {
    "time": [
      1085.0,
      1088.41
    ],
    "en": [
      "subnets into the address space."
    ],
    "ru": [
      "подсети в адресное пространство."
    ]
  },
  {
    "time": [
      1088.41,
      1095.58
    ],
    "en": [
      "The next address after Toronto LAN A’s broadcast address is Tokyo LAN B’s network address."
    ],
    "ru": [
      "Следующий адрес после широковещательного адреса LAN A в Торонто - это сетевой адрес LAN B."
    ]
  },
  {
    "time": [
      1095.58,
      1100.14
    ],
    "en": [
      "Once again, we need to find the prefix length to use for this subnet."
    ],
    "ru": [
      "Еще раз, нам нужно найти длину префикса для использования в этой подсети."
    ]
  },
  {
    "time": [
      1100.14,
      1108.92
    ],
    "en": [
      "So, please pause the video here to find these different addresses for Tokyo LAN B."
    ],
    "ru": [
      "Итак, пожалуйста, остановите видео здесь, чтобы найти эти разные адреса для Tokyo LAN B."
    ]
  },
  {
    "time": [
      1108.92,
      1111.85
    ],
    "en": [
      "Okay, let’s check the answers."
    ],
    "ru": [
      "Хорошо, давай проверим ответы."
    ]
  },
  {
    "time": [
      1111.85,
      1119.51
    ],
    "en": [
      "So, because Tokyo LAN B requires 8 hosts, we must use a /28 prefix length."
    ],
    "ru": [
      "Итак, поскольку для локальной сети Tokyo LAN B требуется 8 хостов, мы должны использовать длину префикса / 28."
    ]
  },
  {
    "time": [
      1119.51,
      1123.74
    ],
    "en": [
      "One possible mistake here is using a /29 prefix length."
    ],
    "ru": [
      "Одна из возможных ошибок здесь - использование длины префикса / 29."
    ]
  },
  {
    "time": [
      1123.74,
      1130.35
    ],
    "en": [
      "Although /29 allows 8 addresses, remember we must subtract two for the network and broadcast"
    ],
    "ru": [
      "Хотя / 29 допускает 8 адресов, помните, что мы должны вычесть два для сети и широковещательную рассылку."
    ]
  },
  {
    "time": [
      1130.35,
      1136.2
    ],
    "en": [
      "addresses, so really /29 only allows 6 usable addresses."
    ],
    "ru": [
      "адресов, поэтому на самом деле / ​​29 позволяет использовать только 6 адресов."
    ]
  },
  {
    "time": [
      1136.2,
      1140.88
    ],
    "en": [
      "Therefore, we must use /26, which allows 14 host addresses."
    ],
    "ru": [
      "Следовательно, мы должны использовать / 26, что позволяет использовать 14 адресов хостов."
    ]
  },
  {
    "time": [
      1140.88,
      1149.75
    ],
    "en": [
      "So, the network address for Tokyo LAN B is 192.168.1.224/28."
    ],
    "ru": [
      "Итак, сетевой адрес для Tokyo LAN B - 192.168.1.224/28."
    ]
  },
  {
    "time": [
      1149.75,
      1157.62
    ],
    "en": [
      "Change the host bits to 1, and the broadcast address is 192.168.1.239."
    ],
    "ru": [
      "Измените биты хоста на 1, и широковещательный адрес будет 192.168.1.239."
    ]
  },
  {
    "time": [
      1157.62,
      1164.77
    ],
    "en": [
      "So, here are the answers for Tokyo LAN B. Now there is only one subnet left that we must"
    ],
    "ru": [
      "Итак, вот ответы для Tokyo LAN B. Теперь осталась только одна подсеть, которую мы должны"
    ]
  },
  {
    "time": [
      1164.77,
      1169.01
    ],
    "en": [
      "assign, and that is the point-to-point connection between these two routers."
    ],
    "ru": [
      "assign, и это соединение точка-точка между этими двумя маршрутизаторами."
    ]
  },
  {
    "time": [
      1169.01,
      1175.27
    ],
    "en": [
      "So, we’ve used address space all the way up to 192.168.1.239."
    ],
    "ru": [
      "Итак, мы использовали адресное пространство вплоть до 192.168.1.239."
    ]
  },
  {
    "time": [
      1175.27,
      1179.92
    ],
    "en": [
      "There’s not a lot of space left, but that’s no problem."
    ],
    "ru": [
      "Места осталось немного, но это не проблема."
    ]
  },
  {
    "time": [
      1179.92,
      1183.66
    ],
    "en": [
      "Point-to-point connections only require 2 addresses."
    ],
    "ru": [
      "Для соединений точка-точка требуется только 2 адреса."
    ]
  },
  {
    "time": [
      1183.66,
      1193.87
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
      1183.66,
      1193.87
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
      1193.87,
      1196.27
    ],
    "en": [
      "address of the point-to-point connection."
    ],
    "ru": [
      "адрес соединения точка-точка."
    ]
  },
  {
    "time": [
      1196.27,
      1199.65
    ],
    "en": [
      "Now, what prefix length should we use?"
    ],
    "ru": [
      "Теперь, какую длину префикса мы должны использовать?"
    ]
  },
  {
    "time": [
      1199.65,
      1206.11
    ],
    "en": [
      "So, as I mentioned in the first subnetting video, it IS possible to use a /31 prefix length for"
    ],
    "ru": [
      "Итак, как я упоминал в первом видео о разбиении на подсети, МОЖНО использовать длину префикса / 31 для"
    ]
  },
  {
    "time": [
      1206.11,
      1209.14
    ],
    "en": [
      "a subnet requiring only two hosts."
    ],
    "ru": [
      "подсеть, требующая всего двух хостов."
    ]
  },
  {
    "time": [
      1209.14,
      1214.85
    ],
    "en": [
      "However, for the CCNA test, if you are asked what prefix length to use for a subnet that"
    ],
    "ru": [
      "Однако для теста CCNA, если вас спросят, какую длину префикса использовать для подсети,"
    ]
  },
  {
    "time": [
      1214.85,
      1219.929
    ],
    "en": [
      "requires two hosts, I recommend NOT using a /31."
    ],
    "ru": [
      "требуется два хоста, я рекомендую НЕ использовать / 31."
    ]
  },
  {
    "time": [
      1219.929,
      1224.69
    ],
    "en": [
      "Instead, what other prefix length allows for 2 hosts?"
    ],
    "ru": [
      "Вместо этого какая другая длина префикса позволяет использовать 2 хоста?"
    ]
  },
  {
    "time": [
      1224.69,
      1231.98
    ],
    "en": [
      "Pause the video here and find your answers...okay, let’s check."
    ],
    "ru": [
      "Приостанови видео здесь и найди свои ответы ... ладно, давай проверим."
    ]
  },
  {
    "time": [
      1231.98,
      1235.82
    ],
    "en": [
      "So, a /30 prefix length allows for 2 hosts."
    ],
    "ru": [
      "Таким образом, длина префикса / 30 позволяет использовать 2 хоста."
    ]
  },
  {
    "time": [
      1235.82,
      1246.35
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
      1235.82,
      1246.35
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
      1246.35,
      1249.93
    ],
    "en": [
      "So here are the answers for the point-to-point connections."
    ],
    "ru": [
      "Итак, вот ответы на вопросы о двухточечных соединениях."
    ]
  },
  {
    "time": [
      1249.93,
      1256.46
    ],
    "en": [
      "There are only 2 usable host addresses, 1 for the Tokyo router and one for the Toronto router."
    ],
    "ru": [
      "Есть только 2 используемых адреса хоста: 1 для маршрутизатора Tokyo и один для маршрутизатора Toronto."
    ]
  },
  {
    "time": [
      1256.46,
      1262.61
    ],
    "en": [
      "router. Okay, so we successfully subnetted this network using VLSM, and there is still a little bit"
    ],
    "ru": [
      "роутер. Итак, мы успешно разбили эту сеть на подсети с помощью VLSM, и еще есть немного"
    ]
  },
  {
    "time": [
      1262.61,
      1265.42
    ],
    "en": [
      "of address space left."
    ],
    "ru": [
      "адресного пространства осталось."
    ]
  },
  {
    "time": [
      1265.42,
      1269.24
    ],
    "en": [
      "Notice that each subnet uses a different prefix length."
    ],
    "ru": [
      "Обратите внимание, что в каждой подсети используется разная длина префикса."
    ]
  },
  {
    "time": [
      1269.24,
      1273.03
    ],
    "en": [
      "If we tried to use the same prefix length for each subnet, there wouldn’t be enough"
    ],
    "ru": [
      "Если бы мы попытались использовать одинаковую длину префикса для каждой подсети, этого было бы недостаточно"
    ]
  },
  {
    "time": [
      1273.03,
      1280.02
    ],
    "en": [
      "address space, but with VLSM we were able to do it and leave some extra address space at the end."
    ],
    "ru": [
      "адресное пространство, но с VLSM мы смогли это сделать и оставили в конце дополнительное адресное пространство."
    ]
  },
  {
    "time": [
      1280.02,
      1284.99
    ],
    "en": [
      "at the end. So, here’s a reminder of the steps of VLSM."
    ],
    "ru": [
      "в конце. Итак, вот напоминание об этапах VLSM."
    ]
  },
  {
    "time": [
      1284.99,
      1289.91
    ],
    "en": [
      "Start with the largest subnet and assign it at the beginning of the address space, and"
    ],
    "ru": [
      "Начните с самой большой подсети и назначьте ее в начале адресного пространства, и"
    ]
  },
  {
    "time": [
      1289.91,
      1296.5
    ],
    "en": [
      "then proceed to the second largest subnet, etc. and repeat until you have assigned all necessary subnets."
    ],
    "ru": [
      "затем перейдите ко второй по величине подсети и т. д. и повторите, пока не назначите все необходимые подсети."
    ]
  },
  {
    "time": [
      1296.5,
      1301.42
    ],
    "en": [
      "necessary subnets. VLSM is a great way to use network address space more efficiently."
    ],
    "ru": [
      "необходимые подсети. VLSM - отличный способ более эффективно использовать сетевое адресное пространство."
    ]
  },
  {
    "time": [
      1301.42,
      1306.93
    ],
    "en": [
      "So, over these three videos we have done lots of subnetting practice questions."
    ],
    "ru": [
      "Итак, в этих трех видео мы задали множество практических вопросов по разделению на подсети."
    ]
  },
  {
    "time": [
      1306.93,
      1312.82
    ],
    "en": [
      "However, I recommend that you continue practicing subnetting using other resources."
    ],
    "ru": [
      "Однако я рекомендую вам продолжить практику разбиения на подсети с использованием других ресурсов."
    ]
  },
  {
    "time": [
      1312.82,
      1316.58
    ],
    "en": [
      "Here are three websites that provide excellent practice."
    ],
    "ru": [
      "Вот три веб-сайта, которые предоставляют отличную практику."
    ]
  },
  {
    "time": [
      1316.58,
      1323.89
    ],
    "en": [
      "subnettingquestions.com, subnetting.org, and subnettingpractice.com."
    ],
    "ru": [
      "subnettingquestions.com, subnetting.org и subnettingpractice.com."
    ]
  },
  {
    "time": [
      1323.89,
      1326.93
    ],
    "en": [
      "Check them out and try out questions from each site."
    ],
    "ru": [
      "Ознакомьтесь с ними и попробуйте вопросы с каждого сайта."
    ]
  },
  {
    "time": [
      1326.93,
      1331.16
    ],
    "en": [
      "Here’s an example question from subnettingquestions.com."
    ],
    "ru": [
      "Вот пример вопроса от subnettingquestions.com."
    ]
  },
  {
    "time": [
      1331.16,
      1336.13
    ],
    "en": [
      "It’s similar to the ones we have been doing in these videos."
    ],
    "ru": [
      "Это похоже на то, что мы делали в этих видео."
    ]
  },
  {
    "time": [
      1336.13,
      1342.01
    ],
    "en": [
      "And here’s an example question from subnetting.org, once again the same kind of question as we have"
    ],
    "ru": [
      "А вот пример вопроса от subnetting.org, опять же вопрос того же типа, что и у нас"
    ]
  },
  {
    "time": [
      1342.01,
      1345.35
    ],
    "en": [
      "done in these videos."
    ],
    "ru": [
      "сделано в этих видео."
    ]
  },
  {
    "time": [
      1345.35,
      1352.52
    ],
    "en": [
      "Those other two websites are good, however my personal favorite is this last one, subnettingpractice.com."
    ],
    "ru": [
      "Эти два других веб-сайта хороши, однако мой личный фаворит - последний, subnettingpractice.com."
    ]
  },
  {
    "time": [
      1352.52,
      1357.17
    ],
    "en": [
      "It has lots of challenging subnetting questions like this, which go beyond the sort of questions"
    ],
    "ru": [
      "В нем много сложных вопросов о подсетях, которые выходят за рамки вопросов."
    ]
  },
  {
    "time": [
      1357.17,
      1360.56
    ],
    "en": [
      "we have been doing in these videos."
    ],
    "ru": [
      "мы делали в этих видео."
    ]
  },
  {
    "time": [
      1360.56,
      1364.92
    ],
    "en": [
      "As for today’s quiz, There is no quiz for this video."
    ],
    "ru": [
      "Что касается сегодняшней викторины, для этого видео нет викторины."
    ]
  },
  {
    "time": [
      1364.92,
      1370.99
    ],
    "en": [
      "Instead, here is some homework: do at least ONE practice question from EACH of those practice"
    ],
    "ru": [
      "Вместо этого, вот вам домашнее задание: ответьте хотя бы на ОДИН практический вопрос из КАЖДОЙ практики."
    ]
  },
  {
    "time": [
      1370.99,
      1375.99
    ],
    "en": [
      "websites every day for at least one week."
    ],
    "ru": [
      "веб-сайтов каждый день в течение как минимум одной недели."
    ]
  },
  {
    "time": [
      1375.99,
      1379.2
    ],
    "en": [
      "There is also no flashcard deck for this video."
    ],
    "ru": [
      "Для этого видео также нет колоды карточек."
    ]
  },
  {
    "time": [
      1379.2,
      1384.2
    ],
    "en": [
      "Those three subnetting practice websites should give you all of the subnetting practice you need."
    ],
    "ru": [
      "Эти три веб-сайта с практикой разбиения на подсети должны дать вам всю необходимую практику разбиения на подсети."
    ]
  },
  {
    "time": [
      1384.2,
      1388.91
    ],
    "en": [
      "need. However, there will be a packet tracer practice lab, where you will practice subnetting a"
    ],
    "ru": [
      "необходимость. Тем не менее, будет практическая лаборатория по трассировщику пакетов, где вы будете практиковать разбиение на подсети"
    ]
  },
  {
    "time": [
      1388.91,
      1395.17
    ],
    "en": [
      "network and assigning the appropriate IP addresses to different devices."
    ],
    "ru": [
      "сеть и присвоение соответствующих IP-адресов различным устройствам."
    ]
  },
  {
    "time": [
      1395.17,
      1400.44
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
      1400.44,
      1404.1
    ],
    "en": [
      "Vance, Mike, Yonatan, and Lito."
    ],
    "ru": [
      "Вэнс, Майк, Йонатан и Лито."
    ]
  },
  {
    "time": [
      1404.1,
      1406.559
    ],
    "en": [
      "Thank you again for your support."
    ],
    "ru": [
      "Еще раз спасибо за вашу поддержку."
    ]
  },
  {
    "time": [
      1406.559,
      1411.35
    ],
    "en": [
      "Thank you to my JCNA-level channel members too."
    ],
    "ru": [
      "Спасибо также участникам моего канала уровня JCNA."
    ]
  },
  {
    "time": [
      1411.35,
      1412.92
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
      1412.92,
      1416.97
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
      1416.97,
      1420.17
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
      1420.17,
      1423.05
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
      1423.05,
      1430.32
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
      1430.32,
      1430.32
    ],
    "en": [
      "Brave browser. That's all for now."
    ],
    "ru": [
      "Смелый браузер. На этом пока все."
    ]
  }
]