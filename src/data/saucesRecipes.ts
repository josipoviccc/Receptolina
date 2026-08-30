import { Recipe } from "../types/recipes";
import raisingCanes from "../assets/sauceRecipes/raising-canes-sauce.jpg";
import kentuckyGold from "../assets/sauceRecipes/kentucky-gold-sauce.png";

export const SaucesRecipes: Recipe[] = [
    {
        id: 4000,
        link: "/recipes/4000",
        title: "Raising Canes umak",
        minutes: 10,
        tags: ["umaci", "raising canes"],
        category: "umaci",
        subcategory: "dipovi",
        image: raisingCanes,
        portions: 3,
        ingredientGroups: [
            {
                items: [
                    { name: "Majoneza", quantity: "120 g" },
                    { name: "Kečap", quantity: "75 g" },
                    { name: "Worchestershire sos", quantity: "8 g" },
                    { name: "Češnjak u prahu", quantity: "pola žličice" },
                    { name: "sol", quantity: "pola žličice" },
                    { name: "papar", quantity: "pola žličice" },
                    
                ]
            }
        ],
        steps: [
            "Pomiješajte sve sastojke u zdjeli dok se sastojci ne sjedine. ",
            "Možete poslužiti odmah ili ostaviti u hladnjaku 2 sata da se okusi prožmu."
        ]
    },
    {
        id: 4001,
        link: "/recipes/4001",
        title: "Kentucky Gold umak",
        minutes: 10,
        tags: ["umaci", "kfc"],
        category: "umaci",
        subcategory: "dipovi",
        image: kentuckyGold,
        portions: 3,
        ingredientGroups: [
            {
                items: [
                    { name: "Majoneza", quantity: "2 žlice" },
                    { name: "Senf", quantity: "2 žličice" },
                    { name: "Soja sos", quantity: "1 žličica" },
                    { name: "Češnjak u prahu", quantity: "pola žličice" },
                    { name: "Luk u prahu", quantity: "pola žličice" },
                    { name: "Dimljena paprika", quantity: "pola žličice" },
                    { name: "Muškatni oraščić", quantity: "prstohvat" },
                    { name: "Med", quantity: "2 žličica" },
                    
                ]
            }
        ],
        steps: [
            "Pomiješajte sve sastojke u zdjeli dok se sastojci ne sjedine. ",
            "Možete poslužiti odmah ili ostaviti u hladnjaku 2 sata da se okusi prožmu."
        ]
    },
]