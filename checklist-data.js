// REENTRY – kompletní checklist do spuštění ve Vinařicích.
// Výchozí stav bodů. Odfajfnutí, termíny, kdo to dělá a poznámky se ukládají zvlášť
// (Firebase, a dokud není napojený, tak v prohlížeči).
// Nový bod: přidej řádek do správné sekce s novým jedinečným id.
// stav: 'hotovo' | 'rozpracovano' | 'nezacato' | 'overit'

window.REENTRY_CHECKLIST = [
  {
    id: 'spolek', nazev: 'Spolek a úřady', ikona: '🏛️',
    body: [
      { id: 'sp-stanovy', t: 'Stanovy spolku', d: 'Opravená verze stanov.', soubor: 'Stanovy_Reentry_opravene.pdf', stav: 'hotovo' },
      { id: 'sp-zapis', t: 'Zápis z ustavující schůze', soubor: 'Zapis_ustavujici_schuze_Reentry.pdf', stav: 'hotovo' },
      { id: 'sp-cestna', t: 'Čestná prohlášení všech tří členů výboru', soubor: 'Cestne_prohlaseni_*.pdf', stav: 'hotovo' },
      { id: 'sp-sidlo', t: 'Souhlas vlastníka se sídlem (Děčínská 552/1)', soubor: 'Souhlas_umisteni_sidla_Reentry.pdf', stav: 'hotovo' },
      { id: 'sp-rejstrik', t: 'Zápis do spolkového rejstříku', d: '17. 10. 2026, Městský soud v Praze, L 82398.', stav: 'hotovo' },
      { id: 'sp-ico', t: 'IČO', d: '300 33 411.', stav: 'hotovo' },
      { id: 'sp-vypis', t: 'Stáhnout a uložit výpis ze spolkového rejstříku (PDF)', d: 'or.justice.cz → Úplný výpis. Bude ho chtít banka, věznice i grantové výzvy.', stav: 'nezacato' },
      { id: 'sp-ds', t: 'Datová schránka spolku: najít přihlašovací údaje', d: 'Spolkům zapsaným v rejstříku se zřizuje automaticky. Dopis s údaji chodí předsedovi.', stav: 'rozpracovano' },
      { id: 'sp-esm', t: 'Zapsat skutečné majitele do evidence', d: 'Povinné i pro spolky. esm.justice.cz, přihlášení přes identitu občana. Bez toho banka nezaloží účet.', stav: 'nezacato' },
      { id: 'sp-fu', t: 'Ověřit s účetní registraci na finančním úřadě', d: 'Kdy se spolek musí registrovat k dani z příjmů a jaké přiznání podává.', stav: 'overit' },
      { id: 'sp-pojisteni', t: 'Pojištění odpovědnosti spolku', d: 'Poptat 2–3 pojišťovny. Podklady jsou v dokumentech.', soubor: 'Pojisteni_odpovednosti_Reentry.pdf', stav: 'nezacato' },
      { id: 'sp-schuze', t: 'Členská schůze: schválit rozpočet a plán na 2027', d: 'Sepsat zápis a podepsat.', stav: 'nezacato' },
      { id: 'sp-nazev', t: 'Sjednotit všechny dokumenty na oficiální název', d: 'Správně: REENTRY – Institut podmíněného propuštění, z. s. Starší dokumenty mají „… a reintegrace“.', stav: 'nezacato' },
      { id: 'sp-slozka', t: 'Složka originálů (papír + PDF)', d: 'Výpis, stanovy, zápis, čestná prohlášení, souhlas se sídlem, smlouvy.', stav: 'nezacato' },
    ]
  },
  {
    id: 'razitka', nazev: 'Razítka, tisk a vybavení', ikona: '🖨️',
    body: [
      { id: 'ra-navrhy', t: 'Návrhy razítek A, B, C', d: 'Hotové s logem, IČO a všemi údaji z rejstříku.', soubor: 'Razitko_C_plne_udaje_75x38mm.svg', stav: 'hotovo' },
      { id: 'ra-objednat', t: 'Objednat razítko C (Trodat Printy 4926, 75 × 38 mm)', d: 'Razítkárna online, nahrát SVG. Barva modrá nebo černá. Cca 500–800 Kč. Volitelně i malé razítko B.', stav: 'nezacato' },
      { id: 'ra-vizitky', t: 'Vizitky pro všechny tři s novým logem', d: 'Telefon +420 606 589 032 / osobní čísla, info@reentry.cz, web.', stav: 'nezacato' },
      { id: 'ra-letak', t: 'Leták A5 pro Vinařice s novým logem a telefonem', d: 'Starší verze je v grafice, aktualizovat logo a kontakt.', stav: 'nezacato' },
      { id: 'ra-hlavicka', t: 'Hlavičkový papír a šablona dopisu (Word/PDF)', d: 'Pro dopisy klientům, věznicím a soudům.', stav: 'nezacato' },
      { id: 'ra-tisk-dok', t: 'Vytisknout sadu formulářů pro první návštěvu ve Vinařicích', d: 'Vstupní dotazník, GDPR souhlas, individuální plán, leták.', stav: 'nezacato' },
      { id: 'ra-desky', t: 'Desky / šanony na klientské spisy, uzamykatelná skříň', d: 'Papírové dokumenty klientů musí být pod zámkem (GDPR).', stav: 'nezacato' },
    ]
  },
  {
    id: 'finance', nazev: 'Finance a účetnictví', ikona: '💰',
    body: [
      { id: 'fi-rozpocet', t: 'Rozpočet na 12 měsíců', d: '2 210 000 Kč.', soubor: 'Rozpocet_12_mesicu_Reentry.pdf', stav: 'hotovo' },
      { id: 'fi-pitch', t: 'Pitch pro dárce (2 strany)', soubor: 'Pitch_pro_darce_REENTRY.pdf', stav: 'hotovo' },
      { id: 'fi-projekt', t: 'Podrobný projekt pro dárce (8 stran)', soubor: 'REENTRY_Projekt_pro_darce.pdf', stav: 'hotovo' },
      { id: 'fi-vykaz', t: 'Výkaz práce zakladatelů (hodiny a co se dělalo)', d: 'Doloží odhad 1 500 hodin / 1,5 mil. Kč. Zpětně sestavit z dat souborů a zpráv, dál vést měsíčně. Hodí se pro granty jako vlastní vklad.', stav: 'nezacato' },
      { id: 'fi-naklady', t: 'Sepsat a doložit vlastní výdaje do přípravy (faktury, účtenky)', stav: 'nezacato' },
      { id: 'fi-ucet', t: 'Založit transparentní účet', d: 'Banka chce: výpis z rejstříku, stanovy, zápis o volbě výboru, evidenci skutečných majitelů, doklady předsedy.', stav: 'nezacato' },
      { id: 'fi-ucet-doplnit', t: 'Číslo účtu doplnit do pitche, na web, do darovací smlouvy', stav: 'nezacato' },
      { id: 'fi-ucetni', t: 'Domluvit účetní / účetní software', stav: 'nezacato' },
      { id: 'fi-pravidla', t: 'Vnitřní pravidla: kdo schvaluje platby, pokladna, doklady', soubor: 'Interni_financni_kontrola_Reentry.pdf', stav: 'nezacato' },
      { id: 'fi-darovaci', t: 'Zkontrolovat vzor darovací smlouvy a potvrzení o daru', soubor: 'Darovaci_smlouva_Reentry.pdf', stav: 'nezacato' },
      { id: 'fi-granty', t: 'Seznam grantů a dotací s termíny', d: 'Ministerstvo spravedlnosti, MPSV, OP Zaměstnanost+, nadace (OSF, ČEZ, Via…), kraj, Praha.', stav: 'nezacato' },
      { id: 'fi-grant1', t: 'Podat první grantovou žádost', stav: 'nezacato' },
      { id: 'fi-darci', t: 'Oslovit prvních 10 dárců / firem s pitchem', stav: 'nezacato' },
      { id: 'fi-prepocet', t: 'Přepočítat rozpočet na reálný start (Vinařice → Ruzyně → Pankrác)', stav: 'nezacato' },
    ]
  },
  {
    id: 'maily', nazev: 'Komu napsat / zavolat', ikona: '✉️',
    body: [
      { id: 'ma-reditel', t: 'Dopis řediteli Věznice Vinařice: žádost o spolupráci', d: 'Přiložit pitch, projektový záměr, výpis z rejstříku. Požádat o schůzku. Šablona v dokumentech.', soubor: 'Sablona_email_veznice_Reentry.pdf', stav: 'nezacato' },
      { id: 'ma-soc-vinarice', t: 'Sociální oddělení Vinařice: domluvit den, místnost, způsob přihlašování klientů', stav: 'rozpracovano' },
      { id: 'ma-pms', t: 'PMS Kladno: potvrdit spolupráci písemně (MOU)', d: 'Ústně domluveno. Poslat návrh memoranda.', soubor: 'MOU_Memorandum_spoluprace_Reentry.pdf', stav: 'rozpracovano' },
      { id: 'ma-kuratorka', t: 'Sociální kurátorka Kladno: domluvit spolupráci', d: 'Zatím v kontaktu.', stav: 'rozpracovano' },
      { id: 'ma-odbornik', t: 'Odborník s 25 lety praxe ve vězeňství: smíme uvádět jméno? Pomůže s Vinařicemi?', stav: 'nezacato' },
      { id: 'ma-ets', t: 'Organizace postpenitenciární péče: smíme uvádět jméno? Možnosti spolupráce', stav: 'nezacato' },
      { id: 'ma-banka', t: 'Banka: termín na založení transparentního účtu', stav: 'nezacato' },
      { id: 'ma-ucetni', t: 'Účetní: poptávka', stav: 'nezacato' },
      { id: 'ma-pojistovna', t: 'Pojišťovny: poptávka pojištění odpovědnosti', stav: 'nezacato' },
      { id: 'ma-razitkarna', t: 'Razítkárna: objednávka razítka', stav: 'nezacato' },
      { id: 'ma-tiskarna', t: 'Tiskárna: vizitky a letáky', stav: 'nezacato' },
      { id: 'ma-advokati', t: 'Advokáti: oslovit 3–5 pro síť spolupracujících', stav: 'nezacato' },
      { id: 'ma-zamestnavatele', t: 'Zaměstnavatelé: oslovit firmy, které zaměstnají klienty', stav: 'nezacato' },
      { id: 'ma-bydleni', t: 'Bydlení: azylové domy, ubytovny, podporované bydlení', stav: 'nezacato' },
      { id: 'ma-dluhy', t: 'Dluhová poradna: domluvit spolupráci', stav: 'nezacato' },
      { id: 'ma-nadace', t: 'Nadace: odeslat pitch (seznam z bodu Granty)', stav: 'nezacato' },
      { id: 'ma-rodiny', t: 'Šablona e-mailu pro rodiny klientů', soubor: 'Sablona_email_rodiny_Reentry.pdf', stav: 'hotovo' },
    ]
  },
  {
    id: 'dokumenty', nazev: 'Dokumenty, PDF a prohlášení', ikona: '📄',
    body: [
      { id: 'do-metodika', t: 'Metodika práce s klientem', soubor: 'Metodika_Reentry_upravena.pdf', stav: 'hotovo' },
      { id: 'do-dotaznik', t: 'Vstupní dotazník / formulář klienta', stav: 'hotovo' },
      { id: 'do-plan', t: 'Individuální plán klienta (vzor)', soubor: 'Individualni_plan_klienta_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-schuzka', t: 'Proces první schůzky', soubor: 'Proces_prvni_schuzky_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-pokrok', t: 'Hodnocení pokroku klienta', soubor: 'Hodnoceni_pokroku_klienta_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-krize', t: 'Krizový postup', soubor: 'Krizovy_postup_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-odmitnuti', t: 'Postup při odmítnutí klienta', soubor: 'Postup_odmitnuti_klienta_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-zprava', t: 'Výstupní zpráva pro soud (vzor)', soubor: 'Vystupni_zprava_pro_soud_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-gdpr-souhlas', t: 'GDPR souhlas klienta', soubor: 'GDPR_Souhlas_klienta_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-gdpr-smernice', t: 'Směrnice GDPR + záznam o činnostech zpracování', soubor: 'GDPR_Smernice_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-nda', t: 'NDA (mlčenlivost) pro všechny, kdo přijdou k datům klientů', soubor: 'NDA_Mlcenlivost_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-kodex', t: 'Etický kodex', soubor: 'Eticky_kodex_Reentry.pdf', stav: 'hotovo' },
      { id: 'do-ukoly', t: 'Seznam úkolů pro klienta (co splnit a jak to doložit)', d: 'Základ automatické kontroly v systému.', stav: 'nezacato' },
      { id: 'do-dohoda-klient', t: 'Dohoda s klientem o spolupráci', stav: 'nezacato' },
      { id: 'do-plna-moc', t: 'Souhlas klienta s předáním informací soudu / PMS / věznici', d: 'Bez písemného souhlasu nesmíme nikomu nic sdělit.', stav: 'nezacato' },
      { id: 'do-pravni', t: 'Právní kontrola dokumentů (GDPR, zpráva pro soud, souhlasy)', d: 'Údaje o trestné činnosti jsou citlivé.', stav: 'nezacato' },
      { id: 'do-nazev', t: 'Všechny PDF přegenerovat s oficiálním názvem a novým logem', stav: 'nezacato' },
      { id: 'do-vyrocni', t: 'Šablona výroční zprávy', soubor: 'Vyrocni_zprava_sablona_Reentry.pdf', stav: 'hotovo' },
    ]
  },
  {
    id: 'system', nazev: 'Systém (CRM) a checklist', ikona: '🖥️',
    body: [
      { id: 'sy-demo', t: 'Ukázková verze CRM propojená s webem', d: 'Zatím bez hesla, data jen v prohlížeči. Nezadávat skutečné klienty.', stav: 'hotovo' },
      { id: 'sy-checklist', t: 'Tento checklist na webu', stav: 'hotovo' },
      { id: 'sy-firebase', t: 'Založit projekt Firebase (sdílené poznámky a databáze)', d: 'Návod: NASTAVENI_FIREBASE.md ve složce webu.', stav: 'nezacato' },
      { id: 'sy-db', t: 'CRM: databáze v cloudu (EU) místo prohlížeče', stav: 'nezacato' },
      { id: 'sy-login', t: 'CRM: přihlášení pro tým', stav: 'nezacato' },
      { id: 'sy-auto', t: 'CRM: úkoly klienta + automatická kontrola plnění', stav: 'nezacato' },
      { id: 'sy-zprava', t: 'CRM: automatický podklad pro výstupní zprávu', stav: 'nezacato' },
      { id: 'sy-zaloha', t: 'Zálohy a zabezpečení dat (kdo co vidí, mazání po skončení)', stav: 'nezacato' },
      { id: 'sy-test', t: 'Test systému na modelovém klientovi', stav: 'nezacato' },
    ]
  },
  {
    id: 'web', nazev: 'Web, značka, komunikace', ikona: '🌐',
    body: [
      { id: 'we-logo', t: 'Logo „Brána R“ + soubory', stav: 'hotovo' },
      { id: 'we-web', t: 'Nový web podle návrhu, ilustrace, mobil', stav: 'hotovo' },
      { id: 'we-gdpr', t: 'Stránka Ochrana osobních údajů', stav: 'hotovo' },
      { id: 'we-github', t: 'Web na GitHubu (odkaz pro kolegy)', stav: 'rozpracovano' },
      { id: 'we-domena', t: 'Doména reentry.cz napojit na web', d: 'Zjistit, kde je doména registrovaná.', stav: 'nezacato' },
      { id: 'we-formular', t: 'Ověřit, že chodí zprávy z formuláře', stav: 'nezacato' },
      { id: 'we-emaily', t: 'E-maily @reentry.cz (info + jmenné)', stav: 'nezacato' },
      { id: 'we-whatsapp', t: 'Má číslo 606 589 032 WhatsApp? Pokud ano, vrátit na web', stav: 'overit' },
      { id: 'we-fotky', t: 'Skutečné fotky týmu na web', stav: 'nezacato' },
      { id: 'we-site', t: 'Sociální sítě (FB, IG, LinkedIn)', d: 'Podklady: strategie, kalendář, připravené příspěvky.', stav: 'nezacato' },
      { id: 'we-tz', t: 'Tisková zpráva k založení spolku', stav: 'nezacato' },
    ]
  },
  {
    id: 'vinarice', nazev: 'Věznice Vinařice: příprava vstupu', ikona: '🔑',
    body: [
      { id: 'vi-schuzka', t: 'Schůzka s vedením věznice, představení programu', stav: 'nezacato' },
      { id: 'vi-dohoda', t: 'Písemná dohoda o spolupráci s věznicí', d: 'Bez ní se do věznice pravidelně nedostaneme.', stav: 'nezacato' },
      { id: 'vi-vstup', t: 'Ověřit podmínky vstupu pro členy týmu', d: 'Povolení ke vstupu, doklady, případně výpis z rejstříku trestů. Ověřit i podmínky pro mentory s vlastní zkušeností s výkonem trestu.', stav: 'overit' },
      { id: 'vi-den', t: 'Pravidelný den a místnost (1× týdně)', stav: 'nezacato' },
      { id: 'vi-prihlasky', t: 'Jak se klienti přihlásí (žádanka, nástěnka, vychovatel)', d: 'Na PP se tu hlásí 8–9 lidí týdně.', stav: 'nezacato' },
      { id: 'vi-letak', t: 'Letáky na nástěnky', stav: 'nezacato' },
      { id: 'vi-kontakt', t: 'Kontaktní osoba ve věznici pro REENTRY', stav: 'nezacato' },
      { id: 'vi-dokumenty', t: 'Pravidla pro dokumenty: co smí klient dostat, co smíme vynést', stav: 'nezacato' },
      { id: 'vi-zpravy', t: 'Jak předávat výstupní zprávy (soud, věznice, PMS)', stav: 'nezacato' },
    ]
  },
  {
    id: 'spusteni', nazev: 'Pilot a spuštění', ikona: '🚀',
    body: [
      { id: 'pi-model', t: 'Test celého postupu na modelovém klientovi', stav: 'nezacato' },
      { id: 'pi-uprava', t: 'Úprava metodiky po testu', stav: 'nezacato' },
      { id: 'pi-kontrola', t: 'Finální kontrola všech dokumentů', stav: 'nezacato' },
      { id: 'pi-prvni', t: 'První skupina klientů ve Vinařicích (cíl 20 / měsíc)', stav: 'nezacato' },
      { id: 'pi-zprava', t: 'První výstupní zpráva pro soud', stav: 'nezacato' },
      { id: 'pi-kpi', t: 'Vyhodnocení prvního měsíce (KPI)', soubor: 'KPI_meritelne_cile_Reentry.pdf', stav: 'nezacato' },
      { id: 'pi-darci', t: 'První čtvrtletní zpráva dárcům', stav: 'nezacato' },
      { id: 'pi-predstaveni', t: 'Oficiální představení REENTRY', stav: 'nezacato' },
    ]
  },
  {
    id: 'rozsireni', nazev: 'Rozšíření: Ruzyně a Pankrác', ikona: '📈',
    body: [
      { id: 'ro-ruzyne-dohoda', t: 'Praha-Ruzyně: kontakt a dohoda o spolupráci', d: 'Po prvním půlroce ve Vinařicích.', stav: 'nezacato' },
      { id: 'ro-ruzyne-start', t: 'Praha-Ruzyně: start', stav: 'nezacato' },
      { id: 'ro-pankrac-dohoda', t: 'Praha-Pankrác: kontakt a dohoda o spolupráci', stav: 'nezacato' },
      { id: 'ro-pankrac-start', t: 'Praha-Pankrác: start', stav: 'nezacato' },
      { id: 'ro-lide', t: 'Další mentoři / pracovníci podle počtu klientů', stav: 'nezacato' },
      { id: 'ro-300', t: 'Cíl 300 klientů za rok', stav: 'nezacato' },
    ]
  },
];
