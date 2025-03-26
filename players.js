function toggleContactForm() {
    const formBubble = document.getElementById('contactFormBubble');
    formBubble.style.display = (formBubble.style.display === 'block') ? 'none' : 'block';
}


const playerData = {
    player1: {
        name: 'Βασίλης Χασαρής',
        position: 'Τερματοφύλακας',
        age: 19,
        matches: 120,
        assists: 2,
        cleanSheets: 60,
        saves: 325,
        image: 'img/mpotis-a (1).png',
        hoverImage: 'img/Mpotis-PANIGIRIKO.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player2: {
        name: 'Kylie Cox (Sketch)',
        position: 'Τερματοφύλακας',
        age: 25,
        matches: 30,
        goals: 0,
        assists: 0,
        xgoals: 0,
        cleanSheets: 4,
        saves: 20,
        image: 'img/sketch1.png',
        hoverImage: 'img/sketch2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player3: {
        name: 'Μίλτος Καρασαρίδης',
        position: 'Αμυντικός',
        age: 19,
        matches: 120,
        goals: 22,
        assists: 32,
        xgoals: "0,5",
        cleanSheets: 14,
        image: 'img/miltos1.png',
        hoverImage: 'img/miltos2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player4: {
        name: 'Γιώργος Θεοδωρίδης',
        position: 'Αμυντικός',
        age: 19,
        matches: 120,
        goals: 10,
        assists: 5,
        xgoals: "0,1",
        cleanSheets: 14,
        image: 'img/theo1.png',
        hoverImage: 'img/theo2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    
    },
    player5: {  
        name: 'Νίκος Κωνσταντινίδης',
        position: 'Αμυντικός',
        age: 18,
        matches: 210,
        goals: 30,
        assists: 1,
        xgoals: "1,01",
        cleanSheets: 14,
        image: 'img/nikos1.png',
        hoverImage: 'img/niko2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    
    player6: {
        name: 'Ink Kuku',
        position: 'Αμυντικός',
        age: 32,
        matches: 120,
        goals: 2,
        assists: 1,
        xgoals: "0,02",
        cleanSheets: 14,
        image: 'img/ink1.png',
        hoverImage: 'img/ink2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player7: {
        name: 'Λίγδας',
        position: 'Μέσος',
        age: 28,
        matches: 130,
        goals: 44,
        assists: 56,
        xgoals: "1,7",
        cleanSheets: 14,
        image: 'img/ligdas1.png',
        hoverImage: 'img/ligdas2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player8: {
        name: 'Κωσταντίνος Σαριντζιώτης',
        position: 'Επιθετικός-Μέσος',
        age: 21,
        matches: 120,
        goals: 60,
        assists: 70,
        xgoals: "1,1",
        cleanSheets: 14,
        image: 'img/sari1.png',
        hoverImage: 'img/sari2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player9: {
        name: 'Legoman',
        position: 'Μέσος',
        age: 18,
        matches: 120,
        goals: 0,
        assists: 0,
        xgoals: 0,
        cleanSheets: 14,
        image: 'img/lego1.png',
        hoverImage: 'img/lego2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player10: {
        name: 'Δημήτρης Πάππος',
        position: 'Επιθετικός',
        age: 19,
        matches: 120,
        goals: 70,
        assists: 10,
        xgoals: "0,5",
        cleanSheets: 14,
        image: 'img/pap1.png',
        hoverImage: 'img/pap2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player11: {
        name: 'Γιώργος Πολυχρονίδης',
        position: 'Επιθετικός', 
        age: 19,
        matches: 119,
        goals: 100,
        assists: 30,
        xgoals: "1,5",
        cleanSheets: 14,
        image: 'img/mosx1.png',
        hoverImage: 'img/mosx2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player12: {
        name: 'Θανάσης Μελάχρος',
        position: 'Επιθετικός', 
        age: 19,
        matches: 121,
        goals: 125,
        assists: 56,
        xgoals: "2,7",
        cleanSheets: 14,
        image: 'img/melaxro1.png',
        hoverImage: 'img/melaxro2.png'
    },
    player13: {
        name: 'Chris Asmr',
        position: 'Επιθετικός', 
        age: 31,
        matches: 100,
        goals: 62,
        assists: 4,
        xgoals: "1,05",
        cleanSheets: 14,
        image: 'img/chris1.png',
        hoverImage: 'img/chris2.png'
    }
};


    
    function showPlayerInfo(playerId) {
        const player = playerData[playerId];
        if (player) {
            document.getElementById('player-name').innerText = player.name;
            document.getElementById('player-position').innerText = player.position;
            document.getElementById('player-age').innerText = player.age + ' ετών';
            document.getElementById('player-matches').innerText = player.matches;
            
            // Απόκρυψη όλων αρχικά
            document.getElementById('stat-goals').style.display = 'none';
            document.getElementById('stat-assists').style.display = 'none';
            document.getElementById('stat-xgoals').style.display = 'none';
            document.getElementById('stat-clean-sheets').style.display = 'none';
            document.getElementById('stat-saves').style.display = 'none';
    
            if (player.position === 'Τερματοφύλακας') {
                document.getElementById('player-clean-sheets').innerText = player.cleanSheets;
                document.getElementById('player-saves').innerText = player.saves;
                document.getElementById('stat-clean-sheets').style.display = 'list-item';
                document.getElementById('stat-saves').style.display = 'list-item';
            } else {
                document.getElementById('player-goals').innerText = player.goals;
                document.getElementById('player-assists').innerText = player.assists;
                document.getElementById('player-xgoals').innerText = player.xgoals;
                document.getElementById('stat-goals').style.display = 'list-item';
                document.getElementById('stat-assists').style.display = 'list-item';
                document.getElementById('stat-xgoals').style.display = 'list-item';
            }
    
            document.getElementById('player-image').src = player.image;
            document.getElementById('player-hover-image').src = player.hoverImage;
            document.getElementById('player-popup').style.display = 'block';
        }
    }
    
    function closePlayerInfo() {
        document.getElementById('player-popup').style.display = 'none';
    }