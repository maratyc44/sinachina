export interface EliteUniversity {
  id: number;
  name: string;
  nameZh: string;
  city: string;
  cityRu: string;
  province: string;
  category: 'C9' | '985' | '211';
  qsRanking: number | string;
  specialties: string[];
  costBachelorCNY: number;
  website: string;
  mainDbId?: number; // ID в основной базе universities.ts
}

// C9 League (9 университетов)
export const c9Universities: EliteUniversity[] = [
  { id: 1, name: "Университет Цинхуа", nameZh: "清华大学", city: "Beijing", cityRu: "Пекин", province: "Пекин", category: "C9", qsRanking: 14, specialties: ["Информатика", "Инженерия", "Бизнес", "ИИ"], costBachelorCNY: 40000, website: "https://join-tsinghua.edu.cn", mainDbId: 1 },
  { id: 2, name: "Пекинский университет", nameZh: "北京大学", city: "Beijing", cityRu: "Пекин", province: "Пекин", category: "C9", qsRanking: 17, specialties: ["Гуманитарные", "Экономика", "Право", "Международные отношения"], costBachelorCNY: 36000, website: "http://www.pku.edu.cn", mainDbId: 2 },
  { id: 3, name: "Фуданьский университет", nameZh: "复旦大学", city: "Shanghai", cityRu: "Шанхай", province: "Шанхай", category: "C9", qsRanking: 43, specialties: ["Медицина", "Гуманитарные", "Бизнес", "Право"], costBachelorCNY: 36000, website: "https://www.fudan.edu.cn", mainDbId: 6 },
  { id: 4, name: "Шанхайский университет Цзяо Тун", nameZh: "上海交通大学", city: "Shanghai", cityRu: "Шанхай", province: "Шанхай", category: "C9", qsRanking: 40, specialties: ["Инженерия", "Информатика", "Бизнес", "Медицина"], costBachelorCNY: 38000, website: "https://en.sjtu.edu.cn", mainDbId: 5 },
  { id: 5, name: "Чжэцзянский университет", nameZh: "浙江大学", city: "Hangzhou", cityRu: "Ханчжоу", province: "Чжэцзян", category: "C9", qsRanking: 45, specialties: ["Информатика", "Инженерия", "Бизнес", "Медицина"], costBachelorCNY: 32000, website: "http://iczu.zju.edu.cn", mainDbId: 8 },
  { id: 6, name: "Нанкинский университет", nameZh: "南京大学", city: "Nanjing", cityRu: "Нанкин", province: "Цзянсу", category: "C9", qsRanking: 133, specialties: ["Гуманитарные", "Физика", "Химия", "Экономика"], costBachelorCNY: 28000, website: "https://www.nju.edu.cn", mainDbId: 14 },
  { id: 7, name: "Университет науки и технологии Китая", nameZh: "中国科学技术大学", city: "Hefei", cityRu: "Хэфэй", province: "Аньхой", category: "C9", qsRanking: 94, specialties: ["Физика", "Химия", "Математика", "Информатика"], costBachelorCNY: 25000, website: "http://www.ustc.edu.cn", mainDbId: 34 },
  { id: 8, name: "Харбинский политехнический университет", nameZh: "哈尔滨工业大学", city: "Harbin", cityRu: "Харбин", province: "Хэйлунцзян", category: "C9", qsRanking: 256, specialties: ["Инженерия", "Информатика", "Робототехника", "Аэрокосмическая"], costBachelorCNY: 24000, website: "http://hit.edu.cn", mainDbId: 11 },
  { id: 9, name: "Университет Цзяо Тун (Сиань)", nameZh: "西安交通大学", city: "Xi'an", cityRu: "Сиань", province: "Шэньси", category: "C9", qsRanking: 285, specialties: ["Инженерия", "Энергетика", "Информатика", "Бизнес"], costBachelorCNY: 24000, website: "http://en.xjtu.edu.cn", mainDbId: 24 }
];

