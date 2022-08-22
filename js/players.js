
function players(player) {
    const nameListContainer = document.getElementById('selected-list');
    const playerNameElement = document.getElementById(player);
    const newPlayerName = playerNameElement.innerText;

    const li = document.createElement('li');

    li.innerText = newPlayerName;
    li.classList.add('item');
    nameListContainer.appendChild(li);

}

