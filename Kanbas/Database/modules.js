const modules = [
    {
        "_id": "M101",
        "name": "Introduction to Rocket Propulsion",
        "description": "Basic principles of rocket propulsion and rocket engines.",
        "course": "RS101",
        "lessons": [
                {
                "_id": "L101",
                "name": "History of Rocketry",
                "description": "A brief history of rocketry and space exploration.",
                "module": "M101"
                },
                {
                "_id": "L102",
                "name": "Rocket Propulsion Fundamentals",
                "description": "Basic principles of rocket propulsion.",
                "module": "M101"
                },
                {
                "_id": "L103",
                "name": "Rocket Engine Types",
                "description": "Overview of different types of rocket engines.",
                "module": "M101"
                }
        ]
    },
    {
        "_id": "M102",
        "name": "Fuel and Combustion",
        "description": "Understanding rocket fuel, combustion processes, and efficiency.",
        "course": "RS101",
        "lessons": [
                {
                "_id": "L201",
                "name": "Rocket Fuel",
                "description": "Overview of different types of rocket fuels.",
                "module": "M102"
                },
                {
                "_id": "L202",
                "name": "Combustion Processes",
                "description": "Understanding combustion processes and efficiency.",
                "module": "M102"
                },
                {
                "_id": "L203",
                "name": "Combustion Instability",
                "description": "Understanding combustion instability and mitigation.",
                "module": "M102"
                }
        ]
    },
    {
        "_id": "M103",
        "name": "Nozzle Design",
        "description": "Principles of rocket nozzle design and performance optimization.",
        "course": "RS101",
        "lessons": [
                {
                "_id": "L301",
                "name": "Nozzle Design",
                "description": "Overview of different types of rocket nozzles.",
                "module": "M103"
                },
                {
                "_id": "L302",
                "name": "Nozzle Performance",
                "description": "Understanding nozzle performance and efficiency.",
                "module": "M103"
                },
                {
                "_id": "L303",
                "name": "Nozzle Optimization",
                "description": "Optimizing nozzle design for specific applications.",
                "module": "M103"
                }
        ]
    },
    {
        "_id": "M201",
        "name": "Fundamentals of Aerodynamics",
        "description": "Basic aerodynamic concepts and fluid dynamics principles.",
        "course": "RS102"
    },
    {
        "_id": "M202",
        "name": "Subsonic and Supersonic Flow",
        "description": "Understanding subsonic and supersonic aerodynamic behaviors.",
        "course": "RS102"
    },
    {
        "_id": "M203",
        "name": "Aerodynamic Heating",
        "description": "Study of aerodynamic heating and thermal protection systems.",
        "course": "RS102"
    },
    {
        "_id": "M301",
        "name": "Spacecraft Structural Design",
        "description": "Fundamentals of designing spacecraft structures and materials selection.",
        "course": "RS103"
    },
    {
        "_id": "M302",
        "name": "Orbital Mechanics",
        "description": "Understanding orbital dynamics and mission planning.",
        "course": "RS103"
    },
    {
        "_id": "M303",
        "name": "Spacecraft Systems Engineering",
        "description": "Overview of spacecraft systems and subsystems engineering.",
        "course": "RS103"
    },
    {
        "_id": "M401",
        "name": "Fundamentals of Organic Chemistry",
        "description": "Introduction to the basic principles of organic chemistry, including molecular structure, functional groups, and reaction mechanisms.",
        "course": "RS104"
    },
    {
        "_id": "M402",
        "name": "Organic Reactions and Mechanisms",
        "description": "Understanding organic reactions, including substitution, elimination, and addition reactions, along with their mechanisms.",
        "course": "RS104"
    },
    {
        "_id": "M403",
        "name": "Spectroscopy and Structural Determination",
        "description": "Techniques for determining the structure of organic compounds using NMR, IR, and mass spectrometry.",
        "course": "RS104"
    },
    {
        "_id": "M501",
        "name": "Fundamentals of Inorganic Chemistry",
        "description": "Introduction to the basic principles of inorganic chemistry, including molecular structure, functional groups, and reaction mechanisms.",
        "course": "RS105"
    },
    {
        "_id": "M502",
        "name": "Coordination Chemistry",
        "description": "Study of coordination compounds, including their structures, bonding, and applications in various fields.",
        "course": "RS105"
    },
    {
        "_id": "M503",
        "name": "Solid State Chemistry",
        "description": "Exploration of the properties and structures of solid inorganic materials, including crystallography and electronic properties.",
        "course": "RS105"
    },
    {
        "_id": "M601",
        "name": "Thermodynamics",
        "description": "Study of the principles of energy, heat, and work in chemical systems, focusing on the thermodynamics.",
        "course": "RS106"
    },
    {
        "_id": "M602",
        "name": "Quantum Chemistry",
        "description": "Exploration of quantum mechanics and its applications to chemical systems, including wave-particle duality and molecular orbital theory.",
        "course": "RS106"
    },
    {
        "_id": "M603",
        "name": "Chemical Kinetics",
        "description": "Understand the rates of chemical reactions, factors affecting reaction rates, and the mechanisms behind chemical processes.",
        "course": "RS106"
    },
    {
        "_id": "M701",
        "name": "Quenya: Language of the Elves",
        "description": "Study of Quenya, one of the Elvish languages, including its grammar, vocabulary, and writing systems.",
        "course": "RS107"
    },
    {
        "_id": "M702",
        "name": "Sindarin: The Grey Elves' Tongue",
        "description": "Exploration of Sindarin, another prominent Elvish language, focusing on its linguistic structure, literature, and cultural significance.",
        "course": "RS107"
    },
    {
        "_id": "M703",
        "name": "The Languages of Dwarves and Men",
        "description": "Overview of the languages spoken by the Dwarves and Men in Middle-earth, including Khuzdul and Westron, and their cultural contexts.",
        "course": "RS107"
    },
    {
        "_id": "M801",
        "name": "The Council of Elrond",
        "description": "Analysis of the meetings that united different races of Middle-earth against Sauron, focusing on diplomatic strategies and outcomes.",
        "course": "RS108"
    },
    {
        "_id": "M802",
        "name": "Cultural Exchanges",
        "description": "Exploration of cultural diplomacy between Elves, Men, and Dwarves, examining key historical events and treaties.",
        "course": "RS108"
    },
    {
        "_id": "M803",
        "name": "Conflict Resolution",
        "description": "Overview of the methods used in Middle-earth for resolving inter-species conflicts and promoting peace, drawing lessons for modern diplomacy.",
        "course": "RS108"
    },
    {
        "_id": "M901",
        "name": "The Origins of Magic",
        "description": "Understand the sources and evolution of magical practices in Middle-earth, including the role of the Ainur.",
        "course": "RS109"
    },
    {
        "_id": "M902",
        "name": "Famous Wizards and Their Arts",
        "description": "Study of notable wizards, focusing on their magical abilities and impact on Middle-earth.",
        "course": "RS109"
    },
    {
        "_id": "M903",
        "name": "Magical Artifacts",
        "description": "Study of powerful magical objects and their significance in the history and culture of Middle-earth.",
        "course": "RS109"
    },
    {
        "_id": "M1001",
        "name": "Foundations of Democratic Education",
        "description": "Overview of the principles and theories underlying democratic education, emphasizing equity and participation.",
        "course": "RS110"
    },
    {
        "_id": "M1002",
        "name": "Participatory Learning Models",
        "description": "Understand the various models for participatory learning that empower students and encourage civic engagement.",
        "course": "RS110"
    },
    {
        "_id": "M1003",
        "name": "Assessing Democratic Practices",
        "description": "Study the methods for evaluating and improving democratic practices in educational settings, including case studies and best practices.",
        "course": "RS110"
    },
    {
        "_id": "M1101",
        "name": "Historical Contexts of Independence",
        "description": "Learn about the historical movements that led to independence across different cultures, focusing on key figures and ideologies.",
        "course": "RS111"
    },
    {
        "_id": "M1102",
        "name": "Philosophical Foundations of Liberation",
        "description": "Learn about the philosophical arguments and theories surrounding liberation movements, emphasizing the role of autonomy and justice.",
        "course": "RS111"
    },
    {
        "_id": "M1103",
        "name": "Case Studies in Liberation Philosophy",
        "description": "Analysis of specific case studies of liberation movements and their philosophical implications in contemporary society.",
        "course": "RS111"
    },
    {
        "_id": "M1201",
        "name": "Pedagogical Theories of the 19th Century",
        "description": "Learn about the key educational theories and practices that emerged during the early 19th century.",
        "course": "RS112"
    },
    {
        "_id": "M1202",
        "name": "Influential Educators",
        "description": "Study significant educators like Johann Heinrich Pestalozzi and Horace Mann in shaping modern education.",
        "course": "RS112"
    },
    {
        "_id": "M1203",
        "name": "Education and Social Reform",
        "description": "Overview of how early 19th century educational innovations contributed to broader social reform movements.",
        "course": "RS112"
    },
    {
        "_id": "M1301",
        "name": "Biblical Principles of Ethics",
        "description": "Study of ethical principles derived from biblical texts and their application to modern ethical dilemmas.",
        "course": "RS113"
    },
    {
        "_id": "M1302",
        "name": "Historical Perspectives on Christian Ethics",
        "description": "Overview of the development of Christian ethical thought throughout history, including key theologians and movements.",
        "course": "RS113"
    },
    {
        "_id": "M1303",
        "name": "Contemporary Ethical Issues",
        "description": "Understand the contemporary ethical issues within a Christian framework, exploring differing viewpoints and solutions.",
        "course": "RS113"
    },
    {
        "_id": "M1401",
        "name": "The Life of Jesus",
        "description": "Understand the historical and theological significance of Jesus Christ's life and teachings.",
        "course": "RS114"
    },
    {
        "_id": "M1402",
        "name": "Apostolic Teachings and Writings",
        "description": "Study of the teachings and writings of the apostles, focusing on their impact on early Christian communities.",
        "course": "RS114"
    },
    {
        "_id": "M1403",
        "name": "The Spread of Early Christianity",
        "description": "Analysis of how early Christianity spread throughout the Roman Empire and its cultural implications.",
        "course": "RS114"
    },
    {
        "_id": "M1501",
        "name": "Models of Christian Leadership",
        "description": "Overview of the various leadership models within Christian communities and their effectiveness in service.",
        "course": "RS115"
    },
    {
        "_id": "M1502",
        "name": "Service as a Christian Ethos",
        "description": "Understand the concept of service in Christianity and its practical applications in community leadership.",
        "course": "RS115"
    },
    {
        "_id": "M1503",
        "name": "Community Engagement and Development",
        "description": "Understand the strategies and frameworks for engaging Christian communities in service and leadership roles to promote social justice.",
        "course": "RS115"
    },
    {
        "_id": "M1601",
        "name": "The Essence of Sufism",
        "description": "An introduction to Sufi philosophy, focusing on key concepts such as love, unity, and the quest for the divine.",
        "course": "RS116"
    },
    {
        "_id": "M1602",
        "name": "Mystical Practices in Sufism",
        "description": "Examination of the mystical practices of Sufism, including meditation, poetry, and music as pathways to enlightenment.",
        "course": "RS116"
    },
    {
        "_id": "M1603",
        "name": "Sufi Poets and Their Influence",
        "description": "Study of the works of renowned Sufi poets and their impact on both literature and spirituality.",
        "course": "RS116"
    },
    {
        "_id": "M1701",
        "name": "Core Islamic Ethical Principles",
        "description": "Overview of the fundamental ethical teachings found in the Qur'an and Hadith.",
        "course": "RS117"
    },
    {
        "_id": "M1702",
        "name": "Islamic Ethics in Contemporary Society",
        "description": "Study of how Islamic ethical principles can be applied to modern issues such as bioethics, social justice, and environmental stewardship.",
        "course": "RS117"
    },
    {
        "_id": "M1703",
        "name": "Comparative Ethical Frameworks",
        "description": "Analysis of Islamic ethics alongside other ethical frameworks, highlighting similarities and differences.",
        "course": "RS117"
    },
    {
        "_id": "M1801",
        "name": "Foundations of Islamic Esotericism",
        "description": "An introduction of the basic concepts and historical development of Islamic esoteric thought and practices.",
        "course": "RS118"
    },
    {
        "_id": "M1802",
        "name": "Key Figures in Islamic Mysticism",
        "description": "Study of influential figures in Islamic esotericism and their contributions to mystical thought.",
        "course": "RS118"
    },
    {
        "_id": "M1803",
        "name": "Practical Aspects of Sufism",
        "description": "Understand the practical practices within Sufism, including meditation, rituals, and community involvement.",
        "course": "RS118"
    },
    {
        "_id": "M1901",
        "name": "Historical Practices of Environmental Management",
        "description": "Study of ancient Chinese techniques for environmental stewardship and resource management.",
        "course": "RS119"
    },
    {
        "_id": "M1902",
        "name": "Philosophical Foundations of Ecology in China",
        "description": "Overview of philosophical ideas related to nature and ecology in ancient Chinese thought, focusing on Confucianism and Daoism.",
        "course": "RS119"
    },
    {
        "_id": "M1903",
        "name": "Case Studies of Ancient Chinese Innovations",
        "description": "Analysis of specific case studies highlighting innovative practices in ancient China that contributed to environmental sustainability.",
        "course": "RS119"
    },
    {
        "_id": "M2001",
        "name": "Mythological Heroes and Leadership",
        "description": "An introduction of the key figures in Chinese mythology and the leadership qualities they exemplify.",
        "course": "RS120"
    },
    {
        "_id": "M2002",
        "name": "Lessons from Folklore and Fables",
        "description": "Analysis of popular folklore and fables in China that impart moral and leadership lessons.",
        "course": "RS120"
    },
    {
        "_id": "M2003",
        "name": "Cultural Impact of Mythology on Leadership",
        "description": "Learn how Chinese mythology has influenced contemporary leadership practices and societal values.",
        "course": "RS120"
    },
    {
        "_id": "M2101",
        "name": "Principles of Ancient Hydraulic Engineering",
        "description": "Study of the fundamental principles and techniques of hydraulic engineering used in ancient civilizations.",
        "course": "RS121"
    },
    {
        "_id": "M2102",
        "name": "Technological Innovations in Water Management",
        "description": "Understand the significant technological advancements in water management in ancient societies such as Mesopotamia and China.",
        "course": "RS121"
    },
    {
        "_id": "M2103",
        "name": "Impact of Hydraulic Engineering on Society",
        "description": "An overview of the social, economic, and environmental impacts of hydraulic engineering projects in ancient civilizations.",
        "course": "RS121"
    }
];

export default modules;