// Project 985 (39 университетов, включая C9)
export const project985Universities: EliteUniversity[] = [
  ...c9Universities,
  { id: 10, name: "Университет Сунь Ятсена", nameZh: "中山大学", city: "Guangzhou", cityRu: "Гуанчжоу", province: "Гуандун", category: "985", qsRanking: 267, specialties: ["Медицина", "Бизнес", "Право", "Информатика"], costBachelorCNY: 28000, website: "http://oec.sysu.edu.cn", mainDbId: 16 },
  { id: 11, name: "Уханьский университет", nameZh: "武汉大学", city: "Wuhan", cityRu: "Ухань", province: "Хубэй", category: "985", qsRanking: 194, specialties: ["Информатика", "Инженерия", "Право", "Бизнес", "Медицина"], costBachelorCNY: 26000, website: "http://icw.whu.edu.cn", mainDbId: 9 },
  { id: 12, name: "Хуачжунский университет науки и техники", nameZh: "华中科技大学", city: "Wuhan", cityRu: "Ухань", province: "Хубэй", category: "985", qsRanking: 275, specialties: ["Инженерия", "Информатика", "Медицина", "Биотехнологии"], costBachelorCNY: 25000, website: "http://english.hust.edu.cn", mainDbId: 10 },
  { id: 13, name: "Сямэньский университет", nameZh: "厦门大学", city: "Xiamen", cityRu: "Сямынь", province: "Фуцзянь", category: "985", qsRanking: 392, specialties: ["Бизнес", "Экономика", "Информатика", "Океанология"], costBachelorCNY: 26000, website: "https://oec.xmu.edu.cn", mainDbId: 19 },
  { id: 14, name: "Южно-Китайский технологический университет", nameZh: "华南理工大学", city: "Guangzhou", cityRu: "Гуанчжоу", province: "Гуандун", category: "985", qsRanking: 407, specialties: ["Инженерия", "Информатика", "Бизнес", "Пищевая промышленность"], costBachelorCNY: 27000, website: "http://www.scut.edu.cn", mainDbId: 17 },
  { id: 15, name: "Сычуаньский университет", nameZh: "四川大学", city: "Chengdu", cityRu: "Чэнду", province: "Сычуань", category: "985", qsRanking: 355, specialties: ["Медицина", "Инженерия", "Гуманитарные", "Науки о земле"], costBachelorCNY: 24000, website: "http://en.scu.edu.cn", mainDbId: 21 },
  { id: 16, name: "Университет электронных наук и технологий Китая", nameZh: "电子科技大学", city: "Chengdu", cityRu: "Чэнду", province: "Сычуань", category: "985", qsRanking: 475, specialties: ["Информатика", "Электроника", "Телекоммуникации", "ИИ"], costBachelorCNY: 23000, website: "https://en.uestc.edu.cn", mainDbId: 22 },
  { id: 17, name: "Северо-Западный политехнический университет", nameZh: "西北工业大学", city: "Xi'an", cityRu: "Сиань", province: "Шэньси", category: "985", qsRanking: 540, specialties: ["Аэрокосмическая", "Инженерия", "Информатика", "Материаловедение"], costBachelorCNY: 22000, website: "https://www.nwpu.edu.cn", mainDbId: 23 },
  { id: 18, name: "Тяньцзиньский университет", nameZh: "天津大学", city: "Tianjin", cityRu: "Тяньцзинь", province: "Тяньцзинь", category: "985", qsRanking: 412, specialties: ["Инженерия", "Химия", "Архитектура", "Информатика"], costBachelorCNY: 26000, website: "http://www.tju.edu.cn", mainDbId: 25 },
  { id: 19, name: "Нанькайский университет", nameZh: "南开大学", city: "Tianjin", cityRu: "Тяньцзинь", province: "Тяньцзинь", category: "985", qsRanking: 387, specialties: ["Экономика", "Математика", "Химия", "История"], costBachelorCNY: 25000, website: "http://www.nankai.edu.cn", mainDbId: 26 },
  { id: 20, name: "Университет Шаньдуна", nameZh: "山东大学", city: "Jinan", cityRu: "Цзинань", province: "Шаньдун", category: "985", qsRanking: 456, specialties: ["Медицина", "Математика", "Литература", "Инженерия"], costBachelorCNY: 22000, website: "http://www.sdu.edu.cn", mainDbId: 27 },
  { id: 21, name: "Университет Циндао", nameZh: "中国海洋大学", city: "Qingdao", cityRu: "Циндао", province: "Шаньдун", category: "985", qsRanking: 580, specialties: ["Океанология", "Биология", "Инженерия", "Экономика"], costBachelorCNY: 23000, website: "http://www.ouc.edu.cn", mainDbId: 28 },
  { id: 22, name: "Дунбэйский университет", nameZh: "东北大学", city: "Shenyang", cityRu: "Шэньян", province: "Ляонин", category: "985", qsRanking: 620, specialties: ["Информатика", "Металлургия", "Автоматизация", "Инженерия"], costBachelorCNY: 20000, website: "http://www.neu.edu.cn", mainDbId: 29 },
  { id: 23, name: "Далианьский университет технологии", nameZh: "大连理工大学", city: "Dalian", cityRu: "Далянь", province: "Ляонин", category: "985", qsRanking: 510, specialties: ["Инженерия", "Химия", "Информатика", "Менеджмент"], costBachelorCNY: 22000, website: "http://www.dlut.edu.cn", mainDbId: 30 },
  { id: 24, name: "Университет Центрального Южного Китая", nameZh: "中南大学", city: "Changsha", cityRu: "Чанша", province: "Хунань", category: "985", qsRanking: 480, specialties: ["Медицина", "Металлургия", "Инженерия", "Материаловедение"], costBachelorCNY: 22000, website: "http://en.csu.edu.cn", mainDbId: 31 },
  { id: 25, name: "Университет Хунань", nameZh: "湖南大学", city: "Changsha", cityRu: "Чанша", province: "Хунань", category: "985", qsRanking: 550, specialties: ["Инженерия", "Бизнес", "Дизайн", "Информатика"], costBachelorCNY: 21000, website: "http://www.hnu.edu.cn", mainDbId: 32 },
  { id: 26, name: "Юго-Восточный университет", nameZh: "东南大学", city: "Nanjing", cityRu: "Нанкин", province: "Цзянсу", category: "985", qsRanking: 334, specialties: ["Инженерия", "Архитектура", "Информатика", "Электроника"], costBachelorCNY: 27000, website: "https://www.seu.edu.cn", mainDbId: 15 },
  { id: 27, name: "Тунцзи университет", nameZh: "同济大学", city: "Shanghai", cityRu: "Шанхай", province: "Шанхай", category: "985", qsRanking: 216, specialties: ["Архитектура", "Инженерия", "Дизайн", "Городское планирование"], costBachelorCNY: 32000, website: "https://en.tongji.edu.cn", mainDbId: 7 },
  { id: 28, name: "Цзилиньский университет", nameZh: "吉林大学", city: "Changchun", cityRu: "Чанчунь", province: "Цзилинь", category: "985", qsRanking: 530, specialties: ["Химия", "Математика", "Инженерия", "Медицина"], costBachelorCNY: 20000, website: "http://www.jlu.edu.cn", mainDbId: 37 },
  { id: 29, name: "Ланьчжоуский университет", nameZh: "兰州大学", city: "Lanzhou", cityRu: "Ланьчжоу", province: "Ганьсу", category: "985", qsRanking: 650, specialties: ["Химия", "Экология", "География", "Медицина"], costBachelorCNY: 19000, website: "http://www.lzu.edu.cn", mainDbId: 38 },
  { id: 30, name: "Чунцинский университет", nameZh: "重庆大学", city: "Chongqing", cityRu: "Чунцин", province: "Сычуань", category: "985", qsRanking: 340, specialties: ["Инженерия", "Архитектура", "Информатика", "Экономика"], costBachelorCNY: 24000, website: "http://www.cqu.edu.cn", mainDbId: 85 }
];

