
function players(player) {

    const nameListContainer = document.getElementById('selected-list');
    const playerNameElement = document.getElementById(player);
    const newPlayerName = playerNameElement.innerText;

    const nameListContainerNode = document.querySelector('#selected-list');
    if (nameListContainerNode.childNodes.length > 5) {
        alert('You can not select more than 5 players!');
        return players();
    };

    const li = document.createElement('li');
    li.innerText = newPlayerName;
    li.classList.add('item');
    nameListContainer.appendChild(li);
}


