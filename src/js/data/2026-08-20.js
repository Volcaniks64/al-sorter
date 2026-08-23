dataSetVersion = "2026-08-20";

dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Roster Options",
        key: "roster",
        tooltip: "Choose which types of characters should be included.",
        checked: true,
        sub: [
            { name: "Include Smol", tooltip: "Include Smol versions of ships such as Amagi-chan", key: "smol" },
            { name: "Include Unreleased", tooltip: "Includes currently unreleased ships such as Enterprise META and Takao META", key: "unreleased" },
            { name: "Include Chibi only", tooltip: "Includes Enforcers, which only have a chibi model. Note that this does nothing if you exclude the Siren faction", key: "chibionly", checked: false },
            { name: "Include Muse", tooltip: "Include Muse versions of ships", key: "muse", checked: false },
            { name: "Include Original", tooltip: "Include original versions of ships that have received a retrofit or an alt. For ships that have both an alt and a retrofit, the original and retrofit will both be included", key: "original", checked: false}
        ]
    },

    {
        name: "Filter by Faction",
        key: "faction",
        tooltip: "Choose which factions to include.",
        checked: true,
        sub: [
            { name: "Eagle Union", key: "eagle_union" },
            { name: "Royal Navy", key: "royal_navy" },
            { name: "Sakura Empire", key: "sakura_empire" },
            { name: "Iron Blood", key: "iron_blood" },
            { name: "Dragon Empery", key: "dragon_empery" },
            { name: "Sardegna Empire", key: "sardegna_empire" },
            { name: "Northern Parliament", key: "northern_parliament" },
            { name: "Iris Libre", key: "iris_libre" },
            { name: "Vichya Dominion", key: "vichya_dominion" },
            { name: "Tulipa", key: "tulipa" },
            { name: "Liga de Pedrería", key: "liga_de_pedreria" },
            { name: "META", key: "meta" },
            { name: "Tempesta", key: "tempesta" },
            { name: "Universal", key: "universal" },
            { name: "Collaboration", key: "collaboration" },
            { name: "Siren", tooltip: "Includes Sirens like Omitter, Compiler etc. as well as Siren adjacent characters such as TB and Navi. Be aware that adding this option will include spoilers for the story", key: "siren" },
            { name: "Human", tooltip: "Includes humans. Be aware that adding this option will include spoilers for the story", key: "human", checked: false }
        ]
    },

    {
        name: "Filter by Rarity",
        key: "rarity",
        tooltip: "Choose which rarities to include.",
        checked: false,
        sub: [
            { name: "Common", key: "common" },
            { name: "Rare", key: "rare" },
            { name: "Elite", key: "elite" },
            { name: "Super Rare", key: "super_rare" },
            { name: "Ultra Rare", key: "ultra_rare" },
            { name: "Priority", key: "priority" },
            { name: "Decisive", key: "decisive" }
        ]
    },

    {
        name: "Filter by Ship Type",
        key: "type",
        tooltip: "Choose which ship types to include.",
        checked: false,
        sub: [
            { name: "DD", key: "dd", tooltip: "Destroyer" },
            { name: "DDG", key: "ddg", tooltip: "Guided Missile Destroyer" },
            { name: "AE", key: "ae", tooltip: "Ammunition Ship" },
            { name: "CL", key: "cl", tooltip: "Light Cruiser" },
            { name: "CA", key: "ca", tooltip: "Heavy Cruiser" },
            { name: "CB", key: "cb", tooltip: "Large Cruiser" },
            { name: "BM", key: "bm", tooltip: "Monitor" },
            { name: "BB", key: "bb", tooltip: "Battleship" },
            { name: "BC", key: "bc", tooltip: "Battlecruiser" },
            { name: "BBV", key: "bbv", tooltip: "Aviation Battleship" },
            { name: "CV", key: "cv", tooltip: "Aircraft Carrier" },
            { name: "CVL", key: "cvl", tooltip: "Light Aircraft Carrier" },
            { name: "SS", key: "ss", tooltip: "Submarine" },
            { name: "SSV", key: "ssv", tooltip: "Submarine Carrier" },
            { name: "AR", key: "ar", tooltip: "Repair Ship" },
            { name: "IXs", key: "ixs", tooltip: "Sailing Frigate (Submarine)" },
            { name: "IXv", key: "ixv", tooltip: "Sailing Frigate (Vanguard)" },
            { name: "IXm", key: "ixm", tooltip: "Sailing Frigate (Main)" },
        ]
    }
];

