import { Recipe } from "../types/recipes";
import kruhBezMijesenja from "../assets/pastryRecipes/kruh-bez-mijesenja.jpg";

export const PastryRecipes: Recipe[] = [
    {
        id: 3000,
        link: "/recipes/3000",
        title: "Kruh bez mijesenja",
        minutes: 75,
        tags: ["brioche", "pecivo"],
        category: "pecivo",
        image: kruhBezMijesenja,
        risingTime: 480,
        portions: 4,
        ingredientGroups: [
        {
            items: [
                { name: "brašno", quantity: "750 g" },
                { name: "sol", quantity: "2-3 žličice" },
                { name: "suhi kvasac", quantity: "1 žličica" },
                { name: "topla voda", quantity: "450 ml" },
            ]
        }
            
    ],
        steps: [
            "U veliku zdjelu stavite brašno, sol i suhi kvasac. Dobro promiješajte.",
            "Dodajte toplu vodu i mijesite tijesto dok se svi suhi sastojci ne povežu i imate ljepljivo tijesto.",
            "Pokrijte zdjelu i ostavite tijesto da se diže 8-12 sati.",
            "Nakon što se tijesto diglo, prebacite ga na pobrašnjenu površinu i oblikujte ga tek toliko da ne bude ljepljivo.",
            "Podijelite tijesto na 2 jednaka dijela i oblikujte ih u štruce.",
            "Prebacite ih u lonac s poklopcem i stavite ih u hladnu pećnicu na 220°C 30 minuta (nemojte prethodno zagrijavati pećnicu). Nakon toga pecite bez poklopca još 30 minuta dok ne dobijete zlatno-smeđu koricu.",
            "Ostavite da se ohladi prije rezanja."
        ]
    },
];