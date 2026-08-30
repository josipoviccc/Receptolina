import { Recipe } from "../types/recipes";
import everythingButTheBagelSeasoning from "../assets/seasoningMarinadeRecipes/everything-but-the-bagel-seasoning.jpg";
import tacoSeasoning from "../assets/seasoningMarinadeRecipes/taco-seasoning.jpg";


export const SeasoningMarinadesRecipes: Recipe[] = [
    {
        id: 6000,
        link: "/recipes/6000",
        title: "Everything but the Bagel Seasoning",
        minutes: 5,
        tags: ["bagel", "začini", "mješavina začina"],
        category: "zacini-marinade",
        subcategory: "mješavina začina",
        image: everythingButTheBagelSeasoning,
        portions: 4,
        ingredientGroups: [
        {
            items: [
                { name: "sjemenke maka", quantity: "3 žlice" },
                { name: "crni sezam", quantity: "2 žlice" },
                { name: "bijeli sezam", quantity: "4 žlice" },
                { name: "češnjak u granulama", quantity: "3 žlice" },
                { name: "luk u prahu", quantity: "3 žlice" },
                { name: "sol", quantity: "2 žlice" },
            ]
        }
            
    ],
        steps: [
            "U zdjeli pomiješajte sve sastojke dok se dobro ne sjedine.",
            "Pohranite u hermetički zatvorenu posudu na hladnom i suhom mjestu.",
            "Koristite kao začin za bagel, kruh ili druga jela po želji."
        ]
    },
    {
        id: 6001,
        link: "/recipes/6001",
        title: "Taco začin",
        minutes: 5,
        tags: ["taco", "začini", "mješavina začina"],
        category: "zacini-marinade",
        subcategory: "mješavina začina",
        image: tacoSeasoning,
        portions: 4,
        ingredientGroups: [
        {
            items: [
                { name: "čili u prahu", quantity: "2 žlice" },
                { name: "kim u prahu", quantity: "1 žlica" },
                { name: "česnjak u prahu", quantity: "1 žlica" },
                { name: "luk u prahu", quantity: "1 žlica" },
                { name: "origano", quantity: "1 žličica" },
                { name: "dimljnena paprika", quantity: "2 žličice" },
                { name: "sol", quantity: "pola žličice" },
                { name: "crni papar", quantity: "pola žličice" },
                { name: "chilli flakes", quantity: "prstohvat" },
                { name: "šećer", quantity: "prstohvat" }
            ]
        }
            
    ],
        steps: [
            "U zdjeli pomiješajte sve sastojke dok se dobro ne sjedine. (Možete i izblendati za finiju teksturu)",
            "Pohranite u hermetički zatvorenu posudu na hladnom i suhom mjestu."
        ]
    },
];