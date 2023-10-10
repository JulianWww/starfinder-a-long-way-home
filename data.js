const data = [
  {
    "office": "Imperial Throne",
    "name": "Long",
    "rank": "Empress",
    "data": "The murai imperial throne has been en charge of the country since there founding. Beeing the strongest claiments to the cresanthemum throne of japan, they formed the murai after they formed and lead the murai to become one of the leading powers of the galaxy after ww3.",

    "id": "throne"
  },
    {
      "name":"Ian Devling",
      "office":"Chief of the Armed Forces",
      "rank": "Fleet Admiral",
      "data": "The general staf of the armed forces of the Murai empire. Mostly reside within the Kyoto orbital military instalations. In charge of leading the Military on a high level.",

      "id":"gCom",
      "parentId":"throne",
      "size":""
    },
    {
      "office": "SoCom (Special Operations Command)",
      "name": "Himura",
      "rank": "Grand Admiral",
      "data": "Murai special operations command. Offically operationg out of Perl Bay. In charge of sec ops, intelligence, ethics and compliance and counterintelligence to name a few",
    
      "id": "SoCom",
      "parentId":"gCom",
    },
      {
        "office": "SPG (Special project group)",
        "name": "Silver",
        "rank":  "Admiral",
        "data": "the catch all group for everything that does not fit into any oth the other services.",

        "id": "SPG",
        "parentId": "SoCom"
      },
        {
          "office": "Project Dandelion (black black black)",
          "name": "Himura",
          "rank": "Grand Admiral",
          "data": "Project dandelion is one of the most closely guarded secrets of the Murai with only ALICE and Himura currently aware of its existance outside of the project group itself. Not even Himura and alice know there exact locations. The main project is run by a distributed system with no element knowing the full truth.",

          "id": "pdandelion",
          "parentId": "SPG"
        },
        {
          "office": "Project ARTHEMIS",
          "name": get_name(),
          "rank": "Vice Admiral",
          "data": "Project ARTHEMIS is one of socom greatest strategic assets. It is composed of a quasar. The jet of witch is focussed using balck and white hole arrays befor beeing passed though a wormhole. The wormhole is passed to a focussing array that stacks stack a tenth of a seccond onto a single picosecond of pulse. This is then passed to the main cannones of the battlehip arthemis and other such ships.",

          "id": "parthemis",
          "parentId": "SPG"
        },
        {
          "office": "Project ALICE",
          "name": get_name(),
          "rank": "Vide Admiral",
          "data": "Project Alice, one of if not the greatest achivement in AI and computing. It consists of a network of matrioshka brais and dyson sphers build using van Neuman probes. The group in SoCom now consists of 3 peaoples as the System is self running.",

          "id": "pALICE",
          "parentId": "SPG"
        },
          {
            "office": "Project Overloard",
            "name": "ALICE",
            "rank": "",
            "data": "Project overloard is a running project in SoCom. It consists of infiltrating, installing backdors and other cyber attacks on all devices in the galaxy. Some of there accivements is stealing the encryption keys of most major powers in the galaxy. Furthermore they stole the ID code authority private keys to fake id codes.",

            "id": "pOverloard",
            "parentId": "pALICE"
          },
          {
            "office": "Project Selene",
            "name": get_name(),
            "rank": "Rear Admiral",
            "data": "project Selene is a strategic information system that is able to simulate possible future trajectories of human development based on historical data. It is so good, that is has been able to identify key figures and how to influence them to accive the optimal results for the murai. This is also the project that first scouted Kimly and Ostap.",

            "id": "pSelene",
            "parentId": "pALICE",
          },
      {
        "office": "SOAF (Special Opperations assault Force)",
        "name": get_name(),
        "rank": "General",
        "data": "The special operation group. They usually go down onto a planet or infiltrate a structure perform an operation and get the fuck out of there. They will usually use SoCom Naval assets to get to and from the deployment site.",

        "id": "soaf",
        "parentId": "SoCom"
      },
      {
        "office": "ECO (Ethics and Compliance Office)",
        "name": "Scerandum",
        "rank": "Admiral",
        "data": "The ECO is in chage of assuring the AF act ethically and comply with regs, by doing all the unethical and questinable stuff themselves. They are an intelligence and counterintelligence agency",

        "id": "ECO",
        "parentId": "SoCom",
      },
      {
        "office": "SIA (Special Intelligence Agency)",
        "name": "Vassil",
        "rank": "Admiral",
        "data": "Originally a branch of the UIA, the SIA broke of because they where doing shit that was to sketchy for UIA.",
        
        "id": "sia",
        "parentId": "SoCom"
      },
      {
        "office": "S3O (Special Strategic Operations Service)",
        "name": "lugal",
        "rank": "Admiral",
        "data": "The special operations eqivilatt to SOS. They are the ones dropping antimater stars onto our star if you piss them of. HEHE",

        "id": "ssoc",
        "parentId": "SoCom"

      },
      //...generateFleet("SATan (Special Assault TActics fleet)", 4, 3, 3, "The special Assualt Tactics Fleet is a naval special operations group that is usually used to get strike teams to a location or do some wanky bullshit to get an advantage.", "SoCom"),
    {
      "office": "NavCom (Naval Command)",
      "name": "Ishida",
      "rank": "Takaji",
      "rank": "Grand Admiral",
      "data": "The Navy is in chage of operations in space. They operate and mainain the murai warfleet. They do not contain the Marine core that is (GCom). Pilotes and in atmosphere operations are there perview thought. They are by far the largest command",

      "id": "NavCom",
      "parentId": "gCom"
    },
      {
        "office": "NIA (Naval Intellicen Agency)",
        "name": "Paultrice",
        "rank": "Admiral",
        "data": "The NIA is an intelligence agency that focusses less on balck ops and more on correlating and analysing data for the navy. They also do internal investigations. They have however worked with both Himura and ECO before.",

        "id": "NIA",
        "parentId": "NavCom"
      },
        {
          "office": "Helios",
          "name": get_name(),
          "rank": "Vice Admiral",
          "data": "Helios is a netork of sensors, sips, relay stations, and informats spread across human space. It monitores and tracks the movement of all ships within its reach. Thus the Murai have always had an information advantage and have located countless dark colonies",

          "id": "Helios",
          "parentId": "NIA"
        },
        {
          "office": "Apollo",
          "name": get_name(),
          "rank": "Vice Admiral",
          "data": "The Apollo project is an internal project. It is one of the worst guarded secrets of the Murai intelligence service. Officaly it is a counter intelligence group. Unoffically it is a counter intelligence group but it runs counterintelligence, hiding the existance of other agencies.",

          "id": "Apollo",
          "parentId": "NIA"
        },
      {
        "office": "Fleet Command",
        "name": "Yamato",
        "rank": "Admiral",
        "data": "The command group of the naval fleet assets.",

        "id": "Fleet",
        "parentId": "NavCom"

      },
      {
        "office": "SOS",
        "name": "Emmen",
        "rank": "Admiral",
        "data": "The non strategic deterent group. The operate multiple fingers of death and have an unfortunate habit of gametheorizing everything. and I mean everything, including the accuisition of tea. The name is a joke as none of there targets have ever sent an SOS, as far as anyone could tell.",

        "id": "sos",
        "parentId": "NavCom"
      },
    // ...generateFleet("HFlee (Home Fleet)", 5, 6, 5, "The home fleet is assigned to protect the area around the murai coreworlds. It is often used as a home rotation for other fleet elements"),
    // ...generateFleet("1Flee (First Fleet)", 5, 6, 5, ""),
    // ...generateFleet("2Flee (Second Fleet)", 5, 6, 5, ""),
    // ...generateFleet("3Flee (Third Fleet)", 5, 6, 5, ""),
    // ...generateFleet("4Flee (Fourth Fleet)", 5, 6, 5, ""),
    // ...generateFleet("5Flee (Fifth Fleet)", 5, 6, 5, ""),
    // ...generateFleet("6Flee (Sixth Fleet)", 5, 6, 5, ""),
    // ...generateFleet("7Flee (Seventh Fleet)", 5, 6, 5, ""),
    // ...generateFleet("8Flee (eith Fleet)", 5, 6, 5, ""),
    // ...generateFleet("9Flee (ninth Fleet)", 5, 6, 5, ""),
    // ...generateFleet("10Flee (tenth Fleet)", 5, 6, 5, ""),
    // ...generateFleet("11Flee (eleventh Fleet)", 5, 6, 5, ""),
    {
      "office": "PCom (Planetary Command)",
      "name": "Ieyasu",
      "rank": "General",
      "data": "The Ground or planetary command is in charge of all operations on the survace of a celestial body or compat operations within a ship. They have warbots and operations among other techniques to shoot stuff. While on deployment they are usually subordonate to the Navy (while on ship)",

      "id": "GCom",
      "parentId": "gCom"
    },
      {
        "office": "NBR (Nanites Bilogical and Radiation ops group)",
        "name": "Dawkins",
        "rank": "Liutenant General",
        "data": "The Nanites Bilogical and Radiation operations gorup are in charge of all operations that involve putting nanites, bioweapons or radiation doses into biospheres.",

        "id": "NBR",
        "parentId": "GCom"
      },
        {
          "office": "NBRD (Defence",
          "name": get_name(),
          "rank": "Major General",
          "data": "Runs defence against NBR Threats",

          "id": "nbrd",
          "parentId": "NBR"
        },
        {
          "office": "NBRO (Offence)",
          "name": get_name(),
          "rank": "Major General",
          "data": "Performs attacks on others using NBR. Usually using navy strike cruisers",

          "id": "nbro",
          "parentId": "NBR",
        },
      {
        "office": "BGF (Ground Forces (and planes))",
        "name": "Bob",
        "rank": "Major General",
        "data": "It is often questioned why the BGF is part of the armed forces and not police. They stand around all day guarding shit and dooing counter terrorism. They are quite good at it.",

        "id": "bgf",
        "parentId": "GCom"
      },
    {
      "office": "LCom (Logistic Command)",
      "name": "Monogatari",
      "rank": "Grand Admiral",
      "data": "Quite possibly the most important yet underapriciated commands. They are in chage of getting the right stuff to to right place at the right time. They mostly operate wearhouses and move the huge as wearhmole capable ships. The navy does all the defending thought",

      "id": "LCom",
      "parentId": "gCom"
    },
    {
      "office": "CyCom (Cyber Command)",
      "name": "Kusanagi",
      "rank": "Grand Admiral",
      "data": "The Cyber command is charge of keeping computer systems safe from attacks. There are Cyber groups in every department and all (except SoCom (partially)) report back to CyCom at some point.",

      "id": "cyCom",
      "parentId": "gCom"
    },
      {
        "office": "Cobalt",
        "name": "",
        "rank": "Admiral",
        "data": "The Cyber operations center of the Murai Cyber command. They monitor and operate the Cyber assets. Well mostly supervise the ai. Also most of them are AI or infomorphs.",

        "id": "cocy",
        "parentId": "cyCom",
      },
      {
        "office": "Crymson",
        "name": "Armitage",
        "rank": "Admiral",
        "data": "The offensive side of Cyber operations they perform penetration testing and more importantly the ability to hack others.",
        "parentId": "cyCom",
        "id": "crcy"
      },
      {
        "office": "Cyan",
        "name": "Hiro",
        "rank": "Admiral",
        "data": "CyComs physical intrusions Section, Muon guns, Social engenering and fancy USB sticks",
        "parentId": "cyCom",
        "id": "cycy"
      },
      {
        "office": "CyAi",
        "name": "",
        "rank": "Admiral",
        "data": "Tha AI development center of the Murai military, one of the main contributers to project wonderland, matrix and white rabbit.",

        "id": "caAi",
        "parentId": "cyCom"
      },
      {
        "office": "lime",
        "name": get_name(),
        "rank": "Admiral",
        "data": "Lime is the Military and comuter assets creation and operation. They build and operate computer assets. This includes ship computer design, network operations, running the Matrix, etc.",

        "id": "cyli",
        "parentId": "cyCom"
      },
        {
          "office": "Project Wonderland",
          "name": get_name(),
          "rank": "Vice Admiral",
          "data": "Project wonderland was a von Neuman based Matrioschka brain cluster building system, powerd by dyson spheres. It was originally inteded as distributable computing resources. Just before the Cammy war the project was moved to SoCom and renamed to project ALICE.",
          
          "id": "pWonderland",
          "parentId": "cyli"
        },
   {
    "office": "UIA",
    "name": "",
    "rank": "Administrator",
    "data": "The civilian secreet service.",

    "id": "",
    "parentId": "throne",
  },
  {
    "office": "Imperial Council",
    "data": "An elected council of representatives that work with the throne to descide policy (mostly) cough alice cough",

    "id": "council",
    "parentId": "throne"
  },
    {
      "office": "DES (Department of education and science)",
      "name": "Tsherter",
      "rank": "dr.",
      "data": "Builds all the fancy tools that are used by the murai including the trancendance programm.",

      "id": "des",
      "parentId": "council"
    },
      {
        "office": "Trancendance Program",
        "name": get_name(),
        "rank": "Doctor",
        "data": "Probably the project the Murai are most famous for. The trancendance program is the murai transhuman project. ",
        
        "id": "trancendance",
        "parentId": "des"
      },
      {
        "office": "Fleet development Project",
        "name": get_name(),
        "rank": "Doctor",

        "id": "fleet dev",
        "parentId": "des"
      },
      {
        "office": "project Matrix",
        "name": get_name(),
        "rank": "Doctor",
        "data": "Matrix is the Murai integrated combat system. It integrats ships, suits, ai, humans (trancendance), the murai comunication system, warbots, etc. Basically erverything the Murai militairy uses during combat.",
      
        "id": "pMatrix",
        "parentId": "des"
      },
      {
        "office": "project White Rabbit",
        "name": get_name(),
        "rank": "Doctor",
        "data": "White Rabbit is the AI development project. It was instremental in developping the Murai integrated ship AI as well as android AI's. One of there greates accivements is project wonderland. They also wrote ARIA",
        
        "id": "pWhiteRabbit",
        "parentId": "des"
      },
    {
      "office": "Department of Secutiry",
      "name": "",
      "rank": "Minister",
      "data": "",

      "id": "dsec",
      "parentId": "council"
    },
      {
        "office": "Police",
        "name": "",
        "rank": "Commisioner",
        "data": "",

        "id": "police",
        "parentId": "dsec"
      },
      {
        "office": "fire department",
        "name": "",
        "rank": "Comissioner",
        "data": "",

        "id": "fireDep",
        "parentId": "dsec",
      },
      {
        "office": "health care",
        "name": "",
        "rank": "Minister",
        "data": "",

        "id": "hcare",
        "parentId": "dsec"
      },
    {
      "office": "other political bullshit that nobody cares about",
      "id": "bullshit",
      "parentId": "council"
    }
]