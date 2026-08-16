import { Recipe } from "../types/recipes";
import chowMein from "../assets/savoryRecipes/chow-mein.jpg";
import meatballs from "../assets/savoryRecipes/sweedish-meatballs.jpg";
import lasagna from "../assets/savoryRecipes/lazanje.jpg";
import potatoSoup from "../assets/savoryRecipes/potato-soup.jpg";

export const SavoryRecipes: Recipe[] = [
    {
        id: 1000,
        link: "/recipes/1000",
        image: meatballs,
        title: "Mesne okruglice",
        minutes: 45,
        tags: ["mesne okruglice"],
        category: "slano",
        portions: 6,
        ingredientGroups: [
        {
            items: [
                { name: "bijeli kruh, natrgan na komadiće", quantity: "120 g" },
                { name: "mlijeko", quantity: "120 ml" },
                { name: "mljevena svinjetina", quantity: "900 g" },
                { name: "veliki luk, nariban", quantity: "1" },
                { name: "češnjak", quantity: "3 češnja" },
                { name: "jaja", quantity: "2" },
                { name: "parmezan, nariban", quantity: "25 g" },
                { name: "sol", quantity: "1 žličica" },
                { name: "papar", quantity: "pola žličice" },
                { name: "muškatni oraščić", quantity: "1/4 žličice" },
                { name: "maslinovo ulje, za prženje", quantity: "15 ml" },
            ],
        },
        {
            groupName: "Umak",
            items: [
                { name: "neslani maslac", quantity: "60 g" },
                { name: "glatko brašno", quantity: "30 g" },
                { name: "goveđi temeljac", quantity: "500 ml"},
                { name: "kiselo vrhnje", quantity: "120 g"},
                { name: "Worcestershire umak", quantity: "15 ml" },
            ],
        },
    ],
        steps: [
            "Stavi kruh u veliku zdjelu i prelij mlijekom. Ostavi da se namače 5 minuta.",
            "Pomoću dvije vilice razdrobi namočeni kruh na sitnije komadiće.",
            "Dodaj mljevenu govedinu, svinjetinu, naribani luk, češnjak, jaja, parmezan i začine u veliku zdjelu. Rukama izmiješaj sastojke, pazeći da ih ne premiješaš previše.",
            "Oblikuj okruglice veličine jedne vrhom napunjene žlice",
            "Zagrij maslinovo ulje u velikoj tavi. U turama, prži okruglice 2-3 minute sa svake strane dok ne porumene sa obje strane. Okruglice neće biti potpuno pečene i nastavit će se kuhati u umaku.",
            "Izvadi okruglice iz tave i stavi ih na tanjur.",
            "Za umak, otopi maslac u istoj tavi u kojoj su se pekle okruglice (nema potrebe brisati tavu — zapečeni komadići daju dodatan okus umaku).",
            "Umiješaj brašno i miksaj 1-2 minute dok mješavina ne poprimi malo tamniju boju.",
            "Polako umiješaj goveđi temeljac. Dodaj kiselo vrhnje i Worcestershire umak, pa miksaj dok umak ne postane gladak i bez grudica.",
            "Vrati okruglice natrag u tavu i pusti da krčka 6-8 minuta.",
            "Posluži odmah, uz svježe sjeckani peršin za ukras."
        ]
    },
    {
        id: 1001,
        link: "/recipes/1001",
        title: "Chow Mein piletina",
        image: chowMein,
        minutes: 50,
        tags: ["piletina", "Chow Mein"],
        category: "slano",
        portions: 4,
        ingredientGroups: [
        {
            items: [
                { name: "svježi chow mein rezanci", quantity: "453 g" },
                { name: "pileći batak bez kože i kosti", quantity: "453 g"},
                { name: "mung klice", quantity: "210 g"},
                { name: "kupus", quantity: "140 g"},
                { name: "celer", quantity: "100 g"},
                { name: "mrkva", quantity: "50 g" },
                { name: "mladi luk", quantity: "2"},
                { name: "biljno ulje", quantity: "10 ml" },
            ],
        },
        {
            groupName: "Umak za rezance",
            items: [
                { name: "obični sojin sos", quantity: "30 ml" },
                { name: "tamni sojin sos", quantity: "15 ml" },
                { name: "sos od kamenica", quantity: "45 ml"},
                { name: "Shaoxing vino", quantity: "30 ml"},
                { name: "sezamovo ulje", quantity: "10 ml" },
                { name: "bijeli šećer", quantity: "4 g" },
                { name: "bijeli papar", quantity: "0.5 g"},
                { name: "kukuruzni škrob", quantity: "4 g" },
                { name: "češnjak", quantity: "4 česnja" },
                { name: "pileća juha", quantity: "125 ml"},
            ],
        },
        {
            groupName: "Marinada za piletinu",
            items: [
                { name: "obični sojin sos", quantity: "10 ml" },
                { name: "kukuruzni škrob", quantity: "2 g" },
                { name: "voda", quantity: "10 ml"},
            ],
        },
    ],
        steps: [
        "Narezanu piletinu marinirati sa sastojcima za marinadu 10 minuta.",
        "U maloj posudi pomiješati sastojke za umak za rezance i ostaviti sa strane.",
        "U velikoj posudi ili velikom tiganju namočiti rezance u vrelu vodu 10-15 sekundi, ili dok se JEDVA ne razdvoje. Ocijediti rezance.",
        "Zagrijati 1 kašičicu (5 ml) biljnog ulja na srednje jakoj vatri. Pržiti piletinu dok ne bude 75% pečena.",
        "Dodati mrkvu, celer i kupus, pa pržiti dok ne omekšaju. Sve gurnuti na stranu tiganja.",
        "Dodati preostalo ulje u prazan prostor. Dodati rezance i umak. Pržiti uz miješanje dok rezanci ne budu prekriveni umakom, oko 30 sekundi. Dodati klice i mladi luk. Pržiti još 10 sekundi. Poslužiti odmah!",
        ]
    },
    {
        id: 1002,
        link: "/recipes/1002",
        title: "Lazanje",
        image: lasagna,
        minutes: 80,
        tags: ["lazanje"],
        category: "slano",
        portions: 6,
        ingredientGroups: [
        {
            groupName: "Bolognese umak",
            items: [
                { name: "mljeveno svinjsko meso", quantity: "500 g" },
                { name: "luk", quantity: "1" },
                { name: "češnjak", quantity: "2 česnja" },
                { name: "sos od rajčice", quantity: "400 g" },
                { name: "maslinovo ulje", quantity: "2 kašike" },
                { name: "sol", quantity: "po ukusu" },
                { name: "papar", quantity: "po ukusu" },
            ],
        },
        {
            groupName: "Bešamel umak",
            items: [
                { name: "maslac", quantity: "80 g" },
                { name: "brašno", quantity: "80 g" },
                { name: "mlijeko", quantity: "1 l" },
            ],
        },
    ],
        steps: [
            "Zagrijte pećnicu na 180 °C.",
            "U velikoj tavi zagrijte maslinovo ulje na srednje jakoj vatri. Dodajte nasjeckani luk i češnjak te pržite dok ne postanu mekani i mirisni.",
            "Dodajte mljeveno svinjsko meso u tavu i pržite dok ne postane zlatno smeđe i potpuno kuhano.",
            "Dodajte sos od rajčice i kuhajte dok umak ne postane gust.",
            "Posolite i popaprite po ukusu.",
            "Za bešamel umak, otopite maslac u drugoj tavi na srednje jakoj vatri. Dodajte brašno i miješajte dok smjesa ne postane glatka.",
            "Postupno dodajte mlijeko, neprestano miješajući dok umak ne postane gust i gladak.",
            "U velikom vatrostalnom posudu složite sloj bešamel umaka, zatim lazanja te sloj bolognese umaka te sloj bešamel umaka. Ponovite dok ne potrošite sve sastojke, završavajući sa slojem bešamel umaka.",
            "Pecite u pećnici 30-40 minuta dok vrh ne postane zlatno smeđi i mjehurić."
        ]
    },
    {
        id: 1003,
        link: "/recipes/1003",
        title: "Juha od krumpira",
        minutes: 80,
        image: potatoSoup,
        tags: ["krumpir", "juha"],
        category: "slano",
        portions: 5,
        ingredientGroups: [
        {
            items: [
                { name: "krumpir", quantity: "1.5 kg" },
                { name: "slanina", quantity: "6 kriški" },
                { name: "luk, nasjeckani", quantity: "1 glavica"},
                { name: "češnjak", quantity: "2 češnja"},
                { name: "pileći temeljac", quantity: "600 ml" },
                { name: "mlijeko", quantity: "150 ml" },
                { name: "vrhnje za kuhanje", quantity: "100 ml" },
                { name: "sir, gauda ili cheddar", quantity: "100 g" },
                { name: "sol", quantity: "po ukusu" },
                { name: "papar", quantity: "po ukusu" },
                { name: "maslinovo ulje", quantity: "2 žlice" },
            ],
        },
        {
            groupName: "Za serviranje",
            items: [
                { name: "sir", quantity: "po želji" },
                { name: "kiselo vrhnje", quantity: "po želji" },
                { name: "peršin", quantity: "po želji" },
            ],
        }
    ],
        steps: [
            "Stavi krumpire na veliki pleh za pečenje i izbockaj ih vilicom sa svih strana. Prelij ih s malo ulja i dobrom prstohvatom soli i papra. Peci u pećnici na 200°C, 1 sat, ili dok ne postanu duboko zlatni, hrskavi izvana i mekani do sredine (vrijeme pečenja ovisi o veličini krumpira, pa pripazi).",
            "Kad preostane još otprilike 20 minuta pečenja, stavi slaninu u veliki lonac na srednje-nisku vatru i prži dok ne postane hrskava. Izvadi slaninu i nareži je na kockice neposredno prije upotrebe (masnoću ostavi u loncu). Povećaj vatru na srednju i dodaj celer, luk i češnjak. Polako dinstaj dok ne omekšaju i počnu dobivati boju (po potrebi dodaj malo ulja).",
            "Kad su krumpiri pečeni, izvadi meso krumpira žlicom i stavi ga u zdjelu sa strane.",
            "Dodaj krumpir u lonac i ulij cijeli pileći temeljac te 1/2 šalice mlijeka (ostatak sačuvaj). Drvenom žlicom razmrvi krumpir, a zatim štapnim mikserom izblendaj sve dok ne postane glatko (radi u kratkim intervalima i nemoj pretjerati, jer tekstura može postati ljepljiva). Umiješaj vrhnje za kuhanje, zagrij do laganog vrenja i začini s 1/2 žličice soli i 1/4 žličice crnog papra (ili po ukusu). Ugasi vatru i umiješaj 1 šalicu naribanog cheddara, zatim po potrebi razrijedi juhu preostalim mlijekom do željene gustoće.",
            "Posluži u porcijama uz cheddar, slaninu, žlicu kisele vrhnje i posip vlascem."
        ]
    }
]