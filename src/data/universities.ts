export interface University {
  id: number;
  name: string;
  nameZh: string;
  city: string;
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
    name: "Tsinghua University",
    nameZh: "清华大学",
    city: "Beijing",
    type: "C9 League (топ-2 Китая)",
    qsRanking: 14,
    program: "1+4 Bachelor",
    specialties: ["CS", "Engineering", "Business", "AI"],
    language: "EN, ZH",
    preparatoryYear: "Да (обязательно)",
    hskAfterYear: "HSK 4",
    costLanguageCNY: 30000,
    costBachelorCNY: 40000,
    dormitoryCNY: 8000,
    grantCSC: "Да (полный)",
    grantCIS: "Да",
    deadlineCSC: "2027-03-31",
    deadlineCIS: "2027-05-01",
    documents: "Диплом, транскрипт, 2 рекоменд., SOP, план исследования, медсправка, паспорт, портфолио",
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
    internet: "VPN обязателен",
    partTime: "Ограничена (20ч/нед)"
  },
  {
    id: 2,
    name: "Zhejiang University",
    nameZh: "浙江大学",
    city: "Hangzhou",
    type: "C9 League (топ-9 Китая)",
    qsRanking: 45,
    program: "1+4 Bachelor",
    specialties: ["CS", "Engineering", "Business", "Medicine"],
    language: "EN, ZH",
    preparatoryYear: "Да (для тех, кто без HSK)",
    hskAfterYear: "HSK 4 (HSK 5 для Medicine)",
    costLanguageCNY: 22000,
    costBachelorCNY: 32000,
    dormitoryCNY: 6000,
    grantCSC: "Да (полный)",
    grantCIS: "Да (1+4)",
    deadlineCSC: "2027-03-31",
    deadlineCIS: "2027-05-01",
    documents: "Диплом, транскрипт, 2 рекоменд., SOP, медсправка, паспорт, HSK (если есть)",
    link: "http://iczu.zju.edu.cn",
    competition: 18,
    acceptanceRate: 6,
    avgGPA: 3.7,
    hskPassRate: 88,
    grantRenewalRate: 75,
    difficultyCategory: "HARD",
    cityLifeCost: 5000,
    cityDescription: "\"Китайская Кремниевая долина\", штаб-квартира Alibaba. Зелёный город с озером West Lake.",
    climate: "Мягкий, влажное лето",
    compatriots: "Много",
    internet: "VPN обязателен",
    partTime: "Ограничена"
  },
  {
    id: 3,
    name: "Wuhan University",
    nameZh: "武汉大学",
    city: "Wuhan",
    type: "Project 985",
    qsRanking: 194,
    program: "1+4 Bachelor",
    specialties: ["CS", "Engineering", "Law", "Business", "Medicine"],
    language: "EN, ZH",
    preparatoryYear: "Да",
    hskAfterYear: "HSK 4",
    costLanguageCNY: 18000,
    costBachelorCNY: 26000,
    dormitoryCNY: 4000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "2027-04-05",
    deadlineCIS: "2027-05-20",
    documents: "Диплом, транскрипт, 2 рекоменд., SOP, медсправка, паспорт",
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
    internet: "VPN обязателен",
    partTime: "Разрешена в кампусе"
  },
  {
    id: 4,
    name: "Harbin Institute of Technology",
    nameZh: "哈尔滨工业大学",
    city: "Harbin",
    type: "C9 League",
    qsRanking: 256,
    program: "1+4 Bachelor",
    specialties: ["Engineering", "CS", "Robotics", "Aerospace"],
    language: "EN, ZH",
    preparatoryYear: "Да",
    hskAfterYear: "HSK 4",
    costLanguageCNY: 20000,
    costBachelorCNY: 24000,
    dormitoryCNY: 4000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "2027-03-15",
    deadlineCIS: "2027-04-30",
    documents: "Диплом, транскрипт, 2 рекоменд., SOP, медсправка, паспорт",
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
    internet: "VPN обязателен",
    partTime: "Ограничена"
  },
  {
    id: 5,
    name: "Beijing Language and Culture University (BLCU)",
    nameZh: "北京语言大学",
    city: "Beijing",
    type: "Топ по китайскому языку",
    qsRanking: "Не в QS (языковой)",
    program: "1+4 Bachelor",
    specialties: ["Business", "CS", "Translation", "International Relations"],
    language: "EN, ZH",
    preparatoryYear: "Да (обязательно)",
    hskAfterYear: "HSK 4",
    costLanguageCNY: 26000,
    costBachelorCNY: 26000,
    dormitoryCNY: 8000,
    grantCSC: "Да (через посольство)",
    grantCIS: "Да (1+4 года)",
    deadlineCSC: "2027-04-10",
    deadlineCIS: "2027-05-15",
    documents: "Аттестат, транскрипт, SOP, 2 рекоменд., медсправка, паспорт, справка о несудимости",
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
    internet: "VPN обязателен",
    partTime: "Ограничена"
  },
  {
    id: 6,
    name: "Jiangsu University",
    nameZh: "江苏大学",
    city: "Zhenjiang",
    type: "Provincial",
    qsRanking: 750,
    program: "1+4 Bachelor",
    specialties: ["Medicine", "Engineering", "CS"],
    language: "EN",
    preparatoryYear: "Да",
    hskAfterYear: "HSK 4",
    costLanguageCNY: 16000,
    costBachelorCNY: 18000,
    dormitoryCNY: 3000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "2027-04-01",
    deadlineCIS: "2027-05-30",
    documents: "Диплом, транскрипт, 2 рекоменд., SOP, медсправка, паспорт",
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
    internet: "VPN обязателен",
    partTime: "Разрешена"
  },
  {
    id: 7,
    name: "Xiamen University",
    nameZh: "厦门大学",
    city: "Xiamen",
    type: "Project 985",
    qsRanking: 392,
    program: "1+4 Bachelor",
    specialties: ["Business", "Economics", "CS", "Ocean Science"],
    language: "EN, ZH",
    preparatoryYear: "Да",
    hskAfterYear: "HSK 4",
    costLanguageCNY: 20000,
    costBachelorCNY: 26000,
    dormitoryCNY: 5000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "2027-04-15",
    deadlineCIS: "2027-05-25",
    documents: "Диплом, транскрипт, 2 рекоменд., SOP, медсправка, паспорт",
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
    internet: "VPN обязателен",
    partTime: "Ограничена"
  },
  {
    id: 8,
    name: "Sun Yat-sen University",
    nameZh: "中山大学",
    city: "Guangzhou",
    type: "Project 985",
    qsRanking: 267,
    program: "1+4 Bachelor",
    specialties: ["Medicine", "Business", "Law", "CS", "Engineering"],
    language: "EN, ZH",
    preparatoryYear: "Да",
    hskAfterYear: "HSK 4",
    costLanguageCNY: 22000,
    costBachelorCNY: 28000,
    dormitoryCNY: 5000,
    grantCSC: "Да",
    grantCIS: "Да",
    deadlineCSC: "2027-04-10",
    deadlineCIS: "2027-05-20",
    documents: "Диплом, транскрипт, 2 рекоменд., SOP, медсправка, паспорт",
    link: "http://oec.sysu.edu.cn",
    competition: 9,
    acceptanceRate: 11,
    avgGPA: 3.4,
    hskPassRate: 90,
    grantRenewalRate: 83,
    difficultyCategory: "MEDIUM",
    cityLifeCost: 4500,
    cityDescription: "Торговый мегаполис на юге. Халяль-еда доступна. Близко к ЮВА.",
    climate: "Субтропический, жаркое влажное лето",
    compatriots: "Много",
    internet: "VPN обязателен",
    partTime: "Ограничена"
  }
];

