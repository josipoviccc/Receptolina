import { Recipe } from "../types/recipes";
import tartWithBerries from "../assets/tartWithBerries.jpg";

export const SweetRecipes: Recipe[] = [{
    id: 2000,
    link: "/recipes/1",
    image: tartWithBerries,
    title: "Tart od vanilije i bobičastog voća",
    minutes: 60,
    tags: ["vanilija", "bobičasto voće"],
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
    category: "slatko",
    portions: 10,
    coolingTime: 30,
    steps: [
        "Pripremite koru: U velikoj zdjeli pomiješajte brašno, šećer u prahu i sol. Dodajte hladni maslac narezan na kockice i miješajte dok smjesa ne postane mrvičasta. Dodajte jaje i miješajte dok se tijesto ne poveže. Oblikujte tijesto u disk, zamotajte ga u plastičnu foliju i stavite u hladnjak na najmanje 30 minuta.",
        "Zagrijte pećnicu na 180°C. Izvadite tijesto iz hladnjaka i razvaljajte ga na pobrašnjenoj površini. Stavite tijesto u kalup za tart i pritisnite ga uz rubove. Izbodite dno vilicom i stavite u pećnicu na 15 minuta. Nakon toga, izvadite tart iz pećnice i ostavite da se ohladi.",
        "Pripremite nadjev: U srednje velikoj zdjeli pomiješajte mascarpone sir, šećer i vaniliju dok ne postane glatko. Dodajte jaja i miješajte dok se sve ne poveže.",
        "Izlijte nadjev u ohlađenu koru i vratite tart u pećnicu na 25-30 minuta, ili dok nadjev ne postane čvrst. Izvadite tart iz pećnice i ostavite da se potpuno ohladi prije posluživanja."
    ]
},    
]