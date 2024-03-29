var l41501r = [
"How Databases Work18m.",
"Здравствуйте, и добро пожаловать на нашу лекцию по SQL.",
"Итак, это очень, очень короткое введение в SQL.",
"Я люблю SQL.",
"Я разговаривал со студентом на днях, и они такие: «SQL — мой любимый язык».",
"И я сказал: «Я должен согласиться, что SQL тоже мой любимый язык».",
"Поскольку SQL настолько красив, вам даже не нужно писать петли в SQL, мы пишем петли на таких языках, как Python, только потому, что мы должны.",
"Проблема в том, что SQL идеален, , но это не так, как мы могли бы написать что-то такое сложное, как Linux или Python.",
"И поэтому SQL не совсем так, как думают компьютеры, у нас есть такие вещи, называемые движками баз данных, и эти движки баз данных заставляют работать очень, очень хорошо.",
"И поэтому SQL - отличный способ организовать данные, , но много работы ушло в , сохраняя эти данные организованными и упрощая их.",
"Таким образом, это как будто есть эта абстракция, , и это много работы, чтобы заставить эту абстракцию работать.",
"Итак, я хочу начать с немного истории перед базами данных, , и вы могли бы подумать: «Ну, до баз данных , как это может быть?» Ну, в старые времена, и если вы смотрите старые фильмы с компьютерами, вы видите фотографии, которые имеют эти магнитофонные машины на фоне, и они вращаются.",
"И спиннинг ленточной машины является своего рода физическое проявление вычисления.",
"И это было связано с тем, что в былые времена у компьютеров не хватало данных , чтобы хранить все свои данные в памяти или на диске, у нас даже не было дисков в первые дни.",
"В первые дни ленты были тем, что у нас было, и мы использовали своего рода вариацию аудио-лент, и вместо аудио, они содержали данные, нули и единицы.",
"И так, как все будет работать в старые времена , чтобы вы могли иметь базу данных, как это было, была база данных, все ваши данные были записаны на ленту.",
"И главное, что запись это была физическая вещь, , и поэтому вам пришлось перемотать ее назад, идти вперед и назад.",
"И большинство из вас, вероятно, никогда даже не видели кассетную ленту или восьмитрековую ленту или ленту на катушку, но это физическая длинная тысяча футов кусок пластика, и чтобы получить данные в конце, вам пришлось вращать его до тех пор, пока вы не добрались туда.",
"И это было не то, что мы называем случайным доступом, , что означает, что при случайном доступе, ли это память или диск, случайный доступ позволяет добраться до в любом месте примерно за фиксированное количество времени.",
"Принимая во внимание, что если вы близки к чему-то на кассете, вы можете добраться до нее очень быстро.",
"Если ты далеко, ты должен идти, , а потом ждать, а потом возвращаться.",
"Это привело к шаблону , где каждую ночь мы брали кассету со вчерашнего счета.",
"Скажем так, что мы банк, и у нас люди подходят к окну, вкладывают деньги, забирают деньги.",
"И тогда мы бы сделали все транзакции, иногда на физически пробитые карты, , а потом мы сортируем их, верно?",
"И скажем так, у нас есть 26 счетов, и человек C показывает вверх добавляет $10, а человек F появляется и вычитает $10, и т.д., и т.д., и т.д.",
", и тогда, что мы будем иметь в ночное время, мы получим все эти отсортированные, и были физические машины, которые stots будет на самом деле сортировать их в ранние дни, и тогда у нас будет старый баланс, A, B, C, D, E, F, сидя на ленте в порядке, отсортированный по порядку.",
"И мы начали процесс после того, как банк закрыл , где мы читали первую запись с ленты, как A, мы читали первую транзакцию с карт, и сравнивали их.",
"И если бы лента была раньше, чем транзакция или ниже, мы бы просто скопировали ее, чтобы скопировать ее.",
"И тогда B будет сравниваться с C, и B будет скопирован, и затем C наткнулся, и тогда мы поймем, что данные C, мы должны обновить данные C, и добавить $10 к балансу, и тогда мы будем писать это.",
"И вы заметите, как мы пишем это, мы сортируем, это в отсортированном порядке.",
"Тогда мы скопировали D, у нас ничего нет для D, , и это просто скопировали.",
"Мы бы скопировали E, у нас ничего не было для E, и это было бы просто скопировано, и тогда мы бы, упс, забыли поставить F на эту картинку, мы бы F и мы вычитали 10, и мы бы скопировали его.",
"И тогда мы закончим с то, что мы должны были сделать в ту ночь, и тогда мы бы сделали, это мы бы получили эти новые обновленные данные, которые были отсортированы в порядке счета.",
"А потом следующей ночью мы переместили бы ленту, новой лентой будет старая лента, и мы будем делать это снова и снова.",
"И иногда эти процессы запускались в течение четырех или пяти часов, потому что ленты были длинными или , это должно быть несколько лент, и так много вычислений было сделано после того, как банки закрылись в пять часов, both затем группа людей приходила, stoth мы называли их операторами, они будут монтировать эти ленты и запускать эти задания и просто сидеть там и смотреть эти ленты вращаются, поскольку данные были копируются из одного на другой.",
"Так что да, это довольно круто.",
"К счастью, мы это уже не так делаем.",
"То, что сделало это так, что нам не нужно делать , это изобретение дисковых дисков.",
"И диски магнитные носители, точно так же, как ленточные накопители, но разница была в том, что они были на этих вращающихся платтерах.",
"И вот что вы могли бы сделать, так это данные были в серии концентрических кругов на этих блюдах, , а затем у вас была голова , которая могла быстро перемещаться и выходить.",
"И поэтому скорость, с которой вы могли получить доступ к данным, была комбинация со скоростью, при которой голова могла двигаться к определенному цилиндру, , и вам пришлось ждать, пока данные не придут.",
"И поэтому иногда у вас будет 5,400 оборотов в минуту.",
"Это означает, что 5,400, 5,000 раз в минуту, , что 100 раз в секунду.",
"Вы бы подождали 100 секунды для этого.",
"И так это намного лучше, чем ждать минут с половиной, две минуты, даже 10 минут, чтобы закрутить ленту.",
"Проблема была в том, что в том, что мы такие: «Хорошо, теперь, когда у нас есть эта замечательная технология, мы можем хранить все наши ночные данные на диске, потому что достаточно места, как мы создаем технологию stoth, чтобы действительно хорошо использовать это?» И много исследований, много информатики, много исследований вендоров ушло в понимание того, как лучше всего использовать эту новую дисковую вещь.",
"Я помню, как разговаривал с людьми, как, , потому что мы использовали дискету, которые они были намного медленнее, так что они не пошли 5,400.",
"Так что это может занять четверть секунды, чтобы переместить голову, и это может занять почти секунду, чтобы вращать ее вокруг, который все еще был намного быстрее, чем 10 минут, верно?",
"Так что это примерно секунда, чтобы добраться до в любом месте на дискете.",
"И мы построили подходы к хранению данных, и мы начнем с этой физической вещи , и вы услышите, как она хрючит и хрючит и движется, , и тогда вы придумали бы лучший способ, чтобы сохранить данные, stoth, а затем она хрючит и перемещается меньше, вещь будет идти быстрее.",
"Это было похоже на исследование.",
"Это были старые добрые времена, когда компьютеры действительно делали шумы, и вы могли изменить свой код внутри компьютеров.",
"И первое, что мы сделали, это просто взял эти последовательные мастер-обновления и поставил их, , но это оказалось не лучшим.",
"И это было своего рода исследование, не только то, как мы можем делать то, что мы использовали для данных, которые не могли бы быть получены случайным образом, и вместо этого, скажем, давайте воспользуемся этим.",
"И так много исследований, много вендоров, было много очень дорогостоящего программного обеспечения , которое люди купили, чтобы сказать: «Смотри, ты банк, и ты действительно хочешь знать, как это работает».",
"И то, что произошло в 60-х и 70-х годах, компьютерные продавцы боролись, и они придумали технику, которая по сравнению с нашей текущей техникой базы данных, был просто тривиально прост, , но тогда потребовалось много работы, другие компьютерные поставщики, , и они бы сказали: «Наш последовательный механизм индекса лучше».",
"И продавец 2 сказал бы: «Наш сетевой подход лучше».А потом они сидели, и боролись друг с другом, , а потом бедные клиенты такие: «Я даже не знаю, о чем вы говорите».",
"И тогда они просто купили вещи у продавца, который взял их в гольф или для лучший обед или взял их в поездку во Флориду.",
"И тогда они просто приспособились к тому, что сделал этот поставщик.",
"И это было действительно страшно, потому что мы были переезжали в место, где вы были заперты в продавца, , а затем, как только вы заперты в поставщика, вы в плохом состоянии.",
"И поэтому правительство США, , в частности, имело тонну денег и покупало тонны компьютеров, как для нормальной обработки данных, так и для стратегических вещей, таких как военные вещи, both и поэтому они покупали тонны компьютеров и foth они знали, что эти продавцы, точка, где они заблокировали их в одном вендоре, , что поставщик просто сможет диктовать цену.",
"И поэтому федеральное правительство, через NIST, Национальный институт стандартов и технологий, решило, что базам данных нужен стандарт.",
"Им нужен был способ, чтобы мы могли разговаривать с любой базой данных от любого поставщика, используя ту же технику и не должны делать одного поставщика, , а затем, если вы переключили поставщиков, вы должны были полностью переписать свое программное обеспечение.",
"Таким образом, NIST не уточнил, как эта абстракция, этот стандарт, будет работать.",
"Они только что привели продавцов и сказали: «Мы прекратим использовать ваше программное обеспечение, если вы не придумали стандарт».",
"И это было идеальное время, потому что хотя продавцы думали, что все было идеально и замечательно, было много перевернутого.",
"И в частности, была эта концепция реляционных баз данных, которая тогда была больше от математической теории лучшего способа хранения и извлечения данных, чем это было beth практически реализованной доступной технологии.",
"И так SQL, и это Лиз Фонг, , которую я пошел, и я сделал интервью в NIST, она говорит о ранних днях, это отличное интервью, в первые дни того, как этот стандарт SQL действительно сделал bit так много смысла и действительно фиксировал sts промышленность и заставил промышленность работать очень красиво",
"И я рекомендую вам взглянуть на это видео, чтобы вы могли увидеть.",
"Теперь, то, что SQL в основном сказал, что давайте не будем беспокоиться так много о том, где эти данные на самом деле находятся на диске, потому что более ранние подходы к базе данных были , программисты знали бы, что там были base цилиндры и позиции, stoth,",
"и мы бы поместить вещи определенным образом, будет делать индексы , и мы будем смотреть на индексы сами, все виды разных вещей, или мы будем читать в одно место на диске, и это будет иметь адрес следующего места , которые мы должны читать на диске.",
"И они сказали, Вы знаете что, давайте не будем так беспокоиться о физической структуры хранения на столе, но вместо этого, давайте придумаем язык , с помощью которого мы можем выразить то, что мы должны читать, писать, обновлять, хранить и удалять на диске на очень простой язык, то мы можем создать часть программного обеспечения , что под этим может быть много форматов дисков.",
"И тогда мы все могли бы просто использовать этот язык, и вы могли бы купить Vendor A и использовать этот язык и Vendor B и использовать этот язык, и затем вы могли бы даже сравнить его и сказать: «Вот куча вещей на этом языке.",
"Какой поставщик может работать быстрее?» Итак, NIST также имел ряд тестов, TPC были некоторыми из тестов.",
"И то, что они сделали, это они в основном сделали , чтобы это было похоже на красивый и простой язык, и это то, что мы называем SQL.",
"Я думаю, что в какой-то момент он назывался языком простого запроса, , и это тот язык, который мы используем для общения с базами данных.",
"И интересно то, что SQL позволил нам делать на самом деле в 60-х и 70-х годах, когда он впервые вышел, состоял в том, чтобы поговорить со старом стиле базами данных, таких как индекс, последовательные и сетевые базы данных, и как эта новая форма называется реляционными базами данных, которые были похожи на этот удивительный математическая основа, , но была реализована плохо в первый раз, мы могли просто сказать: «О странно».",
"Когда производительность реляционных баз данных дошла до точки, где она была так же хороша, как и другие базы данных, тогда мы могли бы просто переключиться, и мы могли бы говорить один и тот же SQL.",
"Таким образом, это позволило удивительную инновацию в течение 10 или даже 15-летнего периода, , где абстракция позволила нам улучшить базы данных в замечательным способом, без того чтобы действительно меняли то, как мы, программисты, использовали их.",
"Довольно круто, буду честен.",
"И поэтому я говорил об этой идее реляционных баз данных и реляционных баз данных, и признаю, что когда я впервые увидел relational bases в начале 1980-х годов, мне кажется, что это чушь, потому что, опять же, both я мог слышать дискеты, и я знал, что мы двигали что-то, и у меня было так много осознания того, что происходит, , и мне понравилось это осознание.",
"И реляционные базы данных вроде скрывали то, что происходило за этим слоем, и оказалось, что всякий раз, когда я использовал его, он был медленнее, потому что он еще не был умным.",
"И поэтому реляционные базы данных начали как математическая идея, как теоретический лучший способ представления сетей данных с столбцами, и строками, и соединениями, и объединениями, и итогами, и мы поговорим обо всем этом в конце концов.",
"И это была прекрасная идея, и математика была правильная.",
"Просто потребовалось много времени, чтобы добраться до точки, где превосходная математика реляционных баз данных работала лучше, чем высокоумно оптимизированные системы баз данных предыдущего поколения.",
"Таким образом, есть много общих систем баз данных , с которыми вы столкнетесь.",
"Некоторые из них являются открытыми исходными кодами, некоторые из них являются коммерческими.",
"Postgres и MySQL являются открытым исходным кодом.",
"Postgres, вероятно, более запутанным и сложным и богатым, Oracle представляет собой сложную, сложную, и богатую базу данных, которая доступна для множества и больших денег, и Microsoft имеет базу данных под названием SQL Server.",
"И все эти базы данных, которые мы видим, эволюционировали в после того, как спецификация SQL существовала, , поэтому они просто построили SQL.",
"Были унаследованные базы данных, которые вроде изучали SQL.",
"И есть много других баз данных.",
"SQLite - это то, что мы на самом деле собираемся использовать с этим курсом, , и это супер круто, супер быстро.",
"На вашем мобильном телефоне у вас, вероятно, 40 копий SQLite, и в вашем автомобиле у вас, вероятно, 40 копий SQLite, потому что это настоящая крошечная встроенная база данных.",
"Это не очень хорошо для масштабов производства.",
"Когда вы получили 100 пользователей одновременно попадающих на веб-сайт, Postgres, MySQL или Oracle или SQL Server являются действительно своего рода онлайн-реальными многопроцессорными базами данных.",
"Но SQLite отлично, потому что это очень просто.",
"Он хранит все в одном файле, мы можем перемещать файл вокруг и т.д.",
"Так что я люблю SQLite, и в этом классе и в этой вещи мы будем говорить о SQLite.",
"Но все, о чем мы говорим , относится ко всем этим различным системам баз данных.",
"Итак, первое, что вы должны сделать, когда вы собираетесь работать с базой данных, это у вас должен придумать контракт между вами и базой данных о том, какая форма both колонки, насколько широки колонки, а какие данные вы собираетесь хранить в этом.",
"И затем он сообщает, как программное обеспечение базы данных собирается в структуру, что база данных, как на диске.",
"И часть того, что вы делаете, это то, что вы позволяете программному обеспечению базы данных MySQL, или Postgres или SQLite супер-оптимизировать свое хранилище.",
"Это намного умнее тебя.",
"Что-то вроде Oracle, или MySQL, или Postgres, вероятно, представляет миллиард долларов, если не больше, исследований и разработок о лучшем способе хранить и извлекать данные.",
"И тебе просто не нужно ничего об этом знать.",
"Вы просто говорите, смотрите, у меня будут эти столбцы, это будет 100 символов текста, то я буду иметь целое число и число с плавающей запятой, затем 3000 символов текста, и вы беспокоитесь обо всей этой детали.",
"Но ключ в том, что если вы просто говорите: «Я буду хранить все, что я хочу», то это не может оптимизировать, и так есть вещь, где вы должны заключить контракт в начале и сказать: «Это именно то, как я собираюсь выложить данные, когда я говорю с системой баз данных.",
", а затем вы можете понять, как выложить данные на самом диске.» И так это называется схемой или моделью базы данных, и построение модели базы данных само по себе классная вещь.",
"Итак, если вы создаете сложное приложение, у вас есть эти модели, и у них есть связи, и мы в конце концов поговорим обо всем этом.",
"Но очень важно сказать , что это контракт между вами и программное обеспечение базы данных, так что программное обеспечение базы данных может оптимизировать хранение базы данных.",
"Теперь, как только вы дали схему, , вы можете написать запросы, которые зависят от этой схемы.",
"Таким образом, у вас может быть столбец под названием email и столбец с именем, , а затем вы можете вставить данные в базу данных, используя эту схему, вы можете получить данные с помощью схемы, вы можете изменить вид данных где-то глубоко внутри базы данных, а затем вы можете удалить данные.",
"Подожди секунду.",
"Ух ты.",
"Привет, там.",
"Что ты там делаешь?",
"О, блин.",
"Извини, извини.",
"Ты плохое существо.",
"Посмотри на это.",
"Мне было интересно, что это за шум.",
"Иди сюда.",
"Я должен познакомить вас со всеми этими людьми.",
"Иди сюда.",
"Ты не ведёшь себя.",
"Так это Шелби.",
"Привет, Шелби.",
"Так это Шелби.",
"Это мой щенок.",
"Я пытаюсь удержать ее подальше от клетки и позволить ей сидеть и вставать за мои ноги, и у нее есть игрушки для жевания.",
"Привет, Шелби.",
"Это Шелби.",
"Она прерывает.",
"Ты прерываешь мою лекцию.",
"Но ты милый.",
"Так что перестань жевать ручку, жевать твои жевательные игрушки, которые я тебе дал, хорошо?",
"Позвольте мне пройти эту лекцию.",
"Хорошо, ты можешь спуститься.",
"Просто перестань его жевать.",
"Извини за то, что собака прерывает.",
"Я просто слышал жевательные звуки и я подумал, я взял все, но потом было одно перо на полу, и поэтому ручка, плохая ручка встречает мистера Щенка.",
"О, ну.",
"Ладно, где я был?",
"SQL.",
"CRUD, создание, чтение, обновление и удаление данных.",
"И поэтому наш следующий шаг - это на самом деле сделать некоторый SQL и создать базу данных.",
]