export const CNY_TO_RUB = 12.5;

export const grants = [
  {
    name: "CSC Type A (Bilateral)",
    nameRu: "Правительственная стипендия",
    coverage: "Полное финансирование 5 лет",
    stipend: "2500 CNY/мес",
    whereToApply: "Через посольство Китая в вашей стране",
    competition: "Очень высокий",
    deadline: "Март-Апрель",
    description: "Покрывает tuition, общежитие, медстраховку и стипендию на жизнь. Самый престижный грант."
  },
  {
    name: "CIS (Confucius Institute)",
    nameRu: "Стипендия Института Конфуция",
    coverage: "1 год языка + продление по конкурсу",
    stipend: "2500 CNY/мес",
    whereToApply: "Через Институт Конфуция или напрямую",
    competition: "Средний",
    deadline: "Май",
    description: "Покрывает языковой год. Продление на бакалавриат — по конкурсу (не гарантировано)."
  },
  {
    name: "Provincial Scholarship",
    nameRu: "Провинциальная стипендия",
    coverage: "Частичное или полное финансирование",
    stipend: "1500-2500 CNY/мес",
    whereToApply: "Через вуз или провинциальный отдел образования",
    competition: "Ниже, чем CSC",
    deadline: "Апрель-Май",
    description: "Гранты от провинций (Beijing, Jiangsu, Guangdong и др.). Реально получить."
  },
  {
    name: "University Scholarship",
    nameRu: "Внутренний грант вуза",
    coverage: "10-100% скидка на tuition",
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
  { name: "2 рекомендательных письма", required: true, note: "От учителей/преподавателей" },
  { name: "Мотивационное письмо (SOP)", required: true, note: "Study Plan / Personal Statement" },
  { name: "Медицинская справка", required: true, note: "Форма Foreigner Physical Examination Form" },
  { name: "Справка о несудимости", required: true, note: "Из полиции/МВД" },
  { name: "Загранпаспорт", required: true, note: "Срок действия > 1.5 лет" },
  { name: "Фото 4×6 см", required: true, note: "На белом фоне" },
  { name: "Финансовые гарантии", required: false, note: "Выписка со счёта ~20 000-30 000 USD (если без гранта)" },
  { name: "HSK сертификат", required: false, note: "Если есть (не обязательно для программ 1+4)" }
];

export const timeline = [
  { month: "Сентябрь 2026", task: "Начать учить китайский (HSK 1-2)", icon: "📚" },
  { month: "Ноябрь 2026", task: "Собрать документы, заказать переводы", icon: "📄" },
  { month: "Январь 2027", task: "Написать SOP, получить рекомендации", icon: "✍️" },
  { month: "Февраль 2027", task: "Подать на CSC Type A через посольство", icon: "🏛️" },
  { month: "Март 2027", task: "Подать на CIS и Provincial scholarships", icon: "📮" },
  { month: "Апрель-Май 2027", task: "Подать напрямую в вузы", icon: "🎓" },
  { month: "Июнь-Июль 2027", task: "Получить результат, оформить визу X1", icon: "✈️" },
  { month: "Сентябрь 2027", task: "Приезд в Китай, начало обучения", icon: "🇨🇳" }
];
