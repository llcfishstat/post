import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.cuttings.createMany({
    data: [
      { title: 'БГ' },
      { title: 'НР' },
      { title: 'ПСГ' },
      { title: 'ПБГ' },
      { title: 'Консервы' },
      { title: 'Без жабр' },
      { title: 'Без кожи' },
      { title: 'Без плавников' },
      { title: 'Другое' },
      { title: 'Без головы и без хвоста' },
      { title: 'Без плавников и кожи' },
      { title: 'Тушка' },
      { title: 'Щупальца' },
    ],
  });

  await prisma.sizes.createMany({
    data: [
      { title: '3S' },
      { title: '2S' },
      { title: 'S' },
      { title: 'M' },
      { title: 'L' },
      { title: '2L' },
      { title: '3L' },
      { title: 'MIX' },
      { title: 'Не сортированный' },
    ],
  });

  await prisma.sorts.createMany({
    data: [
      { title: '2-й сорт' },
      { title: '3-й сорт' },
      { title: 'Премиум' },
      { title: 'Стандарт' },
      { title: 'Механические повреждения (МП)' },
      { title: 'Нерестовые изменения (НИ)' },
      { title: '1-й сорт' },
    ],
  });

  await prisma.catchAreas.createMany({
    data: [
      { title: '61.01: Западно-Беринговоморская зона, к востоку от 174° в.д.' },
      { title: '61.01: Западно-Беринговоморская зона, к западу от 174° в.д.' },
      { title: '61.02: Подзона Карагинская (СЗТО)' },
      { title: '61.02: Подзона Петропавловско-Командорская (СЗТО)' },
      { title: '61.03: Подзона Тихоокеанская Северо-Курильская (СЗТО)' },
      { title: '61.03: Подзона Охотоморская Северо-Курильская (СЗТО)' },
      { title: '61.04: Подзона Тихоокеанская Южно-Курильская (СЗТО)' },
      { title: '61.04: Подзона Охотоморская Южно-Курильская (СЗТО)' },
      { title: '61.06: Подзона Приморье-севернее мыса Золотой' },
      { title: '61.06: Подзона Приморье-южнее мыса Золотой' },
      { title: '61.06: Подзона Западно-Сахалинская (СЗТО)' },
      { title: '61.05: Подзона Камчатско-Курильская (СЗТО)' },
      { title: '61.05: Подзона Северо-Охотоморская (СЗТО)' },
      { title: '61.05: Сахалинский залив' },
      { title: '61.05: Подзона Западно-Камчатская (СЗТО)' },
      { title: '61.05: Подзона Восточно-Сахалинская (СЗТО)' },
      { title: '61.05: Подрайон Центральная часть Охотского моря (СЗТО)' },
      {
        title:
          '61.01.1 - Западно-Беринговоморская зона, к востоку от 174° в.д.',
      },
      {
        title: '61.01.2 - Западно-Беринговоморская зона, к западу от 174° в.д.',
      },
      { title: '61.02.1 - Подзона Карагинская' },
      { title: '61.02.2 - Подзона Петропавловско-Командорская' },
      { title: '61.03.1 - Подзона Тихоокеанская Северо-Курильская' },
      { title: '61.03.2 - Подзона Охотоморская Северо-Курильская' },
      { title: '61.04.1 - Подзона Тихоокеанская Южно-Курильская' },
      { title: '61.04.2 - Подзона Охотоморская Южно-Курильская' },
      { title: '61.05.1 - Подзона Северо-Охотоморская' },
      { title: '61.05.2 - Подзона Западно-Камчатская' },
      { title: '61.05.3 - Подзона Восточно-Сахалинская' },
      { title: '61.05.4 - Подзона Камчатско-Курильская' },
      { title: '61.06.1 - Подзона Приморье' },
      { title: '61.06.2 - Подзона Западно-Сахалинская' },
      { title: '61.51 - Подрайон Центрально-Беринговоморский' },
      { title: '61.52 - Подрайон Центральная часть Охотского моря' },
      { title: '61.53 - Подрайон Курильский' },
      { title: '61.54 - Подрайон Гавайсвкий хребет' },
      { title: '61.61 - Северо-Западная часть Тихого океана' },
    ],
  });

  await prisma.typesOfProcessing.createMany({
    data: [
      { title: 'Свежая' },
      { title: 'Мороженая' },
      { title: 'Консервы' },
      { title: 'Пресервы' },
      { title: 'Копченая' },
      { title: 'Соленая' },
      { title: 'Маринованная' },
      { title: 'Сушеная' },
      { title: 'Вяленая' },
      { title: 'Вареная, готовая' },
      { title: 'Варено-мороженная' },
      { title: 'Сыро-мороженная' },
      { title: 'Жареная и замороженная' },
      { title: 'Живая' },
      { title: 'Размороженная' },
      { title: 'Запеченная' },
      { title: 'Другое' },
      { title: 'Охлажденная' },
    ],
  });

  await prisma.products.createMany({
    data: [
      { title: 'Акула полярная' },
      { title: 'Акулы, скаты' },
      { title: 'Альфонсино' },
      { title: 'Амур белый' },
      { title: 'Ангел' },
      { title: 'Анчоус' },
      { title: 'Аргентина' },
      { title: 'Атерина' },
      { title: 'Барабулька' },
      { title: 'Барракуда' },
      { title: 'Баррамунди' },
      { title: 'Белуга аквакультурная' },
      { title: 'Берикс' },
      { title: 'Бонито' },
      { title: 'Бофин' },
      { title: 'Бротола' },
      { title: 'Бумпер(рыба-лист)' },
      { title: 'Бычки' },
      { title: 'Вобла' },
      { title: 'Вомер(рыба-луна)' },
      { title: 'Голец' },
      { title: 'Горбуша' },
      { title: 'Горбыль' },
      { title: 'Густера' },
      { title: 'Дорадо' },
      { title: 'Елец' },
      { title: 'Ёрш' },
      { title: 'Желтый полосатик' },
      { title: 'Жерех' },
      { title: 'Залом' },
      { title: 'Старгайзер (рыба звездочет) ' },
      { title: 'Змееголов' },
      { title: 'Зубан' },
      { title: 'Зубарик' },
      { title: 'Зубатка' },
      { title: 'Зубатка(пестрая)' },
      { title: 'Зубатка (синяя)' },
      { title: 'Иваси' },
      { title: 'Ильная рыба' },
      { title: 'Кабан-рыба' },
      { title: 'Камбала' },
      { title: 'Камбала-ёрш' },
      { title: 'Капитан' },
      { title: 'Каранкс' },
      { title: 'Карась' },
      { title: 'Кармут' },
      { title: 'Карп' },
      { title: 'Кета' },
      { title: 'Кефаль' },
      { title: 'Кижуч' },
      { title: 'Килька' },
      { title: 'Клыкач патагонский' },
      { title: 'Конгрио' },
      { title: 'Корвина' },
      { title: 'Корюшка' },
      { title: 'Красноглазка' },
      { title: 'Красноперка' },
      { title: 'Кумжа' },
      { title: 'Кунджа' },
      { title: 'Кутум' },
      { title: 'Лакендра-желтохвост' },
      { title: 'Ледяная' },
      { title: 'Лемонема' },
      { title: 'Ленок' },
      { title: 'Летучая рыба' },
      { title: 'Лещ' },
      { title: 'Лещ морской ' },
      { title: 'Ликоды' },
      { title: 'Линь' },
      { title: 'Лихия ' },
      { title: 'Лосось' },
      { title: 'Луфарь' },
      { title: 'Макрурус (гренадер) ' },
      { title: 'Марлин' },
      { title: 'Масляная (эсколар) ' },
      { title: 'Махи-махи' },
      { title: 'Менек' },
      { title: 'Менхеден' },
      { title: 'Мерлуза' },
      { title: 'Меч-рыба' },
      { title: 'Минога' },
      { title: 'Минтай' },
      { title: 'Мойва' },
      { title: 'Молочная' },
      { title: 'Мольва' },
      { title: 'Морской черт' },
      { title: 'Морской язык ' },
      { title: 'Муксун' },
      { title: 'Навага' },
      { title: 'Налим ' },
      { title: 'Нелусетта' },
      { title: 'Нерка' },
      { title: 'Нототения ' },
      { title: 'Окунь' },
      { title: 'Окунь морской ' },
      { title: 'Окунь пресноводный' },
      { title: 'Окунь розовый' },
      { title: 'Омуль' },
      { title: 'Осетр аквакультурный' },
      { title: 'Палия' },
      { title: 'Паломета ' },
      { title: 'Палтус' },
      { title: 'Палтус белокорый' },
      { title: 'Палтус синекорый' },
      { title: 'Палтус стрелозубый' },
      { title: 'Пангасиус' },
      { title: 'Парго ' },
      { title: 'Пеламида' },
      { title: 'Пеленгас' },
      { title: 'Пелядь(сырок) ' },
      { title: 'Пескадилия' },
      { title: 'Песчанка' },
      { title: 'Петух морской ' },
      { title: 'Пикша' },
      { title: 'Пинагор ' },
      { title: 'Пиранья' },
      { title: 'Плотва' },
      { title: 'Помпано' },
      { title: 'Пристипома' },
      { title: 'Путассу' },
      { title: 'Путассу южная ' },
      { title: 'Пыжьян' },
      { title: 'Рексия' },
      { title: 'Рубифиш' },
      { title: 'Рыба-заяц' },
      { title: 'Рыба-игла' },
      { title: 'Рыбец ' },
      { title: 'Ряпушка' },
      { title: 'Сабля' },
      { title: 'Саворин ' },
      { title: 'Сазан' },
      { title: 'Сайда' },
      { title: 'Сайка ' },
      { title: 'Сайра' },
      { title: 'Салака  ' },
      { title: 'Сарган' },
      { title: 'Сардина' },
      { title: 'Сардинелла' },
      { title: 'Сельдь' },
      { title: 'Сельдь тихоокеанская' },
      { title: 'Семга ' },
      { title: 'Сериолелла' },
      { title: 'Сибас' },
      { title: 'Сиг' },
      { title: 'Сима' },
      { title: 'Синец(Сопа)' },
      { title: 'Скат ' },
      { title: 'Скат звездчатый' },
      { title: 'Скумбрия' },
      { title: 'Снеток  ' },
      { title: 'Снэппер королевский' },
      { title: 'Снэппер красный ' },
      { title: 'Солнечник ' },
      { title: 'Сом' },
      { title: 'Ставрида  ' },
      { title: 'Стерлядь' },
      { title: 'Судак' },
      { title: 'Таймень' },
      { title: 'Талисман' },
      { title: 'Тара' },
      { title: 'Тарань ' },
      { title: 'Терпуг' },
      { title: 'Тилапия' },
      { title: 'Толстолобик' },
      { title: 'Треска' },
      { title: 'Треска тихоокеанская' },
      { title: 'Тунец ' },
      { title: 'Тюлька' },
      { title: 'Тюрбо' },
      { title: 'Угольная рыба  ' },
      { title: 'Угорь' },
      { title: 'Уклея ' },
      { title: 'Форель ' },
      { title: 'Хамса' },
      { title: 'Хариус  ' },
      { title: 'Хек' },
      { title: 'Химера' },
      { title: 'Хоки' },
      { title: 'Чавыча' },
      { title: 'Частик пресноводный' },
      { title: 'Чехонь ' },
      { title: 'Чир' },
      { title: 'Шамая' },
      { title: 'Щука' },
      { title: 'Элефант' },
      { title: 'Язь' },
      { title: 'Анадара' },
      { title: 'Вонголе' },
      { title: 'Гребешок' },
      { title: 'Кальмар' },
      { title: 'Кальмар гигантский' },
      { title: 'Капуста морская' },
      { title: 'Каракатица' },
      { title: 'Корбикула' },
      { title: 'Краб' },
      { title: 'Краб верилла ' },
      { title: 'Краб волостатый' },
      { title: 'Краб камчатский' },
      { title: 'Краб колючий' },
      { title: 'Краб коуэзи' },
      { title: 'Краб равношипый ' },
      { title: 'Краб синий' },
      { title: 'Краб-стригун' },
      { title: 'Краб-стригун ангулятус' },
      { title: 'Краб-стригун бэрди' },
      { title: 'Краб-стригун красный ' },
      { title: 'Краб-стригун опилио' },
      { title: 'Краб-стригун Таннера' },
      { title: 'Креветка ' },
      { title: 'Креветка банановая ' },
      { title: 'Креветка белая ' },
      { title: 'Креветка гребенчатая ' },
      { title: 'Креветка гренландская ' },
      { title: 'Креветка королевская' },
      { title: 'Креветка красная аргентинская лангустино' },
      { title: 'Креветка краснолапая  ' },
      { title: 'Креветка северная' },
      { title: 'Креветка тигровая' },
      { title: 'Креветка тропическая  ' },
      { title: 'Креветка углохвостая  ' },
      { title: 'Креветка холодноводная  ' },
      { title: 'Криль ' },
      { title: 'Кукумария ' },
      { title: 'Лангуст' },
      { title: 'Лангустин' },
      { title: 'Мидии  ' },
      { title: 'Морское ушко' },
      { title: 'Морской еж' },
      { title: 'Морской коктейль ' },
      { title: 'Морской кролик ' },
      { title: 'Омар ' },
      { title: 'Осьминог ' },
      { title: 'Пилонос ' },
      { title: 'Рак' },
      { title: 'Рапаны' },
      { title: 'Спизула  ' },
      { title: 'Трепанг' },
      { title: 'Трубач' },
      { title: 'Улитка виноградная ' },
      { title: 'Устрицы ' },
      { title: 'Чилим травяной ' },
      { title: 'Шипастый шримс-медвежонок ' },
      { title: 'Рыбный жир' },
      { title: 'Рыбная мука' },
      { title: 'Камбала белобрюхая' },
      { title: 'Камбала желтоперая' },
      { title: 'Камбала желтобрюхая' },
      { title: 'Икра минтая (ястычная)' },
      { title: 'Икра горбуши (ястычная)' },
      { title: 'Икра горбуши (соленая)' },
      { title: 'Икра кеты (ястычная)' },
      { title: 'Икра кеты (соленая)' },
      { title: 'Икра нерки (ястычная)' },
      { title: 'Икра нерки (соленая)' },
      { title: 'Икра кижуча (ястычная)' },
      { title: 'Икра кижуча (соленая)' },
      { title: 'Молоки лососевых рыб' },
      { title: 'Головы лососевых рыб' },
      { title: 'Икра трески (ястычная)' },
      { title: 'Камбала палтусовидная' },
      { title: 'Филе сельди' },
      { title: 'Филе минтая' },
      { title: 'Консервы печень трески кусочки' },
      { title: 'Консервы печень и икра минтая кусочки' },
      { title: 'Кальмар тушка' },
      { title: 'Камбала звездчатая' },
      { title: 'Сборный лот' },
      { title: 'Щупальца кальмара' },
    ],
  });

  await prisma.additionalServices.createMany({
    data: [
      { title: 'Грузовые работы' },
      { title: 'Логистические услуги' },
      { title: 'Тальманские услуги' },
      { title: 'Оформление ветеринарных документов' },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
