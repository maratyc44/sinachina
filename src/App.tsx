import { useState, useMemo } from 'react';
import { universities, grants, documents, timeline, CNY_TO_RUB, University } from './data/universities';

// ===== УТИЛИТЫ =====
function toRub(cny: number): string {
  return Math.round(cny * CNY_TO_RUB).toLocaleString('ru-RU');
}

function calculateChance(uni: University, gpa: number, age: number, hasHsk: boolean): number {
  let chance = uni.acceptanceRate;
  if (gpa >= uni.avgGPA) chance += 10;
  else if (gpa < uni.avgGPA - 0.3) chance -= 20;
  if (hasHsk) chance += 15;
  if (age > 25) chance -= 30;
  return Math.max(1, Math.min(80, chance));
}

function getDifficultyColor(cat: string): string {
  switch (cat) {
    case 'EXTREMELY_HARD': return 'bg-red-100 text-red-800 border-red-200';
    case 'HARD': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'MEDIUM': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'EASY': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

function getDifficultyLabel(cat: string): string {
  switch (cat) {
    case 'EXTREMELY_HARD': return 'Крайне сложно';
    case 'HARD': return 'Сложно';
    case 'MEDIUM': return 'Средне';
    case 'EASY': return 'Доступно';
    default: return cat;
  }
}

function getChanceColor(chance: number): string {
  if (chance >= 30) return 'text-green-600';
  if (chance >= 15) return 'text-yellow-600';
  if (chance >= 5) return 'text-orange-600';
  return 'text-red-600';
}

// ===== ГЛАВНОЕ ПРИЛОЖЕНИЕ =====
export default function App() {
  const [activeTab, setActiveTab] = useState<'search' | 'grants' | 'documents' | 'timeline' | 'chat'>('search');
  const [selectedUni, setSelectedUni] = useState<University | null>(null);

  // Фильтры
  const [specialty, setSpecialty] = useState('');
  const [city, setCity] = useState('Любой');
  const [province, setProvince] = useState('Любая');
  const [budget, setBudget] = useState('Любой');
  const [difficulty, setDifficulty] = useState('Любая');

  // Профиль
  const [gpa, setGpa] = useState(3.5);
  const [age, setAge] = useState(18);
  const [hasHsk, setHasHsk] = useState(false);

  // Чат
  const [chatMessages, setChatMessages] = useState<{role: string; content: string}[]>([
    { role: 'assistant', content: 'Здравствуйте! Я — ИИ-консультант по поступлению в Китай. Задайте мне вопрос о вузах, грантах, стоимости или шансах поступления. Например: «Какие вузы в Китае с программой 1+4 по информатике?»' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const filteredUnis = useMemo(() => {
    return universities.filter(uni => {
      if (specialty && !uni.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))) return false;
      if (city !== 'Любой' && uni.cityRu !== city) return false;
      if (province !== 'Любая' && uni.province !== province) return false;
      if (difficulty !== 'Любая' && uni.difficultyCategory !== difficulty) return false;
      if (budget === 'До 300 000 ₽') {
        if (uni.costBachelorCNY * CNY_TO_RUB > 300000) return false;
      } else if (budget === 'До 500 000 ₽') {
        if (uni.costBachelorCNY * CNY_TO_RUB > 500000) return false;
      }
      return true;
    });
  }, [specialty, city, province, budget, difficulty]);

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let response = '';
      const lowerMsg = userMsg.toLowerCase();

      if (lowerMsg.includes('грант') || lowerMsg.includes('csc') || lowerMsg.includes('стипенд')) {
        response = `🎓 **Гранты для поступления в Китай:**\n\n**1. CSC Тип А** — правительственная стипендия. Покрывает ВСЁ: обучение, общежитие, медстраховку + 2 500 юаней/мес на жизнь. Подача через посольство Китая. Дедлайн: март–апрель.\n\n**2. CIS (Институт Конфуция)** — покрывает 1 год языка + стипендию. Продление на бакалавриат по конкурсу. Дедлайн: май.\n\n**3. Провинциальные гранты** — от провинций (Пекин, Цзянсу и др.). Реально получить, конкуренция ниже.\n\n💡 **Совет:** Подавайтесь на ВСЕ типы грантов одновременно — это увеличивает шансы в 3 раза.`;
      } else if (lowerMsg.includes('стоимость') || lowerMsg.includes('цена') || lowerMsg.includes('рубл') || lowerMsg.includes('юан')) {
        response = `💰 **Стоимость обучения в Китае (программа 1+4):**\n\n**Университет Цинхуа (Пекин):**\n• Языковой год: 30 000 ¥ (≈${toRub(30000)} ₽)\n• Бакалавриат: 40 000 ¥/год (≈${toRub(40000)} ₽)\n• Общежитие: 8 000 ¥/год\n• Итого за 5 лет: ≈3,5 млн ₽\n\n**Чжэцзянский университет (Ханчжоу):**\n• Языковой год: 22 000 ¥\n• Бакалавриат: 32 000 ¥/год\n• Итого за 5 лет: ≈2,7 млн ₽\n\n**Уханьский университет:**\n• Бакалавриат: 26 000 ¥/год\n• Итого за 5 лет: ≈2,1 млн ₽\n\n**Университет Цзянсу (Чжэньцзян):**\n• Бакалавриат: 18 000 ¥/год\n• Итого за 5 лет: ≈1,5 млн ₽\n\n💡 С грантом CSC: только карманные расходы ≈1 500 ¥/мес (≈${toRub(1500)} ₽)`;
      } else if (lowerMsg.includes('шанс') || lowerMsg.includes('поступ') || lowerMsg.includes('сложно')) {
        response = `📊 **Шансы поступления (для GPA ${gpa}, возраст ${age}):**\n\n• **Университет Цинхуа** — Крайне сложно: ${calculateChance(universities[0], gpa, age, hasHsk)}% (конкурс 25:1)\n• **Чжэцзянский университет** — Сложно: ${calculateChance(universities[1], gpa, age, hasHsk)}% (конкурс 18:1)\n• **Уханьский университет** — Средне: ${calculateChance(universities[2], gpa, age, hasHsk)}% (конкурс 8:1)\n• **Университет Цзянсу** — Доступно: ${calculateChance(universities[5], gpa, age, hasHsk)}% (конкурс 3:1)\n\n💡 **Как улучшить шанс:**\n• Сдать HSK 2–3 до подачи: +15%\n• Подтянуть GPA: +10%\n• Податься в 3–4 вуза одновременно\n• Подать на все типы грантов`;
      } else if (lowerMsg.includes('документ') || lowerMsg.includes('какие нужны')) {
        response = `📋 **Стандартный пакет документов для Китая:**\n\n✅ Аттестат/диплом с апостилем + нотариальный перевод\n✅ Транскрипт оценок\n✅ 2 рекомендательных письма\n✅ Мотивационное письмо (SOP)\n✅ Медсправка (Foreigner Physical Examination Form)\n✅ Справка о несудимости\n✅ Загранпаспорт (срок > 1,5 лет)\n✅ Фото 4×6 см\n⬜ HSK (если есть)\n⬜ Финансовые гарантии (если без гранта)\n\n⚠️ Переводы должны быть нотариальными! Закладывайте 2–3 недели на подготовку.`;
      } else if (lowerMsg.includes('виз') || lowerMsg.includes('x1')) {
        response = `✈️ **Виза для учёбы в Китае:**\n\n**Тип X1** — для обучения более 180 дней.\n\n**Процесс:**\n1. Получить JW202 от вуза (после зачисления)\n2. Собрать документы: паспорт, фото, JW202, медсправка\n3. Подать в визовый центр Китая\n4. Срок рассмотрения: 4–7 рабочих дней\n5. После приезда — получить ВНЖ (Residence Permit) в течение 30 дней\n\n⚠️ Медицинское обследование обязательно в Китае в первый месяц!`;
      } else if (lowerMsg.includes('1+4') || lowerMsg.includes('подготовитель')) {
        response = `🎓 **Программа 1+4 — как это работает:**\n\n**Год 1:** Интенсивный китайский (25–30 часов/неделю)\n• Цель: сдать HSK 4\n• BLCU: 98% сдают (лучший результат)\n• В среднем: 85–95% сдают\n\n**Годы 2–5:** Бакалавриат по специальности\n• Переход НЕ автоматический (нужен GPA > 3.0)\n• Грант CIS на 1 год НЕ гарантирует продление\n\n⚠️ **Риски:**\n• Не сдал HSK 4 → отчисление или домой\n• 15–20% не сдают с первого раза\n• Смена специальности после языка — не во всех вузах\n\n💡 **Совет:** Начните учить китайский СЕЙЧАС — это увеличит шансы на грант на 15%`;
      } else {
        response = `Спасибо за вопрос! Вот что я могу рассказать:\n\n🔍 **Я могу помочь с:**\n• Поиском вузов по специальности и бюджету\n• Расчётом стоимости в рублях и юанях\n• Оценкой шансов поступления\n• Информацией о грантах (CSC, CIS, провинциальные)\n• Списком документов и дедлайнами\n• Визовыми вопросами\n• Программами 1+4 (подготовительный год + бакалавриат)\n\nПопробуйте спросить: «Какие гранты есть?», «Сколько стоит обучение?», «Какие шансы поступить?»`;
      }

      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);
  };

  const cities = ['Любой', 'Пекин', 'Шанхай', 'Ханчжоу', 'Нанкин', 'Сучжоу', 'Уси', 'Чанчжоу', 'Янчжоу', 'Наньтун', 'Хуайань', 'Яньчэн', 'Чаншу', 'Сюйчжоу', 'Тайчжоу', 'Ляньюньган', 'Ухань', 'Харбин', 'Сямынь', 'Гуанчжоу', 'Шэньчжэнь', 'Чэнду', 'Чунцин', 'Лешань', 'Ибинь', 'Цзигун', 'Мяньян', 'Лучжоу', 'Яань', 'Наньчун', 'Нэйцзян', 'Суйнин', 'Паньчжихуа', 'Дачжоу', 'Сиань', 'Тяньцзинь', 'Цзинань', 'Циндао', 'Шэньян', 'Далянь', 'Чанша', 'Сянтань', 'Кайфын', 'Хэфэй', 'Куньмин', 'Наньнин', 'Гуйлинь', 'Чанчунь', 'Яньцзи', 'Ланьчжоу', 'Гуйян', 'Хайкоу', 'Фучжоу', 'Чжэньцзян', 'Фушунь', 'Аньшань', 'Хулудао', 'Цзиньчжоу', 'Даньдун', 'Баодин', 'Шицзячжуан', 'Тайюань', 'Хух-Хото', 'Синин', 'Иньчуань', 'Урумчи'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-gray-900">Поиск вузов Китая</h1>
          </div>
          <nav className="hidden md:flex gap-2">
            {[
              { id: 'search', label: 'Поиск' },
              { id: 'grants', label: 'Гранты' },
              { id: 'documents', label: 'Документы' },
              { id: 'timeline', label: 'План' },
              { id: 'chat', label: 'ИИ-чат' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        {/* Мобильная навигация */}
        <div className="md:hidden flex gap-1 px-4 pb-2 overflow-x-auto">
          {[
            { id: 'search', label: 'Поиск' },
            { id: 'grants', label: 'Гранты' },
            { id: 'documents', label: 'Документы' },
            { id: 'timeline', label: 'План' },
            { id: 'chat', label: 'ИИ-чат' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* ===== ВКЛАДКА ПОИСК ===== */}
        {activeTab === 'search' && !selectedUni && (
          <div>
            {/* Заголовок */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Поступление в Китай</h2>
              <p className="text-gray-600">Программы 1+4 для иностранцев без знания китайского • 1 год языка + 4 года бакалавриата</p>
            </div>

            {/* Профиль и фильтры */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Профиль */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Ваш профиль</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">Средний балл (из 5.0): <span className="font-bold text-red-600">{gpa}</span></label>
                    <input
                      type="range" min="2" max="5" step="0.1" value={gpa}
                      onChange={e => setGpa(parseFloat(e.target.value))}
                      className="w-full mt-1 accent-red-600"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Возраст: <span className="font-bold text-red-600">{age}</span></label>
                    <input
                      type="range" min="16" max="40" value={age}
                      onChange={e => setAge(parseInt(e.target.value))}
                      className="w-full mt-1 accent-red-600"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox" id="hsk" checked={hasHsk}
                      onChange={e => setHasHsk(e.target.checked)}
                      className="accent-red-600"
                    />
                    <label htmlFor="hsk" className="text-sm text-gray-600">Есть сертификат HSK</label>
                  </div>
                  {age > 25 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs text-yellow-800">
                      ⚠️ Возраст {'>'} 25: гранты CSC недоступны (лимит 25 лет для бакалавриата)
                    </div>
                  )}
                </div>
              </div>

              {/* Фильтры */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Фильтры</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Специальность</label>
                    <input
                      type="text" placeholder="Информатика, Медицина, Бизнес..."
                      value={specialty} onChange={e => setSpecialty(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Провинция</label>
                    <select
                      value={province} onChange={e => setProvince(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-200 outline-none"
                    >
                      <option>Любая</option>
                      <option>Пекин</option>
                      <option>Шанхай</option>
                      <option>Тяньцзинь</option>
                      <option>Чжэцзян</option>
                      <option>Цзянсу</option>
                      <option>Гуандун</option>
                      <option>Фуцзянь</option>
                      <option>Хубэй</option>
                      <option>Хэйлунцзян</option>
                      <option>Шэньси</option>
                      <option>Шаньдун</option>
                      <option>Ляонин</option>
                      <option>Хунань</option>
                      <option>Хэнань</option>
                      <option>Аньхой</option>
                      <option>Сычуань</option>
                      <option>Юньнань</option>
                      <option>Гуанси</option>
                      <option>Цзилинь</option>
                      <option>Ганьсу</option>
                      <option>Гуйчжоу</option>
                      <option>Хайнань</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Город</label>
                    <select
                      value={city} onChange={e => setCity(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-200 outline-none"
                    >
                      {cities.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Бюджет</label>
                    <select
                      value={budget} onChange={e => setBudget(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-200 outline-none"
                    >
                      <option>Любой</option>
                      <option>Только грант</option>
                      <option>До 300 000 ₽</option>
                      <option>До 500 000 ₽</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Сложность</label>
                    <select
                      value={difficulty} onChange={e => setDifficulty(e.target.value)}
                      className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-200 outline-none"
                    >
                      <option>Любая</option>
                      <option value="EXTREMELY_HARD">Крайне сложно</option>
                      <option value="HARD">Сложно</option>
                      <option value="MEDIUM">Средне</option>
                      <option value="EASY">Доступно</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Быстрая статистика */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Статистика</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">{filteredUnis.length}</div>
                    <div className="text-xs text-gray-500">Найдено</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-900">143</div>
                    <div className="text-xs text-gray-500">Всего вузов</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Карточки университетов */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Университеты ({filteredUnis.length})
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {filteredUnis.map(uni => {
                const chance = calculateChance(uni, gpa, age, hasHsk);
                return (
                  <div
                    key={uni.id}
                    onClick={() => setSelectedUni(uni)}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-400 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{uni.name}</h4>
                        <p className="text-sm text-gray-500">{uni.nameZh} • {uni.cityRu}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(uni.difficultyCategory)}`}>
                        {getDifficultyLabel(uni.difficultyCategory)}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center bg-gray-50 rounded-lg p-2">
                        <div className="text-sm font-semibold text-gray-900">{uni.costBachelorCNY.toLocaleString()} ¥</div>
                        <div className="text-xs text-gray-500">{toRub(uni.costBachelorCNY)} ₽/год</div>
                      </div>
                      <div className="text-center bg-gray-50 rounded-lg p-2">
                        <div className="text-sm font-semibold text-gray-900">{uni.competition}:1</div>
                        <div className="text-xs text-gray-500">конкурс</div>
                      </div>
                      <div className="text-center bg-gray-50 rounded-lg p-2">
                        <div className={`text-sm font-semibold ${getChanceColor(chance)}`}>{chance}%</div>
                        <div className="text-xs text-gray-500">шанс</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {uni.specialties.slice(0, 4).map(s => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{s}</span>
                      ))}
                      {uni.specialties.length > 4 && (
                        <span className="text-xs text-gray-500">+{uni.specialties.length - 4}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Дедлайн: {uni.deadlineCSC}</span>
                      <span className="text-gray-900 font-medium">Подробнее →</span>
                    </div>
                  </div>
                );
              })}
            </div>
            {filteredUnis.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-2">Ничего не найдено</p>
                <p className="text-sm">Попробуйте расширить критерии поиска.</p>
              </div>
            )}
          </div>
        )}

        {/* ===== ДЕТАЛЬНАЯ СТРАНИЦА УНИВЕРСИТЕТА ===== */}
        {activeTab === 'search' && selectedUni && (
          <div>
            <button
              onClick={() => setSelectedUni(null)}
              className="mb-4 text-gray-600 hover:text-gray-900 font-medium text-sm"
            >
              ← Назад к списку
            </button>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Заголовок */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedUni.name}</h2>
                    <p className="text-gray-500 mt-1">{selectedUni.nameZh} • {selectedUni.cityRu}</p>
                    <p className="text-gray-600 text-sm mt-1">{selectedUni.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">QS №{typeof selectedUni.qsRanking === 'number' ? selectedUni.qsRanking : '—'}</div>
                    <span className={`text-xs px-2 py-1 rounded-full border mt-2 inline-block ${getDifficultyColor(selectedUni.difficultyCategory)}`}>
                      {getDifficultyLabel(selectedUni.difficultyCategory)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Статистика */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedUni.competition}:1</div>
                    <div className="text-xs text-gray-500">Конкурс</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedUni.acceptanceRate}%</div>
                    <div className="text-xs text-gray-500">Принятых</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900">{selectedUni.hskPassRate}%</div>
                    <div className="text-xs text-gray-500">Сдают HSK 4</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className={`text-2xl font-bold ${getChanceColor(calculateChance(selectedUni, gpa, age, hasHsk))}`}>{calculateChance(selectedUni, gpa, age, hasHsk)}%</div>
                    <div className="text-xs text-gray-500">Ваш шанс</div>
                  </div>
                </div>

                {/* Финансы */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Финансы</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Подготовительный год</td>
                          <td className="py-2 text-right font-medium">{selectedUni.costLanguageCNY.toLocaleString()} ¥</td>
                          <td className="py-2 text-right text-red-600">≈ {toRub(selectedUni.costLanguageCNY)} ₽</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Бакалавриат (в год)</td>
                          <td className="py-2 text-right font-medium">{selectedUni.costBachelorCNY.toLocaleString()} ¥</td>
                          <td className="py-2 text-right text-red-600">≈ {toRub(selectedUni.costBachelorCNY)} ₽</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Общежитие (в год)</td>
                          <td className="py-2 text-right font-medium">{selectedUni.dormitoryCNY.toLocaleString()} ¥</td>
                          <td className="py-2 text-right text-red-600">≈ {toRub(selectedUni.dormitoryCNY)} ₽</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Жизнь в городе (в месяц)</td>
                          <td className="py-2 text-right font-medium">{selectedUni.cityLifeCost.toLocaleString()} ¥</td>
                          <td className="py-2 text-right text-red-600">≈ {toRub(selectedUni.cityLifeCost)} ₽</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="py-2 font-bold text-gray-800">ИТОГО за 5 лет (без гранта)</td>
                          <td className="py-2 text-right font-bold">
                            {(selectedUni.costLanguageCNY + selectedUni.costBachelorCNY * 4 + selectedUni.dormitoryCNY * 5 + selectedUni.cityLifeCost * 48).toLocaleString()} ¥
                          </td>
                          <td className="py-2 text-right font-bold text-red-700">
                            ≈ {toRub(selectedUni.costLanguageCNY + selectedUni.costBachelorCNY * 4 + selectedUni.dormitoryCNY * 5 + selectedUni.cityLifeCost * 48)} ₽
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-3 p-2 bg-green-50 rounded-lg text-sm text-green-800">
                      ✅ <strong>С грантом CSC:</strong> только карманные расходы ≈1 500 ¥/мес (≈ {toRub(1500)} ₽)
                    </div>
                  </div>
                </div>

                {/* Жизнь студента */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Жизнь студента</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-blue-800">🏙️ Город:</p>
                      <p className="text-sm text-blue-700">{selectedUni.cityDescription}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-orange-800">🌡️ Климат:</p>
                      <p className="text-sm text-orange-700">{selectedUni.climate}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-purple-800">👥 Земляки из СНГ:</p>
                      <p className="text-sm text-purple-700">{selectedUni.compatriots}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-800">🌐 Интернет:</p>
                      <p className="text-sm text-gray-700">{selectedUni.internet}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-green-800">💼 Подработка:</p>
                      <p className="text-sm text-green-700">{selectedUni.partTime}</p>
                    </div>
                  </div>
                </div>

                {/* Гранты */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Гранты и дедлайны</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-yellow-50 rounded-lg p-3">
                      <span className="text-sm font-medium">CSC Тип А: {selectedUni.grantCSC}</span>
                      <span className="text-sm text-red-600 font-medium">📅 {selectedUni.deadlineCSC}</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                      <span className="text-sm font-medium">CIS: {selectedUni.grantCIS}</span>
                      <span className="text-sm text-red-600 font-medium">📅 {selectedUni.deadlineCIS}</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                      <span className="text-sm font-medium">Продление гранта: {selectedUni.grantRenewalRate}%</span>
                      <span className="text-sm text-gray-600">шанс продления на бакалавриат</span>
                    </div>
                  </div>
                </div>

                {/* Анализ шансов */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Анализ шансов</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Ваш средний балл:</p>
                        <p className="font-bold text-lg">{gpa} / 5.0</p>
                        <p className="text-xs text-gray-500">Средний у принятых: {selectedUni.avgGPA}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Ваш возраст:</p>
                        <p className="font-bold text-lg">{age} лет</p>
                        <p className="text-xs text-gray-500">{age <= 25 ? '✅ В пределах лимита' : '❌ За пределами лимита CSC'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Шанс поступления</span>
                          <span className={`font-bold ${getChanceColor(calculateChance(selectedUni, gpa, age, hasHsk))}`}>
                            {calculateChance(selectedUni, gpa, age, hasHsk)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all ${
                              calculateChance(selectedUni, gpa, age, hasHsk) >= 30 ? 'bg-green-500' :
                              calculateChance(selectedUni, gpa, age, hasHsk) >= 15 ? 'bg-yellow-500' :
                              calculateChance(selectedUni, gpa, age, hasHsk) >= 5 ? 'bg-orange-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${calculateChance(selectedUni, gpa, age, hasHsk)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Документы */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Документы</h3>
                  <p className="text-sm text-gray-600 mb-2">{selectedUni.documents}</p>
                </div>

                {/* Риски */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Риски</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-sm text-gray-700">
                    <p>• Не сдал HSK 4 после года → отчисление или отправка домой</p>
                    <p>• Грант CIS на 1 год НЕ гарантирует продление на бакалавриат</p>
                    <p>• Конкурс: {selectedUni.competition} человек на место</p>
                    {selectedUni.difficultyCategory === 'EXTREMELY_HARD' && (
                      <p>• Даже с идеальным профилем шанс 2–5%</p>
                    )}
                    {selectedUni.difficultyCategory === 'HARD' && (
                      <p>• Высокая конкуренция, нужно сильное мотивационное письмо</p>
                    )}
                  </div>
                </div>

                {/* Ссылка */}
                <a
                  href={selectedUni.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Открыть сайт университета →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ===== ВКЛАДКА ГРАНТЫ ===== */}
        {activeTab === 'grants' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Гранты для обучения в Китае</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {grants.map((grant, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{grant.name}</h3>
                      <p className="text-sm text-gray-500">{grant.nameRu}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {grant.competition}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Покрытие:</span>
                      <span className="font-medium">{grant.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Стипендия:</span>
                      <span className="font-medium text-gray-900">{grant.stipend}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Дедлайн:</span>
                      <span className="font-medium text-gray-900">{grant.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Куда подавать:</span>
                      <span className="font-medium">{grant.whereToApply}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{grant.description}</p>
                </div>
              ))}
            </div>

            {/* Таблица сравнения */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200 overflow-x-auto">
              <h3 className="font-bold text-gray-900 mb-4">Сравнение грантов</h3>
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 px-3">Параметр</th>
                    <th className="text-center py-2 px-3">CSC Тип А</th>
                    <th className="text-center py-2 px-3">CIS</th>
                    <th className="text-center py-2 px-3">Провинциальный</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 text-gray-600">Куда подавать</td>
                    <td className="py-2 px-3 text-center">Посольство</td>
                    <td className="py-2 px-3 text-center">Институт Конфуция</td>
                    <td className="py-2 px-3 text-center">Вуз / Провинция</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 text-gray-600">Что покрывает</td>
                    <td className="py-2 px-3 text-center">5 лет полностью</td>
                    <td className="py-2 px-3 text-center">1 год + по конкурсу</td>
                    <td className="py-2 px-3 text-center">Частично/полностью</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 text-gray-600">Стипендия</td>
                    <td className="py-2 px-3 text-center">2 500 ¥/мес</td>
                    <td className="py-2 px-3 text-center">2 500 ¥/мес</td>
                    <td className="py-2 px-3 text-center">1 500–2 500 ¥/мес</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3 text-gray-600">Конкурс</td>
                    <td className="py-2 px-3 text-center font-semibold">Очень высокий</td>
                    <td className="py-2 px-3 text-center font-semibold">Средний</td>
                    <td className="py-2 px-3 text-center font-semibold">Ниже</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-gray-600">Лучше для</td>
                    <td className="py-2 px-3 text-center">Топ-вузов (C9)</td>
                    <td className="py-2 px-3 text-center">Языковых программ</td>
                    <td className="py-2 px-3 text-center">Провинциальных вузов</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===== ВКЛАДКА ДОКУМЕНТЫ ===== */}
        {activeTab === 'documents' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Документы для поступления</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="space-y-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-gray-100 text-gray-700">
                      {doc.required ? '✓' : '?'}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.note}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full shrink-0 bg-gray-100 text-gray-700">
                      {doc.required ? 'Обязательно' : 'По ситуации'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Важные нюансы:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Переводы должны быть нотариальными</li>
                  <li>• Апостиль ставится на оригинал документа</li>
                  <li>• Медсправка — специальная форма (Foreigner Physical Examination Form)</li>
                  <li>• Закладывайте 2–3 недели на подготовку всех документов</li>
                  <li>• Фото должно быть на белом фоне, 4×6 см</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ===== ВКЛАДКА ПЛАН ===== */}
        {activeTab === 'timeline' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Пошаговый план поступления</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-4">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex items-start gap-4 pl-2">
                      <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-lg z-10 shrink-0">
                        {item.icon}
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{item.month}</p>
                        <p className="text-gray-700">{item.task}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Чек-лист готовности:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Начал учить китайский</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Собрал аттестат/диплом</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Заказал переводы</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Поставил апостиль</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Получил рекомендации</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Написал мотивационное письмо</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Прошёл медосмотр</label>
                  <label className="flex items-center gap-2"><input type="checkbox" className="accent-gray-900" /> Получил справку о несудимости</label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== ВКЛАДКА ЧАТ ===== */}
        {activeTab === 'chat' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ИИ-консультант по поступлению</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Сообщения чата */}
              <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="text-sm whitespace-pre-wrap" dangerouslySetInnerHTML={{
                        __html: msg.content
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\n/g, '<br/>')
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Быстрые вопросы */}
              <div className="px-4 py-2 border-t border-gray-100 flex flex-wrap gap-2">
                {['Какие гранты есть?', 'Сколько стоит обучение?', 'Какие шансы поступить?', 'Какие документы нужны?', 'Что такое программа 1+4?', 'Как получить визу?'].map(q => (
                  <button
                    key={q}
                    onClick={() => { setChatInput(q); }}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Ввод */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleChatSend()}
                    placeholder="Задайте вопрос о поступлении в Китай..."
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none"
                  />
                  <button
                    onClick={handleChatSend}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Подвал */}
      <footer className="mt-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>Информация актуальна на сентябрь 2026 • Курс: 1 ¥ ≈ {CNY_TO_RUB} ₽</p>
        </div>
      </footer>
    </div>
  );
}
