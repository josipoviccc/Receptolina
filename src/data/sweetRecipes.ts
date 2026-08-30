import { Recipe } from "../types/recipes";
import tartWithBerries from "../assets/sweetRecipes/tartWithBerries.jpg";
import tiramisuBalls from "../assets/sweetRecipes/tiramisu-balls.jpg";
import paradizot from "../assets/sweetRecipes/paradižot.jpg";
import tiramisu from "../assets/sweetRecipes/tiramisu.jpg";
import palacinkeSLimunomIMakom from "../assets/sweetRecipes/americke-palacinke-s-limunom-i-makom.jpg";

export const SweetRecipes: Recipe[] = [
    {
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
    subcategory: "tart",
    portions: 10,
    coolingTime: 30,
    steps: [
        "Za kremu: Zagrijte mlijeko dok ne postane vruće, ali ne smije zakipjeti. U srednje velikom loncu pomiješajte žumanjke, šećer i kukuruzni škrob. Miješajte pjenjačom dok smjesa ne postane glatka i pjenasta. Postupno dodajte vruće mlijeko neprestano miješajući kako se ne bi stvorile grudice. Stavite lonac na srednju vatru i stalno miješajte dok smjesa lagano ne zakipi. Krema će se zgusnuti pa pazite da se ne zalijepi za dno. Smanjite vatru i kuhajte još nekoliko minuta do željene gustoće. Prebacite kremu u drugu posudu, ostavite da se ohladi te stavite u hladnjak najmanje 30 minuta.",
        " Za košarice: U velikoj zdjeli izmiksajte jaje i šećer dok smjesa ne postane svijetla i pjenasta. Dodajte omekšani maslac narezan na kockice i kratko miksajte. Dodajte vaniliju, sol i brašno te miješajte dok ne dobijete kompaktno tijesto. Zamotajte ga u prozirnu foliju i stavite u hladnjak na najmanje 30 minuta.",
        "Zagrijte pećnicu na 175 °C. Kalup za košarice (ili kalup za muffine) premažite maslacem i pospite brašnom. Na lagano pobrašnjenoj površini razvaljajte tijesto. Okruglim kalupom ili čašom promjera oko 7,5 cm izrežite krugove i utisnite ih u kalupe. Lagano pritisnite sredinu prstima i izbockajte dno vilicom. Pecite prazne košarice 13-14 minuta na srednjoj razini pećnice ili dok rubovi ne poprime zlatnu boju. Ostavite da se potpuno ohlade.",
        "Prije posluživanja napunite košarice kremom i ukrasite svježim bobičastim voćem."
    ]
},
{
    id: 2001,
    link: "/recipes/2",
    image: tiramisuBalls,
    title: "Tiramisu kuglice",
    minutes: 20,
    tags: ["kava", "tiramisu", "kuglice"],
    ingredientGroups: [
    {
        items: [
        { name: "mascarpone sir", quantity: "250 g" },
        { name: "piškote", quantity: "200 g" },
        { name: "šećer u prahu", quantity: "50 g" },
        { name: "espresso", quantity: "2 shota" },
        { name: "ekstrakt vanilije", quantity: "1 žličica" },
        { name: "brašno", quantity: "190 g" },
        ],
    },
    ],
    category: "slatko",
    subcategory: "kolači",
    portions: 20,
    coolingTime: 120,
    steps: [
        "Prvo stavite piškote u blender, sameljite i dodajte ostale sastojke osim kakao u prahu.",
        "Ostavite smjesu u frižideru 1-2 sata da stoji.",
        "Kada izvadite smjesu, napravite kuglice koje rolate u kakao.",
        "Obavezno držite u frižideru prije i poslije posluživanja."
    ]
},
{
    id: 2002,
    link: "/recipes/2",
    image: paradizot,
    title: "Paradižot",
    minutes: 25,
    tags: ["keksi", "vanilija"],
    ingredientGroups: [
    {
        items: [
        { name: "mlijeko", quantity: "1 l" },
        { name: "jaja", quantity: "10" },
        { name: "petit keksi", quantity: "po želji" },
        { name: "šećer", quantity: "10 žlica" },
        { name: "puding od vanilije, opcionalno", quantity: "pola paketa" },
        { name: "ekstrakt vanilije, opcionalno", quantity: "1 žlica" },
        { name: "korica limuna, opcionalno", quantity: "prstohvat" }
        ],
    },
    ],
    category: "slatko",
    subcategory: "kolači",
    portions: 20,
    coolingTime: 10,
    steps: [
        "Odvojit bjelanjke od žumanjaka a potom bjelanjke mikserom utući u čvrsti snijeg.",
        "Kekse poslagati u posudu i preliti s malo mlijeka.",
        "Ostatak litre mlijeka staviti u lonac i zagrijati ga. Na tom mlijeku napraviti žličnjake od bjelanjaka i staviti ih kuhati u mlijeko. Kada se žličnjaci skuhaju, izvaditi ih i staviti ih u posudu s keksima.",
        "U žumanjke dodati šećer i opcionalno naribati koricu limuna te izmiksati žumanjke dok ne postanu gusti i pjenasti.",
        "U preostalo toplo mlijeko dodati smjesu od žumanjaka i opcionalno dodati puding od vanilije i ekstrakt vanilije. Miješati dok se smjesa ne zgusne.",
        "Kada se smjesa zgusne, preliti je preko keksa i žličnjaka. Ostaviti da se ohladi i poslužiti."
    ]
},  
{
    id: 2003,
    link: "/recipes/2003",
    image: tiramisu,
    title: "Tiramisu",
    minutes: 40,
    tags: ["kava", "tiramisu"],
    ingredientGroups: [
    {
        items: [
        { name: "mascarpone sir", quantity: "500 g" },
        { name: "žumanjci", quantity: "4" },
        { name: "piškote", quantity: "pakiranje od 48 piškota" },
        { name: "šlag", quantity: "300 ml" },
        { name: "šećer u prahu", quantity: "100 g" },
        { name: "espresso", quantity: "2 shota" },
        { name: "ekstrakt ruma", quantity: "2 žlice" },
        { name: "ekstrakt vanilije", quantity: "1 žličica" },
        { name: "kakao u prahu", quantity: "za posipanje" }
        ],
    },
    ],
    category: "slatko",
    subcategory: "kolači",
    portions: 6,
    coolingTime: 360,
    steps: [
        "Odvojiti jaja na bjelanjke i žumanjke (bjelanjci vam ne trebaju). ",
        "Žumanjke miješati pjenjačom sa šećerom na pari dok se termički ne obrade, cca. 4 minute.",
        "Kada se smjesa malo prohladi, dodati mascarpone i sjediniti, potom smiksati vrhnje za šlag i sjediniti s tom kremom.",
        "Napraviti espresso i dodati u njega ekstrakt ruma, a opcionalno možete dodati i malo šećera.",
        "Svaku piškotu umočiti u espresso i slagati u posudu, potom premazati s kremom pa ponoviti postupak i na kraju posuti kakaom.",
        "Ohladiti minimalno 6 sati, najbolje preko noći."
    ]
},      
{
    id: 2004,
    link: "/recipes/2004",
    image: palacinkeSLimunomIMakom,
    title: "Američke palačinke s limunom i makom",
    minutes: 30,
    tags: ["palačinke", "limun", "mak"],
    ingredientGroups: [
    {
        items: [
        { name: "grčki jogurt", quantity: "100 g" },
        { name: "jaja", quantity: "1" },
        { name: "ekstrakt vanilije", quantity: "1 žličica" },
        { name: "med", quantity: "1 žličica" },
        { name: "brašno", quantity: "60 g" },
        { name: "mlijeko", quantity: "30 ml" },
        { name: "prašak za pecivo", quantity: "pola žličice" },
        { name: "soda bikarbona", quantity: "1/4 žličice" },
        { name: "limunov sok", quantity: "1 žlica" },
        { name: "mak", quantity: "1 žlica" },
        {name: "limunova korica", quantity: "1 žličica" },
        { name: "sol", quantity: "prstohvat" },
        { name: "maslac", quantity: "za pečenje" }
        ],
    },
    ],
    category: "slatko",
    subcategory: "palačinke",
    portions: 6,
    steps: [
        "U zdjeli pomiješati jogurt, jaje, vaniliju, med, mlijeko i limunov sok te izmiješati žicom dok se ne sjedini. ",
        "Prosijati brašno, prašak za pecivo i sodu bikarbonu, zatim dodati sjemenke maka i naribanu koricu limuna. Dobro promiješati i dodati u mokre sastojke.",
        "Zagrijati tavu na srednjoj vatri i ravnomjerno premazati s malo maslaca. Stavljati po 2 žlice smjese, oblikujući ih po potrebi u okrugli oblik, ostavljajući dovoljno prostora da palačinke narastu.",
        "Kad se počnu pojavljivati mjehurići, ili nakon 1-2 minute pečenja, okrenuti ih lopaticom i peći još minutu, dok ne narastu. Ponovi postupak s ostatkom smjese.",
        "Možete poslužiti uz zaslađeni grčki jogurt i posipati šećerom u prahu.",
    ]
},       
]