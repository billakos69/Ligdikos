function toggleContactForm() {
    const formBubble = document.getElementById('contactFormBubble');
    formBubble.style.display = (formBubble.style.display === 'block') ? 'none' : 'block';
}


const playerData = {
    player1: {
        name: 'Γιώργος Παράσχος',
        position: 'Προπονητής',
        age: 72,
        matches: "Θεσσαλονίκη",	
        goals: "Έλληνας ",
        assists: "07/06/2022",
        image: 'img/parasxos1.png',
        hoverImage: 'img/parasxos2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
   
    player3: {
        name: 'Τάκης Λεμονής',
        position: 'Τεχνικός Διευθυντής',
        age: 65,
        matches: "Αθήνα",	
        goals: "Έλληνας ",
        assists: "10/01/2020",
        image: 'img/takis.png',
        hoverImage: 'img/takis1.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },

    player7: {
        name: 'Mikel Arteta',
        position: 'Βοηθός Προπονητή',
        age: 42,
        matches: "Donostia-San Sebastián",
        goals: "Ισπανός",
        assists: "07/06/2022",
        image: 'img/arteta1.png',
        hoverImage: 'img/arteta.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player8: {
        name: 'Joseph Kwame Mintah',
        position: 'Τεχνικός Διευθυντής',
        age: 61,
        matches: "Ναϊρόμπι",
        goals: "Κένυα",
        assists: "10/01/2020",
        image: 'img/nigg.png',
        hoverImage: 'img/nigg1.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },

    player10: {
        name: 'Johnny Sins',
        position: 'Φυσιοθεραπευτής',
        age: 46,
        matches: "Πίτσμπουργκ, Πενσυλβάνια ",
        goals: "Αμερικανός",
        assists: "10/01/2020",
        image: 'img/jonny.png',
        hoverImage: 'img/jonny2.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    },
    player11: {
        name: 'Jamie Nig Black',
        position: 'Φυσιοθεραπευτής',
        age: 28,
        matches: "Αμπούτζα",
        goals: "Νιγηρία",
        assists:"10/01/2020",
        image: 'img/black.png',
        hoverImage: 'img/black1.png' // Εναλλακτική εικόνα όταν περνάει το ποντίκι
    }
};

function showPlayerInfo(playerId) {
    const player = playerData[playerId];
    if (player) {
        document.getElementById('player-name').innerText = player.name;
        document.getElementById('player-position').innerText = player.position;
        document.getElementById('player-age').innerText = player.age + ' ετών';
        document.getElementById('player-matches').innerText = player.matches;
        document.getElementById('player-goals').innerText = player.goals;
        document.getElementById('player-assists').innerText = player.assists;

        document.getElementById('player-image').src = player.image;
        document.getElementById('player-hover-image').src = player.hoverImage;

        document.getElementById('player-popup').style.display = 'block';
    }
}

function closePlayerInfo() {
    document.getElementById('player-popup').style.display = 'none';
}

