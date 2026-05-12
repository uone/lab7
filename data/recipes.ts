import type { Recipe } from "../types";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Борщ український",
    category: "супи",
    time: 90,
    servings: 6,
    ingredients: ["буряк", "капуста", "картопля", "морква", "цибуля", "томатна паста", "м'ясо", "сметана", "кріп", "часник"],
    description: "Традиційний червоний борщ з буряком, капустою та сметаною. Насичений смак справжньої української кухні. Подається з пампушками.",
    image: "https://images.unian.net/photos/2020_04/thumb_files/1200_0_1588081977-7108.jpg"
  },
  {
    id: 2,
    title: "Вареники з вишнею",
    category: "десерти",
    time: 60,
    servings: 4,
    ingredients: ["борошно", "вишня", "цукор", "сметана", "вода", "яйце"],
    description: "Соковиті вареники з літньою вишнею. Подаються зі сметаною та цукром. Справжній український десерт.",
    image: "https://images.unian.net/photos/2020_07/thumb_files/1200_0_1595919237-6638.jpg"
  },
  {
    id: 3,
    title: "Котлета по-київськи",
    category: "основні страви",
    time: 45,
    servings: 2,
    ingredients: ["куряче філе", "вершкове масло", "панірувальні сухарі", "яйце", "сіль", "перець"],
    description: "Ніжна котлета з маслом всередині. Хрустка скоринка та соковите м'ясо. Класика української кухні.",
    image: "https://zira.uz/wp-content/uploads/2018/09/kotleta-po-kievski-2.jpg"
  },
  {
    id: 4,
    title: "Цезар з куркою",
    category: "салати",
    time: 20,
    servings: 2,
    ingredients: ["курка", "салат романо", "пармезан", "соус цезар", "грінки", "яйце"],
    description: "Класичний салат Цезар з хрусткими грінками та сиром. Легкий та ситний.",
    image: "https://images.unian.net/photos/2019_12/thumb_files/1200_0_1577182092-7643.jpg"
  },
  {
    id: 5,
    title: "Грецький салат",
    category: "салати",
    time: 15,
    servings: 2,
    ingredients: ["огірок", "помідор", "сир фета", "оливки", "цибуля", "оливкова олія"],
    description: "Свіжий салат з фетою та оливками. Легкий, корисний, ідеальний для літа.",
    image: "https://i.obozrevatel.com/food/recipemain/2018/11/15/screenshot81.png?size=1200x630"
  },
  {
    id: 6,
    title: "Київський торт",
    category: "десерти",
    time: 120,
    servings: 8,
    ingredients: ["білки", "волоські горіхи", "масло", "згущене молоко", "борошно", "цукор"],
    description: "Повітряний торт за класичним рецептом. Два коржі з горіховим безе та масляним кремом.",
    image: "https://images.prom.ua/5338683984_w640_h320_tort-bkk-kiyivskij.jpg"
  },
  {
    id: 7,
    title: "Суп-пюре з гарбуза",
    category: "супи",
    time: 35,
    servings: 4,
    ingredients: ["гарбуз", "вершки", "морква", "цибуля", "імбир", "часник", "бульйон"],
    description: "Ніжний крем-суп з гарбуза з імбирем та вершками. Зігріває та дарує затишок.",
    image: "https://otvalentiny.od.ua/upload/image/html_set/6707876422492.jpg"
  },
  {
    id: 8,
    title: "Паста Карбонара",
    category: "основні страви",
    time: 25,
    servings: 2,
    ingredients: ["спагеті", "бекон", "яйця", "пармезан", "вершки", "чорний перець"],
    description: "Італійська паста з кремовим соусом та хрустким беконом. Швидко, смачно, ситно.",
    image: "https://static.tildacdn.com/tild6164-6239-4561-a130-376437623033/_4.png"
  }
];
