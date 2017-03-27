var State = {}; // <-- this is state. simple.


////////////////////////////////////////////////////////////////////////////////////////////////////

const namesContainer = document.getElementById('namesContainer');

function onStateUpdate() {
    // Clear the existing list.
    namesContainer.innerHTML = '';

    if (State.names) {
        State.names.forEach(addListItem);
    }
}

function addListItem(text) {
    const nameElement = document.createElement('li');

    nameElement.textContent = text;

    namesContainer.appendChild(nameElement);
}
