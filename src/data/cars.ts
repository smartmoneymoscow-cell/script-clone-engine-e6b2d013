export type Car = {
  title: string;
  year: string;
  trim?: string;
  volume: string;
  mileage: string;
  kpp: string;
  fuel?: string;
  price: string;
  note?: string;
  image: string;
};

export const japanCars: Car[] = [
  {
    title: "Audi A3",
    year: "2021 г.",
    volume: "1000 сс",
    mileage: "23 000 км",
    kpp: "FAT",
    fuel: "Бензин",
    price: "1 456 408 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "BMW X1",
    year: "2021 г.",
    volume: "2000 сс",
    mileage: "51 000 км",
    kpp: "FAT",
    fuel: "Бензин",
    price: "2 483 732 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Nissan Roox",
    year: "2024 г.",
    volume: "660 сс",
    mileage: "2 000 км",
    kpp: "DAT",
    fuel: "Бензин",
    price: "1 115 159 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Mazda Demio",
    year: "2023 г.",
    volume: "1500 сс",
    mileage: "64 000 км",
    kpp: "FAT",
    fuel: "Бензин",
    price: "1 255 277 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=70",
  },
];

export const chinaCars: Car[] = [
  {
    title: "BMW 3 Series",
    year: "2021 г.",
    volume: "2000 сс",
    mileage: "46 400 км",
    kpp: "AT",
    fuel: "Бензин",
    price: "4 996 537 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Volkswagen Magotan",
    year: "2021 г.",
    volume: "2000 сс",
    mileage: "65 000 км",
    kpp: "AT",
    fuel: "Бензин",
    price: "4 155 024 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Volkswagen Sagitar",
    year: "2021 г.",
    volume: "1400 сс",
    mileage: "37 000 км",
    kpp: "AT",
    fuel: "Бензин",
    price: "1 646 857 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Volkswagen Passat",
    year: "2021 г.",
    volume: "2000 сс",
    mileage: "100 км",
    kpp: "AT",
    fuel: "Бензин",
    price: "4 160 205 ₽",
    note: "с доставкой во Владивосток",
    image:
      "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?auto=format&fit=crop&w=800&q=70",
  },
];

export const stockCars: Car[] = [
  {
    title: "Volkswagen Tayron",
    year: "2023 г.",
    trim: "2023 L T-Roc DELUXE PLUS ADVANCED",
    volume: "1400 сс",
    mileage: "34 421 км",
    kpp: "Робот",
    fuel: "Бензин",
    price: "2 750 000 ₽",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Nissan Qashqai",
    year: "2023 г.",
    trim: "2023 2.0 CVT XV COMFORT EDITION",
    volume: "2000 сс",
    mileage: "34 870 км",
    kpp: "CVT",
    fuel: "Бензин",
    price: "1 790 000 ₽",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Jetta VS5",
    year: "2023 г.",
    trim: "2023 1.4 280TSI HIGH GLOSS JOY EDITION",
    volume: "1400 сс",
    mileage: "12 100 км",
    kpp: "Автомат",
    fuel: "Бензин",
    price: "1 620 000 ₽",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Honda Vezel",
    year: "2023 г.",
    trim: "2023 1.5 CVT ELITE EDITION",
    volume: "1500 сс",
    mileage: "20 978 км",
    kpp: "CVT",
    fuel: "Бензин",
    price: "1 890 000 ₽",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=70",
  },
];

export const reviews = [
  {
    name: "Руслан Мухин",
    source: "2ГИС",
    text: "Обратился в компанию для подбора автомобиля из Японии. Всё прошло чётко: подобрали лот, показали отчёт, привезли в срок. Отдельное спасибо менеджеру за подробные консультации на каждом этапе.",
  },
  {
    name: "Екатерина",
    source: "Яндекс",
    text: "Всё прошло гладко, хотя опыта покупки авто из-за границы у меня не было. Ребята помогли с выбором, сделали расчёт до рубля и держали в курсе на всех этапах доставки.",
  },
  {
    name: "Геннадий",
    source: "Яндекс",
    text: "Выражаю благодарность команде за помощь в приобретении Subaru Forester. Сроки соблюдены, комиссия фиксированная, никаких скрытых доплат не было.",
  },
  {
    name: "Дмитрий",
    source: "2ГИС",
    text: "Заказывал кроссовер из Кореи. Понравился формат работы по договору: заранее известны этапы, стоимость и сроки. Машину получил даже раньше срока.",
  },
  {
    name: "Артём",
    source: "2ГИС",
    text: "Полный цикл покупки занял около месяца. Фото- и видеоотчёт перед отправкой очень помог — состояние авто полностью совпало с описанием.",
  },
  {
    name: "Владимир",
    source: "Яндекс",
    text: "Покупал авто с аукциона впервые. Менеджер объяснил все аукционные листы, помог выбрать оптимальный вариант по бюджету. Рекомендую.",
  },
];
