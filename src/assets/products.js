/** @type {import('../types').Product[]} */
// Категории растений
export const CATEGORIES = [
  { value: 'all', label: 'Все растения' },
  { value: 'succulents', label: 'Суккуленты' },
  { value: 'foliage', label: 'Декоративно-лиственные' },
  { value: 'flowering', label: 'Цветущие' },
  { value: 'orchids', label: 'Орхидеи' },
  { value: 'ficus', label: 'Фикусы' },
  { value: 'citrus', label: 'Цитрусовые' }
];

/** @type {import('../types').Product[]} */
export const PRODUCTS = [
  // ===== ОРХИДЕИ=====
  {
    id: 1,
    name: 'Орхидея Фаленопсис мини белая D7',
    category: 'orchids',
    price: 1990,
    image: '/src/assets/products/orchid-white.jpg',
    stock: 8,
    description: 'Миниатюрная белая орхидея. Диаметр горшка 7 см. Цветет обильно и долго.'
  },
  {
    id: 2,
    name: 'Орхидея Фаленопсис мини Amalion Salta D7',
    category: 'orchids',
    price: 1990,
    image: '/src/assets/products/orchid-amalion.jpg',
    stock: 6,
    description: 'Нежная орхидея с розовыми цветами. Компактный размер, идеальна для подоконника.'
  },
  {
    id: 3,
    name: 'Орхидея Фаленопсис мини Нежный лайм D7',
    category: 'orchids',
    price: 1990,
    image: '/src/assets/products/orchid-lime.jpg',
    stock: 5,
    description: 'Редкий сорт с цветами нежного лаймового оттенка. Очень элегантна.'
  },
  {
    id: 4,
    name: 'Орхидея Камбрия микс D12',
    category: 'orchids',
    price: 2190,
    image: '/src/assets/products/orchid-cambria.jpg',
    stock: 4,
    description: 'Яркая орхидея с пятнистыми цветами. Диаметр горшка 12 см.'
  },
  {
    id: 5,
    name: 'Орхидея Фаленопсис микс D12 2 ст',
    category: 'orchids',
    price: 2350,
    image: '/src/assets/products/orchid-mix.jpg',
    stock: 7,
    description: 'Крупная орхидея с двумя цветоносами. Очень эффектное растение.'
  },
  {
    id: 6,
    name: 'Орхидея Зиготеталум Пфланзе D12',
    category: 'orchids',
    price: 2490,
    image: '/src/assets/products/orchid-zigopetalum.jpg',
    stock: 3,
    description: 'Ароматная орхидея с необычными полосатыми цветами.'
  },

  // ===== СУККУЛЕНТЫ =====
  {
    id: 7,
    name: 'Агава',
    category: 'succulents',
    price: 1200,
    image: '/src/assets/products/agave.jpg',
    stock: 10,
    description: 'Крупный суккулент с жесткими мясистыми листьями. Очень неприхотлив.'
  },
  {
    id: 8,
    name: 'Адениум (Роза пустыни)',
    category: 'succulents',
    price: 2500,
    image: '/src/assets/products/adenium.jpg',
    stock: 5,
    description: 'Каудексное растение с яркими розовыми цветами. Напоминает маленькое дерево.'
  },
  {
    id: 9,
    name: 'Алоэ',
    category: 'succulents',
    price: 650,
    image: '/src/assets/products/aloe.jpg',
    stock: 15,
    description: 'Лечебное растение с мясистыми листьями. Сок помогает при ожогах.'
  },
  {
    id: 10,
    name: 'Кактус',
    category: 'succulents',
    price: 450,
    image: '/src/assets/products/cactus.jpg',
    stock: 20,
    description: 'Разнообразные кактусы разных форм и размеров. Идеальны для занятых людей.'
  },
  {
    id: 11,
    name: 'Крассула (Денежное дерево)',
    category: 'succulents',
    price: 850,
    image: '/src/assets/products/crassula.jpg',
    stock: 12,
    description: 'Популярное растение с монетовидными листьями. Считается, что приносит удачу.'
  },
  {
    id: 12,
    name: 'Литопс (Живые камни)',
    category: 'succulents',
    price: 400,
    image: '/src/assets/products/lithops.jpg',
    stock: 8,
    description: 'Удивительные растения, имитирующие камни. Цветут красивыми ромашками.'
  },
  {
    id: 13,
    name: 'Рипсалис',
    category: 'succulents',
    price: 700,
    image: '/src/assets/products/ripsis.jpg',
    stock: 9,
    description: 'Ампельный кактус с тонкими свисающими побегами. Очень необычный.'
  },
  {
    id: 14,
    name: 'Хавортия',
    category: 'succulents',
    price: 500,
    image: '/src/assets/products/haworthia.jpg',
    stock: 14,
    description: 'Миниатюрный суккулент с белыми полосками на листьях.'
  },

  // ===== ФИКУСЫ =====
  {
    id: 15,
    name: 'Фикус Эластика Абиджан',
    category: 'ficus',
    price: 1590,
    image: '/src/assets/products/ficus-abidjan.jpg',
    stock: 12,
    description: 'Темно-зеленые глянцевые листья. Очень неприхотливый сорт фикуса.'
  },
  {
    id: 16,
    name: 'Фикус эластика Белиз',
    category: 'ficus',
    price: 1290,
    image: '/src/assets/products/ficus-belize.jpg',
    stock: 8,
    description: 'Пестрые листья с розовыми и кремовыми оттенками. Очень декоративен.'
  },
  {
    id: 17,
    name: 'Фикус Эластика Робуста',
    category: 'ficus',
    price: 1290,
    image: '/src/assets/products/ficus-robusta.jpg',
    stock: 15,
    description: 'Классический каучуковый фикус с крупными зелеными листьями.'
  },
  {
    id: 18,
    name: 'Фикус Экзотика цилиндр',
    category: 'ficus',
    price: 23600,
    image: '/src/assets/products/ficus-exotica.jpg',
    stock: 1,
    description: 'Крупное растение высотой 140 см. Настоящее дерево для просторных помещений.'
  },
  {
    id: 19,
    name: 'Фикус Бенджамина Грин Кинки',
    category: 'ficus',
    price: 1590,
    image: '/src/assets/products/ficus-kinki.jpg',
    stock: 10,
    description: 'Пестролистный фикус с мелкими листьями. Отлично поддается формировке.'
  },

  // ===== ЦИТРУСОВЫЕ =====
  {
    id: 20,
    name: 'Каланюдин 45/15',
    category: 'citrus',
    price: 5190,
    image: '/src/assets/products/kalanjudin-45.jpg',
    stock: 5,
    description: 'Компактное цитрусовое растение. Высота 45 см, горшок 15 см.'
  },
  {
    id: 21,
    name: 'Каланюдин 70/26 без плодов',
    category: 'citrus',
    price: 5990,
    image: '/src/assets/products/kalanjudin-70.jpg',
    stock: 1,
    description: 'Крупный экземпляр высотой 70 см. Без плодов, но может зацвести.'
  },
  {
    id: 22,
    name: 'Кумкват 70/21',
    category: 'citrus',
    price: 8390,
    image: '/src/assets/products/kumquat.jpg',
    stock: 3,
    description: 'Миниатюрные оранжевые плоды, которые едят вместе с кожурой. Очень декоративен.'
  },
  {
    id: 23,
    name: 'Каланюдин 80/21',
    category: 'citrus',
    price: 8590,
    image: '/src/assets/products/kalanjudin-80.jpg',
    stock: 1,
    description: 'Крупное растение высотой 80 см. Обильно цветет и плодоносит.'
  },
  {
    id: 24,
    name: 'Каланюдин 65/21',
    category: 'citrus',
    price: 9190,
    image: '/src/assets/products/kalanjudin-65.jpg',
    stock: 4,
    description: 'Цитрус с ароматными цветами. Высота 65 см.'
  },
  {
    id: 25,
    name: 'Лимонное дерево 165/40',
    category: 'citrus',
    price: 29786,
    image: '/src/assets/products/lemon-tree.jpg',
    stock: 1,
    description: 'Крупное лимонное дерево высотой 165 см. Дает настоящие лимоны!'
  },

  // ===== ДЕКОРАТИВНО-ЛИСТВЕННЫЕ =====
  {
    id: 26,
    name: 'Алоказия Алькадия',
    category: 'foliage',
    price: 1500,
    image: '/src/assets/products/alocasia.jpg',
    stock: 7,
    description: 'Крупные стреловидные листья с яркими жилками. Любит влажность.'
  },
  {
    id: 27,
    name: 'Аглаонема',
    category: 'foliage',
    price: 1200,
    image: '/src/assets/products/aglaonema.jpg',
    stock: 10,
    description: 'Пестрые листья, хорошо растет в тени. Очищает воздух.'
  },
  {
    id: 28,
    name: 'Бамбук',
    category: 'foliage',
    price: 900,
    image: '/src/assets/products/bamboo.jpg',
    stock: 15,
    description: 'Символ удачи и процветания. Растет в воде или грунте.'
  },
  {
    id: 29,
    name: 'Аспарагус',
    category: 'foliage',
    price: 850,
    image: '/src/assets/products/asparagus.jpg',
    stock: 12,
    description: 'Ажурная зелень, напоминающая папоротник. Красиво свисает из кашпо.'
  },
  {
    id: 30,
    name: 'Аспидистра',
    category: 'foliage',
    price: 1100,
    image: '/src/assets/products/aspidistra.jpg',
    stock: 8,
    description: 'Железное растение - выживает в самых тяжелых условиях.'
  },
  {
    id: 31,
    name: 'Диффенбахия',
    category: 'foliage',
    price: 1300,
    image: '/src/assets/products/dieffenbachia.jpg',
    stock: 9,
    description: 'Крупные пестрые листья. Быстро растет, очищает воздух.'
  },

  // ===== ЦВЕТУЩИЕ  =====
  {
    id: 32,
    name: 'Азалия',
    category: 'flowering',
    price: 1600,
    image: '/src/assets/products/azalea.jpg',
    stock: 6,
    description: 'Обильно цветущий кустик. Цветы похожи на маленькие розы.'
  },
  {
    id: 33,
    name: 'Гардения',
    category: 'flowering',
    price: 1800,
    image: '/src/assets/products/gardenia.jpg',
    stock: 5,
    description: 'Белоснежные ароматные цветы. Требует внимания, но оно того стоит.'
  },
  {
    id: 34,
    name: 'Гибискус',
    category: 'flowering',
    price: 1300,
    image: '/src/assets/products/hibiscus.jpg',
    stock: 7,
    description: 'Крупные яркие цветы разных оттенков. Цветет все лето.'
  },
  {
    id: 35,
    name: 'Антуриум',
    category: 'flowering',
    price: 1500,
    image: '/src/assets/products/anthurium.jpg',
    stock: 8,
    description: 'Красные глянцевые цветы. Цветет круглый год.'
  },
  {
    id: 36,
    name: 'Глоксиния (Синнингия)',
    category: 'flowering',
    price: 950,
    image: '/src/assets/products/gloxinia.jpg',
    stock: 10,
    description: 'Бархатистые листья и крупные цветы-колокольчики.'
  },
  {
    id: 37,
    name: 'Ардизия',
    category: 'flowering',
    price: 1400,
    image: '/src/assets/products/ardisia.jpg',
    stock: 4,
    description: 'Декоративна и в цветении, и с красными ягодами после.'
  }
];