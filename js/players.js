// function selectPlayers(players) {
//     const selectedPlayersList = document.getElementById('list-1');
//     const li1 = document.createElement('li');
//     li1.innerText = players;
//     selectedPlayersList.appendChild(li1);
//     const li2 = document.createElement('li');
//     li1.innerText = players;
//     selectedPlayersList.appendChild(li2);
//     const li3 = document.createElement('li');
//     li1.innerText = players;
//     selectedPlayersList.appendChild(li3);

// }

// function selectedPlayers(players) {
//     const orderedList1 = document.getElementById('list-1');
//     orderedList1.innerText = players;
//     return;
// }
// function selectedPlayers2(players) {
//     const orderedList2 = document.getElementById('list-2');
//     orderedList2.innerText = players;
//     return
// }
// function selectedPlayers3(players) {
//     const orderedList3 = document.getElementById('list-3');
//     orderedList3.innerText = players;
// }

function players(player) {
    const playerNameElement = document.getElementById(player);
    const newPlayerName = playerNameElement.innerText;

    const nameListContainer = document.getElementById('selected-list');
    const p = document.createElement('p');
    p.innerText = newPlayerName;
    nameListContainer.appendChild(p);
}