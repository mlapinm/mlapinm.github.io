var l14404r = [
"Capturing cleaning changes5m.",
"Привет еще раз.",
"Теперь, когда вынаучились делать ваши данные безупречно чистыми,пришло время разобраться со всей грязью, которую вы оставили позади.",
"Когда вы очищаете свои данные,вся неверная или устаревшая информацияушел, оставив вам контент самого высокого качества.",
"Но все те изменения, которые вы внесли вданные тоже ценны.",
"В этом видео мы обсудимзачем отслеживать измененияважно для каждого проекта данных и какдокументируйте все ваши изменения очистки вубедитесь, что все остаются в курсе.",
"Это включает в себя документацию, котораяпроцесс отслеживания изменений,дополнения, удаления и ошибкивовлечены в ваши усилия по очистке данных.",
"Вы можете думать об этом как о криминальном телешоу.",
"Улики преступления обнаружены вместо происшествия и переданы судебно-медицинской экспертизе.",
"Они анализируют каждый сантиметрсцену и документировать каждый шаг,чтобы они могли рассказать историю с доказательствами.",
"Много раз,судебно-медицинский экспертвызван в суд для дачи показанийэти доказательства, и ониподробный отчет для ознакомления.",
"То же самое относится и к очистке данных.",
"Ошибки данных - это преступление,очистка данных собирает доказательства,и документация детализируетсячто именно произошло для экспертной оценки или суда.",
"Наличие записи о том, как развивался набор данныхделает три очень важные вещи.",
"Во-первых, это позволяет нам восстанавливать ошибки очистки данных.",
"Вместо того, чтобы чесать затылки,пытаемся вспомнить, что мымог бы сделать три месяца назад,у нас есть шпаргалка, на которую можно положиться, если мынаткнуться на те же ошибки снова позже.",
"Также неплохо создатьскорее чистый столчем переопределение существующей таблицы.",
"Таким образом, у вас все еще есть исходные данныеесли вам нужно повторить уборку.",
"Во-вторых, документация дает вам возможностьинформировать других пользователей о внесенных вами изменениях.",
"Если вы когда-нибудь отправитесь в отпуск или получите повышение,аналитик, который берет на себя все вместо васбудет иметь справочный лист для проверки.",
"В-третьих, документация помогает определитькачество данных, которые будут использоваться в анализе.",
"Первые два преимущества предполагают, что ошибки невозможно исправить.",
"Но если они есть, запись даетИнженер по обработке данных может получить дополнительную информацию.",
"Это также отличное предупреждение для нас самих, что набор данныхсодержит множество ошибок и его следует избегать в будущем.",
"Если на исправление ошибок ушло много времени,может быть лучше проверитьальтернативные наборы данных, которые мы можем использовать вместо этого.",
"Аналитики данных обычно используютжурнал изменений для доступа к этой информации.",
"Напомним, журнал изменений — это файл, содержащийхронологически упорядоченный списокизменения, внесенные в проект.",
"Вы можете использовать и просматривать журнал изменений вэлектронные таблицы и SQL для достижения аналогичных результатов.",
"Начнем с электронной таблицы.",
"Мы можем использовать историю версий Листа,который обеспечивает отслеживание в реальном временивсе изменения и кто их внесот отдельных ячеек ко всему рабочему листу.",
"Чтобы найти эту функцию,щелкните вкладку Файл,а затем выберите История версий.",
"На правой панеливыбрать более раннюю версию.",
"Мы можем найти, кто редактировал файл ивнесенные ими изменения в столбце рядом с их именем.",
"Чтобы вернуться к текущей версии,перейдите в верхний левый и нажмите «Назад». Если вы хотите проверить изменения в определенной ячейке,мы можем щелкнуть правой кнопкой мыши и выбрать «Показать историю редактирования».",
"Кроме того, если вы хотите, чтобы другиевозможность просматривать историю версий листа,вам нужно будет назначить разрешение.",
"Теперь давайте переключим передачу и поговорим о SQL.",
"То, как вы создаете и просматриваете журнал изменений с помощьюSQL зависит от используемой вами программы.",
"Некоторые компании даже имеют собственное отдельное программное обеспечение. который отслеживает журналы изменений и важные SQL-запросы.",
"Это становится довольно продвинутым.",
"По сути, все, что вам нужно сделать, этоукажите, что именно вы сделали, ипочему, когда вы совершаете запрос крепозиторий как новый и улучшенный запрос.",
"Это позволяет компании вернутьсявернуться к предыдущей версииесли что-то, что вы сделали, приведет к сбою системы,что случилось со мной раньше.",
"Другой вариант - просто добавитькомментарии во время очистки данных в SQL.",
"Это поможет вам построитьваш журнал изменений постфактум.",
"А пока проверимистория запросов, в которой отслеживаются все выполненные вами запросы.",
"Вы можете нажать на любой из них, чтобы вернуться кпредыдущую версию вашего запроса илиоткройте старую версию, чтобы найти то, что у вас естьизмененный.",
"Вот что у нас есть.",
"Я нахожусь на вкладке История запросов.",
"В правом нижнем углу перечисленывсе запросы, которые выполняются по дате и времени.",
"Вы можете нажать на этот значок справа откаждый отдельный запрос, чтобы довести его до редактора запросов.",
"Журналы изменений, подобные этимотличный способ держать себя в тонусе.",
"Это также позволяет вашей команде получитьобновления в реальном времени, когда они этого хотят.",
"Но есть еще один способ сохранить общениетечет, и это отчетность.",
"Оставайтесь с нами, и вы узнаете несколько простых способов поделитьсяваша документация и, возможно,произвести впечатление на ваших заинтересованных сторон в процессе.",
"Увидимся в следующем видео.",
]