export interface University {
  id: number;
  name: string;
  nameZh: string;
  city: string;
  cityRu: string;
  type: string;
  qsRanking: number | string;
  program: string;
  specialties: string[];
  language: string;
  preparatoryYear: string;
  hskAfterYear: string;
  costLanguageCNY: number;
  costBachelorCNY: number;
  dormitoryCNY: number;
  grantCSC: string;
  grantCIS: string;
  deadlineCSC: string;
  deadlineCIS: string;
  documents: string;
  link: string;
  competition: number;
  acceptanceRate: number;
  avgGPA: number;
  hskPassRate: number;
  grantRenewalRate: number;
  difficultyCategory: 'EXTREMELY_HARD' | 'HARD' | 'MEDIUM' | 'EASY';
  cityLifeCost: number;
  cityDescription: string;
  climate: string;
  compatriots: string;
  internet: string;
  partTime: string;
}

export const universities: University[] = [
  {
    id: 1,
    name: "Университет Цинхуа",
    nameZh: "清华大学",
    city: "Beijing",
    cityRu: "Пекин",
    type: "Лига C9 (топ-2 Китая)",
    qsRanking: 14,
    program: "1+4 Бакалавриат",
    specialties: ["Информатика", "Инженерия", "Бизнес", "ИИ"],
    language: "Англ., Кит.",
    preparatoryYear: "Да (обязательно)",
    hskAfterYear: "ХСКЬ 4",
    costLanguageCNY: 30000,
    costBachelorCNY: 40000,
    dormitoryCNY: 8000,
    grantCSC: "Да (полное финансирование)",
    grantCIS: "Да",
    deadlineCSC: "31 марта 2027",
    deadlineCIS: "1 мая 2027",
    documents: "Диплом, транскрипт, 2 рекомендации, мотивационное письмо, план исследования, медсправка, паспорт, портфолио",
    link: "https://join-tsinghua.edu.cn",
    competition: 25,
    acceptanceRate: 4,
    avgGPA: 3.8,
    hskPassRate: 85,
    grantRenewalRate: 70,
    difficultyCategory: "EXTREMELY_HARD",
    cityLifeCost: 7000,
    cityDescription: "Столица Китая, политический и культурный центр. Мегаполис с 22 млн жителей.",
    climate: "Холодная зима (-10°C), жаркое лето (35°C)",
    compatriots: "Много",
    internet: "ВПН обязателен",
    partTime: "Ограничена (20 ч/нед)"
  },
  {
    id: 2,
    name: "Чжэцзянский университет",
    nameZh: "浙江大学",
    city: "Hangzhou",
    cityRu: "Ханчжоу",
    type: "Лига C9 (топ-9 Китая)",
    qsRanking: 45,
    program: "1+4 Бакалавриат",
    specialties: ["Информатика", "Инженерия", "Бизнес", "Медицина"],
    language: "Англ., Кит.",
    preparatoryYear: "Да (для тех, кто без ХСКЬ)",
    hskAfterYear: "ХСКЬ 4 (ХСКЬ 5 для медицины)",
    costLanguageCNY: 22000,
    costBachelorCNY: 32000,
    dormitoryCNY: 6000,
    grantCSC: "Да (полное финансирование)",
    grantCIS: "Да (1+4)",
    deadlineCSC: "31 марта 2027",
    deadlineCIS: "1 мая 2027",
    documents: "Диплом, транскрипт, 2 рекомендации, мотивационное письмо, медсправка, паспорт, ХСКЬ (если есть)",
    link: "http://iczu.zju.edu.cn",
    competition: 18,
    acceptanceRate: 6,
    avgGPA: 3.7,
    hskPassRate: 88,
    grantRenewalRate: 75,
    difficultyCategory: "HARD",
    cityLifeCost: 5000,
    cityDescription: "«Китайская Кремниевая долина», штаб-квартира Alibaba. Зелёный город с озером Сиху.",
    climate: "Мягкий, влажное лето",
    compatriots: "Много",
    internet: "ВПН обязателен",
    partTime: "Ограничена"
  },
  {
    id: 3,
    name: "Уханьский университет",
    nameZh: "武汉大学",
    city: "Wuhan",
    cityRu: "Ухань",
    type: "Проект 985",
    qsRanking: 194,
    program: "1+4 Бакалавриат",
    specialties: ["Информатика", "Инженерия", "Право", "Бизнес", "Медицина"],
    language: "Англ., Кит.",
    preparatoryYear: "Да",
    hskAfterYear: "ХСКЬ 4",
    costLanguageCNY: 18000,
    costBachelorCNY: 26000,
    dormitoryCNY: 4000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "5 апреля 2027",
    deadlineCIS: "20 мая 2027",
    documents: "Диплом, транскрипт, 2 рекомендации, мотивационное письмо, медсправка, паспорт",
    link: "http://icw.whu.edu.cn",
    competition: 8,
    acceptanceRate: 12,
    avgGPA: 3.4,
    hskPassRate: 92,
    grantRenewalRate: 85,
    difficultyCategory: "MEDIUM",
    cityLifeCost: 3500,
    cityDescription: "Крупный образовательный центр, 3 млн студентов. Доступный город.",
    climate: "Жаркое влажное лето, холодная зима",
    compatriots: "Средне",
    internet: "ВПН обязателен",
    partTime: "Разрешена в кампусе"
  },
  {
    id: 4,
    name: "Харбинский политехнический университет",
    nameZh: "哈尔滨工业大学",
    city: "Harbin",
    cityRu: "Харбин",
    type: "Лига C9",
    qsRanking: 256,
    program: "1+4 Бакалавриат",
    specialties: ["Инженерия", "Информатика", "Робототехника", "Аэрокосмическая"],
    language: "Англ., Кит.",
    preparatoryYear: "Да",
    hskAfterYear: "ХСКЬ 4",
    costLanguageCNY: 20000,
    costBachelorCNY: 24000,
    dormitoryCNY: 4000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "15 марта 2027",
    deadlineCIS: "30 апреля 2027",
    documents: "Диплом, транскрипт, 2 рекомендации, мотивационное письмо, медсправка, паспорт",
    link: "http://hit.edu.cn",
    competition: 10,
    acceptanceRate: 10,
    avgGPA: 3.5,
    hskPassRate: 90,
    grantRenewalRate: 80,
    difficultyCategory: "HARD",
    cityLifeCost: 3000,
    cityDescription: "Ледовый город, центр аэрокосмической индустрии. Очень холодно зимой (-30°C).",
    climate: "Экстремально холодная зима, тёплое лето",
    compatriots: "Много",
    internet: "ВПН обязателен",
    partTime: "Ограничена"
  },
  {
    id: 5,
    name: "Пекинский университет языков и культуры",
    nameZh: "北京语言大学",
    city: "Beijing",
    cityRu: "Пекин",
    type: "Лучший по китайскому языку",
    qsRanking: "Не в QS (языковой)",
    program: "1+4 Бакалавриат",
    specialties: ["Бизнес", "Информатика", "Перевод", "Международные отношения"],
    language: "Англ., Кит.",
    preparatoryYear: "Да (обязательно)",
    hskAfterYear: "ХСКЬ 4",
    costLanguageCNY: 26000,
    costBachelorCNY: 26000,
    dormitoryCNY: 8000,
    grantCSC: "Да (через посольство)",
    grantCIS: "Да (1+4 года)",
    deadlineCSC: "10 апреля 2027",
    deadlineCIS: "15 мая 2027",
    documents: "Аттестат, транскрипт, мотивационное письмо, 2 рекомендации, медсправка, паспорт, справка о несудимости",
    link: "https://www.blcu.edu.cn",
    competition: 5,
    acceptanceRate: 20,
    avgGPA: 3.2,
    hskPassRate: 98,
    grantRenewalRate: 80,
    difficultyCategory: "MEDIUM",
    cityLifeCost: 7000,
    cityDescription: "Столица Китая. Лучший вуз для изучения китайского языка. Много иностранцев.",
    climate: "Холодная зима, жаркое лето",
    compatriots: "Много",
    internet: "ВПН обязателен",
    partTime: "Ограничена"
  },
  {
    id: 6,
    name: "Университет Цзянсу",
    nameZh: "江苏大学",
    city: "Zhenjiang",
    cityRu: "Чжэньцзян",
    type: "Провинциальный",
    qsRanking: 750,
    program: "1+4 Бакалавриат",
    specialties: ["Медицина", "Инженерия", "Информатика"],
    language: "Англ.",
    preparatoryYear: "Да",
    hskAfterYear: "ХСКЬ 4",
    costLanguageCNY: 16000,
    costBachelorCNY: 18000,
    dormitoryCNY: 3000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "1 апреля 2027",
    deadlineCIS: "30 мая 2027",
    documents: "Диплом, транскрипт, 2 рекомендации, мотивационное письмо, медсправка, паспорт",
    link: "https://ujs.edu.cn",
    competition: 3,
    acceptanceRate: 35,
    avgGPA: 3.0,
    hskPassRate: 95,
    grantRenewalRate: 90,
    difficultyCategory: "EASY",
    cityLifeCost: 2500,
    cityDescription: "Маленький спокойный город в провинции Цзянсу. Дёшево, но мало развлечений.",
    climate: "Умеренный, 4 сезона",
    compatriots: "Мало",
    internet: "ВПН обязателен",
    partTime: "Разрешена"
  },
  {
    id: 7,
    name: "Сямэньский университет",
    nameZh: "厦门大学",
    city: "Xiamen",
    cityRu: "Сямынь",
    type: "Проект 985",
    qsRanking: 392,
    program: "1+4 Бакалавриат",
    specialties: ["Бизнес", "Экономика", "Информатика", "Океанология"],
    language: "Англ., Кит.",
    preparatoryYear: "Да",
    hskAfterYear: "ХСКЬ 4",
    costLanguageCNY: 20000,
    costBachelorCNY: 26000,
    dormitoryCNY: 5000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "15 апреля 2027",
    deadlineCIS: "25 мая 2027",
    documents: "Диплом, транскрипт, 2 рекомендации, мотивационное письмо, медсправка, паспорт",
    link: "https://oec.xmu.edu.cn",
    competition: 7,
    acceptanceRate: 14,
    avgGPA: 3.3,
    hskPassRate: 91,
    grantRenewalRate: 82,
    difficultyCategory: "MEDIUM",
    cityLifeCost: 4000,
    cityDescription: "Прибрежный город-курорт. Красивый кампус у моря. Тёплый климат круглый год.",
    climate: "Субтропический, тёплый",
    compatriots: "Средне",
    internet: "ВПН обязателен",
    partTime: "Ограничена"
  },
  {
    id: 8,
    name: "Университет Сунь Ятсена",
    nameZh: "中山大学",
    city: "Guangzhou",
    cityRu: "Гуанчжоу",
    type: "Проект 985",
    qsRanking: 267,
    program: "1+4 Бакалавриат",
    specialties: ["Медицина", "Бизнес", "Право", "Информатика", "Инженерия"],
    language: "Англ., Кит.",
    preparatoryYear: "Да",
    hskAfterYear: "ХСКЬ 4",
    costLanguageCNY: 22000,
    costBachelorCNY: 28000,
    dormitoryCNY: 5000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "10 апреля 2027",
    deadlineCIS: "20 мая 2027",
    documents: "Диплом, транскрипт, 2 рекомендации, мотивационное письмо, медсправка, паспорт",
    link: "http://oec.sysu.edu.cn",
    competition: 9,
    acceptanceRate: 11,
    avgGPA: 3.4,
    hskPassRate: 90,
    grantRenewalRate: 83,
    difficultyCategory: "MEDIUM",
    cityLifeCost: 4500,
    cityDescription: "Торговый мегаполис на юге. Халяльная еда доступна. Близко к Юго-Восточной Азии.",
    climate: "Субтропический, жаркое влажное лето",
    compatriots: "Много",
    internet: "ВПН обязателен",
    partTime: "Ограничена"
  }
];