dataSet[dataSetVersion].characterData = [
    
    // =========================
    // Eagle Union
    // =========================

    // USS Unreleased

    {
        name: "Bon Homme Richard",
        opts: {
            faction: ["eagle_union"],
            rarity: [""],
            type: ["cv"],
            unreleased: true
        }
    },

    // USS Retrofit

    {
        name: "Eldridge (Retrofit)",
        img: "EldridgeKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Essex (Retrofit)",
        img: "EssexKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"],
            retrofit: true
        }
    },
    {
        name: "San Diego (Retrofit)",
        img: "San_DiegoKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Charles Ausburne (Retrofit)",
        img: "Charles_AusburneKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Colorado (Retrofit)",
        img: "ColoradoKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"],
            retrofit: true
        }
    },
    {
        name: "Helena (Retrofit)",
        img: "HelenaKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    },
            {
        name: "Independence (Retrofit)",
        img: "IndependenceKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cvl"],
            retrofit: true
        }
    },
    {
        name: "Laffey (Retrofit)",
        img: "LaffeyKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true,
            original: true
        }
    },
    {
        name: "Maryland (Retrofit)",
        img: "MarylandKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"],
            retrofit: true
        }
    },
    {
        name: "Maury (Retrofit)",
        img: "MauryKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true
        }
    },
            {
        name: "Nicholas (Retrofit)",
        img: "NicholasKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Saratoga (Retrofit)",
        img: "SaratogaKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"],
            retrofit: true
        }
    },
    {
        name: "West Virginia (Retrofit)",
        img: "West_VirginiaKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"],
            retrofit: true
        }
    },
        {
        name: "Bailey (Retrofit)",
        img: "BaileyKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Hammann (Retrofit)",
        img: "HammannKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true,
            original: true
        }
    },
    {
        name: "Juneau (Retrofit)",
        img: "JuneauKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Long Island (Retrofit)",
        img: "Long_IslandKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cvl"],
            retrofit: true
        }
    },
    {
        name: "Portland (Retrofit)",
        img: "PortlandKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"],
            retrofit: true
        }
    },
    {
        name: "Sims (Retrofit)",
        img: "SimsKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    },
        {
        name: "Bogue (Retrofit)",
        img: "BogueKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cvl"],
            retrofit: true
        }
    },
            {
        name: "Cassin (Retrofit)",
        img: "CassinKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"],
            retrofit: true
        }
    },
            {
        name: "Downes (Retrofit)",
        img: "DownesKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"],
            retrofit: true
        }
    },
            {
        name: "Langley (Retrofit)",
        img: "LangleyKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cvl"],
            retrofit: true,
            original: true
        }
    },
        {
        name: "Nevada (Retrofit)",
        img: "NevadaKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["bb"],
            retrofit: true
        }
    },
            {
        name: "Oklahoma (Retrofit)",
        img: "OklahomaKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["bb"],
            retrofit: true
        }
    },
            {
        name: "Ranger (Retrofit)",
        img: "RangerKai.png",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cvl"],
            retrofit: true
        }
    },

    // USS Decisive

    {
        name: "Kearsarge",
        opts: {
            faction: ["eagle_union"],
            rarity: ["decisive"],
            type: ["bbv"]
        }
    },

    // USS Priority

    {
        name: "Anchorage",
        opts: {
            faction: ["eagle_union"],
            rarity: ["priority"],
            type: ["ca"]
        }
    },
    {
        name: "Georgia",
        opts: {
            faction: ["eagle_union"],
            rarity: ["priority"],
            type: ["bb"]
        }
    },
    {
        name: "Halford",
        opts: {
            faction: ["eagle_union"],
            rarity: ["priority"],
            type: ["dd"]
        }
    },
    {
        name: "Kansas",
        opts: {
            faction: ["eagle_union"],
            rarity: ["priority"],
            type: ["bb"]
        }
    },
    {
        name: "Seattle",
        opts: {
            faction: ["eagle_union"],
            rarity: ["priority"],
            type: ["cl"]
        }
    },

    // USS Ultra Rare

    {
        name: "Guam",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["cb"]
        }
    },
    {
        name: "Laffey II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["dd"],
            alt: true
        }
    },
    {
        name: "Lexington II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["cv"],
            alt: true
        }
    },
    {
        name: "New Jersey",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },
    {
        name: "William D. Porter",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Yorktown II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["ultra_rare"],
            type: ["cv"],
            alt: true
        }
    },

    // USS Super Rare

    {
        name: "Alabama",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Albacore",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ss"]
        }
    },
    {
        name: "Allen M. Sumner",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Archerfish",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ss"]
        }
    },
    {
        name: "Baltimore",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Bennington",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Bremerton",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Bristol",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Cavalla",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ss"]
        }
    },
    {
        name: "Collett",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Constellation",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bc"]
        }
    },
    {
        name: "Cowpens",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cvl"]
        }
    },
    {
        name: "Eldridge",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Enterprise",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Essex",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"],
            original: true
        }
    },
    {
        name: "Fargo",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Flasher",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ss"]
        }
    },
    {
        name: "Franklin",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Hornet II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"],
            alt: true
        }
    },
    {
        name: "Houston II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"],
            alt: true
        }
    },
    {
        name: "Indiana",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Ingraham",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Intrepid",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Massachusetts",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Minneapolis",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Montpelier",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "New Orleans",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "North Carolina",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Northampton II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"],
            alt: true
        }
    },
    {
        name: "Pittsburgh",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Reno",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "San Diego",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"],
            original: true
        }
    },
    {
        name: "San Francisco",

        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Santa Fe",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Shangri-La",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "South Dakota",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Ticonderoga",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Vicksburg",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Washington",
        opts: {
            faction: ["eagle_union"],
            rarity: ["super_rare"],
            type: ["BB"]
        }
    },

    // USS Elite

    {
        name: "Albacore µ",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ss"],
            muse: true
        }
    },
    {
        name: "Arizona",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["bb"]
        }
    },
    {
        name: "Astoria",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Baltimore µ",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"],
            muse: true
        }
    },
    {
        name: "Bataan",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cvl"]
        }
    },
    {
        name: "Bell",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Biloxi",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Birmingham",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Bluegill",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ss"]
        }
    },
    {
        name: "Boise",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Boise µ",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"],
            muse: true
        }
    },
    {
        name: "Charles Ausburne",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Clarence K. Bronson",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Clevelad",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"],
            smol: true
        }
    },
    {
        name: "Cleveland",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Cleveland µ",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"],
            muse: true
        }
    },
    {
        name: "Colorado",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["bb"],
            original: true
        }
    },
    {
        name: "Columbia",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Cooper",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Dace",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ss"]
        }
    },
    {
        name: "Denver",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Hammann II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            alt: true
        }
    },
    {
        name: "Harrison",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Helena",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"],
            original: true
        }
    },
    {
        name: "Herring",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ss"]
        }
    },
    {
        name: "Hornet",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cv"],
            original: true
        }
    },
    {
        name: "Houston",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"],
            original: true
        }
    },
    {
        name: "Independence",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cvl"],
            original: true
        }
    },
    {
        name: "Indianapolis",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "John Rodgers",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Laffey",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Langley II",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cvl"],
            alt: true
        }
    },
    {
        name: "Lena",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"],
            alt: true
        }
    },
    {
        name: "Lexington",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cv"],
            original: true
        }
    },
    {
        name: "Li'l Sandy",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"],
            smol: true
        }
    },
    {
        name: "Little Anchorage",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"],
            smol: true
        }
    },
    {
        name: "Little Enterprise",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cv"],
            smol: true
        }
    },
    {
        name: "Louisville",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Maryland",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["bb"],
            original: true
        }
    },
    {
        name: "Maury",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Miller",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Morrison",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Mullany",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Nautilus",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ss"]
        }
    },
    {
        name: "Nicholas",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Pasadena",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Princeton",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cvl"]
        }
    },
    {
        name: "Quincy",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "San Jacinto",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cvl"]
        }
    },
    {
        name: "Saratoga",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cv"],
            original: true
        }
    },
    {
        name: "St. Louis",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Stephen Potter",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Vestal",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ar"]
        }
    },
    {
        name: "Vincennes",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "West Virginia",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["bb"],
            original: true
        }
    },
    {
        name: "Wichita",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Yorktown",
        opts: {
            faction: ["eagle_union"],
            rarity: ["elite"],
            type: ["cv"],
            original: true
        }
    },

    // USS Rare

    {
        name: "Atlanta",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Aylwin",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Bache",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Bailey",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Benson",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Brooklyn",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Bush",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "California",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["bb"]
        }
    },
    {
        name: "Casablanca",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cvl"]
        }
    },
    {
        name: "Chicago",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["ca"]
        }
    },
    {
        name: "Concord",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Dewey",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Fletcher",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Gridley",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Halsey Powell",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Hammann",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Hazelwood",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Hobby",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Honolulu",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Jenkins",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Juneau",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"],
            original: true
        }
    },
    {
        name: "Kalk",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Kimberly",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Long Island",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cvl"],
            original: true
        }
    },
    {
        name: "Marblehead",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Memphis",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Northampton",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["ca"],
            original: true
        }
    },
    {
        name: "Pennsylvania",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["bb"]
        }
    },
    {
        name: "Phoenix",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Portland",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["ca"],
            original: true
        }
    },
    {
        name: "Radford",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "San Juan",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cl"]
        }
    },
    {
        name: "Sims",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Smalley",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Stanly",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Tennessee",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["bb"]
        }
    },
    {
        name: "Thatcher",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Wasp",
        opts: {
            faction: ["eagle_union"],
            rarity: ["rare"],
            type: ["cv"]
        }
    },

    // USS Common

    {
        name: "Aulick",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["dd"]
        }
    },
    {
        name: "Bogue",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["cvl"],
            original: true
        }
    },
    {
        name: "Cassin",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Craven",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["dd"]
        }
    },
    {
        name: "Downes",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Foote",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["dd"]
        }
    },
    {
        name: "Langley",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["cvl"],
            original: true
        }
    },
    {
        name: "McCall",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["dd"]
        }
    },
    {
        name: "Nevada",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["bb"],
            original: true
        }
    },
    {
        name: "Oklahoma",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["bb"],
            original: true
        }
    },
    {
        name: "Omaha",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["cl"]
        }
    },
    {
        name: "Pensacola",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["ca"]
        }
    },
    {
        name: "Raleigh",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["cl"]
        }
    },
    {
        name: "Ranger",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["cv"],
            original: true
        }
    },
    {
        name: "Richmond",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["cl"]
        }
    },
    {
        name: "Salt Lake City",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["ca"]
        }
    },
    {
        name: "Spence",
        opts: {
            faction: ["eagle_union"],
            rarity: ["common"],
            type: ["dd"]
        }
    },

    // =========================
    // Royal Navy
    // =========================

    // HMS Retrofit

    {
        name: "Belfast (Retrofit)",
        img: "BelfastKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["ultra_rare"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Warspite (Retrofit)",
        img: "WarspiteKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["ultra_rare"],
            type: ["bb"],
            retrofit: true
        }
    },
    {
        name: "Ark Royal (Retrofit)",
        img: "Ark_RoyalKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cv"],
            retrofit: true
        }
    },
    {
        name: "Exeter (Retrofit)",
        img: "ExeterKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["ca"],
            retrofit: true
        }
    },
    {
        name: "Glowworm (Retrofit)",
        img: "GlowwormKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true
        }
    },
        {
        name: "Javelin (Retrofit)",
        img: "JavelinKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "London (Retrofit)",
        img: "LondonKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["ca"],
            retrofit: true
        }
    },
    {
        name: "Nelson (Retrofit)",
        img: "NelsonKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bb"],
            retrofit: true
        }
    },
    {
        name: "Unicorn (Retrofit)",
        img: "UnicornKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cvl"],
            retrofit: true
        }
    },
    {
        name: "York (Retrofit)",
        img: "YorkKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["ca"],
            retrofit: true
        }
    },
    {
        name: "Acasta (Retrofit)",
        img: "AcastaKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Achilles (Retrofit)",
        img: "AchillesKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Ajax (Retrofit)",
        img: "AjaxKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Amazon (Retrofit)",
        img: "AmazonKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Ardent (Retrofit)",
        img: "ArdentKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Curacoa (Retrofit)",
        img: "CuracoaKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Curlew (Retrofit)",
        img: "CurlewKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Fortune (Retrofit)",
        img: "FortuneKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Newcastle (Retrofit)",
        img: "NewcastleKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"],
            retrofit: true
        }
    },
    {
        name: "Shropshire (Retrofit)",
        img: "ShropshireKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"],
            retrofit: true
        }
    },
    {
        name: "Suffolk (Retrofit)",
        img: "SuffolkKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"],
            retrofit: true
        }
    },
    {
        name: "Comet (Retrofit)",
        img: "CometKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Crescent (Retrofit)",
        img: "CrescentKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Cygnet (Retrofit)",
        img: "CygnetKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Foxhound (Retrofit)",
        img: "FoxhoundKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["rare"],
            type: ["dd"],
            retrofit: true
        }
    },
    {
        name: "Hermes (Retrofit)",
        img: "HermesKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["rare"],
            type: ["cvl"],
            retrofit: true
        }
    },
    {
        name: "Leander (Retrofit)",
        img: "LeanderKai.png",
        opts: {
            faction: ["royal_navy"],
            rarity: ["rare"],
            type: ["cl"],
            retrofit: true
        }
    },

    // HMS Decisive

    {
        name: "Drake",
        opts: {
            faction: ["royal_navy"],
            rarity: ["decisive"],
            type: ["ca"]
        }
    },
    {
        name: "Plymouth",
        opts: {
            faction: ["royal_navy"],
            rarity: ["decisive"],
            type: ["cl"]
        }
    },

    // HMS Priority

    {
        name: "Cheshire",
        opts: {
            faction: ["royal_navy"],
            rarity: ["priority"],
            type: ["ca"]
        }
    },
    {
        name: "Duncan",
        opts: {
            faction: ["royal_navy"],
            rarity: ["priority"],
            type: ["bc"]
        }
    },
    {
        name: "Monarch",
        opts: {
            faction: ["royal_navy"],
            rarity: ["priority"],
            type: ["bb"]
        }
    },
    {
        name: "Neptune",
        opts: {
            faction: ["royal_navy"],
            rarity: ["priority"],
            type: ["cl"]
        }
    },

    // HMS Ultra Rare

    {
        name: "Implacable",
        opts: {
            faction: ["royal_navy"],
            rarity: ["ultra_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Lion",
        opts: {
            faction: ["royal_navy"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Trafalgar",
        opts: {
            faction: ["royal_navy"],
            rarity: ["ultra_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Vanguard",
        opts: {
            faction: ["royal_navy"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },

    // HMS Super Rare

    {
        name: "Albion",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cvl"]
        }
    },
    {
        name: "Belfast",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"],
            original: true
        }
    },
    {
        name: "Centaur",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Charybdis",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Cleopatra",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Dido",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Dido µ",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"],
            muse: true
        }
    },
    {
        name: "Duke of York",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Formidable",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Formidable µ",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cv"],
            muse: true
        }
    },
    {
        name: "Hermione",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Hood",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bc"]
        }
    },
    {
        name: "Howe",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Illustrious",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Illustrious µ",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cv"],
            muse: true
        }
    },
    {
        name: "Indomitable",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Janus",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Jervis",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "King George V",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Nubian",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Perseus",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cvl"]
        }
    },
    {
        name: "Prince of Wales",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Royal Oak",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Scylla",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Sirius",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Superb",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Surrey",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Swiftsure",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Theseus",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cvl"]
        }
    },
    {
        name: "Victorious",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Warspite",
        opts: {
            faction: ["royal_navy"],
            rarity: ["super_rare"],
            type: ["bb"],
            original: true
        }
    },

    // HMS Elite

    {
        name: "Abercrombie",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bm"]
        }
    },
    {
        name: "Argus",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cvl"]
        }
    },
    {
        name: "Ark Royal",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cv"],
            original: true
        }
    },
    {
        name: "Aurora",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Bellona",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Black Prince",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Chaser",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cvl"]
        }
    },
    {
        name: "Devonshire",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Dorsetshire",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Eagle",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cv"]
        }
    },
    {
        name: "Edinburgh",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Enterprise (Royal Navy)",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Erebus",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bm"]
        }
    },
    {
        name: "Eskimo",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Exeter",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"],
            original: true
        }
    },
    {
        name: "Gallant",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Glorious",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cv"]
        }
    },
    {
        name: "Gloucester",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Glowworm",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Grenville",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Griffin",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Hardy",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Hero",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Icarus",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Javelin",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"],
            original: true
        }
    },
    {
        name: "Little Bel",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"],
            smol: true
        }
    },
    {
        name: "Little Cheshire",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"], 
            smol: true
        }
    },
    {
        name: "Little Formidable",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cv"],
            smol: true
        }
    },
    {
        name: "Little Illustrious",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cv"],
            smol: true
        }
    },
    {
        name: "Little Renown",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bc"],
            smol: true
        }
    },
    {
        name: "Liverpool",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "London",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"],
            original: true
        }
    },
    {
        name: "Manchester",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Matchless",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Musketeer",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Nelson",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bb"],
            original: true
        }
    },
    {
        name: "Penelope",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Queen Elizabeth",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bb"]
        }
    },
    {
        name: "Renown",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bc"]
        }
    },
    {
        name: "Revenge",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bb"]
        }
    },
    {
        name: "Rodney",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bb"]
        }
    },
    {
        name: "Sheffield",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Sheffield µ",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"],
            muse: true
        }
    },
    {
        name: "Terror",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bm"]
        }
    },
    {
        name: "Trinidad",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Unicorn",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["cvl"],
            original: true
        }
    },
    {
        name: "Valiant",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["bb"]
        }
    },
    {
        name: "Vampire",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "York",
        opts: {
            faction: ["royal_navy"],
            rarity: ["elite"],
            type: ["ca"],
            original: true
        }
    },

    // HMS Rare

    {
            name: "Acasta",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Achilles",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Ajax",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Amazon",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Ardent",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Arethusa",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"]
            }
        },
    {
            name: "Curacoa",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Curlew",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Echo",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Fiji",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"]
            }
        },
    {
            name: "Fortune",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Galatea",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"]
            }
        },
    {
            name: "Glasgow",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"]
            }
        },
    {
            name: "Hunter",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Jamaica",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"]
            }
        },
    {
            name: "Jersey",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Juno",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Jupiter",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Kent",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["ca"]
            }
        },
    {
            name: "Newcastle",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Norfolk",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["ca"]
            }
        },
    {
            name: "Repulse",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["bc"]
            }
        },
    {
            name: "Shropshire",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["ca"],
                original: true
            }
        },
    {
            name: "Southampton",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["cl"]
            }
        },
    {
            name: "Suffolk",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["ca"],
                original: true
            }
        },
    {
            name: "Sussex",
            opts: {
                faction: ["royal_navy"],
                rarity: ["rare"],
                type: ["ca"]
            }
        },

    // HMS Common

        {
            name: "Beagle",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["dd"]
            }
        },
    {
            name: "Bulldog",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["dd"]
            }
        },
    {
            name: "Comet",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Crescent",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Cygnet",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Foxhound",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Hermes",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["cvl"],
                original: true
            }
        },
    {
            name: "Leander",
            opts: {
                faction: ["royal_navy"],
                rarity: ["common"],
                type: ["cl"],
                original: true
            }
        },

    // =========================
    // Sakura Empire
    // =========================
    
    // IJN Retrofit

    {
        name: "Yuudachi (Retrofit)",
        img: "YuudachiKai.png",
        opts: {
            faction: ["sakura_empire"],
            rarity: ["ultra_rare"],
            type: ["dd"],
            retrofit: true
        }
    }, 
        {
            name: "Ayanami (Retrofit)",
            img: "AyanamiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Hiryuu (Retrofit)",
            img: "HiryuuKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"],
                retrofit: true
            }
        },
    {
            name: "Jintsuu (Retrofit)",
            img: "JintsuuKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cl"],
                retrofit: true
            }
        },
    {
            name: "Kasumi (Retrofit)",
            img: "KasumiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Kinu (Retrofit)",
            img: "KinuKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cl"],
                retrofit: true
            }
        },
    {
            name: "Mogami (Retrofit)",
            img: "MogamiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ca"],
                retrofit: true
            }
        },
    {
            name: "Shigure (Retrofit)",
            img: "ShigureKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Souryuu (Retrofit)",
            img: "SouryuuKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"],
                retrofit: true
            }
        },
    {
            name: "Yuubari (Retrofit)",
            img: "YuubariKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cl"],
                retrofit: true
            }
        },
            {
            name: "Ariake (Retrofit)",
            img: "AriakeKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Fusou (Retrofit)",
            img: "FusouKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bbv"],
                retrofit: true
            }
        },
    {
            name: "Hamakaze (Retrofit)",
            img: "HamakazeKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Hatsuharu (Retrofit)",
            img: "HatsuharuKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Hatsushimo (Retrofit)",
            img: "HatsushimoKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Hyuuga (Retrofit)",
            img: "HyuugaKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bbv"],
                retrofit: true
            }
        },
    {
            name: "Ise (Retrofit)",
            img: "IseKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bbv"],
                retrofit: true
            }
        },
    {
            name: "Isuzu (Retrofit)",
            img: "IsuzuKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"],
                retrofit: true
            }
        },
    {
            name: "Kagerou (Retrofit)",
            img: "KagerouKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Kamikaze (Retrofit)",
            img: "KamikazeKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Matsukaze (Retrofit)",
            img: "MatsukazeKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Nachi (Retrofit)",
            img: "NachiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ca"],
                retrofit: true
            }
        },
    {
            name: "Sendai (Retrofit)",
            img: "SendaiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"],
                retrofit: true
            }
        },
    {
            name: "Shiratsuyu (Retrofit)",
            img: "ShiratsuyuKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Shouhou (Retrofit)",
            img: "ShouhouKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cvl"],
                retrofit: true
            }
        },
    {
            name: "Tanikaze (Retrofit)",
            img: "TanikazeKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Yamashiro (Retrofit)",
            img: "YamashiroKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bbv"],
                retrofit: true
            }
        },
    {
            name: "Yuugure (Retrofit)",
            img: "YuugureKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                retrofit: true
            }
        },
            {
            name: "Abukuma (Retrofit)",
            img: "AbukumaKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["cl"],
                retrofit: true
            }
        },
    {
            name: "Furutaka (Retrofit)",
            img: "FurutakaKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["ca"],
                retrofit: true
            }
        },
    {
            name: "Kako (Retrofit)",
            img: "KakoKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["ca"],
                retrofit: true
            }
        },
    {
            name: "Kisaragi (Retrofit)",
            img: "KisaragiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Mutsuki (Retrofit)",
            img: "MutsukiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                retrofit: true
            }
        },
    {
            name: "Shiranui (Retrofit)",
            img: "ShiranuiKai.png",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                retrofit: true
            }
        },

    // IJN Decisive

        {
            name: "Azuma",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["decisive"],
                type: ["cb"]
            }
        },
    {
            name: "Hakuryuu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["decisive"],
                type: ["cv"]
            }
        },

    // IJN Priority

        {
            name: "Daisen",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["priority"],
                type: ["bb"]
            }
        },
    {
            name: "Ibuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["priority"],
                type: ["ca"]
            }
        },
    {
            name: "Izumo",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["priority"],
                type: ["bb"]
            }
        },
    {
            name: "Kitakaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["priority"],
                type: ["dd"]
            }
        },
    {
            name: "Shimanto",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["priority"],
                type: ["cl"]
            }
        },
    {
            name: "Takahashi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["priority"],
                type: ["cl"]
            }
        },

    // IJN Ultra Rare

        {
            name: "Amagi(CV)",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["ultra_rare"],
                type: ["cv"],
                alt: true
            }
        },
    {
            name: "Hakuhou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["ultra_rare"],
                type: ["cv"]
            }
        },
    {
            name: "I-404",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["ultra_rare"],
                type: ["ssv"]
            }
        },
    {
            name: "Musashi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["ultra_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Shimakaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["ultra_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Shinano",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["ultra_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Unzen",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["ultra_rare"],
                type: ["ca"]
            }
        },

    // IJN Super Rare

        {
            name: "Akagi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Akagi µ",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"],
                muse: true
            }
        },
    {
            name: "Akashi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ar"]
            }
        },
    {
            name: "Amagi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bc"],
                original: true
            }
        },
    {
            name: "Asama",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Atago",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Chikuma",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Choukai",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Fujinami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Hatsuzuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "I-13",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ssv"]
            }
        },
    {
            name: "I-168",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "I-19",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "Kaga",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Kaga(BB)",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"],
                alt: true,
                original: true
            }
        },
    {
            name: "Katsuragi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Kawakaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Kazagumo",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Kii",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Maya",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Mikasa",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Nagato",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Noshiro",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Noshiro µ",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cl"],
                muse: true
            }
        },
    {
            name: "Oumi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Owari",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Ryuuhou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Sakawa",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Shoukaku",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Suruga",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Suzutsuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Taihou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Taihou µ",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"],
                muse: true
            }
        },
    {
            name: "Takao",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Tosa",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Unryuu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Wakatsuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Watarase",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Yukikaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Yuudachi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Zuihou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Zuikaku",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },

    // IJN Elite

        {
            name: "Agano",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Akagi-chan",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cv"],
                smol: true
            }
        },
    {
            name: "Amagi-chan",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bc"],
                smol: true
            }
        },
    {
            name: "Asanagi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Ashigara",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Ayanami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Ayase",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Chitose",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Chiyoda",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Fubuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Haguro",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Hanazuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Haruna",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Harutsuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Hibiki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Hiei",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Hiei-chan",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bc"],
                smol: true
            }
        },
    {
            name: "Hiryuu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cv"],
                original: true
            }
        },
    {
            name: "Houshou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "I-25",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "I-26",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "I-56",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "I-58",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "Jintsuu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Kashino",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ae"]
            }
        },
    {
            name: "Kasumi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Kinu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Kirishima",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Kizu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Kongou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Kongou µ",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bc"],
                muse: true
            }
        },
    {
            name: "Kumano",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Makinami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Mikuma",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Minase",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Miyuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Mogami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Musashi-chan",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bb"],
                smol: true
            }
        },
    {
            name: "Mutsu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Naganami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Natori",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Nayoro",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Niizuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Nowaki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Ryuujou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Shigure",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Shinano-chan",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cv"],
                smol: true
            }
        },
    {
            name: "Shirayuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Souryuu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cv"],
                original: true
            }
        },
    {
            name: "Suzunami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Suzuya",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Taekaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Taihou-chan",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cv"],
                smol: true
            }
        },
    {
            name: "Umikaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Unzen-chan",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["ca"],
                smol: true
            }
        },
    {
            name: "Uranami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Yamakaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Yoizuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Yura",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Yuubari",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },

    // IJN Rare

        {
            name: "Akatsuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Arashio",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Ariake",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Asashio",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Fumizuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Fusou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["bb"],
                original: true
            }
        },
    {
            name: "Hamakaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Hatakaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Hatsuharu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Hatsushimo",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Hiyou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Hyuuga",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["bb"],
                original: true
            }
        },
    {
            name: "Ikazuchi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Inazuma",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Ise",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["bb"],
                original: true
            }
        },
    {
            name: "Isokaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Isuzu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Junyou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Kagerou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Kamikaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Kiyonami",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Kuroshio",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Matsukaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Michishio",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Myoukou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["ca"]
            }
        },
    {
            name: "Nachi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["ca"],
                original: true
            }
        },
    {
            name: "Nagatsuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Naka",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["cl"]
            }
        },
    {
            name: "Oite",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Ooshio",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Oyashio",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Sendai",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Shiratsuyu",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Shouhou",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["cvl"],
                original: true
            }
        },
    {
            name: "Tanikaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Urakaze",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Wakaba",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"]
            }
        },
    {
            name: "Yamashiro",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["bb"],
                original: true
            }
        },
    {
            name: "Yuugure",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["rare"],
                type: ["dd"],
                original: true
            }
        },

    // IJN Common

        {
            name: "Abukuma",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["cl"], 
                original: true
            }
        },
    {
            name: "Aoba",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["ca"]
            }
        },
    {
            name: "Furutaka",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["ca"],
                original: true
            }
        },
    {
            name: "Kako",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["ca"],
                original: true
            }
        },
    {
            name: "Kinugasa",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["ca"]
            }
        },
    {
            name: "Kisaragi",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Mikazuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["dd"]
            }
        },
    {
            name: "Minazuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["dd"]
            }
        },
    {
            name: "Mutsuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Nagara",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["cl"]
            }
        },
    {
            name: "Shiranui",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Uzuki",
            opts: {
                faction: ["sakura_empire"],
                rarity: ["common"],
                type: ["dd"]
            }
        },

    // =========================
    // Iron Blood
    // =========================

    // KMS Retrofit

    {
        name: "Admiral Hipper (Retrofit)",
        img: "Admiral_HipperKai.png",
        opts: {
            faction: ["iron_blood"],
            rarity: ["super_rare"],
            type: ["ca"],
            retrofit: true
        }
    }, 
    {
        name: "Z1 (Retrofit)",
        img: "Z1Kai.png",
        opts: {
            faction: ["iron_blood"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true
        }
    }, 
    {
        name: "Z23 (Retrofit)",
        img: "Z23Kai.png",
        opts: {
            faction: ["iron_blood"],
            rarity: ["super_rare"],
            type: ["dd"],
            retrofit: true
        }
    }, 
    {
        name: "Leipzig (Retrofit)",
        img: "LeipzigKai.png",
        opts: {
            faction: ["iron_blood"],
            rarity: ["elite"],
            type: ["cl"],
            retrofit: true
        }
    }, 
    {
        name: "Karlsruhe (Retrofit)",
        img: "KarlsruheKai.png",
        opts: {
            faction: ["iron_blood"],
            rarity: ["rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 
    {
        name: "Köln (Retrofit)",
        img: "KölnKai.png",
        opts: {
            faction: ["iron_blood"],
            rarity: ["rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 

    // KMS Decisive

    {
        name: "Friedrich der Große",
        opts: {
            faction: ["iron_blood"],
            rarity: ["decisive"],
            type: ["bb"]
        }
    },
    {
        name: "Hindenburg",
        opts: {
            faction: ["iron_blood"],
            rarity: ["decisive"],
            type: ["ca"]
        }
    },
    {
        name: "Max Immelmann",
        opts: {
            faction: ["iron_blood"],
            rarity: ["decisive"],
            type: ["cv"]
        }
    },
    {
        name: "Mecklenburg",
        opts: {
            faction: ["iron_blood"],
            rarity: ["decisive"],
            type: ["bb"]
        }
    },
    {
        name: "Ägir",
        opts: {
            faction: ["iron_blood"],
            rarity: ["decisive"],
            type: ["cb"]
        }
    },

    // KMS Priority

    {
        name: "August von Parseval",
        opts: {
            faction: ["iron_blood"],
            rarity: ["priority"],
            type: ["cv"]
        }
    },
    {
        name: "Felix Schultz",
        opts: {
            faction: ["iron_blood"],
            rarity: ["priority"],
            type: ["dd"]
        }
    },
    {
        name: "Mainz",
        opts: {
            faction: ["iron_blood"],
            rarity: ["priority"],
            type: ["cl"]
        }
    },
    {
        name: "Odin",
        opts: {
            faction: ["iron_blood"],
            rarity: ["priority"],
            type: ["bc"]
        }
    },
    {
        name: "Prinz Rupprecht",
        opts: {
            faction: ["iron_blood"],
            rarity: ["priority"],
            type: ["bc"]
        }
    },
    {
        name: "Roon",
        opts: {
            faction: ["iron_blood"],
            rarity: ["priority"],
            type: ["ca"]
        }
    },

    // KMS Ultra Rare

    {
        name: "Bismarck Zwei",
        opts: {
            faction: ["iron_blood"],
            rarity: ["ultra_rare"],
            type: ["bb"],
            alt: true
        }
    },
    {
        name: "Fritz Rumey",
        opts: {
            faction: ["iron_blood"],
            rarity: ["ultra_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Götz von Berlichingen",
        opts: {
            faction: ["iron_blood"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },
    {
        name: "U-2501",
        opts: {
            faction: ["iron_blood"],
            rarity: ["ultra_rare"],
            type: ["ss"]
        }
    },
    {
        name: "Ulrich von Hutten",
        opts: {
            faction: ["iron_blood"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Z52",
        opts: {
            faction: ["iron_blood"],
            rarity: ["ultra_rare"],
            type: ["dd"]
        }
    },

    // KMS Super Rare

        {
            name: "Admiral Zenker",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Alvitr",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Bismarck",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["bb"],
                original: true
            }
        },
    {
            name: "Blücher",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Brünhilde",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Duisburg",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Emden",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Friedrich Carl",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Graf Zeppelin",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Lützow",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Magdeburg",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Otto von Alvensleben",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Peter Strasser",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Prinz Adalbert",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Prinz Eugen",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Prinz Eugen µ",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"],
                muse: true
            }
        },
    {
            name: "Prinz Heinrich",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Prinz Moritz",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Regensburg",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Roon µ",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ca"],
                muse: true
            }
        },
    {
            name: "Seydlitz",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Tirpitz",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "U-101",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "U-37",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "U-47",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "U-552",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "U-81",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "U-96",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "Z46",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Z47",
            opts: {
                faction: ["iron_blood"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },

    // KMS KMS Elite
    
        {
            name: "Admiral Graf Spee",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Admiral Hipper",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ca"],
                original: true
            }
        },
    {
            name: "Admiral Hipper µ",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ca"],
                muse: true
            }
        },
    {
            name: "Deutschland",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Elbe",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Elbing",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Gneisenau",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Jade",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Little Friedrich",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["bb"],
                smol: true
            }
        },
    {
            name: "Little Prinz Eugen",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ca"],
                smol: true
            }
        },
    {
            name: "Little Spee",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ca"],
                smol: true
            }
        },
    {
            name: "Little Ägir",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["cb"],
                smol: true
            }
        },
    {
            name: "Nürnberg",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Scharnhorst",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Thüringen",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "U-110",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "U-1206",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "U-31",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "U-410",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "U-522",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "U-556",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "U-557",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "U-73",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "Weser",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Yorck",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Z1",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Z11",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z13",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z14",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z15",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z16",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z2",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z23",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Z24",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z25",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z26",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z28",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z35",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z36",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z43",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Z9",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Zeppy",
            opts: {
                faction: ["iron_blood"],
                rarity: ["elite"],
                type: ["cv"],
                smol: true
            }
        },

    // KMS Rare

    {
        name: "Leipzig",
        opts: {
            faction: ["iron_blood"],
            rarity: ["rare"],
            type: ["cl"],
            original: true
        }
    },
    {
        name: "Z18",
        opts: {
            faction: ["iron_blood"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },
    {
        name: "Z19",
        opts: {
            faction: ["iron_blood"],
            rarity: ["rare"],
            type: ["dd"]
        }
    },

    // KMS Common

    {
        name: "Karlsruhe",
        opts: {
            faction: ["iron_blood"],
            rarity: ["common"],
            type: ["cl"],
            original: true
        }
    },
    {
        name: "Köln",
        opts: {
            faction: ["iron_blood"],
            rarity: ["common"],
            type: ["cl"],
            original: true
        }
    },
    {
        name: "Königsberg",
        opts: {
            faction: ["iron_blood"],
            rarity: ["common"],
            type: ["cl"]
        }
    },
    {
        name: "Z20",
        opts: {
            faction: ["iron_blood"],
            rarity: ["common"],
            type: ["dd"]
        }
    },
    {
        name: "Z21",
        opts: {
            faction: ["iron_blood"],
            rarity: ["common"],
            type: ["dd"]
        }
    },

    // =========================
    // Dragon Empery
    // =========================

    // ROC/PRAN Retrofit

    {
        name: "An Shan (Retrofit)",
        img: "An_ShanKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["ddg"],
            retrofit: true
        }
    }, 
    {
        name: "Chang Chun (Retrofit)",
        img: "Chang_ChunKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["ddg"],
            retrofit: true
        }
    }, 
    {
        name: "Chao Ho (Retrofit)",
        img: "Chao_HoKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 
    {
        name: "Chen Hai (Retrofit)",
        img: "Chen_HaiKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["cvl"],
            retrofit: true
        }
    }, 
    {
        name: "Fu Shun (Retrofit)",
        img: "Fu_ShunKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["ddg"],
            retrofit: true
        }
    }, 
    {
        name: "Hwah Jah (Retrofit)",
        img: "Hwah_JahKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["cvl"],
            retrofit: true
        }
    }, 
    {
        name: "Ning Hai (Retrofit)",
        img: "Ning_HaiKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 
    {
        name: "Ping Hai (Retrofit)",
        img: "Ping_HaiKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 
    {
        name: "Tai Yuan (Retrofit)",
        img: "Tai_YuanKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["ddg"],
            retrofit: true
        }
    }, 
    {
        name: "Yat Sen (Retrofit)",
        img: "Yat_SenKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 
    {
        name: "Ying Swei (Retrofit)",
        img: "Ying_SweiKai.png",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 

    // ROC/PRAN Decisive

    // ROC/PRAN Priority

    {
        name: "Harbin",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["priority"],
            type: ["cl"]
        }
    },

    // ROC/PRAN Ultra Rare

    // ROC/PRAN Super Rare

    {
        name: "Chang Wu",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Chien Wu",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Huan Ch'ang",
        opts: {
            faction: ["dragon_empery"],
            rarity: ["super_rare"],
            type: ["bc"]
        }
    },

    // ROC/PRAN Elite

        {
            name: "An Shan",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Chang Chun",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Chang Feng",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Chao Ho",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Chen Hai",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cvl"],
                original: true
            }
        },
    {
            name: "Chi An",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Fei Yuen",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Fu Po",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Fu Shun",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Hai Chi",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Hai Chou",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Hai Tien",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Hai Yung",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Hu Pen",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Hwah Jah",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cvl"],
                original: true
            }
        },
    {
            name: "Lung Wu",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Ning Hai",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Ping Hai",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Tai Yuan",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["dd"],
                original: true
            }
        },
    {
            name: "Ting An",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["ae"]
            }
        },
    {
            name: "Yat Sen",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Ying Swei",
            opts: {
                faction: ["dragon_empery"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },

    // Rare

    // Common

    // =========================
    // Northern Parliament
    // =========================

    // SN Retrofit

    {
        name: "Pamiat' Merkuria (Retrofit)",
        img: "Pamiat'_MerkuriaKai.png",
        opts: {
            faction: ["northern_parliament"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 

    // SN Decisive

    {
        name: "Admiral Nakhimov",
        opts: {
            faction: ["northern_parliament"],
            rarity: ["decisive"],
            type: ["cv"]
        }
    },

    // SN Priority

    {
        name: "Chkalov",
        opts: {
            faction: ["northern_parliament"],
            rarity: ["priority"],
            type: ["cv"]
        }
    },
    {
        name: "Dmitri Donskoi",
        opts: {
            faction: ["northern_parliament"],
            rarity: ["priority"],
            type: ["cl"]
        }
    },

    // SN Ultra Rare

    {
        name: "Kronshtadt",
        opts: {
            faction: ["northern_parliament"],
            rarity: ["ultra_rare"],
            type: ["cb"]
        }
    },
    {
        name: "Moskva",
        opts: {
            faction: ["northern_parliament"],
            rarity: ["ultra_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Sovetsky Soyuz",
        opts: {
            faction: ["northern_parliament"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },

    // SN Super Rare

        {
            name: "Avrora",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Chapayev",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Kazan",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Kiev",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Kirov",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Kursk",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Kuybyshev",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Ognevoy",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Ozornoy",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Sovetskaya Belorussiya",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Sovetskaya Rossiya",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Tallinn",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Tashkent",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Tashkent µ",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["dd"],
                muse: true
            }
        },
    {
            name: "Volga",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Voroshilov",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },

    // SN Elite

        {
            name: "Arkhangelsk",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Bogatyr",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Gangut",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Gremyashchy",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Gromky",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Grozny",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Krasny Kavkaz",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Minsk",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Murmansk",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Oleg",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Pamiat' Merkuria",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },
    {
            name: "Poltava",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Sevastopol",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Soobrazitelny",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Stremitelny",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Svirepy",
            opts: {
                faction: ["northern_parliament"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },

    // Rare

    // Common

    // =========================
    // Iris Libre
    // =========================

    // FFNF Retrofit

    {
        name: "Émile Bertin (Retrofit)",
        img: "Émile_BertinKai.png",
        opts: {
            faction: ["iris_libre"],
            rarity: ["super_rare"],
            type: ["cl"],
            retrofit: true
        }
    }, 
    {
        name: "Forbin (Retrofit)",
        img: "ForbinKai.png",
        opts: {
            faction: ["iris_libre"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    }, 

    // FFNF Decisive

    {
        name: "Brest",
        opts: {
            faction: ["iris_libre"],
            rarity: ["decisive"],
            type: ["cb"]
        }
    },

    // FFNF Priority

    {
        name: "Bayard",
        opts: {
            faction: ["iris_libre"],
            rarity: ["priority"],
            type: ["cl"]
        }
    },
    {
        name: "Champagne",
        opts: {
            faction: ["iris_libre"],
            rarity: ["priority"],
            type: ["bb"]
        }
    },
    {
        name: "Orage",
        opts: {
            faction: ["iris_libre"],
            rarity: ["priority"],
            type: ["dd"]
        }
    },
    {
        name: "Saint Louis",
        opts: {
            faction: ["iris_libre"],
            rarity: ["priority"],
            type: ["ca"]
        }
    },

    // FFNF Ultra Rare

    {
        name: "Alsace",
        opts: {
            faction: ["iris_libre"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },

    // FFNF Super Rare

        {
            name: "Arromanches",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Bois Belleau",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Brennus",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Cherbourg",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["cb"]
            }
        },
    {
            name: "Guichen",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Jeanne d'Arc",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Le Hardi",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Le Terrible",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Le Triomphant",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Masséna",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Painlevé",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Richelieu",
            opts: {
                faction: ["iris_libre"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },

    // FFNF Elite

        {
            name: "Béarn",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["cv"]
            }
        },
    {
            name: "Duguay-Trouin",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Duquesne",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "L'Intrépide",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "L'Opiniâtre",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Le Téméraire",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Le Téméraire µ",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["dd"],
                muse: true
            }
        },
    {
            name: "Lyon",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Maillé Brézé",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Suffren",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Surcouf",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "Émile Bertin",
            opts: {
                faction: ["iris_libre"],
                rarity: ["elite"],
                type: ["cl"],
                original: true
            }
        },

    // FFNF Rare

    {
        name: "Forbin",
        opts: {
            faction: ["iris_libre"],
            rarity: ["rare"],
            type: ["dd"],
            original: true
        }
    },

    // Common

    // =========================
    // Vichya Dominion
    // =========================

    // MNF Retrofit

    {
        name: "Le Mars (Retrofit)",
        img: "Le_MarsKai.png",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["dd"],
            retrofit: true
        }
    }, 

    // MNF Decisive

    // MNF Priority

    {
        name: "Flandre",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["priority"],
            type: ["bb"]
        }
    },
    {
        name: "Gascogne",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["priority"],
            type: ["bb"]
        }
    },

    // MNF Ultra Rare

    {
        name: "Mogador",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["ultra_rare"],
            type: ["dd"]
        }
    },

    // MNF Super Rare

    {
        name: "Algérie",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Clemenceau",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Gascogne µ",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["bb"],
            muse: true
        }
    },
    {
        name: "Jean Bart",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Joffre",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "L'Audacieux",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "L'Indomptable",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Le Malin",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Le Malin µ",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["dd"],
            muse: true
        }
    },
    {
        name: "Marseillaise",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Strasbourg",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["super_rare"],
            type: ["bc"]
        }
    },

    // MNF Elite

    {
        name: "Dunkerque",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["bc"]
        }
    },
    {
        name: "Dupleix",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Fleuret",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Foch",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Kersaint",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "La Galissonnière",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Tartu",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Vauquelin",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Épée",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },

    // MNF Rare

    {
        name: "Le Mars",
        opts: {
            faction: ["vichya_dominion"],
            rarity: ["rare"],
            type: ["dd"],
            original: true
        }
    },

    // Common

    // =========================
    // Sardegna Empire
    // =========================

    // RN Retrofit

    // RN Decisive

    {
        name: "Napoli",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["decisive"],
            type: ["ca"]
        }
    },

    // RN Priority

    {
        name: "Marco Polo",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["priority"],
            type: ["bb"]
        }
    },
    {
        name: "Vittorio Cuniberti",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["priority"],
            type: ["dd"]
        }
    },

    // RN Ultra Rare

    {
        name: "Raffaello",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["ultra_rare"],
            type: ["bb"]
        }
    },

    // RN Super Rare

    {
        name: "Aquila",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Attilio Regolo",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Duca degli Abruzzi",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Francesco Caracciolo",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Giuseppe Garibaldi",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },
    {
        name: "Gorizia",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Impero",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["cv"]
        }
    },
    {
        name: "Leonardo da Vinci",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["ss"]
        }
    },
    {
        name: "Littorio",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Maggiore Baracca",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["ss"]
        }
    },
    {
        name: "Pola",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },
    {
        name: "Pompeo Magno",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },
    {
        name: "Roma",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Vittorio Veneto",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["bb"]
        }
    },
    {
        name: "Zara",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["super_rare"],
            type: ["ca"]
        }
    },

    // RN Elite

    {
        name: "Alberto di Giussano",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Alfredo Oriani",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Andrea Doria",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["bb"]
        }
    },
    {
        name: "Bartolomeo Colleoni",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["cl"]
        }
    },
    {
        name: "Bolzano",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Carabiniere",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Emanuele Pessagno",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Giosuè Carducci",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Giulio Cesare",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["bb"]
        }
    },
    {
        name: "Libeccio",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Maestrale",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Nicoloso da Recco",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Torricelli",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["ss"]
        }
    },
    {
        name: "Trieste",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },
    {
        name: "Ugolino Vivaldi",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "Vincenzo Gioberti",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },

    // RN Rare

    {
        name: "Conte di Cavour",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["rare"],
            type: ["bb"]
        }
    },
    {
        name: "Trento",
        opts: {
            faction: ["sardegna_empire"],
            rarity: ["rare"],
            type: ["ca"]
        }
    },

    // Common

    // =========================
    // Kingdom of Tulipa
    // =========================

    // HNLMS Retrofit

    // HNLMS Decisive

    {
        name: "Gouden Leeuw",
        opts: {
            faction: ["tulipa"],
            rarity: ["decisive"],
            type: ["ca"]
        }
    },

    // HNLMS Priority

    // HNLMS Ultra Rare

    // HNLMS Super Rare

    {
        name: "De Zeven Provinciën",
        opts: {
            faction: ["tulipa"],
            rarity: ["super_rare"],
            type: ["cl"]
        }
    },

    // HNLMS Elite

    {
        name: "Evertsen",
        opts: {
            faction: ["tulipa"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },

    // HNLMS Rare

    // HNLMS Common

    // =========================
    // Liga de Pedrería
    // =========================

    // Retrofit

    // Decisive
    
    {
        name: "Valparaíso",
        opts: {
            faction: ["liga_de_pedreria"],
            rarity: ["decisive"],
            type: ["bb"]
        }
    },

    // Priority

    // Ultra Rare

    // Super Rare

    // Elite

    // Rare

    // Common

    // =========================
    // META
    // =========================

    // Unreleased

    {
        name: "Akagi META",
        opts: {
            faction: ["meta"],
            rarity: [""],
            type: ["cv"],
            unreleased: true
        }
    },
    {
        name: "Bon Homme Richard META",
        opts: {
            faction: ["meta"],
            rarity: [""],
            type: ["cv"],
            unreleased: true
        }
    },
    {
        name: "Enterprise META",
        opts: {
            faction: ["meta"],
            rarity: [""],
            type: ["cv"],
            unreleased: true
        }
    },
    {
        name: "Essex META",
        opts: {
            faction: ["meta"],
            rarity: [""],
            type: ["cv"],
            unreleased: true
        }
    },
    {
        name: "Saratoga META",
        opts: {
            faction: ["meta"],
            rarity: [""],
            type: ["cv"],
            unreleased: true
        }
    },
    {
        name: "Soobrazitelny META",
        opts: {
            faction: ["meta"],
            rarity: [""],
            type: ["dd"],
            unreleased: true
        }
    },
    {
        name: "Takao META",
        opts: {
            faction: ["meta"],
            rarity: [""],
            type: ["ca"],
            unreleased: true
        }
    },

    // Decisive

    // Priority

    // Ultra Rare

    // Super Rare

        {
            name: "Admiral Hipper META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Algérie META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Andrea Doria META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Arizona META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Ark Royal META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Béarn META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Bristol META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Cleveland META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Elbe META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Gangut META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Glorious META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Gneisenau META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Helena META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Hiei META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Hiryuu META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Hornet META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Jintsuu META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Kawakaze META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Kirov META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Nagato META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Pamiat' Merkuria META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Queen Elizabeth META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Regensburg META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Renown META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Repulse META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Rodney META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Scharnhorst META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Souryuu META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Taihou META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "U-556 META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "Wichita META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Yorktown META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Yuudachi META",
            opts: {
                faction: ["meta"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },

    // Elite

        {
            name: "Boise META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Bolzano META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Carabiniere META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Dewey META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Dunkerque META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Erebus META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["bm"]
            }
        },
    {
            name: "Foch META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Fortune META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Fusou META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Giulio Cesare META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Grenville META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Hatakaze META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Hiyou META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Houshou META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Hunter META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Junyou META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Kasumi META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Kimberly META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Köln META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Königsberg META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "La Galissonnière META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Memphis META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Nevada META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Nürnberg META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Princeton META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Sheffield META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Trento META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Vampire META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Vestal META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["ar"]
            }
        },
    {
            name: "Yamashiro META",
            opts: {
                faction: ["meta"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },

    // Rare

    // Common

    // =========================
    // Tempesta
    // =========================

    // Retrofit

    // Decisive

    // Priority

    // Ultra Rare

    // Super Rare

    {
        name: "Amity",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixs"]
        }
    },
    {
        name: "Fancy",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixv"]
        }
    },
    {
        name: "Ganj-i-Sawai",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixm"]
        }
    },
    {
        name: "Golden Hind",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixv"]
        }
    },
    {
        name: "Lyme",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixv"]
        }
    },
    {
        name: "Mary Celeste",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixs"]
        }
    },
    {
        name: "Pearl",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixm"]
        }
    },
    {
        name: "Queen Anne's Revenge",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixm"]
        }
    },
    {
        name: "Royal Fortune",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixs"]
        }
    },
    {
        name: "São Martinho",
        opts: {
            faction: ["tempesta"],
            rarity: ["super_rare"],
            type: ["ixm"]
        }
    },

    // Elite

    {
        name: "Adventure",
        opts: {
            faction: ["tempesta"],
            rarity: ["elite"],
            type: ["ixs"]
        }
    },
    {
        name: "Adventure Galley",
        opts: {
            faction: ["tempesta"],
            rarity: ["elite"],
            type: ["ixv"]
        }
    },
    {
        name: "Dolphin",
        opts: {
            faction: ["tempesta"],
            rarity: ["elite"],
            type: ["ixs"]
        }
    },
    {
        name: "Portsmouth Adventure",
        opts: {
            faction: ["tempesta"],
            rarity: ["elite"],
            type: ["ixv"]
        }
    },
    {
        name: "Royal James",
        opts: {
            faction: ["tempesta"],
            rarity: ["elite"],
            type: ["ixv"]
        }
    },
    {
        name: "Whydah",
        opts: {
            faction: ["tempesta"],
            rarity: ["elite"],
            type: ["ixs"]
        }
    },

    // Rare

    // Common

    // =========================
    // Siren
    // =========================

    // Elite Sirens

    {
        name: "Tester",
        opts: {
            faction: ["siren"],
            type: ["bb"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Observer",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Purifier",
        opts: {
            faction: ["siren"],
            type: ["bb"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Omitter",
        opts: {
            faction: ["siren"],
            type: ["bb"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Compiler",
        opts: {
            faction: ["siren"],
            type: ["cv"],
            unreleased: true,
            siren: true
        }
    },

    // DOS

    {
        name: "Ordainer El",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },

    // Arbiters

    {
        name: "Arbiter: The Empress III",
        img: "Arbiter_The_Empress_III.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Lovers VI",
        img: "Arbiter_The_Lovers_VI.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: Strength VIII",
        img: "Arbiter_Strength_VIII.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: Temperance XIV",
        img: "Arbiter_Temperance_XIV.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Hermit IX",
        img: "Arbiter_The_Hermit_IX.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Devil XV",
        img: "Arbiter_The_Devil_XV.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Tower XVI",
        img: "Arbiter_The_Tower_XVI.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Hierophant V",
        img: "Arbiter_The_Hierophant_V.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: Death XIII (Miss D)",
        img: "Arbiter_Death_XIII_(Miss_D).png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Moon XVIII",
        img: "Arbiter_The_Moon_XVIII.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Magician I",
        img: "Arbiter_The_Magician_I.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Chariot VII",
        img: "Arbiter_The_Chariot_VII.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Star XVII",
        img: "Arbiter_The_Star_XVII.png",
        opts: {
            faction: ["siren"],
            type: ["unkown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Arbiter: The Emperor IV",
        img: "Arbiter_The_Emperor_IV.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },

    // Enforcers

    {
        name: "Enforcer III: Harvest",
        img: "Enforcer_III_HarvestChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["bb"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer VIII: Determination",
        img: "Enforcer_VIII_DeterminationChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["ca"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer IX: Exploration",
        img: "Enforcer_IX_ExplorationChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["bb"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer IX: Concealment",
        img: "Enforcer_IX_ConcealmentChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["cl"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer XIV: Equilibrium",
        img: "Enforcer_XIV_EquilibriumChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["dd"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer XIV: Harmony",
        img: "Enforcer_XIV_HarmonyChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["cv"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer VI: Attraction",
        img: "Enforcer_VI_AttractionChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["bb"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer VI: Combination",
        img: "Enforcer_VI_CombinationChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["cv"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer XV: Restriction",
        img: "Enforcer_XV_RestrictionChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["ca"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer XV: Temptation",
        img: "Enforcer_XV_TemptationChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["dd"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer V: Regulation",
        img: "Enforcer_V_RegulationChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["cl"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer V: Orthodoxy",
        img: "Enforcer_V_OrthodoxyChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["ca"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer VII: Victory",
        img: "Enforcer_VII_VictoryChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["bm"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },
    {
        name: "Enforcer VII: Pulverization",
        img: "Enforcer_VII_PulverizationChibi.png",
        opts: {
            faction: ["siren"],
            rarity: [""],
            type: ["cb"],
            unplayable: true,
            siren: true,
            chibionly:true
        }
    },

    // Observer Zero

    {
        name: "Observer Zero",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },

    // War Protocol

    {
        name: "War Protocol Fortress",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "War Protocol Scythe",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },

    // ???

    {
        name: "???",
        img: "Undefined_Light.png",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },

    // Allied Operation Siren & Project Identity

    {
        name: "TB",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Navi",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    {
        name: "Lora",
        opts: {
            faction: ["siren"],
            type: ["unknown"],
            unreleased: true,
            siren: true
        }
    },
    

    // =========================
    // Human
    // =========================

    {
        name: "Dr. Aoste",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Dr. Anzeel",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Silver Fox",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Colette",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Eutopia Savoy",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Ryouko Amahara",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Princess Maria",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Madam M",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },
    {
        name: "Lady E",
        opts: {
            faction: ["human"],
            type: ["unknown"],
            human: true
        }
    },

    // =========================
    // Collaboration
    // =========================

    // Retrofit

    // Decisive

    // Priority

    // Ultra Rare

    // Super Rare

        {
            name: "2B",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "A2",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Akane Shinjo",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Anniversary Kizuna AI",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Asuka",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Azusa Miura",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Black Heart",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "BLACK★ROCK SHOOTER",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Chihaya Kisaragi",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Chise Asukagawa",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "DEAD MASTER",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Elegant Kizuna AI",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Elise",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Fubuki (Senran Kagura)",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Golden Darkness",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Green Heart",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Haruka Amami",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Hestia",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ar"]
            }
        },
    {
            name: "Homura",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "Honoka",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Ikaruga",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Iori Minase",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Isla von Duerer",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Kaguya Yamai・Yuzuru Yamai",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Kala Ideas",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "Kasumi (Venus Vacation)",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Klaudia Valentz",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Kotori Itsuka",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Kurumi Tokisaki",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Lala Satalin Deviluke",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Lenja",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Luna",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Marie Rose",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Minato Aqua",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "Misaki",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Momo Belia Deviluke",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Nana Astar Deviluke",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Nina Friede",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Origami Tobiichi",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Patricia Abelheim",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Patty",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ss"]
            }
        },
    {
            name: "Princess Hime",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ae"]
            }
        },
    {
            name: "Purple Heart",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Reisalin Stout",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Rikka Takarada",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Ryu Lion",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Shandy",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Shirakami Fubuki",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Shizuku",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Super Gamer Kizuna AI",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bb"]
            }
        },
    {
            name: "Tamaki",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bc"]
            }
        },
    {
            name: "The 2nd",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["bbv"]
            }
        },
    {
            name: "Tohka Yatogami",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Tokino Sora",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Tsukushi",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "White Heart",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["dd"]
            }
        },
    {
            name: "Yoshino",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },
    {
            name: "Yukino",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cl"]
            }
        },
    {
            name: "Yume Minami",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["ca"]
            }
        },
    {
            name: "Yumi",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cv"]
            }
        },
    {
            name: "Yumia Liessfeldt",
            opts: {
                faction: ["collaboration"],
                rarity: ["super_rare"],
                type: ["cvl"]
            }
        },

    // Elite

    {
        name: "22",
        opts: {
            faction: ["collaboration"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
    {
        name: "33",
        opts: {
            faction: ["collaboration"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },
        {
            name: "Ami Futami",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "Blanc",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
        {
        name: "Fumiruiru",
        opts: {
            faction: ["collaboration"],
            rarity: ["elite"],
            type: ["cv"]
        }
    },
    {
            name: "Haruna Sairenji",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["bc"]
            }
        },
    {
            name: "Hass",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Kizuna AI",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Lila Decyrus",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Mami Futami",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["ss"]
            }
        },
    {
            name: "Monica",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Mujina",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Murasaki",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Murasaki Shion",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cvl"]
            }
        },
    {
            name: "Nagisa",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["bb"]
            }
        },
    {
            name: "Nakiri Ayame",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Namiko",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Natsuiro Matsuri",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["dd"]
            }
        },
    {
            name: "Neptune (Neptunia)",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cl"]
            }
        },
    {
            name: "Noire",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["ca"]
            }
        },
    {
            name: "Nyotengu",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cv"]
            }
        },
    {
            name: "Ookami Mio",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cv"]
            }
        },
    {
            name: "Ritsuko Akizuki",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["ae"]
            }
        },
        {
        name: "Saraana",
        opts: {
            faction: ["collaboration"],
            rarity: ["elite"],
            type: ["cvl"]
        }
    },
    {
            name: "Serri Glaus",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cv"]
            }
        },
        {
        name: "Uruuru",
        opts: {
            faction: ["collaboration"],
            rarity: ["elite"],
            type: ["cvl"]
        }
    },
    {
            name: "Vert",
            opts: {
                faction: ["collaboration"],
                rarity: ["elite"],
                type: ["cv"]
            }
        },
        {
        name: "Yui Kotegawa",
        opts: {
            faction: ["collaboration"],
            rarity: ["elite"],
            type: ["cv"]
        }
    },
    {
        name: "Yūyaki",
        opts: {
            faction: ["collaboration"],
            rarity: ["elite"],
            type: ["ca"]
        }
    },

    // Rare

    // Common

    // =========================
    // Universal
    // =========================

    // Retrofit

    // Decisive

    // Priority

    // Ultra Rare

    {
        name: "Universal Bulin",
        opts: {
            faction: ["universal"],
            rarity: ["elite"],
            type: ["dd"]
        }
    },

    // Super Rare

    {
        name: "Prototype Bulin MKII",
        opts: {
            faction: ["universal"],
            rarity: ["super_rare"],
            type: ["dd"]
        }
    },

    // Elite

    {
        name: "Specialized Bulin Custom MKIII",
        opts: {
            faction: ["universal"],
            rarity: ["ultra_rare"],
            type: ["dd"]
        }
    },

    // Rare

    // Common

];