export function generateAccountDetails() {
    const prefixes = [
        // Pop Culture & Sci-Fi
        'Stark', 'Wayne', 'Oscorp', 'Cyberdyne', 'Umbrella', 'Massive', 'InGen', 'Dharma', 'Aperture', 'Black Mesa',
        'Weyland', 'Yutani', 'Tyrell', 'Soylent', 'OCP', 'Globex', 'Vandelay', 'Duff', 'Acme', 'Wonka',
        'Gringotts', 'Ollivanders', 'Daily Planet', 'LexCorp', 'Queen', 'Palmer', 'Choam', 'RDA', 'Blue Sun', 'Slusho',
        'Abstergo', 'Vault-Tec', 'RobCo', 'Nuka-Cola', 'Ryan', 'Fontaine', 'Atlas', 'Hyperion', 'Maliwan', 'Jakobs',
        'Torgue', 'Dahl', 'Vladof', 'Arasaka', 'Militech', 'Kang-Tao', 'Biotechnica', 'Petrochem', 'Zetatech', 'SovOil',
        'Lazarus', 'Roxxon', 'Hammer', 'Trask', 'Worthington', 'Rand', 'Spade', 'Mars', 'Jupiter', 'Saturn', 'Earth',
        'Hawk', 'Weber', 'Mary',
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

    const randomstreet = [
        '123 Main St', '456 Elm St', '789 Oak St', '101 Pine St', '202 Maple St',
        '303 Birch St', '404 Cedar St', '505 Walnut St', '606 Cherry St', '707 Oak St',
        '789 Pine St', '101 Maple St', '202 Birch St', '303 Cedar St', '404 Walnut St',
        '505 Cherry St', '606 Oak St', '707 Pine St', '808 Maple St', '909 Birch St',
        '99 Arc St', '111 Ash St', '222 Spruce St', '333 Poplar St', '444 Magnolia St',
        '555 Willow St', '666 Cypress St', '777 Redwood St', '888 Sycamore St', '999 Palm St',
        '135 Hickory St', '246 Chestnut St', '357 Dogwood St', '468 Fir St', '579 Alder St',
        '680 Beech St', '791 Cottonwood St', '802 Juniper St', '913 Sequoia St', '1024 Linden St',
        '1135 Locust St', '1246 Mulberry St', '1357 Persimmon St', '1468 Olive St', '1579 Peach St',
        '1680 Plum St', '1791 Pear St', '1802 Apple St', '1903 Grapevine St', '2004 Citrus St',
        ''
    ];
    const randomcity = [
        // Real U.S. cities
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
        'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
        'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte',
        'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington',
        'Boston', 'El Paso', 'Detroit', 'Nashville', 'Portland',
        'Las Vegas', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee',
        'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Kansas City',
        'Atlanta', 'Miami', 'Raleigh', 'Omaha', 'Minneapolis',
        'Cleveland', 'Orlando', 'St. Louis', 'Pittsburgh', 'Cincinnati',
        'Salt Lake City', 'Richmond', 'Hartford', 'New Orleans', 'Buffalo',
        'Birmingham', 'Anchorage', 'Honolulu', 'Madison', 'Des Moines',

        // Fictional cities (anime + Marvel)
        'Pallet Town',        // Pokémon
        'Cerulean City',      // Pokémon
        'Pewter City',        // Pokémon
        'Konoha',             // Naruto
        'Sunagakure',         // Naruto
        'Kirigakure',         // Naruto
        'Konohagakure',       // Naruto
        'Latveria City',      // Marvel (Doctor Doom’s country capital)
        'Wakanda City',       // Marvel (Black Panther’s homeland capital)
        'Asgard City',        // Marvel (Thor’s realm, stylized as a city)
        'Genosha',            // Marvel (mutant nation)
        'Xandar',             // Marvel (Guardians of the Galaxy)
        'Knowhere',           // Marvel (cosmic hub)
        'Westview',           // Marvel (WandaVision town)
        'Hell’s Kitchen',     // Marvel (Daredevil’s NYC neighborhood, stylized as city)
    ];
    const randomstate = ['NY', 'CA', 'IL', 'TX', 'AZ', 'PA', 'TX', 'CA', 'TX', 'CA'];
    const randompostalCode = ['10001', '90001', '60601', '77001', '85001', '19101', '78001', '92001', '75001', '95001'];
    const randomcountry = ['USA'];

    const types = ['Customer', 'Investor', 'Partner', 'Reseller'];
    const industries = ['Software', 'Banking', 'Retail', 'Education', 'Healthcare', 'Manufacturing'];

    const street = randomstreet[Math.floor(Math.random() * randomstreet.length)];
    const city = randomcity[Math.floor(Math.random() * randomcity.length)];
    const state = randomstate[Math.floor(Math.random() * randomstate.length)];
    const postalCode = randompostalCode[Math.floor(Math.random() * randompostalCode.length)];
    const country = randomcountry[Math.floor(Math.random() * randomcountry.length)];
    const name = `${randomPrefix} ${randomSuffix}`;
    const email = `${randomPrefix.toLowerCase().replace(/\s/g, '')}.${uniqueId}@example.com`;
    const domains = ['.com', '.co.in', '.co.us', '.net', '.org', '.io', '.tech'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const formattedName = name.trim().toLowerCase().split(/\s+/).join('.');
    const website = `www.${formattedName}${randomDomain}`;
    const phoneNumber = `${Math.floor(1000000000 + Math.random() * 9000000000)}`;

    const type = types[Math.floor(Math.random() * types.length)];
    const industry = industries[Math.floor(Math.random() * industries.length)];

    return {
        name,
        email,
        website,
        phoneNumber,
        street,
        city,
        state,
        postalCode,
        country,
        type,
        industry
    };
}