export const CNY_TO_RUB = 12.5;

export const grants = [
  {
    name: "CSC Тип А (Двусторонняя)",
    nameRu: "Правительственная стипендия",
    coverage: "Полное финансирование 5 лет",
    stipend: "2 500 юаней/мес",
    whereToApply: "Через посольство Китая в вашей стране",
    competition: "Очень высокий",
    deadline: "Март — Апрель",
    description: "Покрывает обучение, общежитие, медстраховку и стипендию на жизнь. Самый престижный грант."
  },
  {
    name: "Институт Конфуция (CIS)",
    nameRu: "Стипендия Института Конфуция",
    coverage: "1 год языка + продление по конкурсу",
    stipend: "2 500 юаней/мес",
    whereToApply: "Через Институт Конфуция или напрямую",
    competition: "Средний",
    deadline: "Май",
    description: "Покрывает языковой год. Продление на бакалавриат — по конкурсу (не гарантировано)."
  },
  {
    name: "Провинциальная стипендия",
    nameRu: "Грант от провинции",
    coverage: "Частичное или полное финансирование",
    stipend: "1 500–2 500 юаней/мес",
    whereToApply: "Через вуз или провинциальный отдел образования",
    competition: "Ниже, чем CSC",
    deadline: "Апрель — Май",
    description: "Гранты от провинций (Пекин, Цзянсу, Гуандун и др.). Реально получить."
  },
  {
    name: "Внутренний грант вуза",
    nameRu: "Стипендия университета",
    coverage: "Скидка 10–100% на обучение",
    stipend: "Зависит от вуза",
    whereToApply: "При подаче документов в вуз",
    competition: "Средний",
    deadline: "Зависит от вуза",
    description: "Внутренние стипендии вузов. Часто дают скидку на обучение без стипендии на жизнь."
  }
];

