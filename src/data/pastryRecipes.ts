import { Recipe } from "../types/recipes";

export const PastryRecipes: Recipe[] = [
    {
        id: 3000,
        link: "/recipes/3",
        title: "Brioche pecivo",
        minutes: 75,
        tags: ["brioche", "pecivo"],
        category: "pecivo",
        risingTime: 60,
        portions: 4,
        ingredients: [
            { name: "brašno", quantity: "200 g" },
            { name: "šećer u prahu", quantity: "100 g" },
            { name: "sol", quantity: "1 prstohvat" },
            { name: "hladni maslac", quantity: "100 g" },
            { name: "jaje", quantity: "1" },
            { name: "mascarpone sir", quantity: "250 g" },
            { name: "šećer", quantity: "2 žlice" },
            { name: "vanilija", quantity: "1 žličica" },
            { name: "jaja", quantity: "2" },
            { name: "bobičasto voće za ukras", quantity: "" }
    ],
        steps: [
            "Skuhajte tjesteninu prema uputama na pakiranju. Ocijedite i ostavite sa strane.",
            "U velikoj tavi zagrijte maslac na srednje jakoj vatri. Dodajte nasjeckani luk i češnjak te pržite dok ne postanu mekani i mirisni.",
            "Dodajte narezanu piletinu u tavu i pržite dok ne postane zlatno smeđa i potpuno kuhana.",
            "Umiješajte vrhnje za kuhanje i ribani parmezan. Kuhajte dok umak ne postane gust i kremast.",
            "Posolite i popaprite po ukusu. Poslužite preko kuhane tjestenine."
        ]
    },

]