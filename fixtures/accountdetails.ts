export function generateAccountDetails() {
    const prefixes = [
        // Pop Culture & Sci-Fi
        'Stark', 'Wayne', 'Oscorp', 'Cyberdyne', 'Umbrella', 'Massive', 'InGen', 'Dharma', 'Aperture', 'Black Mesa',
        'Weyland', 'Yutani', 'Tyrell', 'Soylent', 'OCP', 'Globex', 'Vandelay', 'Duff', 'Acme', 'Wonka',
        'Gringotts', 'Ollivanders', 'Daily Planet', 'LexCorp', 'Queen', 'Palmer', 'Choam', 'RDA', 'Blue Sun', 'Slusho',
        'Abstergo', 'Vault-Tec', 'RobCo', 'Nuka-Cola', 'Ryan', 'Fontaine', 'Atlas', 'Hyperion', 'Maliwan', 'Jakobs',
        'Torgue', 'Dahl', 'Vladof', 'Arasaka', 'Militech', 'Kang-Tao', 'Biotechnica', 'Petrochem', 'Zetatech', 'SovOil',
        'Lazarus', 'Roxxon', 'Hammer', 'Trask', 'Worthington', 'Rand', 'Spade', 'Mars', 'Jupiter', 'Saturn',
        // Anime & Manga
        'Capsule', 'Red Ribbon', 'Speedwagon', 'Kame House', 'Hero', 'Konoha', 'Gotei', 'Survey', 'Nerv', 'Tekkadan',
        'Future', 'Foundation', 'Millefiore', 'Vongola', 'Simon', 'Anti-Spiral', 'Nudist Beach', 'Dollars', 'Black Knights', 'Britannia',
        'Seele', 'Gehirn', 'Marduk', 'WILLE', 'Ratatoskr', 'Fenrir', 'Schicksal', 'Anti-Entropy', 'World Serpent',
        'Rhodes Island', 'Penguin', 'Black Steel', 'Rhine Lab', 'Victoria', 'Ursus', 'Lungmen', 'Kazimierz', 'Leithanien',
        'Laterano', 'Siracusa', 'Higashi', 'Yan', 'Sargon', 'Minos', 'Iberia', 'Bolivar', 'Columbia', 'Sami', 'Kjerag',
        'Straw Hat', 'Baroque Works', 'Galley-La', 'Marine', 'World Govt', 'Akatsuki', 'Anbu', 'Root', 'Uchiha', 'Hyuga',
        'Soul Society', 'Hueco Mundo', 'Xcution', 'Espada', 'Sternritter', 'Amestris', 'Homunculus', 'Xing', 'Ishval',
        'Scout', 'Garrison', 'Jaegerist', 'Marley', 'Eldia', 'Zeon', 'Federation', 'AEUG', 'Londo Bell', 'Celestial Being',
        'Teiwaz', 'Passione', 'Joestar', 'Dio', 'UA', 'Villain', 'Meta Liberation', 'Demon Slayer', 'Hashira', 'Twelve Kizuki',
        'Jujutsu', 'Zenin', 'Kamo', 'Gojo', 'Hunter', 'Zoldyck', 'Phantom Troupe', 'Chimera Ant', 'Fairy Tail', 'Sabertooth',
        'Tartaros', 'Section 9', 'Tachikoma', 'Neo-Tokyo', 'Kaneda', 'Tetsuo', 'Team Rocket', 'Silph', 'Devon', 'Macro Cosmos', 'Aether',
        // MCU
        'SHIELD', 'Hydra', 'AIM', 'Pym', 'Ten Rings', 'Wakanda', 'Asgard', 'Xandar', 'Nova', 'Kree', 'Skrull', 'Ravagers',
        'SWORD', 'Damage Control', 'Daily Bugle', 'Baxter', 'Latveria', 'Ultron', 'TVA', 'Sanctum', 'Kamar-Taj',
        // DC Universe
        'Kord', 'S.T.A.R.', 'Cadmus', 'Argus', 'Checkmate', 'AmerTek', 'Ferris', 'Stagg', 'Janus', 'Daggett',
        'Sionis', 'GothCorp', 'Project', 'Task Force', 'Justice', 'Legion', 'Society', 'Infinity', 'New Genesis',
        'Apokolips', 'Krypton', 'Thanagar', 'Oa', 'Midway', 'Central', 'Keystone', 'Coast', 'Fawcett', 'Bludhaven',
        'Arkham', 'Blackgate', 'Belle Reve', 'Fortress', 'Watchtower', 'Hall of Justice', 'Titans', 'Doom'
    ];
    const suffixes = ['Industries', 'Enterprises', 'Corp', 'Systems', 'Dynamics', 'Labs', 'Association', 'Group', 'Logistics', 'Solutions', 'Tech', 'Global', 'Unlimited', 'Works', 'Motors', 'Energy', 'Pharmaceuticals', 'Robotics'];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)] || 'Unknown';
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)] || 'Corp';
    const uniqueId = Math.random().toString(36).substring(2, 7); // 5 char random string for email only

    const name = `${randomPrefix} ${randomSuffix}`;
    const email = `${randomPrefix.toLowerCase().replace(/\s/g, '')}.${uniqueId}@example.com`;

    return {
        name,
        email
    };
}