// Project 211 (все университеты, включая 985)
export const project211Universities: EliteUniversity[] = [
  ...project985Universities,
  { id: 31, name: "Университет международных отношений", nameZh: "北京外国语大学", city: "Beijing", cityRu: "Пекин", province: "Пекин", category: "211", qsRanking: "Специализированный", specialties: ["Международные отношения", "Дипломатия", "Перевод", "Журналистика"], costBachelorCNY: 30000, website: "https://www.bfsu.edu.cn", mainDbId: 4 },
  { id: 32, name: "Сучжоуский университет", nameZh: "苏州大学", city: "Suzhou", cityRu: "Сучжоу", province: "Цзянсу", category: "211", qsRanking: 327, specialties: ["Медицина", "Право", "Информатика", "Дизайн"], costBachelorCNY: 26000, website: "http://www.suda.edu.cn", mainDbId: 63 },
  { id: 33, name: "Университет Хэхай", nameZh: "河海大学", city: "Nanjing", cityRu: "Нанкин", province: "Цзянсу", category: "211", qsRanking: 550, specialties: ["Гидротехника", "Инженерия", "Экология", "Информатика"], costBachelorCNY: 24000, website: "http://www.hhu.edu.cn", mainDbId: 64 },
  { id: 34, name: "Нанкинский аэрокосмический университет", nameZh: "南京航空航天大学", city: "Nanjing", cityRu: "Нанкин", province: "Цзянсу", category: "211", qsRanking: 500, specialties: ["Аэрокосмическая", "Инженерия", "Информатика", "Автоматизация"], costBachelorCNY: 25000, website: "http://www.nuaa.edu.cn", mainDbId: 65 },
  { id: 35, name: "Нанкинский университет науки и технологии", nameZh: "南京理工大学", city: "Nanjing", cityRu: "Нанкин", province: "Цзянсу", category: "211", qsRanking: 470, specialties: ["Инженерия", "Химия", "Оптика", "Информатика"], costBachelorCNY: 25000, website: "http://www.njust.edu.cn", mainDbId: 66 },
  { id: 36, name: "Нанкинский сельскохозяйственный университет", nameZh: "南京农业大学", city: "Nanjing", cityRu: "Нанкин", province: "Цзянсу", category: "211", qsRanking: 600, specialties: ["Сельское хозяйство", "Биология", "Пищевая промышленность", "Экология"], costBachelorCNY: 22000, website: "http://www.njau.edu.cn", mainDbId: 67 },
  { id: 37, name: "Фармацевтический университет Китая", nameZh: "中国药科大学", city: "Nanjing", cityRu: "Нанкин", province: "Цзянсу", category: "211", qsRanking: "Специализированный", specialties: ["Фармация", "Биотехнологии", "Химия", "Медицина"], costBachelorCNY: 24000, website: "http://www.cpu.edu.cn", mainDbId: 68 },
  { id: 38, name: "Университет Цзяннань", nameZh: "江南大学", city: "Wuxi", cityRu: "Уси", province: "Цзянсу", category: "211", qsRanking: 580, specialties: ["Пищевая промышленность", "Биотехнологии", "Дизайн", "Информатика"], costBachelorCNY: 23000, website: "http://www.jiangnan.edu.cn", mainDbId: 69 },
  { id: 39, name: "Хэбэйский университет технологии", nameZh: "河北工业大学", city: "Tianjin", cityRu: "Тяньцзинь", province: "Хэбэй", category: "211", qsRanking: 600, specialties: ["Инженерия", "Электротехника", "Информатика", "Механика"], costBachelorCNY: 22000, website: "http://www.hebut.edu.cn", mainDbId: 115 },
  { id: 40, name: "Шаньсийский университет", nameZh: "山西大学", city: "Taiyuan", cityRu: "Тайюань", province: "Шаньси", category: "211", qsRanking: 750, specialties: ["Гуманитарные", "Физика", "Химия", "Информатика"], costBachelorCNY: 18000, website: "http://www.sxu.edu.cn", mainDbId: 118 },
  { id: 41, name: "Тайюаньский университет технологии", nameZh: "太原理工大学", city: "Taiyuan", cityRu: "Тайюань", province: "Шаньси", category: "211", qsRanking: 600, specialties: ["Инженерия", "Химия", "Материаловедение", "Информатика"], costBachelorCNY: 21000, website: "http://www.tyut.edu.cn", mainDbId: 119 },
  { id: 42, name: "Университет Внутренней Монголии", nameZh: "内蒙古大学", city: "Hohhot", cityRu: "Хух-Хото", province: "Внутренняя Монголия", category: "211", qsRanking: 700, specialties: ["Монгольский язык", "Биология", "Экология", "Информатика"], costBachelorCNY: 19000, website: "http://www.imu.edu.cn", mainDbId: 121 },
  { id: 43, name: "Далианьский морской университет", nameZh: "大连海事大学", city: "Dalian", cityRu: "Далянь", province: "Ляонин", category: "211", qsRanking: 700, specialties: ["Морские науки", "Логистика", "Инженерия", "Международная торговля"], costBachelorCNY: 22000, website: "http://www.dlmu.edu.cn", mainDbId: 42 },
  { id: 44, name: "Харбинский инженерный университет", nameZh: "哈尔滨工程大学", city: "Harbin", cityRu: "Харбин", province: "Хэйлунцзян", category: "211", qsRanking: 550, specialties: ["Кораблестроение", "Инженерия", "Информатика", "Ядерная энергетика"], costBachelorCNY: 23000, website: "http://www.hrbeu.edu.cn", mainDbId: 125 },
  { id: 45, name: "Яньбяньский университет", nameZh: "延边大学", city: "Yanji", cityRu: "Яньцзи", province: "Цзилинь", category: "211", qsRanking: 800, specialties: ["Корейский язык", "Медицина", "Гуманитарные", "Информатика"], costBachelorCNY: 19000, website: "http://www.ybu.edu.cn", mainDbId: 124 },
  { id: 46, name: "Чанчуньский университет науки и технологии", nameZh: "长春理工大学", city: "Changchun", cityRu: "Чанчунь", province: "Цзилинь", category: "211", qsRanking: 700, specialties: ["Оптика", "Физика", "Информатика", "Электроника"], costBachelorCNY: 20000, website: "http://www.cust.edu.cn", mainDbId: 123 },
  { id: 47, name: "Шэньсийский педагогический университет", nameZh: "陕西师范大学", city: "Xi'an", cityRu: "Сиань", province: "Шэньси", category: "211", qsRanking: 650, specialties: ["Образование", "Гуманитарные", "История", "Литература"], costBachelorCNY: 21000, website: "http://www.snnu.edu.cn", mainDbId: 128 },
  { id: 48, name: "Чанъаньский университет", nameZh: "长安大学", city: "Xi'an", cityRu: "Сиань", province: "Шэньси", category: "211", qsRanking: 700, specialties: ["Транспорт", "Инженерия", "Геология", "Архитектура"], costBachelorCNY: 22000, website: "http://www.chd.edu.cn", mainDbId: 129 },
  { id: 49, name: "Уханьский университет технологии", nameZh: "武汉理工大学", city: "Wuhan", cityRu: "Ухань", province: "Хубэй", category: "211", qsRanking: 450, specialties: ["Инженерия", "Материаловедение", "Автомобилестроение", "Информатика"], costBachelorCNY: 25000, website: "http://www.whut.edu.cn", mainDbId: 136 },
  { id: 50, name: "Хуачжунский аграрный университет", nameZh: "华中农业大学", city: "Wuhan", cityRu: "Ухань", province: "Хубэй", category: "211", qsRanking: 600, specialties: ["Сельское хозяйство", "Биология", "Ветеринария", "Пищевая промышленность"], costBachelorCNY: 22000, website: "http://www.hzau.edu.cn", mainDbId: 137 },
  { id: 51, name: "Юго-западный университет финансов и экономики", nameZh: "西南财经大学", city: "Chengdu", cityRu: "Чэнду", province: "Сычуань", category: "211", qsRanking: 550, specialties: ["Финансы", "Экономика", "Бухгалтерия", "Бизнес"], costBachelorCNY: 23000, website: "http://www.swufe.edu.cn", mainDbId: 83 },
  { id: 52, name: "Юго-западный университет", nameZh: "西南大学", city: "Chongqing", cityRu: "Чунцин", province: "Сычуань", category: "211", qsRanking: 550, specialties: ["Образование", "Психология", "Агрономия", "Гуманитарные"], costBachelorCNY: 21000, website: "http://www.swu.edu.cn", mainDbId: 86 },
  { id: 53, name: "Сычуаньский аграрный университет", nameZh: "四川农业大学", city: "Ya'an", cityRu: "Яань", province: "Сычуань", category: "211", qsRanking: 700, specialties: ["Сельское хозяйство", "Биология", "Ветеринария", "Экология"], costBachelorCNY: 20000, website: "http://www.sicau.edu.cn", mainDbId: 82 },
  { id: 54, name: "Юньнаньский университет", nameZh: "云南大学", city: "Kunming", cityRu: "Куньмин", province: "Юньнань", category: "211", qsRanking: 700, specialties: ["Биология", "Экология", "Гуманитарные", "Экономика"], costBachelorCNY: 18000, website: "http://www.ynu.edu.cn", mainDbId: 35 },
  { id: 55, name: "Куньминский университет науки и технологии", nameZh: "昆明理工大学", city: "Kunming", cityRu: "Куньмин", province: "Юньнань", category: "211", qsRanking: 700, specialties: ["Инженерия", "Металлургия", "Информатика", "Материаловедение"], costBachelorCNY: 20000, website: "http://www.kust.edu.cn", mainDbId: 132 },
  { id: 56, name: "Гуансийский университет", nameZh: "广西大学", city: "Nanning", cityRu: "Наньнин", province: "Гуанси", category: "211", qsRanking: 800, specialties: ["Сельское хозяйство", "Инженерия", "Экономика", "Биология"], costBachelorCNY: 17000, website: "http://www.gxu.edu.cn", mainDbId: 36 },
  { id: 57, name: "Хайнаньский университет", nameZh: "海南大学", city: "Haikou", cityRu: "Хайкоу", province: "Хайнань", category: "211", qsRanking: 850, specialties: ["Туризм", "Морские науки", "Сельское хозяйство", "Экономика"], costBachelorCNY: 19000, website: "http://www.hainu.edu.cn", mainDbId: 40 },
  { id: 58, name: "Гуйчжоуский университет", nameZh: "贵州大学", city: "Guiyang", cityRu: "Гуйян", province: "Гуйчжоу", category: "211", qsRanking: 900, specialties: ["Сельское хозяйство", "Инженерия", "Экономика", "Биология"], costBachelorCNY: 16000, website: "http://www.gzu.edu.cn", mainDbId: 39 },
  { id: 59, name: "Университет Цинхай", nameZh: "青海大学", city: "Xining", cityRu: "Синин", province: "Цинхай", category: "211", qsRanking: 900, specialties: ["Экология", "Сельское хозяйство", "Медицина", "Информатика"], costBachelorCNY: 17000, website: "http://www.qhu.edu.cn", mainDbId: 140 },
  { id: 60, name: "Университет Нинся", nameZh: "宁夏大学", city: "Yinchuan", cityRu: "Иньчуань", province: "Нинся", category: "211", qsRanking: 900, specialties: ["Арабский язык", "Сельское хозяйство", "Экономика", "Информатика"], costBachelorCNY: 17000, website: "http://www.nxu.edu.cn", mainDbId: 141 },
  { id: 61, name: "Синьцзянский университет", nameZh: "新疆大学", city: "Urumqi", cityRu: "Урумчи", province: "Синьцзян", category: "211", qsRanking: 800, specialties: ["Гуманитарные", "Языкознание", "Экономика", "Информатика"], costBachelorCNY: 17000, website: "http://www.xju.edu.cn", mainDbId: 142 },
  { id: 62, name: "Шицзячжуанский университет экономики и бизнеса", nameZh: "石家庄铁道大学", city: "Shijiazhuang", cityRu: "Шицзячжуан", province: "Хэбэй", category: "211", qsRanking: 900, specialties: ["Транспорт", "Инженерия", "Информатика", "Экономика"], costBachelorCNY: 18000, website: "http://www.stdu.edu.cn" },
  { id: 63, name: "Тайюаньский университет технологии", nameZh: "太原科技大学", city: "Taiyuan", cityRu: "Тайюань", province: "Шаньси", category: "211", qsRanking: 950, specialties: ["Инженерия", "Механика", "Информатика", "Материаловедение"], costBachelorCNY: 18000, website: "http://www.tyust.edu.cn" },
  { id: 64, name: "Университет науки и технологии Ляонин", nameZh: "辽宁科技大学", city: "Anshan", cityRu: "Аньшань", province: "Ляонин", category: "211", qsRanking: 1000, specialties: ["Металлургия", "Инженерия", "Материаловедение", "Информатика"], costBachelorCNY: 17000, website: "http://www.ustl.edu.cn", mainDbId: 58 },
  { id: 65, name: "Шэньянский университет химической технологии", nameZh: "沈阳化工大学", city: "Shenyang", cityRu: "Шэньян", province: "Ляонин", category: "211", qsRanking: 1000, specialties: ["Химия", "Химическая инженерия", "Материаловедение", "Экология"], costBachelorCNY: 17000, website: "http://www.syuct.edu.cn", mainDbId: 102 }
];

export const categoryInfo = {
  'C9': {
    name: 'C9 League',
    nameRu: 'Лига C9',
    description: '9 лучших университетов Китая (аналог Ivy League)',
    count: 9,
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  '985': {
    name: 'Project 985',
    nameRu: 'Проект 985',
    description: '21 элитный университет Китая (без учёта C9)',
    count: 21,
    color: 'bg-orange-100 text-orange-800 border-orange-200'
  },
  '211': {
    name: 'Project 211',
    nameRu: 'Проект 211',
    description: '35 ключевых университетов Китая (без учёта C9 и 985)',
    count: 35,
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  }
};

// Функция для поиска вуза в основной базе по ID
export function findEliteUniversityInMainDb(eliteId: number, mainDb: any[]): any | null {
  const eliteUni = [...c9Universities, ...project985Universities, ...project211Universities].find(u => u.id === eliteId);
  if (!eliteUni) return null;
  
  // Если есть прямая ссылка на основную базу
  if (eliteUni.mainDbId) {
    return mainDb.find(u => u.id === eliteUni.mainDbId) || null;
  }
  
  // Иначе ищем по названию
  return mainDb.find(u => u.name === eliteUni.name || u.nameZh === eliteUni.nameZh) || null;
}
