import { Recipe } from "../types/recipes";
import lemonade from "../assets/drinkRecipes/lemonade.jpg";
import mintLemonade from "../assets/drinkRecipes/mint-lemonade.jpg";

export const DrinkRecipes: Recipe[] = [
    {
        id: 5000,
        link: "/recipes/5000",
        title: "Limunada",
        minutes: 10,
        tags: ["limunada", "piće"],
        category: "pića",
        subcategory: "negazirana pića",
        image: lemonade,
        portions: 4,
        ingredientGroups: [
        {
            items: [
                { name: "limun", quantity: "4" },
                { name: "voda", quantity: "1 l" },
                { name: "šećer", quantity: "100 g" },
                { name: "led", quantity: "po želji" },
            ]
        }
            
    ],
        steps: [
            "Iscijedite limune u veliku zdjelu.",
            "Dodajte vodu i šećer te dobro promiješajte dok se šećer ne otopi.",
            "Dodajte led po želji.",
            "Poslužite ohlađeno."
        ]
    },
];