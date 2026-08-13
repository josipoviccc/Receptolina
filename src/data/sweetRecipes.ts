import { Recipe } from "../types/recipes";
import tartWithBerries from "../assets/tartWithBerries.jpg";

export const SweetRecipes: Recipe[] = [{
    id: 2000,
    link: "/recipes/1",
    image: tartWithBerries,
    title: "Tart od vanilije i bobičastog voća",
    minutes: 60,
    tags: ["vanilija", "bobičasto voće"],
    ingredientGroups: [
    {
        items: [
        { name: "jaje", quantity: "1" },
        { name: "šećer", quantity: "60 g" },
        { name: "omekšali maslac", quantity: "115 g" },
        { name: "ekstrakt vanilije", quantity: "1 čajna žličica" },
        { name: "sol", quantity: "prstohvat" },
        { name: "brašno", quantity: "190 g" },
        ],
    },
    {
        groupName: "Za košarice: ",
        items: [
        { name: "žumanjak", quantity: "2" },
        { name: "šećer", quantity: "35 g" },
        { name: "kukuruzni škrob", quantity: "20 g" },
        { name: "vruće mlijeko", quantity: "300 ml" },
        { name: "ekstrakt vanilije", quantity: "1 čajna žličica" },
        { name: "bobičasto voće za ukras", quantity: "" }

        ]
    }
    ],
    category: "slatko",
    portions: 10,
    coolingTime: 30,
    steps: [
        "Za kremu: Zagrijte mlijeko dok ne postane vruće, ali ne smije zakipjeti. U srednje velikom loncu pomiješajte žumanjke, šećer i kukuruzni škrob. Miješajte pjenjačom dok smjesa ne postane glatka i pjenasta. Postupno dodajte vruće mlijeko neprestano miješajući kako se ne bi stvorile grudice. Stavite lonac na srednju vatru i stalno miješajte dok smjesa lagano ne zakipi. Krema će se zgusnuti pa pazite da se ne zalijepi za dno. Smanjite vatru i kuhajte još nekoliko minuta do željene gustoće. Prebacite kremu u drugu posudu, ostavite da se ohladi te stavite u hladnjak najmanje 30 minuta.",
        " Za košarice: U velikoj zdjeli izmiksajte jaje i šećer dok smjesa ne postane svijetla i pjenasta. Dodajte omekšani maslac narezan na kockice i kratko miksajte. Dodajte vaniliju, sol i brašno te miješajte dok ne dobijete kompaktno tijesto. Zamotajte ga u prozirnu foliju i stavite u hladnjak na najmanje 30 minuta.",
        "Zagrijte pećnicu na 175 °C. Kalup za košarice (ili kalup za muffine) premažite maslacem i pospite brašnom. Na lagano pobrašnjenoj površini razvaljajte tijesto. Okruglim kalupom ili čašom promjera oko 7,5 cm izrežite krugove i utisnite ih u kalupe. Lagano pritisnite sredinu prstima i izbockajte dno vilicom. Pecite prazne košarice 13-14 minuta na srednjoj razini pećnice ili dok rubovi ne poprime zlatnu boju. Ostavite da se potpuno ohlade.",
        "Prije posluživanja napunite košarice kremom i ukrasite svježim bobičastim voćem."
    ]
},    
]