export const documents = [
  { name: "Аттестат/диплом с апостилем", required: true, note: "Нотариальный перевод на китайский или английский" },
  { name: "Транскрипт оценок", required: true, note: "Официальный документ из учебного заведения" },
  { name: "2 рекомендательных письма", required: true, note: "От учителей или преподавателей" },
  { name: "Мотивационное письмо (SOP)", required: true, note: "План обучения / Личное заявление" },
  { name: "Медицинская справка", required: true, note: "Форма Foreigner Physical Examination Form" },
  { name: "Справка о несудимости", required: true, note: "Из полиции или МВД" },
  { name: "Загранпаспорт", required: true, note: "Срок действия более 1,5 лет" },
  { name: "Фото 4×6 см", required: true, note: "На белом фоне" },
  { name: "Финансовые гарантии", required: false, note: "Выписка со счёта ~20 000–30 000 долларов (если без гранта)" },
  { name: "Сертификат ХСКЬ", required: false, note: "Если есть (не обязательно для программ 1+4)" }
];

export const timeline = [
  { month: "Сентябрь 2026", task: "Начать учить китайский (ХСКЬ 1–2)", icon: "📚" },
  { month: "Ноябрь 2026", task: "Собрать документы, заказать переводы", icon: "📄" },
  { month: "Январь 2027", task: "Написать мотивационное письмо, получить рекомендации", icon: "✍️" },
  { month: "Февраль 2027", task: "Подать на CSC Тип А через посольство", icon: "🏛️" },
  { month: "Март 2027", task: "Подать на CIS и провинциальные стипендии", icon: "📮" },
  { month: "Апрель — Май 2027", task: "Подать напрямую в вузы", icon: "🎓" },
  { month: "Июнь — Июль 2027", task: "Получить результат, оформить визу X1", icon: "✈️" },
  { month: "Сентябрь 2027", task: "Приезд в Китай, начало обучения", icon: "🇨🇳" }
];
