function toggleContactForm() {
    const formBubble = document.getElementById('contactFormBubble');
    formBubble.style.display = (formBubble.style.display === 'block') ? 'none' : 'block';
}

// Sample match stats data (in a real scenario, this would come from a server)
const matchStats = {
    1: {
        date: "March 1, 2025",
        teams: [
            { name: "Ligdikos", logo: "img/ligdikos.png" },
            { name: "OGE", logo: "img/oge.png" }
        ],
        score: "2-1"
    },
    2: {
        date: "February 25, 2025",
        teams: [
            { name: "Mrpousko", logo: "img/mprousko.png" },
            { name: "Ligdikos", logo: "img/ligdikos.png" }
        ],
        score: "1-1"
    }
};

const matchData = {
    1: {
        possessionHome: 51, possessionAway: 49,
        bigchancesHome: 6, bigchancesAway: 2,
        totalshotsHome: 18, totalshotsAway: 8,
        goalkeeperSavesHome: 5, goalkeeperSavesAway: 3,
        cornerKicksHome: 2, cornerKicksAway: 3,
        foulsHome: 15, foulsAway: 18,
        passesHome: 371, passesAway: 366,
        tacklesHome: 21, tacklesAway: 21,
        freekicksHome: 18, freekicksAway: 15,
        yellowCardsHome: 2, yellowCardsAway: 2,
    },
    2: { // Εδώ έλειπε το κόμμα στο αρχικό σου
        possessionHome: 50, possessionAway: 50,
        bigchancesHome: 1, bigchancesAway: 4,
        totalshotsHome: 6, totalshotsAway: 6,
        goalkeeperSavesHome: 3, goalkeeperSavesAway: 1,
        cornerKicksHome: 1, cornerKicksAway: 1,
        foulsHome: 15, foulsAway: 10,
        passesHome: 331, passesAway: 366,
        tacklesHome: 15, tacklesAway: 21,
        freekicksHome: 10, freekicksAway: 12,
        yellowCardsHome: 2, yellowCardsAway: 4,
    }
};

function showMatchStats(matchId) {
    const stats = matchData[matchId];
    const match = matchStats[matchId];
    const statsContainer = document.getElementById('match-stats');

    if (!stats || !match) {
        statsContainer.innerHTML = `<p>Stats unavailable for this match.</p>`;
        document.getElementById('match-stats-modal').style.display = 'block';
        return;
    }

    const statRow = (label, homeValue, awayValue) => {
        const total = homeValue + awayValue;
        const homePercent = (total === 0) ? 50 : (homeValue / total) * 100;
        const awayPercent = (total === 0) ? 50 : (awayValue / total) * 100;
        return `
            <div class="stat">
                <span>${label}</span>
                <div class="progress-bar">
                    <div class="progress home" style="width: ${homePercent}%;">${homeValue}</div>
                    <div class="progress away" style="width: ${awayPercent}%;">${awayValue}</div>
                </div>
            </div>`;
    };

    statsContainer.innerHTML = `
        <p><strong>Date:</strong> ${match.date}</p>
        <p><strong>Match:</strong>
            <img src="${match.teams[0].logo}" class="team-logo"> ${match.teams[0].name} 
            vs 
            <img src="${match.teams[1].logo}" class="team-logo"> ${match.teams[1].name}
        </p>
        <p><strong>Score:</strong> ${match.score}</p>
        ${statRow('Ball possession', stats.possessionHome, stats.possessionAway)}
        ${statRow('Big chances', stats.bigchancesHome || 0, stats.bigchancesAway || 0)}
        ${statRow('Total shots', stats.totalshotsHome || 0, stats.totalshotsAway || 0)}
        ${statRow('Goalkeeper saves', stats.goalkeeperSavesHome || 0, stats.goalkeeperSavesAway || 0)}
        ${statRow('Corner kicks', stats.cornerKicksHome || 0, stats.cornerKicksAway || 0)}
        ${statRow('Fouls', stats.foulsHome || 0, stats.foulsAway || 0)}
        ${statRow('Passes', stats.passesHome || 0, stats.passesAway || 0)}
        ${statRow('Tackles', stats.tacklesHome || 0, stats.tacklesAway || 0)}
        ${statRow('Free kicks', stats.freekicksHome || 0, stats.freekicksAway || 0)}
        ${statRow('Yellow cards', stats.yellowCardsHome || 0, stats.yellowCardsAway || 0)}
    `;

    document.getElementById('match-stats-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('match-stats-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('match-stats-modal');
    if (event.target == modal) {
        closeModal();
    }
};
