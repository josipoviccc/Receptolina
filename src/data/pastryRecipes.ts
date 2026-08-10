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
        "200 g brašna",
        "100 g šećera u prahu",
        "1 prstohvat soli",
        "100 g hladnog maslaca",
        "1 jaje",
        "250 g mascarpone sira",
        "2 žlice šećera",
        "1 žličica vanilije",
        "2 jaja",
        "bobičasto voće za ukras"
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