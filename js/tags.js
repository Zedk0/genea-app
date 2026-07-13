var tags = {
    /* Systém */
    "RIN": {
        name: "Identifikační číslo záznamu",
        description: "Číslo přidělené záznamu původním automatizovaným systémem, které může být použito přijímajícím systémem k hlášení výsledků týkajících se tohoto záznamu.",
        visible: false
    },
    "_UID": {
        name: "* _UID",
        visible: false
    },
    "_UPD": {
        name: "* _UPD",
        visible: false
    },
    "_PRIM": {
        name: "* _PRIM",
        visible: false
    },
    "_PRIM_CUTOUT": {
        name: "* _PRIM_CUTOUT",
        visible: false
    },
    "_POSITION": {
        name: "* _POSITION",
        visible: false
    },
    "_PHOTO_RIN": {
        name: "* _PHOTO_RIN",
        visible: false
    },
    "_FILESIZE": {
        name: "* _FILESIZE",
        visible: false
    },
    "_CUTOUT": {
        name: "* _CUTOUT",
        visible: false
    },
    /* Vztahy a děti */
    "FAM": {
        name: "Rodina",
        description: "Identifikuje právní, faktický nebo jiný obvyklý vztah muže a ženy a jejich dětí (pokud existují), nebo rodinu vzniklou narozením dítěte jeho biologickému otci a matce.",
        visible: false
    },
    "FAMS": {
        name: "Rodina (manžel/partner)",
        description: "Identifikuje rodinu, ve které osoba vystupuje jako manžel/manželka nebo partner/ka.",
        visible: false
    },
    "FAMC": {
        name: "Rodina (dítě)",
        description: "Identifikuje rodinu, ve které osoba vystupuje jako dítě.",
        visible: false
    },
    /* Zobrazováno uživateli */
    "NAME": {
        name: "Jméno",
        description: "Slovo nebo kombinace slov sloužící k identifikaci osoby, titulu nebo jiné položky. Pro osoby známé pod více jmény by mělo být použito více řádků NAME.",
        visible: true
    },
    "GIVN": {
        name: "Křestní jméno",
        description: "Křestní nebo rodné jméno používané pro oficiální identifikaci osoby.",
        visible: true
    },
    "SURN": {
        name: "Příjmení",
        description: "Rodové jméno předávané nebo používané členy rodiny.",
        visible: true
    },
    "SEX": {
        name: "Pohlaví",
        description: "Indikuje pohlaví osoby.",
        visible: true
    },
    "BIRT": {
        name: "Narození",
        description: "Událost vstupu do života.",
        visible: true
    },
    "DATE": {
        name: "Datum",
        description: "Čas události ve formátu kalendáře.",
        visible: true
    },
    "PLAC": {
        name: "Místo",
        description: "Geografický název pro identifikaci místa nebo lokality události.",
        visible: true
    },
    "DEAT": {
        name: "Úmrtí",
        description: "Událost, při které končí pozemský život.",
        visible: true
    },
    "NOTE": {
        name: "Poznámka",
        description: "Doplňující informace poskytnuté autorem pro pochopení vložených dat.",
        visible: true,
        field: "textarea"
    },
    "OBJE": {
        name: "Objekt",
        description: "Soubor atributů použitých k popisu něčeho. Obvykle odkazuje na data potřebná k reprezentaci multimediálního objektu, jako je zvukový záznam, fotografie osoby nebo obrázek dokumentu.",
        visible: true,
        collapseChildren: true
    },
    "FORM": {
        name: "Formát",
        description: "Přiřazený název daný konzistentnímu formátu, ve kterém mohou být informace předávány.",
        visible: true
    },
    "TITL": {
        name: "Titul",
        description: "Popis konkrétního díla (např. název knihy v kontextu zdroje) nebo formální označení spojené s královskou hodností či společenským postavením (např. Velkovévoda).",
        visible: true
    },
    "FILE": {
        name: "Soubor",
        description: "Místo uložení informací, které je uspořádáno pro účely archivace a vyhledávání.",
        visible: true
    },
    "SOUR": {
        name: "Zdroj",
        description: "Počáteční nebo původní materiál, ze kterého byly informace získány.",
        visible: false
    },
    "PAGE": {
        name: "Strana",
        description: "Číslo nebo popis pro identifikaci místa, kde lze informace v odkazovaném díle nalézt.",
        visible: true
    },
    "EVEN": {
        name: "Událost",
        description: "Pozoruhodná událost vztahující se k osobě, skupině nebo organizaci.",
        visible: true
    },
    "ROLE": {
        name: "Role",
        description: "Název role, kterou osoba hraje v souvislosti s událostí.",
        visible: true
    },
    "DATA": {
        name: "Data",
        description: "Týká se uložených automatizovaných informací.",
        visible: true
    },
    "TEXT": {
        name: "Text",
        description: "Přesné znění nalezené v původním zdrojovém dokumentu.",
        visible: true,
        field: "textarea"
    },
    // Ostatní
    "ABBR": {
        name: "Zkratka",
        description: "Zkrácený název titulu, popisu nebo jména.",
        visible: false
    },
    "ADDR": {
        name: "Adresa",
        description: "Současné místo (obvykle pro poštovní účely) osoby, odesílatele informací, archivu, firmy, školy apod.",
        visible: true,
        field: "textarea"
    },
    "ADR1": {
        name: "Adresa 1",
        description: "První řádek adresy.",
        visible: false
    },
    "ADR2": {
        name: "Adresa 2",
        description: "Druhý řádek adresy.",
        visible: false
    },
    "ADOP": {
        name: "Adopce",
        description: "Týká se vytvoření vztahu dítě-rodič, který neexistuje biologicky.",
        visible: false
    },
    "AFN": {
        name: "Ancestral File Number",
        description: "Jedinečné trvalé číslo záznamu osoby uložené v Ancestral File.",
        visible: false
    },
    "AGE": {
        name: "Věk",
        description: "Věk osoby v době, kdy došlo k události, nebo věk uvedený v dokumentu.",
        visible: false
    },
    "AGNC": {
        name: "Agentura",
        description: "Instituce nebo osoba s pravomocí a/nebo odpovědností za správu či řízení.",
        visible: false
    },
    "ALIA": {
        name: "Alias",
        description: "Indikátor pro propojení různých popisů záznamů jedné osoby, která může být totožná.",
        visible: false
    },
    "ANCE": {
        name: "Předci",
        description: "Týká se předků osoby.",
        visible: false
    },
    "ANCI": {
        name: "Zájem o předky",
        description: "Indikuje zájem o další výzkum předků této osoby.",
        visible: false
    },
    "ANUL": {
        name: "Anulování",
        description: "Prohlášení manželství za neplatné od samého počátku (jako by nikdy neexistovalo).",
        visible: false
    },
    "ASSO": {
        name: "Společníci",
        description: "Indikátor pro propojení přátel, sousedů, příbuzných nebo spolupracovníků osoby.",
        visible: false
    },
    "AUTH": {
        name: "Autor",
        description: "Jméno osoby, která vytvořila nebo sestavila informace.",
        visible: false
    },
    "BAPL": {
        name: "Křest LDS",
        description: "Událost křtu provedená v osmi letech nebo později autoritou kněžství církve LDS.",
        visible: false
    },
    "BAPM": {
        name: "Křest",
        description: "Událost křtu (mimo LDS), prováděná v dětství nebo později.",
        visible: true
    },
    "BARM": {
        name: "Bar micva",
        description: "Slavnostní událost konaná, když židovský chlapec dosáhne věku 13 let.",
        visible: false
    },
    "BASM": {
        name: "Bat micva",
        description: "Slavnostní událost konaná, když židovská dívka dosáhne věku 13 let.",
        visible: false
    },
    "BLES": {
        name: "Požehnání",
        description: "Náboženská událost udělení božské péče. Někdy dáváno v souvislosti se slavnostním pojmenováním.",
        visible: false
    },
    "BLOB": {
        name: "Binární objekt",
        description: "Skupina dat použitá jako vstup pro multimediální systém, který zpracovává binární data k reprezentaci obrázků, zvuku a videa.",
        visible: false
    },
    "BURI": {
        name: "Pohřeb",
        description: "Událost řádného uložení ostatků zesnulé osoby.",
        visible: true
    },
    "CALN": {
        name: "Archivní značka",
        description: "Číslo používané archivem k identifikaci konkrétních položek v jeho sbírkách.",
        visible: false
    },
    "CAST": {
        name: "Kasta",
        description: "Název společenské hodnosti nebo postavení osoby, založené na náboženských rozdílech, bohatství, zděděné hodnosti, profesi atd.",
        visible: true
    },
    "CAUS": {
        name: "Příčina",
        description: "Popis příčiny související události nebo skutečnosti, jako je příčina úmrtí.",
        visible: true
    },
    "CENS": {
        name: "Sčítání lidu",
        description: "Událost pravidelného sčítání obyvatel pro určenou lokalitu.",
        visible: true
    },
    "CHAN": {
        name: "Změna",
        description: "Indikuje změnu, opravu nebo úpravu.",
        visible: false
    },
    "CHAR": {
        name: "Znaková sada",
        description: "Indikátor znakové sady použité při psaní těchto automatizovaných informací.",
        visible: false
    },
    "CHIL": {
        name: "Dítě",
        description: "Přirozené, adoptované nebo zpečetěné (LDS) dítě otce a matky.",
        visible: false
    },
    "CHR": {
        name: "Křtiny",
        description: "Náboženská událost (mimo LDS) křtění a/nebo pojmenování dítěte.",
        visible: true
    },
    "CHRA": {
        name: "Křtiny dospělého",
        description: "Náboženská událost (mimo LDS) křtění a/nebo pojmenování dospělé osoby.",
        visible: false
    },
    "CITY": {
        name: "Město",
        description: "Nižší úroveň jurisdikce. Obvykle začleněná obecní jednotka.",
        visible: false
    },
    "CONC": {
        name: "Zřetězení",
        description: "Indikátor, že další data patří k nadřazené hodnotě (bez mezery).",
        visible: false
    },
    "CONF": {
        name: "Konfirmace",
        description: "Náboženská událost (mimo LDS) udělení daru Ducha svatého a mezi protestanty plného členství v církvi.",
        visible: false
    },
    "CONL": {
        name: "Konfirmace LDS",
        description: "Náboženská událost, při které osoba přijímá členství v církvi LDS.",
        visible: false
    },
    "CONT": {
        name: "Pokračování",
        description: "Indikátor, že další data patří k nadřazené hodnotě (s odřádkováním).",
        visible: false
    },
    "COPR": {
        name: "Autorské právo",
        description: "Prohlášení doprovázející data na ochranu před neoprávněným kopírováním a distribucí.",
        visible: false
    },
    "CORP": {
        name: "Instituce",
        description: "Název instituce, agentury, korporace nebo společnosti.",
        visible: false
    },
    "CREM": {
        name: "Kremace",
        description: "Likvidace ostatků těla osoby žárem.",
        visible: true
    },
    "CTRY": {
        name: "Země",
        description: "Název nebo kód země.",
        visible: false
    },
    "DESC": {
        name: "Potomci",
        description: "Týká se potomstva osoby.",
        visible: false
    },
    "DESI": {
        name: "Zájem o potomky",
        description: "Indikuje zájem o výzkum identifikace dalších potomků této osoby.",
        visible: false
    },
    "DEST": {
        name: "Cíl",
        description: "Systém přijímající data.",
        visible: false
    },
    "DIV": {
        name: "Rozvod",
        description: "Událost rozpuštění manželství civilní cestou.",
        visible: false
    },
    "DIVF": {
        name: "Podaná žádost o rozvod",
        description: "Událost podání žádosti o rozvod manželem/manželkou.",
        visible: false
    },
    "DSCR": {
        name: "Fyzický popis",
        description: "Fyzické charakteristiky osoby, místa nebo věci.",
        visible: true
    },
    "EDUC": {
        name: "Vzdělání",
        description: "Indikátor dosaženého stupně vzdělání.",
        visible: true
    },
    "EMAIL": {
        name: "E-mail",
        description: "Elektronická adresa používaná pro kontakt.",
        visible: false
    },
    "EMIG": {
        name: "Emigrace",
        description: "Událost opuštění vlasti s úmyslem žít jinde.",
        visible: true
    },
    "ENDL": {
        name: "Obdarování (Endowment)",
        description: "Náboženská událost, kde byl obřad obdarování pro jednotlivce vykonán autoritou kněžství v chrámu LDS.",
        visible: false
    },
    "ENGA": {
        name: "Zasnoubení",
        description: "Událost zaznamenání nebo oznámení dohody mezi dvěma lidmi o vstupu do manželství.",
        visible: false
    },
    "FACT": {
        name: "Fakt",
        description: "Týká se pozoruhodného atributu nebo faktu týkajícího se jednotlivce, skupiny nebo organizace.",
        visible: false
    },
    "FAMF": {
        name: "Rodinný soubor",
        description: "Název rodinného souboru přiřazeného rodině pro práci na chrámových obřadech.",
        visible: false
    },
    "FAX": {
        name: "Fax",
        description: "Telefonní číslo pro zasílání faxových zpráv.",
        visible: false
    },
    "FCOM": {
        name: "První svaté přijímání",
        description: "Náboženský obřad, první akt účasti na večeři Páně jako součást bohoslužby.",
        visible: false
    },
    "FONE": {
        name: "Fonetický přepis",
        description: "Fonetická varianta nadřazeného textového řetězce.",
        visible: false
    },
    "GEDC": {
        name: "GEDCOM",
        description: "Informace o použití GEDCOMu při přenosu.",
        visible: false
    },
    "GRAD": {
        name: "Promoce",
        description: "Událost udělení diplomů nebo titulů jednotlivcům.",
        visible: true
    },
    "HEAD": {
        name: "Hlavička",
        description: "Identifikuje informace týkající se celého přenosu GEDCOM.",
        visible: false
    },
    "HUSB": {
        name: "Manžel",
        description: "Osoba v rodinné roli ženatého muže nebo otce.",
        visible: false
    },
    "IDNO": {
        name: "Identifikační číslo",
        description: "Číslo přidělené k identifikaci osoby v rámci nějakého významného externího systému.",
        visible: true
    },
    "IMMI": {
        name: "Imigrace",
        description: "Událost vstupu do nové lokality s úmyslem tam žít.",
        visible: true
    },
    "INDI": {
        name: "Jednotlivec",
        description: "Osoba.",
        visible: false
    },
    "LANG": {
        name: "Jazyk",
        description: "Název jazyka použitého v komunikaci nebo přenosu informací.",
        visible: false
    },
    "LATI": {
        name: "Zeměpisná šířka",
        description: "Hodnota označující souřadnicovou polohu.",
        visible: false
    },
    "LEGA": {
        name: "Odkazovník (Legatee)",
        description: "Role osoby přijímající odkaz nebo právní dar.",
        visible: false
    },
    "LONG": {
        name: "Zeměpisná délka",
        description: "Hodnota označující souřadnicovou polohu.",
        visible: false
    },
    "MAP": {
        name: "Mapa",
        description: "Týká se reprezentace měření obvykle prezentované v grafické formě.",
        visible: false
    },
    "MARB": {
        name: "Ohlášky",
        description: "Událost oficiálního veřejného oznámení, že dvě osoby hodlají uzavřít manželství.",
        visible: false
    },
    "MARC": {
        name: "Manželská smlouva",
        description: "Událost zaznamenání formální dohody o manželství, včetně předmanželské smlouvy.",
        visible: false
    },
    "MARL": {
        name: "Sňatečná licence",
        description: "Událost získání právního povolení k uzavření manželství.",
        visible: false
    },
    "MARR": {
        name: "Manželství",
        description: "Právní, faktická nebo obvyklá událost vytvoření rodinné jednotky muže a ženy.",
        visible: false
    },
    "MARS": {
        name: "Majetkové vypořádání",
        description: "Událost vytvoření dohody mezi dvěma osobami uvažujícími o manželství, při které upravují majetková práva.",
        visible: false
    },
    "MEDI": {
        name: "Médium",
        description: "Identifikuje informace o médiu nebo o tom, ve kterém je informace uložena.",
        visible: false
    },
    "NATI": {
        name: "Národnost",
        description: "Národní původ osoby.",
        visible: true
    },
    "NATU": {
        name: "Naturalizace",
        description: "Událost získání občanství.",
        visible: true
    },
    "NCHI": {
        name: "Počet dětí",
        description: "Počet dětí, o kterých je známo, že je tato osoba rodičem.",
        visible: false
    },
    "NICK": {
        name: "Přezdívka",
        description: "Popisné nebo familiární jméno používané namísto nebo jako doplněk vlastního jména.",
        visible: true
    },
    "NMR": {
        name: "Počet manželství",
        description: "Kolikrát se tato osoba zúčastnila rodiny jako manžel/ka nebo rodič.",
        visible: false
    },
    "NPFX": {
        name: "Předpona jména",
        description: "Text, který se objevuje před vlastním jménem (např. plukovník).",
        visible: false
    },
    "NSFX": {
        name: "Přípona jména",
        description: "Text, který se objevuje za vlastním jménem (např. jr.).",
        visible: false
    },
    "OCCU": {
        name: "Povolání",
        description: "Druh práce nebo profese osoby.",
        visible: true
    },
    "ORDI": {
        name: "Obřad",
        description: "Týká se náboženského obřadu obecně.",
        visible: false
    },
    "ORDN": {
        name: "Vysvěcení",
        description: "Náboženská událost přijetí autority jednat v náboženských záležitostech.",
        visible: false
    },
    "PEDI": {
        name: "Rodokmen",
        description: "Informace týkající se linie předků.",
        visible: false
    },
    "PHON": {
        name: "Telefon",
        description: "Jedinečné číslo přidělené pro přístup k určitému telefonu.",
        visible: false
    },
    "POST": {
        name: "PSČ",
        description: "Poštovní směrovací číslo.",
        visible: false
    },
    "PROB": {
        name: "Pozůstalostní řízení",
        description: "Událost soudního určení platnosti závěti.",
        visible: true
    },
    "PROP": {
        name: "Majetek",
        description: "Týká se vlastnictví, jako jsou nemovitosti nebo jiný majetek.",
        visible: false
    },
    "PUBL": {
        name: "Publikace",
        description: "Odkazuje na to, kdy a/nebo kde bylo dílo publikováno nebo vytvořeno.",
        visible: false
    },
    "QUAY": {
        name: "Kvalita dat",
        description: "Posouzení jistoty důkazů podporujících závěry vyvozené z důkazů.",
        visible: false
    },
    "REFN": {
        name: "Reference",
        description: "Popis nebo číslo používané k identifikaci položky pro účely archivace.",
        visible: false
    },
    "RELA": {
        name: "Vztah",
        description: "Hodnota vztahu mezi indikovanými kontexty.",
        visible: false
    },
    "RELI": {
        name: "Náboženství",
        description: "Náboženská příslušnost osoby.",
        visible: true
    },
    "REPO": {
        name: "Archiv/Depozitář",
        description: "Instituce nebo osoba, která má uvedenou položku jako součást své sbírky.",
        visible: false
    },
    "RESI": {
        name: "Bydliště",
        description: "Akt bydlení na adrese po určitou dobu.",
        visible: true
    },
    "RESN": {
        name: "Omezení",
        description: "Indikátor zpracování označující, že přístup k informacím byl zamítnut nebo omezen.",
        visible: false
    },
    "RETI": {
        name: "Odchod do důchodu",
        description: "Událost ukončení pracovního poměru se zaměstnavatelem po kvalifikované době.",
        visible: true
    },
    "RFN": {
        name: "Číslo záznamu v souboru",
        description: "Trvalé číslo přidělené záznamu, které jej jednoznačně identifikuje v rámci známého souboru.",
        visible: false
    },
    "ROMN": {
        name: "Romanizace",
        description: "Romanizovaná varianta nadřazeného textového řetězce.",
        visible: false
    },
    "SLGC": {
        name: "Zpečetění dítěte",
        description: "Náboženská událost týkající se zpečetění dítěte k jeho rodičům v chrámu LDS.",
        visible: false
    },
    "SLGS": {
        name: "Zpečetění manželů",
        description: "Náboženská událost týkající se zpečetění manžela a manželky v chrámu LDS.",
        visible: false
    },
    "SPFX": {
        name: "Předpona příjmení",
        description: "Část jména použitá jako neindexovaná předpona příjmení.",
        visible: false
    },
    "SSN": {
        name: "Číslo sociálního pojištění",
        description: "Číslo přidělené pro účely identifikace (v USA).",
        visible: true
    },
    "STAE": {
        name: "Stát/Kraj",
        description: "Geografické rozdělení větší jurisdikční oblasti.",
        visible: false
    },
    "STAT": {
        name: "Stav",
        description: "Posouzení stavu nebo kondice něčeho.",
        visible: false
    },
    "SUBM": {
        name: "Odesílatel",
        description: "Osoba nebo organizace, která přispívá genealogickými daty do souboru.",
        visible: false
    },
    "SUBN": {
        name: "Podání",
        description: "Týká se souboru dat předloženého ke zpracování.",
        visible: false
    },
    "TEMP": {
        name: "Chrám",
        description: "Název nebo kód představující název chrámu církve LDS.",
        visible: false
    },
    "TIME": {
        name: "Čas",
        description: "Časový údaj ve formátu 24hodinových hodin.",
        visible: false
    },
    "TRLR": {
        name: "Ukončení (Trailer)",
        description: "Na úrovni 0 specifikuje konec přenosu GEDCOM.",
        visible: false
    },
    "TYPE": {
        name: "Typ",
        description: "Další upřesnění významu souvisejícího tagu.",
        visible: false
    },
    "VERS": {
        name: "Verze",
        description: "Indikuje, která verze produktu, položky nebo publikace je používána.",
        visible: false
    },
    "WIFE": {
        name: "Manželka",
        description: "Osoba v roli matky a/nebo vdané ženy.",
        visible: false
    },
    "WWW": {
        name: "Web",
        description: "Webová stránka (URL).",
        visible: false
    },
    "WILL": {
        name: "Závěť",
        description: "Právní dokument, kterým osoba disponuje svým majetkem, platný po smrti. (Viz též PROBate)",
        visible: true
    },
}
